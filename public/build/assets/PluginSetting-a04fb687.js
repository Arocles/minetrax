import{L as A}from"./LoadingButton-e3fccb22.js";import{_ as E}from"./CopyToClipboard-da0e6391.js";import{X as L}from"./XInput-b0a341fb.js";import{X as U}from"./XCheckbox-7799a05e.js";import{X as j}from"./XSelect-fdfe12d8.js";import{_ as I,T as R,l as a,q as b,o as g,c as h,w as c,b as r,a as o,t as p,j as t,f as k,i as T,m}from"./app-ab7f0bba.js";import{_ as X}from"./AdminLayout-ea4e1499.js";import"./AppLayout-8715e6d2.js";import"./useAuthorizable-1f35cec3.js";import"./CloudArrowDownIcon-809b19cc.js";import"./index-34764b0e.js";const B={components:{AdminLayout:X,XCheckbox:U,LoadingButton:A,XInput:L,CopyToClipboard:E,XSelect:j},props:{settings:Object,servers:Object},data(){return{form:R({enable_api:this.settings.enable_api,enable_account_link:this.settings.enable_account_link,max_players_link_per_account:this.settings.max_players_link_per_account,account_link_after_success_command:this.settings.account_link_after_success_command,account_link_after_success_broadcast_message:this.settings.account_link_after_success_broadcast_message,enable_sync_player_ranks_from_server:this.settings.enable_sync_player_ranks_from_server,sync_player_ranks_from_server_id:this.settings.sync_player_ranks_from_server_id})}},methods:{savePluginSetting(){this.form.post(route("admin.setting.plugin.update"),{preserveScroll:!0})}}},N={class:"py-12 px-10 max-w-6xl mx-auto flex"},D={class:"flex-1"},K={class:"flex flex-col w-full"},M={class:"bg-white dark:bg-cool-gray-800 shadow w-full rounded"},O={class:"px-6 py-4 border-b dark:border-gray-700 dark:text-gray-300 font-bold"},Y={class:"mt-10 sm:mt-0"},q={class:"md:grid md:grid-cols-3 md:gap-6"},F={class:"mt-5 md:mt-0 md:col-span-3"},W={class:"flex items-center justify-end col-span-6 sm:col-span-2 px-6 py-2"},z={class:"shadow overflow-hidden sm:rounded-md"},G={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},H={class:"grid grid-cols-6 gap-6"},J={class:"flex items-center col-span-6 sm:col-span-4"},Q={class:"col-span-6 sm:col-span-6"},Z={class:"col-span-6 sm:col-span-6"},$={class:"flex items-center col-span-6 sm:col-span-2"},ee={class:"col-span-6 sm:col-span-4"},se={class:"col-span-6 sm:col-span-6"},oe={class:"col-span-6 sm:col-span-6"},ne={class:"flex items-center col-span-6 sm:col-span-6"},le={class:"col-span-6 sm:col-span-6"},re={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function ae(e,l,i,te,s,f){const v=a("app-head"),x=a("inertia-link"),d=a("x-checkbox"),_=a("x-input"),y=a("copy-to-clipboard"),w=a("x-select"),V=a("loading-button"),S=a("AdminLayout"),C=b("confirm"),u=b("tippy");return g(),h(S,null,{default:c(()=>[r(v,{title:e.__("Plugin Settings")},null,8,["title"]),o("div",N,[o("div",D,[o("div",K,[o("div",M,[o("div",O,p(e.__("Plugin Settings")),1),o("div",Y,[o("div",q,[o("div",F,[o("div",W,[t((g(),h(x,{title:e.__("Warning: This will Regenerate your API and Secret Key."),as:"button",method:"post",href:e.route("admin.setting.plugin.keygen"),class:"inline-flex justify-center py-2 px-4 border border-2 border-red-500 shadow-sm text-sm font-bold rounded-md text-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"},{default:c(()=>[k(p(e.__("Regenerate API Credentials")),1)]),_:1},8,["title","href"])),[[C,{message:e.__("Are you sure? This will regenerate new API Key and Secret and you will have to change in your Plugin config.yml")}],[u]])]),o("form",{autocomplete:"off",onSubmit:l[7]||(l[7]=T((...n)=>f.savePluginSetting&&f.savePluginSetting(...n),["prevent"]))},[o("div",z,[o("div",G,[o("div",H,[o("div",J,[r(d,{id:"enable_api",modelValue:s.form.enable_api,"onUpdate:modelValue":l[0]||(l[0]=n=>s.form.enable_api=n),label:e.__("Enable Plugin"),help:e.__("Enable this if you are having MineTrax plugin installed in your server."),name:"enable_api",error:s.form.errors.enable_api},null,8,["modelValue","label","help","error"])]),o("div",Q,[r(y,null,{default:c(n=>[t(r(_,{id:"plugin_api_key",title:e.__("Click to Copy"),"model-value":n.status==="copied"?e.__("Copied to Clipboard!"):i.settings.plugin_api_key,label:e.__("API Key"),type:"text",name:"plugin_api_key","input-class":"disabled:opacity-100 hover:cursor-pointer",onClick:P=>n.copy(i.settings.plugin_api_key)},null,8,["title","model-value","label","onClick"]),[[u]])]),_:1})]),o("div",Z,[r(y,null,{default:c(n=>[t(r(_,{id:"plugin_api_secret",title:e.__("Click to Copy"),"model-value":n.status==="copied"?e.__("Copied to Clipboard!"):i.settings.plugin_api_secret,label:e.__("API Secret"),type:"text",name:"plugin_api_secret","input-class":"disabled:opacity-100 hover:cursor-pointer",onClick:P=>n.copy(i.settings.plugin_api_secret)},null,8,["title","model-value","label","onClick"]),[[u]])]),_:1})]),o("div",$,[r(d,{id:"enable_account_link",modelValue:s.form.enable_account_link,"onUpdate:modelValue":l[1]||(l[1]=n=>s.form.enable_account_link=n),label:e.__("Enable Account Link"),help:e.__("Enable user to link their players to account"),name:"enable_account_link",error:s.form.errors.enable_account_link},null,8,["modelValue","label","help","error"])]),t(o("div",ee,[r(_,{id:"max_players_link_per_account",modelValue:s.form.max_players_link_per_account,"onUpdate:modelValue":l[2]||(l[2]=n=>s.form.max_players_link_per_account=n),label:e.__("Max Players Per Account"),help:e.__("Number of players that can be linked to one account in website."),type:"number",name:"max_players_link_per_account",error:s.form.errors.max_players_link_per_account,"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])],512),[[m,s.form.enable_account_link]]),t(o("div",se,[r(_,{id:"account_link_after_success_command",modelValue:s.form.account_link_after_success_command,"onUpdate:modelValue":l[3]||(l[3]=n=>s.form.account_link_after_success_command=n),label:e.__("Account Link Success Command"),help:e.__("Use this to reward players when they link account: Eg: give {PLAYER} diamond 1"),type:"text",name:"account_link_after_success_command",error:s.form.errors.account_link_after_success_command,"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])],512),[[m,s.form.enable_account_link]]),t(o("div",oe,[r(_,{id:"account_link_after_success_broadcast_message",modelValue:s.form.account_link_after_success_broadcast_message,"onUpdate:modelValue":l[4]||(l[4]=n=>s.form.account_link_after_success_broadcast_message=n),label:e.__("Account Link Success Broadcast"),help:e.__("If set then this will be broadcast to server when player link is successful: Eg: {PLAYER} has successfully linked his account and won a ultra key."),type:"text",name:"account_link_after_success_broadcast_message",error:s.form.errors.account_link_after_success_broadcast_message,"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])],512),[[m,s.form.enable_account_link]]),o("div",ne,[r(d,{id:"enable_sync_player_ranks_from_server",modelValue:s.form.enable_sync_player_ranks_from_server,"onUpdate:modelValue":l[5]||(l[5]=n=>s.form.enable_sync_player_ranks_from_server=n),label:e.__("Enable Player Rank Sync"),help:e.__("Enable this if you want to sync your player rank from server instead of website calculated rank. you must create a rank for each group you have in server making sure rank shortname matches the name of your player group in server."),name:"enable_sync_player_ranks_from_server",error:s.form.errors.enable_sync_player_ranks_from_server},null,8,["modelValue","label","help","error"])]),t(o("div",le,[r(w,{id:"sync_player_ranks_from_server_id",modelValue:s.form.sync_player_ranks_from_server_id,"onUpdate:modelValue":l[6]||(l[6]=n=>s.form.sync_player_ranks_from_server_id=n),name:"sync_player_ranks_from_server_id",error:s.form.errors.sync_player_ranks_from_server_id,label:e.__("Rank Sync From Server"),placeholder:e.__("Choose a server from which we should sync the rank.."),"disable-null":!1,"select-list":i.servers},null,8,["modelValue","error","label","placeholder","select-list"])],512),[[m,s.form.enable_sync_player_ranks_from_server]])])]),o("div",re,[r(V,{loading:s.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50 dark:bg-cool-gray-700 dark:hover:bg-cool-gray-600",type:"submit"},{default:c(()=>[k(p(e.__("Save Plugin Settings")),1)]),_:1},8,["loading"])])])],32)])])])])])])])]),_:1})}const he=I(B,[["render",ae]]);export{he as default};
