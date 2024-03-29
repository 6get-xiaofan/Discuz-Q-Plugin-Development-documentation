# 插件主程序

插件必须提供一个主程序的入口文件，是每个插件的入口。插件主程序文件，必须是一个类，并且必须包含以下静态参数。可参考以下示例：

以下是插件主入口的模板，Component必须指向`适配器`，由编译时决定返回那个段的样式组件。

main.js

```typescript
import Component from './adapter';
import config from '../../../config.json';

export default class YourPlugin {
    static pluginName = config.name_en // 插件名称
    static version = config.version // 插件版本
    static type = config.type; // 插件类型
    static appid = config.app_id; // appid
    static author = config.author; // 作者
    static platform = config.view.YourPlugin.platform;
    static target = config.view.YourPlugin.target // 插件使用目标
    static hookName = config.view.YourPlugin.hookName // 钩子名称
    static component = <Component/> // 需要渲染的组件
    static options = {} // 需要在注入时提供的额外数据
}
```

| 属性       | 值类型         | 可用值             | 描述                             |
| :--------- | :------------- | :----------------- | :------------------------------- |
| pluginName | String         | 自定义（不可重名） | 插件名称                         |
| version    | String         | 1.0.0              | 插件版本                         |
| type       | String         | 0, 1, 2            | 插件类型                         |
| appid      | String         | 自动生成           | 插件唯一标识                     |
| author     | Object         | 参考脚手架生成     | 作者信息                         |
| hookName   | String         | 参考hookName定义   | 钩子名称                         |
| platform   | Array          | 'h5','pc','mini'   | 可用平台范围                     |
| component  | ReactComponent | 无                 | 插件组件                         |
| path       | String         | 自定义             | 页面插件必填                     |
| options    | object         | 无                 | 自定义传递进插件渲染时使用的数据 |

> 组件不支持`函数组件`，必须使用`class`编写组件。