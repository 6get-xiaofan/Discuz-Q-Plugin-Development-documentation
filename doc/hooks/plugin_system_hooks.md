# 全局（plugin_system） hooks列表

## add_page_hook

#### 平台支持

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

新增页面插件，可以为Discuz !Q 3.0新增页面级别的插件。页面插件配置例子：

```json
{
  "pluginName": "custom_page",
  "version": "1.0.0",
  "target": "plugin_system",
  "hookName": "add_page_hook",
  "platform": ["pc", "h5", "mini"],
  "path": "/123",
  "miniPageConfig": {
    "navigationBarTitleText": "插件页面"
  }
}
```

### 页面路径配置

通过在 config 中填写 path 路径, path路径 以 / 开头

### 页面生成端

通过配置 platform 选项，可以控制页面在某一端是否生成

譬如

```json
"platform": ["pc", "h5"],
```

我们仅会生成 web 端的对应页面代码，小程序的代码不会被生成，也不会囊括于打包构建出的代码里

### web端注入路径规则

小程序端会将所有的页面插件注入到 /plugin 子路径下

页面级插件的访问路径：

```javascript
<域名>/plugin/<path>
```

如上述配置的web访问路径为: `/plugin/123`

### 小程序端注入路径规则

小程序端会将所有的页面插件注入到 /pluginPages 子路径下，同时划分其为子包

其路径规则为

```xml
/pluginPages/<path>/index
```

如上述配置的小程序访问路径为：`/pluginPages/123/index`

### web 端生命周期映射

web 端的生命周期与 React 的标准生命周期一致，可以完全适用

[https://react.docschina.org/learn/your-first-component](https://react.docschina.org/learn/your-first-component)

### 小程序端页面生命周期映射

小程序端，我们劫持了所有 taro 提供的页面级生命周期

组件级生命周期在对应的插件中直接实现即可

对应的生命周期列表如下

[https://taro-docs.jd.com/docs/react-page](https://taro-docs.jd.com/docs/react-page)

在 页面插件中 注册 对应生命周期 的方法如下

```javascript
componentDidMount() {
  this.props.pluginAction.registerLifecycle('<对应生命周期>', this.handler);
}
```

其中 对应生命周期 指代我们抽象的所有生命周期，handler 对应其实现方法

所有 taro 实现的参数，我们通过同样的参数位置返回

需要返回数据的生命周期，在对应的 handler 中返回即可

### 小程序页面信息配置

我们抽象了小程序的页面信息配置到对应插件的 config 中

仅需要在 config 中对应 View 配置中填写 miniPageConfig 配置即可

示例

```json
  "miniPageConfig": {
    "navigationBarTitleText": "插件页面"
  }
```

详细配置项列表

[https://taro-docs.jd.com/docs/page-config](https://taro-docs.jd.com/docs/page-config)