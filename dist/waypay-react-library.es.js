import ee, { useRef as X, useState as E, useEffect as G, createContext as Ue, useContext as Ze, useMemo as qe, useCallback as Q } from "react";
import n, { keyframes as Xe } from "styled-components";
import { motion as oe, AnimatePresence as xe } from "framer-motion";
var ae = { exports: {} }, re = {};
var he;
function Ge() {
  if (he) return re;
  he = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(i, s, p) {
    var c = null;
    if (p !== void 0 && (c = "" + p), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      p = {};
      for (var h in s)
        h !== "key" && (p[h] = s[h]);
    } else p = s;
    return s = p.ref, {
      $$typeof: e,
      type: i,
      key: c,
      ref: s !== void 0 ? s : null,
      props: p
    };
  }
  return re.Fragment = o, re.jsx = r, re.jsxs = r, re;
}
var ie = {};
var ge;
function Je() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === B ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case $:
          return "Fragment";
        case I:
          return "Profiler";
        case k:
          return "StrictMode";
        case C:
          return "Suspense";
        case W:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case l:
            return "Portal";
          case F:
            return d.displayName || "Context";
          case T:
            return (d._context.displayName || "Context") + ".Consumer";
          case z:
            var L = d.render;
            return d = d.displayName, d || (d = L.displayName || L.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case P:
            return L = d.displayName || null, L !== null ? L : e(d.type) || "Memo";
          case R:
            L = d._payload, d = d._init;
            try {
              return e(d(L));
            } catch {
            }
        }
      return null;
    }
    function o(d) {
      return "" + d;
    }
    function r(d) {
      try {
        o(d);
        var L = !1;
      } catch {
        L = !0;
      }
      if (L) {
        L = console;
        var A = L.error, S = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return A.call(
          L,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), o(d);
      }
    }
    function i(d) {
      if (d === $) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === R)
        return "<...>";
      try {
        var L = e(d);
        return L ? "<" + L + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var d = y.A;
      return d === null ? null : d.getOwner();
    }
    function p() {
      return Error("react-stack-top-frame");
    }
    function c(d) {
      if (a.call(d, "key")) {
        var L = Object.getOwnPropertyDescriptor(d, "key").get;
        if (L && L.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function h(d, L) {
      function A() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          L
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: A,
        configurable: !0
      });
    }
    function m() {
      var d = e(this.type);
      return J[d] || (J[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function f(d, L, A, S, O, N) {
      var V = A.ref;
      return d = {
        $$typeof: u,
        type: d,
        key: L,
        props: A,
        _owner: S
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function w(d, L, A, S, O, N) {
      var V = L.children;
      if (V !== void 0)
        if (S)
          if (j(V)) {
            for (S = 0; S < V.length; S++)
              g(V[S]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(V);
      if (a.call(L, "key")) {
        V = e(d);
        var K = Object.keys(L).filter(function(Y) {
          return Y !== "key";
        });
        S = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", D[V + S] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          V,
          K,
          V
        ), D[V + S] = !0);
      }
      if (V = null, A !== void 0 && (r(A), V = "" + A), c(L) && (r(L.key), V = "" + L.key), "key" in L) {
        A = {};
        for (var q in L)
          q !== "key" && (A[q] = L[q]);
      } else A = L;
      return V && h(
        A,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), f(
        d,
        V,
        A,
        s(),
        O,
        N
      );
    }
    function g(d) {
      v(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === R && (d._payload.status === "fulfilled" ? v(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function v(d) {
      return typeof d == "object" && d !== null && d.$$typeof === u;
    }
    var x = ee, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), y = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, a = Object.prototype.hasOwnProperty, j = Array.isArray, b = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var H, J = {}, Z = x.react_stack_bottom_frame.bind(
      x,
      p
    )(), M = b(i(p)), D = {};
    ie.Fragment = $, ie.jsx = function(d, L, A) {
      var S = 1e4 > y.recentlyCreatedOwnerStacks++;
      return w(
        d,
        L,
        A,
        !1,
        S ? Error("react-stack-top-frame") : Z,
        S ? b(i(d)) : M
      );
    }, ie.jsxs = function(d, L, A) {
      var S = 1e4 > y.recentlyCreatedOwnerStacks++;
      return w(
        d,
        L,
        A,
        !0,
        S ? Error("react-stack-top-frame") : Z,
        S ? b(i(d)) : M
      );
    };
  })()), ie;
}
var fe;
function Ke() {
  return fe || (fe = 1, process.env.NODE_ENV === "production" ? ae.exports = Ge() : ae.exports = Je()), ae.exports;
}
var t = Ke();
const Be = ({ x: e, y: o, items: r, onClose: i, ...s }) => {
  const p = X(null), [c, h] = E(null);
  G(() => {
    const x = (u) => {
      p.current && !p.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [i]);
  const f = (() => {
    if (!p.current) return { x: e, y: o };
    const x = p.current.offsetWidth, u = p.current.offsetHeight, l = window.innerWidth, $ = window.innerHeight;
    let k = e, I = o;
    return k + x > l && (k = e - x), I + u > $ && (I = o - u), { x: k, y: I };
  })(), w = (x, u) => {
    x.submenu ? h(c === u ? null : u) : x.action && (x.action(), i());
  }, g = (x) => {
    r[x].submenu && h(x);
  }, v = (x) => {
    const u = x.relatedTarget;
    p.current?.contains(u) || h(null);
  };
  return /* @__PURE__ */ t.jsx(
    Qe,
    {
      ref: p,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.15 },
      style: {
        position: "absolute",
        top: f.y,
        left: f.x
      },
      onClick: (x) => x.stopPropagation(),
      onMouseLeave: v,
      ...s,
      children: r.map((x, u) => /* @__PURE__ */ t.jsxs(et, { $hasSubmenu: !!x.submenu, $disabled: x.disabled, children: [
        /* @__PURE__ */ t.jsx(
          tt,
          {
            onClick: (l) => {
              l.stopPropagation(), x.disabled || w(x, u);
            },
            onMouseEnter: () => !x.disabled && g(u),
            whileHover: x.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: x.color,
            $disabled: x.disabled,
            children: /* @__PURE__ */ t.jsxs(nt, { children: [
              x.label,
              x.submenu && /* @__PURE__ */ t.jsx(ot, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        x.submenu && c === u && /* @__PURE__ */ t.jsx(
          rt,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Be, { x: 0, y: -u * 40, items: x.submenu, onClose: () => h(null) })
          }
        )
      ] }, u))
    }
  );
}, Qe = n(oe.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, et = n.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, tt = n(oe.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: o }) => o ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, nt = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, ot = n.span`
  color: #666;
  margin-left: 8px;
`, rt = n(oe.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, os = ({
  columns: e,
  data: o,
  onRowDoubleClick: r,
  contextMenuActions: i = [],
  onSort: s,
  sortConfig: p,
  onRowClick: c,
  selectedRow: h,
  fixedHeight: m,
  hasTotalsRow: f,
  debtChecker: w,
  rowStyles: g = {},
  isLoading: v
}) => {
  const [x, u] = E(null), [l, $] = E(null), k = X(null), I = X(null), T = 500, F = h !== void 0 ? h : x, z = (M) => {
    !e[M].isSortable || !s || s(M);
  }, W = w || ((M) => {
    const D = M[8];
    return typeof D == "string" ? parseFloat(D.replace(/[^\d.]/g, "")) > 0 : !1;
  }), P = (M) => {
    h === void 0 && u(M === F ? null : M), c && c(o[M], M);
  }, R = (M, D) => {
    r && r(M, D);
  }, _ = (M, D) => {
    if (i.length === 0) return;
    M.preventDefault();
    const d = "touches" in M ? M.touches[0].clientX : M.clientX, L = "touches" in M ? M.touches[0].clientY : M.clientY;
    $({
      x: d,
      y: L,
      rowIndex: D
    });
  }, B = (M, D) => {
    M.preventDefault(), _(M, D);
  }, y = (M, D) => {
    i.length !== 0 && (I.current && clearTimeout(I.current), I.current = window.setTimeout(() => {
      _(M, D);
    }, T));
  }, a = () => {
    I.current && (clearTimeout(I.current), I.current = null);
  }, j = () => {
    I.current && window.clearTimeout(I.current);
  }, b = () => {
    $(null);
  };
  G(() => {
    const M = () => {
      l && b();
    };
    return document.addEventListener("click", M), () => {
      document.removeEventListener("click", M), I.current && clearTimeout(I.current);
    };
  }, [l]);
  const H = (M, D, d) => {
    if (D)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const L = g[M] || {};
    return M === F ? {
      backgroundColor: L.backgroundColor || "#007D88",
      color: L.color || "#FFFFFF",
      fontWeight: L.fontWeight || "normal"
    } : d ? {
      backgroundColor: L.backgroundColor || "#E8D8D8",
      color: L.color || "inherit",
      fontWeight: L.fontWeight || "normal"
    } : o[M][o[M].length - 1] === !1 ? {
      backgroundColor: L.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: L.fontWeight || "normal"
    } : {
      backgroundColor: L.backgroundColor || "#FFFFFF",
      color: L.color || "inherit",
      fontWeight: L.fontWeight || "normal"
    };
  }, J = (M, D, d) => {
    if (D) return "#FFFFFF";
    const L = H(M, D, d);
    return L.hoverBackgroundColor ? L.hoverBackgroundColor : M === F ? "#007D88" : d ? "#E8D8D8CC" : o[M][o[M].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, Z = () => {
    if (!l || i.length === 0) return null;
    const M = (typeof i == "function" ? i(o[l.rowIndex]) : i).filter(
      (D) => typeof D == "object" && (typeof D.shouldShow != "function" || D.shouldShow(o[l.rowIndex]))
    );
    return M.length === 0 ? null : /* @__PURE__ */ t.jsx(
      ct,
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
        onClick: (D) => D.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Be,
          {
            items: M.map((D) => {
              const d = {
                label: D.label,
                color: D.color,
                disabled: D.disabled
              };
              return D.getSubmenu ? d.submenu = D.getSubmenu(o[l.rowIndex]) : D.action && (d.action = () => {
                D.action(o[l.rowIndex], l.rowIndex), b();
              }), d;
            }),
            onClose: b,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(at, { ref: k, children: v ? /* @__PURE__ */ t.jsx(it, { children: /* @__PURE__ */ t.jsx(st, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(lt, { children: [
      /* @__PURE__ */ t.jsx(dt, { children: /* @__PURE__ */ t.jsx(be, { children: e.map(
        (M, D) => !M.isHidden && /* @__PURE__ */ t.jsx(
          ut,
          {
            $isSortable: M.isSortable,
            $isActive: p?.key === D,
            onClick: () => z(D),
            $align: M.align || "center",
            $isFirst: D === 0,
            $isLast: D === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(xt, { $align: M.align || "center", children: [
              M.name,
              M.isSortable && /* @__PURE__ */ t.jsx(
                ht,
                {
                  $direction: p?.key === D ? p.direction : "asc",
                  animate: {
                    rotate: p?.key === D && p.direction === "desc" ? 180 : 0,
                    color: p?.key === D ? "#007D88" : "#6B7280"
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
          D
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(pt, { $fixedHeight: m, children: /* @__PURE__ */ t.jsx(xe, { children: o.map((M, D) => {
        const d = !!(f && D === o.length - 1), L = !!(!d && W(M)), A = H(D, d, L), S = J(D, d, L);
        return /* @__PURE__ */ t.jsx(
          be,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: A.backgroundColor || "#FFFFFF",
              color: A.color || "inherit",
              fontWeight: A.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: D === o.length - 1,
            $isSelected: D === F,
            $isTotalsRow: d,
            onClick: () => !d && P(D),
            onDoubleClick: () => !d && R(M, D),
            onContextMenu: (O) => !d && B(O, D),
            onTouchStart: (O) => !d && y(O, D),
            onTouchEnd: a,
            onTouchMove: j,
            whileHover: d ? {} : {
              backgroundColor: S,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: A.backgroundColor || "#FFFFFF",
              color: A.color || "inherit",
              fontWeight: A.fontWeight || "normal"
            },
            children: M.map(
              (O, N) => !e[N]?.isHidden && /* @__PURE__ */ t.jsx(
                gt,
                {
                  $align: e[N]?.align || "center",
                  $isFirst: N === 0,
                  $isLast: N === M.length - 1,
                  $isTotalsCell: d,
                  $isBeforeTotals: d && N < M.findIndex((V) => V === "Итого:"),
                  children: O
                },
                N
              )
            )
          },
          `row-${D}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(xe, { children: Z() })
  ] }) });
}, it = n.div`
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
`, st = n.div`
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
`, at = n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, lt = n.table`
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
`, ct = n(oe.div)`
  z-index: 1000;
  pointer-events: auto;
`, dt = n.thead`
  text-align: center;
  position: relative;
`, pt = n.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, be = n(oe.tr)`
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
`, ut = n.th`
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
`, xt = n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, ht = n(oe.span)`
  display: inline-flex;
  align-items: center;
`, gt = n.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: o }) => e || o ? "none" : "0.5px solid #d1d5db"};
`, rs = ({ onClick: e, tooltip: o, size: r = 32, margin: i }) => /* @__PURE__ */ t.jsx(ft, { onClick: e, size: r, margin: i, title: o, children: /* @__PURE__ */ t.jsx(bt, { size: r }) }), ft = n.button`
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
`, bt = n.div`
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
`, pe = "/api", is = "https://web.waypay.one:5001", ss = "https://file.waypay.one/";
async function ne(e, o = {}) {
  const {
    method: r = "GET",
    body: i,
    headers: s = {},
    token: p,
    withCredentials: c = !0,
    isFormData: h = !1
  } = o, m = async (w) => {
    const g = {
      ...s
    };
    h || (g["Content-Type"] = "application/json"), w && (g.Authorization = `Bearer ${w}`);
    const v = e.startsWith("http") ? e : `${pe}${e}`;
    let x;
    return i && (h ? x = i : x = JSON.stringify(i)), await fetch(v, {
      method: r,
      headers: g,
      body: x,
      credentials: c ? "include" : "same-origin"
    });
  }, f = async (w, g = !0) => {
    const v = await m(w);
    if (v.ok) {
      if (v.status === 204)
        return null;
      const u = await v.text();
      if (!u) return null;
      try {
        return JSON.parse(u);
      } catch {
        return u;
      }
    }
    if (v.status === 401 && g) {
      const u = await _e();
      if (u)
        return f(u, !1);
    }
    let x = `Request failed with status ${v.status}`;
    try {
      const u = await v.text();
      if (u)
        try {
          const l = JSON.parse(u);
          l && typeof l.error == "string" ? x = l.error : typeof l == "string" ? x = l : typeof l?.message == "string" && (x = l.message);
        } catch {
          x = u;
        }
    } catch {
    }
    throw new Error(x);
  };
  return f(p);
}
async function as(e, o = {}) {
  const {
    method: r = "GET",
    headers: i = {},
    token: s,
    withCredentials: p = !0
  } = o, c = async (m) => {
    const f = {
      ...i
    };
    m && (f.Authorization = `Bearer ${m}`);
    const w = e.startsWith("http") ? e : `${pe}${e}`;
    return await fetch(w, {
      method: r,
      headers: f,
      credentials: p ? "include" : "same-origin"
    });
  }, h = async (m, f = !0) => {
    const w = await c(m);
    if (w.ok)
      return await w.blob();
    if (w.status === 401 && f) {
      const v = await _e();
      if (v)
        return h(v, !1);
    }
    let g = `Request failed with status ${w.status}`;
    try {
      const v = await w.text();
      if (v)
        try {
          const x = JSON.parse(v);
          x && typeof x.error == "string" ? g = x.error : typeof x == "string" ? g = x : typeof x?.message == "string" && (g = x.message);
        } catch {
          g = v;
        }
    } catch {
    }
    throw new Error(g);
  };
  return h(s);
}
async function _e() {
  const e = await fetch(`${pe}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  if (!e.ok)
    return null;
  const o = await e.json();
  return o.access_token ? o.access_token : null;
}
const ls = {
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
  async logout(e) {
    try {
      await ne("/auth/session/revoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: e ? { token_id: e } : {}
      });
    } catch (o) {
      throw console.error("Logout error:", o), o;
    }
  },
  async getClientId() {
    return (await this.getSessionInfo())?.client?.id || null;
  },
  async hasPin() {
    return (await this.getSessionInfo())?.has_pin || !1;
  }
}, mt = n.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: rgba(0, 125, 136, 1);
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  color: white;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: ${({ disabled: e }) => e ? 0.7 : 1};

  &:hover {
    background-color: ${({ disabled: e }) => e ? "rgba(0, 125, 136, 1)" : "rgba(0, 150, 163, 1)"};
  }
`, cs = ({ children: e, onClick: o, disabled: r, ...i }) => /* @__PURE__ */ t.jsxs(mt, { onClick: o, disabled: r, ...i, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "currentColor"
    }
  ) }),
  e
] }), ue = ({
  children: e = "Подтвердить",
  icon: o,
  disabled: r = !1,
  bg: i,
  hoverBg: s,
  disabledBg: p,
  textColor: c,
  fullWidth: h = !1,
  minWidth: m,
  width: f,
  isPrimary: w = !0,
  ...g
}) => {
  const x = i ? {
    bg: i,
    hoverBg: s || i,
    disabledBg: p || i,
    textColor: c || (w ? "white" : "black")
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
    wt,
    {
      disabled: r,
      $bg: x.bg,
      $hoverBg: x.hoverBg,
      $disabledBg: x.disabledBg,
      $textColor: x.textColor,
      $fullWidth: h,
      $minWidth: m,
      $width: f,
      ...g,
      children: [
        o && /* @__PURE__ */ t.jsx(vt, { children: o }),
        /* @__PURE__ */ t.jsx("span", { children: e })
      ]
    }
  );
}, wt = n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ disabled: e, $bg: o, $disabledBg: r }) => e ? r : o};
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
    background-color: ${({ disabled: e, $hoverBg: o, $disabledBg: r }) => e ? r : o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({ $bg: e }) => e === "rgba(209, 213, 219, 1)" ? "rgba(209, 233, 239, 1)" : "rgba(156, 163, 175, 0.5)"};
  }
`, vt = n.span`
  display: inline-flex;
  align-items: center;
`, ds = ({ onClick: e, tooltip: o, size: r = 32 }) => /* @__PURE__ */ t.jsx(yt, { onClick: e, size: r, title: o, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: r * 0.5,
    height: r * 0.5,
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
) }), yt = n.button`
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
`, ps = ({ onClick: e, tooltip: o, size: r = 32 }) => /* @__PURE__ */ t.jsx(kt, { onClick: e, size: r, title: o, children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: r * 0.5,
    height: r * 0.5,
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
) }), kt = n.button`
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
`, jt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), us = ({
  children: e = "Экспорт",
  icon: o = /* @__PURE__ */ t.jsx(jt, {}),
  onExport: r,
  isExporting: i = !1,
  exportProgress: s = 0,
  ...p
}) => {
  const c = async (h) => {
    if (r)
      try {
        await r();
      } catch (m) {
        console.error("Export error:", m);
      }
    p.onClick && p.onClick(h);
  };
  return /* @__PURE__ */ t.jsx(Ct, { ...p, onClick: c, disabled: i || p.disabled, children: i ? /* @__PURE__ */ t.jsxs($t, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      s,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(St, { progress: s })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    o,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, Ct = n.button`
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
`, $t = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, St = n.div`
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
`, xs = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: r,
  onChange: i,
  hasError: s = !1,
  errorMessage: p,
  options: c,
  name: h,
  disabled: m = !1,
  required: f = !1,
  ...w
}) => {
  const [g, v] = ee.useState(!1), [x, u] = ee.useState(!1), l = ee.useRef(null), $ = !!(o && !r && !g), k = (C) => {
    i && !m && i({
      target: { value: C, name: h }
    }), u(!1), v(!1);
  }, I = (C) => {
    l.current && !l.current.contains(C.target) && (u(!1), v(!1));
  }, T = () => {
    m || (u(!x), v(!x));
  };
  ee.useEffect(() => (document.addEventListener("mousedown", I), () => {
    document.removeEventListener("mousedown", I);
  }), []);
  const F = c.find((C) => C.value === r), z = F ? F.label : "";
  return /* @__PURE__ */ t.jsxs(Mt, { ref: l, ...w, children: [
    /* @__PURE__ */ t.jsxs(Dt, { children: [
      /* @__PURE__ */ t.jsxs(
        Lt,
        {
          hasError: s,
          isOpen: x,
          disabled: m,
          onClick: T,
          onFocus: () => !m && v(!0),
          onBlur: () => v(!1),
          tabIndex: m ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx(Et, { children: z || e && /* @__PURE__ */ t.jsx(Tt, { children: e }) }),
            /* @__PURE__ */ t.jsx(It, { isOpen: x, disabled: m, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: m ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      x && /* @__PURE__ */ t.jsx(Pt, { children: c.map((C) => /* @__PURE__ */ t.jsxs(zt, { $isSelected: C.value === r, onClick: () => k(C.value), children: [
        /* @__PURE__ */ t.jsx(At, { $isSelected: C.value === r, children: C.value === r && /* @__PURE__ */ t.jsx(Rt, {}) }),
        /* @__PURE__ */ t.jsx(Ft, { children: C.label })
      ] }, C.value)) })
    ] }),
    o && /* @__PURE__ */ t.jsx(Bt, { isVisible: $, children: o }),
    s && p && /* @__PURE__ */ t.jsx(_t, { children: p }),
    /* @__PURE__ */ t.jsx(Ot, { name: h, value: r || "", onChange: () => {
    }, tabIndex: -1, required: f, children: c.map((C) => /* @__PURE__ */ t.jsx("option", { value: C.value, children: C.label }, C.value)) })
  ] });
}, Mt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Dt = n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, Lt = n.div`
  border: 1px solid
    ${({ hasError: e, isOpen: o, disabled: r }) => r ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : o ? "rgba(0, 125, 136, 1)" : "rgba(209, 213, 219, 1)"};
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
    border-color: ${({ hasError: e, disabled: o, isOpen: r }) => o ? "rgba(209, 213, 219, 0.5)" : e ? "rgba(239, 68, 68, 1)" : "rgba(0, 125, 136, 1)"};
  }
`, Et = n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Tt = n.span`
  color: rgba(80, 85, 92, 1);
`, It = n.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, Pt = n.div`
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
`, zt = n.div`
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
`, At = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007D88" : "#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Rt = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, Ft = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Bt = n.label`
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
`, _t = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, Ot = n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`, hs = ({ checked: e = !1, onChange: o, className: r, label: i, disabled: s = !1 }) => {
  const [p, c] = E(!1), h = () => {
    s || !o || o(!e);
  }, m = (f) => {
    s || (f.key === "Enter" || f.key === " ") && (f.preventDefault(), h());
  };
  return /* @__PURE__ */ t.jsxs(Wt, { className: r, onClick: h, onKeyPress: m, tabIndex: s ? -1 : 0, disabled: s, children: [
    /* @__PURE__ */ t.jsx(
      Nt,
      {
        checked: e,
        isFocused: p,
        disabled: s,
        onMouseEnter: () => !s && c(!0),
        onMouseLeave: () => !s && c(!1),
        onFocus: () => !s && c(!0),
        onBlur: () => !s && c(!1),
        children: e && /* @__PURE__ */ t.jsx(Yt, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: s, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: s ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(Ht, { disabled: s, children: i })
  ] });
}, Wt = n.div`
  display: flex;
  align-items: center;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`, Nt = n.div`
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
`, Ht = n.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, Yt = n.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, Vt = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", me = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Ut = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], we = ({ prefix: e = "Дата:", value: o = "", placeholder: r = "Выберите дату", onChange: i, onReset: s }) => {
  const [p, c] = E(!1), [h, m] = E(/* @__PURE__ */ new Date()), [f, w] = E(o ? new Date(o) : null), [g, v] = E(!1), [x, u] = E(!1), l = X(null), $ = X(null), k = X(null);
  G(() => {
    const a = (j) => {
      l.current && !l.current.contains(j.target) && c(!1), $.current && !$.current.contains(j.target) && v(!1), k.current && !k.current.contains(j.target) && u(!1);
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []), G(() => {
    w(o ? new Date(o) : null);
  }, [o]);
  const I = (a) => {
    const j = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()));
    w(a);
    const b = j.toISOString().split("T")[0];
    i?.(b), c(!1);
  }, T = () => {
    const a = /* @__PURE__ */ new Date();
    m(a);
    const b = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())).toISOString().split("T")[0];
    i?.(b), c(!1);
  }, F = () => {
    w(null), i?.(""), s?.(), c(!1);
  }, z = (a) => {
    const j = new Date(h);
    j.setMonth(a), m(j), v(!1);
  }, C = (a) => {
    const j = new Date(h);
    j.setFullYear(a), m(j), u(!1);
  }, W = () => {
    const a = h.getFullYear(), j = h.getMonth(), b = new Date(a, j, 1), J = new Date(a, j + 1, 0).getDate(), Z = b.getDay() === 0 ? 6 : b.getDay() - 1, M = [], D = 35, d = new Date(a, j, 0).getDate();
    for (let A = 0; A < Z; A++) {
      const S = d - Z + A + 1, O = new Date(a, j - 1, S), N = !!(f && O.getDate() === f.getDate() && O.getMonth() === f.getMonth() && O.getFullYear() === f.getFullYear());
      M.push(
        /* @__PURE__ */ t.jsx(ce, { selected: N, onClick: () => I(O), otherMonth: !0, children: S }, `prev-${S}`)
      );
    }
    for (let A = 1; A <= J; A++) {
      const S = new Date(a, j, A), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      M.push(
        /* @__PURE__ */ t.jsx(ce, { selected: O, onClick: () => I(S), children: A }, `current-${A}`)
      );
    }
    const L = D - M.length;
    for (let A = 1; A <= L; A++) {
      const S = new Date(a, j + 1, A), O = !!(f && S.getDate() === f.getDate() && S.getMonth() === f.getMonth() && S.getFullYear() === f.getFullYear());
      M.push(
        /* @__PURE__ */ t.jsx(ce, { selected: O, onClick: () => I(S), otherMonth: !0, children: A }, `next-${A}`)
      );
    }
    return M;
  }, P = () => f ? f.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : r, R = () => {
    const a = (/* @__PURE__ */ new Date()).getFullYear(), j = [];
    for (let b = a - 10; b <= a + 10; b++)
      j.push(b);
    return j;
  }, _ = (a) => {
    a.preventDefault(), a.stopPropagation(), v(!g), u(!1);
  }, B = (a) => {
    a.preventDefault(), a.stopPropagation(), u(!x), v(!1);
  }, y = (a) => {
    const j = a === "next" ? 1 : -1, b = new Date(h);
    b.setMonth(b.getMonth() + j), m(b);
  };
  return /* @__PURE__ */ t.jsxs(Zt, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(qt, { onClick: () => c(!p), children: [
      e && /* @__PURE__ */ t.jsx(Xt, { children: e }),
      /* @__PURE__ */ t.jsx(Gt, { isEmpty: !f, children: P() }),
      /* @__PURE__ */ t.jsx(Jt, { src: Vt, alt: "Календарь" })
    ] }),
    p && /* @__PURE__ */ t.jsxs(Kt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(Qt, { children: [
        /* @__PURE__ */ t.jsx(
          je,
          {
            onClick: (a) => {
              a.preventDefault(), a.stopPropagation(), y("prev");
            },
            onMouseDown: (a) => a.preventDefault(),
            children: /* @__PURE__ */ t.jsx(Ce, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(en, { children: [
          /* @__PURE__ */ t.jsxs(on, { ref: $, children: [
            /* @__PURE__ */ t.jsxs(tn, { onClick: (a) => _(a), onMouseDown: (a) => a.preventDefault(), children: [
              me[h.getMonth()],
              /* @__PURE__ */ t.jsx(ve, { $open: g })
            ] }),
            g && /* @__PURE__ */ t.jsx(ye, { $width: 120, onClick: (a) => a.stopPropagation(), children: me.map((a, j) => /* @__PURE__ */ t.jsx(
              ke,
              {
                $selected: j === h.getMonth(),
                onClick: (b) => {
                  b.stopPropagation(), z(j);
                },
                children: a
              },
              a
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(rn, { ref: k, children: [
            /* @__PURE__ */ t.jsxs(nn, { onClick: (a) => B(a), onMouseDown: (a) => a.preventDefault(), children: [
              h.getFullYear(),
              /* @__PURE__ */ t.jsx(ve, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(ye, { $width: 80, onClick: (a) => a.stopPropagation(), children: R().map((a) => /* @__PURE__ */ t.jsx(
              ke,
              {
                $selected: a === h.getFullYear(),
                onClick: (j) => {
                  j.stopPropagation(), C(a);
                },
                children: a
              },
              a
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          je,
          {
            onClick: (a) => {
              a.preventDefault(), a.stopPropagation(), y("next");
            },
            onMouseDown: (a) => a.preventDefault(),
            children: /* @__PURE__ */ t.jsx(Ce, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(sn, { children: Ut.map((a) => /* @__PURE__ */ t.jsx(an, { children: a }, a)) }),
      /* @__PURE__ */ t.jsx(ln, { children: W() }),
      /* @__PURE__ */ t.jsxs(cn, { children: [
        /* @__PURE__ */ t.jsx($e, { onClick: F, children: "Удалить" }),
        /* @__PURE__ */ t.jsx($e, { onClick: T, children: "Сегодня" })
      ] })
    ] })
  ] });
}, Zt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`, qt = n.div`
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
`, Xt = n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`, Gt = n.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Jt = n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`, Kt = n.div`
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
`, Qt = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, en = n.div`
  display: flex;
  gap: 8px;
  color: black;
`, Oe = n.button`
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
`, tn = n(Oe)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, nn = n(Oe)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, on = n.div`
  position: relative;
`, rn = n.div`
  position: relative;
`, ve = n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, ye = n.div`
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
`, ke = n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, je = n.button`
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
`, Ce = n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, sn = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, an = n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, ln = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`, ce = n.div`
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
`, cn = n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, $e = n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, gs = n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`, fs = n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`, bs = n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`, We = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: r,
  inputType: i = "text",
  onChange: s,
  hasError: p = !1,
  errorMessage: c,
  ...h
}) => {
  const [m, f] = ee.useState(!1), w = !!(o && !r && !m), g = (u) => {
    if (!s) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && s?.(u);
        break;
      case "rubles": {
        const k = u.target.selectionStart, I = u.target.value;
        let T = I.replace(/[^\d]/g, "");
        if (T === "") {
          u.target.value = "", s(u);
          break;
        }
        const F = parseInt(T, 10);
        if (!isNaN(F)) {
          let z = F.toLocaleString("ru-RU");
          z += " ₽";
          const C = v(I, k || 0), W = x(z, C);
          u.target.value = z, s(u), setTimeout(() => {
            u.target.setSelectionRange(W, W);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const k = l.split(".");
        k.length > 2 && (l = k[0] + "." + k.slice(1).join("")), k.length === 2 && k[1].length > 2 && (l = k[0] + "." + k[1].slice(0, 2));
        const I = parseFloat(l);
        if (isNaN(I) || (I > 100 ? l = "100" : I < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const T = u.target.selectionStart || 0, F = l.replace(" %", "");
          u.target.value = l, s(u), setTimeout(() => {
            T < F.length && u.target.setSelectionRange(T, T);
          }, 0);
        } else
          u.target.value = l, s(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let $ = l.split(" ").filter((k) => k.length > 0);
        $ = $.slice(0, 3), l = $.map((k) => {
          if (k.startsWith("-") && (k = k.substring(1)), (k.match(/-/g) || []).length > 1) {
            const T = k.split("-");
            k = T[0] + "-" + T.slice(1).join("");
          }
          return k.includes("-") ? k.split("-").map((T, F) => T.length === 0 ? "" : (F > 0, T[0].toUpperCase() + T.slice(1).toLowerCase())).join("-") : k.length > 0 ? k[0].toUpperCase() + k.slice(1).toLowerCase() : "";
        }).join(" "), l.length > 0 && l[l.length - 1] !== " " && u.target.value.length > 0 && u.target.value[u.target.value.length - 1] === " " && (l += " "), l.length > 100 && (l = l.slice(0, 100)), u.target.value = l, s(u);
        break;
      case "doc":
        l = l.replace(/\D/g, ""), l.length > 4 && (l = `${l.slice(0, 4)} ${l.slice(4, 10)}`), l.length > 11 && (l = l.slice(0, 11)), u.target.value = l, s(u);
        break;
      case "date": {
        l = l.replace(/\D/g, ""), l.length > 4 ? l = `${l.slice(0, 2)}.${l.slice(2, 4)}.${l.slice(4, 8)}` : l.length > 2 && (l = `${l.slice(0, 2)}.${l.slice(2, 4)}`), l.length > 10 && (l = l.slice(0, 10)), r?.length > l.length && [3, 6].includes(l.length) && (l = l.slice(0, l.length - 1)), u.target.value = l, s(u);
        break;
      }
      default:
        s(u);
        break;
    }
  }, v = (u, l) => {
    let $ = 0;
    for (let k = 0; k < Math.min(l, u.length); k++)
      /\d/.test(u[k]) && $++;
    return $;
  }, x = (u, l) => {
    let $ = 0;
    for (let k = 0; k < u.length; k++) {
      if ($ >= l)
        return k;
      /\d/.test(u[k]) && $++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(dn, { children: [
    /* @__PURE__ */ t.jsx(
      pn,
      {
        ...h,
        value: r,
        placeholder: w ? "" : e,
        onFocus: () => f(!0),
        onBlur: (u) => {
          f(!1), h.onBlur?.(u);
        },
        onChange: g,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: p
      }
    ),
    o && /* @__PURE__ */ t.jsx(un, { isVisible: w, children: o }),
    p && c && /* @__PURE__ */ t.jsx(xn, { children: c })
  ] });
}, dn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, pn = n.input`
  padding: 10px 12px;
  border: 1px solid ${({ hasError: e }) => e ? "rgba(239, 68, 68, 1)" : "rgba(209, 213, 219, 1)"};
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
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({ isVisible: e }) => e ? 1 : 0};
  background-color: white;
  padding: 0 4px;
`, xn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, ms = ({ total: e, current: o = 1, onChange: r, itemsPerPage: i = 10 }) => {
  const s = Math.ceil(e / i), [p, c] = E(o), h = (f) => {
    f < 1 || f > s || f === p || (c(f), r?.(f));
  }, m = () => {
    const f = [];
    let g = 1, v = s;
    if (s > 5) {
      const x = Math.floor(2.5);
      g = Math.max(p - x, 1), v = Math.min(p + x, s), p <= x + 1 ? v = 5 : p >= s - x && (g = s - 5 + 1);
    }
    for (let x = g; x <= v; x++)
      f.push(
        /* @__PURE__ */ t.jsx(se, { active: x === p, onClick: () => h(x), children: x }, x)
      );
    return g > 1 && (g > 2 && f.unshift(/* @__PURE__ */ t.jsx(se, { children: "..." }, "start-ellipsis")), f.unshift(
      /* @__PURE__ */ t.jsx(se, { active: p === 1, onClick: () => h(1), children: "1" }, 1)
    )), v < s && (v < s - 1 && f.push(/* @__PURE__ */ t.jsx(se, { children: "..." }, "end-ellipsis")), f.push(
      /* @__PURE__ */ t.jsx(se, { active: s === p, onClick: () => h(s), children: s }, s)
    )), f;
  };
  return /* @__PURE__ */ t.jsxs(hn, { children: [
    /* @__PURE__ */ t.jsx(Se, { disabled: p === 1, onClick: () => h(p - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: p === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    m(),
    /* @__PURE__ */ t.jsx(Se, { disabled: p === s, onClick: () => h(p + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: p === s ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, hn = n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, se = n.div`
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
`, Se = n.button`
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
`, ws = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: r,
  onChange: i,
  hasError: s = !1,
  errorMessage: p,
  rows: c = 3,
  ...h
}) => {
  const [m, f] = ee.useState(!1), w = !!(o && !r && !m);
  return /* @__PURE__ */ t.jsxs(gn, { children: [
    /* @__PURE__ */ t.jsx(
      fn,
      {
        ...h,
        value: r,
        placeholder: w ? "" : e,
        onFocus: () => f(!0),
        onBlur: (g) => {
          f(!1), h.onBlur?.(g);
        },
        onChange: i,
        hasError: s,
        rows: c
      }
    ),
    o && /* @__PURE__ */ t.jsx(bn, { isVisible: w, children: o }),
    s && p && /* @__PURE__ */ t.jsx(mn, { children: p })
  ] });
}, gn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, fn = n.textarea`
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
`, bn = n.label`
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
`, mn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, wn = ({
  title: e,
  onClose: o,
  onCancel: r,
  onSave: i,
  children: s,
  isSaveDisabled: p = !1,
  isSubmitting: c = !1,
  mode: h = "create",
  hideSaveButton: m = !1,
  hideCanselButton: f = !1,
  width: w = "560px",
  saveButtonText: g = "Сохранить",
  customLayout: v
}) => {
  const x = h === "view", u = X(null);
  G(() => {
    const k = (T) => {
      T.key === "Escape" && o();
    };
    document.addEventListener("keydown", k);
    const I = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => u.current?.focus(), 0), () => {
      document.removeEventListener("keydown", k), document.body.style.overflow = I;
    };
  }, [o]);
  const l = (k) => {
    k.target === k.currentTarget && o();
  }, $ = (k) => {
    k.preventDefault(), r();
  };
  return /* @__PURE__ */ t.jsx(vn, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    yn,
    {
      ref: u,
      $width: w,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Ne, { children: [
          /* @__PURE__ */ t.jsx(He, { children: e }),
          /* @__PURE__ */ t.jsx(kn, { type: "button", onClick: o, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        v ? /* @__PURE__ */ t.jsx(jn, { children: v }) : null,
        /* @__PURE__ */ t.jsxs(Cn, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx($n, { children: s }),
          /* @__PURE__ */ t.jsxs(Sn, { children: [
            /* @__PURE__ */ t.jsx(Mn, { children: f ? null : /* @__PURE__ */ t.jsx(Ln, { isPrimary: !1, onClick: $, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(Dn, { children: !x && !m ? /* @__PURE__ */ t.jsx(
              En,
              {
                type: "submit",
                disabled: p || c,
                children: c ? "Сохранение..." : g
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, vn = n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, yn = n.div`
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

  @media (max-width: 768px) {
    padding: 6px;
  }
`, Ne = n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`, He = n.h2`
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
`, kn = n.button`
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
`, jn = n.div`
  padding: 12px 18px 0 18px;
`, Cn = n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`, $n = n.div`
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
`, Sn = n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`, Mn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, Dn = n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`, Ln = n(ue)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, En = n(ue)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, Tn = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], vs = ({
  value: e = "",
  placeholder: o = "Выберите период",
  options: r = Tn,
  showCustomPeriodButton: i = !0,
  onChange: s,
  onCustomPeriodClick: p
}) => {
  const [c, h] = E(!1), [m, f] = E(!1), [w, g] = E(""), [v, x] = E(""), [u, l] = E(""), $ = X(null), k = X(null);
  G(() => {
    if (e === "Custom" && v && u) {
      const P = C(v), R = C(u);
      g(`С ${P} по ${R}`);
    } else {
      const P = r.find((R) => R.value === e);
      g(P ? P.label : "");
    }
  }, [e, r, v, u]), G(() => {
    const P = (R) => {
      $.current && !$.current.contains(R.target) && h(!1), m && k.current && !k.current.contains(R.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((y) => y.contains(R.target)) || f(!1));
    };
    return document.addEventListener("mousedown", P), () => {
      document.removeEventListener("mousedown", P);
    };
  }, [m]);
  const I = (P) => {
    s?.(P.value), h(!1);
  }, T = () => {
    h(!1), p ? p() : f(!0);
  }, F = () => {
    s?.(""), g(""), x(""), l("");
  }, z = () => {
    if (v && u) {
      const P = C(v), R = C(u), _ = `С ${P} по ${R}`;
      s?.("Custom", v, u), g(_), f(!1);
    }
  }, C = (P) => {
    const R = new Date(P), _ = String(R.getDate()).padStart(2, "0"), B = String(R.getMonth() + 1).padStart(2, "0"), y = R.getFullYear();
    return `${_}.${B}.${y}`;
  }, W = () => /* @__PURE__ */ t.jsxs(Hn, { children: [
    /* @__PURE__ */ t.jsx(Ne, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(He, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(Yn, { onClick: F, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(In, { ref: $, children: [
      /* @__PURE__ */ t.jsxs(Pn, { onClick: () => h(!c), children: [
        /* @__PURE__ */ t.jsx(zn, { children: w || o }),
        /* @__PURE__ */ t.jsx(An, { $isOpen: c, children: "▼" })
      ] }),
      c && /* @__PURE__ */ t.jsxs(Rn, { children: [
        r.map((P) => /* @__PURE__ */ t.jsxs(Fn, { onClick: () => I(P), $isSelected: e === P.value, children: [
          /* @__PURE__ */ t.jsx(Bn, { $isSelected: e === P.value, children: e === P.value && /* @__PURE__ */ t.jsx(_n, {}) }),
          /* @__PURE__ */ t.jsx(On, { children: P.label })
        ] }, P.id)),
        i && /* @__PURE__ */ t.jsx(Wn, { onClick: T, children: "Другой период" })
      ] })
    ] }),
    m && /* @__PURE__ */ t.jsx("div", { ref: k, children: /* @__PURE__ */ t.jsx(
      wn,
      {
        title: "",
        onClose: () => f(!1),
        onCancel: () => f(!1),
        onSave: (P) => {
          P.preventDefault(), z();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(W, {}),
        children: /* @__PURE__ */ t.jsxs(Nn, { children: [
          /* @__PURE__ */ t.jsx(Me, { children: /* @__PURE__ */ t.jsx(we, { value: v, onChange: (P) => x(P) }) }),
          /* @__PURE__ */ t.jsx(Me, { children: /* @__PURE__ */ t.jsx(we, { value: u, onChange: (P) => l(P) }) })
        ] })
      }
    ) })
  ] });
}, In = n.div`
  position: relative;
  width: 245px;
`, Pn = n.div`
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
`, zn = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, An = n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`, Rn = n.div`
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
`, Fn = n.div`
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
`, Bn = n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected: e }) => e ? "#007d88" : "#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, _n = n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`, On = n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`, Wn = n.div`
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
`, Nn = n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, Me = n.div`
  flex: 1;
`, Hn = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`, Yn = n.button`
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
`, ys = ({
  name: e,
  value: o,
  onChange: r,
  onBlur: i,
  onKeyPress: s,
  placeholder: p = "8 (999) 500-50-50",
  customPlaceholder: c,
  tabIndex: h,
  disabled: m = !1,
  hasError: f = !1,
  errorMessage: w
}) => {
  const [g, v] = ee.useState(!1), x = ee.useRef(null), u = !!(c && !o && !g), l = (T) => {
    const z = T.replace(/\D/g, "").slice(0, 11);
    let C = "";
    return z.length > 0 && (C += "8"), z.length > 1 && (C += ` (${z.slice(1, 4)}`), z.length > 4 && (C += `) ${z.slice(4, 7)}`), z.length > 7 && (C += `-${z.slice(7, 9)}`), z.length > 9 && (C += `-${z.slice(9, 11)}`), C;
  }, $ = (T) => {
    const F = l(T.target.value), z = {
      ...T,
      target: {
        ...T.target,
        name: e,
        value: F
      }
    };
    r(z);
  }, k = (T) => {
    v(!1), i?.(T);
  }, I = (T) => {
    s?.(T);
  };
  return /* @__PURE__ */ t.jsxs(Vn, { children: [
    /* @__PURE__ */ t.jsx(
      Un,
      {
        ref: x,
        name: e,
        type: "tel",
        value: o,
        onChange: $,
        onKeyPress: I,
        placeholder: u ? "" : p,
        maxLength: 18,
        tabIndex: h,
        disabled: m,
        hasError: f,
        onFocus: () => v(!0),
        onBlur: k,
        inputMode: "tel"
      }
    ),
    c && /* @__PURE__ */ t.jsx(Zn, { isVisible: u, children: c }),
    f && w && /* @__PURE__ */ t.jsx(qn, { children: w })
  ] });
}, Vn = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Un = n.input`
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
`, Zn = n.label`
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
`, qn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, ks = ({ tabs: e, activeTab: o, onChange: r, addButton: i, fontSize: s = 14 }) => {
  const p = e.find((c) => c.id === o)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Xn, { children: /* @__PURE__ */ t.jsxs(Gn, { children: [
      e.map((c) => /* @__PURE__ */ t.jsxs(Jn, { $isActive: o === c.id, onClick: () => r(c.id), $fontSize: s, children: [
        c.label,
        o === c.id && /* @__PURE__ */ t.jsx(Kn, {})
      ] }, c.id)),
      i && /* @__PURE__ */ t.jsx(Qn, { children: i })
    ] }) }),
    p && /* @__PURE__ */ t.jsx(eo, { children: p })
  ] });
}, Xn = n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`, Gn = n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`, Jn = n.li`
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
`, Kn = n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`, Qn = n.li`
  margin-left: auto;
  padding: 4px 0;
`, eo = n.div`
  margin-top: 20px;
`, js = ({
  mode: e,
  primaryValue: o,
  secondaryValue: r,
  placeholder: i = "Выберите значение",
  onSelect: s,
  onClear: p,
  disabled: c = !1,
  hasError: h = !1,
  errorMessage: m = "",
  customIcon: f
}) => {
  const g = f || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(ro, { children: [
    /* @__PURE__ */ t.jsx(io, { children: o || "Не указано" }),
    r && /* @__PURE__ */ t.jsx(so, { children: r })
  ] }) : /* @__PURE__ */ t.jsxs(to, { children: [
    /* @__PURE__ */ t.jsxs(no, { children: [
      /* @__PURE__ */ t.jsx(oo, { type: "text", value: o || "", placeholder: i, readOnly: !0, disabled: c }),
      o && !c && /* @__PURE__ */ t.jsx(lo, { type: "button", onClick: p, "aria-label": "Очистить", children: "×" })
    ] }),
    !c && /* @__PURE__ */ t.jsx(ao, { type: "button", onClick: s, "aria-label": "Выбрать", children: g }),
    h && m && /* @__PURE__ */ t.jsx(co, { children: m })
  ] });
}, to = n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`, no = n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`, oo = n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(e) => e.disabled ? "#f5f5f5" : "white"};
  color: #333;
  pointer-events: none;
`, ro = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`, io = n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`, so = n.span`
  font-size: 13px;
  color: #666;
`, ao = n.button`
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
`, lo = n.button`
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
`, co = n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`, Ye = n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, Cs = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(po, { children: [
  "Всего: ",
  e
] }) }), po = n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`, $s = n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, Ss = n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`, uo = n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`, xo = n.span`
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
`, ho = n.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`, Ms = ({ checked: e, onChange: o, disabled: r }) => {
  const i = () => {
    r || o(!e);
  };
  return /* @__PURE__ */ t.jsxs(uo, { children: [
    /* @__PURE__ */ t.jsx(ho, { checked: e, onChange: i, disabled: r }),
    /* @__PURE__ */ t.jsx(xo, { checked: e, disabled: r })
  ] });
}, Ds = ({ id: e, name: o, checked: r, onChange: i, children: s }) => /* @__PURE__ */ t.jsxs(go, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(fo, { type: "radio", id: e, name: o, checked: r, onChange: i }),
  s
] }), go = n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`, fo = n.input`
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
`, Ls = ({
  percentage: e,
  onChange: o,
  draggable: r = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const s = X(null), [p, c] = E(!1), h = (g) => {
    !r || !o || (g.preventDefault(), c(!0), w(g));
  }, m = (g) => {
    !p || !o || w(g);
  }, f = () => {
    c(!1);
  }, w = (g) => {
    if (!s.current || !o) return;
    const v = s.current.getBoundingClientRect();
    let u = (g.clientX - v.left) / v.width * 100;
    u = Math.max(0, Math.min(100, u)), o(Math.round(u));
  };
  return G(() => {
    if (p)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", f), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", f);
      };
  }, [p]), /* @__PURE__ */ t.jsxs(bo, { ref: s, $draggable: r, onMouseDown: h, children: [
    /* @__PURE__ */ t.jsx(mo, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(wo, { $percentage: e, $primaryColor: i.primary }),
    r && /* @__PURE__ */ t.jsx(vo, { $percentage: e, $primaryColor: i.primary })
  ] });
}, bo = n.div`
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
`, mo = n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(e) => e.$secondaryColor};
  border-radius: 5px;
`, wo = n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(e) => e.$percentage}%;
  background: ${(e) => e.$primaryColor};
  border-radius: ${(e) => e.$percentage === 100 ? "5px" : "5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`, vo = n.div`
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
`, yo = ["zoomControl", "fullscreenControl"];
let de = null;
const ko = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (de || (de = new Promise((o, r) => {
  const i = document.createElement("script"), s = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => o(window.ymaps)) : r(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => r(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), de), Es = ({
  onLocationSelect: e,
  initialAddress: o = "",
  initialLat: r = 55.751244,
  initialLon: i = 37.618423,
  apiKey: s,
  zoom: p = 12,
  height: c = 400,
  width: h = "100%",
  inputPlaceholder: m = "Введите адрес или название места",
  searchButtonLabel: f = "Найти",
  draggablePlacemark: w = !0,
  controls: g = yo,
  showSearch: v = !0,
  className: x,
  style: u,
  onError: l
}) => {
  const [$, k] = E(null), [I, T] = E(o), [F, z] = E(o), [C, W] = E(!1), P = X(null);
  G(() => {
    let B = !1, y;
    return (async () => {
      try {
        const j = await ko(s);
        if (B || !P.current) return;
        y = new j.Map(P.current, {
          center: [r, i],
          zoom: p,
          controls: g
        });
        const b = new j.Placemark([r, i], {}, { draggable: w });
        y.geoObjects.add(b), y.events.add("click", (H) => {
          const J = H.get("coords");
          R(J, b, y);
        }), b.events.add("dragend", () => {
          const H = b.geometry.getCoordinates();
          R(H, b, y);
        }), k(y), W(!0);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
    })(), () => {
      B = !0, y && y.destroy();
    };
  }, [s, r, i, p, g, w, l]);
  const R = async (B, y, a) => {
    if (window.ymaps)
      try {
        const H = (await window.ymaps.geocode(B)).geoObjects.get(0).getAddressLine();
        y.geometry.setCoordinates(B), a.panTo(B, { flying: !0 }), z(H), T(H), e(H, B[0], B[1]);
      } catch (j) {
        l && j instanceof Error && l(j);
      }
  }, _ = async () => {
    if (!(!I.trim() || !window.ymaps || !$))
      try {
        const y = (await window.ymaps.geocode(I)).geoObjects.get(0);
        if (y) {
          const a = y.geometry.getCoordinates(), j = y.properties.get("boundedBy");
          $.setBounds(j, { checkZoomRange: !0 });
          const b = new window.ymaps.Placemark(a, {}, { draggable: w });
          $.geoObjects.removeAll(), $.geoObjects.add(b);
          const H = y.getAddressLine();
          z(H), e(H, a[0], a[1]), b.events.add("dragend", () => {
            const J = b.geometry.getCoordinates();
            R(J, b, $);
          });
        }
      } catch (B) {
        l && B instanceof Error && l(B);
      }
  };
  return /* @__PURE__ */ t.jsxs(jo, { className: x, style: u, children: [
    v && /* @__PURE__ */ t.jsxs(Co, { children: [
      /* @__PURE__ */ t.jsx(
        We,
        {
          type: "text",
          value: I,
          onChange: (B) => T(B.target.value),
          placeholder: m,
          onKeyPress: (B) => B.key === "Enter" && _(),
          disabled: !C
        }
      ),
      /* @__PURE__ */ t.jsx($o, { onClick: _, disabled: !C, children: f })
    ] }),
    /* @__PURE__ */ t.jsxs(Mo, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: F || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(So, { ref: P, $height: c, $width: h }),
    /* @__PURE__ */ t.jsx(Do, { children: "📍 Кликните на карте или найдите адрес через поиск" })
  ] });
}, jo = n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`, Co = n.div`
  display: flex;
  gap: 8px;
`, $o = n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
`, So = n.div`
  width: ${({ $width: e }) => typeof e == "number" ? `${e}px` : e};
  height: ${({ $height: e }) => typeof e == "number" ? `${e}px` : e};
  border-radius: 8px;
  overflow: hidden;
`, Mo = n.div`
  font-size: 14px;
  color: #374151;
`, Do = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`, Ve = n.h1`
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
`;
function De(e, o = "₽") {
  if (!e || e.trim() === "")
    return `0${o}`;
  const r = e.replace(/[^\d-]/g, "");
  if (!r || r === "-" || r === "")
    return `0${o}`;
  const i = parseInt(r, 10);
  if (isNaN(i))
    return `0${o}`;
  const s = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(i);
  return !0 ? `${s}${o}` : s;
}
function Ts(e) {
  if (!e) return 0;
  const o = e.replace(/\D/g, "");
  return parseInt(o, 10);
}
const Is = ({ title: e, data: o, maxValue: r, step: i, height: s = 300, titleFontSize: p }) => {
  const [c, h] = E(null), m = [];
  for (let w = 0; w <= r; w += i)
    m.push(w);
  const f = o.length > 0 ? o[0].bars.map((w) => ({ name: w.name, color: w.color })) : [];
  return /* @__PURE__ */ t.jsxs(Lo, { children: [
    /* @__PURE__ */ t.jsxs(Ye, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Ve, { style: { fontSize: p }, children: e }),
      /* @__PURE__ */ t.jsx(Eo, { children: f.map((w, g) => /* @__PURE__ */ t.jsxs(To, { children: [
        /* @__PURE__ */ t.jsx(Io, { color: w.color }),
        /* @__PURE__ */ t.jsx(Po, { children: w.name })
      ] }, g)) })
    ] }),
    /* @__PURE__ */ t.jsxs(zo, { height: s, children: [
      /* @__PURE__ */ t.jsx(Ao, { children: m.map((w, g) => /* @__PURE__ */ t.jsx(Ro, { children: w.toLocaleString() }, g)) }),
      /* @__PURE__ */ t.jsxs(Fo, { children: [
        /* @__PURE__ */ t.jsxs(Bo, { children: [
          m.map((w, g) => {
            const v = w / r * 100;
            return /* @__PURE__ */ t.jsx(_o, { position: 100 - v }, `line-${g}`);
          }),
          o.map((w, g) => /* @__PURE__ */ t.jsxs(Oo, { onMouseEnter: () => h(g), onMouseLeave: () => h(null), children: [
            w.bars.map((v, x) => {
              const u = w.bars.slice(x + 1).reduce((l, $) => l + $.value, 0);
              return /* @__PURE__ */ t.jsx(
                Wo,
                {
                  height: v.value / r * 100,
                  offset: u / r * 100,
                  color: v.color,
                  isHovered: c !== null && c !== g
                },
                x
              );
            }),
            c === g && /* @__PURE__ */ t.jsxs(Yo, { children: [
              /* @__PURE__ */ t.jsxs(Vo, { children: [
                /* @__PURE__ */ t.jsxs(Uo, { children: [
                  "Всего: ",
                  De(w.total.toString())
                ] }),
                w.bars.map((v, x) => /* @__PURE__ */ t.jsxs(Zo, { children: [
                  v.name,
                  ": ",
                  De(v.value.toString())
                ] }, x))
              ] }),
              /* @__PURE__ */ t.jsx(qo, {})
            ] })
          ] }, g))
        ] }),
        /* @__PURE__ */ t.jsx(No, { children: o.map((w, g) => /* @__PURE__ */ t.jsx(Ho, { style: { flex: 1, textAlign: "center" }, children: w.label }, g)) })
      ] })
    ] })
  ] });
}, Lo = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Eo = n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`, To = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Io = n.div`
  width: 16px;
  height: 16px;
  background-color: ${(e) => e.color};
  border-radius: 4px;
`, Po = n.span`
  font-size: 14px;
  color: #4b5563;
`, zo = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, Ao = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, Ro = n.span`
  font-size: 12px;
  color: #6b7280;
`, Fo = n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`, Bo = n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`, _o = n.div`
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
`, Oo = n.div`
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
`, Wo = n.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, No = n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`, Ho = n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`, Yo = n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`, Vo = n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`, Uo = n.div`
  font-weight: 600;
  margin-bottom: 6px;
`, Zo = n.div`
  margin-bottom: 2px;
`, qo = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Xo = Xe`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, Ps = ({
  title: e,
  data: o,
  xAxisLabel: r,
  yAxisLabel: i,
  maxX: s,
  maxY: p,
  minY: c,
  xStep: h,
  yStep: m,
  height: f = 300,
  showLegend: w = !0,
  xAxisCustomLabels: g,
  showTooltip: v = !0,
  titleFontSize: x = "30px"
}) => {
  const [u, l] = E(null), [$, k] = E({ x: 0, y: 0 }), I = X(null), T = X(null), F = Math.max(...o.map((y) => y.x), s), z = [];
  for (let y = 0; y <= F; y += h)
    z.push(y);
  const C = [];
  for (let y = c; y <= p; y += m)
    C.push(y);
  const W = g || z.map((y) => y.toString()), P = w ? Array.from(new Set(o.filter((y) => y.label).map((y) => y.label))).map((y) => {
    const a = o.find((j) => j.label === y);
    return { name: y, color: a.color };
  }) : [], R = {};
  o.forEach((y) => {
    const a = y.label || "default";
    R[a] || (R[a] = []), R[a].push(y);
  });
  const _ = (y) => y / F * 100, B = (y) => {
    const a = p - c;
    return 100 - (y - c) / a * 100;
  };
  return G(() => {
    if (u && T.current) {
      const y = T.current.getBoundingClientRect(), a = _(u.x) / 100 * y.width, j = B(u.y) / 100 * y.height;
      k({
        x: a + y.left,
        y: j + y.top
      });
    }
  }, [u, s, p, c]), /* @__PURE__ */ t.jsxs(Go, { children: [
    /* @__PURE__ */ t.jsxs(Ye, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Ve, { style: { fontSize: x }, children: e }),
      w && P.length > 0 && /* @__PURE__ */ t.jsx(Jo, { children: P.map((y, a) => /* @__PURE__ */ t.jsxs(Ko, { children: [
        /* @__PURE__ */ t.jsx(Qo, { color: y.color }),
        /* @__PURE__ */ t.jsx(er, { children: y.name })
      ] }, a)) })
    ] }),
    /* @__PURE__ */ t.jsxs(tr, { height: f, children: [
      /* @__PURE__ */ t.jsxs(nr, { children: [
        C.map((y, a) => /* @__PURE__ */ t.jsx(or, { children: y.toLocaleString() }, a)),
        /* @__PURE__ */ t.jsx(Le, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(rr, { ref: T, children: [
        C.map((y, a) => /* @__PURE__ */ t.jsx(ir, { position: B(y) }, `hline-${a}`)),
        Object.values(R).map((y, a) => y.map((j, b) => {
          if (b === 0) return null;
          const H = y[b - 1], J = _(H.x), Z = B(H.y), M = _(j.x), D = B(j.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${J}%`, y1: `${Z}%`, x2: `${M}%`, y2: `${D}%`, stroke: j.color, strokeWidth: "1" })
            },
            `line-${a}-${b}`
          );
        })),
        o.map((y, a) => /* @__PURE__ */ t.jsx(
          sr,
          {
            x: _(y.x),
            y: B(y.y),
            color: y.color,
            onMouseEnter: () => l(y),
            onMouseLeave: () => l(null),
            isHovered: u?.label === y.label
          },
          a
        ))
      ] })
    ] }),
    v && u && /* @__PURE__ */ t.jsxs(cr, { ref: I, style: { left: $.x, top: $.y }, children: [
      /* @__PURE__ */ t.jsxs(dr, { children: [
        u.name && /* @__PURE__ */ t.jsx(pr, { children: u.name }),
        /* @__PURE__ */ t.jsx(ur, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(xr, {})
    ] }),
    /* @__PURE__ */ t.jsxs(ar, { children: [
      W.map((y, a) => {
        const b = z[a] / F * 100;
        return /* @__PURE__ */ t.jsx(lr, { style: { left: `${b}%`, transform: "translateX(-50%)" }, children: y }, a);
      }),
      r && /* @__PURE__ */ t.jsx(Le, { children: r })
    ] })
  ] });
}, Go = n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`, Jo = n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Ko = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Qo = n.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, er = n.span`
  font-size: 14px;
  color: #4b5563;
`, tr = n.div`
  display: flex;
  height: ${(e) => typeof e.height == "number" ? `${e.height}px` : e.height || "300px"};
  position: relative;
`, nr = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`, or = n.span`
  font-size: 12px;
  color: #6b7280;
`, Le = n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`, rr = n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`, ir = n.div`
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
`, sr = n.div`
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
`, ar = n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`, lr = n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`, cr = n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${Xo} 0.15s ease-out forwards;
`, dr = n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`, pr = n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`, ur = n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`, xr = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`, zs = ({ images: e, initialIndex: o, onClose: r }) => {
  const [i, s] = E(o), [p, c] = E(0), h = () => {
    s((g) => g > 0 ? g - 1 : e.length - 1), c(0);
  }, m = () => {
    s((g) => g < e.length - 1 ? g + 1 : 0), c(0);
  }, f = () => {
    c((g) => (g + 90) % 360);
  }, w = (g) => {
    g.key === "Escape" ? r() : g.key === "ArrowLeft" ? h() : g.key === "ArrowRight" ? m() : (g.key === "r" || g.key === "к") && f();
  };
  return /* @__PURE__ */ t.jsx(hr, { onClick: r, onKeyDown: w, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(gr, { onClick: (g) => g.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(fr, { onClick: r, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(br, { children: /* @__PURE__ */ t.jsx(mr, { onClick: f, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",
        stroke: "#50555C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }) }),
    /* @__PURE__ */ t.jsxs(wr, { children: [
      /* @__PURE__ */ t.jsx(Ee, { $position: "left", onClick: h, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(vr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: p }),
      /* @__PURE__ */ t.jsx(Ee, { $position: "right", onClick: m, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(yr, { children: e.map((g, v) => /* @__PURE__ */ t.jsx(
      kr,
      {
        $active: v === i,
        onClick: () => {
          s(v), c(0);
        }
      },
      v
    )) })
  ] }) });
}, hr = n.div`
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
`, gr = n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`, fr = n.button`
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
`, br = n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`, mr = n.button`
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
`, wr = n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`, vr = n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, Ee = n.button`
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
`, yr = n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`, kr = n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active: e }) => e ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`, jr = ({ isOpen: e, callPhone: o, error: r, onClose: i }) => {
  const [s, p] = E(!1);
  if (!e) return null;
  const c = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), h = () => {
    c ? window.location.href = `tel:${o}` : (navigator.clipboard.writeText(o), p(!0), setTimeout(() => p(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(Cr, { onClick: i, children: /* @__PURE__ */ t.jsxs($r, { onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(Sr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Te, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      Mr,
      {
        onClick: h,
        title: c ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          o,
          !c && s && /* @__PURE__ */ t.jsx(Dr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Te, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    r && /* @__PURE__ */ t.jsx(Lr, { children: r })
  ] }) });
}, Cr = n.div`
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
`, $r = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, Sr = n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`, Te = n.p`
  margin-bottom: 15px;
  color: #555;
`, Mr = n.div`
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
`, Dr = n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`, Lr = n.div`
  color: #e74c3c;
  margin: 10px 0;
`, Er = ({
  isOpen: e,
  phone: o,
  isVerifying: r,
  error: i,
  onClose: s,
  onSubmit: p
}) => {
  const [c, h] = E(""), m = X(null);
  return G(() => {
    if (!e) return;
    const f = window.setTimeout(() => m.current?.focus(), 50);
    return () => window.clearTimeout(f);
  }, [e]), e ? /* @__PURE__ */ t.jsx(
    Tr,
    {
      onMouseDown: () => {
        h(""), s();
      },
      children: /* @__PURE__ */ t.jsxs(Ir, { onMouseDown: (f) => f.stopPropagation(), children: [
        /* @__PURE__ */ t.jsx(Pr, { children: "Подтверждение по WhatsApp" }),
        /* @__PURE__ */ t.jsx(Ie, { children: "Мы отправили код в WhatsApp на номер:" }),
        /* @__PURE__ */ t.jsx(zr, { children: o }),
        /* @__PURE__ */ t.jsx(Ie, { children: "Введите полученный код, чтобы завершить авторизацию." }),
        /* @__PURE__ */ t.jsxs(
          Ar,
          {
            onSubmit: (f) => {
              f.preventDefault(), c && !r && p(c);
            },
            children: [
              /* @__PURE__ */ t.jsx(
                Rr,
                {
                  ref: m,
                  type: "text",
                  inputMode: "numeric",
                  autoComplete: "one-time-code",
                  placeholder: "Код из WhatsApp",
                  value: c,
                  onChange: (f) => h(f.target.value.replace(/\D/g, "")),
                  disabled: r
                }
              ),
              i && /* @__PURE__ */ t.jsx(Fr, { children: i }),
              /* @__PURE__ */ t.jsx(Br, { type: "submit", disabled: !c || r, children: r ? "Проверка…" : "Подтвердить" })
            ]
          }
        )
      ] })
    }
  ) : null;
}, Tr = n.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;
  box-sizing: border-box;
`, Ir = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`, Pr = n.h2`
  font-size: 20px;
  margin: 0 0 20px;
  color: #333;
`, Ie = n.p`
  margin: 0 0 15px;
  color: #555;
`, zr = n.div`
  font-size: 22px;
  font-weight: 700;
  margin: 16px 0;
  color: rgba(0, 125, 136, 1);
`, Ar = n.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`, Rr = n.input`
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
`, Fr = n.div`
  color: #e74c3c;
  font-size: 14px;
`, Br = n.button`
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
`, _r = Ue({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), Or = ({ collapsed: e }) => /* @__PURE__ */ t.jsx(
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
), As = ({
  items: e,
  bottomItems: o = [],
  bottomContent: r,
  logo: i,
  arrowIcon: s,
  collapsed: p,
  onToggle: c,
  selectedKey: h,
  onSelect: m,
  autoCollapseOnSelect: f = !1,
  width: w = "315px",
  collapsedWidth: g = "85px",
  className: v,
  style: x,
  mobileBreakpoint: u = 768,
  showBottomLabels: l = !0,
  children: $
}) => {
  const k = Ze(_r), [I, T] = E(window.innerWidth <= u);
  G(() => {
    const S = () => {
      T(window.innerWidth <= u);
    };
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [u]);
  const [F, z] = E(
    p ?? k.collapsed ?? !1
  ), [C, W] = E(null), [P, R] = E(
    h ?? k.selectedSideMenuItem ?? null
  ), [_, B] = E({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), y = X(null), a = p ?? k.collapsed ?? F, j = (S) => {
    z(S), k.toggleCollapsed(), c?.(S);
  }, b = h ?? k.selectedSideMenuItem ?? P, H = (S) => {
    R(S), k.setSelectedSideMenuItem(S);
  };
  G(() => {
    p !== void 0 && (z(p), p && W(null));
  }, [p]), G(() => {
    h !== void 0 && H(h);
  }, [h]), G(() => {
    const S = () => B((O) => ({ ...O, visible: !1 }));
    return document.addEventListener("click", S), () => document.removeEventListener("click", S);
  }, []);
  const J = () => {
    const S = !a;
    j(S), S && W(null);
  }, Z = (S) => {
    S.disabled || S.hidden || (H(S.key), m?.(S), S.onClick?.(S), f && (j(!0), W(null)));
  }, M = (S) => {
    W((O) => O === S ? null : S);
  }, D = (S, O) => {
    const N = (S.children?.length || 0) > 0;
    if (a && N) {
      O.stopPropagation();
      const V = O.currentTarget.getBoundingClientRect();
      B({
        visible: !0,
        x: V.right + 6,
        y: V.top,
        items: S.children || []
      });
      return;
    }
    N ? M(S.key) : Z(S);
  }, d = (S, O = !1) => S.filter((N) => !N.hidden).map((N) => {
    const V = (N.children?.length || 0) > 0, K = C === N.key, q = b === N.key || !!N.children && N.children.some((Y) => Y.key === b);
    return /* @__PURE__ */ t.jsxs(ee.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Kr,
        {
          $collapsed: a,
          $selected: q,
          onClick: (Y) => D(N, Y),
          $disabled: N.disabled,
          title: N.label,
          children: [
            N.icon && /* @__PURE__ */ t.jsx(ei, { $collapsed: a, children: N.icon }),
            !a && /* @__PURE__ */ t.jsx(Qr, { children: N.label }),
            !a && V && /* @__PURE__ */ t.jsx(ni, { $expanded: K, children: "▾" })
          ]
        }
      ),
      !a && V && K && /* @__PURE__ */ t.jsx(ti, { children: d(N.children || [], !0) })
    ] }, N.key);
  }), L = qe(() => _.visible ? /* @__PURE__ */ t.jsx(oi, { style: { left: _.x, top: _.y }, children: _.items.map((S) => /* @__PURE__ */ t.jsx(
    ri,
    {
      onClick: () => {
        Z(S), B({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: b === S.key,
      children: S.label
    },
    S.key
  )) }) : null, [_, b]), A = () => {
    const S = [...e, ...o].filter((O) => !O.hidden);
    return /* @__PURE__ */ t.jsx(Hr, { children: S.map((O) => {
      const N = b === O.key;
      return /* @__PURE__ */ t.jsxs(
        Yr,
        {
          $selected: N,
          onClick: () => Z(O),
          $disabled: O.disabled,
          children: [
            O.icon && /* @__PURE__ */ t.jsx(Vr, { $selected: N, children: O.icon }),
            l && /* @__PURE__ */ t.jsx(Ur, { $selected: N, children: O.label })
          ]
        },
        O.key
      );
    }) });
  };
  return I ? /* @__PURE__ */ t.jsxs(Wr, { className: v, style: x, children: [
    /* @__PURE__ */ t.jsx(Nr, { children: $ }),
    A()
  ] }) : /* @__PURE__ */ t.jsxs(
    Zr,
    {
      ref: y,
      $collapsed: a,
      $width: w,
      $collapsedWidth: g,
      className: v,
      style: x,
      children: [
        /* @__PURE__ */ t.jsxs(qr, { children: [
          /* @__PURE__ */ t.jsx(Xr, { onClick: J, "aria-label": "Переключить меню", children: s ?? /* @__PURE__ */ t.jsx(Or, { collapsed: a }) }),
          !a && i && /* @__PURE__ */ t.jsx(Gr, { children: i })
        ] }),
        /* @__PURE__ */ t.jsxs(Jr, { children: [
          /* @__PURE__ */ t.jsx(Pe, { children: d(e) }),
          o.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(ze, {}),
            /* @__PURE__ */ t.jsx(Pe, { children: d(o) })
          ] }),
          r && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            (o.length > 0 || e.length > 0) && /* @__PURE__ */ t.jsx(ze, {}),
            /* @__PURE__ */ t.jsx(si, { $collapsed: a, children: r })
          ] })
        ] }),
        L,
        /* @__PURE__ */ t.jsx(ii, { $collapsed: a }),
        $
      ]
    }
  );
}, Wr = n.div`
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
`, Nr = n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`, Hr = n.nav`
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
`, Yr = n.div`
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
`, Vr = n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
`, Ur = n.span`
  font-size: 12px;
  font-weight: ${({ $selected: e }) => e ? "600" : "400"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  text-align: center;
  white-space: nowrap;
`, Zr = n.div`
  width: ${({ $collapsed: e, $width: o, $collapsedWidth: r }) => e ? r : o};
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
`, qr = n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`, Xr = n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`, Gr = n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`, Jr = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, Pe = n.div`
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
`, Kr = n.div`
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
`, Qr = n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, ei = n.div`
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
`, ti = n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, ni = n.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, ze = n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, oi = n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`, ri = n.div`
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
`, ii = n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, si = n.div`
  width: 100%;
  margin-top: auto;
  padding: ${({ $collapsed: e }) => e ? "8px 0" : "12px 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Адаптация для свернутого состояния */
  ${({ $collapsed: e }) => e && `
    & > * {
      transform: scale(0.9);
    }
  `}
`, ai = (e) => {
  const o = e.replace(/\D/g, ""), i = (o.startsWith("8") || o.length === 0 ? o : `8${o}`).slice(0, 11);
  let s = "";
  return i.length > 0 && (s += "8"), i.length > 1 && (s += ` (${i.slice(1, 4)}`), i.length > 4 && (s += `) ${i.slice(4, 7)}`), i.length > 7 && (s += `-${i.slice(7, 9)}`), i.length > 9 && (s += `-${i.slice(9, 11)}`), s;
}, li = ({ value: e, onChange: o, placeholder: r = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const s = (p) => {
    const c = ai(p.target.value);
    o(c);
  };
  return /* @__PURE__ */ t.jsx(ci, { type: "text", value: e, onChange: s, placeholder: r, maxLength: 18, tabIndex: i });
}, ci = n.input`
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
`;
class di {
  /**
   * Создать подписку
   * @param tariffType - тип тарифа
   * @param days - количество дней (опционально)
   * @param ones - количество "ones" (опционально)
   * @returns Promise с данными подписки и ссылкой на оплату
   */
  async subscribe(o, r, i) {
    return ne("/Pay/subscribe", {
      method: "POST",
      body: {
        tariffType: o,
        days: r ?? null,
        ones: i ?? null
      }
    });
  }
  /**
   * Отменить подписку
   * @param tariffType - тип тарифа (опционально, по умолчанию WaypayCrm)
   * @returns Promise с информацией об отмене
   */
  async cancelSubscription(o) {
    const r = {};
    return o !== void 0 && (r.tariffType = o), ne("/Pay/cancel", {
      method: "POST",
      body: r
    });
  }
  /**
   * Получить информацию о текущей подписке
   * @param tariffType - тип тарифа (опционально, по умолчанию WaypayCrm)
   * @returns Promise с информацией о подписке
   */
  async getSubscriptionInfo(o) {
    let r = "/Pay/status";
    return o !== void 0 && (r += `?tariffType=${o}`), ne(r, {
      method: "GET"
    });
  }
  /**
   * Проверить активна ли подписка
   * @param tariffType - тип тарифа (опционально)
   * @returns boolean - активна ли подписка
   */
  async isSubscriptionActive(o) {
    return (await this.getSubscriptionInfo(o)).isActive;
  }
  /**
   * Получить дату окончания подписки
   * @param tariffType - тип тарифа (опционально)
   * @returns string | null - дата окончания или null
   */
  async getSubscriptionEndDate(o) {
    return (await this.getSubscriptionInfo(o)).endAt;
  }
}
const le = new di(), Rs = ({
  paymentUrl: e,
  onPaymentComplete: o,
  expiresAt: r,
  status: i,
  tariffType: s,
  onCheckStatus: p
}) => {
  const [c, h] = E(1), [m, f] = E(!1), [w, g] = E(null), [v, x] = E(!1), [u, l] = E(null), [$, k] = E(i || "Pending"), I = X(!1), T = X(!0), F = X(null), z = X(null), C = Q((b) => {
    const H = (/* @__PURE__ */ new Date()).getTime(), Z = new Date(b).getTime() - H;
    if (Z <= 0)
      return "00:00";
    const M = Math.floor(Z % (1e3 * 60 * 60) / (1e3 * 60)), D = Math.floor(Z % (1e3 * 60) / 1e3);
    return `${M.toString().padStart(2, "0")}:${D.toString().padStart(2, "0")}`;
  }, []), W = Q(() => {
    r && c === 1 && $ === "Pending" && C(r) === "00:00" && (l("Время ожидания оплаты истекло"), z.current && (clearInterval(z.current), z.current = null));
  }, [r, c, $, C]), P = Q(() => {
    !r || c !== 1 || $ !== "Pending" || (W(), z.current && clearInterval(z.current), z.current = window.setInterval(() => {
      T.current && c === 1 && $ === "Pending" && W();
    }, 1e3));
  }, [r, c, $, W]), R = Q(() => {
    z.current && (clearInterval(z.current), z.current = null);
  }, []), _ = Q(() => {
    F.current && (clearInterval(F.current), F.current = null);
  }, []), B = Q(async () => {
    if (I.current || c === 3 || $ === "Active") {
      console.log("Пропуск проверки:", {
        isChecking: I.current,
        paymentStep: c,
        currentStatus: $
      });
      return;
    }
    try {
      if (I.current = !0, l(null), p) {
        const b = await p();
        b.success && b.status === "Active" ? (k("Active"), h(3), R(), _(), o && o()) : b.status === "Pending" ? (k("Pending"), h(1), b.transaction_status === "Authorized" && h(2)) : b.status === "Expired" && (k("Active"), h(3), R(), _(), o && o());
      }
    } catch (b) {
      console.error("Ошибка при проверке статуса:", b), l("Не удалось проверить статус оплаты");
    } finally {
      T.current && (I.current = !1);
    }
  }, [p, o, $, R, _]);
  G(() => {
    if (c === 3) {
      const b = setTimeout(() => {
        o && o();
      }, 2e3);
      return () => clearTimeout(b);
    }
  }, [c, o]);
  const y = Q(() => {
    F.current || $ === "Active" || (B(), F.current = window.setInterval(() => {
      T.current && $ !== "Active" && B();
    }, 5e3));
  }, [B, $]);
  G(() => (T.current = !0, $ === "Active" ? h(3) : $ === "Pending" && (y(), P()), () => {
    T.current = !1, _(), R();
  }), [$, y, P, _, R]), G(() => {
    c === 1 && $ === "Pending" ? P() : R();
  }, [c, $, P, R]);
  const a = (b) => c > b ? "completed" : c === b ? "current" : "pending", j = async () => {
    try {
      await le.cancelSubscription(s), f(!0), g(null), _(), R(), window.location.reload();
    } catch (b) {
      console.error("Ошибка при отмене подписки:", b), g("Произошла ошибка при отмене подписки");
    } finally {
      f(!1), x(!1);
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "12px",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: {
      maxWidth: "600px",
      width: "100%",
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "24px 16px",
      position: "relative",
      margin: "12px 0"
    }, children: [
      !v && /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => x(!0),
          className: "desktop-cancel-button",
          style: {
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "transparent",
            color: "#999",
            border: "1px solid #ddd",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "13px",
            cursor: "pointer",
            transition: "all 0.3s",
            zIndex: 10,
            minHeight: "36px",
            minWidth: "80px"
          },
          onMouseEnter: (b) => {
            b.currentTarget.style.backgroundColor = "#f5f5f5", b.currentTarget.style.color = "#666";
          },
          onMouseLeave: (b) => {
            b.currentTarget.style.backgroundColor = "transparent", b.currentTarget.style.color = "#999";
          },
          children: "✕ Отменить"
        }
      ),
      v && /* @__PURE__ */ t.jsx("div", { style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1e3,
        padding: "16px",
        boxSizing: "border-box"
      }, children: /* @__PURE__ */ t.jsxs("div", { style: {
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "24px 20px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
        maxHeight: "90vh",
        overflowY: "auto"
      }, children: [
        /* @__PURE__ */ t.jsx("h3", { style: {
          color: "#333",
          marginBottom: "12px",
          fontSize: "20px",
          lineHeight: "1.4"
        }, children: "Отменить оформление?" }),
        /* @__PURE__ */ t.jsx("p", { style: {
          color: "#666",
          marginBottom: "24px",
          fontSize: "15px",
          lineHeight: "1.5"
        }, children: "Вы уверены, что хотите отменить оформление подписки? Вам придется начать заново." }),
        w && /* @__PURE__ */ t.jsx("div", { style: {
          backgroundColor: "#FFEBEE",
          color: "#F44336",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontSize: "14px"
        }, children: w }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }, children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: j,
              disabled: m,
              style: {
                width: "100%",
                backgroundColor: "#F44336",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: m ? "not-allowed" : "pointer",
                opacity: m ? 0.7 : 1,
                transition: "background-color 0.3s",
                minHeight: "48px"
              },
              onMouseEnter: (b) => {
                m || (b.currentTarget.style.backgroundColor = "#D32F2F");
              },
              onMouseLeave: (b) => {
                m || (b.currentTarget.style.backgroundColor = "#F44336");
              },
              children: m ? "Отмена..." : "Да, отменить"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => {
                x(!1), g(null);
              },
              disabled: m,
              style: {
                width: "100%",
                backgroundColor: "#f5f5f5",
                color: "#666",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: m ? "not-allowed" : "pointer",
                opacity: m ? 0.5 : 1,
                transition: "background-color 0.3s",
                minHeight: "48px"
              },
              onMouseEnter: (b) => {
                m || (b.currentTarget.style.backgroundColor = "#e0e0e0");
              },
              onMouseLeave: (b) => {
                m || (b.currentTarget.style.backgroundColor = "#f5f5f5");
              },
              children: "Нет, вернуться"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ t.jsxs("div", { style: {
        textAlign: "center",
        marginBottom: "24px"
      }, children: [
        /* @__PURE__ */ t.jsxs("h1", { style: {
          color: "#333",
          marginBottom: "8px",
          fontSize: "24px",
          lineHeight: "1.3",
          padding: "0 8px"
        }, children: [
          c === 1 && $ === "Pending" && "Ожидание оплаты",
          c === 2 && "Подтверждение платежа",
          c === 3 && "Платёж завершён"
        ] }),
        /* @__PURE__ */ t.jsxs("p", { style: {
          color: "#666",
          fontSize: "15px",
          lineHeight: "1.5",
          padding: "0 12px",
          margin: 0
        }, children: [
          c === 1 && $ === "Pending" && "Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.",
          c === 2 && "Платёж обрабатывается банком. Обычно это занимает несколько секунд.",
          c === 3 && "Подписка успешно активирована! Спасибо за покупку."
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "32px",
        position: "relative",
        padding: "0 4px"
      }, children: [
        /* @__PURE__ */ t.jsx("div", { style: {
          position: "absolute",
          top: "15px",
          left: "18%",
          right: "18%",
          height: "2px",
          backgroundColor: "#E0E0E0",
          zIndex: 1
        }, children: /* @__PURE__ */ t.jsx("div", { style: {
          width: c === 1 ? "0%" : c === 2 ? "50%" : "100%",
          height: "100%",
          backgroundColor: "#007D88",
          transition: "width 0.5s ease"
        } }) }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          flex: 1
        }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: a(1) === "completed" || a(1) === "current" ? "#007D88" : "#E0E0E0",
            border: a(1) === "current" ? "3px solid #007D88" : "none",
            margin: "0 auto 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold"
          }, children: a(1) === "completed" ? "✓" : "1" }),
          /* @__PURE__ */ t.jsx("div", { style: {
            color: a(1) === "current" ? "#007D88" : "#999",
            fontSize: "11px",
            fontWeight: a(1) === "current" ? "bold" : "normal"
          }, children: "Начало" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          flex: 1
        }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: a(2) === "completed" ? "#007D88" : a(2) === "current" ? "white" : "#E0E0E0",
            border: a(2) === "current" ? "3px solid #007D88" : "none",
            margin: "0 auto 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: a(2) === "current" ? "#007D88" : a(2) === "completed" ? "white" : "#999",
            fontSize: "14px",
            fontWeight: "bold"
          }, children: a(2) === "completed" ? "✓" : "2" }),
          /* @__PURE__ */ t.jsx("div", { style: {
            color: a(2) === "current" ? "#007D88" : "#999",
            fontSize: "11px",
            fontWeight: a(2) === "current" ? "bold" : "normal"
          }, children: "Подтверждение" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          flex: 1
        }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: a(3) === "completed" ? "#007D88" : a(3) === "current" ? "white" : "#E0E0E0",
            border: a(3) === "current" ? "3px solid #007D88" : "none",
            margin: "0 auto 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: a(3) === "current" ? "#007D88" : a(3) === "completed" ? "white" : "#999",
            fontSize: "14px",
            fontWeight: "bold"
          }, children: a(3) === "completed" ? "✓" : "3" }),
          /* @__PURE__ */ t.jsx("div", { style: {
            color: a(3) === "current" ? "#007D88" : "#999",
            fontSize: "11px",
            fontWeight: a(3) === "current" ? "bold" : "normal"
          }, children: "Завершено" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { style: {
        backgroundColor: "#F9FAFA",
        borderRadius: "12px",
        padding: "20px 16px",
        marginBottom: "24px"
      }, children: [
        /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            color: "#999",
            fontSize: "13px",
            marginBottom: "8px"
          }, children: "Ссылка для оплаты" }),
          /* @__PURE__ */ t.jsx(
            "a",
            {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                color: "#007D88",
                textDecoration: "none",
                fontSize: "14px",
                wordBreak: "break-all",
                display: "block",
                padding: "12px 16px",
                backgroundColor: "#E8F4F5",
                borderRadius: "8px",
                transition: "background-color 0.3s",
                lineHeight: "1.5",
                minHeight: "44px"
              },
              onMouseEnter: (b) => {
                b.currentTarget.style.backgroundColor = "#D1E9EB";
              },
              onMouseLeave: (b) => {
                b.currentTarget.style.backgroundColor = "#E8F4F5";
              },
              children: e
            }
          )
        ] }),
        c === 1 && /* @__PURE__ */ t.jsx("div", { style: {
          borderTop: "1px solid #E0E0E0",
          paddingTop: "16px"
        }, children: !v && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => x(!0),
            className: "mobile-cancel-button",
            style: {
              width: "100%",
              margin: "16px 0 0px 0px",
              backgroundColor: "#F44336",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.3s",
              zIndex: 10
            },
            onMouseEnter: (b) => {
              b.currentTarget.style.backgroundColor = "#D32F2F";
            },
            onMouseLeave: (b) => {
              b.currentTarget.style.backgroundColor = "#F44336";
            },
            children: "✕ Отменить оформление"
          }
        ) })
      ] }),
      u && c !== 3 && $ !== "Active" && /* @__PURE__ */ t.jsx("div", { style: {
        backgroundColor: "#FFEBEE",
        color: "#F44336",
        padding: "12px 16px",
        borderRadius: "8px",
        marginBottom: "16px",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "1.5"
      }, children: u }),
      c === 2 && /* @__PURE__ */ t.jsx("div", { style: {
        marginTop: "24px",
        padding: "16px",
        backgroundColor: "#F9FAFA",
        borderRadius: "12px",
        textAlign: "center"
      }, children: /* @__PURE__ */ t.jsx("p", { style: {
        color: "#007D88",
        fontSize: "14px",
        margin: 0,
        lineHeight: "1.5"
      }, children: "Платёж обрабатывается банком. Это может занять от нескольких секунд до часа." }) }),
      $ === "Active" && c !== 3 && /* @__PURE__ */ t.jsx("div", { style: {
        marginTop: "24px",
        padding: "16px",
        backgroundColor: "#E8F5E9",
        borderRadius: "12px",
        textAlign: "center"
      }, children: /* @__PURE__ */ t.jsx("p", { style: {
        color: "#2E7D32",
        fontSize: "14px",
        margin: 0,
        lineHeight: "1.5"
      }, children: "Подписка активна! Страница будет обновлена автоматически." }) })
    ] }),
    /* @__PURE__ */ t.jsx("style", { children: `
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
      ` })
  ] });
}, pi = (e = {}) => {
  const {
    tariffType: o,
    autoRedirect: r = !1,
    onSuccess: i,
    onCancel: s,
    onError: p
  } = e, [c, h] = E(!1), [m, f] = E(!1), [w, g] = E(!1), [v, x] = E(!1), [u, l] = E(null), [$, k] = E(null), [I, T] = E(null), [F, z] = E(null), [C, W] = E(!1), P = Q(async (y, a, j) => {
    f(!0), h(!0), l(null), k(null);
    try {
      const b = await le.subscribe(y, a, j);
      return k(b), r && b.paymentUrl && (window.location.href = b.paymentUrl), i?.(b), b;
    } catch (b) {
      const H = b instanceof Error ? b.message : "Unknown error occurred";
      return l(H), p?.(H), null;
    } finally {
      f(!1), h(!1);
    }
  }, [r, i, p]), R = Q(async (y) => {
    g(!0), h(!0), l(null), T(null);
    try {
      const a = y ?? o, j = await le.cancelSubscription(a);
      return T(j), s?.(j), j;
    } catch (a) {
      const j = a instanceof Error ? a.message : "Unknown error occurred";
      return l(j), p?.(j), null;
    } finally {
      g(!1), h(!1);
    }
  }, [o, s, p]), _ = Q(async (y) => {
    x(!0), l(null);
    try {
      const a = y ?? o, j = await le.getSubscriptionInfo(a);
      return z(j), W(j.isActive), j;
    } catch (a) {
      const j = a instanceof Error ? a.message : "Unknown error occurred";
      return l(j), p?.(j), null;
    } finally {
      x(!1);
    }
  }, [o, p]), B = Q(() => {
    h(!1), f(!1), g(!1), x(!1), l(null), k(null), T(null), z(null), W(!1);
  }, []);
  return {
    isLoading: c,
    isSubscribing: m,
    isCancelling: w,
    isFetchingStatus: v,
    error: u,
    subscriptionData: $,
    cancelData: I,
    statusData: F,
    isActive: C,
    subscribe: P,
    cancelSubscription: R,
    getSubscriptionStatus: _,
    resetState: B
  };
}, ui = [
  { id: 1, days: 30, label: "1 месяц", price: 4999 },
  { id: 2, days: 90, label: "3 месяца", price: 14999 },
  { id: 3, days: 180, label: "6 месяцев", price: 29999 },
  { id: 4, days: 365, label: "1 год", price: 59999, popular: !0 }
], xi = [
  { id: 1, ones: 1, label: "Разовый доступ", price: 999, description: "1 разовое использование" },
  { id: 2, ones: 5, label: "Пакет 5 раз", price: 4499, description: "5 разовых использований", popular: !0 },
  { id: 3, ones: 10, label: "Пакет 10 раз", price: 8499, description: "10 разовых использований" },
  { id: 4, ones: 20, label: "Пакет 20 раз", price: 15999, description: "20 разовых использований" }
], Fs = ({
  tariffType: e = "WaypayCrm",
  subscriptionType: o = "days",
  plans: r,
  onPaymentSuccess: i,
  onError: s,
  autoRedirect: p = !0,
  buttonText: c = "Оформить",
  loadingText: h = "Обработка...",
  showSelectedIndicator: m = !0,
  className: f,
  title: w = "Подписка",
  subTitle: g = "WayPay CRM"
}) => {
  const [v, x] = E(null), u = r || (o === "days" ? ui : xi), { isLoading: l, error: $, subscribe: k, resetState: I } = pi({
    tariffType: e,
    autoRedirect: p,
    onSuccess: (C) => {
      p && C.paymentUrl && (window.location.href = C.paymentUrl), i?.();
    },
    onError: (C) => {
      s?.(C);
    }
  });
  ee.useEffect(() => {
    if (!v && u.length > 0) {
      const C = u.find((W) => W.popular) || u[0];
      x(C);
    }
  }, [u, v]);
  const T = async () => {
    if (!v) {
      s?.("Выберите тарифный план");
      return;
    }
    const C = o === "days" ? v.days : void 0, W = o === "ones" ? v.ones : void 0;
    await k(e, C, W);
  }, F = (C) => new Intl.NumberFormat("ru-RU").format(C), z = (C) => o === "days" ? C.days : C.ones;
  return /* @__PURE__ */ t.jsxs(hi, { className: f, children: [
    /* @__PURE__ */ t.jsxs(gi, { children: [
      /* @__PURE__ */ t.jsx(fi, { children: w }),
      /* @__PURE__ */ t.jsx(bi, { children: g })
    ] }),
    ($ || typeof $ == "string" && $) && /* @__PURE__ */ t.jsxs(Mi, { children: [
      /* @__PURE__ */ t.jsx("span", { children: $ }),
      /* @__PURE__ */ t.jsx(Di, { onClick: I, children: "×" })
    ] }),
    /* @__PURE__ */ t.jsx(mi, { children: u.map((C) => {
      const W = z(C), P = v?.id === C.id;
      return /* @__PURE__ */ t.jsxs(
        wi,
        {
          $isSelected: P,
          $isPopular: !!C.popular,
          onClick: () => x(C),
          children: [
            /* @__PURE__ */ t.jsxs(vi, { children: [
              /* @__PURE__ */ t.jsxs(yi, { children: [
                C.label,
                C.popular && /* @__PURE__ */ t.jsx(ki, { children: "Популярный" })
              ] }),
              C.description && /* @__PURE__ */ t.jsx(ji, { children: C.description }),
              W !== void 0 && o === "days" && /* @__PURE__ */ t.jsxs(Ae, { children: [
                W,
                " дней"
              ] }),
              W !== void 0 && o === "ones" && /* @__PURE__ */ t.jsxs(Ae, { children: [
                W,
                " шт."
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs(Ci, { children: [
              F(C.price),
              " ₽"
            ] }),
            m && P && /* @__PURE__ */ t.jsx($i, {})
          ]
        },
        C.id
      );
    }) }),
    /* @__PURE__ */ t.jsx(Si, { onClick: T, disabled: l, children: l ? h : c })
  ] });
}, hi = n.div`
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
`, gi = n.div`
  margin-bottom: 28px;
  text-align: center;
`, fi = n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`, bi = n.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0;
`, mi = n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`, wi = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(e) => e.$isSelected ? "#f8f9fa" : "white"};
  border: 2px solid ${(e) => e.$isSelected ? "#007D88" : e.$isPopular ? "#FFD700" : "#e8e8e8"};
  position: relative;

  &:hover {
    border-color: #007D88;
    background: #f8f9fa;
    transform: translateX(2px);
  }
`, vi = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`, yi = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`, ki = n.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`, ji = n.div`
  font-size: 12px;
  color: #8c8c8c;
`, Ae = n.div`
  font-size: 11px;
  color: #007D88;
  font-weight: 500;
`, Ci = n.span`
  font-size: 16px;
  font-weight: 600;
  color: #007D88;
`, $i = n.div`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #007D88 transparent transparent;
  border-radius: 0 12px 0 0;
`, Si = n.button`
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
`, Mi = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`, Di = n.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`, Li = (e) => ({
  call_phone: e.call_phone ?? e.callPhone,
  check_id: e.check_id ?? e.checkId,
  name_required: e.name_required ?? e.nameRequired
}), Ei = async (e, o, r = "CallCheck") => {
  const s = await ne("/auth/call/initiate", {
    method: "POST",
    body: {
      phone: e,
      user_type: o,
      userType: o,
      auth_way: r,
      authWay: r
    }
  });
  return Li(s);
}, Re = (e, o, r, i, s = "CallCheck") => ne("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: o,
    checkId: o,
    user_type: r,
    userType: r,
    name: i,
    auth_way: s,
    authWay: s
  }
}), Bs = () => ne("/auth/session/info", { method: "GET" }), Ti = ({
  isOpen: e,
  onClose: o,
  onSubmit: r,
  error: i,
  isLoading: s = !1
}) => {
  const [p, c] = E("");
  if (!e) return null;
  const h = (m) => {
    m.preventDefault(), r(p);
  };
  return /* @__PURE__ */ t.jsx(Ii, { onClick: o, children: /* @__PURE__ */ t.jsx(Pi, { onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ t.jsxs(zi, { onSubmit: h, children: [
    /* @__PURE__ */ t.jsx(Ai, { children: "Как вас зовут?" }),
    /* @__PURE__ */ t.jsxs(Ri, { children: [
      /* @__PURE__ */ t.jsx(
        We,
        {
          type: "text",
          value: p,
          onChange: (m) => c(m.target.value),
          placeholder: "Иванов Иван Иванович",
          disabled: s,
          autoFocus: !0,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ t.jsx(
        Fi,
        {
          type: "submit",
          disabled: s || !p.trim(),
          children: s ? "..." : "→"
        }
      )
    ] }),
    i && /* @__PURE__ */ t.jsx(Bi, { children: i })
  ] }) }) });
}, Ii = n.div`
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
`, Pi = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`, zi = n.form`
  display: flex;
  flex-direction: column;
`, Ai = n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`, Ri = n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`, Fi = n(ue)`
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
`, Bi = n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`, _s = ({
  onLoginSuccess: e,
  userType: o = "delivery_operator",
  title: r = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: s = "8 (xxx) xxx-xx-xx",
  supportPhone: p = "8 989 924 24 24",
  supportLinkUrl: c = "https://waypay.one",
  supportLinkText: h = "waypay.one",
  className: m,
  style: f,
  pollingIntervalMs: w = 3e3,
  enableRegistration: g = !1,
  enableSupport: v = !0
}) => {
  const [x, u] = E(!1), [l, $] = E(""), [k, I] = E("CallCheck"), [T, F] = E(!1), [z, C] = E(!1), [W, P] = E(""), [R, _] = E(""), [B, y] = E(!1), [a, j] = E(!1), [b, H] = E(""), [J, Z] = E(""), [M, D] = E(null), d = X(void 0);
  G(() => () => {
    d.current && clearInterval(d.current);
  }, []);
  const L = (q) => {
    const Y = q.replace(/\D/g, "");
    return Y ? Y.startsWith("8") ? `+7${Y.slice(1)}` : Y.startsWith("7") ? `+${Y}` : `+${Y}` : "";
  }, A = () => {
    F(!1), C(!1), j(!1), H(""), Z(""), D(null), d.current && window.clearInterval(d.current);
  }, S = async (q) => {
    if (q.preventDefault(), !l) {
      _("Введите номер телефона");
      return;
    }
    u(!0), _("");
    const Y = L(l);
    try {
      const U = await Ei(Y, o, k);
      D({
        phone: Y,
        checkId: U.check_id,
        callPhone: U.call_phone
      }), g && "name_required" in U && U.name_required ? (j(!0), P(U.call_phone)) : !g && "name_required" in U && U.name_required ? (_(
        "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
      ), D(null)) : k === "WhatsAppCode" ? C(!0) : (P(U.call_phone), F(!0), N(Y, U.check_id));
    } catch (U) {
      console.error("Auth error:", U), U && U.response && U.response.data ? _(U.response.data) : U instanceof Error ? _(U.message) : _("Произошла ошибка при авторизации");
    } finally {
      u(!1);
    }
  }, O = async (q) => {
    if (!q.trim()) {
      Z("Введите ФИО");
      return;
    }
    if (M) {
      u(!0), Z("");
      try {
        H(q), j(!1), k === "WhatsAppCode" ? C(!0) : (F(!0), N(M.phone, M.checkId, q));
      } catch (Y) {
        console.error("Registration error:", Y), Z("Не удалось завершить регистрацию");
      } finally {
        u(!1);
      }
    }
  }, N = (q, Y, U) => {
    d.current && window.clearInterval(d.current), d.current = window.setInterval(() => {
      V(q, Y, U);
    }, w);
  }, V = async (q, Y, U) => {
    if (!B) {
      y(!0);
      try {
        const te = await Re(
          q,
          Y,
          o,
          U || b,
          "CallCheck"
        );
        (te.access_token && te.refresh_token || te.accessToken && te.refreshToken) && (d.current && window.clearInterval(d.current), F(!1), j(!1), H(""), D(null), e(te.access_token ?? te.accessToken));
      } catch (te) {
        console.error("Verification error:", te);
      } finally {
        y(!1);
      }
    }
  }, K = async (q) => {
    if (!(B || !M)) {
      y(!0), _("");
      try {
        const Y = await Re(
          M.phone,
          q,
          o,
          b || void 0,
          "WhatsAppCode"
        );
        Y.access_token && Y.refresh_token || Y.accessToken && Y.refreshToken ? (C(!1), H(""), D(null), e(Y.access_token ?? Y.accessToken)) : _("Неверный код. Попробуйте ещё раз.");
      } catch (Y) {
        console.error("WhatsApp verification error:", Y);
        const U = Y instanceof Error ? Y.message : void 0;
        _(
          U || "Неверный код. Попробуйте ещё раз."
        );
      } finally {
        y(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(_i, { className: m, style: f, children: [
    /* @__PURE__ */ t.jsxs(Oi, { children: [
      /* @__PURE__ */ t.jsxs(Wi, { onSubmit: S, children: [
        /* @__PURE__ */ t.jsx(Ni, { children: r }),
        /* @__PURE__ */ t.jsx(Hi, { children: /* @__PURE__ */ t.jsx(Vi, { children: /* @__PURE__ */ t.jsx(
          li,
          {
            value: l,
            onChange: (q) => $(q),
            placeholder: s
          }
        ) }) }),
        /* @__PURE__ */ t.jsxs(Yi, { role: "tablist", "aria-label": "Способ авторизации", children: [
          /* @__PURE__ */ t.jsx(
            Fe,
            {
              type: "button",
              role: "tab",
              "aria-selected": k === "CallCheck",
              $active: k === "CallCheck",
              onClick: () => I("CallCheck"),
              children: "Звонок"
            }
          ),
          /* @__PURE__ */ t.jsx(
            Fe,
            {
              type: "button",
              role: "tab",
              "aria-selected": k === "WhatsAppCode",
              $active: k === "WhatsAppCode",
              onClick: () => I("WhatsAppCode"),
              children: "WhatsApp"
            }
          )
        ] }),
        R && /* @__PURE__ */ t.jsx(Gi, { children: /* @__PURE__ */ t.jsx("span", { children: R }) }),
        /* @__PURE__ */ t.jsx(Ui, { type: "submit", disabled: x, children: x ? "Загрузка..." : i })
      ] }),
      v && /* @__PURE__ */ t.jsxs(Zi, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(qi, { href: `tel:${p}`, children: p }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(Xi, { href: c, target: "_blank", rel: "noreferrer", children: h })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      Ti,
      {
        isOpen: a,
        onClose: A,
        onSubmit: O,
        error: J,
        isLoading: x
      }
    ),
    /* @__PURE__ */ t.jsx(
      jr,
      {
        isOpen: T,
        onClose: A,
        callPhone: W,
        error: R
      }
    ),
    /* @__PURE__ */ t.jsx(
      Er,
      {
        isOpen: z,
        onClose: A,
        onSubmit: K,
        phone: M?.phone ?? L(l),
        isVerifying: B,
        error: R
      }
    )
  ] });
}, _i = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`, Oi = n.div`
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
`, Wi = n.form`
  display: flex;
  flex-direction: column;
`, Ni = n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, Hi = n.div`
  margin-bottom: 25px;
`, Yi = n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #f1f4f5;
`, Fe = n.button`
  border: 0;
  border-radius: 8px;
  padding: 11px 14px;
  color: ${({ $active: e }) => e ? "#ffffff" : "#667085"};
  background: ${({ $active: e }) => e ? "linear-gradient(90deg, rgba(0, 125, 136, 1), rgba(37, 203, 161, 1))" : "transparent"};
  box-shadow: ${({ $active: e }) => e ? "0 2px 8px rgba(0, 125, 136, 0.18)" : "none"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
`, Vi = n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ui = n.button`
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
`, Zi = n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, qi = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Xi = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Gi = n.div`
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
`, Ji = (e) => {
  let o = 0;
  for (let i = 0; i < e.length; i++)
    o = e.charCodeAt(i) + ((o << 5) - o);
  return `hsl(${Math.abs(o % 360)}, 60%, 60%)`;
}, Os = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Ws = (e, o = 100) => {
  const r = document.createElement("canvas");
  r.width = o, r.height = o;
  const i = r.getContext("2d");
  if (!i) return "";
  const s = Ji(e);
  i.fillStyle = s, i.beginPath(), i.arc(o / 2, o / 2, o / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const p = o / 2;
  i.font = `bold ${p}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const c = p * 0.1;
  return i.fillText(e, o / 2, o / 2 + c), r.toDataURL("image/png");
}, Ns = (e) => {
  if (!e) return "";
  const o = typeof e == "string" ? new Date(e) : e;
  if (isNaN(o.getTime())) return "";
  const r = o.getDate().toString().padStart(2, "0"), i = (o.getMonth() + 1).toString().padStart(2, "0"), s = o.getFullYear();
  return `${r}-${i}-${s}`;
};
function Hs(e) {
  return new Date(e);
}
const Ki = (e) => {
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
    const r = /* @__PURE__ */ new Date();
    if (o > r) {
      const w = Math.floor((o.getTime() - r.getTime()) / 1e3), g = Math.floor(w / 60), v = Math.floor(g / 60), x = Math.floor(v / 24);
      return w < 10 ? "скоро" : w < 60 ? `через ${w} секунд` : g === 1 ? "через минуту" : g < 60 ? `через ${g} минут` : v === 1 ? "через час" : v < 24 ? `через ${v} часов` : x === 1 ? "завтра" : x < 7 ? `через ${x} дней` : "в будущем";
    }
    const i = Math.floor((r.getTime() - o.getTime()) / 1e3), s = Math.floor(i / 60), p = Math.floor(s / 60), c = Math.floor(p / 24), h = Math.floor(c / 7), m = Math.floor(c / 30), f = Math.floor(c / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const w = Math.max(1, i);
      return w === 1 ? "секунду назад" : w < 5 ? `${w} секунды назад` : `${w} секунд назад`;
    }
    return s < 60 ? s === 1 ? "минуту назад" : s < 5 ? `${s} минуты назад` : `${s} минут назад` : p < 24 ? p === 1 ? "час назад" : p < 5 ? `${p} часа назад` : `${p} часов назад` : c < 7 ? c === 1 ? "вчера" : c === 2 ? "позавчера" : `${c} дня назад` : h < 4 ? h === 1 ? "неделю назад" : h < 5 ? `${h} недели назад` : `${h} недель назад` : m < 12 ? m === 1 ? "месяц назад" : m < 5 ? `${m} месяца назад` : `${m} месяцев назад` : f === 1 ? "год назад" : f < 5 ? `${f} года назад` : `${f} лет назад`;
  } catch (r) {
    return console.error("Ошибка форматирования относительного времени:", r), "ошибка даты";
  }
}, Qi = (e) => {
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
}, Ys = (e, o = {}) => {
  const { useExactAfterMonths: r = 6, includeTime: i = !0 } = o, s = new Date(e);
  return isNaN(s.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= r ? i ? Qi(s) : s.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : Ki(s);
};
export {
  pe as API_BASE_URL,
  rs as AddButton,
  jr as AuthCallModal,
  _s as AuthPage,
  Er as AuthWhatsAppModal,
  is as BASE_URL,
  cs as BackButton,
  wn as BaseModal,
  hs as Checkbox,
  Is as ColumnChart,
  Be as ContextMenu,
  Cs as CountInfoTitle,
  we as CustomCalendar,
  We as CustomInput,
  li as CustomPhoneInput,
  xs as CustomSelect,
  os as CustomTable,
  ws as CustomTextArea,
  Ve as CustomTitle,
  ue as DefaultButton,
  ds as DeleteButton,
  ps as EditButton,
  js as EntitySelectContainer,
  us as ExportButton,
  ss as FILE_BASE_URL,
  bs as InputContainer,
  fs as InputLabel,
  gs as InputRow,
  $s as InputTitle,
  Ss as ModalInfoTitle,
  ms as Pagination,
  vs as PeriodField,
  ys as PhoneModalInput,
  zs as PhotoViewerModal,
  Ls as ProgressBar,
  Ds as RadioButton,
  Ps as ScatterPlot,
  As as SideMenu,
  _r as SideMenuContext,
  Fs as SubscriptionBlock,
  Rs as SubscriptionPendingPage,
  ks as Tabs,
  Ye as TitleField,
  Ms as ToggleSwitch,
  Es as YandexMapSelector,
  ne as apiRequest,
  ls as authStorage,
  Re as confirmCallAuth,
  as as downloadFile,
  Ns as formatDate,
  Qi as formatExactDate,
  De as formatMoney,
  Ki as formatRelativeTime,
  Ys as formatRelativeTimeExtended,
  Ws as generateAvatar,
  Os as getInitials,
  Bs as getSessionInfo,
  Ei as initiateCallAuth,
  Hs as parseDateInput,
  Ts as parseMoney,
  _e as refreshAccessToken,
  Ji as stringToColor,
  pi as useSubscription
};
