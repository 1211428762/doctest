(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{520:function(e,t,a){"use strict";a.r(t);var l={data:function(){return{showSlot:!1,formItem:[{type:"radio",label:"切换表单项",prop:"radio",list:[{value:0,label:"账号密码"},{value:1,label:"年龄性别"}]},{type:"input",label:"账号",prop:"account"},{type:"password",label:"密码",prop:"password"}]}},methods:{handleEvent:function(e,t,a){switch(e){case"radio":this.radioCase(t,a)}},radioCase:function(e,t){"radio"===t&&(this.showSlot=0!==e)}}},o=a(4),n=Object(o.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("FormList",{attrs:{footer:!1,fieldList:e.formItem},on:{"handle-event":e.handleEvent},scopedSlots:e._u([e.showSlot?{key:"append",fn:function(t){var l=t.templateData;return[a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{model:{value:l.age,callback:function(t){e.$set(l,"age",t)},expression:"templateData.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:l.sex,callback:function(t){e.$set(l,"sex",t)},expression:"templateData.sex"}},[a("el-radio",{attrs:{label:"0"}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1)]}}:null],null,!0)})],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);