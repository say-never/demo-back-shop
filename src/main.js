import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
// import { config } from 'vue_api_server/public/ueditor/third-party/zeroclipboard/ZeroClipboard'
//配置请求的根路径
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'

axios.interceptors.request.use(config => {
  // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config // 必须返回否则没有值
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table',TreeTable)

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
