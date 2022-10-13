<template>
  <!-- TODO 需要组件初始化dataForm 给对应的key传空数组,不然报错 -->
  <el-checkbox-group v-bind="$attrs">
    <el-checkbox
      v-for="(item, index) in props.config.options"
      :key="index"
      :label="$t(item.value ?? item.dictValue)"
      :disabled="item.disabled"
      >{{ $t((item.label ?? item.dictLabel) || '') }}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormConfig } from '@/types/interface';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'tab-checkbox',
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
