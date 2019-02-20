<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据仓库名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加仓库</el-button>

    </div>
  </div>

  <el-table v-loading="loading" class="tableH" :data="list" border style="margin-top:20px;width:100%;font-size:12px;">
    <el-table-column type="index" width="50" align="center" label="ID">
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
    </-table-column> -->
    <el-table-column align="center" label="仓库名称">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="联系方式">
      <template slot-scope="scope">
        <span>
          {{ scope.row.phone}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="地址">
      <template slot-scope="scope">
        <span>
          {{ scope.row.address}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="负责人">
      <template slot-scope="scope">
        <span>
          {{ scope.row.userName}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="备注">
      <template slot-scope="scope">
        <span>
          {{ scope.row.remark}}</span>
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

        <el-form-item label="仓库">
          <el-input v-model="obj.name" placeholder="请输入仓库" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="obj.phone" placeholder="请输入联系方式" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="obj.address" placeholder="请输入地址" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-select v-model="obj.fuzeren" style="width:150px" placeholder="请选择">
            <el-option v-for="x in userData" :label=x.userName :key=x.id :value=x.id>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="obj.remark" placeholder="请输入备注" style="width:80%"></el-input>
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
  getwarehouseList,
  addWarehouse,
  editWarehouse,
  delWarehouse
} from '@/api/warehouse'
import {
  getUserAllList,
} from '@/api/user'



export default {
  mixins: [mixin], // 使用mixins
  data() {
    return {
      input: {
        objName: '',
      },
      obj: {
        name: '',
        phone: '',
        address: '',
        fuzeren: '',
        remark: '',
      },
      userData: []
    }
  },
  created() {

  },
  async mounted() {
    this.loadPageList()
    this.userType = window.sessionStorage.getItem('userType')
  },
  computed: {},
  methods: {
    async loadPageList() {
      if (this.input) {
        this.listQuery.objName = this.input.objName
      } else {
        this.listQuery.objName = ''
      }
      let {
        data,
        success,
        message
      } = await getwarehouseList(this.listQuery)
      if (success) {
        this.list = data.list
        // this.total = data.total
        this.loading = false
        this.$message({
          message: message,
          type: 'success'
        });
      }
    },
    async handleCreate() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.dialogadd = true
      this.dialogsave = false
      this.obj = {
        name: '',
        phone: '',
        address: '',
        fuzeren: '',
        remark: '',
      }
      this.loadUserList()
    },

    async loadUserList() {
      let {
        data,
        success,
        message
      } = await getUserAllList()
      if (success) {
        this.userData = data.list

      }
    },
    async addCreate(obj) {
      this.dialogFormVisible = false

      this.list.push(this.obj)
      // if (!this.validata.validaManageUser(obj)) return
      let {
        data,
        success,
        message
      } = await addWarehouse(obj)
      if (success) {
        this.loadPageList()
        this.dialogFormVisible = false
      }
      this.$message({
        message: message,
        type: 'success'
      });
    },

    async saveCreate(obj) {
      this.dialogFormVisible = false
      // if (!this.validata.validaManageUser(obj)) return
      let {
        data,
        success,
        message
      } = await editWarehouse(obj)
      if (success) {
        this.loadPageList()
      }
      this.$message({
        message: message,
        type: 'success'
      });
    },

    async handleEdit(data, type) {
      if (type === 'edit') {
        this.obj = data
        this.dialogStatus = 'update'
        this.dialogsave = true
        this.dialogadd = false
        this.dialogFormVisible = true
        this.loadUserList()
      } else if (type === 'del') {
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let del = await delWarehouse(data.id)
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


  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
