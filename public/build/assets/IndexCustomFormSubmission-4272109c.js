import{r as V,x as B,y as E,l as N,q as w,o as c,c as f,w as a,k as O,b as l,u as s,_ as I,a as t,t as n,B as L,j as p,d as g,e as k,p as R,f as v,O as $,A as q}from"./app-42328968.js";import{u as z}from"./AppLayout-591bb390.js";import{_ as U}from"./AdminLayout-7886c503.js";import{D as C,_ as X}from"./DtRowItem-e6407169.js";import{u as H}from"./useAuthorizable-8d4492e1.js";import{X as G}from"./XSelect-36e7e8fc.js";import{r as J}from"./EyeIcon-4ea83c13.js";import{r as K}from"./TrashIcon-04f731d7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-resolve-button-type-0a822e2b.js";import"./CloudArrowDownIcon-5c44b2ca.js";import"./index-0f64c357.js";import"./XMarkIcon-9c686c23.js";const M={class:"p-4 mx-auto space-y-4 px-10"},P={class:"flex items-center justify-between"},Q={class:"text-xl font-extrabold text-gray-800 dark:text-gray-200"},W={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},Y={class:"flex items-center"},Z=["content"],ee=["src"],te={class:"px-4"},se={class:"flex-shrink-0 h-10 w-10 mr-2"},oe=["src"],re={class:"flex-col"},ae={class:"text-sm text-gray-500"},le={key:1,class:"flex items-center italic text-sm text-gray-500 dark:text-gray-400"},ne={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},ge={__name:"IndexCustomFormSubmission",props:{forms:{type:Object},filters:{type:Object},submissions:{type:Object}},setup(m){var x,y,b;const i=m,{can:D}=H(),{__:o}=O(),{formatTimeAgoToNow:F,formatToDayDateString:A}=z(),j=[{key:"country_id",label:o("Country"),sortable:!0,class:"text-left w-1/12"},{key:"user_id",sortable:!0,label:o("User"),class:"w-3/12"},{key:"custom_form_id",label:o("Custom Form"),sortable:!0},{key:"created_at",label:o("Created At"),class:"text-right w-1/12",sortable:!0},{key:"actions",label:o("Actions"),sortable:!1,class:"w-1/12 text-right"}];let u=V((y=(x=i.filters)==null?void 0:x.forms)!=null&&y.length?(b=i.filters)==null?void 0:b.forms[0]:null);const S=B(()=>i.filters.forms&&i.filters.forms.length>0?i.filters.forms.map(r=>i.forms[r]).join(", "):null);return E(u,r=>{const d={forms:r?[r]:null};$.get(route(route().current()),q.pickBy(d))}),(r,d)=>{const _=N("InertiaLink"),h=w("tippy"),T=w("confirm");return c(),f(U,null,{default:a(()=>[l(I,{title:s(o)("Custom Form Submissions")},null,8,["title"]),t("div",M,[t("div",P,[t("h3",Q,n(s(o)("Form Submissions:"))+" "+n(S.value??s(o)("All Forms")),1),l(G,{id:"selectForms",modelValue:s(u),"onUpdate:modelValue":d[0]||(d[0]=e=>L(u)?u.value=e:u=e),name:"selectForms","select-list":m.forms,placeholder:s(o)("All Forms"),class:"w-48 max-w-48 dark:border dark:rounded dark:border-gray-700"},null,8,["modelValue","select-list","placeholder"])]),t("div",null,[l(X,{class:"bg-white rounded shadow dark:bg-gray-800",header:j,data:m.submissions,filters:m.filters},{default:a(({item:e})=>[t("td",W,[t("div",Y,[e.country?p((c(),g("div",{key:0,class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[t("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,ee)],8,Z)),[[h]]):k("",!0)])]),t("td",te,[e.user?(c(),f(_,{key:0,href:r.route("user.public.get",e.user.username),class:"flex items-center"},{default:a(()=>[t("div",se,[t("img",{class:"h-10 w-10 rounded-full",src:e.user.profile_photo_url,alt:"Avatar"},null,8,oe)]),t("div",re,[t("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap truncate",style:R([e.user.roles[0].color?{color:e.user.roles[0].color}:null])},n(e.user.name),5),t("div",ae," @"+n(e.user.username),1)])]),_:2},1032,["href"])):(c(),g("div",le,n(s(o)("Anonymous")),1))]),l(C,null,{default:a(()=>[v(n(e.custom_form.title),1)]),_:2},1024),p((c(),f(C,{class:"text-right",content:s(A)(e.created_at)},{default:a(()=>[v(n(s(F)(e.created_at)),1)]),_:2},1032,["content"])),[[h]]),t("td",ne,[l(_,{as:"a",href:r.route("admin.custom-form-submission.show",e.id),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:a(()=>[l(s(J),{class:"inline-block w-5 h-5"})]),_:2},1032,["href"]),s(D)("delete custom_form_submissions")?p((c(),f(_,{key:0,as:"button",method:"DELETE",href:r.route("admin.custom-form-submission.delete",e.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:s(o)("Delete Custom Form")},{default:a(()=>[l(s(K),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[T,{message:"Delete this Custom Form Submission? This action cannot be undone."}],[h]]):k("",!0)])]),_:1},8,["data","filters"])])])]),_:1})}}};export{ge as default};