/*
 * @Author: tanshaobo
 * @Date: 2023-09-23 16:05:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-10-19 17:01:12
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
      catalogueName: '',
      catalogueUrl: ''
    }
  },
  getters: {},
  actions: {
    subCurrentBook(option) {
      this.bookId = option.bookId
      this.bookName = option.bookName
      this.catalogueId = option.catalogueId
      this.catalogueName = option.catalogueName
      this.catalogueUrl = option.catalogueUrl
    }
  }
})

export default currentBook
