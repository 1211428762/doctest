(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{540:function(t,a,e){"use strict";e.r(a);var s={name:"",data:function(){return{province:"广东省",city:"深圳市",area:"南山区",resetBtn:{word:"重置"},placeholders:{province:"-- 请选择省 --",city:"-- 请选择市 --",area:"-- 请选择区 --"}}},methods:{citySelected:function(t){console.log("选择的区域---\x3e",t)}},components:{areaSelect:e(536).default}},n=e(3),r=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[[e("div",[e("h3",[t._v("默认")]),t._v(" "),e("areaSelect"),t._v(" "),e("h3",[t._v("隐藏区域")]),t._v(" "),e("areaSelect",{attrs:{hideArea:""}}),t._v(" "),e("h3",[t._v("只显示省")]),t._v(" "),e("areaSelect",{attrs:{onlyProvince:""}}),t._v(" "),e("h3",[t._v("置灰 provinceDisabled/cityDisabled/areaDisabled")]),t._v(" "),e("areaSelect",{attrs:{provinceDisabled:"",cityDisabled:"",areaDisabled:""}}),t._v(" "),e("h3",[t._v("自定义placeholder")]),t._v(" "),e("areaSelect",{attrs:{placeholders:t.placeholders}}),t._v(" "),e("h3",[t._v("初始值")]),t._v(" "),e("areaSelect",{attrs:{province:t.province,city:t.city,area:t.area},on:{"city-selected":t.citySelected,"update:province":function(a){t.province=a},"update:city":function(a){t.city=a},"update:area":function(a){t.area=a}}})],1)],t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("查看代码")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("areaSelect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("//默认\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("areaSelect")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hideArea")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("//隐藏区域\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("areaSelect")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyProvince")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("//只显示省\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("areaSelect")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("provinceDisabled")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cityDisabled")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("areaDisabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("// 置灰不可用\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("areaSelect")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":placeholders")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("placeholders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v('\n    //placeholders: {\n    //   province: "-- 请选择省 --",\n    //  city: "-- 请选择市 --",\n    //  area: "-- 请选择区 --",\n    // }\n'),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("areaSelect")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@city-selected")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("citySelected"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":province.sync")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("province"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":city.sync")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("city"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":area.sync")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("area"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" //初始值,以及选择的值,看看控制台\n")])])])]),t._v(" "),e("h3",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("province")]),t._v(" "),e("td",[t._v("省")]),t._v(" "),e("td",[t._v("String, Number")]),t._v(" "),e("td",[t._v("10000,北京市")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("city")]),t._v(" "),e("td",[t._v("市")]),t._v(" "),e("td",[t._v("String, Number")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("area")]),t._v(" "),e("td",[t._v("区")]),t._v(" "),e("td",[t._v("String, Number")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("hideArea")]),t._v(" "),e("td",[t._v("隐藏区")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("onlyProvince")]),t._v(" "),e("td",[t._v("只显示省")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("provinceDisabled")]),t._v(" "),e("td",[t._v("置灰不可用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("cityDisabled")]),t._v(" "),e("td",[t._v("置灰不可用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("areaDisabled")]),t._v(" "),e("td",[t._v("置灰不可用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("placeholders")]),t._v(" "),e("td",[t._v("自定义placeholders")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("reset")]),t._v(" "),e("td",[t._v("组件数据重置方法,需求获取组件实例")])]),t._v(" "),e("tr",[e("td",[t._v("city-selected")]),t._v(" "),e("td",[t._v('组件选择的数据,返回格式{province:"xx",city:"xx",area:""}')])])])])],2)}),[],!1,null,null,null);a.default=r.exports}}]);