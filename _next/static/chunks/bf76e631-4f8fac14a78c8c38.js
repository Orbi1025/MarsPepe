"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [370],
  {
    5392: function (t) {
      t.exports = (() => {
        var t,
          e,
          n,
          r,
          i,
          a,
          o,
          s,
          u,
          c,
          l,
          h,
          f,
          d,
          p,
          m,
          v,
          g,
          b,
          y,
          w,
          _,
          A,
          C,
          R,
          E,
          T,
          P,
          L,
          M,
          F,
          S,
          x,
          j,
          O,
          I,
          k,
          D,
          U,
          B,
          W,
          N = [
            ,
            (t, e, n) => {
              var r;
              n.r(e), n.d(e, { default: () => i });
              let i =
                ((r =
                  "undefined" != typeof document && document.currentScript
                    ? document.currentScript.src
                    : void 0),
                function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  function e() {
                    function t(t) {
                      let a = r;
                      (n = e = 0),
                        (r = new Map()),
                        a.forEach((e) => {
                          try {
                            e(t);
                          } catch (t) {
                            console.error(t);
                          }
                        }),
                        this.ob(),
                        i && i.Tb();
                    }
                    let e = 0,
                      n = 0,
                      r = new Map(),
                      i = null,
                      a = null;
                    (this.requestAnimationFrame = function (i) {
                      e || (e = requestAnimationFrame(t.bind(this)));
                      let a = ++n;
                      return r.set(a, i), a;
                    }),
                      (this.cancelAnimationFrame = function (t) {
                        r.delete(t),
                          e &&
                            0 == r.size &&
                            (cancelAnimationFrame(e), (e = 0));
                      }),
                      (this.Rb = function (t) {
                        a && (document.body.remove(a), (a = null)),
                          t ||
                            (((a =
                              document.createElement(
                                "div"
                              )).style.backgroundColor = "black"),
                            (a.style.position = "fixed"),
                            (a.style.right = 0),
                            (a.style.top = 0),
                            (a.style.color = "white"),
                            (a.style.padding = "4px"),
                            (a.innerHTML = "RIVE FPS"),
                            (t = function (t) {
                              a.innerHTML = "RIVE FPS " + t.toFixed(1);
                            }),
                            document.body.appendChild(a)),
                          (i = new (function () {
                            let e = 0,
                              n = 0;
                            this.Tb = function () {
                              var r = performance.now();
                              n
                                ? (++e,
                                  1e3 < (r -= n) &&
                                    (t((1e3 * e) / r), (e = n = 0)))
                                : ((n = r), (e = 0));
                            };
                          })());
                      }),
                      (this.Ob = function () {
                        a && (document.body.remove(a), (a = null)), (i = null);
                      }),
                      (this.ob = function () {});
                  }
                  function n(t) {
                    console.assert(!0);
                    let e = new Map(),
                      n = -1 / 0;
                    this.push = function (r) {
                      return (
                        (r = (r + ((1 << t) - 1)) >> t),
                        e.has(r) && clearTimeout(e.get(r)),
                        e.set(
                          r,
                          setTimeout(function () {
                            e.delete(r),
                              0 == e.length
                                ? (n = -1 / 0)
                                : r == n &&
                                  console.assert(
                                    (n = Math.max(...e.keys())) < r
                                  );
                          }, 1e3)
                        ),
                        (n = Math.max(r, n)) << t
                      );
                    };
                  }
                  t.ready = new Promise((t, e) => {
                    (d = t), (p = e);
                  });
                  let i = t.onRuntimeInitialized;
                  t.onRuntimeInitialized = function () {
                    i && i();
                    let e = t.decodeAudio;
                    t.decodeAudio = function (t, n) {
                      n((t = e(t)));
                    };
                    let n = t.decodeFont;
                    t.decodeFont = function (t, e) {
                      e((t = n(t)));
                    };
                    let r = t.FileAssetLoader;
                    (t.ptrToAsset = (e) => {
                      let n = t.ptrToFileAsset(e);
                      return n.isImage
                        ? t.ptrToImageAsset(e)
                        : n.isFont
                        ? t.ptrToFontAsset(e)
                        : n.isAudio
                        ? t.ptrToAudioAsset(e)
                        : n;
                    }),
                      (t.CustomFileAssetLoader = r.extend(
                        "CustomFileAssetLoader",
                        {
                          __construct: function (t) {
                            let { loadContents: e } = t;
                            this.__parent.__construct.call(this), (this.Gb = e);
                          },
                          loadContents: function (e, n) {
                            return (e = t.ptrToAsset(e)), this.Gb(e, n);
                          },
                        }
                      )),
                      (t.CDNFileAssetLoader = r.extend("CDNFileAssetLoader", {
                        __construct: function () {
                          this.__parent.__construct.call(this);
                        },
                        loadContents: function (e) {
                          var n, r, i;
                          let a = t.ptrToAsset(e);
                          return (
                            "" !== (e = a.cdnUuid) &&
                            ((n = a.cdnBaseUrl + "/" + e),
                            (r = (t) => {
                              a.decode(new Uint8Array(t.response));
                            }),
                            ((i = new XMLHttpRequest()).responseType =
                              "arraybuffer"),
                            (i.onreadystatechange = function () {
                              4 == i.readyState && 200 == i.status && r(i);
                            }),
                            i.open("GET", n, !0),
                            i.send(null),
                            !0)
                          );
                        },
                      })),
                      (t.FallbackFileAssetLoader = r.extend(
                        "FallbackFileAssetLoader",
                        {
                          __construct: function () {
                            this.__parent.__construct.call(this),
                              (this.kb = []);
                          },
                          addLoader: function (t) {
                            this.kb.push(t);
                          },
                          loadContents: function (t, e) {
                            for (let n of this.kb)
                              if (n.loadContents(t, e)) return !0;
                            return !1;
                          },
                        }
                      ));
                    let a = t.computeAlignment;
                    t.computeAlignment = function (t, e, n, r) {
                      let i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1;
                      return a.call(this, t, e, n, r, i);
                    };
                  };
                  let a =
                      "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                        " "
                      ),
                    o = new (function () {
                      function t() {
                        if (!e) {
                          let u;
                          var t = document.createElement("canvas"),
                            n = {
                              alpha: 1,
                              depth: 0,
                              stencil: 0,
                              antialias: 0,
                              premultipliedAlpha: 1,
                              preserveDrawingBuffer: 0,
                              powerPreference: "high-performance",
                              failIfMajorPerformanceCaveat: 0,
                              enableExtensionsByDefault: 1,
                              explicitSwapControl: 1,
                              renderViaOffscreenBackBuffer: 1,
                            };
                          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                            if (((u = t.getContext("webgl", n)), (r = 1), !u))
                              return (
                                console.log(
                                  "No WebGL support. Image mesh will not be drawn."
                                ),
                                !1
                              );
                          } else if ((u = t.getContext("webgl2", n))) r = 2;
                          else {
                            if (!(u = t.getContext("webgl", n)))
                              return (
                                console.log(
                                  "No WebGL support. Image mesh will not be drawn."
                                ),
                                !1
                              );
                            r = 1;
                          }
                          function s(t, e, n) {
                            if (
                              ((e = u.createShader(e)),
                              u.shaderSource(e, n),
                              u.compileShader(e),
                              0 < ((n = u.getShaderInfoLog(e)) || "").length)
                            )
                              throw n;
                            u.attachShader(t, e);
                          }
                          if (
                            ((i = Math.min(
                              (u = new Proxy(u, {
                                get: (t, e) =>
                                  t.isContextLost()
                                    ? (c ||
                                        (console.error(
                                          "Cannot render the mesh because the GL Context was lost. Tried to invoke ",
                                          e
                                        ),
                                        (c = !0)),
                                      "function" == typeof t[e])
                                      ? function () {}
                                      : void 0
                                    : "function" == typeof t[e]
                                    ? function () {
                                        for (
                                          var n = arguments.length,
                                            r = Array(n),
                                            i = 0;
                                          i < n;
                                          i++
                                        )
                                          r[i] = arguments[i];
                                        return t[e].apply(t, r);
                                      }
                                    : t[e],
                                set(t, e, n) {
                                  if (!t.isContextLost()) return (t[e] = n), !0;
                                  c ||
                                    (console.error(
                                      "Cannot render the mesh because the GL Context was lost. Tried to set property " +
                                        e
                                    ),
                                    (c = !0));
                                },
                              })).getParameter(u.MAX_RENDERBUFFER_SIZE),
                              u.getParameter(u.MAX_TEXTURE_SIZE)
                            )),
                            s(
                              (t = u.createProgram()),
                              u.VERTEX_SHADER,
                              "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }"
                            ),
                            s(
                              t,
                              u.FRAGMENT_SHADER,
                              "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }"
                            ),
                            u.bindAttribLocation(t, 0, "vertex"),
                            u.bindAttribLocation(t, 1, "uv"),
                            u.linkProgram(t),
                            0 <
                              ((n = u.getProgramInfoLog(t)) || "").trim()
                                .length)
                          )
                            throw n;
                          (a = u.getUniformLocation(t, "mat")),
                            (o = u.getUniformLocation(t, "translate")),
                            u.useProgram(t),
                            u.bindBuffer(u.ARRAY_BUFFER, u.createBuffer()),
                            u.enableVertexAttribArray(0),
                            u.enableVertexAttribArray(1),
                            u.bindBuffer(
                              u.ELEMENT_ARRAY_BUFFER,
                              u.createBuffer()
                            ),
                            u.uniform1i(u.getUniformLocation(t, "image"), 0),
                            u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                            (e = u);
                        }
                        return !0;
                      }
                      let e = null,
                        r = 0,
                        i = 0,
                        a = null,
                        o = null,
                        s = 0,
                        u = 0,
                        c = !1;
                      t(),
                        (this.hc = function () {
                          return t(), i;
                        }),
                        (this.Mb = function (t) {
                          e.deleteTexture && e.deleteTexture(t);
                        }),
                        (this.Lb = function (n) {
                          if (!t()) return null;
                          let i = e.createTexture();
                          return i
                            ? (e.bindTexture(e.TEXTURE_2D, i),
                              e.texImage2D(
                                e.TEXTURE_2D,
                                0,
                                e.RGBA,
                                e.RGBA,
                                e.UNSIGNED_BYTE,
                                n
                              ),
                              e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_WRAP_S,
                                e.CLAMP_TO_EDGE
                              ),
                              e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_WRAP_T,
                                e.CLAMP_TO_EDGE
                              ),
                              e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_MAG_FILTER,
                                e.LINEAR
                              ),
                              2 == r
                                ? (e.texParameteri(
                                    e.TEXTURE_2D,
                                    e.TEXTURE_MIN_FILTER,
                                    e.LINEAR_MIPMAP_LINEAR
                                  ),
                                  e.generateMipmap(e.TEXTURE_2D))
                                : e.texParameteri(
                                    e.TEXTURE_2D,
                                    e.TEXTURE_MIN_FILTER,
                                    e.LINEAR
                                  ),
                              i)
                            : null;
                        });
                      let l = new n(8),
                        h = new n(8),
                        f = new n(10),
                        d = new n(10);
                      (this.Qb = function (n, r, i, c, p) {
                        if (t()) {
                          var m = l.push(n),
                            v = h.push(r);
                          if (e.canvas) {
                            for (var g of ((e.canvas.width != m ||
                              e.canvas.height != v) &&
                              ((e.canvas.width = m), (e.canvas.height = v)),
                            e.viewport(0, v - r, n, r),
                            e.disable(e.SCISSOR_TEST),
                            e.clearColor(0, 0, 0, 0),
                            e.clear(e.COLOR_BUFFER_BIT),
                            e.enable(e.SCISSOR_TEST),
                            i.sort((t, e) => e.wb - t.wb),
                            (m = f.push(c)),
                            s != m &&
                              (e.bufferData(
                                e.ARRAY_BUFFER,
                                8 * m,
                                e.DYNAMIC_DRAW
                              ),
                              (s = m)),
                            (m = 0),
                            i))
                              e.bufferSubData(e.ARRAY_BUFFER, m, g.Ta),
                                (m += 4 * g.Ta.length);
                            for (var b of (console.assert(m == 4 * c), i))
                              e.bufferSubData(e.ARRAY_BUFFER, m, b.Db),
                                (m += 4 * b.Db.length);
                            for (var y of (console.assert(m == 8 * c),
                            (m = d.push(p)),
                            u != m &&
                              (e.bufferData(
                                e.ELEMENT_ARRAY_BUFFER,
                                2 * m,
                                e.DYNAMIC_DRAW
                              ),
                              (u = m)),
                            (g = 0),
                            i))
                              e.bufferSubData(
                                e.ELEMENT_ARRAY_BUFFER,
                                g,
                                y.indices
                              ),
                                (g += 2 * y.indices.length);
                            for (let t of (console.assert(g == 2 * p),
                            (y = 0),
                            (b = !0),
                            (m = g = 0),
                            i)) {
                              t.image.Ka != y &&
                                (e.bindTexture(
                                  e.TEXTURE_2D,
                                  t.image.Ja || null
                                ),
                                (y = t.image.Ka)),
                                t.mc
                                  ? (e.scissor(
                                      t.Ya,
                                      v - t.Za - t.jb,
                                      t.Ac,
                                      t.jb
                                    ),
                                    (b = !0))
                                  : b && (e.scissor(0, v - r, n, r), (b = !1)),
                                (i = 2 / n);
                              let s = -2 / r;
                              e.uniform4f(
                                a,
                                t.ha[0] * i * t.Ba,
                                t.ha[1] * s * t.Ca,
                                t.ha[2] * i * t.Ba,
                                t.ha[3] * s * t.Ca
                              ),
                                e.uniform2f(
                                  o,
                                  t.ha[4] * i * t.Ba +
                                    i * (t.Ya - t.ic * t.Ba) -
                                    1,
                                  t.ha[5] * s * t.Ca +
                                    s * (t.Za - t.jc * t.Ca) +
                                    1
                                ),
                                e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, m),
                                e.vertexAttribPointer(
                                  1,
                                  2,
                                  e.FLOAT,
                                  !1,
                                  0,
                                  m + 4 * c
                                ),
                                e.drawElements(
                                  e.TRIANGLES,
                                  t.indices.length,
                                  e.UNSIGNED_SHORT,
                                  g
                                ),
                                (m += 4 * t.Ta.length),
                                (g += 2 * t.indices.length);
                            }
                            console.assert(m == 4 * c),
                              console.assert(g == 2 * p);
                          }
                        }
                      }),
                        (this.canvas = function () {
                          return t() && e.canvas;
                        });
                    })(),
                    s = t.onRuntimeInitialized;
                  t.onRuntimeInitialized = function () {
                    function n(t) {
                      switch (t) {
                        case p.srcOver:
                          return "source-over";
                        case p.screen:
                          return "screen";
                        case p.overlay:
                          return "overlay";
                        case p.darken:
                          return "darken";
                        case p.lighten:
                          return "lighten";
                        case p.colorDodge:
                          return "color-dodge";
                        case p.colorBurn:
                          return "color-burn";
                        case p.hardLight:
                          return "hard-light";
                        case p.softLight:
                          return "soft-light";
                        case p.difference:
                          return "difference";
                        case p.exclusion:
                          return "exclusion";
                        case p.multiply:
                          return "multiply";
                        case p.hue:
                          return "hue";
                        case p.saturation:
                          return "saturation";
                        case p.color:
                          return "color";
                        case p.luminosity:
                          return "luminosity";
                      }
                    }
                    function r(t) {
                      return (
                        "rgba(" +
                        ((16711680 & t) >>> 16) +
                        "," +
                        ((65280 & t) >>> 8) +
                        "," +
                        ((255 & t) >>> 0) +
                        "," +
                        ((4278190080 & t) >>> 24) / 255 +
                        ")"
                      );
                    }
                    function i() {
                      for (let t of (0 < R.length &&
                        (o.Qb(C.drawWidth(), C.drawHeight(), R, E, T),
                        (R = []),
                        (T = E = 0),
                        C.reset(512, 512)),
                      A)) {
                        for (let e of t.H) e();
                        t.H = [];
                      }
                      A.clear();
                    }
                    s && s();
                    var u = t.RenderPaintStyle;
                    let c = t.RenderPath,
                      l = t.RenderPaint,
                      h = t.Renderer,
                      f = t.StrokeCap,
                      d = t.StrokeJoin,
                      p = t.BlendMode,
                      m = u.fill,
                      v = u.stroke,
                      g = t.FillRule.evenOdd,
                      b = 1;
                    var y = t.RenderImage.extend("CanvasRenderImage", {
                        __construct: function () {
                          let { la: t, xa: e } =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          this.__parent.__construct.call(this),
                            (this.Ka = b),
                            (b = (b + 1) & 2147483647 || 1),
                            (this.la = t),
                            (this.xa = e);
                        },
                        __destruct: function () {
                          this.Ja &&
                            (o.Mb(this.Ja), URL.revokeObjectURL(this.Wa)),
                            this.__parent.__destruct.call(this);
                        },
                        decode: function (t) {
                          var e = this;
                          e.xa && e.xa(e);
                          var n = new Image();
                          (e.Wa = URL.createObjectURL(
                            new Blob([t], { type: "image/png" })
                          )),
                            (n.onload = function () {
                              (e.Fb = n),
                                (e.Ja = o.Lb(n)),
                                e.size(n.width, n.height),
                                e.la && e.la(e);
                            }),
                            (n.src = e.Wa);
                        },
                      }),
                      w = c.extend("CanvasRenderPath", {
                        __construct: function () {
                          this.__parent.__construct.call(this),
                            (this.T = new Path2D());
                        },
                        rewind: function () {
                          this.T = new Path2D();
                        },
                        addPath: function (t, e, n, r, i, a, o) {
                          var s = this.T,
                            u = s.addPath;
                          t = t.T;
                          let c = new DOMMatrix();
                          (c.a = e),
                            (c.b = n),
                            (c.c = r),
                            (c.d = i),
                            (c.e = a),
                            (c.f = o),
                            u.call(s, t, c);
                        },
                        fillRule: function (t) {
                          this.Va = t;
                        },
                        moveTo: function (t, e) {
                          this.T.moveTo(t, e);
                        },
                        lineTo: function (t, e) {
                          this.T.lineTo(t, e);
                        },
                        cubicTo: function (t, e, n, r, i, a) {
                          this.T.bezierCurveTo(t, e, n, r, i, a);
                        },
                        close: function () {
                          this.T.closePath();
                        },
                      }),
                      _ = l.extend("CanvasRenderPaint", {
                        color: function (t) {
                          this.Xa = r(t);
                        },
                        thickness: function (t) {
                          this.Ib = t;
                        },
                        join: function (t) {
                          switch (t) {
                            case d.miter:
                              this.Ia = "miter";
                              break;
                            case d.round:
                              this.Ia = "round";
                              break;
                            case d.bevel:
                              this.Ia = "bevel";
                          }
                        },
                        cap: function (t) {
                          switch (t) {
                            case f.butt:
                              this.Ha = "butt";
                              break;
                            case f.round:
                              this.Ha = "round";
                              break;
                            case f.square:
                              this.Ha = "square";
                          }
                        },
                        style: function (t) {
                          this.Hb = t;
                        },
                        blendMode: function (t) {
                          this.Eb = n(t);
                        },
                        clearGradient: function () {
                          this.ja = null;
                        },
                        linearGradient: function (t, e, n, r) {
                          this.ja = { yb: t, zb: e, bb: n, cb: r, Ra: [] };
                        },
                        radialGradient: function (t, e, n, r) {
                          this.ja = {
                            yb: t,
                            zb: e,
                            bb: n,
                            cb: r,
                            Ra: [],
                            ec: !0,
                          };
                        },
                        addStop: function (t, e) {
                          this.ja.Ra.push({ color: t, stop: e });
                        },
                        completeGradient: function () {},
                        draw: function (t, e, n) {
                          let i = this.Hb;
                          var a = this.Xa,
                            o = this.ja;
                          if (
                            ((t.globalCompositeOperation = this.Eb), null != o)
                          ) {
                            a = o.yb;
                            var s = o.zb;
                            let e = o.bb;
                            var u = o.cb;
                            let n = o.Ra;
                            o.ec
                              ? ((o = e - a),
                                (u -= s),
                                (a = t.createRadialGradient(
                                  a,
                                  s,
                                  0,
                                  a,
                                  s,
                                  Math.sqrt(o * o + u * u)
                                )))
                              : (a = t.createLinearGradient(a, s, e, u));
                            for (let t = 0, e = n.length; t < e; t++)
                              (s = n[t]), a.addColorStop(s.stop, r(s.color));
                            (this.Xa = a), (this.ja = null);
                          }
                          switch (i) {
                            case v:
                              (t.strokeStyle = a),
                                (t.lineWidth = this.Ib),
                                (t.lineCap = this.Ha),
                                (t.lineJoin = this.Ia),
                                t.stroke(e);
                              break;
                            case m:
                              (t.fillStyle = a), t.fill(e, n);
                          }
                        },
                      });
                    let A = new Set(),
                      C = null,
                      R = [],
                      E = 0,
                      T = 0;
                    var P = (t.CanvasRenderer = h.extend("Renderer", {
                      __construct: function (t) {
                        this.__parent.__construct.call(this),
                          (this.S = [1, 0, 0, 1, 0, 0]),
                          (this.C = t.getContext("2d")),
                          (this.Ua = t),
                          (this.H = []);
                      },
                      save: function () {
                        this.S.push(...this.S.slice(this.S.length - 6)),
                          this.H.push(this.C.save.bind(this.C));
                      },
                      restore: function () {
                        let t = this.S.length - 6;
                        if (6 > t)
                          throw "restore() called without matching save().";
                        this.S.splice(t),
                          this.H.push(this.C.restore.bind(this.C));
                      },
                      transform: function (t, e, n, r, i, a) {
                        let o = this.S,
                          s = o.length - 6;
                        o.splice(
                          s,
                          6,
                          o[s] * t + o[s + 2] * e,
                          o[s + 1] * t + o[s + 3] * e,
                          o[s] * n + o[s + 2] * r,
                          o[s + 1] * n + o[s + 3] * r,
                          o[s] * i + o[s + 2] * a + o[s + 4],
                          o[s + 1] * i + o[s + 3] * a + o[s + 5]
                        ),
                          this.H.push(
                            this.C.transform.bind(this.C, t, e, n, r, i, a)
                          );
                      },
                      rotate: function (t) {
                        let e = Math.sin(t);
                        (t = Math.cos(t)), this.transform(t, e, -e, t, 0, 0);
                      },
                      _drawPath: function (t, e) {
                        this.H.push(
                          e.draw.bind(
                            e,
                            this.C,
                            t.T,
                            t.Va === g ? "evenodd" : "nonzero"
                          )
                        );
                      },
                      _drawRiveImage: function (t, e, r) {
                        var i = t.Fb;
                        if (i) {
                          var a = this.C,
                            o = n(e);
                          this.H.push(function () {
                            (a.globalCompositeOperation = o),
                              (a.globalAlpha = r),
                              a.drawImage(i, 0, 0),
                              (a.globalAlpha = 1);
                          });
                        }
                      },
                      _getMatrix: function (t) {
                        let e = this.S,
                          n = e.length - 6;
                        for (let r = 0; 6 > r; ++r) t[r] = e[n + r];
                      },
                      _drawImageMesh: function (e, r, a, s, u, c, l, h, f, d) {
                        var p = this.C.canvas.width,
                          m = this.C.canvas.height;
                        let v = f - l,
                          g = d - h;
                        (l = Math.max(l, 0)), (h = Math.max(h, 0));
                        let b = (f = Math.min(f, p)) - l,
                          y = (d = Math.min(d, m)) - h;
                        if (
                          (console.assert(b <= Math.min(v, p)),
                          console.assert(y <= Math.min(g, m)),
                          !(0 >= b || 0 >= y))
                        ) {
                          (f = b < v || y < g), (p = d = 1);
                          var w = Math.ceil(b * d),
                            _ = Math.ceil(y * p);
                          (m = o.hc()),
                            w > m && ((d *= m / w), (w = m)),
                            _ > m && ((p *= m / _), (_ = m)),
                            C ||
                              (C = new t.DynamicRectanizer(m)).reset(512, 512),
                            0 > (m = C.addRect(w, _)) &&
                              (i(),
                              A.add(this),
                              console.assert(0 <= (m = C.addRect(w, _))));
                          var P = 65535 & m,
                            L = m >> 16;
                          R.push({
                            ha: this.S.slice(this.S.length - 6),
                            image: e,
                            Ya: P,
                            Za: L,
                            ic: l,
                            jc: h,
                            Ac: w,
                            jb: _,
                            Ba: d,
                            Ca: p,
                            Ta: new Float32Array(s),
                            Db: new Float32Array(u),
                            indices: new Uint16Array(c),
                            mc: f,
                            wb: (e.Ka << 1) | (f ? 1 : 0),
                          }),
                            (E += s.length),
                            (T += c.length);
                          var M = this.C,
                            F = n(r);
                          this.H.push(function () {
                            M.save(),
                              M.resetTransform(),
                              (M.globalCompositeOperation = F),
                              (M.globalAlpha = a);
                            let t = o.canvas();
                            t && M.drawImage(t, P, L, w, _, l, h, b, y),
                              M.restore();
                          });
                        }
                      },
                      _clipPath: function (t) {
                        this.H.push(
                          this.C.clip.bind(
                            this.C,
                            t.T,
                            t.Va === g ? "evenodd" : "nonzero"
                          )
                        );
                      },
                      clear: function () {
                        A.add(this),
                          this.H.push(
                            this.C.clearRect.bind(
                              this.C,
                              0,
                              0,
                              this.Ua.width,
                              this.Ua.height
                            )
                          );
                      },
                      flush: function () {},
                      translate: function (t, e) {
                        this.transform(1, 0, 0, 1, t, e);
                      },
                    }));
                    (t.makeRenderer = function (t) {
                      let e = new P(t),
                        n = e.C;
                      return new Proxy(e, {
                        get(t, r) {
                          if ("function" == typeof t[r])
                            return function () {
                              for (
                                var e = arguments.length, n = Array(e), i = 0;
                                i < e;
                                i++
                              )
                                n[i] = arguments[i];
                              return t[r].apply(t, n);
                            };
                          if ("function" == typeof n[r]) {
                            if (-1 < a.indexOf(r))
                              throw Error(
                                "RiveException: Method call to '" +
                                  r +
                                  "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods."
                              );
                            return function () {
                              for (
                                var t = arguments.length, i = Array(t), a = 0;
                                a < t;
                                a++
                              )
                                i[a] = arguments[a];
                              e.H.push(n[r].bind(n, ...i));
                            };
                          }
                          return t[r];
                        },
                        set(t, r, i) {
                          if (r in n)
                            return (
                              e.H.push(() => {
                                n[r] = i;
                              }),
                              !0
                            );
                        },
                      });
                    }),
                      (t.decodeImage = function (t, e) {
                        new y({ la: e }).decode(t);
                      }),
                      (t.renderFactory = {
                        makeRenderPaint: function () {
                          return new _();
                        },
                        makeRenderPath: function () {
                          return new w();
                        },
                        makeRenderImage: function () {
                          let t = M;
                          return new y({
                            xa: () => {
                              t.total++;
                            },
                            la: () => {
                              if ((t.loaded++, t.loaded === t.total)) {
                                let e = t.ready;
                                e && (e(), (t.ready = null));
                              }
                            },
                          });
                        },
                      });
                    let L = t.load,
                      M = null;
                    t.load = function (e, n) {
                      let r =
                          !(arguments.length > 2) ||
                          void 0 === arguments[2] ||
                          arguments[2],
                        i = new t.FallbackFileAssetLoader();
                      return (
                        void 0 !== n && i.addLoader(n),
                        r && ((n = new t.CDNFileAssetLoader()), i.addLoader(n)),
                        new Promise(function (t) {
                          let n = null;
                          (M = {
                            total: 0,
                            loaded: 0,
                            ready: function () {
                              t(n);
                            },
                          }),
                            (n = L(e, i)),
                            0 == M.total && t(n);
                        })
                      );
                    };
                    let F = t.RendererWrapper.prototype.align;
                    (t.RendererWrapper.prototype.align = function (t, e, n, r) {
                      let i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1;
                      F.call(this, t, e, n, r, i);
                    }),
                      (u = new e()),
                      (t.requestAnimationFrame =
                        u.requestAnimationFrame.bind(u)),
                      (t.cancelAnimationFrame = u.cancelAnimationFrame.bind(u)),
                      (t.enableFPSCounter = u.Rb.bind(u)),
                      (t.disableFPSCounter = u.Ob),
                      (u.ob = i),
                      (t.resolveAnimationFrame = i),
                      (t.cleanup = function () {
                        C && C.delete();
                      });
                  };
                  var u,
                    c,
                    l,
                    h,
                    f,
                    d,
                    p,
                    m,
                    v,
                    g = Object.assign({}, t),
                    b = "./this.program",
                    y = "function" == typeof importScripts,
                    w = "";
                  y
                    ? (w = self.location.href)
                    : "undefined" != typeof document &&
                      document.currentScript &&
                      (w = document.currentScript.src),
                    r && (w = r),
                    (w =
                      0 !== w.indexOf("blob:")
                        ? w.substr(
                            0,
                            w.replace(/[?#].*/, "").lastIndexOf("/") + 1
                          )
                        : ""),
                    y &&
                      (v = (t) => {
                        var e = new XMLHttpRequest();
                        return (
                          e.open("GET", t, !1),
                          (e.responseType = "arraybuffer"),
                          e.send(null),
                          new Uint8Array(e.response)
                        );
                      }),
                    (m = (t, e, n) => {
                      var r = new XMLHttpRequest();
                      r.open("GET", t, !0),
                        (r.responseType = "arraybuffer"),
                        (r.onload = () => {
                          200 == r.status || (0 == r.status && r.response)
                            ? e(r.response)
                            : n();
                        }),
                        (r.onerror = n),
                        r.send(null);
                    });
                  var _ = t.print || console.log.bind(console),
                    A = t.printErr || console.error.bind(console);
                  Object.assign(t, g),
                    (g = null),
                    t.thisProgram && (b = t.thisProgram),
                    t.wasmBinary && (C = t.wasmBinary),
                    t.noExitRuntime,
                    "object" != typeof WebAssembly &&
                      z("no native wasm support detected");
                  var C,
                    R,
                    E,
                    T,
                    P,
                    L,
                    M,
                    F,
                    S,
                    x,
                    j,
                    O = !1;
                  function I() {
                    var e = R.buffer;
                    (t.HEAP8 = T = new Int8Array(e)),
                      (t.HEAP16 = L = new Int16Array(e)),
                      (t.HEAP32 = F = new Int32Array(e)),
                      (t.HEAPU8 = P = new Uint8Array(e)),
                      (t.HEAPU16 = M = new Uint16Array(e)),
                      (t.HEAPU32 = S = new Uint32Array(e)),
                      (t.HEAPF32 = x = new Float32Array(e)),
                      (t.HEAPF64 = j = new Float64Array(e));
                  }
                  var k,
                    D = [],
                    U = [],
                    B = [],
                    W = 0,
                    N = null,
                    Y = null;
                  function z(e) {
                    throw (
                      (t.onAbort && t.onAbort(e),
                      A((e = "Aborted(" + e + ")")),
                      (O = !0),
                      (e = new WebAssembly.RuntimeError(
                        e + ". Build with -sASSERTIONS for more info."
                      )),
                      p(e),
                      e)
                    );
                  }
                  function X(t) {
                    return t.startsWith(
                      "data:application/octet-stream;base64,"
                    );
                  }
                  if (!X((q = "canvas_advanced.wasm"))) {
                    var H = q;
                    q = t.locateFile ? t.locateFile(H, w) : w + H;
                  }
                  function V(t) {
                    if (t == q && C) return new Uint8Array(C);
                    if (v) return v(t);
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function G(t, e, n) {
                    return (function (t) {
                      if (!C) {
                        if (
                          "function" == typeof fetch &&
                          !t.startsWith("file://")
                        )
                          return fetch(t, { credentials: "same-origin" })
                            .then((e) => {
                              if (!e.ok)
                                throw (
                                  "failed to load wasm binary file at '" +
                                  t +
                                  "'"
                                );
                              return e.arrayBuffer();
                            })
                            .catch(() => V(t));
                        if (m)
                          return new Promise((e, n) => {
                            m(t, (t) => e(new Uint8Array(t)), n);
                          });
                      }
                      return Promise.resolve().then(() => V(t));
                    })(t)
                      .then((t) => WebAssembly.instantiate(t, e))
                      .then((t) => t)
                      .then(n, (t) => {
                        A("failed to asynchronously prepare wasm: " + t), z(t);
                      });
                  }
                  var q,
                    J,
                    K,
                    Z = {
                      445532: (t, e, n, r, i) => {
                        if (
                          void 0 ===
                          (window.AudioContext || window.webkitAudioContext)
                        )
                          return 0;
                        if (void 0 === window.h) {
                          (window.h = { Aa: 0 }),
                            (window.h.I = {}),
                            (window.h.I.ya = t),
                            (window.h.I.capture = e),
                            (window.h.I.La = n),
                            (window.h.ga = {}),
                            (window.h.ga.stopped = r),
                            (window.h.ga.xb = i);
                          let a = window.h;
                          (a.D = []),
                            (a.yc = function (t) {
                              for (var e = 0; e < a.D.length; ++e)
                                if (null == a.D[e]) return (a.D[e] = t), e;
                              return a.D.push(t), a.D.length - 1;
                            }),
                            (a.Cb = function (t) {
                              for (a.D[t] = null; 0 < a.D.length; )
                                if (null == a.D[a.D.length - 1]) a.D.pop();
                                else break;
                            }),
                            (a.Sc = function (t) {
                              for (var e = 0; e < a.D.length; ++e)
                                if (a.D[e] == t) return a.Cb(e);
                            }),
                            (a.ra = function (t) {
                              return a.D[t];
                            }),
                            (a.Bb = ["touchend", "click"]),
                            (a.unlock = function () {
                              for (var t = 0; t < a.D.length; ++t) {
                                var e = a.D[t];
                                null != e &&
                                  null != e.J &&
                                  e.state === a.ga.xb &&
                                  e.J.resume().then(
                                    () => {
                                      nc(e.pb);
                                    },
                                    (t) => {
                                      console.error(
                                        "Failed to resume audiocontext",
                                        t
                                      );
                                    }
                                  );
                              }
                              a.Bb.map(function (t) {
                                document.removeEventListener(t, a.unlock, !0);
                              });
                            }),
                            a.Bb.map(function (t) {
                              document.addEventListener(t, a.unlock, !0);
                            });
                        }
                        return (window.h.Aa += 1), 1;
                      },
                      447710: () => {
                        void 0 !== window.h &&
                          (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                      },
                      447874: () =>
                        void 0 !== navigator.mediaDevices &&
                        void 0 !== navigator.mediaDevices.getUserMedia,
                      447978: () => {
                        try {
                          var t = new (window.AudioContext ||
                              window.webkitAudioContext)(),
                            e = t.sampleRate;
                          return t.close(), e;
                        } catch (t) {
                          return 0;
                        }
                      },
                      448149: (t, e, n, r, i, a) => {
                        if (void 0 === window.h) return -1;
                        var o = {},
                          s = {};
                        return (
                          t == window.h.I.ya && 0 != n && (s.sampleRate = n),
                          (o.J = new (window.AudioContext ||
                            window.webkitAudioContext)(s)),
                          o.J.suspend(),
                          (o.state = window.h.ga.stopped),
                          (n = 0),
                          t != window.h.I.ya && (n = e),
                          (o.Z = o.J.createScriptProcessor(r, n, e)),
                          (o.Z.onaudioprocess = function (n) {
                            if (
                              ((null == o.sa || 0 == o.sa.length) &&
                                (o.sa = new Float32Array(x.buffer, i, r * e)),
                              t == window.h.I.capture || t == window.h.I.La)
                            ) {
                              for (var s = 0; s < e; s += 1)
                                for (
                                  var u = n.inputBuffer.getChannelData(s),
                                    c = o.sa,
                                    l = 0;
                                  l < r;
                                  l += 1
                                )
                                  c[l * e + s] = u[l];
                              nl(a, r, i);
                            }
                            if (t == window.h.I.ya || t == window.h.I.La)
                              for (
                                nh(a, r, i), s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                for (
                                  u = n.outputBuffer.getChannelData(s),
                                    c = o.sa,
                                    l = 0;
                                  l < r;
                                  l += 1
                                )
                                  u[l] = c[l * e + s];
                            else
                              for (
                                s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                n.outputBuffer.getChannelData(s).fill(0);
                          }),
                          (t != window.h.I.capture && t != window.h.I.La) ||
                            navigator.mediaDevices
                              .getUserMedia({ audio: !0, video: !1 })
                              .then(function (t) {
                                (o.Da = o.J.createMediaStreamSource(t)),
                                  o.Da.connect(o.Z),
                                  o.Z.connect(o.J.destination);
                              })
                              .catch(function (t) {
                                console.log("Failed to get user media: " + t);
                              }),
                          t == window.h.I.ya && o.Z.connect(o.J.destination),
                          (o.pb = a),
                          window.h.yc(o)
                        );
                      },
                      451026: (t) => window.h.ra(t).J.sampleRate,
                      451099: (t) => {
                        void 0 !== (t = window.h.ra(t)).Z &&
                          ((t.Z.onaudioprocess = function () {}),
                          t.Z.disconnect(),
                          (t.Z = void 0)),
                          void 0 !== t.Da &&
                            (t.Da.disconnect(), (t.Da = void 0)),
                          t.J.close(),
                          (t.J = void 0),
                          (t.pb = void 0);
                      },
                      451499: (t) => {
                        window.h.Cb(t);
                      },
                      451549: (t) => {
                        (t = window.h.ra(t)).J.resume(),
                          (t.state = window.h.ga.xb);
                      },
                      451688: (t) => {
                        (t = window.h.ra(t)).J.suspend(),
                          (t.state = window.h.ga.stopped);
                      },
                    },
                    Q = (e) => {
                      for (; 0 < e.length; ) e.shift()(t);
                    },
                    $ = (t, e) => {
                      for (var n = 0, r = t.length - 1; 0 <= r; r--) {
                        var i = t[r];
                        "." === i
                          ? t.splice(r, 1)
                          : ".." === i
                          ? (t.splice(r, 1), n++)
                          : n && (t.splice(r, 1), n--);
                      }
                      if (e) for (; n; n--) t.unshift("..");
                      return t;
                    },
                    tt = (t) => {
                      var e = "/" === t.charAt(0),
                        n = "/" === t.substr(-1);
                      return (
                        (t = $(
                          t.split("/").filter((t) => !!t),
                          !e
                        ).join("/")) ||
                          e ||
                          (t = "."),
                        t && n && (t += "/"),
                        (e ? "/" : "") + t
                      );
                    },
                    te = (t) => {
                      var e =
                        /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                          .exec(t)
                          .slice(1);
                      return ((t = e[0]), (e = e[1]), t || e)
                        ? (e && (e = e.substr(0, e.length - 1)), t + e)
                        : ".";
                    },
                    tn = (t) => {
                      if ("/" === t) return "/";
                      var e = (t = (t = tt(t)).replace(/\/$/, "")).lastIndexOf(
                        "/"
                      );
                      return -1 === e ? t : t.substr(e + 1);
                    },
                    tr = () => {
                      if (
                        "object" == typeof crypto &&
                        "function" == typeof crypto.getRandomValues
                      )
                        return (t) => crypto.getRandomValues(t);
                      z("initRandomDevice");
                    },
                    ti = (t) => (ti = tr())(t);
                  function ta() {
                    for (
                      var t = "", e = !1, n = arguments.length - 1;
                      -1 <= n && !e;
                      n--
                    ) {
                      if (
                        ((e = 0 <= n ? arguments[n] : "/"),
                        "string" != typeof e)
                      )
                        throw TypeError(
                          "Arguments to path.resolve must be strings"
                        );
                      if (!e) return "";
                      (t = e + "/" + t), (e = "/" === e.charAt(0));
                    }
                    return (
                      (t = $(
                        t.split("/").filter((t) => !!t),
                        !e
                      ).join("/")),
                      (e ? "/" : "") + t || "."
                    );
                  }
                  var to =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf8")
                        : void 0,
                    ts = (t, e, n) => {
                      var r = e + n;
                      for (n = e; t[n] && !(n >= r); ) ++n;
                      if (16 < n - e && t.buffer && to)
                        return to.decode(t.subarray(e, n));
                      for (r = ""; e < n; ) {
                        var i = t[e++];
                        if (128 & i) {
                          var a = 63 & t[e++];
                          if (192 == (224 & i))
                            r += String.fromCharCode(((31 & i) << 6) | a);
                          else {
                            var o = 63 & t[e++];
                            65536 >
                            (i =
                              224 == (240 & i)
                                ? ((15 & i) << 12) | (a << 6) | o
                                : ((7 & i) << 18) |
                                  (a << 12) |
                                  (o << 6) |
                                  (63 & t[e++]))
                              ? (r += String.fromCharCode(i))
                              : ((i -= 65536),
                                (r += String.fromCharCode(
                                  55296 | (i >> 10),
                                  56320 | (1023 & i)
                                )));
                          }
                        } else r += String.fromCharCode(i);
                      }
                      return r;
                    },
                    tu = [],
                    tc = (t) => {
                      for (var e = 0, n = 0; n < t.length; ++n) {
                        var r = t.charCodeAt(n);
                        127 >= r
                          ? e++
                          : 2047 >= r
                          ? (e += 2)
                          : 55296 <= r && 57343 >= r
                          ? ((e += 4), ++n)
                          : (e += 3);
                      }
                      return e;
                    },
                    tl = (t, e, n, r) => {
                      if (!(0 < r)) return 0;
                      var i = n;
                      r = n + r - 1;
                      for (var a = 0; a < t.length; ++a) {
                        var o = t.charCodeAt(a);
                        if (
                          (55296 <= o &&
                            57343 >= o &&
                            (o =
                              (65536 + ((1023 & o) << 10)) |
                              (1023 & t.charCodeAt(++a))),
                          127 >= o)
                        ) {
                          if (n >= r) break;
                          e[n++] = o;
                        } else {
                          if (2047 >= o) {
                            if (n + 1 >= r) break;
                            e[n++] = 192 | (o >> 6);
                          } else {
                            if (65535 >= o) {
                              if (n + 2 >= r) break;
                              e[n++] = 224 | (o >> 12);
                            } else {
                              if (n + 3 >= r) break;
                              (e[n++] = 240 | (o >> 18)),
                                (e[n++] = 128 | ((o >> 12) & 63));
                            }
                            e[n++] = 128 | ((o >> 6) & 63);
                          }
                          e[n++] = 128 | (63 & o);
                        }
                      }
                      return (e[n] = 0), n - i;
                    };
                  function th(t, e) {
                    var n = Array(tc(t) + 1);
                    return (t = tl(t, n, 0, n.length)), e && (n.length = t), n;
                  }
                  var tf = [];
                  function td(t, e) {
                    (tf[t] = { input: [], F: [], V: e }), tN(t, tp);
                  }
                  var tp = {
                    open: function (t) {
                      var e = tf[t.node.za];
                      if (!e) throw new tP(43);
                      (t.s = e), (t.seekable = !1);
                    },
                    close: function (t) {
                      t.s.V.qa(t.s);
                    },
                    qa: function (t) {
                      t.s.V.qa(t.s);
                    },
                    read: function (t, e, n, r) {
                      if (!t.s || !t.s.V.ib) throw new tP(60);
                      for (var i = 0, a = 0; a < r; a++) {
                        try {
                          var o = t.s.V.ib(t.s);
                        } catch (t) {
                          throw new tP(29);
                        }
                        if (void 0 === o && 0 === i) throw new tP(6);
                        if (null == o) break;
                        i++, (e[n + a] = o);
                      }
                      return i && (t.node.timestamp = Date.now()), i;
                    },
                    write: function (t, e, n, r) {
                      if (!t.s || !t.s.V.Oa) throw new tP(60);
                      try {
                        for (var i = 0; i < r; i++) t.s.V.Oa(t.s, e[n + i]);
                      } catch (t) {
                        throw new tP(29);
                      }
                      return r && (t.node.timestamp = Date.now()), i;
                    },
                  };
                  function tm(t, e) {
                    var n = t.j ? t.j.length : 0;
                    n >= e ||
                      ((e = Math.max(e, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                      0 != n && (e = Math.max(e, 256)),
                      (n = t.j),
                      (t.j = new Uint8Array(e)),
                      0 < t.v && t.j.set(n.subarray(0, t.v), 0));
                  }
                  var tv,
                    tg,
                    tb,
                    ty,
                    tw = {
                      O: null,
                      U: () => tw.createNode(null, "/", 16895, 0),
                      createNode(t, e, n, r) {
                        if (24576 == (61440 & n) || 4096 == (61440 & n))
                          throw new tP(63);
                        return (
                          tw.O ||
                            (tw.O = {
                              dir: {
                                node: {
                                  Y: tw.l.Y,
                                  P: tw.l.P,
                                  ka: tw.l.ka,
                                  va: tw.l.va,
                                  ub: tw.l.ub,
                                  Ab: tw.l.Ab,
                                  vb: tw.l.vb,
                                  sb: tw.l.sb,
                                  Ea: tw.l.Ea,
                                },
                                stream: { ba: tw.m.ba },
                              },
                              file: {
                                node: { Y: tw.l.Y, P: tw.l.P },
                                stream: {
                                  ba: tw.m.ba,
                                  read: tw.m.read,
                                  write: tw.m.write,
                                  pa: tw.m.pa,
                                  lb: tw.m.lb,
                                  nb: tw.m.nb,
                                },
                              },
                              link: {
                                node: { Y: tw.l.Y, P: tw.l.P, ma: tw.l.ma },
                                stream: {},
                              },
                              $a: {
                                node: { Y: tw.l.Y, P: tw.l.P },
                                stream: tW,
                              },
                            }),
                          16384 == (61440 & (n = tj(t, e, n, r)).mode)
                            ? ((n.l = tw.O.dir.node),
                              (n.m = tw.O.dir.stream),
                              (n.j = {}))
                            : 32768 == (61440 & n.mode)
                            ? ((n.l = tw.O.file.node),
                              (n.m = tw.O.file.stream),
                              (n.v = 0),
                              (n.j = null))
                            : 40960 == (61440 & n.mode)
                            ? ((n.l = tw.O.link.node), (n.m = tw.O.link.stream))
                            : 8192 == (61440 & n.mode) &&
                              ((n.l = tw.O.$a.node), (n.m = tw.O.$a.stream)),
                          (n.timestamp = Date.now()),
                          t && ((t.j[e] = n), (t.timestamp = n.timestamp)),
                          n
                        );
                      },
                      Kc: (t) =>
                        t.j
                          ? t.j.subarray
                            ? t.j.subarray(0, t.v)
                            : new Uint8Array(t.j)
                          : new Uint8Array(0),
                      l: {
                        Y(t) {
                          var e = {};
                          return (
                            (e.Jc = 8192 == (61440 & t.mode) ? t.id : 1),
                            (e.Mc = t.id),
                            (e.mode = t.mode),
                            (e.Oc = 1),
                            (e.uid = 0),
                            (e.Lc = 0),
                            (e.za = t.za),
                            16384 == (61440 & t.mode)
                              ? (e.size = 4096)
                              : 32768 == (61440 & t.mode)
                              ? (e.size = t.v)
                              : 40960 == (61440 & t.mode)
                              ? (e.size = t.link.length)
                              : (e.size = 0),
                            (e.Bc = new Date(t.timestamp)),
                            (e.Nc = new Date(t.timestamp)),
                            (e.Ic = new Date(t.timestamp)),
                            (e.Jb = 4096),
                            (e.Cc = Math.ceil(e.size / e.Jb)),
                            e
                          );
                        },
                        P(t, e) {
                          if (
                            (void 0 !== e.mode && (t.mode = e.mode),
                            void 0 !== e.timestamp &&
                              (t.timestamp = e.timestamp),
                            void 0 !== e.size && ((e = e.size), t.v != e))
                          ) {
                            if (0 == e) (t.j = null), (t.v = 0);
                            else {
                              var n = t.j;
                              (t.j = new Uint8Array(e)),
                                n && t.j.set(n.subarray(0, Math.min(e, t.v))),
                                (t.v = e);
                            }
                          }
                        },
                        ka() {
                          throw tL[44];
                        },
                        va: (t, e, n, r) => tw.createNode(t, e, n, r),
                        ub(t, e, n) {
                          if (16384 == (61440 & t.mode)) {
                            try {
                              var r = tx(e, n);
                            } catch (t) {}
                            if (r) for (var i in r.j) throw new tP(55);
                          }
                          delete t.parent.j[t.name],
                            (t.parent.timestamp = Date.now()),
                            (t.name = n),
                            (e.j[n] = t),
                            (e.timestamp = t.parent.timestamp),
                            (t.parent = e);
                        },
                        Ab(t, e) {
                          delete t.j[e], (t.timestamp = Date.now());
                        },
                        vb(t, e) {
                          var n,
                            r = tx(t, e);
                          for (n in r.j) throw new tP(55);
                          delete t.j[e], (t.timestamp = Date.now());
                        },
                        sb(t) {
                          var e,
                            n = [".", ".."];
                          for (e in t.j) t.j.hasOwnProperty(e) && n.push(e);
                          return n;
                        },
                        Ea: (t, e, n) => (
                          ((t = tw.createNode(t, e, 41471, 0)).link = n), t
                        ),
                        ma(t) {
                          if (40960 != (61440 & t.mode)) throw new tP(28);
                          return t.link;
                        },
                      },
                      m: {
                        read(t, e, n, r, i) {
                          var a = t.node.j;
                          if (i >= t.node.v) return 0;
                          if (8 < (t = Math.min(t.node.v - i, r)) && a.subarray)
                            e.set(a.subarray(i, i + t), n);
                          else for (r = 0; r < t; r++) e[n + r] = a[i + r];
                          return t;
                        },
                        write(t, e, n, r, i, a) {
                          if ((e.buffer === T.buffer && (a = !1), !r)) return 0;
                          if (
                            (((t = t.node).timestamp = Date.now()),
                            e.subarray && (!t.j || t.j.subarray))
                          ) {
                            if (a)
                              return (t.j = e.subarray(n, n + r)), (t.v = r);
                            if (0 === t.v && 0 === i)
                              return (t.j = e.slice(n, n + r)), (t.v = r);
                            if (i + r <= t.v)
                              return t.j.set(e.subarray(n, n + r), i), r;
                          }
                          if ((tm(t, i + r), t.j.subarray && e.subarray))
                            t.j.set(e.subarray(n, n + r), i);
                          else for (a = 0; a < r; a++) t.j[i + a] = e[n + a];
                          return (t.v = Math.max(t.v, i + r)), r;
                        },
                        ba(t, e, n) {
                          if (
                            (1 === n
                              ? (e += t.position)
                              : 2 === n &&
                                32768 == (61440 & t.node.mode) &&
                                (e += t.node.v),
                            0 > e)
                          )
                            throw new tP(28);
                          return e;
                        },
                        pa(t, e, n) {
                          tm(t.node, e + n),
                            (t.node.v = Math.max(t.node.v, e + n));
                        },
                        lb(t, e, n, r, i) {
                          if (32768 != (61440 & t.node.mode)) throw new tP(43);
                          if (((t = t.node.j), 2 & i || t.buffer !== T.buffer))
                            throw (
                              ((0 < n || n + e < t.length) &&
                                (t = t.subarray
                                  ? t.subarray(n, n + e)
                                  : Array.prototype.slice.call(t, n, n + e)),
                              (n = !0),
                              z(),
                              (e = void 0),
                              new tP(48))
                            );
                          return (n = !1), { o: (e = t.byteOffset), M: n };
                        },
                        nb: (t, e, n, r) => (tw.m.write(t, e, 0, r, n, !1), 0),
                      },
                    },
                    t_ = null,
                    tA = {},
                    tC = [],
                    tR = 1,
                    tE = null,
                    tT = !0,
                    tP = null,
                    tL = {},
                    tM = function (t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (!(t = ta(t))) return { path: "", node: null };
                      if (8 < (e = Object.assign({ gb: !0, Qa: 0 }, e)).Qa)
                        throw new tP(32);
                      t = t.split("/").filter((t) => !!t);
                      for (var n = t_, r = "/", i = 0; i < t.length; i++) {
                        var a = i === t.length - 1;
                        if (a && e.parent) break;
                        if (
                          ((n = tx(n, t[i])),
                          (r = tt(r + "/" + t[i])),
                          n.wa && (!a || (a && e.gb)) && (n = n.wa.root),
                          !a || e.fb)
                        ) {
                          for (a = 0; 40960 == (61440 & n.mode); )
                            if (
                              ((n = tV(r)),
                              (n = tM((r = ta(te(r), n)), {
                                Qa: e.Qa + 1,
                              }).node),
                              40 < a++)
                            )
                              throw new tP(32);
                        }
                      }
                      return { path: r, node: n };
                    },
                    tF = (t) => {
                      for (var e; ; ) {
                        if (t === t.parent)
                          return (
                            (t = t.U.mb),
                            e
                              ? "/" !== t[t.length - 1]
                                ? "".concat(t, "/").concat(e)
                                : t + e
                              : t
                          );
                        (e = e ? "".concat(t.name, "/").concat(e) : t.name),
                          (t = t.parent);
                      }
                    },
                    tS = (t, e) => {
                      for (var n = 0, r = 0; r < e.length; r++)
                        n = ((n << 5) - n + e.charCodeAt(r)) | 0;
                      return ((t + n) >>> 0) % tE.length;
                    },
                    tx = (t, e) => {
                      var n;
                      if ((n = (n = tI(t, "x")) ? n : t.l.ka ? 0 : 2))
                        throw new tP(n, t);
                      for (n = tE[tS(t.id, e)]; n; n = n.lc) {
                        var r = n.name;
                        if (n.parent.id === t.id && r === e) return n;
                      }
                      return t.l.ka(t, e);
                    },
                    tj = (t, e, n, r) => (
                      (e = tS((t = new nr(t, e, n, r)).parent.id, t.name)),
                      (t.lc = tE[e]),
                      (tE[e] = t)
                    ),
                    tO = (t) => {
                      var e = ["r", "w", "rw"][3 & t];
                      return 512 & t && (e += "w"), e;
                    },
                    tI = (t, e) =>
                      tT
                        ? 0
                        : e.includes("r") && !(292 & t.mode)
                        ? 2
                        : (e.includes("w") && !(146 & t.mode)) ||
                          (e.includes("x") && !(73 & t.mode))
                        ? 2
                        : 0,
                    tk = (t, e) => {
                      try {
                        return tx(t, e), 20;
                      } catch (t) {}
                      return tI(t, "wx");
                    },
                    tD = () => {
                      for (var t = 0; 4096 >= t; t++) if (!tC[t]) return t;
                      throw new tP(33);
                    },
                    tU = (t) => {
                      if (!(t = tC[t])) throw new tP(8);
                      return t;
                    },
                    tB = function (t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : -1;
                      return (
                        tb ||
                          (((tb = function () {
                            this.h = {};
                          }).prototype = {}),
                          Object.defineProperties(tb.prototype, {
                            object: {
                              get() {
                                return this.node;
                              },
                              set(t) {
                                this.node = t;
                              },
                            },
                            flags: {
                              get() {
                                return this.h.flags;
                              },
                              set(t) {
                                this.h.flags = t;
                              },
                            },
                            position: {
                              get() {
                                return this.h.position;
                              },
                              set(t) {
                                this.h.position = t;
                              },
                            },
                          })),
                        (t = Object.assign(new tb(), t)),
                        -1 == e && (e = tD()),
                        (t.X = e),
                        (tC[e] = t)
                      );
                    },
                    tW = {
                      open: (t) => {
                        (t.m = tA[t.node.za].m), t.m.open && t.m.open(t);
                      },
                      ba: () => {
                        throw new tP(70);
                      },
                    },
                    tN = (t, e) => {
                      tA[t] = { m: e };
                    },
                    tY = (t, e) => {
                      var n = "/" === e,
                        r = !e;
                      if (n && t_) throw new tP(10);
                      if (!n && !r) {
                        var i = tM(e, { gb: !1 });
                        if (((e = i.path), (i = i.node).wa)) throw new tP(10);
                        if (16384 != (61440 & i.mode)) throw new tP(54);
                      }
                      (e = { type: t, Qc: {}, mb: e, kc: [] }),
                        ((t = t.U(e)).U = e),
                        (e.root = t),
                        n ? (t_ = t) : i && ((i.wa = e), i.U && i.U.kc.push(e));
                    },
                    tz = (t, e, n) => {
                      var r = tM(t, { parent: !0 }).node;
                      if (!(t = tn(t)) || "." === t || ".." === t)
                        throw new tP(28);
                      var i = tk(r, t);
                      if (i) throw new tP(i);
                      if (!r.l.va) throw new tP(63);
                      return r.l.va(r, t, e, n);
                    },
                    tX = (t, e, n) => {
                      void 0 === n && ((n = e), (e = 438)), tz(t, 8192 | e, n);
                    },
                    tH = (t, e) => {
                      if (!ta(t)) throw new tP(44);
                      var n = tM(e, { parent: !0 }).node;
                      if (!n) throw new tP(44);
                      var r = tk(n, (e = tn(e)));
                      if (r) throw new tP(r);
                      if (!n.l.Ea) throw new tP(63);
                      n.l.Ea(n, e, t);
                    },
                    tV = (t) => {
                      if (!(t = tM(t).node)) throw new tP(44);
                      if (!t.l.ma) throw new tP(28);
                      return ta(tF(t.parent), t.l.ma(t));
                    },
                    tG = (e, n, r) => {
                      if ("" === e) throw new tP(44);
                      if ("string" == typeof n) {
                        var i = {
                          r: 0,
                          "r+": 2,
                          w: 577,
                          "w+": 578,
                          a: 1089,
                          "a+": 1090,
                        }[n];
                        if (void 0 === i)
                          throw Error("Unknown file open mode: ".concat(n));
                        n = i;
                      }
                      if (
                        ((r =
                          64 & n
                            ? ((void 0 === r ? 438 : r) & 4095) | 32768
                            : 0),
                        "object" == typeof e)
                      )
                        var a = e;
                      else {
                        e = tt(e);
                        try {
                          a = tM(e, { fb: !(131072 & n) }).node;
                        } catch (t) {}
                      }
                      if (((i = !1), 64 & n)) {
                        if (a) {
                          if (128 & n) throw new tP(20);
                        } else (a = tz(e, r, 0)), (i = !0);
                      }
                      if (!a) throw new tP(44);
                      if (
                        (8192 == (61440 & a.mode) && (n &= -513),
                        65536 & n && 16384 != (61440 & a.mode))
                      )
                        throw new tP(54);
                      if (
                        !i &&
                        (r = a
                          ? 40960 == (61440 & a.mode)
                            ? 32
                            : 16384 == (61440 & a.mode) &&
                              ("r" !== tO(n) || 512 & n)
                            ? 31
                            : tI(a, tO(n))
                          : 44)
                      )
                        throw new tP(r);
                      if (512 & n && !i) {
                        if (
                          !(r =
                            "string" == typeof (r = a)
                              ? tM(r, { fb: !0 }).node
                              : r).l.P
                        )
                          throw new tP(63);
                        if (16384 == (61440 & r.mode)) throw new tP(31);
                        if (32768 != (61440 & r.mode)) throw new tP(28);
                        if ((i = tI(r, "w"))) throw new tP(i);
                        r.l.P(r, { size: 0, timestamp: Date.now() });
                      }
                      return (
                        (n &= -131713),
                        (a = tB({
                          node: a,
                          path: tF(a),
                          flags: n,
                          seekable: !0,
                          position: 0,
                          m: a.m,
                          zc: [],
                          error: !1,
                        })).m.open && a.m.open(a),
                        !t.logReadFiles ||
                          1 & n ||
                          (ty || (ty = {}), e in ty || (ty[e] = 1)),
                        a
                      );
                    },
                    tq = (t, e, n) => {
                      if (null === t.X) throw new tP(8);
                      if (!t.seekable || !t.m.ba) throw new tP(70);
                      if (0 != n && 1 != n && 2 != n) throw new tP(28);
                      (t.position = t.m.ba(t, e, n)), (t.zc = []);
                    },
                    tJ = () => {
                      tP ||
                        (((tP = function (t, e) {
                          (this.name = "ErrnoError"),
                            (this.node = e),
                            (this.pc = function (t) {
                              this.aa = t;
                            }),
                            this.pc(t),
                            (this.message = "FS error");
                        }).prototype = Error()),
                        (tP.prototype.constructor = tP),
                        [44].forEach((t) => {
                          (tL[t] = new tP(t)),
                            (tL[t].stack = "<generic error, no stack>");
                        }));
                    },
                    tK = (t, e, n) => {
                      t = tt("/dev/" + t);
                      var r,
                        i = ((r = 0), e && (r |= 365), n && (r |= 146), r);
                      tg || (tg = 64);
                      var a = (tg++ << 8) | 0;
                      tN(a, {
                        open: (t) => {
                          t.seekable = !1;
                        },
                        close: () => {
                          n && n.buffer && n.buffer.length && n(10);
                        },
                        read: (t, n, r, i) => {
                          for (var a = 0, o = 0; o < i; o++) {
                            try {
                              var s = e();
                            } catch (t) {
                              throw new tP(29);
                            }
                            if (void 0 === s && 0 === a) throw new tP(6);
                            if (null == s) break;
                            a++, (n[r + o] = s);
                          }
                          return a && (t.node.timestamp = Date.now()), a;
                        },
                        write: (t, e, r, i) => {
                          for (var a = 0; a < i; a++)
                            try {
                              n(e[r + a]);
                            } catch (t) {
                              throw new tP(29);
                            }
                          return i && (t.node.timestamp = Date.now()), a;
                        },
                      }),
                        tX(t, i, a);
                    },
                    tZ = {},
                    tQ = void 0;
                  function t$() {
                    return F[((tQ += 4) - 4) >> 2];
                  }
                  function t0(t) {
                    if (void 0 === t) return "_unknown";
                    var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(
                      0
                    );
                    return 48 <= e && 57 >= e ? "_".concat(t) : t;
                  }
                  function t1(t, e) {
                    return {
                      [(t = t0(t))]: function () {
                        return e.apply(this, arguments);
                      },
                    }[t];
                  }
                  function t2() {
                    (this.M = [void 0]), (this.hb = []);
                  }
                  var t4 = new t2(),
                    t6 = void 0;
                  function t3(t) {
                    throw new t6(t);
                  }
                  var t5 = (t) => (
                      t || t3("Cannot use deleted val. handle = " + t),
                      t4.get(t).value
                    ),
                    t8 = (t) => {
                      switch (t) {
                        case void 0:
                          return 1;
                        case null:
                          return 2;
                        case !0:
                          return 3;
                        case !1:
                          return 4;
                        default:
                          return t4.pa({ tb: 1, value: t });
                      }
                    };
                  function t9(t) {
                    var e = Error,
                      n = t1(t, function (e) {
                        (this.name = t),
                          (this.message = e),
                          void 0 !== (e = Error(e).stack) &&
                            (this.stack =
                              this.toString() +
                              "\n" +
                              e.replace(/^Error(:[^\n]*)?\n/, ""));
                      });
                    return (
                      (n.prototype = Object.create(e.prototype)),
                      (n.prototype.constructor = n),
                      (n.prototype.toString = function () {
                        return void 0 === this.message
                          ? this.name
                          : "".concat(this.name, ": ").concat(this.message);
                      }),
                      n
                    );
                  }
                  var t7 = void 0,
                    et = void 0;
                  function ee(t) {
                    for (var e = ""; P[t]; ) e += et[P[t++]];
                    return e;
                  }
                  var en = [];
                  function er() {
                    for (; en.length; ) {
                      var t = en.pop();
                      (t.g.fa = !1), t.delete();
                    }
                  }
                  var ei = void 0,
                    ea = {};
                  function eo(t, e) {
                    for (
                      void 0 === e && t3("ptr should not be undefined");
                      t.A;

                    )
                      (e = t.na(e)), (t = t.A);
                    return e;
                  }
                  var es = {};
                  function eu(t) {
                    var e = ee((t = nd(t)));
                    return ns(t), e;
                  }
                  function ec(t, e) {
                    var n = es[t];
                    return (
                      void 0 === n && t3(e + " has unknown type " + eu(t)), n
                    );
                  }
                  function el() {}
                  var eh = !1;
                  function ef(t) {
                    --t.count.value,
                      0 === t.count.value && (t.G ? t.L.W(t.G) : t.u.i.W(t.o));
                  }
                  var ed = {},
                    ep = void 0;
                  function em(t) {
                    throw new ep(t);
                  }
                  function ev(t, e) {
                    return (
                      (e.u && e.o) ||
                        em("makeClassHandle requires ptr and ptrType"),
                      !!e.L != !!e.G &&
                        em("Both smartPtrType and smartPtr must be specified"),
                      (e.count = { value: 1 }),
                      eg(Object.create(t, { g: { value: e } }))
                    );
                  }
                  function eg(t) {
                    return "undefined" == typeof FinalizationRegistry
                      ? ((eg = (t) => t), t)
                      : ((eh = new FinalizationRegistry((t) => {
                          ef(t.g);
                        })),
                        (eg = (t) => {
                          var e = t.g;
                          return e.G && eh.register(t, { g: e }, t), t;
                        }),
                        (el = (t) => {
                          eh.unregister(t);
                        }),
                        eg(t));
                  }
                  var eb = {};
                  function ey(t) {
                    for (; t.length; ) {
                      var e = t.pop();
                      t.pop()(e);
                    }
                  }
                  function ew(t) {
                    return this.fromWireType(F[t >> 2]);
                  }
                  var e_ = {},
                    eA = {};
                  function eC(t, e, n) {
                    function r(e) {
                      (e = n(e)).length !== t.length &&
                        em("Mismatched type converter count");
                      for (var r = 0; r < t.length; ++r) eE(t[r], e[r]);
                    }
                    t.forEach(function (t) {
                      eA[t] = e;
                    });
                    var i = Array(e.length),
                      a = [],
                      o = 0;
                    e.forEach((t, e) => {
                      es.hasOwnProperty(t)
                        ? (i[e] = es[t])
                        : (a.push(t),
                          e_.hasOwnProperty(t) || (e_[t] = []),
                          e_[t].push(() => {
                            (i[e] = es[t]), ++o === a.length && r(i);
                          }));
                    }),
                      0 === a.length && r(i);
                  }
                  function eR(t) {
                    switch (t) {
                      case 1:
                        return 0;
                      case 2:
                        return 1;
                      case 4:
                        return 2;
                      case 8:
                        return 3;
                      default:
                        throw TypeError("Unknown type size: ".concat(t));
                    }
                  }
                  function eE(t, e) {
                    let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    if (!("argPackAdvance" in e))
                      throw TypeError(
                        "registerType registeredInstance requires argPackAdvance"
                      );
                    !(function (t, e) {
                      let n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      var r = e.name;
                      if (
                        (t ||
                          t3(
                            'type "'.concat(
                              r,
                              '" must have a positive integer typeid pointer'
                            )
                          ),
                        es.hasOwnProperty(t))
                      ) {
                        if (n.$b) return;
                        t3("Cannot register type '".concat(r, "' twice"));
                      }
                      (es[t] = e),
                        delete eA[t],
                        e_.hasOwnProperty(t) &&
                          ((e = e_[t]), delete e_[t], e.forEach((t) => t()));
                    })(t, e, n);
                  }
                  function eT(t) {
                    t3(t.g.u.i.name + " instance already deleted");
                  }
                  function eP() {}
                  function eL(t, e, n) {
                    if (void 0 === t[e].B) {
                      var r = t[e];
                      (t[e] = function () {
                        return (
                          t[e].B.hasOwnProperty(arguments.length) ||
                            t3(
                              "Function '"
                                .concat(
                                  n,
                                  "' called with an invalid number of arguments ("
                                )
                                .concat(
                                  arguments.length,
                                  ") - expects one of ("
                                )
                                .concat(t[e].B, ")!")
                            ),
                          t[e].B[arguments.length].apply(this, arguments)
                        );
                      }),
                        (t[e].B = []),
                        (t[e].B[r.ea] = r);
                    }
                  }
                  function eM(e, n, r) {
                    t.hasOwnProperty(e)
                      ? ((void 0 === r ||
                          (void 0 !== t[e].B && void 0 !== t[e].B[r])) &&
                          t3(
                            "Cannot register public name '".concat(e, "' twice")
                          ),
                        eL(t, e, e),
                        t.hasOwnProperty(r) &&
                          t3(
                            "Cannot register multiple overloads of a function with the same number of arguments (".concat(
                              r,
                              ")!"
                            )
                          ),
                        (t[e].B[r] = n))
                      : ((t[e] = n), void 0 !== r && (t[e].Pc = r));
                  }
                  function eF(t, e, n, r, i, a, o, s) {
                    (this.name = t),
                      (this.constructor = e),
                      (this.N = n),
                      (this.W = r),
                      (this.A = i),
                      (this.Ub = a),
                      (this.na = o),
                      (this.Pb = s),
                      (this.qb = []);
                  }
                  function eS(t, e, n) {
                    for (; e !== n; )
                      e.na ||
                        t3(
                          "Expected null or instance of "
                            .concat(n.name, ", got an instance of ")
                            .concat(e.name)
                        ),
                        (t = e.na(t)),
                        (e = e.A);
                    return t;
                  }
                  function ex(t, e) {
                    return null === e
                      ? (this.Na &&
                          t3("null is not a valid ".concat(this.name)),
                        0)
                      : (e.g ||
                          t3(
                            'Cannot pass "'
                              .concat(eG(e), '" as a ')
                              .concat(this.name)
                          ),
                        e.g.o ||
                          t3(
                            "Cannot pass deleted object as a pointer of type ".concat(
                              this.name
                            )
                          ),
                        eS(e.g.o, e.g.u.i, this.i));
                  }
                  function ej(t, e) {
                    if (null === e) {
                      if (
                        (this.Na &&
                          t3("null is not a valid ".concat(this.name)),
                        this.ua)
                      ) {
                        var n = this.Pa();
                        return null !== t && t.push(this.W, n), n;
                      }
                      return 0;
                    }
                    if (
                      (e.g ||
                        t3(
                          'Cannot pass "'
                            .concat(eG(e), '" as a ')
                            .concat(this.name)
                        ),
                      e.g.o ||
                        t3(
                          "Cannot pass deleted object as a pointer of type ".concat(
                            this.name
                          )
                        ),
                      !this.ta &&
                        e.g.u.ta &&
                        t3(
                          "Cannot convert argument of type "
                            .concat(
                              e.g.L ? e.g.L.name : e.g.u.name,
                              " to parameter type "
                            )
                            .concat(this.name)
                        ),
                      (n = eS(e.g.o, e.g.u.i, this.i)),
                      this.ua)
                    )
                      switch (
                        (void 0 === e.g.G &&
                          t3("Passing raw pointer to smart pointer is illegal"),
                        this.tc)
                      ) {
                        case 0:
                          e.g.L === this
                            ? (n = e.g.G)
                            : t3(
                                "Cannot convert argument of type "
                                  .concat(
                                    e.g.L ? e.g.L.name : e.g.u.name,
                                    " to parameter type "
                                  )
                                  .concat(this.name)
                              );
                          break;
                        case 1:
                          n = e.g.G;
                          break;
                        case 2:
                          if (e.g.L === this) n = e.g.G;
                          else {
                            var r = e.clone();
                            (n = this.oc(
                              n,
                              t8(function () {
                                r.delete();
                              })
                            )),
                              null !== t && t.push(this.W, n);
                          }
                          break;
                        default:
                          t3("Unsupporting sharing policy");
                      }
                    return n;
                  }
                  function eO(t, e) {
                    return null === e
                      ? (this.Na &&
                          t3("null is not a valid ".concat(this.name)),
                        0)
                      : (e.g ||
                          t3(
                            'Cannot pass "'
                              .concat(eG(e), '" as a ')
                              .concat(this.name)
                          ),
                        e.g.o ||
                          t3(
                            "Cannot pass deleted object as a pointer of type ".concat(
                              this.name
                            )
                          ),
                        e.g.u.ta &&
                          t3(
                            "Cannot convert argument of type "
                              .concat(e.g.u.name, " to parameter type ")
                              .concat(this.name)
                          ),
                        eS(e.g.o, e.g.u.i, this.i));
                  }
                  function eI(t, e, n, r) {
                    (this.name = t),
                      (this.i = e),
                      (this.Na = n),
                      (this.ta = r),
                      (this.ua = !1),
                      (this.W =
                        this.oc =
                        this.Pa =
                        this.rb =
                        this.tc =
                        this.nc =
                          void 0),
                      void 0 !== e.A
                        ? (this.toWireType = ej)
                        : ((this.toWireType = r ? ex : eO), (this.K = null));
                  }
                  function ek(e, n, r) {
                    t.hasOwnProperty(e) ||
                      em("Replacing nonexistant public symbol"),
                      void 0 !== t[e].B && void 0 !== r
                        ? (t[e].B[r] = n)
                        : ((t[e] = n), (t[e].ea = r));
                  }
                  var eD = [],
                    eU = (t) => {
                      var e = eD[t];
                      return (
                        e ||
                          (t >= eD.length && (eD.length = t + 1),
                          (eD[t] = e = k.get(t))),
                        e
                      );
                    },
                    eB = (e, n) => {
                      var r = [];
                      return function () {
                        if (
                          ((r.length = 0),
                          Object.assign(r, arguments),
                          e.includes("j"))
                        ) {
                          var i = t["dynCall_" + e];
                          i =
                            r && r.length
                              ? i.apply(null, [n].concat(r))
                              : i.call(null, n);
                        } else i = eU(n).apply(null, r);
                        return i;
                      };
                    };
                  function eW(t, e) {
                    var n = (t = ee(t)).includes("j") ? eB(t, e) : eU(e);
                    return (
                      "function" != typeof n &&
                        t3(
                          "unknown function pointer with signature "
                            .concat(t, ": ")
                            .concat(e)
                        ),
                      n
                    );
                  }
                  var eN = void 0;
                  function eY(t, e) {
                    var n = [],
                      r = {};
                    throw (
                      (e.forEach(function t(e) {
                        r[e] ||
                          es[e] ||
                          (eA[e] ? eA[e].forEach(t) : (n.push(e), (r[e] = !0)));
                      }),
                      new eN("".concat(t, ": ") + n.map(eu).join([", "])))
                    );
                  }
                  function ez(t, e, n, r, i) {
                    var a = e.length;
                    2 > a &&
                      t3(
                        "argTypes array size mismatch! Must at least get return value and 'this' types!"
                      );
                    var o = null !== e[1] && null !== n,
                      s = !1;
                    for (n = 1; n < e.length; ++n)
                      if (null !== e[n] && void 0 === e[n].K) {
                        s = !0;
                        break;
                      }
                    var u = "void" !== e[0].name,
                      c = a - 2,
                      l = Array(c),
                      h = [],
                      f = [];
                    return function () {
                      if (
                        (arguments.length !== c &&
                          t3(
                            "function "
                              .concat(t, " called with ")
                              .concat(arguments.length, " arguments, expected ")
                              .concat(c, " args!")
                          ),
                        (f.length = 0),
                        (h.length = o ? 2 : 1),
                        (h[0] = i),
                        o)
                      ) {
                        var n = e[1].toWireType(f, this);
                        h[1] = n;
                      }
                      for (var a = 0; a < c; ++a)
                        (l[a] = e[a + 2].toWireType(f, arguments[a])),
                          h.push(l[a]);
                      if (((a = r.apply(null, h)), s)) ey(f);
                      else
                        for (var d = o ? 1 : 2; d < e.length; d++) {
                          var p = 1 === d ? n : l[d - 2];
                          null !== e[d].K && e[d].K(p);
                        }
                      return u ? e[0].fromWireType(a) : void 0;
                    };
                  }
                  function eX(t, e) {
                    for (var n = [], r = 0; r < t; r++)
                      n.push(S[(e + 4 * r) >> 2]);
                    return n;
                  }
                  function eH(t, e, n) {
                    return (
                      t instanceof Object ||
                        t3("".concat(n, ' with invalid "this": ').concat(t)),
                      t instanceof e.i.constructor ||
                        t3(
                          ""
                            .concat(n, ' incompatible with "this" of type ')
                            .concat(t.constructor.name)
                        ),
                      t.g.o ||
                        t3(
                          "cannot call emscripten binding method ".concat(
                            n,
                            " on deleted object"
                          )
                        ),
                      eS(t.g.o, t.g.u.i, e.i)
                    );
                  }
                  function eV(t) {
                    t >= t4.h && 0 == --t4.get(t).tb && t4.Zb(t);
                  }
                  function eG(t) {
                    if (null === t) return "null";
                    var e = typeof t;
                    return "object" === e || "array" === e || "function" === e
                      ? t.toString()
                      : "" + t;
                  }
                  var eq =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf-16le")
                        : void 0,
                    eJ = (t, e) => {
                      for (var n = t >> 1, r = n + e / 2; !(n >= r) && M[n]; )
                        ++n;
                      if (32 < (n <<= 1) - t && eq)
                        return eq.decode(P.subarray(t, n));
                      for (r = 0, n = ""; !(r >= e / 2); ++r) {
                        var i = L[(t + 2 * r) >> 1];
                        if (0 == i) break;
                        n += String.fromCharCode(i);
                      }
                      return n;
                    },
                    eK = (t, e, n) => {
                      if ((void 0 === n && (n = 2147483647), 2 > n)) return 0;
                      n -= 2;
                      var r = e;
                      n = n < 2 * t.length ? n / 2 : t.length;
                      for (var i = 0; i < n; ++i)
                        (L[e >> 1] = t.charCodeAt(i)), (e += 2);
                      return (L[e >> 1] = 0), e - r;
                    },
                    eZ = (t) => 2 * t.length,
                    eQ = (t, e) => {
                      for (var n = 0, r = ""; !(n >= e / 4); ) {
                        var i = F[(t + 4 * n) >> 2];
                        if (0 == i) break;
                        ++n,
                          65536 <= i
                            ? ((i -= 65536),
                              (r += String.fromCharCode(
                                55296 | (i >> 10),
                                56320 | (1023 & i)
                              )))
                            : (r += String.fromCharCode(i));
                      }
                      return r;
                    },
                    e$ = (t, e, n) => {
                      if ((void 0 === n && (n = 2147483647), 4 > n)) return 0;
                      var r = e;
                      n = r + n - 4;
                      for (var i = 0; i < t.length; ++i) {
                        var a = t.charCodeAt(i);
                        if (
                          (55296 <= a &&
                            57343 >= a &&
                            (a =
                              (65536 + ((1023 & a) << 10)) |
                              (1023 & t.charCodeAt(++i))),
                          (F[e >> 2] = a),
                          (e += 4) + 4 > n)
                        )
                          break;
                      }
                      return (F[e >> 2] = 0), e - r;
                    },
                    e0 = (t) => {
                      for (var e = 0, n = 0; n < t.length; ++n) {
                        var r = t.charCodeAt(n);
                        55296 <= r && 57343 >= r && ++n, (e += 4);
                      }
                      return e;
                    },
                    e1 = {};
                  function e2(t) {
                    var e = e1[t];
                    return void 0 === e ? ee(t) : e;
                  }
                  var e4,
                    e6 = [],
                    e3 = [],
                    e5 = [],
                    e8 = {},
                    e9 = () => {
                      if (!e4) {
                        var t,
                          e = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG:
                              (
                                ("object" == typeof navigator &&
                                  navigator.languages &&
                                  navigator.languages[0]) ||
                                "C"
                              ).replace("-", "_") + ".UTF-8",
                            _: b || "./this.program",
                          };
                        for (t in e8)
                          void 0 === e8[t] ? delete e[t] : (e[t] = e8[t]);
                        var n = [];
                        for (t in e) n.push("".concat(t, "=").concat(e[t]));
                        e4 = n;
                      }
                      return e4;
                    },
                    e7 = (t) => 0 == t % 4 && (0 != t % 100 || 0 == t % 400),
                    nt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    ne = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    nn = (t, e, n, r) => {
                      function i(t, e, n) {
                        for (
                          t = "number" == typeof t ? t.toString() : t || "";
                          t.length < e;

                        )
                          t = n[0] + t;
                        return t;
                      }
                      function a(t, e) {
                        return i(t, e, "0");
                      }
                      function o(t, e) {
                        var n;
                        function r(t) {
                          return 0 > t ? -1 : 0 < t ? 1 : 0;
                        }
                        return (
                          0 === (n = r(t.getFullYear() - e.getFullYear())) &&
                            0 === (n = r(t.getMonth() - e.getMonth())) &&
                            (n = r(t.getDate() - e.getDate())),
                          n
                        );
                      }
                      function s(t) {
                        switch (t.getDay()) {
                          case 0:
                            return new Date(t.getFullYear() - 1, 11, 29);
                          case 1:
                            return t;
                          case 2:
                            return new Date(t.getFullYear(), 0, 3);
                          case 3:
                            return new Date(t.getFullYear(), 0, 2);
                          case 4:
                            return new Date(t.getFullYear(), 0, 1);
                          case 5:
                            return new Date(t.getFullYear() - 1, 11, 31);
                          case 6:
                            return new Date(t.getFullYear() - 1, 11, 30);
                        }
                      }
                      function u(t) {
                        var e = t.ca;
                        for (
                          t = new Date(new Date(t.da + 1900, 0, 1).getTime());
                          0 < e;

                        ) {
                          var n = t.getMonth(),
                            r = (e7(t.getFullYear()) ? nt : ne)[n];
                          if (e > r - t.getDate())
                            (e -= r - t.getDate() + 1),
                              t.setDate(1),
                              11 > n
                                ? t.setMonth(n + 1)
                                : (t.setMonth(0),
                                  t.setFullYear(t.getFullYear() + 1));
                          else {
                            t.setDate(t.getDate() + e);
                            break;
                          }
                        }
                        return (
                          (n = new Date(t.getFullYear() + 1, 0, 4)),
                          (e = s(new Date(t.getFullYear(), 0, 4))),
                          (n = s(n)),
                          0 >= o(e, t)
                            ? 0 >= o(n, t)
                              ? t.getFullYear() + 1
                              : t.getFullYear()
                            : t.getFullYear() - 1
                        );
                      }
                      var c = F[(r + 40) >> 2];
                      for (var l in ((r = {
                        wc: F[r >> 2],
                        vc: F[(r + 4) >> 2],
                        Fa: F[(r + 8) >> 2],
                        Sa: F[(r + 12) >> 2],
                        Ga: F[(r + 16) >> 2],
                        da: F[(r + 20) >> 2],
                        R: F[(r + 24) >> 2],
                        ca: F[(r + 28) >> 2],
                        Rc: F[(r + 32) >> 2],
                        uc: F[(r + 36) >> 2],
                        xc: c && c ? ts(P, c) : "",
                      }),
                      (n = n ? ts(P, n) : ""),
                      (c = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y",
                      })))
                        n = n.replace(RegExp(l, "g"), c[l]);
                      var h =
                          "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                            " "
                          ),
                        f =
                          "January February March April May June July August September October November December".split(
                            " "
                          );
                      for (l in ((c = {
                        "%a": (t) => h[t.R].substring(0, 3),
                        "%A": (t) => h[t.R],
                        "%b": (t) => f[t.Ga].substring(0, 3),
                        "%B": (t) => f[t.Ga],
                        "%C": (t) => a(((t.da + 1900) / 100) | 0, 2),
                        "%d": (t) => a(t.Sa, 2),
                        "%e": (t) => i(t.Sa, 2, " "),
                        "%g": (t) => u(t).toString().substring(2),
                        "%G": (t) => u(t),
                        "%H": (t) => a(t.Fa, 2),
                        "%I": (t) => (
                          0 == (t = t.Fa) ? (t = 12) : 12 < t && (t -= 12),
                          a(t, 2)
                        ),
                        "%j": (t) => {
                          for (
                            var e = 0, n = 0;
                            n <= t.Ga - 1;
                            e += (e7(t.da + 1900) ? nt : ne)[n++]
                          );
                          return a(t.Sa + e, 3);
                        },
                        "%m": (t) => a(t.Ga + 1, 2),
                        "%M": (t) => a(t.vc, 2),
                        "%n": () => "\n",
                        "%p": (t) => (0 <= t.Fa && 12 > t.Fa ? "AM" : "PM"),
                        "%S": (t) => a(t.wc, 2),
                        "%t": () => "	",
                        "%u": (t) => t.R || 7,
                        "%U": (t) => a(Math.floor((t.ca + 7 - t.R) / 7), 2),
                        "%V": (t) => {
                          var e = Math.floor((t.ca + 7 - ((t.R + 6) % 7)) / 7);
                          if ((2 >= (t.R + 371 - t.ca - 2) % 7 && e++, e))
                            53 == e &&
                              (4 == (n = (t.R + 371 - t.ca) % 7) ||
                                (3 == n && e7(t.da)) ||
                                (e = 1));
                          else {
                            e = 52;
                            var n = (t.R + 7 - t.ca - 1) % 7;
                            (4 == n || (5 == n && e7((t.da % 400) - 1))) && e++;
                          }
                          return a(e, 2);
                        },
                        "%w": (t) => t.R,
                        "%W": (t) =>
                          a(Math.floor((t.ca + 7 - ((t.R + 6) % 7)) / 7), 2),
                        "%y": (t) => (t.da + 1900).toString().substring(2),
                        "%Y": (t) => t.da + 1900,
                        "%z": (t) => {
                          var e = 0 <= (t = t.uc);
                          return (
                            (e ? "+" : "-") +
                            String(
                              "0000" +
                                (((t = Math.abs(t) / 60) / 60) * 100 + (t % 60))
                            ).slice(-4)
                          );
                        },
                        "%Z": (t) => t.xc,
                        "%%": () => "%",
                      }),
                      (n = n.replace(/%%/g, "\x00\x00")),
                      c))
                        n.includes(l) &&
                          (n = n.replace(RegExp(l, "g"), c[l](r)));
                      return (l = th((n = n.replace(/\0\0/g, "%")), !1))
                        .length > e
                        ? 0
                        : (T.set(l, t), l.length - 1);
                    };
                  function nr(t, e, n, r) {
                    t || (t = this),
                      (this.parent = t),
                      (this.U = t.U),
                      (this.wa = null),
                      (this.id = tR++),
                      (this.name = e),
                      (this.mode = n),
                      (this.l = {}),
                      (this.m = {}),
                      (this.za = r);
                  }
                  Object.defineProperties(nr.prototype, {
                    read: {
                      get: function () {
                        return 365 == (365 & this.mode);
                      },
                      set: function (t) {
                        t ? (this.mode |= 365) : (this.mode &= -366);
                      },
                    },
                    write: {
                      get: function () {
                        return 146 == (146 & this.mode);
                      },
                      set: function (t) {
                        t ? (this.mode |= 146) : (this.mode &= -147);
                      },
                    },
                  }),
                    tJ(),
                    (tE = Array(4096)),
                    tY(tw, "/"),
                    tz("/tmp", 16895, 0),
                    tz("/home", 16895, 0),
                    tz("/home/web_user", 16895, 0),
                    tz("/dev", 16895, 0),
                    tN(259, { read: () => 0, write: (t, e, n, r) => r }),
                    tX("/dev/null", 259),
                    td(1280, {
                      ib: function () {
                        t: {
                          if (!tu.length) {
                            var t = null;
                            if (
                              ("function" == typeof window.prompt
                                ? null !== (t = window.prompt("Input: ")) &&
                                  (t += "\n")
                                : "function" == typeof readline &&
                                  null !== (t = readline()) &&
                                  (t += "\n"),
                              !t)
                            ) {
                              t = null;
                              break t;
                            }
                            tu = th(t, !0);
                          }
                          t = tu.shift();
                        }
                        return t;
                      },
                      Oa: function (t, e) {
                        null === e || 10 === e
                          ? (_(ts(t.F, 0)), (t.F = []))
                          : 0 != e && t.F.push(e);
                      },
                      qa: function (t) {
                        t.F && 0 < t.F.length && (_(ts(t.F, 0)), (t.F = []));
                      },
                      bc: function () {
                        return {
                          Fc: 25856,
                          Hc: 5,
                          Ec: 191,
                          Gc: 35387,
                          Dc: [
                            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15,
                            23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0,
                          ],
                        };
                      },
                      cc: function () {
                        return 0;
                      },
                      dc: function () {
                        return [24, 80];
                      },
                    }),
                    td(1536, {
                      Oa: function (t, e) {
                        null === e || 10 === e
                          ? (A(ts(t.F, 0)), (t.F = []))
                          : 0 != e && t.F.push(e);
                      },
                      qa: function (t) {
                        t.F && 0 < t.F.length && (A(ts(t.F, 0)), (t.F = []));
                      },
                    }),
                    tX("/dev/tty", 1280),
                    tX("/dev/tty1", 1536),
                    (u = new Uint8Array(1024)),
                    (c = 0),
                    tK(
                      "random",
                      (l = () => (0 === c && (c = ti(u).byteLength), u[--c]))
                    ),
                    tK("urandom", l),
                    tz("/dev/shm", 16895, 0),
                    tz("/dev/shm/tmp", 16895, 0),
                    tz("/proc", 16895, 0),
                    (h = tz("/proc/self", 16895, 0)),
                    tz("/proc/self/fd", 16895, 0),
                    tY(
                      {
                        U: () => {
                          var t = tj(h, "fd", 16895, 73);
                          return (
                            (t.l = {
                              ka: (t, e) => {
                                var n = tU(+e);
                                return ((t = {
                                  parent: null,
                                  U: { mb: "fake" },
                                  l: { ma: () => n.path },
                                }).parent = t);
                              },
                            }),
                            t
                          );
                        },
                      },
                      "/proc/self/fd"
                    ),
                    Object.assign(t2.prototype, {
                      get(t) {
                        return this.M[t];
                      },
                      has(t) {
                        return void 0 !== this.M[t];
                      },
                      pa(t) {
                        var e = this.hb.pop() || this.M.length;
                        return (this.M[e] = t), e;
                      },
                      Zb(t) {
                        (this.M[t] = void 0), this.hb.push(t);
                      },
                    }),
                    (t6 = t.BindingError =
                      class extends Error {
                        constructor(t) {
                          super(t), (this.name = "BindingError");
                        }
                      }),
                    t4.M.push(
                      { value: void 0 },
                      { value: null },
                      { value: !0 },
                      { value: !1 }
                    ),
                    (t4.h = t4.M.length),
                    (t.count_emval_handles = function () {
                      for (var t = 0, e = t4.h; e < t4.M.length; ++e)
                        void 0 !== t4.M[e] && ++t;
                      return t;
                    }),
                    (t7 = t.PureVirtualError = t9("PureVirtualError"));
                  for (var ni = Array(256), na = 0; 256 > na; ++na)
                    ni[na] = String.fromCharCode(na);
                  (et = ni),
                    (t.getInheritedInstanceCount = function () {
                      return Object.keys(ea).length;
                    }),
                    (t.getLiveInheritedInstances = function () {
                      var t,
                        e = [];
                      for (t in ea) ea.hasOwnProperty(t) && e.push(ea[t]);
                      return e;
                    }),
                    (t.flushPendingDeletes = er),
                    (t.setDelayFunction = function (t) {
                      (ei = t), en.length && ei && ei(er);
                    }),
                    (ep = t.InternalError =
                      class extends Error {
                        constructor(t) {
                          super(t), (this.name = "InternalError");
                        }
                      }),
                    (eP.prototype.isAliasOf = function (t) {
                      if (!(this instanceof eP && t instanceof eP)) return !1;
                      var e = this.g.u.i,
                        n = this.g.o,
                        r = t.g.u.i;
                      for (t = t.g.o; e.A; ) (n = e.na(n)), (e = e.A);
                      for (; r.A; ) (t = r.na(t)), (r = r.A);
                      return e === r && n === t;
                    }),
                    (eP.prototype.clone = function () {
                      if ((this.g.o || eT(this), this.g.ia))
                        return (this.g.count.value += 1), this;
                      var t = eg,
                        e = Object,
                        n = e.create,
                        r = Object.getPrototypeOf(this),
                        i = this.g;
                      return (
                        (t = t(
                          n.call(e, r, {
                            g: {
                              value: {
                                count: i.count,
                                fa: i.fa,
                                ia: i.ia,
                                o: i.o,
                                u: i.u,
                                G: i.G,
                                L: i.L,
                              },
                            },
                          })
                        )),
                        (t.g.count.value += 1),
                        (t.g.fa = !1),
                        t
                      );
                    }),
                    (eP.prototype.delete = function () {
                      this.g.o || eT(this),
                        this.g.fa &&
                          !this.g.ia &&
                          t3("Object already scheduled for deletion"),
                        el(this),
                        ef(this.g),
                        this.g.ia || ((this.g.G = void 0), (this.g.o = void 0));
                    }),
                    (eP.prototype.isDeleted = function () {
                      return !this.g.o;
                    }),
                    (eP.prototype.deleteLater = function () {
                      return (
                        this.g.o || eT(this),
                        this.g.fa &&
                          !this.g.ia &&
                          t3("Object already scheduled for deletion"),
                        en.push(this),
                        1 === en.length && ei && ei(er),
                        (this.g.fa = !0),
                        this
                      );
                    }),
                    (eI.prototype.Vb = function (t) {
                      return this.rb && (t = this.rb(t)), t;
                    }),
                    (eI.prototype.ab = function (t) {
                      this.W && this.W(t);
                    }),
                    (eI.prototype.argPackAdvance = 8),
                    (eI.prototype.readValueFromPointer = ew),
                    (eI.prototype.deleteObject = function (t) {
                      null !== t && t.delete();
                    }),
                    (eI.prototype.fromWireType = function (t) {
                      function e() {
                        return this.ua
                          ? ev(this.i.N, { u: this.nc, o: n, L: this, G: t })
                          : ev(this.i.N, { u: this, o: t });
                      }
                      var n = this.Vb(t);
                      if (!n) return this.ab(t), null;
                      var r = ea[eo(this.i, n)];
                      if (void 0 !== r)
                        return 0 === r.g.count.value
                          ? ((r.g.o = n), (r.g.G = t), r.clone())
                          : ((r = r.clone()), this.ab(t), r);
                      if (!(r = ed[(r = this.i.Ub(n))])) return e.call(this);
                      r = this.ta ? r.Kb : r.pointerType;
                      var i = (function t(e, n, r) {
                        return n === r
                          ? e
                          : void 0 === r.A
                          ? null
                          : null === (e = t(e, n, r.A))
                          ? null
                          : r.Pb(e);
                      })(n, this.i, r.i);
                      return null === i
                        ? e.call(this)
                        : this.ua
                        ? ev(r.i.N, { u: r, o: i, L: this, G: t })
                        : ev(r.i.N, { u: r, o: i });
                    }),
                    (eN = t.UnboundTypeError = t9("UnboundTypeError"));
                  var no = {
                    __syscall_fcntl64: function (t, e, n) {
                      tQ = n;
                      try {
                        var r = tU(t);
                        switch (e) {
                          case 0:
                            var i = t$();
                            return 0 > i ? -28 : tB(r, i).X;
                          case 1:
                          case 2:
                          case 6:
                          case 7:
                            return 0;
                          case 3:
                            return r.flags;
                          case 4:
                            return (i = t$()), (r.flags |= i), 0;
                          case 5:
                            return (L[((i = t$()) + 0) >> 1] = 2), 0;
                          case 16:
                          case 8:
                          default:
                            return -28;
                          case 9:
                            return (F[nf() >> 2] = 28), -1;
                        }
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return -t.aa;
                      }
                    },
                    __syscall_ioctl: function (t, e, n) {
                      tQ = n;
                      try {
                        var r = tU(t);
                        switch (e) {
                          case 21509:
                          case 21510:
                          case 21511:
                          case 21512:
                          case 21524:
                          case 21515:
                            return r.s ? 0 : -59;
                          case 21505:
                            if (!r.s) return -59;
                            if (r.s.V.bc) {
                              e = [
                                3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18,
                                15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0,
                              ];
                              var i = t$();
                              (F[i >> 2] = 25856),
                                (F[(i + 4) >> 2] = 5),
                                (F[(i + 8) >> 2] = 191),
                                (F[(i + 12) >> 2] = 35387);
                              for (var a = 0; 32 > a; a++)
                                T[(i + a + 17) >> 0] = e[a] || 0;
                            }
                            return 0;
                          case 21506:
                          case 21507:
                          case 21508:
                            if (!r.s) return -59;
                            if (r.s.V.cc)
                              for (i = t$(), e = [], a = 0; 32 > a; a++)
                                e.push(T[(i + a + 17) >> 0]);
                            return 0;
                          case 21519:
                            if (!r.s) return -59;
                            return (F[(i = t$()) >> 2] = 0);
                          case 21520:
                            return r.s ? -28 : -59;
                          case 21531:
                            if (((i = t$()), !r.m.ac)) throw new tP(59);
                            return r.m.ac(r, e, i);
                          case 21523:
                            if (!r.s) return -59;
                            return (
                              r.s.V.dc &&
                                ((a = [24, 80]),
                                (L[(i = t$()) >> 1] = a[0]),
                                (L[(i + 2) >> 1] = a[1])),
                              0
                            );
                          default:
                            return -28;
                        }
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return -t.aa;
                      }
                    },
                    __syscall_openat: function (t, e, n, r) {
                      tQ = r;
                      try {
                        var i = (e = e ? ts(P, e) : "");
                        if ("/" === i.charAt(0)) e = i;
                        else {
                          var a = -100 === t ? "/" : tU(t).path;
                          if (0 == i.length) throw new tP(44);
                          e = tt(a + "/" + i);
                        }
                        var o = r ? t$() : 0;
                        return tG(e, n, o).X;
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return -t.aa;
                      }
                    },
                    _embind_create_inheriting_constructor: function (t, e, n) {
                      (t = ee(t)), (e = ec(e, "wrapper")), (n = t5(n));
                      var r = [].slice,
                        i = e.i,
                        a = i.N,
                        o = i.A.N,
                        s = i.A.constructor;
                      for (var u in ((t = t1(t, function () {
                        i.A.qb.forEach(
                          function (t) {
                            if (this[t] === o[t])
                              throw new t7(
                                "Pure virtual function ".concat(
                                  t,
                                  " must be implemented in JavaScript"
                                )
                              );
                          }.bind(this)
                        ),
                          Object.defineProperty(this, "__parent", { value: a }),
                          this.__construct.apply(this, r.call(arguments));
                      })),
                      (a.__construct = function () {
                        this === a && t3("Pass correct 'this' to __construct");
                        var t = s.implement.apply(
                          void 0,
                          [this].concat(r.call(arguments))
                        );
                        el(t);
                        var e = t.g;
                        t.notifyOnDestruction(),
                          (e.ia = !0),
                          Object.defineProperties(this, { g: { value: e } }),
                          eg(this),
                          (t = eo(i, (t = e.o))),
                          ea.hasOwnProperty(t)
                            ? t3(
                                "Tried to register registered instance: ".concat(
                                  t
                                )
                              )
                            : (ea[t] = this);
                      }),
                      (a.__destruct = function () {
                        this === a && t3("Pass correct 'this' to __destruct"),
                          el(this);
                        var t = this.g.o;
                        (t = eo(i, t)),
                          ea.hasOwnProperty(t)
                            ? delete ea[t]
                            : t3(
                                "Tried to unregister unregistered instance: ".concat(
                                  t
                                )
                              );
                      }),
                      (t.prototype = Object.create(a)),
                      n))
                        t.prototype[u] = n[u];
                      return t8(t);
                    },
                    _embind_finalize_value_object: function (t) {
                      var e = eb[t];
                      delete eb[t];
                      var n = e.Pa,
                        r = e.W,
                        i = e.eb;
                      eC(
                        [t],
                        i.map((t) => t.Yb).concat(i.map((t) => t.rc)),
                        (t) => {
                          var a = {};
                          return (
                            i.forEach((e, n) => {
                              var r = t[n],
                                o = e.Wb,
                                s = e.Xb,
                                u = t[n + i.length],
                                c = e.qc,
                                l = e.sc;
                              a[e.Sb] = {
                                read: (t) => r.fromWireType(o(s, t)),
                                write: (t, e) => {
                                  var n = [];
                                  c(l, t, u.toWireType(n, e)), ey(n);
                                },
                              };
                            }),
                            [
                              {
                                name: e.name,
                                fromWireType: function (t) {
                                  var e,
                                    n = {};
                                  for (e in a) n[e] = a[e].read(t);
                                  return r(t), n;
                                },
                                toWireType: function (t, e) {
                                  for (var i in a)
                                    if (!(i in e))
                                      throw TypeError(
                                        'Missing field: "'.concat(i, '"')
                                      );
                                  var o = n();
                                  for (i in a) a[i].write(o, e[i]);
                                  return null !== t && t.push(r, o), o;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: ew,
                                K: r,
                              },
                            ]
                          );
                        }
                      );
                    },
                    _embind_register_bigint: function () {},
                    _embind_register_bool: function (t, e, n, r, i) {
                      var a = eR(n);
                      eE(t, {
                        name: (e = ee(e)),
                        fromWireType: function (t) {
                          return !!t;
                        },
                        toWireType: function (t, e) {
                          return e ? r : i;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (t) {
                          if (1 === n) var r = T;
                          else if (2 === n) r = L;
                          else if (4 === n) r = F;
                          else
                            throw TypeError("Unknown boolean type size: " + e);
                          return this.fromWireType(r[t >> a]);
                        },
                        K: null,
                      });
                    },
                    _embind_register_class: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      c,
                      l,
                      h,
                      f
                    ) {
                      (l = ee(l)),
                        (a = eW(i, a)),
                        s && (s = eW(o, s)),
                        c && (c = eW(u, c)),
                        (f = eW(h, f));
                      var d = t0(l);
                      eM(d, function () {
                        eY(
                          "Cannot construct ".concat(
                            l,
                            " due to unbound types"
                          ),
                          [r]
                        );
                      }),
                        eC([t, e, n], r ? [r] : [], function (e) {
                          if (((e = e[0]), r))
                            var n = e.i,
                              i = n.N;
                          else i = eP.prototype;
                          var o = Object.create(i, {
                            constructor: {
                              value: (e = t1(d, function () {
                                if (Object.getPrototypeOf(this) !== o)
                                  throw new t6("Use 'new' to construct " + l);
                                if (void 0 === u.$)
                                  throw new t6(
                                    l + " has no accessible constructor"
                                  );
                                var t = u.$[arguments.length];
                                if (void 0 === t)
                                  throw new t6(
                                    "Tried to invoke ctor of "
                                      .concat(
                                        l,
                                        " with invalid number of parameters ("
                                      )
                                      .concat(
                                        arguments.length,
                                        ") - expected ("
                                      )
                                      .concat(
                                        Object.keys(u.$).toString(),
                                        ") parameters instead!"
                                      )
                                  );
                                return t.apply(this, arguments);
                              })),
                            },
                          });
                          e.prototype = o;
                          var u = new eF(l, e, o, f, n, a, s, c);
                          u.A &&
                            (void 0 === u.A.oa && (u.A.oa = []),
                            u.A.oa.push(u)),
                            (n = new eI(l, u, !0, !1)),
                            (i = new eI(l + "*", u, !1, !1));
                          var h = new eI(l + " const*", u, !1, !0);
                          return (
                            (ed[t] = { pointerType: i, Kb: h }),
                            ek(d, e),
                            [n, i, h]
                          );
                        });
                    },
                    _embind_register_class_class_function: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a,
                      o
                    ) {
                      var s = eX(n, r);
                      (e = ee(e)),
                        (a = eW(i, a)),
                        eC([], [t], function (t) {
                          function r() {
                            eY(
                              "Cannot call ".concat(i, " due to unbound types"),
                              s
                            );
                          }
                          t = t[0];
                          var i = "".concat(t.name, ".").concat(e);
                          e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                          var u = t.i.constructor;
                          return (
                            void 0 === u[e]
                              ? ((r.ea = n - 1), (u[e] = r))
                              : (eL(u, e, i), (u[e].B[n - 1] = r)),
                            eC([], s, function (r) {
                              if (
                                ((r = ez(
                                  i,
                                  [r[0], null].concat(r.slice(1)),
                                  null,
                                  a,
                                  o
                                )),
                                void 0 === u[e].B
                                  ? ((r.ea = n - 1), (u[e] = r))
                                  : (u[e].B[n - 1] = r),
                                t.i.oa)
                              )
                                for (let n of t.i.oa)
                                  n.constructor.hasOwnProperty(e) ||
                                    (n.constructor[e] = r);
                              return [];
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_class_property: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s
                    ) {
                      (e = ee(e)),
                        (a = eW(i, a)),
                        eC([], [t], function (t) {
                          t = t[0];
                          var i = "".concat(t.name, ".").concat(e),
                            u = {
                              get() {
                                eY(
                                  "Cannot access ".concat(
                                    i,
                                    " due to unbound types"
                                  ),
                                  [n]
                                );
                              },
                              enumerable: !0,
                              configurable: !0,
                            };
                          return (
                            (u.set = s
                              ? () => {
                                  eY(
                                    "Cannot access ".concat(
                                      i,
                                      " due to unbound types"
                                    ),
                                    [n]
                                  );
                                }
                              : () => {
                                  t3("".concat(i, " is a read-only property"));
                                }),
                            Object.defineProperty(t.i.constructor, e, u),
                            eC([], [n], function (n) {
                              n = n[0];
                              var i = {
                                get: () => n.fromWireType(a(r)),
                                enumerable: !0,
                              };
                              return (
                                s &&
                                  ((s = eW(o, s)),
                                  (i.set = (t) => {
                                    var e = [];
                                    s(r, n.toWireType(e, t)), ey(e);
                                  })),
                                Object.defineProperty(t.i.constructor, e, i),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_constructor: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a
                    ) {
                      var o = eX(e, n);
                      (i = eW(r, i)),
                        eC([], [t], function (t) {
                          t = t[0];
                          var n = "constructor ".concat(t.name);
                          if (
                            (void 0 === t.i.$ && (t.i.$ = []),
                            void 0 !== t.i.$[e - 1])
                          )
                            throw new t6(
                              "Cannot register multiple constructors with identical number of parameters ("
                                .concat(e - 1, ") for class '")
                                .concat(
                                  t.name,
                                  "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                                )
                            );
                          return (
                            (t.i.$[e - 1] = () => {
                              eY(
                                "Cannot construct ".concat(
                                  t.name,
                                  " due to unbound types"
                                ),
                                o
                              );
                            }),
                            eC([], o, function (r) {
                              return (
                                r.splice(1, 0, null),
                                (t.i.$[e - 1] = ez(n, r, null, i, a)),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_function: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s
                    ) {
                      var u = eX(n, r);
                      (e = ee(e)),
                        (a = eW(i, a)),
                        eC([], [t], function (t) {
                          function r() {
                            eY(
                              "Cannot call ".concat(i, " due to unbound types"),
                              u
                            );
                          }
                          t = t[0];
                          var i = "".concat(t.name, ".").concat(e);
                          e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                            s && t.i.qb.push(e);
                          var c = t.i.N,
                            l = c[e];
                          return (
                            void 0 === l ||
                            (void 0 === l.B &&
                              l.className !== t.name &&
                              l.ea === n - 2)
                              ? ((r.ea = n - 2),
                                (r.className = t.name),
                                (c[e] = r))
                              : (eL(c, e, i), (c[e].B[n - 2] = r)),
                            eC([], u, function (r) {
                              return (
                                (r = ez(i, r, t, a, o)),
                                void 0 === c[e].B
                                  ? ((r.ea = n - 2), (c[e] = r))
                                  : (c[e].B[n - 2] = r),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_property: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      c
                    ) {
                      (e = ee(e)),
                        (i = eW(r, i)),
                        eC([], [t], function (t) {
                          t = t[0];
                          var r = "".concat(t.name, ".").concat(e),
                            l = {
                              get() {
                                eY(
                                  "Cannot access ".concat(
                                    r,
                                    " due to unbound types"
                                  ),
                                  [n, o]
                                );
                              },
                              enumerable: !0,
                              configurable: !0,
                            };
                          return (
                            (l.set = u
                              ? () => {
                                  eY(
                                    "Cannot access ".concat(
                                      r,
                                      " due to unbound types"
                                    ),
                                    [n, o]
                                  );
                                }
                              : () => {
                                  t3(r + " is a read-only property");
                                }),
                            Object.defineProperty(t.i.N, e, l),
                            eC([], u ? [n, o] : [n], function (n) {
                              var o = n[0],
                                l = {
                                  get() {
                                    var e = eH(this, t, r + " getter");
                                    return o.fromWireType(i(a, e));
                                  },
                                  enumerable: !0,
                                };
                              if (u) {
                                u = eW(s, u);
                                var h = n[1];
                                l.set = function (e) {
                                  var n = eH(this, t, r + " setter"),
                                    i = [];
                                  u(c, n, h.toWireType(i, e)), ey(i);
                                };
                              }
                              return Object.defineProperty(t.i.N, e, l), [];
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_emval: function (t, e) {
                      eE(t, {
                        name: (e = ee(e)),
                        fromWireType: function (t) {
                          var e = t5(t);
                          return eV(t), e;
                        },
                        toWireType: function (t, e) {
                          return t8(e);
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ew,
                        K: null,
                      });
                    },
                    _embind_register_enum: function (t, e, n, r) {
                      function i() {}
                      (n = eR(n)),
                        (e = ee(e)),
                        (i.values = {}),
                        eE(t, {
                          name: e,
                          constructor: i,
                          fromWireType: function (t) {
                            return this.constructor.values[t];
                          },
                          toWireType: function (t, e) {
                            return e.value;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: (function (t, e, n) {
                            switch (e) {
                              case 0:
                                return function (t) {
                                  return this.fromWireType((n ? T : P)[t]);
                                };
                              case 1:
                                return function (t) {
                                  return this.fromWireType((n ? L : M)[t >> 1]);
                                };
                              case 2:
                                return function (t) {
                                  return this.fromWireType((n ? F : S)[t >> 2]);
                                };
                              default:
                                throw TypeError("Unknown integer type: " + t);
                            }
                          })(e, n, r),
                          K: null,
                        }),
                        eM(e, i);
                    },
                    _embind_register_enum_value: function (t, e, n) {
                      var r = ec(t, "enum");
                      (e = ee(e)),
                        (t = r.constructor),
                        (r = Object.create(r.constructor.prototype, {
                          value: { value: n },
                          constructor: {
                            value: t1(
                              "".concat(r.name, "_").concat(e),
                              function () {}
                            ),
                          },
                        })),
                        (t.values[n] = r),
                        (t[e] = r);
                    },
                    _embind_register_float: function (t, e, n) {
                      (n = eR(n)),
                        eE(t, {
                          name: (e = ee(e)),
                          fromWireType: function (t) {
                            return t;
                          },
                          toWireType: function (t, e) {
                            return e;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: (function (t, e) {
                            switch (e) {
                              case 2:
                                return function (t) {
                                  return this.fromWireType(x[t >> 2]);
                                };
                              case 3:
                                return function (t) {
                                  return this.fromWireType(j[t >> 3]);
                                };
                              default:
                                throw TypeError("Unknown float type: " + t);
                            }
                          })(e, n),
                          K: null,
                        });
                    },
                    _embind_register_function: function (t, e, n, r, i, a) {
                      var o = eX(e, n);
                      (t = ee(t)),
                        (i = eW(r, i)),
                        eM(
                          t,
                          function () {
                            eY(
                              "Cannot call ".concat(t, " due to unbound types"),
                              o
                            );
                          },
                          e - 1
                        ),
                        eC([], o, function (n) {
                          return (
                            ek(
                              t,
                              ez(
                                t,
                                [n[0], null].concat(n.slice(1)),
                                null,
                                i,
                                a
                              ),
                              e - 1
                            ),
                            []
                          );
                        });
                    },
                    _embind_register_integer: function (t, e, n, r, i) {
                      (e = ee(e)), -1 === i && (i = 4294967295), (i = eR(n));
                      var a = (t) => t;
                      if (0 === r) {
                        var o = 32 - 8 * n;
                        a = (t) => (t << o) >>> o;
                      }
                      (n = e.includes("unsigned")
                        ? function (t, e) {
                            return e >>> 0;
                          }
                        : function (t, e) {
                            return e;
                          }),
                        eE(t, {
                          name: e,
                          fromWireType: a,
                          toWireType: n,
                          argPackAdvance: 8,
                          readValueFromPointer: (function (t, e, n) {
                            switch (e) {
                              case 0:
                                return n
                                  ? function (t) {
                                      return T[t];
                                    }
                                  : function (t) {
                                      return P[t];
                                    };
                              case 1:
                                return n
                                  ? function (t) {
                                      return L[t >> 1];
                                    }
                                  : function (t) {
                                      return M[t >> 1];
                                    };
                              case 2:
                                return n
                                  ? function (t) {
                                      return F[t >> 2];
                                    }
                                  : function (t) {
                                      return S[t >> 2];
                                    };
                              default:
                                throw TypeError("Unknown integer type: " + t);
                            }
                          })(e, i, 0 !== r),
                          K: null,
                        });
                    },
                    _embind_register_memory_view: function (t, e, n) {
                      function r(t) {
                        t >>= 2;
                        var e = S;
                        return new i(e.buffer, e[t + 1], e[t]);
                      }
                      var i = [
                        Int8Array,
                        Uint8Array,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array,
                      ][e];
                      eE(
                        t,
                        {
                          name: (n = ee(n)),
                          fromWireType: r,
                          argPackAdvance: 8,
                          readValueFromPointer: r,
                        },
                        { $b: !0 }
                      );
                    },
                    _embind_register_std_string: function (t, e) {
                      var n = "std::string" === (e = ee(e));
                      eE(t, {
                        name: e,
                        fromWireType: function (t) {
                          var e = S[t >> 2],
                            r = t + 4;
                          if (n)
                            for (var i = r, a = 0; a <= e; ++a) {
                              var o = r + a;
                              if (a == e || 0 == P[o]) {
                                if (
                                  ((i = i ? ts(P, i, o - i) : ""), void 0 === s)
                                )
                                  var s = i;
                                else s += "\x00" + i;
                                i = o + 1;
                              }
                            }
                          else {
                            for (a = 0, s = Array(e); a < e; ++a)
                              s[a] = String.fromCharCode(P[r + a]);
                            s = s.join("");
                          }
                          return ns(t), s;
                        },
                        toWireType: function (t, e) {
                          e instanceof ArrayBuffer && (e = new Uint8Array(e));
                          var r = "string" == typeof e;
                          r ||
                            e instanceof Uint8Array ||
                            e instanceof Uint8ClampedArray ||
                            e instanceof Int8Array ||
                            t3("Cannot pass non-string to std::string");
                          var i = n && r ? tc(e) : e.length,
                            a = nu(4 + i + 1),
                            o = a + 4;
                          if (((S[a >> 2] = i), n && r)) tl(e, P, o, i + 1);
                          else if (r)
                            for (r = 0; r < i; ++r) {
                              var s = e.charCodeAt(r);
                              255 < s &&
                                (ns(o),
                                t3(
                                  "String has UTF-16 code units that do not fit in 8 bits"
                                )),
                                (P[o + r] = s);
                            }
                          else for (r = 0; r < i; ++r) P[o + r] = e[r];
                          return null !== t && t.push(ns, a), a;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ew,
                        K: function (t) {
                          ns(t);
                        },
                      });
                    },
                    _embind_register_std_wstring: function (t, e, n) {
                      if (((n = ee(n)), 2 === e))
                        var r = eJ,
                          i = eK,
                          a = eZ,
                          o = () => M,
                          s = 1;
                      else
                        4 === e &&
                          ((r = eQ),
                          (i = e$),
                          (a = e0),
                          (o = () => S),
                          (s = 2));
                      eE(t, {
                        name: n,
                        fromWireType: function (t) {
                          for (
                            var n, i = S[t >> 2], a = o(), u = t + 4, c = 0;
                            c <= i;
                            ++c
                          ) {
                            var l = t + 4 + c * e;
                            (c == i || 0 == a[l >> s]) &&
                              ((u = r(u, l - u)),
                              void 0 === n ? (n = u) : (n += "\x00" + u),
                              (u = l + e));
                          }
                          return ns(t), n;
                        },
                        toWireType: function (t, r) {
                          "string" != typeof r &&
                            t3(
                              "Cannot pass non-string to C++ string type ".concat(
                                n
                              )
                            );
                          var o = a(r),
                            u = nu(4 + o + e);
                          return (
                            (S[u >> 2] = o >> s),
                            i(r, u + 4, o + e),
                            null !== t && t.push(ns, u),
                            u
                          );
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ew,
                        K: function (t) {
                          ns(t);
                        },
                      });
                    },
                    _embind_register_value_object: function (t, e, n, r, i, a) {
                      eb[t] = {
                        name: ee(e),
                        Pa: eW(n, r),
                        W: eW(i, a),
                        eb: [],
                      };
                    },
                    _embind_register_value_object_field: function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      c
                    ) {
                      eb[t].eb.push({
                        Sb: ee(e),
                        Yb: n,
                        Wb: eW(r, i),
                        Xb: a,
                        rc: o,
                        qc: eW(s, u),
                        sc: c,
                      });
                    },
                    _embind_register_void: function (t, e) {
                      eE(t, {
                        fc: !0,
                        name: (e = ee(e)),
                        argPackAdvance: 0,
                        fromWireType: function () {},
                        toWireType: function () {},
                      });
                    },
                    _emscripten_get_now_is_monotonic: () => !0,
                    _emval_as: function (t, e, n) {
                      (t = t5(t)), (e = ec(e, "emval::as"));
                      var r = [],
                        i = t8(r);
                      return (S[n >> 2] = i), e.toWireType(r, t);
                    },
                    _emval_call_method: function (t, e, n, r, i) {
                      (t = e6[t]), (e = t5(e)), (n = e2(n));
                      var a = [];
                      return (S[r >> 2] = t8(a)), t(e, n, a, i);
                    },
                    _emval_call_void_method: function (t, e, n, r) {
                      (t = e6[t])((e = t5(e)), (n = e2(n)), null, r);
                    },
                    _emval_decref: eV,
                    _emval_get_method_caller: function (t, e) {
                      var n,
                        r = (function (t, e) {
                          for (var n = Array(t), r = 0; r < t; ++r)
                            n[r] = ec(S[(e + 4 * r) >> 2], "parameter " + r);
                          return n;
                        })(t, e),
                        i = r[0],
                        a =
                          e3[
                            (e =
                              i.name +
                              "_$" +
                              r
                                .slice(1)
                                .map(function (t) {
                                  return t.name;
                                })
                                .join("_") +
                              "$")
                          ];
                      if (void 0 !== a) return a;
                      var o = Array(t - 1);
                      return (
                        (n = e6.length),
                        e6.push((e, n, a, s) => {
                          for (var u = 0, c = 0; c < t - 1; ++c)
                            (o[c] = r[c + 1].readValueFromPointer(s + u)),
                              (u += r[c + 1].argPackAdvance);
                          for (c = 0, e = e[n].apply(e, o); c < t - 1; ++c)
                            r[c + 1].Nb && r[c + 1].Nb(o[c]);
                          if (!i.fc) return i.toWireType(a, e);
                        }),
                        (a = n),
                        (e3[e] = a)
                      );
                    },
                    _emval_get_module_property: function (e) {
                      return t8(t[(e = e2(e))]);
                    },
                    _emval_get_property: function (t, e) {
                      return t8((t = t5(t))[(e = t5(e))]);
                    },
                    _emval_incref: function (t) {
                      4 < t && (t4.get(t).tb += 1);
                    },
                    _emval_new_cstring: function (t) {
                      return t8(e2(t));
                    },
                    _emval_new_object: function () {
                      return t8({});
                    },
                    _emval_run_destructors: function (t) {
                      ey(t5(t)), eV(t);
                    },
                    _emval_set_property: function (t, e, n) {
                      (t = t5(t)), (e = t5(e)), (n = t5(n)), (t[e] = n);
                    },
                    _emval_take_value: function (t, e) {
                      return t8(
                        (t = (t = ec(
                          t,
                          "_emval_take_value"
                        )).readValueFromPointer(e))
                      );
                    },
                    abort: () => {
                      z("");
                    },
                    emscripten_asm_const_int: (t, e, n) => {
                      var r;
                      for (e5.length = 0, n >>= 2; (r = P[e++]); )
                        (n += (105 != r) & n),
                          e5.push(105 == r ? F[n] : j[n++ >> 1]),
                          ++n;
                      return Z[t].apply(null, e5);
                    },
                    emscripten_date_now: function () {
                      return Date.now();
                    },
                    emscripten_get_now: () => performance.now(),
                    emscripten_memcpy_big: (t, e, n) =>
                      P.copyWithin(t, e, e + n),
                    emscripten_resize_heap: (t) => {
                      var e = P.length;
                      if (2147483648 < (t >>>= 0)) return !1;
                      for (var n = 1; 4 >= n; n *= 2) {
                        var r = e * (1 + 0.2 / n);
                        r = Math.min(r, t + 100663296);
                        var i = Math;
                        r = Math.max(t, r);
                        t: {
                          i =
                            (i.min.call(
                              i,
                              2147483648,
                              r + ((65536 - (r % 65536)) % 65536)
                            ) -
                              R.buffer.byteLength +
                              65535) >>>
                            16;
                          try {
                            R.grow(i), I();
                            var a = 1;
                            break t;
                          } catch (t) {}
                          a = void 0;
                        }
                        if (a) return !0;
                      }
                      return !1;
                    },
                    environ_get: (t, e) => {
                      var n = 0;
                      return (
                        e9().forEach(function (r, i) {
                          var a = e + n;
                          for (
                            i = S[(t + 4 * i) >> 2] = a, a = 0;
                            a < r.length;
                            ++a
                          )
                            T[i++ >> 0] = r.charCodeAt(a);
                          (T[i >> 0] = 0), (n += r.length + 1);
                        }),
                        0
                      );
                    },
                    environ_sizes_get: (t, e) => {
                      var n = e9();
                      S[t >> 2] = n.length;
                      var r = 0;
                      return (
                        n.forEach(function (t) {
                          r += t.length + 1;
                        }),
                        (S[e >> 2] = r),
                        0
                      );
                    },
                    fd_close: function (t) {
                      try {
                        var e = tU(t);
                        if (null === e.X) throw new tP(8);
                        e.Ma && (e.Ma = null);
                        try {
                          e.m.close && e.m.close(e);
                        } catch (t) {
                          throw t;
                        } finally {
                          tC[e.X] = null;
                        }
                        return (e.X = null), 0;
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return t.aa;
                      }
                    },
                    fd_read: function (t, e, n, r) {
                      try {
                        t: {
                          var i = tU(t);
                          t = e;
                          for (var a, o = (e = 0); o < n; o++) {
                            var s = S[t >> 2],
                              u = S[(t + 4) >> 2];
                            t += 8;
                            var c = a,
                              l = T;
                            if (0 > u || 0 > c) throw new tP(28);
                            if (null === i.X || 1 == (2097155 & i.flags))
                              throw new tP(8);
                            if (16384 == (61440 & i.node.mode))
                              throw new tP(31);
                            if (!i.m.read) throw new tP(28);
                            var h = void 0 !== c;
                            if (h) {
                              if (!i.seekable) throw new tP(70);
                            } else c = i.position;
                            var f = i.m.read(i, l, s, u, c);
                            if ((h || (i.position += f), 0 > f)) {
                              var d = -1;
                              break t;
                            }
                            if (((e += f), f < u)) break;
                            void 0 !== a && (a += f);
                          }
                          d = e;
                        }
                        return (S[r >> 2] = d), 0;
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return t.aa;
                      }
                    },
                    fd_seek: function (t, e, n, r, i) {
                      e =
                        (n + 2097152) >>> 0 < 4194305 - !!e
                          ? (e >>> 0) + 4294967296 * n
                          : NaN;
                      try {
                        if (isNaN(e)) return 61;
                        var a = tU(t);
                        return (
                          tq(a, e, r),
                          (K = [
                            a.position >>> 0,
                            ((J = a.position),
                            1 <= +Math.abs(J)
                              ? 0 < J
                                ? +Math.floor(J / 4294967296) >>> 0
                                : ~~+Math.ceil(
                                    (J - +(~~J >>> 0)) / 4294967296
                                  ) >>> 0
                              : 0),
                          ]),
                          (F[i >> 2] = K[0]),
                          (F[(i + 4) >> 2] = K[1]),
                          a.Ma && 0 === e && 0 === r && (a.Ma = null),
                          0
                        );
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return t.aa;
                      }
                    },
                    fd_write: function (t, e, n, r) {
                      try {
                        t: {
                          var i = tU(t);
                          t = e;
                          for (var a, o = (e = 0); o < n; o++) {
                            var s = S[t >> 2],
                              u = S[(t + 4) >> 2];
                            t += 8;
                            var c = a,
                              l = T;
                            if (0 > u || 0 > c) throw new tP(28);
                            if (null === i.X || 0 == (2097155 & i.flags))
                              throw new tP(8);
                            if (16384 == (61440 & i.node.mode))
                              throw new tP(31);
                            if (!i.m.write) throw new tP(28);
                            i.seekable && 1024 & i.flags && tq(i, 0, 2);
                            var h = void 0 !== c;
                            if (h) {
                              if (!i.seekable) throw new tP(70);
                            } else c = i.position;
                            var f = i.m.write(i, l, s, u, c, void 0);
                            if ((h || (i.position += f), 0 > f)) {
                              var d = -1;
                              break t;
                            }
                            (e += f), void 0 !== a && (a += f);
                          }
                          d = e;
                        }
                        return (S[r >> 2] = d), 0;
                      } catch (t) {
                        if (void 0 === tZ || "ErrnoError" !== t.name) throw t;
                        return t.aa;
                      }
                    },
                    strftime_l: (t, e, n, r) => nn(t, e, n, r),
                  };
                  !(function () {
                    function e(e) {
                      if (
                        ((R = (E = e = e.exports).memory),
                        I(),
                        (k = E.__indirect_function_table),
                        U.unshift(E.__wasm_call_ctors),
                        W--,
                        t.monitorRunDependencies && t.monitorRunDependencies(W),
                        0 == W &&
                          (null !== N && (clearInterval(N), (N = null)), Y))
                      ) {
                        var n = Y;
                        (Y = null), n();
                      }
                      return e;
                    }
                    var n,
                      r,
                      i = { env: no, wasi_snapshot_preview1: no };
                    if (
                      (W++,
                      t.monitorRunDependencies && t.monitorRunDependencies(W),
                      t.instantiateWasm)
                    )
                      try {
                        return t.instantiateWasm(i, e);
                      } catch (t) {
                        A(
                          "Module.instantiateWasm callback failed with error: " +
                            t
                        ),
                          p(t);
                      }
                    ((n = function (t) {
                      e(t.instance);
                    }),
                    (r = q),
                    C ||
                    "function" != typeof WebAssembly.instantiateStreaming ||
                    X(r) ||
                    r.startsWith("file://") ||
                    "function" != typeof fetch
                      ? G(r, i, n)
                      : fetch(r, { credentials: "same-origin" }).then((t) =>
                          WebAssembly.instantiateStreaming(t, i).then(
                            n,
                            function (t) {
                              return (
                                A("wasm streaming compile failed: " + t),
                                A("falling back to ArrayBuffer instantiation"),
                                G(r, i, n)
                              );
                            }
                          )
                        )).catch(p);
                  })();
                  var ns = (t) => (ns = E.free)(t),
                    nu = (t) => (nu = E.malloc)(t),
                    nc = (t._ma_device__on_notification_unlocked = (e) =>
                      (nc = t._ma_device__on_notification_unlocked =
                        E.ma_device__on_notification_unlocked)(e));
                  (t._ma_malloc_emscripten = (e, n) =>
                    (t._ma_malloc_emscripten = E.ma_malloc_emscripten)(e, n)),
                    (t._ma_free_emscripten = (e, n) =>
                      (t._ma_free_emscripten = E.ma_free_emscripten)(e, n));
                  var nl = (t._ma_device_process_pcm_frames_capture__webaudio =
                      (e, n, r) =>
                        (nl =
                          t._ma_device_process_pcm_frames_capture__webaudio =
                            E.ma_device_process_pcm_frames_capture__webaudio)(
                          e,
                          n,
                          r
                        )),
                    nh = (t._ma_device_process_pcm_frames_playback__webaudio = (
                      e,
                      n,
                      r
                    ) =>
                      (nh = t._ma_device_process_pcm_frames_playback__webaudio =
                        E.ma_device_process_pcm_frames_playback__webaudio)(
                        e,
                        n,
                        r
                      )),
                    nf = () => (nf = E.__errno_location)(),
                    nd = (t) => (nd = E.__getTypeName)(t);
                  function np() {
                    function e() {
                      if (!f && ((f = !0), (t.calledRun = !0), !O)) {
                        if (
                          (t.noFSInit ||
                            tv ||
                            ((tv = !0),
                            tJ(),
                            (t.stdin = t.stdin),
                            (t.stdout = t.stdout),
                            (t.stderr = t.stderr),
                            t.stdin
                              ? tK("stdin", t.stdin)
                              : tH("/dev/tty", "/dev/stdin"),
                            t.stdout
                              ? tK("stdout", null, t.stdout)
                              : tH("/dev/tty", "/dev/stdout"),
                            t.stderr
                              ? tK("stderr", null, t.stderr)
                              : tH("/dev/tty1", "/dev/stderr"),
                            tG("/dev/stdin", 0),
                            tG("/dev/stdout", 1),
                            tG("/dev/stderr", 1)),
                          (tT = !1),
                          Q(U),
                          d(t),
                          t.onRuntimeInitialized && t.onRuntimeInitialized(),
                          t.postRun)
                        )
                          for (
                            "function" == typeof t.postRun &&
                            (t.postRun = [t.postRun]);
                            t.postRun.length;

                          ) {
                            var e = t.postRun.shift();
                            B.unshift(e);
                          }
                        Q(B);
                      }
                    }
                    if (!(0 < W)) {
                      if (t.preRun)
                        for (
                          "function" == typeof t.preRun &&
                          (t.preRun = [t.preRun]);
                          t.preRun.length;

                        )
                          !(function () {
                            var e = t.preRun.shift();
                            D.unshift(e);
                          })();
                      Q(D),
                        0 < W ||
                          (t.setStatus
                            ? (t.setStatus("Running..."),
                              setTimeout(function () {
                                setTimeout(function () {
                                  t.setStatus("");
                                }, 1),
                                  e();
                              }, 1))
                            : e());
                    }
                  }
                  if (
                    ((t.__embind_initialize_bindings = () =>
                      (t.__embind_initialize_bindings =
                        E._embind_initialize_bindings)()),
                    (t.dynCall_iiji = (e, n, r, i, a) =>
                      (t.dynCall_iiji = E.dynCall_iiji)(e, n, r, i, a)),
                    (t.dynCall_jiji = (e, n, r, i, a) =>
                      (t.dynCall_jiji = E.dynCall_jiji)(e, n, r, i, a)),
                    (t.dynCall_iiiji = (e, n, r, i, a, o) =>
                      (t.dynCall_iiiji = E.dynCall_iiiji)(e, n, r, i, a, o)),
                    (t.dynCall_iij = (e, n, r, i) =>
                      (t.dynCall_iij = E.dynCall_iij)(e, n, r, i)),
                    (t.dynCall_jii = (e, n, r) =>
                      (t.dynCall_jii = E.dynCall_jii)(e, n, r)),
                    (t.dynCall_viijii = (e, n, r, i, a, o, s) =>
                      (t.dynCall_viijii = E.dynCall_viijii)(
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      )),
                    (t.dynCall_iiiiij = (e, n, r, i, a, o, s) =>
                      (t.dynCall_iiiiij = E.dynCall_iiiiij)(
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      )),
                    (t.dynCall_iiiiijj = (e, n, r, i, a, o, s, u, c) =>
                      (t.dynCall_iiiiijj = E.dynCall_iiiiijj)(
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        c
                      )),
                    (t.dynCall_iiiiiijj = (e, n, r, i, a, o, s, u, c, l) =>
                      (t.dynCall_iiiiiijj = E.dynCall_iiiiiijj)(
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        c,
                        l
                      )),
                    (Y = function t() {
                      f || np(), f || (Y = t);
                    }),
                    t.preInit)
                  )
                    for (
                      "function" == typeof t.preInit &&
                      (t.preInit = [t.preInit]);
                      0 < t.preInit.length;

                    )
                      t.preInit.pop()();
                  return np(), t.ready;
                });
            },
            (t) => {
              t.exports = JSON.parse(
                '{"name":"@rive-app/canvas","version":"2.25.3","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}'
              );
            },
            (t, e, n) => {
              n.r(e), n.d(e, { Animation: () => r.Animation });
              var r = n(4);
            },
            (t, e, n) => {
              n.r(e), n.d(e, { Animation: () => r });
              var r = (function () {
                function t(t, e, n, r) {
                  (this.animation = t),
                    (this.artboard = e),
                    (this.playing = r),
                    (this.loopCount = 0),
                    (this.scrubTo = null),
                    (this.instance = new n.LinearAnimationInstance(t, e));
                }
                return (
                  Object.defineProperty(t.prototype, "name", {
                    get: function () {
                      return this.animation.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "time", {
                    get: function () {
                      return this.instance.time;
                    },
                    set: function (t) {
                      this.instance.time = t;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "loopValue", {
                    get: function () {
                      return this.animation.loopValue;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(t.prototype, "needsScrub", {
                    get: function () {
                      return null !== this.scrubTo;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (t.prototype.advance = function (t) {
                    null === this.scrubTo
                      ? this.instance.advance(t)
                      : ((this.instance.time = 0),
                        this.instance.advance(this.scrubTo),
                        (this.scrubTo = null));
                  }),
                  (t.prototype.apply = function (t) {
                    this.instance.apply(t);
                  }),
                  (t.prototype.cleanup = function () {
                    this.instance.delete();
                  }),
                  t
                );
              })();
            },
            (t, e, n) => {
              n.r(e),
                n.d(e, {
                  BLANK_URL: () => i.BLANK_URL,
                  registerTouchInteractions: () => r.registerTouchInteractions,
                  sanitizeUrl: () => i.sanitizeUrl,
                });
              var r = n(6),
                i = n(7);
            },
            (t, e, n) => {
              n.r(e), n.d(e, { registerTouchInteractions: () => a });
              var r = void 0,
                i = function (t, e) {
                  var n, r;
                  return ["touchstart", "touchmove"].indexOf(t.type) > -1 &&
                    (null === (n = t.touches) || void 0 === n
                      ? void 0
                      : n.length)
                    ? (e || t.preventDefault(),
                      {
                        clientX: t.touches[0].clientX,
                        clientY: t.touches[0].clientY,
                      })
                    : "touchend" === t.type &&
                      (null === (r = t.changedTouches) || void 0 === r
                        ? void 0
                        : r.length)
                    ? {
                        clientX: t.changedTouches[0].clientX,
                        clientY: t.changedTouches[0].clientY,
                      }
                    : { clientX: t.clientX, clientY: t.clientY };
                },
                a = function (t) {
                  var e = t.canvas,
                    n = t.artboard,
                    a = t.stateMachines,
                    o = void 0 === a ? [] : a,
                    s = t.renderer,
                    u = t.rive,
                    c = t.fit,
                    l = t.alignment,
                    h = t.isTouchScrollEnabled,
                    f = void 0 !== h && h,
                    d = t.layoutScaleFactor,
                    p = void 0 === d ? 1 : d;
                  if (!e || !o.length || !s || !u || !n) return null;
                  var m = null,
                    v = !1,
                    g = function (t) {
                      if (v && t instanceof MouseEvent) {
                        "mouseup" == t.type && (v = !1);
                        return;
                      }
                      (v = f && "touchend" === t.type && "touchstart" === m),
                        (m = t.type);
                      var e = t.currentTarget.getBoundingClientRect(),
                        r = i(t, f),
                        a = r.clientX,
                        s = r.clientY;
                      if (a || s) {
                        var h = a - e.left,
                          d = s - e.top,
                          g = u.computeAlignment(
                            c,
                            l,
                            { minX: 0, minY: 0, maxX: e.width, maxY: e.height },
                            n.bounds,
                            p
                          ),
                          b = new u.Mat2D();
                        g.invert(b);
                        var y = new u.Vec2D(h, d),
                          w = u.mapXY(b, y),
                          _ = w.x(),
                          A = w.y();
                        switch (
                          (w.delete(),
                          b.delete(),
                          y.delete(),
                          g.delete(),
                          t.type)
                        ) {
                          case "mouseout":
                            for (var C = 0; C < o.length; C++) {
                              var R = o[C];
                              R.pointerMove(_, A);
                            }
                            break;
                          case "touchmove":
                          case "mouseover":
                          case "mousemove":
                            for (var E = 0; E < o.length; E++) {
                              var R = o[E];
                              R.pointerMove(_, A);
                            }
                            break;
                          case "touchstart":
                          case "mousedown":
                            for (var T = 0; T < o.length; T++) {
                              var R = o[T];
                              R.pointerDown(_, A);
                            }
                            break;
                          case "touchend":
                          case "mouseup":
                            for (var P = 0; P < o.length; P++) {
                              var R = o[P];
                              R.pointerUp(_, A);
                            }
                        }
                      }
                    }.bind(r);
                  return (
                    e.addEventListener("mouseover", g),
                    e.addEventListener("mouseout", g),
                    e.addEventListener("mousemove", g),
                    e.addEventListener("mousedown", g),
                    e.addEventListener("mouseup", g),
                    e.addEventListener("touchmove", g, { passive: f }),
                    e.addEventListener("touchstart", g, { passive: f }),
                    e.addEventListener("touchend", g),
                    function () {
                      e.removeEventListener("mouseover", g),
                        e.removeEventListener("mouseout", g),
                        e.removeEventListener("mousemove", g),
                        e.removeEventListener("mousedown", g),
                        e.removeEventListener("mouseup", g),
                        e.removeEventListener("touchmove", g),
                        e.removeEventListener("touchstart", g),
                        e.removeEventListener("touchend", g);
                    }
                  );
                };
            },
            (t, e, n) => {
              n.r(e), n.d(e, { BLANK_URL: () => c, sanitizeUrl: () => l });
              var r = /^([^\w]*)(javascript|data|vbscript)/im,
                i = /&#(\w+)(^\w|;)?/g,
                a = /&(newline|tab);/gi,
                o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                s = /^.+(:|&colon;)/gim,
                u = [".", "/"],
                c = "about:blank";
              function l(t) {
                if (!t) return c;
                var e = t
                  .replace(o, "")
                  .replace(i, function (t, e) {
                    return String.fromCharCode(e);
                  })
                  .replace(a, "")
                  .replace(o, "")
                  .trim();
                if (!e) return c;
                if (u.indexOf(e[0]) > -1) return e;
                var n = e.match(s);
                if (!n) return e;
                var l = n[0];
                return r.test(l) ? c : e;
              }
            },
          ],
          Y = {};
        function z(t) {
          var e = Y[t];
          if (void 0 !== e) return e.exports;
          var n = (Y[t] = { exports: {} });
          return N[t](n, n.exports, z), n.exports;
        }
        (z.d = (t, e) => {
          for (var n in e)
            z.o(e, n) &&
              !z.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
          (z.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
          (z.r = (t) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          });
        var X = {};
        return (
          z.r(X),
          z.d(X, {
            Alignment: () => e,
            EventType: () => i,
            Fit: () => t,
            Layout: () => g,
            LoopType: () => a,
            Rive: () => O,
            RiveEventType: () => r,
            RiveFile: () => j,
            RuntimeLoader: () => b,
            StateMachineInput: () => w,
            StateMachineInputType: () => n,
            Testing: () => D,
            decodeAudio: () => U,
            decodeFont: () => W,
            decodeImage: () => B,
          }),
          (s = z(1)),
          (u = z(2)),
          (c = z(3)),
          (l = z(5)),
          (h = function (t, e) {
            return (h =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              })(t, e);
          }),
          (f = function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = t;
            }
            h(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          }),
          (d = function (t, e, n, r) {
            return new (n || (n = Promise))(function (i, a) {
              function o(t) {
                try {
                  u(r.next(t));
                } catch (t) {
                  a(t);
                }
              }
              function s(t) {
                try {
                  u(r.throw(t));
                } catch (t) {
                  a(t);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value) instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })
                    ).then(o, s);
              }
              u((r = r.apply(t, e || [])).next());
            });
          }),
          (p = function (t, e) {
            var n,
              r,
              i,
              a,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (a = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this;
                }),
              a
            );
            function s(s) {
              return function (u) {
                return (function (s) {
                  if (n) throw TypeError("Generator is already executing.");
                  for (; a && ((a = 0), s[0] && (o = 0)), o; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & s[0]
                              ? r.return
                              : s[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, s[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                        case 0:
                        case 1:
                          i = s;
                          break;
                        case 4:
                          return o.label++, { value: s[1], done: !1 };
                        case 5:
                          o.label++, (r = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                            (6 === s[0] || 2 === s[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!i || (s[1] > i[0] && s[1] < i[3]))
                          ) {
                            o.label = s[1];
                            break;
                          }
                          if (6 === s[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = s);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(s);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      s = e.call(t, o);
                    } catch (t) {
                      (s = [6, t]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, u]);
              };
            }
          }),
          ((m = t || (t = {})).Cover = "cover"),
          (m.Contain = "contain"),
          (m.Fill = "fill"),
          (m.FitWidth = "fitWidth"),
          (m.FitHeight = "fitHeight"),
          (m.None = "none"),
          (m.ScaleDown = "scaleDown"),
          (m.Layout = "layout"),
          ((v = e || (e = {})).Center = "center"),
          (v.TopLeft = "topLeft"),
          (v.TopCenter = "topCenter"),
          (v.TopRight = "topRight"),
          (v.CenterLeft = "centerLeft"),
          (v.CenterRight = "centerRight"),
          (v.BottomLeft = "bottomLeft"),
          (v.BottomCenter = "bottomCenter"),
          (v.BottomRight = "bottomRight"),
          (g = (function () {
            function n(n) {
              var r, i, a, o, s, u, c;
              (this.fit =
                null !== (r = null == n ? void 0 : n.fit) && void 0 !== r
                  ? r
                  : t.Contain),
                (this.alignment =
                  null !== (i = null == n ? void 0 : n.alignment) &&
                  void 0 !== i
                    ? i
                    : e.Center),
                (this.layoutScaleFactor =
                  null !== (a = null == n ? void 0 : n.layoutScaleFactor) &&
                  void 0 !== a
                    ? a
                    : 1),
                (this.minX =
                  null !== (o = null == n ? void 0 : n.minX) && void 0 !== o
                    ? o
                    : 0),
                (this.minY =
                  null !== (s = null == n ? void 0 : n.minY) && void 0 !== s
                    ? s
                    : 0),
                (this.maxX =
                  null !== (u = null == n ? void 0 : n.maxX) && void 0 !== u
                    ? u
                    : 0),
                (this.maxY =
                  null !== (c = null == n ? void 0 : n.maxY) && void 0 !== c
                    ? c
                    : 0);
            }
            return (
              (n.new = function (t) {
                var e = t.fit,
                  r = t.alignment,
                  i = t.minX,
                  a = t.minY,
                  o = t.maxX,
                  s = t.maxY;
                return (
                  console.warn(
                    "This function is deprecated: please use `new Layout({})` instead"
                  ),
                  new n({
                    fit: e,
                    alignment: r,
                    minX: i,
                    minY: a,
                    maxX: o,
                    maxY: s,
                  })
                );
              }),
              (n.prototype.copyWith = function (t) {
                var e = t.fit,
                  r = t.alignment,
                  i = t.layoutScaleFactor,
                  a = t.minX,
                  o = t.minY,
                  s = t.maxX,
                  u = t.maxY;
                return new n({
                  fit: null != e ? e : this.fit,
                  alignment: null != r ? r : this.alignment,
                  layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                  minX: null != a ? a : this.minX,
                  minY: null != o ? o : this.minY,
                  maxX: null != s ? s : this.maxX,
                  maxY: null != u ? u : this.maxY,
                });
              }),
              (n.prototype.runtimeFit = function (e) {
                var n;
                return this.cachedRuntimeFit
                  ? this.cachedRuntimeFit
                  : ((n =
                      this.fit === t.Cover
                        ? e.Fit.cover
                        : this.fit === t.Contain
                        ? e.Fit.contain
                        : this.fit === t.Fill
                        ? e.Fit.fill
                        : this.fit === t.FitWidth
                        ? e.Fit.fitWidth
                        : this.fit === t.FitHeight
                        ? e.Fit.fitHeight
                        : this.fit === t.ScaleDown
                        ? e.Fit.scaleDown
                        : this.fit === t.Layout
                        ? e.Fit.layout
                        : e.Fit.none),
                    (this.cachedRuntimeFit = n),
                    n);
              }),
              (n.prototype.runtimeAlignment = function (t) {
                var n;
                return this.cachedRuntimeAlignment
                  ? this.cachedRuntimeAlignment
                  : ((n =
                      this.alignment === e.TopLeft
                        ? t.Alignment.topLeft
                        : this.alignment === e.TopCenter
                        ? t.Alignment.topCenter
                        : this.alignment === e.TopRight
                        ? t.Alignment.topRight
                        : this.alignment === e.CenterLeft
                        ? t.Alignment.centerLeft
                        : this.alignment === e.CenterRight
                        ? t.Alignment.centerRight
                        : this.alignment === e.BottomLeft
                        ? t.Alignment.bottomLeft
                        : this.alignment === e.BottomCenter
                        ? t.Alignment.bottomCenter
                        : this.alignment === e.BottomRight
                        ? t.Alignment.bottomRight
                        : t.Alignment.center),
                    (this.cachedRuntimeAlignment = n),
                    n);
              }),
              n
            );
          })()),
          (b = (function () {
            function t() {}
            return (
              (t.loadRuntime = function () {
                s.default({
                  locateFile: function () {
                    return t.wasmURL;
                  },
                })
                  .then(function (e) {
                    var n;
                    for (t.runtime = e; t.callBackQueue.length > 0; )
                      null === (n = t.callBackQueue.shift()) ||
                        void 0 === n ||
                        n(t.runtime);
                  })
                  .catch(function (e) {
                    var n = {
                      message:
                        (null == e ? void 0 : e.message) || "Unknown error",
                      type: (null == e ? void 0 : e.name) || "Error",
                      wasmError:
                        e instanceof WebAssembly.CompileError ||
                        e instanceof WebAssembly.RuntimeError,
                      originalError: e,
                    };
                    console.debug("Rive WASM load error details:", n);
                    var r = "https://cdn.jsdelivr.net/npm/"
                      .concat(u.name, "@")
                      .concat(u.version, "/rive_fallback.wasm");
                    t.wasmURL.toLowerCase() !== r
                      ? (console.warn(
                          "Failed to load WASM from "
                            .concat(t.wasmURL, " (")
                            .concat(n.message, "), trying jsdelivr as a backup")
                        ),
                        t.setWasmUrl(r),
                        t.loadRuntime())
                      : console.error(
                          [
                            "Could not load Rive WASM file from "
                              .concat(t.wasmURL, " or ")
                              .concat(r, "."),
                            "Possible reasons:",
                            "- Network connection is down",
                            "- WebAssembly is not supported in this environment",
                            "- The WASM file is corrupted or incompatible",
                            "\nError details:",
                            "- Type: ".concat(n.type),
                            "- Message: ".concat(n.message),
                            "- WebAssembly-specific error: ".concat(
                              n.wasmError
                            ),
                            "\nTo resolve, you may need to:",
                            "1. Check your network connection",
                            "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                            "3. Call RuntimeLoader.loadRuntime() again",
                          ].join("\n")
                        );
                  });
              }),
              (t.getInstance = function (e) {
                t.isLoading || ((t.isLoading = !0), t.loadRuntime()),
                  t.runtime ? e(t.runtime) : t.callBackQueue.push(e);
              }),
              (t.awaitInstance = function () {
                return new Promise(function (e) {
                  return t.getInstance(function (t) {
                    return e(t);
                  });
                });
              }),
              (t.setWasmUrl = function (e) {
                t.wasmURL = e;
              }),
              (t.getWasmUrl = function () {
                return t.wasmURL;
              }),
              (t.isLoading = !1),
              (t.callBackQueue = []),
              (t.wasmURL = "https://unpkg.com/"
                .concat(u.name, "@")
                .concat(u.version, "/rive.wasm")),
              t
            );
          })()),
          ((y = n || (n = {}))[(y.Number = 56)] = "Number"),
          (y[(y.Trigger = 58)] = "Trigger"),
          (y[(y.Boolean = 59)] = "Boolean"),
          (w = (function () {
            function t(t, e) {
              (this.type = t), (this.runtimeInput = e);
            }
            return (
              Object.defineProperty(t.prototype, "name", {
                get: function () {
                  return this.runtimeInput.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this.runtimeInput.value;
                },
                set: function (t) {
                  this.runtimeInput.value = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.fire = function () {
                this.type === n.Trigger && this.runtimeInput.fire();
              }),
              (t.prototype.delete = function () {
                this.runtimeInput = null;
              }),
              t
            );
          })()),
          ((_ = r || (r = {}))[(_.General = 128)] = "General"),
          (_[(_.OpenUrl = 131)] = "OpenUrl"),
          (A = (function () {
            function t(t, e, n, r) {
              (this.stateMachine = t),
                (this.playing = n),
                (this.artboard = r),
                (this.inputs = []),
                (this.instance = new e.StateMachineInstance(t, r)),
                this.initInputs(e);
            }
            return (
              Object.defineProperty(t.prototype, "name", {
                get: function () {
                  return this.stateMachine.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "statesChanged", {
                get: function () {
                  for (
                    var t = [], e = 0;
                    e < this.instance.stateChangedCount();
                    e++
                  )
                    t.push(this.instance.stateChangedNameByIndex(e));
                  return t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.advance = function (t) {
                this.instance.advance(t);
              }),
              (t.prototype.advanceAndApply = function (t) {
                this.instance.advanceAndApply(t);
              }),
              (t.prototype.reportedEventCount = function () {
                return this.instance.reportedEventCount();
              }),
              (t.prototype.reportedEventAt = function (t) {
                return this.instance.reportedEventAt(t);
              }),
              (t.prototype.initInputs = function (t) {
                for (var e = 0; e < this.instance.inputCount(); e++) {
                  var n = this.instance.input(e);
                  this.inputs.push(this.mapRuntimeInput(n, t));
                }
              }),
              (t.prototype.mapRuntimeInput = function (t, e) {
                return t.type === e.SMIInput.bool
                  ? new w(n.Boolean, t.asBool())
                  : t.type === e.SMIInput.number
                  ? new w(n.Number, t.asNumber())
                  : t.type === e.SMIInput.trigger
                  ? new w(n.Trigger, t.asTrigger())
                  : void 0;
              }),
              (t.prototype.cleanup = function () {
                this.inputs.forEach(function (t) {
                  t.delete();
                }),
                  (this.inputs.length = 0),
                  this.instance.delete();
              }),
              t
            );
          })()),
          (C = (function () {
            function t(t, e, n, r, i) {
              void 0 === r && (r = []),
                void 0 === i && (i = []),
                (this.runtime = t),
                (this.artboard = e),
                (this.eventManager = n),
                (this.animations = r),
                (this.stateMachines = i);
            }
            return (
              (t.prototype.add = function (t, e, n) {
                if ((void 0 === n && (n = !0), 0 === (t = k(t)).length))
                  this.animations.forEach(function (t) {
                    return (t.playing = e);
                  }),
                    this.stateMachines.forEach(function (t) {
                      return (t.playing = e);
                    });
                else
                  for (
                    var r = this.animations.map(function (t) {
                        return t.name;
                      }),
                      a = this.stateMachines.map(function (t) {
                        return t.name;
                      }),
                      o = 0;
                    o < t.length;
                    o++
                  ) {
                    var s = r.indexOf(t[o]),
                      u = a.indexOf(t[o]);
                    if (s >= 0 || u >= 0)
                      s >= 0
                        ? (this.animations[s].playing = e)
                        : (this.stateMachines[u].playing = e);
                    else {
                      var l = this.artboard.animationByName(t[o]);
                      if (l) {
                        var h = new c.Animation(
                          l,
                          this.artboard,
                          this.runtime,
                          e
                        );
                        h.advance(0), h.apply(1), this.animations.push(h);
                      } else {
                        var f = this.artboard.stateMachineByName(t[o]);
                        if (f) {
                          var d = new A(f, this.runtime, e, this.artboard);
                          this.stateMachines.push(d);
                        }
                      }
                    }
                  }
                return (
                  n &&
                    (e
                      ? this.eventManager.fire({
                          type: i.Play,
                          data: this.playing,
                        })
                      : this.eventManager.fire({
                          type: i.Pause,
                          data: this.paused,
                        })),
                  e ? this.playing : this.paused
                );
              }),
              (t.prototype.initLinearAnimations = function (t, e) {
                for (
                  var n = this.animations.map(function (t) {
                      return t.name;
                    }),
                    r = 0;
                  r < t.length;
                  r++
                ) {
                  var i = n.indexOf(t[r]);
                  if (i >= 0) this.animations[i].playing = e;
                  else {
                    var a = this.artboard.animationByName(t[r]);
                    if (a) {
                      var o = new c.Animation(
                        a,
                        this.artboard,
                        this.runtime,
                        e
                      );
                      o.advance(0), o.apply(1), this.animations.push(o);
                    }
                  }
                }
              }),
              (t.prototype.initStateMachines = function (t, e) {
                for (
                  var n = this.stateMachines.map(function (t) {
                      return t.name;
                    }),
                    r = 0;
                  r < t.length;
                  r++
                ) {
                  var i = n.indexOf(t[r]);
                  if (i >= 0) this.stateMachines[i].playing = e;
                  else {
                    var a = this.artboard.stateMachineByName(t[r]);
                    if (a) {
                      var o = new A(a, this.runtime, e, this.artboard);
                      this.stateMachines.push(o);
                    } else this.initLinearAnimations([t[r]], e);
                  }
                }
              }),
              (t.prototype.play = function (t) {
                return this.add(t, !0);
              }),
              (t.prototype.pause = function (t) {
                return this.add(t, !1);
              }),
              (t.prototype.scrub = function (t, e) {
                var n = this.animations.filter(function (e) {
                  return t.includes(e.name);
                });
                return (
                  n.forEach(function (t) {
                    return (t.scrubTo = e);
                  }),
                  n.map(function (t) {
                    return t.name;
                  })
                );
              }),
              Object.defineProperty(t.prototype, "playing", {
                get: function () {
                  return this.animations
                    .filter(function (t) {
                      return t.playing;
                    })
                    .map(function (t) {
                      return t.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (t) {
                          return t.playing;
                        })
                        .map(function (t) {
                          return t.name;
                        })
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "paused", {
                get: function () {
                  return this.animations
                    .filter(function (t) {
                      return !t.playing;
                    })
                    .map(function (t) {
                      return t.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (t) {
                          return !t.playing;
                        })
                        .map(function (t) {
                          return t.name;
                        })
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.stop = function (t) {
                var e = this;
                t = k(t);
                var n = [];
                if (0 === t.length)
                  (n = this.animations
                    .map(function (t) {
                      return t.name;
                    })
                    .concat(
                      this.stateMachines.map(function (t) {
                        return t.name;
                      })
                    )),
                    this.animations.forEach(function (t) {
                      return t.cleanup();
                    }),
                    this.stateMachines.forEach(function (t) {
                      return t.cleanup();
                    }),
                    this.animations.splice(0, this.animations.length),
                    this.stateMachines.splice(0, this.stateMachines.length);
                else {
                  var r = this.animations.filter(function (e) {
                    return t.includes(e.name);
                  });
                  r.forEach(function (t) {
                    t.cleanup(),
                      e.animations.splice(e.animations.indexOf(t), 1);
                  });
                  var a = this.stateMachines.filter(function (e) {
                    return t.includes(e.name);
                  });
                  a.forEach(function (t) {
                    t.cleanup(),
                      e.stateMachines.splice(e.stateMachines.indexOf(t), 1);
                  }),
                    (n = r
                      .map(function (t) {
                        return t.name;
                      })
                      .concat(
                        a.map(function (t) {
                          return t.name;
                        })
                      ));
                }
                return this.eventManager.fire({ type: i.Stop, data: n }), n;
              }),
              Object.defineProperty(t.prototype, "isPlaying", {
                get: function () {
                  return (
                    this.animations.reduce(function (t, e) {
                      return t || e.playing;
                    }, !1) ||
                    this.stateMachines.reduce(function (t, e) {
                      return t || e.playing;
                    }, !1)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPaused", {
                get: function () {
                  return (
                    !this.isPlaying &&
                    (this.animations.length > 0 ||
                      this.stateMachines.length > 0)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isStopped", {
                get: function () {
                  return (
                    0 === this.animations.length &&
                    0 === this.stateMachines.length
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.atLeastOne = function (t, e) {
                var n;
                return (
                  void 0 === e && (e = !0),
                  0 === this.animations.length &&
                    0 === this.stateMachines.length &&
                    (this.artboard.animationCount() > 0
                      ? this.add(
                          [(n = this.artboard.animationByIndex(0).name)],
                          t,
                          e
                        )
                      : this.artboard.stateMachineCount() > 0 &&
                        this.add(
                          [(n = this.artboard.stateMachineByIndex(0).name)],
                          t,
                          e
                        )),
                  n
                );
              }),
              (t.prototype.handleLooping = function () {
                for (
                  var t = 0,
                    e = this.animations.filter(function (t) {
                      return t.playing;
                    });
                  t < e.length;
                  t++
                ) {
                  var n = e[t];
                  0 === n.loopValue && n.loopCount
                    ? ((n.loopCount = 0), this.stop(n.name))
                    : 1 === n.loopValue && n.loopCount
                    ? (this.eventManager.fire({
                        type: i.Loop,
                        data: { animation: n.name, type: a.Loop },
                      }),
                      (n.loopCount = 0))
                    : 2 === n.loopValue &&
                      n.loopCount > 1 &&
                      (this.eventManager.fire({
                        type: i.Loop,
                        data: { animation: n.name, type: a.PingPong },
                      }),
                      (n.loopCount = 0));
                }
              }),
              (t.prototype.handleStateChanges = function () {
                for (
                  var t = [],
                    e = 0,
                    n = this.stateMachines.filter(function (t) {
                      return t.playing;
                    });
                  e < n.length;
                  e++
                ) {
                  var r = n[e];
                  t.push.apply(t, r.statesChanged);
                }
                t.length > 0 &&
                  this.eventManager.fire({ type: i.StateChange, data: t });
              }),
              (t.prototype.handleAdvancing = function (t) {
                this.eventManager.fire({ type: i.Advance, data: t });
              }),
              t
            );
          })()),
          ((R = i || (i = {})).Load = "load"),
          (R.LoadError = "loaderror"),
          (R.Play = "play"),
          (R.Pause = "pause"),
          (R.Stop = "stop"),
          (R.Loop = "loop"),
          (R.Draw = "draw"),
          (R.Advance = "advance"),
          (R.StateChange = "statechange"),
          (R.RiveEvent = "riveevent"),
          (R.AudioStatusChange = "audiostatuschange"),
          ((E = a || (a = {})).OneShot = "oneshot"),
          (E.Loop = "loop"),
          (E.PingPong = "pingpong"),
          (T = (function () {
            function t(t) {
              void 0 === t && (t = []), (this.listeners = t);
            }
            return (
              (t.prototype.getListeners = function (t) {
                return this.listeners.filter(function (e) {
                  return e.type === t;
                });
              }),
              (t.prototype.add = function (t) {
                this.listeners.includes(t) || this.listeners.push(t);
              }),
              (t.prototype.remove = function (t) {
                for (var e = 0; e < this.listeners.length; e++) {
                  var n = this.listeners[e];
                  if (n.type === t.type && n.callback === t.callback) {
                    this.listeners.splice(e, 1);
                    break;
                  }
                }
              }),
              (t.prototype.removeAll = function (t) {
                var e = this;
                t
                  ? this.listeners
                      .filter(function (e) {
                        return e.type === t;
                      })
                      .forEach(function (t) {
                        return e.remove(t);
                      })
                  : this.listeners.splice(0, this.listeners.length);
              }),
              (t.prototype.fire = function (t) {
                this.getListeners(t.type).forEach(function (e) {
                  return e.callback(t);
                });
              }),
              t
            );
          })()),
          (P = (function () {
            function t(t) {
              (this.eventManager = t), (this.queue = []);
            }
            return (
              (t.prototype.add = function (t) {
                this.queue.push(t);
              }),
              (t.prototype.process = function () {
                for (; this.queue.length > 0; ) {
                  var t = this.queue.shift();
                  (null == t ? void 0 : t.action) && t.action(),
                    (null == t ? void 0 : t.event) &&
                      this.eventManager.fire(t.event);
                }
              }),
              t
            );
          })()),
          ((L = o || (o = {}))[(L.AVAILABLE = 0)] = "AVAILABLE"),
          (L[(L.UNAVAILABLE = 1)] = "UNAVAILABLE"),
          (M = new ((function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e._started = !1),
                (e._enabled = !1),
                (e._status = o.UNAVAILABLE),
                e
              );
            }
            return (
              f(e, t),
              (e.prototype.delay = function (t) {
                return d(this, void 0, void 0, function () {
                  return p(this, function (e) {
                    return [
                      2,
                      new Promise(function (e) {
                        return setTimeout(e, t);
                      }),
                    ];
                  });
                });
              }),
              (e.prototype.timeout = function () {
                return d(this, void 0, void 0, function () {
                  return p(this, function (t) {
                    return [
                      2,
                      new Promise(function (t, e) {
                        return setTimeout(e, 50);
                      }),
                    ];
                  });
                });
              }),
              (e.prototype.reportToListeners = function () {
                this.fire({ type: i.AudioStatusChange }), this.removeAll();
              }),
              (e.prototype.enableAudio = function () {
                return d(this, void 0, void 0, function () {
                  return p(this, function (t) {
                    return (
                      this._enabled ||
                        ((this._enabled = !0),
                        (this._status = o.AVAILABLE),
                        this.reportToListeners()),
                      [2]
                    );
                  });
                });
              }),
              (e.prototype.testAudio = function () {
                return d(this, void 0, void 0, function () {
                  return p(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (
                          !(
                            this._status === o.UNAVAILABLE &&
                            null !== this._audioContext
                          )
                        )
                          return [3, 4];
                        t.label = 1;
                      case 1:
                        return (
                          t.trys.push([1, 3, , 4]),
                          [
                            4,
                            Promise.race([
                              this._audioContext.resume(),
                              this.timeout(),
                            ]),
                          ]
                        );
                      case 2:
                        return t.sent(), this.enableAudio(), [3, 4];
                      case 3:
                        return t.sent(), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype._establishAudio = function () {
                return d(this, void 0, void 0, function () {
                  return p(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (this._started) return [3, 5];
                        return (this._started = !0), [3, 1];
                      case 1:
                        (this._audioContext = new AudioContext()),
                          this.listenForUserAction(),
                          (t.label = 2);
                      case 2:
                        if (this._status !== o.UNAVAILABLE) return [3, 5];
                        return [4, this.testAudio()];
                      case 3:
                        return t.sent(), [4, this.delay(1e3)];
                      case 4:
                        return t.sent(), [3, 2];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.listenForUserAction = function () {
                var t = this;
                document.addEventListener(
                  "pointerdown",
                  function () {
                    return d(t, void 0, void 0, function () {
                      return p(this, function (t) {
                        return this.enableAudio(), [2];
                      });
                    });
                  },
                  { once: !0 }
                );
              }),
              (e.prototype.establishAudio = function () {
                return d(this, void 0, void 0, function () {
                  return p(this, function (t) {
                    return this._establishAudio(), [2];
                  });
                });
              }),
              Object.defineProperty(e.prototype, "systemVolume", {
                get: function () {
                  return this._status === o.UNAVAILABLE
                    ? (this.testAudio(), 0)
                    : 1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "status", {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })(T))()),
          (F = (function () {
            function t() {}
            return (
              (t.prototype.observe = function () {}),
              (t.prototype.unobserve = function () {}),
              (t.prototype.disconnect = function () {}),
              t
            );
          })()),
          (S = globalThis.ResizeObserver || F),
          (x = new ((function () {
            function t() {
              var t = this;
              (this._elementsMap = new Map()),
                (this._onObservedEntry = function (e) {
                  var n = t._elementsMap.get(e.target);
                  null !== n
                    ? n.onResize(
                        0 == e.target.clientWidth || 0 == e.target.clientHeight
                      )
                    : t._resizeObserver.unobserve(e.target);
                }),
                (this._onObserved = function (e) {
                  e.forEach(t._onObservedEntry);
                }),
                (this._resizeObserver = new S(this._onObserved));
            }
            return (
              (t.prototype.add = function (t, e) {
                var n = { onResize: e, element: t };
                return (
                  this._elementsMap.set(t, n),
                  this._resizeObserver.observe(t),
                  n
                );
              }),
              (t.prototype.remove = function (t) {
                this._resizeObserver.unobserve(t.element),
                  this._elementsMap.delete(t.element);
              }),
              t
            );
          })())()),
          (j = (function () {
            function t(t) {
              (this.enableRiveAssetCDN = !0),
                (this.referenceCount = 0),
                (this.src = t.src),
                (this.buffer = t.buffer),
                t.assetLoader && (this.assetLoader = t.assetLoader),
                (this.enableRiveAssetCDN =
                  "boolean" != typeof t.enableRiveAssetCDN ||
                  t.enableRiveAssetCDN),
                (this.eventManager = new T()),
                t.onLoad && this.on(i.Load, t.onLoad),
                t.onLoadError && this.on(i.LoadError, t.onLoadError);
            }
            return (
              (t.prototype.initData = function () {
                return d(this, void 0, void 0, function () {
                  var e, n, r;
                  return p(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (!this.src) return [3, 2];
                        return (e = this), [4, I(this.src)];
                      case 1:
                        (e.buffer = a.sent()), (a.label = 2);
                      case 2:
                        return (
                          this.assetLoader &&
                            (n = new this.runtime.CustomFileAssetLoader({
                              loadContents: this.assetLoader,
                            })),
                          (r = this),
                          [
                            4,
                            this.runtime.load(
                              new Uint8Array(this.buffer),
                              n,
                              this.enableRiveAssetCDN
                            ),
                          ]
                        );
                      case 3:
                        if (((r.file = a.sent()), null !== this.file))
                          this.eventManager.fire({ type: i.Load, data: this });
                        else
                          throw (
                            (this.eventManager.fire({
                              type: i.LoadError,
                              data: null,
                            }),
                            Error(t.fileLoadErrorMessage))
                          );
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.init = function () {
                return d(this, void 0, void 0, function () {
                  var e;
                  return p(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (!this.src && !this.buffer)
                          throw Error(t.missingErrorMessage);
                        return (e = this), [4, b.awaitInstance()];
                      case 1:
                        return (e.runtime = n.sent()), [4, this.initData()];
                      case 2:
                        return n.sent(), [2];
                    }
                  });
                });
              }),
              (t.prototype.on = function (t, e) {
                this.eventManager.add({ type: t, callback: e });
              }),
              (t.prototype.off = function (t, e) {
                this.eventManager.remove({ type: t, callback: e });
              }),
              (t.prototype.cleanup = function () {
                var t;
                (this.referenceCount -= 1),
                  this.referenceCount <= 0 &&
                    (this.removeAllRiveEventListeners(),
                    null === (t = this.file) || void 0 === t || t.delete());
              }),
              (t.prototype.removeAllRiveEventListeners = function (t) {
                this.eventManager.removeAll(t);
              }),
              (t.prototype.getInstance = function () {
                if (null !== this.file)
                  return (this.referenceCount += 1), this.file;
              }),
              (t.missingErrorMessage =
                "Rive source file or data buffer required"),
              (t.fileLoadErrorMessage = "The file failed to load"),
              t
            );
          })()),
          (O = (function () {
            function e(t) {
              var e,
                n = this;
              (this.loaded = !1),
                (this._observed = null),
                (this.readyForPlaying = !1),
                (this.artboard = null),
                (this.eventCleanup = null),
                (this.shouldDisableRiveListeners = !1),
                (this.automaticallyHandleEvents = !1),
                (this.enableRiveAssetCDN = !0),
                (this._volume = 1),
                (this._artboardWidth = void 0),
                (this._artboardHeight = void 0),
                (this._devicePixelRatioUsed = 1),
                (this._hasZeroSize = !1),
                (this._audioEventListener = null),
                (this.durations = []),
                (this.frameTimes = []),
                (this.frameCount = 0),
                (this.isTouchScrollEnabled = !1),
                (this.onCanvasResize = function (t) {
                  (n._hasZeroSize = t),
                    (n._layout.maxX && n._layout.maxY) || n.resizeToCanvas();
                }),
                (this.renderSecondTimer = 0),
                (this.canvas = t.canvas),
                t.canvas.constructor === HTMLCanvasElement &&
                  (this._observed = x.add(this.canvas, this.onCanvasResize)),
                (this.src = t.src),
                (this.buffer = t.buffer),
                (this.riveFile = t.riveFile),
                (this.layout =
                  null !== (e = t.layout) && void 0 !== e ? e : new g()),
                (this.shouldDisableRiveListeners =
                  !!t.shouldDisableRiveListeners),
                (this.isTouchScrollEnabled = !!t.isTouchScrollEnabled),
                (this.automaticallyHandleEvents =
                  !!t.automaticallyHandleEvents),
                (this.enableRiveAssetCDN =
                  void 0 === t.enableRiveAssetCDN || t.enableRiveAssetCDN),
                (this.eventManager = new T()),
                t.onLoad && this.on(i.Load, t.onLoad),
                t.onLoadError && this.on(i.LoadError, t.onLoadError),
                t.onPlay && this.on(i.Play, t.onPlay),
                t.onPause && this.on(i.Pause, t.onPause),
                t.onStop && this.on(i.Stop, t.onStop),
                t.onLoop && this.on(i.Loop, t.onLoop),
                t.onStateChange && this.on(i.StateChange, t.onStateChange),
                t.onAdvance && this.on(i.Advance, t.onAdvance),
                t.onload && !t.onLoad && this.on(i.Load, t.onload),
                t.onloaderror &&
                  !t.onLoadError &&
                  this.on(i.LoadError, t.onloaderror),
                t.onplay && !t.onPlay && this.on(i.Play, t.onplay),
                t.onpause && !t.onPause && this.on(i.Pause, t.onpause),
                t.onstop && !t.onStop && this.on(i.Stop, t.onstop),
                t.onloop && !t.onLoop && this.on(i.Loop, t.onloop),
                t.onstatechange &&
                  !t.onStateChange &&
                  this.on(i.StateChange, t.onstatechange),
                t.assetLoader && (this.assetLoader = t.assetLoader),
                (this.taskQueue = new P(this.eventManager)),
                this.init({
                  src: this.src,
                  buffer: this.buffer,
                  riveFile: this.riveFile,
                  autoplay: t.autoplay,
                  animations: t.animations,
                  stateMachines: t.stateMachines,
                  artboard: t.artboard,
                  useOffscreenRenderer: t.useOffscreenRenderer,
                });
            }
            return (
              (e.new = function (t) {
                return (
                  console.warn(
                    "This function is deprecated: please use `new Rive({})` instead"
                  ),
                  new e(t)
                );
              }),
              (e.prototype.onSystemAudioChanged = function () {
                this.volume = this._volume;
              }),
              (e.prototype.init = function (t) {
                var n = this,
                  r = t.src,
                  i = t.buffer,
                  a = t.riveFile,
                  o = t.animations,
                  s = t.stateMachines,
                  u = t.artboard,
                  c = t.autoplay,
                  l = void 0 !== c && c,
                  h = t.useOffscreenRenderer,
                  f = void 0 !== h && h;
                if (
                  ((this.src = r),
                  (this.buffer = i),
                  (this.riveFile = a),
                  !this.src && !this.buffer && !this.riveFile)
                )
                  throw Error(e.missingErrorMessage);
                var d = k(o),
                  p = k(s);
                (this.loaded = !1),
                  (this.readyForPlaying = !1),
                  b
                    .awaitInstance()
                    .then(function (t) {
                      (n.runtime = t),
                        n.removeRiveListeners(),
                        n.deleteRiveRenderer(),
                        (n.renderer = n.runtime.makeRenderer(n.canvas, f)),
                        n.canvas.width ||
                          n.canvas.height ||
                          n.resizeDrawingSurfaceToCanvas(),
                        n
                          .initData(u, d, p, l)
                          .then(function () {
                            return n.setupRiveListeners();
                          })
                          .catch(function (t) {
                            console.error(t);
                          });
                    })
                    .catch(function (t) {
                      console.error(t);
                    });
              }),
              (e.prototype.setupRiveListeners = function (t) {
                var e = this;
                if (!this.shouldDisableRiveListeners) {
                  var n = (this.animator.stateMachines || [])
                      .filter(function (t) {
                        return t.playing && e.runtime.hasListeners(t.instance);
                      })
                      .map(function (t) {
                        return t.instance;
                      }),
                    r = this.isTouchScrollEnabled;
                  t &&
                    "isTouchScrollEnabled" in t &&
                    (r = t.isTouchScrollEnabled),
                    (this.eventCleanup = (0, l.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: n,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: r,
                      layoutScaleFactor: this._layout.layoutScaleFactor,
                    }));
                }
              }),
              (e.prototype.removeRiveListeners = function () {
                this.eventCleanup &&
                  (this.eventCleanup(), (this.eventCleanup = null));
              }),
              (e.prototype.initializeAudio = function () {
                var t,
                  e = this;
                M.status == o.UNAVAILABLE &&
                  (null === (t = this.artboard) || void 0 === t
                    ? void 0
                    : t.hasAudio) &&
                  null === this._audioEventListener &&
                  ((this._audioEventListener = {
                    type: i.AudioStatusChange,
                    callback: function () {
                      return e.onSystemAudioChanged();
                    },
                  }),
                  M.add(this._audioEventListener),
                  M.establishAudio());
              }),
              (e.prototype.initArtboardSize = function () {
                this.artboard &&
                  ((this._artboardWidth = this.artboard.width =
                    this._artboardWidth || this.artboard.width),
                  (this._artboardHeight = this.artboard.height =
                    this._artboardHeight || this.artboard.height));
              }),
              (e.prototype.initData = function (t, e, n, r) {
                var a;
                return d(this, void 0, void 0, function () {
                  var o;
                  return p(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if ((s.trys.push([0, 3, , 4]), null != this.riveFile))
                          return [3, 2];
                        return (
                          (this.riveFile = new j({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader,
                          })),
                          [4, this.riveFile.init()]
                        );
                      case 1:
                        s.sent(), (s.label = 2);
                      case 2:
                        return (
                          (this.file = this.riveFile.getInstance()),
                          this.initArtboard(t, e, n, r),
                          this.initArtboardSize(),
                          this.initializeAudio(),
                          (this.loaded = !0),
                          this.eventManager.fire({
                            type: i.Load,
                            data:
                              null !== (a = this.src) && void 0 !== a
                                ? a
                                : "buffer",
                          }),
                          (this.readyForPlaying = !0),
                          this.taskQueue.process(),
                          this.drawFrame(),
                          [2, Promise.resolve()]
                        );
                      case 3:
                        return (
                          s.sent(),
                          console.warn(
                            (o = "Problem loading file; may be corrupt!")
                          ),
                          this.eventManager.fire({
                            type: i.LoadError,
                            data: o,
                          }),
                          [2, Promise.reject(o)]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.initArtboard = function (t, e, n, r) {
                if (this.file) {
                  var a,
                    o = t
                      ? this.file.artboardByName(t)
                      : this.file.defaultArtboard();
                  if (!o) {
                    var s = "Invalid artboard name or no default artboard";
                    console.warn(s),
                      this.eventManager.fire({ type: i.LoadError, data: s });
                    return;
                  }
                  if (
                    ((this.artboard = o),
                    (o.volume = this._volume * M.systemVolume),
                    1 > this.artboard.animationCount())
                  ) {
                    var s = "Artboard has no animations";
                    throw (
                      (this.eventManager.fire({ type: i.LoadError, data: s }),
                      s)
                    );
                  }
                  (this.animator = new C(
                    this.runtime,
                    this.artboard,
                    this.eventManager
                  )),
                    e.length > 0 || n.length > 0
                      ? ((a = e.concat(n)),
                        this.animator.initLinearAnimations(e, r),
                        this.animator.initStateMachines(n, r))
                      : (a = [this.animator.atLeastOne(r, !1)]),
                    this.taskQueue.add({
                      event: { type: r ? i.Play : i.Pause, data: a },
                    });
                }
              }),
              (e.prototype.drawFrame = function () {
                this.startRendering();
              }),
              (e.prototype.draw = function (t, e) {
                this.frameRequestId = null;
                var n = performance.now();
                this.lastRenderTime || (this.lastRenderTime = t),
                  (this.renderSecondTimer += t - this.lastRenderTime),
                  this.renderSecondTimer > 5e3 &&
                    ((this.renderSecondTimer = 0), null == e || e());
                var a = (t - this.lastRenderTime) / 1e3;
                this.lastRenderTime = t;
                for (
                  var o = this.animator.animations
                      .filter(function (t) {
                        return t.playing || t.needsScrub;
                      })
                      .sort(function (t) {
                        return t.needsScrub ? -1 : 1;
                      }),
                    s = 0;
                  s < o.length;
                  s++
                ) {
                  var u = o[s];
                  u.advance(a),
                    u.instance.didLoop && (u.loopCount += 1),
                    u.apply(1);
                }
                for (
                  var c = this.animator.stateMachines.filter(function (t) {
                      return t.playing;
                    }),
                    h = 0;
                  h < c.length;
                  h++
                ) {
                  var f = c[h],
                    d = f.reportedEventCount();
                  if (d)
                    for (var p = 0; p < d; p++) {
                      var m = f.reportedEventAt(p);
                      if (m) {
                        if (m.type === r.OpenUrl) {
                          if (
                            (this.eventManager.fire({
                              type: i.RiveEvent,
                              data: m,
                            }),
                            this.automaticallyHandleEvents)
                          ) {
                            var v = document.createElement("a"),
                              g = m.url,
                              b = m.target,
                              y = (0, l.sanitizeUrl)(g);
                            g && v.setAttribute("href", y),
                              b && v.setAttribute("target", b),
                              y && y !== l.BLANK_URL && v.click();
                          }
                        } else
                          this.eventManager.fire({
                            type: i.RiveEvent,
                            data: m,
                          });
                      }
                    }
                  f.advanceAndApply(a);
                }
                0 == this.animator.stateMachines.length &&
                  this.artboard.advance(a);
                var w = this.renderer;
                w.clear(),
                  w.save(),
                  this.alignRenderer(),
                  this._hasZeroSize || this.artboard.draw(w),
                  w.restore(),
                  w.flush(),
                  this.animator.handleLooping(),
                  this.animator.handleStateChanges(),
                  this.animator.handleAdvancing(a),
                  this.frameCount++;
                var _ = performance.now();
                for (
                  this.frameTimes.push(_), this.durations.push(_ - n);
                  this.frameTimes[0] <= _ - 1e3;

                )
                  this.frameTimes.shift(), this.durations.shift();
                this.animator.isPlaying
                  ? this.startRendering()
                  : this.animator.isPaused
                  ? (this.lastRenderTime = 0)
                  : this.animator.isStopped && (this.lastRenderTime = 0);
              }),
              (e.prototype.alignRenderer = function () {
                var t = this.renderer,
                  e = this.runtime,
                  n = this._layout,
                  r = this.artboard;
                t.align(
                  n.runtimeFit(e),
                  n.runtimeAlignment(e),
                  { minX: n.minX, minY: n.minY, maxX: n.maxX, maxY: n.maxY },
                  r.bounds,
                  this._devicePixelRatioUsed * n.layoutScaleFactor
                );
              }),
              Object.defineProperty(e.prototype, "fps", {
                get: function () {
                  return this.durations.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "frameTime", {
                get: function () {
                  return 0 === this.durations.length
                    ? 0
                    : (
                        this.durations.reduce(function (t, e) {
                          return t + e;
                        }, 0) / this.durations.length
                      ).toFixed(4);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.cleanup = function () {
                var t;
                this.stopRendering(),
                  this.cleanupInstances(),
                  null !== this._observed && x.remove(this._observed),
                  this.removeRiveListeners(),
                  null === (t = this.riveFile) || void 0 === t || t.cleanup(),
                  (this.riveFile = null),
                  (this.file = null),
                  this.deleteRiveRenderer(),
                  null !== this._audioEventListener &&
                    (M.remove(this._audioEventListener),
                    (this._audioEventListener = null));
              }),
              (e.prototype.deleteRiveRenderer = function () {
                var t;
                null === (t = this.renderer) || void 0 === t || t.delete(),
                  (this.renderer = null);
              }),
              (e.prototype.cleanupInstances = function () {
                null !== this.eventCleanup && this.eventCleanup(),
                  this.stop(),
                  this.artboard &&
                    (this.artboard.delete(), (this.artboard = null));
              }),
              (e.prototype.retrieveTextRun = function (t) {
                if (!t) {
                  console.warn("No text run name provided");
                  return;
                }
                if (!this.artboard) {
                  console.warn(
                    "Tried to access text run, but the Artboard is null"
                  );
                  return;
                }
                var e,
                  n = this.artboard.textRun(t);
                if (!n) {
                  console.warn(
                    "Could not access a text run with name '"
                      .concat(t, "' in the '")
                      .concat(
                        null === (e = this.artboard) || void 0 === e
                          ? void 0
                          : e.name,
                        "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."
                      )
                  );
                  return;
                }
                return n;
              }),
              (e.prototype.getTextRunValue = function (t) {
                var e = this.retrieveTextRun(t);
                return e ? e.text : void 0;
              }),
              (e.prototype.setTextRunValue = function (t, e) {
                var n = this.retrieveTextRun(t);
                n && (n.text = e);
              }),
              (e.prototype.play = function (t, e) {
                var n = this;
                if (((t = k(t)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return n.play(t, e);
                    },
                  });
                  return;
                }
                this.animator.play(t),
                  this.eventCleanup && this.eventCleanup(),
                  this.setupRiveListeners(),
                  this.startRendering();
              }),
              (e.prototype.pause = function (t) {
                var e = this;
                if (((t = k(t)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return e.pause(t);
                    },
                  });
                  return;
                }
                this.eventCleanup && this.eventCleanup(),
                  this.animator.pause(t);
              }),
              (e.prototype.scrub = function (t, e) {
                var n = this;
                if (((t = k(t)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return n.scrub(t, e);
                    },
                  });
                  return;
                }
                this.animator.scrub(t, e || 0), this.drawFrame();
              }),
              (e.prototype.stop = function (t) {
                var e = this;
                if (((t = k(t)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return e.stop(t);
                    },
                  });
                  return;
                }
                this.animator && this.animator.stop(t),
                  this.eventCleanup && this.eventCleanup();
              }),
              (e.prototype.reset = function (t) {
                var e,
                  n = null == t ? void 0 : t.artboard,
                  r = k(null == t ? void 0 : t.animations),
                  i = k(null == t ? void 0 : t.stateMachines),
                  a =
                    null !== (e = null == t ? void 0 : t.autoplay) &&
                    void 0 !== e &&
                    e;
                this.cleanupInstances(),
                  this.initArtboard(n, r, i, a),
                  this.taskQueue.process();
              }),
              (e.prototype.load = function (t) {
                (this.file = null), this.stop(), this.init(t);
              }),
              Object.defineProperty(e.prototype, "layout", {
                get: function () {
                  return this._layout;
                },
                set: function (t) {
                  (this._layout = t),
                    (t.maxX && t.maxY) || this.resizeToCanvas(),
                    this.loaded && !this.animator.isPlaying && this.drawFrame();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.resizeToCanvas = function () {
                this._layout = this.layout.copyWith({
                  minX: 0,
                  minY: 0,
                  maxX: this.canvas.width,
                  maxY: this.canvas.height,
                });
              }),
              (e.prototype.resizeDrawingSurfaceToCanvas = function (e) {
                if (this.canvas instanceof HTMLCanvasElement && window) {
                  var n = this.canvas.getBoundingClientRect(),
                    r = n.width,
                    i = n.height,
                    a = e || window.devicePixelRatio || 1;
                  if (
                    ((this.devicePixelRatioUsed = a),
                    (this.canvas.width = a * r),
                    (this.canvas.height = a * i),
                    this.startRendering(),
                    this.resizeToCanvas(),
                    this.layout.fit === t.Layout)
                  ) {
                    var o = this._layout.layoutScaleFactor;
                    (this.artboard.width = r / o),
                      (this.artboard.height = i / o);
                  }
                }
              }),
              Object.defineProperty(e.prototype, "source", {
                get: function () {
                  return this.src;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "activeArtboard", {
                get: function () {
                  return this.artboard ? this.artboard.name : "";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "animationNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var t = [], e = 0;
                    e < this.artboard.animationCount();
                    e++
                  )
                    t.push(this.artboard.animationByIndex(e).name);
                  return t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "stateMachineNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var t = [], e = 0;
                    e < this.artboard.stateMachineCount();
                    e++
                  )
                    t.push(this.artboard.stateMachineByIndex(e).name);
                  return t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.stateMachineInputs = function (t) {
                if (this.loaded) {
                  var e = this.animator.stateMachines.find(function (e) {
                    return e.name === t;
                  });
                  return null == e ? void 0 : e.inputs;
                }
              }),
              (e.prototype.retrieveInputAtPath = function (t, e) {
                if (!t) {
                  console.warn(
                    "No input name provided for path '".concat(e, "'")
                  );
                  return;
                }
                if (!this.artboard) {
                  console.warn(
                    "Tried to access input: '"
                      .concat(t, "', at path: '")
                      .concat(e, "', but the Artboard is null")
                  );
                  return;
                }
                var n = this.artboard.inputByPath(t, e);
                if (!n) {
                  console.warn(
                    "Could not access an input with name: '"
                      .concat(t, "', at path:'")
                      .concat(e, "'")
                  );
                  return;
                }
                return n;
              }),
              (e.prototype.setBooleanStateAtPath = function (t, e, r) {
                var i = this.retrieveInputAtPath(t, r);
                i &&
                  (i.type === n.Boolean
                    ? (i.asBool().value = e)
                    : console.warn(
                        "Input with name: '"
                          .concat(t, "', at path:'")
                          .concat(r, "' is not a boolean")
                      ));
              }),
              (e.prototype.setNumberStateAtPath = function (t, e, r) {
                var i = this.retrieveInputAtPath(t, r);
                i &&
                  (i.type === n.Number
                    ? (i.asNumber().value = e)
                    : console.warn(
                        "Input with name: '"
                          .concat(t, "', at path:'")
                          .concat(r, "' is not a number")
                      ));
              }),
              (e.prototype.fireStateAtPath = function (t, e) {
                var r = this.retrieveInputAtPath(t, e);
                r &&
                  (r.type === n.Trigger
                    ? r.asTrigger().fire()
                    : console.warn(
                        "Input with name: '"
                          .concat(t, "', at path:'")
                          .concat(e, "' is not a trigger")
                      ));
              }),
              (e.prototype.retrieveTextAtPath = function (t, e) {
                if (!t) {
                  console.warn(
                    "No text name provided for path '".concat(e, "'")
                  );
                  return;
                }
                if (!e) {
                  console.warn("No path provided for text '".concat(t, "'"));
                  return;
                }
                if (!this.artboard) {
                  console.warn(
                    "Tried to access text: '"
                      .concat(t, "', at path: '")
                      .concat(e, "', but the Artboard is null")
                  );
                  return;
                }
                var n = this.artboard.textByPath(t, e);
                if (!n) {
                  console.warn(
                    "Could not access text with name: '"
                      .concat(t, "', at path:'")
                      .concat(e, "'")
                  );
                  return;
                }
                return n;
              }),
              (e.prototype.getTextRunValueAtPath = function (t, e) {
                var n = this.retrieveTextAtPath(t, e);
                if (!n) {
                  console.warn(
                    "Could not get text with name: '"
                      .concat(t, "', at path:'")
                      .concat(e, "'")
                  );
                  return;
                }
                return n.text;
              }),
              (e.prototype.setTextRunValueAtPath = function (t, e, n) {
                var r = this.retrieveTextAtPath(t, n);
                if (!r) {
                  console.warn(
                    "Could not set text with name: '"
                      .concat(t, "', at path:'")
                      .concat(n, "'")
                  );
                  return;
                }
                r.text = e;
              }),
              Object.defineProperty(e.prototype, "playingStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (t) {
                          return t.playing;
                        })
                        .map(function (t) {
                          return t.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "playingAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (t) {
                          return t.playing;
                        })
                        .map(function (t) {
                          return t.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "pausedAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (t) {
                          return !t.playing;
                        })
                        .map(function (t) {
                          return t.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "pausedStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (t) {
                          return !t.playing;
                        })
                        .map(function (t) {
                          return t.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isPlaying", {
                get: function () {
                  return this.animator.isPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isPaused", {
                get: function () {
                  return this.animator.isPaused;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isStopped", {
                get: function () {
                  return this.animator.isStopped;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "bounds", {
                get: function () {
                  return this.artboard ? this.artboard.bounds : void 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.on = function (t, e) {
                this.eventManager.add({ type: t, callback: e });
              }),
              (e.prototype.off = function (t, e) {
                this.eventManager.remove({ type: t, callback: e });
              }),
              (e.prototype.unsubscribe = function (t, e) {
                console.warn(
                  "This function is deprecated: please use `off()` instead."
                ),
                  this.off(t, e);
              }),
              (e.prototype.removeAllRiveEventListeners = function (t) {
                this.eventManager.removeAll(t);
              }),
              (e.prototype.unsubscribeAll = function (t) {
                console.warn(
                  "This function is deprecated: please use `removeAllRiveEventListeners()` instead."
                ),
                  this.removeAllRiveEventListeners(t);
              }),
              (e.prototype.stopRendering = function () {
                this.loaded &&
                  this.frameRequestId &&
                  (this.runtime.cancelAnimationFrame
                    ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                    : cancelAnimationFrame(this.frameRequestId),
                  (this.frameRequestId = null));
              }),
              (e.prototype.startRendering = function () {
                this.loaded &&
                  this.artboard &&
                  !this.frameRequestId &&
                  (this.runtime.requestAnimationFrame
                    ? (this.frameRequestId = this.runtime.requestAnimationFrame(
                        this.draw.bind(this)
                      ))
                    : (this.frameRequestId = requestAnimationFrame(
                        this.draw.bind(this)
                      )));
              }),
              (e.prototype.enableFPSCounter = function (t) {
                this.runtime.enableFPSCounter(t);
              }),
              (e.prototype.disableFPSCounter = function () {
                this.runtime.disableFPSCounter();
              }),
              Object.defineProperty(e.prototype, "contents", {
                get: function () {
                  if (this.loaded) {
                    for (
                      var t = { artboards: [] }, e = 0;
                      e < this.file.artboardCount();
                      e++
                    ) {
                      for (
                        var n = this.file.artboardByIndex(e),
                          r = {
                            name: n.name,
                            animations: [],
                            stateMachines: [],
                          },
                          i = 0;
                        i < n.animationCount();
                        i++
                      ) {
                        var a = n.animationByIndex(i);
                        r.animations.push(a.name);
                      }
                      for (var o = 0; o < n.stateMachineCount(); o++) {
                        for (
                          var s = n.stateMachineByIndex(o),
                            u = s.name,
                            c = new this.runtime.StateMachineInstance(s, n),
                            l = [],
                            h = 0;
                          h < c.inputCount();
                          h++
                        ) {
                          var f = c.input(h);
                          l.push({ name: f.name, type: f.type });
                        }
                        r.stateMachines.push({ name: u, inputs: l });
                      }
                      t.artboards.push(r);
                    }
                    return t;
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "volume", {
                get: function () {
                  return (
                    this.artboard &&
                      this.artboard.volume !== this._volume &&
                      (this._volume = this.artboard.volume),
                    this._volume
                  );
                },
                set: function (t) {
                  (this._volume = t),
                    this.artboard &&
                      (this.artboard.volume = t * M.systemVolume);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "artboardWidth", {
                get: function () {
                  var t;
                  return this.artboard
                    ? this.artboard.width
                    : null !== (t = this._artboardWidth) && void 0 !== t
                    ? t
                    : 0;
                },
                set: function (t) {
                  (this._artboardWidth = t),
                    this.artboard && (this.artboard.width = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "artboardHeight", {
                get: function () {
                  var t;
                  return this.artboard
                    ? this.artboard.height
                    : null !== (t = this._artboardHeight) && void 0 !== t
                    ? t
                    : 0;
                },
                set: function (t) {
                  (this._artboardHeight = t),
                    this.artboard && (this.artboard.height = t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.resetArtboardSize = function () {
                this.artboard
                  ? (this.artboard.resetArtboardSize(),
                    (this._artboardWidth = this.artboard.width),
                    (this._artboardHeight = this.artboard.height))
                  : ((this._artboardWidth = void 0),
                    (this._artboardHeight = void 0));
              }),
              Object.defineProperty(e.prototype, "devicePixelRatioUsed", {
                get: function () {
                  return this._devicePixelRatioUsed;
                },
                set: function (t) {
                  this._devicePixelRatioUsed = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.missingErrorMessage =
                "Rive source file or data buffer required"),
              e
            );
          })()),
          (I = function (t) {
            return d(void 0, void 0, void 0, function () {
              var e;
              return p(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (e = new Request(t)), [4, fetch(e)];
                  case 1:
                    return [4, n.sent().arrayBuffer()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (k = function (t) {
            return "string" == typeof t ? [t] : t instanceof Array ? t : [];
          }),
          (D = { EventManager: T, TaskQueueManager: P }),
          (U = function (t) {
            return new Promise(function (e) {
              return b.getInstance(function (n) {
                n.decodeAudio(t, e);
              });
            });
          }),
          (B = function (t) {
            return new Promise(function (e) {
              return b.getInstance(function (n) {
                n.decodeImage(t, e);
              });
            });
          }),
          (W = function (t) {
            return new Promise(function (e) {
              return b.getInstance(function (n) {
                n.decodeFont(t, e);
              });
            });
          }),
          X
        );
      })();
    },
  },
]);
