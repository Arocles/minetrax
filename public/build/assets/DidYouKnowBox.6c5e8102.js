<<<<<<<< HEAD:public/build/assets/DidYouKnowBox.79c01a6e.js
import{_ as l,o as s,d as a,e as r,a as n,t as d,k as u}from"./app.cdeb0fbf.js";const h={props:{enabled:Boolean,server:String},data(){return{colorMode:window.colorMode}}},m=["src"];function _(e,i,o,c,t,g){return o.enabled&&o.server?(s(),a("iframe",{key:0,src:`https://discord.com/widget?id=${o.server}&theme=${t.colorMode}`,width:"100%",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"},null,8,m)):r("",!0)}const V=l(h,[["render",_]]),x={props:{enabled:Boolean},data(){return{text:null,imageUrl:null,loading:!0,interval:null}},created(){axios.get(route("didyouknow.get")).then(e=>{this.text=e.data.text,this.imageUrl=e.data.image}).finally(()=>{this.loading=!1})},mounted(){this.interval=setInterval(()=>{!this.isInViewport()||(this.loading=!0,axios.get(route("didyouknow.get")).then(e=>{this.text=e.data.text,this.imageUrl=e.data.image}).finally(()=>{this.loading=!1}))},3e4)},unmounted(){clearInterval(this.interval)},methods:{isInViewport(){var i;const e=(i=this.$refs.box)==null?void 0:i.getBoundingClientRect();return e?e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth):!1}}},p={key:0,ref:"box"},w={class:"p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow"},v={class:"font-extrabold text-gray-800 dark:text-gray-200"},f={key:0,class:"space-y-4 mt-4"},y=u('<div class="max-w-sm w-full mx-auto"><div class="animate-pulse flex space-x-4"><div class="rounded bg-gray-300 dark:bg-cool-gray-700 h-8 w-8"></div><div class="flex-1 space-y-1 py-1"><div class="h-4 bg-gray-300 dark:bg-cool-gray-700 rounded w-3/4"></div><div class="h-4 bg-gray-300 dark:bg-cool-gray-700 rounded w-5/6"></div></div></div></div>',1),b=[y],k={key:1,class:"flex space-x-2 mt-4"},B=["src"],D={class:"text-gray-600 dark:text-gray-300 text-sm"};function I(e,i,o,c,t,g){return o.enabled?(s(),a("div",p,[n("div",w,[n("h3",v,d(e.__("Did You Know?")),1),t.loading?(s(),a("div",f,b)):r("",!0),t.loading?r("",!0):(s(),a("div",k,[t.imageUrl?(s(),a("img",{key:0,class:"w-14 h-14",src:t.imageUrl,alt:"Image"},null,8,B)):r("",!0),n("div",D,d(t.text),1)]))])],512)):r("",!0)}const S=l(x,[["render",I]]);export{S as D,V as a};
========
import{_ as l,o as s,d as a,e as r,a as n,t as d,m as u}from"./app.304209a1.js";const h={props:{enabled:Boolean,server:String},data(){return{colorMode:window.colorMode}}},m=["src"];function _(e,i,o,c,t,g){return o.enabled&&o.server?(s(),a("iframe",{key:0,src:`https://discord.com/widget?id=${o.server}&theme=${t.colorMode}`,width:"100%",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"},null,8,m)):r("",!0)}const V=l(h,[["render",_]]),x={props:{enabled:Boolean},data(){return{text:null,imageUrl:null,loading:!0,interval:null}},created(){axios.get(route("didyouknow.get")).then(e=>{this.text=e.data.text,this.imageUrl=e.data.image}).finally(()=>{this.loading=!1})},mounted(){this.interval=setInterval(()=>{!this.isInViewport()||(this.loading=!0,axios.get(route("didyouknow.get")).then(e=>{this.text=e.data.text,this.imageUrl=e.data.image}).finally(()=>{this.loading=!1}))},3e4)},unmounted(){clearInterval(this.interval)},methods:{isInViewport(){var i;const e=(i=this.$refs.box)==null?void 0:i.getBoundingClientRect();return e?e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth):!1}}},p={key:0,ref:"box"},w={class:"p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow"},v={class:"font-extrabold text-gray-800 dark:text-gray-200"},f={key:0,class:"space-y-4 mt-4"},y=u('<div class="max-w-sm w-full mx-auto"><div class="animate-pulse flex space-x-4"><div class="rounded bg-gray-300 dark:bg-cool-gray-700 h-8 w-8"></div><div class="flex-1 space-y-1 py-1"><div class="h-4 bg-gray-300 dark:bg-cool-gray-700 rounded w-3/4"></div><div class="h-4 bg-gray-300 dark:bg-cool-gray-700 rounded w-5/6"></div></div></div></div>',1),b=[y],k={key:1,class:"flex space-x-2 mt-4"},B=["src"],D={class:"text-gray-600 dark:text-gray-300 text-sm"};function I(e,i,o,c,t,g){return o.enabled?(s(),a("div",p,[n("div",w,[n("h3",v,d(e.__("Did You Know?")),1),t.loading?(s(),a("div",f,b)):r("",!0),t.loading?r("",!0):(s(),a("div",k,[t.imageUrl?(s(),a("img",{key:0,class:"w-14 h-14",src:t.imageUrl,alt:"Image"},null,8,B)):r("",!0),n("div",D,d(t.text),1)]))])],512)):r("",!0)}const S=l(x,[["render",I]]);export{S as D,V as a};
>>>>>>>> 0479a6239f83b1225ce1df2c9d4f132ae4a71e33:public/build/assets/DidYouKnowBox.6c5e8102.js
