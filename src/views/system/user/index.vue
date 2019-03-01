<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据名称、用户名 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加用户</el-button>

    </div>
  </div>

  <el-table v-loading="loading" class="tableH" :data="list" border style="margin-top:20px;width:100%;font-size:12px;">

    <el-table-column align="center" label="客户代码">
      <template slot-scope="scope">
        <span>{{ scope.row.code }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="用户名">
      <template slot-scope="scope">
        <span>{{ scope.row.userName }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="部门">
      <template slot-scope="scope">
        <span>{{ scope.row.departName }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="手机号">
      <template slot-scope="scope">
        <span>{{ scope.row.iphoneNum }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="联系地址">
      <template slot-scope="scope">
        <span>{{ scope.row.address }}</span>
      </template>
    </el-table-column>


    <!-- <el-table-column align="center" label="用户类别">
      <template slot-scope="scope">
                    <span v-if="scope.row.userType =='1'">
                        个人/专家</span>
                  <span v-if="scope.row.userType =='2'">
                          企业</span>
                    <span v-if="scope.row.userType =='3'">
                      服务机构  </span>
                      <span v-if="scope.row.userType =='4'">
                    高校院校</span>
                    <span v-if="scope.row.userType =='5'">
                    军方</span>
                </template>
    </el-table-column> -->


    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <div v-show="scope.row.userName != 'admin'">
          <el-button size="small" @click="handleEdit(scope.row,'reset')" type="" class=" colorblue borderblue">重置密码</el-button>
          <el-button size="small" @click="handleEdit(scope.row,'edit')" type="" class="el-icon-edit colorblue borderblue"></el-button>
          <el-button size="small" @click="handleEdit(scope.row,'del')" type="" class="el-icon-delete colorred borderred"></el-button>
        </div>
      </template>
    </el-table-column>

  </el-table>

  <div class="pagination-container pageH" style="padding-top:20px">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
  </div>


  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%" top='5%'>

    <el-form class="" label-width="20%" style="text-align:left">

      <el-row :gutter="24">

        <el-form-item label="客户代码">
          <el-input v-model="obj.code" placeholder="请输入客户代码" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="店铺名称">
          <el-input v-model="obj.shopName" placeholder="请输入店铺名称" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="obj.userName" placeholder="请输入用户名" style="width:80%"></el-input>
        </el-form-item>


        <el-form-item label="部门">
          <el-select v-model="obj.depart" style="width:150px" placeholder="请选择">
            <el-option v-for="x in departData" :label=x.name :key=x.id :value=x.id>
            </el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="地址">
          <el-input v-model="obj.address" placeholder="请输入地址" style="width:80%"></el-input>
        </el-form-item>


        <el-form-item label="手机号">
          <el-input v-model="obj.iphoneNum" placeholder="请输入手机号" style="width:80%"></el-input>
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
  resetPwdFac,
  delUser
} from '@/api/user'


import {
  getdepartAllList,
} from '@/api/depart'

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
        code: '',
        shopName: '',
        userName: '',
        iphoneNum: '',
        address: '',
        depart: '',
      },
      departData:[]
    }
  },
  created() {

  },
  async mounted() {
    this.listLoading = false
    this.loadPageList()
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

    async loaddepartAll() {
      let {
        data,
        success,
        message
      } = await getdepartAllList()
      if (success) {
        this.departData = data.list

      }
    },
    async handleCreate() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.dialogadd = true
      this.dialogsave = false
      this.obj = {
        code: '',
        shopName: '',
        userName: '',
        iphoneNum: '',
        address: '',
        depart: '',
      }
      this.loaddepartAll()
    },


    async addCreate(obj) {
      // if (!this.validata.validaManageUser(obj)) return
      let data = await addUser(obj)
      if (data.code === 200) {
        this.loadPageList()
        this.dialogFormVisible = false
      }
    },

    async saveCreate(obj) {
      // if (!this.validata.validaManageUser(obj)) return
      let data = await saveUser(obj)
      if (data.code === 200) {
        this.loadPageList()
        this.dialogFormVisible = false
      } else {
        this.$message({
          message: data.message,
          type: 'success'
        });
      }
    },


    async handleEdit(data, type) {
      if (type === 'edit') {
        this.obj = data
        this.dialogStatus = 'update'
        this.dialogsave = true
        this.dialogadd = false
        this.dialogFormVisible = true
        this.loaddepartAll()
      } else if (type === 'del') {
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let del = await delUser(data.id)
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
      } else if (type === 'reset') {
        this.$confirm('此操作将重置密码, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let reset = await resetPwdFac(data)
          // if(reset.code == 200){
          //   this.$message({
          //     type: 'info',
          //     message: '重置成功'
          //   });
          // }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    },


  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
