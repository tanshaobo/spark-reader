const fs = require('fs')

const _eval = (str) => {
  const Fn = Function
  return new Fn(`return ${str}`)()
}

// 创建文件
const createFile = (url, data) => {
  fs.writeFile(url, data, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

// 生成书单JSON
const creatBookList = () => {
  const data = fs.readdirSync(`public/source`).map((item, index) => ({
    id: index + 1,
    name: item
  }))
  createFile(`public/json/bookList.json`, JSON.stringify(data))
}

// 根据书单JSON生成
const getBookList = () => {
  fs.readFile('public/json/bookList.json', (err, data) => {
    const bookList = _eval(data.toString())
    bookList.forEach((item) => {
      getCatalogueByBookName(`public/source`, item.name)
    })
  })
}

// 根据书名获取所有章节
const getCatalogueByBookName = (url, name) => {
  let u = `${url}/${name}`
  fs.readdir(u, (err, files) => {
    if (err) {
      return console.log(err)
    }
    const data = files.map((item, index) => {
      return {
        id: `${index + 1}`,
        name: item
      }
    })
    createFile(`public/json/${name}.json`, JSON.stringify(data))
  })
}

const Init = () => {
  creatBookList()
  getBookList()
}

Init()
