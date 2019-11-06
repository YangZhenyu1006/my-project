import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../views/login/index.vue'
import Home from '../views/Home/index.vue'
import welcome from '../views/welcome/index.vue'
import NotFound from '../views/404/index.vue'
import local from '../utils/local'
import Article from '../views/article/index.vue'
import Image from '../views/image/index.vue'
import Publish from '../views/publish/index.vue'
import Comment from '../views/comment/index.vue'

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
      },
      // 内容
      {
        path: '/article',
        component: Article
      },
      // 素材
      {
        path: '/image',
        component: Image
      },
      // 发布
      {
        path: '/publish',
        component: Publish
      },
      // 评论管理
      {
        path: '/comment',
        component: Comment
      }
    ]
  },
  // 404处理
  {
    path: '*',
    component: NotFound
  }

  ]
})
// 路由导航守卫,(前置导航守卫)[后置导航钩子]
router.beforeEach((to, from, next) => {
  // to跳转目标路由对象
  // from从哪里跳过来的路由对象
  // next()放行 next("/login") 拦截到那里
  // next()
  // 如果你访问的不是登录页面,又没有登录,跳转到登录页面
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
