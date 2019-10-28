import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../views/login/index.vue'
import Home from '../views/Home/index.vue'
import welcome from '../views/welcome/index.vue'
import NotFound from '../views/404/index.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  // 路由配置对象
  // 关键选项：routes 作用：配置路由规则
  routes: [{
    // 登录
    path: '/login',
    component: Login
  },
  {
    // 首页
    path: '/',
    component: Home,
    children: [
      // 欢迎
      {
        path: '/',
        component: welcome
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
  ]
})
export default router
