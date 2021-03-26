<template>
  <div>
    <TableList
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :headerCellStyle="headerCellStyle"
      :total="totalCount"
      :pageSize="pageSize"
      :currentPage="curPage"
      showCheckbox
    >
    
    </TableList>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCount: 100,
      curPage: 1,
      pageSize: 10,
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
          deptName: "程序媛",
        },
        {
          first: "格子衫",
          deptName: "百褶裙",
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
            iconColor: red, // icon颜色
            fontColor: green, // 字体颜色
          },
          {
            info: "删除",
            method: "delete",
          },
        ],
      },
    };
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>