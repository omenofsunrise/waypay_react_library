import q, { useRef as U, useState as B, useEffect as X, createContext as ze, useContext as Be, useMemo as Fe } from "react";
import o, { keyframes as Ae } from "styled-components";
import { motion as J, AnimatePresence as se } from "framer-motion";
var oe = { exports: {} }, K = {};
var ae;
function _e() {
  if (ae) return K;
  ae = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, c) {
    var p = null;
    if (c !== void 0 && (p = "" + c), r.key !== void 0 && (p = "" + r.key), "key" in r) {
      c = {};
      for (var g in r)
        g !== "key" && (c[g] = r[g]);
    } else c = r;
    return r = c.ref, {
      $$typeof: e,
      type: i,
      key: p,
      ref: r !== void 0 ? r : null,
      props: c
    };
  }
  return K.Fragment = n, K.jsx = s, K.jsxs = s, K;
}
var Q = {};
var le;
function Oe() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === _ ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case E:
          return "Fragment";
        case T:
          return "Profiler";
        case y:
          return "StrictMode";
        case I:
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
          case z:
            var C = a.render;
            return a = a.displayName, a || (a = C.displayName || C.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case R:
            return C = a.displayName || null, C !== null ? C : e(a.type) || "Memo";
          case F:
            C = a._payload, a = a._init;
            try {
              return e(a(C));
            } catch {
            }
        }
      return null;
    }
    function n(a) {
      return "" + a;
    }
    function s(a) {
      try {
        n(a);
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
        ), n(a);
      }
    }
    function i(a) {
      if (a === E) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === F)
        return "<...>";
      try {
        var C = e(a);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = w.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (u.call(a, "key")) {
        var C = Object.getOwnPropertyDescriptor(a, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function g(a, C) {
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
      return P[a] || (P[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function f(a, C, $, S, O, Z) {
      var H = $.ref;
      return a = {
        $$typeof: x,
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
        value: Z
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function m(a, C, $, S, O, Z) {
      var H = C.children;
      if (H !== void 0)
        if (S)
          if (M(H)) {
            for (S = 0; S < H.length; S++)
              h(H[S]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(H);
      if (u.call(C, "key")) {
        H = e(a);
        var G = Object.keys(C).filter(function(Re) {
          return Re !== "key";
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
        for (var ne in C)
          ne !== "key" && ($[ne] = C[ne]);
      } else $ = C;
      return H && g(
        $,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), f(
        a,
        H,
        $,
        r(),
        O,
        Z
      );
    }
    function h(a) {
      v(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === F && (a._payload.status === "fulfilled" ? v(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function v(a) {
      return typeof a == "object" && a !== null && a.$$typeof === x;
    }
    var d = q, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), I = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), w = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, u = Object.prototype.hasOwnProperty, M = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var N, P = {}, V = d.react_stack_bottom_frame.bind(
      d,
      c
    )(), b = D(i(c)), j = {};
    Q.Fragment = E, Q.jsx = function(a, C, $) {
      var S = 1e4 > w.recentlyCreatedOwnerStacks++;
      return m(
        a,
        C,
        $,
        !1,
        S ? Error("react-stack-top-frame") : V,
        S ? D(i(a)) : b
      );
    }, Q.jsxs = function(a, C, $) {
      var S = 1e4 > w.recentlyCreatedOwnerStacks++;
      return m(
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
function Ne() {
  return ce || (ce = 1, process.env.NODE_ENV === "production" ? oe.exports = _e() : oe.exports = Oe()), oe.exports;
}
var t = Ne();
const Me = ({ x: e, y: n, items: s, onClose: i, ...r }) => {
  const c = U(null), [p, g] = B(null);
  X(() => {
    const d = (x) => {
      c.current && !c.current.contains(x.target) && i();
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, [i]);
  const f = (() => {
    if (!c.current) return { x: e, y: n };
    const d = c.current.offsetWidth, x = c.current.offsetHeight, l = window.innerWidth, E = window.innerHeight;
    let y = e, T = n;
    return y + d > l && (y = e - d), T + x > E && (T = n - x), { x: y, y: T };
  })(), m = (d, x) => {
    d.submenu ? g(p === x ? null : x) : d.action && (d.action(), i());
  }, h = (d) => {
    s[d].submenu && g(d);
  }, v = (d) => {
    const x = d.relatedTarget;
    c.current?.contains(x) || g(null);
  };
  return /* @__PURE__ */ t.jsx(
    Ye,
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
      onClick: (d) => d.stopPropagation(),
      onMouseLeave: v,
      ...r,
      children: s.map((d, x) => /* @__PURE__ */ t.jsxs(We, { $hasSubmenu: !!d.submenu, $disabled: d.disabled, children: [
        /* @__PURE__ */ t.jsx(
          He,
          {
            onClick: (l) => {
              l.stopPropagation(), d.disabled || m(d, x);
            },
            onMouseEnter: () => !d.disabled && h(x),
            whileHover: d.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: d.color,
            $disabled: d.disabled,
            children: /* @__PURE__ */ t.jsxs(Ve, { children: [
              d.label,
              d.submenu && /* @__PURE__ */ t.jsx(Ze, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        d.submenu && p === x && /* @__PURE__ */ t.jsx(
          Ue,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Me, { x: 0, y: -x * 40, items: d.submenu, onClose: () => g(null) })
          }
        )
      ] }, x))
    }
  );
}, Ye = o(J.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, We = o.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, He = o(J.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: n }) => n ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Ve = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, Ze = o.span`
  color: #666;
  margin-left: 8px;
`, Ue = o(J.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, yi = ({
  columns: e,
  data: n,
  onRowDoubleClick: s,
  contextMenuActions: i = [],
  onSort: r,
  sortConfig: c,
  onRowClick: p,
  selectedRow: g,
  fixedHeight: k,
  hasTotalsRow: f,
  debtChecker: m,
  rowStyles: h = {},
  isLoading: v
}) => {
  const [d, x] = B(null), [l, E] = B(null), y = U(null), T = U(null), L = 500, A = g !== void 0 ? g : d, z = (b) => {
    !e[b].isSortable || !r || r(b);
  }, Y = m || ((b) => {
    const j = b[8];
    return typeof j == "string" ? parseFloat(j.replace(/[^\d.]/g, "")) > 0 : !1;
  }), R = (b) => {
    g === void 0 && x(b === A ? null : b), p && p(n[b], b);
  }, F = (b, j) => {
    s && s(b, j);
  }, W = (b, j) => {
    if (i.length === 0) return;
    b.preventDefault();
    const a = "touches" in b ? b.touches[0].clientX : b.clientX, C = "touches" in b ? b.touches[0].clientY : b.clientY;
    E({
      x: a,
      y: C,
      rowIndex: j
    });
  }, _ = (b, j) => {
    b.preventDefault(), W(b, j);
  }, w = (b, j) => {
    i.length !== 0 && (T.current && clearTimeout(T.current), T.current = window.setTimeout(() => {
      W(b, j);
    }, L));
  }, u = () => {
    T.current && (clearTimeout(T.current), T.current = null);
  }, M = () => {
    T.current && window.clearTimeout(T.current);
  }, D = () => {
    E(null);
  };
  X(() => {
    const b = () => {
      l && D();
    };
    return document.addEventListener("click", b), () => {
      document.removeEventListener("click", b), T.current && clearTimeout(T.current);
    };
  }, [l]);
  const N = (b, j, a) => {
    if (j)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const C = h[b] || {};
    return b === A ? {
      backgroundColor: C.backgroundColor || "#007D88",
      color: C.color || "#FFFFFF",
      fontWeight: C.fontWeight || "normal"
    } : a ? {
      backgroundColor: C.backgroundColor || "#E8D8D8",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    } : n[b][n[b].length - 1] === !1 ? {
      backgroundColor: C.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: C.fontWeight || "normal"
    } : {
      backgroundColor: C.backgroundColor || "#FFFFFF",
      color: C.color || "inherit",
      fontWeight: C.fontWeight || "normal"
    };
  }, P = (b, j, a) => {
    if (j) return "#FFFFFF";
    const C = N(b, j, a);
    return C.hoverBackgroundColor ? C.hoverBackgroundColor : b === A ? "#007D88" : a ? "#E8D8D8CC" : n[b][n[b].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, V = () => {
    if (!l || i.length === 0) return null;
    const b = (typeof i == "function" ? i(n[l.rowIndex]) : i).filter(
      (j) => typeof j == "object" && (typeof j.shouldShow != "function" || j.shouldShow(n[l.rowIndex]))
    );
    return b.length === 0 ? null : /* @__PURE__ */ t.jsx(
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
        onClick: (j) => j.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Me,
          {
            items: b.map((j) => {
              const a = {
                label: j.label,
                color: j.color,
                disabled: j.disabled
              };
              return j.getSubmenu ? a.submenu = j.getSubmenu(n[l.rowIndex]) : j.action && (a.action = () => {
                j.action(n[l.rowIndex], l.rowIndex), D();
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
  return /* @__PURE__ */ t.jsx(Ge, { ref: y, children: v ? /* @__PURE__ */ t.jsx(Xe, { children: /* @__PURE__ */ t.jsx(qe, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Je, { children: [
      /* @__PURE__ */ t.jsx(Qe, { children: /* @__PURE__ */ t.jsx(de, { children: e.map(
        (b, j) => !b.isHidden && /* @__PURE__ */ t.jsx(
          tt,
          {
            $isSortable: b.isSortable,
            $isActive: c?.key === j,
            onClick: () => z(j),
            $align: b.align || "center",
            $isFirst: j === 0,
            $isLast: j === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(ot, { $align: b.align || "center", children: [
              b.name,
              b.isSortable && /* @__PURE__ */ t.jsx(
                nt,
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
      /* @__PURE__ */ t.jsx(et, { $fixedHeight: k, children: /* @__PURE__ */ t.jsx(se, { children: n.map((b, j) => {
        const a = !!(f && j === n.length - 1), C = !!(!a && Y(b)), $ = N(j, a, C), S = P(j, a, C);
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
            $isLast: j === n.length - 1,
            $isSelected: j === A,
            $isTotalsRow: a,
            onClick: () => !a && R(j),
            onDoubleClick: () => !a && F(b, j),
            onContextMenu: (O) => !a && _(O, j),
            onTouchStart: (O) => !a && w(O, j),
            onTouchEnd: u,
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
              (O, Z) => !e[Z]?.isHidden && /* @__PURE__ */ t.jsx(
                rt,
                {
                  $align: e[Z]?.align || "center",
                  $isFirst: Z === 0,
                  $isLast: Z === b.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && Z < b.findIndex((H) => H === "Итого:"),
                  children: O
                },
                Z
              )
            )
          },
          `row-${j}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(se, { children: V() })
  ] }) });
}, Xe = o.div`
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
`, qe = o.div`
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
`, Ge = o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, Je = o.table`
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
`, Ke = o(J.div)`
  z-index: 1000;
  pointer-events: auto;
`, Qe = o.thead`
  text-align: center;
  position: relative;
`, et = o.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, de = o(J.tr)`
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
    display: ${({ $isLast: e, $isTotalsRow: n }) => e || n ? "none" : "block"};
  }
`, tt = o.th`
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
`, ot = o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, nt = o(J.span)`
  display: inline-flex;
  align-items: center;
`, rt = o.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: n }) => e || n ? "none" : "0.5px solid #d1d5db"};
`, ki = ({ onClick: e, tooltip: n, size: s = 32, margin: i }) => /* @__PURE__ */ t.jsx(it, { onClick: e, size: s, margin: i, title: n, children: /* @__PURE__ */ t.jsx(st, { size: s }) }), it = o.button`
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
`, st = o.div`
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
`, Se = "/api";
async function te(e, n = {}) {
  const {
    method: s = "GET",
    body: i,
    headers: r = {},
    token: c,
    withCredentials: p = !0
  } = n, g = async (f) => {
    const m = {
      "Content-Type": "application/json",
      ...r
    };
    f && (m.Authorization = `Bearer ${f}`);
    const h = e.startsWith("http") ? e : `${Se}${e}`;
    return await fetch(h, {
      method: s,
      headers: m,
      body: i ? JSON.stringify(i) : void 0,
      credentials: p ? "include" : "same-origin"
    });
  }, k = async (f, m = !0) => {
    const h = await g(f);
    if (h.ok) {
      if (h.status === 204)
        return null;
      const d = await h.text();
      if (!d) return null;
      try {
        return JSON.parse(d);
      } catch {
        return d;
      }
    }
    if (h.status === 401 && m) {
      const d = await at();
      if (d)
        return k(d, !1);
    }
    let v = `Request failed with status ${h.status}`;
    try {
      const d = await h.json();
      d && typeof d.error == "string" ? v = d.error : typeof d == "string" && (v = d);
    } catch {
      const d = await h.text();
      d && (v = d);
    }
    throw new Error(v);
  };
  return k(c);
}
async function at() {
  const e = await fetch(`${Se}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  if (!e.ok)
    return null;
  const n = await e.json();
  return n.access_token ? n.access_token : null;
}
const ji = {
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
}, lt = o.button`
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
`, Ci = ({ children: e, onClick: n }) => /* @__PURE__ */ t.jsxs(lt, { onClick: n, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "#50555C"
    }
  ) }),
  e
] }), De = ({
  children: e = "Подтвердить",
  icon: n,
  disabled: s = !1,
  bg: i,
  hoverBg: r,
  disabledBg: c,
  textColor: p,
  fullWidth: g = !1,
  minWidth: k,
  width: f,
  isPrimary: m = !0,
  ...h
}) => {
  const d = i ? {
    bg: i,
    hoverBg: r || i,
    disabledBg: c || i,
    textColor: p || (m ? "white" : "black")
  } : m ? {
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
    ct,
    {
      disabled: s,
      $bg: d.bg,
      $hoverBg: d.hoverBg,
      $disabledBg: d.disabledBg,
      $textColor: d.textColor,
      $fullWidth: g,
      $minWidth: k,
      $width: f,
      ...h,
      children: [
        n && /* @__PURE__ */ t.jsx(dt, { children: n }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, ct = o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled: e, $bg: n, $disabledBg: s }) => e ? s : n};
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
  width: ${({ $fullWidth: e, $width: n }) => e ? "100%" : n ? typeof n == "number" ? `${n}px` : n : "auto"};
  min-width: ${({ $minWidth: e }) => e || "auto"};

  &:hover {
    background-color: ${({ disabled: e, $hoverBg: n, $disabledBg: s }) => e ? s : n};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({ $bg: e }) => e === "rgba(209, 213, 219, 1)" ? "rgba(209, 233, 239, 1)" : "rgba(156, 163, 175, 0.5)"};
  }
`, dt = o.span`
  display: inline-flex;
  align-items: center;
`, $i = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(pt, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
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
) }), pt = o.button`
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
`, Mi = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(ut, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
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
) }), ut = o.button`
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
`, xt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), Si = ({
  children: e = "Экспорт",
  icon: n = /* @__PURE__ */ t.jsx(xt, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...c
}) => {
  const p = async (g) => {
    if (s)
      try {
        await s();
      } catch (k) {
        console.error("Export error:", k);
      }
    c.onClick && c.onClick(g);
  };
  return /* @__PURE__ */ t.jsx(ht, { ...c, onClick: p, disabled: i || c.disabled, children: i ? /* @__PURE__ */ t.jsxs(ft, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(gt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    n,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, ht = o.button`
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
`, ft = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, gt = o.div`
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
`, Di = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  options: p,
  name: g,
  disabled: k = !1,
  required: f = !1,
  ...m
}) => {
  const [h, v] = q.useState(!1), [d, x] = q.useState(!1), l = q.useRef(null), E = !!(n && !s && !h), y = (I) => {
    i && !k && i({
      target: { value: I, name: g }
    }), x(!1), v(!1);
  }, T = (I) => {
    l.current && !l.current.contains(I.target) && (x(!1), v(!1));
  }, L = () => {
    k || (x(!d), v(!d));
  };
  q.useEffect(() => (document.addEventListener("mousedown", T), () => {
    document.removeEventListener("mousedown", T);
  }), []);
  const A = p.find((I) => I.value === s), z = A ? A.label : "";
  return /* @__PURE__ */ t.jsxs(bt, { ref: l, ...m, children: [
    /* @__PURE__ */ t.jsxs(mt, { children: [
      /* @__PURE__ */ t.jsxs(
        wt,
        {
          hasError: r,
          isOpen: d,
          disabled: k,
          onClick: L,
          onFocus: () => !k && v(!0),
          onBlur: () => v(!1),
          tabIndex: k ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(vt, { children: z || e && /* @__PURE__ */ t.jsx(yt, { children: e }) }),
            /* @__PURE__ */ t.jsx(kt, { isOpen: d, disabled: k, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: k ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      d && /* @__PURE__ */ t.jsx(jt, { children: p.map((I) => /* @__PURE__ */ t.jsxs(Ct, { $isSelected: I.value === s, onClick: () => y(I.value), children: [
        /* @__PURE__ */ t.jsx($t, { $isSelected: I.value === s, children: I.value === s && /* @__PURE__ */ t.jsx(Mt, {}) }),
        /* @__PURE__ */ t.jsx(St, { children: I.label })
      ] }, I.value)) })
    ] }),
    n && /* @__PURE__ */ t.jsx(Dt, { isVisible: E, children: n }),
    r && c && /* @__PURE__ */ t.jsx(Lt, { children: c }),
    /* @__PURE__ */ t.jsx(Tt, { name: g, value: s || "", onChange: () => {
    }, tabIndex: -1, required: f, children: p.map((I) => /* @__PURE__ */ t.jsx("option", { value: I.value, children: I.label }, I.value)) })
  ] });
}, bt = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, mt = o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, wt = o.div`
  border: 1px solid
    ${({ hasError: e, isOpen: n, disabled: s }) => s ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : n ? "rgba(0, 125, 136, 1)" : "rgba(209, 213, 219, 1)"};
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
    border-color: ${({ hasError: e, disabled: n, isOpen: s }) => n ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }
`, vt = o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, yt = o.span`
  color: rgba(80, 85, 92, 1);
`, kt = o.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, jt = o.div`
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
`, Ct = o.div`
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
`, $t = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Mt = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, St = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Dt = o.label`
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
`, Lt = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Tt = o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, Li = ({ checked: e = !1, onChange: n, className: s, label: i, disabled: r = !1 }) => {
  const [c, p] = B(!1), g = () => {
    r || !n || n(!e);
  }, k = (f) => {
    r || (f.key === "Enter" || f.key === " ") && (f.preventDefault(), g());
  };
  return /* @__PURE__ */ t.jsxs(Pt, { className: s, onClick: g, onKeyPress: k, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      Et,
      {
        checked: e,
        isFocused: c,
        disabled: r,
        onMouseEnter: () => !r && p(!0),
        onMouseLeave: () => !r && p(!1),
        onFocus: () => !r && p(!0),
        onBlur: () => !r && p(!1),
        children: e && /* @__PURE__ */ t.jsx(Rt, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(It, { disabled: r, children: i })
  ] });
}, Pt = o.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, Et = o.div`
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
`, It = o.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, Rt = o.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, zt = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", pe = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Bt = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], ue = ({ prefix: e = "Дата:", value: n = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [c, p] = B(!1), [g, k] = B(/* @__PURE__ */ new Date()), [f, m] = B(n ? new Date(n) : null), [h, v] = B(!1), [d, x] = B(!1), l = U(null), E = U(null), y = U(null);
  X(() => {
    const u = (M) => {
      l.current && !l.current.contains(M.target) && p(!1), E.current && !E.current.contains(M.target) && v(!1), y.current && !y.current.contains(M.target) && x(!1);
    };
    return document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, []), X(() => {
    m(n ? new Date(n) : null);
  }, [n]);
  const T = (u) => {
    const M = new Date(Date.UTC(u.getFullYear(), u.getMonth(), u.getDate()));
    m(u);
    const D = M.toISOString().split("T")[0];
    i?.(D), p(!1);
  }, L = () => {
    const u = /* @__PURE__ */ new Date();
    k(u);
    const D = new Date(Date.UTC(u.getFullYear(), u.getMonth(), u.getDate())).toISOString().split("T")[0];
    i?.(D), p(!1);
  }, A = () => {
    m(null), i?.(""), r?.(), p(!1);
  }, z = (u) => {
    const M = new Date(g);
    M.setMonth(u), k(M), v(!1);
  }, I = (u) => {
    const M = new Date(g);
    M.setFullYear(u), k(M), x(!1);
  }, Y = () => {
    const u = g.getFullYear(), M = g.getMonth(), D = new Date(u, M, 1), P = new Date(u, M + 1, 0).getDate(), V = D.getDay() === 0 ? 6 : D.getDay() - 1, b = [], j = 35, a = new Date(u, M, 0).getDate();
    for (let $ = 0; $ < V; $++) {
      const S = a - V + $ + 1, O = new Date(u, M - 1, S), Z = !!(f && O.getDate() === f.getDate() && O.getMonth() === f.getMonth() && O.getFullYear() === f.getFullYear());
      b.push(
        /* @__PURE__ */ t.jsx(re, { selected: Z, onClick: () => T(O), otherMonth: !0, children: S }, `prev-${S}`)
      );
    }
    for (let $ = 1; $ <= P; $++) {
      const S = new Date(u, M, $), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      b.push(
        /* @__PURE__ */ t.jsx(re, { selected: O, onClick: () => T(S), children: $ }, `current-${$}`)
      );
    }
    const C = j - b.length;
    for (let $ = 1; $ <= C; $++) {
      const S = new Date(u, M + 1, $), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      b.push(
        /* @__PURE__ */ t.jsx(re, { selected: O, onClick: () => T(S), otherMonth: !0, children: $ }, `next-${$}`)
      );
    }
    return b;
  }, R = () => f ? f.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, F = () => {
    const u = (/* @__PURE__ */ new Date()).getFullYear(), M = [];
    for (let D = u - 10; D <= u + 10; D++)
      M.push(D);
    return M;
  }, W = (u) => {
    u.preventDefault(), u.stopPropagation(), v(!h), x(!1);
  }, _ = (u) => {
    u.preventDefault(), u.stopPropagation(), x(!d), v(!1);
  }, w = (u) => {
    const M = u === "next" ? 1 : -1, D = new Date(g);
    D.setMonth(D.getMonth() + M), k(D);
  };
  return /* @__PURE__ */ t.jsxs(Ft, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(At, { onClick: () => p(!c), children: [
      e && /* @__PURE__ */ t.jsx(_t, { children: e }),
      /* @__PURE__ */ t.jsx(Ot, { isEmpty: !f, children: R() }),
      /* @__PURE__ */ t.jsx(Nt, { src: zt, alt: "Календарь" })
    ] }),
    c && /* @__PURE__ */ t.jsxs(Yt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Wt, { children: [
        /* @__PURE__ */ t.jsx(
          ge,
          {
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), w("prev");
            },
            onMouseDown: (u) => u.preventDefault(),
            children: /* @__PURE__ */ t.jsx(be, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Ht, { children: [
          /* @__PURE__ */ t.jsxs(Ut, { ref: E, children: [
            /* @__PURE__ */ t.jsxs(Vt, { onClick: (u) => W(u), onMouseDown: (u) => u.preventDefault(), children: [
              pe[g.getMonth()],
              /* @__PURE__ */ t.jsx(xe, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(he, { $width: 120, onClick: (u) => u.stopPropagation(), children: pe.map((u, M) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: M === g.getMonth(),
                onClick: (D) => {
                  D.stopPropagation(), z(M);
                },
                children: u
              },
              u
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(Xt, { ref: y, children: [
            /* @__PURE__ */ t.jsxs(Zt, { onClick: (u) => _(u), onMouseDown: (u) => u.preventDefault(), children: [
              g.getFullYear(),
              /* @__PURE__ */ t.jsx(xe, { $open: d })
            ] }),
            d && /* @__PURE__ */ t.jsx(he, { $width: 80, onClick: (u) => u.stopPropagation(), children: F().map((u) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: u === g.getFullYear(),
                onClick: (M) => {
                  M.stopPropagation(), I(u);
                },
                children: u
              },
              u
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          ge,
          {
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), w("next");
            },
            onMouseDown: (u) => u.preventDefault(),
            children: /* @__PURE__ */ t.jsx(be, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(qt, { children: Bt.map((u) => /* @__PURE__ */ t.jsx(Gt, { children: u }, u)) }),
      /* @__PURE__ */ t.jsx(Jt, { children: Y() }),
      /* @__PURE__ */ t.jsxs(Kt, { children: [
        /* @__PURE__ */ t.jsx(me, { onClick: A, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(me, { onClick: L, children: "Сегодня" })
      ] })
    ] })
  ] });
}, Ft = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`, At = o.div`
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
`, _t = o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`, Ot = o.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Nt = o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Yt = o.div`
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
`, Wt = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Ht = o.div`
  display: flex;
  gap: 8px;
  color: black;
`, Le = o.button`
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
`, Vt = o(Le)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Zt = o(Le)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Ut = o.div`
  position: relative;
`, Xt = o.div`
  position: relative;
`, xe = o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, he = o.div`
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
`, fe = o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, ge = o.button`
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
`, be = o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, qt = o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, Gt = o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, Jt = o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`, re = o.div`
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
`, Kt = o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, me = o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, Qt = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: c = !1,
  errorMessage: p,
  ...g
}) => {
  const [k, f] = q.useState(!1), m = !!(n && !s && !k), h = (x) => {
    if (!r) return;
    let l = x.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(x);
        break;
      case "rubles": {
        const y = x.target.selectionStart, T = x.target.value;
        let L = T.replace(/[^\d]/g, "");
        if (L === "") {
          x.target.value = "", r(x);
          break;
        }
        const A = parseInt(L, 10);
        if (!isNaN(A)) {
          let z = A.toLocaleString("ru-RU");
          z += " ₽";
          const I = v(T, y || 0), Y = d(z, I);
          x.target.value = z, r(x), setTimeout(() => {
            x.target.setSelectionRange(Y, Y);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const y = l.split(".");
        y.length > 2 && (l = y[0] + "." + y.slice(1).join("")), y.length === 2 && y[1].length > 2 && (l = y[0] + "." + y[1].slice(0, 2));
        const T = parseFloat(l);
        if (isNaN(T) || (T > 100 ? l = "100" : T < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const L = x.target.selectionStart || 0, A = l.replace(" %", "");
          x.target.value = l, r(x), setTimeout(() => {
            L < A.length && x.target.setSelectionRange(L, L);
          }, 0);
        } else
          x.target.value = l, r(x);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let E = l.split(" ").filter((y) => y.length > 0);
        E = E.slice(0, 3), l = E.map((y) => {
          if (y.startsWith("-") && (y = y.substring(1)), (y.match(/-/g) || []).length > 1) {
            const L = y.split("-");
            y = L[0] + "-" + L.slice(1).join("");
          }
          return y.includes("-") ? y.split("-").map((L, A) => L.length === 0 ? "" : (A > 0, L[0].toUpperCase() + L.slice(1).toLowerCase())).join("-") : y.length > 0 ? y[0].toUpperCase() + y.slice(1).toLowerCase() : "";
        }).join(" "), l.length > 0 && l[l.length - 1] !== " " && x.target.value.length > 0 && x.target.value[x.target.value.length - 1] === " " && (l += " "), l.length > 100 && (l = l.slice(0, 100)), x.target.value = l, r(x);
        break;
      case "doc":
        l = l.replace(/\D/g, ""), l.length > 4 && (l = `${l.slice(0, 4)} ${l.slice(4, 10)}`), l.length > 11 && (l = l.slice(0, 11)), x.target.value = l, r(x);
        break;
      case "date": {
        l = l.replace(/\D/g, ""), l.length > 4 ? l = `${l.slice(0, 2)}.${l.slice(2, 4)}.${l.slice(4, 8)}` : l.length > 2 && (l = `${l.slice(0, 2)}.${l.slice(2, 4)}`), l.length > 10 && (l = l.slice(0, 10)), s?.length > l.length && [3, 6].includes(l.length) && (l = l.slice(0, l.length - 1)), x.target.value = l, r(x);
        break;
      }
      default:
        r(x);
        break;
    }
  }, v = (x, l) => {
    let E = 0;
    for (let y = 0; y < Math.min(l, x.length); y++)
      /\d/.test(x[y]) && E++;
    return E;
  }, d = (x, l) => {
    let E = 0;
    for (let y = 0; y < x.length; y++) {
      if (E >= l)
        return y;
      /\d/.test(x[y]) && E++;
    }
    return x.length;
  };
  return /* @__PURE__ */ t.jsxs(eo, { children: [
    /* @__PURE__ */ t.jsx(
      to,
      {
        ...g,
        value: s,
        placeholder: m ? "" : e,
        onFocus: () => f(!0),
        onBlur: (x) => {
          f(!1), g.onBlur?.(x);
        },
        onChange: h,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: c
      }
    ),
    n && /* @__PURE__ */ t.jsx(oo, { isVisible: m, children: n }),
    c && p && /* @__PURE__ */ t.jsx(no, { children: p })
  ] });
}, eo = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, to = o.input`
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
`, oo = o.label`
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
`, no = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Ti = ({ total: e, current: n = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [c, p] = B(n), g = (f) => {
    f < 1 || f > r || f === c || (p(f), s?.(f));
  }, k = () => {
    const f = [];
    let h = 1, v = r;
    if (r > 5) {
      const d = Math.floor(2.5);
      h = Math.max(c - d, 1), v = Math.min(c + d, r), c <= d + 1 ? v = 5 : c >= r - d && (h = r - 5 + 1);
    }
    for (let d = h; d <= v; d++)
      f.push(
        /* @__PURE__ */ t.jsx(ee, { active: d === c, onClick: () => g(d), children: d }, d)
      );
    return h > 1 && (h > 2 && f.unshift(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "start-ellipsis")), f.unshift(
      /* @__PURE__ */ t.jsx(ee, { active: c === 1, onClick: () => g(1), children: "1" }, 1)
    )), v < r && (v < r - 1 && f.push(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "end-ellipsis")), f.push(
      /* @__PURE__ */ t.jsx(ee, { active: r === c, onClick: () => g(r), children: r }, r)
    )), f;
  };
  return /* @__PURE__ */ t.jsxs(ro, { children: [
    /* @__PURE__ */ t.jsx(we, { disabled: c === 1, onClick: () => g(c - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    k(),
    /* @__PURE__ */ t.jsx(we, { disabled: c === r, onClick: () => g(c + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, ro = o.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, ee = o.div`
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
`, we = o.button`
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
  customPlaceholder: n,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  rows: p = 3,
  ...g
}) => {
  const [k, f] = q.useState(!1), m = !!(n && !s && !k);
  return /* @__PURE__ */ t.jsxs(io, { children: [
    /* @__PURE__ */ t.jsx(
      so,
      {
        ...g,
        value: s,
        placeholder: m ? "" : e,
        onFocus: () => f(!0),
        onBlur: (h) => {
          f(!1), g.onBlur?.(h);
        },
        onChange: i,
        hasError: r,
        rows: p
      }
    ),
    n && /* @__PURE__ */ t.jsx(ao, { isVisible: m, children: n }),
    r && c && /* @__PURE__ */ t.jsx(lo, { children: c })
  ] });
}, io = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, so = o.textarea`
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
`, ao = o.label`
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
`, lo = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, co = ({
  title: e,
  onClose: n,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: c = !1,
  isSubmitting: p = !1,
  mode: g = "create",
  hideSaveButton: k = !1,
  hideCanselButton: f = !1,
  width: m = "560px",
  saveButtonText: h = "Сохранить",
  customLayout: v
}) => {
  const d = g === "view", x = U(null);
  X(() => {
    const y = (L) => {
      L.key === "Escape" && n();
    };
    document.addEventListener("keydown", y);
    const T = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => x.current?.focus(), 0), () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = T;
    };
  }, [n]);
  const l = (y) => {
    y.target === y.currentTarget && n();
  }, E = (y) => {
    y.preventDefault(), s();
  };
  return /* @__PURE__ */ t.jsx(po, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    uo,
    {
      ref: x,
      $width: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Te, { children: [
          /* @__PURE__ */ t.jsx(Pe, { children: e }),
          /* @__PURE__ */ t.jsx(xo, { type: "button", onClick: n, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        v ? /* @__PURE__ */ t.jsx(ho, { children: v }) : null,
        /* @__PURE__ */ t.jsxs(fo, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(go, { children: r }),
          /* @__PURE__ */ t.jsxs(bo, { children: [
            /* @__PURE__ */ t.jsx(mo, { children: f ? null : /* @__PURE__ */ t.jsx(vo, { isPrimary: !1, onClick: E, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(wo, { children: !d && !k ? /* @__PURE__ */ t.jsx(
              yo,
              {
                type: "submit",
                disabled: c || p,
                children: p ? "Сохранение..." : h
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, po = o.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, uo = o.div`
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
`, Te = o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`, Pe = o.h2`
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
`, xo = o.button`
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
`, ho = o.div`
  padding: 12px 18px 0 18px;
`, fo = o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, go = o.div`
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
`, bo = o.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, mo = o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, wo = o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, vo = o(De)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, yo = o(De)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, ko = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], Ei = ({
  value: e = "",
  placeholder: n = "Выберите период",
  options: s = ko,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: c
}) => {
  const [p, g] = B(!1), [k, f] = B(!1), [m, h] = B(""), [v, d] = B(""), [x, l] = B(""), E = U(null), y = U(null);
  X(() => {
    if (e === "Custom" && v && x) {
      const R = I(v), F = I(x);
      h(`С ${R} по ${F}`);
    } else {
      const R = s.find((F) => F.value === e);
      h(R ? R.label : "");
    }
  }, [e, s, v, x]), X(() => {
    const R = (F) => {
      E.current && !E.current.contains(F.target) && g(!1), k && y.current && !y.current.contains(F.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((w) => w.contains(F.target)) || f(!1));
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [k]);
  const T = (R) => {
    r?.(R.value), g(!1);
  }, L = () => {
    g(!1), c ? c() : f(!0);
  }, A = () => {
    r?.(""), h(""), d(""), l("");
  }, z = () => {
    if (v && x) {
      const R = I(v), F = I(x), W = `С ${R} по ${F}`;
      r?.("Custom", v, x), h(W), f(!1);
    }
  }, I = (R) => {
    const F = new Date(R), W = String(F.getDate()).padStart(2, "0"), _ = String(F.getMonth() + 1).padStart(2, "0"), w = F.getFullYear();
    return `${W}.${_}.${w}`;
  }, Y = () => /* @__PURE__ */ t.jsxs(Ro, { children: [
    /* @__PURE__ */ t.jsx(Te, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Pe, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(zo, { onClick: A, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(jo, { ref: E, children: [
      /* @__PURE__ */ t.jsxs(Co, { onClick: () => g(!p), children: [
        /* @__PURE__ */ t.jsx($o, { children: m || n }),
        /* @__PURE__ */ t.jsx(Mo, { $isOpen: p, children: "▼" })
      ] }),
      p && /* @__PURE__ */ t.jsxs(So, { children: [
        s.map((R) => /* @__PURE__ */ t.jsxs(Do, { onClick: () => T(R), $isSelected: e === R.value, children: [
          /* @__PURE__ */ t.jsx(Lo, { $isSelected: e === R.value, children: e === R.value && /* @__PURE__ */ t.jsx(To, {}) }),
          /* @__PURE__ */ t.jsx(Po, { children: R.label })
        ] }, R.id)),
        i && /* @__PURE__ */ t.jsx(Eo, { onClick: L, children: "Другой период" })
      ] })
    ] }),
    k && /* @__PURE__ */ t.jsx("div", { ref: y, children: /* @__PURE__ */ t.jsx(
      co,
      {
        title: "",
        onClose: () => f(!1),
        onCancel: () => f(!1),
        onSave: (R) => {
          R.preventDefault(), z();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(Y, {}),
        children: /* @__PURE__ */ t.jsxs(Io, { children: [
          /* @__PURE__ */ t.jsx(ve, { children: /* @__PURE__ */ t.jsx(ue, { value: v, onChange: (R) => d(R) }) }),
          /* @__PURE__ */ t.jsx(ve, { children: /* @__PURE__ */ t.jsx(ue, { value: x, onChange: (R) => l(R) }) })
        ] })
      }
    ) })
  ] });
}, jo = o.div`
  position: relative;
  width: 245px;
`, Co = o.div`
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
`, $o = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Mo = o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, So = o.div`
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
`, Do = o.div`
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
`, Lo = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, To = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Po = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Eo = o.div`
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
`, Io = o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ve = o.div`
  flex: 1;
`, Ro = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, zo = o.button`
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
`, Ii = ({
  name: e,
  value: n,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: c = "8 (999) 500-50-50",
  customPlaceholder: p,
  tabIndex: g,
  disabled: k = !1,
  hasError: f = !1,
  errorMessage: m
}) => {
  const [h, v] = q.useState(!1), d = q.useRef(null), x = !!(p && !n && !h), l = (L) => {
    const z = L.replace(/\D/g, "").slice(0, 11);
    let I = "";
    return z.length > 0 && (I += "8"), z.length > 1 && (I += ` (${z.slice(1, 4)}`), z.length > 4 && (I += `) ${z.slice(4, 7)}`), z.length > 7 && (I += `-${z.slice(7, 9)}`), z.length > 9 && (I += `-${z.slice(9, 11)}`), I;
  }, E = (L) => {
    const A = l(L.target.value), z = {
      ...L,
      target: {
        ...L.target,
        name: e,
        value: A
      }
    };
    s(z);
  }, y = (L) => {
    v(!1), i?.(L);
  }, T = (L) => {
    r?.(L);
  };
  return /* @__PURE__ */ t.jsxs(Bo, { children: [
    /* @__PURE__ */ t.jsx(
      Fo,
      {
        ref: d,
        name: e,
        type: "tel",
        value: n,
        onChange: E,
        onKeyPress: T,
        placeholder: x ? "" : c,
        maxLength: 18,
        tabIndex: g,
        disabled: k,
        hasError: f,
        onFocus: () => v(!0),
        onBlur: y,
        inputMode: "tel"
      }
    ),
    p && /* @__PURE__ */ t.jsx(Ao, { isVisible: x, children: p }),
    f && m && /* @__PURE__ */ t.jsx(_o, { children: m })
  ] });
}, Bo = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Fo = o.input`
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
`, Ao = o.label`
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
`, _o = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Ri = ({ tabs: e, activeTab: n, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const c = e.find((p) => p.id === n)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Oo, { children: /* @__PURE__ */ t.jsxs(No, { children: [
      e.map((p) => /* @__PURE__ */ t.jsxs(Yo, { $isActive: n === p.id, onClick: () => s(p.id), $fontSize: r, children: [
        p.label,
        n === p.id && /* @__PURE__ */ t.jsx(Wo, {})
      ] }, p.id)),
      i && /* @__PURE__ */ t.jsx(Ho, { children: i })
    ] }) }),
    c && /* @__PURE__ */ t.jsx(Vo, { children: c })
  ] });
}, Oo = o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, No = o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Yo = o.li`
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
`, Wo = o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Ho = o.li`
  margin-left: auto;
  padding: 4px 0;
`, Vo = o.div`
  margin-top: 20px;
`, zi = ({
  mode: e,
  primaryValue: n,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: c,
  disabled: p = !1,
  hasError: g = !1,
  errorMessage: k = "",
  customIcon: f
}) => {
  const h = f || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(qo, { children: [
    /* @__PURE__ */ t.jsx(Go, { children: n || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(Jo, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(Zo, { children: [
    /* @__PURE__ */ t.jsxs(Uo, { children: [
      /* @__PURE__ */ t.jsx(Xo, { type: "text", value: n || "", placeholder: i, readOnly: !0, disabled: p }),
      n && !p && /* @__PURE__ */ t.jsx(Qo, { type: "button", onClick: c, "aria-label": "Очистить", children: "×" })
    ] }),
    !p && /* @__PURE__ */ t.jsx(Ko, { type: "button", onClick: r, "aria-label": "Выбрать", children: h }),
    g && k && /* @__PURE__ */ t.jsx(en, { children: k })
  ] });
}, Zo = o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Uo = o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Xo = o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, qo = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, Go = o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, Jo = o.span`
  font-size: 13px;
  color: #666;
`, Ko = o.button`
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
`, Qo = o.button`
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
`, en = o.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, Ee = o.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, Bi = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(tn, { children: [
  "Всего: ",
  e
] }) }), tn = o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, Fi = o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, Ai = o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, on = o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, nn = o.span`
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
`, rn = o.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, _i = ({ checked: e, onChange: n, disabled: s }) => {
  const i = () => {
    s || n(!e);
  };
  return /* @__PURE__ */ t.jsxs(on, { children: [
    /* @__PURE__ */ t.jsx(rn, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(nn, { checked: e, disabled: s })
  ] });
}, Oi = ({ id: e, name: n, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(sn, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(an, { type: "radio", id: e, name: n, checked: s, onChange: i }),
  r
] }), sn = o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, an = o.input`
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
`, Ni = ({
  percentage: e,
  onChange: n,
  draggable: s = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const r = U(null), [c, p] = B(!1), g = (h) => {
    !s || !n || (h.preventDefault(), p(!0), m(h));
  }, k = (h) => {
    !c || !n || m(h);
  }, f = () => {
    p(!1);
  }, m = (h) => {
    if (!r.current || !n) return;
    const v = r.current.getBoundingClientRect();
    let x = (h.clientX - v.left) / v.width * 100;
    x = Math.max(0, Math.min(100, x)), n(Math.round(x));
  };
  return X(() => {
    if (c)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", f);
      };
  }, [c]), /* @__PURE__ */ t.jsxs(ln, { ref: r, $draggable: s, onMouseDown: g, children: [
    /* @__PURE__ */ t.jsx(cn, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(dn, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(pn, { $percentage: e, $primaryColor: i.primary })
  ] });
}, ln = o.div`
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
`, cn = o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, dn = o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, pn = o.div`
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
`, un = ["zoomControl", "fullscreenControl"];
let ie = null;
const xn = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((n, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => n(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Yi = ({
  onLocationSelect: e,
  initialAddress: n = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: c = 12,
  height: p = 400,
  width: g = "100%",
  inputPlaceholder: k = "Введите адрес или название места",
  searchButtonLabel: f = "Найти",
  draggablePlacemark: m = !0,
  controls: h = un,
  showSearch: v = !0,
  className: d,
  style: x,
  onError: l
}) => {
  const [E, y] = B(null), [T, L] = B(n), [A, z] = B(n), [I, Y] = B(!1), R = U(null);
  X(() => {
    let _ = !1, w;
    return (async () => {
      try {
        const M = await xn(r);
        if (_ || !R.current) return;
        w = new M.Map(R.current, {
          center: [s, i],
          zoom: c,
          controls: h
        });
        const D = new M.Placemark([s, i], {}, { draggable: m });
        w.geoObjects.add(D), w.events.add("click", (N) => {
          const P = N.get("coords");
          F(P, D, w);
        }), D.events.add("dragend", () => {
          const N = D.geometry.getCoordinates();
          F(N, D, w);
        }), y(w), Y(!0);
      } catch (M) {
        l && M instanceof Error && l(M);
      }
    })(), () => {
      _ = !0, w && w.destroy();
    };
  }, [r, s, i, c, h, m, l]);
  const F = async (_, w, u) => {
    if (window.ymaps)
      try {
        const N = (await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();
        w.geometry.setCoordinates(_), u.panTo(_, { flying: !0 }), z(N), L(N), e(N, _[0], _[1]);
      } catch (M) {
        l && M instanceof Error && l(M);
      }
  }, W = async () => {
    if (!(!T.trim() || !window.ymaps || !E))
      try {
        const w = (await window.ymaps.geocode(T)).geoObjects.get(0);
        if (w) {
          const u = w.geometry.getCoordinates(), M = w.properties.get("boundedBy");
          E.setBounds(M, { checkZoomRange: !0 });
          const D = new window.ymaps.Placemark(u, {}, { draggable: m });
          E.geoObjects.removeAll(), E.geoObjects.add(D);
          const N = w.getAddressLine();
          z(N), e(N, u[0], u[1]), D.events.add("dragend", () => {
            const P = D.geometry.getCoordinates();
            F(P, D, E);
          });
        }
      } catch (_) {
        l && _ instanceof Error && l(_);
      }
  };
  return /* @__PURE__ */ t.jsxs(hn, { className: d, style: x, children: [
    v && /* @__PURE__ */ t.jsxs(fn, { children: [
      /* @__PURE__ */ t.jsx(
        Qt,
        {
          type: "text",
          value: T,
          onChange: (_) => L(_.target.value),
          placeholder: k,
          onKeyPress: (_) => _.key === "Enter" && W(),
          disabled: !I
        }
      ),
      /* @__PURE__ */ t.jsx(gn, { onClick: W, disabled: !I, children: f })
    ] }),
    /* @__PURE__ */ t.jsxs(mn, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: A || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(bn, { ref: R, $height: p, $width: g }),
    /* @__PURE__ */ t.jsx(wn, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, hn = o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, fn = o.div`
  display: flex;
  gap: 8px;
`, gn = o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, bn = o.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, mn = o.div`
  font-size: 14px;
  color: #374151;
`, wn = o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, Ie = o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;
function ye(e, n = "₽") {
  if (!e || e.trim() === "")
    return `0${n}`;
  const s = e.replace(/[^\d-]/g, "");
  if (!s || s === "-" || s === "")
    return `0${n}`;
  const i = parseInt(s, 10);
  if (isNaN(i))
    return `0${n}`;
  const r = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(i);
  return !0 ? `${r}${n}` : r;
}
function Wi(e) {
  if (!e) return 0;
  const n = e.replace(/\D/g, "");
  return parseInt(n, 10);
}
const Hi = ({ title: e, data: n, maxValue: s, step: i, height: r = 300, titleFontSize: c }) => {
  const [p, g] = B(null), k = [];
  for (let m = 0; m <= s; m += i)
    k.push(m);
  const f = n.length > 0 ? n[0].bars.map((m) => ({ name: m.name, color: m.color })) : [];
  return /* @__PURE__ */ t.jsxs(vn, { children: [
    /* @__PURE__ */ t.jsxs(Ee, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Ie, { style: { fontSize: c }, children: e }),
      /* @__PURE__ */ t.jsx(yn, { children: f.map((m, h) => /* @__PURE__ */ t.jsxs(kn, { children: [
        /* @__PURE__ */ t.jsx(jn, { color: m.color }),
        /* @__PURE__ */ t.jsx(Cn, { children: m.name })
      ] }, h)) })
    ] }),
    /* @__PURE__ */ t.jsxs($n, { height: r, children: [
      /* @__PURE__ */ t.jsx(Mn, { children: k.map((m, h) => /* @__PURE__ */ t.jsx(Sn, { children: m.toLocaleString() }, h)) }),
      /* @__PURE__ */ t.jsxs(Dn, { children: [
        /* @__PURE__ */ t.jsxs(Ln, { children: [
          k.map((m, h) => {
            const v = m / s * 100;
            return /* @__PURE__ */ t.jsx(Tn, { position: 100 - v }, `line-${h}`);
          }),
          n.map((m, h) => /* @__PURE__ */ t.jsxs(Pn, { onMouseEnter: () => g(h), onMouseLeave: () => g(null), children: [
            m.bars.map((v, d) => {
              const x = m.bars.slice(d + 1).reduce((l, E) => l + E.value, 0);
              return /* @__PURE__ */ t.jsx(
                En,
                {
                  height: v.value / s * 100,
                  offset: x / s * 100,
                  color: v.color,
                  isHovered: p !== null && p !== h
                },
                d
              );
            }),
            p === h && /* @__PURE__ */ t.jsxs(zn, { children: [
              /* @__PURE__ */ t.jsxs(Bn, { children: [
                /* @__PURE__ */ t.jsxs(Fn, { children: [
                  "Всего: ",
                  ye(m.total.toString())
                ] }),
                m.bars.map((v, d) => /* @__PURE__ */ t.jsxs(An, { children: [
                  v.name,
                  ": ",
                  ye(v.value.toString())
                ] }, d))
              ] }),
              /* @__PURE__ */ t.jsx(_n, {})
            ] })
          ] }, h))
        ] }),
        /* @__PURE__ */ t.jsx(In, { children: n.map((m, h) => /* @__PURE__ */ t.jsx(Rn, { style: { flex: 1, textAlign: "center" }, children: m.label }, h)) })
      ] })
    ] })
  ] });
}, vn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, yn = o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, kn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, jn = o.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, Cn = o.span`
  font-size: 14px;
  color: #4b5563;
`, $n = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Mn = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, Sn = o.span`
  font-size: 12px;
  color: #6b7280;
`, Dn = o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Ln = o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, Tn = o.div`
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
`, Pn = o.div`
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
`, En = o.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, In = o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, Rn = o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, zn = o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, Bn = o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, Fn = o.div`
  font-weight: 600;
  margin-bottom: 6px;
`, An = o.div`
  margin-bottom: 2px;
`, _n = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, On = Ae`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Vi = ({
  title: e,
  data: n,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: c,
  minY: p,
  xStep: g,
  yStep: k,
  height: f = 300,
  showLegend: m = !0,
  xAxisCustomLabels: h,
  showTooltip: v = !0,
  titleFontSize: d = "30px"
}) => {
  const [x, l] = B(null), [E, y] = B({ x: 0, y: 0 }), T = U(null), L = U(null), A = Math.max(...n.map((w) => w.x), r), z = [];
  for (let w = 0; w <= A; w += g)
    z.push(w);
  const I = [];
  for (let w = p; w <= c; w += k)
    I.push(w);
  const Y = h || z.map((w) => w.toString()), R = m ? Array.from(new Set(n.filter((w) => w.label).map((w) => w.label))).map((w) => {
    const u = n.find((M) => M.label === w);
    return { name: w, color: u.color };
  }) : [], F = {};
  n.forEach((w) => {
    const u = w.label || "default";
    F[u] || (F[u] = []), F[u].push(w);
  });
  const W = (w) => w / A * 100, _ = (w) => {
    const u = c - p;
    return 100 - (w - p) / u * 100;
  };
  return X(() => {
    if (x && L.current) {
      const w = L.current.getBoundingClientRect(), u = W(x.x) / 100 * w.width, M = _(x.y) / 100 * w.height;
      y({
        x: u + w.left,
        y: M + w.top
      });
    }
  }, [x, r, c, p]), /* @__PURE__ */ t.jsxs(Nn, { children: [
    /* @__PURE__ */ t.jsxs(Ee, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Ie, { style: { fontSize: d }, children: e }),
      m && R.length > 0 && /* @__PURE__ */ t.jsx(Yn, { children: R.map((w, u) => /* @__PURE__ */ t.jsxs(Wn, { children: [
        /* @__PURE__ */ t.jsx(Hn, { color: w.color }),
        /* @__PURE__ */ t.jsx(Vn, { children: w.name })
      ] }, u)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Zn, { height: f, children: [
      /* @__PURE__ */ t.jsxs(Un, { children: [
        I.map((w, u) => /* @__PURE__ */ t.jsx(Xn, { children: w.toLocaleString() }, u)),
        /* @__PURE__ */ t.jsx(ke, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(qn, { ref: L, children: [
        I.map((w, u) => /* @__PURE__ */ t.jsx(Gn, { position: _(w) }, `hline-${u}`)),
        Object.values(F).map((w, u) => w.map((M, D) => {
          if (D === 0) return null;
          const N = w[D - 1], P = W(N.x), V = _(N.y), b = W(M.x), j = _(M.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${P}%`, y1: `${V}%`, x2: `${b}%`, y2: `${j}%`, stroke: M.color, strokeWidth: "1" })
            },
            `line-${u}-${D}`
          );
        })),
        n.map((w, u) => /* @__PURE__ */ t.jsx(
          Jn,
          {
            x: W(w.x),
            y: _(w.y),
            color: w.color,
            onMouseEnter: () => l(w),
            onMouseLeave: () => l(null),
            isHovered: x?.label === w.label
          },
          u
        ))
      ] })
    ] }),
    v && x && /* @__PURE__ */ t.jsxs(er, { ref: T, style: { left: E.x, top: E.y }, children: [
      /* @__PURE__ */ t.jsxs(tr, { children: [
        x.name && /* @__PURE__ */ t.jsx(or, { children: x.name }),
        /* @__PURE__ */ t.jsx(nr, { children: x.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(rr, {})
    ] }),
    /* @__PURE__ */ t.jsxs(Kn, { children: [
      Y.map((w, u) => {
        const D = z[u] / A * 100;
        return /* @__PURE__ */ t.jsx(Qn, { style: { left: `${D}%`, transform: "translateX(-50%)" }, children: w }, u);
      }),
      s && /* @__PURE__ */ t.jsx(ke, { children: s })
    ] })
  ] });
}, Nn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Yn = o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Wn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Hn = o.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Vn = o.span`
  font-size: 14px;
  color: #4b5563;
`, Zn = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Un = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Xn = o.span`
  font-size: 12px;
  color: #6b7280;
`, ke = o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, qn = o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, Gn = o.div`
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
`, Jn = o.div`
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
`, Kn = o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, Qn = o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, er = o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${On} 0.15s ease-out forwards;
`, tr = o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, or = o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, nr = o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, rr = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, Zi = ({ images: e, initialIndex: n, onClose: s }) => {
  const [i, r] = B(n), [c, p] = B(0), g = () => {
    r((h) => h > 0 ? h - 1 : e.length - 1), p(0);
  }, k = () => {
    r((h) => h < e.length - 1 ? h + 1 : 0), p(0);
  }, f = () => {
    p((h) => (h + 90) % 360);
  }, m = (h) => {
    h.key === "Escape" ? s() : h.key === "ArrowLeft" ? g() : h.key === "ArrowRight" ? k() : (h.key === "r" || h.key === "к") && f();
  };
  return /* @__PURE__ */ t.jsx(ir, { onClick: s, onKeyDown: m, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(sr, { onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(ar, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(lr, { children: /* @__PURE__ */ t.jsx(cr, { onClick: f, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
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
      /* @__PURE__ */ t.jsx(je, { $position: "left", onClick: g, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(pr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: c }),
      /* @__PURE__ */ t.jsx(je, { $position: "right", onClick: k, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(ur, { children: e.map((h, v) => /* @__PURE__ */ t.jsx(
      xr,
      {
        $active: v === i,
        onClick: () => {
          r(v), p(0);
        }
      },
      v
    )) })
  ] }) });
}, ir = o.div`
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
`, sr = o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, ar = o.button`
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
`, lr = o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, cr = o.button`
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
`, dr = o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, pr = o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, je = o.button`
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
`, ur = o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, xr = o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, hr = ({ isOpen: e, callPhone: n, error: s, onClose: i }) => {
  const [r, c] = B(!1);
  if (!e) return null;
  const p = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), g = () => {
    p ? window.location.href = `tel:${n}` : (navigator.clipboard.writeText(n), c(!0), setTimeout(() => c(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(fr, { onClick: i, children: /* @__PURE__ */ t.jsxs(gr, { onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(br, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Ce, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      mr,
      {
        onClick: g,
        title: p ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          n,
          !p && r && /* @__PURE__ */ t.jsx(wr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Ce, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    s && /* @__PURE__ */ t.jsx(vr, { children: s })
  ] }) });
}, fr = o.div`
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
`, gr = o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, br = o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Ce = o.p`
  margin-bottom: 15px;
  color: #555;
`, mr = o.div`
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
`, wr = o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, vr = o.div`
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
}), Ui = ({
  items: e,
  bottomItems: n = [],
  logo: s,
  arrowIcon: i,
  collapsed: r,
  onToggle: c,
  selectedKey: p,
  onSelect: g,
  autoCollapseOnSelect: k = !1,
  width: f = "315px",
  collapsedWidth: m = "70px",
  className: h,
  style: v
}) => {
  const d = Be(yr), [x, l] = B(
    r ?? d.collapsed ?? !1
  ), [E, y] = B(null), [T, L] = B(
    p ?? d.selectedSideMenuItem ?? null
  ), [A, z] = B({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), I = U(null), Y = r ?? d.collapsed ?? x, R = (P) => {
    l(P), d.toggleCollapsed(), c?.(P);
  }, F = p ?? d.selectedSideMenuItem ?? T, W = (P) => {
    L(P), d.setSelectedSideMenuItem(P);
  };
  X(() => {
    r !== void 0 && (l(r), r && y(null));
  }, [r]), X(() => {
    p !== void 0 && W(p);
  }, [p]), X(() => {
    const P = () => z((V) => ({ ...V, visible: !1 }));
    return document.addEventListener("click", P), () => document.removeEventListener("click", P);
  }, []);
  const _ = () => {
    const P = !Y;
    R(P), P && y(null);
  }, w = (P) => {
    P.disabled || P.hidden || (W(P.key), g?.(P), P.onClick?.(P), k && (R(!0), y(null)));
  }, u = (P) => {
    y((V) => V === P ? null : P);
  }, M = (P, V) => {
    const b = (P.children?.length || 0) > 0;
    if (Y && b) {
      V.stopPropagation();
      const j = V.currentTarget.getBoundingClientRect();
      z({
        visible: !0,
        x: j.right + 6,
        y: j.top,
        items: P.children || []
      });
      return;
    }
    b ? u(P.key) : w(P);
  }, D = (P, V = !1) => P.filter((b) => !b.hidden).map((b) => {
    const j = (b.children?.length || 0) > 0, a = E === b.key, C = F === b.key || !!b.children && b.children.some(($) => $.key === F);
    return /* @__PURE__ */ t.jsxs(q.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Dr,
        {
          $collapsed: Y,
          $selected: C,
          onClick: ($) => M(b, $),
          $disabled: b.disabled,
          title: b.label,
          children: [
            b.icon && /* @__PURE__ */ t.jsx(Tr, { $collapsed: Y, children: b.icon }),
            !Y && /* @__PURE__ */ t.jsx(Lr, { children: b.label }),
            !Y && j && /* @__PURE__ */ t.jsx(Er, { $expanded: a, children: "▾" })
          ]
        }
      ),
      !Y && j && a && /* @__PURE__ */ t.jsx(Pr, { children: D(b.children || [], !0) })
    ] }, b.key);
  }), N = Fe(() => A.visible ? /* @__PURE__ */ t.jsx(Rr, { style: { left: A.x, top: A.y }, children: A.items.map((P) => /* @__PURE__ */ t.jsx(
    zr,
    {
      onClick: () => {
        w(P), z({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: F === P.key,
      children: P.label
    },
    P.key
  )) }) : null, [A, F]);
  return /* @__PURE__ */ t.jsxs(
    kr,
    {
      ref: I,
      $collapsed: Y,
      $width: f,
      $collapsedWidth: m,
      className: h,
      style: v,
      children: [
        /* @__PURE__ */ t.jsxs(jr, { children: [
          /* @__PURE__ */ t.jsx(Cr, { onClick: _, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx($r, { $collapsed: Y, children: "❮" }) }),
          !Y && s && /* @__PURE__ */ t.jsx(Mr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(Sr, { children: [
          /* @__PURE__ */ t.jsx($e, { children: D(e) }),
          n.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Ir, {}),
            /* @__PURE__ */ t.jsx($e, { children: D(n) })
          ] })
        ] }),
        N,
        /* @__PURE__ */ t.jsx(Br, { $collapsed: Y })
      ]
    }
  );
}, kr = o.div`
  width: ${({ $collapsed: e, $width: n, $collapsedWidth: s }) => e ? s : n};
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
`, jr = o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`, Cr = o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`, $r = o.span`
  display: inline-block;
  transform: rotate(${({ $collapsed: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`, Mr = o.div`
  flex: 1;
  display: flex;
  align-items: center;
`, Sr = o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, $e = o.div`
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
`, Dr = o.div`
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
`, Lr = o.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Tr = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({ $collapsed: e }) => e ? "24px" : "21px"};
`, Pr = o.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Er = o.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Ir = o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Rr = o.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, zr = o.div`
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
`, Br = o.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Fr = (e) => {
  const n = e.replace(/\D/g, ""), i = (n.startsWith("8") || n.length === 0 ? n : `8${n}`).slice(0, 11);
  let r = "";
  return i.length > 0 && (r += "8"), i.length > 1 && (r += ` (${i.slice(1, 4)}`), i.length > 4 && (r += `) ${i.slice(4, 7)}`), i.length > 7 && (r += `-${i.slice(7, 9)}`), i.length > 9 && (r += `-${i.slice(9, 11)}`), r;
}, Ar = ({ value: e, onChange: n, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (c) => {
    const p = Fr(c.target.value);
    n(p);
  };
  return /* @__PURE__ */ t.jsx(_r, { type: "text", value: e, onChange: r, placeholder: s, maxLength: 18, tabIndex: i });
}, _r = o.input`
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
`, Or = (e, n) => te("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: n
  }
}), Nr = (e, n, s, i) => te("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: n,
    user_type: s,
    name: i
  }
}), Xi = () => te("/auth/session/info", { method: "GET" }), Yr = ({
  isOpen: e,
  onClose: n,
  onSubmit: s,
  error: i,
  isLoading: r = !1,
  callPhone: c = ""
}) => {
  const [p, g] = B("");
  if (!e) return null;
  const k = (f) => {
    f.preventDefault(), s(p);
  };
  return /* @__PURE__ */ t.jsx(Wr, { onClick: n, children: /* @__PURE__ */ t.jsxs(Hr, { onClick: (f) => f.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(Vr, { children: "Завершение регистрации" }),
    /* @__PURE__ */ t.jsxs(Zr, { children: [
      /* @__PURE__ */ t.jsx(Ur, { children: "Номер для звонка:" }),
      /* @__PURE__ */ t.jsx(Xr, { children: c }),
      /* @__PURE__ */ t.jsx(qr, { children: "Позвоните на этот номер после ввода ФИО" })
    ] }),
    /* @__PURE__ */ t.jsxs(Gr, { onSubmit: k, children: [
      /* @__PURE__ */ t.jsxs(Jr, { children: [
        /* @__PURE__ */ t.jsx(Kr, { children: "Введите ФИО" }),
        /* @__PURE__ */ t.jsx(
          Qr,
          {
            type: "text",
            value: p,
            onChange: (f) => g(f.target.value),
            placeholder: "Иванов Иван Иванович",
            disabled: r,
            autoFocus: !0
          }
        ),
        i && /* @__PURE__ */ t.jsx(ei, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(ti, { children: [
        /* @__PURE__ */ t.jsx(oi, { type: "submit", disabled: r, children: r ? "Загрузка..." : "Продолжить" }),
        /* @__PURE__ */ t.jsx(ni, { type: "button", onClick: n, disabled: r, children: "Отмена" })
      ] })
    ] })
  ] }) });
}, Wr = o.div`
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
`, Hr = o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`, Vr = o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`, Zr = o.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  text-align: center;
`, Ur = o.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`, Xr = o.div`
  font-size: 22px;
  font-weight: bold;
  color: rgba(0, 125, 136, 1);
  margin-bottom: 8px;
`, qr = o.div`
  font-size: 13px;
  color: #888;
`, Gr = o.form`
  display: flex;
  flex-direction: column;
`, Jr = o.div`
  margin-bottom: 20px;
`, Kr = o.label`
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`, Qr = o.input`
  width: 100%;
  padding: 14px;
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
`, ei = o.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`, ti = o.div`
  display: flex;
  gap: 12px;
`, oi = o.button`
  flex: 2;
  background: linear-gradient(
    90deg,
    rgba(0, 125, 136, 1) 0%,
    rgba(37, 203, 161, 1) 100%
  );
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, ni = o.button`
  flex: 1;
  background: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background: #eeeeee;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, qi = ({
  onLoginSuccess: e,
  userType: n = "delivery_operator",
  title: s = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: r = "8 (xxx) xxx-xx-xx",
  supportPhone: c = "8 989 924 24 24",
  supportLinkUrl: p = "https://waypay.one",
  supportLinkText: g = "waypay.one",
  className: k,
  style: f,
  pollingIntervalMs: m = 3e3,
  enableRegistration: h = !1
}) => {
  const [v, d] = B(!1), [x, l] = B(""), [E, y] = B(!1), [T, L] = B(""), [A, z] = B(""), [I, Y] = B(!1), [R, F] = B(!1), [W, _] = B(""), [w, u] = B(""), [M, D] = B(null), N = U(void 0);
  X(() => () => {
    N.current && clearInterval(N.current);
  }, []);
  const P = ($) => {
    const S = $.replace(/\D/g, "");
    return S ? S.startsWith("8") ? `+7${S.slice(1)}` : S.startsWith("7") ? `+${S}` : `+${S}` : "";
  }, V = () => {
    y(!1), F(!1), _(""), u(""), D(null), N.current && window.clearInterval(N.current);
  }, b = async ($) => {
    if ($.preventDefault(), !x) {
      z("Введите номер телефона");
      return;
    }
    d(!0), z("");
    const S = P(x);
    try {
      const O = await Or(S, n);
      D({
        phone: S,
        checkId: O.check_id,
        callPhone: O.call_phone
      }), h && "name_required" in O && O.name_required ? (F(!0), L(O.call_phone)) : !h && "name_required" in O && O.name_required ? (z(
        "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
      ), D(null)) : (L(O.call_phone), y(!0), a(S, O.check_id));
    } catch (O) {
      console.error("Auth error:", O), z(
        "Не удалось инициировать авторизацию. Проверьте номер."
      );
    } finally {
      d(!1);
    }
  }, j = async ($) => {
    if (!$.trim()) {
      u("Введите ФИО");
      return;
    }
    if (M) {
      d(!0), u("");
      try {
        _($), F(!1), y(!0), a(M.phone, M.checkId, $);
      } catch (S) {
        console.error("Registration error:", S), u("Не удалось завершить регистрацию");
      } finally {
        d(!1);
      }
    }
  }, a = ($, S, O) => {
    N.current && window.clearInterval(N.current), N.current = window.setInterval(() => {
      C($, S, O);
    }, m);
  }, C = async ($, S, O) => {
    if (!I) {
      Y(!0);
      try {
        const Z = await Nr($, S, n, O || W);
        Z.access_token && Z.refresh_token && (N.current && window.clearInterval(N.current), y(!1), F(!1), _(""), D(null), e(Z.access_token));
      } catch (Z) {
        console.error("Verification error:", Z), z("Ошибка проверки авторизации");
      } finally {
        Y(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(ri, { className: k, style: f, children: [
    /* @__PURE__ */ t.jsxs(ii, { children: [
      /* @__PURE__ */ t.jsxs(si, { onSubmit: b, children: [
        /* @__PURE__ */ t.jsx(ai, { children: s }),
        /* @__PURE__ */ t.jsx(li, { children: /* @__PURE__ */ t.jsx(ci, { children: /* @__PURE__ */ t.jsx(
          Ar,
          {
            value: x,
            onChange: ($) => l($),
            placeholder: r
          }
        ) }) }),
        A && /* @__PURE__ */ t.jsx(hi, { children: /* @__PURE__ */ t.jsx("span", { children: A }) }),
        /* @__PURE__ */ t.jsx(di, { type: "submit", disabled: v, children: v ? "Загрузка..." : i })
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
        /* @__PURE__ */ t.jsx(xi, { href: p, target: "_blank", rel: "noreferrer", children: g })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      Yr,
      {
        isOpen: R,
        onClose: V,
        onSubmit: j,
        error: w,
        isLoading: v,
        callPhone: T
      }
    ),
    /* @__PURE__ */ t.jsx(
      hr,
      {
        isOpen: E,
        onClose: V,
        callPhone: T,
        error: A
      }
    )
  ] });
}, ri = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`, ii = o.div`
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
`, si = o.form`
  display: flex;
  flex-direction: column;
`, ai = o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, li = o.div`
  margin-bottom: 25px;
`, ci = o.div`
  position: relative;
  width: auto;
`, di = o.button`
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
`, pi = o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, ui = o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, xi = o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, hi = o.div`
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
`, fi = (e) => {
  let n = 0;
  for (let i = 0; i < e.length; i++)
    n = e.charCodeAt(i) + ((n << 5) - n);
  return `hsl(${Math.abs(n % 360)}, 60%, 60%)`;
}, Gi = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Ji = (e, n = 100) => {
  const s = document.createElement("canvas");
  s.width = n, s.height = n;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = fi(e);
  i.fillStyle = r, i.beginPath(), i.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const c = n / 2;
  i.font = `bold ${c}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const p = c * 0.1;
  return i.fillText(e, n / 2, n / 2 + p), s.toDataURL("image/png");
}, Ki = (e) => {
  if (!e) return "";
  const n = typeof e == "string" ? new Date(e) : e;
  if (isNaN(n.getTime())) return "";
  const s = n.getDate().toString().padStart(2, "0"), i = (n.getMonth() + 1).toString().padStart(2, "0"), r = n.getFullYear();
  return `${s}-${i}-${r}`;
};
function Qi(e) {
  return new Date(e);
}
const gi = (e) => {
  let n;
  try {
    if (e instanceof Date)
      n = e;
    else if (typeof e == "string" || typeof e == "number")
      n = new Date(e);
    else
      throw new Error("Неподдерживаемый тип данных");
    if (isNaN(n.getTime()))
      return "неверная дата";
    const s = /* @__PURE__ */ new Date();
    if (n > s) {
      const m = Math.floor((n.getTime() - s.getTime()) / 1e3), h = Math.floor(m / 60), v = Math.floor(h / 60), d = Math.floor(v / 24);
      return m < 10 ? "скоро" : m < 60 ? `через ${m} секунд` : h === 1 ? "через минуту" : h < 60 ? `через ${h} минут` : v === 1 ? "через час" : v < 24 ? `через ${v} часов` : d === 1 ? "завтра" : d < 7 ? `через ${d} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - n.getTime()) / 1e3), r = Math.floor(i / 60), c = Math.floor(r / 60), p = Math.floor(c / 24), g = Math.floor(p / 7), k = Math.floor(p / 30), f = Math.floor(p / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const m = Math.max(1, i);
      return m === 1 ? "секунду назад" : m < 5 ? `${m} секунды назад` : `${m} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : c < 24 ? c === 1 ? "час назад" : c < 5 ? `${c} часа назад` : `${c} часов назад` : p < 7 ? p === 1 ? "вчера" : p === 2 ? "позавчера" : `${p} дня назад` : g < 4 ? g === 1 ? "неделю назад" : g < 5 ? `${g} недели назад` : `${g} недель назад` : k < 12 ? k === 1 ? "месяц назад" : k < 5 ? `${k} месяца назад` : `${k} месяцев назад` : f === 1 ? "год назад" : f < 5 ? `${f} года назад` : `${f} лет назад`;
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
}, es = (e, n = {}) => {
  const { useExactAfterMonths: s = 6, includeTime: i = !0 } = n, r = new Date(e);
  return isNaN(r.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= s ? i ? bi(r) : r.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : gi(r);
};
export {
  Se as API_BASE_URL,
  ki as AddButton,
  hr as AuthCallModal,
  qi as AuthPage,
  Ci as BackButton,
  co as BaseModal,
  Li as Checkbox,
  Hi as ColumnChart,
  Me as ContextMenu,
  Bi as CountInfoTitle,
  ue as CustomCalendar,
  Qt as CustomInput,
  Ar as CustomPhoneInput,
  Di as CustomSelect,
  yi as CustomTable,
  Pi as CustomTextArea,
  Ie as CustomTitle,
  De as DefaultButton,
  $i as DeleteButton,
  Mi as EditButton,
  zi as EntitySelectContainer,
  Si as ExportButton,
  Fi as InputTitle,
  Ai as ModalInfoTitle,
  Ti as Pagination,
  Ei as PeriodField,
  Ii as PhoneModalInput,
  Zi as PhotoViewerModal,
  Ni as ProgressBar,
  Oi as RadioButton,
  Vi as ScatterPlot,
  Ui as SideMenu,
  yr as SideMenuContext,
  Ri as Tabs,
  Ee as TitleField,
  _i as ToggleSwitch,
  Yi as YandexMapSelector,
  te as apiRequest,
  ji as authStorage,
  Nr as confirmCallAuth,
  Ki as formatDate,
  bi as formatExactDate,
  ye as formatMoney,
  gi as formatRelativeTime,
  es as formatRelativeTimeExtended,
  Ji as generateAvatar,
  Gi as getInitials,
  Xi as getSessionInfo,
  Or as initiateCallAuth,
  Qi as parseDateInput,
  Wi as parseMoney,
  fi as stringToColor
};
