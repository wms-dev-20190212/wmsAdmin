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
        <span @click="handleShow(scope.row,1)" style="color:#00C1DE;cursor: pointer;">
          {{ scope.row.productName }}</span>
      </template>
    </el-table-column>
    <el-table-column type="index" width="150" align="center" label="管桩编号">
    </el-table-column>
    <el-table-column type="index" width="150" align="center" label="焊接管桩编号">
    </el-table-column>
    <el-table-column align="center" label="焊接管桩项目">
      <template slot-scope="scope">
        <span>
          {{ scope.row.operator}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="工序">
      <template slot-scope="scope">
        <span>
          {{ scope.row.productionDes}}</span>
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
        <!-- <el-form-item label="管桩编号">
          <el-input type='number'  v-model="obj.productType" placeholder="请输入管桩编号" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="焊接管桩编号">
          <el-input type='number'  v-model="obj.productType" placeholder="请输入焊接管桩编号" style="width:80%"></el-input>
        </el-form-item> -->

        <el-form-item label="焊接管桩项目">
          <el-input v-model="obj.operator" placeholder="请输入焊接管桩项目" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="工序">
          <el-input v-model="obj.productionDes" placeholder="请输入工序" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="是否合格">
          <el-select v-model="obj.productType" style="width:100px" placeholder="请选择">
            <el-option label="是" :key=1 :value=1>
            </el-option>
            <el-option label="否" :key=2 :value=2>
            </el-option>
          </el-select>
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

  <el-dialog :title="tableName" :visible.sync="dialogFormTable" width="60%" top='3%'>
    <table v-show="tableName == 'PHC管桩电焊拼接验收记录'" border=1 cellpadding=10 cellspacing=0 style="width:100%">
      <tr id='r0'>
        <td colspan=2 id='tc0' rowspan=2 class=x69>工程名称</td>
        <td colspan=3 id='tc1' rowspan=2 class=x87>{{obj.productName}}</td>
        <td rowspan=2 class=x69>规格型号</td>
        <td colspan=2 id='tc2' class=x69>上节</td>
        <td class=x71 width=72>
          <font class="font4">000B50m</font>
        </td>
      </tr>
      <tr id='r1'>
        <td colspan=2 id='tc3' class=x69>下节</td>
        <td class=x72>
          <font class="font4">000B50m</font>
        </td>
      </tr>
      <tr style='mso-height-source:userset;height:16.5pt' id='r2'>
        <td colspan=2 id='tc4' height=22 class=x88 style='height:16.5pt;'>
          <font class="font2"> </font>
          <font class="font4"><span style=''>&nbsp; </span></font>
          <font class="font23">拼接</font>
        </td>
        <td rowspan=2 height=43 class=x89>上节桩编号</td>
        <td rowspan=2 height=43 class=x89>下节桩编号</td>
        <td colspan=3 id='tc5' rowspan=2 height=43 class=x69>检查意见</td>
        <td colspan=2 id='tc6' rowspan=2 height=43 class=x69>不合格项目</td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r3'>
        <td colspan=2 id='tc7' height=21 class=x90>流水号</td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r4'>
        <td colspan=2 id='tc8' height=22 class=x91>
          <font class="font3"> </font>
          <font class="font24"><span style=''>&nbsp;&nbsp;&nbsp;&nbsp; </span></font>
        </td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc9' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc10' class=x89></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r5'>
        <td colspan=2 id='tc11' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc12' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc13' class=x91></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r6'>
        <td colspan=2 id='tc14' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc15' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc16' class=x91></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r7'>
        <td colspan=2 id='tc17' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc18' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc19' class=x91></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r8'>
        <td colspan=2 id='tc20' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc21' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc22' class=x91></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r9'>
        <td colspan=2 id='tc23' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc24' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc25' class=x91></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r10'>
        <td colspan=2 id='tc26' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc27' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc28' class=x91></td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r11'>
        <td colspan=2 id='tc29' height=22 class=x91></td>
        <td class=x79></td>
        <td class=x79></td>
        <td colspan=3 id='tc30' class=x89>
          <font class="font2">合格□ </font>
          <font class="font4"> </font>
          <font class="font23">不合格□</font>
        </td>
        <td colspan=2 id='tc31' class=x91></td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r12'>
        <td height=21 class=x80 style='height:15.75pt;'>目</td>
        <td rowspan=3 height=61 class=x69 style='height:45.75pt;'>序号</td>
        <td colspan=2 id='tc32' rowspan=3 height=61 class=x69 style='height:45.75pt;'>检查项目</td>
        <td colspan=5 id='tc33' rowspan=3 height=61 class=x69 style='height:45.75pt;'>检查办法（允许偏差）</td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r13'>
        <td height=20 class=x80 style='height:15pt;'></td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r14'>
        <td height=20 class=x80 style='height:15pt;'>测</td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r15'>
        <td height=21 class=x80 style='height:15.75pt;'></td>
        <td class=x72>1</td>
        <td colspan=2 id='tc34' class=x69>端板焊前除锈去污</td>
        <td colspan=5 id='tc35' class=x69>钢丝刷除锈，目测清洁，露金属光泽</td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r16'>
        <td height=22 class=x80 style='height:16.5pt;'>项</td>
        <td class=x72>2</td>
        <td colspan=2 id='tc36' class=x69>
          <font class="font2">拼缝间隙</font>
          <font class="font4">&lt;2mm</font>
        </td>
        <td colspan=5 id='tc37' class=x69>
          <font class="font2">钢尺量大于</font>
          <font class="font4">2mm</font>
          <font class="font23">，拼缝镶薄铁板衬垫</font>
        </td>
      </tr>
      <tr height=39 style='mso-height-source:userset;height:29.25pt' id='r17'>
        <td height=39 class=x80 style='height:29.25pt;'></td>
        <td class=x72>3</td>
        <td colspan=2 id='tc38' class=x69>焊<span style=''>&nbsp;&nbsp;&nbsp; </span>层</td>
        <td colspan=5 id='tc39' class=x69 style='overflow:hidden;'>每层焊接厚度均匀，每层间焊渣敲清方能焊第二层。</td>
      </tr>
      <tr height=41 style='mso-height-source:userset;height:30.75pt' id='r18'>
        <td height=41 class=x81 style='height:30.75pt;'>目</td>
        <td class=x72>4</td>
        <td colspan=2 id='tc40' class=x69>焊<span style=''>&nbsp;&nbsp;&nbsp; </span>缝</td>
        <td colspan=5 id='tc41' class=x69 style='overflow:hidden;'>
          <font class="font2">不应有夹渣汽泡等缺陷，发生用角相砂轮打除补满，第一层电焊用</font>
          <font class="font4">3.2mm</font>
          <font class="font23">焊条</font>
        </td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r19'>
        <td height=21 class=x80 style='height:15.75pt;'>实</td>
        <td rowspan=2 height=41 class=x92 style='height:30.75pt;'>5</td>
        <td colspan=2 id='tc42' rowspan=2 height=41 class=x93 style='height:30.75pt;'>拼接后整桩长度</td>
        <td colspan=5 id='tc43' rowspan=2 height=41 class=x69 style='height:30.75pt;'>
          <font class="font2">钢尺量</font>
          <font class="font23">±</font>
          <font class="font23">0.3％</font>
        </td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r20'>
        <td height=20 class=x80 style='height:15pt;'></td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r21'>
        <td height=21 class=x80 style='height:15.75pt;'>测</td>
        <td class=x72>6</td>
        <td colspan=2 id='tc44' class=x93>桩身弯曲</td>
        <td colspan=5 id='tc45' class=x69>
          <font class="font2">≤</font>
          <font class="font23">L/1000</font>
        </td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r22'>
        <td height=21 class=x80 style='height:15.75pt;'></td>
        <td class=x72>7</td>
        <td colspan=2 id='tc46' class=x93>两端面间隙</td>
        <td colspan=5 id='tc47' class=x69>≤2 mm</td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r23'>
        <td height=21 class=x80 style='height:15.75pt;'>项</td>
        <td class=x72>8</td>
        <td colspan=2 id='tc48' class=x93>坡口错位</td>
        <td colspan=5 id='tc49' class=x69>≤2 mm</td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r24'>
        <td height=22 class=x80 style='height:16.5pt;'></td>
        <td class=x72>9</td>
        <td colspan=2 id='tc50' class=x93>电焊高度</td>
        <td colspan=5 id='tc51' class=x69>
          <font class="font2">&gt;t(坡口高度</font>
          <font class="font4">)</font>
        </td>
      </tr>
      <tr height=21 style='mso-height-source:userset;height:15.75pt' id='r25'>
        <td height=21 class=x81 style='height:15.75pt;'>目</td>
        <td class=x72>10</td>
        <td colspan=2 id='tc52' class=x93>桩头焊缝高度</td>
        <td colspan=5 id='tc53' class=x69>&gt;1mm</td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r26'>
        <td colspan=2 id='tc54' rowspan=3 height=67 class=x69 style='height:50.25pt;'>评定意见</td>
        <td colspan=7 id='tc55' class=x88 style=''>
          <font class="font2"> </font>
          <font class="font4"><span style=''>&nbsp; </span></font>
        </td>
      </tr>
      <tr height=23 id='r27'>
        <td colspan=7 id='tc56' class=x94 style=''>
          <font class="font4"> </font>
          <font class="font23">合格（ </font>
          <font class="font4"><span style=''>&nbsp;&nbsp;&nbsp; </span></font>
          <font class="font23">） 根 </font>
          <font class="font4"><span style=''>&nbsp;&nbsp;&nbsp; </span></font>
          <font class="font23">不合格 （ </font>
          <font class="font4"><span style=''>&nbsp;&nbsp;&nbsp; </span></font>
          <font class="font23">）根</font>
          <font class="font4"> </font>
        </td>
      </tr>
      <tr height=22 style='mso-height-source:userset;height:16.5pt' id='r28'>
        <td colspan=7 id='tc57' class=x95>
          <font class="font2"> </font>
          <font class="font4"><span style=''>&nbsp;&nbsp; </span></font>
        </td>
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
        "productName": "工程1",
        "procedure1": "钢筋、模板",
        "procedure2": "张拉、离心",
        "production": "型号1",
        "productType": 1,
        "productionDes": "工序描述",
        "groupId": [1, 2, 3],
        "operator": "项目1",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程2",
        "procedure1": "钢筋、模板",
        "procedure2": "张拉、离心",
        "production": "型号2",
        "productType": 1,
        "productionDes": "工序描述",
        "groupId": [2, 3],
        "operator": "项目2",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程3",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号3",
        "productType": 2,
        "productionDes": "工序描述",
        "groupId": [2, 3, 5, 6],
        "operator": "项目3",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程4",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号4",
        "productType": 2,
        "productionDes": "工序描述",
        "groupId": [5, 6],
        "operator": "项目4",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程5",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号5",
        "productType": 2,
        "productionDes": "工序描述",
        "groupId": [1, 5, 6],
        "operator": "项目5",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程6",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号6",
        "productType": 2,
        "productionDes": "工序描述",
        "groupId": [1, 2, 4],
        "operator": "项目6",
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
      this.tableName = 'PHC管桩电焊拼接验收记录'
      this.dialogFormTable = true
    },

  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
