"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [728], {
        3728: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                A: function() {
                    return Layout
                }
            });
            var jsx_runtime = __webpack_require__(2322),
                fa = __webpack_require__(4804),
                react = __webpack_require__(2784),
                clsx_m = __webpack_require__(6277),
                Button = __webpack_require__(5495),
                useLocale = __webpack_require__(4181),
                Image = __webpack_require__(2729);
            let LogoButton = param => {
                let {
                    color,
                    priority,
                    href,
                    target,
                    className,
                    dataTestId
                } = param, locale = (0, useLocale.b)();
                return (0, jsx_runtime.jsxs)(Button.z, {
                    "data-testid": dataTestId,
                    href: href,
                    target: target,
                    className: (0, clsx_m.Z)(className),
                    locale: locale,
                    children: [(0, jsx_runtime.jsx)("div", {
                        className: "sr-only",
                        children: "I TECH"
                    }), (0, jsx_runtime.jsx)(Image.Ee, {
                        priority: priority,
                        src: "./img/logo.png",
                        alt: "logo",
                        width: 132,
                        height: 24
                    })]
                })
            };
            var usePathChange = __webpack_require__(1675),
                useIsAuthenticated = __webpack_require__(5453),
                useContactSalesLinkEnrichment = __webpack_require__(884),
                menu = __webpack_require__(5565),
                transition = __webpack_require__(9442);
            let DropdownMenu = param => {
                    let {
                        label,
                        link,
                        children
                    } = param, [isMenuOpen, setIsMenuOpen] = (0, react.useState)(!1);
                    (0, usePathChange.l)(() => setIsMenuOpen(!1));
                    let handleBlur = event => {
                        event.currentTarget.contains(event.relatedTarget) || setIsMenuOpen(!1)
                    };
                    return (0, jsx_runtime.jsxs)(menu.v, {
                        as: "div",
                        onMouseOver: () => setIsMenuOpen(!0),
                        onMouseOut: () => setIsMenuOpen(!1),
                        onFocus: () => setIsMenuOpen(!0),
                        onBlur: handleBlur,
                        children: [(0, jsx_runtime.jsxs)(Button.z, {
                            ...link ? {
                                href: link
                            } : {
                                onClick: () => setIsMenuOpen(!0)
                            },
                            variant: isMenuOpen ? "secondary" : "ghost",
                            size: "custom",
                            className: "gap-1 p-3 dark:bg-transparent dark:hover:bg-neutral-900 xl:gap-2",
                            children: [label, (0, jsx_runtime.jsx)(fa.RiI, {
                                className: "h-3 w-3 text-neutral-500 transition group-hover:text-inherit"
                            })]
                        }), (0, jsx_runtime.jsx)(transition.u, {
                            show: isMenuOpen,
                            enter: "transition duration-100 ease-out",
                            enterFrom: "transform scale-95 opacity-0",
                            enterTo: "transform scale-100 opacity-100",
                            leave: "transition duration-75 ease-out",
                            leaveFrom: "transform scale-100 opacity-100",
                            leaveTo: "transform scale-95 opacity-0",
                            as: react.Fragment,
                            unmount: !1,
                            children: (0, jsx_runtime.jsx)("div", {
                                className: "absolute top-full mx-6 -mt-4 pt-4 lg:-ml-12 lg:mr-6",
                                children: (0, jsx_runtime.jsx)(menu.v.Items, {
                                    as: "ul",
                                    className: "w-full",
                                    static: !0,
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "dark:bg-neutral-1000 rounded-2xl bg-white shadow-2xl lg:max-w-screen-xl",
                                        children: children
                                    })
                                })
                            })
                        })]
                    })
                },
                ResourcesSection = param => {
                    let {
                        data
                    } = param;
                    return (0, jsx_runtime.jsx)("div", {
                        className: "p-2",
                        children: (0, jsx_runtime.jsx)("div", {
                            className: (0, clsx_m.Z)("grid max-w-4xl grid-cols-1 gap-2 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900", data.length > 2 ? "md:grid-cols-4" : "md:grid-cols-2"),
                            children: data.map(link => (0, jsx_runtime.jsxs)(Button.z, {
                                href: link.link,
                                className: "grid-row-col dark:hover:bg-neutral-1000 grid gap-2 rounded-lg p-3 hover:bg-white md:gap-4 md:p-6",
                                children: [(0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-col content-start items-center justify-start justify-items-start gap-3",
                                    children: [link.icon && (0, jsx_runtime.jsx)("div", {
                                        className: "h-12 w-12",
                                        children: (0, jsx_runtime.jsx)(Image.Ee, {
                                            height: 48,
                                            width: 48,
                                            alt: link.icon.alt || link.label,
                                            hash: link.icon.hash,
                                            ext: link.icon.ext
                                        })
                                    }), (0, jsx_runtime.jsx)("h2", {
                                        className: "font-medium leading-tight tracking-tight",
                                        children: link.label
                                    })]
                                }), (0, jsx_runtime.jsx)("p", {
                                    className: "text-smr leading-tight text-neutral-600",
                                    children: link.description
                                })]
                            }, link.label))
                        })
                    })
                };
            var dialog = __webpack_require__(3981);
            let ResourceSection = param => {
                let {
                    data
                } = param;
                return (0, jsx_runtime.jsxs)("div", {
                    className: "grid grid-flow-row content-start justify-start gap-2 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900 lg:col-span-1",
                    children: [(0, jsx_runtime.jsx)("h2", {
                        className: "px-2 text-2xl font-medium leading-tight tracking-normal",
                        children: data.label
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "grid grid-flow-row gap-1",
                        children: data.links.map(link => (0, jsx_runtime.jsx)(menu.v.Item, {
                            as: "li",
                            children: (0, jsx_runtime.jsxs)(Button.z, {
                                className: "dark:hover:bg-neutral-1000 grid grid-flow-col justify-start gap-3 rounded-lg py-4 px-2 hover:bg-white",
                                href: link.link,
                                children: [link.icon && (0, jsx_runtime.jsx)("div", {
                                    className: "h-12 w-12",
                                    children: (0, jsx_runtime.jsx)(Image.Ee, {
                                        height: 48,
                                        width: 48,
                                        alt: link.icon.alt || link.label,
                                        hash: link.icon.hash,
                                        ext: link.icon.ext
                                    })
                                }), (0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-row gap-0",
                                    children: [(0, jsx_runtime.jsx)("h3", {
                                        className: "text-sm font-medium leading-tight",
                                        children: link.label
                                    }), (0, jsx_runtime.jsx)("p", {
                                        className: "text-smr leading-tight text-neutral-600",
                                        children: link.description
                                    })]
                                })]
                            })
                        }, link.label))
                    })]
                })
            };
            var Accordian = __webpack_require__(4551);
            let CategoriesSection = param => {
                    let {
                        data,
                        isMobile
                    } = param;
                    return (0, jsx_runtime.jsxs)("div", {
                        className: "flex w-full flex-col gap-4 px-4 py-2 lg:col-span-2",
                        children: [(0, jsx_runtime.jsx)(Button.z, {
                            href: data.link,
                            className: "",
                            children: (0, jsx_runtime.jsx)("h2", {
                                className: "px-2 text-2xl font-medium leading-tight tracking-normal",
                                children: data.label
                            })
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "grid w-full grid-flow-row content-start items-start gap-4 lg:grid-flow-col",
                            children: data.categories.map(category => (0, jsx_runtime.jsx)(Accordian.G, {
                                forceOpen: !isMobile,
                                className: "pb-1",
                                icons: {
                                    opened: fa.s$2,
                                    closed: fa.RiI
                                },
                                heading: (0, jsx_runtime.jsx)(Button.z, {
                                    href: category.link || void 0,
                                    fallback: "p",
                                    className: "px-2 py-1 font-medium",
                                    children: category.label
                                }),
                                children: (0, jsx_runtime.jsx)("div", {
                                    className: "grid grid-flow-row items-stretch gap-1",
                                    children: category.links.map(link => (0, jsx_runtime.jsx)(menu.v.Item, {
                                        as: "li",
                                        className: "grid",
                                        children: (0, jsx_runtime.jsx)(Button.z, {
                                            href: link.link,
                                            className: "hover:text-neutral-1000 text-smr rounded-lg bg-white/0 p-2 text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-white",
                                            children: link.label
                                        })
                                    }, link.label))
                                })
                            }, category.label))
                        })]
                    })
                },
                SubPageButton = param => {
                    let {
                        label,
                        onClick
                    } = param;
                    return (0, jsx_runtime.jsxs)(Button.z, {
                        onClick: () => onClick(),
                        className: "grid w-full grid-flow-col items-center justify-between rounded-lg px-4 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900",
                        children: [label, (0, jsx_runtime.jsx)(fa.Dli, {
                            className: "h-3 w-3 text-neutral-500 transition group-hover:text-inherit"
                        })]
                    })
                },
                MobileMenu = param => {
                    let {
                        isOpen,
                        onClose,
                        data,
                        darkMode
                    } = param, [subPageData, setSubPageData] = (0, react.useState)(null), locale = (0, useLocale.b)(), isEnLocale = "en" === locale, hasCreateLinks = data.create.categories.reduce((acc, category) => acc.concat(category.links), []).length > 0;
                    return (0, jsx_runtime.jsx)(dialog.V, {
                        open: isOpen,
                        className: "dark:bg-neutral-1000 fixed inset-0 z-50 h-screen w-screen bg-white",
                        onClose: () => null,
                        children: (0, jsx_runtime.jsxs)(dialog.V.Panel, {
                            as: "div",
                            className: "grid h-full grid-rows-[auto_1fr] gap-2",
                            children: [(0, jsx_runtime.jsxs)("div", {
                                className: "grid grid-flow-col items-center justify-between gap-2 p-4",
                                children: [subPageData ? (0, jsx_runtime.jsxs)(Button.z, {
                                    onClick: () => setSubPageData(null),
                                    variant: "ghost",
                                    children: [(0, jsx_runtime.jsx)(fa.bUI, {
                                        className: "-ml-1 h-4 w-4"
                                    }), (0, jsx_runtime.jsx)(dialog.V.Title, {
                                        className: "text-2xl font-normal leading-[26px]",
                                        children: subPageData.title
                                    })]
                                }) : (0, jsx_runtime.jsx)(LogoButton, {
                                    color: darkMode ? "white" : "black",
                                    href: "./index.html",
                                    className: "mr-1 p-1 xl:mr-2 xl:p-2"
                                }), (0, jsx_runtime.jsx)(Button.z, {
                                    variant: "secondary",
                                    size: "custom",
                                    className: "p-4",
                                    onClick: onClose,
                                    children: (0, jsx_runtime.jsx)(fa.aHS, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "grid h-full w-full grid-flow-row content-between gap-4 overflow-y-auto px-4 pb-6",
                                children: [subPageData ? (0, jsx_runtime.jsxs)(menu.v, {
                                    as: "ul",
                                    className: "grid grid-cols-1 gap-4  ".concat(subPageData.resource && "md:grid-cols-2"),
                                    children: [subPageData.resource && (0, jsx_runtime.jsx)(ResourceSection, {
                                        data: subPageData.resource
                                    }), subPageData.resources && (0, jsx_runtime.jsx)(ResourcesSection, {
                                        data: subPageData.resources
                                    }), subPageData.categories && (0, jsx_runtime.jsx)(CategoriesSection, {
                                        data: subPageData.categories,
                                        isMobile: !0
                                    })]
                                }) : (0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-row gap-2",
                                    children: [(0, jsx_runtime.jsx)(SubPageButton, {
                                        label: data.tools.label,
                                        onClick: () => setSubPageData({
                                            title: data.tools.label,
                                            resource: data.products
                                        })
                                    }), hasCreateLinks && (0, jsx_runtime.jsx)(SubPageButton, {
                                        label: data.useCases.label,
                                        onClick: () => setSubPageData({
                                            title: data.useCases.label,
                                            resource: isEnLocale ? data.useCases : null,
                                            categories: data.create
                                        })
                                    }), isEnLocale && (0, jsx_runtime.jsx)(SubPageButton, {
                                        label: data.resources.label,
                                        onClick: () => setSubPageData({
                                            title: data.resources.label,
                                            resources: data.resources.links
                                        })
                                    }), data.links.map(link => (0, jsx_runtime.jsx)(Button.z, {
                                        href: link.link,
                                        className: "w-full rounded-lg px-4 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900",
                                        children: link.label
                                    }, link.label))]
                                })]
                            })]
                        })
                    })
                },
                Navigation = param => {
                    let {
                        data,
                        darkMode,
                        className
                    } = param, isAuthenticated = (0, useIsAuthenticated.k)(), [isMobileMenuOpen, setIsMobileMenuOpen] = (0, react.useState)(!1), {
                        isContactSalesLink,
                        enrichContactSalesLink
                    } = (0, useContactSalesLinkEnrichment.B)();
                    (0, usePathChange.l)(() => setIsMobileMenuOpen(!1));
                    let rightLink = data.links[0] ? data.links[data.links.length - 1] : null,
                        leftLinks = data.links.length > 1 ? data.links.slice(0, -1) : [],
                        locale = (0, useLocale.b)(),
                        isEnLocale = "en" === locale,
                        hasCreateLinks = data.create.categories.reduce((acc, category) => acc.concat(category.links), []).length > 0;
                    return (0, jsx_runtime.jsxs)("nav", {
                        className: (0, clsx_m.Z)("dark:bg-neutral-1000/80 home:bg-homepage w-full bg-white/80 backdrop-blur-md dark:text-white", className),
                        children: [(0, jsx_runtime.jsx)("div", {
                            className: "relative mx-auto w-full max-w-screen-2xl p-4",
                            children: (0, jsx_runtime.jsxs)("div", {
                                className: "mx-auto grid max-w-none grid-flow-col gap-2",
                                children: [(0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-col items-center justify-start gap-2",
                                    children: [(0, jsx_runtime.jsx)(LogoButton, {
                                        dataTestId: "@navigation/logo-button",
                                        color: darkMode ? "white" : "black",
                                        href: "./index.html",
                                        className: "mr-1 p-1 xl:mr-2 xl:p-2"
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "hidden grid-flow-col items-center justify-center gap-2 lg:grid",
                                        children: [(0, jsx_runtime.jsx)(DropdownMenu, {
                                            label: data.products.label,
                                            link: data.tools.link,
                                            children: (0, jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-1 justify-items-stretch gap-4 p-6",
                                                children: (0, jsx_runtime.jsx)(ResourcesSection, {
                                                    data: data.products.links
                                                })
                                            })
                                        }), hasCreateLinks && (0, jsx_runtime.jsx)(DropdownMenu, {
                                            label: data.useCases.label,
                                            link: data.create.link,
                                            children: (0, jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-1 justify-items-stretch gap-4 p-6 lg:grid-cols-3",
                                                children: [isEnLocale && (0, jsx_runtime.jsx)(ResourceSection, {
                                                    data: data.useCases
                                                }), (0, jsx_runtime.jsx)(CategoriesSection, {
                                                    data: data.create
                                                })]
                                            })
                                        }), isEnLocale && (0, jsx_runtime.jsx)(DropdownMenu, {
                                            label: data.resources.label,
                                            link: data.resources.link,
                                            children: (0, jsx_runtime.jsx)(ResourcesSection, {
                                                data: data.resources.links
                                            })
                                        }), leftLinks.map(link => (0, jsx_runtime.jsx)(Button.z, {
                                            variant: "ghost",
                                            size: "custom",
                                            className: "p-3 dark:bg-transparent",
                                            href: link.link,
                                            children: link.label
                                        }, link.label))]
                                    })]
                                }), (0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-col items-center justify-end gap-2",
                                    children: [(0, jsx_runtime.jsxs)("div", {
                                        className: "hidden grid-flow-col gap-2 lg:grid",
                                        children: [rightLink && (0, jsx_runtime.jsx)(Button.z, {
                                            variant: "ghost",
                                            size: "custom",
                                            className: "p-3",
                                            href: isContactSalesLink(rightLink.link) ? enrichContactSalesLink(rightLink.link) : rightLink.link,
                                            children: rightLink.label
                                        })]
                                    })]
                                })]
                            })
                        }), (0, jsx_runtime.jsx)(MobileMenu, {
                            isOpen: isMobileMenuOpen,
                            onClose: () => setIsMobileMenuOpen(!1),
                            data: data,
                            darkMode: darkMode
                        })]
                    })
                };
            var Markdown = __webpack_require__(8897),
                index_es = __webpack_require__(4591);
            let Banner = param => {
                    let {
                        data
                    } = param, {
                        bgColor,
                        color,
                        bannerText,
                        cta,
                        buttonBgColor,
                        buttonColor
                    } = data;
                    return (0, jsx_runtime.jsxs)("aside", {
                        "data-testid": "@banner",
                        className: "flex items-center justify-center space-x-2 px-4 py-3 md:px-2",
                        style: {
                            backgroundColor: bgColor || "#0098FD",
                            color: color || "#FFFFFF"
                        },
                        children: [(0, jsx_runtime.jsx)(Markdown.U, {
                            content: bannerText,
                            className: "text-xs text-inherit md:text-sm",
                            proseClassName: "prose prose-a:underline"
                        }), cta && (0, jsx_runtime.jsx)(Button.z, {
                            href: cta.link,
                            variant: "primary",
                            size: "custom",
                            className: "inline-grid whitespace-nowrap !rounded-full px-3 py-1.5 text-sm",
                            style: {
                                backgroundColor: buttonBgColor || "#FFFFFF",
                                color: buttonColor || "#000000"
                            },
                            logEvent() {
                                var ref;
                                return index_es.px.bannerCtaClicked({
                                    value: null == data ? void 0 : null === (ref = data.cta) || void 0 === ref ? void 0 : ref.link,
                                    pathname: window.location.pathname
                                }).promise
                            },
                            enableTrackingParams: !0,
                            children: cta.text
                        })]
                    })
                },
                Header = param => {
                    let {
                        navData,
                        darkMode,
                        className
                    } = param;
                    return (0, jsx_runtime.jsxs)("header", {
                        className: "sticky top-0 z-40",
                        children: [navData.banner && navData.banner.active && (0, jsx_runtime.jsx)(Banner, {
                            data: navData.banner
                        }), (0, jsx_runtime.jsx)(Navigation, {
                            data: navData,
                            darkMode: darkMode,
                            className: className
                        })]
                    })
                };
            var index_esm = __webpack_require__(4905),
                transformLocale = __webpack_require__(9479),
                IconButton = __webpack_require__(4923);
            let LanguageSelector = param => {
                    let {
                        locale,
                        locales
                    } = param;
                    return (0, jsx_runtime.jsxs)(menu.v, {
                        as: "div",
                        className: "relative text-sm",
                        children: [(0, jsx_runtime.jsxs)(menu.v.Button, {
                            className: "grid grid-flow-col items-center gap-3 text-start transition hover:text-blue-600",
                            children: [(0, transformLocale.nU)(null != locale ? locale : "en"), (0, jsx_runtime.jsx)(fa.RiI, {
                                className: "h-3 w-3"
                            })]
                        }), (0, jsx_runtime.jsx)(menu.v.Items, {
                            as: "ul",
                            unmount: !1,
                            className: "absolute bottom-full mb-2 grid max-h-96 grid-flow-row gap-0.5 overflow-y-auto rounded-lg bg-white p-4 text-neutral-600 shadow-xl",
                            children: locales.filter(l => l.locale.toLocaleLowerCase() !== (null == locale ? void 0 : locale.toLocaleLowerCase())).map(l => ({
                                ...l,
                                text: (0, transformLocale.nU)(l.locale)
                            })).sort((a, b) => a.text.localeCompare(b.text)).map(l => (0, jsx_runtime.jsx)(menu.v.Item, {
                                as: "li",
                                className: "grid w-full",
                                children(param) {
                                    let {
                                        active
                                    } = param;
                                    return (0, jsx_runtime.jsx)(Button.z, {
                                        className: (0, index_esm.cx)("whitespace-nowrap rounded-md p-2 font-medium transition hover:text-blue-600", active ? "bg-neutral-100" : "bg-white"),
                                        href: l.link,
                                        children: l.text
                                    })
                                }
                            }, l.locale))
                        })]
                    })
                },
                Footer = param => {
                    let {
                        data,
                        locales,
                        homepage
                    } = param, locale = (0, useLocale.b)();
                    return (0, jsx_runtime.jsx)("footer", {
                        className: "home:bg-homepage home:text-neutral-800 bg-black text-neutral-100",
                        children: (0, jsx_runtime.jsx)("div", {
                            className: "mx-auto max-w-screen-2xl px-6 pb-32 pt-12",
                            children: (0, jsx_runtime.jsxs)("div", {
                                className: "relative grid grid-flow-row grid-cols-1 items-start justify-start gap-8 lg:grid-cols-6",
                                children: [(0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-row gap-6 pr-2",
                                    children: [(0, jsx_runtime.jsx)(LogoButton, {
                                        href: "./index.html",
                                        color: homepage ? "black" : "white"
                                    }), (0, jsx_runtime.jsx)("p", {
                                        className: "home:text-neutral-700 text-neutral-200",
                                        children: data.subtitle
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "grid grid-flow-col justify-start gap-2",
                                        children: [(0, jsx_runtime.jsx)(IconButton.h, {
                                            label: "Twitter",
                                            href: "https://twitter.com/",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, jsx_runtime.jsx)(fa.fWC, {})
                                        }), (0, jsx_runtime.jsx)(IconButton.h, {
                                            label: "YouTube",
                                            href: "https://www.youtube.com",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, jsx_runtime.jsx)(fa.V2E, {})
                                        }), (0, jsx_runtime.jsx)(IconButton.h, {
                                            label: "Twitter",
                                            href: "https://www.instagram.com/",
                                            className: "home:bg-blue-600 home:text-white rounded-full p-1.5",
                                            children: (0, jsx_runtime.jsx)(fa.Zf_, {})
                                        })]
                                    }), (0, jsx_runtime.jsx)("p", {
                                        className: "text-xs text-neutral-500",
                                        children: "\xa9 Copyright ".concat(new Date().getFullYear())
                                    })]
                                }), data.categories.map(param => {
                                    let {
                                        label,
                                        link,
                                        links
                                    } = param;
                                    return (0, jsx_runtime.jsxs)("div", {
                                        className: "grid grid-flow-row gap-[18px]",
                                        children: [(0, jsx_runtime.jsx)(Button.z, {
                                            href: link || void 0,
                                            className: "font-medium",
                                            fallback: "p",
                                            children: label
                                        }), null == links ? void 0 : links.map(param => {
                                            let {
                                                label,
                                                link
                                            } = param;
                                            return (0, jsx_runtime.jsx)(Button.z, {
                                                href: link,
                                                className: "home:text-neutral-600 text-sm text-neutral-400",
                                                children: label
                                            }, label)
                                        })]
                                    }, label)
                                })]
                            })
                        })
                    })
                };
            var Breadcrumb = __webpack_require__(1948);
            let Layout = param => {
                let {
                    locales,
                    navData,
                    breadcrumbData,
                    footerData,
                    children,
                    darkMode,
                    homepage,
                    className
                } = param;
                return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [(0, jsx_runtime.jsx)(Header, {
                        navData: navData,
                        darkMode: !!darkMode,
                        className: className
                    }), breadcrumbData && (0, jsx_runtime.jsx)(Breadcrumb.a, {
                        data: breadcrumbData
                    }), (0, jsx_runtime.jsx)("main", {
                        children: children
                    }), (0, jsx_runtime.jsx)(Footer, {
                        data: footerData,
                        locales: locales,
                        homepage: !!homepage
                    })]
                })
            }
        }
    }
]);