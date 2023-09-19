/*
 * @Author: tanshaobo
 * @Date: 2023-09-09 10:45:02
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-19 18:11:34
 * @Description: file content
 * @FilePath: \spark-reader\server\readFolder.js
 */
const fs = require('fs')
const { resolve } = require('path')

const _eval = (str) => {
  const Fn = Function
  return new Fn(`return ${str}`)()
}

// 创建文件
const createFile = (url, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

// 生成书单JSON
const creatBookList = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(`public/source`, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })

  // const data = fs.readdirSync(`public/source`).map((item, index) => ({
  //   id: index + 1,
  //   name: item
  // }))
  // createFile(`public/json/bookList.json`, JSON.stringify(data))
}

// 根据书单JSON生成
const getBookList = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('public/json/bookList.json', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })

  // fs.readFile('public/json/bookList.json', (err, data) => {
  //   const bookList = _eval(data.toString())
  //   bookList.forEach((item) => {
  //     getCatalogueByBookName(`public/source`, item.name)
  //   })
  // })
}

// 根据书名获取所有章节
const getCatalogueByBookName = (url) => {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err)
      }
      resolve(files)
    })
  })
  // let u = `${url}/${name}`
  // fs.readdir(u, (err, files) => {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   const data = files.map((item, index) => {
  //     return {
  //       id: `${index + 1}`,
  //       name: item
  //     }
  //   })
  //   createFile(`public/json/${name}.json`, JSON.stringify(data))
  // })
}

const Init = () => {
  creatBookList()
    .then((res) => {
      const data = res.map((item, index) => ({
        id: index + 1,
        name: item
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
        getCatalogueByBookName(`public/source/${item.name}`)
          .then((res) => {
            const data = res.map((item, index) => {
              return {
                id: `${index + 1}`,
                name: item
              }
            })
            createFile(`public/json/${item.name}.json`, JSON.stringify(data))
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
