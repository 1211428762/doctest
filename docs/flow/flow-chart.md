<h1>流程图</h1>
主要包含流程图，增删改基本功能以及样式形状，数据打印操作
<ClientOnly>
<FlowChart-index  style="width:1200px !important ;  position: relative; left: -230px;"  ></FlowChart-index>
</ClientOnly>
### Attributes

| 属性         | 类型   | 描述(详情见示例)                                 |
| ------------ | ------ | ------------------------------------------------ |
| nodeItemList | array  | 左侧展示用的节点,可拖拽                          |
| nodeList     | array  | 流程图中的节点集合.可拖拽,用于将数据转化为流程图 |
| linkList     | array  | 流程图中连线集合,可拖拽,用于将数据转化为流程图   |
| lineStyle    | object | 连线样式                                         |
| height       | string | 流程图高度, 默认"600px"                          |

示例

```js
 nodeItemList: [
        {
          meta: {
            label: "开始", //流程块名称
            type: "start", // 种类有" task,finish,start,end,default" ,用于决定流程块的icon
             shape: "rect",//  默认是矩形,可缺省 , ellipse椭圆,rect矩形,diamond菱形,circle圆
          }
        }]
//需要流程图载入时就显示节点和连线时,传入nodeList.linkList.
 nodeList: [
    {
      "id": "nodegtEfnLITiPkkactm",   //id格式”node”+随机数字字母(0-9A-Za-z) 类似uuid
      "width": 100,  //流程快宽高,可缺省,不建议自定义
      "height": 50,  //流程块宽高,可缺省,不建议自定义
      "coordinate": [   //坐标当前呈现画布原点(左上角)是0,0, 第一个值是x轴偏移,第二个是y
        96.5625,
        304.53125
      ],
      "meta": {
        "label": "开始",
        "name": "开始",
        "type": "start"
      }
    }
  ]
  linkList: [
    {
      "id": "linkUvCdsP55ZQdHDn5R",
      "startId": "nodeZi3EZgYkE5IWy6HX",    //连线起始节点的id,必须要与节点同步, 
      "endId": "node7ebfDyh191SgD4ZX",		 //连线结束节点的id,必须要与节点同步, 
      "startAt": [              //连线从流程卡哪个方位开始, 一个矩形默认 是 (0,25),(0,50),(0,75)等
      					//以元素宽高来判断
        50,
        50
      ],
      "endAt": [         //连线结束连在结束流程块哪个位置
        0,
        25
      ],
      "meta": null    //连线上的文字.若有则传 meta: {desc:’文字’}, 
    },
  ]
lineStyle:{
        color: "#666666", // line 颜色
        hover: "#000", // line hover 的颜色
        textColor: "#666666", // line 描述文字颜色
        textHover: "#333", // line 描述文字 hover 颜色
        font: "16px Arial", // line 描述文字 字体设置 参考 canvas font
        dotted: false, // 是否是虚线
}
```



### Event

| 名称       | 描述                             |
| ---------- | -------------------------------- |
| chart-data | 返回流程图格式化后的数据(字符串) |
::: details 查看代码
```vue
<template>
  <flow-chart height="600px" @chart-data="chartData" :lineStyle="lineStyle" />
</template>
<script>
export default {
  data() {
    return {
      lineStyle: {
        color: "#666666", // line 颜色
        hover: "#000", // line hover 的颜色
        textColor: "#666666", // line 描述文字颜色
        textHover: "#333", // line 描述文字 hover 颜色
        font: "16px Arial", // line 描述文字 字体设置 参考 canvas font
        dotted: false, // 是否是虚线
      },
    };
  },
  methods: {
    chartData(data) {
      console.log(data);
    },
  },
};
</script>

```
::: 