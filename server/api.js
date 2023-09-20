/*
 * @Author: tanshaobo
 * @Date: 2023-09-20 10:53:34
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-20 10:57:00
 * @Description: file content
 * @FilePath: \spark-reader\server\api.js
 */
const fs = require('fs')

// 创建文件
const createFile = (url, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, (err) => {
      if (err) {
        reject(err)
      }
      resolve('创建成功')
    })
  })
}

// 读取目录
const readDir = (url) => {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

// 读取文件
const readFile = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

module.exports = {
  createFile,
  readDir,
  readFile
}
