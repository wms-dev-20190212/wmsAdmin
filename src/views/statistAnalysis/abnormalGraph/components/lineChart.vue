<template>
<div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts 主题

import {
  debounce
} from '@/utils'


import {
  pca,
  pcaa
} from "area-data";
export default {
  props: {
    className: {
      type: String,
      default: 'charts'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    },
    width: {
      type: String,
      default: '1484px'
    },
    height: {
      type: String,
      default: '440px'
    },
  },
  data() {
    return {
      chart: null,
      pca: pcaa, //最多省市区三级，结合:level='2'选择，0省、1省市、2省市区
    }
  },
  mounted() {
    this.initChart(this.chartData)
    if (this.autoResize) {
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    }
    // 监听侧边栏的变化
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHanlder)
    }

    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)

    this.chart.dispose()
    this.chart = null
  },
  // watch: {
  //   chartData: {
  //     deep: true,
  //     handler(val) {
  //       this.setOptions(val)
  //     }
  //   }
  // },
  methods: {
    async initChart(objdata) {
      this.$emit('childByValue', '123')

      let  arrDate =[]
      for (let i=7 ;i>0;i--){
        var newdate =''
        var d = new Date(); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let year = d.getFullYear()
        let month = parseInt(d.getMonth() + 1)
        let date = d.getDate() -i
        if (month < 10) {
          month = '0' + month
        }
        if (date < 10) {
          date = '0' + date
        }
        newdate = year + '-' + month + '-' + date;
        arrDate.push(newdate)
      }


      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['工程1', '工程2'],
          align: 'right',
          right: 10
        },
        xAxis: {
          name: '/日期',
          type: 'category',
          data: arrDate
        },
        yAxis: {
          name: '/个数',
          type: 'value'
        },
        series: [{
          name: '工程1',
          type: 'line',
          data: [1, 2, 20, 69, 30, 12, 15]
        }, {
          name: '工程2',
          type: 'line',
          data: [16, 49, 23, 11, 33, 16, 32]
        }, ]
      })
    },
    fliterCountry(data) {
      // this.arrValue2 = []
      // let pcadata = this.pca
      // let arr = []
      // for (var i in pcadata) {
      //   if (i == oneData) {
      //     let obj = {}
      //     obj.date = i
      //     obj.value = pcadata[i]
      //     arr.push(obj)
      //   }
      // }
      // arr = arr[0].value
      // for (var j in arr) {
      //   let obj = {}
      //   obj.name = j
      //   obj.value = arr[j]
      //   this.arrValue2.push(obj)
      // }
      return data
    },
    fliterEducation(data) {
      if (data == '1') {
        data = '小学'
      } else if (data == '2') {
        data = '初中'
      } else if (data == '3') {
        data = '高中'
      } else if (data == '4') {
        data = '大专'
      } else if (data == '5') {
        data = '本科'
      } else if (data == '6') {
        data = '研究生'
      } else if (data == '7') {
        data = '博士'
      } else if (data == '99') {
        data = '其他'
      }
      return data
    },
    fliterDegree(data) {
      if (data == '1') {
        data = '学士'
      } else if (data == '2') {
        data = '硕士'
      } else if (data == '3') {
        data = '博士'
      } else if (data == '99') {
        data = '其他'
      }
      return data
    },
    fliterSex(data) {
      if (data == '1') {
        data = '男'
      } else if (data == '0') {
        data = '女'
      }
      return data
    },
    fliterResearchField(data) {
      if (data == '1') {
        data = '智能装备'
      } else if (data == '2') {
        data = '电子信息'
      } else if (data == '3') {
        data = '新材料'
      } else if (data == '4') {
        data = '航空航天'
      } else if (data == '5') {
        data = '生物技术与新医药'
      } else if (data == '6') {
        data = '能源与环保'
      } else if (data == '7') {
        data = '管理'
      } else if (data == '99') {
        data = '其他'
      }
      return data
    },
  },
  watch: {
    // infoObj: function() {
    //   this.initChart(this.infoObj)
    // }
  }
}
</script>
