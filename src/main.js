import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
// import '@/icons' // 本地图标库
import '@/permission' // 权限
import validate from './utils/validate' // 验证
//全局变量
Vue.prototype.imgBaseUrl = 'http://222.73.22.8:42080/';
// Vue.prototype.docUrl = 'http://192.168.191.1:8080/xtcx';

// Vue.prototype.imgBaseUrl = 'http://127.0.0.1:9990/upload/';
// Vue.prototype.docUrl = 'http://127.0.0.1:9990/api';

// Vue.prototype.imgBaseUrl = 'http://127.0.0.1:9009/upload/';
// Vue.prototype.docUrl = 'http://127.0.0.1:8080';

Vue.prototype.urlencode = function(str) {
  str = (str + '').toString();
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
  replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}
Vue.prototype.deepCopy = function(src) {
    var ret = {}
    for (var k in src) {
        ret[k] = typeof src[k] ==='object' ? Vue.prototype.deepCopy(src[k]) : src[k]
    }
    return ret
}
Vue.prototype.getformatTime = function(value) {
  var time = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  return  format(time,"yyyy-MM-dd hh:mm:ss")
}
/**
 * 时间对象的格式化;
 */
 function format(time,format) {
    /*
     * eg:format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+" : time.getMonth() + 1, // month
        "d+" : time.getDate(), // day
        "h+" : time.getHours(), // hour
        "m+" : time.getMinutes(), // minute
        "s+" : time.getSeconds(), // second
        "q+" : Math.floor((time.getMonth() + 3) / 3), // quarter
        "S" : time.getMilliseconds()
        // millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4
                        - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? o[k]
                            : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}
Vue.prototype.deepCopy = function(src) {
    var ret = {}
    for (var k in src) {
        ret[k] = typeof src[k] ==='object' ? Vue.prototype.deepCopy(src[k]) : src[k]
    }
    return ret
}
Vue.filter('formatTime', value => {
  var d = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let year = d.getFullYear()
  let month = parseInt(d.getMonth() + 1)
  let date = d.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  return year + '-' + month + '-' + date
})
Vue.filter('replaceKG', value => {
  value = value.replace(/<\/?.+?>/g, "");
  value = value.replace(/[\r\n]/g, "");
  value = value.replace(/\s+/g, "");
  return value;
})

Vue.prototype.validata = validate



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
