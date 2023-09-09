import{_ as I}from"./InputError.f8b4214f.js";import{_ as O}from"./SecondaryButton.c2ac8d74.js";import{L as F}from"./LoadingButton.e4c763c6.js";import{X as G}from"./XInput.8e5fc601.js";import{_ as Y}from"./Label.398008db.js";import{i as z}from"./index.es.34705f93.js";import{X as J}from"./XCheckbox.52f04bd4.js";import{X as M}from"./XSelect.5ae74355.js";import{X as W}from"./XTextarea.42e86ad5.js";import{s as Z}from"./vue-multiselect.esm.d3cfd995.js";import{_ as q,T as H,c as K,w as D,l as n,o as f,b as t,a as l,t as d,j as A,d as P,s as T,x as N,Z as Q,f as X,e as L}from"./app.91a4515c.js";import{_ as $}from"./AdminLayout.55deacb2.js";import{u as ee}from"./useAuthorizable.2128aa85.js";import"./AppLayout.dcf7fcd9.js";const oe={components:{AdminLayout:$,XTextarea:W,XSelect:M,XCheckbox:J,JetInputError:I,LoadingButton:F,JetSecondaryButton:O,XInput:G,JetLabel:Y,DatePicker:z,Multiselect:Z},props:{userData:Object,rolesList:Object,badgesList:Object,countryList:Object},setup(){const{can:o}=ee();return{can:o}},data(){var o,s,i,h,e,u,b,g,w,y,m,a,_,k,p,v,c,V,U,r,S,x,j,E,B,R,C;return{form:H({_method:"PUT",username:this.userData.username,name:this.userData.name,email:this.userData.email,photo:null,dob:this.userData.dob,gender:this.userData.gender,cover_image_url:this.userData.cover_image_url,s_discord_username:(i=(s=(o=this.userData)==null?void 0:o.social_links)==null?void 0:s.s_discord_username)!=null?i:null,s_steam_profile_url:(u=(e=(h=this.userData)==null?void 0:h.social_links)==null?void 0:e.s_steam_profile_url)!=null?u:null,s_twitter_url:(w=(g=(b=this.userData)==null?void 0:b.social_links)==null?void 0:g.s_twitter_url)!=null?w:null,s_youtube_url:(a=(m=(y=this.userData)==null?void 0:y.social_links)==null?void 0:m.s_youtube_url)!=null?a:null,s_facebook_url:(p=(k=(_=this.userData)==null?void 0:_.social_links)==null?void 0:k.s_facebook_url)!=null?p:null,s_twitch_url:(V=(c=(v=this.userData)==null?void 0:v.social_links)==null?void 0:c.s_twitch_url)!=null?V:null,s_website_url:(S=(r=(U=this.userData)==null?void 0:U.social_links)==null?void 0:r.s_website_url)!=null?S:null,s_linkedin_url:(E=(j=(x=this.userData)==null?void 0:x.social_links)==null?void 0:j.s_linkedin_url)!=null?E:null,s_tiktok_url:(C=(R=(B=this.userData)==null?void 0:B.social_links)==null?void 0:R.s_tiktok_url)!=null?C:null,about:this.userData.about,profile_photo_source:this.userData.settings?this.userData.settings.profile_photo_source:null,show_gender:this.userData.settings?!!+this.userData.settings.show_gender:!1,show_yob:this.userData.settings?!!+this.userData.settings.show_yob:!1,verified:!!this.userData.verified_at,role:this.userData.roles[0].name,badges:this.userData.badges,country:this.userData.country,country_id:this.userData.country_id,password:""}),photoPreview:null}},methods:{updateUserInformation(){var s;this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]);const o=this.form.badges;this.form.badges=this.form.badges.map(i=>i.id),this.form.country_id=(s=this.form.country)==null?void 0:s.id,this.form.post(route("admin.user.update",this.userData.id),{preserveScroll:!0}),this.form.badges=o},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const o=new FileReader;o.onload=s=>{this.photoPreview=s.target.result},o.readAsDataURL(this.$refs.photo.files[0])}}},se={class:"max-w-5xl px-10 py-12 mx-auto"},re={class:"flex justify-between mb-8"},le={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},te={class:"mt-10 sm:mt-0"},ae={class:""},ne={class:"mt-5 md:mt-0"},ie={class:"shadow sm:rounded-md"},ue={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},me={class:"grid grid-cols-6 gap-6"},de={key:0,class:"hidden col-span-6 sm:col-span-4"},_e={class:"mt-2"},pe=["src","alt"],ce={class:"mt-2"},fe={class:"col-span-6 sm:col-span-3"},he={class:"col-span-6 sm:col-span-3"},be={class:"col-span-6 sm:col-span-3"},ge={class:"col-span-6 sm:col-span-3"},we={class:"relative col-span-6 sm:col-span-3"},ye={for:"dob",class:"absolute -top-2.5 left-0 px-3 py-5 text-xs text-gray-500 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"},ke={key:1,class:"col-span-6 sm:col-span-3"},ve={class:"col-span-6 sm:col-span-3"},Ve={key:2,class:"col-span-6 sm:col-span-3"},Ue={class:"col-span-6 sm:col-span-3"},De={class:"col-span-6 sm:col-span-3"},Pe={class:"col-span-6 sm:col-span-3"},Le={class:"col-span-6 sm:col-span-3"},Se={class:"col-span-6 sm:col-span-3"},xe={class:"col-span-6 sm:col-span-3"},je={class:"col-span-6 sm:col-span-3"},Ee={class:"col-span-6 sm:col-span-3"},Be={class:"col-span-6 sm:col-span-3"},Re={class:"col-span-6 sm:col-span-3"},Ce={class:"col-span-6 sm:col-span-3"},Ae={class:"col-span-6 sm:col-span-3"},Te={key:3,class:"col-span-6 sm:col-span-3"},Ne={for:"badges",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Xe={class:"col-span-6 sm:col-span-3"},Ie={for:"badges",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Oe={class:"col-span-6 sm:col-span-6"},Fe={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function Ge(o,s,i,h,e,u){const b=n("app-head"),g=n("inertia-link"),w=n("jet-label"),y=n("jet-secondary-button"),m=n("jet-input-error"),a=n("x-input"),_=n("x-select"),k=n("date-picker"),p=n("x-checkbox"),v=n("x-textarea"),c=n("multiselect"),V=n("loading-button"),U=n("AdminLayout");return f(),K(U,null,{default:D(()=>[t(b,{title:o.__("Edit User @:username",{username:i.userData.username})},null,8,["title"]),l("div",se,[l("div",re,[l("h1",le,d(o.__("Edit User ':username'",{username:i.userData.name})),1),t(g,{href:o.route("admin.user.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:D(()=>[l("span",null,d(o.__("Cancel")),1)]),_:1},8,["href"])]),l("div",te,[l("div",ae,[l("div",ne,[l("form",{onSubmit:s[24]||(s[24]=A((...r)=>u.updateUserInformation&&u.updateUserInformation(...r),["prevent"]))},[l("div",ie,[l("div",ue,[l("div",me,[o.$page.props.jetstream.managesProfilePhotos?(f(),P("div",de,[l("input",{ref:"photo",type:"file",class:"hidden",onChange:s[0]||(s[0]=(...r)=>u.updatePhotoPreview&&u.updatePhotoPreview(...r))},null,544),t(w,{for:"photo",value:"Photo"}),T(l("div",_e,[l("img",{src:i.userData.profile_photo_url,alt:i.userData.name,class:"object-cover w-20 h-20 rounded-full"},null,8,pe)],512),[[N,!e.photoPreview]]),T(l("div",ce,[l("span",{class:"block w-20 h-20 rounded-full",style:Q("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[N,e.photoPreview]]),t(y,{class:"mt-2 mr-2",type:"button",onClick:A(u.selectNewPhoto,["prevent"])},{default:D(()=>[X(d(o.__("Select A New Photo")),1)]),_:1},8,["onClick"]),t(m,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):L("",!0),l("div",fe,[t(a,{id:"username",modelValue:e.form.username,"onUpdate:modelValue":s[1]||(s[1]=r=>e.form.username=r),label:o.__("Username"),error:e.form.errors.username,type:"text",name:"username"},null,8,["modelValue","label","error"])]),l("div",he,[t(a,{id:"email",modelValue:e.form.email,"onUpdate:modelValue":s[2]||(s[2]=r=>e.form.email=r),label:o.__("Email Address"),error:e.form.errors.email,type:"email",name:"email"},null,8,["modelValue","label","error"])]),l("div",be,[t(a,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":s[3]||(s[3]=r=>e.form.name=r),label:o.__("Full Name"),error:e.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","error"])]),l("div",ge,[t(_,{id:"profile_photo_source",modelValue:e.form.profile_photo_source,"onUpdate:modelValue":s[4]||(s[4]=r=>e.form.profile_photo_source=r),name:"profile_photo_source",error:e.form.errors.profile_photo_source,label:o.__("Use Avatar from"),"select-list":{linked_player:o.__("Linked Player"),gravatar:o.__("Gravatar")},placeholder:o.__("Uploaded Photo")},null,8,["modelValue","error","label","select-list","placeholder"])]),l("div",we,[t(k,{id:"dob",value:e.form.dob,"onUpdate:value":s[5]||(s[5]=r=>e.form.dob=r),placeholder:o.__("Select your date of birth"),class:"w-full","value-type":"format","input-class":"block w-full p-3 text-sm border-gray-300 rounded-md h-14 pt-7 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900"},null,8,["value","placeholder"]),l("label",ye,d(o.__("Date of Birth")),1),t(m,{message:e.form.errors.dob,class:"mt-1"},null,8,["message"])]),e.form.dob?(f(),P("div",ke,[t(p,{id:"show_yob",modelValue:e.form.show_yob,"onUpdate:modelValue":s[6]||(s[6]=r=>e.form.show_yob=r),label:o.__("Show Your of Birth"),help:o.__("Show Year of Birth in your public profile."),name:"show_yob",error:e.form.errors.show_yob},null,8,["modelValue","label","help","error"])])):L("",!0),l("div",ve,[t(_,{id:"gender",modelValue:e.form.gender,"onUpdate:modelValue":s[7]||(s[7]=r=>e.form.gender=r),name:"gender",error:e.form.errors.gender,label:o.__("Gender"),placeholder:"Prefer not to say","select-list":{m:o.__("Male"),f:o.__("Female"),o:o.__("Others")}},null,8,["modelValue","error","label","select-list"])]),e.form.gender?(f(),P("div",Ve,[t(p,{id:"show_gender",modelValue:e.form.show_gender,"onUpdate:modelValue":s[8]||(s[8]=r=>e.form.show_gender=r),label:o.__("Show Gender"),help:o.__("Show Gender in your public profile."),name:"show_gender",error:e.form.errors.show_gender},null,8,["modelValue","label","help","error"])])):L("",!0),l("div",Ue,[t(a,{id:"s_discord_username",modelValue:e.form.s_discord_username,"onUpdate:modelValue":s[9]||(s[9]=r=>e.form.s_discord_username=r),label:o.__("Discord Username"),error:e.form.errors.s_discord_username,autocomplete:"s_discord_username",type:"text",name:"s_discord_username",help:o.__("Eg: username#1234")},null,8,["modelValue","label","error","help"])]),l("div",De,[t(a,{id:"s_steam_profile_url",modelValue:e.form.s_steam_profile_url,"onUpdate:modelValue":s[10]||(s[10]=r=>e.form.s_steam_profile_url=r),label:o.__("Steam Profile URL"),error:e.form.errors.s_steam_profile_url,autocomplete:"s_steam_profile_url",type:"text",name:"s_steam_profile_url",help:o.__("Eg: https://steamcommunity.com/id/username")},null,8,["modelValue","label","error","help"])]),l("div",Pe,[t(a,{id:"s_twitter_url",modelValue:e.form.s_twitter_url,"onUpdate:modelValue":s[11]||(s[11]=r=>e.form.s_twitter_url=r),label:o.__("Twitter Profile URL"),error:e.form.errors.s_twitter_url,autocomplete:"s_twitter_url",type:"text",name:"s_twitter_url",help:o.__("Eg: https://twitter.com/@username")},null,8,["modelValue","label","error","help"])]),l("div",Le,[t(a,{id:"s_youtube_url",modelValue:e.form.s_youtube_url,"onUpdate:modelValue":s[12]||(s[12]=r=>e.form.s_youtube_url=r),label:o.__("YouTube URL"),error:e.form.errors.s_youtube_url,autocomplete:"s_youtube_url",type:"text",name:"s_youtube_url",help:o.__("Eg: https://www.youtube.com/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",Se,[t(a,{id:"s_facebook_url",modelValue:e.form.s_facebook_url,"onUpdate:modelValue":s[13]||(s[13]=r=>e.form.s_facebook_url=r),label:o.__("Facebook URL"),error:e.form.errors.s_facebook_url,autocomplete:"s_facebook_url",type:"text",name:"s_facebook_url",help:o.__("Eg: https://www.facebook.com/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",xe,[t(a,{id:"s_twitch_url",modelValue:e.form.s_twitch_url,"onUpdate:modelValue":s[14]||(s[14]=r=>e.form.s_twitch_url=r),label:o.__("Twitch URL"),error:e.form.errors.s_twitch_url,autocomplete:"s_twitch_url",type:"text",name:"s_twitch_url",help:o.__("Eg: https://www.twitch.tv/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",je,[t(a,{id:"s_linkedin_url",modelValue:e.form.s_linkedin_url,"onUpdate:modelValue":s[15]||(s[15]=r=>e.form.s_linkedin_url=r),label:o.__("LinkedIn URL"),error:e.form.errors.s_linkedin_url,autocomplete:"s_linkedin_url",type:"text",name:"s_linkedin_url",help:o.__("Eg: https://www.linkedin.com/in/minecraft")},null,8,["modelValue","label","error","help"])]),l("div",Ee,[t(a,{id:"s_tiktok_url",modelValue:e.form.s_tiktok_url,"onUpdate:modelValue":s[16]||(s[16]=r=>e.form.s_tiktok_url=r),label:o.__("TikTok URL"),error:e.form.errors.s_tiktok_url,autocomplete:"s_tiktok_url",type:"text",name:"s_tiktok_url",help:o.__("Eg: https://www.tiktok.com/@minecraft")},null,8,["modelValue","label","error","help"])]),l("div",Be,[t(a,{id:"s_website_url",modelValue:e.form.s_website_url,"onUpdate:modelValue":s[17]||(s[17]=r=>e.form.s_website_url=r),label:o.__("Website URL"),error:e.form.errors.s_website_url,autocomplete:"s_website_url",type:"text",name:"s_website_url",help:o.__("Eg: https://my-personal-blog.com")},null,8,["modelValue","label","error","help"])]),l("div",Re,[t(_,{id:"role",modelValue:e.form.role,"onUpdate:modelValue":s[18]||(s[18]=r=>e.form.role=r),name:"role",error:e.form.errors.role,label:"Role",placeholder:o.__("Select role"),"select-list":i.rolesList},null,8,["modelValue","error","placeholder","select-list"])]),l("div",Ce,[t(v,{id:"about",modelValue:e.form.about,"onUpdate:modelValue":s[19]||(s[19]=r=>e.form.about=r),rows:10,label:o.__("About Yourself"),help:o.__("Something about yourself in 255 characters."),error:e.form.errors.about,name:"about"},null,8,["modelValue","label","help","error"])]),l("div",Ae,[t(p,{id:"verified",modelValue:e.form.verified,"onUpdate:modelValue":s[20]||(s[20]=r=>e.form.verified=r),label:o.__("Verified User"),help:o.__("Show a blue verified tick after username."),name:"verified",error:e.form.errors.verified},null,8,["modelValue","label","help","error"])]),h.can("assign badges")?(f(),P("div",Te,[l("label",Ne,d(o.__("User Badges")),1),t(c,{id:"badges",modelValue:e.form.badges,"onUpdate:modelValue":s[21]||(s[21]=r=>e.form.badges=r),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:i.badgesList,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:o.__("Search")+"...",label:"name","track-by":"id"},null,8,["modelValue","options","placeholder"]),t(m,{message:e.form.errors.permissions,class:"mt-2"},null,8,["message"])])):L("",!0),l("div",Xe,[l("label",Ie,d(o.__("Country")),1),t(c,{id:"country",modelValue:e.form.country,"onUpdate:modelValue":s[22]||(s[22]=r=>e.form.country=r),class:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm",options:i.countryList,multiple:!1,placeholder:o.__("Search")+"...",label:"name","track-by":"id"},null,8,["modelValue","options","placeholder"]),t(m,{message:e.form.errors.country_id,class:"mt-2"},null,8,["message"])]),l("div",Oe,[t(a,{id:"password",modelValue:e.form.password,"onUpdate:modelValue":s[23]||(s[23]=r=>e.form.password=r),label:o.__("Change User Password"),error:e.form.errors.password,autocomplete:"password",type:"text",name:"password",help:o.__("Leave it empty if you dont want to change password")},null,8,["modelValue","label","error","help"])])])]),l("div",Fe,[t(V,{loading:e.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:D(()=>[X(d(o.__("Update User")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ro=q(oe,[["render",Ge],["__scopeId","data-v-7d8cf3de"]]);export{ro as default};