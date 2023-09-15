<!--
 * @Author: tanshaobo
 * @Date: 2023-06-08 15:34:10
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-15 11:36:37
 * @Description: file content
 * @FilePath: \spark-reader\README.md
-->
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
[访问网址](https://tanshaobo.github.io/spark-reader/)

### 项目介绍

本项目为在线的阅读网站，采用vue3+vite+node搭建

### 主体目录结构

```
├─.vscode                                   vscode本地配置
├─docs                                      github pages部署
├─public                                    静态资源
│  ├─json                                   控制数据
│  └─source                                 原始数据  
├─server                                    服务
└─src                                       源目录
│  ├─assets                                静态图
│  ├─components                            全局组件
│  │  └─layout                             布局组件 
│  │      ├─Grid                           网格组件
│  │      ├─Header                         公共头部 
│  │      ├─Home                           公共框架 
│  │      ├─Row                            网格内默认组件
│  │      └─SideMenu                       左侧菜单
│  ├─config                                静态常量
│  ├─http                                  接口
│  ├─router                                路由
│  ├─store                                 状态管理
│  ├─style                                 全局样式
│  ├─utils                                 工具库
│  └─views                                 视图
│      └─Book                              书籍
│         ├─BookCatalogue                  章目 
│         ├─BookContent                    内容
│         ├─BookDetail                     详情
│         └─BookList                       书目
├─.cz-config                               git cz提交配置
├─.editorconfig                            编辑配置
├─commitlint.config                        提交验证配置
├─package-lock                             包锁
├─package                                  包目录
├─pnpm-lock                                pnpm维护文件
└─vite.config                              vite配置
```

一. 资源目录public
  
  其中 source目录存放原始文件，json目录存放由服务端生成的数据文件

  将内部接口访问的数据文件设置到本目录的原因，

  1. 项目部署到github pages时，public目录是可被访问的，接口设置的静态目录可查询到该目录

  2. 该文件一旦生成后等同静态文件，在打包时无需进行打包处理

二. 服务目录server

  该目录是用于根据资源目录中的source源文件，来生成资源目录下的json数据文件

  在node环境下执行，对应的执行命令是
  ```
   node server/readFolder.js
  ```
三. 项目源目录src

  略



