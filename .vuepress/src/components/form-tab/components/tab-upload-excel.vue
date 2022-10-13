<template>
  <el-upload
    class="tab-upload-excel-upload"
    :multiple="false"
    :show-file-list="false"
    accept=".xlsx,.xls,.csv"
    :auto-upload="false"
    :on-change="fileChange"
  >
    <template #trigger>
      <el-button size="small" type="primary">
        {{ $t('click_upload') }}
      </el-button>
    </template>
    <a :href="`/plugin/${templateFileName}.xlsx`" :download="`${templateFileName}.xlsx`">
      {{ $t('download_template') }}
    </a>
  </el-upload>
  <doc-table :height="250" :dataList="dataList" :colConfigs="colConfigs"></doc-table>
  <el-pagination
    :current-page="page"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="page_size"
    :total="total"
    layout="total, prev, pager, next"
    @current-change="pageCurrentChangeHandle"
  ></el-pagination>
</template>
<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { excelImport } from '@/utils/export2Excel'
export default defineComponent({
  name: 'tab-upload-excel',
  emits: ['upload-list'],
  props: {
    config: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const templateFileName = props.config?.templateFileName || ''
    const state = reactive({
      originList: [],
      colConfigs: props.config?.tableConfig || [],
      page: 1,
      page_size: 5,
      total: 0,
    })
    const fileChange = (file) => {
      excelImport(file, (result) => {
        state.originList = result
        state.total = result.length
        emit('update:modelValue', state.originList)
      })
    }
    const getSliceStart = () => {
      return (state.page - 1) * state.page_size
    }
    const getSliceEnd = () => {
      return state.page * state.page_size
    }
    const getCurrentList = () => {
      return state.originList.slice(getSliceStart(), getSliceEnd())
    }
    const pageCurrentChangeHandle = (page) => {
      state.page = page
    }
    const dataList = computed(() => {
      return getCurrentList()
    })
    return {
      templateFileName,
      fileChange,
      pageCurrentChangeHandle,
      dataList,
      ...toRefs(state),
    }
  },
})
</script>
<style scoped>
.tab-upload-excel-upload {
  margin-bottom: 20px;
}
.tab-upload-excel-upload > a {
  margin-left: 20px;
}
</style>
