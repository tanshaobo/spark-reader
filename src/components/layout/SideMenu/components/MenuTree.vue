<!--
 * @Author: tanshaobo
 * @Date: 2022-11-18 10:00:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-07 16:21:06
 * @Description: file content
 * @FilePath: \spark-reader\src\components\layout\SideMenu\components\MenuTree.vue
-->
<template>
  <template v-for="(item, index) in menu" :key="index + item.path">
    <el-menu-item
      v-if="!item.children"
      :key="index + item.path"
      :index="item.path ? item.path : ''"
    >
      <template #title>
        {{ item.label }}
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path" :key="`${index}${item.path}`">
      <template #title>
        <span>{{ item.label }}</span>
      </template>
      <!-- <el-menu-item-group>
        <menugroup :menu="item.children"></menugroup>
      </el-menu-item-group> -->
    </el-sub-menu>
  </template>
</template>

<script setup name="MenuTree">
import { toRefs } from 'vue'

const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const { menu } = toRefs(props)
</script>

<style lang="stylus" scoped></style>
