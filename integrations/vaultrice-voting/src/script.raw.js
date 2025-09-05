function Wv(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}
var cf = { exports: {} },
    F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function Fv() {
    if (sd) return F;
    sd = 1;
    var x = Symbol.for('react.transitional.element'),
        o = Symbol.for('react.portal'),
        d = Symbol.for('react.fragment'),
        f = Symbol.for('react.strict_mode'),
        g = Symbol.for('react.profiler'),
        T = Symbol.for('react.consumer'),
        z = Symbol.for('react.context'),
        m = Symbol.for('react.forward_ref'),
        p = Symbol.for('react.suspense'),
        s = Symbol.for('react.memo'),
        y = Symbol.for('react.lazy'),
        N = Symbol.iterator;
    function R(h) {
        return h === null || typeof h != 'object'
            ? null
            : ((h = (N && h[N]) || h['@@iterator']), typeof h == 'function' ? h : null);
    }
    var w = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        K = Object.assign,
        k = {};
    function W(h, H, B) {
        (this.props = h), (this.context = H), (this.refs = k), (this.updater = B || w);
    }
    (W.prototype.isReactComponent = {}),
        (W.prototype.setState = function (h, H) {
            if (typeof h != 'object' && typeof h != 'function' && h != null)
                throw Error(
                    'takes an object of state variables to update or a function which returns an object of state variables.',
                );
            this.updater.enqueueSetState(this, h, H, 'setState');
        }),
        (W.prototype.forceUpdate = function (h) {
            this.updater.enqueueForceUpdate(this, h, 'forceUpdate');
        });
    function ct() {}
    ct.prototype = W.prototype;
    function lt(h, H, B) {
        (this.props = h), (this.context = H), (this.refs = k), (this.updater = B || w);
    }
    var dt = (lt.prototype = new ct());
    (dt.constructor = lt), K(dt, W.prototype), (dt.isPureReactComponent = !0);
    var I = Array.isArray,
        q = { H: null, A: null, T: null, S: null, V: null },
        bt = Object.prototype.hasOwnProperty;
    function vt(h, H, B, j, X, st) {
        return (
            (B = st.ref),
            {
                $$typeof: x,
                type: h,
                key: H,
                ref: B !== void 0 ? B : null,
                props: st,
            }
        );
    }
    function qt(h, H) {
        return vt(h.type, H, void 0, void 0, void 0, h.props);
    }
    function Ot(h) {
        return typeof h == 'object' && h !== null && h.$$typeof === x;
    }
    function zt(h) {
        var H = { '=': '=0', ':': '=2' };
        return (
            '$' +
            h.replace(/[=:]/g, function (B) {
                return H[B];
            })
        );
    }
    var ft = /\/+/g;
    function V(h, H) {
        return typeof h == 'object' && h !== null && h.key != null
            ? zt('' + h.key)
            : H.toString(36);
    }
    function ve() {}
    function Tl(h) {
        switch (h.status) {
            case 'fulfilled':
                return h.value;
            case 'rejected':
                throw h.reason;
            default:
                switch (
                    (typeof h.status == 'string'
                        ? h.then(ve, ve)
                        : ((h.status = 'pending'),
                          h.then(
                              function (H) {
                                  h.status === 'pending' &&
                                      ((h.status = 'fulfilled'), (h.value = H));
                              },
                              function (H) {
                                  h.status === 'pending' &&
                                      ((h.status = 'rejected'), (h.reason = H));
                              },
                          )),
                    h.status)
                ) {
                    case 'fulfilled':
                        return h.value;
                    case 'rejected':
                        throw h.reason;
                }
        }
        throw h;
    }
    function Jt(h, H, B, j, X) {
        var st = typeof h;
        (st === 'undefined' || st === 'boolean') && (h = null);
        var $ = !1;
        if (h === null) $ = !0;
        else
            switch (st) {
                case 'bigint':
                case 'string':
                case 'number':
                    $ = !0;
                    break;
                case 'object':
                    switch (h.$$typeof) {
                        case x:
                        case o:
                            $ = !0;
                            break;
                        case y:
                            return ($ = h._init), Jt($(h._payload), H, B, j, X);
                    }
            }
        if ($)
            return (
                (X = X(h)),
                ($ = j === '' ? '.' + V(h, 0) : j),
                I(X)
                    ? ((B = ''),
                      $ != null && (B = $.replace(ft, '$&/') + '/'),
                      Jt(X, H, B, '', function (We) {
                          return We;
                      }))
                    : X != null &&
                      (Ot(X) &&
                          (X = qt(
                              X,
                              B +
                                  (X.key == null || (h && h.key === X.key)
                                      ? ''
                                      : ('' + X.key).replace(ft, '$&/') + '/') +
                                  $,
                          )),
                      H.push(X)),
                1
            );
        $ = 0;
        var ae = j === '' ? '.' : j + ':';
        if (I(h))
            for (var xt = 0; xt < h.length; xt++)
                (j = h[xt]), (st = ae + V(j, xt)), ($ += Jt(j, H, B, st, X));
        else if (((xt = R(h)), typeof xt == 'function'))
            for (h = xt.call(h), xt = 0; !(j = h.next()).done; )
                (j = j.value), (st = ae + V(j, xt++)), ($ += Jt(j, H, B, st, X));
        else if (st === 'object') {
            if (typeof h.then == 'function') return Jt(Tl(h), H, B, j, X);
            throw (
                ((H = String(h)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (H === '[object Object]'
                            ? 'object with keys {' + Object.keys(h).join(', ') + '}'
                            : H) +
                        '). If you meant to render a collection of children, use an array instead.',
                ))
            );
        }
        return $;
    }
    function D(h, H, B) {
        if (h == null) return h;
        var j = [],
            X = 0;
        return (
            Jt(h, j, '', '', function (st) {
                return H.call(B, st, X++);
            }),
            j
        );
    }
    function Y(h) {
        if (h._status === -1) {
            var H = h._result;
            (H = H()),
                H.then(
                    function (B) {
                        (h._status === 0 || h._status === -1) && ((h._status = 1), (h._result = B));
                    },
                    function (B) {
                        (h._status === 0 || h._status === -1) && ((h._status = 2), (h._result = B));
                    },
                ),
                h._status === -1 && ((h._status = 0), (h._result = H));
        }
        if (h._status === 1) return h._result.default;
        throw h._result;
    }
    var Z =
        typeof reportError == 'function'
            ? reportError
            : function (h) {
                  if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                      var H = new window.ErrorEvent('error', {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof h == 'object' && h !== null && typeof h.message == 'string'
                                  ? String(h.message)
                                  : String(h),
                          error: h,
                      });
                      if (!window.dispatchEvent(H)) return;
                  } else if (typeof process == 'object' && typeof process.emit == 'function') {
                      process.emit('uncaughtException', h);
                      return;
                  }
                  console.error(h);
              };
    function Et() {}
    return (
        (F.Children = {
            map: D,
            forEach: function (h, H, B) {
                D(
                    h,
                    function () {
                        H.apply(this, arguments);
                    },
                    B,
                );
            },
            count: function (h) {
                var H = 0;
                return (
                    D(h, function () {
                        H++;
                    }),
                    H
                );
            },
            toArray: function (h) {
                return (
                    D(h, function (H) {
                        return H;
                    }) || []
                );
            },
            only: function (h) {
                if (!Ot(h))
                    throw Error(
                        'React.Children.only expected to receive a single React element child.',
                    );
                return h;
            },
        }),
        (F.Component = W),
        (F.Fragment = d),
        (F.Profiler = g),
        (F.PureComponent = lt),
        (F.StrictMode = f),
        (F.Suspense = p),
        (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q),
        (F.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (h) {
                return q.H.useMemoCache(h);
            },
        }),
        (F.cache = function (h) {
            return function () {
                return h.apply(null, arguments);
            };
        }),
        (F.cloneElement = function (h, H, B) {
            if (h == null)
                throw Error('The argument must be a React element, but you passed ' + h + '.');
            var j = K({}, h.props),
                X = h.key,
                st = void 0;
            if (H != null)
                for ($ in (H.ref !== void 0 && (st = void 0),
                H.key !== void 0 && (X = '' + H.key),
                H))
                    !bt.call(H, $) ||
                        $ === 'key' ||
                        $ === '__self' ||
                        $ === '__source' ||
                        ($ === 'ref' && H.ref === void 0) ||
                        (j[$] = H[$]);
            var $ = arguments.length - 2;
            if ($ === 1) j.children = B;
            else if (1 < $) {
                for (var ae = Array($), xt = 0; xt < $; xt++) ae[xt] = arguments[xt + 2];
                j.children = ae;
            }
            return vt(h.type, X, void 0, void 0, st, j);
        }),
        (F.createContext = function (h) {
            return (
                (h = {
                    $$typeof: z,
                    _currentValue: h,
                    _currentValue2: h,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (h.Provider = h),
                (h.Consumer = {
                    $$typeof: T,
                    _context: h,
                }),
                h
            );
        }),
        (F.createElement = function (h, H, B) {
            var j,
                X = {},
                st = null;
            if (H != null)
                for (j in (H.key !== void 0 && (st = '' + H.key), H))
                    bt.call(H, j) &&
                        j !== 'key' &&
                        j !== '__self' &&
                        j !== '__source' &&
                        (X[j] = H[j]);
            var $ = arguments.length - 2;
            if ($ === 1) X.children = B;
            else if (1 < $) {
                for (var ae = Array($), xt = 0; xt < $; xt++) ae[xt] = arguments[xt + 2];
                X.children = ae;
            }
            if (h && h.defaultProps)
                for (j in (($ = h.defaultProps), $)) X[j] === void 0 && (X[j] = $[j]);
            return vt(h, st, void 0, void 0, null, X);
        }),
        (F.createRef = function () {
            return { current: null };
        }),
        (F.forwardRef = function (h) {
            return { $$typeof: m, render: h };
        }),
        (F.isValidElement = Ot),
        (F.lazy = function (h) {
            return {
                $$typeof: y,
                _payload: { _status: -1, _result: h },
                _init: Y,
            };
        }),
        (F.memo = function (h, H) {
            return {
                $$typeof: s,
                type: h,
                compare: H === void 0 ? null : H,
            };
        }),
        (F.startTransition = function (h) {
            var H = q.T,
                B = {};
            q.T = B;
            try {
                var j = h(),
                    X = q.S;
                X !== null && X(B, j),
                    typeof j == 'object' &&
                        j !== null &&
                        typeof j.then == 'function' &&
                        j.then(Et, Z);
            } catch (st) {
                Z(st);
            } finally {
                q.T = H;
            }
        }),
        (F.unstable_useCacheRefresh = function () {
            return q.H.useCacheRefresh();
        }),
        (F.use = function (h) {
            return q.H.use(h);
        }),
        (F.useActionState = function (h, H, B) {
            return q.H.useActionState(h, H, B);
        }),
        (F.useCallback = function (h, H) {
            return q.H.useCallback(h, H);
        }),
        (F.useContext = function (h) {
            return q.H.useContext(h);
        }),
        (F.useDebugValue = function () {}),
        (F.useDeferredValue = function (h, H) {
            return q.H.useDeferredValue(h, H);
        }),
        (F.useEffect = function (h, H, B) {
            var j = q.H;
            if (typeof B == 'function')
                throw Error('useEffect CRUD overload is not enabled in this build of React.');
            return j.useEffect(h, H);
        }),
        (F.useId = function () {
            return q.H.useId();
        }),
        (F.useImperativeHandle = function (h, H, B) {
            return q.H.useImperativeHandle(h, H, B);
        }),
        (F.useInsertionEffect = function (h, H) {
            return q.H.useInsertionEffect(h, H);
        }),
        (F.useLayoutEffect = function (h, H) {
            return q.H.useLayoutEffect(h, H);
        }),
        (F.useMemo = function (h, H) {
            return q.H.useMemo(h, H);
        }),
        (F.useOptimistic = function (h, H) {
            return q.H.useOptimistic(h, H);
        }),
        (F.useReducer = function (h, H, B) {
            return q.H.useReducer(h, H, B);
        }),
        (F.useRef = function (h) {
            return q.H.useRef(h);
        }),
        (F.useState = function (h) {
            return q.H.useState(h);
        }),
        (F.useSyncExternalStore = function (h, H, B) {
            return q.H.useSyncExternalStore(h, H, B);
        }),
        (F.useTransition = function () {
            return q.H.useTransition();
        }),
        (F.version = '19.1.1'),
        F
    );
}
var rd;
function gf() {
    return rd || ((rd = 1), (cf.exports = Fv())), cf.exports;
}
var ne = gf();
const Iv = /* @__PURE__ */ Wv(ne);
var ff = { exports: {} },
    xa = {},
    of = { exports: {} },
    sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dd;
function Pv() {
    return (
        dd ||
            ((dd = 1),
            (function (x) {
                function o(D, Y) {
                    var Z = D.length;
                    D.push(Y);
                    t: for (; 0 < Z; ) {
                        var Et = (Z - 1) >>> 1,
                            h = D[Et];
                        if (0 < g(h, Y)) (D[Et] = Y), (D[Z] = h), (Z = Et);
                        else break t;
                    }
                }
                function d(D) {
                    return D.length === 0 ? null : D[0];
                }
                function f(D) {
                    if (D.length === 0) return null;
                    var Y = D[0],
                        Z = D.pop();
                    if (Z !== Y) {
                        D[0] = Z;
                        t: for (var Et = 0, h = D.length, H = h >>> 1; Et < H; ) {
                            var B = 2 * (Et + 1) - 1,
                                j = D[B],
                                X = B + 1,
                                st = D[X];
                            if (0 > g(j, Z))
                                X < h && 0 > g(st, j)
                                    ? ((D[Et] = st), (D[X] = Z), (Et = X))
                                    : ((D[Et] = j), (D[B] = Z), (Et = B));
                            else if (X < h && 0 > g(st, Z)) (D[Et] = st), (D[X] = Z), (Et = X);
                            else break t;
                        }
                    }
                    return Y;
                }
                function g(D, Y) {
                    var Z = D.sortIndex - Y.sortIndex;
                    return Z !== 0 ? Z : D.id - Y.id;
                }
                if (
                    ((x.unstable_now = void 0),
                    typeof performance == 'object' && typeof performance.now == 'function')
                ) {
                    var T = performance;
                    x.unstable_now = function () {
                        return T.now();
                    };
                } else {
                    var z = Date,
                        m = z.now();
                    x.unstable_now = function () {
                        return z.now() - m;
                    };
                }
                var p = [],
                    s = [],
                    y = 1,
                    N = null,
                    R = 3,
                    w = !1,
                    K = !1,
                    k = !1,
                    W = !1,
                    ct = typeof setTimeout == 'function' ? setTimeout : null,
                    lt = typeof clearTimeout == 'function' ? clearTimeout : null,
                    dt = typeof setImmediate != 'undefined' ? setImmediate : null;
                function I(D) {
                    for (var Y = d(s); Y !== null; ) {
                        if (Y.callback === null) f(s);
                        else if (Y.startTime <= D) f(s), (Y.sortIndex = Y.expirationTime), o(p, Y);
                        else break;
                        Y = d(s);
                    }
                }
                function q(D) {
                    if (((k = !1), I(D), !K))
                        if (d(p) !== null) (K = !0), bt || ((bt = !0), V());
                        else {
                            var Y = d(s);
                            Y !== null && Jt(q, Y.startTime - D);
                        }
                }
                var bt = !1,
                    vt = -1,
                    qt = 5,
                    Ot = -1;
                function zt() {
                    return W ? !0 : !(x.unstable_now() - Ot < qt);
                }
                function ft() {
                    if (((W = !1), bt)) {
                        var D = x.unstable_now();
                        Ot = D;
                        var Y = !0;
                        try {
                            t: {
                                (K = !1), k && ((k = !1), lt(vt), (vt = -1)), (w = !0);
                                var Z = R;
                                try {
                                    e: {
                                        for (
                                            I(D), N = d(p);
                                            N !== null && !(N.expirationTime > D && zt());

                                        ) {
                                            var Et = N.callback;
                                            if (typeof Et == 'function') {
                                                (N.callback = null), (R = N.priorityLevel);
                                                var h = Et(N.expirationTime <= D);
                                                if (
                                                    ((D = x.unstable_now()), typeof h == 'function')
                                                ) {
                                                    (N.callback = h), I(D), (Y = !0);
                                                    break e;
                                                }
                                                N === d(p) && f(p), I(D);
                                            } else f(p);
                                            N = d(p);
                                        }
                                        if (N !== null) Y = !0;
                                        else {
                                            var H = d(s);
                                            H !== null && Jt(q, H.startTime - D), (Y = !1);
                                        }
                                    }
                                    break t;
                                } finally {
                                    (N = null), (R = Z), (w = !1);
                                }
                                Y = void 0;
                            }
                        } finally {
                            Y ? V() : (bt = !1);
                        }
                    }
                }
                var V;
                if (typeof dt == 'function')
                    V = function () {
                        dt(ft);
                    };
                else if (typeof MessageChannel != 'undefined') {
                    var ve = new MessageChannel(),
                        Tl = ve.port2;
                    (ve.port1.onmessage = ft),
                        (V = function () {
                            Tl.postMessage(null);
                        });
                } else
                    V = function () {
                        ct(ft, 0);
                    };
                function Jt(D, Y) {
                    vt = ct(function () {
                        D(x.unstable_now());
                    }, Y);
                }
                (x.unstable_IdlePriority = 5),
                    (x.unstable_ImmediatePriority = 1),
                    (x.unstable_LowPriority = 4),
                    (x.unstable_NormalPriority = 3),
                    (x.unstable_Profiling = null),
                    (x.unstable_UserBlockingPriority = 2),
                    (x.unstable_cancelCallback = function (D) {
                        D.callback = null;
                    }),
                    (x.unstable_forceFrameRate = function (D) {
                        0 > D || 125 < D
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                              )
                            : (qt = 0 < D ? Math.floor(1e3 / D) : 5);
                    }),
                    (x.unstable_getCurrentPriorityLevel = function () {
                        return R;
                    }),
                    (x.unstable_next = function (D) {
                        switch (R) {
                            case 1:
                            case 2:
                            case 3:
                                var Y = 3;
                                break;
                            default:
                                Y = R;
                        }
                        var Z = R;
                        R = Y;
                        try {
                            return D();
                        } finally {
                            R = Z;
                        }
                    }),
                    (x.unstable_requestPaint = function () {
                        W = !0;
                    }),
                    (x.unstable_runWithPriority = function (D, Y) {
                        switch (D) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                D = 3;
                        }
                        var Z = R;
                        R = D;
                        try {
                            return Y();
                        } finally {
                            R = Z;
                        }
                    }),
                    (x.unstable_scheduleCallback = function (D, Y, Z) {
                        var Et = x.unstable_now();
                        switch (
                            (typeof Z == 'object' && Z !== null
                                ? ((Z = Z.delay), (Z = typeof Z == 'number' && 0 < Z ? Et + Z : Et))
                                : (Z = Et),
                            D)
                        ) {
                            case 1:
                                var h = -1;
                                break;
                            case 2:
                                h = 250;
                                break;
                            case 5:
                                h = 1073741823;
                                break;
                            case 4:
                                h = 1e4;
                                break;
                            default:
                                h = 5e3;
                        }
                        return (
                            (h = Z + h),
                            (D = {
                                id: y++,
                                callback: Y,
                                priorityLevel: D,
                                startTime: Z,
                                expirationTime: h,
                                sortIndex: -1,
                            }),
                            Z > Et
                                ? ((D.sortIndex = Z),
                                  o(s, D),
                                  d(p) === null &&
                                      D === d(s) &&
                                      (k ? (lt(vt), (vt = -1)) : (k = !0), Jt(q, Z - Et)))
                                : ((D.sortIndex = h),
                                  o(p, D),
                                  K || w || ((K = !0), bt || ((bt = !0), V()))),
                            D
                        );
                    }),
                    (x.unstable_shouldYield = zt),
                    (x.unstable_wrapCallback = function (D) {
                        var Y = R;
                        return function () {
                            var Z = R;
                            R = Y;
                            try {
                                return D.apply(this, arguments);
                            } finally {
                                R = Z;
                            }
                        };
                    });
            })(sf)),
        sf
    );
}
var hd;
function t0() {
    return hd || ((hd = 1), (of.exports = Pv())), of.exports;
}
var rf = { exports: {} },
    Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vd;
function e0() {
    if (vd) return Wt;
    vd = 1;
    var x = gf();
    function o(p) {
        var s = 'https://react.dev/errors/' + p;
        if (1 < arguments.length) {
            s += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                s += '&args[]=' + encodeURIComponent(arguments[y]);
        }
        return (
            'Minified React error #' +
            p +
            '; visit ' +
            s +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function d() {}
    var f = {
            d: {
                f: d,
                r: function () {
                    throw Error(o(522));
                },
                D: d,
                C: d,
                L: d,
                m: d,
                X: d,
                S: d,
                M: d,
            },
            p: 0,
            findDOMNode: null,
        },
        g = Symbol.for('react.portal');
    function T(p, s, y) {
        var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: g,
            key: N == null ? null : '' + N,
            children: p,
            containerInfo: s,
            implementation: y,
        };
    }
    var z = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(p, s) {
        if (p === 'font') return '';
        if (typeof s == 'string') return s === 'use-credentials' ? s : '';
    }
    return (
        (Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
        (Wt.createPortal = function (p, s) {
            var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!s || (s.nodeType !== 1 && s.nodeType !== 9 && s.nodeType !== 11))
                throw Error(o(299));
            return T(p, s, null, y);
        }),
        (Wt.flushSync = function (p) {
            var s = z.T,
                y = f.p;
            try {
                if (((z.T = null), (f.p = 2), p)) return p();
            } finally {
                (z.T = s), (f.p = y), f.d.f();
            }
        }),
        (Wt.preconnect = function (p, s) {
            typeof p == 'string' &&
                (s
                    ? ((s = s.crossOrigin),
                      (s = typeof s == 'string' ? (s === 'use-credentials' ? s : '') : void 0))
                    : (s = null),
                f.d.C(p, s));
        }),
        (Wt.prefetchDNS = function (p) {
            typeof p == 'string' && f.d.D(p);
        }),
        (Wt.preinit = function (p, s) {
            if (typeof p == 'string' && s && typeof s.as == 'string') {
                var y = s.as,
                    N = m(y, s.crossOrigin),
                    R = typeof s.integrity == 'string' ? s.integrity : void 0,
                    w = typeof s.fetchPriority == 'string' ? s.fetchPriority : void 0;
                y === 'style'
                    ? f.d.S(p, typeof s.precedence == 'string' ? s.precedence : void 0, {
                          crossOrigin: N,
                          integrity: R,
                          fetchPriority: w,
                      })
                    : y === 'script' &&
                      f.d.X(p, {
                          crossOrigin: N,
                          integrity: R,
                          fetchPriority: w,
                          nonce: typeof s.nonce == 'string' ? s.nonce : void 0,
                      });
            }
        }),
        (Wt.preinitModule = function (p, s) {
            if (typeof p == 'string')
                if (typeof s == 'object' && s !== null) {
                    if (s.as == null || s.as === 'script') {
                        var y = m(s.as, s.crossOrigin);
                        f.d.M(p, {
                            crossOrigin: y,
                            integrity: typeof s.integrity == 'string' ? s.integrity : void 0,
                            nonce: typeof s.nonce == 'string' ? s.nonce : void 0,
                        });
                    }
                } else s == null && f.d.M(p);
        }),
        (Wt.preload = function (p, s) {
            if (
                typeof p == 'string' &&
                typeof s == 'object' &&
                s !== null &&
                typeof s.as == 'string'
            ) {
                var y = s.as,
                    N = m(y, s.crossOrigin);
                f.d.L(p, y, {
                    crossOrigin: N,
                    integrity: typeof s.integrity == 'string' ? s.integrity : void 0,
                    nonce: typeof s.nonce == 'string' ? s.nonce : void 0,
                    type: typeof s.type == 'string' ? s.type : void 0,
                    fetchPriority: typeof s.fetchPriority == 'string' ? s.fetchPriority : void 0,
                    referrerPolicy: typeof s.referrerPolicy == 'string' ? s.referrerPolicy : void 0,
                    imageSrcSet: typeof s.imageSrcSet == 'string' ? s.imageSrcSet : void 0,
                    imageSizes: typeof s.imageSizes == 'string' ? s.imageSizes : void 0,
                    media: typeof s.media == 'string' ? s.media : void 0,
                });
            }
        }),
        (Wt.preloadModule = function (p, s) {
            if (typeof p == 'string')
                if (s) {
                    var y = m(s.as, s.crossOrigin);
                    f.d.m(p, {
                        as: typeof s.as == 'string' && s.as !== 'script' ? s.as : void 0,
                        crossOrigin: y,
                        integrity: typeof s.integrity == 'string' ? s.integrity : void 0,
                    });
                } else f.d.m(p);
        }),
        (Wt.requestFormReset = function (p) {
            f.d.r(p);
        }),
        (Wt.unstable_batchedUpdates = function (p, s) {
            return p(s);
        }),
        (Wt.useFormState = function (p, s, y) {
            return z.H.useFormState(p, s, y);
        }),
        (Wt.useFormStatus = function () {
            return z.H.useHostTransitionStatus();
        }),
        (Wt.version = '19.1.1'),
        Wt
    );
}
var yd;
function l0() {
    if (yd) return rf.exports;
    yd = 1;
    function x() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
            } catch (o) {
                console.error(o);
            }
    }
    return x(), (rf.exports = e0()), rf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd;
function n0() {
    if (gd) return xa;
    gd = 1;
    var x = t0(),
        o = gf(),
        d = l0();
    function f(t) {
        var e = 'https://react.dev/errors/' + t;
        if (1 < arguments.length) {
            e += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                e += '&args[]=' + encodeURIComponent(arguments[l]);
        }
        return (
            'Minified React error #' +
            t +
            '; visit ' +
            e +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function g(t) {
        return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
    }
    function T(t) {
        var e = t,
            l = t;
        if (t.alternate) for (; e.return; ) e = e.return;
        else {
            t = e;
            do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
            while (t);
        }
        return e.tag === 3 ? l : null;
    }
    function z(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (
                (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)
            )
                return e.dehydrated;
        }
        return null;
    }
    function m(t) {
        if (T(t) !== t) throw Error(f(188));
    }
    function p(t) {
        var e = t.alternate;
        if (!e) {
            if (((e = T(t)), e === null)) throw Error(f(188));
            return e !== t ? null : t;
        }
        for (var l = t, n = e; ; ) {
            var a = l.return;
            if (a === null) break;
            var u = a.alternate;
            if (u === null) {
                if (((n = a.return), n !== null)) {
                    l = n;
                    continue;
                }
                break;
            }
            if (a.child === u.child) {
                for (u = a.child; u; ) {
                    if (u === l) return m(a), t;
                    if (u === n) return m(a), e;
                    u = u.sibling;
                }
                throw Error(f(188));
            }
            if (l.return !== n.return) (l = a), (n = u);
            else {
                for (var i = !1, c = a.child; c; ) {
                    if (c === l) {
                        (i = !0), (l = a), (n = u);
                        break;
                    }
                    if (c === n) {
                        (i = !0), (n = a), (l = u);
                        break;
                    }
                    c = c.sibling;
                }
                if (!i) {
                    for (c = u.child; c; ) {
                        if (c === l) {
                            (i = !0), (l = u), (n = a);
                            break;
                        }
                        if (c === n) {
                            (i = !0), (n = u), (l = a);
                            break;
                        }
                        c = c.sibling;
                    }
                    if (!i) throw Error(f(189));
                }
            }
            if (l.alternate !== n) throw Error(f(190));
        }
        if (l.tag !== 3) throw Error(f(188));
        return l.stateNode.current === l ? t : e;
    }
    function s(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null; ) {
            if (((e = s(t)), e !== null)) return e;
            t = t.sibling;
        }
        return null;
    }
    var y = Object.assign,
        N = Symbol.for('react.element'),
        R = Symbol.for('react.transitional.element'),
        w = Symbol.for('react.portal'),
        K = Symbol.for('react.fragment'),
        k = Symbol.for('react.strict_mode'),
        W = Symbol.for('react.profiler'),
        ct = Symbol.for('react.provider'),
        lt = Symbol.for('react.consumer'),
        dt = Symbol.for('react.context'),
        I = Symbol.for('react.forward_ref'),
        q = Symbol.for('react.suspense'),
        bt = Symbol.for('react.suspense_list'),
        vt = Symbol.for('react.memo'),
        qt = Symbol.for('react.lazy'),
        Ot = Symbol.for('react.activity'),
        zt = Symbol.for('react.memo_cache_sentinel'),
        ft = Symbol.iterator;
    function V(t) {
        return t === null || typeof t != 'object'
            ? null
            : ((t = (ft && t[ft]) || t['@@iterator']), typeof t == 'function' ? t : null);
    }
    var ve = Symbol.for('react.client.reference');
    function Tl(t) {
        if (t == null) return null;
        if (typeof t == 'function')
            return t.$$typeof === ve ? null : t.displayName || t.name || null;
        if (typeof t == 'string') return t;
        switch (t) {
            case K:
                return 'Fragment';
            case W:
                return 'Profiler';
            case k:
                return 'StrictMode';
            case q:
                return 'Suspense';
            case bt:
                return 'SuspenseList';
            case Ot:
                return 'Activity';
        }
        if (typeof t == 'object')
            switch (t.$$typeof) {
                case w:
                    return 'Portal';
                case dt:
                    return (t.displayName || 'Context') + '.Provider';
                case lt:
                    return (t._context.displayName || 'Context') + '.Consumer';
                case I:
                    var e = t.render;
                    return (
                        (t = t.displayName),
                        t ||
                            ((t = e.displayName || e.name || ''),
                            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
                        t
                    );
                case vt:
                    return (e = t.displayName || null), e !== null ? e : Tl(t.type) || 'Memo';
                case qt:
                    (e = t._payload), (t = t._init);
                    try {
                        return Tl(t(e));
                    } catch (l) {}
            }
        return null;
    }
    var Jt = Array.isArray,
        D = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Y = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Z = {
            pending: !1,
            data: null,
            method: null,
            action: null,
        },
        Et = [],
        h = -1;
    function H(t) {
        return { current: t };
    }
    function B(t) {
        0 > h || ((t.current = Et[h]), (Et[h] = null), h--);
    }
    function j(t, e) {
        h++, (Et[h] = t.current), (t.current = e);
    }
    var X = H(null),
        st = H(null),
        $ = H(null),
        ae = H(null);
    function xt(t, e) {
        switch ((j($, e), j(st, t), j(X, null), e.nodeType)) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? Br(t) : 0;
                break;
            default:
                if (((t = e.tagName), (e = e.namespaceURI))) (e = Br(e)), (t = Gr(e, t));
                else
                    switch (t) {
                        case 'svg':
                            t = 1;
                            break;
                        case 'math':
                            t = 2;
                            break;
                        default:
                            t = 0;
                    }
        }
        B(X), j(X, t);
    }
    function We() {
        B(X), B(st), B($);
    }
    function Zu(t) {
        t.memoizedState !== null && j(ae, t);
        var e = X.current,
            l = Gr(e, t.type);
        e !== l && (j(st, t), j(X, l));
    }
    function _a(t) {
        st.current === t && (B(X), B(st)), ae.current === t && (B(ae), (Ea._currentValue = Z));
    }
    var Ku = Object.prototype.hasOwnProperty,
        Ju = x.unstable_scheduleCallback,
        ku = x.unstable_cancelCallback,
        Dd = x.unstable_shouldYield,
        _d = x.unstable_requestPaint,
        De = x.unstable_now,
        Nd = x.unstable_getCurrentPriorityLevel,
        mf = x.unstable_ImmediatePriority,
        pf = x.unstable_UserBlockingPriority,
        Na = x.unstable_NormalPriority,
        Ud = x.unstable_LowPriority,
        Sf = x.unstable_IdlePriority,
        Hd = x.log,
        Rd = x.unstable_setDisableYieldValue,
        _n = null,
        ue = null;
    function Fe(t) {
        if ((typeof Hd == 'function' && Rd(t), ue && typeof ue.setStrictMode == 'function'))
            try {
                ue.setStrictMode(_n, t);
            } catch (e) {}
    }
    var ie = Math.clz32 ? Math.clz32 : jd,
        wd = Math.log,
        qd = Math.LN2;
    function jd(t) {
        return (t >>>= 0), t === 0 ? 32 : (31 - ((wd(t) / qd) | 0)) | 0;
    }
    var Ua = 256,
        Ha = 4194304;
    function Al(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t;
        }
    }
    function Ra(t, e, l) {
        var n = t.pendingLanes;
        if (n === 0) return 0;
        var a = 0,
            u = t.suspendedLanes,
            i = t.pingedLanes;
        t = t.warmLanes;
        var c = n & 134217727;
        return (
            c !== 0
                ? ((n = c & ~u),
                  n !== 0
                      ? (a = Al(n))
                      : ((i &= c),
                        i !== 0 ? (a = Al(i)) : l || ((l = c & ~t), l !== 0 && (a = Al(l)))))
                : ((c = n & ~u),
                  c !== 0
                      ? (a = Al(c))
                      : i !== 0
                        ? (a = Al(i))
                        : l || ((l = n & ~t), l !== 0 && (a = Al(l)))),
            a === 0
                ? 0
                : e !== 0 &&
                    e !== a &&
                    (e & u) === 0 &&
                    ((u = a & -a), (l = e & -e), u >= l || (u === 32 && (l & 4194048) !== 0))
                  ? e
                  : a
        );
    }
    function Nn(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Yd(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function bf() {
        var t = Ua;
        return (Ua <<= 1), (Ua & 4194048) === 0 && (Ua = 256), t;
    }
    function Ef() {
        var t = Ha;
        return (Ha <<= 1), (Ha & 62914560) === 0 && (Ha = 4194304), t;
    }
    function $u(t) {
        for (var e = [], l = 0; 31 > l; l++) e.push(t);
        return e;
    }
    function Un(t, e) {
        (t.pendingLanes |= e),
            e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
    }
    function Bd(t, e, l, n, a, u) {
        var i = t.pendingLanes;
        (t.pendingLanes = l),
            (t.suspendedLanes = 0),
            (t.pingedLanes = 0),
            (t.warmLanes = 0),
            (t.expiredLanes &= l),
            (t.entangledLanes &= l),
            (t.errorRecoveryDisabledLanes &= l),
            (t.shellSuspendCounter = 0);
        var c = t.entanglements,
            r = t.expirationTimes,
            E = t.hiddenUpdates;
        for (l = i & ~l; 0 < l; ) {
            var M = 31 - ie(l),
                U = 1 << M;
            (c[M] = 0), (r[M] = -1);
            var A = E[M];
            if (A !== null)
                for (E[M] = null, M = 0; M < A.length; M++) {
                    var O = A[M];
                    O !== null && (O.lane &= -536870913);
                }
            l &= ~U;
        }
        n !== 0 && Tf(t, n, 0),
            u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
    }
    function Tf(t, e, l) {
        (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
        var n = 31 - ie(e);
        (t.entangledLanes |= e),
            (t.entanglements[n] = t.entanglements[n] | 1073741824 | (l & 4194090));
    }
    function Af(t, e) {
        var l = (t.entangledLanes |= e);
        for (t = t.entanglements; l; ) {
            var n = 31 - ie(l),
                a = 1 << n;
            (a & e) | (t[n] & e) && (t[n] |= e), (l &= ~a);
        }
    }
    function Wu(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0;
        }
        return t;
    }
    function Fu(t) {
        return (t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
    }
    function Of() {
        var t = Y.p;
        return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ad(t.type));
    }
    function Gd(t, e) {
        var l = Y.p;
        try {
            return (Y.p = t), e();
        } finally {
            Y.p = l;
        }
    }
    var Ie = Math.random().toString(36).slice(2),
        kt = '__reactFiber$' + Ie,
        It = '__reactProps$' + Ie,
        Ql = '__reactContainer$' + Ie,
        Iu = '__reactEvents$' + Ie,
        Cd = '__reactListeners$' + Ie,
        Vd = '__reactHandles$' + Ie,
        zf = '__reactResources$' + Ie,
        Hn = '__reactMarker$' + Ie;
    function Pu(t) {
        delete t[kt], delete t[It], delete t[Iu], delete t[Cd], delete t[Vd];
    }
    function Ll(t) {
        var e = t[kt];
        if (e) return e;
        for (var l = t.parentNode; l; ) {
            if ((e = l[Ql] || l[kt])) {
                if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
                    for (t = Qr(t); t !== null; ) {
                        if ((l = t[kt])) return l;
                        t = Qr(t);
                    }
                return e;
            }
            (t = l), (l = t.parentNode);
        }
        return null;
    }
    function Zl(t) {
        if ((t = t[kt] || t[Ql])) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
        }
        return null;
    }
    function Rn(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(f(33));
    }
    function Kl(t) {
        var e = t[zf];
        return (
            e ||
                (e = t[zf] =
                    {
                        hoistableStyles: /* @__PURE__ */ new Map(),
                        hoistableScripts: /* @__PURE__ */ new Map(),
                    }),
            e
        );
    }
    function Bt(t) {
        t[Hn] = !0;
    }
    var xf = /* @__PURE__ */ new Set(),
        Mf = {};
    function Ol(t, e) {
        Jl(t, e), Jl(t + 'Capture', e);
    }
    function Jl(t, e) {
        for (Mf[t] = e, t = 0; t < e.length; t++) xf.add(e[t]);
    }
    var Xd = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
        ),
        Df = {},
        _f = {};
    function Qd(t) {
        return Ku.call(_f, t)
            ? !0
            : Ku.call(Df, t)
              ? !1
              : Xd.test(t)
                ? (_f[t] = !0)
                : ((Df[t] = !0), !1);
    }
    function wa(t, e, l) {
        if (Qd(e))
            if (l === null) t.removeAttribute(e);
            else {
                switch (typeof l) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        t.removeAttribute(e);
                        return;
                    case 'boolean':
                        var n = e.toLowerCase().slice(0, 5);
                        if (n !== 'data-' && n !== 'aria-') {
                            t.removeAttribute(e);
                            return;
                        }
                }
                t.setAttribute(e, '' + l);
            }
    }
    function qa(t, e, l) {
        if (l === null) t.removeAttribute(e);
        else {
            switch (typeof l) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    t.removeAttribute(e);
                    return;
            }
            t.setAttribute(e, '' + l);
        }
    }
    function qe(t, e, l, n) {
        if (n === null) t.removeAttribute(l);
        else {
            switch (typeof n) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    t.removeAttribute(l);
                    return;
            }
            t.setAttributeNS(e, l, '' + n);
        }
    }
    var ti, Nf;
    function kl(t) {
        if (ti === void 0)
            try {
                throw Error();
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                (ti = (e && e[1]) || ''),
                    (Nf =
                        -1 <
                        l.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < l.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : '');
            }
        return (
            `
` +
            ti +
            t +
            Nf
        );
    }
    var ei = !1;
    function li(t, e) {
        if (!t || ei) return '';
        ei = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (e) {
                            var U = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(U.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(U, []);
                                } catch (O) {
                                    var A = O;
                                }
                                Reflect.construct(t, [], U);
                            } else {
                                try {
                                    U.call();
                                } catch (O) {
                                    A = O;
                                }
                                t.call(U.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (O) {
                                A = O;
                            }
                            (U = t()) && typeof U.catch == 'function' && U.catch(function () {});
                        }
                    } catch (O) {
                        if (O && A && typeof O.stack == 'string') return [O.stack, A.stack];
                    }
                    return [null, null];
                },
            };
            n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name');
            a &&
                a.configurable &&
                Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
                    value: 'DetermineComponentFrameRoot',
                });
            var u = n.DetermineComponentFrameRoot(),
                i = u[0],
                c = u[1];
            if (i && c) {
                var r = i.split(`
`),
                    E = c.split(`
`);
                for (a = n = 0; n < r.length && !r[n].includes('DetermineComponentFrameRoot'); )
                    n++;
                for (; a < E.length && !E[a].includes('DetermineComponentFrameRoot'); ) a++;
                if (n === r.length || a === E.length)
                    for (n = r.length - 1, a = E.length - 1; 1 <= n && 0 <= a && r[n] !== E[a]; )
                        a--;
                for (; 1 <= n && 0 <= a; n--, a--)
                    if (r[n] !== E[a]) {
                        if (n !== 1 || a !== 1)
                            do
                                if ((n--, a--, 0 > a || r[n] !== E[a])) {
                                    var M =
                                        `
` + r[n].replace(' at new ', ' at ');
                                    return (
                                        t.displayName &&
                                            M.includes('<anonymous>') &&
                                            (M = M.replace('<anonymous>', t.displayName)),
                                        M
                                    );
                                }
                            while (1 <= n && 0 <= a);
                        break;
                    }
            }
        } finally {
            (ei = !1), (Error.prepareStackTrace = l);
        }
        return (l = t ? t.displayName || t.name : '') ? kl(l) : '';
    }
    function Ld(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return kl(t.type);
            case 16:
                return kl('Lazy');
            case 13:
                return kl('Suspense');
            case 19:
                return kl('SuspenseList');
            case 0:
            case 15:
                return li(t.type, !1);
            case 11:
                return li(t.type.render, !1);
            case 1:
                return li(t.type, !0);
            case 31:
                return kl('Activity');
            default:
                return '';
        }
    }
    function Uf(t) {
        try {
            var e = '';
            do (e += Ld(t)), (t = t.return);
            while (t);
            return e;
        } catch (l) {
            return (
                `
Error generating stack: ` +
                l.message +
                `
` +
                l.stack
            );
        }
    }
    function ye(t) {
        switch (typeof t) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return t;
            case 'object':
                return t;
            default:
                return '';
        }
    }
    function Hf(t) {
        var e = t.type;
        return (
            (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio')
        );
    }
    function Zd(t) {
        var e = Hf(t) ? 'checked' : 'value',
            l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            n = '' + t[e];
        if (
            !t.hasOwnProperty(e) &&
            typeof l != 'undefined' &&
            typeof l.get == 'function' &&
            typeof l.set == 'function'
        ) {
            var a = l.get,
                u = l.set;
            return (
                Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                        return a.call(this);
                    },
                    set: function (i) {
                        (n = '' + i), u.call(this, i);
                    },
                }),
                Object.defineProperty(t, e, {
                    enumerable: l.enumerable,
                }),
                {
                    getValue: function () {
                        return n;
                    },
                    setValue: function (i) {
                        n = '' + i;
                    },
                    stopTracking: function () {
                        (t._valueTracker = null), delete t[e];
                    },
                }
            );
        }
    }
    function ja(t) {
        t._valueTracker || (t._valueTracker = Zd(t));
    }
    function Rf(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var l = e.getValue(),
            n = '';
        return (
            t && (n = Hf(t) ? (t.checked ? 'true' : 'false') : t.value),
            (t = n),
            t !== l ? (e.setValue(t), !0) : !1
        );
    }
    function Ya(t) {
        if (
            ((t = t || (typeof document != 'undefined' ? document : void 0)),
            typeof t == 'undefined')
        )
            return null;
        try {
            return t.activeElement || t.body;
        } catch (e) {
            return t.body;
        }
    }
    var Kd = /[\n"\\]/g;
    function ge(t) {
        return t.replace(Kd, function (e) {
            return '\\' + e.charCodeAt(0).toString(16) + ' ';
        });
    }
    function ni(t, e, l, n, a, u, i, c) {
        (t.name = ''),
            i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean'
                ? (t.type = i)
                : t.removeAttribute('type'),
            e != null
                ? i === 'number'
                    ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + ye(e))
                    : t.value !== '' + ye(e) && (t.value = '' + ye(e))
                : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
            e != null
                ? ai(t, i, ye(e))
                : l != null
                  ? ai(t, i, ye(l))
                  : n != null && t.removeAttribute('value'),
            a == null && u != null && (t.defaultChecked = !!u),
            a != null && (t.checked = a && typeof a != 'function' && typeof a != 'symbol'),
            c != null && typeof c != 'function' && typeof c != 'symbol' && typeof c != 'boolean'
                ? (t.name = '' + ye(c))
                : t.removeAttribute('name');
    }
    function wf(t, e, l, n, a, u, i, c) {
        if (
            (u != null &&
                typeof u != 'function' &&
                typeof u != 'symbol' &&
                typeof u != 'boolean' &&
                (t.type = u),
            e != null || l != null)
        ) {
            if (!((u !== 'submit' && u !== 'reset') || e != null)) return;
            (l = l != null ? '' + ye(l) : ''),
                (e = e != null ? '' + ye(e) : l),
                c || e === t.value || (t.value = e),
                (t.defaultValue = e);
        }
        (n = n != null ? n : a),
            (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
            (t.checked = c ? t.checked : !!n),
            (t.defaultChecked = !!n),
            i != null &&
                typeof i != 'function' &&
                typeof i != 'symbol' &&
                typeof i != 'boolean' &&
                (t.name = i);
    }
    function ai(t, e, l) {
        (e === 'number' && Ya(t.ownerDocument) === t) ||
            t.defaultValue === '' + l ||
            (t.defaultValue = '' + l);
    }
    function $l(t, e, l, n) {
        if (((t = t.options), e)) {
            e = {};
            for (var a = 0; a < l.length; a++) e['$' + l[a]] = !0;
            for (l = 0; l < t.length; l++)
                (a = e.hasOwnProperty('$' + t[l].value)),
                    t[l].selected !== a && (t[l].selected = a),
                    a && n && (t[l].defaultSelected = !0);
        } else {
            for (l = '' + ye(l), e = null, a = 0; a < t.length; a++) {
                if (t[a].value === l) {
                    (t[a].selected = !0), n && (t[a].defaultSelected = !0);
                    return;
                }
                e !== null || t[a].disabled || (e = t[a]);
            }
            e !== null && (e.selected = !0);
        }
    }
    function qf(t, e, l) {
        if (e != null && ((e = '' + ye(e)), e !== t.value && (t.value = e), l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return;
        }
        t.defaultValue = l != null ? '' + ye(l) : '';
    }
    function jf(t, e, l, n) {
        if (e == null) {
            if (n != null) {
                if (l != null) throw Error(f(92));
                if (Jt(n)) {
                    if (1 < n.length) throw Error(f(93));
                    n = n[0];
                }
                l = n;
            }
            l == null && (l = ''), (e = l);
        }
        (l = ye(e)),
            (t.defaultValue = l),
            (n = t.textContent),
            n === l && n !== '' && n !== null && (t.value = n);
    }
    function Wl(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return;
            }
        }
        t.textContent = e;
    }
    var Jd = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
        ),
    );
    function Yf(t, e, l) {
        var n = e.indexOf('--') === 0;
        l == null || typeof l == 'boolean' || l === ''
            ? n
                ? t.setProperty(e, '')
                : e === 'float'
                  ? (t.cssFloat = '')
                  : (t[e] = '')
            : n
              ? t.setProperty(e, l)
              : typeof l != 'number' || l === 0 || Jd.has(e)
                ? e === 'float'
                    ? (t.cssFloat = l)
                    : (t[e] = ('' + l).trim())
                : (t[e] = l + 'px');
    }
    function Bf(t, e, l) {
        if (e != null && typeof e != 'object') throw Error(f(62));
        if (((t = t.style), l != null)) {
            for (var n in l)
                !l.hasOwnProperty(n) ||
                    (e != null && e.hasOwnProperty(n)) ||
                    (n.indexOf('--') === 0
                        ? t.setProperty(n, '')
                        : n === 'float'
                          ? (t.cssFloat = '')
                          : (t[n] = ''));
            for (var a in e) (n = e[a]), e.hasOwnProperty(a) && l[a] !== n && Yf(t, a, n);
        } else for (var u in e) e.hasOwnProperty(u) && Yf(t, u, e[u]);
    }
    function ui(t) {
        if (t.indexOf('-') === -1) return !1;
        switch (t) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1;
            default:
                return !0;
        }
    }
    var kd = /* @__PURE__ */ new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        $d =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ba(t) {
        return $d.test('' + t)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : t;
    }
    var ii = null;
    function ci(t) {
        return (
            (t = t.target || t.srcElement || window),
            t.correspondingUseElement && (t = t.correspondingUseElement),
            t.nodeType === 3 ? t.parentNode : t
        );
    }
    var Fl = null,
        Il = null;
    function Gf(t) {
        var e = Zl(t);
        if (e && (t = e.stateNode)) {
            var l = t[It] || null;
            t: switch (((t = e.stateNode), e.type)) {
                case 'input':
                    if (
                        (ni(
                            t,
                            l.value,
                            l.defaultValue,
                            l.defaultValue,
                            l.checked,
                            l.defaultChecked,
                            l.type,
                            l.name,
                        ),
                        (e = l.name),
                        l.type === 'radio' && e != null)
                    ) {
                        for (l = t; l.parentNode; ) l = l.parentNode;
                        for (
                            l = l.querySelectorAll(
                                'input[name="' + ge('' + e) + '"][type="radio"]',
                            ),
                                e = 0;
                            e < l.length;
                            e++
                        ) {
                            var n = l[e];
                            if (n !== t && n.form === t.form) {
                                var a = n[It] || null;
                                if (!a) throw Error(f(90));
                                ni(
                                    n,
                                    a.value,
                                    a.defaultValue,
                                    a.defaultValue,
                                    a.checked,
                                    a.defaultChecked,
                                    a.type,
                                    a.name,
                                );
                            }
                        }
                        for (e = 0; e < l.length; e++) (n = l[e]), n.form === t.form && Rf(n);
                    }
                    break t;
                case 'textarea':
                    qf(t, l.value, l.defaultValue);
                    break t;
                case 'select':
                    (e = l.value), e != null && $l(t, !!l.multiple, e, !1);
            }
        }
    }
    var fi = !1;
    function Cf(t, e, l) {
        if (fi) return t(e, l);
        fi = !0;
        try {
            var n = t(e);
            return n;
        } finally {
            if (
                ((fi = !1),
                (Fl !== null || Il !== null) &&
                    (Au(), Fl && ((e = Fl), (t = Il), (Il = Fl = null), Gf(e), t)))
            )
                for (e = 0; e < t.length; e++) Gf(t[e]);
        }
    }
    function wn(t, e) {
        var l = t.stateNode;
        if (l === null) return null;
        var n = l[It] || null;
        if (n === null) return null;
        l = n[e];
        t: switch (e) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                (n = !n.disabled) ||
                    ((t = t.type),
                    (n = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
                    (t = !n);
                break t;
            default:
                t = !1;
        }
        if (t) return null;
        if (l && typeof l != 'function') throw Error(f(231, e, typeof l));
        return l;
    }
    var je = !(
            typeof window == 'undefined' ||
            typeof window.document == 'undefined' ||
            typeof window.document.createElement == 'undefined'
        ),
        oi = !1;
    if (je)
        try {
            var qn = {};
            Object.defineProperty(qn, 'passive', {
                get: function () {
                    oi = !0;
                },
            }),
                window.addEventListener('test', qn, qn),
                window.removeEventListener('test', qn, qn);
        } catch (t) {
            oi = !1;
        }
    var Pe = null,
        si = null,
        Ga = null;
    function Vf() {
        if (Ga) return Ga;
        var t,
            e = si,
            l = e.length,
            n,
            a = 'value' in Pe ? Pe.value : Pe.textContent,
            u = a.length;
        for (t = 0; t < l && e[t] === a[t]; t++);
        var i = l - t;
        for (n = 1; n <= i && e[l - n] === a[u - n]; n++);
        return (Ga = a.slice(t, 1 < n ? 1 - n : void 0));
    }
    function Ca(t) {
        var e = t.keyCode;
        return (
            'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
            t === 10 && (t = 13),
            32 <= t || t === 13 ? t : 0
        );
    }
    function Va() {
        return !0;
    }
    function Xf() {
        return !1;
    }
    function Pt(t) {
        function e(l, n, a, u, i) {
            (this._reactName = l),
                (this._targetInst = a),
                (this.type = n),
                (this.nativeEvent = u),
                (this.target = i),
                (this.currentTarget = null);
            for (var c in t) t.hasOwnProperty(c) && ((l = t[c]), (this[c] = l ? l(u) : u[c]));
            return (
                (this.isDefaultPrevented = (
                    u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
                )
                    ? Va
                    : Xf),
                (this.isPropagationStopped = Xf),
                this
            );
        }
        return (
            y(e.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l &&
                        (l.preventDefault
                            ? l.preventDefault()
                            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
                        (this.isDefaultPrevented = Va));
                },
                stopPropagation: function () {
                    var l = this.nativeEvent;
                    l &&
                        (l.stopPropagation
                            ? l.stopPropagation()
                            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
                        (this.isPropagationStopped = Va));
                },
                persist: function () {},
                isPersistent: Va,
            }),
            e
        );
    }
    var zl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
                return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Xa = Pt(zl),
        jn = y({}, zl, { view: 0, detail: 0 }),
        Wd = Pt(jn),
        ri,
        di,
        Yn,
        Qa = y({}, jn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: vi,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
                return t.relatedTarget === void 0
                    ? t.fromElement === t.srcElement
                        ? t.toElement
                        : t.fromElement
                    : t.relatedTarget;
            },
            movementX: function (t) {
                return 'movementX' in t
                    ? t.movementX
                    : (t !== Yn &&
                          (Yn && t.type === 'mousemove'
                              ? ((ri = t.screenX - Yn.screenX), (di = t.screenY - Yn.screenY))
                              : (di = ri = 0),
                          (Yn = t)),
                      ri);
            },
            movementY: function (t) {
                return 'movementY' in t ? t.movementY : di;
            },
        }),
        Qf = Pt(Qa),
        Fd = y({}, Qa, { dataTransfer: 0 }),
        Id = Pt(Fd),
        Pd = y({}, jn, { relatedTarget: 0 }),
        hi = Pt(Pd),
        th = y({}, zl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
        }),
        eh = Pt(th),
        lh = y({}, zl, {
            clipboardData: function (t) {
                return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
            },
        }),
        nh = Pt(lh),
        ah = y({}, zl, { data: 0 }),
        Lf = Pt(ah),
        uh = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        ih = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        ch = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
        };
    function fh(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = ch[t]) ? !!e[t] : !1;
    }
    function vi() {
        return fh;
    }
    var oh = y({}, jn, {
            key: function (t) {
                if (t.key) {
                    var e = uh[t.key] || t.key;
                    if (e !== 'Unidentified') return e;
                }
                return t.type === 'keypress'
                    ? ((t = Ca(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
                    : t.type === 'keydown' || t.type === 'keyup'
                      ? ih[t.keyCode] || 'Unidentified'
                      : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: vi,
            charCode: function (t) {
                return t.type === 'keypress' ? Ca(t) : 0;
            },
            keyCode: function (t) {
                return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
            },
            which: function (t) {
                return t.type === 'keypress'
                    ? Ca(t)
                    : t.type === 'keydown' || t.type === 'keyup'
                      ? t.keyCode
                      : 0;
            },
        }),
        sh = Pt(oh),
        rh = y({}, Qa, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Zf = Pt(rh),
        dh = y({}, jn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: vi,
        }),
        hh = Pt(dh),
        vh = y({}, zl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
        }),
        yh = Pt(vh),
        gh = y({}, Qa, {
            deltaX: function (t) {
                return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
            },
            deltaY: function (t) {
                return 'deltaY' in t
                    ? t.deltaY
                    : 'wheelDeltaY' in t
                      ? -t.wheelDeltaY
                      : 'wheelDelta' in t
                        ? -t.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        mh = Pt(gh),
        ph = y({}, zl, {
            newState: 0,
            oldState: 0,
        }),
        Sh = Pt(ph),
        bh = [9, 13, 27, 32],
        yi = je && 'CompositionEvent' in window,
        Bn = null;
    je && 'documentMode' in document && (Bn = document.documentMode);
    var Eh = je && 'TextEvent' in window && !Bn,
        Kf = je && (!yi || (Bn && 8 < Bn && 11 >= Bn)),
        Jf = ' ',
        kf = !1;
    function $f(t, e) {
        switch (t) {
            case 'keyup':
                return bh.indexOf(e.keyCode) !== -1;
            case 'keydown':
                return e.keyCode !== 229;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0;
            default:
                return !1;
        }
    }
    function Wf(t) {
        return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
    }
    var Pl = !1;
    function Th(t, e) {
        switch (t) {
            case 'compositionend':
                return Wf(e);
            case 'keypress':
                return e.which !== 32 ? null : ((kf = !0), Jf);
            case 'textInput':
                return (t = e.data), t === Jf && kf ? null : t;
            default:
                return null;
        }
    }
    function Ah(t, e) {
        if (Pl)
            return t === 'compositionend' || (!yi && $f(t, e))
                ? ((t = Vf()), (Ga = si = Pe = null), (Pl = !1), t)
                : null;
        switch (t) {
            case 'paste':
                return null;
            case 'keypress':
                if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which);
                }
                return null;
            case 'compositionend':
                return Kf && e.locale !== 'ko' ? null : e.data;
            default:
                return null;
        }
    }
    var Oh = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function Ff(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === 'input' ? !!Oh[t.type] : e === 'textarea';
    }
    function If(t, e, l, n) {
        Fl ? (Il ? Il.push(n) : (Il = [n])) : (Fl = n),
            (e = _u(e, 'onChange')),
            0 < e.length &&
                ((l = new Xa('onChange', 'change', null, l, n)),
                t.push({ event: l, listeners: e }));
    }
    var Gn = null,
        Cn = null;
    function zh(t) {
        Rr(t, 0);
    }
    function La(t) {
        var e = Rn(t);
        if (Rf(e)) return t;
    }
    function Pf(t, e) {
        if (t === 'change') return e;
    }
    var to = !1;
    if (je) {
        var gi;
        if (je) {
            var mi = 'oninput' in document;
            if (!mi) {
                var eo = document.createElement('div');
                eo.setAttribute('oninput', 'return;'), (mi = typeof eo.oninput == 'function');
            }
            gi = mi;
        } else gi = !1;
        to = gi && (!document.documentMode || 9 < document.documentMode);
    }
    function lo() {
        Gn && (Gn.detachEvent('onpropertychange', no), (Cn = Gn = null));
    }
    function no(t) {
        if (t.propertyName === 'value' && La(Cn)) {
            var e = [];
            If(e, Cn, t, ci(t)), Cf(zh, e);
        }
    }
    function xh(t, e, l) {
        t === 'focusin'
            ? (lo(), (Gn = e), (Cn = l), Gn.attachEvent('onpropertychange', no))
            : t === 'focusout' && lo();
    }
    function Mh(t) {
        if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return La(Cn);
    }
    function Dh(t, e) {
        if (t === 'click') return La(e);
    }
    function _h(t, e) {
        if (t === 'input' || t === 'change') return La(e);
    }
    function Nh(t, e) {
        return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
    }
    var ce = typeof Object.is == 'function' ? Object.is : Nh;
    function Vn(t, e) {
        if (ce(t, e)) return !0;
        if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
        var l = Object.keys(t),
            n = Object.keys(e);
        if (l.length !== n.length) return !1;
        for (n = 0; n < l.length; n++) {
            var a = l[n];
            if (!Ku.call(e, a) || !ce(t[a], e[a])) return !1;
        }
        return !0;
    }
    function ao(t) {
        for (; t && t.firstChild; ) t = t.firstChild;
        return t;
    }
    function uo(t, e) {
        var l = ao(t);
        t = 0;
        for (var n; l; ) {
            if (l.nodeType === 3) {
                if (((n = t + l.textContent.length), t <= e && n >= e))
                    return { node: l, offset: e - t };
                t = n;
            }
            t: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t;
                    }
                    l = l.parentNode;
                }
                l = void 0;
            }
            l = ao(l);
        }
    }
    function io(t, e) {
        return t && e
            ? t === e
                ? !0
                : t && t.nodeType === 3
                  ? !1
                  : e && e.nodeType === 3
                    ? io(t, e.parentNode)
                    : 'contains' in t
                      ? t.contains(e)
                      : t.compareDocumentPosition
                        ? !!(t.compareDocumentPosition(e) & 16)
                        : !1
            : !1;
    }
    function co(t) {
        t =
            t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
                ? t.ownerDocument.defaultView
                : window;
        for (var e = Ya(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var l = typeof e.contentWindow.location.href == 'string';
            } catch (n) {
                l = !1;
            }
            if (l) t = e.contentWindow;
            else break;
            e = Ya(t.document);
        }
        return e;
    }
    function pi(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return (
            e &&
            ((e === 'input' &&
                (t.type === 'text' ||
                    t.type === 'search' ||
                    t.type === 'tel' ||
                    t.type === 'url' ||
                    t.type === 'password')) ||
                e === 'textarea' ||
                t.contentEditable === 'true')
        );
    }
    var Uh = je && 'documentMode' in document && 11 >= document.documentMode,
        tn = null,
        Si = null,
        Xn = null,
        bi = !1;
    function fo(t, e, l) {
        var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        bi ||
            tn == null ||
            tn !== Ya(n) ||
            ((n = tn),
            'selectionStart' in n && pi(n)
                ? (n = { start: n.selectionStart, end: n.selectionEnd })
                : ((n = (
                      (n.ownerDocument && n.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (n = {
                      anchorNode: n.anchorNode,
                      anchorOffset: n.anchorOffset,
                      focusNode: n.focusNode,
                      focusOffset: n.focusOffset,
                  })),
            (Xn && Vn(Xn, n)) ||
                ((Xn = n),
                (n = _u(Si, 'onSelect')),
                0 < n.length &&
                    ((e = new Xa('onSelect', 'select', null, e, l)),
                    t.push({ event: e, listeners: n }),
                    (e.target = tn))));
    }
    function xl(t, e) {
        var l = {};
        return (
            (l[t.toLowerCase()] = e.toLowerCase()),
            (l['Webkit' + t] = 'webkit' + e),
            (l['Moz' + t] = 'moz' + e),
            l
        );
    }
    var en = {
            animationend: xl('Animation', 'AnimationEnd'),
            animationiteration: xl('Animation', 'AnimationIteration'),
            animationstart: xl('Animation', 'AnimationStart'),
            transitionrun: xl('Transition', 'TransitionRun'),
            transitionstart: xl('Transition', 'TransitionStart'),
            transitioncancel: xl('Transition', 'TransitionCancel'),
            transitionend: xl('Transition', 'TransitionEnd'),
        },
        Ei = {},
        oo = {};
    je &&
        ((oo = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete en.animationend.animation,
            delete en.animationiteration.animation,
            delete en.animationstart.animation),
        'TransitionEvent' in window || delete en.transitionend.transition);
    function Ml(t) {
        if (Ei[t]) return Ei[t];
        if (!en[t]) return t;
        var e = en[t],
            l;
        for (l in e) if (e.hasOwnProperty(l) && l in oo) return (Ei[t] = e[l]);
        return t;
    }
    var so = Ml('animationend'),
        ro = Ml('animationiteration'),
        ho = Ml('animationstart'),
        Hh = Ml('transitionrun'),
        Rh = Ml('transitionstart'),
        wh = Ml('transitioncancel'),
        vo = Ml('transitionend'),
        yo = /* @__PURE__ */ new Map(),
        Ti =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' ',
            );
    Ti.push('scrollEnd');
    function Oe(t, e) {
        yo.set(t, e), Ol(e, [t]);
    }
    var go = /* @__PURE__ */ new WeakMap();
    function me(t, e) {
        if (typeof t == 'object' && t !== null) {
            var l = go.get(t);
            return l !== void 0
                ? l
                : ((e = {
                      value: t,
                      source: e,
                      stack: Uf(e),
                  }),
                  go.set(t, e),
                  e);
        }
        return {
            value: t,
            source: e,
            stack: Uf(e),
        };
    }
    var pe = [],
        ln = 0,
        Ai = 0;
    function Za() {
        for (var t = ln, e = (Ai = ln = 0); e < t; ) {
            var l = pe[e];
            pe[e++] = null;
            var n = pe[e];
            pe[e++] = null;
            var a = pe[e];
            pe[e++] = null;
            var u = pe[e];
            if (((pe[e++] = null), n !== null && a !== null)) {
                var i = n.pending;
                i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)), (n.pending = a);
            }
            u !== 0 && mo(l, a, u);
        }
    }
    function Ka(t, e, l, n) {
        (pe[ln++] = t),
            (pe[ln++] = e),
            (pe[ln++] = l),
            (pe[ln++] = n),
            (Ai |= n),
            (t.lanes |= n),
            (t = t.alternate),
            t !== null && (t.lanes |= n);
    }
    function Oi(t, e, l, n) {
        return Ka(t, e, l, n), Ja(t);
    }
    function nn(t, e) {
        return Ka(t, null, null, e), Ja(t);
    }
    function mo(t, e, l) {
        t.lanes |= l;
        var n = t.alternate;
        n !== null && (n.lanes |= l);
        for (var a = !1, u = t.return; u !== null; )
            (u.childLanes |= l),
                (n = u.alternate),
                n !== null && (n.childLanes |= l),
                u.tag === 22 && ((t = u.stateNode), t === null || t._visibility & 1 || (a = !0)),
                (t = u),
                (u = u.return);
        return t.tag === 3
            ? ((u = t.stateNode),
              a &&
                  e !== null &&
                  ((a = 31 - ie(l)),
                  (t = u.hiddenUpdates),
                  (n = t[a]),
                  n === null ? (t[a] = [e]) : n.push(e),
                  (e.lane = l | 536870912)),
              u)
            : null;
    }
    function Ja(t) {
        if (50 < ha) throw ((ha = 0), (Nc = null), Error(f(185)));
        for (var e = t.return; e !== null; ) (t = e), (e = t.return);
        return t.tag === 3 ? t.stateNode : null;
    }
    var an = {};
    function qh(t, e, l, n) {
        (this.tag = t),
            (this.key = l),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = e),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = n),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function fe(t, e, l, n) {
        return new qh(t, e, l, n);
    }
    function zi(t) {
        return (t = t.prototype), !(!t || !t.isReactComponent);
    }
    function Ye(t, e) {
        var l = t.alternate;
        return (
            l === null
                ? ((l = fe(t.tag, e, t.key, t.mode)),
                  (l.elementType = t.elementType),
                  (l.type = t.type),
                  (l.stateNode = t.stateNode),
                  (l.alternate = t),
                  (t.alternate = l))
                : ((l.pendingProps = e),
                  (l.type = t.type),
                  (l.flags = 0),
                  (l.subtreeFlags = 0),
                  (l.deletions = null)),
            (l.flags = t.flags & 65011712),
            (l.childLanes = t.childLanes),
            (l.lanes = t.lanes),
            (l.child = t.child),
            (l.memoizedProps = t.memoizedProps),
            (l.memoizedState = t.memoizedState),
            (l.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
            (l.sibling = t.sibling),
            (l.index = t.index),
            (l.ref = t.ref),
            (l.refCleanup = t.refCleanup),
            l
        );
    }
    function po(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return (
            l === null
                ? ((t.childLanes = 0),
                  (t.lanes = e),
                  (t.child = null),
                  (t.subtreeFlags = 0),
                  (t.memoizedProps = null),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  (t.dependencies = null),
                  (t.stateNode = null))
                : ((t.childLanes = l.childLanes),
                  (t.lanes = l.lanes),
                  (t.child = l.child),
                  (t.subtreeFlags = 0),
                  (t.deletions = null),
                  (t.memoizedProps = l.memoizedProps),
                  (t.memoizedState = l.memoizedState),
                  (t.updateQueue = l.updateQueue),
                  (t.type = l.type),
                  (e = l.dependencies),
                  (t.dependencies =
                      e === null
                          ? null
                          : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                            })),
            t
        );
    }
    function ka(t, e, l, n, a, u) {
        var i = 0;
        if (((n = t), typeof t == 'function')) zi(t) && (i = 1);
        else if (typeof t == 'string')
            i = Yv(t, l, X.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5;
        else
            t: switch (t) {
                case Ot:
                    return (t = fe(31, l, e, a)), (t.elementType = Ot), (t.lanes = u), t;
                case K:
                    return Dl(l.children, a, u, e);
                case k:
                    (i = 8), (a |= 24);
                    break;
                case W:
                    return (t = fe(12, l, e, a | 2)), (t.elementType = W), (t.lanes = u), t;
                case q:
                    return (t = fe(13, l, e, a)), (t.elementType = q), (t.lanes = u), t;
                case bt:
                    return (t = fe(19, l, e, a)), (t.elementType = bt), (t.lanes = u), t;
                default:
                    if (typeof t == 'object' && t !== null)
                        switch (t.$$typeof) {
                            case ct:
                            case dt:
                                i = 10;
                                break t;
                            case lt:
                                i = 9;
                                break t;
                            case I:
                                i = 11;
                                break t;
                            case vt:
                                i = 14;
                                break t;
                            case qt:
                                (i = 16), (n = null);
                                break t;
                        }
                    (i = 29), (l = Error(f(130, t === null ? 'null' : typeof t, ''))), (n = null);
            }
        return (e = fe(i, l, e, a)), (e.elementType = t), (e.type = n), (e.lanes = u), e;
    }
    function Dl(t, e, l, n) {
        return (t = fe(7, t, n, e)), (t.lanes = l), t;
    }
    function xi(t, e, l) {
        return (t = fe(6, t, null, e)), (t.lanes = l), t;
    }
    function Mi(t, e, l) {
        return (
            (e = fe(4, t.children !== null ? t.children : [], t.key, e)),
            (e.lanes = l),
            (e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation,
            }),
            e
        );
    }
    var un = [],
        cn = 0,
        $a = null,
        Wa = 0,
        Se = [],
        be = 0,
        _l = null,
        Be = 1,
        Ge = '';
    function Nl(t, e) {
        (un[cn++] = Wa), (un[cn++] = $a), ($a = t), (Wa = e);
    }
    function So(t, e, l) {
        (Se[be++] = Be), (Se[be++] = Ge), (Se[be++] = _l), (_l = t);
        var n = Be;
        t = Ge;
        var a = 32 - ie(n) - 1;
        (n &= ~(1 << a)), (l += 1);
        var u = 32 - ie(e) + a;
        if (30 < u) {
            var i = a - (a % 5);
            (u = (n & ((1 << i) - 1)).toString(32)),
                (n >>= i),
                (a -= i),
                (Be = (1 << (32 - ie(e) + a)) | (l << a) | n),
                (Ge = u + t);
        } else (Be = (1 << u) | (l << a) | n), (Ge = t);
    }
    function Di(t) {
        t.return !== null && (Nl(t, 1), So(t, 1, 0));
    }
    function _i(t) {
        for (; t === $a; ) ($a = un[--cn]), (un[cn] = null), (Wa = un[--cn]), (un[cn] = null);
        for (; t === _l; )
            (_l = Se[--be]),
                (Se[be] = null),
                (Ge = Se[--be]),
                (Se[be] = null),
                (Be = Se[--be]),
                (Se[be] = null);
    }
    var Ft = null,
        _t = null,
        ht = !1,
        Ul = null,
        _e = !1,
        Ni = Error(f(519));
    function Hl(t) {
        var e = Error(f(418, ''));
        throw (Zn(me(e, t)), Ni);
    }
    function bo(t) {
        var e = t.stateNode,
            l = t.type,
            n = t.memoizedProps;
        switch (((e[kt] = t), (e[It] = n), l)) {
            case 'dialog':
                at('cancel', e), at('close', e);
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                at('load', e);
                break;
            case 'video':
            case 'audio':
                for (l = 0; l < ya.length; l++) at(ya[l], e);
                break;
            case 'source':
                at('error', e);
                break;
            case 'img':
            case 'image':
            case 'link':
                at('error', e), at('load', e);
                break;
            case 'details':
                at('toggle', e);
                break;
            case 'input':
                at('invalid', e),
                    wf(e, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0),
                    ja(e);
                break;
            case 'select':
                at('invalid', e);
                break;
            case 'textarea':
                at('invalid', e), jf(e, n.value, n.defaultValue, n.children), ja(e);
        }
        (l = n.children),
            (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
            e.textContent === '' + l ||
            n.suppressHydrationWarning === !0 ||
            Yr(e.textContent, l)
                ? (n.popover != null && (at('beforetoggle', e), at('toggle', e)),
                  n.onScroll != null && at('scroll', e),
                  n.onScrollEnd != null && at('scrollend', e),
                  n.onClick != null && (e.onclick = Nu),
                  (e = !0))
                : (e = !1),
            e || Hl(t);
    }
    function Eo(t) {
        for (Ft = t.return; Ft; )
            switch (Ft.tag) {
                case 5:
                case 13:
                    _e = !1;
                    return;
                case 27:
                case 3:
                    _e = !0;
                    return;
                default:
                    Ft = Ft.return;
            }
    }
    function Qn(t) {
        if (t !== Ft) return !1;
        if (!ht) return Eo(t), (ht = !0), !1;
        var e = t.tag,
            l;
        if (
            ((l = e !== 3 && e !== 27) &&
                ((l = e === 5) &&
                    ((l = t.type),
                    (l = !(l !== 'form' && l !== 'button') || Kc(t.type, t.memoizedProps))),
                (l = !l)),
            l && _t && Hl(t),
            Eo(t),
            e === 13)
        ) {
            if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(f(317));
            t: {
                for (t = t.nextSibling, e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (((l = t.data), l === '/$')) {
                            if (e === 0) {
                                _t = xe(t.nextSibling);
                                break t;
                            }
                            e--;
                        } else (l !== '$' && l !== '$!' && l !== '$?') || e++;
                    t = t.nextSibling;
                }
                _t = null;
            }
        } else
            e === 27
                ? ((e = _t), yl(t.type) ? ((t = Wc), (Wc = null), (_t = t)) : (_t = e))
                : (_t = Ft ? xe(t.stateNode.nextSibling) : null);
        return !0;
    }
    function Ln() {
        (_t = Ft = null), (ht = !1);
    }
    function To() {
        var t = Ul;
        return t !== null && (le === null ? (le = t) : le.push.apply(le, t), (Ul = null)), t;
    }
    function Zn(t) {
        Ul === null ? (Ul = [t]) : Ul.push(t);
    }
    var Ui = H(null),
        Rl = null,
        Ce = null;
    function tl(t, e, l) {
        j(Ui, e._currentValue), (e._currentValue = l);
    }
    function Ve(t) {
        (t._currentValue = Ui.current), B(Ui);
    }
    function Hi(t, e, l) {
        for (; t !== null; ) {
            var n = t.alternate;
            if (
                ((t.childLanes & e) !== e
                    ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
                    : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
                t === l)
            )
                break;
            t = t.return;
        }
    }
    function Ri(t, e, l, n) {
        var a = t.child;
        for (a !== null && (a.return = t); a !== null; ) {
            var u = a.dependencies;
            if (u !== null) {
                var i = a.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var c = u;
                    u = a;
                    for (var r = 0; r < e.length; r++)
                        if (c.context === e[r]) {
                            (u.lanes |= l),
                                (c = u.alternate),
                                c !== null && (c.lanes |= l),
                                Hi(u.return, l, t),
                                n || (i = null);
                            break t;
                        }
                    u = c.next;
                }
            } else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(f(341));
                (i.lanes |= l),
                    (u = i.alternate),
                    u !== null && (u.lanes |= l),
                    Hi(i, l, t),
                    (i = null);
            } else i = a.child;
            if (i !== null) i.return = a;
            else
                for (i = a; i !== null; ) {
                    if (i === t) {
                        i = null;
                        break;
                    }
                    if (((a = i.sibling), a !== null)) {
                        (a.return = i.return), (i = a);
                        break;
                    }
                    i = i.return;
                }
            a = i;
        }
    }
    function Kn(t, e, l, n) {
        t = null;
        for (var a = e, u = !1; a !== null; ) {
            if (!u) {
                if ((a.flags & 524288) !== 0) u = !0;
                else if ((a.flags & 262144) !== 0) break;
            }
            if (a.tag === 10) {
                var i = a.alternate;
                if (i === null) throw Error(f(387));
                if (((i = i.memoizedProps), i !== null)) {
                    var c = a.type;
                    ce(a.pendingProps.value, i.value) || (t !== null ? t.push(c) : (t = [c]));
                }
            } else if (a === ae.current) {
                if (((i = a.alternate), i === null)) throw Error(f(387));
                i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                    (t !== null ? t.push(Ea) : (t = [Ea]));
            }
            a = a.return;
        }
        t !== null && Ri(e, t, l, n), (e.flags |= 262144);
    }
    function Fa(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!ce(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next;
        }
        return !1;
    }
    function wl(t) {
        (Rl = t), (Ce = null), (t = t.dependencies), t !== null && (t.firstContext = null);
    }
    function $t(t) {
        return Ao(Rl, t);
    }
    function Ia(t, e) {
        return Rl === null && wl(t), Ao(t, e);
    }
    function Ao(t, e) {
        var l = e._currentValue;
        if (((e = { context: e, memoizedValue: l, next: null }), Ce === null)) {
            if (t === null) throw Error(f(308));
            (Ce = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288);
        } else Ce = Ce.next = e;
        return l;
    }
    var jh =
            typeof AbortController != 'undefined'
                ? AbortController
                : function () {
                      var t = [],
                          e = (this.signal = {
                              aborted: !1,
                              addEventListener: function (l, n) {
                                  t.push(n);
                              },
                          });
                      this.abort = function () {
                          (e.aborted = !0),
                              t.forEach(function (l) {
                                  return l();
                              });
                      };
                  },
        Yh = x.unstable_scheduleCallback,
        Bh = x.unstable_NormalPriority,
        jt = {
            $$typeof: dt,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function wi() {
        return {
            controller: new jh(),
            data: /* @__PURE__ */ new Map(),
            refCount: 0,
        };
    }
    function Jn(t) {
        t.refCount--,
            t.refCount === 0 &&
                Yh(Bh, function () {
                    t.controller.abort();
                });
    }
    var kn = null,
        qi = 0,
        fn = 0,
        on = null;
    function Gh(t, e) {
        if (kn === null) {
            var l = (kn = []);
            (qi = 0),
                (fn = Yc()),
                (on = {
                    status: 'pending',
                    value: void 0,
                    then: function (n) {
                        l.push(n);
                    },
                });
        }
        return qi++, e.then(Oo, Oo), e;
    }
    function Oo() {
        if (--qi === 0 && kn !== null) {
            on !== null && (on.status = 'fulfilled');
            var t = kn;
            (kn = null), (fn = 0), (on = null);
            for (var e = 0; e < t.length; e++) (0, t[e])();
        }
    }
    function Ch(t, e) {
        var l = [],
            n = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (a) {
                    l.push(a);
                },
            };
        return (
            t.then(
                function () {
                    (n.status = 'fulfilled'), (n.value = e);
                    for (var a = 0; a < l.length; a++) (0, l[a])(e);
                },
                function (a) {
                    for (n.status = 'rejected', n.reason = a, a = 0; a < l.length; a++)
                        (0, l[a])(void 0);
                },
            ),
            n
        );
    }
    var zo = D.S;
    D.S = function (t, e) {
        typeof e == 'object' && e !== null && typeof e.then == 'function' && Gh(t, e),
            zo !== null && zo(t, e);
    };
    var ql = H(null);
    function ji() {
        var t = ql.current;
        return t !== null ? t : At.pooledCache;
    }
    function Pa(t, e) {
        e === null ? j(ql, ql.current) : j(ql, e.pool);
    }
    function xo() {
        var t = ji();
        return t === null ? null : { parent: jt._currentValue, pool: t };
    }
    var $n = Error(f(460)),
        Mo = Error(f(474)),
        tu = Error(f(542)),
        Yi = { then: function () {} };
    function Do(t) {
        return (t = t.status), t === 'fulfilled' || t === 'rejected';
    }
    function eu() {}
    function _o(t, e, l) {
        switch (
            ((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(eu, eu), (e = l)), e.status)
        ) {
            case 'fulfilled':
                return e.value;
            case 'rejected':
                throw ((t = e.reason), Uo(t), t);
            default:
                if (typeof e.status == 'string') e.then(eu, eu);
                else {
                    if (((t = At), t !== null && 100 < t.shellSuspendCounter)) throw Error(f(482));
                    (t = e),
                        (t.status = 'pending'),
                        t.then(
                            function (n) {
                                if (e.status === 'pending') {
                                    var a = e;
                                    (a.status = 'fulfilled'), (a.value = n);
                                }
                            },
                            function (n) {
                                if (e.status === 'pending') {
                                    var a = e;
                                    (a.status = 'rejected'), (a.reason = n);
                                }
                            },
                        );
                }
                switch (e.status) {
                    case 'fulfilled':
                        return e.value;
                    case 'rejected':
                        throw ((t = e.reason), Uo(t), t);
                }
                throw ((Wn = e), $n);
        }
    }
    var Wn = null;
    function No() {
        if (Wn === null) throw Error(f(459));
        var t = Wn;
        return (Wn = null), t;
    }
    function Uo(t) {
        if (t === $n || t === tu) throw Error(f(483));
    }
    var el = !1;
    function Bi(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Gi(t, e) {
        (t = t.updateQueue),
            e.updateQueue === t &&
                (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    callbacks: null,
                });
    }
    function ll(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function nl(t, e, l) {
        var n = t.updateQueue;
        if (n === null) return null;
        if (((n = n.shared), (yt & 2) !== 0)) {
            var a = n.pending;
            return (
                a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
                (n.pending = e),
                (e = Ja(t)),
                mo(t, null, l),
                e
            );
        }
        return Ka(t, n, e, l), Ja(t);
    }
    function Fn(t, e, l) {
        if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))) {
            var n = e.lanes;
            (n &= t.pendingLanes), (l |= n), (e.lanes = l), Af(t, l);
        }
    }
    function Ci(t, e) {
        var l = t.updateQueue,
            n = t.alternate;
        if (n !== null && ((n = n.updateQueue), l === n)) {
            var a = null,
                u = null;
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var i = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                    };
                    u === null ? (a = u = i) : (u = u.next = i), (l = l.next);
                } while (l !== null);
                u === null ? (a = u = e) : (u = u.next = e);
            } else a = u = e;
            (l = {
                baseState: n.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: u,
                shared: n.shared,
                callbacks: n.callbacks,
            }),
                (t.updateQueue = l);
            return;
        }
        (t = l.lastBaseUpdate),
            t === null ? (l.firstBaseUpdate = e) : (t.next = e),
            (l.lastBaseUpdate = e);
    }
    var Vi = !1;
    function In() {
        if (Vi) {
            var t = on;
            if (t !== null) throw t;
        }
    }
    function Pn(t, e, l, n) {
        Vi = !1;
        var a = t.updateQueue;
        el = !1;
        var u = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            c = a.shared.pending;
        if (c !== null) {
            a.shared.pending = null;
            var r = c,
                E = r.next;
            (r.next = null), i === null ? (u = E) : (i.next = E), (i = r);
            var M = t.alternate;
            M !== null &&
                ((M = M.updateQueue),
                (c = M.lastBaseUpdate),
                c !== i &&
                    (c === null ? (M.firstBaseUpdate = E) : (c.next = E), (M.lastBaseUpdate = r)));
        }
        if (u !== null) {
            var U = a.baseState;
            (i = 0), (M = E = r = null), (c = u);
            do {
                var A = c.lane & -536870913,
                    O = A !== c.lane;
                if (O ? (ut & A) === A : (n & A) === A) {
                    A !== 0 && A === fn && (Vi = !0),
                        M !== null &&
                            (M = M.next =
                                {
                                    lane: 0,
                                    tag: c.tag,
                                    payload: c.payload,
                                    callback: null,
                                    next: null,
                                });
                    t: {
                        var J = t,
                            Q = c;
                        A = e;
                        var St = l;
                        switch (Q.tag) {
                            case 1:
                                if (((J = Q.payload), typeof J == 'function')) {
                                    U = J.call(St, U, A);
                                    break t;
                                }
                                U = J;
                                break t;
                            case 3:
                                J.flags = (J.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((J = Q.payload),
                                    (A = typeof J == 'function' ? J.call(St, U, A) : J),
                                    A == null)
                                )
                                    break t;
                                U = y({}, U, A);
                                break t;
                            case 2:
                                el = !0;
                        }
                    }
                    (A = c.callback),
                        A !== null &&
                            ((t.flags |= 64),
                            O && (t.flags |= 8192),
                            (O = a.callbacks),
                            O === null ? (a.callbacks = [A]) : O.push(A));
                } else
                    (O = {
                        lane: A,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null,
                    }),
                        M === null ? ((E = M = O), (r = U)) : (M = M.next = O),
                        (i |= A);
                if (((c = c.next), c === null)) {
                    if (((c = a.shared.pending), c === null)) break;
                    (O = c),
                        (c = O.next),
                        (O.next = null),
                        (a.lastBaseUpdate = O),
                        (a.shared.pending = null);
                }
            } while (!0);
            M === null && (r = U),
                (a.baseState = r),
                (a.firstBaseUpdate = E),
                (a.lastBaseUpdate = M),
                u === null && (a.shared.lanes = 0),
                (rl |= i),
                (t.lanes = i),
                (t.memoizedState = U);
        }
    }
    function Ho(t, e) {
        if (typeof t != 'function') throw Error(f(191, t));
        t.call(e);
    }
    function Ro(t, e) {
        var l = t.callbacks;
        if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) Ho(l[t], e);
    }
    var sn = H(null),
        lu = H(0);
    function wo(t, e) {
        (t = ke), j(lu, t), j(sn, e), (ke = t | e.baseLanes);
    }
    function Xi() {
        j(lu, ke), j(sn, sn.current);
    }
    function Qi() {
        (ke = lu.current), B(sn), B(lu);
    }
    var al = 0,
        P = null,
        mt = null,
        Rt = null,
        nu = !1,
        rn = !1,
        jl = !1,
        au = 0,
        ta = 0,
        dn = null,
        Vh = 0;
    function Ut() {
        throw Error(f(321));
    }
    function Li(t, e) {
        if (e === null) return !1;
        for (var l = 0; l < e.length && l < t.length; l++) if (!ce(t[l], e[l])) return !1;
        return !0;
    }
    function Zi(t, e, l, n, a, u) {
        return (
            (al = u),
            (P = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (D.H = t === null || t.memoizedState === null ? ms : ps),
            (jl = !1),
            (u = l(n, a)),
            (jl = !1),
            rn && (u = jo(e, l, n, a)),
            qo(t),
            u
        );
    }
    function qo(t) {
        D.H = su;
        var e = mt !== null && mt.next !== null;
        if (((al = 0), (Rt = mt = P = null), (nu = !1), (ta = 0), (dn = null), e))
            throw Error(f(300));
        t === null || Gt || ((t = t.dependencies), t !== null && Fa(t) && (Gt = !0));
    }
    function jo(t, e, l, n) {
        P = t;
        var a = 0;
        do {
            if ((rn && (dn = null), (ta = 0), (rn = !1), 25 <= a)) throw Error(f(301));
            if (((a += 1), (Rt = mt = null), t.updateQueue != null)) {
                var u = t.updateQueue;
                (u.lastEffect = null),
                    (u.events = null),
                    (u.stores = null),
                    u.memoCache != null && (u.memoCache.index = 0);
            }
            (D.H = kh), (u = e(l, n));
        } while (rn);
        return u;
    }
    function Xh() {
        var t = D.H,
            e = t.useState()[0];
        return (
            (e = typeof e.then == 'function' ? ea(e) : e),
            (t = t.useState()[0]),
            (mt !== null ? mt.memoizedState : null) !== t && (P.flags |= 1024),
            e
        );
    }
    function Ki() {
        var t = au !== 0;
        return (au = 0), t;
    }
    function Ji(t, e, l) {
        (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
    }
    function ki(t) {
        if (nu) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null), (t = t.next);
            }
            nu = !1;
        }
        (al = 0), (Rt = mt = P = null), (rn = !1), (ta = au = 0), (dn = null);
    }
    function te() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return Rt === null ? (P.memoizedState = Rt = t) : (Rt = Rt.next = t), Rt;
    }
    function wt() {
        if (mt === null) {
            var t = P.alternate;
            t = t !== null ? t.memoizedState : null;
        } else t = mt.next;
        var e = Rt === null ? P.memoizedState : Rt.next;
        if (e !== null) (Rt = e), (mt = t);
        else {
            if (t === null) throw P.alternate === null ? Error(f(467)) : Error(f(310));
            (mt = t),
                (t = {
                    memoizedState: mt.memoizedState,
                    baseState: mt.baseState,
                    baseQueue: mt.baseQueue,
                    queue: mt.queue,
                    next: null,
                }),
                Rt === null ? (P.memoizedState = Rt = t) : (Rt = Rt.next = t);
        }
        return Rt;
    }
    function $i() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ea(t) {
        var e = ta;
        return (
            (ta += 1),
            dn === null && (dn = []),
            (t = _o(dn, t, e)),
            (e = P),
            (Rt === null ? e.memoizedState : Rt.next) === null &&
                ((e = e.alternate), (D.H = e === null || e.memoizedState === null ? ms : ps)),
            t
        );
    }
    function uu(t) {
        if (t !== null && typeof t == 'object') {
            if (typeof t.then == 'function') return ea(t);
            if (t.$$typeof === dt) return $t(t);
        }
        throw Error(f(438, String(t)));
    }
    function Wi(t) {
        var e = null,
            l = P.updateQueue;
        if ((l !== null && (e = l.memoCache), e == null)) {
            var n = P.alternate;
            n !== null &&
                ((n = n.updateQueue),
                n !== null &&
                    ((n = n.memoCache),
                    n != null &&
                        (e = {
                            data: n.data.map(function (a) {
                                return a.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (e == null && (e = { data: [], index: 0 }),
            l === null && ((l = $i()), (P.updateQueue = l)),
            (l.memoCache = e),
            (l = e.data[e.index]),
            l === void 0)
        )
            for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = zt;
        return e.index++, l;
    }
    function Xe(t, e) {
        return typeof e == 'function' ? e(t) : e;
    }
    function iu(t) {
        var e = wt();
        return Fi(e, mt, t);
    }
    function Fi(t, e, l) {
        var n = t.queue;
        if (n === null) throw Error(f(311));
        n.lastRenderedReducer = l;
        var a = t.baseQueue,
            u = n.pending;
        if (u !== null) {
            if (a !== null) {
                var i = a.next;
                (a.next = u.next), (u.next = i);
            }
            (e.baseQueue = a = u), (n.pending = null);
        }
        if (((u = t.baseState), a === null)) t.memoizedState = u;
        else {
            e = a.next;
            var c = (i = null),
                r = null,
                E = e,
                M = !1;
            do {
                var U = E.lane & -536870913;
                if (U !== E.lane ? (ut & U) === U : (al & U) === U) {
                    var A = E.revertLane;
                    if (A === 0)
                        r !== null &&
                            (r = r.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    action: E.action,
                                    hasEagerState: E.hasEagerState,
                                    eagerState: E.eagerState,
                                    next: null,
                                }),
                            U === fn && (M = !0);
                    else if ((al & A) === A) {
                        (E = E.next), A === fn && (M = !0);
                        continue;
                    } else
                        (U = {
                            lane: 0,
                            revertLane: E.revertLane,
                            action: E.action,
                            hasEagerState: E.hasEagerState,
                            eagerState: E.eagerState,
                            next: null,
                        }),
                            r === null ? ((c = r = U), (i = u)) : (r = r.next = U),
                            (P.lanes |= A),
                            (rl |= A);
                    (U = E.action), jl && l(u, U), (u = E.hasEagerState ? E.eagerState : l(u, U));
                } else
                    (A = {
                        lane: U,
                        revertLane: E.revertLane,
                        action: E.action,
                        hasEagerState: E.hasEagerState,
                        eagerState: E.eagerState,
                        next: null,
                    }),
                        r === null ? ((c = r = A), (i = u)) : (r = r.next = A),
                        (P.lanes |= U),
                        (rl |= U);
                E = E.next;
            } while (E !== null && E !== e);
            if (
                (r === null ? (i = u) : (r.next = c),
                !ce(u, t.memoizedState) && ((Gt = !0), M && ((l = on), l !== null)))
            )
                throw l;
            (t.memoizedState = u), (t.baseState = i), (t.baseQueue = r), (n.lastRenderedState = u);
        }
        return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
    }
    function Ii(t) {
        var e = wt(),
            l = e.queue;
        if (l === null) throw Error(f(311));
        l.lastRenderedReducer = t;
        var n = l.dispatch,
            a = l.pending,
            u = e.memoizedState;
        if (a !== null) {
            l.pending = null;
            var i = (a = a.next);
            do (u = t(u, i.action)), (i = i.next);
            while (i !== a);
            ce(u, e.memoizedState) || (Gt = !0),
                (e.memoizedState = u),
                e.baseQueue === null && (e.baseState = u),
                (l.lastRenderedState = u);
        }
        return [u, n];
    }
    function Yo(t, e, l) {
        var n = P,
            a = wt(),
            u = ht;
        if (u) {
            if (l === void 0) throw Error(f(407));
            l = l();
        } else l = e();
        var i = !ce((mt || a).memoizedState, l);
        i && ((a.memoizedState = l), (Gt = !0)), (a = a.queue);
        var c = Co.bind(null, n, a, t);
        if (
            (la(2048, 8, c, [t]),
            a.getSnapshot !== e || i || (Rt !== null && Rt.memoizedState.tag & 1))
        ) {
            if (((n.flags |= 2048), hn(9, cu(), Go.bind(null, n, a, l, e), null), At === null))
                throw Error(f(349));
            u || (al & 124) !== 0 || Bo(n, e, l);
        }
        return l;
    }
    function Bo(t, e, l) {
        (t.flags |= 16384),
            (t = { getSnapshot: e, value: l }),
            (e = P.updateQueue),
            e === null
                ? ((e = $i()), (P.updateQueue = e), (e.stores = [t]))
                : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
    }
    function Go(t, e, l, n) {
        (e.value = l), (e.getSnapshot = n), Vo(e) && Xo(t);
    }
    function Co(t, e, l) {
        return l(function () {
            Vo(e) && Xo(t);
        });
    }
    function Vo(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !ce(t, l);
        } catch (n) {
            return !0;
        }
    }
    function Xo(t) {
        var e = nn(t, 2);
        e !== null && he(e, t, 2);
    }
    function Pi(t) {
        var e = te();
        if (typeof t == 'function') {
            var l = t;
            if (((t = l()), jl)) {
                Fe(!0);
                try {
                    l();
                } finally {
                    Fe(!1);
                }
            }
        }
        return (
            (e.memoizedState = e.baseState = t),
            (e.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xe,
                lastRenderedState: t,
            }),
            e
        );
    }
    function Qo(t, e, l, n) {
        return (t.baseState = l), Fi(t, mt, typeof n == 'function' ? n : Xe);
    }
    function Qh(t, e, l, n, a) {
        if (ou(t)) throw Error(f(485));
        if (((t = e.action), t !== null)) {
            var u = {
                payload: a,
                action: t,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (i) {
                    u.listeners.push(i);
                },
            };
            D.T !== null ? l(!0) : (u.isTransition = !1),
                n(u),
                (l = e.pending),
                l === null
                    ? ((u.next = e.pending = u), Lo(e, u))
                    : ((u.next = l.next), (e.pending = l.next = u));
        }
    }
    function Lo(t, e) {
        var l = e.action,
            n = e.payload,
            a = t.state;
        if (e.isTransition) {
            var u = D.T,
                i = {};
            D.T = i;
            try {
                var c = l(a, n),
                    r = D.S;
                r !== null && r(i, c), Zo(t, e, c);
            } catch (E) {
                tc(t, e, E);
            } finally {
                D.T = u;
            }
        } else
            try {
                (u = l(a, n)), Zo(t, e, u);
            } catch (E) {
                tc(t, e, E);
            }
    }
    function Zo(t, e, l) {
        l !== null && typeof l == 'object' && typeof l.then == 'function'
            ? l.then(
                  function (n) {
                      Ko(t, e, n);
                  },
                  function (n) {
                      return tc(t, e, n);
                  },
              )
            : Ko(t, e, l);
    }
    function Ko(t, e, l) {
        (e.status = 'fulfilled'),
            (e.value = l),
            Jo(e),
            (t.state = l),
            (e = t.pending),
            e !== null &&
                ((l = e.next),
                l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Lo(t, l)));
    }
    function tc(t, e, l) {
        var n = t.pending;
        if (((t.pending = null), n !== null)) {
            n = n.next;
            do (e.status = 'rejected'), (e.reason = l), Jo(e), (e = e.next);
            while (e !== n);
        }
        t.action = null;
    }
    function Jo(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function ko(t, e) {
        return e;
    }
    function $o(t, e) {
        if (ht) {
            var l = At.formState;
            if (l !== null) {
                t: {
                    var n = P;
                    if (ht) {
                        if (_t) {
                            e: {
                                for (var a = _t, u = _e; a.nodeType !== 8; ) {
                                    if (!u) {
                                        a = null;
                                        break e;
                                    }
                                    if (((a = xe(a.nextSibling)), a === null)) {
                                        a = null;
                                        break e;
                                    }
                                }
                                (u = a.data), (a = u === 'F!' || u === 'F' ? a : null);
                            }
                            if (a) {
                                (_t = xe(a.nextSibling)), (n = a.data === 'F!');
                                break t;
                            }
                        }
                        Hl(n);
                    }
                    n = !1;
                }
                n && (e = l[0]);
            }
        }
        return (
            (l = te()),
            (l.memoizedState = l.baseState = e),
            (n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ko,
                lastRenderedState: e,
            }),
            (l.queue = n),
            (l = vs.bind(null, P, n)),
            (n.dispatch = l),
            (n = Pi(!1)),
            (u = uc.bind(null, P, !1, n.queue)),
            (n = te()),
            (a = {
                state: e,
                dispatch: null,
                action: t,
                pending: null,
            }),
            (n.queue = a),
            (l = Qh.bind(null, P, a, u, l)),
            (a.dispatch = l),
            (n.memoizedState = t),
            [e, l, !1]
        );
    }
    function Wo(t) {
        var e = wt();
        return Fo(e, mt, t);
    }
    function Fo(t, e, l) {
        if (
            ((e = Fi(t, e, ko)[0]),
            (t = iu(Xe)[0]),
            typeof e == 'object' && e !== null && typeof e.then == 'function')
        )
            try {
                var n = ea(e);
            } catch (i) {
                throw i === $n ? tu : i;
            }
        else n = e;
        e = wt();
        var a = e.queue,
            u = a.dispatch;
        return (
            l !== e.memoizedState && ((P.flags |= 2048), hn(9, cu(), Lh.bind(null, a, l), null)),
            [n, u, t]
        );
    }
    function Lh(t, e) {
        t.action = e;
    }
    function Io(t) {
        var e = wt(),
            l = mt;
        if (l !== null) return Fo(e, l, t);
        wt(), (e = e.memoizedState), (l = wt());
        var n = l.queue.dispatch;
        return (l.memoizedState = t), [e, n, !1];
    }
    function hn(t, e, l, n) {
        return (
            (t = { tag: t, create: l, deps: n, inst: e, next: null }),
            (e = P.updateQueue),
            e === null && ((e = $i()), (P.updateQueue = e)),
            (l = e.lastEffect),
            l === null
                ? (e.lastEffect = t.next = t)
                : ((n = l.next), (l.next = t), (t.next = n), (e.lastEffect = t)),
            t
        );
    }
    function cu() {
        return { destroy: void 0, resource: void 0 };
    }
    function Po() {
        return wt().memoizedState;
    }
    function fu(t, e, l, n) {
        var a = te();
        (n = n === void 0 ? null : n), (P.flags |= t), (a.memoizedState = hn(1 | e, cu(), l, n));
    }
    function la(t, e, l, n) {
        var a = wt();
        n = n === void 0 ? null : n;
        var u = a.memoizedState.inst;
        mt !== null && n !== null && Li(n, mt.memoizedState.deps)
            ? (a.memoizedState = hn(e, u, l, n))
            : ((P.flags |= t), (a.memoizedState = hn(1 | e, u, l, n)));
    }
    function ts(t, e) {
        fu(8390656, 8, t, e);
    }
    function es(t, e) {
        la(2048, 8, t, e);
    }
    function ls(t, e) {
        return la(4, 2, t, e);
    }
    function ns(t, e) {
        return la(4, 4, t, e);
    }
    function as(t, e) {
        if (typeof e == 'function') {
            t = t();
            var l = e(t);
            return function () {
                typeof l == 'function' ? l() : e(null);
            };
        }
        if (e != null)
            return (
                (t = t()),
                (e.current = t),
                function () {
                    e.current = null;
                }
            );
    }
    function us(t, e, l) {
        (l = l != null ? l.concat([t]) : null), la(4, 4, as.bind(null, e, t), l);
    }
    function ec() {}
    function is(t, e) {
        var l = wt();
        e = e === void 0 ? null : e;
        var n = l.memoizedState;
        return e !== null && Li(e, n[1]) ? n[0] : ((l.memoizedState = [t, e]), t);
    }
    function cs(t, e) {
        var l = wt();
        e = e === void 0 ? null : e;
        var n = l.memoizedState;
        if (e !== null && Li(e, n[1])) return n[0];
        if (((n = t()), jl)) {
            Fe(!0);
            try {
                t();
            } finally {
                Fe(!1);
            }
        }
        return (l.memoizedState = [n, e]), n;
    }
    function lc(t, e, l) {
        return l === void 0 || (al & 1073741824) !== 0
            ? (t.memoizedState = e)
            : ((t.memoizedState = l), (t = sr()), (P.lanes |= t), (rl |= t), l);
    }
    function fs(t, e, l, n) {
        return ce(l, e)
            ? l
            : sn.current !== null
              ? ((t = lc(t, l, n)), ce(t, e) || (Gt = !0), t)
              : (al & 42) === 0
                ? ((Gt = !0), (t.memoizedState = l))
                : ((t = sr()), (P.lanes |= t), (rl |= t), e);
    }
    function os(t, e, l, n, a) {
        var u = Y.p;
        Y.p = u !== 0 && 8 > u ? u : 8;
        var i = D.T,
            c = {};
        (D.T = c), uc(t, !1, e, l);
        try {
            var r = a(),
                E = D.S;
            if (
                (E !== null && E(c, r),
                r !== null && typeof r == 'object' && typeof r.then == 'function')
            ) {
                var M = Ch(r, n);
                na(t, e, M, de(t));
            } else na(t, e, n, de(t));
        } catch (U) {
            na(t, e, { then: function () {}, status: 'rejected', reason: U }, de());
        } finally {
            (Y.p = u), (D.T = i);
        }
    }
    function Zh() {}
    function nc(t, e, l, n) {
        if (t.tag !== 5) throw Error(f(476));
        var a = ss(t).queue;
        os(
            t,
            a,
            e,
            Z,
            l === null
                ? Zh
                : function () {
                      return rs(t), l(n);
                  },
        );
    }
    function ss(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: Z,
            baseState: Z,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xe,
                lastRenderedState: Z,
            },
            next: null,
        };
        var l = {};
        return (
            (e.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Xe,
                    lastRenderedState: l,
                },
                next: null,
            }),
            (t.memoizedState = e),
            (t = t.alternate),
            t !== null && (t.memoizedState = e),
            e
        );
    }
    function rs(t) {
        var e = ss(t).next.queue;
        na(t, e, {}, de());
    }
    function ac() {
        return $t(Ea);
    }
    function ds() {
        return wt().memoizedState;
    }
    function hs() {
        return wt().memoizedState;
    }
    function Kh(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
                case 24:
                case 3:
                    var l = de();
                    t = ll(l);
                    var n = nl(e, t, l);
                    n !== null && (he(n, e, l), Fn(n, e, l)),
                        (e = { cache: wi() }),
                        (t.payload = e);
                    return;
            }
            e = e.return;
        }
    }
    function Jh(t, e, l) {
        var n = de();
        (l = {
            lane: n,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            ou(t) ? ys(e, l) : ((l = Oi(t, e, l, n)), l !== null && (he(l, t, n), gs(l, e, n)));
    }
    function vs(t, e, l) {
        var n = de();
        na(t, e, l, n);
    }
    function na(t, e, l, n) {
        var a = {
            lane: n,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
        if (ou(t)) ys(e, a);
        else {
            var u = t.alternate;
            if (
                t.lanes === 0 &&
                (u === null || u.lanes === 0) &&
                ((u = e.lastRenderedReducer), u !== null)
            )
                try {
                    var i = e.lastRenderedState,
                        c = u(i, l);
                    if (((a.hasEagerState = !0), (a.eagerState = c), ce(c, i)))
                        return Ka(t, e, a, 0), At === null && Za(), !1;
                } catch (r) {
                } finally {
                }
            if (((l = Oi(t, e, a, n)), l !== null)) return he(l, t, n), gs(l, e, n), !0;
        }
        return !1;
    }
    function uc(t, e, l, n) {
        if (
            ((n = {
                lane: 2,
                revertLane: Yc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            ou(t))
        ) {
            if (e) throw Error(f(479));
        } else (e = Oi(t, l, n, 2)), e !== null && he(e, t, 2);
    }
    function ou(t) {
        var e = t.alternate;
        return t === P || (e !== null && e === P);
    }
    function ys(t, e) {
        rn = nu = !0;
        var l = t.pending;
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e);
    }
    function gs(t, e, l) {
        if ((l & 4194048) !== 0) {
            var n = e.lanes;
            (n &= t.pendingLanes), (l |= n), (e.lanes = l), Af(t, l);
        }
    }
    var su = {
            readContext: $t,
            use: uu,
            useCallback: Ut,
            useContext: Ut,
            useEffect: Ut,
            useImperativeHandle: Ut,
            useLayoutEffect: Ut,
            useInsertionEffect: Ut,
            useMemo: Ut,
            useReducer: Ut,
            useRef: Ut,
            useState: Ut,
            useDebugValue: Ut,
            useDeferredValue: Ut,
            useTransition: Ut,
            useSyncExternalStore: Ut,
            useId: Ut,
            useHostTransitionStatus: Ut,
            useFormState: Ut,
            useActionState: Ut,
            useOptimistic: Ut,
            useMemoCache: Ut,
            useCacheRefresh: Ut,
        },
        ms = {
            readContext: $t,
            use: uu,
            useCallback: function (t, e) {
                return (te().memoizedState = [t, e === void 0 ? null : e]), t;
            },
            useContext: $t,
            useEffect: ts,
            useImperativeHandle: function (t, e, l) {
                (l = l != null ? l.concat([t]) : null), fu(4194308, 4, as.bind(null, e, t), l);
            },
            useLayoutEffect: function (t, e) {
                return fu(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
                fu(4, 2, t, e);
            },
            useMemo: function (t, e) {
                var l = te();
                e = e === void 0 ? null : e;
                var n = t();
                if (jl) {
                    Fe(!0);
                    try {
                        t();
                    } finally {
                        Fe(!1);
                    }
                }
                return (l.memoizedState = [n, e]), n;
            },
            useReducer: function (t, e, l) {
                var n = te();
                if (l !== void 0) {
                    var a = l(e);
                    if (jl) {
                        Fe(!0);
                        try {
                            l(e);
                        } finally {
                            Fe(!1);
                        }
                    }
                } else a = e;
                return (
                    (n.memoizedState = n.baseState = a),
                    (t = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: a,
                    }),
                    (n.queue = t),
                    (t = t.dispatch = Jh.bind(null, P, t)),
                    [n.memoizedState, t]
                );
            },
            useRef: function (t) {
                var e = te();
                return (t = { current: t }), (e.memoizedState = t);
            },
            useState: function (t) {
                t = Pi(t);
                var e = t.queue,
                    l = vs.bind(null, P, e);
                return (e.dispatch = l), [t.memoizedState, l];
            },
            useDebugValue: ec,
            useDeferredValue: function (t, e) {
                var l = te();
                return lc(l, t, e);
            },
            useTransition: function () {
                var t = Pi(!1);
                return (t = os.bind(null, P, t.queue, !0, !1)), (te().memoizedState = t), [!1, t];
            },
            useSyncExternalStore: function (t, e, l) {
                var n = P,
                    a = te();
                if (ht) {
                    if (l === void 0) throw Error(f(407));
                    l = l();
                } else {
                    if (((l = e()), At === null)) throw Error(f(349));
                    (ut & 124) !== 0 || Bo(n, e, l);
                }
                a.memoizedState = l;
                var u = { value: l, getSnapshot: e };
                return (
                    (a.queue = u),
                    ts(Co.bind(null, n, u, t), [t]),
                    (n.flags |= 2048),
                    hn(9, cu(), Go.bind(null, n, u, l, e), null),
                    l
                );
            },
            useId: function () {
                var t = te(),
                    e = At.identifierPrefix;
                if (ht) {
                    var l = Ge,
                        n = Be;
                    (l = (n & ~(1 << (32 - ie(n) - 1))).toString(32) + l),
                        (e = '«' + e + 'R' + l),
                        (l = au++),
                        0 < l && (e += 'H' + l.toString(32)),
                        (e += '»');
                } else (l = Vh++), (e = '«' + e + 'r' + l.toString(32) + '»');
                return (t.memoizedState = e);
            },
            useHostTransitionStatus: ac,
            useFormState: $o,
            useActionState: $o,
            useOptimistic: function (t) {
                var e = te();
                e.memoizedState = e.baseState = t;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null,
                };
                return (e.queue = l), (e = uc.bind(null, P, !0, l)), (l.dispatch = e), [t, e];
            },
            useMemoCache: Wi,
            useCacheRefresh: function () {
                return (te().memoizedState = Kh.bind(null, P));
            },
        },
        ps = {
            readContext: $t,
            use: uu,
            useCallback: is,
            useContext: $t,
            useEffect: es,
            useImperativeHandle: us,
            useInsertionEffect: ls,
            useLayoutEffect: ns,
            useMemo: cs,
            useReducer: iu,
            useRef: Po,
            useState: function () {
                return iu(Xe);
            },
            useDebugValue: ec,
            useDeferredValue: function (t, e) {
                var l = wt();
                return fs(l, mt.memoizedState, t, e);
            },
            useTransition: function () {
                var t = iu(Xe)[0],
                    e = wt().memoizedState;
                return [typeof t == 'boolean' ? t : ea(t), e];
            },
            useSyncExternalStore: Yo,
            useId: ds,
            useHostTransitionStatus: ac,
            useFormState: Wo,
            useActionState: Wo,
            useOptimistic: function (t, e) {
                var l = wt();
                return Qo(l, mt, t, e);
            },
            useMemoCache: Wi,
            useCacheRefresh: hs,
        },
        kh = {
            readContext: $t,
            use: uu,
            useCallback: is,
            useContext: $t,
            useEffect: es,
            useImperativeHandle: us,
            useInsertionEffect: ls,
            useLayoutEffect: ns,
            useMemo: cs,
            useReducer: Ii,
            useRef: Po,
            useState: function () {
                return Ii(Xe);
            },
            useDebugValue: ec,
            useDeferredValue: function (t, e) {
                var l = wt();
                return mt === null ? lc(l, t, e) : fs(l, mt.memoizedState, t, e);
            },
            useTransition: function () {
                var t = Ii(Xe)[0],
                    e = wt().memoizedState;
                return [typeof t == 'boolean' ? t : ea(t), e];
            },
            useSyncExternalStore: Yo,
            useId: ds,
            useHostTransitionStatus: ac,
            useFormState: Io,
            useActionState: Io,
            useOptimistic: function (t, e) {
                var l = wt();
                return mt !== null ? Qo(l, mt, t, e) : ((l.baseState = t), [t, l.queue.dispatch]);
            },
            useMemoCache: Wi,
            useCacheRefresh: hs,
        },
        vn = null,
        aa = 0;
    function ru(t) {
        var e = aa;
        return (aa += 1), vn === null && (vn = []), _o(vn, t, e);
    }
    function ua(t, e) {
        (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
    }
    function du(t, e) {
        throw e.$$typeof === N
            ? Error(f(525))
            : ((t = Object.prototype.toString.call(e)),
              Error(
                  f(
                      31,
                      t === '[object Object]'
                          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                          : t,
                  ),
              ));
    }
    function Ss(t) {
        var e = t._init;
        return e(t._payload);
    }
    function bs(t) {
        function e(S, v) {
            if (t) {
                var b = S.deletions;
                b === null ? ((S.deletions = [v]), (S.flags |= 16)) : b.push(v);
            }
        }
        function l(S, v) {
            if (!t) return null;
            for (; v !== null; ) e(S, v), (v = v.sibling);
            return null;
        }
        function n(S) {
            for (var v = /* @__PURE__ */ new Map(); S !== null; )
                S.key !== null ? v.set(S.key, S) : v.set(S.index, S), (S = S.sibling);
            return v;
        }
        function a(S, v) {
            return (S = Ye(S, v)), (S.index = 0), (S.sibling = null), S;
        }
        function u(S, v, b) {
            return (
                (S.index = b),
                t
                    ? ((b = S.alternate),
                      b !== null
                          ? ((b = b.index), b < v ? ((S.flags |= 67108866), v) : b)
                          : ((S.flags |= 67108866), v))
                    : ((S.flags |= 1048576), v)
            );
        }
        function i(S) {
            return t && S.alternate === null && (S.flags |= 67108866), S;
        }
        function c(S, v, b, _) {
            return v === null || v.tag !== 6
                ? ((v = xi(b, S.mode, _)), (v.return = S), v)
                : ((v = a(v, b)), (v.return = S), v);
        }
        function r(S, v, b, _) {
            var G = b.type;
            return G === K
                ? M(S, v, b.props.children, _, b.key)
                : v !== null &&
                    (v.elementType === G ||
                        (typeof G == 'object' &&
                            G !== null &&
                            G.$$typeof === qt &&
                            Ss(G) === v.type))
                  ? ((v = a(v, b.props)), ua(v, b), (v.return = S), v)
                  : ((v = ka(b.type, b.key, b.props, null, S.mode, _)),
                    ua(v, b),
                    (v.return = S),
                    v);
        }
        function E(S, v, b, _) {
            return v === null ||
                v.tag !== 4 ||
                v.stateNode.containerInfo !== b.containerInfo ||
                v.stateNode.implementation !== b.implementation
                ? ((v = Mi(b, S.mode, _)), (v.return = S), v)
                : ((v = a(v, b.children || [])), (v.return = S), v);
        }
        function M(S, v, b, _, G) {
            return v === null || v.tag !== 7
                ? ((v = Dl(b, S.mode, _, G)), (v.return = S), v)
                : ((v = a(v, b)), (v.return = S), v);
        }
        function U(S, v, b) {
            if ((typeof v == 'string' && v !== '') || typeof v == 'number' || typeof v == 'bigint')
                return (v = xi('' + v, S.mode, b)), (v.return = S), v;
            if (typeof v == 'object' && v !== null) {
                switch (v.$$typeof) {
                    case R:
                        return (
                            (b = ka(v.type, v.key, v.props, null, S.mode, b)),
                            ua(b, v),
                            (b.return = S),
                            b
                        );
                    case w:
                        return (v = Mi(v, S.mode, b)), (v.return = S), v;
                    case qt:
                        var _ = v._init;
                        return (v = _(v._payload)), U(S, v, b);
                }
                if (Jt(v) || V(v)) return (v = Dl(v, S.mode, b, null)), (v.return = S), v;
                if (typeof v.then == 'function') return U(S, ru(v), b);
                if (v.$$typeof === dt) return U(S, Ia(S, v), b);
                du(S, v);
            }
            return null;
        }
        function A(S, v, b, _) {
            var G = v !== null ? v.key : null;
            if ((typeof b == 'string' && b !== '') || typeof b == 'number' || typeof b == 'bigint')
                return G !== null ? null : c(S, v, '' + b, _);
            if (typeof b == 'object' && b !== null) {
                switch (b.$$typeof) {
                    case R:
                        return b.key === G ? r(S, v, b, _) : null;
                    case w:
                        return b.key === G ? E(S, v, b, _) : null;
                    case qt:
                        return (G = b._init), (b = G(b._payload)), A(S, v, b, _);
                }
                if (Jt(b) || V(b)) return G !== null ? null : M(S, v, b, _, null);
                if (typeof b.then == 'function') return A(S, v, ru(b), _);
                if (b.$$typeof === dt) return A(S, v, Ia(S, b), _);
                du(S, b);
            }
            return null;
        }
        function O(S, v, b, _, G) {
            if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number' || typeof _ == 'bigint')
                return (S = S.get(b) || null), c(v, S, '' + _, G);
            if (typeof _ == 'object' && _ !== null) {
                switch (_.$$typeof) {
                    case R:
                        return (S = S.get(_.key === null ? b : _.key) || null), r(v, S, _, G);
                    case w:
                        return (S = S.get(_.key === null ? b : _.key) || null), E(v, S, _, G);
                    case qt:
                        var tt = _._init;
                        return (_ = tt(_._payload)), O(S, v, b, _, G);
                }
                if (Jt(_) || V(_)) return (S = S.get(b) || null), M(v, S, _, G, null);
                if (typeof _.then == 'function') return O(S, v, b, ru(_), G);
                if (_.$$typeof === dt) return O(S, v, b, Ia(v, _), G);
                du(v, _);
            }
            return null;
        }
        function J(S, v, b, _) {
            for (
                var G = null, tt = null, C = v, L = (v = 0), Vt = null;
                C !== null && L < b.length;
                L++
            ) {
                C.index > L ? ((Vt = C), (C = null)) : (Vt = C.sibling);
                var rt = A(S, C, b[L], _);
                if (rt === null) {
                    C === null && (C = Vt);
                    break;
                }
                t && C && rt.alternate === null && e(S, C),
                    (v = u(rt, v, L)),
                    tt === null ? (G = rt) : (tt.sibling = rt),
                    (tt = rt),
                    (C = Vt);
            }
            if (L === b.length) return l(S, C), ht && Nl(S, L), G;
            if (C === null) {
                for (; L < b.length; L++)
                    (C = U(S, b[L], _)),
                        C !== null &&
                            ((v = u(C, v, L)), tt === null ? (G = C) : (tt.sibling = C), (tt = C));
                return ht && Nl(S, L), G;
            }
            for (C = n(C); L < b.length; L++)
                (Vt = O(C, S, L, b[L], _)),
                    Vt !== null &&
                        (t && Vt.alternate !== null && C.delete(Vt.key === null ? L : Vt.key),
                        (v = u(Vt, v, L)),
                        tt === null ? (G = Vt) : (tt.sibling = Vt),
                        (tt = Vt));
            return (
                t &&
                    C.forEach(function (bl) {
                        return e(S, bl);
                    }),
                ht && Nl(S, L),
                G
            );
        }
        function Q(S, v, b, _) {
            if (b == null) throw Error(f(151));
            for (
                var G = null, tt = null, C = v, L = (v = 0), Vt = null, rt = b.next();
                C !== null && !rt.done;
                L++, rt = b.next()
            ) {
                C.index > L ? ((Vt = C), (C = null)) : (Vt = C.sibling);
                var bl = A(S, C, rt.value, _);
                if (bl === null) {
                    C === null && (C = Vt);
                    break;
                }
                t && C && bl.alternate === null && e(S, C),
                    (v = u(bl, v, L)),
                    tt === null ? (G = bl) : (tt.sibling = bl),
                    (tt = bl),
                    (C = Vt);
            }
            if (rt.done) return l(S, C), ht && Nl(S, L), G;
            if (C === null) {
                for (; !rt.done; L++, rt = b.next())
                    (rt = U(S, rt.value, _)),
                        rt !== null &&
                            ((v = u(rt, v, L)),
                            tt === null ? (G = rt) : (tt.sibling = rt),
                            (tt = rt));
                return ht && Nl(S, L), G;
            }
            for (C = n(C); !rt.done; L++, rt = b.next())
                (rt = O(C, S, L, rt.value, _)),
                    rt !== null &&
                        (t && rt.alternate !== null && C.delete(rt.key === null ? L : rt.key),
                        (v = u(rt, v, L)),
                        tt === null ? (G = rt) : (tt.sibling = rt),
                        (tt = rt));
            return (
                t &&
                    C.forEach(function ($v) {
                        return e(S, $v);
                    }),
                ht && Nl(S, L),
                G
            );
        }
        function St(S, v, b, _) {
            if (
                (typeof b == 'object' &&
                    b !== null &&
                    b.type === K &&
                    b.key === null &&
                    (b = b.props.children),
                typeof b == 'object' && b !== null)
            ) {
                switch (b.$$typeof) {
                    case R:
                        t: {
                            for (var G = b.key; v !== null; ) {
                                if (v.key === G) {
                                    if (((G = b.type), G === K)) {
                                        if (v.tag === 7) {
                                            l(S, v.sibling),
                                                (_ = a(v, b.props.children)),
                                                (_.return = S),
                                                (S = _);
                                            break t;
                                        }
                                    } else if (
                                        v.elementType === G ||
                                        (typeof G == 'object' &&
                                            G !== null &&
                                            G.$$typeof === qt &&
                                            Ss(G) === v.type)
                                    ) {
                                        l(S, v.sibling),
                                            (_ = a(v, b.props)),
                                            ua(_, b),
                                            (_.return = S),
                                            (S = _);
                                        break t;
                                    }
                                    l(S, v);
                                    break;
                                } else e(S, v);
                                v = v.sibling;
                            }
                            b.type === K
                                ? ((_ = Dl(b.props.children, S.mode, _, b.key)),
                                  (_.return = S),
                                  (S = _))
                                : ((_ = ka(b.type, b.key, b.props, null, S.mode, _)),
                                  ua(_, b),
                                  (_.return = S),
                                  (S = _));
                        }
                        return i(S);
                    case w:
                        t: {
                            for (G = b.key; v !== null; ) {
                                if (v.key === G)
                                    if (
                                        v.tag === 4 &&
                                        v.stateNode.containerInfo === b.containerInfo &&
                                        v.stateNode.implementation === b.implementation
                                    ) {
                                        l(S, v.sibling),
                                            (_ = a(v, b.children || [])),
                                            (_.return = S),
                                            (S = _);
                                        break t;
                                    } else {
                                        l(S, v);
                                        break;
                                    }
                                else e(S, v);
                                v = v.sibling;
                            }
                            (_ = Mi(b, S.mode, _)), (_.return = S), (S = _);
                        }
                        return i(S);
                    case qt:
                        return (G = b._init), (b = G(b._payload)), St(S, v, b, _);
                }
                if (Jt(b)) return J(S, v, b, _);
                if (V(b)) {
                    if (((G = V(b)), typeof G != 'function')) throw Error(f(150));
                    return (b = G.call(b)), Q(S, v, b, _);
                }
                if (typeof b.then == 'function') return St(S, v, ru(b), _);
                if (b.$$typeof === dt) return St(S, v, Ia(S, b), _);
                du(S, b);
            }
            return (typeof b == 'string' && b !== '') ||
                typeof b == 'number' ||
                typeof b == 'bigint'
                ? ((b = '' + b),
                  v !== null && v.tag === 6
                      ? (l(S, v.sibling), (_ = a(v, b)), (_.return = S), (S = _))
                      : (l(S, v), (_ = xi(b, S.mode, _)), (_.return = S), (S = _)),
                  i(S))
                : l(S, v);
        }
        return function (S, v, b, _) {
            try {
                aa = 0;
                var G = St(S, v, b, _);
                return (vn = null), G;
            } catch (C) {
                if (C === $n || C === tu) throw C;
                var tt = fe(29, C, null, S.mode);
                return (tt.lanes = _), (tt.return = S), tt;
            } finally {
            }
        };
    }
    var yn = bs(!0),
        Es = bs(!1),
        Ee = H(null),
        Ne = null;
    function ul(t) {
        var e = t.alternate;
        j(Yt, Yt.current & 1),
            j(Ee, t),
            Ne === null &&
                (e === null || sn.current !== null || e.memoizedState !== null) &&
                (Ne = t);
    }
    function Ts(t) {
        if (t.tag === 22) {
            if ((j(Yt, Yt.current), j(Ee, t), Ne === null)) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (Ne = t);
            }
        } else il();
    }
    function il() {
        j(Yt, Yt.current), j(Ee, Ee.current);
    }
    function Qe(t) {
        B(Ee), Ne === t && (Ne = null), B(Yt);
    }
    var Yt = H(0);
    function hu(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || $c(l)))
                    return e;
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0) return e;
            } else if (e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
            }
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return null;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
        return null;
    }
    function ic(t, e, l, n) {
        (e = t.memoizedState),
            (l = l(n, e)),
            (l = l == null ? e : y({}, e, l)),
            (t.memoizedState = l),
            t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var cc = {
        enqueueSetState: function (t, e, l) {
            t = t._reactInternals;
            var n = de(),
                a = ll(n);
            (a.payload = e),
                l != null && (a.callback = l),
                (e = nl(t, a, n)),
                e !== null && (he(e, t, n), Fn(e, t, n));
        },
        enqueueReplaceState: function (t, e, l) {
            t = t._reactInternals;
            var n = de(),
                a = ll(n);
            (a.tag = 1),
                (a.payload = e),
                l != null && (a.callback = l),
                (e = nl(t, a, n)),
                e !== null && (he(e, t, n), Fn(e, t, n));
        },
        enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var l = de(),
                n = ll(l);
            (n.tag = 2),
                e != null && (n.callback = e),
                (e = nl(t, n, l)),
                e !== null && (he(e, t, l), Fn(e, t, l));
        },
    };
    function As(t, e, l, n, a, u, i) {
        return (
            (t = t.stateNode),
            typeof t.shouldComponentUpdate == 'function'
                ? t.shouldComponentUpdate(n, u, i)
                : e.prototype && e.prototype.isPureReactComponent
                  ? !Vn(l, n) || !Vn(a, u)
                  : !0
        );
    }
    function Os(t, e, l, n) {
        (t = e.state),
            typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(l, n),
            typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
                e.UNSAFE_componentWillReceiveProps(l, n),
            e.state !== t && cc.enqueueReplaceState(e, e.state, null);
    }
    function Yl(t, e) {
        var l = e;
        if ('ref' in e) {
            l = {};
            for (var n in e) n !== 'ref' && (l[n] = e[n]);
        }
        if ((t = t.defaultProps)) {
            l === e && (l = y({}, l));
            for (var a in t) l[a] === void 0 && (l[a] = t[a]);
        }
        return l;
    }
    var vu =
        typeof reportError == 'function'
            ? reportError
            : function (t) {
                  if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                      var e = new window.ErrorEvent('error', {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof t == 'object' && t !== null && typeof t.message == 'string'
                                  ? String(t.message)
                                  : String(t),
                          error: t,
                      });
                      if (!window.dispatchEvent(e)) return;
                  } else if (typeof process == 'object' && typeof process.emit == 'function') {
                      process.emit('uncaughtException', t);
                      return;
                  }
                  console.error(t);
              };
    function zs(t) {
        vu(t);
    }
    function xs(t) {
        console.error(t);
    }
    function Ms(t) {
        vu(t);
    }
    function yu(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, { componentStack: e.stack });
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    function Ds(t, e, l) {
        try {
            var n = t.onCaughtError;
            n(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null,
            });
        } catch (a) {
            setTimeout(function () {
                throw a;
            });
        }
    }
    function fc(t, e, l) {
        return (
            (l = ll(l)),
            (l.tag = 3),
            (l.payload = { element: null }),
            (l.callback = function () {
                yu(t, e);
            }),
            l
        );
    }
    function _s(t) {
        return (t = ll(t)), (t.tag = 3), t;
    }
    function Ns(t, e, l, n) {
        var a = l.type.getDerivedStateFromError;
        if (typeof a == 'function') {
            var u = n.value;
            (t.payload = function () {
                return a(u);
            }),
                (t.callback = function () {
                    Ds(e, l, n);
                });
        }
        var i = l.stateNode;
        i !== null &&
            typeof i.componentDidCatch == 'function' &&
            (t.callback = function () {
                Ds(e, l, n),
                    typeof a != 'function' &&
                        (dl === null ? (dl = /* @__PURE__ */ new Set([this])) : dl.add(this));
                var c = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: c !== null ? c : '',
                });
            });
    }
    function $h(t, e, l, n, a) {
        if (
            ((l.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')
        ) {
            if (((e = l.alternate), e !== null && Kn(e, l, a, !0), (l = Ee.current), l !== null)) {
                switch (l.tag) {
                    case 13:
                        return (
                            Ne === null ? Hc() : l.alternate === null && Nt === 0 && (Nt = 3),
                            (l.flags &= -257),
                            (l.flags |= 65536),
                            (l.lanes = a),
                            n === Yi
                                ? (l.flags |= 16384)
                                : ((e = l.updateQueue),
                                  e === null
                                      ? (l.updateQueue = /* @__PURE__ */ new Set([n]))
                                      : e.add(n),
                                  wc(t, n, a)),
                            !1
                        );
                    case 22:
                        return (
                            (l.flags |= 65536),
                            n === Yi
                                ? (l.flags |= 16384)
                                : ((e = l.updateQueue),
                                  e === null
                                      ? ((e = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: /* @__PURE__ */ new Set([n]),
                                        }),
                                        (l.updateQueue = e))
                                      : ((l = e.retryQueue),
                                        l === null
                                            ? (e.retryQueue = /* @__PURE__ */ new Set([n]))
                                            : l.add(n)),
                                  wc(t, n, a)),
                            !1
                        );
                }
                throw Error(f(435, l.tag));
            }
            return wc(t, n, a), Hc(), !1;
        }
        if (ht)
            return (
                (e = Ee.current),
                e !== null
                    ? ((e.flags & 65536) === 0 && (e.flags |= 256),
                      (e.flags |= 65536),
                      (e.lanes = a),
                      n !== Ni && ((t = Error(f(422), { cause: n })), Zn(me(t, l))))
                    : (n !== Ni &&
                          ((e = Error(f(423), {
                              cause: n,
                          })),
                          Zn(me(e, l))),
                      (t = t.current.alternate),
                      (t.flags |= 65536),
                      (a &= -a),
                      (t.lanes |= a),
                      (n = me(n, l)),
                      (a = fc(t.stateNode, n, a)),
                      Ci(t, a),
                      Nt !== 4 && (Nt = 2)),
                !1
            );
        var u = Error(f(520), { cause: n });
        if (
            ((u = me(u, l)),
            da === null ? (da = [u]) : da.push(u),
            Nt !== 4 && (Nt = 2),
            e === null)
        )
            return !0;
        (n = me(n, l)), (l = e);
        do {
            switch (l.tag) {
                case 3:
                    return (
                        (l.flags |= 65536),
                        (t = a & -a),
                        (l.lanes |= t),
                        (t = fc(l.stateNode, n, t)),
                        Ci(l, t),
                        !1
                    );
                case 1:
                    if (
                        ((e = l.type),
                        (u = l.stateNode),
                        (l.flags & 128) === 0 &&
                            (typeof e.getDerivedStateFromError == 'function' ||
                                (u !== null &&
                                    typeof u.componentDidCatch == 'function' &&
                                    (dl === null || !dl.has(u)))))
                    )
                        return (
                            (l.flags |= 65536),
                            (a &= -a),
                            (l.lanes |= a),
                            (a = _s(a)),
                            Ns(a, t, l, n),
                            Ci(l, a),
                            !1
                        );
            }
            l = l.return;
        } while (l !== null);
        return !1;
    }
    var Us = Error(f(461)),
        Gt = !1;
    function Qt(t, e, l, n) {
        e.child = t === null ? Es(e, null, l, n) : yn(e, t.child, l, n);
    }
    function Hs(t, e, l, n, a) {
        l = l.render;
        var u = e.ref;
        if ('ref' in n) {
            var i = {};
            for (var c in n) c !== 'ref' && (i[c] = n[c]);
        } else i = n;
        return (
            wl(e),
            (n = Zi(t, e, l, i, u, a)),
            (c = Ki()),
            t !== null && !Gt
                ? (Ji(t, e, a), Le(t, e, a))
                : (ht && c && Di(e), (e.flags |= 1), Qt(t, e, n, a), e.child)
        );
    }
    function Rs(t, e, l, n, a) {
        if (t === null) {
            var u = l.type;
            return typeof u == 'function' &&
                !zi(u) &&
                u.defaultProps === void 0 &&
                l.compare === null
                ? ((e.tag = 15), (e.type = u), ws(t, e, u, n, a))
                : ((t = ka(l.type, null, n, e, e.mode, a)),
                  (t.ref = e.ref),
                  (t.return = e),
                  (e.child = t));
        }
        if (((u = t.child), !gc(t, a))) {
            var i = u.memoizedProps;
            if (((l = l.compare), (l = l !== null ? l : Vn), l(i, n) && t.ref === e.ref))
                return Le(t, e, a);
        }
        return (e.flags |= 1), (t = Ye(u, n)), (t.ref = e.ref), (t.return = e), (e.child = t);
    }
    function ws(t, e, l, n, a) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Vn(u, n) && t.ref === e.ref)
                if (((Gt = !1), (e.pendingProps = n = u), gc(t, a)))
                    (t.flags & 131072) !== 0 && (Gt = !0);
                else return (e.lanes = t.lanes), Le(t, e, a);
        }
        return oc(t, e, l, n, a);
    }
    function qs(t, e, l) {
        var n = e.pendingProps,
            a = n.children,
            u = t !== null ? t.memoizedState : null;
        if (n.mode === 'hidden') {
            if ((e.flags & 128) !== 0) {
                if (((n = u !== null ? u.baseLanes | l : l), t !== null)) {
                    for (a = e.child = t.child, u = 0; a !== null; )
                        (u = u | a.lanes | a.childLanes), (a = a.sibling);
                    e.childLanes = u & ~n;
                } else (e.childLanes = 0), (e.child = null);
                return js(t, e, n, l);
            }
            if ((l & 536870912) !== 0)
                (e.memoizedState = { baseLanes: 0, cachePool: null }),
                    t !== null && Pa(e, u !== null ? u.cachePool : null),
                    u !== null ? wo(e, u) : Xi(),
                    Ts(e);
            else
                return (
                    (e.lanes = e.childLanes = 536870912),
                    js(t, e, u !== null ? u.baseLanes | l : l, l)
                );
        } else
            u !== null
                ? (Pa(e, u.cachePool), wo(e, u), il(), (e.memoizedState = null))
                : (t !== null && Pa(e, null), Xi(), il());
        return Qt(t, e, a, l), e.child;
    }
    function js(t, e, l, n) {
        var a = ji();
        return (
            (a = a === null ? null : { parent: jt._currentValue, pool: a }),
            (e.memoizedState = {
                baseLanes: l,
                cachePool: a,
            }),
            t !== null && Pa(e, null),
            Xi(),
            Ts(e),
            t !== null && Kn(t, e, n, !0),
            null
        );
    }
    function gu(t, e) {
        var l = e.ref;
        if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816);
        }
    }
    function oc(t, e, l, n, a) {
        return (
            wl(e),
            (l = Zi(t, e, l, n, void 0, a)),
            (n = Ki()),
            t !== null && !Gt
                ? (Ji(t, e, a), Le(t, e, a))
                : (ht && n && Di(e), (e.flags |= 1), Qt(t, e, l, a), e.child)
        );
    }
    function Ys(t, e, l, n, a, u) {
        return (
            wl(e),
            (e.updateQueue = null),
            (l = jo(e, n, l, a)),
            qo(t),
            (n = Ki()),
            t !== null && !Gt
                ? (Ji(t, e, u), Le(t, e, u))
                : (ht && n && Di(e), (e.flags |= 1), Qt(t, e, l, u), e.child)
        );
    }
    function Bs(t, e, l, n, a) {
        if ((wl(e), e.stateNode === null)) {
            var u = an,
                i = l.contextType;
            typeof i == 'object' && i !== null && (u = $t(i)),
                (u = new l(n, u)),
                (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
                (u.updater = cc),
                (e.stateNode = u),
                (u._reactInternals = e),
                (u = e.stateNode),
                (u.props = n),
                (u.state = e.memoizedState),
                (u.refs = {}),
                Bi(e),
                (i = l.contextType),
                (u.context = typeof i == 'object' && i !== null ? $t(i) : an),
                (u.state = e.memoizedState),
                (i = l.getDerivedStateFromProps),
                typeof i == 'function' && (ic(e, l, i, n), (u.state = e.memoizedState)),
                typeof l.getDerivedStateFromProps == 'function' ||
                    typeof u.getSnapshotBeforeUpdate == 'function' ||
                    (typeof u.UNSAFE_componentWillMount != 'function' &&
                        typeof u.componentWillMount != 'function') ||
                    ((i = u.state),
                    typeof u.componentWillMount == 'function' && u.componentWillMount(),
                    typeof u.UNSAFE_componentWillMount == 'function' &&
                        u.UNSAFE_componentWillMount(),
                    i !== u.state && cc.enqueueReplaceState(u, u.state, null),
                    Pn(e, n, u, a),
                    In(),
                    (u.state = e.memoizedState)),
                typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
                (n = !0);
        } else if (t === null) {
            u = e.stateNode;
            var c = e.memoizedProps,
                r = Yl(l, c);
            u.props = r;
            var E = u.context,
                M = l.contextType;
            (i = an), typeof M == 'object' && M !== null && (i = $t(M));
            var U = l.getDerivedStateFromProps;
            (M = typeof U == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
                (c = e.pendingProps !== c),
                M ||
                    (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof u.componentWillReceiveProps != 'function') ||
                    ((c || E !== i) && Os(e, u, n, i)),
                (el = !1);
            var A = e.memoizedState;
            (u.state = A),
                Pn(e, n, u, a),
                In(),
                (E = e.memoizedState),
                c || A !== E || el
                    ? (typeof U == 'function' && (ic(e, l, U, n), (E = e.memoizedState)),
                      (r = el || As(e, l, r, n, A, E, i))
                          ? (M ||
                                (typeof u.UNSAFE_componentWillMount != 'function' &&
                                    typeof u.componentWillMount != 'function') ||
                                (typeof u.componentWillMount == 'function' &&
                                    u.componentWillMount(),
                                typeof u.UNSAFE_componentWillMount == 'function' &&
                                    u.UNSAFE_componentWillMount()),
                            typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
                          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
                            (e.memoizedProps = n),
                            (e.memoizedState = E)),
                      (u.props = n),
                      (u.state = E),
                      (u.context = i),
                      (n = r))
                    : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308), (n = !1));
        } else {
            (u = e.stateNode),
                Gi(t, e),
                (i = e.memoizedProps),
                (M = Yl(l, i)),
                (u.props = M),
                (U = e.pendingProps),
                (A = u.context),
                (E = l.contextType),
                (r = an),
                typeof E == 'object' && E !== null && (r = $t(E)),
                (c = l.getDerivedStateFromProps),
                (E = typeof c == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
                    (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof u.componentWillReceiveProps != 'function') ||
                    ((i !== U || A !== r) && Os(e, u, n, r)),
                (el = !1),
                (A = e.memoizedState),
                (u.state = A),
                Pn(e, n, u, a),
                In();
            var O = e.memoizedState;
            i !== U ||
            A !== O ||
            el ||
            (t !== null && t.dependencies !== null && Fa(t.dependencies))
                ? (typeof c == 'function' && (ic(e, l, c, n), (O = e.memoizedState)),
                  (M =
                      el ||
                      As(e, l, M, n, A, O, r) ||
                      (t !== null && t.dependencies !== null && Fa(t.dependencies)))
                      ? (E ||
                            (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                                typeof u.componentWillUpdate != 'function') ||
                            (typeof u.componentWillUpdate == 'function' &&
                                u.componentWillUpdate(n, O, r),
                            typeof u.UNSAFE_componentWillUpdate == 'function' &&
                                u.UNSAFE_componentWillUpdate(n, O, r)),
                        typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
                      : (typeof u.componentDidUpdate != 'function' ||
                            (i === t.memoizedProps && A === t.memoizedState) ||
                            (e.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate != 'function' ||
                            (i === t.memoizedProps && A === t.memoizedState) ||
                            (e.flags |= 1024),
                        (e.memoizedProps = n),
                        (e.memoizedState = O)),
                  (u.props = n),
                  (u.state = O),
                  (u.context = r),
                  (n = M))
                : (typeof u.componentDidUpdate != 'function' ||
                      (i === t.memoizedProps && A === t.memoizedState) ||
                      (e.flags |= 4),
                  typeof u.getSnapshotBeforeUpdate != 'function' ||
                      (i === t.memoizedProps && A === t.memoizedState) ||
                      (e.flags |= 1024),
                  (n = !1));
        }
        return (
            (u = n),
            gu(t, e),
            (n = (e.flags & 128) !== 0),
            u || n
                ? ((u = e.stateNode),
                  (l = n && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
                  (e.flags |= 1),
                  t !== null && n
                      ? ((e.child = yn(e, t.child, null, a)), (e.child = yn(e, null, l, a)))
                      : Qt(t, e, l, a),
                  (e.memoizedState = u.state),
                  (t = e.child))
                : (t = Le(t, e, a)),
            t
        );
    }
    function Gs(t, e, l, n) {
        return Ln(), (e.flags |= 256), Qt(t, e, l, n), e.child;
    }
    var sc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
    };
    function rc(t) {
        return { baseLanes: t, cachePool: xo() };
    }
    function dc(t, e, l) {
        return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Te), t;
    }
    function Cs(t, e, l) {
        var n = e.pendingProps,
            a = !1,
            u = (e.flags & 128) !== 0,
            i;
        if (
            ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0),
            i && ((a = !0), (e.flags &= -129)),
            (i = (e.flags & 32) !== 0),
            (e.flags &= -33),
            t === null)
        ) {
            if (ht) {
                if ((a ? ul(e) : il(), ht)) {
                    var c = _t,
                        r;
                    if ((r = c)) {
                        t: {
                            for (r = c, c = _e; r.nodeType !== 8; ) {
                                if (!c) {
                                    c = null;
                                    break t;
                                }
                                if (((r = xe(r.nextSibling)), r === null)) {
                                    c = null;
                                    break t;
                                }
                            }
                            c = r;
                        }
                        c !== null
                            ? ((e.memoizedState = {
                                  dehydrated: c,
                                  treeContext: _l !== null ? { id: Be, overflow: Ge } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (r = fe(18, null, null, 0)),
                              (r.stateNode = c),
                              (r.return = e),
                              (e.child = r),
                              (Ft = e),
                              (_t = null),
                              (r = !0))
                            : (r = !1);
                    }
                    r || Hl(e);
                }
                if (((c = e.memoizedState), c !== null && ((c = c.dehydrated), c !== null)))
                    return $c(c) ? (e.lanes = 32) : (e.lanes = 536870912), null;
                Qe(e);
            }
            return (
                (c = n.children),
                (n = n.fallback),
                a
                    ? (il(),
                      (a = e.mode),
                      (c = mu({ mode: 'hidden', children: c }, a)),
                      (n = Dl(n, a, l, null)),
                      (c.return = e),
                      (n.return = e),
                      (c.sibling = n),
                      (e.child = c),
                      (a = e.child),
                      (a.memoizedState = rc(l)),
                      (a.childLanes = dc(t, i, l)),
                      (e.memoizedState = sc),
                      n)
                    : (ul(e), hc(e, c))
            );
        }
        if (((r = t.memoizedState), r !== null && ((c = r.dehydrated), c !== null))) {
            if (u)
                e.flags & 256
                    ? (ul(e), (e.flags &= -257), (e = vc(t, e, l)))
                    : e.memoizedState !== null
                      ? (il(), (e.child = t.child), (e.flags |= 128), (e = null))
                      : (il(),
                        (a = n.fallback),
                        (c = e.mode),
                        (n = mu({ mode: 'visible', children: n.children }, c)),
                        (a = Dl(a, c, l, null)),
                        (a.flags |= 2),
                        (n.return = e),
                        (a.return = e),
                        (n.sibling = a),
                        (e.child = n),
                        yn(e, t.child, null, l),
                        (n = e.child),
                        (n.memoizedState = rc(l)),
                        (n.childLanes = dc(t, i, l)),
                        (e.memoizedState = sc),
                        (e = a));
            else if ((ul(e), $c(c))) {
                if (((i = c.nextSibling && c.nextSibling.dataset), i)) var E = i.dgst;
                (i = E),
                    (n = Error(f(419))),
                    (n.stack = ''),
                    (n.digest = i),
                    Zn({ value: n, source: null, stack: null }),
                    (e = vc(t, e, l));
            } else if ((Gt || Kn(t, e, l, !1), (i = (l & t.childLanes) !== 0), Gt || i)) {
                if (
                    ((i = At),
                    i !== null &&
                        ((n = l & -l),
                        (n = (n & 42) !== 0 ? 1 : Wu(n)),
                        (n = (n & (i.suspendedLanes | l)) !== 0 ? 0 : n),
                        n !== 0 && n !== r.retryLane))
                )
                    throw ((r.retryLane = n), nn(t, n), he(i, t, n), Us);
                c.data === '$?' || Hc(), (e = vc(t, e, l));
            } else
                c.data === '$?'
                    ? ((e.flags |= 192), (e.child = t.child), (e = null))
                    : ((t = r.treeContext),
                      (_t = xe(c.nextSibling)),
                      (Ft = e),
                      (ht = !0),
                      (Ul = null),
                      (_e = !1),
                      t !== null &&
                          ((Se[be++] = Be),
                          (Se[be++] = Ge),
                          (Se[be++] = _l),
                          (Be = t.id),
                          (Ge = t.overflow),
                          (_l = e)),
                      (e = hc(e, n.children)),
                      (e.flags |= 4096));
            return e;
        }
        return a
            ? (il(),
              (a = n.fallback),
              (c = e.mode),
              (r = t.child),
              (E = r.sibling),
              (n = Ye(r, {
                  mode: 'hidden',
                  children: n.children,
              })),
              (n.subtreeFlags = r.subtreeFlags & 65011712),
              E !== null ? (a = Ye(E, a)) : ((a = Dl(a, c, l, null)), (a.flags |= 2)),
              (a.return = e),
              (n.return = e),
              (n.sibling = a),
              (e.child = n),
              (n = a),
              (a = e.child),
              (c = t.child.memoizedState),
              c === null
                  ? (c = rc(l))
                  : ((r = c.cachePool),
                    r !== null
                        ? ((E = jt._currentValue),
                          (r = r.parent !== E ? { parent: E, pool: E } : r))
                        : (r = xo()),
                    (c = {
                        baseLanes: c.baseLanes | l,
                        cachePool: r,
                    })),
              (a.memoizedState = c),
              (a.childLanes = dc(t, i, l)),
              (e.memoizedState = sc),
              n)
            : (ul(e),
              (l = t.child),
              (t = l.sibling),
              (l = Ye(l, {
                  mode: 'visible',
                  children: n.children,
              })),
              (l.return = e),
              (l.sibling = null),
              t !== null &&
                  ((i = e.deletions),
                  i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
              (e.child = l),
              (e.memoizedState = null),
              l);
    }
    function hc(t, e) {
        return (e = mu({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e);
    }
    function mu(t, e) {
        return (
            (t = fe(22, t, null, e)),
            (t.lanes = 0),
            (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
            }),
            t
        );
    }
    function vc(t, e, l) {
        return (
            yn(e, t.child, null, l),
            (t = hc(e, e.pendingProps.children)),
            (t.flags |= 2),
            (e.memoizedState = null),
            t
        );
    }
    function Vs(t, e, l) {
        t.lanes |= e;
        var n = t.alternate;
        n !== null && (n.lanes |= e), Hi(t.return, e, l);
    }
    function yc(t, e, l, n, a) {
        var u = t.memoizedState;
        u === null
            ? (t.memoizedState = {
                  isBackwards: e,
                  rendering: null,
                  renderingStartTime: 0,
                  last: n,
                  tail: l,
                  tailMode: a,
              })
            : ((u.isBackwards = e),
              (u.rendering = null),
              (u.renderingStartTime = 0),
              (u.last = n),
              (u.tail = l),
              (u.tailMode = a));
    }
    function Xs(t, e, l) {
        var n = e.pendingProps,
            a = n.revealOrder,
            u = n.tail;
        if ((Qt(t, e, n.children, l), (n = Yt.current), (n & 2) !== 0))
            (n = (n & 1) | 2), (e.flags |= 128);
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13) t.memoizedState !== null && Vs(t, l, e);
                    else if (t.tag === 19) Vs(t, l, e);
                    else if (t.child !== null) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e) break t;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
            n &= 1;
        }
        switch ((j(Yt, n), a)) {
            case 'forwards':
                for (l = e.child, a = null; l !== null; )
                    (t = l.alternate), t !== null && hu(t) === null && (a = l), (l = l.sibling);
                (l = a),
                    l === null
                        ? ((a = e.child), (e.child = null))
                        : ((a = l.sibling), (l.sibling = null)),
                    yc(e, !1, a, l, u);
                break;
            case 'backwards':
                for (l = null, a = e.child, e.child = null; a !== null; ) {
                    if (((t = a.alternate), t !== null && hu(t) === null)) {
                        e.child = a;
                        break;
                    }
                    (t = a.sibling), (a.sibling = l), (l = a), (a = t);
                }
                yc(e, !0, l, null, u);
                break;
            case 'together':
                yc(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
        return e.child;
    }
    function Le(t, e, l) {
        if (
            (t !== null && (e.dependencies = t.dependencies),
            (rl |= e.lanes),
            (l & e.childLanes) === 0)
        )
            if (t !== null) {
                if ((Kn(t, e, l, !1), (l & e.childLanes) === 0)) return null;
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(f(153));
        if (e.child !== null) {
            for (
                t = e.child, l = Ye(t, t.pendingProps), e.child = l, l.return = e;
                t.sibling !== null;

            )
                (t = t.sibling), (l = l.sibling = Ye(t, t.pendingProps)), (l.return = e);
            l.sibling = null;
        }
        return e.child;
    }
    function gc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Fa(t)));
    }
    function Wh(t, e, l) {
        switch (e.tag) {
            case 3:
                xt(e, e.stateNode.containerInfo), tl(e, jt, t.memoizedState.cache), Ln();
                break;
            case 27:
            case 5:
                Zu(e);
                break;
            case 4:
                xt(e, e.stateNode.containerInfo);
                break;
            case 10:
                tl(e, e.type, e.memoizedProps.value);
                break;
            case 13:
                var n = e.memoizedState;
                if (n !== null)
                    return n.dehydrated !== null
                        ? (ul(e), (e.flags |= 128), null)
                        : (l & e.child.childLanes) !== 0
                          ? Cs(t, e, l)
                          : (ul(e), (t = Le(t, e, l)), t !== null ? t.sibling : null);
                ul(e);
                break;
            case 19:
                var a = (t.flags & 128) !== 0;
                if (
                    ((n = (l & e.childLanes) !== 0),
                    n || (Kn(t, e, l, !1), (n = (l & e.childLanes) !== 0)),
                    a)
                ) {
                    if (n) return Xs(t, e, l);
                    e.flags |= 128;
                }
                if (
                    ((a = e.memoizedState),
                    a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                    j(Yt, Yt.current),
                    n)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (e.lanes = 0), qs(t, e, l);
            case 24:
                tl(e, jt, t.memoizedState.cache);
        }
        return Le(t, e, l);
    }
    function Qs(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Gt = !0;
            else {
                if (!gc(t, l) && (e.flags & 128) === 0) return (Gt = !1), Wh(t, e, l);
                Gt = (t.flags & 131072) !== 0;
            }
        else (Gt = !1), ht && (e.flags & 1048576) !== 0 && So(e, Wa, e.index);
        switch (((e.lanes = 0), e.tag)) {
            case 16:
                t: {
                    t = e.pendingProps;
                    var n = e.elementType,
                        a = n._init;
                    if (((n = a(n._payload)), (e.type = n), typeof n == 'function'))
                        zi(n)
                            ? ((t = Yl(n, t)), (e.tag = 1), (e = Bs(null, e, n, t, l)))
                            : ((e.tag = 0), (e = oc(null, e, n, t, l)));
                    else {
                        if (n != null) {
                            if (((a = n.$$typeof), a === I)) {
                                (e.tag = 11), (e = Hs(null, e, n, t, l));
                                break t;
                            } else if (a === vt) {
                                (e.tag = 14), (e = Rs(null, e, n, t, l));
                                break t;
                            }
                        }
                        throw ((e = Tl(n) || n), Error(f(306, e, '')));
                    }
                }
                return e;
            case 0:
                return oc(t, e, e.type, e.pendingProps, l);
            case 1:
                return (n = e.type), (a = Yl(n, e.pendingProps)), Bs(t, e, n, a, l);
            case 3:
                t: {
                    if ((xt(e, e.stateNode.containerInfo), t === null)) throw Error(f(387));
                    n = e.pendingProps;
                    var u = e.memoizedState;
                    (a = u.element), Gi(t, e), Pn(e, n, null, l);
                    var i = e.memoizedState;
                    if (
                        ((n = i.cache),
                        tl(e, jt, n),
                        n !== u.cache && Ri(e, [jt], l, !0),
                        In(),
                        (n = i.element),
                        u.isDehydrated)
                    )
                        if (
                            ((u = {
                                element: n,
                                isDehydrated: !1,
                                cache: i.cache,
                            }),
                            (e.updateQueue.baseState = u),
                            (e.memoizedState = u),
                            e.flags & 256)
                        ) {
                            e = Gs(t, e, n, l);
                            break t;
                        } else if (n !== a) {
                            (a = me(Error(f(424)), e)), Zn(a), (e = Gs(t, e, n, l));
                            break t;
                        } else {
                            switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                                case 9:
                                    t = t.body;
                                    break;
                                default:
                                    t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
                            }
                            for (
                                _t = xe(t.firstChild),
                                    Ft = e,
                                    ht = !0,
                                    Ul = null,
                                    _e = !0,
                                    l = Es(e, null, n, l),
                                    e.child = l;
                                l;

                            )
                                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
                        }
                    else {
                        if ((Ln(), n === a)) {
                            e = Le(t, e, l);
                            break t;
                        }
                        Qt(t, e, n, l);
                    }
                    e = e.child;
                }
                return e;
            case 26:
                return (
                    gu(t, e),
                    t === null
                        ? (l = Jr(e.type, null, e.pendingProps, null))
                            ? (e.memoizedState = l)
                            : ht ||
                              ((l = e.type),
                              (t = e.pendingProps),
                              (n = Uu($.current).createElement(l)),
                              (n[kt] = e),
                              (n[It] = t),
                              Zt(n, l, t),
                              Bt(n),
                              (e.stateNode = n))
                        : (e.memoizedState = Jr(
                              e.type,
                              t.memoizedProps,
                              e.pendingProps,
                              t.memoizedState,
                          )),
                    null
                );
            case 27:
                return (
                    Zu(e),
                    t === null &&
                        ht &&
                        ((n = e.stateNode = Lr(e.type, e.pendingProps, $.current)),
                        (Ft = e),
                        (_e = !0),
                        (a = _t),
                        yl(e.type) ? ((Wc = a), (_t = xe(n.firstChild))) : (_t = a)),
                    Qt(t, e, e.pendingProps.children, l),
                    gu(t, e),
                    t === null && (e.flags |= 4194304),
                    e.child
                );
            case 5:
                return (
                    t === null &&
                        ht &&
                        ((a = n = _t) &&
                            ((n = Ov(n, e.type, e.pendingProps, _e)),
                            n !== null
                                ? ((e.stateNode = n),
                                  (Ft = e),
                                  (_t = xe(n.firstChild)),
                                  (_e = !1),
                                  (a = !0))
                                : (a = !1)),
                        a || Hl(e)),
                    Zu(e),
                    (a = e.type),
                    (u = e.pendingProps),
                    (i = t !== null ? t.memoizedProps : null),
                    (n = u.children),
                    Kc(a, u) ? (n = null) : i !== null && Kc(a, i) && (e.flags |= 32),
                    e.memoizedState !== null &&
                        ((a = Zi(t, e, Xh, null, null, l)), (Ea._currentValue = a)),
                    gu(t, e),
                    Qt(t, e, n, l),
                    e.child
                );
            case 6:
                return (
                    t === null &&
                        ht &&
                        ((t = l = _t) &&
                            ((l = zv(l, e.pendingProps, _e)),
                            l !== null
                                ? ((e.stateNode = l), (Ft = e), (_t = null), (t = !0))
                                : (t = !1)),
                        t || Hl(e)),
                    null
                );
            case 13:
                return Cs(t, e, l);
            case 4:
                return (
                    xt(e, e.stateNode.containerInfo),
                    (n = e.pendingProps),
                    t === null ? (e.child = yn(e, null, n, l)) : Qt(t, e, n, l),
                    e.child
                );
            case 11:
                return Hs(t, e, e.type, e.pendingProps, l);
            case 7:
                return Qt(t, e, e.pendingProps, l), e.child;
            case 8:
                return Qt(t, e, e.pendingProps.children, l), e.child;
            case 12:
                return Qt(t, e, e.pendingProps.children, l), e.child;
            case 10:
                return (
                    (n = e.pendingProps), tl(e, e.type, n.value), Qt(t, e, n.children, l), e.child
                );
            case 9:
                return (
                    (a = e.type._context),
                    (n = e.pendingProps.children),
                    wl(e),
                    (a = $t(a)),
                    (n = n(a)),
                    (e.flags |= 1),
                    Qt(t, e, n, l),
                    e.child
                );
            case 14:
                return Rs(t, e, e.type, e.pendingProps, l);
            case 15:
                return ws(t, e, e.type, e.pendingProps, l);
            case 19:
                return Xs(t, e, l);
            case 31:
                return (
                    (n = e.pendingProps),
                    (l = e.mode),
                    (n = {
                        mode: n.mode,
                        children: n.children,
                    }),
                    t === null
                        ? ((l = mu(n, l)), (l.ref = e.ref), (e.child = l), (l.return = e), (e = l))
                        : ((l = Ye(t.child, n)),
                          (l.ref = e.ref),
                          (e.child = l),
                          (l.return = e),
                          (e = l)),
                    e
                );
            case 22:
                return qs(t, e, l);
            case 24:
                return (
                    wl(e),
                    (n = $t(jt)),
                    t === null
                        ? ((a = ji()),
                          a === null &&
                              ((a = At),
                              (u = wi()),
                              (a.pooledCache = u),
                              u.refCount++,
                              u !== null && (a.pooledCacheLanes |= l),
                              (a = u)),
                          (e.memoizedState = {
                              parent: n,
                              cache: a,
                          }),
                          Bi(e),
                          tl(e, jt, a))
                        : ((t.lanes & l) !== 0 && (Gi(t, e), Pn(e, null, null, l), In()),
                          (a = t.memoizedState),
                          (u = e.memoizedState),
                          a.parent !== n
                              ? ((a = { parent: n, cache: n }),
                                (e.memoizedState = a),
                                e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a),
                                tl(e, jt, n))
                              : ((n = u.cache), tl(e, jt, n), n !== a.cache && Ri(e, [jt], l, !0))),
                    Qt(t, e, e.pendingProps.children, l),
                    e.child
                );
            case 29:
                throw e.pendingProps;
        }
        throw Error(f(156, e.tag));
    }
    function Ze(t) {
        t.flags |= 4;
    }
    function Ls(t, e) {
        if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (((t.flags |= 16777216), !Ir(e))) {
            if (
                ((e = Ee.current),
                e !== null &&
                    ((ut & 4194048) === ut
                        ? Ne !== null
                        : ((ut & 62914560) !== ut && (ut & 536870912) === 0) || e !== Ne))
            )
                throw ((Wn = Yi), Mo);
            t.flags |= 8192;
        }
    }
    function pu(t, e) {
        e !== null && (t.flags |= 4),
            t.flags & 16384 && ((e = t.tag !== 22 ? Ef() : 536870912), (t.lanes |= e), (Sn |= e));
    }
    function ia(t, e) {
        if (!ht)
            switch (t.tailMode) {
                case 'hidden':
                    e = t.tail;
                    for (var l = null; e !== null; )
                        e.alternate !== null && (l = e), (e = e.sibling);
                    l === null ? (t.tail = null) : (l.sibling = null);
                    break;
                case 'collapsed':
                    l = t.tail;
                    for (var n = null; l !== null; )
                        l.alternate !== null && (n = l), (l = l.sibling);
                    n === null
                        ? e || t.tail === null
                            ? (t.tail = null)
                            : (t.tail.sibling = null)
                        : (n.sibling = null);
            }
    }
    function Dt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            l = 0,
            n = 0;
        if (e)
            for (var a = t.child; a !== null; )
                (l |= a.lanes | a.childLanes),
                    (n |= a.subtreeFlags & 65011712),
                    (n |= a.flags & 65011712),
                    (a.return = t),
                    (a = a.sibling);
        else
            for (a = t.child; a !== null; )
                (l |= a.lanes | a.childLanes),
                    (n |= a.subtreeFlags),
                    (n |= a.flags),
                    (a.return = t),
                    (a = a.sibling);
        return (t.subtreeFlags |= n), (t.childLanes = l), e;
    }
    function Fh(t, e, l) {
        var n = e.pendingProps;
        switch ((_i(e), e.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Dt(e), null;
            case 1:
                return Dt(e), null;
            case 3:
                return (
                    (l = e.stateNode),
                    (n = null),
                    t !== null && (n = t.memoizedState.cache),
                    e.memoizedState.cache !== n && (e.flags |= 2048),
                    Ve(jt),
                    We(),
                    l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
                    (t === null || t.child === null) &&
                        (Qn(e)
                            ? Ze(e)
                            : t === null ||
                              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                              ((e.flags |= 1024), To())),
                    Dt(e),
                    null
                );
            case 26:
                return (
                    (l = e.memoizedState),
                    t === null
                        ? (Ze(e), l !== null ? (Dt(e), Ls(e, l)) : (Dt(e), (e.flags &= -16777217)))
                        : l
                          ? l !== t.memoizedState
                              ? (Ze(e), Dt(e), Ls(e, l))
                              : (Dt(e), (e.flags &= -16777217))
                          : (t.memoizedProps !== n && Ze(e), Dt(e), (e.flags &= -16777217)),
                    null
                );
            case 27:
                _a(e), (l = $.current);
                var a = e.type;
                if (t !== null && e.stateNode != null) t.memoizedProps !== n && Ze(e);
                else {
                    if (!n) {
                        if (e.stateNode === null) throw Error(f(166));
                        return Dt(e), null;
                    }
                    (t = X.current), Qn(e) ? bo(e) : ((t = Lr(a, n, l)), (e.stateNode = t), Ze(e));
                }
                return Dt(e), null;
            case 5:
                if ((_a(e), (l = e.type), t !== null && e.stateNode != null))
                    t.memoizedProps !== n && Ze(e);
                else {
                    if (!n) {
                        if (e.stateNode === null) throw Error(f(166));
                        return Dt(e), null;
                    }
                    if (((t = X.current), Qn(e))) bo(e);
                    else {
                        switch (((a = Uu($.current)), t)) {
                            case 1:
                                t = a.createElementNS('http://www.w3.org/2000/svg', l);
                                break;
                            case 2:
                                t = a.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                                break;
                            default:
                                switch (l) {
                                    case 'svg':
                                        t = a.createElementNS('http://www.w3.org/2000/svg', l);
                                        break;
                                    case 'math':
                                        t = a.createElementNS(
                                            'http://www.w3.org/1998/Math/MathML',
                                            l,
                                        );
                                        break;
                                    case 'script':
                                        (t = a.createElement('div')),
                                            (t.innerHTML = '<script><\/script>'),
                                            (t = t.removeChild(t.firstChild));
                                        break;
                                    case 'select':
                                        (t =
                                            typeof n.is == 'string'
                                                ? a.createElement('select', { is: n.is })
                                                : a.createElement('select')),
                                            n.multiple
                                                ? (t.multiple = !0)
                                                : n.size && (t.size = n.size);
                                        break;
                                    default:
                                        t =
                                            typeof n.is == 'string'
                                                ? a.createElement(l, { is: n.is })
                                                : a.createElement(l);
                                }
                        }
                        (t[kt] = e), (t[It] = n);
                        t: for (a = e.child; a !== null; ) {
                            if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
                            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                                (a.child.return = a), (a = a.child);
                                continue;
                            }
                            if (a === e) break t;
                            for (; a.sibling === null; ) {
                                if (a.return === null || a.return === e) break t;
                                a = a.return;
                            }
                            (a.sibling.return = a.return), (a = a.sibling);
                        }
                        e.stateNode = t;
                        t: switch ((Zt(t, l, n), l)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                t = !!n.autoFocus;
                                break t;
                            case 'img':
                                t = !0;
                                break t;
                            default:
                                t = !1;
                        }
                        t && Ze(e);
                    }
                }
                return Dt(e), (e.flags &= -16777217), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== n && Ze(e);
                else {
                    if (typeof n != 'string' && e.stateNode === null) throw Error(f(166));
                    if (((t = $.current), Qn(e))) {
                        if (
                            ((t = e.stateNode),
                            (l = e.memoizedProps),
                            (n = null),
                            (a = Ft),
                            a !== null)
                        )
                            switch (a.tag) {
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                        (t[kt] = e),
                            (t = !!(
                                t.nodeValue === l ||
                                (n !== null && n.suppressHydrationWarning === !0) ||
                                Yr(t.nodeValue, l)
                            )),
                            t || Hl(e);
                    } else (t = Uu(t).createTextNode(n)), (t[kt] = e), (e.stateNode = t);
                }
                return Dt(e), null;
            case 13:
                if (
                    ((n = e.memoizedState),
                    t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
                ) {
                    if (((a = Qn(e)), n !== null && n.dehydrated !== null)) {
                        if (t === null) {
                            if (!a) throw Error(f(318));
                            if (((a = e.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                                throw Error(f(317));
                            a[kt] = e;
                        } else
                            Ln(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
                        Dt(e), (a = !1);
                    } else
                        (a = To()),
                            t !== null &&
                                t.memoizedState !== null &&
                                (t.memoizedState.hydrationErrors = a),
                            (a = !0);
                    if (!a) return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
                }
                if ((Qe(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
                if (((l = n !== null), (t = t !== null && t.memoizedState !== null), l)) {
                    (n = e.child),
                        (a = null),
                        n.alternate !== null &&
                            n.alternate.memoizedState !== null &&
                            n.alternate.memoizedState.cachePool !== null &&
                            (a = n.alternate.memoizedState.cachePool.pool);
                    var u = null;
                    n.memoizedState !== null &&
                        n.memoizedState.cachePool !== null &&
                        (u = n.memoizedState.cachePool.pool),
                        u !== a && (n.flags |= 2048);
                }
                return l !== t && l && (e.child.flags |= 8192), pu(e, e.updateQueue), Dt(e), null;
            case 4:
                return We(), t === null && Vc(e.stateNode.containerInfo), Dt(e), null;
            case 10:
                return Ve(e.type), Dt(e), null;
            case 19:
                if ((B(Yt), (a = e.memoizedState), a === null)) return Dt(e), null;
                if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
                    if (n) ia(a, !1);
                    else {
                        if (Nt !== 0 || (t !== null && (t.flags & 128) !== 0))
                            for (t = e.child; t !== null; ) {
                                if (((u = hu(t)), u !== null)) {
                                    for (
                                        e.flags |= 128,
                                            ia(a, !1),
                                            t = u.updateQueue,
                                            e.updateQueue = t,
                                            pu(e, t),
                                            e.subtreeFlags = 0,
                                            t = l,
                                            l = e.child;
                                        l !== null;

                                    )
                                        po(l, t), (l = l.sibling);
                                    return j(Yt, (Yt.current & 1) | 2), e.child;
                                }
                                t = t.sibling;
                            }
                        a.tail !== null &&
                            De() > Eu &&
                            ((e.flags |= 128), (n = !0), ia(a, !1), (e.lanes = 4194304));
                    }
                else {
                    if (!n)
                        if (((t = hu(u)), t !== null)) {
                            if (
                                ((e.flags |= 128),
                                (n = !0),
                                (t = t.updateQueue),
                                (e.updateQueue = t),
                                pu(e, t),
                                ia(a, !0),
                                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !ht)
                            )
                                return Dt(e), null;
                        } else
                            2 * De() - a.renderingStartTime > Eu &&
                                l !== 536870912 &&
                                ((e.flags |= 128), (n = !0), ia(a, !1), (e.lanes = 4194304));
                    a.isBackwards
                        ? ((u.sibling = e.child), (e.child = u))
                        : ((t = a.last),
                          t !== null ? (t.sibling = u) : (e.child = u),
                          (a.last = u));
                }
                return a.tail !== null
                    ? ((e = a.tail),
                      (a.rendering = e),
                      (a.tail = e.sibling),
                      (a.renderingStartTime = De()),
                      (e.sibling = null),
                      (t = Yt.current),
                      j(Yt, n ? (t & 1) | 2 : t & 1),
                      e)
                    : (Dt(e), null);
            case 22:
            case 23:
                return (
                    Qe(e),
                    Qi(),
                    (n = e.memoizedState !== null),
                    t !== null
                        ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
                        : n && (e.flags |= 8192),
                    n
                        ? (l & 536870912) !== 0 &&
                          (e.flags & 128) === 0 &&
                          (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                        : Dt(e),
                    (l = e.updateQueue),
                    l !== null && pu(e, l.retryQueue),
                    (l = null),
                    t !== null &&
                        t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (l = t.memoizedState.cachePool.pool),
                    (n = null),
                    e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null &&
                        (n = e.memoizedState.cachePool.pool),
                    n !== l && (e.flags |= 2048),
                    t !== null && B(ql),
                    null
                );
            case 24:
                return (
                    (l = null),
                    t !== null && (l = t.memoizedState.cache),
                    e.memoizedState.cache !== l && (e.flags |= 2048),
                    Ve(jt),
                    Dt(e),
                    null
                );
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(f(156, e.tag));
    }
    function Ih(t, e) {
        switch ((_i(e), e.tag)) {
            case 1:
                return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
            case 3:
                return (
                    Ve(jt),
                    We(),
                    (t = e.flags),
                    (t & 65536) !== 0 && (t & 128) === 0
                        ? ((e.flags = (t & -65537) | 128), e)
                        : null
                );
            case 26:
            case 27:
            case 5:
                return _a(e), null;
            case 13:
                if ((Qe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
                    if (e.alternate === null) throw Error(f(340));
                    Ln();
                }
                return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
            case 19:
                return B(Yt), null;
            case 4:
                return We(), null;
            case 10:
                return Ve(e.type), null;
            case 22:
            case 23:
                return (
                    Qe(e),
                    Qi(),
                    t !== null && B(ql),
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 24:
                return Ve(jt), null;
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Zs(t, e) {
        switch ((_i(e), e.tag)) {
            case 3:
                Ve(jt), We();
                break;
            case 26:
            case 27:
            case 5:
                _a(e);
                break;
            case 4:
                We();
                break;
            case 13:
                Qe(e);
                break;
            case 19:
                B(Yt);
                break;
            case 10:
                Ve(e.type);
                break;
            case 22:
            case 23:
                Qe(e), Qi(), t !== null && B(ql);
                break;
            case 24:
                Ve(jt);
        }
    }
    function ca(t, e) {
        try {
            var l = e.updateQueue,
                n = l !== null ? l.lastEffect : null;
            if (n !== null) {
                var a = n.next;
                l = a;
                do {
                    if ((l.tag & t) === t) {
                        n = void 0;
                        var u = l.create,
                            i = l.inst;
                        (n = u()), (i.destroy = n);
                    }
                    l = l.next;
                } while (l !== a);
            }
        } catch (c) {
            Tt(e, e.return, c);
        }
    }
    function cl(t, e, l) {
        try {
            var n = e.updateQueue,
                a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                n = u;
                do {
                    if ((n.tag & t) === t) {
                        var i = n.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            (i.destroy = void 0), (a = e);
                            var r = l,
                                E = c;
                            try {
                                E();
                            } catch (M) {
                                Tt(a, r, M);
                            }
                        }
                    }
                    n = n.next;
                } while (n !== u);
            }
        } catch (M) {
            Tt(e, e.return, M);
        }
    }
    function Ks(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                Ro(e, l);
            } catch (n) {
                Tt(t, t.return, n);
            }
        }
    }
    function Js(t, e, l) {
        (l.props = Yl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
        try {
            l.componentWillUnmount();
        } catch (n) {
            Tt(t, e, n);
        }
    }
    function fa(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var n = t.stateNode;
                        break;
                    case 30:
                        n = t.stateNode;
                        break;
                    default:
                        n = t.stateNode;
                }
                typeof l == 'function' ? (t.refCleanup = l(n)) : (l.current = n);
            }
        } catch (a) {
            Tt(t, e, a);
        }
    }
    function Ue(t, e) {
        var l = t.ref,
            n = t.refCleanup;
        if (l !== null)
            if (typeof n == 'function')
                try {
                    n();
                } catch (a) {
                    Tt(t, e, a);
                } finally {
                    (t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null);
                }
            else if (typeof l == 'function')
                try {
                    l(null);
                } catch (a) {
                    Tt(t, e, a);
                }
            else l.current = null;
    }
    function ks(t) {
        var e = t.type,
            l = t.memoizedProps,
            n = t.stateNode;
        try {
            t: switch (e) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    l.autoFocus && n.focus();
                    break t;
                case 'img':
                    l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
            }
        } catch (a) {
            Tt(t, t.return, a);
        }
    }
    function mc(t, e, l) {
        try {
            var n = t.stateNode;
            Sv(n, t.type, l, e), (n[It] = e);
        } catch (a) {
            Tt(t, t.return, a);
        }
    }
    function $s(t) {
        return (
            t.tag === 5 ||
            t.tag === 3 ||
            t.tag === 26 ||
            (t.tag === 27 && yl(t.type)) ||
            t.tag === 4
        );
    }
    function pc(t) {
        t: for (;;) {
            for (; t.sibling === null; ) {
                if (t.return === null || $s(t.return)) return null;
                t = t.return;
            }
            for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

            ) {
                if ((t.tag === 27 && yl(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                (t.child.return = t), (t = t.child);
            }
            if (!(t.flags & 2)) return t.stateNode;
        }
    }
    function Sc(t, e, l) {
        var n = t.tag;
        if (n === 5 || n === 6)
            (t = t.stateNode),
                e
                    ? (l.nodeType === 9
                          ? l.body
                          : l.nodeName === 'HTML'
                            ? l.ownerDocument.body
                            : l
                      ).insertBefore(t, e)
                    : ((e =
                          l.nodeType === 9
                              ? l.body
                              : l.nodeName === 'HTML'
                                ? l.ownerDocument.body
                                : l),
                      e.appendChild(t),
                      (l = l._reactRootContainer),
                      l != null || e.onclick !== null || (e.onclick = Nu));
        else if (
            n !== 4 &&
            (n === 27 && yl(t.type) && ((l = t.stateNode), (e = null)), (t = t.child), t !== null)
        )
            for (Sc(t, e, l), t = t.sibling; t !== null; ) Sc(t, e, l), (t = t.sibling);
    }
    function Su(t, e, l) {
        var n = t.tag;
        if (n === 5 || n === 6) (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
        else if (
            n !== 4 &&
            (n === 27 && yl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
        )
            for (Su(t, e, l), t = t.sibling; t !== null; ) Su(t, e, l), (t = t.sibling);
    }
    function Ws(t) {
        var e = t.stateNode,
            l = t.memoizedProps;
        try {
            for (var n = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
            Zt(e, n, l), (e[kt] = t), (e[It] = l);
        } catch (u) {
            Tt(t, t.return, u);
        }
    }
    var Ke = !1,
        Ht = !1,
        bc = !1,
        Fs = typeof WeakSet == 'function' ? WeakSet : Set,
        Ct = null;
    function Ph(t, e) {
        if (((t = t.containerInfo), (Lc = Yu), (t = co(t)), pi(t))) {
            if ('selectionStart' in t)
                var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd,
                };
            else
                t: {
                    l = ((l = t.ownerDocument) && l.defaultView) || window;
                    var n = l.getSelection && l.getSelection();
                    if (n && n.rangeCount !== 0) {
                        l = n.anchorNode;
                        var a = n.anchorOffset,
                            u = n.focusNode;
                        n = n.focusOffset;
                        try {
                            l.nodeType, u.nodeType;
                        } catch (Q) {
                            l = null;
                            break t;
                        }
                        var i = 0,
                            c = -1,
                            r = -1,
                            E = 0,
                            M = 0,
                            U = t,
                            A = null;
                        e: for (;;) {
                            for (
                                var O;
                                U !== l || (a !== 0 && U.nodeType !== 3) || (c = i + a),
                                    U !== u || (n !== 0 && U.nodeType !== 3) || (r = i + n),
                                    U.nodeType === 3 && (i += U.nodeValue.length),
                                    (O = U.firstChild) !== null;

                            )
                                (A = U), (U = O);
                            for (;;) {
                                if (U === t) break e;
                                if (
                                    (A === l && ++E === a && (c = i),
                                    A === u && ++M === n && (r = i),
                                    (O = U.nextSibling) !== null)
                                )
                                    break;
                                (U = A), (A = U.parentNode);
                            }
                            U = O;
                        }
                        l = c === -1 || r === -1 ? null : { start: c, end: r };
                    } else l = null;
                }
            l = l || { start: 0, end: 0 };
        } else l = null;
        for (Zc = { focusedElem: t, selectionRange: l }, Yu = !1, Ct = e; Ct !== null; )
            if (((e = Ct), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null))
                (t.return = e), (Ct = t);
            else
                for (; Ct !== null; ) {
                    switch (((e = Ct), (u = e.alternate), (t = e.flags), e.tag)) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                (t = void 0),
                                    (l = e),
                                    (a = u.memoizedProps),
                                    (u = u.memoizedState),
                                    (n = l.stateNode);
                                try {
                                    var J = Yl(l.type, a, l.elementType === l.type);
                                    (t = n.getSnapshotBeforeUpdate(J, u)),
                                        (n.__reactInternalSnapshotBeforeUpdate = t);
                                } catch (Q) {
                                    Tt(l, l.return, Q);
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9))
                                    kc(t);
                                else if (l === 1)
                                    switch (t.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            kc(t);
                                            break;
                                        default:
                                            t.textContent = '';
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(f(163));
                    }
                    if (((t = e.sibling), t !== null)) {
                        (t.return = e.return), (Ct = t);
                        break;
                    }
                    Ct = e.return;
                }
    }
    function Is(t, e, l) {
        var n = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                fl(t, l), n & 4 && ca(5, l);
                break;
            case 1:
                if ((fl(t, l), n & 4))
                    if (((t = l.stateNode), e === null))
                        try {
                            t.componentDidMount();
                        } catch (i) {
                            Tt(l, l.return, i);
                        }
                    else {
                        var a = Yl(l.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
                        } catch (i) {
                            Tt(l, l.return, i);
                        }
                    }
                n & 64 && Ks(l), n & 512 && fa(l, l.return);
                break;
            case 3:
                if ((fl(t, l), n & 64 && ((t = l.updateQueue), t !== null))) {
                    if (((e = null), l.child !== null))
                        switch (l.child.tag) {
                            case 27:
                            case 5:
                                e = l.child.stateNode;
                                break;
                            case 1:
                                e = l.child.stateNode;
                        }
                    try {
                        Ro(t, e);
                    } catch (i) {
                        Tt(l, l.return, i);
                    }
                }
                break;
            case 27:
                e === null && n & 4 && Ws(l);
            case 26:
            case 5:
                fl(t, l), e === null && n & 4 && ks(l), n & 512 && fa(l, l.return);
                break;
            case 12:
                fl(t, l);
                break;
            case 13:
                fl(t, l),
                    n & 4 && er(t, l),
                    n & 64 &&
                        ((t = l.memoizedState),
                        t !== null &&
                            ((t = t.dehydrated), t !== null && ((l = fv.bind(null, l)), xv(t, l))));
                break;
            case 22:
                if (((n = l.memoizedState !== null || Ke), !n)) {
                    (e = (e !== null && e.memoizedState !== null) || Ht), (a = Ke);
                    var u = Ht;
                    (Ke = n),
                        (Ht = e) && !u ? ol(t, l, (l.subtreeFlags & 8772) !== 0) : fl(t, l),
                        (Ke = a),
                        (Ht = u);
                }
                break;
            case 30:
                break;
            default:
                fl(t, l);
        }
    }
    function Ps(t) {
        var e = t.alternate;
        e !== null && ((t.alternate = null), Ps(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            t.tag === 5 && ((e = t.stateNode), e !== null && Pu(e)),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null);
    }
    var Mt = null,
        ee = !1;
    function Je(t, e, l) {
        for (l = l.child; l !== null; ) tr(t, e, l), (l = l.sibling);
    }
    function tr(t, e, l) {
        if (ue && typeof ue.onCommitFiberUnmount == 'function')
            try {
                ue.onCommitFiberUnmount(_n, l);
            } catch (u) {}
        switch (l.tag) {
            case 26:
                Ht || Ue(l, e),
                    Je(t, e, l),
                    l.memoizedState
                        ? l.memoizedState.count--
                        : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
                break;
            case 27:
                Ht || Ue(l, e);
                var n = Mt,
                    a = ee;
                yl(l.type) && ((Mt = l.stateNode), (ee = !1)),
                    Je(t, e, l),
                    ma(l.stateNode),
                    (Mt = n),
                    (ee = a);
                break;
            case 5:
                Ht || Ue(l, e);
            case 6:
                if (((n = Mt), (a = ee), (Mt = null), Je(t, e, l), (Mt = n), (ee = a), Mt !== null))
                    if (ee)
                        try {
                            (Mt.nodeType === 9
                                ? Mt.body
                                : Mt.nodeName === 'HTML'
                                  ? Mt.ownerDocument.body
                                  : Mt
                            ).removeChild(l.stateNode);
                        } catch (u) {
                            Tt(l, e, u);
                        }
                    else
                        try {
                            Mt.removeChild(l.stateNode);
                        } catch (u) {
                            Tt(l, e, u);
                        }
                break;
            case 18:
                Mt !== null &&
                    (ee
                        ? ((t = Mt),
                          Xr(
                              t.nodeType === 9
                                  ? t.body
                                  : t.nodeName === 'HTML'
                                    ? t.ownerDocument.body
                                    : t,
                              l.stateNode,
                          ),
                          za(t))
                        : Xr(Mt, l.stateNode));
                break;
            case 4:
                (n = Mt),
                    (a = ee),
                    (Mt = l.stateNode.containerInfo),
                    (ee = !0),
                    Je(t, e, l),
                    (Mt = n),
                    (ee = a);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ht || cl(2, l, e), Ht || cl(4, l, e), Je(t, e, l);
                break;
            case 1:
                Ht ||
                    (Ue(l, e),
                    (n = l.stateNode),
                    typeof n.componentWillUnmount == 'function' && Js(l, e, n)),
                    Je(t, e, l);
                break;
            case 21:
                Je(t, e, l);
                break;
            case 22:
                (Ht = (n = Ht) || l.memoizedState !== null), Je(t, e, l), (Ht = n);
                break;
            default:
                Je(t, e, l);
        }
    }
    function er(t, e) {
        if (
            e.memoizedState === null &&
            ((t = e.alternate),
            t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
        )
            try {
                za(t);
            } catch (l) {
                Tt(e, e.return, l);
            }
    }
    function tv(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new Fs()), e;
            case 22:
                return (
                    (t = t.stateNode),
                    (e = t._retryCache),
                    e === null && (e = t._retryCache = new Fs()),
                    e
                );
            default:
                throw Error(f(435, t.tag));
        }
    }
    function Ec(t, e) {
        var l = tv(t);
        e.forEach(function (n) {
            var a = ov.bind(null, t, n);
            l.has(n) || (l.add(n), n.then(a, a));
        });
    }
    function oe(t, e) {
        var l = e.deletions;
        if (l !== null)
            for (var n = 0; n < l.length; n++) {
                var a = l[n],
                    u = t,
                    i = e,
                    c = i;
                t: for (; c !== null; ) {
                    switch (c.tag) {
                        case 27:
                            if (yl(c.type)) {
                                (Mt = c.stateNode), (ee = !1);
                                break t;
                            }
                            break;
                        case 5:
                            (Mt = c.stateNode), (ee = !1);
                            break t;
                        case 3:
                        case 4:
                            (Mt = c.stateNode.containerInfo), (ee = !0);
                            break t;
                    }
                    c = c.return;
                }
                if (Mt === null) throw Error(f(160));
                tr(u, i, a),
                    (Mt = null),
                    (ee = !1),
                    (u = a.alternate),
                    u !== null && (u.return = null),
                    (a.return = null);
            }
        if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) lr(e, t), (e = e.sibling);
    }
    var ze = null;
    function lr(t, e) {
        var l = t.alternate,
            n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                oe(e, t), se(t), n & 4 && (cl(3, t, t.return), ca(3, t), cl(5, t, t.return));
                break;
            case 1:
                oe(e, t),
                    se(t),
                    n & 512 && (Ht || l === null || Ue(l, l.return)),
                    n & 64 &&
                        Ke &&
                        ((t = t.updateQueue),
                        t !== null &&
                            ((n = t.callbacks),
                            n !== null &&
                                ((l = t.shared.hiddenCallbacks),
                                (t.shared.hiddenCallbacks = l === null ? n : l.concat(n)))));
                break;
            case 26:
                var a = ze;
                if ((oe(e, t), se(t), n & 512 && (Ht || l === null || Ue(l, l.return)), n & 4)) {
                    var u = l !== null ? l.memoizedState : null;
                    if (((n = t.memoizedState), l === null))
                        if (n === null)
                            if (t.stateNode === null) {
                                t: {
                                    (n = t.type), (l = t.memoizedProps), (a = a.ownerDocument || a);
                                    e: switch (n) {
                                        case 'title':
                                            (u = a.getElementsByTagName('title')[0]),
                                                (!u ||
                                                    u[Hn] ||
                                                    u[kt] ||
                                                    u.namespaceURI ===
                                                        'http://www.w3.org/2000/svg' ||
                                                    u.hasAttribute('itemprop')) &&
                                                    ((u = a.createElement(n)),
                                                    a.head.insertBefore(
                                                        u,
                                                        a.querySelector('head > title'),
                                                    )),
                                                Zt(u, n, l),
                                                (u[kt] = t),
                                                Bt(u),
                                                (n = u);
                                            break t;
                                        case 'link':
                                            var i = Wr('link', 'href', a).get(n + (l.href || ''));
                                            if (i) {
                                                for (var c = 0; c < i.length; c++)
                                                    if (
                                                        ((u = i[c]),
                                                        u.getAttribute('href') ===
                                                            (l.href == null || l.href === ''
                                                                ? null
                                                                : l.href) &&
                                                            u.getAttribute('rel') ===
                                                                (l.rel == null ? null : l.rel) &&
                                                            u.getAttribute('title') ===
                                                                (l.title == null
                                                                    ? null
                                                                    : l.title) &&
                                                            u.getAttribute('crossorigin') ===
                                                                (l.crossOrigin == null
                                                                    ? null
                                                                    : l.crossOrigin))
                                                    ) {
                                                        i.splice(c, 1);
                                                        break e;
                                                    }
                                            }
                                            (u = a.createElement(n)),
                                                Zt(u, n, l),
                                                a.head.appendChild(u);
                                            break;
                                        case 'meta':
                                            if (
                                                (i = Wr('meta', 'content', a).get(
                                                    n + (l.content || ''),
                                                ))
                                            ) {
                                                for (c = 0; c < i.length; c++)
                                                    if (
                                                        ((u = i[c]),
                                                        u.getAttribute('content') ===
                                                            (l.content == null
                                                                ? null
                                                                : '' + l.content) &&
                                                            u.getAttribute('name') ===
                                                                (l.name == null ? null : l.name) &&
                                                            u.getAttribute('property') ===
                                                                (l.property == null
                                                                    ? null
                                                                    : l.property) &&
                                                            u.getAttribute('http-equiv') ===
                                                                (l.httpEquiv == null
                                                                    ? null
                                                                    : l.httpEquiv) &&
                                                            u.getAttribute('charset') ===
                                                                (l.charSet == null
                                                                    ? null
                                                                    : l.charSet))
                                                    ) {
                                                        i.splice(c, 1);
                                                        break e;
                                                    }
                                            }
                                            (u = a.createElement(n)),
                                                Zt(u, n, l),
                                                a.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(f(468, n));
                                    }
                                    (u[kt] = t), Bt(u), (n = u);
                                }
                                t.stateNode = n;
                            } else Fr(a, t.type, t.stateNode);
                        else t.stateNode = $r(a, n, t.memoizedProps);
                    else
                        u !== n
                            ? (u === null
                                  ? l.stateNode !== null &&
                                    ((l = l.stateNode), l.parentNode.removeChild(l))
                                  : u.count--,
                              n === null ? Fr(a, t.type, t.stateNode) : $r(a, n, t.memoizedProps))
                            : n === null &&
                              t.stateNode !== null &&
                              mc(t, t.memoizedProps, l.memoizedProps);
                }
                break;
            case 27:
                oe(e, t),
                    se(t),
                    n & 512 && (Ht || l === null || Ue(l, l.return)),
                    l !== null && n & 4 && mc(t, t.memoizedProps, l.memoizedProps);
                break;
            case 5:
                if (
                    (oe(e, t),
                    se(t),
                    n & 512 && (Ht || l === null || Ue(l, l.return)),
                    t.flags & 32)
                ) {
                    a = t.stateNode;
                    try {
                        Wl(a, '');
                    } catch (O) {
                        Tt(t, t.return, O);
                    }
                }
                n & 4 &&
                    t.stateNode != null &&
                    ((a = t.memoizedProps), mc(t, a, l !== null ? l.memoizedProps : a)),
                    n & 1024 && (bc = !0);
                break;
            case 6:
                if ((oe(e, t), se(t), n & 4)) {
                    if (t.stateNode === null) throw Error(f(162));
                    (n = t.memoizedProps), (l = t.stateNode);
                    try {
                        l.nodeValue = n;
                    } catch (O) {
                        Tt(t, t.return, O);
                    }
                }
                break;
            case 3:
                if (
                    ((wu = null),
                    (a = ze),
                    (ze = Hu(e.containerInfo)),
                    oe(e, t),
                    (ze = a),
                    se(t),
                    n & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        za(e.containerInfo);
                    } catch (O) {
                        Tt(t, t.return, O);
                    }
                bc && ((bc = !1), nr(t));
                break;
            case 4:
                (n = ze), (ze = Hu(t.stateNode.containerInfo)), oe(e, t), se(t), (ze = n);
                break;
            case 12:
                oe(e, t), se(t);
                break;
            case 13:
                oe(e, t),
                    se(t),
                    t.child.flags & 8192 &&
                        (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
                        (Mc = De()),
                    n & 4 &&
                        ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ec(t, n)));
                break;
            case 22:
                a = t.memoizedState !== null;
                var r = l !== null && l.memoizedState !== null,
                    E = Ke,
                    M = Ht;
                if (((Ke = E || a), (Ht = M || r), oe(e, t), (Ht = M), (Ke = E), se(t), n & 8192))
                    t: for (
                        e = t.stateNode,
                            e._visibility = a ? e._visibility & -2 : e._visibility | 1,
                            a && (l === null || r || Ke || Ht || Bl(t)),
                            l = null,
                            e = t;
                        ;

                    ) {
                        if (e.tag === 5 || e.tag === 26) {
                            if (l === null) {
                                r = l = e;
                                try {
                                    if (((u = r.stateNode), a))
                                        (i = u.style),
                                            typeof i.setProperty == 'function'
                                                ? i.setProperty('display', 'none', 'important')
                                                : (i.display = 'none');
                                    else {
                                        c = r.stateNode;
                                        var U = r.memoizedProps.style,
                                            A =
                                                U != null && U.hasOwnProperty('display')
                                                    ? U.display
                                                    : null;
                                        c.style.display =
                                            A == null || typeof A == 'boolean'
                                                ? ''
                                                : ('' + A).trim();
                                    }
                                } catch (O) {
                                    Tt(r, r.return, O);
                                }
                            }
                        } else if (e.tag === 6) {
                            if (l === null) {
                                r = e;
                                try {
                                    r.stateNode.nodeValue = a ? '' : r.memoizedProps;
                                } catch (O) {
                                    Tt(r, r.return, O);
                                }
                            }
                        } else if (
                            ((e.tag !== 22 && e.tag !== 23) ||
                                e.memoizedState === null ||
                                e === t) &&
                            e.child !== null
                        ) {
                            (e.child.return = e), (e = e.child);
                            continue;
                        }
                        if (e === t) break t;
                        for (; e.sibling === null; ) {
                            if (e.return === null || e.return === t) break t;
                            l === e && (l = null), (e = e.return);
                        }
                        l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling);
                    }
                n & 4 &&
                    ((n = t.updateQueue),
                    n !== null &&
                        ((l = n.retryQueue), l !== null && ((n.retryQueue = null), Ec(t, l))));
                break;
            case 19:
                oe(e, t),
                    se(t),
                    n & 4 &&
                        ((n = t.updateQueue), n !== null && ((t.updateQueue = null), Ec(t, n)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                oe(e, t), se(t);
        }
    }
    function se(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, n = t.return; n !== null; ) {
                    if ($s(n)) {
                        l = n;
                        break;
                    }
                    n = n.return;
                }
                if (l == null) throw Error(f(160));
                switch (l.tag) {
                    case 27:
                        var a = l.stateNode,
                            u = pc(t);
                        Su(t, u, a);
                        break;
                    case 5:
                        var i = l.stateNode;
                        l.flags & 32 && (Wl(i, ''), (l.flags &= -33));
                        var c = pc(t);
                        Su(t, c, i);
                        break;
                    case 3:
                    case 4:
                        var r = l.stateNode.containerInfo,
                            E = pc(t);
                        Sc(t, E, r);
                        break;
                    default:
                        throw Error(f(161));
                }
            } catch (M) {
                Tt(t, t.return, M);
            }
            t.flags &= -3;
        }
        e & 4096 && (t.flags &= -4097);
    }
    function nr(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                nr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling);
            }
    }
    function fl(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; ) Is(t, e.alternate, e), (e = e.sibling);
    }
    function Bl(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    cl(4, e, e.return), Bl(e);
                    break;
                case 1:
                    Ue(e, e.return);
                    var l = e.stateNode;
                    typeof l.componentWillUnmount == 'function' && Js(e, e.return, l), Bl(e);
                    break;
                case 27:
                    ma(e.stateNode);
                case 26:
                case 5:
                    Ue(e, e.return), Bl(e);
                    break;
                case 22:
                    e.memoizedState === null && Bl(e);
                    break;
                case 30:
                    Bl(e);
                    break;
                default:
                    Bl(e);
            }
            t = t.sibling;
        }
    }
    function ol(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
            var n = e.alternate,
                a = t,
                u = e,
                i = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    ol(a, u, l), ca(4, u);
                    break;
                case 1:
                    if (
                        (ol(a, u, l),
                        (n = u),
                        (a = n.stateNode),
                        typeof a.componentDidMount == 'function')
                    )
                        try {
                            a.componentDidMount();
                        } catch (E) {
                            Tt(n, n.return, E);
                        }
                    if (((n = u), (a = n.updateQueue), a !== null)) {
                        var c = n.stateNode;
                        try {
                            var r = a.shared.hiddenCallbacks;
                            if (r !== null)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < r.length; a++)
                                    Ho(r[a], c);
                        } catch (E) {
                            Tt(n, n.return, E);
                        }
                    }
                    l && i & 64 && Ks(u), fa(u, u.return);
                    break;
                case 27:
                    Ws(u);
                case 26:
                case 5:
                    ol(a, u, l), l && n === null && i & 4 && ks(u), fa(u, u.return);
                    break;
                case 12:
                    ol(a, u, l);
                    break;
                case 13:
                    ol(a, u, l), l && i & 4 && er(a, u);
                    break;
                case 22:
                    u.memoizedState === null && ol(a, u, l), fa(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    ol(a, u, l);
            }
            e = e.sibling;
        }
    }
    function Tc(t, e) {
        var l = null;
        t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
            (t = null),
            e.memoizedState !== null &&
                e.memoizedState.cachePool !== null &&
                (t = e.memoizedState.cachePool.pool),
            t !== l && (t != null && t.refCount++, l != null && Jn(l));
    }
    function Ac(t, e) {
        (t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Jn(t));
    }
    function He(t, e, l, n) {
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) ar(t, e, l, n), (e = e.sibling);
    }
    function ar(t, e, l, n) {
        var a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                He(t, e, l, n), a & 2048 && ca(9, e);
                break;
            case 1:
                He(t, e, l, n);
                break;
            case 3:
                He(t, e, l, n),
                    a & 2048 &&
                        ((t = null),
                        e.alternate !== null && (t = e.alternate.memoizedState.cache),
                        (e = e.memoizedState.cache),
                        e !== t && (e.refCount++, t != null && Jn(t)));
                break;
            case 12:
                if (a & 2048) {
                    He(t, e, l, n), (t = e.stateNode);
                    try {
                        var u = e.memoizedProps,
                            i = u.id,
                            c = u.onPostCommit;
                        typeof c == 'function' &&
                            c(
                                i,
                                e.alternate === null ? 'mount' : 'update',
                                t.passiveEffectDuration,
                                -0,
                            );
                    } catch (r) {
                        Tt(e, e.return, r);
                    }
                } else He(t, e, l, n);
                break;
            case 13:
                He(t, e, l, n);
                break;
            case 23:
                break;
            case 22:
                (u = e.stateNode),
                    (i = e.alternate),
                    e.memoizedState !== null
                        ? u._visibility & 2
                            ? He(t, e, l, n)
                            : oa(t, e)
                        : u._visibility & 2
                          ? He(t, e, l, n)
                          : ((u._visibility |= 2), gn(t, e, l, n, (e.subtreeFlags & 10256) !== 0)),
                    a & 2048 && Tc(i, e);
                break;
            case 24:
                He(t, e, l, n), a & 2048 && Ac(e.alternate, e);
                break;
            default:
                He(t, e, l, n);
        }
    }
    function gn(t, e, l, n, a) {
        for (a = a && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
            var u = t,
                i = e,
                c = l,
                r = n,
                E = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    gn(u, i, c, r, a), ca(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var M = i.stateNode;
                    i.memoizedState !== null
                        ? M._visibility & 2
                            ? gn(u, i, c, r, a)
                            : oa(u, i)
                        : ((M._visibility |= 2), gn(u, i, c, r, a)),
                        a && E & 2048 && Tc(i.alternate, i);
                    break;
                case 24:
                    gn(u, i, c, r, a), a && E & 2048 && Ac(i.alternate, i);
                    break;
                default:
                    gn(u, i, c, r, a);
            }
            e = e.sibling;
        }
    }
    function oa(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var l = t,
                    n = e,
                    a = n.flags;
                switch (n.tag) {
                    case 22:
                        oa(l, n), a & 2048 && Tc(n.alternate, n);
                        break;
                    case 24:
                        oa(l, n), a & 2048 && Ac(n.alternate, n);
                        break;
                    default:
                        oa(l, n);
                }
                e = e.sibling;
            }
    }
    var sa = 8192;
    function mn(t) {
        if (t.subtreeFlags & sa) for (t = t.child; t !== null; ) ur(t), (t = t.sibling);
    }
    function ur(t) {
        switch (t.tag) {
            case 26:
                mn(t),
                    t.flags & sa &&
                        t.memoizedState !== null &&
                        Gv(ze, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                mn(t);
                break;
            case 3:
            case 4:
                var e = ze;
                (ze = Hu(t.stateNode.containerInfo)), mn(t), (ze = e);
                break;
            case 22:
                t.memoizedState === null &&
                    ((e = t.alternate),
                    e !== null && e.memoizedState !== null
                        ? ((e = sa), (sa = 16777216), mn(t), (sa = e))
                        : mn(t));
                break;
            default:
                mn(t);
        }
    }
    function ir(t) {
        var e = t.alternate;
        if (e !== null && ((t = e.child), t !== null)) {
            e.child = null;
            do (e = t.sibling), (t.sibling = null), (t = e);
            while (t !== null);
        }
    }
    function ra(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var n = e[l];
                    (Ct = n), fr(n, t);
                }
            ir(t);
        }
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) cr(t), (t = t.sibling);
    }
    function cr(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                ra(t), t.flags & 2048 && cl(9, t, t.return);
                break;
            case 3:
                ra(t);
                break;
            case 12:
                ra(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null &&
                e._visibility & 2 &&
                (t.return === null || t.return.tag !== 13)
                    ? ((e._visibility &= -3), bu(t))
                    : ra(t);
                break;
            default:
                ra(t);
        }
    }
    function bu(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var n = e[l];
                    (Ct = n), fr(n, t);
                }
            ir(t);
        }
        for (t = t.child; t !== null; ) {
            switch (((e = t), e.tag)) {
                case 0:
                case 11:
                case 15:
                    cl(8, e, e.return), bu(e);
                    break;
                case 22:
                    (l = e.stateNode), l._visibility & 2 && ((l._visibility &= -3), bu(e));
                    break;
                default:
                    bu(e);
            }
            t = t.sibling;
        }
    }
    function fr(t, e) {
        for (; Ct !== null; ) {
            var l = Ct;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    cl(8, l, e);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var n = l.memoizedState.cachePool.pool;
                        n != null && n.refCount++;
                    }
                    break;
                case 24:
                    Jn(l.memoizedState.cache);
            }
            if (((n = l.child), n !== null)) (n.return = l), (Ct = n);
            else
                t: for (l = t; Ct !== null; ) {
                    n = Ct;
                    var a = n.sibling,
                        u = n.return;
                    if ((Ps(n), n === l)) {
                        Ct = null;
                        break t;
                    }
                    if (a !== null) {
                        (a.return = u), (Ct = a);
                        break t;
                    }
                    Ct = u;
                }
        }
    }
    var ev = {
            getCacheForType: function (t) {
                var e = $t(jt),
                    l = e.data.get(t);
                return l === void 0 && ((l = t()), e.data.set(t, l)), l;
            },
        },
        lv = typeof WeakMap == 'function' ? WeakMap : Map,
        yt = 0,
        At = null,
        nt = null,
        ut = 0,
        gt = 0,
        re = null,
        sl = !1,
        pn = !1,
        Oc = !1,
        ke = 0,
        Nt = 0,
        rl = 0,
        Gl = 0,
        zc = 0,
        Te = 0,
        Sn = 0,
        da = null,
        le = null,
        xc = !1,
        Mc = 0,
        Eu = 1 / 0,
        Tu = null,
        dl = null,
        Lt = 0,
        hl = null,
        bn = null,
        En = 0,
        Dc = 0,
        _c = null,
        or = null,
        ha = 0,
        Nc = null;
    function de() {
        if ((yt & 2) !== 0 && ut !== 0) return ut & -ut;
        if (D.T !== null) {
            var t = fn;
            return t !== 0 ? t : Yc();
        }
        return Of();
    }
    function sr() {
        Te === 0 && (Te = (ut & 536870912) === 0 || ht ? bf() : 536870912);
        var t = Ee.current;
        return t !== null && (t.flags |= 32), Te;
    }
    function he(t, e, l) {
        ((t === At && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null) &&
            (Tn(t, 0), vl(t, ut, Te, !1)),
            Un(t, l),
            ((yt & 2) === 0 || t !== At) &&
                (t === At && ((yt & 2) === 0 && (Gl |= l), Nt === 4 && vl(t, ut, Te, !1)), Re(t));
    }
    function rr(t, e, l) {
        if ((yt & 6) !== 0) throw Error(f(327));
        var n = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Nn(t, e),
            a = n ? uv(t, e) : Rc(t, e, !0),
            u = n;
        do {
            if (a === 0) {
                pn && !n && vl(t, e, 0, !1);
                break;
            } else {
                if (((l = t.current.alternate), u && !nv(l))) {
                    (a = Rc(t, e, !1)), (u = !1);
                    continue;
                }
                if (a === 2) {
                    if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
                    else
                        (i = t.pendingLanes & -536870913),
                            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
                    if (i !== 0) {
                        e = i;
                        t: {
                            var c = t;
                            a = da;
                            var r = c.current.memoizedState.isDehydrated;
                            if ((r && (Tn(c, i).flags |= 256), (i = Rc(c, i, !1)), i !== 2)) {
                                if (Oc && !r) {
                                    (c.errorRecoveryDisabledLanes |= u), (Gl |= u), (a = 4);
                                    break t;
                                }
                                (u = le),
                                    (le = a),
                                    u !== null && (le === null ? (le = u) : le.push.apply(le, u));
                            }
                            a = i;
                        }
                        if (((u = !1), a !== 2)) continue;
                    }
                }
                if (a === 1) {
                    Tn(t, 0), vl(t, e, 0, !0);
                    break;
                }
                t: {
                    switch (((n = t), (u = a), u)) {
                        case 0:
                        case 1:
                            throw Error(f(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            vl(n, e, Te, !sl);
                            break t;
                        case 2:
                            le = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(f(329));
                    }
                    if ((e & 62914560) === e && ((a = Mc + 300 - De()), 10 < a)) {
                        if ((vl(n, e, Te, !sl), Ra(n, 0, !0) !== 0)) break t;
                        n.timeoutHandle = Cr(
                            dr.bind(null, n, l, le, Tu, xc, e, Te, Gl, Sn, sl, u, 2, -0, 0),
                            a,
                        );
                        break t;
                    }
                    dr(n, l, le, Tu, xc, e, Te, Gl, Sn, sl, u, 0, -0, 0);
                }
            }
            break;
        } while (!0);
        Re(t);
    }
    function dr(t, e, l, n, a, u, i, c, r, E, M, U, A, O) {
        if (
            ((t.timeoutHandle = -1),
            (U = e.subtreeFlags),
            (U & 8192 || (U & 16785408) === 16785408) &&
                ((ba = { stylesheets: null, count: 0, unsuspend: Bv }),
                ur(e),
                (U = Cv()),
                U !== null))
        ) {
            (t.cancelPendingCommit = U(Sr.bind(null, t, e, u, l, n, a, i, c, r, M, 1, A, O))),
                vl(t, u, i, !E);
            return;
        }
        Sr(t, e, u, l, n, a, i, c, r);
    }
    function nv(t) {
        for (var e = t; ; ) {
            var l = e.tag;
            if (
                (l === 0 || l === 11 || l === 15) &&
                e.flags & 16384 &&
                ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
            )
                for (var n = 0; n < l.length; n++) {
                    var a = l[n],
                        u = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!ce(u(), a)) return !1;
                    } catch (i) {
                        return !1;
                    }
                }
            if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) (l.return = e), (e = l);
            else {
                if (e === t) break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        }
        return !0;
    }
    function vl(t, e, l, n) {
        (e &= ~zc),
            (e &= ~Gl),
            (t.suspendedLanes |= e),
            (t.pingedLanes &= ~e),
            n && (t.warmLanes |= e),
            (n = t.expirationTimes);
        for (var a = e; 0 < a; ) {
            var u = 31 - ie(a),
                i = 1 << u;
            (n[u] = -1), (a &= ~i);
        }
        l !== 0 && Tf(t, l, e);
    }
    function Au() {
        return (yt & 6) === 0 ? (va(0), !1) : !0;
    }
    function Uc() {
        if (nt !== null) {
            if (gt === 0) var t = nt.return;
            else (t = nt), (Ce = Rl = null), ki(t), (vn = null), (aa = 0), (t = nt);
            for (; t !== null; ) Zs(t.alternate, t), (t = t.return);
            nt = null;
        }
    }
    function Tn(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && ((t.timeoutHandle = -1), Ev(l)),
            (l = t.cancelPendingCommit),
            l !== null && ((t.cancelPendingCommit = null), l()),
            Uc(),
            (At = t),
            (nt = l = Ye(t.current, null)),
            (ut = e),
            (gt = 0),
            (re = null),
            (sl = !1),
            (pn = Nn(t, e)),
            (Oc = !1),
            (Sn = Te = zc = Gl = rl = Nt = 0),
            (le = da = null),
            (xc = !1),
            (e & 8) !== 0 && (e |= e & 32);
        var n = t.entangledLanes;
        if (n !== 0)
            for (t = t.entanglements, n &= e; 0 < n; ) {
                var a = 31 - ie(n),
                    u = 1 << a;
                (e |= t[a]), (n &= ~u);
            }
        return (ke = e), Za(), l;
    }
    function hr(t, e) {
        (P = null),
            (D.H = su),
            e === $n || e === tu
                ? ((e = No()), (gt = 3))
                : e === Mo
                  ? ((e = No()), (gt = 4))
                  : (gt =
                        e === Us
                            ? 8
                            : e !== null && typeof e == 'object' && typeof e.then == 'function'
                              ? 6
                              : 1),
            (re = e),
            nt === null && ((Nt = 1), yu(t, me(e, t.current)));
    }
    function vr() {
        var t = D.H;
        return (D.H = su), t === null ? su : t;
    }
    function yr() {
        var t = D.A;
        return (D.A = ev), t;
    }
    function Hc() {
        (Nt = 4),
            sl || ((ut & 4194048) !== ut && Ee.current !== null) || (pn = !0),
            ((rl & 134217727) === 0 && (Gl & 134217727) === 0) || At === null || vl(At, ut, Te, !1);
    }
    function Rc(t, e, l) {
        var n = yt;
        yt |= 2;
        var a = vr(),
            u = yr();
        (At !== t || ut !== e) && ((Tu = null), Tn(t, e)), (e = !1);
        var i = Nt;
        t: do
            try {
                if (gt !== 0 && nt !== null) {
                    var c = nt,
                        r = re;
                    switch (gt) {
                        case 8:
                            Uc(), (i = 6);
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ee.current === null && (e = !0);
                            var E = gt;
                            if (((gt = 0), (re = null), An(t, c, r, E), l && pn)) {
                                i = 0;
                                break t;
                            }
                            break;
                        default:
                            (E = gt), (gt = 0), (re = null), An(t, c, r, E);
                    }
                }
                av(), (i = Nt);
                break;
            } catch (M) {
                hr(t, M);
            }
        while (!0);
        return (
            e && t.shellSuspendCounter++,
            (Ce = Rl = null),
            (yt = n),
            (D.H = a),
            (D.A = u),
            nt === null && ((At = null), (ut = 0), Za()),
            i
        );
    }
    function av() {
        for (; nt !== null; ) gr(nt);
    }
    function uv(t, e) {
        var l = yt;
        yt |= 2;
        var n = vr(),
            a = yr();
        At !== t || ut !== e ? ((Tu = null), (Eu = De() + 500), Tn(t, e)) : (pn = Nn(t, e));
        t: do
            try {
                if (gt !== 0 && nt !== null) {
                    e = nt;
                    var u = re;
                    e: switch (gt) {
                        case 1:
                            (gt = 0), (re = null), An(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (Do(u)) {
                                (gt = 0), (re = null), mr(e);
                                break;
                            }
                            (e = function () {
                                (gt !== 2 && gt !== 9) || At !== t || (gt = 7), Re(t);
                            }),
                                u.then(e, e);
                            break t;
                        case 3:
                            gt = 7;
                            break t;
                        case 4:
                            gt = 5;
                            break t;
                        case 7:
                            Do(u)
                                ? ((gt = 0), (re = null), mr(e))
                                : ((gt = 0), (re = null), An(t, e, u, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (nt.tag) {
                                case 26:
                                    i = nt.memoizedState;
                                case 5:
                                case 27:
                                    var c = nt;
                                    if (!i || Ir(i)) {
                                        (gt = 0), (re = null);
                                        var r = c.sibling;
                                        if (r !== null) nt = r;
                                        else {
                                            var E = c.return;
                                            E !== null ? ((nt = E), Ou(E)) : (nt = null);
                                        }
                                        break e;
                                    }
                            }
                            (gt = 0), (re = null), An(t, e, u, 5);
                            break;
                        case 6:
                            (gt = 0), (re = null), An(t, e, u, 6);
                            break;
                        case 8:
                            Uc(), (Nt = 6);
                            break t;
                        default:
                            throw Error(f(462));
                    }
                }
                iv();
                break;
            } catch (M) {
                hr(t, M);
            }
        while (!0);
        return (
            (Ce = Rl = null),
            (D.H = n),
            (D.A = a),
            (yt = l),
            nt !== null ? 0 : ((At = null), (ut = 0), Za(), Nt)
        );
    }
    function iv() {
        for (; nt !== null && !Dd(); ) gr(nt);
    }
    function gr(t) {
        var e = Qs(t.alternate, t, ke);
        (t.memoizedProps = t.pendingProps), e === null ? Ou(t) : (nt = e);
    }
    function mr(t) {
        var e = t,
            l = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Ys(l, e, e.pendingProps, e.type, void 0, ut);
                break;
            case 11:
                e = Ys(l, e, e.pendingProps, e.type.render, e.ref, ut);
                break;
            case 5:
                ki(e);
            default:
                Zs(l, e), (e = nt = po(e, ke)), (e = Qs(l, e, ke));
        }
        (t.memoizedProps = t.pendingProps), e === null ? Ou(t) : (nt = e);
    }
    function An(t, e, l, n) {
        (Ce = Rl = null), ki(e), (vn = null), (aa = 0);
        var a = e.return;
        try {
            if ($h(t, a, e, l, ut)) {
                (Nt = 1), yu(t, me(l, t.current)), (nt = null);
                return;
            }
        } catch (u) {
            if (a !== null) throw ((nt = a), u);
            (Nt = 1), yu(t, me(l, t.current)), (nt = null);
            return;
        }
        e.flags & 32768
            ? (ht || n === 1
                  ? (t = !0)
                  : pn || (ut & 536870912) !== 0
                    ? (t = !1)
                    : ((sl = t = !0),
                      (n === 2 || n === 9 || n === 3 || n === 6) &&
                          ((n = Ee.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
              pr(e, t))
            : Ou(e);
    }
    function Ou(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                pr(e, sl);
                return;
            }
            t = e.return;
            var l = Fh(e.alternate, e, ke);
            if (l !== null) {
                nt = l;
                return;
            }
            if (((e = e.sibling), e !== null)) {
                nt = e;
                return;
            }
            nt = e = t;
        } while (e !== null);
        Nt === 0 && (Nt = 5);
    }
    function pr(t, e) {
        do {
            var l = Ih(t.alternate, t);
            if (l !== null) {
                (l.flags &= 32767), (nt = l);
                return;
            }
            if (
                ((l = t.return),
                l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
                !e && ((t = t.sibling), t !== null))
            ) {
                nt = t;
                return;
            }
            nt = t = l;
        } while (t !== null);
        (Nt = 6), (nt = null);
    }
    function Sr(t, e, l, n, a, u, i, c, r) {
        t.cancelPendingCommit = null;
        do zu();
        while (Lt !== 0);
        if ((yt & 6) !== 0) throw Error(f(327));
        if (e !== null) {
            if (e === t.current) throw Error(f(177));
            if (
                ((u = e.lanes | e.childLanes),
                (u |= Ai),
                Bd(t, l, u, i, c, r),
                t === At && ((nt = At = null), (ut = 0)),
                (bn = e),
                (hl = t),
                (En = l),
                (Dc = u),
                (_c = a),
                (or = n),
                (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                    ? ((t.callbackNode = null),
                      (t.callbackPriority = 0),
                      sv(Na, function () {
                          return Or(), null;
                      }))
                    : ((t.callbackNode = null), (t.callbackPriority = 0)),
                (n = (e.flags & 13878) !== 0),
                (e.subtreeFlags & 13878) !== 0 || n)
            ) {
                (n = D.T), (D.T = null), (a = Y.p), (Y.p = 2), (i = yt), (yt |= 4);
                try {
                    Ph(t, e, l);
                } finally {
                    (yt = i), (Y.p = a), (D.T = n);
                }
            }
            (Lt = 1), br(), Er(), Tr();
        }
    }
    function br() {
        if (Lt === 1) {
            Lt = 0;
            var t = hl,
                e = bn,
                l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                (l = D.T), (D.T = null);
                var n = Y.p;
                Y.p = 2;
                var a = yt;
                yt |= 4;
                try {
                    lr(e, t);
                    var u = Zc,
                        i = co(t.containerInfo),
                        c = u.focusedElem,
                        r = u.selectionRange;
                    if (i !== c && c && c.ownerDocument && io(c.ownerDocument.documentElement, c)) {
                        if (r !== null && pi(c)) {
                            var E = r.start,
                                M = r.end;
                            if ((M === void 0 && (M = E), 'selectionStart' in c))
                                (c.selectionStart = E),
                                    (c.selectionEnd = Math.min(M, c.value.length));
                            else {
                                var U = c.ownerDocument || document,
                                    A = (U && U.defaultView) || window;
                                if (A.getSelection) {
                                    var O = A.getSelection(),
                                        J = c.textContent.length,
                                        Q = Math.min(r.start, J),
                                        St = r.end === void 0 ? Q : Math.min(r.end, J);
                                    !O.extend && Q > St && ((i = St), (St = Q), (Q = i));
                                    var S = uo(c, Q),
                                        v = uo(c, St);
                                    if (
                                        S &&
                                        v &&
                                        (O.rangeCount !== 1 ||
                                            O.anchorNode !== S.node ||
                                            O.anchorOffset !== S.offset ||
                                            O.focusNode !== v.node ||
                                            O.focusOffset !== v.offset)
                                    ) {
                                        var b = U.createRange();
                                        b.setStart(S.node, S.offset),
                                            O.removeAllRanges(),
                                            Q > St
                                                ? (O.addRange(b), O.extend(v.node, v.offset))
                                                : (b.setEnd(v.node, v.offset), O.addRange(b));
                                    }
                                }
                            }
                        }
                        for (U = [], O = c; (O = O.parentNode); )
                            O.nodeType === 1 &&
                                U.push({
                                    element: O,
                                    left: O.scrollLeft,
                                    top: O.scrollTop,
                                });
                        for (typeof c.focus == 'function' && c.focus(), c = 0; c < U.length; c++) {
                            var _ = U[c];
                            (_.element.scrollLeft = _.left), (_.element.scrollTop = _.top);
                        }
                    }
                    (Yu = !!Lc), (Zc = Lc = null);
                } finally {
                    (yt = a), (Y.p = n), (D.T = l);
                }
            }
            (t.current = e), (Lt = 2);
        }
    }
    function Er() {
        if (Lt === 2) {
            Lt = 0;
            var t = hl,
                e = bn,
                l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                (l = D.T), (D.T = null);
                var n = Y.p;
                Y.p = 2;
                var a = yt;
                yt |= 4;
                try {
                    Is(t, e.alternate, e);
                } finally {
                    (yt = a), (Y.p = n), (D.T = l);
                }
            }
            Lt = 3;
        }
    }
    function Tr() {
        if (Lt === 4 || Lt === 3) {
            (Lt = 0), _d();
            var t = hl,
                e = bn,
                l = En,
                n = or;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                ? (Lt = 5)
                : ((Lt = 0), (bn = hl = null), Ar(t, t.pendingLanes));
            var a = t.pendingLanes;
            if (
                (a === 0 && (dl = null),
                Fu(l),
                (e = e.stateNode),
                ue && typeof ue.onCommitFiberRoot == 'function')
            )
                try {
                    ue.onCommitFiberRoot(_n, e, void 0, (e.current.flags & 128) === 128);
                } catch (r) {}
            if (n !== null) {
                (e = D.T), (a = Y.p), (Y.p = 2), (D.T = null);
                try {
                    for (var u = t.onRecoverableError, i = 0; i < n.length; i++) {
                        var c = n[i];
                        u(c.value, {
                            componentStack: c.stack,
                        });
                    }
                } finally {
                    (D.T = e), (Y.p = a);
                }
            }
            (En & 3) !== 0 && zu(),
                Re(t),
                (a = t.pendingLanes),
                (l & 4194090) !== 0 && (a & 42) !== 0
                    ? t === Nc
                        ? ha++
                        : ((ha = 0), (Nc = t))
                    : (ha = 0),
                va(0);
        }
    }
    function Ar(t, e) {
        (t.pooledCacheLanes &= e) === 0 &&
            ((e = t.pooledCache), e != null && ((t.pooledCache = null), Jn(e)));
    }
    function zu(t) {
        return br(), Er(), Tr(), Or();
    }
    function Or() {
        if (Lt !== 5) return !1;
        var t = hl,
            e = Dc;
        Dc = 0;
        var l = Fu(En),
            n = D.T,
            a = Y.p;
        try {
            (Y.p = 32 > l ? 32 : l), (D.T = null), (l = _c), (_c = null);
            var u = hl,
                i = En;
            if (((Lt = 0), (bn = hl = null), (En = 0), (yt & 6) !== 0)) throw Error(f(331));
            var c = yt;
            if (
                ((yt |= 4),
                cr(u.current),
                ar(u, u.current, i, l),
                (yt = c),
                va(0, !1),
                ue && typeof ue.onPostCommitFiberRoot == 'function')
            )
                try {
                    ue.onPostCommitFiberRoot(_n, u);
                } catch (r) {}
            return !0;
        } finally {
            (Y.p = a), (D.T = n), Ar(t, e);
        }
    }
    function zr(t, e, l) {
        (e = me(l, e)),
            (e = fc(t.stateNode, e, 2)),
            (t = nl(t, e, 2)),
            t !== null && (Un(t, 2), Re(t));
    }
    function Tt(t, e, l) {
        if (t.tag === 3) zr(t, t, l);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    zr(e, t, l);
                    break;
                } else if (e.tag === 1) {
                    var n = e.stateNode;
                    if (
                        typeof e.type.getDerivedStateFromError == 'function' ||
                        (typeof n.componentDidCatch == 'function' && (dl === null || !dl.has(n)))
                    ) {
                        (t = me(l, t)),
                            (l = _s(2)),
                            (n = nl(e, l, 2)),
                            n !== null && (Ns(l, n, e, t), Un(n, 2), Re(n));
                        break;
                    }
                }
                e = e.return;
            }
    }
    function wc(t, e, l) {
        var n = t.pingCache;
        if (n === null) {
            n = t.pingCache = new lv();
            var a = /* @__PURE__ */ new Set();
            n.set(e, a);
        } else (a = n.get(e)), a === void 0 && ((a = /* @__PURE__ */ new Set()), n.set(e, a));
        a.has(l) || ((Oc = !0), a.add(l), (t = cv.bind(null, t, e, l)), e.then(t, t));
    }
    function cv(t, e, l) {
        var n = t.pingCache;
        n !== null && n.delete(e),
            (t.pingedLanes |= t.suspendedLanes & l),
            (t.warmLanes &= ~l),
            At === t &&
                (ut & l) === l &&
                (Nt === 4 || (Nt === 3 && (ut & 62914560) === ut && 300 > De() - Mc)
                    ? (yt & 2) === 0 && Tn(t, 0)
                    : (zc |= l),
                Sn === ut && (Sn = 0)),
            Re(t);
    }
    function xr(t, e) {
        e === 0 && (e = Ef()), (t = nn(t, e)), t !== null && (Un(t, e), Re(t));
    }
    function fv(t) {
        var e = t.memoizedState,
            l = 0;
        e !== null && (l = e.retryLane), xr(t, l);
    }
    function ov(t, e) {
        var l = 0;
        switch (t.tag) {
            case 13:
                var n = t.stateNode,
                    a = t.memoizedState;
                a !== null && (l = a.retryLane);
                break;
            case 19:
                n = t.stateNode;
                break;
            case 22:
                n = t.stateNode._retryCache;
                break;
            default:
                throw Error(f(314));
        }
        n !== null && n.delete(e), xr(t, l);
    }
    function sv(t, e) {
        return Ju(t, e);
    }
    var xu = null,
        On = null,
        qc = !1,
        Mu = !1,
        jc = !1,
        Cl = 0;
    function Re(t) {
        t !== On && t.next === null && (On === null ? (xu = On = t) : (On = On.next = t)),
            (Mu = !0),
            qc || ((qc = !0), dv());
    }
    function va(t, e) {
        if (!jc && Mu) {
            jc = !0;
            do
                for (var l = !1, n = xu; n !== null; ) {
                    if (t !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var u = 0;
                        else {
                            var i = n.suspendedLanes,
                                c = n.pingedLanes;
                            (u = (1 << (31 - ie(42 | t) + 1)) - 1),
                                (u &= a & ~(i & ~c)),
                                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
                        }
                        u !== 0 && ((l = !0), Nr(n, u));
                    } else
                        (u = ut),
                            (u = Ra(
                                n,
                                n === At ? u : 0,
                                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
                            )),
                            (u & 3) === 0 || Nn(n, u) || ((l = !0), Nr(n, u));
                    n = n.next;
                }
            while (l);
            jc = !1;
        }
    }
    function rv() {
        Mr();
    }
    function Mr() {
        Mu = qc = !1;
        var t = 0;
        Cl !== 0 && (bv() && (t = Cl), (Cl = 0));
        for (var e = De(), l = null, n = xu; n !== null; ) {
            var a = n.next,
                u = Dr(n, e);
            u === 0
                ? ((n.next = null), l === null ? (xu = a) : (l.next = a), a === null && (On = l))
                : ((l = n), (t !== 0 || (u & 3) !== 0) && (Mu = !0)),
                (n = a);
        }
        va(t);
    }
    function Dr(t, e) {
        for (
            var l = t.suspendedLanes,
                n = t.pingedLanes,
                a = t.expirationTimes,
                u = t.pendingLanes & -62914561;
            0 < u;

        ) {
            var i = 31 - ie(u),
                c = 1 << i,
                r = a[i];
            r === -1
                ? ((c & l) === 0 || (c & n) !== 0) && (a[i] = Yd(c, e))
                : r <= e && (t.expiredLanes |= c),
                (u &= ~c);
        }
        if (
            ((e = At),
            (l = ut),
            (l = Ra(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
            (n = t.callbackNode),
            l === 0 || (t === e && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null)
        )
            return (
                n !== null && n !== null && ku(n), (t.callbackNode = null), (t.callbackPriority = 0)
            );
        if ((l & 3) === 0 || Nn(t, l)) {
            if (((e = l & -l), e === t.callbackPriority)) return e;
            switch ((n !== null && ku(n), Fu(l))) {
                case 2:
                case 8:
                    l = pf;
                    break;
                case 32:
                    l = Na;
                    break;
                case 268435456:
                    l = Sf;
                    break;
                default:
                    l = Na;
            }
            return (
                (n = _r.bind(null, t)),
                (l = Ju(l, n)),
                (t.callbackPriority = e),
                (t.callbackNode = l),
                e
            );
        }
        return (
            n !== null && n !== null && ku(n), (t.callbackPriority = 2), (t.callbackNode = null), 2
        );
    }
    function _r(t, e) {
        if (Lt !== 0 && Lt !== 5) return (t.callbackNode = null), (t.callbackPriority = 0), null;
        var l = t.callbackNode;
        if (zu() && t.callbackNode !== l) return null;
        var n = ut;
        return (
            (n = Ra(t, t === At ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
            n === 0
                ? null
                : (rr(t, n, e),
                  Dr(t, De()),
                  t.callbackNode != null && t.callbackNode === l ? _r.bind(null, t) : null)
        );
    }
    function Nr(t, e) {
        if (zu()) return null;
        rr(t, e, !0);
    }
    function dv() {
        Tv(function () {
            (yt & 6) !== 0 ? Ju(mf, rv) : Mr();
        });
    }
    function Yc() {
        return Cl === 0 && (Cl = bf()), Cl;
    }
    function Ur(t) {
        return t == null || typeof t == 'symbol' || typeof t == 'boolean'
            ? null
            : typeof t == 'function'
              ? t
              : Ba('' + t);
    }
    function Hr(t, e) {
        var l = e.ownerDocument.createElement('input');
        return (
            (l.name = e.name),
            (l.value = e.value),
            t.id && l.setAttribute('form', t.id),
            e.parentNode.insertBefore(l, e),
            (t = new FormData(t)),
            l.parentNode.removeChild(l),
            t
        );
    }
    function hv(t, e, l, n, a) {
        if (e === 'submit' && l && l.stateNode === a) {
            var u = Ur((a[It] || null).action),
                i = n.submitter;
            i &&
                ((e = (e = i[It] || null) ? Ur(e.formAction) : i.getAttribute('formAction')),
                e !== null && ((u = e), (i = null)));
            var c = new Xa('action', 'action', null, n, a);
            t.push({
                event: c,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (n.defaultPrevented) {
                                if (Cl !== 0) {
                                    var r = i ? Hr(a, i) : new FormData(a);
                                    nc(
                                        l,
                                        {
                                            pending: !0,
                                            data: r,
                                            method: a.method,
                                            action: u,
                                        },
                                        null,
                                        r,
                                    );
                                }
                            } else
                                typeof u == 'function' &&
                                    (c.preventDefault(),
                                    (r = i ? Hr(a, i) : new FormData(a)),
                                    nc(
                                        l,
                                        {
                                            pending: !0,
                                            data: r,
                                            method: a.method,
                                            action: u,
                                        },
                                        u,
                                        r,
                                    ));
                        },
                        currentTarget: a,
                    },
                ],
            });
        }
    }
    for (var Bc = 0; Bc < Ti.length; Bc++) {
        var Gc = Ti[Bc],
            vv = Gc.toLowerCase(),
            yv = Gc[0].toUpperCase() + Gc.slice(1);
        Oe(vv, 'on' + yv);
    }
    Oe(so, 'onAnimationEnd'),
        Oe(ro, 'onAnimationIteration'),
        Oe(ho, 'onAnimationStart'),
        Oe('dblclick', 'onDoubleClick'),
        Oe('focusin', 'onFocus'),
        Oe('focusout', 'onBlur'),
        Oe(Hh, 'onTransitionRun'),
        Oe(Rh, 'onTransitionStart'),
        Oe(wh, 'onTransitionCancel'),
        Oe(vo, 'onTransitionEnd'),
        Jl('onMouseEnter', ['mouseout', 'mouseover']),
        Jl('onMouseLeave', ['mouseout', 'mouseover']),
        Jl('onPointerEnter', ['pointerout', 'pointerover']),
        Jl('onPointerLeave', ['pointerout', 'pointerover']),
        Ol(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' '),
        ),
        Ol(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                ' ',
            ),
        ),
        Ol('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        Ol(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' '),
        ),
        Ol(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
        ),
        Ol(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
        );
    var ya =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' ',
            ),
        gv = new Set(
            'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(ya),
        );
    function Rr(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var n = t[l],
                a = n.event;
            n = n.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var i = n.length - 1; 0 <= i; i--) {
                        var c = n[i],
                            r = c.instance,
                            E = c.currentTarget;
                        if (((c = c.listener), r !== u && a.isPropagationStopped())) break t;
                        (u = c), (a.currentTarget = E);
                        try {
                            u(a);
                        } catch (M) {
                            vu(M);
                        }
                        (a.currentTarget = null), (u = r);
                    }
                else
                    for (i = 0; i < n.length; i++) {
                        if (
                            ((c = n[i]),
                            (r = c.instance),
                            (E = c.currentTarget),
                            (c = c.listener),
                            r !== u && a.isPropagationStopped())
                        )
                            break t;
                        (u = c), (a.currentTarget = E);
                        try {
                            u(a);
                        } catch (M) {
                            vu(M);
                        }
                        (a.currentTarget = null), (u = r);
                    }
            }
        }
    }
    function at(t, e) {
        var l = e[Iu];
        l === void 0 && (l = e[Iu] = /* @__PURE__ */ new Set());
        var n = t + '__bubble';
        l.has(n) || (wr(e, t, 2, !1), l.add(n));
    }
    function Cc(t, e, l) {
        var n = 0;
        e && (n |= 4), wr(l, t, n, e);
    }
    var Du = '_reactListening' + Math.random().toString(36).slice(2);
    function Vc(t) {
        if (!t[Du]) {
            (t[Du] = !0),
                xf.forEach(function (l) {
                    l !== 'selectionchange' && (gv.has(l) || Cc(l, !1, t), Cc(l, !0, t));
                });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Du] || ((e[Du] = !0), Cc('selectionchange', !1, e));
        }
    }
    function wr(t, e, l, n) {
        switch (ad(e)) {
            case 2:
                var a = Qv;
                break;
            case 8:
                a = Lv;
                break;
            default:
                a = ef;
        }
        (l = a.bind(null, e, l, t)),
            (a = void 0),
            !oi || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (a = !0),
            n
                ? a !== void 0
                    ? t.addEventListener(e, l, {
                          capture: !0,
                          passive: a,
                      })
                    : t.addEventListener(e, l, !0)
                : a !== void 0
                  ? t.addEventListener(e, l, {
                        passive: a,
                    })
                  : t.addEventListener(e, l, !1);
    }
    function Xc(t, e, l, n, a) {
        var u = n;
        if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
            t: for (;;) {
                if (n === null) return;
                var i = n.tag;
                if (i === 3 || i === 4) {
                    var c = n.stateNode.containerInfo;
                    if (c === a) break;
                    if (i === 4)
                        for (i = n.return; i !== null; ) {
                            var r = i.tag;
                            if ((r === 3 || r === 4) && i.stateNode.containerInfo === a) return;
                            i = i.return;
                        }
                    for (; c !== null; ) {
                        if (((i = Ll(c)), i === null)) return;
                        if (((r = i.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
                            n = u = i;
                            continue t;
                        }
                        c = c.parentNode;
                    }
                }
                n = n.return;
            }
        Cf(function () {
            var E = u,
                M = ci(l),
                U = [];
            t: {
                var A = yo.get(t);
                if (A !== void 0) {
                    var O = Xa,
                        J = t;
                    switch (t) {
                        case 'keypress':
                            if (Ca(l) === 0) break t;
                        case 'keydown':
                        case 'keyup':
                            O = sh;
                            break;
                        case 'focusin':
                            (J = 'focus'), (O = hi);
                            break;
                        case 'focusout':
                            (J = 'blur'), (O = hi);
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            O = hi;
                            break;
                        case 'click':
                            if (l.button === 2) break t;
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            O = Qf;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            O = Id;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            O = hh;
                            break;
                        case so:
                        case ro:
                        case ho:
                            O = eh;
                            break;
                        case vo:
                            O = yh;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            O = Wd;
                            break;
                        case 'wheel':
                            O = mh;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            O = nh;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            O = Zf;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            O = Sh;
                    }
                    var Q = (e & 4) !== 0,
                        St = !Q && (t === 'scroll' || t === 'scrollend'),
                        S = Q ? (A !== null ? A + 'Capture' : null) : A;
                    Q = [];
                    for (var v = E, b; v !== null; ) {
                        var _ = v;
                        if (
                            ((b = _.stateNode),
                            (_ = _.tag),
                            (_ !== 5 && _ !== 26 && _ !== 27) ||
                                b === null ||
                                S === null ||
                                ((_ = wn(v, S)), _ != null && Q.push(ga(v, _, b))),
                            St)
                        )
                            break;
                        v = v.return;
                    }
                    0 < Q.length &&
                        ((A = new O(A, J, null, l, M)), U.push({ event: A, listeners: Q }));
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (
                        ((A = t === 'mouseover' || t === 'pointerover'),
                        (O = t === 'mouseout' || t === 'pointerout'),
                        A && l !== ii && (J = l.relatedTarget || l.fromElement) && (Ll(J) || J[Ql]))
                    )
                        break t;
                    if (
                        (O || A) &&
                        ((A =
                            M.window === M
                                ? M
                                : (A = M.ownerDocument)
                                  ? A.defaultView || A.parentWindow
                                  : window),
                        O
                            ? ((J = l.relatedTarget || l.toElement),
                              (O = E),
                              (J = J ? Ll(J) : null),
                              J !== null &&
                                  ((St = T(J)),
                                  (Q = J.tag),
                                  J !== St || (Q !== 5 && Q !== 27 && Q !== 6)) &&
                                  (J = null))
                            : ((O = null), (J = E)),
                        O !== J)
                    ) {
                        if (
                            ((Q = Qf),
                            (_ = 'onMouseLeave'),
                            (S = 'onMouseEnter'),
                            (v = 'mouse'),
                            (t === 'pointerout' || t === 'pointerover') &&
                                ((Q = Zf),
                                (_ = 'onPointerLeave'),
                                (S = 'onPointerEnter'),
                                (v = 'pointer')),
                            (St = O == null ? A : Rn(O)),
                            (b = J == null ? A : Rn(J)),
                            (A = new Q(_, v + 'leave', O, l, M)),
                            (A.target = St),
                            (A.relatedTarget = b),
                            (_ = null),
                            Ll(M) === E &&
                                ((Q = new Q(S, v + 'enter', J, l, M)),
                                (Q.target = b),
                                (Q.relatedTarget = St),
                                (_ = Q)),
                            (St = _),
                            O && J)
                        )
                            e: {
                                for (Q = O, S = J, v = 0, b = Q; b; b = zn(b)) v++;
                                for (b = 0, _ = S; _; _ = zn(_)) b++;
                                for (; 0 < v - b; ) (Q = zn(Q)), v--;
                                for (; 0 < b - v; ) (S = zn(S)), b--;
                                for (; v--; ) {
                                    if (Q === S || (S !== null && Q === S.alternate)) break e;
                                    (Q = zn(Q)), (S = zn(S));
                                }
                                Q = null;
                            }
                        else Q = null;
                        O !== null && qr(U, A, O, Q, !1),
                            J !== null && St !== null && qr(U, St, J, Q, !0);
                    }
                }
                t: {
                    if (
                        ((A = E ? Rn(E) : window),
                        (O = A.nodeName && A.nodeName.toLowerCase()),
                        O === 'select' || (O === 'input' && A.type === 'file'))
                    )
                        var G = Pf;
                    else if (Ff(A))
                        if (to) G = _h;
                        else {
                            G = Mh;
                            var tt = xh;
                        }
                    else
                        (O = A.nodeName),
                            !O ||
                            O.toLowerCase() !== 'input' ||
                            (A.type !== 'checkbox' && A.type !== 'radio')
                                ? E && ui(E.elementType) && (G = Pf)
                                : (G = Dh);
                    if (G && (G = G(t, E))) {
                        If(U, G, l, M);
                        break t;
                    }
                    tt && tt(t, A, E),
                        t === 'focusout' &&
                            E &&
                            A.type === 'number' &&
                            E.memoizedProps.value != null &&
                            ai(A, 'number', A.value);
                }
                switch (((tt = E ? Rn(E) : window), t)) {
                    case 'focusin':
                        (Ff(tt) || tt.contentEditable === 'true') &&
                            ((tn = tt), (Si = E), (Xn = null));
                        break;
                    case 'focusout':
                        Xn = Si = tn = null;
                        break;
                    case 'mousedown':
                        bi = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        (bi = !1), fo(U, l, M);
                        break;
                    case 'selectionchange':
                        if (Uh) break;
                    case 'keydown':
                    case 'keyup':
                        fo(U, l, M);
                }
                var C;
                if (yi)
                    t: {
                        switch (t) {
                            case 'compositionstart':
                                var L = 'onCompositionStart';
                                break t;
                            case 'compositionend':
                                L = 'onCompositionEnd';
                                break t;
                            case 'compositionupdate':
                                L = 'onCompositionUpdate';
                                break t;
                        }
                        L = void 0;
                    }
                else
                    Pl
                        ? $f(t, l) && (L = 'onCompositionEnd')
                        : t === 'keydown' && l.keyCode === 229 && (L = 'onCompositionStart');
                L &&
                    (Kf &&
                        l.locale !== 'ko' &&
                        (Pl || L !== 'onCompositionStart'
                            ? L === 'onCompositionEnd' && Pl && (C = Vf())
                            : ((Pe = M),
                              (si = 'value' in Pe ? Pe.value : Pe.textContent),
                              (Pl = !0))),
                    (tt = _u(E, L)),
                    0 < tt.length &&
                        ((L = new Lf(L, t, null, l, M)),
                        U.push({ event: L, listeners: tt }),
                        C ? (L.data = C) : ((C = Wf(l)), C !== null && (L.data = C)))),
                    (C = Eh ? Th(t, l) : Ah(t, l)) &&
                        ((L = _u(E, 'onBeforeInput')),
                        0 < L.length &&
                            ((tt = new Lf('onBeforeInput', 'beforeinput', null, l, M)),
                            U.push({
                                event: tt,
                                listeners: L,
                            }),
                            (tt.data = C))),
                    hv(U, t, E, l, M);
            }
            Rr(U, e);
        });
    }
    function ga(t, e, l) {
        return {
            instance: t,
            listener: e,
            currentTarget: l,
        };
    }
    function _u(t, e) {
        for (var l = e + 'Capture', n = []; t !== null; ) {
            var a = t,
                u = a.stateNode;
            if (
                ((a = a.tag),
                (a !== 5 && a !== 26 && a !== 27) ||
                    u === null ||
                    ((a = wn(t, l)),
                    a != null && n.unshift(ga(t, a, u)),
                    (a = wn(t, e)),
                    a != null && n.push(ga(t, a, u))),
                t.tag === 3)
            )
                return n;
            t = t.return;
        }
        return [];
    }
    function zn(t) {
        if (t === null) return null;
        do t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null;
    }
    function qr(t, e, l, n, a) {
        for (var u = e._reactName, i = []; l !== null && l !== n; ) {
            var c = l,
                r = c.alternate,
                E = c.stateNode;
            if (((c = c.tag), r !== null && r === n)) break;
            (c !== 5 && c !== 26 && c !== 27) ||
                E === null ||
                ((r = E),
                a
                    ? ((E = wn(l, u)), E != null && i.unshift(ga(l, E, r)))
                    : a || ((E = wn(l, u)), E != null && i.push(ga(l, E, r)))),
                (l = l.return);
        }
        i.length !== 0 && t.push({ event: e, listeners: i });
    }
    var mv = /\r\n?/g,
        pv = /\u0000|\uFFFD/g;
    function jr(t) {
        return (typeof t == 'string' ? t : '' + t)
            .replace(
                mv,
                `
`,
            )
            .replace(pv, '');
    }
    function Yr(t, e) {
        return (e = jr(e)), jr(t) === e;
    }
    function Nu() {}
    function pt(t, e, l, n, a, u) {
        switch (l) {
            case 'children':
                typeof n == 'string'
                    ? e === 'body' || (e === 'textarea' && n === '') || Wl(t, n)
                    : (typeof n == 'number' || typeof n == 'bigint') &&
                      e !== 'body' &&
                      Wl(t, '' + n);
                break;
            case 'className':
                qa(t, 'class', n);
                break;
            case 'tabIndex':
                qa(t, 'tabindex', n);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                qa(t, l, n);
                break;
            case 'style':
                Bf(t, n, u);
                break;
            case 'data':
                if (e !== 'object') {
                    qa(t, 'data', n);
                    break;
                }
            case 'src':
            case 'href':
                if (n === '' && (e !== 'a' || l !== 'href')) {
                    t.removeAttribute(l);
                    break;
                }
                if (
                    n == null ||
                    typeof n == 'function' ||
                    typeof n == 'symbol' ||
                    typeof n == 'boolean'
                ) {
                    t.removeAttribute(l);
                    break;
                }
                (n = Ba('' + n)), t.setAttribute(l, n);
                break;
            case 'action':
            case 'formAction':
                if (typeof n == 'function') {
                    t.setAttribute(
                        l,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                    );
                    break;
                } else
                    typeof u == 'function' &&
                        (l === 'formAction'
                            ? (e !== 'input' && pt(t, e, 'name', a.name, a, null),
                              pt(t, e, 'formEncType', a.formEncType, a, null),
                              pt(t, e, 'formMethod', a.formMethod, a, null),
                              pt(t, e, 'formTarget', a.formTarget, a, null))
                            : (pt(t, e, 'encType', a.encType, a, null),
                              pt(t, e, 'method', a.method, a, null),
                              pt(t, e, 'target', a.target, a, null)));
                if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
                    t.removeAttribute(l);
                    break;
                }
                (n = Ba('' + n)), t.setAttribute(l, n);
                break;
            case 'onClick':
                n != null && (t.onclick = Nu);
                break;
            case 'onScroll':
                n != null && at('scroll', t);
                break;
            case 'onScrollEnd':
                n != null && at('scrollend', t);
                break;
            case 'dangerouslySetInnerHTML':
                if (n != null) {
                    if (typeof n != 'object' || !('__html' in n)) throw Error(f(61));
                    if (((l = n.__html), l != null)) {
                        if (a.children != null) throw Error(f(60));
                        t.innerHTML = l;
                    }
                }
                break;
            case 'multiple':
                t.multiple = n && typeof n != 'function' && typeof n != 'symbol';
                break;
            case 'muted':
                t.muted = n && typeof n != 'function' && typeof n != 'symbol';
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
                break;
            case 'autoFocus':
                break;
            case 'xlinkHref':
                if (
                    n == null ||
                    typeof n == 'function' ||
                    typeof n == 'boolean' ||
                    typeof n == 'symbol'
                ) {
                    t.removeAttribute('xlink:href');
                    break;
                }
                (l = Ba('' + n)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
                break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                n != null && typeof n != 'function' && typeof n != 'symbol'
                    ? t.setAttribute(l, '' + n)
                    : t.removeAttribute(l);
                break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                n && typeof n != 'function' && typeof n != 'symbol'
                    ? t.setAttribute(l, '')
                    : t.removeAttribute(l);
                break;
            case 'capture':
            case 'download':
                n === !0
                    ? t.setAttribute(l, '')
                    : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
                      ? t.setAttribute(l, n)
                      : t.removeAttribute(l);
                break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
                    ? t.setAttribute(l, n)
                    : t.removeAttribute(l);
                break;
            case 'rowSpan':
            case 'start':
                n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
                    ? t.removeAttribute(l)
                    : t.setAttribute(l, n);
                break;
            case 'popover':
                at('beforetoggle', t), at('toggle', t), wa(t, 'popover', n);
                break;
            case 'xlinkActuate':
                qe(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
                break;
            case 'xlinkArcrole':
                qe(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
                break;
            case 'xlinkRole':
                qe(t, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
                break;
            case 'xlinkShow':
                qe(t, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
                break;
            case 'xlinkTitle':
                qe(t, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
                break;
            case 'xlinkType':
                qe(t, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
                break;
            case 'xmlBase':
                qe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
                break;
            case 'xmlLang':
                qe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
                break;
            case 'xmlSpace':
                qe(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
                break;
            case 'is':
                wa(t, 'is', n);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < l.length) ||
                    (l[0] !== 'o' && l[0] !== 'O') ||
                    (l[1] !== 'n' && l[1] !== 'N')) &&
                    ((l = kd.get(l) || l), wa(t, l, n));
        }
    }
    function Qc(t, e, l, n, a, u) {
        switch (l) {
            case 'style':
                Bf(t, n, u);
                break;
            case 'dangerouslySetInnerHTML':
                if (n != null) {
                    if (typeof n != 'object' || !('__html' in n)) throw Error(f(61));
                    if (((l = n.__html), l != null)) {
                        if (a.children != null) throw Error(f(60));
                        t.innerHTML = l;
                    }
                }
                break;
            case 'children':
                typeof n == 'string'
                    ? Wl(t, n)
                    : (typeof n == 'number' || typeof n == 'bigint') && Wl(t, '' + n);
                break;
            case 'onScroll':
                n != null && at('scroll', t);
                break;
            case 'onScrollEnd':
                n != null && at('scrollend', t);
                break;
            case 'onClick':
                n != null && (t.onclick = Nu);
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                if (!Mf.hasOwnProperty(l))
                    t: {
                        if (
                            l[0] === 'o' &&
                            l[1] === 'n' &&
                            ((a = l.endsWith('Capture')),
                            (e = l.slice(2, a ? l.length - 7 : void 0)),
                            (u = t[It] || null),
                            (u = u != null ? u[l] : null),
                            typeof u == 'function' && t.removeEventListener(e, u, a),
                            typeof n == 'function')
                        ) {
                            typeof u != 'function' &&
                                u !== null &&
                                (l in t
                                    ? (t[l] = null)
                                    : t.hasAttribute(l) && t.removeAttribute(l)),
                                t.addEventListener(e, n, a);
                            break t;
                        }
                        l in t ? (t[l] = n) : n === !0 ? t.setAttribute(l, '') : wa(t, l, n);
                    }
        }
    }
    function Zt(t, e, l) {
        switch (e) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'img':
                at('error', t), at('load', t);
                var n = !1,
                    a = !1,
                    u;
                for (u in l)
                    if (l.hasOwnProperty(u)) {
                        var i = l[u];
                        if (i != null)
                            switch (u) {
                                case 'src':
                                    n = !0;
                                    break;
                                case 'srcSet':
                                    a = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(f(137, e));
                                default:
                                    pt(t, e, u, i, l, null);
                            }
                    }
                a && pt(t, e, 'srcSet', l.srcSet, l, null), n && pt(t, e, 'src', l.src, l, null);
                return;
            case 'input':
                at('invalid', t);
                var c = (u = i = a = null),
                    r = null,
                    E = null;
                for (n in l)
                    if (l.hasOwnProperty(n)) {
                        var M = l[n];
                        if (M != null)
                            switch (n) {
                                case 'name':
                                    a = M;
                                    break;
                                case 'type':
                                    i = M;
                                    break;
                                case 'checked':
                                    r = M;
                                    break;
                                case 'defaultChecked':
                                    E = M;
                                    break;
                                case 'value':
                                    u = M;
                                    break;
                                case 'defaultValue':
                                    c = M;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (M != null) throw Error(f(137, e));
                                    break;
                                default:
                                    pt(t, e, n, M, l, null);
                            }
                    }
                wf(t, u, c, r, E, i, a, !1), ja(t);
                return;
            case 'select':
                at('invalid', t), (n = i = u = null);
                for (a in l)
                    if (l.hasOwnProperty(a) && ((c = l[a]), c != null))
                        switch (a) {
                            case 'value':
                                u = c;
                                break;
                            case 'defaultValue':
                                i = c;
                                break;
                            case 'multiple':
                                n = c;
                            default:
                                pt(t, e, a, c, l, null);
                        }
                (e = u),
                    (l = i),
                    (t.multiple = !!n),
                    e != null ? $l(t, !!n, e, !1) : l != null && $l(t, !!n, l, !0);
                return;
            case 'textarea':
                at('invalid', t), (u = a = n = null);
                for (i in l)
                    if (l.hasOwnProperty(i) && ((c = l[i]), c != null))
                        switch (i) {
                            case 'value':
                                n = c;
                                break;
                            case 'defaultValue':
                                a = c;
                                break;
                            case 'children':
                                u = c;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (c != null) throw Error(f(91));
                                break;
                            default:
                                pt(t, e, i, c, l, null);
                        }
                jf(t, n, a, u), ja(t);
                return;
            case 'option':
                for (r in l)
                    if (l.hasOwnProperty(r) && ((n = l[r]), n != null))
                        switch (r) {
                            case 'selected':
                                t.selected = n && typeof n != 'function' && typeof n != 'symbol';
                                break;
                            default:
                                pt(t, e, r, n, l, null);
                        }
                return;
            case 'dialog':
                at('beforetoggle', t), at('toggle', t), at('cancel', t), at('close', t);
                break;
            case 'iframe':
            case 'object':
                at('load', t);
                break;
            case 'video':
            case 'audio':
                for (n = 0; n < ya.length; n++) at(ya[n], t);
                break;
            case 'image':
                at('error', t), at('load', t);
                break;
            case 'details':
                at('toggle', t);
                break;
            case 'embed':
            case 'source':
            case 'link':
                at('error', t), at('load', t);
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (E in l)
                    if (l.hasOwnProperty(E) && ((n = l[E]), n != null))
                        switch (E) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(f(137, e));
                            default:
                                pt(t, e, E, n, l, null);
                        }
                return;
            default:
                if (ui(e)) {
                    for (M in l)
                        l.hasOwnProperty(M) &&
                            ((n = l[M]), n !== void 0 && Qc(t, e, M, n, l, void 0));
                    return;
                }
        }
        for (c in l) l.hasOwnProperty(c) && ((n = l[c]), n != null && pt(t, e, c, n, l, null));
    }
    function Sv(t, e, l, n) {
        switch (e) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'input':
                var a = null,
                    u = null,
                    i = null,
                    c = null,
                    r = null,
                    E = null,
                    M = null;
                for (O in l) {
                    var U = l[O];
                    if (l.hasOwnProperty(O) && U != null)
                        switch (O) {
                            case 'checked':
                                break;
                            case 'value':
                                break;
                            case 'defaultValue':
                                r = U;
                            default:
                                n.hasOwnProperty(O) || pt(t, e, O, null, n, U);
                        }
                }
                for (var A in n) {
                    var O = n[A];
                    if (((U = l[A]), n.hasOwnProperty(A) && (O != null || U != null)))
                        switch (A) {
                            case 'type':
                                u = O;
                                break;
                            case 'name':
                                a = O;
                                break;
                            case 'checked':
                                E = O;
                                break;
                            case 'defaultChecked':
                                M = O;
                                break;
                            case 'value':
                                i = O;
                                break;
                            case 'defaultValue':
                                c = O;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (O != null) throw Error(f(137, e));
                                break;
                            default:
                                O !== U && pt(t, e, A, O, n, U);
                        }
                }
                ni(t, i, c, r, E, M, u, a);
                return;
            case 'select':
                O = i = c = A = null;
                for (u in l)
                    if (((r = l[u]), l.hasOwnProperty(u) && r != null))
                        switch (u) {
                            case 'value':
                                break;
                            case 'multiple':
                                O = r;
                            default:
                                n.hasOwnProperty(u) || pt(t, e, u, null, n, r);
                        }
                for (a in n)
                    if (((u = n[a]), (r = l[a]), n.hasOwnProperty(a) && (u != null || r != null)))
                        switch (a) {
                            case 'value':
                                A = u;
                                break;
                            case 'defaultValue':
                                c = u;
                                break;
                            case 'multiple':
                                i = u;
                            default:
                                u !== r && pt(t, e, a, u, n, r);
                        }
                (e = c),
                    (l = i),
                    (n = O),
                    A != null
                        ? $l(t, !!l, A, !1)
                        : !!n != !!l &&
                          (e != null ? $l(t, !!l, e, !0) : $l(t, !!l, l ? [] : '', !1));
                return;
            case 'textarea':
                O = A = null;
                for (c in l)
                    if (((a = l[c]), l.hasOwnProperty(c) && a != null && !n.hasOwnProperty(c)))
                        switch (c) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                pt(t, e, c, null, n, a);
                        }
                for (i in n)
                    if (((a = n[i]), (u = l[i]), n.hasOwnProperty(i) && (a != null || u != null)))
                        switch (i) {
                            case 'value':
                                A = a;
                                break;
                            case 'defaultValue':
                                O = a;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (a != null) throw Error(f(91));
                                break;
                            default:
                                a !== u && pt(t, e, i, a, n, u);
                        }
                qf(t, A, O);
                return;
            case 'option':
                for (var J in l)
                    if (((A = l[J]), l.hasOwnProperty(J) && A != null && !n.hasOwnProperty(J)))
                        switch (J) {
                            case 'selected':
                                t.selected = !1;
                                break;
                            default:
                                pt(t, e, J, null, n, A);
                        }
                for (r in n)
                    if (
                        ((A = n[r]),
                        (O = l[r]),
                        n.hasOwnProperty(r) && A !== O && (A != null || O != null))
                    )
                        switch (r) {
                            case 'selected':
                                t.selected = A && typeof A != 'function' && typeof A != 'symbol';
                                break;
                            default:
                                pt(t, e, r, A, n, O);
                        }
                return;
            case 'img':
            case 'link':
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'embed':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'source':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (var Q in l)
                    (A = l[Q]),
                        l.hasOwnProperty(Q) &&
                            A != null &&
                            !n.hasOwnProperty(Q) &&
                            pt(t, e, Q, null, n, A);
                for (E in n)
                    if (
                        ((A = n[E]),
                        (O = l[E]),
                        n.hasOwnProperty(E) && A !== O && (A != null || O != null))
                    )
                        switch (E) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (A != null) throw Error(f(137, e));
                                break;
                            default:
                                pt(t, e, E, A, n, O);
                        }
                return;
            default:
                if (ui(e)) {
                    for (var St in l)
                        (A = l[St]),
                            l.hasOwnProperty(St) &&
                                A !== void 0 &&
                                !n.hasOwnProperty(St) &&
                                Qc(t, e, St, void 0, n, A);
                    for (M in n)
                        (A = n[M]),
                            (O = l[M]),
                            !n.hasOwnProperty(M) ||
                                A === O ||
                                (A === void 0 && O === void 0) ||
                                Qc(t, e, M, A, n, O);
                    return;
                }
        }
        for (var S in l)
            (A = l[S]),
                l.hasOwnProperty(S) && A != null && !n.hasOwnProperty(S) && pt(t, e, S, null, n, A);
        for (U in n)
            (A = n[U]),
                (O = l[U]),
                !n.hasOwnProperty(U) || A === O || (A == null && O == null) || pt(t, e, U, A, n, O);
    }
    var Lc = null,
        Zc = null;
    function Uu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Br(t) {
        switch (t) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function Gr(t, e) {
        if (t === 0)
            switch (e) {
                case 'svg':
                    return 1;
                case 'math':
                    return 2;
                default:
                    return 0;
            }
        return t === 1 && e === 'foreignObject' ? 0 : t;
    }
    function Kc(t, e) {
        return (
            t === 'textarea' ||
            t === 'noscript' ||
            typeof e.children == 'string' ||
            typeof e.children == 'number' ||
            typeof e.children == 'bigint' ||
            (typeof e.dangerouslySetInnerHTML == 'object' &&
                e.dangerouslySetInnerHTML !== null &&
                e.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Jc = null;
    function bv() {
        var t = window.event;
        return t && t.type === 'popstate' ? (t === Jc ? !1 : ((Jc = t), !0)) : ((Jc = null), !1);
    }
    var Cr = typeof setTimeout == 'function' ? setTimeout : void 0,
        Ev = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        Vr = typeof Promise == 'function' ? Promise : void 0,
        Tv =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof Vr != 'undefined'
                  ? function (t) {
                        return Vr.resolve(null).then(t).catch(Av);
                    }
                  : Cr;
    function Av(t) {
        setTimeout(function () {
            throw t;
        });
    }
    function yl(t) {
        return t === 'head';
    }
    function Xr(t, e) {
        var l = e,
            n = 0,
            a = 0;
        do {
            var u = l.nextSibling;
            if ((t.removeChild(l), u && u.nodeType === 8))
                if (((l = u.data), l === '/$')) {
                    if (0 < n && 8 > n) {
                        l = n;
                        var i = t.ownerDocument;
                        if ((l & 1 && ma(i.documentElement), l & 2 && ma(i.body), l & 4))
                            for (l = i.head, ma(l), i = l.firstChild; i; ) {
                                var c = i.nextSibling,
                                    r = i.nodeName;
                                i[Hn] ||
                                    r === 'SCRIPT' ||
                                    r === 'STYLE' ||
                                    (r === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
                                    l.removeChild(i),
                                    (i = c);
                            }
                    }
                    if (a === 0) {
                        t.removeChild(u), za(e);
                        return;
                    }
                    a--;
                } else l === '$' || l === '$?' || l === '$!' ? a++ : (n = l.charCodeAt(0) - 48);
            else n = 0;
            l = u;
        } while (l);
        za(e);
    }
    function kc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var l = e;
            switch (((e = e.nextSibling), l.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    kc(l), Pu(l);
                    continue;
                case 'SCRIPT':
                case 'STYLE':
                    continue;
                case 'LINK':
                    if (l.rel.toLowerCase() === 'stylesheet') continue;
            }
            t.removeChild(l);
        }
    }
    function Ov(t, e, l, n) {
        for (; t.nodeType === 1; ) {
            var a = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!n && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
            } else if (n) {
                if (!t[Hn])
                    switch (e) {
                        case 'meta':
                            if (!t.hasAttribute('itemprop')) break;
                            return t;
                        case 'link':
                            if (
                                ((u = t.getAttribute('rel')),
                                u === 'stylesheet' && t.hasAttribute('data-precedence'))
                            )
                                break;
                            if (
                                u !== a.rel ||
                                t.getAttribute('href') !==
                                    (a.href == null || a.href === '' ? null : a.href) ||
                                t.getAttribute('crossorigin') !==
                                    (a.crossOrigin == null ? null : a.crossOrigin) ||
                                t.getAttribute('title') !== (a.title == null ? null : a.title)
                            )
                                break;
                            return t;
                        case 'style':
                            if (t.hasAttribute('data-precedence')) break;
                            return t;
                        case 'script':
                            if (
                                ((u = t.getAttribute('src')),
                                (u !== (a.src == null ? null : a.src) ||
                                    t.getAttribute('type') !== (a.type == null ? null : a.type) ||
                                    t.getAttribute('crossorigin') !==
                                        (a.crossOrigin == null ? null : a.crossOrigin)) &&
                                    u &&
                                    t.hasAttribute('async') &&
                                    !t.hasAttribute('itemprop'))
                            )
                                break;
                            return t;
                        default:
                            return t;
                    }
            } else if (e === 'input' && t.type === 'hidden') {
                var u = a.name == null ? null : '' + a.name;
                if (a.type === 'hidden' && t.getAttribute('name') === u) return t;
            } else return t;
            if (((t = xe(t.nextSibling)), t === null)) break;
        }
        return null;
    }
    function zv(t, e, l) {
        if (e === '') return null;
        for (; t.nodeType !== 3; )
            if (
                ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !l) ||
                ((t = xe(t.nextSibling)), t === null)
            )
                return null;
        return t;
    }
    function $c(t) {
        return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState === 'complete');
    }
    function xv(t, e) {
        var l = t.ownerDocument;
        if (t.data !== '$?' || l.readyState === 'complete') e();
        else {
            var n = function () {
                e(), l.removeEventListener('DOMContentLoaded', n);
            };
            l.addEventListener('DOMContentLoaded', n), (t._reactRetry = n);
        }
    }
    function xe(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (
                    ((e = t.data), e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')
                )
                    break;
                if (e === '/$') return null;
            }
        }
        return t;
    }
    var Wc = null;
    function Qr(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === '$' || l === '$!' || l === '$?') {
                    if (e === 0) return t;
                    e--;
                } else l === '/$' && e++;
            }
            t = t.previousSibling;
        }
        return null;
    }
    function Lr(t, e, l) {
        switch (((e = Uu(l)), t)) {
            case 'html':
                if (((t = e.documentElement), !t)) throw Error(f(452));
                return t;
            case 'head':
                if (((t = e.head), !t)) throw Error(f(453));
                return t;
            case 'body':
                if (((t = e.body), !t)) throw Error(f(454));
                return t;
            default:
                throw Error(f(451));
        }
    }
    function ma(t) {
        for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
        Pu(t);
    }
    var Ae = /* @__PURE__ */ new Map(),
        Zr = /* @__PURE__ */ new Set();
    function Hu(t) {
        return typeof t.getRootNode == 'function'
            ? t.getRootNode()
            : t.nodeType === 9
              ? t
              : t.ownerDocument;
    }
    var $e = Y.d;
    Y.d = {
        f: Mv,
        r: Dv,
        D: _v,
        C: Nv,
        L: Uv,
        m: Hv,
        X: wv,
        S: Rv,
        M: qv,
    };
    function Mv() {
        var t = $e.f(),
            e = Au();
        return t || e;
    }
    function Dv(t) {
        var e = Zl(t);
        e !== null && e.tag === 5 && e.type === 'form' ? rs(e) : $e.r(t);
    }
    var xn = typeof document == 'undefined' ? null : document;
    function Kr(t, e, l) {
        var n = xn;
        if (n && typeof e == 'string' && e) {
            var a = ge(e);
            (a = 'link[rel="' + t + '"][href="' + a + '"]'),
                typeof l == 'string' && (a += '[crossorigin="' + l + '"]'),
                Zr.has(a) ||
                    (Zr.add(a),
                    (t = { rel: t, crossOrigin: l, href: e }),
                    n.querySelector(a) === null &&
                        ((e = n.createElement('link')),
                        Zt(e, 'link', t),
                        Bt(e),
                        n.head.appendChild(e)));
        }
    }
    function _v(t) {
        $e.D(t), Kr('dns-prefetch', t, null);
    }
    function Nv(t, e) {
        $e.C(t, e), Kr('preconnect', t, e);
    }
    function Uv(t, e, l) {
        $e.L(t, e, l);
        var n = xn;
        if (n && t && e) {
            var a = 'link[rel="preload"][as="' + ge(e) + '"]';
            e === 'image' && l && l.imageSrcSet
                ? ((a += '[imagesrcset="' + ge(l.imageSrcSet) + '"]'),
                  typeof l.imageSizes == 'string' &&
                      (a += '[imagesizes="' + ge(l.imageSizes) + '"]'))
                : (a += '[href="' + ge(t) + '"]');
            var u = a;
            switch (e) {
                case 'style':
                    u = Mn(t);
                    break;
                case 'script':
                    u = Dn(t);
            }
            Ae.has(u) ||
                ((t = y(
                    {
                        rel: 'preload',
                        href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
                        as: e,
                    },
                    l,
                )),
                Ae.set(u, t),
                n.querySelector(a) !== null ||
                    (e === 'style' && n.querySelector(pa(u))) ||
                    (e === 'script' && n.querySelector(Sa(u))) ||
                    ((e = n.createElement('link')),
                    Zt(e, 'link', t),
                    Bt(e),
                    n.head.appendChild(e)));
        }
    }
    function Hv(t, e) {
        $e.m(t, e);
        var l = xn;
        if (l && t) {
            var n = e && typeof e.as == 'string' ? e.as : 'script',
                a = 'link[rel="modulepreload"][as="' + ge(n) + '"][href="' + ge(t) + '"]',
                u = a;
            switch (n) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    u = Dn(t);
            }
            if (
                !Ae.has(u) &&
                ((t = y({ rel: 'modulepreload', href: t }, e)),
                Ae.set(u, t),
                l.querySelector(a) === null)
            ) {
                switch (n) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (l.querySelector(Sa(u))) return;
                }
                (n = l.createElement('link')), Zt(n, 'link', t), Bt(n), l.head.appendChild(n);
            }
        }
    }
    function Rv(t, e, l) {
        $e.S(t, e, l);
        var n = xn;
        if (n && t) {
            var a = Kl(n).hoistableStyles,
                u = Mn(t);
            e = e || 'default';
            var i = a.get(u);
            if (!i) {
                var c = { loading: 0, preload: null };
                if ((i = n.querySelector(pa(u)))) c.loading = 5;
                else {
                    (t = y({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)),
                        (l = Ae.get(u)) && Fc(t, l);
                    var r = (i = n.createElement('link'));
                    Bt(r),
                        Zt(r, 'link', t),
                        (r._p = new Promise(function (E, M) {
                            (r.onload = E), (r.onerror = M);
                        })),
                        r.addEventListener('load', function () {
                            c.loading |= 1;
                        }),
                        r.addEventListener('error', function () {
                            c.loading |= 2;
                        }),
                        (c.loading |= 4),
                        Ru(i, e, n);
                }
                (i = {
                    type: 'stylesheet',
                    instance: i,
                    count: 1,
                    state: c,
                }),
                    a.set(u, i);
            }
        }
    }
    function wv(t, e) {
        $e.X(t, e);
        var l = xn;
        if (l && t) {
            var n = Kl(l).hoistableScripts,
                a = Dn(t),
                u = n.get(a);
            u ||
                ((u = l.querySelector(Sa(a))),
                u ||
                    ((t = y({ src: t, async: !0 }, e)),
                    (e = Ae.get(a)) && Ic(t, e),
                    (u = l.createElement('script')),
                    Bt(u),
                    Zt(u, 'link', t),
                    l.head.appendChild(u)),
                (u = {
                    type: 'script',
                    instance: u,
                    count: 1,
                    state: null,
                }),
                n.set(a, u));
        }
    }
    function qv(t, e) {
        $e.M(t, e);
        var l = xn;
        if (l && t) {
            var n = Kl(l).hoistableScripts,
                a = Dn(t),
                u = n.get(a);
            u ||
                ((u = l.querySelector(Sa(a))),
                u ||
                    ((t = y({ src: t, async: !0, type: 'module' }, e)),
                    (e = Ae.get(a)) && Ic(t, e),
                    (u = l.createElement('script')),
                    Bt(u),
                    Zt(u, 'link', t),
                    l.head.appendChild(u)),
                (u = {
                    type: 'script',
                    instance: u,
                    count: 1,
                    state: null,
                }),
                n.set(a, u));
        }
    }
    function Jr(t, e, l, n) {
        var a = (a = $.current) ? Hu(a) : null;
        if (!a) throw Error(f(446));
        switch (t) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof l.precedence == 'string' && typeof l.href == 'string'
                    ? ((e = Mn(l.href)),
                      (l = Kl(a).hoistableStyles),
                      (n = l.get(e)),
                      n ||
                          ((n = {
                              type: 'style',
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          l.set(e, n)),
                      n)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if (
                    l.rel === 'stylesheet' &&
                    typeof l.href == 'string' &&
                    typeof l.precedence == 'string'
                ) {
                    t = Mn(l.href);
                    var u = Kl(a).hoistableStyles,
                        i = u.get(t);
                    if (
                        (i ||
                            ((a = a.ownerDocument || a),
                            (i = {
                                type: 'stylesheet',
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            u.set(t, i),
                            (u = a.querySelector(pa(t))) &&
                                !u._p &&
                                ((i.instance = u), (i.state.loading = 5)),
                            Ae.has(t) ||
                                ((l = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: l.href,
                                    crossOrigin: l.crossOrigin,
                                    integrity: l.integrity,
                                    media: l.media,
                                    hrefLang: l.hrefLang,
                                    referrerPolicy: l.referrerPolicy,
                                }),
                                Ae.set(t, l),
                                u || jv(a, t, l, i.state))),
                        e && n === null)
                    )
                        throw Error(f(528, ''));
                    return i;
                }
                if (e && n !== null) throw Error(f(529, ''));
                return null;
            case 'script':
                return (
                    (e = l.async),
                    (l = l.src),
                    typeof l == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
                        ? ((e = Dn(l)),
                          (l = Kl(a).hoistableScripts),
                          (n = l.get(e)),
                          n ||
                              ((n = {
                                  type: 'script',
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              l.set(e, n)),
                          n)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(f(444, t));
        }
    }
    function Mn(t) {
        return 'href="' + ge(t) + '"';
    }
    function pa(t) {
        return 'link[rel="stylesheet"][' + t + ']';
    }
    function kr(t) {
        return y({}, t, {
            'data-precedence': t.precedence,
            precedence: null,
        });
    }
    function jv(t, e, l, n) {
        t.querySelector('link[rel="preload"][as="style"][' + e + ']')
            ? (n.loading = 1)
            : ((e = t.createElement('link')),
              (n.preload = e),
              e.addEventListener('load', function () {
                  return (n.loading |= 1);
              }),
              e.addEventListener('error', function () {
                  return (n.loading |= 2);
              }),
              Zt(e, 'link', l),
              Bt(e),
              t.head.appendChild(e));
    }
    function Dn(t) {
        return '[src="' + ge(t) + '"]';
    }
    function Sa(t) {
        return 'script[async]' + t;
    }
    function $r(t, e, l) {
        if ((e.count++, e.instance === null))
            switch (e.type) {
                case 'style':
                    var n = t.querySelector('style[data-href~="' + ge(l.href) + '"]');
                    if (n) return (e.instance = n), Bt(n), n;
                    var a = y({}, l, {
                        'data-href': l.href,
                        'data-precedence': l.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (n = (t.ownerDocument || t).createElement('style')),
                        Bt(n),
                        Zt(n, 'style', a),
                        Ru(n, l.precedence, t),
                        (e.instance = n)
                    );
                case 'stylesheet':
                    a = Mn(l.href);
                    var u = t.querySelector(pa(a));
                    if (u) return (e.state.loading |= 4), (e.instance = u), Bt(u), u;
                    (n = kr(l)),
                        (a = Ae.get(a)) && Fc(n, a),
                        (u = (t.ownerDocument || t).createElement('link')),
                        Bt(u);
                    var i = u;
                    return (
                        (i._p = new Promise(function (c, r) {
                            (i.onload = c), (i.onerror = r);
                        })),
                        Zt(u, 'link', n),
                        (e.state.loading |= 4),
                        Ru(u, l.precedence, t),
                        (e.instance = u)
                    );
                case 'script':
                    return (
                        (u = Dn(l.src)),
                        (a = t.querySelector(Sa(u)))
                            ? ((e.instance = a), Bt(a), a)
                            : ((n = l),
                              (a = Ae.get(u)) && ((n = y({}, l)), Ic(n, a)),
                              (t = t.ownerDocument || t),
                              (a = t.createElement('script')),
                              Bt(a),
                              Zt(a, 'link', n),
                              t.head.appendChild(a),
                              (e.instance = a))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(f(443, e.type));
            }
        else
            e.type === 'stylesheet' &&
                (e.state.loading & 4) === 0 &&
                ((n = e.instance), (e.state.loading |= 4), Ru(n, l.precedence, t));
        return e.instance;
    }
    function Ru(t, e, l) {
        for (
            var n = l.querySelectorAll(
                    'link[rel="stylesheet"][data-precedence],style[data-precedence]',
                ),
                a = n.length ? n[n.length - 1] : null,
                u = a,
                i = 0;
            i < n.length;
            i++
        ) {
            var c = n[i];
            if (c.dataset.precedence === e) u = c;
            else if (u !== a) break;
        }
        u
            ? u.parentNode.insertBefore(t, u.nextSibling)
            : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
    }
    function Fc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.title == null && (t.title = e.title);
    }
    function Ic(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.integrity == null && (t.integrity = e.integrity);
    }
    var wu = null;
    function Wr(t, e, l) {
        if (wu === null) {
            var n = /* @__PURE__ */ new Map(),
                a = (wu = /* @__PURE__ */ new Map());
            a.set(l, n);
        } else (a = wu), (n = a.get(l)), n || ((n = /* @__PURE__ */ new Map()), a.set(l, n));
        if (n.has(t)) return n;
        for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
            var u = l[a];
            if (
                !(u[Hn] || u[kt] || (t === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
                u.namespaceURI !== 'http://www.w3.org/2000/svg'
            ) {
                var i = u.getAttribute(e) || '';
                i = t + i;
                var c = n.get(i);
                c ? c.push(u) : n.set(i, [u]);
            }
        }
        return n;
    }
    function Fr(t, e, l) {
        (t = t.ownerDocument || t),
            t.head.insertBefore(l, e === 'title' ? t.querySelector('head > title') : null);
    }
    function Yv(t, e, l) {
        if (l === 1 || e.itemProp != null) return !1;
        switch (t) {
            case 'meta':
            case 'title':
                return !0;
            case 'style':
                if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '')
                    break;
                return !0;
            case 'link':
                if (
                    typeof e.rel != 'string' ||
                    typeof e.href != 'string' ||
                    e.href === '' ||
                    e.onLoad ||
                    e.onError
                )
                    break;
                switch (e.rel) {
                    case 'stylesheet':
                        return (t = e.disabled), typeof e.precedence == 'string' && t == null;
                    default:
                        return !0;
                }
            case 'script':
                if (
                    e.async &&
                    typeof e.async != 'function' &&
                    typeof e.async != 'symbol' &&
                    !e.onLoad &&
                    !e.onError &&
                    e.src &&
                    typeof e.src == 'string'
                )
                    return !0;
        }
        return !1;
    }
    function Ir(t) {
        return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
    }
    var ba = null;
    function Bv() {}
    function Gv(t, e, l) {
        if (ba === null) throw Error(f(475));
        var n = ba;
        if (
            e.type === 'stylesheet' &&
            (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
            (e.state.loading & 4) === 0
        ) {
            if (e.instance === null) {
                var a = Mn(l.href),
                    u = t.querySelector(pa(a));
                if (u) {
                    (t = u._p),
                        t !== null &&
                            typeof t == 'object' &&
                            typeof t.then == 'function' &&
                            (n.count++, (n = qu.bind(n)), t.then(n, n)),
                        (e.state.loading |= 4),
                        (e.instance = u),
                        Bt(u);
                    return;
                }
                (u = t.ownerDocument || t),
                    (l = kr(l)),
                    (a = Ae.get(a)) && Fc(l, a),
                    (u = u.createElement('link')),
                    Bt(u);
                var i = u;
                (i._p = new Promise(function (c, r) {
                    (i.onload = c), (i.onerror = r);
                })),
                    Zt(u, 'link', l),
                    (e.instance = u);
            }
            n.stylesheets === null && (n.stylesheets = /* @__PURE__ */ new Map()),
                n.stylesheets.set(e, t),
                (t = e.state.preload) &&
                    (e.state.loading & 3) === 0 &&
                    (n.count++,
                    (e = qu.bind(n)),
                    t.addEventListener('load', e),
                    t.addEventListener('error', e));
        }
    }
    function Cv() {
        if (ba === null) throw Error(f(475));
        var t = ba;
        return (
            t.stylesheets && t.count === 0 && Pc(t, t.stylesheets),
            0 < t.count
                ? function (e) {
                      var l = setTimeout(function () {
                          if ((t.stylesheets && Pc(t, t.stylesheets), t.unsuspend)) {
                              var n = t.unsuspend;
                              (t.unsuspend = null), n();
                          }
                      }, 6e4);
                      return (
                          (t.unsuspend = e),
                          function () {
                              (t.unsuspend = null), clearTimeout(l);
                          }
                      );
                  }
                : null
        );
    }
    function qu() {
        if ((this.count--, this.count === 0)) {
            if (this.stylesheets) Pc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                (this.unsuspend = null), t();
            }
        }
    }
    var ju = null;
    function Pc(t, e) {
        (t.stylesheets = null),
            t.unsuspend !== null &&
                (t.count++,
                (ju = /* @__PURE__ */ new Map()),
                e.forEach(Vv, t),
                (ju = null),
                qu.call(t));
    }
    function Vv(t, e) {
        if (!(e.state.loading & 4)) {
            var l = ju.get(t);
            if (l) var n = l.get(null);
            else {
                (l = /* @__PURE__ */ new Map()), ju.set(t, l);
                for (
                    var a = t.querySelectorAll('link[data-precedence],style[data-precedence]'),
                        u = 0;
                    u < a.length;
                    u++
                ) {
                    var i = a[u];
                    (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
                        (l.set(i.dataset.precedence, i), (n = i));
                }
                n && l.set(null, n);
            }
            (a = e.instance),
                (i = a.getAttribute('data-precedence')),
                (u = l.get(i) || n),
                u === n && l.set(null, a),
                l.set(i, a),
                this.count++,
                (n = qu.bind(this)),
                a.addEventListener('load', n),
                a.addEventListener('error', n),
                u
                    ? u.parentNode.insertBefore(a, u.nextSibling)
                    : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(a, t.firstChild)),
                (e.state.loading |= 4);
        }
    }
    var Ea = {
        $$typeof: dt,
        Provider: null,
        Consumer: null,
        _currentValue: Z,
        _currentValue2: Z,
        _threadCount: 0,
    };
    function Xv(t, e, l, n, a, u, i, c) {
        (this.tag = 1),
            (this.containerInfo = t),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                    null),
            (this.callbackPriority = 0),
            (this.expirationTimes = $u(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = $u(0)),
            (this.hiddenUpdates = $u(null)),
            (this.identifierPrefix = n),
            (this.onUncaughtError = a),
            (this.onCaughtError = u),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = c),
            (this.incompleteTransitions = /* @__PURE__ */ new Map());
    }
    function Pr(t, e, l, n, a, u, i, c, r, E, M, U) {
        return (
            (t = new Xv(t, e, l, i, c, r, E, U)),
            (e = 1),
            u === !0 && (e |= 24),
            (u = fe(3, null, null, e)),
            (t.current = u),
            (u.stateNode = t),
            (e = wi()),
            e.refCount++,
            (t.pooledCache = e),
            e.refCount++,
            (u.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: e,
            }),
            Bi(u),
            t
        );
    }
    function td(t) {
        return t ? ((t = an), t) : an;
    }
    function ed(t, e, l, n, a, u) {
        (a = td(a)),
            n.context === null ? (n.context = a) : (n.pendingContext = a),
            (n = ll(e)),
            (n.payload = { element: l }),
            (u = u === void 0 ? null : u),
            u !== null && (n.callback = u),
            (l = nl(t, n, e)),
            l !== null && (he(l, t, e), Fn(l, t, e));
    }
    function ld(t, e) {
        if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e;
        }
    }
    function tf(t, e) {
        ld(t, e), (t = t.alternate) && ld(t, e);
    }
    function nd(t) {
        if (t.tag === 13) {
            var e = nn(t, 67108864);
            e !== null && he(e, t, 67108864), tf(t, 67108864);
        }
    }
    var Yu = !0;
    function Qv(t, e, l, n) {
        var a = D.T;
        D.T = null;
        var u = Y.p;
        try {
            (Y.p = 2), ef(t, e, l, n);
        } finally {
            (Y.p = u), (D.T = a);
        }
    }
    function Lv(t, e, l, n) {
        var a = D.T;
        D.T = null;
        var u = Y.p;
        try {
            (Y.p = 8), ef(t, e, l, n);
        } finally {
            (Y.p = u), (D.T = a);
        }
    }
    function ef(t, e, l, n) {
        if (Yu) {
            var a = lf(n);
            if (a === null) Xc(t, e, n, Bu, l), ud(t, n);
            else if (Kv(a, t, e, l, n)) n.stopPropagation();
            else if ((ud(t, n), e & 4 && -1 < Zv.indexOf(t))) {
                for (; a !== null; ) {
                    var u = Zl(a);
                    if (u !== null)
                        switch (u.tag) {
                            case 3:
                                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                                    var i = Al(u.pendingLanes);
                                    if (i !== 0) {
                                        var c = u;
                                        for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                                            var r = 1 << (31 - ie(i));
                                            (c.entanglements[1] |= r), (i &= ~r);
                                        }
                                        Re(u), (yt & 6) === 0 && ((Eu = De() + 500), va(0));
                                    }
                                }
                                break;
                            case 13:
                                (c = nn(u, 2)), c !== null && he(c, u, 2), Au(), tf(u, 2);
                        }
                    if (((u = lf(n)), u === null && Xc(t, e, n, Bu, l), u === a)) break;
                    a = u;
                }
                a !== null && n.stopPropagation();
            } else Xc(t, e, n, null, l);
        }
    }
    function lf(t) {
        return (t = ci(t)), nf(t);
    }
    var Bu = null;
    function nf(t) {
        if (((Bu = null), (t = Ll(t)), t !== null)) {
            var e = T(t);
            if (e === null) t = null;
            else {
                var l = e.tag;
                if (l === 13) {
                    if (((t = z(e)), t !== null)) return t;
                    t = null;
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null;
                } else e !== t && (t = null);
            }
        }
        return (Bu = t), null;
    }
    function ad(t) {
        switch (t) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 2;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8;
            case 'message':
                switch (Nd()) {
                    case mf:
                        return 2;
                    case pf:
                        return 8;
                    case Na:
                    case Ud:
                        return 32;
                    case Sf:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var af = !1,
        gl = null,
        ml = null,
        pl = null,
        Ta = /* @__PURE__ */ new Map(),
        Aa = /* @__PURE__ */ new Map(),
        Sl = [],
        Zv =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' ',
            );
    function ud(t, e) {
        switch (t) {
            case 'focusin':
            case 'focusout':
                gl = null;
                break;
            case 'dragenter':
            case 'dragleave':
                ml = null;
                break;
            case 'mouseover':
            case 'mouseout':
                pl = null;
                break;
            case 'pointerover':
            case 'pointerout':
                Ta.delete(e.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                Aa.delete(e.pointerId);
        }
    }
    function Oa(t, e, l, n, a, u) {
        return t === null || t.nativeEvent !== u
            ? ((t = {
                  blockedOn: e,
                  domEventName: l,
                  eventSystemFlags: n,
                  nativeEvent: u,
                  targetContainers: [a],
              }),
              e !== null && ((e = Zl(e)), e !== null && nd(e)),
              t)
            : ((t.eventSystemFlags |= n),
              (e = t.targetContainers),
              a !== null && e.indexOf(a) === -1 && e.push(a),
              t);
    }
    function Kv(t, e, l, n, a) {
        switch (e) {
            case 'focusin':
                return (gl = Oa(gl, t, e, l, n, a)), !0;
            case 'dragenter':
                return (ml = Oa(ml, t, e, l, n, a)), !0;
            case 'mouseover':
                return (pl = Oa(pl, t, e, l, n, a)), !0;
            case 'pointerover':
                var u = a.pointerId;
                return Ta.set(u, Oa(Ta.get(u) || null, t, e, l, n, a)), !0;
            case 'gotpointercapture':
                return (u = a.pointerId), Aa.set(u, Oa(Aa.get(u) || null, t, e, l, n, a)), !0;
        }
        return !1;
    }
    function id(t) {
        var e = Ll(t.target);
        if (e !== null) {
            var l = T(e);
            if (l !== null) {
                if (((e = l.tag), e === 13)) {
                    if (((e = z(l)), e !== null)) {
                        (t.blockedOn = e),
                            Gd(t.priority, function () {
                                if (l.tag === 13) {
                                    var n = de();
                                    n = Wu(n);
                                    var a = nn(l, n);
                                    a !== null && he(a, l, n), tf(l, n);
                                }
                            });
                        return;
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        t.blockedOn = null;
    }
    function Gu(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var l = lf(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var n = new l.constructor(l.type, l);
                (ii = n), l.target.dispatchEvent(n), (ii = null);
            } else return (e = Zl(l)), e !== null && nd(e), (t.blockedOn = l), !1;
            e.shift();
        }
        return !0;
    }
    function cd(t, e, l) {
        Gu(t) && l.delete(e);
    }
    function Jv() {
        (af = !1),
            gl !== null && Gu(gl) && (gl = null),
            ml !== null && Gu(ml) && (ml = null),
            pl !== null && Gu(pl) && (pl = null),
            Ta.forEach(cd),
            Aa.forEach(cd);
    }
    function Cu(t, e) {
        t.blockedOn === e &&
            ((t.blockedOn = null),
            af || ((af = !0), x.unstable_scheduleCallback(x.unstable_NormalPriority, Jv)));
    }
    var Vu = null;
    function fd(t) {
        Vu !== t &&
            ((Vu = t),
            x.unstable_scheduleCallback(x.unstable_NormalPriority, function () {
                Vu === t && (Vu = null);
                for (var e = 0; e < t.length; e += 3) {
                    var l = t[e],
                        n = t[e + 1],
                        a = t[e + 2];
                    if (typeof n != 'function') {
                        if (nf(n || l) === null) continue;
                        break;
                    }
                    var u = Zl(l);
                    u !== null &&
                        (t.splice(e, 3),
                        (e -= 3),
                        nc(
                            u,
                            {
                                pending: !0,
                                data: a,
                                method: l.method,
                                action: n,
                            },
                            n,
                            a,
                        ));
                }
            }));
    }
    function za(t) {
        function e(r) {
            return Cu(r, t);
        }
        gl !== null && Cu(gl, t),
            ml !== null && Cu(ml, t),
            pl !== null && Cu(pl, t),
            Ta.forEach(e),
            Aa.forEach(e);
        for (var l = 0; l < Sl.length; l++) {
            var n = Sl[l];
            n.blockedOn === t && (n.blockedOn = null);
        }
        for (; 0 < Sl.length && ((l = Sl[0]), l.blockedOn === null); )
            id(l), l.blockedOn === null && Sl.shift();
        if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
            for (n = 0; n < l.length; n += 3) {
                var a = l[n],
                    u = l[n + 1],
                    i = a[It] || null;
                if (typeof u == 'function') i || fd(l);
                else if (i) {
                    var c = null;
                    if (u && u.hasAttribute('formAction')) {
                        if (((a = u), (i = u[It] || null))) c = i.formAction;
                        else if (nf(a) !== null) continue;
                    } else c = i.action;
                    typeof c == 'function' ? (l[n + 1] = c) : (l.splice(n, 3), (n -= 3)), fd(l);
                }
            }
    }
    function uf(t) {
        this._internalRoot = t;
    }
    (Xu.prototype.render = uf.prototype.render =
        function (t) {
            var e = this._internalRoot;
            if (e === null) throw Error(f(409));
            var l = e.current,
                n = de();
            ed(l, n, t, e, null, null);
        }),
        (Xu.prototype.unmount = uf.prototype.unmount =
            function () {
                var t = this._internalRoot;
                if (t !== null) {
                    this._internalRoot = null;
                    var e = t.containerInfo;
                    ed(t.current, 2, null, t, null, null), Au(), (e[Ql] = null);
                }
            });
    function Xu(t) {
        this._internalRoot = t;
    }
    Xu.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
            var e = Of();
            t = { blockedOn: null, target: t, priority: e };
            for (var l = 0; l < Sl.length && e !== 0 && e < Sl[l].priority; l++);
            Sl.splice(l, 0, t), l === 0 && id(t);
        }
    };
    var od = o.version;
    if (od !== '19.1.1') throw Error(f(527, od, '19.1.1'));
    Y.findDOMNode = function (t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == 'function'
                ? Error(f(188))
                : ((t = Object.keys(t).join(',')), Error(f(268, t)));
        return (t = p(e)), (t = t !== null ? s(t) : null), (t = t === null ? null : t.stateNode), t;
    };
    var kv = {
        bundleType: 0,
        version: '19.1.1',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: D,
        reconcilerVersion: '19.1.1',
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
        var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qu.isDisabled && Qu.supportsFiber)
            try {
                (_n = Qu.inject(kv)), (ue = Qu);
            } catch (t) {}
    }
    return (
        (xa.createRoot = function (t, e) {
            if (!g(t)) throw Error(f(299));
            var l = !1,
                n = '',
                a = zs,
                u = xs,
                i = Ms,
                c = null;
            return (
                e != null &&
                    (e.unstable_strictMode === !0 && (l = !0),
                    e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
                    e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
                    e.onCaughtError !== void 0 && (u = e.onCaughtError),
                    e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
                    e.unstable_transitionCallbacks !== void 0 &&
                        (c = e.unstable_transitionCallbacks)),
                (e = Pr(t, 1, !1, null, null, l, n, a, u, i, c, null)),
                (t[Ql] = e.current),
                Vc(t),
                new uf(e)
            );
        }),
        (xa.hydrateRoot = function (t, e, l) {
            if (!g(t)) throw Error(f(299));
            var n = !1,
                a = '',
                u = zs,
                i = xs,
                c = Ms,
                r = null,
                E = null;
            return (
                l != null &&
                    (l.unstable_strictMode === !0 && (n = !0),
                    l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
                    l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
                    l.onCaughtError !== void 0 && (i = l.onCaughtError),
                    l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
                    l.unstable_transitionCallbacks !== void 0 &&
                        (r = l.unstable_transitionCallbacks),
                    l.formState !== void 0 && (E = l.formState)),
                (e = Pr(t, 1, !0, e, l != null ? l : null, n, a, u, i, c, r, E)),
                (e.context = td(null)),
                (l = e.current),
                (n = de()),
                (n = Wu(n)),
                (a = ll(n)),
                (a.callback = null),
                nl(l, a, n),
                (l = n),
                (e.current.lanes = l),
                Un(e, l),
                Re(e),
                (t[Ql] = e.current),
                Vc(t),
                new Xu(e)
            );
        }),
        (xa.version = '19.1.1'),
        xa
    );
}
var md;
function a0() {
    if (md) return ff.exports;
    md = 1;
    function x() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
            } catch (o) {
                console.error(o);
            }
    }
    return x(), (ff.exports = n0()), ff.exports;
}
var u0 = a0(),
    df = { exports: {} },
    Ma = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd;
function i0() {
    if (pd) return Ma;
    pd = 1;
    var x = Symbol.for('react.transitional.element'),
        o = Symbol.for('react.fragment');
    function d(f, g, T) {
        var z = null;
        if ((T !== void 0 && (z = '' + T), g.key !== void 0 && (z = '' + g.key), 'key' in g)) {
            T = {};
            for (var m in g) m !== 'key' && (T[m] = g[m]);
        } else T = g;
        return (
            (g = T.ref),
            {
                $$typeof: x,
                type: f,
                key: z,
                ref: g !== void 0 ? g : null,
                props: T,
            }
        );
    }
    return (Ma.Fragment = o), (Ma.jsx = d), (Ma.jsxs = d), Ma;
}
var Sd;
function c0() {
    return Sd || ((Sd = 1), (df.exports = i0())), df.exports;
}
var it = c0();
let f0;
const o0 = () => f0;
function et(x, o, d, f) {
    return new (d || (d = Promise))(function (g, T) {
        function z(s) {
            try {
                p(f.next(s));
            } catch (y) {
                T(y);
            }
        }
        function m(s) {
            try {
                p(f.throw(s));
            } catch (y) {
                T(y);
            }
        }
        function p(s) {
            var y;
            s.done
                ? g(s.value)
                : ((y = s.value),
                  y instanceof d
                      ? y
                      : new d(function (N) {
                            N(y);
                        })).then(z, m);
        }
        p((f = f.apply(x, o || [])).next());
    });
}
const Ad = 'NON_LOCAL_STORAGE_LOCAL_ID',
    s0 = (x, o) =>
        typeof window != 'undefined' && window.localStorage
            ? window.localStorage.getItem(`${Ad}:${x}:${o}`)
            : null,
    r0 = (x, o, d) => {
        typeof window != 'undefined' &&
            window.localStorage &&
            window.localStorage.setItem(`${Ad}:${x}:${o}`, d);
    };
function d0(x, o, d) {
    return et(
        this,
        arguments,
        void 0,
        function* (
            f,
            g,
            T,
            z = {
                iterations: 1e5,
                hash: 'SHA-512',
                derivedKeyType: { name: 'AES-GCM', length: 256 },
            },
        ) {
            const m = new TextEncoder(),
                p = yield crypto.subtle.importKey('raw', m.encode(f + ':' + g), 'PBKDF2', !1, [
                    'deriveKey',
                ]);
            return crypto.subtle.deriveKey(
                {
                    name: 'PBKDF2',
                    salt: T,
                    iterations: (z == null ? void 0 : z.iterations) || 1e5,
                    hash: (z == null ? void 0 : z.hash) || 'SHA-512',
                },
                p,
                (z == null ? void 0 : z.derivedKeyType) || { name: 'AES-GCM', length: 256 },
                !1,
                ['encrypt', 'decrypt'],
            );
        },
    );
}
function h0(x, o) {
    return et(this, arguments, void 0, function* (d, f, g = { algorithm: 'AES-GCM' }) {
        const T = new TextEncoder(),
            z = crypto.getRandomValues(new Uint8Array(12)),
            m = yield crypto.subtle.encrypt(
                { name: (g == null ? void 0 : g.algorithm) || 'AES-GCM', iv: z },
                d,
                T.encode(f),
            );
        return JSON.stringify({
            iv: btoa(String.fromCharCode(...z)),
            data: btoa(String.fromCharCode(...new Uint8Array(m))),
        });
    });
}
function v0(x, o) {
    return et(this, arguments, void 0, function* (d, f, g = { algorithm: 'AES-GCM' }) {
        const T = JSON.parse(f),
            z = new TextDecoder(),
            m = Uint8Array.from(atob(T.iv), (y) => y.charCodeAt(0)),
            p = Uint8Array.from(atob(T.data), (y) => y.charCodeAt(0)),
            s = yield crypto.subtle.decrypt(
                { name: (g == null ? void 0 : g.algorithm) || 'AES-GCM', iv: m },
                d,
                p,
            );
        return z.decode(s);
    });
}
let Od;
Od =
    typeof crypto != 'undefined' && typeof crypto.randomUUID == 'function'
        ? () => crypto.randomUUID()
        : () =>
              'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (x) => {
                  const o = (16 * Math.random()) | 0;
                  return (x === 'x' ? o : (3 & o) | 8).toString(16);
              });
var bd = Od;
const Ed = ['error', 'warn', 'info', 'debug'];
let y0 = class {
    constructor(o) {
        this.level = o;
    }
    log(o, d) {
        Ed.indexOf(this.level) < Ed.indexOf(o) || console[o](d);
    }
};
var Td = (x = 'warn') => new y0(x);
function hf(x) {
    let o = x.replace(/-/g, '+').replace(/_/g, '/');
    for (; o.length % 4 != 0; ) o += '=';
    return atob(o);
}
function g0(x) {
    if (typeof x != 'string') throw new Error('JWT must be a string');
    const o = x.split('.');
    if (o.length !== 3)
        throw new Error('JWT should consist of three parts: header.payload.signature');
    const [d, f, g] = o,
        T = hf(d);
    let z;
    try {
        z = JSON.parse(T);
    } catch (s) {
        throw new Error('Invalid JWT header JSON: ' + s.message);
    }
    const m = hf(f);
    let p;
    try {
        p = JSON.parse(m);
    } catch (s) {
        throw new Error('Invalid JWT payload JSON: ' + s.message);
    }
    return {
        header: z,
        payload: p,
        signatureHex: (function (s) {
            let y = '';
            for (let N = 0; N < s.length; N++) y += s.charCodeAt(N).toString(16).padStart(2, '0');
            return y;
        })(hf(g)),
    };
}
const ot = Symbol('vaultrice/credentials'),
    Kt = Symbol('vaultrice/encryptionSettings'),
    Vl = Symbol('vaultrice/previousEncryptionSettings'),
    we = Symbol('vaultrice/errorHandlers'),
    Xt = Symbol('vaultrice/ws'),
    Me = Symbol('vaultrice/eventHandlers'),
    Da = Symbol('vaultrice/accessTokenExpiringHandlers'),
    m0 = { enabled: !0, maxOperations: 100, windowMs: 6e4, operationDelay: 0 };
let p0 = class {
    constructor(o) {
        (this.operationHistory = []),
            (this.lastOperationTime = 0),
            (this.operationConfig = Object.assign(Object.assign({}, m0), o || {}));
    }
    updateConfig(o) {
        this.operationConfig = Object.assign(Object.assign({}, this.operationConfig), o);
    }
    cleanupHistory(o, d) {
        const f = Date.now() - d,
            g = o.findIndex((T) => T.timestamp > f);
        g > 0 ? o.splice(0, g) : g === -1 && (o.length = 0);
    }
    isAllowed(o, d, f) {
        return this.cleanupHistory(o, f), o.length < d;
    }
    calculateDelay(o, d) {
        if (d === 0) return 0;
        const f = Date.now() - o;
        return Math.max(0, d - f);
    }
    throttleOperation() {
        return et(this, void 0, void 0, function* () {
            if (!this.operationConfig.enabled) return;
            if (
                !this.isAllowed(
                    this.operationHistory,
                    this.operationConfig.maxOperations,
                    this.operationConfig.windowMs,
                )
            )
                throw new Error(
                    `Operation rate limit exceeded. Maximum ${this.operationConfig.maxOperations} operations per ${this.operationConfig.windowMs}ms allowed.`,
                );
            const o = this.calculateDelay(
                this.lastOperationTime,
                this.operationConfig.operationDelay,
            );
            var d;
            o > 0 && (yield ((d = o), new Promise((g) => setTimeout(g, d))));
            const f = Date.now();
            this.operationHistory.push({ timestamp: f }), (this.lastOperationTime = f);
        });
    }
    getOperationStatus() {
        return (
            this.cleanupHistory(this.operationHistory, this.operationConfig.windowMs),
            {
                enabled: this.operationConfig.enabled,
                currentCount: this.operationHistory.length,
                maxOperations: this.operationConfig.maxOperations,
                windowMs: this.operationConfig.windowMs,
                remaining: Math.max(
                    0,
                    this.operationConfig.maxOperations - this.operationHistory.length,
                ),
            }
        );
    }
    reset() {
        (this.operationHistory.length = 0), (this.lastOperationTime = 0);
    }
};
var zd;
function S0(x, o) {
    return s0(x, o) || `${bd()}-${bd()}`;
}
const Xl = '_undefined_';
class El {
    constructor(o, d = { class: Xl, autoUpdateOldEncryptedValues: !0, logLevel: 'warn' }) {
        (this.class = Xl), (this[zd] = []);
        let f = { class: Xl, logLevel: 'warn' };
        if (
            (typeof d == 'string'
                ? ((this.id = d), (f = { class: Xl, logLevel: 'warn' }))
                : ((this.id = d.id || S0(o.projectId, d.class || Xl)), (f = d)),
            (this.logger = Td(f.logLevel)),
            !o || typeof o != 'object' || typeof o.projectId != 'string')
        )
            throw new Error('Invalid credentials!');
        const g = typeof o.apiKey == 'string' && typeof o.apiSecret == 'string',
            T = typeof o.accessToken == 'string',
            z = typeof o.getAccessToken == 'function',
            m = [g, z].filter(Boolean).length,
            p = T && !z;
        if (m === 0 && !p)
            throw new Error(
                'Invalid credentials! Must provide one of: (apiKey + apiSecret), accessToken, or getAccessToken function',
            );
        if (m > 1 || (p && m > 0))
            throw new Error(
                'Invalid credentials! Provide only one primary authentication method. You can combine getAccessToken with an initial accessToken for performance.',
            );
        if ((o.apiKey || o.apiSecret) && !g)
            throw new Error(
                'Invalid credentials! Both apiKey and apiSecret are required when using direct authentication',
            );
        if (
            ((this.throttleManager = new p0(f.throttling)),
            typeof d == 'string' || (d != null && d.id) || r0(o.projectId, d.class || Xl, this.id),
            (this[ot] = Object.assign({}, o)),
            typeof this[ot].apiKey == 'string' ||
                typeof this[ot].apiSecret == 'string' ||
                (typeof this[ot].accessToken != 'string' && !o.getAccessToken) ||
                (delete this[ot].apiKey, delete this[ot].apiSecret),
            o.getAccessToken &&
                ((this.getAccessTokenFn = o.getAccessToken), delete this[ot].getAccessToken),
            (this.class = f.class || Xl),
            f.passphrase && f.getEncryptionHandler)
        )
            throw new Error('Either define a passphrase or a getEncryptionHandler, but not both!');
        if (
            (f.getEncryptionHandler && (this.getEncryptionHandler = f.getEncryptionHandler),
            f.passphrase &&
                (this.getEncryptionHandler = (s) =>
                    et(this, void 0, void 0, function* () {
                        var y, N, R, w;
                        const K = yield d0(f.passphrase, this.id, s.salt, f.keyDerivationOptions),
                            k =
                                !(
                                    (N =
                                        (y = f.keyDerivationOptions) === null || y === void 0
                                            ? void 0
                                            : y.derivedKeyType) === null || N === void 0
                                ) && N.name
                                    ? {
                                          algorithm:
                                              (w =
                                                  (R = f.keyDerivationOptions) === null ||
                                                  R === void 0
                                                      ? void 0
                                                      : R.derivedKeyType) === null || w === void 0
                                                  ? void 0
                                                  : w.name,
                                      }
                                    : void 0;
                        return { encrypt: (W) => h0(K, W, k), decrypt: (W) => v0(K, W, k) };
                    })),
            f.autoUpdateOldEncryptedValues === void 0 && (f.autoUpdateOldEncryptedValues = !0),
            (this.autoUpdateOldEncryptedValues = f.autoUpdateOldEncryptedValues),
            f.idSignature && (this.idSignature = f.idSignature),
            this.idSignature && (this.idSignatureKeyVersion = f.idSignatureKeyVersion),
            z)
        )
            if (T) {
                this.logger.log('debug', 'Using token provider with initial access token');
                try {
                    this.useAccessTokenAndRememberToAcquireTheNext(this[ot].accessToken);
                } catch (s) {
                    this.logger.log('warn', 'Initial access token is invalid, acquiring new token'),
                        (this[ot].accessToken = void 0),
                        (this.isGettingAccessToken = this.acquireAccessToken()),
                        this.isGettingAccessToken
                            .then(() => {
                                this.isGettingAccessToken = void 0;
                            })
                            .catch(() => {
                                this.isGettingAccessToken = void 0;
                            });
                }
            } else
                (this.isGettingAccessToken = this.acquireAccessToken()),
                    this.isGettingAccessToken
                        .then(() => {
                            this.isGettingAccessToken = void 0;
                        })
                        .catch(() => {
                            this.isGettingAccessToken = void 0;
                        });
        else
            T ||
                ((this.isGettingAccessToken = this.acquireAccessToken()),
                this.isGettingAccessToken
                    .then(() => {
                        this.isGettingAccessToken = void 0;
                    })
                    .catch(() => {
                        this.isGettingAccessToken = void 0;
                    }));
    }
    static executeWithRetry(o, d, f) {
        return et(this, arguments, void 0, function* (g, T, z, m = {}) {
            var p, s, y, N;
            const {
                maxRetries: R = 3,
                initialDelay: w = 100,
                maxDelay: K = 2e3,
                backoffMultiplier: k = 2,
            } = m;
            let W,
                ct = 0;
            for (; ct <= R; )
                try {
                    return yield g();
                } catch (lt) {
                    W = lt;
                    let dt = !1,
                        I = '';
                    const q = [
                        'Please try again in a moment',
                        'Please retry',
                        'Service temporarily unavailable',
                        'temporarily unavailable',
                        'try again later',
                    ];
                    if (lt && typeof lt == 'object') {
                        I = lt.message || lt.toString();
                        const bt =
                            (p = lt == null ? void 0 : lt.cause) === null || p === void 0
                                ? void 0
                                : p.code;
                        bt && bt.indexOf('retry') > -1
                            ? (dt = !0)
                            : I &&
                              (dt = q.some((vt) => I.toLowerCase().includes(vt.toLowerCase())));
                    } else
                        typeof lt == 'string'
                            ? ((I = lt),
                              (dt = q.some((bt) => I.toLowerCase().includes(bt.toLowerCase()))))
                            : ((dt =
                                  (lt == null ? void 0 : lt.name) === 'TypeError' ||
                                  ((s = lt == null ? void 0 : lt.message) === null || s === void 0
                                      ? void 0
                                      : s.includes('fetch')) ||
                                  ((y = lt == null ? void 0 : lt.message) === null || y === void 0
                                      ? void 0
                                      : y.includes('network')) ||
                                  ((N = lt == null ? void 0 : lt.message) === null || N === void 0
                                      ? void 0
                                      : N.includes('timeout'))),
                              (I = (lt == null ? void 0 : lt.message) || 'Unknown error'));
                    if (dt && ct < R) {
                        z &&
                            z.log(
                                'warn',
                                `${T} failed (attempt ${ct + 1}/${R + 1}): ${I}. Retrying...`,
                            ),
                            ct++;
                        const bt = Math.min(w * Math.pow(k, ct - 1), K),
                            vt = bt + Math.random() * (0.1 * bt);
                        z &&
                            z.log(
                                'debug',
                                `Waiting ${Math.round(vt)}ms before retry attempt ${ct + 1}`,
                            ),
                            yield new Promise((qt) => setTimeout(qt, vt));
                        continue;
                    }
                    throw lt;
                }
            throw W;
        });
    }
    static retrieveAccessToken(o, d, f, g) {
        return et(this, void 0, void 0, function* () {
            if (typeof o != 'string' || !o) throw new Error('projectId not valid!');
            if (typeof d != 'string' || !d) throw new Error('apiKey not valid!');
            if (typeof f != 'string' || !f) throw new Error('apiSecret not valid!');
            const T = { Authorization: `Basic ${btoa(`${d}:${f}`)}` };
            return (
                typeof (g == null ? void 0 : g.origin) == 'string' &&
                    (g == null ? void 0 : g.origin.length) > 0 &&
                    (T.Origin = g.origin),
                El.executeWithRetry(
                    () =>
                        et(this, void 0, void 0, function* () {
                            var z;
                            const m = yield fetch(`${El.basePath}/project/${o}/auth/token`, {
                                    method: 'GET',
                                    headers: T,
                                }),
                                p = m.headers.get('content-type');
                            let s;
                            if (p)
                                try {
                                    p.indexOf('text/plain') === 0
                                        ? (s = yield m.text())
                                        : p.indexOf('application/json') === 0 &&
                                          (s = yield m.json());
                                } catch (y) {
                                    s = `${m.status} - ${m.statusText}`;
                                }
                            if (!m.ok) {
                                if (
                                    (m.status === 403 &&
                                        s &&
                                        ((z = s == null ? void 0 : s.cause) === null || z === void 0
                                            ? void 0
                                            : z.code) ===
                                            'authorizationError.origin.server.notFound' &&
                                        (s.message =
                                            'Failed to retrieve access token: access denied. This is due to an API key origin restriction. If minting a token from a backend for use in a browser, pass the browser-origin when calling retrieveAccessToken() e.g. NonLocalStorage.retrieveAccessToken("projectId", "apiKey", "apiSecret", { origin: req.headers.origin }).'),
                                    typeof s == 'string')
                                )
                                    throw new Error(s);
                                if (s) throw s;
                                if (m.status !== 404)
                                    throw new Error(`${m.status} - ${m.statusText}`);
                            }
                            return s;
                        }),
                    'Token retrieval',
                    Td('warn'),
                )
            );
        });
    }
    useAccessTokenAndRememberToAcquireTheNext(o) {
        if (!o) throw new Error('No accessToken!');
        const d = this.useAccessToken(o),
            f = Math.max(d - 12e4, 1e3);
        this.logger.log('debug', `Scheduling next token refresh in ${f}ms`),
            setTimeout(() => {
                (this.isGettingAccessToken = this.acquireAccessToken()),
                    this.isGettingAccessToken
                        .then(() => {
                            this.isGettingAccessToken = void 0;
                        })
                        .catch(() => {
                            this.isGettingAccessToken = void 0;
                        });
            }, f);
    }
    acquireAccessToken() {
        return et(this, void 0, void 0, function* () {
            try {
                let o;
                if (this.getAccessTokenFn) {
                    if (
                        (this.logger.log('debug', 'Acquiring access token via custom provider'),
                        (o = yield this.getAccessTokenFn()),
                        typeof o != 'string' || !o)
                    )
                        throw new Error('getAccessToken function must return a non-empty string');
                } else {
                    if (!this[ot].apiKey || !this[ot].apiSecret)
                        throw new Error('No authentication method available for token acquisition');
                    this.logger.log('debug', 'Acquiring access token via API key/secret'),
                        (o = yield El.retrieveAccessToken(
                            this[ot].projectId,
                            this[ot].apiKey,
                            this[ot].apiSecret,
                        ));
                }
                this.useAccessTokenAndRememberToAcquireTheNext(o);
            } catch (o) {
                throw (
                    (this.logger.log(
                        'error',
                        `Access token acquisition failed: ${(o == null ? void 0 : o.message) || (o == null ? void 0 : o.name) || (o == null ? void 0 : o.type) || o}`,
                    ),
                    o)
                );
            }
        });
    }
    useAccessToken(o) {
        if (typeof o != 'string' || !o) throw new Error('accessToken not valid!');
        const d = g0(o);
        this[ot].accessToken = o;
        const f = d.payload.exp - Date.now();
        if (f - 12e4 < 0) throw new Error('accessToken not valid anymore');
        return (
            setTimeout(
                () => {
                    this[Da].forEach((g) => g());
                },
                Math.max(f - 12e4, 0),
            ),
            f
        );
    }
    onAccessTokenExpiring(o) {
        this[Da].push(o);
    }
    offAccessTokenExpiring(o) {
        const d = this[Da].indexOf(o);
        d !== -1 && this[Da].splice(d, 1);
    }
    getEncryptionHandlerForKeyVersion(o) {
        return et(this, void 0, void 0, function* () {
            var d, f, g, T;
            if (
                o > -1 &&
                (o !== ((d = this[Kt]) === null || d === void 0 ? void 0 : d.keyVersion) &&
                    ((this[Vl] && this[Vl].length !== 0) || (yield this.getEncryptionSettings())),
                o !== ((f = this[Kt]) === null || f === void 0 ? void 0 : f.keyVersion))
            ) {
                if (!this[Vl] || this[Vl].length === 0)
                    throw new Error(
                        `Wrong keyVersion! Found ${o} but you're using ${(g = this[Kt]) === null || g === void 0 ? void 0 : g.keyVersion}`,
                    );
                let z = this[Vl].find((m) => m.keyVersion === o);
                if (
                    (z || (yield this.getEncryptionSettings()),
                    (z = (this[Vl] || []).find((m) => m.keyVersion === o)),
                    !z)
                )
                    throw new Error(
                        `Wrong keyVersion! Found ${o} but you're using ${(T = this[Kt]) === null || T === void 0 ? void 0 : T.keyVersion}`,
                    );
                return this.getEncryptionHandler ? this.getEncryptionHandler(z) : void 0;
            }
            return this.encryptionHandler;
        });
    }
    handleEncryptionSettings(o) {
        return et(this, void 0, void 0, function* () {
            if (!this.getEncryptionHandler) throw new Error('No getEncryptionHandler defined!');
            (this[Kt] = o.encryptionSettings),
                (this[Vl] = o.previousEncryptionSettings),
                (this.encryptionHandler = yield this.getEncryptionHandler(o.encryptionSettings));
        });
    }
    prepareEncryptionSettings(o) {
        var d, f, g;
        return {
            encryptionSettings: {
                salt: Uint8Array.from(
                    atob(
                        (d = o == null ? void 0 : o.encryptionSettings) === null || d === void 0
                            ? void 0
                            : d.salt,
                    ),
                    (T) => T.charCodeAt(0),
                ),
                keyVersion:
                    (f = o == null ? void 0 : o.encryptionSettings) === null || f === void 0
                        ? void 0
                        : f.keyVersion,
                createdAt:
                    (g = o == null ? void 0 : o.encryptionSettings) === null || g === void 0
                        ? void 0
                        : g.createdAt,
            },
            previousEncryptionSettings: (
                (o == null ? void 0 : o.previousEncryptionSettings) || []
            ).map((T) => ({
                salt: Uint8Array.from(atob(T == null ? void 0 : T.salt), (z) => z.charCodeAt(0)),
                keyVersion: T == null ? void 0 : T.keyVersion,
                createdAt: T == null ? void 0 : T.createdAt,
            })),
        };
    }
    getEncryptionSettings(o) {
        return et(this, void 0, void 0, function* () {
            if (!this.getEncryptionHandler)
                throw new Error(
                    'No passphrase and no getEncryptionHandler passed! This function is only allowed with e2e encryption!',
                );
            const d = yield this.request(
                    'POST',
                    `/cache-encryption/${this.class}/${this.id}`,
                    o && o > 0 ? { saltLength: o } : {},
                ),
                f = this.prepareEncryptionSettings(d);
            return yield this.handleEncryptionSettings(f), f;
        });
    }
    rotateEncryption(o) {
        return et(this, void 0, void 0, function* () {
            if (!this.getEncryptionHandler)
                throw new Error(
                    'No passphrase and no getEncryptionHandler passed! This function is only allowed with e2e encryption!',
                );
            const d = yield this.request(
                    'POST',
                    `/cache-encryption-rotate/${this.class}/${this.id}`,
                    o && o > 0 ? { saltLength: o } : {},
                ),
                f = this.prepareEncryptionSettings(d);
            return yield this.handleEncryptionSettings(f), f;
        });
    }
    request(o, d, f) {
        return et(this, void 0, void 0, function* () {
            !this[ot].accessToken && this.isGettingAccessToken && (yield this.isGettingAccessToken);
            try {
                yield this.throttleManager.throttleOperation();
            } catch (g) {
                throw (
                    (this.logger.log(
                        'error',
                        `Request throttled: ${g == null ? void 0 : g.message}`,
                    ),
                    g)
                );
            }
            return El.executeWithRetry(
                () =>
                    et(this, void 0, void 0, function* () {
                        var g;
                        const T =
                                this[ot].apiKey && this[ot].apiSecret
                                    ? `Basic ${btoa(`${this[ot].apiKey}:${this[ot].apiSecret}`)}`
                                    : void 0,
                            z = this[ot].accessToken ? `Bearer ${this[ot].accessToken}` : void 0;
                        let m = this[ot].accessToken ? z : T;
                        if ((d === '/auth/token' && (m = T), !m))
                            throw new Error(
                                'No authentication option provided! (apiKey + apiSecret or accessToken)',
                            );
                        const p = { Authorization: m },
                            s = typeof f == 'string',
                            y = (g = this[Kt]) === null || g === void 0 ? void 0 : g.keyVersion;
                        y !== void 0 && y > -1 && (p['X-Enc-KV'] = y.toString()),
                            this.idSignature &&
                                ((p['X-Id-Sig'] = this.idSignature),
                                this.idSignatureKeyVersion !== void 0 &&
                                    (p['X-Id-Sig-KV'] = this.idSignatureKeyVersion.toString())),
                            f && (p['Content-Type'] = s ? 'text/plain' : 'application/json');
                        const N = yield fetch(`${El.basePath}/project/${this[ot].projectId}${d}`, {
                                method: o,
                                headers: p,
                                body: f ? (s ? f : JSON.stringify(f)) : void 0,
                            }),
                            R = N.headers.get('content-type');
                        let w;
                        if (R)
                            try {
                                R.indexOf('text/plain') === 0
                                    ? (w = yield N.text())
                                    : R.indexOf('application/json') === 0 && (w = yield N.json());
                            } catch (K) {
                                w = `${N.status} - ${N.statusText}`;
                            }
                        if (!N.ok) {
                            if (typeof w == 'string') throw new Error(w);
                            if (w) throw w;
                            if (N.status !== 404) throw new Error(`${N.status} - ${N.statusText}`);
                        }
                        return w;
                    }),
                'API request',
                this.logger,
            );
        });
    }
}
(zd = Da), (El.basePath = 'https://api.vaultrice.app');
var xd;
let b0 = class Md extends El {
    constructor(o, d) {
        var f, g, T, z, m, p, s, y, N, R;
        super(o, d),
            (this[xd] = /* @__PURE__ */ new Map()),
            (this.reconnectAttempts = 0),
            (this.reconnectBaseDelay = 1e3),
            (this.reconnectMaxDelay = 6e4),
            (this.isConnected = !1),
            (this.pingInterval = 2e4),
            (this.pongTimeout = 1e4),
            (this.hasJoined = !1),
            (this[we] = []),
            (this[Me] = /* @__PURE__ */ new Map());
        const w = typeof d == 'object' ? d : {};
        (this.configuredAutoReconnect =
            (g = (f = w.connectionSettings) === null || f === void 0 ? void 0 : f.autoReconnect) ===
                null ||
            g === void 0 ||
            g),
            (this.autoReconnect = this.configuredAutoReconnect),
            (this.reconnectBaseDelay =
                (z =
                    (T = w.connectionSettings) === null || T === void 0
                        ? void 0
                        : T.reconnectBaseDelay) !== null && z !== void 0
                    ? z
                    : 1e3),
            (this.reconnectMaxDelay =
                (p =
                    (m = w.connectionSettings) === null || m === void 0
                        ? void 0
                        : m.reconnectMaxDelay) !== null && p !== void 0
                    ? p
                    : 3e4),
            (this.pingInterval =
                (y =
                    (s = w.connectionSettings) === null || s === void 0
                        ? void 0
                        : s.pingInterval) !== null && y !== void 0
                    ? y
                    : 2e4),
            (this.pongTimeout =
                (R =
                    (N = w.connectionSettings) === null || N === void 0
                        ? void 0
                        : N.pongTimeout) !== null && R !== void 0
                    ? R
                    : 1e4);
    }
    send(o) {
        return et(this, arguments, void 0, function* (d, f = { transport: 'ws' }) {
            var g, T, z;
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            const m = this.encryptionHandler
                ? yield this.encryptionHandler.encrypt(JSON.stringify(d))
                : d;
            if (f.transport === 'http') {
                try {
                    yield this.request('POST', `/message/${this.class}/${this.id}`, m);
                } catch (y) {
                    if (
                        !y ||
                        ((g = y == null ? void 0 : y.cause) === null || g === void 0
                            ? void 0
                            : g.name) !== 'ConflictError'
                    )
                        throw y;
                    this.logger.log(
                        'warn',
                        'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                    ),
                        yield this.getEncryptionSettings(),
                        yield this.request('POST', `/message/${this.class}/${this.id}`, m);
                }
                return;
            }
            const p = yield this.getWebSocket();
            try {
                yield this.throttleManager.throttleOperation();
            } catch (y) {
                throw (
                    (this.logger.log(
                        'error',
                        `WebSocket message throttled: ${y == null ? void 0 : y.message}`,
                    ),
                    y)
                );
            }
            const s = { event: 'message', payload: m };
            this[Kt] &&
                ((T = this[Kt]) === null || T === void 0 ? void 0 : T.keyVersion) > -1 &&
                (s.keyVersion = (z = this[Kt]) === null || z === void 0 ? void 0 : z.keyVersion),
                p.send(JSON.stringify(s));
        });
    }
    on(o, d, f) {
        this.getWebSocket(!1).then((g) => {
            this[Me].has(o) || this[Me].set(o, /* @__PURE__ */ new Set());
            const T = this[Me].get(o);
            if (o === 'error') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const m = d;
                this[we].push(m);
                const p = (s) => {
                    try {
                        const y =
                            (s == null ? void 0 : s.message) ||
                            (s == null ? void 0 : s.data) ||
                            (s == null ? void 0 : s.type) ||
                            (typeof s == 'string' ? s : 'WebSocket error occurred');
                        m(new Error(y));
                    } catch (y) {
                        m(new Error('WebSocket error occurred'));
                    }
                };
                g.addEventListener('error', p), T.add({ handler: m, wsListener: p });
            }
            if (o === 'connect') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const m = d,
                    p = () => m();
                g.addEventListener('open', p), T.add({ handler: m, wsListener: p });
            }
            if (o === 'disconnect') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const m = d,
                    p = () => m();
                g.addEventListener('close', p), T.add({ handler: m, wsListener: p });
            }
            const z = (m, p, s = !1) => {
                const y = s ? m.keyVersion : m.payload.keyVersion;
                if (y === void 0) return p(m.payload);
                if (y > -1) {
                    if (!this.getEncryptionHandler)
                        return this[we].forEach((R) =>
                            R(
                                new Error(
                                    'Encrypted data, but no passphrase or getEncryptionHandler configured!',
                                ),
                            ),
                        );
                    if (!this.encryptionHandler)
                        return this[we].forEach((R) =>
                            R(new Error('Encrypted data, but getEncryptionSettings() not called!')),
                        );
                    let N = m.payload.value;
                    s && (N = m.payload),
                        this.getEncryptionHandlerForKeyVersion(y)
                            .then((R) => (R == null ? void 0 : R.decrypt(N)))
                            .then((R) => {
                                s ? (m.payload = JSON.parse(R)) : (m.payload.value = JSON.parse(R)),
                                    p(m.payload);
                            })
                            .catch((R) => {
                                this[we].forEach((w) => w(R));
                            });
                }
            };
            if (o === 'message') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const m = d,
                    p = (s) => {
                        const y = JSON.parse(s.data);
                        y.event === 'message' && z(y, m, !0);
                    };
                g.addEventListener('message', p), T.add({ handler: m, wsListener: p });
            }
            if (o === 'presence:join') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const m = d,
                    p = (s) => {
                        const y = JSON.parse(s.data);
                        y.event === 'presence:join' &&
                            z(
                                y,
                                (N) => {
                                    m({
                                        connectionId: y == null ? void 0 : y.connectionId,
                                        joinedAt: y == null ? void 0 : y.joinedAt,
                                        data: N,
                                    });
                                },
                                !0,
                            );
                    };
                g.addEventListener('message', p), T.add({ handler: m, wsListener: p });
            }
            if (o === 'presence:leave') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const m = d,
                    p = (s) => {
                        const y = JSON.parse(s.data);
                        y.event === 'presence:leave' &&
                            z(
                                y,
                                (N) => {
                                    m({
                                        connectionId: y == null ? void 0 : y.connectionId,
                                        data: N,
                                    });
                                },
                                !0,
                            );
                    };
                g.addEventListener('message', p), T.add({ handler: m, wsListener: p });
            }
            if (o === 'setItem')
                if (f === void 0) {
                    if (typeof d != 'function') throw new Error('No event handler defined!');
                    const m = d,
                        p = (s) => {
                            const y = JSON.parse(s.data);
                            y.event === 'setItem' && z(y, m);
                        };
                    g.addEventListener('message', p), T.add({ handler: m, wsListener: p });
                } else {
                    if (typeof f != 'function') throw new Error('No event handler defined!');
                    const m = f,
                        p = d,
                        s = (y) => {
                            const N = JSON.parse(y.data);
                            N.event === 'setItem' && N.payload.prop === p && z(N, m);
                        };
                    g.addEventListener('message', s),
                        T.add({ handler: m, wsListener: s, itemName: p });
                }
            if (o === 'removeItem')
                if (f === void 0) {
                    if (typeof d != 'function') throw new Error('No event handler defined!');
                    const m = d,
                        p = (s) => {
                            const y = JSON.parse(s.data);
                            y.event === 'removeItem' && m(y.payload);
                        };
                    g.addEventListener('message', p), T.add({ handler: m, wsListener: p });
                } else {
                    if (typeof f != 'function') throw new Error('No event handler defined!');
                    const m = f,
                        p = d,
                        s = (y) => {
                            const N = JSON.parse(y.data);
                            N.event === 'removeItem' && N.payload.prop === p && m(N.payload);
                        };
                    g.addEventListener('message', s),
                        T.add({ handler: m, wsListener: s, itemName: p });
                }
        });
    }
    off(o, d, f) {
        const g = this[Me].get(o);
        if (g) {
            if (o === 'error') {
                if (typeof d != 'function') throw new Error('No event handler defined!');
                const T = d,
                    z = this[we].indexOf(T);
                z > -1 && this[we].splice(z, 1);
                for (const m of g)
                    if (m.handler === T) {
                        this[Xt] &&
                            m.wsListener &&
                            this[Xt].removeEventListener('error', m.wsListener),
                            g.delete(m);
                        break;
                    }
            } else {
                if (!this[Xt]) return;
                const T = this[Xt];
                let z, m;
                if (f === void 0) {
                    if (typeof d != 'function') throw new Error('No event handler defined!');
                    z = d;
                } else {
                    if (typeof f != 'function') throw new Error('No event handler defined!');
                    (z = f), (m = d);
                }
                for (const p of g) {
                    const s = p.handler === z,
                        y = m === void 0 || p.itemName === m;
                    if (s && y) {
                        if (p.wsListener) {
                            const N =
                                o === 'connect'
                                    ? 'open'
                                    : o === 'disconnect'
                                      ? 'close'
                                      : o === 'error'
                                        ? 'error'
                                        : 'message';
                            T.removeEventListener(N, p.wsListener);
                        }
                        g.delete(p);
                        break;
                    }
                }
            }
            g.size === 0 && this[Me].delete(o),
                this[Me].size === 0 && this[we].length === 0 && this.disconnect();
        }
    }
    connect() {
        return et(this, void 0, void 0, function* () {
            this[Xt] || (yield this.getWebSocket());
        });
    }
    disconnect() {
        return et(this, void 0, void 0, function* () {
            (this.autoReconnect = !1),
                this[Xt] &&
                    (this.hasJoined && (yield this.leave()),
                    this[Xt].close(),
                    delete this[Xt],
                    this[Me].clear(),
                    (this[we].length = 0));
        });
    }
    getWebSocket() {
        return et(this, arguments, void 0, function* (o = !0) {
            if (
                (!this[ot].accessToken &&
                    this.isGettingAccessToken &&
                    (yield this.isGettingAccessToken),
                this[Xt])
            )
                return this[Xt];
            this.autoReconnect = this.configuredAutoReconnect;
            const d = Md.basePath.replace('http', 'ws'),
                f =
                    this[ot].apiKey && this[ot].apiSecret
                        ? `Basic ${btoa(`${this[ot].apiKey}:${this[ot].apiSecret}`)}`
                        : void 0,
                g = this[ot].accessToken ? `Bearer ${this[ot].accessToken}` : void 0,
                T = { auth: this[ot].accessToken ? g : f };
            this.idSignature &&
                ((T.idSignature = this.idSignature),
                this.idSignatureKeyVersion !== void 0 &&
                    (T.idSignatureKeyVersion = this.idSignatureKeyVersion));
            const z = new URLSearchParams(T),
                m = (this[Xt] = new WebSocket(
                    `${d}/project/${this[ot].projectId}/ws/${this.class}/${this.id}?${z}`,
                ));
            this.logger.log('info', 'initializing WebSocket connection...');
            let p;
            m.addEventListener('message', (y) => {
                let N;
                try {
                    N = typeof y.data == 'string' ? JSON.parse(y.data) : void 0;
                } catch (w) {
                    N = void 0;
                }
                if (!N || typeof N != 'object') return;
                const R = N.event;
                if (R) {
                    if (R !== 'pong') {
                        if ((R !== 'connected' && R !== 'resume:ack') || !N.connectionId) {
                            if (R === 'error') {
                                const w = N.payload;
                                if (
                                    typeof w == 'string' &&
                                    w.toLowerCase().includes('invalid resume') &&
                                    (this.logger.log(
                                        'warn',
                                        'server signalled invalid resume token — clearing saved connectionId',
                                    ),
                                    (this.connectionId = void 0),
                                    typeof y.stopImmediatePropagation == 'function')
                                )
                                    try {
                                        y.stopImmediatePropagation();
                                    } catch (K) {}
                            }
                        } else if (
                            ((this.connectionId = N.connectionId),
                            typeof y.stopImmediatePropagation == 'function')
                        )
                            try {
                                y.stopImmediatePropagation();
                            } catch (w) {}
                    } else if (
                        (this.logger.log('debug', 'received pong'),
                        this.clearPongTimer(),
                        typeof y.stopImmediatePropagation == 'function')
                    )
                        try {
                            y.stopImmediatePropagation();
                        } catch (w) {}
                }
            });
            const s = new Promise((y) => {
                p = y;
            });
            return (
                m.addEventListener(
                    'open',
                    () => {
                        if (
                            ((this.isConnected = !0),
                            (this.reconnectAttempts = 0),
                            this.connectionId)
                        )
                            try {
                                m.send(
                                    JSON.stringify({
                                        event: 'resume',
                                        connectionId: this.connectionId,
                                    }),
                                );
                            } catch (y) {}
                        this.startHeartbeat(), typeof p == 'function' && p(m);
                    },
                    { once: !0 },
                ),
                m.addEventListener(
                    'close',
                    (y) => {
                        (this.isConnected = !1), this.stopHeartbeat();
                    },
                    { once: !0 },
                ),
                m.addEventListener('close', (y) => {
                    (y == null ? void 0 : y.code) === 1008 &&
                        (this.logger.log('warn', 'WebSocket closed with 1008 during reconnection'),
                        (this.connectionId = void 0)),
                        y != null &&
                            y.reason &&
                            (y == null ? void 0 : y.reason.indexOf('TierLimitExceeded')) > -1 &&
                            ((this.autoReconnect = !1),
                            this.logger.log('error', y.reason),
                            this[we].forEach((w) => w(new Error(y.reason)))),
                        delete this[Xt];
                    const N = this.hasJoined,
                        R = this.lastJoinData;
                    if ((this.hasJoined && (this.hasJoined = !1), this.autoReconnect)) {
                        const w = () =>
                            et(this, void 0, void 0, function* () {
                                const K = Math.min(
                                    this.reconnectBaseDelay * Math.pow(2, this.reconnectAttempts),
                                    this.reconnectMaxDelay,
                                );
                                setTimeout(
                                    () =>
                                        et(this, void 0, void 0, function* () {
                                            let k;
                                            this.reconnectAttempts++,
                                                this.logger.log(
                                                    'warn',
                                                    `${this.reconnectAttempts}. reconnection attempt...`,
                                                );
                                            try {
                                                delete this[Xt], (k = yield this.getWebSocket(!1));
                                            } catch (q) {
                                                return (
                                                    this.logger.log(
                                                        'error',
                                                        (q == null ? void 0 : q.message) ||
                                                            (q == null ? void 0 : q.name) ||
                                                            (q == null ? void 0 : q.type) ||
                                                            q,
                                                    ),
                                                    void w()
                                                );
                                            }
                                            const W = () =>
                                                    et(this, void 0, void 0, function* () {
                                                        if (
                                                            ((this.reconnectAttempts = 0),
                                                            !this[Xt])
                                                        )
                                                            return;
                                                        const q = this[Xt];
                                                        for (const [vt, qt] of this[Me])
                                                            for (const Ot of qt) {
                                                                let zt;
                                                                vt === 'connect'
                                                                    ? ((zt = () => Ot.handler()),
                                                                      q.addEventListener(
                                                                          'open',
                                                                          zt,
                                                                      ))
                                                                    : vt === 'disconnect'
                                                                      ? ((zt = () => Ot.handler()),
                                                                        q.addEventListener(
                                                                            'close',
                                                                            zt,
                                                                        ))
                                                                      : vt === 'error'
                                                                        ? ((zt = (ft) => {
                                                                              try {
                                                                                  const V =
                                                                                      (ft == null
                                                                                          ? void 0
                                                                                          : ft.message) ||
                                                                                      (ft == null
                                                                                          ? void 0
                                                                                          : ft.data) ||
                                                                                      (ft == null
                                                                                          ? void 0
                                                                                          : ft.type) ||
                                                                                      (typeof ft ==
                                                                                      'string'
                                                                                          ? ft
                                                                                          : 'WebSocket error occurred');
                                                                                  Ot.handler(
                                                                                      new Error(V),
                                                                                  );
                                                                              } catch (V) {
                                                                                  Ot.handler(
                                                                                      new Error(
                                                                                          'WebSocket error occurred',
                                                                                      ),
                                                                                  );
                                                                              }
                                                                          }),
                                                                          q.addEventListener(
                                                                              'error',
                                                                              zt,
                                                                          ))
                                                                        : vt === 'message'
                                                                          ? ((zt = (ft) => {
                                                                                let V;
                                                                                try {
                                                                                    V =
                                                                                        typeof ft.data ==
                                                                                        'string'
                                                                                            ? JSON.parse(
                                                                                                  ft.data,
                                                                                              )
                                                                                            : void 0;
                                                                                } catch (ve) {
                                                                                    V = void 0;
                                                                                }
                                                                                V &&
                                                                                    V.event ===
                                                                                        'message' &&
                                                                                    Ot.handler(
                                                                                        V.payload,
                                                                                    );
                                                                            }),
                                                                            q.addEventListener(
                                                                                'message',
                                                                                zt,
                                                                            ))
                                                                          : vt === 'presence:join'
                                                                            ? ((zt = (ft) => {
                                                                                  let V;
                                                                                  try {
                                                                                      V =
                                                                                          typeof ft.data ==
                                                                                          'string'
                                                                                              ? JSON.parse(
                                                                                                    ft.data,
                                                                                                )
                                                                                              : void 0;
                                                                                  } catch (ve) {
                                                                                      V = void 0;
                                                                                  }
                                                                                  V &&
                                                                                      V.event ===
                                                                                          'presence:join' &&
                                                                                      Ot.handler(
                                                                                          V.payload,
                                                                                      );
                                                                              }),
                                                                              q.addEventListener(
                                                                                  'message',
                                                                                  zt,
                                                                              ))
                                                                            : vt ===
                                                                                'presence:leave'
                                                                              ? ((zt = (ft) => {
                                                                                    let V;
                                                                                    try {
                                                                                        V =
                                                                                            typeof ft.data ==
                                                                                            'string'
                                                                                                ? JSON.parse(
                                                                                                      ft.data,
                                                                                                  )
                                                                                                : void 0;
                                                                                    } catch (ve) {
                                                                                        V = void 0;
                                                                                    }
                                                                                    V &&
                                                                                        V.event ===
                                                                                            'presence:leave' &&
                                                                                        Ot.handler(
                                                                                            V.payload,
                                                                                        );
                                                                                }),
                                                                                q.addEventListener(
                                                                                    'message',
                                                                                    zt,
                                                                                ))
                                                                              : vt === 'setItem'
                                                                                ? ((zt = (ft) => {
                                                                                      let V;
                                                                                      try {
                                                                                          V =
                                                                                              typeof ft.data ==
                                                                                              'string'
                                                                                                  ? JSON.parse(
                                                                                                        ft.data,
                                                                                                    )
                                                                                                  : void 0;
                                                                                      } catch (ve) {
                                                                                          V =
                                                                                              void 0;
                                                                                      }
                                                                                      V &&
                                                                                          V.event ===
                                                                                              'setItem' &&
                                                                                          ((Ot.itemName &&
                                                                                              V
                                                                                                  .payload
                                                                                                  .prop !==
                                                                                                  Ot.itemName) ||
                                                                                              Ot.handler(
                                                                                                  V.payload,
                                                                                              ));
                                                                                  }),
                                                                                  q.addEventListener(
                                                                                      'message',
                                                                                      zt,
                                                                                  ))
                                                                                : vt ===
                                                                                      'removeItem' &&
                                                                                  ((zt = (ft) => {
                                                                                      let V;
                                                                                      try {
                                                                                          V =
                                                                                              typeof ft.data ==
                                                                                              'string'
                                                                                                  ? JSON.parse(
                                                                                                        ft.data,
                                                                                                    )
                                                                                                  : void 0;
                                                                                      } catch (ve) {
                                                                                          V =
                                                                                              void 0;
                                                                                      }
                                                                                      V &&
                                                                                          V.event ===
                                                                                              'removeItem' &&
                                                                                          ((Ot.itemName &&
                                                                                              V
                                                                                                  .payload
                                                                                                  .prop !==
                                                                                                  Ot.itemName) ||
                                                                                              Ot.handler(
                                                                                                  V.payload,
                                                                                              ));
                                                                                  }),
                                                                                  q.addEventListener(
                                                                                      'message',
                                                                                      zt,
                                                                                  )),
                                                                    zt && (Ot.wsListener = zt);
                                                            }
                                                        const bt = this[Me].get('connect');
                                                        if (bt)
                                                            for (const vt of bt)
                                                                try {
                                                                    vt.handler();
                                                                } catch (qt) {
                                                                    this.logger.log('error', qt);
                                                                }
                                                        N && R && (yield this.join(R));
                                                    }),
                                                ct = () => {
                                                    k == null || k.removeEventListener('open', lt),
                                                        k == null ||
                                                            k.removeEventListener('close', dt),
                                                        k == null ||
                                                            k.removeEventListener('error', I);
                                                },
                                                lt = () =>
                                                    et(this, void 0, void 0, function* () {
                                                        yield W(), ct();
                                                    }),
                                                dt = () => {
                                                    ct(), w();
                                                },
                                                I = (q) => {
                                                    this.logger.log(
                                                        'error',
                                                        (q == null ? void 0 : q.message) ||
                                                            (q == null ? void 0 : q.name) ||
                                                            (q == null ? void 0 : q.type) ||
                                                            q,
                                                    ),
                                                        ct(),
                                                        w();
                                                };
                                            k.addEventListener('open', lt, { once: !0 }),
                                                k.addEventListener('close', dt, { once: !0 }),
                                                k.addEventListener('error', I, { once: !0 }),
                                                k.readyState !== WebSocket.CLOSING &&
                                                k.readyState !== WebSocket.CLOSED
                                                    ? k.readyState === WebSocket.OPEN &&
                                                      (yield W(), ct())
                                                    : w();
                                        }),
                                    K,
                                );
                            });
                        w();
                    }
                }),
                o ? s : m
            );
        });
    }
    clearPongTimer() {
        this.pongTimer && (clearTimeout(this.pongTimer), (this.pongTimer = void 0));
    }
    startPongTimer() {
        this.clearPongTimer(),
            (this.pongTimer = setTimeout(() => {
                var o;
                this.logger.log('warn', 'pong timeout — closing socket to reconnect');
                try {
                    (o = this[Xt]) === null || o === void 0 || o.close(1006, 'pong timeout');
                } catch (d) {}
            }, this.pongTimeout));
    }
    stopHeartbeat() {
        this.pingTimer && (clearInterval(this.pingTimer), (this.pingTimer = void 0)),
            this.clearPongTimer();
    }
    startHeartbeat() {
        this.stopHeartbeat();
        const o = this[Xt];
        if (o && o.readyState === WebSocket.OPEN)
            try {
                o.send(JSON.stringify({ event: 'ping' })), this.startPongTimer();
            } catch (d) {}
        this.pingTimer = setInterval(() => {
            const d = this[Xt];
            if (d && d.readyState === WebSocket.OPEN)
                try {
                    d.send(JSON.stringify({ event: 'ping' })), this.startPongTimer();
                } catch (f) {}
        }, this.pingInterval);
    }
    join(o) {
        return et(this, void 0, void 0, function* () {
            var d, f;
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            try {
                yield this.throttleManager.throttleOperation();
            } catch (m) {
                throw (
                    (this.logger.log(
                        'error',
                        `Request throttled: ${m == null ? void 0 : m.message}`,
                    ),
                    m)
                );
            }
            (this.hasJoined = !0), (this.lastJoinData = o);
            const g = this.encryptionHandler
                    ? yield this.encryptionHandler.encrypt(JSON.stringify(o))
                    : o,
                T = yield this.getWebSocket(),
                z = { event: 'presence:join', payload: g };
            this[Kt] &&
                ((d = this[Kt]) === null || d === void 0 ? void 0 : d.keyVersion) > -1 &&
                (z.keyVersion = (f = this[Kt]) === null || f === void 0 ? void 0 : f.keyVersion),
                T.send(JSON.stringify(z));
        });
    }
    leave() {
        return et(this, void 0, void 0, function* () {
            var o, d;
            if (!this.hasJoined) return;
            try {
                yield this.throttleManager.throttleOperation();
            } catch (T) {
                throw (
                    (this.logger.log(
                        'error',
                        `Request throttled: ${T == null ? void 0 : T.message}`,
                    ),
                    T)
                );
            }
            this.hasJoined = !1;
            const f = yield this.getWebSocket(),
                g = { event: 'presence:leave' };
            this[Kt] &&
                ((o = this[Kt]) === null || o === void 0 ? void 0 : o.keyVersion) > -1 &&
                (g.keyVersion = (d = this[Kt]) === null || d === void 0 ? void 0 : d.keyVersion),
                f.send(JSON.stringify(g));
        });
    }
    getJoinedConnections() {
        return et(this, void 0, void 0, function* () {
            var o;
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            let d;
            try {
                d = yield this.request('GET', `/presence-list/${this.class}/${this.id}`);
            } catch (g) {
                if (
                    !g ||
                    ((o = g == null ? void 0 : g.cause) === null || o === void 0
                        ? void 0
                        : o.name) !== 'ConflictError'
                )
                    throw g;
                this.logger.log(
                    'warn',
                    'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                ),
                    yield this.getEncryptionSettings(),
                    (d = yield this.request('GET', `/presence-list/${this.class}/${this.id}`));
            }
            const f = d;
            return Promise.all(
                (f == null
                    ? void 0
                    : f.map((g) =>
                          et(this, void 0, void 0, function* () {
                              const T = yield this.getEncryptionHandlerForKeyVersion(g.keyVersion),
                                  z = T ? JSON.parse(yield T.decrypt(g.data)) : g.data;
                              return {
                                  connectionId: g.connectionId,
                                  joinedAt: g.joinedAt,
                                  data: z,
                              };
                          }),
                      )) || [],
            );
        });
    }
};
xd = Me;
class E0 extends b0 {
    constructor(o, d) {
        typeof d == 'string'
            ? super(o, d)
            : (super(o, d), d != null && d.ttl && (this.ttl = d == null ? void 0 : d.ttl));
    }
    setItem(o, d, f) {
        return et(this, void 0, void 0, function* () {
            var g, T;
            if (!o) throw new Error('No name passed!');
            if (!d && d !== 0 && d !== '' && d !== !1) throw new Error('No value passed!');
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            const z = (f == null ? void 0 : f.ttl) || this.ttl,
                m = this.encryptionHandler
                    ? yield this.encryptionHandler.encrypt(JSON.stringify(d))
                    : d;
            let p;
            try {
                p = yield this.request('POST', `/cache/${this.class}/${this.id}/${o}`, {
                    value: m,
                    ttl: z,
                    ifAbsent: f == null ? void 0 : f.ifAbsent,
                });
            } catch (y) {
                if (
                    !y ||
                    ((g = y == null ? void 0 : y.cause) === null || g === void 0
                        ? void 0
                        : g.name) !== 'ConflictError'
                )
                    throw y;
                this.logger.log(
                    'warn',
                    'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                ),
                    yield this.getEncryptionSettings(),
                    (p = yield this.request('POST', `/cache/${this.class}/${this.id}/${o}`, {
                        value: m,
                        ttl: z,
                        ifAbsent: f == null ? void 0 : f.ifAbsent,
                    }));
            }
            const s = p;
            return (
                s && {
                    value: s == null ? void 0 : s.value,
                    expiresAt: s == null ? void 0 : s.expiresAt,
                    keyVersion:
                        (T = s == null ? void 0 : s.keyVersion) !== null && T !== void 0
                            ? T
                            : void 0,
                    createdAt: s == null ? void 0 : s.createdAt,
                    updatedAt: s == null ? void 0 : s.updatedAt,
                }
            );
        });
    }
    setItems(o) {
        return et(this, void 0, void 0, function* () {
            var d, f;
            if (!o || Object.keys(o).length === 0) throw new Error('No items passed!');
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            for (const z of Object.keys(o)) {
                const m = this.encryptionHandler
                    ? yield this.encryptionHandler.encrypt(JSON.stringify(o[z].value))
                    : o[z].value;
                (o[z].value = m), (f = o[z]).ttl || (f.ttl = this.ttl);
            }
            let g;
            try {
                g = yield this.request('POST', `/cache/${this.class}/${this.id}`, o);
            } catch (z) {
                if (
                    !z ||
                    ((d = z == null ? void 0 : z.cause) === null || d === void 0
                        ? void 0
                        : d.name) !== 'ConflictError'
                )
                    throw z;
                this.logger.log(
                    'warn',
                    'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                ),
                    yield this.getEncryptionSettings(),
                    (g = yield this.request('POST', `/cache/${this.class}/${this.id}`, o));
            }
            const T = g;
            return Object.keys(T).reduce((z, m) => {
                var p, s, y, N, R, w, K, k, W, ct;
                return (
                    (z[m] = {
                        value:
                            (s = (p = T[m]) === null || p === void 0 ? void 0 : p.value) !== null &&
                            s !== void 0
                                ? s
                                : null,
                        expiresAt:
                            (N = (y = T[m]) === null || y === void 0 ? void 0 : y.expiresAt) !==
                                null && N !== void 0
                                ? N
                                : 0,
                        keyVersion:
                            (w = (R = T[m]) === null || R === void 0 ? void 0 : R.keyVersion) !==
                                null && w !== void 0
                                ? w
                                : void 0,
                        createdAt:
                            (k = (K = T[m]) === null || K === void 0 ? void 0 : K.createdAt) !==
                                null && k !== void 0
                                ? k
                                : 0,
                        updatedAt:
                            (ct = (W = T[m]) === null || W === void 0 ? void 0 : W.updatedAt) !==
                                null && ct !== void 0
                                ? ct
                                : 0,
                    }),
                    z
                );
            }, {});
        });
    }
    getItem(o) {
        return et(this, void 0, void 0, function* () {
            var d, f;
            if (!o) throw new Error('No name passed!');
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            let g;
            try {
                g = yield this.request('GET', `/cache/${this.class}/${this.id}/${o}`);
            } catch (s) {
                if (
                    !s ||
                    ((d = s == null ? void 0 : s.cause) === null || d === void 0
                        ? void 0
                        : d.name) !== 'ConflictError'
                )
                    throw s;
                this.logger.log(
                    'warn',
                    'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                ),
                    yield this.getEncryptionSettings(),
                    (g = yield this.request('GET', `/cache/${this.class}/${this.id}/${o}`));
            }
            const T = g,
                z = T == null ? void 0 : T.value;
            if (!z) return;
            const m = yield this.getEncryptionHandlerForKeyVersion(T.keyVersion),
                p = m ? JSON.parse(yield m.decrypt(z)) : z;
            return (
                (T == null ? void 0 : T.keyVersion) > -1 &&
                    T.keyVersion !==
                        ((f = this[Kt]) === null || f === void 0 ? void 0 : f.keyVersion) &&
                    (this.autoUpdateOldEncryptedValues
                        ? (this.logger.log(
                              'info',
                              `Item "${o}" has an old encryption and will be automatically updated now by setting it again.`,
                          ),
                          yield this.setItem(o, p, { ttl: T.expiresAt - Date.now() }))
                        : this.logger.log(
                              'warn',
                              `Item "${o}" has an old encryption and can be updated by setting it again.`,
                          )),
                {
                    value: p,
                    expiresAt: T.expiresAt,
                    keyVersion: T.keyVersion,
                    createdAt: T.createdAt,
                    updatedAt: T.updatedAt,
                }
            );
        });
    }
    getItems(o) {
        return et(this, void 0, void 0, function* () {
            var d, f;
            if (!o || o.length === 0) throw new Error('No names passed!');
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            let g;
            try {
                g = yield this.request('POST', `/cache-query/${this.class}/${this.id}`, o);
            } catch (s) {
                if (
                    !s ||
                    ((d = s == null ? void 0 : s.cause) === null || d === void 0
                        ? void 0
                        : d.name) !== 'ConflictError'
                )
                    throw s;
                this.logger.log(
                    'warn',
                    'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                ),
                    yield this.getEncryptionSettings(),
                    (g = yield this.request('POST', `/cache-query/${this.class}/${this.id}`, o));
            }
            const T = g;
            if (Object.keys(T).length === 0) return;
            const z = {},
                m = {};
            for (const s of Object.keys(T)) {
                const y = T[s],
                    N = y == null ? void 0 : y.value;
                if (!N) continue;
                const R = yield this.getEncryptionHandlerForKeyVersion(y.keyVersion),
                    w = R ? JSON.parse(yield R.decrypt(N)) : N;
                (y == null ? void 0 : y.keyVersion) > -1 &&
                    y.keyVersion !==
                        ((f = this[Kt]) === null || f === void 0 ? void 0 : f.keyVersion) &&
                    (z[s] = y),
                    (m[s] = {
                        value: w,
                        expiresAt: y.expiresAt,
                        keyVersion: y.keyVersion,
                        createdAt: y.createdAt,
                        updatedAt: y.updatedAt,
                    });
            }
            const p = Object.keys(z);
            if (p.length > 0)
                if (this.autoUpdateOldEncryptedValues) {
                    this.logger.log(
                        'info',
                        `These items "${p.join(',')}" have an old encryption and will be automatically updated now by setting them again.`,
                    );
                    const s = p.reduce(
                        (y, N) => (
                            (y[N] = { value: m[N].value, ttl: z[N].expiresAt - Date.now() }), y
                        ),
                        {},
                    );
                    yield this.setItems(s);
                } else
                    this.logger.log(
                        'warn',
                        `These items "${p.join(',')}" have an old encryption and can be updated by setting them again.`,
                    );
            return m;
        });
    }
    getAllItems(o) {
        return et(this, void 0, void 0, function* () {
            var d, f;
            if (this.getEncryptionHandler && !this.encryptionHandler)
                throw new Error('Call getEncryptionSettings() first!');
            let g;
            try {
                g = yield this.request(
                    'GET',
                    `/cache/${this.class}/${this.id}${o != null && o.prefix ? `?prefix=${o == null ? void 0 : o.prefix}` : ''}`,
                );
            } catch (m) {
                if (
                    !m ||
                    ((d = m == null ? void 0 : m.cause) === null || d === void 0
                        ? void 0
                        : d.name) !== 'ConflictError'
                )
                    throw m;
                this.logger.log(
                    'warn',
                    'Your local keyVersion does not match! Will attempt to fetch the new encryption settings...',
                ),
                    yield this.getEncryptionSettings(),
                    (g = yield this.request(
                        'GET',
                        `/cache/${this.class}/${this.id}${o != null && o.prefix ? `?prefix=${o == null ? void 0 : o.prefix}` : ''}`,
                    ));
            }
            const T = g;
            if (Object.keys(T).length === 0) return;
            const z = {};
            for (const m of Object.keys(T)) {
                const p = T[m],
                    s = p == null ? void 0 : p.value;
                if (!s) continue;
                const y = yield this.getEncryptionHandlerForKeyVersion(p.keyVersion),
                    N = y ? JSON.parse(yield y.decrypt(s)) : s;
                z[m] = {
                    value: N,
                    expiresAt: p.expiresAt,
                    keyVersion: (f = p.keyVersion) !== null && f !== void 0 ? f : void 0,
                    createdAt: p.createdAt,
                    updatedAt: p.updatedAt,
                };
            }
            return z;
        });
    }
    getAllKeys(o) {
        return et(this, void 0, void 0, function* () {
            return yield this.request(
                'GET',
                `/cache-keys/${this.class}/${this.id}${o != null && o.prefix ? `?prefix=${o == null ? void 0 : o.prefix}` : ''}`,
            );
        });
    }
    removeItem(o) {
        return et(this, void 0, void 0, function* () {
            if (!o) throw new Error('No name passed!');
            yield this.request('DELETE', `/cache/${this.class}/${this.id}/${o}`);
        });
    }
    removeItems(o) {
        return et(this, void 0, void 0, function* () {
            if (!o || o.length === 0) throw new Error('No names passed!');
            yield this.request('DELETE', `/cache/${this.class}/${this.id}`, o);
        });
    }
    incrementItem(o) {
        return et(this, arguments, void 0, function* (d, f = 1, g) {
            var T;
            if (!d) throw new Error('No name passed!');
            if (f == null) throw new Error('No value passed!');
            if (typeof f != 'number') throw new Error('Value needs to be a number!');
            const z = (g == null ? void 0 : g.ttl) || this.ttl,
                m = yield this.request('POST', `/cache/${this.class}/${this.id}/${d}/increment`, {
                    value: f,
                    ttl: z,
                });
            return {
                value: m == null ? void 0 : m.value,
                expiresAt: m == null ? void 0 : m.expiresAt,
                keyVersion:
                    (T = m == null ? void 0 : m.keyVersion) !== null && T !== void 0 ? T : void 0,
                createdAt: m == null ? void 0 : m.createdAt,
                updatedAt: m == null ? void 0 : m.updatedAt,
            };
        });
    }
    decrementItem(o) {
        return et(this, arguments, void 0, function* (d, f = 1, g) {
            var T;
            if (!d) throw new Error('No name passed!');
            if (f == null) throw new Error('No value passed!');
            if (typeof f != 'number') throw new Error('Value needs to be a number!');
            const z = (g == null ? void 0 : g.ttl) || this.ttl,
                m = yield this.request('POST', `/cache/${this.class}/${this.id}/${d}/decrement`, {
                    value: f,
                    ttl: z,
                });
            return {
                value: m == null ? void 0 : m.value,
                expiresAt: m == null ? void 0 : m.expiresAt,
                keyVersion:
                    (T = m == null ? void 0 : m.keyVersion) !== null && T !== void 0 ? T : void 0,
                createdAt: m == null ? void 0 : m.createdAt,
                updatedAt: m == null ? void 0 : m.updatedAt,
            };
        });
    }
    clear() {
        return et(this, void 0, void 0, function* () {
            yield this.request('DELETE', `/cache/${this.class}/${this.id}`);
        });
    }
}
const vf = {};
function T0(x, o) {
    return `${`${o.projectId}-${o.apiKey}`}-${`${x.class || '_undefined_'}-${x.id}`}`;
}
const yf = (x, o) => {
    const d = o || o0(),
        f = T0(x, d);
    if (vf[f]) return vf[f];
    const g = new E0(d, x);
    return (vf[f] = g), g;
};
function A0(x, o, d) {
    var N;
    const [f, g] = ne.useState(),
        [T, z] = ne.useState(),
        [m, p] = ne.useState(!0),
        s = yf(
            { ...(d == null ? void 0 : d.instanceOptions), id: x },
            d == null ? void 0 : d.credentials,
        ),
        y = (N = d == null ? void 0 : d.bind) != null ? N : !0;
    if (
        (ne.useEffect(() => {
            if (!s) return;
            p(!0);
            try {
                (async function (w, K, k) {
                    let W;
                    typeof K == 'string'
                        ? ((W = await w.getItem(K)), k && k({ [`${K}`]: W }))
                        : ((W = await w.getItems(K)), k && k(W));
                })(s, o, (w) => {
                    g(w), p(!1);
                });
            } catch (w) {
                z(w), p(!1);
            }
            const R = {};
            return (
                y &&
                    (Array.isArray(o) ? o : [o]).forEach((w) => {
                        const K = /* @__PURE__ */ ((k) =>
                            function (W) {
                                g((ct) => ({ ...ct, [`${k}`]: W }));
                            })(w);
                        (R[w] = K), s.on('setItem', w, K);
                    }),
                () => {
                    y &&
                        Object.keys(R).forEach((w) => {
                            s.off('setItem', w, R[w]);
                        });
                }
            );
        }, [o]),
        typeof o == 'string')
    ) {
        const R = async () => {
                p(!0);
                try {
                    const K = await s.getItem(o);
                    return p(!1), K;
                } catch (K) {
                    z(K), p(!1);
                }
            },
            w = (K) => {
                K && g((k) => ({ ...k, [`${o}`]: K }));
            };
        return [s, f ? f[o] : void 0, w, R, T, z, m];
    }
    return [
        s,
        f,
        g,
        async () => {
            p(!0);
            try {
                const R = await s.getItems(o);
                return p(!1), R;
            } catch (R) {
                z(R), p(!1);
            }
        },
        T,
        z,
        m,
    ];
}
const O0 = (x, o, d) => {
    const [f, g, T, , z, m, p] = A0(x, o, d);
    return [
        g,
        async (s) => {
            try {
                const y = await f.setItems(s);
                T({ ...g, ...y });
            } catch (y) {
                m(y);
            }
        },
        z,
        p,
    ];
};
function Lu(x, o) {
    o === void 0 && (o = {});
    var d = o.insertAt;
    if (x && typeof document != 'undefined') {
        var f = document.head || document.getElementsByTagName('head')[0],
            g = document.createElement('style');
        (g.type = 'text/css'),
            d === 'top' && f.firstChild ? f.insertBefore(g, f.firstChild) : f.appendChild(g),
            g.styleSheet ? (g.styleSheet.cssText = x) : g.appendChild(document.createTextNode(x));
    }
}
var z0 = `.vaultrice-card {
  display: block;

  position: relative;
  font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;

  border-radius: 20px;
  overflow: hidden;
  padding: 20px;

  backdrop-filter: blur(4px);
  background: linear-gradient(125deg, rgba(103, 167, 193, 0.25) -22%, rgba(14, 114, 148, 0.25) 45%, rgba(176, 68, 197, 0.25) 125%);
  box-shadow: inset 1px 1px 1px rgba(255,255,255, 0.3), 
            inset -1px -1px 1px rgba(0, 0, 0, 0.3),
            0 1px 10px 2px  rgba(0, 0, 0, 0.6);
}


`;
Lu(z0);
function x0({ style: x, children: o }) {
    return it.jsx('div', { className: 'vaultrice-card', style: x, children: o });
}
var M0 = `.vaultrice-meter-container {
  display: block;
  position: relative;
  width: 100%;
}

.vaultrice-meter-control {
  position: relative;
  /* --bg-color: rgba(255, 255, 255, 0.25);
  --highlight: rgba(255, 255, 255, 0.75);
  --text: #ffffff; */
  --track-width: 100%;
  --track-height: 18px;
  --thumb-size: 16px;
  
  display: flex;
  align-items: center;

  border-radius: 16px;
}

/* Toggle Track */
.vaultrice-meter-track {
  position: relative;
  max-width: var(--track-width);
  height: var(--track-height);
  border-radius: 16px;
  overflow: hidden;
  
  transition: width 1s ease;

  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 8px 25px rgba(55, 0, 255, 0.05);
}

/* Toggle Thumb */
.vaultrice-meter-state {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 4;
  top: 1px;
  left: 1px;
  min-width: var(--thumb-size);
  max-width: calc(100% - 2px);
  height: var(--thumb-size);
  border-radius: 14px;
  transition: width 1s ease;
  overflow: hidden;

  background-color: rgba(255, 255, 255, 0.8);
}

.vaultrice-meter-control-error .vaultrice-meter-track {
  border-radius: 16px 0 0 16px;
}
`;
Lu(M0);
function D0({ percentage: x = 0, style: o }) {
    const [d, f] = ne.useState(0);
    return (
        ne.useEffect(() => {
            setTimeout(() => {
                f(x);
            }, 1300);
        }, [x]),
        it.jsx('div', {
            className: 'vaultrice-meter-container',
            style: o,
            children: it.jsxs('div', {
                className:
                    'vaultrice-meter-control ' +
                    (d > 100
                        ? 'vaultrice-meter-control-error'
                        : d > 90
                          ? 'vaultrice-meter-control-warning'
                          : ''),
                children: [
                    it.jsx('div', {
                        className: 'vaultrice-meter-track',
                        style: { width: d < 100 ? '100%' : 100 / (d / 100) + '%' },
                    }),
                    it.jsx('div', {
                        className: 'vaultrice-meter-state',
                        style: {
                            width: `${d}%`,
                            borderRadius: d >= 100 ? '14px' : '14px 0 0 14px',
                            opacity: d === 0 ? 0 : 1,
                        },
                    }),
                ],
            }),
        })
    );
}
var _0 = `.vaultrice-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15));
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px; /* Slightly more rounded like marketing site */
  color: #000;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); /* Softer shadow */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease, transform 0.1s ease;
}

.vaultrice-button:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(55, 0, 255, 0.05));
  border-color: rgba(164, 150, 212, 0.532);
  box-shadow: 0 8px 25px rgba(55, 0, 255, 0.05);
  transform: translateY(-2px);
}

.vaultrice-button:disabled {
  cursor: not-allowed;
  color: #ccc;
  background: rgba(255,255,255, 0.025);
  box-shadow: none;
}

.vaultrice-button:disabled:hover {
  background: rgba(255,255,255, 0.025);
  box-shadow: none;
}`;
Lu(_0);
function N0({ onClick: x, disabled: o, style: d, children: f }) {
    return it.jsx('button', {
        className: 'vaultrice-button',
        style: d,
        type: 'button',
        disabled: o,
        onClick: x,
        children: f,
    });
}
var U0 = `.vaultrice-voting-title {
  margin-top: 0;
}

.vaultrice-voting-description {
  color: #666;
}

.vaultrice-voting-choice {
  display: flex;
  align-items: center;
  margin: 15px 5px;
}

.vaultrice-voting-choices {
  margin: 30px 0;
}

.vaultrice-voting-choice input {
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 10px;
  margin-top: -1px;

  position: relative;
}

.vaultrice-voting-choice input:checked {
  border: 6px solid #000;
}

.vaultrice-voting-result {
  margin: 30px 0;
}

.vaultrice-voting-result .vaultrice-voting--result-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vaultrice-voting-result .vaultrice-voting-result-label-tag {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2px 5px;
  border-radius: 15px;
  font-weight: 600;

  box-shadow: 0 8px 25px rgba(55, 0, 255, 0.05);
}

.vaultrice-voting-result .vaultrice-meter-container {
  margin: 15px 0;
}

.vaultrice-voting-disclaimer {
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: #666;
  margin-top: 30px;
}

.vaultrice-voting-disclaimer a {
  color: rgba(55, 0, 255, 0.718);
  margin: 0 2px;
}

.vaultrice-voting-expired .vaultrice-voting--result-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.vaultrice-voting-expired-icon {
  font-size: 1.2em;
  margin-right: 8px;
  opacity: 0.7;
}

.vaultrice-voting-expired-label {
  color: #888;
  font-weight: 600;
  font-size: 1.1em;
  margin-right: auto;
}

.vaultrice-voting-expired .vaultrice-voting-result-label-tag {
  background: #e0d7ff;
  color: #6c3cff;
  font-weight: 700;
  font-size: 1em;
  margin-left: 8px;
}

.vaultrice-voting-expired-text {
  margin-top: 18px;
  font-size: 1.07em;
  color: #888;
}
`;
Lu(U0);
function H0(x, o, d, f, g, T) {
    const [z, m] = ne.useState(),
        [p, s] = ne.useState(!1),
        [y, N] = ne.useState(!1),
        [R, w] = ne.useState(!1);
    d || (d = o);
    const K = f ? f.class || '_undefined_' : (g == null ? void 0 : g.class) || '_undefined_',
        k = f ? f.ttl || 36e5 : (g == null ? void 0 : g.ttl) || 36e5,
        W = `${x}-user-${o}-voted`,
        ct = `vaultrice-${x}-user-${d}-${K}-voted`,
        lt = `${x}-user-${o}`,
        dt = x,
        I = o ? yf({ ...f, id: lt }, T) : void 0;
    return (
        ne.useEffect(() => {
            try {
                (async () => {
                    if ((s(!1), o)) {
                        const q = await (I == null ? void 0 : I.getItem(W));
                        N(!!q);
                    } else {
                        let q = window.localStorage.getItem(ct);
                        q &&
                            parseInt(q) + 2 * k < Date.now() &&
                            (window.localStorage.removeItem(ct), (q = null)),
                            N(!!q);
                    }
                    s(!0);
                })();
            } catch (q) {
                m(q);
            }
        }, [W, I, o, d, ct]),
        [
            p,
            R,
            y,
            async (q) => {
                try {
                    if (y) return;
                    w(!0),
                        await yf({ ...g, id: dt }, T).incrementItem(`${dt}-choices-${q}`),
                        o
                            ? await (I == null ? void 0 : I.setItem(W, Date.now()))
                            : window.localStorage.setItem(ct, Date.now().toString()),
                        w(!1),
                        N(!0);
                } catch (bt) {
                    m(bt);
                }
            },
            z,
        ]
    );
}
const R0 = ({
        id: x,
        choices: o = [],
        choicesInstanceOptions: d,
        credentials: f,
        bind: g = !0,
        showPercentage: T = !1,
        showTotalVotes: z = !0,
    }) => {
        const [m] = ne.useState(o.map((N) => `${x}-choices-${N.id}`)),
            [p, , , s] = O0(x, m, { credentials: f, instanceOptions: d, bind: g });
        if (!s && !p)
            return it.jsxs('div', {
                className: 'vaultrice-voting-result vaultrice-voting-expired',
                children: [
                    it.jsxs('div', {
                        className: 'vaultrice-voting--result-label',
                        children: [
                            it.jsx('span', {
                                className: 'vaultrice-voting-expired-icon',
                                'aria-label': 'Voting closed',
                                role: 'img',
                                children: '🔒',
                            }),
                            it.jsx('label', {
                                className: 'vaultrice-voting-expired-label',
                                children: 'Voting closed',
                            }),
                            it.jsx('span', {
                                className: 'vaultrice-voting-result-label-tag',
                                children: 'Expired',
                            }),
                        ],
                    }),
                    it.jsx('p', {
                        className: 'vaultrice-voting-expired-text',
                        children: 'This voting has expired and is no longer accepting responses.',
                    }),
                ],
            });
        if (s) return 'loading...';
        if (!p) return null;
        const y = Object.values(p).reduce((N, R) => (R != null && R.value ? N + R.value : N), 0);
        return it.jsxs('div', {
            className: 'vaultrice-voting-results',
            children: [
                o.map((N) => {
                    const R = p[`${x}-choices-${N.id}`],
                        w = R != null && R.value ? (R.value / y) * 100 : 0;
                    return it.jsxs(
                        'div',
                        {
                            className: 'vaultrice-voting-result',
                            children: [
                                it.jsxs('div', {
                                    className: 'vaultrice-voting--result-label',
                                    children: [
                                        it.jsx('label', { children: N.label }),
                                        it.jsx('span', {
                                            className: 'vaultrice-voting-result-label-tag',
                                            children: T
                                                ? `${w.toFixed(1)}%`
                                                : (R == null ? void 0 : R.value) || 0,
                                        }),
                                    ],
                                }),
                                it.jsx(D0, { percentage: w }),
                            ],
                        },
                        N.id,
                    );
                }),
                z &&
                    it.jsxs('div', {
                        style: { marginTop: 12, textAlign: 'right', color: '#666', fontSize: 13 },
                        children: ['Total votes: ', it.jsx('b', { children: y })],
                    }),
            ],
        });
    },
    w0 = ({
        id: x,
        title: o,
        description: d,
        voteLabel: f = 'vote',
        choices: g = [],
        choicesInstanceOptions: T,
        userId: z,
        userIdForLocalStorage: m,
        userInstanceOptions: p,
        credentials: s,
        bind: y = !0,
        showPercentage: N = !1,
        showTotalVotes: R = !0,
    }) => {
        var dt;
        const [w, K] = ne.useState((dt = g == null ? void 0 : g[0]) == null ? void 0 : dt.id),
            [k, W, ct, lt] = H0(x, z, m, p, T, s);
        return k
            ? it.jsxs(x0, {
                  children: [
                      !!o && it.jsx('h3', { className: 'vaultrice-voting-title', children: o }),
                      !!d &&
                          it.jsx('p', { className: 'vaultrice-voting-description', children: d }),
                      !!ct &&
                          it.jsx(R0, {
                              id: x,
                              choices: g,
                              choicesInstanceOptions: T,
                              credentials: s,
                              bind: y,
                              showPercentage: N,
                              showTotalVotes: R,
                          }),
                      !ct &&
                          it.jsxs(it.Fragment, {
                              children: [
                                  it.jsx('div', {
                                      className: 'vaultrice-voting-choices',
                                      children: g.map((I) =>
                                          it.jsxs(
                                              'div',
                                              {
                                                  className: 'vaultrice-voting-choice',
                                                  onClick: (q) => {
                                                      q.target.tagName !== 'INPUT' && K(I.id);
                                                  },
                                                  style: { cursor: 'pointer' },
                                                  children: [
                                                      it.jsx('input', {
                                                          type: 'radio',
                                                          name: I.id,
                                                          value: I.id,
                                                          checked: I.id === w,
                                                          onChange: () => {
                                                              K(I.id);
                                                          },
                                                          style: { cursor: 'pointer' },
                                                      }),
                                                      it.jsx('label', {
                                                          htmlFor: I.id,
                                                          style: { cursor: 'pointer' },
                                                          children: I.label,
                                                      }),
                                                  ],
                                              },
                                              I.id,
                                          ),
                                      ),
                                  }),
                                  it.jsx(N0, {
                                      onClick: () => {
                                          lt(w);
                                      },
                                      disabled: W,
                                      children: W ? '...voting' : f,
                                  }),
                              ],
                          }),
                      it.jsxs('div', {
                          className: 'vaultrice-voting-disclaimer',
                          children: [
                              'Powered by ',
                              it.jsx('a', {
                                  href: 'https://www.vaultrice.com',
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  children: 'vaultrice.com',
                              }),
                              ' - get yours ',
                              it.jsx('a', {
                                  href: 'https://www.vaultrice.app/register',
                                  target: '_bland',
                                  children: 'for free!',
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
function q0(x, o) {
    const d = u0.createRoot(x);
    function f(g) {
        const T = {
            id: g.votingId || g.id || '',
            title: g.title || '',
            description: g.description || '',
            choices: g.choices || [],
            voteLabel: g.voteLabel || 'vote',
            bind: !0,
            showPercentage: !!g.showPercentages,
            showTotalVotes: !!g.showTotalVotes,
            userIdForLocalStorage: 'gitbook-user',
            credentials: g.credentials,
            choicesInstanceOptions: {
                class: g.votingClass || '_undefined_',
                ttl: g.tll || 36e5,
                // 1 hour in ms
            },
        };
        try {
            typeof T.choices == 'string' && (T.choices = JSON.parse(T.choices));
        } catch (z) {
            T.choices = [];
        }
        try {
            d.render(Iv.createElement(w0, T));
        } catch (z) {
            const m = document.createElement('div');
            (m.textContent = 'Failed to render voting widget'),
                (x.innerHTML = ''),
                x.appendChild(m);
        }
    }
    return f(o || {}), { render: f, root: d };
}
function B0() {
    if (typeof window == 'undefined' || typeof document == 'undefined') return;
    let x = null,
        o = !1,
        d = null,
        f = null;
    function g(p) {
        try {
            window.parent.postMessage({ action: p }, '*');
        } catch (s) {}
    }
    function T(p) {
        if (!p.data || typeof p.data != 'object') return;
        const s = p.data.state;
        s &&
            typeof s == 'object' &&
            ((x = s),
            typeof x.credentials == 'string' && (x.credentials = JSON.parse(x.credentials)),
            o
                ? f && f.render(x)
                : ((d = document.getElementById('root')),
                  d ||
                      ((d = document.createElement('div')),
                      (d.id = 'root'),
                      document.body.appendChild(d)),
                  (f = q0(d, x)),
                  (o = !0)),
            z());
    }
    function z() {
        try {
            const p = document.body.scrollHeight || (d ? d.scrollHeight : 300);
            g({
                action: '@webframe.resize',
                size: { height: Math.max(p, 200) },
            });
        } catch (p) {}
    }
    function m() {
        g({ action: '@webframe.ready' });
    }
    if ((window.addEventListener('message', T), typeof window.ResizeObserver != 'undefined'))
        try {
            new window.ResizeObserver(() => z()).observe(document.body);
        } catch (p) {}
    return (
        document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', m) : m(),
        {
            getState: () => x,
            destroy: () => {
                window.removeEventListener('message', T);
            },
        }
    );
}
export { B0 as default };
