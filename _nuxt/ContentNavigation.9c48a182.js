import{u as d}from"./asyncData.89aa33a0.js";import{d as l,K as f,h as v,L as p,a as m,M as g,N as h,D as y,G as r,s as _}from"./entry.22b055fe.js";const N=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(u){const t=y(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),a=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}});export{N as default};
