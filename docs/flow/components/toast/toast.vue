<template>
  <transition name="fl-toast">
    <div
      class="fl-toast"
      v-if="showToast"
      :key="type"
      :class="[type ? 'fl-toast-' + type : '']"
    >
      <section v-show="type == 'success'" class="fl-toast-hook-wrap">
        <div :class="{ 'fl-hook-hover': iconAnime }"></div>
      </section>
      <section
        v-show="type == 'fail'"
        :class="{ 'fl-fail-hover': iconAnime }"
        class="fl-toast-fail-wrap"
      ></section>
      <span class="fl-toast-msg">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "",
  // props: {
  //   show: Boolean,
  // },
  components: {},
  data() {
    return {
      showToast: false,
      type: "normal",
      message: "消息提示",
      duration: 2000,
      iconAnime: false,
      body: document.body,
    };
  },
  watch: {
    showToast(val) {
      if (val) {
        this.body.classList.add("f-body-unclick");
      } else {
        this.body.classList.remove("f-body-unclick");
      }
    },
  },
  methods: {
    info({ message = "信息", duration = 2000 }) {
      this.message = message;
      this.showToast = true;
      this.type = "normal";
      setTimeout(() => (this.showToast = false), duration);
    },
    success({ message = "成功", duration = 2000 }) {
      this.message = message;
      this.type = "success";
      this.showToast = true;
      setTimeout(() => {
        this.iconAnime = true;
      }, 300);
      setTimeout(() => {
        this.showToast = false;
        this.iconAnime = false;
      }, duration);
    },
    fail({ message = "失败", duration = 2000 }) {
      this.message = message;
      this.type = "fail";
      this.showToast = true;
      setTimeout(() => {
        this.iconAnime = true;
      }, 300);
      setTimeout(() => {
        this.showToast = false;
        this.iconAnime = false;
      }, duration);
    },
  },
};
</script>

<style lang='scss'>
.fl-toast-enter-active,
.fl-toast-leave-active {
  opacity: 1;
}
.fl-toast-enter,
.fl-toast-leave-to {
  opacity: 0;
}
.fl-toast {
  transition: all 0.5s;
  position: fixed;
  width: 150px;
  z-index: 2000;
  text-align: center;
  color: white;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.fl-toast-show {
  opacity: 1;
}
.fl-toast-hook-wrap {
  width: 80px;
}

.fl-toast-normal {
  height: 60px;
}
.fl-toast-success,
.fl-toast-fail {
  height: 150px;
  .fl-toast-hook-wrap,
  .fl-toast-msg {
    margin-top: 20px;
  }
  .fl-toast-hook-wrap > div {
    position: absolute;
    left: 20%;
    transform: rotate(-45deg);
    top: 30%;
    width: 60px;
    height: 30px;
    &::after {
      box-sizing: border-box;
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border: 3px solid transparent;
    }
  }
  .fl-toast-hook-wrap .fl-hook-hover {
    &::after {
      border-left-color: white;
      border-bottom-color: white;
      transition: height 0.2s ease-out, width 0.4s ease-out 0.2s;
      width: 50px;
      height: 25px;
    }
  }
}
.fl-toast-fail-wrap {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  position: relative;
}
.fl-toast-fail-wrap::before,
.fl-toast-fail-wrap::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 3px;
  background: white;
}

.fl-toast-fail-wrap::before {
  left: 0;
  transform: rotate(45deg) scaleX(0);
  transform-origin: left;
}
.fl-toast-fail-wrap::after {
  left: -16px;
  transform: rotate(-45deg) scaleX(0);
  transform-origin: right;
}
.fl-fail-hover::before {
  transition: transform 0.3s;
  transform: rotate(45deg) scaleX(1);
}
.fl-fail-hover::after {
  transition: transform 0.3s 0.15s;
  transform: rotate(-45deg) scaleX(1);
}
</style>
