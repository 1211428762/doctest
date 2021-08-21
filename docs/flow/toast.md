<template>
  <div>
    <h1>提示</h1>
    <fbutton @click="info">默认toast</fbutton>
    <fbutton @click="success">成功</fbutton>
    <fbutton @click="fail">失败</fbutton>
  </div>
</template>

<script>
import ftoast from "./components/toast";
import fbutton from "./components/button";
export default {
  name: "f-toast",
  components: { ftoast, fbutton },
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  methods: {
    info() {
      this.$ftoast.info({
        message: "信息",
      });
    },
    success() {
      this.$ftoast.success({
        message: "成功",
      });
    },
    fail() {
      this.$ftoast.fail({
        message: "失败",
      });
    },
  },
};
</script>
 
 toast推荐挂载到全局

### 	Event

| 类型    | 参数                  | 参数解释                                                     | 描述     |
| ------- | --------------------- | ------------------------------------------------------------ | -------- |
| info    | message,duration,html | message为文字描述<br />duration为显示时间,默认2s<br />html接受html模版字符串效果同slot | 标准提示 |
| success | 同info                |                                                              | 成功提示 |
| fail    | 同info                |                                                              | 失败提示 |
::: details 查看代码
```vue
<template>
  <div>
    <fbutton @click="info">默认toast</fbutton>
    <fbutton @click="success">成功</fbutton>
    <fbutton @click="fail">失败</fbutton>
  </div>
</template>
<script>
export default {
  methods: {
    info() {
      this.$ftoast.info({
        message: "信息",
      });
    },
    success() {
      this.$ftoast.success({
        message: "成功",
      });
    },
    fail() {
      this.$ftoast.fail({
        message: "失败",
      });
    },
  },
};
</script>

```
::: 






