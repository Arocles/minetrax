import{I as M}from"./AppLayout.99834d8a.js";import{_ as T}from"./UserDisplayname.c6348d37.js";import{_ as B,p as m,v,o as i,d as l,e as d,x as f,z as A,a as t,t as h,F as P,h as D,n as x,b as u,w as _,f as L,c as b,l as S,y as V,X as j}from"./app.2dce8881.js";const N={components:{Icon:M,UserDisplayname:T},props:{post:Object},data(){return{comments:null,loading:!0,loadingMore:!1,commentBody:"",submitting:!1,bodyerror:null,showLoadMoreCommentsButton:!0}},created(){axios.get(route("post.comment.index",this.post.id)).then(e=>{this.comments=e.data,this.comments.data.reverse()}).finally(()=>{this.loading=!1})},methods:{loadMoreComments(){return this.comments.next_page_url?(this.loadingMore=!0,axios(this.comments.next_page_url).then(e=>{this.comments={...e.data,data:[...e.data.data.reverse(),...this.comments.data]}}).finally(()=>this.loadingMore=!1)):(this.showLoadMoreCommentsButton=!1,Promise.resolve())},submitComment(){this.submitting||(this.submitting=!0,this.bodyerror=null,axios.post(route("post.comment.store",this.post.id),{comment:this.commentBody}).then(e=>{e.status===200&&(this.comments.data.push(e.data.data),this.commentBody="")}).catch(e=>{e.response.status===422?this.bodyerror=e.response.data.errors.comment[0]:this.bodyerror=e.response.data.message}).finally(()=>{this.submitting=!1,this.$nextTick(()=>{this.$refs.comment.focus()})}))}}},H={class:"flex flex-col"},z=t("hr",{class:"mt-0.5 dark:border-cool-gray-700"},null,-1),O={key:0,class:"flex justify-center p-4"},U=t("svg",{class:"w-5 h-5 mr-3 -ml-1 animate-spin text-light-blue-600 dark:text-light-blue-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),F=[U],I={class:"flex mt-3"},K={key:1,class:"flex flex-col mt-3 space-y-2"},E={class:"items-start order-2 max-w-lg mx-2 space-y-2 text-sm"},W=["title"],X=["innerHTML"],q=["src"],G={key:2,class:"flex mt-1"},J=["src"],Q={class:"flex-grow order-2 mx-2 text-sm"},R=["disabled","placeholder"],Y={key:0,class:"ml-2 text-xs text-red-500"};function Z(e,n,o,y,s,a){const w=m("user-displayname"),p=m("inertia-link"),g=m("icon"),C=v("tippy"),k=v("confirm");return i(),l("div",H,[z,s.loading||s.loadingMore?(i(),l("div",O,F)):d("",!0),f(t("div",I,[t("button",{class:"text-sm font-semibold text-gray-500 dark:text-gray-400 focus:outline-none hover:underline",onClick:n[0]||(n[0]=(...r)=>a.loadMoreComments&&a.loadMoreComments(...r))},h(e.__("View previous comments")),1)],512),[[A,!s.loadingMore&&!s.loading&&s.showLoadMoreCommentsButton]]),!s.loading&&s.comments?(i(),l("div",K,[(i(!0),l(P,null,D(s.comments.data,r=>(i(),l("div",{key:r.id,class:"flex"},[t("div",E,[t("div",{class:x(["flex flex-col px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200",{"border border-gray-300 dark:border-gray-700":e.$page.props.auth.user&&e.$page.props.auth.user.id===r.user_id}])},[u(p,{as:"div",class:"hover:cursor-pointer hover:underline",href:e.route("user.public.get",r.commentator.username)},{default:_(()=>[u(w,{user:r.commentator,"show-username":!0,"text-class":"font-sm"},{default:_(()=>[f((i(),l("span",{class:"inline ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none",title:e.formatToDayDateString(r.created_at)},[L(h(e.formatTimeAgoToNow(r.created_at)),1)],8,W)),[[C]])]),_:2},1032,["user"])]),_:2},1032,["href"]),t("span",{innerHTML:e.purifyAndLinkifyText(r.comment)},null,8,X)],2)]),t("img",{src:r.commentator.profile_photo_url,alt:"My profile",class:"order-1 w-8 h-8 mt-2 rounded-full"},null,8,q),e.$page.props.auth.user&&r.permissions.delete?f((i(),b(p,{key:0,"preserve-scroll":!0,"preserve-state":!1,as:"button",method:"delete",href:e.route("post.comment.delete",[o.post.id,r.id]),class:"order-3 focus:outline-none"},{default:_(()=>[u(g,{name:"trash",class:"w-4 h-4 text-gray-200 hover:text-red-400 dark:text-gray-500 dark:hover:text-red-500"})]),_:2},1032,["href"])),[[k,{message:e.__("Are you sure you want to delete this comment?")}]]):d("",!0)]))),128))])):d("",!0),e.$page.props.auth.user?(i(),l("div",G,[t("img",{src:e.$page.props.auth.user.profile_photo_url,alt:"My profile",class:"order-1 w-8 h-8 mt-2 rounded-full"},null,8,J),t("div",Q,[t("form",{onSubmit:n[3]||(n[3]=S((...r)=>a.submitComment&&a.submitComment(...r),["prevent"]))},[f(t("input",{ref:"comment","onUpdate:modelValue":n[1]||(n[1]=r=>s.commentBody=r),disabled:s.submitting,placeholder:e.__("Write a comment..."),"aria-label":"comment",type:"text",class:"block w-full mt-1 bg-gray-100 border border-gray-100 rounded-full dark:bg-cool-gray-900 focus:border-gray-300 dark:border-gray-800 dark:focus:border-gray-700 dark:text-gray-200 focus:ring-0 sm:text-sm disabled:opacity-50",onKeypress:n[2]||(n[2]=j((...r)=>a.submitComment&&a.submitComment(...r),["enter"]))},null,40,R),[[V,s.commentBody]])],32),s.bodyerror?(i(),l("span",Y,h(s.bodyerror),1)):d("",!0)])])):d("",!0)])}const $=B(N,[["render",Z]]),ee={components:{Comments:$,Icon:M,UserDisplayname:T},props:{post:Object,commentsSectionOpened:{type:Boolean,default:!1}},data(){var e,n,o,y,s,a;return{liked:((n=(e=this.post.love_reactant)==null?void 0:e.reactions)==null?void 0:n.length)>0,likes_count:(a=(s=(y=(o=this.post)==null?void 0:o.love_reactant)==null?void 0:y.reaction_total)==null?void 0:s.count)!=null?a:0,showComments:this.commentsSectionOpened}},methods:{likePost(){if(!this.$page.props.auth.user){this.$inertia.get(route("login"));return}this.liked=!0,this.likes_count++,axios.post(route("reaction.post.like",this.post.id)).then(()=>{}).catch(()=>{this.liked=!1,this.likes_count--})},unlikePost(){if(!this.$page.props.auth.user){this.$inertia.get(route("login"));return}this.liked=!1,this.likes_count--,axios.post(route("reaction.post.unlike",this.post.id)).then(()=>{}).catch(()=>{this.liked=!0,this.likes_count++})}}},te={class:"flex justify-between"},se={class:"flex"},oe=["src"],re={class:"ml-2 mt-0.5"},ne={class:"flex"},ie=["innerHTML"],ae=["src"],le={class:"flex items-center justify-end mt-5 space-x-10 text-gray-500"},ue={class:"group-hover:bg-pink-100 dark:group-hover:bg-cool-gray-900 group-hover:text-pink-500 p-1.5 rounded-full transition duration-300 ease-in-out"},de={class:"text-gray-500 dark:text-gray-400 font-light py-1.5 group-hover:text-pink-500 transition duration-300 ease-in-out"},ce={class:"group-hover:bg-pink-100 dark:group-hover:bg-cool-gray-900 group-hover:text-pink-500 p-1.5 rounded-full transition duration-300 ease-in-out"},me={class:"text-pink-500 dark:text-gray-400 font-light py-1.5 group-hover:text-pink-500 transition duration-300 ease-in-out"},he={class:"group-hover:bg-light-blue-100 dark:group-hover:bg-cool-gray-900 group-hover:text-light-blue-500 p-1.5 rounded-full transition duration-300 ease-in-out"},pe={class:"text-gray-500 dark:text-gray-400 font-light py-1.5 flex items-center group-hover:text-light-blue-500 transition duration-300 ease-in-out"};function ge(e,n,o,y,s,a){const w=m("user-displayname"),p=m("inertia-link"),g=m("icon"),C=m("comments"),k=v("tippy"),r=v("confirm");return i(),l("div",{class:x(["px-5 py-4 bg-white rounded shadow dark:bg-cool-gray-800",{"rounded-l-none border-l-4 border-light-blue-500":e.$page.props.auth.user&&e.$page.props.auth.user.id===o.post.user.id}])},[t("div",te,[t("div",se,[t("img",{class:"w-12 h-12 rounded-full",src:o.post.user.profile_photo_url,alt:"profile photo"},null,8,oe),t("div",re,[u(p,{class:"cursor-pointer hover:underline dark:text-gray-300",as:"div",href:e.route("user.public.get",o.post.user.username)},{default:_(()=>[u(w,{user:o.post.user,"show-username":!0},null,8,["user"])]),_:1},8,["href"]),t("div",ne,[f((i(),b(p,{as:"a",href:e.route("post.show",o.post.id),content:e.formatToDayDateString(o.post.created_at),class:"text-sm font-light leading-snug text-gray-500 dark:hover:text-light-blue-500 focus:outline-none hover:text-light-blue-500 dark:text-gray-300"},{default:_(()=>[L(h(e.formatTimeAgoToNow(o.post.created_at)),1)]),_:1},8,["href","content"])),[[k]])])])]),e.$page.props.auth.user&&o.post.permissions.delete?f((i(),b(p,{key:0,title:e.__("Delete Post"),"preserve-scroll":!0,"preserve-state":!1,as:"button",method:"delete",href:e.route("post.delete",o.post.id),class:"flex items-start text-gray-500 rounded-full hover:text-red-500 focus:outline-none"},{default:_(()=>[u(g,{name:"trash",class:"h-6 w-6 p-0.5"})]),_:1},8,["title","href"])),[[r,{message:e.__("Are you sure you want to delete this Post?")}],[k]]):d("",!0)]),t("p",{class:"mt-2 leading-snug text-gray-800 break-words whitespace-pre-line dark:text-gray-200 md:leading-normal",innerHTML:e.purifyAndLinkifyText(o.post.body)},null,8,ie),o.post.media_url_array.length?(i(),l("div",{key:0,class:x(["grid gap-2",{"grid-cols-2":o.post.media_url_array.length>1}])},[(i(!0),l(P,null,D(o.post.media_url_array,c=>(i(),l("div",{key:c,class:"relative"},[t("img",{src:c,alt:"Attachment",class:x(["object-cover w-full h-full rounded-xl",o.post.media_url_array.length>1?"max-h-56":"max-h-96"])},null,10,ae)]))),128))],2)):d("",!0),t("div",le,[s.liked?(i(),l("button",{key:1,class:"flex text-pink-500 cursor-pointer group focus:outline-none",onClick:n[1]||(n[1]=(...c)=>a.unlikePost&&a.unlikePost(...c))},[t("span",ce,[u(g,{name:"heart-fill",class:"w-6 h-6 p-0.5"})]),t("span",me,h(s.likes_count),1)])):(i(),l("button",{key:0,class:"flex cursor-pointer group focus:outline-none",onClick:n[0]||(n[0]=(...c)=>a.likePost&&a.likePost(...c))},[t("span",ue,[u(g,{name:"heart-hollow",class:"h-6 w-6 p-0.5"})]),t("span",de,h(s.likes_count),1)])),t("button",{class:"flex cursor-pointer group focus:outline-none",onClick:n[2]||(n[2]=c=>s.showComments=!s.showComments)},[t("span",he,[u(g,{name:"comment",class:"h-6 w-6 p-0.5"})]),t("span",pe,h(o.post.comments_count),1)])]),s.showComments?(i(),b(C,{key:1,post:o.post},null,8,["post"])):d("",!0)],2)}const ke=B(ee,[["render",ge]]);export{ke as P};
