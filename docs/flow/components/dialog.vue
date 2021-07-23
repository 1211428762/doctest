<template>
  <transition
    name="fl-dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      class="fl-dialog"
      role="dialog"
      :class="[{ flDialogFade: show,flDialogOverlay:showOverlay }]"
      v-show="show"
      @click.self="close"
    
    >
      {{ clickOverlayClose }}
      <section class="fl-dialog-content" :style="{ width }">
        <header class="fl-dialog-header">
          <slot name="header">标题</slot>
          <span v-if="closeIcon" @click="close" class="fl-dialog-close">×</span>
        </header>
        <div class="fl-dialog-body">
          <slot />
        </div>
        <footer class="fl-dialog-footer">
          <slot name="footer">
            <div class="fl-dialog-footer_button">
              <fbutton plain @click="close">取消</fbutton>
              <fbutton @click="close">确定</fbutton>
            </div>
          </slot>
        </footer>
      </section>
    </div>
  </transition>
</template>

<script>
import fbutton from "./button.vue";
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    show: Boolean,
    width: {
      type: String,
      default: "400px",
    },
    clickOverlayClose: {
      type: Boolean,
      default: true,
    },
    closeIcon: {
      type: Boolean,
      default: true,
    },
    showOverlay: {
      type: Boolean,
      default: true,
    },
  },
  components: { fbutton },
  watch: {
    // show(val) {
    //   this.$emit("update:show", val);
    // },
  },
  mounted() {},
  methods: {
    close() {
      console.log(this.clickOverlayClose);
      if (!this.clickOverlayClose) return;
      this.$emit("update:show", false);
    },
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    },
  },
};
</script>

<style lang='scss' >
.fl-dialog-fade-enter-active,
.fl-dialog-fade-leave-active {
  transition: transform 0.2s, opacity 0.6s;
}
.fl-dialog-fade-enter,
.fl-dialog-fade-leave-to {
  opacity: 0;
  .fl-dialog-content {
    transform: translate(-50%, calc(-50% - 30px));
  }
}

.fl-dialog {
  position: fixed;
  z-index: 2000;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
}
.flDialogOverlay{
background: rgba(0,0,0,.6);
}


.fl-dialog-content {
  position: relative;
  left: 50%;
  top: 40%;
  transition: all 0.5s;
  transform: translate(-50%, -50%);
  background: white;
  // height: 400px;
  border-radius: 5px;
  display: inline-flex;
  flex-flow: column;
  .fl-dialog-header,
  .fl-dialog-body,
  .fl-dialog-footer {
    position: relative;
    padding: 16px 20px;
  }
  .fl-dialog-close {
    position: absolute;
    right: 20px;
    color: #999;
    font-size: 20px;
    top: 16px;
    line-height: 1;
    cursor: pointer;
  }
   .fl-dialog-footer {
     display: flex;
     justify-content: flex-end;
   }
}
</style>