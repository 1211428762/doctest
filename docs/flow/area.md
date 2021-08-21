<template>
  <div>
    <h1>地区选择</h1>
    <h3>默认</h3>
    <areaSelect></areaSelect>
    <h3>隐藏区域</h3>
    <areaSelect hideArea></areaSelect>
    <h3>只显示省</h3>
    <areaSelect onlyProvince></areaSelect>
    <h3>置灰 provinceDisabled/cityDisabled/areaDisabled</h3>
    <areaSelect provinceDisabled cityDisabled areaDisabled> </areaSelect>
    <h3>自定义placeholder</h3>
    <areaSelect :placeholders="placeholders"> </areaSelect>
    <h3>初始值</h3>
    <areaSelect
      @city-selected="citySelected"
      :province.sync="province"
      :city.sync="city"
      :area.sync="area"
    />
  </div>
</template>

<script>
import areaSelect from "./components/area";
export default {
  name: "",
  data() {
    return {
      province: "广东省",
      city: "深圳市",
      area: "南山区",
      resetBtn: {
        word: "重置",
      },

      placeholders: {
        province: "-- 请选择省 --",
        city: "-- 请选择市 --",
        area: "-- 请选择区 --",
      },
    };
  },
  methods: {
    citySelected(val) {
      console.log("选择的区域--->", val);
    },
  },
  components: { areaSelect },
};
</script>

### Attributes

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
| placeholders     | 自定义placeholders | Object         |              |        |

### Event

| 名称         | 描述                                                     |
| ------------ | -------------------------------------------------------- |
| reset        | 组件数据重置方法,需求获取组件实例                        |
| city-selected | 组件选择的数据,返回格式{province:"xx",city:"xx",area:""} |
::: details 查看代码 
```vue
<areaSelect/>//默认
<areaSelect hideArea/>//隐藏区域
<areaSelect onlyProvince/>//只显示省
<areaSelect provinceDisabled cityDisabled areaDisabled/>// 置灰不可用
<areaSelect :placeholders="placeholders"/>
    //placeholders: {
    //   province: "-- 请选择省 --",
    //  city: "-- 请选择市 --",
    //  area: "-- 请选择区 --",
    // }
<areaSelect
      @city-selected="citySelected"
      :province.sync="province"
      :city.sync="city"
      :area.sync="area"
    /> //初始值,以及选择的值,看看控制台
```
:::

