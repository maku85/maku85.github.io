import{_ as C}from"./Title.vue.322c41c0.js";import{d as w,g as N,h as B,r as c,o as s,f as l,w as o,b as _,e as p,c as u,l as h,j as b,F as P,i as t,t as m,q as V,s as q}from"./entry.22b055fe.js";import{_ as z}from"./index.d62e7c31.js";import{u as A}from"./asyncData.89aa33a0.js";const D={key:0},F=t("div",{class:"text-center font-weight-light"},"No works yet :(",-1),L=[F],E={class:"card projects__item"},O={class:"projects__container"},S={class:"projects__content"},T={class:"projects__category"},$={class:"projects__name"},G={class:"projects__text"},R=w({__name:"projects",async setup(H){let n,d;const{data:a}=([n,d]=N(()=>A("/",()=>V("/").findOne())),n=await n,d(),n),r=B(()=>{var i;return((i=a==null?void 0:a.value)==null?void 0:i.works)||[]});return(i,I)=>{const g=C,f=c("v-img"),v=q,y=c("v-col"),j=c("v-row"),x=c("v-container"),k=z;return s(),l(k,{id:"projects"},{default:o(()=>[_(g,{text:"Projects",subtitle:" works"}),p(r).length===0?(s(),u("div",D,L)):h("",!0),_(x,null,{default:o(()=>[p(r).length>0?(s(),l(j,{key:0,class:"projects__list"},{default:o(()=>[(s(!0),u(P,null,b(p(r),e=>(s(),l(y,{key:e.id,cols:"12",sm:"6",md:"4",xl:"3"},{default:o(()=>[_(v,{to:e.url,target:"_blank"},{default:o(()=>[t("div",E,[t("div",O,[_(f,{class:"projects__image","aspect-ratio":1,height:"240px","lazy-src":e.image||"https://source.unsplash.com/random",src:e.image||"https://source.unsplash.com/random",cover:""},null,8,["lazy-src","src"]),t("div",S,[t("span",T,m(e.category),1),t("h5",$,m(e.title),1),t("div",G,[t("p",null,m(e.description),1)])])])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):h("",!0)]),_:1})]),_:1})}}});export{R as default};
