import{_ as k}from"./SecondaryButton-1097aefe.js";import{_ as v}from"./InputError-7c6e144b.js";import{L as w}from"./LoadingButton-e3fccb22.js";import{X as x}from"./XInput-b0a341fb.js";import{X as V}from"./XTextarea-5318d54c.js";import{_ as P,T as S,l as i,o as N,c as R,w as m,b as n,a as e,t as a,f as p,i as c,j,m as A,p as C}from"./app-ab7f0bba.js";import{_ as L}from"./AdminLayout-ea4e1499.js";import"./AppLayout-8715e6d2.js";import"./useAuthorizable-1f35cec3.js";import"./CloudArrowDownIcon-809b19cc.js";import"./index-34764b0e.js";const U={components:{AdminLayout:L,XTextarea:V,JetInputError:v,LoadingButton:w,JetSecondaryButton:k,XInput:x},data(){return{form:S({name:"",shortname:"",description:"",total_score_needed:"",total_play_time_needed:"",photo:null}),photoPreview:null}},methods:{addRank(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.rank.store"),{preserveScroll:!0})},updatePhotoPreview(){const o=new FileReader;o.onload=r=>{this.photoPreview=r.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},B={class:"max-w-6xl px-10 py-12 mx-auto"},I={class:"flex justify-between mb-8"},T={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},D={class:"mt-10 sm:mt-0"},E={class:"md:grid md:grid-cols-3 md:gap-6"},X={class:"md:col-span-1"},M={class:"px-4 sm:px-0"},z={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},J={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},F=e("br",null,null,-1),K={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},O={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},W={class:"mt-5 md:mt-0 md:col-span-2"},q={class:"overflow-hidden shadow sm:rounded-md"},G={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},H={class:"grid grid-cols-6 gap-6"},Q={class:"col-span-6 sm:col-span-4"},Y={class:"col-span-6 sm:col-span-2"},Z={class:"col-span-6 sm:col-span-3"},$={class:"col-span-6 sm:col-span-3"},ee={class:"col-span-6 sm:col-span-2"},oe={for:"rank_img",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},te={class:"mt-2"},re={class:"col-span-6 sm:col-span-4"},se={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function ne(o,r,ae,ie,t,l){const _=i("app-head"),u=i("inertia-link"),d=i("x-input"),h=i("jet-secondary-button"),f=i("jet-input-error"),g=i("x-textarea"),y=i("loading-button"),b=i("AdminLayout");return N(),R(b,null,{default:m(()=>[n(_,{title:o.__("Add Player Rank")},null,8,["title"]),e("div",B,[e("div",I,[e("h1",T,a(o.__("Add Player Rank")),1),n(u,{href:o.route("admin.rank.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:m(()=>[e("span",null,a(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",D,[e("div",E,[e("div",X,[e("div",M,[e("h3",z,a(o.__("Overview")),1),e("p",J,[p(a(o.__("Ranks are assigned to players when a given criteria is matched, eg: play time, score etc.")),1),F,p(a(o.__("Play Time Need should be provided in Seconds. So if you want to add criteria to give rank if player played at-least 1 minute then you write 60")),1)]),e("p",K,a(o.__("Each rank is sorted according to its weight. More the score and time is more the weight.")),1),e("p",O,a(o.__("If you instead want to sync player rank from server to web, you can do that too from Settings -> Player Settings. Currently Luckperms is supported. Make sure to have same Short Name for rank name what you have chosen in Luckperms. While rank sync is enabled the criteria like score and time will be ignored but while adding ranks it is recommended to enter something in them so web know which rank has more weight.")),1)])]),e("div",W,[e("form",{onSubmit:r[6]||(r[6]=c((...s)=>l.addRank&&l.addRank(...s),["prevent"]))},[e("div",q,[e("div",G,[e("div",H,[e("div",Q,[n(d,{id:"name",modelValue:t.form.name,"onUpdate:modelValue":r[0]||(r[0]=s=>t.form.name=s),label:o.__("Rank Name"),help:o.__("Eg: Knight"),error:t.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","help","error"])]),e("div",Y,[n(d,{id:"shortname",modelValue:t.form.shortname,"onUpdate:modelValue":r[1]||(r[1]=s=>t.form.shortname=s),label:o.__("Short Name"),help:o.__("Eg: knight"),error:t.form.errors.shortname,type:"text",name:"shortname"},null,8,["modelValue","label","help","error"])]),e("div",Z,[n(d,{id:"total_score_needed",modelValue:t.form.total_score_needed,"onUpdate:modelValue":r[2]||(r[2]=s=>t.form.total_score_needed=s),label:o.__("Score Needed"),error:t.form.errors.total_score_needed,type:"number",name:"total_score_needed"},null,8,["modelValue","label","error"])]),e("div",$,[n(d,{id:"total_play_time_needed",modelValue:t.form.total_play_time_needed,"onUpdate:modelValue":r[3]||(r[3]=s=>t.form.total_play_time_needed=s),label:o.__("Play Time Needed"),error:t.form.errors.total_play_time_needed,type:"number",name:"total_play_time_needed"},null,8,["modelValue","label","error"])]),e("div",ee,[e("input",{id:"rank_img",ref:"photo",type:"file",class:"hidden",onChange:r[4]||(r[4]=(...s)=>l.updatePhotoPreview&&l.updatePhotoPreview(...s))},null,544),e("label",oe,a(o.__("Rank Image")),1),j(e("div",te,[e("span",{class:"block w-20 h-20 rounded-full",style:C("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+t.photoPreview+"');")},null,4)],512),[[A,t.photoPreview]]),n(h,{class:"mt-2 mr-2",type:"button",onClick:c(l.selectNewPhoto,["prevent"])},{default:m(()=>[p(a(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),n(f,{message:t.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",re,[n(g,{id:"description",modelValue:t.form.description,"onUpdate:modelValue":r[5]||(r[5]=s=>t.form.description=s),rows:10,label:o.__("Description"),error:t.form.errors.description,name:"description"},null,8,["modelValue","label","error"])])])]),e("div",se,[n(y,{loading:t.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:m(()=>[p(a(o.__("Add Rank")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const be=P(U,[["render",ne]]);export{be as default};
