import{v as J,x as K,y as Q,z as W,A as X,o as c,c as p,i as s,F as w,r as b,l as Y,b as o,w as e,j as k,t as h,s as V,f as v,k as x,d as Z,B as tt,g as et,e as a,p as st,q as O}from"./entry.a57adfde.js";import at from"./ContentRendererMarkdown.30127d0b.js";import{a as $,V as C,b as S}from"./VRow.f7d4b3f9.js";import{V as z}from"./VIcon.004637eb.js";import nt from"./ContentRenderer.47d42c32.js";import{u as ot}from"./asyncData.1c624980.js";function lt(r,_){const d=J({});return K(()=>{const m=W(r),{title:l,titleTemplate:n,...i}=m;d.value={title:l,titleTemplate:n,meta:X(i)}}),Q(d,_)}const ct={class:"toc"},it=s("header",{class:"toc__header"},[s("h2",{class:"toc__title"},"Table of contents")],-1),rt={class:"toc__links-container"},_t={__name:"ArticleToc",props:{links:{type:Array,required:!0}},setup(r){const _=d=>(d||[]).map(l=>{let n=[l];if(l.children){const i=_(l.children);n=[l,...i]}return n}).flat(1);return(d,m)=>{const l=V;return c(),p("nav",ct,[it,s("ul",rt,[(c(!0),p(w,null,b(_(r.links),n=>(c(),p("li",{key:n.id,class:Y(`toc__link-wrapper toc__link-wrapper--${n.depth}`)},[o(l,{class:"toc__link",to:"#"+n.id},{default:e(()=>[k(h(n.text),1)]),_:2},1032,["to"])],2))),128))])])}}},dt={class:"item__label"},ut={class:"item__title"},mt={class:"item__label"},pt={class:"item__title"},ft={__name:"PrevNext",props:{prev:{type:Object,required:!1,default:()=>{}},next:{type:Object,required:!1,default:()=>{}}},setup(r){return(_,d)=>{const m=V;return c(),v(C,null,{default:e(()=>{var l,n;return[(l=r.prev)!=null&&l.title?(c(),v($,{key:0,cols:"12",xs:"12",class:"item item--prev"},{default:e(()=>{var i;return[o(m,{to:"/notes"+((i=r.prev)==null?void 0:i._path)},{default:e(()=>{var t;return[s("div",dt,[o(z,null,{default:e(()=>[k("mdi-arrow-left")]),_:1}),k(" Previous article")]),s("div",ut,h((t=r.prev)==null?void 0:t.title),1)]}),_:1},8,["to"])]}),_:1})):x("",!0),(n=r.next)!=null&&n.title?(c(),v($,{key:1,cols:"12",xs:"12",class:"item item--next"},{default:e(()=>[o(m,{to:"/notes"+r.next._path},{default:e(()=>[s("div",mt,[k("Next article "),o(z,{icon:"mdi-arrow-right"})]),s("div",pt,h(r.next.title),1)]),_:1},8,["to"])]),_:1})):x("",!0)]}),_:1})}}},ht=s("p",null,"No content found.",-1),vt={class:"article__header"},gt={class:"article__titles"},xt={key:0,class:"article__categories_container"},kt={class:"article__title"},yt={class:"article__image_container"},$t=["alt","src"],wt=["innerHTML"],bt={key:0,class:"article__categories_container d-flex flex-wrap"},Ct=s("span",{class:"article__categories_label"},"Tags:",-1),Vt=s("div",{class:"line-left line-top"},[s("div",{class:"line-block"},[s("span")])],-1),Nt={class:"articles__navigation"},Rt=Z({__name:"[slug]",async setup(r){var N,T;let _,d;const m=tt(),{lang:l,slug:n}=m.params,{data:i}=([_,d]=et(async()=>ot(`article-${n}`,async()=>{const L=O(l,"articles").where({_path:`/${l}/articles/${n}`}).findOne(),M=O().only(["_path","title","description"]).sort({date:1}).findSurround(`/${l}/articles/${n}`);return{article:await L,surround:await M}})),_=await _,d(),_),t=(N=i==null?void 0:i.value)==null?void 0:N.article,[E,F]=((T=i==null?void 0:i.value)==null?void 0:T.surround)||[];return lt({title:t==null?void 0:t.title,ogTitle:t==null?void 0:t.title,description:t==null?void 0:t.description,ogDescription:t==null?void 0:t.description,ogImage:`https://site.com/${t==null?void 0:t.img}`}),(L,M)=>{const q=V,A=at,P=_t,U=ft,G=nt;return c(),v(S,{id:"article",fluid:""},{default:e(()=>[o(G,{value:a(t)},{empty:e(()=>[ht]),default:e(()=>{var B,R,H,I;return[s("div",vt,[s("div",gt,[(B=a(t))!=null&&B.tags.length?(c(),p("div",xt,[(c(!0),p(w,null,b(a(t).tags,(u,f)=>(c(),v(q,{key:u,class:"article__category",to:"/notes/categories/"+u},{default:e(()=>[k(" #"+h(u.toUpperCase())+h(f<a(t).tags.length-1?",":"")+"  ",1)]),_:2},1032,["to"]))),128))])):x("",!0),s("h1",kt,h((R=a(t))==null?void 0:R.title),1),o(A,{class:"article__description",value:(H=a(t))==null?void 0:H.excerpt},null,8,["value"])])]),s("div",yt,[o(st,{class:"article__image_wrapper","min-width":"100%","max-height":"740px"},{default:e(()=>{var u,f;return[s("img",{class:"article__image",alt:(u=a(t))==null?void 0:u.title,src:"/img/articles"+((f=a(t))==null?void 0:f.img)},null,8,$t)]}),_:1}),(I=a(t))!=null&&I.credits?(c(),p("div",{key:0,class:"article__image__credits",innerHTML:a(t).credits},null,8,wt)):x("",!0)]),o(C,{class:"article__container"},{default:e(()=>[o($,{cols:"12",sm:"12"},{default:e(()=>[o(C,null,{default:e(()=>{var u,f,j;return[(j=(f=(u=a(t))==null?void 0:u.body)==null?void 0:f.toc)!=null&&j.links.length?(c(),v($,{key:0,cols:"12",sm:"3",class:"order-first order-md-last"},{default:e(()=>{var y,g,D;return[o(P,{class:"toc pl-4 pb-4",links:(D=(g=(y=a(t))==null?void 0:y.body)==null?void 0:g.toc)==null?void 0:D.links},null,8,["links"])]}),_:1})):x("",!0),o($,{cols:"12",sm:"9",class:"order-last order-md-first"},{default:e(()=>{var y;return[o(A,{class:"article__content",value:a(t)||{}},null,8,["value"]),(y=a(t))!=null&&y.tags.length?(c(),p("div",bt,[Ct,(c(!0),p(w,null,b(a(t).tags,g=>(c(),v(q,{key:g,class:"article__category",to:"/notes/categories/"+g},{default:e(()=>[k(h(g),1)]),_:2},1032,["to"]))),128))])):x("",!0),Vt]}),_:1})]}),_:1})]),_:1})]),_:1}),s("div",Nt,[o(S,null,{default:e(()=>[o(U,{prev:a(E),next:a(F)},null,8,["prev","next"])]),_:1})])]}),_:1},8,["value"])]),_:1})}}});export{Rt as default};
//# sourceMappingURL=_slug_.e9b44914.js.map
