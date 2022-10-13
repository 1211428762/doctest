<template>
  <el-date-picker
    v-bind="$attrs"
    :range-separator="$t('range_separator')"
    :start-placeholder="$t('start_date')"
    :end-placeholder="$t('end_date')"
    clearable
  >
  </el-date-picker>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';

export default defineComponent({
  name: 'tab-date',
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
