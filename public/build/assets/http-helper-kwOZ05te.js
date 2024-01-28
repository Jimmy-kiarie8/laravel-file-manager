import{o as y,d as x,a as _,j as F,by as L,r as w,k as O,aI as M,O as De,ah as Me,F as A,an as de,aQ as fe,a1 as B,aN as Pe,T as pe,bH as Y,c as P,w as b,b as v,u as g,n as D,bE as me,f as E,A as Z,h as R,i as Re,bL as je,t as H,aB as Ce,e as ve,l as Le}from"./app-kQTGVEPy.js";import{A as Ue}from"./ApplicationLogo-TK8GQjXt.js";import{_ as he}from"./Modal-mUJ4XpQu.js";import{_ as ge,a as Ve}from"./TextInput-d-FtJerk.js";import{_ as Be}from"./InputLabel-l6Em0noZ.js";import{_ as He}from"./SecondaryButton-RXBtNuaP.js";import{_ as _e}from"./PrimaryButton-oGpcRkO4.js";import{_ as U,a as re}from"./ResponsiveNavLink-iTT8E6rr.js";import{_ as Ke}from"./_plugin-vue_export-helper-x3n3nnut.js";function We(e,t){return y(),x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}let Ge=0;function ze(){return++Ge}function J(){return ze()}function S(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function K(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,K),o}var qe=Object.defineProperty,Qe=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t,n)=>(Qe(e,typeof t!="symbol"?t+"":t,n),n);let Xe=class{constructor(){le(this,"current",this.detect()),le(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ee=new Xe;function te(e){if(ee.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=S(e);if(t)return t.ownerDocument}return document}let q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Q||{}),Ye=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ye||{}),Ze=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ze||{});function ye(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(q)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ne=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ne||{});function ae(e,t=0){var n;return e===((n=te(e))==null?void 0:n.body)?!1:K(t,{0(){return e.matches(q)},1(){let o=e;for(;o!==null;){if(o.matches(q))return!0;o=o.parentElement}return!1}})}function be(e){let t=te(e);F(()=>{t&&!ae(t.activeElement,0)&&et(e)})}var Je=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Je||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function et(e){e==null||e.focus({preventScroll:!0})}let tt=["textarea","input"].join(",");function nt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,tt))!=null?n:!1}function we(e,t=n=>n){return e.slice().sort((n,o)=>{let a=t(n),r=t(o);if(a===null||r===null)return 0;let s=a.compareDocumentPosition(r);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function at(e,t){return ot(ye(),t,{relativeTo:e})}function ot(e,t,{sorted:n=!0,relativeTo:o=null,skipElements:a=[]}={}){var r;let s=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,i=Array.isArray(e)?n?we(e):e:ye(e);a.length>0&&i.length>1&&(i=i.filter(f=>!a.includes(f))),o=o??s.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(o))-1;if(t&4)return Math.max(0,i.indexOf(o))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},h=0,p=i.length,m;do{if(h>=p||h+p<=0)return 0;let f=u+h;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}m=i[f],m==null||m.focus(l),h+=d}while(m!==s.activeElement);return t&6&&nt(m)&&m.select(),2}function rt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function lt(){return/Android/gi.test(window.navigator.userAgent)}function st(){return rt()||lt()}function V(e,t,n){ee.isServer||L(o=>{document.addEventListener(e,t,n),o(()=>document.removeEventListener(e,t,n))})}function it(e,t,n){ee.isServer||L(o=>{window.addEventListener(e,t,n),o(()=>window.removeEventListener(e,t,n))})}function ut(e,t,n=O(()=>!0)){function o(r,s){if(!n.value||r.defaultPrevented)return;let i=s(r);if(i===null||!i.getRootNode().contains(i))return;let d=function u(l){return typeof l=="function"?u(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let u of d){if(u===null)continue;let l=u instanceof HTMLElement?u:S(u);if(l!=null&&l.contains(i)||r.composed&&r.composedPath().includes(l))return}return!ae(i,ne.Loose)&&i.tabIndex!==-1&&r.preventDefault(),t(r,i)}let a=w(null);V("pointerdown",r=>{var s,i;n.value&&(a.value=((i=(s=r.composedPath)==null?void 0:s.call(r))==null?void 0:i[0])||r.target)},!0),V("mousedown",r=>{var s,i;n.value&&(a.value=((i=(s=r.composedPath)==null?void 0:s.call(r))==null?void 0:i[0])||r.target)},!0),V("click",r=>{st()||a.value&&(o(r,()=>a.value),a.value=null)},!0),V("touchend",r=>o(r,()=>r.target instanceof HTMLElement?r.target:null),!0),it("blur",r=>o(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function se(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ct(e,t){let n=w(se(e.value.type,e.value.as));return M(()=>{n.value=se(e.value.type,e.value.as)}),L(()=>{var o;n.value||S(t)&&S(t)instanceof HTMLButtonElement&&!((o=S(t))!=null&&o.hasAttribute("type"))&&(n.value="button")}),n}function ie(e){return[e.screenX,e.screenY]}function dt(){let e=w([-1,-1]);return{wasMoved(t){let n=ie(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=ie(t)}}}function ft({container:e,accept:t,walk:n,enabled:o}){L(()=>{let a=e.value;if(!a||o!==void 0&&!o.value)return;let r=te(e);if(!r)return;let s=Object.assign(d=>t(d),{acceptNode:t}),i=r.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,s,!1);for(;i.nextNode();)n(i.currentNode)})}var X=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(X||{}),pt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(pt||{});function W({visible:e=!0,features:t=0,ourProps:n,theirProps:o,...a}){var r;let s=Se(o,n),i=Object.assign(a,{props:s});if(e||t&2&&s.static)return z(i);if(t&1){let d=(r=s.unmount)==null||r?0:1;return K(d,{0(){return null},1(){return z({...a,props:{...s,hidden:!0,style:{display:"none"}}})}})}return z(i)}function z({props:e,attrs:t,slots:n,slot:o,name:a}){var r,s;let{as:i,...d}=mt(e,["unmount","static"]),u=(r=n.default)==null?void 0:r.call(n,o),l={};if(o){let h=!1,p=[];for(let[m,f]of Object.entries(o))typeof f=="boolean"&&(h=!0),f===!0&&p.push(m);h&&(l["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(u=xe(u??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[h,...p]=u??[];if(!vt(h)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(c=>c.trim()).filter((c,$,N)=>N.indexOf(c)===$).sort((c,$)=>c.localeCompare($)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let m=Se((s=h.props)!=null?s:{},d,l),f=De(h,m,!0);for(let c in m)c.startsWith("on")&&(f.props||(f.props={}),f.props[c]=m[c]);return f}return Array.isArray(u)&&u.length===1?u[0]:u}return Me(i,Object.assign({},d,l),{default:()=>u})}function xe(e){return e.flatMap(t=>t.type===A?xe(t.children):[t])}function Se(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let a in o)a.startsWith("on")&&typeof o[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](a,...r){let s=n[o];for(let i of s){if(a instanceof Event&&a.defaultPrevented)return;i(a,...r)}}});return t}function mt(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}function vt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let $e=Symbol("Context");var j=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(j||{});function ht(){return de($e,null)}function gt(e){fe($e,e)}var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});function _t(e){throw new Error("Unexpected object: "+e)}var k=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(k||{});function yt(e,t){let n=t.resolveItems();if(n.length<=0)return null;let o=t.resolveActiveIndex(),a=o??-1;switch(e.focus){case 0:{for(let r=0;r<n.length;++r)if(!t.resolveDisabled(n[r],r,n))return r;return o}case 1:{a===-1&&(a=n.length);for(let r=a-1;r>=0;--r)if(!t.resolveDisabled(n[r],r,n))return r;return o}case 2:{for(let r=a+1;r<n.length;++r)if(!t.resolveDisabled(n[r],r,n))return r;return o}case 3:{for(let r=n.length-1;r>=0;--r)if(!t.resolveDisabled(n[r],r,n))return r;return o}case 4:{for(let r=0;r<n.length;++r)if(t.resolveId(n[r],r,n)===e.id)return r;return o}case 5:return null;default:_t(e)}}let ue=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ce(e){var t,n;let o=(t=e.innerText)!=null?t:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return o;let r=!1;for(let i of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),r=!0;let s=r?(n=a.innerText)!=null?n:"":o;return ue.test(s)&&(s=s.replace(ue,"")),s}function bt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let o=n.split(" ").map(a=>{let r=document.getElementById(a);if(r){let s=r.getAttribute("aria-label");return typeof s=="string"?s.trim():ce(r).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return ce(e).trim()}function wt(e){let t=w(""),n=w("");return()=>{let o=S(e);if(!o)return"";let a=o.innerText;if(t.value===a)return n.value;let r=bt(o).trim().toLowerCase();return t.value=a,n.value=r,r}}var xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xt||{}),St=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(St||{});function $t(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ie=Symbol("MenuContext");function G(e){let t=de(Ie,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,G),n}return t}let Ee=B({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let o=w(1),a=w(null),r=w(null),s=w([]),i=w(""),d=w(null),u=w(1);function l(p=m=>m){let m=d.value!==null?s.value[d.value]:null,f=we(p(s.value.slice()),$=>S($.dataRef.domRef)),c=m?f.indexOf(m):null;return c===-1&&(c=null),{items:f,activeItemIndex:c}}let h={menuState:o,buttonRef:a,itemsRef:r,items:s,searchQuery:i,activeItemIndex:d,activationTrigger:u,closeMenu:()=>{o.value=1,d.value=null},openMenu:()=>o.value=0,goToItem(p,m,f){let c=l(),$=yt(p===k.Specific?{focus:k.Specific,id:m}:{focus:p},{resolveItems:()=>c.items,resolveActiveIndex:()=>c.activeItemIndex,resolveId:N=>N.id,resolveDisabled:N=>N.dataRef.disabled});i.value="",d.value=$,u.value=f??1,s.value=c.items},search(p){let m=i.value!==""?0:1;i.value+=p.toLowerCase();let f=(d.value!==null?s.value.slice(d.value+m).concat(s.value.slice(0,d.value+m)):s.value).find($=>$.dataRef.textValue.startsWith(i.value)&&!$.dataRef.disabled),c=f?s.value.indexOf(f):-1;c===-1||c===d.value||(d.value=c,u.value=1)},clearSearch(){i.value=""},registerItem(p,m){let f=l(c=>[...c,{id:p,dataRef:m}]);s.value=f.items,d.value=f.activeItemIndex,u.value=1},unregisterItem(p){let m=l(f=>{let c=f.findIndex($=>$.id===p);return c!==-1&&f.splice(c,1),f});s.value=m.items,d.value=m.activeItemIndex,u.value=1}};return ut([a,r],(p,m)=>{var f;h.closeMenu(),ae(m,ne.Loose)||(p.preventDefault(),(f=S(a))==null||f.focus())},O(()=>o.value===0)),fe(Ie,h),gt(O(()=>K(o.value,{0:j.Open,1:j.Closed}))),()=>{let p={open:o.value===0,close:h.closeMenu};return W({ourProps:{},theirProps:e,slot:p,slots:t,attrs:n,name:"Menu"})}}}),ke=B({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${J()}`}},setup(e,{attrs:t,slots:n,expose:o}){let a=G("MenuButton");o({el:a.buttonRef,$el:a.buttonRef});function r(u){switch(u.key){case I.Space:case I.Enter:case I.ArrowDown:u.preventDefault(),u.stopPropagation(),a.openMenu(),F(()=>{var l;(l=S(a.itemsRef))==null||l.focus({preventScroll:!0}),a.goToItem(k.First)});break;case I.ArrowUp:u.preventDefault(),u.stopPropagation(),a.openMenu(),F(()=>{var l;(l=S(a.itemsRef))==null||l.focus({preventScroll:!0}),a.goToItem(k.Last)});break}}function s(u){switch(u.key){case I.Space:u.preventDefault();break}}function i(u){e.disabled||(a.menuState.value===0?(a.closeMenu(),F(()=>{var l;return(l=S(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(u.preventDefault(),a.openMenu(),$t(()=>{var l;return(l=S(a.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let d=ct(O(()=>({as:e.as,type:t.type})),a.buttonRef);return()=>{var u;let l={open:a.menuState.value===0},{id:h,...p}=e,m={ref:a.buttonRef,id:h,type:d.value,"aria-haspopup":"menu","aria-controls":(u=S(a.itemsRef))==null?void 0:u.id,"aria-expanded":a.menuState.value===0,onKeydown:r,onKeyup:s,onClick:i};return W({ourProps:m,theirProps:p,slot:l,attrs:t,slots:n,name:"MenuButton"})}}}),Oe=B({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${J()}`}},setup(e,{attrs:t,slots:n,expose:o}){let a=G("MenuItems"),r=w(null);o({el:a.itemsRef,$el:a.itemsRef}),ft({container:O(()=>S(a.itemsRef)),enabled:O(()=>a.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function s(l){var h;switch(r.value&&clearTimeout(r.value),l.key){case I.Space:if(a.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),a.search(l.key);case I.Enter:if(l.preventDefault(),l.stopPropagation(),a.activeItemIndex.value!==null){let p=a.items.value[a.activeItemIndex.value];(h=S(p.dataRef.domRef))==null||h.click()}a.closeMenu(),be(S(a.buttonRef));break;case I.ArrowDown:return l.preventDefault(),l.stopPropagation(),a.goToItem(k.Next);case I.ArrowUp:return l.preventDefault(),l.stopPropagation(),a.goToItem(k.Previous);case I.Home:case I.PageUp:return l.preventDefault(),l.stopPropagation(),a.goToItem(k.First);case I.End:case I.PageDown:return l.preventDefault(),l.stopPropagation(),a.goToItem(k.Last);case I.Escape:l.preventDefault(),l.stopPropagation(),a.closeMenu(),F(()=>{var p;return(p=S(a.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case I.Tab:l.preventDefault(),l.stopPropagation(),a.closeMenu(),F(()=>at(S(a.buttonRef),l.shiftKey?Q.Previous:Q.Next));break;default:l.key.length===1&&(a.search(l.key),r.value=setTimeout(()=>a.clearSearch(),350));break}}function i(l){switch(l.key){case I.Space:l.preventDefault();break}}let d=ht(),u=O(()=>d!==null?(d.value&j.Open)===j.Open:a.menuState.value===0);return()=>{var l,h;let p={open:a.menuState.value===0},{id:m,...f}=e,c={"aria-activedescendant":a.activeItemIndex.value===null||(l=a.items.value[a.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(h=S(a.buttonRef))==null?void 0:h.id,id:m,onKeydown:s,onKeyup:i,role:"menu",tabIndex:0,ref:a.itemsRef};return W({ourProps:c,theirProps:f,slot:p,attrs:t,slots:n,features:X.RenderStrategy|X.Static,visible:u.value,name:"MenuItems"})}}}),C=B({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${J()}`}},setup(e,{slots:t,attrs:n,expose:o}){let a=G("MenuItem"),r=w(null);o({el:r,$el:r});let s=O(()=>a.activeItemIndex.value!==null?a.items.value[a.activeItemIndex.value].id===e.id:!1),i=wt(r),d=O(()=>({disabled:e.disabled,get textValue(){return i()},domRef:r}));M(()=>a.registerItem(e.id,d)),Pe(()=>a.unregisterItem(e.id)),L(()=>{a.menuState.value===0&&s.value&&a.activationTrigger.value!==0&&F(()=>{var c,$;return($=(c=S(r))==null?void 0:c.scrollIntoView)==null?void 0:$.call(c,{block:"nearest"})})});function u(c){if(e.disabled)return c.preventDefault();a.closeMenu(),be(S(a.buttonRef))}function l(){if(e.disabled)return a.goToItem(k.Nothing);a.goToItem(k.Specific,e.id)}let h=dt();function p(c){h.update(c)}function m(c){h.wasMoved(c)&&(e.disabled||s.value||a.goToItem(k.Specific,e.id,0))}function f(c){h.wasMoved(c)&&(e.disabled||s.value&&a.goToItem(k.Nothing))}return()=>{let{disabled:c}=e,$={active:s.value,disabled:c,close:a.closeMenu},{id:N,...Ae}=e;return W({ourProps:{id:N,ref:r,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:l,onPointerenter:p,onMouseenter:p,onPointermove:m,onMousemove:m,onPointerleave:f,onMouseleave:f},theirProps:{...n,...Ae},slot:$,attrs:n,slots:t,name:"MenuItem"})}}});function It(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(a){a(n)}),(o=e.get("*"))&&o.slice().map(function(a){a(t,n)})}}}const oe="FILE_UPLOAD_STARTED",Fe="SHOW_ERROR_DIALOG",Te="SHOW_NOTIFICATION",Et="ON_SEARCH",T=It();function kt(e){T.emit(Fe,{message:e})}function Ne(e){T.emit(Te,{type:"success",message:e})}const Ot={class:"p-6"},Ft=_("h2",{class:"text-lg font-medium text-gray-900"}," Create New Folder ",-1),Tt={class:"mt-6"},Nt={class:"mt-6 flex justify-end"},At={__name:"CreateFolderModal",props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const n=pe({name:"",parent_id:null}),o=Y(),a=w(null),r=t;function s(){F(()=>a.value.focus())}function i(){n.parent_id=o.props.folder.id;const u=n.name;n.post(route("folder.create"),{preserveScroll:!0,onSuccess:()=>{d(),Ne(`The folder "${u}" was created`),n.reset()},onError:()=>a.value.focus()})}function d(){r("update:modelValue"),n.clearErrors(),n.reset()}return(u,l)=>(y(),P(he,{show:e.modelValue,onShow:s,"max-width":"sm"},{default:b(()=>[_("div",Ot,[Ft,_("div",Tt,[v(Be,{for:"folderName",value:"Folder Name",class:"sr-only"}),v(ge,{type:"text",ref_key:"folderNameInput",ref:a,id:"folderName",modelValue:g(n).name,"onUpdate:modelValue":l[0]||(l[0]=h=>g(n).name=h),class:D(["mt-1 block w-full",g(n).errors.name?"border-red-500 focus:border-red-500 focus:ring-red-500":""]),placeholder:"Folder Name",onKeyup:me(i,["enter"])},null,8,["modelValue","class"]),v(Ve,{message:g(n).errors.name,class:"mt-2"},null,8,["message"])]),_("div",Nt,[v(He,{onClick:d},{default:b(()=>[E("Cancel")]),_:1}),v(_e,{class:D(["ml-3",{"opacity-25":g(n).processing}]),onClick:i,disable:g(n).processing},{default:b(()=>[E(" Submit ")]),_:1},8,["class","disable"])])])]),_:1},8,["show"]))}},Dt={href:"#",class:"text-gray-700 block px-4 py-2 text-sm relative"},Mt={__name:"FileUploadMenuItem",setup(e){function t(n){T.emit(oe,n.target.files)}return(n,o)=>(y(),P(g(C),null,{default:b(({active:a})=>[_("a",Dt,[E(" Upload Files "),_("input",{onChange:t,type:"file",class:"absolute left-0 top-0 bottom-0 right-0 cursor-pointer opacity-0",multiple:""},null,32)])]),_:1}))}},Pt={href:"#",class:"text-gray-700 block px-4 py-2 text-sm relative"},Rt={__name:"FolderUploadMenuItem",setup(e){function t(n){T.emit(oe,n.target.files)}return(n,o)=>(y(),P(g(C),null,{default:b(({active:a})=>[_("a",Pt,[E(" Upload Folder "),_("input",{onChange:t,type:"file",class:"absolute left-0 top-0 bottom-0 right-0 cursor-pointer opacity-0",multiple:"",directory:"",webkitdirectory:""},null,32)])]),_:1}))}},jt={class:"px-1 py-1"},Ct={class:"px-1 py-1"},Lt={__name:"CreateNewDropdown",setup(e){const t=w(!1);function n(){t.value=!0}return(o,a)=>(y(),x(A,null,[v(g(Ee),{as:"div",class:"relative block text-left"},{default:b(()=>[v(g(ke),{class:"flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},{default:b(()=>[E(" Create New ")]),_:1}),v(Z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:b(()=>[v(g(Oe),{class:"absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:b(()=>[_("div",jt,[v(g(C),null,{default:b(({active:r})=>[_("a",{href:"#",onClick:R(n,["prevent"]),class:"text-gray-700 block px-4 py-2 text-sm"}," New Folder ")]),_:1})]),_("div",Ct,[v(Mt),v(Rt)])]),_:1})]),_:1})]),_:1}),v(At,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=r=>t.value=r)},null,8,["modelValue"])],64))}},Ut={class:"min-w-[200px]"},Vt={class:"px-3"},Bt={class:"py-3"},Ht={__name:"Navigation",setup(e){return(t,n)=>(y(),x("nav",Ut,[v(g(Re),{href:t.route("myFiles"),class:"h-[80px] px-3 flex items-center gap-3"},{default:b(()=>[v(Ue,{class:"block h-9 w-auto fill-current text-gray-800"}),E(" LaraStorage ")]),_:1},8,["href"]),_("div",Vt,[v(Lt),_("div",Bt,[v(U,{href:t.route("myFiles"),active:t.$page.props.route_name==="myFiles"},{default:b(()=>[E("My Files")]),_:1},8,["href","active"]),v(U,{href:t.route("file.sharedWithMe"),active:t.$page.props.route_name==="file.sharedWithMe"},{default:b(()=>[E("Shared with me")]),_:1},8,["href","active"]),v(U,{href:t.route("file.sharedByMe"),active:t.$page.props.route_name==="file.sharedByMe"},{default:b(()=>[E("Shared by me")]),_:1},8,["href","active"]),v(U,{href:t.route("trash"),active:t.$page.props.route_name==="trash"},{default:b(()=>[E("Trash")]),_:1},8,["href","active"])])])]))}},Kt={class:"w-[600px] h-[80px] flex items-center"},Wt={__name:"SearchForm",setup(e){let t="";const n=w("");function o(){t.set("search",n.value),je.get(window.location.pathname+"?"+t.toString()),T.emit(Et,n.value)}return M(()=>{t=new URLSearchParams(window.location.search),n.value=t.get("search")}),(a,r)=>(y(),x("div",Kt,[v(ge,{type:"text",class:"block w-full mr-2",modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=s=>n.value=s),autocomplete:"",onKeyup:me(R(o,["prevent"]),["enter"]),placeholder:"Search for files and folders"},null,8,["modelValue","onKeyup"])]))}},Gt={class:"px-1 py-1"},zt={__name:"UserSettingsDropdown",setup(e){return(t,n)=>(y(),P(g(Ee),{as:"div",class:"relative inline-block text-left"},{default:b(()=>[_("div",null,[v(g(ke),{class:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},{default:b(()=>[E(H(t.$page.props.auth.user.name)+" ",1),v(g(We),{class:"ml-2 -mr-1 h-5 w-5 text-gray-800","aria-hidden":"true"})]),_:1})]),v(Z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:b(()=>[v(g(Oe),{class:"absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:b(()=>[_("div",Gt,[v(g(C),null,{default:b(({active:o})=>[v(re,{href:t.route("profile.show"),class:D([o?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:b(()=>[E(" Profile ")]),_:2},1032,["href","class"])]),_:1}),v(g(C),null,{default:b(({active:o})=>[v(re,{href:t.route("logout"),method:"post",as:"button",class:D([o?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:b(()=>[E(" Logout ")]),_:2},1032,["href","class"])]),_:1})])]),_:1})]),_:1})]),_:1}))}},qt={key:0,class:"absolute border-gray-900 border right-8 bottom-4 bg-white shadow-lg rounded flex flex-col w-[240px] p-2"},Qt={class:"text-xs mb-2"},Xt={class:"h-3 bg-gray-100 rounded-md"},Yt={__name:"FormProgress",props:{form:Object},setup(e){return(t,n)=>e.form.progress?(y(),x("div",qt,[_("div",Qt,"Uploading "+H(e.form.files.length)+" files",1),_("div",Xt,[_("div",{class:"h-full bg-gray-900 rounded-md transition-all",style:Ce({width:e.form.progress.percentage+"%"})},null,4)])])):ve("",!0)}},Zt={class:"p-6"},Jt=_("h2",{class:"text-2xl mb-2 text-red-600 font-semibold"},"Error",-1),en={class:"mt-6 flex justify-end"},tn={__name:"ErrorDialog",emits:["close"],setup(e,{emit:t}){const n=w(!1),o=w("");function a(){n.value=!1,o.value=""}return M(()=>{T.on(Fe,({message:r})=>{n.value=!0,o.value=r})}),(r,s)=>(y(),P(he,{show:n.value,"max-width":"md"},{default:b(()=>[_("div",Zt,[Jt,_("p",null,H(o.value),1),_("div",en,[v(_e,{onClick:a},{default:b(()=>[E("OK")]),_:1})])])]),_:1},8,["show"]))}},nn={__name:"Notification",setup(e){const t=w(!1),n=w("success"),o=w("");function a(){t.value=!1,n.value="",o.value=""}return M(()=>{let r;T.on(Te,({type:s,message:i})=>{t.value=!0,n.value=s,o.value=i,r&&clearTimeout(r),r=setTimeout(()=>{a()},5e3)})}),(r,s)=>(y(),P(Z,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:b(()=>[t.value?(y(),x("div",{key:0,class:D(["fixed bottom-4 left-4 text-white py-2 px-4 rounded-lg shadow-md w-[200px]",{"bg-emerald-500":n.value==="success","bg-red-500":n.value==="error"}])},H(o.value),3)):ve("",!0)]),_:1}))}},an={class:"h-screen bg-gray-50 flex w-full gap-4"},on={class:"flex items-center justify-between w-full"},rn={class:"flex-1 flex flex-col overflow-hidden"},ln={__name:"AuthenticatedLayout",setup(e){const t=Y(),n=pe({files:[],relative_paths:[],parent_id:null}),o=w(!1);function a(){o.value=!0}function r(){o.value=!1}function s(d){o.value=!1;const u=d.dataTransfer.files;u.length&&i(u)}function i(d){console.log(d),n.parent_id=t.props.folder.id,n.files=d,n.relative_paths=[...d].map(u=>u.webkitRelativePath),n.post(route("file.store"),{onSuccess:()=>{Ne(`${d.length} files have been uploaded`)},onError:u=>{let l="";Object.keys(u).length>0?l=u[Object.keys(u)[0]]:l="Error during file upload. Please try again later.",kt(l)},onFinish:()=>{n.clearErrors(),n.reset()}})}return M(()=>{T.on(oe,i)}),(d,u)=>(y(),x(A,null,[_("div",an,[v(Ht),_("main",{onDrop:R(s,["prevent"]),onDragover:R(a,["prevent"]),onDragleave:R(r,["prevent"]),class:D(["flex flex-col flex-1 px-4 overflow-hidden",o.value?"dropzone":""])},[o.value?(y(),x(A,{key:0},[E(" Drop files here to upload ")],64)):(y(),x(A,{key:1},[_("div",on,[v(Wt),v(zt)]),_("div",rn,[Le(d.$slots,"default",{},void 0,!0)])],64))],34)]),v(tn),v(Yt,{form:g(n)},null,8,["form"]),v(nn)],64))}},Ln=Ke(ln,[["__scopeId","data-v-ccc8bde5"]]);function sn(e){return/^image\/\w+$/.test(e.mime)}function un(e){return["application/pdf","application/x-pdf","application/acrobat","application/vnd.pdf","text/pdf","text/x-pdf"].includes(e.mime)}function cn(e){return["audio/mpeg","audio/ogg","audio/wav","audio/x-m4a","audio/webm"].includes(e.mime)}function dn(e){return["video/mp4","video/mpeg","video/ogg","video/quicktime","video/webm"].includes(e.mime)}function fn(e){return["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12"].includes(e.mime)}function pn(e){return["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12"].includes(e.mime)}function mn(e){return["application/zip"].includes(e.mime)}function vn(e){return["text/plain","text/html","text/css","text/javascript","text/csv"].includes(e.mime)}const hn={class:"w-6 h-6 inline-flex items-center justify-center mr-2"},gn={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},_n=_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"},null,-1),yn=[_n],bn=["src"],wn=["src"],xn=["src"],Sn=["src"],$n=["src"],In=["src"],En=["src"],kn=["src"],On=["src"],Un={__name:"FileIcon",props:{file:Object},setup(e){return(t,n)=>(y(),x("span",hn,[e.file.is_folder?(y(),x("svg",gn,yn)):(y(),x(A,{key:1},[g(sn)(e.file)?(y(),x("img",{key:0,class:"max-w-full",src:"/images/icon/image.png"},null,8,bn)):g(un)(e.file)?(y(),x("img",{key:1,class:"max-w-full",src:"/images/icon/pdf.png"},null,8,wn)):g(cn)(e.file)?(y(),x("img",{key:2,class:"max-w-full",src:"/images/icon/audio.png"},null,8,xn)):g(dn)(e.file)?(y(),x("img",{key:3,class:"max-w-full",src:"/images/icon/video.png"},null,8,Sn)):g(fn)(e.file)?(y(),x("img",{key:4,class:"max-w-full",src:"/images/icon/word.png"},null,8,$n)):g(pn)(e.file)?(y(),x("img",{key:5,class:"max-w-full",src:"/images/icon/excel.png"},null,8,In)):g(mn)(e.file)?(y(),x("img",{key:6,class:"max-w-full",src:"/images/icon/zip.png"},null,8,En)):g(vn)(e.file)?(y(),x("img",{key:7,class:"max-w-full",src:"/images/icon/txt-file.png"},null,8,kn)):(y(),x("img",{key:8,class:"max-w-full",src:"/images/icon/attach-file.png"},null,8,On))],64))]))}};function Vn(e){return fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>t.json())}function Bn(e,t){const n=Y();return new Promise((o,a)=>{fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-TOKEN":n.props.csrf_token},body:JSON.stringify(t)}).then(r=>{r.ok?o(r.json()):r.json().then(s=>{a({response:r,error:s})})})})}export{Ln as A,Et as O,Un as _,Ne as a,Bn as b,T as e,Vn as h,kt as s};