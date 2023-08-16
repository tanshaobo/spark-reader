/*
 * @Author: tanshaobo
 * @Date: 2022-02-09 13:13:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-08-16 16:47:14
 * @Description: 书籍
 * @FilePath: \spark-reader\src\router\modules\book.js
 */
import Home from '@/views/Home/index.vue'

const book = {
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
    },
    {
      path: '/BookDetail/:id',
      label: '详情',
      name: 'BookDetail',
      menu: false,
      meta: {
        submenu: '/book',
        crumb: [
          {
            path: '/book',
            name: 'BookList',
            label: '书单'
          },
          {
            path: '/BookDetail',
            name: 'BookDetail',
            label: '详情'
          }
        ]
      },
      component: () => import('@/views/Book/BookDetail/index.vue')
    }
  ]
}

export default book
