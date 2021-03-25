
<template>
  <div>
  
    <p>
      　　可能这种场景在后台管理系统,再熟悉不过了, 长期的"cv",让代码沉重不堪,
      说起来都是一把泪, 上栗子
    </p>
    <img :src="$withBase(img/business.gif)" alt="" />
    <el-divider></el-divider>
    <el-card>
      <el-button @click="operate(undefined)"> 新增 </el-button>
      <el-button @click="operate('id')">修改</el-button>
      <el-button @click="detail('id')">详情</el-button>
    </el-card>
    <el-divider></el-divider>
    <p>　　将新增，和修改耦合到一起，通过判断是否传入数据ｉｄ来区分</p>
    <div class="describe">
      <img :src="$withBase(img/directory.png)" alt="" />
      <ol>
        <li><span>add.vue</span> 为新增修改耦合文件</li>
        <li><span> data.js</span> 模拟接口数据</li>
        <li><span>detail.vue</span> 为详情展示页</li>
        <li><span>index.vue </span> 为按钮展示页</li>
        <li><span> mixin</span> 为组件公用数据,函数文件,<a href="https://cn.vuejs.org/v2/guide/mixins.html" target="blank">了解mixin</a></li>
      </ol>
    </div>

    <add ref="add" v-if="showAdd" @refresh="refresh"></add>
    <detail ref="detail" v-if="showDetail" @refresh="refresh"></detail>
  </div>
</template>

<script>
import add from "./add";
import detail from "./detail";
export default {
  components: {
    add,
    detail,
  },
  data() {
    return {
      showAdd: false,
      showDetail: false,
    };
  },
  methods: {
    refresh() {
      // 请求page数据
    },
    operate(id) {
      this.showAdd = true;
      this.$nextTick(() => {
        this.$refs.add.init(id);
      });
    },
    detail(id) {
      this.showDetail = true;
      this.$nextTick(() => {
        this.$refs.detail.init(id);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.describe {
  display: flex;
  li span{
    color: #769fcd;
  }
  img {
    float: left;
  }
}
</style>