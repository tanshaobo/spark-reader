/*
 * @Author: tanshaobo
 * @Date: 2023-09-12 19:47:54
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-12 19:55:59
 * @Description: 通用接口
 * @FilePath: \spark-reader\src\http\common.js
 */

import request from '@/utils/axios'

// 获取章节目录
export const getCatalogueList = (name) => request.get(`/src/config/json/${name}.json`)

// 获取章节内容
export const getContent = (params) =>
  request.get(`/source/${params.bookName}/${params.catalogueName}`)
