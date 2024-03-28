# 插件间通信

## 背景

一个插件可能具有多个注入点（组件），可能注入了多个位置。譬如，可能注册了页面，也使用了发帖区域的钩子。

而由于它们之间可能存在互相的联动，譬如彼此数据相互关联、彼此之间的交互相关联，需要进行通信

出于架构稳定性的角度考虑，`Discuz! Q` 没有对插件暴露完整的数据存储 `store` ，故此我们不能直接通过修改业务中的 `store` 来完成交互

出于上述原因，我们提出以下几种通信的方案

## 插件间通信

### 通过共同的数据存储通信

> 上文我们介绍了 `Discuz! Q` 中数据存储的方案，参见 [http://developer.discuz.chat/#/plugin/docs-store.md](https://web.archive.org/web/20230520034614mp_/http://developer.discuz.chat/#/plugin/docs-store.md)

官方最为推崇的一种方案是，基于官方提供的数据存储 `store` ，来完成彼此之间的相互交流

以下为示例

例如注入到个人中心的 `AComponent` 与 注入到发帖页的 `BComponent` 需要通信，他们共同属于 `MyPlugin` 插件

那么 `AComponent` 可以通过如下方式，在 `MyPlugin` 对应的插件存储 `store` 中注入数据

```php
this.props.pluginAction.set('MyPlugin', {
  data: { a: 1 }
});
BComponent` 可以通过如下方式获取到这个 `data
const data = this.props.pluginAction.get('MyPlugin').data;

//here is a -> 1
console.log(data.a);
```

`BComponent` 获取这个数据可能会在多个生命周期，譬如初始化的 `componentDidMount`，甚至是渲染时的 `render`，让这个数据和界面渲染相互绑定

**这个方案可以规避由于多个页面处于不同的时期初始化和销毁导致出错的问题**

### 通过事件机制通信

**官方不推荐此类通信方案，原因如下：**

1. 使用事件机制时，需要非常关心页面的挂载与销毁时机，调用销毁后页面中的事件是无效的
2. 小程序中，页面跳转(push)并不会销毁原页面堆栈，故原组件注册的事件还存在
3. 如果不处理事件的销毁时机，可能会造成内存泄漏
4. 通过注册事件的机制，在某种程度上属于违反了React推崇的自上而下的传递事件及参数的原则，可能会带来数据源混乱的情况

综合上述考虑，暂时官方并不提供内置的事件机制去支持这种方式实现，但如果开发者`必须`需要这样的机制实现插件功能，可以通过社区的实现方案[https://github.com/krasimir/EventBus。](https://web.archive.org/web/20230520034614mp_/https://github.com/krasimir/EventBus。)

在 `A` 组件中我们进行事件的注册

```javascript
  componentDidMount() {
    EventBus.addEventListener('showMiniDialog', this.handleMiniDialogOpen);
    EventBus.addEventListener('showPlatformDialog', this.handlePlatformDialogOpen);
  }

  // 一定要记得销毁，否则会造成内存泄露
  componentWillUnmount() {
    EventBus.removeEventListener('showMiniDialog', this.handleMiniDialogOpen);
    EventBus.removeEventListener('showPlatformDialog', this.handlePlatformDialogOpen);
  }
```

在 `B` 组件中我们进行事件的派发

```javascript
  handleMiniShopItemClick = () => {
    EventBus.dispatch('showMiniDialog');
  };

  handlePlatformItemClick = () => {
    EventBus.dispatch('showPlatformDialog');
  };
```

如果此时，`A` 注册的事件没有被销毁，且 `B` 与 `A` 共用同一个实例，那么就可以实现互相的通信