<template>
  <el-upload
    class="tab-upload-excel-upload"
    :multiple="config.multiple"
    :show-file-list="config.showFileList"
    :auto-upload="false"
    :on-change="fileChange"
  >
    <el-button size="small" type="primary">
      {{ $t('client.upload') }}
    </el-button>
  </el-upload>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'tab-file',
  emits: ['file-list'],
  props: {
    config: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const fileChange = (file) => {
      emit('update:modelValue', file.raw);
    };
    return {
      fileChange,
    };
  },
});
</script>
<style scoped>
.tab-upload-excel-upload {
  margin-bottom: 20px;
}
.tab-upload-excel-upload > a {
  margin-left: 20px;
}
</style>
