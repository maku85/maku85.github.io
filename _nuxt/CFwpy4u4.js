import{B as h,L as k,a5 as g,o as i,g as c,f as t,F as u,r as x,e as d,b as p,h as _,t as b,a6 as $,a7 as T,a8 as C,u as y,a9 as j,l as B,_ as N,j as w,aa as z,p as f}from"./B-n1uWO2.js";const D={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},M={class:"hidden md:block w-full",id:"navbar-default"},S={class:"flex justify-end mt-4"},E={class:"flex justify-end"},L={class:"container mx-auto relative"},V={class:"ml-10"},A=["to"],F={__name:"AppNavbar",setup(l){const a=h("transparent"),r=[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Notes",path:"/notes"}],n=k("navbar.showDrawer",()=>!1),s=()=>{n.value=!n.value},m=()=>{a.value=document.documentElement.scrollTop>200?"#ffffff95":"transparent"};return g(()=>{window.onscroll=()=>{m()}}),(Q,e)=>{const v=N;return i(),c(u,null,[t("nav",null,[t("div",D,[t("i",{class:"d-sm-none",onClick:e[0]||(e[0]=o=>s())}),t("button",{"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",onClick:e[1]||(e[1]=o=>s())},e[6]||(e[6]=[t("span",{class:"sr-only"},"Open main menu",-1),t("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1)])),t("div",M,[t("ul",S,[(i(),c(u,null,x(r,o=>t("li",{key:o.title},[d(v,{class:"py-2 px-4",to:o.path},{default:p(()=>[_(b(o.title),1)]),_:2},1032,["to"])])),64))])])])]),d(j,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:p(()=>[$(t("div",{onKeydown:e[3]||(e[3]=T(o=>n.value=!1,["esc"])),class:"z-10 fixed inset-0 transition-opacity"},[t("div",{onClick:e[2]||(e[2]=o=>n.value=!1),class:"absolute inset-0 bg-black opacity-50",tabindex:"0"})],544),[[C,y(n)]])]),_:1}),t("div",{class:B([y(n)?"translate-y-0":"hidden","py-5 px-5 transform bottom-0 left-0 right-0 h-45 bg-white fixed w-full overflow-y-auto ease-in-out transition-all duration-300 z-30 transform-none"])},[t("div",E,[t("button",{onClick:e[4]||(e[4]=o=>s())},e[7]||(e[7]=[t("i",{class:"text-3xl mdi mdi-close"},null,-1)]))]),t("div",L,[t("ul",V,[(i(),c(u,null,x(r,o=>t("li",{key:o.title,to:o.path,class:"py-3"},[d(v,{to:o.path,onClick:e[5]||(e[5]=U=>s()),class:"uppercase font-bold text-bleck hover:text-gray-400"},{default:p(()=>[_(b(o.title),1)]),_:2},1032,["to"])],8,A)),64))]),e[8]||(e[8]=t("div",{class:"line-block"},[t("span")],-1))])],2)],64)}}},I={},K={class:"text-gray bg-transparent"};function H(l,a){return i(),c("footer",K,a[0]||(a[0]=[z('<div class="border-t-2 border-[rgba(0,0,0,.1)] w-full px-4 py-6 container mx-auto"><div class="container mx-auto flex flex-col md:flex-row justify-between items-center"><div class="text-center md:text-left"><p class="text-sm uppercase"> © Mauro 2021 | Tutti i diritti riservati </p></div><div class="flex flex-col md:flex-row items-center"><p class="text-sm"> Realizzato con <span class="text-red-500">❤</span> e <a href="https://nuxtjs.org" target="_blank" class="text-blue-500">Nuxt</a></p></div></div></div>',1)]))}const O=w(I,[["render",H]]),P={__name:"BackToTop",setup(l){const a=()=>{const s=document.getElementById("back-top").classList;document.documentElement.scrollTop>=400?s.contains("opacity-0")&&s.remove("opacity-0"):s.contains("opacity-0")||s.add("opacity-0")},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return g(()=>{a(),window.onscroll=()=>{a()}}),(n,s)=>(i(),c("span",{id:"back-top",class:"fixed bottom-5 right-5 bg-emerald-600 text-xl text-white px-5 py-4 rounded-full hover:cursor-pointer hover:bg-emerald-700 focus:outline-none scroll-up-btn opacity-0 z-50 shadow-[5px_5px_rgb(0_0_0/20%)]",onClick:s[0]||(s[0]=m=>r()),"aria-label":"Torna su"},s[1]||(s[1]=[t("i",{class:"mdi mdi-chevron-up"},null,-1)])))}},R={},q={class:"container mx-auto"},G={class:"mb-10 mt-8"};function J(l,a){const r=F,n=O,s=P;return i(),c("div",null,[t("div",q,[f(l.$slots,"header",{},()=>[d(r)]),t("main",G,[f(l.$slots,"default")])]),f(l.$slots,"footer",{},()=>[d(n)]),d(s)])}const X=w(R,[["render",J]]);export{X as default};
//# sourceMappingURL=CFwpy4u4.js.map
