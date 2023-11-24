import { createRouter, createWebHashHistory } from 'vue-router'
// 导入登录的vue组件
import Login from '../components/Login.vue'

// 定义路由的规则
const routes = [
  // 登录的路由规则，交给Login组件处理
  { path: '/login', component: Login },
  { path: '/', redirect: '/login' } // 根目录的访问也重定向到登录组件
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
