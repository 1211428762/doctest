#### 完整示例
## 表格示例
<TableList-example></TableList-example>

### Attributes

| 参数            | 说明                                                         | 类型    | 可选值 | 默认值 |
| :-------------- | :----------------------------------------------------------- | :------ | :----- | :----- |
| tableHead       | 表头信息；对象数组，每个对象内应至少包含prop、label，分别对应字段名称、显示的标题；还可以包含width：对应为当前列的最小宽度；class：为当前列增加类名； | Array   |        | —      |
| headerCellStyle | 可选，表头行样式                                             | Object  |        |        |
| tableData       | 表格信息；对象数组，每个对象对应一行信息；对象的key对应为tableHead的prop，value对应为相应信息；多余字段不显示，少的字段对应位置空白 | Array   |        | —      |
| addBtnList      | 在表格最后一列加上操作列按钮；对象；应包含property对象、button数组；property(操作列属性)：{width：对应列宽度，label：显示的标题，class：为当前列增加类名}，button：[{ info : 对应展示信息，method：对应方法名，icon:图标，fontColor：文字颜色，iconColor：icon图标颜色},{},{}] | Object  | —      | false  |
| showCheckbox    | 是否添加多选列，若为true，则在表格第一列加上checkbox可供多选，并在表格左下方加上批量删除按钮 | boolean | —      | false  |
| pagination      | 可选，是否需要分页器，分页器至于表格右下方                   | boolean | —      | false  |
| total           | 总数据量                                                     | number  |        | 0      |
| pageSize        | 每页显示条目个数                                             | number  |        | 10     |
| currentPage     | 当前页数                                                     | number  |        | 1      |
| loading         | 是否加载中状态                                               | boolean | —      | true   |

#### 属性使用示例
::: details 查看代码
```vue
// template
<tablelist
  :loading="loading"
  :tableData="tableData"
  :tableHead="tableHead"
  :addBtnList="addBtnList"
  :headerCellStyle="headerCellStyle"
  :total="totalCount"
  :pageSize="pageSize"
  :currentPage="curPage"
  showCheckbox
>
</tablelist>
//data
data(){
	return{
		loading: true;
		tableHead: [
      {
        prop: 'tenantName',  // 字段名
        label: '所属租户',
        width: 150,  // 列宽
        class: 'text-center test',  // 为列添加类名
      },
      {
        prop: 'deptName',
        label: '组织名称',
        width: 150,
        class: 'text-center',
      },
		],
    tableData: [
        {
          tenantName: '111',
          deptName: "组织部",
        },
        {
          tenantName: '111',
          deptName: "宣传部",
        }
		],
    addBtnList: {
      property: {
        width: 200,  // 列宽
        label: '操作', 
        class: 'text-center test',  // 为列添加类名
      },
      button: [
        {
          info: '编辑',  // 文字
          method: 'edit',  // 方法名
          icon:el-icon-edit,  // icon，支持element-ui icon
          type: 'primary',  // element-ui button type属性  
          iconColor: red,  // icon颜色
          fontColor: green,  // 字体颜色
        },
        {
          info: '删除',
          method: 'delete',
        },
      ],
		},
    headerCellStyle:{  // 表头样式
      "background": "#F5F5FA",
      "color": "#8181A5",
      "font-size": "12px",
      "line-height": "18px",
		},
    totalCount: 100,
    curPage: 1,
    pageSize: 10,
	}
}
```

::: 

### Events

| 事件名称       | 说明                                                         | 参数                                                         |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| click-callback | 向父级触发自定义事件                                         | methodName:自定义的方法名，row：当前行数据,index:当前行索引  |
| page-change    | currentPage 改变时会触发                                     | val：当前currentPage值                                       |
| multi-delete   | 若有showCheckbox属性，则会有批量删除操作按钮，点击触发改事件 | items：选中行数据的所有数据数组，ids：若数据有id字段，则返回选中行数据的id数组，否则为空数组 |

#### 事件使用示例
::: details 查看代码
```vue
// template   在属性示例基础上添加
<tablelist
  @click-callback="listenCall"
  @page-change="pageChange"
  @multi-delete="multiDelete"
>
</tablelist>
// method
methods: {
	// 使用此方法动态绑定函数
	listenCall(methodName, row, index) {
    this[methodName](row, index);
  },
	edit(row, index){},
	delete(row, index){},
  pageChange(val){},
  multiDelete(items,ids){},
}
```
:::



### Table Slot

| name       | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| content    | 如果您需要自定义表格内容的展现形式，这个slot可能会帮到您，该slot绑定两个值curItem：当前tablecell的内容，curTablehead：当前列的表头信息；您可以在tableHead中添加字段用于判断是否自定义该列内容；默认展现形式为文字 |
| operate    | 如果您觉得操作列样式不能满足您的需求，这个slot可能会帮到您；该slot绑定一个row值，返回当前行信息 |
| emptyTable | 数据为空时自定义显示内容                                     |

#### slot  ---  content示例

若组件配置项无法满足需求，你可以使用该slot
::: details 查看代码
```vue
// template   在属性示例基础上添加
<tablelist>
	//  curItem为当前数据，curTablehead为当前列表头数据
    <template #content="{ curItem, curTablehead }">
      <div v-if="curTablehead.isCheckTag">
         <el-tag v-if="curItem === '正常'"> {{ curItem }}</el-tag>
         <el-tag v-else type="danger" @click="clicktest">
                  {{ curItem }}
         </el-tag>
       </div>
       <span v-else>{{ curItem }}</span>
    </template>
</tablelist>

//data
tableHead: [
	{
    prop: 'tenantName',
    label: '所属租户',
    width: 150,
    class: 'text-center test',
    isCheckTag: true,  // 添加字段用于判断
  },
],
```
:::
#### slot  ---  operate 示例

若组件配置项无法满足需求，你可以使用该slot

```vue
// template   在属性示例基础上添加；您仍需绑定addBtnList到tablelist
<tablelist>
	//  row为当前行数据
    <template #operate="{ row }">
          <el-button
            v-for="(item, index) in addBtnList.button"
            :key="index"
            @click.native.stop="listenCall(item.method, row)"  // 动态绑定方法
            type="primary"
            size="small"
            round
          >
            <i class="el-icon-edit" style="color: red;"></i>
          </el-button>
    </template>
</tablelist>
```



