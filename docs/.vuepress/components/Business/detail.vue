<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      title="详情"
      :visible.sync="visible"
    >
      <FormList
        :formData="form"
        ref="formList"
        :fieldList="formItem"
        label-width="120px"
        exhibit
        @cancel="close"
      >
        <template #testSlot="{ templateData }">
          <el-input v-model="templateData.testSlot"></el-input>
        </template>
        <!-- 输入框的Prefix 插槽 -->
        <template #testPrefix>
          <div>输入框的Prefix 插槽</div>
        </template>
        <!-- 输入框的Suffix 插槽 -->
        <template #testSuffix>
          <div>输入框的Suffix 插槽</div>
        </template>
        <!-- 原生el-form-item -->
        <template #testNativeSlot="{ templateData }">
          <el-form-item
            prop="testNativeSlot"
            label="原生插槽"
            :rules="[{ required: true }]"
          >
            <el-input v-model="templateData.testNativeSlot"></el-input>
          </el-form-item>
        </template>
      </FormList>
    </el-dialog>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  mixins: [mixin],

  methods: {
    init(id) {
      this.visible = true;
      this.$nextTick(() => {
        this.getDetail(id);
      });
    },
    close() {
     
      this.visible = false;
    },
  },
};
</script>
