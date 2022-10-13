<template>
  <el-tag v-bind="$attrs">{{ props.noModel }}</el-tag>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';

export default defineComponent({
  name: 'tab-tag',
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
    noModel: {
      type: String,
    },
  },
});
</script>
