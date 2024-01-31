import{o as x,d as O,a as h,j as D,by as U,r as y,k as F,p as M,Q as Pe,aj as Me,F as R,ap as de,aQ as fe,a3 as H,aO as Re,T as pe,bH as me,c as k,w as _,b as v,u as b,n as P,bE as ve,f as I,H as Z,h as A,i as Le,e as L,bL as he,t as B,aD as Ce,aY as je}from"./app-0Kw_ve6h.js";import{A as Ue}from"./ApplicationLogo-52b_PgQe.js";import{_ as ge}from"./Modal-uQpvmLhc.js";import{_ as _e,a as Ve}from"./TextInput-kcC1s9bi.js";import{_ as He}from"./InputLabel-L3WdtXxn.js";import{_ as Be}from"./SecondaryButton-3l5MhpOY.js";import{_ as ye}from"./PrimaryButton-cgsHlUnk.js";import{_ as Q,a as oe}from"./ResponsiveNavLink-2sIQ6-iS.js";import{_ as Ke}from"./_plugin-vue_export-helper-x3n3nnut.js";function We(e,n){return x(),O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[h("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}function Ge(e,n){return x(),O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[h("path",{"fill-rule":"evenodd",d:"M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z","clip-rule":"evenodd"})])}let Qe=0;function qe(){return++Qe}function J(){return qe()}function w(e){var n;if(e==null||e.value==null)return null;let t=(n=e.value.$el)!=null?n:e.value;return t instanceof Node?t:null}function K(e,n,...t){if(e in n){let a=n[e];return typeof a=="function"?a(...t):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K),r}var Ye=Object.defineProperty,ze=(e,n,t)=>n in e?Ye(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,le=(e,n,t)=>(ze(e,typeof n!="symbol"?n+"":n,t),t);let Xe=class{constructor(){le(this,"current",this.detect()),le(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ee=new Xe;function te(e){if(ee.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=w(e);if(n)return n.ownerDocument}return document}let Y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var z=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(z||{}),Ze=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ze||{}),Je=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Je||{});function be(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Y)).sort((n,t)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var ne=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ne||{});function ae(e,n=0){var t;return e===((t=te(e))==null?void 0:t.body)?!1:K(n,{0(){return e.matches(Y)},1(){let r=e;for(;r!==null;){if(r.matches(Y))return!0;r=r.parentElement}return!1}})}function we(e){let n=te(e);D(()=>{n&&!ae(n.activeElement,0)&&tt(e)})}var et=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(et||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function tt(e){e==null||e.focus({preventScroll:!0})}let nt=["textarea","input"].join(",");function at(e){var n,t;return(t=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,nt))!=null?t:!1}function xe(e,n=t=>t){return e.slice().sort((t,r)=>{let a=n(t),o=n(r);if(a===null||o===null)return 0;let s=a.compareDocumentPosition(o);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function rt(e,n){return ot(be(),n,{relativeTo:e})}function ot(e,n,{sorted:t=!0,relativeTo:r=null,skipElements:a=[]}={}){var o;let s=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,u=Array.isArray(e)?t?xe(e):e:be(e);a.length>0&&u.length>1&&(u=u.filter(f=>!a.includes(f))),r=r??s.activeElement;let d=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,u.indexOf(r))-1;if(n&4)return Math.max(0,u.indexOf(r))+1;if(n&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=n&32?{preventScroll:!0}:{},g=0,p=u.length,m;do{if(g>=p||g+p<=0)return 0;let f=i+g;if(n&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}m=u[f],m==null||m.focus(l),g+=d}while(m!==s.activeElement);return n&6&&at(m)&&m.select(),2}function lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function st(){return/Android/gi.test(window.navigator.userAgent)}function ut(){return lt()||st()}function V(e,n,t){ee.isServer||U(r=>{document.addEventListener(e,n,t),r(()=>document.removeEventListener(e,n,t))})}function it(e,n,t){ee.isServer||U(r=>{window.addEventListener(e,n,t),r(()=>window.removeEventListener(e,n,t))})}function ct(e,n,t=F(()=>!0)){function r(o,s){if(!t.value||o.defaultPrevented)return;let u=s(o);if(u===null||!u.getRootNode().contains(u))return;let d=function i(l){return typeof l=="function"?i(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let i of d){if(i===null)continue;let l=i instanceof HTMLElement?i:w(i);if(l!=null&&l.contains(u)||o.composed&&o.composedPath().includes(l))return}return!ae(u,ne.Loose)&&u.tabIndex!==-1&&o.preventDefault(),n(o,u)}let a=y(null);V("pointerdown",o=>{var s,u;t.value&&(a.value=((u=(s=o.composedPath)==null?void 0:s.call(o))==null?void 0:u[0])||o.target)},!0),V("mousedown",o=>{var s,u;t.value&&(a.value=((u=(s=o.composedPath)==null?void 0:s.call(o))==null?void 0:u[0])||o.target)},!0),V("click",o=>{ut()||a.value&&(r(o,()=>a.value),a.value=null)},!0),V("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),it("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function se(e,n){if(e)return e;let t=n??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function dt(e,n){let t=y(se(e.value.type,e.value.as));return M(()=>{t.value=se(e.value.type,e.value.as)}),U(()=>{var r;t.value||w(n)&&w(n)instanceof HTMLButtonElement&&!((r=w(n))!=null&&r.hasAttribute("type"))&&(t.value="button")}),t}function ue(e){return[e.screenX,e.screenY]}function ft(){let e=y([-1,-1]);return{wasMoved(n){let t=ue(n);return e.value[0]===t[0]&&e.value[1]===t[1]?!1:(e.value=t,!0)},update(n){e.value=ue(n)}}}function pt({container:e,accept:n,walk:t,enabled:r}){U(()=>{let a=e.value;if(!a||r!==void 0&&!r.value)return;let o=te(e);if(!o)return;let s=Object.assign(d=>n(d),{acceptNode:n}),u=o.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,s,!1);for(;u.nextNode();)t(u.currentNode)})}var X=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(X||{}),mt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(mt||{});function W({visible:e=!0,features:n=0,ourProps:t,theirProps:r,...a}){var o;let s=$e(r,t),u=Object.assign(a,{props:s});if(e||n&2&&s.static)return q(u);if(n&1){let d=(o=s.unmount)==null||o?0:1;return K(d,{0(){return null},1(){return q({...a,props:{...s,hidden:!0,style:{display:"none"}}})}})}return q(u)}function q({props:e,attrs:n,slots:t,slot:r,name:a}){var o,s;let{as:u,...d}=vt(e,["unmount","static"]),i=(o=t.default)==null?void 0:o.call(t,r),l={};if(r){let g=!1,p=[];for(let[m,f]of Object.entries(r))typeof f=="boolean"&&(g=!0),f===!0&&p.push(m);g&&(l["data-headlessui-state"]=p.join(" "))}if(u==="template"){if(i=Se(i??[]),Object.keys(d).length>0||Object.keys(n).length>0){let[g,...p]=i??[];if(!ht(g)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(n)).map(c=>c.trim()).filter((c,S,T)=>T.indexOf(c)===S).sort((c,S)=>c.localeCompare(S)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let m=$e((s=g.props)!=null?s:{},d,l),f=Pe(g,m,!0);for(let c in m)c.startsWith("on")&&(f.props||(f.props={}),f.props[c]=m[c]);return f}return Array.isArray(i)&&i.length===1?i[0]:i}return Me(u,Object.assign({},d,l),{default:()=>i})}function Se(e){return e.flatMap(n=>n.type===R?Se(n.children):[n])}function $e(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(t[a]!=null||(t[a]=[]),t[a].push(r[a])):n[a]=r[a];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(t).map(r=>[r,void 0])));for(let r in t)Object.assign(n,{[r](a,...o){let s=t[r];for(let u of s){if(a instanceof Event&&a.defaultPrevented)return;u(a,...o)}}});return n}function vt(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function ht(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ie=Symbol("Context");var C=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(C||{});function gt(){return de(Ie,null)}function _t(e){fe(Ie,e)}var $=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))($||{});function yt(e){throw new Error("Unexpected object: "+e)}var E=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(E||{});function bt(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),a=r??-1;switch(e.focus){case 0:{for(let o=0;o<t.length;++o)if(!n.resolveDisabled(t[o],o,t))return o;return r}case 1:{a===-1&&(a=t.length);for(let o=a-1;o>=0;--o)if(!n.resolveDisabled(t[o],o,t))return o;return r}case 2:{for(let o=a+1;o<t.length;++o)if(!n.resolveDisabled(t[o],o,t))return o;return r}case 3:{for(let o=t.length-1;o>=0;--o)if(!n.resolveDisabled(t[o],o,t))return o;return r}case 4:{for(let o=0;o<t.length;++o)if(n.resolveId(t[o],o,t)===e.id)return o;return r}case 5:return null;default:yt(e)}}let ie=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ce(e){var n,t;let r=(n=e.innerText)!=null?n:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return r;let o=!1;for(let u of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),o=!0;let s=o?(t=a.innerText)!=null?t:"":r;return ie.test(s)&&(s=s.replace(ie,"")),s}function wt(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let r=t.split(" ").map(a=>{let o=document.getElementById(a);if(o){let s=o.getAttribute("aria-label");return typeof s=="string"?s.trim():ce(o).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return ce(e).trim()}function xt(e){let n=y(""),t=y("");return()=>{let r=w(e);if(!r)return"";let a=r.innerText;if(n.value===a)return t.value;let o=wt(r).trim().toLowerCase();return n.value=a,t.value=o,o}}var St=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(St||{}),$t=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))($t||{});function It(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ee=Symbol("MenuContext");function G(e){let n=de(Ee,null);if(n===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return n}let Oe=H({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:t}){let r=y(1),a=y(null),o=y(null),s=y([]),u=y(""),d=y(null),i=y(1);function l(p=m=>m){let m=d.value!==null?s.value[d.value]:null,f=xe(p(s.value.slice()),S=>w(S.dataRef.domRef)),c=m?f.indexOf(m):null;return c===-1&&(c=null),{items:f,activeItemIndex:c}}let g={menuState:r,buttonRef:a,itemsRef:o,items:s,searchQuery:u,activeItemIndex:d,activationTrigger:i,closeMenu:()=>{r.value=1,d.value=null},openMenu:()=>r.value=0,goToItem(p,m,f){let c=l(),S=bt(p===E.Specific?{focus:E.Specific,id:m}:{focus:p},{resolveItems:()=>c.items,resolveActiveIndex:()=>c.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});u.value="",d.value=S,i.value=f??1,s.value=c.items},search(p){let m=u.value!==""?0:1;u.value+=p.toLowerCase();let f=(d.value!==null?s.value.slice(d.value+m).concat(s.value.slice(0,d.value+m)):s.value).find(S=>S.dataRef.textValue.startsWith(u.value)&&!S.dataRef.disabled),c=f?s.value.indexOf(f):-1;c===-1||c===d.value||(d.value=c,i.value=1)},clearSearch(){u.value=""},registerItem(p,m){let f=l(c=>[...c,{id:p,dataRef:m}]);s.value=f.items,d.value=f.activeItemIndex,i.value=1},unregisterItem(p){let m=l(f=>{let c=f.findIndex(S=>S.id===p);return c!==-1&&f.splice(c,1),f});s.value=m.items,d.value=m.activeItemIndex,i.value=1}};return ct([a,o],(p,m)=>{var f;g.closeMenu(),ae(m,ne.Loose)||(p.preventDefault(),(f=w(a))==null||f.focus())},F(()=>r.value===0)),fe(Ee,g),_t(F(()=>K(r.value,{0:C.Open,1:C.Closed}))),()=>{let p={open:r.value===0,close:g.closeMenu};return W({ourProps:{},theirProps:e,slot:p,slots:n,attrs:t,name:"Menu"})}}}),Fe=H({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${J()}`}},setup(e,{attrs:n,slots:t,expose:r}){let a=G("MenuButton");r({el:a.buttonRef,$el:a.buttonRef});function o(i){switch(i.key){case $.Space:case $.Enter:case $.ArrowDown:i.preventDefault(),i.stopPropagation(),a.openMenu(),D(()=>{var l;(l=w(a.itemsRef))==null||l.focus({preventScroll:!0}),a.goToItem(E.First)});break;case $.ArrowUp:i.preventDefault(),i.stopPropagation(),a.openMenu(),D(()=>{var l;(l=w(a.itemsRef))==null||l.focus({preventScroll:!0}),a.goToItem(E.Last)});break}}function s(i){switch(i.key){case $.Space:i.preventDefault();break}}function u(i){e.disabled||(a.menuState.value===0?(a.closeMenu(),D(()=>{var l;return(l=w(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(i.preventDefault(),a.openMenu(),It(()=>{var l;return(l=w(a.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let d=dt(F(()=>({as:e.as,type:n.type})),a.buttonRef);return()=>{var i;let l={open:a.menuState.value===0},{id:g,...p}=e,m={ref:a.buttonRef,id:g,type:d.value,"aria-haspopup":"menu","aria-controls":(i=w(a.itemsRef))==null?void 0:i.id,"aria-expanded":a.menuState.value===0,onKeydown:o,onKeyup:s,onClick:u};return W({ourProps:m,theirProps:p,slot:l,attrs:n,slots:t,name:"MenuButton"})}}}),ke=H({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${J()}`}},setup(e,{attrs:n,slots:t,expose:r}){let a=G("MenuItems"),o=y(null);r({el:a.itemsRef,$el:a.itemsRef}),pt({container:F(()=>w(a.itemsRef)),enabled:F(()=>a.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function s(l){var g;switch(o.value&&clearTimeout(o.value),l.key){case $.Space:if(a.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),a.search(l.key);case $.Enter:if(l.preventDefault(),l.stopPropagation(),a.activeItemIndex.value!==null){let p=a.items.value[a.activeItemIndex.value];(g=w(p.dataRef.domRef))==null||g.click()}a.closeMenu(),we(w(a.buttonRef));break;case $.ArrowDown:return l.preventDefault(),l.stopPropagation(),a.goToItem(E.Next);case $.ArrowUp:return l.preventDefault(),l.stopPropagation(),a.goToItem(E.Previous);case $.Home:case $.PageUp:return l.preventDefault(),l.stopPropagation(),a.goToItem(E.First);case $.End:case $.PageDown:return l.preventDefault(),l.stopPropagation(),a.goToItem(E.Last);case $.Escape:l.preventDefault(),l.stopPropagation(),a.closeMenu(),D(()=>{var p;return(p=w(a.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case $.Tab:l.preventDefault(),l.stopPropagation(),a.closeMenu(),D(()=>rt(w(a.buttonRef),l.shiftKey?z.Previous:z.Next));break;default:l.key.length===1&&(a.search(l.key),o.value=setTimeout(()=>a.clearSearch(),350));break}}function u(l){switch(l.key){case $.Space:l.preventDefault();break}}let d=gt(),i=F(()=>d!==null?(d.value&C.Open)===C.Open:a.menuState.value===0);return()=>{var l,g;let p={open:a.menuState.value===0},{id:m,...f}=e,c={"aria-activedescendant":a.activeItemIndex.value===null||(l=a.items.value[a.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(g=w(a.buttonRef))==null?void 0:g.id,id:m,onKeydown:s,onKeyup:u,role:"menu",tabIndex:0,ref:a.itemsRef};return W({ourProps:c,theirProps:f,slot:p,attrs:n,slots:t,features:X.RenderStrategy|X.Static,visible:i.value,name:"MenuItems"})}}}),j=H({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${J()}`}},setup(e,{slots:n,attrs:t,expose:r}){let a=G("MenuItem"),o=y(null);r({el:o,$el:o});let s=F(()=>a.activeItemIndex.value!==null?a.items.value[a.activeItemIndex.value].id===e.id:!1),u=xt(o),d=F(()=>({disabled:e.disabled,get textValue(){return u()},domRef:o}));M(()=>a.registerItem(e.id,d)),Re(()=>a.unregisterItem(e.id)),U(()=>{a.menuState.value===0&&s.value&&a.activationTrigger.value!==0&&D(()=>{var c,S;return(S=(c=w(o))==null?void 0:c.scrollIntoView)==null?void 0:S.call(c,{block:"nearest"})})});function i(c){if(e.disabled)return c.preventDefault();a.closeMenu(),we(w(a.buttonRef))}function l(){if(e.disabled)return a.goToItem(E.Nothing);a.goToItem(E.Specific,e.id)}let g=ft();function p(c){g.update(c)}function m(c){g.wasMoved(c)&&(e.disabled||s.value||a.goToItem(E.Specific,e.id,0))}function f(c){g.wasMoved(c)&&(e.disabled||s.value&&a.goToItem(E.Nothing))}return()=>{let{disabled:c}=e,S={active:s.value,disabled:c,close:a.closeMenu},{id:T,...Ae}=e;return W({ourProps:{id:T,ref:o,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:l,onPointerenter:p,onMouseenter:p,onPointermove:m,onMousemove:m,onPointerleave:f,onMouseleave:f},theirProps:{...t,...Ae},slot:S,attrs:t,slots:n,name:"MenuItem"})}}});function Et(e){return{all:e=e||new Map,on:function(n,t){var r=e.get(n);r?r.push(t):e.set(n,[t])},off:function(n,t){var r=e.get(n);r&&(t?r.splice(r.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var r=e.get(n);r&&r.slice().map(function(a){a(t)}),(r=e.get("*"))&&r.slice().map(function(a){a(n,t)})}}}const re="FILE_UPLOAD_STARTED",De="SHOW_ERROR_DIALOG",Ne="SHOW_NOTIFICATION",Ot="ON_SEARCH",N=Et();function Ft(e){N.emit(De,{message:e})}function Te(e){N.emit(Ne,{type:"success",message:e})}const kt={class:"p-6"},Dt=h("h2",{class:"text-lg font-medium text-gray-900"}," Create New Folder ",-1),Nt={class:"mt-6"},Tt={class:"mt-6 flex justify-end"},At={__name:"CreateFolderModal",props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:n}){const t=pe({name:"",parent_id:null}),r=me(),a=y(null),o=n;function s(){D(()=>a.value.focus())}function u(){t.parent_id=r.props.folder.id;const i=t.name;t.post(route("folder.create"),{preserveScroll:!0,onSuccess:()=>{d(),Te(`The folder "${i}" was created`),t.reset()},onError:()=>a.value.focus()})}function d(){o("update:modelValue"),t.clearErrors(),t.reset()}return(i,l)=>(x(),k(ge,{show:e.modelValue,onShow:s,"max-width":"sm"},{default:_(()=>[h("div",kt,[Dt,h("div",Nt,[v(He,{for:"folderName",value:"Folder Name",class:"sr-only"}),v(_e,{type:"text",ref_key:"folderNameInput",ref:a,id:"folderName",modelValue:b(t).name,"onUpdate:modelValue":l[0]||(l[0]=g=>b(t).name=g),class:P(["mt-1 block w-full",b(t).errors.name?"border-red-500 focus:border-red-500 focus:ring-red-500":""]),placeholder:"Folder Name",onKeyup:ve(u,["enter"])},null,8,["modelValue","class"]),v(Ve,{message:b(t).errors.name,class:"mt-2"},null,8,["message"])]),h("div",Tt,[v(Be,{onClick:d},{default:_(()=>[I("Cancel")]),_:1}),v(ye,{class:P(["ml-3",{"opacity-25":b(t).processing}]),onClick:u,disable:b(t).processing},{default:_(()=>[I(" Submit ")]),_:1},8,["class","disable"])])])]),_:1},8,["show"]))}},Pt={href:"#",class:"text-gray-700 block px-4 py-2 text-sm relative"},Mt={__name:"FileUploadMenuItem",setup(e){function n(t){N.emit(re,t.target.files)}return(t,r)=>(x(),k(b(j),null,{default:_(({active:a})=>[h("a",Pt,[I(" Upload Files "),h("input",{onChange:n,type:"file",class:"absolute left-0 top-0 bottom-0 right-0 cursor-pointer opacity-0",multiple:""},null,32)])]),_:1}))}},Rt={href:"#",class:"text-gray-700 block px-4 py-2 text-sm relative"},Lt={__name:"FolderUploadMenuItem",setup(e){function n(t){N.emit(re,t.target.files)}return(t,r)=>(x(),k(b(j),null,{default:_(({active:a})=>[h("a",Rt,[I(" Upload Folder "),h("input",{onChange:n,type:"file",class:"absolute left-0 top-0 bottom-0 right-0 cursor-pointer opacity-0",multiple:"",directory:"",webkitdirectory:""},null,32)])]),_:1}))}},Ct={class:"px-1 py-1"},jt={class:"px-1 py-1"},Ut={__name:"CreateNewDropdown",setup(e){const n=y(!1);function t(){n.value=!0}return(r,a)=>(x(),O(R,null,[v(b(Oe),{as:"div",class:"relative block text-left"},{default:_(()=>[v(b(Fe),{class:"flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},{default:_(()=>[I(" Create New ")]),_:1}),v(Z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:_(()=>[v(b(ke),{class:"absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:_(()=>[h("div",Ct,[v(b(j),null,{default:_(({active:o})=>[h("a",{href:"#",onClick:A(t,["prevent"]),class:"text-gray-700 block px-4 py-2 text-sm"}," New Folder ")]),_:1})]),h("div",jt,[v(Mt),v(Lt)])]),_:1})]),_:1})]),_:1}),v(At,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=o=>n.value=o)},null,8,["modelValue"])],64))}},Vt={class:"min-w-[200px]"},Ht={class:"px-3"},Bt={class:"py-3"},Kt={__name:"Navigation",props:{auth_user:Object},setup(e){return(n,t)=>(x(),O("nav",Vt,[v(b(Le),{href:n.route("myFiles"),class:"h-[80px] px-3 flex items-center gap-3"},{default:_(()=>[v(Ue,{class:"block h-9 w-auto fill-current text-gray-800"}),I(" Document Repository ")]),_:1},8,["href"]),h("div",Ht,[e.auth_user.can["Add Files"]?(x(),k(Ut,{key:0})):L("",!0),h("div",Bt,[v(Q,{href:n.route("myFiles"),active:n.$page.props.route_name==="myFiles"},{default:_(()=>[v(b(Ge),{class:"w-4 h-4"}),I(" Files")]),_:1},8,["href","active"]),e.auth_user.can["View Logs"]?(x(),k(Q,{key:0,href:"/users-model",active:n.$page.props.route_name==="users"},{default:_(()=>[I("User")]),_:1},8,["active"])):L("",!0),e.auth_user.can["Add Users"]?(x(),k(Q,{key:1,href:n.route("logs"),active:n.$page.props.route_name==="logs"},{default:_(()=>[I("Logs")]),_:1},8,["href","active"])):L("",!0)])])]))}},Wt={class:"w-[600px] h-[80px] flex items-center"},Gt={__name:"SearchForm",setup(e){let n="";const t=y("");function r(){n.set("search",t.value),he.get(window.location.pathname+"?"+n.toString()),N.emit(Ot,t.value)}return M(()=>{n=new URLSearchParams(window.location.search),t.value=n.get("search")}),(a,o)=>(x(),O("div",Wt,[v(_e,{type:"text",class:"block w-full mr-2",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),autocomplete:"",onKeyup:ve(A(r,["prevent"]),["enter"]),placeholder:"Search for files and folders"},null,8,["modelValue","onKeyup"])]))}},Qt={class:"px-1 py-1"},qt=h("button",{as:"button"}," LogOut ",-1),Yt=[qt],zt={__name:"UserSettingsDropdown",setup(e){const n=()=>{he.post(route("logout"))};return(t,r)=>(x(),k(b(Oe),{as:"div",class:"relative inline-block text-left"},{default:_(()=>[h("div",null,[v(b(Fe),{class:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},{default:_(()=>[I(B(t.$page.props.auth.user.name)+" ",1),v(b(We),{class:"ml-2 -mr-1 h-5 w-5 text-gray-800","aria-hidden":"true"})]),_:1})]),v(Z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:_(()=>[v(b(ke),{class:"absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:_(()=>[h("div",Qt,[v(b(j),null,{default:_(({active:a})=>[v(oe,{href:t.route("profile.show"),class:P([a?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:_(()=>[I(" Profile ")]),_:2},1032,["href","class"])]),_:1}),v(b(j),null,{default:_(({active:a})=>[v(oe,{method:"post",as:"button",class:P([a?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:_(()=>[h("form",{onSubmit:A(n,["prevent"])},Yt,32)]),_:2},1032,["class"])]),_:1})])]),_:1})]),_:1})]),_:1}))}},Xt={key:0,class:"absolute border-gray-900 border right-8 bottom-4 bg-white shadow-lg rounded flex flex-col w-[240px] p-2"},Zt={class:"text-xs mb-2"},Jt={class:"h-3 bg-gray-100 rounded-md"},en={__name:"FormProgress",props:{form:Object},setup(e){return(n,t)=>e.form.progress?(x(),O("div",Xt,[h("div",Zt,"Uploading "+B(e.form.files.length)+" files",1),h("div",Jt,[h("div",{class:"h-full bg-gray-900 rounded-md transition-all",style:Ce({width:e.form.progress.percentage+"%"})},null,4)])])):L("",!0)}},tn={class:"p-6"},nn=h("h2",{class:"text-2xl mb-2 text-red-600 font-semibold"},"Error",-1),an={class:"mt-6 flex justify-end"},rn={__name:"ErrorDialog",emits:["close"],setup(e,{emit:n}){const t=y(!1),r=y("");function a(){t.value=!1,r.value=""}return M(()=>{N.on(De,({message:o})=>{t.value=!0,r.value=o})}),(o,s)=>(x(),k(ge,{show:t.value,"max-width":"md"},{default:_(()=>[h("div",tn,[nn,h("p",null,B(r.value),1),h("div",an,[v(ye,{onClick:a},{default:_(()=>[I("OK")]),_:1})])])]),_:1},8,["show"]))}},on={__name:"Notification",setup(e){const n=y(!1),t=y("success"),r=y("");function a(){n.value=!1,t.value="",r.value=""}return M(()=>{let o;N.on(Ne,({type:s,message:u})=>{n.value=!0,t.value=s,r.value=u,o&&clearTimeout(o),o=setTimeout(()=>{a()},5e3)})}),(o,s)=>(x(),k(Z,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:_(()=>[n.value?(x(),O("div",{key:0,class:P(["fixed bottom-4 left-4 text-white py-2 px-4 rounded-lg shadow-md w-[200px]",{"bg-emerald-500":t.value==="success","bg-red-500":t.value==="error"}])},B(r.value),3)):L("",!0)]),_:1}))}},ln={class:"h-screen bg-gray-50 flex w-full gap-4"},sn={class:"flex items-center justify-between w-full"},un={class:"flex-1 flex flex-col overflow-hidden"},cn={__name:"AuthenticatedLayout",props:{auth_user:Object},setup(e){const n=me(),t=pe({files:[],relative_paths:[],parent_id:null}),r=y(!1);function a(){r.value=!0}function o(){r.value=!1}function s(d){r.value=!1;const i=d.dataTransfer.files;i.length&&u(i)}function u(d){console.log(d),t.parent_id=n.props.folder.id,t.files=d,t.relative_paths=[...d].map(i=>i.webkitRelativePath),t.post(route("file.store"),{onSuccess:()=>{Te(`${d.length} files have been uploaded`)},onError:i=>{let l="";Object.keys(i).length>0?l=i[Object.keys(i)[0]]:l="Error during file upload. Please try again later.",Ft(l)},onFinish:()=>{t.clearErrors(),t.reset()}})}return M(()=>{N.on(re,u)}),(d,i)=>(x(),O(R,null,[h("div",ln,[v(Kt,{auth_user:e.auth_user},null,8,["auth_user"]),h("main",{onDrop:A(s,["prevent"]),onDragover:A(a,["prevent"]),onDragleave:A(o,["prevent"]),class:P(["flex flex-col flex-1 px-4 overflow-hidden",r.value?"dropzone":""])},[r.value?(x(),O(R,{key:0},[I(" Drop files here to upload ")],64)):(x(),O(R,{key:1},[h("div",sn,[v(Gt),v(zt)]),h("div",un,[je(d.$slots,"default",{},void 0,!0)])],64))],34)]),v(rn),v(en,{form:b(t)},null,8,["form"]),v(on)],64))}},wn=Ke(cn,[["__scopeId","data-v-a57d4b0b"]]);export{wn as A,Ot as O,Te as a,N as e,Ge as r,Ft as s};
