import{o as m,f as d,b as t,r as u,c as h,w as n,u as s,h as b,v as x,a as o,F as v,G as y,t as k,g as f,d as _,n as $,e as V}from"./app-8875be99.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as C}from"./Checkbox-29851dd5.js";import{_ as p,a as g,b as w}from"./TextInput-e0bae982.js";import{P as F}from"./PrimaryButton-473e5152.js";const P={},S={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},L={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};function N(a,e){return m(),d("div",S,[t("div",null,[u(a.$slots,"logo")]),t("div",L,[u(a.$slots,"default")])])}const q=B(P,[["render",N]]),z=t("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),t("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1),A={__name:"AuthenticationCardLogo",setup(a){return(e,c)=>(m(),h(s(b),{href:"/"},{default:n(()=>[z]),_:1}))}},M={key:0,class:"mb-4 font-medium text-sm text-green-600"},R=["onSubmit"],U={class:"mt-4"},j={class:"block mt-4"},E={class:"flex items-center"},D=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),G={class:"flex items-center justify-end mt-4"},O={__name:"Login copy",props:{canResetPassword:Boolean,status:String},setup(a){const e=x({email:"",password:"",remember:!1}),c=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,r)=>(m(),d(v,null,[o(s(y),{title:"Log in"}),o(q,null,{logo:n(()=>[o(A)]),default:n(()=>[a.status?(m(),d("div",M,k(a.status),1)):f("",!0),t("form",{onSubmit:V(c,["prevent"])},[t("div",null,[o(p,{for:"email",value:"Email"}),o(g,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=l=>s(e).email=l),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(w,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",U,[o(p,{for:"password",value:"Password"}),o(g,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":r[1]||(r[1]=l=>s(e).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(w,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",j,[t("label",E,[o(C,{checked:s(e).remember,"onUpdate:checked":r[2]||(r[2]=l=>s(e).remember=l),name:"remember"},null,8,["checked"]),D])]),t("div",G,[a.canResetPassword?(m(),h(s(b),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[_(" Forgot your password? ")]),_:1},8,["href"])):f("",!0),o(F,{class:$(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[_(" Log in ")]),_:1},8,["class","disabled"])])],40,R)]),_:1})],64))}};export{O as default};
