import{j as u,v as _,f as y,a as o,w as a,b as s,l as w,o as h,d as c,u as t,k as x,n as g}from"./app-80ef1ad1.js";import{D as m}from"./DangerButton-df027d08.js";import{_ as v,a as k,b as D}from"./TextInput-4833a1ff.js";import{a as b,_ as C}from"./SecondaryButton-65561b1e.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"space-y-6"},B=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),U={class:"p-6"},$=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),A=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),K={class:"mt-6"},N={class:"mt-6 flex justify-end"},T={__name:"DeleteUserForm",setup(P){const l=u(!1),r=u(null),e=_({password:""}),p=()=>{l.value=!0,w(()=>r.value.focus())},d=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>r.value.focus(),onFinish:()=>e.reset()})},n=()=>{l.value=!1,e.reset()};return(j,i)=>(h(),y("section",V,[B,o(m,{onClick:p},{default:a(()=>[c("Delete Account")]),_:1}),o(b,{show:l.value,onClose:n},{default:a(()=>[s("div",U,[$,A,s("div",K,[o(v,{for:"password",value:"Password",class:"sr-only"}),o(k,{id:"password",ref_key:"passwordInput",ref:r,modelValue:t(e).password,"onUpdate:modelValue":i[0]||(i[0]=f=>t(e).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:x(d,["enter"])},null,8,["modelValue","onKeyup"]),o(D,{message:t(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",N,[o(C,{onClick:n},{default:a(()=>[c(" Cancel ")]),_:1}),o(m,{class:g(["ml-3",{"opacity-25":t(e).processing}]),disabled:t(e).processing,onClick:d},{default:a(()=>[c(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{T as default};