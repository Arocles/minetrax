import{A as E}from"./AppLayout.5d858a44.js";import{_ as B}from"./InputError.ec61c2b6.js";import{_ as C}from"./SecondaryButton.e9aef2c3.js";import{L as R}from"./LoadingButton.64cf8154.js";import{X as N}from"./XInput.0385b751.js";import{_ as X}from"./Label.9cdb9b0d.js";import{i as A}from"./index.es.fd5109a8.js";import{X as T}from"./XCheckbox.efd711f8.js";import{X as I}from"./XSelect.8bee4d5e.js";import{X as O}from"./XTextarea.62fce205.js";import{s as Y}from"./vue-multiselect.esm.33285b91.js";import{_ as F,p as a,o as d,c as G,w as p,b as t,a as l,t as u,l as y,d as c,x as w,z as v,J,f as k,e as f}from"./app.304209a1.js";const z={components:{XTextarea:O,XSelect:I,XCheckbox:T,AppLayout:E,JetInputError:B,LoadingButton:R,JetSecondaryButton:C,XInput:N,JetLabel:X,DatePicker:A,Multiselect:Y},props:{userData:Object,rolesList:Object,badgesList:Object,countryList:Object},data(){return{form:this.$inertia.form({_method:"PUT",username:this.userData.username,name:this.userData.name,email:this.userData.email,photo:null,dob:this.userData.dob,gender:this.userData.gender,cover_image_url:this.userData.cover_image_url,s_discord_username:this.userData.social_links?this.userData.social_links.s_discord_username:null,s_steam_profile_url:this.userData.social_links?this.userData.social_links.s_steam_profile_url:null,s_twitter_url:this.userData.social_links?this.userData.social_links.s_twitter_url:null,s_youtube_url:this.userData.social_links?this.userData.social_links.s_youtube_url:null,s_facebook_url:this.userData.social_links?this.userData.social_links.s_facebook_url:null,s_twitch_url:this.userData.social_links?this.userData.social_links.s_twitch_url:null,s_website_url:this.userData.social_links?this.userData.social_links.s_website_url:null,about:this.userData.about,profile_photo_source:this.userData.settings?this.userData.settings.profile_photo_source:null,show_gender:this.userData.settings?!!+this.userData.settings.show_gender:!1,show_yob:this.userData.settings?!!+this.userData.settings.show_yob:!1,verified:!!this.userData.verified_at,role:this.userData.roles[0].name,badges:this.userData.badges,country:this.userData.country,country_id:this.userData.country_id}),photoPreview:null}},methods:{updateUserInformation(){var s;this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]);const o=this.form.badges;this.form.badges=this.form.badges.map(n=>n.id),this.form.country_id=(s=this.form.country)==null?void 0:s.id,this.form.post(route("admin.user.update",this.userData.id),{preserveScroll:!0}),this.form.badges=o},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const o=new FileReader;o.onload=s=>{this.photoPreview=s.target.result},o.readAsDataURL(this.$refs.photo.files[0])}}},M={class:"max-w-6xl px-10 py-12 mx-auto"},W={class:"flex justify-between mb-8"},q={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},H={class:"mt-10 sm:mt-0"},K={class:"md:grid md:grid-cols-3 md:gap-6"},Q={class:"md:col-span-1"},Z={class:"px-4 sm:px-0"},$={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},ee={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},oe={class:"mt-5 md:mt-0 md:col-span-2"},se={class:"shadow sm:rounded-md"},re={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},le={class:"grid grid-cols-6 gap-6"},te={key:0,class:"hidden col-span-6 sm:col-span-4"},ae={class:"mt-2"},ie=["src","alt"],ne={class:"mt-2"},ue={class:"col-span-6 sm:col-span-3"},me={class:"col-span-6 sm:col-span-3"},de={class:"col-span-6 sm:col-span-3"},_e={class:"col-span-6 sm:col-span-3"},pe={class:"relative col-span-6 sm:col-span-3"},ce={for:"dob",class:"absolute -top-2.5 left-0 px-3 py-5 text-xs text-gray-500 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"},fe={key:1,class:"col-span-6 sm:col-span-3"},he={class:"col-span-6 sm:col-span-3"},be={key:2,class:"col-span-6 sm:col-span-3"},ge={class:"col-span-6 sm:col-span-3"},ye={class:"col-span-6 sm:col-span-3"},we={class:"col-span-6 sm:col-span-3"},ve={class:"col-span-6 sm:col-span-3"},ke={class:"col-span-6 sm:col-span-3"},Ve={class:"col-span-6 sm:col-span-3"},De={class:"col-span-6 sm:col-span-3"},Ue={class:"col-span-6 sm:col-span-3"},xe={class:"col-span-6 sm:col-span-3"},Pe={class:"col-span-6 sm:col-span-3"},Se={key:3,class:"col-span-6 sm:col-span-3"},Le={for:"badges",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},je={class:"col-span-6 sm:col-span-3"},Ee={for:"badges",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Be={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function Ce(o,s,n,Re,e,m){const V=a("app-head"),D=a("inertia-link"),U=a("jet-label"),x=a("jet-secondary-button"),_=a("jet-input-error"),i=a("x-input"),h=a("x-select"),P=a("date-picker"),b=a("x-checkbox"),S=a("x-textarea"),g=a("multiselect"),L=a("loading-button"),j=a("app-layout");return d(),G(j,null,{default:p(()=>[t(V,{title:o.__("Edit User @:username",{username:n.userData.username})},null,8,["title"]),l("div",M,[l("div",W,[l("h1",q,u(o.__("Edit User ':username'",{username:n.userData.name})),1),t(D,{href:o.route("admin.user.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:p(()=>[l("span",null,u(o.__("Cancel")),1)]),_:1},8,["href"])]),l("div",H,[l("div",K,[l("div",Q,[l("div",Z,[l("h3",$,u(o.__("Tips!")),1),l("p",ee,u(o.__("You can change role of a user in this section")),1)])]),l("div",oe,[l("form",{onSubmit:s[21]||(s[21]=y((...r)=>m.updateUserInformation&&m.updateUserInformation(...r),["prevent"]))},[l("div",se,[l("div",re,[l("div",le,[o.$page.props.jetstream.managesProfilePhotos?(d(),c("div",te,[l("input",{ref:"photo",type:"file",class:"hidden",onChange:s[0]||(s[0]=(...r)=>m.updatePhotoPreview&&m.updatePhotoPreview(...r))},null,544),t(U,{for:"photo",value:"Photo"}),w(l("div",ae,[l("img",{src:n.userData.profile_photo_url,alt:n.userData.name,class:"object-cover w-20 h-20 rounded-full"},null,8,ie)],512),[[v,!e.photoPreview]]),w(l("div",ne,[l("span",{class:"block w-20 h-20 rounded-full",style:J("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[v,e.photoPreview]]),t(x,{class:"mt-2 mr-2",type:"button",onClick:y(m.selectNewPhoto,["prevent"])},{default:p(()=>[k(u(o.__("Select A New Photo")),1)]),_:1},8,["onClick"]),t(_,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):f("",!0),l("div",ue,[t(i,{id:"username",modelValue:e.form.username,"onUpdate:modelValue":s[1]||(s[1]=r=>e.form.username=r),label:o.__("Username"),error:e.form.errors.username,type:"text",name:"username"},null,8,["modelValue","label","error"])]),l("div",me,[t(i,{id:"email",modelValue:e.form.email,"onUpdate:modelValue":s[2]||(s[2]=r=>e.form.email=r),label:o.__("Email Address"),error:e.form.errors.email,type:"email",name:"email"},null,8,["modelValue","label","error"])]),l("div",de,[t(i,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":s[3]||(s[3]=r=>e.form.name=r),label:o.__("Full Name"),error:e.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","error"])]),l("div",_e,[t(h,{id:"profile_photo_source",modelValue:e.form.profile_photo_source,"onUpdate:modelValue":s[4]||(s[4]=r=>e.form.profile_photo_source=r),name:"profile_photo_source",error:e.form.errors.profile_photo_source,label:o.__("Use Avatar from"),"select-list":{linked_player:o.__("Linked Player"),gravatar:o.__("Gravatar")},placeholder:o.__("Uploaded Photo")},null,8,["modelValue","error","label","select-list","placeholder"])]),l("div",pe,[t(P,{id:"dob",value:e.form.dob,"onUpdate:value":s[5]||(s[5]=r=>e.form.dob=r),placeholder:o.__("Select your date of birth"),class:"w-full","value-type":"format","input-class":"block w-full p-3 text-sm border-gray-300 rounded-md h-14 pt-7 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900"},null,8,["value","placeholder"]),l("label",ce,u(o.__("Date of Birth")),1),t(_,{message:e.form.errors.dob,class:"mt-1"},null,8,["message"])]),e.form.dob?(d(),c("div",fe,[t(b,{id:"show_yob",modelValue:e.form.show_yob,"onUpdate:modelValue":s[6]||(s[6]=r=>e.form.show_yob=r),label:o.__("Show Your of Birth"),help:o.__("Show Year of Birth in your public profile."),name:"show_yob",error:e.form.errors.show_yob},null,8,["modelValue","label","help","error"])])):f("",!0),l("div",he,[t(h,{id:"gender",modelValue:e.form.gender,"onUpdate:modelValue":s[7]||(s[7]=r=>e.form.gender=r),name:"gender",error:e.form.errors.gender,label:o.__("Gender"),placeholder:"Prefer not to say","select-list":{m:o.__("Male"),f:o.__("Female"),o:o.__("Others")}},null,8,["modelValue","error","label","select-list"])]),e.form.gender?(d(),c("div",be,[t(b,{id:"show_gender",modelValue:e.form.show_gender,"onUpdate:modelValue":s[8]||(s[8]=r=>e.form.show_gender=r),label:o.__("Show Gender"),help:o.__("Show Gender in your public profile."),name:"show_gender",error:e.form.errors.show_gender},null,8,["modelValue","label","help","error"])])):f("",!0),l("div",ge,[t(i,{id:"s_discord_username",modelValue:e.form.s_discord_username,"onUpdate:modelValue":s[9]||(s[9]=r=>e.form.s_discord_username=r),label:o.__("Discord Username"),error:e.form.errors.s_discord_username,autocomplete:"s_discord_username",type:"text",name:"s_discord_username",help:o.__("Eg: username#1234")},null,8,["modelValue","label","error","help"])]),l("div",ye,[t(i,{id:"s_steam_profile_url",modelValue:e.form.s_steam_profile_url,"onUpdate:modelValue":s[10]||(s[10]=r=>e.form.s_steam_profile_url=r),label:o.__("Steam Profile URL"),error:e.form.errors.s_steam_profile_url,autocomplete:"s_steam_profile_url",type:"text",name:"s_steam_profile_url",help:o.__("Eg: https://steamcommunity.com/id/username")},null,8,["modelValue","label","error","help"])]),l("div",we,[t(i,{id:"s_twitter_url",modelValue:e.form.s_twitter_url,"onUpdate:modelValue":s[11]||(s[11]=r=>e.form.s_twitter_url=r),label:o.__("Twitter Profile URL"),error:e.form.errors.s_twitter_url,autocomplete:"s_twitter_url",type:"text",name:"s_twitter_url",help:o.__("Eg: https://twitter.com/@username")},null,8,["modelValue","label","error","help"])]),l("div",ve,[t(i,{id:"s_youtube_url",modelValue:e.form.s_youtube_url,"onUpdate:modelValue":s[12]||(s[12]=r=>e.form.s_youtube_url=r),label:o.__("YouTube URL"),error:e.form.errors.s_youtube_url,autocomplete:"s_youtube_url",type:"text",name:"s_youtube_url",help:o.__("Eg: https://www.youtube.com/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",ke,[t(i,{id:"s_facebook_url",modelValue:e.form.s_facebook_url,"onUpdate:modelValue":s[13]||(s[13]=r=>e.form.s_facebook_url=r),label:o.__("Facebook URL"),error:e.form.errors.s_facebook_url,autocomplete:"s_facebook_url",type:"text",name:"s_facebook_url",help:o.__("Eg: https://www.facebook.com/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",Ve,[t(i,{id:"s_twitch_url",modelValue:e.form.s_twitch_url,"onUpdate:modelValue":s[14]||(s[14]=r=>e.form.s_twitch_url=r),label:o.__("Twitch URL"),error:e.form.errors.s_twitch_url,autocomplete:"s_twitch_url",type:"text",name:"s_twitch_url",help:o.__("Eg: https://www.twitch.tv/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",De,[t(i,{id:"s_website_url",modelValue:e.form.s_website_url,"onUpdate:modelValue":s[15]||(s[15]=r=>e.form.s_website_url=r),label:o.__("Website URL"),error:e.form.errors.s_website_url,autocomplete:"s_website_url",type:"text",name:"s_website_url",help:o.__("Eg: https://my-personal-blog.com")},null,8,["modelValue","label","error","help"])]),l("div",Ue,[t(h,{id:"role",modelValue:e.form.role,"onUpdate:modelValue":s[16]||(s[16]=r=>e.form.role=r),name:"role",error:e.form.errors.role,label:"Role",placeholder:o.__("Select role"),"select-list":n.rolesList},null,8,["modelValue","error","placeholder","select-list"])]),l("div",xe,[t(S,{id:"about",modelValue:e.form.about,"onUpdate:modelValue":s[17]||(s[17]=r=>e.form.about=r),rows:10,label:o.__("About Yourself"),help:o.__("Something about yourself in 255 characters."),error:e.form.errors.about,name:"about"},null,8,["modelValue","label","help","error"])]),l("div",Pe,[t(b,{id:"verified",modelValue:e.form.verified,"onUpdate:modelValue":s[18]||(s[18]=r=>e.form.verified=r),label:o.__("Verified User"),help:o.__("Show a blue verified tick after username."),name:"verified",error:e.form.errors.verified},null,8,["modelValue","label","help","error"])]),o.can("assign badges")?(d(),c("div",Se,[l("label",Le,u(o.__("User Badges")),1),t(g,{id:"badges",modelValue:e.form.badges,"onUpdate:modelValue":s[19]||(s[19]=r=>e.form.badges=r),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:n.badgesList,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:o.__("Search")+"...",label:"name","track-by":"id"},null,8,["modelValue","options","placeholder"]),t(_,{message:e.form.errors.permissions,class:"mt-2"},null,8,["message"])])):f("",!0),l("div",je,[l("label",Ee,u(o.__("Country")),1),t(g,{id:"country",modelValue:e.form.country,"onUpdate:modelValue":s[20]||(s[20]=r=>e.form.country=r),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:n.countryList,multiple:!1,placeholder:o.__("Search")+"...",label:"name","track-by":"id"},null,8,["modelValue","options","placeholder"]),t(_,{message:e.form.errors.country_id,class:"mt-2"},null,8,["message"])])])]),l("div",Be,[t(L,{loading:e.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:p(()=>[k(u(o.__("Update User")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const We=F(z,[["render",Ce],["__scopeId","data-v-a24b17f4"]]);export{We as default};
