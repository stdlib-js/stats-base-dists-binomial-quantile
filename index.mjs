// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcinv@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-cdf@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@v0.2.2-esm/index.mjs";function j(t,s,e,n){for(;0!==t&&d(t-1,e,n)>=s;)t-=1;return t}function f(t,s,e,n){for(t+=1;d(t,e,n)<s;)t+=1;return t}function p(t,a,l){var p,c,h,v,u;return n(t)||n(a)||n(l)||t<0||t>1||l<0||l>1||!s(a)||a===o?NaN:1===t||1===l?a:0===t||0===l||0===a?0:(v=a*l,p=1/(h=r(a*l*(1-l))),u=t<.5?-e(2*t)*m:e(2*(1-t))*m,c=i(v+h*(u+p*(u*u-1)/6)),d(c,a,l)>=t?j(c,t,a,l):f(c,t,a,l))}function c(t,p){var c,h,v;return n(t)||n(p)||!s(t)||t===o||p<0||p>1?a(NaN):0===p||0===t?l(0):1===p?l(t):(v=t*p,h=r(t*p*(1-p)),c=1/h,function(s){var r,o;if(n(s)||s<0||s>1)return NaN;if(0===s)return 0;if(1===s)return t;o=s<.5?-e(2*s)*m:e(2*(1-s))*m;if(r=i(v+h*(o+c*(o*o-1)/6)),d(r,t,p)>=s)return j(r,s,t,p);return f(r,s,t,p)})}t(p,"factory",c);export{p as default,c as factory};
//# sourceMappingURL=index.mjs.map
