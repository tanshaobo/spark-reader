/*
 * @Author: tanshaobo
 * @Date: 2023-03-30 14:53:06
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-06-08 15:36:26
 * @Description: file content
 * @FilePath: \spark-reader\src\router\routes.js
 */
// 登录
const home = {
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home/Home.vue')
}

// 匹配路由
const routes = [home]
export default routes
