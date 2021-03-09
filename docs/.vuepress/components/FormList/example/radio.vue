<template>
  <div>
    <el-divider></el-divider>
    <p>一般来说radio 分为:插入, 切换</p>
    <p>　插入:　 使用formList append插槽即可</p>
    <p>
      　切换: 　可以选择直接操作fieldList数组(考验数组知识),来实现切换. <br />
      　　　　　也可以实现就准备两套表单项数组(不易出错)
    </p>
    <el-divider></el-divider>
    <p>闲话少说, 直接切换案例:</p>
    <el-card>
      <FormList
        :footer="false"
        :fieldList="formItem"
        @handle-event="handleEvent"
      ></FormList
    ></el-card>
  </div>
</template>
<script>
export default {
  name: "radioEle",
  data() {
    return {
      formItem: [
        {
          type: "radio",
          label: "切换表单项",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "账号密码",
            },
            {
              value: 1,
              label: "年龄性别",
            },
          ],
        },
        {
          type: "input",
          label: "账号",
          prop: "account",
        },
        {
          type: "password",
          label: "密码",
          prop: "password",
        },
      ],
      formItemChange: [
        {
          type: "radio",
          label: "切换表单项",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "账号密码",
            },
            {
              value: 1,
              label: "年龄性别",
            },
          ],
        },
        {
          type: "input",
          label: "年龄",
          prop: "account",
        },
        {
          type: "radio",
          label: "性别",
          prop: "sex",
          list: [
            {
              label: "male",
              value: 0,
            },
            {
              label: "female",
              value: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleEvent(type, val, key) {
      switch (type) {
        case "radio":
          this.radioCase(val, key);
          break;
        default:
          break;
      }
    },
    radioCase(val, key) {
      if (key === "radio") {
        [this.formItem, this.formItemChange] = [
          this.formItemChange,
          this.formItem,
        ];
      }
    },
  },
};
</script>
