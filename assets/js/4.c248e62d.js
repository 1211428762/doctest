(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{485:function(t,e,i){},510:function(t,e,i){"use strict";i(485)},525:function(t,e,i){"use strict";i.r(e);var a={name:"radioEle",data:function(){return{formItem:[{type:"radio",label:"切换表单项",prop:"radio",list:[{value:0,label:"账号密码"},{value:1,label:"年龄性别"}]},{type:"input",label:"账号",prop:"account"},{type:"password",label:"密码",prop:"password"}],formItemChange:[{type:"radio",label:"切换表单项",prop:"radio",list:[{value:0,label:"账号密码"},{value:1,label:"年龄性别"}]},{type:"input",label:"年龄",prop:"account"},{type:"radio",label:"性别",prop:"sex",list:[{label:"male",value:0},{label:"female",value:1}]}]}},methods:{handleEvent:function(t,e,i){switch(t){case"radio":this.radioCase(e,i)}},radioCase:function(t,e){if("radio"===e){var i=[this.formItemChange,this.formItem];this.formItem=i[0],this.formItemChange=i[1]}}}},r=(i(510),i(4)),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("br"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("el-divider"),t._v(" "),i("p",[t._v("闲话少说, 直接切换案例:")]),t._v(" "),i("el-card",[i("FormList",{attrs:{footer:!1,fieldList:t.formItem},on:{"handle-event":t.handleEvent}})],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n    说到表单里的radio ,常见的业务需求估计有以下两种,\n    "),e("br"),this._v("一般来说需要在html 绑定冗杂的js代码 ,违背了行为结构分离原则,\n    主要是下次维护 要看到吐\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-demo"},[e("img",{attrs:{src:"img/toggle.gif",alt:""}}),this._v(" "),e("img",{attrs:{src:"img/append.gif",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一般来说radio 分为: "),e("b",[this._v("插入")]),this._v(" ,"),e("b",[this._v("切换")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("插入")]),this._v(" :　 使用formList append插槽即可")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("切换")]),this._v(":　可以选择直接操作fieldList数组(考验数组知识),来实现切换.\n    "),e("br"),this._v("\n    　　　　　也可以实现就准备两套表单项数组(不易出错)\n  ")])}],!1,null,"7772136b",null);e.default=s.exports}}]);