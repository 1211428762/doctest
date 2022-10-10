---
title: FAQ
index: false
icon: community
sidebar: false
category:
  - 问答
---

<ClientOnly>
<render-pet/>
<render-cube/>

<script setup>
import inspiration from '@/inspiration/index.js'
import { ref ,nextTick} from 'vue'
const select=ref('')
</script>

<style scoped>

h4{
  color:var(--theme-color);
  border: 1px solid;
  padding: 5px 10px !important;
  display: inline-block;
  margin: 5px 0;
  border-radius: 6px;
  position: relative;
  box-shadow: 1px 2px 3px;
  max-height:50px
}
#faq-section-coder h4{
  padding-top: 10px !important;
}
h4::after{
    content: "";
    position: absolute;
    width: 24px;
    height: 15px;
    border: 1px solid;
    bottom: -7px;
    z-index: 10;
    background: white;
    right: 15px;
    clip-path: polygon(0 0,90% 100%,0 100%,0 0);
    transform: rotate(-36deg);
    box-shadow: 1px 2px 3px;
}
.answer{
  padding: 5px 10px;
  margin:10px 0;
  line-height:30px;
}
.answer p{
  margin:0;
  line-height:unset
}
</style>
</ClientOnly>
