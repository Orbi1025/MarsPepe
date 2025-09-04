(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [251],
  {
    1025: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(4090),
        r = i(5392),
        s = n && "object" == typeof n && "default" in n ? n : { default: n },
        o = function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var r in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        };
      function a(t, e) {
        var i = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            0 > e.indexOf(n) &&
            (i[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
            0 > e.indexOf(n[r]) &&
              Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
              (i[n[r]] = t[n[r]]);
        }
        return i;
      }
      function l(t) {
        var e = t || u(),
          i = n.useState(e),
          r = i[0],
          s = i[1];
        return (
          n.useEffect(
            function () {
              if ("matchMedia" in window) {
                var e = function () {
                    s(t || u());
                  },
                  i = window.matchMedia(
                    "screen and (resolution: ".concat(r, "dppx)")
                  );
                return (
                  i.hasOwnProperty("addEventListener")
                    ? i.addEventListener("change", e)
                    : i.addListener(e),
                  function () {
                    i.hasOwnProperty("removeEventListener")
                      ? i.removeEventListener("change", e)
                      : i.removeListener(e);
                  }
                );
              }
            },
            [r, t]
          ),
          r
        );
      }
      function u() {
        return Math.min(
          Math.max(
            1,
            "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1
          ),
          3
        );
      }
      "function" == typeof SuppressedError && SuppressedError;
      var h = (function () {
          function t() {}
          return (
            (t.prototype.observe = function () {}),
            (t.prototype.unobserve = function () {}),
            (t.prototype.disconnect = function () {}),
            t
          );
        })(),
        c = globalThis.ResizeObserver || h,
        d = void 0 !== globalThis.ResizeObserver,
        p = !d,
        f = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function m(t) {
        return Object.assign({}, f, t);
      }
      function v(t) {
        var e,
          i,
          r,
          s,
          o,
          a,
          u,
          h = t.riveLoaded,
          f = void 0 !== h && h,
          v = t.canvasElem,
          g = t.containerRef,
          y = t.options,
          b = t.onCanvasHasResized,
          x = t.artboardBounds,
          w = m(void 0 === y ? {} : y),
          T = n.useState({ height: 0, width: 0 }),
          P = T[0],
          S = P.height,
          E = P.width,
          A = T[1],
          R = n.useState({ height: 0, width: 0 }),
          C = R[0],
          M = C.height,
          V = C.width,
          k = R[1],
          D = n.useState(!0),
          L = D[0],
          O = D[1],
          j = w.fitCanvasToArtboardHeight,
          F = w.shouldResizeCanvasToContainer,
          I = w.useDevicePixelRatio,
          B = w.customDevicePixelRatio,
          _ =
            (void 0 === (e = F) && (e = !0),
            (r = (i = n.useState({ width: 0, height: 0 }))[0]),
            (s = i[1]),
            n.useEffect(function () {
              if (e) {
                var t = function () {
                  s({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  p && (t(), window.addEventListener("resize", t)),
                  function () {
                    return window.removeEventListener("resize", t);
                  }
                );
              }
            }, []),
            (u = n.useRef(
              new c(
                ((o = function (t) {
                  d &&
                    s({
                      width: t[t.length - 1].contentRect.width,
                      height: t[t.length - 1].contentRect.height,
                    });
                }),
                (a = 0),
                function () {
                  for (var t = this, e = [], i = 0; i < arguments.length; i++)
                    e[i] = arguments[i];
                  clearTimeout(a),
                    (a = window.setTimeout(function () {
                      return o.apply(t, e);
                    }, 0));
                })
              )
            )),
            n.useEffect(
              function () {
                var t = u.current;
                if (e) {
                  var i = g.current;
                  return (
                    g.current && d && t.observe(g.current),
                    function () {
                      t.disconnect(), i && d && t.unobserve(i);
                    }
                  );
                }
                t.disconnect();
              },
              [g, u]
            ),
            r),
          U = l(B),
          N = null != x ? x : {},
          H = N.maxX,
          W = N.maxY,
          z = n.useCallback(
            function () {
              var t,
                e,
                i,
                n,
                r =
                  null !==
                    (e =
                      null === (t = g.current) || void 0 === t
                        ? void 0
                        : t.clientWidth) && void 0 !== e
                    ? e
                    : 0,
                s =
                  null !==
                    (n =
                      null === (i = g.current) || void 0 === i
                        ? void 0
                        : i.clientHeight) && void 0 !== n
                    ? n
                    : 0;
              return j && x
                ? { width: r, height: (x.maxY / x.maxX) * r }
                : { width: r, height: s };
            },
            [g, j, H, W]
          );
        n.useEffect(
          function () {
            if (F && g.current && f) {
              var t = z(),
                e = t.width,
                i = t.height,
                n = !1;
              if (v) {
                var r = e !== E || i !== S;
                if (
                  (w.fitCanvasToArtboardHeight &&
                    r &&
                    ((g.current.style.height = i + "px"), (n = !0)),
                  w.useDevicePixelRatio)
                ) {
                  if (r || e * U !== V || i * U !== M) {
                    var s = U * e,
                      o = U * i;
                    (v.width = s),
                      (v.height = o),
                      (v.style.width = e + "px"),
                      (v.style.height = i + "px"),
                      k({ width: s, height: o }),
                      (n = !0);
                  }
                } else
                  r &&
                    ((v.width = e),
                    (v.height = i),
                    k({ width: e, height: i }),
                    (n = !0));
                A({ width: e, height: i });
              }
              b && (L || n) && b && b(), L && O(!1);
            }
          },
          [v, g, _, U, z, L, O, M, V, S, E, b, F, j, I, f]
        ),
          n.useEffect(
            function () {
              k({ width: 0, height: 0 });
            },
            [v]
          );
      }
      var g,
        y = (function () {
          function t() {}
          return (
            (t.prototype.observe = function () {}),
            (t.prototype.unobserve = function () {}),
            (t.prototype.disconnect = function () {}),
            t
          );
        })(),
        b = globalThis.IntersectionObserver || y,
        x = (function () {
          function t() {
            var t = this;
            (this.elementsMap = new Map()),
              (this.onObserved = function (e) {
                e.forEach(function (e) {
                  var i = t.elementsMap.get(e.target);
                  i && i(e);
                });
              }),
              (this.observer = new b(this.onObserved));
          }
          return (
            (t.prototype.registerCallback = function (t, e) {
              this.observer.observe(t), this.elementsMap.set(t, e);
            }),
            (t.prototype.removeCallback = function (t) {
              this.observer.unobserve(t), this.elementsMap.delete(t);
            }),
            t
          );
        })(),
        w = function () {
          return g || (g = new x()), g;
        };
      function T(t) {
        var e = t.setContainerRef,
          i = t.setCanvasRef,
          n = t.className,
          r = void 0 === n ? "" : n,
          l = t.style,
          u = t.children,
          h = a(t, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          c = o({ width: "100%", height: "100%" }, l);
        return s.default.createElement(
          "div",
          o({ ref: e, className: r }, !r && { style: c }),
          s.default.createElement(
            "canvas",
            o(
              { ref: i, style: { verticalAlign: "top", width: 0, height: 0 } },
              h
            ),
            u
          )
        );
      }
      function P(t, e) {
        void 0 === e && (e = {});
        var i = n.useState(null),
          a = i[0],
          u = i[1],
          h = n.useRef(null),
          c = n.useState(null),
          d = c[0],
          p = c[1],
          f = m(e),
          g = l(),
          y = n.useCallback(
            function () {
              if (d) {
                if (d.layout && d.layout.fit === r.Fit.Layout && a) {
                  var t = g * d.layout.layoutScaleFactor;
                  (d.devicePixelRatioUsed = g),
                    (d.artboardWidth = (null == a ? void 0 : a.width) / t),
                    (d.artboardHeight = (null == a ? void 0 : a.height) / t);
                }
                d.startRendering(), d.resizeToCanvas();
              }
            },
            [d, g]
          );
        v({
          riveLoaded: !!d,
          canvasElem: a,
          containerRef: h,
          options: f,
          onCanvasHasResized: y,
          artboardBounds: null == d ? void 0 : d.bounds,
        });
        var b = n.useCallback(function (t) {
          null === t && a && ((a.height = 0), (a.width = 0)), u(t);
        }, []);
        n.useEffect(
          function () {
            if (a && t && null == d) {
              var e = f.useOffscreenRenderer,
                i = new r.Rive(
                  o(o({ useOffscreenRenderer: e }, t), { canvas: a })
                );
              i.on(r.EventType.Load, function () {
                a ? p(i) : i.cleanup();
              });
            }
          },
          [a, !!t, d]
        );
        var x = n.useCallback(function (t) {
            h.current = t;
          }, []),
          P = {
            observe: n.useCallback(function (t, e) {
              w().registerCallback(t, e);
            }, []),
            unobserve: n.useCallback(function (t) {
              w().removeCallback(t);
            }, []),
          },
          S = P.observe,
          E = P.unobserve;
        n.useEffect(
          function () {
            var t,
              e = !1,
              i = function () {
                if (a && e) {
                  var t = a.getBoundingClientRect();
                  t.width > 0 &&
                    t.height > 0 &&
                    t.top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    t.bottom > 0 &&
                    t.left <
                      (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                    t.right > 0 &&
                    (null == d || d.startRendering(), (e = !1));
                }
              };
            return (
              a &&
                !1 !== f.shouldUseIntersectionObserver &&
                S(a, function (n) {
                  n.isIntersecting
                    ? d && d.startRendering()
                    : d && d.stopRendering(),
                    (e = !n.isIntersecting),
                    clearTimeout(t),
                    n.isIntersecting ||
                      0 !== n.boundingClientRect.width ||
                      (t = setTimeout(i, 10));
                }),
              function () {
                a && E(a);
              }
            );
          },
          [S, E, d, a, f.shouldUseIntersectionObserver]
        ),
          n.useEffect(
            function () {
              return function () {
                d && (d.cleanup(), p(null));
              };
            },
            [d, a]
          );
        var A = null == t ? void 0 : t.animations;
        n.useEffect(
          function () {
            d &&
              A &&
              (d.isPlaying
                ? (d.stop(d.animationNames), d.play(A))
                : d.isPaused && (d.stop(d.animationNames), d.pause(A)));
          },
          [A, d]
        );
        var R = n.useCallback(
          function (t) {
            return s.default.createElement(
              T,
              o({ setContainerRef: x, setCanvasRef: b }, t)
            );
          },
          [b, x]
        );
        return {
          canvas: a,
          container: h.current,
          setCanvasRef: b,
          setContainerRef: x,
          rive: d,
          RiveComponent: R,
        };
      }
      (e.default = function (t) {
        var e = t.src,
          i = t.artboard,
          n = t.animations,
          r = t.stateMachines,
          l = t.layout,
          u = t.useOffscreenRenderer,
          h = t.shouldDisableRiveListeners,
          c = t.shouldResizeCanvasToContainer,
          d = t.automaticallyHandleEvents,
          p = t.children,
          f = a(t, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
          ]),
          m = P(
            {
              src: e,
              artboard: i,
              animations: n,
              layout: l,
              stateMachines: r,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== h && h,
              automaticallyHandleEvents: void 0 !== d && d,
            },
            {
              useOffscreenRenderer: void 0 === u || u,
              shouldResizeCanvasToContainer: void 0 === c || c,
            }
          ).RiveComponent;
        return s.default.createElement(m, o({}, f), p);
      }),
        (e.useResizeCanvas = v),
        (e.useRive = P),
        (e.useRiveFile = function (t) {
          var e = this,
            i = n.useState(null),
            s = i[0],
            o = i[1],
            a = n.useState("idle"),
            l = a[0],
            u = a[1];
          return (
            n.useEffect(
              function () {
                var i,
                  n,
                  s,
                  a = null;
                return (
                  (i = void 0),
                  (n = void 0),
                  (s = function () {
                    return (function (t, e) {
                      var i,
                        n,
                        r,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                          },
                          trys: [],
                          ops: [],
                        },
                        o = Object.create(
                          ("function" == typeof Iterator ? Iterator : Object)
                            .prototype
                        );
                      return (
                        (o.next = a(0)),
                        (o.throw = a(1)),
                        (o.return = a(2)),
                        "function" == typeof Symbol &&
                          (o[Symbol.iterator] = function () {
                            return this;
                          }),
                        o
                      );
                      function a(a) {
                        return function (l) {
                          return (function (a) {
                            if (i)
                              throw TypeError(
                                "Generator is already executing."
                              );
                            for (; o && ((o = 0), a[0] && (s = 0)), s; )
                              try {
                                if (
                                  ((i = 1),
                                  n &&
                                    (r =
                                      2 & a[0]
                                        ? n.return
                                        : a[0]
                                        ? n.throw ||
                                          ((r = n.return) && r.call(n), 0)
                                        : n.next) &&
                                    !(r = r.call(n, a[1])).done)
                                )
                                  return r;
                                switch (
                                  ((n = 0),
                                  r && (a = [2 & a[0], r.value]),
                                  a[0])
                                ) {
                                  case 0:
                                  case 1:
                                    r = a;
                                    break;
                                  case 4:
                                    return s.label++, { value: a[1], done: !1 };
                                  case 5:
                                    s.label++, (n = a[1]), (a = [0]);
                                    continue;
                                  case 7:
                                    (a = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(r =
                                        (r = s.trys).length > 0 &&
                                        r[r.length - 1]) &&
                                      (6 === a[0] || 2 === a[0])
                                    ) {
                                      s = 0;
                                      continue;
                                    }
                                    if (
                                      3 === a[0] &&
                                      (!r || (a[1] > r[0] && a[1] < r[3]))
                                    ) {
                                      s.label = a[1];
                                      break;
                                    }
                                    if (6 === a[0] && s.label < r[1]) {
                                      (s.label = r[1]), (r = a);
                                      break;
                                    }
                                    if (r && s.label < r[2]) {
                                      (s.label = r[2]), s.ops.push(a);
                                      break;
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                a = e.call(t, s);
                              } catch (t) {
                                (a = [6, t]), (n = 0);
                              } finally {
                                i = r = 0;
                              }
                            if (5 & a[0]) throw a[1];
                            return { value: a[0] ? a[1] : void 0, done: !0 };
                          })([a, l]);
                        };
                      }
                    })(this, function (e) {
                      try {
                        u("loading"),
                          (a = new r.RiveFile(t)).init(),
                          a.on(r.EventType.Load, function () {
                            null == a || a.getInstance(), o(a), u("success");
                          }),
                          a.on(r.EventType.LoadError, function () {
                            u("failed");
                          }),
                          o(a);
                      } catch (t) {
                        console.error(t), u("failed");
                      }
                      return [2];
                    });
                  }),
                  new (n || (n = Promise))(function (t, r) {
                    function o(t) {
                      try {
                        l(s.next(t));
                      } catch (t) {
                        r(t);
                      }
                    }
                    function a(t) {
                      try {
                        l(s.throw(t));
                      } catch (t) {
                        r(t);
                      }
                    }
                    function l(e) {
                      var i;
                      e.done
                        ? t(e.value)
                        : ((i = e.value) instanceof n
                            ? i
                            : new n(function (t) {
                                t(i);
                              })
                          ).then(o, a);
                    }
                    l((s = s.apply(e, i || [])).next());
                  }),
                  function () {
                    null == a || a.cleanup();
                  }
                );
              },
              [t.src, t.buffer]
            ),
            { riveFile: s, status: l }
          );
        }),
        (e.useStateMachineInput = function (t, e, i, s) {
          var o = n.useState(null),
            a = o[0],
            l = o[1];
          return (
            n.useEffect(
              function () {
                function n() {
                  if (((t && e && i) || l(null), t && e && i)) {
                    var n = t.stateMachineInputs(e);
                    if (n) {
                      var r = n.find(function (t) {
                        return t.name === i;
                      });
                      void 0 !== s && r && (r.value = s), l(r || null);
                    }
                  } else l(null);
                }
                n(),
                  t &&
                    t.on(r.EventType.Load, function () {
                      n();
                    });
              },
              [t]
            ),
            a
          );
        }),
        Object.keys(r).forEach(function (t) {
          "default" === t ||
            e.hasOwnProperty(t) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            });
        });
    },
    6269: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      var n = i(9703),
        r = i(4090),
        s = i(7072),
        o = i(6468),
        a = function (t) {
          o.Z &&
            !(0, s.mf)(t) &&
            console.error(
              "useMemoizedFn expected parameter is a function, got ".concat(
                typeof t
              )
            );
          var e = (0, r.useRef)(t);
          e.current = (0, r.useMemo)(
            function () {
              return t;
            },
            [t]
          );
          var i = (0, r.useRef)();
          return (
            i.current ||
              (i.current = function () {
                for (var t = [], i = 0; i < arguments.length; i++)
                  t[i] = arguments[i];
                return e.current.apply(this, t);
              }),
            i.current
          );
        };
      function l(t, e) {
        void 0 === e && (e = {});
        var i = e.min,
          n = e.max,
          r = t;
        return (
          (0, s.hj)(n) && (r = Math.min(n, r)),
          (0, s.hj)(i) && (r = Math.max(i, r)),
          r
        );
      }
      var u = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = {});
        var i = e.min,
          o = e.max,
          u = (0, n.CR)(
            (0, r.useState)(function () {
              return l(t, { min: i, max: o });
            }),
            2
          ),
          h = u[0],
          c = u[1],
          d = function (t) {
            c(function (e) {
              return l((0, s.hj)(t) ? t : t(e), { max: o, min: i });
            });
          };
        return [
          h,
          {
            inc: a(function (t) {
              void 0 === t && (t = 1),
                d(function (e) {
                  return e + t;
                });
            }),
            dec: a(function (t) {
              void 0 === t && (t = 1),
                d(function (e) {
                  return e - t;
                });
            }),
            set: a(function (t) {
              d(t);
            }),
            reset: a(function () {
              d(t);
            }),
          },
        ];
      };
    },
    7165: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return f;
        },
      });
      var n,
        r = i(9703);
      i(9999);
      var s = i(4090),
        o = i(7072),
        a = !!window.document && !!window.document.createElement;
      function l(t, e) {
        return a
          ? t
            ? (0, o.mf)(t)
              ? t()
              : "current" in t
              ? t.current
              : t
            : e
          : void 0;
      }
      var u = function (t) {
          var e = (0, s.useRef)(t);
          return (e.current = t), e;
        },
        h = i(6468),
        c = function (t) {
          h.Z &&
            !(0, o.mf)(t) &&
            console.error(
              "useUnmount expected parameter is a function, got ".concat(
                typeof t
              )
            );
          var e = u(t);
          (0, s.useEffect)(function () {
            return function () {
              e.current();
            };
          }, []);
        };
      function d(t, e) {
        if (t === e) return !0;
        for (var i = 0; i < t.length; i++)
          if (!Object.is(t[i], e[i])) return !1;
        return !0;
      }
      var p =
          ((n = s.useEffect),
          function (t, e, i) {
            var r = (0, s.useRef)(!1),
              o = (0, s.useRef)([]),
              a = (0, s.useRef)([]),
              u = (0, s.useRef)();
            n(function () {
              var n,
                s = (Array.isArray(i) ? i : [i]).map(function (t) {
                  return l(t);
                });
              if (!r.current) {
                (r.current = !0),
                  (o.current = s),
                  (a.current = e),
                  (u.current = t());
                return;
              }
              (s.length === o.current.length &&
                d(o.current, s) &&
                d(a.current, e)) ||
                (null === (n = u.current) || void 0 === n || n.call(u),
                (o.current = s),
                (a.current = e),
                (u.current = t()));
            }),
              c(function () {
                var t;
                null === (t = u.current) || void 0 === t || t.call(u),
                  (r.current = !1);
              });
          }),
        f = function (t, e) {
          var i = e || {},
            n = i.callback,
            o = (0, r._T)(i, ["callback"]),
            a = (0, r.CR)((0, s.useState)(), 2),
            u = a[0],
            h = a[1],
            c = (0, r.CR)((0, s.useState)(), 2),
            d = c[0],
            f = c[1];
          return (
            p(
              function () {
                var i = (Array.isArray(t) ? t : [t])
                  .map(function (t) {
                    return l(t);
                  })
                  .filter(Boolean);
                if (i.length) {
                  var s = new IntersectionObserver(function (t) {
                    var e, i;
                    try {
                      for (
                        var s = (0, r.XA)(t), o = s.next();
                        !o.done;
                        o = s.next()
                      ) {
                        var a = o.value;
                        f(a.intersectionRatio),
                          h(a.isIntersecting),
                          null == n || n(a);
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        o && !o.done && (i = s.return) && i.call(s);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  }, (0,
                  r.pi)((0, r.pi)({}, o), { root: l(null == e ? void 0 : e.root) }));
                  return (
                    i.forEach(function (t) {
                      return s.observe(t);
                    }),
                    function () {
                      s.disconnect();
                    }
                  );
                }
              },
              [
                null == e ? void 0 : e.rootMargin,
                null == e ? void 0 : e.threshold,
                n,
              ],
              t
            ),
            [u, d]
          );
        };
    },
    7072: function (t, e, i) {
      "use strict";
      i.d(e, {
        hj: function () {
          return r;
        },
        mf: function () {
          return n;
        },
      });
      var n = function (t) {
          return "function" == typeof t;
        },
        r = function (t) {
          return "number" == typeof t;
        };
    },
    6468: function (t, e) {
      "use strict";
      e.Z = !1;
    },
    9999: function () {
      !(function () {
        "use strict";
        if (
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
          "isIntersecting" in window.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              window.IntersectionObserverEntry.prototype,
              "isIntersecting",
              {
                get: function () {
                  return this.intersectionRatio > 0;
                },
              }
            );
          return;
        }
        function t(t) {
          try {
            return (t.defaultView && t.defaultView.frameElement) || null;
          } catch (t) {
            return null;
          }
        }
        var e = (function (e) {
            for (var i = e, n = t(i); n; ) n = t((i = n.ownerDocument));
            return i;
          })(window.document),
          i = [],
          n = null,
          r = null;
        function s(t) {
          (this.time = t.time),
            (this.target = t.target),
            (this.rootBounds = c(t.rootBounds)),
            (this.boundingClientRect = c(t.boundingClientRect)),
            (this.intersectionRect = c(t.intersectionRect || h())),
            (this.isIntersecting = !!t.intersectionRect);
          var e = this.boundingClientRect,
            i = e.width * e.height,
            n = this.intersectionRect,
            r = n.width * n.height;
          i
            ? (this.intersectionRatio = Number((r / i).toFixed(4)))
            : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
        }
        function o(t, e) {
          var i,
            n,
            r,
            s = e || {};
          if ("function" != typeof t)
            throw Error("callback must be a function");
          if (s.root && 1 != s.root.nodeType && 9 != s.root.nodeType)
            throw Error("root must be a Document or Element");
          (this._checkForIntersections =
            ((i = this._checkForIntersections.bind(this)),
            (n = this.THROTTLE_TIMEOUT),
            (r = null),
            function () {
              r ||
                (r = setTimeout(function () {
                  i(), (r = null);
                }, n));
            })),
            (this._callback = t),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(s.rootMargin)),
            (this.thresholds = this._initThresholds(s.threshold)),
            (this.root = s.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (t) {
                return t.value + t.unit;
              })
              .join(" ")),
            (this._monitoringDocuments = []),
            (this._monitoringUnsubscribes = []);
        }
        function a(t, e, i, n) {
          "function" == typeof t.addEventListener
            ? t.addEventListener(e, i, n || !1)
            : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i);
        }
        function l(t, e, i, n) {
          "function" == typeof t.removeEventListener
            ? t.removeEventListener(e, i, n || !1)
            : "function" == typeof t.detachEvent && t.detachEvent("on" + e, i);
        }
        function u(t) {
          var e;
          try {
            e = t.getBoundingClientRect();
          } catch (t) {}
          return e
            ? ((e.width && e.height) ||
                (e = {
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                  left: e.left,
                  width: e.right - e.left,
                  height: e.bottom - e.top,
                }),
              e)
            : h();
        }
        function h() {
          return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function c(t) {
          return !t || "x" in t
            ? t
            : {
                top: t.top,
                y: t.top,
                bottom: t.bottom,
                left: t.left,
                x: t.left,
                right: t.right,
                width: t.width,
                height: t.height,
              };
        }
        function d(t, e) {
          var i = e.top - t.top,
            n = e.left - t.left;
          return {
            top: i,
            left: n,
            height: e.height,
            width: e.width,
            bottom: i + e.height,
            right: n + e.width,
          };
        }
        function p(t, e) {
          for (var i = e; i; ) {
            if (i == t) return !0;
            i = f(i);
          }
          return !1;
        }
        function f(i) {
          var n = i.parentNode;
          return 9 == i.nodeType && i != e
            ? t(i)
            : (n && n.assignedSlot && (n = n.assignedSlot.parentNode),
              n && 11 == n.nodeType && n.host)
            ? n.host
            : n;
        }
        function m(t) {
          return t && 9 === t.nodeType;
        }
        (o.prototype.THROTTLE_TIMEOUT = 100),
          (o.prototype.POLL_INTERVAL = null),
          (o.prototype.USE_MUTATION_OBSERVER = !0),
          (o._setupCrossOriginUpdater = function () {
            return (
              n ||
                (n = function (t, e) {
                  (r = t && e ? d(t, e) : h()),
                    i.forEach(function (t) {
                      t._checkForIntersections();
                    });
                }),
              n
            );
          }),
          (o._resetCrossOriginUpdater = function () {
            (n = null), (r = null);
          }),
          (o.prototype.observe = function (t) {
            if (
              !this._observationTargets.some(function (e) {
                return e.element == t;
              })
            ) {
              if (!(t && 1 == t.nodeType))
                throw Error("target must be an Element");
              this._registerInstance(),
                this._observationTargets.push({ element: t, entry: null }),
                this._monitorIntersections(t.ownerDocument),
                this._checkForIntersections();
            }
          }),
          (o.prototype.unobserve = function (t) {
            (this._observationTargets = this._observationTargets.filter(
              function (e) {
                return e.element != t;
              }
            )),
              this._unmonitorIntersections(t.ownerDocument),
              0 == this._observationTargets.length &&
                this._unregisterInstance();
          }),
          (o.prototype.disconnect = function () {
            (this._observationTargets = []),
              this._unmonitorAllIntersections(),
              this._unregisterInstance();
          }),
          (o.prototype.takeRecords = function () {
            var t = this._queuedEntries.slice();
            return (this._queuedEntries = []), t;
          }),
          (o.prototype._initThresholds = function (t) {
            var e = t || [0];
            return (
              Array.isArray(e) || (e = [e]),
              e.sort().filter(function (t, e, i) {
                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                  throw Error(
                    "threshold must be a number between 0 and 1 inclusively"
                  );
                return t !== i[e - 1];
              })
            );
          }),
          (o.prototype._parseRootMargin = function (t) {
            var e = (t || "0px").split(/\s+/).map(function (t) {
              var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
              if (!e)
                throw Error(
                  "rootMargin must be specified in pixels or percent"
                );
              return { value: parseFloat(e[1]), unit: e[2] };
            });
            return (
              (e[1] = e[1] || e[0]),
              (e[2] = e[2] || e[0]),
              (e[3] = e[3] || e[1]),
              e
            );
          }),
          (o.prototype._monitorIntersections = function (i) {
            var n = i.defaultView;
            if (n && -1 == this._monitoringDocuments.indexOf(i)) {
              var r = this._checkForIntersections,
                s = null,
                o = null;
              if (
                (this.POLL_INTERVAL
                  ? (s = n.setInterval(r, this.POLL_INTERVAL))
                  : (a(n, "resize", r, !0),
                    a(i, "scroll", r, !0),
                    this.USE_MUTATION_OBSERVER &&
                      "MutationObserver" in n &&
                      (o = new n.MutationObserver(r)).observe(i, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      })),
                this._monitoringDocuments.push(i),
                this._monitoringUnsubscribes.push(function () {
                  var t = i.defaultView;
                  t && (s && t.clearInterval(s), l(t, "resize", r, !0)),
                    l(i, "scroll", r, !0),
                    o && o.disconnect();
                }),
                i !=
                  ((this.root && (this.root.ownerDocument || this.root)) || e))
              ) {
                var u = t(i);
                u && this._monitorIntersections(u.ownerDocument);
              }
            }
          }),
          (o.prototype._unmonitorIntersections = function (i) {
            var n = this._monitoringDocuments.indexOf(i);
            if (-1 != n) {
              var r =
                (this.root && (this.root.ownerDocument || this.root)) || e;
              if (
                !this._observationTargets.some(function (e) {
                  var n = e.element.ownerDocument;
                  if (n == i) return !0;
                  for (; n && n != r; ) {
                    var s = t(n);
                    if ((n = s && s.ownerDocument) == i) return !0;
                  }
                  return !1;
                })
              ) {
                var s = this._monitoringUnsubscribes[n];
                if (
                  (this._monitoringDocuments.splice(n, 1),
                  this._monitoringUnsubscribes.splice(n, 1),
                  s(),
                  i != r)
                ) {
                  var o = t(i);
                  o && this._unmonitorIntersections(o.ownerDocument);
                }
              }
            }
          }),
          (o.prototype._unmonitorAllIntersections = function () {
            var t = this._monitoringUnsubscribes.slice(0);
            (this._monitoringDocuments.length = 0),
              (this._monitoringUnsubscribes.length = 0);
            for (var e = 0; e < t.length; e++) t[e]();
          }),
          (o.prototype._checkForIntersections = function () {
            if (this.root || !n || r) {
              var t = this._rootIsInDom(),
                e = t ? this._getRootRect() : h();
              this._observationTargets.forEach(function (i) {
                var r = i.element,
                  o = u(r),
                  a = this._rootContainsTarget(r),
                  l = i.entry,
                  c = t && a && this._computeTargetAndRootIntersection(r, o, e),
                  d = null;
                this._rootContainsTarget(r)
                  ? (!n || this.root) && (d = e)
                  : (d = h());
                var p = (i.entry = new s({
                  time:
                    window.performance && performance.now && performance.now(),
                  target: r,
                  boundingClientRect: o,
                  rootBounds: d,
                  intersectionRect: c,
                }));
                l
                  ? t && a
                    ? this._hasCrossedThreshold(l, p) &&
                      this._queuedEntries.push(p)
                    : l && l.isIntersecting && this._queuedEntries.push(p)
                  : this._queuedEntries.push(p);
              }, this),
                this._queuedEntries.length &&
                  this._callback(this.takeRecords(), this);
            }
          }),
          (o.prototype._computeTargetAndRootIntersection = function (t, i, s) {
            if ("none" != window.getComputedStyle(t).display) {
              for (var o = i, a = f(t), l = !1; !l && a; ) {
                var h = null,
                  c = 1 == a.nodeType ? window.getComputedStyle(a) : {};
                if ("none" == c.display) return null;
                if (a == this.root || 9 == a.nodeType) {
                  if (((l = !0), a == this.root || a == e))
                    n && !this.root
                      ? r && (0 != r.width || 0 != r.height)
                        ? (h = r)
                        : ((a = null), (h = null), (o = null))
                      : (h = s);
                  else {
                    var p = f(a),
                      m = p && u(p),
                      v = p && this._computeTargetAndRootIntersection(p, m, s);
                    m && v
                      ? ((a = p), (h = d(m, v)))
                      : ((a = null), (o = null));
                  }
                } else {
                  var g = a.ownerDocument;
                  a != g.body &&
                    a != g.documentElement &&
                    "visible" != c.overflow &&
                    (h = u(a));
                }
                if (
                  (h &&
                    (o = (function (t, e) {
                      var i = Math.max(t.top, e.top),
                        n = Math.min(t.bottom, e.bottom),
                        r = Math.max(t.left, e.left),
                        s = Math.min(t.right, e.right),
                        o = s - r,
                        a = n - i;
                      return (
                        (o >= 0 &&
                          a >= 0 && {
                            top: i,
                            bottom: n,
                            left: r,
                            right: s,
                            width: o,
                            height: a,
                          }) ||
                        null
                      );
                    })(h, o)),
                  !o)
                )
                  break;
                a = a && f(a);
              }
              return o;
            }
          }),
          (o.prototype._getRootRect = function () {
            var t;
            if (this.root && !m(this.root)) t = u(this.root);
            else {
              var i = m(this.root) ? this.root : e,
                n = i.documentElement,
                r = i.body;
              t = {
                top: 0,
                left: 0,
                right: n.clientWidth || r.clientWidth,
                width: n.clientWidth || r.clientWidth,
                bottom: n.clientHeight || r.clientHeight,
                height: n.clientHeight || r.clientHeight,
              };
            }
            return this._expandRectByRootMargin(t);
          }),
          (o.prototype._expandRectByRootMargin = function (t) {
            var e = this._rootMarginValues.map(function (e, i) {
                return "px" == e.unit
                  ? e.value
                  : (e.value * (i % 2 ? t.width : t.height)) / 100;
              }),
              i = {
                top: t.top - e[0],
                right: t.right + e[1],
                bottom: t.bottom + e[2],
                left: t.left - e[3],
              };
            return (
              (i.width = i.right - i.left), (i.height = i.bottom - i.top), i
            );
          }),
          (o.prototype._hasCrossedThreshold = function (t, e) {
            var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
              n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (i !== n)
              for (var r = 0; r < this.thresholds.length; r++) {
                var s = this.thresholds[r];
                if (s == i || s == n || s < i != s < n) return !0;
              }
          }),
          (o.prototype._rootIsInDom = function () {
            return !this.root || p(e, this.root);
          }),
          (o.prototype._rootContainsTarget = function (t) {
            var i = (this.root && (this.root.ownerDocument || this.root)) || e;
            return p(i, t) && (!this.root || i == t.ownerDocument);
          }),
          (o.prototype._registerInstance = function () {
            0 > i.indexOf(this) && i.push(this);
          }),
          (o.prototype._unregisterInstance = function () {
            var t = i.indexOf(this);
            -1 != t && i.splice(t, 1);
          }),
          (window.IntersectionObserver = o),
          (window.IntersectionObserverEntry = s);
      })();
    },
    7141: function (t, e, i) {
      "use strict";
      var n = i(4090),
        r = n && "object" == typeof n && "default" in n ? n : { default: n };
      !(function (t) {
        if (!t) return;
        let e = document.createElement("style");
        e.setAttribute("type", "text/css"),
          (e.innerHTML = t),
          document.head.appendChild(e);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let s = n.forwardRef(function (t, e) {
        let {
            style: i = {},
            className: s = "",
            autoFill: o = !1,
            play: a = !0,
            pauseOnHover: l = !1,
            pauseOnClick: u = !1,
            direction: h = "left",
            speed: c = 50,
            delay: d = 0,
            loop: p = 0,
            gradient: f = !1,
            gradientColor: m = "white",
            gradientWidth: v = 200,
            onFinish: g,
            onCycleComplete: y,
            onMount: b,
            children: x,
          } = t,
          [w, T] = n.useState(0),
          [P, S] = n.useState(0),
          [E, A] = n.useState(1),
          [R, C] = n.useState(!1),
          M = n.useRef(null),
          V = e || M,
          k = n.useRef(null),
          D = n.useCallback(() => {
            if (k.current && V.current) {
              let t = V.current.getBoundingClientRect(),
                e = k.current.getBoundingClientRect(),
                i = t.width,
                n = e.width;
              ("up" === h || "down" === h) && ((i = t.height), (n = e.height)),
                o && i && n ? A(n < i ? Math.ceil(i / n) : 1) : A(1),
                T(i),
                S(n);
            }
          }, [o, V, h]);
        n.useEffect(() => {
          if (R && (D(), k.current && V.current)) {
            let t = new ResizeObserver(() => D());
            return (
              t.observe(V.current),
              t.observe(k.current),
              () => {
                t && t.disconnect();
              }
            );
          }
        }, [D, V, R]),
          n.useEffect(() => {
            D();
          }, [D, x]),
          n.useEffect(() => {
            C(!0);
          }, []),
          n.useEffect(() => {
            "function" == typeof b && b();
          }, []);
        let L = n.useMemo(
            () => (o ? (P * E) / c : P < w ? w / c : P / c),
            [o, w, P, E, c]
          ),
          O = n.useMemo(
            () =>
              Object.assign(Object.assign({}, i), {
                "--pause-on-hover": !a || l ? "paused" : "running",
                "--pause-on-click": !a || (l && !u) || u ? "paused" : "running",
                "--width": "up" === h || "down" === h ? "100vh" : "100%",
                "--transform":
                  "up" === h
                    ? "rotate(-90deg)"
                    : "down" === h
                    ? "rotate(90deg)"
                    : "none",
              }),
            [i, a, l, u, h]
          ),
          j = n.useMemo(
            () => ({
              "--gradient-color": m,
              "--gradient-width": "number" == typeof v ? "".concat(v, "px") : v,
            }),
            [m, v]
          ),
          F = n.useMemo(
            () => ({
              "--play": a ? "running" : "paused",
              "--direction": "left" === h ? "normal" : "reverse",
              "--duration": "".concat(L, "s"),
              "--delay": "".concat(d, "s"),
              "--iteration-count": p ? "".concat(p) : "infinite",
              "--min-width": o ? "auto" : "100%",
            }),
            [a, h, L, d, p, o]
          ),
          I = n.useMemo(
            () => ({
              "--transform":
                "up" === h
                  ? "rotate(90deg)"
                  : "down" === h
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [h]
          ),
          B = n.useCallback(
            (t) =>
              [...Array(Number.isFinite(t) && t >= 0 ? t : 0)].map((t, e) =>
                r.default.createElement(
                  n.Fragment,
                  { key: e },
                  n.Children.map(x, (t) =>
                    r.default.createElement(
                      "div",
                      { style: I, className: "rfm-child" },
                      t
                    )
                  )
                )
              ),
            [I, x]
          );
        return R
          ? r.default.createElement(
              "div",
              { ref: V, style: O, className: "rfm-marquee-container " + s },
              f &&
                r.default.createElement("div", {
                  style: j,
                  className: "rfm-overlay",
                }),
              r.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: F,
                  onAnimationIteration: y,
                  onAnimationEnd: g,
                },
                r.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: k },
                  n.Children.map(x, (t) =>
                    r.default.createElement(
                      "div",
                      { style: I, className: "rfm-child" },
                      t
                    )
                  )
                ),
                B(E - 1)
              ),
              r.default.createElement(
                "div",
                { className: "rfm-marquee", style: F },
                B(E)
              )
            )
          : null;
      });
      e.Z = s;
    },
    5587: function (t, e, i) {
      "use strict";
      let n, r;
      i.d(e, {
        E: function () {
          return r8;
        },
      });
      var s,
        o,
        a = i(3827),
        l = i(4090);
      let u = (0, l.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        h = (0, l.createContext)({}),
        c = (0, l.createContext)(null),
        d = "undefined" != typeof document,
        p = d ? l.useLayoutEffect : l.useEffect,
        f = (0, l.createContext)({ strict: !1 }),
        m = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        v = "data-" + m("framerAppearId"),
        g = { skipAnimations: !1, useManualTiming: !1 };
      class y {
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
      }
      let b = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function x(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = b.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new y(),
                  i = new y(),
                  n = 0,
                  r = !1,
                  s = !1,
                  o = new WeakSet(),
                  a = {
                    schedule: function (t) {
                      let s =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        a =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        l = a && r,
                        u = l ? e : i;
                      return (
                        s && o.add(t),
                        u.add(t) && l && r && (n = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), o.delete(t);
                    },
                    process: (l) => {
                      if (r) {
                        s = !0;
                        return;
                      }
                      if (
                        ((r = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (n = e.order.length))
                      )
                        for (let i = 0; i < n; i++) {
                          let n = e.order[i];
                          o.has(n) && (a.schedule(n), t()), n(l);
                        }
                      (r = !1), s && ((s = !1), a.process(l));
                    },
                  };
                return a;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          o = (t) => {
            s[t].process(r);
          },
          a = () => {
            let s = g.useManualTiming ? r.timestamp : performance.now();
            (i = !1),
              (r.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              b.forEach(o),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(a));
          },
          l = () => {
            (i = !0), (n = !0), r.isProcessing || t(a);
          };
        return {
          schedule: b.reduce((t, e) => {
            let n = s[e];
            return (
              (t[e] = function (t) {
                let e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                return i || l(), n.schedule(t, e, r);
              }),
              t
            );
          }, {}),
          cancel: (t) => b.forEach((e) => s[e].cancel(t)),
          state: r,
          steps: s,
        };
      }
      let { schedule: w, cancel: T } = x(queueMicrotask, !1);
      function P(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function S(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function E(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let A = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        R = ["initial", ...A];
      function C(t) {
        return E(t.animate) || R.some((e) => S(t[e]));
      }
      function M(t) {
        return !!(C(t) || t.variants);
      }
      function V(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let k = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        D = {};
      for (let t in k) D[t] = { isEnabled: (e) => k[t].some((t) => !!e[t]) };
      let L = (0, l.createContext)({}),
        O = (0, l.createContext)({}),
        j = Symbol.for("motionComponentSymbol"),
        F = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function I(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (F.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let B = {},
        _ = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        U = new Set(_);
      function N(t, e) {
        let { layout: i, layoutId: n } = e;
        return (
          U.has(t) ||
          t.startsWith("origin") ||
          ((i || void 0 !== n) && (!!B[t] || "opacity" === t))
        );
      }
      let H = (t) => !!(t && t.getVelocity),
        W = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        z = _.length,
        Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        X = Y("--"),
        q = Y("var(--"),
        K = (t) => !!q(t) && G.test(t.split("/*")[0].trim()),
        G =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        Z = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        $ = (t, e, i) => (i > e ? e : i < t ? t : i),
        J = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Q = { ...J, transform: (t) => $(0, 1, t) },
        tt = { ...J, default: 1 },
        te = (t) => Math.round(1e5 * t) / 1e5,
        ti = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tn =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tr =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function ts(t) {
        return "string" == typeof t;
      }
      let to = (t) => ({
          test: (e) => ts(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => "".concat(e).concat(t),
        }),
        ta = to("deg"),
        tl = to("%"),
        tu = to("px"),
        th = to("vh"),
        tc = to("vw"),
        td = {
          ...tl,
          parse: (t) => tl.parse(t) / 100,
          transform: (t) => tl.transform(100 * t),
        },
        tp = { ...J, transform: Math.round },
        tf = {
          borderWidth: tu,
          borderTopWidth: tu,
          borderRightWidth: tu,
          borderBottomWidth: tu,
          borderLeftWidth: tu,
          borderRadius: tu,
          radius: tu,
          borderTopLeftRadius: tu,
          borderTopRightRadius: tu,
          borderBottomRightRadius: tu,
          borderBottomLeftRadius: tu,
          width: tu,
          maxWidth: tu,
          height: tu,
          maxHeight: tu,
          size: tu,
          top: tu,
          right: tu,
          bottom: tu,
          left: tu,
          padding: tu,
          paddingTop: tu,
          paddingRight: tu,
          paddingBottom: tu,
          paddingLeft: tu,
          margin: tu,
          marginTop: tu,
          marginRight: tu,
          marginBottom: tu,
          marginLeft: tu,
          rotate: ta,
          rotateX: ta,
          rotateY: ta,
          rotateZ: ta,
          scale: tt,
          scaleX: tt,
          scaleY: tt,
          scaleZ: tt,
          skew: ta,
          skewX: ta,
          skewY: ta,
          distance: tu,
          translateX: tu,
          translateY: tu,
          translateZ: tu,
          x: tu,
          y: tu,
          z: tu,
          perspective: tu,
          transformPerspective: tu,
          opacity: Q,
          originX: td,
          originY: td,
          originZ: tu,
          zIndex: tp,
          backgroundPositionX: tu,
          backgroundPositionY: tu,
          fillOpacity: Q,
          strokeOpacity: Q,
          numOctaves: tp,
        };
      function tm(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (X(t)) {
            s[t] = i;
            continue;
          }
          let n = tf[t],
            c = Z(i, n);
          if (U.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (t, e, i, n) {
                  let {
                      enableHardwareAcceleration: r = !0,
                      allowTransformNone: s = !0,
                    } = e,
                    o = "";
                  for (let e = 0; e < z; e++) {
                    let i = _[e];
                    if (void 0 !== t[i]) {
                      let e = W[i] || i;
                      o += "".concat(e, "(").concat(t[i], ") ");
                    }
                  }
                  return (
                    r && !t.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    n ? (o = n(t, i ? "" : o)) : s && i && (o = "none"),
                    o
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = "".concat(t, " ").concat(e, " ").concat(i);
        }
      }
      let tv = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tg(t, e, i) {
        for (let n in e) H(e[n]) || N(n, i) || (t[n] = e[n]);
      }
      let ty = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function tb(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          ty.has(t)
        );
      }
      let tx = (t) => !tb(t);
      try {
        (s = require("@emotion/is-prop-valid").default) &&
          (tx = (t) => (t.startsWith("on") ? !tb(t) : s(t)));
      } catch (t) {}
      function tw(t, e, i) {
        return "string" == typeof t ? t : tu.transform(e + i * t);
      }
      let tT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tP = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tS(t, e, i, n, r) {
        let {
          attrX: s,
          attrY: o,
          attrScale: a,
          originX: l,
          originY: u,
          pathLength: h,
          pathSpacing: c = 1,
          pathOffset: d = 0,
          ...p
        } = e;
        if ((tm(t, p, i, r), n)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: f, style: m, dimensions: v } = t;
        f.transform && (v && (m.transform = f.transform), delete f.transform),
          v &&
            (void 0 !== l || void 0 !== u || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let n = tw(e, t.x, t.width),
                r = tw(i, t.y, t.height);
              return "".concat(n, " ").concat(r);
            })(v, void 0 !== l ? l : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== s && (f.x = s),
          void 0 !== o && (f.y = o),
          void 0 !== a && (f.scale = a),
          void 0 !== h &&
            (function (t, e) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                r =
                  !(arguments.length > 4) ||
                  void 0 === arguments[4] ||
                  arguments[4];
              t.pathLength = 1;
              let s = r ? tT : tP;
              t[s.offset] = tu.transform(-n);
              let o = tu.transform(e),
                a = tu.transform(i);
              t[s.array] = "".concat(o, " ").concat(a);
            })(f, h, c, d, !1);
      }
      let tE = () => ({ ...tv(), attrs: {} }),
        tA = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tR(t, e, i, n) {
        let { style: r, vars: s } = e;
        for (let e in (Object.assign(t.style, r, n && n.getProjectionStyles(i)),
        s))
          t.style.setProperty(e, s[e]);
      }
      let tC = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tM(t, e, i, n) {
        for (let i in (tR(t, e, void 0, n), e.attrs))
          t.setAttribute(tC.has(i) ? i : m(i), e.attrs[i]);
      }
      function tV(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (H(r[o]) ||
            (e.style && H(e.style[o])) ||
            N(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function tk(t, e, i) {
        let n = tV(t, e, i);
        for (let i in t)
          (H(t[i]) || H(e[i])) &&
            (n[
              -1 !== _.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      function tD(t, e, i) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      let tL = (t) => Array.isArray(t),
        tO = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tj = (t) => (tL(t) ? t[t.length - 1] || 0 : t);
      function tF(t) {
        let e = H(t) ? t.get() : t;
        return tO(e) ? e.toValue() : e;
      }
      let tI = (t) => (e, i) => {
          let n = (0, l.useContext)(h),
            r = (0, l.useContext)(c),
            s = () =>
              (function (t, e, i, n) {
                let {
                    scrapeMotionValuesFromProps: r,
                    createRenderState: s,
                    onMount: o,
                  } = t,
                  a = {
                    latestValues: (function (t, e, i, n) {
                      let r = {},
                        s = n(t, {});
                      for (let t in s) r[t] = tF(s[t]);
                      let { initial: o, animate: a } = t,
                        l = C(t),
                        u = M(t);
                      e &&
                        u &&
                        !l &&
                        !1 !== t.inherit &&
                        (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                      let h = !!i && !1 === i.initial,
                        c = (h = h || !1 === o) ? a : o;
                      return (
                        c &&
                          "boolean" != typeof c &&
                          !E(c) &&
                          (Array.isArray(c) ? c : [c]).forEach((e) => {
                            let i = tD(t, e);
                            if (!i) return;
                            let { transitionEnd: n, transition: s, ...o } = i;
                            for (let t in o) {
                              let e = o[t];
                              if (Array.isArray(e)) {
                                let t = h ? e.length - 1 : 0;
                                e = e[t];
                              }
                              null !== e && (r[t] = e);
                            }
                            for (let t in n) r[t] = n[t];
                          }),
                        r
                      );
                    })(e, i, n, r),
                    renderState: s(),
                  };
                return o && (a.mount = (t) => o(e, t, a)), a;
              })(t, e, n, r);
          return i
            ? s()
            : (function (t) {
                let e = (0, l.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(s);
        },
        tB = (t) => t,
        {
          schedule: t_,
          cancel: tU,
          state: tN,
          steps: tH,
        } = x(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : tB,
          !0
        ),
        tW = {
          useVisualState: tI({
            scrapeMotionValuesFromProps: tk,
            createRenderState: tE,
            onMount: (t, e, i) => {
              let { renderState: n, latestValues: r } = i;
              t_.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                t_.render(() => {
                  tS(
                    n,
                    r,
                    { enableHardwareAcceleration: !1 },
                    tA(e.tagName),
                    t.transformTemplate
                  ),
                    tM(e, n);
                });
            },
          }),
        },
        tz = {
          useVisualState: tI({
            scrapeMotionValuesFromProps: tV,
            createRenderState: tv,
          }),
        };
      function tY(t, e, i) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let tX = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tq(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: t["".concat(e, "X")], y: t["".concat(e, "Y")] } };
      }
      let tK = (t) => (e) => tX(e) && t(e, tq(e));
      function tG(t, e, i, n) {
        return tY(t, e, tK(i), n);
      }
      let tZ = (t, e) => (i) => e(t(i)),
        t$ = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e.reduce(tZ);
        };
      function tJ(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tQ = tJ("dragHorizontal"),
        t0 = tJ("dragVertical");
      function t1(t) {
        let e = !1;
        if ("y" === t) e = t0();
        else if ("x" === t) e = tQ();
        else {
          let t = tQ(),
            i = t0();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function t2() {
        let t = t1(!0);
        return !t || (t(), !1);
      }
      class t5 {
        update() {}
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
      }
      function t3(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tG(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || t2()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && o(n, r);
          },
          { passive: !t.getProps()[i] }
        );
      }
      class t9 extends t5 {
        mount() {
          this.unmount = t$(t3(this.node, !0), t3(this.node, !1));
        }
        unmount() {}
      }
      class t4 extends t5 {
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = t$(
            tY(this.node.current, "focus", () => this.onFocus()),
            tY(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
      }
      let t6 = (t, e) => !!e && (t === e || t6(t, e.parentElement));
      function t7(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tq(i));
      }
      class t8 extends t5 {
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && i(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !t2()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && i(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = tG(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tY(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = t$(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tB),
            (this.removeEndListeners = tB),
            (this.removeAccessibleListeners = tB),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = tG(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: i,
                      onTapCancel: n,
                      globalTapTarget: r,
                    } = this.node.getProps();
                    r || t6(this.node.current, t.target)
                      ? i && i(t, e)
                      : n && n(t, e);
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = tG(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = t$(n, r)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tY(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tY(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          t7("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && i(t, e);
                          });
                      }
                    )),
                    t7("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tY(this.node.current, "blur", () => {
                  this.isPressing &&
                    t7("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = t$(t, e);
            });
        }
      }
      let et = new WeakMap(),
        ee = new WeakMap(),
        ei = (t) => {
          let e = et.get(t.target);
          e && e(t);
        },
        en = (t) => {
          t.forEach(ei);
        },
        er = { some: 0, all: 1 };
      class es extends t5 {
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : er[n],
            };
          return (function (t, e, i) {
            let n = (function (t) {
              let { root: e, ...i } = t,
                n = e || document;
              ee.has(n) || ee.set(n, {});
              let r = ee.get(n),
                s = JSON.stringify(i);
              return (
                r[s] ||
                  (r[s] = new IntersectionObserver(en, { root: e, ...i })),
                r[s]
              );
            })(e);
            return (
              et.set(t, i),
              n.observe(t),
              () => {
                et.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function (t) {
              let { viewport: e = {} } = t,
                { viewport: i = {} } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return (t) => e[t] !== i[t];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
      }
      function eo(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function ea(t, e, i) {
        let n = t.getProps();
        return tD(
          n,
          e,
          void 0 !== i ? i : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let el = (t) => 1e3 * t,
        eu = (t) => t / 1e3,
        eh = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ec = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ed = { type: "keyframes", duration: 0.8 },
        ep = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ef = (t, e) => {
          let { keyframes: i } = e;
          return i.length > 2
            ? ed
            : U.has(t)
            ? t.startsWith("scale")
              ? ec(i[1])
              : eh
            : ep;
        };
      function em(t, e) {
        return t[e] || t.default || t;
      }
      let ev = { current: !1 },
        eg = (t) => null !== t;
      function ey(t, e, i) {
        let { repeat: n, repeatType: r = "loop" } = e,
          s = t.filter(eg),
          o = n && "loop" !== r && n % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== i ? i : s[o];
      }
      function eb() {
        n = void 0;
      }
      let ex = {
          now: () => (
            void 0 === n &&
              ex.set(
                tN.isProcessing || g.useManualTiming
                  ? tN.timestamp
                  : performance.now()
              ),
            n
          ),
          set: (t) => {
            (n = t), queueMicrotask(eb);
          },
        },
        ew = (t) => /^0[^.\s]+$/u.test(t),
        eT = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        eP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eS = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        eE = (t) => t === J || t === tu,
        eA = (t, e) => parseFloat(t.split(", ")[e]),
        eR = (t, e) => (i, n) => {
          let { transform: r } = n;
          if ("none" === r || !r) return 0;
          let s = r.match(/^matrix3d\((.+)\)$/u);
          if (s) return eA(s[1], e);
          {
            let e = r.match(/^matrix\((.+)\)$/u);
            return e ? eA(e[1], t) : 0;
          }
        },
        eC = new Set(["x", "y", "z"]),
        eM = _.filter((t) => !eC.has(t)),
        eV = {
          width: (t, e) => {
            let { x: i } = t,
              { paddingLeft: n = "0", paddingRight: r = "0" } = e;
            return i.max - i.min - parseFloat(n) - parseFloat(r);
          },
          height: (t, e) => {
            let { y: i } = t,
              { paddingTop: n = "0", paddingBottom: r = "0" } = e;
            return i.max - i.min - parseFloat(n) - parseFloat(r);
          },
          top: (t, e) => {
            let { top: i } = e;
            return parseFloat(i);
          },
          left: (t, e) => {
            let { left: i } = e;
            return parseFloat(i);
          },
          bottom: (t, e) => {
            let { y: i } = t,
              { top: n } = e;
            return parseFloat(n) + (i.max - i.min);
          },
          right: (t, e) => {
            let { x: i } = t,
              { left: n } = e;
            return parseFloat(n) + (i.max - i.min);
          },
          x: eR(4, 13),
          y: eR(5, 14),
        };
      (eV.translateX = eV.x), (eV.translateY = eV.y);
      let ek = (t) => (e) => e.test(t),
        eD = [
          J,
          tu,
          tl,
          ta,
          tc,
          th,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eL = (t) => eD.find(ek(t)),
        eO = new Set(),
        ej = !1,
        eF = !1;
      function eI() {
        if (eF) {
          let t = Array.from(eO).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                eM.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach((e) => {
                  var i;
                  let [n, r] = e;
                  null === (i = t.getValue(n)) || void 0 === i || i.set(r);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eF = !1), (ej = !1), eO.forEach((t) => t.complete()), eO.clear();
      }
      function eB() {
        eO.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eF = !0);
        });
      }
      class e_ {
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eO.add(this),
                ej || ((ej = !0), t_.read(eB), t_.resolveKeyframes(eI)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eO.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eO.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
      }
      let eU = (t, e) => (i) =>
          !!(
            (ts(i) && tr.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eN = (t, e, i) => (n) => {
          if (!ts(n)) return n;
          let [r, s, o, a] = n.match(ti);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eH = (t) => $(0, 255, t),
        eW = { ...J, transform: (t) => Math.round(eH(t)) },
        ez = {
          test: eU("rgb", "red"),
          parse: eN("red", "green", "blue"),
          transform: (t) => {
            let { red: e, green: i, blue: n, alpha: r = 1 } = t;
            return (
              "rgba(" +
              eW.transform(e) +
              ", " +
              eW.transform(i) +
              ", " +
              eW.transform(n) +
              ", " +
              te(Q.transform(r)) +
              ")"
            );
          },
        },
        eY = {
          test: eU("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: ez.transform,
        },
        eX = {
          test: eU("hsl", "hue"),
          parse: eN("hue", "saturation", "lightness"),
          transform: (t) => {
            let { hue: e, saturation: i, lightness: n, alpha: r = 1 } = t;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              tl.transform(te(i)) +
              ", " +
              tl.transform(te(n)) +
              ", " +
              te(Q.transform(r)) +
              ")"
            );
          },
        },
        eq = {
          test: (t) => ez.test(t) || eY.test(t) || eX.test(t),
          parse: (t) =>
            ez.test(t) ? ez.parse(t) : eX.test(t) ? eX.parse(t) : eY.parse(t),
          transform: (t) =>
            ts(t)
              ? t
              : t.hasOwnProperty("red")
              ? ez.transform(t)
              : eX.transform(t),
        },
        eK = "number",
        eG = "color",
        eZ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function e$(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = e
            .replace(
              eZ,
              (t) => (
                eq.test(t)
                  ? (n.color.push(s), r.push(eG), i.push(eq.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(s), r.push("var"), i.push(t))
                  : (n.number.push(s), r.push(eK), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: r };
      }
      function eJ(t) {
        return e$(t).values;
      }
      function eQ(t) {
        let { split: e, types: i } = e$(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === eK
                ? (r += te(t[s]))
                : e === eG
                ? (r += eq.transform(t[s]))
                : (r += t[s]);
            }
          return r;
        };
      }
      let e0 = (t) => ("number" == typeof t ? 0 : t),
        e1 = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              ts(t) &&
              ((null === (e = t.match(ti)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tn)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eJ,
          createTransformer: eQ,
          getAnimatableNone: function (t) {
            let e = eJ(t);
            return eQ(t)(e.map(e0));
          },
        },
        e2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function e5(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(ti) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = e2.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let e3 = /\b([a-z-]*)\(.*?\)/gu,
        e9 = {
          ...e1,
          getAnimatableNone: (t) => {
            let e = t.match(e3);
            return e ? e.map(e5).join(" ") : t;
          },
        },
        e4 = {
          ...tf,
          color: eq,
          backgroundColor: eq,
          outlineColor: eq,
          fill: eq,
          stroke: eq,
          borderColor: eq,
          borderTopColor: eq,
          borderRightColor: eq,
          borderBottomColor: eq,
          borderLeftColor: eq,
          filter: e9,
          WebkitFilter: e9,
        },
        e6 = (t) => e4[t];
      function e7(t, e) {
        let i = e6(t);
        return (
          i !== e9 && (i = e1),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      class e8 extends e_ {
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && K(n)) {
              let r = (function t(e, i) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
                tB(
                  n <= 4,
                  'Max CSS variable fallback depth detected in property "'.concat(
                    e,
                    '". This may indicate a circular fallback dependency.'
                  )
                );
                let [r, s] = (function (t) {
                  let e = eP.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return ["--".concat(null != i ? i : n), r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return eT(t) ? parseFloat(t) : t;
                }
                return K(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if (!eS.has(i) || 2 !== t.length) return this.resolveNoneKeyframes();
          let [n, r] = t,
            s = eL(n),
            o = eL(r);
          if (s !== o) {
            if (eE(s) && eE(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || ew(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; )
                "string" == typeof t[r] &&
                  "none" !== t[r] &&
                  "0" !== t[r] &&
                  (n = t[r]),
                  r++;
              if (n && i) for (let r of e) t[r] = e7(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eV[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = eV[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach((t) => {
                let [i, n] = t;
                e.getValue(i).set(n);
              }),
            this.resolveNoneKeyframes();
        }
        constructor(t, e, i, n) {
          super(t, e, i, n, null == n ? void 0 : n.owner, !0);
        }
      }
      let it = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (e1.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class ie {
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eB(), eI()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              let s = t[t.length - 1],
                o = it(r, e),
                a = it(s, e);
              return (
                tB(
                  o === a,
                  "You are trying to animate "
                    .concat(e, ' from "')
                    .concat(r, '" to "')
                    .concat(s, '". ')
                    .concat(
                      r,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(r, " to a value animatable to ")
                    .concat(s, " via the `style` property.")
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, r)
          ) {
            if (ev.current || !s) {
              null == a || a(ey(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
      }
      function ii(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0;
      }
      function ir(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let is = ["duration", "bounce"],
        io = ["stiffness", "damping", "mass"];
      function ia(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function il(t) {
        let e,
          { keyframes: i, restDelta: n, restSpeed: r, ...s } = t,
          o = i[0],
          a = i[i.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ia(t, io) && ia(t, is)) {
              let i = (function (t) {
                let e,
                  i,
                  {
                    duration: n = 800,
                    bounce: r = 0.25,
                    velocity: s = 0,
                    mass: o = 1,
                  } = t;
                tB(n <= el(10), "Spring duration must be 10 seconds or less");
                let a = 1 - r;
                (a = $(0.05, 1, a)),
                  (n = $(0.01, 10, eu(n))),
                  a < 1
                    ? ((e = (t) => {
                        let e = t * a,
                          i = e * n;
                        return 0.001 - ((e - s) / ir(t, a)) * Math.exp(-i);
                      }),
                      (i = (t) => {
                        let i = t * a * n,
                          r = Math.pow(a, 2) * Math.pow(t, 2) * n,
                          o = ir(Math.pow(t, 2), a);
                        return (
                          ((i * s + s - r) *
                            Math.exp(-i) *
                            (-e(t) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((e = (t) =>
                        -0.001 + Math.exp(-t * n) * ((t - s) * n + 1)),
                      (i = (t) => n * n * (s - t) * Math.exp(-t * n)));
                let l = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(e, i, 5 / n);
                if (((n = el(n)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: n };
                {
                  let t = Math.pow(l, 2) * o;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(o * t),
                    duration: n,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -eu(s.velocity || 0) }),
          m = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          g = a - o,
          y = eu(Math.sqrt(u / c)),
          b = 5 > Math.abs(g);
        if ((r || (r = b ? 0.01 : 2), n || (n = b ? 0.005 : 0.5), v < 1)) {
          let t = ir(y, v);
          e = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          e = (t) => a - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          e = (e) => {
            let i = Math.exp(-v * y * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((m + v * y * g) * Math.sinh(n) + t * g * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (f && d) || null,
          next: (t) => {
            let i = e(t);
            if (f) l.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = v < 1 ? ii(e, t, i) : 0);
              let o = Math.abs(s) <= r,
                u = Math.abs(a - i) <= n;
              l.done = o && u;
            }
            return (l.value = l.done ? a : i), l;
          },
        };
      }
      function iu(t) {
        let e,
          i,
          {
            keyframes: n,
            velocity: r = 0,
            power: s = 0.8,
            timeConstant: o = 325,
            bounceDamping: a = 10,
            bounceStiffness: l = 500,
            modifyTarget: u,
            min: h,
            max: c,
            restDelta: d = 0.5,
            restSpeed: p,
          } = t,
          f = n[0],
          m = { done: !1, value: f },
          v = (t) => (void 0 !== h && t < h) || (void 0 !== c && t > c),
          g = (t) =>
            void 0 === h
              ? c
              : void 0 === c
              ? h
              : Math.abs(h - t) < Math.abs(c - t)
              ? h
              : c,
          y = s * r,
          b = f + y,
          x = void 0 === u ? b : u(b);
        x !== b && (y = x - f);
        let w = (t) => -y * Math.exp(-t / o),
          T = (t) => x + w(t),
          P = (t) => {
            let e = w(t),
              i = T(t);
            (m.done = Math.abs(e) <= d), (m.value = m.done ? x : i);
          },
          S = (t) => {
            v(m.value) &&
              ((e = t),
              (i = il({
                keyframes: [m.value, g(m.value)],
                velocity: ii(T, t, m.value),
                damping: a,
                stiffness: l,
                restDelta: d,
                restSpeed: p,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let n = !1;
              return (i || void 0 !== e || ((n = !0), P(t), S(t)),
              void 0 !== e && t >= e)
                ? i.next(t - e)
                : (n || P(t), m);
            },
          }
        );
      }
      let ih = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function ic(t, e, i, n) {
        if (t === e && i === n) return tB;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = ih((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ih(r(t), e, n));
      }
      let id = ic(0.42, 0, 1, 1),
        ip = ic(0, 0, 0.58, 1),
        im = ic(0.42, 0, 0.58, 1),
        iv = (t) => Array.isArray(t) && "number" != typeof t[0],
        ig = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iy = (t) => (e) => 1 - t(1 - e),
        ib = (t) => 1 - Math.sin(Math.acos(t)),
        ix = iy(ib),
        iw = ig(ib),
        iT = ic(0.33, 1.53, 0.69, 0.99),
        iP = iy(iT),
        iS = ig(iP),
        iE = {
          linear: tB,
          easeIn: id,
          easeInOut: im,
          easeOut: ip,
          circIn: ib,
          circInOut: iw,
          circOut: ix,
          backIn: iP,
          backInOut: iS,
          backOut: iT,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * iP(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        iA = (t) => {
          if (Array.isArray(t)) {
            tB(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return ic(e, i, n, r);
          }
          return "string" == typeof t
            ? (tB(void 0 !== iE[t], "Invalid easing type '".concat(t, "'")),
              iE[t])
            : t;
        },
        iR = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        iC = (t, e, i) => t + (e - t) * i;
      function iM(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let iV = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        ik = [eY, ez, eX],
        iD = (t) => ik.find((e) => e.test(t));
      function iL(t) {
        let e = iD(t);
        tB(
          !!e,
          "'".concat(
            t,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        let i = e.parse(t);
        return (
          e === eX &&
            (i = (function (t) {
              let { hue: e, saturation: i, lightness: n, alpha: r } = t;
              (e /= 360), (n /= 100);
              let s = 0,
                o = 0,
                a = 0;
              if ((i /= 100)) {
                let t = n < 0.5 ? n * (1 + i) : n + i - n * i,
                  r = 2 * n - t;
                (s = iM(r, t, e + 1 / 3)),
                  (o = iM(r, t, e)),
                  (a = iM(r, t, e - 1 / 3));
              } else s = o = a = n;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let iO = (t, e) => {
        let i = iL(t),
          n = iL(e),
          r = { ...i };
        return (t) => (
          (r.red = iV(i.red, n.red, t)),
          (r.green = iV(i.green, n.green, t)),
          (r.blue = iV(i.blue, n.blue, t)),
          (r.alpha = iC(i.alpha, n.alpha, t)),
          ez.transform(r)
        );
      };
      function ij(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function iF(t, e) {
        return (i) => iC(t, e, i);
      }
      function iI(t) {
        return "number" == typeof t
          ? iF
          : "string" == typeof t
          ? K(t)
            ? ij
            : eq.test(t)
            ? iO
            : iU
          : Array.isArray(t)
          ? iB
          : "object" == typeof t
          ? eq.test(t)
            ? iO
            : i_
          : ij;
      }
      function iB(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => iI(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function i_(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = iI(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let iU = (t, e) => {
        let i = e1.createTransformer(e),
          n = e$(t),
          r = e$(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? t$(
              iB(
                (function (t, e) {
                  var i;
                  let n = [],
                    r = { color: 0, var: 0, number: 0 };
                  for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s],
                      a = t.indexes[o][r[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (n[s] = l), r[o]++;
                  }
                  return n;
                })(n, r),
                r.values
              ),
              i
            )
          : (tB(
              !0,
              "Complex values '"
                .concat(t, "' and '")
                .concat(
                  e,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                )
            ),
            ij(t, e));
      };
      function iN(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? iC(t, e, i)
          : iI(t)(t, e);
      }
      function iH(t) {
        let {
            duration: e = 300,
            keyframes: i,
            times: n,
            ease: r = "easeInOut",
          } = t,
          s = iv(r) ? r.map(iA) : iA(r),
          o = { done: !1, value: i[0] },
          a = (function (t, e) {
            let {
                clamp: i = !0,
                ease: n,
                mixer: r,
              } = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
              s = t.length;
            if (
              (tB(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || iN,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = t$(Array.isArray(e) ? e[i] || tB : e, s)),
                    n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = iR(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l($(t[0], t[s - 1], e)) : l;
          })(
            (n && n.length === i.length
              ? n
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = iR(0, e, n);
                        t.push(iC(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(i)
            ).map((t) => t * e),
            i,
            {
              ease: Array.isArray(s)
                ? s
                : i.map(() => s || im).splice(0, i.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      let iW = (t) => {
          let e = (e) => {
            let { timestamp: i } = e;
            return t(i);
          };
          return {
            start: () => t_.update(e, !0),
            stop: () => tU(e),
            now: () => (tN.isProcessing ? tN.timestamp : ex.now()),
          };
        },
        iz = { decay: iu, inertia: iu, tween: iH, keyframes: iH, spring: il },
        iY = (t) => t / 100;
      class iX extends ie {
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = iz[n] || iH;
          l !== iH &&
            "number" != typeof t[0] &&
            ((e = t$(iY, iN(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / h))
                  : "mirror" === p && (b = s)),
              (y = $(0, 1, i) * h);
          }
          let x = g ? { done: !1, value: a[0] } : b.next(y);
          o && (x.value = o(x.value));
          let { done: w } = x;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            T && void 0 !== n && (x.value = ey(a, this.options, n)),
            m && m(x.value),
            T && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? eu(t.calculatedDuration) : 0;
        }
        get time() {
          return eu(this.currentTime);
        }
        set time(t) {
          (t = el(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = eu(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = iW, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          let { onStop: t } = this.options;
          t && t();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        constructor({ KeyframeResolver: t = e_, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: i, motionValue: n, keyframes: r } = this.options,
            s = (t, e) => this.onKeyframesResolved(t, e);
          i && n && n.owner
            ? (this.resolver = n.owner.resolveKeyframes(r, s, i, n))
            : (this.resolver = new t(r, s, i, n)),
            this.resolver.scheduleResolve();
        }
      }
      let iq = (t) => Array.isArray(t) && "number" == typeof t[0],
        iK = (t) => {
          let [e, i, n, r] = t;
          return "cubic-bezier("
            .concat(e, ", ")
            .concat(i, ", ")
            .concat(n, ", ")
            .concat(r, ")");
        },
        iG = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iK([0, 0.65, 0.55, 1]),
          circOut: iK([0.55, 0, 1, 0.45]),
          backIn: iK([0.31, 0.01, 0.66, -0.59]),
          backOut: iK([0.33, 1.53, 0.69, 0.99]),
        };
      function iZ(t) {
        return i$(t) || iG.easeOut;
      }
      function i$(t) {
        if (t) return iq(t) ? iK(t) : Array.isArray(t) ? t.map(iZ) : iG[t];
      }
      let iJ =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === r && (r = o()), r)),
        iQ = new Set(["opacity", "clipPath", "filter", "transform"]);
      class i0 extends ie {
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in iG) ||
                iq(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (t, e) {
                let i = new iX({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let h = (function (t, e, i) {
            let {
                delay: n = 0,
                duration: r = 300,
                repeat: s = 0,
                repeatType: o = "loop",
                ease: a,
                times: l,
              } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
              u = { [e]: i };
            l && (u.offset = l);
            let h = i$(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (h.startTime = ex.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(ey(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return eu(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return eu(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = el(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tB;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tB;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  ...l
                } = this.options,
                u = new iX({
                  ...l,
                  keyframes: i,
                  duration: n,
                  type: r,
                  ease: s,
                  times: o,
                  isGenerator: !0,
                }),
                h = el(this.time);
              t.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            iJ() &&
            i &&
            iQ.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new e8(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
      }
      let i1 = function (t, e, i) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r = arguments.length > 4 ? arguments[4] : void 0,
          s = arguments.length > 5 ? arguments[5] : void 0;
        return (o) => {
          let a = em(n, t) || {},
            l = a.delay || n.delay || 0,
            { elapsed: u = 0 } = n;
          u -= el(l);
          let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: s ? void 0 : r,
          };
          !(function (t) {
            let {
              when: e,
              delay: i,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: s,
              repeat: o,
              repeatType: a,
              repeatDelay: l,
              from: u,
              elapsed: h,
              ...c
            } = t;
            return !!Object.keys(c).length;
          })(a) && (h = { ...h, ...ef(t, h) }),
            h.duration && (h.duration = el(h.duration)),
            h.repeatDelay && (h.repeatDelay = el(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
          let c = !1;
          if (
            ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
              ((h.duration = 0), 0 !== h.delay || (c = !0)),
            (ev.current || g.skipAnimations) &&
              ((c = !0), (h.duration = 0), (h.delay = 0)),
            c && !s && void 0 !== e.get())
          ) {
            let t = ey(h.keyframes, a);
            if (void 0 !== t) {
              t_.update(() => {
                h.onUpdate(t), h.onComplete();
              });
              return;
            }
          }
          return !s && i0.supports(h) ? new i0(h) : new iX(h);
        };
      };
      function i2(t) {
        return !!(H(t) && t.add);
      }
      function i5(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i3(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class i9 {
        add(t) {
          return i5(this.subscriptions, t), () => i3(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
        constructor() {
          this.subscriptions = [];
        }
      }
      let i4 = (t) => !isNaN(parseFloat(t)),
        i6 = { current: void 0 };
      class i7 {
        setCurrent(t) {
          (this.current = t), (this.updatedAt = ex.now());
        }
        setPrevFrameValue() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.current;
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i9());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  t_.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return i6.current && i6.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = ex.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        constructor(t, e = {}) {
          var i = this;
          (this.version = "11.1.5"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = function (t) {
              let e =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                n = ex.now();
              i.updatedAt !== n && i.setPrevFrameValue(),
                (i.prev = i.current),
                i.setCurrent(t),
                i.current !== i.prev &&
                  i.events.change &&
                  i.events.change.notify(i.current),
                e &&
                  i.events.renderRequest &&
                  i.events.renderRequest.notify(i.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = i4(this.current)),
            (this.owner = e.owner);
        }
      }
      function i8(t, e) {
        return new i7(t, e);
      }
      function nt(t, e) {
        var i;
        let {
            delay: n = 0,
            transitionOverride: r,
            type: s,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          u = t.getValue("willChange");
        r && (o = r);
        let h = [],
          c = s && t.animationState && t.animationState.getState()[s];
        for (let e in l) {
          let r = t.getValue(
              e,
              null !== (i = t.latestValues[e]) && void 0 !== i ? i : null
            ),
            s = l[e];
          if (
            void 0 === s ||
            (c &&
              (function (t, e) {
                let { protectedKeys: i, needsAnimating: n } = t,
                  r = i.hasOwnProperty(e) && !0 !== n[e];
                return (n[e] = !1), r;
              })(c, e))
          )
            continue;
          let a = { delay: n, elapsed: 0, ...em(o || {}, e) },
            d = !1;
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[v];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e);
              null !== t && ((a.elapsed = t), (d = !0));
            }
          }
          r.start(
            i1(
              e,
              r,
              s,
              t.shouldReduceMotion && U.has(e) ? { type: !1 } : a,
              t,
              d
            )
          );
          let p = r.animation;
          p && (i2(u) && (u.add(e), p.then(() => u.remove(e))), h.push(p));
        }
        return (
          a &&
            Promise.all(h).then(() => {
              t_.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = ea(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = tj(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, i8(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function ne(t, e) {
        var i;
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = ea(
            t,
            e,
            "exit" === n.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (s = n.transitionOverride);
        let o = r ? () => Promise.all(nt(t, r, n)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? function () {
                  let i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    {
                      delayChildren: r = 0,
                      staggerChildren: o,
                      staggerDirection: a,
                    } = s;
                  return (function (t, e) {
                    let i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      n =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      s = arguments.length > 5 ? arguments[5] : void 0,
                      o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l =
                        1 === r
                          ? function () {
                              let t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return t * n;
                            }
                          : function () {
                              let t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return a - t * n;
                            };
                    return (
                      Array.from(t.variantChildren)
                        .sort(ni)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              ne(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(n.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ni(t, e) {
        return t.sortNodePosition(e);
      }
      let nn = [...A].reverse(),
        nr = A.length;
      function ns() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class no extends t5 {
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), E(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map((e) => {
                        let { animation: i, options: n } = e;
                        return (function (t, e) {
                          let i,
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => ne(t, e, n)));
                          else if ("string" == typeof e) i = ne(t, e, n);
                          else {
                            let r =
                              "function" == typeof e ? ea(t, e, n.custom) : e;
                            i = Promise.all(nt(t, r, n));
                          }
                          return i.then(() => {
                            t_.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, i, n);
                      })
                    ),
                  i = {
                    animate: ns(!0),
                    whileInView: ns(),
                    whileHover: ns(),
                    whileTap: ns(),
                    whileDrag: ns(),
                    whileFocus: ns(),
                    exit: ns(),
                  },
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = ea(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < nr; e++) {
                    var d;
                    let p = nn[e],
                      f = i[p],
                      m = void 0 !== o[p] ? o[p] : a[p],
                      v = S(m),
                      g = p === s ? f.isActive : null;
                    !1 === g && (c = e);
                    let y = m === a[p] && m !== o[p] && v;
                    if (
                      (y && n && t.manuallyAnimateOnMount && (y = !1),
                      (f.protectedKeys = { ...h }),
                      (!f.isActive && null === g) ||
                        (!m && !f.prevProp) ||
                        E(m) ||
                        "boolean" == typeof m)
                    )
                      continue;
                    let b =
                        ((d = f.prevProp),
                        ("string" == typeof m
                          ? m !== d
                          : !!Array.isArray(m) && !eo(m, d)) ||
                          (p === s && f.isActive && !y && v) ||
                          (e > c && v)),
                      x = !1,
                      w = Array.isArray(m) ? m : [m],
                      T = w.reduce(r(p), {});
                    !1 === g && (T = {});
                    let { prevResolvedValues: P = {} } = f,
                      A = { ...P, ...T },
                      R = (e) => {
                        (b = !0),
                          u.has(e) && ((x = !0), u.delete(e)),
                          (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in A) {
                      let e = T[t],
                        i = P[t];
                      if (!h.hasOwnProperty(t))
                        (tL(e) && tL(i) ? eo(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? R(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                          ? R(t)
                          : u.add(t);
                    }
                    (f.prevProp = m),
                      (f.prevResolvedValues = T),
                      f.isActive && (h = { ...h, ...T }),
                      n && t.blockInitialAnimation && (b = !1),
                      b &&
                        (!y || x) &&
                        l.push(
                          ...w.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
      }
      let na = 0;
      class nl extends t5 {
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.id = na++);
        }
      }
      let nu = (t, e) => Math.abs(t - e);
      class nh {
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), tU(this.updatePoint);
        }
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = np(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(nu(t.x, e.x) ** 2 + nu(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = tN;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = nc(e, this.transformPagePoint)),
                t_.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = np(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : nc(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !tX(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = nc(tq(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = tN;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, np(s, this.history)),
            (this.removeListeners = t$(
              tG(this.contextWindow, "pointermove", this.handlePointerMove),
              tG(this.contextWindow, "pointerup", this.handlePointerUp),
              tG(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
      }
      function nc(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function nd(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function np(t, e) {
        let { point: i } = t;
        return {
          point: i,
          delta: nd(i, nf(e)),
          offset: nd(i, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = nf(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > el(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = eu(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function nf(t) {
        return t[t.length - 1];
      }
      function nm(t) {
        return t.max - t.min;
      }
      function nv(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(t - e) <= i;
      }
      function ng(t, e, i) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (t.origin = n),
          (t.originPoint = iC(e.min, e.max, t.origin)),
          (t.scale = nm(i) / nm(e)),
          (nv(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = iC(i.min, i.max, t.origin) - t.originPoint),
          (nv(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function ny(t, e, i, n) {
        ng(t.x, e.x, i.x, n ? n.originX : void 0),
          ng(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function nb(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + nm(e));
      }
      function nx(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + nm(e));
      }
      function nw(t, e, i) {
        nx(t.x, e.x, i.x), nx(t.y, e.y, i.y);
      }
      function nT(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function nP(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function nS(t, e, i) {
        return { min: nE(t, e), max: nE(t, i) };
      }
      function nE(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let nA = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        nR = () => ({ x: nA(), y: nA() }),
        nC = () => ({ min: 0, max: 0 }),
        nM = () => ({ x: nC(), y: nC() });
      function nV(t) {
        return [t("x"), t("y")];
      }
      function nk(t) {
        let { top: e, left: i, right: n, bottom: r } = t;
        return { x: { min: i, max: n }, y: { min: e, max: r } };
      }
      function nD(t) {
        return void 0 === t || 1 === t;
      }
      function nL(t) {
        let { scale: e, scaleX: i, scaleY: n } = t;
        return !nD(e) || !nD(i) || !nD(n);
      }
      function nO(t) {
        return (
          nL(t) ||
          nj(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function nj(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function nF(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function nI(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          n = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0;
        (t.min = nF(t.min, e, i, n, r)), (t.max = nF(t.max, e, i, n, r));
      }
      function nB(t, e) {
        let { x: i, y: n } = e;
        nI(t.x, i.translate, i.scale, i.originPoint),
          nI(t.y, n.translate, n.scale, n.originPoint);
      }
      function n_(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function nU(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nN(t, e, i) {
        let [n, r, s] = i,
          o = void 0 !== e[s] ? e[s] : 0.5,
          a = iC(t.min, t.max, o);
        nI(t, e[n], e[r], a, e.scale);
      }
      let nH = ["x", "scaleX", "originX"],
        nW = ["y", "scaleY", "originY"];
      function nz(t, e) {
        nN(t.x, e, nH), nN(t.y, e, nW);
      }
      function nY(t, e) {
        return nk(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let nX = (t) => {
          let { current: e } = t;
          return e ? e.ownerDocument.defaultView : null;
        },
        nq = new WeakMap();
      class nK {
        start(t) {
          let { snapToCursor: e = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new nh(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tq(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = t1(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  nV((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tl.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = nm(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && r(t, e);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 10,
                      i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                nV((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: nX(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && r(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nG(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, e, i) {
              let { min: n, max: r } = e;
              return (
                void 0 !== n && t < n
                  ? (t = i ? iC(n, t, i.min) : Math.max(t, n))
                  : void 0 !== r &&
                    t > r &&
                    (t = i ? iC(r, t, i.max) : Math.min(t, r)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && P(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (t, e) {
                let { top: i, left: n, bottom: r, right: s } = e;
                return { x: nT(t.x, n, s), y: nT(t.y, i, r) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0.35;
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: nS(t, "left", "right"), y: nS(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nV((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !P(e)) return !1;
          let n = e.current;
          tB(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = nY(t, i),
                { scroll: r } = e;
              return r && (nU(n.x, r.offset.x), nU(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: nP((t = r.layout.layoutBox).x, s.x), y: nP(t.y, s.y) };
          if (i) {
            let t = i(
              (function (t) {
                let { x: e, y: i } = t;
                return { top: i.min, right: e.max, bottom: i.max, left: e.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = nk(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nV((o) => {
              if (!nG(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(i1(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          nV((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          nV((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag".concat(t.toUpperCase()),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          nV((e) => {
            let { drag: i } = this.getProps();
            if (!nG(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - iC(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!P(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          nV((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = nm(t),
                  r = nm(e);
                return (
                  r > n
                    ? (i = iR(e.min, e.max - n, t.min))
                    : n > r && (i = iR(t.min, t.max - r, e.min)),
                  $(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            nV((e) => {
              if (!nG(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(iC(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nq.set(this.visualElement, this);
          let t = tG(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              P(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let r = tY(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener("didUpdate", (t) => {
              let { delta: e, hasLayoutChanged: i } = t;
              this.isDragging &&
                i &&
                (nV((t) => {
                  let i = this.getAxisMotionValue(t);
                  i &&
                    ((this.originPoint[t] += e[t].translate),
                    i.set(i.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = nM()),
            (this.visualElement = t);
        }
      }
      function nG(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class nZ extends t5 {
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tB);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
        constructor(t) {
          super(t),
            (this.removeGroupControls = tB),
            (this.removeListeners = tB),
            (this.controls = new nK(t));
        }
      }
      let n$ = (t) => (e, i) => {
        t && t(e, i);
      };
      class nJ extends t5 {
        onPointerDown(t) {
          this.session = new nh(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nX(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: n$(t),
            onStart: n$(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && n(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = tG(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
        constructor() {
          super(...arguments), (this.removePointerDownListener = tB);
        }
      }
      let nQ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function n0(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let n1 = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tu.test(t)) return t;
            t = parseFloat(t);
          }
          let i = n0(t, e.target.x),
            n = n0(t, e.target.y);
          return "".concat(i, "% ").concat(n, "%");
        },
      };
      class n2 extends l.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(B, n3),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nQ.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    t_.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            w.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function n5(t) {
        let [e, i] = (function () {
            let t = (0, l.useContext)(c);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, l.useId)();
            return (
              (0, l.useEffect)(() => n(r), []),
              !e && i ? [!1, () => i && i(r)] : [!0]
            );
          })(),
          n = (0, l.useContext)(L);
        return (0, a.jsx)(n2, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, l.useContext)(O),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let n3 = {
          borderRadius: {
            ...n1,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: n1,
          borderTopRightRadius: n1,
          borderBottomLeftRadius: n1,
          borderBottomRightRadius: n1,
          boxShadow: {
            correct: (t, e) => {
              let { treeScale: i, projectionDelta: n } = e,
                r = e1.parse(t);
              if (r.length > 5) return t;
              let s = e1.createTransformer(t),
                o = "number" != typeof r[0] ? 1 : 0,
                a = n.x.scale * i.x,
                l = n.y.scale * i.y;
              (r[0 + o] /= a), (r[1 + o] /= l);
              let u = iC(a, l, 0.5);
              return (
                "number" == typeof r[2 + o] && (r[2 + o] /= u),
                "number" == typeof r[3 + o] && (r[3 + o] /= u),
                s(r)
              );
            },
          },
        },
        n9 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        n4 = n9.length,
        n6 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        n7 = (t) => "number" == typeof t || tu.test(t);
      function n8(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rt = ri(0, 0.5, ix),
        re = ri(0.5, 0.95, tB);
      function ri(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(iR(t, e, n)));
      }
      function rn(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rr(t, e) {
        rn(t.x, e.x), rn(t.y, e.y);
      }
      function rs(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function ro(t, e, i, n, r) {
        let [s, o, a] = i;
        !(function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            r = arguments.length > 4 ? arguments[4] : void 0,
            s =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : t,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : t;
          if (
            (tl.test(e) &&
              ((e = parseFloat(e)), (e = iC(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = iC(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = rs(t.min, e, i, a, r)),
            (t.max = rs(t.max, e, i, a, r));
        })(t, e[s], e[o], e[a], e.scale, n, r);
      }
      let ra = ["x", "scaleX", "originX"],
        rl = ["y", "scaleY", "originY"];
      function ru(t, e, i, n) {
        ro(t.x, e, ra, i ? i.x : void 0, n ? n.x : void 0),
          ro(t.y, e, rl, i ? i.y : void 0, n ? n.y : void 0);
      }
      function rh(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rc(t) {
        return rh(t.x) && rh(t.y);
      }
      function rd(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function rp(t) {
        return nm(t.x) / nm(t.y);
      }
      class rf {
        add(t) {
          i5(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (i3(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
        constructor() {
          this.members = [];
        }
      }
      function rm(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((r || s || o) &&
            (n = "translate3d("
              .concat(r, "px, ")
              .concat(s, "px, ")
              .concat(o, "px) ")),
          (1 !== e.x || 1 !== e.y) &&
            (n += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")),
          i)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: r,
            rotateY: s,
            skewX: o,
            skewY: a,
          } = i;
          t && (n = "perspective(".concat(t, "px) ").concat(n)),
            e && (n += "rotate(".concat(e, "deg) ")),
            r && (n += "rotateX(".concat(r, "deg) ")),
            s && (n += "rotateY(".concat(s, "deg) ")),
            o && (n += "skewX(".concat(o, "deg) ")),
            a && (n += "skewY(".concat(a, "deg) "));
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (
          (1 !== a || 1 !== l) &&
            (n += "scale(".concat(a, ", ").concat(l, ")")),
          n || "none"
        );
      }
      let rv = (t, e) => t.depth - e.depth;
      class rg {
        add(t) {
          i5(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          i3(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rv),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
      }
      let ry = ["", "X", "Y", "Z"],
        rb = { visibility: "hidden" },
        rx = 0,
        rw = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function rT(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function rP(t) {
        let {
          attachResizeListener: e,
          defaultParent: i,
          measureScroll: n,
          checkIsScrollRoot: r,
          resetTransform: s,
        } = t;
        return class {
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new i9()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t) {
            for (
              var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              i[n - 1] = arguments[n];
            let r = this.eventHandlers.get(t);
            r && r.notify(...i);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.root.hasTreeAnimated;
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = ex.now(),
                      n = (r) => {
                        let { timestamp: s } = r,
                          o = s - i;
                        o >= e && (tU(n), t(o - e));
                      };
                    return t_.read(n, !0), () => tU(n);
                  })(n, 250)),
                  nQ.hasAnimatedSinceResize &&
                    ((nQ.hasAnimatedSinceResize = !1), this.nodes.forEach(rD));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener("didUpdate", (t) => {
                  let {
                    delta: e,
                    hasLayoutChanged: i,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  } = t;
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let o =
                      this.options.transition || s.getDefaultTransition() || rU,
                    {
                      onLayoutAnimationStart: a,
                      onLayoutAnimationComplete: l,
                    } = s.getProps(),
                    u = !this.targetLayout || !rd(this.targetLayout, r) || n,
                    h = !i && n;
                  if (
                    this.options.layoutRoot ||
                    (this.resumeFrom && this.resumeFrom.instance) ||
                    h ||
                    (i && (u || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0)),
                      this.setAnimationOrigin(e, h);
                    let t = { ...em(o, "layout"), onPlay: a, onComplete: l };
                    (s.shouldReduceMotion || this.options.layoutRoot) &&
                      ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t);
                  } else
                    i || rD(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = r;
                });
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              tU(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rj),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate() {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rM);
              return;
            }
            this.isUpdating || this.nodes.forEach(rV),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(rk),
              this.nodes.forEach(rS),
              this.nodes.forEach(rE),
              this.clearAllSnapshots();
            let t = ex.now();
            (tN.delta = $(0, 1e3 / 60, t - tN.timestamp)),
              (tN.timestamp = t),
              (tN.isProcessing = !0),
              tH.update.process(tN),
              tH.preRender.process(tN),
              tH.render.process(tN),
              (tN.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), w.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rC), this.sharedNodes.forEach(rF);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              t_.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            t_.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = nM()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "measure",
              e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!s) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !rc(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              (e || nO(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure() {
            var t;
            let e =
                !(arguments.length > 0) ||
                void 0 === arguments[0] ||
                arguments[0],
              i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              e && (n = this.removeTransform(n)),
              rW((t = n).x),
              rW(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return nM();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (nU(e.x, i.offset.x), nU(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = nM();
            rr(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  rr(e, t);
                  let { scroll: i } = this.root;
                  i && (nU(e.x, -i.offset.x), nU(e.y, -i.offset.y));
                }
                nU(e.x, r.offset.x), nU(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = nM();
            rr(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                nz(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                nO(n.latestValues) && nz(i, n.latestValues);
            }
            return nO(this.latestValues) && nz(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = nM();
            rr(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !nO(i.latestValues)) continue;
              nL(i.latestValues) && i.updateSnapshot();
              let n = nM();
              rr(n, i.measurePageBox()),
                ru(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return nO(this.latestValues) && ru(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tN.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta() {
            var t, e, i, n;
            let r =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                r ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tN.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = nM()),
                    (this.relativeTargetOrigin = nM()),
                    nw(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    rr(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = nM()), (this.targetWithTransforms = nM())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (e = this.target),
                      (i = this.relativeTarget),
                      (n = this.relativeParent.target),
                      nb(e.x, i.x, n.x),
                      nb(e.y, i.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rr(this.target, this.layout.layoutBox),
                      nB(this.target, this.targetDelta))
                    : rr(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = nM()),
                      (this.relativeTargetOrigin = nM()),
                      nw(this.relativeTargetOrigin, this.target, t.target),
                      rr(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rw.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              nL(this.parent.latestValues) ||
              nj(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tN.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            rr(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i) {
              let n,
                r,
                s =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      nz(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), nB(t, r)),
                    s && nO(n.latestValues) && nz(t, n.latestValues));
                }
                (e.x = n_(e.x)), (e.y = n_(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = nM()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = nR()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = nR()),
              (this.projectionDeltaWithTransform = nR()));
            let u = this.projectionTransform;
            ny(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = rm(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rw.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender() {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t) {
            let e,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = nR();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !i);
            let a = nM(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(r_)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (i) => {
                let n = i / 1e3;
                if (
                  (rI(o.x, t.x, n),
                  rI(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  nw(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    rB(p.x, f.x, a.x, n),
                    rB(p.y, f.y, a.y, n),
                    e &&
                      ((u = this.relativeTarget),
                      (d = e),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    e || (e = nM()),
                    rr(e, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = iC(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          rt(n)
                        )),
                        (t.opacityExit = iC(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          re(n)
                        )))
                      : s &&
                        (t.opacity = iC(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < n4; r++) {
                      let s = "border".concat(n9[r], "Radius"),
                        o = n8(e, s),
                        a = n8(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || n7(o) === n7(a)
                          ? ((t[s] = Math.max(iC(n6(o), n6(a), n), 0)),
                            (tl.test(a) || tl.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = iC(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (tU(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = t_.update(() => {
                (nQ.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = H(t) ? t : i8(t);
                    return n.start(i1("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rz(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || nM();
                let e = nm(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = nm(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              rr(e, i),
                nz(e, r),
                ny(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rf()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote() {
            let {
                needsReset: t,
                transition: e,
                preserveFollowOpacity: i,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && rT("z", t, n, this.animationValues);
            for (let e = 0; e < ry.length; e++)
              rT("rotate".concat(ry[e]), t, n, this.animationValues),
                rT("skew".concat(ry[e]), t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rb;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  tF(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tF(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !nO(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = rm(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = ""
              .concat(100 * a.origin, "% ")
              .concat(100 * l.origin, "% 0")),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            B)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = B[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? tF(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rM),
              this.root.sharedNodes.clear();
          }
          constructor(t = {}, e = null == i ? void 0 : i()) {
            (this.id = rx++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (rw.totalNodes =
                    rw.resolvedTargetDeltas =
                    rw.recalculatedProjection =
                      0),
                  this.nodes.forEach(rA),
                  this.nodes.forEach(rL),
                  this.nodes.forEach(rO),
                  this.nodes.forEach(rR),
                  window.MotionDebug && window.MotionDebug.record(rw);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = e ? e.root || e : this),
              (this.path = e ? [...e.path, e] : []),
              (this.parent = e),
              (this.depth = e ? e.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rg());
          }
        };
      }
      function rS(t) {
        t.updateLayout();
      }
      function rE(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? nV((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = nm(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rz(r, i.layoutBox, e) &&
              nV((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = nm(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = nR();
          ny(o, e, i.layoutBox);
          let a = nR();
          s
            ? ny(a, t.applyTransform(n, !0), i.measuredBox)
            : ny(a, e, i.layoutBox);
          let l = !rc(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = nM();
                nw(o, i.layoutBox, r.layoutBox);
                let a = nM();
                nw(a, e, s.layoutBox),
                  rd(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rA(t) {
        rw.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function rR(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rC(t) {
        t.clearSnapshot();
      }
      function rM(t) {
        t.clearMeasurements();
      }
      function rV(t) {
        t.isLayoutDirty = !1;
      }
      function rk(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function rD(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function rL(t) {
        t.resolveTargetDelta();
      }
      function rO(t) {
        t.calcProjection();
      }
      function rj(t) {
        t.resetSkewAndRotation();
      }
      function rF(t) {
        t.removeLeadSnapshot();
      }
      function rI(t, e, i) {
        (t.translate = iC(e.translate, 0, i)),
          (t.scale = iC(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rB(t, e, i, n) {
        (t.min = iC(e.min, i.min, n)), (t.max = iC(e.max, i.max, n));
      }
      function r_(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rU = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rN = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rH = rN("applewebkit/") && !rN("chrome/") ? Math.round : tB;
      function rW(t) {
        (t.min = rH(t.min)), (t.max = rH(t.max));
      }
      function rz(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !nv(rp(e), rp(i), 0.2))
        );
      }
      let rY = rP({
          attachResizeListener: (t, e) => tY(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rX = { current: void 0 },
        rq = rP({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rX.current) {
              let t = new rY({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rX.current = t);
            }
            return rX.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        rK = { current: null },
        rG = { current: !1 },
        rZ = new WeakMap(),
        r$ = [...eD, eq, e1],
        rJ = (t) => r$.find(ek(t)),
        rQ = Object.keys(D),
        r0 = rQ.length,
        r1 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        r2 = R.length;
      class r5 {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        mount(t) {
          (this.current = t),
            rZ.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rG.current ||
              (function () {
                if (((rG.current = !0), d)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rK.current = t.matches);
                    t.addListener(e), e();
                  } else rK.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rK.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var t;
          for (let t in (rZ.delete(this.current),
          this.projection && this.projection.unmount(),
          tU(this.notifyUpdate),
          tU(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let e in this.features)
            null === (t = this.features[e]) || void 0 === t || t.unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = U.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && t_.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, i, n) {
          let r,
            s,
            { children: o, ...a } = t;
          for (let t = 0; t < r0; t++) {
            let e = rQ[t],
              {
                isEnabled: i,
                Feature: n,
                ProjectionNode: o,
                MeasureLayout: l,
              } = D[e];
            o && (r = o),
              i(a) &&
                (!this.features[e] && n && (this.features[e] = new n(this)),
                l && (s = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            r
          ) {
            this.projection = new r(
              this.latestValues,
              (function t(e) {
                if (e)
                  return !1 !== e.options.allowProjection
                    ? e.projection
                    : t(e.parent);
              })(this.parent)
            );
            let {
              layoutId: t,
              layout: e,
              drag: i,
              dragConstraints: s,
              layoutScroll: o,
              layoutRoot: l,
            } = a;
            this.projection.setOptions({
              layoutId: t,
              layout: e,
              alwaysMeasureLayout: !!i || (s && P(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof e ? e : "both",
              initialPromotionConfig: n,
              layoutScroll: o,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : nM();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < r1.length; e++) {
            let i = r1[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if (H(s)) t.addValue(r, s), i2(n) && n.add(r);
              else if (H(o))
                t.addValue(r, i8(s, { owner: t })), i2(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, i8(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < r2; t++) {
            let i = R[t],
              n = this.props[i];
            (S(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = i8(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (eT(n) || ew(n))
                ? (n = parseFloat(n))
                : !rJ(n) && e1.test(e) && (n = e7(t, e)),
              this.setBaseTarget(t, H(n) ? n.get() : n)),
            H(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = tD(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || H(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new i9()), this.events[t].add(e)
          );
        }
        notify(t) {
          for (
            var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            i[n - 1] = arguments[n];
          this.events[t] && this.events[t].notify(...i);
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, n) =>
            new this.KeyframeResolver(t, e, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = e_),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => t_.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = C(e)),
            (this.isVariantNode = M(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && H(e) && (e.set(a[t], !1), i2(u) && u.add(t));
          }
        }
      }
      class r3 extends r5 {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, e) {
          let { vars: i, style: n } = e;
          delete i[t], delete n[t];
        }
        constructor() {
          super(...arguments), (this.KeyframeResolver = e8);
        }
      }
      class r9 extends r3 {
        readValueFromInstance(t, e) {
          if (U.has(e)) {
            let t = e6(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (X(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, e) {
          let { transformPagePoint: i } = e;
          return nY(t, i);
        }
        build(t, e, i, n) {
          tm(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tV(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          H(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = "".concat(t));
            }));
        }
        renderInstance(t, e, i, n) {
          tR(t, e, i, n);
        }
        constructor() {
          super(...arguments), (this.type = "html");
        }
      }
      class r4 extends r3 {
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (U.has(e)) {
            let t = e6(e);
            return (t && t.default) || 0;
          }
          return (e = tC.has(e) ? e : m(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return nM();
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tk(t, e, i);
        }
        build(t, e, i, n) {
          tS(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          tM(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = tA(t.tagName)), super.mount(t);
        }
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
      }
      let r6 = (t, e) =>
          I(t)
            ? new r4(e, { enableHardwareAcceleration: !1 })
            : new r9(e, {
                allowProjection: t !== l.Fragment,
                enableHardwareAcceleration: !0,
              }),
        r7 = {
          animation: { Feature: no },
          exit: { Feature: nl },
          inView: { Feature: es },
          tap: { Feature: t8 },
          focus: { Feature: t4 },
          hover: { Feature: t9 },
          pan: { Feature: nJ },
          drag: { Feature: nZ, ProjectionNode: rq, MeasureLayout: n5 },
          layout: { ProjectionNode: rq, MeasureLayout: n5 },
        },
        r8 = (function (t) {
          function e(e) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (function (t) {
              let {
                preloadedFeatures: e,
                createVisualElement: i,
                useRender: n,
                useVisualState: r,
                Component: s,
              } = t;
              e &&
                (function (t) {
                  for (let e in t) D[e] = { ...D[e], ...t[e] };
                })(e);
              let o = (0, l.forwardRef)(function (t, o) {
                var m;
                let g;
                let y = {
                    ...(0, l.useContext)(u),
                    ...t,
                    layoutId: (function (t) {
                      let { layoutId: e } = t,
                        i = (0, l.useContext)(L).id;
                      return i && void 0 !== e ? i + "-" + e : e;
                    })(t),
                  },
                  { isStatic: b } = y,
                  x = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (C(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || S(e) ? e : void 0,
                          animate: S(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(h));
                    return (0, l.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [V(e), V(i)]
                    );
                  })(t),
                  T = r(t, b);
                if (!b && d) {
                  x.visualElement = (function (t, e, i, n) {
                    let { visualElement: r } = (0, l.useContext)(h),
                      s = (0, l.useContext)(f),
                      o = (0, l.useContext)(c),
                      a = (0, l.useContext)(u).reducedMotion,
                      d = (0, l.useRef)();
                    (n = n || s.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(t, {
                          visualState: e,
                          parent: r,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: a,
                        }));
                    let m = d.current;
                    (0, l.useInsertionEffect)(() => {
                      m && m.update(i, o);
                    });
                    let g = (0, l.useRef)(!!(i[v] && !window.HandoffComplete));
                    return (
                      p(() => {
                        m &&
                          (w.postRender(m.render),
                          g.current &&
                            m.animationState &&
                            m.animationState.animateChanges());
                      }),
                      (0, l.useEffect)(() => {
                        m &&
                          (m.updateFeatures(),
                          !g.current &&
                            m.animationState &&
                            m.animationState.animateChanges(),
                          g.current &&
                            ((g.current = !1), (window.HandoffComplete = !0)));
                      }),
                      m
                    );
                  })(s, T, y, i);
                  let t = (0, l.useContext)(O),
                    n = (0, l.useContext)(f).strict;
                  x.visualElement &&
                    (g = x.visualElement.loadFeatures(y, n, e, t));
                }
                return (0, a.jsxs)(h.Provider, {
                  value: x,
                  children: [
                    g && x.visualElement
                      ? (0, a.jsx)(g, { visualElement: x.visualElement, ...y })
                      : null,
                    n(
                      s,
                      t,
                      ((m = x.visualElement),
                      (0, l.useCallback)(
                        (t) => {
                          t && T.mount && T.mount(t),
                            m && (t ? m.mount(t) : m.unmount()),
                            o &&
                              ("function" == typeof o
                                ? o(t)
                                : P(o) && (o.current = t));
                        },
                        [m]
                      )),
                      T,
                      b,
                      x.visualElement
                    ),
                  ],
                });
              });
              return (o[j] = s), o;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, e, i, n) {
            let { forwardMotionProps: r = !1 } = e;
            return {
              ...(I(t) ? tW : tz),
              preloadedFeatures: i,
              useRender: (function () {
                let t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (e, i, n, r, s) => {
                  let { latestValues: o } = r,
                    a = (
                      I(e)
                        ? function (t, e, i, n) {
                            let r = (0, l.useMemo)(() => {
                              let i = tE();
                              return (
                                tS(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tA(n),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tg(e, t.style, t),
                                (r.style = { ...e, ...r.style });
                            }
                            return r;
                          }
                        : function (t, e, i) {
                            let n = {},
                              r = (function (t, e, i) {
                                let n = t.style || {},
                                  r = {};
                                return (
                                  tg(r, n, t),
                                  Object.assign(
                                    r,
                                    (function (t, e, i) {
                                      let { transformTemplate: n } = t;
                                      return (0, l.useMemo)(() => {
                                        let t = tv();
                                        return (
                                          tm(
                                            t,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            n
                                          ),
                                          Object.assign({}, t.vars, t.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  r
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((n.draggable = !1),
                                (r.userSelect =
                                  r.WebkitUserSelect =
                                  r.WebkitTouchCallout =
                                    "none"),
                                (r.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : "pan-".concat(
                                        "x" === t.drag ? "y" : "x"
                                      ))),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = r),
                              n
                            );
                          }
                    )(i, o, s, e),
                    u = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (tx(r) ||
                            (!0 === i && tb(r)) ||
                            (!e && !tb(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    h = e !== l.Fragment ? { ...u, ...a, ref: n } : {},
                    { children: c } = i,
                    d = (0, l.useMemo)(() => (H(c) ? c.get() : c), [c]);
                  return (0, l.createElement)(e, { ...h, children: d });
                };
              })(r),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, r7, r6)
        );
    },
    9703: function (t, e, i) {
      "use strict";
      i.d(e, {
        CR: function () {
          return o;
        },
        XA: function () {
          return s;
        },
        _T: function () {
          return r;
        },
        pi: function () {
          return n;
        },
      });
      var n = function () {
        return (n =
          Object.assign ||
          function (t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
              for (var r in (e = arguments[i]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      };
      function r(t, e) {
        var i = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            0 > e.indexOf(n) &&
            (i[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, n = Object.getOwnPropertySymbols(t);
            r < n.length;
            r++
          )
            0 > e.indexOf(n[r]) &&
              Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
              (i[n[r]] = t[n[r]]);
        return i;
      }
      function s(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          i = e && t[e],
          n = 0;
        if (i) return i.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && n >= t.length && (t = void 0),
                { value: t && t[n++], done: !t }
              );
            },
          };
        throw TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function o(t, e) {
        var i = "function" == typeof Symbol && t[Symbol.iterator];
        if (!i) return t;
        var n,
          r,
          s = i.call(t),
          o = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            n && !n.done && (i = s.return) && i.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        return o;
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
