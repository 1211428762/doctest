<template>
  <div>
    <FormList
      @handle-event="handleEvent"
      :elForm.sync="elForm"
      ref="formList"
      :fieldList="formItem"
    >
      <!-- 普通插槽 -->
      <!-- 原templateData写法, 现在不用在父组件定义,使用插槽即可, 用法与之前相同 -->
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

      <template #footer>
        <el-button @click="submit"> 提交 </el-button>
        <el-button @click="submit"> 返回 </el-button>
      </template>
    </FormList>
    <el-button @click="getSelect">获取异步数据</el-button>
  </div>
</template>
<script>
import FormList from "./index";
export default {
  components: {
    FormList,
  },
  data() {
    return {
      // form: {
      //   test: "",
      //   testSlot: "",
      //   testNativeSlot: "",
      // },
      elForm: {}, //表单组件表格 示例, 方便调用 resetField 等方法
      formItem: [
        {
          type: "input",
          label: "输入框",
          prop: "test",
          rules: [{ required: true }],
        },
        {
          type: "select",
          label: "下拉框",
          prop: "testSelect",
          list: [
            {
              label: "选项一",
              value: 1,
              disabled: false, //默认是false, 如果需要传true
            },
            {
              label: "选项二",
              value: 2,
              disabled: false, //默认是false, 如果需要传true
            },
          ],
          rules: [{ required: true }],
        },
        // TODO多个多选框时有bug,多个时, 可以使用插槽方式
        {
          type: "checkbox",
          prop: "testCheckbox",
          label: "测试多选框",
          list: [
            {
              label: "选项一",
            },
          ],
        },
        {
          type: "radio",
          label: "测试单选",
          prop: "testRadio",
          list: [
            {
              label: "选项一",
              value: 0,
            },
            {
              label: "选项二",
              value: 1,
            },
          ],
        },
        {
          type: "icon",
          label: "图标",
          prop: "testIcon",
        },
        {
          type: "date",
          label: "测试日期",
          prop: "testDate",
          // dateType:year/month/date/week/ datetime/datetimerange/daterange
        },
        {
          type: "slot",
          prop: "testSlot",
          label: "插槽",
          rules: [{ required: true }],
        },
        {
          type: "nativeSlot",
          prop: "testNativeSlot",
        },
        { type: "select", label: "异步下拉框", prop: "ayncSelect", list: [] },
      ],
    };
  },

  methods: {
    getSelect() {
      // 异步的select
      this.formItem.filter((cur) => {
        if (cur.prop === "ayncSelect") {
          cur.list = [
            {
              label: "选项一",
              value: 1,
            }, {
              label: "选项二",
              value: 2,
            },
          ];
        }
      });
    },
    submit() {
      this.$refs.formList.submitForm((form) => {
        // 通过表单校验后,执行, form为表单数据
        this.$message.success("控制台查看表单数据")
        console.log(form);
      });
    },
    handleEvent(type, val, key) {
      switch (type) {
      }
    },
  },
};
</script>
