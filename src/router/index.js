import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

import MenuUtils from '@/views/MenuUtils'

Vue.use(Router)

let load = {
  forload: function(treeData) {
    // let userType = window.sessionStorage.getItem('userType')
    for (let i = 0; i < treeData.length; i++) {
      if (treeData[i].children && treeData[i].children.length > 0 && treeData[i].leaf == false) { //有下级
        treeData[i].meta = {
          title: treeData[i].label,
          icon: treeData[i].icon
        }
        treeData[i].name = treeData[i].label
        treeData[i].path = '/' + treeData[i].menuUrl
        treeData[i].leaf = false
        treeData[i].parentComponent = ''
        treeData[i].component = 'layout'
        treeData[i].redirect = '/' + treeData[i].menuUrl + '/' + treeData[i].children[0].menuUrl + ''
        let childrenData = treeData[i].children;
        for (let x in childrenData) {
          childrenData[x].parentComponent = '/' + treeData[i].menuUrl
        }
        // if (userType != '0' && userType != '101' && treeData[i].menuUrl != 'dashboard') treeData[i].hidden = true

      } else if (treeData[i].leaf == true) {
        treeData[i].meta = {
          title: treeData[i].label,
          icon: treeData[i].icon
        }
        treeData[i].name = treeData[i].label
        treeData[i].path = treeData[i].menuUrl
        treeData[i].leaf = true
        // if (userType != '0' && userType != '101') treeData[i].hidden = true
        treeData[i].component = treeData[i].menuUrl
        treeData[i].children = []
      }
      if (treeData[i].children) {
        treeData[i].children = this.forload(treeData[i].children)
      } else {
        continue
      }
    }
    return treeData
  }
}

var routers = []
var treeData = window.sessionStorage.getItem('treeData')
var data = JSON.parse(window.localStorage.getItem('user'))

if (treeData != null && data) {
  treeData = JSON.parse(treeData)
  let data = load.forload(treeData)
  MenuUtils(routers, treeData)
} else {
  store.dispatch('LogOut')
}

/* Layout */
import Layout from '@/views/layout/index.vue'
// const login = r => require.ensure([], () => r(_import('login/index')), 'login')
const login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
const page404 = r => require.ensure([], () => r(require("@/views/404.vue")), 'page404');

// const dashboard = r => require.ensure([], () => r(require("@/views/dashboard/index")), 'dashboard');
const system = r => require.ensure([], () => r(require("@/views/statistAnalysis/finishedGraph/index")), 'user');




/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
let arrRouter = [{
    path: '/login',
    component: login,
    name: 'login',
    leaf: true,
    hidden: true
  },
  {
    path: '/404',
    component: page404,
    name: '404',
    leaf: true,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/system',
    hidden: true,
    meta: {
      title: '首页',
      icon: "table"
    },
    children: [{
      path: 'system',
      component: system
    }]
  },

]
let arr = [...arrRouter, ...routers];
export const constantRouterMap = arr


export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
