/*
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-18 16:10:09
 * @Description: vite脚手架配置文件
 * @FilePath: \spark-reader\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// 设置别名
const resolve = {
  alias: [
    { find: '@', replacement: `${path.resolve(__dirname, './src')}` }
  ]
}
// 设置开发服务
const server = {
  host: 'localhost', // 主机
  port: 9527, // 端口
  open: true, // 自动打开浏览器 或选择浏览器
  cors: true, // 允许跨域
  proxy: { // 代理
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}

// css预设
// let vfile = String.raw`${path.resolve(__dirname, './src/style/element-variables.scss')}`

// if (os.type() === 'Windows_NT') {
//   vfile = vfile.replace(/\\/g, '\\\\')
// }
const css = {
  modules: {
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  }
  // preprocessorOptions: {
  //   scss: {
  //     additionalData: `@import '${vfile}';`
  //   }
  // }
}
const build ={
  outDir:  'docs', // 打包输出目录
  // rollupOptions: {
  //   output: {
  //     manualChunks(id) {
  //       if (id.includes('node_modules')) {
  //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //       }
  //     }
  //   }
  // }
}
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  resolve,
  server,
  css,
  build,
  plugins: [vue(), vueSetupExtend()]
})
