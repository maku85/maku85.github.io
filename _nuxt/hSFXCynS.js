import n from"./BjzUap9H.js";import{d as c,G as l,E as f}from"./1I5RK2Em.js";import"./CQRSgUmh.js";const r=(u,t)=>f("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:p,query:a}=u,d={...a||{},path:p||(a==null?void 0:a.path)||"/"};return f(n,d,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:m})=>t.default({list:e,refresh:o,isPartial:m,...this.$attrs}):e=>r("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):r("not-found",e==null?void 0:e.data)}})}}),s=h;export{s as default};
//# sourceMappingURL=hSFXCynS.js.map
