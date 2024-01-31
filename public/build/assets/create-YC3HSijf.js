import{T as _,o as c,d as f,b as s,u as o,w as i,F as g,Z as w,a as r,f as u,e as y,n as v,h as V}from"./app-0Kw_ve6h.js";import{A as h}from"./AuthenticationCard-e7CLdlEW.js";import{_ as b}from"./AuthenticationCardLogo-DJai31Rr.js";import{_ as k}from"./Checkbox-ifDxndv0.js";import{_ as n,a as l}from"./TextInput-kcC1s9bi.js";import{_ as m}from"./InputLabel-L3WdtXxn.js";import{_ as x}from"./PrimaryButton-cgsHlUnk.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const $={class:"mt-4"},q={class:"mt-4"},C={class:"mt-4"},P={class:"mt-4"},U={key:0,class:"mt-4"},N={class:"flex items-center"},F={class:"ms-2"},T=["href"],A=["href"],B={class:"flex items-center justify-end mt-4"},G={__name:"create",setup(S){const e=_({name:"",email:"",company:"",password:"",password_confirmation:"",terms:!1}),p=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(d,a)=>(c(),f(g,null,[s(o(w),{title:"Register"}),s(h,null,{logo:i(()=>[s(b)]),default:i(()=>[r("form",{onSubmit:V(p,["prevent"])},[r("div",null,[s(m,{for:"name",value:"Name"}),s(n,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(e).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(l,{class:"mt-2",message:o(e).errors.name},null,8,["message"])]),r("div",$,[s(m,{for:"company",value:"Company"}),s(n,{id:"company",modelValue:o(e).company,"onUpdate:modelValue":a[1]||(a[1]=t=>o(e).company=t),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"company"},null,8,["modelValue"]),s(l,{class:"mt-2",message:o(e).errors.email},null,8,["message"])]),r("div",q,[s(m,{for:"email",value:"Email"}),s(n,{id:"email",modelValue:o(e).email,"onUpdate:modelValue":a[2]||(a[2]=t=>o(e).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),s(l,{class:"mt-2",message:o(e).errors.email},null,8,["message"])]),r("div",C,[s(m,{for:"password",value:"Password"}),s(n,{id:"password",modelValue:o(e).password,"onUpdate:modelValue":a[3]||(a[3]=t=>o(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(l,{class:"mt-2",message:o(e).errors.password},null,8,["message"])]),r("div",P,[s(m,{for:"password_confirmation",value:"Confirm Password"}),s(n,{id:"password_confirmation",modelValue:o(e).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=t=>o(e).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(l,{class:"mt-2",message:o(e).errors.password_confirmation},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",U,[s(m,{for:"terms"},{default:i(()=>[r("div",N,[s(k,{id:"terms",checked:o(e).terms,"onUpdate:checked":a[5]||(a[5]=t=>o(e).terms=t),name:"terms",required:""},null,8,["checked"]),r("div",F,[u(" I agree to the "),r("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,T),u(" and "),r("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,A)])]),s(l,{class:"mt-2",message:o(e).errors.terms},null,8,["message"])]),_:1})])):y("",!0),r("div",B,[s(x,{class:v(["ms-4",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:i(()=>[u(" Submit ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{G as default};