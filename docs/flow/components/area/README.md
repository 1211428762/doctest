## 地区级联选择

参数

| 参数             | 说明               | 类型           | 可选值       | 默认值 |
| ---------------- | ------------------ | -------------- | ------------ | ------ |
| province         | 省                 | String, Number | 10000,北京市 |        |
| city             | 市                 | String, Number |              |        |
| area             | 区                 | String, Number |              |        |
| hideArea         | 隐藏区             | Boolean        |              | false  |
| onlyProvince     | 只显示省           | Boolean        |              | false  |
| provinceDisabled | 置灰不可用         | Boolean        |              | false  |
| cityDisabled     | 置灰不可用         | Boolean        |              | false  |
| areaDisabled     | 置灰不可用         | Boolean        |              | false  |
| custom           | 选择器的自定义类名 | String         |              |        |
| resetBtn         | 添加重置按钮       | Object         |              |        |
| placeholders     | 自定义placeholders | Object         |              |        |

```
 resetBtn: {
      type: Object,
      default() {
        return {
          isShowBtn: false,   //是否显示重置按钮
          cusClass: '',  //按钮自定义类
          word: '' || '重置',  //按钮内的文字
        };
      },
    },
    placeholders: {
      type: Object,
      default() {
        return {
          province: '省',
          city: '市',
          area: '区',
        };
      },
    },
```

