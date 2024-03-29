# 插件数据存储

Discuz! Q 的数据管理方案采用了响应式的 Mobx，我们对插件也提供了基于 Mobx 的数据管理方案。

当一个插件需要多个组件分别注入不同的钩子完成一个复杂的功能的时候，必然会存在数据公用的情况，而插件体系应该保持与原有逻辑进行隔离，所以插件系统会对每一个插件在注册到插件中心后会自动的创建一个以`name_en`作为命名空间划分出插件私有数据存储空间。

## 使用方法

以商品插件贴为例

以下是商品插件贴的配置

```json
{
    "name_cn": "商品贴插件",
    "name_en": "shop",
    "description": "商品贴插件",
    "type": 9,
    "app_id": "61540fef8f4de8",
    "version": "1.0.0",
    "status": 1,
    "filter_enable": false,
    "author": {
        "name": "腾讯科技（深圳）有限公司",
        "email": "fishcui@tencent.com"
    },
    "view": {
        "display": {
            "target": ["plugin_index", "plugin_detail"],
            "hookName": "thread_extension_display_hook",
            "platform": ["pc", "h5", "mini"],
            "disables": false
        },
        "postDisplay": {
            "version": "1.0.0",
            "target": "plugin_post",
            "hookName": "post_extension_content_hook",
            "platform": ["pc", "h5", "mini"],
            "disables": false
        },
        "postEntry": {
            "target": "plugin_post",
            "hookName": "post_extension_entry_hook",
            "platform": ["pc", "h5", "mini"],
            "disables": false
        },
        "qrCodePage": {
            "target": "plugin_system",
            "hookName": "add_page_hook",
            "platform": ["pc", "h5"],
            "path": "/minishop/qrcode",
            "miniPageConfig": {
              "navigationBarTitleText": "二维码"
            },
            "disables": false
        },
        "selectProductPage": {
          "target": "plugin_system",
          "hookName": "add_page_hook",
          "platform": ["pc", "h5", "mini"],
          "path": "/selectProduct",
          "miniPageConfig": {
            "navigationBarTitleText": "选择商品"
          },
          "disables": false
        },
        "userCenterEntry": {
          "target": "plugin_user",
          "hookName": "user_extension_action_hook",
          "platform": ["pc", "h5", "mini"],
          "disables": false
        }
          
    }
}
```

可以看到，在商品插件中，我们在多个 hook 中注入了对应的组件

它们同属于 shop 这个插件

### 获取 store

每一个插件，都会默认注入属于插件私有的store对象`pluginStore`。可以通过`this.props.pluginStore`进行获取，或者通过提供的`pluginAction.get`的方式进行获取。

通过 `pluginStore` 获取

```javascript
const shopStore = this.props.pluginStore;
```

通过 `pluginAction` 获取

```javascript
const shopStore = this.props.pluginAction.get('shop')
```

当然`pluginAction.get`也可以获取其他插件的属性。

### 修改 store

如果我们想要修改对应 `store` 中的值，我们可以通过

```php
this.props.pluginAction.set('shop', {
  shopPluginData: {
    postData: {
      tomId: '61540fef8f4de8',
      body: {
        products: postData,
      },
    },
  },
});
```

这样的方法完成，其中第二个参数类似于 `React` 中的 `setState` 的参数

具体可以参见

[通用参数列表](../hooks/common_props.md)

我们可以基于它，去实现在各个组件中的数据传递和共享

> 注意，插件进行pluginAction.set的时候，应只处理自己的store数据，避免设置非自己插件本以外的数据。