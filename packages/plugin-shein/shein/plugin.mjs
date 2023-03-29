var U = {}, Z = {
  get exports() {
    return U;
  },
  set exports(l) {
    U = l;
  }
}, S = {}, b = {}, ee = {
  get exports() {
    return b;
  },
  set exports(l) {
    b = l;
  }
}, r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function te() {
  if (H)
    return r;
  H = 1;
  var l = Symbol.for("react.element"), j = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), E = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function h(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, F = {};
  function v(e, t, n) {
    this.props = e, this.context = t, this.refs = F, this.updater = n || R;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  }, v.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function N() {
  }
  N.prototype = v.prototype;
  function I(e, t, n) {
    this.props = e, this.context = t, this.refs = F, this.updater = n || R;
  }
  var q = I.prototype = new N();
  q.constructor = I, A(q, v.prototype), q.isPureReactComponent = !0;
  var V = Array.isArray, M = Object.prototype.hasOwnProperty, T = { current: null }, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(e, t, n) {
    var u, o = {}, c = null, f = null;
    if (t != null)
      for (u in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)
        M.call(t, u) && !B.hasOwnProperty(u) && (o[u] = t[u]);
    var s = arguments.length - 2;
    if (s === 1)
      o.children = n;
    else if (1 < s) {
      for (var i = Array(s), d = 0; d < s; d++)
        i[d] = arguments[d + 2];
      o.children = i;
    }
    if (e && e.defaultProps)
      for (u in s = e.defaultProps, s)
        o[u] === void 0 && (o[u] = s[u]);
    return { $$typeof: l, type: e, key: c, ref: f, props: o, _owner: T.current };
  }
  function G(e, t) {
    return { $$typeof: l, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function L(e) {
    return typeof e == "object" && e !== null && e.$$typeof === l;
  }
  function K(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var z = /\/+/g;
  function D(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? K("" + e.key) : t.toString(36);
  }
  function x(e, t, n, u, o) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var f = !1;
    if (e === null)
      f = !0;
    else
      switch (c) {
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case l:
            case j:
              f = !0;
          }
      }
    if (f)
      return f = e, o = o(f), e = u === "" ? "." + D(f, 0) : u, V(o) ? (n = "", e != null && (n = e.replace(z, "$&/") + "/"), x(o, t, n, "", function(d) {
        return d;
      })) : o != null && (L(o) && (o = G(o, n + (!o.key || f && f.key === o.key ? "" : ("" + o.key).replace(z, "$&/") + "/") + e)), t.push(o)), 1;
    if (f = 0, u = u === "" ? "." : u + ":", V(e))
      for (var s = 0; s < e.length; s++) {
        c = e[s];
        var i = u + D(c, s);
        f += x(c, t, n, i, o);
      }
    else if (i = h(e), typeof i == "function")
      for (e = i.call(e), s = 0; !(c = e.next()).done; )
        c = c.value, i = u + D(c, s++), f += x(c, t, n, i, o);
    else if (c === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return f;
  }
  function w(e, t, n) {
    if (e == null)
      return e;
    var u = [], o = 0;
    return x(e, u, "", "", function(c) {
      return t.call(n, c, o++);
    }), u;
  }
  function Q(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var a = { current: null }, $ = { transition: null }, X = { ReactCurrentDispatcher: a, ReactCurrentBatchConfig: $, ReactCurrentOwner: T };
  return r.Children = { map: w, forEach: function(e, t, n) {
    w(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return w(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return w(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!L(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } }, r.Component = v, r.Fragment = C, r.Profiler = g, r.PureComponent = I, r.StrictMode = O, r.Suspense = p, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, r.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var u = A({}, e.props), o = e.key, c = e.ref, f = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c = t.ref, f = T.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
      for (i in t)
        M.call(t, i) && !B.hasOwnProperty(i) && (u[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
    }
    var i = arguments.length - 2;
    if (i === 1)
      u.children = n;
    else if (1 < i) {
      s = Array(i);
      for (var d = 0; d < i; d++)
        s[d] = arguments[d + 2];
      u.children = s;
    }
    return { $$typeof: l, type: e.type, key: o, ref: c, props: u, _owner: f };
  }, r.createContext = function(e) {
    return e = { $$typeof: E, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: P, _context: e }, e.Consumer = e;
  }, r.createElement = J, r.createFactory = function(e) {
    var t = J.bind(null, e);
    return t.type = e, t;
  }, r.createRef = function() {
    return { current: null };
  }, r.forwardRef = function(e) {
    return { $$typeof: m, render: e };
  }, r.isValidElement = L, r.lazy = function(e) {
    return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: Q };
  }, r.memo = function(e, t) {
    return { $$typeof: k, type: e, compare: t === void 0 ? null : t };
  }, r.startTransition = function(e) {
    var t = $.transition;
    $.transition = {};
    try {
      e();
    } finally {
      $.transition = t;
    }
  }, r.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, r.useCallback = function(e, t) {
    return a.current.useCallback(e, t);
  }, r.useContext = function(e) {
    return a.current.useContext(e);
  }, r.useDebugValue = function() {
  }, r.useDeferredValue = function(e) {
    return a.current.useDeferredValue(e);
  }, r.useEffect = function(e, t) {
    return a.current.useEffect(e, t);
  }, r.useId = function() {
    return a.current.useId();
  }, r.useImperativeHandle = function(e, t, n) {
    return a.current.useImperativeHandle(e, t, n);
  }, r.useInsertionEffect = function(e, t) {
    return a.current.useInsertionEffect(e, t);
  }, r.useLayoutEffect = function(e, t) {
    return a.current.useLayoutEffect(e, t);
  }, r.useMemo = function(e, t) {
    return a.current.useMemo(e, t);
  }, r.useReducer = function(e, t, n) {
    return a.current.useReducer(e, t, n);
  }, r.useRef = function(e) {
    return a.current.useRef(e);
  }, r.useState = function(e) {
    return a.current.useState(e);
  }, r.useSyncExternalStore = function(e, t, n) {
    return a.current.useSyncExternalStore(e, t, n);
  }, r.useTransition = function() {
    return a.current.useTransition();
  }, r.version = "18.2.0", r;
}
var W;
function re() {
  return W || (W = 1, function(l) {
    l.exports = te();
  }(ee)), b;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function ne() {
  if (Y)
    return S;
  Y = 1;
  var l = re(), j = Symbol.for("react.element"), C = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, g = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, p, k) {
    var y, _ = {}, h = null, R = null;
    k !== void 0 && (h = "" + k), p.key !== void 0 && (h = "" + p.key), p.ref !== void 0 && (R = p.ref);
    for (y in p)
      O.call(p, y) && !P.hasOwnProperty(y) && (_[y] = p[y]);
    if (m && m.defaultProps)
      for (y in p = m.defaultProps, p)
        _[y] === void 0 && (_[y] = p[y]);
    return { $$typeof: j, type: m, key: h, ref: R, props: _, _owner: g.current };
  }
  return S.Fragment = C, S.jsx = E, S.jsxs = E, S;
}
(function(l) {
  l.exports = ne();
})(Z);
const oe = () => /* @__PURE__ */ U.jsx("div", { style: { color: "red" }, children: "Sheeeeeeeeeein" });
function ue() {
  console.log("I'm Plugin");
}
export {
  oe as List,
  ue as show
};
