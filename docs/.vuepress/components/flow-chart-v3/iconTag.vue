<template>
  <div class="iconTag iconfont" :class="icon" v-if="icon"></div>
</template>

<script>
export default {
  // 存放左侧流程块图标
  name: 'iconTag',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.iconTag {
  display: inline-block;
  margin: 0 5px;
  user-select: none;
  font-size: 13px;
}
</style>
