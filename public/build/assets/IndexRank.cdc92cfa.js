import{P as C}from"./Pagination.b89aece1.js";import{_ as N}from"./ConfirmationModal.42c03eb7.js";import{_ as B}from"./SecondaryButton.fccc7a5c.js";import{_ as A}from"./DangerButton.93aa9f7a.js";import{_ as T,T as j,c as u,w as a,l as i,o as n,b as m,a as e,t as s,s as S,f as r,e as p,d as h,g as F,F as P,n as V,q as L}from"./app.08b10a52.js";import{_ as E}from"./AdminLayout.21ee0c56.js";import{u as J,a as z}from"./AppLayout.4ee0cd03.js";import"./Modal.1c3a8e30.js";const q={components:{AdminLayout:E,Pagination:C,JetConfirmationModal:N,JetSecondaryButton:B,JetDangerButton:A},props:{ranks:Object},setup(){const{can:t}=J(),{formatTimeAgoToNow:d,formatToDayDateString:l}=z();return{can:t,formatTimeAgoToNow:d,formatToDayDateString:l}},data(){return{deleteRankForm:j({}),rankBeingDeleted:null}},methods:{confirmRankDeletion(t){this.rankBeingDeleted=t},deleteNews(){this.deleteRankForm.delete(route("admin.rank.delete",this.rankBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.rankBeingDeleted=null})}}},H={class:"py-12 px-10 max-w-7xl mx-auto"},I={class:"flex justify-between mb-8"},M={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},O={class:"flex"},G={class:"hidden md:inline"},K={class:"flex flex-col"},Q={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},U={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},W={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},X={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},Y={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-300"},Z={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},$={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},ee={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},oe={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},ae={scope:"col",class:"relative px-6 py-3"},ne={class:"sr-only"},re={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},ie={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},de={class:"px-6 py-4 whitespace-nowrap"},le={class:"flex items-center"},ce={class:"flex-shrink-0 h-10 w-10"},_e=["src"],me={class:"ml-4"},pe={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},ue={class:"text-sm text-gray-500 dark:text-gray-400"},he={class:"px-6 py-4 whitespace-nowrap"},ye={class:"text-sm text-gray-900 dark:text-gray-300"},fe={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ge={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},xe={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ke={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium dark:text-gray-400"},we={href:"#",class:"text-blue-600 hover:text-blue-900"},be=["onClick"],ve={key:0},De={class:"border-t dark:border-gray-700 px-6 py-4 text-center",colspan:"7"};function Re(t,d,l,c,_,f){const x=i("app-head"),y=i("inertia-link"),k=i("pagination"),w=i("jet-secondary-button"),b=i("jet-danger-button"),v=i("jet-confirmation-modal"),D=i("AdminLayout"),R=L("confirm");return n(),u(D,null,{default:a(()=>[m(x,{title:t.__("Player Ranks Administration")},null,8,["title"]),e("div",H,[e("div",I,[e("h1",M,s(t.__("Player Ranks")),1),e("div",O,[c.can("update ranks")?S((n(),u(y,{key:0,method:"post",as:"button",href:t.route("admin.rank.reset"),class:"mr-2 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:shadow-outline-red transition ease-in-out duration-150"},{default:a(()=>[r(s(t.__("Reset to Default Ranks")),1)]),_:1},8,["href"])),[[R,{message:"Are you sure you want to Reset all Ranks? This will remove current rank of all players."}]]):p("",!0),c.can("create ranks")?(n(),u(y,{key:1,href:t.route("admin.rank.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:a(()=>[e("span",null,s(t.__("Create New")),1),e("span",G,"\xA0"+s(t.__("Rank")),1)]),_:1},8,["href"])):p("",!0)])]),e("div",K,[e("div",Q,[e("div",U,[e("div",W,[e("table",X,[e("thead",Y,[e("tr",null,[e("th",Z,s(t.__("#")),1),e("th",$,s(t.__("Name")),1),e("th",ee,s(t.__("Play Time Needed")),1),e("th",te,s(t.__("Score Needed")),1),e("th",se,s(t.__("Player Count")),1),e("th",oe,s(t.__("Created")),1),e("th",ae,[e("span",ne,s(t.__("Edit")),1)])])]),e("tbody",re,[(n(!0),h(P,null,F(l.ranks.data,(o,g)=>(n(),h("tr",{key:g},[e("td",ie,s(g+l.ranks.from),1),e("td",de,[e("div",le,[e("div",ce,[e("img",{class:"h-10 w-10",src:o.photo_url,alt:""},null,8,_e)]),e("div",me,[e("div",pe,s(o.name),1),e("div",ue,s(o.shortname),1)])])]),e("td",he,[e("div",ye,s(o.total_play_one_minute_needed),1)]),e("td",fe,s(o.total_score_needed),1),e("td",ge,s(o.players_count),1),e("td",xe,s(c.formatTimeAgoToNow(o.created_at)),1),e("td",ke,[e("a",we,s(t.__("View")),1),r(" / "),c.can("update ranks")?(n(),u(y,{key:0,as:"a",href:t.route("admin.rank.edit",o.id),class:"text-yellow-600 hover:text-yellow-900"},{default:a(()=>[r(s(t.__("Edit")),1)]),_:2},1032,["href"])):p("",!0),r(" / "),c.can("delete ranks")?(n(),h("button",{key:1,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:Ce=>f.confirmRankDeletion(o.id)},s(t.__("Delete")),9,be)):p("",!0)])]))),128)),l.ranks.data.length===0?(n(),h("tr",ve,[e("td",De,s(t.__("No ranks found.")),1)])):p("",!0)])])])])])]),m(k,{links:l.ranks.links},null,8,["links"])]),m(v,{show:!!_.rankBeingDeleted,onClose:d[1]||(d[1]=o=>_.rankBeingDeleted=null)},{title:a(()=>[r(s(t.__("Delete Rank")),1)]),content:a(()=>[r(s(t.__("Are you sure you would like to delete this Rank?")),1)]),footer:a(()=>[m(w,{onClick:d[0]||(d[0]=o=>_.rankBeingDeleted=null)},{default:a(()=>[r(s(t.__("Nevermind")),1)]),_:1}),m(b,{class:V(["ml-2",{"opacity-25":_.deleteRankForm.processing}]),disabled:_.deleteRankForm.processing,onClick:f.deleteNews},{default:a(()=>[r(s(t.__("Delete Rank")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const Ve=T(q,[["render",Re]]);export{Ve as default};