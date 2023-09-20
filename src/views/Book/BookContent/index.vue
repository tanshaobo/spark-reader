<!--
 * @Author: tanshaobo
 * @Date: 2023-08-18 14:55:58
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-20 17:23:47
 * @Description: 书籍内容页
 * @FilePath: \spark-reader\src\views\Book\BookContent\index.vue
-->

<template>
  <div>{{ content }}</div>
</template>

<script setup name="BookContent">
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { getContent } from '@/http/common'

const state = reactive({
  content: ''
})

const route = useRoute()

const { params } = route

const GetContent = () => {
  console.log(params)
  getContent(params).then((res) => {
    state.content = res
  })
}

const Init = () => {
  GetContent()
}
Init()

const { content } = toRefs(state)
</script>

<style lang="stylus" scoped></style>
