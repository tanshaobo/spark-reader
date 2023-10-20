<!--
 * @Author: tanshaobo
 * @Date: 2023-08-18 14:55:58
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-10-20 17:09:45
 * @Description: 书籍内容页
 * @FilePath: \spark-reader\src\views\Book\BookContent\index.vue
-->

<template>
  <div>{{ content }}</div>
</template>

<script setup name="BookContent">
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { getBookList, getCatalogueList, getContent } from '@/http/common'
import currentBook from '@/store/index'

const state = reactive({
  content: '',
  bookName: '',
  catalogueName: ''
})

const route = useRoute()

const { params } = route

const GetContent = () => {
  const store = currentBook()
  const { bookName, catalogueUrl } = store
  if (bookName && catalogueUrl) {
    getContent(store).then((res) => {
      state.content = res
    })
  } else {
    const { catalogueId } = params
    getCatalogueList(params)
      .then((res) => {
        const param = res.find((item) => item.catalogueId === catalogueId)
        store.subCurrentBook({
          ...param
        })
        return getContent(param)
      })
      .then((res) => {
        console.log(res)
        state.content = res
      })
  }
}

const Init = () => {
  GetContent()
}
Init()

const { content } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
