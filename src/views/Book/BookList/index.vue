<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 11:05:34
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-23 16:48:14
 * @Description: 书单页
 * @FilePath: \spark-reader\src\views\Book\BookList\index.vue
-->
<template>
  <Grid :data-list="dataList" class="grid" columnWidth="300px">
    <template #default="slotProps">
      <div @click="enterIndexDetail(slotProps.item)">
        <Row type="between" :label="dataHeader" :values="slotProps.item" />
      </div>
    </template>
  </Grid>
</template>

<script setup name="BookList">
import Grid from '@/components/layout/Grid/index.vue'
import Row from '@/components/layout/Row/index.vue'
import dictionary from '@/config/bookList'

import { reactive, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { getBookList } from '@/http/common'
import currentBook from '@/store/index'

const router = useRouter()

const state = reactive({
  dataList: [],
  dataHeader: {}
})

const GetBookList = () => {
  getBookList()
    .then((res) => {
      state.dataList = res
    })
    .finally(() => {})
}

const Init = () => {
  state.dataHeader = dictionary
  GetBookList()
}

const setCurrentBook = (item) => {
  const store = currentBook()
  const { bookId, bookName } = storeToRefs(store)
  store.subCurrentBook({
    bookId,
    bookName,
    ...item
  })
}

const enterIndexDetail = (item) => {
  setCurrentBook(item)
  router.push({
    name: 'BookDetail',
    params: {
      bookId: item.id
    }
  })
}

Init()

const { dataList, dataHeader } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
