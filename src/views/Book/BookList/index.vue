<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 11:05:34
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-07-13 16:52:42
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

<script setup>
import Grid from '@/components/layout/Grid/index.vue'
import Row from '@/components/layout/Row/index.vue'
import { dictionary, bookList } from '@/config/bookList'

import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
  dataList: [],
  dataHeader: {}
})

const Init = () => {
  state.dataList = bookList
  state.dataHeader = dictionary
}

const enterIndexDetail = (item) => {
  router.push({
    name: 'IndexList',
    params: {
      id: item.id
    }
  })
}

Init()

const { dataList, dataHeader } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
