"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const w=require("react"),n=require("styled-components"),X=require("framer-motion");var ee={exports:{}},J={};var pe;function Ne(){if(pe)return J;pe=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(i,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var m in r)m!=="key"&&(c[m]=r[m])}else c=r;return r=c.ref,{$$typeof:e,type:i,key:u,ref:r!==void 0?r:null,props:c}}return J.Fragment=o,J.jsx=s,J.jsxs=s,J}var K={};var ue;function Ye(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===F?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case T:return"Fragment";case R:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case _:return a.displayName||"Context";case I:return(a._context.displayName||"Context")+".Consumer";case A:var M=a.render;return a=a.displayName,a||(a=M.displayName||M.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case B:return M=a.displayName||null,M!==null?M:e(a.type)||"Memo";case z:M=a._payload,a=a._init;try{return e(a(M))}catch{}}return null}function o(a){return""+a}function s(a){try{o(a);var M=!1}catch{M=!0}if(M){M=console;var x=M.error,C=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return x.call(M,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",C),o(a)}}function i(a){if(a===T)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===z)return"<...>";try{var M=e(a);return M?"<"+M+">":"<...>"}catch{return"<...>"}}function r(){var a=g.A;return a===null?null:a.getOwner()}function c(){return Error("react-stack-top-frame")}function u(a){if(p.call(a,"key")){var M=Object.getOwnPropertyDescriptor(a,"key").get;if(M&&M.isReactWarning)return!1}return a.key!==void 0}function m(a,M){function x(){O||(O=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",M))}x.isReactWarning=!0,Object.defineProperty(a,"key",{get:x,configurable:!0})}function k(){var a=e(this.type);return V[a]||(V[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function b(a,M,x,C,D,Y){var W=x.ref;return a={$$typeof:h,type:a,key:M,props:x,_owner:C},(W!==void 0?W:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:k}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:D}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Y}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function v(a,M,x,C,D,Y){var W=M.children;if(W!==void 0)if(C)if(S(W)){for(C=0;C<W.length;C++)f(W[C]);Object.freeze&&Object.freeze(W)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(W);if(p.call(M,"key")){W=e(a);var U=Object.keys(M).filter(function(Oe){return Oe!=="key"});C=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",L[W+C]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,C,W,U,W),L[W+C]=!0)}if(W=null,x!==void 0&&(s(x),W=""+x),u(M)&&(s(M.key),W=""+M.key),"key"in M){x={};for(var q in M)q!=="key"&&(x[q]=M[q])}else x=M;return W&&m(x,typeof a=="function"?a.displayName||a.name||"Unknown":a),b(a,W,x,r(),D,Y)}function f(a){y(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===z&&(a._payload.status==="fulfilled"?y(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function y(a){return typeof a=="object"&&a!==null&&a.$$typeof===h}var d=w,h=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),_=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),g=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,p=Object.prototype.hasOwnProperty,S=Array.isArray,E=console.createTask?console.createTask:function(){return null};d={react_stack_bottom_frame:function(a){return a()}};var O,V={},Z=d.react_stack_bottom_frame.bind(d,c)(),$=E(i(c)),L={};K.Fragment=T,K.jsx=function(a,M,x){var C=1e4>g.recentlyCreatedOwnerStacks++;return v(a,M,x,!1,C?Error("react-stack-top-frame"):Z,C?E(i(a)):$)},K.jsxs=function(a,M,x){var C=1e4>g.recentlyCreatedOwnerStacks++;return v(a,M,x,!0,C?Error("react-stack-top-frame"):Z,C?E(i(a)):$)}})()),K}var he;function We(){return he||(he=1,process.env.NODE_ENV==="production"?ee.exports=Ne():ee.exports=Ye()),ee.exports}var t=We();const se=({x:e,y:o,items:s,onClose:i,...r})=>{const c=w.useRef(null),[u,m]=w.useState(null);w.useEffect(()=>{const d=h=>{c.current&&!c.current.contains(h.target)&&i()};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[i]);const b=(()=>{if(!c.current)return{x:e,y:o};const d=c.current.offsetWidth,h=c.current.offsetHeight,l=window.innerWidth,T=window.innerHeight;let j=e,R=o;return j+d>l&&(j=e-d),R+h>T&&(R=o-h),{x:j,y:R}})(),v=(d,h)=>{d.submenu?m(u===h?null:h):d.action&&(d.action(),i())},f=d=>{s[d].submenu&&m(d)},y=d=>{const h=d.relatedTarget;c.current?.contains(h)||m(null)};return t.jsx(He,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:b.y,left:b.x},onClick:d=>d.stopPropagation(),onMouseLeave:y,...r,children:s.map((d,h)=>t.jsxs(Ve,{$hasSubmenu:!!d.submenu,$disabled:d.disabled,children:[t.jsx(Ze,{onClick:l=>{l.stopPropagation(),d.disabled||v(d,h)},onMouseEnter:()=>!d.disabled&&f(h),whileHover:d.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:d.color,$disabled:d.disabled,children:t.jsxs(Ue,{children:[d.label,d.submenu&&t.jsx(Xe,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),d.submenu&&u===h&&t.jsx(qe,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(se,{x:0,y:-h*40,items:d.submenu,onClose:()=>m(null)})})]},h))})},He=n(X.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Ve=n.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,Ze=n(X.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Ue=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Xe=n.span`
  color: #666;
  margin-left: 8px;
`,qe=n(X.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Ge=({columns:e,data:o,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:c,onRowClick:u,selectedRow:m,fixedHeight:k,hasTotalsRow:b,debtChecker:v,rowStyles:f={},isLoading:y})=>{const[d,h]=w.useState(null),[l,T]=w.useState(null),j=w.useRef(null),R=w.useRef(null),I=500,_=m!==void 0?m:d,A=$=>{!e[$].isSortable||!r||r($)},H=v||($=>{const L=$[8];return typeof L=="string"?parseFloat(L.replace(/[^\d.]/g,""))>0:!1}),B=$=>{m===void 0&&h($===_?null:$),u&&u(o[$],$)},z=($,L)=>{s&&s($,L)},N=($,L)=>{if(i.length===0)return;$.preventDefault();const a="touches"in $?$.touches[0].clientX:$.clientX,M="touches"in $?$.touches[0].clientY:$.clientY;T({x:a,y:M,rowIndex:L})},F=($,L)=>{$.preventDefault(),N($,L)},g=($,L)=>{i.length!==0&&(R.current&&clearTimeout(R.current),R.current=window.setTimeout(()=>{N($,L)},I))},p=()=>{R.current&&(clearTimeout(R.current),R.current=null)},S=()=>{R.current&&window.clearTimeout(R.current)},E=()=>{T(null)};w.useEffect(()=>{const $=()=>{l&&E()};return document.addEventListener("click",$),()=>{document.removeEventListener("click",$),R.current&&clearTimeout(R.current)}},[l]);const O=($,L,a)=>{if(L)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const M=f[$]||{};return $===_?{backgroundColor:M.backgroundColor||"#007D88",color:M.color||"#FFFFFF",fontWeight:M.fontWeight||"normal"}:a?{backgroundColor:M.backgroundColor||"#E8D8D8",color:M.color||"inherit",fontWeight:M.fontWeight||"normal"}:o[$][o[$].length-1]===!1?{backgroundColor:M.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:M.fontWeight||"normal"}:{backgroundColor:M.backgroundColor||"#FFFFFF",color:M.color||"inherit",fontWeight:M.fontWeight||"normal"}},V=($,L,a)=>{if(L)return"#FFFFFF";const M=O($,L,a);return M.hoverBackgroundColor?M.hoverBackgroundColor:$===_?"#007D88":a?"#E8D8D8CC":o[$][o[$].length-1]===!1?"#51D5B4CC":"#F3F4F6"},Z=()=>{if(!l||i.length===0)return null;const $=(typeof i=="function"?i(o[l.rowIndex]):i).filter(L=>typeof L=="object"&&(typeof L.shouldShow!="function"||L.shouldShow(o[l.rowIndex])));return $.length===0?null:t.jsx(tt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:L=>L.stopPropagation(),children:t.jsx(se,{items:$.map(L=>{const a={label:L.label,color:L.color,disabled:L.disabled};return L.getSubmenu?a.submenu=L.getSubmenu(o[l.rowIndex]):L.action&&(a.action=()=>{L.action(o[l.rowIndex],l.rowIndex),E()}),a}),onClose:E,x:0,y:0})})};return t.jsx(Qe,{ref:j,children:y?t.jsx(Je,{children:t.jsx(Ke,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(et,{children:[t.jsx(nt,{children:t.jsx(xe,{children:e.map(($,L)=>!$.isHidden&&t.jsx(rt,{$isSortable:$.isSortable,$isActive:c?.key===L,onClick:()=>A(L),$align:$.align||"center",$isFirst:L===0,$isLast:L===e.length-1,children:t.jsxs(it,{$align:$.align||"center",children:[$.name,$.isSortable&&t.jsx(st,{$direction:c?.key===L?c.direction:"asc",animate:{rotate:c?.key===L&&c.direction==="desc"?180:0,color:c?.key===L?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},L))})}),t.jsx(ot,{$fixedHeight:k,children:t.jsx(X.AnimatePresence,{children:o.map(($,L)=>{const a=!!(b&&L===o.length-1),M=!!(!a&&H($)),x=O(L,a,M),C=V(L,a,M);return t.jsx(xe,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:x.backgroundColor||"#FFFFFF",color:x.color||"inherit",fontWeight:x.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:L===o.length-1,$isSelected:L===_,$isTotalsRow:a,onClick:()=>!a&&B(L),onDoubleClick:()=>!a&&z($,L),onContextMenu:D=>!a&&F(D,L),onTouchStart:D=>!a&&g(D,L),onTouchEnd:p,onTouchMove:S,whileHover:a?{}:{backgroundColor:C,transition:{duration:.15}},style:{backgroundColor:x.backgroundColor||"#FFFFFF",color:x.color||"inherit",fontWeight:x.fontWeight||"normal"},children:$.map((D,Y)=>!e[Y]?.isHidden&&t.jsx(at,{$align:e[Y]?.align||"center",$isFirst:Y===0,$isLast:Y===$.length-1,$isTotalsCell:a,$isBeforeTotals:a&&Y<$.findIndex(W=>W==="Итого:"),children:D},Y))},`row-${L}`)})})})]}),t.jsx(X.AnimatePresence,{children:Z()})]})})},Je=n.div`
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
`,Ke=n.div`
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
`,Qe=n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,et=n.table`
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
`,tt=n(X.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,nt=n.thead`
  text-align: center;
  position: relative;
`,ot=n.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,xe=n(X.motion.tr)`
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
`,rt=n.th`
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
`,it=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,st=n(X.motion.span)`
  display: inline-flex;
  align-items: center;
`,at=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,lt=({onClick:e,tooltip:o,size:s=32,margin:i})=>t.jsx(ct,{onClick:e,size:s,margin:i,title:o,children:t.jsx(dt,{size:s})}),ct=n.button`
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
`,dt=n.div`
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
`,ae="/api";async function G(e,o={}){const{method:s="GET",body:i,headers:r={},token:c,withCredentials:u=!0}=o,m=async b=>{const v={"Content-Type":"application/json",...r};b&&(v.Authorization=`Bearer ${b}`);const f=e.startsWith("http")?e:`${ae}${e}`;return await fetch(f,{method:s,headers:v,body:i?JSON.stringify(i):void 0,credentials:u?"include":"same-origin"})},k=async(b,v=!0)=>{const f=await m(b);if(f.ok){if(f.status===204)return null;const d=await f.text();if(!d)return null;try{return JSON.parse(d)}catch{return d}}if(f.status===401&&v){const d=await pt();if(d)return k(d,!1)}let y=`Request failed with status ${f.status}`;try{const d=await f.json();d&&typeof d.error=="string"?y=d.error:typeof d=="string"&&(y=d)}catch{const d=await f.text();d&&(y=d)}throw new Error(y)};return k(c)}async function pt(){const e=await fetch(`${ae}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const ut={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await G("/auth/session/info",{method:"GET"})}catch{return null}},async logout(){try{await G("/auth/session/revoke",{method:"POST"})}catch(e){throw console.error("Logout error:",e),e}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},ht=n.button`
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
`,xt=({children:e,onClick:o})=>t.jsxs(ht,{onClick:o,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),te=({children:e="Подтвердить",icon:o,disabled:s=!1,bg:i,hoverBg:r,disabledBg:c,textColor:u,fullWidth:m=!1,minWidth:k,width:b,isPrimary:v=!0,...f})=>{const d=i?{bg:i,hoverBg:r||i,disabledBg:c||i,textColor:u||(v?"white":"black")}:v?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(ft,{disabled:s,$bg:d.bg,$hoverBg:d.hoverBg,$disabledBg:d.disabledBg,$textColor:d.textColor,$fullWidth:m,$minWidth:k,$width:b,...f,children:[o&&t.jsx(gt,{children:o}),t.jsx("span",{children:e})]})},ft=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({disabled:e,$bg:o,$disabledBg:s})=>e?s:o};
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
    background-color: ${({disabled:e,$hoverBg:o,$disabledBg:s})=>e?s:o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({$bg:e})=>e==="rgba(209, 213, 219, 1)"?"rgba(209, 233, 239, 1)":"rgba(156, 163, 175, 0.5)"};
  }
`,gt=n.span`
  display: inline-flex;
  align-items: center;
`,bt=({onClick:e,tooltip:o,size:s=32})=>t.jsx(mt,{onClick:e,size:s,title:o,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),mt=n.button`
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
`,wt=({onClick:e,tooltip:o,size:s=32})=>t.jsx(vt,{onClick:e,size:s,title:o,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),vt=n.button`
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
`,yt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),kt=({children:e="Экспорт",icon:o=t.jsx(yt,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...c})=>{const u=async m=>{if(s)try{await s()}catch(k){console.error("Export error:",k)}c.onClick&&c.onClick(m)};return t.jsx(jt,{...c,onClick:u,disabled:i||c.disabled,children:i?t.jsxs(Ct,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx($t,{progress:r})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},jt=n.button`
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
`,Ct=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,$t=n.div`
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
`,St=({placeholder:e="",customPlaceholder:o,value:s,onChange:i,hasError:r=!1,errorMessage:c,options:u,name:m,disabled:k=!1,required:b=!1,...v})=>{const[f,y]=w.useState(!1),[d,h]=w.useState(!1),l=w.useRef(null),T=!!(o&&!s&&!f),j=P=>{i&&!k&&i({target:{value:P,name:m}}),h(!1),y(!1)},R=P=>{l.current&&!l.current.contains(P.target)&&(h(!1),y(!1))},I=()=>{k||(h(!d),y(!d))};w.useEffect(()=>(document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}),[]);const _=u.find(P=>P.value===s),A=_?_.label:"";return t.jsxs(Mt,{ref:l,...v,children:[t.jsxs(Lt,{children:[t.jsxs(Dt,{hasError:r,isOpen:d,disabled:k,onClick:I,onFocus:()=>!k&&y(!0),onBlur:()=>y(!1),tabIndex:k?-1:0,children:[t.jsx(Tt,{children:A||e&&t.jsx(Et,{children:e})}),t.jsx(It,{isOpen:d,disabled:k,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:k?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),d&&t.jsx(Pt,{children:u.map(P=>t.jsxs(Rt,{$isSelected:P.value===s,onClick:()=>j(P.value),children:[t.jsx(Bt,{$isSelected:P.value===s,children:P.value===s&&t.jsx(zt,{})}),t.jsx(At,{children:P.label})]},P.value))})]}),o&&t.jsx(Ft,{isVisible:T,children:o}),r&&c&&t.jsx(_t,{children:c}),t.jsx(Ot,{name:m,value:s||"",onChange:()=>{},tabIndex:-1,required:b,children:u.map(P=>t.jsx("option",{value:P.value,children:P.label},P.value))})]})},Mt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Lt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Dt=n.div`
  border: 1px solid
    ${({hasError:e,isOpen:o,disabled:s})=>s?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":o?"rgba(0, 125, 136, 1)":"rgba(209, 213, 219, 1)"};
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
    border-color: ${({hasError:e,disabled:o,isOpen:s})=>o?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }
`,Tt=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Et=n.span`
  color: rgba(80, 85, 92, 1);
`,It=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,Pt=n.div`
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
`,Rt=n.div`
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
`,Bt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,zt=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,At=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Ft=n.label`
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
`,_t=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ot=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Nt=({checked:e=!1,onChange:o,className:s,label:i,disabled:r=!1})=>{const[c,u]=w.useState(!1),m=()=>{r||!o||o(!e)},k=b=>{r||(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),m())};return t.jsxs(Yt,{className:s,onClick:m,onKeyPress:k,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Wt,{checked:e,isFocused:c,disabled:r,onMouseEnter:()=>!r&&u(!0),onMouseLeave:()=>!r&&u(!1),onFocus:()=>!r&&u(!0),onBlur:()=>!r&&u(!1),children:e&&t.jsx(Vt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Ht,{disabled:r,children:i})]})},Yt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Wt=n.div`
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
`,Ht=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Vt=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Zt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",fe=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Ut=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],re=({prefix:e="Дата:",value:o="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[c,u]=w.useState(!1),[m,k]=w.useState(new Date),[b,v]=w.useState(o?new Date(o):null),[f,y]=w.useState(!1),[d,h]=w.useState(!1),l=w.useRef(null),T=w.useRef(null),j=w.useRef(null);w.useEffect(()=>{const p=S=>{l.current&&!l.current.contains(S.target)&&u(!1),T.current&&!T.current.contains(S.target)&&y(!1),j.current&&!j.current.contains(S.target)&&h(!1)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[]),w.useEffect(()=>{v(o?new Date(o):null)},[o]);const R=p=>{const S=new Date(Date.UTC(p.getFullYear(),p.getMonth(),p.getDate()));v(p);const E=S.toISOString().split("T")[0];i?.(E),u(!1)},I=()=>{const p=new Date;k(p);const E=new Date(Date.UTC(p.getFullYear(),p.getMonth(),p.getDate())).toISOString().split("T")[0];i?.(E),u(!1)},_=()=>{v(null),i?.(""),r?.(),u(!1)},A=p=>{const S=new Date(m);S.setMonth(p),k(S),y(!1)},P=p=>{const S=new Date(m);S.setFullYear(p),k(S),h(!1)},H=()=>{const p=m.getFullYear(),S=m.getMonth(),E=new Date(p,S,1),V=new Date(p,S+1,0).getDate(),Z=E.getDay()===0?6:E.getDay()-1,$=[],L=35,a=new Date(p,S,0).getDate();for(let x=0;x<Z;x++){const C=a-Z+x+1,D=new Date(p,S-1,C),Y=!!(b&&D.getDate()===b.getDate()&&D.getMonth()===b.getMonth()&&D.getFullYear()===b.getFullYear());$.push(t.jsx(ne,{selected:Y,onClick:()=>R(D),otherMonth:!0,children:C},`prev-${C}`))}for(let x=1;x<=V;x++){const C=new Date(p,S,x),D=!!(b&&C.getDate()===b.getDate()&&C.getMonth()===b.getMonth()&&C.getFullYear()===b.getFullYear());$.push(t.jsx(ne,{selected:D,onClick:()=>R(C),children:x},`current-${x}`))}const M=L-$.length;for(let x=1;x<=M;x++){const C=new Date(p,S+1,x),D=!!(b&&C.getDate()===b.getDate()&&C.getMonth()===b.getMonth()&&C.getFullYear()===b.getFullYear());$.push(t.jsx(ne,{selected:D,onClick:()=>R(C),otherMonth:!0,children:x},`next-${x}`))}return $},B=()=>b?b.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,z=()=>{const p=new Date().getFullYear(),S=[];for(let E=p-10;E<=p+10;E++)S.push(E);return S},N=p=>{p.preventDefault(),p.stopPropagation(),y(!f),h(!1)},F=p=>{p.preventDefault(),p.stopPropagation(),h(!d),y(!1)},g=p=>{const S=p==="next"?1:-1,E=new Date(m);E.setMonth(E.getMonth()+S),k(E)};return t.jsxs(Xt,{ref:l,children:[t.jsxs(qt,{onClick:()=>u(!c),children:[e&&t.jsx(Gt,{children:e}),t.jsx(Jt,{isEmpty:!b,children:B()}),t.jsx(Kt,{src:Zt,alt:"Календарь"})]}),c&&t.jsxs(Qt,{className:"calendar-container",children:[t.jsxs(en,{children:[t.jsx(we,{onClick:p=>{p.preventDefault(),p.stopPropagation(),g("prev")},onMouseDown:p=>p.preventDefault(),children:t.jsx(ve,{direction:"right"})}),t.jsxs(tn,{children:[t.jsxs(rn,{ref:T,children:[t.jsxs(nn,{onClick:p=>N(p),onMouseDown:p=>p.preventDefault(),children:[fe[m.getMonth()],t.jsx(ge,{$open:f})]}),f&&t.jsx(be,{$width:120,onClick:p=>p.stopPropagation(),children:fe.map((p,S)=>t.jsx(me,{$selected:S===m.getMonth(),onClick:E=>{E.stopPropagation(),A(S)},children:p},p))})]}),t.jsxs(sn,{ref:j,children:[t.jsxs(on,{onClick:p=>F(p),onMouseDown:p=>p.preventDefault(),children:[m.getFullYear(),t.jsx(ge,{$open:d})]}),d&&t.jsx(be,{$width:80,onClick:p=>p.stopPropagation(),children:z().map(p=>t.jsx(me,{$selected:p===m.getFullYear(),onClick:S=>{S.stopPropagation(),P(p)},children:p},p))})]})]}),t.jsx(we,{onClick:p=>{p.preventDefault(),p.stopPropagation(),g("next")},onMouseDown:p=>p.preventDefault(),children:t.jsx(ve,{direction:"left"})})]}),t.jsx(an,{children:Ut.map(p=>t.jsx(ln,{children:p},p))}),t.jsx(cn,{children:H()}),t.jsxs(dn,{children:[t.jsx(ye,{onClick:_,children:"Удалить"}),t.jsx(ye,{onClick:I,children:"Сегодня"})]})]})]})},Xt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,qt=n.div`
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
`,Gt=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,Jt=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,Kt=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,Qt=n.div`
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
`,en=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,tn=n.div`
  display: flex;
  gap: 8px;
  color: black;
`,Le=n.button`
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
`,nn=n(Le)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,on=n(Le)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,rn=n.div`
  position: relative;
`,sn=n.div`
  position: relative;
`,ge=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,be=n.div`
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
`,me=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,we=n.button`
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
`,ve=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,an=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,ln=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,cn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,ne=n.div`
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
`,dn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ye=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,pn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,un=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,hn=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,le=({placeholder:e="",customPlaceholder:o,value:s,inputType:i="text",onChange:r,hasError:c=!1,errorMessage:u,...m})=>{const[k,b]=w.useState(!1),v=!!(o&&!s&&!k),f=h=>{if(!r)return;let l=h.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(h);break;case"rubles":{const j=h.target.selectionStart,R=h.target.value;let I=R.replace(/[^\d]/g,"");if(I===""){h.target.value="",r(h);break}const _=parseInt(I,10);if(!isNaN(_)){let A=_.toLocaleString("ru-RU");A+=" ₽";const P=y(R,j||0),H=d(A,P);h.target.value=A,r(h),setTimeout(()=>{h.target.setSelectionRange(H,H)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const j=l.split(".");j.length>2&&(l=j[0]+"."+j.slice(1).join("")),j.length===2&&j[1].length>2&&(l=j[0]+"."+j[1].slice(0,2));const R=parseFloat(l);if(isNaN(R)||(R>100?l="100":R<0&&(l="0")),l&&l!==""){l+=" %";const I=h.target.selectionStart||0,_=l.replace(" %","");h.target.value=l,r(h),setTimeout(()=>{I<_.length&&h.target.setSelectionRange(I,I)},0)}else h.target.value=l,r(h);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let T=l.split(" ").filter(j=>j.length>0);T=T.slice(0,3),l=T.map(j=>{if(j.startsWith("-")&&(j=j.substring(1)),(j.match(/-/g)||[]).length>1){const I=j.split("-");j=I[0]+"-"+I.slice(1).join("")}return j.includes("-")?j.split("-").map((I,_)=>I.length===0?"":(_>0,I[0].toUpperCase()+I.slice(1).toLowerCase())).join("-"):j.length>0?j[0].toUpperCase()+j.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&h.target.value.length>0&&h.target.value[h.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),h.target.value=l,r(h);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),h.target.value=l,r(h);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),h.target.value=l,r(h);break}default:r(h);break}},y=(h,l)=>{let T=0;for(let j=0;j<Math.min(l,h.length);j++)/\d/.test(h[j])&&T++;return T},d=(h,l)=>{let T=0;for(let j=0;j<h.length;j++){if(T>=l)return j;/\d/.test(h[j])&&T++}return h.length};return t.jsxs(xn,{children:[t.jsx(fn,{...m,value:s,placeholder:v?"":e,onFocus:()=>b(!0),onBlur:h=>{b(!1),m.onBlur?.(h)},onChange:f,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),o&&t.jsx(gn,{isVisible:v,children:o}),c&&u&&t.jsx(bn,{children:u})]})},xn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,fn=n.input`
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
`,gn=n.label`
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
`,bn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,mn=({total:e,current:o=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[c,u]=w.useState(o),m=b=>{b<1||b>r||b===c||(u(b),s?.(b))},k=()=>{const b=[];let f=1,y=r;if(r>5){const d=Math.floor(2.5);f=Math.max(c-d,1),y=Math.min(c+d,r),c<=d+1?y=5:c>=r-d&&(f=r-5+1)}for(let d=f;d<=y;d++)b.push(t.jsx(Q,{active:d===c,onClick:()=>m(d),children:d},d));return f>1&&(f>2&&b.unshift(t.jsx(Q,{children:"..."},"start-ellipsis")),b.unshift(t.jsx(Q,{active:c===1,onClick:()=>m(1),children:"1"},1))),y<r&&(y<r-1&&b.push(t.jsx(Q,{children:"..."},"end-ellipsis")),b.push(t.jsx(Q,{active:r===c,onClick:()=>m(r),children:r},r))),b};return t.jsxs(wn,{children:[t.jsx(ke,{disabled:c===1,onClick:()=>m(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),k(),t.jsx(ke,{disabled:c===r,onClick:()=>m(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},wn=n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,Q=n.div`
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
`,ke=n.button`
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
`,vn=({placeholder:e="",customPlaceholder:o,value:s,onChange:i,hasError:r=!1,errorMessage:c,rows:u=3,...m})=>{const[k,b]=w.useState(!1),v=!!(o&&!s&&!k);return t.jsxs(yn,{children:[t.jsx(kn,{...m,value:s,placeholder:v?"":e,onFocus:()=>b(!0),onBlur:f=>{b(!1),m.onBlur?.(f)},onChange:i,hasError:r,rows:u}),o&&t.jsx(jn,{isVisible:v,children:o}),r&&c&&t.jsx(Cn,{children:c})]})},yn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,kn=n.textarea`
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
`,jn=n.label`
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
`,Cn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,De=({title:e,onClose:o,onCancel:s,onSave:i,children:r,isSaveDisabled:c=!1,isSubmitting:u=!1,mode:m="create",hideSaveButton:k=!1,hideCanselButton:b=!1,width:v="560px",saveButtonText:f="Сохранить",customLayout:y})=>{const d=m==="view",h=w.useRef(null);w.useEffect(()=>{const j=I=>{I.key==="Escape"&&o()};document.addEventListener("keydown",j);const R=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>h.current?.focus(),0),()=>{document.removeEventListener("keydown",j),document.body.style.overflow=R}},[o]);const l=j=>{j.target===j.currentTarget&&o()},T=j=>{j.preventDefault(),s()};return t.jsx($n,{onMouseDown:l,role:"presentation",children:t.jsxs(Sn,{ref:h,$width:v,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Te,{children:[t.jsx(Ee,{children:e}),t.jsx(Mn,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),y?t.jsx(Ln,{children:y}):null,t.jsxs(Dn,{onSubmit:i,children:[t.jsx(Tn,{children:r}),t.jsxs(En,{children:[t.jsx(In,{children:b?null:t.jsx(Rn,{isPrimary:!1,onClick:T,children:"Отменить"})}),t.jsx(Pn,{children:!d&&!k?t.jsx(Bn,{type:"submit",disabled:c||u,children:u?"Сохранение...":f}):null})]})]})]})})},$n=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Sn=n.div`
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
`,Te=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Ee=n.h2`
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
`,Mn=n.button`
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
`,Ln=n.div`
  padding: 12px 18px 0 18px;
`,Dn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,Tn=n.div`
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
`,En=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,In=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Pn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rn=n(te)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Bn=n(te)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,zn=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],An=({value:e="",placeholder:o="Выберите период",options:s=zn,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:c})=>{const[u,m]=w.useState(!1),[k,b]=w.useState(!1),[v,f]=w.useState(""),[y,d]=w.useState(""),[h,l]=w.useState(""),T=w.useRef(null),j=w.useRef(null);w.useEffect(()=>{if(e==="Custom"&&y&&h){const B=P(y),z=P(h);f(`С ${B} по ${z}`)}else{const B=s.find(z=>z.value===e);f(B?B.label:"")}},[e,s,y,h]),w.useEffect(()=>{const B=z=>{T.current&&!T.current.contains(z.target)&&m(!1),k&&j.current&&!j.current.contains(z.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(g=>g.contains(z.target))||b(!1))};return document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)}},[k]);const R=B=>{r?.(B.value),m(!1)},I=()=>{m(!1),c?c():b(!0)},_=()=>{r?.(""),f(""),d(""),l("")},A=()=>{if(y&&h){const B=P(y),z=P(h),N=`С ${B} по ${z}`;r?.("Custom",y,h),f(N),b(!1)}},P=B=>{const z=new Date(B),N=String(z.getDate()).padStart(2,"0"),F=String(z.getMonth()+1).padStart(2,"0"),g=z.getFullYear();return`${N}.${F}.${g}`},H=()=>t.jsxs(qn,{children:[t.jsx(Te,{style:{margin:0},children:t.jsx(Ee,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Gn,{onClick:_,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Fn,{ref:T,children:[t.jsxs(_n,{onClick:()=>m(!u),children:[t.jsx(On,{children:v||o}),t.jsx(Nn,{$isOpen:u,children:"▼"})]}),u&&t.jsxs(Yn,{children:[s.map(B=>t.jsxs(Wn,{onClick:()=>R(B),$isSelected:e===B.value,children:[t.jsx(Hn,{$isSelected:e===B.value,children:e===B.value&&t.jsx(Vn,{})}),t.jsx(Zn,{children:B.label})]},B.id)),i&&t.jsx(Un,{onClick:I,children:"Другой период"})]})]}),k&&t.jsx("div",{ref:j,children:t.jsx(De,{title:"",onClose:()=>b(!1),onCancel:()=>b(!1),onSave:B=>{B.preventDefault(),A()},saveButtonText:"Выбрать",customLayout:t.jsx(H,{}),children:t.jsxs(Xn,{children:[t.jsx(je,{children:t.jsx(re,{value:y,onChange:B=>d(B)})}),t.jsx(je,{children:t.jsx(re,{value:h,onChange:B=>l(B)})})]})})})]})},Fn=n.div`
  position: relative;
  width: 245px;
`,_n=n.div`
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
`,On=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Nn=n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Yn=n.div`
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
`,Wn=n.div`
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
`,Hn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Vn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Zn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Un=n.div`
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
`,Xn=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,je=n.div`
  flex: 1;
`,qn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Gn=n.button`
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
`,Jn=({name:e,value:o,onChange:s,onBlur:i,onKeyPress:r,placeholder:c="8 (999) 500-50-50",customPlaceholder:u,tabIndex:m,disabled:k=!1,hasError:b=!1,errorMessage:v})=>{const[f,y]=w.useState(!1),d=w.useRef(null),h=!!(u&&!o&&!f),l=I=>{const A=I.replace(/\D/g,"").slice(0,11);let P="";return A.length>0&&(P+="8"),A.length>1&&(P+=` (${A.slice(1,4)}`),A.length>4&&(P+=`) ${A.slice(4,7)}`),A.length>7&&(P+=`-${A.slice(7,9)}`),A.length>9&&(P+=`-${A.slice(9,11)}`),P},T=I=>{const _=l(I.target.value),A={...I,target:{...I.target,name:e,value:_}};s(A)},j=I=>{y(!1),i?.(I)},R=I=>{r?.(I)};return t.jsxs(Kn,{children:[t.jsx(Qn,{ref:d,name:e,type:"tel",value:o,onChange:T,onKeyPress:R,placeholder:h?"":c,maxLength:18,tabIndex:m,disabled:k,hasError:b,onFocus:()=>y(!0),onBlur:j,inputMode:"tel"}),u&&t.jsx(eo,{isVisible:h,children:u}),b&&v&&t.jsx(to,{children:v})]})},Kn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Qn=n.input`
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
`,eo=n.label`
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
`,to=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,no=({tabs:e,activeTab:o,onChange:s,addButton:i,fontSize:r=14})=>{const c=e.find(u=>u.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(oo,{children:t.jsxs(ro,{children:[e.map(u=>t.jsxs(io,{$isActive:o===u.id,onClick:()=>s(u.id),$fontSize:r,children:[u.label,o===u.id&&t.jsx(so,{})]},u.id)),i&&t.jsx(ao,{children:i})]})}),c&&t.jsx(lo,{children:c})]})},oo=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,ro=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,io=n.li`
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
`,so=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,ao=n.li`
  margin-left: auto;
  padding: 4px 0;
`,lo=n.div`
  margin-top: 20px;
`,co=({mode:e,primaryValue:o,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:c,disabled:u=!1,hasError:m=!1,errorMessage:k="",customIcon:b})=>{const f=b||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(xo,{children:[t.jsx(fo,{children:o||"Не указано"}),s&&t.jsx(go,{children:s})]}):t.jsxs(po,{children:[t.jsxs(uo,{children:[t.jsx(ho,{type:"text",value:o||"",placeholder:i,readOnly:!0,disabled:u}),o&&!u&&t.jsx(mo,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!u&&t.jsx(bo,{type:"button",onClick:r,"aria-label":"Выбрать",children:f}),m&&k&&t.jsx(wo,{children:k})]})},po=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,uo=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,ho=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,xo=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,fo=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,go=n.span`
  font-size: 13px;
  color: #666;
`,bo=n.button`
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
`,mo=n.button`
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
`,wo=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,ce=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,vo=({total:e})=>t.jsx("div",{children:t.jsxs(yo,{children:["Всего: ",e]})}),yo=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,ko=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,jo=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,Co=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,$o=n.span`
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
`,So=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Mo=({checked:e,onChange:o,disabled:s})=>{const i=()=>{s||o(!e)};return t.jsxs(Co,{children:[t.jsx(So,{checked:e,onChange:i,disabled:s}),t.jsx($o,{checked:e,disabled:s})]})},Lo=({id:e,name:o,checked:s,onChange:i,children:r})=>t.jsxs(Do,{htmlFor:e,children:[t.jsx(To,{type:"radio",id:e,name:o,checked:s,onChange:i}),r]}),Do=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,To=n.input`
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
`,Eo=({percentage:e,onChange:o,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=w.useRef(null),[c,u]=w.useState(!1),m=f=>{!s||!o||(f.preventDefault(),u(!0),v(f))},k=f=>{!c||!o||v(f)},b=()=>{u(!1)},v=f=>{if(!r.current||!o)return;const y=r.current.getBoundingClientRect();let h=(f.clientX-y.left)/y.width*100;h=Math.max(0,Math.min(100,h)),o(Math.round(h))};return w.useEffect(()=>{if(c)return document.addEventListener("mousemove",k),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",b)}},[c]),t.jsxs(Io,{ref:r,$draggable:s,onMouseDown:m,children:[t.jsx(Po,{$secondaryColor:i.secondary}),t.jsx(Ro,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(Bo,{$percentage:e,$primaryColor:i.primary})]})},Io=n.div`
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
`,Po=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Ro=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Bo=n.div`
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
`,zo=["zoomControl","fullscreenControl"];let oe=null;const Ao=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((o,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),Fo=({onLocationSelect:e,initialAddress:o="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:c=12,height:u=400,width:m="100%",inputPlaceholder:k="Введите адрес или название места",searchButtonLabel:b="Найти",draggablePlacemark:v=!0,controls:f=zo,showSearch:y=!0,className:d,style:h,onError:l})=>{const[T,j]=w.useState(null),[R,I]=w.useState(o),[_,A]=w.useState(o),[P,H]=w.useState(!1),B=w.useRef(null);w.useEffect(()=>{let F=!1,g;return(async()=>{try{const S=await Ao(r);if(F||!B.current)return;g=new S.Map(B.current,{center:[s,i],zoom:c,controls:f});const E=new S.Placemark([s,i],{},{draggable:v});g.geoObjects.add(E),g.events.add("click",O=>{const V=O.get("coords");z(V,E,g)}),E.events.add("dragend",()=>{const O=E.geometry.getCoordinates();z(O,E,g)}),j(g),H(!0)}catch(S){l&&S instanceof Error&&l(S)}})(),()=>{F=!0,g&&g.destroy()}},[r,s,i,c,f,v,l]);const z=async(F,g,p)=>{if(window.ymaps)try{const O=(await window.ymaps.geocode(F)).geoObjects.get(0).getAddressLine();g.geometry.setCoordinates(F),p.panTo(F,{flying:!0}),A(O),I(O),e(O,F[0],F[1])}catch(S){l&&S instanceof Error&&l(S)}},N=async()=>{if(!(!R.trim()||!window.ymaps||!T))try{const g=(await window.ymaps.geocode(R)).geoObjects.get(0);if(g){const p=g.geometry.getCoordinates(),S=g.properties.get("boundedBy");T.setBounds(S,{checkZoomRange:!0});const E=new window.ymaps.Placemark(p,{},{draggable:v});T.geoObjects.removeAll(),T.geoObjects.add(E);const O=g.getAddressLine();A(O),e(O,p[0],p[1]),E.events.add("dragend",()=>{const V=E.geometry.getCoordinates();z(V,E,T)})}}catch(F){l&&F instanceof Error&&l(F)}};return t.jsxs(_o,{className:d,style:h,children:[y&&t.jsxs(Oo,{children:[t.jsx(le,{type:"text",value:R,onChange:F=>I(F.target.value),placeholder:k,onKeyPress:F=>F.key==="Enter"&&N(),disabled:!P}),t.jsx(No,{onClick:N,disabled:!P,children:b})]}),t.jsxs(Wo,{children:["Выбранный адрес: ",t.jsx("strong",{children:_||"Не выбран"})]}),t.jsx(Yo,{ref:B,$height:u,$width:m}),t.jsx(Ho,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},_o=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Oo=n.div`
  display: flex;
  gap: 8px;
`,No=n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Yo=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Wo=n.div`
  font-size: 14px;
  color: #374151;
`,Ho=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,de=n.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;function ie(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${o}`;const i=parseInt(s,10);if(isNaN(i))return`0${o}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${o}`:r}function Vo(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Zo=({title:e,data:o,maxValue:s,step:i,height:r=300,titleFontSize:c})=>{const[u,m]=w.useState(null),k=[];for(let v=0;v<=s;v+=i)k.push(v);const b=o.length>0?o[0].bars.map(v=>({name:v.name,color:v.color})):[];return t.jsxs(Uo,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:c},children:e}),t.jsx(Xo,{children:b.map((v,f)=>t.jsxs(qo,{children:[t.jsx(Go,{color:v.color}),t.jsx(Jo,{children:v.name})]},f))})]}),t.jsxs(Ko,{height:r,children:[t.jsx(Qo,{children:k.map((v,f)=>t.jsx(er,{children:v.toLocaleString()},f))}),t.jsxs(tr,{children:[t.jsxs(nr,{children:[k.map((v,f)=>{const y=v/s*100;return t.jsx(or,{position:100-y},`line-${f}`)}),o.map((v,f)=>t.jsxs(rr,{onMouseEnter:()=>m(f),onMouseLeave:()=>m(null),children:[v.bars.map((y,d)=>{const h=v.bars.slice(d+1).reduce((l,T)=>l+T.value,0);return t.jsx(ir,{height:y.value/s*100,offset:h/s*100,color:y.color,isHovered:u!==null&&u!==f},d)}),u===f&&t.jsxs(lr,{children:[t.jsxs(cr,{children:[t.jsxs(dr,{children:["Всего: ",ie(v.total.toString())]}),v.bars.map((y,d)=>t.jsxs(pr,{children:[y.name,": ",ie(y.value.toString())]},d))]}),t.jsx(ur,{})]})]},f))]}),t.jsx(sr,{children:o.map((v,f)=>t.jsx(ar,{style:{flex:1,textAlign:"center"},children:v.label},f))})]})]})]})},Uo=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Xo=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,qo=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Go=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Jo=n.span`
  font-size: 14px;
  color: #4b5563;
`,Ko=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Qo=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,er=n.span`
  font-size: 12px;
  color: #6b7280;
`,tr=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,nr=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,or=n.div`
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
`,rr=n.div`
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
`,ir=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,sr=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,ar=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,lr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,cr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,dr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,pr=n.div`
  margin-bottom: 2px;
`,ur=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,hr=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,xr=({title:e,data:o,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:c,minY:u,xStep:m,yStep:k,height:b=300,showLegend:v=!0,xAxisCustomLabels:f,showTooltip:y=!0,titleFontSize:d="30px"})=>{const[h,l]=w.useState(null),[T,j]=w.useState({x:0,y:0}),R=w.useRef(null),I=w.useRef(null),_=Math.max(...o.map(g=>g.x),r),A=[];for(let g=0;g<=_;g+=m)A.push(g);const P=[];for(let g=u;g<=c;g+=k)P.push(g);const H=f||A.map(g=>g.toString()),B=v?Array.from(new Set(o.filter(g=>g.label).map(g=>g.label))).map(g=>{const p=o.find(S=>S.label===g);return{name:g,color:p.color}}):[],z={};o.forEach(g=>{const p=g.label||"default";z[p]||(z[p]=[]),z[p].push(g)});const N=g=>g/_*100,F=g=>{const p=c-u;return 100-(g-u)/p*100};return w.useEffect(()=>{if(h&&I.current){const g=I.current.getBoundingClientRect(),p=N(h.x)/100*g.width,S=F(h.y)/100*g.height;j({x:p+g.left,y:S+g.top})}},[h,r,c,u]),t.jsxs(fr,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:d},children:e}),v&&B.length>0&&t.jsx(gr,{children:B.map((g,p)=>t.jsxs(br,{children:[t.jsx(mr,{color:g.color}),t.jsx(wr,{children:g.name})]},p))})]}),t.jsxs(vr,{height:b,children:[t.jsxs(yr,{children:[P.map((g,p)=>t.jsx(kr,{children:g.toLocaleString()},p)),t.jsx(Ce,{children:i})]}),t.jsxs(jr,{ref:I,children:[P.map((g,p)=>t.jsx(Cr,{position:F(g)},`hline-${p}`)),Object.values(z).map((g,p)=>g.map((S,E)=>{if(E===0)return null;const O=g[E-1],V=N(O.x),Z=F(O.y),$=N(S.x),L=F(S.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${V}%`,y1:`${Z}%`,x2:`${$}%`,y2:`${L}%`,stroke:S.color,strokeWidth:"1"})},`line-${p}-${E}`)})),o.map((g,p)=>t.jsx($r,{x:N(g.x),y:F(g.y),color:g.color,onMouseEnter:()=>l(g),onMouseLeave:()=>l(null),isHovered:h?.label===g.label},p))]})]}),y&&h&&t.jsxs(Lr,{ref:R,style:{left:T.x,top:T.y},children:[t.jsxs(Dr,{children:[h.name&&t.jsx(Tr,{children:h.name}),t.jsx(Er,{children:h.y.toLocaleString()})]}),t.jsx(Ir,{})]}),t.jsxs(Sr,{children:[H.map((g,p)=>{const E=A[p]/_*100;return t.jsx(Mr,{style:{left:`${E}%`,transform:"translateX(-50%)"},children:g},p)}),s&&t.jsx(Ce,{children:s})]})]})},fr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,gr=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,br=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,mr=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,wr=n.span`
  font-size: 14px;
  color: #4b5563;
`,vr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,yr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,kr=n.span`
  font-size: 12px;
  color: #6b7280;
`,Ce=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,jr=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,Cr=n.div`
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
`,$r=n.div`
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
`,Sr=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Mr=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Lr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${hr} 0.15s ease-out forwards;
`,Dr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Tr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Er=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Ir=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Pr=({images:e,initialIndex:o,onClose:s})=>{const[i,r]=w.useState(o),[c,u]=w.useState(0),m=()=>{r(f=>f>0?f-1:e.length-1),u(0)},k=()=>{r(f=>f<e.length-1?f+1:0),u(0)},b=()=>{u(f=>(f+90)%360)},v=f=>{f.key==="Escape"?s():f.key==="ArrowLeft"?m():f.key==="ArrowRight"?k():(f.key==="r"||f.key==="к")&&b()};return t.jsx(Rr,{onClick:s,onKeyDown:v,tabIndex:0,children:t.jsxs(Br,{onClick:f=>f.stopPropagation(),children:[t.jsx(zr,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Ar,{children:t.jsx(Fr,{onClick:b,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(_r,{children:[t.jsx($e,{$position:"left",onClick:m,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Or,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx($e,{$position:"right",onClick:k,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Nr,{children:e.map((f,y)=>t.jsx(Yr,{$active:y===i,onClick:()=>{r(y),u(0)}},y))})]})})},Rr=n.div`
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
`,Br=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,zr=n.button`
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
`,Ar=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Fr=n.button`
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
`,_r=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Or=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,$e=n.button`
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
`,Nr=n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Yr=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ie=({isOpen:e,callPhone:o,error:s,onClose:i})=>{const[r,c]=w.useState(!1);if(!e)return null;const u=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),m=()=>{u?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Wr,{onClick:i,children:t.jsxs(Hr,{onClick:k=>k.stopPropagation(),children:[t.jsx(Vr,{children:"Подтверждение авторизации"}),t.jsx(Se,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Zr,{onClick:m,title:u?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!u&&r&&t.jsx(Ur,{children:"Скопировано!"})]}),t.jsx(Se,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),s&&t.jsx(Xr,{children:s})]})})},Wr=n.div`
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
`,Hr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Vr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Se=n.p`
  margin-bottom: 15px;
  color: #555;
`,Zr=n.div`
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
`,Ur=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Xr=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,Pe=w.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),qr=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),Gr=({items:e,bottomItems:o=[],logo:s,arrowIcon:i,collapsed:r,onToggle:c,selectedKey:u,onSelect:m,autoCollapseOnSelect:k=!1,width:b="315px",collapsedWidth:v="85px",className:f,style:y,mobileBreakpoint:d=768,showBottomLabels:h=!0,children:l})=>{const T=w.useContext(Pe),[j,R]=w.useState(window.innerWidth<=d);w.useEffect(()=>{const x=()=>{R(window.innerWidth<=d)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[d]);const[I,_]=w.useState(r??T.collapsed??!1),[A,P]=w.useState(null),[H,B]=w.useState(u??T.selectedSideMenuItem??null),[z,N]=w.useState({visible:!1,x:0,y:0,items:[]}),F=w.useRef(null),g=r??T.collapsed??I,p=x=>{_(x),T.toggleCollapsed(),c?.(x)},S=u??T.selectedSideMenuItem??H,E=x=>{B(x),T.setSelectedSideMenuItem(x)};w.useEffect(()=>{r!==void 0&&(_(r),r&&P(null))},[r]),w.useEffect(()=>{u!==void 0&&E(u)},[u]),w.useEffect(()=>{const x=()=>N(C=>({...C,visible:!1}));return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[]);const O=()=>{const x=!g;p(x),x&&P(null)},V=x=>{x.disabled||x.hidden||(E(x.key),m?.(x),x.onClick?.(x),k&&(p(!0),P(null)))},Z=x=>{P(C=>C===x?null:x)},$=(x,C)=>{const D=(x.children?.length||0)>0;if(g&&D){C.stopPropagation();const Y=C.currentTarget.getBoundingClientRect();N({visible:!0,x:Y.right+6,y:Y.top,items:x.children||[]});return}D?Z(x.key):V(x)},L=(x,C=!1)=>x.filter(D=>!D.hidden).map(D=>{const Y=(D.children?.length||0)>0,W=A===D.key,U=S===D.key||!!D.children&&D.children.some(q=>q.key===S);return t.jsxs(w.Fragment,{children:[t.jsxs(li,{$collapsed:g,$selected:U,onClick:q=>$(D,q),$disabled:D.disabled,title:D.label,children:[D.icon&&t.jsx(di,{$collapsed:g,children:D.icon}),!g&&t.jsx(ci,{children:D.label}),!g&&Y&&t.jsx(ui,{$expanded:W,children:"▾"})]}),!g&&Y&&W&&t.jsx(pi,{children:L(D.children||[],!0)})]},D.key)}),a=w.useMemo(()=>z.visible?t.jsx(xi,{style:{left:z.x,top:z.y},children:z.items.map(x=>t.jsx(fi,{onClick:()=>{V(x),N({visible:!1,x:0,y:0,items:[]})},$selected:S===x.key,children:x.label},x.key))}):null,[z,S]),M=()=>{const x=[...e,...o].filter(C=>!C.hidden);return t.jsx(Qr,{children:x.map(C=>{const D=S===C.key;return t.jsxs(ei,{$selected:D,onClick:()=>V(C),$disabled:C.disabled,children:[C.icon&&t.jsx(ti,{$selected:D,children:C.icon}),h&&t.jsx(ni,{$selected:D,children:C.label})]},C.key)})})};return j?t.jsxs(Jr,{className:f,style:y,children:[t.jsx(Kr,{children:l}),M()]}):t.jsxs(oi,{ref:F,$collapsed:g,$width:b,$collapsedWidth:v,className:f,style:y,children:[t.jsxs(ri,{children:[t.jsx(ii,{onClick:O,"aria-label":"Переключить меню",children:i??t.jsx(qr,{collapsed:g})}),!g&&s&&t.jsx(si,{children:s})]}),t.jsxs(ai,{children:[t.jsx(Me,{children:L(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(hi,{}),t.jsx(Me,{children:L(o)})]})]}),a,t.jsx(gi,{$collapsed:g}),l]})},Jr=n.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
`,Kr=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,Qr=n.nav`
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
`,ei=n.div`
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
`,ti=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,ni=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,oi=n.div`
  width: ${({$collapsed:e,$width:o,$collapsedWidth:s})=>e?s:o};
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
`,ri=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,ii=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`,si=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,ai=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Me=n.div`
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
`,li=n.div`
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
`,ci=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,di=n.div`
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
`,pi=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ui=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,hi=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,xi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,fi=n.div`
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
`,gi=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,bi=e=>{const o=e.replace(/\D/g,""),i=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},Re=({value:e,onChange:o,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=c=>{const u=bi(c.target.value);o(u)};return t.jsx(mi,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},mi=n.input`
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
`,Be=(e,o)=>G("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}}),ze=(e,o,s,i)=>G("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,user_type:s,name:i}}),wi=()=>G("/auth/session/info",{method:"GET"}),vi=({isOpen:e,onClose:o,onSubmit:s,error:i,isLoading:r=!1})=>{const[c,u]=w.useState("");if(!e)return null;const m=k=>{k.preventDefault(),s(c)};return t.jsx(yi,{onClick:o,children:t.jsx(ki,{onClick:k=>k.stopPropagation(),children:t.jsxs(ji,{onSubmit:m,children:[t.jsx(Ci,{children:"Как вас зовут?"}),t.jsxs($i,{children:[t.jsx(le,{type:"text",value:c,onChange:k=>u(k.target.value),placeholder:"Иванов Иван Иванович",disabled:r,autoFocus:!0,style:{flex:1}}),t.jsx(Si,{type:"submit",disabled:r||!c.trim(),children:r?"...":"→"})]}),i&&t.jsx(Mi,{children:i})]})})})},yi=n.div`
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
`,ki=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,ji=n.form`
  display: flex;
  flex-direction: column;
`,Ci=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,$i=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Si=n(te)`
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
`,Mi=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,Li=({onLoginSuccess:e,userType:o="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:u="https://waypay.one",supportLinkText:m="waypay.one",className:k,style:b,pollingIntervalMs:v=3e3,enableRegistration:f=!1})=>{const[y,d]=w.useState(!1),[h,l]=w.useState(""),[T,j]=w.useState(!1),[R,I]=w.useState(""),[_,A]=w.useState(""),[P,H]=w.useState(!1),[B,z]=w.useState(!1),[N,F]=w.useState(""),[g,p]=w.useState(""),[S,E]=w.useState(null),O=w.useRef(void 0);w.useEffect(()=>()=>{O.current&&clearInterval(O.current)},[]);const V=x=>{const C=x.replace(/\D/g,"");return C?C.startsWith("8")?`+7${C.slice(1)}`:C.startsWith("7")?`+${C}`:`+${C}`:""},Z=()=>{j(!1),z(!1),F(""),p(""),E(null),O.current&&window.clearInterval(O.current)},$=async x=>{if(x.preventDefault(),!h){A("Введите номер телефона");return}d(!0),A("");const C=V(h);try{const D=await Be(C,o);E({phone:C,checkId:D.check_id,callPhone:D.call_phone}),f&&"name_required"in D&&D.name_required?(z(!0),I(D.call_phone)):!f&&"name_required"in D&&D.name_required?(A("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),E(null)):(I(D.call_phone),j(!0),a(C,D.check_id))}catch(D){console.error("Auth error:",D),A("Не удалось инициировать авторизацию. Проверьте номер.")}finally{d(!1)}},L=async x=>{if(!x.trim()){p("Введите ФИО");return}if(S){d(!0),p("");try{F(x),z(!1),j(!0),a(S.phone,S.checkId,x)}catch(C){console.error("Registration error:",C),p("Не удалось завершить регистрацию")}finally{d(!1)}}},a=(x,C,D)=>{O.current&&window.clearInterval(O.current),O.current=window.setInterval(()=>{M(x,C,D)},v)},M=async(x,C,D)=>{if(!P){H(!0);try{const Y=await ze(x,C,o,D||N);Y.access_token&&Y.refresh_token&&(O.current&&window.clearInterval(O.current),j(!1),z(!1),F(""),E(null),e(Y.access_token))}catch(Y){console.error("Verification error:",Y)}finally{H(!1)}}};return t.jsxs(Di,{className:k,style:b,children:[t.jsxs(Ti,{children:[t.jsxs(Ei,{onSubmit:$,children:[t.jsx(Ii,{children:s}),t.jsx(Pi,{children:t.jsx(Ri,{children:t.jsx(Re,{value:h,onChange:x=>l(x),placeholder:r})})}),_&&t.jsx(_i,{children:t.jsx("span",{children:_})}),t.jsx(Bi,{type:"submit",disabled:y,children:y?"Загрузка...":i})]}),t.jsxs(zi,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(Ai,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(Fi,{href:u,target:"_blank",rel:"noreferrer",children:m})]})]}),t.jsx(vi,{isOpen:B,onClose:Z,onSubmit:L,error:g,isLoading:y}),t.jsx(Ie,{isOpen:T,onClose:Z,callPhone:R,error:_})]})},Di=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,Ti=n.div`
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
`,Ei=n.form`
  display: flex;
  flex-direction: column;
`,Ii=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,Pi=n.div`
  margin-bottom: 25px;
`,Ri=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,Bi=n.button`
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
`,zi=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,Ai=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Fi=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,_i=n.div`
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
`,Ae=e=>{let o=0;for(let i=0;i<e.length;i++)o=e.charCodeAt(i)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},Oi=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Ni=(e,o=100)=>{const s=document.createElement("canvas");s.width=o,s.height=o;const i=s.getContext("2d");if(!i)return"";const r=Ae(e);i.fillStyle=r,i.beginPath(),i.arc(o/2,o/2,o/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=o/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const u=c*.1;return i.fillText(e,o/2,o/2+u),s.toDataURL("image/png")},Yi=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const s=o.getDate().toString().padStart(2,"0"),i=(o.getMonth()+1).toString().padStart(2,"0"),r=o.getFullYear();return`${s}-${i}-${r}`};function Wi(e){return new Date(e)}const Fe=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const s=new Date;if(o>s){const v=Math.floor((o.getTime()-s.getTime())/1e3),f=Math.floor(v/60),y=Math.floor(f/60),d=Math.floor(y/24);return v<10?"скоро":v<60?`через ${v} секунд`:f===1?"через минуту":f<60?`через ${f} минут`:y===1?"через час":y<24?`через ${y} часов`:d===1?"завтра":d<7?`через ${d} дней`:"в будущем"}const i=Math.floor((s.getTime()-o.getTime())/1e3),r=Math.floor(i/60),c=Math.floor(r/60),u=Math.floor(c/24),m=Math.floor(u/7),k=Math.floor(u/30),b=Math.floor(u/365);if(i<10)return"только что";if(i<60){const v=Math.max(1,i);return v===1?"секунду назад":v<5?`${v} секунды назад`:`${v} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:u<7?u===1?"вчера":u===2?"позавчера":`${u} дня назад`:m<4?m===1?"неделю назад":m<5?`${m} недели назад`:`${m} недель назад`:k<12?k===1?"месяц назад":k<5?`${k} месяца назад`:`${k} месяцев назад`:b===1?"год назад":b<5?`${b} года назад`:`${b} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},_e=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Hi=(e,o={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=o,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?_e(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Fe(r)};exports.API_BASE_URL=ae;exports.AddButton=lt;exports.AuthCallModal=Ie;exports.AuthPage=Li;exports.BackButton=xt;exports.BaseModal=De;exports.Checkbox=Nt;exports.ColumnChart=Zo;exports.ContextMenu=se;exports.CountInfoTitle=vo;exports.CustomCalendar=re;exports.CustomInput=le;exports.CustomPhoneInput=Re;exports.CustomSelect=St;exports.CustomTable=Ge;exports.CustomTextArea=vn;exports.CustomTitle=de;exports.DefaultButton=te;exports.DeleteButton=bt;exports.EditButton=wt;exports.EntitySelectContainer=co;exports.ExportButton=kt;exports.InputContainer=hn;exports.InputLabel=un;exports.InputRow=pn;exports.InputTitle=ko;exports.ModalInfoTitle=jo;exports.Pagination=mn;exports.PeriodField=An;exports.PhoneModalInput=Jn;exports.PhotoViewerModal=Pr;exports.ProgressBar=Eo;exports.RadioButton=Lo;exports.ScatterPlot=xr;exports.SideMenu=Gr;exports.SideMenuContext=Pe;exports.Tabs=no;exports.TitleField=ce;exports.ToggleSwitch=Mo;exports.YandexMapSelector=Fo;exports.apiRequest=G;exports.authStorage=ut;exports.confirmCallAuth=ze;exports.formatDate=Yi;exports.formatExactDate=_e;exports.formatMoney=ie;exports.formatRelativeTime=Fe;exports.formatRelativeTimeExtended=Hi;exports.generateAvatar=Ni;exports.getInitials=Oi;exports.getSessionInfo=wi;exports.initiateCallAuth=Be;exports.parseDateInput=Wi;exports.parseMoney=Vo;exports.stringToColor=Ae;
