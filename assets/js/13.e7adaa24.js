(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{477:function(t,a,o){},481:function(t,a,o){"use strict";o(477)},508:function(t,a,o){"use strict";o.r(a);o(63);var e={name:"fl-badge",props:{left:Boolean,bottom:Boolean,isDot:Boolean,value:[Number,String],max:Number,overlap:Boolean},components:{},data:function(){return{}},computed:{overlapPosition:function(){return{inset:this.bottom?this.left?"".concat(this.overlap?"calc(100% - 6px) calc(100% - 6px) auto auto":" 100% 100% auto auto"):"".concat(this.overlap?"calc(100% - 6px)  auto auto calc(100% - 6px)":" 100%  auto auto 100%"):this.left?"".concat(this.overlap?"auto calc(100% - 6px) calc(100% - 6px)  auto":" auto 100% 100%  auto"):"".concat(this.overlap?"auto auto calc(100% - 6px) calc(100% - 6px)  ":" auto  auto 100% 100%  ")}},maxValue:function(){return this.max&&"number"==typeof this.value?this.value>this.max?this.max+"+":void 0:this.value}},mounted:function(){},methods:{}},s=(o(481),o(3)),u=Object(s.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fl-badge"},[this._t("default"),this._v(" "),this.isDot?a("sup",{staticClass:"fl-badge-dot",style:this.overlapPosition}):a("sup",[this._v(this._s(this.maxValue))])],2)}),[],!1,null,null,null);a.default=u.exports}}]);