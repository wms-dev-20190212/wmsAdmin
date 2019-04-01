<template>
<scroll-bar>

  <div class="navbar-header" style="display:flex">
    <div id="mainLogo" class="" style="flex:1;text-align:center;height:57px;padding: 5px;color:#fff">
      <h1 v-show='!isCollapse' style="margin:0;line-height:50px;font-style: oblique;">W M S</h1>
      <h1 v-show='isCollapse' style="margin:0;line-height:50px;font-style: oblique;">W</h1>
    </div>
  </div>
  <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse" background-color="#252a2f" text-color="#fff" active-text-color="#000">
    <sidebar-item :nodes="$router.options.routes"></sidebar-item>
  </el-menu>
</scroll-bar>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  data() {
    return {
      nodes: this.$router.options.routes,
    }
  },
  components: {
    SidebarItem,
    ScrollBar
  },
  mounted() {},
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created() {
    //这里没有直接使用this.$router.options.routes，是因为addRoute的路由规则，在这里this.$router.options.routes获取不到
    //有兴趣的可以看一下源码，是为什么获取不到，但是却又有规则了
    //另外在开发的时候，可能由于是热部署，也会不断重复的给nodes添加元素，造成导航条有重复的，简单解决，可以设置一个开关
    let isLoadNodes = sessionStorage.getItem('isLoadNodes')
    if (!isLoadNodes) {
      let data = JSON.parse(window.localStorage.getItem('user'))
      this.nodes.push(...data)
      console.log(this.nodes)
      sessionStorage.setItem('isLoadNodes', 'true')
    }
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
    height: 100%;
}
.navbar-header {
    height: 57px;
    background: #004696;
    text-align: center;
}
.logo {
    width: 10%;
    display: inline;
}
</style>
