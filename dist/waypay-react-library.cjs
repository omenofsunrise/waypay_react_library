"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const k=require("react"),o=require("styled-components"),U=require("framer-motion");var Q={exports:{}},G={};var he;function Ve(){if(he)return G;he=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(i,r,c){var p=null;if(c!==void 0&&(p=""+c),r.key!==void 0&&(p=""+r.key),"key"in r){c={};for(var g in r)g!=="key"&&(c[g]=r[g])}else c=r;return r=c.ref,{$$typeof:e,type:i,key:p,ref:r!==void 0?r:null,props:c}}return G.Fragment=n,G.jsx=s,G.jsxs=s,G}var J={};var xe;function Ze(){return xe||(xe=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===F?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case l:return"Fragment";case w:return"Profiler";case I:return"StrictMode";case E:return"Suspense";case Y:return"SuspenseList";case W:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case f:return"Portal";case P:return a.displayName||"Context";case A:return(a._context.displayName||"Context")+".Consumer";case z:var M=a.render;return a=a.displayName,a||(a=M.displayName||M.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case D:return M=a.displayName||null,M!==null?M:e(a.type)||"Memo";case B:M=a._payload,a=a._init;try{return e(a(M))}catch{}}return null}function n(a){return""+a}function s(a){try{n(a);var M=!1}catch{M=!0}if(M){M=console;var L=M.error,O=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return L.call(M,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",O),n(a)}}function i(a){if(a===l)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===B)return"<...>";try{var M=e(a);return M?"<"+M+">":"<...>"}catch{return"<...>"}}function r(){var a=y.A;return a===null?null:a.getOwner()}function c(){return Error("react-stack-top-frame")}function p(a){if(d.call(a,"key")){var M=Object.getOwnPropertyDescriptor(a,"key").get;if(M&&M.isReactWarning)return!1}return a.key!==void 0}function g(a,M){function L(){_||(_=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",M))}L.isReactWarning=!0,Object.defineProperty(a,"key",{get:L,configurable:!0})}function j(){var a=e(this.type);return R[a]||(R[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function h(a,M,L,O,H,Z){var N=L.ref;return a={$$typeof:C,type:a,key:M,props:L,_owner:O},(N!==void 0?N:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:j}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:H}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Z}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function b(a,M,L,O,H,Z){var N=M.children;if(N!==void 0)if(O)if($(N)){for(O=0;O<N.length;O++)x(N[O]);Object.freeze&&Object.freeze(N)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(N);if(d.call(M,"key")){N=e(a);var X=Object.keys(M).filter(function(He){return He!=="key"});O=0<X.length?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}",S[N+O]||(X=0<X.length?"{"+X.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,O,N,X,N),S[N+O]=!0)}if(N=null,L!==void 0&&(s(L),N=""+L),p(M)&&(s(M.key),N=""+M.key),"key"in M){L={};for(var ee in M)ee!=="key"&&(L[ee]=M[ee])}else L=M;return N&&g(L,typeof a=="function"?a.displayName||a.name||"Unknown":a),h(a,N,L,r(),H,Z)}function x(a){m(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===B&&(a._payload.status==="fulfilled"?m(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function m(a){return typeof a=="object"&&a!==null&&a.$$typeof===C}var u=k,C=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),y=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,d=Object.prototype.hasOwnProperty,$=Array.isArray,T=console.createTask?console.createTask:function(){return null};u={react_stack_bottom_frame:function(a){return a()}};var _,R={},V=u.react_stack_bottom_frame.bind(u,c)(),v=T(i(c)),S={};J.Fragment=l,J.jsx=function(a,M,L){var O=1e4>y.recentlyCreatedOwnerStacks++;return b(a,M,L,!1,O?Error("react-stack-top-frame"):V,O?T(i(a)):v)},J.jsxs=function(a,M,L){var O=1e4>y.recentlyCreatedOwnerStacks++;return b(a,M,L,!0,O?Error("react-stack-top-frame"):V,O?T(i(a)):v)}})()),J}var fe;function Ue(){return fe||(fe=1,process.env.NODE_ENV==="production"?Q.exports=Ve():Q.exports=Ze()),Q.exports}var t=Ue();const le=({x:e,y:n,items:s,onClose:i,...r})=>{const c=k.useRef(null),[p,g]=k.useState(null);k.useEffect(()=>{const u=C=>{c.current&&!c.current.contains(C.target)&&i()};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[i]);const h=(()=>{if(!c.current)return{x:e,y:n};const u=c.current.offsetWidth,C=c.current.offsetHeight,f=window.innerWidth,l=window.innerHeight;let I=e,w=n;return I+u>f&&(I=e-u),w+C>l&&(w=n-C),{x:I,y:w}})(),b=(u,C)=>{u.submenu?g(p===C?null:C):u.action&&(u.action(),i())},x=u=>{s[u].submenu&&g(u)},m=u=>{const C=u.relatedTarget;c.current?.contains(C)||g(null)};return t.jsx(Xe,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:h.y,left:h.x},onClick:u=>u.stopPropagation(),onMouseLeave:m,...r,children:s.map((u,C)=>t.jsxs(qe,{$hasSubmenu:!!u.submenu,$disabled:u.disabled,children:[t.jsx(Ge,{onClick:f=>{f.stopPropagation(),u.disabled||b(u,C)},onMouseEnter:()=>!u.disabled&&x(C),whileHover:u.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:u.color,$disabled:u.disabled,children:t.jsxs(Je,{children:[u.label,u.submenu&&t.jsx(Ke,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),u.submenu&&p===C&&t.jsx(Qe,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(le,{x:0,y:-C*40,items:u.submenu,onClose:()=>g(null)})})]},C))})},Xe=o(U.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,qe=o.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,Ge=o(U.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:n})=>n?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Je=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Ke=o.span`
  color: #666;
  margin-left: 8px;
`,Qe=o(U.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,et=({columns:e,data:n,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:c,onRowClick:p,selectedRow:g,fixedHeight:j,hasTotalsRow:h,debtChecker:b,rowStyles:x={},isLoading:m})=>{const[u,C]=k.useState(null),[f,l]=k.useState(null),I=k.useRef(null),w=k.useRef(null),A=500,P=g!==void 0?g:u,z=v=>{!e[v].isSortable||!r||r(v)},Y=b||(v=>{const S=v[8];return typeof S=="string"?parseFloat(S.replace(/[^\d.]/g,""))>0:!1}),D=v=>{g===void 0&&C(v===P?null:v),p&&p(n[v],v)},B=(v,S)=>{s&&s(v,S)},W=(v,S)=>{if(i.length===0)return;v.preventDefault();const a="touches"in v?v.touches[0].clientX:v.clientX,M="touches"in v?v.touches[0].clientY:v.clientY;l({x:a,y:M,rowIndex:S})},F=(v,S)=>{v.preventDefault(),W(v,S)},y=(v,S)=>{i.length!==0&&(w.current&&clearTimeout(w.current),w.current=window.setTimeout(()=>{W(v,S)},A))},d=()=>{w.current&&(clearTimeout(w.current),w.current=null)},$=()=>{w.current&&window.clearTimeout(w.current)},T=()=>{l(null)};k.useEffect(()=>{const v=()=>{f&&T()};return document.addEventListener("click",v),()=>{document.removeEventListener("click",v),w.current&&clearTimeout(w.current)}},[f]);const _=(v,S,a)=>{if(S)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const M=x[v]||{};return v===P?{backgroundColor:M.backgroundColor||"#007D88",color:M.color||"#FFFFFF",fontWeight:M.fontWeight||"normal"}:a?{backgroundColor:M.backgroundColor||"#E8D8D8",color:M.color||"inherit",fontWeight:M.fontWeight||"normal"}:n[v][n[v].length-1]===!1?{backgroundColor:M.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:M.fontWeight||"normal"}:{backgroundColor:M.backgroundColor||"#FFFFFF",color:M.color||"inherit",fontWeight:M.fontWeight||"normal"}},R=(v,S,a)=>{if(S)return"#FFFFFF";const M=_(v,S,a);return M.hoverBackgroundColor?M.hoverBackgroundColor:v===P?"#007D88":a?"#E8D8D8CC":n[v][n[v].length-1]===!1?"#51D5B4CC":"#F3F4F6"},V=()=>{if(!f||i.length===0)return null;const v=(typeof i=="function"?i(n[f.rowIndex]):i).filter(S=>typeof S=="object"&&(typeof S.shouldShow!="function"||S.shouldShow(n[f.rowIndex])));return v.length===0?null:t.jsx(it,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:f.x,top:f.y,zIndex:1e3},onClick:S=>S.stopPropagation(),children:t.jsx(le,{items:v.map(S=>{const a={label:S.label,color:S.color,disabled:S.disabled};return S.getSubmenu?a.submenu=S.getSubmenu(n[f.rowIndex]):S.action&&(a.action=()=>{S.action(n[f.rowIndex],f.rowIndex),T()}),a}),onClose:T,x:0,y:0})})};return t.jsx(nt,{ref:I,children:m?t.jsx(tt,{children:t.jsx(ot,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(rt,{children:[t.jsx(st,{children:t.jsx(ge,{children:e.map((v,S)=>!v.isHidden&&t.jsx(lt,{$isSortable:v.isSortable,$isActive:c?.key===S,onClick:()=>z(S),$align:v.align||"center",$isFirst:S===0,$isLast:S===e.length-1,children:t.jsxs(ct,{$align:v.align||"center",children:[v.name,v.isSortable&&t.jsx(dt,{$direction:c?.key===S?c.direction:"asc",animate:{rotate:c?.key===S&&c.direction==="desc"?180:0,color:c?.key===S?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},S))})}),t.jsx(at,{$fixedHeight:j,children:t.jsx(U.AnimatePresence,{children:n.map((v,S)=>{const a=!!(h&&S===n.length-1),M=!!(!a&&Y(v)),L=_(S,a,M),O=R(S,a,M);return t.jsx(ge,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:L.backgroundColor||"#FFFFFF",color:L.color||"inherit",fontWeight:L.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:S===n.length-1,$isSelected:S===P,$isTotalsRow:a,onClick:()=>!a&&D(S),onDoubleClick:()=>!a&&B(v,S),onContextMenu:H=>!a&&F(H,S),onTouchStart:H=>!a&&y(H,S),onTouchEnd:d,onTouchMove:$,whileHover:a?{}:{backgroundColor:O,transition:{duration:.15}},style:{backgroundColor:L.backgroundColor||"#FFFFFF",color:L.color||"inherit",fontWeight:L.fontWeight||"normal"},children:v.map((H,Z)=>!e[Z]?.isHidden&&t.jsx(pt,{$align:e[Z]?.align||"center",$isFirst:Z===0,$isLast:Z===v.length-1,$isTotalsCell:a,$isBeforeTotals:a&&Z<v.findIndex(N=>N==="Итого:"),children:H},Z))},`row-${S}`)})})})]}),t.jsx(U.AnimatePresence,{children:V()})]})})},tt=o.div`
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
`,ot=o.div`
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
`,nt=o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,rt=o.table`
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
`,it=o(U.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,st=o.thead`
  text-align: center;
  position: relative;
`,at=o.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,ge=o(U.motion.tr)`
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
`,lt=o.th`
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
`,ct=o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,dt=o(U.motion.span)`
  display: inline-flex;
  align-items: center;
`,pt=o.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:n})=>e||n?"none":"0.5px solid #d1d5db"};
`,ut=({onClick:e,tooltip:n,size:s=32,margin:i})=>t.jsx(ht,{onClick:e,size:s,margin:i,title:n,children:t.jsx(xt,{size:s})}),ht=o.button`
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
`,xt=o.div`
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
`,ft=o.button`
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
`,gt=({children:e,onClick:n})=>t.jsxs(ft,{onClick:n,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),Le=({children:e="Подтвердить",icon:n,disabled:s=!1,bg:i="rgba(0, 125, 136, 1)",hoverBg:r="rgba(0, 150, 163, 1)",disabledBg:c="rgba(102, 177, 184, 1)",textColor:p="white",fullWidth:g=!1,minWidth:j,...h})=>t.jsxs(bt,{disabled:s,$bg:i,$hoverBg:r,$disabledBg:c,$textColor:p,$fullWidth:g,$minWidth:j,...h,children:[n&&t.jsx(mt,{children:n}),t.jsx("span",{children:e})]}),bt=o.button`
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
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  min-width: ${({$minWidth:e})=>e||"auto"};

  &:hover {
    background-color: ${({disabled:e,$hoverBg:n,$disabledBg:s})=>e?s:n};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }
`,mt=o.span`
  display: inline-flex;
  align-items: center;
`,wt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(vt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),vt=o.button`
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
`,yt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(kt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),kt=o.button`
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
`,jt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),Ct=({children:e="Экспорт",icon:n=t.jsx(jt,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...c})=>{const p=async g=>{if(s)try{await s()}catch(j){console.error("Export error:",j)}c.onClick&&c.onClick(g)};return t.jsx($t,{...c,onClick:p,disabled:i||c.disabled,children:i?t.jsxs(St,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx(Mt,{progress:r})]}):t.jsxs(t.Fragment,{children:[n,t.jsx("span",{children:e})]})})},$t=o.button`
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
`,St=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,Mt=o.div`
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
`,Tt=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:c,options:p,name:g,disabled:j=!1,required:h=!1,...b})=>{const[x,m]=k.useState(!1),[u,C]=k.useState(!1),f=k.useRef(null),l=!!(n&&!s&&!x),I=E=>{i&&!j&&i({target:{value:E,name:g}}),C(!1),m(!1)},w=E=>{f.current&&!f.current.contains(E.target)&&(C(!1),m(!1))},A=()=>{j||(C(!u),m(!u))};k.useEffect(()=>(document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)}),[]);const P=p.find(E=>E.value===s),z=P?P.label:"";return t.jsxs(Dt,{ref:f,...b,children:[t.jsxs(Lt,{children:[t.jsxs(Et,{hasError:r,isOpen:u,disabled:j,onClick:A,onFocus:()=>!j&&m(!0),onBlur:()=>m(!1),tabIndex:j?-1:0,children:[t.jsx(Pt,{children:z||e&&t.jsx(Rt,{children:e})}),t.jsx(It,{isOpen:u,disabled:j,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:j?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),u&&t.jsx(At,{children:p.map(E=>t.jsxs(zt,{$isSelected:E.value===s,onClick:()=>I(E.value),children:[t.jsx(Bt,{$isSelected:E.value===s,children:E.value===s&&t.jsx(Ft,{})}),t.jsx(_t,{children:E.label})]},E.value))})]}),n&&t.jsx(Ot,{isVisible:l,children:n}),r&&c&&t.jsx(Yt,{children:c}),t.jsx(Wt,{name:g,value:s||"",onChange:()=>{},tabIndex:-1,required:h,children:p.map(E=>t.jsx("option",{value:E.value,children:E.label},E.value))})]})},Dt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Lt=o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Et=o.div`
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
`,Pt=o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rt=o.span`
  color: rgba(80, 85, 92, 1);
`,It=o.div`
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
`,Ft=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,_t=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Ot=o.label`
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
`,Yt=o.span`
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
`,Nt=({checked:e=!1,onChange:n,className:s,label:i,disabled:r=!1})=>{const[c,p]=k.useState(!1),g=()=>{r||!n||n(!e)},j=h=>{r||(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),g())};return t.jsxs(Ht,{className:s,onClick:g,onKeyPress:j,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Vt,{checked:e,isFocused:c,disabled:r,onMouseEnter:()=>!r&&p(!0),onMouseLeave:()=>!r&&p(!1),onFocus:()=>!r&&p(!0),onBlur:()=>!r&&p(!1),children:e&&t.jsx(Ut,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Zt,{disabled:r,children:i})]})},Ht=o.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Vt=o.div`
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
`,Zt=o.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Ut=o.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Xt="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",be=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],qt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],se=({prefix:e="Дата:",value:n="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[c,p]=k.useState(!1),[g,j]=k.useState(new Date),[h,b]=k.useState(n?new Date(n):null),[x,m]=k.useState(!1),[u,C]=k.useState(!1),f=k.useRef(null),l=k.useRef(null),I=k.useRef(null);k.useEffect(()=>{const d=$=>{f.current&&!f.current.contains($.target)&&p(!1),l.current&&!l.current.contains($.target)&&m(!1),I.current&&!I.current.contains($.target)&&C(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),k.useEffect(()=>{b(n?new Date(n):null)},[n]);const w=d=>{const $=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));b(d);const T=$.toISOString().split("T")[0];i?.(T),p(!1)},A=()=>{const d=new Date;j(d);const T=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())).toISOString().split("T")[0];i?.(T),p(!1)},P=()=>{b(null),i?.(""),r?.(),p(!1)},z=d=>{const $=new Date(g);$.setMonth(d),j($),m(!1)},E=d=>{const $=new Date(g);$.setFullYear(d),j($),C(!1)},Y=()=>{const d=g.getFullYear(),$=g.getMonth(),T=new Date(d,$,1),R=new Date(d,$+1,0).getDate(),V=T.getDay()===0?6:T.getDay()-1,v=[],S=35,a=new Date(d,$,0).getDate();for(let L=0;L<V;L++){const O=a-V+L+1,H=new Date(d,$-1,O),Z=!!(h&&H.getDate()===h.getDate()&&H.getMonth()===h.getMonth()&&H.getFullYear()===h.getFullYear());v.push(t.jsx(te,{selected:Z,onClick:()=>w(H),otherMonth:!0,children:O},`prev-${O}`))}for(let L=1;L<=R;L++){const O=new Date(d,$,L),H=!!(h&&O.getDate()===h.getDate()&&O.getMonth()===h.getMonth()&&O.getFullYear()===h.getFullYear());v.push(t.jsx(te,{selected:H,onClick:()=>w(O),children:L},`current-${L}`))}const M=S-v.length;for(let L=1;L<=M;L++){const O=new Date(d,$+1,L),H=!!(h&&O.getDate()===h.getDate()&&O.getMonth()===h.getMonth()&&O.getFullYear()===h.getFullYear());v.push(t.jsx(te,{selected:H,onClick:()=>w(O),otherMonth:!0,children:L},`next-${L}`))}return v},D=()=>h?h.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,B=()=>{const d=new Date().getFullYear(),$=[];for(let T=d-10;T<=d+10;T++)$.push(T);return $},W=d=>{d.preventDefault(),d.stopPropagation(),m(!x),C(!1)},F=d=>{d.preventDefault(),d.stopPropagation(),C(!u),m(!1)},y=d=>{const $=d==="next"?1:-1,T=new Date(g);T.setMonth(T.getMonth()+$),j(T)};return t.jsxs(Gt,{ref:f,children:[t.jsxs(Jt,{onClick:()=>p(!c),children:[e&&t.jsx(Kt,{children:e}),t.jsx(Qt,{isEmpty:!h,children:D()}),t.jsx(eo,{src:Xt,alt:"Календарь"})]}),c&&t.jsxs(to,{className:"calendar-container",children:[t.jsxs(oo,{children:[t.jsx(ye,{onClick:d=>{d.preventDefault(),d.stopPropagation(),y("prev")},onMouseDown:d=>d.preventDefault(),children:t.jsx(ke,{direction:"right"})}),t.jsxs(no,{children:[t.jsxs(so,{ref:l,children:[t.jsxs(ro,{onClick:d=>W(d),onMouseDown:d=>d.preventDefault(),children:[be[g.getMonth()],t.jsx(me,{$open:x})]}),x&&t.jsx(we,{$width:120,onClick:d=>d.stopPropagation(),children:be.map((d,$)=>t.jsx(ve,{$selected:$===g.getMonth(),onClick:T=>{T.stopPropagation(),z($)},children:d},d))})]}),t.jsxs(ao,{ref:I,children:[t.jsxs(io,{onClick:d=>F(d),onMouseDown:d=>d.preventDefault(),children:[g.getFullYear(),t.jsx(me,{$open:u})]}),u&&t.jsx(we,{$width:80,onClick:d=>d.stopPropagation(),children:B().map(d=>t.jsx(ve,{$selected:d===g.getFullYear(),onClick:$=>{$.stopPropagation(),E(d)},children:d},d))})]})]}),t.jsx(ye,{onClick:d=>{d.preventDefault(),d.stopPropagation(),y("next")},onMouseDown:d=>d.preventDefault(),children:t.jsx(ke,{direction:"left"})})]}),t.jsx(lo,{children:qt.map(d=>t.jsx(co,{children:d},d))}),t.jsx(po,{children:Y()}),t.jsxs(uo,{children:[t.jsx(je,{onClick:P,children:"Удалить"}),t.jsx(je,{onClick:A,children:"Сегодня"})]})]})]})},Gt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`,Jt=o.div`
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
`,Kt=o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`,Qt=o.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,eo=o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,to=o.div`
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
`,oo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,no=o.div`
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
`,ro=o(Ee)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,io=o(Ee)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,so=o.div`
  position: relative;
`,ao=o.div`
  position: relative;
`,me=o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,we=o.div`
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
`,ve=o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,ye=o.button`
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
`,ke=o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,lo=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,co=o.div`
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
`,uo=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,je=o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,Pe=({placeholder:e="",customPlaceholder:n,value:s,inputType:i="text",onChange:r,hasError:c=!1,errorMessage:p,...g})=>{const[j,h]=k.useState(!1),b=!!(n&&!s&&!j),x=f=>{if(!r)return;let l=f.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(f);break;case"rubles":{const w=f.target.selectionStart,A=f.target.value;let P=A.replace(/[^\d]/g,"");if(P===""){f.target.value="",r(f);break}const z=parseInt(P,10);if(!isNaN(z)){let E=z.toLocaleString("ru-RU");E+=" ₽";const Y=u(A,w||0),D=C(E,Y);f.target.value=E,r(f),setTimeout(()=>{f.target.setSelectionRange(D,D)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const w=l.split(".");w.length>2&&(l=w[0]+"."+w.slice(1).join("")),w.length===2&&w[1].length>2&&(l=w[0]+"."+w[1].slice(0,2));const A=parseFloat(l);if(isNaN(A)||(A>100?l="100":A<0&&(l="0")),l&&l!==""){l+=" %";const P=f.target.selectionStart||0,z=l.replace(" %","");f.target.value=l,r(f),setTimeout(()=>{P<z.length&&f.target.setSelectionRange(P,P)},0)}else f.target.value=l,r(f);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let I=l.split(" ").filter(w=>w.length>0);I=I.slice(0,3),l=I.map(w=>{if(w.startsWith("-")&&(w=w.substring(1)),(w.match(/-/g)||[]).length>1){const P=w.split("-");w=P[0]+"-"+P.slice(1).join("")}return w.includes("-")?w.split("-").map((P,z)=>P.length===0?"":(z>0,P[0].toUpperCase()+P.slice(1).toLowerCase())).join("-"):w.length>0?w[0].toUpperCase()+w.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&f.target.value.length>0&&f.target.value[f.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),f.target.value=l,r(f);break;case"phone":{const w=m(l);f.target.value=w,r(f);break}case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),f.target.value=l,r(f);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),f.target.value=l,r(f);break}default:r(f);break}},m=f=>{const l=f.replace(/\D/g,""),w=(l.startsWith("8")||l.length===0?l:`8${l}`).slice(0,11);let A="";return w.length>0&&(A+="8"),w.length>1&&(A+=` (${w.slice(1,4)}`),w.length>4&&(A+=`) ${w.slice(4,7)}`),w.length>7&&(A+=`-${w.slice(7,9)}`),w.length>9&&(A+=`-${w.slice(9,11)}`),A},u=(f,l)=>{let I=0;for(let w=0;w<Math.min(l,f.length);w++)/\d/.test(f[w])&&I++;return I},C=(f,l)=>{let I=0;for(let w=0;w<f.length;w++){if(I>=l)return w;/\d/.test(f[w])&&I++}return f.length};return t.jsxs(ho,{children:[t.jsx(xo,{...g,value:s,placeholder:b?"":e,onFocus:()=>h(!0),onBlur:f=>{h(!1),g.onBlur?.(f)},onChange:x,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:c}),n&&t.jsx(fo,{isVisible:b,children:n}),c&&p&&t.jsx(go,{children:p})]})},ho=o.div`
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
`,fo=o.label`
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
`,go=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,bo=({total:e,current:n=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[c,p]=k.useState(n),g=h=>{h<1||h>r||h===c||(p(h),s?.(h))},j=()=>{const h=[];let x=1,m=r;if(r>5){const u=Math.floor(2.5);x=Math.max(c-u,1),m=Math.min(c+u,r),c<=u+1?m=5:c>=r-u&&(x=r-5+1)}for(let u=x;u<=m;u++)h.push(t.jsx(K,{active:u===c,onClick:()=>g(u),children:u},u));return x>1&&(x>2&&h.unshift(t.jsx(K,{children:"..."},"start-ellipsis")),h.unshift(t.jsx(K,{active:c===1,onClick:()=>g(1),children:"1"},1))),m<r&&(m<r-1&&h.push(t.jsx(K,{children:"..."},"end-ellipsis")),h.push(t.jsx(K,{active:r===c,onClick:()=>g(r),children:r},r))),h};return t.jsxs(mo,{children:[t.jsx(Ce,{disabled:c===1,onClick:()=>g(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),j(),t.jsx(Ce,{disabled:c===r,onClick:()=>g(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},mo=o.div`
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
`,Ce=o.button`
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
`,wo=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:c,rows:p=3,...g})=>{const[j,h]=k.useState(!1),b=!!(n&&!s&&!j);return t.jsxs(vo,{children:[t.jsx(yo,{...g,value:s,placeholder:b?"":e,onFocus:()=>h(!0),onBlur:x=>{h(!1),g.onBlur?.(x)},onChange:i,hasError:r,rows:p}),n&&t.jsx(ko,{isVisible:b,children:n}),r&&c&&t.jsx(jo,{children:c})]})},vo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,yo=o.textarea`
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
`,ko=o.label`
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
`,jo=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Re=({title:e,onClose:n,onCancel:s,onSave:i,children:r,isSaveDisabled:c=!1,isSubmitting:p=!1,mode:g="create",hideSaveButton:j=!1,hideCanselButton:h=!1,width:b="562px",saveButtonText:x="Сохранить",customLayout:m})=>{const u=g==="view",C=k.useRef(null),f=l=>{l.preventDefault(),s()};return k.useEffect(()=>{const l=I=>{I.key==="Escape"&&n()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[n]),t.jsx(Co,{children:t.jsxs($o,{width:b,ref:C,children:[t.jsx(Mo,{onClick:n,children:"×"}),t.jsx(Ie,{children:t.jsx(Ae,{children:e})}),t.jsx("div",{className:"modal-body",children:m}),t.jsxs(So,{onSubmit:i,children:[t.jsx(To,{children:r}),t.jsxs(Do,{children:[!h&&t.jsx(Lo,{onClick:f,children:"Отменить"}),!u&&!j&&t.jsx(Le,{style:{minWidth:"136px",padding:"10p 20px",borderRadius:"10px",fontSize:"16px"},type:"submit",disabled:c||p,children:p?"Сохранение...":x||"Сохранить"})]})]})]})})},Co=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,$o=o.div`
  width: ${e=>e.width};
  height: auto;
  background-color: rgba(249, 250, 250, 1);
  border: 1px solid rgba(173, 179, 188, 1);
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), 0 0 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  margin: 0;
  overflow: visible;
`,So=o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: visible;
`,Ie=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`,Ae=o.h2`
  font-size: 30px;
  font-weight: 600;
  color: #000;
  margin-left: 25px;
  margin-bottom: 0;
`,Mo=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  z-index: 1;

  &:hover {
    color: #000;
  }
`,To=o.div`
  flex: 1;
  margin-bottom: 20px;
  min-height: 0;
  overflow: visible;
`,Do=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px 20px 30px;
`,Lo=o.button`
  padding: 10px 20px;
  background-color: rgba(209, 213, 219, 1);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 136px;
  color: black;

  &:hover {
    background-color: rgba(209, 213, 219, 0.8);
  }
`,Eo=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Po=({value:e="",placeholder:n="Выберите период",options:s=Eo,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:c})=>{const[p,g]=k.useState(!1),[j,h]=k.useState(!1),[b,x]=k.useState(""),[m,u]=k.useState(""),[C,f]=k.useState(""),l=k.useRef(null),I=k.useRef(null);k.useEffect(()=>{if(e==="Custom"&&m&&C){const D=E(m),B=E(C);x(`С ${D} по ${B}`)}else{const D=s.find(B=>B.value===e);x(D?D.label:"")}},[e,s,m,C]),k.useEffect(()=>{const D=B=>{l.current&&!l.current.contains(B.target)&&g(!1),j&&I.current&&!I.current.contains(B.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(y=>y.contains(B.target))||h(!1))};return document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[j]);const w=D=>{r?.(D.value),g(!1)},A=()=>{g(!1),c?c():h(!0)},P=()=>{r?.(""),x(""),u(""),f("")},z=()=>{if(m&&C){const D=E(m),B=E(C),W=`С ${D} по ${B}`;r?.("Custom",m,C),x(W),h(!1)}},E=D=>{const B=new Date(D),W=String(B.getDate()).padStart(2,"0"),F=String(B.getMonth()+1).padStart(2,"0"),y=B.getFullYear();return`${W}.${F}.${y}`},Y=()=>t.jsxs(Ho,{children:[t.jsx(Ie,{style:{margin:0},children:t.jsx(Ae,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Vo,{onClick:P,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Ro,{ref:l,children:[t.jsxs(Io,{onClick:()=>g(!p),children:[t.jsx(Ao,{children:b||n}),t.jsx(zo,{$isOpen:p,children:"▼"})]}),p&&t.jsxs(Bo,{children:[s.map(D=>t.jsxs(Fo,{onClick:()=>w(D),$isSelected:e===D.value,children:[t.jsx(_o,{$isSelected:e===D.value,children:e===D.value&&t.jsx(Oo,{})}),t.jsx(Yo,{children:D.label})]},D.id)),i&&t.jsx(Wo,{onClick:A,children:"Другой период"})]})]}),j&&t.jsx("div",{ref:I,children:t.jsx(Re,{title:"",onClose:()=>h(!1),onCancel:()=>h(!1),onSave:D=>{D.preventDefault(),z()},saveButtonText:"Выбрать",customLayout:t.jsx(Y,{}),children:t.jsxs(No,{children:[t.jsx($e,{children:t.jsx(se,{value:m,onChange:D=>u(D)})}),t.jsx($e,{children:t.jsx(se,{value:C,onChange:D=>f(D)})})]})})})]})},Ro=o.div`
  position: relative;
  width: 245px;
`,Io=o.div`
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
`,zo=o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Bo=o.div`
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
`,Fo=o.div`
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
`,_o=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Oo=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Yo=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,Wo=o.div`
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
`,No=o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,$e=o.div`
  flex: 1;
`,Ho=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Vo=o.button`
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
`,Zo=({name:e,value:n,onChange:s,onBlur:i,onKeyPress:r,placeholder:c="8 (999) 500-50-50",customPlaceholder:p,tabIndex:g,disabled:j=!1,hasError:h=!1,errorMessage:b})=>{const[x,m]=k.useState(!1),u=k.useRef(null),C=!!(p&&!n&&!x),f=A=>{const z=A.replace(/\D/g,"").slice(0,11);let E="";return z.length>0&&(E+="8"),z.length>1&&(E+=` (${z.slice(1,4)}`),z.length>4&&(E+=`) ${z.slice(4,7)}`),z.length>7&&(E+=`-${z.slice(7,9)}`),z.length>9&&(E+=`-${z.slice(9,11)}`),E},l=A=>{const P=f(A.target.value),z={...A,target:{...A.target,name:e,value:P}};s(z)},I=A=>{m(!1),i?.(A)},w=A=>{r?.(A)};return t.jsxs(Uo,{children:[t.jsx(Xo,{ref:u,name:e,type:"tel",value:n,onChange:l,onKeyPress:w,placeholder:C?"":c,maxLength:18,tabIndex:g,disabled:j,hasError:h,onFocus:()=>m(!0),onBlur:I,inputMode:"tel"}),p&&t.jsx(qo,{isVisible:C,children:p}),h&&b&&t.jsx(Go,{children:b})]})},Uo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Xo=o.input`
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
`,qo=o.label`
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
`,Go=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Jo=({tabs:e,activeTab:n,onChange:s,addButton:i,fontSize:r=14})=>{const c=e.find(p=>p.id===n)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(Ko,{children:t.jsxs(Qo,{children:[e.map(p=>t.jsxs(en,{$isActive:n===p.id,onClick:()=>s(p.id),$fontSize:r,children:[p.label,n===p.id&&t.jsx(tn,{})]},p.id)),i&&t.jsx(on,{children:i})]})}),c&&t.jsx(nn,{children:c})]})},Ko=o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,Qo=o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,en=o.li`
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
`,tn=o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,on=o.li`
  margin-left: auto;
  padding: 4px 0;
`,nn=o.div`
  margin-top: 20px;
`,rn=({mode:e,primaryValue:n,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:c,disabled:p=!1,hasError:g=!1,errorMessage:j="",customIcon:h})=>{const x=h||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(cn,{children:[t.jsx(dn,{children:n||"Не указано"}),s&&t.jsx(pn,{children:s})]}):t.jsxs(sn,{children:[t.jsxs(an,{children:[t.jsx(ln,{type:"text",value:n||"",placeholder:i,readOnly:!0,disabled:p}),n&&!p&&t.jsx(hn,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!p&&t.jsx(un,{type:"button",onClick:r,"aria-label":"Выбрать",children:x}),g&&j&&t.jsx(xn,{children:j})]})},sn=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,an=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,ln=o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,cn=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,dn=o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,pn=o.span`
  font-size: 13px;
  color: #666;
`,un=o.button`
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
`,hn=o.button`
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
`,xn=o.div`
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
`,fn=({total:e})=>t.jsx("div",{children:t.jsxs(gn,{children:["Всего: ",e]})}),gn=o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,bn=o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,mn=o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,wn=o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,vn=o.span`
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
`,yn=o.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,kn=({checked:e,onChange:n,disabled:s})=>{const i=()=>{s||n(!e)};return t.jsxs(wn,{children:[t.jsx(yn,{checked:e,onChange:i,disabled:s}),t.jsx(vn,{checked:e,disabled:s})]})},jn=({id:e,name:n,checked:s,onChange:i,children:r})=>t.jsxs(Cn,{htmlFor:e,children:[t.jsx($n,{type:"radio",id:e,name:n,checked:s,onChange:i}),r]}),Cn=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,$n=o.input`
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
`,Sn=({percentage:e,onChange:n,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=k.useRef(null),[c,p]=k.useState(!1),g=x=>{!s||!n||(x.preventDefault(),p(!0),b(x))},j=x=>{!c||!n||b(x)},h=()=>{p(!1)},b=x=>{if(!r.current||!n)return;const m=r.current.getBoundingClientRect();let C=(x.clientX-m.left)/m.width*100;C=Math.max(0,Math.min(100,C)),n(Math.round(C))};return k.useEffect(()=>{if(c)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",h)}},[c]),t.jsxs(Mn,{ref:r,$draggable:s,onMouseDown:g,children:[t.jsx(Tn,{$secondaryColor:i.secondary}),t.jsx(Dn,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(Ln,{$percentage:e,$primaryColor:i.primary})]})},Mn=o.div`
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
`,Tn=o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Dn=o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,Ln=o.div`
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
`,En=["zoomControl","fullscreenControl"];let oe=null;const Pn=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((n,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>n(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),Rn=({onLocationSelect:e,initialAddress:n="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:c=12,height:p=400,width:g="100%",inputPlaceholder:j="Введите адрес или название места",searchButtonLabel:h="Найти",draggablePlacemark:b=!0,controls:x=En,showSearch:m=!0,className:u,style:C,onError:f})=>{const[l,I]=k.useState(null),[w,A]=k.useState(n),[P,z]=k.useState(n),[E,Y]=k.useState(!1),D=k.useRef(null);k.useEffect(()=>{let F=!1,y;return(async()=>{try{const $=await Pn(r);if(F||!D.current)return;y=new $.Map(D.current,{center:[s,i],zoom:c,controls:x});const T=new $.Placemark([s,i],{},{draggable:b});y.geoObjects.add(T),y.events.add("click",_=>{const R=_.get("coords");B(R,T,y)}),T.events.add("dragend",()=>{const _=T.geometry.getCoordinates();B(_,T,y)}),I(y),Y(!0)}catch($){f&&$ instanceof Error&&f($)}})(),()=>{F=!0,y&&y.destroy()}},[r,s,i,c,x,b,f]);const B=async(F,y,d)=>{if(window.ymaps)try{const _=(await window.ymaps.geocode(F)).geoObjects.get(0).getAddressLine();y.geometry.setCoordinates(F),d.panTo(F,{flying:!0}),z(_),A(_),e(_,F[0],F[1])}catch($){f&&$ instanceof Error&&f($)}},W=async()=>{if(!(!w.trim()||!window.ymaps||!l))try{const y=(await window.ymaps.geocode(w)).geoObjects.get(0);if(y){const d=y.geometry.getCoordinates(),$=y.properties.get("boundedBy");l.setBounds($,{checkZoomRange:!0});const T=new window.ymaps.Placemark(d,{},{draggable:b});l.geoObjects.removeAll(),l.geoObjects.add(T);const _=y.getAddressLine();z(_),e(_,d[0],d[1]),T.events.add("dragend",()=>{const R=T.geometry.getCoordinates();B(R,T,l)})}}catch(F){f&&F instanceof Error&&f(F)}};return t.jsxs(In,{className:u,style:C,children:[m&&t.jsxs(An,{children:[t.jsx(Pe,{type:"text",value:w,onChange:F=>A(F.target.value),placeholder:j,onKeyPress:F=>F.key==="Enter"&&W(),disabled:!E}),t.jsx(zn,{onClick:W,disabled:!E,children:h})]}),t.jsxs(Fn,{children:["Выбранный адрес: ",t.jsx("strong",{children:P||"Не выбран"})]}),t.jsx(Bn,{ref:D,$height:p,$width:g}),t.jsx(_n,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},In=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,An=o.div`
  display: flex;
  gap: 8px;
`,zn=o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Bn=o.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Fn=o.div`
  font-size: 14px;
  color: #374151;
`,_n=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,de=o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;function ae(e,n="₽"){if(!e||e.trim()==="")return`0${n}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${n}`;const i=parseInt(s,10);if(isNaN(i))return`0${n}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${n}`:r}function On(e){if(!e)return 0;const n=e.replace(/\D/g,"");return parseInt(n,10)}const Yn=({title:e,data:n,maxValue:s,step:i,height:r=300,titleFontSize:c})=>{const[p,g]=k.useState(null),j=[];for(let b=0;b<=s;b+=i)j.push(b);const h=n.length>0?n[0].bars.map(b=>({name:b.name,color:b.color})):[];return t.jsxs(Wn,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:c},children:e}),t.jsx(Nn,{children:h.map((b,x)=>t.jsxs(Hn,{children:[t.jsx(Vn,{color:b.color}),t.jsx(Zn,{children:b.name})]},x))})]}),t.jsxs(Un,{height:r,children:[t.jsx(Xn,{children:j.map((b,x)=>t.jsx(qn,{children:b.toLocaleString()},x))}),t.jsxs(Gn,{children:[t.jsxs(Jn,{children:[j.map((b,x)=>{const m=b/s*100;return t.jsx(Kn,{position:100-m},`line-${x}`)}),n.map((b,x)=>t.jsxs(Qn,{onMouseEnter:()=>g(x),onMouseLeave:()=>g(null),children:[b.bars.map((m,u)=>{const C=b.bars.slice(u+1).reduce((f,l)=>f+l.value,0);return t.jsx(er,{height:m.value/s*100,offset:C/s*100,color:m.color,isHovered:p!==null&&p!==x},u)}),p===x&&t.jsxs(nr,{children:[t.jsxs(rr,{children:[t.jsxs(ir,{children:["Всего: ",ae(b.total.toString())]}),b.bars.map((m,u)=>t.jsxs(sr,{children:[m.name,": ",ae(m.value.toString())]},u))]}),t.jsx(ar,{})]})]},x))]}),t.jsx(tr,{children:n.map((b,x)=>t.jsx(or,{style:{flex:1,textAlign:"center"},children:b.label},x))})]})]})]})},Wn=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Nn=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,Hn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Vn=o.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Zn=o.span`
  font-size: 14px;
  color: #4b5563;
`,Un=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,Xn=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,qn=o.span`
  font-size: 12px;
  color: #6b7280;
`,Gn=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,Jn=o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,Kn=o.div`
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
`,Qn=o.div`
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
`,er=o.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,tr=o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,or=o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,nr=o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,rr=o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,ir=o.div`
  font-weight: 600;
  margin-bottom: 6px;
`,sr=o.div`
  margin-bottom: 2px;
`,ar=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,lr=o.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,cr=({title:e,data:n,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:c,minY:p,xStep:g,yStep:j,height:h=300,showLegend:b=!0,xAxisCustomLabels:x,showTooltip:m=!0,titleFontSize:u="30px"})=>{const[C,f]=k.useState(null),[l,I]=k.useState({x:0,y:0}),w=k.useRef(null),A=k.useRef(null),P=Math.max(...n.map(y=>y.x),r),z=[];for(let y=0;y<=P;y+=g)z.push(y);const E=[];for(let y=p;y<=c;y+=j)E.push(y);const Y=x||z.map(y=>y.toString()),D=b?Array.from(new Set(n.filter(y=>y.label).map(y=>y.label))).map(y=>{const d=n.find($=>$.label===y);return{name:y,color:d.color}}):[],B={};n.forEach(y=>{const d=y.label||"default";B[d]||(B[d]=[]),B[d].push(y)});const W=y=>y/P*100,F=y=>{const d=c-p;return 100-(y-p)/d*100};return k.useEffect(()=>{if(C&&A.current){const y=A.current.getBoundingClientRect(),d=W(C.x)/100*y.width,$=F(C.y)/100*y.height;I({x:d+y.left,y:$+y.top})}},[C,r,c,p]),t.jsxs(dr,{children:[t.jsxs(ce,{style:{marginTop:"0"},children:[t.jsx(de,{style:{fontSize:u},children:e}),b&&D.length>0&&t.jsx(pr,{children:D.map((y,d)=>t.jsxs(ur,{children:[t.jsx(hr,{color:y.color}),t.jsx(xr,{children:y.name})]},d))})]}),t.jsxs(fr,{height:h,children:[t.jsxs(gr,{children:[E.map((y,d)=>t.jsx(br,{children:y.toLocaleString()},d)),t.jsx(Se,{children:i})]}),t.jsxs(mr,{ref:A,children:[E.map((y,d)=>t.jsx(wr,{position:F(y)},`hline-${d}`)),Object.values(B).map((y,d)=>y.map(($,T)=>{if(T===0)return null;const _=y[T-1],R=W(_.x),V=F(_.y),v=W($.x),S=F($.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${R}%`,y1:`${V}%`,x2:`${v}%`,y2:`${S}%`,stroke:$.color,strokeWidth:"1"})},`line-${d}-${T}`)})),n.map((y,d)=>t.jsx(vr,{x:W(y.x),y:F(y.y),color:y.color,onMouseEnter:()=>f(y),onMouseLeave:()=>f(null),isHovered:C?.label===y.label},d))]})]}),m&&C&&t.jsxs(jr,{ref:w,style:{left:l.x,top:l.y},children:[t.jsxs(Cr,{children:[C.name&&t.jsx($r,{children:C.name}),t.jsx(Sr,{children:C.y.toLocaleString()})]}),t.jsx(Mr,{})]}),t.jsxs(yr,{children:[Y.map((y,d)=>{const T=z[d]/P*100;return t.jsx(kr,{style:{left:`${T}%`,transform:"translateX(-50%)"},children:y},d)}),s&&t.jsx(Se,{children:s})]})]})},dr=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,pr=o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,ur=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,hr=o.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,xr=o.span`
  font-size: 14px;
  color: #4b5563;
`,fr=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,gr=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,br=o.span`
  font-size: 12px;
  color: #6b7280;
`,Se=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,mr=o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,wr=o.div`
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
`,vr=o.div`
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
`,yr=o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,kr=o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,jr=o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${lr} 0.15s ease-out forwards;
`,Cr=o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,$r=o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Sr=o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Mr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Tr=({images:e,initialIndex:n,onClose:s})=>{const[i,r]=k.useState(n),[c,p]=k.useState(0),g=()=>{r(x=>x>0?x-1:e.length-1),p(0)},j=()=>{r(x=>x<e.length-1?x+1:0),p(0)},h=()=>{p(x=>(x+90)%360)},b=x=>{x.key==="Escape"?s():x.key==="ArrowLeft"?g():x.key==="ArrowRight"?j():(x.key==="r"||x.key==="к")&&h()};return t.jsx(Dr,{onClick:s,onKeyDown:b,tabIndex:0,children:t.jsxs(Lr,{onClick:x=>x.stopPropagation(),children:[t.jsx(Er,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Pr,{children:t.jsx(Rr,{onClick:h,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Ir,{children:[t.jsx(Me,{$position:"left",onClick:g,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Ar,{src:e[i],alt:`Photo ${i+1}`,$rotation:c}),t.jsx(Me,{$position:"right",onClick:j,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(zr,{children:e.map((x,m)=>t.jsx(Br,{$active:m===i,onClick:()=>{r(m),p(0)}},m))})]})})},Dr=o.div`
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
`,Lr=o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Er=o.button`
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
`,Pr=o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Rr=o.button`
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
`,Ir=o.div`
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
`,Me=o.button`
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
`,zr=o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Br=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,ze=({isOpen:e,callPhone:n,error:s,onClose:i,isVerifying:r})=>{const[c,p]=k.useState(!1);if(!e)return null;const g=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),j=()=>{g?window.location.href=`tel:${n}`:(navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3))};return t.jsx(Fr,{onClick:i,children:t.jsxs(_r,{onClick:h=>h.stopPropagation(),children:[t.jsx(Or,{children:"Подтверждение авторизации"}),t.jsx(Te,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Yr,{onClick:j,title:g?"Позвонить":"Копировать номер",$clickable:!0,children:[n,!g&&c&&t.jsx(Wr,{children:"Скопировано!"})]}),t.jsx(Te,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),r&&t.jsx(Hr,{children:"Проверяем звонок..."}),s&&t.jsx(Nr,{children:s}),i&&t.jsx(Vr,{type:"button",onClick:i,children:"Закрыть"})]})})},Fr=o.div`
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
`,_r=o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Or=o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Te=o.p`
  margin-bottom: 15px;
  color: #555;
`,Yr=o.div`
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
`,Wr=o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Nr=o.div`
  color: #e74c3c;
  margin: 10px 0;
`,Hr=o.div`
  color: #4b5563;
  margin: 6px 0;
  font-size: 14px;
`,Vr=o.button`
  margin-top: 16px;
  padding: 10px 16px;
  border: none;
  background: rgba(0, 125, 136, 1);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`,Be=k.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),Zr=({items:e,bottomItems:n=[],logo:s,arrowIcon:i,collapsed:r,onToggle:c,selectedKey:p,onSelect:g,autoCollapseOnSelect:j=!1,width:h="315px",collapsedWidth:b="70px",className:x,style:m})=>{const u=k.useContext(Be),[C,f]=k.useState(r??u.collapsed??!1),[l,I]=k.useState(null),[w,A]=k.useState(p??u.selectedSideMenuItem??null),[P,z]=k.useState({visible:!1,x:0,y:0,items:[]}),E=k.useRef(null),Y=r??u.collapsed??C,D=R=>{f(R),u.toggleCollapsed(),c?.(R)},B=p??u.selectedSideMenuItem??w,W=R=>{A(R),u.setSelectedSideMenuItem(R)};k.useEffect(()=>{r!==void 0&&(f(r),r&&I(null))},[r]),k.useEffect(()=>{p!==void 0&&W(p)},[p]),k.useEffect(()=>{const R=()=>z(V=>({...V,visible:!1}));return document.addEventListener("click",R),()=>document.removeEventListener("click",R)},[]);const F=()=>{const R=!Y;D(R),R&&I(null)},y=R=>{R.disabled||R.hidden||(W(R.key),g?.(R),R.onClick?.(R),j&&(D(!0),I(null)))},d=R=>{I(V=>V===R?null:R)},$=(R,V)=>{const v=(R.children?.length||0)>0;if(Y&&v){V.stopPropagation();const S=V.currentTarget.getBoundingClientRect();z({visible:!0,x:S.right+6,y:S.top,items:R.children||[]});return}v?d(R.key):y(R)},T=(R,V=!1)=>R.filter(v=>!v.hidden).map(v=>{const S=(v.children?.length||0)>0,a=l===v.key,M=B===v.key||!!v.children&&v.children.some(L=>L.key===B);return t.jsxs(k.Fragment,{children:[t.jsxs(Qr,{$collapsed:Y,$selected:M,onClick:L=>$(v,L),$disabled:v.disabled,title:v.label,children:[v.icon&&t.jsx(ti,{$collapsed:Y,children:v.icon}),!Y&&t.jsx(ei,{children:v.label}),!Y&&S&&t.jsx(ni,{$expanded:a,children:"▾"})]}),!Y&&S&&a&&t.jsx(oi,{children:T(v.children||[],!0)})]},v.key)}),_=k.useMemo(()=>P.visible?t.jsx(ii,{style:{left:P.x,top:P.y},children:P.items.map(R=>t.jsx(si,{onClick:()=>{y(R),z({visible:!1,x:0,y:0,items:[]})},$selected:B===R.key,children:R.label},R.key))}):null,[P,B]);return t.jsxs(Ur,{ref:E,$collapsed:Y,$width:h,$collapsedWidth:b,className:x,style:m,children:[t.jsxs(Xr,{children:[t.jsx(qr,{onClick:F,"aria-label":"Переключить меню",children:i??t.jsx(Gr,{$collapsed:Y,children:"❮"})}),!Y&&s&&t.jsx(Jr,{children:s})]}),t.jsxs(Kr,{children:[t.jsx(De,{children:T(e)}),n.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ri,{}),t.jsx(De,{children:T(n)})]})]}),_,t.jsx(ai,{$collapsed:Y})]})},Ur=o.div`
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
`,De=o.div`
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
`,li=e=>{const n=e.replace(/\D/g,""),i=(n.startsWith("8")||n.length===0?n:`8${n}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},Fe=({value:e,onChange:n,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=c=>{const p=li(c.target.value);n(p)};return t.jsx(ci,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},ci=o.input`
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
`,pe="http://95.163.226.24:8080/api",ne="access_token",re="refresh_token",q={setTokens(e,n){localStorage.setItem(ne,e),localStorage.setItem(re,n)},getAccessToken(){return localStorage.getItem(ne)},getRefreshToken(){return localStorage.getItem(re)},clear(){localStorage.removeItem(ne),localStorage.removeItem(re)}};async function ue(e,n={}){const{method:s="GET",body:i,headers:r={},token:c}=n,p=async j=>{const h={"Content-Type":"application/json",...r};j&&(h.Authorization=`Bearer ${j}`);const b=e.startsWith("http")?e:`${pe}${e}`;return await fetch(b,{method:s,headers:h,body:i?JSON.stringify(i):void 0})},g=async(j,h=!0)=>{const b=await p(j);if(b.ok){if(b.status===204)return null;const m=await b.text();if(!m)return null;try{return JSON.parse(m)}catch{return m}}if(b.status===401&&h){const m=await di();if(m)return g(m,!1)}let x=`Request failed with status ${b.status}`;try{const m=await b.json();m&&typeof m.error=="string"?x=m.error:typeof m=="string"&&(x=m)}catch{const m=await b.text();m&&(x=m)}throw new Error(x)};return g(c)}async function di(){const e=q.getRefreshToken(),n=q.getAccessToken();if(!e||!n)return null;const s=await fetch(`${pe}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:n,refresh_token:e})});if(!s.ok)return q.clear(),null;const i=await s.json();if(i.access_token){const r=i.refresh_token||e;return q.setTokens(i.access_token,r),i.access_token}return q.clear(),null}const _e=(e,n)=>ue("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:n}}),Oe=(e,n,s)=>ue("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:n,user_type:s}}),pi=({onLoginSuccess:e,userType:n="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:p="https://info.waypay.one",supportLinkText:g="info.waypay.one",brand:j,className:h,style:b,pollingIntervalMs:x=3e3})=>{const[m,u]=k.useState(!1),[C,f]=k.useState(""),[l,I]=k.useState(!1),[w,A]=k.useState(""),[P,z]=k.useState(""),[E,Y]=k.useState(!1),D=k.useRef(void 0);k.useEffect(()=>()=>{D.current&&clearInterval(D.current)},[]);const B=$=>{const T=$.replace(/\D/g,"");return T?T.startsWith("8")?`+7${T.slice(1)}`:T.startsWith("7")?`+${T}`:`+${T}`:""},W=()=>{I(!1),D.current&&window.clearInterval(D.current)},F=async $=>{if($.preventDefault(),!C){z("Введите номер телефона");return}u(!0),z("");const T=B(C);try{const _=await _e(T,n);A(_.call_phone),I(!0),y(T,_.check_id)}catch(_){console.error("Auth error:",_),z("Не удалось инициировать авторизацию. Проверьте номер.")}finally{u(!1)}},y=($,T)=>{D.current&&window.clearInterval(D.current),D.current=window.setInterval(()=>{d($,T)},x)},d=async($,T)=>{if(!E){Y(!0);try{const _=await Oe($,T,n);_.access_token&&_.refresh_token&&(q.setTokens(_.access_token,_.refresh_token),D.current&&window.clearInterval(D.current),I(!1),e(_.access_token))}catch(_){console.error("Verification error:",_),z("Ошибка проверки авторизации")}finally{Y(!1)}}};return t.jsxs(ui,{className:h,style:b,children:[t.jsxs(hi,{children:[t.jsx(xi,{children:j??t.jsx(fi,{children:"WayPay"})}),t.jsxs(gi,{onSubmit:F,children:[t.jsx(bi,{children:s}),t.jsx(mi,{children:t.jsx(wi,{children:t.jsx(Fe,{value:C,onChange:$=>f($),placeholder:r})})}),P&&t.jsx($i,{children:t.jsx("span",{children:P})}),t.jsx(vi,{type:"submit",disabled:m,children:m?t.jsxs(yi,{children:[t.jsx(ie,{}),t.jsx(ie,{}),t.jsx(ie,{})]}):i})]}),t.jsxs(ki,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру ",t.jsx(ji,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(Ci,{href:p,target:"_blank",rel:"noreferrer",children:g})]})]}),t.jsx(ze,{isOpen:l,onClose:W,callPhone:w,isVerifying:E,error:P})]})},ui=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`,hi=o.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, rgba(0, 125, 136, 1) 0%, rgba(37, 203, 161, 1) 100%);
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`,xi=o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`,fi=o.div`
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 125, 136, 1);
`,gi=o.form`
  display: flex;
  flex-direction: column;
`,bi=o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,mi=o.div`
  margin-bottom: 25px;
`,wi=o.div`
  position: relative;
  width: auto;
`,vi=o.button`
  background: linear-gradient(90deg, rgba(0, 125, 136, 1) 0%, rgba(37, 203, 161, 1) 100%);
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
    background: linear-gradient(90deg, rgba(0, 125, 136, 0.5) 0%, rgba(37, 203, 161, 0.5) 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,yi=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 24px;
`,ie=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  animation: bounce 1s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }
`,ki=o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,ji=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Ci=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,$i=o.div`
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
`,Ye=e=>{let n=0;for(let i=0;i<e.length;i++)n=e.charCodeAt(i)+((n<<5)-n);return`hsl(${Math.abs(n%360)}, 60%, 60%)`},Si=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",Mi=(e,n=100)=>{const s=document.createElement("canvas");s.width=n,s.height=n;const i=s.getContext("2d");if(!i)return"";const r=Ye(e);i.fillStyle=r,i.beginPath(),i.arc(n/2,n/2,n/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const c=n/2;i.font=`bold ${c}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const p=c*.1;return i.fillText(e,n/2,n/2+p),s.toDataURL("image/png")},Ti=e=>{if(!e)return"";const n=typeof e=="string"?new Date(e):e;if(isNaN(n.getTime()))return"";const s=n.getDate().toString().padStart(2,"0"),i=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getFullYear();return`${s}-${i}-${r}`};function Di(e){return new Date(e)}const We=e=>{let n;try{if(e instanceof Date)n=e;else if(typeof e=="string"||typeof e=="number")n=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(n.getTime()))return"неверная дата";const s=new Date;if(n>s){const b=Math.floor((n.getTime()-s.getTime())/1e3),x=Math.floor(b/60),m=Math.floor(x/60),u=Math.floor(m/24);return b<10?"скоро":b<60?`через ${b} секунд`:x===1?"через минуту":x<60?`через ${x} минут`:m===1?"через час":m<24?`через ${m} часов`:u===1?"завтра":u<7?`через ${u} дней`:"в будущем"}const i=Math.floor((s.getTime()-n.getTime())/1e3),r=Math.floor(i/60),c=Math.floor(r/60),p=Math.floor(c/24),g=Math.floor(p/7),j=Math.floor(p/30),h=Math.floor(p/365);if(i<10)return"только что";if(i<60){const b=Math.max(1,i);return b===1?"секунду назад":b<5?`${b} секунды назад`:`${b} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:p<7?p===1?"вчера":p===2?"позавчера":`${p} дня назад`:g<4?g===1?"неделю назад":g<5?`${g} недели назад`:`${g} недель назад`:j<12?j===1?"месяц назад":j<5?`${j} месяца назад`:`${j} месяцев назад`:h===1?"год назад":h<5?`${h} года назад`:`${h} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},Ne=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Li=(e,n={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=n,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?Ne(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):We(r)};exports.API_BASE_URL=pe;exports.AddButton=ut;exports.AuthCallModal=ze;exports.AuthPage=pi;exports.BackButton=gt;exports.BaseModal=Re;exports.Checkbox=Nt;exports.ColumnChart=Yn;exports.ContextMenu=le;exports.CountInfoTitle=fn;exports.CustomCalendar=se;exports.CustomInput=Pe;exports.CustomPhoneInput=Fe;exports.CustomSelect=Tt;exports.CustomTable=et;exports.CustomTextArea=wo;exports.CustomTitle=de;exports.DarkCyanButton=Le;exports.DeleteButton=wt;exports.EditButton=yt;exports.EntitySelectContainer=rn;exports.ExportButton=Ct;exports.InputTitle=bn;exports.ModalInfoTitle=mn;exports.Pagination=bo;exports.PeriodField=Po;exports.PhoneModalInput=Zo;exports.PhotoViewerModal=Tr;exports.ProgressBar=Sn;exports.RadioButton=jn;exports.ScatterPlot=cr;exports.SideMenu=Zr;exports.SideMenuContext=Be;exports.Tabs=Jo;exports.TitleField=ce;exports.ToggleSwitch=kn;exports.YandexMapSelector=Rn;exports.apiRequest=ue;exports.confirmCallAuth=Oe;exports.formatDate=Ti;exports.formatExactDate=Ne;exports.formatMoney=ae;exports.formatRelativeTime=We;exports.formatRelativeTimeExtended=Li;exports.generateAvatar=Mi;exports.getInitials=Si;exports.initiateCallAuth=_e;exports.parseDateInput=Di;exports.parseMoney=On;exports.stringToColor=Ye;
