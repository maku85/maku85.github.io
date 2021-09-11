__NUXT_JSONP__("/en/blog/node-design-pattern-factory", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{article:{slug:"node-design-pattern-factory",description:"The Factory is a creational design pattern that provides an interface to create objects while letting the subclasses decide which type of object to instantiate.",language:"en",date:"2021-01-11T09:00:00.000Z",title:"Creational design patterns - Factory",img:"\u002Farticles\u002Fimages\u002Fdesign-pattern-factory.jpeg",tags:"javascript, design-pattern, creational-patterns",published:true,toc:[],body:{type:"root",children:[{type:b,tag:P,props:{},children:[{type:a,value:"The advantage of this approach consists in letting the factory decide how to instantiate the object (using closures, prototype, the new operator or other), thus not binding the creation to a specific technique and guaranteeing greater flexibility. (especially useful in the refactor phase)."}]},{type:a,value:j},{type:b,tag:P,props:{},children:[{type:a,value:"Obviously the modalities (constructors \u002F methods) with which the factory will create the various objects should not be directly accessible by the \"consumers\" - to avoid that they can be modified."}]},{type:a,value:j},{type:b,tag:P,props:{},children:[{type:a,value:"Eg:"}]},{type:a,value:j},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g,w]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"Hi, I'm a \""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"' employee'"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'full time'"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:T}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'part time'"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:T}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:T}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:" props"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,g,w]},children:[{type:a,value:"switch"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:L}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g,w]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:L}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g,w]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:L}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g,w]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g,"module"]},children:[{type:a,value:"default"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:L}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g,w]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"Error"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'Employee type not supported'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\nmodule"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"exports"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:A}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:W,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:$,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'\u002FEmployeeFactory'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:" fulltime "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B,n,r]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\nfulltime"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B,n,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Hi, I'm a full time employee"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:" parttime "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B,n,r]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\nparttime"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B,n,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Hi, I'm a part time employee"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:" contractor "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B,n,r]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\ncontractor"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B,n,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Hi, I'm a contractor employee"}]},{type:a,value:j}]}]}]}]},dir:"\u002Fen\u002Farticles",path:"\u002Fen\u002Farticles\u002Fnode-design-pattern-factory",extension:".md",createdAt:"2021-09-06T15:38:00.580Z",updatedAt:"2021-09-09T16:54:43.488Z"},recentArticles:[{slug:ag,date:"2021-01-04T09:00:00.000Z",title:ah,img:"\u002Farticles\u002Fimages\u002Fdesign-pattern-singleton.jpeg"},{slug:ai,date:"2021-01-18T09:00:00.000Z",title:aj,img:"\u002Farticles\u002Fimages\u002Fdesign-pattern-proxy.jpeg"}],prev:{slug:ag,title:ah},next:{slug:ai,title:aj}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","keyword","(",")","\n","operator","string","class-name","function","\n    ","{",".","property-access","}","\n  ","=","\n\n","control-flow","type","props","comment","EmployeeFactory","method","class","return","maybe-class-name","Employee","speak","this","parameter","create","\n      ",":","\n        ","new","const","p","extends","constructor","super","\u002F\u002F....","'contractor'","case","div","nuxt-content-highlight","pre","language-javascript","line-numbers","code","+","FullTimeEmployee","PartTimeEmployee","ContractorEmployee","'fulltime'","'parttime'","node-design-pattern-singleton","Creational Design Patterns - Singleton","node-design-pattern-proxy","Structural Design Pattern - Proxy")));