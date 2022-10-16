import{I as j,A as B}from"./AppLayout.2290ad3e.js";import{S as D,P as S}from"./SocialChannelBox.24fab795.js";import{_ as T}from"./AlertCard.fd3027d8.js";import{_ as C}from"./UserDisplayname.e97d8d64.js";import{_ as N,z as u,B as A,o as r,c,w as d,b as h,a as e,h as i,t as o,e as n,I as P,d as l,g,F as b,x as m}from"./app.cb93a91e.js";import"./InfiniteScroll.3c360b25.js";import"./InputError.0996fcfc.js";import"./LoadingButton.9d9a0585.js";import"./Post.d284cf81.js";const I={components:{SocialChannelBox:D,Icon:j,AppLayout:B,PostListBox:S,AlertCard:T,UserDisplayname:C},props:{profileUser:Object}},V={class:"max-w-6xl px-2 py-3 mx-auto space-y-4 md:py-12 md:px-10"},E=i(". "),L={class:"overflow-hidden bg-white border-b border-gray-200 shadow max-w-none dark:bg-cool-gray-800 dark:border-cool-gray-800 md:rounded"},F=["src"],z={class:"px-4 py-2"},M={class:"relative flex w-full"},R={class:"flex flex-1"},G={style:{"margin-top":"-6rem"}},J={style:{height:"9rem",width:"9rem"},class:"relative rounded-full md avatar"},O=["src"],q=e("div",{class:"absolute"},null,-1),H={key:0,class:"flex space-x-2 text-xs text-right md:text-medium"},K={class:"hidden md:block"},Q={class:"hidden md:block"},W=e("span",{class:"hidden md:block"},"\xA0User",-1),X={class:"hidden md:block"},Y={class:"hidden md:block"},Z={class:"justify-center w-full mt-3 ml-3 space-y-2"},$={class:"font-medium leading-5 text-gray-600 dark:text-gray-400"},ee=["src","alt","content"],te={class:"flex justify-end mr-4"},se=["title"],oe={class:"flex flex-col md:space-x-4 md:flex-row"},re={class:"flex flex-col mb-4 space-y-4 md:mb-0 md:w-1/2"},ae={key:0,class:"flex flex-col w-full space-y-2 bg-white rounded shadow dark:bg-cool-gray-800"},le=["src","alt"],ne={class:"flex flex-col flex-1 space-y-2"},ie={class:"username"},de={class:"flex items-center justify-between"},ce={class:"font-bold dark:text-gray-400"},_e={class:"flex items-center space-x-2 text-sm font-extrabold text-center text-light-blue-400"},ue={key:0,class:"px-2 text-lg border-2 rounded border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},fe={key:1,class:"text-sm italic text-gray-500 dark:text-gray-400"},me={class:"flex items-center justify-between"},he={class:"font-bold dark:text-gray-400"},ge={key:1,class:"text-sm italic text-gray-500 dark:text-gray-400"},be={class:"flex items-center justify-between"},ye={class:"font-bold dark:text-gray-400"},pe={class:"flex items-center space-x-2"},xe={key:0,class:"dark:text-gray-200"},ke={key:1,class:"text-sm italic text-gray-500 dark:text-gray-400"},we=["src","alt","title"],ve={class:"flex items-center justify-between"},Ue={class:"font-bold dark:text-gray-400"},je={class:"flex items-center space-x-2"},Be=["title"],De={key:1,class:"p-4 bg-white rounded shadow dark:bg-cool-gray-800"},Se=e("h3",{class:"font-bold text-gray-700 dark:text-gray-200"}," Badges ",-1),Te={class:"flex flex-row justify-center space-x-2"},Ce=["title"],Ne=["src","alt"],Ae={key:2,class:"flex flex-col w-full p-4 bg-white rounded shadow dark:bg-cool-gray-800"},Pe={class:"whitespace-pre-wrap dark:text-gray-200"},Ie={class:"flex flex-col w-full p-4 space-y-2 bg-white rounded shadow dark:bg-cool-gray-800 dark:text-gray-400"},Ve={class:"flex justify-between"},Ee={class:"font-semibold text-gray-800 dark:text-gray-200"},Le=["src","alt"],Fe={class:"flex justify-between"},ze={class:"font-semibold text-gray-800 dark:text-gray-200"},Me={class:"flex justify-between"},Re={class:"font-semibold text-gray-800 dark:text-gray-200"},Ge={class:"flex justify-between"},Je={class:"font-semibold text-gray-800 dark:text-gray-200"},Oe={key:0,class:"flex justify-between"},qe={class:"font-semibold text-gray-800 dark:text-gray-200"},He={key:1,class:"flex items-center justify-center w-full p-3 space-y-4 text-center text-gray-500 bg-white rounded shadow sm:px-5 dark:bg-cool-gray-800"},Ke={class:"italic"};function Qe(t,We,s,Xe,Ye,Ze){const x=u("app-head"),y=u("icon"),_=u("inertia-link"),p=u("AlertCard"),k=u("user-displayname"),w=u("social-channel-box"),v=u("post-list-box"),U=u("app-layout"),f=A("tippy");return r(),c(U,null,{default:d(()=>[h(x,{title:t.__(":name profile",{name:s.profileUser.name})},null,8,["title"]),e("div",V,[s.profileUser.banned_at?(r(),c(p,{key:0,"text-color":"text-red-600 dark:text-red-400","border-color":"border-red-500"},{icon:d(()=>[h(y,{name:"ban",class:"w-6 h-6 mr-4 text-red-500"})]),body:d(()=>[i(o(t.__("If you think it is a mistake."))+" ",1),h(_,{href:t.route("staff.index"),class:"font-semibold hover:underline"},{default:d(()=>[i(o(t.__("Please contact a Staff")),1)]),_:1},8,["href"]),E]),default:d(()=>[i(o(t.__("This User is Banned!"))+" ",1)]),_:1})):n("",!0),t.$page.props.jetstream.hasEmailVerification&&s.profileUser.email_verified_at===null?(r(),c(p,{key:1,"text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{default:d(()=>[i(o(t.__("This user hasn't verified his email yet!")),1)]),_:1})):n("",!0),e("div",L,[e("div",null,[e("div",{class:"w-full bg-center bg-no-repeat bg-cover",style:P(`height: 300px; background-image: url('${s.profileUser.cover_image_url}');`)},[e("img",{class:"w-full h-full opacity-0",src:`${s.profileUser.cover_image_url}`,alt:"Cover Image"},null,8,F)],4),e("div",z,[e("div",M,[e("div",R,[e("div",G,[e("div",J,[e("img",{style:{height:"9rem",width:"9rem"},class:"relative transition bg-white border-4 border-white rounded-full md dark:bg-cool-gray-800 hover:bg-gray-200 dark:border-gray-600",src:s.profileUser.profile_photo_url,alt:""},null,8,O),q])])]),t.$page.props.user?(r(),l("div",H,[s.profileUser.id===t.$page.props.user.id?(r(),c(_,{key:0,href:t.route("profile.show"),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold bg-transparent border rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max border-light-blue-500 text-light-blue-500 hover:bg-light-blue-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[i(o(t.__("Edit")),1),e("span",K,"\xA0"+o(t.__("Profile")),1)]),_:1},8,["href"])):n("",!0),t.can("mute users")&&!s.profileUser.muted_at?(r(),c(_,{key:1,method:"post",as:"button",href:t.route("admin.user.mute",s.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-yellow-500 bg-transparent border border-yellow-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-yellow-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[i(o(t.__("Mute")),1),e("span",Q,"\xA0"+o(t.__("User")),1)]),_:1},8,["href"])):n("",!0),t.can("mute users")&&s.profileUser.muted_at?(r(),c(_,{key:2,method:"post",as:"button",href:t.route("admin.user.unmute",s.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-green-500 bg-transparent border border-green-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-green-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[i(o(t.__("UnMute")),1),W]),_:1},8,["href"])):n("",!0),t.can("ban users")&&!s.profileUser.banned_at?(r(),c(_,{key:3,method:"post",as:"button",href:t.route("admin.user.ban",s.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-red-500 bg-transparent border border-red-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-red-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[i(o(t.__("Ban")),1),e("span",X,"\xA0"+o(t.__("User")),1)]),_:1},8,["href"])):n("",!0),t.can("ban users")&&s.profileUser.banned_at?(r(),c(_,{key:4,method:"post",as:"button",href:t.route("admin.user.unban",s.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-green-500 bg-transparent border border-green-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-green-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[i(o(t.__("UnBan")),1),e("span",Y,"\xA0"+o(t.__("User")),1)]),_:1},8,["href"])):n("",!0),t.can("update users")?(r(),c(_,{key:5,href:t.route("admin.user.edit",s.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-light-blue-500 bg-transparent border border-light-blue-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-green-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[i(o(t.__("Edit")),1)]),_:1},8,["href"])):n("",!0)])):n("",!0)]),e("div",Z,[e("div",null,[h(k,{user:s.profileUser,"icon-class":"w-6 h-6","text-class":"text-xl"},null,8,["user"]),e("p",$," @"+o(s.profileUser.username),1)]),e("div",null,[(r(!0),l(b,null,g(s.profileUser.roles,a=>m((r(),l("img",{key:a.id,src:a.photo_url,alt:a.display_name,content:a.display_name,class:"focus:outline-none max-h-16"},null,8,ee)),[[f]])),128))]),e("div",te,[m((r(),l("p",{class:"text-sm font-medium leading-5 text-gray-600 focus:outline-none",title:t.formatToDayDateString(s.profileUser.created_at)},[i(o(t.__("Joined"))+": "+o(t.formatTimeAgoToNow(s.profileUser.created_at)),1)],8,se)),[[f]])])])])])]),e("div",oe,[e("div",re,[s.profileUser.players.length>0?(r(),l("div",ae,[(r(!0),l(b,null,g(s.profileUser.players,a=>(r(),l("div",{key:a.uuid,class:"flex justify-around p-4 space-x-4 border-b border-gray-200 dark:border-none"},[e("img",{src:`https://crafatar.com/renders/body/${a.uuid}?scale=4`,alt:a.username},null,8,le),e("div",ne,[e("div",ie,[h(_,{as:"a",href:t.route("player.show",a.uuid),class:"text-lg font-bold text-light-blue-400 hover:text-light-blue-500"},{default:d(()=>[i(o(a.username),1)]),_:2},1032,["href"])]),e("div",de,[e("p",ce,o(t.__("Position"))+": ",1),e("div",_e,[a.position?(r(),l("span",ue,o(a.position),1)):(r(),l("span",fe,o(t.__("None")),1))])]),e("div",me,[e("p",he,o(t.__("Rating"))+": ",1),a.rating!=null?m((r(),c(y,{key:0,class:"w-8 h-8 focus:outline-none",name:`rating-${a.rating}`,content:a.rating},null,8,["name","content"])),[[f]]):(r(),l("p",ge,o(t.__("None")),1))]),e("div",be,[e("p",ye,o(t.__("Rank"))+": ",1),e("div",pe,[a.rank?(r(),l("p",xe,o(a.rank.name),1)):(r(),l("p",ke,o(t.__("None")),1)),a.rank&&a.rank.photo_url?m((r(),l("img",{key:2,src:a.rank.photo_url,alt:a.rank.name,title:a.rank.name,class:"w-8 h-8 focus:outline-none"},null,8,we)),[[f]]):n("",!0)])]),e("div",ve,[e("p",Ue,o(t.__("Last Seen"))+": ",1),e("div",je,[m((r(),l("p",{class:"focus:outline-none dark:text-gray-200",title:t.formatToDayDateString(a.last_seen_at)},[i(o(t.formatTimeAgoToNow(a.last_seen_at)),1)],8,Be)),[[f]])])])])]))),128))])):n("",!0),s.profileUser.badges&&s.profileUser.badges.length>0?(r(),l("div",De,[Se,e("div",Te,[(r(!0),l(b,null,g(s.profileUser.badges,a=>m((r(),l("div",{key:a.id,title:a.name},[e("img",{class:"w-12 h-12",src:a.photo_url,alt:a.name},null,8,Ne)],8,Ce)),[[f]])),128))])])):n("",!0),s.profileUser.about?(r(),l("div",Ae,[e("span",Pe,o(s.profileUser.about),1)])):n("",!0),e("div",Ie,[e("div",Ve,[e("span",null,o(t.__("Country")),1),e("span",Ee,[i(o(s.profileUser.country.name)+" ",1),e("img",{class:"inline h-6 mb-1",src:s.profileUser.country.photo_path,alt:s.profileUser.country.name},null,8,Le)])]),e("div",Fe,[e("span",null,o(t.__("Day of Birth")),1),e("span",ze,o(s.profileUser.dob_string||t.__("unknown")),1)]),e("div",Me,[e("span",null,o(t.__("Gender")),1),e("span",Re,o(s.profileUser.gender_string||t.__("unknown")),1)]),e("div",Ge,[e("span",null,o(t.__("Total Posts")),1),e("span",Je,o(s.profileUser.posts_count),1)]),s.profileUser.social_links&&s.profileUser.social_links.s_discord_username?(r(),l("div",Oe,[e("span",null,o(t.__("Discord")),1),e("span",qe,o(s.profileUser.social_links.s_discord_username),1)])):n("",!0)]),s.profileUser.social_links?(r(),c(w,{key:3,enabled:!!s.profileUser.social_links,"show-title":!1,facebook:s.profileUser.social_links.s_facebook_url,youtube:s.profileUser.social_links.s_youtube_url,twitch:s.profileUser.social_links.s_twitch_url,twitter:s.profileUser.social_links.s_twitter_url,steam:s.profileUser.social_links.s_steam_profile_url,website:s.profileUser.social_links.s_website_url},null,8,["enabled","facebook","youtube","twitch","twitter","steam","website"])):n("",!0)]),t.$page.props.generalSettings.enable_status_feed?(r(),c(v,{key:0,username:s.profileUser.username,"show-empty-post":!0},null,8,["username"])):(r(),l("div",He,[e("span",Ke,o(t.__("Posts Feed is disabled!")),1)]))])])]),_:1})}const it=N(I,[["render",Qe]]);export{it as default};
