import{d as i,r as l,o as s,a as _,b as d,f as e,e as m,g as c,F as h,h as u,t as o,l as p}from"./entry.59ba0d85.js";const g={class:"card note"},v={class:"note__container"},x={class:"note__content"},f={class:"note__categories-container"},y={class:"note__title"},k={class:"note__text"},b=i({__name:"ArticleItem",props:{article:{type:Object,required:!0,default:()=>{}}},setup(t){return(B,C)=>{const n=l("v-img"),r=p;return s(),_(r,{to:"/notes"+t.article._path},{default:d(()=>[e("div",g,[e("div",v,[m(n,{class:"note__image","aspect-ratio":1,height:"480px","lazy-src":t.article.img||"https://source.unsplash.com/random",src:t.article.img||"https://source.unsplash.com/random",cover:""},null,8,["lazy-src","src"]),e("div",x,[e("div",f,[(s(!0),c(h,null,u(t.article.tags,a=>(s(),c("span",{key:a,class:"note__categoty"},o(a),1))),128))]),e("h5",y,o(t.article.title),1),e("p",k,o(t.article.description),1)])])])]),_:1},8,["to"])}}});export{b as _};
