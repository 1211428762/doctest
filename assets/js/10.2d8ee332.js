(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{475:function(t,e,n){var r=n(10),o=n(6),i=n(78),c=n(165),s=n(15).f,f=n(77).f,a=n(163),u=n(164),l=n(268),p=n(16),h=n(5),d=n(38).set,g=n(162),v=n(7)("match"),m=o.RegExp,w=m.prototype,b=/a/g,y=/a/g,x=new m(b)!==b,E=l.UNSUPPORTED_Y;if(r&&i("RegExp",!x||E||h((function(){return y[v]=!1,m(b)!=b||m(y)==y||"/a/i"!=m(b,"i")})))){for(var R=function(t,e){var n,r=this instanceof R,o=a(t),i=void 0===e;if(!r&&o&&t.constructor===R&&i)return t;x?o&&!i&&(t=t.source):t instanceof R&&(i&&(e=u.call(t)),t=t.source),E&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var s=c(x?new m(t,e):m(t,e),r?this:w,R);return E&&n&&d(s,{sticky:n}),s},O=function(t){t in R||s(R,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},N=f(m),$=0;N.length>$;)O(N[$++]);w.constructor=R,R.prototype=w,p(o,"RegExp",R)}g("RegExp")},479:function(t,e,n){},482:function(t,e,n){"use strict";n(479)},507:function(t,e,n){"use strict";n.r(e);n(22),n(166),n(161),n(26),n(23),n(475),n(49),n(76),n(267),n(107);var r=function(t,e){return t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},o=function(t,e){r(t,e)||(t.className+=" "+e)},i=function(t,e){if(r(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}},c={name:"viewport11",data:function(){return{}},props:{element:[Object,Array],direction:{type:String,default:"bottom",validator:function(t){return-1!==["left","bottom","right","free"].indexOf(t)}}},components:{},mounted:function(){var t=this,e=this.element?[]:this.$refs.viewport.children,n={left:"fadeLeft",right:"fadeRight",bottom:"fadeTop",free:"left-right-in"};Array.from(e,(function(e){return o(e,n[t.direction])})),this.isViewport(e)},methods:{isViewport:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fadeIn",n=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?o(t.target,e):i(t.target,e)}))}),{threshold:1});Array.from(t||[],(function(t){return n.observe(t)})),this.$once("hook:beforeDestroy",(function(){Array.from(t||[],(function(t){return n.unobserve(t)}))}))}}},s=(n(482),n(3)),f=Object(s.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"viewport",staticClass:"viewport"},[this._t("default")],2)}),[],!1,null,"c24c9b10",null);e.default=f.exports}}]);