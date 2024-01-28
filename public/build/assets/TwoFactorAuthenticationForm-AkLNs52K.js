import{r as p,aU as N,o as t,d as s,a as l,l as Q,b as a,w as o,f as n,t as k,bE as B,n as g,j as U,bH as Y,T as D,k as I,bx as O,c as h,e as u,u as $,F as j,g as z,bL as R}from"./app-kQTGVEPy.js";import{_ as G}from"./ActionSection-sybr30lK.js";import{_ as W}from"./DialogModal-s-8-xGqJ.js";import{_ as L,a as E}from"./TextInput-d-FtJerk.js";import{_ as V}from"./PrimaryButton-oGpcRkO4.js";import{_ as C}from"./SecondaryButton-RXBtNuaP.js";import{_ as J}from"./DangerButton-mC00Fgr0.js";import{_ as X}from"./InputLabel-l6Em0noZ.js";import"./SectionTitle-CokNN_wK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Modal-mUJ4XpQu.js";const Z={class:"mt-4"},y={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(w,{emit:T}){const b=T,c=p(!1),e=N({password:"",error:"",processing:!1}),i=p(null),v=()=>{axios.get(route("password.confirmation")).then(r=>{r.data.confirmed?b("confirmed"):(c.value=!0,setTimeout(()=>i.value.focus(),250))})},_=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),U().then(()=>b("confirmed"))}).catch(r=>{e.processing=!1,e.error=r.response.data.errors.password[0],i.value.focus()})},d=()=>{c.value=!1,e.password="",e.error=""};return(r,m)=>(t(),s("span",null,[l("span",{onClick:v},[Q(r.$slots,"default")]),a(W,{show:c.value,onClose:d},{title:o(()=>[n(k(w.title),1)]),content:o(()=>[n(k(w.content)+" ",1),l("div",Z,[a(L,{ref_key:"passwordInput",ref:i,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=S=>e.password=S),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:B(_,["enter"])},null,8,["modelValue"]),a(E,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[a(C,{onClick:d},{default:o(()=>[n(" Cancel ")]),_:1}),a(V,{class:g(["ms-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:_},{default:o(()=>[n(k(w.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900"},te={key:1,class:"text-lg font-medium text-gray-900"},oe={key:2,class:"text-lg font-medium text-gray-900"},se=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ae={key:3},ne={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600"},le={key:0,class:"font-semibold"},ce={key:1},ie=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},de={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},_e=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),ve={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},he={class:"mt-5"},ye={key:0},we={key:1},Pe={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(w){const T=w,b=Y(),c=p(!1),e=p(!1),i=p(!1),v=p(null),_=p(null),d=p([]),r=D({code:""}),m=I(()=>{var f;return!c.value&&((f=b.props.auth.user)==null?void 0:f.two_factor_enabled)});O(m,()=>{m.value||(r.reset(),r.clearErrors())});const S=()=>{c.value=!0,R.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([H(),M(),F()]),onFinish:()=>{c.value=!1,e.value=T.requiresConfirmation}})},H=()=>axios.get(route("two-factor.qr-code")).then(f=>{v.value=f.data.svg}),M=()=>axios.get(route("two-factor.secret-key")).then(f=>{_.value=f.data.secretKey}),F=()=>axios.get(route("two-factor.recovery-codes")).then(f=>{d.value=f.data}),A=()=>{r.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,v.value=null,_.value=null}})},q=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>F())},P=()=>{i.value=!0,R.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{i.value=!1,e.value=!1}})};return(f,K)=>(t(),h(G,null,{title:o(()=>[n(" Two Factor Authentication ")]),description:o(()=>[n(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[m.value&&!e.value?(t(),s("h3",ee," You have enabled two factor authentication. ")):m.value&&e.value?(t(),s("h3",te," Finish enabling two factor authentication. ")):(t(),s("h3",oe," You have not enabled two factor authentication. ")),se,m.value?(t(),s("div",ae,[v.value?(t(),s("div",ne,[l("div",re,[e.value?(t(),s("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),s("p",ce," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:v.value},null,8,ie),_.value?(t(),s("div",ue,[l("p",de,[n(" Setup Key: "),l("span",{innerHTML:_.value},null,8,me)])])):u("",!0),e.value?(t(),s("div",fe,[a(X,{for:"code",value:"Code"}),a(L,{id:"code",modelValue:$(r).code,"onUpdate:modelValue":K[0]||(K[0]=x=>$(r).code=x),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:B(A,["enter"])},null,8,["modelValue"]),a(E,{message:$(r).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),d.value.length>0&&!e.value?(t(),s("div",pe,[_e,l("div",ve,[(t(!0),s(j,null,z(d.value,x=>(t(),s("div",{key:x},k(x),1))),128))])])):u("",!0)])):u("",!0),l("div",he,[m.value?(t(),s("div",we,[a(y,{onConfirmed:A},{default:o(()=>[e.value?(t(),h(V,{key:0,type:"button",class:g(["me-3",{"opacity-25":c.value}]),disabled:c.value},{default:o(()=>[n(" Confirm ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(y,{onConfirmed:q},{default:o(()=>[d.value.length>0&&!e.value?(t(),h(C,{key:0,class:"me-3"},{default:o(()=>[n(" Regenerate Recovery Codes ")]),_:1})):u("",!0)]),_:1}),a(y,{onConfirmed:F},{default:o(()=>[d.value.length===0&&!e.value?(t(),h(C,{key:0,class:"me-3"},{default:o(()=>[n(" Show Recovery Codes ")]),_:1})):u("",!0)]),_:1}),a(y,{onConfirmed:P},{default:o(()=>[e.value?(t(),h(C,{key:0,class:g({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[n(" Cancel ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(y,{onConfirmed:P},{default:o(()=>[e.value?u("",!0):(t(),h(J,{key:0,class:g({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[n(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(t(),s("div",ye,[a(y,{onConfirmed:S},{default:o(()=>[a(V,{type:"button",class:g({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[n(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Pe as default};
