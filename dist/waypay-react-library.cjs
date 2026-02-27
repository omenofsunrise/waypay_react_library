"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const w=require("react"),n=require("styled-components"),q=require("framer-motion");var ee={exports:{}},J={};var de;function Ye(){if(de)return J;de=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(i,r,c){var p=null;if(c!==void 0&&(p=""+c),r.key!==void 0&&(p=""+r.key),"key"in r){c={};for(var v in r)v!=="key"&&(c[v]=r[v])}else c=r;return r=c.ref,{$$typeof:e,type:i,key:p,ref:r!==void 0?r:null,props:c}}return J.Fragment=o,J.jsx=s,J.jsxs=s,J}var K={};var pe;function We(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===F?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case T:return"Fragment";case R:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case _:return a.displayName||"Context";case I:return(a._context.displayName||"Context")+".Consumer";case A:var M=a.render;return a=a.displayName,a||(a=M.displayName||M.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case B:return M=a.displayName||null,M!==null?M:e(a.type)||"Memo";case z:M=a._payload,a=a._init;try{return e(a(M))}catch{}}return null}function o(a){return""+a}function s(a){try{o(a);var M=!1}catch{M=!0}if(M){M=console;var h=M.error,C=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return h.call(M,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",C),o(a)}}function i(a){if(a===T)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===z)return"<...>";try{var M=e(a);return M?"<"+M+">":"<...>"}catch{return"<...>"}}function r(){var a=g.A;return a===null?null:a.getOwner()}function c(){return Error("react-stack-top-frame")}function p(a){if(d.call(a,"key")){var M=Object.getOwnPropertyDescriptor(a,"key").get;if(M&&M.isReactWarning)return!1}return a.key!==void 0}function v(a,M){function h(){O||(O=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",M))}h.isReactWarning=!0,Object.defineProperty(a,"key",{get:h,configurable:!0})}function y(){var a=e(this.type);return V[a]||(V[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function b(a,M,h,C,D,W){var Y=h.ref;return a={$$typeof:u,type:a,key:M,props:h,_owner:C},(Y!==void 0?Y:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:y}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:D}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:W}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function f(a,M,h,C,D,W){var Y=M.children;if(Y!==void 0)if(C)if(S(Y)){for(C=0;C<Y.length;C++)m(Y[C]);Object.freeze&&Object.freeze(Y)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else m(Y);if(d.call(M,"key")){Y=e(a);var U=Object.keys(M).filter(function(Ne){return Ne!=="key"});C=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",L[Y+C]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,C,Y,U,Y),L[Y+C]=!0)}if(Y=null,h!==void 0&&(s(h),Y=""+h),p(M)&&(s(M.key),Y=""+M.key),"key"in M){h={};for(var X in M)X!=="key"&&(h[X]=M[X])}else h=M;return Y&&v(h,typeof a=="function"?a.displayName||a.name||"Unknown":a),b(a,Y,h,r(),D,W)}function m(a){k(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===z&&(a._payload.status==="fulfilled"?k(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function k(a){return typeof a=="object"&&a!==null&&a.$$typeof===u}var x=w,u=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),_=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),g=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,d=Object.prototype.hasOwnProperty,S=Array.isArray,E=console.createTask?console.createTask:function(){return null};x={react_stack_bottom_frame:function(a){return a()}};var O,V={},Z=x.react_stack_bottom_frame.bind(x,c)(),$=E(i(c)),L={};K.Fragment=T,K.jsx=function(a,M,h){var C=1e4>g.recentlyCreatedOwnerStacks++;return f(a,M,h,!1,C?Error("react-stack-top-frame"):Z,C?E(i(a)):$)},K.jsxs=function(a,M,h){var C=1e4>g.recentlyCreatedOwnerStacks++;return f(a,M,h,!0,C?Error("react-stack-top-frame"):Z,C?E(i(a)):$)}})()),K}var ue;function He(){return ue||(ue=1,process.env.NODE_ENV==="production"?ee.exports=Ye():ee.exports=We()),ee.exports}var t=He();const se=({x:e,y:o,items:s,onClose:i,...r})=>{const c=w.useRef(null),[p,v]=w.useState(null);w.useEffect(()=>{const x=u=>{c.current&&!c.current.contains(u.target)&&i()};return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[i]);const b=(()=>{if(!c.current)return{x:e,y:o};const x=c.current.offsetWidth,u=c.current.offsetHeight,l=window.innerWidth,T=window.innerHeight;let j=e,R=o;return j+x>l&&(j=e-x),R+u>T&&(R=o-u),{x:j,y:R}})(),f=(x,u)=>{x.submenu?v(p===u?null:u):x.action&&(x.action(),i())},m=x=>{s[x].submenu&&v(x)},k=x=>{const u=x.relatedTarget;c.current?.contains(u)||v(null)};return t.jsx(Ve,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:b.y,left:b.x},onClick:x=>x.stopPropagation(),onMouseLeave:k,...r,children:s.map((x,u)=>t.jsxs(Ze,{$hasSubmenu:!!x.submenu,$disabled:x.disabled,children:[t.jsx(Ue,{onClick:l=>{l.stopPropagation(),x.disabled||f(x,u)},onMouseEnter:()=>!x.disabled&&m(u),whileHover:x.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:x.color,$disabled:x.disabled,children:t.jsxs(qe,{children:[x.label,x.submenu&&t.jsx(Xe,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),x.submenu&&p===u&&t.jsx(Ge,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(se,{x:0,y:-u*40,items:x.submenu,onClose:()=>v(null)})})]},u))})},Ve=n(q.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Ze=n.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,Ue=n(q.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,qe=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Xe=n.span`
  color: #666;
  margin-left: 8px;
`,Ge=n(q.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Je=({columns:e,data:o,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:c,onRowClick:p,selectedRow:v,fixedHeight:y,hasTotalsRow:b,debtChecker:f,rowStyles:m={},isLoading:k})=>{const[x,u]=w.useState(null),[l,T]=w.useState(null),j=w.useRef(null),R=w.useRef(null),I=500,_=v!==void 0?v:x,A=$=>{!e[$].isSortable||!r||r($)},H=f||($=>{const L=$[8];return typeof L=="string"?parseFloat(L.replace(/[^\d.]/g,""))>0:!1}),B=$=>{v===void 0&&u($===_?null:$),p&&p(o[$],$)},z=($,L)=>{s&&s($,L)},N=($,L)=>{if(i.length===0)return;$.preventDefault();const a="touches"in $?$.touches[0].clientX:$.clientX,M="touches"in $?$.touches[0].clientY:$.clientY;T({x:a,y:M,rowIndex:L})},F=($,L)=>{$.preventDefault(),N($,L)},g=($,L)=>{i.length!==0&&(R.current&&clearTimeout(R.current),R.current=window.setTimeout(()=>{N($,L)},I))},d=()=>{R.current&&(clearTimeout(R.current),R.current=null)},S=()=>{R.current&&window.clearTimeout(R.current)},E=()=>{T(null)};w.useEffect(()=>{const $=()=>{l&&E()};return document.addEventListener("click",$),()=>{document.removeEventListener("click",$),R.current&&clearTimeout(R.current)}},[l]);const O=($,L,a)=>{if(L)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const M=m[$]||{};return $===_?{backgroundColor:M.backgroundColor||"#007D88",color:M.color||"#FFFFFF",fontWeight:M.fontWeight||"normal"}:a?{backgroundColor:M.backgroundColor||"#E8D8D8",color:M.color||"inherit",fontWeight:M.fontWeight||"normal"}:o[$][o[$].length-1]===!1?{backgroundColor:M.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:M.fontWeight||"normal"}:{backgroundColor:M.backgroundColor||"#FFFFFF",color:M.color||"inherit",fontWeight:M.fontWeight||"normal"}},V=($,L,a)=>{if(L)return"#FFFFFF";const M=O($,L,a);return M.hoverBackgroundColor?M.hoverBackgroundColor:$===_?"#007D88":a?"#E8D8D8CC":o[$][o[$].length-1]===!1?"#51D5B4CC":"#F3F4F6"},Z=()=>{if(!l||i.length===0)return null;const $=(typeof i=="function"?i(o[l.rowIndex]):i).filter(L=>typeof L=="object"&&(typeof L.shouldShow!="function"||L.shouldShow(o[l.rowIndex])));return $.length===0?null:t.jsx(nt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:L=>L.stopPropagation(),children:t.jsx(se,{items:$.map(L=>{const a={label:L.label,color:L.color,disabled:L.disabled};return L.getSubmenu?a.submenu=L.getSubmenu(o[l.rowIndex]):L.action&&(a.action=()=>{L.action(o[l.rowIndex],l.rowIndex),E()}),a}),onClose:E,x:0,y:0})})};return t.jsx(et,{ref:j,children:k?t.jsx(Ke,{children:t.jsx(Qe,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(tt,{children:[t.jsx(ot,{children:t.jsx(he,{children:e.map(($,L)=>!$.isHidden&&t.jsx(it,{$isSortable:$.isSortable,$isActive:c?.key===L,onClick:()=>A(L),$align:$.align||"center",$isFirst:L===0,$isLast:L===e.length-1,children:t.jsxs(st,{$align:$.align||"center",children:[$.name,$.isSortable&&t.jsx(at,{$direction:c?.key===L?c.direction:"asc",animate:{rotate:c?.key===L&&c.direction==="desc"?180:0,color:c?.key===L?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},L))})}),t.jsx(rt,{$fixedHeight:y,children:t.jsx(q.AnimatePresence,{children:o.map(($,L)=>{const a=!!(b&&L===o.length-1),M=!!(!a&&H($)),h=O(L,a,M),C=V(L,a,M);return t.jsx(he,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:h.backgroundColor||"#FFFFFF",color:h.color||"inherit",fontWeight:h.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:L===o.length-1,$isSelected:L===_,$isTotalsRow:a,onClick:()=>!a&&B(L),onDoubleClick:()=>!a&&z($,L),onContextMenu:D=>!a&&F(D,L),onTouchStart:D=>!a&&g(D,L),onTouchEnd:d,onTouchMove:S,whileHover:a?{}:{backgroundColor:C,transition:{duration:.15}},style:{backgroundColor:h.backgroundColor||"#FFFFFF",color:h.color||"inherit",fontWeight:h.fontWeight||"normal"},children:$.map((D,W)=>!e[W]?.isHidden&&t.jsx(lt,{$align:e[W]?.align||"center",$isFirst:W===0,$isLast:W===$.length-1,$isTotalsCell:a,$isBeforeTotals:a&&W<$.findIndex(Y=>Y==="Итого:"),children:D},W))},`row-${L}`)})})})]}),t.jsx(q.AnimatePresence,{children:Z()})]})})},Ke=n.div`
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
`,Qe=n.div`
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
`,et=n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,tt=n.table`
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
`,nt=n(q.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,ot=n.thead`
  text-align: center;
  position: relative;
`,rt=n.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,he=n(q.motion.tr)`
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
`,it=n.th`
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
`,st=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,at=n(q.motion.span)`
  display: inline-flex;
  align-items: center;
`,lt=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,ct=({onClick:e,tooltip:o,size:s=32,margin:i})=>t.jsx(dt,{onClick:e,size:s,margin:i,title:o,children:t.jsx(pt,{size:s})}),dt=n.button`
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
`,pt=n.div`
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
`,Me="/api";async function G(e,o={}){const{method:s="GET",body:i,headers:r={},withCredentials:c=!0}=o,p=async()=>{const y={"Content-Type":"application/json",...r},b=e.startsWith("http")?e:`${Me}${e}`;return await fetch(b,{method:s,headers:y,body:i?JSON.stringify(i):void 0,credentials:c?"include":"same-origin"})};return(async()=>{const y=await p();if(y.ok){if(y.status===204)return null;const f=await y.text();if(!f)return null;try{return JSON.parse(f)}catch{return f}}let b=`Request failed with status ${y.status}`;try{const f=await y.json();f&&typeof f.error=="string"?b=f.error:typeof f=="string"&&(b=f)}catch{const f=await y.text();f&&(b=f)}throw new Error(b)})()}const Le={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await G("/auth/session/info",{method:"GET"})}catch{return null}},async logout(){try{await G("/auth/session/revoke",{method:"POST"})}catch(e){throw console.error("Logout error:",e),e}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},ut=n.button`
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
`,ht=({children:e,onClick:o})=>t.jsxs(ut,{onClick:o,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),te=({children:e="Подтвердить",icon:o,disabled:s=!1,bg:i,hoverBg:r,disabledBg:c,textColor:p,fullWidth:v=!1,minWidth:y,width:b,isPrimary:f=!0,...m})=>{const x=i?{bg:i,hoverBg:r||i,disabledBg:c||i,textColor:p||(f?"white":"black")}:f?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(xt,{disabled:s,$bg:x.bg,$hoverBg:x.hoverBg,$disabledBg:x.disabledBg,$textColor:x.textColor,$fullWidth:v,$minWidth:y,$width:b,...m,children:[o&&t.jsx(ft,{children:o}),t.jsx("span",{children:e})]})},xt=n.button`
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
`,ft=n.span`
  display: inline-flex;
  align-items: center;
`,gt=({onClick:e,tooltip:o,size:s=32})=>t.jsx(bt,{onClick:e,size:s,title:o,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),bt=n.button`
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
`,mt=({onClick:e,tooltip:o,size:s=32})=>t.jsx(wt,{onClick:e,size:s,title:o,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),wt=n.button`
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
`,vt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),yt=({children:e="Экспорт",icon:o=t.jsx(vt,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...c})=>{const p=async v=>{if(s)try{await s()}catch(y){console.error("Export error:",y)}c.onClick&&c.onClick(v)};return t.jsx(jt,{...c,onClick:p,disabled:i||c.disabled,children:i?t.jsxs(kt,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx(Ct,{progress:r})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},jt=n.button`
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
`,kt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,Ct=n.div`
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
`,$t=({placeholder:e="",customPlaceholder:o,value:s,onChange:i,hasError:r=!1,errorMessage:c,options:p,name:v,disabled:y=!1,required:b=!1,...f})=>{const[m,k]=w.useState(!1),[x,u]=w.useState(!1),l=w.useRef(null),T=!!(o&&!s&&!m),j=P=>{i&&!y&&i({target:{value:P,name:v}}),u(!1),k(!1)},R=P=>{l.current&&!l.current.contains(P.target)&&(u(!1),k(!1))},I=()=>{y||(u(!x),k(!x))};w.useEffect(()=>(document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}),[]);const _=p.find(P=>P.value===s),A=_?_.label:"";return t.jsxs(St,{ref:l,...f,children:[t.jsxs(Mt,{children:[t.jsxs(Lt,{hasError:r,isOpen:x,disabled:y,onClick:I,onFocus:()=>!y&&k(!0),onBlur:()=>k(!1),tabIndex:y?-1:0,children:[t.jsx(Dt,{children:A||e&&t.jsx(Tt,{children:e})}),t.jsx(Et,{isOpen:x,disabled:y,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:y?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),x&&t.jsx(It,{children:p.map(P=>t.jsxs(Pt,{$isSelected:P.value===s,onClick:()=>j(P.value),children:[t.jsx(Rt,{$isSelected:P.value===s,children:P.value===s&&t.jsx(Bt,{})}),t.jsx(zt,{children:P.label})]},P.value))})]}),o&&t.jsx(At,{isVisible:T,children:o}),r&&c&&t.jsx(Ft,{children:c}),t.jsx(_t,{name:v,value:s||"",onChange:()=>{},tabIndex:-1,required:b,children:p.map(P=>t.jsx("option",{value:P.value,children:P.label},P.value))})]})},St=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Mt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Lt=n.div`
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
`,Dt=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tt=n.span`
  color: rgba(80, 85, 92, 1);
`,Et=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,It=n.div`
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
`,Pt=n.div`
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
`,Rt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Bt=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,zt=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,At=n.label`
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
`,Ft=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,_t=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Ot=({checked:e=!1,onChange:o,className:s,label:i,disabled:r=!1})=>{const[c,p]=w.useState(!1),v=()=>{r||!o||o(!e)},y=b=>{r||(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),v())};return t.jsxs(Nt,{className:s,onClick:v,onKeyPress:y,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Yt,{checked:e,isFocused:c,disabled:r,onMouseEnter:()=>!r&&p(!0),onMouseLeave:()=>!r&&p(!1),onFocus:()=>!r&&p(!0),onBlur:()=>!r&&p(!1),children:e&&t.jsx(Ht,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Wt,{disabled:r,children:i})]})},Nt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Yt=n.div`
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
`,Wt=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Ht=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Vt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",xe=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Zt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],re=({prefix:e="Дата:",value:o="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[c,p]=w.useState(!1),[v,y]=w.useState(new Date),[b,f]=w.useState(o?new Date(o):null),[m,k]=w.useState(!1),[x,u]=w.useState(!1),l=w.useRef(null),T=w.useRef(null),j=w.useRef(null);w.useEffect(()=>{const d=S=>{l.current&&!l.current.contains(S.target)&&p(!1),T.current&&!T.current.contains(S.target)&&k(!1),j.current&&!j.current.contains(S.target)&&u(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),w.useEffect(()=>{f(o?new Date(o):null)},[o]);const R=d=>{const S=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));f(d);const E=S.toISOString().split("T")[0];i?.(E),p(!1)},I=()=>{const d=new Date;y(d);const E=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())).toISOString().split("T")[0];i?.(E),p(!1)},_=()=>{f(null),i?.(""),r?.(),p(!1)},A=d=>{const S=new Date(v);S.setMonth(d),y(S),k(!1)},P=d=>{const S=new Date(v);S.setFullYear(d),y(S),u(!1)},H=()=>{const d=v.getFullYear(),S=v.getMonth(),E=new Date(d,S,1),V=new Date(d,S+1,0).getDate(),Z=E.getDay()===0?6:E.getDay()-1,$=[],L=35,a=new Date(d,S,0).getDate();for(let h=0;h<Z;h++){const C=a-Z+h+1,D=new Date(d,S-1,C),W=!!(b&&D.getDate()===b.getDate()&&D.getMonth()===b.getMonth()&&D.getFullYear()===b.getFullYear());$.push(t.jsx(ne,{selected:W,onClick:()=>R(D),otherMonth:!0,children:C},`prev-${C}`))}for(let h=1;h<=V;h++){const C=new Date(d,S,h),D=!!(b&&C.getDate()===b.getDate()&&C.getMonth()===b.getMonth()&&C.getFullYear()===b.getFullYear());$.push(t.jsx(ne,{selected:D,onClick:()=>R(C),children:h},`current-${h}`))}const M=L-$.length;for(let h=1;h<=M;h++){const C=new Date(d,S+1,h),D=!!(b&&C.getDate()===b.getDate()&&C.getMonth()===b.getMonth()&&C.getFullYear()===b.getFullYear());$.push(t.jsx(ne,{selected:D,onClick:()=>R(C),otherMonth:!0,children:h},`next-${h}`))}return $},B=()=>b?b.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,z=()=>{const d=new Date().getFullYear(),S=[];for(let E=d-10;E<=d+10;E++)S.push(E);return S},N=d=>{d.preventDefault(),d.stopPropagation(),k(!m),u(!1)},F=d=>{d.preventDefault(),d.stopPropagation(),u(!x),k(!1)},g=d=>{const S=d==="next"?1:-1,E=new Date(v);E.setMonth(E.getMonth()+S),y(E)};return t.jsxs(Ut,{ref:l,children:[t.jsxs(qt,{onClick:()=>p(!c),children:[e&&t.jsx(Xt,{children:e}),t.jsx(Gt,{isEmpty:!b,children:B()}),t.jsx(Jt,{src:Vt,alt:"Календарь"})]}),c&&t.jsxs(Kt,{className:"calendar-container",children:[t.jsxs(Qt,{children:[t.jsx(me,{onClick:d=>{d.preventDefault(),d.stopPropagation(),g("prev")},onMouseDown:d=>d.preventDefault(),children:t.jsx(we,{direction:"right"})}),t.jsxs(en,{children:[t.jsxs(on,{ref:T,children:[t.jsxs(tn,{onClick:d=>N(d),onMouseDown:d=>d.preventDefault(),children:[xe[v.getMonth()],t.jsx(fe,{$open:m})]}),m&&t.jsx(ge,{$width:120,onClick:d=>d.stopPropagation(),children:xe.map((d,S)=>t.jsx(be,{$selected:S===v.getMonth(),onClick:E=>{E.stopPropagation(),A(S)},children:d},d))})]}),t.jsxs(rn,{ref:j,children:[t.jsxs(nn,{onClick:d=>F(d),onMouseDown:d=>d.preventDefault(),children:[v.getFullYear(),t.jsx(fe,{$open:x})]}),x&&t.jsx(ge,{$width:80,onClick:d=>d.stopPropagation(),children:z().map(d=>t.jsx(be,{$selected:d===v.getFullYear(),onClick:S=>{S.stopPropagation(),P(d)},children:d},d))})]})]}),t.jsx(me,{onClick:d=>{d.preventDefault(),d.stopPropagation(),g("next")},onMouseDown:d=>d.preventDefault(),children:t.jsx(we,{direction:"left"})})]}),t.jsx(sn,{children:Zt.map(d=>t.jsx(an,{children:d},d))}),t.jsx(ln,{children:H()}),t.jsxs(cn,{children:[t.jsx(ve,{onClick:_,children:"Удалить"}),t.jsx(ve,{onClick:I,children:"Сегодня"})]})]})]})},Ut=n.div`
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
`,Xt=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,Gt=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,Jt=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,Kt=n.div`
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
`,Qt=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,en=n.div`
  display: flex;
  gap: 8px;
  color: black;
`,De=n.button`
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
`,tn=n(De)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,nn=n(De)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,on=n.div`
  position: relative;
`,rn=n.div`
  position: relative;
`,fe=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,ge=n.div`
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
`,be=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,me=n.button`
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
`,we=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,sn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,an=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,ln=n.div`
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
`,cn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ve=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,dn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,pn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,un=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,ae=({placeholder:e="",customPlaceholder:o,value:s,inputType:i="text",onChange:r,hasError:c=!1,errorMessage:p,...v})=>{const[y,b]=w.useState(!1),f=!!(o&&!s&&!y),m=u=>{if(!r)return;let l=u.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(u);break;case"rubles":{const j=u.target.selectionStart,R=u.target.value;let I=R.replace(/[^\d]/g,"");if(I===""){u.target.value="",r(u);break}const _=parseInt(I,10);if(!isNaN(_)){let A=_.toLocaleString("ru-RU");A+=" ₽";const P=k(R,j||0),H=x(A,P);u.target.value=A,r(u),setTimeout(()=>{u.target.setSelectionRange(H,H)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const j=l.split(".");j.length>2&&(l=j[0]+"."+j.slice(1).join("")),j.length===2&&j[1].length>2&&(l=j[0]+"."+j[1].slice(0,2));const R=parseFloat(l);if(isNaN(R)||(R>100?l="100":R<0&&(l="0")),l&&l!==""){l+=" %";const I=u.target.selectionStart||0,_=l.replace(" %","");u.target.value=l,r(u),setTimeout(()=>{I<_.length&&u.target.setSelectionRange(I,I)},0)}else u.target.value=l,r(u);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let T=l.split(" ").filter(j=>j.length>0);T=T.slice(0,3),l=T.map(j=>{if(j.startsWith("-")&&(j=j.substring(1)),(j.match(/-/g)||[]).length>1){const I=j.split("-");j=I[0]+"-"+I.slice(1).join("")}return j.includes("-")?j.split("-").map((I,_)=>I.length===0?"":(_>0,I[0].toUpperCase()+I.slice(1).toLowerCase())).join("-"):j.length>0?j[0].toUpperCase()+j.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&u.target.value.length>0&&u.target.value[u.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),u.target.value=l,r(u);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),u.target.value=l,r(u);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),u.target.value=l,r(u);break}default:r(u);break}},k=(u,l)=>{let T=0;for(let j=0;j<Math.min(l,u.length);j++)/\d/.test(u[j])&&T++;return T},x=(u,l)=>{let T=0;for(let j=0;j<u.length;j++){if(T>=l)return j;/\d/.test(u[j])&&T++}return u.length};return t.jsxs(hn,{children:[t.jsx(xn,{...v,value:s,placeholder:f?"":e,onFocus:()=>b(!0),onBlur:u=>{b(!1),v.onBlur?.(u)},onChange:m,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),o&&t.jsx(fn,{isVisible:f,children:o}),c&&p&&t.jsx(gn,{children:p})]})},hn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,xn=n.input`
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
`,fn=n.label`
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
`,gn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,bn=({total:e,current:o=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[c,p]=w.useState(o),v=b=>{b<1||b>r||b===c||(p(b),s?.(b))},y=()=>{const b=[];let m=1,k=r;if(r>5){const x=Math.floor(2.5);m=Math.max(c-x,1),k=Math.min(c+x,r),c<=x+1?k=5:c>=r-x&&(m=r-5+1)}for(let x=m;x<=k;x++)b.push(t.jsx(Q,{active:x===c,onClick:()=>v(x),children:x},x));return m>1&&(m>2&&b.unshift(t.jsx(Q,{children:"..."},"start-ellipsis")),b.unshift(t.jsx(Q,{active:c===1,onClick:()=>v(1),children:"1"},1))),k<r&&(k<r-1&&b.push(t.jsx(Q,{children:"..."},"end-ellipsis")),b.push(t.jsx(Q,{active:r===c,onClick:()=>v(r),children:r},r))),b};return t.jsxs(mn,{children:[t.jsx(ye,{disabled:c===1,onClick:()=>v(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),y(),t.jsx(ye,{disabled:c===r,onClick:()=>v(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},mn=n.div`
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
`,ye=n.button`
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
`,wn=({placeholder:e="",customPlaceholder:o,value:s,onChange:i,hasError:r=!1,errorMessage:c,rows:p=3,...v})=>{const[y,b]=w.useState(!1),f=!!(o&&!s&&!y);return t.jsxs(vn,{children:[t.jsx(yn,{...v,value:s,placeholder:f?"":e,onFocus:()=>b(!0),onBlur:m=>{b(!1),v.onBlur?.(m)},onChange:i,hasError:r,rows:p}),o&&t.jsx(jn,{isVisible:f,children:o}),r&&c&&t.jsx(kn,{children:c})]})},vn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,yn=n.textarea`
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
`,kn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Te=({title:e,onClose:o,onCancel:s,onSave:i,children:r,isSaveDisabled:c=!1,isSubmitting:p=!1,mode:v="create",hideSaveButton:y=!1,hideCanselButton:b=!1,width:f="560px",saveButtonText:m="Сохранить",customLayout:k})=>{const x=v==="view",u=w.useRef(null);w.useEffect(()=>{const j=I=>{I.key==="Escape"&&o()};document.addEventListener("keydown",j);const R=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>u.current?.focus(),0),()=>{document.removeEventListener("keydown",j),document.body.style.overflow=R}},[o]);const l=j=>{j.target===j.currentTarget&&o()},T=j=>{j.preventDefault(),s()};return t.jsx(Cn,{onMouseDown:l,role:"presentation",children:t.jsxs($n,{ref:u,$width:f,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Ee,{children:[t.jsx(Ie,{children:e}),t.jsx(Sn,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),k?t.jsx(Mn,{children:k}):null,t.jsxs(Ln,{onSubmit:i,children:[t.jsx(Dn,{children:r}),t.jsxs(Tn,{children:[t.jsx(En,{children:b?null:t.jsx(Pn,{isPrimary:!1,onClick:T,children:"Отменить"})}),t.jsx(In,{children:!x&&!y?t.jsx(Rn,{type:"submit",disabled:c||p,children:p?"Сохранение...":m}):null})]})]})]})})},Cn=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,$n=n.div`
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
`,Ee=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Ie=n.h2`
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
`,Sn=n.button`
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
`,Mn=n.div`
  padding: 12px 18px 0 18px;
`,Ln=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,Dn=n.div`
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
`,Tn=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,En=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,In=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Pn=n(te)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Rn=n(te)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Bn=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],zn=({value:e="",placeholder:o="Выберите период",options:s=Bn,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:c})=>{const[p,v]=w.useState(!1),[y,b]=w.useState(!1),[f,m]=w.useState(""),[k,x]=w.useState(""),[u,l]=w.useState(""),T=w.useRef(null),j=w.useRef(null);w.useEffect(()=>{if(e==="Custom"&&k&&u){const B=P(k),z=P(u);m(`С ${B} по ${z}`)}else{const B=s.find(z=>z.value===e);m(B?B.label:"")}},[e,s,k,u]),w.useEffect(()=>{const B=z=>{T.current&&!T.current.contains(z.target)&&v(!1),y&&j.current&&!j.current.contains(z.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(g=>g.contains(z.target))||b(!1))};return document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)}},[y]);const R=B=>{r?.(B.value),v(!1)},I=()=>{v(!1),c?c():b(!0)},_=()=>{r?.(""),m(""),x(""),l("")},A=()=>{if(k&&u){const B=P(k),z=P(u),N=`С ${B} по ${z}`;r?.("Custom",k,u),m(N),b(!1)}},P=B=>{const z=new Date(B),N=String(z.getDate()).padStart(2,"0"),F=String(z.getMonth()+1).padStart(2,"0"),g=z.getFullYear();return`${N}.${F}.${g}`},H=()=>t.jsxs(qn,{children:[t.jsx(Ee,{style:{margin:0},children:t.jsx(Ie,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Xn,{onClick:_,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(An,{ref:T,children:[t.jsxs(Fn,{onClick:()=>v(!p),children:[t.jsx(_n,{children:f||o}),t.jsx(On,{$isOpen:p,children:"▼"})]}),p&&t.jsxs(Nn,{children:[s.map(B=>t.jsxs(Yn,{onClick:()=>R(B),$isSelected:e===B.value,children:[t.jsx(Wn,{$isSelected:e===B.value,children:e===B.value&&t.jsx(Hn,{})}),t.jsx(Vn,{children:B.label})]},B.id)),i&&t.jsx(Zn,{onClick:I,children:"Другой период"})]})]}),y&&t.jsx("div",{ref:j,children:t.jsx(Te,{title:"",onClose:()=>b(!1),onCancel:()=>b(!1),onSave:B=>{B.preventDefault(),A()},saveButtonText:"Выбрать",customLayout:t.jsx(H,{}),children:t.jsxs(Un,{children:[t.jsx(je,{children:t.jsx(re,{value:k,onChange:B=>x(B)})}),t.jsx(je,{children:t.jsx(re,{value:u,onChange:B=>l(B)})})]})})})]})},An=n.div`
  position: relative;
  width: 245px;
`,Fn=n.div`
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
`,_n=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,On=n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Nn=n.div`
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
`,Yn=n.div`
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
`,Wn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Hn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Vn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Zn=n.div`
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
`,Un=n.div`
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
`,Xn=n.button`
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
`,Gn=({name:e,value:o,onChange:s,onBlur:i,onKeyPress:r,placeholder:c="8 (999) 500-50-50",customPlaceholder:p,tabIndex:v,disabled:y=!1,hasError:b=!1,errorMessage:f})=>{const[m,k]=w.useState(!1),x=w.useRef(null),u=!!(p&&!o&&!m),l=I=>{const A=I.replace(/\D/g,"").slice(0,11);let P="";return A.length>0&&(P+="8"),A.length>1&&(P+=` (${A.slice(1,4)}`),A.length>4&&(P+=`) ${A.slice(4,7)}`),A.length>7&&(P+=`-${A.slice(7,9)}`),A.length>9&&(P+=`-${A.slice(9,11)}`),P},T=I=>{const _=l(I.target.value),A={...I,target:{...I.target,name:e,value:_}};s(A)},j=I=>{k(!1),i?.(I)},R=I=>{r?.(I)};return t.jsxs(Jn,{children:[t.jsx(Kn,{ref:x,name:e,type:"tel",value:o,onChange:T,onKeyPress:R,placeholder:u?"":c,maxLength:18,tabIndex:v,disabled:y,hasError:b,onFocus:()=>k(!0),onBlur:j,inputMode:"tel"}),p&&t.jsx(Qn,{isVisible:u,children:p}),b&&f&&t.jsx(eo,{children:f})]})},Jn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Kn=n.input`
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
`,Qn=n.label`
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
`,eo=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,to=({tabs:e,activeTab:o,onChange:s,addButton:i,fontSize:r=14})=>{const c=e.find(p=>p.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(no,{children:t.jsxs(oo,{children:[e.map(p=>t.jsxs(ro,{$isActive:o===p.id,onClick:()=>s(p.id),$fontSize:r,children:[p.label,o===p.id&&t.jsx(io,{})]},p.id)),i&&t.jsx(so,{children:i})]})}),c&&t.jsx(ao,{children:c})]})},no=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,oo=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,ro=n.li`
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
`,io=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,so=n.li`
  margin-left: auto;
  padding: 4px 0;
`,ao=n.div`
  margin-top: 20px;
`,lo=({mode:e,primaryValue:o,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:c,disabled:p=!1,hasError:v=!1,errorMessage:y="",customIcon:b})=>{const m=b||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(ho,{children:[t.jsx(xo,{children:o||"Не указано"}),s&&t.jsx(fo,{children:s})]}):t.jsxs(co,{children:[t.jsxs(po,{children:[t.jsx(uo,{type:"text",value:o||"",placeholder:i,readOnly:!0,disabled:p}),o&&!p&&t.jsx(bo,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!p&&t.jsx(go,{type:"button",onClick:r,"aria-label":"Выбрать",children:m}),v&&y&&t.jsx(mo,{children:y})]})},co=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,po=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,uo=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,ho=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,xo=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,fo=n.span`
  font-size: 13px;
  color: #666;
`,go=n.button`
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
`,bo=n.button`
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
`,mo=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,le=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,wo=({total:e})=>t.jsx("div",{children:t.jsxs(vo,{children:["Всего: ",e]})}),vo=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,yo=n.h3`
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
`,ko=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,Co=n.span`
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
`,$o=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,So=({checked:e,onChange:o,disabled:s})=>{const i=()=>{s||o(!e)};return t.jsxs(ko,{children:[t.jsx($o,{checked:e,onChange:i,disabled:s}),t.jsx(Co,{checked:e,disabled:s})]})},Mo=({id:e,name:o,checked:s,onChange:i,children:r})=>t.jsxs(Lo,{htmlFor:e,children:[t.jsx(Do,{type:"radio",id:e,name:o,checked:s,onChange:i}),r]}),Lo=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Do=n.input`
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
`,To=({percentage:e,onChange:o,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=w.useRef(null),[c,p]=w.useState(!1),v=m=>{!s||!o||(m.preventDefault(),p(!0),f(m))},y=m=>{!c||!o||f(m)},b=()=>{p(!1)},f=m=>{if(!r.current||!o)return;const k=r.current.getBoundingClientRect();let u=(m.clientX-k.left)/k.width*100;u=Math.max(0,Math.min(100,u)),o(Math.round(u))};return w.useEffect(()=>{if(c)return document.addEventListener("mousemove",y),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",b)}},[c]),t.jsxs(Eo,{ref:r,$draggable:s,onMouseDown:v,children:[t.jsx(Io,{$secondaryColor:i.secondary}),t.jsx(Po,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(Ro,{$percentage:e,$primaryColor:i.primary})]})},Eo=n.div`
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
`,Io=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Po=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Ro=n.div`
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
`,Bo=["zoomControl","fullscreenControl"];let oe=null;const zo=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((o,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),Ao=({onLocationSelect:e,initialAddress:o="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:c=12,height:p=400,width:v="100%",inputPlaceholder:y="Введите адрес или название места",searchButtonLabel:b="Найти",draggablePlacemark:f=!0,controls:m=Bo,showSearch:k=!0,className:x,style:u,onError:l})=>{const[T,j]=w.useState(null),[R,I]=w.useState(o),[_,A]=w.useState(o),[P,H]=w.useState(!1),B=w.useRef(null);w.useEffect(()=>{let F=!1,g;return(async()=>{try{const S=await zo(r);if(F||!B.current)return;g=new S.Map(B.current,{center:[s,i],zoom:c,controls:m});const E=new S.Placemark([s,i],{},{draggable:f});g.geoObjects.add(E),g.events.add("click",O=>{const V=O.get("coords");z(V,E,g)}),E.events.add("dragend",()=>{const O=E.geometry.getCoordinates();z(O,E,g)}),j(g),H(!0)}catch(S){l&&S instanceof Error&&l(S)}})(),()=>{F=!0,g&&g.destroy()}},[r,s,i,c,m,f,l]);const z=async(F,g,d)=>{if(window.ymaps)try{const O=(await window.ymaps.geocode(F)).geoObjects.get(0).getAddressLine();g.geometry.setCoordinates(F),d.panTo(F,{flying:!0}),A(O),I(O),e(O,F[0],F[1])}catch(S){l&&S instanceof Error&&l(S)}},N=async()=>{if(!(!R.trim()||!window.ymaps||!T))try{const g=(await window.ymaps.geocode(R)).geoObjects.get(0);if(g){const d=g.geometry.getCoordinates(),S=g.properties.get("boundedBy");T.setBounds(S,{checkZoomRange:!0});const E=new window.ymaps.Placemark(d,{},{draggable:f});T.geoObjects.removeAll(),T.geoObjects.add(E);const O=g.getAddressLine();A(O),e(O,d[0],d[1]),E.events.add("dragend",()=>{const V=E.geometry.getCoordinates();z(V,E,T)})}}catch(F){l&&F instanceof Error&&l(F)}};return t.jsxs(Fo,{className:x,style:u,children:[k&&t.jsxs(_o,{children:[t.jsx(ae,{type:"text",value:R,onChange:F=>I(F.target.value),placeholder:y,onKeyPress:F=>F.key==="Enter"&&N(),disabled:!P}),t.jsx(Oo,{onClick:N,disabled:!P,children:b})]}),t.jsxs(Yo,{children:["Выбранный адрес: ",t.jsx("strong",{children:_||"Не выбран"})]}),t.jsx(No,{ref:B,$height:p,$width:v}),t.jsx(Wo,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Fo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_o=n.div`
  display: flex;
  gap: 8px;
`,Oo=n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,No=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Yo=n.div`
  font-size: 14px;
  color: #374151;
`,Wo=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,ce=n.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;function ie(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${o}`;const i=parseInt(s,10);if(isNaN(i))return`0${o}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${o}`:r}function Ho(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Vo=({title:e,data:o,maxValue:s,step:i,height:r=300,titleFontSize:c})=>{const[p,v]=w.useState(null),y=[];for(let f=0;f<=s;f+=i)y.push(f);const b=o.length>0?o[0].bars.map(f=>({name:f.name,color:f.color})):[];return t.jsxs(Zo,{children:[t.jsxs(le,{style:{marginTop:"0"},children:[t.jsx(ce,{style:{fontSize:c},children:e}),t.jsx(Uo,{children:b.map((f,m)=>t.jsxs(qo,{children:[t.jsx(Xo,{color:f.color}),t.jsx(Go,{children:f.name})]},m))})]}),t.jsxs(Jo,{height:r,children:[t.jsx(Ko,{children:y.map((f,m)=>t.jsx(Qo,{children:f.toLocaleString()},m))}),t.jsxs(er,{children:[t.jsxs(tr,{children:[y.map((f,m)=>{const k=f/s*100;return t.jsx(nr,{position:100-k},`line-${m}`)}),o.map((f,m)=>t.jsxs(or,{onMouseEnter:()=>v(m),onMouseLeave:()=>v(null),children:[f.bars.map((k,x)=>{const u=f.bars.slice(x+1).reduce((l,T)=>l+T.value,0);return t.jsx(rr,{height:k.value/s*100,offset:u/s*100,color:k.color,isHovered:p!==null&&p!==m},x)}),p===m&&t.jsxs(ar,{children:[t.jsxs(lr,{children:[t.jsxs(cr,{children:["Всего: ",ie(f.total.toString())]}),f.bars.map((k,x)=>t.jsxs(dr,{children:[k.name,": ",ie(k.value.toString())]},x))]}),t.jsx(pr,{})]})]},m))]}),t.jsx(ir,{children:o.map((f,m)=>t.jsx(sr,{style:{flex:1,textAlign:"center"},children:f.label},m))})]})]})]})},Zo=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Uo=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,qo=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Xo=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Go=n.span`
  font-size: 14px;
  color: #4b5563;
`,Jo=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Ko=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,Qo=n.span`
  font-size: 12px;
  color: #6b7280;
`,er=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,tr=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,nr=n.div`
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
`,or=n.div`
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
`,rr=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,ir=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,sr=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,ar=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,lr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,cr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,dr=n.div`
  margin-bottom: 2px;
`,pr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,ur=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,hr=({title:e,data:o,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:c,minY:p,xStep:v,yStep:y,height:b=300,showLegend:f=!0,xAxisCustomLabels:m,showTooltip:k=!0,titleFontSize:x="30px"})=>{const[u,l]=w.useState(null),[T,j]=w.useState({x:0,y:0}),R=w.useRef(null),I=w.useRef(null),_=Math.max(...o.map(g=>g.x),r),A=[];for(let g=0;g<=_;g+=v)A.push(g);const P=[];for(let g=p;g<=c;g+=y)P.push(g);const H=m||A.map(g=>g.toString()),B=f?Array.from(new Set(o.filter(g=>g.label).map(g=>g.label))).map(g=>{const d=o.find(S=>S.label===g);return{name:g,color:d.color}}):[],z={};o.forEach(g=>{const d=g.label||"default";z[d]||(z[d]=[]),z[d].push(g)});const N=g=>g/_*100,F=g=>{const d=c-p;return 100-(g-p)/d*100};return w.useEffect(()=>{if(u&&I.current){const g=I.current.getBoundingClientRect(),d=N(u.x)/100*g.width,S=F(u.y)/100*g.height;j({x:d+g.left,y:S+g.top})}},[u,r,c,p]),t.jsxs(xr,{children:[t.jsxs(le,{style:{marginTop:"0"},children:[t.jsx(ce,{style:{fontSize:x},children:e}),f&&B.length>0&&t.jsx(fr,{children:B.map((g,d)=>t.jsxs(gr,{children:[t.jsx(br,{color:g.color}),t.jsx(mr,{children:g.name})]},d))})]}),t.jsxs(wr,{height:b,children:[t.jsxs(vr,{children:[P.map((g,d)=>t.jsx(yr,{children:g.toLocaleString()},d)),t.jsx(ke,{children:i})]}),t.jsxs(jr,{ref:I,children:[P.map((g,d)=>t.jsx(kr,{position:F(g)},`hline-${d}`)),Object.values(z).map((g,d)=>g.map((S,E)=>{if(E===0)return null;const O=g[E-1],V=N(O.x),Z=F(O.y),$=N(S.x),L=F(S.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${V}%`,y1:`${Z}%`,x2:`${$}%`,y2:`${L}%`,stroke:S.color,strokeWidth:"1"})},`line-${d}-${E}`)})),o.map((g,d)=>t.jsx(Cr,{x:N(g.x),y:F(g.y),color:g.color,onMouseEnter:()=>l(g),onMouseLeave:()=>l(null),isHovered:u?.label===g.label},d))]})]}),k&&u&&t.jsxs(Mr,{ref:R,style:{left:T.x,top:T.y},children:[t.jsxs(Lr,{children:[u.name&&t.jsx(Dr,{children:u.name}),t.jsx(Tr,{children:u.y.toLocaleString()})]}),t.jsx(Er,{})]}),t.jsxs($r,{children:[H.map((g,d)=>{const E=A[d]/_*100;return t.jsx(Sr,{style:{left:`${E}%`,transform:"translateX(-50%)"},children:g},d)}),s&&t.jsx(ke,{children:s})]})]})},xr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,fr=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,gr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,br=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,mr=n.span`
  font-size: 14px;
  color: #4b5563;
`,wr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,vr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,yr=n.span`
  font-size: 12px;
  color: #6b7280;
`,ke=n.div`
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
`,kr=n.div`
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
`,Cr=n.div`
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
`,$r=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Sr=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Mr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${ur} 0.15s ease-out forwards;
`,Lr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Dr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Tr=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Er=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Ir=({images:e,initialIndex:o,onClose:s})=>{const[i,r]=w.useState(o),[c,p]=w.useState(0),v=()=>{r(m=>m>0?m-1:e.length-1),p(0)},y=()=>{r(m=>m<e.length-1?m+1:0),p(0)},b=()=>{p(m=>(m+90)%360)},f=m=>{m.key==="Escape"?s():m.key==="ArrowLeft"?v():m.key==="ArrowRight"?y():(m.key==="r"||m.key==="к")&&b()};return t.jsx(Pr,{onClick:s,onKeyDown:f,tabIndex:0,children:t.jsxs(Rr,{onClick:m=>m.stopPropagation(),children:[t.jsx(Br,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(zr,{children:t.jsx(Ar,{onClick:b,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Fr,{children:[t.jsx(Ce,{$position:"left",onClick:v,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(_r,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx(Ce,{$position:"right",onClick:y,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Or,{children:e.map((m,k)=>t.jsx(Nr,{$active:k===i,onClick:()=>{r(k),p(0)}},k))})]})})},Pr=n.div`
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
`,Rr=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Br=n.button`
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
`,zr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Ar=n.button`
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
`,Fr=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,_r=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Ce=n.button`
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
`,Or=n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Nr=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Pe=({isOpen:e,callPhone:o,error:s,onClose:i})=>{const[r,c]=w.useState(!1);if(!e)return null;const p=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),v=()=>{p?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Yr,{onClick:i,children:t.jsxs(Wr,{onClick:y=>y.stopPropagation(),children:[t.jsx(Hr,{children:"Подтверждение авторизации"}),t.jsx($e,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Vr,{onClick:v,title:p?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!p&&r&&t.jsx(Zr,{children:"Скопировано!"})]}),t.jsx($e,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),s&&t.jsx(Ur,{children:s})]})})},Yr=n.div`
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
`,Wr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Hr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,$e=n.p`
  margin-bottom: 15px;
  color: #555;
`,Vr=n.div`
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
`,Zr=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Ur=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,Re=w.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),qr=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),Xr=({items:e,bottomItems:o=[],logo:s,arrowIcon:i,collapsed:r,onToggle:c,selectedKey:p,onSelect:v,autoCollapseOnSelect:y=!1,width:b="315px",collapsedWidth:f="85px",className:m,style:k,mobileBreakpoint:x=768,showBottomLabels:u=!0,children:l})=>{const T=w.useContext(Re),[j,R]=w.useState(window.innerWidth<=x);w.useEffect(()=>{const h=()=>{R(window.innerWidth<=x)};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[x]);const[I,_]=w.useState(r??T.collapsed??!1),[A,P]=w.useState(null),[H,B]=w.useState(p??T.selectedSideMenuItem??null),[z,N]=w.useState({visible:!1,x:0,y:0,items:[]}),F=w.useRef(null),g=r??T.collapsed??I,d=h=>{_(h),T.toggleCollapsed(),c?.(h)},S=p??T.selectedSideMenuItem??H,E=h=>{B(h),T.setSelectedSideMenuItem(h)};w.useEffect(()=>{r!==void 0&&(_(r),r&&P(null))},[r]),w.useEffect(()=>{p!==void 0&&E(p)},[p]),w.useEffect(()=>{const h=()=>N(C=>({...C,visible:!1}));return document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[]);const O=()=>{const h=!g;d(h),h&&P(null)},V=h=>{h.disabled||h.hidden||(E(h.key),v?.(h),h.onClick?.(h),y&&(d(!0),P(null)))},Z=h=>{P(C=>C===h?null:h)},$=(h,C)=>{const D=(h.children?.length||0)>0;if(g&&D){C.stopPropagation();const W=C.currentTarget.getBoundingClientRect();N({visible:!0,x:W.right+6,y:W.top,items:h.children||[]});return}D?Z(h.key):V(h)},L=(h,C=!1)=>h.filter(D=>!D.hidden).map(D=>{const W=(D.children?.length||0)>0,Y=A===D.key,U=S===D.key||!!D.children&&D.children.some(X=>X.key===S);return t.jsxs(w.Fragment,{children:[t.jsxs(ci,{$collapsed:g,$selected:U,onClick:X=>$(D,X),$disabled:D.disabled,title:D.label,children:[D.icon&&t.jsx(pi,{$collapsed:g,children:D.icon}),!g&&t.jsx(di,{children:D.label}),!g&&W&&t.jsx(hi,{$expanded:Y,children:"▾"})]}),!g&&W&&Y&&t.jsx(ui,{children:L(D.children||[],!0)})]},D.key)}),a=w.useMemo(()=>z.visible?t.jsx(fi,{style:{left:z.x,top:z.y},children:z.items.map(h=>t.jsx(gi,{onClick:()=>{V(h),N({visible:!1,x:0,y:0,items:[]})},$selected:S===h.key,children:h.label},h.key))}):null,[z,S]),M=()=>{const h=[...e,...o].filter(C=>!C.hidden);return t.jsx(ei,{children:h.map(C=>{const D=S===C.key;return t.jsxs(ti,{$selected:D,onClick:()=>V(C),$disabled:C.disabled,children:[C.icon&&t.jsx(ni,{$selected:D,children:C.icon}),u&&t.jsx(oi,{$selected:D,children:C.label})]},C.key)})})};return j?t.jsxs(Gr,{className:m,style:k,children:[t.jsx(Jr,{children:s&&t.jsx(Kr,{children:s})}),t.jsx(Qr,{children:l}),M()]}):t.jsxs(ri,{ref:F,$collapsed:g,$width:b,$collapsedWidth:f,className:m,style:k,children:[t.jsxs(ii,{children:[t.jsx(si,{onClick:O,"aria-label":"Переключить меню",children:i??t.jsx(qr,{collapsed:g})}),!g&&s&&t.jsx(ai,{children:s})]}),t.jsxs(li,{children:[t.jsx(Se,{children:L(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(xi,{}),t.jsx(Se,{children:L(o)})]})]}),a,t.jsx(bi,{$collapsed:g}),l]})},Gr=n.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
`,Jr=n.header`
  padding: 16px;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`,Kr=n.div`
  display: flex;
  align-items: center;
`,Qr=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,ei=n.nav`
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
`,ti=n.div`
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
`,ni=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,oi=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,ri=n.div`
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
`,ii=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,si=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`,ai=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,li=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Se=n.div`
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
`,ci=n.div`
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
`,di=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,pi=n.div`
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
`,ui=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hi=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,xi=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,fi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,gi=n.div`
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
`,bi=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,mi=e=>{const o=e.replace(/\D/g,""),i=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},Be=({value:e,onChange:o,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=c=>{const p=mi(c.target.value);o(p)};return t.jsx(wi,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},wi=n.input`
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
`,ze=(e,o)=>G("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}}),Ae=(e,o,s,i)=>G("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,user_type:s,name:i}}),vi=()=>G("/auth/session/info",{method:"GET"}),yi=({isOpen:e,onClose:o,onSubmit:s,error:i,isLoading:r=!1})=>{const[c,p]=w.useState("");if(!e)return null;const v=y=>{y.preventDefault(),s(c)};return t.jsx(ji,{onClick:o,children:t.jsx(ki,{onClick:y=>y.stopPropagation(),children:t.jsxs(Ci,{onSubmit:v,children:[t.jsx($i,{children:"Как вас зовут?"}),t.jsxs(Si,{children:[t.jsx(ae,{type:"text",value:c,onChange:y=>p(y.target.value),placeholder:"Иванов Иван Иванович",disabled:r,autoFocus:!0,style:{flex:1}}),t.jsx(Mi,{type:"submit",disabled:r||!c.trim(),children:r?"...":"→"})]}),i&&t.jsx(Li,{children:i})]})})})},ji=n.div`
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
`,Ci=n.form`
  display: flex;
  flex-direction: column;
`,$i=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,Si=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Mi=n(te)`
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
`,Li=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,Di=({onLoginSuccess:e,userType:o="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:p="https://waypay.one",supportLinkText:v="waypay.one",className:y,style:b,pollingIntervalMs:f=3e3,enableRegistration:m=!1})=>{const[k,x]=w.useState(!1),[u,l]=w.useState(""),[T,j]=w.useState(!1),[R,I]=w.useState(""),[_,A]=w.useState(""),[P,H]=w.useState(!1),[B,z]=w.useState(!1),[N,F]=w.useState(""),[g,d]=w.useState(""),[S,E]=w.useState(null),O=w.useRef(void 0);w.useEffect(()=>()=>{O.current&&clearInterval(O.current)},[]);const V=h=>{const C=h.replace(/\D/g,"");return C?C.startsWith("8")?`+7${C.slice(1)}`:C.startsWith("7")?`+${C}`:`+${C}`:""},Z=()=>{j(!1),z(!1),F(""),d(""),E(null),O.current&&window.clearInterval(O.current)},$=async h=>{if(h.preventDefault(),!u){A("Введите номер телефона");return}x(!0),A("");const C=V(u);try{const D=await ze(C,o);E({phone:C,checkId:D.check_id,callPhone:D.call_phone}),m&&"name_required"in D&&D.name_required?(z(!0),I(D.call_phone)):!m&&"name_required"in D&&D.name_required?(A("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),E(null)):(I(D.call_phone),j(!0),a(C,D.check_id))}catch(D){console.error("Auth error:",D),A("Не удалось инициировать авторизацию. Проверьте номер.")}finally{x(!1)}},L=async h=>{if(!h.trim()){d("Введите ФИО");return}if(S){x(!0),d("");try{F(h),z(!1),j(!0),a(S.phone,S.checkId,h)}catch(C){console.error("Registration error:",C),d("Не удалось завершить регистрацию")}finally{x(!1)}}},a=(h,C,D)=>{O.current&&window.clearInterval(O.current),O.current=window.setInterval(()=>{M(h,C,D)},f)},M=async(h,C,D)=>{if(!P){H(!0);try{await Ae(h,C,o,D||N),(await Le.getSessionInfo())?.client?.id&&(O.current&&window.clearInterval(O.current),j(!1),z(!1),F(""),E(null),e?.())}catch(W){console.error("Verification error:",W)}finally{H(!1)}}};return t.jsxs(Ti,{className:y,style:b,children:[t.jsxs(Ei,{children:[t.jsxs(Ii,{onSubmit:$,children:[t.jsx(Pi,{children:s}),t.jsx(Ri,{children:t.jsx(Bi,{children:t.jsx(Be,{value:u,onChange:h=>l(h),placeholder:r})})}),_&&t.jsx(Oi,{children:t.jsx("span",{children:_})}),t.jsx(zi,{type:"submit",disabled:k,children:k?"Загрузка...":i})]}),t.jsxs(Ai,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(Fi,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(_i,{href:p,target:"_blank",rel:"noreferrer",children:v})]})]}),t.jsx(yi,{isOpen:B,onClose:Z,onSubmit:L,error:g,isLoading:k}),t.jsx(Pe,{isOpen:T,onClose:Z,callPhone:R,error:_})]})},Ti=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,Ei=n.div`
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
`,Ii=n.form`
  display: flex;
  flex-direction: column;
`,Pi=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,Ri=n.div`
  margin-bottom: 25px;
`,Bi=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,zi=n.button`
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
`,Ai=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,Fi=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,_i=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Oi=n.div`
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
`,Fe=e=>{let o=0;for(let i=0;i<e.length;i++)o=e.charCodeAt(i)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},Ni=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Yi=(e,o=100)=>{const s=document.createElement("canvas");s.width=o,s.height=o;const i=s.getContext("2d");if(!i)return"";const r=Fe(e);i.fillStyle=r,i.beginPath(),i.arc(o/2,o/2,o/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=o/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const p=c*.1;return i.fillText(e,o/2,o/2+p),s.toDataURL("image/png")},Wi=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const s=o.getDate().toString().padStart(2,"0"),i=(o.getMonth()+1).toString().padStart(2,"0"),r=o.getFullYear();return`${s}-${i}-${r}`};function Hi(e){return new Date(e)}const _e=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const s=new Date;if(o>s){const f=Math.floor((o.getTime()-s.getTime())/1e3),m=Math.floor(f/60),k=Math.floor(m/60),x=Math.floor(k/24);return f<10?"скоро":f<60?`через ${f} секунд`:m===1?"через минуту":m<60?`через ${m} минут`:k===1?"через час":k<24?`через ${k} часов`:x===1?"завтра":x<7?`через ${x} дней`:"в будущем"}const i=Math.floor((s.getTime()-o.getTime())/1e3),r=Math.floor(i/60),c=Math.floor(r/60),p=Math.floor(c/24),v=Math.floor(p/7),y=Math.floor(p/30),b=Math.floor(p/365);if(i<10)return"только что";if(i<60){const f=Math.max(1,i);return f===1?"секунду назад":f<5?`${f} секунды назад`:`${f} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:p<7?p===1?"вчера":p===2?"позавчера":`${p} дня назад`:v<4?v===1?"неделю назад":v<5?`${v} недели назад`:`${v} недель назад`:y<12?y===1?"месяц назад":y<5?`${y} месяца назад`:`${y} месяцев назад`:b===1?"год назад":b<5?`${b} года назад`:`${b} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},Oe=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Vi=(e,o={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=o,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?Oe(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):_e(r)};exports.API_BASE_URL=Me;exports.AddButton=ct;exports.AuthCallModal=Pe;exports.AuthPage=Di;exports.BackButton=ht;exports.BaseModal=Te;exports.Checkbox=Ot;exports.ColumnChart=Vo;exports.ContextMenu=se;exports.CountInfoTitle=wo;exports.CustomCalendar=re;exports.CustomInput=ae;exports.CustomPhoneInput=Be;exports.CustomSelect=$t;exports.CustomTable=Je;exports.CustomTextArea=wn;exports.CustomTitle=ce;exports.DefaultButton=te;exports.DeleteButton=gt;exports.EditButton=mt;exports.EntitySelectContainer=lo;exports.ExportButton=yt;exports.InputContainer=un;exports.InputLabel=pn;exports.InputRow=dn;exports.InputTitle=yo;exports.ModalInfoTitle=jo;exports.Pagination=bn;exports.PeriodField=zn;exports.PhoneModalInput=Gn;exports.PhotoViewerModal=Ir;exports.ProgressBar=To;exports.RadioButton=Mo;exports.ScatterPlot=hr;exports.SideMenu=Xr;exports.SideMenuContext=Re;exports.Tabs=to;exports.TitleField=le;exports.ToggleSwitch=So;exports.YandexMapSelector=Ao;exports.apiRequest=G;exports.authStorage=Le;exports.confirmCallAuth=Ae;exports.formatDate=Wi;exports.formatExactDate=Oe;exports.formatMoney=ie;exports.formatRelativeTime=_e;exports.formatRelativeTimeExtended=Vi;exports.generateAvatar=Yi;exports.getInitials=Ni;exports.getSessionInfo=vi;exports.initiateCallAuth=ze;exports.parseDateInput=Hi;exports.parseMoney=Ho;exports.stringToColor=Fe;
