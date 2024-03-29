import{_ as t,c as e,o as a,a2 as l}from"./chunks/framework.DTU5Z1Qv.js";const r="/Discuz-Q-Plugin-Development-documentation/assets/plugin_index_hooks-1.OQIKFD3L.png",d="/Discuz-Q-Plugin-Development-documentation/assets/plugin_index_hooks-2.B5z-4zMj.png",p=JSON.parse('{"title":"首页（plugin_index） hooks列表","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/plugin_index_hooks.md","filePath":"hooks/plugin_index_hooks.md","lastUpdated":1711683157000}'),o={name:"hooks/plugin_index_hooks.md"},n=l('<h1 id="首页-plugin-index-hooks列表" tabindex="-1">首页（plugin_index） hooks列表 <a class="header-anchor" href="#首页-plugin-index-hooks列表" aria-label="Permalink to &quot;首页（plugin_index） hooks列表&quot;">​</a></h1><p><img src="'+r+'" alt="首页钩子位置图示"></p><p><img src="'+d+'" alt="移动端首页钩子示例"></p><h2 id="thread-extension-display-hook" tabindex="-1">thread_extension_display_hook <a class="header-anchor" href="#thread-extension-display-hook" aria-label="Permalink to &quot;thread_extension_display_hook&quot;">​</a></h2><p>帖子扩展区，生效在所有内置组件的最后进行展示</p><h4 id="平台支持" tabindex="-1">平台支持 <a class="header-anchor" href="#平台支持" aria-label="Permalink to &quot;平台支持&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">renderData</td><td style="text-align:left;">object</td><td style="text-align:left;">当前符合插件提交的数据，用于数据展示</td></tr><tr><td style="text-align:left;">threadData</td><td style="text-align:left;">object</td><td style="text-align:left;">插件所有帖子信息</td></tr><tr><td style="text-align:left;">updateThread</td><td style="text-align:left;">function(tomId, tomValue): void</td><td style="text-align:left;">更新帖子信息</td></tr><tr><td style="text-align:left;">updateListThreadIndexes</td><td style="text-align:left;">function(threadId, tomId, tomValue): object</td><td style="text-align:left;">更新帖子列表中的信息</td></tr><tr><td style="text-align:left;">recomputeRowHeights</td><td style="text-align:left;">function(): boolean</td><td style="text-align:left;">web端有效，更新虚拟滚动的高度</td></tr></tbody></table><blockquote><p>recomputeRowHeights函数传入参数为updateListThreadIndexes函数调用的返回值。 tomValue是当前插件的数据体，可以参考renderData传入的内容进行修改</p></blockquote><h2 id="header-insert-before-hook" tabindex="-1">header_insert_before_hook <a class="header-anchor" href="#header-insert-before-hook" aria-label="Permalink to &quot;header_insert_before_hook&quot;">​</a></h2><p>在首页顶部上方区域插入相关内容</p><h4 id="平台支持-1" tabindex="-1">平台支持 <a class="header-anchor" href="#平台支持-1" aria-label="Permalink to &quot;平台支持&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p><a href="./common_props.html">通用参数</a></p><h2 id="header-insert-after-hook" tabindex="-1">header_insert_after_hook <a class="header-anchor" href="#header-insert-after-hook" aria-label="Permalink to &quot;header_insert_after_hook&quot;">​</a></h2><p>在首页顶部下方区域插入相关内容</p><h4 id="支持平台" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p><a href="./common_props.html">通用参数</a></p><h2 id="header-replace-hook" tabindex="-1">header_replace_hook <a class="header-anchor" href="#header-replace-hook" aria-label="Permalink to &quot;header_replace_hook&quot;">​</a></h2><p>替换原有的首页顶部区域</p><h4 id="支持平台-1" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-1" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-3" tabindex="-1">参数 <a class="header-anchor" href="#参数-3" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p><a href="./common_props.html">通用参数</a></p><h2 id="tabs-replace-hook" tabindex="-1">tabs_replace_hook <a class="header-anchor" href="#tabs-replace-hook" aria-label="Permalink to &quot;tabs_replace_hook&quot;">​</a></h2><p>替换原有的首页条件选区域</p><h4 id="支持平台-2" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-2" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-4" tabindex="-1">参数 <a class="header-anchor" href="#参数-4" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./common_props.html">通用参数</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">renderData.categories</td><td style="text-align:left;">array</td><td style="text-align:left;">分类列表，仅h5和小程序下提供</td></tr><tr><td style="text-align:left;">changeFilter</td><td style="text-align:left;">function({types, sort, essence, attention, sequence}):void</td><td style="text-align:left;">改变过滤条件，触发列表请求，详见<a href="./../other/api_v3_thread.html">参数类型说明</a></td></tr></tbody></table><blockquote><p>changeFilter中的参数都为非必须，由于后台接口字段调整，<code>sequence</code>为<a href="./../other/api_v3_thread.html">参数类型说明</a>中<code>scope</code>字段的含义</p></blockquote><h2 id="topping-insert-before-hook" tabindex="-1">topping_insert_before_hook <a class="header-anchor" href="#topping-insert-before-hook" aria-label="Permalink to &quot;topping_insert_before_hook&quot;">​</a></h2><p>在首页置顶区域上方插入内容</p><h4 id="支持平台-3" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-3" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-5" tabindex="-1">参数 <a class="header-anchor" href="#参数-5" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p><a href="./common_props.html">通用参数</a></p><h2 id="topping-insert-after-hook" tabindex="-1">topping_insert_after_hook <a class="header-anchor" href="#topping-insert-after-hook" aria-label="Permalink to &quot;topping_insert_after_hook&quot;">​</a></h2><p>在首页置顶区域下方插入内容</p><h4 id="支持平台-4" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-4" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-6" tabindex="-1">参数 <a class="header-anchor" href="#参数-6" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p><a href="./common_props.html">通用参数</a></p><h2 id="topping-replace-hook" tabindex="-1">topping_replace_hook <a class="header-anchor" href="#topping-replace-hook" aria-label="Permalink to &quot;topping_replace_hook&quot;">​</a></h2><p>替换原有的首页置顶区域</p><h4 id="支持平台-5" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-5" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:left;">Mini</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-7" tabindex="-1">参数 <a class="header-anchor" href="#参数-7" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./common_props.html">通用参数</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">renderData.sticks</td><td style="text-align:left;">array</td><td style="text-align:left;">置顶列表</td></tr></tbody></table><h2 id="left-replace-hook" tabindex="-1">left_replace_hook <a class="header-anchor" href="#left-replace-hook" aria-label="Permalink to &quot;left_replace_hook&quot;">​</a></h2><p>替换原有的首页左侧区域</p><h4 id="支持平台-6" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-6" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-8" tabindex="-1">参数 <a class="header-anchor" href="#参数-8" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./common_props.html">通用参数</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">renderData.categories</td><td style="text-align:left;">array</td><td style="text-align:left;">分类信息</td></tr><tr><td style="text-align:left;">renderData.defaultFisrtIndex</td><td style="text-align:left;">string</td><td style="text-align:left;">默认选择的一级分类</td></tr><tr><td style="text-align:left;">renderData.defaultSecondIndex</td><td style="text-align:left;">string</td><td style="text-align:left;">默认选择的二级分类</td></tr><tr><td style="text-align:left;">renderData.totalThreads</td><td style="text-align:left;">number</td><td style="text-align:left;">总帖子数量</td></tr><tr><td style="text-align:left;">renderData.isError</td><td style="text-align:left;">boolean</td><td style="text-align:left;">是否分类请求错误</td></tr><tr><td style="text-align:left;">renderData.errorText</td><td style="text-align:left;">string</td><td style="text-align:left;">请求错误信息</td></tr><tr><td style="text-align:left;">onNavigationClick</td><td style="text-align:left;">function({ categoryIds }): void</td><td style="text-align:left;">导航点击事件，触发列表请求</td></tr></tbody></table><blockquote><p>categoryIds为包含一级分类、二级分类id数组，例如：<code>[1,2]</code></p></blockquote><h2 id="right-replace-hook" tabindex="-1">right_replace_hook <a class="header-anchor" href="#right-replace-hook" aria-label="Permalink to &quot;right_replace_hook&quot;">​</a></h2><p>替换原有的首页右侧区域</p><h4 id="支持平台-7" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-7" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-9" tabindex="-1">参数 <a class="header-anchor" href="#参数-9" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./common_props.html">通用参数</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">recommends</td><td style="text-align:left;">array</td><td style="text-align:left;">推荐列表</td></tr><tr><td style="text-align:left;">url</td><td style="text-align:left;">string</td><td style="text-align:left;">站点链接</td></tr><tr><td style="text-align:left;">onGetRecommends</td><td style="text-align:left;">function</td><td style="text-align:left;">获取推荐列表</td></tr></tbody></table><h2 id="recommend-replace-hook" tabindex="-1">recommend_replace_hook <a class="header-anchor" href="#recommend-replace-hook" aria-label="Permalink to &quot;recommend_replace_hook&quot;">​</a></h2><p>替换原有的首页推荐区域</p><h4 id="支持平台-8" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-8" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-10" tabindex="-1">参数 <a class="header-anchor" href="#参数-10" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./common_props.html">通用参数</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">recommends</td><td style="text-align:left;">array</td><td style="text-align:left;">推荐列表</td></tr><tr><td style="text-align:left;">onGetRecommends</td><td style="text-align:left;">function():array</td><td style="text-align:left;">获取推荐列表</td></tr></tbody></table><h2 id="qrcode-replace-hook" tabindex="-1">qrcode_replace_hook <a class="header-anchor" href="#qrcode-replace-hook" aria-label="Permalink to &quot;qrcode_replace_hook&quot;">​</a></h2><p>替换原有的首页二维码区域</p><h4 id="支持平台-9" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-9" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-11" tabindex="-1">参数 <a class="header-anchor" href="#参数-11" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./common_props.html">通用参数</a></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">url</td><td style="text-align:left;">string</td><td style="text-align:left;">站点链接</td></tr></tbody></table><h2 id="copyright-replace-hook" tabindex="-1">copyright_replace_hook <a class="header-anchor" href="#copyright-replace-hook" aria-label="Permalink to &quot;copyright_replace_hook&quot;">​</a></h2><p>替换原有的首页备案号区域</p><h4 id="支持平台-10" tabindex="-1">支持平台 <a class="header-anchor" href="#支持平台-10" aria-label="Permalink to &quot;支持平台&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:center;">是否支持</th></tr></thead><tbody><tr><td style="text-align:left;">PC</td><td style="text-align:center;">√</td></tr></tbody></table><h4 id="参数-12" tabindex="-1">参数 <a class="header-anchor" href="#参数-12" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p><a href="./common_props.html">通用参数</a></p><blockquote><p>相关版权信息可在通用参数中的<code>siteData.webConfig.setSite</code>中获取</p></blockquote>',85),i=[n];function h(s,c,x,y,f,g){return a(),e("div",null,i)}const u=t(o,[["render",h]]);export{p as __pageData,u as default};
