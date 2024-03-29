import{_ as e,c as o,o as t,a2 as c}from"./chunks/framework.CQ12TVIp.js";const a="/assets/architecture-1.DmQbK7tQ.png",r="/assets/architecture-2.DrSfvGjw.png",f=JSON.parse('{"title":"插件架构","description":"","frontmatter":{},"headers":[],"relativePath":"components/architecture.md","filePath":"components/architecture.md","lastUpdated":1711682894000}'),d={name:"components/architecture.md"},s=c('<h1 id="插件架构" tabindex="-1">插件架构 <a class="header-anchor" href="#插件架构" aria-label="Permalink to &quot;插件架构&quot;">​</a></h1><p>在Discuz !Q进行编译时，脚手架会对一个固定的文件位置进行读取，会自动识别标准的插件文件，并且会根据插件描述文件中指定的<code>target</code>和<code>hookName</code>的字段，通过<code>@discuzq/cli</code>中内置的插件注入器，对插件代码进行注入到相应的页面中。</p><p><img src="'+a+'" alt="图片"></p><blockquote><p>插件的<code>platform</code>会在编译时，根据编译的模式，忽略非当前编译环境的插件，不会注入到代码中。</p></blockquote><h2 id="插件注册" tabindex="-1">插件注册 <a class="header-anchor" href="#插件注册" aria-label="Permalink to &quot;插件注册&quot;">​</a></h2><p>Discuz !Q内置一个插件中心，负责将整个Discuz !Q使用的插件都会注册进插件中心中，提供整个Discuz !Q使用。插件中心对于插件注册有以下限制：</p><ul><li>同一个<code>target</code>和<code>hookName</code>中，每个插件的名称是<code>唯一</code>的。</li><li>如果在同一个<code>target</code>和<code>hookName</code>中，出现同名插件，那么将会对比版本号，取最新的版本号插件进行存储。</li></ul><p><img src="'+r+'" alt="图片"></p><blockquote><p>Discuz !Q插件中心，将以<code>target</code>和<code>hookName</code>拼接作为作用域。</p></blockquote><h2 id="插件渲染" tabindex="-1">插件渲染 <a class="header-anchor" href="#插件渲染" aria-label="Permalink to &quot;插件渲染&quot;">​</a></h2><p>已经具备插件钩子的页面，在每次渲染的时候，都会向插件中心获取属于当前<code>taget</code>对应<code>hookName</code>的插件，并且进行渲染。</p><p>渲染时，由Discuz !Q团队对于每个<code>hook</code>传入固定的参数供插件使用。</p>',12),i=[s];function n(l,p,h,_,u,m){return t(),o("div",null,i)}const b=e(d,[["render",n]]);export{f as __pageData,b as default};