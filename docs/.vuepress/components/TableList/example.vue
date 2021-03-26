<template>
  <div>
    <TableList
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :loading="loading"
      :total="totalCount"
      :pageSize="pageSize"
      :currentPage="curPage"
      showCheckbox
    >
    </TableList>
    <br>
    <el-button @click="loading = false">
      手动关闭loading(还原数据请求完毕场景)
    </el-button>
  </div>
</template>

<script>
import mock from "./data.js";

let data = mock.perform;
export default {
  data() {
    return {
      totalCount: 100,
      curPage: 1,
      pageSize: 10,
      loading: true,
      tableHead: data.tableHead,
      tableData: data.tableData,
      addBtnList: data.addBtnList,
    };
  },
  mounted() {
    console.log(this.tableData);
  },
};
</script>

<style>
</style>