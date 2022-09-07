 Graph.js
 GraphEvent.js
 GraphLink.js
 GraphNode.js
 iconTag.vue            -->用于存放流程块类型(图标种类),
 index.vue            -->入口
 indexProto.vue    -->流程图原型
 link.vue         -->连线
 markLine.vue    -->辅助线
 menu.vue     -->右键菜单
 node.vue   -->节点
 panelLeft.vue    -->暂时不用.后期优化可能用上
 README.md   

 types.js
 utils.js    -->暴露一些常用的方法

### 组件参数和方法

**nodeItemList,**数组

**必选,**

label字段默认显示文字, 绑定的初始值.展示用

name用于默认文字修改后的显示,修改用

type  图标的种类 task,finish,start,end,default

shape: 流程块的形状  默认是矩形,可缺省 , ellipse椭圆,rect矩形,diamond菱形,circle圆

```
   nodeItemList: [
        {
          meta: {
            label: "开始",
            name: "开始",
            type: "start",
          },
        },
        {
          meta: {
            label: "结束",
            name: "结束",
            type: "end",
            shape: "ellipse",
          },
        },
        {
          meta: {
            label: "任务",
            name: "任务",
            type: "task",
            shape: "diamond",
          },
        },
        {
          meta: {
            label: "完成",
            name: "完成",
            type: "finish",
            shape: "circle",
          },
        },
      ],
```

#### 打印表格数据方法

**chart-data**,

```
 @chart-data="getData"

 getData(data) {

   console.log(data);

  },
```

#### **传入数据返显**

注:节点,连线id可自定义,node+"uuid",link+"uuid"不规定位数,但节点连线id必不能重复

```js

//节点集合
  "nodeList": [
    {
      "id": "nodegtEfnLITiPkkactm",   //id格式”node”+随机数字字母(0-9A-Za-z) 类似uuid
      "width": 100,  //流程卡宽高,可缺省,不建议自定义
      "height": 50,  //流程卡宽高,可缺省,不建议自定义
      "coordinate": [   //坐标当前呈现画布原点(左上角)是0,0, 第一个值是x轴偏移,第二个是y
        96.5625,
        304.53125
      ],
      "meta": {
        "label": "开始",
        "name": "开始",
        "type": "start"
      }
    },
    {
      "id": "nodeZi3EZgYkE5IWy6HX",
      "width": 100,
      "height": 50,
      "coordinate": [
        364.6507568359375,
        155.6195068359375
      ],
      "meta": {
        "label": "任务",
        "name": "任务",
        "type": "task",
        "shape": "diamond"
      }
    },
    {
      "id": "node5m692v50LInk9gcf",
      "width": 100,
      "height": 50,
      "coordinate": [
        577.171875,
        462.53125
      ],
      "meta": {
        "label": "结束",
        "name": "结束",
        "type": "end",
        "shape": "ellipse"
      }
    },
    {
      "id": "node7ebfDyh191SgD4ZX",
      "width": 100,
      "height": 50,
      "coordinate": [
        706.171875,
        139.53125
      ],
      "meta": {
        "label": "完成",
        "name": "完成",
        "type": "finish",
        "shape": "circle"
      }
    }
  ],
  
//  连线集合
  "linkList": [
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
    {
      "id": "linkyIbmssCxPfaJYRIc",
      "startId": "node7ebfDyh191SgD4ZX",
      "endId": "node5m692v50LInk9gcf",
      "startAt": [
        50,
        50
      ],
      "endAt": [
        50,
        0
      ],
      "meta": null
    },
    {
      "id": "link5PWQkoacO0BQr1Qu",
      "startId": "nodegtEfnLITiPkkactm",
      "endId": "nodeZi3EZgYkE5IWy6HX",
      "startAt": [
        100,
        25
      ],
      "endAt": [
        0,
        25
      ],
      "meta": null
    },
    {
      "id": "linkciyvrZtKW1yNVEuk",
      "startId": "nodegtEfnLITiPkkactm",
      "endId": "node5m692v50LInk9gcf",
      "startAt": [
        100,
        25
      ],
      "endAt": [
        0,
        25
      ],
      "meta": null
    }
  ]

```

