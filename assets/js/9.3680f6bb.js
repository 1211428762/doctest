(window.webpackJsonp=window.webpackJsonp||[]).push([[9,25],{472:function(t,e,o){"use strict";o.r(e);var l={name:"",data:function(){return{}},props:{type:String,plain:Boolean,disabled:Boolean},mounted:function(){console.log("document---\x3e",document),document&&(document.addEventListener("mousedown",(function(t){var e=t.target;e.style.setProperty("--offsetx",t.offsetX+"px"),e.style.setProperty("--offsety",t.offsetY+"px"),e.parentElement&&(e.parentElement.style.setProperty("--target-width",e.clientWidth),e.parentElement.style.setProperty("--target-height",e.clientHeight),e.parentElement.style.setProperty("--target-left",e.offsetLeft),e.parentElement.style.setProperty("--target-top",e.offsetTop))})),console.log("loading---success"))},methods:{clickEvt:function(t){this.$emit("click",t)}}},n=o(3),s=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"fl-btn",class:[t.type?"fl-btn-"+t.type:"",{"is-plain":t.plain,"is-disabled":t.disabled}],attrs:{disabled:t.disabled,role:"button"},on:{click:t.clickEvt}},[t._t("default",[t._v("测试")])],2)}),[],!1,null,"c72923b4",null);e.default=s.exports},474:function(t,e,o){},478:function(t,e,o){"use strict";o(474)},480:function(t,e,o){"use strict";o.r(e);var l=o(472),n={name:"",data:function(){return{}},props:{show:Boolean,width:{type:String,default:"400px"},clickOverlayClose:{type:Boolean,default:!0},closeIcon:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0}},components:{fbutton:l.default},watch:{},mounted:function(){},methods:{close:function(){console.log(this.clickOverlayClose),this.clickOverlayClose&&this.$emit("update:show",!1)},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}}},s=(o(478),o(3)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fl-dialog-fade"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fl-dialog",class:[{flDialogFade:t.show,flDialogOverlay:t.showOverlay}],attrs:{role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[o("section",{staticClass:"fl-dialog-content",style:{width:t.width}},[o("header",{staticClass:"fl-dialog-header"},[t._t("header",[t._v("标题")]),t._v(" "),t.closeIcon?o("span",{staticClass:"fl-dialog-close",on:{click:t.close}},[t._v("×")]):t._e()],2),t._v(" "),o("div",{staticClass:"fl-dialog-body"},[t._t("default")],2),t._v(" "),o("footer",{staticClass:"fl-dialog-footer"},[t._t("footer",[o("div",{staticClass:"fl-dialog-footer_button"},[o("fbutton",{attrs:{plain:""},on:{click:t.close}},[t._v("取消")]),t._v(" "),o("fbutton",{on:{click:t.close}},[t._v("确定")])],1)])],2)])])])}),[],!1,null,null,null);e.default=a.exports}}]);