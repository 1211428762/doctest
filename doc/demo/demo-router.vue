<template>
  <el-button class="test-el-button" @click="append"> {{ msg }}</el-button>
  <el-button class="test-el-button" @click="boxs = 1">{{ t('reset') }}</el-button>
  <hr />
  <div class="test-append-box" v-for="item in boxs" :key="item"></div>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const msg = t('add')
let boxs = ref(0)
const append = () => (boxs.value += 1)
</script>

<style lang="scss" scoped>
.test-el-button {
  margin-top: 20px;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(2turn) translateX(70px);
  }
}
.test-append-box {
  opacity: 0;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 30px 10px;
  animation: appear 2s forwards;
}
.test-append-box:nth-of-type(odd) {
  background-image: linear-gradient(35deg, deepskyblue, plum);
}
.test-append-box:nth-of-type(even) {
  background: url('/img/star.svg');
  background-size: cover;
}
</style>
