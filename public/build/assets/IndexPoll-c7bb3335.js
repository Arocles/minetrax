import{A as b}from"./AppLayout-3157e4a2.js";import{S as v}from"./ShoutBox-84a3eacc.js";import{I as y}from"./InfiniteScroll-868ef177.js";import{S as w}from"./ServerStatusBox-cf87ff85.js";import{P as k}from"./PollBox-9b76596a.js";import{D as S,_ as B}from"./DidYouKnowBox-62e780cf.js";import{_ as L,l as e,o as l,c as i,w as a,b as t,a as s,ao as P,d,g as $,F as D,t as N,e as C}from"./app-0e0bee07.js";import"./useAuthorizable-8eccef14.js";import"./CopyToClipboard-da0e6391.js";const F={components:{DiscordServerBox:S,DidYouKnowBox:B,ServerStatusBox:w,AppLayout:b,ShoutBox:v,InfiniteScroll:y,PollBox:k},props:{polls:Object},data(){return{pollList:this.polls}},methods:{loadMorePolls(){return this.pollList.next_page_url?axios(this.pollList.next_page_url).then(o=>{this.pollList={...o.data,data:[...this.pollList.data,...o.data.data]}}):Promise.resolve()}}},I={class:"px-2 py-4 md:py-12 md:px-10 max-w-7xl mx-auto"},V={class:"flex flex-col md:flex-row md:space-x-4"},j={class:"hidden md:flex flex-col space-y-4 flex-none w-1/4 h-screen sticky top-5"},A={class:"flex-grow"},M={class:"-my-2 overflow-x-auto md:-mx-6 lg:-mx-8"},E={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},G={class:""},K={key:0,class:"p-3 md:px-5 bg-white dark:bg-cool-gray-800 rounded shadow italic text-gray-500 dark:text-gray-400 text-center text-sm font-semibold"},O={class:"hidden md:flex flex-col space-y-4 flex-none w-1/4 h-screen sticky top-5"};function T(o,Y,q,z,n,p){const c=e("app-head"),_=e("did-you-know-box"),m=e("discord-server-box"),x=e("poll-box"),u=e("infinite-scroll"),f=e("server-status-box"),h=e("shout-box"),g=e("app-layout");return l(),i(g,null,{default:a(()=>[t(c,{title:o.__("Polls")},null,8,["title"]),s("div",I,[s("div",V,[s("div",j,[t(_,{enabled:o.$page.props.generalSettings.enable_didyouknowbox},null,8,["enabled"]),t(m,{enabled:o.$page.props.generalSettings.enable_discordbox,server:o.$page.props.generalSettings.discord_server_id},null,8,["enabled","server"])]),s("div",A,[s("div",M,[s("div",E,[s("div",G,[t(u,{"load-more":p.loadMorePolls},{default:a(()=>[t(P,{name:"list",tag:"div",class:"space-y-4"},{default:a(()=>[(l(!0),d(D,null,$(n.pollList.data,r=>(l(),i(x,{key:r.id,"is-listing":!0,poll:r.json_for_vue},null,8,["poll"]))),128))]),_:1})]),_:1},8,["load-more"]),n.pollList.data<=0?(l(),d("div",K,N(o.__("No Polls Found")),1)):C("",!0)])])])]),s("div",O,[t(f),t(h)])])])]),_:1})}const eo=L(F,[["render",T]]);export{eo as default};