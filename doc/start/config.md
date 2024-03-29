# 插件配置
通过`@discuzq/cli`初始化插件时，会配置一个基本的插件配置文件`config.json`。

```json
{
	"name_cn": "我的小插件",
	"name_en": "MyPlugin",
	"description": "this is my first plugin",
	"type": "0",
	"app_id": "44c042817f420",
	"version": "1.0.0",
	"status": 1,
	"filter_enable": false,
	"author": {
		"name": "user01",
		"email": "user01@qq.com"
	},
    "busi": "",
	"view": {
		"YourPlugin": {
			"target": "请填写使用的target",
			"hookName": "请填写使用的hook",
			"platform": [
				"pc",
				"h5",
				"mini"
			],
			"disables": false
		}
	}
}
```
说明：

 - `app_id` 和 `name_en` 一个插件保证一致，且全局唯一

## name_cn
插件的中文名称，用于插件的信息展示

## name_en
插件的英文名称，插件名称经历通过"_"进行分词，例如：`lam_promote_index_header`。应该尽可能通过名字说明清楚插件的用途，使用的地方。 **只支持英文大大小写字母，长度为2-20**。

 > 插件名称应该是一个唯一的名字，如果与其他插件名称冲突，可能会产生意想不到的情况。

## description
插件描述，应充分描述清楚插件的内容，使用范围，适用平台等。

## type
描述插件的类型，目前内置以下类型。

 - 0 -> 自定义
 - 1 -> 新增帖子
 - 2 -> 数据导入

 > 其中如果type是1，那么filter_enable字段将生效，用于筛选时是否出现对应的筛选条件

## app_id
通过`@discuzq/cli`生成的唯一id，请勿手动修改。

## version
插件版本。默认是1.0.0。

## status
是否启用插件。

## filter_enable
筛选条件是否出现本插件，`type=1`时才生效

## author
作者信息。

## busi
前端文件存放目录。如果插件的 `type` 值为 1，前端文件存放目录到 `View/dist` 下，并且 `busi` 的值设置为 `View/dist`。其它 `type` 值则不用设置。

## view
插件配置信息，以`@discuzq/cli`生成的`config.json`为例。
```json
{
    "view": {
	    "YourPlugin": {
		    "target": "请填写使用的target",
		    "hookName": "请填写使用的hook",
		    "platform": [
			    "pc",
			    "h5",
			    "mini"
		    ],
		    "disables": false
	    }
    }
}
```
|属性|值类型|可用值|描述|是否必须|
|:----:|:----:|:----:|:----:|:----:|
|target|Array|参考`target`定义|插件作用在哪个页面的标识|是|
|hookName|String|参考`hookName`定义|插件作用域`target`中哪个钩子|是|
|platform|Array|'h5','pc','mini'|可用平台|是|
|path|String|任意|页面插件路径|否|
|miniPageConfig|Object|[参考 Taro 文档](https://docs.taro.zone/docs/page-config/)|小程序页面配置|否|
|disables|Boolean|true或false|是否禁用|是|

其中`YourPlugin`这个key必须与文件目录下`View/src`下的插件名称对应，否则无法准确找到组件。