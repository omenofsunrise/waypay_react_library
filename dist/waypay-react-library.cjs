"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const x=require("react"),n=require("styled-components"),Q=require("framer-motion");var oe={exports:{}},ee={};var be;function Je(){if(be)return ee;be=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(i,s,p){var c=null;if(p!==void 0&&(c=""+p),s.key!==void 0&&(c=""+s.key),"key"in s){p={};for(var f in s)f!=="key"&&(p[f]=s[f])}else p=s;return s=p.ref,{$$typeof:e,type:i,key:c,ref:s!==void 0?s:null,props:p}}return ee.Fragment=o,ee.jsx=r,ee.jsxs=r,ee}var te={};var me;function Ke(){return me||(me=1,process.env.NODE_ENV!=="production"&&(function(){function e(d){if(d==null)return null;if(typeof d=="function")return d.$$typeof===F?null:d.displayName||d.name||null;if(typeof d=="string")return d;switch(d){case S:return"Fragment";case I:return"Profiler";case C:return"StrictMode";case $:return"Suspense";case W:return"SuspenseList";case _:return"Activity"}if(typeof d=="object")switch(typeof d.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),d.$$typeof){case l:return"Portal";case B:return d.displayName||"Context";case L:return(d._context.displayName||"Context")+".Consumer";case R:var T=d.render;return d=d.displayName,d||(d=T.displayName||T.name||"",d=d!==""?"ForwardRef("+d+")":"ForwardRef"),d;case P:return T=d.displayName||null,T!==null?T:e(d.type)||"Memo";case A:T=d._payload,d=d._init;try{return e(d(T))}catch{}}return null}function o(d){return""+d}function r(d){try{o(d);var T=!1}catch{T=!0}if(T){T=console;var z=T.error,M=typeof Symbol=="function"&&Symbol.toStringTag&&d[Symbol.toStringTag]||d.constructor.name||"Object";return z.call(T,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",M),o(d)}}function i(d){if(d===S)return"<>";if(typeof d=="object"&&d!==null&&d.$$typeof===A)return"<...>";try{var T=e(d);return T?"<"+T+">":"<...>"}catch{return"<...>"}}function s(){var d=k.A;return d===null?null:d.getOwner()}function p(){return Error("react-stack-top-frame")}function c(d){if(a.call(d,"key")){var T=Object.getOwnPropertyDescriptor(d,"key").get;if(T&&T.isReactWarning)return!1}return d.key!==void 0}function f(d,T){function z(){H||(H=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",T))}z.isReactWarning=!0,Object.defineProperty(d,"key",{get:z,configurable:!0})}function w(){var d=e(this.type);return X[d]||(X[d]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),d=this.props.ref,d!==void 0?d:null}function b(d,T,z,M,O,N){var V=z.ref;return d={$$typeof:u,type:d,key:T,props:z,_owner:M},(V!==void 0?V:null)!==null?Object.defineProperty(d,"ref",{enumerable:!1,get:w}):Object.defineProperty(d,"ref",{enumerable:!1,value:null}),d._store={},Object.defineProperty(d._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(d,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(d,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(d,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:N}),Object.freeze&&(Object.freeze(d.props),Object.freeze(d)),d}function v(d,T,z,M,O,N){var V=T.children;if(V!==void 0)if(M)if(j(V)){for(M=0;M<V.length;M++)g(V[M]);Object.freeze&&Object.freeze(V)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else g(V);if(a.call(T,"key")){V=e(d);var G=Object.keys(T).filter(function(Y){return Y!=="key"});M=0<G.length?"{key: someKey, "+G.join(": ..., ")+": ...}":"{key: someKey}",D[V+M]||(G=0<G.length?"{"+G.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,M,V,G,V),D[V+M]=!0)}if(V=null,z!==void 0&&(r(z),V=""+z),c(T)&&(r(T.key),V=""+T.key),"key"in T){z={};for(var Z in T)Z!=="key"&&(z[Z]=T[Z])}else z=T;return V&&f(z,typeof d=="function"?d.displayName||d.name||"Unknown":d),b(d,V,z,s(),O,N)}function g(d){y(d)?d._store&&(d._store.validated=1):typeof d=="object"&&d!==null&&d.$$typeof===A&&(d._payload.status==="fulfilled"?y(d._payload.value)&&d._payload.value._store&&(d._payload.value._store.validated=1):d._store&&(d._store.validated=1))}function y(d){return typeof d=="object"&&d!==null&&d.$$typeof===u}var h=x,u=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),B=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),k=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,a=Object.prototype.hasOwnProperty,j=Array.isArray,m=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(d){return d()}};var H,X={},q=h.react_stack_bottom_frame.bind(h,p)(),E=m(i(p)),D={};te.Fragment=S,te.jsx=function(d,T,z){var M=1e4>k.recentlyCreatedOwnerStacks++;return v(d,T,z,!1,M?Error("react-stack-top-frame"):q,M?m(i(d)):E)},te.jsxs=function(d,T,z){var M=1e4>k.recentlyCreatedOwnerStacks++;return v(d,T,z,!0,M?Error("react-stack-top-frame"):q,M?m(i(d)):E)}})()),te}var we;function Qe(){return we||(we=1,process.env.NODE_ENV==="production"?oe.exports=Je():oe.exports=Ke()),oe.exports}var t=Qe();const ue=({x:e,y:o,items:r,onClose:i,...s})=>{const p=x.useRef(null),[c,f]=x.useState(null);x.useEffect(()=>{const h=u=>{p.current&&!p.current.contains(u.target)&&i()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i]);const b=(()=>{if(!p.current)return{x:e,y:o};const h=p.current.offsetWidth,u=p.current.offsetHeight,l=window.innerWidth,S=window.innerHeight;let C=e,I=o;return C+h>l&&(C=e-h),I+u>S&&(I=o-u),{x:C,y:I}})(),v=(h,u)=>{h.submenu?f(c===u?null:u):h.action&&(h.action(),i())},g=h=>{r[h].submenu&&f(h)},y=h=>{const u=h.relatedTarget;p.current?.contains(u)||f(null)};return t.jsx(et,{ref:p,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:b.y,left:b.x},onClick:h=>h.stopPropagation(),onMouseLeave:y,...s,children:r.map((h,u)=>t.jsxs(tt,{$hasSubmenu:!!h.submenu,$disabled:h.disabled,children:[t.jsx(nt,{onClick:l=>{l.stopPropagation(),h.disabled||v(h,u)},onMouseEnter:()=>!h.disabled&&g(u),whileHover:h.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:h.color,$disabled:h.disabled,children:t.jsxs(ot,{children:[h.label,h.submenu&&t.jsx(rt,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),h.submenu&&c===u&&t.jsx(it,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(ue,{x:0,y:-u*40,items:h.submenu,onClose:()=>f(null)})})]},u))})},et=n(Q.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,tt=n.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,nt=n(Q.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,ot=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,rt=n.span`
  color: #666;
  margin-left: 8px;
`,it=n(Q.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,st=({columns:e,data:o,onRowDoubleClick:r,contextMenuActions:i=[],onSort:s,sortConfig:p,onRowClick:c,selectedRow:f,fixedHeight:w,hasTotalsRow:b,debtChecker:v,rowStyles:g={},isLoading:y})=>{const[h,u]=x.useState(null),[l,S]=x.useState(null),C=x.useRef(null),I=x.useRef(null),L=500,B=f!==void 0?f:h,R=E=>{!e[E].isSortable||!s||s(E)},W=v||(E=>{const D=E[8];return typeof D=="string"?parseFloat(D.replace(/[^\d.]/g,""))>0:!1}),P=E=>{f===void 0&&u(E===B?null:E),c&&c(o[E],E)},A=(E,D)=>{r&&r(E,D)},_=(E,D)=>{if(i.length===0)return;E.preventDefault();const d="touches"in E?E.touches[0].clientX:E.clientX,T="touches"in E?E.touches[0].clientY:E.clientY;S({x:d,y:T,rowIndex:D})},F=(E,D)=>{E.preventDefault(),_(E,D)},k=(E,D)=>{i.length!==0&&(I.current&&clearTimeout(I.current),I.current=window.setTimeout(()=>{_(E,D)},L))},a=()=>{I.current&&(clearTimeout(I.current),I.current=null)},j=()=>{I.current&&window.clearTimeout(I.current)},m=()=>{S(null)};x.useEffect(()=>{const E=()=>{l&&m()};return document.addEventListener("click",E),()=>{document.removeEventListener("click",E),I.current&&clearTimeout(I.current)}},[l]);const H=(E,D,d)=>{if(D)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const T=g[E]||{};return E===B?{backgroundColor:T.backgroundColor||"#007D88",color:T.color||"#FFFFFF",fontWeight:T.fontWeight||"normal"}:d?{backgroundColor:T.backgroundColor||"#E8D8D8",color:T.color||"inherit",fontWeight:T.fontWeight||"normal"}:o[E][o[E].length-1]===!1?{backgroundColor:T.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:T.fontWeight||"normal"}:{backgroundColor:T.backgroundColor||"#FFFFFF",color:T.color||"inherit",fontWeight:T.fontWeight||"normal"}},X=(E,D,d)=>{if(D)return"#FFFFFF";const T=H(E,D,d);return T.hoverBackgroundColor?T.hoverBackgroundColor:E===B?"#007D88":d?"#E8D8D8CC":o[E][o[E].length-1]===!1?"#51D5B4CC":"#F3F4F6"},q=()=>{if(!l||i.length===0)return null;const E=(typeof i=="function"?i(o[l.rowIndex]):i).filter(D=>typeof D=="object"&&(typeof D.shouldShow!="function"||D.shouldShow(o[l.rowIndex])));return E.length===0?null:t.jsx(pt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:D=>D.stopPropagation(),children:t.jsx(ue,{items:E.map(D=>{const d={label:D.label,color:D.color,disabled:D.disabled};return D.getSubmenu?d.submenu=D.getSubmenu(o[l.rowIndex]):D.action&&(d.action=()=>{D.action(o[l.rowIndex],l.rowIndex),m()}),d}),onClose:m,x:0,y:0})})};return t.jsx(ct,{ref:C,children:y?t.jsx(at,{children:t.jsx(lt,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(dt,{children:[t.jsx(ut,{children:t.jsx(ve,{children:e.map((E,D)=>!E.isHidden&&t.jsx(ht,{$isSortable:E.isSortable,$isActive:p?.key===D,onClick:()=>R(D),$align:E.align||"center",$isFirst:D===0,$isLast:D===e.length-1,children:t.jsxs(ft,{$align:E.align||"center",children:[E.name,E.isSortable&&t.jsx(gt,{$direction:p?.key===D?p.direction:"asc",animate:{rotate:p?.key===D&&p.direction==="desc"?180:0,color:p?.key===D?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},D))})}),t.jsx(xt,{$fixedHeight:w,children:t.jsx(Q.AnimatePresence,{children:o.map((E,D)=>{const d=!!(b&&D===o.length-1),T=!!(!d&&W(E)),z=H(D,d,T),M=X(D,d,T);return t.jsx(ve,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:z.backgroundColor||"#FFFFFF",color:z.color||"inherit",fontWeight:z.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:D===o.length-1,$isSelected:D===B,$isTotalsRow:d,onClick:()=>!d&&P(D),onDoubleClick:()=>!d&&A(E,D),onContextMenu:O=>!d&&F(O,D),onTouchStart:O=>!d&&k(O,D),onTouchEnd:a,onTouchMove:j,whileHover:d?{}:{backgroundColor:M,transition:{duration:.15}},style:{backgroundColor:z.backgroundColor||"#FFFFFF",color:z.color||"inherit",fontWeight:z.fontWeight||"normal"},children:E.map((O,N)=>!e[N]?.isHidden&&t.jsx(bt,{$align:e[N]?.align||"center",$isFirst:N===0,$isLast:N===E.length-1,$isTotalsCell:d,$isBeforeTotals:d&&N<E.findIndex(V=>V==="Итого:"),children:O},N))},`row-${D}`)})})})]}),t.jsx(Q.AnimatePresence,{children:q()})]})})},at=n.div`
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
`,lt=n.div`
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
`,ct=n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,dt=n.table`
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
`,pt=n(Q.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,ut=n.thead`
  text-align: center;
  position: relative;
`,xt=n.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,ve=n(Q.motion.tr)`
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
`,ht=n.th`
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
`,ft=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,gt=n(Q.motion.span)`
  display: inline-flex;
  align-items: center;
`,bt=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,mt=({onClick:e,tooltip:o,size:r=32,margin:i})=>t.jsx(wt,{onClick:e,size:r,margin:i,title:o,children:t.jsx(vt,{size:r})}),wt=n.button`
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
`,vt=n.div`
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
`,ie="/api",yt="https://web.waypay.one:5001",kt="https://file.waypay.one/";async function K(e,o={}){const{method:r="GET",body:i,headers:s={},token:p,withCredentials:c=!0,isFormData:f=!1}=o,w=async v=>{const g={...s};f||(g["Content-Type"]="application/json"),v&&(g.Authorization=`Bearer ${v}`);const y=e.startsWith("http")?e:`${ie}${e}`;let h;return i&&(f?h=i:h=JSON.stringify(i)),await fetch(y,{method:r,headers:g,body:h,credentials:c?"include":"same-origin"})},b=async(v,g=!0)=>{const y=await w(v);if(y.ok){if(y.status===204)return null;const u=await y.text();if(!u)return null;try{return JSON.parse(u)}catch{return u}}if(y.status===401&&g){const u=await xe();if(u)return b(u,!1)}let h=`Request failed with status ${y.status}`;try{const u=await y.text();if(u)try{const l=JSON.parse(u);l&&typeof l.error=="string"?h=l.error:typeof l=="string"?h=l:typeof l?.message=="string"&&(h=l.message)}catch{h=u}}catch{}throw new Error(h)};return b(p)}async function Ct(e,o={}){const{method:r="GET",headers:i={},token:s,withCredentials:p=!0}=o,c=async w=>{const b={...i};w&&(b.Authorization=`Bearer ${w}`);const v=e.startsWith("http")?e:`${ie}${e}`;return await fetch(v,{method:r,headers:b,credentials:p?"include":"same-origin"})},f=async(w,b=!0)=>{const v=await c(w);if(v.ok)return await v.blob();if(v.status===401&&b){const y=await xe();if(y)return f(y,!1)}let g=`Request failed with status ${v.status}`;try{const y=await v.text();if(y)try{const h=JSON.parse(y);h&&typeof h.error=="string"?g=h.error:typeof h=="string"?g=h:typeof h?.message=="string"&&(g=h.message)}catch{g=y}}catch{}throw new Error(g)};return f(s)}async function xe(){const e=await fetch(`${ie}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const jt={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await K("/auth/session/info",{method:"GET"})}catch{return null}},async logout(e){try{await K("/auth/session/revoke",{method:"POST",headers:{"Content-Type":"application/json"},body:e?{token_id:e}:{}})}catch(o){throw console.error("Logout error:",o),o}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},$t=n.button`
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
`,St=({children:e,onClick:o,disabled:r,...i})=>t.jsxs($t,{onClick:o,disabled:r,...i,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"currentColor"})}),e]}),se=({children:e="Подтвердить",icon:o,disabled:r=!1,bg:i,hoverBg:s,disabledBg:p,textColor:c,fullWidth:f=!1,minWidth:w,width:b,isPrimary:v=!0,...g})=>{const h=i?{bg:i,hoverBg:s||i,disabledBg:p||i,textColor:c||(v?"white":"black")}:v?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(Mt,{disabled:r,$bg:h.bg,$hoverBg:h.hoverBg,$disabledBg:h.disabledBg,$textColor:h.textColor,$fullWidth:f,$minWidth:w,$width:b,...g,children:[o&&t.jsx(Et,{children:o}),t.jsx("span",{children:e})]})},Mt=n.button`
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
`,Et=n.span`
  display: inline-flex;
  align-items: center;
`,Dt=({onClick:e,tooltip:o,size:r=32})=>t.jsx(Tt,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),Tt=n.button`
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
`,Lt=({onClick:e,tooltip:o,size:r=32})=>t.jsx(It,{onClick:e,size:r,title:o,children:t.jsx("svg",{width:r*.5,height:r*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),It=n.button`
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
`,Pt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),Rt=({children:e="Экспорт",icon:o=t.jsx(Pt,{}),onExport:r,isExporting:i=!1,exportProgress:s=0,...p})=>{const c=async f=>{if(r)try{await r()}catch(w){console.error("Export error:",w)}p.onClick&&p.onClick(f)};return t.jsx(zt,{...p,onClick:c,disabled:i||p.disabled,children:i?t.jsxs(At,{children:[t.jsxs("span",{children:["Экспорт... ",s,"%"]}),t.jsx(Bt,{progress:s})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},zt=n.button`
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
`,At=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,Bt=n.div`
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
`,Ft=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:s=!1,errorMessage:p,options:c,name:f,disabled:w=!1,required:b=!1,...v})=>{const[g,y]=x.useState(!1),[h,u]=x.useState(!1),l=x.useRef(null),S=!!(o&&!r&&!g),C=$=>{i&&!w&&i({target:{value:$,name:f}}),u(!1),y(!1)},I=$=>{l.current&&!l.current.contains($.target)&&(u(!1),y(!1))},L=()=>{w||(u(!h),y(!h))};x.useEffect(()=>(document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[]);const B=c.find($=>$.value===r),R=B?B.label:"";return t.jsxs(_t,{ref:l,...v,children:[t.jsxs(Ot,{children:[t.jsxs(Wt,{hasError:s,isOpen:h,disabled:w,onClick:L,onFocus:()=>!w&&y(!0),onBlur:()=>y(!1),tabIndex:w?-1:0,children:[t.jsx(Nt,{children:R||e&&t.jsx(Ht,{children:e})}),t.jsx(Yt,{isOpen:h,disabled:w,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:w?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h&&t.jsx(Vt,{children:c.map($=>t.jsxs(Ut,{$isSelected:$.value===r,onClick:()=>C($.value),children:[t.jsx(qt,{$isSelected:$.value===r,children:$.value===r&&t.jsx(Zt,{})}),t.jsx(Xt,{children:$.label})]},$.value))})]}),o&&t.jsx(Gt,{isVisible:S,children:o}),s&&p&&t.jsx(Jt,{children:p}),t.jsx(Kt,{name:f,value:r||"",onChange:()=>{},tabIndex:-1,required:b,children:c.map($=>t.jsx("option",{value:$.value,children:$.label},$.value))})]})},_t=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Ot=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Wt=n.div`
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
`,Nt=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ht=n.span`
  color: rgba(80, 85, 92, 1);
`,Yt=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,Vt=n.div`
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
`,Ut=n.div`
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
`,qt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Zt=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Xt=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Gt=n.label`
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
`,Jt=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Kt=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Qt=({checked:e=!1,onChange:o,className:r,label:i,disabled:s=!1})=>{const[p,c]=x.useState(!1),f=()=>{s||!o||o(!e)},w=b=>{s||(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f())};return t.jsxs(en,{className:r,onClick:f,onKeyPress:w,tabIndex:s?-1:0,disabled:s,children:[t.jsx(tn,{checked:e,isFocused:p,disabled:s,onMouseEnter:()=>!s&&c(!0),onMouseLeave:()=>!s&&c(!1),onFocus:()=>!s&&c(!0),onBlur:()=>!s&&c(!1),children:e&&t.jsx(on,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:s,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:s?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(nn,{disabled:s,children:i})]})},en=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,tn=n.div`
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
`,nn=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,on=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,rn="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",ye=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],sn=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ce=({prefix:e="Дата:",value:o="",placeholder:r="Выберите дату",onChange:i,onReset:s})=>{const[p,c]=x.useState(!1),[f,w]=x.useState(new Date),[b,v]=x.useState(o?new Date(o):null),[g,y]=x.useState(!1),[h,u]=x.useState(!1),l=x.useRef(null),S=x.useRef(null),C=x.useRef(null);x.useEffect(()=>{const a=j=>{l.current&&!l.current.contains(j.target)&&c(!1),S.current&&!S.current.contains(j.target)&&y(!1),C.current&&!C.current.contains(j.target)&&u(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),x.useEffect(()=>{v(o?new Date(o):null)},[o]);const I=a=>{const j=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()));v(a);const m=j.toISOString().split("T")[0];i?.(m),c(!1)},L=()=>{const a=new Date;w(a);const m=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())).toISOString().split("T")[0];i?.(m),c(!1)},B=()=>{v(null),i?.(""),s?.(),c(!1)},R=a=>{const j=new Date(f);j.setMonth(a),w(j),y(!1)},$=a=>{const j=new Date(f);j.setFullYear(a),w(j),u(!1)},W=()=>{const a=f.getFullYear(),j=f.getMonth(),m=new Date(a,j,1),X=new Date(a,j+1,0).getDate(),q=m.getDay()===0?6:m.getDay()-1,E=[],D=35,d=new Date(a,j,0).getDate();for(let z=0;z<q;z++){const M=d-q+z+1,O=new Date(a,j-1,M),N=!!(b&&O.getDate()===b.getDate()&&O.getMonth()===b.getMonth()&&O.getFullYear()===b.getFullYear());E.push(t.jsx(ae,{selected:N,onClick:()=>I(O),otherMonth:!0,children:M},`prev-${M}`))}for(let z=1;z<=X;z++){const M=new Date(a,j,z),O=!!(b&&M.getDate()===b.getDate()&&M.getMonth()===b.getMonth()&&M.getFullYear()===b.getFullYear());E.push(t.jsx(ae,{selected:O,onClick:()=>I(M),children:z},`current-${z}`))}const T=D-E.length;for(let z=1;z<=T;z++){const M=new Date(a,j+1,z),O=!!(b&&M.getDate()===b.getDate()&&M.getMonth()===b.getMonth()&&M.getFullYear()===b.getFullYear());E.push(t.jsx(ae,{selected:O,onClick:()=>I(M),otherMonth:!0,children:z},`next-${z}`))}return E},P=()=>b?b.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):r,A=()=>{const a=new Date().getFullYear(),j=[];for(let m=a-10;m<=a+10;m++)j.push(m);return j},_=a=>{a.preventDefault(),a.stopPropagation(),y(!g),u(!1)},F=a=>{a.preventDefault(),a.stopPropagation(),u(!h),y(!1)},k=a=>{const j=a==="next"?1:-1,m=new Date(f);m.setMonth(m.getMonth()+j),w(m)};return t.jsxs(an,{ref:l,children:[t.jsxs(ln,{onClick:()=>c(!p),children:[e&&t.jsx(cn,{children:e}),t.jsx(dn,{isEmpty:!b,children:P()}),t.jsx(pn,{src:rn,alt:"Календарь"})]}),p&&t.jsxs(un,{className:"calendar-container",children:[t.jsxs(xn,{children:[t.jsx($e,{onClick:a=>{a.preventDefault(),a.stopPropagation(),k("prev")},onMouseDown:a=>a.preventDefault(),children:t.jsx(Se,{direction:"right"})}),t.jsxs(hn,{children:[t.jsxs(bn,{ref:S,children:[t.jsxs(fn,{onClick:a=>_(a),onMouseDown:a=>a.preventDefault(),children:[ye[f.getMonth()],t.jsx(ke,{$open:g})]}),g&&t.jsx(Ce,{$width:120,onClick:a=>a.stopPropagation(),children:ye.map((a,j)=>t.jsx(je,{$selected:j===f.getMonth(),onClick:m=>{m.stopPropagation(),R(j)},children:a},a))})]}),t.jsxs(mn,{ref:C,children:[t.jsxs(gn,{onClick:a=>F(a),onMouseDown:a=>a.preventDefault(),children:[f.getFullYear(),t.jsx(ke,{$open:h})]}),h&&t.jsx(Ce,{$width:80,onClick:a=>a.stopPropagation(),children:A().map(a=>t.jsx(je,{$selected:a===f.getFullYear(),onClick:j=>{j.stopPropagation(),$(a)},children:a},a))})]})]}),t.jsx($e,{onClick:a=>{a.preventDefault(),a.stopPropagation(),k("next")},onMouseDown:a=>a.preventDefault(),children:t.jsx(Se,{direction:"left"})})]}),t.jsx(wn,{children:sn.map(a=>t.jsx(vn,{children:a},a))}),t.jsx(yn,{children:W()}),t.jsxs(kn,{children:[t.jsx(Me,{onClick:B,children:"Удалить"}),t.jsx(Me,{onClick:L,children:"Сегодня"})]})]})]})},an=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,ln=n.div`
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
`,cn=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,dn=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,pn=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,un=n.div`
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
`,xn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,hn=n.div`
  display: flex;
  gap: 8px;
  color: black;
`,Fe=n.button`
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
`,fn=n(Fe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,gn=n(Fe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,bn=n.div`
  position: relative;
`,mn=n.div`
  position: relative;
`,ke=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,Ce=n.div`
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
`,je=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,$e=n.button`
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
`,Se=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,wn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,vn=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,yn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,ae=n.div`
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
`,kn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,Me=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,Cn=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,jn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,$n=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,he=({placeholder:e="",customPlaceholder:o,value:r,inputType:i="text",onChange:s,hasError:p=!1,errorMessage:c,...f})=>{const[w,b]=x.useState(!1),v=!!(o&&!r&&!w),g=u=>{if(!s)return;let l=u.target.value;switch(i){case"number":/^\d*$/.test(l)&&s?.(u);break;case"rubles":{const C=u.target.selectionStart,I=u.target.value;let L=I.replace(/[^\d]/g,"");if(L===""){u.target.value="",s(u);break}const B=parseInt(L,10);if(!isNaN(B)){let R=B.toLocaleString("ru-RU");R+=" ₽";const $=y(I,C||0),W=h(R,$);u.target.value=R,s(u),setTimeout(()=>{u.target.setSelectionRange(W,W)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const C=l.split(".");C.length>2&&(l=C[0]+"."+C.slice(1).join("")),C.length===2&&C[1].length>2&&(l=C[0]+"."+C[1].slice(0,2));const I=parseFloat(l);if(isNaN(I)||(I>100?l="100":I<0&&(l="0")),l&&l!==""){l+=" %";const L=u.target.selectionStart||0,B=l.replace(" %","");u.target.value=l,s(u),setTimeout(()=>{L<B.length&&u.target.setSelectionRange(L,L)},0)}else u.target.value=l,s(u);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let S=l.split(" ").filter(C=>C.length>0);S=S.slice(0,3),l=S.map(C=>{if(C.startsWith("-")&&(C=C.substring(1)),(C.match(/-/g)||[]).length>1){const L=C.split("-");C=L[0]+"-"+L.slice(1).join("")}return C.includes("-")?C.split("-").map((L,B)=>L.length===0?"":(B>0,L[0].toUpperCase()+L.slice(1).toLowerCase())).join("-"):C.length>0?C[0].toUpperCase()+C.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&u.target.value.length>0&&u.target.value[u.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),u.target.value=l,s(u);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),u.target.value=l,s(u);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),r?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),u.target.value=l,s(u);break}default:s(u);break}},y=(u,l)=>{let S=0;for(let C=0;C<Math.min(l,u.length);C++)/\d/.test(u[C])&&S++;return S},h=(u,l)=>{let S=0;for(let C=0;C<u.length;C++){if(S>=l)return C;/\d/.test(u[C])&&S++}return u.length};return t.jsxs(Sn,{children:[t.jsx(Mn,{...f,value:r,placeholder:v?"":e,onFocus:()=>b(!0),onBlur:u=>{b(!1),f.onBlur?.(u)},onChange:g,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:p}),o&&t.jsx(En,{isVisible:v,children:o}),p&&c&&t.jsx(Dn,{children:c})]})},Sn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Mn=n.input`
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
`,En=n.label`
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
`,Dn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Tn=({total:e,current:o=1,onChange:r,itemsPerPage:i=10})=>{const s=Math.ceil(e/i),[p,c]=x.useState(o),f=b=>{b<1||b>s||b===p||(c(b),r?.(b))},w=()=>{const b=[];let g=1,y=s;if(s>5){const h=Math.floor(2.5);g=Math.max(p-h,1),y=Math.min(p+h,s),p<=h+1?y=5:p>=s-h&&(g=s-5+1)}for(let h=g;h<=y;h++)b.push(t.jsx(ne,{active:h===p,onClick:()=>f(h),children:h},h));return g>1&&(g>2&&b.unshift(t.jsx(ne,{children:"..."},"start-ellipsis")),b.unshift(t.jsx(ne,{active:p===1,onClick:()=>f(1),children:"1"},1))),y<s&&(y<s-1&&b.push(t.jsx(ne,{children:"..."},"end-ellipsis")),b.push(t.jsx(ne,{active:s===p,onClick:()=>f(s),children:s},s))),b};return t.jsxs(Ln,{children:[t.jsx(Ee,{disabled:p===1,onClick:()=>f(p-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:p===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),w(),t.jsx(Ee,{disabled:p===s,onClick:()=>f(p+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:p===s?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},Ln=n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,ne=n.div`
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
`,Ee=n.button`
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
`,In=({placeholder:e="",customPlaceholder:o,value:r,onChange:i,hasError:s=!1,errorMessage:p,rows:c=3,...f})=>{const[w,b]=x.useState(!1),v=!!(o&&!r&&!w);return t.jsxs(Pn,{children:[t.jsx(Rn,{...f,value:r,placeholder:v?"":e,onFocus:()=>b(!0),onBlur:g=>{b(!1),f.onBlur?.(g)},onChange:i,hasError:s,rows:c}),o&&t.jsx(zn,{isVisible:v,children:o}),s&&p&&t.jsx(An,{children:p})]})},Pn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Rn=n.textarea`
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
`,zn=n.label`
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
`,An=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,_e=({title:e,onClose:o,onCancel:r,onSave:i,children:s,isSaveDisabled:p=!1,isSubmitting:c=!1,mode:f="create",hideSaveButton:w=!1,hideCanselButton:b=!1,width:v="560px",saveButtonText:g="Сохранить",customLayout:y})=>{const h=f==="view",u=x.useRef(null);x.useEffect(()=>{const C=L=>{L.key==="Escape"&&o()};document.addEventListener("keydown",C);const I=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>u.current?.focus(),0),()=>{document.removeEventListener("keydown",C),document.body.style.overflow=I}},[o]);const l=C=>{C.target===C.currentTarget&&o()},S=C=>{C.preventDefault(),r()};return t.jsx(Bn,{onMouseDown:l,role:"presentation",children:t.jsxs(Fn,{ref:u,$width:v,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Oe,{children:[t.jsx(We,{children:e}),t.jsx(_n,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),y?t.jsx(On,{children:y}):null,t.jsxs(Wn,{onSubmit:i,children:[t.jsx(Nn,{children:s}),t.jsxs(Hn,{children:[t.jsx(Yn,{children:b?null:t.jsx(Un,{isPrimary:!1,onClick:S,children:"Отменить"})}),t.jsx(Vn,{children:!h&&!w?t.jsx(qn,{type:"submit",disabled:p||c,children:c?"Сохранение...":g}):null})]})]})]})})},Bn=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Fn=n.div`
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
`,Oe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,We=n.h2`
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
`,_n=n.button`
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
`,On=n.div`
  padding: 12px 18px 0 18px;
`,Wn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,Nn=n.div`
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
`,Hn=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,Yn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Vn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Un=n(se)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,qn=n(se)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Zn=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Xn=({value:e="",placeholder:o="Выберите период",options:r=Zn,showCustomPeriodButton:i=!0,onChange:s,onCustomPeriodClick:p})=>{const[c,f]=x.useState(!1),[w,b]=x.useState(!1),[v,g]=x.useState(""),[y,h]=x.useState(""),[u,l]=x.useState(""),S=x.useRef(null),C=x.useRef(null);x.useEffect(()=>{if(e==="Custom"&&y&&u){const P=$(y),A=$(u);g(`С ${P} по ${A}`)}else{const P=r.find(A=>A.value===e);g(P?P.label:"")}},[e,r,y,u]),x.useEffect(()=>{const P=A=>{S.current&&!S.current.contains(A.target)&&f(!1),w&&C.current&&!C.current.contains(A.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(k=>k.contains(A.target))||b(!1))};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[w]);const I=P=>{s?.(P.value),f(!1)},L=()=>{f(!1),p?p():b(!0)},B=()=>{s?.(""),g(""),h(""),l("")},R=()=>{if(y&&u){const P=$(y),A=$(u),_=`С ${P} по ${A}`;s?.("Custom",y,u),g(_),b(!1)}},$=P=>{const A=new Date(P),_=String(A.getDate()).padStart(2,"0"),F=String(A.getMonth()+1).padStart(2,"0"),k=A.getFullYear();return`${_}.${F}.${k}`},W=()=>t.jsxs(ao,{children:[t.jsx(Oe,{style:{margin:0},children:t.jsx(We,{style:{margin:0},children:"Выбор периода"})}),t.jsx(lo,{onClick:B,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Gn,{ref:S,children:[t.jsxs(Jn,{onClick:()=>f(!c),children:[t.jsx(Kn,{children:v||o}),t.jsx(Qn,{$isOpen:c,children:"▼"})]}),c&&t.jsxs(eo,{children:[r.map(P=>t.jsxs(to,{onClick:()=>I(P),$isSelected:e===P.value,children:[t.jsx(no,{$isSelected:e===P.value,children:e===P.value&&t.jsx(oo,{})}),t.jsx(ro,{children:P.label})]},P.id)),i&&t.jsx(io,{onClick:L,children:"Другой период"})]})]}),w&&t.jsx("div",{ref:C,children:t.jsx(_e,{title:"",onClose:()=>b(!1),onCancel:()=>b(!1),onSave:P=>{P.preventDefault(),R()},saveButtonText:"Выбрать",customLayout:t.jsx(W,{}),children:t.jsxs(so,{children:[t.jsx(De,{children:t.jsx(ce,{value:y,onChange:P=>h(P)})}),t.jsx(De,{children:t.jsx(ce,{value:u,onChange:P=>l(P)})})]})})})]})},Gn=n.div`
  position: relative;
  width: 245px;
`,Jn=n.div`
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
`,Kn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qn=n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,eo=n.div`
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
`,to=n.div`
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
`,no=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,oo=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,ro=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,io=n.div`
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
`,so=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,De=n.div`
  flex: 1;
`,ao=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,lo=n.button`
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
`,co=({name:e,value:o,onChange:r,onBlur:i,onKeyPress:s,placeholder:p="8 (999) 500-50-50",customPlaceholder:c,tabIndex:f,disabled:w=!1,hasError:b=!1,errorMessage:v})=>{const[g,y]=x.useState(!1),h=x.useRef(null),u=!!(c&&!o&&!g),l=L=>{const R=L.replace(/\D/g,"").slice(0,11);let $="";return R.length>0&&($+="8"),R.length>1&&($+=` (${R.slice(1,4)}`),R.length>4&&($+=`) ${R.slice(4,7)}`),R.length>7&&($+=`-${R.slice(7,9)}`),R.length>9&&($+=`-${R.slice(9,11)}`),$},S=L=>{const B=l(L.target.value),R={...L,target:{...L.target,name:e,value:B}};r(R)},C=L=>{y(!1),i?.(L)},I=L=>{s?.(L)};return t.jsxs(po,{children:[t.jsx(uo,{ref:h,name:e,type:"tel",value:o,onChange:S,onKeyPress:I,placeholder:u?"":p,maxLength:18,tabIndex:f,disabled:w,hasError:b,onFocus:()=>y(!0),onBlur:C,inputMode:"tel"}),c&&t.jsx(xo,{isVisible:u,children:c}),b&&v&&t.jsx(ho,{children:v})]})},po=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,uo=n.input`
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
`,xo=n.label`
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
`,ho=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,fo=({tabs:e,activeTab:o,onChange:r,addButton:i,fontSize:s=14})=>{const p=e.find(c=>c.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(go,{children:t.jsxs(bo,{children:[e.map(c=>t.jsxs(mo,{$isActive:o===c.id,onClick:()=>r(c.id),$fontSize:s,children:[c.label,o===c.id&&t.jsx(wo,{})]},c.id)),i&&t.jsx(vo,{children:i})]})}),p&&t.jsx(yo,{children:p})]})},go=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,bo=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,mo=n.li`
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
`,wo=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,vo=n.li`
  margin-left: auto;
  padding: 4px 0;
`,yo=n.div`
  margin-top: 20px;
`,ko=({mode:e,primaryValue:o,secondaryValue:r,placeholder:i="Выберите значение",onSelect:s,onClear:p,disabled:c=!1,hasError:f=!1,errorMessage:w="",customIcon:b})=>{const g=b||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(So,{children:[t.jsx(Mo,{children:o||"Не указано"}),r&&t.jsx(Eo,{children:r})]}):t.jsxs(Co,{children:[t.jsxs(jo,{children:[t.jsx($o,{type:"text",value:o||"",placeholder:i,readOnly:!0,disabled:c}),o&&!c&&t.jsx(To,{type:"button",onClick:p,"aria-label":"Очистить",children:"×"})]}),!c&&t.jsx(Do,{type:"button",onClick:s,"aria-label":"Выбрать",children:g}),f&&w&&t.jsx(Lo,{children:w})]})},Co=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,jo=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,$o=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,So=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,Mo=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,Eo=n.span`
  font-size: 13px;
  color: #666;
`,Do=n.button`
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
`,To=n.button`
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
`,Lo=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,fe=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,Io=({total:e})=>t.jsx("div",{children:t.jsxs(Po,{children:["Всего: ",e]})}),Po=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,Ro=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,zo=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,Ao=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,Bo=n.span`
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
`,Fo=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,_o=({checked:e,onChange:o,disabled:r})=>{const i=()=>{r||o(!e)};return t.jsxs(Ao,{children:[t.jsx(Fo,{checked:e,onChange:i,disabled:r}),t.jsx(Bo,{checked:e,disabled:r})]})},Oo=({id:e,name:o,checked:r,onChange:i,children:s})=>t.jsxs(Wo,{htmlFor:e,children:[t.jsx(No,{type:"radio",id:e,name:o,checked:r,onChange:i}),s]}),Wo=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,No=n.input`
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
`,Ho=({percentage:e,onChange:o,draggable:r=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const s=x.useRef(null),[p,c]=x.useState(!1),f=g=>{!r||!o||(g.preventDefault(),c(!0),v(g))},w=g=>{!p||!o||v(g)},b=()=>{c(!1)},v=g=>{if(!s.current||!o)return;const y=s.current.getBoundingClientRect();let u=(g.clientX-y.left)/y.width*100;u=Math.max(0,Math.min(100,u)),o(Math.round(u))};return x.useEffect(()=>{if(p)return document.addEventListener("mousemove",w),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b)}},[p]),t.jsxs(Yo,{ref:s,$draggable:r,onMouseDown:f,children:[t.jsx(Vo,{$secondaryColor:i.secondary}),t.jsx(Uo,{$percentage:e,$primaryColor:i.primary}),r&&t.jsx(qo,{$percentage:e,$primaryColor:i.primary})]})},Yo=n.div`
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
`,Vo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Uo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,qo=n.div`
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
`,Zo=["zoomControl","fullscreenControl"];let le=null;const Xo=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(le||(le=new Promise((o,r)=>{const i=document.createElement("script"),s=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):r(new Error("Yandex Maps failed to load"))},i.onerror=()=>r(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),le),Go=({onLocationSelect:e,initialAddress:o="",initialLat:r=55.751244,initialLon:i=37.618423,apiKey:s,zoom:p=12,height:c=400,width:f="100%",inputPlaceholder:w="Введите адрес или название места",searchButtonLabel:b="Найти",draggablePlacemark:v=!0,controls:g=Zo,showSearch:y=!0,className:h,style:u,onError:l})=>{const[S,C]=x.useState(null),[I,L]=x.useState(o),[B,R]=x.useState(o),[$,W]=x.useState(!1),P=x.useRef(null);x.useEffect(()=>{let F=!1,k;return(async()=>{try{const j=await Xo(s);if(F||!P.current)return;k=new j.Map(P.current,{center:[r,i],zoom:p,controls:g});const m=new j.Placemark([r,i],{},{draggable:v});k.geoObjects.add(m),k.events.add("click",H=>{const X=H.get("coords");A(X,m,k)}),m.events.add("dragend",()=>{const H=m.geometry.getCoordinates();A(H,m,k)}),C(k),W(!0)}catch(j){l&&j instanceof Error&&l(j)}})(),()=>{F=!0,k&&k.destroy()}},[s,r,i,p,g,v,l]);const A=async(F,k,a)=>{if(window.ymaps)try{const H=(await window.ymaps.geocode(F)).geoObjects.get(0).getAddressLine();k.geometry.setCoordinates(F),a.panTo(F,{flying:!0}),R(H),L(H),e(H,F[0],F[1])}catch(j){l&&j instanceof Error&&l(j)}},_=async()=>{if(!(!I.trim()||!window.ymaps||!S))try{const k=(await window.ymaps.geocode(I)).geoObjects.get(0);if(k){const a=k.geometry.getCoordinates(),j=k.properties.get("boundedBy");S.setBounds(j,{checkZoomRange:!0});const m=new window.ymaps.Placemark(a,{},{draggable:v});S.geoObjects.removeAll(),S.geoObjects.add(m);const H=k.getAddressLine();R(H),e(H,a[0],a[1]),m.events.add("dragend",()=>{const X=m.geometry.getCoordinates();A(X,m,S)})}}catch(F){l&&F instanceof Error&&l(F)}};return t.jsxs(Jo,{className:h,style:u,children:[y&&t.jsxs(Ko,{children:[t.jsx(he,{type:"text",value:I,onChange:F=>L(F.target.value),placeholder:w,onKeyPress:F=>F.key==="Enter"&&_(),disabled:!$}),t.jsx(Qo,{onClick:_,disabled:!$,children:b})]}),t.jsxs(tr,{children:["Выбранный адрес: ",t.jsx("strong",{children:B||"Не выбран"})]}),t.jsx(er,{ref:P,$height:c,$width:f}),t.jsx(nr,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Jo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ko=n.div`
  display: flex;
  gap: 8px;
`,Qo=n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,er=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,tr=n.div`
  font-size: 14px;
  color: #374151;
`,nr=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,ge=n.h1`
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
`;function de(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const r=e.replace(/[^\d-]/g,"");if(!r||r==="-"||r==="")return`0${o}`;const i=parseInt(r,10);if(isNaN(i))return`0${o}`;const s=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${s}${o}`:s}function or(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const rr=({title:e,data:o,maxValue:r,step:i,height:s=300,titleFontSize:p})=>{const[c,f]=x.useState(null),w=[];for(let v=0;v<=r;v+=i)w.push(v);const b=o.length>0?o[0].bars.map(v=>({name:v.name,color:v.color})):[];return t.jsxs(ir,{children:[t.jsxs(fe,{style:{marginTop:"0"},children:[t.jsx(ge,{style:{fontSize:p},children:e}),t.jsx(sr,{children:b.map((v,g)=>t.jsxs(ar,{children:[t.jsx(lr,{color:v.color}),t.jsx(cr,{children:v.name})]},g))})]}),t.jsxs(dr,{height:s,children:[t.jsx(pr,{children:w.map((v,g)=>t.jsx(ur,{children:v.toLocaleString()},g))}),t.jsxs(xr,{children:[t.jsxs(hr,{children:[w.map((v,g)=>{const y=v/r*100;return t.jsx(fr,{position:100-y},`line-${g}`)}),o.map((v,g)=>t.jsxs(gr,{onMouseEnter:()=>f(g),onMouseLeave:()=>f(null),children:[v.bars.map((y,h)=>{const u=v.bars.slice(h+1).reduce((l,S)=>l+S.value,0);return t.jsx(br,{height:y.value/r*100,offset:u/r*100,color:y.color,isHovered:c!==null&&c!==g},h)}),c===g&&t.jsxs(vr,{children:[t.jsxs(yr,{children:[t.jsxs(kr,{children:["Всего: ",de(v.total.toString())]}),v.bars.map((y,h)=>t.jsxs(Cr,{children:[y.name,": ",de(y.value.toString())]},h))]}),t.jsx(jr,{})]})]},g))]}),t.jsx(mr,{children:o.map((v,g)=>t.jsx(wr,{style:{flex:1,textAlign:"center"},children:v.label},g))})]})]})]})},ir=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,sr=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,ar=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,lr=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,cr=n.span`
  font-size: 14px;
  color: #4b5563;
`,dr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,pr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,ur=n.span`
  font-size: 12px;
  color: #6b7280;
`,xr=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,hr=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,fr=n.div`
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
`,gr=n.div`
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
`,br=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,mr=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,wr=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,vr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,yr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,kr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,Cr=n.div`
  margin-bottom: 2px;
`,jr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,$r=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,Sr=({title:e,data:o,xAxisLabel:r,yAxisLabel:i,maxX:s,maxY:p,minY:c,xStep:f,yStep:w,height:b=300,showLegend:v=!0,xAxisCustomLabels:g,showTooltip:y=!0,titleFontSize:h="30px"})=>{const[u,l]=x.useState(null),[S,C]=x.useState({x:0,y:0}),I=x.useRef(null),L=x.useRef(null),B=Math.max(...o.map(k=>k.x),s),R=[];for(let k=0;k<=B;k+=f)R.push(k);const $=[];for(let k=c;k<=p;k+=w)$.push(k);const W=g||R.map(k=>k.toString()),P=v?Array.from(new Set(o.filter(k=>k.label).map(k=>k.label))).map(k=>{const a=o.find(j=>j.label===k);return{name:k,color:a.color}}):[],A={};o.forEach(k=>{const a=k.label||"default";A[a]||(A[a]=[]),A[a].push(k)});const _=k=>k/B*100,F=k=>{const a=p-c;return 100-(k-c)/a*100};return x.useEffect(()=>{if(u&&L.current){const k=L.current.getBoundingClientRect(),a=_(u.x)/100*k.width,j=F(u.y)/100*k.height;C({x:a+k.left,y:j+k.top})}},[u,s,p,c]),t.jsxs(Mr,{children:[t.jsxs(fe,{style:{marginTop:"0"},children:[t.jsx(ge,{style:{fontSize:h},children:e}),v&&P.length>0&&t.jsx(Er,{children:P.map((k,a)=>t.jsxs(Dr,{children:[t.jsx(Tr,{color:k.color}),t.jsx(Lr,{children:k.name})]},a))})]}),t.jsxs(Ir,{height:b,children:[t.jsxs(Pr,{children:[$.map((k,a)=>t.jsx(Rr,{children:k.toLocaleString()},a)),t.jsx(Te,{children:i})]}),t.jsxs(zr,{ref:L,children:[$.map((k,a)=>t.jsx(Ar,{position:F(k)},`hline-${a}`)),Object.values(A).map((k,a)=>k.map((j,m)=>{if(m===0)return null;const H=k[m-1],X=_(H.x),q=F(H.y),E=_(j.x),D=F(j.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${X}%`,y1:`${q}%`,x2:`${E}%`,y2:`${D}%`,stroke:j.color,strokeWidth:"1"})},`line-${a}-${m}`)})),o.map((k,a)=>t.jsx(Br,{x:_(k.x),y:F(k.y),color:k.color,onMouseEnter:()=>l(k),onMouseLeave:()=>l(null),isHovered:u?.label===k.label},a))]})]}),y&&u&&t.jsxs(Or,{ref:I,style:{left:S.x,top:S.y},children:[t.jsxs(Wr,{children:[u.name&&t.jsx(Nr,{children:u.name}),t.jsx(Hr,{children:u.y.toLocaleString()})]}),t.jsx(Yr,{})]}),t.jsxs(Fr,{children:[W.map((k,a)=>{const m=R[a]/B*100;return t.jsx(_r,{style:{left:`${m}%`,transform:"translateX(-50%)"},children:k},a)}),r&&t.jsx(Te,{children:r})]})]})},Mr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Er=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,Dr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Tr=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,Lr=n.span`
  font-size: 14px;
  color: #4b5563;
`,Ir=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Pr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,Rr=n.span`
  font-size: 12px;
  color: #6b7280;
`,Te=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,zr=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,Ar=n.div`
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
`,Br=n.div`
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
`,Fr=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,_r=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Or=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${$r} 0.15s ease-out forwards;
`,Wr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Nr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Hr=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Yr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Vr=({images:e,initialIndex:o,onClose:r})=>{const[i,s]=x.useState(o),[p,c]=x.useState(0),f=()=>{s(g=>g>0?g-1:e.length-1),c(0)},w=()=>{s(g=>g<e.length-1?g+1:0),c(0)},b=()=>{c(g=>(g+90)%360)},v=g=>{g.key==="Escape"?r():g.key==="ArrowLeft"?f():g.key==="ArrowRight"?w():(g.key==="r"||g.key==="к")&&b()};return t.jsx(Ur,{onClick:r,onKeyDown:v,tabIndex:0,children:t.jsxs(qr,{onClick:g=>g.stopPropagation(),children:[t.jsx(Zr,{onClick:r,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Xr,{children:t.jsx(Gr,{onClick:b,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Jr,{children:[t.jsx(Le,{$position:"left",onClick:f,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Kr,{src:e[i],alt:`Photo ${i+1}`,$rotation:p}),t.jsx(Le,{$position:"right",onClick:w,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Qr,{children:e.map((g,y)=>t.jsx(ei,{$active:y===i,onClick:()=>{s(y),c(0)}},y))})]})})},Ur=n.div`
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
`,qr=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Zr=n.button`
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
`,Xr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Gr=n.button`
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
`,Jr=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Kr=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Le=n.button`
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
`,Qr=n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,ei=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ne=({isOpen:e,callPhone:o,error:r,onClose:i})=>{const[s,p]=x.useState(!1);if(!e)return null;const c=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),f=()=>{c?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),p(!0),setTimeout(()=>p(!1),2e3))};return t.jsx(ti,{onClick:i,children:t.jsxs(ni,{onClick:w=>w.stopPropagation(),children:[t.jsx(oi,{children:"Подтверждение авторизации"}),t.jsx(Ie,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(ri,{onClick:f,title:c?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!c&&s&&t.jsx(ii,{children:"Скопировано!"})]}),t.jsx(Ie,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),r&&t.jsx(si,{children:r})]})})},ti=n.div`
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
`,ni=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,oi=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Ie=n.p`
  margin-bottom: 15px;
  color: #555;
`,ri=n.div`
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
`,ii=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,si=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,He=({isOpen:e,phone:o,isVerifying:r,error:i,onClose:s,onSubmit:p})=>{const[c,f]=x.useState(""),w=x.useRef(null);return x.useEffect(()=>{if(!e)return;const b=window.setTimeout(()=>w.current?.focus(),50);return()=>window.clearTimeout(b)},[e]),e?t.jsx(ai,{onMouseDown:()=>{f(""),s()},children:t.jsxs(li,{onMouseDown:b=>b.stopPropagation(),children:[t.jsx(ci,{children:"Подтверждение по WhatsApp"}),t.jsx(Pe,{children:"Мы отправили код в WhatsApp на номер:"}),t.jsx(di,{children:o}),t.jsx(Pe,{children:"Введите полученный код, чтобы завершить авторизацию."}),t.jsxs(pi,{onSubmit:b=>{b.preventDefault(),c&&!r&&p(c)},children:[t.jsx(ui,{ref:w,type:"text",inputMode:"numeric",autoComplete:"one-time-code",placeholder:"Код из WhatsApp",value:c,onChange:b=>f(b.target.value.replace(/\D/g,"")),disabled:r}),i&&t.jsx(xi,{children:i}),t.jsx(hi,{type:"submit",disabled:!c||r,children:r?"Проверка…":"Подтвердить"})]})]})}):null},ai=n.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;
  box-sizing: border-box;
`,li=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,ci=n.h2`
  font-size: 20px;
  margin: 0 0 20px;
  color: #333;
`,Pe=n.p`
  margin: 0 0 15px;
  color: #555;
`,di=n.div`
  font-size: 22px;
  font-weight: 700;
  margin: 16px 0;
  color: rgba(0, 125, 136, 1);
`,pi=n.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`,ui=n.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: rgba(0, 125, 136, 1);
  }

  &:disabled {
    background: #f5f5f5;
  }
`,xi=n.div`
  color: #e74c3c;
  font-size: 14px;
`,hi=n.button`
  background: linear-gradient(90deg, rgba(0, 125, 136, 1), rgba(37, 203, 161, 1));
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Ye=x.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),fi=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),gi=({items:e,bottomItems:o=[],bottomContent:r,logo:i,arrowIcon:s,collapsed:p,onToggle:c,selectedKey:f,onSelect:w,autoCollapseOnSelect:b=!1,width:v="315px",collapsedWidth:g="85px",className:y,style:h,mobileBreakpoint:u=768,showBottomLabels:l=!0,children:S})=>{const C=x.useContext(Ye),[I,L]=x.useState(window.innerWidth<=u);x.useEffect(()=>{const M=()=>{L(window.innerWidth<=u)};return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[u]);const[B,R]=x.useState(p??C.collapsed??!1),[$,W]=x.useState(null),[P,A]=x.useState(f??C.selectedSideMenuItem??null),[_,F]=x.useState({visible:!1,x:0,y:0,items:[]}),k=x.useRef(null),a=p??C.collapsed??B,j=M=>{R(M),C.toggleCollapsed(),c?.(M)},m=f??C.selectedSideMenuItem??P,H=M=>{A(M),C.setSelectedSideMenuItem(M)};x.useEffect(()=>{p!==void 0&&(R(p),p&&W(null))},[p]),x.useEffect(()=>{f!==void 0&&H(f)},[f]),x.useEffect(()=>{const M=()=>F(O=>({...O,visible:!1}));return document.addEventListener("click",M),()=>document.removeEventListener("click",M)},[]);const X=()=>{const M=!a;j(M),M&&W(null)},q=M=>{M.disabled||M.hidden||(H(M.key),w?.(M),M.onClick?.(M),b&&(j(!0),W(null)))},E=M=>{W(O=>O===M?null:M)},D=(M,O)=>{const N=(M.children?.length||0)>0;if(a&&N){O.stopPropagation();const V=O.currentTarget.getBoundingClientRect();F({visible:!0,x:V.right+6,y:V.top,items:M.children||[]});return}N?E(M.key):q(M)},d=(M,O=!1)=>M.filter(N=>!N.hidden).map(N=>{const V=(N.children?.length||0)>0,G=$===N.key,Z=m===N.key||!!N.children&&N.children.some(Y=>Y.key===m);return t.jsxs(x.Fragment,{children:[t.jsxs(Ei,{$collapsed:a,$selected:Z,onClick:Y=>D(N,Y),$disabled:N.disabled,title:N.label,children:[N.icon&&t.jsx(Ti,{$collapsed:a,children:N.icon}),!a&&t.jsx(Di,{children:N.label}),!a&&V&&t.jsx(Ii,{$expanded:G,children:"▾"})]}),!a&&V&&G&&t.jsx(Li,{children:d(N.children||[],!0)})]},N.key)}),T=x.useMemo(()=>_.visible?t.jsx(Pi,{style:{left:_.x,top:_.y},children:_.items.map(M=>t.jsx(Ri,{onClick:()=>{q(M),F({visible:!1,x:0,y:0,items:[]})},$selected:m===M.key,children:M.label},M.key))}):null,[_,m]),z=()=>{const M=[...e,...o].filter(O=>!O.hidden);return t.jsx(wi,{children:M.map(O=>{const N=m===O.key;return t.jsxs(vi,{$selected:N,onClick:()=>q(O),$disabled:O.disabled,children:[O.icon&&t.jsx(yi,{$selected:N,children:O.icon}),l&&t.jsx(ki,{$selected:N,children:O.label})]},O.key)})})};return I?t.jsxs(bi,{className:y,style:h,children:[t.jsx(mi,{children:S}),z()]}):t.jsxs(Ci,{ref:k,$collapsed:a,$width:v,$collapsedWidth:g,className:y,style:h,children:[t.jsxs(ji,{children:[t.jsx($i,{onClick:X,"aria-label":"Переключить меню",children:s??t.jsx(fi,{collapsed:a})}),!a&&i&&t.jsx(Si,{children:i})]}),t.jsxs(Mi,{children:[t.jsx(Re,{children:d(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ze,{}),t.jsx(Re,{children:d(o)})]}),r&&t.jsxs(t.Fragment,{children:[(o.length>0||e.length>0)&&t.jsx(ze,{}),t.jsx(Ai,{$collapsed:a,children:r})]})]}),T,t.jsx(zi,{$collapsed:a}),S]})},bi=n.div`
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
`,mi=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,wi=n.nav`
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
`,vi=n.div`
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
`,yi=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,ki=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,Ci=n.div`
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
`,ji=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,$i=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`,Si=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,Mi=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Re=n.div`
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
`,Ei=n.div`
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
`,Di=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,Ti=n.div`
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
`,Li=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ii=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,ze=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,Pi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,Ri=n.div`
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
`,zi=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,Ai=n.div`
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
`,Bi=e=>{const o=e.replace(/\D/g,""),i=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let s="";return i.length>0&&(s+="8"),i.length>1&&(s+=` (${i.slice(1,4)}`),i.length>4&&(s+=`) ${i.slice(4,7)}`),i.length>7&&(s+=`-${i.slice(7,9)}`),i.length>9&&(s+=`-${i.slice(9,11)}`),s},Ve=({value:e,onChange:o,placeholder:r="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const s=p=>{const c=Bi(p.target.value);o(c)};return t.jsx(Fi,{type:"text",value:e,onChange:s,placeholder:r,maxLength:18,tabIndex:i})},Fi=n.input`
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
`;class _i{async subscribe(o,r,i){return K("/Pay/subscribe",{method:"POST",body:{tariffType:o,days:r??null,ones:i??null}})}async cancelSubscription(o){const r={};return o!==void 0&&(r.tariffType=o),K("/Pay/cancel",{method:"POST",body:r})}async getSubscriptionInfo(o){let r="/Pay/status";return o!==void 0&&(r+=`?tariffType=${o}`),K(r,{method:"GET"})}async isSubscriptionActive(o){return(await this.getSubscriptionInfo(o)).isActive}async getSubscriptionEndDate(o){return(await this.getSubscriptionInfo(o)).endAt}}const re=new _i,Oi=({paymentUrl:e,onPaymentComplete:o,expiresAt:r,status:i,tariffType:s,onCheckStatus:p})=>{const[c,f]=x.useState(1),[w,b]=x.useState(!1),[v,g]=x.useState(null),[y,h]=x.useState(!1),[u,l]=x.useState(null),[S,C]=x.useState(i||"Pending"),I=x.useRef(!1),L=x.useRef(!0),B=x.useRef(null),R=x.useRef(null),$=x.useCallback(m=>{const H=new Date().getTime(),q=new Date(m).getTime()-H;if(q<=0)return"00:00";const E=Math.floor(q%(1e3*60*60)/(1e3*60)),D=Math.floor(q%(1e3*60)/1e3);return`${E.toString().padStart(2,"0")}:${D.toString().padStart(2,"0")}`},[]),W=x.useCallback(()=>{r&&c===1&&S==="Pending"&&$(r)==="00:00"&&(l("Время ожидания оплаты истекло"),R.current&&(clearInterval(R.current),R.current=null))},[r,c,S,$]),P=x.useCallback(()=>{!r||c!==1||S!=="Pending"||(W(),R.current&&clearInterval(R.current),R.current=window.setInterval(()=>{L.current&&c===1&&S==="Pending"&&W()},1e3))},[r,c,S,W]),A=x.useCallback(()=>{R.current&&(clearInterval(R.current),R.current=null)},[]),_=x.useCallback(()=>{B.current&&(clearInterval(B.current),B.current=null)},[]),F=x.useCallback(async()=>{if(I.current||c===3||S==="Active"){console.log("Пропуск проверки:",{isChecking:I.current,paymentStep:c,currentStatus:S});return}try{if(I.current=!0,l(null),p){const m=await p();m.success&&m.status==="Active"?(C("Active"),f(3),A(),_(),o&&o()):m.status==="Pending"?(C("Pending"),f(1),m.transaction_status==="Authorized"&&f(2)):m.status==="Expired"&&(C("Active"),f(3),A(),_(),o&&o())}}catch(m){console.error("Ошибка при проверке статуса:",m),l("Не удалось проверить статус оплаты")}finally{L.current&&(I.current=!1)}},[p,o,S,A,_]);x.useEffect(()=>{if(c===3){const m=setTimeout(()=>{o&&o()},2e3);return()=>clearTimeout(m)}},[c,o]);const k=x.useCallback(()=>{B.current||S==="Active"||(F(),B.current=window.setInterval(()=>{L.current&&S!=="Active"&&F()},5e3))},[F,S]);x.useEffect(()=>(L.current=!0,S==="Active"?f(3):S==="Pending"&&(k(),P()),()=>{L.current=!1,_(),A()}),[S,k,P,_,A]),x.useEffect(()=>{c===1&&S==="Pending"?P():A()},[c,S,P,A]);const a=m=>c>m?"completed":c===m?"current":"pending",j=async()=>{try{await re.cancelSubscription(s),b(!0),g(null),_(),A(),window.location.reload()}catch(m){console.error("Ошибка при отмене подписки:",m),g("Произошла ошибка при отмене подписки")}finally{b(!1),h(!1)}};return t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"12px",boxSizing:"border-box"},children:[t.jsxs("div",{style:{maxWidth:"600px",width:"100%",backgroundColor:"white",borderRadius:"20px",padding:"24px 16px",position:"relative",margin:"12px 0"},children:[!y&&t.jsx("button",{onClick:()=>h(!0),className:"desktop-cancel-button",style:{position:"absolute",top:"12px",right:"12px",backgroundColor:"transparent",color:"#999",border:"1px solid #ddd",padding:"6px 12px",borderRadius:"20px",fontSize:"13px",cursor:"pointer",transition:"all 0.3s",zIndex:10,minHeight:"36px",minWidth:"80px"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#f5f5f5",m.currentTarget.style.color="#666"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent",m.currentTarget.style.color="#999"},children:"✕ Отменить"}),y&&t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"16px",boxSizing:"border-box"},children:t.jsxs("div",{style:{backgroundColor:"white",borderRadius:"16px",padding:"24px 20px",maxWidth:"400px",width:"100%",textAlign:"center",maxHeight:"90vh",overflowY:"auto"},children:[t.jsx("h3",{style:{color:"#333",marginBottom:"12px",fontSize:"20px",lineHeight:"1.4"},children:"Отменить оформление?"}),t.jsx("p",{style:{color:"#666",marginBottom:"24px",fontSize:"15px",lineHeight:"1.5"},children:"Вы уверены, что хотите отменить оформление подписки? Вам придется начать заново."}),v&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px",borderRadius:"8px",marginBottom:"20px",fontSize:"14px"},children:v}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx("button",{onClick:j,disabled:w,style:{width:"100%",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"bold",cursor:w?"not-allowed":"pointer",opacity:w?.7:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:m=>{w||(m.currentTarget.style.backgroundColor="#D32F2F")},onMouseLeave:m=>{w||(m.currentTarget.style.backgroundColor="#F44336")},children:w?"Отмена...":"Да, отменить"}),t.jsx("button",{onClick:()=>{h(!1),g(null)},disabled:w,style:{width:"100%",backgroundColor:"#f5f5f5",color:"#666",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",cursor:w?"not-allowed":"pointer",opacity:w?.5:1,transition:"background-color 0.3s",minHeight:"48px"},onMouseEnter:m=>{w||(m.currentTarget.style.backgroundColor="#e0e0e0")},onMouseLeave:m=>{w||(m.currentTarget.style.backgroundColor="#f5f5f5")},children:"Нет, вернуться"})]})]})}),t.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[t.jsxs("h1",{style:{color:"#333",marginBottom:"8px",fontSize:"24px",lineHeight:"1.3",padding:"0 8px"},children:[c===1&&S==="Pending"&&"Ожидание оплаты",c===2&&"Подтверждение платежа",c===3&&"Платёж завершён"]}),t.jsxs("p",{style:{color:"#666",fontSize:"15px",lineHeight:"1.5",padding:"0 12px",margin:0},children:[c===1&&S==="Pending"&&"Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.",c===2&&"Платёж обрабатывается банком. Обычно это занимает несколько секунд.",c===3&&"Подписка успешно активирована! Спасибо за покупку."]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"32px",position:"relative",padding:"0 4px"},children:[t.jsx("div",{style:{position:"absolute",top:"15px",left:"18%",right:"18%",height:"2px",backgroundColor:"#E0E0E0",zIndex:1},children:t.jsx("div",{style:{width:c===1?"0%":c===2?"50%":"100%",height:"100%",backgroundColor:"#007D88",transition:"width 0.5s ease"}})}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:a(1)==="completed"||a(1)==="current"?"#007D88":"#E0E0E0",border:a(1)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",fontWeight:"bold"},children:a(1)==="completed"?"✓":"1"}),t.jsx("div",{style:{color:a(1)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:a(1)==="current"?"bold":"normal"},children:"Начало"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:a(2)==="completed"?"#007D88":a(2)==="current"?"white":"#E0E0E0",border:a(2)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:a(2)==="current"?"#007D88":a(2)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:a(2)==="completed"?"✓":"2"}),t.jsx("div",{style:{color:a(2)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:a(2)==="current"?"bold":"normal"},children:"Подтверждение"})]}),t.jsxs("div",{style:{textAlign:"center",position:"relative",zIndex:2,flex:1},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:a(3)==="completed"?"#007D88":a(3)==="current"?"white":"#E0E0E0",border:a(3)==="current"?"3px solid #007D88":"none",margin:"0 auto 8px",display:"flex",alignItems:"center",justifyContent:"center",color:a(3)==="current"?"#007D88":a(3)==="completed"?"white":"#999",fontSize:"14px",fontWeight:"bold"},children:a(3)==="completed"?"✓":"3"}),t.jsx("div",{style:{color:a(3)==="current"?"#007D88":"#999",fontSize:"11px",fontWeight:a(3)==="current"?"bold":"normal"},children:"Завершено"})]})]}),t.jsxs("div",{style:{backgroundColor:"#F9FAFA",borderRadius:"12px",padding:"20px 16px",marginBottom:"24px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("div",{style:{color:"#999",fontSize:"13px",marginBottom:"8px"},children:"Ссылка для оплаты"}),t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:"#007D88",textDecoration:"none",fontSize:"14px",wordBreak:"break-all",display:"block",padding:"12px 16px",backgroundColor:"#E8F4F5",borderRadius:"8px",transition:"background-color 0.3s",lineHeight:"1.5",minHeight:"44px"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#D1E9EB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="#E8F4F5"},children:e})]}),c===1&&t.jsx("div",{style:{borderTop:"1px solid #E0E0E0",paddingTop:"16px"},children:!y&&t.jsx("button",{onClick:()=>h(!0),className:"mobile-cancel-button",style:{width:"100%",margin:"16px 0 0px 0px",backgroundColor:"#F44336",color:"white",border:"none",padding:"14px",borderRadius:"8px",fontSize:"16px",fontWeight:"500",cursor:"pointer",transition:"background-color 0.3s",zIndex:10},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#D32F2F"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="#F44336"},children:"✕ Отменить оформление"})})]}),u&&c!==3&&S!=="Active"&&t.jsx("div",{style:{backgroundColor:"#FFEBEE",color:"#F44336",padding:"12px 16px",borderRadius:"8px",marginBottom:"16px",fontSize:"14px",textAlign:"center",lineHeight:"1.5"},children:u}),c===2&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#F9FAFA",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#007D88",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Платёж обрабатывается банком. Это может занять от нескольких секунд до часа."})}),S==="Active"&&c!==3&&t.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#E8F5E9",borderRadius:"12px",textAlign:"center"},children:t.jsx("p",{style:{color:"#2E7D32",fontSize:"14px",margin:0,lineHeight:"1.5"},children:"Подписка активна! Страница будет обновлена автоматически."})})]}),t.jsx("style",{children:`
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
      `})]})},Ue=(e={})=>{const{tariffType:o,autoRedirect:r=!1,onSuccess:i,onCancel:s,onError:p}=e,[c,f]=x.useState(!1),[w,b]=x.useState(!1),[v,g]=x.useState(!1),[y,h]=x.useState(!1),[u,l]=x.useState(null),[S,C]=x.useState(null),[I,L]=x.useState(null),[B,R]=x.useState(null),[$,W]=x.useState(!1),P=x.useCallback(async(k,a,j)=>{b(!0),f(!0),l(null),C(null);try{const m=await re.subscribe(k,a,j);return C(m),r&&m.paymentUrl&&(window.location.href=m.paymentUrl),i?.(m),m}catch(m){const H=m instanceof Error?m.message:"Unknown error occurred";return l(H),p?.(H),null}finally{b(!1),f(!1)}},[r,i,p]),A=x.useCallback(async k=>{g(!0),f(!0),l(null),L(null);try{const a=k??o,j=await re.cancelSubscription(a);return L(j),s?.(j),j}catch(a){const j=a instanceof Error?a.message:"Unknown error occurred";return l(j),p?.(j),null}finally{g(!1),f(!1)}},[o,s,p]),_=x.useCallback(async k=>{h(!0),l(null);try{const a=k??o,j=await re.getSubscriptionInfo(a);return R(j),W(j.isActive),j}catch(a){const j=a instanceof Error?a.message:"Unknown error occurred";return l(j),p?.(j),null}finally{h(!1)}},[o,p]),F=x.useCallback(()=>{f(!1),b(!1),g(!1),h(!1),l(null),C(null),L(null),R(null),W(!1)},[]);return{isLoading:c,isSubscribing:w,isCancelling:v,isFetchingStatus:y,error:u,subscriptionData:S,cancelData:I,statusData:B,isActive:$,subscribe:P,cancelSubscription:A,getSubscriptionStatus:_,resetState:F}},Wi=[{id:1,days:30,label:"1 месяц",price:4999},{id:2,days:90,label:"3 месяца",price:14999},{id:3,days:180,label:"6 месяцев",price:29999},{id:4,days:365,label:"1 год",price:59999,popular:!0}],Ni=[{id:1,ones:1,label:"Разовый доступ",price:999,description:"1 разовое использование"},{id:2,ones:5,label:"Пакет 5 раз",price:4499,description:"5 разовых использований",popular:!0},{id:3,ones:10,label:"Пакет 10 раз",price:8499,description:"10 разовых использований"},{id:4,ones:20,label:"Пакет 20 раз",price:15999,description:"20 разовых использований"}],Hi=({tariffType:e="WaypayCrm",subscriptionType:o="days",plans:r,onPaymentSuccess:i,onError:s,autoRedirect:p=!0,buttonText:c="Оформить",loadingText:f="Обработка...",showSelectedIndicator:w=!0,className:b,title:v="Подписка",subTitle:g="WayPay CRM"})=>{const[y,h]=x.useState(null),u=r||(o==="days"?Wi:Ni),{isLoading:l,error:S,subscribe:C,resetState:I}=Ue({tariffType:e,autoRedirect:p,onSuccess:$=>{p&&$.paymentUrl&&(window.location.href=$.paymentUrl),i?.()},onError:$=>{s?.($)}});x.useEffect(()=>{if(!y&&u.length>0){const $=u.find(W=>W.popular)||u[0];h($)}},[u,y]);const L=async()=>{if(!y){s?.("Выберите тарифный план");return}const $=o==="days"?y.days:void 0,W=o==="ones"?y.ones:void 0;await C(e,$,W)},B=$=>new Intl.NumberFormat("ru-RU").format($),R=$=>o==="days"?$.days:$.ones;return t.jsxs(Yi,{className:b,children:[t.jsxs(Vi,{children:[t.jsx(Ui,{children:v}),t.jsx(qi,{children:g})]}),(S||typeof S=="string"&&S)&&t.jsxs(os,{children:[t.jsx("span",{children:S}),t.jsx(rs,{onClick:I,children:"×"})]}),t.jsx(Zi,{children:u.map($=>{const W=R($),P=y?.id===$.id;return t.jsxs(Xi,{$isSelected:P,$isPopular:!!$.popular,onClick:()=>h($),children:[t.jsxs(Gi,{children:[t.jsxs(Ji,{children:[$.label,$.popular&&t.jsx(Ki,{children:"Популярный"})]}),$.description&&t.jsx(Qi,{children:$.description}),W!==void 0&&o==="days"&&t.jsxs(Ae,{children:[W," дней"]}),W!==void 0&&o==="ones"&&t.jsxs(Ae,{children:[W," шт."]})]}),t.jsxs(es,{children:[B($.price)," ₽"]}),w&&P&&t.jsx(ts,{})]},$.id)})}),t.jsx(ns,{onClick:L,disabled:l,children:l?f:c})]})},Yi=n.div`
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
`,Vi=n.div`
  margin-bottom: 28px;
  text-align: center;
`,Ui=n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`,qi=n.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0;
`,Zi=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`,Xi=n.div`
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
`,Gi=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,Ji=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`,Ki=n.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`,Qi=n.div`
  font-size: 12px;
  color: #8c8c8c;
`,Ae=n.div`
  font-size: 11px;
  color: #007D88;
  font-weight: 500;
`,es=n.span`
  font-size: 16px;
  font-weight: 600;
  color: #007D88;
`,ts=n.div`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #007D88 transparent transparent;
  border-radius: 0 12px 0 0;
`,ns=n.button`
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
`,os=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`,rs=n.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`,is=e=>({call_phone:e.call_phone??e.callPhone,check_id:e.check_id??e.checkId,name_required:e.name_required??e.nameRequired}),qe=async(e,o,r="CallCheck")=>{const s=await K("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o,userType:o,auth_way:r,authWay:r}});return is(s)},pe=(e,o,r,i,s="CallCheck")=>K("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,checkId:o,user_type:r,userType:r,name:i,auth_way:s,authWay:s}}),ss=()=>K("/auth/session/info",{method:"GET"}),as=({isOpen:e,onClose:o,onSubmit:r,error:i,isLoading:s=!1})=>{const[p,c]=x.useState("");if(!e)return null;const f=w=>{w.preventDefault(),r(p)};return t.jsx(ls,{onClick:o,children:t.jsx(cs,{onClick:w=>w.stopPropagation(),children:t.jsxs(ds,{onSubmit:f,children:[t.jsx(ps,{children:"Как вас зовут?"}),t.jsxs(us,{children:[t.jsx(he,{type:"text",value:p,onChange:w=>c(w.target.value),placeholder:"Иванов Иван Иванович",disabled:s,autoFocus:!0,style:{flex:1}}),t.jsx(xs,{type:"submit",disabled:s||!p.trim(),children:s?"...":"→"})]}),i&&t.jsx(hs,{children:i})]})})})},ls=n.div`
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
`,cs=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,ds=n.form`
  display: flex;
  flex-direction: column;
`,ps=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,us=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,xs=n(se)`
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
`,hs=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,fs=({onLoginSuccess:e,userType:o="delivery_operator",title:r="Авторизация",submitLabel:i="Войти",placeholder:s="8 (xxx) xxx-xx-xx",supportPhone:p="8 989 924 24 24",supportLinkUrl:c="https://waypay.one",supportLinkText:f="waypay.one",className:w,style:b,pollingIntervalMs:v=3e3,enableRegistration:g=!1,enableSupport:y=!0})=>{const[h,u]=x.useState(!1),[l,S]=x.useState(""),[C,I]=x.useState("CallCheck"),[L,B]=x.useState(!1),[R,$]=x.useState(!1),[W,P]=x.useState(""),[A,_]=x.useState(""),[F,k]=x.useState(!1),[a,j]=x.useState(!1),[m,H]=x.useState(""),[X,q]=x.useState(""),[E,D]=x.useState(null),d=x.useRef(void 0);x.useEffect(()=>()=>{d.current&&clearInterval(d.current)},[]);const T=Z=>{const Y=Z.replace(/\D/g,"");return Y?Y.startsWith("8")?`+7${Y.slice(1)}`:Y.startsWith("7")?`+${Y}`:`+${Y}`:""},z=()=>{B(!1),$(!1),j(!1),H(""),q(""),D(null),d.current&&window.clearInterval(d.current)},M=async Z=>{if(Z.preventDefault(),!l){_("Введите номер телефона");return}u(!0),_("");const Y=T(l);try{const U=await qe(Y,o,C);D({phone:Y,checkId:U.check_id,callPhone:U.call_phone}),g&&"name_required"in U&&U.name_required?(j(!0),P(U.call_phone)):!g&&"name_required"in U&&U.name_required?(_("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),D(null)):C==="WhatsAppCode"?$(!0):(P(U.call_phone),B(!0),N(Y,U.check_id))}catch(U){console.error("Auth error:",U),U&&U.response&&U.response.data?_(U.response.data):U instanceof Error?_(U.message):_("Произошла ошибка при авторизации")}finally{u(!1)}},O=async Z=>{if(!Z.trim()){q("Введите ФИО");return}if(E){u(!0),q("");try{H(Z),j(!1),C==="WhatsAppCode"?$(!0):(B(!0),N(E.phone,E.checkId,Z))}catch(Y){console.error("Registration error:",Y),q("Не удалось завершить регистрацию")}finally{u(!1)}}},N=(Z,Y,U)=>{d.current&&window.clearInterval(d.current),d.current=window.setInterval(()=>{V(Z,Y,U)},v)},V=async(Z,Y,U)=>{if(!F){k(!0);try{const J=await pe(Z,Y,o,U||m,"CallCheck");(J.access_token&&J.refresh_token||J.accessToken&&J.refreshToken)&&(d.current&&window.clearInterval(d.current),B(!1),j(!1),H(""),D(null),e(J.access_token??J.accessToken))}catch(J){console.error("Verification error:",J)}finally{k(!1)}}},G=async Z=>{if(!(F||!E)){k(!0),_("");try{const Y=await pe(E.phone,Z,o,m||void 0,"WhatsAppCode");Y.access_token&&Y.refresh_token||Y.accessToken&&Y.refreshToken?($(!1),H(""),D(null),e(Y.access_token??Y.accessToken)):_("Неверный код. Попробуйте ещё раз.")}catch(Y){console.error("WhatsApp verification error:",Y);const U=Y instanceof Error?Y.message:void 0;_(U||"Неверный код. Попробуйте ещё раз.")}finally{k(!1)}}};return t.jsxs(gs,{className:w,style:b,children:[t.jsxs(bs,{children:[t.jsxs(ms,{onSubmit:M,children:[t.jsx(ws,{children:r}),t.jsx(vs,{children:t.jsx(ks,{children:t.jsx(Ve,{value:l,onChange:Z=>S(Z),placeholder:s})})}),t.jsxs(ys,{role:"tablist","aria-label":"Способ авторизации",children:[t.jsx(Be,{type:"button",role:"tab","aria-selected":C==="CallCheck",$active:C==="CallCheck",onClick:()=>I("CallCheck"),children:"Звонок"}),t.jsx(Be,{type:"button",role:"tab","aria-selected":C==="WhatsAppCode",$active:C==="WhatsAppCode",onClick:()=>I("WhatsAppCode"),children:"WhatsApp"})]}),A&&t.jsx(Ms,{children:t.jsx("span",{children:A})}),t.jsx(Cs,{type:"submit",disabled:h,children:h?"Загрузка...":i})]}),y&&t.jsxs(js,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx($s,{href:`tel:${p}`,children:p}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(Ss,{href:c,target:"_blank",rel:"noreferrer",children:f})]})]}),t.jsx(as,{isOpen:a,onClose:z,onSubmit:O,error:X,isLoading:h}),t.jsx(Ne,{isOpen:L,onClose:z,callPhone:W,error:A}),t.jsx(He,{isOpen:R,onClose:z,onSubmit:G,phone:E?.phone??T(l),isVerifying:F,error:A})]})},gs=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,bs=n.div`
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
`,ms=n.form`
  display: flex;
  flex-direction: column;
`,ws=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,vs=n.div`
  margin-bottom: 25px;
`,ys=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #f1f4f5;
`,Be=n.button`
  border: 0;
  border-radius: 8px;
  padding: 11px 14px;
  color: ${({$active:e})=>e?"#ffffff":"#667085"};
  background: ${({$active:e})=>e?"linear-gradient(90deg, rgba(0, 125, 136, 1), rgba(37, 203, 161, 1))":"transparent"};
  box-shadow: ${({$active:e})=>e?"0 2px 8px rgba(0, 125, 136, 0.18)":"none"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
`,ks=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,Cs=n.button`
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
`,js=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,$s=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Ss=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Ms=n.div`
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
`,Ze=e=>{let o=0;for(let i=0;i<e.length;i++)o=e.charCodeAt(i)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},Es=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Ds=(e,o=100)=>{const r=document.createElement("canvas");r.width=o,r.height=o;const i=r.getContext("2d");if(!i)return"";const s=Ze(e);i.fillStyle=s,i.beginPath(),i.arc(o/2,o/2,o/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const p=o/2;i.font=`bold ${p}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const c=p*.1;return i.fillText(e,o/2,o/2+c),r.toDataURL("image/png")},Ts=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const r=o.getDate().toString().padStart(2,"0"),i=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear();return`${r}-${i}-${s}`};function Ls(e){return new Date(e)}const Xe=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const r=new Date;if(o>r){const v=Math.floor((o.getTime()-r.getTime())/1e3),g=Math.floor(v/60),y=Math.floor(g/60),h=Math.floor(y/24);return v<10?"скоро":v<60?`через ${v} секунд`:g===1?"через минуту":g<60?`через ${g} минут`:y===1?"через час":y<24?`через ${y} часов`:h===1?"завтра":h<7?`через ${h} дней`:"в будущем"}const i=Math.floor((r.getTime()-o.getTime())/1e3),s=Math.floor(i/60),p=Math.floor(s/60),c=Math.floor(p/24),f=Math.floor(c/7),w=Math.floor(c/30),b=Math.floor(c/365);if(i<10)return"только что";if(i<60){const v=Math.max(1,i);return v===1?"секунду назад":v<5?`${v} секунды назад`:`${v} секунд назад`}return s<60?s===1?"минуту назад":s<5?`${s} минуты назад`:`${s} минут назад`:p<24?p===1?"час назад":p<5?`${p} часа назад`:`${p} часов назад`:c<7?c===1?"вчера":c===2?"позавчера":`${c} дня назад`:f<4?f===1?"неделю назад":f<5?`${f} недели назад`:`${f} недель назад`:w<12?w===1?"месяц назад":w<5?`${w} месяца назад`:`${w} месяцев назад`:b===1?"год назад":b<5?`${b} года назад`:`${b} лет назад`}catch(r){return console.error("Ошибка форматирования относительного времени:",r),"ошибка даты"}},Ge=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Is=(e,o={})=>{const{useExactAfterMonths:r=6,includeTime:i=!0}=o,s=new Date(e);return isNaN(s.getTime()),Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24*30))>=r?i?Ge(s):s.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Xe(s)};exports.API_BASE_URL=ie;exports.AddButton=mt;exports.AuthCallModal=Ne;exports.AuthPage=fs;exports.AuthWhatsAppModal=He;exports.BASE_URL=yt;exports.BackButton=St;exports.BaseModal=_e;exports.Checkbox=Qt;exports.ColumnChart=rr;exports.ContextMenu=ue;exports.CountInfoTitle=Io;exports.CustomCalendar=ce;exports.CustomInput=he;exports.CustomPhoneInput=Ve;exports.CustomSelect=Ft;exports.CustomTable=st;exports.CustomTextArea=In;exports.CustomTitle=ge;exports.DefaultButton=se;exports.DeleteButton=Dt;exports.EditButton=Lt;exports.EntitySelectContainer=ko;exports.ExportButton=Rt;exports.FILE_BASE_URL=kt;exports.InputContainer=$n;exports.InputLabel=jn;exports.InputRow=Cn;exports.InputTitle=Ro;exports.ModalInfoTitle=zo;exports.Pagination=Tn;exports.PeriodField=Xn;exports.PhoneModalInput=co;exports.PhotoViewerModal=Vr;exports.ProgressBar=Ho;exports.RadioButton=Oo;exports.ScatterPlot=Sr;exports.SideMenu=gi;exports.SideMenuContext=Ye;exports.SubscriptionBlock=Hi;exports.SubscriptionPendingPage=Oi;exports.Tabs=fo;exports.TitleField=fe;exports.ToggleSwitch=_o;exports.YandexMapSelector=Go;exports.apiRequest=K;exports.authStorage=jt;exports.confirmCallAuth=pe;exports.downloadFile=Ct;exports.formatDate=Ts;exports.formatExactDate=Ge;exports.formatMoney=de;exports.formatRelativeTime=Xe;exports.formatRelativeTimeExtended=Is;exports.generateAvatar=Ds;exports.getInitials=Es;exports.getSessionInfo=ss;exports.initiateCallAuth=qe;exports.parseDateInput=Ls;exports.parseMoney=or;exports.refreshAccessToken=xe;exports.stringToColor=Ze;exports.useSubscription=Ue;
