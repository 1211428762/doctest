test
#### 1.formList示例


<FormList-index     ref="formList"　:fieldList="formItem">
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
      </template>
</FormList-index>

<script>

export default {

  data() {
    return {
      // form: {
      //   test: "",
      //   testSlot: "",
      //   testNativeSlot: "",
      // },
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        addBtnList: {
        property: {
          label: "操作",
        }, 
        button: [
          {
            info: "编辑", // 文字
            method: "edit", // 方法名
            icon: "el-icon-edit", // icon，支持element-ui icon
            // type: "primary", // element-ui button type属性
            iconColor: "red", // icon颜色
            fontColor: "green", // 字体颜色
          },
          {
            info: "删除",
            method: "del",
          },
        ],
      },
      tableHead: [
        { prop: "col1", label: "第一列", width: "200" },
        { prop: "col2", label: "第二列", width: "200" },
        { prop: "col3", label: "第三列", width: "200" },
      ],
      tableData: [
        {
          col1: "col1",
          col2: "col2",
          col3: "col3",
        },
        {
          col1: "col11",
          col2: "col22",
          col3: "col33",
        },
        {
          col1: "col13",
          col2: "col23",
          col3: "col33",
        },
      ],
    
      elForm: null, //表单组件表格 示例, 方便调用 resetField 等方法
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
          type: "switch",
          label: "测试switch",
          prop: "testSwitch",
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
  created() {
    // 异步的select
    this.formItem.filter((cur) => {
      if (cur.prop === "ayncSelect") {
        // cur.list=[]  等于对应值
      }
    });
  },
  methods: {
    onSubmit() {
        console.log('submit!');
      },
    clickEvt(type,row,index){
      console.log(type,row,index);
    },
    submit() {
      //传入回调函数 ,参数是 表单的值
      //比如 表单校验成功, 要做些什么 ,
      let doSomeThing = (form) => {
        //这里可以拿到form,虽然代码在子组件执行, 但this仍指向父组件的实例
        console.log(form, this.formItem);
      };
      // 上个版本,校验成功 ,formList 组件 会向 父组件发出 成功的回调 get-form,需要多定义一个函数去接,繁琐
      this.$refs.formList.submitForm(doSomeThing);
    },
    handleEvent(type, val, key) {
      switch (
        type
        // xxxx
      ) {
      }
    },
  },
};
</script>




