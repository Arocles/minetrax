<<<<<<<< HEAD:public/build/assets/XTextarea.6f48f16f.js
import{_ as f,o as c,d as h,a as r,n as o,t as n,s as u,x as d}from"./app.cdeb0fbf.js";const g={props:{modelValue:[Number,String,Array,Object,Boolean,Date],name:String,help:String,label:String,type:String,id:String,error:String,autocomplete:{type:String,default:"off"},autofocus:{type:[String,Boolean],default:!1},required:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},helpErrorFlex:{type:String,default:"flex-col"}},data(){return{hasFocus:!1}},computed:{borderColor(){return this.error?"border-red-400":"border-gray-300"},textColor(){return this.hasFocus?"text-light-blue-400":this.error?"text-red-400":"text-gray-500"}},methods:{focus(){this.$refs.input.focus()},handleInputEvent(i){this.$emit("update:modelValue",i.target.value);const t=this.$refs.input;t.style.height="initial",t.style.height=`${t.scrollHeight}px`}}},x={class:"floating-input relative w-full"},m=["id","name","placeholder","autocomplete","value","autofocus","required","disabled"],b=["for"];function y(i,t,e,v,s,l){return c(),h("div",x,[r("textarea",{id:e.id,ref:"input",name:e.name,class:o(["border hide-scrollbar resize-none focus:outline-none rounded-md w-full p-3 min-h-16 h-20 disabled:opacity-50 focus:border-light-blue-300 focus:ring text-sm focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:border-cool-gray-900 dark:text-gray-300",l.borderColor]),placeholder:e.label,autocomplete:e.autocomplete,value:e.modelValue,autofocus:e.autofocus,required:e.required,disabled:e.disabled,onInput:t[0]||(t[0]=(...a)=>l.handleInputEvent&&l.handleInputEvent(...a)),onFocus:t[1]||(t[1]=a=>s.hasFocus=!0),onBlur:t[2]||(t[2]=a=>s.hasFocus=!1)},null,42,m),r("label",{for:e.id,class:o([l.textColor,"absolute top-0 left-0 px-3 pt-5 text-sm pointer-events-none transform origin-left transition-all duration-100 ease-in-out dark:text-gray-400"])},n(e.label),11,b),r("div",{class:o(["info -mt-0.5 flex",e.help?"justify-between "+e.helpErrorFlex:"justify-end "+e.helpErrorFlex])},[u(r("p",{class:"text-xs text-gray-500"},n(e.help),513),[[d,e.help]]),u(r("p",{class:"text-xs text-red-500"},n(e.error),513),[[d,e.error]])],2)])}const p=f(g,[["render",y]]);export{p as X};
========
import{_ as f,o as c,d as h,a as r,n as o,t as n,x as u,z as d}from"./app.304209a1.js";const g={props:{modelValue:[Number,String,Array,Object,Boolean,Date],name:String,help:String,label:String,type:String,id:String,error:String,autocomplete:{type:String,default:"off"},autofocus:{type:[String,Boolean],default:!1},required:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},helpErrorFlex:{type:String,default:"flex-col"}},data(){return{hasFocus:!1}},computed:{borderColor(){return this.error?"border-red-400":"border-gray-300"},textColor(){return this.hasFocus?"text-light-blue-400":this.error?"text-red-400":"text-gray-500"}},methods:{focus(){this.$refs.input.focus()},handleInputEvent(i){this.$emit("update:modelValue",i.target.value);const t=this.$refs.input;t.style.height="initial",t.style.height=`${t.scrollHeight}px`}}},x={class:"floating-input relative w-full"},m=["id","name","placeholder","autocomplete","value","autofocus","required","disabled"],b=["for"];function y(i,t,e,v,s,l){return c(),h("div",x,[r("textarea",{id:e.id,ref:"input",name:e.name,class:o(["border hide-scrollbar resize-none focus:outline-none rounded-md w-full p-3 min-h-16 h-20 disabled:opacity-50 focus:border-light-blue-300 focus:ring text-sm focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:border-cool-gray-900 dark:text-gray-300",l.borderColor]),placeholder:e.label,autocomplete:e.autocomplete,value:e.modelValue,autofocus:e.autofocus,required:e.required,disabled:e.disabled,onInput:t[0]||(t[0]=(...a)=>l.handleInputEvent&&l.handleInputEvent(...a)),onFocus:t[1]||(t[1]=a=>s.hasFocus=!0),onBlur:t[2]||(t[2]=a=>s.hasFocus=!1)},null,42,m),r("label",{for:e.id,class:o([l.textColor,"absolute top-0 left-0 px-3 pt-5 text-sm pointer-events-none transform origin-left transition-all duration-100 ease-in-out dark:text-gray-400"])},n(e.label),11,b),r("div",{class:o(["info -mt-0.5 flex",e.help?"justify-between "+e.helpErrorFlex:"justify-end "+e.helpErrorFlex])},[u(r("p",{class:"text-xs text-gray-500"},n(e.help),513),[[d,e.help]]),u(r("p",{class:"text-xs text-red-500"},n(e.error),513),[[d,e.error]])],2)])}const p=f(g,[["render",y]]);export{p as X};
>>>>>>>> 0479a6239f83b1225ce1df2c9d4f132ae4a71e33:public/build/assets/XTextarea.62fce205.js
