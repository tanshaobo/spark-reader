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
import bookList from '@/config/bookList'

import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
  dataList: []
})

const Init = () => {
  state.dataList = bookList
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

const { dataList } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
