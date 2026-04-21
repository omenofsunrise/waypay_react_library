"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const h=require("react"),n=require("styled-components"),X=require("framer-motion");var te={exports:{}},K={};var he;function Ue(){if(he)return K;he=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(i,s,c){var d=null;if(c!==void 0&&(d=""+c),s.key!==void 0&&(d=""+s.key),"key"in s){c={};for(var g in s)g!=="key"&&(c[g]=s[g])}else c=s;return s=c.ref,{$$typeof:e,type:i,key:d,ref:s!==void 0?s:null,props:c}}return K.Fragment=o,K.jsx=r,K.jsxs=r,K}var Q={};var fe;function qe(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&(function(){function e(u){if(u==null)return null;if(typeof u=="function")return u.$$typeof===O?null:u.displayName||u.name||null;if(typeof u=="string")return u;switch(u){case M:return"Fragment";case I:return"Profiler";case C:return"StrictMode";case $:return"Suspense";case N:return"SuspenseList";case W:return"Activity"}if(typeof u=="object")switch(typeof u.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),u.$$typeof){case l:return"Portal";case _:return u.displayName||"Context";case T:return(u._context.displayName||"Context")+".Consumer";case R:var D=u.render;return u=u.displayName,u||(u=D.displayName||D.name||"",u=u!==""?"ForwardRef("+u+")":"ForwardRef"),u;case z:return D=u.displayName||null,D!==null?D:e(u.type)||"Memo";case F:D=u._payload,u=u._init;try{return e(u(D))}catch{}}return null}function o(u){return""+u}function r(u){try{o(u);var D=!1}catch{D=!0}if(D){D=console;var A=D.error,j=typeof Symbol=="function"&&Symbol.toStringTag&&u[Symbol.toStringTag]||u.constructor.name||"Object";return A.call(D,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",j),o(u)}}function i(u){if(u===M)return"<>";if(typeof u=="object"&&u!==null&&u.$$typeof===F)return"<...>";try{var D=e(u);return D?"<"+D+">":"<...>"}catch{return"<...>"}}function s(){var u=k.A;return u===null?null:u.getOwner()}function c(){return Error("react-stack-top-frame")}function d(u){if(a.call(u,"key")){var D=Object.getOwnPropertyDescriptor(u,"key").get;if(D&&D.isReactWarning)return!1}return u.key!==void 0}function g(u,D){function A(){Y||(Y=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",D))}A.isReactWarning=!0,Object.defineProperty(u,"key",{get:A,configurable:!0})}function y(){var u=e(this.type);return V[u]||(V[u]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),u=this.props.ref,u!==void 0?u:null}function m(u,D,A,j,B,P){var H=A.ref;return u={$$typeof:p,type:u,key:D,props:A,_owner:j},(H!==void 0?H:null)!==null?Object.defineProperty(u,"ref",{enumerable:!1,get:y}):Object.defineProperty(u,"ref",{enumerable:!1,value:null}),u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(u,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(u,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:B}),Object.defineProperty(u,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:P}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u}function w(u,D,A,j,B,P){var H=D.children;if(H!==void 0)if(j)if(S(H)){for(j=0;j<H.length;j++)f(H[j]);Object.freeze&&Object.freeze(H)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(H);if(a.call(D,"key")){H=e(u);var q=Object.keys(D).filter(function(J){return J!=="key"});j=0<q.length?"{key: someKey, "+q.join(": ..., ")+": ...}":"{key: someKey}",L[H+j]||(q=0<q.length?"{"+q.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,j,H,q,H),L[H+j]=!0)}if(H=null,A!==void 0&&(r(A),H=""+A),d(D)&&(r(D.key),H=""+D.key),"key"in D){A={};for(var G in D)G!=="key"&&(A[G]=D[G])}else A=D;return H&&g(A,typeof u=="function"?u.displayName||u.name||"Unknown":u),m(u,H,A,s(),B,P)}function f(u){v(u)?u._store&&(u._store.validated=1):typeof u=="object"&&u!==null&&u.$$typeof===F&&(u._payload.status==="fulfilled"?v(u._payload.value)&&u._payload.value._store&&(u._payload.value._store.validated=1):u._store&&(u._store.validated=1))}function v(u){return typeof u=="object"&&u!==null&&u.$$typeof===p}var x=h,p=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),_=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),O=Symbol.for("react.client.reference"),k=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,a=Object.prototype.hasOwnProperty,S=Array.isArray,b=console.createTask?console.createTask:function(){return null};x={react_stack_bottom_frame:function(u){return u()}};var Y,V={},U=x.react_stack_bottom_frame.bind(x,c)(),E=b(i(c)),L={};Q.Fragment=M,Q.jsx=function(u,D,A){var j=1e4>k.recentlyCreatedOwnerStacks++;return w(u,D,A,!1,j?Error("react-stack-top-frame"):U,j?b(i(u)):E)},Q.jsxs=function(u,D,A){var j=1e4>k.recentlyCreatedOwnerStacks++;return w(u,D,A,!0,j?Error("react-stack-top-frame"):U,j?b(i(u)):E)}})()),Q}var ge;function Ze(){return ge||(ge=1,process.env.NODE_ENV==="production"?te.exports=Ue():te.exports=qe()),te.exports}var t=Ze();const ce=({x:e,y:o,items:r,onClose:i,...s})=>{const c=h.useRef(null),[d,g]=h.useState(null);h.useEffect(()=>{const x=p=>{c.current&&!c.current.contains(p.target)&&i()};return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[i]);const m=(()=>{if(!c.current)return{x:e,y:o};const x=c.current.offsetWidth,p=c.current.offsetHeight,l=window.innerWidth,M=window.innerHeight;let C=e,I=o;return C+x>l&&(C=e-x),I+p>M&&(I=o-p),{x:C,y:I}})(),w=(x,p)=>{x.submenu?g(d===p?null:p):x.action&&(x.action(),i())},f=x=>{r[x].submenu&&g(x)},v=x=>{const p=x.relatedTarget;c.current?.contains(p)||g(null)};return t.jsx(Xe,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:m.y,left:m.x},onClick:x=>x.stopPropagation(),onMouseLeave:v,...s,children:r.map((x,p)=>t.jsxs(Ge,{$hasSubmenu:!!x.submenu,$disabled:x.disabled,children:[t.jsx(Je,{onClick:l=>{l.stopPropagation(),x.disabled||w(x,p)},onMouseEnter:()=>!x.disabled&&f(p),whileHover:x.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:x.color,$disabled:x.disabled,children:t.jsxs(Ke,{children:[x.label,x.submenu&&t.jsx(Qe,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),x.submenu&&d===p&&t.jsx(et,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(ce,{x:0,y:-p*40,items:x.submenu,onClose:()=>g(null)})})]},p))})},Xe=n(X.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Ge=n.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,Je=n(X.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Ke=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Qe=n.span`
  color: #666;
  margin-left: 8px;
`,et=n(X.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,tt=({columns:e,data:o,onRowDoubleClick:r,contextMenuActions:i=[],onSort:s,sortConfig:c,onRowClick:d,selectedRow:g,fixedHeight:y,hasTotalsRow:m,debtChecker:w,rowStyles:f={},isLoading:v})=>{const[x,p]=h.useState(null),[l,M]=h.useState(null),C=h.useRef(null),I=h.useRef(null),T=500,_=g!==void 0?g:x,R=E=>{!e[E].isSortable||!s||s(E)},N=w||(E=>{const L=E[8];return typeof L=="string"?parseFloat(L.replace(/[^\d.]/g,""))>0:!1}),z=E=>{g===void 0&&p(E===_?null:E),d&&d(o[E],E)},F=(E,L)=>{r&&r(E,L)},W=(E,L)=>{if(i.length===0)return;E.preventDefault();const u="touches"in E?E.touches[0].clientX:E.clientX,D="touches"in E?E.touches[0].clientY:E.clientY;M({x:u,y:D,rowIndex:L})},O=(E,L)=>{E.preventDefault(),W(E,L)},k=(E,L)=>{i.length!==0&&(I.current&&clearTimeout(I.current),I.current=window.setTimeout(()=>{W(E,L)},T))},a=()=>{I.current&&(clearTimeout(I.current),I.current=null)},S=()=>{I.current&&window.clearTimeout(I.current)},b=()=>{M(null)};h.useEffect(()=>{const E=()=>{l&&b()};return document.addEventListener("click",E),()=>{document.removeEventListener("click",E),I.current&&clearTimeout(I.current)}},[l]);const Y=(E,L,u)=>{if(L)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const D=f[E]||{};return E===_?{backgroundColor:D.backgroundColor||"#007D88",color:D.color||"#FFFFFF",fontWeight:D.fontWeight||"normal"}:u?{backgroundColor:D.backgroundColor||"#E8D8D8",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"}:o[E][o[E].length-1]===!1?{backgroundColor:D.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:D.fontWeight||"normal"}:{backgroundColor:D.backgroundColor||"#FFFFFF",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"}},V=(E,L,u)=>{if(L)return"#FFFFFF";const D=Y(E,L,u);return D.hoverBackgroundColor?D.hoverBackgroundColor:E===_?"#007D88":u?"#E8D8D8CC":o[E][o[E].length-1]===!1?"#51D5B4CC":"#F3F4F6"},U=()=>{if(!l||i.length===0)return null;const E=(typeof i=="function"?i(o[l.rowIndex]):i).filter(L=>typeof L=="object"&&(typeof L.shouldShow!="function"||L.shouldShow(o[l.rowIndex])));return E.length===0?null:t.jsx(st,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:L=>L.stopPropagation(),children:t.jsx(ce,{items:E.map(L=>{const u={label:L.label,color:L.color,disabled:L.disabled};return L.getSubmenu?u.submenu=L.getSubmenu(o[l.rowIndex]):L.action&&(u.action=()=>{L.action(o[l.rowIndex],l.rowIndex),b()}),u}),onClose:b,x:0,y:0})})};return t.jsx(rt,{ref:C,children:v?t.jsx(nt,{children:t.jsx(ot,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(it,{children:[t.jsx(at,{children:t.jsx(be,{children:e.map((E,L)=>!E.isHidden&&t.jsx(ct,{$isSortable:E.isSortable,$isActive:c?.key===L,onClick:()=>R(L),$align:E.align||"center",$isFirst:L===0,$isLast:L===e.length-1,children:t.jsxs(dt,{$align:E.align||"center",children:[E.name,E.isSortable&&t.jsx(ut,{$direction:c?.key===L?c.direction:"asc",animate:{rotate:c?.key===L&&c.direction==="desc"?180:0,color:c?.key===L?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},L))})}),t.jsx(lt,{$fixedHeight:y,children:t.jsx(X.AnimatePresence,{children:o.map((E,L)=>{const u=!!(m&&L===o.length-1),D=!!(!u&&N(E)),A=Y(L,u,D),j=V(L,u,D);return t.jsx(be,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:A.backgroundColor||"#FFFFFF",color:A.color||"inherit",fontWeight:A.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:L===o.length-1,$isSelected:L===_,$isTotalsRow:u,onClick:()=>!u&&z(L),onDoubleClick:()=>!u&&F(E,L),onContextMenu:B=>!u&&O(B,L),onTouchStart:B=>!u&&k(B,L),onTouchEnd:a,onTouchMove:S,whileHover:u?{}:{backgroundColor:j,transition:{duration:.15}},style:{backgroundColor:A.backgroundColor||"#FFFFFF",color:A.color||"inherit",fontWeight:A.fontWeight||"normal"},children:E.map((B,P)=>!e[P]?.isHidden&&t.jsx(pt,{$align:e[P]?.align||"center",$isFirst:P===0,$isLast:P===E.length-1,$isTotalsCell:u,$isBeforeTotals:u&&P<E.findIndex(H=>H==="Итого:"),children:B},P))},`row-${L}`)})})})]}),t.jsx(X.AnimatePresence,{children:U()})]})})},nt=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`,ot=n.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007d88;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,rt=n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,it=n.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-sizing: border-box;

  th,
  td {
    box-sizing: border-box;
    position: relative;
    border-right: 0.5px solid #d1d5db;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`,st=n(X.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,at=n.thead`
  text-align: center;
  position: relative;
`,lt=n.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,be=n(X.motion.tr)`
  position: relative;
  cursor: ${({$isTotalsRow:e})=>e?"default":"pointer"};
  font-weight: ${({$isTotalsRow:e})=>e?"bold":"normal"};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 1px;
    background: #d1d5db;
    display: ${({$isLast:e,$isTotalsRow:o})=>e||o?"none":"block"};
  }
`,ct=n.th`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  font-weight: 500;
  position: relative;
  cursor: ${({$isSortable:e})=>e?"pointer":"default"};
  transition: all 0.2s ease;
  background-color: #ffffff;
  color: ${({$isActive:e})=>e?"#007d88":"inherit"};

  &:hover {
    background-color: ${({$isSortable:e})=>e?"#f3f4f6":"inherit"};
  }
`,dt=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,ut=n(X.motion.span)`
  display: inline-flex;
  align-items: center;
`,pt=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,xt=({onClick:e,tooltip:o,size:r=32,margin:i})=>t.jsx(ht,{onClick:e,size:r,margin:i,title:o,children:t.jsx(ft,{size:r})}),ht=n.button`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  ${e=>e.margin&&`margin: ${e.margin};`}

  &:hover {
    background-color: rgba(249, 250, 250, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,ft=n.div`
  position: relative;
  width: ${e=>e.size*.5}px;
  height: ${e=>e.size*.5}px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #50555c;
    border-radius: 2px;
  }

  &::before {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`,oe="/api",gt="https://web.waypay.one:5001",bt="https://file.waypay.one/";async function Z(e,o={}){const{method:r="GET",body:i,headers:s={},token:c,withCredentials:d=!0,isFormData:g=!1}=o,y=async w=>{const f={...s};g||(f["Content-Type"]="application/json"),w&&(f.Authorization=`Bearer ${w}`);const v=e.startsWith("http")?e:`${oe}${e}`;let x;return i&&(g?x=i:x=JSON.stringify(i)),await fetch(v,{method:r,headers:f,body:x,credentials:d?"include":"same-origin"})},m=async(w,f=!0)=>{const v=await y(w);if(v.ok){if(v.status===204)return null;const p=await v.text();if(!p)return null;try{return JSON.parse(p)}catch{return p}}if(v.status===401&&f){const p=await de();if(p)return m(p,!1)}let x=`Request failed with status ${v.status}`;try{const p=await v.text();if(p)try{const l=JSON.parse(p);l&&typeof l.error=="string"?x=l.error:typeof l=="string"?x=l:typeof l?.message=="string"&&(x=l.message)}catch{x=p}}catch{}throw new Error(x)};return m(c)}async function mt(e,o={}){const{method:r="GET",headers:i={},token:s,withCredentials:c=!0}=o,d=async y=>{const m={...i};y&&(m.Authorization=`Bearer ${y}`);const w=e.startsWith("http")?e:`${oe}${e}`;return await fetch(w,{method:r,headers:m,credentials:c?"include":"same-origin"})},g=async(y,m=!0)=>{const w=await d(y);if(w.ok)return await w.blob();if(w.status===401&&m){const v=await de();if(v)return g(v,!1)}let f=`Request failed with status ${w.status}`;try{const v=await w.text();if(v)try{const x=JSON.parse(v);x&&typeof x.error=="string"?f=x.error:typeof x=="string"?f=x:typeof x?.message=="string"&&(f=x.message)}catch{f=v}}catch{}throw new Error(f)};return g(s)}async function de(){const e=await fetch(`${oe}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const wt={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await Z("/auth/session/info",{method:"GET"})}catch{return null}},async logout(e){try{await Z("/auth/session/revoke",{method:"POST",headers:{"Content-Type":"application/json"},body:e?{token_id:e}:{}})}catch(o){throw console.error("Logout error:",o),o}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},vt=n.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: rgba(0, 125, 136, 1);
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: white;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: ${({disabled:e})=>e?.7:1};

  &:hover {
    background-color: ${({disabled:e})=>e?"rgba(0, 125, 136, 1)":"rgba(0, 150, 163, 1)"};
  }
`,yt=({children:e,onClick:o,disabled:r,...i})=>t.jsxs(vt,{onClick:o,disabled:r,...i,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"currentColor"})}),e]}),re=({children:e="Подтвердить",icon:o,disabled:r=!1,bg:i,hoverBg:s,disabledBg:c,textColor:d,fullWidth:g=!1,minWidth:y,width:m,isPrimary:w=!0,...f})=>{const x=i?{bg:i,hoverBg:s||i,disabledBg:c||i,textColor:d||(w?"white":"black")}:w?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(kt,{disabled:r,$bg:x.bg,$hoverBg:x.hoverBg,$disabledBg:x.disabledBg,$textColor:x.textColor,$fullWidth:g,$minWidth:y,$width:m,...f,children:[o&&t.jsx(jt,{children:o}),t.jsx("span",{children:e})]})},kt=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({disabled:e,$bg:o,$disabledBg:r})=>e?r:o};
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$textColor:e})=>e};
  font-size: 18px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({disabled:e})=>e?.7:1};
  width: ${({$fullWidth:e,$width:o})=>e?"100%":o?typeof o=="number"?`${o}px`:o:"auto"};
  min-width: ${({$minWidth:e})=>e||"auto"};

  &:hover {
    background-color: ${({disabled:e,$hoverBg:o,$disabledBg:r})=>e?r:o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({$bg:e})=>e==="rgba(209, 213, 219, 1)"?"rgba(209, 233, 239, 1)":"rgba(156, 163, 175, 0.5)"};
  }
`,jt=n.span`
  display: inline-flex;
  align-items: center;
`,Ct=({onClick:e,tooltip:o,size:r=32})=>t.jsx($t,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),$t=n.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,St=({onClick:e,tooltip:o,size:r=32})=>t.jsx(Mt,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),Mt=n.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,Et=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),Dt=({children:e="Экспорт",icon:o=t.jsx(Et,{}),onExport:r,isExporting:i=!1,exportProgress:s=0,...c})=>{const d=async g=>{if(r)try{await r()}catch(y){console.error("Export error:",y)}c.onClick&&c.onClick(g)};return t.jsx(Lt,{...c,onClick:d,disabled:i||c.disabled,children:i?t.jsxs(Tt,{children:[t.jsxs("span",{children:["Экспорт... ",s,"%"]}),t.jsx(It,{progress:s})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},Lt=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: inherit;
  font-size: 18px;
  height: 40px;
  margin: auto 0 10px 0;
  transition: background-color 0.2s ease;
  position: relative;
  overflow: hidden;
  color: rgba(80, 85, 92, 1);

  &:hover {
    background-color: rgba(209, 213, 219, 1);
    color: black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`,Tt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,It=n.div`
  height: 2px;
  width: 100%;
  background-color: #e0e0e0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({progress:e})=>e}%;
    background-color: #000;
    transition: width 0.3s ease;
  }
`,Pt=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:s=!1,errorMessage:c,options:d,name:g,disabled:y=!1,required:m=!1,...w})=>{const[f,v]=h.useState(!1),[x,p]=h.useState(!1),l=h.useRef(null),M=!!(o&&!r&&!f),C=$=>{i&&!y&&i({target:{value:$,name:g}}),p(!1),v(!1)},I=$=>{l.current&&!l.current.contains($.target)&&(p(!1),v(!1))},T=()=>{y||(p(!x),v(!x))};h.useEffect(()=>(document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[]);const _=d.find($=>$.value===r),R=_?_.label:"";return t.jsxs(Rt,{ref:l,...w,children:[t.jsxs(zt,{children:[t.jsxs(Bt,{hasError:s,isOpen:x,disabled:y,onClick:T,onFocus:()=>!y&&v(!0),onBlur:()=>v(!1),tabIndex:y?-1:0,children:[t.jsx(At,{children:R||e&&t.jsx(Ft,{children:e})}),t.jsx(_t,{isOpen:x,disabled:y,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:y?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x&&t.jsx(Ot,{children:d.map($=>t.jsxs(Wt,{$isSelected:$.value===r,onClick:()=>C($.value),children:[t.jsx(Nt,{$isSelected:$.value===r,children:$.value===r&&t.jsx(Ht,{})}),t.jsx(Yt,{children:$.label})]},$.value))})]}),o&&t.jsx(Vt,{isVisible:M,children:o}),s&&c&&t.jsx(Ut,{children:c}),t.jsx(qt,{name:g,value:r||"",onChange:()=>{},tabIndex:-1,required:m,children:d.map($=>t.jsx("option",{value:$.value,children:$.label},$.value))})]})},Rt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,zt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Bt=n.div`
  border: 1px solid
    ${({hasError:e,isOpen:o,disabled:r})=>r?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":o?"rgba(0, 125, 136, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  box-sizing: border-box;
  background-color: ${({disabled:e})=>e?"rgba(249, 250, 251, 1)":"white"};
  color: ${({disabled:e})=>e?"rgba(156, 163, 175, 1)":"black"};
  padding: 10px 15px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-height: 37.5px;

  &:hover {
    border-color: ${({hasError:e,disabled:o,isOpen:r})=>o?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }
`,At=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ft=n.span`
  color: rgba(80, 85, 92, 1);
`,_t=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,Ot=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 1001;
  max-height: 300px;
  overflow-y: auto;
`,Wt=n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  text-align: left;
  background: ${({$isSelected:e})=>e?"rgba(232, 216, 216, 1)":"transparent"};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`,Nt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ht=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Yt=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Vt=n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,Ut=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,qt=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Zt=({checked:e=!1,onChange:o,className:r,label:i,disabled:s=!1})=>{const[c,d]=h.useState(!1),g=()=>{s||!o||o(!e)},y=m=>{s||(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),g())};return t.jsxs(Xt,{className:r,onClick:g,onKeyPress:y,tabIndex:s?-1:0,disabled:s,children:[t.jsx(Gt,{checked:e,isFocused:c,disabled:s,onMouseEnter:()=>!s&&d(!0),onMouseLeave:()=>!s&&d(!1),onFocus:()=>!s&&d(!0),onBlur:()=>!s&&d(!1),children:e&&t.jsx(Kt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:s,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:s?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Jt,{disabled:s,children:i})]})},Xt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Gt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  border: 1px solid
    ${e=>e.disabled?e.checked?"rgba(173, 179, 188, 1)":"rgba(230, 230, 230, 1)":e.checked||e.isFocused?"rgba(0, 125, 136, 1)":"rgba(173, 179, 188, 1)"};

  background-color: ${e=>e.disabled?e.checked?"rgba(230, 230, 230, 1)":"transparent":e.checked?"rgba(0, 125, 136, 1)":"transparent"};

  box-shadow: ${e=>e.disabled?"none":e.checked&&e.isFocused?"0 0 0 4px rgba(121, 159, 162, 0.33)":"none"};

  opacity: ${e=>e.disabled?.6:1};
`,Jt=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Kt=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Qt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",me=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ae=({prefix:e="Дата:",value:o="",placeholder:r="Выберите дату",onChange:i,onReset:s})=>{const[c,d]=h.useState(!1),[g,y]=h.useState(new Date),[m,w]=h.useState(o?new Date(o):null),[f,v]=h.useState(!1),[x,p]=h.useState(!1),l=h.useRef(null),M=h.useRef(null),C=h.useRef(null);h.useEffect(()=>{const a=S=>{l.current&&!l.current.contains(S.target)&&d(!1),M.current&&!M.current.contains(S.target)&&v(!1),C.current&&!C.current.contains(S.target)&&p(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),h.useEffect(()=>{w(o?new Date(o):null)},[o]);const I=a=>{const S=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()));w(a);const b=S.toISOString().split("T")[0];i?.(b),d(!1)},T=()=>{const a=new Date;y(a);const b=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())).toISOString().split("T")[0];i?.(b),d(!1)},_=()=>{w(null),i?.(""),s?.(),d(!1)},R=a=>{const S=new Date(g);S.setMonth(a),y(S),v(!1)},$=a=>{const S=new Date(g);S.setFullYear(a),y(S),p(!1)},N=()=>{const a=g.getFullYear(),S=g.getMonth(),b=new Date(a,S,1),V=new Date(a,S+1,0).getDate(),U=b.getDay()===0?6:b.getDay()-1,E=[],L=35,u=new Date(a,S,0).getDate();for(let A=0;A<U;A++){const j=u-U+A+1,B=new Date(a,S-1,j),P=!!(m&&B.getDate()===m.getDate()&&B.getMonth()===m.getMonth()&&B.getFullYear()===m.getFullYear());E.push(t.jsx(ie,{selected:P,onClick:()=>I(B),otherMonth:!0,children:j},`prev-${j}`))}for(let A=1;A<=V;A++){const j=new Date(a,S,A),B=!!(m&&j.getDate()===m.getDate()&&j.getMonth()===m.getMonth()&&j.getFullYear()===m.getFullYear());E.push(t.jsx(ie,{selected:B,onClick:()=>I(j),children:A},`current-${A}`))}const D=L-E.length;for(let A=1;A<=D;A++){const j=new Date(a,S+1,A),B=!!(m&&j.getDate()===m.getDate()&&j.getMonth()===m.getMonth()&&j.getFullYear()===m.getFullYear());E.push(t.jsx(ie,{selected:B,onClick:()=>I(j),otherMonth:!0,children:A},`next-${A}`))}return E},z=()=>m?m.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):r,F=()=>{const a=new Date().getFullYear(),S=[];for(let b=a-10;b<=a+10;b++)S.push(b);return S},W=a=>{a.preventDefault(),a.stopPropagation(),v(!f),p(!1)},O=a=>{a.preventDefault(),a.stopPropagation(),p(!x),v(!1)},k=a=>{const S=a==="next"?1:-1,b=new Date(g);b.setMonth(b.getMonth()+S),y(b)};return t.jsxs(tn,{ref:l,children:[t.jsxs(nn,{onClick:()=>d(!c),children:[e&&t.jsx(on,{children:e}),t.jsx(rn,{isEmpty:!m,children:z()}),t.jsx(sn,{src:Qt,alt:"Календарь"})]}),c&&t.jsxs(an,{className:"calendar-container",children:[t.jsxs(ln,{children:[t.jsx(ke,{onClick:a=>{a.preventDefault(),a.stopPropagation(),k("prev")},onMouseDown:a=>a.preventDefault(),children:t.jsx(je,{direction:"right"})}),t.jsxs(cn,{children:[t.jsxs(pn,{ref:M,children:[t.jsxs(dn,{onClick:a=>W(a),onMouseDown:a=>a.preventDefault(),children:[me[g.getMonth()],t.jsx(we,{$open:f})]}),f&&t.jsx(ve,{$width:120,onClick:a=>a.stopPropagation(),children:me.map((a,S)=>t.jsx(ye,{$selected:S===g.getMonth(),onClick:b=>{b.stopPropagation(),R(S)},children:a},a))})]}),t.jsxs(xn,{ref:C,children:[t.jsxs(un,{onClick:a=>O(a),onMouseDown:a=>a.preventDefault(),children:[g.getFullYear(),t.jsx(we,{$open:x})]}),x&&t.jsx(ve,{$width:80,onClick:a=>a.stopPropagation(),children:F().map(a=>t.jsx(ye,{$selected:a===g.getFullYear(),onClick:S=>{S.stopPropagation(),$(a)},children:a},a))})]})]}),t.jsx(ke,{onClick:a=>{a.preventDefault(),a.stopPropagation(),k("next")},onMouseDown:a=>a.preventDefault(),children:t.jsx(je,{direction:"left"})})]}),t.jsx(hn,{children:en.map(a=>t.jsx(fn,{children:a},a))}),t.jsx(gn,{children:N()}),t.jsxs(bn,{children:[t.jsx(Ce,{onClick:_,children:"Удалить"}),t.jsx(Ce,{onClick:T,children:"Сегодня"})]})]})]})},tn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,nn=n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 1);
  cursor: pointer;
  background-color: white;
  width: 100%;
  transition: border-color 0.2s ease;
  height: auto;
  max-height: 38px;
  box-sizing: border-box;
  color: black;

  &:hover {
    border-color: rgba(0, 125, 136, 1);
  }

  &:focus-within {
    border-color: rgba(0, 125, 136, 1);
  }
`,on=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,rn=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,sn=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,an=n.div`
  position: fixed;
  top: unset;
  bottom: unset;
  left: unset;
  transform: translate(0, 0);
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 9999;
  width: 280px;
  color: black;
`,ln=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,cn=n.div`
  display: flex;
  gap: 8px;
  color: black;
`,Pe=n.button`
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 5px;
  padding: 6px 8px;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  transition: all 0.2s ease;
  color: black;

  &:hover {
    background-color: rgba(232, 216, 216, 0.2);
  }
`,dn=n(Pe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,un=n(Pe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,pn=n.div`
  position: relative;
`,xn=n.div`
  position: relative;
`,we=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,ve=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({$width:e})=>e}px;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  margin-top: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(209, 213, 219, 1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(80, 85, 92, 1);
    border-radius: 3px;
  }
`,ye=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,ke=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
`,je=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,hn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,fn=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,gn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,ie=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;

  color: ${({otherMonth:e})=>e?"rgba(173, 179, 188, 1)":"#000"};
  background-color: ${({selected:e})=>e?"rgba(237, 224, 224, 1)":"transparent"};

  &:hover {
    background-color: ${({selected:e})=>e?"rgba(237, 224, 224, 1)":"rgba(0, 125, 136, 0.1)"};
  }
`,bn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,Ce=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,mn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,wn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,vn=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,ue=({placeholder:e="",customPlaceholder:o,value:r,inputType:i="text",onChange:s,hasError:c=!1,errorMessage:d,...g})=>{const[y,m]=h.useState(!1),w=!!(o&&!r&&!y),f=p=>{if(!s)return;let l=p.target.value;switch(i){case"number":/^\d*$/.test(l)&&s?.(p);break;case"rubles":{const C=p.target.selectionStart,I=p.target.value;let T=I.replace(/[^\d]/g,"");if(T===""){p.target.value="",s(p);break}const _=parseInt(T,10);if(!isNaN(_)){let R=_.toLocaleString("ru-RU");R+=" ₽";const $=v(I,C||0),N=x(R,$);p.target.value=R,s(p),setTimeout(()=>{p.target.setSelectionRange(N,N)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const C=l.split(".");C.length>2&&(l=C[0]+"."+C.slice(1).join("")),C.length===2&&C[1].length>2&&(l=C[0]+"."+C[1].slice(0,2));const I=parseFloat(l);if(isNaN(I)||(I>100?l="100":I<0&&(l="0")),l&&l!==""){l+=" %";const T=p.target.selectionStart||0,_=l.replace(" %","");p.target.value=l,s(p),setTimeout(()=>{T<_.length&&p.target.setSelectionRange(T,T)},0)}else p.target.value=l,s(p);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let M=l.split(" ").filter(C=>C.length>0);M=M.slice(0,3),l=M.map(C=>{if(C.startsWith("-")&&(C=C.substring(1)),(C.match(/-/g)||[]).length>1){const T=C.split("-");C=T[0]+"-"+T.slice(1).join("")}return C.includes("-")?C.split("-").map((T,_)=>T.length===0?"":(_>0,T[0].toUpperCase()+T.slice(1).toLowerCase())).join("-"):C.length>0?C[0].toUpperCase()+C.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&p.target.value.length>0&&p.target.value[p.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),p.target.value=l,s(p);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),p.target.value=l,s(p);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),r?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),p.target.value=l,s(p);break}default:s(p);break}},v=(p,l)=>{let M=0;for(let C=0;C<Math.min(l,p.length);C++)/\d/.test(p[C])&&M++;return M},x=(p,l)=>{let M=0;for(let C=0;C<p.length;C++){if(M>=l)return C;/\d/.test(p[C])&&M++}return p.length};return t.jsxs(yn,{children:[t.jsx(kn,{...g,value:r,placeholder:w?"":e,onFocus:()=>m(!0),onBlur:p=>{m(!1),g.onBlur?.(p)},onChange:f,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),o&&t.jsx(jn,{isVisible:w,children:o}),c&&d&&t.jsx(Cn,{children:d})]})},yn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,kn=n.input`
  padding: 10px 12px;
  border: 1px solid ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

  &:hover {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`,jn=n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,Cn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,$n=({total:e,current:o=1,onChange:r,itemsPerPage:i=10})=>{const s=Math.ceil(e/i),[c,d]=h.useState(o),g=m=>{m<1||m>s||m===c||(d(m),r?.(m))},y=()=>{const m=[];let f=1,v=s;if(s>5){const x=Math.floor(2.5);f=Math.max(c-x,1),v=Math.min(c+x,s),c<=x+1?v=5:c>=s-x&&(f=s-5+1)}for(let x=f;x<=v;x++)m.push(t.jsx(ee,{active:x===c,onClick:()=>g(x),children:x},x));return f>1&&(f>2&&m.unshift(t.jsx(ee,{children:"..."},"start-ellipsis")),m.unshift(t.jsx(ee,{active:c===1,onClick:()=>g(1),children:"1"},1))),v<s&&(v<s-1&&m.push(t.jsx(ee,{children:"..."},"end-ellipsis")),m.push(t.jsx(ee,{active:s===c,onClick:()=>g(s),children:s},s))),m};return t.jsxs(Sn,{children:[t.jsx($e,{disabled:c===1,onClick:()=>g(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),y(),t.jsx($e,{disabled:c===s,onClick:()=>g(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===s?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},Sn=n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,ee=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${({active:e})=>e?"white":"black"};
  background-color: ${({active:e})=>e?"rgba(0, 125, 136, 1)":"transparent"};

  &:hover {
    color: ${({active:e})=>e?"white":"rgba(0, 125, 136, 1)"};
  }
`,$e=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background-color: rgba(0, 125, 136, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,Mn=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:s=!1,errorMessage:c,rows:d=3,...g})=>{const[y,m]=h.useState(!1),w=!!(o&&!r&&!y);return t.jsxs(En,{children:[t.jsx(Dn,{...g,value:r,placeholder:w?"":e,onFocus:()=>m(!0),onBlur:f=>{m(!1),g.onBlur?.(f)},onChange:i,hasError:s,rows:d}),o&&t.jsx(Ln,{isVisible:w,children:o}),s&&c&&t.jsx(Tn,{children:c})]})},En=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Dn=n.textarea`
  padding: 10px 12px;
  border: 1px solid ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  min-height: 38px;
  box-sizing: border-box;
  max-width: 500px;
  background-color: white;
  color: black;
  padding: 12px 15px;
  resize: vertical;
  font-family: inherit;

  &:hover {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`,Ln=n.label`
  position: absolute;
  left: 12px;
  top: 12px;
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,Tn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Re=({title:e,onClose:o,onCancel:r,onSave:i,children:s,isSaveDisabled:c=!1,isSubmitting:d=!1,mode:g="create",hideSaveButton:y=!1,hideCanselButton:m=!1,width:w="560px",saveButtonText:f="Сохранить",customLayout:v})=>{const x=g==="view",p=h.useRef(null);h.useEffect(()=>{const C=T=>{T.key==="Escape"&&o()};document.addEventListener("keydown",C);const I=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>p.current?.focus(),0),()=>{document.removeEventListener("keydown",C),document.body.style.overflow=I}},[o]);const l=C=>{C.target===C.currentTarget&&o()},M=C=>{C.preventDefault(),r()};return t.jsx(In,{onMouseDown:l,role:"presentation",children:t.jsxs(Pn,{ref:p,$width:w,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(ze,{children:[t.jsx(Be,{children:e}),t.jsx(Rn,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),v?t.jsx(zn,{children:v}):null,t.jsxs(Bn,{onSubmit:i,children:[t.jsx(An,{children:s}),t.jsxs(Fn,{children:[t.jsx(_n,{children:m?null:t.jsx(Wn,{isPrimary:!1,onClick:M,children:"Отменить"})}),t.jsx(On,{children:!x&&!y?t.jsx(Nn,{type:"submit",disabled:c||d,children:d?"Сохранение...":f}):null})]})]})]})})},In=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Pn=n.div`
  width: min(100%, ${({$width:e})=>e});
  max-height: min(85vh, 820px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 8px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  padding: 40px;

  display: flex;
  flex-direction: column;
  outline: none;

  @media (max-width: 768px) {
    padding: 6px;
  }
`,ze=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Be=n.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`,Rn=n.button`
  width: 40px;
  height: 40px;
  margin-top: 2px;

  display: grid;
  place-items: center;

  border: none;
  border-radius: 0;
  background: transparent;
  color: rgba(15, 23, 42, 0.75);
  cursor: pointer;
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;

  font-size: 26px;
  line-height: 1;

  &:hover {
    background: transparent;
    color: rgba(15, 23, 42, 0.9);
  }

  &:active {
    transform: none;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,zn=n.div`
  padding: 12px 18px 0 18px;
`,Bn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,An=n.div`
  padding: 12px 18px 16px 18px;
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: #111827;

  & > * {
    width: 100%;
    box-sizing: border-box;
  }
`,Fn=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,_n=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,On=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Wn=n(re)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Nn=n(re)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Hn=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Yn=({value:e="",placeholder:o="Выберите период",options:r=Hn,showCustomPeriodButton:i=!0,onChange:s,onCustomPeriodClick:c})=>{const[d,g]=h.useState(!1),[y,m]=h.useState(!1),[w,f]=h.useState(""),[v,x]=h.useState(""),[p,l]=h.useState(""),M=h.useRef(null),C=h.useRef(null);h.useEffect(()=>{if(e==="Custom"&&v&&p){const z=$(v),F=$(p);f(`С ${z} по ${F}`)}else{const z=r.find(F=>F.value===e);f(z?z.label:"")}},[e,r,v,p]),h.useEffect(()=>{const z=F=>{M.current&&!M.current.contains(F.target)&&g(!1),y&&C.current&&!C.current.contains(F.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(k=>k.contains(F.target))||m(!1))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[y]);const I=z=>{s?.(z.value),g(!1)},T=()=>{g(!1),c?c():m(!0)},_=()=>{s?.(""),f(""),x(""),l("")},R=()=>{if(v&&p){const z=$(v),F=$(p),W=`С ${z} по ${F}`;s?.("Custom",v,p),f(W),m(!1)}},$=z=>{const F=new Date(z),W=String(F.getDate()).padStart(2,"0"),O=String(F.getMonth()+1).padStart(2,"0"),k=F.getFullYear();return`${W}.${O}.${k}`},N=()=>t.jsxs(no,{children:[t.jsx(ze,{style:{margin:0},children:t.jsx(Be,{style:{margin:0},children:"Выбор периода"})}),t.jsx(oo,{onClick:_,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Vn,{ref:M,children:[t.jsxs(Un,{onClick:()=>g(!d),children:[t.jsx(qn,{children:w||o}),t.jsx(Zn,{$isOpen:d,children:"▼"})]}),d&&t.jsxs(Xn,{children:[r.map(z=>t.jsxs(Gn,{onClick:()=>I(z),$isSelected:e===z.value,children:[t.jsx(Jn,{$isSelected:e===z.value,children:e===z.value&&t.jsx(Kn,{})}),t.jsx(Qn,{children:z.label})]},z.id)),i&&t.jsx(eo,{onClick:T,children:"Другой период"})]})]}),y&&t.jsx("div",{ref:C,children:t.jsx(Re,{title:"",onClose:()=>m(!1),onCancel:()=>m(!1),onSave:z=>{z.preventDefault(),R()},saveButtonText:"Выбрать",customLayout:t.jsx(N,{}),children:t.jsxs(to,{children:[t.jsx(Se,{children:t.jsx(ae,{value:v,onChange:z=>x(z)})}),t.jsx(Se,{children:t.jsx(ae,{value:p,onChange:z=>l(z)})})]})})})]})},Vn=n.div`
  position: relative;
  width: 245px;
`,Un=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  width: 100%;
  height: 20px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #adb3bc;
  }

  &:focus {
    outline: none;
    border-color: #007d88;
  }
`,qn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zn=n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Xn=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 100;
  max-height: 350px;
  overflow-y: auto;
`,Gn=n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  background: ${({$isSelected:e})=>e?"rgba(232, 216, 216, 1)":"transparent"};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`,Jn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Kn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Qn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,eo=n.div`
  display: flex;
  flex-direction: column;
  padding: 10px 12px 0 0;
  min-height: 38px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #007d88;
  cursor: pointer;
  text-align: center;
  width: auto;

  &:hover {
    background: #f5f5f5;
  }
`,to=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,Se=n.div`
  flex: 1;
`,no=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,oo=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 4px;
  margin-right: 40px;

  &:hover {
    text-decoration: underline;
  }
`,ro=({name:e,value:o,onChange:r,onBlur:i,onKeyPress:s,placeholder:c="8 (999) 500-50-50",customPlaceholder:d,tabIndex:g,disabled:y=!1,hasError:m=!1,errorMessage:w})=>{const[f,v]=h.useState(!1),x=h.useRef(null),p=!!(d&&!o&&!f),l=T=>{const R=T.replace(/\D/g,"").slice(0,11);let $="";return R.length>0&&($+="8"),R.length>1&&($+=` (${R.slice(1,4)}`),R.length>4&&($+=`) ${R.slice(4,7)}`),R.length>7&&($+=`-${R.slice(7,9)}`),R.length>9&&($+=`-${R.slice(9,11)}`),$},M=T=>{const _=l(T.target.value),R={...T,target:{...T.target,name:e,value:_}};r(R)},C=T=>{v(!1),i?.(T)},I=T=>{s?.(T)};return t.jsxs(io,{children:[t.jsx(so,{ref:x,name:e,type:"tel",value:o,onChange:M,onKeyPress:I,placeholder:p?"":c,maxLength:18,tabIndex:g,disabled:y,hasError:m,onFocus:()=>v(!0),onBlur:C,inputMode:"tel"}),d&&t.jsx(ao,{isVisible:p,children:d}),m&&w&&t.jsx(lo,{children:w})]})},io=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,so=n.input`
  padding: 10px 12px;
  border: 1px solid ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

  &:hover {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }

  &:disabled {
    background-color: rgba(248, 249, 250, 0.9);
    cursor: not-allowed;
  }
`,ao=n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,lo=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,co=({tabs:e,activeTab:o,onChange:r,addButton:i,fontSize:s=14})=>{const c=e.find(d=>d.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(uo,{children:t.jsxs(po,{children:[e.map(d=>t.jsxs(xo,{$isActive:o===d.id,onClick:()=>r(d.id),$fontSize:s,children:[d.label,o===d.id&&t.jsx(ho,{})]},d.id)),i&&t.jsx(fo,{children:i})]})}),c&&t.jsx(go,{children:c})]})},uo=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,po=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,xo=n.li`
  position: relative;
  padding: 12px 0;
  cursor: pointer;
  font-size: ${e=>typeof e.$fontSize=="number"?`${e.$fontSize}px`:e.$fontSize};
  font-weight: ${e=>e.$isActive?"600":"400"};
  color: ${e=>e.$isActive?"rgba(0, 125, 136, 1)":"rgba(107, 114, 128, 1)"};
  transition: all 0.2s ease;

  &:hover {
    color: rgba(0, 125, 136, 0.8);
  }
`,ho=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,fo=n.li`
  margin-left: auto;
  padding: 4px 0;
`,go=n.div`
  margin-top: 20px;
`,bo=({mode:e,primaryValue:o,secondaryValue:r,placeholder:i="Выберите значение",onSelect:s,onClear:c,disabled:d=!1,hasError:g=!1,errorMessage:y="",customIcon:m})=>{const f=m||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(yo,{children:[t.jsx(ko,{children:o||"Не указано"}),r&&t.jsx(jo,{children:r})]}):t.jsxs(mo,{children:[t.jsxs(wo,{children:[t.jsx(vo,{type:"text",value:o||"",placeholder:i,readOnly:!0,disabled:d}),o&&!d&&t.jsx($o,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!d&&t.jsx(Co,{type:"button",onClick:s,"aria-label":"Выбрать",children:f}),g&&y&&t.jsx(So,{children:y})]})},mo=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,wo=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,vo=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,yo=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,ko=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,jo=n.span`
  font-size: 13px;
  color: #666;
`,Co=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`,$o=n.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #999;
  font-size: 30px;

  &:hover {
    color: #666;
  }
`,So=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,pe=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,Mo=({total:e})=>t.jsx("div",{children:t.jsxs(Eo,{children:["Всего: ",e]})}),Eo=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,Do=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,Lo=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,To=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,Io=n.span`
  position: absolute;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 24px;
  opacity: ${({disabled:e})=>e?.6:1};
  color: black;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: rgba(0, 125, 136, 1);
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({checked:e})=>e?"translateX(26px)":"translateX(0)"};
  }
`,Po=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Ro=({checked:e,onChange:o,disabled:r})=>{const i=()=>{r||o(!e)};return t.jsxs(To,{children:[t.jsx(Po,{checked:e,onChange:i,disabled:r}),t.jsx(Io,{checked:e,disabled:r})]})},zo=({id:e,name:o,checked:r,onChange:i,children:s})=>t.jsxs(Bo,{htmlFor:e,children:[t.jsx(Ao,{type:"radio",id:e,name:o,checked:r,onChange:i}),s]}),Bo=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Ao=n.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(173, 179, 188, 1);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: rgba(249, 250, 250, 1);
  transition: all 0.2s ease;

  &:checked {
    border-color: rgba(0, 125, 136, 1);
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: rgba(0, 125, 136, 1);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`,Fo=({percentage:e,onChange:o,draggable:r=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const s=h.useRef(null),[c,d]=h.useState(!1),g=f=>{!r||!o||(f.preventDefault(),d(!0),w(f))},y=f=>{!c||!o||w(f)},m=()=>{d(!1)},w=f=>{if(!s.current||!o)return;const v=s.current.getBoundingClientRect();let p=(f.clientX-v.left)/v.width*100;p=Math.max(0,Math.min(100,p)),o(Math.round(p))};return h.useEffect(()=>{if(c)return document.addEventListener("mousemove",y),document.addEventListener("mouseup",m),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",m)}},[c]),t.jsxs(_o,{ref:s,$draggable:r,onMouseDown:g,children:[t.jsx(Oo,{$secondaryColor:i.secondary}),t.jsx(Wo,{$percentage:e,$primaryColor:i.primary}),r&&t.jsx(No,{$percentage:e,$primaryColor:i.primary})]})},_o=n.div`
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  cursor: ${e=>e.$draggable?"pointer":"default"};

  &:hover {
    cursor: ${e=>e.$draggable?"pointer":"default"};
  }
`,Oo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Wo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,No=n.div`
  position: absolute;
  left: ${e=>e.$percentage}%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${e=>e.$primaryColor};
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: left 0.1s ease;

  &:active {
    cursor: grabbing;
  }
`,Ho=["zoomControl","fullscreenControl"];let se=null;const Yo=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(se||(se=new Promise((o,r)=>{const i=document.createElement("script"),s=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):r(new Error("Yandex Maps failed to load"))},i.onerror=()=>r(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),se),Vo=({onLocationSelect:e,initialAddress:o="",initialLat:r=55.751244,initialLon:i=37.618423,apiKey:s,zoom:c=12,height:d=400,width:g="100%",inputPlaceholder:y="Введите адрес или название места",searchButtonLabel:m="Найти",draggablePlacemark:w=!0,controls:f=Ho,showSearch:v=!0,className:x,style:p,onError:l})=>{const[M,C]=h.useState(null),[I,T]=h.useState(o),[_,R]=h.useState(o),[$,N]=h.useState(!1),z=h.useRef(null);h.useEffect(()=>{let O=!1,k;return(async()=>{try{const S=await Yo(s);if(O||!z.current)return;k=new S.Map(z.current,{center:[r,i],zoom:c,controls:f});const b=new S.Placemark([r,i],{},{draggable:w});k.geoObjects.add(b),k.events.add("click",Y=>{const V=Y.get("coords");F(V,b,k)}),b.events.add("dragend",()=>{const Y=b.geometry.getCoordinates();F(Y,b,k)}),C(k),N(!0)}catch(S){l&&S instanceof Error&&l(S)}})(),()=>{O=!0,k&&k.destroy()}},[s,r,i,c,f,w,l]);const F=async(O,k,a)=>{if(window.ymaps)try{const Y=(await window.ymaps.geocode(O)).geoObjects.get(0).getAddressLine();k.geometry.setCoordinates(O),a.panTo(O,{flying:!0}),R(Y),T(Y),e(Y,O[0],O[1])}catch(S){l&&S instanceof Error&&l(S)}},W=async()=>{if(!(!I.trim()||!window.ymaps||!M))try{const k=(await window.ymaps.geocode(I)).geoObjects.get(0);if(k){const a=k.geometry.getCoordinates(),S=k.properties.get("boundedBy");M.setBounds(S,{checkZoomRange:!0});const b=new window.ymaps.Placemark(a,{},{draggable:w});M.geoObjects.removeAll(),M.geoObjects.add(b);const Y=k.getAddressLine();R(Y),e(Y,a[0],a[1]),b.events.add("dragend",()=>{const V=b.geometry.getCoordinates();F(V,b,M)})}}catch(O){l&&O instanceof Error&&l(O)}};return t.jsxs(Uo,{className:x,style:p,children:[v&&t.jsxs(qo,{children:[t.jsx(ue,{type:"text",value:I,onChange:O=>T(O.target.value),placeholder:y,onKeyPress:O=>O.key==="Enter"&&W(),disabled:!$}),t.jsx(Zo,{onClick:W,disabled:!$,children:m})]}),t.jsxs(Go,{children:["Выбранный адрес: ",t.jsx("strong",{children:_||"Не выбран"})]}),t.jsx(Xo,{ref:z,$height:d,$width:g}),t.jsx(Jo,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Uo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,qo=n.div`
  display: flex;
  gap: 8px;
`,Zo=n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Xo=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Go=n.div`
  font-size: 14px;
  color: #374151;
`,Jo=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,xe=n.h1`
  margin-right: auto;
  text-align: left;
  font-size: clamp(20px, 4vw, 30px);
  line-height: 1.2;
  color: var(--wp-title-color, #111);
  font-weight: 600;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;function le(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const r=e.replace(/[^\d-]/g,"");if(!r||r==="-"||r==="")return`0${o}`;const i=parseInt(r,10);if(isNaN(i))return`0${o}`;const s=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${s}${o}`:s}function Ko(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Qo=({title:e,data:o,maxValue:r,step:i,height:s=300,titleFontSize:c})=>{const[d,g]=h.useState(null),y=[];for(let w=0;w<=r;w+=i)y.push(w);const m=o.length>0?o[0].bars.map(w=>({name:w.name,color:w.color})):[];return t.jsxs(er,{children:[t.jsxs(pe,{style:{marginTop:"0"},children:[t.jsx(xe,{style:{fontSize:c},children:e}),t.jsx(tr,{children:m.map((w,f)=>t.jsxs(nr,{children:[t.jsx(or,{color:w.color}),t.jsx(rr,{children:w.name})]},f))})]}),t.jsxs(ir,{height:s,children:[t.jsx(sr,{children:y.map((w,f)=>t.jsx(ar,{children:w.toLocaleString()},f))}),t.jsxs(lr,{children:[t.jsxs(cr,{children:[y.map((w,f)=>{const v=w/r*100;return t.jsx(dr,{position:100-v},`line-${f}`)}),o.map((w,f)=>t.jsxs(ur,{onMouseEnter:()=>g(f),onMouseLeave:()=>g(null),children:[w.bars.map((v,x)=>{const p=w.bars.slice(x+1).reduce((l,M)=>l+M.value,0);return t.jsx(pr,{height:v.value/r*100,offset:p/r*100,color:v.color,isHovered:d!==null&&d!==f},x)}),d===f&&t.jsxs(fr,{children:[t.jsxs(gr,{children:[t.jsxs(br,{children:["Всего: ",le(w.total.toString())]}),w.bars.map((v,x)=>t.jsxs(mr,{children:[v.name,": ",le(v.value.toString())]},x))]}),t.jsx(wr,{})]})]},f))]}),t.jsx(xr,{children:o.map((w,f)=>t.jsx(hr,{style:{flex:1,textAlign:"center"},children:w.label},f))})]})]})]})},er=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,tr=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,nr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,or=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,rr=n.span`
  font-size: 14px;
  color: #4b5563;
`,ir=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,sr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,ar=n.span`
  font-size: 12px;
  color: #6b7280;
`,lr=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,cr=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,dr=n.div`
  position: absolute;
  top: ${e=>e.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`,ur=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2px;
  flex: 1;
  min-width: 0;
  position: relative;
  height: 100%;
  margin-bottom: 2px;
  z-index: 1;
`,pr=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,xr=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,hr=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,fr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,gr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,br=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,mr=n.div`
  margin-bottom: 2px;
`,wr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,vr=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,yr=({title:e,data:o,xAxisLabel:r,yAxisLabel:i,maxX:s,maxY:c,minY:d,xStep:g,yStep:y,height:m=300,showLegend:w=!0,xAxisCustomLabels:f,showTooltip:v=!0,titleFontSize:x="30px"})=>{const[p,l]=h.useState(null),[M,C]=h.useState({x:0,y:0}),I=h.useRef(null),T=h.useRef(null),_=Math.max(...o.map(k=>k.x),s),R=[];for(let k=0;k<=_;k+=g)R.push(k);const $=[];for(let k=d;k<=c;k+=y)$.push(k);const N=f||R.map(k=>k.toString()),z=w?Array.from(new Set(o.filter(k=>k.label).map(k=>k.label))).map(k=>{const a=o.find(S=>S.label===k);return{name:k,color:a.color}}):[],F={};o.forEach(k=>{const a=k.label||"default";F[a]||(F[a]=[]),F[a].push(k)});const W=k=>k/_*100,O=k=>{const a=c-d;return 100-(k-d)/a*100};return h.useEffect(()=>{if(p&&T.current){const k=T.current.getBoundingClientRect(),a=W(p.x)/100*k.width,S=O(p.y)/100*k.height;C({x:a+k.left,y:S+k.top})}},[p,s,c,d]),t.jsxs(kr,{children:[t.jsxs(pe,{style:{marginTop:"0"},children:[t.jsx(xe,{style:{fontSize:x},children:e}),w&&z.length>0&&t.jsx(jr,{children:z.map((k,a)=>t.jsxs(Cr,{children:[t.jsx($r,{color:k.color}),t.jsx(Sr,{children:k.name})]},a))})]}),t.jsxs(Mr,{height:m,children:[t.jsxs(Er,{children:[$.map((k,a)=>t.jsx(Dr,{children:k.toLocaleString()},a)),t.jsx(Me,{children:i})]}),t.jsxs(Lr,{ref:T,children:[$.map((k,a)=>t.jsx(Tr,{position:O(k)},`hline-${a}`)),Object.values(F).map((k,a)=>k.map((S,b)=>{if(b===0)return null;const Y=k[b-1],V=W(Y.x),U=O(Y.y),E=W(S.x),L=O(S.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${V}%`,y1:`${U}%`,x2:`${E}%`,y2:`${L}%`,stroke:S.color,strokeWidth:"1"})},`line-${a}-${b}`)})),o.map((k,a)=>t.jsx(Ir,{x:W(k.x),y:O(k.y),color:k.color,onMouseEnter:()=>l(k),onMouseLeave:()=>l(null),isHovered:p?.label===k.label},a))]})]}),v&&p&&t.jsxs(zr,{ref:I,style:{left:M.x,top:M.y},children:[t.jsxs(Br,{children:[p.name&&t.jsx(Ar,{children:p.name}),t.jsx(Fr,{children:p.y.toLocaleString()})]}),t.jsx(_r,{})]}),t.jsxs(Pr,{children:[N.map((k,a)=>{const b=R[a]/_*100;return t.jsx(Rr,{style:{left:`${b}%`,transform:"translateX(-50%)"},children:k},a)}),r&&t.jsx(Me,{children:r})]})]})},kr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,jr=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,Cr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,$r=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,Sr=n.span`
  font-size: 14px;
  color: #4b5563;
`,Mr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Er=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,Dr=n.span`
  font-size: 12px;
  color: #6b7280;
`,Me=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,Lr=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,Tr=n.div`
  position: absolute;
  top: ${e=>e.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`,Ir=n.div`
  position: absolute;
  left: ${e=>e.x}%;
  top: ${e=>e.y}%;
  width: ${e=>e.isHovered?"8px":"6px"};
  height: ${e=>e.isHovered?"8px":"6px"};
  background-color: ${e=>e.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
`,Pr=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Rr=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,zr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${vr} 0.15s ease-out forwards;
`,Br=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Ar=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Fr=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,_r=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Or=({images:e,initialIndex:o,onClose:r})=>{const[i,s]=h.useState(o),[c,d]=h.useState(0),g=()=>{s(f=>f>0?f-1:e.length-1),d(0)},y=()=>{s(f=>f<e.length-1?f+1:0),d(0)},m=()=>{d(f=>(f+90)%360)},w=f=>{f.key==="Escape"?r():f.key==="ArrowLeft"?g():f.key==="ArrowRight"?y():(f.key==="r"||f.key==="к")&&m()};return t.jsx(Wr,{onClick:r,onKeyDown:w,tabIndex:0,children:t.jsxs(Nr,{onClick:f=>f.stopPropagation(),children:[t.jsx(Hr,{onClick:r,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Yr,{children:t.jsx(Vr,{onClick:m,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Ur,{children:[t.jsx(Ee,{$position:"left",onClick:g,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(qr,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx(Ee,{$position:"right",onClick:y,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Zr,{children:e.map((f,v)=>t.jsx(Xr,{$active:v===i,onClick:()=>{s(v),d(0)}},v))})]})})},Wr=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  outline: none;
`,Nr=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Hr=n.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }
`,Yr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Vr=n.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(249, 250, 250, 1);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: white;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Ur=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,qr=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Ee=n.button`
  position: absolute;
  ${({$position:e})=>e}: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.9);
  }

  svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${({$position:e})=>e}: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,Zr=n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Xr=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ae=({isOpen:e,callPhone:o,error:r,onClose:i})=>{const[s,c]=h.useState(!1);if(!e)return null;const d=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),g=()=>{d?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Gr,{onClick:i,children:t.jsxs(Jr,{onClick:y=>y.stopPropagation(),children:[t.jsx(Kr,{children:"Подтверждение авторизации"}),t.jsx(De,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Qr,{onClick:g,title:d?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!d&&s&&t.jsx(ei,{children:"Скопировано!"})]}),t.jsx(De,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),r&&t.jsx(ti,{children:r})]})})},Gr=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Jr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Kr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,De=n.p`
  margin-bottom: 15px;
  color: #555;
`,Qr=n.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: rgba(0, 125, 136, 1);
  position: relative;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: all 0.2s;

  ${e=>e.$clickable&&`
        &:hover {
            color: rgba(0, 100, 120, 1);
            text-decoration: underline;
        }
        &:active {
            transform: scale(0.98);
        }
    `}
`,ei=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,ti=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,Fe=h.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),ni=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),oi=({items:e,bottomItems:o=[],bottomContent:r,logo:i,arrowIcon:s,collapsed:c,onToggle:d,selectedKey:g,onSelect:y,autoCollapseOnSelect:m=!1,width:w="315px",collapsedWidth:f="85px",className:v,style:x,mobileBreakpoint:p=768,showBottomLabels:l=!0,children:M})=>{const C=h.useContext(Fe),[I,T]=h.useState(window.innerWidth<=p);h.useEffect(()=>{const j=()=>{T(window.innerWidth<=p)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[p]);const[_,R]=h.useState(c??C.collapsed??!1),[$,N]=h.useState(null),[z,F]=h.useState(g??C.selectedSideMenuItem??null),[W,O]=h.useState({visible:!1,x:0,y:0,items:[]}),k=h.useRef(null),a=c??C.collapsed??_,S=j=>{R(j),C.toggleCollapsed(),d?.(j)},b=g??C.selectedSideMenuItem??z,Y=j=>{F(j),C.setSelectedSideMenuItem(j)};h.useEffect(()=>{c!==void 0&&(R(c),c&&N(null))},[c]),h.useEffect(()=>{g!==void 0&&Y(g)},[g]),h.useEffect(()=>{const j=()=>O(B=>({...B,visible:!1}));return document.addEventListener("click",j),()=>document.removeEventListener("click",j)},[]);const V=()=>{const j=!a;S(j),j&&N(null)},U=j=>{j.disabled||j.hidden||(Y(j.key),y?.(j),j.onClick?.(j),m&&(S(!0),N(null)))},E=j=>{N(B=>B===j?null:j)},L=(j,B)=>{const P=(j.children?.length||0)>0;if(a&&P){B.stopPropagation();const H=B.currentTarget.getBoundingClientRect();O({visible:!0,x:H.right+6,y:H.top,items:j.children||[]});return}P?E(j.key):U(j)},u=(j,B=!1)=>j.filter(P=>!P.hidden).map(P=>{const H=(P.children?.length||0)>0,q=$===P.key,G=b===P.key||!!P.children&&P.children.some(J=>J.key===b);return t.jsxs(h.Fragment,{children:[t.jsxs(fi,{$collapsed:a,$selected:G,onClick:J=>L(P,J),$disabled:P.disabled,title:P.label,children:[P.icon&&t.jsx(bi,{$collapsed:a,children:P.icon}),!a&&t.jsx(gi,{children:P.label}),!a&&H&&t.jsx(wi,{$expanded:q,children:"▾"})]}),!a&&H&&q&&t.jsx(mi,{children:u(P.children||[],!0)})]},P.key)}),D=h.useMemo(()=>W.visible?t.jsx(vi,{style:{left:W.x,top:W.y},children:W.items.map(j=>t.jsx(yi,{onClick:()=>{U(j),O({visible:!1,x:0,y:0,items:[]})},$selected:b===j.key,children:j.label},j.key))}):null,[W,b]),A=()=>{const j=[...e,...o].filter(B=>!B.hidden);return t.jsx(si,{children:j.map(B=>{const P=b===B.key;return t.jsxs(ai,{$selected:P,onClick:()=>U(B),$disabled:B.disabled,children:[B.icon&&t.jsx(li,{$selected:P,children:B.icon}),l&&t.jsx(ci,{$selected:P,children:B.label})]},B.key)})})};return I?t.jsxs(ri,{className:v,style:x,children:[t.jsx(ii,{children:M}),A()]}):t.jsxs(di,{ref:k,$collapsed:a,$width:w,$collapsedWidth:f,className:v,style:x,children:[t.jsxs(ui,{children:[t.jsx(pi,{onClick:V,"aria-label":"Переключить меню",children:s??t.jsx(ni,{collapsed:a})}),!a&&i&&t.jsx(xi,{children:i})]}),t.jsxs(hi,{children:[t.jsx(Le,{children:u(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(Te,{}),t.jsx(Le,{children:u(o)})]}),r&&t.jsxs(t.Fragment,{children:[(o.length>0||e.length>0)&&t.jsx(Te,{}),t.jsx(ji,{$collapsed:a,children:r})]})]}),D,t.jsx(ki,{$collapsed:a}),M]})},ri=n.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  height: 100svh;
  min-height: 100svh;
  height: 100dvh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`,ii=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,si=n.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(209, 213, 219, 1);
  padding: 8px 4px;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`,ai=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 0.3)":"transparent"};
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;

  &:active {
    background-color: rgba(209, 213, 219, 0.5);
  }
`,li=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,ci=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,di=n.div`
  width: ${({$collapsed:e,$width:o,$collapsedWidth:r})=>e?r:o};
  height: 100vh;
  background-color: rgba(249, 250, 250, 1);
  color: rgba(80, 85, 92, 1);
  position: relative;
  padding: 22px 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,ui=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,pi=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`,xi=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,hi=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Le=n.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`,fi=n.div`
  display: flex;
  align-items: center;
  justify-content: ${({$collapsed:e})=>e?"center":"flex-start"};
  gap: ${({$collapsed:e})=>e?"0":"12px"};
  padding: ${({$collapsed:e})=>e?"0":"10px 17px"};
  margin: 4px 0;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({$disabled:e})=>e?.5:1};
  
  /* В свернутом состоянии делаем иконку квадратной с отступами */
  ${({$collapsed:e})=>e&&`
    width: 48px;
    height: 48px;
    margin: 4px auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`,gi=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,bi=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({$collapsed:e})=>e?`
    width: 48px;
    height: 48px;
  `:`
    min-width: 21px;
    width: 21px;
    height: auto;
  `}
  
  & > svg {
    ${({$collapsed:e})=>e?`
      width: 24px;
      height: 24px;
    `:`
      width: 100%;
      height: auto;
    `}
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`,mi=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,wi=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,Te=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,vi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,yi=n.div`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"transparent"};

  &:hover {
    background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`,ki=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,ji=n.div`
  width: 100%;
  margin-top: auto;
  padding: ${({$collapsed:e})=>e?"8px 0":"12px 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Адаптация для свернутого состояния */
  ${({$collapsed:e})=>e&&`
    & > * {
      transform: scale(0.9);
    }
  `}
`,Ci=e=>{const o=e.replace(/\D/g,""),i=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let s="";return i.length>0&&(s+="8"),i.length>1&&(s+=` (${i.slice(1,4)}`),i.length>4&&(s+=`) ${i.slice(4,7)}`),i.length>7&&(s+=`-${i.slice(7,9)}`),i.length>9&&(s+=`-${i.slice(9,11)}`),s},_e=({value:e,onChange:o,placeholder:r="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const s=c=>{const d=Ci(c.target.value);o(d)};return t.jsx($i,{type:"text",value:e,onChange:s,placeholder:r,maxLength:18,tabIndex:i})},$i=n.input`
  width: 100%;
  height: 54px;
  font-size: 16px;
  border: 2px solid rgba(0, 125, 136, 0.5);
  border-radius: 8px;
  padding: 0 15px;
  color: rgba(0, 125, 136, 1);
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  display: block;

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`;class Si{async subscribe(o,r,i){return Z("/Pay/subscribe",{method:"POST",body:{tariffType:o,days:r??null,ones:i??null}})}async cancelSubscription(o){const r={};return o!==void 0&&(r.tariffType=o),Z("/Pay/cancel",{method:"POST",body:r})}async getSubscriptionInfo(o){let r="/Pay/status";return o!==void 0&&(r+=`?tariffType=${o}`),Z(r,{method:"GET"})}async isSubscriptionActive(o){return(await this.getSubscriptionInfo(o)).isActive}async getSubscriptionEndDate(o){return(await this.getSubscriptionInfo(o)).endAt}}const ne=new Si,Mi=({paymentUrl:e,onPaymentComplete:o,expiresAt:r,status:i,tariffType:s,onCheckStatus:c})=>{const[d,g]=h.useState(1),[y,m]=h.useState(!1),[w,f]=h.useState(null),[v,x]=h.useState(!1),[p,l]=h.useState(null),[M,C]=h.useState(i||"Pending"),I=h.useRef(!1),T=h.useRef(!0),_=h.useRef(null),R=h.useRef(null),$=h.useCallback(b=>{const Y=new Date().getTime(),U=new Date(b).getTime()-Y;if(U<=0)return"00:00";const E=Math.floor(U%(1e3*60*60)/(1e3*60)),L=Math.floor(U%(1e3*60)/1e3);return`${E.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")}`},[]),N=h.useCallback(()=>{r&&d===1&&M==="Pending"&&$(r)==="00:00"&&(l("Время ожидания оплаты истекло"),R.current&&(clearInterval(R.current),R.current=null))},[r,d,M,$]),z=h.useCallback(()=>{!r||d!==1||M!=="Pending"||(N(),R.current&&clearInterval(R.current),R.current=window.setInterval(()=>{T.current&&d===1&&M==="Pending"&&N()},1e3))},[r,d,M,N]),F=h.useCallback(()=>{R.current&&(clearInterval(R.current),R.current=null)},[]),W=h.useCallback(()=>{_.current&&(clearInterval(_.current),_.current=null)},[]),O=h.useCallback(async()=>{if(I.current||d===3||M==="Active"){console.log("Пропуск проверки:",{isChecking:I.current,paymentStep:d,currentStatus:M});return}try{if(I.current=!0,l(null),c){const b=await c();b.success&&b.status==="Active"?(C("Active"),g(3),F(),W(),o&&o()):b.status==="Pending"?(C("Pending"),g(1),b.transaction_status==="Authorized"&&g(2)):b.status==="Expired"&&(C("Active"),g(3),F(),W(),o&&o())}}catch(b){console.error("Ошибка при проверке статуса:",b),l("Не удалось проверить статус оплаты")}finally{T.current&&(I.current=!1)}},[c,o,M,F,W]);h.useEffect(()=>{if(d===3){const b=setTimeout(()=>{o&&o()},2e3);return()=>clearTimeout(b)}},[d,o]);const k=h.useCallback(()=>{_.current||M==="Active"||(O(),_.current=window.setInterval(()=>{T.current&&M!=="Active"&&O()},5e3))},[O,M]);h.useEffect(()=>(T.current=!0,M==="Active"?g(3):M==="Pending"&&(k(),z()),()=>{T.current=!1,W(),F()}),[M,k,z,W,F]),h.useEffect(()=>{d===1&&M==="Pending"?z():F()},[d,M,z,F]);const a=b=>d>b?"completed":d===b?"current":"pending",S=async()=>{try{await ne.cancelSubscription(s),m(!0),f(null),W(),F(),window.location.reload()}catch(b){console.error("Ошибка при отмене подписки:",b),f("Произошла ошибка при отмене подписки")}finally{m(!1),x(!1)}};return t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"12px",boxSizing:"border-box"},children:[t.jsxs("div",{style:{maxWidth:"600px",width:"100%",backgroundColor:"white",borderRadius:"20px",padding:"24px 16px",position:"relative",margin:"12px 0"},children:[!v&&t.jsx("button",{onClick:()=>x(!0),className:"desktop-cancel-button",style:{position:"absolute",top:"12px",right:"12px",backgroundColor:"transparent",color:"#999",border:"1px solid #ddd",padding:"6px 12px",borderRadius:"20px",fontSize:"13px",cursor:"pointer",transition:"all 0.3s",zIndex:10,minHeight:"36px",minWidth:"80px"},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="#f5f5f5",b.currentTarget.style.color="#666"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="transparent",b.currentTarget.style.color="#999"},children:"✕ Отменить"}),v&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"16px",boxSizing:"border-box"},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"16px",padding:"24px 20px",maxWidth:"400px",width:"100%",textAlign:"center",maxHeight:"90vh",overflowY:"auto"},children:[t.jsx("h3",{style:{color:"#333",marginBottom:"12px",fontSize:"20px",lineHeight:"1.4"},children:"Отменить оформление?"}),t.jsx("p",{style:{color:"#666",marginBottom:"24px",fontSize:"15px",lineHeight:"1.5"},children:"Вы уверены, что хотите отменить оформление подписки? Вам придется начать заново."}),w&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px",borderRadius:"8px",marginBottom:"20px",fontSize:"14px"},children:w}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx("button",{onClick:S,disabled:y,style:{width:"100%",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"bold",cursor:y?"not-allowed":"pointer",opacity:y?.7:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:b=>{y||(b.currentTarget.style.backgroundColor="#D32F2F")},onMouseLeave:b=>{y||(b.currentTarget.style.backgroundColor="#F44336")},children:y?"Отмена...":"Да, отменить"}),t.jsx("button",{onClick:()=>{x(!1),f(null)},disabled:y,style:{width:"100%",backgroundColor:"#f5f5f5",color:"#666",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",cursor:y?"not-allowed":"pointer",opacity:y?.5:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:b=>{y||(b.currentTarget.style.backgroundColor="#e0e0e0")},onMouseLeave:b=>{y||(b.currentTarget.style.backgroundColor="#f5f5f5")},children:"Нет, вернуться"})]})]})}),t.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[t.jsxs("h1",{style:{color:"#333",marginBottom:"8px",fontSize:"24px",lineHeight:"1.3",padding:"0 8px"},children:[d===1&&M==="Pending"&&"Ожидание оплаты",d===2&&"Подтверждение платежа",d===3&&"Платёж завершён"]}),t.jsxs("p",{style:{color:"#666",fontSize:"15px",lineHeight:"1.5",padding:"0 12px",margin:0},children:[d===1&&M==="Pending"&&"Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.",d===2&&"Платёж обрабатывается банком. Обычно это занимает несколько секунд.",d===3&&"Подписка успешно активирована! Спасибо за покупку."]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"32px",position:"relative",padding:"0 4px"},children:[t.jsx("div",{style:{position:"absolute",top:"15px",left:"18%",right:"18%",height:"2px",backgroundColor:"#E0E0E0",zIndex:1},children:t.jsx("div",{style:{width:d===1?"0%":d===2?"50%":"100%",height:"100%",backgroundColor:"#007D88",transition:"width 0.5s ease"}})}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:a(1)==="completed"||a(1)==="current"?"#007D88":"#E0E0E0",border:a(1)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",fontWeight:"bold"},children:a(1)==="completed"?"✓":"1"}),t.jsx("div",{style:{color:a(1)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:a(1)==="current"?"bold":"normal"},children:"Начало"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:a(2)==="completed"?"#007D88":a(2)==="current"?"white":"#E0E0E0",border:a(2)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:a(2)==="current"?"#007D88":a(2)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:a(2)==="completed"?"✓":"2"}),t.jsx("div",{style:{color:a(2)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:a(2)==="current"?"bold":"normal"},children:"Подтверждение"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:a(3)==="completed"?"#007D88":a(3)==="current"?"white":"#E0E0E0",border:a(3)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:a(3)==="current"?"#007D88":a(3)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:a(3)==="completed"?"✓":"3"}),t.jsx("div",{style:{color:a(3)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:a(3)==="current"?"bold":"normal"},children:"Завершено"})]})]}),t.jsxs("div",{style:{backgroundColor:"#F9FAFA",borderRadius:"12px",padding:"20px 16px",marginBottom:"24px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("div",{style:{color:"#999",fontSize:"13px",marginBottom:"8px"},children:"Ссылка для оплаты"}),t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:"#007D88",textDecoration:"none",fontSize:"14px",wordBreak:"break-all",display:"block",padding:"12px 16px",backgroundColor:"#E8F4F5",borderRadius:"8px",transition:"background-color 0.3s",lineHeight:"1.5",minHeight:"44px"},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="#D1E9EB"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="#E8F4F5"},children:e})]}),d===1&&t.jsx("div",{style:{borderTop:"1px solid #E0E0E0",paddingTop:"16px"},children:!v&&t.jsx("button",{onClick:()=>x(!0),className:"mobile-cancel-button",style:{width:"100%",margin:"16px 0 0px 0px",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"500",cursor:"pointer",transition:"background-color 0.3s",zIndex:10},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="#D32F2F"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="#F44336"},children:"✕ Отменить оформление"})})]}),p&&d!==3&&M!=="Active"&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px 16px",borderRadius:"8px",marginBottom:"16px",fontSize:"14px",textAlign:"center",lineHeight:"1.5"},children:p}),d===2&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#F9FAFA",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#007D88",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Платёж обрабатывается банком. Это может занять от нескольких секунд до часа."})}),M==="Active"&&d!==3&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#E8F5E9",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#2E7D32",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Подписка активна! Страница будет обновлена автоматически."})})]}),t.jsx("style",{children:`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @media (min-width: 769px) {
          .mobile-cancel-button {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-cancel-button {
            display: none !important;
          }
          
          .mobile-cancel-button {
            display: block !important;
          }
          
          * {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
        }
      `})]})},Oe=(e={})=>{const{tariffType:o,autoRedirect:r=!1,onSuccess:i,onCancel:s,onError:c}=e,[d,g]=h.useState(!1),[y,m]=h.useState(!1),[w,f]=h.useState(!1),[v,x]=h.useState(!1),[p,l]=h.useState(null),[M,C]=h.useState(null),[I,T]=h.useState(null),[_,R]=h.useState(null),[$,N]=h.useState(!1),z=h.useCallback(async(k,a,S)=>{m(!0),g(!0),l(null),C(null);try{const b=await ne.subscribe(k,a,S);return C(b),r&&b.paymentUrl&&(window.location.href=b.paymentUrl),i?.(b),b}catch(b){const Y=b instanceof Error?b.message:"Unknown error occurred";return l(Y),c?.(Y),null}finally{m(!1),g(!1)}},[r,i,c]),F=h.useCallback(async k=>{f(!0),g(!0),l(null),T(null);try{const a=k??o,S=await ne.cancelSubscription(a);return T(S),s?.(S),S}catch(a){const S=a instanceof Error?a.message:"Unknown error occurred";return l(S),c?.(S),null}finally{f(!1),g(!1)}},[o,s,c]),W=h.useCallback(async k=>{x(!0),l(null);try{const a=k??o,S=await ne.getSubscriptionInfo(a);return R(S),N(S.isActive),S}catch(a){const S=a instanceof Error?a.message:"Unknown error occurred";return l(S),c?.(S),null}finally{x(!1)}},[o,c]),O=h.useCallback(()=>{g(!1),m(!1),f(!1),x(!1),l(null),C(null),T(null),R(null),N(!1)},[]);return{isLoading:d,isSubscribing:y,isCancelling:w,isFetchingStatus:v,error:p,subscriptionData:M,cancelData:I,statusData:_,isActive:$,subscribe:z,cancelSubscription:F,getSubscriptionStatus:W,resetState:O}},Ei=[{id:1,days:30,label:"1 месяц",price:4999},{id:2,days:90,label:"3 месяца",price:14999},{id:3,days:180,label:"6 месяцев",price:29999},{id:4,days:365,label:"1 год",price:59999,popular:!0}],Di=[{id:1,ones:1,label:"Разовый доступ",price:999,description:"1 разовое использование"},{id:2,ones:5,label:"Пакет 5 раз",price:4499,description:"5 разовых использований",popular:!0},{id:3,ones:10,label:"Пакет 10 раз",price:8499,description:"10 разовых использований"},{id:4,ones:20,label:"Пакет 20 раз",price:15999,description:"20 разовых использований"}],Li=({tariffType:e="WaypayCrm",subscriptionType:o="days",plans:r,onPaymentSuccess:i,onError:s,autoRedirect:c=!0,buttonText:d="Оформить",loadingText:g="Обработка...",showSelectedIndicator:y=!0,className:m,title:w="Подписка",subTitle:f="WayPay CRM"})=>{const[v,x]=h.useState(null),p=r||(o==="days"?Ei:Di),{isLoading:l,error:M,subscribe:C,resetState:I}=Oe({tariffType:e,autoRedirect:c,onSuccess:$=>{c&&$.paymentUrl&&(window.location.href=$.paymentUrl),i?.()},onError:$=>{s?.($)}});h.useEffect(()=>{if(!v&&p.length>0){const $=p.find(N=>N.popular)||p[0];x($)}},[p,v]);const T=async()=>{if(!v){s?.("Выберите тарифный план");return}const $=o==="days"?v.days:void 0,N=o==="ones"?v.ones:void 0;await C(e,$,N)},_=$=>new Intl.NumberFormat("ru-RU").format($),R=$=>o==="days"?$.days:$.ones;return t.jsxs(Ti,{className:m,children:[t.jsxs(Ii,{children:[t.jsx(Pi,{children:w}),t.jsx(Ri,{children:f})]}),(M||typeof M=="string"&&M)&&t.jsxs(Yi,{children:[t.jsx("span",{children:M}),t.jsx(Vi,{onClick:I,children:"×"})]}),t.jsx(zi,{children:p.map($=>{const N=R($),z=v?.id===$.id;return t.jsxs(Bi,{$isSelected:z,$isPopular:!!$.popular,onClick:()=>x($),children:[t.jsxs(Ai,{children:[t.jsxs(Fi,{children:[$.label,$.popular&&t.jsx(_i,{children:"Популярный"})]}),$.description&&t.jsx(Oi,{children:$.description}),N!==void 0&&o==="days"&&t.jsxs(Ie,{children:[N," дней"]}),N!==void 0&&o==="ones"&&t.jsxs(Ie,{children:[N," шт."]})]}),t.jsxs(Wi,{children:[_($.price)," ₽"]}),y&&z&&t.jsx(Ni,{})]},$.id)})}),t.jsx(Hi,{onClick:T,disabled:l,children:l?g:d})]})},Ti=n.div`
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
  height: fit-content;
  position: sticky;
  top: 20px;

  @media (max-width: 900px) {
    position: static;
  }
`,Ii=n.div`
  margin-bottom: 28px;
  text-align: center;
`,Pi=n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`,Ri=n.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0;
`,zi=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`,Bi=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${e=>e.$isSelected?"#f8f9fa":"white"};
  border: 2px solid ${e=>e.$isSelected?"#007D88":e.$isPopular?"#FFD700":"#e8e8e8"};
  position: relative;

  &:hover {
    border-color: #007D88;
    background: #f8f9fa;
    transform: translateX(2px);
  }
`,Ai=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,Fi=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`,_i=n.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`,Oi=n.div`
  font-size: 12px;
  color: #8c8c8c;
`,Ie=n.div`
  font-size: 11px;
  color: #007D88;
  font-weight: 500;
`,Wi=n.span`
  font-size: 16px;
  font-weight: 600;
  color: #007D88;
`,Ni=n.div`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #007D88 transparent transparent;
  border-radius: 0 12px 0 0;
`,Hi=n.button`
  width: 100%;
  padding: 14px;
  background: #007D88;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #006b74;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Yi=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`,Vi=n.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`,Ui=e=>({call_phone:e.call_phone??e.callPhone,check_id:e.check_id??e.checkId,name_required:e.name_required??e.nameRequired}),We=async(e,o)=>{const i=await Z("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}});return Ui(i)},Ne=(e,o,r,i)=>Z("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,checkId:o,user_type:r,userType:r,name:i}}),qi=()=>Z("/auth/session/info",{method:"GET"}),Zi=({isOpen:e,onClose:o,onSubmit:r,error:i,isLoading:s=!1})=>{const[c,d]=h.useState("");if(!e)return null;const g=y=>{y.preventDefault(),r(c)};return t.jsx(Xi,{onClick:o,children:t.jsx(Gi,{onClick:y=>y.stopPropagation(),children:t.jsxs(Ji,{onSubmit:g,children:[t.jsx(Ki,{children:"Как вас зовут?"}),t.jsxs(Qi,{children:[t.jsx(ue,{type:"text",value:c,onChange:y=>d(y.target.value),placeholder:"Иванов Иван Иванович",disabled:s,autoFocus:!0,style:{flex:1}}),t.jsx(es,{type:"submit",disabled:s||!c.trim(),children:s?"...":"→"})]}),i&&t.jsx(ts,{children:i})]})})})},Xi=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Gi=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,Ji=n.form`
  display: flex;
  flex-direction: column;
`,Ki=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,Qi=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,es=n(re)`
  width: auto;
  min-width: 50px;
  height: 40px;
  padding: 0 10px;
  font-size: 20px;
  border-radius: 8px;
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ts=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,ns=({onLoginSuccess:e,userType:o="delivery_operator",title:r="Авторизация",submitLabel:i="Войти",placeholder:s="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:d="https://waypay.one",supportLinkText:g="waypay.one",className:y,style:m,pollingIntervalMs:w=3e3,enableRegistration:f=!1,enableSupport:v=!0})=>{const[x,p]=h.useState(!1),[l,M]=h.useState(""),[C,I]=h.useState(!1),[T,_]=h.useState(""),[R,$]=h.useState(""),[N,z]=h.useState(!1),[F,W]=h.useState(!1),[O,k]=h.useState(""),[a,S]=h.useState(""),[b,Y]=h.useState(null),V=h.useRef(void 0);h.useEffect(()=>()=>{V.current&&clearInterval(V.current)},[]);const U=j=>{const B=j.replace(/\D/g,"");return B?B.startsWith("8")?`+7${B.slice(1)}`:B.startsWith("7")?`+${B}`:`+${B}`:""},E=()=>{I(!1),W(!1),k(""),S(""),Y(null),V.current&&window.clearInterval(V.current)},L=async j=>{if(j.preventDefault(),!l){$("Введите номер телефона");return}p(!0),$("");const B=U(l);try{const P=await We(B,o);Y({phone:B,checkId:P.check_id,callPhone:P.call_phone}),f&&"name_required"in P&&P.name_required?(W(!0),_(P.call_phone)):!f&&"name_required"in P&&P.name_required?($("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),Y(null)):(_(P.call_phone),I(!0),D(B,P.check_id))}catch(P){console.error("Auth error:",P),P&&P.response&&P.response.data?$(P.response.data):P instanceof Error?$(P.message):$("Произошла ошибка при авторизации")}finally{p(!1)}},u=async j=>{if(!j.trim()){S("Введите ФИО");return}if(b){p(!0),S("");try{k(j),W(!1),I(!0),D(b.phone,b.checkId,j)}catch(B){console.error("Registration error:",B),S("Не удалось завершить регистрацию")}finally{p(!1)}}},D=(j,B,P)=>{V.current&&window.clearInterval(V.current),V.current=window.setInterval(()=>{A(j,B,P)},w)},A=async(j,B,P)=>{if(!N){z(!0);try{const H=await Ne(j,B,o,P||O);(H.access_token&&H.refresh_token||H.accessToken&&H.refreshToken)&&(V.current&&window.clearInterval(V.current),I(!1),W(!1),k(""),Y(null),e(H.access_token??H.accessToken))}catch(H){console.error("Verification error:",H)}finally{z(!1)}}};return t.jsxs(os,{className:y,style:m,children:[t.jsxs(rs,{children:[t.jsxs(is,{onSubmit:L,children:[t.jsx(ss,{children:r}),t.jsx(as,{children:t.jsx(ls,{children:t.jsx(_e,{value:l,onChange:j=>M(j),placeholder:s})})}),R&&t.jsx(xs,{children:t.jsx("span",{children:R})}),t.jsx(cs,{type:"submit",disabled:x,children:x?"Загрузка...":i})]}),v&&t.jsxs(ds,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(us,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(ps,{href:d,target:"_blank",rel:"noreferrer",children:g})]})]}),t.jsx(Zi,{isOpen:F,onClose:E,onSubmit:u,error:a,isLoading:x}),t.jsx(Ae,{isOpen:C,onClose:E,callPhone:T,error:R})]})},os=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,rs=n.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  max-height: calc(100vh - 40px); /* Ограничиваем высоту с учетом padding контейнера */
  overflow-y: auto; /* Добавляем прокрутку внутри карточки если контент не помещается */
  padding: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 1) 0%,
      rgba(37, 203, 161, 1) 100%
    );
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    max-height: calc(100vh - 40px);
  }

  /* Скрываем скроллбар для Chrome, Safari и Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Скрываем скроллбар для IE, Edge и Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`,is=n.form`
  display: flex;
  flex-direction: column;
`,ss=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,as=n.div`
  margin-bottom: 25px;
`,ls=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,cs=n.button`
  background: linear-gradient(
    90deg,
    rgba(0, 125, 136, 1) 0%,
    rgba(37, 203, 161, 1) 100%
  );
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 0.5) 0%,
      rgba(37, 203, 161, 0.5) 100%
    );
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,ds=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,us=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,ps=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,xs=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff6f5;
  color: #b42318;
  border: 1px solid #f8d7da;
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  box-shadow: 0 6px 14px rgba(180, 35, 24, 0.08);
`,He=e=>{let o=0;for(let i=0;i<e.length;i++)o=e.charCodeAt(i)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},hs=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",fs=(e,o=100)=>{const r=document.createElement("canvas");r.width=o,r.height=o;const i=r.getContext("2d");if(!i)return"";const s=He(e);i.fillStyle=s,i.beginPath(),i.arc(o/2,o/2,o/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=o/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const d=c*.1;return i.fillText(e,o/2,o/2+d),r.toDataURL("image/png")},gs=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const r=o.getDate().toString().padStart(2,"0"),i=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear();return`${r}-${i}-${s}`};function bs(e){return new Date(e)}const Ye=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const r=new Date;if(o>r){const w=Math.floor((o.getTime()-r.getTime())/1e3),f=Math.floor(w/60),v=Math.floor(f/60),x=Math.floor(v/24);return w<10?"скоро":w<60?`через ${w} секунд`:f===1?"через минуту":f<60?`через ${f} минут`:v===1?"через час":v<24?`через ${v} часов`:x===1?"завтра":x<7?`через ${x} дней`:"в будущем"}const i=Math.floor((r.getTime()-o.getTime())/1e3),s=Math.floor(i/60),c=Math.floor(s/60),d=Math.floor(c/24),g=Math.floor(d/7),y=Math.floor(d/30),m=Math.floor(d/365);if(i<10)return"только что";if(i<60){const w=Math.max(1,i);return w===1?"секунду назад":w<5?`${w} секунды назад`:`${w} секунд назад`}return s<60?s===1?"минуту назад":s<5?`${s} минуты назад`:`${s} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:d<7?d===1?"вчера":d===2?"позавчера":`${d} дня назад`:g<4?g===1?"неделю назад":g<5?`${g} недели назад`:`${g} недель назад`:y<12?y===1?"месяц назад":y<5?`${y} месяца назад`:`${y} месяцев назад`:m===1?"год назад":m<5?`${m} года назад`:`${m} лет назад`}catch(r){return console.error("Ошибка форматирования относительного времени:",r),"ошибка даты"}},Ve=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},ms=(e,o={})=>{const{useExactAfterMonths:r=6,includeTime:i=!0}=o,s=new Date(e);return isNaN(s.getTime()),Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24*30))>=r?i?Ve(s):s.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Ye(s)};exports.API_BASE_URL=oe;exports.AddButton=xt;exports.AuthCallModal=Ae;exports.AuthPage=ns;exports.BASE_URL=gt;exports.BackButton=yt;exports.BaseModal=Re;exports.Checkbox=Zt;exports.ColumnChart=Qo;exports.ContextMenu=ce;exports.CountInfoTitle=Mo;exports.CustomCalendar=ae;exports.CustomInput=ue;exports.CustomPhoneInput=_e;exports.CustomSelect=Pt;exports.CustomTable=tt;exports.CustomTextArea=Mn;exports.CustomTitle=xe;exports.DefaultButton=re;exports.DeleteButton=Ct;exports.EditButton=St;exports.EntitySelectContainer=bo;exports.ExportButton=Dt;exports.FILE_BASE_URL=bt;exports.InputContainer=vn;exports.InputLabel=wn;exports.InputRow=mn;exports.InputTitle=Do;exports.ModalInfoTitle=Lo;exports.Pagination=$n;exports.PeriodField=Yn;exports.PhoneModalInput=ro;exports.PhotoViewerModal=Or;exports.ProgressBar=Fo;exports.RadioButton=zo;exports.ScatterPlot=yr;exports.SideMenu=oi;exports.SideMenuContext=Fe;exports.SubscriptionBlock=Li;exports.SubscriptionPendingPage=Mi;exports.Tabs=co;exports.TitleField=pe;exports.ToggleSwitch=Ro;exports.YandexMapSelector=Vo;exports.apiRequest=Z;exports.authStorage=wt;exports.confirmCallAuth=Ne;exports.downloadFile=mt;exports.formatDate=gs;exports.formatExactDate=Ve;exports.formatMoney=le;exports.formatRelativeTime=Ye;exports.formatRelativeTimeExtended=ms;exports.generateAvatar=fs;exports.getInitials=hs;exports.getSessionInfo=qi;exports.initiateCallAuth=We;exports.parseDateInput=bs;exports.parseMoney=Ko;exports.refreshAccessToken=de;exports.stringToColor=He;exports.useSubscription=Oe;
