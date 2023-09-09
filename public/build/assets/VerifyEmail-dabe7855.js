import{J as h}from"./AuthenticationCard-38260633.js";import{L as y}from"./LoadingButton-3c888125.js";import{A as b}from"./AppLayout-854594a9.js";import{_ as v,T as k,l as e,o as l,c as x,w as o,b as i,a as s,t as n,d as w,e as V,f as d,i as B}from"./app-a29d3351.js";import"./useAuthorizable-7b6e36b6.js";const L={components:{AppLayout:b,LoadingButton:y,JetAuthenticationCard:h},props:{status:String},data(){return{form:k({})}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}},methods:{submit(){this.form.post(this.route("verification.send"))}}},j={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},S={key:0,class:"mb-4 font-medium text-sm text-green-600"},A={class:"mt-4 flex items-center justify-between"};function C(t,r,E,N,u,a){const c=e("app-head"),m=e("loading-button"),f=e("inertia-link"),p=e("jet-authentication-card"),_=e("app-layout");return l(),x(_,null,{default:o(()=>[i(c,{title:t.__("Verify your Email")},null,8,["title"]),i(p,null,{default:o(()=>[s("div",j,n(t.__("Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.")),1),a.verificationLinkSent?(l(),w("div",S,n(t.__("A new verification link has been sent to the email address you provided during registration.")),1)):V("",!0),s("form",{onSubmit:r[0]||(r[0]=B((...g)=>a.submit&&a.submit(...g),["prevent"]))},[s("div",A,[i(m,{loading:u.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:o(()=>[d(n(t.__("Resend Verification Email")),1)]),_:1},8,["loading"]),i(f,{href:t.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:o(()=>[d(n(t.__("Logout")),1)]),_:1},8,["href"])])],32)]),_:1})]),_:1})}const R=v(L,[["render",C]]);export{R as default};
