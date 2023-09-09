<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 10:47:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-07 17:08:44
 * @Description: file content
 * @FilePath: \spark-reader\src\components\layout\Header\index.vue
-->
<template>
  <section class="header">
    <el-breadcrumb>
      <template v-for="(item, index) in breadcrumbList" :key="index">
        <el-breadcrumb-item
          v-if="index != breadcrumbList.length"
          :to="{
            name: item.name,
            state: item.params
          }"
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

const breadcrumbList = computed(() => {
  const { meta } = route
  const { params } = window.history.state
  let tempArr = []
  if (meta && meta.crumb) {
    tempArr = [...meta.crumb]
  }
  tempArr[tempArr.length - 1].params = params
  return [...tempArr]
})

const goRoute = (item) => {
  router.push({
    name: item.name,
    state: {
      ...item.params
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
</style>
