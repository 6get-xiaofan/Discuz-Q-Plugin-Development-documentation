# 多端适配器

Discuz !Q是一个多端应用，插件应该也需要实现多端的支持。对于代码的入口文件，建议使用官方提供的适配器规范编写。

```javascript
let pluginComponent = () => {};
if (process.env.DISCUZ_ENV === 'mini') {
    // taro项目的小程序
    pluginComponent = require('./mini/index.jsx');
}
if (process.env.DISCUZ_ENV === 'web') {
    pluginComponent = require('./web/index.jsx');
}

export default pluginComponent.default;
```

此写法有一个优点，可以在代码编译时检测到无用代码，便于构建时进行代码剪枝，减少代码体积。

> 如果你的插件不支持`小程序`或`浏览器`，可以通过`config.json`中的`platform`属性定义插件的使用范围。

如果你的插件不支持`小程序`，可以将`./mini/index.jsx`文件中返回一个空的`class`。

```javascript
import React from 'react';
export default class CustomPlugin extends React.PureComponent {
    constructor(props) {
      super(props);
    }
  
    render() {
      return null;
    }
}
```

