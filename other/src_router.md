# 路由模块 - Router

> 路由模块实现了跨端的基础路由能力调用

## 使用方式

```javascript
import Router from '@discuzq/sdk/dist/router';

Router.push({ url: '' })
```

## API

> 小程序参数参见 [https://taro-docs.jd.com/taro/docs/apis/route/reLaunch/](https://web.archive.org/web/20230520034614mp_/https://taro-docs.jd.com/taro/docs/apis/route/reLaunch/)
>
> web 参数参见 [https://www.nextjs.cn/docs/api-reference/next/router](https://web.archive.org/web/20230520034614mp_/https://www.nextjs.cn/docs/api-reference/next/router)

| 方法名         | 参数类型                                                     | 描述       | 平台 |
| :------------- | :----------------------------------------------------------- | :--------- | :--- |
| push           | { url: string, as: any, options: Object } (小程序参见 Taro 的 navigateTo) | 页面跳转   | all  |
| replace        | { url: string, as: any, options: Object } (小程序参见 Taro 的 redirectTo) | 页面替换   | all  |
| relaunch       | (小程序参见 Taro 的 reLaunch)                                | 重载       | mini |
| switchTab      | (小程序参见 Taro 的 switchTab)                               | 切换 tab   | mini |
| prefetch       | { options: Object }                                          | 预加载     | web  |
| beforePopState | callback: () => any                                          | 跳转前监听 | web  |
| back           | -                                                            | 回退       | all  |
| redirect       | { url: string, as: any, options: Object } (小程序参见 Taro 的 redirectTo) | 页面重定向 | all  |