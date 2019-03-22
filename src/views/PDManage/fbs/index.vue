<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据发货名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加发货</el-button>

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
        <span>{{ scope.row.inoroutType }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="单位">
      <template slot-scope="scope">
        <span>
          {{ scope.row.companyName}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="仓库">
      <template slot-scope="scope">
        <span>
          {{ scope.row.warehouseName}}</span>
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

    <el-table-column align="center" label="下单时间">
      <template slot-scope="scope">
        <span>
          {{ scope.row.orderDate | formatTime}}</span>
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


  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="50%" top='5%'>

    <el-form class="" label-width="20%" style="text-align:left;padding:0 10% ">
      <div class="" style="border:1px solid#ccc;">
        <h3 style="margin-left:30px;">单据信息</h3>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="FBS单号">
              <el-input v-model="obj.receipt" placeholder="请输入FBS单号" style="width:80%"></el-input>
            </el-form-item>

            <el-form-item label="录单日期">
              <el-date-picker v-model="obj.orderDate" type="date" placeholder="选择录单时间">
              </el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="12">

          <el-form-item label="重量">
              <el-input v-model="obj.weight" placeholder="请输入重量" style="width:80%"></el-input>
          </el-form-item>
            <el-form-item label="负责人">
              <el-select v-model="obj.yewuyuan" style="width:150px" placeholder="请选择">
                <el-option v-for="x in userList" :label=x.userName :key=x.id :value=x.id>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

      </div>


    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" v-show="dialogadd == true" @click="addCreate(obj)">添加</el-button>
      <el-button type="primary" v-show="dialogsave == true" @click="saveCreate(obj)">修改</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
    </span>
  </el-dialog>


</div>
</template>

<script>
import qrPhoto from '@/assets/logo/qr.png'
import mixin from '@/mixins/list' // 引入
import {
  getfbsList,
  addfbs,
  editfbs,
  delfbs
} from '@/api/fbs'


import {
  getUserAllList,
} from '@/api/user'


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
        receipt: '',
        orderDate: this.getNowTime(),
        warehouse: '',
        weight: '',
        yewuyuan: '',
      },
      nowGoodsList: [],
      goodsList: [],
      userList: [],
      companyList: [],
      warehouseList: [],
      InoroutTypeList: [],
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
    handleAdd(obj) {
      if (!obj.num || !obj.price) {
        this.$message({
          message: '数量和单价不能为空！',
          type: 'error',
          duration: 5 * 1000
        })
        return
      }
      obj.size = parseInt(obj.size) - parseInt(obj.num)
      if (obj.size < 0) {
        this.$message({
          message: '库存不足！',
          type: 'error',
          duration: 5 * 1000
        })
        obj.size = parseInt(obj.size) + parseInt(obj.num)
        return
      }
      let data = this.deepCopy(obj)
      let list = this.nowGoodsList
      let flag = true
      if (list.length > 0) {
        for (let x in list) {
          if (list[x].id == data.id) {
            list[x].num = parseInt(list[x].num) + parseInt(data.num)
            list[x].size = parseInt(data.size)
            debugger
            flag = false
            continue
          }
        }
        if (flag) {
          if (this.nowGoodsList.length >= 3) {
            this.$message({
              message: '最大只可添加三种类型的产品！',
              type: 'error',
              duration: 5 * 1000
            })
            return
          }
          this.nowGoodsList.push(data)
        }

      } else {
        // data.size = parseInt(data.size) - parseInt(data.num)
        this.nowGoodsList.push(data)
      }
    },
    handleGoodsEdit(obj) {
      let list = this.goodsList
      let flag = true
      for (let x in list) {
        if (list[x].id == obj.id) {
          list[x].size = parseInt(list[x].size) + parseInt(obj.num)
          flag = false
          continue
        }
      }
      if (!flag) {
        this.nowGoodsList.splice(this.nowGoodsList.indexOf(obj), 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }

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
      } = await getfbsList(this.listQuery)
      if (success) {
        this.list = data.list
        // this.total = data.total
        this.loading = false
      }
    },

    async loadUserAllList() {
      let {
        data,
        success,
        message
      } = await getUserAllList(this.listQuery)
      if (success) {
        this.userList = data.list
      }
    },


    async handleCreate() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.dialogadd = true
      this.dialogsave = false
      this.obj = {
        receipt: '',
        orderDate: this.getNowTime(),
        warehouse: '',
        weight: '',
        yewuyuan: '',
      }
      this.nowGoodsList = []
      this.loadUserAllList()
    },


    async addCreate(obj) {
      this.dialogFormVisible = false
      obj.orderDate = this.getformatTime(obj.orderDate)
      // obj.itemstring = JSON.stringify(this.nowGoodsList)
      // if (!this.validata.validaManageUser(obj)) return
      let data = await addfbs(obj)
      if (data.code === 200) {
        await this.changeGoodsSize()
        await this.loadPageList()
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
      obj.orderDate = this.getformatTime(obj.orderDate)
      // obj.itemstring = JSON.stringify(this.nowGoodsList)
      // if (!this.validata.validaManageUser(obj)) return
      let {
        data,
        success,
        message
      } = await editfbs(obj)
      if (success) {
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
        this.nowGoodsList = JSON.parse(data.itemstring)
        this.obj = data
        this.dialogStatus = 'update'
        this.dialogsave = true
        this.dialogadd = false
        this.dialogFormVisible = true

        // this.loadGoodsList()
        this.loadUserAllList()
      } else if (type === 'del') {
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let del = await delfbs(data.id)
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
