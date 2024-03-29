import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DiscuzQ",
  description: "DiscuzQ 插件开发文档",
  lastUpdated: true,
  base: '/Discuz-Q-Plugin-Development-documentation/',
  themeConfig: {
    logo: '/doc/images/logo.png',

    outline: [2, 3],

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '../../start/start.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/6get-xiaofan/Discuz-Q-Plugin-Development-documentation' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/start/start.md' },
          { text: '初始化插件', link: '/start/init.md' },
          { text: '目录规范', link: '/start/dir.md' },
          { text: '插件配置', link: '/start/config.md' },
          { text: '插件构建', link: '/start/build.md' },
          { text: '插件加载', link: '/start/import.md' },
          { text: '本地开发', link: '/start/develop.md' }
        ]
      },
      {
        text: '插件组件开发',
        items: [
          { text: '插件架构', link: '/components/architecture.md' },
          { text: '插件入口文件', link: '/components/entry.md' },
          { text: '多端适配器', link: '/components/adapter.md' },
          { text: '插件数据存储', link: '/components/store.md' },
          { text: '插件数据通信', link: '/components/connect.md' },
          { text: '开始做一个插件', link: '/components/sample.md' },
          { text: '页面插件开发', link: '/components/page_plugin.md' }
        ]
      },
      {
        text: '插件接口开发',
        items: [
          { text: '后端插件介绍', link: '/apis/be_start.md' },
          { text: '开始做一个插件', link: '/apis/be_semple.md' },
        ]
      },
      {
        text: '页面标识列表',
        items: [
          { text: '通用属性', link: '/hooks/common_props.md' },
          { text: '钩子开发', link: '/hooks/hook_develop.md' },
          { text: '全局Hooks列表', link: '/hooks/plugin_system_hooks.md' },
          { text: '公共Hooks列表', link: '/hooks/plugin_global_hooks.md' },
          { text: '首页Hooks列表', link: '/hooks/plugin_index_hooks.md' },
          { text: '帖子详情页Hooks列表', link: '/hooks/plugin_detail_hooks.md' },
          { text: '发帖页Hooks列表', link: '/hooks/plugin_post_hooks.md' },
          { text: '个人中心Hooks列表', link: '/hooks/plugin_user_center_hooks.md' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/6get-xiaofan/Discuz-Q-Plugin-Development-documentation/tree/main/docs/:path',
      text: '页面有问题？去编辑',
    },

    outlineTitle: "页面导航",

    lastUpdatedText: "最后更新于",

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the MIT License.'
    }
  }
})
