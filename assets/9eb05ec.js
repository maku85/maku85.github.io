(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{366:function(t,e,r){"use strict";r(4),r(5),r(9),r(10);var n=r(2),o=(r(19),r(6),r(45),r(226),r(37),r(18),r(34),r(30),r(48),r(225),r(0)),c=r(68),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),h.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},367:function(t,e,r){"use strict";var n=r(2),o=(r(46),r(30),r(6),r(45),r(226),r(37),r(18),r(34),r(4),r(5),r(9),r(10),r(225),r(0)),c=r(68),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(r,n){return r[t+Object(l.u)(n)]=e(),r}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=O("align",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},h=O("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},k=O("alignContent",(function(){return{type:String,default:null,validator:S}})),C={align:Object.keys(w),justify:Object.keys(h),alignContent:Object.keys(k)},P={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,r){var n=P[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var _=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},w),{},{justify:{type:String,default:null,validator:m}},h),{},{alignContent:{type:String,default:null,validator:S}},k),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var f in r)l+=String(r[f]);var d=_.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var n=r[t],o=x(e,t,n);o&&d.push(o)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),_.set(l,d)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},401:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("3db6d9b4",content,!0,{sourceMap:!1})},439:function(t,e,r){"use strict";r(401)},440:function(t,e,r){var n=r(12)(!1);n.push([t.i,"[data-v-3ceaf66b]:root{--color:#243746;--bg:#f5f5f5;--light-bg-color:#fff;--font-color:#666;--title-color:#292929;--primary-color:#cd382f;--social-codepen:#000;--social-github:#181717}.dark-mode[data-v-3ceaf66b]{--color:#ebf4f1;--bg:#111;--light-bg-color:#222;--font-color:#ebf4f1;--title-color:#ebf4f1;--primary-color:#ffb400;--social-codepen:#fff;--social-github:#fff}.works-page[data-v-3ceaf66b]{margin-top:40px}",""]),t.exports=n},469:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(54),{name:"WorksPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("index").fetch();case 3:return n=e.sent,o=n.works,e.abrupt("return",{works:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Mauro Cunsolo | Works"}}}),c=o,l=(r(439),r(26)),f=r(36),d=r.n(f),v=r(161),y=r(58),O=r(366),j=r(362),w=r(133),m=r(367),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"works-page section section-work",attrs:{id:"works"}},[r("v-row",t._l(t.works,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{attrs:{href:e.url,target:"_blank"}},[r("v-img",{attrs:{"lazy-src":e.image||"https://source.unsplash.com/random",src:e.image||"https://source.unsplash.com/random"}}),t._v(" "),r("v-card-title",[t._v(t._s(e.title))]),t._v(" "),r("v-card-text",[t._v(t._s(e.description))])],1)],1)})),1)],1)}),[],!1,null,"3ceaf66b",null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:y.b,VCardTitle:y.c,VCol:O.a,VContainer:j.a,VImg:w.a,VRow:m.a})}}]);