<template>
  <button
    class="fl-btn"
    :disabled="disabled"
    @click="clickEvt"
    role="button"
    :class="[
      type ? 'fl-btn-' + type : '',
      { 'is-plain': plain, 'is-disabled': disabled },
    ]"
  >
    <slot>测试</slot>
  </button>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    type: String,
    plain: Boolean,
    disabled: Boolean,
  },
  
  mounted() {},
  methods: {
    clickEvt(evt){
   this.$emit('click', evt);
    }
  },
};
</script>

<style lang='scss' scoped>
</style>