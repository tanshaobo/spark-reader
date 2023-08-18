<!--
 * @Author: tanshaobo
 * @Date: 2023-08-16 16:45:08
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-18 15:03:21
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

const goCatalogue = () => {
  router.push({
    name: 'BookCatalogue',
    params: {
      bookId: route.params.bookId
    }
  })
}
</script>

<style lang="stylus" scoped></style>
