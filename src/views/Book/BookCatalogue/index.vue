<!--
 * @Author: tanshaobo
 * @Date: 2023-08-17 15:55:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-20 15:45:41
 * @Description: 目录页
 * @FilePath: \spark-reader\src\views\Book\BookCatalogue\index.vue
-->
<template>
  <Grid :data-list="catalogueList" class="grid" columnWidth="300px">
    <template #default="slotProps">
      <div @click="goContent(slotProps.item)">
        {{ slotProps.item.name }}
      </div>
    </template>
  </Grid>
</template>

<script setup name="BookCatalogue">
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCatalogueList } from '@/http/common'
import Grid from '@/components/layout/Grid/index.vue'

const router = useRouter()
const route = useRoute()
const { query } = route
const state = reactive({
  catalogueList: []
})

const goContent = (item) => {
  router.push({
    name: 'BookContent',
    query: {
      ...query,
      catalogueId: item.id,
      catalogueName: item.name
    }
  })
}

const GetCatalogueList = () => {
  getCatalogueList(query).then((res) => {
    state.catalogueList = res
  })
}

const Init = () => {
  GetCatalogueList()
}

Init()

const { catalogueList } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
