"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[280], {
    156: function(e, t, s) {
        s.d(t, {
            h: function() {
                return l.h
            }
        });
        var l = s(3569)
    },
    5208: function(e, t, s) {
        s.d(t, {
            Z: function() {
                return enterprise_AIFeatures
            }
        });
        var l = s(2322)
          , n = s(2784)
          , i = s(3188)
          , a = s(6277)
          , r = s(5731)
          , c = s(1807)
          , d = s(5697)
          , m = s(1465)
          , x = s(7165)
          , p = s(3603)
          , o = s(2949)
          , AiFeature = e=>{
            let {section: t, index: s, currentSlideIndex: n} = e
              , {heading: i, content: a, media: d, mediaThumbnail: m} = t;
            return (0,
            l.jsxs)("div", {
                className: (0,
                r.cn)("height-full mr-2 flex min-h-[320px] flex-col justify-between bg-white md:mr-4 md:min-h-[415px] lg:mr-6 lg:min-h-[600px]", p.i, n !== s && "opacity-50 grayscale", 0 === s && "ml-4", n > s && "opacity-0"),
                children: [(0,
                l.jsx)(o.Z, {
                    media: d,
                    thumbnail: m
                }), (0,
                l.jsxs)("div", {
                    className: "break-normal p-4 pt-10 lg:p-6",
                    children: [(0,
                    l.jsx)("p", {
                        className: (0,
                        r.cn)("text-[10px] font-semibold uppercase leading-[18px] lg:text-xs lg:tracking-[0.24px]"),
                        children: i
                    }), (0,
                    l.jsx)(x.U, {
                        content: a,
                        proseClassName: (0,
                        r.cn)("md:w-6/8 pt-4 lg:pt-6", c.H4),
                        components: {
                            em: e=>{
                                let {...t} = e;
                                return (0,
                                l.jsx)("em", {
                                    className: c.Do,
                                    ...t
                                })
                            }
                        }
                    })]
                })]
            })
        }
          , u = s(4368);
        let Icons = e=>{
            let {isBeginning: t, isEnd: s} = e;
            return (0,
            l.jsx)("div", {
                className: (0,
                r.cn)("flex gap-4 pt-10 md:pt-0 lg:gap-6"),
                children: [{
                    direction: "prev",
                    Icon: d.H,
                    disabled: t
                }, {
                    direction: "next",
                    Icon: d.H,
                    disabled: s
                }].map(e=>{
                    let {direction: t, Icon: s, disabled: n} = e;
                    return (0,
                    l.jsx)("button", {
                        className: (0,
                        r.cn)("rounded-full bg-white p-4 ai-features-swiper-button-".concat(t, " lg:flex lg:h-24 lg:w-24 lg:items-center lg:justify-center lg:p-0"), "prev" === t && "rotate-180", n && "opacity-50"),
                        disabled: n,
                        children: (0,
                        l.jsx)(s, {
                            className: "h-8 w-8 lg:h-12 lg:w-12"
                        })
                    }, t)
                }
                )
            })
        }
        ;
        var enterprise_AIFeatures = e=>{
            let {section: t} = e
              , {features: s, heading: d, CTA: x} = t
              , p = (0,
            n.useRef)(null)
              , [o,h] = (0,
            n.useState)(0)
              , [g,f] = (0,
            n.useState)(!0)
              , [j,w] = (0,
            n.useState)(!1);
            (0,
            n.useEffect)(()=>{
                (0,
                i.z2)(),
                p.current && (Object.assign(p.current, {
                    navigation: {
                        nextEl: ".ai-features-swiper-button-next",
                        prevEl: ".ai-features-swiper-button-prev"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.2
                        },
                        1024: {
                            slidesPerView: 1.5
                        }
                    },
                    on: {
                        slideChange(e) {
                            h(e.activeIndex),
                            f(e.isBeginning),
                            w(e.activeIndex === s.length - 1)
                        }
                    },
                    injectStyles: ["\n      .swiper {\n        overflow: visible;\n      }\n      "]
                }),
                p.current.initialize())
            }
            , []);
        }
    },
    9460: function(e, t, s) {
        var l = s(2322)
          , n = s(2784)
          , i = s(5731)
          , a = s(1807);
        t.Z = e=>{
            let {title: t, isActive: s, onClick: r, disableAnimation: c=!1, className: d, scrollIntoView: m, scrollIntoCenterOnMobile: x=!1, isLastChild: p, sectionWidth: o, ...u} = e
              , h = (0,
            n.useRef)(null)
              , g = "bg-white opacity-40";
            if (s && (g = c ? "bg-white" : "bg-white sweeping-line-button",
            m && h.current)) {
                let e = {
                    behavior: "smooth",
                    block: "nearest"
                };
                x && o && o < 640 && (e = {
                    ...e,
                    inline: p ? "end" : "center"
                }),
                h.current.scrollIntoView(e)
            }
            return (0,
            l.jsx)("button", {
                ref: h,
                className: (0,
                i.cn)("flex w-40 flex-shrink-0 items-center justify-center break-normal rounded-lg px-4 font-medium lg:w-[220px] lg:rounded-2xl lg:px-6", a.oW, "pt-[17px] pb-[19px] lg:pt-6 lg:pb-[25px]", g, d),
                onClick: r,
                ...u,
                children: t
            }, t)
        }
    },
    2600: function(e, t, s) {
        s.d(t, {
            Z: function() {
                return enterprise_FeatureSection
            }
        });
        var l = s(2322)
          , n = s(4836)
          , i = s(4368)
          , a = s(2784)
          , r = s(6277)
          , c = s(5731)
          , d = s(1807)
          , m = s(7165)
          , x = s(3603)
          , p = s(2949)
          , o = s(7583);
        let ButtonContent = e=>{
            let {features: t, setFeature: s, selectedFeature: n, hideImage: i, className: a, subtitle: r, showCircleBar: m} = e;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)("p", {
                    className: (0,
                    c.cn)("mt-8 pl-4 text-[10px] font-semibold uppercase leading-[18px] tracking-[0.4px] md:m-0 lg:pl-6 lg:text-xs lg:leading-5 lg:tracking-[0.5px]", a),
                    children: r
                }), (0,
                l.jsx)("div", {
                    className: (0,
                    c.cn)("grid gap-y-2 pt-4 lg:pt-6", a),
                    children: t.map(e=>{
                        let t = n.title === e.title;
                        return (0,
                        l.jsxs)("button", {
                            onClick: ()=>s(e.title),
                            className: (0,
                            c.cn)("w-full rounded-lg bg-white text-left font-medium lg:rounded-2xl", d.oW, !t && "text-enterprise-gray opacity-50"),
                            children: [(0,
                            l.jsxs)("p", {
                                className: "flex h-16 items-center justify-between p-2 pl-4 lg:h-16 lg:p-4 lg:pl-6",
                                children: [e.title, m && t && (0,
                                l.jsx)(o.Z, {})]
                            }), (0,
                            l.jsx)("div", {
                                className: (0,
                                c.cn)("m-2", (!t || i) && "hidden"),
                                children: (0,
                                l.jsx)(p.Z, {
                                    media: e.media,
                                    thumbnail: e.mediaThumbnail
                                })
                            })]
                        }, e.title)
                    }
                    )
                })]
            })
        }
        ;
        var enterprise_FeatureCard = e=>{
            let {featureCard: t, index: s} = e
              , {heading: n, content: i, featureGroupTitle: o, features: u} = t
              , [h,g] = (0,
            a.useState)(0)
              , [f,j] = (0,
            a.useState)(u[h])
              , [w,N] = (0,
            a.useState)(!0)
              , setFeature = e=>{
                j(u.find(t=>t.title === e)),
                N(!1)
            }
            ;
            return ((0,
            a.useEffect)(()=>{
                let e;
                return w && (e = setInterval(()=>{
                    g(e=>(e + 1) % u.length)
                }
                , 5e3)),
                ()=>clearInterval(e)
            }
            , [w]),
            (0,
            a.useEffect)(()=>{
                j(u[h])
            }
            , [h]),
            f) ? (0,
            l.jsxs)("div", {
                className: "mb-16 grid justify-items-center last:mb-0 md:grid-cols-2 md:gap-4 lg:mb-24 lg:gap-6",
                children: [(0,
                l.jsxs)("div", {
                    className: (0,
                    c.cn)("md:flex md:flex-col md:justify-between", s % 2 != 0 && "md:order-1"),
                    children: [(0,
                    l.jsxs)("div", {
                        className: (0,
                        r.Z)("grid h-full bg-white p-4 md:mb-10 md:rounded-xl lg:mb-16 lg:flex lg:h-full lg:flex-col lg:justify-between lg:p-6 lg:pr-16", x.i),
                        children: [(0,
                        l.jsx)(m.U, {
                            className: "md:whitespace-pre-wrap",
                            content: n,
                            proseClassName: (0,
                            c.cn)("pb-10", d.H3),
                            components: {
                                em: e=>{
                                    let {...t} = e;
                                    return (0,
                                    l.jsx)("em", {
                                        className: d.IB,
                                        ...t
                                    })
                                }
                            }
                        }), (0,
                        l.jsx)("p", {
                            className: (0,
                            c.cn)(d.An),
                            children: i
                        })]
                    }), (0,
                    l.jsx)(ButtonContent, {
                        features: u,
                        selectedFeature: f,
                        setFeature: setFeature,
                        hideImage: !0,
                        className: "hidden md:grid md:gap-y-2",
                        subtitle: o,
                        showCircleBar: w
                    })]
                }), u.map(e=>(0,
                l.jsx)("div", {
                    className: (0,
                    c.cn)("hidden w-full", s % 2 == 0 && "md:order-1", e.title === f.title ? "md:block" : "hidden"),
                    children: (0,
                    l.jsx)(p.Z, {
                        media: e.media,
                        thumbnail: e.mediaThumbnail
                    })
                }, e.title)), (0,
                l.jsx)("div", {
                    className: "grid md:hidden",
                    children: (0,
                    l.jsx)(ButtonContent, {
                        features: u,
                        selectedFeature: f,
                        setFeature: setFeature,
                        subtitle: o,
                        showCircleBar: w
                    })
                })]
            }) : null
        }
          , enterprise_FeatureSection = e=>{
            let {sections: t, heading: s} = e;
            return (0,
            l.jsxs)(i.Z, {
                className: "mt-20 items-center md:mt-[120px] lg:mt-40",
                children: [(0,
                l.jsx)(n.X, {
                    heading: s
                }), (0,
                l.jsx)("div", {
                    className: "mt-10 md:mt-12 lg:mt-20",
                    children: t.map((e,t)=>(0,
                    l.jsx)(enterprise_FeatureCard, {
                        featureCard: e,
                        index: t
                    }, e.heading))
                })]
            })
        }
    },
    6610: function(e, t, s) {
        var l = s(2322)
          , n = s(6277)
          , i = s(1807)
          , a = s(5731)
          , r = s(8108)
          , c = s(1465)
          , d = s(3603)
          , m = s(4368);
        t.Z = e=>{
            let {section: t} = e
              , {heading: s, CTA: x, image: p, badgesImage: o} = t;
            return (0,
            l.jsxs)(m.Z, {
                className: "mt-[72px] gap-4 rounded-none md:mt-[120px] md:grid md:grid-cols-2 lg:mt-40 lg:gap-6",
                children: [o && (0,
                l.jsx)(r.Ee, {
                    ...o
                })]
            })
        }
    },
    4368: function(e, t, s) {
        var l = s(2322);
        s(2784);
        var n = s(5731);
        t.Z = e=>{
            let {children: t, className: s} = e;
            return (0,
            l.jsx)("section", {
                className: (0,
                n.cn)("flex flex-col overflow-hidden", s),
                children: t
            })
        }
    },
    2281: function(e, t, s) {
        s.d(t, {
            Z: function() {
                return enterprise_Testimonials
            }
        });
        var l = s(2322)
          , n = s(2784)
          , i = s(3188)
          , a = s(4836)
          , r = s(5731)
          , c = s(1807)
          , d = s(8108)
          , m = s(7165)
          , x = s(1465)
          , p = s(3603)
          , enterprise_Testimonial = e=>{
            let {testimonial: t, index: s, currentSlideIndex: n, className: i} = e
              , {content: a, fullname: o, image: u, position: h, CTA: g} = t;
            return (0,
            l.jsxs)("div", {
                className: (0,
                r.cn)("mr-4 flex flex-col justify-between bg-white p-4 md:mx-0 md:mt-6 md:min-h-[423px] md:opacity-100 lg:mx-4 lg:mt-6 lg:min-h-[600px] lg:p-6", p.i, n !== s && "opacity-50", 0 === s && "ml-4", i),
                children: [(0,
                l.jsxs)("div", {
                    className: "md:max-w-[600px] lg:max-w-[892px]",
                    children: [(0,
                    l.jsx)("span", {
                        className: (0,
                        r.cn)("font-medium", c.H4),
                        children: "“"
                    }), (0,
                    l.jsx)("br", {}), (0,
                    l.jsx)(m.U, {
                        content: a,
                        proseClassName: (0,
                        r.cn)("lg:mt-10 mt-6", c.H4),
                        components: {
                            strong: e=>{
                                let {...t} = e;
                                return (0,
                                l.jsx)("span", {
                                    className: "gradient-highlighted-text",
                                    ...t
                                })
                            }
                        }
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "mt-10 flex-col items-end justify-between md:mt-0 md:flex md:flex-row md:self-end",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex items-center gap-4 md:items-end lg:gap-6",
                        children: [u && (0,
                        l.jsx)(d.Ee, {
                            ...u,
                            className: "h-[92px] w-auto md:h-[125px] md:w-[110px] lg:h-[160px] lg:w-[140px]"
                        }), (0,
                        l.jsxs)("div", {
                            className: "max-w-[218px] lg:max-w-[260px]",
                            children: [(0,
                            l.jsxs)("p", {
                                className: c.oW,
                                children: [o, ". ", h]
                            }), g && (0,
                            l.jsx)(x.Z, {
                                cta: g,
                                className: "hidden md:mt-6 md:flex lg:mt-10",
                                size: "md",
                                componentName: "Testimonial"
                            })]
                        })]
                    }), g && (0,
                    l.jsx)(x.Z, {
                        cta: g,
                        className: "mt-6 md:hidden",
                        size: "md",
                        componentName: "Testimonial"
                    })]
                })]
            })
        }
          , o = s(4368)
          , u = s(9460)
          , enterprise_Testimonials = e=>{
            let {section: t, heading: s} = e
              , r = (0,
            n.useRef)(null)
              , [c,d] = (0,
            n.useState)(0)
              , [m,x] = (0,
            n.useState)(t[0])
              , [p,h] = (0,
            n.useState)(!0);
            (0,
            n.useEffect)(()=>{
                let e;
                return p && (e = setInterval(()=>{
                    d(e=>(e + 1) % t.length)
                }
                , 4e3)),
                ()=>clearInterval(e)
            }
            , [p]),
            (0,
            n.useEffect)(()=>{
                x(t[c])
            }
            , [c]),
            (0,
            n.useEffect)(()=>{
                (0,
                i.z2)(),
                r.current && (Object.assign(r.current, {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 1
                        }
                    },
                    on: {
                        slideChange(e) {
                            d(e.activeIndex)
                        }
                    }
                }),
                r.current.initialize())
            }
            , []),
            (0,
            n.useEffect)(()=>{
                let handleResize = ()=>{
                    let {innerWidth: e} = window;
                    e < 768 && h(!1)
                }
                ;
                return window.addEventListener("resize", handleResize),
                ()=>{
                    window.removeEventListener("resize", handleResize)
                }
            }
            , []);
            let handleTestimonialSelect = e=>{
                x(t.find(t=>t.title === e)),
                h(!1)
            }
            ;
            return m ? (0,
            l.jsxs)(o.Z, {
                className: "mt-20 rounded-none md:mt-[120px] md:flex-col md:items-center lg:mt-[160px]",
                children: [(0,
                l.jsx)(a.X, {
                    heading: s
                }), (0,
                l.jsxs)("div", {
                    className: "mt-10 w-full max-w-full md:mt-12 md:max-w-[736px] lg:mt-20 lg:max-w-[1156px]",
                    children: [(0,
                    l.jsx)("div", {
                        className: "hidden md:flex md:justify-center md:gap-2 lg:gap-4",
                        children: t.map(e=>{
                            let {title: t} = e;
                            return (0,
                            l.jsx)(u.Z, {
                                title: t,
                                isActive: m.title === t,
                                onClick: ()=>handleTestimonialSelect(t),
                                disableAnimation: !p
                            }, t)
                        }
                        )
                    }), (0,
                    l.jsx)(enterprise_Testimonial, {
                        testimonial: m,
                        className: "hidden md:flex lg:max-w-6xl"
                    }), (0,
                    l.jsx)("div", {
                        className: "w-full md:hidden lg:w-3/5",
                        children: (0,
                        l.jsx)("swiper-container", {
                            init: !1,
                            ref: r,
                            children: t.map((e,t)=>(0,
                            l.jsx)("swiper-slide", {
                                className: "swiper-slide",
                                style: {
                                    height: "auto",
                                    alignSelf: "stretch",
                                    display: "flex"
                                },
                                children: (0,
                                l.jsx)(enterprise_Testimonial, {
                                    testimonial: e,
                                    index: t,
                                    currentSlideIndex: c
                                })
                            }, t))
                        })
                    })]
                })]
            }) : null
        }
    },
    35: function(e, t, s) {
        var l = s(2322)
          , n = s(2784)
          , i = s(6277)
          , a = s(5731)
          , r = s(1807)
          , c = s(4836)
          , d = s(7165)
          , m = s(3603)
          , x = s(2949)
          , p = s(9460)
          , o = s(4368);
        t.Z = e=>{
            let {section: {heading: t, useCases: s}} = e
              , [u,h] = (0,
            n.useState)(s[0])
              , [g,f] = (0,
            n.useState)(0)
              , [j,w] = (0,
            n.useState)(!0);
            (0,
            n.useEffect)(()=>{
                let e;
                return j && (e = setInterval(()=>{
                    f(e=>(e + 1) % s.length)
                }
                , 4e3)),
                ()=>clearInterval(e)
            }
            , [j]),
            (0,
            n.useEffect)(()=>{
                h(s[g])
            }
            , [g]);
            let handleUseCaseSelect = e=>{
                w(!1),
                f(e)
            }
            ;
            if (!u)
                return null;
            let Em = e=>{
                let {...t} = e;
                return (0,
                l.jsx)("em", {
                    className: r.IB,
                    ...t
                })
            }
            ;
            return (0,
            l.jsxs)(o.Z, {
                className: "mt-20 md:mt-[120px] md:items-center lg:mt-40",
                children: [(0,
                l.jsx)(c.X, {
                    heading: t
                }), (0,
                l.jsx)("div", {
                    className: "flex gap-2 overflow-x-scroll pt-10 md:gap-2 md:pt-12 lg:gap-4 lg:pt-20",
                    children: s.map((e,t)=>{
                        let {title: s} = e;
                        return (0,
                        l.jsx)(p.Z, {
                            title: s,
                            isActive: g === t,
                            onClick: ()=>handleUseCaseSelect(t),
                            disableAnimation: !j
                        }, s)
                    }
                    )
                }), s.map(e=>(0,
                l.jsxs)("div", {
                    className: (0,
                    i.Z)("gap-2 md:grid-cols-12 md:gap-4 md:pt-6 lg:gap-6", u.title === e.title ? "grid" : "hidden"),
                    children: [(0,
                    l.jsx)("div", {
                        className: "mt-6 md:col-span-7 md:mt-0",
                        children: (0,
                        l.jsx)(x.Z, {
                            media: e.media,
                            thumbnail: e.mediaThumbnail
                        })
                    }), (0,
                    l.jsxs)("div", {
                        className: (0,
                        i.Z)("bg-white p-4 md:col-span-5 md:m-0 md:grid md:content-between lg:rounded-3xl lg:p-6 lg:pr-16", m.i),
                        children: [(0,
                        l.jsx)(d.U, {
                            className: "md:whitespace-pre-wrap",
                            content: e.heading,
                            proseClassName: r.H3,
                            components: {
                                em: Em
                            }
                        }), (0,
                        l.jsx)("p", {
                            className: (0,
                            a.cn)("pt-10", r.An),
                            children: e.content
                        })]
                    })]
                }, e.title))]
            })
        }
    },
    7583: function(e, t, s) {
        var l = s(2322)
          , n = s(2784);
        t.Z = ()=>{
            let[e,t] = (0,
            n.useState)(0);
            return (0,
            n.useEffect)(()=>{
                let e = setInterval(()=>{
                    t(t=>{
                        let s = t + 2.0833333333333335;
                        return s >= 100 ? (clearInterval(e),
                        100) : s
                    }
                    )
                }
                , 100);
                return ()=>clearInterval(e)
            }
            , []),
            (0,
            l.jsx)("span", {
                className: "relative block h-10 w-10",
                children: (0,
                l.jsxs)("svg", {
                    className: "h-full w-full",
                    viewBox: "0 0 100 100",
                    children: [(0,
                    l.jsx)("circle", {
                        className: "stroke-current",
                        strokeWidth: "20",
                        cx: "50",
                        cy: "50",
                        r: "40",
                        fill: "transparent",
                        color: "#E0E2FF"
                    }), (0,
                    l.jsx)("circle", {
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
    4836: function(e, t, s) {
        s.d(t, {
            X: function() {
                return Heading2
            }
        });
        var l = s(2322)
          , n = s(5731)
          , i = s(1807);
        let Heading2 = e=>{
            let {heading: t, className: s} = e;
            return (0,
            l.jsx)("h2", {
                className: (0,
                n.cn)("font-baseneue text-center font-semibold uppercase md:max-w-[548px] md:whitespace-pre-wrap lg:max-w-[805px]", i.H2, s),
                children: t
            })
        }
    }
}]);
