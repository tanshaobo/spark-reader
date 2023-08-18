/*
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-18 16:18:06
 * @Description: 入口文件部分
 * @FilePath: \spark-reader\src\main.js
 */
import { createApp } from 'vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import store from './store'
import './style/common.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
