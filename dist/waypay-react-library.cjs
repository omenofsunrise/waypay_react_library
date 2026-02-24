"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const v=require("react"),o=require("styled-components"),U=require("framer-motion");var Q={exports:{}},q={};var ue;function He(){if(ue)return q;ue=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(i,r,d){var p=null;if(d!==void 0&&(p=""+d),r.key!==void 0&&(p=""+r.key),"key"in r){d={};for(var m in r)m!=="key"&&(d[m]=r[m])}else d=r;return r=d.ref,{$$typeof:e,type:i,key:p,ref:r!==void 0?r:null,props:d}}return q.Fragment=n,q.jsx=s,q.jsxs=s,q}var G={};var pe;function Ve(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===_?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case I:return"Fragment";case R:return"Profiler";case k:return"StrictMode";case B:return"Suspense";case N:return"SuspenseList";case W:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case F:return a.displayName||"Context";case L:return(a._context.displayName||"Context")+".Consumer";case A:var $=a.render;return a=a.displayName,a||(a=$.displayName||$.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case E:return $=a.displayName||null,$!==null?$:e(a.type)||"Memo";case z:$=a._payload,a=a._init;try{return e(a($))}catch{}}return null}function n(a){return""+a}function s(a){try{n(a);var $=!1}catch{$=!0}if($){$=console;var S=$.error,D=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return S.call($,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",D),n(a)}}function i(a){if(a===I)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===z)return"<...>";try{var $=e(a);return $?"<"+$+">":"<...>"}catch{return"<...>"}}function r(){var a=g.A;return a===null?null:a.getOwner()}function d(){return Error("react-stack-top-frame")}function p(a){if(u.call(a,"key")){var $=Object.getOwnPropertyDescriptor(a,"key").get;if($&&$.isReactWarning)return!1}return a.key!==void 0}function m(a,$){function S(){Y||(Y=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",$))}S.isReactWarning=!0,Object.defineProperty(a,"key",{get:S,configurable:!0})}function j(){var a=e(this.type);return P[a]||(P[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function x(a,$,S,D,O,Z){var H=S.ref;return a={$$typeof:h,type:a,key:$,props:S,_owner:D},(H!==void 0?H:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:j}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Z}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function w(a,$,S,D,O,Z){var H=$.children;if(H!==void 0)if(D)if(M(H)){for(D=0;D<H.length;D++)f(H[D]);Object.freeze&&Object.freeze(H)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(H);if(u.call($,"key")){H=e(a);var X=Object.keys($).filter(function(We){return We!=="key"});D=0<X.length?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}",C[H+D]||(X=0<X.length?"{"+X.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,D,H,X,H),C[H+D]=!0)}if(H=null,S!==void 0&&(s(S),H=""+S),p($)&&(s($.key),H=""+$.key),"key"in $){S={};for(var ee in $)ee!=="key"&&(S[ee]=$[ee])}else S=$;return H&&m(S,typeof a=="function"?a.displayName||a.name||"Unknown":a),x(a,H,S,r(),O,Z)}function f(a){y(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===z&&(a._payload.status==="fulfilled"?y(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function y(a){return typeof a=="object"&&a!==null&&a.$$typeof===h}var c=v,h=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),F=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),_=Symbol.for("react.client.reference"),g=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,u=Object.prototype.hasOwnProperty,M=Array.isArray,T=console.createTask?console.createTask:function(){return null};c={react_stack_bottom_frame:function(a){return a()}};var Y,P={},V=c.react_stack_bottom_frame.bind(c,d)(),b=T(i(d)),C={};G.Fragment=I,G.jsx=function(a,$,S){var D=1e4>g.recentlyCreatedOwnerStacks++;return w(a,$,S,!1,D?Error("react-stack-top-frame"):V,D?T(i(a)):b)},G.jsxs=function(a,$,S){var D=1e4>g.recentlyCreatedOwnerStacks++;return w(a,$,S,!0,D?Error("react-stack-top-frame"):V,D?T(i(a)):b)}})()),G}var he;function Ze(){return he||(he=1,process.env.NODE_ENV==="production"?Q.exports=He():Q.exports=Ve()),Q.exports}var t=Ze();const se=({x:e,y:n,items:s,onClose:i,...r})=>{const d=v.useRef(null),[p,m]=v.useState(null);v.useEffect(()=>{const c=h=>{d.current&&!d.current.contains(h.target)&&i()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[i]);const x=(()=>{if(!d.current)return{x:e,y:n};const c=d.current.offsetWidth,h=d.current.offsetHeight,l=window.innerWidth,I=window.innerHeight;let k=e,R=n;return k+c>l&&(k=e-c),R+h>I&&(R=n-h),{x:k,y:R}})(),w=(c,h)=>{c.submenu?m(p===h?null:h):c.action&&(c.action(),i())},f=c=>{s[c].submenu&&m(c)},y=c=>{const h=c.relatedTarget;d.current?.contains(h)||m(null)};return t.jsx(Ue,{ref:d,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:x.y,left:x.x},onClick:c=>c.stopPropagation(),onMouseLeave:y,...r,children:s.map((c,h)=>t.jsxs(Xe,{$hasSubmenu:!!c.submenu,$disabled:c.disabled,children:[t.jsx(qe,{onClick:l=>{l.stopPropagation(),c.disabled||w(c,h)},onMouseEnter:()=>!c.disabled&&f(h),whileHover:c.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:c.color,$disabled:c.disabled,children:t.jsxs(Ge,{children:[c.label,c.submenu&&t.jsx(Je,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),c.submenu&&p===h&&t.jsx(Ke,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(se,{x:0,y:-h*40,items:c.submenu,onClose:()=>m(null)})})]},h))})},Ue=o(U.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Xe=o.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,qe=o(U.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:n})=>n?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Ge=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Je=o.span`
  color: #666;
  margin-left: 8px;
`,Ke=o(U.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Qe=({columns:e,data:n,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:d,onRowClick:p,selectedRow:m,fixedHeight:j,hasTotalsRow:x,debtChecker:w,rowStyles:f={},isLoading:y})=>{const[c,h]=v.useState(null),[l,I]=v.useState(null),k=v.useRef(null),R=v.useRef(null),L=500,F=m!==void 0?m:c,A=b=>{!e[b].isSortable||!r||r(b)},N=w||(b=>{const C=b[8];return typeof C=="string"?parseFloat(C.replace(/[^\d.]/g,""))>0:!1}),E=b=>{m===void 0&&h(b===F?null:b),p&&p(n[b],b)},z=(b,C)=>{s&&s(b,C)},W=(b,C)=>{if(i.length===0)return;b.preventDefault();const a="touches"in b?b.touches[0].clientX:b.clientX,$="touches"in b?b.touches[0].clientY:b.clientY;I({x:a,y:$,rowIndex:C})},_=(b,C)=>{b.preventDefault(),W(b,C)},g=(b,C)=>{i.length!==0&&(R.current&&clearTimeout(R.current),R.current=window.setTimeout(()=>{W(b,C)},L))},u=()=>{R.current&&(clearTimeout(R.current),R.current=null)},M=()=>{R.current&&window.clearTimeout(R.current)},T=()=>{I(null)};v.useEffect(()=>{const b=()=>{l&&T()};return document.addEventListener("click",b),()=>{document.removeEventListener("click",b),R.current&&clearTimeout(R.current)}},[l]);const Y=(b,C,a)=>{if(C)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const $=f[b]||{};return b===F?{backgroundColor:$.backgroundColor||"#007D88",color:$.color||"#FFFFFF",fontWeight:$.fontWeight||"normal"}:a?{backgroundColor:$.backgroundColor||"#E8D8D8",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}:n[b][n[b].length-1]===!1?{backgroundColor:$.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:$.fontWeight||"normal"}:{backgroundColor:$.backgroundColor||"#FFFFFF",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}},P=(b,C,a)=>{if(C)return"#FFFFFF";const $=Y(b,C,a);return $.hoverBackgroundColor?$.hoverBackgroundColor:b===F?"#007D88":a?"#E8D8D8CC":n[b][n[b].length-1]===!1?"#51D5B4CC":"#F3F4F6"},V=()=>{if(!l||i.length===0)return null;const b=(typeof i=="function"?i(n[l.rowIndex]):i).filter(C=>typeof C=="object"&&(typeof C.shouldShow!="function"||C.shouldShow(n[l.rowIndex])));return b.length===0?null:t.jsx(rt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:C=>C.stopPropagation(),children:t.jsx(se,{items:b.map(C=>{const a={label:C.label,color:C.color,disabled:C.disabled};return C.getSubmenu?a.submenu=C.getSubmenu(n[l.rowIndex]):C.action&&(a.action=()=>{C.action(n[l.rowIndex],l.rowIndex),T()}),a}),onClose:T,x:0,y:0})})};return t.jsx(ot,{ref:k,children:y?t.jsx(et,{children:t.jsx(tt,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(it,{children:t.jsx(fe,{children:e.map((b,C)=>!b.isHidden&&t.jsx(at,{$isSortable:b.isSortable,$isActive:d?.key===C,onClick:()=>A(C),$align:b.align||"center",$isFirst:C===0,$isLast:C===e.length-1,children:t.jsxs(lt,{$align:b.align||"center",children:[b.name,b.isSortable&&t.jsx(ct,{$direction:d?.key===C?d.direction:"asc",animate:{rotate:d?.key===C&&d.direction==="desc"?180:0,color:d?.key===C?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},C))})}),t.jsx(st,{$fixedHeight:j,children:t.jsx(U.AnimatePresence,{children:n.map((b,C)=>{const a=!!(x&&C===n.length-1),$=!!(!a&&N(b)),S=Y(C,a,$),D=P(C,a,$);return t.jsx(fe,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:C===n.length-1,$isSelected:C===F,$isTotalsRow:a,onClick:()=>!a&&E(C),onDoubleClick:()=>!a&&z(b,C),onContextMenu:O=>!a&&_(O,C),onTouchStart:O=>!a&&g(O,C),onTouchEnd:u,onTouchMove:M,whileHover:a?{}:{backgroundColor:D,transition:{duration:.15}},style:{backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},children:b.map((O,Z)=>!e[Z]?.isHidden&&t.jsx(dt,{$align:e[Z]?.align||"center",$isFirst:Z===0,$isLast:Z===b.length-1,$isTotalsCell:a,$isBeforeTotals:a&&Z<b.findIndex(H=>H==="Итого:"),children:O},Z))},`row-${C}`)})})})]}),t.jsx(U.AnimatePresence,{children:V()})]})})},et=o.div`
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
`,tt=o.div`
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
`,ot=o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,nt=o.table`
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
`,rt=o(U.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,it=o.thead`
  text-align: center;
  position: relative;
`,st=o.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,fe=o(U.motion.tr)`
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
`,at=o.th`
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
`,lt=o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,ct=o(U.motion.span)`
  display: inline-flex;
  align-items: center;
`,dt=o.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:n})=>e||n?"none":"0.5px solid #d1d5db"};
`,ut=({onClick:e,tooltip:n,size:s=32,margin:i})=>t.jsx(pt,{onClick:e,size:s,margin:i,title:n,children:t.jsx(ht,{size:s})}),pt=o.button`
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
`,ht=o.div`
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
`,ae="http://95.163.226.24:8080/api";async function K(e,n={}){const{method:s="GET",body:i,headers:r={},token:d,withCredentials:p=!0}=n,m=async x=>{const w={"Content-Type":"application/json",...r};x&&(w.Authorization=`Bearer ${x}`);const f=e.startsWith("http")?e:`${ae}${e}`;return await fetch(f,{method:s,headers:w,body:i?JSON.stringify(i):void 0,credentials:p?"include":"same-origin"})},j=async(x,w=!0)=>{const f=await m(x);if(f.ok){if(f.status===204)return null;const c=await f.text();if(!c)return null;try{return JSON.parse(c)}catch{return c}}if(f.status===401&&w){const c=await ft();if(c)return j(c,!1)}let y=`Request failed with status ${f.status}`;try{const c=await f.json();c&&typeof c.error=="string"?y=c.error:typeof c=="string"&&(y=c)}catch{const c=await f.text();c&&(y=c)}throw new Error(y)};return j(d)}async function ft(){const e=await fetch(`${ae}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const n=await e.json();return n.access_token?n.access_token:null}const Le={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await K("/auth/session/info",{method:"GET"})}catch{return null}},async logout(){try{await K("/auth/session/revoke",{method:"POST"})}catch(e){throw console.error("Logout error:",e),e}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},xt=()=>Le.getSessionInfo(),gt=o.button`
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
`,bt=({children:e,onClick:n})=>t.jsxs(gt,{onClick:n,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),le=({children:e="Подтвердить",icon:n,disabled:s=!1,bg:i,hoverBg:r,disabledBg:d,textColor:p,fullWidth:m=!1,minWidth:j,width:x,isPrimary:w=!0,...f})=>{const c=i?{bg:i,hoverBg:r||i,disabledBg:d||i,textColor:p||(w?"white":"black")}:w?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(mt,{disabled:s,$bg:c.bg,$hoverBg:c.hoverBg,$disabledBg:c.disabledBg,$textColor:c.textColor,$fullWidth:m,$minWidth:j,$width:x,...f,children:[n&&t.jsx(wt,{children:n}),t.jsx("span",{children:e})]})},mt=o.button`
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
`,wt=o.span`
  display: inline-flex;
  align-items: center;
`,vt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(yt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),yt=o.button`
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
`,kt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(jt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),jt=o.button`
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
`,Ct=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),$t=({children:e="Экспорт",icon:n=t.jsx(Ct,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...d})=>{const p=async m=>{if(s)try{await s()}catch(j){console.error("Export error:",j)}d.onClick&&d.onClick(m)};return t.jsx(St,{...d,onClick:p,disabled:i||d.disabled,children:i?t.jsxs(Mt,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx(Dt,{progress:r})]}):t.jsxs(t.Fragment,{children:[n,t.jsx("span",{children:e})]})})},St=o.button`
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
`,Mt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,Dt=o.div`
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
`,Tt=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:d,options:p,name:m,disabled:j=!1,required:x=!1,...w})=>{const[f,y]=v.useState(!1),[c,h]=v.useState(!1),l=v.useRef(null),I=!!(n&&!s&&!f),k=B=>{i&&!j&&i({target:{value:B,name:m}}),h(!1),y(!1)},R=B=>{l.current&&!l.current.contains(B.target)&&(h(!1),y(!1))},L=()=>{j||(h(!c),y(!c))};v.useEffect(()=>(document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}),[]);const F=p.find(B=>B.value===s),A=F?F.label:"";return t.jsxs(Lt,{ref:l,...w,children:[t.jsxs(Et,{children:[t.jsxs(Pt,{hasError:r,isOpen:c,disabled:j,onClick:L,onFocus:()=>!j&&y(!0),onBlur:()=>y(!1),tabIndex:j?-1:0,children:[t.jsx(It,{children:A||e&&t.jsx(Rt,{children:e})}),t.jsx(Bt,{isOpen:c,disabled:j,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:j?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),c&&t.jsx(At,{children:p.map(B=>t.jsxs(zt,{$isSelected:B.value===s,onClick:()=>k(B.value),children:[t.jsx(Ft,{$isSelected:B.value===s,children:B.value===s&&t.jsx(_t,{})}),t.jsx(Ot,{children:B.label})]},B.value))})]}),n&&t.jsx(Yt,{isVisible:I,children:n}),r&&d&&t.jsx(Nt,{children:d}),t.jsx(Wt,{name:m,value:s||"",onChange:()=>{},tabIndex:-1,required:x,children:p.map(B=>t.jsx("option",{value:B.value,children:B.label},B.value))})]})},Lt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Et=o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Pt=o.div`
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
`,It=o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rt=o.span`
  color: rgba(80, 85, 92, 1);
`,Bt=o.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,At=o.div`
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
`,zt=o.div`
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
`,Ft=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,_t=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Ot=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Yt=o.label`
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
`,Nt=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Wt=o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Ht=({checked:e=!1,onChange:n,className:s,label:i,disabled:r=!1})=>{const[d,p]=v.useState(!1),m=()=>{r||!n||n(!e)},j=x=>{r||(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),m())};return t.jsxs(Vt,{className:s,onClick:m,onKeyPress:j,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Zt,{checked:e,isFocused:d,disabled:r,onMouseEnter:()=>!r&&p(!0),onMouseLeave:()=>!r&&p(!1),onFocus:()=>!r&&p(!0),onBlur:()=>!r&&p(!1),children:e&&t.jsx(Xt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Ut,{disabled:r,children:i})]})},Vt=o.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Zt=o.div`
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
`,Ut=o.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Xt=o.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,qt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",xe=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Gt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ne=({prefix:e="Дата:",value:n="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[d,p]=v.useState(!1),[m,j]=v.useState(new Date),[x,w]=v.useState(n?new Date(n):null),[f,y]=v.useState(!1),[c,h]=v.useState(!1),l=v.useRef(null),I=v.useRef(null),k=v.useRef(null);v.useEffect(()=>{const u=M=>{l.current&&!l.current.contains(M.target)&&p(!1),I.current&&!I.current.contains(M.target)&&y(!1),k.current&&!k.current.contains(M.target)&&h(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),v.useEffect(()=>{w(n?new Date(n):null)},[n]);const R=u=>{const M=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate()));w(u);const T=M.toISOString().split("T")[0];i?.(T),p(!1)},L=()=>{const u=new Date;j(u);const T=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate())).toISOString().split("T")[0];i?.(T),p(!1)},F=()=>{w(null),i?.(""),r?.(),p(!1)},A=u=>{const M=new Date(m);M.setMonth(u),j(M),y(!1)},B=u=>{const M=new Date(m);M.setFullYear(u),j(M),h(!1)},N=()=>{const u=m.getFullYear(),M=m.getMonth(),T=new Date(u,M,1),P=new Date(u,M+1,0).getDate(),V=T.getDay()===0?6:T.getDay()-1,b=[],C=35,a=new Date(u,M,0).getDate();for(let S=0;S<V;S++){const D=a-V+S+1,O=new Date(u,M-1,D),Z=!!(x&&O.getDate()===x.getDate()&&O.getMonth()===x.getMonth()&&O.getFullYear()===x.getFullYear());b.push(t.jsx(te,{selected:Z,onClick:()=>R(O),otherMonth:!0,children:D},`prev-${D}`))}for(let S=1;S<=P;S++){const D=new Date(u,M,S),O=!!(x&&D.getDate()===x.getDate()&&D.getMonth()===x.getMonth()&&D.getFullYear()===x.getFullYear());b.push(t.jsx(te,{selected:O,onClick:()=>R(D),children:S},`current-${S}`))}const $=C-b.length;for(let S=1;S<=$;S++){const D=new Date(u,M+1,S),O=!!(x&&D.getDate()===x.getDate()&&D.getMonth()===x.getMonth()&&D.getFullYear()===x.getFullYear());b.push(t.jsx(te,{selected:O,onClick:()=>R(D),otherMonth:!0,children:S},`next-${S}`))}return b},E=()=>x?x.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,z=()=>{const u=new Date().getFullYear(),M=[];for(let T=u-10;T<=u+10;T++)M.push(T);return M},W=u=>{u.preventDefault(),u.stopPropagation(),y(!f),h(!1)},_=u=>{u.preventDefault(),u.stopPropagation(),h(!c),y(!1)},g=u=>{const M=u==="next"?1:-1,T=new Date(m);T.setMonth(T.getMonth()+M),j(T)};return t.jsxs(Jt,{ref:l,children:[t.jsxs(Kt,{onClick:()=>p(!d),children:[e&&t.jsx(Qt,{children:e}),t.jsx(eo,{isEmpty:!x,children:E()}),t.jsx(to,{src:qt,alt:"Календарь"})]}),d&&t.jsxs(oo,{className:"calendar-container",children:[t.jsxs(no,{children:[t.jsx(we,{onClick:u=>{u.preventDefault(),u.stopPropagation(),g("prev")},onMouseDown:u=>u.preventDefault(),children:t.jsx(ve,{direction:"right"})}),t.jsxs(ro,{children:[t.jsxs(ao,{ref:I,children:[t.jsxs(io,{onClick:u=>W(u),onMouseDown:u=>u.preventDefault(),children:[xe[m.getMonth()],t.jsx(ge,{$open:f})]}),f&&t.jsx(be,{$width:120,onClick:u=>u.stopPropagation(),children:xe.map((u,M)=>t.jsx(me,{$selected:M===m.getMonth(),onClick:T=>{T.stopPropagation(),A(M)},children:u},u))})]}),t.jsxs(lo,{ref:k,children:[t.jsxs(so,{onClick:u=>_(u),onMouseDown:u=>u.preventDefault(),children:[m.getFullYear(),t.jsx(ge,{$open:c})]}),c&&t.jsx(be,{$width:80,onClick:u=>u.stopPropagation(),children:z().map(u=>t.jsx(me,{$selected:u===m.getFullYear(),onClick:M=>{M.stopPropagation(),B(u)},children:u},u))})]})]}),t.jsx(we,{onClick:u=>{u.preventDefault(),u.stopPropagation(),g("next")},onMouseDown:u=>u.preventDefault(),children:t.jsx(ve,{direction:"left"})})]}),t.jsx(co,{children:Gt.map(u=>t.jsx(uo,{children:u},u))}),t.jsx(po,{children:N()}),t.jsxs(ho,{children:[t.jsx(ye,{onClick:F,children:"Удалить"}),t.jsx(ye,{onClick:L,children:"Сегодня"})]})]})]})},Jt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`,Kt=o.div`
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
`,Qt=o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`,eo=o.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,to=o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,oo=o.div`
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
`,no=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,ro=o.div`
  display: flex;
  gap: 8px;
  color: black;
`,Ee=o.button`
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
`,io=o(Ee)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,so=o(Ee)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,ao=o.div`
  position: relative;
`,lo=o.div`
  position: relative;
`,ge=o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,be=o.div`
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
`,me=o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,we=o.button`
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
`,ve=o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,co=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,uo=o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,po=o.div`
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
`,ho=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ye=o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,Pe=({placeholder:e="",customPlaceholder:n,value:s,inputType:i="text",onChange:r,hasError:d=!1,errorMessage:p,...m})=>{const[j,x]=v.useState(!1),w=!!(n&&!s&&!j),f=h=>{if(!r)return;let l=h.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(h);break;case"rubles":{const k=h.target.selectionStart,R=h.target.value;let L=R.replace(/[^\d]/g,"");if(L===""){h.target.value="",r(h);break}const F=parseInt(L,10);if(!isNaN(F)){let A=F.toLocaleString("ru-RU");A+=" ₽";const B=y(R,k||0),N=c(A,B);h.target.value=A,r(h),setTimeout(()=>{h.target.setSelectionRange(N,N)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const k=l.split(".");k.length>2&&(l=k[0]+"."+k.slice(1).join("")),k.length===2&&k[1].length>2&&(l=k[0]+"."+k[1].slice(0,2));const R=parseFloat(l);if(isNaN(R)||(R>100?l="100":R<0&&(l="0")),l&&l!==""){l+=" %";const L=h.target.selectionStart||0,F=l.replace(" %","");h.target.value=l,r(h),setTimeout(()=>{L<F.length&&h.target.setSelectionRange(L,L)},0)}else h.target.value=l,r(h);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let I=l.split(" ").filter(k=>k.length>0);I=I.slice(0,3),l=I.map(k=>{if(k.startsWith("-")&&(k=k.substring(1)),(k.match(/-/g)||[]).length>1){const L=k.split("-");k=L[0]+"-"+L.slice(1).join("")}return k.includes("-")?k.split("-").map((L,F)=>L.length===0?"":(F>0,L[0].toUpperCase()+L.slice(1).toLowerCase())).join("-"):k.length>0?k[0].toUpperCase()+k.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&h.target.value.length>0&&h.target.value[h.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),h.target.value=l,r(h);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),h.target.value=l,r(h);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),h.target.value=l,r(h);break}default:r(h);break}},y=(h,l)=>{let I=0;for(let k=0;k<Math.min(l,h.length);k++)/\d/.test(h[k])&&I++;return I},c=(h,l)=>{let I=0;for(let k=0;k<h.length;k++){if(I>=l)return k;/\d/.test(h[k])&&I++}return h.length};return t.jsxs(fo,{children:[t.jsx(xo,{...m,value:s,placeholder:w?"":e,onFocus:()=>x(!0),onBlur:h=>{x(!1),m.onBlur?.(h)},onChange:f,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:d}),n&&t.jsx(go,{isVisible:w,children:n}),d&&p&&t.jsx(bo,{children:p})]})},fo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,xo=o.input`
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
`,go=o.label`
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
`,bo=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,mo=({total:e,current:n=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[d,p]=v.useState(n),m=x=>{x<1||x>r||x===d||(p(x),s?.(x))},j=()=>{const x=[];let f=1,y=r;if(r>5){const c=Math.floor(2.5);f=Math.max(d-c,1),y=Math.min(d+c,r),d<=c+1?y=5:d>=r-c&&(f=r-5+1)}for(let c=f;c<=y;c++)x.push(t.jsx(J,{active:c===d,onClick:()=>m(c),children:c},c));return f>1&&(f>2&&x.unshift(t.jsx(J,{children:"..."},"start-ellipsis")),x.unshift(t.jsx(J,{active:d===1,onClick:()=>m(1),children:"1"},1))),y<r&&(y<r-1&&x.push(t.jsx(J,{children:"..."},"end-ellipsis")),x.push(t.jsx(J,{active:r===d,onClick:()=>m(r),children:r},r))),x};return t.jsxs(wo,{children:[t.jsx(ke,{disabled:d===1,onClick:()=>m(d-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:d===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),j(),t.jsx(ke,{disabled:d===r,onClick:()=>m(d+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:d===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},wo=o.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,J=o.div`
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
`,ke=o.button`
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
`,vo=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:d,rows:p=3,...m})=>{const[j,x]=v.useState(!1),w=!!(n&&!s&&!j);return t.jsxs(yo,{children:[t.jsx(ko,{...m,value:s,placeholder:w?"":e,onFocus:()=>x(!0),onBlur:f=>{x(!1),m.onBlur?.(f)},onChange:i,hasError:r,rows:p}),n&&t.jsx(jo,{isVisible:w,children:n}),r&&d&&t.jsx(Co,{children:d})]})},yo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,ko=o.textarea`
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
`,jo=o.label`
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
`,Co=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ie=({title:e,onClose:n,onCancel:s,onSave:i,children:r,isSaveDisabled:d=!1,isSubmitting:p=!1,mode:m="create",hideSaveButton:j=!1,hideCanselButton:x=!1,width:w="560px",saveButtonText:f="Сохранить",customLayout:y})=>{const c=m==="view",h=v.useRef(null);v.useEffect(()=>{const k=L=>{L.key==="Escape"&&n()};document.addEventListener("keydown",k);const R=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>h.current?.focus(),0),()=>{document.removeEventListener("keydown",k),document.body.style.overflow=R}},[n]);const l=k=>{k.target===k.currentTarget&&n()},I=k=>{k.preventDefault(),s()};return t.jsx($o,{onMouseDown:l,role:"presentation",children:t.jsxs(So,{ref:h,$width:w,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Re,{children:[t.jsx(Be,{children:e}),t.jsx(Mo,{type:"button",onClick:n,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),y?t.jsx(Do,{children:y}):null,t.jsxs(To,{onSubmit:i,children:[t.jsx(Lo,{children:r}),t.jsxs(Eo,{children:[t.jsx(Po,{children:x?null:t.jsx(Ro,{isPrimary:!1,onClick:I,children:"Отменить"})}),t.jsx(Io,{children:!c&&!j?t.jsx(Bo,{type:"submit",disabled:d||p,children:p?"Сохранение...":f}):null})]})]})]})})},$o=o.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,So=o.div`
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
`,Re=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Be=o.h2`
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
`,Mo=o.button`
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
`,Do=o.div`
  padding: 12px 18px 0 18px;
`,To=o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,Lo=o.div`
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
`,Eo=o.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,Po=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Io=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ro=o(le)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Bo=o(le)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Ao=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],zo=({value:e="",placeholder:n="Выберите период",options:s=Ao,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:d})=>{const[p,m]=v.useState(!1),[j,x]=v.useState(!1),[w,f]=v.useState(""),[y,c]=v.useState(""),[h,l]=v.useState(""),I=v.useRef(null),k=v.useRef(null);v.useEffect(()=>{if(e==="Custom"&&y&&h){const E=B(y),z=B(h);f(`С ${E} по ${z}`)}else{const E=s.find(z=>z.value===e);f(E?E.label:"")}},[e,s,y,h]),v.useEffect(()=>{const E=z=>{I.current&&!I.current.contains(z.target)&&m(!1),j&&k.current&&!k.current.contains(z.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(g=>g.contains(z.target))||x(!1))};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[j]);const R=E=>{r?.(E.value),m(!1)},L=()=>{m(!1),d?d():x(!0)},F=()=>{r?.(""),f(""),c(""),l("")},A=()=>{if(y&&h){const E=B(y),z=B(h),W=`С ${E} по ${z}`;r?.("Custom",y,h),f(W),x(!1)}},B=E=>{const z=new Date(E),W=String(z.getDate()).padStart(2,"0"),_=String(z.getMonth()+1).padStart(2,"0"),g=z.getFullYear();return`${W}.${_}.${g}`},N=()=>t.jsxs(qo,{children:[t.jsx(Re,{style:{margin:0},children:t.jsx(Be,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Go,{onClick:F,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Fo,{ref:I,children:[t.jsxs(_o,{onClick:()=>m(!p),children:[t.jsx(Oo,{children:w||n}),t.jsx(Yo,{$isOpen:p,children:"▼"})]}),p&&t.jsxs(No,{children:[s.map(E=>t.jsxs(Wo,{onClick:()=>R(E),$isSelected:e===E.value,children:[t.jsx(Ho,{$isSelected:e===E.value,children:e===E.value&&t.jsx(Vo,{})}),t.jsx(Zo,{children:E.label})]},E.id)),i&&t.jsx(Uo,{onClick:L,children:"Другой период"})]})]}),j&&t.jsx("div",{ref:k,children:t.jsx(Ie,{title:"",onClose:()=>x(!1),onCancel:()=>x(!1),onSave:E=>{E.preventDefault(),A()},saveButtonText:"Выбрать",customLayout:t.jsx(N,{}),children:t.jsxs(Xo,{children:[t.jsx(je,{children:t.jsx(ne,{value:y,onChange:E=>c(E)})}),t.jsx(je,{children:t.jsx(ne,{value:h,onChange:E=>l(E)})})]})})})]})},Fo=o.div`
  position: relative;
  width: 245px;
`,_o=o.div`
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
`,Oo=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yo=o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,No=o.div`
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
`,Wo=o.div`
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
`,Ho=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Vo=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Zo=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Uo=o.div`
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
`,Xo=o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,je=o.div`
  flex: 1;
`,qo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Go=o.button`
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
`,Jo=({name:e,value:n,onChange:s,onBlur:i,onKeyPress:r,placeholder:d="8 (999) 500-50-50",customPlaceholder:p,tabIndex:m,disabled:j=!1,hasError:x=!1,errorMessage:w})=>{const[f,y]=v.useState(!1),c=v.useRef(null),h=!!(p&&!n&&!f),l=L=>{const A=L.replace(/\D/g,"").slice(0,11);let B="";return A.length>0&&(B+="8"),A.length>1&&(B+=` (${A.slice(1,4)}`),A.length>4&&(B+=`) ${A.slice(4,7)}`),A.length>7&&(B+=`-${A.slice(7,9)}`),A.length>9&&(B+=`-${A.slice(9,11)}`),B},I=L=>{const F=l(L.target.value),A={...L,target:{...L.target,name:e,value:F}};s(A)},k=L=>{y(!1),i?.(L)},R=L=>{r?.(L)};return t.jsxs(Ko,{children:[t.jsx(Qo,{ref:c,name:e,type:"tel",value:n,onChange:I,onKeyPress:R,placeholder:h?"":d,maxLength:18,tabIndex:m,disabled:j,hasError:x,onFocus:()=>y(!0),onBlur:k,inputMode:"tel"}),p&&t.jsx(en,{isVisible:h,children:p}),x&&w&&t.jsx(tn,{children:w})]})},Ko=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Qo=o.input`
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
`,en=o.label`
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
`,tn=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,on=({tabs:e,activeTab:n,onChange:s,addButton:i,fontSize:r=14})=>{const d=e.find(p=>p.id===n)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(nn,{children:t.jsxs(rn,{children:[e.map(p=>t.jsxs(sn,{$isActive:n===p.id,onClick:()=>s(p.id),$fontSize:r,children:[p.label,n===p.id&&t.jsx(an,{})]},p.id)),i&&t.jsx(ln,{children:i})]})}),d&&t.jsx(cn,{children:d})]})},nn=o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,rn=o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,sn=o.li`
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
`,an=o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,ln=o.li`
  margin-left: auto;
  padding: 4px 0;
`,cn=o.div`
  margin-top: 20px;
`,dn=({mode:e,primaryValue:n,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:d,disabled:p=!1,hasError:m=!1,errorMessage:j="",customIcon:x})=>{const f=x||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(fn,{children:[t.jsx(xn,{children:n||"Не указано"}),s&&t.jsx(gn,{children:s})]}):t.jsxs(un,{children:[t.jsxs(pn,{children:[t.jsx(hn,{type:"text",value:n||"",placeholder:i,readOnly:!0,disabled:p}),n&&!p&&t.jsx(mn,{type:"button",onClick:d,"aria-label":"Очистить",children:"×"})]}),!p&&t.jsx(bn,{type:"button",onClick:r,"aria-label":"Выбрать",children:f}),m&&j&&t.jsx(wn,{children:j})]})},un=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,pn=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,hn=o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,fn=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,xn=o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,gn=o.span`
  font-size: 13px;
  color: #666;
`,bn=o.button`
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
`,mn=o.button`
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
`,wn=o.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,ce=o.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,vn=({total:e})=>t.jsx("div",{children:t.jsxs(yn,{children:["Всего: ",e]})}),yn=o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,kn=o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,jn=o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,Cn=o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,$n=o.span`
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
`,Sn=o.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Mn=({checked:e,onChange:n,disabled:s})=>{const i=()=>{s||n(!e)};return t.jsxs(Cn,{children:[t.jsx(Sn,{checked:e,onChange:i,disabled:s}),t.jsx($n,{checked:e,disabled:s})]})},Dn=({id:e,name:n,checked:s,onChange:i,children:r})=>t.jsxs(Tn,{htmlFor:e,children:[t.jsx(Ln,{type:"radio",id:e,name:n,checked:s,onChange:i}),r]}),Tn=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Ln=o.input`
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
`,En=({percentage:e,onChange:n,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=v.useRef(null),[d,p]=v.useState(!1),m=f=>{!s||!n||(f.preventDefault(),p(!0),w(f))},j=f=>{!d||!n||w(f)},x=()=>{p(!1)},w=f=>{if(!r.current||!n)return;const y=r.current.getBoundingClientRect();let h=(f.clientX-y.left)/y.width*100;h=Math.max(0,Math.min(100,h)),n(Math.round(h))};return v.useEffect(()=>{if(d)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",x)}},[d]),t.jsxs(Pn,{ref:r,$draggable:s,onMouseDown:m,children:[t.jsx(In,{$secondaryColor:i.secondary}),t.jsx(Rn,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(Bn,{$percentage:e,$primaryColor:i.primary})]})},Pn=o.div`
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
`,In=o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Rn=o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Bn=o.div`
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
`,An=["zoomControl","fullscreenControl"];let oe=null;const zn=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((n,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>n(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),Fn=({onLocationSelect:e,initialAddress:n="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:d=12,height:p=400,width:m="100%",inputPlaceholder:j="Введите адрес или название места",searchButtonLabel:x="Найти",draggablePlacemark:w=!0,controls:f=An,showSearch:y=!0,className:c,style:h,onError:l})=>{const[I,k]=v.useState(null),[R,L]=v.useState(n),[F,A]=v.useState(n),[B,N]=v.useState(!1),E=v.useRef(null);v.useEffect(()=>{let _=!1,g;return(async()=>{try{const M=await zn(r);if(_||!E.current)return;g=new M.Map(E.current,{center:[s,i],zoom:d,controls:f});const T=new M.Placemark([s,i],{},{draggable:w});g.geoObjects.add(T),g.events.add("click",Y=>{const P=Y.get("coords");z(P,T,g)}),T.events.add("dragend",()=>{const Y=T.geometry.getCoordinates();z(Y,T,g)}),k(g),N(!0)}catch(M){l&&M instanceof Error&&l(M)}})(),()=>{_=!0,g&&g.destroy()}},[r,s,i,d,f,w,l]);const z=async(_,g,u)=>{if(window.ymaps)try{const Y=(await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();g.geometry.setCoordinates(_),u.panTo(_,{flying:!0}),A(Y),L(Y),e(Y,_[0],_[1])}catch(M){l&&M instanceof Error&&l(M)}},W=async()=>{if(!(!R.trim()||!window.ymaps||!I))try{const g=(await window.ymaps.geocode(R)).geoObjects.get(0);if(g){const u=g.geometry.getCoordinates(),M=g.properties.get("boundedBy");I.setBounds(M,{checkZoomRange:!0});const T=new window.ymaps.Placemark(u,{},{draggable:w});I.geoObjects.removeAll(),I.geoObjects.add(T);const Y=g.getAddressLine();A(Y),e(Y,u[0],u[1]),T.events.add("dragend",()=>{const P=T.geometry.getCoordinates();z(P,T,I)})}}catch(_){l&&_ instanceof Error&&l(_)}};return t.jsxs(_n,{className:c,style:h,children:[y&&t.jsxs(On,{children:[t.jsx(Pe,{type:"text",value:R,onChange:_=>L(_.target.value),placeholder:j,onKeyPress:_=>_.key==="Enter"&&W(),disabled:!B}),t.jsx(Yn,{onClick:W,disabled:!B,children:x})]}),t.jsxs(Wn,{children:["Выбранный адрес: ",t.jsx("strong",{children:F||"Не выбран"})]}),t.jsx(Nn,{ref:E,$height:p,$width:m}),t.jsx(Hn,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},_n=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,On=o.div`
  display: flex;
  gap: 8px;
`,Yn=o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Nn=o.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Wn=o.div`
  font-size: 14px;
  color: #374151;
`,Hn=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,de=o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;function re(e,n="₽"){if(!e||e.trim()==="")return`0${n}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${n}`;const i=parseInt(s,10);if(isNaN(i))return`0${n}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${n}`:r}function Vn(e){if(!e)return 0;const n=e.replace(/\D/g,"");return parseInt(n,10)}const Zn=({title:e,data:n,maxValue:s,step:i,height:r=300,titleFontSize:d})=>{const[p,m]=v.useState(null),j=[];for(let w=0;w<=s;w+=i)j.push(w);const x=n.length>0?n[0].bars.map(w=>({name:w.name,color:w.color})):[];return t.jsxs(Un,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:d},children:e}),t.jsx(Xn,{children:x.map((w,f)=>t.jsxs(qn,{children:[t.jsx(Gn,{color:w.color}),t.jsx(Jn,{children:w.name})]},f))})]}),t.jsxs(Kn,{height:r,children:[t.jsx(Qn,{children:j.map((w,f)=>t.jsx(er,{children:w.toLocaleString()},f))}),t.jsxs(tr,{children:[t.jsxs(or,{children:[j.map((w,f)=>{const y=w/s*100;return t.jsx(nr,{position:100-y},`line-${f}`)}),n.map((w,f)=>t.jsxs(rr,{onMouseEnter:()=>m(f),onMouseLeave:()=>m(null),children:[w.bars.map((y,c)=>{const h=w.bars.slice(c+1).reduce((l,I)=>l+I.value,0);return t.jsx(ir,{height:y.value/s*100,offset:h/s*100,color:y.color,isHovered:p!==null&&p!==f},c)}),p===f&&t.jsxs(lr,{children:[t.jsxs(cr,{children:[t.jsxs(dr,{children:["Всего: ",re(w.total.toString())]}),w.bars.map((y,c)=>t.jsxs(ur,{children:[y.name,": ",re(y.value.toString())]},c))]}),t.jsx(pr,{})]})]},f))]}),t.jsx(sr,{children:n.map((w,f)=>t.jsx(ar,{style:{flex:1,textAlign:"center"},children:w.label},f))})]})]})]})},Un=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Xn=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,qn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Gn=o.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Jn=o.span`
  font-size: 14px;
  color: #4b5563;
`,Kn=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Qn=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,er=o.span`
  font-size: 12px;
  color: #6b7280;
`,tr=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,or=o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,nr=o.div`
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
`,rr=o.div`
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
`,ir=o.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,sr=o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,ar=o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,lr=o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,cr=o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,dr=o.div`
  font-weight: 600;
  margin-bottom: 6px;
`,ur=o.div`
  margin-bottom: 2px;
`,pr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,hr=o.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,fr=({title:e,data:n,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:d,minY:p,xStep:m,yStep:j,height:x=300,showLegend:w=!0,xAxisCustomLabels:f,showTooltip:y=!0,titleFontSize:c="30px"})=>{const[h,l]=v.useState(null),[I,k]=v.useState({x:0,y:0}),R=v.useRef(null),L=v.useRef(null),F=Math.max(...n.map(g=>g.x),r),A=[];for(let g=0;g<=F;g+=m)A.push(g);const B=[];for(let g=p;g<=d;g+=j)B.push(g);const N=f||A.map(g=>g.toString()),E=w?Array.from(new Set(n.filter(g=>g.label).map(g=>g.label))).map(g=>{const u=n.find(M=>M.label===g);return{name:g,color:u.color}}):[],z={};n.forEach(g=>{const u=g.label||"default";z[u]||(z[u]=[]),z[u].push(g)});const W=g=>g/F*100,_=g=>{const u=d-p;return 100-(g-p)/u*100};return v.useEffect(()=>{if(h&&L.current){const g=L.current.getBoundingClientRect(),u=W(h.x)/100*g.width,M=_(h.y)/100*g.height;k({x:u+g.left,y:M+g.top})}},[h,r,d,p]),t.jsxs(xr,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:c},children:e}),w&&E.length>0&&t.jsx(gr,{children:E.map((g,u)=>t.jsxs(br,{children:[t.jsx(mr,{color:g.color}),t.jsx(wr,{children:g.name})]},u))})]}),t.jsxs(vr,{height:x,children:[t.jsxs(yr,{children:[B.map((g,u)=>t.jsx(kr,{children:g.toLocaleString()},u)),t.jsx(Ce,{children:i})]}),t.jsxs(jr,{ref:L,children:[B.map((g,u)=>t.jsx(Cr,{position:_(g)},`hline-${u}`)),Object.values(z).map((g,u)=>g.map((M,T)=>{if(T===0)return null;const Y=g[T-1],P=W(Y.x),V=_(Y.y),b=W(M.x),C=_(M.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${P}%`,y1:`${V}%`,x2:`${b}%`,y2:`${C}%`,stroke:M.color,strokeWidth:"1"})},`line-${u}-${T}`)})),n.map((g,u)=>t.jsx($r,{x:W(g.x),y:_(g.y),color:g.color,onMouseEnter:()=>l(g),onMouseLeave:()=>l(null),isHovered:h?.label===g.label},u))]})]}),y&&h&&t.jsxs(Dr,{ref:R,style:{left:I.x,top:I.y},children:[t.jsxs(Tr,{children:[h.name&&t.jsx(Lr,{children:h.name}),t.jsx(Er,{children:h.y.toLocaleString()})]}),t.jsx(Pr,{})]}),t.jsxs(Sr,{children:[N.map((g,u)=>{const T=A[u]/F*100;return t.jsx(Mr,{style:{left:`${T}%`,transform:"translateX(-50%)"},children:g},u)}),s&&t.jsx(Ce,{children:s})]})]})},xr=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,gr=o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,br=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,mr=o.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,wr=o.span`
  font-size: 14px;
  color: #4b5563;
`,vr=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,yr=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,kr=o.span`
  font-size: 12px;
  color: #6b7280;
`,Ce=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,jr=o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,Cr=o.div`
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
`,$r=o.div`
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
`,Sr=o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Mr=o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Dr=o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${hr} 0.15s ease-out forwards;
`,Tr=o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Lr=o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Er=o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Pr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Ir=({images:e,initialIndex:n,onClose:s})=>{const[i,r]=v.useState(n),[d,p]=v.useState(0),m=()=>{r(f=>f>0?f-1:e.length-1),p(0)},j=()=>{r(f=>f<e.length-1?f+1:0),p(0)},x=()=>{p(f=>(f+90)%360)},w=f=>{f.key==="Escape"?s():f.key==="ArrowLeft"?m():f.key==="ArrowRight"?j():(f.key==="r"||f.key==="к")&&x()};return t.jsx(Rr,{onClick:s,onKeyDown:w,tabIndex:0,children:t.jsxs(Br,{onClick:f=>f.stopPropagation(),children:[t.jsx(Ar,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(zr,{children:t.jsx(Fr,{onClick:x,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(_r,{children:[t.jsx($e,{$position:"left",onClick:m,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Or,{src:e[i],alt:`Photo ${i+1}`,$rotation:d}),t.jsx($e,{$position:"right",onClick:j,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Yr,{children:e.map((f,y)=>t.jsx(Nr,{$active:y===i,onClick:()=>{r(y),p(0)}},y))})]})})},Rr=o.div`
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
`,Br=o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ar=o.button`
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
`,zr=o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Fr=o.button`
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
`,_r=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Or=o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,$e=o.button`
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
`,Yr=o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Nr=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ae=({isOpen:e,callPhone:n,error:s,onClose:i})=>{const[r,d]=v.useState(!1);if(!e)return null;const p=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),m=()=>{p?window.location.href=`tel:${n}`:(navigator.clipboard.writeText(n),d(!0),setTimeout(()=>d(!1),2e3))};return t.jsx(Wr,{onClick:i,children:t.jsxs(Hr,{onClick:j=>j.stopPropagation(),children:[t.jsx(Vr,{children:"Подтверждение авторизации"}),t.jsx(Se,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Zr,{onClick:m,title:p?"Позвонить":"Копировать номер",$clickable:!0,children:[n,!p&&r&&t.jsx(Ur,{children:"Скопировано!"})]}),t.jsx(Se,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),s&&t.jsx(Xr,{children:s})]})})},Wr=o.div`
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
`,Hr=o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Vr=o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Se=o.p`
  margin-bottom: 15px;
  color: #555;
`,Zr=o.div`
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
`,Ur=o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Xr=o.div`
  color: #e74c3c;
  margin: 10px 0;
`,ze=v.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),qr=({items:e,bottomItems:n=[],logo:s,arrowIcon:i,collapsed:r,onToggle:d,selectedKey:p,onSelect:m,autoCollapseOnSelect:j=!1,width:x="315px",collapsedWidth:w="70px",className:f,style:y})=>{const c=v.useContext(ze),[h,l]=v.useState(r??c.collapsed??!1),[I,k]=v.useState(null),[R,L]=v.useState(p??c.selectedSideMenuItem??null),[F,A]=v.useState({visible:!1,x:0,y:0,items:[]}),B=v.useRef(null),N=r??c.collapsed??h,E=P=>{l(P),c.toggleCollapsed(),d?.(P)},z=p??c.selectedSideMenuItem??R,W=P=>{L(P),c.setSelectedSideMenuItem(P)};v.useEffect(()=>{r!==void 0&&(l(r),r&&k(null))},[r]),v.useEffect(()=>{p!==void 0&&W(p)},[p]),v.useEffect(()=>{const P=()=>A(V=>({...V,visible:!1}));return document.addEventListener("click",P),()=>document.removeEventListener("click",P)},[]);const _=()=>{const P=!N;E(P),P&&k(null)},g=P=>{P.disabled||P.hidden||(W(P.key),m?.(P),P.onClick?.(P),j&&(E(!0),k(null)))},u=P=>{k(V=>V===P?null:P)},M=(P,V)=>{const b=(P.children?.length||0)>0;if(N&&b){V.stopPropagation();const C=V.currentTarget.getBoundingClientRect();A({visible:!0,x:C.right+6,y:C.top,items:P.children||[]});return}b?u(P.key):g(P)},T=(P,V=!1)=>P.filter(b=>!b.hidden).map(b=>{const C=(b.children?.length||0)>0,a=I===b.key,$=z===b.key||!!b.children&&b.children.some(S=>S.key===z);return t.jsxs(v.Fragment,{children:[t.jsxs(oi,{$collapsed:N,$selected:$,onClick:S=>M(b,S),$disabled:b.disabled,title:b.label,children:[b.icon&&t.jsx(ri,{$collapsed:N,children:b.icon}),!N&&t.jsx(ni,{children:b.label}),!N&&C&&t.jsx(si,{$expanded:a,children:"▾"})]}),!N&&C&&a&&t.jsx(ii,{children:T(b.children||[],!0)})]},b.key)}),Y=v.useMemo(()=>F.visible?t.jsx(li,{style:{left:F.x,top:F.y},children:F.items.map(P=>t.jsx(ci,{onClick:()=>{g(P),A({visible:!1,x:0,y:0,items:[]})},$selected:z===P.key,children:P.label},P.key))}):null,[F,z]);return t.jsxs(Gr,{ref:B,$collapsed:N,$width:x,$collapsedWidth:w,className:f,style:y,children:[t.jsxs(Jr,{children:[t.jsx(Kr,{onClick:_,"aria-label":"Переключить меню",children:i??t.jsx(Qr,{$collapsed:N,children:"❮"})}),!N&&s&&t.jsx(ei,{children:s})]}),t.jsxs(ti,{children:[t.jsx(Me,{children:T(e)}),n.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ai,{}),t.jsx(Me,{children:T(n)})]})]}),Y,t.jsx(di,{$collapsed:N})]})},Gr=o.div`
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
`,Jr=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`,Kr=o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`,Qr=o.span`
  display: inline-block;
  transform: rotate(${({$collapsed:e})=>e?"180deg":"0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`,ei=o.div`
  flex: 1;
  display: flex;
  align-items: center;
`,ti=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Me=o.div`
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
`,oi=o.div`
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
`,ni=o.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,ri=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({$collapsed:e})=>e?"24px":"21px"};
`,ii=o.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,si=o.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,ai=o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,li=o.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,ci=o.div`
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
`,di=o.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,ui=e=>{const n=e.replace(/\D/g,""),i=(n.startsWith("8")||n.length===0?n:`8${n}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},Fe=({value:e,onChange:n,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=d=>{const p=ui(d.target.value);n(p)};return t.jsx(pi,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},pi=o.input`
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

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`,ie=(e,n)=>K("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:n}}),_e=(e,n,s,i)=>K("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:n,user_type:s,name:i}}),hi=({onLoginSuccess:e,userType:n="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:d="8 989 924 24 24",supportLinkUrl:p="https://waypay.one",supportLinkText:m="waypay.one",className:j,style:x,pollingIntervalMs:w=3e3,enableRegistration:f=!1})=>{const[y,c]=v.useState(!1),[h,l]=v.useState(""),[I,k]=v.useState(!1),[R,L]=v.useState(""),[F,A]=v.useState(""),[B,N]=v.useState(!1),[E,z]=v.useState(!1),[W,_]=v.useState(""),[g,u]=v.useState(""),[M,T]=v.useState(null),Y=v.useRef(void 0);v.useEffect(()=>()=>{Y.current&&clearInterval(Y.current)},[]);const P=S=>{const D=S.replace(/\D/g,"");return D?D.startsWith("8")?`+7${D.slice(1)}`:D.startsWith("7")?`+${D}`:`+${D}`:""},V=()=>{k(!1),z(!1),_(""),u(""),T(null),Y.current&&window.clearInterval(Y.current)},b=async S=>{if(S.preventDefault(),!h){A("Введите номер телефона");return}c(!0),A("");const D=P(h);try{const O=await ie(D,n);T({phone:D,checkId:O.check_id,callPhone:O.call_phone}),f&&"name_required"in O&&O.name_required?z(!0):!f&&"name_required"in O&&O.name_required?(A("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),T(null)):(L(O.call_phone),k(!0),a(D,O.check_id))}catch(O){console.error("Auth error:",O),A("Не удалось инициировать авторизацию. Проверьте номер.")}finally{c(!1)}},C=async S=>{if(S.preventDefault(),!W.trim()){u("Введите ФИО");return}if(M){c(!0),u("");try{const D=await ie(M.phone,n);L(D.call_phone),z(!1),k(!0),a(M.phone,D.check_id)}catch(D){console.error("Registration error:",D),u("Не удалось завершить регистрацию")}finally{c(!1)}}},a=(S,D)=>{Y.current&&window.clearInterval(Y.current),Y.current=window.setInterval(()=>{$(S,D)},w)},$=async(S,D)=>{if(!B){N(!0);try{const O=await _e(S,D,n,W.trim());O.access_token&&O.refresh_token&&(Y.current&&window.clearInterval(Y.current),k(!1),z(!1),_(""),T(null),e(O.access_token))}catch(O){console.error("Verification error:",O),A("Ошибка проверки авторизации")}finally{N(!1)}}};return t.jsxs(fi,{className:j,style:x,children:[t.jsxs(xi,{children:[t.jsxs(gi,{onSubmit:E?C:b,children:[t.jsx(bi,{children:E?"Регистрация":s}),E?t.jsxs(De,{children:[t.jsx(Te,{children:t.jsx(mi,{type:"text",value:W,onChange:S=>_(S.target.value),placeholder:"Введите ФИО",disabled:y,autoFocus:!0})}),g&&t.jsx($i,{children:g})]}):t.jsx(De,{children:t.jsx(Te,{children:t.jsx(Fe,{value:h,onChange:S=>l(S),placeholder:r})})}),(F||g)&&t.jsx(Ci,{children:t.jsx("span",{children:F||g})}),t.jsx(wi,{type:"submit",disabled:y,children:y?"Загрузка...":E?"Продолжить":i}),E&&t.jsx(vi,{type:"button",onClick:()=>{z(!1),_(""),u(""),T(null)},disabled:y,children:"← Назад"})]}),t.jsxs(yi,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(ki,{href:`tel:${d}`,children:d}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(ji,{href:p,target:"_blank",rel:"noreferrer",children:m})]})]}),t.jsx(Ae,{isOpen:I,onClose:V,callPhone:R,error:F})]})},fi=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`,xi=o.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  padding: 40px;
  position: relative;
  overflow: hidden;

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
  }
`,gi=o.form`
  display: flex;
  flex-direction: column;
`,bi=o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,De=o.div`
  margin-bottom: 25px;
`,Te=o.div`
  position: relative;
  width: auto;
`,mi=o.input`
  width: 100%;
  padding: 16px;
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
`,wi=o.button`
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
`,vi=o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,yi=o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,ki=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,ji=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Ci=o.div`
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
`,$i=o.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`,Oe=e=>{let n=0;for(let i=0;i<e.length;i++)n=e.charCodeAt(i)+((n<<5)-n);return`hsl(${Math.abs(n%360)}, 60%, 60%)`},Si=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Mi=(e,n=100)=>{const s=document.createElement("canvas");s.width=n,s.height=n;const i=s.getContext("2d");if(!i)return"";const r=Oe(e);i.fillStyle=r,i.beginPath(),i.arc(n/2,n/2,n/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const d=n/2;i.font=`bold ${d}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const p=d*.1;return i.fillText(e,n/2,n/2+p),s.toDataURL("image/png")},Di=e=>{if(!e)return"";const n=typeof e=="string"?new Date(e):e;if(isNaN(n.getTime()))return"";const s=n.getDate().toString().padStart(2,"0"),i=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getFullYear();return`${s}-${i}-${r}`};function Ti(e){return new Date(e)}const Ye=e=>{let n;try{if(e instanceof Date)n=e;else if(typeof e=="string"||typeof e=="number")n=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(n.getTime()))return"неверная дата";const s=new Date;if(n>s){const w=Math.floor((n.getTime()-s.getTime())/1e3),f=Math.floor(w/60),y=Math.floor(f/60),c=Math.floor(y/24);return w<10?"скоро":w<60?`через ${w} секунд`:f===1?"через минуту":f<60?`через ${f} минут`:y===1?"через час":y<24?`через ${y} часов`:c===1?"завтра":c<7?`через ${c} дней`:"в будущем"}const i=Math.floor((s.getTime()-n.getTime())/1e3),r=Math.floor(i/60),d=Math.floor(r/60),p=Math.floor(d/24),m=Math.floor(p/7),j=Math.floor(p/30),x=Math.floor(p/365);if(i<10)return"только что";if(i<60){const w=Math.max(1,i);return w===1?"секунду назад":w<5?`${w} секунды назад`:`${w} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:d<24?d===1?"час назад":d<5?`${d} часа назад`:`${d} часов назад`:p<7?p===1?"вчера":p===2?"позавчера":`${p} дня назад`:m<4?m===1?"неделю назад":m<5?`${m} недели назад`:`${m} недель назад`:j<12?j===1?"месяц назад":j<5?`${j} месяца назад`:`${j} месяцев назад`:x===1?"год назад":x<5?`${x} года назад`:`${x} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},Ne=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Li=(e,n={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=n,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?Ne(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Ye(r)};exports.API_BASE_URL=ae;exports.AddButton=ut;exports.AuthCallModal=Ae;exports.AuthPage=hi;exports.BackButton=bt;exports.BaseModal=Ie;exports.Checkbox=Ht;exports.ColumnChart=Zn;exports.ContextMenu=se;exports.CountInfoTitle=vn;exports.CustomCalendar=ne;exports.CustomInput=Pe;exports.CustomPhoneInput=Fe;exports.CustomSelect=Tt;exports.CustomTable=Qe;exports.CustomTextArea=vo;exports.CustomTitle=de;exports.DefaultButton=le;exports.DeleteButton=vt;exports.EditButton=kt;exports.EntitySelectContainer=dn;exports.ExportButton=$t;exports.InputTitle=kn;exports.ModalInfoTitle=jn;exports.Pagination=mo;exports.PeriodField=zo;exports.PhoneModalInput=Jo;exports.PhotoViewerModal=Ir;exports.ProgressBar=En;exports.RadioButton=Dn;exports.ScatterPlot=fr;exports.SideMenu=qr;exports.SideMenuContext=ze;exports.Tabs=on;exports.TitleField=ce;exports.ToggleSwitch=Mn;exports.YandexMapSelector=Fn;exports.apiRequest=K;exports.authStorage=Le;exports.confirmCallAuth=_e;exports.formatDate=Di;exports.formatExactDate=Ne;exports.formatMoney=re;exports.formatRelativeTime=Ye;exports.formatRelativeTimeExtended=Li;exports.generateAvatar=Mi;exports.getInitials=Si;exports.getSessionInfo=xt;exports.initiateCallAuth=ie;exports.parseDateInput=Ti;exports.parseMoney=Vn;exports.stringToColor=Oe;
