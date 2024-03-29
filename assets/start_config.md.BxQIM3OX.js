import{_ as s,c as t,o as i,a2 as a}from"./chunks/framework.DTU5Z1Qv.js";const g=JSON.parse('{"title":"插件配置","description":"","frontmatter":{},"headers":[],"relativePath":"start/config.md","filePath":"start/config.md","lastUpdated":1711684599000}'),n={name:"start/config.md"},e=a(`<h1 id="插件配置" tabindex="-1">插件配置 <a class="header-anchor" href="#插件配置" aria-label="Permalink to &quot;插件配置&quot;">​</a></h1><p>通过<code>@discuzq/cli</code>初始化插件时，会配置一个基本的插件配置文件<code>config.json</code>。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;name_cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我的小插件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;name_en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyPlugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;this is my first plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;app_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;44c042817f420&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;filter_enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user01@qq.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;busi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;view&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;YourPlugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请填写使用的target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;hookName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请填写使用的hook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;platform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;pc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;h5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;mini&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;disables&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>说明：</p><ul><li><code>app_id</code> 和 <code>name_en</code> 一个插件保证一致，且全局唯一</li></ul><h2 id="name-cn" tabindex="-1">name_cn <a class="header-anchor" href="#name-cn" aria-label="Permalink to &quot;name_cn&quot;">​</a></h2><p>插件的中文名称，用于插件的信息展示</p><h2 id="name-en" tabindex="-1">name_en <a class="header-anchor" href="#name-en" aria-label="Permalink to &quot;name_en&quot;">​</a></h2><p>插件的英文名称，插件名称经历通过&quot;_&quot;进行分词，例如：<code>lam_promote_index_header</code>。应该尽可能通过名字说明清楚插件的用途，使用的地方。 <strong>只支持英文大大小写字母，长度为2-20</strong>。</p><blockquote><p>插件名称应该是一个唯一的名字，如果与其他插件名称冲突，可能会产生意想不到的情况。</p></blockquote><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><p>插件描述，应充分描述清楚插件的内容，使用范围，适用平台等。</p><h2 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h2><p>描述插件的类型，目前内置以下类型。</p><ul><li>0 -&gt; 自定义</li><li>1 -&gt; 新增帖子</li><li>2 -&gt; 数据导入</li></ul><blockquote><p>其中如果type是1，那么filter_enable字段将生效，用于筛选时是否出现对应的筛选条件</p></blockquote><h2 id="app-id" tabindex="-1">app_id <a class="header-anchor" href="#app-id" aria-label="Permalink to &quot;app_id&quot;">​</a></h2><p>通过<code>@discuzq/cli</code>生成的唯一id，请勿手动修改。</p><h2 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h2><p>插件版本。默认是1.0.0。</p><h2 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h2><p>是否启用插件。</p><h2 id="filter-enable" tabindex="-1">filter_enable <a class="header-anchor" href="#filter-enable" aria-label="Permalink to &quot;filter_enable&quot;">​</a></h2><p>筛选条件是否出现本插件，<code>type=1</code>时才生效</p><h2 id="author" tabindex="-1">author <a class="header-anchor" href="#author" aria-label="Permalink to &quot;author&quot;">​</a></h2><p>作者信息。</p><h2 id="busi" tabindex="-1">busi <a class="header-anchor" href="#busi" aria-label="Permalink to &quot;busi&quot;">​</a></h2><p>前端文件存放目录。如果插件的 <code>type</code> 值为 1，前端文件存放目录到 <code>View/dist</code> 下，并且 <code>busi</code> 的值设置为 <code>View/dist</code>。其它 <code>type</code> 值则不用设置。</p><h2 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h2><p>插件配置信息，以<code>@discuzq/cli</code>生成的<code>config.json</code>为例。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;view&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	    &quot;YourPlugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		    &quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请填写使用的target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		    &quot;hookName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请填写使用的hook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		    &quot;platform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			    &quot;pc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			    &quot;h5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			    &quot;mini&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		    &quot;disables&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">值类型</th><th style="text-align:center;">可用值</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">target</td><td style="text-align:center;">Array</td><td style="text-align:center;">参考<code>target</code>定义</td><td style="text-align:center;">插件作用在哪个页面的标识</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">hookName</td><td style="text-align:center;">String</td><td style="text-align:center;">参考<code>hookName</code>定义</td><td style="text-align:center;">插件作用域<code>target</code>中哪个钩子</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">platform</td><td style="text-align:center;">Array</td><td style="text-align:center;">&#39;h5&#39;,&#39;pc&#39;,&#39;mini&#39;</td><td style="text-align:center;">可用平台</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">path</td><td style="text-align:center;">String</td><td style="text-align:center;">任意</td><td style="text-align:center;">页面插件路径</td><td style="text-align:center;">否</td></tr><tr><td style="text-align:center;">miniPageConfig</td><td style="text-align:center;">Object</td><td style="text-align:center;"><a href="https://docs.taro.zone/docs/page-config/" target="_blank" rel="noreferrer">参考 Taro 文档</a></td><td style="text-align:center;">小程序页面配置</td><td style="text-align:center;">否</td></tr><tr><td style="text-align:center;">disables</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true或false</td><td style="text-align:center;">是否禁用</td><td style="text-align:center;">是</td></tr></tbody></table><p>其中<code>YourPlugin</code>这个key必须与文件目录下<code>View/src</code>下的插件名称对应，否则无法准确找到组件。</p>`,33),l=[e];function h(p,k,r,d,o,E){return i(),t("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};