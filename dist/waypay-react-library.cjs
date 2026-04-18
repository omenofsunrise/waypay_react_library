"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const x=require("react"),n=require("styled-components"),X=require("framer-motion");var te={exports:{}},K={};var xe;function Ve(){if(xe)return K;xe=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(i,a,c){var d=null;if(c!==void 0&&(d=""+c),a.key!==void 0&&(d=""+a.key),"key"in a){c={};for(var g in a)g!=="key"&&(c[g]=a[g])}else c=a;return a=c.ref,{$$typeof:e,type:i,key:d,ref:a!==void 0?a:null,props:c}}return K.Fragment=o,K.jsx=r,K.jsxs=r,K}var Q={};var he;function Ue(){return he||(he=1,process.env.NODE_ENV!=="production"&&(function(){function e(p){if(p==null)return null;if(typeof p=="function")return p.$$typeof===O?null:p.displayName||p.name||null;if(typeof p=="string")return p;switch(p){case S:return"Fragment";case P:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case Y:return"SuspenseList";case N:return"Activity"}if(typeof p=="object")switch(typeof p.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),p.$$typeof){case l:return"Portal";case E:return p.displayName||"Context";case I:return(p._context.displayName||"Context")+".Consumer";case T:var D=p.render;return p=p.displayName,p||(p=D.displayName||D.name||"",p=p!==""?"ForwardRef("+p+")":"ForwardRef"),p;case A:return D=p.displayName||null,D!==null?D:e(p.type)||"Memo";case _:D=p._payload,p=p._init;try{return e(p(D))}catch{}}return null}function o(p){return""+p}function r(p){try{o(p);var D=!1}catch{D=!0}if(D){D=console;var F=D.error,j=typeof Symbol=="function"&&Symbol.toStringTag&&p[Symbol.toStringTag]||p.constructor.name||"Object";return F.call(D,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",j),o(p)}}function i(p){if(p===S)return"<>";if(typeof p=="object"&&p!==null&&p.$$typeof===_)return"<...>";try{var D=e(p);return D?"<"+D+">":"<...>"}catch{return"<...>"}}function a(){var p=v.A;return p===null?null:p.getOwner()}function c(){return Error("react-stack-top-frame")}function d(p){if(s.call(p,"key")){var D=Object.getOwnPropertyDescriptor(p,"key").get;if(D&&D.isReactWarning)return!1}return p.key!==void 0}function g(p,D){function F(){H||(H=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",D))}F.isReactWarning=!0,Object.defineProperty(p,"key",{get:F,configurable:!0})}function y(){var p=e(this.type);return V[p]||(V[p]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),p=this.props.ref,p!==void 0?p:null}function w(p,D,F,j,B,z){var W=F.ref;return p={$$typeof:u,type:p,key:D,props:F,_owner:j},(W!==void 0?W:null)!==null?Object.defineProperty(p,"ref",{enumerable:!1,get:y}):Object.defineProperty(p,"ref",{enumerable:!1,value:null}),p._store={},Object.defineProperty(p._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(p,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(p,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:B}),Object.defineProperty(p,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:z}),Object.freeze&&(Object.freeze(p.props),Object.freeze(p)),p}function b(p,D,F,j,B,z){var W=D.children;if(W!==void 0)if(j)if($(W)){for(j=0;j<W.length;j++)f(W[j]);Object.freeze&&Object.freeze(W)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(W);if(s.call(D,"key")){W=e(p);var Z=Object.keys(D).filter(function(J){return J!=="key"});j=0<Z.length?"{key: someKey, "+Z.join(": ..., ")+": ...}":"{key: someKey}",L[W+j]||(Z=0<Z.length?"{"+Z.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,j,W,Z,W),L[W+j]=!0)}if(W=null,F!==void 0&&(r(F),W=""+F),d(D)&&(r(D.key),W=""+D.key),"key"in D){F={};for(var G in D)G!=="key"&&(F[G]=D[G])}else F=D;return W&&g(F,typeof p=="function"?p.displayName||p.name||"Unknown":p),w(p,W,F,a(),B,z)}function f(p){k(p)?p._store&&(p._store.validated=1):typeof p=="object"&&p!==null&&p.$$typeof===_&&(p._payload.status==="fulfilled"?k(p._payload.value)&&p._payload.value._store&&(p._payload.value._store.validated=1):p._store&&(p._store.validated=1))}function k(p){return typeof p=="object"&&p!==null&&p.$$typeof===u}var h=x,u=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),O=Symbol.for("react.client.reference"),v=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,s=Object.prototype.hasOwnProperty,$=Array.isArray,m=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(p){return p()}};var H,V={},U=h.react_stack_bottom_frame.bind(h,c)(),M=m(i(c)),L={};Q.Fragment=S,Q.jsx=function(p,D,F){var j=1e4>v.recentlyCreatedOwnerStacks++;return b(p,D,F,!1,j?Error("react-stack-top-frame"):U,j?m(i(p)):M)},Q.jsxs=function(p,D,F){var j=1e4>v.recentlyCreatedOwnerStacks++;return b(p,D,F,!0,j?Error("react-stack-top-frame"):U,j?m(i(p)):M)}})()),Q}var fe;function Ze(){return fe||(fe=1,process.env.NODE_ENV==="production"?te.exports=Ve():te.exports=Ue()),te.exports}var t=Ze();const le=({x:e,y:o,items:r,onClose:i,...a})=>{const c=x.useRef(null),[d,g]=x.useState(null);x.useEffect(()=>{const h=u=>{c.current&&!c.current.contains(u.target)&&i()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i]);const w=(()=>{if(!c.current)return{x:e,y:o};const h=c.current.offsetWidth,u=c.current.offsetHeight,l=window.innerWidth,S=window.innerHeight;let C=e,P=o;return C+h>l&&(C=e-h),P+u>S&&(P=o-u),{x:C,y:P}})(),b=(h,u)=>{h.submenu?g(d===u?null:u):h.action&&(h.action(),i())},f=h=>{r[h].submenu&&g(h)},k=h=>{const u=h.relatedTarget;c.current?.contains(u)||g(null)};return t.jsx(qe,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:w.y,left:w.x},onClick:h=>h.stopPropagation(),onMouseLeave:k,...a,children:r.map((h,u)=>t.jsxs(Xe,{$hasSubmenu:!!h.submenu,$disabled:h.disabled,children:[t.jsx(Ge,{onClick:l=>{l.stopPropagation(),h.disabled||b(h,u)},onMouseEnter:()=>!h.disabled&&f(u),whileHover:h.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:h.color,$disabled:h.disabled,children:t.jsxs(Je,{children:[h.label,h.submenu&&t.jsx(Ke,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),h.submenu&&d===u&&t.jsx(Qe,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(le,{x:0,y:-u*40,items:h.submenu,onClose:()=>g(null)})})]},u))})},qe=n(X.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Xe=n.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,Ge=n(X.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Je=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Ke=n.span`
  color: #666;
  margin-left: 8px;
`,Qe=n(X.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,et=({columns:e,data:o,onRowDoubleClick:r,contextMenuActions:i=[],onSort:a,sortConfig:c,onRowClick:d,selectedRow:g,fixedHeight:y,hasTotalsRow:w,debtChecker:b,rowStyles:f={},isLoading:k})=>{const[h,u]=x.useState(null),[l,S]=x.useState(null),C=x.useRef(null),P=x.useRef(null),I=500,E=g!==void 0?g:h,T=M=>{!e[M].isSortable||!a||a(M)},Y=b||(M=>{const L=M[8];return typeof L=="string"?parseFloat(L.replace(/[^\d.]/g,""))>0:!1}),A=M=>{g===void 0&&u(M===E?null:M),d&&d(o[M],M)},_=(M,L)=>{r&&r(M,L)},N=(M,L)=>{if(i.length===0)return;M.preventDefault();const p="touches"in M?M.touches[0].clientX:M.clientX,D="touches"in M?M.touches[0].clientY:M.clientY;S({x:p,y:D,rowIndex:L})},O=(M,L)=>{M.preventDefault(),N(M,L)},v=(M,L)=>{i.length!==0&&(P.current&&clearTimeout(P.current),P.current=window.setTimeout(()=>{N(M,L)},I))},s=()=>{P.current&&(clearTimeout(P.current),P.current=null)},$=()=>{P.current&&window.clearTimeout(P.current)},m=()=>{S(null)};x.useEffect(()=>{const M=()=>{l&&m()};return document.addEventListener("click",M),()=>{document.removeEventListener("click",M),P.current&&clearTimeout(P.current)}},[l]);const H=(M,L,p)=>{if(L)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const D=f[M]||{};return M===E?{backgroundColor:D.backgroundColor||"#007D88",color:D.color||"#FFFFFF",fontWeight:D.fontWeight||"normal"}:p?{backgroundColor:D.backgroundColor||"#E8D8D8",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"}:o[M][o[M].length-1]===!1?{backgroundColor:D.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:D.fontWeight||"normal"}:{backgroundColor:D.backgroundColor||"#FFFFFF",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"}},V=(M,L,p)=>{if(L)return"#FFFFFF";const D=H(M,L,p);return D.hoverBackgroundColor?D.hoverBackgroundColor:M===E?"#007D88":p?"#E8D8D8CC":o[M][o[M].length-1]===!1?"#51D5B4CC":"#F3F4F6"},U=()=>{if(!l||i.length===0)return null;const M=(typeof i=="function"?i(o[l.rowIndex]):i).filter(L=>typeof L=="object"&&(typeof L.shouldShow!="function"||L.shouldShow(o[l.rowIndex])));return M.length===0?null:t.jsx(it,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:L=>L.stopPropagation(),children:t.jsx(le,{items:M.map(L=>{const p={label:L.label,color:L.color,disabled:L.disabled};return L.getSubmenu?p.submenu=L.getSubmenu(o[l.rowIndex]):L.action&&(p.action=()=>{L.action(o[l.rowIndex],l.rowIndex),m()}),p}),onClose:m,x:0,y:0})})};return t.jsx(ot,{ref:C,children:k?t.jsx(tt,{children:t.jsx(nt,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(rt,{children:[t.jsx(st,{children:t.jsx(ge,{children:e.map((M,L)=>!M.isHidden&&t.jsx(lt,{$isSortable:M.isSortable,$isActive:c?.key===L,onClick:()=>T(L),$align:M.align||"center",$isFirst:L===0,$isLast:L===e.length-1,children:t.jsxs(ct,{$align:M.align||"center",children:[M.name,M.isSortable&&t.jsx(dt,{$direction:c?.key===L?c.direction:"asc",animate:{rotate:c?.key===L&&c.direction==="desc"?180:0,color:c?.key===L?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},L))})}),t.jsx(at,{$fixedHeight:y,children:t.jsx(X.AnimatePresence,{children:o.map((M,L)=>{const p=!!(w&&L===o.length-1),D=!!(!p&&Y(M)),F=H(L,p,D),j=V(L,p,D);return t.jsx(ge,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:F.backgroundColor||"#FFFFFF",color:F.color||"inherit",fontWeight:F.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:L===o.length-1,$isSelected:L===E,$isTotalsRow:p,onClick:()=>!p&&A(L),onDoubleClick:()=>!p&&_(M,L),onContextMenu:B=>!p&&O(B,L),onTouchStart:B=>!p&&v(B,L),onTouchEnd:s,onTouchMove:$,whileHover:p?{}:{backgroundColor:j,transition:{duration:.15}},style:{backgroundColor:F.backgroundColor||"#FFFFFF",color:F.color||"inherit",fontWeight:F.fontWeight||"normal"},children:M.map((B,z)=>!e[z]?.isHidden&&t.jsx(pt,{$align:e[z]?.align||"center",$isFirst:z===0,$isLast:z===M.length-1,$isTotalsCell:p,$isBeforeTotals:p&&z<M.findIndex(W=>W==="Итого:"),children:B},z))},`row-${L}`)})})})]}),t.jsx(X.AnimatePresence,{children:U()})]})})},tt=n.div`
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
`,nt=n.div`
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
`,ot=n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,rt=n.table`
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
`,it=n(X.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,st=n.thead`
  text-align: center;
  position: relative;
`,at=n.tbody`
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
`,lt=n.th`
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
`,ct=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,dt=n(X.motion.span)`
  display: inline-flex;
  align-items: center;
`,pt=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,ut=({onClick:e,tooltip:o,size:r=32,margin:i})=>t.jsx(xt,{onClick:e,size:r,margin:i,title:o,children:t.jsx(ht,{size:r})}),xt=n.button`
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
`,ht=n.div`
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
`,ce="/api",ft="https://web.waypay.one:5001",gt="https://file.waypay.one/";async function q(e,o={}){const{method:r="GET",body:i,headers:a={},token:c,withCredentials:d=!0,isFormData:g=!1}=o,y=async b=>{const f={...a};g||(f["Content-Type"]="application/json"),b&&(f.Authorization=`Bearer ${b}`);const k=e.startsWith("http")?e:`${ce}${e}`;let h;return i&&(g?h=i:h=JSON.stringify(i)),await fetch(k,{method:r,headers:f,body:h,credentials:d?"include":"same-origin"})},w=async(b,f=!0)=>{const k=await y(b);if(k.ok){if(k.status===204)return null;const u=await k.text();if(!u)return null;try{return JSON.parse(u)}catch{return u}}if(k.status===401&&f){const u=await Ie();if(u)return w(u,!1)}let h=`Request failed with status ${k.status}`;try{const u=await k.text();if(u)try{const l=JSON.parse(u);l&&typeof l.error=="string"?h=l.error:typeof l=="string"?h=l:typeof l?.message=="string"&&(h=l.message)}catch{h=u}}catch{}throw new Error(h)};return w(c)}async function Ie(){const e=await fetch(`${ce}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const bt={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await q("/auth/session/info",{method:"GET"})}catch{return null}},async logout(e){try{await q("/auth/session/revoke",{method:"POST",headers:{"Content-Type":"application/json"},body:e?{token_id:e}:{}})}catch(o){throw console.error("Logout error:",o),o}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},mt=n.button`
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
`,wt=({children:e,onClick:o,disabled:r,...i})=>t.jsxs(mt,{onClick:o,disabled:r,...i,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"currentColor"})}),e]}),oe=({children:e="Подтвердить",icon:o,disabled:r=!1,bg:i,hoverBg:a,disabledBg:c,textColor:d,fullWidth:g=!1,minWidth:y,width:w,isPrimary:b=!0,...f})=>{const h=i?{bg:i,hoverBg:a||i,disabledBg:c||i,textColor:d||(b?"white":"black")}:b?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(vt,{disabled:r,$bg:h.bg,$hoverBg:h.hoverBg,$disabledBg:h.disabledBg,$textColor:h.textColor,$fullWidth:g,$minWidth:y,$width:w,...f,children:[o&&t.jsx(yt,{children:o}),t.jsx("span",{children:e})]})},vt=n.button`
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
`,yt=n.span`
  display: inline-flex;
  align-items: center;
`,kt=({onClick:e,tooltip:o,size:r=32})=>t.jsx(jt,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),jt=n.button`
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
`,Ct=({onClick:e,tooltip:o,size:r=32})=>t.jsx($t,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),$t=n.button`
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
`,St=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),Mt=({children:e="Экспорт",icon:o=t.jsx(St,{}),onExport:r,isExporting:i=!1,exportProgress:a=0,...c})=>{const d=async g=>{if(r)try{await r()}catch(y){console.error("Export error:",y)}c.onClick&&c.onClick(g)};return t.jsx(Et,{...c,onClick:d,disabled:i||c.disabled,children:i?t.jsxs(Dt,{children:[t.jsxs("span",{children:["Экспорт... ",a,"%"]}),t.jsx(Lt,{progress:a})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},Et=n.button`
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
`,Dt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,Lt=n.div`
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
`,Tt=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:a=!1,errorMessage:c,options:d,name:g,disabled:y=!1,required:w=!1,...b})=>{const[f,k]=x.useState(!1),[h,u]=x.useState(!1),l=x.useRef(null),S=!!(o&&!r&&!f),C=R=>{i&&!y&&i({target:{value:R,name:g}}),u(!1),k(!1)},P=R=>{l.current&&!l.current.contains(R.target)&&(u(!1),k(!1))},I=()=>{y||(u(!h),k(!h))};x.useEffect(()=>(document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}),[]);const E=d.find(R=>R.value===r),T=E?E.label:"";return t.jsxs(It,{ref:l,...b,children:[t.jsxs(Pt,{children:[t.jsxs(Rt,{hasError:a,isOpen:h,disabled:y,onClick:I,onFocus:()=>!y&&k(!0),onBlur:()=>k(!1),tabIndex:y?-1:0,children:[t.jsx(zt,{children:T||e&&t.jsx(Bt,{children:e})}),t.jsx(At,{isOpen:h,disabled:y,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:y?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h&&t.jsx(Ft,{children:d.map(R=>t.jsxs(_t,{$isSelected:R.value===r,onClick:()=>C(R.value),children:[t.jsx(Ot,{$isSelected:R.value===r,children:R.value===r&&t.jsx(Wt,{})}),t.jsx(Nt,{children:R.label})]},R.value))})]}),o&&t.jsx(Ht,{isVisible:S,children:o}),a&&c&&t.jsx(Yt,{children:c}),t.jsx(Vt,{name:g,value:r||"",onChange:()=>{},tabIndex:-1,required:w,children:d.map(R=>t.jsx("option",{value:R.value,children:R.label},R.value))})]})},It=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Pt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Rt=n.div`
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
`,zt=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bt=n.span`
  color: rgba(80, 85, 92, 1);
`,At=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,Ft=n.div`
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
`,_t=n.div`
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
`,Ot=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Wt=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Nt=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Ht=n.label`
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
`,Yt=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Vt=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Ut=({checked:e=!1,onChange:o,className:r,label:i,disabled:a=!1})=>{const[c,d]=x.useState(!1),g=()=>{a||!o||o(!e)},y=w=>{a||(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),g())};return t.jsxs(Zt,{className:r,onClick:g,onKeyPress:y,tabIndex:a?-1:0,disabled:a,children:[t.jsx(qt,{checked:e,isFocused:c,disabled:a,onMouseEnter:()=>!a&&d(!0),onMouseLeave:()=>!a&&d(!1),onFocus:()=>!a&&d(!0),onBlur:()=>!a&&d(!1),children:e&&t.jsx(Gt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:a,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:a?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Xt,{disabled:a,children:i})]})},Zt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,qt=n.div`
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
`,Xt=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Gt=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Jt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",be=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Kt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],se=({prefix:e="Дата:",value:o="",placeholder:r="Выберите дату",onChange:i,onReset:a})=>{const[c,d]=x.useState(!1),[g,y]=x.useState(new Date),[w,b]=x.useState(o?new Date(o):null),[f,k]=x.useState(!1),[h,u]=x.useState(!1),l=x.useRef(null),S=x.useRef(null),C=x.useRef(null);x.useEffect(()=>{const s=$=>{l.current&&!l.current.contains($.target)&&d(!1),S.current&&!S.current.contains($.target)&&k(!1),C.current&&!C.current.contains($.target)&&u(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),x.useEffect(()=>{b(o?new Date(o):null)},[o]);const P=s=>{const $=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate()));b(s);const m=$.toISOString().split("T")[0];i?.(m),d(!1)},I=()=>{const s=new Date;y(s);const m=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate())).toISOString().split("T")[0];i?.(m),d(!1)},E=()=>{b(null),i?.(""),a?.(),d(!1)},T=s=>{const $=new Date(g);$.setMonth(s),y($),k(!1)},R=s=>{const $=new Date(g);$.setFullYear(s),y($),u(!1)},Y=()=>{const s=g.getFullYear(),$=g.getMonth(),m=new Date(s,$,1),V=new Date(s,$+1,0).getDate(),U=m.getDay()===0?6:m.getDay()-1,M=[],L=35,p=new Date(s,$,0).getDate();for(let F=0;F<U;F++){const j=p-U+F+1,B=new Date(s,$-1,j),z=!!(w&&B.getDate()===w.getDate()&&B.getMonth()===w.getMonth()&&B.getFullYear()===w.getFullYear());M.push(t.jsx(re,{selected:z,onClick:()=>P(B),otherMonth:!0,children:j},`prev-${j}`))}for(let F=1;F<=V;F++){const j=new Date(s,$,F),B=!!(w&&j.getDate()===w.getDate()&&j.getMonth()===w.getMonth()&&j.getFullYear()===w.getFullYear());M.push(t.jsx(re,{selected:B,onClick:()=>P(j),children:F},`current-${F}`))}const D=L-M.length;for(let F=1;F<=D;F++){const j=new Date(s,$+1,F),B=!!(w&&j.getDate()===w.getDate()&&j.getMonth()===w.getMonth()&&j.getFullYear()===w.getFullYear());M.push(t.jsx(re,{selected:B,onClick:()=>P(j),otherMonth:!0,children:F},`next-${F}`))}return M},A=()=>w?w.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):r,_=()=>{const s=new Date().getFullYear(),$=[];for(let m=s-10;m<=s+10;m++)$.push(m);return $},N=s=>{s.preventDefault(),s.stopPropagation(),k(!f),u(!1)},O=s=>{s.preventDefault(),s.stopPropagation(),u(!h),k(!1)},v=s=>{const $=s==="next"?1:-1,m=new Date(g);m.setMonth(m.getMonth()+$),y(m)};return t.jsxs(Qt,{ref:l,children:[t.jsxs(en,{onClick:()=>d(!c),children:[e&&t.jsx(tn,{children:e}),t.jsx(nn,{isEmpty:!w,children:A()}),t.jsx(on,{src:Jt,alt:"Календарь"})]}),c&&t.jsxs(rn,{className:"calendar-container",children:[t.jsxs(sn,{children:[t.jsx(ye,{onClick:s=>{s.preventDefault(),s.stopPropagation(),v("prev")},onMouseDown:s=>s.preventDefault(),children:t.jsx(ke,{direction:"right"})}),t.jsxs(an,{children:[t.jsxs(dn,{ref:S,children:[t.jsxs(ln,{onClick:s=>N(s),onMouseDown:s=>s.preventDefault(),children:[be[g.getMonth()],t.jsx(me,{$open:f})]}),f&&t.jsx(we,{$width:120,onClick:s=>s.stopPropagation(),children:be.map((s,$)=>t.jsx(ve,{$selected:$===g.getMonth(),onClick:m=>{m.stopPropagation(),T($)},children:s},s))})]}),t.jsxs(pn,{ref:C,children:[t.jsxs(cn,{onClick:s=>O(s),onMouseDown:s=>s.preventDefault(),children:[g.getFullYear(),t.jsx(me,{$open:h})]}),h&&t.jsx(we,{$width:80,onClick:s=>s.stopPropagation(),children:_().map(s=>t.jsx(ve,{$selected:s===g.getFullYear(),onClick:$=>{$.stopPropagation(),R(s)},children:s},s))})]})]}),t.jsx(ye,{onClick:s=>{s.preventDefault(),s.stopPropagation(),v("next")},onMouseDown:s=>s.preventDefault(),children:t.jsx(ke,{direction:"left"})})]}),t.jsx(un,{children:Kt.map(s=>t.jsx(xn,{children:s},s))}),t.jsx(hn,{children:Y()}),t.jsxs(fn,{children:[t.jsx(je,{onClick:E,children:"Удалить"}),t.jsx(je,{onClick:I,children:"Сегодня"})]})]})]})},Qt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,en=n.div`
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
`,tn=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,nn=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,on=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,rn=n.div`
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
`,sn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,an=n.div`
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
`,ln=n(Pe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,cn=n(Pe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,dn=n.div`
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
`,un=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,xn=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,hn=n.div`
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
`,fn=n.div`
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
`,gn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,bn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,mn=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,de=({placeholder:e="",customPlaceholder:o,value:r,inputType:i="text",onChange:a,hasError:c=!1,errorMessage:d,...g})=>{const[y,w]=x.useState(!1),b=!!(o&&!r&&!y),f=u=>{if(!a)return;let l=u.target.value;switch(i){case"number":/^\d*$/.test(l)&&a?.(u);break;case"rubles":{const C=u.target.selectionStart,P=u.target.value;let I=P.replace(/[^\d]/g,"");if(I===""){u.target.value="",a(u);break}const E=parseInt(I,10);if(!isNaN(E)){let T=E.toLocaleString("ru-RU");T+=" ₽";const R=k(P,C||0),Y=h(T,R);u.target.value=T,a(u),setTimeout(()=>{u.target.setSelectionRange(Y,Y)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const C=l.split(".");C.length>2&&(l=C[0]+"."+C.slice(1).join("")),C.length===2&&C[1].length>2&&(l=C[0]+"."+C[1].slice(0,2));const P=parseFloat(l);if(isNaN(P)||(P>100?l="100":P<0&&(l="0")),l&&l!==""){l+=" %";const I=u.target.selectionStart||0,E=l.replace(" %","");u.target.value=l,a(u),setTimeout(()=>{I<E.length&&u.target.setSelectionRange(I,I)},0)}else u.target.value=l,a(u);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let S=l.split(" ").filter(C=>C.length>0);S=S.slice(0,3),l=S.map(C=>{if(C.startsWith("-")&&(C=C.substring(1)),(C.match(/-/g)||[]).length>1){const I=C.split("-");C=I[0]+"-"+I.slice(1).join("")}return C.includes("-")?C.split("-").map((I,E)=>I.length===0?"":(E>0,I[0].toUpperCase()+I.slice(1).toLowerCase())).join("-"):C.length>0?C[0].toUpperCase()+C.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&u.target.value.length>0&&u.target.value[u.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),u.target.value=l,a(u);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),u.target.value=l,a(u);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),r?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),u.target.value=l,a(u);break}default:a(u);break}},k=(u,l)=>{let S=0;for(let C=0;C<Math.min(l,u.length);C++)/\d/.test(u[C])&&S++;return S},h=(u,l)=>{let S=0;for(let C=0;C<u.length;C++){if(S>=l)return C;/\d/.test(u[C])&&S++}return u.length};return t.jsxs(wn,{children:[t.jsx(vn,{...g,value:r,placeholder:b?"":e,onFocus:()=>w(!0),onBlur:u=>{w(!1),g.onBlur?.(u)},onChange:f,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),o&&t.jsx(yn,{isVisible:b,children:o}),c&&d&&t.jsx(kn,{children:d})]})},wn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,vn=n.input`
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
`,yn=n.label`
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
`,kn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,jn=({total:e,current:o=1,onChange:r,itemsPerPage:i=10})=>{const a=Math.ceil(e/i),[c,d]=x.useState(o),g=w=>{w<1||w>a||w===c||(d(w),r?.(w))},y=()=>{const w=[];let f=1,k=a;if(a>5){const h=Math.floor(2.5);f=Math.max(c-h,1),k=Math.min(c+h,a),c<=h+1?k=5:c>=a-h&&(f=a-5+1)}for(let h=f;h<=k;h++)w.push(t.jsx(ee,{active:h===c,onClick:()=>g(h),children:h},h));return f>1&&(f>2&&w.unshift(t.jsx(ee,{children:"..."},"start-ellipsis")),w.unshift(t.jsx(ee,{active:c===1,onClick:()=>g(1),children:"1"},1))),k<a&&(k<a-1&&w.push(t.jsx(ee,{children:"..."},"end-ellipsis")),w.push(t.jsx(ee,{active:a===c,onClick:()=>g(a),children:a},a))),w};return t.jsxs(Cn,{children:[t.jsx(Ce,{disabled:c===1,onClick:()=>g(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),y(),t.jsx(Ce,{disabled:c===a,onClick:()=>g(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===a?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},Cn=n.div`
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
`,$n=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:a=!1,errorMessage:c,rows:d=3,...g})=>{const[y,w]=x.useState(!1),b=!!(o&&!r&&!y);return t.jsxs(Sn,{children:[t.jsx(Mn,{...g,value:r,placeholder:b?"":e,onFocus:()=>w(!0),onBlur:f=>{w(!1),g.onBlur?.(f)},onChange:i,hasError:a,rows:d}),o&&t.jsx(En,{isVisible:b,children:o}),a&&c&&t.jsx(Dn,{children:c})]})},Sn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Mn=n.textarea`
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
`,En=n.label`
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
`,Dn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Re=({title:e,onClose:o,onCancel:r,onSave:i,children:a,isSaveDisabled:c=!1,isSubmitting:d=!1,mode:g="create",hideSaveButton:y=!1,hideCanselButton:w=!1,width:b="560px",saveButtonText:f="Сохранить",customLayout:k})=>{const h=g==="view",u=x.useRef(null);x.useEffect(()=>{const C=I=>{I.key==="Escape"&&o()};document.addEventListener("keydown",C);const P=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>u.current?.focus(),0),()=>{document.removeEventListener("keydown",C),document.body.style.overflow=P}},[o]);const l=C=>{C.target===C.currentTarget&&o()},S=C=>{C.preventDefault(),r()};return t.jsx(Ln,{onMouseDown:l,role:"presentation",children:t.jsxs(Tn,{ref:u,$width:b,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(ze,{children:[t.jsx(Be,{children:e}),t.jsx(In,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),k?t.jsx(Pn,{children:k}):null,t.jsxs(Rn,{onSubmit:i,children:[t.jsx(zn,{children:a}),t.jsxs(Bn,{children:[t.jsx(An,{children:w?null:t.jsx(_n,{isPrimary:!1,onClick:S,children:"Отменить"})}),t.jsx(Fn,{children:!h&&!y?t.jsx(On,{type:"submit",disabled:c||d,children:d?"Сохранение...":f}):null})]})]})]})})},Ln=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Tn=n.div`
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
`,In=n.button`
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
`,Pn=n.div`
  padding: 12px 18px 0 18px;
`,Rn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,zn=n.div`
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
`,Bn=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,An=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Fn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,_n=n(oe)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,On=n(oe)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Wn=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Nn=({value:e="",placeholder:o="Выберите период",options:r=Wn,showCustomPeriodButton:i=!0,onChange:a,onCustomPeriodClick:c})=>{const[d,g]=x.useState(!1),[y,w]=x.useState(!1),[b,f]=x.useState(""),[k,h]=x.useState(""),[u,l]=x.useState(""),S=x.useRef(null),C=x.useRef(null);x.useEffect(()=>{if(e==="Custom"&&k&&u){const A=R(k),_=R(u);f(`С ${A} по ${_}`)}else{const A=r.find(_=>_.value===e);f(A?A.label:"")}},[e,r,k,u]),x.useEffect(()=>{const A=_=>{S.current&&!S.current.contains(_.target)&&g(!1),y&&C.current&&!C.current.contains(_.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(v=>v.contains(_.target))||w(!1))};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[y]);const P=A=>{a?.(A.value),g(!1)},I=()=>{g(!1),c?c():w(!0)},E=()=>{a?.(""),f(""),h(""),l("")},T=()=>{if(k&&u){const A=R(k),_=R(u),N=`С ${A} по ${_}`;a?.("Custom",k,u),f(N),w(!1)}},R=A=>{const _=new Date(A),N=String(_.getDate()).padStart(2,"0"),O=String(_.getMonth()+1).padStart(2,"0"),v=_.getFullYear();return`${N}.${O}.${v}`},Y=()=>t.jsxs(eo,{children:[t.jsx(ze,{style:{margin:0},children:t.jsx(Be,{style:{margin:0},children:"Выбор периода"})}),t.jsx(to,{onClick:E,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Hn,{ref:S,children:[t.jsxs(Yn,{onClick:()=>g(!d),children:[t.jsx(Vn,{children:b||o}),t.jsx(Un,{$isOpen:d,children:"▼"})]}),d&&t.jsxs(Zn,{children:[r.map(A=>t.jsxs(qn,{onClick:()=>P(A),$isSelected:e===A.value,children:[t.jsx(Xn,{$isSelected:e===A.value,children:e===A.value&&t.jsx(Gn,{})}),t.jsx(Jn,{children:A.label})]},A.id)),i&&t.jsx(Kn,{onClick:I,children:"Другой период"})]})]}),y&&t.jsx("div",{ref:C,children:t.jsx(Re,{title:"",onClose:()=>w(!1),onCancel:()=>w(!1),onSave:A=>{A.preventDefault(),T()},saveButtonText:"Выбрать",customLayout:t.jsx(Y,{}),children:t.jsxs(Qn,{children:[t.jsx($e,{children:t.jsx(se,{value:k,onChange:A=>h(A)})}),t.jsx($e,{children:t.jsx(se,{value:u,onChange:A=>l(A)})})]})})})]})},Hn=n.div`
  position: relative;
  width: 245px;
`,Yn=n.div`
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
`,Vn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Un=n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Zn=n.div`
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
`,qn=n.div`
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
`,Xn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Gn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Jn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Kn=n.div`
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
`,Qn=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,$e=n.div`
  flex: 1;
`,eo=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,to=n.button`
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
`,no=({name:e,value:o,onChange:r,onBlur:i,onKeyPress:a,placeholder:c="8 (999) 500-50-50",customPlaceholder:d,tabIndex:g,disabled:y=!1,hasError:w=!1,errorMessage:b})=>{const[f,k]=x.useState(!1),h=x.useRef(null),u=!!(d&&!o&&!f),l=I=>{const T=I.replace(/\D/g,"").slice(0,11);let R="";return T.length>0&&(R+="8"),T.length>1&&(R+=` (${T.slice(1,4)}`),T.length>4&&(R+=`) ${T.slice(4,7)}`),T.length>7&&(R+=`-${T.slice(7,9)}`),T.length>9&&(R+=`-${T.slice(9,11)}`),R},S=I=>{const E=l(I.target.value),T={...I,target:{...I.target,name:e,value:E}};r(T)},C=I=>{k(!1),i?.(I)},P=I=>{a?.(I)};return t.jsxs(oo,{children:[t.jsx(ro,{ref:h,name:e,type:"tel",value:o,onChange:S,onKeyPress:P,placeholder:u?"":c,maxLength:18,tabIndex:g,disabled:y,hasError:w,onFocus:()=>k(!0),onBlur:C,inputMode:"tel"}),d&&t.jsx(io,{isVisible:u,children:d}),w&&b&&t.jsx(so,{children:b})]})},oo=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,ro=n.input`
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
`,io=n.label`
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
`,so=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,ao=({tabs:e,activeTab:o,onChange:r,addButton:i,fontSize:a=14})=>{const c=e.find(d=>d.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(lo,{children:t.jsxs(co,{children:[e.map(d=>t.jsxs(po,{$isActive:o===d.id,onClick:()=>r(d.id),$fontSize:a,children:[d.label,o===d.id&&t.jsx(uo,{})]},d.id)),i&&t.jsx(xo,{children:i})]})}),c&&t.jsx(ho,{children:c})]})},lo=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,co=n.ul`
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
`,uo=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,xo=n.li`
  margin-left: auto;
  padding: 4px 0;
`,ho=n.div`
  margin-top: 20px;
`,fo=({mode:e,primaryValue:o,secondaryValue:r,placeholder:i="Выберите значение",onSelect:a,onClear:c,disabled:d=!1,hasError:g=!1,errorMessage:y="",customIcon:w})=>{const f=w||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(wo,{children:[t.jsx(vo,{children:o||"Не указано"}),r&&t.jsx(yo,{children:r})]}):t.jsxs(go,{children:[t.jsxs(bo,{children:[t.jsx(mo,{type:"text",value:o||"",placeholder:i,readOnly:!0,disabled:d}),o&&!d&&t.jsx(jo,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!d&&t.jsx(ko,{type:"button",onClick:a,"aria-label":"Выбрать",children:f}),g&&y&&t.jsx(Co,{children:y})]})},go=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,bo=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,mo=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,wo=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,vo=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,yo=n.span`
  font-size: 13px;
  color: #666;
`,ko=n.button`
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
`,jo=n.button`
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
`,Co=n.div`
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
`,$o=({total:e})=>t.jsx("div",{children:t.jsxs(So,{children:["Всего: ",e]})}),So=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,Mo=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,Eo=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,Do=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,Lo=n.span`
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
`,To=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Io=({checked:e,onChange:o,disabled:r})=>{const i=()=>{r||o(!e)};return t.jsxs(Do,{children:[t.jsx(To,{checked:e,onChange:i,disabled:r}),t.jsx(Lo,{checked:e,disabled:r})]})},Po=({id:e,name:o,checked:r,onChange:i,children:a})=>t.jsxs(Ro,{htmlFor:e,children:[t.jsx(zo,{type:"radio",id:e,name:o,checked:r,onChange:i}),a]}),Ro=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,zo=n.input`
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
`,Bo=({percentage:e,onChange:o,draggable:r=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const a=x.useRef(null),[c,d]=x.useState(!1),g=f=>{!r||!o||(f.preventDefault(),d(!0),b(f))},y=f=>{!c||!o||b(f)},w=()=>{d(!1)},b=f=>{if(!a.current||!o)return;const k=a.current.getBoundingClientRect();let u=(f.clientX-k.left)/k.width*100;u=Math.max(0,Math.min(100,u)),o(Math.round(u))};return x.useEffect(()=>{if(c)return document.addEventListener("mousemove",y),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",w)}},[c]),t.jsxs(Ao,{ref:a,$draggable:r,onMouseDown:g,children:[t.jsx(Fo,{$secondaryColor:i.secondary}),t.jsx(_o,{$percentage:e,$primaryColor:i.primary}),r&&t.jsx(Oo,{$percentage:e,$primaryColor:i.primary})]})},Ao=n.div`
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
`,Fo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,_o=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Oo=n.div`
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
`,Wo=["zoomControl","fullscreenControl"];let ie=null;const No=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(ie||(ie=new Promise((o,r)=>{const i=document.createElement("script"),a=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${a}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):r(new Error("Yandex Maps failed to load"))},i.onerror=()=>r(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),ie),Ho=({onLocationSelect:e,initialAddress:o="",initialLat:r=55.751244,initialLon:i=37.618423,apiKey:a,zoom:c=12,height:d=400,width:g="100%",inputPlaceholder:y="Введите адрес или название места",searchButtonLabel:w="Найти",draggablePlacemark:b=!0,controls:f=Wo,showSearch:k=!0,className:h,style:u,onError:l})=>{const[S,C]=x.useState(null),[P,I]=x.useState(o),[E,T]=x.useState(o),[R,Y]=x.useState(!1),A=x.useRef(null);x.useEffect(()=>{let O=!1,v;return(async()=>{try{const $=await No(a);if(O||!A.current)return;v=new $.Map(A.current,{center:[r,i],zoom:c,controls:f});const m=new $.Placemark([r,i],{},{draggable:b});v.geoObjects.add(m),v.events.add("click",H=>{const V=H.get("coords");_(V,m,v)}),m.events.add("dragend",()=>{const H=m.geometry.getCoordinates();_(H,m,v)}),C(v),Y(!0)}catch($){l&&$ instanceof Error&&l($)}})(),()=>{O=!0,v&&v.destroy()}},[a,r,i,c,f,b,l]);const _=async(O,v,s)=>{if(window.ymaps)try{const H=(await window.ymaps.geocode(O)).geoObjects.get(0).getAddressLine();v.geometry.setCoordinates(O),s.panTo(O,{flying:!0}),T(H),I(H),e(H,O[0],O[1])}catch($){l&&$ instanceof Error&&l($)}},N=async()=>{if(!(!P.trim()||!window.ymaps||!S))try{const v=(await window.ymaps.geocode(P)).geoObjects.get(0);if(v){const s=v.geometry.getCoordinates(),$=v.properties.get("boundedBy");S.setBounds($,{checkZoomRange:!0});const m=new window.ymaps.Placemark(s,{},{draggable:b});S.geoObjects.removeAll(),S.geoObjects.add(m);const H=v.getAddressLine();T(H),e(H,s[0],s[1]),m.events.add("dragend",()=>{const V=m.geometry.getCoordinates();_(V,m,S)})}}catch(O){l&&O instanceof Error&&l(O)}};return t.jsxs(Yo,{className:h,style:u,children:[k&&t.jsxs(Vo,{children:[t.jsx(de,{type:"text",value:P,onChange:O=>I(O.target.value),placeholder:y,onKeyPress:O=>O.key==="Enter"&&N(),disabled:!R}),t.jsx(Uo,{onClick:N,disabled:!R,children:w})]}),t.jsxs(qo,{children:["Выбранный адрес: ",t.jsx("strong",{children:E||"Не выбран"})]}),t.jsx(Zo,{ref:A,$height:d,$width:g}),t.jsx(Xo,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Yo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Vo=n.div`
  display: flex;
  gap: 8px;
`,Uo=n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Zo=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,qo=n.div`
  font-size: 14px;
  color: #374151;
`,Xo=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,ue=n.h1`
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
`;function ae(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const r=e.replace(/[^\d-]/g,"");if(!r||r==="-"||r==="")return`0${o}`;const i=parseInt(r,10);if(isNaN(i))return`0${o}`;const a=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${a}${o}`:a}function Go(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Jo=({title:e,data:o,maxValue:r,step:i,height:a=300,titleFontSize:c})=>{const[d,g]=x.useState(null),y=[];for(let b=0;b<=r;b+=i)y.push(b);const w=o.length>0?o[0].bars.map(b=>({name:b.name,color:b.color})):[];return t.jsxs(Ko,{children:[t.jsxs(pe,{style:{marginTop:"0"},children:[t.jsx(ue,{style:{fontSize:c},children:e}),t.jsx(Qo,{children:w.map((b,f)=>t.jsxs(er,{children:[t.jsx(tr,{color:b.color}),t.jsx(nr,{children:b.name})]},f))})]}),t.jsxs(or,{height:a,children:[t.jsx(rr,{children:y.map((b,f)=>t.jsx(ir,{children:b.toLocaleString()},f))}),t.jsxs(sr,{children:[t.jsxs(ar,{children:[y.map((b,f)=>{const k=b/r*100;return t.jsx(lr,{position:100-k},`line-${f}`)}),o.map((b,f)=>t.jsxs(cr,{onMouseEnter:()=>g(f),onMouseLeave:()=>g(null),children:[b.bars.map((k,h)=>{const u=b.bars.slice(h+1).reduce((l,S)=>l+S.value,0);return t.jsx(dr,{height:k.value/r*100,offset:u/r*100,color:k.color,isHovered:d!==null&&d!==f},h)}),d===f&&t.jsxs(xr,{children:[t.jsxs(hr,{children:[t.jsxs(fr,{children:["Всего: ",ae(b.total.toString())]}),b.bars.map((k,h)=>t.jsxs(gr,{children:[k.name,": ",ae(k.value.toString())]},h))]}),t.jsx(br,{})]})]},f))]}),t.jsx(pr,{children:o.map((b,f)=>t.jsx(ur,{style:{flex:1,textAlign:"center"},children:b.label},f))})]})]})]})},Ko=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Qo=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,er=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,tr=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,nr=n.span`
  font-size: 14px;
  color: #4b5563;
`,or=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,rr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,ir=n.span`
  font-size: 12px;
  color: #6b7280;
`,sr=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,ar=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,lr=n.div`
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
`,cr=n.div`
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
`,dr=n.div`
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
`,ur=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,xr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,hr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,fr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,gr=n.div`
  margin-bottom: 2px;
`,br=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,mr=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,wr=({title:e,data:o,xAxisLabel:r,yAxisLabel:i,maxX:a,maxY:c,minY:d,xStep:g,yStep:y,height:w=300,showLegend:b=!0,xAxisCustomLabels:f,showTooltip:k=!0,titleFontSize:h="30px"})=>{const[u,l]=x.useState(null),[S,C]=x.useState({x:0,y:0}),P=x.useRef(null),I=x.useRef(null),E=Math.max(...o.map(v=>v.x),a),T=[];for(let v=0;v<=E;v+=g)T.push(v);const R=[];for(let v=d;v<=c;v+=y)R.push(v);const Y=f||T.map(v=>v.toString()),A=b?Array.from(new Set(o.filter(v=>v.label).map(v=>v.label))).map(v=>{const s=o.find($=>$.label===v);return{name:v,color:s.color}}):[],_={};o.forEach(v=>{const s=v.label||"default";_[s]||(_[s]=[]),_[s].push(v)});const N=v=>v/E*100,O=v=>{const s=c-d;return 100-(v-d)/s*100};return x.useEffect(()=>{if(u&&I.current){const v=I.current.getBoundingClientRect(),s=N(u.x)/100*v.width,$=O(u.y)/100*v.height;C({x:s+v.left,y:$+v.top})}},[u,a,c,d]),t.jsxs(vr,{children:[t.jsxs(pe,{style:{marginTop:"0"},children:[t.jsx(ue,{style:{fontSize:h},children:e}),b&&A.length>0&&t.jsx(yr,{children:A.map((v,s)=>t.jsxs(kr,{children:[t.jsx(jr,{color:v.color}),t.jsx(Cr,{children:v.name})]},s))})]}),t.jsxs($r,{height:w,children:[t.jsxs(Sr,{children:[R.map((v,s)=>t.jsx(Mr,{children:v.toLocaleString()},s)),t.jsx(Se,{children:i})]}),t.jsxs(Er,{ref:I,children:[R.map((v,s)=>t.jsx(Dr,{position:O(v)},`hline-${s}`)),Object.values(_).map((v,s)=>v.map(($,m)=>{if(m===0)return null;const H=v[m-1],V=N(H.x),U=O(H.y),M=N($.x),L=O($.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${V}%`,y1:`${U}%`,x2:`${M}%`,y2:`${L}%`,stroke:$.color,strokeWidth:"1"})},`line-${s}-${m}`)})),o.map((v,s)=>t.jsx(Lr,{x:N(v.x),y:O(v.y),color:v.color,onMouseEnter:()=>l(v),onMouseLeave:()=>l(null),isHovered:u?.label===v.label},s))]})]}),k&&u&&t.jsxs(Pr,{ref:P,style:{left:S.x,top:S.y},children:[t.jsxs(Rr,{children:[u.name&&t.jsx(zr,{children:u.name}),t.jsx(Br,{children:u.y.toLocaleString()})]}),t.jsx(Ar,{})]}),t.jsxs(Tr,{children:[Y.map((v,s)=>{const m=T[s]/E*100;return t.jsx(Ir,{style:{left:`${m}%`,transform:"translateX(-50%)"},children:v},s)}),r&&t.jsx(Se,{children:r})]})]})},vr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,yr=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,kr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,jr=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,Cr=n.span`
  font-size: 14px;
  color: #4b5563;
`,$r=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Sr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,Mr=n.span`
  font-size: 12px;
  color: #6b7280;
`,Se=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,Er=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,Dr=n.div`
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
`,Lr=n.div`
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
`,Tr=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Ir=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Pr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${mr} 0.15s ease-out forwards;
`,Rr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,zr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Br=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Ar=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Fr=({images:e,initialIndex:o,onClose:r})=>{const[i,a]=x.useState(o),[c,d]=x.useState(0),g=()=>{a(f=>f>0?f-1:e.length-1),d(0)},y=()=>{a(f=>f<e.length-1?f+1:0),d(0)},w=()=>{d(f=>(f+90)%360)},b=f=>{f.key==="Escape"?r():f.key==="ArrowLeft"?g():f.key==="ArrowRight"?y():(f.key==="r"||f.key==="к")&&w()};return t.jsx(_r,{onClick:r,onKeyDown:b,tabIndex:0,children:t.jsxs(Or,{onClick:f=>f.stopPropagation(),children:[t.jsx(Wr,{onClick:r,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Nr,{children:t.jsx(Hr,{onClick:w,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Yr,{children:[t.jsx(Me,{$position:"left",onClick:g,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Vr,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx(Me,{$position:"right",onClick:y,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Ur,{children:e.map((f,k)=>t.jsx(Zr,{$active:k===i,onClick:()=>{a(k),d(0)}},k))})]})})},_r=n.div`
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
`,Or=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wr=n.button`
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
`,Nr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Hr=n.button`
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
`,Yr=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Vr=n.img`
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
`,Ur=n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Zr=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ae=({isOpen:e,callPhone:o,error:r,onClose:i})=>{const[a,c]=x.useState(!1);if(!e)return null;const d=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),g=()=>{d?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(qr,{onClick:i,children:t.jsxs(Xr,{onClick:y=>y.stopPropagation(),children:[t.jsx(Gr,{children:"Подтверждение авторизации"}),t.jsx(Ee,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Jr,{onClick:g,title:d?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!d&&a&&t.jsx(Kr,{children:"Скопировано!"})]}),t.jsx(Ee,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),r&&t.jsx(Qr,{children:r})]})})},qr=n.div`
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
`,Xr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Gr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Ee=n.p`
  margin-bottom: 15px;
  color: #555;
`,Jr=n.div`
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
`,Kr=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Qr=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,Fe=x.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),ei=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),ti=({items:e,bottomItems:o=[],bottomContent:r,logo:i,arrowIcon:a,collapsed:c,onToggle:d,selectedKey:g,onSelect:y,autoCollapseOnSelect:w=!1,width:b="315px",collapsedWidth:f="85px",className:k,style:h,mobileBreakpoint:u=768,showBottomLabels:l=!0,children:S})=>{const C=x.useContext(Fe),[P,I]=x.useState(window.innerWidth<=u);x.useEffect(()=>{const j=()=>{I(window.innerWidth<=u)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[u]);const[E,T]=x.useState(c??C.collapsed??!1),[R,Y]=x.useState(null),[A,_]=x.useState(g??C.selectedSideMenuItem??null),[N,O]=x.useState({visible:!1,x:0,y:0,items:[]}),v=x.useRef(null),s=c??C.collapsed??E,$=j=>{T(j),C.toggleCollapsed(),d?.(j)},m=g??C.selectedSideMenuItem??A,H=j=>{_(j),C.setSelectedSideMenuItem(j)};x.useEffect(()=>{c!==void 0&&(T(c),c&&Y(null))},[c]),x.useEffect(()=>{g!==void 0&&H(g)},[g]),x.useEffect(()=>{const j=()=>O(B=>({...B,visible:!1}));return document.addEventListener("click",j),()=>document.removeEventListener("click",j)},[]);const V=()=>{const j=!s;$(j),j&&Y(null)},U=j=>{j.disabled||j.hidden||(H(j.key),y?.(j),j.onClick?.(j),w&&($(!0),Y(null)))},M=j=>{Y(B=>B===j?null:j)},L=(j,B)=>{const z=(j.children?.length||0)>0;if(s&&z){B.stopPropagation();const W=B.currentTarget.getBoundingClientRect();O({visible:!0,x:W.right+6,y:W.top,items:j.children||[]});return}z?M(j.key):U(j)},p=(j,B=!1)=>j.filter(z=>!z.hidden).map(z=>{const W=(z.children?.length||0)>0,Z=R===z.key,G=m===z.key||!!z.children&&z.children.some(J=>J.key===m);return t.jsxs(x.Fragment,{children:[t.jsxs(xi,{$collapsed:s,$selected:G,onClick:J=>L(z,J),$disabled:z.disabled,title:z.label,children:[z.icon&&t.jsx(fi,{$collapsed:s,children:z.icon}),!s&&t.jsx(hi,{children:z.label}),!s&&W&&t.jsx(bi,{$expanded:Z,children:"▾"})]}),!s&&W&&Z&&t.jsx(gi,{children:p(z.children||[],!0)})]},z.key)}),D=x.useMemo(()=>N.visible?t.jsx(mi,{style:{left:N.x,top:N.y},children:N.items.map(j=>t.jsx(wi,{onClick:()=>{U(j),O({visible:!1,x:0,y:0,items:[]})},$selected:m===j.key,children:j.label},j.key))}):null,[N,m]),F=()=>{const j=[...e,...o].filter(B=>!B.hidden);return t.jsx(ri,{children:j.map(B=>{const z=m===B.key;return t.jsxs(ii,{$selected:z,onClick:()=>U(B),$disabled:B.disabled,children:[B.icon&&t.jsx(si,{$selected:z,children:B.icon}),l&&t.jsx(ai,{$selected:z,children:B.label})]},B.key)})})};return P?t.jsxs(ni,{className:k,style:h,children:[t.jsx(oi,{children:S}),F()]}):t.jsxs(li,{ref:v,$collapsed:s,$width:b,$collapsedWidth:f,className:k,style:h,children:[t.jsxs(ci,{children:[t.jsx(di,{onClick:V,"aria-label":"Переключить меню",children:a??t.jsx(ei,{collapsed:s})}),!s&&i&&t.jsx(pi,{children:i})]}),t.jsxs(ui,{children:[t.jsx(De,{children:p(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(Le,{}),t.jsx(De,{children:p(o)})]}),r&&t.jsxs(t.Fragment,{children:[(o.length>0||e.length>0)&&t.jsx(Le,{}),t.jsx(yi,{$collapsed:s,children:r})]})]}),D,t.jsx(vi,{$collapsed:s}),S]})},ni=n.div`
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
`,oi=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,ri=n.nav`
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
`,ii=n.div`
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
`,si=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,ai=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,li=n.div`
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
`,ci=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,di=n.button`
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
`,ui=n.div`
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
`,xi=n.div`
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
`,hi=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,fi=n.div`
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
`,gi=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,bi=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,Le=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,mi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,wi=n.div`
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
`,vi=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,yi=n.div`
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
`,ki=e=>{const o=e.replace(/\D/g,""),i=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let a="";return i.length>0&&(a+="8"),i.length>1&&(a+=` (${i.slice(1,4)}`),i.length>4&&(a+=`) ${i.slice(4,7)}`),i.length>7&&(a+=`-${i.slice(7,9)}`),i.length>9&&(a+=`-${i.slice(9,11)}`),a},_e=({value:e,onChange:o,placeholder:r="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const a=c=>{const d=ki(c.target.value);o(d)};return t.jsx(ji,{type:"text",value:e,onChange:a,placeholder:r,maxLength:18,tabIndex:i})},ji=n.input`
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
`;class Ci{async subscribe(o,r,i){return q("/Pay/subscribe",{method:"POST",body:{tariffType:o,days:r??null,ones:i??null}})}async cancelSubscription(o){const r={};return o!==void 0&&(r.tariffType=o),q("/Pay/cancel",{method:"POST",body:r})}async getSubscriptionInfo(o){let r="/Pay/status";return o!==void 0&&(r+=`?tariffType=${o}`),q(r,{method:"GET"})}async isSubscriptionActive(o){return(await this.getSubscriptionInfo(o)).isActive}async getSubscriptionEndDate(o){return(await this.getSubscriptionInfo(o)).endAt}}const ne=new Ci,$i=({paymentUrl:e,onPaymentComplete:o,expiresAt:r,status:i,tariffType:a,onCheckStatus:c})=>{const[d,g]=x.useState(1),[y,w]=x.useState(!1),[b,f]=x.useState(null),[k,h]=x.useState(!1),[u,l]=x.useState(null),[S,C]=x.useState(i||"Pending"),P=x.useRef(!1),I=x.useRef(!0),E=x.useRef(null),T=x.useRef(null),R=x.useCallback(m=>{const H=new Date().getTime(),U=new Date(m).getTime()-H;if(U<=0)return"00:00";const M=Math.floor(U%(1e3*60*60)/(1e3*60)),L=Math.floor(U%(1e3*60)/1e3);return`${M.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")}`},[]),Y=x.useCallback(()=>{r&&d===1&&S==="Pending"&&R(r)==="00:00"&&(l("Время ожидания оплаты истекло"),T.current&&(clearInterval(T.current),T.current=null))},[r,d,S,R]),A=x.useCallback(()=>{!r||d!==1||S!=="Pending"||(Y(),T.current&&clearInterval(T.current),T.current=window.setInterval(()=>{I.current&&d===1&&S==="Pending"&&Y()},1e3))},[r,d,S,Y]),_=x.useCallback(()=>{T.current&&(clearInterval(T.current),T.current=null)},[]),N=x.useCallback(async()=>{if(!(P.current||d===3||S==="Active"))try{if(P.current=!0,l(null),c){const m=await c();m.success&&m.status==="Active"?(C("Active"),g(3),_(),o&&o()):m.status==="Pending"?(C("Pending"),g(1),m.transaction_status==="Authorized"&&g(2)):m.status==="Expired"&&(l("Время ожидания оплаты истекло"),_())}}catch(m){console.error("Ошибка при проверке статуса:",m),l("Не удалось проверить статус оплаты")}finally{I.current&&(P.current=!1)}},[c,o,d,S,_]);x.useEffect(()=>{if(d===3){const m=setTimeout(()=>{o&&o()},2e3);return()=>clearTimeout(m)}},[d,o]);const O=x.useCallback(()=>{E.current||S==="Active"||(N(),E.current=window.setInterval(()=>{I.current&&S!=="Active"&&N()},5e3))},[N,S]),v=x.useCallback(()=>{E.current&&(clearInterval(E.current),E.current=null)},[]);x.useEffect(()=>(I.current=!0,S==="Active"?g(3):S==="Pending"&&(O(),A()),()=>{I.current=!1,v(),_()}),[S,O,A,v,_]),x.useEffect(()=>{d===1&&S==="Pending"?A():_()},[d,S,A,_]);const s=m=>d>m?"completed":d===m?"current":"pending",$=async()=>{try{await ne.cancelSubscription(a),w(!0),f(null),v(),_(),window.location.reload()}catch(m){console.error("Ошибка при отмене подписки:",m),f("Произошла ошибка при отмене подписки")}finally{w(!1),h(!1)}};return t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"12px",boxSizing:"border-box"},children:[t.jsxs("div",{style:{maxWidth:"600px",width:"100%",backgroundColor:"white",borderRadius:"20px",padding:"24px 16px",position:"relative",margin:"12px 0"},children:[!k&&t.jsx("button",{onClick:()=>h(!0),className:"desktop-cancel-button",style:{position:"absolute",top:"12px",right:"12px",backgroundColor:"transparent",color:"#999",border:"1px solid #ddd",padding:"6px 12px",borderRadius:"20px",fontSize:"13px",cursor:"pointer",transition:"all 0.3s",zIndex:10,minHeight:"36px",minWidth:"80px"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#f5f5f5",m.currentTarget.style.color="#666"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent",m.currentTarget.style.color="#999"},children:"✕ Отменить"}),k&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"16px",boxSizing:"border-box"},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"16px",padding:"24px 20px",maxWidth:"400px",width:"100%",textAlign:"center",maxHeight:"90vh",overflowY:"auto"},children:[t.jsx("h3",{style:{color:"#333",marginBottom:"12px",fontSize:"20px",lineHeight:"1.4"},children:"Отменить оформление?"}),t.jsx("p",{style:{color:"#666",marginBottom:"24px",fontSize:"15px",lineHeight:"1.5"},children:"Вы уверены, что хотите отменить оформление подписки? Вам придется начать заново."}),b&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px",borderRadius:"8px",marginBottom:"20px",fontSize:"14px"},children:b}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx("button",{onClick:$,disabled:y,style:{width:"100%",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"bold",cursor:y?"not-allowed":"pointer",opacity:y?.7:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:m=>{y||(m.currentTarget.style.backgroundColor="#D32F2F")},onMouseLeave:m=>{y||(m.currentTarget.style.backgroundColor="#F44336")},children:y?"Отмена...":"Да, отменить"}),t.jsx("button",{onClick:()=>{h(!1),f(null)},disabled:y,style:{width:"100%",backgroundColor:"#f5f5f5",color:"#666",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",cursor:y?"not-allowed":"pointer",opacity:y?.5:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:m=>{y||(m.currentTarget.style.backgroundColor="#e0e0e0")},onMouseLeave:m=>{y||(m.currentTarget.style.backgroundColor="#f5f5f5")},children:"Нет, вернуться"})]})]})}),t.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[t.jsxs("h1",{style:{color:"#333",marginBottom:"8px",fontSize:"24px",lineHeight:"1.3",padding:"0 8px"},children:[d===1&&S==="Pending"&&"Ожидание оплаты",d===2&&"Подтверждение платежа",d===3&&"Платёж завершён"]}),t.jsxs("p",{style:{color:"#666",fontSize:"15px",lineHeight:"1.5",padding:"0 12px",margin:0},children:[d===1&&S==="Pending"&&"Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.",d===2&&"Платёж обрабатывается банком. Обычно это занимает несколько секунд.",d===3&&"Подписка успешно активирована! Спасибо за покупку."]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"32px",position:"relative",padding:"0 4px"},children:[t.jsx("div",{style:{position:"absolute",top:"15px",left:"18%",right:"18%",height:"2px",backgroundColor:"#E0E0E0",zIndex:1},children:t.jsx("div",{style:{width:d===1?"0%":d===2?"50%":"100%",height:"100%",backgroundColor:"#007D88",transition:"width 0.5s ease"}})}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:s(1)==="completed"||s(1)==="current"?"#007D88":"#E0E0E0",border:s(1)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",fontWeight:"bold"},children:s(1)==="completed"?"✓":"1"}),t.jsx("div",{style:{color:s(1)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:s(1)==="current"?"bold":"normal"},children:"Начало"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:s(2)==="completed"?"#007D88":s(2)==="current"?"white":"#E0E0E0",border:s(2)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:s(2)==="current"?"#007D88":s(2)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:s(2)==="completed"?"✓":"2"}),t.jsx("div",{style:{color:s(2)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:s(2)==="current"?"bold":"normal"},children:"Подтверждение"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:s(3)==="completed"?"#007D88":s(3)==="current"?"white":"#E0E0E0",border:s(3)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:s(3)==="current"?"#007D88":s(3)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:s(3)==="completed"?"✓":"3"}),t.jsx("div",{style:{color:s(3)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:s(3)==="current"?"bold":"normal"},children:"Завершено"})]})]}),t.jsxs("div",{style:{backgroundColor:"#F9FAFA",borderRadius:"12px",padding:"20px 16px",marginBottom:"24px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("div",{style:{color:"#999",fontSize:"13px",marginBottom:"8px"},children:"Ссылка для оплаты"}),t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:"#007D88",textDecoration:"none",fontSize:"14px",wordBreak:"break-all",display:"block",padding:"12px 16px",backgroundColor:"#E8F4F5",borderRadius:"8px",transition:"background-color 0.3s",lineHeight:"1.5",minHeight:"44px"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#D1E9EB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="#E8F4F5"},children:e})]}),d===1&&t.jsx("div",{style:{borderTop:"1px solid #E0E0E0",paddingTop:"16px"},children:!k&&t.jsx("button",{onClick:()=>h(!0),className:"mobile-cancel-button",style:{width:"100%",margin:"16px 0 0px 0px",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"500",cursor:"pointer",transition:"background-color 0.3s",zIndex:10},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#D32F2F"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="#F44336"},children:"✕ Отменить оформление"})})]}),u&&d!==3&&S!=="Active"&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px 16px",borderRadius:"8px",marginBottom:"16px",fontSize:"14px",textAlign:"center",lineHeight:"1.5"},children:u}),d===2&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#F9FAFA",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#007D88",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Платёж обрабатывается банком. Это может занять от нескольких секунд до часа."})}),S==="Active"&&d!==3&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#E8F5E9",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#2E7D32",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Подписка активна! Страница будет обновлена автоматически."})})]}),t.jsx("style",{children:`
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
      `})]})},Si=(e={})=>{const{tariffType:o,autoRedirect:r=!1,onSuccess:i,onCancel:a,onError:c}=e,[d,g]=x.useState(!1),[y,w]=x.useState(!1),[b,f]=x.useState(!1),[k,h]=x.useState(!1),[u,l]=x.useState(null),[S,C]=x.useState(null),[P,I]=x.useState(null),[E,T]=x.useState(null),[R,Y]=x.useState(!1),A=x.useCallback(async(v,s,$)=>{w(!0),g(!0),l(null),C(null);try{const m=await ne.subscribe(v,s,$);return C(m),r&&m.paymentUrl&&(window.location.href=m.paymentUrl),i?.(m),m}catch(m){const H=m instanceof Error?m.message:"Unknown error occurred";return l(H),c?.(H),null}finally{w(!1),g(!1)}},[r,i,c]),_=x.useCallback(async v=>{f(!0),g(!0),l(null),I(null);try{const s=v??o,$=await ne.cancelSubscription(s);return I($),a?.($),$}catch(s){const $=s instanceof Error?s.message:"Unknown error occurred";return l($),c?.($),null}finally{f(!1),g(!1)}},[o,a,c]),N=x.useCallback(async v=>{h(!0),l(null);try{const s=v??o,$=await ne.getSubscriptionInfo(s);return T($),Y($.isActive),$}catch(s){const $=s instanceof Error?s.message:"Unknown error occurred";return l($),c?.($),null}finally{h(!1)}},[o,c]),O=x.useCallback(()=>{g(!1),w(!1),f(!1),h(!1),l(null),C(null),I(null),T(null),Y(!1)},[]);return{isLoading:d,isSubscribing:y,isCancelling:b,isFetchingStatus:k,error:u,subscriptionData:S,cancelData:P,statusData:E,isActive:R,subscribe:A,cancelSubscription:_,getSubscriptionStatus:N,resetState:O}},Mi=[{id:1,days:30,label:"1 месяц",price:4999},{id:2,days:90,label:"3 месяца",price:14999},{id:3,days:180,label:"6 месяцев",price:29999},{id:4,days:365,label:"1 год",price:59999,popular:!0}],Ei=[{id:1,ones:1,label:"Разовый доступ",price:999,description:"1 разовое использование"},{id:2,ones:5,label:"Пакет 5 раз",price:4499,description:"5 разовых использований",popular:!0},{id:3,ones:10,label:"Пакет 10 раз",price:8499,description:"10 разовых использований"},{id:4,ones:20,label:"Пакет 20 раз",price:15999,description:"20 разовых использований"}],Di=({tariffType:e="WaypayCrm",subscriptionType:o="days",plans:r,onPaymentSuccess:i,onError:a,autoRedirect:c=!0,buttonText:d="Оформить",loadingText:g="Обработка...",showSelectedIndicator:y=!0,className:w})=>{const[b,f]=x.useState(null),k=r||(o==="days"?Mi:Ei),{isLoading:h,error:u,subscribe:l,resetState:S}=Si({tariffType:e,autoRedirect:c,onSuccess:E=>{c&&E.paymentUrl&&(window.location.href=E.paymentUrl),i?.()},onError:E=>{a?.(E)}});x.useEffect(()=>{if(!b&&k.length>0){const E=k.find(T=>T.popular)||k[0];f(E)}},[k,b]);const C=async()=>{if(!b){a?.("Выберите тарифный план");return}const E=o==="days"?b.days:void 0,T=o==="ones"?b.ones:void 0;await l(e,E,T)},P=E=>new Intl.NumberFormat("ru-RU").format(E),I=E=>o==="days"?E.days:E.ones;return t.jsxs(Li,{className:w,children:[t.jsxs(Ti,{children:[t.jsx(Ii,{children:"Подписка"}),t.jsx(Pi,{children:o==="days"?"WayPay CRM":"Разовые использования"})]}),(u||typeof u=="string"&&u)&&t.jsxs(Ui,{children:[t.jsx("span",{children:u}),t.jsx(Zi,{onClick:S,children:"×"})]}),t.jsx(Ri,{children:k.map(E=>{const T=I(E),R=b?.id===E.id;return t.jsxs(zi,{$isSelected:R,$isPopular:!!E.popular,onClick:()=>f(E),children:[t.jsxs(Bi,{children:[t.jsxs(Ai,{children:[E.label,E.popular&&t.jsx(Fi,{children:"Популярный"})]}),E.description&&t.jsx(_i,{children:E.description}),T!==void 0&&o==="days"&&t.jsxs(Te,{children:[T," дней"]}),T!==void 0&&o==="ones"&&t.jsxs(Te,{children:[T," шт."]})]}),t.jsxs(Oi,{children:[P(E.price)," ₽"]}),y&&R&&t.jsx(Wi,{})]},E.id)})}),b&&t.jsxs(Ni,{children:[t.jsx(Hi,{children:o==="days"?`Вы выбрали: ${b.label} (${b.days} дней)`:`Вы выбрали: ${b.label} (${b.ones} использований)`}),t.jsxs(Yi,{children:["Итого: ",P(b.price)," ₽"]})]}),t.jsx(Vi,{onClick:C,disabled:h,children:h?g:d})]})},Li=n.div`
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
`,Ni=n.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Hi=n.div`
  font-size: 13px;
  color: #1a1a1a;
  font-weight: 500;
`,Yi=n.div`
  font-size: 16px;
  color: #007D88;
  font-weight: 600;
`,Vi=n.button`
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
`,Ui=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`,Zi=n.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`,qi=e=>({call_phone:e.call_phone??e.callPhone,check_id:e.check_id??e.checkId,name_required:e.name_required??e.nameRequired}),Oe=async(e,o)=>{const i=await q("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}});return qi(i)},We=(e,o,r,i)=>q("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,checkId:o,user_type:r,userType:r,name:i}}),Xi=()=>q("/auth/session/info",{method:"GET"}),Gi=({isOpen:e,onClose:o,onSubmit:r,error:i,isLoading:a=!1})=>{const[c,d]=x.useState("");if(!e)return null;const g=y=>{y.preventDefault(),r(c)};return t.jsx(Ji,{onClick:o,children:t.jsx(Ki,{onClick:y=>y.stopPropagation(),children:t.jsxs(Qi,{onSubmit:g,children:[t.jsx(es,{children:"Как вас зовут?"}),t.jsxs(ts,{children:[t.jsx(de,{type:"text",value:c,onChange:y=>d(y.target.value),placeholder:"Иванов Иван Иванович",disabled:a,autoFocus:!0,style:{flex:1}}),t.jsx(ns,{type:"submit",disabled:a||!c.trim(),children:a?"...":"→"})]}),i&&t.jsx(os,{children:i})]})})})},Ji=n.div`
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
`,Ki=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,Qi=n.form`
  display: flex;
  flex-direction: column;
`,es=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,ts=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,ns=n(oe)`
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
`,os=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,rs=({onLoginSuccess:e,userType:o="delivery_operator",title:r="Авторизация",submitLabel:i="Войти",placeholder:a="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:d="https://waypay.one",supportLinkText:g="waypay.one",className:y,style:w,pollingIntervalMs:b=3e3,enableRegistration:f=!1,enableSupport:k=!0})=>{const[h,u]=x.useState(!1),[l,S]=x.useState(""),[C,P]=x.useState(!1),[I,E]=x.useState(""),[T,R]=x.useState(""),[Y,A]=x.useState(!1),[_,N]=x.useState(!1),[O,v]=x.useState(""),[s,$]=x.useState(""),[m,H]=x.useState(null),V=x.useRef(void 0);x.useEffect(()=>()=>{V.current&&clearInterval(V.current)},[]);const U=j=>{const B=j.replace(/\D/g,"");return B?B.startsWith("8")?`+7${B.slice(1)}`:B.startsWith("7")?`+${B}`:`+${B}`:""},M=()=>{P(!1),N(!1),v(""),$(""),H(null),V.current&&window.clearInterval(V.current)},L=async j=>{if(j.preventDefault(),!l){R("Введите номер телефона");return}u(!0),R("");const B=U(l);try{const z=await Oe(B,o);H({phone:B,checkId:z.check_id,callPhone:z.call_phone}),f&&"name_required"in z&&z.name_required?(N(!0),E(z.call_phone)):!f&&"name_required"in z&&z.name_required?(R("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),H(null)):(E(z.call_phone),P(!0),D(B,z.check_id))}catch(z){console.error("Auth error:",z),z&&z.response&&z.response.data?R(z.response.data):z instanceof Error?R(z.message):R("Произошла ошибка при авторизации")}finally{u(!1)}},p=async j=>{if(!j.trim()){$("Введите ФИО");return}if(m){u(!0),$("");try{v(j),N(!1),P(!0),D(m.phone,m.checkId,j)}catch(B){console.error("Registration error:",B),$("Не удалось завершить регистрацию")}finally{u(!1)}}},D=(j,B,z)=>{V.current&&window.clearInterval(V.current),V.current=window.setInterval(()=>{F(j,B,z)},b)},F=async(j,B,z)=>{if(!Y){A(!0);try{const W=await We(j,B,o,z||O);(W.access_token&&W.refresh_token||W.accessToken&&W.refreshToken)&&(V.current&&window.clearInterval(V.current),P(!1),N(!1),v(""),H(null),e(W.access_token??W.accessToken))}catch(W){console.error("Verification error:",W)}finally{A(!1)}}};return t.jsxs(is,{className:y,style:w,children:[t.jsxs(ss,{children:[t.jsxs(as,{onSubmit:L,children:[t.jsx(ls,{children:r}),t.jsx(cs,{children:t.jsx(ds,{children:t.jsx(_e,{value:l,onChange:j=>S(j),placeholder:a})})}),T&&t.jsx(fs,{children:t.jsx("span",{children:T})}),t.jsx(ps,{type:"submit",disabled:h,children:h?"Загрузка...":i})]}),k&&t.jsxs(us,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(xs,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(hs,{href:d,target:"_blank",rel:"noreferrer",children:g})]})]}),t.jsx(Gi,{isOpen:_,onClose:M,onSubmit:p,error:s,isLoading:h}),t.jsx(Ae,{isOpen:C,onClose:M,callPhone:I,error:T})]})},is=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,ss=n.div`
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
`,as=n.form`
  display: flex;
  flex-direction: column;
`,ls=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,cs=n.div`
  margin-bottom: 25px;
`,ds=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,ps=n.button`
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
`,us=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,xs=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,hs=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,fs=n.div`
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
`,Ne=e=>{let o=0;for(let i=0;i<e.length;i++)o=e.charCodeAt(i)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},gs=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",bs=(e,o=100)=>{const r=document.createElement("canvas");r.width=o,r.height=o;const i=r.getContext("2d");if(!i)return"";const a=Ne(e);i.fillStyle=a,i.beginPath(),i.arc(o/2,o/2,o/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=o/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const d=c*.1;return i.fillText(e,o/2,o/2+d),r.toDataURL("image/png")},ms=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const r=o.getDate().toString().padStart(2,"0"),i=(o.getMonth()+1).toString().padStart(2,"0"),a=o.getFullYear();return`${r}-${i}-${a}`};function ws(e){return new Date(e)}const He=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const r=new Date;if(o>r){const b=Math.floor((o.getTime()-r.getTime())/1e3),f=Math.floor(b/60),k=Math.floor(f/60),h=Math.floor(k/24);return b<10?"скоро":b<60?`через ${b} секунд`:f===1?"через минуту":f<60?`через ${f} минут`:k===1?"через час":k<24?`через ${k} часов`:h===1?"завтра":h<7?`через ${h} дней`:"в будущем"}const i=Math.floor((r.getTime()-o.getTime())/1e3),a=Math.floor(i/60),c=Math.floor(a/60),d=Math.floor(c/24),g=Math.floor(d/7),y=Math.floor(d/30),w=Math.floor(d/365);if(i<10)return"только что";if(i<60){const b=Math.max(1,i);return b===1?"секунду назад":b<5?`${b} секунды назад`:`${b} секунд назад`}return a<60?a===1?"минуту назад":a<5?`${a} минуты назад`:`${a} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:d<7?d===1?"вчера":d===2?"позавчера":`${d} дня назад`:g<4?g===1?"неделю назад":g<5?`${g} недели назад`:`${g} недель назад`:y<12?y===1?"месяц назад":y<5?`${y} месяца назад`:`${y} месяцев назад`:w===1?"год назад":w<5?`${w} года назад`:`${w} лет назад`}catch(r){return console.error("Ошибка форматирования относительного времени:",r),"ошибка даты"}},Ye=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},vs=(e,o={})=>{const{useExactAfterMonths:r=6,includeTime:i=!0}=o,a=new Date(e);return isNaN(a.getTime()),Math.floor((new Date().getTime()-a.getTime())/(1e3*60*60*24*30))>=r?i?Ye(a):a.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):He(a)};exports.API_BASE_URL=ce;exports.AddButton=ut;exports.AuthCallModal=Ae;exports.AuthPage=rs;exports.BASE_URL=ft;exports.BackButton=wt;exports.BaseModal=Re;exports.Checkbox=Ut;exports.ColumnChart=Jo;exports.ContextMenu=le;exports.CountInfoTitle=$o;exports.CustomCalendar=se;exports.CustomInput=de;exports.CustomPhoneInput=_e;exports.CustomSelect=Tt;exports.CustomTable=et;exports.CustomTextArea=$n;exports.CustomTitle=ue;exports.DefaultButton=oe;exports.DeleteButton=kt;exports.EditButton=Ct;exports.EntitySelectContainer=fo;exports.ExportButton=Mt;exports.FILE_BASE_URL=gt;exports.InputContainer=mn;exports.InputLabel=bn;exports.InputRow=gn;exports.InputTitle=Mo;exports.ModalInfoTitle=Eo;exports.Pagination=jn;exports.PeriodField=Nn;exports.PhoneModalInput=no;exports.PhotoViewerModal=Fr;exports.ProgressBar=Bo;exports.RadioButton=Po;exports.ScatterPlot=wr;exports.SideMenu=ti;exports.SideMenuContext=Fe;exports.SubscriptionBlock=Di;exports.SubscriptionPendingPage=$i;exports.Tabs=ao;exports.TitleField=pe;exports.ToggleSwitch=Io;exports.YandexMapSelector=Ho;exports.apiRequest=q;exports.authStorage=bt;exports.confirmCallAuth=We;exports.formatDate=ms;exports.formatExactDate=Ye;exports.formatMoney=ae;exports.formatRelativeTime=He;exports.formatRelativeTimeExtended=vs;exports.generateAvatar=bs;exports.getInitials=gs;exports.getSessionInfo=Xi;exports.initiateCallAuth=Oe;exports.parseDateInput=ws;exports.parseMoney=Go;exports.refreshAccessToken=Ie;exports.stringToColor=Ne;
