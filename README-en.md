# Discuz! Q Plugin Development documentation

[简体中文](./README.md) | English

Due to the discontinuation of the Discuz! Q program by the Tencent team in early 2022 and its transfer to the open source community for maintenance, its official website and [plugin development documentation](https://developer.discuz.chat/#/plugin/start) have been inaccessible. Now I have migrated the original documentation to Github so that everyone can continue to view it.

Due to some reasons, the original team of Discuz! has reclaimed the Discuz! Q project and decided to continue to maintain the Discuz! Q project in the future. Welcome developers to develop some convenient plugins to give back to the community

This document mainly contains the content of the original document. Discuz! Q plugin developers can continue to review and improve this document.

## Contents
 - [Getting Started](./start/)
   - [Introduction](./start/start.md)
   - [Initializing Plugins](./start/init.md)
   - [Directory Norms](./start/dir.md)
   - [Plugin Configuration](./start/config.md)
   - [Building Plugins](./start/build.md)
   - [Loading Plugins](./start/import.md)
   - [Local Development](./start/develop.md)
 - [Plugin Component Development](./components/)
   - [Plugin Architecture](./components/architecture.md)
   - [Plugin Entry Files](./components/entry.md)
   - [Multi-Platform Adapters](./components/adapter.md)
   - [Plugin Data Storage](./components/store.md)
   - [Plugin Data Communication](./components/connect.md)
   - [Starting to Develop a Plugin](./components/sample.md)
   - [Page Plugin Development](./components/page_plugin.md)
 - [Plugin API Development](./apis/)
   - [Introduction to Backend Plugins](./apis/be_start.md)
   - [Starting to Develop a Plugin](./apis/be_semple.md)
 - [Page Identifier List](./hooks/)
   - [Common Properties](./hooks/common_props.md)
   - [Hook Development](./hooks/hook_develop.md)
   - [Global Hook List](./hooks/plugin_system_hooks.md)
   - [Common Hook List](./hooks/plugin_global_hooks.md)
   - [Homepage Hook List](./hooks/plugin_index_hooks.md)
   - [Post Detail Page Hook List](./hooks/plugin_detail_hooks.md)
   - [Posting Page Hook List](./hooks/plugin_post_hooks.md)
   - [User Center Hook List](./hooks/plugin_user_center_hooks.md)