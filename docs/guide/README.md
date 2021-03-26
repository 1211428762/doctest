# el-form业务表单,表格组件

## **写在前面**

​    	 　鉴于一直clr cv, 让代码变得冗杂不堪,再次维护代码又是一年黑线,适当造一些轻小的轮子,让我们"搬砖"更开心.该组件完全基于ele + vue 2.x 

　　　将 重复的`<el-form>　<el-form-item> <el-table> <el-table-column>`标签送走. 由此诞生了 FormList,TableList
　　　
<br>　　适用场景：中级以下的业务场景


# 常用示例

### input案例

<FormList-index 　:fieldList="input" :footer="false"></FormList-index>
::: details 查看代码

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
::: details 查看代码

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
                 type: "radio",
                  list: [
                         { value: 0, label: "选项一" },
                         { value: 1, label: "选项二" },
                          ],
                           },
                          ],
                         }
      }
  };
  </script>
 ```
:::

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
      totalCount: 4,
      curPage: 1,
      pageSize: 3,
      loading: true,
      tableHead: [
        {
          prop: "first", // 字段名
          label: "测试第一列",
          width: 150, // 列宽
          class: "text-center test", // 为列添加类名
        },
        {
          prop: "second",
          label: "测试第二列",
          width: 150,
          class: "text-center",
        },
      ],
      tableData: [
        {
          first: "程序猿",
          second: "程序猿女装",
        },
        {
          first: "格子衫",
          second: "百褶裙",
        },  {
          first: "五年单身,三年当狗",
          second: "草中✿,万人捧",
        }, {
          first: "地中海",
          second: "假发片",
        },
      ],
      addBtnList: {
        property: {
          width: 200, // 列宽
          label: "操作",
          class: "text-center test", // 为列添加类名
        },
        button: [
          {
            info: "编辑", // 文字
            method: "edit", // 方法名
            icon: "el-icon-edit", // icon，支持element-ui icon
            type: "primary", // element-ui button type属性
            iconColor: "#e4f9f5", // icon颜色
            fontColor: "#e4f9f5", // 字体颜色
          },
          {
            info: "删除",
            method: "delete",
          },
        ],
      },
    };
  },
  methods:{
    delete(item,id){
      console.log(item,id);
    }
  }
};
</script>

### 基础table案例
<br>
<TableList-index 
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :loading="false"
      showCheckbox></TableList-index>

::: details 查看代码

 ```vue
 <template>
    <div>
      <TableList 
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :loading="false"
      showCheckbox></TableList>
    </div>
  </template>
  <script>
  export default {
    data() {
        return{
          totalCount: 4,
      curPage: 1,
      pageSize: 3,
      loading: true,
      tableHead: [
        {
          prop: "first", // 字段名
          label: "测试第一列",
          width: 150, // 列宽
          class: "text-center test", // 为列添加类名
        },
        {
          prop: "second",
          label: "测试第二列",
          width: 150,
          class: "text-center",
        },
      ],
      tableData: [
        {
          first: "程序猿",
          second: "程序猿女装",
        },
        {
          first: "格子衫",
          second: "百褶裙",
        },  {
          first: "五年单身,三年当狗",
          second: "草中✿,万人捧",
        }, {
          first: "地中海",
          second: "假发片",
        },
      ],
      addBtnList: {
        property: {
          width: 200, // 列宽
          label: "操作",
          class: "text-center test", // 为列添加类名
        },
        button: [
          {
            info: "编辑", // 文字
            method: "edit", // 方法名
            icon: "el-icon-edit", // icon，支持element-ui icon
            type: "primary", // element-ui button type属性
            iconColor: "#e4f9f5", // icon颜色
            fontColor: "#e4f9f5", // 字体颜色
          },
          {
            info: "删除",
            method: "delete",
          },
        ],
      },    
        }
      }
  };
  </script>
 ```
:::
[查看完整示例](./complete/)