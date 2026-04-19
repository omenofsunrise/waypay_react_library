"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const x=require("react"),n=require("styled-components"),X=require("framer-motion");var te={exports:{}},K={};var xe;function Ue(){if(xe)return K;xe=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(i,a,c){var d=null;if(c!==void 0&&(d=""+c),a.key!==void 0&&(d=""+a.key),"key"in a){c={};for(var f in a)f!=="key"&&(c[f]=a[f])}else c=a;return a=c.ref,{$$typeof:e,type:i,key:d,ref:a!==void 0?a:null,props:c}}return K.Fragment=o,K.jsx=r,K.jsxs=r,K}var Q={};var he;function Ze(){return he||(he=1,process.env.NODE_ENV!=="production"&&(function(){function e(u){if(u==null)return null;if(typeof u=="function")return u.$$typeof===O?null:u.displayName||u.name||null;if(typeof u=="string")return u;switch(u){case M:return"Fragment";case I:return"Profiler";case C:return"StrictMode";case $:return"Suspense";case W:return"SuspenseList";case H:return"Activity"}if(typeof u=="object")switch(typeof u.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),u.$$typeof){case l:return"Portal";case _:return u.displayName||"Context";case T:return(u._context.displayName||"Context")+".Consumer";case R:var D=u.render;return u=u.displayName,u||(u=D.displayName||D.name||"",u=u!==""?"ForwardRef("+u+")":"ForwardRef"),u;case z:return D=u.displayName||null,D!==null?D:e(u.type)||"Memo";case F:D=u._payload,u=u._init;try{return e(u(D))}catch{}}return null}function o(u){return""+u}function r(u){try{o(u);var D=!1}catch{D=!0}if(D){D=console;var A=D.error,j=typeof Symbol=="function"&&Symbol.toStringTag&&u[Symbol.toStringTag]||u.constructor.name||"Object";return A.call(D,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",j),o(u)}}function i(u){if(u===M)return"<>";if(typeof u=="object"&&u!==null&&u.$$typeof===F)return"<...>";try{var D=e(u);return D?"<"+D+">":"<...>"}catch{return"<...>"}}function a(){var u=w.A;return u===null?null:u.getOwner()}function c(){return Error("react-stack-top-frame")}function d(u){if(s.call(u,"key")){var D=Object.getOwnPropertyDescriptor(u,"key").get;if(D&&D.isReactWarning)return!1}return u.key!==void 0}function f(u,D){function A(){Y||(Y=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",D))}A.isReactWarning=!0,Object.defineProperty(u,"key",{get:A,configurable:!0})}function y(){var u=e(this.type);return V[u]||(V[u]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),u=this.props.ref,u!==void 0?u:null}function m(u,D,A,j,B,P){var N=A.ref;return u={$$typeof:p,type:u,key:D,props:A,_owner:j},(N!==void 0?N:null)!==null?Object.defineProperty(u,"ref",{enumerable:!1,get:y}):Object.defineProperty(u,"ref",{enumerable:!1,value:null}),u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(u,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(u,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:B}),Object.defineProperty(u,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:P}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u}function k(u,D,A,j,B,P){var N=D.children;if(N!==void 0)if(j)if(S(N)){for(j=0;j<N.length;j++)g(N[j]);Object.freeze&&Object.freeze(N)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else g(N);if(s.call(D,"key")){N=e(u);var Z=Object.keys(D).filter(function(J){return J!=="key"});j=0<Z.length?"{key: someKey, "+Z.join(": ..., ")+": ...}":"{key: someKey}",L[N+j]||(Z=0<Z.length?"{"+Z.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,j,N,Z,N),L[N+j]=!0)}if(N=null,A!==void 0&&(r(A),N=""+A),d(D)&&(r(D.key),N=""+D.key),"key"in D){A={};for(var G in D)G!=="key"&&(A[G]=D[G])}else A=D;return N&&f(A,typeof u=="function"?u.displayName||u.name||"Unknown":u),m(u,N,A,a(),B,P)}function g(u){v(u)?u._store&&(u._store.validated=1):typeof u=="object"&&u!==null&&u.$$typeof===F&&(u._payload.status==="fulfilled"?v(u._payload.value)&&u._payload.value._store&&(u._payload.value._store.validated=1):u._store&&(u._store.validated=1))}function v(u){return typeof u=="object"&&u!==null&&u.$$typeof===p}var h=x,p=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),_=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),O=Symbol.for("react.client.reference"),w=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,s=Object.prototype.hasOwnProperty,S=Array.isArray,b=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(u){return u()}};var Y,V={},U=h.react_stack_bottom_frame.bind(h,c)(),E=b(i(c)),L={};Q.Fragment=M,Q.jsx=function(u,D,A){var j=1e4>w.recentlyCreatedOwnerStacks++;return k(u,D,A,!1,j?Error("react-stack-top-frame"):U,j?b(i(u)):E)},Q.jsxs=function(u,D,A){var j=1e4>w.recentlyCreatedOwnerStacks++;return k(u,D,A,!0,j?Error("react-stack-top-frame"):U,j?b(i(u)):E)}})()),Q}var fe;function qe(){return fe||(fe=1,process.env.NODE_ENV==="production"?te.exports=Ue():te.exports=Ze()),te.exports}var t=qe();const le=({x:e,y:o,items:r,onClose:i,...a})=>{const c=x.useRef(null),[d,f]=x.useState(null);x.useEffect(()=>{const h=p=>{c.current&&!c.current.contains(p.target)&&i()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i]);const m=(()=>{if(!c.current)return{x:e,y:o};const h=c.current.offsetWidth,p=c.current.offsetHeight,l=window.innerWidth,M=window.innerHeight;let C=e,I=o;return C+h>l&&(C=e-h),I+p>M&&(I=o-p),{x:C,y:I}})(),k=(h,p)=>{h.submenu?f(d===p?null:p):h.action&&(h.action(),i())},g=h=>{r[h].submenu&&f(h)},v=h=>{const p=h.relatedTarget;c.current?.contains(p)||f(null)};return t.jsx(Xe,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:m.y,left:m.x},onClick:h=>h.stopPropagation(),onMouseLeave:v,...a,children:r.map((h,p)=>t.jsxs(Ge,{$hasSubmenu:!!h.submenu,$disabled:h.disabled,children:[t.jsx(Je,{onClick:l=>{l.stopPropagation(),h.disabled||k(h,p)},onMouseEnter:()=>!h.disabled&&g(p),whileHover:h.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:h.color,$disabled:h.disabled,children:t.jsxs(Ke,{children:[h.label,h.submenu&&t.jsx(Qe,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),h.submenu&&d===p&&t.jsx(et,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(le,{x:0,y:-p*40,items:h.submenu,onClose:()=>f(null)})})]},p))})},Xe=n(X.motion.div)`
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
`,tt=({columns:e,data:o,onRowDoubleClick:r,contextMenuActions:i=[],onSort:a,sortConfig:c,onRowClick:d,selectedRow:f,fixedHeight:y,hasTotalsRow:m,debtChecker:k,rowStyles:g={},isLoading:v})=>{const[h,p]=x.useState(null),[l,M]=x.useState(null),C=x.useRef(null),I=x.useRef(null),T=500,_=f!==void 0?f:h,R=E=>{!e[E].isSortable||!a||a(E)},W=k||(E=>{const L=E[8];return typeof L=="string"?parseFloat(L.replace(/[^\d.]/g,""))>0:!1}),z=E=>{f===void 0&&p(E===_?null:E),d&&d(o[E],E)},F=(E,L)=>{r&&r(E,L)},H=(E,L)=>{if(i.length===0)return;E.preventDefault();const u="touches"in E?E.touches[0].clientX:E.clientX,D="touches"in E?E.touches[0].clientY:E.clientY;M({x:u,y:D,rowIndex:L})},O=(E,L)=>{E.preventDefault(),H(E,L)},w=(E,L)=>{i.length!==0&&(I.current&&clearTimeout(I.current),I.current=window.setTimeout(()=>{H(E,L)},T))},s=()=>{I.current&&(clearTimeout(I.current),I.current=null)},S=()=>{I.current&&window.clearTimeout(I.current)},b=()=>{M(null)};x.useEffect(()=>{const E=()=>{l&&b()};return document.addEventListener("click",E),()=>{document.removeEventListener("click",E),I.current&&clearTimeout(I.current)}},[l]);const Y=(E,L,u)=>{if(L)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const D=g[E]||{};return E===_?{backgroundColor:D.backgroundColor||"#007D88",color:D.color||"#FFFFFF",fontWeight:D.fontWeight||"normal"}:u?{backgroundColor:D.backgroundColor||"#E8D8D8",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"}:o[E][o[E].length-1]===!1?{backgroundColor:D.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:D.fontWeight||"normal"}:{backgroundColor:D.backgroundColor||"#FFFFFF",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"}},V=(E,L,u)=>{if(L)return"#FFFFFF";const D=Y(E,L,u);return D.hoverBackgroundColor?D.hoverBackgroundColor:E===_?"#007D88":u?"#E8D8D8CC":o[E][o[E].length-1]===!1?"#51D5B4CC":"#F3F4F6"},U=()=>{if(!l||i.length===0)return null;const E=(typeof i=="function"?i(o[l.rowIndex]):i).filter(L=>typeof L=="object"&&(typeof L.shouldShow!="function"||L.shouldShow(o[l.rowIndex])));return E.length===0?null:t.jsx(st,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:L=>L.stopPropagation(),children:t.jsx(le,{items:E.map(L=>{const u={label:L.label,color:L.color,disabled:L.disabled};return L.getSubmenu?u.submenu=L.getSubmenu(o[l.rowIndex]):L.action&&(u.action=()=>{L.action(o[l.rowIndex],l.rowIndex),b()}),u}),onClose:b,x:0,y:0})})};return t.jsx(rt,{ref:C,children:v?t.jsx(nt,{children:t.jsx(ot,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(it,{children:[t.jsx(at,{children:t.jsx(ge,{children:e.map((E,L)=>!E.isHidden&&t.jsx(ct,{$isSortable:E.isSortable,$isActive:c?.key===L,onClick:()=>R(L),$align:E.align||"center",$isFirst:L===0,$isLast:L===e.length-1,children:t.jsxs(dt,{$align:E.align||"center",children:[E.name,E.isSortable&&t.jsx(ut,{$direction:c?.key===L?c.direction:"asc",animate:{rotate:c?.key===L&&c.direction==="desc"?180:0,color:c?.key===L?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},L))})}),t.jsx(lt,{$fixedHeight:y,children:t.jsx(X.AnimatePresence,{children:o.map((E,L)=>{const u=!!(m&&L===o.length-1),D=!!(!u&&W(E)),A=Y(L,u,D),j=V(L,u,D);return t.jsx(ge,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:A.backgroundColor||"#FFFFFF",color:A.color||"inherit",fontWeight:A.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:L===o.length-1,$isSelected:L===_,$isTotalsRow:u,onClick:()=>!u&&z(L),onDoubleClick:()=>!u&&F(E,L),onContextMenu:B=>!u&&O(B,L),onTouchStart:B=>!u&&w(B,L),onTouchEnd:s,onTouchMove:S,whileHover:u?{}:{backgroundColor:j,transition:{duration:.15}},style:{backgroundColor:A.backgroundColor||"#FFFFFF",color:A.color||"inherit",fontWeight:A.fontWeight||"normal"},children:E.map((B,P)=>!e[P]?.isHidden&&t.jsx(pt,{$align:e[P]?.align||"center",$isFirst:P===0,$isLast:P===E.length-1,$isTotalsCell:u,$isBeforeTotals:u&&P<E.findIndex(N=>N==="Итого:"),children:B},P))},`row-${L}`)})})})]}),t.jsx(X.AnimatePresence,{children:U()})]})})},nt=n.div`
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
`,ge=n(X.motion.tr)`
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
`,ce="/api",gt="https://web.waypay.one:5001",bt="https://file.waypay.one/";async function q(e,o={}){const{method:r="GET",body:i,headers:a={},token:c,withCredentials:d=!0,isFormData:f=!1}=o,y=async k=>{const g={...a};f||(g["Content-Type"]="application/json"),k&&(g.Authorization=`Bearer ${k}`);const v=e.startsWith("http")?e:`${ce}${e}`;let h;return i&&(f?h=i:h=JSON.stringify(i)),await fetch(v,{method:r,headers:g,body:h,credentials:d?"include":"same-origin"})},m=async(k,g=!0)=>{const v=await y(k);if(v.ok){if(v.status===204)return null;const p=await v.text();if(!p)return null;try{return JSON.parse(p)}catch{return p}}if(v.status===401&&g){const p=await Ie();if(p)return m(p,!1)}let h=`Request failed with status ${v.status}`;try{const p=await v.text();if(p)try{const l=JSON.parse(p);l&&typeof l.error=="string"?h=l.error:typeof l=="string"?h=l:typeof l?.message=="string"&&(h=l.message)}catch{h=p}}catch{}throw new Error(h)};return m(c)}async function Ie(){const e=await fetch(`${ce}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const mt={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await q("/auth/session/info",{method:"GET"})}catch{return null}},async logout(e){try{await q("/auth/session/revoke",{method:"POST",headers:{"Content-Type":"application/json"},body:e?{token_id:e}:{}})}catch(o){throw console.error("Logout error:",o),o}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},wt=n.button`
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
`,vt=({children:e,onClick:o,disabled:r,...i})=>t.jsxs(wt,{onClick:o,disabled:r,...i,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"currentColor"})}),e]}),oe=({children:e="Подтвердить",icon:o,disabled:r=!1,bg:i,hoverBg:a,disabledBg:c,textColor:d,fullWidth:f=!1,minWidth:y,width:m,isPrimary:k=!0,...g})=>{const h=i?{bg:i,hoverBg:a||i,disabledBg:c||i,textColor:d||(k?"white":"black")}:k?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(yt,{disabled:r,$bg:h.bg,$hoverBg:h.hoverBg,$disabledBg:h.disabledBg,$textColor:h.textColor,$fullWidth:f,$minWidth:y,$width:m,...g,children:[o&&t.jsx(kt,{children:o}),t.jsx("span",{children:e})]})},yt=n.button`
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
`,kt=n.span`
  display: inline-flex;
  align-items: center;
`,jt=({onClick:e,tooltip:o,size:r=32})=>t.jsx(Ct,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),Ct=n.button`
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
`,$t=({onClick:e,tooltip:o,size:r=32})=>t.jsx(St,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),St=n.button`
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
`,Mt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),Et=({children:e="Экспорт",icon:o=t.jsx(Mt,{}),onExport:r,isExporting:i=!1,exportProgress:a=0,...c})=>{const d=async f=>{if(r)try{await r()}catch(y){console.error("Export error:",y)}c.onClick&&c.onClick(f)};return t.jsx(Dt,{...c,onClick:d,disabled:i||c.disabled,children:i?t.jsxs(Lt,{children:[t.jsxs("span",{children:["Экспорт... ",a,"%"]}),t.jsx(Tt,{progress:a})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},Dt=n.button`
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
`,Lt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,Tt=n.div`
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
`,It=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:a=!1,errorMessage:c,options:d,name:f,disabled:y=!1,required:m=!1,...k})=>{const[g,v]=x.useState(!1),[h,p]=x.useState(!1),l=x.useRef(null),M=!!(o&&!r&&!g),C=$=>{i&&!y&&i({target:{value:$,name:f}}),p(!1),v(!1)},I=$=>{l.current&&!l.current.contains($.target)&&(p(!1),v(!1))},T=()=>{y||(p(!h),v(!h))};x.useEffect(()=>(document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[]);const _=d.find($=>$.value===r),R=_?_.label:"";return t.jsxs(Pt,{ref:l,...k,children:[t.jsxs(Rt,{children:[t.jsxs(zt,{hasError:a,isOpen:h,disabled:y,onClick:T,onFocus:()=>!y&&v(!0),onBlur:()=>v(!1),tabIndex:y?-1:0,children:[t.jsx(Bt,{children:R||e&&t.jsx(At,{children:e})}),t.jsx(Ft,{isOpen:h,disabled:y,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:y?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h&&t.jsx(_t,{children:d.map($=>t.jsxs(Ot,{$isSelected:$.value===r,onClick:()=>C($.value),children:[t.jsx(Wt,{$isSelected:$.value===r,children:$.value===r&&t.jsx(Nt,{})}),t.jsx(Ht,{children:$.label})]},$.value))})]}),o&&t.jsx(Yt,{isVisible:M,children:o}),a&&c&&t.jsx(Vt,{children:c}),t.jsx(Ut,{name:f,value:r||"",onChange:()=>{},tabIndex:-1,required:m,children:d.map($=>t.jsx("option",{value:$.value,children:$.label},$.value))})]})},Pt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Rt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,zt=n.div`
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
`,Bt=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,At=n.span`
  color: rgba(80, 85, 92, 1);
`,Ft=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,_t=n.div`
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
`,Ot=n.div`
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
`,Wt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Nt=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Ht=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Yt=n.label`
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
`,Vt=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ut=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Zt=({checked:e=!1,onChange:o,className:r,label:i,disabled:a=!1})=>{const[c,d]=x.useState(!1),f=()=>{a||!o||o(!e)},y=m=>{a||(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),f())};return t.jsxs(qt,{className:r,onClick:f,onKeyPress:y,tabIndex:a?-1:0,disabled:a,children:[t.jsx(Xt,{checked:e,isFocused:c,disabled:a,onMouseEnter:()=>!a&&d(!0),onMouseLeave:()=>!a&&d(!1),onFocus:()=>!a&&d(!0),onBlur:()=>!a&&d(!1),children:e&&t.jsx(Jt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:a,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:a?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Gt,{disabled:a,children:i})]})},qt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Xt=n.div`
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
`,Gt=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Jt=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Kt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",be=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Qt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],se=({prefix:e="Дата:",value:o="",placeholder:r="Выберите дату",onChange:i,onReset:a})=>{const[c,d]=x.useState(!1),[f,y]=x.useState(new Date),[m,k]=x.useState(o?new Date(o):null),[g,v]=x.useState(!1),[h,p]=x.useState(!1),l=x.useRef(null),M=x.useRef(null),C=x.useRef(null);x.useEffect(()=>{const s=S=>{l.current&&!l.current.contains(S.target)&&d(!1),M.current&&!M.current.contains(S.target)&&v(!1),C.current&&!C.current.contains(S.target)&&p(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),x.useEffect(()=>{k(o?new Date(o):null)},[o]);const I=s=>{const S=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate()));k(s);const b=S.toISOString().split("T")[0];i?.(b),d(!1)},T=()=>{const s=new Date;y(s);const b=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate())).toISOString().split("T")[0];i?.(b),d(!1)},_=()=>{k(null),i?.(""),a?.(),d(!1)},R=s=>{const S=new Date(f);S.setMonth(s),y(S),v(!1)},$=s=>{const S=new Date(f);S.setFullYear(s),y(S),p(!1)},W=()=>{const s=f.getFullYear(),S=f.getMonth(),b=new Date(s,S,1),V=new Date(s,S+1,0).getDate(),U=b.getDay()===0?6:b.getDay()-1,E=[],L=35,u=new Date(s,S,0).getDate();for(let A=0;A<U;A++){const j=u-U+A+1,B=new Date(s,S-1,j),P=!!(m&&B.getDate()===m.getDate()&&B.getMonth()===m.getMonth()&&B.getFullYear()===m.getFullYear());E.push(t.jsx(re,{selected:P,onClick:()=>I(B),otherMonth:!0,children:j},`prev-${j}`))}for(let A=1;A<=V;A++){const j=new Date(s,S,A),B=!!(m&&j.getDate()===m.getDate()&&j.getMonth()===m.getMonth()&&j.getFullYear()===m.getFullYear());E.push(t.jsx(re,{selected:B,onClick:()=>I(j),children:A},`current-${A}`))}const D=L-E.length;for(let A=1;A<=D;A++){const j=new Date(s,S+1,A),B=!!(m&&j.getDate()===m.getDate()&&j.getMonth()===m.getMonth()&&j.getFullYear()===m.getFullYear());E.push(t.jsx(re,{selected:B,onClick:()=>I(j),otherMonth:!0,children:A},`next-${A}`))}return E},z=()=>m?m.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):r,F=()=>{const s=new Date().getFullYear(),S=[];for(let b=s-10;b<=s+10;b++)S.push(b);return S},H=s=>{s.preventDefault(),s.stopPropagation(),v(!g),p(!1)},O=s=>{s.preventDefault(),s.stopPropagation(),p(!h),v(!1)},w=s=>{const S=s==="next"?1:-1,b=new Date(f);b.setMonth(b.getMonth()+S),y(b)};return t.jsxs(en,{ref:l,children:[t.jsxs(tn,{onClick:()=>d(!c),children:[e&&t.jsx(nn,{children:e}),t.jsx(on,{isEmpty:!m,children:z()}),t.jsx(rn,{src:Kt,alt:"Календарь"})]}),c&&t.jsxs(sn,{className:"calendar-container",children:[t.jsxs(an,{children:[t.jsx(ye,{onClick:s=>{s.preventDefault(),s.stopPropagation(),w("prev")},onMouseDown:s=>s.preventDefault(),children:t.jsx(ke,{direction:"right"})}),t.jsxs(ln,{children:[t.jsxs(un,{ref:M,children:[t.jsxs(cn,{onClick:s=>H(s),onMouseDown:s=>s.preventDefault(),children:[be[f.getMonth()],t.jsx(me,{$open:g})]}),g&&t.jsx(we,{$width:120,onClick:s=>s.stopPropagation(),children:be.map((s,S)=>t.jsx(ve,{$selected:S===f.getMonth(),onClick:b=>{b.stopPropagation(),R(S)},children:s},s))})]}),t.jsxs(pn,{ref:C,children:[t.jsxs(dn,{onClick:s=>O(s),onMouseDown:s=>s.preventDefault(),children:[f.getFullYear(),t.jsx(me,{$open:h})]}),h&&t.jsx(we,{$width:80,onClick:s=>s.stopPropagation(),children:F().map(s=>t.jsx(ve,{$selected:s===f.getFullYear(),onClick:S=>{S.stopPropagation(),$(s)},children:s},s))})]})]}),t.jsx(ye,{onClick:s=>{s.preventDefault(),s.stopPropagation(),w("next")},onMouseDown:s=>s.preventDefault(),children:t.jsx(ke,{direction:"left"})})]}),t.jsx(xn,{children:Qt.map(s=>t.jsx(hn,{children:s},s))}),t.jsx(fn,{children:W()}),t.jsxs(gn,{children:[t.jsx(je,{onClick:_,children:"Удалить"}),t.jsx(je,{onClick:T,children:"Сегодня"})]})]})]})},en=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,tn=n.div`
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
`,nn=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,on=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,rn=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,sn=n.div`
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
`,an=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,ln=n.div`
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
`,cn=n(Pe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,dn=n(Pe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,un=n.div`
  position: relative;
`,pn=n.div`
  position: relative;
`,me=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,we=n.div`
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
`,ve=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,ye=n.button`
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
`,ke=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,xn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,hn=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,fn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,re=n.div`
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
`,gn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,je=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,bn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,mn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,wn=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,de=({placeholder:e="",customPlaceholder:o,value:r,inputType:i="text",onChange:a,hasError:c=!1,errorMessage:d,...f})=>{const[y,m]=x.useState(!1),k=!!(o&&!r&&!y),g=p=>{if(!a)return;let l=p.target.value;switch(i){case"number":/^\d*$/.test(l)&&a?.(p);break;case"rubles":{const C=p.target.selectionStart,I=p.target.value;let T=I.replace(/[^\d]/g,"");if(T===""){p.target.value="",a(p);break}const _=parseInt(T,10);if(!isNaN(_)){let R=_.toLocaleString("ru-RU");R+=" ₽";const $=v(I,C||0),W=h(R,$);p.target.value=R,a(p),setTimeout(()=>{p.target.setSelectionRange(W,W)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const C=l.split(".");C.length>2&&(l=C[0]+"."+C.slice(1).join("")),C.length===2&&C[1].length>2&&(l=C[0]+"."+C[1].slice(0,2));const I=parseFloat(l);if(isNaN(I)||(I>100?l="100":I<0&&(l="0")),l&&l!==""){l+=" %";const T=p.target.selectionStart||0,_=l.replace(" %","");p.target.value=l,a(p),setTimeout(()=>{T<_.length&&p.target.setSelectionRange(T,T)},0)}else p.target.value=l,a(p);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let M=l.split(" ").filter(C=>C.length>0);M=M.slice(0,3),l=M.map(C=>{if(C.startsWith("-")&&(C=C.substring(1)),(C.match(/-/g)||[]).length>1){const T=C.split("-");C=T[0]+"-"+T.slice(1).join("")}return C.includes("-")?C.split("-").map((T,_)=>T.length===0?"":(_>0,T[0].toUpperCase()+T.slice(1).toLowerCase())).join("-"):C.length>0?C[0].toUpperCase()+C.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&p.target.value.length>0&&p.target.value[p.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),p.target.value=l,a(p);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),p.target.value=l,a(p);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),r?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),p.target.value=l,a(p);break}default:a(p);break}},v=(p,l)=>{let M=0;for(let C=0;C<Math.min(l,p.length);C++)/\d/.test(p[C])&&M++;return M},h=(p,l)=>{let M=0;for(let C=0;C<p.length;C++){if(M>=l)return C;/\d/.test(p[C])&&M++}return p.length};return t.jsxs(vn,{children:[t.jsx(yn,{...f,value:r,placeholder:k?"":e,onFocus:()=>m(!0),onBlur:p=>{m(!1),f.onBlur?.(p)},onChange:g,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),o&&t.jsx(kn,{isVisible:k,children:o}),c&&d&&t.jsx(jn,{children:d})]})},vn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,yn=n.input`
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
`,kn=n.label`
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
`,jn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Cn=({total:e,current:o=1,onChange:r,itemsPerPage:i=10})=>{const a=Math.ceil(e/i),[c,d]=x.useState(o),f=m=>{m<1||m>a||m===c||(d(m),r?.(m))},y=()=>{const m=[];let g=1,v=a;if(a>5){const h=Math.floor(2.5);g=Math.max(c-h,1),v=Math.min(c+h,a),c<=h+1?v=5:c>=a-h&&(g=a-5+1)}for(let h=g;h<=v;h++)m.push(t.jsx(ee,{active:h===c,onClick:()=>f(h),children:h},h));return g>1&&(g>2&&m.unshift(t.jsx(ee,{children:"..."},"start-ellipsis")),m.unshift(t.jsx(ee,{active:c===1,onClick:()=>f(1),children:"1"},1))),v<a&&(v<a-1&&m.push(t.jsx(ee,{children:"..."},"end-ellipsis")),m.push(t.jsx(ee,{active:a===c,onClick:()=>f(a),children:a},a))),m};return t.jsxs($n,{children:[t.jsx(Ce,{disabled:c===1,onClick:()=>f(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),y(),t.jsx(Ce,{disabled:c===a,onClick:()=>f(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===a?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},$n=n.div`
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
`,Ce=n.button`
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
`,Sn=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:a=!1,errorMessage:c,rows:d=3,...f})=>{const[y,m]=x.useState(!1),k=!!(o&&!r&&!y);return t.jsxs(Mn,{children:[t.jsx(En,{...f,value:r,placeholder:k?"":e,onFocus:()=>m(!0),onBlur:g=>{m(!1),f.onBlur?.(g)},onChange:i,hasError:a,rows:d}),o&&t.jsx(Dn,{isVisible:k,children:o}),a&&c&&t.jsx(Ln,{children:c})]})},Mn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,En=n.textarea`
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
`,Dn=n.label`
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
`,Ln=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Re=({title:e,onClose:o,onCancel:r,onSave:i,children:a,isSaveDisabled:c=!1,isSubmitting:d=!1,mode:f="create",hideSaveButton:y=!1,hideCanselButton:m=!1,width:k="560px",saveButtonText:g="Сохранить",customLayout:v})=>{const h=f==="view",p=x.useRef(null);x.useEffect(()=>{const C=T=>{T.key==="Escape"&&o()};document.addEventListener("keydown",C);const I=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>p.current?.focus(),0),()=>{document.removeEventListener("keydown",C),document.body.style.overflow=I}},[o]);const l=C=>{C.target===C.currentTarget&&o()},M=C=>{C.preventDefault(),r()};return t.jsx(Tn,{onMouseDown:l,role:"presentation",children:t.jsxs(In,{ref:p,$width:k,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(ze,{children:[t.jsx(Be,{children:e}),t.jsx(Pn,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),v?t.jsx(Rn,{children:v}):null,t.jsxs(zn,{onSubmit:i,children:[t.jsx(Bn,{children:a}),t.jsxs(An,{children:[t.jsx(Fn,{children:m?null:t.jsx(On,{isPrimary:!1,onClick:M,children:"Отменить"})}),t.jsx(_n,{children:!h&&!y?t.jsx(Wn,{type:"submit",disabled:c||d,children:d?"Сохранение...":g}):null})]})]})]})})},Tn=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,In=n.div`
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
`,Pn=n.button`
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
`,Rn=n.div`
  padding: 12px 18px 0 18px;
`,zn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,Bn=n.div`
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
`,An=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,Fn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,_n=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,On=n(oe)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Wn=n(oe)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Nn=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Hn=({value:e="",placeholder:o="Выберите период",options:r=Nn,showCustomPeriodButton:i=!0,onChange:a,onCustomPeriodClick:c})=>{const[d,f]=x.useState(!1),[y,m]=x.useState(!1),[k,g]=x.useState(""),[v,h]=x.useState(""),[p,l]=x.useState(""),M=x.useRef(null),C=x.useRef(null);x.useEffect(()=>{if(e==="Custom"&&v&&p){const z=$(v),F=$(p);g(`С ${z} по ${F}`)}else{const z=r.find(F=>F.value===e);g(z?z.label:"")}},[e,r,v,p]),x.useEffect(()=>{const z=F=>{M.current&&!M.current.contains(F.target)&&f(!1),y&&C.current&&!C.current.contains(F.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(w=>w.contains(F.target))||m(!1))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[y]);const I=z=>{a?.(z.value),f(!1)},T=()=>{f(!1),c?c():m(!0)},_=()=>{a?.(""),g(""),h(""),l("")},R=()=>{if(v&&p){const z=$(v),F=$(p),H=`С ${z} по ${F}`;a?.("Custom",v,p),g(H),m(!1)}},$=z=>{const F=new Date(z),H=String(F.getDate()).padStart(2,"0"),O=String(F.getMonth()+1).padStart(2,"0"),w=F.getFullYear();return`${H}.${O}.${w}`},W=()=>t.jsxs(to,{children:[t.jsx(ze,{style:{margin:0},children:t.jsx(Be,{style:{margin:0},children:"Выбор периода"})}),t.jsx(no,{onClick:_,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Yn,{ref:M,children:[t.jsxs(Vn,{onClick:()=>f(!d),children:[t.jsx(Un,{children:k||o}),t.jsx(Zn,{$isOpen:d,children:"▼"})]}),d&&t.jsxs(qn,{children:[r.map(z=>t.jsxs(Xn,{onClick:()=>I(z),$isSelected:e===z.value,children:[t.jsx(Gn,{$isSelected:e===z.value,children:e===z.value&&t.jsx(Jn,{})}),t.jsx(Kn,{children:z.label})]},z.id)),i&&t.jsx(Qn,{onClick:T,children:"Другой период"})]})]}),y&&t.jsx("div",{ref:C,children:t.jsx(Re,{title:"",onClose:()=>m(!1),onCancel:()=>m(!1),onSave:z=>{z.preventDefault(),R()},saveButtonText:"Выбрать",customLayout:t.jsx(W,{}),children:t.jsxs(eo,{children:[t.jsx($e,{children:t.jsx(se,{value:v,onChange:z=>h(z)})}),t.jsx($e,{children:t.jsx(se,{value:p,onChange:z=>l(z)})})]})})})]})},Yn=n.div`
  position: relative;
  width: 245px;
`,Vn=n.div`
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
`,Un=n.span`
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
`,qn=n.div`
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
`,Xn=n.div`
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
`,Gn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Jn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Kn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Qn=n.div`
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
`,eo=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,$e=n.div`
  flex: 1;
`,to=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,no=n.button`
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
`,oo=({name:e,value:o,onChange:r,onBlur:i,onKeyPress:a,placeholder:c="8 (999) 500-50-50",customPlaceholder:d,tabIndex:f,disabled:y=!1,hasError:m=!1,errorMessage:k})=>{const[g,v]=x.useState(!1),h=x.useRef(null),p=!!(d&&!o&&!g),l=T=>{const R=T.replace(/\D/g,"").slice(0,11);let $="";return R.length>0&&($+="8"),R.length>1&&($+=` (${R.slice(1,4)}`),R.length>4&&($+=`) ${R.slice(4,7)}`),R.length>7&&($+=`-${R.slice(7,9)}`),R.length>9&&($+=`-${R.slice(9,11)}`),$},M=T=>{const _=l(T.target.value),R={...T,target:{...T.target,name:e,value:_}};r(R)},C=T=>{v(!1),i?.(T)},I=T=>{a?.(T)};return t.jsxs(ro,{children:[t.jsx(io,{ref:h,name:e,type:"tel",value:o,onChange:M,onKeyPress:I,placeholder:p?"":c,maxLength:18,tabIndex:f,disabled:y,hasError:m,onFocus:()=>v(!0),onBlur:C,inputMode:"tel"}),d&&t.jsx(so,{isVisible:p,children:d}),m&&k&&t.jsx(ao,{children:k})]})},ro=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,io=n.input`
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
`,so=n.label`
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
`,ao=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,lo=({tabs:e,activeTab:o,onChange:r,addButton:i,fontSize:a=14})=>{const c=e.find(d=>d.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(co,{children:t.jsxs(uo,{children:[e.map(d=>t.jsxs(po,{$isActive:o===d.id,onClick:()=>r(d.id),$fontSize:a,children:[d.label,o===d.id&&t.jsx(xo,{})]},d.id)),i&&t.jsx(ho,{children:i})]})}),c&&t.jsx(fo,{children:c})]})},co=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,uo=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,po=n.li`
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
`,xo=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,ho=n.li`
  margin-left: auto;
  padding: 4px 0;
`,fo=n.div`
  margin-top: 20px;
`,go=({mode:e,primaryValue:o,secondaryValue:r,placeholder:i="Выберите значение",onSelect:a,onClear:c,disabled:d=!1,hasError:f=!1,errorMessage:y="",customIcon:m})=>{const g=m||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(vo,{children:[t.jsx(yo,{children:o||"Не указано"}),r&&t.jsx(ko,{children:r})]}):t.jsxs(bo,{children:[t.jsxs(mo,{children:[t.jsx(wo,{type:"text",value:o||"",placeholder:i,readOnly:!0,disabled:d}),o&&!d&&t.jsx(Co,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!d&&t.jsx(jo,{type:"button",onClick:a,"aria-label":"Выбрать",children:g}),f&&y&&t.jsx($o,{children:y})]})},bo=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,mo=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,wo=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,vo=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,yo=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,ko=n.span`
  font-size: 13px;
  color: #666;
`,jo=n.button`
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
`,Co=n.button`
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
`,$o=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,ue=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,So=({total:e})=>t.jsx("div",{children:t.jsxs(Mo,{children:["Всего: ",e]})}),Mo=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,Eo=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,Do=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,Lo=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,To=n.span`
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
`,Io=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Po=({checked:e,onChange:o,disabled:r})=>{const i=()=>{r||o(!e)};return t.jsxs(Lo,{children:[t.jsx(Io,{checked:e,onChange:i,disabled:r}),t.jsx(To,{checked:e,disabled:r})]})},Ro=({id:e,name:o,checked:r,onChange:i,children:a})=>t.jsxs(zo,{htmlFor:e,children:[t.jsx(Bo,{type:"radio",id:e,name:o,checked:r,onChange:i}),a]}),zo=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Bo=n.input`
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
`,Ao=({percentage:e,onChange:o,draggable:r=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const a=x.useRef(null),[c,d]=x.useState(!1),f=g=>{!r||!o||(g.preventDefault(),d(!0),k(g))},y=g=>{!c||!o||k(g)},m=()=>{d(!1)},k=g=>{if(!a.current||!o)return;const v=a.current.getBoundingClientRect();let p=(g.clientX-v.left)/v.width*100;p=Math.max(0,Math.min(100,p)),o(Math.round(p))};return x.useEffect(()=>{if(c)return document.addEventListener("mousemove",y),document.addEventListener("mouseup",m),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",m)}},[c]),t.jsxs(Fo,{ref:a,$draggable:r,onMouseDown:f,children:[t.jsx(_o,{$secondaryColor:i.secondary}),t.jsx(Oo,{$percentage:e,$primaryColor:i.primary}),r&&t.jsx(Wo,{$percentage:e,$primaryColor:i.primary})]})},Fo=n.div`
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
`,_o=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Oo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Wo=n.div`
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
`,No=["zoomControl","fullscreenControl"];let ie=null;const Ho=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(ie||(ie=new Promise((o,r)=>{const i=document.createElement("script"),a=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${a}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):r(new Error("Yandex Maps failed to load"))},i.onerror=()=>r(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),ie),Yo=({onLocationSelect:e,initialAddress:o="",initialLat:r=55.751244,initialLon:i=37.618423,apiKey:a,zoom:c=12,height:d=400,width:f="100%",inputPlaceholder:y="Введите адрес или название места",searchButtonLabel:m="Найти",draggablePlacemark:k=!0,controls:g=No,showSearch:v=!0,className:h,style:p,onError:l})=>{const[M,C]=x.useState(null),[I,T]=x.useState(o),[_,R]=x.useState(o),[$,W]=x.useState(!1),z=x.useRef(null);x.useEffect(()=>{let O=!1,w;return(async()=>{try{const S=await Ho(a);if(O||!z.current)return;w=new S.Map(z.current,{center:[r,i],zoom:c,controls:g});const b=new S.Placemark([r,i],{},{draggable:k});w.geoObjects.add(b),w.events.add("click",Y=>{const V=Y.get("coords");F(V,b,w)}),b.events.add("dragend",()=>{const Y=b.geometry.getCoordinates();F(Y,b,w)}),C(w),W(!0)}catch(S){l&&S instanceof Error&&l(S)}})(),()=>{O=!0,w&&w.destroy()}},[a,r,i,c,g,k,l]);const F=async(O,w,s)=>{if(window.ymaps)try{const Y=(await window.ymaps.geocode(O)).geoObjects.get(0).getAddressLine();w.geometry.setCoordinates(O),s.panTo(O,{flying:!0}),R(Y),T(Y),e(Y,O[0],O[1])}catch(S){l&&S instanceof Error&&l(S)}},H=async()=>{if(!(!I.trim()||!window.ymaps||!M))try{const w=(await window.ymaps.geocode(I)).geoObjects.get(0);if(w){const s=w.geometry.getCoordinates(),S=w.properties.get("boundedBy");M.setBounds(S,{checkZoomRange:!0});const b=new window.ymaps.Placemark(s,{},{draggable:k});M.geoObjects.removeAll(),M.geoObjects.add(b);const Y=w.getAddressLine();R(Y),e(Y,s[0],s[1]),b.events.add("dragend",()=>{const V=b.geometry.getCoordinates();F(V,b,M)})}}catch(O){l&&O instanceof Error&&l(O)}};return t.jsxs(Vo,{className:h,style:p,children:[v&&t.jsxs(Uo,{children:[t.jsx(de,{type:"text",value:I,onChange:O=>T(O.target.value),placeholder:y,onKeyPress:O=>O.key==="Enter"&&H(),disabled:!$}),t.jsx(Zo,{onClick:H,disabled:!$,children:m})]}),t.jsxs(Xo,{children:["Выбранный адрес: ",t.jsx("strong",{children:_||"Не выбран"})]}),t.jsx(qo,{ref:z,$height:d,$width:f}),t.jsx(Go,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Vo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Uo=n.div`
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
`,qo=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Xo=n.div`
  font-size: 14px;
  color: #374151;
`,Go=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,pe=n.h1`
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
`;function ae(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const r=e.replace(/[^\d-]/g,"");if(!r||r==="-"||r==="")return`0${o}`;const i=parseInt(r,10);if(isNaN(i))return`0${o}`;const a=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${a}${o}`:a}function Jo(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Ko=({title:e,data:o,maxValue:r,step:i,height:a=300,titleFontSize:c})=>{const[d,f]=x.useState(null),y=[];for(let k=0;k<=r;k+=i)y.push(k);const m=o.length>0?o[0].bars.map(k=>({name:k.name,color:k.color})):[];return t.jsxs(Qo,{children:[t.jsxs(ue,{style:{marginTop:"0"},children:[t.jsx(pe,{style:{fontSize:c},children:e}),t.jsx(er,{children:m.map((k,g)=>t.jsxs(tr,{children:[t.jsx(nr,{color:k.color}),t.jsx(or,{children:k.name})]},g))})]}),t.jsxs(rr,{height:a,children:[t.jsx(ir,{children:y.map((k,g)=>t.jsx(sr,{children:k.toLocaleString()},g))}),t.jsxs(ar,{children:[t.jsxs(lr,{children:[y.map((k,g)=>{const v=k/r*100;return t.jsx(cr,{position:100-v},`line-${g}`)}),o.map((k,g)=>t.jsxs(dr,{onMouseEnter:()=>f(g),onMouseLeave:()=>f(null),children:[k.bars.map((v,h)=>{const p=k.bars.slice(h+1).reduce((l,M)=>l+M.value,0);return t.jsx(ur,{height:v.value/r*100,offset:p/r*100,color:v.color,isHovered:d!==null&&d!==g},h)}),d===g&&t.jsxs(hr,{children:[t.jsxs(fr,{children:[t.jsxs(gr,{children:["Всего: ",ae(k.total.toString())]}),k.bars.map((v,h)=>t.jsxs(br,{children:[v.name,": ",ae(v.value.toString())]},h))]}),t.jsx(mr,{})]})]},g))]}),t.jsx(pr,{children:o.map((k,g)=>t.jsx(xr,{style:{flex:1,textAlign:"center"},children:k.label},g))})]})]})]})},Qo=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,er=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,tr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,nr=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,or=n.span`
  font-size: 14px;
  color: #4b5563;
`,rr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,ir=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,sr=n.span`
  font-size: 12px;
  color: #6b7280;
`,ar=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,lr=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,cr=n.div`
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
`,dr=n.div`
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
`,ur=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,pr=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,xr=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,hr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,fr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,gr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,br=n.div`
  margin-bottom: 2px;
`,mr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,wr=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,vr=({title:e,data:o,xAxisLabel:r,yAxisLabel:i,maxX:a,maxY:c,minY:d,xStep:f,yStep:y,height:m=300,showLegend:k=!0,xAxisCustomLabels:g,showTooltip:v=!0,titleFontSize:h="30px"})=>{const[p,l]=x.useState(null),[M,C]=x.useState({x:0,y:0}),I=x.useRef(null),T=x.useRef(null),_=Math.max(...o.map(w=>w.x),a),R=[];for(let w=0;w<=_;w+=f)R.push(w);const $=[];for(let w=d;w<=c;w+=y)$.push(w);const W=g||R.map(w=>w.toString()),z=k?Array.from(new Set(o.filter(w=>w.label).map(w=>w.label))).map(w=>{const s=o.find(S=>S.label===w);return{name:w,color:s.color}}):[],F={};o.forEach(w=>{const s=w.label||"default";F[s]||(F[s]=[]),F[s].push(w)});const H=w=>w/_*100,O=w=>{const s=c-d;return 100-(w-d)/s*100};return x.useEffect(()=>{if(p&&T.current){const w=T.current.getBoundingClientRect(),s=H(p.x)/100*w.width,S=O(p.y)/100*w.height;C({x:s+w.left,y:S+w.top})}},[p,a,c,d]),t.jsxs(yr,{children:[t.jsxs(ue,{style:{marginTop:"0"},children:[t.jsx(pe,{style:{fontSize:h},children:e}),k&&z.length>0&&t.jsx(kr,{children:z.map((w,s)=>t.jsxs(jr,{children:[t.jsx(Cr,{color:w.color}),t.jsx($r,{children:w.name})]},s))})]}),t.jsxs(Sr,{height:m,children:[t.jsxs(Mr,{children:[$.map((w,s)=>t.jsx(Er,{children:w.toLocaleString()},s)),t.jsx(Se,{children:i})]}),t.jsxs(Dr,{ref:T,children:[$.map((w,s)=>t.jsx(Lr,{position:O(w)},`hline-${s}`)),Object.values(F).map((w,s)=>w.map((S,b)=>{if(b===0)return null;const Y=w[b-1],V=H(Y.x),U=O(Y.y),E=H(S.x),L=O(S.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${V}%`,y1:`${U}%`,x2:`${E}%`,y2:`${L}%`,stroke:S.color,strokeWidth:"1"})},`line-${s}-${b}`)})),o.map((w,s)=>t.jsx(Tr,{x:H(w.x),y:O(w.y),color:w.color,onMouseEnter:()=>l(w),onMouseLeave:()=>l(null),isHovered:p?.label===w.label},s))]})]}),v&&p&&t.jsxs(Rr,{ref:I,style:{left:M.x,top:M.y},children:[t.jsxs(zr,{children:[p.name&&t.jsx(Br,{children:p.name}),t.jsx(Ar,{children:p.y.toLocaleString()})]}),t.jsx(Fr,{})]}),t.jsxs(Ir,{children:[W.map((w,s)=>{const b=R[s]/_*100;return t.jsx(Pr,{style:{left:`${b}%`,transform:"translateX(-50%)"},children:w},s)}),r&&t.jsx(Se,{children:r})]})]})},yr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,kr=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,jr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Cr=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,$r=n.span`
  font-size: 14px;
  color: #4b5563;
`,Sr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Mr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,Er=n.span`
  font-size: 12px;
  color: #6b7280;
`,Se=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,Dr=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,Lr=n.div`
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
`,Tr=n.div`
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
`,Ir=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Pr=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Rr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${wr} 0.15s ease-out forwards;
`,zr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Br=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Ar=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Fr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,_r=({images:e,initialIndex:o,onClose:r})=>{const[i,a]=x.useState(o),[c,d]=x.useState(0),f=()=>{a(g=>g>0?g-1:e.length-1),d(0)},y=()=>{a(g=>g<e.length-1?g+1:0),d(0)},m=()=>{d(g=>(g+90)%360)},k=g=>{g.key==="Escape"?r():g.key==="ArrowLeft"?f():g.key==="ArrowRight"?y():(g.key==="r"||g.key==="к")&&m()};return t.jsx(Or,{onClick:r,onKeyDown:k,tabIndex:0,children:t.jsxs(Wr,{onClick:g=>g.stopPropagation(),children:[t.jsx(Nr,{onClick:r,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Hr,{children:t.jsx(Yr,{onClick:m,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Vr,{children:[t.jsx(Me,{$position:"left",onClick:f,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Ur,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx(Me,{$position:"right",onClick:y,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Zr,{children:e.map((g,v)=>t.jsx(qr,{$active:v===i,onClick:()=>{a(v),d(0)}},v))})]})})},Or=n.div`
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
`,Wr=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Nr=n.button`
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
`,Hr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Yr=n.button`
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
`,Vr=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Ur=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Me=n.button`
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
`,qr=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ae=({isOpen:e,callPhone:o,error:r,onClose:i})=>{const[a,c]=x.useState(!1);if(!e)return null;const d=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),f=()=>{d?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Xr,{onClick:i,children:t.jsxs(Gr,{onClick:y=>y.stopPropagation(),children:[t.jsx(Jr,{children:"Подтверждение авторизации"}),t.jsx(Ee,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Kr,{onClick:f,title:d?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!d&&a&&t.jsx(Qr,{children:"Скопировано!"})]}),t.jsx(Ee,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),r&&t.jsx(ei,{children:r})]})})},Xr=n.div`
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
`,Gr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Jr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Ee=n.p`
  margin-bottom: 15px;
  color: #555;
`,Kr=n.div`
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
`,Qr=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,ei=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,Fe=x.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),ti=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),ni=({items:e,bottomItems:o=[],bottomContent:r,logo:i,arrowIcon:a,collapsed:c,onToggle:d,selectedKey:f,onSelect:y,autoCollapseOnSelect:m=!1,width:k="315px",collapsedWidth:g="85px",className:v,style:h,mobileBreakpoint:p=768,showBottomLabels:l=!0,children:M})=>{const C=x.useContext(Fe),[I,T]=x.useState(window.innerWidth<=p);x.useEffect(()=>{const j=()=>{T(window.innerWidth<=p)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[p]);const[_,R]=x.useState(c??C.collapsed??!1),[$,W]=x.useState(null),[z,F]=x.useState(f??C.selectedSideMenuItem??null),[H,O]=x.useState({visible:!1,x:0,y:0,items:[]}),w=x.useRef(null),s=c??C.collapsed??_,S=j=>{R(j),C.toggleCollapsed(),d?.(j)},b=f??C.selectedSideMenuItem??z,Y=j=>{F(j),C.setSelectedSideMenuItem(j)};x.useEffect(()=>{c!==void 0&&(R(c),c&&W(null))},[c]),x.useEffect(()=>{f!==void 0&&Y(f)},[f]),x.useEffect(()=>{const j=()=>O(B=>({...B,visible:!1}));return document.addEventListener("click",j),()=>document.removeEventListener("click",j)},[]);const V=()=>{const j=!s;S(j),j&&W(null)},U=j=>{j.disabled||j.hidden||(Y(j.key),y?.(j),j.onClick?.(j),m&&(S(!0),W(null)))},E=j=>{W(B=>B===j?null:j)},L=(j,B)=>{const P=(j.children?.length||0)>0;if(s&&P){B.stopPropagation();const N=B.currentTarget.getBoundingClientRect();O({visible:!0,x:N.right+6,y:N.top,items:j.children||[]});return}P?E(j.key):U(j)},u=(j,B=!1)=>j.filter(P=>!P.hidden).map(P=>{const N=(P.children?.length||0)>0,Z=$===P.key,G=b===P.key||!!P.children&&P.children.some(J=>J.key===b);return t.jsxs(x.Fragment,{children:[t.jsxs(hi,{$collapsed:s,$selected:G,onClick:J=>L(P,J),$disabled:P.disabled,title:P.label,children:[P.icon&&t.jsx(gi,{$collapsed:s,children:P.icon}),!s&&t.jsx(fi,{children:P.label}),!s&&N&&t.jsx(mi,{$expanded:Z,children:"▾"})]}),!s&&N&&Z&&t.jsx(bi,{children:u(P.children||[],!0)})]},P.key)}),D=x.useMemo(()=>H.visible?t.jsx(wi,{style:{left:H.x,top:H.y},children:H.items.map(j=>t.jsx(vi,{onClick:()=>{U(j),O({visible:!1,x:0,y:0,items:[]})},$selected:b===j.key,children:j.label},j.key))}):null,[H,b]),A=()=>{const j=[...e,...o].filter(B=>!B.hidden);return t.jsx(ii,{children:j.map(B=>{const P=b===B.key;return t.jsxs(si,{$selected:P,onClick:()=>U(B),$disabled:B.disabled,children:[B.icon&&t.jsx(ai,{$selected:P,children:B.icon}),l&&t.jsx(li,{$selected:P,children:B.label})]},B.key)})})};return I?t.jsxs(oi,{className:v,style:h,children:[t.jsx(ri,{children:M}),A()]}):t.jsxs(ci,{ref:w,$collapsed:s,$width:k,$collapsedWidth:g,className:v,style:h,children:[t.jsxs(di,{children:[t.jsx(ui,{onClick:V,"aria-label":"Переключить меню",children:a??t.jsx(ti,{collapsed:s})}),!s&&i&&t.jsx(pi,{children:i})]}),t.jsxs(xi,{children:[t.jsx(De,{children:u(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(Le,{}),t.jsx(De,{children:u(o)})]}),r&&t.jsxs(t.Fragment,{children:[(o.length>0||e.length>0)&&t.jsx(Le,{}),t.jsx(ki,{$collapsed:s,children:r})]})]}),D,t.jsx(yi,{$collapsed:s}),M]})},oi=n.div`
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
`,ri=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,ii=n.nav`
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
`,si=n.div`
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
`,ai=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,li=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,ci=n.div`
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
`,di=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,ui=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`,pi=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,xi=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,De=n.div`
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
`,hi=n.div`
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
`,fi=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,gi=n.div`
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
`,bi=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,mi=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,Le=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,wi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,vi=n.div`
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
`,yi=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,ki=n.div`
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
`,ji=e=>{const o=e.replace(/\D/g,""),i=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let a="";return i.length>0&&(a+="8"),i.length>1&&(a+=` (${i.slice(1,4)}`),i.length>4&&(a+=`) ${i.slice(4,7)}`),i.length>7&&(a+=`-${i.slice(7,9)}`),i.length>9&&(a+=`-${i.slice(9,11)}`),a},_e=({value:e,onChange:o,placeholder:r="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const a=c=>{const d=ji(c.target.value);o(d)};return t.jsx(Ci,{type:"text",value:e,onChange:a,placeholder:r,maxLength:18,tabIndex:i})},Ci=n.input`
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
`;class $i{async subscribe(o,r,i){return q("/Pay/subscribe",{method:"POST",body:{tariffType:o,days:r??null,ones:i??null}})}async cancelSubscription(o){const r={};return o!==void 0&&(r.tariffType=o),q("/Pay/cancel",{method:"POST",body:r})}async getSubscriptionInfo(o){let r="/Pay/status";return o!==void 0&&(r+=`?tariffType=${o}`),q(r,{method:"GET"})}async isSubscriptionActive(o){return(await this.getSubscriptionInfo(o)).isActive}async getSubscriptionEndDate(o){return(await this.getSubscriptionInfo(o)).endAt}}const ne=new $i,Si=({paymentUrl:e,onPaymentComplete:o,expiresAt:r,status:i,tariffType:a,onCheckStatus:c})=>{const[d,f]=x.useState(1),[y,m]=x.useState(!1),[k,g]=x.useState(null),[v,h]=x.useState(!1),[p,l]=x.useState(null),[M,C]=x.useState(i||"Pending"),I=x.useRef(!1),T=x.useRef(!0),_=x.useRef(null),R=x.useRef(null),$=x.useCallback(b=>{const Y=new Date().getTime(),U=new Date(b).getTime()-Y;if(U<=0)return"00:00";const E=Math.floor(U%(1e3*60*60)/(1e3*60)),L=Math.floor(U%(1e3*60)/1e3);return`${E.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")}`},[]),W=x.useCallback(()=>{r&&d===1&&M==="Pending"&&$(r)==="00:00"&&(l("Время ожидания оплаты истекло"),R.current&&(clearInterval(R.current),R.current=null))},[r,d,M,$]),z=x.useCallback(()=>{!r||d!==1||M!=="Pending"||(W(),R.current&&clearInterval(R.current),R.current=window.setInterval(()=>{T.current&&d===1&&M==="Pending"&&W()},1e3))},[r,d,M,W]),F=x.useCallback(()=>{R.current&&(clearInterval(R.current),R.current=null)},[]),H=x.useCallback(async()=>{if(!(I.current||d===3||M==="Active"))try{if(I.current=!0,l(null),c){const b=await c();b.success&&b.status==="Active"?(C("Active"),f(3),F(),o&&o()):b.status==="Pending"?(C("Pending"),f(1),b.transaction_status==="Authorized"&&f(2)):b.status==="Expired"&&(l("Время ожидания оплаты истекло"),F())}}catch(b){console.error("Ошибка при проверке статуса:",b),l("Не удалось проверить статус оплаты")}finally{T.current&&(I.current=!1)}},[c,o,d,M,F]);x.useEffect(()=>{if(d===3){const b=setTimeout(()=>{o&&o()},2e3);return()=>clearTimeout(b)}},[d,o]);const O=x.useCallback(()=>{_.current||M==="Active"||(H(),_.current=window.setInterval(()=>{T.current&&M!=="Active"&&H()},5e3))},[H,M]),w=x.useCallback(()=>{_.current&&(clearInterval(_.current),_.current=null)},[]);x.useEffect(()=>(T.current=!0,M==="Active"?f(3):M==="Pending"&&(O(),z()),()=>{T.current=!1,w(),F()}),[M,O,z,w,F]),x.useEffect(()=>{d===1&&M==="Pending"?z():F()},[d,M,z,F]);const s=b=>d>b?"completed":d===b?"current":"pending",S=async()=>{try{await ne.cancelSubscription(a),m(!0),g(null),w(),F(),window.location.reload()}catch(b){console.error("Ошибка при отмене подписки:",b),g("Произошла ошибка при отмене подписки")}finally{m(!1),h(!1)}};return t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"12px",boxSizing:"border-box"},children:[t.jsxs("div",{style:{maxWidth:"600px",width:"100%",backgroundColor:"white",borderRadius:"20px",padding:"24px 16px",position:"relative",margin:"12px 0"},children:[!v&&t.jsx("button",{onClick:()=>h(!0),className:"desktop-cancel-button",style:{position:"absolute",top:"12px",right:"12px",backgroundColor:"transparent",color:"#999",border:"1px solid #ddd",padding:"6px 12px",borderRadius:"20px",fontSize:"13px",cursor:"pointer",transition:"all 0.3s",zIndex:10,minHeight:"36px",minWidth:"80px"},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="#f5f5f5",b.currentTarget.style.color="#666"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="transparent",b.currentTarget.style.color="#999"},children:"✕ Отменить"}),v&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"16px",boxSizing:"border-box"},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"16px",padding:"24px 20px",maxWidth:"400px",width:"100%",textAlign:"center",maxHeight:"90vh",overflowY:"auto"},children:[t.jsx("h3",{style:{color:"#333",marginBottom:"12px",fontSize:"20px",lineHeight:"1.4"},children:"Отменить оформление?"}),t.jsx("p",{style:{color:"#666",marginBottom:"24px",fontSize:"15px",lineHeight:"1.5"},children:"Вы уверены, что хотите отменить оформление подписки? Вам придется начать заново."}),k&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px",borderRadius:"8px",marginBottom:"20px",fontSize:"14px"},children:k}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx("button",{onClick:S,disabled:y,style:{width:"100%",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"bold",cursor:y?"not-allowed":"pointer",opacity:y?.7:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:b=>{y||(b.currentTarget.style.backgroundColor="#D32F2F")},onMouseLeave:b=>{y||(b.currentTarget.style.backgroundColor="#F44336")},children:y?"Отмена...":"Да, отменить"}),t.jsx("button",{onClick:()=>{h(!1),g(null)},disabled:y,style:{width:"100%",backgroundColor:"#f5f5f5",color:"#666",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",cursor:y?"not-allowed":"pointer",opacity:y?.5:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:b=>{y||(b.currentTarget.style.backgroundColor="#e0e0e0")},onMouseLeave:b=>{y||(b.currentTarget.style.backgroundColor="#f5f5f5")},children:"Нет, вернуться"})]})]})}),t.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[t.jsxs("h1",{style:{color:"#333",marginBottom:"8px",fontSize:"24px",lineHeight:"1.3",padding:"0 8px"},children:[d===1&&M==="Pending"&&"Ожидание оплаты",d===2&&"Подтверждение платежа",d===3&&"Платёж завершён"]}),t.jsxs("p",{style:{color:"#666",fontSize:"15px",lineHeight:"1.5",padding:"0 12px",margin:0},children:[d===1&&M==="Pending"&&"Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.",d===2&&"Платёж обрабатывается банком. Обычно это занимает несколько секунд.",d===3&&"Подписка успешно активирована! Спасибо за покупку."]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"32px",position:"relative",padding:"0 4px"},children:[t.jsx("div",{style:{position:"absolute",top:"15px",left:"18%",right:"18%",height:"2px",backgroundColor:"#E0E0E0",zIndex:1},children:t.jsx("div",{style:{width:d===1?"0%":d===2?"50%":"100%",height:"100%",backgroundColor:"#007D88",transition:"width 0.5s ease"}})}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:s(1)==="completed"||s(1)==="current"?"#007D88":"#E0E0E0",border:s(1)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",fontWeight:"bold"},children:s(1)==="completed"?"✓":"1"}),t.jsx("div",{style:{color:s(1)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:s(1)==="current"?"bold":"normal"},children:"Начало"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:s(2)==="completed"?"#007D88":s(2)==="current"?"white":"#E0E0E0",border:s(2)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:s(2)==="current"?"#007D88":s(2)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:s(2)==="completed"?"✓":"2"}),t.jsx("div",{style:{color:s(2)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:s(2)==="current"?"bold":"normal"},children:"Подтверждение"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:s(3)==="completed"?"#007D88":s(3)==="current"?"white":"#E0E0E0",border:s(3)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:s(3)==="current"?"#007D88":s(3)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:s(3)==="completed"?"✓":"3"}),t.jsx("div",{style:{color:s(3)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:s(3)==="current"?"bold":"normal"},children:"Завершено"})]})]}),t.jsxs("div",{style:{backgroundColor:"#F9FAFA",borderRadius:"12px",padding:"20px 16px",marginBottom:"24px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("div",{style:{color:"#999",fontSize:"13px",marginBottom:"8px"},children:"Ссылка для оплаты"}),t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:"#007D88",textDecoration:"none",fontSize:"14px",wordBreak:"break-all",display:"block",padding:"12px 16px",backgroundColor:"#E8F4F5",borderRadius:"8px",transition:"background-color 0.3s",lineHeight:"1.5",minHeight:"44px"},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="#D1E9EB"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="#E8F4F5"},children:e})]}),d===1&&t.jsx("div",{style:{borderTop:"1px solid #E0E0E0",paddingTop:"16px"},children:!v&&t.jsx("button",{onClick:()=>h(!0),className:"mobile-cancel-button",style:{width:"100%",margin:"16px 0 0px 0px",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"500",cursor:"pointer",transition:"background-color 0.3s",zIndex:10},onMouseEnter:b=>{b.currentTarget.style.backgroundColor="#D32F2F"},onMouseLeave:b=>{b.currentTarget.style.backgroundColor="#F44336"},children:"✕ Отменить оформление"})})]}),p&&d!==3&&M!=="Active"&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px 16px",borderRadius:"8px",marginBottom:"16px",fontSize:"14px",textAlign:"center",lineHeight:"1.5"},children:p}),d===2&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#F9FAFA",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#007D88",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Платёж обрабатывается банком. Это может занять от нескольких секунд до часа."})}),M==="Active"&&d!==3&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#E8F5E9",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#2E7D32",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Подписка активна! Страница будет обновлена автоматически."})})]}),t.jsx("style",{children:`
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
      `})]})},Oe=(e={})=>{const{tariffType:o,autoRedirect:r=!1,onSuccess:i,onCancel:a,onError:c}=e,[d,f]=x.useState(!1),[y,m]=x.useState(!1),[k,g]=x.useState(!1),[v,h]=x.useState(!1),[p,l]=x.useState(null),[M,C]=x.useState(null),[I,T]=x.useState(null),[_,R]=x.useState(null),[$,W]=x.useState(!1),z=x.useCallback(async(w,s,S)=>{m(!0),f(!0),l(null),C(null);try{const b=await ne.subscribe(w,s,S);return C(b),r&&b.paymentUrl&&(window.location.href=b.paymentUrl),i?.(b),b}catch(b){const Y=b instanceof Error?b.message:"Unknown error occurred";return l(Y),c?.(Y),null}finally{m(!1),f(!1)}},[r,i,c]),F=x.useCallback(async w=>{g(!0),f(!0),l(null),T(null);try{const s=w??o,S=await ne.cancelSubscription(s);return T(S),a?.(S),S}catch(s){const S=s instanceof Error?s.message:"Unknown error occurred";return l(S),c?.(S),null}finally{g(!1),f(!1)}},[o,a,c]),H=x.useCallback(async w=>{h(!0),l(null);try{const s=w??o,S=await ne.getSubscriptionInfo(s);return R(S),W(S.isActive),S}catch(s){const S=s instanceof Error?s.message:"Unknown error occurred";return l(S),c?.(S),null}finally{h(!1)}},[o,c]),O=x.useCallback(()=>{f(!1),m(!1),g(!1),h(!1),l(null),C(null),T(null),R(null),W(!1)},[]);return{isLoading:d,isSubscribing:y,isCancelling:k,isFetchingStatus:v,error:p,subscriptionData:M,cancelData:I,statusData:_,isActive:$,subscribe:z,cancelSubscription:F,getSubscriptionStatus:H,resetState:O}},Mi=[{id:1,days:30,label:"1 месяц",price:4999},{id:2,days:90,label:"3 месяца",price:14999},{id:3,days:180,label:"6 месяцев",price:29999},{id:4,days:365,label:"1 год",price:59999,popular:!0}],Ei=[{id:1,ones:1,label:"Разовый доступ",price:999,description:"1 разовое использование"},{id:2,ones:5,label:"Пакет 5 раз",price:4499,description:"5 разовых использований",popular:!0},{id:3,ones:10,label:"Пакет 10 раз",price:8499,description:"10 разовых использований"},{id:4,ones:20,label:"Пакет 20 раз",price:15999,description:"20 разовых использований"}],Di=({tariffType:e="WaypayCrm",subscriptionType:o="days",plans:r,onPaymentSuccess:i,onError:a,autoRedirect:c=!0,buttonText:d="Оформить",loadingText:f="Обработка...",showSelectedIndicator:y=!0,className:m,title:k="Подписка",subTitle:g="WayPay CRM"})=>{const[v,h]=x.useState(null),p=r||(o==="days"?Mi:Ei),{isLoading:l,error:M,subscribe:C,resetState:I}=Oe({tariffType:e,autoRedirect:c,onSuccess:$=>{c&&$.paymentUrl&&(window.location.href=$.paymentUrl),i?.()},onError:$=>{a?.($)}});x.useEffect(()=>{if(!v&&p.length>0){const $=p.find(W=>W.popular)||p[0];h($)}},[p,v]);const T=async()=>{if(!v){a?.("Выберите тарифный план");return}const $=o==="days"?v.days:void 0,W=o==="ones"?v.ones:void 0;await C(e,$,W)},_=$=>new Intl.NumberFormat("ru-RU").format($),R=$=>o==="days"?$.days:$.ones;return t.jsxs(Li,{className:m,children:[t.jsxs(Ti,{children:[t.jsx(Ii,{children:k}),t.jsx(Pi,{children:g})]}),(M||typeof M=="string"&&M)&&t.jsxs(Hi,{children:[t.jsx("span",{children:M}),t.jsx(Yi,{onClick:I,children:"×"})]}),t.jsx(Ri,{children:p.map($=>{const W=R($),z=v?.id===$.id;return t.jsxs(zi,{$isSelected:z,$isPopular:!!$.popular,onClick:()=>h($),children:[t.jsxs(Bi,{children:[t.jsxs(Ai,{children:[$.label,$.popular&&t.jsx(Fi,{children:"Популярный"})]}),$.description&&t.jsx(_i,{children:$.description}),W!==void 0&&o==="days"&&t.jsxs(Te,{children:[W," дней"]}),W!==void 0&&o==="ones"&&t.jsxs(Te,{children:[W," шт."]})]}),t.jsxs(Oi,{children:[_($.price)," ₽"]}),y&&z&&t.jsx(Wi,{})]},$.id)})}),t.jsx(Ni,{onClick:T,disabled:l,children:l?f:d})]})},Li=n.div`
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
`,Ti=n.div`
  margin-bottom: 28px;
  text-align: center;
`,Ii=n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`,Pi=n.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0;
`,Ri=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`,zi=n.div`
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
`,Bi=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,Ai=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`,Fi=n.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`,_i=n.div`
  font-size: 12px;
  color: #8c8c8c;
`,Te=n.div`
  font-size: 11px;
  color: #007D88;
  font-weight: 500;
`,Oi=n.span`
  font-size: 16px;
  font-weight: 600;
  color: #007D88;
`,Wi=n.div`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #007D88 transparent transparent;
  border-radius: 0 12px 0 0;
`,Ni=n.button`
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
`,Hi=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`,Yi=n.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`,Vi=e=>({call_phone:e.call_phone??e.callPhone,check_id:e.check_id??e.checkId,name_required:e.name_required??e.nameRequired}),We=async(e,o)=>{const i=await q("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}});return Vi(i)},Ne=(e,o,r,i)=>q("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,checkId:o,user_type:r,userType:r,name:i}}),Ui=()=>q("/auth/session/info",{method:"GET"}),Zi=({isOpen:e,onClose:o,onSubmit:r,error:i,isLoading:a=!1})=>{const[c,d]=x.useState("");if(!e)return null;const f=y=>{y.preventDefault(),r(c)};return t.jsx(qi,{onClick:o,children:t.jsx(Xi,{onClick:y=>y.stopPropagation(),children:t.jsxs(Gi,{onSubmit:f,children:[t.jsx(Ji,{children:"Как вас зовут?"}),t.jsxs(Ki,{children:[t.jsx(de,{type:"text",value:c,onChange:y=>d(y.target.value),placeholder:"Иванов Иван Иванович",disabled:a,autoFocus:!0,style:{flex:1}}),t.jsx(Qi,{type:"submit",disabled:a||!c.trim(),children:a?"...":"→"})]}),i&&t.jsx(es,{children:i})]})})})},qi=n.div`
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
`,Xi=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,Gi=n.form`
  display: flex;
  flex-direction: column;
`,Ji=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,Ki=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Qi=n(oe)`
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
`,es=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,ts=({onLoginSuccess:e,userType:o="delivery_operator",title:r="Авторизация",submitLabel:i="Войти",placeholder:a="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:d="https://waypay.one",supportLinkText:f="waypay.one",className:y,style:m,pollingIntervalMs:k=3e3,enableRegistration:g=!1,enableSupport:v=!0})=>{const[h,p]=x.useState(!1),[l,M]=x.useState(""),[C,I]=x.useState(!1),[T,_]=x.useState(""),[R,$]=x.useState(""),[W,z]=x.useState(!1),[F,H]=x.useState(!1),[O,w]=x.useState(""),[s,S]=x.useState(""),[b,Y]=x.useState(null),V=x.useRef(void 0);x.useEffect(()=>()=>{V.current&&clearInterval(V.current)},[]);const U=j=>{const B=j.replace(/\D/g,"");return B?B.startsWith("8")?`+7${B.slice(1)}`:B.startsWith("7")?`+${B}`:`+${B}`:""},E=()=>{I(!1),H(!1),w(""),S(""),Y(null),V.current&&window.clearInterval(V.current)},L=async j=>{if(j.preventDefault(),!l){$("Введите номер телефона");return}p(!0),$("");const B=U(l);try{const P=await We(B,o);Y({phone:B,checkId:P.check_id,callPhone:P.call_phone}),g&&"name_required"in P&&P.name_required?(H(!0),_(P.call_phone)):!g&&"name_required"in P&&P.name_required?($("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),Y(null)):(_(P.call_phone),I(!0),D(B,P.check_id))}catch(P){console.error("Auth error:",P),P&&P.response&&P.response.data?$(P.response.data):P instanceof Error?$(P.message):$("Произошла ошибка при авторизации")}finally{p(!1)}},u=async j=>{if(!j.trim()){S("Введите ФИО");return}if(b){p(!0),S("");try{w(j),H(!1),I(!0),D(b.phone,b.checkId,j)}catch(B){console.error("Registration error:",B),S("Не удалось завершить регистрацию")}finally{p(!1)}}},D=(j,B,P)=>{V.current&&window.clearInterval(V.current),V.current=window.setInterval(()=>{A(j,B,P)},k)},A=async(j,B,P)=>{if(!W){z(!0);try{const N=await Ne(j,B,o,P||O);(N.access_token&&N.refresh_token||N.accessToken&&N.refreshToken)&&(V.current&&window.clearInterval(V.current),I(!1),H(!1),w(""),Y(null),e(N.access_token??N.accessToken))}catch(N){console.error("Verification error:",N)}finally{z(!1)}}};return t.jsxs(ns,{className:y,style:m,children:[t.jsxs(os,{children:[t.jsxs(rs,{onSubmit:L,children:[t.jsx(is,{children:r}),t.jsx(ss,{children:t.jsx(as,{children:t.jsx(_e,{value:l,onChange:j=>M(j),placeholder:a})})}),R&&t.jsx(ps,{children:t.jsx("span",{children:R})}),t.jsx(ls,{type:"submit",disabled:h,children:h?"Загрузка...":i})]}),v&&t.jsxs(cs,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(ds,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(us,{href:d,target:"_blank",rel:"noreferrer",children:f})]})]}),t.jsx(Zi,{isOpen:F,onClose:E,onSubmit:u,error:s,isLoading:h}),t.jsx(Ae,{isOpen:C,onClose:E,callPhone:T,error:R})]})},ns=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,os=n.div`
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
`,rs=n.form`
  display: flex;
  flex-direction: column;
`,is=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,ss=n.div`
  margin-bottom: 25px;
`,as=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,ls=n.button`
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
`,cs=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,ds=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,us=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,ps=n.div`
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
`,He=e=>{let o=0;for(let i=0;i<e.length;i++)o=e.charCodeAt(i)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},xs=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",hs=(e,o=100)=>{const r=document.createElement("canvas");r.width=o,r.height=o;const i=r.getContext("2d");if(!i)return"";const a=He(e);i.fillStyle=a,i.beginPath(),i.arc(o/2,o/2,o/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=o/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const d=c*.1;return i.fillText(e,o/2,o/2+d),r.toDataURL("image/png")},fs=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const r=o.getDate().toString().padStart(2,"0"),i=(o.getMonth()+1).toString().padStart(2,"0"),a=o.getFullYear();return`${r}-${i}-${a}`};function gs(e){return new Date(e)}const Ye=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const r=new Date;if(o>r){const k=Math.floor((o.getTime()-r.getTime())/1e3),g=Math.floor(k/60),v=Math.floor(g/60),h=Math.floor(v/24);return k<10?"скоро":k<60?`через ${k} секунд`:g===1?"через минуту":g<60?`через ${g} минут`:v===1?"через час":v<24?`через ${v} часов`:h===1?"завтра":h<7?`через ${h} дней`:"в будущем"}const i=Math.floor((r.getTime()-o.getTime())/1e3),a=Math.floor(i/60),c=Math.floor(a/60),d=Math.floor(c/24),f=Math.floor(d/7),y=Math.floor(d/30),m=Math.floor(d/365);if(i<10)return"только что";if(i<60){const k=Math.max(1,i);return k===1?"секунду назад":k<5?`${k} секунды назад`:`${k} секунд назад`}return a<60?a===1?"минуту назад":a<5?`${a} минуты назад`:`${a} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:d<7?d===1?"вчера":d===2?"позавчера":`${d} дня назад`:f<4?f===1?"неделю назад":f<5?`${f} недели назад`:`${f} недель назад`:y<12?y===1?"месяц назад":y<5?`${y} месяца назад`:`${y} месяцев назад`:m===1?"год назад":m<5?`${m} года назад`:`${m} лет назад`}catch(r){return console.error("Ошибка форматирования относительного времени:",r),"ошибка даты"}},Ve=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},bs=(e,o={})=>{const{useExactAfterMonths:r=6,includeTime:i=!0}=o,a=new Date(e);return isNaN(a.getTime()),Math.floor((new Date().getTime()-a.getTime())/(1e3*60*60*24*30))>=r?i?Ve(a):a.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Ye(a)};exports.API_BASE_URL=ce;exports.AddButton=xt;exports.AuthCallModal=Ae;exports.AuthPage=ts;exports.BASE_URL=gt;exports.BackButton=vt;exports.BaseModal=Re;exports.Checkbox=Zt;exports.ColumnChart=Ko;exports.ContextMenu=le;exports.CountInfoTitle=So;exports.CustomCalendar=se;exports.CustomInput=de;exports.CustomPhoneInput=_e;exports.CustomSelect=It;exports.CustomTable=tt;exports.CustomTextArea=Sn;exports.CustomTitle=pe;exports.DefaultButton=oe;exports.DeleteButton=jt;exports.EditButton=$t;exports.EntitySelectContainer=go;exports.ExportButton=Et;exports.FILE_BASE_URL=bt;exports.InputContainer=wn;exports.InputLabel=mn;exports.InputRow=bn;exports.InputTitle=Eo;exports.ModalInfoTitle=Do;exports.Pagination=Cn;exports.PeriodField=Hn;exports.PhoneModalInput=oo;exports.PhotoViewerModal=_r;exports.ProgressBar=Ao;exports.RadioButton=Ro;exports.ScatterPlot=vr;exports.SideMenu=ni;exports.SideMenuContext=Fe;exports.SubscriptionBlock=Di;exports.SubscriptionPendingPage=Si;exports.Tabs=lo;exports.TitleField=ue;exports.ToggleSwitch=Po;exports.YandexMapSelector=Yo;exports.apiRequest=q;exports.authStorage=mt;exports.confirmCallAuth=Ne;exports.formatDate=fs;exports.formatExactDate=Ve;exports.formatMoney=ae;exports.formatRelativeTime=Ye;exports.formatRelativeTimeExtended=bs;exports.generateAvatar=hs;exports.getInitials=xs;exports.getSessionInfo=Ui;exports.initiateCallAuth=We;exports.parseDateInput=gs;exports.parseMoney=Jo;exports.refreshAccessToken=Ie;exports.stringToColor=He;exports.useSubscription=Oe;
