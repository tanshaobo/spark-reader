<!--
 * @Author: tanshaobo
 * @Date: 2023-08-16 16:45:08
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-20 16:51:53
 * @Description: 书籍详情
 * @FilePath: \spark-reader\src\views\Book\BookDetail\index.vue
-->

<template>
  <el-button @click="goCatalogue">查看目录</el-button>
</template>

<script setup name="BookDetail">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { params } = route
const goCatalogue = () => {
  router.push({
    name: 'BookCatalogue',
    params
  })
}
</script>

<style lang="stylus" scoped></style>
