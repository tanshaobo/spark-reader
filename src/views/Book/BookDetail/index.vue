<!--
 * @Author: tanshaobo
 * @Date: 2023-08-16 16:45:08
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-08 16:12:12
 * @Description: 书籍详情
 * @FilePath: \spark-reader\src\views\Book\BookDetail\index.vue
-->

<template>
  <div>书籍详情页</div>
  <el-button @click="goCatalogue">查看目录</el-button>
</template>

<script setup name="BookDetail">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { query } = route
const goCatalogue = () => {
  router.push({
    name: 'BookCatalogue',
    state: {
      query
    }
  })
}
</script>

<style lang="stylus" scoped></style>
