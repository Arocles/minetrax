import{_ as p,o,d as s,e as r,r as d,s as h,I as v,Q as x,a as u,t as m,n as y,O as f}from"./app-ab7f0bba.js";const w={props:{enabled:Boolean,server:String},data(){return{colorMode:window.colorMode}}},b=["src"];function k(g,n,t,a,l,i){return t.enabled&&t.server?(o(),s("iframe",{key:0,src:`https://discord.com/widget?id=${t.server}&theme=${l.colorMode}`,width:"100%",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"},null,8,b)):r("",!0)}const E=p(w,[["render",k]]),B={class:"p-3 bg-white rounded shadow sm:px-5 dark:bg-cool-gray-800"},D={class:"font-extrabold text-gray-800 dark:text-gray-200"},I={key:0,class:"mt-4 space-y-4"},M=f('<div class="w-full max-w-sm mx-auto"><div class="flex space-x-4 animate-pulse"><div class="w-8 h-8 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div>',1),S=[M],V={key:1,class:"flex flex-col mt-4 space-y-2"},$=["src"],N={__name:"DidYouKnowBox",props:{enabled:{type:Boolean,required:!0}},setup(g){const n=d(null),t=d(null),a=d(!0),l=d(null);let i=null;const _=()=>{var c;const e=(c=l.value)==null?void 0:c.getBoundingClientRect();return e?e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth):!1};return h(()=>{v.get(route("didyouknow.get")).then(e=>{n.value=e.data.text,t.value=e.data.image}).finally(()=>{a.value=!1}),i=setInterval(()=>{_()&&(a.value=!0,v.get(route("didyouknow.get")).then(e=>{n.value=e.data.text,t.value=e.data.image}).finally(()=>{a.value=!1}))},3e4)}),x(()=>{clearInterval(i)}),(e,c)=>g.enabled?(o(),s("div",{key:0,ref_key:"box",ref:l},[u("div",B,[u("h3",D,m(e.__("Did You Know?")),1),a.value?(o(),s("div",I,S)):r("",!0),a.value?r("",!0):(o(),s("div",V,[t.value?(o(),s("img",{key:0,class:"w-full rounded",src:t.value,alt:"Image"},null,8,$)):r("",!0),u("div",{class:y(["text-sm text-gray-600 dark:text-gray-300",{"font-semibold text-center":t.value}])},m(n.value),3)]))])],512)):r("",!0)}};export{E as D,N as _};
