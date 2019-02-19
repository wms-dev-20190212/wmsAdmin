<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据工程名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加派单</el-button>

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
    <el-table-column align="center" label="货物管理类型">
      <template slot-scope="scope">
        <span>{{ scope.row.type }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="单位">
      <template slot-scope="scope">
        <span >
          {{ scope.row.company}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="仓库">
      <template slot-scope="scope">
        <span >
          {{ scope.row.warehouse}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="负责人">
      <template slot-scope="scope">
        <span >
          {{ scope.row.userName}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="单位">
      <template slot-scope="scope">
        <span >
          {{ scope.row.company}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="备注">
      <template slot-scope="scope">
        <span >
          {{ scope.row.remark}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="操作时间">
      <template slot-scope="scope">
        <span>
          {{ scope.row.date}}</span>
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
          <el-input v-model="obj.warehouse" placeholder="请输入仓库" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="obj.company" placeholder="请输入单位" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="货物管理类型">
          <el-select v-model="obj.type" style="width:150px" placeholder="请选择">
            <el-option label="出库" :key=1 :value=1>
            </el-option>
            <el-option label="入库" :key=2 :value=2>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="obj.userName" placeholder="请输入负责人" style="width:80%"></el-input>
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
import qrPhoto from '@/assets/logo/qr.png'
import mixin from '@/mixins/list' // 引入
import {
  getwarehouseInoroutList,
  addWarehouseInorout,
  editWarehouseInorout,
  delWarehouseInorout
} from '@/api/warehouseInorout'



export default {
  mixins: [mixin], // 使用mixins
  data() {
    return {
      qrPhoto,
      tableName: '',
      dialogFormTable: false, //控制弹出层
      input: {
        objName: '',
        userType: '',
        status: '',
      },
      obj: {
        productName: '',
        production: '',
        productType: '',
        productionDes: '',
        groupId: [],
        operator: '',
        operatorTime: '',
      },
    }
  },
  created() {

  },
  async mounted() {
    this.loading = false
    this.loadPageList()
    this.userType = window.sessionStorage.getItem('userType')
  },
  computed: {},
  methods: {
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
      } = await getwarehouseInoroutList(this.listQuery)
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
        productType: '',
        productionDes: "",
        groupId: [],
        operator: '',
        operatorTime: '',
      }
    },


    async addCreate(obj) {
      this.dialogFormVisible = false

      this.list.push(this.obj)
      // if (!this.validata.validaManageUser(obj)) return
      let data = await addWarehouseInorout(obj)
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

    async saveCreate(obj) {
      this.dialogFormVisible = false
      // if (!this.validata.validaManageUser(obj)) return
      // let data = await editWarehouseInorout(obj)
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
          // let del = await delWarehouseInorout(data.id)
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
      if (data.productType == 1 && type == 1) {
        this.tableName = 'PHC管桩工序生产记录及检验表(钢筋、模板)'
      } else if (data.productType == 1 && type == 2) {
        this.tableName = 'PHC管桩工序生产记录及检验表(砼浇筑、张拉、离心、养护、放松、脱模)'
      } else {
        this.tableName = 'PHC管桩钢筋笼制作生产记录及检验表'
      }
      this.dialogFormTable = true
    },

  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
