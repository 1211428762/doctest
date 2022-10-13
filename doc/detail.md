---
title: 了解更多
index: false
icon: strong
category:
  - 实战
---

### 链接

对于内部链接以及外部链接，以下为使用示例，两种方式均可

```js
[内部链接](../guide/)   //建议使用相对路径
[外部链接](https://www.google.com)
<RouterLink to="../guide/">内部链接</RouterLink>  如果使用多语言推荐以下写法，可以使用vue语法
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">外部链接</a> 推荐
```

[内部链接](../guide/)
[外部链接](https://www.google.com)

### 内置组件

自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

<!-- 代码块 -->

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```

Code-Tabs
::: code-tabs

@tab A

```js
const foo = 'foo'
```

@tab B

```js
const bar = 'bar'
```

:::

````md
::: code-tabs

@tab A

```js
const foo = 'foo'
```

@tab B

```js
const bar = 'bar'
```

:::
````

::: warning
目前 code-tabs 下面的 涉及 html 标签的代码块(vue，react，jsx，html)解析会 漏掉 "</"， 建议将此类代码块， 语言类型设置为"js"
:::

<!-- Code Group 旧版代码块， code-tabs

Code Group
:::: code-group
::: code-group-item A

```js
const foo = 'foo'
```

:::
::: code-group-item B

```js
const bar = 'bar'
```

:::
::::

````md
:::: code-group
::: code-group-item A

```js
const foo = 'foo'
```

:::
::: code-group-item B

```js
const bar = 'bar'
```

:::
::::
````
-->

### emoji

如想文本中添加 emoji，可以点击链接，挑选相应的[emoji 参考](https://github.com/ikatyang/emoji-cheat-sheet)

:grinning: `:grinning:` ;:laughing: `:laughing:`

### 图标

如想在文本中添加 图标 ，可以点击链接，挑选相应的[图标 参考](https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html)

<i class ='icon-define iconfont'></i> `<i class ='icon-define iconfont'></i>`; <i class="icon-light iconfont"></i> ` <i class="icon-light iconfont"></i>`

### 目录

基本项目结构图(/doc)

```tree
│  README.md             home 页内容
│
├─.vuepress             项目主要物料文件
│  │  client.ts            与常规vue项目main.js文件相同
│  │  config.ts             包含打包配置，多语言功能，插件配置，vuepress配置文件
│  │  theme.ts            文档主题配置
│  │
│  ├─sidebar             左侧菜单配置文件，含多语言
│  │  ├─en.ts             英文左侧菜单配置
│  │  ├─zh.ts             中文左侧菜单配置
│  │  └─index.ts          左侧菜单配置入口文件
│  ├─navbar             导航菜单配置文件，含多语言
│  │  ├─en.ts             英文导航菜单配置
│  │  ├─zh.ts             中文导航菜单配置
│  │  └─index.ts          导航菜单配置入口文件
│  ├─.cache             文档项目本地缓存文件，主要内容为js依赖文件.初次运行时，自动生成
│  ├─.temp             文档项目本地缓存文件， 可以理解为本地运行的 ./dist文件，  这两者均已配置gitignore.如果缓存错误时，可以删除这两个文件，重新运行
│  ├─public             静态资源文件，与Aceup项目用法相同
│  │  ├─img             静态图片
│  │  └─plugin             主要存放需要下载的文件
│  │          app-score.xlsx
│  ├─src             复刻Aceup项目文件，与原项目不同，常规开发不在该文件夹下.该文件别名仍为 @/
│  │  │  global.js
│  │  ├─components
│  │  ├─constants
│  │  ├─i18n
│  │  │  ├─lang
│  │  │  └─page             该文件包含项目内所有模块的多语言
│  │  │
│  │  ├─inspiration             用于存放未来的页面特效(开发中)
│  │  ├─types
│  │  └─utils
│  │
│  └─styles             项目全局样式
│
├─doc-guide
│  │  README.md             菜单"参与维护"的对应文件，路由配置自动匹配文件下的 README.md文件，效果等同文件下的index.vue
│  │  z-install.js             用于全局注册菜单下的vue组件
│  │
│  └─demo             案例模块结构，新增菜单(若包含vue组件的)文件格式参考该目录
│          demo-router.md
│          demo-router.vue
│
└─guide             菜单"组件"对应文件.新增菜单(若只有文档描述的)文件格式参考该目录
    │  first.md
    │  git.md
    │  menu.md
    │  noun.md              系统内名词解析文档
    │  README.md
    │  z-install.js
    │
    ├─list
    │      list-common.md
    │      list-common.vue
```

在 vuepress 项目中<b>约定大于配置</b>，实际编译也是按照相关文件目录约束
