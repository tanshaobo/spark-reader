<!--
 * @Author: tanshaobo
 * @Date: 2023-08-17 15:55:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-06 17:38:32
 * @Description: 目录页
 * @FilePath: \spark-reader\src\views\Book\BookCatalogue\index.vue
-->
<template>
  <div>书籍目录页</div>
  <el-button @click="goContent(item)">进入第一章</el-button>
</template>

<script setup name="BookCatalogue">
import { useRouter } from 'vue-router'

const router = useRouter()
// const file = import.meta.glob(`/src/source/${route.params.bookName}/*.txt`)

const goContent = () => {
  const { params } = window.history.state
  params.chapterId = '1-1'
  router.push({
    name: 'BookContent',
    state: {
      params
    }
  })
}

const files = import.meta.glob(`/src/source/1/*.txt`)

console.log(files)
</script>

<style lang="stylus" scoped></style>
