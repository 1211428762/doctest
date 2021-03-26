export default {
  "perform": {
    "tableHead": [
      {
        "prop": "id",
        "label": "ID",

      },
      {
        "prop": "taskName",
        "label": "任务名称",

      },
      {
        "prop": "custom",
        "label": "自定义",
        isCheckTag: true,  // 添加字段用于判断
      },
      {
        "prop": "time",
        "label": "时间",

      },
      {
        "prop": "place",
        "label": "地点",

      }
    ],
    "tableData": [
      {
        "id": 1,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/377/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",

      },
      {
        "id": 2,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/42/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",

      },
      {
        "id": 3,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/41/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 4,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/40/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id":5,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/39/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 6,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/38/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 7,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/37/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id":8,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/36/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 9,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/35/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 10,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/34/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 11,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/33/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
      {
        "id": 12,
        "taskName": "全国人大会议跟踪报道",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        custom: "https://picsum.photos/id/32/200/200",
        "place": "吉林省长春市经济开发区净月大街314号",
      },
  
      
    ],
    "addBtnList": {
      "property": {
        width: 200, // 列宽
        label: "操作",
        class: "text-center test", // 为列添加类名
      },
      button: [
        {
          info: "编辑", // 文字
          method: "edit", // 方法名
          icon: "el-icon-edit", // icon，支持element-ui icon
          type: "primary", // element-ui button type属性
          iconColor: "white", // icon颜色
          fontColor: "white", // 字体颜色
        },
        {
          info: "删除",
          method: "delete",
        },
      ],
    },
  }

}