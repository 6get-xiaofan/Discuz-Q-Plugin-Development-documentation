import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.DTU5Z1Qv.js";const m=JSON.parse('{"title":"插件目录规范","description":"","frontmatter":{},"headers":[],"relativePath":"start/dir.md","filePath":"start/dir.md","lastUpdated":1711684263000}'),p={name:"start/dir.md"},l=e(`<h1 id="插件目录规范" tabindex="-1">插件目录规范 <a class="header-anchor" href="#插件目录规范" aria-label="Permalink to &quot;插件目录规范&quot;">​</a></h1><p>每一个插件都必须遵循规范的目录结构，构建方式和部署插件都是基于标准的目录结构运行的。</p><p>每个插件都是一个可运行在服务器提供<code>热插拔</code>和小程序进行<code>编译</code>的独立插件包，每个插件包中都会存放有<code>前端</code>和<code>后端</code>相关的相关文件，无论是服务器部署插件还是小程序编译插件，都有一套完整标准的工程化构建规范，每个插件必须按照以下目录结构进行开发。</p><h2 id="插件完整目录结构" tabindex="-1">插件完整目录结构 <a class="header-anchor" href="#插件完整目录结构" aria-label="Permalink to &quot;插件完整目录结构&quot;">​</a></h2><p>通过<code>@discuzq/cli</code>初始化目录结果如下：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── Activity ------------------ 活动报名贴</span></span>
<span class="line"><span>│   ├── ActivityBusi.php ------ 主题插件核心逻辑</span></span>
<span class="line"><span>│   ├── Console --------------- 控制台命令及定时任务</span></span>
<span class="line"><span>│   ├── Controller ------------ 报名贴接口逻辑</span></span>
<span class="line"><span>│   ├── Database -------------- 报名帖数据表</span></span>
<span class="line"><span>│   ├── Model ----------------- 报名帖orm模型</span></span>
<span class="line"><span>│   ├── ReadMe.md</span></span>
<span class="line"><span>│   ├── Routes ---------------- 报名帖接口路由 【即将开放】</span></span>
<span class="line"><span>│   ├── View ------------------ 报名帖前端样式和逻辑【暂未开放】</span></span>
<span class="line"><span>│   └── config.json ----------- 插件基础配置文件</span></span>
<span class="line"><span>├── Jobs ---------------------- 求职招聘贴 【仅演示项目结构】</span></span>
<span class="line"><span>│   ├── Console</span></span>
<span class="line"><span>│   ├── Controller</span></span>
<span class="line"><span>│   ├── Database</span></span>
<span class="line"><span>│   ├── JobBusi.php</span></span>
<span class="line"><span>│   ├── Model</span></span>
<span class="line"><span>│   ├── Routes</span></span>
<span class="line"><span>│   ├── View</span></span>
<span class="line"><span>│   ├── config.php</span></span>
<span class="line"><span>│   └── readMe.md</span></span></code></pre></div><h2 id="console-命令行逻辑" tabindex="-1"><code>Console</code> 命令行逻辑 <a class="header-anchor" href="#console-命令行逻辑" aria-label="Permalink to &quot;\`Console\` 命令行逻辑&quot;">​</a></h2><p>有些应用可能需要计划任务或者控制台命令以完成初始化或者定期批处理的操作。请在插件目录<code>Console</code>里定制你的脚本，查看活动报名插件内置的范例，</p><h2 id="controller-接口控制器" tabindex="-1"><code>Controller</code> 接口控制器 <a class="header-anchor" href="#controller-接口控制器" aria-label="Permalink to &quot;\`Controller\` 接口控制器&quot;">​</a></h2><p><code>Controller</code>目录下存放每个接口的住控制器，插件接口的业务逻辑应该存放在此目录中。</p><h2 id="database-插件数据表" tabindex="-1"><code>Database</code> 插件数据表 <a class="header-anchor" href="#database-插件数据表" aria-label="Permalink to &quot;\`Database\` 插件数据表&quot;">​</a></h2><p>如插件接口需要独立的数据存储时，就需要为插件建立新的数据库<code>表</code>，那么新建表的逻辑代码，就需要存放在<code>Database</code>目录下的<code>migrate</code>文件中。</p><h2 id="model-数据模型" tabindex="-1"><code>Model</code> 数据模型 <a class="header-anchor" href="#model-数据模型" aria-label="Permalink to &quot;\`Model\` 数据模型&quot;">​</a></h2><p>数据库新建表成功后便可以在插件目录 <code>Model</code> 里添加数据模型。</p><h2 id="routes-接口路由" tabindex="-1"><code>Routes</code> 接口路由 <a class="header-anchor" href="#routes-接口路由" aria-label="Permalink to &quot;\`Routes\` 接口路由&quot;">​</a></h2><p>该目录下可以任意定义<code>php文件</code>名称，也可以任意拆分成多个<code>php文件</code>，框架会自动扫描Routes目录下的所有可用路由配置。</p><h2 id="view-插件前端逻辑-包含各个模块的js-css-资源文件等" tabindex="-1"><code>View</code> 插件前端逻辑,包含各个模块的js,css，资源文件等 <a class="header-anchor" href="#view-插件前端逻辑-包含各个模块的js-css-资源文件等" aria-label="Permalink to &quot;\`View\` 插件前端逻辑,包含各个模块的js,css，资源文件等&quot;">​</a></h2><p>前端资源源码以及构架后的代码存放目录。</p><p>view文件下的前端规范目录</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── src ----------------------------------- 源文件</span></span>
<span class="line"><span>│   ├── 插件名称 --------------------------- 插件文件名</span></span>
<span class="line"><span>│   │   ├── main.js ---------------------- 主程序入口</span></span>
<span class="line"><span>│   │   ├── adapter ---------------------- 适配器</span></span>
<span class="line"><span>│   │   |  ├── index.js ------------------ 适配器入口</span></span>
<span class="line"><span>│   │   |  ├── web ----------------------- web端代码目录</span></span>
<span class="line"><span>│   │   |  |  ├── index.jsx ------------- web端插件代码</span></span>
<span class="line"><span>│   │   |  |  ├── index.sass ------------ web端插件样式</span></span>
<span class="line"><span>│   │   |  ├── mini ---------------------- 小程序代码目录</span></span>
<span class="line"><span>│   │   |  |  ├── index.jsx ------------- 小程序插件代码</span></span>
<span class="line"><span>│   │   |  |  ├── index.sass ------------ 小程序插件样式</span></span>
<span class="line"><span>├── dist ---------------------------------  构建后文件目录</span></span>
<span class="line"><span>│   ├── 插件名称 --------------------------- 插件文件名</span></span>
<span class="line"><span>│   │   ├── index.js --------------------- 构建后\`umd\`规范js</span></span>
<span class="line"><span>│   │   ├── index.css -------------------- 构建后样式文件</span></span></code></pre></div>`,20),o=[l];function c(i,t,d,r,h,u){return n(),s("div",null,o)}const _=a(p,[["render",c]]);export{m as __pageData,_ as default};
