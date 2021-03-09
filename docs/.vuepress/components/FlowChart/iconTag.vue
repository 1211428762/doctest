<template>
  <div class="iconTag">
    <i name="task" class="el-icon-s-tools" v-if="iconType == 'task'"></i>
    <i
      name="finish"
      class="el-icon-circle-check"
      v-if="iconType == 'finish'"
    ></i>
    <i name="start" class="el-icon-video-play" v-if="iconType == 'start'"></i>
    <i name="end" class="el-icon-switch-button" v-if="iconType == 'end'"></i>
    <i name="default" class="el-icon-menu" v-if="iconType == 'default'"></i>
  </div>
</template>

<script>
export default {
  // 存放左侧流程块图标
  name: 'iconTag',
  props: {
    iconType: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="scss" scoped>
.iconTag {
  display: inline-block;
  margin: 0 5px;
  user-select: none;
}
</style>
