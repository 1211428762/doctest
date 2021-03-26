<template>
  <div class="tablelist">
    <div class="container">
      <el-table
        :class="className"
        ref="multipleTable"
        tooltip-effect="light"
        :data="tableData"
        row-key="id"
        fit
        style="width: 100%"
        v-bind="$attrs"
        v-loading="loading"
        :header-cell-style="headerCellStyle"
        @selection-change="handelSelectionChange"
      >
        <!-- 数据为空时展示效果 -->
        <template #empty>
          <slot name="emptyTable">
            <div class="empty-container">
              <div class="emptyText">暂无数据</div>
            </div>
          </slot>
        </template>

        <!-- 多选列 -->
        <el-table-column
          v-if="showCheckbox"
          type="selection"
          width="55"
          cell-style="text-align: center;"
          class-name="text-center"
        >
        </el-table-column>

        <!-- 内容列 -->
        <el-table-column
          v-for="(item, index) in tableHead"
          :key="index"
          :label="item.label"
          :min-width="item.width"
          :fixed="item.fixed"
          :show-overflow-tooltip="
            item.showOverflowTooltip === false ? false : true
          "
          :class-name="item.class"
          :type="item.type"
        >
          <template slot-scope="scope">
            <slot
              name="content"
              v-bind="{ curItem: scope.row[item.prop], curTablehead: item }"
            >
              <span>{{ scope.row[item.prop] }}</span>
            </slot>
          </template>
        </el-table-column>

        <!-- 自定义操作列 -->
        <el-table-column
          v-if="addBtnList && addBtnList.button.length"
          :label="
            addBtnList.property.label ? addBtnList.property.label : '操作'
          "
          :min-width="
            addBtnList.property.width ? addBtnList.property.width : 100
          "
          :class-name="addBtnList.property.class"
        >
          <template slot-scope="scope">
            <slot name="operate" v-bind="{ row: scope.row }">
              <el-button
                v-for="(item, index) in addBtnList.button"
                :key="index"
                @click.native.stop="
                  clkCall(item.method, scope.row, scope.$index)
                "
                :type="item.type ? item.type : 'text'"
                size="small"
                :style="`color: ${item.fontColor}`"
              >
                <i :class="item.icon" :style="`color: ${item.iconColor};`"></i>
                {{ item.info }}
              </el-button>
            </slot>
          </template>
        </el-table-column>
      </el-table>

      <slot
        name="multiOperate"
        v-bind="{
          selectItems: multipleSelectionItems,
          selectIds: multipleSelectionIds,
        }"
      >
        <el-button
          v-if="showCheckbox"
          class="delBtn"
          type="primary"
          size="small"
          plain
          @click="multiOperate"
          ><i class="el-icon-s-data"></i> {{ multiOperateText }}</el-button
        >
      </slot>

      <!-- 分页器 -->
      <el-pagination
        v-if="pagination"
        ref="pagination"
        background
        :page-size="pageSize"
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        :total="total"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-tablelist",
  props: {
    tableHead: { type: [Array], default: () => [] },
    tableData: { type: [Array], default: () => [] },
    addBtnList: { type: [Object], default: () => {} },
    showCheckbox: { type: [Boolean], default: false },
    loading: { type: [Boolean], default: () => true },
    pagination: { type: [Boolean], default: () => false },
    total: { type: [Number], default: () => 0 },
    pageSize: { type: [Number], default: () => 10 },
    currentPage: { type: [Number], default: () => 1 },

    multiOperateText: { type: [String], default: () => "批量删除" },
    headerCellStyle: {
      type: [Object],
      default: () => {
        // return {
        //   "background": "#F5F5FA",
        //   "color": "#8181A5",
        //   "font-size": "12px",
        //   "line-height": "18px",
        // }
      },
    },
    className: { type: String },
  },
  data() {
    return {
      multipleSelectionIds: [], // 多选的项 --- id
      multipleSelectionItems: [], // 整个项
    };
  },
  computed: {},
  watch: {
    tableData() {},
    tableHead() {},
    loading() {},
  },
  created() {
    console.log(this.loading, "--------this.loading---------");
  },
  mounted() {},

  methods: {
    // 分页
    handleCurrentChange(val) {
      // this.currentPage = val;
      this.$emit("page-change", val);
    },
    // 自定义操作按钮点击，向父元素触发事件
    clkCall(methodName, row, index) {
      this.$emit("click-callback", methodName, row, index);
      // console.log(methodName,row,index);
    },
    // 批量删除所选项
    multiOperate(evt, fn = function () {}) {
      this.$emit(
        "multi-operate",
        this.multipleSelectionItems,
        this.multipleSelectionIds
      );
      return fn(this.multipleSelectionItems, this.multipleSelections);
    },
    // 获取选中行数据
    handelSelectionChange(val) {
      this.multipleSelectionIds = val.map((cur) => cur.id);
      this.multipleSelectionItems = val;
    },
  },
};
</script>

<style scoped>
.tablelist >>> .el-pagination button {
  /* padding: 0 20px; */
  border-radius: 6px;
  color: #8181a5;
}

.tablelist >>> .number {
  position: relative;
  background-color: #f5f5fa;
}

.tablelist >>> .number.active {
  background-color: rgba(94, 129, 244, 0.1) !important;
  color: #5e81f4 !important;
}
/* .tablelist >>> .number.active::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  bottom: -32px;
  background: #5e81f4;
  left: 0;
} */

.tablelist >>> .text-center {
  text-align: center;
}
.tablelist >>> .el-table__empty-block {
  width: 100% !important;
}
.tablelist >>> .el-table--enable-row-transition .el-table__body td {
  font-size: 12px;
  color: #606266;
}

.el-pagination {
  margin: 20px auto 0px;
  text-align: right;
}

.delBtn {
  float: left;
  margin: 20px 0 0 20px;
}

.container::after {
  display: block;
  clear: both;
  content: "";
}

.empty-container {
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.emptyImg {
  width: 150px;
  height: 150px;
}
.emptyText {
  height: 30px;
  line-height: 30px;
}
</style>
