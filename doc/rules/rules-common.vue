<template>
  <layout>
    <el-card>
      <span>普通规则</span>
      <amber-form-tab v-model:data-form="dataForm" :form-configs="formConfig"
    /></el-card>
  </layout>
</template>

<script setup>
import { ref } from 'vue'
import rules from '@/utils/rules'
const dataForm = ref({ int: '' })
const formConfig = [
  { prop: 'int', type: 'input', label: 'int', rules: rules.int() },
  { prop: 'plusNumber', type: 'input', label: 'plusNumber', rules: rules.plusNumber() },
  { prop: 'nonzero', type: 'input', label: 'nonzero', rules: rules.nonzero() },
  { prop: 'number', type: 'input', label: 'number', rules: rules.number() },
  { prop: 'float', type: 'input', label: 'float', rules: rules.float() },
  { prop: 'url', type: 'input', label: 'url', rules: rules.url() },
  { prop: 'email', type: 'input', label: 'email', rules: rules.email() },
]
</script>
