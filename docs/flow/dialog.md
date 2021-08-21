<template>
  <div>
    <h1>弹窗</h1>
    <fButton @click="clickEvt">打开弹窗</fButton>
    <fDialog :show.sync="show"> 弹窗内容</fDialog>
  </div>
</template>

<script>
import fButton from "./components/button.vue";
import fDialog from "./components/dialog.vue";
export default {
  name: "",
  data() {
    return {
      show:false
    };
  },
  components: { fButton, fDialog },
  mounted() {},
  methods: {
    clickEvt(evt) {
      this.show=true
      console.log("clickEvt-------", evt);
    },
  },
};
</script>


### Attributes

| 属性              | 类型    | 可选值(默认值) | 描述               |
| ----------------- | ------- | -------------- | ------------------ |
| clickOverlayClose | boolean | true           | 点击遮罩层关闭弹窗 |
| closeIcon         | boolean | true           | 是否显示x关闭图标  |
| show              | boolean | false          | 控制dialog显隐     |
| showOverlay       | boolean | false          | 是否显示遮罩层     |
| width             | string  | 400px          | 弹窗宽度           |

### 	Event

| 名称   | 描述             |
| ------ | ---------------- |
| opened | 弹窗打开后的回调 |
| closed | 弹窗关闭后的回调 |

::: details 查看代码
```vue
<template>
  <div>
    <fButton @click="clickEvt">打开弹窗</fButton>
    <fDialog :show.sync="show"> 弹窗内容</fDialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:false
    };
  },
  methods: {
    clickEvt(evt) {
      this.show=true
    },
  },
};
</script>

```
::: 