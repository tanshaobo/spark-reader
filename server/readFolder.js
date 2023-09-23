/*
 * @Author: tanshaobo
 * @Date: 2023-09-09 10:45:02
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-23 16:46:28
 * @Description: file content
 * @FilePath: \spark-reader\server\readFolder.js
 */
const { createFile, readDir, readFile } = require('./api')

const _eval = (str) => {
  const Fn = Function
  return new Fn(`return ${str}`)()
}

// 生成书单JSON
const creatBookList = () => readDir(`public/source`)

// 根据书单JSON生成
const getBookList = () => readFile(`public/json/bookList.json`)

// 根据书名获取所有章节
const getCatalogueByBookName = (url) => readDir(url)

const Init = () => {
  creatBookList()
    .then((res) => {
      const data = res.map((item, index) => ({
        bookId: `${index + 1}`,
        bookName: item
      }))
      createFile(`public/json/bookList.json`, JSON.stringify(data))
    })
    .finally((err) => {
      console.log(err)
    })
  getBookList()
    .then((res) => {
      const bookList = _eval(res.toString())
      bookList.forEach((item) => {
        getCatalogueByBookName(`public/source/${item.bookName}`)
          .then((res) => {
            const data = res.map((item, index) => {
              return {
                catalagueId: `${index + 1}`,
                catalogueName: item.split('.')[0],
                url: item
              }
            })
            createFile(`public/json/${item.bookName}.json`, JSON.stringify(data))
          })
          .finally((err) => {
            console.log(err)
          })
      })
    })
    .finally((err) => {
      console.log(err)
    })
}

Init()
