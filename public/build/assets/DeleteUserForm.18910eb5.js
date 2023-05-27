import{_ as w}from"./ActionSection.dc9fc22a.js";import{_ as h}from"./DialogModal.df521a6e.js";import{_ as g}from"./DangerButton.5270656f.js";import{_ as D}from"./Input.1719c091.js";import{_ as j}from"./InputError.ec61c2b6.js";import{_ as k}from"./SecondaryButton.e9aef2c3.js";import{_ as C,p as r,o as U,c as b,w as e,f as s,t,a as c,b as a,X as v,n as A}from"./app.304209a1.js";import"./SectionTitle.b529a1f5.js";import"./Modal.af249aa4.js";const B={components:{JetActionSection:w,JetDangerButton:g,JetDialogModal:h,JetInput:D,JetInputError:j,JetSecondaryButton:k},data(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}},J={class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"},V={class:"mt-5"},M={class:"mt-4"};function S(o,i,N,K,n,l){const d=r("jet-danger-button"),m=r("jet-input"),_=r("jet-input-error"),u=r("jet-secondary-button"),f=r("jet-dialog-modal"),p=r("jet-action-section");return U(),b(p,null,{title:e(()=>[s(t(o.__("Delete Account")),1)]),description:e(()=>[s(t(o.__("Permanently delete your account.")),1)]),content:e(()=>[c("div",J,t(o.__("Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.")),1),c("div",V,[a(d,{onClick:l.confirmUserDeletion},{default:e(()=>[s(t(o.__("Delete Account")),1)]),_:1},8,["onClick"])]),a(f,{show:n.confirmingUserDeletion,onClose:l.closeModal},{title:e(()=>[s(t(o.__("Delete Account")),1)]),content:e(()=>[s(t(o.__("Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."))+" ",1),c("div",M,[a(m,{ref:"password",modelValue:n.form.password,"onUpdate:modelValue":i[0]||(i[0]=y=>n.form.password=y),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:v(l.deleteUser,["enter","native"])},null,8,["modelValue","onKeyup"]),a(_,{message:n.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[a(u,{onClick:l.closeModal},{default:e(()=>[s(t(o.__("Nevermind")),1)]),_:1},8,["onClick"]),a(d,{class:A(["ml-2",{"opacity-25":n.form.processing}]),disabled:n.form.processing,onClick:l.deleteUser},{default:e(()=>[s(t(o.__("Delete Account")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show","onClose"])]),_:1})}const X=C(B,[["render",S]]);export{X as default};
