# 首页（plugin_index） hooks列表

![首页钩子位置图示](../images/plugin_index_hooks-1.png)

![移动端首页钩子示例](../images/plugin_index_hooks-2.png)

## thread_extension_display_hook

帖子扩展区，生效在所有内置组件的最后进行展示

#### 平台支持

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

| 属性                    | 值类型                                      | 描述                                 |
| :---------------------- | :------------------------------------------ | :----------------------------------- |
| renderData              | object                                      | 当前符合插件提交的数据，用于数据展示 |
| threadData              | object                                      | 插件所有帖子信息                     |
| updateThread            | function(tomId, tomValue): void             | 更新帖子信息                         |
| updateListThreadIndexes | function(threadId, tomId, tomValue): object | 更新帖子列表中的信息                 |
| recomputeRowHeights     | function(): boolean                         | web端有效，更新虚拟滚动的高度        |

> recomputeRowHeights函数传入参数为updateListThreadIndexes函数调用的返回值。 tomValue是当前插件的数据体，可以参考renderData传入的内容进行修改

## header_insert_before_hook

在首页顶部上方区域插入相关内容

#### 平台支持

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |

#### 参数

[通用参数](./common_props.md)

## header_insert_after_hook

在首页顶部下方区域插入相关内容

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| H5   |    √     |
| Mini |    √     |

#### 参数

[通用参数](./common_props.md)

## header_replace_hook

替换原有的首页顶部区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| H5   |    √     |
| Mini |    √     |

#### 参数

[通用参数](./common_props.md)

## tabs_replace_hook

替换原有的首页条件选区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

| 属性                                                         | 值类型                                                     | 描述                                                         |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| [通用参数](./common_props.md) |                                                            |                                                              |
| renderData.categories                                        | array                                                      | 分类列表，仅h5和小程序下提供                                 |
| changeFilter                                                 | function({types, sort, essence, attention, sequence}):void | 改变过滤条件，触发列表请求，详见[参数类型说明](../other/api_v3_thread.md) |

> changeFilter中的参数都为非必须，由于后台接口字段调整，`sequence`为[参数类型说明](../other/api_v3_thread.md)中`scope`字段的含义

## topping_insert_before_hook

在首页置顶区域上方插入内容

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

[通用参数](./common_props.md)

## topping_insert_after_hook

在首页置顶区域下方插入内容

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

[通用参数](./common_props.md)

## topping_replace_hook

替换原有的首页置顶区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |
| Mini |    √     |

#### 参数

| 属性                                                         | 值类型 | 描述     |
| :----------------------------------------------------------- | :----- | :------- |
| [通用参数](./common_props.md) |        |          |
| renderData.sticks                                            | array  | 置顶列表 |

## left_replace_hook

替换原有的首页左侧区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |

#### 参数

| 属性                                                         | 值类型                          | 描述                       |
| :----------------------------------------------------------- | :------------------------------ | :------------------------- |
| [通用参数](./common_props.md) |                                 |                            |
| renderData.categories                                        | array                           | 分类信息                   |
| renderData.defaultFisrtIndex                                 | string                          | 默认选择的一级分类         |
| renderData.defaultSecondIndex                                | string                          | 默认选择的二级分类         |
| renderData.totalThreads                                      | number                          | 总帖子数量                 |
| renderData.isError                                           | boolean                         | 是否分类请求错误           |
| renderData.errorText                                         | string                          | 请求错误信息               |
| onNavigationClick                                            | function({ categoryIds }): void | 导航点击事件，触发列表请求 |

> categoryIds为包含一级分类、二级分类id数组，例如：`[1,2]`

## right_replace_hook

替换原有的首页右侧区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |

#### 参数

| 属性                                                         | 值类型   | 描述         |
| :----------------------------------------------------------- | :------- | :----------- |
| [通用参数](./common_props.md) |          |              |
| recommends                                                   | array    | 推荐列表     |
| url                                                          | string   | 站点链接     |
| onGetRecommends                                              | function | 获取推荐列表 |

## recommend_replace_hook

替换原有的首页推荐区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |

#### 参数

| 属性                                                         | 值类型           | 描述         |
| :----------------------------------------------------------- | :--------------- | :----------- |
| [通用参数](./common_props.md) |                  |              |
| recommends                                                   | array            | 推荐列表     |
| onGetRecommends                                              | function():array | 获取推荐列表 |

## qrcode_replace_hook

替换原有的首页二维码区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |

#### 参数

| 属性                                                         | 值类型 | 描述     |
| :----------------------------------------------------------- | :----- | :------- |
| [通用参数](./common_props.md) |        |          |
| url                                                          | string | 站点链接 |

## copyright_replace_hook

替换原有的首页备案号区域

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |

#### 参数

[通用参数](./common_props.md)

> 相关版权信息可在通用参数中的`siteData.webConfig.setSite`中获取