<template>
  <div
    tabindex="-1"
    class="super-flow__node"
    :class="[{ 'can-move': nodeDrop }, getNodeType(node.meta.shape)]"
    :style="style"
    @mousedown.left.prevent="nodeMousedown"
    @mouseenter="nodeMouseenter"
    @mouseleave="nodeMouseleave"
    @mouseup="nodeMouseup"
    @contextmenu.prevent.stop="nodeContextmenu"
    @click.stop="nodeClick"
  >
    <slot :meta="node.meta"> </slot>

    <div
      v-for="(dir, key) in direction"
      v-show="output && lineDrop"
      :class="`node-side node-side-${key}`"
      @contextmenu.stop.prevent
      @mousedown.left.prevent.stop="(evt) => sideMousedown(evt, dir)"
      :key="key"
    ></div>
  </div>
</template>

<script>
import { direction } from './types'

import { getOffset, throttle, debounce, deepClone, localOrigin, NewCoordinate } from './utils'

export default {
  props: {
    graph: Object,
    node: Object,
    index: Number,
    isMove: Boolean,
    isTemEdge: Boolean,
    nodeIntercept: Function,
    lineDrop: Boolean,
    nodeDrop: Boolean,
    paletteSize: Array,
    origin: {
      type: Array,
      default: () => [0, 0],
    },
  },
  data() {
    return {
      isMovePale: false,
      nodeRootPosi: [],
      originForNode: [],
      direction,
      handler: true,
      output: this.nodeIntercept(),
    }
  },
  computed: {
    style() {
      return this.getNodePosition()
    },
  },
  mounted() {},
  methods: {
    getNodePosition() {
      const { position, width, height } = this.node

      // console.log(this.nodeRootPosi);
      // if (this.isMovePale) {
      //   position[0] += this.nodeRootPosi[0];
      //   position[1] += this.nodeRootPosi[1];
      // } else {
      //   // position[0] += this.origin[0];
      //   // position[1] += this.origin[1];
      //   // localOrigin()
      //   position[0] += localOrigin()[0];
      //   position[1] += localOrigin()[1];
      // }
      // console.log(position);
      // 限制坐标,防止块溢出画板
      // for (const x of position) {
      //   if (position[0] < 0) {
      //     position[0] = 0;
      //   } else if (position[0] > this.paletteSize[0] - 10) {
      //     position[0] = this.paletteSize[0] - 110;
      //   } else if (position[1] < 0) {
      //     position[1] = 0;
      //   } else if (position[1] > this.paletteSize[1] - 10) {
      //     position[1] = this.paletteSize[1] - 55;
      //   }
      // }
      // console.log(this.graph);
      return {
        width: `${width}px`,
        height: `${height}px`,
        top: `${position[1] * 1}px`,
        left: `${position[0] * 1}px`,
        transform: 'scale(1)',
      }
    },
    // 确定节点形状
    getNodeType(param = 'rect') {
      param = param || 'rect'
      return `node-${param}`
    },
    nodeMousedown(evt) {
      this.graph.toLastNode(this.index)
      this.$emit('node-mousedown', this.node, getOffset(evt))
    },

    nodeMouseenter(evt) {
      this.output = this.nodeIntercept()
      this.$emit('update:mouseonNode', this.node)
      // this.graph.mouseonNode = this.node;
      if (!this.isTemEdge) return
      this.$emit('node-mouseenter', evt, this.node, getOffset(evt, this.$el))
    },

    nodeMouseleave() {
      this.$emit('update:mouseonNode', null)
      // this.graph.mouseonNode = null;
      if (!this.isTemEdge) return
      this.$emit('node-mouseleave')
    },

    nodeMouseup() {
      // if (this.isMovePale) {
      //   this.nodeRootPosi = deepClone(this.origin);
      // }
      if (!this.isTemEdge) return
      this.$emit('node-mouseup')
    },

    nodeContextmenu(evt) {
      this.$emit('node-contextmenu', evt, this.node)
    },

    nodeClick(evt) {
      this.$emit('node-click', evt, this.node)
    },

    sideMousedown(evt) {
      this.$emit('side-mousedown', evt, this.node, getOffset(evt, this.$el))
    },
  },
}
</script>

<style lang="scss" scoped>
$width: 80px;
$height: 40px;
.super-flow__node {
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
  user-select: none;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid rgb(180, 180, 180);
  z-index: 1;
  outline: none;
  border-radius: 5px;
  font-size: 12px;
  &.can-move {
    cursor: move;
  }

  &-header {
    background-color: green;
  }
  &.node-ellipse {
    border-radius: 50%;
    width: $width !important;
    height: $height !important;
    line-height: $height;
  }
  &.node-rect {
    width: $width !important;
    height: $height !important;
    line-height: $height;
  }
  // &.node-diamond {
  //   width: 70px !important;
  //   height: 70px !important;
  //   transform: scale(1) rotate(45deg) !important;
  //   .flow-node {
  //     transform: rotate(-45deg);
  //     line-height: 70px;
  //   }
  // }

  // &.node-circle {
  //   width: 80px !important;
  //   height: 80px !important;
  //   border-radius: 50%;
  //   .flow-node {
  //     line-height: 80px;
  //   }
  // }
  // &-body {

  // }

  .node-side {
    $size: 10px;
    position: absolute;
    cursor: crosshair;

    &-top {
      top: -$size / 2;
      right: 0;
      left: 0;
      height: $size;
    }

    &-right {
      top: 0;
      right: -$size / 2;
      bottom: 0;
      width: $size;
    }

    &-bottom {
      right: 0;
      bottom: -$size / 2;
      left: 0;
      height: $size;
    }

    &-left {
      top: 0;
      bottom: 0;
      left: -$size / 2;
      width: $size;
    }
  }

  &:hover {
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.4);
  }

  &.isSelect {
    z-index: 2;
  }
}
</style>
