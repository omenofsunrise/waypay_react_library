import q, { useRef as U, useState as z, useEffect as Z, createContext as ze, useContext as Be, useMemo as Fe } from "react";
import n, { keyframes as Ae } from "styled-components";
import { motion as K, AnimatePresence as ae } from "framer-motion";
var oe = { exports: {} }, Q = {};
var le;
function _e() {
  if (le) return Q;
  le = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, c) {
    var p = null;
    if (c !== void 0 && (p = "" + c), r.key !== void 0 && (p = "" + r.key), "key" in r) {
      c = {};
      for (var w in r)
        w !== "key" && (c[w] = r[w]);
    } else c = r;
    return r = c.ref, {
      $$typeof: e,
      type: i,
      key: p,
      ref: r !== void 0 ? r : null,
      props: c
    };
  }
  return Q.Fragment = o, Q.jsx = s, Q.jsxs = s, Q;
}
var ee = {};
var ce;
function Oe() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === A ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case D:
          return "Fragment";
        case P:
          return "Profiler";
        case y:
          return "StrictMode";
        case I:
          return "Suspense";
        case H:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case l:
            return "Portal";
          case _:
            return a.displayName || "Context";
          case E:
            return (a._context.displayName || "Context") + ".Consumer";
          case F:
            var M = a.render;
            return a = a.displayName, a || (a = M.displayName || M.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case R:
            return M = a.displayName || null, M !== null ? M : e(a.type) || "Memo";
          case B:
            M = a._payload, a = a._init;
            try {
              return e(a(M));
            } catch {
            }
        }
      return null;
    }
    function o(a) {
      return "" + a;
    }
    function s(a) {
      try {
        o(a);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var x = M.error, k = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return x.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), o(a);
      }
    }
    function i(a) {
      if (a === D) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === B)
        return "<...>";
      try {
        var M = e(a);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = f.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (d.call(a, "key")) {
        var M = Object.getOwnPropertyDescriptor(a, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function w(a, M) {
      function x() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: x,
        configurable: !0
      });
    }
    function v() {
      var a = e(this.type);
      return V[a] || (V[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function b(a, M, x, k, L, Y) {
      var W = x.ref;
      return a = {
        $$typeof: u,
        type: a,
        key: M,
        props: x,
        _owner: k
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function g(a, M, x, k, L, Y) {
      var W = M.children;
      if (W !== void 0)
        if (k)
          if ($(W)) {
            for (k = 0; k < W.length; k++)
              m(W[k]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(W);
      if (d.call(M, "key")) {
        W = e(a);
        var G = Object.keys(M).filter(function(Re) {
          return Re !== "key";
        });
        k = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", S[W + k] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          W,
          G,
          W
        ), S[W + k] = !0);
      }
      if (W = null, x !== void 0 && (s(x), W = "" + x), p(M) && (s(M.key), W = "" + M.key), "key" in M) {
        x = {};
        for (var J in M)
          J !== "key" && (x[J] = M[J]);
      } else x = M;
      return W && w(
        x,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), b(
        a,
        W,
        x,
        r(),
        L,
        Y
      );
    }
    function m(a) {
      j(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === B && (a._payload.status === "fulfilled" ? j(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function j(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    var h = q, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), P = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), I = /* @__PURE__ */ Symbol.for("react.suspense"), H = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), A = /* @__PURE__ */ Symbol.for("react.client.reference"), f = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, d = Object.prototype.hasOwnProperty, $ = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var O, V = {}, X = h.react_stack_bottom_frame.bind(
      h,
      c
    )(), C = T(i(c)), S = {};
    ee.Fragment = D, ee.jsx = function(a, M, x) {
      var k = 1e4 > f.recentlyCreatedOwnerStacks++;
      return g(
        a,
        M,
        x,
        !1,
        k ? Error("react-stack-top-frame") : X,
        k ? T(i(a)) : C
      );
    }, ee.jsxs = function(a, M, x) {
      var k = 1e4 > f.recentlyCreatedOwnerStacks++;
      return g(
        a,
        M,
        x,
        !0,
        k ? Error("react-stack-top-frame") : X,
        k ? T(i(a)) : C
      );
    };
  })()), ee;
}
var de;
function Ne() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? oe.exports = _e() : oe.exports = Oe()), oe.exports;
}
var t = Ne();
const Se = ({ x: e, y: o, items: s, onClose: i, ...r }) => {
  const c = U(null), [p, w] = z(null);
  Z(() => {
    const h = (u) => {
      c.current && !c.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const b = (() => {
    if (!c.current) return { x: e, y: o };
    const h = c.current.offsetWidth, u = c.current.offsetHeight, l = window.innerWidth, D = window.innerHeight;
    let y = e, P = o;
    return y + h > l && (y = e - h), P + u > D && (P = o - u), { x: y, y: P };
  })(), g = (h, u) => {
    h.submenu ? w(p === u ? null : u) : h.action && (h.action(), i());
  }, m = (h) => {
    s[h].submenu && w(h);
  }, j = (h) => {
    const u = h.relatedTarget;
    c.current?.contains(u) || w(null);
  };
  return /* @__PURE__ */ t.jsx(
    We,
    {
      ref: c,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: b.y,
        left: b.x
      },
      onClick: (h) => h.stopPropagation(),
      onMouseLeave: j,
      ...r,
      children: s.map((h, u) => /* @__PURE__ */ t.jsxs(Ye, { $hasSubmenu: !!h.submenu, $disabled: h.disabled, children: [
        /* @__PURE__ */ t.jsx(
          He,
          {
            onClick: (l) => {
              l.stopPropagation(), h.disabled || g(h, u);
            },
            onMouseEnter: () => !h.disabled && m(u),
            whileHover: h.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: h.color,
            $disabled: h.disabled,
            children: /* @__PURE__ */ t.jsxs(Ve, { children: [
              h.label,
              h.submenu && /* @__PURE__ */ t.jsx(Ze, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        h.submenu && p === u && /* @__PURE__ */ t.jsx(
          Ue,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Se, { x: 0, y: -u * 40, items: h.submenu, onClose: () => w(null) })
          }
        )
      ] }, u))
    }
  );
}, We = n(K.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, Ye = n.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, He = n(K.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: o }) => o ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Ve = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, Ze = n.span`
  color: #666;
  margin-left: 8px;
`, Ue = n(K.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, yi = ({
  columns: e,
  data: o,
  onRowDoubleClick: s,
  contextMenuActions: i = [],
  onSort: r,
  sortConfig: c,
  onRowClick: p,
  selectedRow: w,
  fixedHeight: v,
  hasTotalsRow: b,
  debtChecker: g,
  rowStyles: m = {},
  isLoading: j
}) => {
  const [h, u] = z(null), [l, D] = z(null), y = U(null), P = U(null), E = 500, _ = w !== void 0 ? w : h, F = (C) => {
    !e[C].isSortable || !r || r(C);
  }, H = g || ((C) => {
    const S = C[8];
    return typeof S == "string" ? parseFloat(S.replace(/[^\d.]/g, "")) > 0 : !1;
  }), R = (C) => {
    w === void 0 && u(C === _ ? null : C), p && p(o[C], C);
  }, B = (C, S) => {
    s && s(C, S);
  }, N = (C, S) => {
    if (i.length === 0) return;
    C.preventDefault();
    const a = "touches" in C ? C.touches[0].clientX : C.clientX, M = "touches" in C ? C.touches[0].clientY : C.clientY;
    D({
      x: a,
      y: M,
      rowIndex: S
    });
  }, A = (C, S) => {
    C.preventDefault(), N(C, S);
  }, f = (C, S) => {
    i.length !== 0 && (P.current && clearTimeout(P.current), P.current = window.setTimeout(() => {
      N(C, S);
    }, E));
  }, d = () => {
    P.current && (clearTimeout(P.current), P.current = null);
  }, $ = () => {
    P.current && window.clearTimeout(P.current);
  }, T = () => {
    D(null);
  };
  Z(() => {
    const C = () => {
      l && T();
    };
    return document.addEventListener("click", C), () => {
      document.removeEventListener("click", C), P.current && clearTimeout(P.current);
    };
  }, [l]);
  const O = (C, S, a) => {
    if (S)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const M = m[C] || {};
    return C === _ ? {
      backgroundColor: M.backgroundColor || "#007D88",
      color: M.color || "#FFFFFF",
      fontWeight: M.fontWeight || "normal"
    } : a ? {
      backgroundColor: M.backgroundColor || "#E8D8D8",
      color: M.color || "inherit",
      fontWeight: M.fontWeight || "normal"
    } : o[C][o[C].length - 1] === !1 ? {
      backgroundColor: M.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: M.fontWeight || "normal"
    } : {
      backgroundColor: M.backgroundColor || "#FFFFFF",
      color: M.color || "inherit",
      fontWeight: M.fontWeight || "normal"
    };
  }, V = (C, S, a) => {
    if (S) return "#FFFFFF";
    const M = O(C, S, a);
    return M.hoverBackgroundColor ? M.hoverBackgroundColor : C === _ ? "#007D88" : a ? "#E8D8D8CC" : o[C][o[C].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, X = () => {
    if (!l || i.length === 0) return null;
    const C = (typeof i == "function" ? i(o[l.rowIndex]) : i).filter(
      (S) => typeof S == "object" && (typeof S.shouldShow != "function" || S.shouldShow(o[l.rowIndex]))
    );
    return C.length === 0 ? null : /* @__PURE__ */ t.jsx(
      Ke,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.15 },
        style: {
          position: "fixed",
          left: l.x,
          top: l.y,
          zIndex: 1e3
        },
        onClick: (S) => S.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Se,
          {
            items: C.map((S) => {
              const a = {
                label: S.label,
                color: S.color,
                disabled: S.disabled
              };
              return S.getSubmenu ? a.submenu = S.getSubmenu(o[l.rowIndex]) : S.action && (a.action = () => {
                S.action(o[l.rowIndex], l.rowIndex), T();
              }), a;
            }),
            onClose: T,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(Ge, { ref: y, children: j ? /* @__PURE__ */ t.jsx(Xe, { children: /* @__PURE__ */ t.jsx(qe, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Je, { children: [
      /* @__PURE__ */ t.jsx(Qe, { children: /* @__PURE__ */ t.jsx(pe, { children: e.map(
        (C, S) => !C.isHidden && /* @__PURE__ */ t.jsx(
          tt,
          {
            $isSortable: C.isSortable,
            $isActive: c?.key === S,
            onClick: () => F(S),
            $align: C.align || "center",
            $isFirst: S === 0,
            $isLast: S === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(nt, { $align: C.align || "center", children: [
              C.name,
              C.isSortable && /* @__PURE__ */ t.jsx(
                ot,
                {
                  $direction: c?.key === S ? c.direction : "asc",
                  animate: {
                    rotate: c?.key === S && c.direction === "desc" ? 180 : 0,
                    color: c?.key === S ? "#007D88" : "#6B7280"
                  },
                  transition: { duration: 0.2 },
                  children: /* @__PURE__ */ t.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
                    "path",
                    {
                      d: "M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",
                      fill: "currentColor"
                    }
                  ) })
                }
              )
            ] })
          },
          S
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(et, { $fixedHeight: v, children: /* @__PURE__ */ t.jsx(ae, { children: o.map((C, S) => {
        const a = !!(b && S === o.length - 1), M = !!(!a && H(C)), x = O(S, a, M), k = V(S, a, M);
        return /* @__PURE__ */ t.jsx(
          pe,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: x.backgroundColor || "#FFFFFF",
              color: x.color || "inherit",
              fontWeight: x.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: S === o.length - 1,
            $isSelected: S === _,
            $isTotalsRow: a,
            onClick: () => !a && R(S),
            onDoubleClick: () => !a && B(C, S),
            onContextMenu: (L) => !a && A(L, S),
            onTouchStart: (L) => !a && f(L, S),
            onTouchEnd: d,
            onTouchMove: $,
            whileHover: a ? {} : {
              backgroundColor: k,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: x.backgroundColor || "#FFFFFF",
              color: x.color || "inherit",
              fontWeight: x.fontWeight || "normal"
            },
            children: C.map(
              (L, Y) => !e[Y]?.isHidden && /* @__PURE__ */ t.jsx(
                rt,
                {
                  $align: e[Y]?.align || "center",
                  $isFirst: Y === 0,
                  $isLast: Y === C.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && Y < C.findIndex((W) => W === "Итого:"),
                  children: L
                },
                Y
              )
            )
          },
          `row-${S}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(ae, { children: X() })
  ] }) });
}, Xe = n.div`
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
`, qe = n.div`
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
`, Ge = n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, Je = n.table`
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
`, Ke = n(K.div)`
  z-index: 1000;
  pointer-events: auto;
`, Qe = n.thead`
  text-align: center;
  position: relative;
`, et = n.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, pe = n(K.tr)`
  position: relative;
  cursor: ${({ $isTotalsRow: e }) => e ? "default" : "pointer"};
  font-weight: ${({ $isTotalsRow: e }) => e ? "bold" : "normal"};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 1px;
    background: #d1d5db;
    display: ${({ $isLast: e, $isTotalsRow: o }) => e || o ? "none" : "block"};
  }
`, tt = n.th`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  font-weight: 500;
  position: relative;
  cursor: ${({ $isSortable: e }) => e ? "pointer" : "default"};
  transition: all 0.2s ease;
  background-color: #ffffff;
  color: ${({ $isActive: e }) => e ? "#007d88" : "inherit"};

  &:hover {
    background-color: ${({ $isSortable: e }) => e ? "#f3f4f6" : "inherit"};
  }
`, nt = n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, ot = n(K.span)`
  display: inline-flex;
  align-items: center;
`, rt = n.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: o }) => e || o ? "none" : "0.5px solid #d1d5db"};
`, ji = ({ onClick: e, tooltip: o, size: s = 32, margin: i }) => /* @__PURE__ */ t.jsx(it, { onClick: e, size: s, margin: i, title: o, children: /* @__PURE__ */ t.jsx(st, { size: s }) }), it = n.button`
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  ${(e) => e.margin && `margin: ${e.margin};`}

  &:hover {
    background-color: rgba(249, 250, 250, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`, st = n.div`
  position: relative;
  width: ${(e) => e.size * 0.5}px;
  height: ${(e) => e.size * 0.5}px;

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
`, at = "/api";
async function ne(e, o = {}) {
  const {
    method: s = "GET",
    body: i,
    headers: r = {},
    withCredentials: c = !0
  } = o, p = async () => {
    const v = {
      "Content-Type": "application/json",
      ...r
    }, b = e.startsWith("http") ? e : `${at}${e}`;
    return await fetch(b, {
      method: s,
      headers: v,
      body: i ? JSON.stringify(i) : void 0,
      credentials: c ? "include" : "same-origin"
    });
  };
  return (async () => {
    const v = await p();
    if (v.ok) {
      if (v.status === 204)
        return null;
      const g = await v.text();
      if (!g) return null;
      try {
        return JSON.parse(g);
      } catch {
        return g;
      }
    }
    let b = `Request failed with status ${v.status}`;
    try {
      const g = await v.json();
      g && typeof g.error == "string" ? b = g.error : typeof g == "string" && (b = g);
    } catch {
      const g = await v.text();
      g && (b = g);
    }
    throw new Error(b);
  })();
}
const lt = {
  async isAuthenticated() {
    try {
      return !!(await this.getSessionInfo())?.client?.id;
    } catch {
      return !1;
    }
  },
  async getSessionInfo() {
    try {
      return await ne("/auth/session/info", {
        method: "GET"
      });
    } catch {
      return null;
    }
  },
  async logout() {
    try {
      await ne("/auth/session/revoke", {
        method: "POST"
      });
    } catch (e) {
      throw console.error("Logout error:", e), e;
    }
  },
  async getClientId() {
    return (await this.getSessionInfo())?.client?.id || null;
  },
  async hasPin() {
    return (await this.getSessionInfo())?.has_pin || !1;
  }
}, ct = n.button`
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
`, ki = ({ children: e, onClick: o }) => /* @__PURE__ */ t.jsxs(ct, { onClick: o, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "#50555C"
    }
  ) }),
  e
] }), se = ({
  children: e = "Подтвердить",
  icon: o,
  disabled: s = !1,
  bg: i,
  hoverBg: r,
  disabledBg: c,
  textColor: p,
  fullWidth: w = !1,
  minWidth: v,
  width: b,
  isPrimary: g = !0,
  ...m
}) => {
  const h = i ? {
    bg: i,
    hoverBg: r || i,
    disabledBg: c || i,
    textColor: p || (g ? "white" : "black")
  } : g ? {
    bg: "rgba(0, 125, 136, 1)",
    hoverBg: "rgba(0, 150, 163, 1)",
    disabledBg: "rgba(102, 177, 184, 1)",
    textColor: "white"
  } : {
    bg: "rgba(209, 213, 219, 1)",
    hoverBg: "rgba(209, 233, 239, 1)",
    disabledBg: "rgba(209, 213, 219, 0.7)",
    textColor: "black"
  };
  return /* @__PURE__ */ t.jsxs(
    dt,
    {
      disabled: s,
      $bg: h.bg,
      $hoverBg: h.hoverBg,
      $disabledBg: h.disabledBg,
      $textColor: h.textColor,
      $fullWidth: w,
      $minWidth: v,
      $width: b,
      ...m,
      children: [
        o && /* @__PURE__ */ t.jsx(pt, { children: o }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, dt = n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled: e, $bg: o, $disabledBg: s }) => e ? s : o};
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $textColor: e }) => e};
  font-size: 18px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({ disabled: e }) => e ? 0.7 : 1};
  width: ${({ $fullWidth: e, $width: o }) => e ? "100%" : o ? typeof o == "number" ? `${o}px` : o : "auto"};
  min-width: ${({ $minWidth: e }) => e || "auto"};

  &:hover {
    background-color: ${({ disabled: e, $hoverBg: o, $disabledBg: s }) => e ? s : o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({ $bg: e }) => e === "rgba(209, 213, 219, 1)" ? "rgba(209, 233, 239, 1)" : "rgba(156, 163, 175, 0.5)"};
  }
`, pt = n.span`
  display: inline-flex;
  align-items: center;
`, Ci = ({ onClick: e, tooltip: o, size: s = 32 }) => /* @__PURE__ */ t.jsx(ut, { onClick: e, size: s, title: o, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: s * 0.5,
    height: s * 0.5,
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",
        fill: "#50555C"
      }
    )
  }
) }), ut = n.button`
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
`, $i = ({ onClick: e, tooltip: o, size: s = 32 }) => /* @__PURE__ */ t.jsx(xt, { onClick: e, size: s, title: o, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: s * 0.5,
    height: s * 0.5,
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",
        fill: "#50555C"
      }
    )
  }
) }), xt = n.button`
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
`, ht = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), Mi = ({
  children: e = "Экспорт",
  icon: o = /* @__PURE__ */ t.jsx(ht, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...c
}) => {
  const p = async (w) => {
    if (s)
      try {
        await s();
      } catch (v) {
        console.error("Export error:", v);
      }
    c.onClick && c.onClick(w);
  };
  return /* @__PURE__ */ t.jsx(gt, { ...c, onClick: p, disabled: i || c.disabled, children: i ? /* @__PURE__ */ t.jsxs(ft, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(bt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    o,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, gt = n.button`
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
`, ft = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, bt = n.div`
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
    width: ${({ progress: e }) => e}%;
    background-color: #000;
    transition: width 0.3s ease;
  }
`, Si = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  options: p,
  name: w,
  disabled: v = !1,
  required: b = !1,
  ...g
}) => {
  const [m, j] = q.useState(!1), [h, u] = q.useState(!1), l = q.useRef(null), D = !!(o && !s && !m), y = (I) => {
    i && !v && i({
      target: { value: I, name: w }
    }), u(!1), j(!1);
  }, P = (I) => {
    l.current && !l.current.contains(I.target) && (u(!1), j(!1));
  }, E = () => {
    v || (u(!h), j(!h));
  };
  q.useEffect(() => (document.addEventListener("mousedown", P), () => {
    document.removeEventListener("mousedown", P);
  }), []);
  const _ = p.find((I) => I.value === s), F = _ ? _.label : "";
  return /* @__PURE__ */ t.jsxs(mt, { ref: l, ...g, children: [
    /* @__PURE__ */ t.jsxs(wt, { children: [
      /* @__PURE__ */ t.jsxs(
        vt,
        {
          hasError: r,
          isOpen: h,
          disabled: v,
          onClick: E,
          onFocus: () => !v && j(!0),
          onBlur: () => j(!1),
          tabIndex: v ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(yt, { children: F || e && /* @__PURE__ */ t.jsx(jt, { children: e }) }),
            /* @__PURE__ */ t.jsx(kt, { isOpen: h, disabled: v, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: v ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx(Ct, { children: p.map((I) => /* @__PURE__ */ t.jsxs($t, { $isSelected: I.value === s, onClick: () => y(I.value), children: [
        /* @__PURE__ */ t.jsx(Mt, { $isSelected: I.value === s, children: I.value === s && /* @__PURE__ */ t.jsx(St, {}) }),
        /* @__PURE__ */ t.jsx(Lt, { children: I.label })
      ] }, I.value)) })
    ] }),
    o && /* @__PURE__ */ t.jsx(Dt, { isVisible: D, children: o }),
    r && c && /* @__PURE__ */ t.jsx(Tt, { children: c }),
    /* @__PURE__ */ t.jsx(Et, { name: w, value: s || "", onChange: () => {
    }, tabIndex: -1, required: b, children: p.map((I) => /* @__PURE__ */ t.jsx("option", { value: I.value, children: I.label }, I.value)) })
  ] });
}, mt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, wt = n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, vt = n.div`
  border: 1px solid
    ${({ hasError: e, isOpen: o, disabled: s }) => s ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : o ? "rgba(0, 125, 136, 1)" : "rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  box-sizing: border-box;
  background-color: ${({ disabled: e }) => e ? "rgba(249, 250, 251, 1)" : "white"};
  color: ${({ disabled: e }) => e ? "rgba(156, 163, 175, 1)" : "black"};
  padding: 10px 15px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-height: 37.5px;

  &:hover {
    border-color: ${({ hasError: e, disabled: o, isOpen: s }) => o ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }
`, yt = n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, jt = n.span`
  color: rgba(80, 85, 92, 1);
`, kt = n.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, Ct = n.div`
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
`, $t = n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  text-align: left;
  background: ${({ $isSelected: e }) => e ? "rgba(232, 216, 216, 1)" : "transparent"};
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
`, Mt = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, St = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Lt = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Dt = n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, Tt = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Et = n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, Li = ({ checked: e = !1, onChange: o, className: s, label: i, disabled: r = !1 }) => {
  const [c, p] = z(!1), w = () => {
    r || !o || o(!e);
  }, v = (b) => {
    r || (b.key === "Enter" || b.key === " ") && (b.preventDefault(), w());
  };
  return /* @__PURE__ */ t.jsxs(It, { className: s, onClick: w, onKeyPress: v, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      Pt,
      {
        checked: e,
        isFocused: c,
        disabled: r,
        onMouseEnter: () => !r && p(!0),
        onMouseLeave: () => !r && p(!1),
        onFocus: () => !r && p(!0),
        onBlur: () => !r && p(!1),
        children: e && /* @__PURE__ */ t.jsx(zt, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(Rt, { disabled: r, children: i })
  ] });
}, It = n.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, Pt = n.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  border: 1px solid
    ${(e) => e.disabled ? e.checked ? "rgba(173, 179, 188, 1)" : "rgba(230, 230, 230, 1)" : e.checked || e.isFocused ? "rgba(0, 125, 136, 1)" : "rgba(173, 179, 188, 1)"};

  background-color: ${(e) => e.disabled ? e.checked ? "rgba(230, 230, 230, 1)" : "transparent" : e.checked ? "rgba(0, 125, 136, 1)" : "transparent"};

  box-shadow: ${(e) => e.disabled ? "none" : e.checked && e.isFocused ? "0 0 0 4px rgba(121, 159, 162, 0.33)" : "none"};

  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, Rt = n.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, zt = n.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, Bt = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", ue = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Ft = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], xe = ({ prefix: e = "Дата:", value: o = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [c, p] = z(!1), [w, v] = z(/* @__PURE__ */ new Date()), [b, g] = z(o ? new Date(o) : null), [m, j] = z(!1), [h, u] = z(!1), l = U(null), D = U(null), y = U(null);
  Z(() => {
    const d = ($) => {
      l.current && !l.current.contains($.target) && p(!1), D.current && !D.current.contains($.target) && j(!1), y.current && !y.current.contains($.target) && u(!1);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []), Z(() => {
    g(o ? new Date(o) : null);
  }, [o]);
  const P = (d) => {
    const $ = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    g(d);
    const T = $.toISOString().split("T")[0];
    i?.(T), p(!1);
  }, E = () => {
    const d = /* @__PURE__ */ new Date();
    v(d);
    const T = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString().split("T")[0];
    i?.(T), p(!1);
  }, _ = () => {
    g(null), i?.(""), r?.(), p(!1);
  }, F = (d) => {
    const $ = new Date(w);
    $.setMonth(d), v($), j(!1);
  }, I = (d) => {
    const $ = new Date(w);
    $.setFullYear(d), v($), u(!1);
  }, H = () => {
    const d = w.getFullYear(), $ = w.getMonth(), T = new Date(d, $, 1), V = new Date(d, $ + 1, 0).getDate(), X = T.getDay() === 0 ? 6 : T.getDay() - 1, C = [], S = 35, a = new Date(d, $, 0).getDate();
    for (let x = 0; x < X; x++) {
      const k = a - X + x + 1, L = new Date(d, $ - 1, k), Y = !!(b && L.getDate() === b.getDate() && L.getMonth() === b.getMonth() && L.getFullYear() === b.getFullYear());
      C.push(
        /* @__PURE__ */ t.jsx(re, { selected: Y, onClick: () => P(L), otherMonth: !0, children: k }, `prev-${k}`)
      );
    }
    for (let x = 1; x <= V; x++) {
      const k = new Date(d, $, x), L = !!(b && k.getDate() === b.getDate() && k.getMonth() === b.getMonth() && k.getFullYear() === b.getFullYear());
      C.push(
        /* @__PURE__ */ t.jsx(re, { selected: L, onClick: () => P(k), children: x }, `current-${x}`)
      );
    }
    const M = S - C.length;
    for (let x = 1; x <= M; x++) {
      const k = new Date(d, $ + 1, x), L = !!(b && k.getDate() === b.getDate() && k.getMonth() === b.getMonth() && k.getFullYear() === b.getFullYear());
      C.push(
        /* @__PURE__ */ t.jsx(re, { selected: L, onClick: () => P(k), otherMonth: !0, children: x }, `next-${x}`)
      );
    }
    return C;
  }, R = () => b ? b.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, B = () => {
    const d = (/* @__PURE__ */ new Date()).getFullYear(), $ = [];
    for (let T = d - 10; T <= d + 10; T++)
      $.push(T);
    return $;
  }, N = (d) => {
    d.preventDefault(), d.stopPropagation(), j(!m), u(!1);
  }, A = (d) => {
    d.preventDefault(), d.stopPropagation(), u(!h), j(!1);
  }, f = (d) => {
    const $ = d === "next" ? 1 : -1, T = new Date(w);
    T.setMonth(T.getMonth() + $), v(T);
  };
  return /* @__PURE__ */ t.jsxs(At, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(_t, { onClick: () => p(!c), children: [
      e && /* @__PURE__ */ t.jsx(Ot, { children: e }),
      /* @__PURE__ */ t.jsx(Nt, { isEmpty: !b, children: R() }),
      /* @__PURE__ */ t.jsx(Wt, { src: Bt, alt: "Календарь" })
    ] }),
    c && /* @__PURE__ */ t.jsxs(Yt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Ht, { children: [
        /* @__PURE__ */ t.jsx(
          be,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), f("prev");
            },
            onMouseDown: (d) => d.preventDefault(),
            children: /* @__PURE__ */ t.jsx(me, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Vt, { children: [
          /* @__PURE__ */ t.jsxs(Xt, { ref: D, children: [
            /* @__PURE__ */ t.jsxs(Zt, { onClick: (d) => N(d), onMouseDown: (d) => d.preventDefault(), children: [
              ue[w.getMonth()],
              /* @__PURE__ */ t.jsx(he, { $open: m })
            ] }),
            m && /* @__PURE__ */ t.jsx(ge, { $width: 120, onClick: (d) => d.stopPropagation(), children: ue.map((d, $) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: $ === w.getMonth(),
                onClick: (T) => {
                  T.stopPropagation(), F($);
                },
                children: d
              },
              d
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(qt, { ref: y, children: [
            /* @__PURE__ */ t.jsxs(Ut, { onClick: (d) => A(d), onMouseDown: (d) => d.preventDefault(), children: [
              w.getFullYear(),
              /* @__PURE__ */ t.jsx(he, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(ge, { $width: 80, onClick: (d) => d.stopPropagation(), children: B().map((d) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: d === w.getFullYear(),
                onClick: ($) => {
                  $.stopPropagation(), I(d);
                },
                children: d
              },
              d
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          be,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), f("next");
            },
            onMouseDown: (d) => d.preventDefault(),
            children: /* @__PURE__ */ t.jsx(me, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Gt, { children: Ft.map((d) => /* @__PURE__ */ t.jsx(Jt, { children: d }, d)) }),
      /* @__PURE__ */ t.jsx(Kt, { children: H() }),
      /* @__PURE__ */ t.jsxs(Qt, { children: [
        /* @__PURE__ */ t.jsx(we, { onClick: _, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(we, { onClick: E, children: "Сегодня" })
      ] })
    ] })
  ] });
}, At = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`, _t = n.div`
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
`, Ot = n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`, Nt = n.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Wt = n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Yt = n.div`
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
`, Ht = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Vt = n.div`
  display: flex;
  gap: 8px;
  color: black;
`, Le = n.button`
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
`, Zt = n(Le)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Ut = n(Le)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Xt = n.div`
  position: relative;
`, qt = n.div`
  position: relative;
`, he = n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, ge = n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({ $width: e }) => e}px;
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
`, fe = n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, be = n.button`
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
`, me = n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, Gt = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, Jt = n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, Kt = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`, re = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;

  color: ${({ otherMonth: e }) => e ? "rgba(173, 179, 188, 1)" : "#000"};
  background-color: ${({ selected: e }) => e ? "rgba(237, 224, 224, 1)" : "transparent"};

  &:hover {
    background-color: ${({ selected: e }) => e ? "rgba(237, 224, 224, 1)" : "rgba(0, 125, 136, 0.1)"};
  }
`, Qt = n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, we = n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, Di = n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`, Ti = n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`, Ei = n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`, De = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: c = !1,
  errorMessage: p,
  ...w
}) => {
  const [v, b] = q.useState(!1), g = !!(o && !s && !v), m = (u) => {
    if (!r) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(u);
        break;
      case "rubles": {
        const y = u.target.selectionStart, P = u.target.value;
        let E = P.replace(/[^\d]/g, "");
        if (E === "") {
          u.target.value = "", r(u);
          break;
        }
        const _ = parseInt(E, 10);
        if (!isNaN(_)) {
          let F = _.toLocaleString("ru-RU");
          F += " ₽";
          const I = j(P, y || 0), H = h(F, I);
          u.target.value = F, r(u), setTimeout(() => {
            u.target.setSelectionRange(H, H);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const y = l.split(".");
        y.length > 2 && (l = y[0] + "." + y.slice(1).join("")), y.length === 2 && y[1].length > 2 && (l = y[0] + "." + y[1].slice(0, 2));
        const P = parseFloat(l);
        if (isNaN(P) || (P > 100 ? l = "100" : P < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const E = u.target.selectionStart || 0, _ = l.replace(" %", "");
          u.target.value = l, r(u), setTimeout(() => {
            E < _.length && u.target.setSelectionRange(E, E);
          }, 0);
        } else
          u.target.value = l, r(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let D = l.split(" ").filter((y) => y.length > 0);
        D = D.slice(0, 3), l = D.map((y) => {
          if (y.startsWith("-") && (y = y.substring(1)), (y.match(/-/g) || []).length > 1) {
            const E = y.split("-");
            y = E[0] + "-" + E.slice(1).join("");
          }
          return y.includes("-") ? y.split("-").map((E, _) => E.length === 0 ? "" : (_ > 0, E[0].toUpperCase() + E.slice(1).toLowerCase())).join("-") : y.length > 0 ? y[0].toUpperCase() + y.slice(1).toLowerCase() : "";
        }).join(" "), l.length > 0 && l[l.length - 1] !== " " && u.target.value.length > 0 && u.target.value[u.target.value.length - 1] === " " && (l += " "), l.length > 100 && (l = l.slice(0, 100)), u.target.value = l, r(u);
        break;
      case "doc":
        l = l.replace(/\D/g, ""), l.length > 4 && (l = `${l.slice(0, 4)} ${l.slice(4, 10)}`), l.length > 11 && (l = l.slice(0, 11)), u.target.value = l, r(u);
        break;
      case "date": {
        l = l.replace(/\D/g, ""), l.length > 4 ? l = `${l.slice(0, 2)}.${l.slice(2, 4)}.${l.slice(4, 8)}` : l.length > 2 && (l = `${l.slice(0, 2)}.${l.slice(2, 4)}`), l.length > 10 && (l = l.slice(0, 10)), s?.length > l.length && [3, 6].includes(l.length) && (l = l.slice(0, l.length - 1)), u.target.value = l, r(u);
        break;
      }
      default:
        r(u);
        break;
    }
  }, j = (u, l) => {
    let D = 0;
    for (let y = 0; y < Math.min(l, u.length); y++)
      /\d/.test(u[y]) && D++;
    return D;
  }, h = (u, l) => {
    let D = 0;
    for (let y = 0; y < u.length; y++) {
      if (D >= l)
        return y;
      /\d/.test(u[y]) && D++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(en, { children: [
    /* @__PURE__ */ t.jsx(
      tn,
      {
        ...w,
        value: s,
        placeholder: g ? "" : e,
        onFocus: () => b(!0),
        onBlur: (u) => {
          b(!1), w.onBlur?.(u);
        },
        onChange: m,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: c
      }
    ),
    o && /* @__PURE__ */ t.jsx(nn, { isVisible: g, children: o }),
    c && p && /* @__PURE__ */ t.jsx(on, { children: p })
  ] });
}, en = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, tn = n.input`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
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
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`, nn = n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, on = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Ii = ({ total: e, current: o = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [c, p] = z(o), w = (b) => {
    b < 1 || b > r || b === c || (p(b), s?.(b));
  }, v = () => {
    const b = [];
    let m = 1, j = r;
    if (r > 5) {
      const h = Math.floor(2.5);
      m = Math.max(c - h, 1), j = Math.min(c + h, r), c <= h + 1 ? j = 5 : c >= r - h && (m = r - 5 + 1);
    }
    for (let h = m; h <= j; h++)
      b.push(
        /* @__PURE__ */ t.jsx(te, { active: h === c, onClick: () => w(h), children: h }, h)
      );
    return m > 1 && (m > 2 && b.unshift(/* @__PURE__ */ t.jsx(te, { children: "..." }, "start-ellipsis")), b.unshift(
      /* @__PURE__ */ t.jsx(te, { active: c === 1, onClick: () => w(1), children: "1" }, 1)
    )), j < r && (j < r - 1 && b.push(/* @__PURE__ */ t.jsx(te, { children: "..." }, "end-ellipsis")), b.push(
      /* @__PURE__ */ t.jsx(te, { active: r === c, onClick: () => w(r), children: r }, r)
    )), b;
  };
  return /* @__PURE__ */ t.jsxs(rn, { children: [
    /* @__PURE__ */ t.jsx(ve, { disabled: c === 1, onClick: () => w(c - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    v(),
    /* @__PURE__ */ t.jsx(ve, { disabled: c === r, onClick: () => w(c + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, rn = n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, te = n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ active: e }) => e ? "white" : "black"};
  background-color: ${({ active: e }) => e ? "rgba(0, 125, 136, 1)" : "transparent"};

  &:hover {
    color: ${({ active: e }) => e ? "white" : "rgba(0, 125, 136, 1)"};
  }
`, ve = n.button`
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
`, Pi = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  rows: p = 3,
  ...w
}) => {
  const [v, b] = q.useState(!1), g = !!(o && !s && !v);
  return /* @__PURE__ */ t.jsxs(sn, { children: [
    /* @__PURE__ */ t.jsx(
      an,
      {
        ...w,
        value: s,
        placeholder: g ? "" : e,
        onFocus: () => b(!0),
        onBlur: (m) => {
          b(!1), w.onBlur?.(m);
        },
        onChange: i,
        hasError: r,
        rows: p
      }
    ),
    o && /* @__PURE__ */ t.jsx(ln, { isVisible: g, children: o }),
    r && c && /* @__PURE__ */ t.jsx(cn, { children: c })
  ] });
}, sn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, an = n.textarea`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
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
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`, ln = n.label`
  position: absolute;
  left: 12px;
  top: 12px;
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, cn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, dn = ({
  title: e,
  onClose: o,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: c = !1,
  isSubmitting: p = !1,
  mode: w = "create",
  hideSaveButton: v = !1,
  hideCanselButton: b = !1,
  width: g = "560px",
  saveButtonText: m = "Сохранить",
  customLayout: j
}) => {
  const h = w === "view", u = U(null);
  Z(() => {
    const y = (E) => {
      E.key === "Escape" && o();
    };
    document.addEventListener("keydown", y);
    const P = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => u.current?.focus(), 0), () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = P;
    };
  }, [o]);
  const l = (y) => {
    y.target === y.currentTarget && o();
  }, D = (y) => {
    y.preventDefault(), s();
  };
  return /* @__PURE__ */ t.jsx(pn, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    un,
    {
      ref: u,
      $width: g,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Te, { children: [
          /* @__PURE__ */ t.jsx(Ee, { children: e }),
          /* @__PURE__ */ t.jsx(xn, { type: "button", onClick: o, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        j ? /* @__PURE__ */ t.jsx(hn, { children: j }) : null,
        /* @__PURE__ */ t.jsxs(gn, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(fn, { children: r }),
          /* @__PURE__ */ t.jsxs(bn, { children: [
            /* @__PURE__ */ t.jsx(mn, { children: b ? null : /* @__PURE__ */ t.jsx(vn, { isPrimary: !1, onClick: D, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(wn, { children: !h && !v ? /* @__PURE__ */ t.jsx(
              yn,
              {
                type: "submit",
                disabled: c || p,
                children: p ? "Сохранение..." : m
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, pn = n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, un = n.div`
  width: min(100%, ${({ $width: e }) => e});
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
`, Te = n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`, Ee = n.h2`
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
`, xn = n.button`
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
`, hn = n.div`
  padding: 12px 18px 0 18px;
`, gn = n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, fn = n.div`
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
`, bn = n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, mn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, wn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, vn = n(se)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, yn = n(se)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, jn = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], Ri = ({
  value: e = "",
  placeholder: o = "Выберите период",
  options: s = jn,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: c
}) => {
  const [p, w] = z(!1), [v, b] = z(!1), [g, m] = z(""), [j, h] = z(""), [u, l] = z(""), D = U(null), y = U(null);
  Z(() => {
    if (e === "Custom" && j && u) {
      const R = I(j), B = I(u);
      m(`С ${R} по ${B}`);
    } else {
      const R = s.find((B) => B.value === e);
      m(R ? R.label : "");
    }
  }, [e, s, j, u]), Z(() => {
    const R = (B) => {
      D.current && !D.current.contains(B.target) && w(!1), v && y.current && !y.current.contains(B.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((f) => f.contains(B.target)) || b(!1));
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [v]);
  const P = (R) => {
    r?.(R.value), w(!1);
  }, E = () => {
    w(!1), c ? c() : b(!0);
  }, _ = () => {
    r?.(""), m(""), h(""), l("");
  }, F = () => {
    if (j && u) {
      const R = I(j), B = I(u), N = `С ${R} по ${B}`;
      r?.("Custom", j, u), m(N), b(!1);
    }
  }, I = (R) => {
    const B = new Date(R), N = String(B.getDate()).padStart(2, "0"), A = String(B.getMonth() + 1).padStart(2, "0"), f = B.getFullYear();
    return `${N}.${A}.${f}`;
  }, H = () => /* @__PURE__ */ t.jsxs(Rn, { children: [
    /* @__PURE__ */ t.jsx(Te, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Ee, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(zn, { onClick: _, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(kn, { ref: D, children: [
      /* @__PURE__ */ t.jsxs(Cn, { onClick: () => w(!p), children: [
        /* @__PURE__ */ t.jsx($n, { children: g || o }),
        /* @__PURE__ */ t.jsx(Mn, { $isOpen: p, children: "▼" })
      ] }),
      p && /* @__PURE__ */ t.jsxs(Sn, { children: [
        s.map((R) => /* @__PURE__ */ t.jsxs(Ln, { onClick: () => P(R), $isSelected: e === R.value, children: [
          /* @__PURE__ */ t.jsx(Dn, { $isSelected: e === R.value, children: e === R.value && /* @__PURE__ */ t.jsx(Tn, {}) }),
          /* @__PURE__ */ t.jsx(En, { children: R.label })
        ] }, R.id)),
        i && /* @__PURE__ */ t.jsx(In, { onClick: E, children: "Другой период" })
      ] })
    ] }),
    v && /* @__PURE__ */ t.jsx("div", { ref: y, children: /* @__PURE__ */ t.jsx(
      dn,
      {
        title: "",
        onClose: () => b(!1),
        onCancel: () => b(!1),
        onSave: (R) => {
          R.preventDefault(), F();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(H, {}),
        children: /* @__PURE__ */ t.jsxs(Pn, { children: [
          /* @__PURE__ */ t.jsx(ye, { children: /* @__PURE__ */ t.jsx(xe, { value: j, onChange: (R) => h(R) }) }),
          /* @__PURE__ */ t.jsx(ye, { children: /* @__PURE__ */ t.jsx(xe, { value: u, onChange: (R) => l(R) }) })
        ] })
      }
    ) })
  ] });
}, kn = n.div`
  position: relative;
  width: 245px;
`, Cn = n.div`
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
`, $n = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Mn = n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, Sn = n.div`
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
`, Ln = n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  background: ${({ $isSelected: e }) => e ? "rgba(232, 216, 216, 1)" : "transparent"};
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
`, Dn = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Tn = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, En = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, In = n.div`
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
`, Pn = n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ye = n.div`
  flex: 1;
`, Rn = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, zn = n.button`
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
`, zi = ({
  name: e,
  value: o,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: c = "8 (999) 500-50-50",
  customPlaceholder: p,
  tabIndex: w,
  disabled: v = !1,
  hasError: b = !1,
  errorMessage: g
}) => {
  const [m, j] = q.useState(!1), h = q.useRef(null), u = !!(p && !o && !m), l = (E) => {
    const F = E.replace(/\D/g, "").slice(0, 11);
    let I = "";
    return F.length > 0 && (I += "8"), F.length > 1 && (I += ` (${F.slice(1, 4)}`), F.length > 4 && (I += `) ${F.slice(4, 7)}`), F.length > 7 && (I += `-${F.slice(7, 9)}`), F.length > 9 && (I += `-${F.slice(9, 11)}`), I;
  }, D = (E) => {
    const _ = l(E.target.value), F = {
      ...E,
      target: {
        ...E.target,
        name: e,
        value: _
      }
    };
    s(F);
  }, y = (E) => {
    j(!1), i?.(E);
  }, P = (E) => {
    r?.(E);
  };
  return /* @__PURE__ */ t.jsxs(Bn, { children: [
    /* @__PURE__ */ t.jsx(
      Fn,
      {
        ref: h,
        name: e,
        type: "tel",
        value: o,
        onChange: D,
        onKeyPress: P,
        placeholder: u ? "" : c,
        maxLength: 18,
        tabIndex: w,
        disabled: v,
        hasError: b,
        onFocus: () => j(!0),
        onBlur: y,
        inputMode: "tel"
      }
    ),
    p && /* @__PURE__ */ t.jsx(An, { isVisible: u, children: p }),
    b && g && /* @__PURE__ */ t.jsx(_n, { children: g })
  ] });
}, Bn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Fn = n.input`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
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
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }

  &:disabled {
    background-color: rgba(248, 249, 250, 0.9);
    cursor: not-allowed;
  }
`, An = n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, _n = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Bi = ({ tabs: e, activeTab: o, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const c = e.find((p) => p.id === o)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(On, { children: /* @__PURE__ */ t.jsxs(Nn, { children: [
      e.map((p) => /* @__PURE__ */ t.jsxs(Wn, { $isActive: o === p.id, onClick: () => s(p.id), $fontSize: r, children: [
        p.label,
        o === p.id && /* @__PURE__ */ t.jsx(Yn, {})
      ] }, p.id)),
      i && /* @__PURE__ */ t.jsx(Hn, { children: i })
    ] }) }),
    c && /* @__PURE__ */ t.jsx(Vn, { children: c })
  ] });
}, On = n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Nn = n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Wn = n.li`
  position: relative;
  padding: 12px 0;
  cursor: pointer;
  font-size: ${(e) => typeof e.$fontSize == "number" ? `${e.$fontSize}px` : e.$fontSize};
  font-weight: ${(e) => e.$isActive ? "600" : "400"};
  color: ${(e) => e.$isActive ? "rgba(0, 125, 136, 1)" : "rgba(107, 114, 128, 1)"};
  transition: all 0.2s ease;

  &:hover {
    color: rgba(0, 125, 136, 0.8);
  }
`, Yn = n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Hn = n.li`
  margin-left: auto;
  padding: 4px 0;
`, Vn = n.div`
  margin-top: 20px;
`, Fi = ({
  mode: e,
  primaryValue: o,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: c,
  disabled: p = !1,
  hasError: w = !1,
  errorMessage: v = "",
  customIcon: b
}) => {
  const m = b || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(qn, { children: [
    /* @__PURE__ */ t.jsx(Gn, { children: o || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(Jn, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(Zn, { children: [
    /* @__PURE__ */ t.jsxs(Un, { children: [
      /* @__PURE__ */ t.jsx(Xn, { type: "text", value: o || "", placeholder: i, readOnly: !0, disabled: p }),
      o && !p && /* @__PURE__ */ t.jsx(Qn, { type: "button", onClick: c, "aria-label": "Очистить", children: "×" })
    ] }),
    !p && /* @__PURE__ */ t.jsx(Kn, { type: "button", onClick: r, "aria-label": "Выбрать", children: m }),
    w && v && /* @__PURE__ */ t.jsx(eo, { children: v })
  ] });
}, Zn = n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Un = n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Xn = n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, qn = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, Gn = n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, Jn = n.span`
  font-size: 13px;
  color: #666;
`, Kn = n.button`
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
`, Qn = n.button`
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
`, eo = n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, Ie = n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, Ai = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(to, { children: [
  "Всего: ",
  e
] }) }), to = n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, _i = n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, Oi = n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, no = n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, oo = n.span`
  position: absolute;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 24px;
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
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
    transform: ${({ checked: e }) => e ? "translateX(26px)" : "translateX(0)"};
  }
`, ro = n.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, Ni = ({ checked: e, onChange: o, disabled: s }) => {
  const i = () => {
    s || o(!e);
  };
  return /* @__PURE__ */ t.jsxs(no, { children: [
    /* @__PURE__ */ t.jsx(ro, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(oo, { checked: e, disabled: s })
  ] });
}, Wi = ({ id: e, name: o, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(io, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(so, { type: "radio", id: e, name: o, checked: s, onChange: i }),
  r
] }), io = n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, so = n.input`
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
`, Yi = ({
  percentage: e,
  onChange: o,
  draggable: s = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const r = U(null), [c, p] = z(!1), w = (m) => {
    !s || !o || (m.preventDefault(), p(!0), g(m));
  }, v = (m) => {
    !c || !o || g(m);
  }, b = () => {
    p(!1);
  }, g = (m) => {
    if (!r.current || !o) return;
    const j = r.current.getBoundingClientRect();
    let u = (m.clientX - j.left) / j.width * 100;
    u = Math.max(0, Math.min(100, u)), o(Math.round(u));
  };
  return Z(() => {
    if (c)
      return document.addEventListener("mousemove", v), document.addEventListener("mouseup", b), () => {
        document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", b);
      };
  }, [c]), /* @__PURE__ */ t.jsxs(ao, { ref: r, $draggable: s, onMouseDown: w, children: [
    /* @__PURE__ */ t.jsx(lo, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(co, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(po, { $percentage: e, $primaryColor: i.primary })
  ] });
}, ao = n.div`
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  cursor: ${(e) => e.$draggable ? "pointer" : "default"};

  &:hover {
    cursor: ${(e) => e.$draggable ? "pointer" : "default"};
  }
`, lo = n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, co = n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, po = n.div`
  position: absolute;
  left: ${(e) => e.$percentage}%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${(e) => e.$primaryColor};
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
`, uo = ["zoomControl", "fullscreenControl"];
let ie = null;
const xo = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((o, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => o(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Hi = ({
  onLocationSelect: e,
  initialAddress: o = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: c = 12,
  height: p = 400,
  width: w = "100%",
  inputPlaceholder: v = "Введите адрес или название места",
  searchButtonLabel: b = "Найти",
  draggablePlacemark: g = !0,
  controls: m = uo,
  showSearch: j = !0,
  className: h,
  style: u,
  onError: l
}) => {
  const [D, y] = z(null), [P, E] = z(o), [_, F] = z(o), [I, H] = z(!1), R = U(null);
  Z(() => {
    let A = !1, f;
    return (async () => {
      try {
        const $ = await xo(r);
        if (A || !R.current) return;
        f = new $.Map(R.current, {
          center: [s, i],
          zoom: c,
          controls: m
        });
        const T = new $.Placemark([s, i], {}, { draggable: g });
        f.geoObjects.add(T), f.events.add("click", (O) => {
          const V = O.get("coords");
          B(V, T, f);
        }), T.events.add("dragend", () => {
          const O = T.geometry.getCoordinates();
          B(O, T, f);
        }), y(f), H(!0);
      } catch ($) {
        l && $ instanceof Error && l($);
      }
    })(), () => {
      A = !0, f && f.destroy();
    };
  }, [r, s, i, c, m, g, l]);
  const B = async (A, f, d) => {
    if (window.ymaps)
      try {
        const O = (await window.ymaps.geocode(A)).geoObjects.get(0).getAddressLine();
        f.geometry.setCoordinates(A), d.panTo(A, { flying: !0 }), F(O), E(O), e(O, A[0], A[1]);
      } catch ($) {
        l && $ instanceof Error && l($);
      }
  }, N = async () => {
    if (!(!P.trim() || !window.ymaps || !D))
      try {
        const f = (await window.ymaps.geocode(P)).geoObjects.get(0);
        if (f) {
          const d = f.geometry.getCoordinates(), $ = f.properties.get("boundedBy");
          D.setBounds($, { checkZoomRange: !0 });
          const T = new window.ymaps.Placemark(d, {}, { draggable: g });
          D.geoObjects.removeAll(), D.geoObjects.add(T);
          const O = f.getAddressLine();
          F(O), e(O, d[0], d[1]), T.events.add("dragend", () => {
            const V = T.geometry.getCoordinates();
            B(V, T, D);
          });
        }
      } catch (A) {
        l && A instanceof Error && l(A);
      }
  };
  return /* @__PURE__ */ t.jsxs(ho, { className: h, style: u, children: [
    j && /* @__PURE__ */ t.jsxs(go, { children: [
      /* @__PURE__ */ t.jsx(
        De,
        {
          type: "text",
          value: P,
          onChange: (A) => E(A.target.value),
          placeholder: v,
          onKeyPress: (A) => A.key === "Enter" && N(),
          disabled: !I
        }
      ),
      /* @__PURE__ */ t.jsx(fo, { onClick: N, disabled: !I, children: b })
    ] }),
    /* @__PURE__ */ t.jsxs(mo, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: _ || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(bo, { ref: R, $height: p, $width: w }),
    /* @__PURE__ */ t.jsx(wo, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, ho = n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, go = n.div`
  display: flex;
  gap: 8px;
`, fo = n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, bo = n.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, mo = n.div`
  font-size: 14px;
  color: #374151;
`, wo = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, Pe = n.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;
function je(e, o = "₽") {
  if (!e || e.trim() === "")
    return `0${o}`;
  const s = e.replace(/[^\d-]/g, "");
  if (!s || s === "-" || s === "")
    return `0${o}`;
  const i = parseInt(s, 10);
  if (isNaN(i))
    return `0${o}`;
  const r = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(i);
  return !0 ? `${r}${o}` : r;
}
function Vi(e) {
  if (!e) return 0;
  const o = e.replace(/\D/g, "");
  return parseInt(o, 10);
}
const Zi = ({ title: e, data: o, maxValue: s, step: i, height: r = 300, titleFontSize: c }) => {
  const [p, w] = z(null), v = [];
  for (let g = 0; g <= s; g += i)
    v.push(g);
  const b = o.length > 0 ? o[0].bars.map((g) => ({ name: g.name, color: g.color })) : [];
  return /* @__PURE__ */ t.jsxs(vo, { children: [
    /* @__PURE__ */ t.jsxs(Ie, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Pe, { style: { fontSize: c }, children: e }),
      /* @__PURE__ */ t.jsx(yo, { children: b.map((g, m) => /* @__PURE__ */ t.jsxs(jo, { children: [
        /* @__PURE__ */ t.jsx(ko, { color: g.color }),
        /* @__PURE__ */ t.jsx(Co, { children: g.name })
      ] }, m)) })
    ] }),
    /* @__PURE__ */ t.jsxs($o, { height: r, children: [
      /* @__PURE__ */ t.jsx(Mo, { children: v.map((g, m) => /* @__PURE__ */ t.jsx(So, { children: g.toLocaleString() }, m)) }),
      /* @__PURE__ */ t.jsxs(Lo, { children: [
        /* @__PURE__ */ t.jsxs(Do, { children: [
          v.map((g, m) => {
            const j = g / s * 100;
            return /* @__PURE__ */ t.jsx(To, { position: 100 - j }, `line-${m}`);
          }),
          o.map((g, m) => /* @__PURE__ */ t.jsxs(Eo, { onMouseEnter: () => w(m), onMouseLeave: () => w(null), children: [
            g.bars.map((j, h) => {
              const u = g.bars.slice(h + 1).reduce((l, D) => l + D.value, 0);
              return /* @__PURE__ */ t.jsx(
                Io,
                {
                  height: j.value / s * 100,
                  offset: u / s * 100,
                  color: j.color,
                  isHovered: p !== null && p !== m
                },
                h
              );
            }),
            p === m && /* @__PURE__ */ t.jsxs(zo, { children: [
              /* @__PURE__ */ t.jsxs(Bo, { children: [
                /* @__PURE__ */ t.jsxs(Fo, { children: [
                  "Всего: ",
                  je(g.total.toString())
                ] }),
                g.bars.map((j, h) => /* @__PURE__ */ t.jsxs(Ao, { children: [
                  j.name,
                  ": ",
                  je(j.value.toString())
                ] }, h))
              ] }),
              /* @__PURE__ */ t.jsx(_o, {})
            ] })
          ] }, m))
        ] }),
        /* @__PURE__ */ t.jsx(Po, { children: o.map((g, m) => /* @__PURE__ */ t.jsx(Ro, { style: { flex: 1, textAlign: "center" }, children: g.label }, m)) })
      ] })
    ] })
  ] });
}, vo = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, yo = n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, jo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, ko = n.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, Co = n.span`
  font-size: 14px;
  color: #4b5563;
`, $o = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Mo = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, So = n.span`
  font-size: 12px;
  color: #6b7280;
`, Lo = n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Do = n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, To = n.div`
  position: absolute;
  top: ${(e) => e.position}%;
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
`, Eo = n.div`
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
`, Io = n.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, Po = n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, Ro = n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, zo = n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, Bo = n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, Fo = n.div`
  font-weight: 600;
  margin-bottom: 6px;
`, Ao = n.div`
  margin-bottom: 2px;
`, _o = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Oo = Ae`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Ui = ({
  title: e,
  data: o,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: c,
  minY: p,
  xStep: w,
  yStep: v,
  height: b = 300,
  showLegend: g = !0,
  xAxisCustomLabels: m,
  showTooltip: j = !0,
  titleFontSize: h = "30px"
}) => {
  const [u, l] = z(null), [D, y] = z({ x: 0, y: 0 }), P = U(null), E = U(null), _ = Math.max(...o.map((f) => f.x), r), F = [];
  for (let f = 0; f <= _; f += w)
    F.push(f);
  const I = [];
  for (let f = p; f <= c; f += v)
    I.push(f);
  const H = m || F.map((f) => f.toString()), R = g ? Array.from(new Set(o.filter((f) => f.label).map((f) => f.label))).map((f) => {
    const d = o.find(($) => $.label === f);
    return { name: f, color: d.color };
  }) : [], B = {};
  o.forEach((f) => {
    const d = f.label || "default";
    B[d] || (B[d] = []), B[d].push(f);
  });
  const N = (f) => f / _ * 100, A = (f) => {
    const d = c - p;
    return 100 - (f - p) / d * 100;
  };
  return Z(() => {
    if (u && E.current) {
      const f = E.current.getBoundingClientRect(), d = N(u.x) / 100 * f.width, $ = A(u.y) / 100 * f.height;
      y({
        x: d + f.left,
        y: $ + f.top
      });
    }
  }, [u, r, c, p]), /* @__PURE__ */ t.jsxs(No, { children: [
    /* @__PURE__ */ t.jsxs(Ie, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Pe, { style: { fontSize: h }, children: e }),
      g && R.length > 0 && /* @__PURE__ */ t.jsx(Wo, { children: R.map((f, d) => /* @__PURE__ */ t.jsxs(Yo, { children: [
        /* @__PURE__ */ t.jsx(Ho, { color: f.color }),
        /* @__PURE__ */ t.jsx(Vo, { children: f.name })
      ] }, d)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Zo, { height: b, children: [
      /* @__PURE__ */ t.jsxs(Uo, { children: [
        I.map((f, d) => /* @__PURE__ */ t.jsx(Xo, { children: f.toLocaleString() }, d)),
        /* @__PURE__ */ t.jsx(ke, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(qo, { ref: E, children: [
        I.map((f, d) => /* @__PURE__ */ t.jsx(Go, { position: A(f) }, `hline-${d}`)),
        Object.values(B).map((f, d) => f.map(($, T) => {
          if (T === 0) return null;
          const O = f[T - 1], V = N(O.x), X = A(O.y), C = N($.x), S = A($.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${V}%`, y1: `${X}%`, x2: `${C}%`, y2: `${S}%`, stroke: $.color, strokeWidth: "1" })
            },
            `line-${d}-${T}`
          );
        })),
        o.map((f, d) => /* @__PURE__ */ t.jsx(
          Jo,
          {
            x: N(f.x),
            y: A(f.y),
            color: f.color,
            onMouseEnter: () => l(f),
            onMouseLeave: () => l(null),
            isHovered: u?.label === f.label
          },
          d
        ))
      ] })
    ] }),
    j && u && /* @__PURE__ */ t.jsxs(er, { ref: P, style: { left: D.x, top: D.y }, children: [
      /* @__PURE__ */ t.jsxs(tr, { children: [
        u.name && /* @__PURE__ */ t.jsx(nr, { children: u.name }),
        /* @__PURE__ */ t.jsx(or, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(rr, {})
    ] }),
    /* @__PURE__ */ t.jsxs(Ko, { children: [
      H.map((f, d) => {
        const T = F[d] / _ * 100;
        return /* @__PURE__ */ t.jsx(Qo, { style: { left: `${T}%`, transform: "translateX(-50%)" }, children: f }, d);
      }),
      s && /* @__PURE__ */ t.jsx(ke, { children: s })
    ] })
  ] });
}, No = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Wo = n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Yo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Ho = n.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Vo = n.span`
  font-size: 14px;
  color: #4b5563;
`, Zo = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Uo = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Xo = n.span`
  font-size: 12px;
  color: #6b7280;
`, ke = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, qo = n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, Go = n.div`
  position: absolute;
  top: ${(e) => e.position}%;
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
`, Jo = n.div`
  position: absolute;
  left: ${(e) => e.x}%;
  top: ${(e) => e.y}%;
  width: ${(e) => e.isHovered ? "8px" : "6px"};
  height: ${(e) => e.isHovered ? "8px" : "6px"};
  background-color: ${(e) => e.color};
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
`, Ko = n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, Qo = n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, er = n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${Oo} 0.15s ease-out forwards;
`, tr = n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, nr = n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, or = n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, rr = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, Xi = ({ images: e, initialIndex: o, onClose: s }) => {
  const [i, r] = z(o), [c, p] = z(0), w = () => {
    r((m) => m > 0 ? m - 1 : e.length - 1), p(0);
  }, v = () => {
    r((m) => m < e.length - 1 ? m + 1 : 0), p(0);
  }, b = () => {
    p((m) => (m + 90) % 360);
  }, g = (m) => {
    m.key === "Escape" ? s() : m.key === "ArrowLeft" ? w() : m.key === "ArrowRight" ? v() : (m.key === "r" || m.key === "к") && b();
  };
  return /* @__PURE__ */ t.jsx(ir, { onClick: s, onKeyDown: g, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(sr, { onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(ar, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(lr, { children: /* @__PURE__ */ t.jsx(cr, { onClick: b, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(dr, { children: [
      /* @__PURE__ */ t.jsx(Ce, { $position: "left", onClick: w, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(pr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: c }),
      /* @__PURE__ */ t.jsx(Ce, { $position: "right", onClick: v, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(ur, { children: e.map((m, j) => /* @__PURE__ */ t.jsx(
      xr,
      {
        $active: j === i,
        onClick: () => {
          r(j), p(0);
        }
      },
      j
    )) })
  ] }) });
}, ir = n.div`
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
`, sr = n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, ar = n.button`
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
`, lr = n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, cr = n.button`
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
`, dr = n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, pr = n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, Ce = n.button`
  position: absolute;
  ${({ $position: e }) => e}: 20px;
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
    ${({ $position: e }) => e}: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`, ur = n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, xr = n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, hr = ({ isOpen: e, callPhone: o, error: s, onClose: i }) => {
  const [r, c] = z(!1);
  if (!e) return null;
  const p = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), w = () => {
    p ? window.location.href = `tel:${o}` : (navigator.clipboard.writeText(o), c(!0), setTimeout(() => c(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(gr, { onClick: i, children: /* @__PURE__ */ t.jsxs(fr, { onClick: (v) => v.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(br, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx($e, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      mr,
      {
        onClick: w,
        title: p ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          o,
          !p && r && /* @__PURE__ */ t.jsx(wr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx($e, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    s && /* @__PURE__ */ t.jsx(vr, { children: s })
  ] }) });
}, gr = n.div`
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
`, fr = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, br = n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, $e = n.p`
  margin-bottom: 15px;
  color: #555;
`, mr = n.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: rgba(0, 125, 136, 1);
  position: relative;
  cursor: ${(e) => e.$clickable ? "pointer" : "default"};
  transition: all 0.2s;

  ${(e) => e.$clickable && `
        &:hover {
            color: rgba(0, 100, 120, 1);
            text-decoration: underline;
        }
        &:active {
            transform: scale(0.98);
        }
    `}
`, wr = n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, vr = n.div`
  color: #e74c3c;
  margin: 10px 0;
`, yr = ze({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), jr = ({ collapsed: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: `rotate(${e ? "180deg" : "0deg"})`,
      transition: "transform 0.3s ease"
    },
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",
        fill: "#50555C",
        stroke: "#50555C"
      }
    )
  }
), qi = ({
  items: e,
  bottomItems: o = [],
  logo: s,
  arrowIcon: i,
  collapsed: r,
  onToggle: c,
  selectedKey: p,
  onSelect: w,
  autoCollapseOnSelect: v = !1,
  width: b = "315px",
  collapsedWidth: g = "85px",
  className: m,
  style: j,
  mobileBreakpoint: h = 768,
  showBottomLabels: u = !0,
  children: l
}) => {
  const D = Be(yr), [y, P] = z(window.innerWidth <= h);
  Z(() => {
    const x = () => {
      P(window.innerWidth <= h);
    };
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, [h]);
  const [E, _] = z(
    r ?? D.collapsed ?? !1
  ), [F, I] = z(null), [H, R] = z(
    p ?? D.selectedSideMenuItem ?? null
  ), [B, N] = z({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), A = U(null), f = r ?? D.collapsed ?? E, d = (x) => {
    _(x), D.toggleCollapsed(), c?.(x);
  }, $ = p ?? D.selectedSideMenuItem ?? H, T = (x) => {
    R(x), D.setSelectedSideMenuItem(x);
  };
  Z(() => {
    r !== void 0 && (_(r), r && I(null));
  }, [r]), Z(() => {
    p !== void 0 && T(p);
  }, [p]), Z(() => {
    const x = () => N((k) => ({ ...k, visible: !1 }));
    return document.addEventListener("click", x), () => document.removeEventListener("click", x);
  }, []);
  const O = () => {
    const x = !f;
    d(x), x && I(null);
  }, V = (x) => {
    x.disabled || x.hidden || (T(x.key), w?.(x), x.onClick?.(x), v && (d(!0), I(null)));
  }, X = (x) => {
    I((k) => k === x ? null : x);
  }, C = (x, k) => {
    const L = (x.children?.length || 0) > 0;
    if (f && L) {
      k.stopPropagation();
      const Y = k.currentTarget.getBoundingClientRect();
      N({
        visible: !0,
        x: Y.right + 6,
        y: Y.top,
        items: x.children || []
      });
      return;
    }
    L ? X(x.key) : V(x);
  }, S = (x, k = !1) => x.filter((L) => !L.hidden).map((L) => {
    const Y = (L.children?.length || 0) > 0, W = F === L.key, G = $ === L.key || !!L.children && L.children.some((J) => J.key === $);
    return /* @__PURE__ */ t.jsxs(q.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Br,
        {
          $collapsed: f,
          $selected: G,
          onClick: (J) => C(L, J),
          $disabled: L.disabled,
          title: L.label,
          children: [
            L.icon && /* @__PURE__ */ t.jsx(Ar, { $collapsed: f, children: L.icon }),
            !f && /* @__PURE__ */ t.jsx(Fr, { children: L.label }),
            !f && Y && /* @__PURE__ */ t.jsx(Or, { $expanded: W, children: "▾" })
          ]
        }
      ),
      !f && Y && W && /* @__PURE__ */ t.jsx(_r, { children: S(L.children || [], !0) })
    ] }, L.key);
  }), a = Fe(() => B.visible ? /* @__PURE__ */ t.jsx(Wr, { style: { left: B.x, top: B.y }, children: B.items.map((x) => /* @__PURE__ */ t.jsx(
    Yr,
    {
      onClick: () => {
        V(x), N({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: $ === x.key,
      children: x.label
    },
    x.key
  )) }) : null, [B, $]), M = () => {
    const x = [...e, ...o].filter((k) => !k.hidden);
    return /* @__PURE__ */ t.jsx(Sr, { children: x.map((k) => {
      const L = $ === k.key;
      return /* @__PURE__ */ t.jsxs(
        Lr,
        {
          $selected: L,
          onClick: () => V(k),
          $disabled: k.disabled,
          children: [
            k.icon && /* @__PURE__ */ t.jsx(Dr, { $selected: L, children: k.icon }),
            u && /* @__PURE__ */ t.jsx(Tr, { $selected: L, children: k.label })
          ]
        },
        k.key
      );
    }) });
  };
  return y ? /* @__PURE__ */ t.jsxs(kr, { className: m, style: j, children: [
    /* @__PURE__ */ t.jsx(Cr, { children: s && /* @__PURE__ */ t.jsx($r, { children: s }) }),
    /* @__PURE__ */ t.jsx(Mr, { children: l }),
    M()
  ] }) : /* @__PURE__ */ t.jsxs(
    Er,
    {
      ref: A,
      $collapsed: f,
      $width: b,
      $collapsedWidth: g,
      className: m,
      style: j,
      children: [
        /* @__PURE__ */ t.jsxs(Ir, { children: [
          /* @__PURE__ */ t.jsx(Pr, { onClick: O, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx(jr, { collapsed: f }) }),
          !f && s && /* @__PURE__ */ t.jsx(Rr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(zr, { children: [
          /* @__PURE__ */ t.jsx(Me, { children: S(e) }),
          o.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Nr, {}),
            /* @__PURE__ */ t.jsx(Me, { children: S(o) })
          ] })
        ] }),
        a,
        /* @__PURE__ */ t.jsx(Hr, { $collapsed: f }),
        l
      ]
    }
  );
}, kr = n.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
`, Cr = n.header`
  padding: 16px;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`, $r = n.div`
  display: flex;
  align-items: center;
`, Mr = n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`, Sr = n.nav`
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
`, Lr = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 0.3)" : "transparent"};
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;

  &:active {
    background-color: rgba(209, 213, 219, 0.5);
  }
`, Dr = n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
`, Tr = n.span`
  font-size: 12px;
  font-weight: ${({ $selected: e }) => e ? "600" : "400"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  text-align: center;
  white-space: nowrap;
`, Er = n.div`
  width: ${({ $collapsed: e, $width: o, $collapsedWidth: s }) => e ? s : o};
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
`, Ir = n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`, Pr = n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`, Rr = n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`, zr = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, Me = n.div`
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
`, Br = n.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed: e }) => e ? "center" : "flex-start"};
  gap: ${({ $collapsed: e }) => e ? "0" : "12px"};
  padding: ${({ $collapsed: e }) => e ? "0" : "10px 17px"};
  margin: 4px 0;
  border-radius: 8px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
  
  /* В свернутом состоянии делаем иконку квадратной с отступами */
  ${({ $collapsed: e }) => e && `
    width: 48px;
    height: 48px;
    margin: 4px auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`, Fr = n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Ar = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $collapsed: e }) => e ? `
    width: 48px;
    height: 48px;
  ` : `
    min-width: 21px;
    width: 21px;
    height: auto;
  `}
  
  & > svg {
    ${({ $collapsed: e }) => e ? `
      width: 24px;
      height: 24px;
    ` : `
      width: 100%;
      height: auto;
    `}
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`, _r = n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Or = n.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Nr = n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Wr = n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, Yr = n.div`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "transparent"};

  &:hover {
    background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`, Hr = n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Vr = (e) => {
  const o = e.replace(/\D/g, ""), i = (o.startsWith("8") || o.length === 0 ? o : `8${o}`).slice(0, 11);
  let r = "";
  return i.length > 0 && (r += "8"), i.length > 1 && (r += ` (${i.slice(1, 4)}`), i.length > 4 && (r += `) ${i.slice(4, 7)}`), i.length > 7 && (r += `-${i.slice(7, 9)}`), i.length > 9 && (r += `-${i.slice(9, 11)}`), r;
}, Zr = ({ value: e, onChange: o, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (c) => {
    const p = Vr(c.target.value);
    o(p);
  };
  return /* @__PURE__ */ t.jsx(Ur, { type: "text", value: e, onChange: r, placeholder: s, maxLength: 18, tabIndex: i });
}, Ur = n.input`
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
`, Xr = (e, o) => ne("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: o
  }
}), qr = (e, o, s, i) => ne("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: o,
    user_type: s,
    name: i
  }
}), Gi = () => ne("/auth/session/info", { method: "GET" }), Gr = ({
  isOpen: e,
  onClose: o,
  onSubmit: s,
  error: i,
  isLoading: r = !1
}) => {
  const [c, p] = z("");
  if (!e) return null;
  const w = (v) => {
    v.preventDefault(), s(c);
  };
  return /* @__PURE__ */ t.jsx(Jr, { onClick: o, children: /* @__PURE__ */ t.jsx(Kr, { onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ t.jsxs(Qr, { onSubmit: w, children: [
    /* @__PURE__ */ t.jsx(ei, { children: "Как вас зовут?" }),
    /* @__PURE__ */ t.jsxs(ti, { children: [
      /* @__PURE__ */ t.jsx(
        De,
        {
          type: "text",
          value: c,
          onChange: (v) => p(v.target.value),
          placeholder: "Иванов Иван Иванович",
          disabled: r,
          autoFocus: !0,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ t.jsx(
        ni,
        {
          type: "submit",
          disabled: r || !c.trim(),
          children: r ? "..." : "→"
        }
      )
    ] }),
    i && /* @__PURE__ */ t.jsx(oi, { children: i })
  ] }) }) });
}, Jr = n.div`
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
`, Kr = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`, Qr = n.form`
  display: flex;
  flex-direction: column;
`, ei = n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`, ti = n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`, ni = n(se)`
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
`, oi = n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`, Ji = ({
  onLoginSuccess: e,
  userType: o = "delivery_operator",
  title: s = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: r = "8 (xxx) xxx-xx-xx",
  supportPhone: c = "8 989 924 24 24",
  supportLinkUrl: p = "https://waypay.one",
  supportLinkText: w = "waypay.one",
  className: v,
  style: b,
  pollingIntervalMs: g = 3e3,
  enableRegistration: m = !1
}) => {
  const [j, h] = z(!1), [u, l] = z(""), [D, y] = z(!1), [P, E] = z(""), [_, F] = z(""), [I, H] = z(!1), [R, B] = z(!1), [N, A] = z(""), [f, d] = z(""), [$, T] = z(null), O = U(void 0);
  Z(() => () => {
    O.current && clearInterval(O.current);
  }, []);
  const V = (x) => {
    const k = x.replace(/\D/g, "");
    return k ? k.startsWith("8") ? `+7${k.slice(1)}` : k.startsWith("7") ? `+${k}` : `+${k}` : "";
  }, X = () => {
    y(!1), B(!1), A(""), d(""), T(null), O.current && window.clearInterval(O.current);
  }, C = async (x) => {
    if (x.preventDefault(), !u) {
      F("Введите номер телефона");
      return;
    }
    h(!0), F("");
    const k = V(u);
    try {
      const L = await Xr(k, o);
      T({
        phone: k,
        checkId: L.check_id,
        callPhone: L.call_phone
      }), m && "name_required" in L && L.name_required ? (B(!0), E(L.call_phone)) : !m && "name_required" in L && L.name_required ? (F(
        "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
      ), T(null)) : (E(L.call_phone), y(!0), a(k, L.check_id));
    } catch (L) {
      console.error("Auth error:", L), F(
        "Не удалось инициировать авторизацию. Проверьте номер."
      );
    } finally {
      h(!1);
    }
  }, S = async (x) => {
    if (!x.trim()) {
      d("Введите ФИО");
      return;
    }
    if ($) {
      h(!0), d("");
      try {
        A(x), B(!1), y(!0), a($.phone, $.checkId, x);
      } catch (k) {
        console.error("Registration error:", k), d("Не удалось завершить регистрацию");
      } finally {
        h(!1);
      }
    }
  }, a = (x, k, L) => {
    O.current && window.clearInterval(O.current), O.current = window.setInterval(() => {
      M(x, k, L);
    }, g);
  }, M = async (x, k, L) => {
    if (!I) {
      H(!0);
      try {
        await qr(x, k, o, L || N), (await lt.getSessionInfo())?.client?.id && (O.current && window.clearInterval(O.current), y(!1), B(!1), A(""), T(null), e?.());
      } catch (Y) {
        console.error("Verification error:", Y);
      } finally {
        H(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(ri, { className: v, style: b, children: [
    /* @__PURE__ */ t.jsxs(ii, { children: [
      /* @__PURE__ */ t.jsxs(si, { onSubmit: C, children: [
        /* @__PURE__ */ t.jsx(ai, { children: s }),
        /* @__PURE__ */ t.jsx(li, { children: /* @__PURE__ */ t.jsx(ci, { children: /* @__PURE__ */ t.jsx(
          Zr,
          {
            value: u,
            onChange: (x) => l(x),
            placeholder: r
          }
        ) }) }),
        _ && /* @__PURE__ */ t.jsx(hi, { children: /* @__PURE__ */ t.jsx("span", { children: _ }) }),
        /* @__PURE__ */ t.jsx(di, { type: "submit", disabled: j, children: j ? "Загрузка..." : i })
      ] }),
      /* @__PURE__ */ t.jsxs(pi, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(ui, { href: `tel:${c}`, children: c }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(xi, { href: p, target: "_blank", rel: "noreferrer", children: w })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      Gr,
      {
        isOpen: R,
        onClose: X,
        onSubmit: S,
        error: f,
        isLoading: j
      }
    ),
    /* @__PURE__ */ t.jsx(
      hr,
      {
        isOpen: D,
        onClose: X,
        callPhone: P,
        error: _
      }
    )
  ] });
}, ri = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`, ii = n.div`
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
`, si = n.form`
  display: flex;
  flex-direction: column;
`, ai = n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, li = n.div`
  margin-bottom: 25px;
`, ci = n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`, di = n.button`
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
`, pi = n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, ui = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, xi = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, hi = n.div`
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
`, gi = (e) => {
  let o = 0;
  for (let i = 0; i < e.length; i++)
    o = e.charCodeAt(i) + ((o << 5) - o);
  return `hsl(${Math.abs(o % 360)}, 60%, 60%)`;
}, Ki = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Qi = (e, o = 100) => {
  const s = document.createElement("canvas");
  s.width = o, s.height = o;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = gi(e);
  i.fillStyle = r, i.beginPath(), i.arc(o / 2, o / 2, o / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const c = o / 2;
  i.font = `bold ${c}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const p = c * 0.1;
  return i.fillText(e, o / 2, o / 2 + p), s.toDataURL("image/png");
}, es = (e) => {
  if (!e) return "";
  const o = typeof e == "string" ? new Date(e) : e;
  if (isNaN(o.getTime())) return "";
  const s = o.getDate().toString().padStart(2, "0"), i = (o.getMonth() + 1).toString().padStart(2, "0"), r = o.getFullYear();
  return `${s}-${i}-${r}`;
};
function ts(e) {
  return new Date(e);
}
const fi = (e) => {
  let o;
  try {
    if (e instanceof Date)
      o = e;
    else if (typeof e == "string" || typeof e == "number")
      o = new Date(e);
    else
      throw new Error("Неподдерживаемый тип данных");
    if (isNaN(o.getTime()))
      return "неверная дата";
    const s = /* @__PURE__ */ new Date();
    if (o > s) {
      const g = Math.floor((o.getTime() - s.getTime()) / 1e3), m = Math.floor(g / 60), j = Math.floor(m / 60), h = Math.floor(j / 24);
      return g < 10 ? "скоро" : g < 60 ? `через ${g} секунд` : m === 1 ? "через минуту" : m < 60 ? `через ${m} минут` : j === 1 ? "через час" : j < 24 ? `через ${j} часов` : h === 1 ? "завтра" : h < 7 ? `через ${h} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - o.getTime()) / 1e3), r = Math.floor(i / 60), c = Math.floor(r / 60), p = Math.floor(c / 24), w = Math.floor(p / 7), v = Math.floor(p / 30), b = Math.floor(p / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const g = Math.max(1, i);
      return g === 1 ? "секунду назад" : g < 5 ? `${g} секунды назад` : `${g} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : c < 24 ? c === 1 ? "час назад" : c < 5 ? `${c} часа назад` : `${c} часов назад` : p < 7 ? p === 1 ? "вчера" : p === 2 ? "позавчера" : `${p} дня назад` : w < 4 ? w === 1 ? "неделю назад" : w < 5 ? `${w} недели назад` : `${w} недель назад` : v < 12 ? v === 1 ? "месяц назад" : v < 5 ? `${v} месяца назад` : `${v} месяцев назад` : b === 1 ? "год назад" : b < 5 ? `${b} года назад` : `${b} лет назад`;
  } catch (s) {
    return console.error("Ошибка форматирования относительного времени:", s), "ошибка даты";
  }
}, bi = (e) => {
  try {
    return e.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return "неверная дата";
  }
}, ns = (e, o = {}) => {
  const { useExactAfterMonths: s = 6, includeTime: i = !0 } = o, r = new Date(e);
  return isNaN(r.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= s ? i ? bi(r) : r.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : fi(r);
};
export {
  at as API_BASE_URL,
  ji as AddButton,
  hr as AuthCallModal,
  Ji as AuthPage,
  ki as BackButton,
  dn as BaseModal,
  Li as Checkbox,
  Zi as ColumnChart,
  Se as ContextMenu,
  Ai as CountInfoTitle,
  xe as CustomCalendar,
  De as CustomInput,
  Zr as CustomPhoneInput,
  Si as CustomSelect,
  yi as CustomTable,
  Pi as CustomTextArea,
  Pe as CustomTitle,
  se as DefaultButton,
  Ci as DeleteButton,
  $i as EditButton,
  Fi as EntitySelectContainer,
  Mi as ExportButton,
  Ei as InputContainer,
  Ti as InputLabel,
  Di as InputRow,
  _i as InputTitle,
  Oi as ModalInfoTitle,
  Ii as Pagination,
  Ri as PeriodField,
  zi as PhoneModalInput,
  Xi as PhotoViewerModal,
  Yi as ProgressBar,
  Wi as RadioButton,
  Ui as ScatterPlot,
  qi as SideMenu,
  yr as SideMenuContext,
  Bi as Tabs,
  Ie as TitleField,
  Ni as ToggleSwitch,
  Hi as YandexMapSelector,
  ne as apiRequest,
  lt as authStorage,
  qr as confirmCallAuth,
  es as formatDate,
  bi as formatExactDate,
  je as formatMoney,
  fi as formatRelativeTime,
  ns as formatRelativeTimeExtended,
  Qi as generateAvatar,
  Ki as getInitials,
  Gi as getSessionInfo,
  Xr as initiateCallAuth,
  ts as parseDateInput,
  Vi as parseMoney,
  gi as stringToColor
};
