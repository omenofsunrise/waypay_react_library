"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const w=require("react"),o=require("styled-components"),U=require("framer-motion");var Q={exports:{}},G={};var de;function Ne(){if(de)return G;de=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(i,r,c){var p=null;if(c!==void 0&&(p=""+c),r.key!==void 0&&(p=""+r.key),"key"in r){c={};for(var g in r)g!=="key"&&(c[g]=r[g])}else c=r;return r=c.ref,{$$typeof:e,type:i,key:p,ref:r!==void 0?r:null,props:c}}return G.Fragment=n,G.jsx=s,G.jsxs=s,G}var J={};var pe;function Ye(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===_?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case I:return"Fragment";case E:return"Profiler";case k:return"StrictMode";case R:return"Suspense";case Y:return"SuspenseList";case W:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case F:return a.displayName||"Context";case L:return(a._context.displayName||"Context")+".Consumer";case z:var $=a.render;return a=a.displayName,a||(a=$.displayName||$.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case B:return $=a.displayName||null,$!==null?$:e(a.type)||"Memo";case A:$=a._payload,a=a._init;try{return e(a($))}catch{}}return null}function n(a){return""+a}function s(a){try{n(a);var $=!1}catch{$=!0}if($){$=console;var S=$.error,T=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return S.call($,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",T),n(a)}}function i(a){if(a===I)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===A)return"<...>";try{var $=e(a);return $?"<"+$+">":"<...>"}catch{return"<...>"}}function r(){var a=v.A;return a===null?null:a.getOwner()}function c(){return Error("react-stack-top-frame")}function p(a){if(u.call(a,"key")){var $=Object.getOwnPropertyDescriptor(a,"key").get;if($&&$.isReactWarning)return!1}return a.key!==void 0}function g(a,$){function S(){N||(N=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",$))}S.isReactWarning=!0,Object.defineProperty(a,"key",{get:S,configurable:!0})}function j(){var a=e(this.type);return P[a]||(P[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function f(a,$,S,T,O,Z){var H=S.ref;return a={$$typeof:h,type:a,key:$,props:S,_owner:T},(H!==void 0?H:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:j}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Z}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function m(a,$,S,T,O,Z){var H=$.children;if(H!==void 0)if(T)if(M(H)){for(T=0;T<H.length;T++)x(H[T]);Object.freeze&&Object.freeze(H)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(H);if(u.call($,"key")){H=e(a);var X=Object.keys($).filter(function(Oe){return Oe!=="key"});T=0<X.length?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}",C[H+T]||(X=0<X.length?"{"+X.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,T,H,X,H),C[H+T]=!0)}if(H=null,S!==void 0&&(s(S),H=""+S),p($)&&(s($.key),H=""+$.key),"key"in $){S={};for(var ee in $)ee!=="key"&&(S[ee]=$[ee])}else S=$;return H&&g(S,typeof a=="function"?a.displayName||a.name||"Unknown":a),f(a,H,S,r(),O,Z)}function x(a){y(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===A&&(a._payload.status==="fulfilled"?y(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function y(a){return typeof a=="object"&&a!==null&&a.$$typeof===h}var d=w,h=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),F=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),_=Symbol.for("react.client.reference"),v=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,u=Object.prototype.hasOwnProperty,M=Array.isArray,D=console.createTask?console.createTask:function(){return null};d={react_stack_bottom_frame:function(a){return a()}};var N,P={},V=d.react_stack_bottom_frame.bind(d,c)(),b=D(i(c)),C={};J.Fragment=I,J.jsx=function(a,$,S){var T=1e4>v.recentlyCreatedOwnerStacks++;return m(a,$,S,!1,T?Error("react-stack-top-frame"):V,T?D(i(a)):b)},J.jsxs=function(a,$,S){var T=1e4>v.recentlyCreatedOwnerStacks++;return m(a,$,S,!0,T?Error("react-stack-top-frame"):V,T?D(i(a)):b)}})()),J}var ue;function We(){return ue||(ue=1,process.env.NODE_ENV==="production"?Q.exports=Ne():Q.exports=Ye()),Q.exports}var t=We();const ie=({x:e,y:n,items:s,onClose:i,...r})=>{const c=w.useRef(null),[p,g]=w.useState(null);w.useEffect(()=>{const d=h=>{c.current&&!c.current.contains(h.target)&&i()};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[i]);const f=(()=>{if(!c.current)return{x:e,y:n};const d=c.current.offsetWidth,h=c.current.offsetHeight,l=window.innerWidth,I=window.innerHeight;let k=e,E=n;return k+d>l&&(k=e-d),E+h>I&&(E=n-h),{x:k,y:E}})(),m=(d,h)=>{d.submenu?g(p===h?null:h):d.action&&(d.action(),i())},x=d=>{s[d].submenu&&g(d)},y=d=>{const h=d.relatedTarget;c.current?.contains(h)||g(null)};return t.jsx(He,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:f.y,left:f.x},onClick:d=>d.stopPropagation(),onMouseLeave:y,...r,children:s.map((d,h)=>t.jsxs(Ve,{$hasSubmenu:!!d.submenu,$disabled:d.disabled,children:[t.jsx(Ze,{onClick:l=>{l.stopPropagation(),d.disabled||m(d,h)},onMouseEnter:()=>!d.disabled&&x(h),whileHover:d.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:d.color,$disabled:d.disabled,children:t.jsxs(Ue,{children:[d.label,d.submenu&&t.jsx(Xe,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),d.submenu&&p===h&&t.jsx(qe,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(ie,{x:0,y:-h*40,items:d.submenu,onClose:()=>g(null)})})]},h))})},He=o(U.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Ve=o.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,Ze=o(U.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:n})=>n?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Ue=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Xe=o.span`
  color: #666;
  margin-left: 8px;
`,qe=o(U.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Ge=({columns:e,data:n,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:c,onRowClick:p,selectedRow:g,fixedHeight:j,hasTotalsRow:f,debtChecker:m,rowStyles:x={},isLoading:y})=>{const[d,h]=w.useState(null),[l,I]=w.useState(null),k=w.useRef(null),E=w.useRef(null),L=500,F=g!==void 0?g:d,z=b=>{!e[b].isSortable||!r||r(b)},Y=m||(b=>{const C=b[8];return typeof C=="string"?parseFloat(C.replace(/[^\d.]/g,""))>0:!1}),B=b=>{g===void 0&&h(b===F?null:b),p&&p(n[b],b)},A=(b,C)=>{s&&s(b,C)},W=(b,C)=>{if(i.length===0)return;b.preventDefault();const a="touches"in b?b.touches[0].clientX:b.clientX,$="touches"in b?b.touches[0].clientY:b.clientY;I({x:a,y:$,rowIndex:C})},_=(b,C)=>{b.preventDefault(),W(b,C)},v=(b,C)=>{i.length!==0&&(E.current&&clearTimeout(E.current),E.current=window.setTimeout(()=>{W(b,C)},L))},u=()=>{E.current&&(clearTimeout(E.current),E.current=null)},M=()=>{E.current&&window.clearTimeout(E.current)},D=()=>{I(null)};w.useEffect(()=>{const b=()=>{l&&D()};return document.addEventListener("click",b),()=>{document.removeEventListener("click",b),E.current&&clearTimeout(E.current)}},[l]);const N=(b,C,a)=>{if(C)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const $=x[b]||{};return b===F?{backgroundColor:$.backgroundColor||"#007D88",color:$.color||"#FFFFFF",fontWeight:$.fontWeight||"normal"}:a?{backgroundColor:$.backgroundColor||"#E8D8D8",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}:n[b][n[b].length-1]===!1?{backgroundColor:$.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:$.fontWeight||"normal"}:{backgroundColor:$.backgroundColor||"#FFFFFF",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}},P=(b,C,a)=>{if(C)return"#FFFFFF";const $=N(b,C,a);return $.hoverBackgroundColor?$.hoverBackgroundColor:b===F?"#007D88":a?"#E8D8D8CC":n[b][n[b].length-1]===!1?"#51D5B4CC":"#F3F4F6"},V=()=>{if(!l||i.length===0)return null;const b=(typeof i=="function"?i(n[l.rowIndex]):i).filter(C=>typeof C=="object"&&(typeof C.shouldShow!="function"||C.shouldShow(n[l.rowIndex])));return b.length===0?null:t.jsx(tt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:C=>C.stopPropagation(),children:t.jsx(ie,{items:b.map(C=>{const a={label:C.label,color:C.color,disabled:C.disabled};return C.getSubmenu?a.submenu=C.getSubmenu(n[l.rowIndex]):C.action&&(a.action=()=>{C.action(n[l.rowIndex],l.rowIndex),D()}),a}),onClose:D,x:0,y:0})})};return t.jsx(Qe,{ref:k,children:y?t.jsx(Je,{children:t.jsx(Ke,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(et,{children:[t.jsx(ot,{children:t.jsx(he,{children:e.map((b,C)=>!b.isHidden&&t.jsx(rt,{$isSortable:b.isSortable,$isActive:c?.key===C,onClick:()=>z(C),$align:b.align||"center",$isFirst:C===0,$isLast:C===e.length-1,children:t.jsxs(it,{$align:b.align||"center",children:[b.name,b.isSortable&&t.jsx(st,{$direction:c?.key===C?c.direction:"asc",animate:{rotate:c?.key===C&&c.direction==="desc"?180:0,color:c?.key===C?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},C))})}),t.jsx(nt,{$fixedHeight:j,children:t.jsx(U.AnimatePresence,{children:n.map((b,C)=>{const a=!!(f&&C===n.length-1),$=!!(!a&&Y(b)),S=N(C,a,$),T=P(C,a,$);return t.jsx(he,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:C===n.length-1,$isSelected:C===F,$isTotalsRow:a,onClick:()=>!a&&B(C),onDoubleClick:()=>!a&&A(b,C),onContextMenu:O=>!a&&_(O,C),onTouchStart:O=>!a&&v(O,C),onTouchEnd:u,onTouchMove:M,whileHover:a?{}:{backgroundColor:T,transition:{duration:.15}},style:{backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},children:b.map((O,Z)=>!e[Z]?.isHidden&&t.jsx(at,{$align:e[Z]?.align||"center",$isFirst:Z===0,$isLast:Z===b.length-1,$isTotalsCell:a,$isBeforeTotals:a&&Z<b.findIndex(H=>H==="Итого:"),children:O},Z))},`row-${C}`)})})})]}),t.jsx(U.AnimatePresence,{children:V()})]})})},Je=o.div`
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
`,Ke=o.div`
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
`,Qe=o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,et=o.table`
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
`,tt=o(U.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,ot=o.thead`
  text-align: center;
  position: relative;
`,nt=o.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,he=o(U.motion.tr)`
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
    display: ${({$isLast:e,$isTotalsRow:n})=>e||n?"none":"block"};
  }
`,rt=o.th`
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
`,it=o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,st=o(U.motion.span)`
  display: inline-flex;
  align-items: center;
`,at=o.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:n})=>e||n?"none":"0.5px solid #d1d5db"};
`,lt=({onClick:e,tooltip:n,size:s=32,margin:i})=>t.jsx(ct,{onClick:e,size:s,margin:i,title:n,children:t.jsx(dt,{size:s})}),ct=o.button`
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
`,dt=o.div`
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
`,se="/api";async function q(e,n={}){const{method:s="GET",body:i,headers:r={},token:c,withCredentials:p=!0}=n,g=async f=>{const m={"Content-Type":"application/json",...r};f&&(m.Authorization=`Bearer ${f}`);const x=e.startsWith("http")?e:`${se}${e}`;return await fetch(x,{method:s,headers:m,body:i?JSON.stringify(i):void 0,credentials:p?"include":"same-origin"})},j=async(f,m=!0)=>{const x=await g(f);if(x.ok){if(x.status===204)return null;const d=await x.text();if(!d)return null;try{return JSON.parse(d)}catch{return d}}if(x.status===401&&m){const d=await pt();if(d)return j(d,!1)}let y=`Request failed with status ${x.status}`;try{const d=await x.json();d&&typeof d.error=="string"?y=d.error:typeof d=="string"&&(y=d)}catch{const d=await x.text();d&&(y=d)}throw new Error(y)};return j(c)}async function pt(){const e=await fetch(`${se}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const n=await e.json();return n.access_token?n.access_token:null}const ut={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await q("/auth/session/info",{method:"GET"})}catch{return null}},async logout(){try{await q("/auth/session/revoke",{method:"POST"})}catch(e){throw console.error("Logout error:",e),e}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},ht=o.button`
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  margin: 25px;

  &:hover {
    opacity: 0.8;
  }
`,xt=({children:e,onClick:n})=>t.jsxs(ht,{onClick:n,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),ae=({children:e="Подтвердить",icon:n,disabled:s=!1,bg:i,hoverBg:r,disabledBg:c,textColor:p,fullWidth:g=!1,minWidth:j,width:f,isPrimary:m=!0,...x})=>{const d=i?{bg:i,hoverBg:r||i,disabledBg:c||i,textColor:p||(m?"white":"black")}:m?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(ft,{disabled:s,$bg:d.bg,$hoverBg:d.hoverBg,$disabledBg:d.disabledBg,$textColor:d.textColor,$fullWidth:g,$minWidth:j,$width:f,...x,children:[n&&t.jsx(gt,{children:n}),t.jsx("span",{children:e})]})},ft=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({disabled:e,$bg:n,$disabledBg:s})=>e?s:n};
  border: none;
  border-radius: 10px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$textColor:e})=>e};
  font-size: 15px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({disabled:e})=>e?.7:1};
  width: ${({$fullWidth:e,$width:n})=>e?"100%":n?typeof n=="number"?`${n}px`:n:"auto"};
  min-width: ${({$minWidth:e})=>e||"auto"};

  &:hover {
    background-color: ${({disabled:e,$hoverBg:n,$disabledBg:s})=>e?s:n};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({$bg:e})=>e==="rgba(209, 213, 219, 1)"?"rgba(209, 233, 239, 1)":"rgba(156, 163, 175, 0.5)"};
  }
`,gt=o.span`
  display: inline-flex;
  align-items: center;
`,bt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(mt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),mt=o.button`
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
`,wt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(vt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),vt=o.button`
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
`,yt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),kt=({children:e="Экспорт",icon:n=t.jsx(yt,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...c})=>{const p=async g=>{if(s)try{await s()}catch(j){console.error("Export error:",j)}c.onClick&&c.onClick(g)};return t.jsx(jt,{...c,onClick:p,disabled:i||c.disabled,children:i?t.jsxs(Ct,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx($t,{progress:r})]}):t.jsxs(t.Fragment,{children:[n,t.jsx("span",{children:e})]})})},jt=o.button`
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
`,Ct=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,$t=o.div`
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
`,St=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:c,options:p,name:g,disabled:j=!1,required:f=!1,...m})=>{const[x,y]=w.useState(!1),[d,h]=w.useState(!1),l=w.useRef(null),I=!!(n&&!s&&!x),k=R=>{i&&!j&&i({target:{value:R,name:g}}),h(!1),y(!1)},E=R=>{l.current&&!l.current.contains(R.target)&&(h(!1),y(!1))},L=()=>{j||(h(!d),y(!d))};w.useEffect(()=>(document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}),[]);const F=p.find(R=>R.value===s),z=F?F.label:"";return t.jsxs(Mt,{ref:l,...m,children:[t.jsxs(Tt,{children:[t.jsxs(Dt,{hasError:r,isOpen:d,disabled:j,onClick:L,onFocus:()=>!j&&y(!0),onBlur:()=>y(!1),tabIndex:j?-1:0,children:[t.jsx(Lt,{children:z||e&&t.jsx(Et,{children:e})}),t.jsx(Pt,{isOpen:d,disabled:j,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:j?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),d&&t.jsx(It,{children:p.map(R=>t.jsxs(Rt,{$isSelected:R.value===s,onClick:()=>k(R.value),children:[t.jsx(Bt,{$isSelected:R.value===s,children:R.value===s&&t.jsx(zt,{})}),t.jsx(At,{children:R.label})]},R.value))})]}),n&&t.jsx(Ft,{isVisible:I,children:n}),r&&c&&t.jsx(_t,{children:c}),t.jsx(Ot,{name:g,value:s||"",onChange:()=>{},tabIndex:-1,required:f,children:p.map(R=>t.jsx("option",{value:R.value,children:R.label},R.value))})]})},Mt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Tt=o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Dt=o.div`
  border: 1px solid
    ${({hasError:e,isOpen:n,disabled:s})=>s?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":n?"rgba(0, 125, 136, 1)":"rgba(209, 213, 219, 1)"};
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
    border-color: ${({hasError:e,disabled:n,isOpen:s})=>n?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }
`,Lt=o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Et=o.span`
  color: rgba(80, 85, 92, 1);
`,Pt=o.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,It=o.div`
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
`,Rt=o.div`
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
`,Bt=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,zt=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,At=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Ft=o.label`
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
`,_t=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ot=o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Nt=({checked:e=!1,onChange:n,className:s,label:i,disabled:r=!1})=>{const[c,p]=w.useState(!1),g=()=>{r||!n||n(!e)},j=f=>{r||(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),g())};return t.jsxs(Yt,{className:s,onClick:g,onKeyPress:j,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Wt,{checked:e,isFocused:c,disabled:r,onMouseEnter:()=>!r&&p(!0),onMouseLeave:()=>!r&&p(!1),onFocus:()=>!r&&p(!0),onBlur:()=>!r&&p(!1),children:e&&t.jsx(Vt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Ht,{disabled:r,children:i})]})},Yt=o.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Wt=o.div`
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
`,Ht=o.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Vt=o.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Zt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",xe=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Ut=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ne=({prefix:e="Дата:",value:n="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[c,p]=w.useState(!1),[g,j]=w.useState(new Date),[f,m]=w.useState(n?new Date(n):null),[x,y]=w.useState(!1),[d,h]=w.useState(!1),l=w.useRef(null),I=w.useRef(null),k=w.useRef(null);w.useEffect(()=>{const u=M=>{l.current&&!l.current.contains(M.target)&&p(!1),I.current&&!I.current.contains(M.target)&&y(!1),k.current&&!k.current.contains(M.target)&&h(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),w.useEffect(()=>{m(n?new Date(n):null)},[n]);const E=u=>{const M=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate()));m(u);const D=M.toISOString().split("T")[0];i?.(D),p(!1)},L=()=>{const u=new Date;j(u);const D=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate())).toISOString().split("T")[0];i?.(D),p(!1)},F=()=>{m(null),i?.(""),r?.(),p(!1)},z=u=>{const M=new Date(g);M.setMonth(u),j(M),y(!1)},R=u=>{const M=new Date(g);M.setFullYear(u),j(M),h(!1)},Y=()=>{const u=g.getFullYear(),M=g.getMonth(),D=new Date(u,M,1),P=new Date(u,M+1,0).getDate(),V=D.getDay()===0?6:D.getDay()-1,b=[],C=35,a=new Date(u,M,0).getDate();for(let S=0;S<V;S++){const T=a-V+S+1,O=new Date(u,M-1,T),Z=!!(f&&O.getDate()===f.getDate()&&O.getMonth()===f.getMonth()&&O.getFullYear()===f.getFullYear());b.push(t.jsx(te,{selected:Z,onClick:()=>E(O),otherMonth:!0,children:T},`prev-${T}`))}for(let S=1;S<=P;S++){const T=new Date(u,M,S),O=!!(f&&T.getDate()===f.getDate()&&T.getMonth()===f.getMonth()&&T.getFullYear()===f.getFullYear());b.push(t.jsx(te,{selected:O,onClick:()=>E(T),children:S},`current-${S}`))}const $=C-b.length;for(let S=1;S<=$;S++){const T=new Date(u,M+1,S),O=!!(f&&T.getDate()===f.getDate()&&T.getMonth()===f.getMonth()&&T.getFullYear()===f.getFullYear());b.push(t.jsx(te,{selected:O,onClick:()=>E(T),otherMonth:!0,children:S},`next-${S}`))}return b},B=()=>f?f.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,A=()=>{const u=new Date().getFullYear(),M=[];for(let D=u-10;D<=u+10;D++)M.push(D);return M},W=u=>{u.preventDefault(),u.stopPropagation(),y(!x),h(!1)},_=u=>{u.preventDefault(),u.stopPropagation(),h(!d),y(!1)},v=u=>{const M=u==="next"?1:-1,D=new Date(g);D.setMonth(D.getMonth()+M),j(D)};return t.jsxs(Xt,{ref:l,children:[t.jsxs(qt,{onClick:()=>p(!c),children:[e&&t.jsx(Gt,{children:e}),t.jsx(Jt,{isEmpty:!f,children:B()}),t.jsx(Kt,{src:Zt,alt:"Календарь"})]}),c&&t.jsxs(Qt,{className:"calendar-container",children:[t.jsxs(eo,{children:[t.jsx(me,{onClick:u=>{u.preventDefault(),u.stopPropagation(),v("prev")},onMouseDown:u=>u.preventDefault(),children:t.jsx(we,{direction:"right"})}),t.jsxs(to,{children:[t.jsxs(ro,{ref:I,children:[t.jsxs(oo,{onClick:u=>W(u),onMouseDown:u=>u.preventDefault(),children:[xe[g.getMonth()],t.jsx(fe,{$open:x})]}),x&&t.jsx(ge,{$width:120,onClick:u=>u.stopPropagation(),children:xe.map((u,M)=>t.jsx(be,{$selected:M===g.getMonth(),onClick:D=>{D.stopPropagation(),z(M)},children:u},u))})]}),t.jsxs(io,{ref:k,children:[t.jsxs(no,{onClick:u=>_(u),onMouseDown:u=>u.preventDefault(),children:[g.getFullYear(),t.jsx(fe,{$open:d})]}),d&&t.jsx(ge,{$width:80,onClick:u=>u.stopPropagation(),children:A().map(u=>t.jsx(be,{$selected:u===g.getFullYear(),onClick:M=>{M.stopPropagation(),R(u)},children:u},u))})]})]}),t.jsx(me,{onClick:u=>{u.preventDefault(),u.stopPropagation(),v("next")},onMouseDown:u=>u.preventDefault(),children:t.jsx(we,{direction:"left"})})]}),t.jsx(so,{children:Ut.map(u=>t.jsx(ao,{children:u},u))}),t.jsx(lo,{children:Y()}),t.jsxs(co,{children:[t.jsx(ve,{onClick:F,children:"Удалить"}),t.jsx(ve,{onClick:L,children:"Сегодня"})]})]})]})},Xt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`,qt=o.div`
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
`,Gt=o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`,Jt=o.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,Kt=o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,Qt=o.div`
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
`,eo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,to=o.div`
  display: flex;
  gap: 8px;
  color: black;
`,Me=o.button`
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
`,oo=o(Me)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,no=o(Me)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,ro=o.div`
  position: relative;
`,io=o.div`
  position: relative;
`,fe=o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,ge=o.div`
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
`,be=o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,me=o.button`
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
`,we=o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,so=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,ao=o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,lo=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,te=o.div`
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
`,co=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ve=o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,Te=({placeholder:e="",customPlaceholder:n,value:s,inputType:i="text",onChange:r,hasError:c=!1,errorMessage:p,...g})=>{const[j,f]=w.useState(!1),m=!!(n&&!s&&!j),x=h=>{if(!r)return;let l=h.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(h);break;case"rubles":{const k=h.target.selectionStart,E=h.target.value;let L=E.replace(/[^\d]/g,"");if(L===""){h.target.value="",r(h);break}const F=parseInt(L,10);if(!isNaN(F)){let z=F.toLocaleString("ru-RU");z+=" ₽";const R=y(E,k||0),Y=d(z,R);h.target.value=z,r(h),setTimeout(()=>{h.target.setSelectionRange(Y,Y)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const k=l.split(".");k.length>2&&(l=k[0]+"."+k.slice(1).join("")),k.length===2&&k[1].length>2&&(l=k[0]+"."+k[1].slice(0,2));const E=parseFloat(l);if(isNaN(E)||(E>100?l="100":E<0&&(l="0")),l&&l!==""){l+=" %";const L=h.target.selectionStart||0,F=l.replace(" %","");h.target.value=l,r(h),setTimeout(()=>{L<F.length&&h.target.setSelectionRange(L,L)},0)}else h.target.value=l,r(h);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let I=l.split(" ").filter(k=>k.length>0);I=I.slice(0,3),l=I.map(k=>{if(k.startsWith("-")&&(k=k.substring(1)),(k.match(/-/g)||[]).length>1){const L=k.split("-");k=L[0]+"-"+L.slice(1).join("")}return k.includes("-")?k.split("-").map((L,F)=>L.length===0?"":(F>0,L[0].toUpperCase()+L.slice(1).toLowerCase())).join("-"):k.length>0?k[0].toUpperCase()+k.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&h.target.value.length>0&&h.target.value[h.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),h.target.value=l,r(h);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),h.target.value=l,r(h);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),h.target.value=l,r(h);break}default:r(h);break}},y=(h,l)=>{let I=0;for(let k=0;k<Math.min(l,h.length);k++)/\d/.test(h[k])&&I++;return I},d=(h,l)=>{let I=0;for(let k=0;k<h.length;k++){if(I>=l)return k;/\d/.test(h[k])&&I++}return h.length};return t.jsxs(po,{children:[t.jsx(uo,{...g,value:s,placeholder:m?"":e,onFocus:()=>f(!0),onBlur:h=>{f(!1),g.onBlur?.(h)},onChange:x,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),n&&t.jsx(ho,{isVisible:m,children:n}),c&&p&&t.jsx(xo,{children:p})]})},po=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,uo=o.input`
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
  max-width: 500px;
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
`,ho=o.label`
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
`,xo=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,fo=({total:e,current:n=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[c,p]=w.useState(n),g=f=>{f<1||f>r||f===c||(p(f),s?.(f))},j=()=>{const f=[];let x=1,y=r;if(r>5){const d=Math.floor(2.5);x=Math.max(c-d,1),y=Math.min(c+d,r),c<=d+1?y=5:c>=r-d&&(x=r-5+1)}for(let d=x;d<=y;d++)f.push(t.jsx(K,{active:d===c,onClick:()=>g(d),children:d},d));return x>1&&(x>2&&f.unshift(t.jsx(K,{children:"..."},"start-ellipsis")),f.unshift(t.jsx(K,{active:c===1,onClick:()=>g(1),children:"1"},1))),y<r&&(y<r-1&&f.push(t.jsx(K,{children:"..."},"end-ellipsis")),f.push(t.jsx(K,{active:r===c,onClick:()=>g(r),children:r},r))),f};return t.jsxs(go,{children:[t.jsx(ye,{disabled:c===1,onClick:()=>g(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),j(),t.jsx(ye,{disabled:c===r,onClick:()=>g(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},go=o.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,K=o.div`
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
`,ye=o.button`
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
`,bo=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:c,rows:p=3,...g})=>{const[j,f]=w.useState(!1),m=!!(n&&!s&&!j);return t.jsxs(mo,{children:[t.jsx(wo,{...g,value:s,placeholder:m?"":e,onFocus:()=>f(!0),onBlur:x=>{f(!1),g.onBlur?.(x)},onChange:i,hasError:r,rows:p}),n&&t.jsx(vo,{isVisible:m,children:n}),r&&c&&t.jsx(yo,{children:c})]})},mo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,wo=o.textarea`
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
`,vo=o.label`
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
`,yo=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,De=({title:e,onClose:n,onCancel:s,onSave:i,children:r,isSaveDisabled:c=!1,isSubmitting:p=!1,mode:g="create",hideSaveButton:j=!1,hideCanselButton:f=!1,width:m="560px",saveButtonText:x="Сохранить",customLayout:y})=>{const d=g==="view",h=w.useRef(null);w.useEffect(()=>{const k=L=>{L.key==="Escape"&&n()};document.addEventListener("keydown",k);const E=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>h.current?.focus(),0),()=>{document.removeEventListener("keydown",k),document.body.style.overflow=E}},[n]);const l=k=>{k.target===k.currentTarget&&n()},I=k=>{k.preventDefault(),s()};return t.jsx(ko,{onMouseDown:l,role:"presentation",children:t.jsxs(jo,{ref:h,$width:m,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Le,{children:[t.jsx(Ee,{children:e}),t.jsx(Co,{type:"button",onClick:n,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),y?t.jsx($o,{children:y}):null,t.jsxs(So,{onSubmit:i,children:[t.jsx(Mo,{children:r}),t.jsxs(To,{children:[t.jsx(Do,{children:f?null:t.jsx(Eo,{isPrimary:!1,onClick:I,children:"Отменить"})}),t.jsx(Lo,{children:!d&&!j?t.jsx(Po,{type:"submit",disabled:c||p,children:p?"Сохранение...":x}):null})]})]})]})})},ko=o.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,jo=o.div`
  width: min(100%, ${({$width:e})=>e});
  max-height: min(85vh, 720px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 16px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  outline: none;
`,Le=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Ee=o.h2`
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
`,Co=o.button`
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
`,$o=o.div`
  padding: 12px 18px 0 18px;
`,So=o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,Mo=o.div`
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
`,To=o.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,Do=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Lo=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Eo=o(ae)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Po=o(ae)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Io=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Ro=({value:e="",placeholder:n="Выберите период",options:s=Io,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:c})=>{const[p,g]=w.useState(!1),[j,f]=w.useState(!1),[m,x]=w.useState(""),[y,d]=w.useState(""),[h,l]=w.useState(""),I=w.useRef(null),k=w.useRef(null);w.useEffect(()=>{if(e==="Custom"&&y&&h){const B=R(y),A=R(h);x(`С ${B} по ${A}`)}else{const B=s.find(A=>A.value===e);x(B?B.label:"")}},[e,s,y,h]),w.useEffect(()=>{const B=A=>{I.current&&!I.current.contains(A.target)&&g(!1),j&&k.current&&!k.current.contains(A.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(v=>v.contains(A.target))||f(!1))};return document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)}},[j]);const E=B=>{r?.(B.value),g(!1)},L=()=>{g(!1),c?c():f(!0)},F=()=>{r?.(""),x(""),d(""),l("")},z=()=>{if(y&&h){const B=R(y),A=R(h),W=`С ${B} по ${A}`;r?.("Custom",y,h),x(W),f(!1)}},R=B=>{const A=new Date(B),W=String(A.getDate()).padStart(2,"0"),_=String(A.getMonth()+1).padStart(2,"0"),v=A.getFullYear();return`${W}.${_}.${v}`},Y=()=>t.jsxs(Zo,{children:[t.jsx(Le,{style:{margin:0},children:t.jsx(Ee,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Uo,{onClick:F,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Bo,{ref:I,children:[t.jsxs(zo,{onClick:()=>g(!p),children:[t.jsx(Ao,{children:m||n}),t.jsx(Fo,{$isOpen:p,children:"▼"})]}),p&&t.jsxs(_o,{children:[s.map(B=>t.jsxs(Oo,{onClick:()=>E(B),$isSelected:e===B.value,children:[t.jsx(No,{$isSelected:e===B.value,children:e===B.value&&t.jsx(Yo,{})}),t.jsx(Wo,{children:B.label})]},B.id)),i&&t.jsx(Ho,{onClick:L,children:"Другой период"})]})]}),j&&t.jsx("div",{ref:k,children:t.jsx(De,{title:"",onClose:()=>f(!1),onCancel:()=>f(!1),onSave:B=>{B.preventDefault(),z()},saveButtonText:"Выбрать",customLayout:t.jsx(Y,{}),children:t.jsxs(Vo,{children:[t.jsx(ke,{children:t.jsx(ne,{value:y,onChange:B=>d(B)})}),t.jsx(ke,{children:t.jsx(ne,{value:h,onChange:B=>l(B)})})]})})})]})},Bo=o.div`
  position: relative;
  width: 245px;
`,zo=o.div`
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
`,Ao=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fo=o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,_o=o.div`
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
`,Oo=o.div`
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
`,No=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Yo=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Wo=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Ho=o.div`
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
`,Vo=o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,ke=o.div`
  flex: 1;
`,Zo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Uo=o.button`
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
`,Xo=({name:e,value:n,onChange:s,onBlur:i,onKeyPress:r,placeholder:c="8 (999) 500-50-50",customPlaceholder:p,tabIndex:g,disabled:j=!1,hasError:f=!1,errorMessage:m})=>{const[x,y]=w.useState(!1),d=w.useRef(null),h=!!(p&&!n&&!x),l=L=>{const z=L.replace(/\D/g,"").slice(0,11);let R="";return z.length>0&&(R+="8"),z.length>1&&(R+=` (${z.slice(1,4)}`),z.length>4&&(R+=`) ${z.slice(4,7)}`),z.length>7&&(R+=`-${z.slice(7,9)}`),z.length>9&&(R+=`-${z.slice(9,11)}`),R},I=L=>{const F=l(L.target.value),z={...L,target:{...L.target,name:e,value:F}};s(z)},k=L=>{y(!1),i?.(L)},E=L=>{r?.(L)};return t.jsxs(qo,{children:[t.jsx(Go,{ref:d,name:e,type:"tel",value:n,onChange:I,onKeyPress:E,placeholder:h?"":c,maxLength:18,tabIndex:g,disabled:j,hasError:f,onFocus:()=>y(!0),onBlur:k,inputMode:"tel"}),p&&t.jsx(Jo,{isVisible:h,children:p}),f&&m&&t.jsx(Ko,{children:m})]})},qo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Go=o.input`
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
`,Jo=o.label`
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
`,Ko=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Qo=({tabs:e,activeTab:n,onChange:s,addButton:i,fontSize:r=14})=>{const c=e.find(p=>p.id===n)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(en,{children:t.jsxs(tn,{children:[e.map(p=>t.jsxs(on,{$isActive:n===p.id,onClick:()=>s(p.id),$fontSize:r,children:[p.label,n===p.id&&t.jsx(nn,{})]},p.id)),i&&t.jsx(rn,{children:i})]})}),c&&t.jsx(sn,{children:c})]})},en=o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,tn=o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,on=o.li`
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
`,nn=o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,rn=o.li`
  margin-left: auto;
  padding: 4px 0;
`,sn=o.div`
  margin-top: 20px;
`,an=({mode:e,primaryValue:n,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:c,disabled:p=!1,hasError:g=!1,errorMessage:j="",customIcon:f})=>{const x=f||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(pn,{children:[t.jsx(un,{children:n||"Не указано"}),s&&t.jsx(hn,{children:s})]}):t.jsxs(ln,{children:[t.jsxs(cn,{children:[t.jsx(dn,{type:"text",value:n||"",placeholder:i,readOnly:!0,disabled:p}),n&&!p&&t.jsx(fn,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!p&&t.jsx(xn,{type:"button",onClick:r,"aria-label":"Выбрать",children:x}),g&&j&&t.jsx(gn,{children:j})]})},ln=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,cn=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,dn=o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,pn=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,un=o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,hn=o.span`
  font-size: 13px;
  color: #666;
`,xn=o.button`
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
`,fn=o.button`
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
`,gn=o.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,le=o.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,bn=({total:e})=>t.jsx("div",{children:t.jsxs(mn,{children:["Всего: ",e]})}),mn=o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,wn=o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,vn=o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,yn=o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,kn=o.span`
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
`,jn=o.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Cn=({checked:e,onChange:n,disabled:s})=>{const i=()=>{s||n(!e)};return t.jsxs(yn,{children:[t.jsx(jn,{checked:e,onChange:i,disabled:s}),t.jsx(kn,{checked:e,disabled:s})]})},$n=({id:e,name:n,checked:s,onChange:i,children:r})=>t.jsxs(Sn,{htmlFor:e,children:[t.jsx(Mn,{type:"radio",id:e,name:n,checked:s,onChange:i}),r]}),Sn=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Mn=o.input`
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
`,Tn=({percentage:e,onChange:n,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=w.useRef(null),[c,p]=w.useState(!1),g=x=>{!s||!n||(x.preventDefault(),p(!0),m(x))},j=x=>{!c||!n||m(x)},f=()=>{p(!1)},m=x=>{if(!r.current||!n)return;const y=r.current.getBoundingClientRect();let h=(x.clientX-y.left)/y.width*100;h=Math.max(0,Math.min(100,h)),n(Math.round(h))};return w.useEffect(()=>{if(c)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",f)}},[c]),t.jsxs(Dn,{ref:r,$draggable:s,onMouseDown:g,children:[t.jsx(Ln,{$secondaryColor:i.secondary}),t.jsx(En,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(Pn,{$percentage:e,$primaryColor:i.primary})]})},Dn=o.div`
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
`,Ln=o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,En=o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Pn=o.div`
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
`,In=["zoomControl","fullscreenControl"];let oe=null;const Rn=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((n,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>n(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),Bn=({onLocationSelect:e,initialAddress:n="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:c=12,height:p=400,width:g="100%",inputPlaceholder:j="Введите адрес или название места",searchButtonLabel:f="Найти",draggablePlacemark:m=!0,controls:x=In,showSearch:y=!0,className:d,style:h,onError:l})=>{const[I,k]=w.useState(null),[E,L]=w.useState(n),[F,z]=w.useState(n),[R,Y]=w.useState(!1),B=w.useRef(null);w.useEffect(()=>{let _=!1,v;return(async()=>{try{const M=await Rn(r);if(_||!B.current)return;v=new M.Map(B.current,{center:[s,i],zoom:c,controls:x});const D=new M.Placemark([s,i],{},{draggable:m});v.geoObjects.add(D),v.events.add("click",N=>{const P=N.get("coords");A(P,D,v)}),D.events.add("dragend",()=>{const N=D.geometry.getCoordinates();A(N,D,v)}),k(v),Y(!0)}catch(M){l&&M instanceof Error&&l(M)}})(),()=>{_=!0,v&&v.destroy()}},[r,s,i,c,x,m,l]);const A=async(_,v,u)=>{if(window.ymaps)try{const N=(await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();v.geometry.setCoordinates(_),u.panTo(_,{flying:!0}),z(N),L(N),e(N,_[0],_[1])}catch(M){l&&M instanceof Error&&l(M)}},W=async()=>{if(!(!E.trim()||!window.ymaps||!I))try{const v=(await window.ymaps.geocode(E)).geoObjects.get(0);if(v){const u=v.geometry.getCoordinates(),M=v.properties.get("boundedBy");I.setBounds(M,{checkZoomRange:!0});const D=new window.ymaps.Placemark(u,{},{draggable:m});I.geoObjects.removeAll(),I.geoObjects.add(D);const N=v.getAddressLine();z(N),e(N,u[0],u[1]),D.events.add("dragend",()=>{const P=D.geometry.getCoordinates();A(P,D,I)})}}catch(_){l&&_ instanceof Error&&l(_)}};return t.jsxs(zn,{className:d,style:h,children:[y&&t.jsxs(An,{children:[t.jsx(Te,{type:"text",value:E,onChange:_=>L(_.target.value),placeholder:j,onKeyPress:_=>_.key==="Enter"&&W(),disabled:!R}),t.jsx(Fn,{onClick:W,disabled:!R,children:f})]}),t.jsxs(On,{children:["Выбранный адрес: ",t.jsx("strong",{children:F||"Не выбран"})]}),t.jsx(_n,{ref:B,$height:p,$width:g}),t.jsx(Nn,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},zn=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,An=o.div`
  display: flex;
  gap: 8px;
`,Fn=o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,_n=o.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,On=o.div`
  font-size: 14px;
  color: #374151;
`,Nn=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,ce=o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;function re(e,n="₽"){if(!e||e.trim()==="")return`0${n}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${n}`;const i=parseInt(s,10);if(isNaN(i))return`0${n}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${n}`:r}function Yn(e){if(!e)return 0;const n=e.replace(/\D/g,"");return parseInt(n,10)}const Wn=({title:e,data:n,maxValue:s,step:i,height:r=300,titleFontSize:c})=>{const[p,g]=w.useState(null),j=[];for(let m=0;m<=s;m+=i)j.push(m);const f=n.length>0?n[0].bars.map(m=>({name:m.name,color:m.color})):[];return t.jsxs(Hn,{children:[t.jsxs(le,{style:{marginTop:"0"},children:[t.jsx(ce,{style:{fontSize:c},children:e}),t.jsx(Vn,{children:f.map((m,x)=>t.jsxs(Zn,{children:[t.jsx(Un,{color:m.color}),t.jsx(Xn,{children:m.name})]},x))})]}),t.jsxs(qn,{height:r,children:[t.jsx(Gn,{children:j.map((m,x)=>t.jsx(Jn,{children:m.toLocaleString()},x))}),t.jsxs(Kn,{children:[t.jsxs(Qn,{children:[j.map((m,x)=>{const y=m/s*100;return t.jsx(er,{position:100-y},`line-${x}`)}),n.map((m,x)=>t.jsxs(tr,{onMouseEnter:()=>g(x),onMouseLeave:()=>g(null),children:[m.bars.map((y,d)=>{const h=m.bars.slice(d+1).reduce((l,I)=>l+I.value,0);return t.jsx(or,{height:y.value/s*100,offset:h/s*100,color:y.color,isHovered:p!==null&&p!==x},d)}),p===x&&t.jsxs(ir,{children:[t.jsxs(sr,{children:[t.jsxs(ar,{children:["Всего: ",re(m.total.toString())]}),m.bars.map((y,d)=>t.jsxs(lr,{children:[y.name,": ",re(y.value.toString())]},d))]}),t.jsx(cr,{})]})]},x))]}),t.jsx(nr,{children:n.map((m,x)=>t.jsx(rr,{style:{flex:1,textAlign:"center"},children:m.label},x))})]})]})]})},Hn=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Vn=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,Zn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Un=o.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Xn=o.span`
  font-size: 14px;
  color: #4b5563;
`,qn=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Gn=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,Jn=o.span`
  font-size: 12px;
  color: #6b7280;
`,Kn=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,Qn=o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,er=o.div`
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
`,tr=o.div`
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
`,or=o.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,nr=o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,rr=o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,ir=o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,sr=o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,ar=o.div`
  font-weight: 600;
  margin-bottom: 6px;
`,lr=o.div`
  margin-bottom: 2px;
`,cr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,dr=o.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,pr=({title:e,data:n,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:c,minY:p,xStep:g,yStep:j,height:f=300,showLegend:m=!0,xAxisCustomLabels:x,showTooltip:y=!0,titleFontSize:d="30px"})=>{const[h,l]=w.useState(null),[I,k]=w.useState({x:0,y:0}),E=w.useRef(null),L=w.useRef(null),F=Math.max(...n.map(v=>v.x),r),z=[];for(let v=0;v<=F;v+=g)z.push(v);const R=[];for(let v=p;v<=c;v+=j)R.push(v);const Y=x||z.map(v=>v.toString()),B=m?Array.from(new Set(n.filter(v=>v.label).map(v=>v.label))).map(v=>{const u=n.find(M=>M.label===v);return{name:v,color:u.color}}):[],A={};n.forEach(v=>{const u=v.label||"default";A[u]||(A[u]=[]),A[u].push(v)});const W=v=>v/F*100,_=v=>{const u=c-p;return 100-(v-p)/u*100};return w.useEffect(()=>{if(h&&L.current){const v=L.current.getBoundingClientRect(),u=W(h.x)/100*v.width,M=_(h.y)/100*v.height;k({x:u+v.left,y:M+v.top})}},[h,r,c,p]),t.jsxs(ur,{children:[t.jsxs(le,{style:{marginTop:"0"},children:[t.jsx(ce,{style:{fontSize:d},children:e}),m&&B.length>0&&t.jsx(hr,{children:B.map((v,u)=>t.jsxs(xr,{children:[t.jsx(fr,{color:v.color}),t.jsx(gr,{children:v.name})]},u))})]}),t.jsxs(br,{height:f,children:[t.jsxs(mr,{children:[R.map((v,u)=>t.jsx(wr,{children:v.toLocaleString()},u)),t.jsx(je,{children:i})]}),t.jsxs(vr,{ref:L,children:[R.map((v,u)=>t.jsx(yr,{position:_(v)},`hline-${u}`)),Object.values(A).map((v,u)=>v.map((M,D)=>{if(D===0)return null;const N=v[D-1],P=W(N.x),V=_(N.y),b=W(M.x),C=_(M.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${P}%`,y1:`${V}%`,x2:`${b}%`,y2:`${C}%`,stroke:M.color,strokeWidth:"1"})},`line-${u}-${D}`)})),n.map((v,u)=>t.jsx(kr,{x:W(v.x),y:_(v.y),color:v.color,onMouseEnter:()=>l(v),onMouseLeave:()=>l(null),isHovered:h?.label===v.label},u))]})]}),y&&h&&t.jsxs($r,{ref:E,style:{left:I.x,top:I.y},children:[t.jsxs(Sr,{children:[h.name&&t.jsx(Mr,{children:h.name}),t.jsx(Tr,{children:h.y.toLocaleString()})]}),t.jsx(Dr,{})]}),t.jsxs(jr,{children:[Y.map((v,u)=>{const D=z[u]/F*100;return t.jsx(Cr,{style:{left:`${D}%`,transform:"translateX(-50%)"},children:v},u)}),s&&t.jsx(je,{children:s})]})]})},ur=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,hr=o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,xr=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,fr=o.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,gr=o.span`
  font-size: 14px;
  color: #4b5563;
`,br=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,mr=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,wr=o.span`
  font-size: 12px;
  color: #6b7280;
`,je=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,vr=o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,yr=o.div`
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
`,kr=o.div`
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
`,jr=o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Cr=o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,$r=o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${dr} 0.15s ease-out forwards;
`,Sr=o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Mr=o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Tr=o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Dr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Lr=({images:e,initialIndex:n,onClose:s})=>{const[i,r]=w.useState(n),[c,p]=w.useState(0),g=()=>{r(x=>x>0?x-1:e.length-1),p(0)},j=()=>{r(x=>x<e.length-1?x+1:0),p(0)},f=()=>{p(x=>(x+90)%360)},m=x=>{x.key==="Escape"?s():x.key==="ArrowLeft"?g():x.key==="ArrowRight"?j():(x.key==="r"||x.key==="к")&&f()};return t.jsx(Er,{onClick:s,onKeyDown:m,tabIndex:0,children:t.jsxs(Pr,{onClick:x=>x.stopPropagation(),children:[t.jsx(Ir,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Rr,{children:t.jsx(Br,{onClick:f,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(zr,{children:[t.jsx(Ce,{$position:"left",onClick:g,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Ar,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx(Ce,{$position:"right",onClick:j,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Fr,{children:e.map((x,y)=>t.jsx(_r,{$active:y===i,onClick:()=>{r(y),p(0)}},y))})]})})},Er=o.div`
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
`,Pr=o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ir=o.button`
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
`,Rr=o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Br=o.button`
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
`,zr=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Ar=o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Ce=o.button`
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
`,Fr=o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,_r=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Pe=({isOpen:e,callPhone:n,error:s,onClose:i})=>{const[r,c]=w.useState(!1);if(!e)return null;const p=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),g=()=>{p?window.location.href=`tel:${n}`:(navigator.clipboard.writeText(n),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Or,{onClick:i,children:t.jsxs(Nr,{onClick:j=>j.stopPropagation(),children:[t.jsx(Yr,{children:"Подтверждение авторизации"}),t.jsx($e,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Wr,{onClick:g,title:p?"Позвонить":"Копировать номер",$clickable:!0,children:[n,!p&&r&&t.jsx(Hr,{children:"Скопировано!"})]}),t.jsx($e,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),s&&t.jsx(Vr,{children:s})]})})},Or=o.div`
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
`,Nr=o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Yr=o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,$e=o.p`
  margin-bottom: 15px;
  color: #555;
`,Wr=o.div`
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
`,Hr=o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Vr=o.div`
  color: #e74c3c;
  margin: 10px 0;
`,Ie=w.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),Zr=({items:e,bottomItems:n=[],logo:s,arrowIcon:i,collapsed:r,onToggle:c,selectedKey:p,onSelect:g,autoCollapseOnSelect:j=!1,width:f="315px",collapsedWidth:m="70px",className:x,style:y})=>{const d=w.useContext(Ie),[h,l]=w.useState(r??d.collapsed??!1),[I,k]=w.useState(null),[E,L]=w.useState(p??d.selectedSideMenuItem??null),[F,z]=w.useState({visible:!1,x:0,y:0,items:[]}),R=w.useRef(null),Y=r??d.collapsed??h,B=P=>{l(P),d.toggleCollapsed(),c?.(P)},A=p??d.selectedSideMenuItem??E,W=P=>{L(P),d.setSelectedSideMenuItem(P)};w.useEffect(()=>{r!==void 0&&(l(r),r&&k(null))},[r]),w.useEffect(()=>{p!==void 0&&W(p)},[p]),w.useEffect(()=>{const P=()=>z(V=>({...V,visible:!1}));return document.addEventListener("click",P),()=>document.removeEventListener("click",P)},[]);const _=()=>{const P=!Y;B(P),P&&k(null)},v=P=>{P.disabled||P.hidden||(W(P.key),g?.(P),P.onClick?.(P),j&&(B(!0),k(null)))},u=P=>{k(V=>V===P?null:P)},M=(P,V)=>{const b=(P.children?.length||0)>0;if(Y&&b){V.stopPropagation();const C=V.currentTarget.getBoundingClientRect();z({visible:!0,x:C.right+6,y:C.top,items:P.children||[]});return}b?u(P.key):v(P)},D=(P,V=!1)=>P.filter(b=>!b.hidden).map(b=>{const C=(b.children?.length||0)>0,a=I===b.key,$=A===b.key||!!b.children&&b.children.some(S=>S.key===A);return t.jsxs(w.Fragment,{children:[t.jsxs(Qr,{$collapsed:Y,$selected:$,onClick:S=>M(b,S),$disabled:b.disabled,title:b.label,children:[b.icon&&t.jsx(ti,{$collapsed:Y,children:b.icon}),!Y&&t.jsx(ei,{children:b.label}),!Y&&C&&t.jsx(ni,{$expanded:a,children:"▾"})]}),!Y&&C&&a&&t.jsx(oi,{children:D(b.children||[],!0)})]},b.key)}),N=w.useMemo(()=>F.visible?t.jsx(ii,{style:{left:F.x,top:F.y},children:F.items.map(P=>t.jsx(si,{onClick:()=>{v(P),z({visible:!1,x:0,y:0,items:[]})},$selected:A===P.key,children:P.label},P.key))}):null,[F,A]);return t.jsxs(Ur,{ref:R,$collapsed:Y,$width:f,$collapsedWidth:m,className:x,style:y,children:[t.jsxs(Xr,{children:[t.jsx(qr,{onClick:_,"aria-label":"Переключить меню",children:i??t.jsx(Gr,{$collapsed:Y,children:"❮"})}),!Y&&s&&t.jsx(Jr,{children:s})]}),t.jsxs(Kr,{children:[t.jsx(Se,{children:D(e)}),n.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ri,{}),t.jsx(Se,{children:D(n)})]})]}),N,t.jsx(ai,{$collapsed:Y})]})},Ur=o.div`
  width: ${({$collapsed:e,$width:n,$collapsedWidth:s})=>e?s:n};
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
`,Xr=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`,qr=o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`,Gr=o.span`
  display: inline-block;
  transform: rotate(${({$collapsed:e})=>e?"180deg":"0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`,Jr=o.div`
  flex: 1;
  display: flex;
  align-items: center;
`,Kr=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Se=o.div`
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
`,Qr=o.div`
  display: flex;
  align-items: center;
  gap: ${({$collapsed:e})=>e?"0":"12px"};
  padding: ${({$collapsed:e})=>e?"15px 0":"15px 17px"};
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({$disabled:e})=>e?.5:1};

  &:hover {
    background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`,ei=o.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,ti=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({$collapsed:e})=>e?"24px":"21px"};
`,oi=o.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ni=o.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,ri=o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,ii=o.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,si=o.div`
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
`,ai=o.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,li=e=>{const n=e.replace(/\D/g,""),i=(n.startsWith("8")||n.length===0?n:`8${n}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},Re=({value:e,onChange:n,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=c=>{const p=li(c.target.value);n(p)};return t.jsx(ci,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},ci=o.input`
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
`,Be=(e,n)=>q("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:n}}),ze=(e,n,s,i)=>q("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:n,user_type:s,name:i}}),di=()=>q("/auth/session/info",{method:"GET"}),pi=({isOpen:e,onClose:n,onSubmit:s,error:i,isLoading:r=!1,callPhone:c=""})=>{const[p,g]=w.useState("");if(!e)return null;const j=f=>{f.preventDefault(),s(p)};return t.jsx(ui,{onClick:n,children:t.jsxs(hi,{onClick:f=>f.stopPropagation(),children:[t.jsx(xi,{children:"Завершение регистрации"}),t.jsxs(fi,{children:[t.jsx(gi,{children:"Номер для звонка:"}),t.jsx(bi,{children:c}),t.jsx(mi,{children:"Позвоните на этот номер после ввода ФИО"})]}),t.jsxs(wi,{onSubmit:j,children:[t.jsxs(vi,{children:[t.jsx(yi,{children:"Введите ФИО"}),t.jsx(ki,{type:"text",value:p,onChange:f=>g(f.target.value),placeholder:"Иванов Иван Иванович",disabled:r,autoFocus:!0}),i&&t.jsx(ji,{children:i})]}),t.jsxs(Ci,{children:[t.jsx($i,{type:"submit",disabled:r,children:r?"Загрузка...":"Продолжить"}),t.jsx(Si,{type:"button",onClick:n,disabled:r,children:"Отмена"})]})]})]})})},ui=o.div`
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
`,hi=o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,xi=o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`,fi=o.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  text-align: center;
`,gi=o.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`,bi=o.div`
  font-size: 22px;
  font-weight: bold;
  color: rgba(0, 125, 136, 1);
  margin-bottom: 8px;
`,mi=o.div`
  font-size: 13px;
  color: #888;
`,wi=o.form`
  display: flex;
  flex-direction: column;
`,vi=o.div`
  margin-bottom: 20px;
`,yi=o.label`
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`,ki=o.input`
  width: 100%;
  padding: 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
  outline: none;

  &:focus {
    border-color: rgba(0, 125, 136, 1);
    box-shadow: 0 0 0 3px rgba(0, 125, 136, 0.1);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`,ji=o.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`,Ci=o.div`
  display: flex;
  gap: 12px;
`,$i=o.button`
  flex: 2;
  background: linear-gradient(
    90deg,
    rgba(0, 125, 136, 1) 0%,
    rgba(37, 203, 161, 1) 100%
  );
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Si=o.button`
  flex: 1;
  background: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background: #eeeeee;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Mi=({onLoginSuccess:e,userType:n="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:p="https://waypay.one",supportLinkText:g="waypay.one",className:j,style:f,pollingIntervalMs:m=3e3,enableRegistration:x=!1})=>{const[y,d]=w.useState(!1),[h,l]=w.useState(""),[I,k]=w.useState(!1),[E,L]=w.useState(""),[F,z]=w.useState(""),[R,Y]=w.useState(!1),[B,A]=w.useState(!1),[W,_]=w.useState(""),[v,u]=w.useState(""),[M,D]=w.useState(null),N=w.useRef(void 0);w.useEffect(()=>()=>{N.current&&clearInterval(N.current)},[]);const P=S=>{const T=S.replace(/\D/g,"");return T?T.startsWith("8")?`+7${T.slice(1)}`:T.startsWith("7")?`+${T}`:`+${T}`:""},V=()=>{k(!1),A(!1),_(""),u(""),D(null),N.current&&window.clearInterval(N.current)},b=async S=>{if(S.preventDefault(),!h){z("Введите номер телефона");return}d(!0),z("");const T=P(h);try{const O=await Be(T,n);D({phone:T,checkId:O.check_id,callPhone:O.call_phone}),x&&"name_required"in O&&O.name_required?(A(!0),L(O.call_phone)):!x&&"name_required"in O&&O.name_required?(z("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),D(null)):(L(O.call_phone),k(!0),a(T,O.check_id))}catch(O){console.error("Auth error:",O),z("Не удалось инициировать авторизацию. Проверьте номер.")}finally{d(!1)}},C=async S=>{if(!S.trim()){u("Введите ФИО");return}if(M){d(!0),u("");try{_(S),A(!1),k(!0),a(M.phone,M.checkId,S)}catch(T){console.error("Registration error:",T),u("Не удалось завершить регистрацию")}finally{d(!1)}}},a=(S,T,O)=>{N.current&&window.clearInterval(N.current),N.current=window.setInterval(()=>{$(S,T,O)},m)},$=async(S,T,O)=>{if(!R){Y(!0);try{const Z=await ze(S,T,n,O||W);Z.access_token&&Z.refresh_token&&(N.current&&window.clearInterval(N.current),k(!1),A(!1),_(""),D(null),e(Z.access_token))}catch(Z){console.error("Verification error:",Z),z("Ошибка проверки авторизации")}finally{Y(!1)}}};return t.jsxs(Ti,{className:j,style:f,children:[t.jsxs(Di,{children:[t.jsxs(Li,{onSubmit:b,children:[t.jsx(Ei,{children:s}),t.jsx(Pi,{children:t.jsx(Ii,{children:t.jsx(Re,{value:h,onChange:S=>l(S),placeholder:r})})}),F&&t.jsx(Fi,{children:t.jsx("span",{children:F})}),t.jsx(Ri,{type:"submit",disabled:y,children:y?"Загрузка...":i})]}),t.jsxs(Bi,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(zi,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(Ai,{href:p,target:"_blank",rel:"noreferrer",children:g})]})]}),t.jsx(pi,{isOpen:B,onClose:V,onSubmit:C,error:v,isLoading:y,callPhone:E}),t.jsx(Pe,{isOpen:I,onClose:V,callPhone:E,error:F})]})},Ti=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,Di=o.div`
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
`,Li=o.form`
  display: flex;
  flex-direction: column;
`,Ei=o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,Pi=o.div`
  margin-bottom: 25px;
`,Ii=o.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ri=o.button`
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
`,Bi=o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,zi=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Ai=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Fi=o.div`
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
`,Ae=e=>{let n=0;for(let i=0;i<e.length;i++)n=e.charCodeAt(i)+((n<<5)-n);return`hsl(${Math.abs(n%360)}, 60%, 60%)`},_i=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Oi=(e,n=100)=>{const s=document.createElement("canvas");s.width=n,s.height=n;const i=s.getContext("2d");if(!i)return"";const r=Ae(e);i.fillStyle=r,i.beginPath(),i.arc(n/2,n/2,n/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=n/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const p=c*.1;return i.fillText(e,n/2,n/2+p),s.toDataURL("image/png")},Ni=e=>{if(!e)return"";const n=typeof e=="string"?new Date(e):e;if(isNaN(n.getTime()))return"";const s=n.getDate().toString().padStart(2,"0"),i=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getFullYear();return`${s}-${i}-${r}`};function Yi(e){return new Date(e)}const Fe=e=>{let n;try{if(e instanceof Date)n=e;else if(typeof e=="string"||typeof e=="number")n=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(n.getTime()))return"неверная дата";const s=new Date;if(n>s){const m=Math.floor((n.getTime()-s.getTime())/1e3),x=Math.floor(m/60),y=Math.floor(x/60),d=Math.floor(y/24);return m<10?"скоро":m<60?`через ${m} секунд`:x===1?"через минуту":x<60?`через ${x} минут`:y===1?"через час":y<24?`через ${y} часов`:d===1?"завтра":d<7?`через ${d} дней`:"в будущем"}const i=Math.floor((s.getTime()-n.getTime())/1e3),r=Math.floor(i/60),c=Math.floor(r/60),p=Math.floor(c/24),g=Math.floor(p/7),j=Math.floor(p/30),f=Math.floor(p/365);if(i<10)return"только что";if(i<60){const m=Math.max(1,i);return m===1?"секунду назад":m<5?`${m} секунды назад`:`${m} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:p<7?p===1?"вчера":p===2?"позавчера":`${p} дня назад`:g<4?g===1?"неделю назад":g<5?`${g} недели назад`:`${g} недель назад`:j<12?j===1?"месяц назад":j<5?`${j} месяца назад`:`${j} месяцев назад`:f===1?"год назад":f<5?`${f} года назад`:`${f} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},_e=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Wi=(e,n={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=n,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?_e(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Fe(r)};exports.API_BASE_URL=se;exports.AddButton=lt;exports.AuthCallModal=Pe;exports.AuthPage=Mi;exports.BackButton=xt;exports.BaseModal=De;exports.Checkbox=Nt;exports.ColumnChart=Wn;exports.ContextMenu=ie;exports.CountInfoTitle=bn;exports.CustomCalendar=ne;exports.CustomInput=Te;exports.CustomPhoneInput=Re;exports.CustomSelect=St;exports.CustomTable=Ge;exports.CustomTextArea=bo;exports.CustomTitle=ce;exports.DefaultButton=ae;exports.DeleteButton=bt;exports.EditButton=wt;exports.EntitySelectContainer=an;exports.ExportButton=kt;exports.InputTitle=wn;exports.ModalInfoTitle=vn;exports.Pagination=fo;exports.PeriodField=Ro;exports.PhoneModalInput=Xo;exports.PhotoViewerModal=Lr;exports.ProgressBar=Tn;exports.RadioButton=$n;exports.ScatterPlot=pr;exports.SideMenu=Zr;exports.SideMenuContext=Ie;exports.Tabs=Qo;exports.TitleField=le;exports.ToggleSwitch=Cn;exports.YandexMapSelector=Bn;exports.apiRequest=q;exports.authStorage=ut;exports.confirmCallAuth=ze;exports.formatDate=Ni;exports.formatExactDate=_e;exports.formatMoney=re;exports.formatRelativeTime=Fe;exports.formatRelativeTimeExtended=Wi;exports.generateAvatar=Oi;exports.getInitials=_i;exports.getSessionInfo=di;exports.initiateCallAuth=Be;exports.parseDateInput=Yi;exports.parseMoney=Yn;exports.stringToColor=Ae;
