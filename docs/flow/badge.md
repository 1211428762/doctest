<template>
  <div>
    <badge isDot overlap :value="99"><fbutton>数据</fbutton></badge>
    <badge isDot overlap left :value="99"><fbutton>数据</fbutton></badge>
    <badge isDot overlap bottom :value="99"><fbutton>数据</fbutton></badge>
    <badge isDot overlap left bottom :value="99"><fbutton>数据</fbutton></badge>
    <badge :value="99"><fbutton>数据</fbutton></badge>
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

<style lang='scss' scoped>
</style>