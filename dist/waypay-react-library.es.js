import G, { useRef as Z, useState as I, useEffect as q, createContext as We, useContext as Ne, useMemo as He, useCallback as X } from "react";
import n, { keyframes as Ye } from "styled-components";
import { motion as Q, AnimatePresence as pe } from "framer-motion";
var ie = { exports: {} }, ne = {};
var ue;
function Ve() {
  if (ue) return ne;
  ue = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(i, s, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      c = {};
      for (var g in s)
        g !== "key" && (c[g] = s[g]);
    } else c = s;
    return s = c.ref, {
      $$typeof: e,
      type: i,
      key: d,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return ne.Fragment = o, ne.jsx = r, ne.jsxs = r, ne;
}
var oe = {};
var xe;
function Ue() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === O ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case S:
          return "Fragment";
        case T:
          return "Profiler";
        case j:
          return "StrictMode";
        case C:
          return "Suspense";
        case N:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case l:
            return "Portal";
          case _:
            return p.displayName || "Context";
          case E:
            return (p._context.displayName || "Context") + ".Consumer";
          case z:
            var D = p.render;
            return p = p.displayName, p || (p = D.displayName || D.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case R:
            return D = p.displayName || null, D !== null ? D : e(p.type) || "Memo";
          case A:
            D = p._payload, p = p._init;
            try {
              return e(p(D));
            } catch {
            }
        }
      return null;
    }
    function o(p) {
      return "" + p;
    }
    function r(p) {
      try {
        o(p);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var B = D.error, k = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return B.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), o(p);
      }
    }
    function i(p) {
      if (p === S) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === A)
        return "<...>";
      try {
        var D = e(p);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var p = y.A;
      return p === null ? null : p.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function d(p) {
      if (a.call(p, "key")) {
        var D = Object.getOwnPropertyDescriptor(p, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function g(p, D) {
      function B() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      B.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: B,
        configurable: !0
      });
    }
    function v() {
      var p = e(this.type);
      return V[p] || (V[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function b(p, D, B, k, F, P) {
      var H = B.ref;
      return p = {
        $$typeof: u,
        type: p,
        key: D,
        props: B,
        _owner: k
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function m(p, D, B, k, F, P) {
      var H = D.children;
      if (H !== void 0)
        if (k)
          if ($(H)) {
            for (k = 0; k < H.length; k++)
              h(H[k]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(H);
      if (a.call(D, "key")) {
        H = e(p);
        var J = Object.keys(D).filter(function(te) {
          return te !== "key";
        });
        k = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", L[H + k] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          H,
          J,
          H
        ), L[H + k] = !0);
      }
      if (H = null, B !== void 0 && (r(B), H = "" + B), d(D) && (r(D.key), H = "" + D.key), "key" in D) {
        B = {};
        for (var ee in D)
          ee !== "key" && (B[ee] = D[ee]);
      } else B = D;
      return H && g(
        B,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), b(
        p,
        H,
        B,
        s(),
        F,
        P
      );
    }
    function h(p) {
      w(p) ? p._store && (p._store.validated = 1) : typeof p == "object" && p !== null && p.$$typeof === A && (p._payload.status === "fulfilled" ? w(p._payload.value) && p._payload.value._store && (p._payload.value._store.validated = 1) : p._store && (p._store.validated = 1));
    }
    function w(p) {
      return typeof p == "object" && p !== null && p.$$typeof === u;
    }
    var x = G, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), N = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), O = /* @__PURE__ */ Symbol.for("react.client.reference"), y = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, a = Object.prototype.hasOwnProperty, $ = Array.isArray, f = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var Y, V = {}, U = x.react_stack_bottom_frame.bind(
      x,
      c
    )(), M = f(i(c)), L = {};
    oe.Fragment = S, oe.jsx = function(p, D, B) {
      var k = 1e4 > y.recentlyCreatedOwnerStacks++;
      return m(
        p,
        D,
        B,
        !1,
        k ? Error("react-stack-top-frame") : U,
        k ? f(i(p)) : M
      );
    }, oe.jsxs = function(p, D, B) {
      var k = 1e4 > y.recentlyCreatedOwnerStacks++;
      return m(
        p,
        D,
        B,
        !0,
        k ? Error("react-stack-top-frame") : U,
        k ? f(i(p)) : M
      );
    };
  })()), oe;
}
var he;
function Ze() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ie.exports = Ve() : ie.exports = Ue()), ie.exports;
}
var t = Ze();
const Pe = ({ x: e, y: o, items: r, onClose: i, ...s }) => {
  const c = Z(null), [d, g] = I(null);
  q(() => {
    const x = (u) => {
      c.current && !c.current.contains(u.target) && i();
    };
    return document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [i]);
  const b = (() => {
    if (!c.current) return { x: e, y: o };
    const x = c.current.offsetWidth, u = c.current.offsetHeight, l = window.innerWidth, S = window.innerHeight;
    let j = e, T = o;
    return j + x > l && (j = e - x), T + u > S && (T = o - u), { x: j, y: T };
  })(), m = (x, u) => {
    x.submenu ? g(d === u ? null : u) : x.action && (x.action(), i());
  }, h = (x) => {
    r[x].submenu && g(x);
  }, w = (x) => {
    const u = x.relatedTarget;
    c.current?.contains(u) || g(null);
  };
  return /* @__PURE__ */ t.jsx(
    qe,
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
      onClick: (x) => x.stopPropagation(),
      onMouseLeave: w,
      ...s,
      children: r.map((x, u) => /* @__PURE__ */ t.jsxs(Xe, { $hasSubmenu: !!x.submenu, $disabled: x.disabled, children: [
        /* @__PURE__ */ t.jsx(
          Ge,
          {
            onClick: (l) => {
              l.stopPropagation(), x.disabled || m(x, u);
            },
            onMouseEnter: () => !x.disabled && h(u),
            whileHover: x.disabled ? {} : { backgroundColor: "#f3f4f6" },
            initial: { backgroundColor: "#ffffff" },
            $color: x.color,
            $disabled: x.disabled,
            children: /* @__PURE__ */ t.jsxs(Je, { children: [
              x.label,
              x.submenu && /* @__PURE__ */ t.jsx(Ke, { children: /* @__PURE__ */ t.jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1.5L6 6L1.5 10.5", stroke: "currentColor", strokeWidth: "2" }) }) })
            ] })
          }
        ),
        x.submenu && d === u && /* @__PURE__ */ t.jsx(
          Qe,
          {
            initial: { opacity: 0, x: 10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 10 },
            transition: { duration: 0.15 },
            children: /* @__PURE__ */ t.jsx(Pe, { x: 0, y: -u * 40, items: x.submenu, onClose: () => g(null) })
          }
        )
      ] }, u))
    }
  );
}, qe = n(Q.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`, Xe = n.div`
  position: relative;
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};
`, Ge = n(Q.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "pointer"};
  color: ${({ $color: e, $disabled: o }) => o ? "#999" : e || "#333"};
  white-space: nowrap;
  position: relative;
`, Je = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`, Ke = n.span`
  color: #666;
  margin-left: 8px;
`, Qe = n(Q.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`, Hi = ({
  columns: e,
  data: o,
  onRowDoubleClick: r,
  contextMenuActions: i = [],
  onSort: s,
  sortConfig: c,
  onRowClick: d,
  selectedRow: g,
  fixedHeight: v,
  hasTotalsRow: b,
  debtChecker: m,
  rowStyles: h = {},
  isLoading: w
}) => {
  const [x, u] = I(null), [l, S] = I(null), j = Z(null), T = Z(null), E = 500, _ = g !== void 0 ? g : x, z = (M) => {
    !e[M].isSortable || !s || s(M);
  }, N = m || ((M) => {
    const L = M[8];
    return typeof L == "string" ? parseFloat(L.replace(/[^\d.]/g, "")) > 0 : !1;
  }), R = (M) => {
    g === void 0 && u(M === _ ? null : M), d && d(o[M], M);
  }, A = (M, L) => {
    r && r(M, L);
  }, W = (M, L) => {
    if (i.length === 0) return;
    M.preventDefault();
    const p = "touches" in M ? M.touches[0].clientX : M.clientX, D = "touches" in M ? M.touches[0].clientY : M.clientY;
    S({
      x: p,
      y: D,
      rowIndex: L
    });
  }, O = (M, L) => {
    M.preventDefault(), W(M, L);
  }, y = (M, L) => {
    i.length !== 0 && (T.current && clearTimeout(T.current), T.current = window.setTimeout(() => {
      W(M, L);
    }, E));
  }, a = () => {
    T.current && (clearTimeout(T.current), T.current = null);
  }, $ = () => {
    T.current && window.clearTimeout(T.current);
  }, f = () => {
    S(null);
  };
  q(() => {
    const M = () => {
      l && f();
    };
    return document.addEventListener("click", M), () => {
      document.removeEventListener("click", M), T.current && clearTimeout(T.current);
    };
  }, [l]);
  const Y = (M, L, p) => {
    if (L)
      return { backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "bold" };
    const D = h[M] || {};
    return M === _ ? {
      backgroundColor: D.backgroundColor || "#007D88",
      color: D.color || "#FFFFFF",
      fontWeight: D.fontWeight || "normal"
    } : p ? {
      backgroundColor: D.backgroundColor || "#E8D8D8",
      color: D.color || "inherit",
      fontWeight: D.fontWeight || "normal"
    } : o[M][o[M].length - 1] === !1 ? {
      backgroundColor: D.backgroundColor || "#E8F5E8",
      color: "#1B5E20",
      fontWeight: D.fontWeight || "normal"
    } : {
      backgroundColor: D.backgroundColor || "#FFFFFF",
      color: D.color || "inherit",
      fontWeight: D.fontWeight || "normal"
    };
  }, V = (M, L, p) => {
    if (L) return "#FFFFFF";
    const D = Y(M, L, p);
    return D.hoverBackgroundColor ? D.hoverBackgroundColor : M === _ ? "#007D88" : p ? "#E8D8D8CC" : o[M][o[M].length - 1] === !1 ? "#51D5B4CC" : "#F3F4F6";
  }, U = () => {
    if (!l || i.length === 0) return null;
    const M = (typeof i == "function" ? i(o[l.rowIndex]) : i).filter(
      (L) => typeof L == "object" && (typeof L.shouldShow != "function" || L.shouldShow(o[l.rowIndex]))
    );
    return M.length === 0 ? null : /* @__PURE__ */ t.jsx(
      rt,
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
        onClick: (L) => L.stopPropagation(),
        children: /* @__PURE__ */ t.jsx(
          Pe,
          {
            items: M.map((L) => {
              const p = {
                label: L.label,
                color: L.color,
                disabled: L.disabled
              };
              return L.getSubmenu ? p.submenu = L.getSubmenu(o[l.rowIndex]) : L.action && (p.action = () => {
                L.action(o[l.rowIndex], l.rowIndex), f();
              }), p;
            }),
            onClose: f,
            x: 0,
            y: 0
          }
        )
      }
    );
  };
  return /* @__PURE__ */ t.jsx(nt, { ref: j, children: w ? /* @__PURE__ */ t.jsx(et, { children: /* @__PURE__ */ t.jsx(tt, {}) }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(ot, { children: [
      /* @__PURE__ */ t.jsx(it, { children: /* @__PURE__ */ t.jsx(ge, { children: e.map(
        (M, L) => !M.isHidden && /* @__PURE__ */ t.jsx(
          at,
          {
            $isSortable: M.isSortable,
            $isActive: c?.key === L,
            onClick: () => z(L),
            $align: M.align || "center",
            $isFirst: L === 0,
            $isLast: L === e.length - 1,
            children: /* @__PURE__ */ t.jsxs(lt, { $align: M.align || "center", children: [
              M.name,
              M.isSortable && /* @__PURE__ */ t.jsx(
                ct,
                {
                  $direction: c?.key === L ? c.direction : "asc",
                  animate: {
                    rotate: c?.key === L && c.direction === "desc" ? 180 : 0,
                    color: c?.key === L ? "#007D88" : "#6B7280"
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
          L
        )
      ) }) }),
      /* @__PURE__ */ t.jsx(st, { $fixedHeight: v, children: /* @__PURE__ */ t.jsx(pe, { children: o.map((M, L) => {
        const p = !!(b && L === o.length - 1), D = !!(!p && N(M)), B = Y(L, p, D), k = V(L, p, D);
        return /* @__PURE__ */ t.jsx(
          ge,
          {
            initial: { opacity: 0, y: -10 },
            animate: {
              opacity: 1,
              y: 0,
              backgroundColor: B.backgroundColor || "#FFFFFF",
              color: B.color || "inherit",
              fontWeight: B.fontWeight || "normal"
            },
            exit: { opacity: 0, y: 10 },
            transition: { duration: 0.2, ease: "easeOut" },
            $isLast: L === o.length - 1,
            $isSelected: L === _,
            $isTotalsRow: p,
            onClick: () => !p && R(L),
            onDoubleClick: () => !p && A(M, L),
            onContextMenu: (F) => !p && O(F, L),
            onTouchStart: (F) => !p && y(F, L),
            onTouchEnd: a,
            onTouchMove: $,
            whileHover: p ? {} : {
              backgroundColor: k,
              transition: { duration: 0.15 }
            },
            style: {
              backgroundColor: B.backgroundColor || "#FFFFFF",
              color: B.color || "inherit",
              fontWeight: B.fontWeight || "normal"
            },
            children: M.map(
              (F, P) => !e[P]?.isHidden && /* @__PURE__ */ t.jsx(
                dt,
                {
                  $align: e[P]?.align || "center",
                  $isFirst: P === 0,
                  $isLast: P === M.length - 1,
                  $isTotalsCell: p,
                  $isBeforeTotals: p && P < M.findIndex((H) => H === "Итого:"),
                  children: F
                },
                P
              )
            )
          },
          `row-${L}`
        );
      }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(pe, { children: U() })
  ] }) });
}, et = n.div`
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
`, tt = n.div`
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
`, nt = n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`, ot = n.table`
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
`, rt = n(Q.div)`
  z-index: 1000;
  pointer-events: auto;
`, it = n.thead`
  text-align: center;
  position: relative;
`, st = n.tbody`
  ${({ $fixedHeight: e }) => e && `
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`, ge = n(Q.tr)`
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
`, at = n.th`
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
`, lt = n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : e === "center" ? "center" : "flex-start"};
  width: 100%;
`, ct = n(Q.span)`
  display: inline-flex;
  align-items: center;
`, dt = n.td`
  padding: 16px;
  padding-left: ${({ $isFirst: e }) => e ? "50px" : "16px"};
  padding-right: ${({ $isLast: e }) => e ? "50px" : "16px"};
  text-align: ${({ $align: e }) => e};
  vertical-align: middle;
  border-right: ${({ $isBeforeTotals: e, $isTotalsCell: o }) => e || o ? "none" : "0.5px solid #d1d5db"};
`, Yi = ({ onClick: e, tooltip: o, size: r = 32, margin: i }) => /* @__PURE__ */ t.jsx(pt, { onClick: e, size: r, margin: i, title: o, children: /* @__PURE__ */ t.jsx(ut, { size: r }) }), pt = n.button`
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
`, ut = n.div`
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
`, ce = "/api", Vi = "https://web.waypay.one:5001", Ui = "https://file.waypay.one/";
async function K(e, o = {}) {
  const {
    method: r = "GET",
    body: i,
    headers: s = {},
    token: c,
    withCredentials: d = !0,
    isFormData: g = !1
  } = o, v = async (m) => {
    const h = {
      ...s
    };
    g || (h["Content-Type"] = "application/json"), m && (h.Authorization = `Bearer ${m}`);
    const w = e.startsWith("http") ? e : `${ce}${e}`;
    let x;
    return i && (g ? x = i : x = JSON.stringify(i)), await fetch(w, {
      method: r,
      headers: h,
      body: x,
      credentials: d ? "include" : "same-origin"
    });
  }, b = async (m, h = !0) => {
    const w = await v(m);
    if (w.ok) {
      if (w.status === 204)
        return null;
      const u = await w.text();
      if (!u) return null;
      try {
        return JSON.parse(u);
      } catch {
        return u;
      }
    }
    if (w.status === 401 && h) {
      const u = await ze();
      if (u)
        return b(u, !1);
    }
    let x = `Request failed with status ${w.status}`;
    try {
      const u = await w.text();
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
  return b(c);
}
async function Zi(e, o = {}) {
  const {
    method: r = "GET",
    headers: i = {},
    token: s,
    withCredentials: c = !0
  } = o, d = async (v) => {
    const b = {
      ...i
    };
    v && (b.Authorization = `Bearer ${v}`);
    const m = e.startsWith("http") ? e : `${ce}${e}`;
    return await fetch(m, {
      method: r,
      headers: b,
      credentials: c ? "include" : "same-origin"
    });
  }, g = async (v, b = !0) => {
    const m = await d(v);
    if (m.ok)
      return await m.blob();
    if (m.status === 401 && b) {
      const w = await ze();
      if (w)
        return g(w, !1);
    }
    let h = `Request failed with status ${m.status}`;
    try {
      const w = await m.text();
      if (w)
        try {
          const x = JSON.parse(w);
          x && typeof x.error == "string" ? h = x.error : typeof x == "string" ? h = x : typeof x?.message == "string" && (h = x.message);
        } catch {
          h = w;
        }
    } catch {
    }
    throw new Error(h);
  };
  return g(s);
}
async function ze() {
  const e = await fetch(`${ce}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  if (!e.ok)
    return null;
  const o = await e.json();
  return o.access_token ? o.access_token : null;
}
const qi = {
  async isAuthenticated() {
    try {
      return !!(await this.getSessionInfo())?.client?.id;
    } catch {
      return !1;
    }
  },
  async getSessionInfo() {
    try {
      return await K("/auth/session/info", {
        method: "GET"
      });
    } catch {
      return null;
    }
  },
  async logout(e) {
    try {
      await K("/auth/session/revoke", {
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
}, xt = n.button`
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
`, Xi = ({ children: e, onClick: o, disabled: r, ...i }) => /* @__PURE__ */ t.jsxs(xt, { onClick: o, disabled: r, ...i, children: [
  /* @__PURE__ */ t.jsx("svg", { width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",
      fill: "currentColor"
    }
  ) }),
  e
] }), de = ({
  children: e = "Подтвердить",
  icon: o,
  disabled: r = !1,
  bg: i,
  hoverBg: s,
  disabledBg: c,
  textColor: d,
  fullWidth: g = !1,
  minWidth: v,
  width: b,
  isPrimary: m = !0,
  ...h
}) => {
  const x = i ? {
    bg: i,
    hoverBg: s || i,
    disabledBg: c || i,
    textColor: d || (m ? "white" : "black")
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
    ht,
    {
      disabled: r,
      $bg: x.bg,
      $hoverBg: x.hoverBg,
      $disabledBg: x.disabledBg,
      $textColor: x.textColor,
      $fullWidth: g,
      $minWidth: v,
      $width: b,
      ...h,
      children: [
        o && /* @__PURE__ */ t.jsx(gt, { children: o }),
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
`, gt = n.span`
  display: inline-flex;
  align-items: center;
`, Gi = ({ onClick: e, tooltip: o, size: r = 32 }) => /* @__PURE__ */ t.jsx(ft, { onClick: e, size: r, title: o, children: /* @__PURE__ */ t.jsx(
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
`, Ji = ({ onClick: e, tooltip: o, size: r = 32 }) => /* @__PURE__ */ t.jsx(bt, { onClick: e, size: r, title: o, children: /* @__PURE__ */ t.jsx(
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
) }), bt = n.button`
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
`, mt = () => /* @__PURE__ */ t.jsxs("svg", { width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ t.jsx("path", { d: "M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14", stroke: "black" })
] }), Ki = ({
  children: e = "Экспорт",
  icon: o = /* @__PURE__ */ t.jsx(mt, {}),
  onExport: r,
  isExporting: i = !1,
  exportProgress: s = 0,
  ...c
}) => {
  const d = async (g) => {
    if (r)
      try {
        await r();
      } catch (v) {
        console.error("Export error:", v);
      }
    c.onClick && c.onClick(g);
  };
  return /* @__PURE__ */ t.jsx(wt, { ...c, onClick: d, disabled: i || c.disabled, children: i ? /* @__PURE__ */ t.jsxs(vt, { children: [
    /* @__PURE__ */ t.jsxs("span", { children: [
      "Экспорт... ",
      s,
      "%"
    ] }),
    /* @__PURE__ */ t.jsx(yt, { progress: s })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    o,
    /* @__PURE__ */ t.jsx("span", { children: e })
  ] }) });
}, wt = n.button`
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
`, vt = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`, yt = n.div`
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
`, Qi = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: r,
  onChange: i,
  hasError: s = !1,
  errorMessage: c,
  options: d,
  name: g,
  disabled: v = !1,
  required: b = !1,
  ...m
}) => {
  const [h, w] = G.useState(!1), [x, u] = G.useState(!1), l = G.useRef(null), S = !!(o && !r && !h), j = (C) => {
    i && !v && i({
      target: { value: C, name: g }
    }), u(!1), w(!1);
  }, T = (C) => {
    l.current && !l.current.contains(C.target) && (u(!1), w(!1));
  }, E = () => {
    v || (u(!x), w(!x));
  };
  G.useEffect(() => (document.addEventListener("mousedown", T), () => {
    document.removeEventListener("mousedown", T);
  }), []);
  const _ = d.find((C) => C.value === r), z = _ ? _.label : "";
  return /* @__PURE__ */ t.jsxs(kt, { ref: l, ...m, children: [
    /* @__PURE__ */ t.jsxs(jt, { children: [
      /* @__PURE__ */ t.jsxs(
        Ct,
        {
          hasError: s,
          isOpen: x,
          disabled: v,
          onClick: E,
          onFocus: () => !v && w(!0),
          onBlur: () => w(!1),
          tabIndex: v ? -1 : 0,
          children: [
            /* @__PURE__ */ t.jsx($t, { children: z || e && /* @__PURE__ */ t.jsx(St, { children: e }) }),
            /* @__PURE__ */ t.jsx(Mt, { isOpen: x, disabled: v, children: /* @__PURE__ */ t.jsx("svg", { width: "17", height: "9", viewBox: "0 0 17 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M1.5 1L8.5 8L15.5 1", stroke: v ? "#CCCCCC" : "#50555C", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
          ]
        }
      ),
      x && /* @__PURE__ */ t.jsx(Dt, { children: d.map((C) => /* @__PURE__ */ t.jsxs(Lt, { $isSelected: C.value === r, onClick: () => j(C.value), children: [
        /* @__PURE__ */ t.jsx(Et, { $isSelected: C.value === r, children: C.value === r && /* @__PURE__ */ t.jsx(Tt, {}) }),
        /* @__PURE__ */ t.jsx(It, { children: C.label })
      ] }, C.value)) })
    ] }),
    o && /* @__PURE__ */ t.jsx(Pt, { isVisible: S, children: o }),
    s && c && /* @__PURE__ */ t.jsx(zt, { children: c }),
    /* @__PURE__ */ t.jsx(Rt, { name: g, value: r || "", onChange: () => {
    }, tabIndex: -1, required: b, children: d.map((C) => /* @__PURE__ */ t.jsx("option", { value: C.value, children: C.label }, C.value)) })
  ] });
}, kt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, jt = n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`, Ct = n.div`
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
`, $t = n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, St = n.span`
  color: rgba(80, 85, 92, 1);
`, Mt = n.div`
  transform: ${({ isOpen: e }) => e ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`, Dt = n.div`
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
`, Lt = n.div`
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
`, Et = n.div`
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
`, It = n.span`
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
`, zt = n.span`
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
`, es = ({ checked: e = !1, onChange: o, className: r, label: i, disabled: s = !1 }) => {
  const [c, d] = I(!1), g = () => {
    s || !o || o(!e);
  }, v = (b) => {
    s || (b.key === "Enter" || b.key === " ") && (b.preventDefault(), g());
  };
  return /* @__PURE__ */ t.jsxs(Ft, { className: r, onClick: g, onKeyPress: v, tabIndex: s ? -1 : 0, disabled: s, children: [
    /* @__PURE__ */ t.jsx(
      Bt,
      {
        checked: e,
        isFocused: c,
        disabled: s,
        onMouseEnter: () => !s && d(!0),
        onMouseLeave: () => !s && d(!1),
        onFocus: () => !s && d(!0),
        onBlur: () => !s && d(!1),
        children: e && /* @__PURE__ */ t.jsx(_t, { viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", disabled: s, children: /* @__PURE__ */ t.jsx("path", { d: "M7.375 1.1875L2.65 6.8125L0.625 4.5625", stroke: s ? "rgba(173, 179, 188, 1)" : "white", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    i && /* @__PURE__ */ t.jsx(At, { disabled: s, children: i })
  ] });
}, Ft = n.div`
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
`, At = n.span`
  font-size: 16px;
  color: ${(e) => e.disabled ? "rgba(173, 179, 188, 1)" : "#333"};
  user-select: none;
  white-space: nowrap;
`, _t = n.svg`
  width: 8px;
  height: 8px;
  opacity: ${(e) => e.disabled ? 0.6 : 1};
`, Ot = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e", fe = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Wt = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], be = ({ prefix: e = "Дата:", value: o = "", placeholder: r = "Выберите дату", onChange: i, onReset: s }) => {
  const [c, d] = I(!1), [g, v] = I(/* @__PURE__ */ new Date()), [b, m] = I(o ? new Date(o) : null), [h, w] = I(!1), [x, u] = I(!1), l = Z(null), S = Z(null), j = Z(null);
  q(() => {
    const a = ($) => {
      l.current && !l.current.contains($.target) && d(!1), S.current && !S.current.contains($.target) && w(!1), j.current && !j.current.contains($.target) && u(!1);
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []), q(() => {
    m(o ? new Date(o) : null);
  }, [o]);
  const T = (a) => {
    const $ = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()));
    m(a);
    const f = $.toISOString().split("T")[0];
    i?.(f), d(!1);
  }, E = () => {
    const a = /* @__PURE__ */ new Date();
    v(a);
    const f = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())).toISOString().split("T")[0];
    i?.(f), d(!1);
  }, _ = () => {
    m(null), i?.(""), s?.(), d(!1);
  }, z = (a) => {
    const $ = new Date(g);
    $.setMonth(a), v($), w(!1);
  }, C = (a) => {
    const $ = new Date(g);
    $.setFullYear(a), v($), u(!1);
  }, N = () => {
    const a = g.getFullYear(), $ = g.getMonth(), f = new Date(a, $, 1), V = new Date(a, $ + 1, 0).getDate(), U = f.getDay() === 0 ? 6 : f.getDay() - 1, M = [], L = 35, p = new Date(a, $, 0).getDate();
    for (let B = 0; B < U; B++) {
      const k = p - U + B + 1, F = new Date(a, $ - 1, k), P = !!(b && F.getDate() === b.getDate() && F.getMonth() === b.getMonth() && F.getFullYear() === b.getFullYear());
      M.push(
        /* @__PURE__ */ t.jsx(ae, { selected: P, onClick: () => T(F), otherMonth: !0, children: k }, `prev-${k}`)
      );
    }
    for (let B = 1; B <= V; B++) {
      const k = new Date(a, $, B), F = !!(b && k.getDate() === b.getDate() && k.getMonth() === b.getMonth() && k.getFullYear() === b.getFullYear());
      M.push(
        /* @__PURE__ */ t.jsx(ae, { selected: F, onClick: () => T(k), children: B }, `current-${B}`)
      );
    }
    const D = L - M.length;
    for (let B = 1; B <= D; B++) {
      const k = new Date(a, $ + 1, B), F = !!(b && k.getDate() === b.getDate() && k.getMonth() === b.getMonth() && k.getFullYear() === b.getFullYear());
      M.push(
        /* @__PURE__ */ t.jsx(ae, { selected: F, onClick: () => T(k), otherMonth: !0, children: B }, `next-${B}`)
      );
    }
    return M;
  }, R = () => b ? b.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) : r, A = () => {
    const a = (/* @__PURE__ */ new Date()).getFullYear(), $ = [];
    for (let f = a - 10; f <= a + 10; f++)
      $.push(f);
    return $;
  }, W = (a) => {
    a.preventDefault(), a.stopPropagation(), w(!h), u(!1);
  }, O = (a) => {
    a.preventDefault(), a.stopPropagation(), u(!x), w(!1);
  }, y = (a) => {
    const $ = a === "next" ? 1 : -1, f = new Date(g);
    f.setMonth(f.getMonth() + $), v(f);
  };
  return /* @__PURE__ */ t.jsxs(Nt, { ref: l, children: [
    /* @__PURE__ */ t.jsxs(Ht, { onClick: () => d(!c), children: [
      e && /* @__PURE__ */ t.jsx(Yt, { children: e }),
      /* @__PURE__ */ t.jsx(Vt, { isEmpty: !b, children: R() }),
      /* @__PURE__ */ t.jsx(Ut, { src: Ot, alt: "Календарь" })
    ] }),
    c && /* @__PURE__ */ t.jsxs(Zt, { className: "calendar-container", children: [
      /* @__PURE__ */ t.jsxs(qt, { children: [
        /* @__PURE__ */ t.jsx(
          ye,
          {
            onClick: (a) => {
              a.preventDefault(), a.stopPropagation(), y("prev");
            },
            onMouseDown: (a) => a.preventDefault(),
            children: /* @__PURE__ */ t.jsx(ke, { direction: "right" })
          }
        ),
        /* @__PURE__ */ t.jsxs(Xt, { children: [
          /* @__PURE__ */ t.jsxs(Kt, { ref: S, children: [
            /* @__PURE__ */ t.jsxs(Gt, { onClick: (a) => W(a), onMouseDown: (a) => a.preventDefault(), children: [
              fe[g.getMonth()],
              /* @__PURE__ */ t.jsx(me, { $open: h })
            ] }),
            h && /* @__PURE__ */ t.jsx(we, { $width: 120, onClick: (a) => a.stopPropagation(), children: fe.map((a, $) => /* @__PURE__ */ t.jsx(
              ve,
              {
                $selected: $ === g.getMonth(),
                onClick: (f) => {
                  f.stopPropagation(), z($);
                },
                children: a
              },
              a
            )) })
          ] }),
          /* @__PURE__ */ t.jsxs(Qt, { ref: j, children: [
            /* @__PURE__ */ t.jsxs(Jt, { onClick: (a) => O(a), onMouseDown: (a) => a.preventDefault(), children: [
              g.getFullYear(),
              /* @__PURE__ */ t.jsx(me, { $open: x })
            ] }),
            x && /* @__PURE__ */ t.jsx(we, { $width: 80, onClick: (a) => a.stopPropagation(), children: A().map((a) => /* @__PURE__ */ t.jsx(
              ve,
              {
                $selected: a === g.getFullYear(),
                onClick: ($) => {
                  $.stopPropagation(), C(a);
                },
                children: a
              },
              a
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          ye,
          {
            onClick: (a) => {
              a.preventDefault(), a.stopPropagation(), y("next");
            },
            onMouseDown: (a) => a.preventDefault(),
            children: /* @__PURE__ */ t.jsx(ke, { direction: "left" })
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(en, { children: Wt.map((a) => /* @__PURE__ */ t.jsx(tn, { children: a }, a)) }),
      /* @__PURE__ */ t.jsx(nn, { children: N() }),
      /* @__PURE__ */ t.jsxs(on, { children: [
        /* @__PURE__ */ t.jsx(je, { onClick: _, children: "Удалить" }),
        /* @__PURE__ */ t.jsx(je, { onClick: E, children: "Сегодня" })
      ] })
    ] })
  ] });
}, Nt = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`, Ht = n.div`
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
  background: white;
`, Vt = n.span`
  flex-grow: 1;
  color: ${({ isEmpty: e }) => e ? "rgba(80, 85, 92, 1)" : "#000"};
`, Ut = n.img`
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
`, qt = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`, Xt = n.div`
  display: flex;
  gap: 8px;
  color: black;
`, Re = n.button`
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
`, Gt = n(Re)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Jt = n(Re)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`, Kt = n.div`
  position: relative;
`, Qt = n.div`
  position: relative;
`, me = n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({ $open: e }) => e ? "rotate(180deg)" : "none"};
  transition: transform 0.2s ease;
`, we = n.div`
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
`, ve = n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ $selected: e }) => e ? "rgba(232, 216, 216, 1)" : "white"};
  color: ${({ $selected: e }) => e ? "#000" : "inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({ $selected: e }) => e ? "1" : "0.5"});
  }
`, ye = n.button`
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
`, ke = n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({ direction: e }) => e}: 5px solid rgba(80, 85, 92, 1);
`, en = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`, tn = n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`, nn = n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`, ae = n.div`
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
`, on = n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`, je = n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`, ts = n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`, ns = n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`, os = n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`, Fe = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: r,
  inputType: i = "text",
  onChange: s,
  hasError: c = !1,
  errorMessage: d,
  ...g
}) => {
  const [v, b] = G.useState(!1), m = !!(o && !r && !v), h = (u) => {
    if (!s) return;
    let l = u.target.value;
    switch (i) {
      case "number":
        /^\d*$/.test(l) && s?.(u);
        break;
      case "rubles": {
        const j = u.target.selectionStart, T = u.target.value;
        let E = T.replace(/[^\d]/g, "");
        if (E === "") {
          u.target.value = "", s(u);
          break;
        }
        const _ = parseInt(E, 10);
        if (!isNaN(_)) {
          let z = _.toLocaleString("ru-RU");
          z += " ₽";
          const C = w(T, j || 0), N = x(z, C);
          u.target.value = z, s(u), setTimeout(() => {
            u.target.setSelectionRange(N, N);
          }, 0);
        }
        break;
      }
      case "percents": {
        l = l.replace(/[^\d.]/g, "");
        const j = l.split(".");
        j.length > 2 && (l = j[0] + "." + j.slice(1).join("")), j.length === 2 && j[1].length > 2 && (l = j[0] + "." + j[1].slice(0, 2));
        const T = parseFloat(l);
        if (isNaN(T) || (T > 100 ? l = "100" : T < 0 && (l = "0")), l && l !== "") {
          l += " %";
          const E = u.target.selectionStart || 0, _ = l.replace(" %", "");
          u.target.value = l, s(u), setTimeout(() => {
            E < _.length && u.target.setSelectionRange(E, E);
          }, 0);
        } else
          u.target.value = l, s(u);
        break;
      }
      case "fullname":
        l = l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g, ""), l = l.replace(/\s{2,}/g, " "), l = l.replace(/- /g, "-"), l = l.replace(/ -/g, " ");
        let S = l.split(" ").filter((j) => j.length > 0);
        S = S.slice(0, 3), l = S.map((j) => {
          if (j.startsWith("-") && (j = j.substring(1)), (j.match(/-/g) || []).length > 1) {
            const E = j.split("-");
            j = E[0] + "-" + E.slice(1).join("");
          }
          return j.includes("-") ? j.split("-").map((E, _) => E.length === 0 ? "" : (_ > 0, E[0].toUpperCase() + E.slice(1).toLowerCase())).join("-") : j.length > 0 ? j[0].toUpperCase() + j.slice(1).toLowerCase() : "";
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
  }, w = (u, l) => {
    let S = 0;
    for (let j = 0; j < Math.min(l, u.length); j++)
      /\d/.test(u[j]) && S++;
    return S;
  }, x = (u, l) => {
    let S = 0;
    for (let j = 0; j < u.length; j++) {
      if (S >= l)
        return j;
      /\d/.test(u[j]) && S++;
    }
    return u.length;
  };
  return /* @__PURE__ */ t.jsxs(rn, { children: [
    /* @__PURE__ */ t.jsx(
      sn,
      {
        ...g,
        value: r,
        placeholder: m ? "" : e,
        onFocus: () => b(!0),
        onBlur: (u) => {
          b(!1), g.onBlur?.(u);
        },
        onChange: h,
        inputMode: i === "number" || i === "doc" || i === "date" || i === "rubles" || i === "percents" ? "numeric" : "text",
        maxLength: i === "doc" ? 11 : i === "date" ? 10 : void 0,
        hasError: c
      }
    ),
    o && /* @__PURE__ */ t.jsx(an, { isVisible: m, children: o }),
    c && d && /* @__PURE__ */ t.jsx(ln, { children: d })
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
`, rs = ({ total: e, current: o = 1, onChange: r, itemsPerPage: i = 10 }) => {
  const s = Math.ceil(e / i), [c, d] = I(o), g = (b) => {
    b < 1 || b > s || b === c || (d(b), r?.(b));
  }, v = () => {
    const b = [];
    let h = 1, w = s;
    if (s > 5) {
      const x = Math.floor(2.5);
      h = Math.max(c - x, 1), w = Math.min(c + x, s), c <= x + 1 ? w = 5 : c >= s - x && (h = s - 5 + 1);
    }
    for (let x = h; x <= w; x++)
      b.push(
        /* @__PURE__ */ t.jsx(re, { active: x === c, onClick: () => g(x), children: x }, x)
      );
    return h > 1 && (h > 2 && b.unshift(/* @__PURE__ */ t.jsx(re, { children: "..." }, "start-ellipsis")), b.unshift(
      /* @__PURE__ */ t.jsx(re, { active: c === 1, onClick: () => g(1), children: "1" }, 1)
    )), w < s && (w < s - 1 && b.push(/* @__PURE__ */ t.jsx(re, { children: "..." }, "end-ellipsis")), b.push(
      /* @__PURE__ */ t.jsx(re, { active: s === c, onClick: () => g(s), children: s }, s)
    )), b;
  };
  return /* @__PURE__ */ t.jsxs(cn, { children: [
    /* @__PURE__ */ t.jsx(Ce, { disabled: c === 1, onClick: () => g(c - 1), children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === 1 ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    v(),
    /* @__PURE__ */ t.jsx(Ce, { disabled: c === s, onClick: () => g(c + 1), style: { transform: "rotate(180deg)" }, children: /* @__PURE__ */ t.jsx("svg", { width: "7", height: "11", viewBox: "0 0 7 11", fill: "none", children: /* @__PURE__ */ t.jsx("path", { d: "M6 0.5L1 5.5L6 10.5", stroke: c === s ? "#ccc" : "black", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
  ] });
}, cn = n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`, re = n.div`
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
`, Ce = n.button`
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
`, is = ({
  placeholder: e = "",
  customPlaceholder: o,
  value: r,
  onChange: i,
  hasError: s = !1,
  errorMessage: c,
  rows: d = 3,
  ...g
}) => {
  const [v, b] = G.useState(!1), m = !!(o && !r && !v);
  return /* @__PURE__ */ t.jsxs(dn, { children: [
    /* @__PURE__ */ t.jsx(
      pn,
      {
        ...g,
        value: r,
        placeholder: m ? "" : e,
        onFocus: () => b(!0),
        onBlur: (h) => {
          b(!1), g.onBlur?.(h);
        },
        onChange: i,
        hasError: s,
        rows: d
      }
    ),
    o && /* @__PURE__ */ t.jsx(un, { isVisible: m, children: o }),
    s && c && /* @__PURE__ */ t.jsx(xn, { children: c })
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
`, xn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, hn = ({
  title: e,
  onClose: o,
  onCancel: r,
  onSave: i,
  children: s,
  isSaveDisabled: c = !1,
  isSubmitting: d = !1,
  mode: g = "create",
  hideSaveButton: v = !1,
  hideCanselButton: b = !1,
  width: m = "560px",
  saveButtonText: h = "Сохранить",
  customLayout: w
}) => {
  const x = g === "view", u = Z(null);
  q(() => {
    const j = (E) => {
      E.key === "Escape" && o();
    };
    document.addEventListener("keydown", j);
    const T = document.body.style.overflow;
    return document.body.style.overflow = "hidden", setTimeout(() => u.current?.focus(), 0), () => {
      document.removeEventListener("keydown", j), document.body.style.overflow = T;
    };
  }, [o]);
  const l = (j) => {
    j.target === j.currentTarget && o();
  }, S = (j) => {
    j.preventDefault(), r();
  };
  return /* @__PURE__ */ t.jsx(gn, { onMouseDown: l, role: "presentation", children: /* @__PURE__ */ t.jsxs(
    fn,
    {
      ref: u,
      $width: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": e || "Диалог",
      tabIndex: -1,
      children: [
        /* @__PURE__ */ t.jsxs(Be, { children: [
          /* @__PURE__ */ t.jsx(Ae, { children: e }),
          /* @__PURE__ */ t.jsx(bn, { type: "button", onClick: o, "aria-label": "Закрыть", children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": !0, children: "×" }) })
        ] }),
        w ? /* @__PURE__ */ t.jsx(mn, { children: w }) : null,
        /* @__PURE__ */ t.jsxs(wn, { onSubmit: i, children: [
          /* @__PURE__ */ t.jsx(vn, { children: s }),
          /* @__PURE__ */ t.jsxs(yn, { children: [
            /* @__PURE__ */ t.jsx(kn, { children: b ? null : /* @__PURE__ */ t.jsx(Cn, { isPrimary: !1, onClick: S, children: "Отменить" }) }),
            /* @__PURE__ */ t.jsx(jn, { children: !x && !v ? /* @__PURE__ */ t.jsx(
              $n,
              {
                type: "submit",
                disabled: c || d,
                children: d ? "Сохранение..." : h
              }
            ) : null })
          ] })
        ] })
      ]
    }
  ) });
}, gn = n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`, fn = n.div`
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
`, Be = n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`, Ae = n.h2`
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
`, Cn = n(de)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, $n = n(de)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`, Sn = [
  { id: "Last7Days", label: "За последние 7 дней", value: "Last7Days" },
  { id: "ThisMonth", label: "За этот месяц", value: "ThisMonth" },
  { id: "Last31Days", label: "За последние 31 день", value: "Last31Days" },
  { id: "PreviousMonth", label: "За прошлый месяц", value: "PreviousMonth" },
  { id: "ThisYear", label: "За этот год", value: "ThisYear" },
  { id: "PreviousYear", label: "За прошлый год", value: "PreviousYear" }
], ss = ({
  value: e = "",
  placeholder: o = "Выберите период",
  options: r = Sn,
  showCustomPeriodButton: i = !0,
  onChange: s,
  onCustomPeriodClick: c
}) => {
  const [d, g] = I(!1), [v, b] = I(!1), [m, h] = I(""), [w, x] = I(""), [u, l] = I(""), S = Z(null), j = Z(null);
  q(() => {
    if (e === "Custom" && w && u) {
      const R = C(w), A = C(u);
      h(`С ${R} по ${A}`);
    } else {
      const R = r.find((A) => A.value === e);
      h(R ? R.label : "");
    }
  }, [e, r, w, u]), q(() => {
    const R = (A) => {
      S.current && !S.current.contains(A.target) && g(!1), v && j.current && !j.current.contains(A.target) && ([...document.querySelectorAll(".calendar-container, .arrow-button")].some((y) => y.contains(A.target)) || b(!1));
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [v]);
  const T = (R) => {
    s?.(R.value), g(!1);
  }, E = () => {
    g(!1), c ? c() : b(!0);
  }, _ = () => {
    s?.(""), h(""), x(""), l("");
  }, z = () => {
    if (w && u) {
      const R = C(w), A = C(u), W = `С ${R} по ${A}`;
      s?.("Custom", w, u), h(W), b(!1);
    }
  }, C = (R) => {
    const A = new Date(R), W = String(A.getDate()).padStart(2, "0"), O = String(A.getMonth() + 1).padStart(2, "0"), y = A.getFullYear();
    return `${W}.${O}.${y}`;
  }, N = () => /* @__PURE__ */ t.jsxs(An, { children: [
    /* @__PURE__ */ t.jsx(Be, { style: { margin: 0 }, children: /* @__PURE__ */ t.jsx(Ae, { style: { margin: 0 }, children: "Выбор периода" }) }),
    /* @__PURE__ */ t.jsx(_n, { onClick: _, children: "Очистить период" })
  ] });
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Mn, { ref: S, children: [
      /* @__PURE__ */ t.jsxs(Dn, { onClick: () => g(!d), children: [
        /* @__PURE__ */ t.jsx(Ln, { children: m || o }),
        /* @__PURE__ */ t.jsx(En, { $isOpen: d, children: "▼" })
      ] }),
      d && /* @__PURE__ */ t.jsxs(Tn, { children: [
        r.map((R) => /* @__PURE__ */ t.jsxs(In, { onClick: () => T(R), $isSelected: e === R.value, children: [
          /* @__PURE__ */ t.jsx(Pn, { $isSelected: e === R.value, children: e === R.value && /* @__PURE__ */ t.jsx(zn, {}) }),
          /* @__PURE__ */ t.jsx(Rn, { children: R.label })
        ] }, R.id)),
        i && /* @__PURE__ */ t.jsx(Fn, { onClick: E, children: "Другой период" })
      ] })
    ] }),
    v && /* @__PURE__ */ t.jsx("div", { ref: j, children: /* @__PURE__ */ t.jsx(
      hn,
      {
        title: "",
        onClose: () => b(!1),
        onCancel: () => b(!1),
        onSave: (R) => {
          R.preventDefault(), z();
        },
        saveButtonText: "Выбрать",
        customLayout: /* @__PURE__ */ t.jsx(N, {}),
        children: /* @__PURE__ */ t.jsxs(Bn, { children: [
          /* @__PURE__ */ t.jsx($e, { children: /* @__PURE__ */ t.jsx(be, { value: w, onChange: (R) => x(R) }) }),
          /* @__PURE__ */ t.jsx($e, { children: /* @__PURE__ */ t.jsx(be, { value: u, onChange: (R) => l(R) }) })
        ] })
      }
    ) })
  ] });
}, Mn = n.div`
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
`, En = n.span`
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
`, In = n.div`
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
`, zn = n.div`
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
`, Fn = n.div`
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
`, Bn = n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`, $e = n.div`
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
`, as = ({
  name: e,
  value: o,
  onChange: r,
  onBlur: i,
  onKeyPress: s,
  placeholder: c = "8 (999) 500-50-50",
  customPlaceholder: d,
  tabIndex: g,
  disabled: v = !1,
  hasError: b = !1,
  errorMessage: m
}) => {
  const [h, w] = G.useState(!1), x = G.useRef(null), u = !!(d && !o && !h), l = (E) => {
    const z = E.replace(/\D/g, "").slice(0, 11);
    let C = "";
    return z.length > 0 && (C += "8"), z.length > 1 && (C += ` (${z.slice(1, 4)}`), z.length > 4 && (C += `) ${z.slice(4, 7)}`), z.length > 7 && (C += `-${z.slice(7, 9)}`), z.length > 9 && (C += `-${z.slice(9, 11)}`), C;
  }, S = (E) => {
    const _ = l(E.target.value), z = {
      ...E,
      target: {
        ...E.target,
        name: e,
        value: _
      }
    };
    r(z);
  }, j = (E) => {
    w(!1), i?.(E);
  }, T = (E) => {
    s?.(E);
  };
  return /* @__PURE__ */ t.jsxs(On, { children: [
    /* @__PURE__ */ t.jsx(
      Wn,
      {
        ref: x,
        name: e,
        type: "tel",
        value: o,
        onChange: S,
        onKeyPress: T,
        placeholder: u ? "" : c,
        maxLength: 18,
        tabIndex: g,
        disabled: v,
        hasError: b,
        onFocus: () => w(!0),
        onBlur: j,
        inputMode: "tel"
      }
    ),
    d && /* @__PURE__ */ t.jsx(Nn, { isVisible: u, children: d }),
    b && m && /* @__PURE__ */ t.jsx(Hn, { children: m })
  ] });
}, On = n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`, Wn = n.input`
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
`, Hn = n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`, ls = ({ tabs: e, activeTab: o, onChange: r, addButton: i, fontSize: s = 14 }) => {
  const c = e.find((d) => d.id === o)?.content;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Yn, { children: /* @__PURE__ */ t.jsxs(Vn, { children: [
      e.map((d) => /* @__PURE__ */ t.jsxs(Un, { $isActive: o === d.id, onClick: () => r(d.id), $fontSize: s, children: [
        d.label,
        o === d.id && /* @__PURE__ */ t.jsx(Zn, {})
      ] }, d.id)),
      i && /* @__PURE__ */ t.jsx(qn, { children: i })
    ] }) }),
    c && /* @__PURE__ */ t.jsx(Xn, { children: c })
  ] });
}, Yn = n.div`
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
`, Un = n.li`
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
`, qn = n.li`
  margin-left: auto;
  padding: 4px 0;
`, Xn = n.div`
  margin-top: 20px;
`, cs = ({
  mode: e,
  primaryValue: o,
  secondaryValue: r,
  placeholder: i = "Выберите значение",
  onSelect: s,
  onClear: c,
  disabled: d = !1,
  hasError: g = !1,
  errorMessage: v = "",
  customIcon: b
}) => {
  const h = b || /* @__PURE__ */ t.jsx("svg", { width: "27", height: "6", viewBox: "0 0 27 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z", fill: "#50555C" }) });
  return e === "view" ? /* @__PURE__ */ t.jsxs(Qn, { children: [
    /* @__PURE__ */ t.jsx(eo, { children: o || "Не указано" }),
    r && /* @__PURE__ */ t.jsx(to, { children: r })
  ] }) : /* @__PURE__ */ t.jsxs(Gn, { children: [
    /* @__PURE__ */ t.jsxs(Jn, { children: [
      /* @__PURE__ */ t.jsx(Kn, { type: "text", value: o || "", placeholder: i, readOnly: !0, disabled: d }),
      o && !d && /* @__PURE__ */ t.jsx(oo, { type: "button", onClick: c, "aria-label": "Очистить", children: "×" })
    ] }),
    !d && /* @__PURE__ */ t.jsx(no, { type: "button", onClick: s, "aria-label": "Выбрать", children: h }),
    g && v && /* @__PURE__ */ t.jsx(ro, { children: v })
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
`, _e = n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`, ds = ({ total: e }) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(io, { children: [
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
`, ps = n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`, us = n.h1`
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
`, xs = ({ checked: e, onChange: o, disabled: r }) => {
  const i = () => {
    r || o(!e);
  };
  return /* @__PURE__ */ t.jsxs(so, { children: [
    /* @__PURE__ */ t.jsx(lo, { checked: e, onChange: i, disabled: r }),
    /* @__PURE__ */ t.jsx(ao, { checked: e, disabled: r })
  ] });
}, hs = ({ id: e, name: o, checked: r, onChange: i, children: s }) => /* @__PURE__ */ t.jsxs(co, { htmlFor: e, children: [
  /* @__PURE__ */ t.jsx(po, { type: "radio", id: e, name: o, checked: r, onChange: i }),
  s
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
`, gs = ({
  percentage: e,
  onChange: o,
  draggable: r = !1,
  colors: i = {
    primary: "rgba(0, 125, 136, 1)",
    secondary: "rgba(37, 203, 161, 1)"
  }
}) => {
  const s = Z(null), [c, d] = I(!1), g = (h) => {
    !r || !o || (h.preventDefault(), d(!0), m(h));
  }, v = (h) => {
    !c || !o || m(h);
  }, b = () => {
    d(!1);
  }, m = (h) => {
    if (!s.current || !o) return;
    const w = s.current.getBoundingClientRect();
    let u = (h.clientX - w.left) / w.width * 100;
    u = Math.max(0, Math.min(100, u)), o(Math.round(u));
  };
  return q(() => {
    if (c)
      return document.addEventListener("mousemove", v), document.addEventListener("mouseup", b), () => {
        document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", b);
      };
  }, [c]), /* @__PURE__ */ t.jsxs(uo, { ref: s, $draggable: r, onMouseDown: g, children: [
    /* @__PURE__ */ t.jsx(xo, { $secondaryColor: i.secondary }),
    /* @__PURE__ */ t.jsx(ho, { $percentage: e, $primaryColor: i.primary }),
    r && /* @__PURE__ */ t.jsx(go, { $percentage: e, $primaryColor: i.primary })
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
`, xo = n.div`
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
`, go = n.div`
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
let le = null;
const bo = (e) => typeof window > "u" ? Promise.reject(new Error("Window is not available")) : window.ymaps ? Promise.resolve(window.ymaps) : (le || (le = new Promise((o, r) => {
  const i = document.createElement("script"), s = e ? `&apikey=${e}` : "";
  i.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`, i.async = !0, i.onload = () => {
    window.ymaps ? window.ymaps.ready(() => o(window.ymaps)) : r(new Error("Yandex Maps failed to load"));
  }, i.onerror = () => r(new Error("Failed to load Yandex Maps script")), document.head.appendChild(i);
})), le), fs = ({
  onLocationSelect: e,
  initialAddress: o = "",
  initialLat: r = 55.751244,
  initialLon: i = 37.618423,
  apiKey: s,
  zoom: c = 12,
  height: d = 400,
  width: g = "100%",
  inputPlaceholder: v = "Введите адрес или название места",
  searchButtonLabel: b = "Найти",
  draggablePlacemark: m = !0,
  controls: h = fo,
  showSearch: w = !0,
  className: x,
  style: u,
  onError: l
}) => {
  const [S, j] = I(null), [T, E] = I(o), [_, z] = I(o), [C, N] = I(!1), R = Z(null);
  q(() => {
    let O = !1, y;
    return (async () => {
      try {
        const $ = await bo(s);
        if (O || !R.current) return;
        y = new $.Map(R.current, {
          center: [r, i],
          zoom: c,
          controls: h
        });
        const f = new $.Placemark([r, i], {}, { draggable: m });
        y.geoObjects.add(f), y.events.add("click", (Y) => {
          const V = Y.get("coords");
          A(V, f, y);
        }), f.events.add("dragend", () => {
          const Y = f.geometry.getCoordinates();
          A(Y, f, y);
        }), j(y), N(!0);
      } catch ($) {
        l && $ instanceof Error && l($);
      }
    })(), () => {
      O = !0, y && y.destroy();
    };
  }, [s, r, i, c, h, m, l]);
  const A = async (O, y, a) => {
    if (window.ymaps)
      try {
        const Y = (await window.ymaps.geocode(O)).geoObjects.get(0).getAddressLine();
        y.geometry.setCoordinates(O), a.panTo(O, { flying: !0 }), z(Y), E(Y), e(Y, O[0], O[1]);
      } catch ($) {
        l && $ instanceof Error && l($);
      }
  }, W = async () => {
    if (!(!T.trim() || !window.ymaps || !S))
      try {
        const y = (await window.ymaps.geocode(T)).geoObjects.get(0);
        if (y) {
          const a = y.geometry.getCoordinates(), $ = y.properties.get("boundedBy");
          S.setBounds($, { checkZoomRange: !0 });
          const f = new window.ymaps.Placemark(a, {}, { draggable: m });
          S.geoObjects.removeAll(), S.geoObjects.add(f);
          const Y = y.getAddressLine();
          z(Y), e(Y, a[0], a[1]), f.events.add("dragend", () => {
            const V = f.geometry.getCoordinates();
            A(V, f, S);
          });
        }
      } catch (O) {
        l && O instanceof Error && l(O);
      }
  };
  return /* @__PURE__ */ t.jsxs(mo, { className: x, style: u, children: [
    w && /* @__PURE__ */ t.jsxs(wo, { children: [
      /* @__PURE__ */ t.jsx(
        Fe,
        {
          type: "text",
          value: T,
          onChange: (O) => E(O.target.value),
          placeholder: v,
          onKeyPress: (O) => O.key === "Enter" && W(),
          disabled: !C
        }
      ),
      /* @__PURE__ */ t.jsx(vo, { onClick: W, disabled: !C, children: b })
    ] }),
    /* @__PURE__ */ t.jsxs(ko, { children: [
      "Выбранный адрес: ",
      /* @__PURE__ */ t.jsx("strong", { children: _ || "Не выбран" })
    ] }),
    /* @__PURE__ */ t.jsx(yo, { ref: R, $height: d, $width: g }),
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
`, Oe = n.h1`
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
function Se(e, o = "₽") {
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
function bs(e) {
  if (!e) return 0;
  const o = e.replace(/\D/g, "");
  return parseInt(o, 10);
}
const ms = ({ title: e, data: o, maxValue: r, step: i, height: s = 300, titleFontSize: c }) => {
  const [d, g] = I(null), v = [];
  for (let m = 0; m <= r; m += i)
    v.push(m);
  const b = o.length > 0 ? o[0].bars.map((m) => ({ name: m.name, color: m.color })) : [];
  return /* @__PURE__ */ t.jsxs(Co, { children: [
    /* @__PURE__ */ t.jsxs(_e, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Oe, { style: { fontSize: c }, children: e }),
      /* @__PURE__ */ t.jsx($o, { children: b.map((m, h) => /* @__PURE__ */ t.jsxs(So, { children: [
        /* @__PURE__ */ t.jsx(Mo, { color: m.color }),
        /* @__PURE__ */ t.jsx(Do, { children: m.name })
      ] }, h)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Lo, { height: s, children: [
      /* @__PURE__ */ t.jsx(Eo, { children: v.map((m, h) => /* @__PURE__ */ t.jsx(To, { children: m.toLocaleString() }, h)) }),
      /* @__PURE__ */ t.jsxs(Io, { children: [
        /* @__PURE__ */ t.jsxs(Po, { children: [
          v.map((m, h) => {
            const w = m / r * 100;
            return /* @__PURE__ */ t.jsx(zo, { position: 100 - w }, `line-${h}`);
          }),
          o.map((m, h) => /* @__PURE__ */ t.jsxs(Ro, { onMouseEnter: () => g(h), onMouseLeave: () => g(null), children: [
            m.bars.map((w, x) => {
              const u = m.bars.slice(x + 1).reduce((l, S) => l + S.value, 0);
              return /* @__PURE__ */ t.jsx(
                Fo,
                {
                  height: w.value / r * 100,
                  offset: u / r * 100,
                  color: w.color,
                  isHovered: d !== null && d !== h
                },
                x
              );
            }),
            d === h && /* @__PURE__ */ t.jsxs(_o, { children: [
              /* @__PURE__ */ t.jsxs(Oo, { children: [
                /* @__PURE__ */ t.jsxs(Wo, { children: [
                  "Всего: ",
                  Se(m.total.toString())
                ] }),
                m.bars.map((w, x) => /* @__PURE__ */ t.jsxs(No, { children: [
                  w.name,
                  ": ",
                  Se(w.value.toString())
                ] }, x))
              ] }),
              /* @__PURE__ */ t.jsx(Ho, {})
            ] })
          ] }, h))
        ] }),
        /* @__PURE__ */ t.jsx(Bo, { children: o.map((m, h) => /* @__PURE__ */ t.jsx(Ao, { style: { flex: 1, textAlign: "center" }, children: m.label }, h)) })
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
`, So = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Mo = n.div`
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
`, Eo = n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`, To = n.span`
  font-size: 12px;
  color: #6b7280;
`, Io = n.div`
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
`, zo = n.div`
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
`, Fo = n.div`
  position: relative;
  width: 100%;
  height: ${(e) => Math.max(0, e.height)}%;
  margin-top: ${(e) => Math.max(0, e.offset)}%;
  background-color: ${(e) => e.isHovered ? `color-mix(in srgb, ${e.color} 40%, #E5E7EB)` : e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`, Bo = n.div`
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
`, Wo = n.div`
  font-weight: 600;
  margin-bottom: 6px;
`, No = n.div`
  margin-bottom: 2px;
`, Ho = n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`, Yo = Ye`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`, ws = ({
  title: e,
  data: o,
  xAxisLabel: r,
  yAxisLabel: i,
  maxX: s,
  maxY: c,
  minY: d,
  xStep: g,
  yStep: v,
  height: b = 300,
  showLegend: m = !0,
  xAxisCustomLabels: h,
  showTooltip: w = !0,
  titleFontSize: x = "30px"
}) => {
  const [u, l] = I(null), [S, j] = I({ x: 0, y: 0 }), T = Z(null), E = Z(null), _ = Math.max(...o.map((y) => y.x), s), z = [];
  for (let y = 0; y <= _; y += g)
    z.push(y);
  const C = [];
  for (let y = d; y <= c; y += v)
    C.push(y);
  const N = h || z.map((y) => y.toString()), R = m ? Array.from(new Set(o.filter((y) => y.label).map((y) => y.label))).map((y) => {
    const a = o.find(($) => $.label === y);
    return { name: y, color: a.color };
  }) : [], A = {};
  o.forEach((y) => {
    const a = y.label || "default";
    A[a] || (A[a] = []), A[a].push(y);
  });
  const W = (y) => y / _ * 100, O = (y) => {
    const a = c - d;
    return 100 - (y - d) / a * 100;
  };
  return q(() => {
    if (u && E.current) {
      const y = E.current.getBoundingClientRect(), a = W(u.x) / 100 * y.width, $ = O(u.y) / 100 * y.height;
      j({
        x: a + y.left,
        y: $ + y.top
      });
    }
  }, [u, s, c, d]), /* @__PURE__ */ t.jsxs(Vo, { children: [
    /* @__PURE__ */ t.jsxs(_e, { style: { marginTop: "0" }, children: [
      /* @__PURE__ */ t.jsx(Oe, { style: { fontSize: x }, children: e }),
      m && R.length > 0 && /* @__PURE__ */ t.jsx(Uo, { children: R.map((y, a) => /* @__PURE__ */ t.jsxs(Zo, { children: [
        /* @__PURE__ */ t.jsx(qo, { color: y.color }),
        /* @__PURE__ */ t.jsx(Xo, { children: y.name })
      ] }, a)) })
    ] }),
    /* @__PURE__ */ t.jsxs(Go, { height: b, children: [
      /* @__PURE__ */ t.jsxs(Jo, { children: [
        C.map((y, a) => /* @__PURE__ */ t.jsx(Ko, { children: y.toLocaleString() }, a)),
        /* @__PURE__ */ t.jsx(Me, { children: i })
      ] }),
      /* @__PURE__ */ t.jsxs(Qo, { ref: E, children: [
        C.map((y, a) => /* @__PURE__ */ t.jsx(er, { position: O(y) }, `hline-${a}`)),
        Object.values(A).map((y, a) => y.map(($, f) => {
          if (f === 0) return null;
          const Y = y[f - 1], V = W(Y.x), U = O(Y.y), M = W($.x), L = O($.y);
          return /* @__PURE__ */ t.jsx(
            "svg",
            {
              style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
              children: /* @__PURE__ */ t.jsx("line", { x1: `${V}%`, y1: `${U}%`, x2: `${M}%`, y2: `${L}%`, stroke: $.color, strokeWidth: "1" })
            },
            `line-${a}-${f}`
          );
        })),
        o.map((y, a) => /* @__PURE__ */ t.jsx(
          tr,
          {
            x: W(y.x),
            y: O(y.y),
            color: y.color,
            onMouseEnter: () => l(y),
            onMouseLeave: () => l(null),
            isHovered: u?.label === y.label
          },
          a
        ))
      ] })
    ] }),
    w && u && /* @__PURE__ */ t.jsxs(rr, { ref: T, style: { left: S.x, top: S.y }, children: [
      /* @__PURE__ */ t.jsxs(ir, { children: [
        u.name && /* @__PURE__ */ t.jsx(sr, { children: u.name }),
        /* @__PURE__ */ t.jsx(ar, { children: u.y.toLocaleString() })
      ] }),
      /* @__PURE__ */ t.jsx(lr, {})
    ] }),
    /* @__PURE__ */ t.jsxs(nr, { children: [
      N.map((y, a) => {
        const f = z[a] / _ * 100;
        return /* @__PURE__ */ t.jsx(or, { style: { left: `${f}%`, transform: "translateX(-50%)" }, children: y }, a);
      }),
      r && /* @__PURE__ */ t.jsx(Me, { children: r })
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
`, Uo = n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`, Zo = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, qo = n.div`
  width: 16px;
  height: 2px;
  background-color: ${(e) => e.color};
`, Xo = n.span`
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
`, Me = n.div`
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
  animation: ${Yo} 0.15s ease-out forwards;
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
`, vs = ({ images: e, initialIndex: o, onClose: r }) => {
  const [i, s] = I(o), [c, d] = I(0), g = () => {
    s((h) => h > 0 ? h - 1 : e.length - 1), d(0);
  }, v = () => {
    s((h) => h < e.length - 1 ? h + 1 : 0), d(0);
  }, b = () => {
    d((h) => (h + 90) % 360);
  }, m = (h) => {
    h.key === "Escape" ? r() : h.key === "ArrowLeft" ? g() : h.key === "ArrowRight" ? v() : (h.key === "r" || h.key === "к") && b();
  };
  return /* @__PURE__ */ t.jsx(cr, { onClick: r, onKeyDown: m, tabIndex: 0, children: /* @__PURE__ */ t.jsxs(dr, { onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(pr, { onClick: r, children: /* @__PURE__ */ t.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M18 6L6 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ t.jsx("path", { d: "M6 6L18 18", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ t.jsx(ur, { children: /* @__PURE__ */ t.jsx(xr, { onClick: b, title: "Повернуть (R)", children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
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
      /* @__PURE__ */ t.jsx(De, { $position: "left", onClick: g, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M15 18L9 12L15 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      /* @__PURE__ */ t.jsx(gr, { src: e[i], alt: `Photo ${i + 1}`, $rotation: c }),
      /* @__PURE__ */ t.jsx(De, { $position: "right", onClick: v, children: /* @__PURE__ */ t.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
    ] }),
    /* @__PURE__ */ t.jsx(fr, { children: e.map((h, w) => /* @__PURE__ */ t.jsx(
      br,
      {
        $active: w === i,
        onClick: () => {
          s(w), d(0);
        }
      },
      w
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
`, xr = n.button`
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
`, gr = n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({ $rotation: e }) => e}deg);
  transition: transform 0.3s ease;
`, De = n.button`
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
`, mr = ({ isOpen: e, callPhone: o, error: r, onClose: i }) => {
  const [s, c] = I(!1);
  if (!e) return null;
  const d = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), g = () => {
    d ? window.location.href = `tel:${o}` : (navigator.clipboard.writeText(o), c(!0), setTimeout(() => c(!1), 2e3));
  };
  return /* @__PURE__ */ t.jsx(wr, { onClick: i, children: /* @__PURE__ */ t.jsxs(vr, { onClick: (v) => v.stopPropagation(), children: [
    /* @__PURE__ */ t.jsx(yr, { children: "Подтверждение авторизации" }),
    /* @__PURE__ */ t.jsx(Le, { children: "Для завершения авторизации позвоните на номер:" }),
    /* @__PURE__ */ t.jsxs(
      kr,
      {
        onClick: g,
        title: d ? "Позвонить" : "Копировать номер",
        $clickable: !0,
        children: [
          o,
          !d && s && /* @__PURE__ */ t.jsx(jr, { children: "Скопировано!" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(Le, { children: "После звонка система автоматически подтвердит вашу авторизацию." }),
    r && /* @__PURE__ */ t.jsx(Cr, { children: r })
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
`, Le = n.p`
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
`, $r = We({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  selectedSideMenuItem: null,
  setSelectedSideMenuItem: () => {
  },
  selectedTopMenuItem: null,
  setSelectedTopMenuItem: () => {
  }
}), Sr = ({ collapsed: e }) => /* @__PURE__ */ t.jsx(
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
), ys = ({
  items: e,
  bottomItems: o = [],
  bottomContent: r,
  logo: i,
  arrowIcon: s,
  collapsed: c,
  onToggle: d,
  selectedKey: g,
  onSelect: v,
  autoCollapseOnSelect: b = !1,
  width: m = "315px",
  collapsedWidth: h = "85px",
  className: w,
  style: x,
  mobileBreakpoint: u = 768,
  showBottomLabels: l = !0,
  children: S
}) => {
  const j = Ne($r), [T, E] = I(window.innerWidth <= u);
  q(() => {
    const k = () => {
      E(window.innerWidth <= u);
    };
    return window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [u]);
  const [_, z] = I(
    c ?? j.collapsed ?? !1
  ), [C, N] = I(null), [R, A] = I(
    g ?? j.selectedSideMenuItem ?? null
  ), [W, O] = I({
    visible: !1,
    x: 0,
    y: 0,
    items: []
  }), y = Z(null), a = c ?? j.collapsed ?? _, $ = (k) => {
    z(k), j.toggleCollapsed(), d?.(k);
  }, f = g ?? j.selectedSideMenuItem ?? R, Y = (k) => {
    A(k), j.setSelectedSideMenuItem(k);
  };
  q(() => {
    c !== void 0 && (z(c), c && N(null));
  }, [c]), q(() => {
    g !== void 0 && Y(g);
  }, [g]), q(() => {
    const k = () => O((F) => ({ ...F, visible: !1 }));
    return document.addEventListener("click", k), () => document.removeEventListener("click", k);
  }, []);
  const V = () => {
    const k = !a;
    $(k), k && N(null);
  }, U = (k) => {
    k.disabled || k.hidden || (Y(k.key), v?.(k), k.onClick?.(k), b && ($(!0), N(null)));
  }, M = (k) => {
    N((F) => F === k ? null : k);
  }, L = (k, F) => {
    const P = (k.children?.length || 0) > 0;
    if (a && P) {
      F.stopPropagation();
      const H = F.currentTarget.getBoundingClientRect();
      O({
        visible: !0,
        x: H.right + 6,
        y: H.top,
        items: k.children || []
      });
      return;
    }
    P ? M(k.key) : U(k);
  }, p = (k, F = !1) => k.filter((P) => !P.hidden).map((P) => {
    const H = (P.children?.length || 0) > 0, J = C === P.key, ee = f === P.key || !!P.children && P.children.some((te) => te.key === f);
    return /* @__PURE__ */ t.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Ar,
        {
          $collapsed: a,
          $selected: ee,
          onClick: (te) => L(P, te),
          $disabled: P.disabled,
          title: P.label,
          children: [
            P.icon && /* @__PURE__ */ t.jsx(Or, { $collapsed: a, children: P.icon }),
            !a && /* @__PURE__ */ t.jsx(_r, { children: P.label }),
            !a && H && /* @__PURE__ */ t.jsx(Nr, { $expanded: J, children: "▾" })
          ]
        }
      ),
      !a && H && J && /* @__PURE__ */ t.jsx(Wr, { children: p(P.children || [], !0) })
    ] }, P.key);
  }), D = He(() => W.visible ? /* @__PURE__ */ t.jsx(Hr, { style: { left: W.x, top: W.y }, children: W.items.map((k) => /* @__PURE__ */ t.jsx(
    Yr,
    {
      onClick: () => {
        U(k), O({ visible: !1, x: 0, y: 0, items: [] });
      },
      $selected: f === k.key,
      children: k.label
    },
    k.key
  )) }) : null, [W, f]), B = () => {
    const k = [...e, ...o].filter((F) => !F.hidden);
    return /* @__PURE__ */ t.jsx(Lr, { children: k.map((F) => {
      const P = f === F.key;
      return /* @__PURE__ */ t.jsxs(
        Er,
        {
          $selected: P,
          onClick: () => U(F),
          $disabled: F.disabled,
          children: [
            F.icon && /* @__PURE__ */ t.jsx(Tr, { $selected: P, children: F.icon }),
            l && /* @__PURE__ */ t.jsx(Ir, { $selected: P, children: F.label })
          ]
        },
        F.key
      );
    }) });
  };
  return T ? /* @__PURE__ */ t.jsxs(Mr, { className: w, style: x, children: [
    /* @__PURE__ */ t.jsx(Dr, { children: S }),
    B()
  ] }) : /* @__PURE__ */ t.jsxs(
    Pr,
    {
      ref: y,
      $collapsed: a,
      $width: m,
      $collapsedWidth: h,
      className: w,
      style: x,
      children: [
        /* @__PURE__ */ t.jsxs(zr, { children: [
          /* @__PURE__ */ t.jsx(Rr, { onClick: V, "aria-label": "Переключить меню", children: s ?? /* @__PURE__ */ t.jsx(Sr, { collapsed: a }) }),
          !a && i && /* @__PURE__ */ t.jsx(Fr, { children: i })
        ] }),
        /* @__PURE__ */ t.jsxs(Br, { children: [
          /* @__PURE__ */ t.jsx(Ee, { children: p(e) }),
          o.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(Te, {}),
            /* @__PURE__ */ t.jsx(Ee, { children: p(o) })
          ] }),
          r && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            (o.length > 0 || e.length > 0) && /* @__PURE__ */ t.jsx(Te, {}),
            /* @__PURE__ */ t.jsx(Ur, { $collapsed: a, children: r })
          ] })
        ] }),
        D,
        /* @__PURE__ */ t.jsx(Vr, { $collapsed: a }),
        S
      ]
    }
  );
}, Mr = n.div`
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
`, Dr = n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`, Lr = n.nav`
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
`, Er = n.div`
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
`, Tr = n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
`, Ir = n.span`
  font-size: 12px;
  font-weight: ${({ $selected: e }) => e ? "600" : "400"};
  color: ${({ $selected: e }) => e ? "#000" : "#50555c"};
  text-align: center;
  white-space: nowrap;
`, Pr = n.div`
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
`, zr = n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`, Rr = n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`, Fr = n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`, Br = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`, Ee = n.div`
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
`, Ar = n.div`
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
`, _r = n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`, Or = n.div`
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
`, Wr = n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Nr = n.span`
  margin-left: auto;
  transform: rotate(${({ $expanded: e }) => e ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`, Te = n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`, Hr = n.div`
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
`, Vr = n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({ $collapsed: e }) => e ? 0 : 1};
`, Ur = n.div`
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
`, Zr = (e) => {
  const o = e.replace(/\D/g, ""), i = (o.startsWith("8") || o.length === 0 ? o : `8${o}`).slice(0, 11);
  let s = "";
  return i.length > 0 && (s += "8"), i.length > 1 && (s += ` (${i.slice(1, 4)}`), i.length > 4 && (s += `) ${i.slice(4, 7)}`), i.length > 7 && (s += `-${i.slice(7, 9)}`), i.length > 9 && (s += `-${i.slice(9, 11)}`), s;
}, qr = ({ value: e, onChange: o, placeholder: r = "8 (xxx) xxx-xx-xx", tabIndex: i }) => {
  const s = (c) => {
    const d = Zr(c.target.value);
    o(d);
  };
  return /* @__PURE__ */ t.jsx(Xr, { type: "text", value: e, onChange: s, placeholder: r, maxLength: 18, tabIndex: i });
}, Xr = n.input`
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
class Gr {
  /**
   * Создать подписку
   * @param tariffType - тип тарифа
   * @param days - количество дней (опционально)
   * @param ones - количество "ones" (опционально)
   * @returns Promise с данными подписки и ссылкой на оплату
   */
  async subscribe(o, r, i) {
    return K("/Pay/subscribe", {
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
    return o !== void 0 && (r.tariffType = o), K("/Pay/cancel", {
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
    return o !== void 0 && (r += `?tariffType=${o}`), K(r, {
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
const se = new Gr(), ks = ({
  paymentUrl: e,
  onPaymentComplete: o,
  expiresAt: r,
  status: i,
  tariffType: s,
  onCheckStatus: c
}) => {
  const [d, g] = I(1), [v, b] = I(!1), [m, h] = I(null), [w, x] = I(!1), [u, l] = I(null), [S, j] = I(i || "Pending"), T = Z(!1), E = Z(!0), _ = Z(null), z = Z(null), C = X((f) => {
    const Y = (/* @__PURE__ */ new Date()).getTime(), U = new Date(f).getTime() - Y;
    if (U <= 0)
      return "00:00";
    const M = Math.floor(U % (1e3 * 60 * 60) / (1e3 * 60)), L = Math.floor(U % (1e3 * 60) / 1e3);
    return `${M.toString().padStart(2, "0")}:${L.toString().padStart(2, "0")}`;
  }, []), N = X(() => {
    r && d === 1 && S === "Pending" && C(r) === "00:00" && (l("Время ожидания оплаты истекло"), z.current && (clearInterval(z.current), z.current = null));
  }, [r, d, S, C]), R = X(() => {
    !r || d !== 1 || S !== "Pending" || (N(), z.current && clearInterval(z.current), z.current = window.setInterval(() => {
      E.current && d === 1 && S === "Pending" && N();
    }, 1e3));
  }, [r, d, S, N]), A = X(() => {
    z.current && (clearInterval(z.current), z.current = null);
  }, []), W = X(() => {
    _.current && (clearInterval(_.current), _.current = null);
  }, []), O = X(async () => {
    if (T.current || d === 3 || S === "Active") {
      console.log("Пропуск проверки:", {
        isChecking: T.current,
        paymentStep: d,
        currentStatus: S
      });
      return;
    }
    try {
      if (T.current = !0, l(null), c) {
        const f = await c();
        f.success && f.status === "Active" ? (j("Active"), g(3), A(), W(), o && o()) : f.status === "Pending" ? (j("Pending"), g(1), f.transaction_status === "Authorized" && g(2)) : f.status === "Expired" && (j("Active"), g(3), A(), W(), o && o());
      }
    } catch (f) {
      console.error("Ошибка при проверке статуса:", f), l("Не удалось проверить статус оплаты");
    } finally {
      E.current && (T.current = !1);
    }
  }, [c, o, S, A, W]);
  q(() => {
    if (d === 3) {
      const f = setTimeout(() => {
        o && o();
      }, 2e3);
      return () => clearTimeout(f);
    }
  }, [d, o]);
  const y = X(() => {
    _.current || S === "Active" || (O(), _.current = window.setInterval(() => {
      E.current && S !== "Active" && O();
    }, 5e3));
  }, [O, S]);
  q(() => (E.current = !0, S === "Active" ? g(3) : S === "Pending" && (y(), R()), () => {
    E.current = !1, W(), A();
  }), [S, y, R, W, A]), q(() => {
    d === 1 && S === "Pending" ? R() : A();
  }, [d, S, R, A]);
  const a = (f) => d > f ? "completed" : d === f ? "current" : "pending", $ = async () => {
    try {
      await se.cancelSubscription(s), b(!0), h(null), W(), A(), window.location.reload();
    } catch (f) {
      console.error("Ошибка при отмене подписки:", f), h("Произошла ошибка при отмене подписки");
    } finally {
      b(!1), x(!1);
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
      !w && /* @__PURE__ */ t.jsx(
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
          onMouseEnter: (f) => {
            f.currentTarget.style.backgroundColor = "#f5f5f5", f.currentTarget.style.color = "#666";
          },
          onMouseLeave: (f) => {
            f.currentTarget.style.backgroundColor = "transparent", f.currentTarget.style.color = "#999";
          },
          children: "✕ Отменить"
        }
      ),
      w && /* @__PURE__ */ t.jsx("div", { style: {
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
        m && /* @__PURE__ */ t.jsx("div", { style: {
          backgroundColor: "#FFEBEE",
          color: "#F44336",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontSize: "14px"
        }, children: m }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }, children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: $,
              disabled: v,
              style: {
                width: "100%",
                backgroundColor: "#F44336",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: v ? "not-allowed" : "pointer",
                opacity: v ? 0.7 : 1,
                transition: "background-color 0.3s",
                minHeight: "48px"
              },
              onMouseEnter: (f) => {
                v || (f.currentTarget.style.backgroundColor = "#D32F2F");
              },
              onMouseLeave: (f) => {
                v || (f.currentTarget.style.backgroundColor = "#F44336");
              },
              children: v ? "Отмена..." : "Да, отменить"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => {
                x(!1), h(null);
              },
              disabled: v,
              style: {
                width: "100%",
                backgroundColor: "#f5f5f5",
                color: "#666",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: v ? "not-allowed" : "pointer",
                opacity: v ? 0.5 : 1,
                transition: "background-color 0.3s",
                minHeight: "48px"
              },
              onMouseEnter: (f) => {
                v || (f.currentTarget.style.backgroundColor = "#e0e0e0");
              },
              onMouseLeave: (f) => {
                v || (f.currentTarget.style.backgroundColor = "#f5f5f5");
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
          d === 1 && S === "Pending" && "Ожидание оплаты",
          d === 2 && "Подтверждение платежа",
          d === 3 && "Платёж завершён"
        ] }),
        /* @__PURE__ */ t.jsxs("p", { style: {
          color: "#666",
          fontSize: "15px",
          lineHeight: "1.5",
          padding: "0 12px",
          margin: 0
        }, children: [
          d === 1 && S === "Pending" && "Мы перенаправили вас на страницу оплаты. Пожалуйста, завершите платеж.",
          d === 2 && "Платёж обрабатывается банком. Обычно это занимает несколько секунд.",
          d === 3 && "Подписка успешно активирована! Спасибо за покупку."
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
          width: d === 1 ? "0%" : d === 2 ? "50%" : "100%",
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
              onMouseEnter: (f) => {
                f.currentTarget.style.backgroundColor = "#D1E9EB";
              },
              onMouseLeave: (f) => {
                f.currentTarget.style.backgroundColor = "#E8F4F5";
              },
              children: e
            }
          )
        ] }),
        d === 1 && /* @__PURE__ */ t.jsx("div", { style: {
          borderTop: "1px solid #E0E0E0",
          paddingTop: "16px"
        }, children: !w && /* @__PURE__ */ t.jsx(
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
            onMouseEnter: (f) => {
              f.currentTarget.style.backgroundColor = "#D32F2F";
            },
            onMouseLeave: (f) => {
              f.currentTarget.style.backgroundColor = "#F44336";
            },
            children: "✕ Отменить оформление"
          }
        ) })
      ] }),
      u && d !== 3 && S !== "Active" && /* @__PURE__ */ t.jsx("div", { style: {
        backgroundColor: "#FFEBEE",
        color: "#F44336",
        padding: "12px 16px",
        borderRadius: "8px",
        marginBottom: "16px",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "1.5"
      }, children: u }),
      d === 2 && /* @__PURE__ */ t.jsx("div", { style: {
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
      S === "Active" && d !== 3 && /* @__PURE__ */ t.jsx("div", { style: {
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
}, Jr = (e = {}) => {
  const {
    tariffType: o,
    autoRedirect: r = !1,
    onSuccess: i,
    onCancel: s,
    onError: c
  } = e, [d, g] = I(!1), [v, b] = I(!1), [m, h] = I(!1), [w, x] = I(!1), [u, l] = I(null), [S, j] = I(null), [T, E] = I(null), [_, z] = I(null), [C, N] = I(!1), R = X(async (y, a, $) => {
    b(!0), g(!0), l(null), j(null);
    try {
      const f = await se.subscribe(y, a, $);
      return j(f), r && f.paymentUrl && (window.location.href = f.paymentUrl), i?.(f), f;
    } catch (f) {
      const Y = f instanceof Error ? f.message : "Unknown error occurred";
      return l(Y), c?.(Y), null;
    } finally {
      b(!1), g(!1);
    }
  }, [r, i, c]), A = X(async (y) => {
    h(!0), g(!0), l(null), E(null);
    try {
      const a = y ?? o, $ = await se.cancelSubscription(a);
      return E($), s?.($), $;
    } catch (a) {
      const $ = a instanceof Error ? a.message : "Unknown error occurred";
      return l($), c?.($), null;
    } finally {
      h(!1), g(!1);
    }
  }, [o, s, c]), W = X(async (y) => {
    x(!0), l(null);
    try {
      const a = y ?? o, $ = await se.getSubscriptionInfo(a);
      return z($), N($.isActive), $;
    } catch (a) {
      const $ = a instanceof Error ? a.message : "Unknown error occurred";
      return l($), c?.($), null;
    } finally {
      x(!1);
    }
  }, [o, c]), O = X(() => {
    g(!1), b(!1), h(!1), x(!1), l(null), j(null), E(null), z(null), N(!1);
  }, []);
  return {
    isLoading: d,
    isSubscribing: v,
    isCancelling: m,
    isFetchingStatus: w,
    error: u,
    subscriptionData: S,
    cancelData: T,
    statusData: _,
    isActive: C,
    subscribe: R,
    cancelSubscription: A,
    getSubscriptionStatus: W,
    resetState: O
  };
}, Kr = [
  { id: 1, days: 30, label: "1 месяц", price: 4999 },
  { id: 2, days: 90, label: "3 месяца", price: 14999 },
  { id: 3, days: 180, label: "6 месяцев", price: 29999 },
  { id: 4, days: 365, label: "1 год", price: 59999, popular: !0 }
], Qr = [
  { id: 1, ones: 1, label: "Разовый доступ", price: 999, description: "1 разовое использование" },
  { id: 2, ones: 5, label: "Пакет 5 раз", price: 4499, description: "5 разовых использований", popular: !0 },
  { id: 3, ones: 10, label: "Пакет 10 раз", price: 8499, description: "10 разовых использований" },
  { id: 4, ones: 20, label: "Пакет 20 раз", price: 15999, description: "20 разовых использований" }
], js = ({
  tariffType: e = "WaypayCrm",
  subscriptionType: o = "days",
  plans: r,
  onPaymentSuccess: i,
  onError: s,
  autoRedirect: c = !0,
  buttonText: d = "Оформить",
  loadingText: g = "Обработка...",
  showSelectedIndicator: v = !0,
  className: b,
  title: m = "Подписка",
  subTitle: h = "WayPay CRM"
}) => {
  const [w, x] = I(null), u = r || (o === "days" ? Kr : Qr), { isLoading: l, error: S, subscribe: j, resetState: T } = Jr({
    tariffType: e,
    autoRedirect: c,
    onSuccess: (C) => {
      c && C.paymentUrl && (window.location.href = C.paymentUrl), i?.();
    },
    onError: (C) => {
      s?.(C);
    }
  });
  G.useEffect(() => {
    if (!w && u.length > 0) {
      const C = u.find((N) => N.popular) || u[0];
      x(C);
    }
  }, [u, w]);
  const E = async () => {
    if (!w) {
      s?.("Выберите тарифный план");
      return;
    }
    const C = o === "days" ? w.days : void 0, N = o === "ones" ? w.ones : void 0;
    await j(e, C, N);
  }, _ = (C) => new Intl.NumberFormat("ru-RU").format(C), z = (C) => o === "days" ? C.days : C.ones;
  return /* @__PURE__ */ t.jsxs(ei, { className: b, children: [
    /* @__PURE__ */ t.jsxs(ti, { children: [
      /* @__PURE__ */ t.jsx(ni, { children: m }),
      /* @__PURE__ */ t.jsx(oi, { children: h })
    ] }),
    (S || typeof S == "string" && S) && /* @__PURE__ */ t.jsxs(xi, { children: [
      /* @__PURE__ */ t.jsx("span", { children: S }),
      /* @__PURE__ */ t.jsx(hi, { onClick: T, children: "×" })
    ] }),
    /* @__PURE__ */ t.jsx(ri, { children: u.map((C) => {
      const N = z(C), R = w?.id === C.id;
      return /* @__PURE__ */ t.jsxs(
        ii,
        {
          $isSelected: R,
          $isPopular: !!C.popular,
          onClick: () => x(C),
          children: [
            /* @__PURE__ */ t.jsxs(si, { children: [
              /* @__PURE__ */ t.jsxs(ai, { children: [
                C.label,
                C.popular && /* @__PURE__ */ t.jsx(li, { children: "Популярный" })
              ] }),
              C.description && /* @__PURE__ */ t.jsx(ci, { children: C.description }),
              N !== void 0 && o === "days" && /* @__PURE__ */ t.jsxs(Ie, { children: [
                N,
                " дней"
              ] }),
              N !== void 0 && o === "ones" && /* @__PURE__ */ t.jsxs(Ie, { children: [
                N,
                " шт."
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs(di, { children: [
              _(C.price),
              " ₽"
            ] }),
            v && R && /* @__PURE__ */ t.jsx(pi, {})
          ]
        },
        C.id
      );
    }) }),
    /* @__PURE__ */ t.jsx(ui, { onClick: E, disabled: l, children: l ? g : d })
  ] });
}, ei = n.div`
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
`, ti = n.div`
  margin-bottom: 28px;
  text-align: center;
`, ni = n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`, oi = n.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0;
`, ri = n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`, ii = n.div`
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
`, si = n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`, ai = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`, li = n.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`, ci = n.div`
  font-size: 12px;
  color: #8c8c8c;
`, Ie = n.div`
  font-size: 11px;
  color: #007D88;
  font-weight: 500;
`, di = n.span`
  font-size: 16px;
  font-weight: 600;
  color: #007D88;
`, pi = n.div`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #007D88 transparent transparent;
  border-radius: 0 12px 0 0;
`, ui = n.button`
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
`, xi = n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fee;
  color: #e53935;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 13px;
`, hi = n.button`
  background: none;
  border: none;
  color: #e53935;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
`, gi = (e) => ({
  call_phone: e.call_phone ?? e.callPhone,
  check_id: e.check_id ?? e.checkId,
  name_required: e.name_required ?? e.nameRequired
}), fi = async (e, o) => {
  const i = await K("/auth/call/initiate", {
    method: "POST",
    body: {
      phone: e,
      user_type: o
    }
  });
  return gi(i);
}, bi = (e, o, r, i) => K("/auth/call/confirm", {
  method: "POST",
  body: {
    phone: e,
    check_id: o,
    checkId: o,
    user_type: r,
    userType: r,
    name: i
  }
}), Cs = () => K("/auth/session/info", { method: "GET" }), mi = ({
  isOpen: e,
  onClose: o,
  onSubmit: r,
  error: i,
  isLoading: s = !1
}) => {
  const [c, d] = I("");
  if (!e) return null;
  const g = (v) => {
    v.preventDefault(), r(c);
  };
  return /* @__PURE__ */ t.jsx(wi, { onClick: o, children: /* @__PURE__ */ t.jsx(vi, { onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ t.jsxs(yi, { onSubmit: g, children: [
    /* @__PURE__ */ t.jsx(ki, { children: "Как вас зовут?" }),
    /* @__PURE__ */ t.jsxs(ji, { children: [
      /* @__PURE__ */ t.jsx(
        Fe,
        {
          type: "text",
          value: c,
          onChange: (v) => d(v.target.value),
          placeholder: "Иванов Иван Иванович",
          disabled: s,
          autoFocus: !0,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ t.jsx(
        Ci,
        {
          type: "submit",
          disabled: s || !c.trim(),
          children: s ? "..." : "→"
        }
      )
    ] }),
    i && /* @__PURE__ */ t.jsx($i, { children: i })
  ] }) }) });
}, wi = n.div`
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
`, vi = n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`, yi = n.form`
  display: flex;
  flex-direction: column;
`, ki = n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`, ji = n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`, Ci = n(de)`
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
`, $i = n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`, $s = ({
  onLoginSuccess: e,
  userType: o = "delivery_operator",
  title: r = "Авторизация",
  submitLabel: i = "Войти",
  placeholder: s = "8 (xxx) xxx-xx-xx",
  supportPhone: c = "8 989 924 24 24",
  supportLinkUrl: d = "https://waypay.one",
  supportLinkText: g = "waypay.one",
  className: v,
  style: b,
  pollingIntervalMs: m = 3e3,
  enableRegistration: h = !1,
  enableSupport: w = !0
}) => {
  const [x, u] = I(!1), [l, S] = I(""), [j, T] = I(!1), [E, _] = I(""), [z, C] = I(""), [N, R] = I(!1), [A, W] = I(!1), [O, y] = I(""), [a, $] = I(""), [f, Y] = I(null), V = Z(void 0);
  q(() => () => {
    V.current && clearInterval(V.current);
  }, []);
  const U = (k) => {
    const F = k.replace(/\D/g, "");
    return F ? F.startsWith("8") ? `+7${F.slice(1)}` : F.startsWith("7") ? `+${F}` : `+${F}` : "";
  }, M = () => {
    T(!1), W(!1), y(""), $(""), Y(null), V.current && window.clearInterval(V.current);
  }, L = async (k) => {
    if (k.preventDefault(), !l) {
      C("Введите номер телефона");
      return;
    }
    u(!0), C("");
    const F = U(l);
    try {
      const P = await fi(F, o);
      Y({
        phone: F,
        checkId: P.check_id,
        callPhone: P.call_phone
      }), h && "name_required" in P && P.name_required ? (W(!0), _(P.call_phone)) : !h && "name_required" in P && P.name_required ? (C(
        "Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."
      ), Y(null)) : (_(P.call_phone), T(!0), D(F, P.check_id));
    } catch (P) {
      console.error("Auth error:", P), P && P.response && P.response.data ? C(P.response.data) : P instanceof Error ? C(P.message) : C("Произошла ошибка при авторизации");
    } finally {
      u(!1);
    }
  }, p = async (k) => {
    if (!k.trim()) {
      $("Введите ФИО");
      return;
    }
    if (f) {
      u(!0), $("");
      try {
        y(k), W(!1), T(!0), D(f.phone, f.checkId, k);
      } catch (F) {
        console.error("Registration error:", F), $("Не удалось завершить регистрацию");
      } finally {
        u(!1);
      }
    }
  }, D = (k, F, P) => {
    V.current && window.clearInterval(V.current), V.current = window.setInterval(() => {
      B(k, F, P);
    }, m);
  }, B = async (k, F, P) => {
    if (!N) {
      R(!0);
      try {
        const H = await bi(k, F, o, P || O);
        (H.access_token && H.refresh_token || H.accessToken && H.refreshToken) && (V.current && window.clearInterval(V.current), T(!1), W(!1), y(""), Y(null), e(H.access_token ?? H.accessToken));
      } catch (H) {
        console.error("Verification error:", H);
      } finally {
        R(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsxs(Si, { className: v, style: b, children: [
    /* @__PURE__ */ t.jsxs(Mi, { children: [
      /* @__PURE__ */ t.jsxs(Di, { onSubmit: L, children: [
        /* @__PURE__ */ t.jsx(Li, { children: r }),
        /* @__PURE__ */ t.jsx(Ei, { children: /* @__PURE__ */ t.jsx(Ti, { children: /* @__PURE__ */ t.jsx(
          qr,
          {
            value: l,
            onChange: (k) => S(k),
            placeholder: s
          }
        ) }) }),
        z && /* @__PURE__ */ t.jsx(Fi, { children: /* @__PURE__ */ t.jsx("span", { children: z }) }),
        /* @__PURE__ */ t.jsx(Ii, { type: "submit", disabled: x, children: x ? "Загрузка..." : i })
      ] }),
      w && /* @__PURE__ */ t.jsxs(Pi, { children: [
        "Хотите получить доступ к нашим продуктам?",
        /* @__PURE__ */ t.jsx("br", {}),
        "Обратитесь по номеру",
        " ",
        /* @__PURE__ */ t.jsx(zi, { href: `tel:${c}`, children: c }),
        /* @__PURE__ */ t.jsx("br", {}),
        "или оставьте заявку на",
        " ",
        /* @__PURE__ */ t.jsx(Ri, { href: d, target: "_blank", rel: "noreferrer", children: g })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      mi,
      {
        isOpen: A,
        onClose: M,
        onSubmit: p,
        error: a,
        isLoading: x
      }
    ),
    /* @__PURE__ */ t.jsx(
      mr,
      {
        isOpen: j,
        onClose: M,
        callPhone: E,
        error: z
      }
    )
  ] });
}, Si = n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`, Mi = n.div`
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
`, Di = n.form`
  display: flex;
  flex-direction: column;
`, Li = n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`, Ei = n.div`
  margin-bottom: 25px;
`, Ti = n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ii = n.button`
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
`, Pi = n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`, zi = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Ri = n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`, Fi = n.div`
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
`, Bi = (e) => {
  let o = 0;
  for (let i = 0; i < e.length; i++)
    o = e.charCodeAt(i) + ((o << 5) - o);
  return `hsl(${Math.abs(o % 360)}, 60%, 60%)`;
}, Ss = (e) => !e || !e.trim() ? "?" : e.split(" ").filter((i) => i.length > 0).map((i) => i[0].toUpperCase()).join("").slice(0, 2) || "?", Ms = (e, o = 100) => {
  const r = document.createElement("canvas");
  r.width = o, r.height = o;
  const i = r.getContext("2d");
  if (!i) return "";
  const s = Bi(e);
  i.fillStyle = s, i.beginPath(), i.arc(o / 2, o / 2, o / 2, 0, Math.PI * 2), i.fill(), i.fillStyle = "#ffffff";
  const c = o / 2;
  i.font = `bold ${c}px "Manrope", Arial, sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
  const d = c * 0.1;
  return i.fillText(e, o / 2, o / 2 + d), r.toDataURL("image/png");
}, Ds = (e) => {
  if (!e) return "";
  const o = typeof e == "string" ? new Date(e) : e;
  if (isNaN(o.getTime())) return "";
  const r = o.getDate().toString().padStart(2, "0"), i = (o.getMonth() + 1).toString().padStart(2, "0"), s = o.getFullYear();
  return `${r}-${i}-${s}`;
};
function Ls(e) {
  return new Date(e);
}
const Ai = (e) => {
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
      const m = Math.floor((o.getTime() - r.getTime()) / 1e3), h = Math.floor(m / 60), w = Math.floor(h / 60), x = Math.floor(w / 24);
      return m < 10 ? "скоро" : m < 60 ? `через ${m} секунд` : h === 1 ? "через минуту" : h < 60 ? `через ${h} минут` : w === 1 ? "через час" : w < 24 ? `через ${w} часов` : x === 1 ? "завтра" : x < 7 ? `через ${x} дней` : "в будущем";
    }
    const i = Math.floor((r.getTime() - o.getTime()) / 1e3), s = Math.floor(i / 60), c = Math.floor(s / 60), d = Math.floor(c / 24), g = Math.floor(d / 7), v = Math.floor(d / 30), b = Math.floor(d / 365);
    if (i < 10)
      return "только что";
    if (i < 60) {
      const m = Math.max(1, i);
      return m === 1 ? "секунду назад" : m < 5 ? `${m} секунды назад` : `${m} секунд назад`;
    }
    return s < 60 ? s === 1 ? "минуту назад" : s < 5 ? `${s} минуты назад` : `${s} минут назад` : c < 24 ? c === 1 ? "час назад" : c < 5 ? `${c} часа назад` : `${c} часов назад` : d < 7 ? d === 1 ? "вчера" : d === 2 ? "позавчера" : `${d} дня назад` : g < 4 ? g === 1 ? "неделю назад" : g < 5 ? `${g} недели назад` : `${g} недель назад` : v < 12 ? v === 1 ? "месяц назад" : v < 5 ? `${v} месяца назад` : `${v} месяцев назад` : b === 1 ? "год назад" : b < 5 ? `${b} года назад` : `${b} лет назад`;
  } catch (r) {
    return console.error("Ошибка форматирования относительного времени:", r), "ошибка даты";
  }
}, _i = (e) => {
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
}, Es = (e, o = {}) => {
  const { useExactAfterMonths: r = 6, includeTime: i = !0 } = o, s = new Date(e);
  return isNaN(s.getTime()), Math.floor(((/* @__PURE__ */ new Date()).getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 30)) >= r ? i ? _i(s) : s.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }) : Ai(s);
};
export {
  ce as API_BASE_URL,
  Yi as AddButton,
  mr as AuthCallModal,
  $s as AuthPage,
  Vi as BASE_URL,
  Xi as BackButton,
  hn as BaseModal,
  es as Checkbox,
  ms as ColumnChart,
  Pe as ContextMenu,
  ds as CountInfoTitle,
  be as CustomCalendar,
  Fe as CustomInput,
  qr as CustomPhoneInput,
  Qi as CustomSelect,
  Hi as CustomTable,
  is as CustomTextArea,
  Oe as CustomTitle,
  de as DefaultButton,
  Gi as DeleteButton,
  Ji as EditButton,
  cs as EntitySelectContainer,
  Ki as ExportButton,
  Ui as FILE_BASE_URL,
  os as InputContainer,
  ns as InputLabel,
  ts as InputRow,
  ps as InputTitle,
  us as ModalInfoTitle,
  rs as Pagination,
  ss as PeriodField,
  as as PhoneModalInput,
  vs as PhotoViewerModal,
  gs as ProgressBar,
  hs as RadioButton,
  ws as ScatterPlot,
  ys as SideMenu,
  $r as SideMenuContext,
  js as SubscriptionBlock,
  ks as SubscriptionPendingPage,
  ls as Tabs,
  _e as TitleField,
  xs as ToggleSwitch,
  fs as YandexMapSelector,
  K as apiRequest,
  qi as authStorage,
  bi as confirmCallAuth,
  Zi as downloadFile,
  Ds as formatDate,
  _i as formatExactDate,
  Se as formatMoney,
  Ai as formatRelativeTime,
  Es as formatRelativeTimeExtended,
  Ms as generateAvatar,
  Ss as getInitials,
  Cs as getSessionInfo,
  fi as initiateCallAuth,
  Ls as parseDateInput,
  bs as parseMoney,
  ze as refreshAccessToken,
  Bi as stringToColor,
  Jr as useSubscription
};
