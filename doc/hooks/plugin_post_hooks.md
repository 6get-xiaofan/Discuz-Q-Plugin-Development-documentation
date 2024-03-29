# 发帖页（plugin_post） hooks列表

![图片](../images/plugin_post_hooks-1.png)

## post_extension_entry_hook

发帖扩展区域，生效在扩展区域的内置功能后展示，应实现为一个图标

#### 平台支持

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

| 属性              | 值类型                   | 描述                                                         |
| :---------------- | :----------------------- | :----------------------------------------------------------- |
| renderData        | object                   | 当前符合插件提交的数据，用于数据展示                         |
| onConfirm         | function                 | 保存到发帖数据中存储                                         |
| showPluginDialog  | `function<ReactComponent>` | 小程序有效，小程序因层级问题，此方法可调用小程序提供的一个全局对话框进行交互 |
| closePluginDialog | function                 | 小程序有效，小程序因层级问题，此方法可关闭小程序提供的一个全局对话框进行交互 |
| postData          | object                   | 当前发帖页面的状态数据                                       |
| postData.navInfo  | object                   | 主要用与小程序，用与描述一些布局位置                         |

### onConfirm入参：

```jaascript
postData: {
    tomId: 自定义id（请勿重复）,
    body: {
        ...//自定义一切数据，用于后续展示
    }
}
```

## post_extension_content_hook

发帖扩展区域，生效在扩展内容区中内置扩展内容后。

#### 平台支持

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

| 属性              | 值类型                   | 描述                                                         |
| :---------------- | :----------------------- | :----------------------------------------------------------- |
| renderData        | object                   | 当前符合插件提交的数据，用于数据展示                         |
| siteData          | object                   | 站点配置信息，由/apiv3/forum接口，返回数据                   |
| updatePlugin      | `function<object>`         | 更新到发帖数据中存储                                         |
| deletePlugin      | function<>               | 删除插件数据                                                 |
| showPluginDialog  | `function<ReactComponent>` | 小程序有效，小程序因层级问题，此方法可调用小程序提供的一个全局对话框进行交互 |
| closePluginDialog | function<>               | 小程序有效，小程序因层级问题，此方法可关闭小程序提供的一个全局对话框进行交互 |
| postData          | object                   | 当前发帖页面的状态数据                                       |
| postData.navInfo  | object                   | 主要用与小程序，用与描述一些布局位置                         |
| _pluginInfo       | object                   | 当前插件信息                                                 |

### updatePlugin入参：

```jaascript
postData: {
    tomId: 自定义id（请勿重复）,
    body: {
        ...//自定义一切数据，用于后续展示
    }
}
```

### navInfo

```javascript
navInfo = {
    statusBarHeight: 44, // 默认的状态栏高度
    navHeight: 40, // 默认的导航栏高度
    menubtnWidth: 80, // 胶囊按钮的宽度
}
```