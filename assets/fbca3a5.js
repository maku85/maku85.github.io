(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,6,7],{354:function(t,o,e){var content=e(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("2b290b8a",content,!0,{sourceMap:!1})},355:function(t,o,e){var content=e(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("6599be04",content,!0,{sourceMap:!1})},356:function(t,o,e){var content=e(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("6e847f96",content,!0,{sourceMap:!1})},357:function(t,o,e){var content=e(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("e17ecca2",content,!0,{sourceMap:!1})},358:function(t,o,e){"use strict";e(5),e(8),e(13),e(14);var r=e(2),n=(e(26),e(9),e(39),e(217),e(34),e(17),e(32),e(25),e(48),e(216),e(0)),c=e(68),l=e(1);function d(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(o){Object(r.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,o){return t[o]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,o){return t["offset"+Object(l.r)(o)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,o){return t["order"+Object(l.r)(o)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(x)};function k(t,o,e){var r=t;if(null!=e&&!1!==e){if(o){var n=o.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==e&&!0!==e?(r+="-".concat(e)).toLowerCase():r.toLowerCase()}}var w=new Map;o.a=n.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,o){var e=o.props,data=o.data,n=o.children,l=(o.parent,"");for(var d in e)l+=String(e[d]);var f=w.get(l);return f||function(){var t,o;for(o in f=[],y)y[o].forEach((function(t){var r=e[t],n=k(o,t,r);n&&f.push(n)}));var n=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!n||!e.cols},Object(r.a)(t,"col-".concat(e.cols),e.cols),Object(r.a)(t,"offset-".concat(e.offset),e.offset),Object(r.a)(t,"order-".concat(e.order),e.order),Object(r.a)(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),w.set(l,f)}(),t(e.tag,Object(c.a)(data,{class:f}),n)}})},359:function(t,o,e){"use strict";var r=e(2),n=(e(40),e(25),e(9),e(39),e(217),e(34),e(17),e(32),e(5),e(8),e(13),e(14),e(216),e(0)),c=e(68),l=e(1);function d(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(o){Object(r.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,o){return v.reduce((function(e,r){return e[t+Object(l.r)(r)]=o(),e}),{})}var x=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=h("align",(function(){return{type:String,default:null,validator:x}})),k=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:k}})),_=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},z=h("alignContent",(function(){return{type:String,default:null,validator:_}})),O={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(z)},j={align:"align",justify:"justify",alignContent:"align-content"};function C(t,o,e){var r=j[t];if(null!=e){if(o){var n=o.replace(t,"");r+="-".concat(n)}return(r+="-".concat(e)).toLowerCase()}}var S=new Map;o.a=n.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},y),{},{justify:{type:String,default:null,validator:k}},w),{},{alignContent:{type:String,default:null,validator:_}},z),render:function(t,o){var e=o.props,data=o.data,n=o.children,l="";for(var d in e)l+=String(e[d]);var f=S.get(l);return f||function(){var t,o;for(o in f=[],O)O[o].forEach((function(t){var r=e[t],n=C(o,t,r);n&&f.push(n)}));f.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),S.set(l,f)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:f}),n)}})},369:function(t,o,e){"use strict";e(354)},370:function(t,o,e){var r=e(10)(!1);r.push([t.i,'[data-v-9551ab02]:root{--color:#243746;--bg:#f5f5f5;--light-bg-color:#fff;--font-color:#666;--title-color:#292929;--primary-color:#cd382f;--social-codepen:#000;--social-github:#181717}.dark-mode[data-v-9551ab02]{--color:#ebf4f1;--bg:#111;--light-bg-color:#222;--font-color:#ebf4f1;--title-color:#ebf4f1;--primary-color:#ffb400;--social-codepen:#fff;--social-github:#fff}.btn[data-v-9551ab02]{background:#cd382f;background:var(--primary-color);color:#fff;box-sizing:border-box;border-width:2px;font-size:12px;font-weight:500;padding:.5rem 18px;line-height:1.75;cursor:pointer;text-transform:uppercase;transition:all .15s linear}.btn.active[data-v-9551ab02],.btn[data-v-9551ab02]:active,.btn[data-v-9551ab02]:focus,.btn[data-v-9551ab02]:hover,.open>.btn.dropdown-toggle[data-v-9551ab02]{outline:0!important;box-shadow:none}.btn.disabled[data-v-9551ab02],.btn[data-v-9551ab02]:disabled,.btn[disabled][data-v-9551ab02]{opacity:.5;filter:alpha(opacity=50)}.form-control:focus+.input-group-text[data-v-9551ab02]{border:1px solid #000}.form-control[data-v-9551ab02]{padding:15px 30px;height:auto;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;border:1px solid #ddd;border-radius:4px;color:#666;font-size:14px;transition:background-color .3s ease 0s;padding-right:0!important;transition:all .3s linear;padding:7px 12px;height:40px}.form-control[data-v-9551ab02],.form-control[data-v-9551ab02]:focus{background-color:#fff;box-shadow:none}.form-control[data-v-9551ab02]:focus{border:1px solid #ccc;outline:0!important}textarea.form-control[data-v-9551ab02]{padding:10px 18px;height:auto}.form-group[data-v-9551ab02]{position:relative}.brand[data-v-9551ab02],.h1[data-v-9551ab02],.h2[data-v-9551ab02],.h3[data-v-9551ab02],.h4[data-v-9551ab02],.h5[data-v-9551ab02],.h6[data-v-9551ab02],.navbar[data-v-9551ab02],.td-name[data-v-9551ab02],a[data-v-9551ab02],button[data-v-9551ab02],h1[data-v-9551ab02],h2[data-v-9551ab02],h3[data-v-9551ab02],h4[data-v-9551ab02],h5[data-v-9551ab02],h6[data-v-9551ab02],input[data-v-9551ab02],p[data-v-9551ab02],select[data-v-9551ab02],td[data-v-9551ab02],textarea[data-v-9551ab02]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Montserrat","Helvetica",Arial,sans-serif;font-weight:300}body[data-v-9551ab02]{background-color:#f5f5f5;background-color:var(--bg);color:#666;color:var(--font-color);font-size:14px;transition:background-color .3s}.v-main[data-v-9551ab02]{height:100vh}a[data-v-9551ab02]{color:#cd382f;color:var(--primary-color)}a[data-v-9551ab02]:focus,a[data-v-9551ab02]:hover{color:var(--secondary-color);text-decoration:none}hr[data-v-9551ab02]{border-color:#cd382f;border-color:var(--primary-color)}a[data-v-9551ab02]:active,a[data-v-9551ab02]:focus,button[data-v-9551ab02]::-moz-focus-inner,input[type=button][data-v-9551ab02]::-moz-focus-inner,input[type=file]>input[type=button][data-v-9551ab02]::-moz-focus-inner,input[type=reset][data-v-9551ab02]::-moz-focus-inner,input[type=submit][data-v-9551ab02]::-moz-focus-inner,select[data-v-9551ab02]::-moz-focus-inner{outline:0}[data-v-9551ab02]::-webkit-scrollbar{height:8px;width:8px}[data-v-9551ab02]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:2px}[data-v-9551ab02]::-webkit-scrollbar-thumb{background:#888;border-radius:3px}[data-v-9551ab02]::-webkit-scrollbar-thumb:hover{background:#555}.social-icon[data-v-9551ab02]{font-size:32px!important;transition:color 1s}.social-icon[data-v-9551ab02]:hover{color:#cd382f;color:var(--primary-color)}.social-linkedin[data-v-9551ab02]{color:#0a66c2!important}.social-github[data-v-9551ab02]{color:#181717!important;color:var(--social-github)!important}.social-codepen[data-v-9551ab02]{color:#000!important;color:var(--social-codepen)!important}.nuxt-content h1[data-v-9551ab02]{margin:13px 0 20px}.nuxt-content h3[data-v-9551ab02]{margin-top:1.5em;margin-bottom:.8em}.nuxt-content img[data-v-9551ab02]{border-radius:5px;margin-bottom:20px}.nuxt-content strong[data-v-9551ab02]{font-weight:700}.nuxt-content ul[data-v-9551ab02]{margin-left:1em}.nuxt-content blockquote[data-v-9551ab02]{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:1em 10px;quotes:"“" "”" "‘" "’"}.nuxt-content blockquote p[data-v-9551ab02]{margin:0}.nuxt-content .nuxt-content-highlight[data-v-9551ab02]{margin-bottom:2em}.primary-color[data-v-9551ab02]{color:#cd382f;color:var(--primary-color)}.img-circle[data-v-9551ab02]{border-radius:50%!important}.card[data-v-9551ab02]{padding:25px 30px;background-color:#fff;box-shadow:0 5px 20px 0 rgba(69,67,96,.1);border-radius:20px}.social-links ul[data-v-9551ab02]{padding-left:0;list-style:none}.social-links li[data-v-9551ab02]{display:inline-block;margin-right:5px}.mdi-facebook[data-v-9551ab02]{color:#1877f2}.mdi-twitter[data-v-9551ab02]{color:#1da1f2}.mdi-linkedin[data-v-9551ab02]{color:#0a66c2}.mdi-telegram[data-v-9551ab02]{color:#26a5e4}.mdi-whatsapp[data-v-9551ab02]{color:#25d366}',""]),t.exports=r},371:function(t,o,e){"use strict";e(355)},372:function(t,o,e){var r=e(10)(!1);r.push([t.i,':root{--color:#243746;--bg:#f5f5f5;--light-bg-color:#fff;--font-color:#666;--title-color:#292929;--primary-color:#cd382f;--social-codepen:#000;--social-github:#181717}.dark-mode{--color:#ebf4f1;--bg:#111;--light-bg-color:#222;--font-color:#ebf4f1;--title-color:#ebf4f1;--primary-color:#ffb400;--social-codepen:#fff;--social-github:#fff}.btn{background:#cd382f;background:var(--primary-color);color:#fff;box-sizing:border-box;border-width:2px;font-size:12px;font-weight:500;padding:.5rem 18px;line-height:1.75;cursor:pointer;text-transform:uppercase;transition:all .15s linear}.btn.active,.btn:active,.btn:focus,.btn:hover,.open>.btn.dropdown-toggle{outline:0!important;box-shadow:none}.btn.disabled,.btn:disabled,.btn[disabled]{opacity:.5;filter:alpha(opacity=50)}.form-control:focus+.input-group-text{border:1px solid #000}.form-control{padding:15px 30px;height:auto;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;border:1px solid #ddd;border-radius:4px;color:#666;font-size:14px;transition:background-color .3s ease 0s;padding-right:0!important;transition:all .3s linear;padding:7px 12px;height:40px}.form-control,.form-control:focus{background-color:#fff;box-shadow:none}.form-control:focus{border:1px solid #ccc;outline:0!important}textarea.form-control{padding:10px 18px;height:auto}.form-group{position:relative}.brand,.h1,.h2,.h3,.h4,.h5,.h6,.navbar,.td-name,a,button,h1,h2,h3,h4,h5,h6,input,p,select,td,textarea{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Montserrat","Helvetica",Arial,sans-serif;font-weight:300}body{background-color:#f5f5f5;background-color:var(--bg);color:#666;color:var(--font-color);font-size:14px;transition:background-color .3s}.v-main{height:100vh}a{color:#cd382f;color:var(--primary-color)}a:focus,a:hover{color:var(--secondary-color);text-decoration:none}hr{border-color:#cd382f;border-color:var(--primary-color)}a:active,a:focus,button::-moz-focus-inner,input[type=button]::-moz-focus-inner,input[type=file]>input[type=button]::-moz-focus-inner,input[type=reset]::-moz-focus-inner,input[type=submit]::-moz-focus-inner,select::-moz-focus-inner{outline:0}::-webkit-scrollbar{height:8px;width:8px}::-webkit-scrollbar-track{background:#f1f1f1;border-radius:2px}::-webkit-scrollbar-thumb{background:#888;border-radius:3px}::-webkit-scrollbar-thumb:hover{background:#555}.social-icon{font-size:32px!important;transition:color 1s}.social-icon:hover{color:#cd382f;color:var(--primary-color)}.social-linkedin{color:#0a66c2!important}.social-github{color:#181717!important;color:var(--social-github)!important}.social-codepen{color:#000!important;color:var(--social-codepen)!important}.nuxt-content h1{margin:13px 0 20px}.nuxt-content h3{margin-top:1.5em;margin-bottom:.8em}.nuxt-content img{border-radius:5px;margin-bottom:20px}.nuxt-content strong{font-weight:700}.nuxt-content ul{margin-left:1em}.nuxt-content blockquote{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:1em 10px;quotes:"“" "”" "‘" "’"}.nuxt-content blockquote p{margin:0}.nuxt-content .nuxt-content-highlight{margin-bottom:2em}.primary-color{color:#cd382f;color:var(--primary-color)}.img-circle{border-radius:50%!important}.card{padding:25px 30px;background-color:#fff;box-shadow:0 5px 20px 0 rgba(69,67,96,.1);border-radius:20px}.blog-nav{padding:10px;transition:all .125s ease-in-out 0s;display:block;border-radius:3px}.blog-nav span{display:block;color:#666;font-size:14px;text-transform:uppercase;font-weight:500;letter-spacing:.17em}.blog-nav p{font-size:16px;color:#292929;margin:0;font-family:"Josefin Sans",sans-serif;font-weight:600}',""]),t.exports=r},373:function(t,o,e){"use strict";e(356)},374:function(t,o,e){var r=e(10)(!1);r.push([t.i,'[data-v-498a8b6e]:root{--color:#243746;--bg:#f5f5f5;--light-bg-color:#fff;--font-color:#666;--title-color:#292929;--primary-color:#cd382f;--social-codepen:#000;--social-github:#181717}.dark-mode[data-v-498a8b6e]{--color:#ebf4f1;--bg:#111;--light-bg-color:#222;--font-color:#ebf4f1;--title-color:#ebf4f1;--primary-color:#ffb400;--social-codepen:#fff;--social-github:#fff}.btn[data-v-498a8b6e]{background:#cd382f;background:var(--primary-color);color:#fff;box-sizing:border-box;border-width:2px;font-size:12px;font-weight:500;padding:.5rem 18px;line-height:1.75;cursor:pointer;text-transform:uppercase;transition:all .15s linear}.btn.active[data-v-498a8b6e],.btn[data-v-498a8b6e]:active,.btn[data-v-498a8b6e]:focus,.btn[data-v-498a8b6e]:hover,.open>.btn.dropdown-toggle[data-v-498a8b6e]{outline:0!important;box-shadow:none}.btn.disabled[data-v-498a8b6e],.btn[data-v-498a8b6e]:disabled,.btn[disabled][data-v-498a8b6e]{opacity:.5;filter:alpha(opacity=50)}.form-control:focus+.input-group-text[data-v-498a8b6e]{border:1px solid #000}.form-control[data-v-498a8b6e]{padding:15px 30px;height:auto;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;border:1px solid #ddd;border-radius:4px;color:#666;font-size:14px;transition:background-color .3s ease 0s;padding-right:0!important;transition:all .3s linear;padding:7px 12px;height:40px}.form-control[data-v-498a8b6e],.form-control[data-v-498a8b6e]:focus{background-color:#fff;box-shadow:none}.form-control[data-v-498a8b6e]:focus{border:1px solid #ccc;outline:0!important}textarea.form-control[data-v-498a8b6e]{padding:10px 18px;height:auto}.form-group[data-v-498a8b6e]{position:relative}.brand[data-v-498a8b6e],.h1[data-v-498a8b6e],.h2[data-v-498a8b6e],.h3[data-v-498a8b6e],.h4[data-v-498a8b6e],.h5[data-v-498a8b6e],.h6[data-v-498a8b6e],.navbar[data-v-498a8b6e],.td-name[data-v-498a8b6e],a[data-v-498a8b6e],button[data-v-498a8b6e],h1[data-v-498a8b6e],h2[data-v-498a8b6e],h3[data-v-498a8b6e],h4[data-v-498a8b6e],h5[data-v-498a8b6e],h6[data-v-498a8b6e],input[data-v-498a8b6e],p[data-v-498a8b6e],select[data-v-498a8b6e],td[data-v-498a8b6e],textarea[data-v-498a8b6e]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Montserrat","Helvetica",Arial,sans-serif;font-weight:300}body[data-v-498a8b6e]{background-color:#f5f5f5;background-color:var(--bg);color:#666;color:var(--font-color);font-size:14px;transition:background-color .3s}.v-main[data-v-498a8b6e]{height:100vh}a[data-v-498a8b6e]{color:#cd382f;color:var(--primary-color)}a[data-v-498a8b6e]:focus,a[data-v-498a8b6e]:hover{color:var(--secondary-color);text-decoration:none}hr[data-v-498a8b6e]{border-color:#cd382f;border-color:var(--primary-color)}a[data-v-498a8b6e]:active,a[data-v-498a8b6e]:focus,button[data-v-498a8b6e]::-moz-focus-inner,input[type=button][data-v-498a8b6e]::-moz-focus-inner,input[type=file]>input[type=button][data-v-498a8b6e]::-moz-focus-inner,input[type=reset][data-v-498a8b6e]::-moz-focus-inner,input[type=submit][data-v-498a8b6e]::-moz-focus-inner,select[data-v-498a8b6e]::-moz-focus-inner{outline:0}[data-v-498a8b6e]::-webkit-scrollbar{height:8px;width:8px}[data-v-498a8b6e]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:2px}[data-v-498a8b6e]::-webkit-scrollbar-thumb{background:#888;border-radius:3px}[data-v-498a8b6e]::-webkit-scrollbar-thumb:hover{background:#555}.social-icon[data-v-498a8b6e]{font-size:32px!important;transition:color 1s}.social-icon[data-v-498a8b6e]:hover{color:#cd382f;color:var(--primary-color)}.social-linkedin[data-v-498a8b6e]{color:#0a66c2!important}.social-github[data-v-498a8b6e]{color:#181717!important;color:var(--social-github)!important}.social-codepen[data-v-498a8b6e]{color:#000!important;color:var(--social-codepen)!important}.nuxt-content h1[data-v-498a8b6e]{margin:13px 0 20px}.nuxt-content h3[data-v-498a8b6e]{margin-top:1.5em;margin-bottom:.8em}.nuxt-content img[data-v-498a8b6e]{border-radius:5px;margin-bottom:20px}.nuxt-content strong[data-v-498a8b6e]{font-weight:700}.nuxt-content ul[data-v-498a8b6e]{margin-left:1em}.nuxt-content blockquote[data-v-498a8b6e]{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:1em 10px;quotes:"“" "”" "‘" "’"}.nuxt-content blockquote p[data-v-498a8b6e]{margin:0}.nuxt-content .nuxt-content-highlight[data-v-498a8b6e]{margin-bottom:2em}.primary-color[data-v-498a8b6e]{color:#cd382f;color:var(--primary-color)}.img-circle[data-v-498a8b6e]{border-radius:50%!important}.card[data-v-498a8b6e]{padding:25px 30px;background-color:#fff;box-shadow:0 5px 20px 0 rgba(69,67,96,.1);border-radius:20px}.tags[data-v-498a8b6e]{display:flex;flex-wrap:wrap}.tags h5[data-v-498a8b6e]{font-weight:700;line-height:1.618;color:#35404e;margin:0}.tags a[data-v-498a8b6e]{background-color:#eee;color:#515c6a;padding:5px 10px;margin-bottom:5px;margin-right:5px;border-radius:5px;text-transform:uppercase;font-size:14px;transition:all 1s}.tags a[data-v-498a8b6e]:hover{background-color:#cd382f;color:#fff}',""]),t.exports=r},375:function(t,o,e){"use strict";e(357)},376:function(t,o,e){var r=e(10)(!1);r.push([t.i,'[data-v-3bb922e3]:root{--color:#243746;--bg:#f5f5f5;--light-bg-color:#fff;--font-color:#666;--title-color:#292929;--primary-color:#cd382f;--social-codepen:#000;--social-github:#181717}.dark-mode[data-v-3bb922e3]{--color:#ebf4f1;--bg:#111;--light-bg-color:#222;--font-color:#ebf4f1;--title-color:#ebf4f1;--primary-color:#ffb400;--social-codepen:#fff;--social-github:#fff}.btn[data-v-3bb922e3]{background:#cd382f;background:var(--primary-color);color:#fff;box-sizing:border-box;border-width:2px;font-size:12px;font-weight:500;padding:.5rem 18px;line-height:1.75;cursor:pointer;text-transform:uppercase;transition:all .15s linear}.btn.active[data-v-3bb922e3],.btn[data-v-3bb922e3]:active,.btn[data-v-3bb922e3]:focus,.btn[data-v-3bb922e3]:hover,.open>.btn.dropdown-toggle[data-v-3bb922e3]{outline:0!important;box-shadow:none}.btn.disabled[data-v-3bb922e3],.btn[data-v-3bb922e3]:disabled,.btn[disabled][data-v-3bb922e3]{opacity:.5;filter:alpha(opacity=50)}.form-control:focus+.input-group-text[data-v-3bb922e3]{border:1px solid #000}.form-control[data-v-3bb922e3]{padding:15px 30px;height:auto;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;border:1px solid #ddd;border-radius:4px;color:#666;font-size:14px;transition:background-color .3s ease 0s;padding-right:0!important;transition:all .3s linear;padding:7px 12px;height:40px}.form-control[data-v-3bb922e3],.form-control[data-v-3bb922e3]:focus{background-color:#fff;box-shadow:none}.form-control[data-v-3bb922e3]:focus{border:1px solid #ccc;outline:0!important}textarea.form-control[data-v-3bb922e3]{padding:10px 18px;height:auto}.form-group[data-v-3bb922e3]{position:relative}.brand[data-v-3bb922e3],.h1[data-v-3bb922e3],.h2[data-v-3bb922e3],.h3[data-v-3bb922e3],.h4[data-v-3bb922e3],.h5[data-v-3bb922e3],.h6[data-v-3bb922e3],.navbar[data-v-3bb922e3],.td-name[data-v-3bb922e3],a[data-v-3bb922e3],button[data-v-3bb922e3],h1[data-v-3bb922e3],h2[data-v-3bb922e3],h3[data-v-3bb922e3],h4[data-v-3bb922e3],h5[data-v-3bb922e3],h6[data-v-3bb922e3],input[data-v-3bb922e3],p[data-v-3bb922e3],select[data-v-3bb922e3],td[data-v-3bb922e3],textarea[data-v-3bb922e3]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Montserrat","Helvetica",Arial,sans-serif;font-weight:300}body[data-v-3bb922e3]{background-color:#f5f5f5;background-color:var(--bg);color:#666;color:var(--font-color);font-size:14px;transition:background-color .3s}.v-main[data-v-3bb922e3]{height:100vh}a[data-v-3bb922e3]{color:#cd382f;color:var(--primary-color)}a[data-v-3bb922e3]:focus,a[data-v-3bb922e3]:hover{color:var(--secondary-color);text-decoration:none}hr[data-v-3bb922e3]{border-color:#cd382f;border-color:var(--primary-color)}a[data-v-3bb922e3]:active,a[data-v-3bb922e3]:focus,button[data-v-3bb922e3]::-moz-focus-inner,input[type=button][data-v-3bb922e3]::-moz-focus-inner,input[type=file]>input[type=button][data-v-3bb922e3]::-moz-focus-inner,input[type=reset][data-v-3bb922e3]::-moz-focus-inner,input[type=submit][data-v-3bb922e3]::-moz-focus-inner,select[data-v-3bb922e3]::-moz-focus-inner{outline:0}[data-v-3bb922e3]::-webkit-scrollbar{height:8px;width:8px}[data-v-3bb922e3]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:2px}[data-v-3bb922e3]::-webkit-scrollbar-thumb{background:#888;border-radius:3px}[data-v-3bb922e3]::-webkit-scrollbar-thumb:hover{background:#555}.social-icon[data-v-3bb922e3]{font-size:32px!important;transition:color 1s}.social-icon[data-v-3bb922e3]:hover{color:#cd382f;color:var(--primary-color)}.social-linkedin[data-v-3bb922e3]{color:#0a66c2!important}.social-github[data-v-3bb922e3]{color:#181717!important;color:var(--social-github)!important}.social-codepen[data-v-3bb922e3]{color:#000!important;color:var(--social-codepen)!important}.nuxt-content h1[data-v-3bb922e3]{margin:13px 0 20px}.nuxt-content h3[data-v-3bb922e3]{margin-top:1.5em;margin-bottom:.8em}.nuxt-content img[data-v-3bb922e3]{border-radius:5px;margin-bottom:20px}.nuxt-content strong[data-v-3bb922e3]{font-weight:700}.nuxt-content ul[data-v-3bb922e3]{margin-left:1em}.nuxt-content blockquote[data-v-3bb922e3]{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:1em 10px;quotes:"“" "”" "‘" "’"}.nuxt-content blockquote p[data-v-3bb922e3]{margin:0}.nuxt-content .nuxt-content-highlight[data-v-3bb922e3]{margin-bottom:2em}.primary-color[data-v-3bb922e3]{color:#cd382f;color:var(--primary-color)}.img-circle[data-v-3bb922e3]{border-radius:50%!important}.card[data-v-3bb922e3]{padding:25px 30px;background-color:#fff;box-shadow:0 5px 20px 0 rgba(69,67,96,.1);border-radius:20px}.recent-posts h6[data-v-3bb922e3]{font-size:16px;font-weight:700;color:#292929}.recent-posts p[data-v-3bb922e3]{margin-top:5px;font-size:14px;color:#666;opacity:.8}.recent-posts .article-image-preview[data-v-3bb922e3]{border-radius:5px}',""]),t.exports=r},381:function(t,o,e){var content=e(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("52f6e5dc",content,!0,{sourceMap:!1})},386:function(t,o,e){"use strict";e.r(o);var r={props:{article:{type:Object,default:function(){}}},computed:{getArticleUrl:function(){return"".concat("https://www.maurocunsolo.com").concat(this.$route.fullPath)}}},n=(e(369),e(20)),c=e(35),l=e.n(c),d=e(148),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"social-links"},[e("ul",[e("li",[t._v("Share:")]),t._v(" "),e("li",[e("ShareNetwork",{attrs:{network:"facebook",url:t.getArticleUrl,title:t.article.title,description:t.article.description,hashtags:t.article.tags}},[e("v-icon",[t._v("mdi-facebook")])],1)],1),t._v(" "),e("li",[e("ShareNetwork",{attrs:{network:"twitter",url:t.getArticleUrl,title:t.article.title,hashtags:t.article.tags}},[e("v-icon",[t._v("mdi-twitter")])],1)],1),t._v(" "),e("li",[e("ShareNetwork",{attrs:{network:"linkedin",url:t.getArticleUrl}},[e("v-icon",[t._v("mdi-linkedin")])],1)],1),t._v(" "),e("li",[e("ShareNetwork",{attrs:{network:"telegram",url:t.getArticleUrl,title:t.article.title,description:t.article.description}},[e("v-icon",[t._v("mdi-telegram")])],1)],1),t._v(" "),e("li",[e("ShareNetwork",{attrs:{network:"whatsapp",url:t.getArticleUrl,title:t.article.title,description:t.article.description}},[e("v-icon",[t._v("mdi-whatsapp")])],1)],1)])])}),[],!1,null,"9551ab02",null);o.default=component.exports;l()(component,{VIcon:d.a})},387:function(t,o,e){"use strict";e.r(o);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},n=(e(371),e(20)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[t.prev?e("NuxtLink",{staticClass:"blog-nav",attrs:{to:t.localePath({name:"blog-slug",params:{slug:t.prev.slug}})}},[e("span",[t._v(t._s(t.$t("Previous")))]),t._v(" "),e("p",[t._v(t._s(t.prev.title))])]):t._e()],1),t._v(" "),e("div",{staticClass:"col-md-6"},[t.next?e("NuxtLink",{staticClass:"blog-nav text-right",attrs:{to:t.localePath({name:"blog-slug",params:{slug:t.next.slug}})}},[e("span",[t._v(t._s(t.$t("Next")))]),t._v(" "),e("p",[t._v(t._s(t.next.title))])]):t._e()],1)])}),[],!1,null,null,null);o.default=component.exports},388:function(t,o,e){"use strict";e.r(o);var r={props:{tags:{type:[],default:function(){return[]}}}},n=(e(373),e(20)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card mb-3"},[e("h5",[t._v("Tags")]),t._v(" "),e("div",{staticClass:"tags mt-3"},t._l(t.tags.split(","),(function(o){return e("NuxtLink",{key:o,staticClass:"tag",attrs:{to:t.localePath("/blog?category="+o.trim())}},[t._v("#"+t._s(o.trim()))])})),1)])}),[],!1,null,"498a8b6e",null);o.default=component.exports},389:function(t,o,e){"use strict";e.r(o);var r={props:{articles:{type:[],default:function(){return[]}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long",day:"numeric"})}}},n=(e(375),e(20)),c=e(35),l=e.n(c),d=e(121),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card"},[e("h5",[t._v(t._s(t.$t("Recent posts")))]),t._v(" "),e("div",{staticClass:"recent-posts mt-3"},t._l(t.articles,(function(article){return e("NuxtLink",{key:article.id,staticClass:"d-flex flex-row mb-3",attrs:{to:t.localePath("/blog/"+article.slug)}},[e("div",[e("v-img",{staticClass:"article-image-preview",attrs:{height:"60",width:"60",src:article.img||"https://source.unsplash.com/random"}})],1),t._v(" "),e("div",{staticClass:"ml-2"},[e("h6",[t._v(t._s(article.title))]),t._v(" "),e("p",[t._v(t._s(t.formatDate(article.date)))])])])})),1)])}),[],!1,null,"3bb922e3",null);o.default=component.exports;l()(component,{VImg:d.a})},404:function(t,o,e){"use strict";e(381)},405:function(t,o,e){var r=e(10)(!1);r.push([t.i,'[data-v-2964ec1c]:root{--color:#243746;--bg:#f5f5f5;--light-bg-color:#fff;--font-color:#666;--title-color:#292929;--primary-color:#cd382f;--social-codepen:#000;--social-github:#181717}.dark-mode[data-v-2964ec1c]{--color:#ebf4f1;--bg:#111;--light-bg-color:#222;--font-color:#ebf4f1;--title-color:#ebf4f1;--primary-color:#ffb400;--social-codepen:#fff;--social-github:#fff}.btn[data-v-2964ec1c]{background:#cd382f;background:var(--primary-color);color:#fff;box-sizing:border-box;border-width:2px;font-size:12px;font-weight:500;padding:.5rem 18px;line-height:1.75;cursor:pointer;text-transform:uppercase;transition:all .15s linear}.btn.active[data-v-2964ec1c],.btn[data-v-2964ec1c]:active,.btn[data-v-2964ec1c]:focus,.btn[data-v-2964ec1c]:hover,.open>.btn.dropdown-toggle[data-v-2964ec1c]{outline:0!important;box-shadow:none}.btn.disabled[data-v-2964ec1c],.btn[data-v-2964ec1c]:disabled,.btn[disabled][data-v-2964ec1c]{opacity:.5;filter:alpha(opacity=50)}.form-control:focus+.input-group-text[data-v-2964ec1c]{border:1px solid #000}.form-control[data-v-2964ec1c]{padding:15px 30px;height:auto;display:block;width:100%;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;border:1px solid #ddd;border-radius:4px;color:#666;font-size:14px;transition:background-color .3s ease 0s;padding-right:0!important;transition:all .3s linear;padding:7px 12px;height:40px}.form-control[data-v-2964ec1c],.form-control[data-v-2964ec1c]:focus{background-color:#fff;box-shadow:none}.form-control[data-v-2964ec1c]:focus{border:1px solid #ccc;outline:0!important}textarea.form-control[data-v-2964ec1c]{padding:10px 18px;height:auto}.form-group[data-v-2964ec1c]{position:relative}.brand[data-v-2964ec1c],.h1[data-v-2964ec1c],.h2[data-v-2964ec1c],.h3[data-v-2964ec1c],.h4[data-v-2964ec1c],.h5[data-v-2964ec1c],.h6[data-v-2964ec1c],.navbar[data-v-2964ec1c],.td-name[data-v-2964ec1c],a[data-v-2964ec1c],button[data-v-2964ec1c],h1[data-v-2964ec1c],h2[data-v-2964ec1c],h3[data-v-2964ec1c],h4[data-v-2964ec1c],h5[data-v-2964ec1c],h6[data-v-2964ec1c],input[data-v-2964ec1c],p[data-v-2964ec1c],select[data-v-2964ec1c],td[data-v-2964ec1c],textarea[data-v-2964ec1c]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Montserrat","Helvetica",Arial,sans-serif;font-weight:300}body[data-v-2964ec1c]{background-color:#f5f5f5;background-color:var(--bg);color:#666;color:var(--font-color);font-size:14px;transition:background-color .3s}.v-main[data-v-2964ec1c]{height:100vh}a[data-v-2964ec1c]{color:#cd382f;color:var(--primary-color)}a[data-v-2964ec1c]:focus,a[data-v-2964ec1c]:hover{color:var(--secondary-color);text-decoration:none}hr[data-v-2964ec1c]{border-color:#cd382f;border-color:var(--primary-color)}a[data-v-2964ec1c]:active,a[data-v-2964ec1c]:focus,button[data-v-2964ec1c]::-moz-focus-inner,input[type=button][data-v-2964ec1c]::-moz-focus-inner,input[type=file]>input[type=button][data-v-2964ec1c]::-moz-focus-inner,input[type=reset][data-v-2964ec1c]::-moz-focus-inner,input[type=submit][data-v-2964ec1c]::-moz-focus-inner,select[data-v-2964ec1c]::-moz-focus-inner{outline:0}[data-v-2964ec1c]::-webkit-scrollbar{height:8px;width:8px}[data-v-2964ec1c]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:2px}[data-v-2964ec1c]::-webkit-scrollbar-thumb{background:#888;border-radius:3px}[data-v-2964ec1c]::-webkit-scrollbar-thumb:hover{background:#555}.social-icon[data-v-2964ec1c]{font-size:32px!important;transition:color 1s}.social-icon[data-v-2964ec1c]:hover{color:#cd382f;color:var(--primary-color)}.social-linkedin[data-v-2964ec1c]{color:#0a66c2!important}.social-github[data-v-2964ec1c]{color:#181717!important;color:var(--social-github)!important}.social-codepen[data-v-2964ec1c]{color:#000!important;color:var(--social-codepen)!important}.nuxt-content h1[data-v-2964ec1c]{margin:13px 0 20px}.nuxt-content h3[data-v-2964ec1c]{margin-top:1.5em;margin-bottom:.8em}.nuxt-content img[data-v-2964ec1c]{border-radius:5px;margin-bottom:20px}.nuxt-content strong[data-v-2964ec1c]{font-weight:700}.nuxt-content ul[data-v-2964ec1c]{margin-left:1em}.nuxt-content blockquote[data-v-2964ec1c]{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:1em 10px;quotes:"“" "”" "‘" "’"}.nuxt-content blockquote p[data-v-2964ec1c]{margin:0}.nuxt-content .nuxt-content-highlight[data-v-2964ec1c]{margin-bottom:2em}.primary-color[data-v-2964ec1c]{color:#cd382f;color:var(--primary-color)}.img-circle[data-v-2964ec1c]{border-radius:50%!important}.card[data-v-2964ec1c]{padding:25px 30px;background-color:#fff;box-shadow:0 5px 20px 0 rgba(69,67,96,.1);border-radius:20px}.blog-detail[data-v-2964ec1c]{margin-top:50px;margin-bottom:30px;position:relative}.blog-detail .card[data-v-2964ec1c]{background:#fff;background:var(--light-bg-color)}.blog-detail .card .post-content[data-v-2964ec1c]{padding:30px 10px;color:#666;color:var(--font-color)}.post-footer[data-v-2964ec1c]{margin-top:35px}',""]),t.exports=r},423:function(t,o,e){"use strict";e.r(o);var r=e(4),n=e(6),c=(e(47),e(8),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function o(){var e,n,c,article,l,d,f,v,m,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$content,n=t.params,c=t.i18n,o.next=3,e("".concat(c.locale,"/articles"),n.slug).fetch();case 3:return article=o.sent,o.next=6,e("".concat(c.locale,"/articles")).only(["title","slug"]).where({published:!0}).sortBy("date","asc").surround(n.slug).fetch();case 6:return l=o.sent,d=Object(r.a)(l,2),f=d[0],v=d[1],o.next=12,e("".concat(c.locale,"/articles")).only(["title","date","img","slug"]).where({published:!0}).sortBy("date","asc").fetch();case 12:return m=o.sent,h=m.filter((function(t){return t.title!==article.title})),o.abrupt("return",{article:article,recentArticles:h,prev:f,next:v});case 15:case"end":return o.stop()}}),o)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString(this.$i18n.locale,{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{title:"Mauro Cunsolo | ".concat(this.article.title),meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",property:"og:title",content:this.article.title},{hid:"og:description",property:"og:description",content:this.article.description},{hid:"twitter:title",name:"twitter:title",content:this.article.title},{hid:"twitter:description",name:"twitter:description",content:this.article.description}]}}}),l=(e(404),e(20)),d=e(35),f=e.n(d),v=e(358),m=e(345),h=e(148),x=e(121),y=e(359),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{staticClass:"blog-detail"},[e("v-row",[e("v-col",{staticClass:"mb-4 text-center"},[e("h2",[t._v(t._s(t.article.title))])])],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[e("div",{staticClass:"card mb-4"},[e("v-img",{attrs:{src:t.article.img||"https://source.unsplash.com/random"}}),t._v(" "),e("article",{staticClass:"post-content"},[e("p",[t._v(t._s(t.article.description))]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}}),t._v(" "),e("div",{staticClass:"post-footer d-flex flex-wrap"},[e("div",{staticClass:"date flex-grow-1 mt-2"},[e("v-icon",[t._v("mdi-calendar")]),t._v("\n              "+t._s(t.formatDate(t.article.date||t.article.createdAt))+"\n            ")],1),t._v(" "),e("BlogShareLinks",{staticClass:"mt-2",attrs:{article:t.article}})],1)],1)],1),t._v(" "),t.prev||t.next?e("div",{staticClass:"card blog-post-footer"},[e("BlogPrevNext",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next}})],1):t._e()]),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[t.article.tags.length?e("BlogTagsCard",{attrs:{tags:t.article.tags}}):t._e(),t._v(" "),t.recentArticles.length?e("BlogRecentPosts",{attrs:{articles:t.recentArticles}}):t._e()],1)],1)],1)}),[],!1,null,"2964ec1c",null);o.default=component.exports;f()(component,{BlogShareLinks:e(386).default,BlogPrevNext:e(387).default,BlogTagsCard:e(388).default,BlogRecentPosts:e(389).default}),f()(component,{VCol:v.a,VContainer:m.a,VIcon:h.a,VImg:x.a,VRow:y.a})}}]);