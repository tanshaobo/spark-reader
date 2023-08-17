<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 10:47:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-17 09:30:55
 * @Description: 单元格
  本文件是宫格式布局文件，
  1，按设定的格子大小，每行固定n个格子。
  2，格子之间采用flex布局，默认两端对齐。
  3，窗口大小发生变化时，若窗口宽度不为格子宽度的倍数，则本行格子数向下取整
  4，最后一行的格子数不为倍数时，自动补充为倍数，设置remain属性为ture，代表当前格子为补充格，无需渲染内部
 * @FilePath: \spark-reader\src\components\layout\Grid\index.vue
-->
<template>
  <section class="container" ref="box">
    <div class="card-box" v-if="showType === 'card'">
      <el-row v-for="(item, index) in showList" :key="index">
        <div class="column-item" v-for="(i, j) in item" :key="j">
          <el-card v-if="!i.remain">
            <template v-if="hasHeader" #header>
              <slot :item="i" name="headers"></slot>
            </template>
            <slot :item="i" name="default"></slot>
          </el-card>
          <slot :item="i" name="main"></slot>
        </div>
      </el-row>
    </div>
    <div class="card-box" v-if="showType === 'table'"></div>
  </section>
</template>
<script setup name="Grid">
import { onMounted, onUnmounted, reactive, toRefs, ref, watch, nextTick } from 'vue'
import handleSourceData from './Hooks/handleSourceData'

const props = defineProps({
  showType: {
    type: String,
    default: 'card'
  },
  dataList: {
    type: Array,
    default: () => []
  },
  hasHeader: {
    type: Boolean,
    default: false
  }
})
const state = reactive({
  column: 0,
  dataList: [],
  showList: []
})
const box = ref()
const computedLayout = () => {
  state.column = Math.floor(box.value.clientWidth / 260)
  state.showList = handleSourceData(state.dataList, state.column, { remain: true })
}
watch(
  () => props.dataList,
  (prev) => {
    state.dataList = JSON.parse(JSON.stringify(prev))
    if (prev) {
      nextTick(() => {
        computedLayout()
      })
    }
  },
  { deep: true, immediate: true }
)
window.addEventListener('resize', computedLayout)
onMounted(() => {
  computedLayout()
})
onUnmounted(() => {
  window.removeEventListener('resize', computedLayout)
})
const { showType } = toRefs(props)
const { column, dataList, showList } = toRefs(state)
</script>
<style lang="stylus" scoped>
.container
  display flex
  flex-wrap wrap
  .card-box
    width 100%
    .el-row
      width 100%
      justify-content space-between
      .column-item
        width 240px
        margin-bottom 20px
      .el-card
        cursor pointer
</style>
