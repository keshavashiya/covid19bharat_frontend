(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{105:function(e,t,r){"use strict";var n=r(47),o=r(2),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(o.useState)(!1),r=Object(n.a)(t,2),a=r[0],c=r[1];return Object(o.useEffect)((function(){e.current&&new IntersectionObserver((function(t,r){t.forEach((function(t){t.isIntersecting&&(c(!0),r.unobserve(e.current))}))}),i).observe(e.current)}),[e]),a}},197:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}(r(2)),a=(o=r(198))&&o.__esModule?o:{default:o};function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){var t=e.title,r=e.src,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["title","src"]),o=(0,i.useRef)(),a=s((0,i.useState)(500),2),c=a[0],l=a[1],f=(0,i.useCallback)((function(e){var t=e.data,r=void 0===t?{}:t;e.source===o.current.contentWindow&&"string"!=typeof r&&r["datawrapper-height"]&&l(Object.values(r["datawrapper-height"])[0])}),[l,o]);return(0,i.useEffect)((function(){return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}}),[c,l,f]),i.default.createElement("iframe",u({ref:o,scrolling:"no",frameBorder:"0",width:"100%"},n,{title:t,src:r,height:c}))}f.propTypes={title:a.default.string.isRequired,src:a.default.string.isRequired,loading:a.default.oneOf(["eager","lazy"])}},198:function(e,t,r){e.exports=r(199)()},199:function(e,t,r){"use strict";var n=r(200);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},200:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},250:function(e,t,r){"use strict";r.r(t);var n=r(105),o=r(24),i=r(2),a=r(197),c=r.n(a),u=r(116),s=r(5),l=r(19),f=Object(i.lazy)((function(){return Object(o.l)((function(){return r.e(5).then(r.bind(null,128))}))}));t.default=function(){var e=Object(s.h)(),t=Object(i.useRef)(),r=Object(n.a)(t);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(u.a,{children:[Object(l.jsx)("title",{children:"Coronavirus Outbreak in India - covid19bharat.org"}),Object(l.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(l.jsx)("div",{className:"Home",ref:t,children:(r||e.hash)&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"home-left",children:Object(l.jsx)(c.a,{title:"hospitalization-60days",src:"https://datawrapper.dwcdn.net/1s4oD/5/"})}),Object(l.jsx)("div",{className:"home-right",children:Object(l.jsx)(c.a,{title:"hospitalization-total",src:"https://datawrapper.dwcdn.net/h4L6F/5/"})})]})}),r&&Object(l.jsx)(i.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(f,{})})]})}}}]);
//# sourceMappingURL=22.69f720e0.chunk.js.map