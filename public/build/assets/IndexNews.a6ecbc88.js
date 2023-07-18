import{I as N}from"./InfiniteScroll.4d7a27ef.js";import{u as L}from"./useAuthorizable.12e73595.js";import{A as S,u as T}from"./AppLayout.4be001de.js";import{S as A}from"./ServerStatusBox.6f70669a.js";import{S as D}from"./ShoutBox.fa4cb68f.js";import{_ as B,c as H,w as d,l as n,o as r,b as l,a as t,f as i,t as s,d as a,g as I,F as M,e as x,q as V,H as C,s as j}from"./app.52f92557.js";import"./CopyToClipboard.4358cfcf.js";const z={components:{ShoutBox:D,ServerStatusBox:A,AppLayout:S,InfiniteScroll:N},props:{newses:Object},setup(){const{can:o}=L(),{formatTimeAgoToNow:m,formatToDayDateString:p}=T();return{can:o,formatTimeAgoToNow:m,formatToDayDateString:p}},data(){return{newsList:this.newses}},methods:{loadMoreNews(){return this.newsList.next_page_url?axios(this.newsList.next_page_url).then(o=>{this.newsList={...o.data,data:[...this.newsList.data,...o.data.data]}}):Promise.resolve()}}},F={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},P={class:"flex justify-between mb-8"},q={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},E={class:"hidden md:inline"},O={class:"flex"},Y={class:"flex flex-col md:flex-row md:space-x-4"},G={class:"flex flex-col space-y-4 -my-2 md:w-9/12 overflow-x-auto md:-mx-6 lg:-mx-8"},J={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},K={class:"shadow max-w-none bg-white px-3 py-2 md:px-10 md:py-5 overflow-hidden border-b border-gray-200 rounded md:rounded-lg dark:bg-cool-gray-800 dark:border-none"},Q={key:0,class:"bg-light-blue-400 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},R={key:1,class:"bg-orange-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},U={key:2,class:"bg-green-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},W={key:3,class:"bg-gray-600 font-bold inline-flex leading-7 mb-3 px-3 rounded text-sm text-white"},X=["src"],Z={class:"flex w-full md:w-auto mb-5"},$=["src"],ee=["title"],te={class:"text-gray-500 dark:text-gray-400 text-sm"},oe=["innerHTML"],se={key:0,class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},re={class:"shadow text-center dark:text-gray-400 italic max-w-none bg-white px-3 py-2 md:px-10 md:py-5 overflow-hidden border-b border-gray-200 rounded md:rounded-lg dark:bg-cool-gray-800 dark:border-none"},ae={class:"hidden md:block md:w-3/12 flex-1 space-y-4 mt-4 md:mt-0"};function le(o,m,p,_,u,h){const f=n("app-head"),c=n("inertia-link"),g=n("infinite-scroll"),y=n("server-status-box"),b=n("shout-box"),k=n("app-layout"),v=V("tippy");return r(),H(k,null,{default:d(()=>[l(f,{title:o.__("News")},null,8,["title"]),t("div",F,[t("div",P,[t("h1",q,[i(s(o.__("News"))+" ",1),t("span",E,s(o.__("& Announcements")),1)]),t("div",O,[l(c,{href:o.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:d(()=>[t("span",null,s(o.__("Homepage")),1)]),_:1},8,["href"])])]),t("div",Y,[t("div",G,[l(g,{"load-more":h.loadMoreNews},{default:d(()=>[(r(!0),a(M,null,I(u.newsList.data,(e,w)=>(r(),a("div",{key:w,class:""},[t("div",J,[t("div",K,[e.type.value===0?(r(),a("span",Q,s(e.type.key),1)):e.type.value===1?(r(),a("span",R,s(e.type.key),1)):e.type.value===2?(r(),a("span",U,s(e.type.key),1)):(r(),a("span",W,s(e.type.key),1)),l(c,{as:"a",href:o.route("news.show",e.slug),class:"block font-bold text-4xl text-gray-900 dark:text-gray-200 mb-5 cursor-pointer hover:underline"},{default:d(()=>[i(s(e.title),1)]),_:2},1032,["href"]),e.photo_url?(r(),a("img",{key:4,class:"float-right w-full md:w-1/2 ml-10 mb-5 md:mb-0",src:e.photo_url,alt:"News Image"},null,8,X)):x("",!0),t("div",Z,[t("img",{src:e.creator.profile_photo_url,alt:"Profile",class:"h-12 w-12 mr-3 rounded-full"},null,8,$),t("div",null,[l(c,{as:"p",href:o.route("user.public.get",e.creator.username),class:"cursor-pointer hover:underline font-bold text-gray-700 dark:text-gray-300",style:C([e.creator.roles[0].color?{color:e.creator.roles[0].color}:null])},{default:d(()=>[i(s(e.creator.name),1)]),_:2},1032,["href","style"]),j((r(),a("p",{title:_.formatTimeAgoToNow(e.created_at),class:"text-gray-500 dark:text-gray-400 text-sm focus:outline-none"},[i(s(_.formatToDayDateString(e.published_at)),1)],8,ee)),[[v]]),t("p",te,s(e.time_to_read)+" "+s(o.__("read")),1)])]),t("div",{class:"prose dark:prose-dark max-w-none",innerHTML:e.body_html_small},null,8,oe)])])]))),128))]),_:1},8,["load-more"]),u.newsList.data<=0?(r(),a("div",se,[t("div",re,s(o.__("No News or Announcement Yet.")),1)])):x("",!0)]),t("div",ae,[l(y),l(b)])])])]),_:1})}const ue=B(z,[["render",le]]);export{ue as default};
