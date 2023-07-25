import{u as N}from"./asyncData.d69f996d.js";import{d as x,g as A,q as B,h as I,o,c as d,F as g,r as k,f as i,w as t,b as e,l as L,e as S,m as V,i as n,V as q,j as p,t as f,p as j,s as D,k as P}from"./entry.a93f6831.js";import{V as z}from"./VIcon.e7655733.js";import{V as $}from"./VBtn.31786e05.js";import{_ as w}from"./index.b9e4753c.js";import{b as C,V as h,a as b}from"./VRow.58a53774.js";import{_ as E}from"./Title.vue.8e426cec.js";import{_ as F}from"./nuxt-img.02d8dd42.js";import O from"./ContentList.7f1e9aaa.js";import"./ContentQuery.a8d81d6c.js";const R={class:"social"},T=x({__name:"SocialLinks",async setup(a){let c,l;const{data:s}=([c,l]=A(()=>N("/",()=>B("/").findOne())),c=await c,l(),c),u=I(()=>{var _;return((_=s==null?void 0:s.value)==null?void 0:_.socials)||[]});return(_,v)=>(o(),d("div",R,[(o(!0),d(g,null,k(S(u),(r,m)=>(o(),i($,{key:m,icon:"",small:"",flat:"",color:"transparent",href:r.link,rel:"noreferrer",class:"social__btn",target:"_blank","aria-label":r.type+" social link"},{default:t(()=>[e(z,{class:L({social__icon:!0,["social__icon--"+r.type]:!0}),icon:"mdi-"+r.type},null,8,["class","icon"])]),_:2},1032,["href","aria-label"]))),128))]))}}),H={},M=n("div",{class:"about__subtitle"},[n("span",null,[p("Hello, "),n("b",null,"my name is")])],-1),G=n("h1",{class:"about__title"},[n("b",null,"Mauro"),p(" Cunsolo")],-1),J=n("div",{class:"about__subtitle"},[p("I am "),n("strong",null,"Backend Developer")],-1),K={class:"about__description"},Q=n("p",null," Experienced Node.js back-end developer but deeply passionate about all the latest back-end, front-end and mobile technologies. I'm curious, love challenges but I hate monotony. ",-1);function U(a,c){const l=T,s=w;return o(),i(s,{id:"about"},{default:t(()=>[e(C,null,{default:t(()=>[e(h,{class:"card about__container"},{default:t(()=>[e(b,{cols:"12",xs:"12",md:"8",class:"about__content"},{default:t(()=>[M,G,J,n("div",K,[Q,e(l,{class:"social-links"})])]),_:1}),e(b,{cols:"12",sm:"4",class:"d-none d-md-flex about__img-container"},{default:t(()=>[e(q,{height:"300",width:"200",src:"/img/img_avatar.webp",class:"about__img img-circle",alt:"Avatar",cover:""})]),_:1})]),_:1})]),_:1})]),_:1})}const W=V(H,[["render",U]]),X={class:"card note d-flex flex-column"},Y={class:"note__container"},Z={class:"note__content"},tt={class:"note__categories-container"},et={class:"note__title"},nt={class:"note__text"},ot=x({__name:"ArticleItem",props:{article:{type:Object,required:!0,default:()=>{}}},setup(a){return(c,l)=>{const s=D,u=F;return o(),i(s,{to:"/notes"+a.article._path},{default:t(()=>[n("div",X,[n("div",Y,[n("div",Z,[n("div",tt,[(o(!0),d(g,null,k(a.article.tags,_=>(o(),i(s,{key:_,class:"note__category",to:"/notes/categories/"+_},{default:t(()=>[p(" #"+f(_),1)]),_:2},1032,["to"]))),128))]),n("h1",et,f(a.article.title),1),n("p",nt,f(a.article.description),1)]),e(j,{class:"note__image_wrapper","max-height":"200px"},{default:t(()=>[e(u,{class:"note__image",sizes:"xs:300px",alt:a.article.title,src:"/articles"+a.article.img,preload:""},null,8,["alt","src"])]),_:1})])])]),_:1},8,["to"])}}}),st=n("span",null,"View notes",-1),at=x({__name:"NotesSection",setup(a){const c={path:"/en/articles",where:[{published:!0}],limit:6,sort:[{date:-1}]};return(l,s)=>{const u=E,_=ot,v=O,r=w;return o(),i(r,{id:"notes"},{default:t(()=>[e(u,{text:"Latest notes",subtitle:" Articles and Advice"}),e(v,{query:c},{default:t(({list:m})=>[m.length>0?(o(),i(h,{key:0,cols:"12",class:"notes__list mt-4 mb-8"},{default:t(()=>[(o(!0),d(g,null,k(m,y=>(o(),i(b,{key:y._path,cols:"12",xs:"12",sm:"6",md:"4"},{default:t(()=>[e(_,{article:y},null,8,["article"])]),_:2},1024))),128))]),_:2},1024)):P("",!0),e(h,null,{default:t(()=>[e($,{class:"notes__load-more",to:"/notes",variant:"plain"},{default:t(()=>[st]),_:1})]),_:1})]),_:1})]),_:1})}}}),ct={};function _t(a,c){const l=W,s=at;return o(),i(C,null,{default:t(()=>[e(l),e(s)]),_:1})}const xt=V(ct,[["render",_t]]);export{xt as default};
