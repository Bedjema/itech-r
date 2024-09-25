"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [666], {
        6239: function(e, a, t) {
            t.d(a, {
                G: function() {
                    return Accordian
                }
            });
            var n = t(2322),
                s = t(6319),
                l = t(9442),
                r = t(6277);
            let Accordian = e => {
                let {
                    heading: a,
                    icons: t,
                    className: i,
                    openClassName: o,
                    iconClassName: c,
                    children: d,
                    forceOpen: u
                } = e;
                return (0, n.jsx)(s.p, {
                    as: "div",
                    className: "group",
                    defaultOpen: u,
                    children: e => {
                        let {
                            open: g
                        } = e, m = g || u ? t.opened : t.closed;
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(s.p.Button, {
                                className: (0, r.W)("grid w-full grid-flow-col items-center justify-between gap-3", i, (g || u) && o, (g || u) && "opened"),
                                disabled: u,
                                children: [a, !u && (0, n.jsx)(m, {
                                    className: (0, r.W)("mr-2 h-4 w-4 text-blue-600 transition group-hover:text-inherit", c)
                                })]
                            }), (0, n.jsx)(l.u, {
                                show: u || g,
                                className: "overflow-hidden",
                                enter: "transition-all duration-200 ease-in",
                                enterFrom: "transform max-h-0 scale-95 opacity-0",
                                enterTo: "transform max-h-screen scale-100 opacity-100",
                                leave: "transition-all duration-400 ease-out",
                                leaveFrom: "transform max-h-screen scale-100 opacity-100",
                                leaveTo: "transform max-h-0 scale-95 opacity-0",
                                unmount: !1,
                                children: (0, n.jsx)(s.p.Panel, {
                                    static: !0,
                                    children: d
                                })
                            })]
                        })
                    }
                })
            }
        },
        5017: function(e, a, t) {
            t.d(a, {
                $: function() {
                    return Footer
                }
            });
            var n = t(2322),
                s = t(4905),
                l = t(4804),
                r = t(5638),
                i = t(5565),
                o = t(9147),
                c = t(9554),
                d = t(6525),
                u = t(4975);
            let LanguageSelector = e => {
                    let {
                        locale: a,
                        locales: t
                    } = e;
                    return (0, n.jsxs)(i.v, {
                        as: "div",
                        className: "relative text-sm",
                        children: [(0, n.jsxs)(i.v.Button, {
                            className: "grid grid-flow-col items-center gap-3 text-start transition hover:text-blue-600",
                            children: [(0, r.nU)(null != a ? a : "en"), (0, n.jsx)(l.RiI, {
                                className: "h-3 w-3"
                            })]
                        }), (0, n.jsx)(i.v.Items, {
                            as: "ul",
                            unmount: !1,
                            className: "absolute bottom-full mb-2 grid max-h-96 grid-flow-row gap-0.5 overflow-y-auto rounded-lg bg-white p-4 text-neutral-600 shadow-xl",
                            children: t.filter(e => e.locale.toLocaleLowerCase() !== (null == a ? void 0 : a.toLocaleLowerCase())).map(e => ({
                                ...e,
                                text: (0, r.nU)(e.locale)
                            })).sort((e, a) => e.text.localeCompare(a.text)).map(e => (0, n.jsx)(i.v.Item, {
                                as: "li",
                                className: "grid w-full",
                                children: a => {
                                    let {
                                        active: t
                                    } = a;
                                    return (0, n.jsx)(d.z, {
                                        className: (0, s.cx)("whitespace-nowrap rounded-md p-2 font-medium transition hover:text-blue-600", t ? "bg-neutral-100" : "bg-white"),
                                        href: e.link,
                                        children: e.text
                                    })
                                }
                            }, e.locale))
                        })]
                    })
                },
                Footer = e => {
                    let {
                        data: a,
                        locales: t,
                        homepage: s
                    } = e, r = (0, o.b)();
                    return (0, n.jsx)("footer", {
                        className: "home:bg-homepage home:text-neutral-800 bg-black text-neutral-100",
                        children: (0, n.jsx)("div", {
                            className: "mx-auto max-w-screen-2xl px-6 pb-32 pt-12",
                            children: (0, n.jsxs)("div", {
                                className: "relative grid grid-flow-row grid-cols-1 items-start justify-start gap-8 lg:grid-cols-6",
                                children: [(0, n.jsxs)("div", {
                                    className: "grid grid-flow-row gap-6 pr-2",
                                    children: [(0, n.jsx)(u.X, {
                                        href: "./index.html",
                                        color: s ? "black" : "white"
                                    }), (0, n.jsx)("p", {
                                        className: "home:text-neutral-700 text-neutral-200",
                                        children: a.subtitle
                                    }), t && t.length > 1 && (0, n.jsx)(LanguageSelector, {
                                        locale: r,
                                        locales: t
                                    }), (0, n.jsxs)("div", {
                                        className: "grid grid-flow-col justify-start gap-2",
                                        children: [(0, n.jsx)(c.h, {
                                            label: "Twitter",
                                            href: "https://twitter.com/",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, n.jsx)(l.fWC, {})
                                        }), (0, n.jsx)(c.h, {
                                            label: "YouTube",
                                            href: "https://www.youtube.com/",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, n.jsx)(l.V2E, {})
                                        }), (0, n.jsx)(c.h, {
                                            label: "Twitter",
                                            href: "https://www.instagram.com/",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, n.jsx)(l.Zf_, {})
                                        }), (0, n.jsx)(c.h, {
                                            label: "TikTok",
                                            href: "https://www.tiktok.com/",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, n.jsx)(l.nTm, {})
                                        }), (0, n.jsx)(c.h, {
                                            label: "Email",
                                            href: "mailto:contact@itechmaroc.com",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, n.jsx)(l.SRX, {})
                                        })]
                                    }), (0, n.jsx)("p", {
                                        className: "text-xs text-neutral-500",
                                        children: "\xa9 Copyright ".concat(new Date().getFullYear())
                                    }), (0, n.jsx)(d.z, {
                                        id: "ot-sdk-btn",
                                        className: "ot-sdk-show-settings hover:gb-white",
                                        style: {
                                            borderRadius: "100px",
                                            border: "none",
                                            color: "#71737c",
                                            width: "fit-content",
                                            padding: 0,
                                            fontSize: "14px"
                                        },
                                        suppressHydrationWarning: !0,
                                        children: "Cookie Settings"
                                    })]
                                }), a.categories.map(e => {
                                    let {
                                        label: a,
                                        link: t,
                                        links: s
                                    } = e;
                                    return (0, n.jsxs)("div", {
                                        className: "grid grid-flow-row gap-[18px]",
                                        children: [(0, n.jsx)(d.z, {
                                            href: t || void 0,
                                            className: "font-medium",
                                            fallback: "p",
                                            children: a
                                        }), null == s ? void 0 : s.map(e => {
                                            let {
                                                label: a,
                                                link: t
                                            } = e;
                                            return (0, n.jsx)(d.z, {
                                                href: t,
                                                className: "home:text-neutral-600 text-sm text-neutral-400",
                                                children: a
                                            }, a)
                                        })]
                                    }, a)
                                })]
                            })
                        })
                    })
                }
        },
        3569: function(e, a, t) {
            t.d(a, {
                h: function() {
                    return Header
                }
            });
            var n = t(2322),
                s = t(4804),
                l = t(2784),
                r = t(6277),
                i = t(6525),
                o = t(4975),
                c = t(1779),
                d = t(9147),
                u = t(9257),
                g = t(8555),
                m = t(5565),
                h = t(9442);
            let DropdownMenu = e => {
                let {
                    label: a,
                    link: t,
                    children: r
                } = e, [o, d] = (0, l.useState)(!1);
                return (0, c.l)(() => d(!1)), (0, n.jsxs)(m.v, {
                    as: "div",
                    onMouseOver: () => d(!0),
                    onMouseOut: () => d(!1),
                    onFocus: () => d(!0),
                    onBlur: e => {
                        e.currentTarget.contains(e.relatedTarget) || d(!1)
                    },
                    children: [(0, n.jsxs)(i.z, {
                        ...t ? {
                            href: t
                        } : {
                            onClick: () => d(!0)
                        },
                        variant: o ? "secondary" : "ghost",
                        size: "custom",
                        className: "gap-1 p-3 dark:bg-transparent dark:hover:bg-neutral-900 xl:gap-2",
                        children: [a, (0, n.jsx)(s.RiI, {
                            className: "h-3 w-3 text-neutral-500 transition group-hover:text-inherit"
                        })]
                    }), (0, n.jsx)(h.u, {
                        show: o,
                        enter: "transition duration-100 ease-out",
                        enterFrom: "transform scale-95 opacity-0",
                        enterTo: "transform scale-100 opacity-100",
                        leave: "transition duration-75 ease-out",
                        leaveFrom: "transform scale-100 opacity-100",
                        leaveTo: "transform scale-95 opacity-0",
                        as: l.Fragment,
                        unmount: !1,
                        children: (0, n.jsx)("div", {
                            className: "absolute top-full mx-6 -mt-4 pt-4 lg:-ml-12 lg:mr-6",
                            children: (0, n.jsx)(m.v.Items, {
                                as: "ul",
                                className: "w-full",
                                static: !0,
                                children: (0, n.jsx)("div", {
                                    className: "dark:bg-neutral-1000 rounded-2xl bg-white shadow-2xl lg:max-w-screen-xl",
                                    children: r
                                })
                            })
                        })
                    })]
                })
            };
            var x = t(8108);
            let ResourcesSection = e => {
                let {
                    data: a
                } = e;
                return (0, n.jsx)("div", {
                    className: "p-2",
                    children: (0, n.jsx)("div", {
                        className: (0, r.Z)("grid max-w-4xl grid-cols-1 gap-2 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900", a.length > 2 ? "md:grid-cols-4" : "md:grid-cols-2"),
                        children: a.map(e => (0, n.jsxs)(i.z, {
                            href: e.link,
                            className: "grid-row-col dark:hover:bg-neutral-1000 grid gap-2 rounded-lg p-3 hover:bg-white md:gap-4 md:p-6",
                            children: [(0, n.jsxs)("div", {
                                className: "grid grid-flow-col content-start items-center justify-start justify-items-start gap-3",
                                children: [e.icon && (0, n.jsx)("div", {
                                    className: "h-12 w-12",
                                    children: (0, n.jsx)(x.Ee, {
                                        height: 48,
                                        width: 48,
                                        alt: e.icon.alt || e.label,
                                        hash: e.icon.hash,
                                        ext: e.icon.ext
                                    })
                                }), (0, n.jsx)("h2", {
                                    className: "font-medium leading-tight tracking-tight",
                                    children: e.label
                                })]
                            }), (0, n.jsx)("p", {
                                className: "text-smr leading-tight text-neutral-600",
                                children: e.description
                            })]
                        }, e.label))
                    })
                })
            };
            var p = t(3981);
            let ResourceSection = e => {
                let {
                    data: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "grid grid-flow-row content-start justify-start gap-2 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900 lg:col-span-1",
                    children: [(0, n.jsx)("h2", {
                        className: "px-2 text-2xl font-medium leading-tight tracking-normal",
                        children: a.label
                    }), (0, n.jsx)("div", {
                        className: "grid grid-flow-row gap-1",
                        children: a.links.map(e => (0, n.jsx)(m.v.Item, {
                            as: "li",
                            children: (0, n.jsxs)(i.z, {
                                className: "dark:hover:bg-neutral-1000 grid grid-flow-col justify-start gap-3 rounded-lg py-4 px-2 hover:bg-white",
                                href: e.link,
                                children: [e.icon && (0, n.jsx)("div", {
                                    className: "h-12 w-12",
                                    children: (0, n.jsx)(x.Ee, {
                                        height: 48,
                                        width: 48,
                                        alt: e.icon.alt || e.label,
                                        hash: e.icon.hash,
                                        ext: e.icon.ext
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "grid grid-flow-row gap-0",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-sm font-medium leading-tight",
                                        children: e.label
                                    }), (0, n.jsx)("p", {
                                        className: "text-smr leading-tight text-neutral-600",
                                        children: e.description
                                    })]
                                })]
                            })
                        }, e.label))
                    })]
                })
            };
            var f = t(6239);
            let CategoriesSection = e => {
                    let {
                        data: a,
                        isMobile: t
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "flex w-full flex-col gap-4 px-4 py-2 lg:col-span-2",
                        children: [(0, n.jsx)(i.z, {
                            href: a.link,
                            className: "",
                            children: (0, n.jsx)("h2", {
                                className: "px-2 text-2xl font-medium leading-tight tracking-normal",
                                children: a.label
                            })
                        }), (0, n.jsx)("div", {
                            className: "grid w-full grid-flow-row content-start items-start gap-4  lg:grid-flow-col",
                            children: a.categories.map(e => (0, n.jsx)(f.G, {
                                forceOpen: !t,
                                className: "pb-1",
                                icons: {
                                    opened: s.s$2,
                                    closed: s.RiI
                                },
                                heading: (0, n.jsx)(i.z, {
                                    href: e.link || void 0,
                                    fallback: "p",
                                    className: "px-2 py-1 font-medium",
                                    children: e.label
                                }),
                                children: (0, n.jsx)("div", {
                                    className: "grid grid-flow-row items-stretch gap-1",
                                    children: e.links.map(e => (0, n.jsx)(m.v.Item, {
                                        as: "li",
                                        className: "grid",
                                        children: (0, n.jsx)(i.z, {
                                            href: e.link,
                                            className: "hover:text-neutral-1000 text-smr rounded-lg bg-white/0 p-2 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-white",
                                            children: e.label
                                        })
                                    }, e.label))
                                })
                            }, e.label))
                        })]
                    })
                },
                SubPageButton = e => {
                    let {
                        label: a,
                        onClick: t
                    } = e;
                    return (0, n.jsxs)(i.z, {
                        onClick: () => t(),
                        className: "grid w-full grid-flow-col items-center justify-between rounded-lg px-4 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900",
                        children: [a, (0, n.jsx)(s.Dli, {
                            className: "h-3 w-3 text-neutral-500 transition group-hover:text-inherit"
                        })]
                    })
                },
                MobileMenu = e => {
                    let {
                        isOpen: a,
                        onClose: t,
                        data: r,
                        darkMode: c
                    } = e, [u, g] = (0, l.useState)(null), h = (0, d.b)(), x = "en" === h, f = r.create.categories.reduce((e, a) => e.concat(a.links), []).length > 0;
                    return (0, n.jsx)(p.V, {
                        open: a,
                        className: "dark:bg-neutral-1000 fixed inset-0 z-50 h-screen w-screen bg-white",
                        onClose: () => null,
                        children: (0, n.jsxs)(p.V.Panel, {
                            as: "div",
                            className: "grid h-full grid-rows-[auto_1fr] gap-2",
                            children: [(0, n.jsxs)("div", {
                                className: "grid grid-flow-col items-center justify-between gap-2 p-4",
                                children: [u ? (0, n.jsxs)(i.z, {
                                    onClick: () => g(null),
                                    variant: "ghost",
                                    children: [(0, n.jsx)(s.bUI, {
                                        className: "-ml-1 h-4 w-4"
                                    }), (0, n.jsx)(p.V.Title, {
                                        className: "text-2xl font-normal leading-[26px]",
                                        children: u.title
                                    })]
                                }) : (0, n.jsx)(o.X, {
                                    color: c ? "white" : "black",
                                    href: "./index.html",
                                    className: "mr-1 p-1 xl:mr-2 xl:p-2"
                                }), (0, n.jsx)(i.z, {
                                    variant: "secondary",
                                    size: "custom",
                                    className: "p-4",
                                    onClick: t,
                                    children: (0, n.jsx)(s.aHS, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "grid h-full w-full grid-flow-row content-between gap-4 overflow-y-auto px-4 pb-6",
                                children: [u ? (0, n.jsxs)(m.v, {
                                    as: "ul",
                                    className: "grid grid-cols-1 gap-4  ".concat(u.resource && "md:grid-cols-2"),
                                    children: [u.resource && (0, n.jsx)(ResourceSection, {
                                        data: u.resource
                                    }), u.resources && (0, n.jsx)(ResourcesSection, {
                                        data: u.resources
                                    }), u.categories && (0, n.jsx)(CategoriesSection, {
                                        data: u.categories,
                                        isMobile: !0
                                    })]
                                }) : (0, n.jsxs)("div", {
                                    className: "grid grid-flow-row gap-2",
                                    children: [(0, n.jsx)(SubPageButton, {
                                        label: r.tools.label,
                                        onClick: () => g({
                                            title: r.tools.label,
                                            resource: r.products,
                                            categories: r.tools
                                        })
                                    }), f && (0, n.jsx)(SubPageButton, {
                                        label: r.useCases.label,
                                        onClick: () => g({
                                            title: r.useCases.label,
                                            resource: x ? r.useCases : null,
                                            categories: r.create
                                        })
                                    }), x && (0, n.jsx)(SubPageButton, {
                                        label: r.resources.label,
                                        onClick: () => g({
                                            title: r.resources.label,
                                            resources: r.resources.links
                                        })
                                    }), r.links.map(e => (0, n.jsx)(i.z, {
                                        href: e.link,
                                        className: "w-full rounded-lg px-4 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900",
                                        children: e.label
                                    }, e.label))]
                                }), !u && (0, n.jsxs)("div", {
                                    className: "grid grid-flow-col gap-2",
                                    children: []
                                })]
                            })]
                        })
                    })
                },
                Navigation = e => {
                    let {
                        data: a,
                        darkMode: t,
                        className: m
                    } = e, h = (0, u.k)(), [x, p] = (0, l.useState)(!1), {
                        isContactSalesLink: f,
                        enrichContactSalesLink: j
                    } = (0, g.B)();
                    (0, c.l)(() => p(!1));
                    let b = a.links[0] ? a.links[a.links.length - 1] : null,
                        v = a.links.length > 1 ? a.links.slice(0, -1) : [],
                        w = (0, d.b)(),
                        k = "en" === w,
                        N = a.create.categories.reduce((e, a) => e.concat(a.links), []).length > 0;
                    return (0, n.jsxs)("nav", {
                        className: (0, r.Z)("dark:bg-neutral-1000/80 home:bg-homepage w-full bg-white/80 backdrop-blur-md dark:text-white", m),
                        children: [(0, n.jsx)("div", {
                            className: "relative mx-auto w-full max-w-screen-2xl p-4",
                            children: (0, n.jsxs)("div", {
                                className: "mx-auto grid max-w-none grid-flow-col gap-2",
                                children: [(0, n.jsxs)("div", {
                                    className: "grid grid-flow-col items-center justify-start gap-2",
                                    children: [(0, n.jsx)(o.X, {
                                        dataTestId: "@navigation/logo-button",
                                        color: t ? "white" : "black",
                                        href: "./index.html",
                                        className: "mr-1 p-1 xl:mr-2 xl:p-2"
                                    }), (0, n.jsxs)("div", {
                                        className: "hidden grid-flow-col items-center justify-center gap-2 lg:grid",
                                        children: [(0, n.jsx)(DropdownMenu, {
                                            label: a.products.label,
                                            link: a.tools.link,
                                            children: (0, n.jsx)(ResourcesSection, {
                                                data: a.products.links
                                            })
                                        }), N && (0, n.jsx)(DropdownMenu, {
                                            label: a.useCases.label,
                                            link: a.create.link,
                                            children: (0, n.jsxs)("div", {
                                                className: "grid grid-cols-1 justify-items-stretch gap-4 p-6 lg:grid-cols-3",
                                                children: [k && (0, n.jsx)(ResourceSection, {
                                                    data: a.useCases
                                                }), (0, n.jsx)(CategoriesSection, {
                                                    data: a.create
                                                })]
                                            })
                                        }), k && (0, n.jsx)(DropdownMenu, {
                                            label: a.resources.label,
                                            link: a.resources.link,
                                            children: (0, n.jsx)(ResourcesSection, {
                                                data: a.resources.links
                                            })
                                        }), v.map(e => (0, n.jsx)(i.z, {
                                            variant: "ghost",
                                            size: "custom",
                                            className: "p-3 dark:bg-transparent",
                                            href: e.link,
                                            children: e.label
                                        }, e.label))]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "grid grid-flow-col items-center justify-end gap-2",
                                    children: [(0, n.jsxs)("div", {
                                        className: "hidden grid-flow-col gap-2 lg:grid",
                                        children: [b && (0, n.jsx)(i.z, {
                                            variant: "ghost",
                                            size: "custom",
                                            className: "p-3",
                                            href: f(b.link) ? j(b.link) : b.link,
                                            children: b.label
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(MobileMenu, {
                            isOpen: x,
                            onClose: () => p(!1),
                            data: a,
                            darkMode: t
                        })]
                    })
                };
            var j = t(7165),
                b = t(7840);
            let Banner = e => {
                    let {
                        data: a
                    } = e, {
                        bgColor: t,
                        color: s,
                        bannerText: l,
                        cta: r,
                        buttonBgColor: o,
                        buttonColor: c
                    } = a;
                    return (0, n.jsxs)("aside", {
                        "data-testid": "@banner",
                        className: "flex items-center justify-center space-x-2 px-4 py-3 md:px-2",
                        style: {
                            backgroundColor: t || "#0098FD",
                            color: s || "#FFFFFF"
                        },
                        children: [(0, n.jsx)(j.U, {
                            content: l,
                            className: "text-xs text-inherit md:text-sm",
                            proseClassName: "prose prose-a:underline"
                        }), r && (0, n.jsx)(i.z, {
                            href: r.link,
                            variant: "primary",
                            size: "custom",
                            className: "inline-grid whitespace-nowrap !rounded-full px-3 py-1.5 text-sm",
                            style: {
                                backgroundColor: o || "#FFFFFF",
                                color: c || "#000000"
                            },
                            logEvent: () => {
                                var e;
                                return b.px.bannerCtaClicked({
                                    value: null == a ? void 0 : null === (e = a.cta) || void 0 === e ? void 0 : e.link,
                                    pathname: window.location.pathname
                                }).promise
                            },
                            enableTrackingParams: !0,
                            children: r.text
                        })]
                    })
                },
                Header = e => {
                    let {
                        navData: a,
                        darkMode: t,
                        className: s
                    } = e;
                    return (0, n.jsxs)("header", {
                        className: "sticky top-0 z-40",
                        children: [a.banner && a.banner.active && (0, n.jsx)(Banner, {
                            data: a.banner
                        }), (0, n.jsx)(Navigation, {
                            data: a,
                            darkMode: t,
                            className: s
                        })]
                    })
                }
        },
        9554: function(e, a, t) {
            t.d(a, {
                h: function() {
                    return IconButton
                }
            });
            var n = t(2322),
                s = t(6525);

            function IconButton(e) {
                let {
                    label: a,
                    children: t,
                    ...l
                } = e;
                return (0, n.jsxs)(s.z, {
                    ...l,
                    children: [(0, n.jsx)("span", {
                        className: "sr-only",
                        children: a
                    }), t]
                })
            }
        },
        8108: function(e, a, t) {
            t.d(a, {
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
            var n = t(2322),
                s = t(6277),
                l = t(6577),
                r = t.n(l);
            let i = "https://bedjema.github.io/itech-r",
                o = [""],
                join = function() {
                    for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return a.join("/").replace(/\/+/g, "/")
                },
                loader = e => {
                    let {
                        src: a,
                        width: t,
                        quality: n = 75
                    } = e, s = a.startsWith("http"), l = new URL(s ? a : join(i, a));
                    if(l.pathname == "/img/logo.png") {
                        l.pathname = "https://bedjema.github.io/itech-r/img/logo.png";
                        return ("https://bedjema.github.io/itech-r/img/logo.png")
                    } else {
                        return (!s || o.includes(l.hostname)) && (l.pathname), l.toString()
                    }
                    
                },
                getCdnImageSrc = function(e, a) {
                    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return t ? "".concat(i, "/").concat(e).concat(a) : "".concat(e).concat(a)
                },
                getSizes = (e, a) => (0, s.Z)("(min-width: 1536px) ".concat(a, "px,"), "(min-width: 1280px) ".concat(e.xl, "px,"), "(min-width: 1024px) ".concat(e.lg, "px,"), "(min-width: 768px) ".concat(e.md, "px,"), "(min-width: 640px) ".concat(e.sm, "px,"), "".concat(e.xs, "px")),
                Image = e => {
                    let {
                        src: a,
                        hash: t,
                        ext: s,
                        width: l,
                        height: i,
                        sizes: o,
                        quality: c,
                        ...d
                    } = e, u = a || getCdnImageSrc(t, s, !1), g = o && getSizes(o, l);
                    return (0, n.jsx)(r(), {
                        ...d,
                        src: u,
                        sizes: g,
                        height: i,
                        width: l,
                        loader: loader,
                        quality: c
                    })
                }
        },
        4975: function(e, a, t) {
            t.d(a, {
                X: function() {
                    return LogoButton
                }
            });
            var n = t(2322),
                s = t(6277),
                l = t(9147),
                r = t(6525),
                i = t(8108);
            let LogoButton = e => {
                let {
                    color: a,
                    priority: t,
                    href: o,
                    target: c,
                    className: d,
                    dataTestId: u
                } = e, g = (0, l.b)();
                return (0, n.jsxs)(r.z, {
                    "data-testid": u,
                    href: o,
                    target: c,
                    className: (0, s.Z)(d),
                    locale: g,
                    children: [(0, n.jsx)("div", {
                        className: "sr-only",
                        children: "I-TECH"
                    }), (0, n.jsx)(i.Ee, {
                        priority: t,
                        src: "./img/logo.png",
                        alt: "logo",
                        width: 132,
                        height: 24
                    })]
                })
            }
        },
        7165: function(e, a, t) {
            t.d(a, {
                U: function() {
                    return Markdown
                }
            });
            var n = t(2322),
                s = t(4074),
                l = t(5731);
            let Markdown = e => {
                let {
                    content: a,
                    className: t,
                    proseClassName: r,
                    ...i
                } = e;
                return a ? (0, n.jsx)(s.D, {
                    ...i,
                    skipHtml: !0,
                    className: (0, l.cn)(r || "prose prose-neutral prose-a:no-underline prose-a:text-blue-600", "marker:text-xl marker:text-blue-600", t),
                    children: a
                }) : null
            }
        },
        8963: function(e, a, t) {
            t.d(a, {
                h_: function() {
                    return Meta
                }
            });
            var n = t(2322),
                s = t(7729),
                l = t.n(s),
                r = t(5638),
                i = t(5632),
                o = t(195);
            let c = o.z.string().regex(/^#[0-9a-f]{6}$/i);
            o.z.object({
                title: o.z.string(),
                image: o.z.string().url(),
                ctaText: o.z.string(),
                theme: o.z.tuple([c, c])
            });
            let d = "https://www.veed.io",
                Meta = e => {
                    let a, {
                            title: t,
                            description: s,
                            locales: o,
                            dynamicOgImage: c,
                            ogImageUrl: u,
                            themeColor: g = "#ECEEEE"
                        } = e,
                        m = (0, i.useRouter)(),
                        h = m.asPath.split("?")[0];
                    if (c) {
                        let e = encodeURIComponent(JSON.stringify(c));
                        a = "".concat("https://www.veed.io", "/landing-api/og-image?data=").concat(e)
                    }
                    return u = u || a || "https://cdn-site-assets.veed.io/og_image_1200x630_5a87208cda/og_image_1200x630_5a87208cda.jpg", (0, n.jsxs)(l(), {
                        children: [(0, n.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width, maximum-scale=1"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, n.jsx)("title", {
                            children: t
                        }, "title"), (0, n.jsx)("meta", {
                            name: "description",
                            content: s
                        }), (0, n.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, n.jsx)("meta", {
                            property: "og:site_name",
                            content: "I-TECH"
                        }), (0, n.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(d).concat("/" === h ? "" : h)
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: t
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: s
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: u
                        }), (0, n.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: u
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
                            content: t
                        }), (0, n.jsx)("meta", {
                            name: "twitter:description",
                            content: s
                        }), (0, n.jsx)("meta", {
                            name: "twitter:image",
                            content: u
                        }), (0, n.jsx)("meta", {
                            name: "theme-color",
                            content: g
                        }), (0, n.jsx)("meta", {
                            name: "google-site-verification",
                            content: "KSFOy8apNadNZPpqvNQPJ0qDIEugKU67qI8xyNt55JY"
                        }), o ? o.map((e, a) => {
                            let t = "".concat(d).concat("en" === e.locale && "homepage" === e.slug ? "" : e.link),
                                s = "en" === e.locale ? "x-default" : (0, r.jR)(e.locale);
                            return (0, n.jsx)("link", {
                                rel: "alternate",
                                href: t,
                                hrefLang: s
                            }, a)
                        }) : null]
                    })
                }
        },
        1164: function(e, a, t) {
            t.d(a, {
                l: function() {
                    return StructuredMarkup
                }
            });
            var n = t(2322),
                s = t(7729),
                l = t.n(s);
            let StructuredMarkup = e => {
                let {
                    schema: a
                } = e;
                return (0, n.jsx)(l(), {
                    children: (0, n.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(a)
                        }
                    })
                })
            }
        },
        8555: function(e, a, t) {
            t.d(a, {
                B: function() {
                    return useContactSalesEnrichment
                }
            });
            var n = t(5632);
            let useContactSalesEnrichment = () => {
                    let e = (0, n.useRouter)();
                    return {
                        isContactSalesLink: e => e.toLowerCase().includes("/contact-sales"),
                        enrichContactSalesLink: a => {
                            let t = new URL(a),
                                n = removeQueryOrHashFromPath(e.asPath);
                            return t.searchParams.append("ref", "Landing Pages Top Navbar, URL Path: ".concat(n)), t.toString()
                        }
                    }
                },
                removeQueryOrHashFromPath = e => e.split(/[?#]/)[0]
        },
        9257: function(e, a, t) {
            t.d(a, {
                k: function() {
                    return useIsAuthenticated
                }
            });
            var n = t(2784),
                s = t(6837);
            let useIsAuthenticated = () => {
                let [e, a] = (0, n.useState)(!1), t = (0, s.s)(), l = t.isAuthenticated();
                return (0, n.useEffect)(() => {
                    a(l)
                }, [l]), e
            }
        },
        9147: function(e, a, t) {
            t.d(a, {
                b: function() {
                    return useLocale
                }
            });
            var n = t(5632);
            let useLocale = () => {
                let e = (0, n.useRouter)();
                return e.locale || "en"
            }
        },
        1779: function(e, a, t) {
            t.d(a, {
                l: function() {
                    return usePathChange
                }
            });
            var n = t(2784),
                s = t(5632);
            let usePath = () => {
                    let e = (0, s.useRouter)();
                    return e.asPath
                },
                usePathChange = e => {
                    let a = usePath();
                    (0, n.useEffect)(() => {
                        e(a)
                    }, [a])
                }
        },
        5731: function(e, a, t) {
            t.d(a, {
                cn: function() {
                    return cn
                }
            });
            var n = t(6277),
                s = t(324);
            let cn = function() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return (0, s.m6)((0, n.W)(a))
            }
        },
        5638: function(e, a, t) {
            var n, s, l, r;
            t.d(a, {
                jR: function() {
                    return getRegionIndependentLocale
                },
                nU: function() {
                    return localiseLanguageText
                }
            });
            let i = [{
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
            i.filter(e => e.rtl).map(e => e.code), (l = n || (n = {})).LTR = "ltr", l.RTL = "rtl", (r = s || (s = {})).TOP = "top", r.BOTTOM = "bottom";
            let localiseLanguageText = e => {
                    let a = i.filter(a => a.code === e);
                    return a[0] ? a[0].name : "English"
                },
                getRegionIndependentLocale = e => {
                    let a = i.filter(a => a.code === e);
                    return a[0] ? a[0].language : e
                }
        }
    }
]);