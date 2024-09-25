(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        2110: function(e, t, a) {
            "use strict";
            var n, l, s, i, r = a(2784);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return r.createElement("svg", _extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 14,
                    height: 11,
                    fill: "none"
                }, e), n || (n = r.createElement("path", {
                    d: "M13.023 5.872a4.466 4.466 0 0 1-4.461-4.468",
                    stroke: "url(#arrow_svg__a)",
                    strokeWidth: .9,
                    strokeMiterlimit: 10,
                    strokeLinecap: "round"
                })), l || (l = r.createElement("path", {
                    d: "M13.023 5.872a4.466 4.466 0 0 0-4.461 4.468",
                    stroke: "url(#arrow_svg__b)",
                    strokeWidth: .9,
                    strokeMiterlimit: 10,
                    strokeLinecap: "round"
                })), s || (s = r.createElement("path", {
                    d: "M13.127 5.872H.872",
                    stroke: "url(#arrow_svg__c)",
                    strokeWidth: .9,
                    strokeMiterlimit: 10,
                    strokeLinecap: "round"
                })), i || (i = r.createElement("defs", null, r.createElement("linearGradient", {
                    id: "arrow_svg__a",
                    x1: 10.211,
                    y1: .985,
                    x2: 13.381,
                    y2: 2.576,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#e71c32"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#ff6877"
                })), r.createElement("linearGradient", {
                    id: "arrow_svg__b",
                    x1: 10.211,
                    y1: 5.453,
                    x2: 13.381,
                    y2: 7.044,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#e71c32"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#ff6877"
                })), r.createElement("linearGradient", {
                    id: "arrow_svg__c",
                    x1: 5.403,
                    y1: 5.778,
                    x2: 5.683,
                    y2: 7.503,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#e71c32"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#ff6877"
                })))))
            }
        },
        8185: function(e, t, a) {
            "use strict";
            var n, l = a(2784);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return l.createElement(
                    "img",
                    {src: "https://bedjema.github.io/itech-r/img/logo.png",
                        width : "110px"
                    },
                    null
                  )
            }
        },
        7314: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(3186)
            }])
        },
        3186: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return H
                },
                default: function() {
                    return pages
                }
            });
            var n, l, s = a(2322),
                i = a(3013),
                r = a(7165),
                c = a(1807),
                o = a(1465),
                d = a(5731),
                m = a(3188),
                x = a(2784),
                u = a(8108),
                g = a(5281);
            let AutoPlayVideo = e => {
                    let t = (0, x.useRef)(null),
                        a = e.poster && e.width ? (0, u._m)({
                            src: e.poster,
                            width: e.width,
                            quality: 75
                        }) : e.poster;
                    return (0, x.useEffect)(() => {
                        var a;
                        if (e.isPlaying && (null === (a = t.current) || void 0 === a ? void 0 : a.paused)) {
                            let e = window.setInterval(() => {
                                var a;
                                null === (a = t.current) || void 0 === a || a.play().then(() => window.clearInterval(e)).catch(() => console.warn)
                            }, 100);
                            return () => {
                                var a;
                                window.clearInterval(e), null === (a = t.current) || void 0 === a || a.pause()
                            }
                        }
                    }, [e.isPlaying]), (0, s.jsx)("video", {
                        ref: t,
                        preload: "auto",
                        autoPlay: e.isPlaying,
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        src: e.src,
                        poster: a,
                        className: e.className,
                        width: e.width
                    })
                },
                HeroSection = e => {
                    let {
                        section: t,
                        videos: a,
                        mobileVideo: n
                    } = e, l = (0, x.useRef)(null), [i, u] = (0, x.useState)(0), [p] = (0, x.useState)([...a, ...a, ...a]), [h, f] = (0, x.useState)(!1);
                    return (0, x.useEffect)(() => {
                        (0, m.z2)(), l.current && (Object.assign(l.current, {
                            centeredSlides: !0,
                            autoplay: {
                                delay: 2500
                            },
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: !1
                            },
                            breakpoints: {
                                360: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 24
                                },
                                768: {
                                    slidesPerView: 1.6,
                                    spaceBetween: 80
                                },
                                1024: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 80
                                },
                                1280: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 350
                                }
                            },
                            on: {
                                slideChange(e) {
                                    u(e.realIndex)
                                },
                                afterInit() {
                                    f(!0)
                                }
                            }
                        }), l.current.initialize())
                    }, []), (0, s.jsxs)("section", {
                        children: [(0, s.jsx)("div", {
                            className: "mx-auto flex justify-center px-4 pt-6 text-center lg:pt-10",
                            children: (0, s.jsx)("h1", {
                                className: (0, d.cn)(c.H1, "font-baseneue text-balance mx-auto max-w-[560px] font-semibold uppercase leading-none md:max-w-[750px] md:leading-none lg:max-w-[1000px] lg:leading-none"),
                                children: t.heading
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-balance mx-auto px-4 md:max-w-md lg:max-w-xl",
                            children: (0, s.jsx)(r.U, {
                                content: t.content,
                                proseClassName: (0, d.cn)("font-swissnow mx-auto md:max-w-[400px] lg:max-w-[1200px] text-center pt-6 md:pt-8 md:pt-[59px]", c.H4),
                                components: {
                                    em: e => {
                                        let {
                                            ...t
                                        } = e;
                                        return (0, s.jsx)("em", {
                                            className: (0, d.cn)(c.Do),
                                            ...t
                                        })
                                    }
                                }
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-center justify-center px-4 pt-8 md:pb-12 lg:pb-[59px] lg:pt-[71px]",
                            children: [(0, s.jsx)(o.Z, {
                                cta: t.primaryCTA,
                                componentName: "primaryCTA",
                                size: "xl"
                            }), (0, s.jsx)("span", {
                                className: (0, d.cn)("pb-8 pt-4 opacity-40", c.oW),
                                children: t.caption
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex justify-center px-4 md:hidden",
                            children: n && (0, s.jsx)(g.n, {
                                section: {
                                    url: n.src,
                                    title: "",
                                    thumbnail: n.thumbnail
                                },
                                videoAspectRatio: "",
                                preloadThumbnail: !0,
                                controls: !1,
                                containerStyles: "w-full",
                                loop: !0
                            })
                        })]
                    })
                };
            var p = a(6511),
                h = a(731),
                f = a(5136);
            let Strong = e => {
                    let {
                        ...t
                    } = e;
                    return (0, s.jsx)("span", {
                        className: "gradient-highlighted-text",
                        ...t
                    })
                },
                Empahasis = e => {
                    let {
                        ...t
                    } = e;
                    return (0, s.jsx)("em", {
                        className: (0, d.cn)(c.Do),
                        ...t
                    })
                },
                Headings = e => {
                    let {
                        heading: t,
                        subheading: a,
                        className: n
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: (0, d.cn)("mb-10 flex flex-col items-center px-4 text-center md:mb-12 md:px-0 lg:mb-20", n),
                        children: [(0, s.jsx)(r.U, {
                            content: t,
                            className: "mb-6 md:mb-8 lg:mb-[27px]",
                            proseClassName: (0, d.cn)("uppercase font-baseneue", c.H2),
                            components: {
                                strong: Strong
                            }
                        }), (0, s.jsx)(r.U, {
                            content: a,
                            className: "mx-auto text-center",
                            proseClassName: (0, d.cn)("font-swissnow max-w-[288px] md:max-w-[548px] lg:max-w-[920px]", c.H4),
                            components: {
                                em: Empahasis
                            }
                        })]
                    })
                },
                CardElement = e => {
                    let {
                        card: t,
                        hoveredCard: a,
                        setHoveredCard: n,
                        isMobile: l,
                        ctaText: i,
                        width: r,
                        index: m
                    } = e, {
                        image: x,
                        video: g,
                        videoThumbnail: h,
                        heading: j,
                        subheading: v,
                        link: w
                    } = t, b = {
                        duration: .5,
                        type: "tween"
                    };
                    return (0, s.jsx)("div", {
                        onMouseOver: () => !l && n(m),
                        onMouseOut: () => !l && n(-1),
                        children: (0, s.jsxs)("div", {
                            className: "relative h-full overflow-hidden rounded-xl bg-white md:rounded-2xl lg:rounded-3xl xl:min-h-[581px]",
                            children: [(0, s.jsxs)("div", {
                                className: "relative mb-0",
                                children: [(0, s.jsx)(p.E.div, {
                                    className: "mx-5 hidden md:mx-9 lg:mx-11 lg:mt-6 lg:block",
                                    initial: {
                                        opacity: 1
                                    },
                                    animate: {
                                        opacity: a === m ? 0 : 1
                                    },
                                    transition: b,
                                    children: x && (0, s.jsx)(u.Ee, {
                                        ...x,
                                        width: 640,
                                        height: 640,
                                        sizes: {
                                            xs: 640,
                                            sm: 640,
                                            md: 316,
                                            lg: 212,
                                            xl: 212
                                        }
                                    })
                                }), (0, s.jsx)(p.E.div, {
                                    className: "top-0 block w-full overflow-hidden rounded-xl p-4 pb-0 md:p-4 lg:absolute lg:p-6 lg:pb-8 lg:pt-1",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: l || a === m ? 1 : 0
                                    },
                                    transition: b,
                                    children: (0, s.jsx)(f.w, {
                                        media: g,
                                        mediaThumbnail: h,
                                        className: "rounded-xl md:rounded-2xl lg:rounded-3xl"
                                    })
                                })]
                            }), (0, s.jsxs)(p.E.div, {
                                className: "flex flex-col items-center px-4 pb-6 text-center md:px-4 lg:px-6 lg:pt-0",
                                children: [(0, s.jsx)(p.E.a, {
                                    className: (0, d.cn)(c.H3, "mb-4 mt-6 md:mt-2 lg:mb-[35px] lg:mt-0 lg:text-[33px] lg:leading-[36px]"),
                                    href: w,
                                    animate: {
                                        y: l || a !== m ? 0 : r > 1024 ? 46 : 56
                                    },
                                    transition: b,
                                    children: j
                                }), (0, s.jsxs)("div", {
                                    className: "w-full",
                                    children: [(0, s.jsx)(p.E.p, {
                                        className: "text-rebrand-darkGray  mb-4 text-lg leading-[22px] tracking-[-0.27px] md:mb-6 md:text-[18px] md:leading-[24px] md:tracking-[-0.72px] lg:block lg:text-[13spx] lg:leading-[26px] lg:tracking-[-0.36px]",
                                        animate: {
                                            opacity: l || a !== m ? 1 : 0
                                        },
                                        initial: {
                                            opacity: 1
                                        },
                                        transition: b,
                                        children: v
                                    }), (0, s.jsx)(p.E.div, {
                                        className: "left-0 right-0 m-auto flex w-full justify-center lg:absolute lg:bottom-[35px]",
                                        animate: {
                                            y: l || a === m ? 0 : 100
                                        },
                                        initial: {
                                            y: l ? 0 : 200
                                        },
                                        transition: b,
                                        children: (0, s.jsx)(o.Z, {
                                            cta: {
                                                text: i,
                                                link: w
                                            },
                                            type: "tertiary",
                                            componentName: "AllInOneSection"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                },
                AllInOnePlaceComponent = e => {
                    let {
                        section: t
                    } = e, [a, n] = (0, x.useState)(-1), [l, {
                        width: i
                    }] = (0, h.Z)();
                    return (0, s.jsx)("section", {
                        ref: l,
                        className: "md:-mx-4 lg:-mx-6",
                        children: (0, s.jsx)("div", {
                            className: "font-swissnow margin-auto bg-enterprise-lightGray flex flex-col items-center md:mx-4 lg:mx-6",
                            children: (0, s.jsxs)("div", {
                                className: "flex max-w-screen-2xl flex-col items-center",
                                children: [(0, s.jsx)(Headings, {
                                    heading: t.heading,
                                    subheading: t.subheading
                                }), (0, s.jsx)("div", {
                                    className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6",
                                    children: t.cards.map((e, l) => (0, s.jsx)(CardElement, {
                                        card: e,
                                        hoveredCard: a,
                                        setHoveredCard: n,
                                        isMobile: i < 1024,
                                        width: i,
                                        ctaText: t.cardCtaText,
                                        index: l
                                    }, e.heading))
                                })]
                            })
                        })
                    })
                };
            var j = a(8963),
                v = a(3008),
                w = a(9713);
            let useIsLoggedIn = () => {
                let [e, t] = (0, x.useState)(!1);
                return (0, x.useEffect)(() => {
                    var e, a;
                    let n = null === (a = document.cookie) || void 0 === a ? void 0 : null === (e = a.split("; ")) || void 0 === e ? void 0 : e.some(e => {
                            var t;
                            return (null == e ? void 0 : null === (t = e.split("=")) || void 0 === t ? void 0 : t[0]) === "user_meta"
                        }),
                        l = !!localStorage.getItem("token");
                    t(n || l)
                }, []), e
            };
            var b = a(7840),
                N = a(5239);
            let Button = e => {
                    let {
                        feature: t,
                        setFeature: a,
                        index: n,
                        isActive: l,
                        buttonText: i
                    } = e;
                    return (0, s.jsx)(p.E.button, {
                        onClick: () => a(n),
                        className: (0, d.cn)("relative overflow-hidden rounded-lg bg-white text-left font-normal md:w-[235px] lg:w-[330px] lg:rounded-xl", c.oW),
                        whileHover: "hover",
                        initial: "initial",
                        variants: {
                            hover: {
                                opacity: 1,
                                color: "rebrand-darkGray"
                            },
                            initial: {
                                opacity: l ? 1 : .4,
                                color: l ? "rebrand-darkGray" : "enterprise-lightGray"
                            }
                        },
                        children: (0, s.jsxs)("span", {
                            className: "relative flex h-12 items-center justify-between p-2 pl-4 md:h-fit md:flex-col md:items-start md:gap-4 md:p-4 md:pt-[18px] lg:h-[64px] lg:flex-row lg:items-center lg:gap-0 lg:p-6 lg:pr-2 lg:text-base lg:leading-none",
                            children: [t.title, l && (0, s.jsx)(o.Z, {
                                cta: {
                                    text: i,
                                    link: t.link || "#"
                                },
                                size: "md",
                                componentName: "AIFeatures",
                                type: "tertiary",
                                onClick: e => {
                                    e.stopPropagation(), e.preventDefault()
                                },
                                srOnly: "Learn more ".concat(t.title)
                            })]
                        })
                    }, "".concat(t.title, "-").concat(l))
                },
                AIFeatures = e => {
                    let {
                        section: t
                    } = e, {
                        features: a,
                        CTA: n,
                        learnMore: l
                    } = t, [i, r] = (0, x.useState)(a[2]), [m, u] = (0, x.useState)(0), setFeature = e => {
                        u(e)
                    };
                    return (0, x.useEffect)(() => {
                        r(a[m])
                    }, [m]), (0, s.jsxs)("section", {
                        children: [(0, s.jsxs)("div", {
                            className: "flex max-w-screen-2xl flex-col items-center text-center",
                            children: [(0, s.jsx)(Headings, {
                                heading: t.heading,
                                subheading: t.subheading
                            }), (0, s.jsx)("div", {
                                className: "mb-8 w-screen md:hidden",
                                children: (0, s.jsx)("div", {
                                    className: "scrollbar-hide flex gap-4 overflow-x-scroll px-4",
                                    children: a.map((e, t) => e.mobileVideo && (0, s.jsxs)("div", {
                                        className: "flex h-[341px] min-w-[212px] flex-col justify-between gap-4 overflow-hidden rounded-xl bg-white p-4 pt-[18px]",
                                        children: [(0, s.jsx)("p", {
                                            className: (0, d.cn)(c.oW, "text-left text-base"),
                                            children: e.title
                                        }), (0, s.jsx)(o.Z, {
                                            cta: {
                                                text: l,
                                                link: e.link
                                            },
                                            type: "tertiary",
                                            componentName: "AIFeatures",
                                            srOnly: "Learn more ".concat(e.title)
                                        })]
                                    }, t))
                                })
                            }), (0, s.jsxs)("div", {
                                className: "mb-8 hidden w-full flex-row md:flex lg:mb-10",
                                children: [(0, s.jsx)("div", {
                                    className: "color-rebrand-darkGray flex flex-col justify-center gap-2 md:mr-4 lg:mr-6 ",
                                    children: a.map((e, t) => {
                                        let a = (null == i ? void 0 : i.title) === e.title;
                                        return (0, s.jsx)(Button, {
                                            feature: e,
                                            setFeature: setFeature,
                                            index: t,
                                            isActive: a,
                                            buttonText: l
                                        }, t)
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "flex w-full items-center overflow-hidden rounded-xl bg-white md:rounded-2xl lg:rounded-3xl",
                                    children: (0, s.jsx)(N.M, {
                                        children: i && (0, s.jsx)(f.w, {
                                            media: i.desc,
                                            className: "rounded-xl lg:h-auto"
                                        })
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex justify-center md:mx-0",
                            children: (0, s.jsx)(o.Z, {
                                cta: {
                                    text: n.text,
                                    link: n.link
                                },
                                componentName: "AIFeatures",
                                type: "secondary"
                            })
                        })]
                    })
                };
            var _ = a(6149),
                y = a(9460);

            function useBreakpoint() {
                let [e, t] = (0, x.useState)("sm");
                return (0, x.useEffect)(() => {
                    function updateBreakpoint() {
                        window.innerWidth >= 1024 ? t("lg") : window.innerWidth >= 768 ? t("md") : window.innerWidth >= 640 && t("sm")
                    }
                    return window.addEventListener("resize", updateBreakpoint), updateBreakpoint(), () => window.removeEventListener("resize", updateBreakpoint)
                }, []), e
            }
            let Label = e => {
                    let {
                        text: t,
                        icon: a,
                        className: n
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: (0, d.cn)("flex w-1/2 flex-row items-center md:justify-center lg:justify-start", n),
                        children: [a && (0, s.jsx)(u.Ee, {
                            ...a,
                            sizes: {
                                xs: 48,
                                sm: 48,
                                md: 40,
                                lg: 40,
                                xl: 40
                            },
                            className: "h-12 w-12 lg:h-10 lg:w-10"
                        }), (0, s.jsx)("p", {
                            className: (0, d.cn)("ml-4", c.oW),
                            children: t
                        })]
                    })
                },
                MakeItPersonal = e => {
                    let {
                        section: t
                    } = e, {
                        heading: a,
                        subheading: n,
                        items: l,
                        staticImage: i,
                        leftLabel: r,
                        rightLabel: m,
                        CTA: g,
                        caption: p
                    } = t, h = (0, x.useRef)(null), j = (0, x.useRef)(null), v = (0, _.Y)(h), w = useBreakpoint(), [b, N] = (0, x.useState)(0), [C, k] = (0, x.useState)(!0);
                    (0, x.useEffect)(() => {
                        let e;
                        return C && (e = setInterval(() => {
                            N(e => (e + 1) % l.length)
                        }, 3e3)), () => clearInterval(e)
                    }, [C]), (0, x.useEffect)(() => {
                        "sm" === w ? k(!1) : k(!0)
                    }, [w]);
                    let handleUseCaseSelect = e => {
                        k(!1), N(e)
                    };
                    return (0, s.jsx)("section", {
                        className: "margin-auto bg-enterprise-lightGray flex flex-col items-center",
                        ref: j,
                        children: (0, s.jsxs)("div", {
                            className: "flex max-w-screen-2xl flex-col items-center text-center",
                            children: [(0, s.jsx)(Headings, {
                                heading: a,
                                subheading: n
                            }), (0, s.jsxs)("div", {
                                className: "flex w-screen flex-col md:w-full lg:flex-col-reverse",
                                children: [(0, s.jsx)("div", {
                                    ref: h,
                                    className: (0, d.cn)("scrollbar-hide mb-6 flex w-full flex-row gap-4 overflow-x-scroll px-4 md:mb-4 md:px-0 lg:mb-10 lg:ml-auto lg:w-1/2 lg:gap-6 lg:pl-3", b === l.length - 1 && "-ml-4"),
                                    children: l.map((e, t) => {
                                        var a;
                                        let {
                                            title: n
                                        } = e;
                                        return (0, s.jsx)(y.Z, {
                                            title: n,
                                            isActive: b === t,
                                            onClick: () => handleUseCaseSelect(t),
                                            disableAnimation: !C,
                                            scrollIntoView: v,
                                            className: "min-w-[33.3%] md:w-[calc(33.3%-10.6px)] md:min-w-[unset] lg:w-[calc(33.3%-16px)]",
                                            scrollIntoCenterOnMobile: !0,
                                            isLastChild: t === l.length - 1,
                                            sectionWidth: null === (a = j.current) || void 0 === a ? void 0 : a.clientWidth
                                        }, n)
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "relative mb-8 flex flex-col gap-6 px-4 md:mb-4 md:flex-row md:gap-4 md:px-0 lg:mb-6 lg:gap-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "md:w-1/2",
                                        children: [i && (0, s.jsx)(u.Ee, {
                                            ...i,
                                            sizes: {
                                                xs: 350,
                                                sm: 728,
                                                md: 360,
                                                lg: 476,
                                                xl: 684
                                            },
                                            className: "mb-4 rounded-xl md:mb-0 md:rounded-2xl lg:rounded-3xl"
                                        }), (0, s.jsx)("div", {
                                            className: "md:hidden",
                                            children: (0, s.jsx)(Label, {
                                                text: r.text,
                                                icon: r.icon
                                            })
                                        })]
                                    }), l.map((e, t) => {
                                        let {
                                            title: a,
                                            video: n,
                                            videoThumbnail: l
                                        } = e;
                                        return b === t && (0, s.jsx)("div", {
                                            className: "md:w-1/2",
                                            children: (0, s.jsx)(f.w, {
                                                media: n,
                                                mediaThumbnail: l,
                                                className: "rounded-xl md:rounded-2xl lg:rounded-3xl"
                                            })
                                        }, a)
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "-mt-4 mb-8 ml-4 md:ml-0 md:mt-0 md:flex md:gap-4 lg:mb-6 lg:gap-6",
                                    children: [(0, s.jsx)(Label, {
                                        text: r.text,
                                        icon: r.icon,
                                        className: "hidden md:flex"
                                    }), (0, s.jsx)(Label, {
                                        text: m.text,
                                        icon: m.icon
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex w-full flex-col items-center justify-center gap-4 px-4 md:w-fit lg:px-6",
                                children: [(0, s.jsx)(o.Z, {
                                    cta: g,
                                    componentName: "MakeItPersonal",
                                    type: "primary"
                                }), (0, s.jsx)("span", {
                                    className: (0, d.cn)(" text-enterprise-gray", c.oW),
                                    children: p
                                })]
                            })]
                        })
                    })
                };
            var C = a(8066),
                k = a(6277),
                E = a(5697);
            (n = l || (l = {})).Prev = "prev", n.Next = "next";
            let getRotatedArray = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = [...e];
                return t ? a.unshift(a.pop()) : a.push(a.shift()), a
            };
            var Carousels_CarouselArrows = e => {
                let {
                    disablePrev: t,
                    disableNext: a,
                    onPrev: n,
                    onNext: i,
                    className: r
                } = e, c = (0, C._)(), o = (0, C._)(), handleTap = (e, t) => {
                    if (e) return;
                    let a = t === l.Prev ? c : o;
                    a.start({
                        scale: [1, .8, 1],
                        transition: {
                            duration: .33
                        }
                    })
                };
                return (0, s.jsx)("div", {
                    className: (0, d.cn)("hidden gap-4 md:flex lg:gap-6", r),
                    children: [{
                        direction: l.Prev,
                        Icon: E.H,
                        disabled: t,
                        controls: c
                    }, {
                        direction: l.Next,
                        Icon: E.H,
                        disabled: a,
                        controls: o
                    }].map(e => {
                        let {
                            direction: t,
                            Icon: a,
                            disabled: l,
                            controls: r
                        } = e;
                        return (0, s.jsx)("div", {
                            className: (0, d.cn)("h-16 w-16 rounded-full bg-white lg:h-24 lg:w-24", "prev" === t && "rotate-180", l && "opacity-50"),
                            children: (0, s.jsxs)(p.E.button, {
                                animate: r,
                                onPointerDown: () => handleTap(l, t),
                                className: (0, d.cn)("group relative flex h-full w-full items-center justify-center overflow-hidden"),
                                disabled: l,
                                onClick: "next" === t ? i : n,
                                "aria-label": t,
                                children: [(0, s.jsx)(a, {
                                    className: (0, k.Z)("absolute h-8 w-8 duration-0 group-hover:translate-x-20 lg:h-12 lg:w-12", !l && "transition-transform group-hover:duration-700")
                                }), (0, s.jsx)(a, {
                                    className: (0, k.Z)("absolute h-8 w-8 -translate-x-20 duration-0 group-hover:translate-x-0 lg:h-12 lg:w-12", !l && "transition-transform group-hover:duration-700")
                                })]
                            })
                        }, t)
                    })
                })
            };

            function useSwipe(e) {
                let {
                    onLeft: t,
                    onRight: a
                } = e, [n, l] = (0, x.useState)(null), [s, i] = (0, x.useState)(null);
                return {
                    onTouchStart: e => {
                        i(null), e && e.targetTouches[0] && l(e.targetTouches[0].clientX)
                    },
                    onTouchMove: e => {
                        e && e.targetTouches[0] && i(e.targetTouches[0].clientX)
                    },
                    onTouchEnd: () => {
                        if (!n || !s) return;
                        let e = n - s,
                            l = e > 50;
                        (l || e < -50) && (l ? t() : a())
                    }
                }
            }
            let FadeCarousel = e => {
                    let {
                        heading: t,
                        items: a,
                        isHomepage: n
                    } = e, [l, i] = (0, x.useState)(0), Strong = e => {
                        let {
                            ...t
                        } = e;
                        return (0, s.jsx)("span", {
                            className: "gradient-highlighted-text",
                            ...t
                        })
                    }, handleNext = () => {
                        l < a.length - 1 && i(e => e + 1)
                    }, handlePrev = () => {
                        l > 0 && i(e => e - 1)
                    }, o = useSwipe({
                        onLeft: handleNext,
                        onRight: handlePrev
                    }), getAnimateObject = (e, t) => {
                        let a = t > e;
                        return {
                            x: "".concat((e - t) * 105, "%"),
                            opacity: a ? 0 : 100,
                            scale: a ? .6 : 1,
                            filter: a ? "blur(5px)" : "blur(0px)"
                        }
                    }, m = "font-baseneue mx-auto mb-10 max-w-[288px] uppercase md:mb-0 md:max-w-xs";
                    return n && (m = "font-baseneue text-enterprise-black mb-10 uppercase !text-[40px] !leading-[36px] mb-10 md:!text-[32px] md:!leading-[95%] lg:!text-[43.75px] md:!tracking-[0.48px] lg:!tracking-[0.656px]"), (0, s.jsxs)("div", {
                        className: "grid grid-cols-12",
                        children: [(0, s.jsxs)("div", {
                            className: "col-span-12 flex flex-col justify-between pr-0 text-center md:col-span-4 md:pr-20 md:text-left",
                            children: [(0, s.jsx)(r.U, {
                                content: t,
                                className: (0, d.cn)(c.H3, m),
                                proseClassName: (0, d.cn)(c.H3, m),
                                components: {
                                    strong: Strong
                                }
                            }), (0, s.jsx)(Carousels_CarouselArrows, {
                                disablePrev: 0 === l,
                                disableNext: l === a.length - 1,
                                onNext: handleNext,
                                onPrev: handlePrev
                            })]
                        }), (0, s.jsx)("div", {
                            className: "relative col-span-8 flex min-h-[572px] flex-col lg:min-h-[725px]",
                            children: a.map((e, t) => (0, s.jsx)(p.E.div, {
                                animate: getAnimateObject(t, l),
                                transition: {
                                    duration: .5
                                },
                                className: "absolute  h-full w-[266px] lg:w-[566px]",
                                ...o,
                                children: (0, s.jsxs)("div", {
                                    className: (0, d.cn)("text-enterprise-black flex h-full flex-col justify-between rounded-xl bg-white p-4 md:rounded-2xl lg:rounded-3xl lg:p-9", l < t ? "opacity-50 grayscale" : "opacity-100"),
                                    children: [(0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("span", {
                                            className: (0, d.cn)("mb-4 inline-block lg:mb-9", c.H4),
                                            children: "“"
                                        }), (0, s.jsx)("br", {}), (0, s.jsx)(r.U, {
                                            content: e.content,
                                            proseClassName: (0, d.cn)("font-swissnow", c.H4),
                                            components: {
                                                strong: Strong
                                            }
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-6 lg:pt-[165px]",
                                        children: [e.photo && (0, s.jsx)(u.Ee, {
                                            className: "h-[90px] w-[77px] md:h-[100px] md:w-[90px] lg:h-[176px] lg:w-[176px]",
                                            ...e.photo
                                        }), (0, s.jsxs)("div", {
                                            className: "grid gap-4",
                                            children: [(0, s.jsxs)("p", {
                                                className: c.oW,
                                                children: [e.fullName, " ", (0, s.jsx)("br", {}), " ", e.position, (0, s.jsx)("br", {}), " ", e.brandLogo ]
                                            })]
                                        })]
                                    })]
                                })
                            }, t))
                        })]
                    })
                },
                S = {
                    sm: {
                        imageWidth: 140,
                        headingSize: 20,
                        textSize: 12,
                        scaleFactor: 115 / 140
                    },
                    md: {
                        imageWidth: 234,
                        headingSize: 20,
                        textSize: 8,
                        scaleFactor: 171 / 234
                    },
                    lg: {
                        imageWidth: 448,
                        headingSize: 36,
                        textSize: 16,
                        scaleFactor: 330 / 448
                    }
                },
                CenteredCarousel = e => {
                    let {
                        items: t,
                        typeLabelMapper: a
                    } = e, [n, l] = (0, x.useState)(t), i = Math.floor(n.length / 2), r = useBreakpoint(), {
                        imageWidth: c,
                        headingSize: o,
                        textSize: m,
                        scaleFactor: u
                    } = S[r], handleNext = () => {
                        let e = getRotatedArray(n);
                        l(e)
                    }, handlePrev = () => {
                        let e = getRotatedArray(n, !0);
                        l(e)
                    }, g = useSwipe({
                        onLeft: handleNext,
                        onRight: handlePrev
                    });
                    return (0, s.jsxs)("div", {
                        className: "relative flex h-[220px] items-end justify-center gap-2 md:h-[370px] md:gap-4 lg:h-[708px] lg:gap-6",
                        children: [(0, s.jsx)(Carousels_CarouselArrows, {
                            disablePrev: !1,
                            disableNext: !1,
                            onPrev: handlePrev,
                            onNext: handleNext,
                            className: "absolute right-0 top-0 justify-end"
                        }), n.map((e, t) => {
                            let n = t - i,
                                l = Math.pow(u, Math.abs(n)),
                                x = 0 === n;
                            return (0, s.jsxs)(p.E.div, {
                                className: "flex-shrink-0",
                                initial: "center",
                                animate: {
                                    width: l * c + "px",
                                    transition: {
                                        duration: .6
                                    }
                                },
                                ...g,
                                children: [(0, s.jsxs)("div", {
                                    className: (0, d.cn)("mb-4 flex items-center justify-center gap-2 whitespace-pre md:whitespace-normal lg:mb-6 lg:gap-3", x && "gradient-highlighted-text"),
                                    children: [(0, s.jsx)("h1", {
                                        className: "font-alpina",
                                        style: {
                                            fontSize: o * l + "px"
                                        },
                                        children: e.name
                                    }), (0, s.jsx)("span", {
                                        style: {
                                            fontSize: m * l + "px"
                                        },
                                        children: a[e.type]
                                    })]
                                }), (0, s.jsx)(f.w, {
                                    media: e.video,
                                    mediaThumbnail: e.videoThumbnail,
                                    onEnded: "sm" !== r ? handleNext : void 0,
                                    autoPlay: !1,
                                    loop: !1,
                                    isPlaying: x,
                                    className: "rounded-lg md:rounded-xl lg:rounded-3xl"
                                })]
                            }, e.name)
                        })]
                    })
                };
            var useCases_SingleVideo = e => {
                    let {
                        video: t,
                        videoMobile: a
                    } = e;
                    return t && a ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(f.w, {
                            media: t.source,
                            mediaThumbnail: t.thumbnail,
                            className: "hidden md:col-span-4 md:block md:rounded-2xl lg:rounded-3xl"
                        }), (0, s.jsx)(f.w, {
                            media: a.source,
                            mediaThumbnail: a.thumbnail,
                            className: "rounded-xl md:col-span-4 md:hidden md:rounded-2xl lg:rounded-3xl"
                        })]
                    }) : null
                },
                useCases_ThreeVideos = e => {
                    let {
                        videos: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "grid gap-6 md:grid-cols-3",
                        children: t.map(e => (0, s.jsx)(f.w, {
                            media: e.source,
                            mediaThumbnail: e.thumbnail,
                            className: "hidden  rounded-xl first-of-type:block md:block md:rounded-2xl lg:rounded-3xl",
                            loop: !0,
                            autoPlay: !0
                        }, e.source.url))
                    })
                },
                useCases_VideosAndText = e => {
                    let {
                        video: t,
                        videoMobile: a
                    } = e;
                    return t && a ? (0, s.jsxs)("div", {
                        className: "grid gap-6 md:grid-cols-7",
                        children: [(0, s.jsx)(f.w, {
                            media: t.source,
                            mediaThumbnail: t.thumbnail,
                            className: "col-span-4 hidden md:block lg:rounded-3xl"
                        }), (0, s.jsx)(f.w, {
                            media: a.source,
                            mediaThumbnail: a.thumbnail,
                            className: "col-span-4 rounded-xl md:hidden"
                        }), (0, s.jsxs)("div", {
                            className: "col-span-3 hidden flex-col bg-white md:flex md:rounded-2xl lg:rounded-3xl",
                            children: [(0, s.jsx)(r.U, {
                                content: e.heading,
                                className: "flex-grow",
                                proseClassName: (0, d.cn)(c.H3, "md:p-4 hidden bg-white md:block md:rounded-2xl lg:rounded-3xl md:mb-4 lg:p-6"),
                                components: {
                                    em: e => {
                                        let {
                                            ...t
                                        } = e;
                                        return (0, s.jsx)("em", {
                                            className: (0, d.cn)("font-alpina", c.IB),
                                            ...t
                                        })
                                    }
                                }
                            }), (0, s.jsx)("p", {
                                className: (0, d.cn)("p-6", c.An),
                                children: e.subheading
                            })]
                        })]
                    }) : null
                },
                useCases_VideoAndText = e => {
                    let {
                        section: t,
                        logos: a
                    } = e;
                    return t.video ? (0, s.jsxs)("div", {
                        className: "md:grid md:grid-cols-7",
                        children: [(0, s.jsx)(f.w, {
                            media: t.video.source,
                            mediaThumbnail: t.video.thumbnail,
                            className: "rounded-xl md:col-span-4 md:rounded-2xl lg:rounded-3xl"
                        }), (0, s.jsxs)("div", {
                            className: "mt-2 md:col-span-3 md:m-0 md:ml-4 md:flex md:flex-col md:justify-between lg:ml-6",
                            children: [(0, s.jsx)(r.U, {
                                content: t.heading,
                                className: "flex-grow",
                                proseClassName: (0, d.cn)(c.H3, "md:p-4 hidden bg-white md:block rounded-xl md:rounded-2xl lg:rounded-3xl md:mb-4 lg:p-6"),
                                components: {
                                    em: e => {
                                        let {
                                            ...t
                                        } = e;
                                        return (0, s.jsx)("em", {
                                            className: (0, d.cn)("font-alpina", c.IB),
                                            ...t
                                        })
                                    }
                                }
                            }), a && (0, s.jsxs)("div", {
                                className: "rounded-xl bg-white md:rounded-2xl lg:rounded-3xl",
                                children: [(0, s.jsx)("p", {
                                    className: "p-4 md:my-2 md:pb-0 lg:px-6",
                                    children: t.subheading
                                }), (0, s.jsx)(w.h, {
                                    className: "pt-17 pb-8 md:pt-9",
                                    logos: a.slice(0, 5),
                                    customBackdropBlur: "backdrop-blur-[1px]",
                                    logoWidth: "min-w-[8.25rem]"
                                })]
                            })]
                        })]
                    }) : null
                };
            let UseCases = e => {
                let {
                    section: t,
                    logos: a
                } = e, {
                    tabs: n
                } = t, [l, i] = (0, x.useState)(n[0]), [r, c] = (0, x.useState)(0), [m, u] = (0, x.useState)(!0), g = (0, x.useRef)(null), h = (0, x.useRef)(null), f = (0, _.Y)(g), j = useBreakpoint();
                (0, x.useEffect)(() => {
                    let e;
                    return m && (e = setInterval(() => {
                        c(e => (e + 1) % n.length)
                    }, 4e3)), () => clearInterval(e)
                }, [m]), (0, x.useEffect)(() => {
                    i(n[r])
                }, [r]), (0, x.useEffect)(() => {
                    "sm" === j ? u(!1) : u(!0)
                }, [j]);
                let handleUseCaseSelect = e => {
                    u(!1), c(e)
                };
                if (!l) return null;
                let v = null;
                switch (l.type) {
                    case "SingleVideo":
                        v = (0, s.jsx)(useCases_SingleVideo, {
                            ...l
                        });
                        break;
                    case "ThreeVideos":
                        v = (0, s.jsx)(useCases_ThreeVideos, {
                            ...l
                        });
                        break;
                    case "VideoAndText":
                        v = (0, s.jsx)(useCases_VideoAndText, {
                            section: l,
                            logos: a
                        });
                        break;
                    case "VideosAndText":
                        v = (0, s.jsx)(useCases_VideosAndText, {
                            ...l
                        })
                }
                return v ? (0, s.jsxs)("section", {
                    className: "items-center md:flex md:flex-col",
                    ref: h,
                    children: [(0, s.jsx)(Headings, {
                        heading: t.heading,
                        subheading: t.subheading
                    }), (0, s.jsxs)("div", {
                        ref: g,
                        className: (0, d.cn)("scrollbar-hide  mb-4 flex gap-2 overflow-x-scroll sm:justify-center md:mx-0 md:mb-6 md:gap-6", r === n.length - 1 ? "-ml-4" : "-mx-4"),
                        children: [n.map((e, t) => {
                            var a;
                            let {
                                title: l
                            } = e;
                            return (0, s.jsx)(y.Z, {
                                title: l,
                                isActive: r === t,
                                onClick: () => handleUseCaseSelect(t),
                                disableAnimation: !m,
                                className: (0, d.cn)(0 === t && "ml-4 md:ml-0"),
                                scrollIntoView: f,
                                scrollIntoCenterOnMobile: !0,
                                isLastChild: t === n.length - 1,
                                sectionWidth: null === (a = h.current) || void 0 === a ? void 0 : a.clientWidth
                            }, l)
                        }), (0, s.jsx)(y.Z, {
                            title: "",
                            className: "bg-enterprise-lightGray w-20 sm:hidden",
                            isActive: !1,
                            "aria-label": "hidden"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "min-h-[400px] md:min-h-[300px]",
                        children: (0, s.jsx)(N.M, {
                            mode: "wait",
                            children: (0, s.jsx)(p.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .4
                                },
                                children: v
                            }, r)
                        })
                    }), (0, s.jsx)(o.Z, {
                        cta: t.CTA,
                        className: "mt-8 lg:mt-10",
                        type: "secondary",
                        componentName: "UseCases",
                        srOnly: "Learn more at ".concat(t.CTA.link)
                    })]
                }) : null
            };
            var T = a(4699),
                A = a(2753);
            let GiantCTA = e => {
                let {
                    title: t,
                    content: a,
                    section: n,
                    tags: l
                } = e, i = (0, T.h_)({
                    title: t,
                    content: a,
                    tags: l
                }), m = i ? "/new?".concat(A.XE, "=").concat(i) : null == n ? void 0 : n.CTA.link;
                return (0, s.jsxs)("section", {
                    children: [(0, s.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, s.jsx)(r.U, {
                            content: n.heading,
                            proseClassName: c.H2,
                            components: {
                                em: e => {
                                    let {
                                        ...t
                                    } = e;
                                    return (0, s.jsx)("em", {
                                        className: c.TZ,
                                        ...t
                                    })
                                }
                            },
                            className: "text-center md:w-[549px] lg:w-[865px]"
                        })
                    }), (0, s.jsx)("div", {
                        className: "hidden md:grid lg:grid-cols-12",
                        children: (0, s.jsx)(o.Z, {
                            "data-testid": "@giantCTA/cta",
                            componentName: "GiantCTA",
                            cta: {
                                text: n.CTA.text,
                                link: m
                            },
                            width: "w-full",
                            className: "items-center justify-center md:mt-12 md:flex md:h-[161px] lg:col-span-10 lg:col-start-2 lg:mt-20 lg:h-[295px]",
                            enableTrackingParams: !0,
                            children: (0, s.jsx)("p", {
                                className: (0, d.cn)("text-center transition duration-75 group-active:scale-95", c.H4),
                                children: n.CTA.text
                            })
                        })
                    }), (0, s.jsx)(o.Z, {
                        cta: {
                            text: n.CTA.text,
                            link: m
                        },
                        className: "mt-6 md:hidden lg:mt-10",
                        size: "lg",
                        componentName: "GiantCTA"
                    }), (0, s.jsx)("p", {
                        className: (0, d.cn)("text-enterprise-gray text-center mt-4 md:mt-6", c.oW),
                        children: n.caption
                    })]
                })
            };
            var I = a(7583);
            let V4TeamsSection_Button = e => {
                    let {
                        tool: t,
                        setSection: a,
                        isActive: n,
                        showCircleBar: l
                    } = e;
                    return (0, s.jsxs)("button", {
                        onClick: () => a(t),
                        className: (0, d.cn)("w-full relative bg-white rounded-lg lg:rounded-2xl", !n && "text-enterprise-gray opacity-50"),
                        children: [(0, s.jsx)("div", {
                            className: (0, d.cn)("w-full text-left font-medium", c.oW),
                            children: (0, s.jsxs)("p", {
                                className: "flex h-16 items-center justify-between p-2 pl-4 lg:h-16 lg:p-4 lg:pl-6",
                                children: [t.title, l && n && (0, s.jsx)("span", {
                                    className: "absolute right-2 top-2 lg:right-4 lg:top-4",
                                    children: (0, s.jsx)(I.Z, {})
                                })]
                            })
                        }), n && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("p", {
                                className: (0, d.cn)(c.An, "text-left p-4 pt-10 lg:p-6 lg:pt-[120px]  "),
                                children: t.subtitle
                            }), (0, s.jsx)("div", {
                                className: "flex w-full overflow-hidden rounded-xl md:hidden",
                                children: (0, s.jsx)(f.w, {
                                    media: t.video,
                                    mediaThumbnail: t.videoThumbnail,
                                    className: "rounded-xl"
                                })
                            })]
                        })]
                    }, t.title)
                },
                V4TeamsSection = e => {
                    let {
                        section: t
                    } = e, a = useBreakpoint(), {
                        heading: n,
                        subheading: l,
                        CTA: i,
                        cards: r
                    } = t, [c, d] = (0, x.useState)(r[0]), [m, u] = (0, x.useState)(0), [g, p] = (0, x.useState)(!0), setSection = e => {
                        d(e), p(!1)
                    };
                    return ((0, x.useEffect)(() => {
                        "sm" === a ? p(!1) : p(!0)
                    }, [a]), (0, x.useEffect)(() => {
                        let e;
                        return g && (e = setInterval(() => {
                            u(e => (e + 1) % r.length)
                        }, 5e3)), () => clearInterval(e)
                    }, [g]), (0, x.useEffect)(() => {
                        d(r[m])
                    }, [m]), c) ? (0, s.jsx)("section", {
                        className: "font-swissnow margin-auto bg-enterprise-lightGray my-20 flex flex-col items-center md:my-24 lg:my-[177px]",
                        children: (0, s.jsx)("div", {
                            className: "flex flex-col items-center w-full",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-center text-center w-full",
                                children: [(0, s.jsx)(Headings, {
                                    heading: n,
                                    subheading: l
                                }), (0, s.jsxs)("div", {
                                    className: "relative w-full",
                                    children: [(0, s.jsxs)("div", {
                                        className: "md:grid md:grid-cols-12 gap-4 lg:gap-6",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex shrink-0 gap-2 md:mb-0 flex-col md:col-span-5 md:px-0 lg:gap-2",
                                            children: r.map(e => (0, s.jsx)("div", {
                                                className: "flex w-full flex-col rounded-xl lg:rounded-2xl",
                                                children: (0, s.jsx)(V4TeamsSection_Button, {
                                                    tool: e,
                                                    setSection: setSection,
                                                    isActive: c.title === e.title,
                                                    showCircleBar: g
                                                })
                                            }, e.title))
                                        }), (0, s.jsx)("div", {
                                            className: "hidden w-full overflow-hidden bg-white md:flex md:col-span-7 md:rounded-2xl lg:rounded-3xl",
                                            children: (0, s.jsx)(f.w, {
                                                media: c.video,
                                                mediaThumbnail: c.videoThumbnail,
                                                className: "overflow-hidden rounded-xl"
                                            })
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "w-full pt-8 md:flex md:justify-center lg:pt-10",
                                        children: (0, s.jsx)(o.Z, {
                                            cta: i,
                                            componentName: "VeedForTeams",
                                            type: "secondary"
                                        })
                                    })]
                                })]
                            })
                        })
                    }) : null
                },
                V4Mobile = e => {
                    let {
                        section: t
                    } = e;
                    return (0, s.jsxs)("section", {
                        className: "flex flex-col md:grid md:grid-cols-12 md:flex-row md:gap-4 lg:gap-6 lg:text-left",
                        children: [(0, s.jsx)("div", {
                            className: "col-span-5",
                            children: (0, s.jsxs)("div", {
                                className: "w-full flex flex-col items:center md:items-start xl:mt-20",
                                children: [(0, s.jsx)(r.U, {
                                    content: t.heading,
                                    className: "lg:max-w-[420px]",
                                    proseClassName: (0, d.cn)("mb-4 uppercase font-baseneue", c.H2),
                                    components: {
                                        strong: e => {
                                            let {
                                                ...t
                                            } = e;
                                            return (0, s.jsx)("span", {
                                                className: "gradient-highlighted-text",
                                                ...t
                                            })
                                        }
                                    }
                                }), (0, s.jsx)(r.U, {
                                    content: t.subheading,
                                    className: "md:px-0",
                                    proseClassName: (0, d.cn)("!mt-0 md:text-left font-swissnow mt-6 max-w-[288px] md:max-w-[548px] lg:max-w-[623px]", c.An),
                                    components: {
                                        em: e => {
                                            let {
                                                ...t
                                            } = e;
                                            return (0, s.jsx)("em", {
                                                className: (0, d.cn)(c.gw),
                                                ...t
                                            })
                                        }
                                    }
                                }), (0, s.jsxs)("div", {
                                    className: "w-full lg:flex lg:w-full lg:flex-col",
                                    children: [(0, s.jsxs)("div", {
                                        className: "bg-white grid grid-cols-2 lg:grid-cols-[auto_auto_97px] rounded-xl md:rounded-2xl lg:rounded-3xl p-4 mt-8 md:mt-6 lg:mt-16 gap-3 md:gap-4 lg:p-6 lg:gap-6 lg:max-w-[448px]",
                                        children: [(0, s.jsxs)("div", {
                                            children: [(0, s.jsxs)("p", {
                                                className: (0, d.cn)(c.H3),
                                                children: [t.rating, (0, s.jsx)("span", {
                                                    className: (0, d.cn)(c.oW, "text-enterprise-gray"),
                                                    children: "/5"
                                                })]
                                            }), (0, s.jsx)("p", {
                                                className: (0, d.cn)(c.oW, "mt-2 lg:mt-[7px]"),
                                                children: t.numberOfRating
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsxs)("p", {
                                                className: (0, d.cn)(c.H3),
                                                children: [t.numberOfUsers, " "]
                                            }), (0, s.jsx)("p", {
                                                className: (0, d.cn)(c.oW, "mt-2 lg:mt-[7px]"),
                                                children: t.usersLabel
                                            })]
                                        }), t.qrCode && (0, s.jsx)(u.Ee, {
                                            ...t.qrCode,
                                            height: 97,
                                            width: 97,
                                            className: "hidden lg:block lg:my-auto",
                                            alt: "QR of the Veed Mobile app"
                                        })]
                                    }), (0, s.jsx)(o.Z, {
                                        cta: {
                                            text: "Download on the App Store",
                                            link: t.iosLink
                                        },
                                        className: "mt-6 md:mb-6",
                                        componentName: "VeedForMobile",
                                        type: "secondary"
                                    })]
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "col-span-7 md:mt-auto",
                            children: (0, s.jsx)("div", {
                                className: "flex w-full justify-center",
                                children: t.image && (0, s.jsx)(u.Ee, {
                                    ...t.image,
                                    className: "mt-10 md:mt-0",
                                    alt: "Screenshot of the Veed Mobile app"
                                })
                            })
                        })]
                    })
                },
                W = [{
                 }, {
                }, {
                 }],
                P = {
                    
                };
            var H = !0,
                pages = e => {
                    let {
                        navData: t,
                        footerData: a,
                        locales: n,
                        staticContent: l,
                        pageData: r
                    } = e, c = useIsLoggedIn();
                    return (0, x.useEffect)(() => {
                        b.ZP.setUserProperties({
                            "homepage-rebrand-2024": "treatment"
                        })
                    }, []), (0, x.useEffect)(() => {
                        c && window.location.replace("/login")
                    }, [c]), (0, s.jsxs)(i.A, {
                        navData: t,
                        footerData: a,
                        locales: n,
                        contentClassName: "max-w-full",
                        children: [(0, s.jsx)(j.h_, {
                            title: r.meta.metaTitle,
                            description: r.meta.metaDescription,
                            ogImageUrl: "https://cdn-site-assets.veed.io/Homepage_OG_Image_Rebrand_ad03f74caa/Homepage_OG_Image_Rebrand_ad03f74caa.png",
                            themeColor: "#ECEEEE"
                        }), (0, s.jsx)(HeroSection, {
                            section: r.heroSection,
                            videos: W,
                            mobileVideo: P
                        }), (0, s.jsx)(w.h, {
                            heading: l.logoSectionHeading,
                            logos: l.rebrandLogoSection,
                            customBackdropBlur: "from-enterprise-lightGray backdrop-blur-sm",
                            className: "mb-8 md:mb-[72px] md:mt-4 lg:mb-[112px] lg:mt-8"
                        }), (0, s.jsxs)(v.Z, {
                            className: "space-y-20 md:space-y-[120px] lg:space-y-[160px]",
                            children: [(0, s.jsx)(AllInOnePlaceComponent, {
                                section: r.allInOneSection
                            }), (0, s.jsx)(AIFeatures, {
                                section: r.aiFeaturesSection
                            }), l.testimonialsSection && (0, s.jsx)(FadeCarousel, {
                                heading: l.testimonialsSection.heading,
                                items: l.testimonialsSection.testimonials,
                                isHomepage: !0
                            })]
                        })]
                    })
                }
        },
        8108: function(e, t, a) {
            "use strict";
            a.d(t, {
                Ee: function() {
                    return Image
                },
                _m: function() {
                    return loader
                },
                zL: function() {
                    return getCdnImageSrc
                }
            });
            var n = a(2322),
                l = a(6277),
                s = a(6577),
                i = a.n(s);
            let r = "https://localhost/i-tech",
                c = [""],
                join = function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return t.join("/").replace(/\/+/g, "/")
                },
                loader = e => {
                    let {
                        src: t,
                        width: a,
                        quality: n = 75
                    } = e, l = t.startsWith("http"), s = new URL(l ? t : join(r, t));
                    return (!l || c.includes(s.hostname)) && (s.pathname), s.toString()
                },
                getCdnImageSrc = function(e, t) {
                    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return a ? "".concat(e).concat(t) : "".concat(e).concat(t)
                },
                getSizes = (e, t) => (0, l.Z)("(min-width: 1536px) ".concat(t, "px,"), "(min-width: 1280px) ".concat(e.xl, "px,"), "(min-width: 1024px) ".concat(e.lg, "px,"), "(min-width: 768px) ".concat(e.md, "px,"), "(min-width: 640px) ".concat(e.sm, "px,"), "".concat(e.xs, "px")),
                Image = e => {
                    let {
                        src: t,
                        hash: a,
                        ext: l,
                        width: s,
                        height: r,
                        sizes: c,
                        quality: o,
                        ...d
                    } = e, m = t || getCdnImageSrc(a, l, !1), x = c && getSizes(c, s);
                    return (0, n.jsx)(i(), {
                        ...d,
                        src: m,
                        sizes: x,
                        height: r,
                        width: s,
                        loader: loader,
                        quality: o
                    })
                }
        },
        7165: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return Markdown
                }
            });
            var n = a(2322),
                l = a(4074),
                s = a(5731);
            let Markdown = e => {
                let {
                    content: t,
                    className: a,
                    proseClassName: i,
                    ...r
                } = e;
                return t ? (0, n.jsx)(l.D, {
                    ...r,
                    skipHtml: !0,
                    className: (0, s.cn)(i || "prose prose-neutral prose-a:no-underline prose-a:text-blue-600", "marker:text-xl marker:text-blue-600", a),
                    children: t
                }) : null
            }
        },
        8963: function(e, t, a) {
            "use strict";
            a.d(t, {
                h_: function() {
                    return Meta
                }
            });
            var n = a(2322),
                l = a(7729),
                s = a.n(l),
                i = a(5638),
                r = a(5632),
                c = a(195);
            let o = c.z.string().regex(/^#[0-9a-f]{6}$/i);
            c.z.object({
                title: c.z.string(),
                image: c.z.string().url(),
                ctaText: c.z.string(),
                theme: c.z.tuple([o, o])
            });
            let d = "https://www.veed.io",
                Meta = e => {
                    let t, {
                            title: a,
                            description: l,
                            locales: c,
                            dynamicOgImage: o,
                            ogImageUrl: m,
                            themeColor: x = "#ECEEEE"
                        } = e,
                        u = (0, r.useRouter)(),
                        g = u.asPath.split("?")[0];
                    if (o) {
                        let e = encodeURIComponent(JSON.stringify(o));
                        t = "".concat("https://www.veed.io", "/landing-api/og-image?data=").concat(e)
                    }
                    return m = m || t || "https://cdn-site-assets.veed.io/og_image_1200x630_5a87208cda/og_image_1200x630_5a87208cda.jpg", (0, n.jsxs)(s(), {
                        children: [(0, n.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width, maximum-scale=1"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, n.jsx)("title", {
                            children: a
                        }, "title"), (0, n.jsx)("meta", {
                            name: "description",
                            content: l
                        }), (0, n.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, n.jsx)("meta", {
                            property: "og:site_name",
                            content: "I-TECH"
                        }), (0, n.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(d).concat("/" === g ? "" : g)
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: a
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: l
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: m
                        }), (0, n.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: m
                        }), (0, n.jsx)("meta", {
                            property: "og:image:width",
                            content: "1200"
                        }), (0, n.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:site",
                            content: "@veedstudio"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:creator",
                            content: "@veedstudio"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:title",
                            content: a
                        }), (0, n.jsx)("meta", {
                            name: "twitter:description",
                            content: l
                        }), (0, n.jsx)("meta", {
                            name: "twitter:image",
                            content: m
                        }), (0, n.jsx)("meta", {
                            name: "theme-color",
                            content: x
                        }), (0, n.jsx)("meta", {
                            name: "google-site-verification",
                            content: "KSFOy8apNadNZPpqvNQPJ0qDIEugKU67qI8xyNt55JY"
                        }), c ? c.map((e, t) => {
                            let a = "".concat(d).concat("en" === e.locale && "homepage" === e.slug ? "" : e.link),
                                l = "en" === e.locale ? "x-default" : (0, i.jR)(e.locale);
                            return (0, n.jsx)("link", {
                                rel: "alternate",
                                href: a,
                                hrefLang: l
                            }, t)
                        }) : null]
                    })
                }
        },
        9460: function(e, t, a) {
            "use strict";
            var n = a(2322),
                l = a(2784),
                s = a(5731),
                i = a(1807);
            t.Z = e => {
                let {
                    title: t,
                    isActive: a,
                    onClick: r,
                    disableAnimation: c = !1,
                    className: o,
                    scrollIntoView: d,
                    scrollIntoCenterOnMobile: m = !1,
                    isLastChild: x,
                    sectionWidth: u,
                    ...g
                } = e, p = (0, l.useRef)(null), h = "bg-white opacity-40";
                if (a && (h = c ? "bg-white" : "bg-white sweeping-line-button", d && p.current)) {
                    let e = {
                        behavior: "smooth",
                        block: "nearest"
                    };
                    m && u && u < 640 && (e = {
                        ...e,
                        inline: x ? "end" : "center"
                    }), p.current.scrollIntoView(e)
                }
                return (0, n.jsx)("button", {
                    ref: p,
                    className: (0, s.cn)("flex w-40 flex-shrink-0 items-center justify-center break-normal rounded-lg px-4 font-medium lg:w-[220px] lg:rounded-2xl lg:px-6", i.oW, "pt-[17px] pb-[19px] lg:pt-6 lg:pb-[25px]", h, o),
                    onClick: r,
                    ...g,
                    children: t
                }, t)
            }
        },
        7583: function(e, t, a) {
            "use strict";
            var n = a(2322),
                l = a(2784);
            t.Z = () => {
                let [e, t] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    let e = setInterval(() => {
                        t(t => {
                            let a = t + 2.0833333333333335;
                            return a >= 100 ? (clearInterval(e), 100) : a
                        })
                    }, 100);
                    return () => clearInterval(e)
                }, []), (0, n.jsx)("span", {
                    className: "relative block h-10 w-10",
                    children: (0, n.jsxs)("svg", {
                        className: "h-full w-full",
                        viewBox: "0 0 100 100",
                        children: [(0, n.jsx)("circle", {
                            className: "stroke-current",
                            strokeWidth: "20",
                            cx: "50",
                            cy: "50",
                            r: "40",
                            fill: "transparent",
                            color: "#E0E2FF"
                        }), (0, n.jsx)("circle", {
                            className: "circle-bar-loader stroke-current",
                            strokeWidth: "20",
                            cx: "50",
                            cy: "50",
                            r: "40",
                            fill: "transparent",
                            color: "#e61b31",
                            strokeDashoffset: "calc(400 - (250 * ".concat(e, ") / 100)")
                        })]
                    })
                })
            }
        },
        1164: function(e, t, a) {
            "use strict";
            a.d(t, {
                l: function() {
                    return StructuredMarkup
                }
            });
            var n = a(2322),
                l = a(7729),
                s = a.n(l);
            let StructuredMarkup = e => {
                let {
                    schema: t
                } = e;
                return (0, n.jsx)(s(), {
                    children: (0, n.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(t)
                        }
                    })
                })
            }
        },
        5731: function(e, t, a) {
            "use strict";
            a.d(t, {
                cn: function() {
                    return cn
                }
            });
            var n = a(6277),
                l = a(324);
            let cn = function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, l.m6)((0, n.W)(t))
            }
        },
        5638: function(e, t, a) {
            "use strict";
            var n, l, s, i;
            a.d(t, {
                jR: function() {
                    return getRegionIndependentLocale
                },
                nU: function() {
                    return localiseLanguageText
                }
            });
            let r = [{
                code: "en",
                name: "English",
                language: "en"
            }, {
                code: "es-MX",
                name: "Espa\xf1ol (Mexico)",
                language: "es-MX"
            }, {
                code: "es-ES",
                name: "Espa\xf1ol (Espa\xf1a)",
                language: "es"
            }, {
                code: "pt-BR",
                name: "Portugu\xeas (Brasil)",
                language: "pt-BR"
            }, {
                code: "pt-PT",
                name: "Portugu\xeas (Portugal)",
                language: "pt"
            }, {
                code: "tr-TR",
                name: "T\xfcrk\xe7e (T\xfcrkiye)",
                language: "tr"
            }, {
                code: "fr-BE",
                name: "Fran\xe7ais (Belgique)",
                language: "fr-BE"
            }, {
                code: "fr-CA",
                name: "Fran\xe7ais (Canada)",
                language: "fr-CA"
            }, {
                code: "fr-FR",
                name: "Francaise (France)",
                language: "fr"
            }, {
                code: "fr-CH",
                name: "Fran\xe7ais (Suisse)",
                language: "fr-CH"
            }, {
                code: "id-ID",
                name: "Indonesian (Indonesia)",
                language: "id"
            }, {
                code: "it-IT",
                name: "Italiano (Italia)",
                language: "it"
            }, {
                code: "it-CH",
                name: "Italiano (Svizzera)",
                language: "it-CH"
            }, {
                code: "ru-RU",
                name: "Русский (Россия)",
                language: "ru"
            }, {
                code: "de-AT",
                name: "Deutsch (\xd6sterreich)",
                language: "de-AT"
            }, {
                code: "de-DE",
                name: "Deutsch (Deutschland)",
                language: "de"
            }, {
                code: "nl-NL",
                name: "Nederlands (Nederland)",
                language: "nl"
            }, {
                code: "nl-BE",
                name: "Nederlands (Belgi\xeb)",
                language: "nl-BE"
            }, {
                code: "vi-VN",
                name: "Tiếng việt (việt nam)",
                language: "vi"
            }, {
                code: "hi-IN",
                name: "हिंदी (भारत)",
                language: "hi"
            }, {
                code: "pl-PL",
                name: "Polski (Polska)",
                language: "pl"
            }, {
                code: "th-TH",
                name: "ภาษาไทย (ประเทศไทย)",
                language: "th-TH"
            }, {
                code: "ar-EG",
                name: "العربية (مصر)",
                language: "ar-EG",
                rtl: !0
            }, {
                code: "ja-JP",
                name: "日本語 (日本)",
                language: "ja-JP"
            }, {
                code: "ms-MY",
                name: "Melayu (Malaysia)",
                language: "ms-MY"
            }, {
                code: "es-CO",
                name: "Espa\xf1ol (Colombia)",
                language: "es-CO"
            }, {
                code: "zh-TW",
                name: "繁體中文 (台灣)",
                language: "zh-TW"
            }, {
                code: "es-AR",
                name: "Espa\xf1ol (Argentina)",
                language: "es-AR"
            }, {
                code: "ko-KR",
                name: "한국어 (한국)",
                language: "ko-KR"
            }, {
                code: "bn-BD",
                name: "বাংলা (বাংলাদেশ)",
                language: "bn-BD"
            }, {
                code: "sv-SE",
                name: "Svenska (Sverige)",
                language: "sv-SE"
            }, {
                code: "ro-RO",
                name: "Rom\xe2nă (Rom\xe2nia)",
                language: "ro-RO"
            }, {
                code: "el-GR",
                name: "Ελληνικά (Ελλάδα)",
                language: "el-GR"
            }, {
                code: "da-DK",
                name: "Dansk (Danmark)",
                language: "da-DK"
            }, {
                code: "nb-NO",
                name: "Norsk bokm\xe5l (Norge)",
                language: "nb-NO"
            }, {
                code: "zh-CN",
                name: "中国人 (中国)",
                language: "zh-CN"
            }, {
                code: "he-IL",
                name: "עברית (ישראל)",
                language: "he-IL",
                rtl: !0
            }];
            r.filter(e => e.rtl).map(e => e.code), (s = n || (n = {})).LTR = "ltr", s.RTL = "rtl", (i = l || (l = {})).TOP = "top", i.BOTTOM = "bottom";
            let localiseLanguageText = e => {
                    let t = r.filter(t => t.code === e);
                    return t[0] ? t[0].name : "English"
                },
                getRegionIndependentLocale = e => {
                    let t = r.filter(t => t.code === e);
                    return t[0] ? t[0].language : e
                }
        }
    },
    function(e) {
        e.O(0, [309, 739, 976, 951, 879, 532, 753, 854, 778, 13, 774, 888, 179], function() {
            return e(e.s = 7314)
        }), _N_E = e.O()
    }
]);