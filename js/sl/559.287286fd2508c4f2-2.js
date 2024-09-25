"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [559], {
        2351: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                R: function() {
                    return Marquee
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6277),
                react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
            let Marquee = param => {
                let {
                    children,
                    direction,
                    pauseOnHover,
                    className,
                    numOfChildren = 2,
                    duration = 45
                } = param, [isHovered, setIsHovered] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: (0, clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(className, "w-full overflow-hidden"),
                    onMouseOver: () => setIsHovered(!0),
                    onMouseOut: () => setIsHovered(!1),
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "animate-marquee mx-auto flex w-fit items-center",
                        style: {
                            "--marquee-direction": "ltr" === direction ? "reverse" : "normal",
                            "--marquee-play-state": pauseOnHover && isHovered ? "paused" : "running",
                            "--marquee-duration": "".concat(duration, "s")
                        },
                        children: Array(numOfChildren).fill(0).map(() => children)
                    })
                })
            }
        },
        7803: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                n: function() {
                    return Video
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6277),
                next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5237),
                next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__),
                react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784),
                _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2729);
            let ReactPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(372).then(__webpack_require__.bind(__webpack_require__, 4372)), {
                    loadableGenerated: {
                        webpack: () => [4372]
                    },
                    ssr: !1
                }),
                Video = param => {
                    var ref, _controls;
                    let {
                        thumbnail,
                        showThumbnail,
                        title,
                        className,
                        position,
                        muted = !0,
                        preloadThumbnail = !1,
                        loop = !1,
                        borderRadius = "0px",
                        ...props
                    } = param;
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (0, clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className, "relative mx-auto h-full w-full max-w-full"),
                        children: [thumbnail && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.Ee, {
                            ...thumbnail,
                            className: "h-full w-full object-cover",
                            priority: preloadThumbnail
                        }), (!showThumbnail || !thumbnail) && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactPlayer, {
                            ...props,
                            playing: null !== (ref = !showThumbnail && props.playing) && void 0 !== ref && ref,
                            muted: muted,
                            loop: loop,
                            controls: null === (_controls = props.controls) || void 0 === _controls || _controls,
                            wrapper: (0, react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((param, ref) => {
                                let {
                                    children
                                } = param;
                                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    ref: ref,
                                    title: title,
                                    className: (0, clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(position, "inset-0 z-10"),
                                    children: children
                                })
                            }),
                            config: {
                                file: {
                                    attributes: {
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius
                                        }
                                    }
                                }
                            }
                        })]
                    })
                }
        },
        3773: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                J: function() {
                    return CallToAction
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4905),
                clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6277),
                ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495),
                ui_tailwind_icons_ArrowIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6005);
            let getClassName = (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.j)("inline-grid grid-flow-col items-center justify-center gap-4 whitespace-nowrap rounded-full px-8 py-4 font-medium text-base md:text-lg group", {
                    variants: {
                        variant: {
                            primary: "bg-blue-600 text-white hover:bg-blue-700",
                            outline: "bg-transparent text-neutral-1000 hover:bg-neutral-100 border-2 border-neutral-1000",
                            inverted: "bg-white text-blue-600 hover:text-blue-700",
                            white: "bg-white text-neutral-1000 hover:bg-neutral-100"
                        }
                    }
                }),
                CallToAction = param => {
                    let {
                        variant,
                        children,
                        ...props
                    } = param, className = (0, clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(props.className, getClassName({
                        variant
                    }));
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_1__.z, {
                        ...props,
                        className: className,
                        enableTrackingParams: !0,
                        children: [children, (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_icons_ArrowIcon__WEBPACK_IMPORTED_MODULE_2__.e, {
                            className: "transition duration-100 ease-in-out ltr:group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                        })]
                    })
                }
        },
        1185: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                X: function() {
                    return Heading
                },
                x: function() {
                    return SupportingText
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6277);
            let Heading = param => {
                    let {
                        as,
                        className,
                        children,
                        ...props
                    } = param;
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(as, {
                        ...props,
                        className: (0, clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("text-4xl font-medium leading-none tracking-tight md:text-5xl lg:text-6xl", className),
                        children: children
                    })
                },
                SupportingText = param => {
                    let {
                        className,
                        children,
                        ...props
                    } = param;
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        ...props,
                        className: (0, clsx__WEBPACK_IMPORTED_MODULE_1__.Z)(className, "text-xs font-medium uppercase leading-none tracking-wide text-blue-600 md:text-sm xl:text-base"),
                        children: children
                    })
                }
        },
        9160: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                f: function() {
                    return AggregateRatingSchema
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                _StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4501);
            let AggregateRatingSchema = param => {
                let {
                    title,
                    description
                } = param;
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__.l, {
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        url: "https://www.veed.io",
                        name: "VEED, ".concat(title),
                        description,
                        operatingSystem: "Windows, MacOS, Chrome OS, Linux, iOS, Android",
                        applicationCategory: "MultimediaApplication",
                        applicationSubCategory: "Video Editor",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: 4.9,
                            bestRating: 5,
                            ratingCount: 79
                        },
                        offers: {
                            "@type": "Offer",
                            price: 0,
                            priceCurrency: "GBP"
                        }
                    }
                })
            }
        },
        5279: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                N: function() {
                    return FAQSchema
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                utils_filterBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4217),
                _StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4501);
            let FAQSchema = param => {
                let {
                    section
                } = param, schema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: (0, utils_filterBoolean__WEBPACK_IMPORTED_MODULE_2__.g)(null == section ? void 0 : section.map(faq => faq.heading && faq.content ? {
                        "@type": "Question",
                        name: faq.heading,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: faq.content
                        }
                    } : null))
                };
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__.l, {
                    schema: schema
                })
            }
        },
        4835: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                i: function() {
                    return HowToSchema
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                utils_youtubeId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7778),
                utils_filterBoolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4217),
                next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5632),
                _StructuredMarkup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4501);
            let HowToSchema = param => {
                let {
                    heading,
                    description,
                    howToItems,
                    howToTime,
                    video
                } = param, router = (0, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(), pathname = router.asPath.split("?")[0];
                if ("/tools/solutions" === pathname) return null;
                let schema = {
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    name: heading || "How to use VEED",
                    step: (0, utils_filterBoolean__WEBPACK_IMPORTED_MODULE_3__.g)(null == howToItems ? void 0 : howToItems.map(howTo => howTo.heading && howTo.content ? {
                        "@type": "HowToStep",
                        name: howTo.heading,
                        itemListElement: [{
                            "@type": "HowToDirection",
                            text: howTo.content
                        }]
                    } : null)),
                    video: video ? {
                        "@type": "VideoObject",
                        name: video.title,
                        description,
                        contentUrl: "".concat(video.url),
                        embedUrl: "https://www.youtube.com/embed/".concat((0, utils_youtubeId__WEBPACK_IMPORTED_MODULE_4__.i)(video.url)),
                        thumbnailUrl: "http://img.youtube.com/vi/".concat((0, utils_youtubeId__WEBPACK_IMPORTED_MODULE_4__.i)(video.url), "/sddefault.jpg"),
                        uploadDate: "2022-07-09T17:23:47.793Z",
                        duration: howToTime || "PT1M54S"
                    } : void 0
                };
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_2__.l, {
                    schema: schema
                })
            }
        },
        1225: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                a: function() {
                    return VideoSchema
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                utils_youtubeId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7778),
                _StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4501);
            let VideoSchema = param => {
                let {
                    video,
                    description,
                    howToTime
                } = param, schema = {
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    name: video.title,
                    contentUrl: video.url,
                    embedUrl: "https://www.youtube.com/embed/".concat((0, utils_youtubeId__WEBPACK_IMPORTED_MODULE_2__.i)(video.url)),
                    thumbnailUrl: "http://img.youtube.com/vi/".concat((0, utils_youtubeId__WEBPACK_IMPORTED_MODULE_2__.i)(video.url), "/sddefault.jpg"),
                    description,
                    duration: howToTime || "PT3M",
                    productionCompany: {
                        "@type": "Organization",
                        url: "#",
                        name: "I-TECH"
                    },
                    author: {
                        "@type": "Organization",
                        url: "#",
                        name: "I-TECH"
                    },
                    keywords: video.title,
                    uploadDate: "2022-07-09T17:23:47.793Z"
                };
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__.l, {
                    schema: schema
                })
            }
        },
        9480: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                U: function() {
                    return TemplateImage
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2729);
            let TemplateImage = param => {
                let {
                    template
                } = param, commonProperties = {
                    className: "h-48 w-auto max-w-none transition-transform group-hover:scale-105 md:h-64 lg:h-96",
                    sizes: {
                        xs: 340,
                        sm: 340,
                        md: 454,
                        lg: 681,
                        xl: 681
                    }
                };
                return template.image ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__.Ee, {
                    ...template.image,
                    ...commonProperties
                }) : template.thumbnail ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__.Ee, {
                    alt: template.name,
                    src: template.thumbnail,
                    height: 384,
                    width: 681,
                    ...commonProperties
                }) : null
            }
        },
        5671: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                h: function() {
                    return LogoSection
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784),
                ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2729),
                ui_tailwind_components_Marquee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2351);
            let LogoReel = param => {
                    let {
                        logos,
                        ...props
                    } = param;
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Marquee__WEBPACK_IMPORTED_MODULE_3__.R, {
                        ...props,
                        children: logos.map((logo, index) => logo.image && (0, react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_2__.Ee, {
                            ...logo.image,
                            className: "mr-[6.25vw] h-6 w-auto scale-75 transform last:mr-0 md:h-8 md:scale-100",
                            key: index
                        }))
                    })
                },
                LogoSection = param => {
                    let {
                        section
                    } = param, splitAt = Math.floor(section.length / 2);
                    return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "logo-section",
                        className: "relative",
                        children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-flow-row justify-center gap-6 overflow-hidden py-12 opacity-30 md:gap-10 md:py-20",
                            children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LogoReel, {
                                logos: section.slice(0, splitAt),
                                direction: "ltr"
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LogoReel, {
                                logos: section.slice(splitAt),
                                direction: "rtl"
                            })]
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "from-homepage absolute top-0 bottom-0 left-0 w-[10%] bg-gradient-to-r to-transparent"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "from-homepage absolute top-0 bottom-0 right-0 w-[10%] bg-gradient-to-l to-transparent"
                        })]
                    })
                }
        },
        3521: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                b: function() {
                    return UVPSection
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322),
                clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6277),
                ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2729),
                ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8897),
                _homepage_Headings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
            let UVPSection = param => {
                let {
                    section
                } = param;
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    id: "uvp-section",
                    className: "mb-6 flex flex-col items-center justify-center gap-20 overflow-hidden rounded-xl bg-white py-8 px-8 md:py-12 md:px-10 lg:py-20 lg:px-16",
                    children: section.map((uvp, index) => uvp.heading || uvp.content || uvp.image ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 md:gap-20",
                        children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (0, clsx__WEBPACK_IMPORTED_MODULE_4__.W)("grid grid-flow-row content-start gap-4", index % 2 != 0 ? "md:order-last" : void 0),
                            children: [uvp.heading && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_homepage_Headings__WEBPACK_IMPORTED_MODULE_3__.X, {
                                as: "h2",
                                className: "lg:text-5xl",
                                children: uvp.heading
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_2__.U, {
                                content: uvp.content,
                                className: "max-w-full pt-4"
                            })]
                        }), uvp.image && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_1__.Ee, {
                            alt: uvp.image.alt,
                            className: "h-auto",
                            hash: uvp.image.hash,
                            ext: uvp.image.ext,
                            width: 512,
                            height: 375,
                            sizes: {
                                xs: 264,
                                sm: 512,
                                md: 264,
                                lg: 368,
                                xl: 496
                            }
                        })]
                    }, index) : null)
                })
            }
        },
        6005: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                e: function() {
                    return ArrowIcon
                }
            });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
            let ArrowIcon = param => {
                let {
                    className
                } = param;
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    width: "28",
                    height: "29",
                    viewBox: "0 0 28 29",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: className,
                    children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        clipPath: "url(#clip0_1_6)",
                        children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            d: "M26.6676 14.7662L-1.90735e-06 14.7662",
                            stroke: "currentColor",
                            strokeWidth: "1.5"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            d: "M18.0871 6L27.0345 14.7L18.0871 23.4",
                            stroke: "currentColor",
                            strokeWidth: "1.5"
                        })]
                    }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                            id: "clip0_1_6",
                            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                                width: "28",
                                height: "29",
                                fill: "white"
                            })
                        })
                    })]
                })
            }
        },
        7559: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                VideoEditorTemplate: function() {
                    return VideoEditorTemplate
                }
            });
            var jsx_runtime = __webpack_require__(2322),
                Meta = __webpack_require__(5368),
                Layout = __webpack_require__(3728),
                Image = __webpack_require__(2729),
                fi = __webpack_require__(4795),
                index_esm = __webpack_require__(4905),
                clsx_m = __webpack_require__(6277),
                Button = __webpack_require__(5495);
            let getButtonClassName = (0, index_esm.j)("inline-grid grid-flow-col items-center justify-between gap-[22px] whitespace-nowrap rounded-full px-9 py-[15px] font-medium shadow-md", {
                    variants: {
                        inverted: {
                            false: "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700",
                            true: "bg-white text-blue-600 shadow-white/20 hover:bg-neutral-100"
                        },
                        outline: {
                            true: "border text-neutral-1000 border-neutral-1000"
                        },
                        size: {
                            normal: "text-lg",
                            large: "text-xl py-4"
                        }
                    },
                    defaultVariants: {
                        inverted: !1,
                        size: "normal"
                    }
                }),
                getIconClassName = (0, index_esm.j)("shadow-neutral-1000/25 -mr-[15px] grid items-center justify-center rounded-full p-3 shadow-xl", {
                    variants: {
                        inverted: {
                            false: "bg-white text-blue-600",
                            true: "bg-blue-600 text-white"
                        },
                        outline: {
                            true: "bg-transparent !text-neutral-1000 !shadow-none"
                        }
                    },
                    defaultVariants: {
                        inverted: !1
                    }
                }),
                CallToAction = param => {
                    let {
                        text,
                        inverted,
                        outline,
                        icon,
                        bidirectional = !0,
                        size,
                        ...props
                    } = param, buttonClassName = getButtonClassName({
                        inverted,
                        outline,
                        size
                    }), iconClassName = getIconClassName({
                        inverted,
                        outline
                    });
                    bidirectional && (iconClassName = "".concat(iconClassName, "  rtl:-scale-x-100"));
                    let Icon = icon || fi.Rgz;
                    return (0, jsx_runtime.jsxs)(Button.z, {
                        ...props,
                        className: (0, clsx_m.Z)(buttonClassName, props.className),
                        enableTrackingParams: !0,
                        children: [text, (0, jsx_runtime.jsx)("div", {
                            className: iconClassName,
                            children: (0, jsx_runtime.jsx)(Icon, {
                                className: "h-[18px] w-[18px]"
                            })
                        })]
                    })
                };
            var Markdown = __webpack_require__(8897),
                constants = __webpack_require__(794),
                index_es = __webpack_require__(4591),
                enums = __webpack_require__(7309),
                urls = __webpack_require__(487),
                utils = __webpack_require__(162),
                useActivationFlow = __webpack_require__(7393),
                useLocale = __webpack_require__(4181);
            let TitleSection = param => {
                let {
                    section,
                    enSlug,
                    secondaryCTA,
                    isConverter,
                    tags
                } = param, locale = (0, useLocale.b)(), activationFlowPayload = (0, useActivationFlow.h_)({
                    title: section.heading,
                    content: section.content,
                    tags
                }), secondaryCTALink = null;
                if ((null == secondaryCTA ? void 0 : secondaryCTA.link) && secondaryCTA.text) {
                    let target = (0, urls.pM)(secondaryCTA.link) ? "_self" : "_blank";
                    secondaryCTALink = (0, jsx_runtime.jsx)(CallToAction, {
                        text: secondaryCTA.text,
                        inverted: !0,
                        outline: !0,
                        className: "mt-4 w-full",
                        href: secondaryCTA.link,
                        locale: locale,
                        target: target,
                        logEvent: () => index_es.px.lpSecondaryCtaClicked().promise
                    }, secondaryCTA.link)
                }
                return (0, jsx_runtime.jsxs)("section", {
                    "data-testid": "@titleSection",
                    id: "title-section",
                    className: "grid grid-cols-1 justify-items-center gap-10 py-8 text-center md:grid-cols-5 md:pb-14 md:pt-16 md:text-start",
                    children: [(0, jsx_runtime.jsxs)("div", {
                        className: "grid grid-flow-row content-center justify-items-center gap-4 md:col-span-2 md:justify-items-start md:gap-10 md:justify-self-start",
                        children: [(0, jsx_runtime.jsx)("h1", {
                            "data-testid": "@titleSection/heading",
                            className: "text-4xl font-bold leading-tight tracking-tight lg:text-6xl",
                            children: section.heading
                        }), (0, jsx_runtime.jsx)("div", {
                            "data-testid": "@titleSection/content",
                            children: (0, jsx_runtime.jsx)(Markdown.U, {
                                content: section.content,
                                className: "max-w-full"
                            })
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(() => {
                                if (enSlug === constants.ue) return (0, jsx_runtime.jsx)(CallToAction, {
                                    "data-testid": "@titleSection/compressorCTA",
                                    href: "".concat("https://www.veed.io", "/new?tool=compress"),
                                    logEvent: () => index_es.px.lpPrimaryCtaClicked({
                                        position: enums.L.TOP
                                    }).promise,
                                    text: section.CTA.text,
                                    icon: fi.Re4
                                });
                                let ctaLink1 = activationFlowPayload ? "/new?".concat(utils.XE, "=").concat(activationFlowPayload) : section.CTA.link;
                                return (0, jsx_runtime.jsx)(CallToAction, {
                                    "data-testid": isConverter ? "@titleSection/converterCTA" : "@titleSection/CTA",
                                    href: ctaLink1,
                                    logEvent: () => index_es.px.lpPrimaryCtaClicked({
                                        position: enums.L.TOP
                                    }).promise,
                                    text: section.CTA.text,
                                    icon: fi.Re4
                                })
                            })(), secondaryCTALink]
                        })]
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "grid items-center justify-center md:col-span-3",
                        children: section.image && (0, jsx_runtime.jsx)(Image.Ee, {
                            id: "@titleSection/image",
                            priority: !0,
                            alt: section.image.alt,
                            hash: section.image.hash,
                            ext: section.image.ext,
                            width: 675,
                            height: 373,
                            sizes: {
                                xs: 296,
                                sm: 544,
                                md: 387,
                                lg: 483,
                                xl: 637
                            }
                        })
                    })]
                })
            };
            var LogoSection = __webpack_require__(5671),
                UVPSection = __webpack_require__(3521),
                AggregateRatingSchema = __webpack_require__(9160),
                fa = __webpack_require__(4804),
                react = __webpack_require__(2784),
                Headings = __webpack_require__(1185);
            let ResourcesSection = param => {
                let {
                    section,
                    resources
                } = param, ref = (0, react.useRef)(null), scrollRight = distance => {
                    var ref1;
                    null === (ref1 = ref.current) || void 0 === ref1 || ref1.scrollBy({
                        left: distance,
                        behavior: "smooth"
                    })
                };
                return (0, jsx_runtime.jsxs)("section", {
                    id: "resources-section",
                    className: "mb-6 grid grid-flow-row overflow-hidden rounded-xl bg-white py-8 md:py-12 lg:py-20",
                    children: [(0, jsx_runtime.jsxs)("div", {
                        className: "mx-auto w-full px-8 text-center md:w-2/3 md:px-10 lg:px-16",
                        children: [(0, jsx_runtime.jsx)(Headings.X, {
                            as: "h2",
                            className: "lg:text-5xl",
                            children: section.heading
                        }), section.content && (0, jsx_runtime.jsx)(Markdown.U, {
                            content: section.content,
                            className: "pt-6 text-xl"
                        })]
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "relative w-full overflow-hidden pt-12",
                        children: (0, jsx_runtime.jsxs)("div", {
                            ref: ref,
                            className: "scrollbar-hide grid w-full snap-x snap-mandatory grid-flow-col gap-6 overflow-x-auto px-8 pb-8",
                            children: [(0, jsx_runtime.jsxs)("button", {
                                className: "absolute top-1/2 left-12 z-[1] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 shadow-lg transition hover:bg-blue-700 md:flex",
                                onClick: () => scrollRight(-800),
                                children: [(0, jsx_runtime.jsx)("span", {
                                    className: "sr-only",
                                    children: "Scroll left"
                                }), (0, jsx_runtime.jsx)(fa.bUI, {
                                    className: "mr-0.5 h-4 w-4 text-white"
                                })]
                            }), (0, jsx_runtime.jsxs)("button", {
                                className: "absolute top-1/2 right-12 z-[1] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 shadow-lg transition hover:bg-blue-700 md:flex",
                                onClick: () => scrollRight(800),
                                children: [(0, jsx_runtime.jsx)("span", {
                                    className: "sr-only",
                                    children: "Scroll right"
                                }), (0, jsx_runtime.jsx)(fa.Dli, {
                                    className: "ml-0.5 h-4 w-4 text-white"
                                })]
                            }), resources.map(resource => (0, jsx_runtime.jsx)(Button.z, {
                                href: resource.link,
                                className: "relative w-64 snap-center overflow-hidden rounded-2xl shadow-lg md:w-80",
                                children: (0, jsx_runtime.jsxs)("article", {
                                    className: "h-full transition-transform duration-100 ease-in-out hover:scale-[1.0125]",
                                    children: [resource.image && (0, jsx_runtime.jsx)(Image.Ee, {
                                        ...resource.image,
                                        className: "h-auto w-full",
                                        width: 320,
                                        height: 186,
                                        sizes: {
                                            xs: 256,
                                            sm: 256,
                                            md: 320,
                                            lg: 320,
                                            xl: 320
                                        }
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "p-6",
                                        children: [(0, jsx_runtime.jsx)("h3", {
                                            className: "mb-2 text-xl font-medium",
                                            children: resource.heading
                                        }), (0, jsx_runtime.jsx)(Markdown.U, {
                                            content: resource.content
                                        })]
                                    })]
                                })
                            }, resource.heading))]
                        })
                    })]
                })
            };
            var Marquee = __webpack_require__(2351),
                ArrowIcon = __webpack_require__(6005),
                homepage_CallToAction = __webpack_require__(3773),
                TemplateImage = __webpack_require__(9480);
            let TemplatesMarquee = param => {
                    let {
                        data,
                        templateCtaText,
                        ...props
                    } = param, onTemplateClick = template => index_es.px.templateClicked({
                        templateId: template.id,
                        templateName: template.name
                    });
                    return (0, jsx_runtime.jsx)(Marquee.R, {
                        ...props,
                        pauseOnHover: !0,
                        children: data.map(template => {
                            let href = "".concat(constants.L$, "/").concat(template.id);
                            return (0, jsx_runtime.jsxs)(Button.z, {
                                href: href,
                                className: "relative mr-4 overflow-hidden rounded-xl",
                                onClick: () => onTemplateClick(template),
                                enableTrackingParams: !0,
                                children: [(0, jsx_runtime.jsx)("div", {
                                    className: "bg-neutral-1000/50 absolute inset-0 z-10 grid items-center justify-center p-2 opacity-0 transition-opacity group-hover:opacity-100",
                                    children: (0, jsx_runtime.jsxs)(Button.z, {
                                        variant: "secondary",
                                        className: "cursor-pointer rounded-full text-sm",
                                        children: [templateCtaText, (0, jsx_runtime.jsx)(ArrowIcon.e, {})]
                                    })
                                }), (0, jsx_runtime.jsx)(TemplateImage.U, {
                                    template: template
                                })]
                            }, template.id)
                        })
                    })
                },
                TemplateSection = param => {
                    let {
                        section,
                        templates,
                        templateCtaText,
                        tags
                    } = param, onExploreClick = () => {
                        index_es.px.viewAllTemplatesClicked()
                    };
                    return (0, jsx_runtime.jsxs)("section", {
                        id: "template-section",
                        className: "mb-6 grid grid-flow-row overflow-hidden rounded-xl bg-white",
                        children: [(0, jsx_runtime.jsx)("div", {
                            className: "grid w-1/2 grid-flow-row items-start justify-start gap-4 p-8 md:p-10 lg:p-16",
                            children: (0, jsx_runtime.jsxs)("div", {
                                className: "grid grid-flow-row content-start items-start justify-start justify-items-start gap-2 md:gap-6",
                                children: [(0, jsx_runtime.jsxs)("div", {
                                    className: "grid grid-flow-row gap-3",
                                    children: [(0, jsx_runtime.jsx)(Headings.x, {
                                        children: section.content
                                    }), (0, jsx_runtime.jsx)(Headings.X, {
                                        as: "h2",
                                        className: "lg:text-5xl",
                                        children: section.heading
                                    })]
                                }), (0, jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col items-start justify-start",
                                    children: [(0, jsx_runtime.jsx)(homepage_CallToAction.J, {
                                        variant: "inverted",
                                        href: constants.L$,
                                        className: "pl-0",
                                        onClick: onExploreClick,
                                        children: section.CTA.text
                                    }), (0, jsx_runtime.jsx)("div", {
                                        className: "flex gap-2 pt-2",
                                        children: tags && tags.length > 0 && tags.map(tag => (0, jsx_runtime.jsx)("div", {
                                            className: "flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-neutral-700",
                                            children: tag
                                        }, tag))
                                    })]
                                })]
                            })
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "grid grid-flow-row gap-4 pb-20",
                            children: [(0, jsx_runtime.jsx)(TemplatesMarquee, {
                                data: templates.slice(0, 5),
                                direction: "ltr",
                                templateCtaText: templateCtaText
                            }), (0, jsx_runtime.jsx)(TemplatesMarquee, {
                                data: templates.slice(5),
                                direction: "rtl",
                                templateCtaText: templateCtaText
                            })]
                        })]
                    })
                };
            var im = __webpack_require__(7997);
            let testimonials = [{
                    text: "Veed allows for subtitling, editing, effect/text encoding, and many more advanced features that other editors just can't compete with. The free version is wonderful, but the Pro version is beyond perfect.",
                    name: "Chris Y.",
                    title: "Content Creator"
                }, {
                    text: "I love using VEED as the speech to subtitles transcription is the most accurate I've seen on the market. It has enabled me to edit my videos in just a few minutes and bring my video content to the next level.",
                    name: "Laura Haleydt",
                    title: "Brand Marketing Manager, Carlsberg Importers"
                }, {
                    text: "It has everything I need in one place such as the progress bar for my 1-minute clips, auto transcriptions for all my video content, and custom fonts for consistency in my visual branding.",
                    name: "Diana B.",
                    title: "Social Media Strategist"
                }],
                DiscoverSection = param => {
                    let {
                        heading,
                        section
                    } = param, locale = (0, useLocale.b)();
                    return (0, jsx_runtime.jsxs)("section", {
                        id: "discover-section",
                        className: "mb-6 grid grid-flow-row overflow-hidden rounded-xl bg-white px-8 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20",
                        children: [(0, jsx_runtime.jsx)("div", {
                            className: "text-center",
                            children: (0, jsx_runtime.jsx)(Headings.X, {
                                as: "h2",
                                className: "lg:text-5xl",
                                children: heading
                            })
                        }), (0, jsx_runtime.jsx)("ul", {
                            className: "mx-auto flex flex-wrap gap-4 pt-12",
                            children: section.sort((a, b) => a.title.localeCompare(b.title)).map(child => (0, jsx_runtime.jsx)("li", {
                                children: (0, jsx_runtime.jsx)(Button.z, {
                                    className: "flex items-center justify-center rounded-full bg-neutral-100 px-4 py-2 text-neutral-900 hover:bg-neutral-300",
                                    href: child.link,
                                    locale: locale,
                                    children: child.title
                                })
                            }, child.title))
                        })]
                    })
                };
            var HowToSchema = __webpack_require__(4835),
                VideoSchema = __webpack_require__(1225),
                Video = __webpack_require__(7803);
            var Accordian = __webpack_require__(4551),
                FAQSchema = __webpack_require__(5279);
            let FAQSection = param => {
                    let {
                        heading,
                        section
                    } = param;
                    return (0, jsx_runtime.jsxs)("section", {
                        id: "faq-section",
                        className: "mb-6 grid grid-flow-row overflow-hidden rounded-xl bg-white py-8 px-8 md:py-12 md:px-10 lg:py-20 lg:px-16",
                        children: [(0, jsx_runtime.jsx)(FAQSchema.N, {
                            section: section
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "text-center",
                            children: (0, jsx_runtime.jsx)(Headings.X, {
                                as: "h2",
                                className: "pt-6 lg:text-5xl",
                                children: heading
                            })
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "mx-auto grid w-full max-w-xl grid-flow-row gap-6 pt-12",
                            children: section.map(faq => faq.heading || faq.content ? (0, jsx_runtime.jsx)("div", {
                                className: "",
                                children: (0, jsx_runtime.jsx)(Accordian.G, {
                                    icons: {
                                        opened: fa.iFH,
                                        closed: fa.wEH
                                    },
                                    heading: faq.heading,
                                    className: "rounded-2xl bg-blue-200 p-6 text-left text-xl font-medium transition hover:bg-blue-300",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "p-6 pt-4",
                                        children: (0, jsx_runtime.jsx)(Markdown.U, {
                                            content: faq.content,
                                            className: "max-w-full"
                                        })
                                    })
                                })
                            }, faq.heading) : null)
                        })]
                    })
                },
                VideoEditorTemplate = param => {
                    let {
                        pageData,
                        locales,
                        navData,
                        breadcrumbData,
                        footerData,
                        staticContent,
                        children: microApp,
                        dynamicOgImage
                    } = param;
                    return (0, jsx_runtime.jsxs)(Layout.A, {
                        locales: locales,
                        navData: navData,
                        breadcrumbData: breadcrumbData,
                        footerData: footerData,
                        homepage: !0,
                        children: [(0, jsx_runtime.jsx)(AggregateRatingSchema.f, {
                            title: pageData.titleSection.heading,
                            description: pageData.titleSection.content
                        }), (0, jsx_runtime.jsx)(Meta.h_, {
                            title: pageData.meta.metaTitle,
                            description: pageData.meta.metaDescription,
                            locales: locales,
                            dynamicOgImage: pageData.titleSection.image || (null == dynamicOgImage ? void 0 : dynamicOgImage.image) ? {
                                title: (null == dynamicOgImage ? void 0 : dynamicOgImage.title) || pageData.titleSection.heading,
                                image: (null == dynamicOgImage ? void 0 : dynamicOgImage.image) || (0, Image.zL)(pageData.titleSection.image.hash, pageData.titleSection.image.ext),
                                ctaText: (null == dynamicOgImage ? void 0 : dynamicOgImage.ctaText) || staticContent.getStartedNow,
                                theme: (null == dynamicOgImage ? void 0 : dynamicOgImage.theme) || ["#4434FF", "#D634FF"]
                            } : null
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "mx-auto max-w-screen-2xl px-4",
                            children: (0, jsx_runtime.jsx)("div", {
                                className: "grid grid-flow-row overflow-hidden rounded-xl bg-white px-8 md:px-10 md:pt-4 lg:px-16 lg:pb-6",
                                children: microApp || (0, jsx_runtime.jsx)(TitleSection, {
                                    section: pageData.titleSection,
                                    tags: pageData.tags
                                })
                            })
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "max-w-screen-3xl mx-auto px-4",
                            children: (0, jsx_runtime.jsx)(LogoSection.h, {
                                section: staticContent.logoSection
                            })
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "mx-auto max-w-screen-2xl px-4",
                            children: [(0, jsx_runtime.jsx)(UVPSection.b, {
                                section: pageData.UVPSection
                            })]
                        })]
                    })
                }
        },
        4217: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                g: function() {
                    return filterBoolean
                }
            });
            let truthy = value => !!value,
                filterBoolean = array => array.filter(truthy)
        },
        7778: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                i: function() {
                    return getYouTubeId
                }
            });
            let getYouTubeId = url => {
                if (!url) return;
                let strippedURL = url.replace(/\s/g, ""),
                    re = RegExp("(/|%3D|vi=|v=)([0-9A-z-_]{11})([%#?&]|$)"),
                    resultArray = re.exec(strippedURL);
                return null == resultArray ? void 0 : resultArray[2]
            }
        }
    }
]);