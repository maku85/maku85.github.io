import{u as d}from"./asyncData.B2sN7S0z.js";import{d as l,N as f,i as v,O as p,b as m,P as g,Q as h,z as y,B as i,s as _}from"./entry.CwMBRxtX.js";const C=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:t}=f(r),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(r){const t=y(),{navigation:n}=r,o=e=>i(_,{to:e._path},()=>e.title),a=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(s=>s.children?i("li",null,[o(s),a(s.children,u+1)]):i("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),b=C;export{b as default};
//# sourceMappingURL=ContentNavigation.D_3ya2Bu.js.map
