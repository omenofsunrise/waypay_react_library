import G, { useRef as Z, useState as A, useEffect as U, createContext as Ae, useContext as Be, useMemo as _e } from "react";
import o, { keyframes as Oe } from "styled-components";
import { motion as K, AnimatePresence as le } from "framer-motion";
var oe = { exports: {} }, Q = {};
var ce;
function Ye() {
  if (ce) return Q;
  ce = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, c) {
    var p = null;
    if (c !== void 0 && (p = "" + c), r.key !== void 0 && (p = "" + r.key), "key" in r) {
      c = {};
      for (var f in r)
        f !== "key" && (c[f] = r[f]);
    } else c = r;
    return r = c.ref, {
      $$typeof: e,
      type: i,
      key: p,
      ref: r !== void 0 ? r : null,
      props: c
    };
  }
  return Q.Fragment = n, Q.jsx = s, Q.jsxs = s, Q;
}
var ee = {};
var de;
function We() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === B ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case L:
          return "Fragment";
        case R:
          return "Profiler";
        case k:
          return "StrictMode";
        case D:
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
          case z:
            return a.displayName || "Context";
          case E:
            return (a._context.displayName || "Context") + ".Consumer";
          case I:
            var $ = a.render;
            return a = a.displayName, a || (a = $.displayName || $.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case S:
            return $ = a.displayName || null, $ !== null ? $ : e(a.type) || "Memo";
          case F:
            $ = a._payload, a = a._init;
            try {
              return e(a($));
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
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var T = $.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return T.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), n(a);
      }
    }
    function i(a) {
      if (a === L) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === F)
        return "<...>";
      try {
        var $ = e(a);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var a = v.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (d.call(a, "key")) {
        var $ = Object.getOwnPropertyDescriptor(a, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function f(a, $) {
      function T() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: T,
        configurable: !0
      });
    }
    function y() {
      var a = e(this.type);
      return P[a] || (P[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function x(a, $, T, O, H, X) {
      var N = T.ref;
      return a = {
        $$typeof: u,
        type: a,
        key: $,
        props: T,
        _owner: O
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: y
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
        value: H
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function b(a, $, T, O, H, X) {
      var N = $.children;
      if (N !== void 0)
        if (O)
          if (j(N)) {
            for (O = 0; O < N.length; O++)
              g(N[O]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(N);
      if (d.call($, "key")) {
        N = e(a);
        var q = Object.keys($).filter(function(Fe) {
          return Fe !== "key";
        });
        O = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", C[N + O] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          N,
          q,
          N
        ), C[N + O] = !0);
      }
      if (N = null, T !== void 0 && (s(T), N = "" + T), p($) && (s($.key), N = "" + $.key), "key" in $) {
        T = {};
        for (var ne in $)
          ne !== "key" && (T[ne] = $[ne]);
      } else T = $;
      return N && f(
        T,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), x(
        a,
        N,
        T,
        r(),
        H,
        X
      );
    }
    function g(a) {
      w(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === F && (a._payload.status === "fulfilled" ? w(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function w(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    var h = G, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), L = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), S = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), v = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, d = Object.prototype.hasOwnProperty, j = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var _, P = {}, V = h.react_stack_bottom_frame.bind(
      h,
      c
    )(), m = M(i(c)), C = {};
    ee.Fragment = L, ee.jsx = function(a, $, T) {
      var O = 1e4 > v.recentlyCreatedOwnerStacks++;
      return b(
        a,
        $,
        T,
        !1,
        O ? Error("react-stack-top-frame") : V,
        O ? M(i(a)) : m
      );
    }, ee.jsxs = function(a, $, T) {
      var O = 1e4 > v.recentlyCreatedOwnerStacks++;
      return b(
        a,
        $,
        T,
        !0,
        O ? Error("react-stack-top-frame") : V,
        O ? M(i(a)) : m
      );
    };
  })()), ee;
}
var pe;
function Ne() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? oe.exports = Ye() : oe.exports = We()), oe.exports;
}
var t = Ne();
const Le = ({ x: e, y: n, items: s, onClose: i, ...r }) => {
  const c = Z(null), [p, f] = A(null);
  U(() => {
    const h = (u) => {
      c.current && !c.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const x = (() => {
    if (!c.current) return { x: e, y: n };
    const h = c.current.offsetWidth, u = c.current.offsetHeight, l = window.innerWidth, L = window.innerHeight;
    let k = e, R = n;
    return k + h > l && (k = e - h), R + u > L && (R = n - u), { x: k, y: R };
  })(), b = (h, u) => {
    h.submenu ? f(p === u ? null : u) : h.action && (h.action(), i());
  }, g = (h) => {
    s[h].submenu && f(h);
  }, w = (h) => {
    const u = h.relatedTarget;
    c.current?.contains(u) || f(null);
  };
  return /* @__PURE__ */ t.jsx(
    He,
    {
      ref: c,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: x.y,
        left: x.x
      },
      onClick: (h) => h.stopPropagation(),
      onMouseLeave: w,
      ...r,
      children: s.map((h, u) => /* @__PURE__ */ t.jsxs(Ve, { $hasSubmenu: !!h.submenu, $disabled: h.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ze,
          {
            onClick: (l) => {
              l.stopPropagation(), h.disabled || b(h, u);
            },
            onMouseEnter: () => !h.disabled && g(u),
            whileHover: h.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: h.color,
            $disabled: h.disabled,
            children: /* @__PURE__ */ t.jsxs(Ue, { children: [
              h.label,
              h.submenu && /* @__PURE__ */ t.jsx(Xe, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
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
            children: /* @__PURE__ */ t.jsx(Le, { x: 0, y: -u * 40, items: h.submenu, onClose: () => f(null) })
          }
        )
      ] }, u))
    }
  );
}, He = o(K.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, Ve = o.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, Ze = o(K.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: n }) => n ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Ue = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, Xe = o.span`
  color: #666;
  margin-left: 8px;
`, Ge = o(K.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, li = ({
  columns: e,
  data: n,
  onRowDoubleClick: s,
  contextMenuActions: i = [],
  onSort: r,
  sortConfig: c,
  onRowClick: p,
  selectedRow: f,
  fixedHeight: y,
  hasTotalsRow: x,
  debtChecker: b,
  rowStyles: g = {},
  isLoading: w
}) => {
  const [h, u] = A(null), [l, L] = A(null), k = Z(null), R = Z(null), E = 500, z = f !== void 0 ? f : h, I = (m) => {
    !e[m].isSortable || !r || r(m);
  }, Y = b || ((m) => {
    const C = m[8];
    return typeof C == "string" ? parseFloat(C.replace(/[^\d.]/g, "")) > 0 : !1;
  }), S = (m) => {
    f === void 0 && u(m === z ? null : m), p && p(n[m], m);
  }, F = (m, C) => {
    s && s(m, C);
  }, W = (m, C) => {
    if (i.length === 0) return;
    m.preventDefault();
    const a = "touches" in m ? m.touches[0].clientX : m.clientX, $ = "touches" in m ? m.touches[0].clientY : m.clientY;
    L({
      x: a,
      y: $,
      rowIndex: C
    });
  }, B = (m, C) => {
    m.preventDefault(), W(m, C);
  }, v = (m, C) => {
    i.length !== 0 && (R.current && clearTimeout(R.current), R.current = window.setTimeout(() => {
      W(m, C);
    }, E));
  }, d = () => {
    R.current && (clearTimeout(R.current), R.current = null);
  }, j = () => {
    R.current && window.clearTimeout(R.current);
  }, M = () => {
    L(null);
  };
  U(() => {
    const m = () => {
      l && M();
    };
    return document.addEventListener("click", m), () => {
      document.removeEventListener("click", m), R.current && clearTimeout(R.current);
    };
  }, [l]);
  const _ = (m, C, a) => {
    if (C)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const $ = g[m] || {};
    return m === z ? {
      backgroundColor: $.backgroundColor || "#007D88",
      color: $.color || "#FFFFFF",
      fontWeight: $.fontWeight || "normal"
    } : a ? {
      backgroundColor: $.backgroundColor || "#E8D8D8",
      color: $.color || "inherit",
      fontWeight: $.fontWeight || "normal"
    } : n[m][n[m].length - 1] === !1 ? {
      backgroundColor: $.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: $.fontWeight || "normal"
    } : {
      backgroundColor: $.backgroundColor || "#FFFFFF",
      color: $.color || "inherit",
      fontWeight: $.fontWeight || "normal"
    };
  }, P = (m, C, a) => {
    if (C) return "#FFFFFF";
    const $ = _(m, C, a);
    return $.hoverBackgroundColor ? $.hoverBackgroundColor : m === z ? "#007D88" : a ? "#E8D8D8CC" : n[m][n[m].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, V = () => {
    if (!l || i.length === 0) return null;
    const m = (typeof i == "function" ? i(n[l.rowIndex]) : i).filter(
      (C) => typeof C == "object" && (typeof C.shouldShow != "function" || C.shouldShow(n[l.rowIndex]))
    );
    return m.length === 0 ? null : /* @__PURE__ */ t.jsx(
      et,
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
        onClick: (C) => C.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Le,
          {
            items: m.map((C) => {
              const a = {
                label: C.label,
                color: C.color,
                disabled: C.disabled
              };
              return C.getSubmenu ? a.submenu = C.getSubmenu(n[l.rowIndex]) : C.action && (a.action = () => {
                C.action(n[l.rowIndex], l.rowIndex), M();
              }), a;
            }),
            onClose: M,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(Ke, { ref: k, children: w ? /* @__PURE__ */ t.jsx(qe, { children: /* @__PURE__ */ t.jsx(Je, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Qe, { children: [
      /* @__PURE__ */ t.jsx(tt, { children: /* @__PURE__ */ t.jsx(ue, { children: e.map(
        (m, C) => !m.isHidden && /* @__PURE__ */ t.jsx(
          nt,
          {
            $isSortable: m.isSortable,
            $isActive: c?.key === C,
            onClick: () => I(C),
            $align: m.align || "center",
            $isFirst: C === 0,
            $isLast: C === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(rt, { $align: m.align || "center", children: [
              m.name,
              m.isSortable && /* @__PURE__ */ t.jsx(
                it,
                {
                  $direction: c?.key === C ? c.direction : "asc",
                  animate: {
                    rotate: c?.key === C && c.direction === "desc" ? 180 : 0,
                    color: c?.key === C ? "#007D88" : "#6B7280"
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
          C
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(ot, { $fixedHeight: y, children: /* @__PURE__ */ t.jsx(le, { children: n.map((m, C) => {
        const a = !!(x && C === n.length - 1), $ = !!(!a && Y(m)), T = _(C, a, $), O = P(C, a, $);
        return /* @__PURE__ */ t.jsx(
          ue,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: T.backgroundColor || "#FFFFFF",
              color: T.color || "inherit",
              fontWeight: T.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: C === n.length - 1,
            $isSelected: C === z,
            $isTotalsRow: a,
            onClick: () => !a && S(C),
            onDoubleClick: () => !a && F(m, C),
            onContextMenu: (H) => !a && B(H, C),
            onTouchStart: (H) => !a && v(H, C),
            onTouchEnd: d,
            onTouchMove: j,
            whileHover: a ? {} : {
              backgroundColor: O,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: T.backgroundColor || "#FFFFFF",
              color: T.color || "inherit",
              fontWeight: T.fontWeight || "normal"
            },
            children: m.map(
              (H, X) => !e[X]?.isHidden && /* @__PURE__ */ t.jsx(
                st,
                {
                  $align: e[X]?.align || "center",
                  $isFirst: X === 0,
                  $isLast: X === m.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && X < m.findIndex((N) => N === "Итого:"),
                  children: H
                },
                X
              )
            )
          },
          `row-${C}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(le, { children: V() })
  ] }) });
}, qe = o.div`
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
`, Je = o.div`
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
`, Ke = o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, Qe = o.table`
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
`, et = o(K.div)`
  z-index: 1000;
  pointer-events: auto;
`, tt = o.thead`
  text-align: center;
  position: relative;
`, ot = o.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, ue = o(K.tr)`
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
`, nt = o.th`
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
`, rt = o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, it = o(K.span)`
  display: inline-flex;
  align-items: center;
`, st = o.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: n }) => e || n ? "none" : "0.5px solid #d1d5db"};
`, ci = ({ onClick: e, tooltip: n, size: s = 32, margin: i }) => /* @__PURE__ */ t.jsx(at, { onClick: e, size: s, margin: i, title: n, children: /* @__PURE__ */ t.jsx(lt, { size: s }) }), at = o.button`
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
`, lt = o.div`
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
`, ct = o.button`
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
`, di = ({ children: e, onClick: n }) => /* @__PURE__ */ t.jsxs(ct, { onClick: n, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "#50555C"
    }
  ) }),
  e
] }), dt = ({
  children: e = "Подтвердить",
  icon: n,
  disabled: s = !1,
  bg: i = "rgba(0, 125, 136, 1)",
  hoverBg: r = "rgba(0, 150, 163, 1)",
  disabledBg: c = "rgba(102, 177, 184, 1)",
  textColor: p = "white",
  fullWidth: f = !1,
  minWidth: y,
  ...x
}) => /* @__PURE__ */ t.jsxs(
  pt,
  {
    disabled: s,
    $bg: i,
    $hoverBg: r,
    $disabledBg: c,
    $textColor: p,
    $fullWidth: f,
    $minWidth: y,
    ...x,
    children: [
      n && /* @__PURE__ */ t.jsx(ut, { children: n }),
      /* @__PURE__ */ t.jsx("span", { children: e })
    ]
  }
), pt = o.button`
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
  width: ${({ $fullWidth: e }) => e ? "100%" : "auto"};
  min-width: ${({ $minWidth: e }) => e || "auto"};

  &:hover {
    background-color: ${({ disabled: e, $hoverBg: n, $disabledBg: s }) => e ? s : n};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }
`, ut = o.span`
  display: inline-flex;
  align-items: center;
`, pi = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(ht, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
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
) }), ht = o.button`
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
`, ui = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(xt, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
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
) }), xt = o.button`
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
] }), hi = ({
  children: e = "Экспорт",
  icon: n = /* @__PURE__ */ t.jsx(gt, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...c
}) => {
  const p = async (f) => {
    if (s)
      try {
        await s();
      } catch (y) {
        console.error("Export error:", y);
      }
    c.onClick && c.onClick(f);
  };
  return /* @__PURE__ */ t.jsx(ft, { ...c, onClick: p, disabled: i || c.disabled, children: i ? /* @__PURE__ */ t.jsxs(bt, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(mt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    n,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, ft = o.button`
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
`, bt = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, mt = o.div`
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
`, xi = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  options: p,
  name: f,
  disabled: y = !1,
  required: x = !1,
  ...b
}) => {
  const [g, w] = G.useState(!1), [h, u] = G.useState(!1), l = G.useRef(null), L = !!(n && !s && !g), k = (D) => {
    i && !y && i({
      target: { value: D, name: f }
    }), u(!1), w(!1);
  }, R = (D) => {
    l.current && !l.current.contains(D.target) && (u(!1), w(!1));
  }, E = () => {
    y || (u(!h), w(!h));
  };
  G.useEffect(() => (document.addEventListener("mousedown", R), () => {
    document.removeEventListener("mousedown", R);
  }), []);
  const z = p.find((D) => D.value === s), I = z ? z.label : "";
  return /* @__PURE__ */ t.jsxs(wt, { ref: l, ...b, children: [
    /* @__PURE__ */ t.jsxs(vt, { children: [
      /* @__PURE__ */ t.jsxs(
        yt,
        {
          hasError: r,
          isOpen: h,
          disabled: y,
          onClick: E,
          onFocus: () => !y && w(!0),
          onBlur: () => w(!1),
          tabIndex: y ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(kt, { children: I || e && /* @__PURE__ */ t.jsx(jt, { children: e }) }),
            /* @__PURE__ */ t.jsx(Ct, { isOpen: h, disabled: y, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: y ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx($t, { children: p.map((D) => /* @__PURE__ */ t.jsxs(Mt, { $isSelected: D.value === s, onClick: () => k(D.value), children: [
        /* @__PURE__ */ t.jsx(St, { $isSelected: D.value === s, children: D.value === s && /* @__PURE__ */ t.jsx(Lt, {}) }),
        /* @__PURE__ */ t.jsx(Tt, { children: D.label })
      ] }, D.value)) })
    ] }),
    n && /* @__PURE__ */ t.jsx(Dt, { isVisible: L, children: n }),
    r && c && /* @__PURE__ */ t.jsx(Et, { children: c }),
    /* @__PURE__ */ t.jsx(Pt, { name: f, value: s || "", onChange: () => {
    }, tabIndex: -1, required: x, children: p.map((D) => /* @__PURE__ */ t.jsx("option", { value: D.value, children: D.label }, D.value)) })
  ] });
}, wt = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, vt = o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, yt = o.div`
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
`, kt = o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, jt = o.span`
  color: rgba(80, 85, 92, 1);
`, Ct = o.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, $t = o.div`
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
`, Mt = o.div`
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
`, St = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Lt = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Tt = o.span`
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
`, Et = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Pt = o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, gi = ({ checked: e = !1, onChange: n, className: s, label: i, disabled: r = !1 }) => {
  const [c, p] = A(!1), f = () => {
    r || !n || n(!e);
  }, y = (x) => {
    r || (x.key === "Enter" || x.key === " ") && (x.preventDefault(), f());
  };
  return /* @__PURE__ */ t.jsxs(Rt, { className: s, onClick: f, onKeyPress: y, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      It,
      {
        checked: e,
        isFocused: c,
        disabled: r,
        onMouseEnter: () => !r && p(!0),
        onMouseLeave: () => !r && p(!1),
        onFocus: () => !r && p(!0),
        onBlur: () => !r && p(!1),
        children: e && /* @__PURE__ */ t.jsx(Ft, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(zt, { disabled: r, children: i })
  ] });
}, Rt = o.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, It = o.div`
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
`, zt = o.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, Ft = o.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, At = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", he = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Bt = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], xe = ({ prefix: e = "Дата:", value: n = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [c, p] = A(!1), [f, y] = A(/* @__PURE__ */ new Date()), [x, b] = A(n ? new Date(n) : null), [g, w] = A(!1), [h, u] = A(!1), l = Z(null), L = Z(null), k = Z(null);
  U(() => {
    const d = (j) => {
      l.current && !l.current.contains(j.target) && p(!1), L.current && !L.current.contains(j.target) && w(!1), k.current && !k.current.contains(j.target) && u(!1);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []), U(() => {
    b(n ? new Date(n) : null);
  }, [n]);
  const R = (d) => {
    const j = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    b(d);
    const M = j.toISOString().split("T")[0];
    i?.(M), p(!1);
  }, E = () => {
    const d = /* @__PURE__ */ new Date();
    y(d);
    const M = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString().split("T")[0];
    i?.(M), p(!1);
  }, z = () => {
    b(null), i?.(""), r?.(), p(!1);
  }, I = (d) => {
    const j = new Date(f);
    j.setMonth(d), y(j), w(!1);
  }, D = (d) => {
    const j = new Date(f);
    j.setFullYear(d), y(j), u(!1);
  }, Y = () => {
    const d = f.getFullYear(), j = f.getMonth(), M = new Date(d, j, 1), P = new Date(d, j + 1, 0).getDate(), V = M.getDay() === 0 ? 6 : M.getDay() - 1, m = [], C = 35, a = new Date(d, j, 0).getDate();
    for (let T = 0; T < V; T++) {
      const O = a - V + T + 1, H = new Date(d, j - 1, O), X = !!(x && H.getDate() === x.getDate() && H.getMonth() === x.getMonth() && H.getFullYear() === x.getFullYear());
      m.push(
        /* @__PURE__ */ t.jsx(re, { selected: X, onClick: () => R(H), otherMonth: !0, children: O }, `prev-${O}`)
      );
    }
    for (let T = 1; T <= P; T++) {
      const O = new Date(d, j, T), H = !!(x && O.getDate() === x.getDate() && O.getMonth() === x.getMonth() && O.getFullYear() === x.getFullYear());
      m.push(
        /* @__PURE__ */ t.jsx(re, { selected: H, onClick: () => R(O), children: T }, `current-${T}`)
      );
    }
    const $ = C - m.length;
    for (let T = 1; T <= $; T++) {
      const O = new Date(d, j + 1, T), H = !!(x && O.getDate() === x.getDate() && O.getMonth() === x.getMonth() && O.getFullYear() === x.getFullYear());
      m.push(
        /* @__PURE__ */ t.jsx(re, { selected: H, onClick: () => R(O), otherMonth: !0, children: T }, `next-${T}`)
      );
    }
    return m;
  }, S = () => x ? x.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, F = () => {
    const d = (/* @__PURE__ */ new Date()).getFullYear(), j = [];
    for (let M = d - 10; M <= d + 10; M++)
      j.push(M);
    return j;
  }, W = (d) => {
    d.preventDefault(), d.stopPropagation(), w(!g), u(!1);
  }, B = (d) => {
    d.preventDefault(), d.stopPropagation(), u(!h), w(!1);
  }, v = (d) => {
    const j = d === "next" ? 1 : -1, M = new Date(f);
    M.setMonth(M.getMonth() + j), y(M);
  };
  return /* @__PURE__ */ t.jsxs(_t, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(Ot, { onClick: () => p(!c), children: [
      e && /* @__PURE__ */ t.jsx(Yt, { children: e }),
      /* @__PURE__ */ t.jsx(Wt, { isEmpty: !x, children: S() }),
      /* @__PURE__ */ t.jsx(Nt, { src: At, alt: "Календарь" })
    ] }),
    c && /* @__PURE__ */ t.jsxs(Ht, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Vt, { children: [
        /* @__PURE__ */ t.jsx(
          me,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), v("prev");
            },
            onMouseDown: (d) => d.preventDefault(),
            children: /* @__PURE__ */ t.jsx(we, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Zt, { children: [
          /* @__PURE__ */ t.jsxs(Gt, { ref: L, children: [
            /* @__PURE__ */ t.jsxs(Ut, { onClick: (d) => W(d), onMouseDown: (d) => d.preventDefault(), children: [
              he[f.getMonth()],
              /* @__PURE__ */ t.jsx(ge, { $open: g })
            ] }),
            g && /* @__PURE__ */ t.jsx(fe, { $width: 120, onClick: (d) => d.stopPropagation(), children: he.map((d, j) => /* @__PURE__ */ t.jsx(
              be,
              {
                $selected: j === f.getMonth(),
                onClick: (M) => {
                  M.stopPropagation(), I(j);
                },
                children: d
              },
              d
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(qt, { ref: k, children: [
            /* @__PURE__ */ t.jsxs(Xt, { onClick: (d) => B(d), onMouseDown: (d) => d.preventDefault(), children: [
              f.getFullYear(),
              /* @__PURE__ */ t.jsx(ge, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(fe, { $width: 80, onClick: (d) => d.stopPropagation(), children: F().map((d) => /* @__PURE__ */ t.jsx(
              be,
              {
                $selected: d === f.getFullYear(),
                onClick: (j) => {
                  j.stopPropagation(), D(d);
                },
                children: d
              },
              d
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          me,
          {
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), v("next");
            },
            onMouseDown: (d) => d.preventDefault(),
            children: /* @__PURE__ */ t.jsx(we, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Jt, { children: Bt.map((d) => /* @__PURE__ */ t.jsx(Kt, { children: d }, d)) }),
      /* @__PURE__ */ t.jsx(Qt, { children: Y() }),
      /* @__PURE__ */ t.jsxs(eo, { children: [
        /* @__PURE__ */ t.jsx(ve, { onClick: z, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(ve, { onClick: E, children: "Сегодня" })
      ] })
    ] })
  ] });
}, _t = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`, Ot = o.div`
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
`, Yt = o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`, Wt = o.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Nt = o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Ht = o.div`
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
`, Vt = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Zt = o.div`
  display: flex;
  gap: 8px;
  color: black;
`, Te = o.button`
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
`, Ut = o(Te)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Xt = o(Te)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Gt = o.div`
  position: relative;
`, qt = o.div`
  position: relative;
`, ge = o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, fe = o.div`
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
`, be = o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, me = o.button`
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
`, we = o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, Jt = o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, Kt = o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, Qt = o.div`
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
`, eo = o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, ve = o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, to = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: c = !1,
  errorMessage: p,
  ...f
}) => {
  const [y, x] = G.useState(!1), b = !!(n && !s && !y), g = (u) => {
    if (!r) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(u);
        break;
      case "rubles": {
        const k = u.target.selectionStart, R = u.target.value;
        let E = R.replace(/[^\d]/g, "");
        if (E === "") {
          u.target.value = "", r(u);
          break;
        }
        const z = parseInt(E, 10);
        if (!isNaN(z)) {
          let I = z.toLocaleString("ru-RU");
          I += " ₽";
          const D = w(R, k || 0), Y = h(I, D);
          u.target.value = I, r(u), setTimeout(() => {
            u.target.setSelectionRange(Y, Y);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const k = l.split(".");
        k.length > 2 && (l = k[0] + "." + k.slice(1).join("")), k.length === 2 && k[1].length > 2 && (l = k[0] + "." + k[1].slice(0, 2));
        const R = parseFloat(l);
        if (isNaN(R) || (R > 100 ? l = "100" : R < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const E = u.target.selectionStart || 0, z = l.replace(" %", "");
          u.target.value = l, r(u), setTimeout(() => {
            E < z.length && u.target.setSelectionRange(E, E);
          }, 0);
        } else
          u.target.value = l, r(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let L = l.split(" ").filter((k) => k.length > 0);
        L = L.slice(0, 3), l = L.map((k) => {
          if (k.startsWith("-") && (k = k.substring(1)), (k.match(/-/g) || []).length > 1) {
            const E = k.split("-");
            k = E[0] + "-" + E.slice(1).join("");
          }
          return k.includes("-") ? k.split("-").map((E, z) => E.length === 0 ? "" : (z > 0, E[0].toUpperCase() + E.slice(1).toLowerCase())).join("-") : k.length > 0 ? k[0].toUpperCase() + k.slice(1).toLowerCase() : "";
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
  }, w = (u, l) => {
    let L = 0;
    for (let k = 0; k < Math.min(l, u.length); k++)
      /\d/.test(u[k]) && L++;
    return L;
  }, h = (u, l) => {
    let L = 0;
    for (let k = 0; k < u.length; k++) {
      if (L >= l)
        return k;
      /\d/.test(u[k]) && L++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(oo, { children: [
    /* @__PURE__ */ t.jsx(
      no,
      {
        ...f,
        value: s,
        placeholder: b ? "" : e,
        onFocus: () => x(!0),
        onBlur: (u) => {
          x(!1), f.onBlur?.(u);
        },
        onChange: g,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: c
      }
    ),
    n && /* @__PURE__ */ t.jsx(ro, { isVisible: b, children: n }),
    c && p && /* @__PURE__ */ t.jsx(io, { children: p })
  ] });
}, oo = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, no = o.input`
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
`, ro = o.label`
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
`, io = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, fi = ({ total: e, current: n = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [c, p] = A(n), f = (x) => {
    x < 1 || x > r || x === c || (p(x), s?.(x));
  }, y = () => {
    const x = [];
    let g = 1, w = r;
    if (r > 5) {
      const h = Math.floor(2.5);
      g = Math.max(c - h, 1), w = Math.min(c + h, r), c <= h + 1 ? w = 5 : c >= r - h && (g = r - 5 + 1);
    }
    for (let h = g; h <= w; h++)
      x.push(
        /* @__PURE__ */ t.jsx(te, { active: h === c, onClick: () => f(h), children: h }, h)
      );
    return g > 1 && (g > 2 && x.unshift(/* @__PURE__ */ t.jsx(te, { children: "..." }, "start-ellipsis")), x.unshift(
      /* @__PURE__ */ t.jsx(te, { active: c === 1, onClick: () => f(1), children: "1" }, 1)
    )), w < r && (w < r - 1 && x.push(/* @__PURE__ */ t.jsx(te, { children: "..." }, "end-ellipsis")), x.push(
      /* @__PURE__ */ t.jsx(te, { active: r === c, onClick: () => f(r), children: r }, r)
    )), x;
  };
  return /* @__PURE__ */ t.jsxs(so, { children: [
    /* @__PURE__ */ t.jsx(ye, { disabled: c === 1, onClick: () => f(c - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    y(),
    /* @__PURE__ */ t.jsx(ye, { disabled: c === r, onClick: () => f(c + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, so = o.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, te = o.div`
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
`, ye = o.button`
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
`, bi = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  onChange: i,
  hasError: r = !1,
  errorMessage: c,
  rows: p = 3,
  ...f
}) => {
  const [y, x] = G.useState(!1), b = !!(n && !s && !y);
  return /* @__PURE__ */ t.jsxs(ao, { children: [
    /* @__PURE__ */ t.jsx(
      lo,
      {
        ...f,
        value: s,
        placeholder: b ? "" : e,
        onFocus: () => x(!0),
        onBlur: (g) => {
          x(!1), f.onBlur?.(g);
        },
        onChange: i,
        hasError: r,
        rows: p
      }
    ),
    n && /* @__PURE__ */ t.jsx(co, { isVisible: b, children: n }),
    r && c && /* @__PURE__ */ t.jsx(po, { children: c })
  ] });
}, ao = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, lo = o.textarea`
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
`, co = o.label`
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
`, po = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, uo = ({
  title: e,
  onClose: n,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: c = !1,
  isSubmitting: p = !1,
  mode: f = "create",
  hideSaveButton: y = !1,
  hideCanselButton: x = !1,
  width: b = "562px",
  saveButtonText: g = "Сохранить",
  customLayout: w
}) => {
  const h = f === "view", u = Z(null), l = (L) => {
    L.preventDefault(), s();
  };
  return U(() => {
    const L = (k) => {
      k.key === "Escape" && n();
    };
    return document.addEventListener("keydown", L), () => {
      document.removeEventListener("keydown", L);
    };
  }, [n]), /* @__PURE__ */ t.jsx(ho, { children: /* @__PURE__ */ t.jsxs(xo, { width: b, ref: u, children: [
    /* @__PURE__ */ t.jsx(fo, { onClick: n, children: "×" }),
    /* @__PURE__ */ t.jsx(De, { children: /* @__PURE__ */ t.jsx(Ee, { children: e }) }),
    /* @__PURE__ */ t.jsx("div", { className: "modal-body", children: w }),
    /* @__PURE__ */ t.jsxs(go, { onSubmit: i, children: [
      /* @__PURE__ */ t.jsx(bo, { children: r }),
      /* @__PURE__ */ t.jsxs(mo, { children: [
        !x && /* @__PURE__ */ t.jsx(wo, { onClick: l, children: "Отменить" }),
        !h && !y && /* @__PURE__ */ t.jsx(
          dt,
          {
            style: {
              minWidth: "136px",
              padding: "10p 20px",
              borderRadius: "10px",
              fontSize: "16px"
            },
            type: "submit",
            disabled: c || p,
            children: p ? "Сохранение..." : g || "Сохранить"
          }
        )
      ] })
    ] })
  ] }) });
}, ho = o.div`
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
`, xo = o.div`
  width: ${(e) => e.width};
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
`, go = o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: visible;
`, De = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`, Ee = o.h2`
  font-size: 30px;
  font-weight: 600;
  color: #000;
  margin-left: 25px;
  margin-bottom: 0;
`, fo = o.button`
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
`, bo = o.div`
  flex: 1;
  margin-bottom: 20px;
  min-height: 0;
  overflow: visible;
`, mo = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px 20px 30px;
`, wo = o.button`
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
`, vo = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], mi = ({
  value: e = "",
  placeholder: n = "Выберите период",
  options: s = vo,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: c
}) => {
  const [p, f] = A(!1), [y, x] = A(!1), [b, g] = A(""), [w, h] = A(""), [u, l] = A(""), L = Z(null), k = Z(null);
  U(() => {
    if (e === "Custom" && w && u) {
      const S = D(w), F = D(u);
      g(`С ${S} по ${F}`);
    } else {
      const S = s.find((F) => F.value === e);
      g(S ? S.label : "");
    }
  }, [e, s, w, u]), U(() => {
    const S = (F) => {
      L.current && !L.current.contains(F.target) && f(!1), y && k.current && !k.current.contains(F.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((v) => v.contains(F.target)) || x(!1));
    };
    return document.addEventListener("mousedown", S), () => {
      document.removeEventListener("mousedown", S);
    };
  }, [y]);
  const R = (S) => {
    r?.(S.value), f(!1);
  }, E = () => {
    f(!1), c ? c() : x(!0);
  }, z = () => {
    r?.(""), g(""), h(""), l("");
  }, I = () => {
    if (w && u) {
      const S = D(w), F = D(u), W = `С ${S} по ${F}`;
      r?.("Custom", w, u), g(W), x(!1);
    }
  }, D = (S) => {
    const F = new Date(S), W = String(F.getDate()).padStart(2, "0"), B = String(F.getMonth() + 1).padStart(2, "0"), v = F.getFullYear();
    return `${W}.${B}.${v}`;
  }, Y = () => /* @__PURE__ */ t.jsxs(Po, { children: [
    /* @__PURE__ */ t.jsx(De, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Ee, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(Ro, { onClick: z, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(yo, { ref: L, children: [
      /* @__PURE__ */ t.jsxs(ko, { onClick: () => f(!p), children: [
        /* @__PURE__ */ t.jsx(jo, { children: b || n }),
        /* @__PURE__ */ t.jsx(Co, { $isOpen: p, children: "▼" })
      ] }),
      p && /* @__PURE__ */ t.jsxs($o, { children: [
        s.map((S) => /* @__PURE__ */ t.jsxs(Mo, { onClick: () => R(S), $isSelected: e === S.value, children: [
          /* @__PURE__ */ t.jsx(So, { $isSelected: e === S.value, children: e === S.value && /* @__PURE__ */ t.jsx(Lo, {}) }),
          /* @__PURE__ */ t.jsx(To, { children: S.label })
        ] }, S.id)),
        i && /* @__PURE__ */ t.jsx(Do, { onClick: E, children: "Другой период" })
      ] })
    ] }),
    y && /* @__PURE__ */ t.jsx("div", { ref: k, children: /* @__PURE__ */ t.jsx(
      uo,
      {
        title: "",
        onClose: () => x(!1),
        onCancel: () => x(!1),
        onSave: (S) => {
          S.preventDefault(), I();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(Y, {}),
        children: /* @__PURE__ */ t.jsxs(Eo, { children: [
          /* @__PURE__ */ t.jsx(ke, { children: /* @__PURE__ */ t.jsx(xe, { value: w, onChange: (S) => h(S) }) }),
          /* @__PURE__ */ t.jsx(ke, { children: /* @__PURE__ */ t.jsx(xe, { value: u, onChange: (S) => l(S) }) })
        ] })
      }
    ) })
  ] });
}, yo = o.div`
  position: relative;
  width: 245px;
`, ko = o.div`
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
`, jo = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Co = o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, $o = o.div`
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
`, Mo = o.div`
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
`, So = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Lo = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, To = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Do = o.div`
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
`, Eo = o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, ke = o.div`
  flex: 1;
`, Po = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, Ro = o.button`
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
`, wi = ({
  name: e,
  value: n,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: c = "8 (999) 500-50-50",
  customPlaceholder: p,
  tabIndex: f,
  disabled: y = !1,
  hasError: x = !1,
  errorMessage: b
}) => {
  const [g, w] = G.useState(!1), h = G.useRef(null), u = !!(p && !n && !g), l = (E) => {
    const I = E.replace(/\D/g, "").slice(0, 11);
    let D = "";
    return I.length > 0 && (D += "8"), I.length > 1 && (D += ` (${I.slice(1, 4)}`), I.length > 4 && (D += `) ${I.slice(4, 7)}`), I.length > 7 && (D += `-${I.slice(7, 9)}`), I.length > 9 && (D += `-${I.slice(9, 11)}`), D;
  }, L = (E) => {
    const z = l(E.target.value), I = {
      ...E,
      target: {
        ...E.target,
        name: e,
        value: z
      }
    };
    s(I);
  }, k = (E) => {
    w(!1), i?.(E);
  }, R = (E) => {
    r?.(E);
  };
  return /* @__PURE__ */ t.jsxs(Io, { children: [
    /* @__PURE__ */ t.jsx(
      zo,
      {
        ref: h,
        name: e,
        type: "tel",
        value: n,
        onChange: L,
        onKeyPress: R,
        placeholder: u ? "" : c,
        maxLength: 18,
        tabIndex: f,
        disabled: y,
        hasError: x,
        onFocus: () => w(!0),
        onBlur: k,
        inputMode: "tel"
      }
    ),
    p && /* @__PURE__ */ t.jsx(Fo, { isVisible: u, children: p }),
    x && b && /* @__PURE__ */ t.jsx(Ao, { children: b })
  ] });
}, Io = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, zo = o.input`
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
`, Fo = o.label`
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
`, Ao = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, vi = ({ tabs: e, activeTab: n, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const c = e.find((p) => p.id === n)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Bo, { children: /* @__PURE__ */ t.jsxs(_o, { children: [
      e.map((p) => /* @__PURE__ */ t.jsxs(Oo, { $isActive: n === p.id, onClick: () => s(p.id), $fontSize: r, children: [
        p.label,
        n === p.id && /* @__PURE__ */ t.jsx(Yo, {})
      ] }, p.id)),
      i && /* @__PURE__ */ t.jsx(Wo, { children: i })
    ] }) }),
    c && /* @__PURE__ */ t.jsx(No, { children: c })
  ] });
}, Bo = o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, _o = o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Oo = o.li`
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
`, Yo = o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Wo = o.li`
  margin-left: auto;
  padding: 4px 0;
`, No = o.div`
  margin-top: 20px;
`, yi = ({
  mode: e,
  primaryValue: n,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: c,
  disabled: p = !1,
  hasError: f = !1,
  errorMessage: y = "",
  customIcon: x
}) => {
  const g = x || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(Uo, { children: [
    /* @__PURE__ */ t.jsx(Xo, { children: n || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(Go, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(Ho, { children: [
    /* @__PURE__ */ t.jsxs(Vo, { children: [
      /* @__PURE__ */ t.jsx(Zo, { type: "text", value: n || "", placeholder: i, readOnly: !0, disabled: p }),
      n && !p && /* @__PURE__ */ t.jsx(Jo, { type: "button", onClick: c, "aria-label": "Очистить", children: "×" })
    ] }),
    !p && /* @__PURE__ */ t.jsx(qo, { type: "button", onClick: r, "aria-label": "Выбрать", children: g }),
    f && y && /* @__PURE__ */ t.jsx(Ko, { children: y })
  ] });
}, Ho = o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Vo = o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Zo = o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, Uo = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, Xo = o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, Go = o.span`
  font-size: 13px;
  color: #666;
`, qo = o.button`
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
`, Jo = o.button`
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
`, Ko = o.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, Pe = o.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, ki = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(Qo, { children: [
  "Всего: ",
  e
] }) }), Qo = o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, ji = o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, Ci = o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, en = o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, tn = o.span`
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
`, on = o.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, $i = ({ checked: e, onChange: n, disabled: s }) => {
  const i = () => {
    s || n(!e);
  };
  return /* @__PURE__ */ t.jsxs(en, { children: [
    /* @__PURE__ */ t.jsx(on, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(tn, { checked: e, disabled: s })
  ] });
}, Mi = ({ id: e, name: n, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(nn, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(rn, { type: "radio", id: e, name: n, checked: s, onChange: i }),
  r
] }), nn = o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, rn = o.input`
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
`, Si = ({
  percentage: e,
  onChange: n,
  draggable: s = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const r = Z(null), [c, p] = A(!1), f = (g) => {
    !s || !n || (g.preventDefault(), p(!0), b(g));
  }, y = (g) => {
    !c || !n || b(g);
  }, x = () => {
    p(!1);
  }, b = (g) => {
    if (!r.current || !n) return;
    const w = r.current.getBoundingClientRect();
    let u = (g.clientX - w.left) / w.width * 100;
    u = Math.max(0, Math.min(100, u)), n(Math.round(u));
  };
  return U(() => {
    if (c)
      return document.addEventListener("mousemove", y), document.addEventListener("mouseup", x), () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", x);
      };
  }, [c]), /* @__PURE__ */ t.jsxs(sn, { ref: r, $draggable: s, onMouseDown: f, children: [
    /* @__PURE__ */ t.jsx(an, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(ln, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(cn, { $percentage: e, $primaryColor: i.primary })
  ] });
}, sn = o.div`
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
`, an = o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, ln = o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, cn = o.div`
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
`, dn = ["zoomControl", "fullscreenControl"];
let ie = null;
const pn = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((n, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => n(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Li = ({
  onLocationSelect: e,
  initialAddress: n = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: c = 12,
  height: p = 400,
  width: f = "100%",
  inputPlaceholder: y = "Введите адрес или название места",
  searchButtonLabel: x = "Найти",
  draggablePlacemark: b = !0,
  controls: g = dn,
  showSearch: w = !0,
  className: h,
  style: u,
  onError: l
}) => {
  const [L, k] = A(null), [R, E] = A(n), [z, I] = A(n), [D, Y] = A(!1), S = Z(null);
  U(() => {
    let B = !1, v;
    return (async () => {
      try {
        const j = await pn(r);
        if (B || !S.current) return;
        v = new j.Map(S.current, {
          center: [s, i],
          zoom: c,
          controls: g
        });
        const M = new j.Placemark([s, i], {}, { draggable: b });
        v.geoObjects.add(M), v.events.add("click", (_) => {
          const P = _.get("coords");
          F(P, M, v);
        }), M.events.add("dragend", () => {
          const _ = M.geometry.getCoordinates();
          F(_, M, v);
        }), k(v), Y(!0);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
    })(), () => {
      B = !0, v && v.destroy();
    };
  }, [r, s, i, c, g, b, l]);
  const F = async (B, v, d) => {
    if (window.ymaps)
      try {
        const _ = (await window.ymaps.geocode(B)).geoObjects.get(0).getAddressLine();
        v.geometry.setCoordinates(B), d.panTo(B, { flying: !0 }), I(_), E(_), e(_, B[0], B[1]);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
  }, W = async () => {
    if (!(!R.trim() || !window.ymaps || !L))
      try {
        const v = (await window.ymaps.geocode(R)).geoObjects.get(0);
        if (v) {
          const d = v.geometry.getCoordinates(), j = v.properties.get("boundedBy");
          L.setBounds(j, { checkZoomRange: !0 });
          const M = new window.ymaps.Placemark(d, {}, { draggable: b });
          L.geoObjects.removeAll(), L.geoObjects.add(M);
          const _ = v.getAddressLine();
          I(_), e(_, d[0], d[1]), M.events.add("dragend", () => {
            const P = M.geometry.getCoordinates();
            F(P, M, L);
          });
        }
      } catch (B) {
        l && B instanceof Error && l(B);
      }
  };
  return /* @__PURE__ */ t.jsxs(un, { className: h, style: u, children: [
    w && /* @__PURE__ */ t.jsxs(hn, { children: [
      /* @__PURE__ */ t.jsx(
        to,
        {
          type: "text",
          value: R,
          onChange: (B) => E(B.target.value),
          placeholder: y,
          onKeyPress: (B) => B.key === "Enter" && W(),
          disabled: !D
        }
      ),
      /* @__PURE__ */ t.jsx(xn, { onClick: W, disabled: !D, children: x })
    ] }),
    /* @__PURE__ */ t.jsxs(fn, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: z || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(gn, { ref: S, $height: p, $width: f }),
    /* @__PURE__ */ t.jsx(bn, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, un = o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, hn = o.div`
  display: flex;
  gap: 8px;
`, xn = o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, gn = o.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, fn = o.div`
  font-size: 14px;
  color: #374151;
`, bn = o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, Re = o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;
function je(e, n = "₽") {
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
function Ti(e) {
  if (!e) return 0;
  const n = e.replace(/\D/g, "");
  return parseInt(n, 10);
}
const Di = ({ title: e, data: n, maxValue: s, step: i, height: r = 300, titleFontSize: c }) => {
  const [p, f] = A(null), y = [];
  for (let b = 0; b <= s; b += i)
    y.push(b);
  const x = n.length > 0 ? n[0].bars.map((b) => ({ name: b.name, color: b.color })) : [];
  return /* @__PURE__ */ t.jsxs(mn, { children: [
    /* @__PURE__ */ t.jsxs(Pe, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Re, { style: { fontSize: c }, children: e }),
      /* @__PURE__ */ t.jsx(wn, { children: x.map((b, g) => /* @__PURE__ */ t.jsxs(vn, { children: [
        /* @__PURE__ */ t.jsx(yn, { color: b.color }),
        /* @__PURE__ */ t.jsx(kn, { children: b.name })
      ] }, g)) })
    ] }),
    /* @__PURE__ */ t.jsxs(jn, { height: r, children: [
      /* @__PURE__ */ t.jsx(Cn, { children: y.map((b, g) => /* @__PURE__ */ t.jsx($n, { children: b.toLocaleString() }, g)) }),
      /* @__PURE__ */ t.jsxs(Mn, { children: [
        /* @__PURE__ */ t.jsxs(Sn, { children: [
          y.map((b, g) => {
            const w = b / s * 100;
            return /* @__PURE__ */ t.jsx(Ln, { position: 100 - w }, `line-${g}`);
          }),
          n.map((b, g) => /* @__PURE__ */ t.jsxs(Tn, { onMouseEnter: () => f(g), onMouseLeave: () => f(null), children: [
            b.bars.map((w, h) => {
              const u = b.bars.slice(h + 1).reduce((l, L) => l + L.value, 0);
              return /* @__PURE__ */ t.jsx(
                Dn,
                {
                  height: w.value / s * 100,
                  offset: u / s * 100,
                  color: w.color,
                  isHovered: p !== null && p !== g
                },
                h
              );
            }),
            p === g && /* @__PURE__ */ t.jsxs(Rn, { children: [
              /* @__PURE__ */ t.jsxs(In, { children: [
                /* @__PURE__ */ t.jsxs(zn, { children: [
                  "Всего: ",
                  je(b.total.toString())
                ] }),
                b.bars.map((w, h) => /* @__PURE__ */ t.jsxs(Fn, { children: [
                  w.name,
                  ": ",
                  je(w.value.toString())
                ] }, h))
              ] }),
              /* @__PURE__ */ t.jsx(An, {})
            ] })
          ] }, g))
        ] }),
        /* @__PURE__ */ t.jsx(En, { children: n.map((b, g) => /* @__PURE__ */ t.jsx(Pn, { style: { flex: 1, textAlign: "center" }, children: b.label }, g)) })
      ] })
    ] })
  ] });
}, mn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, wn = o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, vn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, yn = o.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, kn = o.span`
  font-size: 14px;
  color: #4b5563;
`, jn = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Cn = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, $n = o.span`
  font-size: 12px;
  color: #6b7280;
`, Mn = o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Sn = o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, Ln = o.div`
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
`, Tn = o.div`
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
`, Dn = o.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, En = o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, Pn = o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, Rn = o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, In = o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, zn = o.div`
  font-weight: 600;
  margin-bottom: 6px;
`, Fn = o.div`
  margin-bottom: 2px;
`, An = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Bn = Oe`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Ei = ({
  title: e,
  data: n,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: c,
  minY: p,
  xStep: f,
  yStep: y,
  height: x = 300,
  showLegend: b = !0,
  xAxisCustomLabels: g,
  showTooltip: w = !0,
  titleFontSize: h = "30px"
}) => {
  const [u, l] = A(null), [L, k] = A({ x: 0, y: 0 }), R = Z(null), E = Z(null), z = Math.max(...n.map((v) => v.x), r), I = [];
  for (let v = 0; v <= z; v += f)
    I.push(v);
  const D = [];
  for (let v = p; v <= c; v += y)
    D.push(v);
  const Y = g || I.map((v) => v.toString()), S = b ? Array.from(new Set(n.filter((v) => v.label).map((v) => v.label))).map((v) => {
    const d = n.find((j) => j.label === v);
    return { name: v, color: d.color };
  }) : [], F = {};
  n.forEach((v) => {
    const d = v.label || "default";
    F[d] || (F[d] = []), F[d].push(v);
  });
  const W = (v) => v / z * 100, B = (v) => {
    const d = c - p;
    return 100 - (v - p) / d * 100;
  };
  return U(() => {
    if (u && E.current) {
      const v = E.current.getBoundingClientRect(), d = W(u.x) / 100 * v.width, j = B(u.y) / 100 * v.height;
      k({
        x: d + v.left,
        y: j + v.top
      });
    }
  }, [u, r, c, p]), /* @__PURE__ */ t.jsxs(_n, { children: [
    /* @__PURE__ */ t.jsxs(Pe, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Re, { style: { fontSize: h }, children: e }),
      b && S.length > 0 && /* @__PURE__ */ t.jsx(On, { children: S.map((v, d) => /* @__PURE__ */ t.jsxs(Yn, { children: [
        /* @__PURE__ */ t.jsx(Wn, { color: v.color }),
        /* @__PURE__ */ t.jsx(Nn, { children: v.name })
      ] }, d)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Hn, { height: x, children: [
      /* @__PURE__ */ t.jsxs(Vn, { children: [
        D.map((v, d) => /* @__PURE__ */ t.jsx(Zn, { children: v.toLocaleString() }, d)),
        /* @__PURE__ */ t.jsx(Ce, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Un, { ref: E, children: [
        D.map((v, d) => /* @__PURE__ */ t.jsx(Xn, { position: B(v) }, `hline-${d}`)),
        Object.values(F).map((v, d) => v.map((j, M) => {
          if (M === 0) return null;
          const _ = v[M - 1], P = W(_.x), V = B(_.y), m = W(j.x), C = B(j.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${P}%`, y1: `${V}%`, x2: `${m}%`, y2: `${C}%`, stroke: j.color, strokeWidth: "1" })
            },
            `line-${d}-${M}`
          );
        })),
        n.map((v, d) => /* @__PURE__ */ t.jsx(
          Gn,
          {
            x: W(v.x),
            y: B(v.y),
            color: v.color,
            onMouseEnter: () => l(v),
            onMouseLeave: () => l(null),
            isHovered: u?.label === v.label
          },
          d
        ))
      ] })
    ] }),
    w && u && /* @__PURE__ */ t.jsxs(Kn, { ref: R, style: { left: L.x, top: L.y }, children: [
      /* @__PURE__ */ t.jsxs(Qn, { children: [
        u.name && /* @__PURE__ */ t.jsx(er, { children: u.name }),
        /* @__PURE__ */ t.jsx(tr, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(or, {})
    ] }),
    /* @__PURE__ */ t.jsxs(qn, { children: [
      Y.map((v, d) => {
        const M = I[d] / z * 100;
        return /* @__PURE__ */ t.jsx(Jn, { style: { left: `${M}%`, transform: "translateX(-50%)" }, children: v }, d);
      }),
      s && /* @__PURE__ */ t.jsx(Ce, { children: s })
    ] })
  ] });
}, _n = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, On = o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Yn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Wn = o.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Nn = o.span`
  font-size: 14px;
  color: #4b5563;
`, Hn = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Vn = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Zn = o.span`
  font-size: 12px;
  color: #6b7280;
`, Ce = o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, Un = o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, Xn = o.div`
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
`, Gn = o.div`
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
`, qn = o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, Jn = o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, Kn = o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${Bn} 0.15s ease-out forwards;
`, Qn = o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, er = o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, tr = o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, or = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, Pi = ({ images: e, initialIndex: n, onClose: s }) => {
  const [i, r] = A(n), [c, p] = A(0), f = () => {
    r((g) => g > 0 ? g - 1 : e.length - 1), p(0);
  }, y = () => {
    r((g) => g < e.length - 1 ? g + 1 : 0), p(0);
  }, x = () => {
    p((g) => (g + 90) % 360);
  }, b = (g) => {
    g.key === "Escape" ? s() : g.key === "ArrowLeft" ? f() : g.key === "ArrowRight" ? y() : (g.key === "r" || g.key === "к") && x();
  };
  return /* @__PURE__ */ t.jsx(nr, { onClick: s, onKeyDown: b, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(rr, { onClick: (g) => g.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(ir, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(sr, { children: /* @__PURE__ */ t.jsx(ar, { onClick: x, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(lr, { children: [
      /* @__PURE__ */ t.jsx($e, { $position: "left", onClick: f, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(cr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: c }),
      /* @__PURE__ */ t.jsx($e, { $position: "right", onClick: y, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(dr, { children: e.map((g, w) => /* @__PURE__ */ t.jsx(
      pr,
      {
        $active: w === i,
        onClick: () => {
          r(w), p(0);
        }
      },
      w
    )) })
  ] }) });
}, nr = o.div`
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
`, rr = o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, ir = o.button`
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
`, sr = o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, ar = o.button`
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
`, lr = o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, cr = o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, $e = o.button`
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
`, dr = o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, pr = o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, ur = ({ isOpen: e, callPhone: n, error: s, onClose: i, isVerifying: r }) => {
  const [c, p] = A(!1);
  if (!e) return null;
  const f = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), y = () => {
    f ? window.location.href = `tel:${n}` : (navigator.clipboard.writeText(n), p(!0), setTimeout(() => p(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(hr, { onClick: i, children: /* @__PURE__ */ t.jsxs(xr, { onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(gr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Me, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(fr, { onClick: y, title: f ? "Позвонить" : "Копировать номер", $clickable: !0, children: [
      n,
      !f && c && /* @__PURE__ */ t.jsx(br, { children: "Скопировано!" })
    ] }),
    /* @__PURE__ */ t.jsx(Me, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    r && /* @__PURE__ */ t.jsx(wr, { children: "Проверяем звонок..." }),
    s && /* @__PURE__ */ t.jsx(mr, { children: s }),
    i && /* @__PURE__ */ t.jsx(vr, { type: "button", onClick: i, children: "Закрыть" })
  ] }) });
}, hr = o.div`
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
`, xr = o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, gr = o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Me = o.p`
  margin-bottom: 15px;
  color: #555;
`, fr = o.div`
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
`, br = o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, mr = o.div`
  color: #e74c3c;
  margin: 10px 0;
`, wr = o.div`
  color: #4b5563;
  margin: 6px 0;
  font-size: 14px;
`, vr = o.button`
  margin-top: 16px;
  padding: 10px 16px;
  border: none;
  background: rgba(0, 125, 136, 1);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`, yr = Ae({
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
  bottomItems: n = [],
  logo: s,
  arrowIcon: i,
  collapsed: r,
  onToggle: c,
  selectedKey: p,
  onSelect: f,
  autoCollapseOnSelect: y = !1,
  width: x = "315px",
  collapsedWidth: b = "70px",
  className: g,
  style: w
}) => {
  const h = Be(yr), [u, l] = A(
    r ?? h.collapsed ?? !1
  ), [L, k] = A(null), [R, E] = A(
    p ?? h.selectedSideMenuItem ?? null
  ), [z, I] = A({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), D = Z(null), Y = r ?? h.collapsed ?? u, S = (P) => {
    l(P), h.toggleCollapsed(), c?.(P);
  }, F = p ?? h.selectedSideMenuItem ?? R, W = (P) => {
    E(P), h.setSelectedSideMenuItem(P);
  };
  U(() => {
    r !== void 0 && (l(r), r && k(null));
  }, [r]), U(() => {
    p !== void 0 && W(p);
  }, [p]), U(() => {
    const P = () => I((V) => ({ ...V, visible: !1 }));
    return document.addEventListener("click", P), () => document.removeEventListener("click", P);
  }, []);
  const B = () => {
    const P = !Y;
    S(P), P && k(null);
  }, v = (P) => {
    P.disabled || P.hidden || (W(P.key), f?.(P), P.onClick?.(P), y && (S(!0), k(null)));
  }, d = (P) => {
    k((V) => V === P ? null : P);
  }, j = (P, V) => {
    const m = (P.children?.length || 0) > 0;
    if (Y && m) {
      V.stopPropagation();
      const C = V.currentTarget.getBoundingClientRect();
      I({
        visible: !0,
        x: C.right + 6,
        y: C.top,
        items: P.children || []
      });
      return;
    }
    m ? d(P.key) : v(P);
  }, M = (P, V = !1) => P.filter((m) => !m.hidden).map((m) => {
    const C = (m.children?.length || 0) > 0, a = L === m.key, $ = F === m.key || !!m.children && m.children.some((T) => T.key === F);
    return /* @__PURE__ */ t.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Lr,
        {
          $collapsed: Y,
          $selected: $,
          onClick: (T) => j(m, T),
          $disabled: m.disabled,
          title: m.label,
          children: [
            m.icon && /* @__PURE__ */ t.jsx(Dr, { $collapsed: Y, children: m.icon }),
            !Y && /* @__PURE__ */ t.jsx(Tr, { children: m.label }),
            !Y && C && /* @__PURE__ */ t.jsx(Pr, { $expanded: a, children: "▾" })
          ]
        }
      ),
      !Y && C && a && /* @__PURE__ */ t.jsx(Er, { children: M(m.children || [], !0) })
    ] }, m.key);
  }), _ = _e(() => z.visible ? /* @__PURE__ */ t.jsx(Ir, { style: { left: z.x, top: z.y }, children: z.items.map((P) => /* @__PURE__ */ t.jsx(
    zr,
    {
      onClick: () => {
        v(P), I({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: F === P.key,
      children: P.label
    },
    P.key
  )) }) : null, [z, F]);
  return /* @__PURE__ */ t.jsxs(
    kr,
    {
      ref: D,
      $collapsed: Y,
      $width: x,
      $collapsedWidth: b,
      className: g,
      style: w,
      children: [
        /* @__PURE__ */ t.jsxs(jr, { children: [
          /* @__PURE__ */ t.jsx(Cr, { onClick: B, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx($r, { $collapsed: Y, children: "❮" }) }),
          !Y && s && /* @__PURE__ */ t.jsx(Mr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(Sr, { children: [
          /* @__PURE__ */ t.jsx(Se, { children: M(e) }),
          n.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Rr, {}),
            /* @__PURE__ */ t.jsx(Se, { children: M(n) })
          ] })
        ] }),
        _,
        /* @__PURE__ */ t.jsx(Fr, { $collapsed: Y })
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
`, Se = o.div`
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
`, Lr = o.div`
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
`, Tr = o.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Dr = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({ $collapsed: e }) => e ? "24px" : "21px"};
`, Er = o.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Pr = o.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Rr = o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Ir = o.div`
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
`, Fr = o.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Ar = (e) => {
  const n = e.replace(/\D/g, ""), i = (n.startsWith("8") || n.length === 0 ? n : `8${n}`).slice(0, 11);
  let r = "";
  return i.length > 0 && (r += "8"), i.length > 1 && (r += ` (${i.slice(1, 4)}`), i.length > 4 && (r += `) ${i.slice(4, 7)}`), i.length > 7 && (r += `-${i.slice(7, 9)}`), i.length > 9 && (r += `-${i.slice(9, 11)}`), r;
}, Br = ({ value: e, onChange: n, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (c) => {
    const p = Ar(c.target.value);
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
`, Ie = "http://95.163.226.24:8080/api", se = "access_token", ae = "refresh_token", J = {
  setTokens(e, n) {
    localStorage.setItem(se, e), localStorage.setItem(ae, n);
  },
  getAccessToken() {
    return localStorage.getItem(se);
  },
  getRefreshToken() {
    return localStorage.getItem(ae);
  },
  clear() {
    localStorage.removeItem(se), localStorage.removeItem(ae);
  }
};
async function ze(e, n = {}) {
  const { method: s = "GET", body: i, headers: r = {}, token: c } = n, p = async (y) => {
    const x = {
      "Content-Type": "application/json",
      ...r
    };
    y && (x.Authorization = `Bearer ${y}`);
    const b = e.startsWith("http") ? e : `${Ie}${e}`;
    return await fetch(b, {
      method: s,
      headers: x,
      body: i ? JSON.stringify(i) : void 0
    });
  }, f = async (y, x = !0) => {
    const b = await p(y);
    if (b.ok) {
      if (b.status === 204)
        return null;
      const w = await b.text();
      if (!w) return null;
      try {
        return JSON.parse(w);
      } catch {
        return w;
      }
    }
    if (b.status === 401 && x) {
      const w = await Or();
      if (w)
        return f(w, !1);
    }
    let g = `Request failed with status ${b.status}`;
    try {
      const w = await b.json();
      w && typeof w.error == "string" ? g = w.error : typeof w == "string" && (g = w);
    } catch {
      const w = await b.text();
      w && (g = w);
    }
    throw new Error(g);
  };
  return f(c);
}
async function Or() {
  const e = J.getRefreshToken(), n = J.getAccessToken();
  if (!e || !n) return null;
  const s = await fetch(`${Ie}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: n,
      refresh_token: e
    })
  });
  if (!s.ok)
    return J.clear(), null;
  const i = await s.json();
  if (i.access_token) {
    const r = i.refresh_token || e;
    return J.setTokens(i.access_token, r), i.access_token;
  }
  return J.clear(), null;
}
const Yr = (e, n) => ze("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: n
  }
}), Wr = (e, n, s) => ze("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: n,
    user_type: s
  }
}), Ii = ({
  onLoginSuccess: e,
  userType: n = "delivery_operator",
  title: s = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: r = "8 (xxx) xxx-xx-xx",
  supportPhone: c = "8 989 924 24 24",
  supportLinkUrl: p = "https://info.waypay.one",
  supportLinkText: f = "info.waypay.one",
  brand: y,
  className: x,
  style: b,
  pollingIntervalMs: g = 3e3
}) => {
  const [w, h] = A(!1), [u, l] = A(""), [L, k] = A(!1), [R, E] = A(""), [z, I] = A(""), [D, Y] = A(!1), S = Z(void 0);
  U(() => () => {
    S.current && clearInterval(S.current);
  }, []);
  const F = (j) => {
    const M = j.replace(/\D/g, "");
    return M ? M.startsWith("8") ? `+7${M.slice(1)}` : M.startsWith("7") ? `+${M}` : `+${M}` : "";
  }, W = () => {
    k(!1), S.current && window.clearInterval(S.current);
  }, B = async (j) => {
    if (j.preventDefault(), !u) {
      I("Введите номер телефона");
      return;
    }
    h(!0), I("");
    const M = F(u);
    try {
      const _ = await Yr(M, n);
      E(_.call_phone), k(!0), v(M, _.check_id);
    } catch (_) {
      console.error("Auth error:", _), I("Не удалось инициировать авторизацию. Проверьте номер.");
    } finally {
      h(!1);
    }
  }, v = (j, M) => {
    S.current && window.clearInterval(S.current), S.current = window.setInterval(() => {
      d(j, M);
    }, g);
  }, d = async (j, M) => {
    if (!D) {
      Y(!0);
      try {
        const _ = await Wr(j, M, n);
        _.access_token && _.refresh_token && (J.setTokens(_.access_token, _.refresh_token), S.current && window.clearInterval(S.current), k(!1), e(_.access_token));
      } catch (_) {
        console.error("Verification error:", _), I("Ошибка проверки авторизации");
      } finally {
        Y(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(Nr, { className: x, style: b, children: [
    /* @__PURE__ */ t.jsxs(Hr, { children: [
      /* @__PURE__ */ t.jsx(Vr, { children: y ?? /* @__PURE__ */ t.jsx(Zr, { children: "WayPay" }) }),
      /* @__PURE__ */ t.jsxs(Ur, { onSubmit: B, children: [
        /* @__PURE__ */ t.jsx(Xr, { children: s }),
        /* @__PURE__ */ t.jsx(Gr, { children: /* @__PURE__ */ t.jsx(qr, { children: /* @__PURE__ */ t.jsx(Br, { value: u, onChange: (j) => l(j), placeholder: r }) }) }),
        z && /* @__PURE__ */ t.jsx(ti, { children: /* @__PURE__ */ t.jsx("span", { children: z }) }),
        /* @__PURE__ */ t.jsx(Jr, { type: "submit", disabled: w, children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Kr, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру ",
        /* @__PURE__ */ t.jsx(Qr, { href: `tel:${c}`, children: c }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(ei, { href: p, target: "_blank", rel: "noreferrer", children: f })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(ur, { isOpen: L, onClose: W, callPhone: R, isVerifying: D, error: z })
  ] });
}, Nr = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`, Hr = o.div`
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
`, Vr = o.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`, Zr = o.div`
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 125, 136, 1);
`, Ur = o.form`
  display: flex;
  flex-direction: column;
`, Xr = o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, Gr = o.div`
  margin-bottom: 25px;
`, qr = o.div`
  position: relative;
  width: auto;
`, Jr = o.button`
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
`, Kr = o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, Qr = o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, ei = o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, ti = o.div`
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
`, oi = (e) => {
  let n = 0;
  for (let i = 0; i < e.length; i++)
    n = e.charCodeAt(i) + ((n << 5) - n);
  return `hsl(${Math.abs(n % 360)}, 60%, 60%)`;
}, zi = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Fi = (e, n = 100) => {
  const s = document.createElement("canvas");
  s.width = n, s.height = n;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = oi(e);
  i.fillStyle = r, i.beginPath(), i.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const c = n / 2;
  i.font = `bold ${c}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const p = c * 0.1;
  return i.fillText(e, n / 2, n / 2 + p), s.toDataURL("image/png");
}, Ai = (e) => {
  if (!e) return "";
  const n = typeof e == "string" ? new Date(e) : e;
  if (isNaN(n.getTime())) return "";
  const s = n.getDate().toString().padStart(2, "0"), i = (n.getMonth() + 1).toString().padStart(2, "0"), r = n.getFullYear();
  return `${s}-${i}-${r}`;
};
function Bi(e) {
  return new Date(e);
}
const ni = (e) => {
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
      const b = Math.floor((n.getTime() - s.getTime()) / 1e3), g = Math.floor(b / 60), w = Math.floor(g / 60), h = Math.floor(w / 24);
      return b < 10 ? "скоро" : b < 60 ? `через ${b} секунд` : g === 1 ? "через минуту" : g < 60 ? `через ${g} минут` : w === 1 ? "через час" : w < 24 ? `через ${w} часов` : h === 1 ? "завтра" : h < 7 ? `через ${h} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - n.getTime()) / 1e3), r = Math.floor(i / 60), c = Math.floor(r / 60), p = Math.floor(c / 24), f = Math.floor(p / 7), y = Math.floor(p / 30), x = Math.floor(p / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const b = Math.max(1, i);
      return b === 1 ? "секунду назад" : b < 5 ? `${b} секунды назад` : `${b} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : c < 24 ? c === 1 ? "час назад" : c < 5 ? `${c} часа назад` : `${c} часов назад` : p < 7 ? p === 1 ? "вчера" : p === 2 ? "позавчера" : `${p} дня назад` : f < 4 ? f === 1 ? "неделю назад" : f < 5 ? `${f} недели назад` : `${f} недель назад` : y < 12 ? y === 1 ? "месяц назад" : y < 5 ? `${y} месяца назад` : `${y} месяцев назад` : x === 1 ? "год назад" : x < 5 ? `${x} года назад` : `${x} лет назад`;
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
}, _i = (e, n = {}) => {
  const { useExactAfterMonths: s = 6, includeTime: i = !0 } = n, r = new Date(e);
  return isNaN(r.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= s ? i ? ri(r) : r.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : ni(r);
};
export {
  Ie as API_BASE_URL,
  ci as AddButton,
  ur as AuthCallModal,
  Ii as AuthPage,
  di as BackButton,
  uo as BaseModal,
  gi as Checkbox,
  Di as ColumnChart,
  Le as ContextMenu,
  ki as CountInfoTitle,
  xe as CustomCalendar,
  to as CustomInput,
  Br as CustomPhoneInput,
  xi as CustomSelect,
  li as CustomTable,
  bi as CustomTextArea,
  Re as CustomTitle,
  dt as DefaultButton,
  pi as DeleteButton,
  ui as EditButton,
  yi as EntitySelectContainer,
  hi as ExportButton,
  ji as InputTitle,
  Ci as ModalInfoTitle,
  fi as Pagination,
  mi as PeriodField,
  wi as PhoneModalInput,
  Pi as PhotoViewerModal,
  Si as ProgressBar,
  Mi as RadioButton,
  Ei as ScatterPlot,
  Ri as SideMenu,
  yr as SideMenuContext,
  vi as Tabs,
  Pe as TitleField,
  $i as ToggleSwitch,
  Li as YandexMapSelector,
  ze as apiRequest,
  Wr as confirmCallAuth,
  Ai as formatDate,
  ri as formatExactDate,
  je as formatMoney,
  ni as formatRelativeTime,
  _i as formatRelativeTimeExtended,
  Fi as generateAvatar,
  zi as getInitials,
  Yr as initiateCallAuth,
  Bi as parseDateInput,
  Ti as parseMoney,
  oi as stringToColor
};
