<template>
  <div ref="cube"></div>
</template>

<script setup>
import inspiration from '@/inspiration/index.js'
import { ref, nextTick } from 'vue'
const cube = ref(null)
// 光nextTick有时候会失效
setTimeout(() => {
  nextTick(() => {
    inspiration.addCube(cube._value)
  })
}, 500)
</script>
