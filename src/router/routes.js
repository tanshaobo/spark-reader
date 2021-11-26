// 登录
const home = {
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home.vue')
}

// 匹配路由
const routes = [home]
export default routes
