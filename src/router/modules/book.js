/*
 * @Author: tanshaobo
 * @Date: 2022-02-09 13:13:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-06-17 11:17:11
 * @Description: 书籍
 * @FilePath: \spark-reader\src\router\modules\book.js
 */
import Home from '@/views/Home/index.vue'

const algorithm = {
  path: '/book',
  label: '书籍',
  name: 'Book',
  component: Home,
  menu: true,
  showChildren: false,
  meta: {
    submenu: '/book'
  },
  children: [
    {
      path: '/book',
      label: '书单',
      name: 'BookList',
      menu: false,
      meta: {
        submenu: '/book',
        crumb: [
          {
            path: '/book',
            name: 'BookList',
            label: '书单'
          }
        ]
      },
      component: () => import('@/views/Book/BookList/index.vue')
    }
    // {
    //   path: '/algorithmDetail/:id',
    //   label: '详情',
    //   name: 'AlgorithmDetail',
    //   menu: false,
    //   meta: {
    //     submenu: '/algorithm',
    //     crumb: [
    //       {
    //         path: '/algorithm',
    //         name: 'AlgorithmList',
    //         label: '天赋材料'
    //       },
    //       {
    //         path: '/AlgorithmDetail',
    //         name: 'AlgorithmDetail',
    //         label: '详情'
    //       }
    //     ]
    //   },
    //   component: () => import('@/views/Algorithm/AlgorithmDetail/index.vue')
    // }
  ]
}

export default algorithm
