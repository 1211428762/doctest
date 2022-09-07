<template>
  <div class="flowChart-panel-left">
    <el-form class="link-base-style-form" ref="linkBaseStyle" @submit.prevent :model="transfer" label-position="left">
      <h4 class="line-style">连线样式修改</h4>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="color">
            <el-color-picker v-model="transfer.color"> </el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="hover">
            <el-color-picker v-model="transfer.hover"> </el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="dotted">
            <el-switch v-model="transfer.dotted" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="panelModeChange">
      <el-radio-group v-model="MovePalette">
        <el-radio-button label="0">画板绘制</el-radio-button>
        <el-radio-button label="1">移动画板</el-radio-button>
      </el-radio-group>
    </div>
    <div class="node-container" v-if="!isView">
      <span
        :class="['node-item', MovePalette == 1 ? 'negativeEv' : '']"
        v-for="(item, index) in nodeItemList"
        @mousedown="(evt) => nodeItemMouseDown(evt, item)"
        :key="index++"
      >
        <!-- 暂时不启用图标 -->
        <!-- <icon-tag :iconType="item.meta.type"></icon-tag> -->
        {{ item.meta.label }}
      </span>
    </div>
  </div>
</template>

<script>
import iconTag from './iconTag.vue'

export default {
  name: 'flow-chat-panelLeft',
  props: {
    linkBaseStyle: {
      type: Object,
    },
    nodeItemList: Array,
    isView: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    iconTag,
  },
  data() {
    return {
      //   中间件,接受linkBaseStyle
      transfer: {},
      //   是否移动画板
      MovePalette: 0,
    }
  },
  created() {
    this.transfer = this.linkBaseStyle
  },
  watch: {
    MovePalette(val) {
      this.$emit('update:MovePalette', val)
    },
  },
  methods: {
    nodeItemMouseDown(evt, item) {
      this.$emit('node-mouse-down', evt, item)
    },
  },
}
</script>

<style lang="scss" scoped>
.flowChart-panel-left {
  width: 320px;
  padding: 0 10px;
  // margin: 0 30px;
  .line-style {
    margin: 10px 0;
  }
}
.link-base-style-form {
  .el-form-item {
    margin-bottom: 0;
  }

  padding-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
}
.panelModeChange ::v-deep(.el-radio-group) {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  user-select: none;
}
.node-container {
  // display: flex;
  // justify-content: space-around;
  // flex-wrap: wrap;
}
.node-item {
  $node-item-height: 30px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  height: $node-item-height;
  width: 70px;
  margin-top: 20px;
  background-color: #ffffff;
  line-height: $node-item-height;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
  text-align: center;
  margin-left: 10%;
  z-index: 6;

  &.negativeEv {
    pointer-events: none;
  }

  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  }
}
</style>
