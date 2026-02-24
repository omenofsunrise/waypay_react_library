import G, { useRef as Z, useState as A, useEffect as U, createContext as Fe, useContext as Ae, useMemo as _e } from "react";
import o, { keyframes as Oe } from "styled-components";
import { motion as K, AnimatePresence as ae } from "framer-motion";
var te = { exports: {} }, J = {};
var le;
function Ye() {
  if (le) return J;
  le = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, r, d) {
    var p = null;
    if (d !== void 0 && (p = "" + d), r.key !== void 0 && (p = "" + r.key), "key" in r) {
      d = {};
      for (var m in r)
        m !== "key" && (d[m] = r[m]);
    } else d = r;
    return r = d.ref, {
      $$typeof: e,
      type: i,
      key: p,
      ref: r !== void 0 ? r : null,
      props: d
    };
  }
  return J.Fragment = n, J.jsx = s, J.jsxs = s, J;
}
var Q = {};
var ce;
function We() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === _ ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case L:
          return "Fragment";
        case T:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case z:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case l:
            return "Portal";
          case I:
            return a.displayName || "Context";
          case S:
            return (a._context.displayName || "Context") + ".Consumer";
          case B:
            var $ = a.render;
            return a = a.displayName, a || (a = $.displayName || $.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case R:
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
        var D = $.error, O = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return D.call(
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
    function d() {
      return Error("react-stack-top-frame");
    }
    function p(a) {
      if (c.call(a, "key")) {
        var $ = Object.getOwnPropertyDescriptor(a, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function m(a, $) {
      function D() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: D,
        configurable: !0
      });
    }
    function k() {
      var a = e(this.type);
      return P[a] || (P[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, $, D, O, H, X) {
      var N = D.ref;
      return a = {
        $$typeof: u,
        type: a,
        key: $,
        props: D,
        _owner: O
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: H
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function f(a, $, D, O, H, X) {
      var N = $.children;
      if (N !== void 0)
        if (O)
          if (j(N)) {
            for (O = 0; O < N.length; O++)
              x(N[O]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(N);
      if (c.call($, "key")) {
        N = e(a);
        var q = Object.keys($).filter(function(ze) {
          return ze !== "key";
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
      if (N = null, D !== void 0 && (s(D), N = "" + D), p($) && (s($.key), N = "" + $.key), "key" in $) {
        D = {};
        for (var ne in $)
          ne !== "key" && (D[ne] = $[ne]);
      } else D = $;
      return N && m(
        D,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(
        a,
        N,
        D,
        r(),
        H,
        X
      );
    }
    function x(a) {
      b(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === F && (a._payload.status === "fulfilled" ? b(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function b(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    var h = G, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), L = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), v = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, c = Object.prototype.hasOwnProperty, j = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var W, P = {}, V = h.react_stack_bottom_frame.bind(
      h,
      d
    )(), w = M(i(d)), C = {};
    Q.Fragment = L, Q.jsx = function(a, $, D) {
      var O = 1e4 > v.recentlyCreatedOwnerStacks++;
      return f(
        a,
        $,
        D,
        !1,
        O ? Error("react-stack-top-frame") : V,
        O ? M(i(a)) : w
      );
    }, Q.jsxs = function(a, $, D) {
      var O = 1e4 > v.recentlyCreatedOwnerStacks++;
      return f(
        a,
        $,
        D,
        !0,
        O ? Error("react-stack-top-frame") : V,
        O ? M(i(a)) : w
      );
    };
  })()), Q;
}
var de;
function Ne() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? te.exports = Ye() : te.exports = We()), te.exports;
}
var t = Ne();
const Se = ({ x: e, y: n, items: s, onClose: i, ...r }) => {
  const d = Z(null), [p, m] = A(null);
  U(() => {
    const h = (u) => {
      d.current && !d.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const g = (() => {
    if (!d.current) return { x: e, y: n };
    const h = d.current.offsetWidth, u = d.current.offsetHeight, l = window.innerWidth, L = window.innerHeight;
    let y = e, T = n;
    return y + h > l && (y = e - h), T + u > L && (T = n - u), { x: y, y: T };
  })(), f = (h, u) => {
    h.submenu ? m(p === u ? null : u) : h.action && (h.action(), i());
  }, x = (h) => {
    s[h].submenu && m(h);
  }, b = (h) => {
    const u = h.relatedTarget;
    d.current?.contains(u) || m(null);
  };
  return /* @__PURE__ */ t.jsx(
    He,
    {
      ref: d,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: g.y,
        left: g.x
      },
      onClick: (h) => h.stopPropagation(),
      onMouseLeave: b,
      ...r,
      children: s.map((h, u) => /* @__PURE__ */ t.jsxs(Ve, { $hasSubmenu: !!h.submenu, $disabled: h.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ze,
          {
            onClick: (l) => {
              l.stopPropagation(), h.disabled || f(h, u);
            },
            onMouseEnter: () => !h.disabled && x(u),
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
            children: /* @__PURE__ */ t.jsx(Se, { x: 0, y: -u * 40, items: h.submenu, onClose: () => m(null) })
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
  sortConfig: d,
  onRowClick: p,
  selectedRow: m,
  fixedHeight: k,
  hasTotalsRow: g,
  debtChecker: f,
  rowStyles: x = {},
  isLoading: b
}) => {
  const [h, u] = A(null), [l, L] = A(null), y = Z(null), T = Z(null), S = 500, I = m !== void 0 ? m : h, B = (w) => {
    !e[w].isSortable || !r || r(w);
  }, z = f || ((w) => {
    const C = w[8];
    return typeof C == "string" ? parseFloat(C.replace(/[^\d.]/g, "")) > 0 : !1;
  }), R = (w) => {
    m === void 0 && u(w === I ? null : w), p && p(n[w], w);
  }, F = (w, C) => {
    s && s(w, C);
  }, Y = (w, C) => {
    if (i.length === 0) return;
    w.preventDefault();
    const a = "touches" in w ? w.touches[0].clientX : w.clientX, $ = "touches" in w ? w.touches[0].clientY : w.clientY;
    L({
      x: a,
      y: $,
      rowIndex: C
    });
  }, _ = (w, C) => {
    w.preventDefault(), Y(w, C);
  }, v = (w, C) => {
    i.length !== 0 && (T.current && clearTimeout(T.current), T.current = window.setTimeout(() => {
      Y(w, C);
    }, S));
  }, c = () => {
    T.current && (clearTimeout(T.current), T.current = null);
  }, j = () => {
    T.current && window.clearTimeout(T.current);
  }, M = () => {
    L(null);
  };
  U(() => {
    const w = () => {
      l && M();
    };
    return document.addEventListener("click", w), () => {
      document.removeEventListener("click", w), T.current && clearTimeout(T.current);
    };
  }, [l]);
  const W = (w, C, a) => {
    if (C)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const $ = x[w] || {};
    return w === I ? {
      backgroundColor: $.backgroundColor || "#007D88",
      color: $.color || "#FFFFFF",
      fontWeight: $.fontWeight || "normal"
    } : a ? {
      backgroundColor: $.backgroundColor || "#E8D8D8",
      color: $.color || "inherit",
      fontWeight: $.fontWeight || "normal"
    } : n[w][n[w].length - 1] === !1 ? {
      backgroundColor: $.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: $.fontWeight || "normal"
    } : {
      backgroundColor: $.backgroundColor || "#FFFFFF",
      color: $.color || "inherit",
      fontWeight: $.fontWeight || "normal"
    };
  }, P = (w, C, a) => {
    if (C) return "#FFFFFF";
    const $ = W(w, C, a);
    return $.hoverBackgroundColor ? $.hoverBackgroundColor : w === I ? "#007D88" : a ? "#E8D8D8CC" : n[w][n[w].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, V = () => {
    if (!l || i.length === 0) return null;
    const w = (typeof i == "function" ? i(n[l.rowIndex]) : i).filter(
      (C) => typeof C == "object" && (typeof C.shouldShow != "function" || C.shouldShow(n[l.rowIndex]))
    );
    return w.length === 0 ? null : /* @__PURE__ */ t.jsx(
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
          Se,
          {
            items: w.map((C) => {
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
  return /* @__PURE__ */ t.jsx(Je, { ref: y, children: b ? /* @__PURE__ */ t.jsx(qe, { children: /* @__PURE__ */ t.jsx(Ke, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Qe, { children: [
      /* @__PURE__ */ t.jsx(tt, { children: /* @__PURE__ */ t.jsx(pe, { children: e.map(
        (w, C) => !w.isHidden && /* @__PURE__ */ t.jsx(
          nt,
          {
            $isSortable: w.isSortable,
            $isActive: d?.key === C,
            onClick: () => B(C),
            $align: w.align || "center",
            $isFirst: C === 0,
            $isLast: C === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(rt, { $align: w.align || "center", children: [
              w.name,
              w.isSortable && /* @__PURE__ */ t.jsx(
                it,
                {
                  $direction: d?.key === C ? d.direction : "asc",
                  animate: {
                    rotate: d?.key === C && d.direction === "desc" ? 180 : 0,
                    color: d?.key === C ? "#007D88" : "#6B7280"
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
      /* @__PURE__ */ t.jsx(ot, { $fixedHeight: k, children: /* @__PURE__ */ t.jsx(ae, { children: n.map((w, C) => {
        const a = !!(g && C === n.length - 1), $ = !!(!a && z(w)), D = W(C, a, $), O = P(C, a, $);
        return /* @__PURE__ */ t.jsx(
          pe,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: D.backgroundColor || "#FFFFFF",
              color: D.color || "inherit",
              fontWeight: D.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: C === n.length - 1,
            $isSelected: C === I,
            $isTotalsRow: a,
            onClick: () => !a && R(C),
            onDoubleClick: () => !a && F(w, C),
            onContextMenu: (H) => !a && _(H, C),
            onTouchStart: (H) => !a && v(H, C),
            onTouchEnd: c,
            onTouchMove: j,
            whileHover: a ? {} : {
              backgroundColor: O,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: D.backgroundColor || "#FFFFFF",
              color: D.color || "inherit",
              fontWeight: D.fontWeight || "normal"
            },
            children: w.map(
              (H, X) => !e[X]?.isHidden && /* @__PURE__ */ t.jsx(
                st,
                {
                  $align: e[X]?.align || "center",
                  $isFirst: X === 0,
                  $isLast: X === w.length - 1,
                  $isTotalsCell: a,
                  $isBeforeTotals: a && X < w.findIndex((N) => N === "Итого:"),
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
    /* @__PURE__ */ t.jsx(ae, { children: V() })
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
`, Ke = o.div`
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
`, Je = o.div`
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
`, pe = o(K.tr)`
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
] }), De = ({
  children: e = "Подтвердить",
  icon: n,
  disabled: s = !1,
  bg: i,
  hoverBg: r,
  disabledBg: d,
  textColor: p,
  fullWidth: m = !1,
  minWidth: k,
  width: g,
  isPrimary: f = !0,
  ...x
}) => {
  const h = i ? {
    bg: i,
    hoverBg: r || i,
    disabledBg: d || i,
    textColor: p || (f ? "white" : "black")
  } : f ? {
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
      $fullWidth: m,
      $minWidth: k,
      $width: g,
      ...x,
      children: [
        n && /* @__PURE__ */ t.jsx(pt, { children: n }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, dt = o.button`
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
`, pt = o.span`
  display: inline-flex;
  align-items: center;
`, pi = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(ut, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
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
`, ui = ({ onClick: e, tooltip: n, size: s = 32 }) => /* @__PURE__ */ t.jsx(ht, { onClick: e, size: s, title: n, children: /* @__PURE__ */ t.jsx(
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
`, xt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
  icon: n = /* @__PURE__ */ t.jsx(xt, {}),
  onExport: s,
  isExporting: i = !1,
  exportProgress: r = 0,
  ...d
}) => {
  const p = async (m) => {
    if (s)
      try {
        await s();
      } catch (k) {
        console.error("Export error:", k);
      }
    d.onClick && d.onClick(m);
  };
  return /* @__PURE__ */ t.jsx(gt, { ...d, onClick: p, disabled: i || d.disabled, children: i ? /* @__PURE__ */ t.jsxs(ft, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      r,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(bt, { progress: r })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    n,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, gt = o.button`
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
`, bt = o.div`
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
  errorMessage: d,
  options: p,
  name: m,
  disabled: k = !1,
  required: g = !1,
  ...f
}) => {
  const [x, b] = G.useState(!1), [h, u] = G.useState(!1), l = G.useRef(null), L = !!(n && !s && !x), y = (E) => {
    i && !k && i({
      target: { value: E, name: m }
    }), u(!1), b(!1);
  }, T = (E) => {
    l.current && !l.current.contains(E.target) && (u(!1), b(!1));
  }, S = () => {
    k || (u(!h), b(!h));
  };
  G.useEffect(() => (document.addEventListener("mousedown", T), () => {
    document.removeEventListener("mousedown", T);
  }), []);
  const I = p.find((E) => E.value === s), B = I ? I.label : "";
  return /* @__PURE__ */ t.jsxs(mt, { ref: l, ...f, children: [
    /* @__PURE__ */ t.jsxs(wt, { children: [
      /* @__PURE__ */ t.jsxs(
        vt,
        {
          hasError: r,
          isOpen: h,
          disabled: k,
          onClick: S,
          onFocus: () => !k && b(!0),
          onBlur: () => b(!1),
          tabIndex: k ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(yt, { children: B || e && /* @__PURE__ */ t.jsx(kt, { children: e }) }),
            /* @__PURE__ */ t.jsx(jt, { isOpen: h, disabled: k, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: k ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      h && /* @__PURE__ */ t.jsx(Ct, { children: p.map((E) => /* @__PURE__ */ t.jsxs($t, { $isSelected: E.value === s, onClick: () => y(E.value), children: [
        /* @__PURE__ */ t.jsx(Mt, { $isSelected: E.value === s, children: E.value === s && /* @__PURE__ */ t.jsx(St, {}) }),
        /* @__PURE__ */ t.jsx(Dt, { children: E.label })
      ] }, E.value)) })
    ] }),
    n && /* @__PURE__ */ t.jsx(Lt, { isVisible: L, children: n }),
    r && d && /* @__PURE__ */ t.jsx(Tt, { children: d }),
    /* @__PURE__ */ t.jsx(Et, { name: m, value: s || "", onChange: () => {
    }, tabIndex: -1, required: g, children: p.map((E) => /* @__PURE__ */ t.jsx("option", { value: E.value, children: E.label }, E.value)) })
  ] });
}, mt = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, wt = o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, vt = o.div`
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
`, yt = o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, kt = o.span`
  color: rgba(80, 85, 92, 1);
`, jt = o.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, Ct = o.div`
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
`, $t = o.div`
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
`, Mt = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, St = o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Dt = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Lt = o.label`
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
`, Tt = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Et = o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, gi = ({ checked: e = !1, onChange: n, className: s, label: i, disabled: r = !1 }) => {
  const [d, p] = A(!1), m = () => {
    r || !n || n(!e);
  }, k = (g) => {
    r || (g.key === "Enter" || g.key === " ") && (g.preventDefault(), m());
  };
  return /* @__PURE__ */ t.jsxs(Pt, { className: s, onClick: m, onKeyPress: k, tabIndex: r ? -1 : 0, disabled: r, children: [
    /* @__PURE__ */ t.jsx(
      Rt,
      {
        checked: e,
        isFocused: d,
        disabled: r,
        onMouseEnter: () => !r && p(!0),
        onMouseLeave: () => !r && p(!1),
        onFocus: () => !r && p(!0),
        onBlur: () => !r && p(!1),
        children: e && /* @__PURE__ */ t.jsx(Bt, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: r, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: r ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
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
`, Rt = o.div`
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
`, Bt = o.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, zt = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", ue = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Ft = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], he = ({ prefix: e = "Дата:", value: n = "", placeholder: s = "Выберите дату", onChange: i, onReset: r }) => {
  const [d, p] = A(!1), [m, k] = A(/* @__PURE__ */ new Date()), [g, f] = A(n ? new Date(n) : null), [x, b] = A(!1), [h, u] = A(!1), l = Z(null), L = Z(null), y = Z(null);
  U(() => {
    const c = (j) => {
      l.current && !l.current.contains(j.target) && p(!1), L.current && !L.current.contains(j.target) && b(!1), y.current && !y.current.contains(j.target) && u(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []), U(() => {
    f(n ? new Date(n) : null);
  }, [n]);
  const T = (c) => {
    const j = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()));
    f(c);
    const M = j.toISOString().split("T")[0];
    i?.(M), p(!1);
  }, S = () => {
    const c = /* @__PURE__ */ new Date();
    k(c);
    const M = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate())).toISOString().split("T")[0];
    i?.(M), p(!1);
  }, I = () => {
    f(null), i?.(""), r?.(), p(!1);
  }, B = (c) => {
    const j = new Date(m);
    j.setMonth(c), k(j), b(!1);
  }, E = (c) => {
    const j = new Date(m);
    j.setFullYear(c), k(j), u(!1);
  }, z = () => {
    const c = m.getFullYear(), j = m.getMonth(), M = new Date(c, j, 1), P = new Date(c, j + 1, 0).getDate(), V = M.getDay() === 0 ? 6 : M.getDay() - 1, w = [], C = 35, a = new Date(c, j, 0).getDate();
    for (let D = 0; D < V; D++) {
      const O = a - V + D + 1, H = new Date(c, j - 1, O), X = !!(g && H.getDate() === g.getDate() && H.getMonth() === g.getMonth() && H.getFullYear() === g.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: X, onClick: () => T(H), otherMonth: !0, children: O }, `prev-${O}`)
      );
    }
    for (let D = 1; D <= P; D++) {
      const O = new Date(c, j, D), H = !!(g && O.getDate() === g.getDate() && O.getMonth() === g.getMonth() && O.getFullYear() === g.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: H, onClick: () => T(O), children: D }, `current-${D}`)
      );
    }
    const $ = C - w.length;
    for (let D = 1; D <= $; D++) {
      const O = new Date(c, j + 1, D), H = !!(g && O.getDate() === g.getDate() && O.getMonth() === g.getMonth() && O.getFullYear() === g.getFullYear());
      w.push(
        /* @__PURE__ */ t.jsx(re, { selected: H, onClick: () => T(O), otherMonth: !0, children: D }, `next-${D}`)
      );
    }
    return w;
  }, R = () => g ? g.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : s, F = () => {
    const c = (/* @__PURE__ */ new Date()).getFullYear(), j = [];
    for (let M = c - 10; M <= c + 10; M++)
      j.push(M);
    return j;
  }, Y = (c) => {
    c.preventDefault(), c.stopPropagation(), b(!x), u(!1);
  }, _ = (c) => {
    c.preventDefault(), c.stopPropagation(), u(!h), b(!1);
  }, v = (c) => {
    const j = c === "next" ? 1 : -1, M = new Date(m);
    M.setMonth(M.getMonth() + j), k(M);
  };
  return /* @__PURE__ */ t.jsxs(At, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(_t, { onClick: () => p(!d), children: [
      e && /* @__PURE__ */ t.jsx(Ot, { children: e }),
      /* @__PURE__ */ t.jsx(Yt, { isEmpty: !g, children: R() }),
      /* @__PURE__ */ t.jsx(Wt, { src: zt, alt: "Календарь" })
    ] }),
    d && /* @__PURE__ */ t.jsxs(Nt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Ht, { children: [
        /* @__PURE__ */ t.jsx(
          be,
          {
            onClick: (c) => {
              c.preventDefault(), c.stopPropagation(), v("prev");
            },
            onMouseDown: (c) => c.preventDefault(),
            children: /* @__PURE__ */ t.jsx(me, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Vt, { children: [
          /* @__PURE__ */ t.jsxs(Xt, { ref: L, children: [
            /* @__PURE__ */ t.jsxs(Zt, { onClick: (c) => Y(c), onMouseDown: (c) => c.preventDefault(), children: [
              ue[m.getMonth()],
              /* @__PURE__ */ t.jsx(xe, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(ge, { $width: 120, onClick: (c) => c.stopPropagation(), children: ue.map((c, j) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: j === m.getMonth(),
                onClick: (M) => {
                  M.stopPropagation(), B(j);
                },
                children: c
              },
              c
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(Gt, { ref: y, children: [
            /* @__PURE__ */ t.jsxs(Ut, { onClick: (c) => _(c), onMouseDown: (c) => c.preventDefault(), children: [
              m.getFullYear(),
              /* @__PURE__ */ t.jsx(xe, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(ge, { $width: 80, onClick: (c) => c.stopPropagation(), children: F().map((c) => /* @__PURE__ */ t.jsx(
              fe,
              {
                $selected: c === m.getFullYear(),
                onClick: (j) => {
                  j.stopPropagation(), E(c);
                },
                children: c
              },
              c
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          be,
          {
            onClick: (c) => {
              c.preventDefault(), c.stopPropagation(), v("next");
            },
            onMouseDown: (c) => c.preventDefault(),
            children: /* @__PURE__ */ t.jsx(me, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(qt, { children: Ft.map((c) => /* @__PURE__ */ t.jsx(Kt, { children: c }, c)) }),
      /* @__PURE__ */ t.jsx(Jt, { children: z() }),
      /* @__PURE__ */ t.jsxs(Qt, { children: [
        /* @__PURE__ */ t.jsx(we, { onClick: I, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(we, { onClick: S, children: "Сегодня" })
      ] })
    ] })
  ] });
}, At = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`, _t = o.div`
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
`, Ot = o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`, Yt = o.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Wt = o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Nt = o.div`
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
`, Ht = o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Vt = o.div`
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
`, Zt = o(Le)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Ut = o(Le)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Xt = o.div`
  position: relative;
`, Gt = o.div`
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
`, ge = o.div`
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
`, be = o.button`
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
`, me = o.div`
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
`, Kt = o.div`
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
`, Qt = o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, we = o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, eo = ({
  placeholder: e = "",
  customPlaceholder: n,
  value: s,
  inputType: i = "text",
  onChange: r,
  hasError: d = !1,
  errorMessage: p,
  ...m
}) => {
  const [k, g] = G.useState(!1), f = !!(n && !s && !k), x = (u) => {
    if (!r) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && r?.(u);
        break;
      case "rubles": {
        const y = u.target.selectionStart, T = u.target.value;
        let S = T.replace(/[^\d]/g, "");
        if (S === "") {
          u.target.value = "", r(u);
          break;
        }
        const I = parseInt(S, 10);
        if (!isNaN(I)) {
          let B = I.toLocaleString("ru-RU");
          B += " ₽";
          const E = b(T, y || 0), z = h(B, E);
          u.target.value = B, r(u), setTimeout(() => {
            u.target.setSelectionRange(z, z);
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
          const S = u.target.selectionStart || 0, I = l.replace(" %", "");
          u.target.value = l, r(u), setTimeout(() => {
            S < I.length && u.target.setSelectionRange(S, S);
          }, 0);
        } else
          u.target.value = l, r(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let L = l.split(" ").filter((y) => y.length > 0);
        L = L.slice(0, 3), l = L.map((y) => {
          if (y.startsWith("-") && (y = y.substring(1)), (y.match(/-/g) || []).length > 1) {
            const S = y.split("-");
            y = S[0] + "-" + S.slice(1).join("");
          }
          return y.includes("-") ? y.split("-").map((S, I) => S.length === 0 ? "" : (I > 0, S[0].toUpperCase() + S.slice(1).toLowerCase())).join("-") : y.length > 0 ? y[0].toUpperCase() + y.slice(1).toLowerCase() : "";
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
    let L = 0;
    for (let y = 0; y < Math.min(l, u.length); y++)
      /\d/.test(u[y]) && L++;
    return L;
  }, h = (u, l) => {
    let L = 0;
    for (let y = 0; y < u.length; y++) {
      if (L >= l)
        return y;
      /\d/.test(u[y]) && L++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(to, { children: [
    /* @__PURE__ */ t.jsx(
      oo,
      {
        ...m,
        value: s,
        placeholder: f ? "" : e,
        onFocus: () => g(!0),
        onBlur: (u) => {
          g(!1), m.onBlur?.(u);
        },
        onChange: x,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: d
      }
    ),
    n && /* @__PURE__ */ t.jsx(no, { isVisible: f, children: n }),
    d && p && /* @__PURE__ */ t.jsx(ro, { children: p })
  ] });
}, to = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, oo = o.input`
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
`, no = o.label`
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
`, ro = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, fi = ({ total: e, current: n = 1, onChange: s, itemsPerPage: i = 10 }) => {
  const r = Math.ceil(e / i), [d, p] = A(n), m = (g) => {
    g < 1 || g > r || g === d || (p(g), s?.(g));
  }, k = () => {
    const g = [];
    let x = 1, b = r;
    if (r > 5) {
      const h = Math.floor(2.5);
      x = Math.max(d - h, 1), b = Math.min(d + h, r), d <= h + 1 ? b = 5 : d >= r - h && (x = r - 5 + 1);
    }
    for (let h = x; h <= b; h++)
      g.push(
        /* @__PURE__ */ t.jsx(ee, { active: h === d, onClick: () => m(h), children: h }, h)
      );
    return x > 1 && (x > 2 && g.unshift(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "start-ellipsis")), g.unshift(
      /* @__PURE__ */ t.jsx(ee, { active: d === 1, onClick: () => m(1), children: "1" }, 1)
    )), b < r && (b < r - 1 && g.push(/* @__PURE__ */ t.jsx(ee, { children: "..." }, "end-ellipsis")), g.push(
      /* @__PURE__ */ t.jsx(ee, { active: r === d, onClick: () => m(r), children: r }, r)
    )), g;
  };
  return /* @__PURE__ */ t.jsxs(io, { children: [
    /* @__PURE__ */ t.jsx(ve, { disabled: d === 1, onClick: () => m(d - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: d === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    k(),
    /* @__PURE__ */ t.jsx(ve, { disabled: d === r, onClick: () => m(d + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: d === r ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, io = o.div`
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
`, ve = o.button`
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
  errorMessage: d,
  rows: p = 3,
  ...m
}) => {
  const [k, g] = G.useState(!1), f = !!(n && !s && !k);
  return /* @__PURE__ */ t.jsxs(so, { children: [
    /* @__PURE__ */ t.jsx(
      ao,
      {
        ...m,
        value: s,
        placeholder: f ? "" : e,
        onFocus: () => g(!0),
        onBlur: (x) => {
          g(!1), m.onBlur?.(x);
        },
        onChange: i,
        hasError: r,
        rows: p
      }
    ),
    n && /* @__PURE__ */ t.jsx(lo, { isVisible: f, children: n }),
    r && d && /* @__PURE__ */ t.jsx(co, { children: d })
  ] });
}, so = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, ao = o.textarea`
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
`, lo = o.label`
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
`, co = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, po = ({
  title: e,
  onClose: n,
  onCancel: s,
  onSave: i,
  children: r,
  isSaveDisabled: d = !1,
  isSubmitting: p = !1,
  mode: m = "create",
  hideSaveButton: k = !1,
  hideCanselButton: g = !1,
  width: f = "560px",
  saveButtonText: x = "Сохранить",
  customLayout: b
}) => {
  const h = m === "view", u = Z(null);
  U(() => {
    const y = (S) => {
      S.key === "Escape" && n();
    };
    document.addEventListener("keydown", y);
    const T = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => u.current?.focus(), 0), () => {
      document.removeEventListener("keydown", y), document.body.style.overflow = T;
    };
  }, [n]);
  const l = (y) => {
    y.target === y.currentTarget && n();
  }, L = (y) => {
    y.preventDefault(), s();
  };
  return /* @__PURE__ */ t.jsx(uo, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    ho,
    {
      ref: u,
      $width: f,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Te, { children: [
          /* @__PURE__ */ t.jsx(Ee, { children: e }),
          /* @__PURE__ */ t.jsx(xo, { type: "button", onClick: n, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        b ? /* @__PURE__ */ t.jsx(go, { children: b }) : null,
        /* @__PURE__ */ t.jsxs(fo, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(bo, { children: r }),
          /* @__PURE__ */ t.jsxs(mo, { children: [
            /* @__PURE__ */ t.jsx(wo, { children: g ? null : /* @__PURE__ */ t.jsx(yo, { isPrimary: !1, onClick: L, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(vo, { children: !h && !k ? /* @__PURE__ */ t.jsx(
              ko,
              {
                type: "submit",
                disabled: d || p,
                children: p ? "Сохранение..." : x
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, uo = o.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, ho = o.div`
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
`, Ee = o.h2`
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
`, go = o.div`
  padding: 12px 18px 0 18px;
`, fo = o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, bo = o.div`
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
`, mo = o.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, wo = o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, vo = o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, yo = o(De)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, ko = o(De)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, jo = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], mi = ({
  value: e = "",
  placeholder: n = "Выберите период",
  options: s = jo,
  showCustomPeriodButton: i = !0,
  onChange: r,
  onCustomPeriodClick: d
}) => {
  const [p, m] = A(!1), [k, g] = A(!1), [f, x] = A(""), [b, h] = A(""), [u, l] = A(""), L = Z(null), y = Z(null);
  U(() => {
    if (e === "Custom" && b && u) {
      const R = E(b), F = E(u);
      x(`С ${R} по ${F}`);
    } else {
      const R = s.find((F) => F.value === e);
      x(R ? R.label : "");
    }
  }, [e, s, b, u]), U(() => {
    const R = (F) => {
      L.current && !L.current.contains(F.target) && m(!1), k && y.current && !y.current.contains(F.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((v) => v.contains(F.target)) || g(!1));
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [k]);
  const T = (R) => {
    r?.(R.value), m(!1);
  }, S = () => {
    m(!1), d ? d() : g(!0);
  }, I = () => {
    r?.(""), x(""), h(""), l("");
  }, B = () => {
    if (b && u) {
      const R = E(b), F = E(u), Y = `С ${R} по ${F}`;
      r?.("Custom", b, u), x(Y), g(!1);
    }
  }, E = (R) => {
    const F = new Date(R), Y = String(F.getDate()).padStart(2, "0"), _ = String(F.getMonth() + 1).padStart(2, "0"), v = F.getFullYear();
    return `${Y}.${_}.${v}`;
  }, z = () => /* @__PURE__ */ t.jsxs(Bo, { children: [
    /* @__PURE__ */ t.jsx(Te, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Ee, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(zo, { onClick: I, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Co, { ref: L, children: [
      /* @__PURE__ */ t.jsxs($o, { onClick: () => m(!p), children: [
        /* @__PURE__ */ t.jsx(Mo, { children: f || n }),
        /* @__PURE__ */ t.jsx(So, { $isOpen: p, children: "▼" })
      ] }),
      p && /* @__PURE__ */ t.jsxs(Do, { children: [
        s.map((R) => /* @__PURE__ */ t.jsxs(Lo, { onClick: () => T(R), $isSelected: e === R.value, children: [
          /* @__PURE__ */ t.jsx(To, { $isSelected: e === R.value, children: e === R.value && /* @__PURE__ */ t.jsx(Eo, {}) }),
          /* @__PURE__ */ t.jsx(Po, { children: R.label })
        ] }, R.id)),
        i && /* @__PURE__ */ t.jsx(Ro, { onClick: S, children: "Другой период" })
      ] })
    ] }),
    k && /* @__PURE__ */ t.jsx("div", { ref: y, children: /* @__PURE__ */ t.jsx(
      po,
      {
        title: "",
        onClose: () => g(!1),
        onCancel: () => g(!1),
        onSave: (R) => {
          R.preventDefault(), B();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(z, {}),
        children: /* @__PURE__ */ t.jsxs(Io, { children: [
          /* @__PURE__ */ t.jsx(ye, { children: /* @__PURE__ */ t.jsx(he, { value: b, onChange: (R) => h(R) }) }),
          /* @__PURE__ */ t.jsx(ye, { children: /* @__PURE__ */ t.jsx(he, { value: u, onChange: (R) => l(R) }) })
        ] })
      }
    ) })
  ] });
}, Co = o.div`
  position: relative;
  width: 245px;
`, $o = o.div`
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
`, Mo = o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, So = o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, Do = o.div`
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
`, Lo = o.div`
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
`, To = o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Eo = o.div`
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
`, Ro = o.div`
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
`, ye = o.div`
  flex: 1;
`, Bo = o.div`
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
`, wi = ({
  name: e,
  value: n,
  onChange: s,
  onBlur: i,
  onKeyPress: r,
  placeholder: d = "8 (999) 500-50-50",
  customPlaceholder: p,
  tabIndex: m,
  disabled: k = !1,
  hasError: g = !1,
  errorMessage: f
}) => {
  const [x, b] = G.useState(!1), h = G.useRef(null), u = !!(p && !n && !x), l = (S) => {
    const B = S.replace(/\D/g, "").slice(0, 11);
    let E = "";
    return B.length > 0 && (E += "8"), B.length > 1 && (E += ` (${B.slice(1, 4)}`), B.length > 4 && (E += `) ${B.slice(4, 7)}`), B.length > 7 && (E += `-${B.slice(7, 9)}`), B.length > 9 && (E += `-${B.slice(9, 11)}`), E;
  }, L = (S) => {
    const I = l(S.target.value), B = {
      ...S,
      target: {
        ...S.target,
        name: e,
        value: I
      }
    };
    s(B);
  }, y = (S) => {
    b(!1), i?.(S);
  }, T = (S) => {
    r?.(S);
  };
  return /* @__PURE__ */ t.jsxs(Fo, { children: [
    /* @__PURE__ */ t.jsx(
      Ao,
      {
        ref: h,
        name: e,
        type: "tel",
        value: n,
        onChange: L,
        onKeyPress: T,
        placeholder: u ? "" : d,
        maxLength: 18,
        tabIndex: m,
        disabled: k,
        hasError: g,
        onFocus: () => b(!0),
        onBlur: y,
        inputMode: "tel"
      }
    ),
    p && /* @__PURE__ */ t.jsx(_o, { isVisible: u, children: p }),
    g && f && /* @__PURE__ */ t.jsx(Oo, { children: f })
  ] });
}, Fo = o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Ao = o.input`
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
`, _o = o.label`
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
`, Oo = o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, vi = ({ tabs: e, activeTab: n, onChange: s, addButton: i, fontSize: r = 14 }) => {
  const d = e.find((p) => p.id === n)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Yo, { children: /* @__PURE__ */ t.jsxs(Wo, { children: [
      e.map((p) => /* @__PURE__ */ t.jsxs(No, { $isActive: n === p.id, onClick: () => s(p.id), $fontSize: r, children: [
        p.label,
        n === p.id && /* @__PURE__ */ t.jsx(Ho, {})
      ] }, p.id)),
      i && /* @__PURE__ */ t.jsx(Vo, { children: i })
    ] }) }),
    d && /* @__PURE__ */ t.jsx(Zo, { children: d })
  ] });
}, Yo = o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Wo = o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, No = o.li`
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
`, Ho = o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Vo = o.li`
  margin-left: auto;
  padding: 4px 0;
`, Zo = o.div`
  margin-top: 20px;
`, yi = ({
  mode: e,
  primaryValue: n,
  secondaryValue: s,
  placeholder: i = "Выберите значение",
  onSelect: r,
  onClear: d,
  disabled: p = !1,
  hasError: m = !1,
  errorMessage: k = "",
  customIcon: g
}) => {
  const x = g || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(qo, { children: [
    /* @__PURE__ */ t.jsx(Ko, { children: n || "Не указано" }),
    s && /* @__PURE__ */ t.jsx(Jo, { children: s })
  ] }) : /* @__PURE__ */ t.jsxs(Uo, { children: [
    /* @__PURE__ */ t.jsxs(Xo, { children: [
      /* @__PURE__ */ t.jsx(Go, { type: "text", value: n || "", placeholder: i, readOnly: !0, disabled: p }),
      n && !p && /* @__PURE__ */ t.jsx(en, { type: "button", onClick: d, "aria-label": "Очистить", children: "×" })
    ] }),
    !p && /* @__PURE__ */ t.jsx(Qo, { type: "button", onClick: r, "aria-label": "Выбрать", children: x }),
    m && k && /* @__PURE__ */ t.jsx(tn, { children: k })
  ] });
}, Uo = o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, Xo = o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, Go = o.input`
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
`, Ko = o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, Jo = o.span`
  font-size: 13px;
  color: #666;
`, Qo = o.button`
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
`, en = o.button`
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
`, tn = o.div`
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
`, ki = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(on, { children: [
  "Всего: ",
  e
] }) }), on = o.p`
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
`, nn = o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, rn = o.span`
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
`, sn = o.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, $i = ({ checked: e, onChange: n, disabled: s }) => {
  const i = () => {
    s || n(!e);
  };
  return /* @__PURE__ */ t.jsxs(nn, { children: [
    /* @__PURE__ */ t.jsx(sn, { checked: e, onChange: i, disabled: s }),
    /* @__PURE__ */ t.jsx(rn, { checked: e, disabled: s })
  ] });
}, Mi = ({ id: e, name: n, checked: s, onChange: i, children: r }) => /* @__PURE__ */ t.jsxs(an, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(ln, { type: "radio", id: e, name: n, checked: s, onChange: i }),
  r
] }), an = o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, ln = o.input`
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
  const r = Z(null), [d, p] = A(!1), m = (x) => {
    !s || !n || (x.preventDefault(), p(!0), f(x));
  }, k = (x) => {
    !d || !n || f(x);
  }, g = () => {
    p(!1);
  }, f = (x) => {
    if (!r.current || !n) return;
    const b = r.current.getBoundingClientRect();
    let u = (x.clientX - b.left) / b.width * 100;
    u = Math.max(0, Math.min(100, u)), n(Math.round(u));
  };
  return U(() => {
    if (d)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", g), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", g);
      };
  }, [d]), /* @__PURE__ */ t.jsxs(cn, { ref: r, $draggable: s, onMouseDown: m, children: [
    /* @__PURE__ */ t.jsx(dn, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(pn, { $percentage: e, $primaryColor: i.primary }),
    s && /* @__PURE__ */ t.jsx(un, { $percentage: e, $primaryColor: i.primary })
  ] });
}, cn = o.div`
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
`, dn = o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, pn = o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, un = o.div`
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
`, hn = ["zoomControl", "fullscreenControl"];
let ie = null;
const xn = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (ie || (ie = new Promise((n, s) => {
  const i = document.createElement("script"), r = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => n(window.ymaps)) : s(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => s(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), ie), Di = ({
  onLocationSelect: e,
  initialAddress: n = "",
  initialLat: s = 55.751244,
  initialLon: i = 37.618423,
  apiKey: r,
  zoom: d = 12,
  height: p = 400,
  width: m = "100%",
  inputPlaceholder: k = "Введите адрес или название места",
  searchButtonLabel: g = "Найти",
  draggablePlacemark: f = !0,
  controls: x = hn,
  showSearch: b = !0,
  className: h,
  style: u,
  onError: l
}) => {
  const [L, y] = A(null), [T, S] = A(n), [I, B] = A(n), [E, z] = A(!1), R = Z(null);
  U(() => {
    let _ = !1, v;
    return (async () => {
      try {
        const j = await xn(r);
        if (_ || !R.current) return;
        v = new j.Map(R.current, {
          center: [s, i],
          zoom: d,
          controls: x
        });
        const M = new j.Placemark([s, i], {}, { draggable: f });
        v.geoObjects.add(M), v.events.add("click", (W) => {
          const P = W.get("coords");
          F(P, M, v);
        }), M.events.add("dragend", () => {
          const W = M.geometry.getCoordinates();
          F(W, M, v);
        }), y(v), z(!0);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
    })(), () => {
      _ = !0, v && v.destroy();
    };
  }, [r, s, i, d, x, f, l]);
  const F = async (_, v, c) => {
    if (window.ymaps)
      try {
        const W = (await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();
        v.geometry.setCoordinates(_), c.panTo(_, { flying: !0 }), B(W), S(W), e(W, _[0], _[1]);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
  }, Y = async () => {
    if (!(!T.trim() || !window.ymaps || !L))
      try {
        const v = (await window.ymaps.geocode(T)).geoObjects.get(0);
        if (v) {
          const c = v.geometry.getCoordinates(), j = v.properties.get("boundedBy");
          L.setBounds(j, { checkZoomRange: !0 });
          const M = new window.ymaps.Placemark(c, {}, { draggable: f });
          L.geoObjects.removeAll(), L.geoObjects.add(M);
          const W = v.getAddressLine();
          B(W), e(W, c[0], c[1]), M.events.add("dragend", () => {
            const P = M.geometry.getCoordinates();
            F(P, M, L);
          });
        }
      } catch (_) {
        l && _ instanceof Error && l(_);
      }
  };
  return /* @__PURE__ */ t.jsxs(gn, { className: h, style: u, children: [
    b && /* @__PURE__ */ t.jsxs(fn, { children: [
      /* @__PURE__ */ t.jsx(
        eo,
        {
          type: "text",
          value: T,
          onChange: (_) => S(_.target.value),
          placeholder: k,
          onKeyPress: (_) => _.key === "Enter" && Y(),
          disabled: !E
        }
      ),
      /* @__PURE__ */ t.jsx(bn, { onClick: Y, disabled: !E, children: g })
    ] }),
    /* @__PURE__ */ t.jsxs(wn, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: I || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(mn, { ref: R, $height: p, $width: m }),
    /* @__PURE__ */ t.jsx(vn, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, gn = o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, fn = o.div`
  display: flex;
  gap: 8px;
`, bn = o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, mn = o.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, wn = o.div`
  font-size: 14px;
  color: #374151;
`, vn = o.div`
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
function ke(e, n = "₽") {
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
function Li(e) {
  if (!e) return 0;
  const n = e.replace(/\D/g, "");
  return parseInt(n, 10);
}
const Ti = ({ title: e, data: n, maxValue: s, step: i, height: r = 300, titleFontSize: d }) => {
  const [p, m] = A(null), k = [];
  for (let f = 0; f <= s; f += i)
    k.push(f);
  const g = n.length > 0 ? n[0].bars.map((f) => ({ name: f.name, color: f.color })) : [];
  return /* @__PURE__ */ t.jsxs(yn, { children: [
    /* @__PURE__ */ t.jsxs(Pe, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Re, { style: { fontSize: d }, children: e }),
      /* @__PURE__ */ t.jsx(kn, { children: g.map((f, x) => /* @__PURE__ */ t.jsxs(jn, { children: [
        /* @__PURE__ */ t.jsx(Cn, { color: f.color }),
        /* @__PURE__ */ t.jsx($n, { children: f.name })
      ] }, x)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Mn, { height: r, children: [
      /* @__PURE__ */ t.jsx(Sn, { children: k.map((f, x) => /* @__PURE__ */ t.jsx(Dn, { children: f.toLocaleString() }, x)) }),
      /* @__PURE__ */ t.jsxs(Ln, { children: [
        /* @__PURE__ */ t.jsxs(Tn, { children: [
          k.map((f, x) => {
            const b = f / s * 100;
            return /* @__PURE__ */ t.jsx(En, { position: 100 - b }, `line-${x}`);
          }),
          n.map((f, x) => /* @__PURE__ */ t.jsxs(Pn, { onMouseEnter: () => m(x), onMouseLeave: () => m(null), children: [
            f.bars.map((b, h) => {
              const u = f.bars.slice(h + 1).reduce((l, L) => l + L.value, 0);
              return /* @__PURE__ */ t.jsx(
                Rn,
                {
                  height: b.value / s * 100,
                  offset: u / s * 100,
                  color: b.color,
                  isHovered: p !== null && p !== x
                },
                h
              );
            }),
            p === x && /* @__PURE__ */ t.jsxs(zn, { children: [
              /* @__PURE__ */ t.jsxs(Fn, { children: [
                /* @__PURE__ */ t.jsxs(An, { children: [
                  "Всего: ",
                  ke(f.total.toString())
                ] }),
                f.bars.map((b, h) => /* @__PURE__ */ t.jsxs(_n, { children: [
                  b.name,
                  ": ",
                  ke(b.value.toString())
                ] }, h))
              ] }),
              /* @__PURE__ */ t.jsx(On, {})
            ] })
          ] }, x))
        ] }),
        /* @__PURE__ */ t.jsx(In, { children: n.map((f, x) => /* @__PURE__ */ t.jsx(Bn, { style: { flex: 1, textAlign: "center" }, children: f.label }, x)) })
      ] })
    ] })
  ] });
}, yn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, kn = o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, jn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Cn = o.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, $n = o.span`
  font-size: 14px;
  color: #4b5563;
`, Mn = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Sn = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, Dn = o.span`
  font-size: 12px;
  color: #6b7280;
`, Ln = o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Tn = o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, En = o.div`
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
`, Rn = o.div`
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
`, Bn = o.span`
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
`, Fn = o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, An = o.div`
  font-weight: 600;
  margin-bottom: 6px;
`, _n = o.div`
  margin-bottom: 2px;
`, On = o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Yn = Oe`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Ei = ({
  title: e,
  data: n,
  xAxisLabel: s,
  yAxisLabel: i,
  maxX: r,
  maxY: d,
  minY: p,
  xStep: m,
  yStep: k,
  height: g = 300,
  showLegend: f = !0,
  xAxisCustomLabels: x,
  showTooltip: b = !0,
  titleFontSize: h = "30px"
}) => {
  const [u, l] = A(null), [L, y] = A({ x: 0, y: 0 }), T = Z(null), S = Z(null), I = Math.max(...n.map((v) => v.x), r), B = [];
  for (let v = 0; v <= I; v += m)
    B.push(v);
  const E = [];
  for (let v = p; v <= d; v += k)
    E.push(v);
  const z = x || B.map((v) => v.toString()), R = f ? Array.from(new Set(n.filter((v) => v.label).map((v) => v.label))).map((v) => {
    const c = n.find((j) => j.label === v);
    return { name: v, color: c.color };
  }) : [], F = {};
  n.forEach((v) => {
    const c = v.label || "default";
    F[c] || (F[c] = []), F[c].push(v);
  });
  const Y = (v) => v / I * 100, _ = (v) => {
    const c = d - p;
    return 100 - (v - p) / c * 100;
  };
  return U(() => {
    if (u && S.current) {
      const v = S.current.getBoundingClientRect(), c = Y(u.x) / 100 * v.width, j = _(u.y) / 100 * v.height;
      y({
        x: c + v.left,
        y: j + v.top
      });
    }
  }, [u, r, d, p]), /* @__PURE__ */ t.jsxs(Wn, { children: [
    /* @__PURE__ */ t.jsxs(Pe, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Re, { style: { fontSize: h }, children: e }),
      f && R.length > 0 && /* @__PURE__ */ t.jsx(Nn, { children: R.map((v, c) => /* @__PURE__ */ t.jsxs(Hn, { children: [
        /* @__PURE__ */ t.jsx(Vn, { color: v.color }),
        /* @__PURE__ */ t.jsx(Zn, { children: v.name })
      ] }, c)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Un, { height: g, children: [
      /* @__PURE__ */ t.jsxs(Xn, { children: [
        E.map((v, c) => /* @__PURE__ */ t.jsx(Gn, { children: v.toLocaleString() }, c)),
        /* @__PURE__ */ t.jsx(je, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(qn, { ref: S, children: [
        E.map((v, c) => /* @__PURE__ */ t.jsx(Kn, { position: _(v) }, `hline-${c}`)),
        Object.values(F).map((v, c) => v.map((j, M) => {
          if (M === 0) return null;
          const W = v[M - 1], P = Y(W.x), V = _(W.y), w = Y(j.x), C = _(j.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${P}%`, y1: `${V}%`, x2: `${w}%`, y2: `${C}%`, stroke: j.color, strokeWidth: "1" })
            },
            `line-${c}-${M}`
          );
        })),
        n.map((v, c) => /* @__PURE__ */ t.jsx(
          Jn,
          {
            x: Y(v.x),
            y: _(v.y),
            color: v.color,
            onMouseEnter: () => l(v),
            onMouseLeave: () => l(null),
            isHovered: u?.label === v.label
          },
          c
        ))
      ] })
    ] }),
    b && u && /* @__PURE__ */ t.jsxs(tr, { ref: T, style: { left: L.x, top: L.y }, children: [
      /* @__PURE__ */ t.jsxs(or, { children: [
        u.name && /* @__PURE__ */ t.jsx(nr, { children: u.name }),
        /* @__PURE__ */ t.jsx(rr, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(ir, {})
    ] }),
    /* @__PURE__ */ t.jsxs(Qn, { children: [
      z.map((v, c) => {
        const M = B[c] / I * 100;
        return /* @__PURE__ */ t.jsx(er, { style: { left: `${M}%`, transform: "translateX(-50%)" }, children: v }, c);
      }),
      s && /* @__PURE__ */ t.jsx(je, { children: s })
    ] })
  ] });
}, Wn = o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Nn = o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Hn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Vn = o.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Zn = o.span`
  font-size: 14px;
  color: #4b5563;
`, Un = o.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Xn = o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, Gn = o.span`
  font-size: 12px;
  color: #6b7280;
`, je = o.div`
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
`, Kn = o.div`
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
`, Qn = o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, er = o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, tr = o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${Yn} 0.15s ease-out forwards;
`, or = o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, nr = o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, rr = o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, ir = o.div`
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
  const [i, r] = A(n), [d, p] = A(0), m = () => {
    r((x) => x > 0 ? x - 1 : e.length - 1), p(0);
  }, k = () => {
    r((x) => x < e.length - 1 ? x + 1 : 0), p(0);
  }, g = () => {
    p((x) => (x + 90) % 360);
  }, f = (x) => {
    x.key === "Escape" ? s() : x.key === "ArrowLeft" ? m() : x.key === "ArrowRight" ? k() : (x.key === "r" || x.key === "к") && g();
  };
  return /* @__PURE__ */ t.jsx(sr, { onClick: s, onKeyDown: f, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(ar, { onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(lr, { onClick: s, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(cr, { children: /* @__PURE__ */ t.jsx(dr, { onClick: g, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(pr, { children: [
      /* @__PURE__ */ t.jsx(Ce, { $position: "left", onClick: m, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(ur, { src: e[i], alt: `Photo ${i + 1}`, $rotation: d }),
      /* @__PURE__ */ t.jsx(Ce, { $position: "right", onClick: k, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(hr, { children: e.map((x, b) => /* @__PURE__ */ t.jsx(
      xr,
      {
        $active: b === i,
        onClick: () => {
          r(b), p(0);
        }
      },
      b
    )) })
  ] }) });
}, sr = o.div`
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
`, ar = o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, lr = o.button`
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
`, cr = o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, dr = o.button`
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
`, pr = o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, ur = o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, Ce = o.button`
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
`, hr = o.div`
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
`, gr = ({ isOpen: e, callPhone: n, error: s, onClose: i }) => {
  const [r, d] = A(!1);
  if (!e) return null;
  const p = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), m = () => {
    p ? window.location.href = `tel:${n}` : (navigator.clipboard.writeText(n), d(!0), setTimeout(() => d(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(fr, { onClick: i, children: /* @__PURE__ */ t.jsxs(br, { onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(mr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx($e, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      wr,
      {
        onClick: m,
        title: p ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          n,
          !p && r && /* @__PURE__ */ t.jsx(vr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx($e, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    s && /* @__PURE__ */ t.jsx(yr, { children: s })
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
`, br = o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, mr = o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, $e = o.p`
  margin-bottom: 15px;
  color: #555;
`, wr = o.div`
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
`, vr = o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, yr = o.div`
  color: #e74c3c;
  margin: 10px 0;
`, kr = Fe({
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
  onToggle: d,
  selectedKey: p,
  onSelect: m,
  autoCollapseOnSelect: k = !1,
  width: g = "315px",
  collapsedWidth: f = "70px",
  className: x,
  style: b
}) => {
  const h = Ae(kr), [u, l] = A(
    r ?? h.collapsed ?? !1
  ), [L, y] = A(null), [T, S] = A(
    p ?? h.selectedSideMenuItem ?? null
  ), [I, B] = A({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), E = Z(null), z = r ?? h.collapsed ?? u, R = (P) => {
    l(P), h.toggleCollapsed(), d?.(P);
  }, F = p ?? h.selectedSideMenuItem ?? T, Y = (P) => {
    S(P), h.setSelectedSideMenuItem(P);
  };
  U(() => {
    r !== void 0 && (l(r), r && y(null));
  }, [r]), U(() => {
    p !== void 0 && Y(p);
  }, [p]), U(() => {
    const P = () => B((V) => ({ ...V, visible: !1 }));
    return document.addEventListener("click", P), () => document.removeEventListener("click", P);
  }, []);
  const _ = () => {
    const P = !z;
    R(P), P && y(null);
  }, v = (P) => {
    P.disabled || P.hidden || (Y(P.key), m?.(P), P.onClick?.(P), k && (R(!0), y(null)));
  }, c = (P) => {
    y((V) => V === P ? null : P);
  }, j = (P, V) => {
    const w = (P.children?.length || 0) > 0;
    if (z && w) {
      V.stopPropagation();
      const C = V.currentTarget.getBoundingClientRect();
      B({
        visible: !0,
        x: C.right + 6,
        y: C.top,
        items: P.children || []
      });
      return;
    }
    w ? c(P.key) : v(P);
  }, M = (P, V = !1) => P.filter((w) => !w.hidden).map((w) => {
    const C = (w.children?.length || 0) > 0, a = L === w.key, $ = F === w.key || !!w.children && w.children.some((D) => D.key === F);
    return /* @__PURE__ */ t.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Lr,
        {
          $collapsed: z,
          $selected: $,
          onClick: (D) => j(w, D),
          $disabled: w.disabled,
          title: w.label,
          children: [
            w.icon && /* @__PURE__ */ t.jsx(Er, { $collapsed: z, children: w.icon }),
            !z && /* @__PURE__ */ t.jsx(Tr, { children: w.label }),
            !z && C && /* @__PURE__ */ t.jsx(Rr, { $expanded: a, children: "▾" })
          ]
        }
      ),
      !z && C && a && /* @__PURE__ */ t.jsx(Pr, { children: M(w.children || [], !0) })
    ] }, w.key);
  }), W = _e(() => I.visible ? /* @__PURE__ */ t.jsx(Br, { style: { left: I.x, top: I.y }, children: I.items.map((P) => /* @__PURE__ */ t.jsx(
    zr,
    {
      onClick: () => {
        v(P), B({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: F === P.key,
      children: P.label
    },
    P.key
  )) }) : null, [I, F]);
  return /* @__PURE__ */ t.jsxs(
    jr,
    {
      ref: E,
      $collapsed: z,
      $width: g,
      $collapsedWidth: f,
      className: x,
      style: b,
      children: [
        /* @__PURE__ */ t.jsxs(Cr, { children: [
          /* @__PURE__ */ t.jsx($r, { onClick: _, "aria-label": "Переключить меню", children: i ?? /* @__PURE__ */ t.jsx(Mr, { $collapsed: z, children: "❮" }) }),
          !z && s && /* @__PURE__ */ t.jsx(Sr, { children: s })
        ] }),
        /* @__PURE__ */ t.jsxs(Dr, { children: [
          /* @__PURE__ */ t.jsx(Me, { children: M(e) }),
          n.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Ir, {}),
            /* @__PURE__ */ t.jsx(Me, { children: M(n) })
          ] })
        ] }),
        W,
        /* @__PURE__ */ t.jsx(Fr, { $collapsed: z })
      ]
    }
  );
}, jr = o.div`
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
`, Cr = o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`, $r = o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`, Mr = o.span`
  display: inline-block;
  transform: rotate(${({ $collapsed: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`, Sr = o.div`
  flex: 1;
  display: flex;
  align-items: center;
`, Dr = o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, Me = o.div`
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
`, Er = o.div`
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
`, Rr = o.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Ir = o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Br = o.div`
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
}, _r = ({ value: e, onChange: n, placeholder: s = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const r = (d) => {
    const p = Ar(d.target.value);
    n(p);
  };
  return /* @__PURE__ */ t.jsx(Or, { type: "text", value: e, onChange: r, placeholder: s, maxLength: 18, tabIndex: i });
}, Or = o.input`
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
`, Ie = "http://95.163.226.24:8080/api", se = "access_token", Yr = "refresh_token", oe = {
  setTokens(e) {
    localStorage.setItem(se, e);
  },
  getAccessToken() {
    return localStorage.getItem(se);
  },
  clear() {
    localStorage.removeItem(se), localStorage.removeItem(Yr);
  }
};
async function Be(e, n = {}) {
  const { method: s = "GET", body: i, headers: r = {}, token: d } = n, p = async (k) => {
    const g = {
      "Content-Type": "application/json",
      ...r
    };
    k && (g.Authorization = `Bearer ${k}`);
    const f = e.startsWith("http") ? e : `${Ie}${e}`;
    return await fetch(f, {
      method: s,
      headers: g,
      body: i ? JSON.stringify(i) : void 0
    });
  }, m = async (k, g = !0) => {
    const f = await p(k);
    if (f.ok) {
      if (f.status === 204)
        return null;
      const b = await f.text();
      if (!b) return null;
      try {
        return JSON.parse(b);
      } catch {
        return b;
      }
    }
    if (f.status === 401 && g) {
      const b = await Wr();
      if (b)
        return m(b, !1);
    }
    let x = `Request failed with status ${f.status}`;
    try {
      const b = await f.json();
      b && typeof b.error == "string" ? x = b.error : typeof b == "string" && (x = b);
    } catch {
      const b = await f.text();
      b && (x = b);
    }
    throw new Error(x);
  };
  return m(d);
}
async function Wr() {
  const e = await fetch(`${Ie}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });
  if (!e.ok)
    return oe.clear(), null;
  const n = await e.json();
  return n.access_token ? (oe.setTokens(n.access_token), n.access_token) : (oe.clear(), null);
}
const Nr = (e, n) => Be("/auth/call/initiate", {
  method: "POST",
  body: {
    phone: e,
    user_type: n
  }
}), Hr = (e, n, s) => Be("/auth/call/confirm", {
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
  supportPhone: d = "8 989 924 24 24",
  supportLinkUrl: p = "https://waypay.one",
  supportLinkText: m = "waypay.one",
  className: k,
  style: g,
  pollingIntervalMs: f = 3e3
}) => {
  const [x, b] = A(!1), [h, u] = A(""), [l, L] = A(!1), [y, T] = A(""), [S, I] = A(""), [B, E] = A(!1), z = Z(void 0);
  U(() => () => {
    z.current && clearInterval(z.current);
  }, []);
  const R = (c) => {
    const j = c.replace(/\D/g, "");
    return j ? j.startsWith("8") ? `+7${j.slice(1)}` : j.startsWith("7") ? `+${j}` : `+${j}` : "";
  }, F = () => {
    L(!1), z.current && window.clearInterval(z.current);
  }, Y = async (c) => {
    if (c.preventDefault(), !h) {
      I("Введите номер телефона");
      return;
    }
    b(!0), I("");
    const j = R(h);
    try {
      const M = await Nr(j, n);
      T(M.call_phone), L(!0), _(j, M.check_id);
    } catch (M) {
      console.error("Auth error:", M), I(
        "Не удалось инициировать авторизацию. Проверьте номер."
      );
    } finally {
      b(!1);
    }
  }, _ = (c, j) => {
    z.current && window.clearInterval(z.current), z.current = window.setInterval(() => {
      v(c, j);
    }, f);
  }, v = async (c, j) => {
    if (!B) {
      E(!0);
      try {
        const M = await Hr(c, j, n);
        M.access_token && M.refresh_token && (oe.setTokens(M.access_token), z.current && window.clearInterval(z.current), L(!1), e(M.access_token));
      } catch (M) {
        console.error("Verification error:", M), I("Ошибка проверки авторизации");
      } finally {
        E(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(Vr, { className: k, style: g, children: [
    /* @__PURE__ */ t.jsxs(Zr, { children: [
      /* @__PURE__ */ t.jsxs(Ur, { onSubmit: Y, children: [
        /* @__PURE__ */ t.jsx(Xr, { children: s }),
        /* @__PURE__ */ t.jsx(Gr, { children: /* @__PURE__ */ t.jsx(qr, { children: /* @__PURE__ */ t.jsx(
          _r,
          {
            value: h,
            onChange: (c) => u(c),
            placeholder: r
          }
        ) }) }),
        S && /* @__PURE__ */ t.jsx(ti, { children: /* @__PURE__ */ t.jsx("span", { children: S }) }),
        /* @__PURE__ */ t.jsx(Kr, { type: "submit", disabled: x, children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Jr, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(Qr, { href: `tel:${d}`, children: d }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(ei, { href: p, target: "_blank", rel: "noreferrer", children: m })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      gr,
      {
        isOpen: l,
        onClose: F,
        callPhone: y,
        error: S
      }
    )
  ] });
}, Vr = o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`, Zr = o.div`
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
`, Kr = o.button`
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
`, Jr = o.div`
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
}, Bi = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", zi = (e, n = 100) => {
  const s = document.createElement("canvas");
  s.width = n, s.height = n;
  const i = s.getContext("2d");
  if (!i) return "";
  const r = oi(e);
  i.fillStyle = r, i.beginPath(), i.arc(n / 2, n / 2, n / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const d = n / 2;
  i.font = `bold ${d}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const p = d * 0.1;
  return i.fillText(e, n / 2, n / 2 + p), s.toDataURL("image/png");
}, Fi = (e) => {
  if (!e) return "";
  const n = typeof e == "string" ? new Date(e) : e;
  if (isNaN(n.getTime())) return "";
  const s = n.getDate().toString().padStart(2, "0"), i = (n.getMonth() + 1).toString().padStart(2, "0"), r = n.getFullYear();
  return `${s}-${i}-${r}`;
};
function Ai(e) {
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
      const f = Math.floor((n.getTime() - s.getTime()) / 1e3), x = Math.floor(f / 60), b = Math.floor(x / 60), h = Math.floor(b / 24);
      return f < 10 ? "скоро" : f < 60 ? `через ${f} секунд` : x === 1 ? "через минуту" : x < 60 ? `через ${x} минут` : b === 1 ? "через час" : b < 24 ? `через ${b} часов` : h === 1 ? "завтра" : h < 7 ? `через ${h} дней` : "в будущем";
    }
    const i = Math.floor((s.getTime() - n.getTime()) / 1e3), r = Math.floor(i / 60), d = Math.floor(r / 60), p = Math.floor(d / 24), m = Math.floor(p / 7), k = Math.floor(p / 30), g = Math.floor(p / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const f = Math.max(1, i);
      return f === 1 ? "секунду назад" : f < 5 ? `${f} секунды назад` : `${f} секунд назад`;
    }
    return r < 60 ? r === 1 ? "минуту назад" : r < 5 ? `${r} минуты назад` : `${r} минут назад` : d < 24 ? d === 1 ? "час назад" : d < 5 ? `${d} часа назад` : `${d} часов назад` : p < 7 ? p === 1 ? "вчера" : p === 2 ? "позавчера" : `${p} дня назад` : m < 4 ? m === 1 ? "неделю назад" : m < 5 ? `${m} недели назад` : `${m} недель назад` : k < 12 ? k === 1 ? "месяц назад" : k < 5 ? `${k} месяца назад` : `${k} месяцев назад` : g === 1 ? "год назад" : g < 5 ? `${g} года назад` : `${g} лет назад`;
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
  gr as AuthCallModal,
  Ii as AuthPage,
  di as BackButton,
  po as BaseModal,
  gi as Checkbox,
  Ti as ColumnChart,
  Se as ContextMenu,
  ki as CountInfoTitle,
  he as CustomCalendar,
  eo as CustomInput,
  _r as CustomPhoneInput,
  xi as CustomSelect,
  li as CustomTable,
  bi as CustomTextArea,
  Re as CustomTitle,
  De as DefaultButton,
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
  kr as SideMenuContext,
  vi as Tabs,
  Pe as TitleField,
  $i as ToggleSwitch,
  Di as YandexMapSelector,
  Be as apiRequest,
  Hr as confirmCallAuth,
  Fi as formatDate,
  ri as formatExactDate,
  ke as formatMoney,
  ni as formatRelativeTime,
  _i as formatRelativeTimeExtended,
  zi as generateAvatar,
  Bi as getInitials,
  Nr as initiateCallAuth,
  Ai as parseDateInput,
  Li as parseMoney,
  oi as stringToColor
};
