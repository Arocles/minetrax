import{c as h,w as o,I as v,o as c,b as a,u as l,C as w,a as s,t as i,s as d,d as p,f as _,q as x}from"./app.42e0fd93.js";import{u as b}from"./AppLayout.bc5e16a8.js";import{_ as g}from"./AdminLayout.9f0f10d6.js";import{_ as k}from"./ServerIntelServerSelector.5d5d677e.js";import{D as f,_ as D}from"./DtRowItem.d4f54fa9.js";import"./useAuthorizable.9ef6cf28.js";import"./XSelect.0091104e.js";import"./XMarkIcon.9b9c63d1.js";const C={class:"p-4 mx-auto space-y-4 max-w-7xl"},I={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},S={class:"px-4"},T={class:"text-sm text-gray-800 dark:text-gray-200"},B={class:"whitespace-pre-wrap"},H=["title"],L=["title"],F={__name:"Consolelog",props:{serverList:{type:Object},filters:{type:Object},consoleHistory:{type:Object}},setup(r){const{__:e}=v(),{formatTimeAgoToNow:m,formatToDayDateString:u}=b(),y=[{key:"id",label:e("ID"),sortable:!0,class:"text-left"},{key:"data",label:e("Data"),sortable:!1},{key:"server_id",label:e("Server"),sortable:!0},{key:"created_at",label:e("Created"),sortable:!0}];return(N,$)=>{const n=x("tippy");return c(),h(g,null,{default:o(()=>[a(w,{title:l(e)("ConsoleLog - ServerIntel")},null,8,["title"]),s("div",C,[a(k,{title:l(e)("ConsoleLog"),"server-list":r.serverList,filters:r.filters},null,8,["title","server-list","filters"]),s("div",null,[a(D,{class:"bg-white rounded shadow dark:bg-gray-800",header:y,data:r.consoleHistory,filters:r.filters},{default:o(({item:t})=>[s("td",I,i(t.id),1),s("td",S,[s("div",T,[s("pre",B,i(t.data),1)])]),a(f,null,{default:o(()=>[d((c(),p("span",{class:"whitespace-nowrap",title:`Server ID: ${t.server.id}`},[_(i(t.server.name),1)],8,H)),[[n]])]),_:2},1024),a(f,null,{default:o(()=>[d((c(),p("span",{class:"whitespace-nowrap",title:l(u)(t.created_at)},[_(i(l(m)(t.created_at)),1)],8,L)),[[n]])]),_:2},1024)]),_:1},8,["data","filters"])])])]),_:1})}}};export{F as default};