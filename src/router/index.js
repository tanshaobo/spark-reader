/*
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-06-17 10:54:10
 * @Description: file content
 * @FilePath: \spark-reader\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './modules'

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
