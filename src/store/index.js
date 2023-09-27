/*
 * @Author: tanshaobo
 * @Date: 2023-09-23 16:05:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-23 16:49:05
 * @Description: file content
 * @FilePath: \spark-reader\src\store\index.js
 */
import { defineStore } from 'pinia'

const currentBook = defineStore({
  id: 'currentBook',
  state: () => {
    return {
      bookId: '',
      bookName: '',
      catalogueId: '',
      catalogueName: ''
    }
  },
  getters: {},
  actions: {
    subCurrentBook(option) {
      this.bookId = option.bookId
      this.bookName = option.bookName
      this.catalogueId = option.catalogueId
      this.catalogueName = option.catalogueName
    }
  }
})

export default currentBook
