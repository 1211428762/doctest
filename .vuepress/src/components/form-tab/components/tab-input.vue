<template>
  <el-input v-bind="{ ...config, ...$attrs }">
    <template #append v-if="config.append">{{ config.append }}</template></el-input
  >
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';

export default defineComponent({
  name: 'tab-input',
  inheritAttrs: false,
  emits: ['change'],
  setup(props) {
    return {
      props,
    };
  },
  props: {
    config: {
      type: Object as PropType<FormConfig>,
      required: true,
    },
  },
});
</script>
