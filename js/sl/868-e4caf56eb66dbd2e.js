"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [868], {
        4551: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                G: function() {
                    return Accordian
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6319),
                _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9442),
                clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6277);
            let Accordian = param => {
                let {
                    heading,
                    icons,
                    className,
                    openClassName,
                    iconClassName,
                    children,
                    forceOpen
                } = param;
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.p, {
                    as: "div",
                    className: "group",
                    defaultOpen: forceOpen,
                    children(param) {
                        let {
                            open
                        } = param, Icon = open || forceOpen ? icons.opened : icons.closed;
                        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.p.Button, {
                                className: (0, clsx__WEBPACK_IMPORTED_MODULE_2__.W)("grid w-full grid-flow-col items-center justify-between gap-3", className, (open || forceOpen) && openClassName, (open || forceOpen) && "opened"),
                                disabled: forceOpen,
                                children: [heading, !forceOpen && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {
                                    className: (0, clsx__WEBPACK_IMPORTED_MODULE_2__.W)("mr-2 h-4 w-4 text-blue-600 transition group-hover:text-inherit", iconClassName)
                                })]
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u, {
                                show: forceOpen || open,
                                className: "overflow-hidden",
                                enter: "transition-all duration-200 ease-in",
                                enterFrom: "transform max-h-0 scale-95 opacity-0",
                                enterTo: "transform max-h-screen scale-100 opacity-100",
                                leave: "transition-all duration-400 ease-out",
                                leaveFrom: "transform max-h-screen scale-100 opacity-100",
                                leaveTo: "transform max-h-0 scale-95 opacity-0",
                                unmount: !1,
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.p.Panel, {
                                    static: !0,
                                    children: children
                                })
                            })]
                        })
                    }
                })
            }
        },
        1948: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                a: function() {
                    return Breadcrumb
                }
            });
            var jsx_runtime = __webpack_require__(2322),
                md = __webpack_require__(2288),
                clsx_m = __webpack_require__(6277),
                StructuredMarkup = __webpack_require__(4501);
            let BreadcrumbSchema = param => {
                let {
                    data
                } = param, schema = {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: null == data ? void 0 : data.map((pathData, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: pathData.title,
                        item: "#".concat(pathData.link)
                    }))
                };
                return (0, jsx_runtime.jsx)(StructuredMarkup.l, {
                    schema: schema
                })
            };
            var Button = __webpack_require__(5495);
            let Breadcrumb = param => {
                let {
                    data,
                    rebrand
                } = param;
                return (0, jsx_runtime.jsxs)("div", {
                    className: (0, clsx_m.Z)(rebrand ? "bg:transparent" : "bg-white", "home:bg-transparent mx-auto mb-4 max-w-screen-2xl bg-transparent px-6 pt-4"),
                    children: [(0, jsx_runtime.jsx)(BreadcrumbSchema, {
                        data: data
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "home:border-0 home:pb-0 border-b border-neutral-50 pb-4 text-xs text-neutral-200 md:text-sm",
                        children: (0, jsx_runtime.jsx)("nav", {
                            className: "flex",
                            "aria-label": "breadcrumb",
                            children: (0, jsx_runtime.jsx)("ol", {
                                role: "list",
                                className: "grid grid-flow-col items-center justify-center gap-2",
                                children: data.map((pathData, index) => {
                                    let isLast = index === data.length - 1;
                                    return (0, jsx_runtime.jsxs)("li", {
                                        "aria-current": isLast ? "page" : void 0,
                                        className: "grid grid-flow-col items-center gap-2",
                                        children: [0 !== index && (0, jsx_runtime.jsx)("span", {
                                            role: "presentation",
                                            className: "md:px-2",
                                            children: (0, jsx_runtime.jsx)(md.AeI, {
                                                className: "h-5 w-5 text-neutral-200 rtl:-scale-x-100"
                                            })
                                        }), (0, jsx_runtime.jsx)(Button.z, {
                                            href: isLast ? void 0 : pathData.link,
                                            className: (0, clsx_m.Z)(isLast && "cursor-default", "overflow-hidden truncate whitespace-nowrap font-medium capitalize text-neutral-600 hover:text-neutral-800"),
                                            children: pathData.title
                                        })]
                                    }, pathData.link)
                                })
                            })
                        })
                    })]
                })
            }
        },
        4923: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                h: function() {
                    return IconButton
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495);

            function IconButton(param) {
                let {
                    label,
                    children,
                    ...props
                } = param;
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_1__.z, {
                    ...props,
                    children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "sr-only",
                        children: label
                    }), children]
                })
            }
        },
        2729: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                Ee: function() {
                    return Image
                },
                _m: function() {
                    return loader
                },
                aT: function() {
                    return ImageFill
                },
                zL: function() {
                    return getCdnImageSrc
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6277),
                next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6577),
                next_image__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
            let assetsUrl = "https://localhost/i-tech",
                cloudflareHostnames = [""],
                join = function() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return args.join("/").replace(/\/+/g, "/")
                },
                loader = param => {
                    let {
                        src,
                        width,
                        quality = 75
                    } = param, isAbsoluteUrl = src.startsWith("http"), imageUrl = new URL(isAbsoluteUrl ? src : join(assetsUrl, src));
                    if(imageUrl.pathname == "/img/logo.png") {
                        imageUrl.pathname = "https://bedjema.github.io/itech-r/img/logo.png";
                        return ("https://bedjema.github.io/itech-r/img/logo.png")
                    } else {
                    return (!isAbsoluteUrl || cloudflareHostnames.includes(imageUrl.hostname)), imageUrl.toString()
                }

                },
                getCdnImageSrc = function(hash, ext) {
                    let absoluteUrl = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return absoluteUrl ? "".concat(hash).concat(ext) : "".concat(hash).concat(ext)
                },
                getSizes = (opts, width) => (0, clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("(min-width: 1536px) ".concat(width, "px,"), "(min-width: 1280px) ".concat(opts.xl, "px,"), "(min-width: 1024px) ".concat(opts.lg, "px,"), "(min-width: 768px) ".concat(opts.md, "px,"), "(min-width: 640px) ".concat(opts.sm, "px,"), "".concat(opts.xs, "px")),
                Image = props => {
                    let {
                        src,
                        hash,
                        ext,
                        width,
                        height,
                        sizes,
                        quality,
                        ...rest
                    } = props, imageSrc = src || getCdnImageSrc(hash, ext, !1), imageSizes = sizes && getSizes(sizes, width);
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1___default(), {
                        ...rest,
                        src: imageSrc,
                        height: height,
                        width: width,
                        loader: loader
                    })
                },
                ImageFill = props => {
                    let {
                        src,
                        hash,
                        ext,
                        width,
                        sizes,
                        alt,
                        quality
                    } = props, imageSrc = src || getCdnImageSrc(hash, ext, !1), imageSizes = sizes && getSizes(sizes, width);
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1___default(), {
                        alt: alt,
                        src: imageSrc,
                        sizes: imageSizes,
                        fill: !0,
                        style: {
                            objectFit: "contain"
                        },
                        loader: loader,
                        quality: quality
                    })
                }
        },
        8897: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                U: function() {
                    return Markdown
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4074),
                _utils_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5730);
            let Markdown = param => {
                let {
                    content,
                    className,
                    proseClassName,
                    ...props
                } = param;
                return content ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_markdown__WEBPACK_IMPORTED_MODULE_1__.D, {
                    ...props,
                    skipHtml: !0,
                    className: (0, _utils_class_names__WEBPACK_IMPORTED_MODULE_2__.cn)(proseClassName || "prose prose-neutral prose-a:no-underline prose-a:text-blue-600", "marker:text-xl marker:text-blue-600", className),
                    children: content
                }) : null
            }
        },
        5368: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                h_: function() {
                    return Meta
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7729),
                next_head__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__),
                utils_i18n_transformLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9479),
                next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5632),
                zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(195);
            let hexSchema = zod__WEBPACK_IMPORTED_MODULE_4__.z.string().regex(/^#[0-9a-f]{6}$/i);
            zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
                title: zod__WEBPACK_IMPORTED_MODULE_4__.z.string(),
                image: zod__WEBPACK_IMPORTED_MODULE_4__.z.string().url(),
                ctaText: zod__WEBPACK_IMPORTED_MODULE_4__.z.string(),
                theme: zod__WEBPACK_IMPORTED_MODULE_4__.z.tuple([hexSchema, hexSchema])
            });
            let VEED_ORIGIN = "#",
                Meta = param => {
                    let dynamicImageUrl, {
                            title,
                            description,
                            locales,
                            dynamicOgImage,
                            ogImageUrl,
                            themeColor = "#ECEEEE"
                        } = param,
                        router = (0, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
                        pathname = router.asPath.split("?")[0];
                    if (dynamicOgImage) {
                        let data = encodeURIComponent(JSON.stringify(dynamicOgImage));
                        dynamicImageUrl = "".concat("#", "/landing-api/og-image?data=").concat(data)
                    }
                    return ogImageUrl = ogImageUrl || dynamicImageUrl || "", (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_1___default(), {
                        children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width, maximum-scale=1"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                            children: title
                        }, "title"), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "description",
                            content: description
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:site_name",
                            content: "I-TECH"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(VEED_ORIGIN).concat("/" === pathname ? "" : pathname)
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:title",
                            content: title
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:description",
                            content: description
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:image",
                            content: ogImageUrl
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:image:secure_url",
                            content: ogImageUrl
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:image:width",
                            content: "1200"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "twitter:site",
                            content: "@veedstudio"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "twitter:creator",
                            content: "@veedstudio"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "twitter:title",
                            content: title
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "twitter:description",
                            content: description
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "twitter:image",
                            content: ogImageUrl
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "theme-color",
                            content: themeColor
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                            name: "google-site-verification",
                            content: "KSFOy8apNadNZPpqvNQPJ0qDIEugKU67qI8xyNt55JY"
                        }), locales ? locales.map((locale, index) => {
                            let alternateUrl = "".concat(VEED_ORIGIN).concat("en" === locale.locale && "homepage" === locale.slug ? "" : locale.link),
                                hrefLang = "en" === locale.locale ? "x-default" : (0, utils_i18n_transformLocale__WEBPACK_IMPORTED_MODULE_2__.jR)(locale.locale);
                            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                                rel: "alternate",
                                href: alternateUrl,
                                hrefLang: hrefLang
                            }, index)
                        }) : null]
                    })
                }
        },
        4501: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                l: function() {
                    return StructuredMarkup
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7729),
                next_head__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
            let StructuredMarkup = param => {
                let {
                    schema
                } = param;
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_1___default(), {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema)
                        }
                    })
                })
            }
        },
        884: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                B: function() {
                    return useContactSalesEnrichment
                }
            });
            var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5632);
            let useContactSalesEnrichment = () => {
                    let router = (0, next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(),
                        isContactSalesLink = link => link.toLowerCase().includes("/contact-sales"),
                        enrichContactSalesLink = link => {
                            let url = new URL(link),
                                path = removeQueryOrHashFromPath(router.asPath);
                            return url.searchParams.append("ref", "Landing Pages Top Navbar, URL Path: ".concat(path)), url.toString()
                        };
                    return {
                        isContactSalesLink,
                        enrichContactSalesLink
                    }
                },
                removeQueryOrHashFromPath = path => path.split(/[?#]/)[0]
        },
        5453: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            let apiClient;
            __webpack_require__.d(__webpack_exports__, {
                k: function() {
                    return useIsAuthenticated
                }
            });
            var react = __webpack_require__(2784),
                lib = __webpack_require__(4826);
            let API_URL = "/api",
                getApiClient = () => apiClient || (apiClient = new lib.VeedApiClient({
                    legacyApiPath: API_URL
                }, API_URL)),
                useIsAuthenticated = () => {
                    let [isAuthenticated, setIsAuthenticated] = (0, react.useState)(!1), apiClient = getApiClient(), apiClientAuthenticated = apiClient.isAuthenticated();
                    return (0, react.useEffect)(() => {
                        setIsAuthenticated(apiClientAuthenticated)
                    }, [apiClientAuthenticated]), isAuthenticated
                }
        },
        4181: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                b: function() {
                    return useLocale
                }
            });
            var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5632);
            let useLocale = () => {
                let router = (0, next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
                return router.locale || "en"
            }
        },
        1675: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                l: function() {
                    return usePathChange
                }
            });
            var react = __webpack_require__(2784),
                next_router = __webpack_require__(5632);
            let usePath = () => {
                    let router = (0, next_router.useRouter)();
                    return router.asPath
                },
                usePathChange = onPathChange => {
                    let path = usePath();
                    (0, react.useEffect)(() => {
                        onPathChange(path)
                    }, [path])
                }
        },
        5730: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                cn: function() {
                    return cn
                }
            });
            var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6277),
                tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
            let cn = function() {
                for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) inputs[_key] = arguments[_key];
                return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m6)((0, clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))
            }
        },
        7309: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            var Direction, Position, Direction1, Position1;
            __webpack_require__.d(__webpack_exports__, {
                L: function() {
                    return Position
                },
                N: function() {
                    return Direction
                }
            }), (Direction1 = Direction || (Direction = {})).LTR = "ltr", Direction1.RTL = "rtl", (Position1 = Position || (Position = {})).TOP = "top", Position1.BOTTOM = "bottom"
        },
        9479: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                jR: function() {
                    return getRegionIndependentLocale
                },
                nU: function() {
                    return localiseLanguageText
                }
            });
            let supportedLanguages_supportedLanguages = [{
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
            supportedLanguages_supportedLanguages.filter(language => language.rtl).map(language => language.code), __webpack_require__(7309);
            let localiseLanguageText = locale => {
                    let result = supportedLanguages_supportedLanguages.filter(x => x.code === locale);
                    return result[0] ? result[0].name : "English"
                },
                getRegionIndependentLocale = locale => {
                    let result = supportedLanguages_supportedLanguages.filter(x => x.code === locale);
                    return result[0] ? result[0].language : locale
                }
        }
    }
]);