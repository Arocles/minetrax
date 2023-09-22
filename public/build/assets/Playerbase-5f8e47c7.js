import{r as d,B as k,x as O,o as D,d as C,a as y,t as M,u as i,b as c,J as L,k as A,I as $,c as j,w as B,A as Y}from"./app-9b50b83a.js";import{_ as R}from"./AdminLayout-eabce765.js";import{_ as V}from"./ServerIntelServerSelector-554f1f3c.js";import{_ as H,a as z,b as Z}from"./PlayersMinecraftVersionMetricBox-ecafd34c.js";import{_ as T}from"./Chart-e01615c6.js";import{i as I}from"./index.es-a23a68a6.js";import{s as o,e as n,a as g,b as x,c as b,d as P,f as S}from"./index-c5d44a0e.js";import"./AppLayout-9f94cfff.js";import"./useAuthorizable-6bc0b9b8.js";import"./CloudArrowDownIcon-607d8017.js";import"./XSelect-00ebc6f1.js";const E={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},J={class:"flex justify-between"},q={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},N={__name:"PlayersJoinAddressOverTimeMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"400px"}},setup(l){const f=l,{__:s}=A();let u=d({}),v=d([]),h=d([]),p=d(!0),a=d(null);const _=k(()=>a.value===null||a.value.length<=0||a.value[0]===null||a.value[1]===null);async function m(){p.value=!0;let e={};_.value||(e.from_date=a.value[0],e.to_date=a.value[1]),f.servers&&f.servers.length>0&&(e.servers=f.servers);const t=await $.get(route("admin.graph.player-join-addresses.timeseries",e));p.value=!1,v.value=t.data.data,h.value=t.data.series,u.value={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},dataZoom:[{type:"inside",zoomLock:!0},{}],xAxis:{type:"time"},yAxis:{type:"value"},series:h.value.map(r=>({name:r,type:"bar",stack:"total",emphasis:{focus:"series"},datasetIndex:h.value.indexOf(r)})),dataset:v.value}}O(async()=>{await m()});const w=[{text:s("Today"),onClick(){const e=new Date;return[o(e),n(e)]}},{text:s("Yesterday"),onClick(){const e=g(new Date,1);return[o(e),n(e)]}},{text:s("Last 7 Days"),onClick(){const e=new Date,t=g(e,7);return[o(t),n(e)]}},{text:s("Last 30 Days"),onClick(){const e=new Date,t=g(e,30);return[o(t),n(e)]}},{text:s("This Month"),onClick(){const e=new Date,t=x(e);return[o(t),n(e)]}},{text:s("Last Month"),onClick(){const e=new Date,t=x(b(e,1)),r=P(b(e,1));return[o(t),n(r)]}},{text:s("This Year"),onClick(){const e=new Date,t=S(e);return[o(t),n(e)]}}];return(e,t)=>(D(),C("div",E,[y("div",J,[y("h3",q,M(i(s)("Join Addresses over time")),1),c(i(I),{value:i(a),"onUpdate:value":t[0]||(t[0]=r=>L(a)?a.value=r:a=r),type:"date",range:"",placeholder:i(s)("View for date range"),"input-class":"block w-full p-2 text-sm border-gray-300 rounded-md focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",shortcuts:w,onChange:t[1]||(t[1]=r=>m())},null,8,["value","placeholder"])]),c(T,{options:i(u),height:l.chartHeight,loading:i(p),autoresize:!0},null,8,["options","height","loading"])]))}},U={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},F={class:"flex justify-between"},G={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},K={__name:"PlayersMinecraftVersionOverTimeMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"400px"}},setup(l){const f=l,{__:s}=A();let u=d({}),v=d([]),h=d([]),p=d(!0),a=d(null);const _=k(()=>a.value===null||a.value.length<=0||a.value[0]===null||a.value[1]===null);async function m(){p.value=!0;let e={};_.value||(e.from_date=a.value[0],e.to_date=a.value[1]),f.servers&&f.servers.length>0&&(e.servers=f.servers);const t=await $.get(route("admin.graph.player-minecraft-versions.timeseries",e));p.value=!1,v.value=t.data.data,h.value=t.data.series,u.value={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},dataZoom:[{type:"inside",zoomLock:!0},{}],xAxis:{type:"time"},yAxis:{type:"value"},series:h.value.map(r=>({name:r,type:"bar",stack:"total",emphasis:{focus:"series"},datasetIndex:h.value.indexOf(r)})),dataset:v.value}}O(async()=>{await m()});const w=[{text:s("Today"),onClick(){const e=new Date;return[o(e),n(e)]}},{text:s("Yesterday"),onClick(){const e=g(new Date,1);return[o(e),n(e)]}},{text:s("Last 7 Days"),onClick(){const e=new Date,t=g(e,7);return[o(t),n(e)]}},{text:s("Last 30 Days"),onClick(){const e=new Date,t=g(e,30);return[o(t),n(e)]}},{text:s("This Month"),onClick(){const e=new Date,t=x(e);return[o(t),n(e)]}},{text:s("Last Month"),onClick(){const e=new Date,t=x(b(e,1)),r=P(b(e,1));return[o(t),n(r)]}},{text:s("This Year"),onClick(){const e=new Date,t=S(e);return[o(t),n(e)]}}];return(e,t)=>(D(),C("div",U,[y("div",F,[y("h3",G,M(i(s)("Player Client Versions over time")),1),c(i(I),{value:i(a),"onUpdate:value":t[0]||(t[0]=r=>L(a)?a.value=r:a=r),type:"date",range:"",placeholder:i(s)("View for date range"),"input-class":"block w-full p-2 text-sm border-gray-300 rounded-md focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",shortcuts:w,onChange:t[1]||(t[1]=r=>m())},null,8,["value","placeholder"])]),c(T,{options:i(u),height:l.chartHeight,loading:i(p),autoresize:!0},null,8,["options","height","loading"])]))}},Q={class:"p-4 mx-auto space-y-4 px-10"},W={id:"row1"},X={id:"row2",class:"flex justify-between flex-1 space-x-4"},ee={id:"row3",class:"flex justify-between flex-1 space-x-4"},fe={__name:"Playerbase",props:{serverList:{type:Object},filters:{type:Object}},setup(l){const f=l,s=k(()=>{var u;return route("admin.intel.server.playerbase.countries",{servers:(u=f.filters)==null?void 0:u.servers})});return(u,v)=>(D(),j(R,null,{default:B(()=>[c(Y,{title:u.__("Playerbase - ServerIntel")},null,8,["title"]),y("div",Q,[c(V,{title:u.__("Playerbase"),"server-list":l.serverList,filters:l.filters},null,8,["title","server-list","filters"]),y("div",W,[c(H,{"map-height":"500px","route-name":s.value},null,8,["route-name"])]),y("div",X,[c(N,{"chart-height":"387px",class:"basis-2/3",servers:l.filters.servers},null,8,["servers"]),c(z,{class:"basis-1/3","chart-height":"400px",servers:l.filters.servers},null,8,["servers"])]),y("div",ee,[c(K,{class:"basis-2/3","chart-height":"387px",servers:l.filters.servers},null,8,["servers"]),c(Z,{class:"basis-1/3","chart-height":"400px",servers:l.filters.servers},null,8,["servers"])])])]),_:1}))}};export{fe as default};
