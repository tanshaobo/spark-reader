const fs = require('fs')

const jsonText = fs.readFileSync('src/config/bookList.js')

let str = jsonText.toString()
/**
 * 此处截取出书单的方式如下：
 * 1，通过split('bookList = ')[1] 截取 bookList数组起始定义的字符串（ 以=为准）
 * 2, 通过.replaceAll(/[\n|' ']/g, '')把字符串中空字符及换行符全部去掉
 * 3. 通过split('export')[0]和 split('const')[0] 截取下一个变量定义前的内容，即为字符串本身
 * 4. 通过match(/\[(\S*)\]/)[1]可直接截取数组中的所有项组成的字符串
 */
const tempStr = str
  .split('bookList = ')[1]
  .replaceAll(/\s/g, '')
  .split('export')[0]
  .split('const')[0]

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

let bookList = _eval(tempStr)
const f = (url, name) => {
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
    createFile(`src/config/json/${name}.json`, JSON.stringify(data))
  })
}

bookList.forEach((item) => {
  f(`public/source`, item.name)
})

// f('src/source/')
