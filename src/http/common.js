/*
 * @Author: tanshaobo
 * @Date: 2023-09-12 19:47:54
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-20 17:22:14
 * @Description: 通用接口
 * @FilePath: \spark-reader\src\http\common.js
 */

import request from '@/utils/axios'

const baseUrl = import.meta.env.DEV ? `` : `/spark-reader`
// 获取书单
export const getBookList = () => request.get(`${baseUrl}/json/bookList.json`)

// 获取章节目录
export const getCatalogueList = (params) => request.get(`${baseUrl}/json/${params.bookName}.json`)

// 获取章节内容
export const getContent = (params) =>
  request.get(`${baseUrl}/source/${params.bookName}/${params.url}`)
