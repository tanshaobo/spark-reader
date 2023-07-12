<!--
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-07-12 09:28:03
 * @Description: 项目入口部分 布局为左右布局
 * @FilePath: \spark-reader\src\views\Home\Index.vue
-->
<template>
  <el-container>
    <el-aside>
      <SideMenu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import SideMenu from '@/components/layout/SideMenu/index.vue'
import Header from '@/components/layout/Header/index.vue'
</script>
<style lang="stylus" scoped>
.el-container
  .el-aside
    width 240px
    height 100vh
    box-shadow inset 0 2px 8px 0px rgba(255, 0, 0, .4)
  .el-container
    width calc(100vw - 240px)
    .el-header
      box-shadow inset 0 2px 8px 0px rgba(0, 0, 0, .4)
    .el-main
      height calc(100vh - 120px)
      box-shadow inset 0 2px 8px 0px rgba(0, 255, 0, .4)
    .el-footer
      box-shadow inset 0 2px 8px 0px rgba(0, 0, 255, .4)
</style>
