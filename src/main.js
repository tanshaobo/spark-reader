/*
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-06-17 11:30:42
 * @Description: 入口文件部分
 * @FilePath: \spark-reader\src\main.js
 */
import { createApp } from 'vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import store from './store'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
