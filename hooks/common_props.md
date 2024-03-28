# 通用参数

每个钩子都会用以下基本的参数提供给每个插件使用。参数都会携带在组件的`props`中。

| 属性                  | 值类型              | 描述                                       |
| :-------------------- | :------------------ | :----------------------------------------- |
| siteData              | object              | 站点配置信息，由/apiv3/forum接口，返回数据 |
| userInfo              | object              | 当前用户信息（没有登录为null）             |
| isLogin               | function(): boolean | 是否登录                                   |
| pluginStore           | object              | 插件全局存放数据                           |
| pluginAction          | object              | 操作插件数据操作                           |
| dzqRouter             | object              | 当前路由信息对象                           |
| dzqRequest            | object              | 发起网络请求的对象                         |
| dzqRequestHandleError | function            | 请求错误统一处理函数                       |
| _pluginInfo           | object              | 当前插件信息                               |

## pluginStore

每一个插件在注入到Discuz !Q时，底层会对插件的`pluginName`创建一个全局的存储空间，能跨插件或相同插件注入不同钩子中相互公用数据。

> 默认只会传入当前插件的数据，例如当前你的插件是A，那么你只能获取到pluginStore中A作用域下的数据。

## pluginAction

每个插件都会获取到`pluginAction`，其中`pluginAction`包含2个函数。

- set(pluginName, data)
- get(pluginName)

考虑到插件之间可能存在数据的共享和操作，所以为每个插件提供相关的操作能力，插件应该尽量避免使用`set`函数，跨插件的修改数据可能会影响别的插件！！！

> 注意，每次执行set函数时，应该先用get函数获取对应插件命名空间的数据，进行修改后，作为第二个参数传入。

## dzqRouter

dzqRouter是处理当前站点的跳转处理以及当前路由信息返回的一个对象，可以通过打印看到内部结构取值使用。 详细文档[SDK](https://web.archive.org/web/20230520034614mp_/https://developer.discuz.chat/#/sdk/src-router)

## dzqRequest & dzqRequestHandleError

dzqRequest是基于Discuz !Q全站统一请求库进行请求，默认会配置好相关的用户状态携带，默认域名和统一的错误处理。

可以参考以下简单实例，按照实际情况进行改写。

```javascript
async createRegister(opt) {
    try {
      const { params = {}, data = {}, ...others } = opt;
      const options = {
        url: 'xxx', // 请求地址
        method: 'POST', // 请求方式
        params, // 请求路径携带参数
        data, // 请求body参数
        ...others
      };
      const result = await this.props.dzqRequest.dispatcher(options);
      return result;
    } catch (error) {
      return this.props.dzqRequestHandleError(error);
    }
}
```