<template>
  <el-radio-group v-bind="$attrs">
    <el-radio
      v-for="(item, index) in config.options"
      :key="index"
      :value="item.value ?? item.dictValue"
      :label="item.value ?? item.dictValue"
    >
      {{ t(item.label ?? item.dictLabel) }}
    </el-radio>
  </el-radio-group>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'tab-radio',
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
