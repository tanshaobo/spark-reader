/*
 * @Author: tanshaobo
 * @Date: 2022-02-09 13:13:51
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-15 11:09:37
 * @Description: 书籍
 * @FilePath: \spark-reader\src\router\modules\book.js
 */
import Home from '@/components/layout/Home/index.vue'

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
      path: '/BookDetail',
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
            label: '书籍名称'
          }
        ]
      },
      component: () => import('@/views/Book/BookDetail/index.vue')
    },
    {
      path: '/BookCatalogue',
      label: '详情',
      name: 'BookCatalogue',
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
            label: '书籍名称'
          },
          {
            path: '/BookCatalogue',
            name: 'BookCatalogue',
            label: '目录'
          }
        ]
      },
      component: () => import('@/views/Book/BookCatalogue/index.vue')
    },
    {
      path: '/BookContent',
      label: '内容',
      name: 'BookContent',
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
            label: '书籍名称'
          },
          {
            path: '/BookContent',
            name: 'BookContent',
            label: '第几章了'
          }
        ]
      },
      component: () => import('@/views/Book/BookContent/index.vue')
    }
  ]
}

export default book
