# 公共（plugin_global） hooks列表

## header_replace_hook

替换全局公共的头部

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| PC   |    √     |
| H5   |    √     |

#### 参数

| 属性                                                         | 值类型   | 描述                 |
| :----------------------------------------------------------- | :------- | :------------------- |
| [通用参数](./common_props.md) |          |                      |
| renderData.totalUnread                                       | number   | 当前用户的未读消息数 |
| onSearch                                                     | function | 触发搜索事件         |

## footer_replace_hook

替换全局公共的底部

#### 支持平台

| 平台 | 是否支持 |
| :--- | :------: |
| H5   |    √     |
| Mini |    √     |

#### 参数

[通用参数](./common_props.md)