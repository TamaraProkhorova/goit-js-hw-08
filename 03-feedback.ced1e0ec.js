!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return s.Date.now()};function b(t,e,n){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(r);function b(e){var n=i,r=o;return i=o=void 0,l=e,f=t.apply(r,n)}function O(t){return l=t,a=setTimeout(h,e),d?b(t):f}function T(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function h(){var t=y();if(T(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-c);return s?g(n,u-(t-l)):n}(t))}function w(t){return a=void 0,v&&i?b(t):(i=o=void 0,f)}function S(){var t=y(),n=T(t);if(i=arguments,o=this,c=t,n){if(void 0===a)return O(c);if(s)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=j(e)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},S.flush=function(){return void 0===a?f:w(y())},S}function m(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=f.test(e);return r||a.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:i,maxWait:e,trailing:o})};var O,T=document.querySelector("form"),h="feedback-form-state",w={};O=JSON.parse(localStorage.setItem(h)),console.log(O),T.addEventListener("input",t(e)((function(t){w[t.target.name]=t.target.value,localStorage.setItem(h,JSON.stringify(w),500)}))),T.addEventListener("submit",(function(t){t.preventDefault(),console.log(w),t.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.ced1e0ec.js.map