---
title: 快速上手
index: false
icon: strong
category:
  - 实战
---

::: danger
如果本地 Node 版本 低于 16，将无法运行该文档.请升级到 16 以上，软件市场目前已有安装包
:::

### 案例演示

了解文档开发前，我们先看看 vue 和 markdown 语法的结合案例
<RouterLink to="./demo/demo-router">效果演示 GO-></RouterLink>

### 案例剖析

案例包含了，项目配置路由以及开发中常用场景 vue 模版变量、事件绑定、css 样式、静态资源访问、多语言示例

1. 路由配置 参考[路由配置](#路由配置)

```js
      '/doc-guide': [
        {
          text: '直接上手'，
          link: '/doc-guide/'，
        }，
        {
          text: 'Demo'，       //菜单名称
          link: '/doc-guide/demo/demo-router'，  //菜单链接
        }，
      ]，
```

2. 案例内容(vue 文件)

在 当前菜单文件下 (如当前菜单为 /doc-guide 下)找到，<b>z-install.js</b>文件，注册 案例组件。案例 vue 主要负责渲染 vue 逻辑

```js
import DemoRouter from './demo/demo-router.vue'

export default {
  install(app) {
    app.component('DemoRouter'， DemoRouter)
  }，
}
```

案例 vue 部分代码如下
::: details {{$t("viewCode")}}

```vue
<template>
  <el-button class="test-el-button" @click="append"> {{ msg }}</el-button>
  <!-- 事件与模板语法 -->
  <el-button class="test-el-button" @click="boxs = 0">{{ t('reset') }}</el-button>
  <!-- 多语言示例， $t已全局注册，$t()也可以 -->
  <hr />
  <div class="test-append-box" v-for="item in boxs" :key="item"></div>
</template>
<!-- 简单模块推荐使用setup  SFC风格-->
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const msg = t('add')
let boxs = ref(0)
const append = () => (boxs.value += 1)
</script>

<style lang="scss" scoped>
.test-el-button {
  margin-top: 20px;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(2turn) translateX(70px);
  }
}
.test-append-box {
  opacity: 0;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 30px 10px;
  animation: appear 2s forwards;
  background-image: linear-gradient(35deg， deepskyblue， plum);
}
.test-append-box:nth-of-type(odd) {
  background-image: linear-gradient(35deg， deepskyblue， plum);
}
.test-append-box:nth-of-type(even) {
  background: url('/img/star.svg');
  background-size: cover;
}
</style>
```

:::

3.文档内容(md 文件)

在案例 vue 同级下，新增同名且格式为 md 的文件， 文档内容则主要放 用于展示代码块以及说明文本

```md
## Demo

### Demo Catalog

│ README.md
│ start.md
│ z-install.js
│
└─demo
demo-router.md
demo-router.vue

下面是在 md 文件使用 vue 组件， 前提是已经在相应模块下的 z-install.js 注册了
<demo-router/>
```

### 路由配置

vuepress 中路由，菜单配置主要在 <b>/.vuepress/navbar，/.vuepress/sidebar </b>下，
开发时主要配置 navbar(顶部导航菜单)， sidebar(左侧菜单)

#### navbar 导航菜单

`/.vuepress/navbar/zh.ts`

```js
[
  {
    text: '首页'， //text为 菜单显示的文本
    link: '/'， //link 对应文件路径， sidebar配置项相同
    icon: 'note'， //icon 为菜单图标， 可选
  }，
  {
    text: ''，
   children:[
     {text:""，link:"/guide/start/process"} //头部导航下拉菜单子项
   ]
  }，
]，
```

#### sidebar 左侧菜单

`/.vuepress/sidebar/zh.ts`

```js
{
     '/doc-guide': [
    // 参与维护左侧菜单
    {
      text: '直接上手'，
      link: '/doc-guide/'，
    },
    {
      text: 'Demo'，
      link: '/doc-guide/demo/demo-router'，
    },
   ],
    '/guide': [
      // 开发攻略左侧菜单
      {
       text: '开始',
       collapsable: true, //是否可以折叠
       //link:"guide/start/process"    //当有二级菜单时, 可选配置项,值为 二级菜单第一个菜单项url, 这样点击父级菜单,自动定向到子菜单第一个 , 如若不配该项, 父菜单不可以点击
       icon:'note',  //菜单图标
       children: [
        { text: '', link: '/guide/start/process' }, //二级菜单,子项为数组对象,包含text,link属性
       ],
      },
      // 新增菜单在这里加
    ],
}
```

以上配置即可生成菜单，想要新增模块，按以上规则新增一条属性即可

### 静态资源

静态资源均放在`public`下，在 md 文件访问静态资源:图片使用示例 `![alert text](/img/xxx.png)</b>` 或`<img src='/img/xxx.png' alert=''/>`，两种方式均可
