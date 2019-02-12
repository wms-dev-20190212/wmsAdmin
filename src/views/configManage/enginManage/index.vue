<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据工程名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加工程</el-button>

    </div>
  </div>

  <el-table v-loading="loading" class="tableH" :data="list" border style="margin-top:20px;width:100%;font-size:12px;">
    <el-table-column type="index" width="50" align="center" label="ID">
    </el-table-column>
    <el-table-column align="center" label="工程名称">
      <template slot-scope="scope">
        <span>{{ scope.row.productName }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="描述">
      <template slot-scope="scope">
        <span>
          {{ scope.row.productionDes}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="负责人">
      <template slot-scope="scope">
        <span>
          {{ scope.row.production}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="联系方式">
      <template slot-scope="scope">
        <span>
          {{ scope.row.telphone}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button size="small" @click="handleEdit(scope.row,'edit')" type="" class="el-icon-edit colorblue borderblue"></el-button>
        <el-button size="small" @click="handleEdit(scope.row,'del')" type="" class="el-icon-delete colorred borderred"></el-button>

      </template>
    </el-table-column>

  </el-table>

  <div class="pagination-container pageH" style="padding-top:20px">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
  </div>


  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%" top='5%'>

    <el-form class="" label-width="20%" style="text-align:left">

      <el-row :gutter="24">

        <el-form-item label="工程名称">
          <el-input v-model="obj.productName" placeholder="请输入工程名称" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="obj.productionDes" placeholder="请输入描述" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="负责人">
          <el-input v-model="obj.production" placeholder="请输入负责人" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="obj.telphone" placeholder="请输入联系方式" style="width:80%"></el-input>
        </el-form-item>

      </el-row>


    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" v-if="dialogadd == true" @click="addCreate(obj)">添加</el-button>
      <el-button type="primary" v-if="dialogsave == true" @click="saveCreate(obj)">修改</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
    </span>
  </el-dialog>



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



export default {
  mixins: [mixin], // 使用mixins
  data() {
    return {
      input: {
        objName: '',
        userType: '',
        status: '',
      },
      obj: {
        productName: '',
        production: '',
        telphone: '',
        productType: '',
        productionDes: '',
      },
      list: [{
        "id": "1",
        "productName": "下料",
        "production": "负责人1",
        "telphone": 13112342345,
        "productType": 1,
        "productionDes": "工程描述",
        "time": "2018-10-22"

      }, {
        "id": "1",
        "productName": "钢筋笼制作",
        "production": "负责人2",
        "telphone": 13112342345,
        "productType": 1,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "管模拼接",
        "production": "负责人3",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "清模、涂刷脱模剂",
        "production": "负责人4",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "端板监测、安装钢筋笼入膜",
        "production": "负责人5",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "张拉环，反力板安装",
        "production": "负责人6",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "浇筑",
        "production": "负责人6",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "合模",
        "production": "负责人6",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "张拉",
        "production": "负责人6",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
        "time": "2018-10-22"
      }, {
        "id": "1",
        "productName": "离心",
        "production": "负责人6",
        "telphone": 13112342345,
        "productType": 2,
        "productionDes": "工程描述",
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
        telphone: '',
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
        this.tableName = 'PHC管桩工程生产记录及检验表(钢筋、模板)'
      } else {
        this.tableName = 'PHC管桩工程生产记录及检验表(砼浇筑、张拉、离心、养护、放松、脱模)'
      }
      this.dialogFormTable = true
    },

  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
