import{A as g,u as h}from"./AppLayout.4be001de.js";import{N as b}from"./NewsBox.7bbcb1ee.js";import{S as p}from"./ServerStatusBox.6f70669a.js";import{_ as v,c as k,w as i,l,o as n,b as r,a as t,t as o,d as a,e as N,f as _,H as T,s as S,q as D}from"./app.52f92557.js";import"./useAuthorizable.12e73595.js";import"./CopyToClipboard.4358cfcf.js";const B={components:{ServerStatusBox:p,NewsBox:b,AppLayout:g},props:{news:Object,newslist:Array},setup(){const{formatTimeAgoToNow:s,formatToDayDateString:d}=h();return{formatTimeAgoToNow:s,formatToDayDateString:d}}},A={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},H={class:"flex justify-end mb-8"},V={class:"flex"},C={class:"flex flex-col md:flex-row md:space-x-4"},L={class:"-my-2 md:w-9/12 overflow-x-auto md:-mx-6 lg:-mx-8"},j={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},M={class:"shadow max-w-none bg-white px-3 py-2 md:px-10 md:py-5 overflow-hidden border-b border-gray-200 rounded md:rounded-lg dark:bg-cool-gray-800 dark:border-none"},q={key:0,class:"bg-light-blue-400 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},z={key:1,class:"bg-orange-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},E={key:2,class:"bg-green-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},I={key:3,class:"bg-gray-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},O={class:"font-bold text-4xl text-gray-900 dark:text-gray-200 mb-5"},P=["src"],F={class:"flex w-full md:w-auto mb-5"},G=["src"],J=["title"],K={class:"text-gray-500 dark:text-gray-400 text-sm"},Q=["innerHTML"],R={class:"md:w-3/12 flex-1 space-y-4 mt-4 md:mt-0"};function U(s,d,e,c,W,X){const u=l("app-head"),m=l("inertia-link"),x=l("server-status-box"),w=l("news-box"),y=l("app-layout"),f=D("tippy");return n(),k(y,null,{default:i(()=>[r(u,{title:s.__(":title - News",{title:e.news.title})},null,8,["title"]),t("div",A,[t("div",H,[t("div",V,[r(m,{href:s.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:i(()=>[t("span",null,o(s.__("Homepage")),1)]),_:1},8,["href"])])]),t("div",C,[t("div",L,[t("div",j,[t("div",M,[e.news.type.value===0?(n(),a("span",q,o(e.news.type.key),1)):e.news.type.value===1?(n(),a("span",z,o(e.news.type.key),1)):e.news.type.value===2?(n(),a("span",E,o(e.news.type.key),1)):(n(),a("span",I,o(e.news.type.key),1)),t("h1",O,o(e.news.title),1),e.news.photo_url?(n(),a("img",{key:4,class:"float-right w-full md:w-1/2 ml-10 mb-5 md:mb-0",src:e.news.photo_url,alt:"News Image"},null,8,P)):N("",!0),t("div",F,[t("img",{src:e.news.creator.profile_photo_url,alt:"Profile",class:"h-12 w-12 mr-3 rounded-full"},null,8,G),t("div",null,[r(m,{as:"p",href:s.route("user.public.get",e.news.creator.username),class:"cursor-pointer hover:underline font-bold text-gray-700 dark:text-gray-300",style:T([e.news.creator.roles[0].color?{color:e.news.creator.roles[0].color}:null])},{default:i(()=>[_(o(e.news.creator.name),1)]),_:1},8,["href","style"]),S((n(),a("p",{title:c.formatTimeAgoToNow(e.news.created_at),class:"text-gray-500 dark:text-gray-400 text-sm focus:outline-none"},[_(o(c.formatToDayDateString(e.news.published_at)),1)],8,J)),[[f]]),t("p",K,o(e.news.time_to_read)+" "+o(s.__("read")),1)])]),t("div",{class:"prose dark:prose-dark max-w-none",innerHTML:e.news.body_html},null,8,Q)])])]),t("div",R,[r(x),r(w,{newslist:e.newslist},null,8,["newslist"])])])])]),_:1})}const se=v(B,[["render",U]]);export{se as default};
