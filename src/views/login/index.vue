

<template>
<div class="login-container" style="background: #252a2f">
  <div class="content" style="top: 50%;">


    <div class="right-content">
      <h3 style="color:#FFF;text-align:center">wms管理系统</h3>
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>

        <div class="item">

          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" :label-position="labelPosition" label-width="100px">
            <el-form-item label="">
              <el-input v-model="loginForm.userName" placeholder="请输入用户名">
                <i slot="prefix" class="el-input__icon el-icon-date"></i></el-input>
            </el-form-item>


            <el-form-item label="" style="margin: 0;">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码">

                <i slot="prefix" class="el-input__icon el-icon-date"></i></el-input>
              </el-input>
            </el-form-item>

            <el-form-item label="" style="margin: 0;">
              <el-checkbox v-model="loginForm.isAdmin" style="float: left;">管理员</el-checkbox>
            </el-form-item>

            <el-form-item>
              <el-button @keyup.enter="handleLogin" type="primary" @click.native.prevent="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>

          </el-tabs>
        </div>

      </el-card>
    </div>

  </div>
</div>
</template>
<script>
import MenuUtils from '@/views/MenuUtils'

import menuData from '@/api/menu.json'

// import {
//   getTreeList,
// } from '@/api/login'

var routers = []
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {

      callback()
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      login_method: 'first', // 登录方式
      loginVerify: { // 普通登录
        phone: '',
        number: ''
      },
      loginForm: {
        // userName: '725223570@qq.com',
        // password: '123456',
        userName: 'admin',
        password: 'admin',
        // isAdmin: true,
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePass
        }]
      },
      loading: false,
      pwdType: 'password',
      callbackUrl: ''
    }
  },
  created() {
    // this.keyupSubmit()

  },
  mounted() {

    if (this.$route.query.callback) {
      if (this.$route.query.type) {
        this.callbackUrl = this.$route.query.callback + '&type=' + this.$route.query.type
      } else {
        this.callbackUrl = this.$route.query.callback
      }

    }
    this.$store.dispatch('LogOut')
  },
  methods: {
    // keyupSubmit() {
    //   document.onkeydown = e => {
    //     let _key = window.event.keyCode;
    //     if (_key === 13) {
    //       this.handleLogin()
    //     }
    //   }
    // },
    login(data) {
      window.localStorage.setItem('user', JSON.stringify(data))
      MenuUtils(routers, data)
    },
    forload(treeData) {
      // let userType = window.sessionStorage.getItem('userType')
      for (let i = 0; i < treeData.length; i++) {
        if (treeData[i].children && treeData[i].children.length > 0 && treeData[i].leaf == false) { //有下级
          treeData[i].meta = {
            title: treeData[i].label,
            icon: treeData[i].icon
          }
          treeData[i].name = treeData[i].label
          treeData[i].path = '/' + treeData[i].menuUrl
          treeData[i].leaf = false
          treeData[i].parentComponent = ''
          treeData[i].component = 'layout'
          treeData[i].redirect = '/' + treeData[i].menuUrl + '/' + treeData[i].children[0].menuUrl + ''
          let childrenData = treeData[i].children;
          for (let x in childrenData) {
            childrenData[x].parentComponent = '/' + treeData[i].menuUrl
          }
          // if (userType != '0' && userType != '101' && treeData[i].menuUrl != 'dashboard') treeData[i].hidden = true

        } else if (treeData[i].leaf == true) {
          treeData[i].meta = {
            title: treeData[i].label,
            icon: treeData[i].icon
          }
          treeData[i].name = treeData[i].label
          treeData[i].path = treeData[i].menuUrl
          treeData[i].leaf = true
          // if (userType != '0' && userType != '101') treeData[i].hidden = true
          treeData[i].component = treeData[i].menuUrl
          treeData[i].children = []
        }
        if (treeData[i].children) {
          treeData[i].children = this.forload(treeData[i].children)
        } else {
          continue
        }
      }
      return treeData
    },
    handleLogin() {
      this.loading = true
      let token = window.sessionStorage.getItem('token') //过滤 仅限第一次获取菜单
      this.$store.dispatch('Login', this.loginForm).then(async () => {
        if (this.$store.getters.token && this.$store.getters.token != undefined && this.$store.getters.token != '') {
          window.localStorage.setItem('user', JSON.stringify('true')) //没有进行菜单获取时的进入权限

          if (!token && this.$store.getters.token != undefined) {
            // let menuData = await getTreeList()
            var treeData = menuData.data
            window.sessionStorage.setItem('treeData', JSON.stringify(treeData)) //必须传入 路由进行渲染
          }

          if (treeData) {
            treeData = this.forload(treeData)
            this.login(treeData)
            this.$router.addRoutes(routers)
          }
          this.$router.push({
            path: '/'
          })

        }

      }).catch(() => {
        this.loading = false
      })

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
.login-container {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-size: 20px;

    .content {
        width: 986px;
        height: 518px;
        position: absolute;
        left: 50%;
        z-index: 2;
        // border:1px solid #ccc;
        transform: translate(-50%,-50%);
        .left-content,
        .right-content {
            width: 450px;
            height: 450px;
            // border: 2px dashed  #CBBD63;
            // background-color: rgba(225, 255, 255, 0.1);
            -webkit-filter: drop-shadow(2px 2px 2px #c3c3c3);
            filter: drop-shadow(2px 2px 2px #c3c3c3);

        }

        .right-content {
            position: absolute;
            left: 20%;
            z-index: 3;

            .el-card__body {
                padding: 10px 70px;
            }
            .box-card {
                .clearfix {}
                .item {
                    position: relative;
                    // tabs
                    .el-tabs__nav-wrap {
                        width: 180px;
                        padding-left: 12px;
                        overflow: hidden;
                    }
                    // lable
                    .el-form-item__label {
                        display: block;
                        margin-left: 60px;
                        height: 36px;
                        // float: left;
                        color: #9ba3af;
                    }
                    .resetPaw {
                        font-size: 14px;
                        color: #9ba3af;
                        float: right;
                        margin-right: 60px;
                        cursor: pointer;
                    }
                    // input-box
                    .el-form-item__content {
                        .el-button {
                            width: 100px;
                        }
                    }
                    .toLogin {
                        display: inline-block;
                        margin-left: 20px;
                        color: darkslateblue;
                        cursor: pointer;
                        font-size: 14px;
                    }
                    .loginQuick {
                        margin-top: 30px;
                        p {
                            // display: block;
                            height: 24px;
                            line-height: 24px;
                            color: #9ba3af;
                            font-size: 14px;

                            &::after,
                            &::before {
                                content: "";
                                position: absolute;
                                height: 1px;
                                width: 20%;
                                background-color: #eee;
                                margin-top: 10px;
                                // box-shadow: 0px 0px 1px 0.2px #ccc;
                                // display: block;
                                // top: 50%;left: 50%;
                                // transform: translate(-50%,-50%)

                            }
                            &::before {
                                left: 20%;
                            }
                            &::after {
                                right: 20%;
                            }
                            span {
                                display: inline-block;
                                margin-top: -10px;
                            }
                        }
                        .quick-content {
                            ul {
                                list-style: none;
                                li {
                                    width: 50px;
                                    height: 50px;
                                    display: inline-block;
                                    cursor: pointer;
                                    img {
                                        width: 40px;
                                        height: 40px;
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }

    }
}
</style>
