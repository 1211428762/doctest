<template>
  <div class="fl-badge">
    <slot></slot>
    <sup
      v-if="isDot"
      class="fl-badge-dot"
      :style="overlapPosition"
    ></sup>
    <sup v-else>{{ value }}</sup>
  </div>
</template>

<script>
export default {
  name: "fl-badge",
  props: {
    left: Boolean,
    bottom: Boolean,
    isDot: Boolean,
    value: [Number, String],
    max: Number,
    overlap: Boolean,
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    overlapPosition() {
      let position = "unset";
      if (this.bottom) {
        position = this.left
          ? `${this.overlap?'calc(100% - 6px) calc(100% - 6px) auto auto' :' 100% 100% auto auto'}`
          : `${this.overlap?'calc(100% - 6px)  auto auto calc(100% - 6px)' :' 100%  auto auto 100%'}`;
      } else {
        position = this.left
          ? `${this.overlap?'auto calc(100% - 6px) calc(100% - 6px)  auto' :' auto 100% 100%  auto'}` 
          : `${this.overlap?'auto auto calc(100% - 6px) calc(100% - 6px)  ' :' auto  auto 100% 100%  '}` 
      }
console.log(position);
      return {
        inset: position,
      };
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' >
.fl-badge {
  & + & {
    margin-left: 20px;
  }
  position: relative;
  display: inline-block;
  sup {
    position: absolute;
    display: inline-block;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    background: #ff5252;
    text-align: center;
    white-space: nowrap;
    top: -8px;
    right: -6px;
  }
  & &-dot {
    width: 10px;
    height: 10px;
    padding: 0;
  }
}
</style>