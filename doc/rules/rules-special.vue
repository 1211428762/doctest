<template>
  <layout>
    <el-card>
      <span>特殊规则</span>
      <amber-form-tab v-model:data-form="dataForm" :form-configs="formConfig"
    /></el-card>
  </layout>
</template>

<script setup>
import { ref } from 'vue'
import rules from '@/utils/rules'
const dataForm = ref({
  enRequired: {
    'en-US': '',
    'zh-CN': '',
  },
})
const TEN = 10
const formConfig = [
  { prop: 'required', type: 'input', label: 'required', rules: rules.required() },
  { prop: 'maxlength', type: 'input', label: 'maxlength(5)', rules: rules.maxlength(5) },
  { prop: 'minlength', type: 'input', label: 'minlength(5)', rules: rules.minlength(5) },
  { prop: 'precision', type: 'input', label: 'precision(2)', rules: rules.precision(2) },
  { prop: 'numCompare', type: 'input', label: 'numCompare(`gt10`)', rules: [rules.number(), rules.numCompare('gt10')] }, //组合校验，基础校验在前，复杂校验在后
  {
    prop: '"gt10","lt100"',
    type: 'input',
    label: 'numCompare(["gt10","lt100"])',
    rules: rules.numCompare(['gt10', 'lt100']),
  },
  {
    prop: 'numCompare(`gt${TEN}`)',
    type: 'input',
    label: 'numCompare(`gt${TEN}`)',
    rules: rules.numCompare(`gt${TEN}`),
  },
  {
    prop: 'enRequired',
    useI18n: true,
    type: 'input',
    label: 'enRequired',
    rules: [rules.enRequired(), rules.maxlength(10, true)],
  },
  { prop: 'future', type: 'datetimerange', label: 'future', rules: rules.future(24) },
]
</script>
