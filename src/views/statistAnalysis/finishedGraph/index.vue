<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据工序名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>


    </div>
  </div>


<div class="">
  <div class="" style="height:40px;padding-top: 2%;">
      <line-chart :chartData="input" v-on:childByValue="childByValue"></line-chart>
  </div>
</div>

</div>
</template>

<script>
import mixin from '@/mixins/list' // 引入
import {
  getUserList,
  addUser,
  saveUser,
  delUser
} from '@/api/user'

import lineChart from './components/lineChart'

export default {
  mixins: [mixin], // 使用mixins
    components: {
      lineChart,
    },
  data() {
    return {
      input: {
        objName: '',
        userType: '',
        status: '',
      },
      list: [{
        "id": "1",
        "productName": "下料",
        "production": "质检人员1",
        "qualified": 1,
        "productType": 1,
        "productionDes": "工序描述",
        "time": "2018-10-22"

      }, {
        "id": "1",
        "productName": "钢筋笼制作",
        "production": "质检人员2",
        "qualified": 1,
        "productType": 1,
        "productionDes": "工序描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "管模拼接",
        "production": "质检人员3",
        "qualified": 0,
        "productType": 2,
        "productionDes": "工序描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "清模、涂刷脱模剂",
        "production": "质检人员4",
        "qualified": 1,
        "productType": 2,
        "productionDes": "工序描述",
        "time": "2018-10-22"
      }]
    }
  },
  created() {

  },
  async mounted() {
    this.loading = false
    // this.loadPageList()
    this.userType = window.sessionStorage.getItem('userType')
  },
  computed: {},
  methods: {

    childByValue (childValue) {
      // childValue就是子组件传过来的值
      this.allMeeting = childValue
    },
    async RsetDefPwd(objData) {
      this.$confirm('此操作将密码重置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let obj = {}
        obj.id = objData.id
        let {
          data,
          success,
          message
        } = await setDefPwd(obj)
        if (success) {
          this.$message({
            type: 'success',
            message: '重置成功！'
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消重置'
        });
      });

    },
    async loadPageList() {
      if (this.input) {
        this.listQuery.objName = this.input.objName
        this.listQuery.userType = this.input.userType
        this.listQuery.status = this.input.status
      } else {
        this.listQuery.objName = ''
      }
      let {
        data,
        success
      } = await getUserList(this.listQuery)
      if (success) {
        this.list = data.list
        // this.total = data.total
        this.loading = false
      }
    },

    async handleCreate() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.dialogadd = true
      this.dialogsave = false
      this.obj = {
        productName: '',
        production: '',
        qualified: '',
        productType: '',
        productionDes: ""
      }
    },


    async addCreate(obj) {
      this.dialogFormVisible = false

      this.list.push(this.obj)
      // if (!this.validata.validaManageUser(obj)) return
      // let data = await addUser(obj)
      // if (data.code === 200) {
      //   this.loadPageList()
      //   this.dialogFormVisible = false
      // } else {
      //   this.$message({
      //     message: data.message,
      //     type: 'success'
      //   });
      // }
    },

    async saveCreate(obj) {
      this.dialogFormVisible = false
      // if (!this.validata.validaManageUser(obj)) return
      // let data = await saveUser(obj)
      // if (data.code === 200) {
      //   this.obj.productionDes = this.obj.newPassword
      //   this.dialogFormVisible = false
      // } else {
      //   this.$message({
      //     message: data.message,
      //     type: 'success'
      //   });
      // }
    },


    async handleEdit(data, type) {
      if (type === 'edit') {
        this.obj = data
        this.dialogStatus = 'update'
        this.dialogsave = true
        this.dialogadd = false
        this.dialogFormVisible = true
      } else if (type === 'del') {
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          // let del = await delUser(data.id)
          this.list.splice(this.list.indexOf(data), 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          // this.splice(data.id, 1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    async handleShow(data, type) {
      this.obj = data
      if (data.productType == 1) {
        this.tableName = 'PHC管桩工序生产记录及检验表(钢筋、模板)'
      } else {
        this.tableName = 'PHC管桩工序生产记录及检验表(砼浇筑、张拉、离心、养护、放松、脱模)'
      }
      this.dialogFormTable = true
    },

  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
