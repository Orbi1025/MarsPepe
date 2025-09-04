(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7638: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 4361));
    },
    4361: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return O;
          },
        });
      var s = a(3827),
        i = a(4090),
        l = () => {
          let [e, t] = (0, i.useState)({
            width: 0,
            height: 0,
            isMobile: !1,
          });
          return (
            (0, i.useEffect)(() => {
              {
                let e = () => {
                    let e =
                      navigator.userAgent || navigator.vendor || "android";
                    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
                      e
                    );
                  },
                  a = () => {
                    t({
                      width: window.innerWidth,
                      height: window.innerHeight,
                      isMobile: window.innerWidth < 678 || e(),
                    });
                  };
                return (
                  window.addEventListener("resize", a),
                  a(),
                  () => window.removeEventListener("resize", a)
                );
              }
            }, []),
            e
          );
        },
        c = a(1025),
        o = a(5587),
        n = a(7165),
        r = i.memo(() => {
          let { rive: e, RiveComponent: t } = (0, c.useRive)({
              src: "/two/exchanges.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            }),
            a = (0, i.useRef)(null),
            [l] = (0, n.Z)(a);
          return (0, s.jsxs)("section", {
            id: "Exchanges",
            className:
              "w-[100vw] text-white h-[1000px] relative -mt-[64px] mx-auto overflow-hidden",
            children: [
              (0, s.jsx)("div", {
                className: "w-full h-[60px] bg-transparent",
              }),
              (0, s.jsx)("img", {
                className: "w-[100vw] h-[940px] ",
                src: "/two/bg.png",
                alt: "",
              }),
              (0, s.jsx)(t, {
                className: "w-[100vw] h-[940px] absolute top-0 left-0 z-[1]",
              }),
              (0, s.jsx)("div", {
                className: " absolute left-1/2 top-1/2 opacity-0 w-1 h-1",
                ref: a,
              }),
              l &&
                (0, s.jsxs)(o.E.div, {
                  initial: {
                    opacity: 0,
                    scale: 0,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                  exit: {
                    opacity: 0,
                  },
                  className:
                    "w-[62.5vw] h-[400px] flex flex-col items-center absolute top-[160px] left-1/2 -ml-[31.2vw] z-10",
                  children: [
                    (0, s.jsxs)(o.E.div, {
                      className:
                        "flex flex-col items-center font-[400] textShadow text-white",
                      children: [
                        (0, s.jsx)(o.E.span, {
                          className: "text-[60px]",
                          children: "EXCHANGES",
                        }),
                        (0, s.jsx)(o.E.span, {
                          className: "text-[32px] mt-[40px]",
                          children: "Where’s $MARSPEPE?",
                        }),
                        (0, s.jsx)(o.E.span, {
                          className: "text-[32px]",
                          children: "Everywhere that matters.",
                        }),
                        (0, s.jsx)(o.E.span, {
                          className: "text-[32px]",
                          children: "Go get it.",
                        }),
                      ],
                    }),
                    (0, s.jsx)(o.E.a, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 1,
                          duration: 0.5,
                        },
                      },
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      className:
                        "flex items-center justify-center w-[280px] h-[90px] bg-[#291523] rounded-[20px] absolute left-0 top-[130px] z-10",
                      style: {
                        boxShadow: "0px 4px 0px 0px #381D2F",
                      },

                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/two/icon-gate.png",
                        className: "w-[183px] h-[42px]",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 1.5,
                          duration: 0.5,
                        },
                      },
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      className:
                        "flex items-center justify-center w-[280px] h-[90px] bg-[#291523] rounded-[20px] absolute right-[100px] bottom-[30px] z-10",
                      style: {
                        boxShadow: "0px 4px 0px 0px #381D2F",
                      },
                      href: "https://app.uniswap.org/explore/tokens/ethereum/0xECDB7D9dEB4BD0fBCcBD2E58Df3c7C063d8AddAd",
                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/two/icon-uniswap.png",
                        className: "w-[216px] h-[54px]",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 2,
                          duration: 0.5,
                        },
                      },
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      className:
                        "flex items-center justify-center w-[280px] h-[90px] bg-[#291523] rounded-[20px] absolute right-0 top-[70px] z-10",
                      style: {
                        boxShadow: "0px 4px 0px 0px #381D2F",
                      },

                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/two/icon-mexc.png",
                        className: "w-[196px] h-[30px]",
                      }),
                    }),
                  ],
                }),
              (0, s.jsx)("img", {
                className:
                  "w-full h-[97px] absolute -bottom-[26px] left-0 z-10",
                src: "/two/image-footer.png",
                alt: "",
              }),
            ],
          });
        }),
        x = i.memo(() => {
          let e = (0, i.useRef)(null),
            [t] = (0, n.Z)(e);
          return (0, s.jsxs)("section", {
            id: "Home",
            className:
              "w-[100vw] text-white h-[56.25vw] relative overflow-x-hidden mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className: "w-full h-[53.65vw] overflow-hidden relative",
                children: [
                  (0, s.jsx)("img", {
                    className: "w-full h-[60.57vw]",
                    src: "/first/bg-home.png",
                    alt: "",
                    ref: e,
                  }),
                  (0, s.jsx)("img", {
                    ref: e,
                    className:
                      "w-[100vw] h-[60.57vw] absolute top-0 left-0 z-[1]",
                    src: "/first/home.gif",
                    alt: "",
                  }),
                ],
              }),
              (0, s.jsx)("img", {
                className:
                  "w-full h-[181px] absolute -bottom-[20px] left-0 z-10",
                src: "/first/image-footer.png",
                alt: "",
              }),
              t &&
                (0, s.jsxs)("div", {
                  className:
                    "flex justify-between w-[70vw] h-[360px] pr-[50px] absolute bottom-[4.2vw] left-1/2 -ml-[35vw] z-[21]",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex w-[300px] h-[240px] relative",
                      children: [
                        (0, s.jsx)(o.E.img, {
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                            transition: {
                              delay: 0.5,
                              duration: 0.2,
                            },
                          },
                          whileHover: {
                            scale: 1.3,
                          },
                          className:
                            "w-[153px] h-[131px] absolute left-0 top-0 z-10",
                          src: "/first/image1.png",
                          alt: "",
                        }),
                        (0, s.jsx)(o.E.img, {
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                            transition: {
                              delay: 2,
                              duration: 0.2,
                            },
                          },
                          whileHover: {
                            scale: 1.3,
                          },
                          className:
                            "w-[115px] h-[104px] absolute right-0 bottom-0 z-10",
                          src: "/first/image3.png",
                          alt: "",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex w-[240px] h-[240px] relative",
                      children: [
                        (0, s.jsx)(o.E.img, {
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                            transition: {
                              delay: 1.5,
                              duration: 0.2,
                            },
                          },
                          whileHover: {
                            scale: 1.3,
                          },
                          className:
                            "w-[111px] h-[100px] absolute right-0 top-0 z-10",
                          src: "/first/image4.png",
                          alt: "",
                        }),
                        (0, s.jsx)(o.E.img, {
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                            transition: {
                              delay: 1,
                              duration: 0.2,
                            },
                          },
                          whileHover: {
                            scale: 1.3,
                          },
                          className:
                            "w-[124px] h-[108px] absolute left-[0px] bottom-0 z-10",
                          src: "/first/image2.png",
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
              t &&
                (0, s.jsxs)(o.E.div, {
                  initial: {
                    opacity: 0,
                    scale: 0,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                  exit: {
                    opacity: 0,
                  },
                  className:
                    "w-[52vw] h-[400px] textShadow flex flex-col justify-center items-center absolute top-[120px] left-1/2 -ml-[26vw] z-30 font-[400] text-white text3D",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-[90px]",
                      children: "MARSPEPE",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[70px]",
                      children: "",
                    }),
                    (0, s.jsx)("div", {
                      className: "mt-[20px] cursor-pointer",
                      onClick: () =>
                        window.open(
                          "https://app.uniswap.org/explore/tokens/ethereum/0xECDB7D9dEB4BD0fBCcBD2E58Df3c7C063d8AddAd",
                          "_blank"
                        ),
                      children: (0, s.jsx)("img", {
                        src: "/first/image-buy.png",
                        className:
                          "w-[246px] h-[72px] animate__animated animate__pulse animate__infinite",
                        alt: "",
                      }),
                    }),
                  ],
                }),
            ],
          });
        }),
        p = a(6269),
        m = i.memo(() => {
          let { rive: e, RiveComponent: t } = (0, c.useRive)({
              src: "/three/three.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            }),
            a = (0, i.useRef)(null),
            [l] = (0, n.Z)(a),
            [o, { inc: r, dec: x, set: m, reset: w }] = (0, p.Z)(-10, {
              min: -10,
              max: 15,
            }),
            [h, d] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              if (l) {
                w(), d(!1);
                let e = setInterval(() => {
                  r();
                }, 80);
                setTimeout(() => {
                  d(!0), e && clearInterval(e);
                }, 2500);
              }
            }, [l]),
            (0, s.jsxs)("section", {
              id: "About",
              className:
                "w-[100vw] text-white h-[56.25vw] relative overflow-hidden -mt-[20px] mx-auto",
              children: [
                (0, s.jsx)("img", {
                  className:
                    "w-[100vw] h-[1030px] absolute top-[0px] left-0 z-0",
                  src: "/three/bg.png",
                  alt: "",
                }),
                (0, s.jsx)("div", {
                  className:
                    "w-full h-[102px] bg-[#7B1601] flex flex-col-reverse absolute bottom-0 left-0 z-10",
                  children: (0, s.jsx)("div", {
                    className: "w-full h-[20px] bg-[#A44C3A] mb-[40px]",
                  }),
                }),
                h &&
                  (0, s.jsx)(t, {
                    className:
                      " absolute bottom-[40px] left-[400px] w-[500px] h-[300px] z-10",
                  }),
                h &&
                  (0, s.jsx)("img", {
                    src: "/three/image-pepe.png",
                    className:
                      " absolute bottom-[30px] right-[450px] w-[263px] h-[472px] z-10",
                  }),
                (0, s.jsx)("div", {
                  ref: a,
                  style: {
                    background:
                      "radial-gradient(51.02% 51.02% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, "
                        .concat(1 - 0.06 * o, ") ")
                        .concat(10 + 10 * o, "%,  rgba(0, 0, 0, 1) 200%)"),
                  },
                  className: " absolute top-0 left-0 right-0 bottom-0 z-20",
                }),
              ],
            })
          );
        }),
        w = i.memo(() => {
          let e = (0, i.useRef)(null),
            [t] = (0, n.Z)(e),
            a = (0, i.useRef)(null),
            [l] = (0, n.Z)(a),
            c = (0, i.useRef)(null),
            [r] = (0, n.Z)(c);
          return (0, s.jsxs)("section", {
            id: "Buy",
            className:
              "w-[100vw] text-white h-[2330px] relative bg-[#2E374C] mx-auto overflow-hidden",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-[1630px]",
                src: "/four/bg-four.png",
                alt: "",
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-[1278px] h-[600px] absolute top-[200px] left-1/2 -ml-[639px] z-10 flex flex-col-reverse items-center",
                children: [
                  (0, s.jsx)("img", {
                    className: "w-[512px] h-[568px]",
                    src: "/four/image-p.png",
                    alt: "",
                    ref: e,
                  }),
                  t &&
                    (0, s.jsxs)("div", {
                      className:
                        "flex justify-between w-full absolute top-0 left-0 z-10",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex w-[240px] h-[500px] relative",
                          children: [
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 0.5,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[110px] h-[100px] absolute right-0 top-0 z-10",
                              src: "/four/image1.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 0.8,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[118px] h-[100px] absolute left-0 top-1/2 -mt-[50px] z-10",
                              src: "/four/image2.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 1.1,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[115px] h-[100px] absolute left-[40px] bottom-0 z-10 ",
                              src: "/four/image3.png",
                              alt: "",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex w-[240px] h-[500px] relative",
                          children: [
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 1.4,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[118px] h-[100px] absolute left-0 top-0 z-10",
                              src: "/four/image4.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 1.8,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[115px] h-[100px] absolute right-0 top-1/2 -mt-[50px] z-10 ",
                              src: "/four/image5.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 2,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[110px] h-[100px] absolute right-[40px] bottom-0 z-10",
                              src: "/four/image6.png",
                              alt: "",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "w-[780px] h-[88px] absolute top-[100px] left-1/2 -ml-[390px] z-10 flex justify-center items-center textShadow",
                children: (0, s.jsx)("span", {
                  className: "text-white font-[400] text-[60px] textShadow",
                  children: "HOW TO BUY $MARSPEPE",
                }),
              }),
              (0, s.jsx)("img", {
                className:
                  "w-full h-[1540px] absolute left-0 bottom-[0px] z-10",
                src: "/four/bg-four-b.png",
                alt: "",
              }),
              (0, s.jsx)("img", {
                className:
                  "w-full h-[311px] absolute left-0 -bottom-[100px] z-40",
                src: "/four/image-four-footer.png",
                alt: "",
              }),
              (0, s.jsxs)("div", {
                ref: a,
                className:
                  "w-full h-[1368px] absolute left-[0px] bottom-[130px] z-20 ",
                children: [
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: l ? 1 : 0,
                      scale: l ? 1 : 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.2,
                      },
                    },
                    className:
                      "w-[735px] h-[606px] absolute -left-[30px] top-[180px] z-10 ",
                    src: "/four/one.png",
                    alt: "",
                  }),
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: l ? 1 : 0,
                      scale: l ? 1 : 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.2,
                      },
                    },
                    className:
                      "w-[788px] h-[640px] absolute -right-[4.2vw] top-[170px] z-10 ",
                    src: "/four/two.png",
                    alt: "",
                  }),
                  (0, s.jsx)("div", {
                    ref: c,
                    className:
                      " absolute top-[720px] left-1/2 opacity-0 w-1 h-1",
                    children: " ",
                  }),
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: r ? 1 : 0,
                      scale: r ? 1 : 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.2,
                      },
                    },
                    className:
                      "w-[768px] h-[684px] absolute -left-[60px] bottom-[0px] z-10 ",
                    src: "/four/three.png",
                    alt: "",
                  }),
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: r ? 1 : 0,
                      scale: r ? 1 : 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.2,
                      },
                    },
                    className:
                      "w-[796px] h-[725px] absolute -right-[4.2vw] bottom-[0px] z-20 ",
                    src: "/four/four.png",
                    alt: "",
                  }),
                  (0, s.jsxs)(o.E.div, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: r ? 1 : 0,
                      scale: r ? 1 : 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.2,
                      },
                    },
                    className:
                      " px-[6vw] z-20 absolute bottom-[5vw] left-[25vw] w-[50vw] h-[5vw] text-center text-[1.2vw] font-[400] leading-[2.0vw] text-white textShadow-M",
                    children: [
                      "IF YOU’RE HERE TO USE MARSPEPE'S PAST SERVICES, YOU CAN FIND ALL THE RELEVANT DETAILSAND EXPLANATIONS ",
                      (0, s.jsx)("a", {
                        className: "!text-[#09A8E5] cursor-pointer !underline",

                        target: "_blank",
                        children: "HERE",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        h = i.memo(() => {
          let e = (0, i.useRef)(null),
            [t] = (0, n.Z)(e),
            { rive: a, RiveComponent: l } = (0, c.useRive)({
              src: "/five/five-pepe.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            });
          return (0, s.jsxs)("section", {
            id: "Five",
            className:
              "w-[100vw] text-white h-[970px] relative overflow-hidden -mt-[30px] mx-auto overflow-x-hidden",
            children: [
              (0, s.jsx)("img", {
                className: "w-[100vw] h-[970px]",
                src: "/five/bg-five.png",
                alt: "",
              }),
              t &&
                (0, s.jsx)(o.E.img, {
                  initial: {
                    opacity: 0,
                    scale: 0,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0,
                      duration: 1,
                    },
                  },
                  className:
                    "w-[292px] h-[755px] absolute right-[318px] bottom-[60px] z-20",
                  src: "/five/image.png",
                  alt: "",
                }),
              (0, s.jsx)(l, {
                className:
                  "w-[711px] h-[484px] absolute left-[0px] -top-[0px] z-20 ",
              }),
              (0, s.jsx)("img", {
                ref: e,
                className:
                  "w-[340px] h-[138px] absolute left-[514px] top-[638px] z-20 opacity-0",
                src: "/five/the.png",
                alt: "",
              }),
            ],
          });
        }),
        d = a(7141),
        f = i.memo(() =>
          (0, s.jsx)("div", {
            className:
              "absolute top-0 left-0 z-10 flex items-center w-full h-[4.2vw] gap-[4px] text-[32px] font-[400] bg-[#5E6D8F] border-b-8 border-black",
            children: (0, s.jsx)(d.Z, {
              speed: 60,
              delay: 0,
              loop: 0,
              className: "w-full h-full",
              gradient: !0,
              gradientColor: "#000000",
              gradientWidth: "10",
              children: [
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
              ].map((e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    className:
                      "flex justify-center items-center gap-[4px] h-full",
                    children: (0, s.jsx)("span", {
                      className: "pr-[4.2vw] textShadow",
                      children: e,
                    }),
                  },
                  t
                )
              ),
            }),
          })
        ),
        v = i.memo(() => {
          let { rive: e, RiveComponent: t } = (0, c.useRive)({
              src: "/six/text.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            }),
            a = (0, i.useRef)(null),
            [l] = (0, n.Z)(a);
          return (0, s.jsxs)("section", {
            id: "Social",
            className:
              "w-[100vw] text-white h-screen relative mx-auto overflow-x-hidden",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-screen",
                src: "/six/bg-six.png",
                alt: "",
              }),
              (0, s.jsx)(f, {}),
              (0, s.jsxs)("div", {
                className:
                  "w-[530px] h-[200px] flex flex-col justify-center items-center absolute top-[200px] left-1/2 -ml-[265px] z-10 text-[60px] font-[400] textShadow",
                children: [
                  (0, s.jsx)("span", {
                    children: "Still borIng?",
                  }),
                  (0, s.jsx)("span", {
                    children: "Not anymore.",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "flex justify-around items-center w-[360px] h-[160px] absolute left-[100px] top-[220px] z-10",
                children: [
                  (0, s.jsxs)(o.E.a, {
                    whileHover: {
                      scale: 1.1,
                    },
                    whileTap: {
                      scale: 0.95,
                    },
                    href: "https://t.me/marspepe_eth",
                    target: "_blank",
                    className:
                      "flex flex-col items-center justify-center cursor-pointer",
                    children: [
                      (0, s.jsx)("img", {
                        src: "/six/icon-tree.svg",
                        className: "w-[35px] h-[58px]",
                        alt: "",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "w-[102px] h-[105px] -mt-[2px] bg-[url(/six/bg-share-box.svg)] bg-no-repeat bg-cover flex items-center justify-center",
                        children: (0, s.jsx)("img", {
                          src: "/six/icon-t.svg",
                          className: "w-[40px] h-[34px]",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(o.E.a, {
                    whileHover: {
                      scale: 1.1,
                    },
                    whileTap: {
                      scale: 0.95,
                    },
                    href: "https://x.com/marspepe_eth",
                    target: "_blank",
                    className:
                      "flex flex-col items-center justify-center cursor-pointer",
                    children: [
                      (0, s.jsx)("img", {
                        src: "/six/icon-face.svg",
                        className: "w-[47px] h-[57px]",
                        alt: "",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "w-[102px] h-[105px] -mt-[2px] bg-[url(/six/bg-share-box.svg)] bg-no-repeat bg-cover flex items-center justify-center",
                        children: (0, s.jsx)("img", {
                          src: "/six/icon-x.svg",
                          className: "w-[34px] h-[30px]",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("img", {
                src: "/six/image-tv.png",
                className:
                  "w-[313px] h-[248px] absolute left-0 bottom-[150px] z-10",
                alt: "",
              }),
              (0, s.jsxs)(o.E.div, {
                ref: a,
                className:
                  "w-[701px] h-[452px] flex flex-col-reverse items-center absolute left-1/2 -ml-[120px] bottom-[150px] z-10",
                children: [
                  (0, s.jsx)("img", {
                    src: "/six/image-divan.png",
                    className: "w-[597px] h-[313px]",
                    alt: "",
                  }),
                  l &&
                    (0, s.jsx)(o.E.img, {
                      initial: {
                        opacity: 0,
                        scale: 0,
                      },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 0,
                          duration: 0.5,
                        },
                      },
                      src: "/six/image-pepe.png",
                      className:
                        "w-[362px] h-[260px] absolute bottom-[180px] left-[230px] z-10",
                      alt: "",
                    }),
                  l &&
                    (0, s.jsx)(o.E.img, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 1,
                          duration: 0.2,
                        },
                      },
                      src: "/six/image-pepe-p.png",
                      className:
                        "w-[152px] h-[124px] absolute top-[0px] right-[0px] z-20 animate-min-bounce",
                      alt: "",
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "w-[720px] h-[36px] text-center absolute bottom-[50px] left-1/2 -ml-[360px] z-10 font-[400] text-[32px] textShadow",
                children: "Join us for one reason: have fun.",
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-[270px] h-[600px] absolute right-[100px] bottom-[50px] z-10",
                children: [
                  (0, s.jsx)("img", {
                    src: "/six/image-lampa.png",
                    className: "w-[265px] h-[423px]",
                    alt: "",
                  }),
                  (0, s.jsx)("img", {
                    src: "/six/image-desk.png",
                    className: "w-[192px] h-[211px] -mt-[120px] ml-[12vw]",
                    alt: "",
                  }),
                ],
              }),
              l &&
                (0, s.jsx)(t, {
                  className:
                    "w-[518px] h-[378px] absolute left-[338px] bottom-[130px] z-30",
                }),
            ],
          });
        }),
        u = i.memo(() =>
          (0, s.jsx)("div", {
            className:
              "fixed left-0 top-0 z-[1000] w-full h-[4.2vw] bg-[#1B7CE8]/0 flex justify-center items-center",
            children: (0, s.jsxs)("div", {
              className: "flex items-center w-[87.5vw] h-full",
              children: [
                (0, s.jsx)("img", {
                  src: "/first/logo.png",
                  alt: "",
                  className: "w-[50px] h-[50px]",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex-grow flex justify-center items-center font-[400] text-[16px] text-black gap-[32px]",
                  children: [
                    (0, s.jsx)(o.E.a, {
                      href: "#Exchanges",
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      style: {
                        boxShadow: "2px 3px 0px 0px #000000",
                      },
                      className:
                        "w-[138px] h-[42px] flex justify-center items-center border border-black bg-[#FFCF03] rounded-[6px]",
                      children: (0, s.jsx)("span", {
                        children: "EXCHANGES",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      href: "#About",
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      style: {
                        boxShadow: "2px 3px 0px 0px #000000",
                      },
                      className:
                        "w-[94px] h-[42px] flex justify-center items-center border border-black bg-[#8BFEDE] rounded-[6px]",
                      children: (0, s.jsx)("span", {
                        children: "ABOUT",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      href: "#Buy",
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      style: {
                        boxShadow: "2px 3px 0px 0px #000000",
                      },
                      className:
                        "w-[70px] h-[42px] flex justify-center items-center border border-black bg-[#DD8BFE] rounded-[6px]",
                      children: (0, s.jsx)("span", {
                        children: "BUY",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      href: "#Social",
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      style: {
                        boxShadow: "2px 3px 0px 0px #000000",
                      },
                      className:
                        "w-[100px] h-[42px] flex justify-center items-center border border-black bg-[#DBFE8B] rounded-[6px]",
                      children: (0, s.jsx)("span", {
                        children: "SOCIAL",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    " shrink-0 flex flex-row-reverse items-center gap-[32px]",
                  children: [
                    (0, s.jsx)(o.E.a, {
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      href: "https://t.me/marspepe_eth",
                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/first/icon-t.svg",
                        alt: "",
                        className: "w-[42px] h-[42px] cursor-pointer",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      href: "https://x.com/marspepe_eth",
                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/first/icon-x.svg",
                        alt: "",
                        className: "w-[42px] h-[42px] cursor-pointer",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        ),
        g = i.memo(() => {
          let { RiveComponent: e } = (0, c.useRive)({
              src: "/mobile/exchange.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            }),
            t = (0, i.useRef)(null),
            [a] = (0, n.Z)(t),
            l = (0, i.useCallback)((e) => {
              window.open(e, "_blank");
            }, []);
          return (0, s.jsxs)("section", {
            id: "mobile-Exchanges",
            className: " mobile w-screen text-white relative overflow-hidden",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-full",
                src: "/mobile/2-1.png",
                alt: "",
              }),
              (0, s.jsx)(e, {
                className: "w-screen h-[100vw] absolute bottom-0 left-0 z-[1]",
              }),
              (0, s.jsx)("div", {
                className: " absolute left-1/2 top-1/2 opacity-0 w-1 h-1 z-[2]",
                ref: t,
              }),
              a &&
                (0, s.jsxs)(o.E.div, {
                  initial: {
                    opacity: 0,
                    scale: 0,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                  style: {
                    gap: "3vw",
                  },
                  className:
                    "w-full h-[107vw] flex flex-col items-center absolute top-[20vw] left-0 z-10",
                  children: [
                    (0, s.jsxs)(o.E.div, {
                      className:
                        "flex flex-col items-center font-[400] textShadow-M text-white",
                      children: [
                        (0, s.jsx)(o.E.span, {
                          className: "text-[5.6vw]",
                          children: "EXCHANGES",
                        }),
                        (0, s.jsx)(o.E.span, {
                          className: "text-[3.7vw] mt-[4vw]",
                          children: "Where’s $MARSPEPE?",
                        }),
                        (0, s.jsx)(o.E.span, {
                          className: "text-[3.7vw]",
                          children: "Everywhere that matters.",
                        }),
                        (0, s.jsx)(o.E.span, {
                          className: "text-[3.7vw]",
                          children: "Go get it.",
                        }),
                      ],
                    }),
                    (0, s.jsx)(o.E.a, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 1,
                          duration: 0.5,
                        },
                      },
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      className:
                        "flex items-center justify-center w-[89vw] h-[12vw] mt-[2vw] bg-[#291523] rounded-[2.67vw] z-10",
                      style: {
                        boxShadow: "0px 4PX 0px 0px #381D2F",
                        width: "89vw",
                      },
                      href: "",
                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/two/icon-mexc.png",
                        className: "w-[26vw] h-[4vw]",
                      }),
                    }),
                    (0, s.jsx)(o.E.div, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 1.5,
                          duration: 0.5,
                        },
                      },
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      className:
                        "flex items-center justify-center w-[89vw] h-[12vw] bg-[#291523] rounded-[2.67vw]  z-10",
                      style: {
                        boxShadow: "0px 4PX 0px 0px #381D2F",
                        width: "89vw",
                      },
                      onClick: () =>
                        l("https://www.gate.io/trade/BORING_USDT?ref=3018394"),
                      children: (0, s.jsx)("img", {
                        src: "/two/icon-gate.png",
                        className: "w-[24.4vw] h-[5.6vw]",
                      }),
                    }),
                    (0, s.jsx)(o.E.a, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 2,
                          duration: 0.5,
                        },
                      },
                      whileHover: {
                        scale: 1.1,
                      },
                      whileTap: {
                        scale: 0.95,
                      },
                      className:
                        "flex items-center justify-center w-[89vw] h-[12vw] bg-[#291523] rounded-[2.67vw] z-10",
                      style: {
                        boxShadow: "0px 4PX 0px 0px #381D2F",
                        width: "89vw",
                      },
                      href: "https://app.uniswap.org/explore/tokens/ethereum/0xECDB7D9dEB4BD0fBCcBD2E58Df3c7C063d8AddAd",
                      target: "_blank",
                      children: (0, s.jsx)("img", {
                        src: "/two/icon-uniswap.png",
                        className: "w-[29vw] h-[7.2vw]",
                      }),
                    }),
                  ],
                }),
            ],
          });
        }),
        b = i.memo(() => {
          let e = (0, i.useRef)(null),
            [t] = (0, n.Z)(e),
            { RiveComponent: a } = (0, c.useRive)({
              src: "/mobile/home-m.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            });
          return (0, s.jsxs)("section", {
            id: "mobile-Home",
            className: "mobile w-full text-white relative overflow-hidden ",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-full",
                src: "/mobile/1-1.png",
                alt: "",
                ref: e,
              }),
              (0, s.jsx)(a, {
                className: "w-full h-[100vw] absolute left-0 bottom-0 z-[1]",
              }),
              t &&
                (0, s.jsxs)("div", {
                  className:
                    "flex justify-between w-[76vw] h-[32vw] absolute z-[21] top-[86vw] left-[10vw]",
                  children: [
                    (0, s.jsx)(o.E.img, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                          duration: 0.2,
                        },
                      },
                      whileHover: {
                        scale: 1.3,
                      },
                      className:
                        "w-[15.3vw] h-[13.87vw] absolute left-0 top-0 z-10",
                      src: "/first/image3.png",
                      alt: "",
                    }),
                    (0, s.jsx)(o.E.img, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 2,
                          duration: 0.2,
                        },
                      },
                      whileHover: {
                        scale: 1.3,
                      },
                      className:
                        "w-[16.5vw] h-[14.3vw] absolute right-0 bottom-0 z-10",
                      style: {
                        right: 0,
                      },
                      src: "/first/image2.png",
                      alt: "",
                    }),
                  ],
                }),
              t &&
                (0, s.jsxs)(o.E.div, {
                  initial: {
                    opacity: 0,
                    scale: 0,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                  exit: {
                    opacity: 0,
                  },
                  className:
                    "w-full h-[56vw] textShadow-M flex flex-col justify-center items-center absolute top-[32vw] left-0 z-30 font-[400]  text-white text3D-M",
                  children: [
                    (0, s.jsx)(o.E.img, {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                          duration: 0.2,
                        },
                      },
                      whileHover: {
                        scale: 1.3,
                      },
                      className: "w-[34vw] h-[29vw] ",
                      src: "/first/image1.png",
                      alt: "",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[12vw] mt-[2.67vw]",
                      children: "BORING",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[8vw]",
                      children: "BUT NOT BORING",
                    }),
                    (0, s.jsx)("div", {
                      className: "mt-[5.3vw] cursor-pointer",
                      onClick: () =>
                        window.open(
                          "https://app.uniswap.org/explore/tokens/ethereum/0xECDB7D9dEB4BD0fBCcBD2E58Df3c7C063d8AddAd",
                          "_blank"
                        ),
                      children: (0, s.jsx)("img", {
                        src: "/first/image-buy.png",
                        className:
                          "w-[32.8vw] h-[9.6vw] animate__animated animate__pulse animate__infinite",
                        alt: "",
                      }),
                    }),
                  ],
                }),
            ],
          });
        }),
        N = i.memo(() => {
          let { RiveComponent: e } = (0, c.useRive)({
              src: "/three/three.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            }),
            t = (0, i.useRef)(null),
            [a] = (0, n.Z)(t),
            [l, { inc: r, dec: x, set: m, reset: w }] = (0, p.Z)(1, {
              min: 1,
              max: 15,
            }),
            [h, d] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              if (a) {
                w(), d(!1);
                let e = setInterval(() => {
                  r();
                }, 80);
                setTimeout(() => {
                  d(!0), e && clearInterval(e);
                }, 1500);
              }
            }, [a]),
            (0, s.jsxs)("section", {
              id: "mobile-About",
              className: "mobile w-screen text-white relative overflow-hidden",
              children: [
                (0, s.jsx)("img", {
                  src: "/mobile/3-2.png",
                  className: "w-screen h-[100%] ",
                }),
                (0, s.jsx)("img", {
                  src: "/mobile/3-1.png",
                  className:
                    "w-screen h-[50vw] absolute left-0 bottom-[10vw] z-[1]",
                }),
                a &&
                  (0, s.jsx)(o.E.div, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 1,
                      },
                    },
                    exit: {
                      opacity: 0,
                    },
                    className:
                      "w-full h-[34.7vw] flex flex-col items-center gap-[2.67vw] absolute top-[23vw] left-0 z-10",
                    children: (0, s.jsxs)(o.E.div, {
                      className:
                        "flex flex-col items-center font-[400] text3D-M text-white",
                      children: [
                        (0, s.jsx)("span", {
                          className: "text-[5.6vw]",
                          children: "BORING?",
                        }),
                        (0, s.jsx)("span", {
                          className: "text-[3.7vw] mt-[4vw]",
                          children: "WHY IS BORING ANYTHING",
                        }),
                        (0, s.jsx)("span", {
                          className: "text-[3.7vw] mt-[10px]",
                          children: "BUT BORING?",
                        }),
                      ],
                    }),
                  }),
                a &&
                  (0, s.jsx)(e, {
                    className:
                      " absolute bottom-[8vw] left-[16vw] w-[67vw] h-[40vw] z-10",
                  }),
                a &&
                  (0, s.jsx)("img", {
                    src: "/three/image-pepe.png",
                    className:
                      " absolute top-1/2 -mt-[20vw] right-[29.3vw] w-[35vw] h-[63vw] z-10",
                  }),
                (0, s.jsx)("div", {
                  className:
                    " absolute top-1/2 left-1/2 w-1 h-1 bg-transparent",
                  ref: t,
                }),
                (0, s.jsx)("div", {
                  ref: t,
                  style: {
                    background:
                      "radial-gradient(51.02% 51.02% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, "
                        .concat(0.84 - 0.05 * l, ") ")
                        .concat(10 + 10 * l, "%,  rgba(0, 0, 0, 0.48) 99.05%)"),
                  },
                  className: " absolute top-0 left-0 right-0 bottom-0 z-20",
                }),
              ],
            })
          );
        }),
        j = i.memo(() => {
          let e = (0, i.useRef)(null),
            [t] = (0, n.Z)(e),
            a = (0, i.useRef)(null),
            [l] = (0, n.Z)(a),
            c = (0, i.useRef)(null),
            [r] = (0, n.Z)(c);
          return (0, s.jsxs)("section", {
            id: "mobile-Buy",
            className:
              "mobile w-screen text-white !h-[397vw] !max-h-[397vw] relative bg-[#6D2F98]",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-[121vw]",
                src: "/mobile/4-1.png",
                alt: "",
              }),
              (0, s.jsx)("img", {
                className: "w-full h-[116vw] absolute left-0 top-[91vw] z-10",
                src: "/mobile/4-2.png",
                alt: "",
              }),
              (0, s.jsx)("div", {
                className:
                  "w-full h-[11.7vw] absolute top-[13vw] left-0 z-10 flex justify-center items-center ",
                children: (0, s.jsx)("span", {
                  className: "text-white font-[400] text-[5.6vw] textShadow-M",
                  children: "HOW TO BUY $MARSPEPE",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full h-[67vw] absolute top-[26vw] left-0 z-10 flex flex-col-reverse items-center",
                children: [
                  (0, s.jsx)("img", {
                    className: "w-[53vw] h-[59vw]",
                    src: "/four/image-p.png",
                    alt: "",
                    ref: e,
                  }),
                  t &&
                    (0, s.jsxs)("div", {
                      className:
                        "flex justify-between  absolute top-0 left-[4vw] right-[4vw] z-10",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex w-[32vw] h-[67vw] relative",
                          children: [
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 0.5,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[8.8vw] h-[8vw] absolute right-0 top-0 z-10",
                              src: "/four/image1.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 0.8,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[9.6vw] h-[8vw] absolute left-0 top-1/2 -mt-[6vw] z-10",
                              src: "/four/image2.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 1.1,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[9.3vw] h-[8vw] absolute left-[5.3vw] bottom-0 z-10 ",
                              src: "/four/image3.png",
                              alt: "",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex w-[32vw] h-[67vw] relative",
                          children: [
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 1.4,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[9.6vw] h-[8vw] absolute left-0 top-0 z-10",
                              src: "/four/image4.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 1.8,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[9.3vw] h-[8vw] absolute right-0 top-1/2 -mt-[6vw] z-10 ",
                              src: "/four/image5.png",
                              alt: "",
                            }),
                            (0, s.jsx)(o.E.img, {
                              initial: {
                                opacity: 0,
                              },
                              animate: {
                                opacity: 1,
                                transition: {
                                  delay: 2,
                                  duration: 0.2,
                                },
                              },
                              whileHover: {
                                scale: 1.3,
                              },
                              className:
                                "w-[8.8vw] h-[8vw] absolute right-[5.3vw] bottom-0 z-10",
                              src: "/four/image6.png",
                              alt: "",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                ref: a,
                className:
                  "w-full h-[116vw] absolute left-[0px] top-[109vw] z-20 flex flex-col items-center gap-[2.67vw]",
                children: [
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: l ? 1 : 0,
                      scale: l ? 1 : 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.2,
                      },
                    },
                    className: "w-[91vw] h-[58vw]  z-10 ",
                    src: "/mobile/step1.png",
                    alt: "",
                  }),
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: l ? 1 : 0,
                      scale: l ? 1 : 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.2,
                      },
                    },
                    className: "w-[97] h-[62vw] z-10 ",
                    src: "/mobile/step2.png",
                    alt: "",
                  }),
                  (0, s.jsx)("div", {
                    ref: c,
                    className:
                      " absolute top-[122vw] left-1/2 opacity-0 w-1 h-1",
                    children: " ",
                  }),
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: r ? 1 : 0,
                      scale: r ? 1 : 0,
                      transition: {
                        delay: 0.4,
                        duration: 0.2,
                      },
                    },
                    className: "w-[99vw] h-[74vw] z-10  -mt-[8vw]",
                    src: "/mobile/step3.png",
                    alt: "",
                  }),
                  (0, s.jsx)(o.E.img, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: r ? 1 : 0,
                      scale: r ? 1 : 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.2,
                      },
                    },
                    className: "w-[95vw] h-[91vw] z-20  -mt-[11vw]",
                    src: "/mobile/step4.png",
                    alt: "",
                  }),
                  (0, s.jsxs)(o.E.div, {
                    initial: {
                      opacity: 0,
                      scale: 0,
                    },
                    animate: {
                      opacity: r ? 1 : 0,
                      scale: r ? 1 : 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.2,
                      },
                    },
                    className:
                      "w-full px-[6vw] z-20 mt-[0px] text-center text-[3.4vw] font-[400] leading-[4.8vw] text-white textShadow-M",
                    children: [
                      "IF YOU’RE HERE TO USE MARSPEPE'S PAST SERVICES, YOU CAN FIND ALL THE RELEVANT DETAILSAND EXPLANATIONS ",
                      (0, s.jsx)("a", {
                        className: "!text-[#09A8E5] cursor-pointer !underline",

                        target: "_blank",
                        children: "HERE",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("img", {
                className: "w-full h-[11.5vw] absolute bottom-0 left-0",
                src: "/mobile/image-three-footer.png",
                alt: "",
              }),
            ],
          });
        }),
        y = i.memo(() => {
          let e = (0, i.useRef)(null),
            [t] = (0, n.Z)(e),
            { RiveComponent: a } = (0, c.useRive)({
              src: "/five/five-pepe.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            });
          return (0, s.jsxs)("section", {
            id: "mobile-Five",
            className: "mobile w-full text-white relative overflow-hidden",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-full",
                src: "/mobile/5-2.png",
                alt: "",
                ref: e,
              }),
              t &&
                (0, s.jsx)(o.E.img, {
                  initial: {
                    opacity: 0,
                    scale: 0,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 1,
                      duration: 1,
                    },
                  },
                  className:
                    "w-[35.5vw] h-[91.6vw] absolute right-[29vw] bottom-[30vw] z-20",
                  src: "/mobile/image-five.png",
                  alt: "",
                }),
              (0, s.jsx)(a, {
                className:
                  "w-[76vw] h-[52vw] absolute left-1/2 -ml-[38vw] -top-[5vw] z-20 ",
              }),
            ],
          });
        }),
        E = i.memo(() =>
          (0, s.jsx)("div", {
            className:
              " z-10 flex items-center w-full h-[11.7vw] pt-[1vw] gap-[4px] text-[4.3vw] font-[400] bg-[#5E6D8F] border-b-[1vw] border-black",
            children: (0, s.jsx)(d.Z, {
              speed: 60,
              delay: 0,
              loop: 0,
              className: "w-full h-full",
              gradient: !0,
              gradientColor: "#000000",
              gradientWidth: "10",
              children: [
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
                "$MARSPEPE",
              ].map((e, t) =>
                (0, s.jsx)(
                  "div",
                  {
                    className:
                      "flex justify-center items-center gap-[4px] h-full",
                    children: (0, s.jsx)("span", {
                      className: "pr-[10.7vw] textShadow",
                      children: e,
                    }),
                  },
                  t
                )
              ),
            }),
          })
        ),
        z = i.memo(() => {
          let { rive: e, RiveComponent: t } = (0, c.useRive)({
              src: "/six/text.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
            }),
            a = (0, i.useRef)(null),
            [l] = (0, n.Z)(a);
          return (0, s.jsxs)("section", {
            id: "mobile-Social",
            className: "mobile w-full text-white relative ",
            children: [
              (0, s.jsx)("img", {
                className: "w-full h-full",
                src: "/mobile/bg6.png",
                alt: "",
              }),
              (0, s.jsxs)("div", {
                className:
                  " absolute top-0 left-0 w-full h-full flex flex-col items-center",
                children: [
                  (0, s.jsx)(E, {}),
                  (0, s.jsxs)("div", {
                    className:
                      "w-[71vw] h-[24vw] mt-[2vw] flex flex-col justify-center items-center  z-10 text-[5.6vw] font-[400] textShadow-M",
                    children: [
                      (0, s.jsx)("span", {
                        children: "Still borIng?",
                      }),
                      (0, s.jsx)("span", {
                        children: "Not anymore.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex justify-around items-center w-[36vw] h-[20vw] z-10",
                    children: [
                      (0, s.jsxs)(o.E.a, {
                        whileHover: {
                          scale: 1.1,
                        },
                        whileTap: {
                          scale: 0.95,
                        },
                        href: "https://t.me/marspepe_eth",
                        target: "_blank",
                        className:
                          "flex flex-col items-center justify-center cursor-pointer",
                        children: [
                          (0, s.jsx)("img", {
                            src: "/six/icon-tree.svg",
                            className: "w-[4.67vw] h-[7.6vw]",
                            alt: "",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-[12vw] h-[12.6vw] -mt-[2PX] bg-[url(/six/bg-share-box.svg)] bg-no-repeat bg-cover flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/six/icon-t.svg",
                              className: "w-[5.3vw] h-[4.67vw]",
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)(o.E.a, {
                        whileHover: {
                          scale: 1.1,
                        },
                        whileTap: {
                          scale: 0.95,
                        },
                        href: "https://x.com/marspepe_eth",
                        target: "_blank",
                        className:
                          "flex flex-col items-center justify-center cursor-pointer",
                        children: [
                          (0, s.jsx)("img", {
                            src: "/six/icon-face.svg",
                            className: "w-[6.3vw] h-[7.6vw]",
                            alt: "",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-[12vw] h-[12.6vw] -mt-[2PX] bg-[url(/six/bg-share-box.svg)] bg-no-repeat bg-cover flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/six/icon-x.svg",
                              className: "w-[4.67vw] h-[4vw]",
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(o.E.div, {
                    ref: a,
                    className:
                      "w-[93.5vw] h-[56vw]  flex flex-col-reverse items-center relative z-10",
                    children: [
                      (0, s.jsx)("img", {
                        src: "/six/image-divan.png",
                        className: "w-[79.6vw] h-[41.7vw]",
                        alt: "",
                      }),
                      l &&
                        (0, s.jsx)(o.E.img, {
                          initial: {
                            opacity: 0,
                            scale: 0,
                          },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              delay: 0,
                              duration: 0.5,
                            },
                          },
                          src: "/six/image-pepe.png",
                          className:
                            "w-[48.3vw] h-[34.7vw] absolute bottom-[24vw] left-[30.65vw] z-10",
                          alt: "",
                        }),
                      l &&
                        (0, s.jsx)(o.E.img, {
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                            transition: {
                              delay: 1,
                              duration: 0.2,
                            },
                          },
                          src: "/six/image-pepe-p.png",
                          className:
                            "w-[20.3vw] h-[16.5vw] absolute top-[0px] right-[0px] z-20 animate-min-bounce",
                          alt: "",
                        }),
                    ],
                  }),
                  l &&
                    (0, s.jsx)(t, {
                      className: "w-[69vw] h-[50.4vw] z-50 -mt-[10vw]",
                    }),
                  (0, s.jsx)("div", {
                    className:
                      "w-[96vw] h-[4.8vw] text-center absolute bottom-[8vw] left-1/2 -ml-[48vw] z-10 font-[400] text-[4.3vw] textShadow-M",
                    children: "Join us for one reason: have fun.",
                  }),
                ],
              }),
            ],
          });
        }),
        R = i.memo(() =>
          (0, s.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[1000] w-full h-[16vw] flex items-center px-[3vw] gap-[2vw]",
            children: [
              (0, s.jsx)("img", {
                src: "/first/logo.png",
                alt: "",
                className: "w-[10.7vw] h-[10.7vw]",
              }),
              (0, s.jsx)("span", {
                className: "text-white text-[4.3vw] font-[500]",
                children: "MARSPEPE",
              }),
            ],
          })
        );

      function O() {
        let { isMobile: e } = l();
        return (0, s.jsx)("div", {
          className: "w-screen h-screen bg-white relative overflow-hidden",
          children: e ? (0, s.jsx)(S, {}) : (0, s.jsx)(B, {}),
        });
      }
      let B = () =>
          (0, s.jsxs)("div", {
            className: "w-screen h-screen bg-white relative overflow-hidden",
            children: [
              (0, s.jsx)(u, {}),
              (0, s.jsxs)("div", {
                id: "pc",
                className: "body",
                children: [
                  (0, s.jsx)(x, {}),
                  (0, s.jsx)(r, {}),
                  (0, s.jsx)(m, {}),
                  (0, s.jsx)(w, {}),
                  (0, s.jsx)(h, {}),
                  (0, s.jsx)(v, {}),
                ],
              }),
            ],
          }),
        S = () =>
          (0, s.jsxs)("div", {
            className: "w-screen h-[100%] bg-white relative overflow-hidden",
            children: [
              (0, s.jsx)(R, {}),
              (0, s.jsxs)("div", {
                id: "mobile",
                className: "mobile-body",
                children: [
                  (0, s.jsx)(b, {}),
                  (0, s.jsx)(g, {}),
                  (0, s.jsx)(N, {}),
                  (0, s.jsx)(j, {}),
                  (0, s.jsx)(y, {}),
                  (0, s.jsx)(z, {}),
                ],
              }),
            ],
          });
    },
  },
  function (e) {
    e.O(0, [370, 251, 971, 69, 744], function () {
      return e((e.s = 7638));
    }),
      (_N_E = e.O());
  },
]);
