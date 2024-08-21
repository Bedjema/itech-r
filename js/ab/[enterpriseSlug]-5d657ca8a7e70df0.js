(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [638], {
        5048: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/enterprise/[enterpriseSlug]", function() {
                return t(2625)
            }])
        },
        2625: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSG: function() {
                    return E
                },
                default: function() {
                    return _enterpriseSlug_
                }
            });
            var n = t(2322),
                l = t(2784),
                r = t(7840),
                i = t(5281),
                a = t(7165),
                d = t(5731),
                c = t(1807),
                m = t(1465),
                o = t(3008),
                x = t(37),
                p = t(9713),
                g = t(6889),
                u = t(35),
                h = t(2600),
                j = t(2281),
                f = t(8108),
                w = t(8190),
                N = t(4368),
                enterprise_Badges = e => {
                    let {
                        section: s,
                        g2BadgeReviews: t
                    } = e;
                    return (0, n.jsxs)(N.Z, {
                        className: "mx-auto rounded-lg bg-white p-4 pt-6 md:mt-12 md:bg-transparent md:p-0 lg:mt-16",
                        children: [(0, n.jsx)("div", {
                            className: "flex w-full justify-between gap-2 md:items-center md:justify-center md:gap-3 lg:gap-2",
                            children: s.map((e, s) => {
                                let {
                                    image: r
                                } = e;
                                return (0, n.jsxs)(l.Fragment, {
                                    children: [2 === s && (0, n.jsx)(w.Z, {
                                        className: "hidden md:mx-5 md:block lg:mx-8",
                                        g2BadgeReviews: t
                                    }), r && (0, n.jsx)("div", {
                                        children: (0, n.jsx)(f.Ee, {
                                            className: "h-full w-full md:h-20 md:w-20 lg:h-24 lg:w-24",
                                            ...r
                                        })
                                    })]
                                }, s)
                            })
                        }), (0, n.jsx)(w.Z, {
                            className: "mt-10 md:hidden",
                            hidePaddingOnMobile: !0,
                            g2BadgeReviews: t
                        })]
                    })
                },
                _ = t(5208),
                b = t(6610),
                v = t(4836),
                S = t(156),
                Z = t(5017),
                k = t(8963),
                y = t(6815),
                E = !0,
                _enterpriseSlug_ = e => {
                    let {
                        pageData: s,
                        navData: t,
                        footerData: l,
                        staticContent: r
                    } = e, {
                        badges: a,
                        useCasesSection: d,
                        featuresSectionCards: c,
                        featuresSectionTitle: m,
                        testimonialsSectionTitle: p,
                        meta: N,
                        stickyCTA: v
                    } = s;
                    return (0, n.jsxs)("div", {
                        className: "bg-enterprise-lightGray font-swissnow",
                        children: [(0, n.jsx)(k.h_, {
                            title: N.metaTitle,
                            description: N.metaDescription,
                            themeColor: "#FFFFFF"
                        }), (0, n.jsx)(S.h, {
                            navData: t,
                            darkMode: !1
                        }), (0, n.jsxs)(y.Z, {
                            children: [(0, n.jsxs)(o.Z, {
                                children: [(0, n.jsx)(u.Z, {
                                    section: d
                                }), (0, n.jsx)(h.Z, {
                                    sections: c,
                                    heading: m
                                })]
                            }), (0, n.jsx)(j.Z, {
                                section: x,
                                heading: p
                            }), (0, n.jsxs)(o.Z, {
                                children: [(0, n.jsx)(_.Z, {
                                    section: g
                                }), (0, n.jsx)(b.Z, {
                                    section: f
                                })]
                            })]
                        }), (0, n.jsx)(Z.$, {
                            data: l
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [945, 879, 532, 666, 778, 64, 280, 774, 888, 179], function() {
            return e(e.s = 5048)
        }), _N_E = e.O()
    }
]);