# el-form业务表单组件

## **写在前面**

​    	 　鉴于一直clr cv, 让代码变得冗杂不堪,再次维护代码又是一年黑线,适当造一些轻小的轮子,让我们"搬砖"更开心.该组件完全基于ele + vue 2.x 

　　　将 重复的`<el-form>　<el-form-item>`标签送走. 由此诞生了 FormList


# 常用示例

### input案例

<FormList-index 　:fieldList="input" :footer="false"></FormList-index>
::: details

 ```vue
 <template>
    <div>
      <FormList-index 　:fieldList="formItem" :footer="false"></FormList-index>
    </div>
  </template>
  <script>
  export default {
    data() {
        return{
      formItem: [{ type: "input", label: "输入框", rules: [{ required: true }] }]
        }
    }
  };
  </script>
 ```
:::

### select案例
<FormList-index 　:fieldList="select" :footer="false"></FormList-index>
::: details
 ```vue
 <template>
    <div>
      <FormList-index 　:fieldList="formItem" :footer="false"></FormList-index>
    </div>
  </template>
  <script>
  export default {
    data() {
        return{
          formItem: [
            {
          type: "select",
          label: "下拉框",
          list: [
            {
              label: "选项一",
              value: 1,
            },
            {
              label: "选项二",
              value: 2,
            },
          ],
          multiple: true, // 多选,select组件 其他属性也可以,详情见ele
        },
      ],
        }
    }
  };
  </script>
 ```
:::

### radio案例

<FormList-index 　:fieldList="radio" :footer="false"></FormList-index>

<script>
export default {
  data() {
    return {
      input: [
        {
          type: "input",
          label: "输入框",
          rules: [{ required: true }],
        },
      ],
      select: [
        {
          type: "select",
          label: "下拉框",
          list: [
            {
              label: "选项一",
              value: 1,
            },
            {
              label: "选项二",
              value: 2,
            },
          ],
          multiple: true, // 多选,select组件 其他属性也可以,详情见ele
        },
      ],
      radio: [
      {
        type: "radio",
        list: [
          { value: 0, label: "选项一" },
          { value: 1, label: "选项二" },
        ],
      },
    ],
    };
  },
};
</script>
[查看完整示例](./complete/)