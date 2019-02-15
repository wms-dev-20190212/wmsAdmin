<template>
<div class="tab-container">
  <div class="tools">
    <div class="paddingb textl paddingr">


      <el-button   style="margin-left:20px" @click="loadPageList" type="primary" icon="el-icon-search"></el-button>

      <el-button   style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-circle-plus-outline">添加组织</el-button>

    </div>
  </div>

  <tree-table :data="list" :evalFunc="func" :expandAll="expandAll" border style="text-align: center;">
    <!-- <el-table-column type="index" width="50" align="center" label="ID">
    </el-table-column> -->
    <!-- <el-table-column align="center" label="组织名称">
      <template slot-scope="scope">
        <span :style="{'margin-left':(scope.row._level-1) * 40 + 'px'}">

          <span v-show="scope.row._level>1"> <i class="iconfont icon-jiantouarrow514 rotate" style="font-weight: bold;"></i> &nbsp;</span>{{ scope.row.name }}

        </span>
      </template>
    </el-table-column> -->


    <!-- <el-table-column align="center" label="类型">
      <template slot-scope="scope">
        <span v-if="scope.row.parentOrgId =='1'">
          管理员</span>
        <span v-if="scope.row.parentOrgId =='2'">
          施工人员</span>
        <span v-if="scope.row.parentOrgId =='3'">
          质检员 </span>
        <span v-if="scope.row.parentOrgId =='4'">
          派单人员</span>
      </template>
    </el-table-column> -->
    <el-table-column align="center" label="描述">
      <template slot-scope="scope">
        <span>
          {{ scope.row.des}}</span>
      </template>
    </el-table-column>



    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button v-show="!scope.row.leaf" size="small" @click="handleCreate(scope.row,'add')" type="" class="el-icon-plus colorblue borderblue"></el-button>
        <button v-show="scope.row.leaf" type="" style="border:none;width:34px;margin: 0;visibility: hidden;"></button>
        <el-button size="small" @click="handleEdit(scope.row,'edit')" type="" class="el-icon-edit colorblue borderblue"></el-button>
        <el-button size="small" v-show="scope.row.parentOrgId != 0" @click="handleEdit(scope.row,'del')" type="" class="el-icon-delete colorred borderred" style="margin:0"></el-button>
        <button  v-show="scope.row.parentOrgId == 0" type="" style="border:none;width:34px;margin: 0;visibility: hidden;"></button>

      </template>
    </el-table-column>

  </tree-table>
  <!--
  <div class="pagination-container pageH" style="padding-top:20px">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
  </div> -->


  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%" top='5%'>

    <el-form class="" label-width="20%" style="text-align:left">

      <el-row :gutter="24">

        <el-form-item label="部门名称">
          <el-input v-model="obj.name" placeholder="请输入部门名称" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="obj.des" placeholder="请输入描述" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-input v-model="obj.major" placeholder="请输入等级" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="obj.phone" placeholder="请输入手机号" style="width:80%"></el-input>
        </el-form-item>
      </el-row>


    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" v-if="dialogadd == true" @click="addCreate(obj)">添加</el-button>
      <el-button type="primary" v-if="dialogsave == true" @click="saveCreate(obj)">修改</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
    </span>
  </el-dialog>
  <!--   -->
  <el-dialog :title="tableName" :visible.sync="dialogFormTable" width="20%" top='2%'>
    <el-tree :data="dataList" show-checkbox default-expand-all :default-checked-keys="checkedArr" :props="defaultProps" node-key="id" ref="tree" @node-click="handleNodeClick" style="height: 600px;overflow: auto;"></el-tree>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="editOrgAuthRela(dataList)">保存</el-button>
    </span>
  </el-dialog>

</div>
</template>

<script>
 "use strict";
import mixin from '@/mixins/list' // 引入
import {
  getdepartList,
  addDepart,
  editDepart,
  delDepart
} from '@/api/depart'

import treeTable from '@/components/TreeTable'
import treeToArray from './customEval'


export default {
  inject:['reload'],
  mixins: [mixin], // 使用mixins
  components: {
    treeTable
  },
  data() {
    return {
      func: treeToArray,
      expandAll: true,
      tableName: '权限分配',
      dialogFormTable: false, //控制弹出层
      checkedArr: [],
      input: {
        objName: '',
        userType: '',
        status: '',
      },
      obj: {
        name: '',
        major: '',
        phone: '',
        des: '',
      },
      dataList: [],
      defaultProps: {
        children: 'children',
        label: 'label'
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
      } = await getdepartList(this.listQuery)
      if (success) {
        debugger
        this.list = data.list
        // this.total = data.total
        this.loading = false
      }
    },

    handleNodeClick(val) {
      console.log(val)

    },
    async handleCreate(obj) {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.dialogadd = true
      this.dialogsave = false
      this.obj = {
        name: '',
        major: '',
        phone: '',
        des: '',
      }
    },
    //  getArrDifference(arr1, arr2) {
    //
    //  return arr1.concat(arr2).filter(function(v, i, arr) {
    //
    //      return arr.indexOf(v) === arr.lastIndexOf(v);
    //
    //  });
    //
    // },
    async editOrgAuthRela(obj) {
      let treeArr = this.$refs.tree.getCheckedNodes()
      let checkedArr = JSON.parse(window.sessionStorage.getItem('checkedArr'))
      // console.log('修改前'+JSON.stringify(checkedArr))
      let childArr = []
      Array.from(treeArr).forEach(function(treeData) {
        if (!treeData.children) {
          let childObj = {}
          childObj.id = treeData.id
          childArr.push(childObj)
        }
      });
      // console.log('修改后'+JSON.stringify(childArr))
      Array.from(childArr).forEach(function(childData) {
        Array.from(checkedArr).forEach(function(data) {
          if (data.id == childData.id) {
            checkedArr.splice(checkedArr.findIndex(data => data.id === childData.id), 1)
            childArr.splice(childArr.findIndex(data => data.id === childData.id), 1)
            return
          }
        });

      });

      checkedArr = [...childArr, ...checkedArr]
      //筛选改动的数据

      // console.log('checkedArr'+JSON.stringify(checkedArr))
      // console.log('childArr'+JSON.stringify(childArr))

      Array.from(checkedArr).forEach(function(arr) {
        let idArrr = []
        idArrr = arr.id.split('-')
        arr.orgId = idArrr[0]
        arr.authId = idArrr[1]
        arr.id = idArrr[2]
        arr.label = idArrr[4]
        arr.value == 1 ? arr[idArrr[3]] = 0 : arr[idArrr[3]] = 1
        arr.value == 1 ? arr.value = 0 : arr.value = 1
      });
      console.log('变化' + JSON.stringify(checkedArr))

      let {
        data,
        success
      } = await saveOrgAuthRela(checkedArr)
      if (success) {
        this.$message({
          type: 'success',
          message: '提交成功!'
        });
        this.reload()
        this.dialogFormTable = false
      }
    },

    async addCreate(obj) {
      obj.parent_id = 0
      // if (!this.validata.validaManageUser(obj)) return
      let {
        data,
        success
      } = await addDepart(obj)
      if (success) {
        this.loadPageList()
        this.dialogFormVisible = false
      }
    },

    async saveCreate(obj) {
      delete obj.auth
      obj.children = []
      delete obj.parent
      this.dialogFormVisible = false
      obj.parent_id = obj.parent_id || 0
      // if (!this.validata.validaManageUser(obj)) return
      let {
        data,
        success
      } = await editDepart(obj)
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
        this.$confirm('此操作将删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          delete data.auth
          data.children = []
          delete data.parent
          let {
            code,
            success
          } = await delDepart(data.id)
          // this.list.splice(this.list.indexOf(data), 1)

          this.loadPageList()
          if(!code){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }

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
.rotate:before {
    transform: rotate(180deg);
    display: inline-block;
    padding-top: 3px;
}
</style>
