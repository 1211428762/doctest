
<template>
  <div>
    <p>
      当 <b>元素进入视窗</b> ( <b>缓慢滚动</b> 演示效果更佳,
      pc/移动均支持),触发的动画,目前支持四种:
    </p>
    <ClientOnly>
      <section class="viewport-demo">
        <viewport direction="free" class="scroll-bar">
          <div class="test">1</div>
          <div class="test">2</div>
          <div class="test">3</div>
          <p>左右进入</p>
        </viewport>
        <viewport direction="left" class="scroll-bar">
          <div class="test">1</div>
          <p>从左进入</p>
        </viewport>
        <viewport direction="right" class="scroll-bar">
          <div class="test">1</div>
          <p>从右进入</p>
        </viewport>
        <viewport direction="bottom" class="scroll-bar">
          <div class="test">1</div>
          <p>从底下进入</p>
        </viewport>
        <p>使用案例</p>
        <viewport direction="bottom" class="scroll-bar viewport-example">
          <div  class="test" >
            <img
              src="https://img0.baidu.com/it/u=3093440885,1425730067&fm=26&fmt=auto&gp=0.jpg"
              alt=""
            />
            <p>绿叶图片</p>
            <p>绿色意味着生机,和无限的希望</p>
          </div>
          <p>从底下进入</p>
        </viewport>
      </section>
    </ClientOnly>
  </div>
</template>

<script>
import viewport from "./components/viewport.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { viewport },
  mounted() {},
  methods: {
    clickEvt(evt) {
      console.log("clickEvt-------", evt);
    },
  },
};
</script>
<style lang='scss' >
.viewport-demo {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  .viewport {
    width: 49%;
    height: 300px;
    overflow-y: scroll;
    > div:first-child,
    > section:first-child {
      margin-top: 500px;
    }
  }
  .test {
    width: 50px;
    height: 50px;
    margin: 50px auto;
    text-align: center;
    color: white;
    line-height: 50px;
    background: deepskyblue;
    // transition-duration: 1s !important;
  }
}
.scroll-bar {
  border: 1px silver solid;
  position: relative;
  p {
    position: absolute;
    top: 0;
    left: 50%;
  }
}
.viewport-example {
  figure {
    width: 90%;
    height: 100px;
  }
  img {
    width: 50%;
    object-fit: cover;
  }
}
</style>



### Attributes

| 属性      | 类型   | 可选值(默认值)                  | 描述                   |
| --------- | ------ | ------------------------------- | ---------------------- |
| direction | string | (left,bottom,right,free)/bottom | 元素进入视窗触发的动画 |
| element   | array  |                                 | 需要监听的元素,可不传, |

::: details 查看代码
```vue

<template>
  <div class="viewport-demo">
    //如果不传element,则viewport组件内第一级子元素必须是div/section(推荐),内部自动监听第一级元素
    //需要手动监听元素进入视窗,传入element,使用IntersectionObserver监听(不推荐)
    //组件可处理单个/多个元素
    <viewport direction="free" class="scroll-bar">
      <div class="test">1</div>
      <section class="test">2</section>
      <div class="test">3</div>
      <p>左右进入</p>
    </viewport>
    <viewport direction="left" class="scroll-bar">
      <div class="test">1</div>
      <p>从左进入</p>
    </viewport>
    <viewport direction="right" class="scroll-bar">
      <div class="test">1</div>
      <p>从右进入</p>
    </viewport>
    <viewport direction="bottom" class="scroll-bar">
      <div class="test">1</div>
      <p>从底下进入</p>
    </viewport>
  </div>
</template>

```
::: 
