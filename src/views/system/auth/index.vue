<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">

      <el-button v-show="auth.readAuth" style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button v-show="auth.createAuth" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-circle-plus-outline">一级菜单</el-button>

    </div>
  </div>

  <tree-table :data="list" :evalFunc="func" :expandAll="expandAll" border style="text-align: center;">
    <!-- <el-table-column type="index" width="50" align="center" label="ID">
    </el-table-column> -->
    <!-- <el-table-column align="center" label="菜单名称">
      <template slot-scope="scope">
        <span :style="{'margin-left':(scope.row._level-1) * 40 + 'px'}">

          <span v-show="scope.row._level>1"> <i class="iconfont icon-jiantouarrow514 rotate" style="font-weight: bold;"></i> &nbsp;</span>{{ scope.row.label }}

        </span>
      </template>
    </el-table-column> -->

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
    </-table-column> -->

    <el-table-column align="center" label="排序">
      <template slot-scope="scope">
        <span>
          {{ scope.row.sort}}</span>
      </template>
    </el-table-column>
    <!-- <el-table-column align="center" label="描述">
      <template slot-scope="scope">
        <span>
          {{ scope.row.des}}</span>
      </template> -->
    </el-table-column>


    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button v-show="!scope.row.leaf" size="small" @click="handleCreate(scope.row,'add')" type="" class="el-icon-plus colorblue borderblue"></el-button>
        <button v-show="scope.row.leaf" type="" style="border:none;width:34px;margin: 0;visibility: hidden;"></button>
        <el-button size="small" @click="handleEdit(scope.row,'edit')" type="" class="el-icon-edit colorblue borderblue"></el-button>
        <el-button size="small" @click="handleEdit(scope.row,'del')" type="" class="el-icon-delete colorred borderred" style="margin:0"></el-button>

      </template>
    </el-table-column>
  </tree-table>




  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%" top='5%'>

    <el-form class="" label-width="20%" style="text-align:left">

      <el-row :gutter="24">
        <el-form-item label="菜单路径">
          <el-input v-model="obj.menuUrl" placeholder="请输入菜单名称" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="菜单名称">
          <el-input v-model="obj.label" placeholder="请输入菜单名称" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="obj.sort" placeholder="请输入排序" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="obj.icon" placeholder="请输入图标" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input v-model="obj.des" placeholder="请输入描述" style="width:80%"></el-input>
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
import treeTable from '@/components/TreeTable'
import treeToArray from './customEval'
import {
  getAllAuthList,
  addAuth,
  editAuth,
  delAuth
} from '@/api/auth'



export default {
  mixins: [mixin], // 使用mixins
  components: {
    treeTable
  },
  data() {
    return {
      func: treeToArray,
      expandAll: true,
      input: {
        objName: '',
        userType: '',
        status: '',
      },
      obj: {
        menuUrl: '',
        label: '',
        sort: '',
        icon: '',
        parentAuthId: 0,
        des: '',
        children:[]
      }

    }
  },
  created() {

  },
  async mounted() {
    this.auth = this.$store.getters.auth
    console.log(this.auth)

    this.loading = false
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
      } = await getAllAuthList(this.listQuery)
      if (success) {
        this.list = data
        // this.total = data.total
        // this.loading = false
      }
    },

    async handleCreate(obj) {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.dialogadd = true
      this.dialogsave = false
      this.obj = {
        menuUrl: '',
        label: '',
        sort: '',
        icon: '',
        parentAuthId: obj.id || 0,
        des: "",
        children:[]
      }
    },


    async addCreate(obj) {
      this.dialogFormVisible = false

      this.list.push(this.obj)
      // if (!this.validata.validaManageUser(obj)) return
      let {
        code,
        data,
        success
      } = await addAuth(obj)
      if (success) {
        this.loadPageList()
        this.dialogFormVisible = false
      }
    },

    async saveCreate(obj) {
      delete obj.auth
      obj.children =[]
      delete obj.parent
      // if (!this.validata.validaManageUser(obj)) return
      let {
        code,
        data,
        success
      } = await editAuth(obj)
      if (success) {
        this.dialogFormVisible = false
      }
    },


    async handleEdit(data, type) {
      if (type === 'edit') {
        this.obj = this.deepCopy(data)
        this.dialogStatus = 'update'
        this.dialogsave = true
        this.dialogadd = false
        this.dialogFormVisible = true
      } else if (type === 'del') {
          delete data.auth
          data.children =[]
          delete data.parent
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let del = await delAuth(data.id)
          this.loadPageList()
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

      this.dialogFormTable = true
    },

  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
.rotate:before {
    transform: rotate(180deg);
    display: inline-block;
    padding-top: 3px;
}
</style>
