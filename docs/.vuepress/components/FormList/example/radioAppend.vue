<template>
  <div>
    <el-card>
      <FormList
        :footer="false"
        :fieldList="formItem"
        @handle-event="handleEvent"
      >
        <template v-if="showSlot" #append="{ templateData }">
       
          <el-form-item label="年龄">
            <el-input v-model="templateData.age"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="templateData.sex">
              <el-radio label="0">男</el-radio>
              <el-radio label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </FormList>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSlot: false,
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
        this.showSlot = val === 0 ? false : true;
      }
    },
  },
};
</script>

<style>
</style>