# Discuz! Q 插件开发文档

简体中文 | [English](./README-en.md)

由于 Discuz! Q 程序在 2022 年初腾讯团队停更并交由开源社区维护，其官网和[插件开发文档](https://developer.discuz.chat/#/plugin/start)已经无法访问，现在我将原文档迁移到 Github，以便大家能够继续查阅。

Discuz! 原团队由于一些原因已经重新收回 Discuz! Q 项目，并决定在未来继续维护 Discuz! Q 项目。

本文档主要是原文档的内容，各位 Discuz! Q 插件开发者可以继续查阅并完善此文档。

## 目录
 - [开始](./start/)
   - [介绍](./start/start.md)
   - [初始化插件](./start/init.md)
   - [目录规范](./start/dir.md)
   - [插件配置](./start/config.md)
   - [插件构建](./start/build.md)
   - [插件加载](./start/import.md)
   - [本地开发](./start/develop.md)
 - [插件组件开发](./components/)
   - [插件架构](./components/architecture.md) 
   - [插件入口文件](./components/entry.md) 
   - [多端适配器](./components/adapter.md) 
   - [插件数据储存](./components/store.md) 
   - [插件数据通信](./components/connect.md) 
   - [开始做一个插件](./components/sample.md) 
   - [页面插件开发](./components/page_plugin.md) 
 - [插件接口开发](./apis/)
   - [后端插件介绍](./apis/be_start.md) 
   - [开始做一个插件](./apis/be_semple.md) 
 - [页面标识列表](./hooks/)
   - [通用属性](./hooks/common_props.md) 
   - [钩子开发](./hooks/hook_develop.md) 
   - [全局Hook列表](./hooks/plugin_system_hooks.md) 
   - [公共Hook列表](./hooks/plugin_global_hooks.md) 
   - [首页Hook列表](./hooks/plugin_index_hooks.md) 
   - [帖子详情页Hook列表](./hooks/plugin_detail_hooks.md) 
   - [发帖页Hook列表](./hooks/plugin_post_hooks.md) 
   - [个人中心Hook列表](./hooks/plugin_user_center_hooks.md) 
