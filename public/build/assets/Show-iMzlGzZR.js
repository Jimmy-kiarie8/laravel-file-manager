import{_ as i}from"./AppLayout-sOMfAhlB.js";import o from"./DeleteTeamForm-K6U6uosl.js";import{S as r}from"./SectionBorder-Cn5tGfN1.js";import l from"./TeamMemberManager-VxUvjOp4.js";import n from"./UpdateTeamNameForm-IfuY_fuy.js";import{o as a,c,w as s,a as m,b as t,d as p,F as d,e as f}from"./app-0Kw_ve6h.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./ResponsiveNavLink-2sIQ6-iS.js";import"./ActionSection--BUO0995.js";import"./SectionTitle-q_xzKVGt.js";import"./ConfirmationModal-IYbIxZ7j.js";import"./Modal-uQpvmLhc.js";import"./DangerButton-IOYiKTMX.js";import"./SecondaryButton-3l5MhpOY.js";import"./ActionMessage-VLYFxupk.js";import"./DialogModal-SXZMMDzL.js";import"./FormSection-RLCjny0u.js";import"./TextInput-kcC1s9bi.js";import"./InputLabel-L3WdtXxn.js";import"./PrimaryButton-cgsHlUnk.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},q={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{q as default};