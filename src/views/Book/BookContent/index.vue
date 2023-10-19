<!--
 * @Author: tanshaobo
 * @Date: 2023-08-18 14:55:58
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-10-19 17:19:34
 * @Description: 书籍内容页
 * @FilePath: \spark-reader\src\views\Book\BookContent\index.vue
-->

<template>
  <div>{{ content }}</div>
</template>

<script setup name="BookContent">
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { getContent } from '@/http/common'
import currentBook from '@/store/index'

const state = reactive({
  content: ''
})

const route = useRoute()

const { params } = route

const GetContent = () => {
  const store = currentBook()
  const { bookId, bookName, catalogueId, catalogueName, catalogueUrl } = store
  if (bookName && catalogueUrl) {
    getContent(store).then((res) => {
      state.content = res
    })
  } else {
    console.log(params)
  }
}

const Init = () => {
  GetContent()
}
Init()

const { content } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
