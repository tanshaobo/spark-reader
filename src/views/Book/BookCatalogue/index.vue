<!--
 * @Author: tanshaobo
 * @Date: 2023-08-17 15:55:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-18 15:07:14
 * @Description: 目录页
 * @FilePath: \spark-reader\src\views\Book\BookCatalogue\index.vue
-->
<template>
  <div>书籍目录页</div>
  <el-button @click="goContent(item)">进入第一章</el-button>
</template>

<script setup name="BookCatalogue">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goContent = () => {
  router.push({
    name: 'BookContent',
    params: {
      ...route.params,
      chapterId: '1-1'
    }
  })
}
</script>

<style lang="stylus" scoped></style>
