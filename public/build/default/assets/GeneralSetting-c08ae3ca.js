import{_ as P}from"./InputError-56878d47.js";import{_ as D}from"./SecondaryButton-bb5a8722.js";import{L as B}from"./LoadingButton-dcadc41d.js";import{X as R}from"./XInput-f009c806.js";import{I as C}from"./AppLayout-a080016c.js";import{E as I}from"./easymde-eca133ae.js";import{X as N}from"./XCheckbox-ef067584.js";import{T as M,l as b,o as a,c as T,w as f,b as t,a as s,t as d,i as v,d as i,e as m,j as x,m as w,p as V,f as k,F as j,g as A,v as F}from"./app-40253c50.js";import{_ as G}from"./AdminLayout-8e9e5df5.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-b0ead891.js";import"./use-resolve-button-type-e9f77412.js";import"./CloudArrowDownIcon-018ac40e.js";import"./index-37b20c98.js";const O={components:{AdminLayout:G,XCheckbox:N,JetInputError:P,LoadingButton:B,JetSecondaryButton:D,Icon:C,XInput:R},props:{settings:{type:Object,default:null}},data(){return{easyMDE:null,form:M({site_name:this.settings.site_name,enable_mcserver_onlineplayersbox:this.settings.enable_mcserver_onlineplayersbox,enable_mcserver_statuspingbox:this.settings.enable_mcserver_statuspingbox,enable_ingamechat:this.settings.enable_ingamechat,enable_shoutbox:this.settings.enable_shoutbox,enable_welcomebox:this.settings.enable_welcomebox,welcomebox_content:this.settings.welcomebox_content,enable_voteforserverbox:this.settings.enable_voteforserverbox,voteforserverbox_content:this.settings.voteforserverbox_content||[{url:"",name:""}],enable_onlineuserbox:this.settings.enable_onlineuserbox,enable_newuserbox:this.settings.enable_newuserbox,enable_didyouknowbox:this.settings.enable_didyouknowbox,enable_socialbox:this.settings.enable_socialbox,enable_topplayersbox:this.settings.enable_topplayersbox,youtube_url:this.settings.youtube_url,facebook_url:this.settings.facebook_url,twitter_url:this.settings.twitter_url,twitch_url:this.settings.twitch_url,tiktok_url:this.settings.tiktok_url,linkedin_url:this.settings.linkedin_url,instagram_url:this.settings.instagram_url,whatsapp_url:this.settings.whatsapp_url,telegram_url:this.settings.telegram_url,reddit_url:this.settings.reddit_url,threads_url:this.settings.threads_url,github_url:this.settings.github_url,discord_invite_url:this.settings.discord_invite_url,enable_discordbox:this.settings.enable_discordbox,discord_server_id:this.settings.discord_server_id,enable_donation_box:this.settings.enable_donation_box,donation_box_url:this.settings.donation_box_url,enable_status_feed:this.settings.enable_status_feed,photo_light:null,photo_dark:null,header_broadcast_text:this.settings.header_broadcast_text,header_broadcast_url:this.settings.header_broadcast_url}),photoPreview:null,photoPreviewDark:null}},mounted(){this.easyMDE=new I({previewClass:"editor-preview prose max-w-none",element:document.querySelector("#welcomebox_content")})},methods:{updatePhotoPreview(){const o=new FileReader;o.onload=l=>{this.photoPreview=l.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreviewDark(){const o=new FileReader;o.onload=l=>{this.photoPreviewDark=l.target.result},o.readAsDataURL(this.$refs.photo_dark.files[0])},selectNewPhotoDark(){this.$refs.photo_dark.click()},addMoreVotingSite(){this.form.voteforserverbox_content.push({url:"",name:""})},deleteVotingSite(o){this.form.voteforserverbox_content.splice(o,1)},saveSetting(){this.$refs.photo&&(this.form.photo_light=this.$refs.photo.files[0]),this.$refs.photo_dark&&(this.form.photo_dark=this.$refs.photo_dark.files[0]),this.form.welcomebox_content=this.easyMDE.value(),this.form.post(route("admin.setting.general.update"),{preserveScroll:!0})}}},z={class:"flex max-w-6xl px-10 py-12 mx-auto"},K={class:"flex-1"},X={class:"flex flex-col w-full"},Y={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},J={class:"px-6 py-4 font-bold border-b dark:border-gray-700 dark:text-gray-200"},W={class:"mt-10 sm:mt-0"},q={class:"md:grid md:grid-cols-3 md:gap-6"},Q={class:"mt-5 md:mt-0 md:col-span-3"},Z={class:"overflow-hidden shadow sm:rounded-md"},$={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},ee={class:"grid grid-cols-6 gap-6"},oe={class:"col-span-6 sm:col-span-3"},le={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},re=["src"],se={class:"mt-2"},te={class:"col-span-6 sm:col-span-3"},ne={for:"photo_dark",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},ae=["src"],ie={class:"mt-2"},me={class:"col-span-6 sm:col-span-6"},_e={class:"flex items-center col-span-6 sm:col-span-3"},ue={class:"flex items-center col-span-6 sm:col-span-3"},de={class:"flex items-center col-span-6 sm:col-span-3"},be={class:"flex items-center col-span-6 sm:col-span-3"},pe={class:"flex items-center col-span-6 sm:col-span-3"},ce={class:"flex items-center col-span-6 sm:col-span-3"},he={class:"flex items-center col-span-6 sm:col-span-3"},fe={class:"flex items-center col-span-6 sm:col-span-3"},xe={class:"flex items-center col-span-6 sm:col-span-3"},ge={class:"col-span-6 sm:col-span-3"},ve={key:0,class:"col-span-6 sm:col-span-3"},we={key:1,class:"col-span-6 sm:col-span-3"},ke={key:2,class:"col-span-6 sm:col-span-3"},ye={key:3,class:"col-span-6 sm:col-span-3"},Ve={key:4,class:"col-span-6 sm:col-span-3"},Ue={key:5,class:"col-span-6 sm:col-span-3"},Se={key:6,class:"col-span-6 sm:col-span-3"},Ee={key:7,class:"col-span-6 sm:col-span-3"},Le={key:8,class:"col-span-6 sm:col-span-3"},Pe={key:9,class:"col-span-6 sm:col-span-3"},De={key:10,class:"col-span-6 sm:col-span-3"},Be={key:11,class:"col-span-6 sm:col-span-3"},Re={class:"flex items-center col-span-6 sm:col-span-3"},Ce={key:12,class:"col-span-6 sm:col-span-3"},Ie={class:"flex items-center col-span-6 sm:col-span-3"},Ne={key:13,class:"col-span-6 sm:col-span-3"},Me={class:"flex items-center col-span-6 sm:col-span-6"},Te={key:14,class:"flex-col col-span-6 space-y-1 sm:col-span-6"},je={class:"flex space-x-4"},Ae=s("div",{class:"w-5"},null,-1),Fe={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Ge={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},He=["onClick"],Oe={class:"flex-1"},ze={class:"flex-1"},Ke={class:"flex justify-end mt-1"},Xe={class:"flex items-center col-span-3 sm:col-span-3"},Ye={class:"flex items-center col-span-3 sm:col-span-3"},Je={class:"col-span-6 sm:col-span-6"},We={class:"col-span-6 sm:col-span-3"},qe={class:"col-span-6 sm:col-span-3"},Qe={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function Ze(o,l,c,$e,e,u){const U=b("app-head"),y=b("jet-secondary-button"),g=b("jet-input-error"),n=b("x-input"),_=b("x-checkbox"),S=b("icon"),E=b("loading-button"),L=b("AdminLayout");return a(),T(L,null,{default:f(()=>[t(U,{title:o.__("General Settings")},null,8,["title"]),s("div",z,[s("div",K,[s("div",X,[s("div",Y,[s("div",J,d(o.__("General Settings")),1),s("div",W,[s("div",q,[s("div",Q,[s("form",{autocomplete:"off",onSubmit:l[36]||(l[36]=v((...r)=>u.saveSetting&&u.saveSetting(...r),["prevent"]))},[s("div",Z,[s("div",$,[s("div",ee,[s("div",oe,[s("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:l[0]||(l[0]=(...r)=>u.updatePhotoPreview&&u.updatePhotoPreview(...r))},null,544),s("label",le,d(o.__("Site Header Logo Image Light (200x40)")),1),c.settings.site_header_logo_path_light&&!e.photoPreview?(a(),i("img",{key:0,src:c.settings.site_header_logo_path_light,alt:"",class:"h-14"},null,8,re)):m("",!0),x(s("div",se,[s("span",{class:"block h-14",style:V("background-size: contain; background-repeat: no-repeat; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[w,e.photoPreview]]),t(y,{class:"mt-2 mr-2",type:"button",onClick:v(u.selectNewPhoto,["prevent"])},{default:f(()=>[k(d(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),t(g,{message:e.form.errors.photo_light,class:"mt-2"},null,8,["message"])]),s("div",te,[s("input",{id:"photo_dark",ref:"photo_dark",type:"file",class:"hidden",onChange:l[1]||(l[1]=(...r)=>u.updatePhotoPreviewDark&&u.updatePhotoPreviewDark(...r))},null,544),s("label",ne,d(o.__("Site Header Logo Image Dark (200x40)")),1),c.settings.site_header_logo_path_dark&&!e.photoPreviewDark?(a(),i("img",{key:0,src:c.settings.site_header_logo_path_dark,alt:"",class:"h-14"},null,8,ae)):m("",!0),x(s("div",ie,[s("span",{class:"block h-14",style:V("background-size: contain; background-repeat: no-repeat; background-image: url('"+e.photoPreviewDark+"');")},null,4)],512),[[w,e.photoPreviewDark]]),t(y,{class:"mt-2 mr-2",type:"button",onClick:v(u.selectNewPhotoDark,["prevent"])},{default:f(()=>[k(d(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),t(g,{message:e.form.errors.photo_dark,class:"mt-2"},null,8,["message"])]),s("div",me,[t(n,{id:"site_name",modelValue:e.form.site_name,"onUpdate:modelValue":l[2]||(l[2]=r=>e.form.site_name=r),label:o.__("Site Name"),error:e.form.errors.site_name,type:"text",name:"site_nme"},null,8,["modelValue","label","error"])]),s("div",_e,[t(_,{id:"enable_mcserver_onlineplayersbox",modelValue:e.form.enable_mcserver_onlineplayersbox,"onUpdate:modelValue":l[3]||(l[3]=r=>e.form.enable_mcserver_onlineplayersbox=r),label:o.__("Online Players List Box"),help:o.__("Show live server player list in homepage. Query must be enabled for this to work."),name:"enable_mcserver_onlineplayersbox",error:e.form.errors.enable_mcserver_onlineplayersbox},null,8,["modelValue","label","help","error"])]),s("div",ue,[t(_,{id:"enable_mcserver_statuspingbox",modelValue:e.form.enable_mcserver_statuspingbox,"onUpdate:modelValue":l[4]||(l[4]=r=>e.form.enable_mcserver_statuspingbox=r),label:o.__("Online Players Count Box"),help:o.__("Show live player count box. Ping must be enabled for this to work."),name:"enable_mcserver_statuspingbox",error:e.form.errors.enable_mcserver_statuspingbox},null,8,["modelValue","label","help","error"])]),s("div",de,[t(_,{id:"enable_ingamechat",modelValue:e.form.enable_ingamechat,"onUpdate:modelValue":l[5]||(l[5]=r=>e.form.enable_ingamechat=r),label:o.__("In-Game Chat"),help:o.__("Show ingame chatbox in homepage."),name:"enable_ingamechat",error:e.form.errors.enable_ingamechat},null,8,["modelValue","label","help","error"])]),s("div",be,[t(_,{id:"enable_shoutbox",modelValue:e.form.enable_shoutbox,"onUpdate:modelValue":l[6]||(l[6]=r=>e.form.enable_shoutbox=r),label:o.__("Shout Box"),help:o.__("Enable shoutbox"),name:"enable_shoutbox",error:e.form.errors.enable_shoutbox},null,8,["modelValue","label","help","error"])]),s("div",pe,[t(_,{id:"enable_onlineuserbox",modelValue:e.form.enable_onlineuserbox,"onUpdate:modelValue":l[7]||(l[7]=r=>e.form.enable_onlineuserbox=r),label:o.__("Online Users Box"),help:o.__("Enable online users list box."),name:"enable_onlineuserbox",error:e.form.errors.enable_onlineuserbox},null,8,["modelValue","label","help","error"])]),s("div",ce,[t(_,{id:"enable_newuserbox",modelValue:e.form.enable_newuserbox,"onUpdate:modelValue":l[8]||(l[8]=r=>e.form.enable_newuserbox=r),label:o.__("Newest User Box"),help:o.__("Enable newest user box."),name:"enable_newuserbox",error:e.form.errors.enable_newuserbox},null,8,["modelValue","label","help","error"])]),s("div",he,[t(_,{id:"enable_didyouknowbox",modelValue:e.form.enable_didyouknowbox,"onUpdate:modelValue":l[9]||(l[9]=r=>e.form.enable_didyouknowbox=r),label:o.__("DidYouKnow Box"),help:o.__("Enable DidYouKnow Box"),name:"enable_didyouknowbox",error:e.form.errors.enable_didyouknowbox},null,8,["modelValue","label","help","error"])]),s("div",fe,[t(_,{id:"enable_topplayersbox",modelValue:e.form.enable_topplayersbox,"onUpdate:modelValue":l[10]||(l[10]=r=>e.form.enable_topplayersbox=r),label:o.__("Top Players Box"),help:o.__("Enable Top Players Box in Homepage"),name:"enable_topplayersbox",error:e.form.errors.enable_topplayersbox},null,8,["modelValue","label","help","error"])]),s("div",xe,[t(_,{id:"enable_socialbox",modelValue:e.form.enable_socialbox,"onUpdate:modelValue":l[11]||(l[11]=r=>e.form.enable_socialbox=r),label:o.__("Socials Box"),help:o.__("Enable social box in homepage."),name:"enable_socialbox",error:e.form.errors.enable_socialbox},null,8,["modelValue","label","help","error"])]),s("div",ge,[t(n,{id:"discord_invite_url",modelValue:e.form.discord_invite_url,"onUpdate:modelValue":l[12]||(l[12]=r=>e.form.discord_invite_url=r),label:o.__("Discord Invite URL"),error:e.form.errors.discord_invite_url,autocomplete:"discord_invite_url",type:"text",name:"discord_invite_url",help:o.__("Eg: https://discord.gg/Hzfj27k"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),e.form.enable_socialbox?(a(),i("div",ve,[t(n,{id:"youtube_url",modelValue:e.form.youtube_url,"onUpdate:modelValue":l[13]||(l[13]=r=>e.form.youtube_url=r),label:o.__("Youtube URL"),error:e.form.errors.youtube_url,autocomplete:"youtube_url",type:"text",name:"youtube_url",help:o.__("Eg: https://www.youtube.com/channel/UCsMdRMBnxIVO0K_YS0KHiMA"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",we,[t(n,{id:"facebook_url",modelValue:e.form.facebook_url,"onUpdate:modelValue":l[14]||(l[14]=r=>e.form.facebook_url=r),label:o.__("Facebook URL"),error:e.form.errors.facebook_url,autocomplete:"facebook_url",type:"text",name:"facebook_url",help:o.__("Eg: https://www.facebook.com/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",ke,[t(n,{id:"twitter_url",modelValue:e.form.twitter_url,"onUpdate:modelValue":l[15]||(l[15]=r=>e.form.twitter_url=r),label:o.__("Twitter URL"),error:e.form.errors.twitter_url,autocomplete:"twitter_url",type:"text",name:"twitter_url",help:o.__("Eg: https://www.twitter.com/minetraxsuite"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",ye,[t(n,{id:"twitch_url",modelValue:e.form.twitch_url,"onUpdate:modelValue":l[16]||(l[16]=r=>e.form.twitch_url=r),label:o.__("Twitch URL"),error:e.form.errors.twitch_url,autocomplete:"twitch_url",type:"text",name:"twitch_url",help:o.__("Eg: https://www.twitch.tv/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Ve,[t(n,{id:"tiktok_url",modelValue:e.form.tiktok_url,"onUpdate:modelValue":l[17]||(l[17]=r=>e.form.tiktok_url=r),label:o.__("TikTok URL"),error:e.form.errors.tiktok_url,autocomplete:"tiktok_url",type:"text",name:"tiktok_url",help:o.__("Eg: https://www.tiktok.com/@minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Ue,[t(n,{id:"linkedin_url",modelValue:e.form.linkedin_url,"onUpdate:modelValue":l[18]||(l[18]=r=>e.form.linkedin_url=r),label:o.__("LinkedIn URL"),error:e.form.errors.linkedin_url,autocomplete:"linkedin_url",type:"text",name:"linkedin_url",help:o.__("Eg: https://www.linkedin.com/in/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Se,[t(n,{id:"instagram_url",modelValue:e.form.instagram_url,"onUpdate:modelValue":l[19]||(l[19]=r=>e.form.instagram_url=r),label:o.__("Instagram URL"),error:e.form.errors.instagram_url,autocomplete:"instagram_url",type:"text",name:"instagram_url",help:o.__("Eg: https://www.instagram.com/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Ee,[t(n,{id:"whatsapp_url",modelValue:e.form.whatsapp_url,"onUpdate:modelValue":l[20]||(l[20]=r=>e.form.whatsapp_url=r),label:o.__("WhatsApp URL"),error:e.form.errors.whatsapp_url,autocomplete:"whatsapp_url",type:"text",name:"whatsapp_url",help:o.__("Eg: https://wa.me/123456789"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Le,[t(n,{id:"telegram_url",modelValue:e.form.telegram_url,"onUpdate:modelValue":l[21]||(l[21]=r=>e.form.telegram_url=r),label:o.__("Telegram URL"),error:e.form.errors.telegram_url,autocomplete:"telegram_url",type:"text",name:"telegram_url",help:o.__("Eg: https://t.me/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Pe,[t(n,{id:"reddit_url",modelValue:e.form.reddit_url,"onUpdate:modelValue":l[22]||(l[22]=r=>e.form.reddit_url=r),label:o.__("Reddit URL"),error:e.form.errors.reddit_url,autocomplete:"reddit_url",type:"text",name:"reddit_url",help:o.__("Eg: https://www.reddit.com/r/minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",De,[t(n,{id:"threads_url",modelValue:e.form.threads_url,"onUpdate:modelValue":l[23]||(l[23]=r=>e.form.threads_url=r),label:o.__("Threads URL"),error:e.form.errors.threads_url,autocomplete:"threads_url",type:"text",name:"threads_url",help:o.__("Eg: https://www.threads.net/@minecraft"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),e.form.enable_socialbox?(a(),i("div",Be,[t(n,{id:"github_url",modelValue:e.form.github_url,"onUpdate:modelValue":l[24]||(l[24]=r=>e.form.github_url=r),label:o.__("GitHub URL"),error:e.form.errors.github_url,autocomplete:"github_url",type:"text",name:"github_url",help:o.__("Eg: https://www.github.com/minetrax"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),s("div",Re,[t(_,{id:"enable_discordbox",modelValue:e.form.enable_discordbox,"onUpdate:modelValue":l[25]||(l[25]=r=>e.form.enable_discordbox=r),label:o.__("Discord Box"),help:o.__("Enable Discord Server Box"),name:"enable_discordbox",error:e.form.errors.enable_discordbox},null,8,["modelValue","label","help","error"])]),e.form.enable_discordbox?(a(),i("div",Ce,[t(n,{id:"discord_server_id",modelValue:e.form.discord_server_id,"onUpdate:modelValue":l[26]||(l[26]=r=>e.form.discord_server_id=r),label:o.__("Discord Server ID"),error:e.form.errors.discord_server_id,autocomplete:"discord_server_id",type:"text",name:"discord_server_id",help:o.__("Eg: 453365679416646355"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),s("div",Ie,[t(_,{id:"enable_donation_box",modelValue:e.form.enable_donation_box,"onUpdate:modelValue":l[27]||(l[27]=r=>e.form.enable_donation_box=r),label:o.__("Donation Box"),help:o.__("Enable Donation Box."),name:"enable_donation_box",error:e.form.errors.enable_donation_box},null,8,["modelValue","label","help","error"])]),e.form.enable_donation_box?(a(),i("div",Ne,[t(n,{id:"donation_box_url",modelValue:e.form.donation_box_url,"onUpdate:modelValue":l[28]||(l[28]=r=>e.form.donation_box_url=r),label:o.__("Donation URL"),error:e.form.errors.donation_box_url,autocomplete:"donation_box_url",type:"text",name:"donation_box_url",help:o.__("Eg: https://paypal.me/@username"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])])):m("",!0),s("div",Me,[t(_,{id:"enable_voteforserverbox",modelValue:e.form.enable_voteforserverbox,"onUpdate:modelValue":l[29]||(l[29]=r=>e.form.enable_voteforserverbox=r),label:o.__("Vote for Server Box"),help:o.__("Enable Vote for server box."),name:"enable_voteforserverbox",error:e.form.errors.enable_voteforserverbox},null,8,["modelValue","label","help","error"])]),e.form.enable_voteforserverbox?(a(),i("div",Te,[s("div",je,[Ae,s("label",Fe,d(o.__("Voting Site Link")),1),s("label",Ge,d(o.__("Display Name")),1)]),(a(!0),i(j,null,A(e.form.voteforserverbox_content,(r,p)=>(a(),i("div",{key:p,class:"flex space-x-4"},[s("button",{type:"button",class:"focus:outline-none group",onClick:h=>u.deleteVotingSite(p)},[t(S,{class:"w-5 h-5 text-gray-300 group-hover:text-red-500",name:"trash"})],8,He),s("div",Oe,[t(n,{modelValue:r.url,"onUpdate:modelValue":h=>r.url=h,label:o.__("Voting Site URL :index",{index:p+1}),error:e.form.errors[`voteforserverbox_content.${p}.url`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])]),s("div",ze,[t(n,{modelValue:r.name,"onUpdate:modelValue":h=>r.name=h,label:o.__("Voting Site Name :index",{index:p+1}),error:e.form.errors[`voteforserverbox_content.${p}.name`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])])]))),128)),s("div",Ke,[s("button",{type:"button",class:"p-1.5 text-xs text-light-blue-500 rounded border border-light-blue-500 focus:outline-none",onClick:l[30]||(l[30]=(...r)=>u.addMoreVotingSite&&u.addMoreVotingSite(...r))},d(o.__("Add More")),1)])])):m("",!0),s("div",Xe,[t(_,{id:"enable_status_feed",modelValue:e.form.enable_status_feed,"onUpdate:modelValue":l[31]||(l[31]=r=>e.form.enable_status_feed=r),label:o.__("Enable Status Feed"),help:o.__("Let player post status on homepage?"),name:"enable_status_feed",error:e.form.errors.enable_status_feed},null,8,["modelValue","label","help","error"])]),s("div",Ye,[t(_,{id:"enable_welcomebox",modelValue:e.form.enable_welcomebox,"onUpdate:modelValue":l[32]||(l[32]=r=>e.form.enable_welcomebox=r),label:o.__("Welcome Box"),help:o.__("Enable welcome box in homepage."),name:"enable_welcomebox",error:e.form.errors.enable_welcomebox},null,8,["modelValue","label","help","error"])]),x(s("div",Je,[x(s("textarea",{id:"welcomebox_content","onUpdate:modelValue":l[33]||(l[33]=r=>e.form.welcomebox_content=r),"aria-label":"welcomebox",name:"welcomebox_content",class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"},null,512),[[F,e.form.welcomebox_content]]),t(g,{message:e.form.errors.welcomebox_content,class:"mt-2"},null,8,["message"])],512),[[w,e.form.enable_welcomebox]]),s("div",We,[t(n,{id:"header_broadcast_text",modelValue:e.form.header_broadcast_text,"onUpdate:modelValue":l[34]||(l[34]=r=>e.form.header_broadcast_text=r),label:o.__("Broadcast Text"),error:e.form.errors.header_broadcast_text,type:"text",help:o.__("Some important info or something to show in top at every page."),name:"header_broadcast_text"},null,8,["modelValue","label","error","help"])]),s("div",qe,[t(n,{id:"header_broadcast_url",modelValue:e.form.header_broadcast_url,"onUpdate:modelValue":l[35]||(l[35]=r=>e.form.header_broadcast_url=r),label:o.__("Broadcast URL"),error:e.form.errors.header_broadcast_url,help:o.__("URL to redirect when broadcast text is clicked. Leave empty to not redirect."),type:"text",name:"header_broadcast_url"},null,8,["modelValue","label","error","help"])])])]),s("div",Qe,[t(E,{loading:e.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-bold text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50 dark:bg-cool-gray-700 dark:hover:bg-cool-gray-600",type:"submit"},{default:f(()=>[k(d(o.__("Save General Settings")),1)]),_:1},8,["loading"])])])],32)])])])])])])])]),_:1})}const co=H(O,[["render",Ze]]);export{co as default};
