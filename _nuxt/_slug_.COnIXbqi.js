import{v as G,o as l,c as m,j as a,F as w,r as b,m as J,e as n,w as e,k as x,t as p,s as V,g as f,l as k,d as K,x as Q,h as W,f as r,q as F}from"./entry.CwMBRxtX.js";import{_ as X}from"./ContentRendererMarkdown.vue.CfDWx3ZV.js";import{V as C,a as y,b as N}from"./VRow.B-Q-W_2m.js";import{V as I}from"./VIcon.B79eGc8p.js";import Y from"./ContentRenderer.COqSmw-s.js";import{u as Z}from"./asyncData.B2sN7S0z.js";import{u as tt}from"./vue.f36acd1f.uHBwz6Xn.js";function et(i,_){const{title:u,titleTemplate:d,...o}=i;return tt({title:u,titleTemplate:d,_flatMeta:o},{..._,transform(s){const c=G({...s._flatMeta});return delete s._flatMeta,{...s,meta:c}}})}const st={class:"toc"},nt=a("header",{class:"toc__header"},[a("h2",{class:"toc__title"},"Table of contents")],-1),at={class:"toc__links-container"},ot={__name:"ArticleToc",props:{links:{type:Array,required:!0}},setup(i){const _=u=>(u||[]).map(o=>{let s=[o];if(o.children){const c=_(o.children);s=[o,...c]}return s}).flat(1);return(u,d)=>{const o=V;return l(),m("nav",st,[nt,a("ul",at,[(l(!0),m(w,null,b(_(i.links),s=>(l(),m("li",{key:s.id,class:J(`toc__link-wrapper toc__link-wrapper--${s.depth}`)},[n(o,{class:"toc__link",to:"#"+s.id},{default:e(()=>[x(p(s.text),1)]),_:2},1032,["to"])],2))),128))])])}}},lt={class:"item__label"},ct={class:"item__title"},rt={class:"item__label"},it={class:"item__title"},_t={__name:"PrevNext",props:{prev:{type:Object,required:!1,default:()=>{}},next:{type:Object,required:!1,default:()=>{}}},setup(i){return(_,u)=>{const d=V;return l(),f(N,null,{default:e(()=>[n(C,null,{default:e(()=>{var o,s;return[(o=i.prev)!=null&&o.title?(l(),f(y,{key:0,cols:"12",xs:"12",class:"item item--prev"},{default:e(()=>{var c;return[n(d,{to:"/notes"+((c=i.prev)==null?void 0:c._path)},{default:e(()=>{var t;return[a("div",lt,[n(I,null,{default:e(()=>[x("mdi-arrow-left")]),_:1}),x(" Previous article")]),a("div",ct,p((t=i.prev)==null?void 0:t.title),1)]}),_:1},8,["to"])]}),_:1})):k("",!0),(s=i.next)!=null&&s.title?(l(),f(y,{key:1,cols:"12",xs:"12",class:"item item--next"},{default:e(()=>[n(d,{to:"/notes"+i.next._path},{default:e(()=>[a("div",rt,[x("Next article "),n(I,{icon:"mdi-arrow-right"})]),a("div",it,p(i.next.title),1)]),_:1},8,["to"])]),_:1})):k("",!0)]}),_:1})]),_:1})}}},ut=a("p",null,"No content found.",-1),dt={class:"article__header"},mt={class:"article__titles"},pt={key:0,class:"article__categories_container"},ft={class:"article__title"},ht={key:0,class:"article__categories_container d-flex flex-wrap"},vt=a("span",{class:"article__categories_label"},"Tags:",-1),xt=a("div",{class:"line-left line-top"},[a("div",{class:"line-block"},[a("span")])],-1),gt={class:"articles__navigation"},Vt=K({__name:"[slug]",async setup(i){var M,T;let _,u;const d=Q(),{lang:o,slug:s}=d.params,{data:c}=([_,u]=W(async()=>Z(`article-${s}`,async()=>{const q=F(o,"articles").where({_path:`/${o}/articles/${s}`}).findOne(),L=F().only(["_path","title","description"]).sort({date:1}).findSurround(`/${o}/articles/${s}`);return{article:await q,surround:await L}})),_=await _,u(),_),t=(M=c==null?void 0:c.value)==null?void 0:M.article,[P,z]=((T=c==null?void 0:c.value)==null?void 0:T.surround)||[];return et({title:t==null?void 0:t.title,ogTitle:t==null?void 0:t.title,description:t==null?void 0:t.description,ogDescription:t==null?void 0:t.description,ogImage:`https://site.com/${t==null?void 0:t.img}`}),(q,L)=>{const A=V,B=X,E=ot,H=_t,U=Y;return l(),f(N,{id:"article",fluid:""},{default:e(()=>[n(U,{value:r(t)},{empty:e(()=>[ut]),default:e(()=>{var R,j,D;return[a("div",dt,[a("div",mt,[(R=r(t))!=null&&R.tags.length?(l(),m("div",pt,[(l(!0),m(w,null,b(r(t).tags,(h,$)=>(l(),f(A,{key:h,class:"article__category",to:"/notes/categories/"+h},{default:e(()=>[x(" #"+p(h.toUpperCase())+p($<r(t).tags.length-1?",":"")+"  ",1)]),_:2},1032,["to"]))),128))])):k("",!0),a("h1",ft,p((j=r(t))==null?void 0:j.title),1),n(B,{class:"article__description",value:(D=r(t))==null?void 0:D.excerpt},null,8,["value"])])]),n(C,{class:"article__container"},{default:e(()=>[n(y,{cols:"12",sm:"12"},{default:e(()=>[n(C,null,{default:e(()=>{var h,$,O;return[(O=($=(h=r(t))==null?void 0:h.body)==null?void 0:$.toc)!=null&&O.links.length?(l(),f(y,{key:0,cols:"12",sm:"3",class:"order-first order-md-last"},{default:e(()=>{var g,v,S;return[n(E,{class:"toc pl-4 pb-4",links:(S=(v=(g=r(t))==null?void 0:g.body)==null?void 0:v.toc)==null?void 0:S.links},null,8,["links"])]}),_:1})):k("",!0),n(y,{cols:"12",sm:"9",class:"order-last order-md-first"},{default:e(()=>{var g;return[n(B,{class:"article__content",value:r(t)||{}},null,8,["value"]),(g=r(t))!=null&&g.tags.length?(l(),m("div",ht,[vt,(l(!0),m(w,null,b(r(t).tags,v=>(l(),f(A,{key:v,class:"article__category",to:"/notes/categories/"+v},{default:e(()=>[x(p(v),1)]),_:2},1032,["to"]))),128))])):k("",!0),xt]}),_:1})]}),_:1})]),_:1})]),_:1}),a("div",gt,[n(N,null,{default:e(()=>[n(H,{prev:r(P),next:r(z)},null,8,["prev","next"])]),_:1})])]}),_:1},8,["value"])]),_:1})}}});export{Vt as default};
//# sourceMappingURL=_slug_.COnIXbqi.js.map
