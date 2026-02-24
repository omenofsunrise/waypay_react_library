import q, { useRef as Z, useState as F, useEffect as U, createContext as Ae, useContext as _e, useMemo as Oe } from "react";
import n, { keyframes as Ne } from "styled-components";
import { motion as J, AnimatePresence as se } from "framer-motion";
var te = { exports: {} }, K = {};
var ae;
function Ye() {
  if (ae) return K;
  ae = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, c) {
    var p = null;
    if (c !== void 0 && (p = "" + c), r.key !== void 0 && (p = "" + r.key), "key" in r) {
      c = {};
      for (var v in r)
        v !== "key" && (c[v] = r[v]);
    } else c = r;
    return r = c.ref, {
      $$typeof: e,
      type: i,
      key: p,
      ref: r !== void 0 ? r : null,
      props: c
    };
  }
  return K.Fragment = o, K.jsx = s, K.jsxs = s, K;
}
var Q = {};
var le;
function We() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === _ ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case P:
          return "Fragment";
        case I:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case Y:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case l:
            return "Portal";
          case A:
            return a.displayName || "Context";
          case L:
            return (a._context.displayName || "Context") + ".Consumer";
          case B:
            var C = a.render;
            return a = a.displayName, a || (a = C.displayName || C.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case T:
            return C = a.displayName || null, C !== null ? C : e(a.type) || "Memo";
          case z:
            C = a._payload, a = a._init;
            try {
              return e(a(C));
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
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var $ = C.error, S = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return $.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), o(a);
      }
    }
    function i(a) {
      if (a === P) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === z)
        return "<...>";
      try {
        var C = e(a);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = m.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (d.call(a, "key")) {
        var C = Object.getOwnPropertyDescriptor(a, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function v(a, C) {
      function $() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: $,
        configurable: !0
      });
    }
    function k() {
      var a = e(this.type);
      return E[a] || (E[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function f(a, C, $, S, O, X) {
      var H = $.ref;
      return a = {
        $$typeof: u,
        type: a,
        key: C,
        props: $,
        _owner: S
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: k
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
        value: O
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function g(a, C, $, S, O, X) {
      var H = C.children;
      if (H !== void 0)
        if (S)
          if (M(H)) {
            for (S = 0; S < H.length; S++)
              x(H[S]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(H);
      if (d.call(C, "key")) {
        H = e(a);
        var G = Object.keys(C).filter(function(Fe) {
          return Fe !== "key";
        });
        S = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", j[H + S] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          H,
          G,
          H
        ), j[H + S] = !0);
      }
      if (H = null, $ !== void 0 && (s($), H = "" + $), p(C) && (s(C.key), H = "" + C.key), "key" in C) {
        $ = {};
        for (var oe in C)
          oe !== "key" && ($[oe] = C[oe]);
      } else $ = C;
      return H && v(
        $,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), f(
        a,
        H,
        $,
        r(),
        O,
        X
      );
    }
    function x(a) {
      b(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === z && (a._payload.status === "fulfilled" ? b(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function b(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    var h = q, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), m = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, d = Object.prototype.hasOwnProperty, M = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var N, E = {}, V = h.react_stack_bottom_frame.bind(
      h,
      c
    )(), w = D(i(c)), j = {};
    Q.Fragment = P, Q.jsx = function(a, C, $) {
      var S = 1e4 > m.recentlyCreatedOwnerStacks++;
      return g(
        a,
        C,
        $,
        !1,
        S ? Error("react-stack-top-frame") : V,
        S ? D(i(a)) : w
      );
    }, Q.jsxs = function(a, C, $) {
      var S = 1e4 > m.recentlyCreatedOwnerStacks++;
      return g(
        a,
        C,
        $,
        !0,
        S ? Error("react-stack-top-frame") : V,
        S ? D(i(a)) : w
      );
    };
  })()), Q;
}
var ce;
function He() {
  return ce || (ce = 1, process.env.NODE_ENV === "production" ? te.exports = Ye() : te.exports = We()), te.exports;
}
var t = He();
const Le = ({ x: e, y: o, items: s, onClose: i, ...r }) => {
  const c = Z(null), [p, v] = F(null);
  U(() => {
    const h = (u) => {
      c.current && !c.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const f = (() => {
    if (!c.current) return { x: e, y: o };
    const h = c.current.offsetWidth, u = c.current.offsetHeight, l = window.innerWidth, P = window.innerHeight;
    let y = e, I = o;
    return y + h > l && (y = e - h), I + u > P && (I = o - u), { x: y, y: I };
  })(), g = (h, u) => {
    h.submenu ? v(p === u ? null : u) : h.action && (h.action(), i());
  }, x = (h) => {
    s[h].submenu && v(h);
  }, b = (h) => {
    const u = h.relatedTarget;
    c.current?.contains(u) || v(null);
  };
  return /* @__PURE__ */ t.jsx(
    Ve,
    {
      ref: c,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: f.y,
        left: f.x
      },
      onClick: (h) => h.stopPropagation(),
      onMouseLeave: b,
      ...r,
      children: s.map((h, u) => /* @__PURE__ */ t.jsxs(Ze, { $hasSubmenu: !!h.submenu, $disabled: h.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ue,
          {
            onClick: (l) => {
              l.stopPropagation(), h.disabled || g(h, u);
            },
            onMouseEnter: () => !h.disabled && x(u),
            whileHover: h.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: h.color,
            $disabled: h.disabled,
            children: /* @__PURE__ */ t.jsxs(Xe, { children: [
              h.label,
              h.submenu && /* @__PURE__ */ t.jsx(qe, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        h.submenu && p === u && /* @__PURE__ */ t.jsx(
          Ge,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Le, { x: 0, y: -u * 40, items: h.submenu, onClose: () => v(null) })
          }
        )
      ] }, u))
    }
  );
}, Ve = n(J.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, Ze = n.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, Ue = n(J.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: o }) => o ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Xe = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, qe = n.span`
  color: #666;
  margin-left: 8px;
`, Ge = n(J.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, ci = ({
  columns: e,
  data: o,
  onRowDoubleClick: s,
  contextMenuActions: i = [],
  onSort: r,
  sortConfig: c,
  onRowClick: p,
  selectedRow: v,
  fixedHeight: k,
  hasTotalsRow: f,
  debtChecker: g,
  rowStyles: x = {},
  isLoading: b
}) => {
  const [h, u] = F(null), [l, P] = F(null), y = Z(null), I = Z(null), L = 500, A = v !== void 0 ? v : h, B = (w) => {
    !e[w].isSortable || !r || r(w);
  }, Y = g || ((w) => {
    const j = w[8];
    return typeof j == "string" ? parseFloat(j.replace(/[^\d.]/g, "")) > 0 : !1;
  }), T = (w) => {
    v === void 0 && u(w === A ? null : w), p && p(o[w], w);
  }, z = (w, j) => {
    s && s(w, j);
  }, W = (w, j) => {
    if (i.length === 0) return;
    w.preventDefault();
    const a = "touches" in w ? w.touches[0].clientX : w.clientX, C = "touches" in w ? w.touches[0].clientY : w.clientY;
    P({
      x: a,
      y: C,
      rowIndex: j
    });
  }, _ = (w, j) => {
    w.preventDefault(), W(w, j);
  }, m = (w, j) => {
    i.length !== 0 && (I.current && clearTimeout(I.current), I.current = window.setTimeout(() => {
      W(w, j);
    }, L));
  }, d = () => {
    I.current && (clearTimeout(I.current), I.current = null);
  }, M = () => {
    I.current && window.clearTimeout(I.current);
  }, D = () => {
    P(null);
  };
  U(() => {
    const w = () => {
      l && D();
    };
    return document.addEventListener("click", w), () => {
      document.removeEventListener("click", w), I.current && clearTimeout(I.current);
    };
  }, [l]);
  const N = (w, j, a) => {
    if (j)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const C = x[w] || {};
    return w === A ? {
      backgroundColor: C.backgroundColor || "#007D88",
      color: C.color || "#FFFFFF",
      fontWeight: C.fontWeight || "normal"
    } : a ? {
      backgroundColor: C.backgroundColor || "#E8D8D8",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    } : o[w][o[w].length - 1] === !1 ? {
      backgroundColor: C.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: C.fontWeight || "normal"
    } : {
      backgroundColor: C.backgroundColor || "#FFFFFF",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    };
  }, E = (w, j, a) => {
    if (j) return "#FFFFFF";
    const C = N(w, j, a);
    return C.hoverBackgroundColor ? C.hoverBackgroundColor : w === A ? "#007D88" : a ? "#E8D8D8CC" : o[w][o[w].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, V = () => {
    if (!l || i.length === 0) return null;
    const w = (typeof i == "function" ? i(o[l.rowIndex]) : i).filter(
      (j) => typeof j == "object" && (typeof j.shouldShow != "function" || j.shouldShow(o[l.rowIndex]))
    );
    return w.length === 0 ? null : /* @__PURE__ */ t.jsx(
      tt,
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
        onClick: (j) => j.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Le,
          {
            items: w.map((j) => {
              const a = {
                label: j.label,
                color: j.color,
                disabled: j.disabled
              };
              return j.getSubmenu ? a.submenu = j.getSubmenu(o[l.rowIndex]) : j.action && (a.action = () => {
                j.action(o[l.rowIndex], l.rowIndex), D();
              }), a;
            }),
            onClose: D,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(Qe, { ref: y, children: b ? /* @__PURE__ */ t.jsx(Je, { children: /* @__PURE__ */ t.jsx(Ke, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(et, { children: [
      /* @__PURE__ */ t.jsx(nt, { children: /* @__PURE__ */ t.jsx(de, { children: e.map(
        (w, j) => !w.isHidden && /* @__PURE__ */ t.jsx(
          rt,
          {
            $isSortable: w.isSortable,
            $isActive: c?.key === j,
            onClick: () => B(j),
            $align: w.align || "center",
            $isFirst: j === 0,
            $isLast: j === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(it, { $align: w.align || "center", children: [
              w.name,
              w.isSortable && /* @__PURE__ */ t.jsx(
                st,
                {
                  $direction: c?.key === j ? c.direction : "asc",
                  animate: {
                    rotate: c?.key === j && c.direction === "desc" ? 180 : 0,
                    color: c?.key === j ? "#007D88" : "#6B7280"
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
          j
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(ot, { $fixedHeight: k, children: /* @__PURE__ */ t.jsx(se, { children: o.map((w, j) => {
        const a = !!(f && j === o.length - 1), C = !!(!a && Y(w)), $ = N(j, a, C), S = E(j, a, C);
        return /* @__PURE__ */ t.jsx(
          de,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: $.backgroundColor || "#FFFFFF",
              color: $.color || "inherit",
              fontWeight: $.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: j === o.length - 1,
            $isSelected: j === A,
            $isTotalsRow: a,
            onClick: () => !a && T(j),
            onDoubleClick: () => !a && z(w, j),
            onContextMenu: (O) => !a && _(O, j),
            onTouchStart: (O) => !a && m(O, j),
            onTouchEnd: d,
            onTouchMove: M,
            whileHover: a ? {} : {
              backgroundColor: S,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: $.backgroundColor || "#FFFFFF",
              color: $.color || "inherit",
              fontWeight: $.fontWeight || "normal"
            },
            children: w.map(
              (O, X) => !e[X]?.isHidden && /* @__PURE__ */ t.jsx(
                at,
                {
                  $align: e[X]?.align || "center",
                  $isFirst: X === 0,
                  $isLast: X === w.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && X < w.findIndex((H) => H === "Итого:"),
                  children: O
                },
                X
              )
            )
          },
          `row-${j}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(se, { children: V() })
  ] }) });
}, Je = n.div`
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
`, Ke = n.div`
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
`, Qe = n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, et = n.table`
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
`, tt = n(J.div)`
  z-index: 1000;
  pointer-events: auto;
`, nt = n.thead`
  text-align: center;
  position: relative;
`, ot = n.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, de = n(J.tr)`
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
`, rt = n.th`
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
`, it = n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, st = n(J.span)`
  display: inline-flex;
  align-items: center;
`, at = n.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: o }) => e || o ? "none" : "0.5px solid #d1d5db"};
`, di = ({ onClick: e, tooltip: o, size: s = 32, margin: i }) => /* @__PURE__ */ t.jsx(lt, { onClick: e, size: s, margin: i, title: o, children: /* @__PURE__ */ t.jsx(ct, { size: s }) }), lt = n.button`
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
`, ct = n.div`
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
`, Te = "http://95.163.226.24:8080/api";
async function ne(e, o = {}) {
  const { method: s = "GET", body: i, headers: r = {}, token: c } = o, p = async (k) => {
    const f = {
      "Content-Type": "application/json",
      ...r
    };
    k && (f.Authorization = `Bearer ${k}`);
    const g = e.startsWith("http") ? e : `${Te}${e}`;
    return await fetch(g, {
      method: s,
      headers: f,
      body: i ? JSON.stringify(i) : void 0
    });
  }, v = async (k, f = !0) => {
    const g = await p(k);
    if (g.ok) {
      if (g.status === 204)
        return null;
      const b = await g.text();
      if (!b) return null;
      try {
        return JSON.parse(b);
      } catch {
        return b;
      }
    }
    if (g.status === 401 && f) {
      const b = await dt();
      if (b)
        return v(b, !1);
    }
    let x = `Request failed with status ${g.status}`;
    try {
      const b = await g.json();
      b && typeof b.error == "string" ? x = b.error : typeof b == "string" && (x = b);
    } catch {
      const b = await g.text();
      b && (x = b);
    }
    throw new Error(x);
  };
  return v(c);
}
async function dt() {
  const e = await fetch(`${Te}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });
  if (!e.ok)
    return null;
  const o = await e.json();
  return o.access_token ? o.access_token : null;
}
const pt = {
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
}, pi = () => pt.getSessionInfo(), ut = n.button`
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
`, ui = ({ children: e, onClick: o }) => /* @__PURE__ */ t.jsxs(ut, { onClick: o, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "#50555C"
    }
  ) }),
  e
] }), Ee = ({
  children: e = "Подтвердить",
  icon: o,
  disabled: s = !1,
  bg: i,
  hoverBg: r,
  disabledBg: c,
  textColor: p,
  fullWidth: v = !1,
  minWidth: k,
  width: f,
  isPrimary: g = !0,
  ...x
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
    ht,
    {
      disabled: s,
      $bg: h.bg,
      $hoverBg: h.hoverBg,
      $disabledBg: h.disabledBg,
      $textColor: h.textColor,
      $fullWidth: v,
      $minWidth: k,
      $width: f,
      ...x,
      children: [
        o && /* @__PURE__ */ t.jsx(xt, { children: o }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, ht = n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled: e, $bg: o, $disabledBg: s }) => e ? s : o};
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $textColor: e }) => e};
  font-size: 15px;
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
`, xt = n.span`
  display: inline-flex;
  align-items: center;
`, hi = ({ onClick: e, tooltip: o, size: s = 32 }) => /* @__PURE__ */ t.jsx(ft, { onClick: e, size: s, title: o, children: /* @__PURE__ */ t.jsx(
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
) }), ft = n.button`
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
`, xi = ({ onClick: e, tooltip: o, size: s = 32 }) => /* @__PURE__ */ t.jsx(gt, { onClick: e, size: s, title: o, children: /* @__PURE__ */ t.jsx(
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
) }), gt = n.button`
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
`, bt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), fi = ({
  children: e = "Экспорт",
  icon: o = /* @__PURE__ */ t.jsx(bt, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...c
}) => {
  const p = async (v) => {
    if (s)
      try {
        await s();
      } catch (k) {
        console.error("Export error:", k);
      }
    c.onClick && c.onClick(v);
  };
  return /* @__PURE__ */ t.jsx(mt, { ...c, onClick: p, disabled: i || c.disabled, children: i ? /* @__PURE__ */ t.jsxs(wt, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(vt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    o,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, mt = n.button`
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
`, wt = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, vt = n.div`
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
`, gi = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  options: p,
  name: v,
  disabled: k = !1,
  required: f = !1,
  ...g
}) => {
  const [x, b] = q.useState(!1), [h, u] = q.useState(!1), l = q.useRef(null), P = !!(o && !s && !x), y = (R) => {
    i && !k && i({
      target: { value: R, name: v }
    }), u(!1), b(!1);
  }, I = (R) => {
    l.current && !l.current.contains(R.target) && (u(!1), b(!1));
  }, L = () => {
    k || (u(!h), b(!h));
  };
  q.useEffect(() => (document.addEventListener("mousedown", I), () => {
    document.removeEventListener("mousedown", I);
  }), []);
  const A = p.find((R) => R.value === s), B = A ? A.label : "";
  return /* @__PURE__ */ t.jsxs(yt, { ref: l, ...g, children: [
    /* @__PURE__ */ t.jsxs(kt, { children: [
      /* @__PURE__ */ t.jsxs(
        jt,
        {
          hasError: r,
          isOpen: h,
          disabled: k,
          onClick: L,
          onFocus: () => !k && b(!0),
          onBlur: () => b(!1),
          tabIndex: k ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(Ct, { children: B || e && /* @__PURE__ */ t.jsx($t, { children: e }) }),
            /* @__PURE__ */ t.jsx(Mt, { isOpen: h, disabled: k, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: k ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx(St, { children: p.map((R) => /* @__PURE__ */ t.jsxs(Dt, { $isSelected: R.value === s, onClick: () => y(R.value), children: [
        /* @__PURE__ */ t.jsx(Lt, { $isSelected: R.value === s, children: R.value === s && /* @__PURE__ */ t.jsx(Tt, {}) }),
        /* @__PURE__ */ t.jsx(Et, { children: R.label })
      ] }, R.value)) })
    ] }),
    o && /* @__PURE__ */ t.jsx(Pt, { isVisible: P, children: o }),
    r && c && /* @__PURE__ */ t.jsx(It, { children: c }),
    /* @__PURE__ */ t.jsx(Rt, { name: v, value: s || "", onChange: () => {
    }, tabIndex: -1, required: f, children: p.map((R) => /* @__PURE__ */ t.jsx("option", { value: R.value, children: R.label }, R.value)) })
  ] });
}, yt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, kt = n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, jt = n.div`
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
`, Ct = n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, $t = n.span`
  color: rgba(80, 85, 92, 1);
`, Mt = n.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, St = n.div`
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
`, Dt = n.div`
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
`, Lt = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Tt = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Et = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Pt = n.label`
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
`, It = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Rt = n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, bi = ({ checked: e = !1, onChange: o, className: s, label: i, disabled: r = !1 }) => {
  const [c, p] = F(!1), v = () => {
    r || !o || o(!e);
  }, k = (f) => {
    r || (f.key === "Enter" || f.key === " ") && (f.preventDefault(), v());
  };
  return /* @__PURE__ */ t.jsxs(Bt, { className: s, onClick: v, onKeyPress: k, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      zt,
      {
        checked: e,
        isFocused: c,
        disabled: r,
        onMouseEnter: () => !r && p(!0),
        onMouseLeave: () => !r && p(!1),
        onFocus: () => !r && p(!0),
        onBlur: () => !r && p(!1),
        children: e && /* @__PURE__ */ t.jsx(At, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(Ft, { disabled: r, children: i })
  ] });
}, Bt = n.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, zt = n.div`
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
`, Ft = n.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, At = n.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, _t = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", pe = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Ot = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], ue = ({ prefix: e = "Дата:", value: o = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [c, p] = F(!1), [v, k] = F(/* @__PURE__ */ new Date()), [f, g] = F(o ? new Date(o) : null), [x, b] = F(!1), [h, u] = F(!1), l = Z(null), P = Z(null), y = Z(null);
  U(() => {
    const d = (M) => {
      l.current && !l.current.contains(M.target) && p(!1), P.current && !P.current.contains(M.target) && b(!1), y.current && !y.current.contains(M.target) && u(!1);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []), U(() => {
    g(o ? new Date(o) : null);
  }, [o]);
  const I = (d) => {
    const M = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    g(d);
    const D = M.toISOString().split("T")[0];
    i?.(D), p(!1);
  }, L = () => {
    const d = /* @__PURE__ */ new Date();
    k(d);
    const D = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString().split("T")[0];
    i?.(D), p(!1);
  }, A = () => {
    g(null), i?.(""), r?.(), p(!1);
  }, B = (d) => {
    const M = new Date(v);
    M.setMonth(d), k(M), b(!1);
  }, R = (d) => {
    const M = new Date(v);
    M.setFullYear(d), k(M), u(!1);
  }, Y = () => {
    const d = v.getFullYear(), M = v.getMonth(), D = new Date(d, M, 1), E = new Date(d, M + 1, 0).getDate(), V = D.getDay() === 0 ? 6 : D.getDay() - 1, w = [], j = 35, a = new Date(d, M, 0).getDate();
    for (let $ = 0; $ < V; $++) {
      const S = a - V + $ + 1, O = new Date(d, M - 1, S), X = !!(f && O.getDate() === f.getDate() && O.getMonth() === f.getMonth() && O.getFullYear() === f.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: X, onClick: () => I(O), otherMonth: !0, children: S }, `prev-${S}`)
      );
    }
    for (let $ = 1; $ <= E; $++) {
      const S = new Date(d, M, $), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: O, onClick: () => I(S), children: $ }, `current-${$}`)
      );
    }
    const C = j - w.length;
    for (let $ = 1; $ <= C; $++) {
      const S = new Date(d, M + 1, $), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: O, onClick: () => I(S), otherMonth: !0, children: $ }, `next-${$}`)
      );
    }
    return w;
  }, T = () => f ? f.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, z = () => {
    const d = (/* @__PURE__ */ new Date()).getFullYear(), M = [];
    for (let D = d - 10; D <= d + 10; D++)
      M.push(D);
    return M;
  }, W = (d) => {
    d.preventDefault(), d.stopPropagation(), b(!x), u(!1);
  }, _ = (d) => {
    d.preventDefault(), d.stopPropagation(), u(!h), b(!1);
  }, m = (d) => {
    const M = d === "next" ? 1 : -1, D = new Date(v);
    D.setMonth(D.getMonth() + M), k(D);
  };
  return /* @__PURE__ */ t.jsxs(Nt, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(Yt, { onClick: () => p(!c), children: [
      e && /* @__PURE__ */ t.jsx(Wt, { children: e }),
      /* @__PURE__ */ t.jsx(Ht, { isEmpty: !f, children: T() }),
      /* @__PURE__ */ t.jsx(Vt, { src: _t, alt: "Календарь" })
    ] }),
    c && /* @__PURE__ */ t.jsxs(Zt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Ut, { children: [
        /* @__PURE__ */ t.jsx(
          ge,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), m("prev");
            },
            onMouseDown: (d) => d.preventDefault(),
            children: /* @__PURE__ */ t.jsx(be, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Xt, { children: [
          /* @__PURE__ */ t.jsxs(Jt, { ref: P, children: [
            /* @__PURE__ */ t.jsxs(qt, { onClick: (d) => W(d), onMouseDown: (d) => d.preventDefault(), children: [
              pe[v.getMonth()],
              /* @__PURE__ */ t.jsx(he, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(xe, { $width: 120, onClick: (d) => d.stopPropagation(), children: pe.map((d, M) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: M === v.getMonth(),
                onClick: (D) => {
                  D.stopPropagation(), B(M);
                },
                children: d
              },
              d
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(Kt, { ref: y, children: [
            /* @__PURE__ */ t.jsxs(Gt, { onClick: (d) => _(d), onMouseDown: (d) => d.preventDefault(), children: [
              v.getFullYear(),
              /* @__PURE__ */ t.jsx(he, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(xe, { $width: 80, onClick: (d) => d.stopPropagation(), children: z().map((d) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: d === v.getFullYear(),
                onClick: (M) => {
                  M.stopPropagation(), R(d);
                },
                children: d
              },
              d
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          ge,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), m("next");
            },
            onMouseDown: (d) => d.preventDefault(),
            children: /* @__PURE__ */ t.jsx(be, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Qt, { children: Ot.map((d) => /* @__PURE__ */ t.jsx(en, { children: d }, d)) }),
      /* @__PURE__ */ t.jsx(tn, { children: Y() }),
      /* @__PURE__ */ t.jsxs(nn, { children: [
        /* @__PURE__ */ t.jsx(me, { onClick: A, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(me, { onClick: L, children: "Сегодня" })
      ] })
    ] })
  ] });
}, Nt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`, Yt = n.div`
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
`, Wt = n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`, Ht = n.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Vt = n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Zt = n.div`
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
`, Ut = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Xt = n.div`
  display: flex;
  gap: 8px;
  color: black;
`, Pe = n.button`
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
`, qt = n(Pe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Gt = n(Pe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Jt = n.div`
  position: relative;
`, Kt = n.div`
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
`, xe = n.div`
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
`, ge = n.button`
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
`, be = n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, Qt = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, en = n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, tn = n.div`
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
`, nn = n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, me = n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, on = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: c = !1,
  errorMessage: p,
  ...v
}) => {
  const [k, f] = q.useState(!1), g = !!(o && !s && !k), x = (u) => {
    if (!r) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(u);
        break;
      case "rubles": {
        const y = u.target.selectionStart, I = u.target.value;
        let L = I.replace(/[^\d]/g, "");
        if (L === "") {
          u.target.value = "", r(u);
          break;
        }
        const A = parseInt(L, 10);
        if (!isNaN(A)) {
          let B = A.toLocaleString("ru-RU");
          B += " ₽";
          const R = b(I, y || 0), Y = h(B, R);
          u.target.value = B, r(u), setTimeout(() => {
            u.target.setSelectionRange(Y, Y);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const y = l.split(".");
        y.length > 2 && (l = y[0] + "." + y.slice(1).join("")), y.length === 2 && y[1].length > 2 && (l = y[0] + "." + y[1].slice(0, 2));
        const I = parseFloat(l);
        if (isNaN(I) || (I > 100 ? l = "100" : I < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const L = u.target.selectionStart || 0, A = l.replace(" %", "");
          u.target.value = l, r(u), setTimeout(() => {
            L < A.length && u.target.setSelectionRange(L, L);
          }, 0);
        } else
          u.target.value = l, r(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let P = l.split(" ").filter((y) => y.length > 0);
        P = P.slice(0, 3), l = P.map((y) => {
          if (y.startsWith("-") && (y = y.substring(1)), (y.match(/-/g) || []).length > 1) {
            const L = y.split("-");
            y = L[0] + "-" + L.slice(1).join("");
          }
          return y.includes("-") ? y.split("-").map((L, A) => L.length === 0 ? "" : (A > 0, L[0].toUpperCase() + L.slice(1).toLowerCase())).join("-") : y.length > 0 ? y[0].toUpperCase() + y.slice(1).toLowerCase() : "";
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
  }, b = (u, l) => {
    let P = 0;
    for (let y = 0; y < Math.min(l, u.length); y++)
      /\d/.test(u[y]) && P++;
    return P;
  }, h = (u, l) => {
    let P = 0;
    for (let y = 0; y < u.length; y++) {
      if (P >= l)
        return y;
      /\d/.test(u[y]) && P++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(rn, { children: [
    /* @__PURE__ */ t.jsx(
      sn,
      {
        ...v,
        value: s,
        placeholder: g ? "" : e,
        onFocus: () => f(!0),
        onBlur: (u) => {
          f(!1), v.onBlur?.(u);
        },
        onChange: x,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: c
      }
    ),
    o && /* @__PURE__ */ t.jsx(an, { isVisible: g, children: o }),
    c && p && /* @__PURE__ */ t.jsx(ln, { children: p })
  ] });
}, rn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, sn = n.input`
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
  max-width: 500px;
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
`, an = n.label`
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
`, ln = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, mi = ({ total: e, current: o = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [c, p] = F(o), v = (f) => {
    f < 1 || f > r || f === c || (p(f), s?.(f));
  }, k = () => {
    const f = [];
    let x = 1, b = r;
    if (r > 5) {
      const h = Math.floor(2.5);
      x = Math.max(c - h, 1), b = Math.min(c + h, r), c <= h + 1 ? b = 5 : c >= r - h && (x = r - 5 + 1);
    }
    for (let h = x; h <= b; h++)
      f.push(
        /* @__PURE__ */ t.jsx(ee, { active: h === c, onClick: () => v(h), children: h }, h)
      );
    return x > 1 && (x > 2 && f.unshift(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "start-ellipsis")), f.unshift(
      /* @__PURE__ */ t.jsx(ee, { active: c === 1, onClick: () => v(1), children: "1" }, 1)
    )), b < r && (b < r - 1 && f.push(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "end-ellipsis")), f.push(
      /* @__PURE__ */ t.jsx(ee, { active: r === c, onClick: () => v(r), children: r }, r)
    )), f;
  };
  return /* @__PURE__ */ t.jsxs(cn, { children: [
    /* @__PURE__ */ t.jsx(we, { disabled: c === 1, onClick: () => v(c - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    k(),
    /* @__PURE__ */ t.jsx(we, { disabled: c === r, onClick: () => v(c + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, cn = n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, ee = n.div`
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
`, we = n.button`
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
`, wi = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  rows: p = 3,
  ...v
}) => {
  const [k, f] = q.useState(!1), g = !!(o && !s && !k);
  return /* @__PURE__ */ t.jsxs(dn, { children: [
    /* @__PURE__ */ t.jsx(
      pn,
      {
        ...v,
        value: s,
        placeholder: g ? "" : e,
        onFocus: () => f(!0),
        onBlur: (x) => {
          f(!1), v.onBlur?.(x);
        },
        onChange: i,
        hasError: r,
        rows: p
      }
    ),
    o && /* @__PURE__ */ t.jsx(un, { isVisible: g, children: o }),
    r && c && /* @__PURE__ */ t.jsx(hn, { children: c })
  ] });
}, dn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, pn = n.textarea`
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
`, un = n.label`
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
`, hn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, xn = ({
  title: e,
  onClose: o,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: c = !1,
  isSubmitting: p = !1,
  mode: v = "create",
  hideSaveButton: k = !1,
  hideCanselButton: f = !1,
  width: g = "560px",
  saveButtonText: x = "Сохранить",
  customLayout: b
}) => {
  const h = v === "view", u = Z(null);
  U(() => {
    const y = (L) => {
      L.key === "Escape" && o();
    };
    document.addEventListener("keydown", y);
    const I = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => u.current?.focus(), 0), () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = I;
    };
  }, [o]);
  const l = (y) => {
    y.target === y.currentTarget && o();
  }, P = (y) => {
    y.preventDefault(), s();
  };
  return /* @__PURE__ */ t.jsx(fn, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    gn,
    {
      ref: u,
      $width: g,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Ie, { children: [
          /* @__PURE__ */ t.jsx(Re, { children: e }),
          /* @__PURE__ */ t.jsx(bn, { type: "button", onClick: o, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        b ? /* @__PURE__ */ t.jsx(mn, { children: b }) : null,
        /* @__PURE__ */ t.jsxs(wn, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(vn, { children: r }),
          /* @__PURE__ */ t.jsxs(yn, { children: [
            /* @__PURE__ */ t.jsx(kn, { children: f ? null : /* @__PURE__ */ t.jsx(Cn, { isPrimary: !1, onClick: P, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(jn, { children: !h && !k ? /* @__PURE__ */ t.jsx(
              $n,
              {
                type: "submit",
                disabled: c || p,
                children: p ? "Сохранение..." : x
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, fn = n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, gn = n.div`
  width: min(100%, ${({ $width: e }) => e});
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
`, Ie = n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`, Re = n.h2`
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
`, bn = n.button`
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
`, mn = n.div`
  padding: 12px 18px 0 18px;
`, wn = n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, vn = n.div`
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
`, yn = n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, kn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, jn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, Cn = n(Ee)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, $n = n(Ee)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, Mn = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], vi = ({
  value: e = "",
  placeholder: o = "Выберите период",
  options: s = Mn,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: c
}) => {
  const [p, v] = F(!1), [k, f] = F(!1), [g, x] = F(""), [b, h] = F(""), [u, l] = F(""), P = Z(null), y = Z(null);
  U(() => {
    if (e === "Custom" && b && u) {
      const T = R(b), z = R(u);
      x(`С ${T} по ${z}`);
    } else {
      const T = s.find((z) => z.value === e);
      x(T ? T.label : "");
    }
  }, [e, s, b, u]), U(() => {
    const T = (z) => {
      P.current && !P.current.contains(z.target) && v(!1), k && y.current && !y.current.contains(z.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((m) => m.contains(z.target)) || f(!1));
    };
    return document.addEventListener("mousedown", T), () => {
      document.removeEventListener("mousedown", T);
    };
  }, [k]);
  const I = (T) => {
    r?.(T.value), v(!1);
  }, L = () => {
    v(!1), c ? c() : f(!0);
  }, A = () => {
    r?.(""), x(""), h(""), l("");
  }, B = () => {
    if (b && u) {
      const T = R(b), z = R(u), W = `С ${T} по ${z}`;
      r?.("Custom", b, u), x(W), f(!1);
    }
  }, R = (T) => {
    const z = new Date(T), W = String(z.getDate()).padStart(2, "0"), _ = String(z.getMonth() + 1).padStart(2, "0"), m = z.getFullYear();
    return `${W}.${_}.${m}`;
  }, Y = () => /* @__PURE__ */ t.jsxs(An, { children: [
    /* @__PURE__ */ t.jsx(Ie, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Re, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(_n, { onClick: A, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Sn, { ref: P, children: [
      /* @__PURE__ */ t.jsxs(Dn, { onClick: () => v(!p), children: [
        /* @__PURE__ */ t.jsx(Ln, { children: g || o }),
        /* @__PURE__ */ t.jsx(Tn, { $isOpen: p, children: "▼" })
      ] }),
      p && /* @__PURE__ */ t.jsxs(En, { children: [
        s.map((T) => /* @__PURE__ */ t.jsxs(Pn, { onClick: () => I(T), $isSelected: e === T.value, children: [
          /* @__PURE__ */ t.jsx(In, { $isSelected: e === T.value, children: e === T.value && /* @__PURE__ */ t.jsx(Rn, {}) }),
          /* @__PURE__ */ t.jsx(Bn, { children: T.label })
        ] }, T.id)),
        i && /* @__PURE__ */ t.jsx(zn, { onClick: L, children: "Другой период" })
      ] })
    ] }),
    k && /* @__PURE__ */ t.jsx("div", { ref: y, children: /* @__PURE__ */ t.jsx(
      xn,
      {
        title: "",
        onClose: () => f(!1),
        onCancel: () => f(!1),
        onSave: (T) => {
          T.preventDefault(), B();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(Y, {}),
        children: /* @__PURE__ */ t.jsxs(Fn, { children: [
          /* @__PURE__ */ t.jsx(ve, { children: /* @__PURE__ */ t.jsx(ue, { value: b, onChange: (T) => h(T) }) }),
          /* @__PURE__ */ t.jsx(ve, { children: /* @__PURE__ */ t.jsx(ue, { value: u, onChange: (T) => l(T) }) })
        ] })
      }
    ) })
  ] });
}, Sn = n.div`
  position: relative;
  width: 245px;
`, Dn = n.div`
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
`, Ln = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Tn = n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, En = n.div`
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
`, Pn = n.div`
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
`, In = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Rn = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Bn = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, zn = n.div`
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
`, Fn = n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ve = n.div`
  flex: 1;
`, An = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, _n = n.button`
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
`, yi = ({
  name: e,
  value: o,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: c = "8 (999) 500-50-50",
  customPlaceholder: p,
  tabIndex: v,
  disabled: k = !1,
  hasError: f = !1,
  errorMessage: g
}) => {
  const [x, b] = q.useState(!1), h = q.useRef(null), u = !!(p && !o && !x), l = (L) => {
    const B = L.replace(/\D/g, "").slice(0, 11);
    let R = "";
    return B.length > 0 && (R += "8"), B.length > 1 && (R += ` (${B.slice(1, 4)}`), B.length > 4 && (R += `) ${B.slice(4, 7)}`), B.length > 7 && (R += `-${B.slice(7, 9)}`), B.length > 9 && (R += `-${B.slice(9, 11)}`), R;
  }, P = (L) => {
    const A = l(L.target.value), B = {
      ...L,
      target: {
        ...L.target,
        name: e,
        value: A
      }
    };
    s(B);
  }, y = (L) => {
    b(!1), i?.(L);
  }, I = (L) => {
    r?.(L);
  };
  return /* @__PURE__ */ t.jsxs(On, { children: [
    /* @__PURE__ */ t.jsx(
      Nn,
      {
        ref: h,
        name: e,
        type: "tel",
        value: o,
        onChange: P,
        onKeyPress: I,
        placeholder: u ? "" : c,
        maxLength: 18,
        tabIndex: v,
        disabled: k,
        hasError: f,
        onFocus: () => b(!0),
        onBlur: y,
        inputMode: "tel"
      }
    ),
    p && /* @__PURE__ */ t.jsx(Yn, { isVisible: u, children: p }),
    f && g && /* @__PURE__ */ t.jsx(Wn, { children: g })
  ] });
}, On = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Nn = n.input`
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
`, Yn = n.label`
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
`, Wn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, ki = ({ tabs: e, activeTab: o, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const c = e.find((p) => p.id === o)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Hn, { children: /* @__PURE__ */ t.jsxs(Vn, { children: [
      e.map((p) => /* @__PURE__ */ t.jsxs(Zn, { $isActive: o === p.id, onClick: () => s(p.id), $fontSize: r, children: [
        p.label,
        o === p.id && /* @__PURE__ */ t.jsx(Un, {})
      ] }, p.id)),
      i && /* @__PURE__ */ t.jsx(Xn, { children: i })
    ] }) }),
    c && /* @__PURE__ */ t.jsx(qn, { children: c })
  ] });
}, Hn = n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Vn = n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Zn = n.li`
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
`, Un = n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Xn = n.li`
  margin-left: auto;
  padding: 4px 0;
`, qn = n.div`
  margin-top: 20px;
`, ji = ({
  mode: e,
  primaryValue: o,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: c,
  disabled: p = !1,
  hasError: v = !1,
  errorMessage: k = "",
  customIcon: f
}) => {
  const x = f || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(Qn, { children: [
    /* @__PURE__ */ t.jsx(eo, { children: o || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(to, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(Gn, { children: [
    /* @__PURE__ */ t.jsxs(Jn, { children: [
      /* @__PURE__ */ t.jsx(Kn, { type: "text", value: o || "", placeholder: i, readOnly: !0, disabled: p }),
      o && !p && /* @__PURE__ */ t.jsx(oo, { type: "button", onClick: c, "aria-label": "Очистить", children: "×" })
    ] }),
    !p && /* @__PURE__ */ t.jsx(no, { type: "button", onClick: r, "aria-label": "Выбрать", children: x }),
    v && k && /* @__PURE__ */ t.jsx(ro, { children: k })
  ] });
}, Gn = n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Jn = n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Kn = n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, Qn = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, eo = n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, to = n.span`
  font-size: 13px;
  color: #666;
`, no = n.button`
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
`, oo = n.button`
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
`, ro = n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, Be = n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, Ci = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(io, { children: [
  "Всего: ",
  e
] }) }), io = n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, $i = n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, Mi = n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, so = n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, ao = n.span`
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
`, lo = n.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, Si = ({ checked: e, onChange: o, disabled: s }) => {
  const i = () => {
    s || o(!e);
  };
  return /* @__PURE__ */ t.jsxs(so, { children: [
    /* @__PURE__ */ t.jsx(lo, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(ao, { checked: e, disabled: s })
  ] });
}, Di = ({ id: e, name: o, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(co, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(po, { type: "radio", id: e, name: o, checked: s, onChange: i }),
  r
] }), co = n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, po = n.input`
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
`, Li = ({
  percentage: e,
  onChange: o,
  draggable: s = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const r = Z(null), [c, p] = F(!1), v = (x) => {
    !s || !o || (x.preventDefault(), p(!0), g(x));
  }, k = (x) => {
    !c || !o || g(x);
  }, f = () => {
    p(!1);
  }, g = (x) => {
    if (!r.current || !o) return;
    const b = r.current.getBoundingClientRect();
    let u = (x.clientX - b.left) / b.width * 100;
    u = Math.max(0, Math.min(100, u)), o(Math.round(u));
  };
  return U(() => {
    if (c)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", f);
      };
  }, [c]), /* @__PURE__ */ t.jsxs(uo, { ref: r, $draggable: s, onMouseDown: v, children: [
    /* @__PURE__ */ t.jsx(ho, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(xo, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(fo, { $percentage: e, $primaryColor: i.primary })
  ] });
}, uo = n.div`
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
`, ho = n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, xo = n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, fo = n.div`
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
`, go = ["zoomControl", "fullscreenControl"];
let ie = null;
const bo = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((o, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => o(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Ti = ({
  onLocationSelect: e,
  initialAddress: o = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: c = 12,
  height: p = 400,
  width: v = "100%",
  inputPlaceholder: k = "Введите адрес или название места",
  searchButtonLabel: f = "Найти",
  draggablePlacemark: g = !0,
  controls: x = go,
  showSearch: b = !0,
  className: h,
  style: u,
  onError: l
}) => {
  const [P, y] = F(null), [I, L] = F(o), [A, B] = F(o), [R, Y] = F(!1), T = Z(null);
  U(() => {
    let _ = !1, m;
    return (async () => {
      try {
        const M = await bo(r);
        if (_ || !T.current) return;
        m = new M.Map(T.current, {
          center: [s, i],
          zoom: c,
          controls: x
        });
        const D = new M.Placemark([s, i], {}, { draggable: g });
        m.geoObjects.add(D), m.events.add("click", (N) => {
          const E = N.get("coords");
          z(E, D, m);
        }), D.events.add("dragend", () => {
          const N = D.geometry.getCoordinates();
          z(N, D, m);
        }), y(m), Y(!0);
      } catch (M) {
        l && M instanceof Error && l(M);
      }
    })(), () => {
      _ = !0, m && m.destroy();
    };
  }, [r, s, i, c, x, g, l]);
  const z = async (_, m, d) => {
    if (window.ymaps)
      try {
        const N = (await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();
        m.geometry.setCoordinates(_), d.panTo(_, { flying: !0 }), B(N), L(N), e(N, _[0], _[1]);
      } catch (M) {
        l && M instanceof Error && l(M);
      }
  }, W = async () => {
    if (!(!I.trim() || !window.ymaps || !P))
      try {
        const m = (await window.ymaps.geocode(I)).geoObjects.get(0);
        if (m) {
          const d = m.geometry.getCoordinates(), M = m.properties.get("boundedBy");
          P.setBounds(M, { checkZoomRange: !0 });
          const D = new window.ymaps.Placemark(d, {}, { draggable: g });
          P.geoObjects.removeAll(), P.geoObjects.add(D);
          const N = m.getAddressLine();
          B(N), e(N, d[0], d[1]), D.events.add("dragend", () => {
            const E = D.geometry.getCoordinates();
            z(E, D, P);
          });
        }
      } catch (_) {
        l && _ instanceof Error && l(_);
      }
  };
  return /* @__PURE__ */ t.jsxs(mo, { className: h, style: u, children: [
    b && /* @__PURE__ */ t.jsxs(wo, { children: [
      /* @__PURE__ */ t.jsx(
        on,
        {
          type: "text",
          value: I,
          onChange: (_) => L(_.target.value),
          placeholder: k,
          onKeyPress: (_) => _.key === "Enter" && W(),
          disabled: !R
        }
      ),
      /* @__PURE__ */ t.jsx(vo, { onClick: W, disabled: !R, children: f })
    ] }),
    /* @__PURE__ */ t.jsxs(ko, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: A || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(yo, { ref: T, $height: p, $width: v }),
    /* @__PURE__ */ t.jsx(jo, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, mo = n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, wo = n.div`
  display: flex;
  gap: 8px;
`, vo = n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, yo = n.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, ko = n.div`
  font-size: 14px;
  color: #374151;
`, jo = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, ze = n.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;
function ye(e, o = "₽") {
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
function Ei(e) {
  if (!e) return 0;
  const o = e.replace(/\D/g, "");
  return parseInt(o, 10);
}
const Pi = ({ title: e, data: o, maxValue: s, step: i, height: r = 300, titleFontSize: c }) => {
  const [p, v] = F(null), k = [];
  for (let g = 0; g <= s; g += i)
    k.push(g);
  const f = o.length > 0 ? o[0].bars.map((g) => ({ name: g.name, color: g.color })) : [];
  return /* @__PURE__ */ t.jsxs(Co, { children: [
    /* @__PURE__ */ t.jsxs(Be, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(ze, { style: { fontSize: c }, children: e }),
      /* @__PURE__ */ t.jsx($o, { children: f.map((g, x) => /* @__PURE__ */ t.jsxs(Mo, { children: [
        /* @__PURE__ */ t.jsx(So, { color: g.color }),
        /* @__PURE__ */ t.jsx(Do, { children: g.name })
      ] }, x)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Lo, { height: r, children: [
      /* @__PURE__ */ t.jsx(To, { children: k.map((g, x) => /* @__PURE__ */ t.jsx(Eo, { children: g.toLocaleString() }, x)) }),
      /* @__PURE__ */ t.jsxs(Po, { children: [
        /* @__PURE__ */ t.jsxs(Io, { children: [
          k.map((g, x) => {
            const b = g / s * 100;
            return /* @__PURE__ */ t.jsx(Ro, { position: 100 - b }, `line-${x}`);
          }),
          o.map((g, x) => /* @__PURE__ */ t.jsxs(Bo, { onMouseEnter: () => v(x), onMouseLeave: () => v(null), children: [
            g.bars.map((b, h) => {
              const u = g.bars.slice(h + 1).reduce((l, P) => l + P.value, 0);
              return /* @__PURE__ */ t.jsx(
                zo,
                {
                  height: b.value / s * 100,
                  offset: u / s * 100,
                  color: b.color,
                  isHovered: p !== null && p !== x
                },
                h
              );
            }),
            p === x && /* @__PURE__ */ t.jsxs(_o, { children: [
              /* @__PURE__ */ t.jsxs(Oo, { children: [
                /* @__PURE__ */ t.jsxs(No, { children: [
                  "Всего: ",
                  ye(g.total.toString())
                ] }),
                g.bars.map((b, h) => /* @__PURE__ */ t.jsxs(Yo, { children: [
                  b.name,
                  ": ",
                  ye(b.value.toString())
                ] }, h))
              ] }),
              /* @__PURE__ */ t.jsx(Wo, {})
            ] })
          ] }, x))
        ] }),
        /* @__PURE__ */ t.jsx(Fo, { children: o.map((g, x) => /* @__PURE__ */ t.jsx(Ao, { style: { flex: 1, textAlign: "center" }, children: g.label }, x)) })
      ] })
    ] })
  ] });
}, Co = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, $o = n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, Mo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, So = n.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, Do = n.span`
  font-size: 14px;
  color: #4b5563;
`, Lo = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, To = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, Eo = n.span`
  font-size: 12px;
  color: #6b7280;
`, Po = n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Io = n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, Ro = n.div`
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
`, Bo = n.div`
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
`, zo = n.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, Fo = n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, Ao = n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, _o = n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, Oo = n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, No = n.div`
  font-weight: 600;
  margin-bottom: 6px;
`, Yo = n.div`
  margin-bottom: 2px;
`, Wo = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Ho = Ne`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Ii = ({
  title: e,
  data: o,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: c,
  minY: p,
  xStep: v,
  yStep: k,
  height: f = 300,
  showLegend: g = !0,
  xAxisCustomLabels: x,
  showTooltip: b = !0,
  titleFontSize: h = "30px"
}) => {
  const [u, l] = F(null), [P, y] = F({ x: 0, y: 0 }), I = Z(null), L = Z(null), A = Math.max(...o.map((m) => m.x), r), B = [];
  for (let m = 0; m <= A; m += v)
    B.push(m);
  const R = [];
  for (let m = p; m <= c; m += k)
    R.push(m);
  const Y = x || B.map((m) => m.toString()), T = g ? Array.from(new Set(o.filter((m) => m.label).map((m) => m.label))).map((m) => {
    const d = o.find((M) => M.label === m);
    return { name: m, color: d.color };
  }) : [], z = {};
  o.forEach((m) => {
    const d = m.label || "default";
    z[d] || (z[d] = []), z[d].push(m);
  });
  const W = (m) => m / A * 100, _ = (m) => {
    const d = c - p;
    return 100 - (m - p) / d * 100;
  };
  return U(() => {
    if (u && L.current) {
      const m = L.current.getBoundingClientRect(), d = W(u.x) / 100 * m.width, M = _(u.y) / 100 * m.height;
      y({
        x: d + m.left,
        y: M + m.top
      });
    }
  }, [u, r, c, p]), /* @__PURE__ */ t.jsxs(Vo, { children: [
    /* @__PURE__ */ t.jsxs(Be, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(ze, { style: { fontSize: h }, children: e }),
      g && T.length > 0 && /* @__PURE__ */ t.jsx(Zo, { children: T.map((m, d) => /* @__PURE__ */ t.jsxs(Uo, { children: [
        /* @__PURE__ */ t.jsx(Xo, { color: m.color }),
        /* @__PURE__ */ t.jsx(qo, { children: m.name })
      ] }, d)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Go, { height: f, children: [
      /* @__PURE__ */ t.jsxs(Jo, { children: [
        R.map((m, d) => /* @__PURE__ */ t.jsx(Ko, { children: m.toLocaleString() }, d)),
        /* @__PURE__ */ t.jsx(ke, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Qo, { ref: L, children: [
        R.map((m, d) => /* @__PURE__ */ t.jsx(er, { position: _(m) }, `hline-${d}`)),
        Object.values(z).map((m, d) => m.map((M, D) => {
          if (D === 0) return null;
          const N = m[D - 1], E = W(N.x), V = _(N.y), w = W(M.x), j = _(M.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${E}%`, y1: `${V}%`, x2: `${w}%`, y2: `${j}%`, stroke: M.color, strokeWidth: "1" })
            },
            `line-${d}-${D}`
          );
        })),
        o.map((m, d) => /* @__PURE__ */ t.jsx(
          tr,
          {
            x: W(m.x),
            y: _(m.y),
            color: m.color,
            onMouseEnter: () => l(m),
            onMouseLeave: () => l(null),
            isHovered: u?.label === m.label
          },
          d
        ))
      ] })
    ] }),
    b && u && /* @__PURE__ */ t.jsxs(rr, { ref: I, style: { left: P.x, top: P.y }, children: [
      /* @__PURE__ */ t.jsxs(ir, { children: [
        u.name && /* @__PURE__ */ t.jsx(sr, { children: u.name }),
        /* @__PURE__ */ t.jsx(ar, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(lr, {})
    ] }),
    /* @__PURE__ */ t.jsxs(nr, { children: [
      Y.map((m, d) => {
        const D = B[d] / A * 100;
        return /* @__PURE__ */ t.jsx(or, { style: { left: `${D}%`, transform: "translateX(-50%)" }, children: m }, d);
      }),
      s && /* @__PURE__ */ t.jsx(ke, { children: s })
    ] })
  ] });
}, Vo = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Zo = n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Uo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Xo = n.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, qo = n.span`
  font-size: 14px;
  color: #4b5563;
`, Go = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Jo = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Ko = n.span`
  font-size: 12px;
  color: #6b7280;
`, ke = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, Qo = n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, er = n.div`
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
`, tr = n.div`
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
`, nr = n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, or = n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, rr = n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${Ho} 0.15s ease-out forwards;
`, ir = n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, sr = n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, ar = n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, lr = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, Ri = ({ images: e, initialIndex: o, onClose: s }) => {
  const [i, r] = F(o), [c, p] = F(0), v = () => {
    r((x) => x > 0 ? x - 1 : e.length - 1), p(0);
  }, k = () => {
    r((x) => x < e.length - 1 ? x + 1 : 0), p(0);
  }, f = () => {
    p((x) => (x + 90) % 360);
  }, g = (x) => {
    x.key === "Escape" ? s() : x.key === "ArrowLeft" ? v() : x.key === "ArrowRight" ? k() : (x.key === "r" || x.key === "к") && f();
  };
  return /* @__PURE__ */ t.jsx(cr, { onClick: s, onKeyDown: g, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(dr, { onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(pr, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(ur, { children: /* @__PURE__ */ t.jsx(hr, { onClick: f, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(xr, { children: [
      /* @__PURE__ */ t.jsx(je, { $position: "left", onClick: v, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(fr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: c }),
      /* @__PURE__ */ t.jsx(je, { $position: "right", onClick: k, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(gr, { children: e.map((x, b) => /* @__PURE__ */ t.jsx(
      br,
      {
        $active: b === i,
        onClick: () => {
          r(b), p(0);
        }
      },
      b
    )) })
  ] }) });
}, cr = n.div`
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
`, dr = n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, pr = n.button`
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
`, ur = n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, hr = n.button`
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
`, xr = n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, fr = n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, je = n.button`
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
`, gr = n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, br = n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, mr = ({ isOpen: e, callPhone: o, error: s, onClose: i }) => {
  const [r, c] = F(!1);
  if (!e) return null;
  const p = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), v = () => {
    p ? window.location.href = `tel:${o}` : (navigator.clipboard.writeText(o), c(!0), setTimeout(() => c(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(wr, { onClick: i, children: /* @__PURE__ */ t.jsxs(vr, { onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(yr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Ce, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      kr,
      {
        onClick: v,
        title: p ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          o,
          !p && r && /* @__PURE__ */ t.jsx(jr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Ce, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    s && /* @__PURE__ */ t.jsx(Cr, { children: s })
  ] }) });
}, wr = n.div`
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
`, vr = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, yr = n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Ce = n.p`
  margin-bottom: 15px;
  color: #555;
`, kr = n.div`
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
`, jr = n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, Cr = n.div`
  color: #e74c3c;
  margin: 10px 0;
`, $r = Ae({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), Bi = ({
  items: e,
  bottomItems: o = [],
  logo: s,
  arrowIcon: i,
  collapsed: r,
  onToggle: c,
  selectedKey: p,
  onSelect: v,
  autoCollapseOnSelect: k = !1,
  width: f = "315px",
  collapsedWidth: g = "70px",
  className: x,
  style: b
}) => {
  const h = _e($r), [u, l] = F(
    r ?? h.collapsed ?? !1
  ), [P, y] = F(null), [I, L] = F(
    p ?? h.selectedSideMenuItem ?? null
  ), [A, B] = F({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), R = Z(null), Y = r ?? h.collapsed ?? u, T = (E) => {
    l(E), h.toggleCollapsed(), c?.(E);
  }, z = p ?? h.selectedSideMenuItem ?? I, W = (E) => {
    L(E), h.setSelectedSideMenuItem(E);
  };
  U(() => {
    r !== void 0 && (l(r), r && y(null));
  }, [r]), U(() => {
    p !== void 0 && W(p);
  }, [p]), U(() => {
    const E = () => B((V) => ({ ...V, visible: !1 }));
    return document.addEventListener("click", E), () => document.removeEventListener("click", E);
  }, []);
  const _ = () => {
    const E = !Y;
    T(E), E && y(null);
  }, m = (E) => {
    E.disabled || E.hidden || (W(E.key), v?.(E), E.onClick?.(E), k && (T(!0), y(null)));
  }, d = (E) => {
    y((V) => V === E ? null : E);
  }, M = (E, V) => {
    const w = (E.children?.length || 0) > 0;
    if (Y && w) {
      V.stopPropagation();
      const j = V.currentTarget.getBoundingClientRect();
      B({
        visible: !0,
        x: j.right + 6,
        y: j.top,
        items: E.children || []
      });
      return;
    }
    w ? d(E.key) : m(E);
  }, D = (E, V = !1) => E.filter((w) => !w.hidden).map((w) => {
    const j = (w.children?.length || 0) > 0, a = P === w.key, C = z === w.key || !!w.children && w.children.some(($) => $.key === z);
    return /* @__PURE__ */ t.jsxs(q.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Pr,
        {
          $collapsed: Y,
          $selected: C,
          onClick: ($) => M(w, $),
          $disabled: w.disabled,
          title: w.label,
          children: [
            w.icon && /* @__PURE__ */ t.jsx(Rr, { $collapsed: Y, children: w.icon }),
            !Y && /* @__PURE__ */ t.jsx(Ir, { children: w.label }),
            !Y && j && /* @__PURE__ */ t.jsx(zr, { $expanded: a, children: "▾" })
          ]
        }
      ),
      !Y && j && a && /* @__PURE__ */ t.jsx(Br, { children: D(w.children || [], !0) })
    ] }, w.key);
  }), N = Oe(() => A.visible ? /* @__PURE__ */ t.jsx(Ar, { style: { left: A.x, top: A.y }, children: A.items.map((E) => /* @__PURE__ */ t.jsx(
    _r,
    {
      onClick: () => {
        m(E), B({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: z === E.key,
      children: E.label
    },
    E.key
  )) }) : null, [A, z]);
  return /* @__PURE__ */ t.jsxs(
    Mr,
    {
      ref: R,
      $collapsed: Y,
      $width: f,
      $collapsedWidth: g,
      className: x,
      style: b,
      children: [
        /* @__PURE__ */ t.jsxs(Sr, { children: [
          /* @__PURE__ */ t.jsx(Dr, { onClick: _, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx(Lr, { $collapsed: Y, children: "❮" }) }),
          !Y && s && /* @__PURE__ */ t.jsx(Tr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(Er, { children: [
          /* @__PURE__ */ t.jsx($e, { children: D(e) }),
          o.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Fr, {}),
            /* @__PURE__ */ t.jsx($e, { children: D(o) })
          ] })
        ] }),
        N,
        /* @__PURE__ */ t.jsx(Or, { $collapsed: Y })
      ]
    }
  );
}, Mr = n.div`
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
`, Sr = n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`, Dr = n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`, Lr = n.span`
  display: inline-block;
  transform: rotate(${({ $collapsed: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`, Tr = n.div`
  flex: 1;
  display: flex;
  align-items: center;
`, Er = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, $e = n.div`
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
`, Pr = n.div`
  display: flex;
  align-items: center;
  gap: ${({ $collapsed: e }) => e ? "0" : "12px"};
  padding: ${({ $collapsed: e }) => e ? "15px 0" : "15px 17px"};
  border-radius: 8px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};

  &:hover {
    background-color: ${({ $selected: e }) => e ? "rgba(209, 213, 219, 1)" : "rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`, Ir = n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Rr = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({ $collapsed: e }) => e ? "24px" : "21px"};
`, Br = n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, zr = n.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Fr = n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Ar = n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, _r = n.div`
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
`, Or = n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Nr = (e) => {
  const o = e.replace(/\D/g, ""), i = (o.startsWith("8") || o.length === 0 ? o : `8${o}`).slice(0, 11);
  let r = "";
  return i.length > 0 && (r += "8"), i.length > 1 && (r += ` (${i.slice(1, 4)}`), i.length > 4 && (r += `) ${i.slice(4, 7)}`), i.length > 7 && (r += `-${i.slice(7, 9)}`), i.length > 9 && (r += `-${i.slice(9, 11)}`), r;
}, Yr = ({ value: e, onChange: o, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (c) => {
    const p = Nr(c.target.value);
    o(p);
  };
  return /* @__PURE__ */ t.jsx(Wr, { type: "text", value: e, onChange: r, placeholder: s, maxLength: 18, tabIndex: i });
}, Wr = n.input`
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
`, Me = (e, o) => ne("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: o
  }
}), Hr = (e, o, s, i) => ne("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: o,
    user_type: s,
    name: i
  }
}), zi = ({
  onLoginSuccess: e,
  userType: o = "delivery_operator",
  title: s = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: r = "8 (xxx) xxx-xx-xx",
  supportPhone: c = "8 989 924 24 24",
  supportLinkUrl: p = "https://waypay.one",
  supportLinkText: v = "waypay.one",
  className: k,
  style: f,
  pollingIntervalMs: g = 3e3,
  enableRegistration: x = !1
}) => {
  const [b, h] = F(!1), [u, l] = F(""), [P, y] = F(!1), [I, L] = F(""), [A, B] = F(""), [R, Y] = F(!1), [T, z] = F(!1), [W, _] = F(""), [m, d] = F(""), [M, D] = F(null), N = Z(void 0);
  U(() => () => {
    N.current && clearInterval(N.current);
  }, []);
  const E = ($) => {
    const S = $.replace(/\D/g, "");
    return S ? S.startsWith("8") ? `+7${S.slice(1)}` : S.startsWith("7") ? `+${S}` : `+${S}` : "";
  }, V = () => {
    y(!1), z(!1), _(""), d(""), D(null), N.current && window.clearInterval(N.current);
  }, w = async ($) => {
    if ($.preventDefault(), !u) {
      B("Введите номер телефона");
      return;
    }
    h(!0), B("");
    const S = E(u);
    try {
      const O = await Me(S, o);
      D({
        phone: S,
        checkId: O.check_id,
        callPhone: O.call_phone
      }), x && "name_required" in O && O.name_required ? z(!0) : !x && "name_required" in O && O.name_required ? (B(
        "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
      ), D(null)) : (L(O.call_phone), y(!0), a(S, O.check_id));
    } catch (O) {
      console.error("Auth error:", O), B(
        "Не удалось инициировать авторизацию. Проверьте номер."
      );
    } finally {
      h(!1);
    }
  }, j = async ($) => {
    if ($.preventDefault(), !W.trim()) {
      d("Введите ФИО");
      return;
    }
    if (M) {
      h(!0), d("");
      try {
        const S = await Me(
          M.phone,
          o
        );
        L(S.call_phone), z(!1), y(!0), a(M.phone, S.check_id);
      } catch (S) {
        console.error("Registration error:", S), d("Не удалось завершить регистрацию");
      } finally {
        h(!1);
      }
    }
  }, a = ($, S) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(() => {
      C($, S);
    }, g);
  }, C = async ($, S) => {
    if (!R) {
      Y(!0);
      try {
        const O = await Hr($, S, o, W.trim());
        O.access_token && O.refresh_token && (N.current && window.clearInterval(N.current), y(!1), z(!1), _(""), D(null), e(O.access_token));
      } catch (O) {
        console.error("Verification error:", O), B("Ошибка проверки авторизации");
      } finally {
        Y(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(Vr, { className: k, style: f, children: [
    /* @__PURE__ */ t.jsxs(Zr, { children: [
      /* @__PURE__ */ t.jsxs(Ur, { onSubmit: T ? j : w, children: [
        /* @__PURE__ */ t.jsx(Xr, { children: T ? "Регистрация" : s }),
        T ? /* @__PURE__ */ t.jsxs(Se, { children: [
          /* @__PURE__ */ t.jsx(De, { children: /* @__PURE__ */ t.jsx(
            qr,
            {
              type: "text",
              value: W,
              onChange: ($) => _($.target.value),
              placeholder: "Введите ФИО",
              disabled: b,
              autoFocus: !0
            }
          ) }),
          m && /* @__PURE__ */ t.jsx(ni, { children: m })
        ] }) : /* @__PURE__ */ t.jsx(Se, { children: /* @__PURE__ */ t.jsx(De, { children: /* @__PURE__ */ t.jsx(
          Yr,
          {
            value: u,
            onChange: ($) => l($),
            placeholder: r
          }
        ) }) }),
        (A || m) && /* @__PURE__ */ t.jsx(ti, { children: /* @__PURE__ */ t.jsx("span", { children: A || m }) }),
        /* @__PURE__ */ t.jsx(Gr, { type: "submit", disabled: b, children: b ? "Загрузка..." : T ? "Продолжить" : i }),
        T && /* @__PURE__ */ t.jsx(
          Jr,
          {
            type: "button",
            onClick: () => {
              z(!1), _(""), d(""), D(null);
            },
            disabled: b,
            children: "← Назад"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs(Kr, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(Qr, { href: `tel:${c}`, children: c }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(ei, { href: p, target: "_blank", rel: "noreferrer", children: v })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      mr,
      {
        isOpen: P,
        onClose: V,
        callPhone: I,
        error: A
      }
    )
  ] });
}, Vr = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`, Zr = n.div`
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
`, Ur = n.form`
  display: flex;
  flex-direction: column;
`, Xr = n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, Se = n.div`
  margin-bottom: 25px;
`, De = n.div`
  position: relative;
  width: auto;
`, qr = n.input`
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
`, Gr = n.button`
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
`, Jr = n.button`
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
`, Kr = n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, Qr = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, ei = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, ti = n.div`
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
`, ni = n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`, oi = (e) => {
  let o = 0;
  for (let i = 0; i < e.length; i++)
    o = e.charCodeAt(i) + ((o << 5) - o);
  return `hsl(${Math.abs(o % 360)}, 60%, 60%)`;
}, Fi = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Ai = (e, o = 100) => {
  const s = document.createElement("canvas");
  s.width = o, s.height = o;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = oi(e);
  i.fillStyle = r, i.beginPath(), i.arc(o / 2, o / 2, o / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const c = o / 2;
  i.font = `bold ${c}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const p = c * 0.1;
  return i.fillText(e, o / 2, o / 2 + p), s.toDataURL("image/png");
}, _i = (e) => {
  if (!e) return "";
  const o = typeof e == "string" ? new Date(e) : e;
  if (isNaN(o.getTime())) return "";
  const s = o.getDate().toString().padStart(2, "0"), i = (o.getMonth() + 1).toString().padStart(2, "0"), r = o.getFullYear();
  return `${s}-${i}-${r}`;
};
function Oi(e) {
  return new Date(e);
}
const ri = (e) => {
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
      const g = Math.floor((o.getTime() - s.getTime()) / 1e3), x = Math.floor(g / 60), b = Math.floor(x / 60), h = Math.floor(b / 24);
      return g < 10 ? "скоро" : g < 60 ? `через ${g} секунд` : x === 1 ? "через минуту" : x < 60 ? `через ${x} минут` : b === 1 ? "через час" : b < 24 ? `через ${b} часов` : h === 1 ? "завтра" : h < 7 ? `через ${h} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - o.getTime()) / 1e3), r = Math.floor(i / 60), c = Math.floor(r / 60), p = Math.floor(c / 24), v = Math.floor(p / 7), k = Math.floor(p / 30), f = Math.floor(p / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const g = Math.max(1, i);
      return g === 1 ? "секунду назад" : g < 5 ? `${g} секунды назад` : `${g} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : c < 24 ? c === 1 ? "час назад" : c < 5 ? `${c} часа назад` : `${c} часов назад` : p < 7 ? p === 1 ? "вчера" : p === 2 ? "позавчера" : `${p} дня назад` : v < 4 ? v === 1 ? "неделю назад" : v < 5 ? `${v} недели назад` : `${v} недель назад` : k < 12 ? k === 1 ? "месяц назад" : k < 5 ? `${k} месяца назад` : `${k} месяцев назад` : f === 1 ? "год назад" : f < 5 ? `${f} года назад` : `${f} лет назад`;
  } catch (s) {
    return console.error("Ошибка форматирования относительного времени:", s), "ошибка даты";
  }
}, ii = (e) => {
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
}, Ni = (e, o = {}) => {
  const { useExactAfterMonths: s = 6, includeTime: i = !0 } = o, r = new Date(e);
  return isNaN(r.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= s ? i ? ii(r) : r.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : ri(r);
};
export {
  Te as API_BASE_URL,
  di as AddButton,
  mr as AuthCallModal,
  zi as AuthPage,
  ui as BackButton,
  xn as BaseModal,
  bi as Checkbox,
  Pi as ColumnChart,
  Le as ContextMenu,
  Ci as CountInfoTitle,
  ue as CustomCalendar,
  on as CustomInput,
  Yr as CustomPhoneInput,
  gi as CustomSelect,
  ci as CustomTable,
  wi as CustomTextArea,
  ze as CustomTitle,
  Ee as DefaultButton,
  hi as DeleteButton,
  xi as EditButton,
  ji as EntitySelectContainer,
  fi as ExportButton,
  $i as InputTitle,
  Mi as ModalInfoTitle,
  mi as Pagination,
  vi as PeriodField,
  yi as PhoneModalInput,
  Ri as PhotoViewerModal,
  Li as ProgressBar,
  Di as RadioButton,
  Ii as ScatterPlot,
  Bi as SideMenu,
  $r as SideMenuContext,
  ki as Tabs,
  Be as TitleField,
  Si as ToggleSwitch,
  Ti as YandexMapSelector,
  ne as apiRequest,
  pt as authStorage,
  Hr as confirmCallAuth,
  _i as formatDate,
  ii as formatExactDate,
  ye as formatMoney,
  ri as formatRelativeTime,
  Ni as formatRelativeTimeExtended,
  Ai as generateAvatar,
  Fi as getInitials,
  pi as getSessionInfo,
  Me as initiateCallAuth,
  Oi as parseDateInput,
  Ei as parseMoney,
  oi as stringToColor
};
