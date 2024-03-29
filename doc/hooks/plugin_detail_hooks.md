# 详情页（plugin_detail） hooks列表

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
| updateThread            | function(tomId, tomValue): void             | 更新当前帖子中对应扩展功能的内容     |
| updateListThreadIndexes | function(threadId, tomId, tomValue): object | 更新帖子列表中对应帖子id的内容       |

> tomValue是当前插件的数据体，可以参考renderData传入的内容进行修改