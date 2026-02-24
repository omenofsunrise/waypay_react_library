import q, { useRef as Z, useState as F, useEffect as U, createContext as Ae, useContext as _e, useMemo as Oe } from "react";
import n, { keyframes as Ne } from "styled-components";
import { motion as J, AnimatePresence as se } from "framer-motion";
var ne = { exports: {} }, K = {};
var ae;
function Ye() {
  if (ae) return K;
  ae = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, d) {
    var u = null;
    if (d !== void 0 && (u = "" + d), r.key !== void 0 && (u = "" + r.key), "key" in r) {
      d = {};
      for (var m in r)
        m !== "key" && (d[m] = r[m]);
    } else d = r;
    return r = d.ref, {
      $$typeof: e,
      type: i,
      key: u,
      ref: r !== void 0 ? r : null,
      props: d
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
      var a = g.A;
      return a === null ? null : a.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (p.call(a, "key")) {
        var C = Object.getOwnPropertyDescriptor(a, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function m(a, C) {
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
        $$typeof: h,
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
    function w(a, C, $, S, O, X) {
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
      if (p.call(C, "key")) {
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
      if (H = null, $ !== void 0 && (s($), H = "" + $), u(C) && (s(C.key), H = "" + C.key), "key" in C) {
        $ = {};
        for (var oe in C)
          oe !== "key" && ($[oe] = C[oe]);
      } else $ = C;
      return H && m(
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
      v(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === z && (a._payload.status === "fulfilled" ? v(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function v(a) {
      return typeof a == "object" && a !== null && a.$$typeof === h;
    }
    var c = q, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), g = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, M = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var N, E = {}, V = c.react_stack_bottom_frame.bind(
      c,
      d
    )(), b = D(i(d)), j = {};
    Q.Fragment = P, Q.jsx = function(a, C, $) {
      var S = 1e4 > g.recentlyCreatedOwnerStacks++;
      return w(
        a,
        C,
        $,
        !1,
        S ? Error("react-stack-top-frame") : V,
        S ? D(i(a)) : b
      );
    }, Q.jsxs = function(a, C, $) {
      var S = 1e4 > g.recentlyCreatedOwnerStacks++;
      return w(
        a,
        C,
        $,
        !0,
        S ? Error("react-stack-top-frame") : V,
        S ? D(i(a)) : b
      );
    };
  })()), Q;
}
var ce;
function He() {
  return ce || (ce = 1, process.env.NODE_ENV === "production" ? ne.exports = Ye() : ne.exports = We()), ne.exports;
}
var t = He();
const Le = ({ x: e, y: o, items: s, onClose: i, ...r }) => {
  const d = Z(null), [u, m] = F(null);
  U(() => {
    const c = (h) => {
      d.current && !d.current.contains(h.target) && i();
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [i]);
  const f = (() => {
    if (!d.current) return { x: e, y: o };
    const c = d.current.offsetWidth, h = d.current.offsetHeight, l = window.innerWidth, P = window.innerHeight;
    let y = e, I = o;
    return y + c > l && (y = e - c), I + h > P && (I = o - h), { x: y, y: I };
  })(), w = (c, h) => {
    c.submenu ? m(u === h ? null : h) : c.action && (c.action(), i());
  }, x = (c) => {
    s[c].submenu && m(c);
  }, v = (c) => {
    const h = c.relatedTarget;
    d.current?.contains(h) || m(null);
  };
  return /* @__PURE__ */ t.jsx(
    Ve,
    {
      ref: d,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: f.y,
        left: f.x
      },
      onClick: (c) => c.stopPropagation(),
      onMouseLeave: v,
      ...r,
      children: s.map((c, h) => /* @__PURE__ */ t.jsxs(Ze, { $hasSubmenu: !!c.submenu, $disabled: c.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ue,
          {
            onClick: (l) => {
              l.stopPropagation(), c.disabled || w(c, h);
            },
            onMouseEnter: () => !c.disabled && x(h),
            whileHover: c.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: c.color,
            $disabled: c.disabled,
            children: /* @__PURE__ */ t.jsxs(Xe, { children: [
              c.label,
              c.submenu && /* @__PURE__ */ t.jsx(qe, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        c.submenu && u === h && /* @__PURE__ */ t.jsx(
          Ge,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Le, { x: 0, y: -h * 40, items: c.submenu, onClose: () => m(null) })
          }
        )
      ] }, h))
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
`, li = ({
  columns: e,
  data: o,
  onRowDoubleClick: s,
  contextMenuActions: i = [],
  onSort: r,
  sortConfig: d,
  onRowClick: u,
  selectedRow: m,
  fixedHeight: k,
  hasTotalsRow: f,
  debtChecker: w,
  rowStyles: x = {},
  isLoading: v
}) => {
  const [c, h] = F(null), [l, P] = F(null), y = Z(null), I = Z(null), L = 500, A = m !== void 0 ? m : c, B = (b) => {
    !e[b].isSortable || !r || r(b);
  }, Y = w || ((b) => {
    const j = b[8];
    return typeof j == "string" ? parseFloat(j.replace(/[^\d.]/g, "")) > 0 : !1;
  }), T = (b) => {
    m === void 0 && h(b === A ? null : b), u && u(o[b], b);
  }, z = (b, j) => {
    s && s(b, j);
  }, W = (b, j) => {
    if (i.length === 0) return;
    b.preventDefault();
    const a = "touches" in b ? b.touches[0].clientX : b.clientX, C = "touches" in b ? b.touches[0].clientY : b.clientY;
    P({
      x: a,
      y: C,
      rowIndex: j
    });
  }, _ = (b, j) => {
    b.preventDefault(), W(b, j);
  }, g = (b, j) => {
    i.length !== 0 && (I.current && clearTimeout(I.current), I.current = window.setTimeout(() => {
      W(b, j);
    }, L));
  }, p = () => {
    I.current && (clearTimeout(I.current), I.current = null);
  }, M = () => {
    I.current && window.clearTimeout(I.current);
  }, D = () => {
    P(null);
  };
  U(() => {
    const b = () => {
      l && D();
    };
    return document.addEventListener("click", b), () => {
      document.removeEventListener("click", b), I.current && clearTimeout(I.current);
    };
  }, [l]);
  const N = (b, j, a) => {
    if (j)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const C = x[b] || {};
    return b === A ? {
      backgroundColor: C.backgroundColor || "#007D88",
      color: C.color || "#FFFFFF",
      fontWeight: C.fontWeight || "normal"
    } : a ? {
      backgroundColor: C.backgroundColor || "#E8D8D8",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    } : o[b][o[b].length - 1] === !1 ? {
      backgroundColor: C.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: C.fontWeight || "normal"
    } : {
      backgroundColor: C.backgroundColor || "#FFFFFF",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    };
  }, E = (b, j, a) => {
    if (j) return "#FFFFFF";
    const C = N(b, j, a);
    return C.hoverBackgroundColor ? C.hoverBackgroundColor : b === A ? "#007D88" : a ? "#E8D8D8CC" : o[b][o[b].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, V = () => {
    if (!l || i.length === 0) return null;
    const b = (typeof i == "function" ? i(o[l.rowIndex]) : i).filter(
      (j) => typeof j == "object" && (typeof j.shouldShow != "function" || j.shouldShow(o[l.rowIndex]))
    );
    return b.length === 0 ? null : /* @__PURE__ */ t.jsx(
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
            items: b.map((j) => {
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
  return /* @__PURE__ */ t.jsx(Qe, { ref: y, children: v ? /* @__PURE__ */ t.jsx(Je, { children: /* @__PURE__ */ t.jsx(Ke, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(et, { children: [
      /* @__PURE__ */ t.jsx(nt, { children: /* @__PURE__ */ t.jsx(de, { children: e.map(
        (b, j) => !b.isHidden && /* @__PURE__ */ t.jsx(
          rt,
          {
            $isSortable: b.isSortable,
            $isActive: d?.key === j,
            onClick: () => B(j),
            $align: b.align || "center",
            $isFirst: j === 0,
            $isLast: j === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(it, { $align: b.align || "center", children: [
              b.name,
              b.isSortable && /* @__PURE__ */ t.jsx(
                st,
                {
                  $direction: d?.key === j ? d.direction : "asc",
                  animate: {
                    rotate: d?.key === j && d.direction === "desc" ? 180 : 0,
                    color: d?.key === j ? "#007D88" : "#6B7280"
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
      /* @__PURE__ */ t.jsx(ot, { $fixedHeight: k, children: /* @__PURE__ */ t.jsx(se, { children: o.map((b, j) => {
        const a = !!(f && j === o.length - 1), C = !!(!a && Y(b)), $ = N(j, a, C), S = E(j, a, C);
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
            onDoubleClick: () => !a && z(b, j),
            onContextMenu: (O) => !a && _(O, j),
            onTouchStart: (O) => !a && g(O, j),
            onTouchEnd: p,
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
            children: b.map(
              (O, X) => !e[X]?.isHidden && /* @__PURE__ */ t.jsx(
                at,
                {
                  $align: e[X]?.align || "center",
                  $isFirst: X === 0,
                  $isLast: X === b.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && X < b.findIndex((H) => H === "Итого:"),
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
`, ci = ({ onClick: e, tooltip: o, size: s = 32, margin: i }) => /* @__PURE__ */ t.jsx(lt, { onClick: e, size: s, margin: i, title: o, children: /* @__PURE__ */ t.jsx(ct, { size: s }) }), lt = n.button`
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
`, Te = "/api";
async function te(e, o = {}) {
  const {
    method: s = "GET",
    body: i,
    headers: r = {},
    token: d,
    withCredentials: u = !0
  } = o, m = async (f) => {
    const w = {
      "Content-Type": "application/json",
      ...r
    };
    f && (w.Authorization = `Bearer ${f}`);
    const x = e.startsWith("http") ? e : `${Te}${e}`;
    return await fetch(x, {
      method: s,
      headers: w,
      body: i ? JSON.stringify(i) : void 0,
      credentials: u ? "include" : "same-origin"
    });
  }, k = async (f, w = !0) => {
    const x = await m(f);
    if (x.ok) {
      if (x.status === 204)
        return null;
      const c = await x.text();
      if (!c) return null;
      try {
        return JSON.parse(c);
      } catch {
        return c;
      }
    }
    if (x.status === 401 && w) {
      const c = await dt();
      if (c)
        return k(c, !1);
    }
    let v = `Request failed with status ${x.status}`;
    try {
      const c = await x.json();
      c && typeof c.error == "string" ? v = c.error : typeof c == "string" && (v = c);
    } catch {
      const c = await x.text();
      c && (v = c);
    }
    throw new Error(v);
  };
  return k(d);
}
async function dt() {
  const e = await fetch(`${Te}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  if (!e.ok)
    return null;
  const o = await e.json();
  return o.access_token ? o.access_token : null;
}
const di = {
  async isAuthenticated() {
    try {
      return !!(await this.getSessionInfo())?.client?.id;
    } catch {
      return !1;
    }
  },
  async getSessionInfo() {
    try {
      return await te("/auth/session/info", {
        method: "GET"
      });
    } catch {
      return null;
    }
  },
  async logout() {
    try {
      await te("/auth/session/revoke", {
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
}, pt = n.button`
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
`, pi = ({ children: e, onClick: o }) => /* @__PURE__ */ t.jsxs(pt, { onClick: o, children: [
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
  disabledBg: d,
  textColor: u,
  fullWidth: m = !1,
  minWidth: k,
  width: f,
  isPrimary: w = !0,
  ...x
}) => {
  const c = i ? {
    bg: i,
    hoverBg: r || i,
    disabledBg: d || i,
    textColor: u || (w ? "white" : "black")
  } : w ? {
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
    ut,
    {
      disabled: s,
      $bg: c.bg,
      $hoverBg: c.hoverBg,
      $disabledBg: c.disabledBg,
      $textColor: c.textColor,
      $fullWidth: m,
      $minWidth: k,
      $width: f,
      ...x,
      children: [
        o && /* @__PURE__ */ t.jsx(ht, { children: o }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, ut = n.button`
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
`, ht = n.span`
  display: inline-flex;
  align-items: center;
`, ui = ({ onClick: e, tooltip: o, size: s = 32 }) => /* @__PURE__ */ t.jsx(xt, { onClick: e, size: s, title: o, children: /* @__PURE__ */ t.jsx(
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
        d: "M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",
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
`, gt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), xi = ({
  children: e = "Экспорт",
  icon: o = /* @__PURE__ */ t.jsx(gt, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...d
}) => {
  const u = async (m) => {
    if (s)
      try {
        await s();
      } catch (k) {
        console.error("Export error:", k);
      }
    d.onClick && d.onClick(m);
  };
  return /* @__PURE__ */ t.jsx(bt, { ...d, onClick: u, disabled: i || d.disabled, children: i ? /* @__PURE__ */ t.jsxs(mt, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(wt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    o,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, bt = n.button`
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
`, mt = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, wt = n.div`
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
`, fi = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: d,
  options: u,
  name: m,
  disabled: k = !1,
  required: f = !1,
  ...w
}) => {
  const [x, v] = q.useState(!1), [c, h] = q.useState(!1), l = q.useRef(null), P = !!(o && !s && !x), y = (R) => {
    i && !k && i({
      target: { value: R, name: m }
    }), h(!1), v(!1);
  }, I = (R) => {
    l.current && !l.current.contains(R.target) && (h(!1), v(!1));
  }, L = () => {
    k || (h(!c), v(!c));
  };
  q.useEffect(() => (document.addEventListener("mousedown", I), () => {
    document.removeEventListener("mousedown", I);
  }), []);
  const A = u.find((R) => R.value === s), B = A ? A.label : "";
  return /* @__PURE__ */ t.jsxs(vt, { ref: l, ...w, children: [
    /* @__PURE__ */ t.jsxs(yt, { children: [
      /* @__PURE__ */ t.jsxs(
        kt,
        {
          hasError: r,
          isOpen: c,
          disabled: k,
          onClick: L,
          onFocus: () => !k && v(!0),
          onBlur: () => v(!1),
          tabIndex: k ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(jt, { children: B || e && /* @__PURE__ */ t.jsx(Ct, { children: e }) }),
            /* @__PURE__ */ t.jsx($t, { isOpen: c, disabled: k, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: k ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      c && /* @__PURE__ */ t.jsx(Mt, { children: u.map((R) => /* @__PURE__ */ t.jsxs(St, { $isSelected: R.value === s, onClick: () => y(R.value), children: [
        /* @__PURE__ */ t.jsx(Dt, { $isSelected: R.value === s, children: R.value === s && /* @__PURE__ */ t.jsx(Lt, {}) }),
        /* @__PURE__ */ t.jsx(Tt, { children: R.label })
      ] }, R.value)) })
    ] }),
    o && /* @__PURE__ */ t.jsx(Et, { isVisible: P, children: o }),
    r && d && /* @__PURE__ */ t.jsx(Pt, { children: d }),
    /* @__PURE__ */ t.jsx(It, { name: m, value: s || "", onChange: () => {
    }, tabIndex: -1, required: f, children: u.map((R) => /* @__PURE__ */ t.jsx("option", { value: R.value, children: R.label }, R.value)) })
  ] });
}, vt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, yt = n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, kt = n.div`
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
`, jt = n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Ct = n.span`
  color: rgba(80, 85, 92, 1);
`, $t = n.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, Mt = n.div`
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
`, St = n.div`
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
`, Dt = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Lt = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Tt = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Et = n.label`
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
`, Pt = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, It = n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, gi = ({ checked: e = !1, onChange: o, className: s, label: i, disabled: r = !1 }) => {
  const [d, u] = F(!1), m = () => {
    r || !o || o(!e);
  }, k = (f) => {
    r || (f.key === "Enter" || f.key === " ") && (f.preventDefault(), m());
  };
  return /* @__PURE__ */ t.jsxs(Rt, { className: s, onClick: m, onKeyPress: k, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      Bt,
      {
        checked: e,
        isFocused: d,
        disabled: r,
        onMouseEnter: () => !r && u(!0),
        onMouseLeave: () => !r && u(!1),
        onFocus: () => !r && u(!0),
        onBlur: () => !r && u(!1),
        children: e && /* @__PURE__ */ t.jsx(Ft, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(zt, { disabled: r, children: i })
  ] });
}, Rt = n.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, Bt = n.div`
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
`, zt = n.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, Ft = n.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, At = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", pe = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], _t = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], ue = ({ prefix: e = "Дата:", value: o = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [d, u] = F(!1), [m, k] = F(/* @__PURE__ */ new Date()), [f, w] = F(o ? new Date(o) : null), [x, v] = F(!1), [c, h] = F(!1), l = Z(null), P = Z(null), y = Z(null);
  U(() => {
    const p = (M) => {
      l.current && !l.current.contains(M.target) && u(!1), P.current && !P.current.contains(M.target) && v(!1), y.current && !y.current.contains(M.target) && h(!1);
    };
    return document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, []), U(() => {
    w(o ? new Date(o) : null);
  }, [o]);
  const I = (p) => {
    const M = new Date(Date.UTC(p.getFullYear(), p.getMonth(), p.getDate()));
    w(p);
    const D = M.toISOString().split("T")[0];
    i?.(D), u(!1);
  }, L = () => {
    const p = /* @__PURE__ */ new Date();
    k(p);
    const D = new Date(Date.UTC(p.getFullYear(), p.getMonth(), p.getDate())).toISOString().split("T")[0];
    i?.(D), u(!1);
  }, A = () => {
    w(null), i?.(""), r?.(), u(!1);
  }, B = (p) => {
    const M = new Date(m);
    M.setMonth(p), k(M), v(!1);
  }, R = (p) => {
    const M = new Date(m);
    M.setFullYear(p), k(M), h(!1);
  }, Y = () => {
    const p = m.getFullYear(), M = m.getMonth(), D = new Date(p, M, 1), E = new Date(p, M + 1, 0).getDate(), V = D.getDay() === 0 ? 6 : D.getDay() - 1, b = [], j = 35, a = new Date(p, M, 0).getDate();
    for (let $ = 0; $ < V; $++) {
      const S = a - V + $ + 1, O = new Date(p, M - 1, S), X = !!(f && O.getDate() === f.getDate() && O.getMonth() === f.getMonth() && O.getFullYear() === f.getFullYear());
      b.push(
        /* @__PURE__ */ t.jsx(re, { selected: X, onClick: () => I(O), otherMonth: !0, children: S }, `prev-${S}`)
      );
    }
    for (let $ = 1; $ <= E; $++) {
      const S = new Date(p, M, $), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      b.push(
        /* @__PURE__ */ t.jsx(re, { selected: O, onClick: () => I(S), children: $ }, `current-${$}`)
      );
    }
    const C = j - b.length;
    for (let $ = 1; $ <= C; $++) {
      const S = new Date(p, M + 1, $), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      b.push(
        /* @__PURE__ */ t.jsx(re, { selected: O, onClick: () => I(S), otherMonth: !0, children: $ }, `next-${$}`)
      );
    }
    return b;
  }, T = () => f ? f.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, z = () => {
    const p = (/* @__PURE__ */ new Date()).getFullYear(), M = [];
    for (let D = p - 10; D <= p + 10; D++)
      M.push(D);
    return M;
  }, W = (p) => {
    p.preventDefault(), p.stopPropagation(), v(!x), h(!1);
  }, _ = (p) => {
    p.preventDefault(), p.stopPropagation(), h(!c), v(!1);
  }, g = (p) => {
    const M = p === "next" ? 1 : -1, D = new Date(m);
    D.setMonth(D.getMonth() + M), k(D);
  };
  return /* @__PURE__ */ t.jsxs(Ot, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(Nt, { onClick: () => u(!d), children: [
      e && /* @__PURE__ */ t.jsx(Yt, { children: e }),
      /* @__PURE__ */ t.jsx(Wt, { isEmpty: !f, children: T() }),
      /* @__PURE__ */ t.jsx(Ht, { src: At, alt: "Календарь" })
    ] }),
    d && /* @__PURE__ */ t.jsxs(Vt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Zt, { children: [
        /* @__PURE__ */ t.jsx(
          ge,
          {
            onClick: (p) => {
              p.preventDefault(), p.stopPropagation(), g("prev");
            },
            onMouseDown: (p) => p.preventDefault(),
            children: /* @__PURE__ */ t.jsx(be, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Ut, { children: [
          /* @__PURE__ */ t.jsxs(Gt, { ref: P, children: [
            /* @__PURE__ */ t.jsxs(Xt, { onClick: (p) => W(p), onMouseDown: (p) => p.preventDefault(), children: [
              pe[m.getMonth()],
              /* @__PURE__ */ t.jsx(he, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(xe, { $width: 120, onClick: (p) => p.stopPropagation(), children: pe.map((p, M) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: M === m.getMonth(),
                onClick: (D) => {
                  D.stopPropagation(), B(M);
                },
                children: p
              },
              p
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(Jt, { ref: y, children: [
            /* @__PURE__ */ t.jsxs(qt, { onClick: (p) => _(p), onMouseDown: (p) => p.preventDefault(), children: [
              m.getFullYear(),
              /* @__PURE__ */ t.jsx(he, { $open: c })
            ] }),
            c && /* @__PURE__ */ t.jsx(xe, { $width: 80, onClick: (p) => p.stopPropagation(), children: z().map((p) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: p === m.getFullYear(),
                onClick: (M) => {
                  M.stopPropagation(), R(p);
                },
                children: p
              },
              p
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          ge,
          {
            onClick: (p) => {
              p.preventDefault(), p.stopPropagation(), g("next");
            },
            onMouseDown: (p) => p.preventDefault(),
            children: /* @__PURE__ */ t.jsx(be, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Kt, { children: _t.map((p) => /* @__PURE__ */ t.jsx(Qt, { children: p }, p)) }),
      /* @__PURE__ */ t.jsx(en, { children: Y() }),
      /* @__PURE__ */ t.jsxs(tn, { children: [
        /* @__PURE__ */ t.jsx(me, { onClick: A, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(me, { onClick: L, children: "Сегодня" })
      ] })
    ] })
  ] });
}, Ot = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`, Nt = n.div`
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
`, Yt = n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`, Wt = n.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Ht = n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Vt = n.div`
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
`, Zt = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Ut = n.div`
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
`, Xt = n(Pe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, qt = n(Pe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Gt = n.div`
  position: relative;
`, Jt = n.div`
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
`, Kt = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, Qt = n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, en = n.div`
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
`, tn = n.div`
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
`, nn = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: d = !1,
  errorMessage: u,
  ...m
}) => {
  const [k, f] = q.useState(!1), w = !!(o && !s && !k), x = (h) => {
    if (!r) return;
    let l = h.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(h);
        break;
      case "rubles": {
        const y = h.target.selectionStart, I = h.target.value;
        let L = I.replace(/[^\d]/g, "");
        if (L === "") {
          h.target.value = "", r(h);
          break;
        }
        const A = parseInt(L, 10);
        if (!isNaN(A)) {
          let B = A.toLocaleString("ru-RU");
          B += " ₽";
          const R = v(I, y || 0), Y = c(B, R);
          h.target.value = B, r(h), setTimeout(() => {
            h.target.setSelectionRange(Y, Y);
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
          const L = h.target.selectionStart || 0, A = l.replace(" %", "");
          h.target.value = l, r(h), setTimeout(() => {
            L < A.length && h.target.setSelectionRange(L, L);
          }, 0);
        } else
          h.target.value = l, r(h);
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
        }).join(" "), l.length > 0 && l[l.length - 1] !== " " && h.target.value.length > 0 && h.target.value[h.target.value.length - 1] === " " && (l += " "), l.length > 100 && (l = l.slice(0, 100)), h.target.value = l, r(h);
        break;
      case "doc":
        l = l.replace(/\D/g, ""), l.length > 4 && (l = `${l.slice(0, 4)} ${l.slice(4, 10)}`), l.length > 11 && (l = l.slice(0, 11)), h.target.value = l, r(h);
        break;
      case "date": {
        l = l.replace(/\D/g, ""), l.length > 4 ? l = `${l.slice(0, 2)}.${l.slice(2, 4)}.${l.slice(4, 8)}` : l.length > 2 && (l = `${l.slice(0, 2)}.${l.slice(2, 4)}`), l.length > 10 && (l = l.slice(0, 10)), s?.length > l.length && [3, 6].includes(l.length) && (l = l.slice(0, l.length - 1)), h.target.value = l, r(h);
        break;
      }
      default:
        r(h);
        break;
    }
  }, v = (h, l) => {
    let P = 0;
    for (let y = 0; y < Math.min(l, h.length); y++)
      /\d/.test(h[y]) && P++;
    return P;
  }, c = (h, l) => {
    let P = 0;
    for (let y = 0; y < h.length; y++) {
      if (P >= l)
        return y;
      /\d/.test(h[y]) && P++;
    }
    return h.length;
  };
  return /* @__PURE__ */ t.jsxs(on, { children: [
    /* @__PURE__ */ t.jsx(
      rn,
      {
        ...m,
        value: s,
        placeholder: w ? "" : e,
        onFocus: () => f(!0),
        onBlur: (h) => {
          f(!1), m.onBlur?.(h);
        },
        onChange: x,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: d
      }
    ),
    o && /* @__PURE__ */ t.jsx(sn, { isVisible: w, children: o }),
    d && u && /* @__PURE__ */ t.jsx(an, { children: u })
  ] });
}, on = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, rn = n.input`
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
`, sn = n.label`
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
`, an = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, bi = ({ total: e, current: o = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [d, u] = F(o), m = (f) => {
    f < 1 || f > r || f === d || (u(f), s?.(f));
  }, k = () => {
    const f = [];
    let x = 1, v = r;
    if (r > 5) {
      const c = Math.floor(2.5);
      x = Math.max(d - c, 1), v = Math.min(d + c, r), d <= c + 1 ? v = 5 : d >= r - c && (x = r - 5 + 1);
    }
    for (let c = x; c <= v; c++)
      f.push(
        /* @__PURE__ */ t.jsx(ee, { active: c === d, onClick: () => m(c), children: c }, c)
      );
    return x > 1 && (x > 2 && f.unshift(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "start-ellipsis")), f.unshift(
      /* @__PURE__ */ t.jsx(ee, { active: d === 1, onClick: () => m(1), children: "1" }, 1)
    )), v < r && (v < r - 1 && f.push(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "end-ellipsis")), f.push(
      /* @__PURE__ */ t.jsx(ee, { active: r === d, onClick: () => m(r), children: r }, r)
    )), f;
  };
  return /* @__PURE__ */ t.jsxs(ln, { children: [
    /* @__PURE__ */ t.jsx(we, { disabled: d === 1, onClick: () => m(d - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: d === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    k(),
    /* @__PURE__ */ t.jsx(we, { disabled: d === r, onClick: () => m(d + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: d === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, ln = n.div`
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
`, mi = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: d,
  rows: u = 3,
  ...m
}) => {
  const [k, f] = q.useState(!1), w = !!(o && !s && !k);
  return /* @__PURE__ */ t.jsxs(cn, { children: [
    /* @__PURE__ */ t.jsx(
      dn,
      {
        ...m,
        value: s,
        placeholder: w ? "" : e,
        onFocus: () => f(!0),
        onBlur: (x) => {
          f(!1), m.onBlur?.(x);
        },
        onChange: i,
        hasError: r,
        rows: u
      }
    ),
    o && /* @__PURE__ */ t.jsx(pn, { isVisible: w, children: o }),
    r && d && /* @__PURE__ */ t.jsx(un, { children: d })
  ] });
}, cn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, dn = n.textarea`
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
`, pn = n.label`
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
`, un = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, hn = ({
  title: e,
  onClose: o,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: d = !1,
  isSubmitting: u = !1,
  mode: m = "create",
  hideSaveButton: k = !1,
  hideCanselButton: f = !1,
  width: w = "560px",
  saveButtonText: x = "Сохранить",
  customLayout: v
}) => {
  const c = m === "view", h = Z(null);
  U(() => {
    const y = (L) => {
      L.key === "Escape" && o();
    };
    document.addEventListener("keydown", y);
    const I = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => h.current?.focus(), 0), () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = I;
    };
  }, [o]);
  const l = (y) => {
    y.target === y.currentTarget && o();
  }, P = (y) => {
    y.preventDefault(), s();
  };
  return /* @__PURE__ */ t.jsx(xn, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    fn,
    {
      ref: h,
      $width: w,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Ie, { children: [
          /* @__PURE__ */ t.jsx(Re, { children: e }),
          /* @__PURE__ */ t.jsx(gn, { type: "button", onClick: o, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        v ? /* @__PURE__ */ t.jsx(bn, { children: v }) : null,
        /* @__PURE__ */ t.jsxs(mn, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(wn, { children: r }),
          /* @__PURE__ */ t.jsxs(vn, { children: [
            /* @__PURE__ */ t.jsx(yn, { children: f ? null : /* @__PURE__ */ t.jsx(jn, { isPrimary: !1, onClick: P, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(kn, { children: !c && !k ? /* @__PURE__ */ t.jsx(
              Cn,
              {
                type: "submit",
                disabled: d || u,
                children: u ? "Сохранение..." : x
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, xn = n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, fn = n.div`
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
`, gn = n.button`
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
`, bn = n.div`
  padding: 12px 18px 0 18px;
`, mn = n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, wn = n.div`
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
`, vn = n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, yn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, kn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, jn = n(Ee)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, Cn = n(Ee)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, $n = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], wi = ({
  value: e = "",
  placeholder: o = "Выберите период",
  options: s = $n,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: d
}) => {
  const [u, m] = F(!1), [k, f] = F(!1), [w, x] = F(""), [v, c] = F(""), [h, l] = F(""), P = Z(null), y = Z(null);
  U(() => {
    if (e === "Custom" && v && h) {
      const T = R(v), z = R(h);
      x(`С ${T} по ${z}`);
    } else {
      const T = s.find((z) => z.value === e);
      x(T ? T.label : "");
    }
  }, [e, s, v, h]), U(() => {
    const T = (z) => {
      P.current && !P.current.contains(z.target) && m(!1), k && y.current && !y.current.contains(z.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((g) => g.contains(z.target)) || f(!1));
    };
    return document.addEventListener("mousedown", T), () => {
      document.removeEventListener("mousedown", T);
    };
  }, [k]);
  const I = (T) => {
    r?.(T.value), m(!1);
  }, L = () => {
    m(!1), d ? d() : f(!0);
  }, A = () => {
    r?.(""), x(""), c(""), l("");
  }, B = () => {
    if (v && h) {
      const T = R(v), z = R(h), W = `С ${T} по ${z}`;
      r?.("Custom", v, h), x(W), f(!1);
    }
  }, R = (T) => {
    const z = new Date(T), W = String(z.getDate()).padStart(2, "0"), _ = String(z.getMonth() + 1).padStart(2, "0"), g = z.getFullYear();
    return `${W}.${_}.${g}`;
  }, Y = () => /* @__PURE__ */ t.jsxs(Fn, { children: [
    /* @__PURE__ */ t.jsx(Ie, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Re, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(An, { onClick: A, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Mn, { ref: P, children: [
      /* @__PURE__ */ t.jsxs(Sn, { onClick: () => m(!u), children: [
        /* @__PURE__ */ t.jsx(Dn, { children: w || o }),
        /* @__PURE__ */ t.jsx(Ln, { $isOpen: u, children: "▼" })
      ] }),
      u && /* @__PURE__ */ t.jsxs(Tn, { children: [
        s.map((T) => /* @__PURE__ */ t.jsxs(En, { onClick: () => I(T), $isSelected: e === T.value, children: [
          /* @__PURE__ */ t.jsx(Pn, { $isSelected: e === T.value, children: e === T.value && /* @__PURE__ */ t.jsx(In, {}) }),
          /* @__PURE__ */ t.jsx(Rn, { children: T.label })
        ] }, T.id)),
        i && /* @__PURE__ */ t.jsx(Bn, { onClick: L, children: "Другой период" })
      ] })
    ] }),
    k && /* @__PURE__ */ t.jsx("div", { ref: y, children: /* @__PURE__ */ t.jsx(
      hn,
      {
        title: "",
        onClose: () => f(!1),
        onCancel: () => f(!1),
        onSave: (T) => {
          T.preventDefault(), B();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(Y, {}),
        children: /* @__PURE__ */ t.jsxs(zn, { children: [
          /* @__PURE__ */ t.jsx(ve, { children: /* @__PURE__ */ t.jsx(ue, { value: v, onChange: (T) => c(T) }) }),
          /* @__PURE__ */ t.jsx(ve, { children: /* @__PURE__ */ t.jsx(ue, { value: h, onChange: (T) => l(T) }) })
        ] })
      }
    ) })
  ] });
}, Mn = n.div`
  position: relative;
  width: 245px;
`, Sn = n.div`
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
`, Dn = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Ln = n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, Tn = n.div`
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
`, En = n.div`
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
`, Pn = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, In = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Rn = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Bn = n.div`
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
`, zn = n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ve = n.div`
  flex: 1;
`, Fn = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, An = n.button`
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
`, vi = ({
  name: e,
  value: o,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: d = "8 (999) 500-50-50",
  customPlaceholder: u,
  tabIndex: m,
  disabled: k = !1,
  hasError: f = !1,
  errorMessage: w
}) => {
  const [x, v] = q.useState(!1), c = q.useRef(null), h = !!(u && !o && !x), l = (L) => {
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
    v(!1), i?.(L);
  }, I = (L) => {
    r?.(L);
  };
  return /* @__PURE__ */ t.jsxs(_n, { children: [
    /* @__PURE__ */ t.jsx(
      On,
      {
        ref: c,
        name: e,
        type: "tel",
        value: o,
        onChange: P,
        onKeyPress: I,
        placeholder: h ? "" : d,
        maxLength: 18,
        tabIndex: m,
        disabled: k,
        hasError: f,
        onFocus: () => v(!0),
        onBlur: y,
        inputMode: "tel"
      }
    ),
    u && /* @__PURE__ */ t.jsx(Nn, { isVisible: h, children: u }),
    f && w && /* @__PURE__ */ t.jsx(Yn, { children: w })
  ] });
}, _n = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, On = n.input`
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
`, Nn = n.label`
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
`, Yn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, yi = ({ tabs: e, activeTab: o, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const d = e.find((u) => u.id === o)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Wn, { children: /* @__PURE__ */ t.jsxs(Hn, { children: [
      e.map((u) => /* @__PURE__ */ t.jsxs(Vn, { $isActive: o === u.id, onClick: () => s(u.id), $fontSize: r, children: [
        u.label,
        o === u.id && /* @__PURE__ */ t.jsx(Zn, {})
      ] }, u.id)),
      i && /* @__PURE__ */ t.jsx(Un, { children: i })
    ] }) }),
    d && /* @__PURE__ */ t.jsx(Xn, { children: d })
  ] });
}, Wn = n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Hn = n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Vn = n.li`
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
`, Zn = n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Un = n.li`
  margin-left: auto;
  padding: 4px 0;
`, Xn = n.div`
  margin-top: 20px;
`, ki = ({
  mode: e,
  primaryValue: o,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: d,
  disabled: u = !1,
  hasError: m = !1,
  errorMessage: k = "",
  customIcon: f
}) => {
  const x = f || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(Kn, { children: [
    /* @__PURE__ */ t.jsx(Qn, { children: o || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(eo, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(qn, { children: [
    /* @__PURE__ */ t.jsxs(Gn, { children: [
      /* @__PURE__ */ t.jsx(Jn, { type: "text", value: o || "", placeholder: i, readOnly: !0, disabled: u }),
      o && !u && /* @__PURE__ */ t.jsx(no, { type: "button", onClick: d, "aria-label": "Очистить", children: "×" })
    ] }),
    !u && /* @__PURE__ */ t.jsx(to, { type: "button", onClick: r, "aria-label": "Выбрать", children: x }),
    m && k && /* @__PURE__ */ t.jsx(oo, { children: k })
  ] });
}, qn = n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Gn = n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Jn = n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, Kn = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, Qn = n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, eo = n.span`
  font-size: 13px;
  color: #666;
`, to = n.button`
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
`, no = n.button`
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
`, oo = n.div`
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
`, ji = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(ro, { children: [
  "Всего: ",
  e
] }) }), ro = n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, Ci = n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, $i = n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, io = n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, so = n.span`
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
`, ao = n.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, Mi = ({ checked: e, onChange: o, disabled: s }) => {
  const i = () => {
    s || o(!e);
  };
  return /* @__PURE__ */ t.jsxs(io, { children: [
    /* @__PURE__ */ t.jsx(ao, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(so, { checked: e, disabled: s })
  ] });
}, Si = ({ id: e, name: o, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(lo, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(co, { type: "radio", id: e, name: o, checked: s, onChange: i }),
  r
] }), lo = n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, co = n.input`
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
`, Di = ({
  percentage: e,
  onChange: o,
  draggable: s = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const r = Z(null), [d, u] = F(!1), m = (x) => {
    !s || !o || (x.preventDefault(), u(!0), w(x));
  }, k = (x) => {
    !d || !o || w(x);
  }, f = () => {
    u(!1);
  }, w = (x) => {
    if (!r.current || !o) return;
    const v = r.current.getBoundingClientRect();
    let h = (x.clientX - v.left) / v.width * 100;
    h = Math.max(0, Math.min(100, h)), o(Math.round(h));
  };
  return U(() => {
    if (d)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", f);
      };
  }, [d]), /* @__PURE__ */ t.jsxs(po, { ref: r, $draggable: s, onMouseDown: m, children: [
    /* @__PURE__ */ t.jsx(uo, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(ho, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(xo, { $percentage: e, $primaryColor: i.primary })
  ] });
}, po = n.div`
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
`, uo = n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, ho = n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, xo = n.div`
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
`, fo = ["zoomControl", "fullscreenControl"];
let ie = null;
const go = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((o, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => o(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Li = ({
  onLocationSelect: e,
  initialAddress: o = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: d = 12,
  height: u = 400,
  width: m = "100%",
  inputPlaceholder: k = "Введите адрес или название места",
  searchButtonLabel: f = "Найти",
  draggablePlacemark: w = !0,
  controls: x = fo,
  showSearch: v = !0,
  className: c,
  style: h,
  onError: l
}) => {
  const [P, y] = F(null), [I, L] = F(o), [A, B] = F(o), [R, Y] = F(!1), T = Z(null);
  U(() => {
    let _ = !1, g;
    return (async () => {
      try {
        const M = await go(r);
        if (_ || !T.current) return;
        g = new M.Map(T.current, {
          center: [s, i],
          zoom: d,
          controls: x
        });
        const D = new M.Placemark([s, i], {}, { draggable: w });
        g.geoObjects.add(D), g.events.add("click", (N) => {
          const E = N.get("coords");
          z(E, D, g);
        }), D.events.add("dragend", () => {
          const N = D.geometry.getCoordinates();
          z(N, D, g);
        }), y(g), Y(!0);
      } catch (M) {
        l && M instanceof Error && l(M);
      }
    })(), () => {
      _ = !0, g && g.destroy();
    };
  }, [r, s, i, d, x, w, l]);
  const z = async (_, g, p) => {
    if (window.ymaps)
      try {
        const N = (await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();
        g.geometry.setCoordinates(_), p.panTo(_, { flying: !0 }), B(N), L(N), e(N, _[0], _[1]);
      } catch (M) {
        l && M instanceof Error && l(M);
      }
  }, W = async () => {
    if (!(!I.trim() || !window.ymaps || !P))
      try {
        const g = (await window.ymaps.geocode(I)).geoObjects.get(0);
        if (g) {
          const p = g.geometry.getCoordinates(), M = g.properties.get("boundedBy");
          P.setBounds(M, { checkZoomRange: !0 });
          const D = new window.ymaps.Placemark(p, {}, { draggable: w });
          P.geoObjects.removeAll(), P.geoObjects.add(D);
          const N = g.getAddressLine();
          B(N), e(N, p[0], p[1]), D.events.add("dragend", () => {
            const E = D.geometry.getCoordinates();
            z(E, D, P);
          });
        }
      } catch (_) {
        l && _ instanceof Error && l(_);
      }
  };
  return /* @__PURE__ */ t.jsxs(bo, { className: c, style: h, children: [
    v && /* @__PURE__ */ t.jsxs(mo, { children: [
      /* @__PURE__ */ t.jsx(
        nn,
        {
          type: "text",
          value: I,
          onChange: (_) => L(_.target.value),
          placeholder: k,
          onKeyPress: (_) => _.key === "Enter" && W(),
          disabled: !R
        }
      ),
      /* @__PURE__ */ t.jsx(wo, { onClick: W, disabled: !R, children: f })
    ] }),
    /* @__PURE__ */ t.jsxs(yo, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: A || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(vo, { ref: T, $height: u, $width: m }),
    /* @__PURE__ */ t.jsx(ko, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, bo = n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, mo = n.div`
  display: flex;
  gap: 8px;
`, wo = n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, vo = n.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, yo = n.div`
  font-size: 14px;
  color: #374151;
`, ko = n.div`
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
function Ti(e) {
  if (!e) return 0;
  const o = e.replace(/\D/g, "");
  return parseInt(o, 10);
}
const Ei = ({ title: e, data: o, maxValue: s, step: i, height: r = 300, titleFontSize: d }) => {
  const [u, m] = F(null), k = [];
  for (let w = 0; w <= s; w += i)
    k.push(w);
  const f = o.length > 0 ? o[0].bars.map((w) => ({ name: w.name, color: w.color })) : [];
  return /* @__PURE__ */ t.jsxs(jo, { children: [
    /* @__PURE__ */ t.jsxs(Be, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(ze, { style: { fontSize: d }, children: e }),
      /* @__PURE__ */ t.jsx(Co, { children: f.map((w, x) => /* @__PURE__ */ t.jsxs($o, { children: [
        /* @__PURE__ */ t.jsx(Mo, { color: w.color }),
        /* @__PURE__ */ t.jsx(So, { children: w.name })
      ] }, x)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Do, { height: r, children: [
      /* @__PURE__ */ t.jsx(Lo, { children: k.map((w, x) => /* @__PURE__ */ t.jsx(To, { children: w.toLocaleString() }, x)) }),
      /* @__PURE__ */ t.jsxs(Eo, { children: [
        /* @__PURE__ */ t.jsxs(Po, { children: [
          k.map((w, x) => {
            const v = w / s * 100;
            return /* @__PURE__ */ t.jsx(Io, { position: 100 - v }, `line-${x}`);
          }),
          o.map((w, x) => /* @__PURE__ */ t.jsxs(Ro, { onMouseEnter: () => m(x), onMouseLeave: () => m(null), children: [
            w.bars.map((v, c) => {
              const h = w.bars.slice(c + 1).reduce((l, P) => l + P.value, 0);
              return /* @__PURE__ */ t.jsx(
                Bo,
                {
                  height: v.value / s * 100,
                  offset: h / s * 100,
                  color: v.color,
                  isHovered: u !== null && u !== x
                },
                c
              );
            }),
            u === x && /* @__PURE__ */ t.jsxs(Ao, { children: [
              /* @__PURE__ */ t.jsxs(_o, { children: [
                /* @__PURE__ */ t.jsxs(Oo, { children: [
                  "Всего: ",
                  ye(w.total.toString())
                ] }),
                w.bars.map((v, c) => /* @__PURE__ */ t.jsxs(No, { children: [
                  v.name,
                  ": ",
                  ye(v.value.toString())
                ] }, c))
              ] }),
              /* @__PURE__ */ t.jsx(Yo, {})
            ] })
          ] }, x))
        ] }),
        /* @__PURE__ */ t.jsx(zo, { children: o.map((w, x) => /* @__PURE__ */ t.jsx(Fo, { style: { flex: 1, textAlign: "center" }, children: w.label }, x)) })
      ] })
    ] })
  ] });
}, jo = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Co = n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, $o = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Mo = n.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, So = n.span`
  font-size: 14px;
  color: #4b5563;
`, Do = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Lo = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, To = n.span`
  font-size: 12px;
  color: #6b7280;
`, Eo = n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Po = n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, Io = n.div`
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
`, Ro = n.div`
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
`, Bo = n.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, zo = n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, Fo = n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, Ao = n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, _o = n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, Oo = n.div`
  font-weight: 600;
  margin-bottom: 6px;
`, No = n.div`
  margin-bottom: 2px;
`, Yo = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Wo = Ne`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Pi = ({
  title: e,
  data: o,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: d,
  minY: u,
  xStep: m,
  yStep: k,
  height: f = 300,
  showLegend: w = !0,
  xAxisCustomLabels: x,
  showTooltip: v = !0,
  titleFontSize: c = "30px"
}) => {
  const [h, l] = F(null), [P, y] = F({ x: 0, y: 0 }), I = Z(null), L = Z(null), A = Math.max(...o.map((g) => g.x), r), B = [];
  for (let g = 0; g <= A; g += m)
    B.push(g);
  const R = [];
  for (let g = u; g <= d; g += k)
    R.push(g);
  const Y = x || B.map((g) => g.toString()), T = w ? Array.from(new Set(o.filter((g) => g.label).map((g) => g.label))).map((g) => {
    const p = o.find((M) => M.label === g);
    return { name: g, color: p.color };
  }) : [], z = {};
  o.forEach((g) => {
    const p = g.label || "default";
    z[p] || (z[p] = []), z[p].push(g);
  });
  const W = (g) => g / A * 100, _ = (g) => {
    const p = d - u;
    return 100 - (g - u) / p * 100;
  };
  return U(() => {
    if (h && L.current) {
      const g = L.current.getBoundingClientRect(), p = W(h.x) / 100 * g.width, M = _(h.y) / 100 * g.height;
      y({
        x: p + g.left,
        y: M + g.top
      });
    }
  }, [h, r, d, u]), /* @__PURE__ */ t.jsxs(Ho, { children: [
    /* @__PURE__ */ t.jsxs(Be, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(ze, { style: { fontSize: c }, children: e }),
      w && T.length > 0 && /* @__PURE__ */ t.jsx(Vo, { children: T.map((g, p) => /* @__PURE__ */ t.jsxs(Zo, { children: [
        /* @__PURE__ */ t.jsx(Uo, { color: g.color }),
        /* @__PURE__ */ t.jsx(Xo, { children: g.name })
      ] }, p)) })
    ] }),
    /* @__PURE__ */ t.jsxs(qo, { height: f, children: [
      /* @__PURE__ */ t.jsxs(Go, { children: [
        R.map((g, p) => /* @__PURE__ */ t.jsx(Jo, { children: g.toLocaleString() }, p)),
        /* @__PURE__ */ t.jsx(ke, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Ko, { ref: L, children: [
        R.map((g, p) => /* @__PURE__ */ t.jsx(Qo, { position: _(g) }, `hline-${p}`)),
        Object.values(z).map((g, p) => g.map((M, D) => {
          if (D === 0) return null;
          const N = g[D - 1], E = W(N.x), V = _(N.y), b = W(M.x), j = _(M.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${E}%`, y1: `${V}%`, x2: `${b}%`, y2: `${j}%`, stroke: M.color, strokeWidth: "1" })
            },
            `line-${p}-${D}`
          );
        })),
        o.map((g, p) => /* @__PURE__ */ t.jsx(
          er,
          {
            x: W(g.x),
            y: _(g.y),
            color: g.color,
            onMouseEnter: () => l(g),
            onMouseLeave: () => l(null),
            isHovered: h?.label === g.label
          },
          p
        ))
      ] })
    ] }),
    v && h && /* @__PURE__ */ t.jsxs(or, { ref: I, style: { left: P.x, top: P.y }, children: [
      /* @__PURE__ */ t.jsxs(rr, { children: [
        h.name && /* @__PURE__ */ t.jsx(ir, { children: h.name }),
        /* @__PURE__ */ t.jsx(sr, { children: h.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(ar, {})
    ] }),
    /* @__PURE__ */ t.jsxs(tr, { children: [
      Y.map((g, p) => {
        const D = B[p] / A * 100;
        return /* @__PURE__ */ t.jsx(nr, { style: { left: `${D}%`, transform: "translateX(-50%)" }, children: g }, p);
      }),
      s && /* @__PURE__ */ t.jsx(ke, { children: s })
    ] })
  ] });
}, Ho = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Vo = n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Zo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Uo = n.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Xo = n.span`
  font-size: 14px;
  color: #4b5563;
`, qo = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Go = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Jo = n.span`
  font-size: 12px;
  color: #6b7280;
`, ke = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, Ko = n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, Qo = n.div`
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
`, er = n.div`
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
`, tr = n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, nr = n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, or = n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${Wo} 0.15s ease-out forwards;
`, rr = n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, ir = n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, sr = n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, ar = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, Ii = ({ images: e, initialIndex: o, onClose: s }) => {
  const [i, r] = F(o), [d, u] = F(0), m = () => {
    r((x) => x > 0 ? x - 1 : e.length - 1), u(0);
  }, k = () => {
    r((x) => x < e.length - 1 ? x + 1 : 0), u(0);
  }, f = () => {
    u((x) => (x + 90) % 360);
  }, w = (x) => {
    x.key === "Escape" ? s() : x.key === "ArrowLeft" ? m() : x.key === "ArrowRight" ? k() : (x.key === "r" || x.key === "к") && f();
  };
  return /* @__PURE__ */ t.jsx(lr, { onClick: s, onKeyDown: w, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(cr, { onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(dr, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(pr, { children: /* @__PURE__ */ t.jsx(ur, { onClick: f, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(hr, { children: [
      /* @__PURE__ */ t.jsx(je, { $position: "left", onClick: m, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(xr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: d }),
      /* @__PURE__ */ t.jsx(je, { $position: "right", onClick: k, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(fr, { children: e.map((x, v) => /* @__PURE__ */ t.jsx(
      gr,
      {
        $active: v === i,
        onClick: () => {
          r(v), u(0);
        }
      },
      v
    )) })
  ] }) });
}, lr = n.div`
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
`, cr = n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, dr = n.button`
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
`, pr = n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, ur = n.button`
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
`, hr = n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, xr = n.img`
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
`, fr = n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, gr = n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, br = ({ isOpen: e, callPhone: o, error: s, onClose: i }) => {
  const [r, d] = F(!1);
  if (!e) return null;
  const u = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), m = () => {
    u ? window.location.href = `tel:${o}` : (navigator.clipboard.writeText(o), d(!0), setTimeout(() => d(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(mr, { onClick: i, children: /* @__PURE__ */ t.jsxs(wr, { onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(vr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Ce, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      yr,
      {
        onClick: m,
        title: u ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          o,
          !u && r && /* @__PURE__ */ t.jsx(kr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Ce, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    s && /* @__PURE__ */ t.jsx(jr, { children: s })
  ] }) });
}, mr = n.div`
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
`, wr = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, vr = n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Ce = n.p`
  margin-bottom: 15px;
  color: #555;
`, yr = n.div`
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
`, kr = n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, jr = n.div`
  color: #e74c3c;
  margin: 10px 0;
`, Cr = Ae({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), Ri = ({
  items: e,
  bottomItems: o = [],
  logo: s,
  arrowIcon: i,
  collapsed: r,
  onToggle: d,
  selectedKey: u,
  onSelect: m,
  autoCollapseOnSelect: k = !1,
  width: f = "315px",
  collapsedWidth: w = "70px",
  className: x,
  style: v
}) => {
  const c = _e(Cr), [h, l] = F(
    r ?? c.collapsed ?? !1
  ), [P, y] = F(null), [I, L] = F(
    u ?? c.selectedSideMenuItem ?? null
  ), [A, B] = F({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), R = Z(null), Y = r ?? c.collapsed ?? h, T = (E) => {
    l(E), c.toggleCollapsed(), d?.(E);
  }, z = u ?? c.selectedSideMenuItem ?? I, W = (E) => {
    L(E), c.setSelectedSideMenuItem(E);
  };
  U(() => {
    r !== void 0 && (l(r), r && y(null));
  }, [r]), U(() => {
    u !== void 0 && W(u);
  }, [u]), U(() => {
    const E = () => B((V) => ({ ...V, visible: !1 }));
    return document.addEventListener("click", E), () => document.removeEventListener("click", E);
  }, []);
  const _ = () => {
    const E = !Y;
    T(E), E && y(null);
  }, g = (E) => {
    E.disabled || E.hidden || (W(E.key), m?.(E), E.onClick?.(E), k && (T(!0), y(null)));
  }, p = (E) => {
    y((V) => V === E ? null : E);
  }, M = (E, V) => {
    const b = (E.children?.length || 0) > 0;
    if (Y && b) {
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
    b ? p(E.key) : g(E);
  }, D = (E, V = !1) => E.filter((b) => !b.hidden).map((b) => {
    const j = (b.children?.length || 0) > 0, a = P === b.key, C = z === b.key || !!b.children && b.children.some(($) => $.key === z);
    return /* @__PURE__ */ t.jsxs(q.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Er,
        {
          $collapsed: Y,
          $selected: C,
          onClick: ($) => M(b, $),
          $disabled: b.disabled,
          title: b.label,
          children: [
            b.icon && /* @__PURE__ */ t.jsx(Ir, { $collapsed: Y, children: b.icon }),
            !Y && /* @__PURE__ */ t.jsx(Pr, { children: b.label }),
            !Y && j && /* @__PURE__ */ t.jsx(Br, { $expanded: a, children: "▾" })
          ]
        }
      ),
      !Y && j && a && /* @__PURE__ */ t.jsx(Rr, { children: D(b.children || [], !0) })
    ] }, b.key);
  }), N = Oe(() => A.visible ? /* @__PURE__ */ t.jsx(Fr, { style: { left: A.x, top: A.y }, children: A.items.map((E) => /* @__PURE__ */ t.jsx(
    Ar,
    {
      onClick: () => {
        g(E), B({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: z === E.key,
      children: E.label
    },
    E.key
  )) }) : null, [A, z]);
  return /* @__PURE__ */ t.jsxs(
    $r,
    {
      ref: R,
      $collapsed: Y,
      $width: f,
      $collapsedWidth: w,
      className: x,
      style: v,
      children: [
        /* @__PURE__ */ t.jsxs(Mr, { children: [
          /* @__PURE__ */ t.jsx(Sr, { onClick: _, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx(Dr, { $collapsed: Y, children: "❮" }) }),
          !Y && s && /* @__PURE__ */ t.jsx(Lr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(Tr, { children: [
          /* @__PURE__ */ t.jsx($e, { children: D(e) }),
          o.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(zr, {}),
            /* @__PURE__ */ t.jsx($e, { children: D(o) })
          ] })
        ] }),
        N,
        /* @__PURE__ */ t.jsx(_r, { $collapsed: Y })
      ]
    }
  );
}, $r = n.div`
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
`, Mr = n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`, Sr = n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`, Dr = n.span`
  display: inline-block;
  transform: rotate(${({ $collapsed: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`, Lr = n.div`
  flex: 1;
  display: flex;
  align-items: center;
`, Tr = n.div`
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
`, Er = n.div`
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
`, Pr = n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Ir = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({ $collapsed: e }) => e ? "24px" : "21px"};
`, Rr = n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Br = n.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, zr = n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Fr = n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, Ar = n.div`
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
`, _r = n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Or = (e) => {
  const o = e.replace(/\D/g, ""), i = (o.startsWith("8") || o.length === 0 ? o : `8${o}`).slice(0, 11);
  let r = "";
  return i.length > 0 && (r += "8"), i.length > 1 && (r += ` (${i.slice(1, 4)}`), i.length > 4 && (r += `) ${i.slice(4, 7)}`), i.length > 7 && (r += `-${i.slice(7, 9)}`), i.length > 9 && (r += `-${i.slice(9, 11)}`), r;
}, Nr = ({ value: e, onChange: o, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (d) => {
    const u = Or(d.target.value);
    o(u);
  };
  return /* @__PURE__ */ t.jsx(Yr, { type: "text", value: e, onChange: r, placeholder: s, maxLength: 18, tabIndex: i });
}, Yr = n.input`
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
`, Me = (e, o) => te("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: o
  }
}), Wr = (e, o, s, i) => te("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: o,
    user_type: s,
    name: i
  }
}), Bi = () => te("/auth/session/info", { method: "GET" }), zi = ({
  onLoginSuccess: e,
  userType: o = "delivery_operator",
  title: s = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: r = "8 (xxx) xxx-xx-xx",
  supportPhone: d = "8 989 924 24 24",
  supportLinkUrl: u = "https://waypay.one",
  supportLinkText: m = "waypay.one",
  className: k,
  style: f,
  pollingIntervalMs: w = 3e3,
  enableRegistration: x = !1
}) => {
  const [v, c] = F(!1), [h, l] = F(""), [P, y] = F(!1), [I, L] = F(""), [A, B] = F(""), [R, Y] = F(!1), [T, z] = F(!1), [W, _] = F(""), [g, p] = F(""), [M, D] = F(null), N = Z(void 0);
  U(() => () => {
    N.current && clearInterval(N.current);
  }, []);
  const E = ($) => {
    const S = $.replace(/\D/g, "");
    return S ? S.startsWith("8") ? `+7${S.slice(1)}` : S.startsWith("7") ? `+${S}` : `+${S}` : "";
  }, V = () => {
    y(!1), z(!1), _(""), p(""), D(null), N.current && window.clearInterval(N.current);
  }, b = async ($) => {
    if ($.preventDefault(), !h) {
      B("Введите номер телефона");
      return;
    }
    c(!0), B("");
    const S = E(h);
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
      c(!1);
    }
  }, j = async ($) => {
    if ($.preventDefault(), !W.trim()) {
      p("Введите ФИО");
      return;
    }
    if (M) {
      c(!0), p("");
      try {
        const S = await Me(
          M.phone,
          o
        );
        L(S.call_phone), z(!1), y(!0), a(M.phone, S.check_id);
      } catch (S) {
        console.error("Registration error:", S), p("Не удалось завершить регистрацию");
      } finally {
        c(!1);
      }
    }
  }, a = ($, S) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(() => {
      C($, S);
    }, w);
  }, C = async ($, S) => {
    if (!R) {
      Y(!0);
      try {
        const O = await Wr($, S, o, W.trim());
        O.access_token && O.refresh_token && (N.current && window.clearInterval(N.current), y(!1), z(!1), _(""), D(null), e(O.access_token));
      } catch (O) {
        console.error("Verification error:", O), B("Ошибка проверки авторизации");
      } finally {
        Y(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(Hr, { className: k, style: f, children: [
    /* @__PURE__ */ t.jsxs(Vr, { children: [
      /* @__PURE__ */ t.jsxs(Zr, { onSubmit: T ? j : b, children: [
        /* @__PURE__ */ t.jsx(Ur, { children: T ? "Регистрация" : s }),
        T ? /* @__PURE__ */ t.jsxs(Se, { children: [
          /* @__PURE__ */ t.jsx(De, { children: /* @__PURE__ */ t.jsx(
            Xr,
            {
              type: "text",
              value: W,
              onChange: ($) => _($.target.value),
              placeholder: "Введите ФИО",
              disabled: v,
              autoFocus: !0
            }
          ) }),
          g && /* @__PURE__ */ t.jsx(ti, { children: g })
        ] }) : /* @__PURE__ */ t.jsx(Se, { children: /* @__PURE__ */ t.jsx(De, { children: /* @__PURE__ */ t.jsx(
          Nr,
          {
            value: h,
            onChange: ($) => l($),
            placeholder: r
          }
        ) }) }),
        (A || g) && /* @__PURE__ */ t.jsx(ei, { children: /* @__PURE__ */ t.jsx("span", { children: A || g }) }),
        /* @__PURE__ */ t.jsx(qr, { type: "submit", disabled: v, children: v ? "Загрузка..." : T ? "Продолжить" : i }),
        T && /* @__PURE__ */ t.jsx(
          Gr,
          {
            type: "button",
            onClick: () => {
              z(!1), _(""), p(""), D(null);
            },
            disabled: v,
            children: "← Назад"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs(Jr, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(Kr, { href: `tel:${d}`, children: d }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(Qr, { href: u, target: "_blank", rel: "noreferrer", children: m })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      br,
      {
        isOpen: P,
        onClose: V,
        callPhone: I,
        error: A
      }
    )
  ] });
}, Hr = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`, Vr = n.div`
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
`, Zr = n.form`
  display: flex;
  flex-direction: column;
`, Ur = n.h1`
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
`, Xr = n.input`
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
`, qr = n.button`
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
`, Gr = n.button`
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
`, Jr = n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, Kr = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Qr = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, ei = n.div`
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
`, ti = n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`, ni = (e) => {
  let o = 0;
  for (let i = 0; i < e.length; i++)
    o = e.charCodeAt(i) + ((o << 5) - o);
  return `hsl(${Math.abs(o % 360)}, 60%, 60%)`;
}, Fi = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Ai = (e, o = 100) => {
  const s = document.createElement("canvas");
  s.width = o, s.height = o;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = ni(e);
  i.fillStyle = r, i.beginPath(), i.arc(o / 2, o / 2, o / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const d = o / 2;
  i.font = `bold ${d}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const u = d * 0.1;
  return i.fillText(e, o / 2, o / 2 + u), s.toDataURL("image/png");
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
const oi = (e) => {
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
      const w = Math.floor((o.getTime() - s.getTime()) / 1e3), x = Math.floor(w / 60), v = Math.floor(x / 60), c = Math.floor(v / 24);
      return w < 10 ? "скоро" : w < 60 ? `через ${w} секунд` : x === 1 ? "через минуту" : x < 60 ? `через ${x} минут` : v === 1 ? "через час" : v < 24 ? `через ${v} часов` : c === 1 ? "завтра" : c < 7 ? `через ${c} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - o.getTime()) / 1e3), r = Math.floor(i / 60), d = Math.floor(r / 60), u = Math.floor(d / 24), m = Math.floor(u / 7), k = Math.floor(u / 30), f = Math.floor(u / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const w = Math.max(1, i);
      return w === 1 ? "секунду назад" : w < 5 ? `${w} секунды назад` : `${w} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : d < 24 ? d === 1 ? "час назад" : d < 5 ? `${d} часа назад` : `${d} часов назад` : u < 7 ? u === 1 ? "вчера" : u === 2 ? "позавчера" : `${u} дня назад` : m < 4 ? m === 1 ? "неделю назад" : m < 5 ? `${m} недели назад` : `${m} недель назад` : k < 12 ? k === 1 ? "месяц назад" : k < 5 ? `${k} месяца назад` : `${k} месяцев назад` : f === 1 ? "год назад" : f < 5 ? `${f} года назад` : `${f} лет назад`;
  } catch (s) {
    return console.error("Ошибка форматирования относительного времени:", s), "ошибка даты";
  }
}, ri = (e) => {
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
  return isNaN(r.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= s ? i ? ri(r) : r.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : oi(r);
};
export {
  Te as API_BASE_URL,
  ci as AddButton,
  br as AuthCallModal,
  zi as AuthPage,
  pi as BackButton,
  hn as BaseModal,
  gi as Checkbox,
  Ei as ColumnChart,
  Le as ContextMenu,
  ji as CountInfoTitle,
  ue as CustomCalendar,
  nn as CustomInput,
  Nr as CustomPhoneInput,
  fi as CustomSelect,
  li as CustomTable,
  mi as CustomTextArea,
  ze as CustomTitle,
  Ee as DefaultButton,
  ui as DeleteButton,
  hi as EditButton,
  ki as EntitySelectContainer,
  xi as ExportButton,
  Ci as InputTitle,
  $i as ModalInfoTitle,
  bi as Pagination,
  wi as PeriodField,
  vi as PhoneModalInput,
  Ii as PhotoViewerModal,
  Di as ProgressBar,
  Si as RadioButton,
  Pi as ScatterPlot,
  Ri as SideMenu,
  Cr as SideMenuContext,
  yi as Tabs,
  Be as TitleField,
  Mi as ToggleSwitch,
  Li as YandexMapSelector,
  te as apiRequest,
  di as authStorage,
  Wr as confirmCallAuth,
  _i as formatDate,
  ri as formatExactDate,
  ye as formatMoney,
  oi as formatRelativeTime,
  Ni as formatRelativeTimeExtended,
  Ai as generateAvatar,
  Fi as getInitials,
  Bi as getSessionInfo,
  Me as initiateCallAuth,
  Oi as parseDateInput,
  Ti as parseMoney,
  ni as stringToColor
};
