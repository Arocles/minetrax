import{r as g,B as C,x as A,o as v,d as k,a as s,b as n,f as _,t,u as e,J as T,k as I,I as S,c as M,w as L,A as $,e as F}from"./app-a29d3351.js";import{_ as N}from"./AdminLayout-5f547dd0.js";import{_ as j}from"./Chart-0cf62dc3.js";import{i as G}from"./index.es-bfbaa177.js";import{I as i,u as R}from"./AppLayout-854594a9.js";import{s as y,e as f,a as b,b as D,c as B,d as V,f as U}from"./index-821b1f4f.js";import{L as Y}from"./LoadingSpinner-1e6883b9.js";import{_ as H}from"./ServerIntelServerSelector-4131fd09.js";import{_ as q}from"./AlertCard-c2f0cea9.js";import"./useAuthorizable-7b6e36b6.js";import"./XSelect-24454aa3.js";import"./XMarkIcon-0b66942a.js";const z={class:"w-full h-full p-3 space-y-8 bg-white rounded shadow dark:bg-cool-gray-800"},E={class:"flex justify-between"},W={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},Z={__name:"ServerPerformanceOverTimeMetricBox",props:{servers:{type:Array,required:!1}},setup(h){const u=h,{__:l}=I();let a=g({}),c=g(null),m=g(!0),o=g(null);const x=C(()=>o.value===null||o.value.length<=0||o.value[0]===null||o.value[1]===null);async function w(){m.value=!0;let r={};x.value||(r.from_date=o.value[0],r.to_date=o.value[1]),u.servers&&u.servers.length>0&&(r.servers=u.servers);const d=await S.get(route("admin.graph.server-performance",r));m.value=!1,c.value=d.data,a.value={tooltip:{trigger:"axis",position:function(p){return[p[0],"10%"]}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"time"},yAxis:{type:"value",boundaryGap:[0,"10%"]},dataZoom:[{type:"inside",start:90,end:100,zoomLock:!0},{start:90,end:100}],series:c.value.labels.map((p,P)=>({name:p,type:"line",smooth:!0,symbol:"none",seriesLayoutBy:"column",encode:{y:P+1},emphasis:{focus:"series"}})),dataset:{source:c.value.data}}}A(async()=>{await w()});const O=[{text:l("Today"),onClick(){const r=new Date;return[y(r),f(r)]}},{text:l("Yesterday"),onClick(){const r=b(new Date,1);return[y(r),f(r)]}},{text:l("Last 7 Days"),onClick(){const r=new Date,d=b(r,7);return[y(d),f(r)]}},{text:l("Last 30 Days"),onClick(){const r=new Date,d=b(r,30);return[y(d),f(r)]}},{text:l("This Month"),onClick(){const r=new Date,d=D(r);return[y(d),f(r)]}},{text:l("Last Month"),onClick(){const r=new Date,d=D(B(r,1)),p=V(B(r,1));return[y(d),f(p)]}},{text:l("This Year"),onClick(){const r=new Date,d=U(r);return[y(d),f(r)]}}];return(r,d)=>(v(),k("div",z,[s("div",E,[s("h3",W,[n(i,{name:"cpu",class:"w-6 mr-1"}),_(" "+t(e(l)("Performance over time")),1)]),n(e(G),{value:e(o),"onUpdate:value":d[0]||(d[0]=p=>T(o)?o.value=p:o=p),type:"date",range:"",placeholder:e(l)("View for date range"),"input-class":"block w-full p-2 text-sm border-gray-300 rounded-md focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",shortcuts:O,onChange:d[1]||(d[1]=p=>w())},null,8,["value","placeholder"])]),n(j,{options:e(a),height:"350px",loading:e(m),autoresize:!0},null,8,["options","loading"])]))}},J={class:"flex"},K={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full p-3 shadow"},Q={class:"font-extrabold text-gray-800 dark:text-gray-200 flex mt-2 items-center"},X={key:0,class:"h-80 flex justify-center items-center"},ss={key:1,class:"m-0 p-0"},ts={class:"table-auto min-w-full text-sm dark:text-gray-300 text-gray-700"},es={class:"border-b dark:border-gray-700"},as=s("th",{scope:"col",class:"text-left p-2"},null,-1),os={scope:"col",class:"text-left p-2"},rs={scope:"col",class:"text-left p-2"},ls={scope:"col",class:"text-left p-2"},ns={scope:"col",class:"text-left p-2"},ds={class:"p-2 flex"},_s={class:"p-2"},cs={class:"p-2"},is={class:"p-2"},us={class:"p-2"},ps={class:"p-2 flex"},hs={class:"p-2"},ms={class:"p-2"},ys={class:"p-2"},fs={class:"p-2"},gs={class:"p-2 flex"},vs={class:"p-2"},xs={class:"p-2"},ks={class:"p-2"},bs={class:"p-2"},ws={class:"p-2 flex"},Ms={class:"p-2"},Ls={class:"p-2"},Ds={class:"p-2"},Bs={class:"p-2"},As={class:"p-2 flex"},Os={class:"p-2"},Ps={class:"p-2"},Cs={class:"p-2"},Ts={class:"p-2"},Is={class:"p-2 flex"},Ss={class:"p-2"},$s={class:"p-2"},Fs={class:"p-2"},Ns={class:"p-2"},js={class:"p-2 flex"},Gs={class:"p-2"},Rs={class:"p-2"},Vs={class:"p-2"},Us={class:"p-2"},Ys={class:"p-2 flex"},Hs={class:"p-2"},qs={class:"p-2"},zs={class:"p-2"},Es={class:"p-2"},Ws={class:"p-2 flex"},Zs={class:"p-2"},Js={class:"p-2"},Ks={class:"p-2"},Qs={class:"p-2"},Xs={__name:"ServerIntelPerformanceNumbersBox",props:{servers:{type:Array,required:!1}},setup(h){const u=h,{secondsToHMS:l}=R();let a=g(null),c=g(!0);async function m(){c.value=!0;let o={};u.servers&&u.servers.length>0&&(o.servers=u.servers);const x=await axios.get(route("admin.intel.server.performance.numbers",o));c.value=!1,a.value=x.data.numbers}return A(async()=>{await m()}),(o,x)=>(v(),k("div",J,[s("div",K,[s("h3",Q,[n(i,{name:"calculator",class:"w-6 mr-1"}),_(" "+t(o.__("Numbers")),1)]),e(c)?(v(),k("div",X,[n(Y,{loading:e(c)},null,8,["loading"])])):(v(),k("div",ss,[s("table",ts,[s("thead",es,[s("tr",null,[as,s("th",os,t(o.__("Last 24 hours")),1),s("th",rs,t(o.__("Last 7 days")),1),s("th",ls,t(o.__("Last 30 days")),1),s("th",ns,t(o.__("Last 3 months")),1)])]),s("tbody",null,[s("tr",null,[s("td",ds,[n(i,{name:"users",class:"w-5 text-green-500 mr-1"}),_(" "+t(o.__("Peak Online Players")),1)]),s("td",_s,t(e(a).max_players.last_24h),1),s("td",cs,t(e(a).max_players.last_7days),1),s("td",is,t(e(a).max_players.last_30days),1),s("td",us,t(e(a).max_players.last_90days),1)]),s("tr",null,[s("td",ps,[n(i,{name:"finger-print",class:"w-5 text-indigo-500 mr-1"}),_(" "+t(o.__("Avg Player Session Length")),1)]),s("td",hs,t(e(l)(e(a).player_avg_session_length.last_24h,!0)),1),s("td",ms,t(e(l)(e(a).player_avg_session_length.last_7days,!0)),1),s("td",ys,t(e(l)(e(a).player_avg_session_length.last_30days,!0)),1),s("td",fs,t(e(l)(e(a).player_avg_session_length.last_90days,!0)),1)]),s("tr",null,[s("td",gs,[n(i,{name:"moon-outline",class:"w-5 text-gray-500 mr-1"}),_(" "+t(o.__("Avg Player AFK Time")),1)]),s("td",vs,t(e(l)(e(a).player_avg_afk_time.last_24h,!0)),1),s("td",xs,t(e(l)(e(a).player_avg_afk_time.last_7days,!0)),1),s("td",ks,t(e(l)(e(a).player_avg_afk_time.last_30days,!0)),1),s("td",bs,t(e(l)(e(a).player_avg_afk_time.last_90days,!0)),1)]),s("tr",null,[s("td",ws,[n(i,{name:"joystick",class:"w-5 text-pink-500 mr-1"}),_(" "+t(o.__("Lowest TPS")),1)]),s("td",Ms,t(e(a).low_tps.last_24h),1),s("td",Ls,t(e(a).low_tps.last_7days),1),s("td",Ds,t(e(a).low_tps.last_30days),1),s("td",Bs,t(e(a).low_tps.last_90days),1)]),s("tr",null,[s("td",As,[n(i,{name:"cpu",class:"w-5 text-blue-500 mr-1"}),_(" "+t(o.__("Avg CPU Usage")),1)]),s("td",Os,t(e(a).avg_cpu.last_24h.toFixed(2))+"% ",1),s("td",Ps,t(e(a).avg_cpu.last_7days.toFixed(2))+"% ",1),s("td",Cs,t(e(a).avg_cpu.last_30days.toFixed(2))+"% ",1),s("td",Ts,t(e(a).avg_cpu.last_90days.toFixed(2))+"% ",1)]),s("tr",null,[s("td",Is,[n(i,{name:"ram",class:"w-5 text-orange-500 mr-1"}),_(" "+t(o.__("Avg RAM Usage")),1)]),s("td",Ss,t(Math.round(e(a).avg_memory.last_24h/1024))+" MB ",1),s("td",$s,t(Math.round(e(a).avg_memory.last_7days/1024))+" MB ",1),s("td",Fs,t(Math.round(e(a).avg_memory.last_30days/1024))+" MB ",1),s("td",Ns,t(Math.round(e(a).avg_memory.last_90days/1024))+" MB ",1)]),s("tr",null,[s("td",js,[n(i,{name:"grid",class:"w-5 text-purple-500 mr-1"}),_(" "+t(o.__("Avg Chunks Loaded")),1)]),s("td",Gs,t(Math.round(e(a).avg_chunks.last_24h)),1),s("td",Rs,t(Math.round(e(a).avg_chunks.last_7days)),1),s("td",Vs,t(Math.round(e(a).avg_chunks.last_30days)),1),s("td",Us,t(Math.round(e(a).avg_chunks.last_90days)),1)]),s("tr",null,[s("td",Ys,[n(i,{name:"server",class:"w-5 text-light-blue-500 mr-1"}),_(" "+t(o.__("Min Free Disk")),1)]),s("td",Hs,t(Math.round(e(a).min_free_disk.last_24h/1048576))+" GB ",1),s("td",qs,t(Math.round(e(a).min_free_disk.last_7days/1048576))+" GB ",1),s("td",zs,t(Math.round(e(a).min_free_disk.last_30days/1048576))+" GB ",1),s("td",Es,t(Math.round(e(a).min_free_disk.last_90days/1048576))+" GB ",1)]),s("tr",null,[s("td",Ws,[n(i,{name:"toggle-off",class:"w-5 text-red-500 mr-1"}),_(" "+t(o.__("Total Restarts")),1)]),s("td",Zs,t(e(a).total_restarts.last_24h),1),s("td",Js,t(e(a).total_restarts.last_7days),1),s("td",Ks,t(e(a).total_restarts.last_30days),1),s("td",Qs,t(e(a).total_restarts.last_90days),1)])])])]))])]))}},st={class:"p-4 mx-auto space-y-4 px-10"},pt={__name:"Performance",props:{serverList:{type:Object},filters:{type:Object},noIntelForOverWeek:{type:Boolean}},setup(h){const u=h;return(l,a)=>(v(),M(N,null,{default:L(()=>{var c,m;return[n($,{title:l.__("Performance - ServerIntel")},null,8,["title"]),s("div",st,[n(H,{title:l.__("Server Performance"),"server-list":u.serverList,filters:u.filters},null,8,["title","server-list","filters"]),h.noIntelForOverWeek?(v(),M(q,{key:0,"title-class":"flex items-center","text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{default:L(()=>[_(t(l.__("Server haven't sent Intel data for over 7 days.")),1)]),_:1})):F("",!0),n(Z,{servers:(c=h.filters)==null?void 0:c.servers},null,8,["servers"]),n(Xs,{servers:(m=h.filters)==null?void 0:m.servers},null,8,["servers"])])]}),_:1}))}};export{pt as default};
