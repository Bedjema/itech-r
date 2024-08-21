'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [778],
  {
    5136: function (e, t, n) {
      n.d(t, {
        w: function () {
          return LazyVideo
        }
      })
      var l = n(2322),
        r = n(2784),
        i = n(8108)
      let a = 'https://bedjema.github.io/itech-r',
        LazyVideo = e => {
          let {
              autoPlay: t = !0,
              playsInline: n = !0,
              loop: o = !0,
              muted: s = !0,
              isPlaying: c,
              media: d,
              mediaThumbnail: p,
              width: u,
              ...m
            } = e,
            x = (0, r.useRef)(null),
            { hash: g, ext: h } = d,
            w = 'vids/'.concat(g).concat(h),
            f = p
              ? ''
                  .concat(a, '/')
                  .concat(p.hash)
                  .concat(p.ext)
              : null,
            b =
              f && u ? (0, i._m)({ src: f, width: Number(u), quality: 75 }) : f
          return (
            (0, r.useEffect)(() => {
              let e
              let t = x.current
              return (
                t &&
                  (e = new IntersectionObserver(
                    (e, n) => {
                      e.forEach(e => {
                        if (e.isIntersecting) {
                          if (((t.src = t.dataset.src || ''), c && t.paused)) {
                            let e = window.setInterval(() => {
                              t.play()
                                .then(() => window.clearInterval(e))
                                .catch(() => console.warn)
                            }, 100)
                          }
                          n.unobserve(t)
                        }
                      })
                    },
                    { root: null, rootMargin: '0px', threshold: 0.1 }
                  )).observe(t),
                () => {
                  e && t && e.unobserve(t)
                }
              )
            }, [w, c]),
            (0, l.jsx)('video', {
              ref: x,
              'data-src': w,
              muted: s,
              preload: 'none',
              ...(b ? { poster: b } : {}),
              autoPlay: t,
              playsInline: n,
              loop: o,
              ...m
            })
          )
        }
    },
    5612: function (e, t, n) {
      n.d(t, {
        n: function () {
          return Video
        }
      })
      var l = n(2322),
        r = n(6277),
        i = n(5237),
        a = n.n(i),
        o = n(2784),
        s = n(8108)
      let c = a()(() => n.e(372).then(n.bind(n, 4372)), {
          loadableGenerated: { webpack: () => [4372] },
          ssr: !1
        }),
        Video = e => {
          var t, n
          let {
            thumbnail: i,
            showThumbnail: a,
            title: d,
            className: p,
            position: u,
            muted: m = !0,
            preloadThumbnail: x = !1,
            loop: g = !1,
            borderRadius: h = '0px',
            ...w
          } = e
          return (0, l.jsxs)('div', {
            className: (0, r.Z)(p, 'relative mx-auto h-full w-full max-w-full'),
            children: [
              i &&
                (0, l.jsx)(s.Ee, {
                  ...i,
                  className: 'h-full w-full object-cover',
                  priority: x
                }),
              (!a || !i) &&
                (0, l.jsx)(c, {
                  ...w,
                  playing: null !== (t = !a && w.playing) && void 0 !== t && t,
                  muted: m,
                  loop: g,
                  controls: null === (n = w.controls) || void 0 === n || n,
                  wrapper: (0, o.forwardRef)((e, t) => {
                    let { children: n } = e
                    return (0, l.jsx)('div', {
                      ref: t,
                      title: d,
                      className: (0, r.Z)(u, 'inset-0 z-10'),
                      children: n
                    })
                  }),
                  config: {
                    file: {
                      attributes: {
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: h
                        }
                      }
                    }
                  }
                })
            ]
          })
        }
    },
    1465: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return shared_CTAButton
        }
      })
      var l = n(2322),
        r = n(2784),
        i = n(7840),
        a = n(6874),
        o = n(5731),
        s = n(1807),
        c = n(6525),
        d = n(5697),
        shared_CTAButton = e => {
          let t,
            {
              cta: n,
              size: p = 'lg',
              className: u,
              componentName: m,
              onClick: x,
              icon: g,
              width: h = 'md:w-max',
              children: w,
              srOnly: f,
              type: b,
              buttonType: v,
              disabled: j,
              ...y
            } = e,
            [k, N] = (0, r.useState)(90),
            C =
              'group pt-7 pb-[30px] lg:pt-[33px] lg:pb-[35px] md:px-10 lg:px-12',
            I = s.An
          'md' === p &&
            ((C =
              'md:px-6 lg:pt-[18px] lg:pb-[19px] pt-[18px] pb-5 h-12 flex items-center justify-center'),
            (I = s.oW)),
            'xl' === p &&
              ((C = 'py-6 px-20 md:px-20 md:py-12 lg:px-24 lg:py-14'),
              (I = 'text-[18px] md:text-[20px] lg:text-[24px]')),
            'primary' === b
              ? (t =
                  'font-medium leading-[22px] tracking-[-0.27px] h-[88px] px-0 flex items-center justify-center w-full py-4 md:py-8 lg:py-10 md:w-fit md:min-w-[200px] lg:h-[120px] lg:min-w-[266px] lg:leading-[28px] lg:tracking-[-0.36px] lg:p-0 lg:px-10 lg:min-w-[266px]')
              : 'secondary' === b
              ? (t =
                  'text-[14px] font-medium leading-[18px] tracking-[-0.21px] px-0 flex items-center justify-center w-full pt-[22px] px-8 md:px-8 pb-6 md:w-fit md:min-w-fit lg:h-[80px] lg:text-base lg:leading-[20px] lg:tracking-[-0.24px] lg:py-0 lg:px-10')
              : 'tertiary' === b &&
                (t =
                  'h-10 text-[14px] font-medium leading-[18px] tracking-[-0.21px] p-4 flex items-center justify-center w-full pt-[14px] md:w-fit md:px-4 lg:text-base lg:leading-[20px] lg:tracking-[-0.24px] lg:px-4 lg:pt-[18px] lg:pb-[19px] lg:h-[48px]')
          let M = (0, a.gV)(),
            E = 'treatment' === M.getVariant('lp-cta-color', 'control'),
            T = 'treatment' === M.getVariant('lp-cta-arrow', 'control')
          return (
            (0, r.useEffect)(() => {
              M.expose('lp-cta-color'), M.expose('lp-cta-arrow')
            }, []),
            (0, l.jsxs)(c.z, {
              disabled: j,
              logEvent: () => {
                if (n)
                  return i.px.marketingCtaClicked({
                    component: m,
                    pathname: window.location.pathname,
                    link: n.link
                  }).promise
              },
              href: null == n ? void 0 : n.link,
              style: { '--bg-rotate': ''.concat(k, 'deg') },
              onMouseMove: e => {
                let t = e.currentTarget.getBoundingClientRect(),
                  n = e.clientX - t.left,
                  l = e.clientY - t.top,
                  r = t.width / 2,
                  i = t.height / 2
                N(Math.atan2(l - i, n - r) * (180 / Math.PI))
              },
              className: (0, o.cn)(
                'relative inline-block w-full whitespace-nowrap rounded-full text-center font-medium',
                h,
                C,
                I,
                E
                  ? 'from-enterprise-ctaBlue to-[#e61c32] bg-gradient-rotate text-white brightness-100 hover:brightness-110'
                  : 'from-enterprise-green to-enterprise-yellowGreen bg-gradient-rotate',
                t,
                u
              ),
              onClick: x,
              type: v,
              ...y,
              children: [
                !w &&
                  n &&
                  (0, l.jsxs)('span', {
                    className:
                      'flex flex-row justify-center items-center transition duration-75 ease-in-out group-active:scale-95',
                    children: [
                      n.text,
                      T &&
                        (0, l.jsx)(d.H, {
                          className: 'h-6 w-6 ml-2 text-current'
                        })
                    ]
                  }),
                f && (0, l.jsx)('span', { className: 'sr-only', children: f }),
                g,
                w
              ]
            })
          )
        }
    },
    3008: function (e, t, n) {
      var l = n(2322),
        r = n(5731)
      t.Z = e => {
        let { children: t, className: n = '' } = e
        return (0, l.jsx)('div', {
          className: (0, r.cn)('mx-auto max-w-[1440px] px-4 lg:px-6', n),
          children: t
        })
      }
    },
    9713: function (e, t, n) {
      n.d(t, {
        h: function () {
          return LogoSection
        }
      })
      var l = n(2322),
        r = n(6277),
        i = n(2784)
      let Marquee = e => {
        let {
            children: t,
            direction: n,
            pauseOnHover: a,
            className: o,
            numOfChildren: s = 2,
            duration: c = 45
          } = e,
          [d, p] = (0, i.useState)(!1)
        return (0, l.jsx)('div', {
          className: (0, r.Z)(o, 'w-full overflow-hidden'),
          onMouseOver: () => p(!0),
          onMouseOut: () => p(!1),
          children: (0, l.jsx)('div', {
            className: 'animate-marquee mx-auto flex w-fit items-center',
            style: {
              '--marquee-direction': 'ltr' === n ? 'reverse' : 'normal',
              '--marquee-play-state': a && d ? 'paused' : 'running',
              '--marquee-duration': ''.concat(c, 's')
            },
            children: Array(s)
              .fill(0)
              .map(() => t)
          })
        })
      }
      var a = n(8108),
        o = n(5731),
        s = n(1807),
        c = n(7165)
      let LogoSection = e => {
        let {
          className: t = '',
          logos: n,
          customBackdropBlur: i,
          logoWidth: d = 'min-w-[6.5rem] lg:min-w-[9rem]',
          heading: p
        } = e
        return (null == n ? void 0 : n.length)
          ? (0, l.jsxs)('section', {
              className: (0, r.Z)('py-12', t),
              children: [
                p &&
                  (0, l.jsx)(c.U, {
                    content: p,
                    proseClassName: (0, o.cn)(
                      'font-swissnow text-center mb-6 lg:mb-10 rebrand-darkGray px-6',
                      s.An
                    ),
                    components: {
                      em: e => {
                        let { ...t } = e
                        return (0, l.jsx)('em', {
                          className: (0, o.cn)(s.gw),
                          ...t
                        })
                      }
                    }
                  }),
                (0, l.jsxs)('div', {
                  className: 'relative overflow-hidden',
                  children: [
                    (0, l.jsx)(Marquee, {
                      direction: 'rtl',
                      duration: 4 * n.length,
                      children: n.map(
                        (e, t) =>
                          e.image &&
                          (0, l.jsx)(
                            'div',
                            {
                              className: 'mx-2',
                              children: (0, l.jsx)(a.Ee, {
                                ...e.image,
                                className: (0, o.cn)('mx-2', d)
                              })
                            },
                            t
                          )
                      )
                    }),
                    (0, l.jsx)('div', {
                      className: 'absolute inset-y-0 left-0 w-12 md:w-28',
                      children: (0, l.jsx)('div', {
                        className: (0, r.Z)(
                          'mask-gradient-to-r absolute inset-0 bg-gradient-to-r',
                          null != i ? i : 'backdrop-blur-sm'
                        )
                      })
                    }),
                    (0, l.jsx)('div', {
                      className: 'absolute inset-y-0 right-0 w-12 md:w-28',
                      children: (0, l.jsx)('div', {
                        className: (0, r.Z)(
                          'mask-gradient-to-l  absolute inset-0 bg-gradient-to-l',
                          null != i ? i : 'backdrop-blur-sm'
                        )
                      })
                    })
                  ]
                })
              ]
            })
          : null
      }
    },
    5281: function (e, t, n) {
      n.d(t, {
        n: function () {
          return d
        }
      })
      var l = n(2322),
        r = n(2784),
        i = n(6525),
        a = n(5612)
      let getYouTubeId = e => {
        if (!e) return
        let t = e.replace(/\s/g, ''),
          n = RegExp('(/|%3D|vi=|v=)([0-9A-z-_]{11})([%#?&]|$)'),
          l = n.exec(t)
        return null == l ? void 0 : l[2]
      }
      var o = n(1164)
      let VideoSchema = e => {
        let { video: t, description: n, howToTime: r } = e,
          i = {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: t.title,
            contentUrl: t.url,
            embedUrl: 'https://www.youtube.com/embed/'.concat(
              getYouTubeId(t.url)
            ),
            thumbnailUrl: 'http://img.youtube.com/vi/'.concat(
              getYouTubeId(t.url),
              '/sddefault.jpg'
            ),
            description: n,
            duration: r || 'PT3M',
            productionCompany: {
              '@type': 'Organization',
              url: '',
              name: ''
            },
            author: {
              '@type': 'Organization',
              url: '',
              name: ''
            },
            keywords: t.title,
            uploadDate: '2022-07-09T17:23:47.793Z'
          }
        return (0, l.jsx)(o.l, { schema: i })
      }
      var s = n(1805),
        c = n(5731)
      let d = (0, r.memo)(e => {
        let {
            section: t,
            description: n,
            howToTime: o,
            containerStyles: d,
            buttonStyles: p,
            preloadThumbnail: u,
            logEvent: m,
            muted: x,
            videoAspectRatio: g = 'aspect-video',
            controls: h = !0,
            loop: w
          } = e,
          [f, b] = (0, r.useState)(!0),
          openInNewTab = e => {
            Object.assign(document.createElement('a'), {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: e
            }).click()
          },
          onClickImage = () => {
            let e = s.Z.get('OptanonConsent')
            !e || (e && (null == e ? void 0 : e.includes('C0004:1')))
              ? (null == m || m(), b(!1))
              : openInNewTab(t.url)
          }
        return (0, l.jsxs)('section', {
          id: 'video-section',
          className: (0, c.cn)(
            'grid grid-flow-row justify-items-center text-center',
            d || 'gap-12 pb-16 pt-8 md:pb-20 md:pt-24'
          ),
          children: [
            (0, l.jsx)(VideoSchema, {
              video: t,
              description: n || '',
              howToTime: o
            }),
            t.title &&
              (0, l.jsx)('h2', {
                className:
                  'text-2xl font-medium leading-tight tracking-tight sm:text-3xl',
                children: t.title
              }),
            (0, l.jsx)(i.z, {
              'aria-label': 'Play video',
              className: (0, c.cn)(
                'w-full  overflow-hidden ',
                !d && 'max-w-screen-md',
                p || 'rounded-2xl',
                g
              ),
              onClick: () => onClickImage(),
              children: (0, l.jsx)(a.n, {
                id: 'Play video',
                url: t.url,
                title: t.title,
                thumbnail: t.thumbnail && {
                  ...t.thumbnail,
                  height: 432,
                  width: 768,
                  sizes: { xs: 296, sm: 544, md: 586, lg: 576, xl: 576 }
                },
                loop: w,
                showThumbnail: f,
                preloadThumbnail: u,
                playing: !0,
                controls: h,
                position: 'absolute',
                muted: x
              })
            })
          ]
        })
      })
    },
    5697: function (e, t, n) {
      n.d(t, {
        H: function () {
          return ItalicArrowIcon
        }
      })
      var l = n(2322),
        r = n(5731)
      let ItalicArrowIcon = e => {
        let { className: t } = e
        return (0, l.jsxs)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '32',
          height: '32',
          viewBox: '0 0 32 32',
          fill: 'none',
          className: (0, r.cn)('text-enterprise-black', t),
          children: [
            (0, l.jsxs)('g', {
              clipPath: 'url(#clip0_1460_2346)',
              children: [
                (0, l.jsx)('path', {
                  d: 'M31.7261 15.9148C25.2964 15.9148 20.0781 10.5769 20.0781 3.99988',
                  stroke: 'currentColor',
                  strokeWidth: '1.2',
                  strokeMiterlimit: '10'
                }),
                (0, l.jsx)('path', {
                  d: 'M31.7261 15.9149C25.2964 15.9149 20.0781 21.2528 20.0781 27.8298',
                  stroke: 'currentColor',
                  strokeWidth: '1.2',
                  strokeMiterlimit: '10'
                }),
                (0, l.jsx)('path', {
                  d: 'M32 15.9147L0 15.9147',
                  stroke: 'currentColor',
                  strokeWidth: '1.2',
                  strokeMiterlimit: '10'
                })
              ]
            }),
            (0, l.jsx)('defs', {
              children: (0, l.jsx)('clipPath', {
                id: 'clip0_1460_2346',
                children: (0, l.jsx)('rect', {
                  width: '32',
                  height: '32',
                  fill: 'white'
                })
              })
            })
          ]
        })
      }
    }
  }
])
