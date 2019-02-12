<template>
<el-table :data="formatData" :row-style="showRow" v-bind="$attrs">
  <el-table-column v-if="columns.length===0" align="left" label="名称" width='600'>
    <template slot-scope="scope">
      <!-- <span v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span> -->
      <span class="tree-ctrl" @click="toggleExpanded(scope.$index)" >
        <div class="">
          <span v-show="scope.row.children.length == 0 && scope.row._level == 1">
            <i v-if="!scope.row._expanded" class="iconfont icon-jiantou" slot="right" :style="{'margin-left':scope.row._level * 20+150 + 'px;'}"></i>
            <!-- <i v-else class="el-icon-minus"></i> -->
            <i v-else class="iconfont icon-zhankai1" slot="right" :style="{'margin-left':scope.row._level * 20+150 + 'px'}"></i>
          </span>
          <span v-show="scope.row.children.length > 0">
            <i v-if="!scope.row._expanded" class="iconfont icon-jiantou" slot="right" :style="{'margin-left':scope.row._level * 20+150 + 'px;'}"></i>
            <!-- <i v-else class="el-icon-minus"></i> -->
            <i v-else class="iconfont icon-zhankai1" slot="right" :style="{'margin-left':scope.row._level * 20+150 + 'px'}"></i>
          </span>
            <span  v-show="scope.row.children.length == 0 && scope.row._level > 1" :style="{'margin-left':scope.row._level * 20+150 + 'px'}"> <i class="iconfont icon-jiantouarrow514 rotate" style="font-weight: bold;"></i></span>
            <!-- <span  v-show="scope.row.children.length == 0 && scope.row._level == 1" style=""> **</span> -->
          {{ scope.row.name|| scope.row.label }}
        </div>

      </span>

      <!-- {{scope.$index}} -->
    </template>
  </el-table-column>
  <el-table-column v-else v-for="(column, index) in columns" :key="column.value" :label="column.text" :width="column.width">
    <template slot-scope="scope">
      <!-- <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span> -->
      <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)" style="padding-left:20px;">
        <div class="" style="text-align: left;">
          <i v-if="!scope.row._expanded" class="el-icon-plus"></i>
          <i v-else class="el-icon-minus"></i>
        </div>
      </span>
      <!-- {{scope.row[column.value]}} -->
    </template>
  </el-table-column>
  <slot></slot>
</el-table>
</template>

<script>
/**
  Auth: Lei.j1ang
  Created: 2018/1/19-13:59
*/
import treeToArray from './eval'
export default {
  name: 'treeTable',
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源
    formatData: function() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  methods: {
    showRow: function(row) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    // 图标显示
    iconShow(index, record) {
      return (index === 0 && record.children && record.children.length > 0)
    }
  }
}
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196F3;
$space-width: 18px;
.ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: $space-width;
    &::before {
        content: "";
    }
}
.processContainer {
    width: 100%;
    height: 100%;
}
table td {}

.tree-ctrl {
    position: relative;
    cursor: pointer;
    color: #606266;
}
.rotate:before {
    transform: rotate(180deg);
    display: inline-block;
    padding-top: 3px;
    font-weight: 100;
}
</style>
