"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const y=require("react"),o=require("styled-components"),U=require("framer-motion");var Q={exports:{}},q={};var pe;function He(){if(pe)return q;pe=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(i,r,c){var p=null;if(c!==void 0&&(p=""+c),r.key!==void 0&&(p=""+r.key),"key"in r){c={};for(var v in r)v!=="key"&&(c[v]=r[v])}else c=r;return r=c.ref,{$$typeof:e,type:i,key:p,ref:r!==void 0?r:null,props:c}}return q.Fragment=n,q.jsx=s,q.jsxs=s,q}var G={};var ue;function Ve(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===_?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case I:return"Fragment";case R:return"Profiler";case k:return"StrictMode";case B:return"Suspense";case N:return"SuspenseList";case W:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case F:return a.displayName||"Context";case L:return(a._context.displayName||"Context")+".Consumer";case A:var $=a.render;return a=a.displayName,a||(a=$.displayName||$.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case E:return $=a.displayName||null,$!==null?$:e(a.type)||"Memo";case z:$=a._payload,a=a._init;try{return e(a($))}catch{}}return null}function n(a){return""+a}function s(a){try{n(a);var $=!1}catch{$=!0}if($){$=console;var S=$.error,D=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return S.call($,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",D),n(a)}}function i(a){if(a===I)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===z)return"<...>";try{var $=e(a);return $?"<"+$+">":"<...>"}catch{return"<...>"}}function r(){var a=m.A;return a===null?null:a.getOwner()}function c(){return Error("react-stack-top-frame")}function p(a){if(d.call(a,"key")){var $=Object.getOwnPropertyDescriptor(a,"key").get;if($&&$.isReactWarning)return!1}return a.key!==void 0}function v(a,$){function S(){Y||(Y=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",$))}S.isReactWarning=!0,Object.defineProperty(a,"key",{get:S,configurable:!0})}function j(){var a=e(this.type);return P[a]||(P[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function x(a,$,S,D,O,Z){var H=S.ref;return a={$$typeof:u,type:a,key:$,props:S,_owner:D},(H!==void 0?H:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:j}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Z}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function g(a,$,S,D,O,Z){var H=$.children;if(H!==void 0)if(D)if(M(H)){for(D=0;D<H.length;D++)f(H[D]);Object.freeze&&Object.freeze(H)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(H);if(d.call($,"key")){H=e(a);var X=Object.keys($).filter(function(We){return We!=="key"});D=0<X.length?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}",C[H+D]||(X=0<X.length?"{"+X.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,D,H,X,H),C[H+D]=!0)}if(H=null,S!==void 0&&(s(S),H=""+S),p($)&&(s($.key),H=""+$.key),"key"in $){S={};for(var ee in $)ee!=="key"&&(S[ee]=$[ee])}else S=$;return H&&v(S,typeof a=="function"?a.displayName||a.name||"Unknown":a),x(a,H,S,r(),O,Z)}function f(a){b(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===z&&(a._payload.status==="fulfilled"?b(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function b(a){return typeof a=="object"&&a!==null&&a.$$typeof===u}var h=y,u=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),F=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),_=Symbol.for("react.client.reference"),m=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,d=Object.prototype.hasOwnProperty,M=Array.isArray,T=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(a){return a()}};var Y,P={},V=h.react_stack_bottom_frame.bind(h,c)(),w=T(i(c)),C={};G.Fragment=I,G.jsx=function(a,$,S){var D=1e4>m.recentlyCreatedOwnerStacks++;return g(a,$,S,!1,D?Error("react-stack-top-frame"):V,D?T(i(a)):w)},G.jsxs=function(a,$,S){var D=1e4>m.recentlyCreatedOwnerStacks++;return g(a,$,S,!0,D?Error("react-stack-top-frame"):V,D?T(i(a)):w)}})()),G}var he;function Ze(){return he||(he=1,process.env.NODE_ENV==="production"?Q.exports=He():Q.exports=Ve()),Q.exports}var t=Ze();const se=({x:e,y:n,items:s,onClose:i,...r})=>{const c=y.useRef(null),[p,v]=y.useState(null);y.useEffect(()=>{const h=u=>{c.current&&!c.current.contains(u.target)&&i()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i]);const x=(()=>{if(!c.current)return{x:e,y:n};const h=c.current.offsetWidth,u=c.current.offsetHeight,l=window.innerWidth,I=window.innerHeight;let k=e,R=n;return k+h>l&&(k=e-h),R+u>I&&(R=n-u),{x:k,y:R}})(),g=(h,u)=>{h.submenu?v(p===u?null:u):h.action&&(h.action(),i())},f=h=>{s[h].submenu&&v(h)},b=h=>{const u=h.relatedTarget;c.current?.contains(u)||v(null)};return t.jsx(Ue,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:x.y,left:x.x},onClick:h=>h.stopPropagation(),onMouseLeave:b,...r,children:s.map((h,u)=>t.jsxs(Xe,{$hasSubmenu:!!h.submenu,$disabled:h.disabled,children:[t.jsx(qe,{onClick:l=>{l.stopPropagation(),h.disabled||g(h,u)},onMouseEnter:()=>!h.disabled&&f(u),whileHover:h.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:h.color,$disabled:h.disabled,children:t.jsxs(Ge,{children:[h.label,h.submenu&&t.jsx(Je,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),h.submenu&&p===u&&t.jsx(Ke,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(se,{x:0,y:-u*40,items:h.submenu,onClose:()=>v(null)})})]},u))})},Ue=o(U.motion.div)`
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
`,Qe=({columns:e,data:n,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:c,onRowClick:p,selectedRow:v,fixedHeight:j,hasTotalsRow:x,debtChecker:g,rowStyles:f={},isLoading:b})=>{const[h,u]=y.useState(null),[l,I]=y.useState(null),k=y.useRef(null),R=y.useRef(null),L=500,F=v!==void 0?v:h,A=w=>{!e[w].isSortable||!r||r(w)},N=g||(w=>{const C=w[8];return typeof C=="string"?parseFloat(C.replace(/[^\d.]/g,""))>0:!1}),E=w=>{v===void 0&&u(w===F?null:w),p&&p(n[w],w)},z=(w,C)=>{s&&s(w,C)},W=(w,C)=>{if(i.length===0)return;w.preventDefault();const a="touches"in w?w.touches[0].clientX:w.clientX,$="touches"in w?w.touches[0].clientY:w.clientY;I({x:a,y:$,rowIndex:C})},_=(w,C)=>{w.preventDefault(),W(w,C)},m=(w,C)=>{i.length!==0&&(R.current&&clearTimeout(R.current),R.current=window.setTimeout(()=>{W(w,C)},L))},d=()=>{R.current&&(clearTimeout(R.current),R.current=null)},M=()=>{R.current&&window.clearTimeout(R.current)},T=()=>{I(null)};y.useEffect(()=>{const w=()=>{l&&T()};return document.addEventListener("click",w),()=>{document.removeEventListener("click",w),R.current&&clearTimeout(R.current)}},[l]);const Y=(w,C,a)=>{if(C)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const $=f[w]||{};return w===F?{backgroundColor:$.backgroundColor||"#007D88",color:$.color||"#FFFFFF",fontWeight:$.fontWeight||"normal"}:a?{backgroundColor:$.backgroundColor||"#E8D8D8",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}:n[w][n[w].length-1]===!1?{backgroundColor:$.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:$.fontWeight||"normal"}:{backgroundColor:$.backgroundColor||"#FFFFFF",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}},P=(w,C,a)=>{if(C)return"#FFFFFF";const $=Y(w,C,a);return $.hoverBackgroundColor?$.hoverBackgroundColor:w===F?"#007D88":a?"#E8D8D8CC":n[w][n[w].length-1]===!1?"#51D5B4CC":"#F3F4F6"},V=()=>{if(!l||i.length===0)return null;const w=(typeof i=="function"?i(n[l.rowIndex]):i).filter(C=>typeof C=="object"&&(typeof C.shouldShow!="function"||C.shouldShow(n[l.rowIndex])));return w.length===0?null:t.jsx(rt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:C=>C.stopPropagation(),children:t.jsx(se,{items:w.map(C=>{const a={label:C.label,color:C.color,disabled:C.disabled};return C.getSubmenu?a.submenu=C.getSubmenu(n[l.rowIndex]):C.action&&(a.action=()=>{C.action(n[l.rowIndex],l.rowIndex),T()}),a}),onClose:T,x:0,y:0})})};return t.jsx(ot,{ref:k,children:b?t.jsx(et,{children:t.jsx(tt,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(it,{children:t.jsx(fe,{children:e.map((w,C)=>!w.isHidden&&t.jsx(at,{$isSortable:w.isSortable,$isActive:c?.key===C,onClick:()=>A(C),$align:w.align||"center",$isFirst:C===0,$isLast:C===e.length-1,children:t.jsxs(lt,{$align:w.align||"center",children:[w.name,w.isSortable&&t.jsx(ct,{$direction:c?.key===C?c.direction:"asc",animate:{rotate:c?.key===C&&c.direction==="desc"?180:0,color:c?.key===C?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},C))})}),t.jsx(st,{$fixedHeight:j,children:t.jsx(U.AnimatePresence,{children:n.map((w,C)=>{const a=!!(x&&C===n.length-1),$=!!(!a&&N(w)),S=Y(C,a,$),D=P(C,a,$);return t.jsx(fe,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:C===n.length-1,$isSelected:C===F,$isTotalsRow:a,onClick:()=>!a&&E(C),onDoubleClick:()=>!a&&z(w,C),onContextMenu:O=>!a&&_(O,C),onTouchStart:O=>!a&&m(O,C),onTouchEnd:d,onTouchMove:M,whileHover:a?{}:{backgroundColor:D,transition:{duration:.15}},style:{backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},children:w.map((O,Z)=>!e[Z]?.isHidden&&t.jsx(dt,{$align:e[Z]?.align||"center",$isFirst:Z===0,$isLast:Z===w.length-1,$isTotalsCell:a,$isBeforeTotals:a&&Z<w.findIndex(H=>H==="Итого:"),children:O},Z))},`row-${C}`)})})})]}),t.jsx(U.AnimatePresence,{children:V()})]})})},et=o.div`
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
`,pt=({onClick:e,tooltip:n,size:s=32,margin:i})=>t.jsx(ut,{onClick:e,size:s,margin:i,title:n,children:t.jsx(ht,{size:s})}),ut=o.button`
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
`,ae="http://95.163.226.24:8080/api";async function K(e,n={}){const{method:s="GET",body:i,headers:r={},token:c}=n,p=async j=>{const x={"Content-Type":"application/json",...r};j&&(x.Authorization=`Bearer ${j}`);const g=e.startsWith("http")?e:`${ae}${e}`;return await fetch(g,{method:s,headers:x,body:i?JSON.stringify(i):void 0})},v=async(j,x=!0)=>{const g=await p(j);if(g.ok){if(g.status===204)return null;const b=await g.text();if(!b)return null;try{return JSON.parse(b)}catch{return b}}if(g.status===401&&x){const b=await ft();if(b)return v(b,!1)}let f=`Request failed with status ${g.status}`;try{const b=await g.json();b&&typeof b.error=="string"?f=b.error:typeof b=="string"&&(f=b)}catch{const b=await g.text();b&&(f=b)}throw new Error(f)};return v(c)}async function ft(){const e=await fetch(`${ae}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok)return null;const n=await e.json();return n.access_token?n.access_token:null}const Le={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await K("/auth/session/info",{method:"GET"})}catch{return null}},async logout(){try{await K("/auth/session/revoke",{method:"POST"})}catch(e){throw console.error("Logout error:",e),e}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},xt=()=>Le.getSessionInfo(),gt=o.button`
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
`,bt=({children:e,onClick:n})=>t.jsxs(gt,{onClick:n,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),le=({children:e="Подтвердить",icon:n,disabled:s=!1,bg:i,hoverBg:r,disabledBg:c,textColor:p,fullWidth:v=!1,minWidth:j,width:x,isPrimary:g=!0,...f})=>{const h=i?{bg:i,hoverBg:r||i,disabledBg:c||i,textColor:p||(g?"white":"black")}:g?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(mt,{disabled:s,$bg:h.bg,$hoverBg:h.hoverBg,$disabledBg:h.disabledBg,$textColor:h.textColor,$fullWidth:v,$minWidth:j,$width:x,...f,children:[n&&t.jsx(wt,{children:n}),t.jsx("span",{children:e})]})},mt=o.button`
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
`,Ct=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),$t=({children:e="Экспорт",icon:n=t.jsx(Ct,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...c})=>{const p=async v=>{if(s)try{await s()}catch(j){console.error("Export error:",j)}c.onClick&&c.onClick(v)};return t.jsx(St,{...c,onClick:p,disabled:i||c.disabled,children:i?t.jsxs(Mt,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx(Dt,{progress:r})]}):t.jsxs(t.Fragment,{children:[n,t.jsx("span",{children:e})]})})},St=o.button`
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
`,Tt=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:c,options:p,name:v,disabled:j=!1,required:x=!1,...g})=>{const[f,b]=y.useState(!1),[h,u]=y.useState(!1),l=y.useRef(null),I=!!(n&&!s&&!f),k=B=>{i&&!j&&i({target:{value:B,name:v}}),u(!1),b(!1)},R=B=>{l.current&&!l.current.contains(B.target)&&(u(!1),b(!1))},L=()=>{j||(u(!h),b(!h))};y.useEffect(()=>(document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}),[]);const F=p.find(B=>B.value===s),A=F?F.label:"";return t.jsxs(Lt,{ref:l,...g,children:[t.jsxs(Et,{children:[t.jsxs(Pt,{hasError:r,isOpen:h,disabled:j,onClick:L,onFocus:()=>!j&&b(!0),onBlur:()=>b(!1),tabIndex:j?-1:0,children:[t.jsx(It,{children:A||e&&t.jsx(Rt,{children:e})}),t.jsx(Bt,{isOpen:h,disabled:j,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:j?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h&&t.jsx(At,{children:p.map(B=>t.jsxs(zt,{$isSelected:B.value===s,onClick:()=>k(B.value),children:[t.jsx(Ft,{$isSelected:B.value===s,children:B.value===s&&t.jsx(_t,{})}),t.jsx(Ot,{children:B.label})]},B.value))})]}),n&&t.jsx(Yt,{isVisible:I,children:n}),r&&c&&t.jsx(Nt,{children:c}),t.jsx(Wt,{name:v,value:s||"",onChange:()=>{},tabIndex:-1,required:x,children:p.map(B=>t.jsx("option",{value:B.value,children:B.label},B.value))})]})},Lt=o.div`
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
`,Ht=({checked:e=!1,onChange:n,className:s,label:i,disabled:r=!1})=>{const[c,p]=y.useState(!1),v=()=>{r||!n||n(!e)},j=x=>{r||(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),v())};return t.jsxs(Vt,{className:s,onClick:v,onKeyPress:j,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Zt,{checked:e,isFocused:c,disabled:r,onMouseEnter:()=>!r&&p(!0),onMouseLeave:()=>!r&&p(!1),onFocus:()=>!r&&p(!0),onBlur:()=>!r&&p(!1),children:e&&t.jsx(Xt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Ut,{disabled:r,children:i})]})},Vt=o.div`
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
`,qt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",xe=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Gt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ne=({prefix:e="Дата:",value:n="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[c,p]=y.useState(!1),[v,j]=y.useState(new Date),[x,g]=y.useState(n?new Date(n):null),[f,b]=y.useState(!1),[h,u]=y.useState(!1),l=y.useRef(null),I=y.useRef(null),k=y.useRef(null);y.useEffect(()=>{const d=M=>{l.current&&!l.current.contains(M.target)&&p(!1),I.current&&!I.current.contains(M.target)&&b(!1),k.current&&!k.current.contains(M.target)&&u(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),y.useEffect(()=>{g(n?new Date(n):null)},[n]);const R=d=>{const M=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));g(d);const T=M.toISOString().split("T")[0];i?.(T),p(!1)},L=()=>{const d=new Date;j(d);const T=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())).toISOString().split("T")[0];i?.(T),p(!1)},F=()=>{g(null),i?.(""),r?.(),p(!1)},A=d=>{const M=new Date(v);M.setMonth(d),j(M),b(!1)},B=d=>{const M=new Date(v);M.setFullYear(d),j(M),u(!1)},N=()=>{const d=v.getFullYear(),M=v.getMonth(),T=new Date(d,M,1),P=new Date(d,M+1,0).getDate(),V=T.getDay()===0?6:T.getDay()-1,w=[],C=35,a=new Date(d,M,0).getDate();for(let S=0;S<V;S++){const D=a-V+S+1,O=new Date(d,M-1,D),Z=!!(x&&O.getDate()===x.getDate()&&O.getMonth()===x.getMonth()&&O.getFullYear()===x.getFullYear());w.push(t.jsx(te,{selected:Z,onClick:()=>R(O),otherMonth:!0,children:D},`prev-${D}`))}for(let S=1;S<=P;S++){const D=new Date(d,M,S),O=!!(x&&D.getDate()===x.getDate()&&D.getMonth()===x.getMonth()&&D.getFullYear()===x.getFullYear());w.push(t.jsx(te,{selected:O,onClick:()=>R(D),children:S},`current-${S}`))}const $=C-w.length;for(let S=1;S<=$;S++){const D=new Date(d,M+1,S),O=!!(x&&D.getDate()===x.getDate()&&D.getMonth()===x.getMonth()&&D.getFullYear()===x.getFullYear());w.push(t.jsx(te,{selected:O,onClick:()=>R(D),otherMonth:!0,children:S},`next-${S}`))}return w},E=()=>x?x.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,z=()=>{const d=new Date().getFullYear(),M=[];for(let T=d-10;T<=d+10;T++)M.push(T);return M},W=d=>{d.preventDefault(),d.stopPropagation(),b(!f),u(!1)},_=d=>{d.preventDefault(),d.stopPropagation(),u(!h),b(!1)},m=d=>{const M=d==="next"?1:-1,T=new Date(v);T.setMonth(T.getMonth()+M),j(T)};return t.jsxs(Jt,{ref:l,children:[t.jsxs(Kt,{onClick:()=>p(!c),children:[e&&t.jsx(Qt,{children:e}),t.jsx(eo,{isEmpty:!x,children:E()}),t.jsx(to,{src:qt,alt:"Календарь"})]}),c&&t.jsxs(oo,{className:"calendar-container",children:[t.jsxs(no,{children:[t.jsx(we,{onClick:d=>{d.preventDefault(),d.stopPropagation(),m("prev")},onMouseDown:d=>d.preventDefault(),children:t.jsx(ve,{direction:"right"})}),t.jsxs(ro,{children:[t.jsxs(ao,{ref:I,children:[t.jsxs(io,{onClick:d=>W(d),onMouseDown:d=>d.preventDefault(),children:[xe[v.getMonth()],t.jsx(ge,{$open:f})]}),f&&t.jsx(be,{$width:120,onClick:d=>d.stopPropagation(),children:xe.map((d,M)=>t.jsx(me,{$selected:M===v.getMonth(),onClick:T=>{T.stopPropagation(),A(M)},children:d},d))})]}),t.jsxs(lo,{ref:k,children:[t.jsxs(so,{onClick:d=>_(d),onMouseDown:d=>d.preventDefault(),children:[v.getFullYear(),t.jsx(ge,{$open:h})]}),h&&t.jsx(be,{$width:80,onClick:d=>d.stopPropagation(),children:z().map(d=>t.jsx(me,{$selected:d===v.getFullYear(),onClick:M=>{M.stopPropagation(),B(d)},children:d},d))})]})]}),t.jsx(we,{onClick:d=>{d.preventDefault(),d.stopPropagation(),m("next")},onMouseDown:d=>d.preventDefault(),children:t.jsx(ve,{direction:"left"})})]}),t.jsx(co,{children:Gt.map(d=>t.jsx(po,{children:d},d))}),t.jsx(uo,{children:N()}),t.jsxs(ho,{children:[t.jsx(ye,{onClick:F,children:"Удалить"}),t.jsx(ye,{onClick:L,children:"Сегодня"})]})]})]})},Jt=o.div`
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
`,po=o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,uo=o.div`
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
`,Pe=({placeholder:e="",customPlaceholder:n,value:s,inputType:i="text",onChange:r,hasError:c=!1,errorMessage:p,...v})=>{const[j,x]=y.useState(!1),g=!!(n&&!s&&!j),f=u=>{if(!r)return;let l=u.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(u);break;case"rubles":{const k=u.target.selectionStart,R=u.target.value;let L=R.replace(/[^\d]/g,"");if(L===""){u.target.value="",r(u);break}const F=parseInt(L,10);if(!isNaN(F)){let A=F.toLocaleString("ru-RU");A+=" ₽";const B=b(R,k||0),N=h(A,B);u.target.value=A,r(u),setTimeout(()=>{u.target.setSelectionRange(N,N)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const k=l.split(".");k.length>2&&(l=k[0]+"."+k.slice(1).join("")),k.length===2&&k[1].length>2&&(l=k[0]+"."+k[1].slice(0,2));const R=parseFloat(l);if(isNaN(R)||(R>100?l="100":R<0&&(l="0")),l&&l!==""){l+=" %";const L=u.target.selectionStart||0,F=l.replace(" %","");u.target.value=l,r(u),setTimeout(()=>{L<F.length&&u.target.setSelectionRange(L,L)},0)}else u.target.value=l,r(u);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let I=l.split(" ").filter(k=>k.length>0);I=I.slice(0,3),l=I.map(k=>{if(k.startsWith("-")&&(k=k.substring(1)),(k.match(/-/g)||[]).length>1){const L=k.split("-");k=L[0]+"-"+L.slice(1).join("")}return k.includes("-")?k.split("-").map((L,F)=>L.length===0?"":(F>0,L[0].toUpperCase()+L.slice(1).toLowerCase())).join("-"):k.length>0?k[0].toUpperCase()+k.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&u.target.value.length>0&&u.target.value[u.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),u.target.value=l,r(u);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),u.target.value=l,r(u);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),u.target.value=l,r(u);break}default:r(u);break}},b=(u,l)=>{let I=0;for(let k=0;k<Math.min(l,u.length);k++)/\d/.test(u[k])&&I++;return I},h=(u,l)=>{let I=0;for(let k=0;k<u.length;k++){if(I>=l)return k;/\d/.test(u[k])&&I++}return u.length};return t.jsxs(fo,{children:[t.jsx(xo,{...v,value:s,placeholder:g?"":e,onFocus:()=>x(!0),onBlur:u=>{x(!1),v.onBlur?.(u)},onChange:f,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),n&&t.jsx(go,{isVisible:g,children:n}),c&&p&&t.jsx(bo,{children:p})]})},fo=o.div`
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
`,mo=({total:e,current:n=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[c,p]=y.useState(n),v=x=>{x<1||x>r||x===c||(p(x),s?.(x))},j=()=>{const x=[];let f=1,b=r;if(r>5){const h=Math.floor(2.5);f=Math.max(c-h,1),b=Math.min(c+h,r),c<=h+1?b=5:c>=r-h&&(f=r-5+1)}for(let h=f;h<=b;h++)x.push(t.jsx(J,{active:h===c,onClick:()=>v(h),children:h},h));return f>1&&(f>2&&x.unshift(t.jsx(J,{children:"..."},"start-ellipsis")),x.unshift(t.jsx(J,{active:c===1,onClick:()=>v(1),children:"1"},1))),b<r&&(b<r-1&&x.push(t.jsx(J,{children:"..."},"end-ellipsis")),x.push(t.jsx(J,{active:r===c,onClick:()=>v(r),children:r},r))),x};return t.jsxs(wo,{children:[t.jsx(ke,{disabled:c===1,onClick:()=>v(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),j(),t.jsx(ke,{disabled:c===r,onClick:()=>v(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},wo=o.div`
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
`,vo=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:c,rows:p=3,...v})=>{const[j,x]=y.useState(!1),g=!!(n&&!s&&!j);return t.jsxs(yo,{children:[t.jsx(ko,{...v,value:s,placeholder:g?"":e,onFocus:()=>x(!0),onBlur:f=>{x(!1),v.onBlur?.(f)},onChange:i,hasError:r,rows:p}),n&&t.jsx(jo,{isVisible:g,children:n}),r&&c&&t.jsx(Co,{children:c})]})},yo=o.div`
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
`,Ie=({title:e,onClose:n,onCancel:s,onSave:i,children:r,isSaveDisabled:c=!1,isSubmitting:p=!1,mode:v="create",hideSaveButton:j=!1,hideCanselButton:x=!1,width:g="560px",saveButtonText:f="Сохранить",customLayout:b})=>{const h=v==="view",u=y.useRef(null);y.useEffect(()=>{const k=L=>{L.key==="Escape"&&n()};document.addEventListener("keydown",k);const R=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>u.current?.focus(),0),()=>{document.removeEventListener("keydown",k),document.body.style.overflow=R}},[n]);const l=k=>{k.target===k.currentTarget&&n()},I=k=>{k.preventDefault(),s()};return t.jsx($o,{onMouseDown:l,role:"presentation",children:t.jsxs(So,{ref:u,$width:g,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Re,{children:[t.jsx(Be,{children:e}),t.jsx(Mo,{type:"button",onClick:n,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),b?t.jsx(Do,{children:b}):null,t.jsxs(To,{onSubmit:i,children:[t.jsx(Lo,{children:r}),t.jsxs(Eo,{children:[t.jsx(Po,{children:x?null:t.jsx(Ro,{isPrimary:!1,onClick:I,children:"Отменить"})}),t.jsx(Io,{children:!h&&!j?t.jsx(Bo,{type:"submit",disabled:c||p,children:p?"Сохранение...":f}):null})]})]})]})})},$o=o.div`
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
`,Ao=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],zo=({value:e="",placeholder:n="Выберите период",options:s=Ao,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:c})=>{const[p,v]=y.useState(!1),[j,x]=y.useState(!1),[g,f]=y.useState(""),[b,h]=y.useState(""),[u,l]=y.useState(""),I=y.useRef(null),k=y.useRef(null);y.useEffect(()=>{if(e==="Custom"&&b&&u){const E=B(b),z=B(u);f(`С ${E} по ${z}`)}else{const E=s.find(z=>z.value===e);f(E?E.label:"")}},[e,s,b,u]),y.useEffect(()=>{const E=z=>{I.current&&!I.current.contains(z.target)&&v(!1),j&&k.current&&!k.current.contains(z.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(m=>m.contains(z.target))||x(!1))};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[j]);const R=E=>{r?.(E.value),v(!1)},L=()=>{v(!1),c?c():x(!0)},F=()=>{r?.(""),f(""),h(""),l("")},A=()=>{if(b&&u){const E=B(b),z=B(u),W=`С ${E} по ${z}`;r?.("Custom",b,u),f(W),x(!1)}},B=E=>{const z=new Date(E),W=String(z.getDate()).padStart(2,"0"),_=String(z.getMonth()+1).padStart(2,"0"),m=z.getFullYear();return`${W}.${_}.${m}`},N=()=>t.jsxs(qo,{children:[t.jsx(Re,{style:{margin:0},children:t.jsx(Be,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Go,{onClick:F,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Fo,{ref:I,children:[t.jsxs(_o,{onClick:()=>v(!p),children:[t.jsx(Oo,{children:g||n}),t.jsx(Yo,{$isOpen:p,children:"▼"})]}),p&&t.jsxs(No,{children:[s.map(E=>t.jsxs(Wo,{onClick:()=>R(E),$isSelected:e===E.value,children:[t.jsx(Ho,{$isSelected:e===E.value,children:e===E.value&&t.jsx(Vo,{})}),t.jsx(Zo,{children:E.label})]},E.id)),i&&t.jsx(Uo,{onClick:L,children:"Другой период"})]})]}),j&&t.jsx("div",{ref:k,children:t.jsx(Ie,{title:"",onClose:()=>x(!1),onCancel:()=>x(!1),onSave:E=>{E.preventDefault(),A()},saveButtonText:"Выбрать",customLayout:t.jsx(N,{}),children:t.jsxs(Xo,{children:[t.jsx(je,{children:t.jsx(ne,{value:b,onChange:E=>h(E)})}),t.jsx(je,{children:t.jsx(ne,{value:u,onChange:E=>l(E)})})]})})})]})},Fo=o.div`
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
`,Jo=({name:e,value:n,onChange:s,onBlur:i,onKeyPress:r,placeholder:c="8 (999) 500-50-50",customPlaceholder:p,tabIndex:v,disabled:j=!1,hasError:x=!1,errorMessage:g})=>{const[f,b]=y.useState(!1),h=y.useRef(null),u=!!(p&&!n&&!f),l=L=>{const A=L.replace(/\D/g,"").slice(0,11);let B="";return A.length>0&&(B+="8"),A.length>1&&(B+=` (${A.slice(1,4)}`),A.length>4&&(B+=`) ${A.slice(4,7)}`),A.length>7&&(B+=`-${A.slice(7,9)}`),A.length>9&&(B+=`-${A.slice(9,11)}`),B},I=L=>{const F=l(L.target.value),A={...L,target:{...L.target,name:e,value:F}};s(A)},k=L=>{b(!1),i?.(L)},R=L=>{r?.(L)};return t.jsxs(Ko,{children:[t.jsx(Qo,{ref:h,name:e,type:"tel",value:n,onChange:I,onKeyPress:R,placeholder:u?"":c,maxLength:18,tabIndex:v,disabled:j,hasError:x,onFocus:()=>b(!0),onBlur:k,inputMode:"tel"}),p&&t.jsx(en,{isVisible:u,children:p}),x&&g&&t.jsx(tn,{children:g})]})},Ko=o.div`
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
`,on=({tabs:e,activeTab:n,onChange:s,addButton:i,fontSize:r=14})=>{const c=e.find(p=>p.id===n)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(nn,{children:t.jsxs(rn,{children:[e.map(p=>t.jsxs(sn,{$isActive:n===p.id,onClick:()=>s(p.id),$fontSize:r,children:[p.label,n===p.id&&t.jsx(an,{})]},p.id)),i&&t.jsx(ln,{children:i})]})}),c&&t.jsx(cn,{children:c})]})},nn=o.div`
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
`,dn=({mode:e,primaryValue:n,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:c,disabled:p=!1,hasError:v=!1,errorMessage:j="",customIcon:x})=>{const f=x||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(fn,{children:[t.jsx(xn,{children:n||"Не указано"}),s&&t.jsx(gn,{children:s})]}):t.jsxs(pn,{children:[t.jsxs(un,{children:[t.jsx(hn,{type:"text",value:n||"",placeholder:i,readOnly:!0,disabled:p}),n&&!p&&t.jsx(mn,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!p&&t.jsx(bn,{type:"button",onClick:r,"aria-label":"Выбрать",children:f}),v&&j&&t.jsx(wn,{children:j})]})},pn=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,un=o.div`
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
`,En=({percentage:e,onChange:n,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=y.useRef(null),[c,p]=y.useState(!1),v=f=>{!s||!n||(f.preventDefault(),p(!0),g(f))},j=f=>{!c||!n||g(f)},x=()=>{p(!1)},g=f=>{if(!r.current||!n)return;const b=r.current.getBoundingClientRect();let u=(f.clientX-b.left)/b.width*100;u=Math.max(0,Math.min(100,u)),n(Math.round(u))};return y.useEffect(()=>{if(c)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",x)}},[c]),t.jsxs(Pn,{ref:r,$draggable:s,onMouseDown:v,children:[t.jsx(In,{$secondaryColor:i.secondary}),t.jsx(Rn,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(Bn,{$percentage:e,$primaryColor:i.primary})]})},Pn=o.div`
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
`,An=["zoomControl","fullscreenControl"];let oe=null;const zn=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((n,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>n(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),Fn=({onLocationSelect:e,initialAddress:n="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:c=12,height:p=400,width:v="100%",inputPlaceholder:j="Введите адрес или название места",searchButtonLabel:x="Найти",draggablePlacemark:g=!0,controls:f=An,showSearch:b=!0,className:h,style:u,onError:l})=>{const[I,k]=y.useState(null),[R,L]=y.useState(n),[F,A]=y.useState(n),[B,N]=y.useState(!1),E=y.useRef(null);y.useEffect(()=>{let _=!1,m;return(async()=>{try{const M=await zn(r);if(_||!E.current)return;m=new M.Map(E.current,{center:[s,i],zoom:c,controls:f});const T=new M.Placemark([s,i],{},{draggable:g});m.geoObjects.add(T),m.events.add("click",Y=>{const P=Y.get("coords");z(P,T,m)}),T.events.add("dragend",()=>{const Y=T.geometry.getCoordinates();z(Y,T,m)}),k(m),N(!0)}catch(M){l&&M instanceof Error&&l(M)}})(),()=>{_=!0,m&&m.destroy()}},[r,s,i,c,f,g,l]);const z=async(_,m,d)=>{if(window.ymaps)try{const Y=(await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();m.geometry.setCoordinates(_),d.panTo(_,{flying:!0}),A(Y),L(Y),e(Y,_[0],_[1])}catch(M){l&&M instanceof Error&&l(M)}},W=async()=>{if(!(!R.trim()||!window.ymaps||!I))try{const m=(await window.ymaps.geocode(R)).geoObjects.get(0);if(m){const d=m.geometry.getCoordinates(),M=m.properties.get("boundedBy");I.setBounds(M,{checkZoomRange:!0});const T=new window.ymaps.Placemark(d,{},{draggable:g});I.geoObjects.removeAll(),I.geoObjects.add(T);const Y=m.getAddressLine();A(Y),e(Y,d[0],d[1]),T.events.add("dragend",()=>{const P=T.geometry.getCoordinates();z(P,T,I)})}}catch(_){l&&_ instanceof Error&&l(_)}};return t.jsxs(_n,{className:h,style:u,children:[b&&t.jsxs(On,{children:[t.jsx(Pe,{type:"text",value:R,onChange:_=>L(_.target.value),placeholder:j,onKeyPress:_=>_.key==="Enter"&&W(),disabled:!B}),t.jsx(Yn,{onClick:W,disabled:!B,children:x})]}),t.jsxs(Wn,{children:["Выбранный адрес: ",t.jsx("strong",{children:F||"Не выбран"})]}),t.jsx(Nn,{ref:E,$height:p,$width:v}),t.jsx(Hn,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},_n=o.div`
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
`;function re(e,n="₽"){if(!e||e.trim()==="")return`0${n}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${n}`;const i=parseInt(s,10);if(isNaN(i))return`0${n}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${n}`:r}function Vn(e){if(!e)return 0;const n=e.replace(/\D/g,"");return parseInt(n,10)}const Zn=({title:e,data:n,maxValue:s,step:i,height:r=300,titleFontSize:c})=>{const[p,v]=y.useState(null),j=[];for(let g=0;g<=s;g+=i)j.push(g);const x=n.length>0?n[0].bars.map(g=>({name:g.name,color:g.color})):[];return t.jsxs(Un,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:c},children:e}),t.jsx(Xn,{children:x.map((g,f)=>t.jsxs(qn,{children:[t.jsx(Gn,{color:g.color}),t.jsx(Jn,{children:g.name})]},f))})]}),t.jsxs(Kn,{height:r,children:[t.jsx(Qn,{children:j.map((g,f)=>t.jsx(er,{children:g.toLocaleString()},f))}),t.jsxs(tr,{children:[t.jsxs(or,{children:[j.map((g,f)=>{const b=g/s*100;return t.jsx(nr,{position:100-b},`line-${f}`)}),n.map((g,f)=>t.jsxs(rr,{onMouseEnter:()=>v(f),onMouseLeave:()=>v(null),children:[g.bars.map((b,h)=>{const u=g.bars.slice(h+1).reduce((l,I)=>l+I.value,0);return t.jsx(ir,{height:b.value/s*100,offset:u/s*100,color:b.color,isHovered:p!==null&&p!==f},h)}),p===f&&t.jsxs(lr,{children:[t.jsxs(cr,{children:[t.jsxs(dr,{children:["Всего: ",re(g.total.toString())]}),g.bars.map((b,h)=>t.jsxs(pr,{children:[b.name,": ",re(b.value.toString())]},h))]}),t.jsx(ur,{})]})]},f))]}),t.jsx(sr,{children:n.map((g,f)=>t.jsx(ar,{style:{flex:1,textAlign:"center"},children:g.label},f))})]})]})]})},Un=o.div`
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
`,pr=o.div`
  margin-bottom: 2px;
`,ur=o.div`
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
`,fr=({title:e,data:n,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:c,minY:p,xStep:v,yStep:j,height:x=300,showLegend:g=!0,xAxisCustomLabels:f,showTooltip:b=!0,titleFontSize:h="30px"})=>{const[u,l]=y.useState(null),[I,k]=y.useState({x:0,y:0}),R=y.useRef(null),L=y.useRef(null),F=Math.max(...n.map(m=>m.x),r),A=[];for(let m=0;m<=F;m+=v)A.push(m);const B=[];for(let m=p;m<=c;m+=j)B.push(m);const N=f||A.map(m=>m.toString()),E=g?Array.from(new Set(n.filter(m=>m.label).map(m=>m.label))).map(m=>{const d=n.find(M=>M.label===m);return{name:m,color:d.color}}):[],z={};n.forEach(m=>{const d=m.label||"default";z[d]||(z[d]=[]),z[d].push(m)});const W=m=>m/F*100,_=m=>{const d=c-p;return 100-(m-p)/d*100};return y.useEffect(()=>{if(u&&L.current){const m=L.current.getBoundingClientRect(),d=W(u.x)/100*m.width,M=_(u.y)/100*m.height;k({x:d+m.left,y:M+m.top})}},[u,r,c,p]),t.jsxs(xr,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:h},children:e}),g&&E.length>0&&t.jsx(gr,{children:E.map((m,d)=>t.jsxs(br,{children:[t.jsx(mr,{color:m.color}),t.jsx(wr,{children:m.name})]},d))})]}),t.jsxs(vr,{height:x,children:[t.jsxs(yr,{children:[B.map((m,d)=>t.jsx(kr,{children:m.toLocaleString()},d)),t.jsx(Ce,{children:i})]}),t.jsxs(jr,{ref:L,children:[B.map((m,d)=>t.jsx(Cr,{position:_(m)},`hline-${d}`)),Object.values(z).map((m,d)=>m.map((M,T)=>{if(T===0)return null;const Y=m[T-1],P=W(Y.x),V=_(Y.y),w=W(M.x),C=_(M.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${P}%`,y1:`${V}%`,x2:`${w}%`,y2:`${C}%`,stroke:M.color,strokeWidth:"1"})},`line-${d}-${T}`)})),n.map((m,d)=>t.jsx($r,{x:W(m.x),y:_(m.y),color:m.color,onMouseEnter:()=>l(m),onMouseLeave:()=>l(null),isHovered:u?.label===m.label},d))]})]}),b&&u&&t.jsxs(Dr,{ref:R,style:{left:I.x,top:I.y},children:[t.jsxs(Tr,{children:[u.name&&t.jsx(Lr,{children:u.name}),t.jsx(Er,{children:u.y.toLocaleString()})]}),t.jsx(Pr,{})]}),t.jsxs(Sr,{children:[N.map((m,d)=>{const T=A[d]/F*100;return t.jsx(Mr,{style:{left:`${T}%`,transform:"translateX(-50%)"},children:m},d)}),s&&t.jsx(Ce,{children:s})]})]})},xr=o.div`
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
`,Ir=({images:e,initialIndex:n,onClose:s})=>{const[i,r]=y.useState(n),[c,p]=y.useState(0),v=()=>{r(f=>f>0?f-1:e.length-1),p(0)},j=()=>{r(f=>f<e.length-1?f+1:0),p(0)},x=()=>{p(f=>(f+90)%360)},g=f=>{f.key==="Escape"?s():f.key==="ArrowLeft"?v():f.key==="ArrowRight"?j():(f.key==="r"||f.key==="к")&&x()};return t.jsx(Rr,{onClick:s,onKeyDown:g,tabIndex:0,children:t.jsxs(Br,{onClick:f=>f.stopPropagation(),children:[t.jsx(Ar,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(zr,{children:t.jsx(Fr,{onClick:x,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(_r,{children:[t.jsx($e,{$position:"left",onClick:v,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Or,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx($e,{$position:"right",onClick:j,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Yr,{children:e.map((f,b)=>t.jsx(Nr,{$active:b===i,onClick:()=>{r(b),p(0)}},b))})]})})},Rr=o.div`
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
`,Ae=({isOpen:e,callPhone:n,error:s,onClose:i})=>{const[r,c]=y.useState(!1);if(!e)return null;const p=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),v=()=>{p?window.location.href=`tel:${n}`:(navigator.clipboard.writeText(n),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Wr,{onClick:i,children:t.jsxs(Hr,{onClick:j=>j.stopPropagation(),children:[t.jsx(Vr,{children:"Подтверждение авторизации"}),t.jsx(Se,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Zr,{onClick:v,title:p?"Позвонить":"Копировать номер",$clickable:!0,children:[n,!p&&r&&t.jsx(Ur,{children:"Скопировано!"})]}),t.jsx(Se,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),s&&t.jsx(Xr,{children:s})]})})},Wr=o.div`
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
`,ze=y.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),qr=({items:e,bottomItems:n=[],logo:s,arrowIcon:i,collapsed:r,onToggle:c,selectedKey:p,onSelect:v,autoCollapseOnSelect:j=!1,width:x="315px",collapsedWidth:g="70px",className:f,style:b})=>{const h=y.useContext(ze),[u,l]=y.useState(r??h.collapsed??!1),[I,k]=y.useState(null),[R,L]=y.useState(p??h.selectedSideMenuItem??null),[F,A]=y.useState({visible:!1,x:0,y:0,items:[]}),B=y.useRef(null),N=r??h.collapsed??u,E=P=>{l(P),h.toggleCollapsed(),c?.(P)},z=p??h.selectedSideMenuItem??R,W=P=>{L(P),h.setSelectedSideMenuItem(P)};y.useEffect(()=>{r!==void 0&&(l(r),r&&k(null))},[r]),y.useEffect(()=>{p!==void 0&&W(p)},[p]),y.useEffect(()=>{const P=()=>A(V=>({...V,visible:!1}));return document.addEventListener("click",P),()=>document.removeEventListener("click",P)},[]);const _=()=>{const P=!N;E(P),P&&k(null)},m=P=>{P.disabled||P.hidden||(W(P.key),v?.(P),P.onClick?.(P),j&&(E(!0),k(null)))},d=P=>{k(V=>V===P?null:P)},M=(P,V)=>{const w=(P.children?.length||0)>0;if(N&&w){V.stopPropagation();const C=V.currentTarget.getBoundingClientRect();A({visible:!0,x:C.right+6,y:C.top,items:P.children||[]});return}w?d(P.key):m(P)},T=(P,V=!1)=>P.filter(w=>!w.hidden).map(w=>{const C=(w.children?.length||0)>0,a=I===w.key,$=z===w.key||!!w.children&&w.children.some(S=>S.key===z);return t.jsxs(y.Fragment,{children:[t.jsxs(oi,{$collapsed:N,$selected:$,onClick:S=>M(w,S),$disabled:w.disabled,title:w.label,children:[w.icon&&t.jsx(ri,{$collapsed:N,children:w.icon}),!N&&t.jsx(ni,{children:w.label}),!N&&C&&t.jsx(si,{$expanded:a,children:"▾"})]}),!N&&C&&a&&t.jsx(ii,{children:T(w.children||[],!0)})]},w.key)}),Y=y.useMemo(()=>F.visible?t.jsx(li,{style:{left:F.x,top:F.y},children:F.items.map(P=>t.jsx(ci,{onClick:()=>{m(P),A({visible:!1,x:0,y:0,items:[]})},$selected:z===P.key,children:P.label},P.key))}):null,[F,z]);return t.jsxs(Gr,{ref:B,$collapsed:N,$width:x,$collapsedWidth:g,className:f,style:b,children:[t.jsxs(Jr,{children:[t.jsx(Kr,{onClick:_,"aria-label":"Переключить меню",children:i??t.jsx(Qr,{$collapsed:N,children:"❮"})}),!N&&s&&t.jsx(ei,{children:s})]}),t.jsxs(ti,{children:[t.jsx(Me,{children:T(e)}),n.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ai,{}),t.jsx(Me,{children:T(n)})]})]}),Y,t.jsx(di,{$collapsed:N})]})},Gr=o.div`
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
`,pi=e=>{const n=e.replace(/\D/g,""),i=(n.startsWith("8")||n.length===0?n:`8${n}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},Fe=({value:e,onChange:n,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=c=>{const p=pi(c.target.value);n(p)};return t.jsx(ui,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},ui=o.input`
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
`,ie=(e,n)=>K("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:n}}),_e=(e,n,s,i)=>K("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:n,user_type:s,name:i}}),hi=({onLoginSuccess:e,userType:n="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:p="https://waypay.one",supportLinkText:v="waypay.one",className:j,style:x,pollingIntervalMs:g=3e3,enableRegistration:f=!1})=>{const[b,h]=y.useState(!1),[u,l]=y.useState(""),[I,k]=y.useState(!1),[R,L]=y.useState(""),[F,A]=y.useState(""),[B,N]=y.useState(!1),[E,z]=y.useState(!1),[W,_]=y.useState(""),[m,d]=y.useState(""),[M,T]=y.useState(null),Y=y.useRef(void 0);y.useEffect(()=>()=>{Y.current&&clearInterval(Y.current)},[]);const P=S=>{const D=S.replace(/\D/g,"");return D?D.startsWith("8")?`+7${D.slice(1)}`:D.startsWith("7")?`+${D}`:`+${D}`:""},V=()=>{k(!1),z(!1),_(""),d(""),T(null),Y.current&&window.clearInterval(Y.current)},w=async S=>{if(S.preventDefault(),!u){A("Введите номер телефона");return}h(!0),A("");const D=P(u);try{const O=await ie(D,n);T({phone:D,checkId:O.check_id,callPhone:O.call_phone}),f&&"name_required"in O&&O.name_required?z(!0):!f&&"name_required"in O&&O.name_required?(A("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),T(null)):(L(O.call_phone),k(!0),a(D,O.check_id))}catch(O){console.error("Auth error:",O),A("Не удалось инициировать авторизацию. Проверьте номер.")}finally{h(!1)}},C=async S=>{if(S.preventDefault(),!W.trim()){d("Введите ФИО");return}if(M){h(!0),d("");try{const D=await ie(M.phone,n);L(D.call_phone),z(!1),k(!0),a(M.phone,D.check_id)}catch(D){console.error("Registration error:",D),d("Не удалось завершить регистрацию")}finally{h(!1)}}},a=(S,D)=>{Y.current&&window.clearInterval(Y.current),Y.current=window.setInterval(()=>{$(S,D)},g)},$=async(S,D)=>{if(!B){N(!0);try{const O=await _e(S,D,n,W.trim());O.access_token&&O.refresh_token&&(Y.current&&window.clearInterval(Y.current),k(!1),z(!1),_(""),T(null),e(O.access_token))}catch(O){console.error("Verification error:",O),A("Ошибка проверки авторизации")}finally{N(!1)}}};return t.jsxs(fi,{className:j,style:x,children:[t.jsxs(xi,{children:[t.jsxs(gi,{onSubmit:E?C:w,children:[t.jsx(bi,{children:E?"Регистрация":s}),E?t.jsxs(De,{children:[t.jsx(Te,{children:t.jsx(mi,{type:"text",value:W,onChange:S=>_(S.target.value),placeholder:"Введите ФИО",disabled:b,autoFocus:!0})}),m&&t.jsx($i,{children:m})]}):t.jsx(De,{children:t.jsx(Te,{children:t.jsx(Fe,{value:u,onChange:S=>l(S),placeholder:r})})}),(F||m)&&t.jsx(Ci,{children:t.jsx("span",{children:F||m})}),t.jsx(wi,{type:"submit",disabled:b,children:b?"Загрузка...":E?"Продолжить":i}),E&&t.jsx(vi,{type:"button",onClick:()=>{z(!1),_(""),d(""),T(null)},disabled:b,children:"← Назад"})]}),t.jsxs(yi,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(ki,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(ji,{href:p,target:"_blank",rel:"noreferrer",children:v})]})]}),t.jsx(Ae,{isOpen:I,onClose:V,callPhone:R,error:F})]})},fi=o.div`
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
`,Oe=e=>{let n=0;for(let i=0;i<e.length;i++)n=e.charCodeAt(i)+((n<<5)-n);return`hsl(${Math.abs(n%360)}, 60%, 60%)`},Si=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Mi=(e,n=100)=>{const s=document.createElement("canvas");s.width=n,s.height=n;const i=s.getContext("2d");if(!i)return"";const r=Oe(e);i.fillStyle=r,i.beginPath(),i.arc(n/2,n/2,n/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=n/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const p=c*.1;return i.fillText(e,n/2,n/2+p),s.toDataURL("image/png")},Di=e=>{if(!e)return"";const n=typeof e=="string"?new Date(e):e;if(isNaN(n.getTime()))return"";const s=n.getDate().toString().padStart(2,"0"),i=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getFullYear();return`${s}-${i}-${r}`};function Ti(e){return new Date(e)}const Ye=e=>{let n;try{if(e instanceof Date)n=e;else if(typeof e=="string"||typeof e=="number")n=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(n.getTime()))return"неверная дата";const s=new Date;if(n>s){const g=Math.floor((n.getTime()-s.getTime())/1e3),f=Math.floor(g/60),b=Math.floor(f/60),h=Math.floor(b/24);return g<10?"скоро":g<60?`через ${g} секунд`:f===1?"через минуту":f<60?`через ${f} минут`:b===1?"через час":b<24?`через ${b} часов`:h===1?"завтра":h<7?`через ${h} дней`:"в будущем"}const i=Math.floor((s.getTime()-n.getTime())/1e3),r=Math.floor(i/60),c=Math.floor(r/60),p=Math.floor(c/24),v=Math.floor(p/7),j=Math.floor(p/30),x=Math.floor(p/365);if(i<10)return"только что";if(i<60){const g=Math.max(1,i);return g===1?"секунду назад":g<5?`${g} секунды назад`:`${g} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:p<7?p===1?"вчера":p===2?"позавчера":`${p} дня назад`:v<4?v===1?"неделю назад":v<5?`${v} недели назад`:`${v} недель назад`:j<12?j===1?"месяц назад":j<5?`${j} месяца назад`:`${j} месяцев назад`:x===1?"год назад":x<5?`${x} года назад`:`${x} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},Ne=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Li=(e,n={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=n,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?Ne(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Ye(r)};exports.API_BASE_URL=ae;exports.AddButton=pt;exports.AuthCallModal=Ae;exports.AuthPage=hi;exports.BackButton=bt;exports.BaseModal=Ie;exports.Checkbox=Ht;exports.ColumnChart=Zn;exports.ContextMenu=se;exports.CountInfoTitle=vn;exports.CustomCalendar=ne;exports.CustomInput=Pe;exports.CustomPhoneInput=Fe;exports.CustomSelect=Tt;exports.CustomTable=Qe;exports.CustomTextArea=vo;exports.CustomTitle=de;exports.DefaultButton=le;exports.DeleteButton=vt;exports.EditButton=kt;exports.EntitySelectContainer=dn;exports.ExportButton=$t;exports.InputTitle=kn;exports.ModalInfoTitle=jn;exports.Pagination=mo;exports.PeriodField=zo;exports.PhoneModalInput=Jo;exports.PhotoViewerModal=Ir;exports.ProgressBar=En;exports.RadioButton=Dn;exports.ScatterPlot=fr;exports.SideMenu=qr;exports.SideMenuContext=ze;exports.Tabs=on;exports.TitleField=ce;exports.ToggleSwitch=Mn;exports.YandexMapSelector=Fn;exports.apiRequest=K;exports.authStorage=Le;exports.confirmCallAuth=_e;exports.formatDate=Di;exports.formatExactDate=Ne;exports.formatMoney=re;exports.formatRelativeTime=Ye;exports.formatRelativeTimeExtended=Li;exports.generateAvatar=Mi;exports.getInitials=Si;exports.getSessionInfo=xt;exports.initiateCallAuth=ie;exports.parseDateInput=Ti;exports.parseMoney=Vn;exports.stringToColor=Oe;
