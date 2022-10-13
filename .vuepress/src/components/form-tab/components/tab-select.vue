<template>
  <el-select
    v-bind="{ ...config, ...$attrs }"
    :placeholder="$t('select_placeholder')"
    clearable
    filterable
  >
    <el-option
      v-for="(item, index) in props.config.options"
      :key="index"
      :value="item.value ?? item.dictValue"
      :label="t((item.label ?? item.dictLabel) || '')"
      :disabled="item.disabled"
    ></el-option>
  </el-select>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'tab-select',
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
