<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据类型名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加工序类型</el-button>

    </div>
  </div>

  <el-table v-loading="loading" class="tableH" :data="list" border style="margin-top:20px;width:100%;font-size:12px;">
    <el-table-column type="index" width="50" align="center" label="ID">
    </el-table-column>
    <el-table-column align="center" label="类型名称">
      <template slot-scope="scope">
        <span >{{ scope.row.productName }}</span>
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
    </-table-column> -->

    <el-table-column align="center" label="描述">
      <template slot-scope="scope">
        <span>
          {{ scope.row.productionDes}}</span>
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

        <el-form-item label="工序名称">
          <el-input v-model="obj.productName" placeholder="请输入工序名称" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input v-model="obj.productionDes" placeholder="请输入描述" style="width:80%"></el-input>
        </el-form-item>
      </el-row>


    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" v-if="dialogadd == true" @click="addCreate(obj)">添加</el-button>
      <el-button type="primary" v-if="dialogsave == true" @click="saveCreate(obj)">修改</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
    </span>
  </el-dialog>

  <el-dialog :title="tableName" :visible.sync="dialogFormTable" width="60%" top='5%'>
    <table v-show="tableName == 'PHC管桩工序生产记录及检验表(钢筋、模板)'" border=1 cellpadding=10 cellspacing=0>
      <col width=84>
      <col width=186>
      <col width=255>
      <col width=253>
      <col width=72>
      <col width=269>
      <col width=148>
      <col width=110>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r0'>
        <td colspan=2 id='tc0' rowspan=2 height=36 class=x69 style='height:27pt;'>工序名称</td>
        <td rowspan=2 height=36 class=x69 width=255 style='height:27pt;width:191.25pt;'>{{obj.productName}}</td>
        <td rowspan=2 height=36 class=x69 width=253 style='height:27pt;width:189.75pt;'>型号规格</td>
        <td colspan=2 id='tc1' class=x69 style=''>中800口中1000日步1200日长度(m)</td>
        <td rowspan=2 class=x69 width=148 style='width:111pt;'>制桩编号</td>
        <td rowspan=2 height=36 class=x69 width=110 style='height:27pt;width:82.5pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r1'>
        <td colspan=2 id='tc2' class=x69 style=''></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r2'>
        <td colspan=2 id='tc3' height=18 class=x69 style='height:13.5pt;'>生产日期</td>
        <td class=x69>2018 年 10月 12日</td>
        <td class=x69>班次</td>
        <td colspan=2 id='tc4' class=x69 style=''>白班</td>
        <td class=x69>钢筋笼编号</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r3'>
        <td height=18 class=x69 style='height:13.5pt;'>序号</td>
        <td class=x69>工序</td>
        <td colspan=4 id='tc5' class=x69 style=''>情况记录</td>
        <td class=x69>班组质检员</td>
        <td class=x69>公司质检员</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r4'>
        <td height=18 class=x69 style='height:13.5pt;'>1</td>
        <td class=x69>下料、锁头</td>
        <td colspan=4 id='tc6' class=x69 style=''></td>
        <td rowspan=2></td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r5'>
        <td height=18 class=x69 style='height:13.5pt;'>2</td>
        <td class=x69 style='overflow:hidden;'>钢筋笼制作（含透气孔安装)</td>
        <td colspan=4 id='tc7' class=x69 style=''></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r6'>
        <td height=18 class=x69 style='height:13.5pt;'>3</td>
        <td class=x69>管模拼接</td>
        <td colspan=4 id='tc8' class=x69 style=''>钢模</td>
        <td rowspan=3 height=36 class=x69 style='height:27pt;'></td>
        <td rowspan=6></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r7'>
        <td height=18 class=x69 style='height:13.5pt;'>4</td>
        <td class=x69>清模、涂刷脱模剂</td>
        <td colspan=4 id='tc9' class=x69 style=''>检查模板清洁、涂刷均匀无厚积</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r8'>
        <td height=18 class=x69 style='height:13.5pt;'>5</td>
        <td class=x69>端板检查,安装钢筋笼入模</td>
        <td colspan=4 id='tc10' class=x69 style=''>检查端板外观、丝牙<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>检查钢筋笼是否有扭曲、起拱</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r9'>
        <td rowspan=3 height=54 class=x69 style='height:40.5pt;'>6</td>
        <td rowspan=3 height=54 class=x69 style='height:40.5pt;overflow:hidden;'>张拉环、反力板(连接器)安<span style='display:none'>装</span></td>
        <td colspan=3 id='tc11' class=x69 style=''>反力板端:绿栓是否反复打入<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>对拉螺栓数量</td>
        <td class=x69>操作人:  <el-input  placeholder="输入姓名" style="width:50%"></el-input></td>
        <td rowspan=3 height=36 class=x69 style='height:27pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r10'>
        <td colspan=3 id='tc12' class=x69 style=''>张拉环端:螺栓是否反复打入<span style='mso-spacerun:yes'>&nbsp; </span>对拉螺栓数量 </td>
        <td class=x69>操作人:  <el-input  placeholder="输入姓名" style="width:50%"></el-input></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r11'>
        <td colspan=4 id='tc13' class=x69 style=''>异常情况:</td>
      </tr>
      <tr height=0 style='display:none'>
        <td width=84 style='width:63pt'></td>
        <td width=186 style='width:139.5pt'></td>
        <td width=255 style='width:191.25pt'></td>
        <td width=253 style='width:189.75pt'></td>
        <td width=72 style='width:54pt'></td>
        <td width=269 style='width:201.75pt'></td>
        <td width=148 style='width:111pt'></td>
        <td width=110 style='width:82.5pt'></td>
      </tr>
    </table>




    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addCreate(obj)">保存</el-button>
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
      },
      list: [{
        "id": "1",
        "productName": "钢筋笼",
        "productType": 1,
        "productionDes": "工序描述"
      }, {
        "id": "1",
        "productName": "管桩生产工序",
        "productType": 2,
        "productionDes": "工序描述"
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
