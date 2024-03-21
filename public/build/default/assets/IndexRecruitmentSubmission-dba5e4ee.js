import{u as w,A as y}from"./AppLayout-2410b8b9.js";import{l as g,q as k,o as u,c as d,w as s,k as v,b as a,u as r,_ as A,a as o,t as i,Z as D,f as n,j as x}from"./app-2128deda.js";import{D as l,_ as R}from"./DtRowItem-f26e307b.js";import{_ as j}from"./RecruitmentStatusBadge-e90834fc.js";import{r as I}from"./EyeIcon-c6cdbf70.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-dcdf76ce.js";import"./XMarkIcon-7c97216f.js";const T={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},L={class:"flex justify-between mb-8"},N={class:"font-bold text-lg md:text-3xl text-gray-500 dark:text-gray-300"},S={class:"flex space-x-2"},B={class:"flex flex-col md:flex-row md:space-x-4"},C={class:"text-sm px-4 font-medium text-left text-gray-800 whitespace-nowrap dark:text-gray-200"},V={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},F={__name:"IndexRecruitmentSubmission",props:{filters:{type:Object},submissions:{type:Object}},setup(p){const{__:e}=v(),{formatTimeAgoToNow:f,formatToDayDateString:m}=w(),b=[{key:"id",label:e("ID"),sortable:!0,class:"text-left w-[5%]"},{key:"recruitment_id",label:e("Recruitment"),sortable:!0},{key:"status",label:e("Status"),sortable:!0},{key:"created_at",label:e("Created At"),class:"text-right w-1/12 whitespace-nowrap",sortable:!0},{key:"updated_at",label:e("Last Updated At"),class:"text-right w-1/12 whitespace-nowrap",sortable:!0},{key:"actions",label:e("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(c,$)=>{const _=g("InertiaLink"),h=k("tippy");return u(),d(y,null,{default:s(()=>[a(A,{title:r(e)("My Recruitment Applications")},null,8,["title"]),o("div",T,[o("div",L,[o("h1",N,i(r(e)("My Recruitment Applications")),1),o("div",S,[a(r(D),{href:c.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:s(()=>[o("span",null,i(r(e)("Homepage")),1)]),_:1},8,["href"])])]),o("div",B,[a(R,{class:"bg-white rounded shadow dark:bg-gray-800 w-full",header:b,data:p.submissions,filters:p.filters},{default:s(({item:t})=>[o("td",C,[a(_,{as:"a",class:"hover:underline",href:c.route("recruitment-submission.show",{submission:t.id,recruitment:t.recruitment.slug})},{default:s(()=>[n(i(t.id),1)]),_:2},1032,["href"])]),a(l,null,{default:s(()=>[n(i(t.recruitment.title),1)]),_:2},1024),a(l,null,{default:s(()=>[a(j,{status:t.status.value},null,8,["status"])]),_:2},1024),x((u(),d(l,{class:"text-right whitespace-nowrap",content:r(m)(t.created_at)},{default:s(()=>[n(i(r(f)(t.created_at)),1)]),_:2},1032,["content"])),[[h]]),x((u(),d(l,{class:"text-right whitespace-nowrap",content:r(m)(t.updated_at)},{default:s(()=>[n(i(r(f)(t.updated_at)),1)]),_:2},1032,["content"])),[[h]]),o("td",V,[a(_,{as:"a",href:c.route("recruitment-submission.show",{recruitment:t.recruitment.slug,submission:t.id}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:s(()=>[a(r(I),{class:"inline-block w-5 h-5"})]),_:2},1032,["href"])])]),_:1},8,["data","filters"])])])]),_:1})}}};export{F as default};
