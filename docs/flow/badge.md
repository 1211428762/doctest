<template>
  <div>
  <h1>徽标</h1>
    <badge isDot  :value="99"><fbutton>默认</fbutton></badge>
    <badge isDot  left :value="99"><fbutton>左上</fbutton></badge>
    <badge isDot  bottom :value="99"><fbutton>右下</fbutton></badge>
    <badge isDot :overlap=false ><fbutton>不重叠</fbutton></badge>
    <badge :max="99" :value="200"><fbutton>数据</fbutton></badge>
  </div>
</template>

<script>
import badge from "./components/badge";
import fbutton from "./components/button";
export default {
  name: "",
  components: { badge, fbutton },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>


### Attributes

| 属性    | 说明                      | 类型          | 可选值(默认值) |
| ------- | ------------------------- | ------------- | -------------- |
| value   | 徽标值,可输入数字.文本    | number/string |                |
| max     | 最大值, value为number生效 | number        |                |
| isDot   | 是否以点显示              | boolean       | false          |
| left    | 徽标左边显示(默认在右)    | boolean       | false          |
| bottom  | 徽标在下边显示            | boolean       | false          |
| overlap | 是否重叠                  | boolean       | true           |

::: details 查看代码
```vue
<template>
    <badge isDot  :value="99"><fbutton>默认</fbutton></badge> 
    <badge isDot  left :value="99"><fbutton>左上</fbutton></badge>
    <badge isDot  bottom :value="99"><fbutton>右下</fbutton></badge>
    <badge isDot :overlap=false ><fbutton>不重叠</fbutton></badge>
    <badge :max="99" :value="200"><fbutton>数据</fbutton></badge>
</template>
```
::: 