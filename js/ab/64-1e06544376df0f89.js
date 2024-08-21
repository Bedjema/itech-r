(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{2698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let r=n(3219),l=(n(2784),r._(n(4780)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let i=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=i?i().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete r.webpack,delete r.modules,noSSR(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let r=n(3219),l=r._(n(2784)),i=l.default.createContext(null)},4780:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(3219),l=r._(n(2784)),i=n(9306),a=[],o=[],s=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function init(){if(!r){let t=new LoadableSubscription(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!s){let e=n.webpack?n.webpack():n.modules;e&&o.push(t=>{for(let n of e)if(t.includes(n))return init()})}function LoadableComponent(e,t){!function(){init();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let a=l.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),l.default.useMemo(()=>{var t;return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?l.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",l.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(a).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(s=!0,t());flushInitializers(o,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let u=Loadable},2949:function(e,t,n){"use strict";var r=n(2322),l=n(2784),i=n(6277),a=n(3603),o=n(5136);t.Z=e=>{let{media:t,thumbnail:n}=e,s=(0,l.useRef)(null);return(0,r.jsx)("div",{ref:s,className:(0,i.Z)("bg-enterprise-lightGreen w-full overflow-hidden",a.i),children:(0,r.jsx)(o.w,{media:t,mediaThumbnail:n})})}},6889:function(e,t,n){"use strict";var r=n(2322),l=n(6277),i=n(5731),a=n(1807),o=n(1465);t.Z=e=>{let{section:t,show:n}=e;return(0,r.jsx)("div",{className:(0,l.Z)("fixed inset-x-0 bottom-4 z-20 mx-auto text-center transition-all duration-500 md:bottom-5 md:max-w-[548px] md:text-left lg:bottom-4 lg:max-w-[1155px]",n?"translate-y-0 opacity-100":"translate-y-24 opacity-0"),children:(0,r.jsxs)("div",{className:"sticky-cta-container mx-auto inline-flex items-center justify-between p-2 md:flex md:gap-3 md:p-2 md:pl-10 lg:mx-6 lg:p-4 lg:pl-10",children:[(0,r.jsx)("p",{className:(0,i.cn)(a.An,"hidden font-medium md:block"),children:t.heading}),(0,r.jsx)(o.Z,{cta:t.CTA,size:"md",className:"px-6",componentName:"StickyCTA"})]})})}},3603:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});let r="lg:rounded-3xl rounded-2xl"},8190:function(e,t,n){"use strict";n.d(t,{Z:function(){return shared_G2Badge}});var r=n(2322),l=n(5731);let G2LogoIcon=e=>{let{className:t}=e;return(0,r.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[(0,r.jsxs)("g",{clipPath:"url(#clip0_1366_2978)",children:[(0,r.jsx)("path",{d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",fill:"#AAAAAA"}),(0,r.jsx)("path",{d:"M17.1926 9.19213H15.143C15.1982 8.87053 15.3974 8.69053 15.8006 8.48653L16.1774 8.29453C16.8518 7.94893 17.2118 7.55773 17.2118 6.91933C17.2118 6.51853 17.0558 6.20173 16.7462 5.97373C16.4366 5.74573 16.0718 5.63293 15.6446 5.63293C15.3141 5.62904 14.9897 5.72162 14.711 5.89933C14.4302 6.07213 14.2214 6.29533 14.0918 6.57373L14.6846 7.16893C14.915 6.70333 15.2486 6.47533 15.6878 6.47533C16.0598 6.47533 16.2878 6.66733 16.2878 6.93373C16.2878 7.15693 16.1774 7.34173 15.7502 7.55773L15.5078 7.67533C14.9822 7.94173 14.6174 8.24653 14.4062 8.59213C14.195 8.93773 14.0918 9.37213 14.0918 9.89773V10.0417H17.1926V9.19213Z",fill:"white"}),(0,r.jsx)("path",{d:"M16.9205 11.0195H13.5269L11.8301 13.9571H15.2237L16.9205 16.8971L18.6173 13.9571L16.9205 11.0195Z",fill:"white"}),(0,r.jsx)("path",{d:"M12.1224 15.9186C9.96243 15.9186 8.20323 14.1594 8.20323 11.9994C8.20323 9.83938 9.96243 8.08018 12.1224 8.08018L13.464 5.27458C13.0222 5.18673 12.5729 5.14251 12.1224 5.14258C8.33523 5.14258 5.26562 8.21218 5.26562 11.9994C5.26562 15.7866 8.33523 18.8562 12.1224 18.8562C13.5738 18.8589 14.988 18.3981 16.1592 17.541L14.676 14.9682C13.9664 15.5811 13.0601 15.9185 12.1224 15.9186Z",fill:"white"})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_1366_2978",children:(0,r.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})};var i=n(2828),a=n(1807),o=n(6277),shared_G2Badge=e=>{let{className:t,hidePaddingOnMobile:n=!1,g2BadgeReviews:s}=e;return(0,r.jsx)("div",{className:(0,o.Z)("text-center",t),children:(0,r.jsxs)("div",{className:(0,o.Z)("flex items-center justify-between rounded-lg bg-white md:inline-flex md:gap-4 md:rounded-xl md:py-[10px] lg:rounded-2xl lg:px-6 lg:py-[14px]",n?"":"px-4 py-[11px]"),children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(G2LogoIcon,{className:"h-6 w-6 opacity-90"}),(0,r.jsx)("p",{className:"md:font-2xl pl-2 text-[22px] leading-[26px] tracking-[-0.33px] text-neutral-400 md:text-2xl md:leading-7 md:tracking-[-0.36px] lg:text-[32px] lg:leading-9 lg:tracking-[-0.48px]",children:"4.6"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[[1,2,3,4].map(e=>(0,r.jsx)(i.naV,{className:"h-3 w-3 opacity-30 lg:h-[15px] lg:w-[15px]"},e)),(0,r.jsx)(i.Mg0,{className:"h-3 w-3 opacity-30 lg:h-[15px] lg:w-[15px]"}),(0,r.jsx)("p",{className:(0,l.cn)("pl-4 text-neutral-400",a.oW),children:"319 ".concat(s)})]})]})})}},6815:function(e,t,n){"use strict";var r=n(2322);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"text-enterprise-black mb-20 overflow-hidden md:mb-[120px] lg:mb-40",children:t})}},37:function(e,t,n){"use strict";n.d(t,{U:function(){return useIntersect}});var r=n(2784);function useIntersect(e,t){let{enabled:n=!0}=t,[l,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{if(!n)return;let t=new IntersectionObserver(e=>{let[t]=e;t&&i(t.isIntersecting)},{root:null,threshold:.1});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}},[]),l}},5237:function(e,t,n){e.exports=n(2698)},1805:function(e,t){"use strict";/*! js-cookie v3.0.1 | MIT */function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var n=function init(e,t){function set(n,r,l){if("undefined"!=typeof document){"number"==typeof(l=assign({},t,l)).expires&&(l.expires=new Date(Date.now()+864e5*l.expires)),l.expires&&(l.expires=l.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in l)l[a]&&(i+="; "+a,!0!==l[a]&&(i+="="+l[a].split(";")[0]));return document.cookie=n+"="+e.write(r,n)+i}}return Object.create({set:set,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},l=0;l<n.length;l++){var i=n[l].split("="),a=i.slice(1).join("=");try{var o=decodeURIComponent(i[0]);if(r[o]=e.read(a,o),t===o)break}catch(e){}}return t?r[t]:r}},remove:function(e,t){set(e,"",assign({},t,{expires:-1}))},withAttributes:function(e){return init(this.converter,assign({},this.attributes,e))},withConverter:function(e){return init(assign({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=n}}]);