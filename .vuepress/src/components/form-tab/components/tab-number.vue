<template>
  <el-input-number v-bind="$attrs"></el-input-number>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'tab-number',
  inheritAttrs: false,
  emits: ['change'],
  setup(props) {
    const { t } = useI18n();
    return {
      t,
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
