<template>
  <div>
    <fbutton @click="info">默认toast</fbutton>
    <fbutton @click="success">成功</fbutton>
    <fbutton @click="fail">失败</fbutton>

  </div>
</template>

<script>
import ftoast from "./components/toast";
import fbutton from "./components/button";
export default {
  name: "",
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
        message: "信息"
      });
    },
    success() {
      this.$ftoast.success({
        message: "成功"
      });
    },
    fail() {
      this.$ftoast.fail({
        message: "失败"
      });
    },
  },
};
</script>

<style lang='scss' scoped>
</style>