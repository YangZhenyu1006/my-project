import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'

import axios from '@/api'
import MyBread from './components/my-bread.vue'
// plugin是插件的意思
import plugin from '@/components'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('my-bread', MyBread)
Vue.use(plugin)
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
