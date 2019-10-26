import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../views/login/index.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  // 路由配置对象
  // 关键选项：routes 作用：配置路由规则
  routes: [{
    path: '/login',
    component: Login
  }]
})
export default router
