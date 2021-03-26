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
      @page-change="pageChange"
      pagination
      @click-callback="listenCall"
      @multi-operate="multiOperate"
    >
      <template #content="{ curItem, curTablehead }">
        <div v-if="curTablehead.isCheckTag">
          <img :src="curItem" alt="" />
        </div>
        <span v-else>{{ curItem }}</span>
      </template>
      <template #emptyTable>
        <div class="emptyTable">暂无数据</div>
      </template>
    </TableList>
    <br />
    <el-button @click="tableData = []"> 模拟无数据场景 </el-button>
    <el-button @click="init"> 请求数据 </el-button>
  </div>
</template>

<script>
import mock from "./data.js";

let data = mock.perform;
export default {
  data() {
    return {
      totalCount: 12,
      curPage: 1,
      pageSize: 6,
      loading: true,
      tableHead: data.tableHead,
      tableData: [],
      addBtnList: data.addBtnList,
    };
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.tableData = data.tableData.slice(0, 6);
      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
    pageChange(val) {
      this.tableData =
        val > 1 ? data.tableData.slice(0, 6) : data.tableData.slice(6);
    },
    // 使用此方法动态绑定函数
    listenCall(methodName, row, index) {
      this[methodName](row, index);
    },
    edit(row, index) {
      this.$message.warning(`当前选中index是${index}`);
    },
    delete(row, index) {
      this.$message.info(`当前选中index是${index}`);
    },
    multiOperate(items, ids) {
      if (ids.length) {
        this.$message.success(`当前选中ids是${ids}`);
        } else {
        this.$message.error(`未选中数据`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.emptyTable {
  height: 300px;
  width: 100%;
  line-height: 300px;
}
</style>