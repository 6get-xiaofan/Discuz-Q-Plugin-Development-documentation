# 插件目录规范

每一个插件都必须遵循规范的目录结构，构建方式和部署插件都是基于标准的目录结构运行的。

每个插件都是一个可运行在服务器提供`热插拔`和小程序进行`编译`的独立插件包，每个插件包中都会存放有`前端`和`后端`相关的相关文件，无论是服务器部署插件还是小程序编译插件，都有一套完整标准的工程化构建规范，每个插件必须按照以下目录结构进行开发。

## 插件完整目录结构

通过`@discuzq/cli`初始化目录结果如下：

```txt
├── Activity ------------------ 活动报名贴
│   ├── ActivityBusi.php ------ 主题插件核心逻辑
│   ├── Console --------------- 控制台命令及定时任务
│   ├── Controller ------------ 报名贴接口逻辑
│   ├── Database -------------- 报名帖数据表
│   ├── Model ----------------- 报名帖orm模型
│   ├── ReadMe.md
│   ├── Routes ---------------- 报名帖接口路由 【即将开放】
│   ├── View ------------------ 报名帖前端样式和逻辑【暂未开放】
│   └── config.json ----------- 插件基础配置文件
├── Jobs ---------------------- 求职招聘贴 【仅演示项目结构】
│   ├── Console
│   ├── Controller
│   ├── Database
│   ├── JobBusi.php
│   ├── Model
│   ├── Routes
│   ├── View
│   ├── config.php
│   └── readMe.md
```

## `Console` 命令行逻辑
有些应用可能需要计划任务或者控制台命令以完成初始化或者定期批处理的操作。请在插件目录`Console`里定制你的脚本，查看活动报名插件内置的范例，

## `Controller` 接口控制器
`Controller`目录下存放每个接口的住控制器，插件接口的业务逻辑应该存放在此目录中。

## `Database` 插件数据表
如插件接口需要独立的数据存储时，就需要为插件建立新的数据库`表`，那么新建表的逻辑代码，就需要存放在`Database`目录下的`migrate`文件中。

## `Model` 数据模型
数据库新建表成功后便可以在插件目录 `Model` 里添加数据模型。

## `Routes` 接口路由
该目录下可以任意定义`php文件`名称，也可以任意拆分成多个`php文件`，框架会自动扫描Routes目录下的所有可用路由配置。

## `View` 插件前端逻辑,包含各个模块的js,css，资源文件等
前端资源源码以及构架后的代码存放目录。

view文件下的前端规范目录
```txt
├── src ----------------------------------- 源文件
│   ├── 插件名称 --------------------------- 插件文件名
│   │   ├── main.js ---------------------- 主程序入口
│   │   ├── adapter ---------------------- 适配器
│   │   |  ├── index.js ------------------ 适配器入口
│   │   |  ├── web ----------------------- web端代码目录
│   │   |  |  ├── index.jsx ------------- web端插件代码
│   │   |  |  ├── index.sass ------------ web端插件样式
│   │   |  ├── mini ---------------------- 小程序代码目录
│   │   |  |  ├── index.jsx ------------- 小程序插件代码
│   │   |  |  ├── index.sass ------------ 小程序插件样式
├── dist ---------------------------------  构建后文件目录
│   ├── 插件名称 --------------------------- 插件文件名
│   │   ├── index.js --------------------- 构建后`umd`规范js
│   │   ├── index.css -------------------- 构建后样式文件            
```

