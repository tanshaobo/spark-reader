<!--
 * @Author: tanshaobo
 * @Date: 2023-08-17 15:55:37
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-13 10:13:15
 * @Description: 目录页
 * @FilePath: \spark-reader\src\views\Book\BookCatalogue\index.vue
-->
<template>
  <div>书籍目录页</div>
  <el-button v-for="item in catalogueList" :key="item.id" @click="goContent(item)">
    {{ item.name }}
  </el-button>
</template>

<script setup name="BookCatalogue">
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCatalogueList } from '@/http/common'

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
  // 采用vite的导入glob方式来获取静态目录的方式 （注： 此方法常用来动态加载模块或组件）
  // const files = import.meta.glob(`/src/config/json/*.json`)
  // const currentFile = files[`/src/config/json/${query.bookName}.json`]
  // currentFile().then((res) => {
  //   state.catalogueList = res.default
  // })
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
