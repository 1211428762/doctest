<template>
  <div class="viewport" ref="viewport">
    <slot></slot>
  </div>
</template>

<script>
import { addClass, removeClass } from "../utils/class";
export default {
  name: "viewport11",
  data() {
    return {};
  },
  props: {
    element: [Object, Array],
    direction: {
      type: String,
      default: "bottom",
      validator: function (value) {
        return ["left", "bottom", "right", "free"].indexOf(value) !== -1;
      },
    },
  },
  components: {},
  mounted() {
 
    let ele = this.element ? [] : this.$refs.viewport.children;
    let animeDir = {
      left: "fadeLeft",
      right: "fadeRight",
      bottom: "fadeTop",
      free: "left-right-in",
    };
    Array.from(ele, (ele) => addClass(ele, animeDir[this.direction]));
    // this.isViewport(ele, animeDir[this.direction]);
    this.isViewport(ele);
  },
  methods: {
    isViewport(ele, className = "fadeIn") {
      let io = new IntersectionObserver(
        (entries) => {
          entries.forEach((ele) => {
            if (ele.isIntersecting) {
              //如果进入视窗  xxxx
              addClass(ele.target, className);
            } else {
              removeClass(ele.target, className);
            }
          });
        },
        { threshold: 1 } //元素进入视窗百分比
      );

      Array.from(ele || [], (ele) => io.observe(ele));
      this.$once("hook:beforeDestroy", () => {
        Array.from(ele || [], (ele) => io.unobserve(ele));
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.viewport {
  & > div,
  & > section {
    transition: 0 !important;
    // transition-delay: 0.2s;
  }
  .fadeTop {
    transform: translateY(99%) scale(1);
    opacity: .01;
    transition: .5s all;
  }
  .fadeLeft {
    transform: translateX(99%) scale(1);
    opacity: .01;  transition: .5s all;
  }
  .fadeRight {
    transform: translateX(-99%) scale(1);
    opacity: .01;  transition: .5s all;
  }

  .left-right-in {
    opacity: .01;  transition: .5s all;
    &:nth-of-type(odd) {
      transform: translateX(-99%);
    }
    &:nth-of-type(even) {
      transform: translateX(99%);
    }
  }
  .fadeIn {
    transform: translate3d(0, 0, 0) scale(1) skew(0deg) rotate(0deg) !important;
    opacity: 1 !important;
  }
}
</style>