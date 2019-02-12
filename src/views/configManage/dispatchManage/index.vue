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
    <el-table-column align="center" label="工程名称">
      <template slot-scope="scope">
        <span>{{ scope.row.productName }}</span>
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
    <el-table-column align="center" label="表单1">
      <template slot-scope="scope">
        <span @click="handleShow(scope.row,1)" style="color:#00C1DE;cursor: pointer;">
          {{ scope.row.procedure1}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="表单2">
      <template slot-scope="scope">
        <span @click="handleShow(scope.row,2)" style="color:#00C1DE;cursor: pointer;">
          {{ scope.row.procedure2}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="工序类型">
      <template slot-scope="scope">
        <span v-if="scope.row.productType =='1'">
          管桩生产工序</span>
        <span v-if="scope.row.productType =='2'">
        钢筋笼</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="型号规格">
      <template slot-scope="scope">
        <span>
          {{ scope.row.production}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="描述">
      <template slot-scope="scope">
        <span>
          {{ scope.row.productionDes}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="执行小组">
      <template slot-scope="scope">
        <span v-if='scope.row.groupId.includes(1)'>小组1;</span>
        <span v-if='scope.row.groupId.includes(2)'>小组2;</span>
        <span v-if='scope.row.groupId.includes(3)'>小组3;</span>
        <span v-if='scope.row.groupId.includes(4)'>小组4;</span>
        <span v-if='scope.row.groupId.includes(5)'>小组5;</span>
        <span v-if='scope.row.groupId.includes(6)'>小组6;</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作人">
      <template slot-scope="scope">
        <span>
          {{ scope.row.operator}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作时间">
      <template slot-scope="scope">
        <span>
          {{ scope.row.operatorTime}}</span>
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
        <el-form-item label="型号规格">
          <el-input v-model="obj.production" placeholder="请输入型号规格" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item label="工序类型">
          <el-select v-model="obj.productType" style="width:150px" placeholder="请选择">
            <el-option label="钢筋笼" :key=1 :value=1>
            </el-option>
            <el-option label="管桩生产工序" :key=2 :value=2>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="执行小组">
          <el-select v-model="obj.groupId" multiple   placeholder="请选择" style="">
            <el-option label="小组1" :key=1 :value=1>
            </el-option>
            <el-option label="小组2" :key=2 :value=2>
            </el-option>
            <el-option label="小组3" :key=3 :value=3>
            </el-option>
            <el-option label="小组4" :key=4 :value=4>
            </el-option>
            <el-option label="小组5" :key=5 :value=5>
            </el-option>
            <el-option label="小组6" :key=6 :value=6>
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
    <table v-show="tableName == 'PHC管桩工序生产记录及检验表(钢筋、模板)'" border=1 cellpadding=10 cellspacing=0>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r0'>
        <td colspan=2 id='tc0' rowspan=2 height=36 class=x69 style='height:27pt;'>工程名称</td>
        <td rowspan=2 height=36 class=x69 width=255 style='height:27pt;width:191.25pt;'>{{obj.productName}}</td>
        <td rowspan=2 style='width: 100px;'>型号规格</td>
        <td colspan=1 id='tc1' class=x69 style='width: 250px;'>
          <el-checkbox-group v-model="checkList1">
            <el-checkbox label="1">800</el-checkbox>
            <el-checkbox label="2">1000</el-checkbox>
            <el-checkbox label="3">1200</el-checkbox>
          </el-checkbox-group>
        </td>
        </td>
        <td colspan=1 id='tc1' class=x69 style=''>长度(m)</td>
        <td rowspan=2 class=x69 width=148 style='width:111pt;'>制桩编号</td>
        <td rowspan=2 height=36 class=x69 width=110 style='height:27pt;width:82.5pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r1'>
        <td colspan=1 id='tc2' class=x69 style='width: 200px;'>
          <el-checkbox-group v-model="checkList2">
            <el-checkbox label="1">AB</el-checkbox>
            <el-checkbox label="2">B</el-checkbox>
            <el-checkbox label="3">C</el-checkbox>
          </el-checkbox-group>
        </td>
        <td colspan=1 id='tc2' class=x69 style=''>123</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r2'>
        <td colspan=2 id='tc3' height=18 class=x69 style='height:13.5pt;'>生产日期</td>
        <td class=x69>2018 年 10月 12日</td>
        <td class=x69>班次</td>
        <td colspan=2 id='tc4' class=x69 style=''>

          <el-radio-group v-model="checkList3" style="display: inline;">
            <el-radio :label="1">白班</el-radio>
            <el-radio :label="2">晚班</el-radio>
          </el-radio-group>

        </td>
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
        <td class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">下料、锁头 </td>
        <td colspan=4 id='tc6' class=x69 style='text-align: left;'></td>
        <td rowspan=2></td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r5'>
        <td height=18 class=x69 style='height:13.5pt;'>2</td>
        <td class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">钢筋笼制作（含透气孔安装)</td>
        <td colspan=4 id='tc7' class=x69 style='text-align: left;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r6'>
        <td height=18 class=x69 style='height:13.5pt;'>3</td>
        <td class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">管模拼接</td>
        <td colspan=4 id='tc8' class=x69 style='text-align: left;'>钢模号</td>
        <td rowspan=3 height=36 class=x69 style='height:27pt;'></td>
        <td rowspan=6></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r7'>
        <td height=18 class=x69 style='height:13.5pt;'>4</td>
        <td class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">清模、涂刷脱模剂</td>
        <td colspan=4 id='tc9' class=x69 style='text-align: left;'>检查模板清洁、涂刷均匀无厚积</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r8'>
        <td height=18 class=x69 style='height:13.5pt;'>5</td>
        <td class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">端板检查,安装钢筋笼入模</td>
        <td colspan=4 id='tc10' class=x69 style='text-align: left;'>检查端板外观、丝牙<span style='mso-spacerun:yes'>&nbsp;&nbsp; </span>检查钢筋笼是否有扭曲 (

          <el-radio-group v-model="checkList4" style="display: inline;">
            <el-radio :label="1">有</el-radio>
            <el-radio :label="2">无</el-radio>
          </el-radio-group>
          )、起拱 (
          <el-radio-group v-model="checkList5" style="display: inline;">
            <el-radio :label="1">有</el-radio>
            <el-radio :label="2">无</el-radio>
          </el-radio-group>)
        </td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r9'>
        <td rowspan=3 height=54 class=x69 style='height:40.5pt;'>6</td>
        <td rowspan=3 height=54 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">张拉环、反力板(连接器)安<span style='display:none'>装</span></td>
        <td colspan=2 id='tc11' class=x69 style='text-align: left;'>反力板端:绿栓是否反复打入
          <el-radio-group v-model="checkList6" style="display: inline;">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
          <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对拉螺栓数量</td>
        <td colspan=2 class=x69>操作人: <el-input placeholder="输入姓名" style="width:60%"></el-input>
        </td>
        <td rowspan=3 height=36 class=x69 style='height:27pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r10'>
        <td colspan=2 id='tc12' class=x69 style='text-align: left;'>张拉环端:螺栓是否反复打入
          <el-radio-group v-model="checkList7" style="display: inline;">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
          <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对拉螺栓数量 </td>
        <td colspan=2 class=x69>操作人: <el-input placeholder="输入姓名" style="width:60%"></el-input>
        </td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r11'>
        <td colspan=4 id='tc13' class=x69 style='text-align: left;'>异常情况:</td>
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



    <table v-show="tableName == 'PHC管桩工序生产记录及检验表(砼浇筑、张拉、离心、养护、放松、脱模)'" border=1 cellpadding=10 cellspacing=0>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r0'>
        <td colspan=3 id='tc0' rowspan=2 height=36 class=x69 style='height:27pt;width:250px;'>工程名称</td>
        <td width=220 rowspan=2 height=36 class=x69 style='height:27pt;'>{{obj.productName}}</td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;width:50px;'>型号规格</td>
        <td colspan=2 id='tc1' class=x69 style='width: 250px;'>
          <el-checkbox-group v-model="checkList1">
            <el-checkbox label="1">800</el-checkbox>
            <el-checkbox label="2">1000</el-checkbox>
            <el-checkbox label="3">1200</el-checkbox>
          </el-checkbox-group>
        </td>
        <td class=x69 width=170>制柱编号</td>
        <td class=x69 width=127></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r1'>
        <td colspan=2 id='tc2' class=x69 style='width: 200px;'>
          <el-checkbox-group v-model="checkList2">
            <el-checkbox label="1">AB</el-checkbox>
            <el-checkbox label="2">B</el-checkbox>
            <el-checkbox label="3">C</el-checkbox>
          </el-checkbox-group>
        </td>
        <td class=x69>柱长(m)</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r2'>
        <td colspan=3 id='tc3' height=18 class=x69 style='height:13.5pt;'>浇筑日期</td>
        <td class=x69>2018年10月22日</td>
        <td class=x69>班次</td>
        <td colspan=2 id='tc4' class=x69 style=''>

          <el-radio-group v-model="checkList3" style="display: inline;">
            <el-radio :label="1">白班</el-radio>
            <el-radio :label="2">晚班</el-radio>
          </el-radio-group>
        </td>
        <td class=x69>砼方量(m)</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r3'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>序号:</td>
        <td colspan=2 id='tc5' class=x69 style=''>碎配合比</td>
        <td colspan=4 id='tc6' class=x69 style='text-align: left;'>配合比编号:P2018-005/006s<span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span>坍落度：140: ~<span style='mso-spacerun:yes'>&nbsp; </span>200:</td>
        <td class=x69>班组质检员 </td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>公司质检员</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r4'>
        <td colspan=2 id='tc7' class=x69 style=''>工序</td>
        <td colspan=3 id='tc8' class=x69 style='text-align: left;'>情况记录</td>
        <td class=x69>操作人: <el-input placeholder="输入姓名" style="width:50%"></el-input>
        </td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r5'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>7</td>
        <td colspan=2 id='tc9' rowspan=2 height=36 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">砼浇筑</td>
        <td colspan=3 id='tc10' class=x69 style='text-align: left;'>(浇筑起始时间: 时 分~ 时 分)</td>
        <td rowspan=4 height=54 class=x69 style='height:40.5pt;'></td>
        <td rowspan=4 height=72 class=x69 style='height:54pt;'></td>
        <td rowspan=4 height=72 class=x69 style='height:54pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r6'>
        <td colspan=3 id='tc11' class=x69 style='text-align: left;'>异常情况:</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r7'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>8</td>
        <td colspan=2 id='tc12' rowspan=2 height=36 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">合模</td>
        <td colspan=3 id='tc13' class=x69 style='text-align: left;'>(合模起始时间: 时 分~ 时 分)</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r8'>
        <td colspan=3 id='tc14' class=x69 style='text-align: left;'>合模螺栓检查情况:</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r9'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>9</td>
        <td colspan=2 id='tc15' rowspan=2 height=36 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">张拉</td>
        <td colspan=3 id='tc16' class=x69 style='text-align: left;'>(张拉起始时间: 时 分~ 时 分)</td>
        <td class=x69>/</td>
        <td></td>
        <td rowspan=4 height=72 class=x69 style='height:54pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r10'>
        <td colspan=3 id='tc17' class=x69 style='text-align: left;'>异常情况:</td>
        <td class=x69>/</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r11'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>10</td>
        <td colspan=2 id='tc18' rowspan=2 height=36 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">离心</td>
        <td colspan=3 id='tc19' class=x69 style='text-align: left;'>(离心起始时间: 时 分~ 时 分)</td>
        <td class=x69>/</td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r12'>
        <td colspan=3 id='tc20' class=x69 style='text-align: left;'>异常情况:</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r13'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>11</td>
        <td colspan=2 id='tc21' rowspan=2 height=36 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">倒浆</td>
        <td colspan=4 id='tc22' class=x69 style='text-align: left;'>倒浆量:</td>
        <td class=x69>/</td>
        <td></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r14'>
        <td colspan=4 id='tc23' class=x69 style='text-align: left;'>余浆情况:
          <el-checkbox-group v-model="checkList4" style="display: inline;">
            <el-checkbox label="1">正常</el-checkbox>
            <el-checkbox label="2">较稠</el-checkbox>
            <el-checkbox label="3">稠</el-checkbox>
          </el-checkbox-group>
        </td>
        <td class=x69>/</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r15'>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>12</td>
        <td colspan=2 id='tc24' rowspan=2 height=36 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">养护</td>
        <td colspan=4 id='tc25' class=x69 style='text-align: left;'>时间: 月 日 时 分 至 月 日 时 分</td>
        <td class=x69>/</td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r16'>
        <td colspan=4 id='tc26' class=x69 style='text-align: left;'>池号:
          <el-checkbox-group v-model="checkList5" style="display: inline;">
            <el-checkbox label="1">#1</el-checkbox>
            <el-checkbox label="2">#2</el-checkbox>
            <el-checkbox label="3">#3</el-checkbox>
          </el-checkbox-group>
        </td>
        <td class=x69>/</td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r17'>
        <td height=18 class=x69 style='height:13.5pt;'>13</td>
        <td colspan=2 id='tc27' class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">放松、脱模</td>
        <td colspan=4 id='tc28' class=x69 style='text-align: left;'>检查螺栓及放松顺序情况:</td>
        <td class=x69></td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r18'>
        <td rowspan=3 height=54 class=x69 style='height:40.5pt;'>14</td>
        <td rowspan=3 height=54 class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">成品检验</td>
        <td class=x69>内壁</td>
        <td colspan=4 id='tc29' class=x69 style='text-align: left;'>检查内壁厚、表面、离心成型情况:</td>
        <td rowspan=2 height=36 class=x69 style='height:27pt;'>/</td>
        <td></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r19'>
        <td class=x69>外壁</td>
        <td colspan=4 id='tc30' class=x69 style='text-align: left;'>检查外壁缺陷情况:</td>
        <td></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r20'>
        <td class=x69>端部</td>
        <td colspan=4 id='tc31' class=x69 style='text-align: left;'>检查端部敏头脱帽、外露情况: (
          <el-radio-group v-model="checkList6" style="display: inline;">
            <el-radio :label="1">有</el-radio>
            <el-radio :label="2">无</el-radio>
          </el-radio-group>
          )</td>
        <td class=x69></td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r21'>
        <td height=18 class=x69 style='height:13.5pt;'>15</td>
        <td colspan=2 id='tc32' class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">成品标识</td>
        <td colspan=4 id='tc33' class=x69 style='text-align: left;'>核对名称、型号、规格、柱长:</td>
        <td class=x69>/</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r22'>
        <td height=18 class=x69 style='height:13.5pt;'>16</td>
        <td colspan=2 id='tc34' class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">钢柱靴焊接</td>
        <td colspan=4 id='tc35' class=x69 style='text-align: left;'>检查爆缝情况: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 轴线偏差情况:</td>
        <td class=x69>/</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r23'>
        <td height=18 class=x69 style='height:13.5pt;'>17</td>
        <td colspan=2 id='tc36' class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">缺陷修复</td>
        <td colspan=4 id='tc37' class=x69 style='text-align: left;'></td>
        <td class=x69>/</td>
        <td class=x69></td>
      </tr>
      <tr height=18 style='mso-height-source:userset;height:13.5pt' id='r24'>
        <td height=18 class=x69 style='height:13.5pt;'>18</td>
        <td colspan=2 id='tc38' class=x69 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">质量评定</td>
        <td colspan=4 id='tc39' class=x69 style='text-align: left;'>

          <el-radio-group v-model="checkList7" style="display: inline;">
            <el-radio :label="1">合格</el-radio>
            <el-radio :label="2">不合格</el-radio>
          </el-radio-group>
        </td>
        <td class=x69>/</td>
        <td class=x69></td>
      </tr>
      <tr height=0 style='display:none'>
        <td width=72 style='width:54pt'></td>
        <td width=72 style='width:54pt'></td>
        <td width=173 style='width:129.75pt'></td>
        <td width=72 style='width:54pt'></td>
        <td width=164 style='width:123pt'></td>
        <td width=163 style='width:122.25pt'></td>
        <td width=210 style='width:157.5pt'></td>
        <td width=220 style='width:165pt'></td>
        <td width=167 style='width:125.25pt'></td>
      </tr>
    </table>


    <table v-show="tableName == 'PHC管桩钢筋笼制作生产记录及检验表' " border=1 cellpadding=10 cellspacing=0>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r1'>
        <td colspan=2 id='tc1' height=20 class=x21 style=''>生产日期</td>
        <td colspan=1></td>
        <td colspan=1>钢筋笼编号</td>
        <td colspan=1></td>
        <td colspan=1 id='tc2' class=x21 style=''>柱长(m)</td>
        <td colspan=2></td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r2'>
        <td colspan=2 id='tc4' height=20 class=x21 style=''>工序</td>
        <td class=x21 style='text-align: left;'>情况记录</td>
        <td class=x21>工序时间</td>
        <td class=x21>操作人 <el-input placeholder="输入姓名" style="width:60%"></el-input>
        </td>
        <td class=x21>班组质检员</td>
        <td class=x21>公司质检员</td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r3'>
        <td height=60 class=x21 style='height:45pt;'>1</td>
        <td rowspan=3 height=60 class=x21 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">下料、墩头</td>
        <td class=x21 style='text-align: left;'>下料长度:,误差: <br> <br> 墩头直径 :, 敏头厚度 : <br> <br>异常情况: </td>
        <td rowspan=2 height=40 class=x21 style='height:30pt;'>月 日</td>
        <td class=x21 style='text-align: left;'>主机:</td>
        <td rowspan=3 height=40 class=x21 style='height:30pt;'></td>
        <td rowspan=5></td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r4'>
        <td height=60 class=x21 style='height:45pt;'>2</td>
        <td class=x21 style='text-align: left;'>墩头直径:, 墩头厚度: <br> <br>异常情况:</td>
        <td class=x21 style='text-align: left;'>铺机:</td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r5'>
        <td height=60 class=x21 style='height:45pt;'>3</td>
        <td class=x21 style='text-align: left;'>原材料及墩头试验:
          <el-radio-group v-model="checkList7" style="display: inline;">
            <el-radio :label="1">合格</el-radio>
            <el-radio :label="2">不合格</el-radio>
          </el-radio-group>
          <br> <br>异常情况:</td>
        <td class=x21>月 日</td>
        <td class=x21></td>
      </tr>
      <tr height=20 style='mso-height-source:userset;height:15pt' id='r6'>
        <td rowspan=2 height=40 class=x21 style='height:30pt;'>4</td>
        <td rowspan=2 height=40 class=x21 style="color:#00C1DE;cursor: pointer;" @dblclick.stop.prevent="getInfo" @mouseover.stop.prevent="toggleShow(true)" @mouseout.stop.prevent="toggleShow(false)">钢筋笼制作(含透气孔安装)</td>
        <td rowspan=2 style='text-align: left;'>钢筋长度相对误差: <br> <br>端面平整误差: <br> <br> 加密断箍筋间距: <br> <br> 非加密断箍筋间距: <br> <br>异常情况： </td>
        <td rowspan=2 class=x21>月 日</td>
        <td rowspan=2 height=40 class=x21 style='height:30pt;'></td>
        <td rowspan=2 height=40 class=x21 style='height:30pt;'></td>
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
        "productionDes": "工程描述",
        "groupId": [1,2,3],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程2",
        "procedure1": "钢筋、模板",
        "procedure2": "张拉、离心",
        "production": "型号2",
        "productType": 1,
        "productionDes": "工程描述",
        "groupId": [2,3],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程3",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号3",
        "productType": 2,
        "productionDes": "工程描述",
        "groupId": [2,3,5,6],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程4",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号4",
        "productType": 2,
        "productionDes": "工程描述",
        "groupId": [5,6],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程5",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号5",
        "productType": 2,
        "productionDes": "工程描述",
        "groupId": [1,5,6],
        "operator": "操作人",
        "operatorTime": "2018-10-21 12:10:11"
      }, {
        "id": "1",
        "productName": "工程6",
        "procedure1": "下料",
        "procedure2": "",
        "production": "型号6",
        "productType": 2,
        "productionDes": "工程描述",
        "groupId": [1,2,4],
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
