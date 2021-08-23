(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1833:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=n(7294),u=n(9008),f=n(1664);function d(e){return(0,r.jsx)("button",{onClick:e.onClick,className:"text-4xl z-50\tduration-200 ease-in-out fixed right-1.5\ttop-1.5\t".concat("dark"==e.displayTheme?"rotate-360":""),children:"dark"==e.displayTheme?"\ud83c\udf1d":"\ud83c\udf1a"})}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(c,e);var t,n,i,l=p(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={displayTheme:"light"},t}return t=c,(n=[{key:"componentDidMount",value:function(){this.setState({displayTheme:window.localStorage.displayTheme||"light"}),document.getElementById("__next").classList.add(window.localStorage.displayTheme||"light")}},{key:"toggleDisplayTheme",value:function(){var e="light"==this.state.displayTheme?"dark":"light";return document.getElementById("__next").classList.replace(this.state.displayTheme,e),window.localStorage.setItem("displayTheme",e),e}},{key:"render",value:function(){var e=this;return(0,r.jsxs)("div",{className:"min-h-screen\tw-full font-mono transition-colors duration-500\t ease-linear dark:bg-black dark:text-gray-300 ",children:[(0,r.jsxs)(u.default,{children:[(0,r.jsx)("title",{children:this.props.title}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"icon",href:"https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?s=512"})]}),(0,r.jsxs)("div",{className:"m-auto max-w-4xl sm:w-full",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"p-5",children:[(0,r.jsx)(f.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})," ","|"," ",(0,r.jsx)(f.default,{href:"/about",children:(0,r.jsx)("a",{children:"About me"})})]})}),(0,r.jsx)(d,{onClick:function(){return e.setState({displayTheme:e.toggleDisplayTheme()})},displayTheme:this.state.displayTheme}),this.props.children]})]})}}])&&o(t.prototype,n),i&&o(t,i),c}(s.Component)},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),l=n(4651),c=n(7426);var s={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],l=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,y=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,g=c.useIntersection({rootMargin:"200px"}),j=r(g,2),w=j[0],k=j[1],_=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=k&&n&&i.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,k,x,n,o]);var N={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,o,d,p,m,y,v,x)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof x?x:o&&o.locale,E=o&&o.isLocaleDomain&&i.getDomainLocale(p,T,o&&o.locales,o&&o.domainLocales);N.href=E||i.addBasePath(i.addLocale(p,T,o&&o.defaultLocale))}return a.default.cloneElement(t,N)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var l=new Map},5655:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1664),a=n(1833);t.default=function(){return(0,r.jsx)(a.Z,{title:"Moncef Gaha",children:(0,r.jsxs)("div",{className:"p-5",children:[(0,r.jsxs)("p",{children:["I am Moncef Gaha,"," ",((Date.now()-new Date("2000-12-07").getTime())/1e3/60/60/24/30/12).toFixed(0)," ","year from Algeria, Web backend devloper i started self-learning since 2015, I interested in open source software, I have the skills below"]}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"My skills:"})}),(0,r.jsxs)("ul",{className:"pl-10 list-disc text-justify",children:[(0,r.jsx)("li",{className:"py-1",children:"\ud83c\udf10 Web Back-end developper"}),(0,r.jsx)("li",{className:"py-1",children:"\ud83d\udc68\u200d\ud83d\udcbb I Code with JS/TS and PHP"}),(0,r.jsx)("li",{className:"py-1",children:"\ud83e\udd95 Deno/Node JS developer"})]}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"What I do:"})}),(0,r.jsxs)("ul",{className:"pl-10 list-disc text-justify",children:[(0,r.jsx)("li",{className:"py-1",children:"\ud83d\udcf0 Self-learning to develop my programming skills"}),(0,r.jsx)("li",{className:"py-1",children:"\u26a1 I like to constantly read technical articles, especially programming issues, to find out what's good"}),(0,r.jsx)("li",{className:"py-1",children:"\ud83d\udcbb Tech content creator for social media platforms (sometimes comic)"})]}),(0,r.jsx)("p",{className:"pt-5",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("span",{className:"text-lg pr-1",children:"\u2039"}),"Go to home"]})})})]})})}},4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(5655)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);