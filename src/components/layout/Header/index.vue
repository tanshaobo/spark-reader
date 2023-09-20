<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 10:47:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-20 15:02:45
 * @Description: file content
 * @FilePath: \spark-reader\src\components\layout\Header\index.vue
-->
<template>
  <section class="header">
    <el-breadcrumb>
      <template v-for="(item, index) in breadcrumbList" :key="index">
        <el-breadcrumb-item
          class="is-link"
          v-if="index !== breadcrumbList.length - 1"
          @click="goRoute(item)"
        >
          {{ item.label }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>
          {{ item.label }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </section>
</template>

<script setup name="Header">
import { reactive, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const state = reactive({
  breadcrumbList: []
})

const setBreadcrumbList = () => {
  const { meta, query } = route
  let tempArr = []
  if (meta && meta.crumb) {
    tempArr = [...meta.crumb]
  }
  tempArr[tempArr.length - 1].query = query
  console.log('route', route)
  console.log('tempArr', tempArr)
}
setBreadcrumbList()
const breadcrumbList = computed(() => {
  const { meta, query } = route
  let tempArr = []
  if (meta && meta.crumb) {
    tempArr = [...meta.crumb]
  }
  tempArr[tempArr.length - 1].query = query
  return [...tempArr]
})

const goRoute = (item) => {
  router.push({
    name: item.name,
    query: {
      ...item.query
    }
  })
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  .el-breadcrumb
    line-height 60px
    height 60px
    .is-link
      :deep(.el-breadcrumb__inner)
        font-weight 700
        text-decoration none
        transition color .2s cubic-bezier(.645,.045,.355,1)
        color #303133
        &:hover
          color #409eff
          cursor pointer
</style>
