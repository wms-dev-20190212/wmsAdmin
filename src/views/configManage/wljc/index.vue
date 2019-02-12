<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">
      <el-input v-model="input.objName" placeholder="可根据检测名称 查询" style="width: 20%;"></el-input>

      <el-button style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">添加检测</el-button>

    </div>
  </div>

  <el-table v-loading="loading" class="tableH" :data="list" border style="margin-top:20px;width:100%;font-size:12px;">
    <el-table-column type="index" width="50" align="center" label="ID">
    </el-table-column>
    <el-table-column align="center" label="物料名称">
      <template slot-scope="scope">

        <span @click="handleShow(scope.row,1)" style="color:#00C1DE;cursor: pointer;">
          {{ scope.row.productName }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="检测人">
      <template slot-scope="scope">
        <span>
          {{ scope.row.operator}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="检测日期">
      <template slot-scope="scope">
        <span>
          {{ scope.row.operatorTime}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="是否合格">
      <template slot-scope="scope">
        <span v-if="scope.row.productType =='1'">
          是</span>
        <span v-if="scope.row.productType =='2'">
          否</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="备注">
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

        <el-form-item label="物料名称">
          <el-input v-model="obj.productName" placeholder="请输入物料名称" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="检测人">
          <el-input v-model="obj.production" placeholder="请输入检测人" style="width:80%"></el-input>
        </el-form-item>


        <el-form-item label="是否合格">
          <el-select v-model="obj.productType" style="width:100px" placeholder="请选择">
            <el-option label="是" :key=1 :value=1>
            </el-option>
            <el-option label="否" :key=2 :value=2>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="obj.productionDes" placeholder="请输入备注" style="width:80%"></el-input>
        </el-form-item>

      </el-row>


    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" v-if="dialogadd == true" @click="addCreate(obj)">添加</el-button>
      <el-button type="primary" v-if="dialogsave == true" @click="saveCreate(obj)">修改</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
    </span>
  </el-dialog>

  <el-dialog :title="tableName" :visible.sync="dialogFormTable" width="60%" top='3%'>
    <table v-show="tableName == '混凝土原材料生产记录'" border=1 cellpadding=10 cellspacing=0 style="width:100%">
      <col width=72 span=5 style='width:54pt'>
      <col width=37 style='mso-width-source:userset;'>
      <col width=84 style='mso-width-source:userset;'>
      <col width=150 style='mso-width-source:userset;'>
      <col width=94 style='mso-width-source:userset;'>
      <col width=86 style='mso-width-source:userset;'>
      <col width=72 span=3 style='width:54pt'>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r0'>
        <td colspan=2 id='tc0' height=19 class=x71 style='height:14.25pt;'>日<span style='mso-spacerun:yes'>&nbsp; </span>期</td>
        <td colspan=3 id='tc1' class=x71 style=''></td>
        <td class=x71 width=127 style='width:95.25pt;'>班<span style='mso-spacerun:yes'>&nbsp; </span>次</td>
        <td colspan=3 id='tc2' class=x71 style=''>白班<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>/<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>晚班</td>
        <td class=x71 width=116 style='width:87pt;'>砼等级</td>
        <td colspan=3 id='tc3' class=x71 style=''>C80</td>
      </tr>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r1'>
        <td colspan=2 id='tc4' rowspan=2 height=38 class=x71 style='height:28.5pt;'>水泥产地</td>
        <td colspan=3 id='tc5' rowspan=2 height=38 class=x71 style='height:28.5pt;'>A.南加里曼丹<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>B.孔雀港</td>
        <td class=x71>粗骨料产地</td>
        <td colspan=3 id='tc6' class=x74 style=''></td>
        <td rowspan=2 height=38 class=x71 style='height:28.5pt;'>细骨料产地</td>
        <td colspan=3 id='tc7' rowspan=2 height=38 class=x80 style='height:28.5pt;'></td>
      </tr>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r2'>
        <td class=x71>粗骨料级配</td>
        <td class=x71>C.（5-10mm)</td>
        <td class=x71>D.（10-20mm）</td>
        <td class=x71 style='overflow:hidden;'>E.（5-25mm）</td>
      </tr>
      <tr height=25 style='mso-height-source:userset;height:18.75pt' id='r3'>
        <td colspan=7 id='tc8' height=25 class=x77 style='height:18.75pt;'>桩身混凝土</td>
        <td colspan=5 id='tc9' class=x77 style=''>桩顶混凝土</td>
        <td rowspan=2 height=44 class=x77 style='height:33pt;'>操作人</td>
      </tr>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r4'>
        <td height=19 class=x71 style='height:14.25pt;'>序号</td>
        <td colspan=2 id='tc10' class=x71 style=''>水泥产地</td>
        <td colspan=2 id='tc11' class=x71 style=''>粗骨料级配</td>
        <td colspan=2 id='tc12' class=x71 style=''>外加剂比例</td>
        <td class=x71>水泥产地</td>
        <td colspan=2 id='tc13' class=x71 style=''>粗骨料级配</td>
        <td colspan=2 id='tc14' class=x71 style=''>外加剂比例</td>
      </tr>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r5'>
        <td height=19 class=x71 style='height:14.25pt;'>1</td>
        <td colspan=2 id='tc15' class=x71 style=''></td>
        <td colspan=2 id='tc16' class=x71 style=''></td>
        <td colspan=2 id='tc17' class=x71 style=''></td>
        <td rowspan=2 height=38 class=x71 style='height:28.5pt;'></td>
        <td colspan=2 id='tc18' rowspan=2 height=38 class=x71 style='height:28.5pt;'></td>
        <td colspan=2 id='tc19' rowspan=2 height=38 class=x71 style='height:28.5pt;'></td>
        <td rowspan=2 height=38 class=x77 style='height:28.5pt;'></td>
      </tr>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r6'>
        <td height=19 class=x71 style='height:14.25pt;'>2</td>
        <td colspan=2 id='tc20' class=x71 style=''></td>
        <td colspan=2 id='tc21' class=x71 style=''></td>
        <td colspan=2 id='tc22' class=x71 style=''></td>
      </tr>
      <tr height=19 style='mso-height-source:userset;height:14.25pt' id='r7'>
        <td colspan=3 id='tc23' height=19 class=x71 style='height:14.25pt;'>备注</td>
        <td colspan=10 id='tc24' class=x71 style=''></td>
      </tr>
    </table>




    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveFormTable(obj)">打印</el-button>
      <el-button type="primary" @click="saveFormTable(obj)">保存</el-button>
    </span>
  </el-dialog>

  <div id="qr_code_tip" class="qrClass" style="display:none">
    <img :src=qrPhoto> alt="">
  </div>
</div>
</template>

<script>
import qrPhoto from '@/assets/logo/qr.png'
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
      checkList1: [],
      checkList2: [],
      checkList3: [],
      checkList4: [],
      checkList5: [],
      checkList6: [],
      checkList7: [],
      list: [{
        "id": "1",
        "productName": "检测1",
        "procedure1": "钢筋、模板",
        "procedure2": "张拉、离心",
        "production": "型号1",
        "productType": 1,
        "productionDes": "检测描述",
        "groupId": [1, 2, 3],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "检测2",
        "procedure1": "钢筋、模板",
        "procedure2": "张拉、离心",
        "production": "型号2",
        "productType": 1,
        "productionDes": "检测描述",
        "groupId": [2, 3],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "检测3",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号3",
        "productType": 2,
        "productionDes": "检测描述",
        "groupId": [2, 3, 5, 6],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "检测4",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号4",
        "productType": 2,
        "productionDes": "检测描述",
        "groupId": [5, 6],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "检测5",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号5",
        "productType": 2,
        "productionDes": "检测描述",
        "groupId": [1, 5, 6],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "检测6",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号6",
        "productType": 2,
        "productionDes": "检测描述",
        "groupId": [1, 2, 4],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }],
      x: '',
      y: '',
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
    toggleShow(flag) {
      // var target=event.target;
      var div = document.getElementById("qr_code_tip")
      this.x = event.pageX
      this.y = event.pageY

      if (flag) {
        div.setAttribute('style', 'display: block;top: ' + event.pageY + 'px;left:' + (event.pageX + 15) + 'px');
      } else {

        div.setAttribute('style', 'display: none;');
      }
    },
    getInfo() {
      this.$message({
        type: 'success',
        message: '生成二维码成功！'
      });
    },

    async saveFormTable(obj) {
      this.dialogFormTable = false

      this.$message({
        type: 'success',
        message: '提交成功！'
      });
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
      this.tableName = '混凝土原材料生产记录'

      this.dialogFormTable = true
    },

  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
