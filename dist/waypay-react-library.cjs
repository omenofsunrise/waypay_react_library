"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("react"),n=require("styled-components"),X=require("framer-motion");var te={exports:{}},K={};var ue;function We(){if(ue)return K;ue=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(r,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var g in s)g!=="key"&&(l[g]=s[g])}else l=s;return s=l.ref,{$$typeof:e,type:r,key:u,ref:s!==void 0?s:null,props:l}}return K.Fragment=o,K.jsx=i,K.jsxs=i,K}var Q={};var he;function Ye(){return he||(he=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===F?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case I:return"Fragment";case P:return"Profiler";case k:return"StrictMode";case R:return"Suspense";case H:return"SuspenseList";case W:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case d:return"Portal";case O:return a.displayName||"Context";case E:return(a._context.displayName||"Context")+".Consumer";case A:var $=a.render;return a=a.displayName,a||(a=$.displayName||$.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case B:return $=a.displayName||null,$!==null?$:e(a.type)||"Memo";case _:$=a._payload,a=a._init;try{return e(a($))}catch{}}return null}function o(a){return""+a}function i(a){try{o(a);var $=!1}catch{$=!0}if($){$=console;var S=$.error,f=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return S.call($,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",f),o(a)}}function r(a){if(a===I)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===_)return"<...>";try{var $=e(a);return $?"<"+$+">":"<...>"}catch{return"<...>"}}function s(){var a=v.A;return a===null?null:a.getOwner()}function l(){return Error("react-stack-top-frame")}function u(a){if(c.call(a,"key")){var $=Object.getOwnPropertyDescriptor(a,"key").get;if($&&$.isReactWarning)return!1}return a.key!==void 0}function g(a,$){function S(){N||(N=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",$))}S.isReactWarning=!0,Object.defineProperty(a,"key",{get:S,configurable:!0})}function j(){var a=e(this.type);return V[a]||(V[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function b(a,$,S,f,T,z){var Y=S.ref;return a={$$typeof:h,type:a,key:$,props:S,_owner:f},(Y!==void 0?Y:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:j}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:T}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:z}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function w(a,$,S,f,T,z){var Y=$.children;if(Y!==void 0)if(f)if(M(Y)){for(f=0;f<Y.length;f++)x(Y[f]);Object.freeze&&Object.freeze(Y)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(Y);if(c.call($,"key")){Y=e(a);var U=Object.keys($).filter(function(J){return J!=="key"});f=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",L[Y+f]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,f,Y,U,Y),L[Y+f]=!0)}if(Y=null,S!==void 0&&(i(S),Y=""+S),u($)&&(i($.key),Y=""+$.key),"key"in $){S={};for(var G in $)G!=="key"&&(S[G]=$[G])}else S=$;return Y&&g(S,typeof a=="function"?a.displayName||a.name||"Unknown":a),b(a,Y,S,s(),T,z)}function x(a){y(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===_&&(a._payload.status==="fulfilled"?y(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function y(a){return typeof a=="object"&&a!==null&&a.$$typeof===h}var p=m,h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),v=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,c=Object.prototype.hasOwnProperty,M=Array.isArray,D=console.createTask?console.createTask:function(){return null};p={react_stack_bottom_frame:function(a){return a()}};var N,V={},Z=p.react_stack_bottom_frame.bind(p,l)(),C=D(r(l)),L={};Q.Fragment=I,Q.jsx=function(a,$,S){var f=1e4>v.recentlyCreatedOwnerStacks++;return w(a,$,S,!1,f?Error("react-stack-top-frame"):Z,f?D(r(a)):C)},Q.jsxs=function(a,$,S){var f=1e4>v.recentlyCreatedOwnerStacks++;return w(a,$,S,!0,f?Error("react-stack-top-frame"):Z,f?D(r(a)):C)}})()),Q}var xe;function He(){return xe||(xe=1,process.env.NODE_ENV==="production"?te.exports=We():te.exports=Ye()),te.exports}var t=He();const ae=({x:e,y:o,items:i,onClose:r,...s})=>{const l=m.useRef(null),[u,g]=m.useState(null);m.useEffect(()=>{const p=h=>{l.current&&!l.current.contains(h.target)&&r()};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[r]);const b=(()=>{if(!l.current)return{x:e,y:o};const p=l.current.offsetWidth,h=l.current.offsetHeight,d=window.innerWidth,I=window.innerHeight;let k=e,P=o;return k+p>d&&(k=e-p),P+h>I&&(P=o-h),{x:k,y:P}})(),w=(p,h)=>{p.submenu?g(u===h?null:h):p.action&&(p.action(),r())},x=p=>{i[p].submenu&&g(p)},y=p=>{const h=p.relatedTarget;l.current?.contains(h)||g(null)};return t.jsx(Ve,{ref:l,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:b.y,left:b.x},onClick:p=>p.stopPropagation(),onMouseLeave:y,...s,children:i.map((p,h)=>t.jsxs(Ze,{$hasSubmenu:!!p.submenu,$disabled:p.disabled,children:[t.jsx(Ue,{onClick:d=>{d.stopPropagation(),p.disabled||w(p,h)},onMouseEnter:()=>!p.disabled&&x(h),whileHover:p.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:p.color,$disabled:p.disabled,children:t.jsxs(Xe,{children:[p.label,p.submenu&&t.jsx(qe,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),p.submenu&&u===h&&t.jsx(Ge,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(ae,{x:0,y:-h*40,items:p.submenu,onClose:()=>g(null)})})]},h))})},Ve=n(X.motion.div)`
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
`,Ue=n(X.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Xe=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,qe=n.span`
  color: #666;
  margin-left: 8px;
`,Ge=n(X.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Je=({columns:e,data:o,onRowDoubleClick:i,contextMenuActions:r=[],onSort:s,sortConfig:l,onRowClick:u,selectedRow:g,fixedHeight:j,hasTotalsRow:b,debtChecker:w,rowStyles:x={},isLoading:y})=>{const[p,h]=m.useState(null),[d,I]=m.useState(null),k=m.useRef(null),P=m.useRef(null),E=500,O=g!==void 0?g:p,A=C=>{!e[C].isSortable||!s||s(C)},H=w||(C=>{const L=C[8];return typeof L=="string"?parseFloat(L.replace(/[^\d.]/g,""))>0:!1}),B=C=>{g===void 0&&h(C===O?null:C),u&&u(o[C],C)},_=(C,L)=>{i&&i(C,L)},W=(C,L)=>{if(r.length===0)return;C.preventDefault();const a="touches"in C?C.touches[0].clientX:C.clientX,$="touches"in C?C.touches[0].clientY:C.clientY;I({x:a,y:$,rowIndex:L})},F=(C,L)=>{C.preventDefault(),W(C,L)},v=(C,L)=>{r.length!==0&&(P.current&&clearTimeout(P.current),P.current=window.setTimeout(()=>{W(C,L)},E))},c=()=>{P.current&&(clearTimeout(P.current),P.current=null)},M=()=>{P.current&&window.clearTimeout(P.current)},D=()=>{I(null)};m.useEffect(()=>{const C=()=>{d&&D()};return document.addEventListener("click",C),()=>{document.removeEventListener("click",C),P.current&&clearTimeout(P.current)}},[d]);const N=(C,L,a)=>{if(L)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const $=x[C]||{};return C===O?{backgroundColor:$.backgroundColor||"#007D88",color:$.color||"#FFFFFF",fontWeight:$.fontWeight||"normal"}:a?{backgroundColor:$.backgroundColor||"#E8D8D8",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}:o[C][o[C].length-1]===!1?{backgroundColor:$.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:$.fontWeight||"normal"}:{backgroundColor:$.backgroundColor||"#FFFFFF",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}},V=(C,L,a)=>{if(L)return"#FFFFFF";const $=N(C,L,a);return $.hoverBackgroundColor?$.hoverBackgroundColor:C===O?"#007D88":a?"#E8D8D8CC":o[C][o[C].length-1]===!1?"#51D5B4CC":"#F3F4F6"},Z=()=>{if(!d||r.length===0)return null;const C=(typeof r=="function"?r(o[d.rowIndex]):r).filter(L=>typeof L=="object"&&(typeof L.shouldShow!="function"||L.shouldShow(o[d.rowIndex])));return C.length===0?null:t.jsx(nt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:d.x,top:d.y,zIndex:1e3},onClick:L=>L.stopPropagation(),children:t.jsx(ae,{items:C.map(L=>{const a={label:L.label,color:L.color,disabled:L.disabled};return L.getSubmenu?a.submenu=L.getSubmenu(o[d.rowIndex]):L.action&&(a.action=()=>{L.action(o[d.rowIndex],d.rowIndex),D()}),a}),onClose:D,x:0,y:0})})};return t.jsx(et,{ref:k,children:y?t.jsx(Ke,{children:t.jsx(Qe,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(tt,{children:[t.jsx(ot,{children:t.jsx(fe,{children:e.map((C,L)=>!C.isHidden&&t.jsx(it,{$isSortable:C.isSortable,$isActive:l?.key===L,onClick:()=>A(L),$align:C.align||"center",$isFirst:L===0,$isLast:L===e.length-1,children:t.jsxs(st,{$align:C.align||"center",children:[C.name,C.isSortable&&t.jsx(at,{$direction:l?.key===L?l.direction:"asc",animate:{rotate:l?.key===L&&l.direction==="desc"?180:0,color:l?.key===L?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},L))})}),t.jsx(rt,{$fixedHeight:j,children:t.jsx(X.AnimatePresence,{children:o.map((C,L)=>{const a=!!(b&&L===o.length-1),$=!!(!a&&H(C)),S=N(L,a,$),f=V(L,a,$);return t.jsx(fe,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:L===o.length-1,$isSelected:L===O,$isTotalsRow:a,onClick:()=>!a&&B(L),onDoubleClick:()=>!a&&_(C,L),onContextMenu:T=>!a&&F(T,L),onTouchStart:T=>!a&&v(T,L),onTouchEnd:c,onTouchMove:M,whileHover:a?{}:{backgroundColor:f,transition:{duration:.15}},style:{backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"},children:C.map((T,z)=>!e[z]?.isHidden&&t.jsx(lt,{$align:e[z]?.align||"center",$isFirst:z===0,$isLast:z===C.length-1,$isTotalsCell:a,$isBeforeTotals:a&&z<C.findIndex(Y=>Y==="Итого:"),children:T},z))},`row-${L}`)})})})]}),t.jsx(X.AnimatePresence,{children:Z()})]})})},Ke=n.div`
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
`,nt=n(X.motion.div)`
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
`,fe=n(X.motion.tr)`
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
`,at=n(X.motion.span)`
  display: inline-flex;
  align-items: center;
`,lt=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,ct=({onClick:e,tooltip:o,size:i=32,margin:r})=>t.jsx(dt,{onClick:e,size:i,margin:r,title:o,children:t.jsx(pt,{size:i})}),dt=n.button`
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
`,le="/api";async function q(e,o={}){const{method:i="GET",body:r,headers:s={},token:l,withCredentials:u=!0}=o,g=async b=>{const w={"Content-Type":"application/json",...s};b&&(w.Authorization=`Bearer ${b}`);const x=e.startsWith("http")?e:`${le}${e}`;return await fetch(x,{method:i,headers:w,body:r?JSON.stringify(r):void 0,credentials:u?"include":"same-origin"})},j=async(b,w=!0)=>{const x=await g(b);if(x.ok){if(x.status===204)return null;const p=await x.text();if(!p)return null;try{return JSON.parse(p)}catch{return p}}if(x.status===401&&w){const p=await ut();if(p)return j(p,!1)}let y=`Request failed with status ${x.status}`;try{const p=await x.json();p&&typeof p.error=="string"?y=p.error:typeof p=="string"&&(y=p)}catch{const p=await x.text();p&&(y=p)}throw new Error(y)};return j(l)}async function ut(){const e=await fetch(`${le}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const ht={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await q("/auth/session/info",{method:"GET"})}catch{return null}},async logout(){try{await q("/auth/session/revoke",{method:"POST",headers:{"Content-Type":"application/json"}})}catch(e){throw console.error("Logout error:",e),e}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},xt=n.button`
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
`,ft=({children:e,onClick:o,disabled:i,...r})=>t.jsxs(xt,{onClick:o,disabled:i,...r,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"currentColor"})}),e]}),ne=({children:e="Подтвердить",icon:o,disabled:i=!1,bg:r,hoverBg:s,disabledBg:l,textColor:u,fullWidth:g=!1,minWidth:j,width:b,isPrimary:w=!0,...x})=>{const p=r?{bg:r,hoverBg:s||r,disabledBg:l||r,textColor:u||(w?"white":"black")}:w?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(gt,{disabled:i,$bg:p.bg,$hoverBg:p.hoverBg,$disabledBg:p.disabledBg,$textColor:p.textColor,$fullWidth:g,$minWidth:j,$width:b,...x,children:[o&&t.jsx(bt,{children:o}),t.jsx("span",{children:e})]})},gt=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({disabled:e,$bg:o,$disabledBg:i})=>e?i:o};
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
    background-color: ${({disabled:e,$hoverBg:o,$disabledBg:i})=>e?i:o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({$bg:e})=>e==="rgba(209, 213, 219, 1)"?"rgba(209, 233, 239, 1)":"rgba(156, 163, 175, 0.5)"};
  }
`,bt=n.span`
  display: inline-flex;
  align-items: center;
`,mt=({onClick:e,tooltip:o,size:i=32})=>t.jsx(wt,{onClick:e,size:i,title:o,children:t.jsx("svg",{width:i*.5,height:i*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),wt=n.button`
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
`,vt=({onClick:e,tooltip:o,size:i=32})=>t.jsx(yt,{onClick:e,size:i,title:o,children:t.jsx("svg",{width:i*.5,height:i*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),yt=n.button`
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
`,kt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),jt=({children:e="Экспорт",icon:o=t.jsx(kt,{}),onExport:i,isExporting:r=!1,exportProgress:s=0,...l})=>{const u=async g=>{if(i)try{await i()}catch(j){console.error("Export error:",j)}l.onClick&&l.onClick(g)};return t.jsx(Ct,{...l,onClick:u,disabled:r||l.disabled,children:r?t.jsxs($t,{children:[t.jsxs("span",{children:["Экспорт... ",s,"%"]}),t.jsx(St,{progress:s})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},Ct=n.button`
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
`,$t=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,St=n.div`
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
`,Mt=({placeholder:e="",customPlaceholder:o,value:i,onChange:r,hasError:s=!1,errorMessage:l,options:u,name:g,disabled:j=!1,required:b=!1,...w})=>{const[x,y]=m.useState(!1),[p,h]=m.useState(!1),d=m.useRef(null),I=!!(o&&!i&&!x),k=R=>{r&&!j&&r({target:{value:R,name:g}}),h(!1),y(!1)},P=R=>{d.current&&!d.current.contains(R.target)&&(h(!1),y(!1))},E=()=>{j||(h(!p),y(!p))};m.useEffect(()=>(document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}),[]);const O=u.find(R=>R.value===i),A=O?O.label:"";return t.jsxs(Lt,{ref:d,...w,children:[t.jsxs(Dt,{children:[t.jsxs(Tt,{hasError:s,isOpen:p,disabled:j,onClick:E,onFocus:()=>!j&&y(!0),onBlur:()=>y(!1),tabIndex:j?-1:0,children:[t.jsx(Et,{children:A||e&&t.jsx(It,{children:e})}),t.jsx(Pt,{isOpen:p,disabled:j,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:j?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),p&&t.jsx(Rt,{children:u.map(R=>t.jsxs(Bt,{$isSelected:R.value===i,onClick:()=>k(R.value),children:[t.jsx(zt,{$isSelected:R.value===i,children:R.value===i&&t.jsx(At,{})}),t.jsx(Ft,{children:R.label})]},R.value))})]}),o&&t.jsx(_t,{isVisible:I,children:o}),s&&l&&t.jsx(Ot,{children:l}),t.jsx(Nt,{name:g,value:i||"",onChange:()=>{},tabIndex:-1,required:b,children:u.map(R=>t.jsx("option",{value:R.value,children:R.label},R.value))})]})},Lt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Dt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Tt=n.div`
  border: 1px solid
    ${({hasError:e,isOpen:o,disabled:i})=>i?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":o?"rgba(0, 125, 136, 1)":"rgba(209, 213, 219, 1)"};
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
    border-color: ${({hasError:e,disabled:o,isOpen:i})=>o?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }
`,Et=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,It=n.span`
  color: rgba(80, 85, 92, 1);
`,Pt=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,Rt=n.div`
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
`,Bt=n.div`
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
`,zt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,At=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Ft=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,_t=n.label`
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
`,Ot=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Nt=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Wt=({checked:e=!1,onChange:o,className:i,label:r,disabled:s=!1})=>{const[l,u]=m.useState(!1),g=()=>{s||!o||o(!e)},j=b=>{s||(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),g())};return t.jsxs(Yt,{className:i,onClick:g,onKeyPress:j,tabIndex:s?-1:0,disabled:s,children:[t.jsx(Ht,{checked:e,isFocused:l,disabled:s,onMouseEnter:()=>!s&&u(!0),onMouseLeave:()=>!s&&u(!1),onFocus:()=>!s&&u(!0),onBlur:()=>!s&&u(!1),children:e&&t.jsx(Zt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:s,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:s?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),r&&t.jsx(Vt,{disabled:s,children:r})]})},Yt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Ht=n.div`
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
`,Vt=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Zt=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Ut="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",ge=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Xt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ie=({prefix:e="Дата:",value:o="",placeholder:i="Выберите дату",onChange:r,onReset:s})=>{const[l,u]=m.useState(!1),[g,j]=m.useState(new Date),[b,w]=m.useState(o?new Date(o):null),[x,y]=m.useState(!1),[p,h]=m.useState(!1),d=m.useRef(null),I=m.useRef(null),k=m.useRef(null);m.useEffect(()=>{const c=M=>{d.current&&!d.current.contains(M.target)&&u(!1),I.current&&!I.current.contains(M.target)&&y(!1),k.current&&!k.current.contains(M.target)&&h(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]),m.useEffect(()=>{w(o?new Date(o):null)},[o]);const P=c=>{const M=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate()));w(c);const D=M.toISOString().split("T")[0];r?.(D),u(!1)},E=()=>{const c=new Date;j(c);const D=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate())).toISOString().split("T")[0];r?.(D),u(!1)},O=()=>{w(null),r?.(""),s?.(),u(!1)},A=c=>{const M=new Date(g);M.setMonth(c),j(M),y(!1)},R=c=>{const M=new Date(g);M.setFullYear(c),j(M),h(!1)},H=()=>{const c=g.getFullYear(),M=g.getMonth(),D=new Date(c,M,1),V=new Date(c,M+1,0).getDate(),Z=D.getDay()===0?6:D.getDay()-1,C=[],L=35,a=new Date(c,M,0).getDate();for(let S=0;S<Z;S++){const f=a-Z+S+1,T=new Date(c,M-1,f),z=!!(b&&T.getDate()===b.getDate()&&T.getMonth()===b.getMonth()&&T.getFullYear()===b.getFullYear());C.push(t.jsx(oe,{selected:z,onClick:()=>P(T),otherMonth:!0,children:f},`prev-${f}`))}for(let S=1;S<=V;S++){const f=new Date(c,M,S),T=!!(b&&f.getDate()===b.getDate()&&f.getMonth()===b.getMonth()&&f.getFullYear()===b.getFullYear());C.push(t.jsx(oe,{selected:T,onClick:()=>P(f),children:S},`current-${S}`))}const $=L-C.length;for(let S=1;S<=$;S++){const f=new Date(c,M+1,S),T=!!(b&&f.getDate()===b.getDate()&&f.getMonth()===b.getMonth()&&f.getFullYear()===b.getFullYear());C.push(t.jsx(oe,{selected:T,onClick:()=>P(f),otherMonth:!0,children:S},`next-${S}`))}return C},B=()=>b?b.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):i,_=()=>{const c=new Date().getFullYear(),M=[];for(let D=c-10;D<=c+10;D++)M.push(D);return M},W=c=>{c.preventDefault(),c.stopPropagation(),y(!x),h(!1)},F=c=>{c.preventDefault(),c.stopPropagation(),h(!p),y(!1)},v=c=>{const M=c==="next"?1:-1,D=new Date(g);D.setMonth(D.getMonth()+M),j(D)};return t.jsxs(qt,{ref:d,children:[t.jsxs(Gt,{onClick:()=>u(!l),children:[e&&t.jsx(Jt,{children:e}),t.jsx(Kt,{isEmpty:!b,children:B()}),t.jsx(Qt,{src:Ut,alt:"Календарь"})]}),l&&t.jsxs(en,{className:"calendar-container",children:[t.jsxs(tn,{children:[t.jsx(ve,{onClick:c=>{c.preventDefault(),c.stopPropagation(),v("prev")},onMouseDown:c=>c.preventDefault(),children:t.jsx(ye,{direction:"right"})}),t.jsxs(nn,{children:[t.jsxs(sn,{ref:I,children:[t.jsxs(on,{onClick:c=>W(c),onMouseDown:c=>c.preventDefault(),children:[ge[g.getMonth()],t.jsx(be,{$open:x})]}),x&&t.jsx(me,{$width:120,onClick:c=>c.stopPropagation(),children:ge.map((c,M)=>t.jsx(we,{$selected:M===g.getMonth(),onClick:D=>{D.stopPropagation(),A(M)},children:c},c))})]}),t.jsxs(an,{ref:k,children:[t.jsxs(rn,{onClick:c=>F(c),onMouseDown:c=>c.preventDefault(),children:[g.getFullYear(),t.jsx(be,{$open:p})]}),p&&t.jsx(me,{$width:80,onClick:c=>c.stopPropagation(),children:_().map(c=>t.jsx(we,{$selected:c===g.getFullYear(),onClick:M=>{M.stopPropagation(),R(c)},children:c},c))})]})]}),t.jsx(ve,{onClick:c=>{c.preventDefault(),c.stopPropagation(),v("next")},onMouseDown:c=>c.preventDefault(),children:t.jsx(ye,{direction:"left"})})]}),t.jsx(ln,{children:Xt.map(c=>t.jsx(cn,{children:c},c))}),t.jsx(dn,{children:H()}),t.jsxs(pn,{children:[t.jsx(ke,{onClick:O,children:"Удалить"}),t.jsx(ke,{onClick:E,children:"Сегодня"})]})]})]})},qt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,Gt=n.div`
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
`,Jt=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,Kt=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,Qt=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,en=n.div`
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
`,tn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,nn=n.div`
  display: flex;
  gap: 8px;
  color: black;
`,Te=n.button`
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
`,on=n(Te)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,rn=n(Te)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,sn=n.div`
  position: relative;
`,an=n.div`
  position: relative;
`,be=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,me=n.div`
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
`,we=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,ve=n.button`
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
`,ye=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,ln=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,cn=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,dn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,oe=n.div`
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
`,pn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ke=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,un=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,hn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,xn=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,ce=({placeholder:e="",customPlaceholder:o,value:i,inputType:r="text",onChange:s,hasError:l=!1,errorMessage:u,...g})=>{const[j,b]=m.useState(!1),w=!!(o&&!i&&!j),x=h=>{if(!s)return;let d=h.target.value;switch(r){case"number":/^\d*$/.test(d)&&s?.(h);break;case"rubles":{const k=h.target.selectionStart,P=h.target.value;let E=P.replace(/[^\d]/g,"");if(E===""){h.target.value="",s(h);break}const O=parseInt(E,10);if(!isNaN(O)){let A=O.toLocaleString("ru-RU");A+=" ₽";const R=y(P,k||0),H=p(A,R);h.target.value=A,s(h),setTimeout(()=>{h.target.setSelectionRange(H,H)},0)}break}case"percents":{d=d.replace(/[^\d.]/g,"");const k=d.split(".");k.length>2&&(d=k[0]+"."+k.slice(1).join("")),k.length===2&&k[1].length>2&&(d=k[0]+"."+k[1].slice(0,2));const P=parseFloat(d);if(isNaN(P)||(P>100?d="100":P<0&&(d="0")),d&&d!==""){d+=" %";const E=h.target.selectionStart||0,O=d.replace(" %","");h.target.value=d,s(h),setTimeout(()=>{E<O.length&&h.target.setSelectionRange(E,E)},0)}else h.target.value=d,s(h);break}case"fullname":d=d.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),d=d.replace(/\s{2,}/g," "),d=d.replace(/- /g,"-"),d=d.replace(/ -/g," ");let I=d.split(" ").filter(k=>k.length>0);I=I.slice(0,3),d=I.map(k=>{if(k.startsWith("-")&&(k=k.substring(1)),(k.match(/-/g)||[]).length>1){const E=k.split("-");k=E[0]+"-"+E.slice(1).join("")}return k.includes("-")?k.split("-").map((E,O)=>E.length===0?"":(O>0,E[0].toUpperCase()+E.slice(1).toLowerCase())).join("-"):k.length>0?k[0].toUpperCase()+k.slice(1).toLowerCase():""}).join(" "),d.length>0&&d[d.length-1]!==" "&&h.target.value.length>0&&h.target.value[h.target.value.length-1]===" "&&(d+=" "),d.length>100&&(d=d.slice(0,100)),h.target.value=d,s(h);break;case"doc":d=d.replace(/\D/g,""),d.length>4&&(d=`${d.slice(0,4)} ${d.slice(4,10)}`),d.length>11&&(d=d.slice(0,11)),h.target.value=d,s(h);break;case"date":{d=d.replace(/\D/g,""),d.length>4?d=`${d.slice(0,2)}.${d.slice(2,4)}.${d.slice(4,8)}`:d.length>2&&(d=`${d.slice(0,2)}.${d.slice(2,4)}`),d.length>10&&(d=d.slice(0,10)),i?.length>d.length&&[3,6].includes(d.length)&&(d=d.slice(0,d.length-1)),h.target.value=d,s(h);break}default:s(h);break}},y=(h,d)=>{let I=0;for(let k=0;k<Math.min(d,h.length);k++)/\d/.test(h[k])&&I++;return I},p=(h,d)=>{let I=0;for(let k=0;k<h.length;k++){if(I>=d)return k;/\d/.test(h[k])&&I++}return h.length};return t.jsxs(fn,{children:[t.jsx(gn,{...g,value:i,placeholder:w?"":e,onFocus:()=>b(!0),onBlur:h=>{b(!1),g.onBlur?.(h)},onChange:x,inputMode:r==="number"||r==="doc"||r==="date"||r==="rubles"||r==="percents"?"numeric":"text",maxLength:r==="doc"?11:r==="date"?10:void 0,hasError:l}),o&&t.jsx(bn,{isVisible:w,children:o}),l&&u&&t.jsx(mn,{children:u})]})},fn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,gn=n.input`
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
`,bn=n.label`
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
`,mn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,wn=({total:e,current:o=1,onChange:i,itemsPerPage:r=10})=>{const s=Math.ceil(e/r),[l,u]=m.useState(o),g=b=>{b<1||b>s||b===l||(u(b),i?.(b))},j=()=>{const b=[];let x=1,y=s;if(s>5){const p=Math.floor(2.5);x=Math.max(l-p,1),y=Math.min(l+p,s),l<=p+1?y=5:l>=s-p&&(x=s-5+1)}for(let p=x;p<=y;p++)b.push(t.jsx(ee,{active:p===l,onClick:()=>g(p),children:p},p));return x>1&&(x>2&&b.unshift(t.jsx(ee,{children:"..."},"start-ellipsis")),b.unshift(t.jsx(ee,{active:l===1,onClick:()=>g(1),children:"1"},1))),y<s&&(y<s-1&&b.push(t.jsx(ee,{children:"..."},"end-ellipsis")),b.push(t.jsx(ee,{active:s===l,onClick:()=>g(s),children:s},s))),b};return t.jsxs(vn,{children:[t.jsx(je,{disabled:l===1,onClick:()=>g(l-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:l===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),j(),t.jsx(je,{disabled:l===s,onClick:()=>g(l+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:l===s?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},vn=n.div`
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
`,je=n.button`
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
`,yn=({placeholder:e="",customPlaceholder:o,value:i,onChange:r,hasError:s=!1,errorMessage:l,rows:u=3,...g})=>{const[j,b]=m.useState(!1),w=!!(o&&!i&&!j);return t.jsxs(kn,{children:[t.jsx(jn,{...g,value:i,placeholder:w?"":e,onFocus:()=>b(!0),onBlur:x=>{b(!1),g.onBlur?.(x)},onChange:r,hasError:s,rows:u}),o&&t.jsx(Cn,{isVisible:w,children:o}),s&&l&&t.jsx($n,{children:l})]})},kn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,jn=n.textarea`
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
`,Cn=n.label`
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
`,$n=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ee=({title:e,onClose:o,onCancel:i,onSave:r,children:s,isSaveDisabled:l=!1,isSubmitting:u=!1,mode:g="create",hideSaveButton:j=!1,hideCanselButton:b=!1,width:w="560px",saveButtonText:x="Сохранить",customLayout:y})=>{const p=g==="view",h=m.useRef(null);m.useEffect(()=>{const k=E=>{E.key==="Escape"&&o()};document.addEventListener("keydown",k);const P=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>h.current?.focus(),0),()=>{document.removeEventListener("keydown",k),document.body.style.overflow=P}},[o]);const d=k=>{k.target===k.currentTarget&&o()},I=k=>{k.preventDefault(),i()};return t.jsx(Sn,{onMouseDown:d,role:"presentation",children:t.jsxs(Mn,{ref:h,$width:w,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Ie,{children:[t.jsx(Pe,{children:e}),t.jsx(Ln,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),y?t.jsx(Dn,{children:y}):null,t.jsxs(Tn,{onSubmit:r,children:[t.jsx(En,{children:s}),t.jsxs(In,{children:[t.jsx(Pn,{children:b?null:t.jsx(Bn,{isPrimary:!1,onClick:I,children:"Отменить"})}),t.jsx(Rn,{children:!p&&!j?t.jsx(zn,{type:"submit",disabled:l||u,children:u?"Сохранение...":x}):null})]})]})]})})},Sn=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Mn=n.div`
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
`,Ie=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Pe=n.h2`
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
`,Ln=n.button`
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
`,Dn=n.div`
  padding: 12px 18px 0 18px;
`,Tn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,En=n.div`
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
`,In=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,Pn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Bn=n(ne)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,zn=n(ne)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,An=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Fn=({value:e="",placeholder:o="Выберите период",options:i=An,showCustomPeriodButton:r=!0,onChange:s,onCustomPeriodClick:l})=>{const[u,g]=m.useState(!1),[j,b]=m.useState(!1),[w,x]=m.useState(""),[y,p]=m.useState(""),[h,d]=m.useState(""),I=m.useRef(null),k=m.useRef(null);m.useEffect(()=>{if(e==="Custom"&&y&&h){const B=R(y),_=R(h);x(`С ${B} по ${_}`)}else{const B=i.find(_=>_.value===e);x(B?B.label:"")}},[e,i,y,h]),m.useEffect(()=>{const B=_=>{I.current&&!I.current.contains(_.target)&&g(!1),j&&k.current&&!k.current.contains(_.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(v=>v.contains(_.target))||b(!1))};return document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)}},[j]);const P=B=>{s?.(B.value),g(!1)},E=()=>{g(!1),l?l():b(!0)},O=()=>{s?.(""),x(""),p(""),d("")},A=()=>{if(y&&h){const B=R(y),_=R(h),W=`С ${B} по ${_}`;s?.("Custom",y,h),x(W),b(!1)}},R=B=>{const _=new Date(B),W=String(_.getDate()).padStart(2,"0"),F=String(_.getMonth()+1).padStart(2,"0"),v=_.getFullYear();return`${W}.${F}.${v}`},H=()=>t.jsxs(Gn,{children:[t.jsx(Ie,{style:{margin:0},children:t.jsx(Pe,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Jn,{onClick:O,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(_n,{ref:I,children:[t.jsxs(On,{onClick:()=>g(!u),children:[t.jsx(Nn,{children:w||o}),t.jsx(Wn,{$isOpen:u,children:"▼"})]}),u&&t.jsxs(Yn,{children:[i.map(B=>t.jsxs(Hn,{onClick:()=>P(B),$isSelected:e===B.value,children:[t.jsx(Vn,{$isSelected:e===B.value,children:e===B.value&&t.jsx(Zn,{})}),t.jsx(Un,{children:B.label})]},B.id)),r&&t.jsx(Xn,{onClick:E,children:"Другой период"})]})]}),j&&t.jsx("div",{ref:k,children:t.jsx(Ee,{title:"",onClose:()=>b(!1),onCancel:()=>b(!1),onSave:B=>{B.preventDefault(),A()},saveButtonText:"Выбрать",customLayout:t.jsx(H,{}),children:t.jsxs(qn,{children:[t.jsx(Ce,{children:t.jsx(ie,{value:y,onChange:B=>p(B)})}),t.jsx(Ce,{children:t.jsx(ie,{value:h,onChange:B=>d(B)})})]})})})]})},_n=n.div`
  position: relative;
  width: 245px;
`,On=n.div`
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
`,Nn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wn=n.span`
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
`,Hn=n.div`
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
`,Vn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Zn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Un=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Xn=n.div`
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
`,qn=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,Ce=n.div`
  flex: 1;
`,Gn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Jn=n.button`
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
`,Kn=({name:e,value:o,onChange:i,onBlur:r,onKeyPress:s,placeholder:l="8 (999) 500-50-50",customPlaceholder:u,tabIndex:g,disabled:j=!1,hasError:b=!1,errorMessage:w})=>{const[x,y]=m.useState(!1),p=m.useRef(null),h=!!(u&&!o&&!x),d=E=>{const A=E.replace(/\D/g,"").slice(0,11);let R="";return A.length>0&&(R+="8"),A.length>1&&(R+=` (${A.slice(1,4)}`),A.length>4&&(R+=`) ${A.slice(4,7)}`),A.length>7&&(R+=`-${A.slice(7,9)}`),A.length>9&&(R+=`-${A.slice(9,11)}`),R},I=E=>{const O=d(E.target.value),A={...E,target:{...E.target,name:e,value:O}};i(A)},k=E=>{y(!1),r?.(E)},P=E=>{s?.(E)};return t.jsxs(Qn,{children:[t.jsx(eo,{ref:p,name:e,type:"tel",value:o,onChange:I,onKeyPress:P,placeholder:h?"":l,maxLength:18,tabIndex:g,disabled:j,hasError:b,onFocus:()=>y(!0),onBlur:k,inputMode:"tel"}),u&&t.jsx(to,{isVisible:h,children:u}),b&&w&&t.jsx(no,{children:w})]})},Qn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,eo=n.input`
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
`,to=n.label`
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
`,no=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,oo=({tabs:e,activeTab:o,onChange:i,addButton:r,fontSize:s=14})=>{const l=e.find(u=>u.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(ro,{children:t.jsxs(io,{children:[e.map(u=>t.jsxs(so,{$isActive:o===u.id,onClick:()=>i(u.id),$fontSize:s,children:[u.label,o===u.id&&t.jsx(ao,{})]},u.id)),r&&t.jsx(lo,{children:r})]})}),l&&t.jsx(co,{children:l})]})},ro=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,io=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,so=n.li`
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
`,ao=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,lo=n.li`
  margin-left: auto;
  padding: 4px 0;
`,co=n.div`
  margin-top: 20px;
`,po=({mode:e,primaryValue:o,secondaryValue:i,placeholder:r="Выберите значение",onSelect:s,onClear:l,disabled:u=!1,hasError:g=!1,errorMessage:j="",customIcon:b})=>{const x=b||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(fo,{children:[t.jsx(go,{children:o||"Не указано"}),i&&t.jsx(bo,{children:i})]}):t.jsxs(uo,{children:[t.jsxs(ho,{children:[t.jsx(xo,{type:"text",value:o||"",placeholder:r,readOnly:!0,disabled:u}),o&&!u&&t.jsx(wo,{type:"button",onClick:l,"aria-label":"Очистить",children:"×"})]}),!u&&t.jsx(mo,{type:"button",onClick:s,"aria-label":"Выбрать",children:x}),g&&j&&t.jsx(vo,{children:j})]})},uo=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,ho=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,xo=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,fo=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,go=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,bo=n.span`
  font-size: 13px;
  color: #666;
`,mo=n.button`
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
`,wo=n.button`
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
`,vo=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,de=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,yo=({total:e})=>t.jsx("div",{children:t.jsxs(ko,{children:["Всего: ",e]})}),ko=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,jo=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,Co=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,$o=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,So=n.span`
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
`,Mo=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Lo=({checked:e,onChange:o,disabled:i})=>{const r=()=>{i||o(!e)};return t.jsxs($o,{children:[t.jsx(Mo,{checked:e,onChange:r,disabled:i}),t.jsx(So,{checked:e,disabled:i})]})},Do=({id:e,name:o,checked:i,onChange:r,children:s})=>t.jsxs(To,{htmlFor:e,children:[t.jsx(Eo,{type:"radio",id:e,name:o,checked:i,onChange:r}),s]}),To=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Eo=n.input`
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
`,Io=({percentage:e,onChange:o,draggable:i=!1,colors:r={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const s=m.useRef(null),[l,u]=m.useState(!1),g=x=>{!i||!o||(x.preventDefault(),u(!0),w(x))},j=x=>{!l||!o||w(x)},b=()=>{u(!1)},w=x=>{if(!s.current||!o)return;const y=s.current.getBoundingClientRect();let h=(x.clientX-y.left)/y.width*100;h=Math.max(0,Math.min(100,h)),o(Math.round(h))};return m.useEffect(()=>{if(l)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",b)}},[l]),t.jsxs(Po,{ref:s,$draggable:i,onMouseDown:g,children:[t.jsx(Ro,{$secondaryColor:r.secondary}),t.jsx(Bo,{$percentage:e,$primaryColor:r.primary}),i&&t.jsx(zo,{$percentage:e,$primaryColor:r.primary})]})},Po=n.div`
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
`,Ro=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Bo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,zo=n.div`
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
`,Ao=["zoomControl","fullscreenControl"];let re=null;const Fo=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(re||(re=new Promise((o,i)=>{const r=document.createElement("script"),s=e?`&apikey=${e}`:"";r.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`,r.async=!0,r.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):i(new Error("Yandex Maps failed to load"))},r.onerror=()=>i(new Error("Failed to load Yandex Maps script")),document.head.appendChild(r)})),re),_o=({onLocationSelect:e,initialAddress:o="",initialLat:i=55.751244,initialLon:r=37.618423,apiKey:s,zoom:l=12,height:u=400,width:g="100%",inputPlaceholder:j="Введите адрес или название места",searchButtonLabel:b="Найти",draggablePlacemark:w=!0,controls:x=Ao,showSearch:y=!0,className:p,style:h,onError:d})=>{const[I,k]=m.useState(null),[P,E]=m.useState(o),[O,A]=m.useState(o),[R,H]=m.useState(!1),B=m.useRef(null);m.useEffect(()=>{let F=!1,v;return(async()=>{try{const M=await Fo(s);if(F||!B.current)return;v=new M.Map(B.current,{center:[i,r],zoom:l,controls:x});const D=new M.Placemark([i,r],{},{draggable:w});v.geoObjects.add(D),v.events.add("click",N=>{const V=N.get("coords");_(V,D,v)}),D.events.add("dragend",()=>{const N=D.geometry.getCoordinates();_(N,D,v)}),k(v),H(!0)}catch(M){d&&M instanceof Error&&d(M)}})(),()=>{F=!0,v&&v.destroy()}},[s,i,r,l,x,w,d]);const _=async(F,v,c)=>{if(window.ymaps)try{const N=(await window.ymaps.geocode(F)).geoObjects.get(0).getAddressLine();v.geometry.setCoordinates(F),c.panTo(F,{flying:!0}),A(N),E(N),e(N,F[0],F[1])}catch(M){d&&M instanceof Error&&d(M)}},W=async()=>{if(!(!P.trim()||!window.ymaps||!I))try{const v=(await window.ymaps.geocode(P)).geoObjects.get(0);if(v){const c=v.geometry.getCoordinates(),M=v.properties.get("boundedBy");I.setBounds(M,{checkZoomRange:!0});const D=new window.ymaps.Placemark(c,{},{draggable:w});I.geoObjects.removeAll(),I.geoObjects.add(D);const N=v.getAddressLine();A(N),e(N,c[0],c[1]),D.events.add("dragend",()=>{const V=D.geometry.getCoordinates();_(V,D,I)})}}catch(F){d&&F instanceof Error&&d(F)}};return t.jsxs(Oo,{className:p,style:h,children:[y&&t.jsxs(No,{children:[t.jsx(ce,{type:"text",value:P,onChange:F=>E(F.target.value),placeholder:j,onKeyPress:F=>F.key==="Enter"&&W(),disabled:!R}),t.jsx(Wo,{onClick:W,disabled:!R,children:b})]}),t.jsxs(Ho,{children:["Выбранный адрес: ",t.jsx("strong",{children:O||"Не выбран"})]}),t.jsx(Yo,{ref:B,$height:u,$width:g}),t.jsx(Vo,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Oo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,No=n.div`
  display: flex;
  gap: 8px;
`,Wo=n.button`
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
`,Ho=n.div`
  font-size: 14px;
  color: #374151;
`,Vo=n.div`
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
`;function se(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const i=e.replace(/[^\d-]/g,"");if(!i||i==="-"||i==="")return`0${o}`;const r=parseInt(i,10);if(isNaN(r))return`0${o}`;const s=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(r);return!0?`${s}${o}`:s}function Zo(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Uo=({title:e,data:o,maxValue:i,step:r,height:s=300,titleFontSize:l})=>{const[u,g]=m.useState(null),j=[];for(let w=0;w<=i;w+=r)j.push(w);const b=o.length>0?o[0].bars.map(w=>({name:w.name,color:w.color})):[];return t.jsxs(Xo,{children:[t.jsxs(de,{style:{marginTop:"0"},children:[t.jsx(pe,{style:{fontSize:l},children:e}),t.jsx(qo,{children:b.map((w,x)=>t.jsxs(Go,{children:[t.jsx(Jo,{color:w.color}),t.jsx(Ko,{children:w.name})]},x))})]}),t.jsxs(Qo,{height:s,children:[t.jsx(er,{children:j.map((w,x)=>t.jsx(tr,{children:w.toLocaleString()},x))}),t.jsxs(nr,{children:[t.jsxs(or,{children:[j.map((w,x)=>{const y=w/i*100;return t.jsx(rr,{position:100-y},`line-${x}`)}),o.map((w,x)=>t.jsxs(ir,{onMouseEnter:()=>g(x),onMouseLeave:()=>g(null),children:[w.bars.map((y,p)=>{const h=w.bars.slice(p+1).reduce((d,I)=>d+I.value,0);return t.jsx(sr,{height:y.value/i*100,offset:h/i*100,color:y.color,isHovered:u!==null&&u!==x},p)}),u===x&&t.jsxs(cr,{children:[t.jsxs(dr,{children:[t.jsxs(pr,{children:["Всего: ",se(w.total.toString())]}),w.bars.map((y,p)=>t.jsxs(ur,{children:[y.name,": ",se(y.value.toString())]},p))]}),t.jsx(hr,{})]})]},x))]}),t.jsx(ar,{children:o.map((w,x)=>t.jsx(lr,{style:{flex:1,textAlign:"center"},children:w.label},x))})]})]})]})},Xo=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,qo=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,Go=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Jo=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Ko=n.span`
  font-size: 14px;
  color: #4b5563;
`,Qo=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,er=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,tr=n.span`
  font-size: 12px;
  color: #6b7280;
`,nr=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,or=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,rr=n.div`
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
`,ir=n.div`
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
`,sr=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,ar=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,lr=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,cr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,dr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,pr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,ur=n.div`
  margin-bottom: 2px;
`,hr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,xr=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,fr=({title:e,data:o,xAxisLabel:i,yAxisLabel:r,maxX:s,maxY:l,minY:u,xStep:g,yStep:j,height:b=300,showLegend:w=!0,xAxisCustomLabels:x,showTooltip:y=!0,titleFontSize:p="30px"})=>{const[h,d]=m.useState(null),[I,k]=m.useState({x:0,y:0}),P=m.useRef(null),E=m.useRef(null),O=Math.max(...o.map(v=>v.x),s),A=[];for(let v=0;v<=O;v+=g)A.push(v);const R=[];for(let v=u;v<=l;v+=j)R.push(v);const H=x||A.map(v=>v.toString()),B=w?Array.from(new Set(o.filter(v=>v.label).map(v=>v.label))).map(v=>{const c=o.find(M=>M.label===v);return{name:v,color:c.color}}):[],_={};o.forEach(v=>{const c=v.label||"default";_[c]||(_[c]=[]),_[c].push(v)});const W=v=>v/O*100,F=v=>{const c=l-u;return 100-(v-u)/c*100};return m.useEffect(()=>{if(h&&E.current){const v=E.current.getBoundingClientRect(),c=W(h.x)/100*v.width,M=F(h.y)/100*v.height;k({x:c+v.left,y:M+v.top})}},[h,s,l,u]),t.jsxs(gr,{children:[t.jsxs(de,{style:{marginTop:"0"},children:[t.jsx(pe,{style:{fontSize:p},children:e}),w&&B.length>0&&t.jsx(br,{children:B.map((v,c)=>t.jsxs(mr,{children:[t.jsx(wr,{color:v.color}),t.jsx(vr,{children:v.name})]},c))})]}),t.jsxs(yr,{height:b,children:[t.jsxs(kr,{children:[R.map((v,c)=>t.jsx(jr,{children:v.toLocaleString()},c)),t.jsx($e,{children:r})]}),t.jsxs(Cr,{ref:E,children:[R.map((v,c)=>t.jsx($r,{position:F(v)},`hline-${c}`)),Object.values(_).map((v,c)=>v.map((M,D)=>{if(D===0)return null;const N=v[D-1],V=W(N.x),Z=F(N.y),C=W(M.x),L=F(M.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${V}%`,y1:`${Z}%`,x2:`${C}%`,y2:`${L}%`,stroke:M.color,strokeWidth:"1"})},`line-${c}-${D}`)})),o.map((v,c)=>t.jsx(Sr,{x:W(v.x),y:F(v.y),color:v.color,onMouseEnter:()=>d(v),onMouseLeave:()=>d(null),isHovered:h?.label===v.label},c))]})]}),y&&h&&t.jsxs(Dr,{ref:P,style:{left:I.x,top:I.y},children:[t.jsxs(Tr,{children:[h.name&&t.jsx(Er,{children:h.name}),t.jsx(Ir,{children:h.y.toLocaleString()})]}),t.jsx(Pr,{})]}),t.jsxs(Mr,{children:[H.map((v,c)=>{const D=A[c]/O*100;return t.jsx(Lr,{style:{left:`${D}%`,transform:"translateX(-50%)"},children:v},c)}),i&&t.jsx($e,{children:i})]})]})},gr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,br=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,mr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wr=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,vr=n.span`
  font-size: 14px;
  color: #4b5563;
`,yr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,kr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,jr=n.span`
  font-size: 12px;
  color: #6b7280;
`,$e=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,Cr=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,$r=n.div`
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
`,Sr=n.div`
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
`,Mr=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Lr=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Dr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${xr} 0.15s ease-out forwards;
`,Tr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Er=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Ir=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Pr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Rr=({images:e,initialIndex:o,onClose:i})=>{const[r,s]=m.useState(o),[l,u]=m.useState(0),g=()=>{s(x=>x>0?x-1:e.length-1),u(0)},j=()=>{s(x=>x<e.length-1?x+1:0),u(0)},b=()=>{u(x=>(x+90)%360)},w=x=>{x.key==="Escape"?i():x.key==="ArrowLeft"?g():x.key==="ArrowRight"?j():(x.key==="r"||x.key==="к")&&b()};return t.jsx(Br,{onClick:i,onKeyDown:w,tabIndex:0,children:t.jsxs(zr,{onClick:x=>x.stopPropagation(),children:[t.jsx(Ar,{onClick:i,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Fr,{children:t.jsx(_r,{onClick:b,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Or,{children:[t.jsx(Se,{$position:"left",onClick:g,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Nr,{src:e[r],alt:`Photo ${r+1}`,$rotation:l}),t.jsx(Se,{$position:"right",onClick:j,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Wr,{children:e.map((x,y)=>t.jsx(Yr,{$active:y===r,onClick:()=>{s(y),u(0)}},y))})]})})},Br=n.div`
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
`,zr=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ar=n.button`
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
`,Fr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,_r=n.button`
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
`,Or=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Nr=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Se=n.button`
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
`,Wr=n.div`
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
`,Re=({isOpen:e,callPhone:o,error:i,onClose:r})=>{const[s,l]=m.useState(!1);if(!e)return null;const u=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),g=()=>{u?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),l(!0),setTimeout(()=>l(!1),2e3))};return t.jsx(Hr,{onClick:r,children:t.jsxs(Vr,{onClick:j=>j.stopPropagation(),children:[t.jsx(Zr,{children:"Подтверждение авторизации"}),t.jsx(Me,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Ur,{onClick:g,title:u?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!u&&s&&t.jsx(Xr,{children:"Скопировано!"})]}),t.jsx(Me,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),i&&t.jsx(qr,{children:i})]})})},Hr=n.div`
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
`,Vr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Zr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Me=n.p`
  margin-bottom: 15px;
  color: #555;
`,Ur=n.div`
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
`,Xr=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,qr=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,Be=m.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),Gr=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),Jr=({items:e,bottomItems:o=[],bottomContent:i,logo:r,arrowIcon:s,collapsed:l,onToggle:u,selectedKey:g,onSelect:j,autoCollapseOnSelect:b=!1,width:w="315px",collapsedWidth:x="85px",className:y,style:p,mobileBreakpoint:h=768,showBottomLabels:d=!0,children:I})=>{const k=m.useContext(Be),[P,E]=m.useState(window.innerWidth<=h);m.useEffect(()=>{const f=()=>{E(window.innerWidth<=h)};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[h]);const[O,A]=m.useState(l??k.collapsed??!1),[R,H]=m.useState(null),[B,_]=m.useState(g??k.selectedSideMenuItem??null),[W,F]=m.useState({visible:!1,x:0,y:0,items:[]}),v=m.useRef(null),c=l??k.collapsed??O,M=f=>{A(f),k.toggleCollapsed(),u?.(f)},D=g??k.selectedSideMenuItem??B,N=f=>{_(f),k.setSelectedSideMenuItem(f)};m.useEffect(()=>{l!==void 0&&(A(l),l&&H(null))},[l]),m.useEffect(()=>{g!==void 0&&N(g)},[g]),m.useEffect(()=>{const f=()=>F(T=>({...T,visible:!1}));return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[]);const V=()=>{const f=!c;M(f),f&&H(null)},Z=f=>{f.disabled||f.hidden||(N(f.key),j?.(f),f.onClick?.(f),b&&(M(!0),H(null)))},C=f=>{H(T=>T===f?null:f)},L=(f,T)=>{const z=(f.children?.length||0)>0;if(c&&z){T.stopPropagation();const Y=T.currentTarget.getBoundingClientRect();F({visible:!0,x:Y.right+6,y:Y.top,items:f.children||[]});return}z?C(f.key):Z(f)},a=(f,T=!1)=>f.filter(z=>!z.hidden).map(z=>{const Y=(z.children?.length||0)>0,U=R===z.key,G=D===z.key||!!z.children&&z.children.some(J=>J.key===D);return t.jsxs(m.Fragment,{children:[t.jsxs(ci,{$collapsed:c,$selected:G,onClick:J=>L(z,J),$disabled:z.disabled,title:z.label,children:[z.icon&&t.jsx(pi,{$collapsed:c,children:z.icon}),!c&&t.jsx(di,{children:z.label}),!c&&Y&&t.jsx(hi,{$expanded:U,children:"▾"})]}),!c&&Y&&U&&t.jsx(ui,{children:a(z.children||[],!0)})]},z.key)}),$=m.useMemo(()=>W.visible?t.jsx(xi,{style:{left:W.x,top:W.y},children:W.items.map(f=>t.jsx(fi,{onClick:()=>{Z(f),F({visible:!1,x:0,y:0,items:[]})},$selected:D===f.key,children:f.label},f.key))}):null,[W,D]),S=()=>{const f=[...e,...o].filter(T=>!T.hidden);return t.jsx(ei,{children:f.map(T=>{const z=D===T.key;return t.jsxs(ti,{$selected:z,onClick:()=>Z(T),$disabled:T.disabled,children:[T.icon&&t.jsx(ni,{$selected:z,children:T.icon}),d&&t.jsx(oi,{$selected:z,children:T.label})]},T.key)})})};return P?t.jsxs(Kr,{className:y,style:p,children:[t.jsx(Qr,{children:I}),S()]}):t.jsxs(ri,{ref:v,$collapsed:c,$width:w,$collapsedWidth:x,className:y,style:p,children:[t.jsxs(ii,{children:[t.jsx(si,{onClick:V,"aria-label":"Переключить меню",children:s??t.jsx(Gr,{collapsed:c})}),!c&&r&&t.jsx(ai,{children:r})]}),t.jsxs(li,{children:[t.jsx(Le,{children:a(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(De,{}),t.jsx(Le,{children:a(o)})]}),i&&t.jsxs(t.Fragment,{children:[(o.length>0||e.length>0)&&t.jsx(De,{}),t.jsx(bi,{$collapsed:c,children:i})]})]}),$,t.jsx(gi,{$collapsed:c}),I]})},Kr=n.div`
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
  width: ${({$collapsed:e,$width:o,$collapsedWidth:i})=>e?i:o};
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
`,De=n.div`
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
`,bi=n.div`
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
`,mi=e=>{const o=e.replace(/\D/g,""),r=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let s="";return r.length>0&&(s+="8"),r.length>1&&(s+=` (${r.slice(1,4)}`),r.length>4&&(s+=`) ${r.slice(4,7)}`),r.length>7&&(s+=`-${r.slice(7,9)}`),r.length>9&&(s+=`-${r.slice(9,11)}`),s},ze=({value:e,onChange:o,placeholder:i="8 (xxx) xxx-xx-xx",tabIndex:r})=>{const s=l=>{const u=mi(l.target.value);o(u)};return t.jsx(wi,{type:"text",value:e,onChange:s,placeholder:i,maxLength:18,tabIndex:r})},wi=n.input`
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
`,Ae=(e,o)=>q("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}}),Fe=(e,o,i,r)=>q("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,user_type:i,name:r}}),vi=()=>q("/auth/session/info",{method:"GET"}),yi=({isOpen:e,onClose:o,onSubmit:i,error:r,isLoading:s=!1})=>{const[l,u]=m.useState("");if(!e)return null;const g=j=>{j.preventDefault(),i(l)};return t.jsx(ki,{onClick:o,children:t.jsx(ji,{onClick:j=>j.stopPropagation(),children:t.jsxs(Ci,{onSubmit:g,children:[t.jsx($i,{children:"Как вас зовут?"}),t.jsxs(Si,{children:[t.jsx(ce,{type:"text",value:l,onChange:j=>u(j.target.value),placeholder:"Иванов Иван Иванович",disabled:s,autoFocus:!0,style:{flex:1}}),t.jsx(Mi,{type:"submit",disabled:s||!l.trim(),children:s?"...":"→"})]}),r&&t.jsx(Li,{children:r})]})})})},ki=n.div`
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
`,ji=n.div`
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
`,Mi=n(ne)`
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
`,Di=({onLoginSuccess:e,userType:o="delivery_operator",title:i="Авторизация",submitLabel:r="Войти",placeholder:s="8 (xxx) xxx-xx-xx",supportPhone:l="8 989 924 24 24",supportLinkUrl:u="https://waypay.one",supportLinkText:g="waypay.one",className:j,style:b,pollingIntervalMs:w=3e3,enableRegistration:x=!1})=>{const[y,p]=m.useState(!1),[h,d]=m.useState(""),[I,k]=m.useState(!1),[P,E]=m.useState(""),[O,A]=m.useState(""),[R,H]=m.useState(!1),[B,_]=m.useState(!1),[W,F]=m.useState(""),[v,c]=m.useState(""),[M,D]=m.useState(null),N=m.useRef(void 0);m.useEffect(()=>()=>{N.current&&clearInterval(N.current)},[]);const V=S=>{const f=S.replace(/\D/g,"");return f?f.startsWith("8")?`+7${f.slice(1)}`:f.startsWith("7")?`+${f}`:`+${f}`:""},Z=()=>{k(!1),_(!1),F(""),c(""),D(null),N.current&&window.clearInterval(N.current)},C=async S=>{if(S.preventDefault(),!h){A("Введите номер телефона");return}p(!0),A("");const f=V(h);try{const T=await Ae(f,o);D({phone:f,checkId:T.check_id,callPhone:T.call_phone}),x&&"name_required"in T&&T.name_required?(_(!0),E(T.call_phone)):!x&&"name_required"in T&&T.name_required?(A("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),D(null)):(E(T.call_phone),k(!0),a(f,T.check_id))}catch(T){console.error("Auth error:",T),A("Не удалось инициировать авторизацию. Проверьте номер.")}finally{p(!1)}},L=async S=>{if(!S.trim()){c("Введите ФИО");return}if(M){p(!0),c("");try{F(S),_(!1),k(!0),a(M.phone,M.checkId,S)}catch(f){console.error("Registration error:",f),c("Не удалось завершить регистрацию")}finally{p(!1)}}},a=(S,f,T)=>{N.current&&window.clearInterval(N.current),N.current=window.setInterval(()=>{$(S,f,T)},w)},$=async(S,f,T)=>{if(!R){H(!0);try{const z=await Fe(S,f,o,T||W);z.access_token&&z.refresh_token&&(N.current&&window.clearInterval(N.current),k(!1),_(!1),F(""),D(null),e(z.access_token))}catch(z){console.error("Verification error:",z)}finally{H(!1)}}};return t.jsxs(Ti,{className:j,style:b,children:[t.jsxs(Ei,{children:[t.jsxs(Ii,{onSubmit:C,children:[t.jsx(Pi,{children:i}),t.jsx(Ri,{children:t.jsx(Bi,{children:t.jsx(ze,{value:h,onChange:S=>d(S),placeholder:s})})}),O&&t.jsx(Oi,{children:t.jsx("span",{children:O})}),t.jsx(zi,{type:"submit",disabled:y,children:y?"Загрузка...":r})]}),t.jsxs(Ai,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(Fi,{href:`tel:${l}`,children:l}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(_i,{href:u,target:"_blank",rel:"noreferrer",children:g})]})]}),t.jsx(yi,{isOpen:B,onClose:Z,onSubmit:L,error:v,isLoading:y}),t.jsx(Re,{isOpen:I,onClose:Z,callPhone:P,error:O})]})},Ti=n.div`
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
`,_e=e=>{let o=0;for(let r=0;r<e.length;r++)o=e.charCodeAt(r)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},Ni=e=>!e||!e.trim()?"?":e.split(" ").filter(r=>r.length>0).map(r=>r[0].toUpperCase()).join("").slice(0,2)||"?",Wi=(e,o=100)=>{const i=document.createElement("canvas");i.width=o,i.height=o;const r=i.getContext("2d");if(!r)return"";const s=_e(e);r.fillStyle=s,r.beginPath(),r.arc(o/2,o/2,o/2,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff";const l=o/2;r.font=`bold ${l}px "Manrope", Arial, sans-serif`,r.textAlign="center",r.textBaseline="middle";const u=l*.1;return r.fillText(e,o/2,o/2+u),i.toDataURL("image/png")},Yi=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const i=o.getDate().toString().padStart(2,"0"),r=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear();return`${i}-${r}-${s}`};function Hi(e){return new Date(e)}const Oe=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const i=new Date;if(o>i){const w=Math.floor((o.getTime()-i.getTime())/1e3),x=Math.floor(w/60),y=Math.floor(x/60),p=Math.floor(y/24);return w<10?"скоро":w<60?`через ${w} секунд`:x===1?"через минуту":x<60?`через ${x} минут`:y===1?"через час":y<24?`через ${y} часов`:p===1?"завтра":p<7?`через ${p} дней`:"в будущем"}const r=Math.floor((i.getTime()-o.getTime())/1e3),s=Math.floor(r/60),l=Math.floor(s/60),u=Math.floor(l/24),g=Math.floor(u/7),j=Math.floor(u/30),b=Math.floor(u/365);if(r<10)return"только что";if(r<60){const w=Math.max(1,r);return w===1?"секунду назад":w<5?`${w} секунды назад`:`${w} секунд назад`}return s<60?s===1?"минуту назад":s<5?`${s} минуты назад`:`${s} минут назад`:l<24?l===1?"час назад":l<5?`${l} часа назад`:`${l} часов назад`:u<7?u===1?"вчера":u===2?"позавчера":`${u} дня назад`:g<4?g===1?"неделю назад":g<5?`${g} недели назад`:`${g} недель назад`:j<12?j===1?"месяц назад":j<5?`${j} месяца назад`:`${j} месяцев назад`:b===1?"год назад":b<5?`${b} года назад`:`${b} лет назад`}catch(i){return console.error("Ошибка форматирования относительного времени:",i),"ошибка даты"}},Ne=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Vi=(e,o={})=>{const{useExactAfterMonths:i=6,includeTime:r=!0}=o,s=new Date(e);return isNaN(s.getTime()),Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24*30))>=i?r?Ne(s):s.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Oe(s)};exports.API_BASE_URL=le;exports.AddButton=ct;exports.AuthCallModal=Re;exports.AuthPage=Di;exports.BackButton=ft;exports.BaseModal=Ee;exports.Checkbox=Wt;exports.ColumnChart=Uo;exports.ContextMenu=ae;exports.CountInfoTitle=yo;exports.CustomCalendar=ie;exports.CustomInput=ce;exports.CustomPhoneInput=ze;exports.CustomSelect=Mt;exports.CustomTable=Je;exports.CustomTextArea=yn;exports.CustomTitle=pe;exports.DefaultButton=ne;exports.DeleteButton=mt;exports.EditButton=vt;exports.EntitySelectContainer=po;exports.ExportButton=jt;exports.InputContainer=xn;exports.InputLabel=hn;exports.InputRow=un;exports.InputTitle=jo;exports.ModalInfoTitle=Co;exports.Pagination=wn;exports.PeriodField=Fn;exports.PhoneModalInput=Kn;exports.PhotoViewerModal=Rr;exports.ProgressBar=Io;exports.RadioButton=Do;exports.ScatterPlot=fr;exports.SideMenu=Jr;exports.SideMenuContext=Be;exports.Tabs=oo;exports.TitleField=de;exports.ToggleSwitch=Lo;exports.YandexMapSelector=_o;exports.apiRequest=q;exports.authStorage=ht;exports.confirmCallAuth=Fe;exports.formatDate=Yi;exports.formatExactDate=Ne;exports.formatMoney=se;exports.formatRelativeTime=Oe;exports.formatRelativeTimeExtended=Vi;exports.generateAvatar=Wi;exports.getInitials=Ni;exports.getSessionInfo=vi;exports.initiateCallAuth=Ae;exports.parseDateInput=Hi;exports.parseMoney=Zo;exports.stringToColor=_e;
