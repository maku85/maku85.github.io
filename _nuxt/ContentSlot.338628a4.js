import{a as c}from"./utils.b492bb45.js";import{d as g,C as h,c as y,E as p,O as m}from"./entry.59ba0d85.js";import"./preview.46f514d0.js";const v=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=m(),{between:o,default:l}=h(),u=y(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:o,parent:i}},render({use:e,unwrap:i,fallbackSlot:o,between:l,tags:u,parent:n}){var f;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return o?o():p("div");if(!i)return[s()];const{flatUnwrap:d}=c(),a=d(s(),u);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{v as default};
