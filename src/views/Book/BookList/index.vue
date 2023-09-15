<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 11:05:34
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-15 17:24:04
 * @Description: 书单页
 * @FilePath: \spark-reader\src\views\Book\BookList\index.vue
-->
<template>
  <Grid :data-list="dataList" class="grid">
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
import { dictionary } from '@/config/bookList'

import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { getBookList } from '@/http/common'

const router = useRouter()

const state = reactive({
  dataList: [],
  dataHeader: {},
  currentBook: {}
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

const enterIndexDetail = (item) => {
  state.currentBook = item
  const params = {
    bookId: item.id,
    bookName: item.name
  }
  router.push({
    name: 'BookDetail',
    query: { ...params }
  })
}

Init()

const { dataList, dataHeader } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
