<!--
 * @Author: tanshaobo
 * @Date: 2023-08-17 15:55:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-07 15:06:19
 * @Description: 目录页
 * @FilePath: \spark-reader\src\views\Book\BookCatalogue\index.vue
-->
<template>
  <div>书籍目录页</div>
  <el-button @click="goContent(item)">进入第一章</el-button>
</template>

<script setup name="BookCatalogue">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { params } = window.history.state
console.log(route)
const goContent = () => {
  params.chapterId = '1-1'
  router.push({
    name: 'BookContent',
    state: {
      params
    }
  })
}
// console.log(params.bookName)
// const n = '/src/source/1/*.txt'
// // const files = import.meta.glob(`/src/source/${params.bookName}/*.txt`)
// const files = import.meta.glob(n)

// console.log(files)
</script>

<style lang="stylus" scoped></style>
