<!--
 * @Author: tanshaobo
 * @Date: 2023-06-17 10:47:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-17 09:31:31
 * @Description: grid布局中，单个grid内部布局方式
 * @FilePath: \spark-reader\src\components\layout\Row\index.vue
-->
<template>
  <div v-for="(item, index) in values" :key="item.id">
    <div
      v-if="label[index]"
      class="row"
      :class="{ column: label[index].length + item.length > 20, ...classObject }"
    >
      <span class="title">
        {{ label[index] }}
      </span>
      <span class="content">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup name="Row">
import { reactive, toRefs } from 'vue'

const props = defineProps({
  label: {
    type: Object,
    default: () => {}
  },
  values: {
    type: Object,
    default: () => {}
  },
  type: {
    type: String,
    default: 'between'
  }
})
const state = reactive({
  classObject: {}
})
const { label, values, type } = toRefs(props)
state.classObject = {
  between: type.value == 'between',
  left: type.value == 'start'
}
const { classObject } = toRefs(state)
</script>

<style lang="stylus" scoped>
.row
  line-height 36px
  display flex
  .title
    font-weight bold
    color rgba(51, 51, 51, .8)
  .content
    color rgba(112, 112, 112, .8)
  &.column
    flex-direction column
  &.between
    justify-content space-between
  &.left
    justify-left flex-start
</style>
