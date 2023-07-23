import{_ as G}from"./Title.vue.322c41c0.js";import{_ as H}from"./ArticleItem.vue.93b4acdb.js";import{d as I,B as J,g as y,h as K,r as m,o as a,f as p,w as t,b as o,i as e,c as i,j as w,e as l,F as k,k as f,l as A,q as b,t as V,s as M}from"./entry.22b055fe.js";import Q from"./ContentList.c4022fe4.js";import{_ as U}from"./index.160e3fb6.js";import{u as L}from"./asyncData.89aa33a0.js";import"./ContentQuery.96544fa6.js";const W={class:"article-list"},X={class:"articles__pager"},Y=e("span",{class:"ml-5"},null,-1),Z={class:"articles__sidebar"},tt={class:"articles__section"},et=e("h2",{class:"articles__heading"},"Recent Posts",-1),st=e("p",null,"No articles found.",-1),ot={class:"articles__items"},nt={class:"articles__section"},at=e("h2",{class:"articles__heading"},"Categories",-1),_t=e("p",null,"No categories found.",-1),ct={class:"articles__items"},T=5,vt=I({__name:"index",async setup(it){let s,_;const x=J().query.category;let r=0;const u={published:!0};x&&Object.assign(u,{tags:x});const j=([s,_]=y(()=>b("en/articles").only([]).where(u).find()),s=await s,_(),s).length,{data:D,refresh:F}=([s,_]=y(()=>L("posts",()=>b("en/articles").where(u).sort({date:-1}).skip(r).limit(T).find())),s=await s,_(),s),C={path:"/en/articles",where:[u],limit:15,sort:[{date:-1}]},{data:h}=([s,_]=y(()=>L("/",()=>b("/").findOne())),s=await s,_(),s),O=K(()=>{var c;return((c=h==null?void 0:h.value)==null?void 0:c.notes.categories)||[]});function N(c){r+=c,F(),window.scrollTo({top:0,behavior:"smooth"})}return(c,d)=>{const R=G,S=H,v=m("v-col"),q=m("v-row"),B=m("v-btn"),P=M,$=Q,E=m("v-container"),z=U;return a(),p(z,{id:"articles"},{default:t(()=>[o(R,{text:"Notes",subtitle:" Articles and Advice"}),o(E,null,{default:t(()=>[o(q,null,{default:t(()=>[o(v,{cols:"12",md:"12",lg:"8"},{default:t(()=>[e("div",W,[(a(!0),i(k,null,w(l(D),n=>(a(),p(q,{key:n.id,class:"articles__list mt-4 mb-8"},{default:t(()=>[o(v,null,{default:t(()=>[o(S,{article:n},null,8,["article"])]),_:2},1024)]),_:2},1024))),128))]),e("div",X,[l(r)>0?(a(),p(B,{key:0,class:"articles__button",variant:"flat",onClick:d[0]||(d[0]=n=>N(-5))},{default:t(()=>[f("prev")]),_:1})):A("",!0),Y,l(r)+T<l(j)?(a(),p(B,{key:1,class:"articles__button",variant:"flat",onClick:d[1]||(d[1]=n=>N(5))},{default:t(()=>[f("next")]),_:1})):A("",!0)])]),_:1}),o(v,{md:"12",lg:"4"},{default:t(()=>[e("div",Z,[e("aside",null,[e("section",tt,[et,o($,{query:C},{"not-found":t(()=>[st]),default:t(({list:n})=>[e("ul",ot,[(a(!0),i(k,null,w(n,g=>(a(),i("li",{key:g._path},[o(P,{class:"articles__item",to:"/notes"+g._path},{default:t(()=>[f(V(g.title),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),e("section",nt,[at,o($,{query:C},{"not-found":t(()=>[_t]),default:t(()=>[e("ul",ct,[(a(!0),i(k,null,w(l(O),n=>(a(),i("li",{key:n.path,class:"articles__item__wrapper"},[o(P,{class:"articles__item",to:"/notes/categories/"+n.path},{default:t(()=>[f(V(n.title),1)]),_:2},1032,["to"])]))),128))])]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{vt as default};
