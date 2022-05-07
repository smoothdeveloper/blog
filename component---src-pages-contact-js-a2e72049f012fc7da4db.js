"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[501],{417:function(e,t,n){var r=n(7294),a=n(4839),o=n(5697);function l(e){return e.split(/\s+/)}function u(e){return e.children?r.Children.only(e.children):null}u.displayName="BodyClassName",u.cache=[],u.propTypes={className:o.string.isRequired},e.exports=a((function(e){return e.map((function(e){return e.className})).filter((function(e,t,n){return n.indexOf(e)===t})).join(" ")}),(function(e){var t=l(document.body.className).filter((function(e){return-1===u.cache.indexOf(e)})),n=l(e);u.cache=n,document.body.className=t.concat(n).join(" ").trim()}))(u)},3219:function(e,t){function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||o(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var a=String(e).match(/\d+/g);if(null==a||a.length<=2)return t;var l=a.map((function(e){return parseInt(e)})),u=function(e){if(Array.isArray(e))return e}(f=l)||o(f)||r(f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=u[0],c=u[1],M=u.slice(2),s=[i,c-1].concat(n(M));return new Date(Date.UTC.apply(Date,n(s)));var f}},1881:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return e+" "+(1!==e?t+"s":t)+" "+n}},2503:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=function(e){var t=e.date,n=e.formatter,r=void 0===n?o.default:n,i=e.component,c=void 0===i?"time":i,s=e.live,m=void 0===s||s,j=e.minPeriod,w=void 0===j?0:j,b=e.maxPeriod,O=void 0===b?N:b,T=e.title,E=e.now,h=void 0===E?function(){return Date.now()}:E,D=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,u),z=(v=y((0,a.useState)(0),2),v[0],C=v[1],(0,a.useCallback)((function(){C((function(e){return e+1}))}),[]));var v,C;(0,a.useEffect)((function(){if(m){var e;return function n(r){var a=(0,l.default)(t).valueOf();if(a){var o=h(),u=Math.round(Math.abs(o-a)/1e3),i=u<60?1e3:u<d?6e4:u<g?36e5:6048e5,c=Math.min(Math.max(i,1e3*w),1e3*O);c&&(e&&clearTimeout(e),e=setTimeout(n,c)),r||z()}else console.warn("[react-timeago] Invalid Date provided")}(!0),function(){clearTimeout(e)}}}),[t,z,m,O,w,h]);var S=c,I=(0,l.default)(t).valueOf();if(!I)return null;var P=h(),k=Math.round(Math.abs(P-I)/1e3),A=I<P?"ago":"from now",x=y(k<60?[Math.round(k),"second"]:k<d?[Math.round(k/60),"minute"]:k<g?[Math.round(k/d),"hour"]:k<N?[Math.round(k/g),"day"]:k<L?[Math.round(k/N),"week"]:k<p?[Math.round(k/L),"month"]:[Math.round(k/p),"year"],2),U=x[0],Z=x[1],Y=void 0===T?"string"==typeof t?t:(0,l.default)(t).toISOString().substr(0,16).replace("T"," "):T,Q="time"===S?f(f({},D),{},{dateTime:(0,l.default)(t).toISOString()}):D,K=o.default.bind(null,U,Z,A);return a.createElement(S,M({},Q,{title:Y}),r(U,Z,A,I,K,h))};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(7294)),o=i(n(1881)),l=i(n(3219)),u=["date","formatter","component","live","minPeriod","maxPeriod","title","now"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==n.return||n.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=3600,g=86400,N=7*g,L=30*g,p=365*g},9792:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2503),a=n(1597),o=n(7294),l=function(e){var t=e.path,n=e.title,l=e.image,u=e.tags,i=e.date,c="https://blog.nojaf.com/"+t,M=n+" by @verdonckflorian";return o.createElement("header",{style:{backgroundImage:"url("+l+")"},className:"cover"},o.createElement("div",{className:"inner"}),o.createElement("div",{className:"content"},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"d-none d-md-block col col-md-3 col-lg-2 meta"},o.createElement("strong",null,"Published"),o.createElement(r.Z,{date:i,className:"timeago"}),u&&o.createElement("strong",{className:"pt-2"},"Tags"),u&&o.createElement("ul",{className:"list-unstyled"},u.map((function(e,t){return o.createElement("li",{key:t},o.createElement(a.Link,{key:e,to:"/tag/"+e+"/"},e))})))),o.createElement("div",{className:"col col-md-9 col-lg-10 d-flex align-content-center flex-wrap"},o.createElement("div",{className:"py-5 ms-md-5"},o.createElement("h1",null,n),t&&o.createElement("a",{className:"share d-flex align-items-center pt-1",href:"https://twitter.com/share?text="+M+";url="+c},o.createElement("span",null,"Share this on "),o.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDMxMCAzMTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxMCAzMTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGcgaWQ9IlhNTElEXzgyNl8iPgoJPHBhdGggZmlsbD0iI0ZGRiIgaWQ9IlhNTElEXzgyN18iIGQ9Ik0zMDIuOTczLDU3LjM4OGMtNC44NywyLjE2LTkuODc3LDMuOTgzLTE0Ljk5Myw1LjQ2M2M2LjA1Ny02Ljg1LDEwLjY3NS0xNC45MSwxMy40OTQtMjMuNzMKCQljMC42MzItMS45NzctMC4wMjMtNC4xNDEtMS42NDgtNS40MzRjLTEuNjIzLTEuMjk0LTMuODc4LTEuNDQ5LTUuNjY1LTAuMzljLTEwLjg2NSw2LjQ0NC0yMi41ODcsMTEuMDc1LTM0Ljg3OCwxMy43ODMKCQljLTEyLjM4MS0xMi4wOTgtMjkuMTk3LTE4Ljk4My00Ni41ODEtMTguOTgzYy0zNi42OTUsMC02Ni41NDksMjkuODUzLTY2LjU0OSw2Ni41NDdjMCwyLjg5LDAuMTgzLDUuNzY0LDAuNTQ1LDguNTk4CgkJQzEwMS4xNjMsOTkuMjQ0LDU4LjgzLDc2Ljg2MywyOS43Niw0MS4yMDRjLTEuMDM2LTEuMjcxLTIuNjMyLTEuOTU2LTQuMjY2LTEuODI1Yy0xLjYzNSwwLjEyOC0zLjEwNCwxLjA1LTMuOTMsMi40NjcKCQljLTUuODk2LDEwLjExNy05LjAxMywyMS42ODgtOS4wMTMsMzMuNDYxYzAsMTYuMDM1LDUuNzI1LDMxLjI0OSwxNS44MzgsNDMuMTM3Yy0zLjA3NS0xLjA2NS02LjA1OS0yLjM5Ni04LjkwNy0zLjk3NwoJCWMtMS41MjktMC44NTEtMy4zOTUtMC44MzgtNC45MTQsMC4wMzNjLTEuNTIsMC44NzEtMi40NzMsMi40NzMtMi41MTMsNC4yMjRjLTAuMDA3LDAuMjk1LTAuMDA3LDAuNTktMC4wMDcsMC44ODkKCQljMCwyMy45MzUsMTIuODgyLDQ1LjQ4NCwzMi41NzcsNTcuMjI5Yy0xLjY5Mi0wLjE2OS0zLjM4My0wLjQxNC01LjA2My0wLjczNWMtMS43MzItMC4zMzEtMy41MTMsMC4yNzYtNC42ODEsMS41OTcKCQljLTEuMTcsMS4zMi0xLjU1NywzLjE2LTEuMDE4LDQuODRjNy4yOSwyMi43NiwyNi4wNTksMzkuNTAxLDQ4Ljc0OSw0NC42MDVjLTE4LjgxOSwxMS43ODctNDAuMzQsMTcuOTYxLTYyLjkzMiwxNy45NjEKCQljLTQuNzE0LDAtOS40NTUtMC4yNzctMTQuMDk1LTAuODI2Yy0yLjMwNS0wLjI3NC00LjUwOSwxLjA4Ny01LjI5NCwzLjI3OWMtMC43ODUsMi4xOTMsMC4wNDcsNC42MzgsMi4wMDgsNS44OTUKCQljMjkuMDIzLDE4LjYwOSw2Mi41ODIsMjguNDQ1LDk3LjA0NywyOC40NDVjNjcuNzU0LDAsMTEwLjEzOS0zMS45NSwxMzMuNzY0LTU4Ljc1M2MyOS40Ni0zMy40MjEsNDYuMzU2LTc3LjY1OCw0Ni4zNTYtMTIxLjM2NwoJCWMwLTEuODI2LTAuMDI4LTMuNjctMC4wODQtNS41MDhjMTEuNjIzLTguNzU3LDIxLjYzLTE5LjM1NSwyOS43NzMtMzEuNTM2YzEuMjM3LTEuODUsMS4xMDMtNC4yOTUtMC4zMy01Ljk5OAoJCUMzMDcuMzk0LDU3LjAzNywzMDUuMDA5LDU2LjQ4NiwzMDIuOTczLDU3LjM4OHoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",alt:"Twitter icon"}))))))))}},5609:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(7294),a=n(417),o=n.n(a),l=n(9008),u=n(262),i=(n(2503),n.p+"static/contact-545fc4ea2185a6acf0ecbe73b9fc6023.jpg"),c=n(9792),M=function(e){return r.createElement(o(),{className:"post-template page-template page"},r.createElement(l.Z,{location:e.location,title:"Contact"},r.createElement(u.Z,{title:"Contact Florian Verdonck at nojaf.com",keywords:["blog","blog.nojaf.com"]}),r.createElement(c.Z,{image:i,title:"Contact Nojaf",date:"2022-05-07"}),r.createElement("main",{className:"py-5 container page"},r.createElement("article",null,r.createElement("h2",{id:"howtopingme"},"Reach out, touch faith"),r.createElement("h3",null,"Business inquiries"),r.createElement("p",null,"For all business inquiries and more heartfelt matters I recommend you ",r.createElement("strong",null,"email")," me at:",r.createElement("br",null),r.createElement("a",{href:"mailto:florian@nojaf.com"},"florian@nojaf.com")),r.createElement("h3",null,"Updates on my work in the open"),r.createElement("h4",null,"Twitter"),r.createElement("p",null,"I am quite the Twitter enthusiast and I frequently tweet about new developments.",r.createElement("br",null),"You can follow"," ",r.createElement("a",{href:"http://twitter.com/verdonckflorian"},r.createElement("strong",null,"@verdonckflorian")),"."),r.createElement("h4",null,"GitHub"),r.createElement("p",null,"The one and only ",r.createElement("a",{href:"https://github.com/nojaf"},r.createElement("strong",null,"@nojaf"))," on"," ",r.createElement("a",{href:"https://github.com/nojaf"},"Github"),"."),r.createElement("h4",null,"YouTube"),r.createElement("p",null,"Discover my ",r.createElement("a",{href:"https://www.youtube.com/user/nojaf/videos"},"YouTube channel")," for cinematic entertainment."),r.createElement("h4",null,"Linkedin"),r.createElement("p",null,"Visit my ",r.createElement("strong",null,"profile")," on"," ",r.createElement("a",{href:"https://www.linkedin.com/in/florian-verdonck"},"Linkedin"),".")))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-a2e72049f012fc7da4db.js.map