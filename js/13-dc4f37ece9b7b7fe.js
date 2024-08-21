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
                                        }), (0, eG.jsxs)("div", {
                                            className: "flex justify-start gap-[11px]",
                                            children: [(0, eG.jsx)(ez.h, {
                                                label: "Twitter",
                                                href: "https://twitter.com/",
                                                className: "border-enterprise-gray hover:text-enterprise-black rounded-full border-[1px] border-solid from-[#e71c32] to-[#ff6877] p-2 hover:bg-gradient-to-r",
                                                children: (0, eG.jsx)(eD.cy8, {})
                                            }), (0, eG.jsx)(ez.h, {
                                                label: "Facebook",
                                                href: "https://www.facebook.com/",
                                                className: "border-enterprise-gray hover:text-enterprise-black rounded-full border-[1px] border-solid from-[#e71c32] to-[#ff6877] p-2 hover:bg-gradient-to-r",
                                                children: (0, eG.jsx)(eU.V2E, {})
                                            }), (0, eG.jsx)(ez.h, {
                                                label: "Twitter",
                                                href: "https://www.instagram.com/",
                                                className: "border-enterprise-gray hover:text-enterprise-black rounded-full border-[1px] border-solid from-[#e71c32] to-[#ff6877] p-2 hover:bg-gradient-to-r",
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-1.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-2.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-11.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-7.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-10.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-10.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-4.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-5.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-5.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-5.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-8.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-3.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-6.png",
                    width : "96px"
                }, e))
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
                return eT.createElement("img", video_editor_extends({
                    src: "./img/head/head-9.png",
                    width : "96px"
                }, e))
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
                                top: r.products
                            },
                            useCases: e.hasCreateLinks ? {
                                top: e.isEnLocale ? r.useCases : null,
                                bottom: r.create
                            } : null,
                            resources: e.isEnLocale ? {
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