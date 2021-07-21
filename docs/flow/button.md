<template>
  <div>
  <h1>按钮组</h1>
    <fButton @click="clickEvt">primary</fButton>
    <fButton type="danger">danger</fButton>
    <fButton plain>plain</fButton>
    <fButton type="danger" plain>danger</fButton>
    <fButton disabled>disabled</fButton>
    <fButton type="danger" disabled>danger</fButton>

  </div>
</template>

<script>

import fButton from "./components/button.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { fButton },
  mounted() {},
  methods: {
    clickEvt(evt) {
      console.log("clickEvt-------",evt);
    },
  },
};
</script>


### Attributes

| 属性     | 类型    | 可选值(默认值)           |
| -------- | ------- | ------------------------ |
| plain    | boolean | false                    |
| disabled | boolean | false                    |
| type     | string  | (primary,danger)/primary |

### Event

| 名称  | 描述     |
| ----- | -------- |
| click | 点击事件 |

::: details 查看代码
```vue
<template>
  <div>
    <fButton @click="clickEvt">primary</fButton>
    <fButton type="danger">danger</fButton>
    <fButton plain>plain</fButton>
    <fButton type="danger" plain>danger</fButton>
    <fButton disabled>disabled</fButton>
    <fButton type="danger" disabled>danger</fButton>
 <viewport/>
  </div>
</template>

```
::: 