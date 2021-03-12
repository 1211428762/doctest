<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :title="form.id ? '修改' : '新增'"
      :visible.sync="visible"
    >
      <FormList
        :formData="form"
        :elForm.sync="elForm"
        ref="formList"
        :fieldList="formItem"
        label-width="120px"
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
        <template #footer="{ form }">
          <el-button @click="submit(form)">提交</el-button>
          <el-button @click="visible = false">取消</el-button>
        </template>
      </FormList>
    </el-dialog>
  </div>
</template>
<script>
import mixin from "./mixin";
export default {
  mixins: [mixin],
  data() {
    return {};
  },
  methods: {
    init(id) {
      id ? (this.form.id = id) : delete this.form.id;
      this.visible = true;
      this.$nextTick(() => {
        this.elForm.resetFields();
        id ? this.getDetail(id) : "";
      });
    },

    submit(form) {
      // 1.利用作用域插槽,可直接获取表单的值,手动校验
      this.elForm.validate((valid) => {
        if (valid) {
          this.form.id ? this.edit(form) : this.add(form);
        } else {
          return false;
        }
      });
      //2.也可以调用FormList组件内的提交函数
      this.refs.formList.submitForm((form) => {
        // form 参数为校验成功的结果,无需手动校验
      });
    },
    add(form) {
      // 上传接口
      console.log(form);
    },
    edit(form) {
      // 修改接口
      console.log(form);
    },
  },
};
</script>
