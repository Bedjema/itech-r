"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13], {
        6239: function(e, t, r) {
            r.d(t, {
                G: function() {
                    return Accordian
                }
            });
            var l = r(2322),
                a = r(6319),
                n = r(9442),
                s = r(6277);
            let Accordian = e => {
                let {
                    heading: t,
                    icons: r,
                    className: i,
                    openClassName: o,
                    iconClassName: c,
                    children: d,
                    forceOpen: u
                } = e;
                return (0, l.jsx)(a.p, {
                    as: "div",
                    className: "group",
                    defaultOpen: u,
                    children: e => {
                        let {
                            open: f
                        } = e, h = f || u ? r.opened : r.closed;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)(a.p.Button, {
                                className: (0, s.W)("grid w-full grid-flow-col items-center justify-between gap-3", i, (f || u) && o, (f || u) && "opened"),
                                disabled: u,
                                children: [t, !u && (0, l.jsx)(h, {
                                    className: (0, s.W)("mr-2 h-4 w-4 text-blue-600 transition group-hover:text-inherit", c)
                                })]
                            }), (0, l.jsx)(n.u, {
                                show: u || f,
                                className: "overflow-hidden",
                                enter: "transition-all duration-200 ease-in",
                                enterFrom: "transform max-h-0 scale-95 opacity-0",
                                enterTo: "transform max-h-screen scale-100 opacity-100",
                                leave: "transition-all duration-400 ease-out",
                                leaveFrom: "transform max-h-screen scale-100 opacity-100",
                                leaveTo: "transform max-h-0 scale-95 opacity-0",
                                unmount: !1,
                                children: (0, l.jsx)(a.p.Panel, {
                                    static: !0,
                                    children: d
                                })
                            })]
                        })
                    }
                })
            }
        },
        111: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return Breadcrumb
                }
            });
            var l = r(2322),
                a = r(2288),
                n = r(6277),
                s = r(1164);
            let BreadcrumbSchema = e => {
                let {
                    data: t
                } = e, r = {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: null == t ? void 0 : t.map((e, t) => ({
                        "@type": "ListItem",
                        position: t + 1,
                        name: e.title,
                        item: "#".concat(e.link)
                    }))
                };
                return (0, l.jsx)(s.l, {
                    schema: r
                })
            };
            var i = r(6525);
            let Breadcrumb = e => {
                let {
                    data: t,
                    rebrand: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: (0, n.Z)(r ? "bg:transparent" : "bg-white", "home:bg-transparent mx-auto mb-4 max-w-screen-2xl bg-transparent px-6 pt-4"),
                    children: [(0, l.jsx)(BreadcrumbSchema, {
                        data: t
                    }), (0, l.jsx)("div", {
                        className: "home:border-0 home:pb-0 border-b border-enterprise-grey pb-4 text-xs text-neutral-200 md:text-sm",
                        children: (0, l.jsx)("nav", {
                            className: "flex",
                            "aria-label": "breadcrumb",
                            children: (0, l.jsx)("ol", {
                                role: "list",
                                className: "grid grid-flow-col items-center justify-center gap-2",
                                children: t.map((e, r) => {
                                    let s = r === t.length - 1;
                                    return (0, l.jsxs)("li", {
                                        "aria-current": s ? "page" : void 0,
                                        className: "grid grid-flow-col items-center gap-2",
                                        children: [0 !== r && (0, l.jsx)("span", {
                                            role: "presentation",
                                            className: "md:px-2",
                                            children: (0, l.jsx)(a.AeI, {
                                                className: "h-5 w-5 text-neutral-200 rtl:-scale-x-100"
                                            })
                                        }), (0, l.jsx)(i.z, {
                                            href: s ? void 0 : e.link,
                                            className: (0, n.Z)(s && "cursor-default", "overflow-hidden truncate whitespace-nowrap font-medium capitalize text-neutral-600 hover:text-neutral-800"),
                                            children: e.title
                                        })]
                                    }, e.link)
                                })
                            })
                        })
                    })]
                })
            }
        },
        9554: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return IconButton
                }
            });
            var l = r(2322),
                a = r(6525);

            function IconButton(e) {
                let {
                    label: t,
                    children: r,
                    ...n
                } = e;
                return (0, l.jsxs)(a.z, {
                    ...n,
                    children: [(0, l.jsx)("span", {
                        className: "sr-only",
                        children: t
                    }), r]
                })
            }
        },
        3013: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return Layout
                }
            });
            var l, a, n, s, i, o, c, d, u, f, h, m, p, g, v, _, b, E, w, y, j, k, F, B, N, O, C, S, I, G, A, U, D, M, Z, P, L, R, z, V, H, T, W, Y, Q, X, q, J, K, $, ee, et, er, el, ea, en, es, ei, eo, ec, ed, eu, ef, eh, em, ep, eg, ex, ev, e_, eb, eE, ew, ey, ej, ek, eF, eB, eN, eO, eC, eS, eI, eG = r(2322),
                eA = r(4905),
                eU = r(4804),
                eD = r(4188),
                eM = r(1426),
                eZ = r(5638),
                eP = r(5565),
                eL = r(731),
                eR = r(9147),
                ez = r(9554),
                eV = r(6525),
                eH = r(8185),
                eT = r(2784);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var v_logo = function(e) {
                    return eT.createElement(
                        "img",
                        {src: "https://bedjema.github.io/itech-r/img/ic-footer.png",
                            width : "65px"
                        },
                        null
                      )
                },
                eW = r(2110),
                eY = r(6239);
            let LanguageSelector = e => {
                    let {
                        locale: t,
                        locales: r
                    } = e;
                    return (0, eG.jsxs)(eP.v, {
                        as: "div",
                        className: "relative mb-6 text-lg font-medium text-white md:mb-8 md:text-base",
                        children: [(0, eG.jsxs)(eP.v.Button, {
                            className: "grid grid-flow-col items-center gap-1 text-start font-normal leading-[110%] transition",
                            children: [(0, eZ.nU)(null != t ? t : "en"), (0, eG.jsx)(eU.RiI, {
                                className: "h-3 w-3"
                            })]
                        }), (0, eG.jsx)(eP.v.Items, {
                            as: "ul",
                            unmount: !1,
                            className: "absolute mt-2 grid max-h-96 grid-flow-row gap-0.5 overflow-y-auto rounded-lg bg-white p-4 text-neutral-600 shadow-xl",
                            children: r.filter(e => e.locale.toLocaleLowerCase() !== (null == t ? void 0 : t.toLocaleLowerCase())).map(e => ({
                                ...e,
                                text: (0, eZ.nU)(e.locale)
                            })).sort((e, t) => e.text.localeCompare(t.text)).map(e => (0, eG.jsx)(eP.v.Item, {
                                as: "li",
                                className: "grid w-full",
                                children: t => {
                                    let {
                                        active: r
                                    } = t;
                                    return (0, eG.jsx)(eV.z, {
                                        className: (0, eA.cx)("whitespace-nowrap rounded-md p-2 font-medium transition hover:text-blue-600", r ? "bg-neutral-100" : "bg-white"),
                                        href: e.link,
                                        children: e.text
                                    })
                                }
                            }, e.locale))
                        })]
                    })
                },
                Categories = e => {
                    let {
                        data: t,
                        forceOpen: r
                    } = e;
                    return (0, eG.jsx)("div", {
                        className: "flex w-full flex-col items-start justify-start text-lg md:text-base lg:mb-0 lg:grid lg:max-w-[1000px] lg:grid-cols-4 lg:grid-rows-[auto,1fr] lg:gap-x-4",
                        children: t.map((e, l) => {
                            var a;
                            return (0, eG.jsx)("div", {
                                className: "flex h-full w-full flex-col ".concat(5 === t.length && 2 === l ? "lg:row-span-1 lg:pb-6" : "lg:row-span-2", " ").concat(5 === t.length && 3 === l ? "lg:row-start-2" : "lg:row-start-1"),
                                children: (0, eG.jsxs)("div", {
                                    className: "mb-4 flex flex-col gap-5 lg:mb-0 lg:max-w-[180px] ".concat(l === t.length - 1 ? "lg:ml-auto lg:h-full lg:w-min xl:w-fit" : "lg:mx-auto lg:w-[212px]"),
                                    children: [(0, eG.jsx)(eY.G, {
                                        heading: (0, eG.jsx)(eV.z, {
                                            className: "font-normal text-white lg:pb-[30px] lg:leading-[110%]",
                                            fallback: "p",
                                            children: e.label
                                        }),
                                        icons: {
                                            opened: eM.Vmf,
                                            closed: eM.OId
                                        },
                                        iconClassName: "text-white",
                                        forceOpen: r,
                                        children: (0, eG.jsx)("div", {
                                            className: "mt-4 flex flex-col gap-5 pl-4 lg:mt-0 lg:pl-0",
                                            children: null === (a = e.links) || void 0 === a ? void 0 : a.map((e, t) => {
                                                let {
                                                    label: r,
                                                    link: l
                                                } = e;
                                                return (0, eG.jsxs)(eV.z, {
                                                    href: l,
                                                    className: "group/link from-enterprise-yellowGreen relative bg-gradient-to-r to-[#ff6877] bg-clip-text align-middle text-neutral-400 last:pb-4 hover:text-transparent lg:leading-[110%] lg:last:pb-7",
                                                    children: [(0, eG.jsx)("p", {
                                                        className: "mr-6",
                                                        children: r
                                                    }), (0, eG.jsx)("div", {
                                                        className: "right-0 top-0 hidden h-[17px] items-center lg:absolute lg:flex",
                                                        children: (0, eG.jsx)(eW.Z, {
                                                            className: "opacity-0 group-hover/link:opacity-100"
                                                        })
                                                    })]
                                                }, t)
                                            })
                                        })
                                    }), (0, eG.jsx)("hr", {
                                        className: "border-b-[1.2px] border-solid border-[#454545] lg:hidden"
                                    }), l === t.length - 1 && (0, eG.jsx)(eV.z, {
                                        id: "ot-sdk-btn",
                                        className: "ot-sdk-show-settings hover:gb-white mb-9 mt-auto hidden lg:flex",
                                        style: {
                                            borderRadius: "100px",
                                            border: "none",
                                            color: "#AAAAAA",
                                            width: "fit-content",
                                            padding: 0,
                                            fontSize: "16px"
                                        },
                                        suppressHydrationWarning: !0,
                                        children: "* Cookie Settings"
                                    })]
                                })
                            }, l)
                        })
                    })
                },
                Footer = e => {
                    let {
                        data: t,
                        locales: r
                    } = e, [l, a] = (0, eL.Z)(), n = (0, eR.b)();
                    return (0, eG.jsx)("footer", {
                        ref: l,
                        className: "text-enterprise-gray bg-enterprise-black font-swissnow md:rounded-tl-10 rounded-tl-2xl rounded-tr-2xl p-4 md:rounded-tl-[32px] md:rounded-tr-[32px] md:p-8 md:pt-8 lg:rounded-tl-[48px] lg:rounded-tr-[48px] lg:p-6 lg:pt-[56px]",
                        children: (0, eG.jsxs)("div", {
                            className: "mx-auto max-w-screen-2xl",
                            children: [(0, eG.jsxs)("div", {
                                className: "relative mb-8 flex flex-col justify-between lg:mb-14 lg:flex-row",
                                children: [(0, eG.jsxs)("div", {
                                    className: "flex flex-col-reverse lg:mr-6 lg:flex-col",
                                    children: [(0, eG.jsxs)("div", {
                                        className: "relative md:static",
                                        children: [r && r.length > 1 && (0, eG.jsx)(LanguageSelector, {
                                            locale: n,
                                            locales: r
                                        }), (0, eG.jsx)(eV.z, {
                                            id: "ot-sdk-btn",
                                            className: "ot-sdk-show-settings hover:gb-white absolute right-0 top-0 lg:hidden",
                                            style: {
                                                borderRadius: "100px",
                                                border: "none",
                                                color: "#AAAAAA",
                                                width: "fit-content",
                                                padding: 0,
                                                fontSize: "16px"
                                            },
                                            suppressHydrationWarning: !0,
                                            children: "* Cookie Settings"
                                        }), (0, eG.jsxs)("div", {
                                            className: "flex justify-start gap-[11px]",
                                            children: [(0, eG.jsx)(ez.h, {
                                                label: "Twitter",
                                                href: "https://twitter.com/",
                                                className: "border-enterprise-gray hover:text-enterprise-black rounded-full border-[1px] border-solid from-[#B6FF60] to-[#ff6877] p-2 hover:bg-gradient-to-r",
                                                children: (0, eG.jsx)(eD.cy8, {})
                                            }), (0, eG.jsx)(ez.h, {
                                                label: "YouTube",
                                                href: "https://www.youtube.com/",
                                                className: "border-enterprise-gray hover:text-enterprise-black rounded-full border-[1px] border-solid from-[#B6FF60] to-[#ff6877] p-2 hover:bg-gradient-to-r",
                                                children: (0, eG.jsx)(eU.V2E, {})
                                            }), (0, eG.jsx)(ez.h, {
                                                label: "Twitter",
                                                href: "https://www.instagram.com/",
                                                className: "border-enterprise-gray hover:text-enterprise-black rounded-full border-[1px] border-solid from-[#B6FF60] to-[#ff6877] p-2 hover:bg-gradient-to-r",
                                                children: (0, eG.jsx)(eD.Nrw, {})
                                            })]
                                        })]
                                    }), (0, eG.jsxs)("div", {
                                        className: "lg:mb-9 lg:mt-auto",
                                        children: [(0, eG.jsxs)("div", {
                                            className: "flex flex-col pb-8 md:flex-row md:items-center md:pb-16 lg:pb-[17.98px]",
                                            children: [(0, eG.jsx)("div", {
                                                children: (0, eG.jsx)(v_logo, {})
                                            }), (0, eG.jsx)("p", {
                                                className: "mt-4 max-w-[224px] text-lg !leading-tight md:mx-4 md:mt-0 md:text-base lg:max-w-[179px] lg:text-xs",
                                                children: t.subtitle
                                            })]
                                        }), (0, eG.jsx)("p", {
                                            className: "hidden text-xs lg:inline",
                                            children: "\xa9 Copyright ".concat(new Date().getFullYear())
                                        })]
                                    })]
                                }), (0, eG.jsx)("hr", {
                                    className: "mb-12 mt-8 border-b-[1.2px] border-solid border-[#454545] md:mb-12 md:mt-16 lg:hidden"
                                }), (0, eG.jsx)(Categories, {
                                    data: t.categories,
                                    forceOpen: a.width > 1023
                                })]
                            }), (0, eG.jsx)("p", {
                                className: "mb-4 text-sm md:text-xs lg:hidden",
                                children: "\xa9 Copyright ".concat(new Date().getFullYear())
                            }), (0, eG.jsx)(eH.Z, {
                                className: "w-full text-white"
                            })]
                        })
                    })
                };
            var eQ = r(111),
                eX = r(9442),
                eq = r(6319),
                eJ = r(3981),
                eK = r(4128),
                e$ = r(2749),
                e0 = r(6511);

            function video_editor_extends() {
                return (video_editor_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var video_editor = function(e) {
                return eT.createElement("svg", video_editor_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), a || (a = eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E7DFFC"
                })), n || (n = eT.createElement("rect", {
                    x: 18.799,
                    y: 27.75,
                    width: 35.174,
                    height: 42.294,
                    rx: 6.313,
                    fill: "#541BCA"
                })), s || (s = eT.createElement("rect", {
                    x: 75.199,
                    y: 27.75,
                    width: 42.297,
                    height: 18.8,
                    rx: 6.314,
                    transform: "rotate(90 75.2 27.75)",
                    fill: "#541BCA"
                })), i || (i = eT.createElement("g", {
                    filter: ""
                }, eT.createElement("rect", {
                    x: 14.1,
                    y: 15.996,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#video-editor_svg__b)"
                }), eT.createElement("path", {
                    d: "M35.485 31.905a.626.626 0 0 1 0 1.084l-6.933 4.004a.626.626 0 0 1-.94-.543v-8.006c0-.482.522-.784.94-.543l6.933 4.004Z",
                    fill: "#fff"
                }))), o || (o = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "video-editor_svg__b",
                    x1: 99.274,
                    y1: 59.657,
                    x2: -20.83,
                    y2: 2.469,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .43,
                    stopColor: "#fff",
                    stopOpacity: .55
                }), eT.createElement("stop", {
                    offset: .7,
                    stopColor: "#ff6877",
                    stopOpacity: .72
                })), eT.createElement("filter", {
                    id: "video-editor_svg__a",
                    x: 9.648,
                    y: 11.545,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_406_12049"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_406_12049",
                    result: "shape"
                })))))
            };

            function subtitles_extends() {
                return (subtitles_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var subtitles = function(e) {
                return eT.createElement("svg", subtitles_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), c || (c = eT.createElement("rect", {
                    y: -.002,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E7DFFC"
                })), d || (d = eT.createElement("g", {
                    filter: "url(#subtitles_svg__a)"
                }, eT.createElement("rect", {
                    x: 14.1,
                    y: 39.293,
                    width: 65.8,
                    height: 17.108,
                    rx: 8.554,
                    fill: "#541BCA"
                }))), u || (u = eT.createElement("g", {
                    filter: "url(#subtitles_svg__b)"
                }, eT.createElement("rect", {
                    x: 20.162,
                    y: 58.757,
                    width: 33.887,
                    height: 16.445,
                    rx: 8.222,
                    fill: "#541BCA"
                }))), f || (f = eT.createElement("g", {
                    filter: "url(#subtitles_svg__c)"
                }, eT.createElement("rect", {
                    x: 56.404,
                    y: 58.757,
                    width: 16.445,
                    height: 16.445,
                    rx: 8.222,
                    fill: "#541BCA"
                }))), h || (h = eT.createElement("g", {
                    filter: "url(#subtitles_svg__d)"
                }, eT.createElement("rect", {
                    x: 30.55,
                    y: 14.1,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#subtitles_svg__e)"
                }), eT.createElement("path", {
                    d: "M51.936 30.008a.626.626 0 0 1 0 1.085l-6.934 4.003a.626.626 0 0 1-.94-.542v-8.006c0-.482.522-.784.94-.543l6.934 4.003Z",
                    fill: "#fff"
                }))), m || (m = eT.createElement("defs", null, eT.createElement("filter", {
                    id: "subtitles_svg__a",
                    x: 8.041,
                    y: 34.106,
                    width: 77.916,
                    height: 29.225,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.179
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3488"
                }), eT.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), eT.createElement("feOffset", {
                    dy: .872
                }), eT.createElement("feGaussianBlur", {
                    stdDeviation: 3.029
                }), eT.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), eT.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                }), eT.createElement("feBlend", {
                    in2: "effect1_backgroundBlur_408_3488",
                    result: "effect2_dropShadow_408_3488"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_408_3488",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "subtitles_svg__b",
                    x: 14.104,
                    y: 53.57,
                    width: 46.003,
                    height: 28.561,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.179
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3488"
                }), eT.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), eT.createElement("feOffset", {
                    dy: .872
                }), eT.createElement("feGaussianBlur", {
                    stdDeviation: 3.029
                }), eT.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), eT.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                }), eT.createElement("feBlend", {
                    in2: "effect1_backgroundBlur_408_3488",
                    result: "effect2_dropShadow_408_3488"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_408_3488",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "subtitles_svg__c",
                    x: 50.346,
                    y: 53.57,
                    width: 28.561,
                    height: 28.561,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.179
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3488"
                }), eT.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), eT.createElement("feOffset", {
                    dy: .872
                }), eT.createElement("feGaussianBlur", {
                    stdDeviation: 3.029
                }), eT.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), eT.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                }), eT.createElement("feBlend", {
                    in2: "effect1_backgroundBlur_408_3488",
                    result: "effect2_dropShadow_408_3488"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_408_3488",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "subtitles_svg__d",
                    x: 26.099,
                    y: 9.648,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3488"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3488",
                    result: "shape"
                })), eT.createElement("linearGradient", {
                    id: "subtitles_svg__e",
                    x1: 102.5,
                    y1: 55.498,
                    x2: -17.308,
                    y2: 27.859,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .384,
                    stopColor: "#fff",
                    stopOpacity: .5
                }), eT.createElement("stop", {
                    offset: .586,
                    stopColor: "#ff6877",
                    stopOpacity: .72
                })))))
            };

            function translations_extends() {
                return (translations_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var translations = function(e) {
                return eT.createElement("svg", translations_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), p || (p = eT.createElement("rect", {
                    y: -.002,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#FFD6EF"
                })), g || (g = eT.createElement("rect", {
                    x: 18.798,
                    y: 18.802,
                    width: 56.4,
                    height: 56.4,
                    rx: 28.2,
                    fill: "#58043A"
                })), v || (v = eT.createElement("path", {
                    d: "M52.535 36.561h-9.083v-3.193h-2.197v3.193h-9.082v2.197h14.759c-.803 3.52-2.432 6.462-4.273 8.833a33.303 33.303 0 0 1-3.573-6.092l-2.003.904a35.52 35.52 0 0 0 4.12 6.908 30.139 30.139 0 0 1-5.196 4.474 23.808 23.808 0 0 1-1.609 1 8.353 8.353 0 0 1-.084.045l-.018.01-.003.001.507.975.507.975.004-.002.01-.005.03-.017a13.354 13.354 0 0 0 .502-.284 26.1 26.1 0 0 0 1.386-.878 32.344 32.344 0 0 0 5.363-4.57 35.078 35.078 0 0 0 3.633 3.633l1.434-1.665a32.94 32.94 0 0 1-3.608-3.643c2.214-2.743 4.23-6.272 5.119-10.602h3.355v-2.197Zm8.82 24.537-6.111-16.175h-2.648l-6.021 16.175h2.329l1.252-3.503h7.457l1.277 3.503h2.464Zm-7.499-13.88 3.045 8.435h-6.045l3-8.434Z",
                    fill: "#FFD6EF"
                })), _ || (_ = eT.createElement("path", {
                    d: "M52.535 36.561h-9.083v-3.193h-2.197v3.193h-9.082v2.197h14.759c-.803 3.52-2.432 6.462-4.273 8.833a33.303 33.303 0 0 1-3.573-6.092l-2.003.904a35.52 35.52 0 0 0 4.12 6.908 30.139 30.139 0 0 1-5.196 4.474 23.808 23.808 0 0 1-1.609 1 8.353 8.353 0 0 1-.084.045l-.018.01-.003.001.507.975.507.975.004-.002.01-.005.03-.017a13.354 13.354 0 0 0 .502-.284 26.1 26.1 0 0 0 1.386-.878 32.344 32.344 0 0 0 5.363-4.57 35.078 35.078 0 0 0 3.633 3.633l1.434-1.665a32.94 32.94 0 0 1-3.608-3.643c2.214-2.743 4.23-6.272 5.119-10.602h3.355v-2.197Zm8.82 24.537-6.111-16.175h-2.648l-6.021 16.175h2.329l1.252-3.503h7.457l1.277 3.503h2.464Zm-7.499-13.88 3.045 8.435h-6.045l3-8.434Z",
                    stroke: "#FFD6EF"
                })), b || (b = eT.createElement("g", {
                    filter: "url(#translations_svg__a)"
                }, eT.createElement("rect", {
                    x: 79.9,
                    y: 46.998,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    transform: "rotate(-180 79.9 46.998)",
                    fill: "url(#translations_svg__b)"
                }), eT.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "m63.343 31.332-5.889 2.944 5.889 2.945v-1.937h6.668v-2.02h-6.668v-1.932Zm6.668-4.513-5.89 2.945V27.83h-6.667v-2.02h6.668v-1.936l5.889 2.944Z",
                    fill: "#fff"
                }))), E || (E = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "translations_svg__b",
                    x1: 160.8,
                    y1: 46.998,
                    x2: 104.778,
                    y2: 125.068,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .313,
                    stopColor: "#fff",
                    stopOpacity: 0
                }), eT.createElement("stop", {
                    offset: .626,
                    stopColor: "#FF9DE9"
                })), eT.createElement("filter", {
                    id: "translations_svg__a",
                    x: 42.549,
                    y: 9.647,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3531"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3531",
                    result: "shape"
                })))))
            };

            function training_e_learning_extends() {
                return (training_e_learning_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var training_e_learning = function(e) {
                return eT.createElement("svg", training_e_learning_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), w || (w = eT.createElement("rect", {
                    y: -.003,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E0E2FF"
                })), y || (y = eT.createElement("rect", {
                    x: 18.798,
                    y: 70.498,
                    width: 47,
                    height: 56.4,
                    rx: 5.64,
                    transform: "rotate(-90 18.798 70.498)",
                    fill: "#e61b31"
                })), j || (j = eT.createElement("g", {
                    filter: "url(#training-e-learning_svg__a)"
                }, eT.createElement("rect", {
                    x: 79.897,
                    y: 79.896,
                    width: 28.2,
                    height: 28.2,
                    rx: 3.76,
                    transform: "rotate(-180 79.897 79.896)",
                    fill: "url(#training-e-learning_svg__b)"
                }))), k || (k = eT.createElement("path", {
                    d: "M58.161 71.798a7.637 7.637 0 1 1 15.274 0v5.197H58.16v-5.197Z",
                    fill: "#fff"
                })), F || (F = eT.createElement("g", {
                    filter: "url(#training-e-learning_svg__c)"
                }, eT.createElement("rect", {
                    x: 60.348,
                    y: 54.995,
                    width: 11,
                    height: 11,
                    rx: 5.5,
                    fill: "#fff"
                }))), B || (B = eT.createElement("circle", {
                    cx: 28.198,
                    cy: 32.895,
                    r: 4.7,
                    fill: "#E0E2FF"
                })), N || (N = eT.createElement("defs", null, eT.createElement("filter", {
                    id: "training-e-learning_svg__a",
                    x: 42.297,
                    y: 42.296,
                    width: 47,
                    height: 47,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 4.7
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3497"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3497",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "training-e-learning_svg__c",
                    x: 55.896,
                    y: 50.544,
                    width: 19.903,
                    height: 19.902,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3497"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3497",
                    result: "shape"
                })), eT.createElement("linearGradient", {
                    id: "training-e-learning_svg__b",
                    x1: 106.469,
                    y1: 158.239,
                    x2: 36.001,
                    y2: 42.652,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .366,
                    stopColor: "#fff",
                    stopOpacity: .4
                }), eT.createElement("stop", {
                    offset: .494,
                    stopColor: "#bb1b2b",
                    stopOpacity: .58
                })))))
            };

            function meetings_communication_extends() {
                return (meetings_communication_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var meetings_communication = function(e) {
                return eT.createElement("svg", meetings_communication_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), O || (O = eT.createElement("rect", {
                    y: -.003,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E0FFF0"
                })), C || (C = eT.createElement("rect", {
                    x: 18.824,
                    y: 18.799,
                    width: 56.373,
                    height: 56.574,
                    rx: 5.64,
                    fill: "#00669A"
                })), S || (S = eT.createElement("path", {
                    d: "M28.527 39.587a5.71 5.71 0 0 1 11.42 0v3.885h-11.42v-3.885Z",
                    fill: "#E0FFF0"
                })), I || (I = eT.createElement("g", {
                    filter: "url(#meetings-communication_svg__a)"
                }, eT.createElement("rect", {
                    x: 30.161,
                    y: 27.022,
                    width: 8.224,
                    height: 8.224,
                    rx: 4.112,
                    fill: "#E0FFF0"
                }))), G || (G = eT.createElement("path", {
                    d: "M28.527 66.613a5.71 5.71 0 0 1 11.42 0V70.5h-11.42v-3.886Z",
                    fill: "#E0FFF0"
                })), A || (A = eT.createElement("g", {
                    filter: "url(#meetings-communication_svg__b)"
                }, eT.createElement("rect", {
                    x: 30.161,
                    y: 54.049,
                    width: 8.224,
                    height: 8.224,
                    rx: 4.112,
                    fill: "#E0FFF0"
                }))), U || (U = eT.createElement("path", {
                    d: "M54.378 66.613a5.71 5.71 0 0 1 11.42 0V70.5h-11.42v-3.886Z",
                    fill: "#E0FFF0"
                })), D || (D = eT.createElement("g", {
                    filter: "url(#meetings-communication_svg__c)"
                }, eT.createElement("rect", {
                    x: 56.012,
                    y: 54.049,
                    width: 8.224,
                    height: 8.224,
                    rx: 4.112,
                    fill: "#E0FFF0"
                }))), M || (M = eT.createElement("g", {
                    filter: "url(#meetings-communication_svg__d)"
                }, eT.createElement("rect", {
                    x: 49.348,
                    y: 11.749,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#meetings-communication_svg__e)"
                }), eT.createElement("path", {
                    d: "M70.734 27.657a.626.626 0 0 1 0 1.085L63.8 32.745a.626.626 0 0 1-.94-.543v-8.006c0-.482.522-.783.94-.542l6.934 4.003Z",
                    fill: "#fff"
                }))), Z || (Z = eT.createElement("defs", null, eT.createElement("filter", {
                    id: "meetings-communication_svg__a",
                    x: 25.71,
                    y: 22.571,
                    width: 17.127,
                    height: 17.127,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3507"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3507",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "meetings-communication_svg__b",
                    x: 25.71,
                    y: 49.597,
                    width: 17.127,
                    height: 17.127,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3507"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3507",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "meetings-communication_svg__c",
                    x: 51.56,
                    y: 49.597,
                    width: 17.127,
                    height: 17.127,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3507"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3507",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "meetings-communication_svg__d",
                    x: 44.896,
                    y: 7.298,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3507"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3507",
                    result: "shape"
                })), eT.createElement("linearGradient", {
                    id: "meetings-communication_svg__e",
                    x1: 134.522,
                    y1: 55.41,
                    x2: 14.418,
                    y2: -1.778,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .316,
                    stopColor: "#00669A",
                    stopOpacity: .18
                }), eT.createElement("stop", {
                    offset: .752,
                    stopColor: "#ff6877"
                })))))
            };

            function sales_videos_extends() {
                return (sales_videos_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var sales_videos = function(e) {
                return eT.createElement("svg", sales_videos_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), P || (P = eT.createElement("rect", {
                    y: -.003,
                    width: 94.002,
                    height: 94.002,
                    rx: 24,
                    fill: "#EDFFD9"
                })), L || (L = eT.createElement("rect", {
                    x: 18.798,
                    y: 70.498,
                    width: 47,
                    height: 56.4,
                    rx: 5.64,
                    transform: "rotate(-90 18.798 70.498)",
                    fill: "#006000"
                })), R || (R = eT.createElement("g", {
                    filter: "url(#sales-videos_svg__a)"
                }, eT.createElement("rect", {
                    x: 30.548,
                    y: 46.998,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#sales-videos_svg__b)"
                }), eT.createElement("path", {
                    d: "M51.934 62.906a.626.626 0 0 1 0 1.085L45 67.994a.626.626 0 0 1-.94-.543v-8.006c0-.482.522-.783.94-.542l6.934 4.003Z",
                    fill: "#fff"
                }))), z || (z = eT.createElement("path", {
                    d: "M66.347 42.433c-.701-.091-1.326-.263-1.87-.518a4.941 4.941 0 0 1-1.399-.957 4.418 4.418 0 0 1-.918-1.32 5.673 5.673 0 0 1-.454-1.605h2.165c.168.895.547 1.578 1.137 2.045.59.468 1.432.702 2.528.702.45 0 .87-.04 1.257-.122a3.313 3.313 0 0 0 1.01-.377c.287-.17.51-.39.673-.657.16-.267.242-.591.242-.972 0-.38-.074-.712-.219-.976a1.907 1.907 0 0 0-.605-.663 3.556 3.556 0 0 0-.914-.441 13.366 13.366 0 0 0-1.146-.319l-1.924-.474a8.634 8.634 0 0 1-1.6-.547 4.422 4.422 0 0 1-1.224-.821 3.424 3.424 0 0 1-.779-1.15c-.183-.441-.276-.953-.276-1.533 0-.516.104-.99.315-1.421.209-.431.504-.808.885-1.127.381-.319.835-.578 1.363-.779a6.642 6.642 0 0 1 1.75-.387v-2.19h1.855v2.223c1.193.155 2.14.567 2.842 1.237.701.671 1.127 1.57 1.276 2.697H70.16a3.484 3.484 0 0 0-.421-1.079 2.308 2.308 0 0 0-.673-.705 2.665 2.665 0 0 0-.918-.383 5.305 5.305 0 0 0-1.15-.116c-.42 0-.772.039-1.118.116a2.849 2.849 0 0 0-.898.358 1.77 1.77 0 0 0-.6.614c-.145.248-.218.54-.218.876 0 .6.191 1.07.576 1.417.383.344.943.61 1.678.798l1.943.483c.682.169 1.3.354 1.855.561.555.207 1.027.46 1.417.764.39.303.69.672.899 1.111.209.439.315.976.315 1.614 0 .638-.114 1.158-.344 1.64-.228.479-.547.89-.957 1.233-.41.342-.899.612-1.469.812-.57.199-1.197.324-1.88.377v2.184h-1.856v-2.223h.005ZM54.623 42.433c-.702-.091-1.326-.263-1.871-.518a4.941 4.941 0 0 1-1.398-.957 4.418 4.418 0 0 1-.918-1.32 5.673 5.673 0 0 1-.455-1.605h2.165c.169.895.547 1.578 1.137 2.045.59.468 1.432.702 2.529.702.45 0 .87-.04 1.256-.122a3.311 3.311 0 0 0 1.01-.377c.287-.17.511-.39.674-.657.16-.267.241-.591.241-.972 0-.38-.073-.712-.218-.976a1.905 1.905 0 0 0-.605-.663 3.556 3.556 0 0 0-.915-.441 13.366 13.366 0 0 0-1.146-.319l-1.923-.474a8.638 8.638 0 0 1-1.6-.547 4.423 4.423 0 0 1-1.224-.821 3.424 3.424 0 0 1-.78-1.15c-.183-.441-.276-.953-.276-1.533 0-.516.105-.99.315-1.421.209-.431.505-.808.886-1.127.38-.319.835-.578 1.362-.779a6.642 6.642 0 0 1 1.75-.387v-2.19h1.855v2.223c1.193.155 2.14.567 2.842 1.237.702.671 1.127 1.57 1.276 2.697h-2.155a3.484 3.484 0 0 0-.422-1.079 2.308 2.308 0 0 0-.672-.705 2.665 2.665 0 0 0-.919-.383 5.305 5.305 0 0 0-1.15-.116c-.42 0-.771.039-1.117.116a2.85 2.85 0 0 0-.9.358 1.77 1.77 0 0 0-.598.614c-.145.248-.219.54-.219.876 0 .6.192 1.07.576 1.417.383.344.944.61 1.678.798l1.943.483c.682.169 1.3.354 1.856.561.554.207 1.026.46 1.416.764.391.303.69.672.9 1.111.208.439.315.976.315 1.614 0 .638-.115 1.158-.345 1.64-.228.479-.547.89-.957 1.233-.41.342-.898.612-1.469.812-.57.199-1.196.324-1.88.377v2.184h-1.856v-2.223h.006Z",
                    fill: "#EDFFD9"
                })), V || (V = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "sales-videos_svg__b",
                    x1: 24.307,
                    y1: 106.026,
                    x2: 31.303,
                    y2: 40.39,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .246,
                    stopColor: "#006000",
                    stopOpacity: .56
                }), eT.createElement("stop", {
                    offset: .789,
                    stopColor: "#B6FF60",
                    stopOpacity: .71
                })), eT.createElement("filter", {
                    id: "sales-videos_svg__a",
                    x: 26.096,
                    y: 42.547,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3544"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3544",
                    result: "shape"
                })))))
            };

            function veed_blog_extends() {
                return (veed_blog_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var veed_blog = function(e) {
                return eT.createElement("svg", veed_blog_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), H || (H = eT.createElement("g", {
                    clipPath: "url(#veed-blog_svg__a)"
                }, eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E7DFFC"
                }), eT.createElement("path", {
                    d: "M27.26 55.655h39.48M27.26 61.296H61.1",
                    stroke: "#fff",
                    strokeWidth: 2.256,
                    strokeLinecap: "round"
                }), eT.createElement("path", {
                    d: "M25.568 67.624a6.768 6.768 0 0 1-6.768-6.768V32.614a6.768 6.768 0 0 1 6.768-6.768h42.864a6.768 6.768 0 0 1 6.768 6.768v28.242a6.768 6.768 0 0 1-6.768 6.768H39.95l-7.05 5.222-7.05-5.222h-.282Z",
                    fill: "#541BCA"
                }), eT.createElement("path", {
                    d: "M52.573 45.827c0 .051-.007.098-.007.15l-4.163.98a2.75 2.75 0 0 1-.496.04c-.222 0-.4-.07-.539-.208-.11-.11-.164-.263-.164-.456 0-.054.03-.247.084-.579l.969-4.109c.044 0 .087-.007.13-.007a4.193 4.193 0 0 1 4.194 4.193l-.008-.004Z",
                    fill: "#fff"
                }), eT.createElement("g", {
                    filter: "url(#veed-blog_svg__b)"
                }, eT.createElement("path", {
                    d: "m47.284 45.755 3.063-12.994 18.374-18.457c.167-.138.317-.207.455-.207h.084l4.014.87c.193.026.332.073.415.142.08.07.179.175.288.314l4.801 4.797c.222.222.372.455.455.707l.827 3.97c.03.193-.025.386-.164.58L61.44 43.892l-13.037 3.06c-.138.03-.302.044-.495.044-.222 0-.4-.07-.54-.208-.108-.11-.163-.262-.163-.455 0-.055.026-.248.08-.58Z",
                    fill: "url(#veed-blog_svg__c)",
                    shapeRendering: "crispEdges"
                })), eT.createElement("path", {
                    d: "M27.26 50.756h39.48M27.26 56.397H61.1",
                    stroke: "#E7DFFC",
                    strokeWidth: 2.256,
                    strokeLinecap: "round"
                }))), T || (T = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "veed-blog_svg__c",
                    x1: 80.068,
                    y1: 67.2,
                    x2: 113.184,
                    y2: -66.11,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .033,
                    stopColor: "#fff",
                    stopOpacity: .52
                }), eT.createElement("stop", {
                    offset: .354,
                    stopColor: "#ff6877",
                    stopOpacity: .84
                })), eT.createElement("clipPath", {
                    id: "veed-blog_svg__a"
                }, eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#fff"
                })), eT.createElement("filter", {
                    id: "veed-blog_svg__b",
                    x: 28.991,
                    y: -4.116,
                    width: 69.29,
                    height: 69.326,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 1.821
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_6031"
                }), eT.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), eT.createElement("feOffset", null), eT.createElement("feGaussianBlur", {
                    stdDeviation: 9.107
                }), eT.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), eT.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                }), eT.createElement("feBlend", {
                    in2: "effect1_backgroundBlur_408_6031",
                    result: "effect2_dropShadow_408_6031"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_408_6031",
                    result: "shape"
                })))))
            };

            function articles_extends() {
                return (articles_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var articles = function(e) {
                return eT.createElement("svg", articles_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), W || (W = eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#EDFFD9"
                })), Y || (Y = eT.createElement("rect", {
                    x: 28.393,
                    y: 18.797,
                    width: 37.207,
                    height: 37.207,
                    rx: 18.604,
                    fill: "#006000"
                })), Q || (Q = eT.createElement("path", {
                    d: "M31.018 46.998h31.96L54.803 61.53a3.76 3.76 0 0 1-3.277 1.917h-9.051a3.76 3.76 0 0 1-3.277-1.916l-8.18-14.534ZM40.418 65.798h13.16l-1.88 4.7h-9.4l-1.88-4.7Z",
                    fill: "#006000"
                })), X || (X = eT.createElement("g", {
                    filter: "url(#articles_svg__a)"
                }, eT.createElement("rect", {
                    x: 79.898,
                    y: 46.998,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    transform: "rotate(-180 79.898 46.998)",
                    fill: "url(#articles_svg__b)"
                }), eT.createElement("path", {
                    d: "M56.024 32.811c.81 0 1.218.988.645 1.567a.92.92 0 0 0 0 1.297l1.832 1.847a.903.903 0 0 0 1.287 0l.01-.01c.573-.578 1.554-.17 1.554.649v.019c0 .507.407.917.91.917h2.592c.504 0 .91-.41.91-.917v-.031c0-.817.979-1.227 1.553-.65l.026.025a.905.905 0 0 0 1.285 0l1.834-1.849a.92.92 0 0 0 0-1.297l-.012-.012c-.573-.577-.168-1.565.64-1.567h.016a.914.914 0 0 0 .907-.917v-2.614a.913.913 0 0 0-.91-.918c-.81 0-1.218-.987-.644-1.567a.92.92 0 0 0 0-1.296l-1.835-1.849a.903.903 0 0 0-1.284 0l-.01.01c-.575.576-1.553.166-1.553-.649v-.017a.913.913 0 0 0-.91-.918h-2.594a.915.915 0 0 0-.91.916v.036c-.002.817-.982 1.223-1.555.646l-.022-.022a.903.903 0 0 0-1.287 0l-1.832 1.847a.92.92 0 0 0 0 1.297l.014.013c.572.578.167 1.567-.645 1.567h-.013c-.504 0-.91.41-.91.918v2.612c0 .507.406.917.91.917h.001Zm7.54-6.065c2.102 0 3.806 1.717 3.806 3.836 0 2.118-1.704 3.835-3.806 3.835-2.102 0-3.805-1.717-3.805-3.835 0-2.119 1.703-3.836 3.805-3.836Z",
                    fill: "#fff"
                }))), q || (q = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "articles_svg__b",
                    x1: 60.721,
                    y1: 90.217,
                    x2: 84.179,
                    y2: 30.378,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .156,
                    stopColor: "#006000"
                }), eT.createElement("stop", {
                    offset: .76,
                    stopColor: "#B6FF60",
                    stopOpacity: .48
                })), eT.createElement("filter", {
                    id: "articles_svg__a",
                    x: 42.547,
                    y: 9.646,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_6041"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_6041",
                    result: "shape"
                })))))
            };

            function video_guides_extends() {
                return (video_guides_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var video_guides = function(e) {
                return eT.createElement("svg", video_guides_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), J || (J = eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E0E2FF"
                })), K || (K = eT.createElement("rect", {
                    x: 18.8,
                    y: 75.199,
                    width: 47,
                    height: 56.4,
                    rx: 5.64,
                    transform: "rotate(-90 18.8 75.2)",
                    fill: "#e61b31"
                })), $ || ($ = eT.createElement("path", {
                    d: "M23.5 24.439a5.64 5.64 0 0 1 5.64-5.64h35.72a5.64 5.64 0 0 1 5.64 5.64v1.41h-47v-1.41Z",
                    fill: "#e61b31"
                })), ee || (ee = eT.createElement("path", {
                    fill: "#E0E2FF",
                    d: "M45.575 60.16V42.758h2.367V60.16z"
                })), et || (et = eT.createElement("path", {
                    fill: "#E0E2FF",
                    d: "M38.058 50.275H55.46v2.367H38.058z"
                })), er || (er = eT.createElement("g", {
                    filter: "url(#video-guides_svg__a)"
                }, eT.createElement("rect", {
                    x: 47,
                    y: 14.1,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#video-guides_svg__b)"
                }), eT.createElement("path", {
                    d: "M68.386 30.008a.626.626 0 0 1 0 1.085l-6.934 4.003a.626.626 0 0 1-.94-.542v-8.007c0-.482.523-.783.94-.542l6.934 4.003Z",
                    fill: "#fff"
                }))), el || (el = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "video-guides_svg__b",
                    x1: 78,
                    y1: 105.5,
                    x2: -19.146,
                    y2: -16.421,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .331,
                    stopColor: "#fff",
                    stopOpacity: .75
                }), eT.createElement("stop", {
                    offset: .538,
                    stopColor: "#bb1b2b",
                    stopOpacity: .73
                })), eT.createElement("filter", {
                    id: "video-guides_svg__a",
                    x: 42.549,
                    y: 9.648,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_6058"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_6058",
                    result: "shape"
                })))))
            };

            function veed_for_business_extends() {
                return (veed_for_business_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var veed_for_business = function(e) {
                return eT.createElement("svg", veed_for_business_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), ea || (ea = eT.createElement("rect", {
                    y: .004,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E7DFFC"
                })), en || (en = eT.createElement("rect", {
                    x: 18.8,
                    y: 68.15,
                    width: 42.3,
                    height: 56.4,
                    rx: 5.64,
                    transform: "rotate(-90 18.8 68.15)",
                    fill: "#541BCA"
                })), es || (es = eT.createElement("g", {
                    filter: "url(#veed-for-business_svg__a)"
                }, eT.createElement("rect", {
                    x: 49.35,
                    y: 47,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    transform: "rotate(-90 49.35 47)",
                    fill: "url(#veed-for-business_svg__b)"
                }), eT.createElement("path", {
                    d: "M65.8 14.1a16.45 16.45 0 0 0-16.45 16.45H65.8V14.1Z",
                    fill: "#E7DFFC"
                }), eT.createElement("path", {
                    d: "M65.8 14.1a16.45 16.45 0 0 0-14.246 8.225L65.8 30.55V14.1Z",
                    fill: "#fff"
                }))), ei || (ei = eT.createElement("path", {
                    d: "M25.85 54.05h42.3M25.85 58.75H61.1",
                    stroke: "#E0E2FF",
                    strokeWidth: 1.88,
                    strokeLinecap: "round"
                })), eo || (eo = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "veed-for-business_svg__b",
                    x1: 54.285,
                    y1: 77.55,
                    x2: 55.377,
                    y2: -4.894,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .083,
                    stopColor: "#ff6877",
                    stopOpacity: .4
                }), eT.createElement("stop", {
                    offset: .359,
                    stopColor: "#fff",
                    stopOpacity: .38
                }), eT.createElement("stop", {
                    offset: .641,
                    stopColor: "#ff6877",
                    stopOpacity: .33
                }), eT.createElement("stop", {
                    offset: .85,
                    stopColor: "#e61b31",
                    stopOpacity: .69
                })), eT.createElement("filter", {
                    id: "veed-for-business_svg__a",
                    x: 44.899,
                    y: 9.648,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_1780"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_1780",
                    result: "shape"
                })))))
            };

            function screen_recorder_extends() {
                return (screen_recorder_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var screen_recorder = function(e) {
                return eT.createElement("svg", screen_recorder_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), ec || (ec = eT.createElement("g", {
                    clipPath: "url(#screen-recorder_svg__a)"
                }, eT.createElement("rect", {
                    y: -.002,
                    width: 94.002,
                    height: 94.002,
                    rx: 24,
                    fill: "#FFC0A0"
                }), eT.createElement("rect", {
                    x: -.001,
                    y: -.001,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#FFD6EF"
                }), eT.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M26.319 25.85a7.52 7.52 0 0 0-7.52 7.52v27.26a7.52 7.52 0 0 0 7.52 7.52h29.27a7.52 7.52 0 0 0 7.52-7.52V33.37a7.52 7.52 0 0 0-7.52-7.52H26.32Zm48.878 9.992v22.317c0 2.427-2.732 3.849-4.72 2.457L63.11 55.46V38.54l7.366-5.156c1.989-1.392 4.72.03 4.72 2.458Z",
                    fill: "#58043A"
                }), eT.createElement("g", {
                    filter: "url(#screen-recorder_svg__b)"
                }, eT.createElement("rect", {
                    x: 14.098,
                    y: 14.099,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#screen-recorder_svg__c)"
                }), eT.createElement("circle", {
                    cx: 30.548,
                    cy: 30.549,
                    r: 4.7,
                    fill: "#fff"
                })))), ed || (ed = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "screen-recorder_svg__c",
                    x1: 99.272,
                    y1: 57.76,
                    x2: -20.832,
                    y2: .572,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .348,
                    stopColor: "#fff",
                    stopOpacity: .26
                }), eT.createElement("stop", {
                    offset: .627,
                    stopColor: "#FF9DE9"
                })), eT.createElement("clipPath", {
                    id: "screen-recorder_svg__a"
                }, eT.createElement("rect", {
                    y: -.002,
                    width: 94.002,
                    height: 94.002,
                    rx: 24,
                    fill: "#fff"
                })), eT.createElement("filter", {
                    id: "screen-recorder_svg__b",
                    x: 9.646,
                    y: 9.648,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_406_11810"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_406_11810",
                    result: "shape"
                })))))
            };

            function subtitles_transcription_extends() {
                return (subtitles_transcription_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var subtitles_transcription = function(e) {
                return eT.createElement("svg", subtitles_transcription_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eu || (eu = eT.createElement("g", {
                    clipPath: "url(#subtitles-transcription_svg__a)"
                }, eT.createElement("rect", {
                    y: -.002,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#FFD6EF"
                }), eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#EDFFD9"
                }), eT.createElement("rect", {
                    x: 18.797,
                    y: 75.2,
                    width: 56.4,
                    height: 56.4,
                    rx: 5.64,
                    transform: "rotate(-90 18.797 75.2)",
                    fill: "#006000"
                }), eT.createElement("g", {
                    filter: "url(#subtitles-transcription_svg__b)"
                }, eT.createElement("rect", {
                    x: 14.098,
                    y: 54.049,
                    width: 47.047,
                    height: 16.445,
                    rx: 8.222,
                    fill: "url(#subtitles-transcription_svg__c)"
                })), eT.createElement("g", {
                    filter: "url(#subtitles-transcription_svg__d)"
                }, eT.createElement("rect", {
                    x: 63.452,
                    y: 54.242,
                    width: 16.445,
                    height: 16.445,
                    rx: 8.222,
                    fill: "url(#subtitles-transcription_svg__e)"
                })), eT.createElement("path", {
                    d: "M53.102 26.747h-9.237V23.5H41.63v3.247h-9.236v2.235h15.01c-.817 3.58-2.473 6.571-4.345 8.981a33.87 33.87 0 0 1-3.635-6.194l-2.036.92a36.121 36.121 0 0 0 4.19 7.024 30.658 30.658 0 0 1-5.284 4.55c-.541.366-.984.638-1.29.818a14.713 14.713 0 0 1-.431.244l-.02.01-.002.002.515.991c.515.992.515.992.516.991l.004-.002.01-.005.03-.016.111-.06c.094-.053.23-.129.4-.23.342-.2.826-.498 1.41-.893A32.898 32.898 0 0 0 43 41.465a35.673 35.673 0 0 0 3.695 3.696l1.458-1.694a33.49 33.49 0 0 1-3.669-3.704c2.251-2.79 4.302-6.378 5.206-10.781h3.412v-2.235ZM62.071 51.7l-6.215-16.45h-2.693L47.041 51.7h2.368l1.274-3.563h7.583l1.299 3.563h2.506Zm-7.626-14.115 3.097 8.578h-6.148l3.051-8.578Z",
                    fill: "#EDFFD9"
                }), eT.createElement("path", {
                    d: "M53.102 26.747h-9.237V23.5H41.63v3.247h-9.236v2.235h15.01c-.817 3.58-2.473 6.571-4.345 8.981a33.87 33.87 0 0 1-3.635-6.194l-2.036.92a36.121 36.121 0 0 0 4.19 7.024 30.658 30.658 0 0 1-5.284 4.55c-.541.366-.984.638-1.29.818a14.713 14.713 0 0 1-.431.244l-.02.01-.002.002.515.991c.515.992.515.992.516.991l.004-.002.01-.005.03-.016.111-.06c.094-.053.23-.129.4-.23.342-.2.826-.498 1.41-.893A32.898 32.898 0 0 0 43 41.465a35.673 35.673 0 0 0 3.695 3.696l1.458-1.694a33.49 33.49 0 0 1-3.669-3.704c2.251-2.79 4.302-6.378 5.206-10.781h3.412v-2.235ZM62.071 51.7l-6.215-16.45h-2.693L47.041 51.7h2.368l1.274-3.563h7.583l1.299 3.563h2.506Zm-7.626-14.115 3.097 8.578h-6.148l3.051-8.578Z",
                    stroke: "#EDFFD9"
                }))), ef || (ef = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "subtitles-transcription_svg__c",
                    x1: 98.499,
                    y1: 88,
                    x2: 5.435,
                    y2: 5.834,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .392,
                    stopColor: "#B6FF60",
                    stopOpacity: .71
                }), eT.createElement("stop", {
                    offset: .777,
                    stopColor: "#006000",
                    stopOpacity: .73
                })), eT.createElement("linearGradient", {
                    id: "subtitles-transcription_svg__e",
                    x1: 51.499,
                    y1: 85.5,
                    x2: 69.036,
                    y2: 29.469,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .392,
                    stopColor: "#B6FF60",
                    stopOpacity: .71
                }), eT.createElement("stop", {
                    offset: .777,
                    stopColor: "#006000",
                    stopOpacity: .73
                })), eT.createElement("filter", {
                    id: "subtitles-transcription_svg__b",
                    x: 8.039,
                    y: 48.863,
                    width: 59.163,
                    height: 28.561,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.179
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_406_11811"
                }), eT.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), eT.createElement("feOffset", {
                    dy: .872
                }), eT.createElement("feGaussianBlur", {
                    stdDeviation: 3.029
                }), eT.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), eT.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                }), eT.createElement("feBlend", {
                    in2: "effect1_backgroundBlur_406_11811",
                    result: "effect2_dropShadow_406_11811"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_406_11811",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "subtitles-transcription_svg__d",
                    x: 57.394,
                    y: 49.055,
                    width: 28.561,
                    height: 28.561,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.179
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_406_11811"
                }), eT.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), eT.createElement("feOffset", {
                    dy: .872
                }), eT.createElement("feGaussianBlur", {
                    stdDeviation: 3.029
                }), eT.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), eT.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                }), eT.createElement("feBlend", {
                    in2: "effect1_backgroundBlur_406_11811",
                    result: "effect2_dropShadow_406_11811"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_406_11811",
                    result: "shape"
                })), eT.createElement("clipPath", {
                    id: "subtitles-transcription_svg__a"
                }, eT.createElement("rect", {
                    y: -.002,
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#fff"
                })))))
            };

            function webinars_extends() {
                return (webinars_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var webinars = function(e) {
                return eT.createElement("svg", webinars_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eh || (eh = eT.createElement("rect", {
                    width: 94,
                    height: 94,
                    rx: 24,
                    fill: "#E0FFF0"
                })), em || (em = eT.createElement("rect", {
                    x: 75.2,
                    y: 23.498,
                    width: 47,
                    height: 56.4,
                    rx: 5.64,
                    transform: "rotate(90 75.2 23.498)",
                    fill: "#00669A"
                })), ep || (ep = eT.createElement("g", {
                    filter: "url(#webinars_svg__a)"
                }, eT.createElement("rect", {
                    x: 47,
                    y: 14.098,
                    width: 32.9,
                    height: 32.9,
                    rx: 16.45,
                    fill: "url(#webinars_svg__b)"
                }), eT.createElement("path", {
                    d: "M68.386 30.006a.626.626 0 0 1 0 1.084l-6.934 4.003a.626.626 0 0 1-.94-.542v-8.006c0-.483.523-.784.94-.543l6.934 4.004Z",
                    fill: "#fff"
                }))), eg || (eg = eT.createElement("path", {
                    d: "M38.608 60.088a8.39 8.39 0 0 1 16.781 0v5.71H38.608v-5.71Z",
                    fill: "#E0FFF0"
                })), ex || (ex = eT.createElement("g", {
                    filter: "url(#webinars_svg__c)"
                }, eT.createElement("rect", {
                    x: 41.01,
                    y: 41.626,
                    width: 12.086,
                    height: 12.086,
                    rx: 6.043,
                    fill: "#E0FFF0"
                }))), ev || (ev = eT.createElement("defs", null, eT.createElement("filter", {
                    id: "webinars_svg__a",
                    x: 42.549,
                    y: 9.646,
                    width: 41.803,
                    height: 41.803,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_6049"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_6049",
                    result: "shape"
                })), eT.createElement("filter", {
                    id: "webinars_svg__c",
                    x: 36.559,
                    y: 37.175,
                    width: 20.988,
                    height: 20.988,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 2.226
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_6049"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_6049",
                    result: "shape"
                })), eT.createElement("linearGradient", {
                    id: "webinars_svg__b",
                    x1: 132.174,
                    y1: 57.758,
                    x2: 12.07,
                    y2: .571,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .316,
                    stopColor: "#00669A",
                    stopOpacity: .18
                }), eT.createElement("stop", {
                    offset: .752,
                    stopColor: "#ff6877"
                })))))
            };

            function marketing_social_media_extends() {
                return (marketing_social_media_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var marketing_social_media = function(e) {
                return eT.createElement("svg", marketing_social_media_extends({
                    viewBox: "0 0 94 94",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), e_ || (e_ = eT.createElement("rect", {
                    y: -.002,
                    width: 94.002,
                    height: 94.002,
                    rx: 24,
                    fill: "#FFC0A0"
                })), eb || (eb = eT.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "m38.989 37.594 32.123-12.502c1.967-.766 4.088.685 4.088 2.796v38.228c0 2.11-2.12 3.56-4.088 2.796L38.963 56.406H37.6V70.5h-9.4v-14.1h.693a5.64 5.64 0 0 1-5.393-5.635v-7.532a5.64 5.64 0 0 1 5.64-5.64h9.849Z",
                    fill: "#A00"
                })), eE || (eE = eT.createElement("g", {
                    filter: "url(#marketing-social-media_svg__a)"
                }, eT.createElement("path", {
                    d: "M14.1 19.74a5.64 5.64 0 0 1 5.64-5.64h26.32a5.64 5.64 0 0 1 5.64 5.64V37.6a4.7 4.7 0 0 1-4.7 4.7l-4.7 4.718-4.7-4.717H19.74a5.64 5.64 0 0 1-5.64-5.64V19.74Z",
                    fill: "url(#marketing-social-media_svg__b)"
                }))), ew || (ew = eT.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.497 25.864a2.822 2.822 0 0 0-.308-.985 2.546 2.546 0 0 0-2.285-1.357c-1.14 0-2.113.648-2.913 1.945a.102.102 0 0 1-.175 0 5.214 5.214 0 0 0-1.221-1.365 2.717 2.717 0 0 0-1.697-.58 2.538 2.538 0 0 0-2.284 1.358c-.146.274-.244.57-.295.888-.355 1.945.585 3.297 2.104 4.706 1.583 1.469 3.38 2.473 3.477 2.473.097 0 1.895-1.004 3.478-2.473 1.494-1.386 2.428-2.715 2.12-4.61h-.001Z",
                    fill: "#fff"
                })), ey || (ey = eT.createElement("defs", null, eT.createElement("linearGradient", {
                    id: "marketing-social-media_svg__b",
                    x1: 71.999,
                    y1: 111.998,
                    x2: -30.781,
                    y2: -17.655,
                    gradientUnits: "userSpaceOnUse"
                }, eT.createElement("stop", {
                    offset: .218,
                    stopColor: "#FF2F44",
                    stopOpacity: .3
                }), eT.createElement("stop", {
                    offset: .652,
                    stopColor: "#fff",
                    stopOpacity: .83
                })), eT.createElement("filter", {
                    id: "marketing-social-media_svg__a",
                    x: 4.7,
                    y: 4.701,
                    width: 56.4,
                    height: 51.717,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, eT.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), eT.createElement("feGaussianBlur", {
                    in: "BackgroundImageFix",
                    stdDeviation: 4.7
                }), eT.createElement("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_408_3524"
                }), eT.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_408_3524",
                    result: "shape"
                })))))
            };

            function security_privacy_extends() {
                return (security_privacy_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var security_privacy = function(e) {
                    return eT.createElement("svg", security_privacy_extends({
                        viewBox: "0 0 94 94",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), ej || (ej = eT.createElement("rect", {
                        width: 94,
                        height: 94,
                        rx: 24,
                        fill: "#E0FFF0"
                    })), ek || (ek = eT.createElement("path", {
                        d: "m47 18.8-23.52 4.698V35.9A44.594 44.594 0 0 0 47 75.2a44.566 44.566 0 0 0 23.406-39.222v-12.48L47 18.8Z",
                        fill: "#00669A"
                    })), eF || (eF = eT.createElement("g", {
                        filter: "url(#security-privacy_svg__a)"
                    }, eT.createElement("rect", {
                        x: 79.9,
                        y: 79.898,
                        width: 32.9,
                        height: 32.9,
                        rx: 16.45,
                        transform: "rotate(-180 79.9 79.898)",
                        fill: "url(#security-privacy_svg__b)"
                    }), eT.createElement("path", {
                        fill: "#fff",
                        d: "M62.04 70.038V52.638h2.368v17.401zM62.04 74.271v-2.35h2.35v2.35z"
                    }))), eB || (eB = eT.createElement("defs", null, eT.createElement("linearGradient", {
                        id: "security-privacy_svg__b",
                        x1: 165.075,
                        y1: 123.559,
                        x2: 44.971,
                        y2: 66.371,
                        gradientUnits: "userSpaceOnUse"
                    }, eT.createElement("stop", {
                        offset: .316,
                        stopColor: "#00669A",
                        stopOpacity: .18
                    }), eT.createElement("stop", {
                        offset: .752,
                        stopColor: "#ff6877"
                    })), eT.createElement("filter", {
                        id: "security-privacy_svg__a",
                        x: 42.549,
                        y: 42.547,
                        width: 41.803,
                        height: 41.803,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB"
                    }, eT.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix"
                    }), eT.createElement("feGaussianBlur", {
                        in: "BackgroundImageFix",
                        stdDeviation: 2.226
                    }), eT.createElement("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur_408_1788"
                    }), eT.createElement("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur_408_1788",
                        result: "shape"
                    })))))
                },
                e1 = r(5731),
                e2 = r(638);

            function bars_extends() {
                return (bars_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var bars = function(e) {
                return eT.createElement("svg", bars_extends({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eN || (eN = eT.createElement("path", {
                    d: "M2 16h20M2 12h20M2 8h20",
                    stroke: "#323232",
                    strokeWidth: 1.2,
                    strokeLinecap: "round"
                })))
            };

            function plus_extends() {
                return (plus_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var plus = function(e) {
                return eT.createElement("svg", plus_extends({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eO || (eO = eT.createElement("path", {
                    d: "M2 12h20M12 2v20",
                    stroke: "#323232",
                    strokeWidth: 1.2,
                    strokeLinecap: "round"
                })))
            };

            function x_extends() {
                return (x_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var x = function(e) {
                return eT.createElement("svg", x_extends({
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eC || (eC = eT.createElement("path", {
                    d: "M.857 14.791 15 .649M.858.648l14.143 14.143",
                    stroke: "#323232",
                    strokeWidth: 1.2,
                    strokeLinecap: "round"
                })))
            };

            function chevron_left_extends() {
                return (chevron_left_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var chevron_left = function(e) {
                return eT.createElement("svg", chevron_left_extends({
                    viewBox: "0 0 9 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eS || (eS = eT.createElement("path", {
                    d: "M8.07.648 1 7.701M8.07 14.79 1 7.736",
                    stroke: "#323232",
                    strokeWidth: 1.2,
                    strokeLinecap: "round"
                })))
            };

            function chevron_down_extends() {
                return (chevron_down_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
                    }
                    return e
                }).apply(this, arguments)
            }
            var chevron_down = function(e) {
                    return eT.createElement("svg", chevron_down_extends({
                        viewBox: "0 0 10 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), eI || (eI = eT.createElement("path", {
                        d: "m1 5.72 3.99 4M9 5.72l-3.99 4",
                        stroke: "currentColor",
                        strokeWidth: 1.2,
                        strokeLinecap: "round"
                    })))
                },
                e4 = r(9257),
                e3 = r(1779),
                e6 = r(8555);
            let NavItem = e => (0, eG.jsx)("li", {
                    className: (0, e1.cn)("flex h-full items-center justify-center text-base lg:text-sm xl:text-base", e.className),
                    children: e.children
                }),
                NavButton = e => (0, eG.jsx)(eV.z, {
                    href: e.href,
                    onClick: e.onClick,
                    className: (0, e1.cn)("hover:text-enterprise-blue flex items-center justify-center whitespace-nowrap p-2 xl:p-3", e.className),
                    enableTrackingParams: e.enableTrackingParams,
                    children: e.children
                }),
                NavDropdown = e => {
                    let [t, r] = (0, eT.useState)(!1), [l, a] = (0, eT.useState)(!1);
                    return (0, eG.jsxs)(eP.v, {
                        as: "div",
                        onMouseOver: () => r(!0),
                        onMouseOut: () => r(!1),
                        onFocus: () => r(!0),
                        onBlur: e => {
                            e.currentTarget.contains(e.relatedTarget) || r(!1)
                        },
                        children: [(0, eG.jsxs)(NavButton, {
                            ...e.href ? {
                                href: e.href
                            } : {
                                onClick: () => r(!0)
                            },
                            className: (0, e1.cn)("gap-1.5", t && "text-enterprise-blue"),
                            children: [e.children, (0, eG.jsx)(e2.RiI, {
                                className: (0, e1.cn)("h-2.5 w-2.5 transition-transform duration-300", t && "-rotate-180")
                            })]
                        }), (0, eG.jsx)(eX.u, {
                            show: t,
                            enter: "transition duration-100 ease-out",
                            enterFrom: "transform scale-95 opacity-0",
                            enterTo: "transform scale-100 opacity-100",
                            leave: "transition duration-75 ease-out",
                            leaveFrom: "transform scale-100 opacity-100",
                            leaveTo: "transform scale-95 opacity-0",
                            as: eT.Fragment,
                            afterEnter: () => a(!0),
                            beforeLeave: () => a(!1),
                            unmount: !1,
                            children: (0, eG.jsx)("div", {
                                className: "absolute left-0 right-0 top-full -mt-6 flex w-full pt-9",
                                children: (0, eG.jsxs)(eP.v.Items, {
                                    as: "ul",
                                    className: "relative mx-auto p-3",
                                    static: !0,
                                    children: [(0, eG.jsx)("div", {
                                        className: (0, e1.cn)("to-enterprise-gray/10 from-enterprise-gray/5 absolute inset-0 -z-[1] rounded-[48px] border border-white/60 bg-[#E7E9E9]/20 bg-gradient-to-br backdrop-blur-md transition-all", l && "bg-[#E7E9E9]/0 backdrop-blur-md")
                                    }), (0, eG.jsx)("ul", {
                                        className: "flex flex-col gap-3 p-9",
                                        children: e.items
                                    })]
                                })
                            })
                        })]
                    })
                },
                NavDropdownItem = e => (0, eG.jsxs)("div", {
                    className: "flex flex-row gap-6 rounded-3xl bg-white p-6",
                    children: [(0, eG.jsx)("div", {
                        className: "text w-40 text-2xl",
                        children: e.children
                    }), e.items]
                }),
                FeaturedButton = e => (0, eG.jsxs)(eV.z, {
                    href: e.href,
                    className: "relative flex h-full overflow-hidden rounded-3xl bg-white p-3 duration-300 hover:text-white",
                    children: [(0, eG.jsx)("div", {
                        className: "to-enterprise-blue absolute inset-0 bg-gradient-to-br from-[#ff6877] opacity-0 transition-opacity group-hover:opacity-100"
                    }), (0, eG.jsxs)("div", {
                        className: "z-[1] flex flex-row items-start justify-center gap-4",
                        children: [(0, eG.jsx)(e.icon, {
                            className: (0, e1.cn)("h-16 w-16 flex-none md:h-20 md:w-20 xl:h-24 xl:w-24", e.iconClassName)
                        }), (0, eG.jsxs)("div", {
                            className: "mt-1 flex flex-col items-start gap-2 md:mt-2",
                            children: [(0, eG.jsx)("p", {
                                className: "leading-none",
                                children: e.title
                            }), (0, eG.jsx)("p", {
                                className: "text-enterprise-gray text-xs transition duration-300 group-hover:text-white",
                                children: e.description
                            })]
                        })]
                    })]
                }),
                NavAccordion = e => (0, eG.jsx)(eq.p, {
                    as: "li",
                    className: "w-full",
                    children: t => {
                        let {
                            open: r
                        } = t;
                        return (0, eG.jsxs)(eG.Fragment, {
                            children: [(0, eG.jsxs)(eq.p.Button, {
                                as: NavButton,
                                className: "border-enterprise-black w-full justify-between border-b border-current py-3 text-lg",
                                href: e.href,
                                children: [e.children, (0, eG.jsx)(chevron_down, {
                                    className: (0, e1.cn)("h-3 w-3 transition", r && "rotate-180")
                                })]
                            }), (0, eG.jsx)(eX.u, {
                                show: r,
                                className: "overflow-hidden",
                                enter: "transition-all duration-200 ease-in",
                                enterFrom: "transform max-h-0 scale-y-90 opacity-0",
                                enterTo: "transform max-h-screen scale-y-100 opacity-100",
                                leave: "transition-all duration-400 ease-out",
                                leaveFrom: "transform max-h-screen scale-y-100 opacity-100",
                                leaveTo: "transform max-h-0 scale-y-90 opacity-0",
                                unmount: !1,
                                children: (0, eG.jsx)(eq.p.Panel, {
                                    as: "ul",
                                    static: !0,
                                    className: "flex flex-col items-start justify-start px-3 py-4 text-base",
                                    children: e.links.map(e => (0, eG.jsx)(NavItem, {
                                        children: (0, eG.jsx)(NavButton, {
                                            href: e.link,
                                            className: "text-enterprise-gray px-0 py-1 text-left",
                                            children: e.label
                                        })
                                    }, e.label))
                                })
                            })]
                        })
                    }
                }),
                transformData = e => ({
                    ...e,
                    products: {
                        ...e.products,
                        links: e.products.links.map((e, t) => ({
                            ...e,
                            icon: [video_editor, screen_recorder, subtitles_transcription][t]
                        }))
                    },
                    useCases: {
                        ...e.useCases,
                        links: e.useCases.links.map((e, t) => ({
                            ...e,
                            icon: [subtitles, marketing_social_media, translations, training_e_learning, meetings_communication, sales_videos][t]
                        }))
                    },
                    resources: {
                        ...e.resources,
                        links: e.resources.links.map((e, t) => ({
                            ...e,
                            icon: [veed_blog, webinars, articles, video_guides][t]
                        }))
                    }
                }),
                MobileNavigation = e => {
                    var t;
                    let {
                        data: r
                    } = e, [l, a] = (0, eT.useState)(null), onClose = () => {
                        a(null), e.onClose()
                    };
                    (0, e3.l)(() => onClose());
                    let n = {
                            products: {
                                top: r.products,
                                bottom: r.tools
                            },
                            useCases: e.hasCreateLinks ? {
                                top: e.isEnLocale ? r.useCases : null,
                                bottom: r.create
                            } : null,
                            resources: e.isEnLocale ? {
                                top: r.products,
                                bottom: null
                            } : null,
                            business: e.isEnLocale ? {
                                top: r.products,
                                bottom: null
                            } : null
                        },
                        s = l && n[l];
                    return (0, eG.jsx)(eJ.V, {
                        open: e.isOpen,
                        className: "font-swissnow bg-enterprise-lightGray fixed inset-0 z-50 h-screen w-screen",
                        onClose: () => null,
                        children: (0, eG.jsxs)(eJ.V.Panel, {
                            as: "nav",
                            className: "flex h-full w-full flex-col overflow-y-auto px-12 py-[2.75rem] sm:px-14",
                            children: [(0, eG.jsxs)("div", {
                                className: "relative flex items-center justify-between",
                                children: [s ? (0, eG.jsxs)(eV.z, {
                                    className: "flex items-center justify-center text-xl",
                                    onClick: () => a(null),
                                    children: [(0, eG.jsx)(chevron_left, {
                                        className: "h-8 w-8 p-2"
                                    }), null === (t = s.top) || void 0 === t ? void 0 : t.label]
                                }) : (0, eG.jsxs)(eV.z, {
                                    className: "-m-2 p-2",
                                    href: "./index.html",
                                    locale: e.locale,
                                    children: [(0, eG.jsx)("div", {
                                        className: "sr-only",
                                        children: "I-TECH"
                                    }), (0, eG.jsx)(eH.Z, {
                                        className: "text-enterprise-black h-6 flex-none"
                                    })]
                                }), (0, eG.jsx)(eV.z, {
                                    className: "flex items-center justify-center",
                                    onClick: onClose,
                                    children: (0, eG.jsx)(x, {
                                        className: "h-8 w-8 p-2"
                                    })
                                })]
                            }), (0, eG.jsxs)("div", {
                                className: "mt-6 flex h-full flex-col items-stretch justify-between",
                                children: [s ? (0, eG.jsxs)("div", {
                                    className: "flex flex-col gap-8",
                                    children: [s.top && (0, eG.jsx)("ul", {
                                        className: "grid grid-cols-1 gap-2 rounded-3xl bg-white p-3",
                                        children: s.top.links.map(e => (0, eG.jsx)("li", {
                                            children: (0, eG.jsx)(FeaturedButton, {
                                                href: e.link,
                                                title: e.label,
                                                description: e.description,
                                                icon: e.icon
                                            })
                                        }, e.label))
                                    }), s.bottom && (0, eG.jsxs)("ul", {
                                        className: "flex flex-col items-start justify-start",
                                        children: [(0, eG.jsx)("li", {
                                            className: "mb-2",
                                            children: (0, eG.jsx)(NavButton, {
                                                href: s.bottom.link,
                                                className: "text-2xl",
                                                children: s.bottom.label
                                            })
                                        }), s.bottom.categories.map(e => (0, eG.jsx)(NavAccordion, {
                                            links: e.links,
                                            children: e.label
                                        }, e.label))]
                                    })]
                                }) : (0, eG.jsxs)("ul", {
                                    className: "flex flex-col items-start justify-start",
                                    children: [(0, eG.jsx)(NavItem, {
                                        className: "w-full",
                                        children: (0, eG.jsxs)(NavButton, {
                                            className: "w-full justify-between px-0 py-3 text-lg",
                                            ...n.products ? {
                                                onClick: () => a("products")
                                            } : {
                                                href: r.products.link
                                            },
                                            children: [r.products.label, (0, eG.jsx)(chevron_left, {
                                                className: "h-8 w-8 rotate-180 p-2"
                                            })]
                                        })
                                    }), (0, eG.jsx)(NavItem, {
                                        className: "w-full",
                                        children: (0, eG.jsxs)(NavButton, {
                                            className: "w-full justify-between px-0 py-3 text-lg",
                                            ...n.useCases ? {
                                                onClick: () => a("useCases")
                                            } : {
                                                href: r.useCases.link
                                            },
                                            children: [r.useCases.label, (0, eG.jsx)(chevron_left, {
                                                className: "h-8 w-8 rotate-180 p-2"
                                            })]
                                        })
                                    }), (0, eG.jsx)(NavItem, {
                                        className: "w-full",
                                        children: (0, eG.jsxs)(NavButton, {
                                            className: "w-full justify-between px-0 py-3 text-lg",
                                            ...n.resources ? {
                                                onClick: () => a("resources")
                                            } : {
                                                href: r.resources.link
                                            },
                                            children: [r.resources.label, (0, eG.jsx)(chevron_left, {
                                                className: "h-8 w-8 rotate-180 p-2"
                                            })]
                                        })
                                    }), (0, eG.jsx)(NavItem, {
                                        className: "w-full",
                                        children: (0, eG.jsxs)(NavButton, {
                                            className: "w-full justify-between px-0 py-3 text-lg",
                                            ...n.business ? {
                                                onClick: () => a("business")
                                            } : {
                                                href: r.business.link
                                            },
                                            children: [r.business.label, (0, eG.jsx)(chevron_left, {
                                                className: "h-8 w-8 rotate-180 p-2"
                                            })]
                                        })
                                    }), r.links.map(e => (0, eG.jsx)(NavItem, {
                                        className: "w-full",
                                        children: (0, eG.jsxs)(NavButton, {
                                            className: "w-full justify-between px-0 py-3 text-lg",
                                            href: e.link,
                                            children: [e.label, (0, eG.jsx)(chevron_left, {
                                                className: "h-8 w-8 rotate-180 p-2"
                                            })]
                                        })
                                    }, e.link))]
                                }), !s && (0, eG.jsx)("ul", {
                                    className: "flex w-full flex-col gap-4",
                                    children: e.isAuthenticated ? (0, eG.jsx)(NavItem, {
                                        className: "flex-1",
                                        children: (0, eG.jsx)(NavButton, {
                                            href: r.dashboard.link,
                                            className: "bg-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-12 w-full rounded-full px-9 font-medium text-white",
                                            children: r.dashboard.label
                                        })
                                    }) : (0, eG.jsxs)(eG.Fragment, {
                                        children: [(0, eG.jsx)(NavItem, {
                                            className: "flex-1",
                                            children: (0, eG.jsx)(NavButton, {
                                                href: r.login.link,
                                                className: "text-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-12 w-full rounded-full bg-white px-9 font-medium",
                                                enableTrackingParams: !0,
                                                children: r.login.label
                                            })
                                        }), (0, eG.jsx)(NavItem, {
                                            className: "flex-1",
                                            children: (0, eG.jsx)(NavButton, {
                                                href: r.subscribe.link,
                                                className: "bg-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-12 w-full rounded-full px-9 font-medium text-white",
                                                enableTrackingParams: !0,
                                                children: r.subscribe.label
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                Navigation = e => {
                    let t = transformData(e.data),
                        r = (0, eR.b)(),
                        l = "en" === r,
                        a = (0, e4.k)(),
                        [n, s] = (0, eT.useState)(!1),
                        [i, o] = (0, eT.useState)(!0),
                        [c, d] = (0, eT.useState)(!1),
                        {
                            scrollY: u
                        } = (0, eK.v)();
                    (0, e$.W)(u, "change", e => {
                        o(t => {
                            let r = window.innerWidth < 1024 || e < 100 || n;
                            return r !== t && d(!0), r
                        })
                    });
                    let [f, h] = (0, eT.useState)(!1), m = t.create.categories.reduce((e, t) => e.concat(t.links), []).length > 0, p = t.links.length > 1 ? t.links.slice(0, -1) : [], g = t.links[0] ? t.links[t.links.length - 1] : null, {
                        isContactSalesLink: v,
                        enrichContactSalesLink: _
                    } = (0, e6.B)();
                    return (0, eG.jsxs)("header", {
                        className: "main-header pointer-events-none sticky top-0 z-40 h-[120px] w-full px-4 py-6",
                        children: [(0, eG.jsxs)(e0.E.div, {
                            onMouseEnter: () => {
                                s(!0)
                            },
                            onMouseLeave: () => {
                                s(!1)
                            },
                            className: "pointer-events-auto relative flex h-full w-full",
                            animate: {
                                width: i ? "100%" : 380,
                                transition: {
                                    duration: .4
                                }
                            },
                            onAnimationComplete: () => d(!1),
                            onHoverStart: () => {
                                i || (o(!0), d(!0))
                            },
                            children: [(0, eG.jsx)("div", {
                                className: "to-enterprise-gray/10 from-enterprise-gray/5 absolute inset-0 -z-[1] rounded-full border border-white/60 bg-gradient-to-br backdrop-blur-lg"
                            }), (0, eG.jsxs)("nav", {
                                className: "z-[1] flex flex-1 flex-row items-center justify-between gap-2 p-3 pl-8 sm:pl-10 lg:gap-3",
                                children: [(0, eG.jsx)("div", {
                                    className: "relative flex h-full items-center justify-center",
                                    children: (0, eG.jsxs)(eV.z, {
                                        className: "-m-2 p-2 pl-0 md:pl-2",
                                        href: "./index.html",
                                        locale: r,
                                        children: [(0, eG.jsx)("div", {
                                            className: "sr-only",
                                            children: "I-TECH"
                                        }), (0, eG.jsx)(eH.Z, {
                                            className: "text-enterprise-black h-4 md:h-6 flex-none"
                                        })]
                                    })
                                }), (0, eG.jsx)(plus, {
                                    className: (0, e1.cn)("mr-7 hidden h-10 w-10 p-2", (!i || c) && "block")
                                }), (0, eG.jsxs)("ul", {
                                    className: (0, e1.cn)("hidden h-full flex-row items-center justify-center gap-2 lg:flex xl:gap-3", (!i || c) && "lg:hidden"),
                                    children: [(0, eG.jsx)(NavItem, {
                                        children: (0, eG.jsx)(NavDropdown, {
                                            href: t.tools.link,
                                            items: (0, eG.jsxs)(eG.Fragment, {
                                                children: [(0, eG.jsx)(NavDropdownItem, {
                                                    items: (0, eG.jsx)("ul", {
                                                        className: "grid grid-cols-3 gap-2",
                                                        children: t.products.links.map(e => (0, eG.jsx)(eP.v.Item, {
                                                            as: "li",
                                                            className: "max-w-[342px]",
                                                            children: (0, eG.jsx)(FeaturedButton, {
                                                                href: e.link,
                                                                title: e.label,
                                                                description: e.description,
                                                                icon: e.icon
                                                            })
                                                        }, e.label))
                                                    }),
                                                    children: (0, eG.jsx)(eV.z, {
                                                        href: t.products.link,
                                                        className: "",
                                                        children: t.products.label
                                                    })
                                                }), (0, eG.jsx)(NavDropdownItem, {
                                                    items: (0, eG.jsx)("ul", {
                                                        className: "grid grid-cols-5 gap-6",
                                                        children: t.tools.categories.map(e => (0, eG.jsx)("li", {
                                                            className: "max-w-[172px]",
                                                            children: (0, eG.jsxs)("ul", {
                                                                className: "flex flex-col gap-4",
                                                                children: [(0, eG.jsx)(eP.v.Item, {
                                                                    as: "li",
                                                                    children: (0, eG.jsx)(eV.z, {
                                                                        href: e.link || void 0,
                                                                        className: (0, e1.cn)(e.link && "hover:text-enterprise-blue p-0.5"),
                                                                        children: e.label
                                                                    })
                                                                }), e.links.map(e => (0, eG.jsx)(eP.v.Item, {
                                                                    as: "li",
                                                                    className: "text-xs",
                                                                    children: (0, eG.jsx)(eV.z, {
                                                                        href: e.link,
                                                                        className: "hover:text-enterprise-blue p-0.5",
                                                                        children: e.label
                                                                    })
                                                                }, e.label))]
                                                            })
                                                        }, e.label))
                                                    }),
                                                    children: (0, eG.jsx)(eV.z, {
                                                        className: "hover:text-enterprise-blue",
                                                        href: t.tools.link,
                                                        children: t.tools.label
                                                    })
                                                })]
                                            }),
                                            children: t.products.label
                                        })
                                    }), m && (0, eG.jsx)(NavItem, {
                                        children: (0, eG.jsx)(NavDropdown, {
                                            href: t.create.link,
                                            items: (0, eG.jsxs)(eG.Fragment, {
                                                children: [l && (0, eG.jsx)(NavDropdownItem, {
                                                    items: (0, eG.jsx)("ul", {
                                                        className: "grid grid-cols-3 gap-2",
                                                        children: t.useCases.links.map(e => (0, eG.jsx)(eP.v.Item, {
                                                            as: "li",
                                                            className: "max-w-[342px]",
                                                            children: (0, eG.jsx)(FeaturedButton, {
                                                                href: e.link,
                                                                title: e.label,
                                                                description: e.description,
                                                                icon: e.icon
                                                            })
                                                        }, e.label))
                                                    }),
                                                    children: (0, eG.jsx)(eV.z, {
                                                        href: t.useCases.link,
                                                        className: "",
                                                        children: t.useCases.label
                                                    })
                                                }), (0, eG.jsx)(NavDropdownItem, {
                                                    items: (0, eG.jsx)("ul", {
                                                        className: "grid grid-cols-5 gap-6",
                                                        children: t.create.categories.map(e => (0, eG.jsx)("li", {
                                                            className: "max-w-[172px]",
                                                            children: (0, eG.jsxs)("ul", {
                                                                className: "flex flex-col gap-4",
                                                                children: [(0, eG.jsx)(eP.v.Item, {
                                                                    as: "li",
                                                                    children: (0, eG.jsx)(eV.z, {
                                                                        href: e.link || void 0,
                                                                        className: (0, e1.cn)(e.link && "hover:text-enterprise-blue p-0.5"),
                                                                        children: e.label
                                                                    })
                                                                }), e.links.map(e => (0, eG.jsx)(eP.v.Item, {
                                                                    as: "li",
                                                                    className: "text-xs",
                                                                    children: (0, eG.jsx)(eV.z, {
                                                                        href: e.link,
                                                                        className: "hover:text-enterprise-blue p-0.5",
                                                                        children: e.label
                                                                    })
                                                                }, e.link))]
                                                            })
                                                        }, e.label))
                                                    }),
                                                    children: (0, eG.jsx)(eV.z, {
                                                        className: "hover:text-enterprise-blue",
                                                        href: t.create.link,
                                                        children: t.create.label
                                                    })
                                                })]
                                            }),
                                            children: t.useCases.label
                                        })
                                    }), l && (0, eG.jsx)(NavItem, {
                                        children: (0, eG.jsx)(NavDropdown, {
                                            href: t.resources.link,
                                            items: (0, eG.jsx)(NavDropdownItem, {
                                                items: (0, eG.jsx)("ul", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: t.resources.links.map(e => (0, eG.jsx)(eP.v.Item, {
                                                        as: "li",
                                                        className: "max-w-[342px]",
                                                        children: (0, eG.jsx)(FeaturedButton, {
                                                            href: e.link,
                                                            title: e.label,
                                                            description: e.description,
                                                            icon: e.icon
                                                        })
                                                    }, e.label))
                                                }),
                                                children: (0, eG.jsx)(eV.z, {
                                                    href: t.resources.link,
                                                    className: "",
                                                    children: t.resources.label
                                                })
                                            }),
                                            children: t.resources.label
                                        })
                                    }), p.map(e => (0, eG.jsx)(NavItem, {
                                        children: (0, eG.jsx)(NavButton, {
                                            href: e.link,
                                            children: e.label
                                        })
                                    }, e.label))]
                                }), (0, eG.jsxs)("ul", {
                                    className: (0, e1.cn)("flex h-full flex-row items-center justify-center gap-2 xl:gap-3", (!i || c) && "lg:hidden"),
                                    children: [g && (0, eG.jsx)(NavItem, {
                                        className: "hidden lg:flex",
                                        children: (0, eG.jsx)(NavButton, {
                                            href: v(g.link) ? _(g.link) : g.link,
                                            children: g.label
                                        })
                                    }), a ? (0, eG.jsx)(NavItem, {
                                        children: (0, eG.jsx)(NavButton, {
                                            href: t.dashboard.link,
                                            className: "bg-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-full rounded-full px-5 text-sm font-medium text-white sm:text-base xl:px-5",
                                            enableTrackingParams: !0,
                                            children: t.dashboard.label
                                        })
                                    }) : (0, eG.jsxs)(eG.Fragment, {
                                        children: [(0, eG.jsx)(NavItem, {
                                            className: "hidden md:flex",
                                            children: (0, eG.jsx)(NavButton, {
                                                href: t.login.link,
                                                className: "text-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-full rounded-full bg-white px-5 text-sm font-medium sm:text-base xl:px-5",
                                                enableTrackingParams: !0,
                                                children: t.login.label
                                            })
                                        }), (0, eG.jsx)(NavItem, {
                                            children: (0, eG.jsx)(NavButton, {
                                                href: t.subscribe.link,
                                                className: "bg-enterprise-black hover:text-enterprise-black hover:bg-enterprise-lightGray h-full rounded-full px-5 text-sm font-medium text-white sm:text-base xl:px-5",
                                                enableTrackingParams: !0,
                                                children: t.subscribe.label
                                            })
                                        })]
                                    }), (0, eG.jsx)(NavItem, {
                                        className: "flex lg:hidden",
                                        children: (0, eG.jsx)(eV.z, {
                                            className: "flex items-center justify-center",
                                            onClick: () => h(!0),
                                            "aria-label": "hamburger",
                                            children: (0, eG.jsx)(bars, {
                                                className: "mr-3 h-12 w-12 p-2 sm:mr-5"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, eG.jsx)(MobileNavigation, {
                            data: t,
                            isOpen: f,
                            onClose: () => h(!1),
                            locale: r,
                            isAuthenticated: a,
                            isEnLocale: l,
                            hasCreateLinks: m
                        })]
                    })
                },
                Layout = e => {
                    let {
                        navData: t,
                        breadcrumbData: r,
                        children: l,
                        footerData: a,
                        className: n,
                        locales: s,
                        contentClassName: i = "max-w-[1440px]"
                    } = e;
                    return (0, eG.jsxs)("div", {
                        className: "bg-enterprise-lightGray font-swissnow text-enterprise-black ".concat(n || ""),
                        children: [(0, eG.jsx)(Navigation, {
                            data: t
                        }), r && (0, eG.jsx)(eQ.a, {
                            data: r,
                            rebrand: !0
                        }), (0, eG.jsx)("div", {
                            className: "main-container overflow-hidden",
                            children: (0, eG.jsx)("main", {
                                className: (0, e1.cn)("mx-auto", i),
                                children: l
                            })
                        }), (0, eG.jsx)(Footer, {
                            data: a,
                            locales: s
                        })]
                    })
                }
        },
        8555: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return useContactSalesEnrichment
                }
            });
            var l = r(5632);
            let useContactSalesEnrichment = () => {
                    let e = (0, l.useRouter)();
                    return {
                        isContactSalesLink: e => e.toLowerCase().includes("/contact-sales"),
                        enrichContactSalesLink: t => {
                            let r = new URL(t),
                                l = removeQueryOrHashFromPath(e.asPath);
                            return r.searchParams.append("ref", "Landing Pages Top Navbar, URL Path: ".concat(l)), r.toString()
                        }
                    }
                },
                removeQueryOrHashFromPath = e => e.split(/[?#]/)[0]
        },
        9257: function(e, t, r) {
            r.d(t, {
                k: function() {
                    return useIsAuthenticated
                }
            });
            var l = r(2784),
                a = r(6837);
            let useIsAuthenticated = () => {
                let [e, t] = (0, l.useState)(!1), r = (0, a.s)(), n = r.isAuthenticated();
                return (0, l.useEffect)(() => {
                    t(n)
                }, [n]), e
            }
        },
        9147: function(e, t, r) {
            r.d(t, {
                b: function() {
                    return useLocale
                }
            });
            var l = r(5632);
            let useLocale = () => {
                let e = (0, l.useRouter)();
                return e.locale || "en"
            }
        },
        1779: function(e, t, r) {
            r.d(t, {
                l: function() {
                    return usePathChange
                }
            });
            var l = r(2784),
                a = r(5632);
            let usePath = () => {
                    let e = (0, a.useRouter)();
                    return e.asPath
                },
                usePathChange = e => {
                    let t = usePath();
                    (0, l.useEffect)(() => {
                        e(t)
                    }, [t])
                }
        }
    }
]);