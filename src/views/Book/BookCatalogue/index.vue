<!--
 * @Author: tanshaobo
 * @Date: 2023-08-17 15:55:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-27 17:39:22
 * @Description: 目录页
 * @FilePath: \spark-reader\src\views\Book\BookCatalogue\index.vue
-->
<template>
  <Grid :data-list="catalogueList" class="grid" columnWidth="300px">
    <template #default="slotProps">
      <div @click="goContent(slotProps.item)">
        {{ slotProps.item.catalogueName.split('.')[0] }}
      </div>
    </template>
  </Grid>
</template>

<script setup name="BookCatalogue">
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBookList, getCatalogueList } from '@/http/common'
import Grid from '@/components/layout/Grid/index.vue'
import currentBook from '@/store/index'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const { params } = route
const state = reactive({
  catalogueList: []
})

const setCurrentBook = (item) => {
  const store = currentBook()
  const { bookId, bookName } = storeToRefs(store)
  console.log({
    bookId,
    bookName,
    ...item
  })
  store.subCurrentBook({
    bookId,
    bookName,
    ...item
  })
}

const goContent = (item) => {
  setCurrentBook(item)
  router.push({
    name: 'BookContent',
    params: {
      ...params,
      catalogueId: item.catalogueId
    }
  })
}

const GetCatalogueList = () => {
  const store = currentBook()
  const { bookId, bookName } = store
  if (bookId && bookName) {
    getCatalogueList(store).then((res) => {
      state.catalogueList = res
    })
  } else {
    getBookList()
      .then((res) => {
        const param = res.find((item) => item.bookId === params.bookId)
        return getCatalogueList(param)
      })
      .then((res) => {
        state.catalogueList = res
      })
  }
}

const Init = () => {
  GetCatalogueList()
}

Init()

const { catalogueList } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
