import $e, { useState as ce, useRef as we, useEffect as ke, useLayoutEffect as We } from "react";
import { Search as Ue, X as ye, Check as Be, ChevronDown as Je } from "lucide-react";
import { createPortal as Xe } from "react-dom";
import { motion as qe, AnimatePresence as He } from "framer-motion";
var de = { exports: {} }, ne = {};
var ve;
function Ze() {
  if (ve) return ne;
  ve = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(o, s, d) {
    var l = null;
    if (d !== void 0 && (l = "" + d), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      d = {};
      for (var p in s)
        p !== "key" && (d[p] = s[p]);
    } else d = s;
    return s = d.ref, {
      $$typeof: e,
      type: o,
      key: l,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return ne.Fragment = n, ne.jsx = r, ne.jsxs = r, ne;
}
var se = {};
var Re;
function Qe() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === B ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case R:
          return "Fragment";
        case D:
          return "Profiler";
        case z:
          return "StrictMode";
        case M:
          return "Suspense";
        case F:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case v:
            return "Portal";
          case _:
            return t.displayName || "Context";
          case N:
            return (t._context.displayName || "Context") + ".Consumer";
          case O:
            var b = t.render;
            return t = t.displayName, t || (t = b.displayName || b.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case f:
            return b = t.displayName || null, b !== null ? b : e(t.type) || "Memo";
          case A:
            b = t._payload, t = t._init;
            try {
              return e(t(b));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function r(t) {
      try {
        n(t);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var h = b.error, w = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), n(t);
      }
    }
    function o(t) {
      if (t === R) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === A)
        return "<...>";
      try {
        var b = e(t);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = Y.A;
      return t === null ? null : t.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function l(t) {
      if (J.call(t, "key")) {
        var b = Object.getOwnPropertyDescriptor(t, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function p(t, b) {
      function h() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: h,
        configurable: !0
      });
    }
    function m() {
      var t = e(this.type);
      return u[t] || (u[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function k(t, b, h, w, $, K) {
      var x = h.ref;
      return t = {
        $$typeof: L,
        type: t,
        key: b,
        props: h,
        _owner: w
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function E(t, b, h, w, $, K) {
      var x = b.children;
      if (x !== void 0)
        if (w)
          if (H(x)) {
            for (w = 0; w < x.length; w++)
              j(x[w]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(x);
      if (J.call(b, "key")) {
        x = e(t);
        var W = Object.keys(b).filter(function(ee) {
          return ee !== "key";
        });
        w = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", Z[x + w] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          x,
          W,
          x
        ), Z[x + w] = !0);
      }
      if (x = null, h !== void 0 && (r(h), x = "" + h), l(b) && (r(b.key), x = "" + b.key), "key" in b) {
        h = {};
        for (var X in b)
          X !== "key" && (h[X] = b[X]);
      } else h = b;
      return x && p(
        h,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), k(
        t,
        x,
        h,
        s(),
        $,
        K
      );
    }
    function j(t) {
      T(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === A && (t._payload.status === "fulfilled" ? T(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function T(t) {
      return typeof t == "object" && t !== null && t.$$typeof === L;
    }
    var C = $e, L = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), z = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), Y = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, H = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var P, u = {}, a = C.react_stack_bottom_frame.bind(
      C,
      d
    )(), I = G(o(d)), Z = {};
    se.Fragment = R, se.jsx = function(t, b, h) {
      var w = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return E(
        t,
        b,
        h,
        !1,
        w ? Error("react-stack-top-frame") : a,
        w ? G(o(t)) : I
      );
    }, se.jsxs = function(t, b, h) {
      var w = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return E(
        t,
        b,
        h,
        !0,
        w ? Error("react-stack-top-frame") : a,
        w ? G(o(t)) : I
      );
    };
  })()), se;
}
var Ee;
function Ke() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? de.exports = Ze() : de.exports = Qe()), de.exports;
}
var y = Ke();
function Ce(e) {
  var n, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (r = Ce(e[n])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function er() {
  for (var e, n, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (n = Ce(e)) && (o && (o += " "), o += n);
  return o;
}
const rr = (e, n) => {
  const r = new Array(e.length + n.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < n.length; o++)
    r[e.length + o] = n[o];
  return r;
}, tr = (e, n) => ({
  classGroupId: e,
  validator: n
}), ze = (e = /* @__PURE__ */ new Map(), n = null, r) => ({
  nextPart: e,
  validators: n,
  classGroupId: r
}), fe = "-", Ae = [], or = "arbitrary..", nr = (e) => {
  const n = ar(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return sr(l);
      const p = l.split(fe), m = p[0] === "" && p.length > 1 ? 1 : 0;
      return Ne(p, m, n);
    },
    getConflictingClassGroupIds: (l, p) => {
      if (p) {
        const m = o[l], k = r[l];
        return m ? k ? rr(k, m) : m : k || Ae;
      }
      return r[l] || Ae;
    }
  };
}, Ne = (e, n, r) => {
  if (e.length - n === 0)
    return r.classGroupId;
  const s = e[n], d = r.nextPart.get(s);
  if (d) {
    const k = Ne(e, n + 1, d);
    if (k) return k;
  }
  const l = r.validators;
  if (l === null)
    return;
  const p = n === 0 ? e.join(fe) : e.slice(n).join(fe), m = l.length;
  for (let k = 0; k < m; k++) {
    const E = l[k];
    if (E.validator(p))
      return E.classGroupId;
  }
}, sr = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), r = n.indexOf(":"), o = n.slice(0, r);
  return o ? or + o : void 0;
})(), ar = (e) => {
  const {
    theme: n,
    classGroups: r
  } = e;
  return lr(r, n);
}, lr = (e, n) => {
  const r = ze();
  for (const o in e) {
    const s = e[o];
    xe(s, r, o, n);
  }
  return r;
}, xe = (e, n, r, o) => {
  const s = e.length;
  for (let d = 0; d < s; d++) {
    const l = e[d];
    ir(l, n, r, o);
  }
}, ir = (e, n, r, o) => {
  if (typeof e == "string") {
    cr(e, n, r);
    return;
  }
  if (typeof e == "function") {
    dr(e, n, r, o);
    return;
  }
  ur(e, n, r, o);
}, cr = (e, n, r) => {
  const o = e === "" ? n : Pe(n, e);
  o.classGroupId = r;
}, dr = (e, n, r, o) => {
  if (mr(e)) {
    xe(e(o), n, r, o);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(tr(r, e));
}, ur = (e, n, r, o) => {
  const s = Object.entries(e), d = s.length;
  for (let l = 0; l < d; l++) {
    const [p, m] = s[l];
    xe(m, Pe(n, p), r, o);
  }
}, Pe = (e, n) => {
  let r = e;
  const o = n.split(fe), s = o.length;
  for (let d = 0; d < s; d++) {
    const l = o[d];
    let p = r.nextPart.get(l);
    p || (p = ze(), r.nextPart.set(l, p)), r = p;
  }
  return r;
}, mr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, fr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const s = (d, l) => {
    r[d] = l, n++, n > e && (n = 0, o = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(d) {
      let l = r[d];
      if (l !== void 0)
        return l;
      if ((l = o[d]) !== void 0)
        return s(d, l), l;
    },
    set(d, l) {
      d in r ? r[d] = l : s(d, l);
    }
  };
}, he = "!", Se = ":", pr = [], _e = (e, n, r, o, s) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: s
}), br = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: r
  } = e;
  let o = (s) => {
    const d = [];
    let l = 0, p = 0, m = 0, k;
    const E = s.length;
    for (let v = 0; v < E; v++) {
      const R = s[v];
      if (l === 0 && p === 0) {
        if (R === Se) {
          d.push(s.slice(m, v)), m = v + 1;
          continue;
        }
        if (R === "/") {
          k = v;
          continue;
        }
      }
      R === "[" ? l++ : R === "]" ? l-- : R === "(" ? p++ : R === ")" && p--;
    }
    const j = d.length === 0 ? s : s.slice(m);
    let T = j, C = !1;
    j.endsWith(he) ? (T = j.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      j.startsWith(he) && (T = j.slice(1), C = !0)
    );
    const L = k && k > m ? k - m : void 0;
    return _e(d, C, T, L);
  };
  if (n) {
    const s = n + Se, d = o;
    o = (l) => l.startsWith(s) ? d(l.slice(s.length)) : _e(pr, !1, l, void 0, !0);
  }
  if (r) {
    const s = o;
    o = (d) => r({
      className: d,
      parseClassName: s
    });
  }
  return o;
}, gr = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, o) => {
    n.set(r, 1e6 + o);
  }), (r) => {
    const o = [];
    let s = [];
    for (let d = 0; d < r.length; d++) {
      const l = r[d], p = l[0] === "[", m = n.has(l);
      p || m ? (s.length > 0 && (s.sort(), o.push(...s), s = []), o.push(l)) : s.push(l);
    }
    return s.length > 0 && (s.sort(), o.push(...s)), o;
  };
}, hr = (e) => ({
  cache: fr(e.cacheSize),
  parseClassName: br(e),
  sortModifiers: gr(e),
  ...nr(e)
}), xr = /\s+/, wr = (e, n) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: d
  } = n, l = [], p = e.trim().split(xr);
  let m = "";
  for (let k = p.length - 1; k >= 0; k -= 1) {
    const E = p[k], {
      isExternal: j,
      modifiers: T,
      hasImportantModifier: C,
      baseClassName: L,
      maybePostfixModifierPosition: v
    } = r(E);
    if (j) {
      m = E + (m.length > 0 ? " " + m : m);
      continue;
    }
    let R = !!v, z = o(R ? L.substring(0, v) : L);
    if (!z) {
      if (!R) {
        m = E + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (z = o(L), !z) {
        m = E + (m.length > 0 ? " " + m : m);
        continue;
      }
      R = !1;
    }
    const D = T.length === 0 ? "" : T.length === 1 ? T[0] : d(T).join(":"), N = C ? D + he : D, _ = N + z;
    if (l.indexOf(_) > -1)
      continue;
    l.push(_);
    const O = s(z, R);
    for (let M = 0; M < O.length; ++M) {
      const F = O[M];
      l.push(N + F);
    }
    m = E + (m.length > 0 ? " " + m : m);
  }
  return m;
}, kr = (...e) => {
  let n = 0, r, o, s = "";
  for (; n < e.length; )
    (r = e[n++]) && (o = Oe(r)) && (s && (s += " "), s += o);
  return s;
}, Oe = (e) => {
  if (typeof e == "string")
    return e;
  let n, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (n = Oe(e[o])) && (r && (r += " "), r += n);
  return r;
}, yr = (e, ...n) => {
  let r, o, s, d;
  const l = (m) => {
    const k = n.reduce((E, j) => j(E), e());
    return r = hr(k), o = r.cache.get, s = r.cache.set, d = p, p(m);
  }, p = (m) => {
    const k = o(m);
    if (k)
      return k;
    const E = wr(m, r);
    return s(m, E), E;
  };
  return d = l, (...m) => d(kr(...m));
}, vr = [], S = (e) => {
  const n = (r) => r[e] || vr;
  return n.isThemeGetter = !0, n;
}, Ie = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Me = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Rr = /^\d+\/\d+$/, Er = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ar = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _r = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, re = (e) => Rr.test(e), g = (e) => !!e && !Number.isNaN(Number(e)), q = (e) => !!e && Number.isInteger(Number(e)), be = (e) => e.endsWith("%") && g(e.slice(0, -1)), U = (e) => Er.test(e), Tr = () => !0, Cr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ar.test(e) && !Sr.test(e)
), Le = () => !1, zr = (e) => _r.test(e), Nr = (e) => jr.test(e), Pr = (e) => !i(e) && !c(e), Or = (e) => te(e, De, Le), i = (e) => Ie.test(e), Q = (e) => te(e, Ve, Cr), ge = (e) => te(e, Fr, g), je = (e) => te(e, Ge, Le), Ir = (e) => te(e, Fe, Nr), ue = (e) => te(e, Ye, zr), c = (e) => Me.test(e), ae = (e) => oe(e, Ve), Mr = (e) => oe(e, Dr), Te = (e) => oe(e, Ge), Lr = (e) => oe(e, De), Gr = (e) => oe(e, Fe), me = (e) => oe(e, Ye, !0), te = (e, n, r) => {
  const o = Ie.exec(e);
  return o ? o[1] ? n(o[1]) : r(o[2]) : !1;
}, oe = (e, n, r = !1) => {
  const o = Me.exec(e);
  return o ? o[1] ? n(o[1]) : r : !1;
}, Ge = (e) => e === "position" || e === "percentage", Fe = (e) => e === "image" || e === "url", De = (e) => e === "length" || e === "size" || e === "bg-size", Ve = (e) => e === "length", Fr = (e) => e === "number", Dr = (e) => e === "family-name", Ye = (e) => e === "shadow", Vr = () => {
  const e = S("color"), n = S("font"), r = S("text"), o = S("font-weight"), s = S("tracking"), d = S("leading"), l = S("breakpoint"), p = S("container"), m = S("spacing"), k = S("radius"), E = S("shadow"), j = S("inset-shadow"), T = S("text-shadow"), C = S("drop-shadow"), L = S("blur"), v = S("perspective"), R = S("aspect"), z = S("ease"), D = S("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], O = () => [..._(), c, i], M = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", "contain", "none"], f = () => [c, i, m], A = () => [re, "full", "auto", ...f()], V = () => [q, "none", "subgrid", c, i], B = () => ["auto", {
    span: ["full", q, c, i]
  }, q, c, i], Y = () => [q, "auto", c, i], J = () => ["auto", "min", "max", "fr", c, i], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...f()], u = () => [re, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...f()], a = () => [e, c, i], I = () => [..._(), Te, je, {
    position: [c, i]
  }], Z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], t = () => ["auto", "cover", "contain", Lr, Or, {
    size: [c, i]
  }], b = () => [be, ae, Q], h = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    k,
    c,
    i
  ], w = () => ["", g, ae, Q], $ = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], x = () => [g, be, Te, je], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    L,
    c,
    i
  ], X = () => ["none", g, c, i], ee = () => ["none", g, c, i], pe = () => [g, c, i], ie = () => [re, "full", ...f()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [U],
      breakpoint: [U],
      color: [Tr],
      container: [U],
      "drop-shadow": [U],
      ease: ["in", "out", "in-out"],
      font: [Pr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [U],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [U],
      shadow: [U],
      spacing: ["px", g],
      text: [U],
      "text-shadow": [U],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", re, i, c, R]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [g, i, c, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": N()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": N()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: O()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [q, "auto", c, i]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [re, "full", "auto", p, ...f()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [g, re, "auto", "initial", "none", i]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", g, c, i]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", g, c, i]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [q, "first", "last", "none", c, i]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": J()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": J()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: f()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": f()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": f()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: f()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: f()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: f()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: f()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: f()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: f()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: f()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: f()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: f()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": f()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": f()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: u()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...u()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...u()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...u()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...u()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...u()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...u()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ae, Q]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, c, ge]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", be, i]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mr, i, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, c, i]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [g, "none", c, ge]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          d,
          ...f()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", c, i]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", c, i]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: a()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: a()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [g, "from-font", "auto", c, Q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: a()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [g, "auto", c, i]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: f()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", c, i]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", c, i]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: I()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: t()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, q, c, i],
          radial: ["", c, i],
          conic: [q, c, i]
        }, Gr, Ir]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: a()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: b()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: a()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: a()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: a()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: h()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": h()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": h()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": h()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": h()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": h()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": h()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": h()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": h()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": h()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": h()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": h()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": h()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": h()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": h()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: w()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": w()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": w()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": w()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": w()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": w()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": w()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": w()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": w()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": w()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": w()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: a()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": a()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": a()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": a()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": a()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": a()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": a()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": a()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": a()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: a()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [g, c, i]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", g, ae, Q]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: a()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          E,
          me,
          ue
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: a()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", j, me, ue]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": a()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: w()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: a()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [g, Q]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": a()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": w()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": a()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", T, me, ue]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": a()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g, c, i]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [g]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": x()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": x()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": a()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": a()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": x()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": x()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": a()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": a()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": x()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": x()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": a()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": a()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": x()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": x()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": a()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": a()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": x()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": x()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": a()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": a()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": x()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": x()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": a()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": a()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": x()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": x()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": a()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": a()
      }],
      "mask-image-radial": [{
        "mask-radial": [c, i]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": x()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": x()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": a()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": a()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [g]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": x()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": x()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": a()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": a()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: I()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: t()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", c, i]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          c,
          i
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [g, c, i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g, c, i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          C,
          me,
          ue
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": a()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", g, c, i]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g, c, i]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", g, c, i]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g, c, i]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", g, c, i]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          c,
          i
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [g, c, i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g, c, i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", g, c, i]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g, c, i]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", g, c, i]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g, c, i]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g, c, i]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", g, c, i]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": f()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": f()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": f()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", c, i]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [g, "initial", c, i]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", z, c, i]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [g, c, i]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", D, c, i]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, c, i]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": O()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [c, i, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: O()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ie()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ie()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ie()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ie()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: a()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: a()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", c, i]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": f()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": f()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": f()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": f()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": f()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": f()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": f()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": f()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": f()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": f()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": f()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": f()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": f()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": f()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": f()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": f()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": f()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": f()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", c, i]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...a()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [g, ae, Q, ge]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...a()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Yr = /* @__PURE__ */ yr(Vr), le = (...e) => Yr(er(e));
function $r(e, n) {
  if (!n.trim()) return /* @__PURE__ */ y.jsx("span", { children: e });
  const r = e.toLowerCase().indexOf(n.toLowerCase());
  if (r === -1) return /* @__PURE__ */ y.jsx("span", { children: e });
  const o = e.slice(0, r), s = e.slice(r, r + n.length), d = e.slice(r + n.length);
  return /* @__PURE__ */ y.jsxs("span", { children: [
    o,
    /* @__PURE__ */ y.jsx("span", { className: "bg-teal-100 dark:bg-teal-900/50 rounded px-0.5", children: s }),
    d
  ] });
}
function Xr({
  options: e,
  value: n,
  onChange: r,
  placeholder: o = "Select an option",
  searchable: s = !1,
  multiple: d = !1,
  portal: l = !1,
  disabled: p = !1,
  loading: m = !1,
  error: k,
  label: E,
  className: j,
  menuClassName: T,
  renderOption: C,
  zIndex: L = 50
}) {
  const [v, R] = ce(!1), [z, D] = ce(""), [N, _] = ce(-1), O = we(null), M = we(null), [F, f] = ce({ top: 0, left: 0, w: 0 }), A = d ? Array.isArray(n) ? n : [] : n ? [n] : [], V = e.filter(
    (u) => u.label.toLowerCase().includes(z.toLowerCase())
  ), B = e.filter((u) => A.includes(u.value));
  function Y() {
    p || m || (R(!v), v || (D(""), _(-1)));
  }
  function J(u) {
    if (d) {
      const a = A.includes(u.value) ? A.filter((I) => I !== u.value) : [...A, u.value];
      r && r(a);
    } else
      r && r(u.value), R(!1);
  }
  function H(u, a) {
    u.stopPropagation(), d ? r && r(A.filter((I) => I !== a)) : r && r(void 0);
  }
  function G(u) {
    if (!(p || m))
      switch (u.key) {
        case "Enter":
        case " ":
          u.preventDefault(), v ? N >= 0 && V[N] && J(V[N]) : (R(!0), _(0));
          break;
        case "Escape":
          u.preventDefault(), R(!1), _(-1);
          break;
        case "ArrowDown":
          u.preventDefault(), v ? _((a) => Math.min(a + 1, V.length - 1)) : (R(!0), _(0));
          break;
        case "ArrowUp":
          u.preventDefault(), v && _((a) => Math.max(a - 1, 0));
          break;
        case "Tab":
          v && (R(!1), _(-1));
          break;
      }
  }
  ke(() => {
    if (v && N >= 0 && M.current) {
      const u = M.current.children[N];
      u && u.scrollIntoView({ block: "nearest" });
    }
  }, [N, v]), ke(() => {
    if (!v) return;
    function u(a) {
      O.current && !O.current.contains(a.target) && (R(!1), _(-1));
    }
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [v]), We(() => {
    if (!v) return;
    function u() {
      if (!O.current) return;
      const a = O.current.getBoundingClientRect();
      f({
        top: l ? a.bottom + window.scrollY + 4 : 0,
        left: l ? a.left + window.scrollX : 0,
        w: a.width
      });
    }
    return u(), window.addEventListener("resize", u), window.addEventListener("scroll", u, !0), () => {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u, !0);
    };
  }, [v, l]);
  const P = /* @__PURE__ */ y.jsxs(
    qe.div,
    {
      initial: { opacity: 0, y: -8, scale: 0.96 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -8, scale: 0.96 },
      transition: { duration: 0.15, ease: "easeOut" },
      style: {
        position: "absolute",
        top: l ? F.top : "100%",
        left: l ? F.left : 0,
        width: l ? F.w : "100%",
        zIndex: L
      },
      className: le(
        "mt-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-lg overflow-hidden",
        T
      ),
      role: "listbox",
      "aria-label": "Options",
      children: [
        s && /* @__PURE__ */ y.jsxs("div", { className: "p-2 border-b border-gray-100 dark:border-zinc-800 flex items-center gap-2", children: [
          /* @__PURE__ */ y.jsx(Ue, { className: "w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ y.jsx(
            "input",
            {
              autoFocus: !0,
              className: "w-full bg-transparent border-none outline-none text-sm py-1 placeholder:text-gray-400",
              placeholder: "Search...",
              value: z,
              onChange: (u) => D(u.target.value),
              "aria-label": "Search options"
            }
          ),
          z && /* @__PURE__ */ y.jsx(
            ye,
            {
              className: "w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600",
              onClick: () => D("")
            }
          )
        ] }),
        /* @__PURE__ */ y.jsx("div", { ref: M, className: "max-h-60 overflow-y-auto p-1 scrollbar", children: V.length > 0 ? V.map((u, a) => {
          const I = A.includes(u.value), Z = a === N;
          return /* @__PURE__ */ y.jsxs(
            "div",
            {
              role: "option",
              "aria-selected": I,
              onClick: () => J(u),
              onMouseEnter: () => _(a),
              className: le(
                "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm transition-colors",
                I ? "bg-teal-50 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100 font-medium" : Z ? "bg-teal-50 dark:bg-teal-900/20 text-gray-900 dark:text-gray-100" : "hover:bg-teal-50 dark:hover:bg-teal-900/20 text-gray-700 dark:text-gray-300"
              ),
              children: [
                /* @__PURE__ */ y.jsx("div", { className: "flex items-center gap-2", children: C ? C(u, I) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                  u.icon && /* @__PURE__ */ y.jsx("span", { className: "w-4 h-4", children: u.icon }),
                  s && z ? $r(u.label, z) : /* @__PURE__ */ y.jsx("span", { children: u.label })
                ] }) }),
                I && /* @__PURE__ */ y.jsx(Be, { className: "w-4 h-4 text-teal-600 dark:text-teal-400" })
              ]
            },
            u.value
          );
        }) : /* @__PURE__ */ y.jsx("div", { className: "px-3 py-4 text-center text-sm text-gray-400 italic", children: "Nothing here" }) })
      ]
    }
  );
  return /* @__PURE__ */ y.jsxs("div", { className: le("relative w-full", j), ref: O, children: [
    E && /* @__PURE__ */ y.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1", children: E }),
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        role: "combobox",
        tabIndex: p ? -1 : 0,
        "aria-expanded": v,
        "aria-haspopup": "listbox",
        "aria-disabled": p,
        "aria-label": E || o,
        onClick: Y,
        onKeyDown: G,
        className: le(
          "flex items-center justify-between gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border rounded-lg cursor-pointer transition-all select-none focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700",
          v ? "border-gray-400 dark:border-zinc-500 shadow-sm" : "border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600",
          k && "border-red-500 dark:border-red-500 ring-red-100",
          p && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex flex-wrap gap-1.5 flex-1 min-w-0", children: B.length > 0 ? d ? B.map((u) => /* @__PURE__ */ y.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 px-2 py-0.5 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded",
              children: [
                u.label,
                /* @__PURE__ */ y.jsx(
                  ye,
                  {
                    className: "w-3 h-3 cursor-pointer hover:text-red-500 transition-colors",
                    onClick: (a) => H(a, u.value)
                  }
                )
              ]
            },
            u.value
          )) : /* @__PURE__ */ y.jsx("span", { className: "text-gray-900 dark:text-gray-100 text-sm", children: B[0].label }) : /* @__PURE__ */ y.jsx("span", { className: "text-gray-500 text-sm truncate", children: o }) }),
          /* @__PURE__ */ y.jsx("div", { className: "flex items-center gap-2", children: m ? /* @__PURE__ */ y.jsx("div", { className: "w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" }) : /* @__PURE__ */ y.jsx(
            Je,
            {
              className: le(
                "w-4 h-4 text-gray-400 transition-transform duration-200",
                v && "rotate-180 text-gray-600"
              )
            }
          ) })
        ]
      }
    ),
    k && /* @__PURE__ */ y.jsx("p", { className: "mt-1.5 ml-1 text-xs text-red-500 font-medium", children: k }),
    /* @__PURE__ */ y.jsx(He, { children: v && (l ? Xe(P, document.body) : P) }),
    /* @__PURE__ */ y.jsx("style", { children: `
        .scrollbar::-webkit-scrollbar { width: 5px; }
        .scrollbar::-webkit-scrollbar-track { background: transparent; }
        .scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .dark .scrollbar::-webkit-scrollbar-thumb { background: #3f3f46; }
      ` })
  ] });
}
export {
  Xr as Dropdown
};
