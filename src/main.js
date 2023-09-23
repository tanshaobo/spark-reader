/*
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-23 15:39:42
 * @Description: 入口文件部分
 * @FilePath: \spark-reader\src\main.js
 */
import { createApp } from 'vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style/common.css'
import 'element-plus/dist/index.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
