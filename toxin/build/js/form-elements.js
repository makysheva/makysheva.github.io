!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=6)}({6:function(e,n,r){"use strict";r.r(n);r(7);console.log("in form-elements.js"),function(){const e=document.querySelectorAll(".form-elements__input--dropdown"),n=document.querySelectorAll(".dropdown__menu");e.forEach(e=>{e.addEventListener("click",()=>{n.forEach(e=>{e.classList.add("dropdown__menu--open")})})}),e.forEach(e=>{e.removeEventListener("click",()=>{n.forEach(e=>{e.classList.remove("dropdown__menu--open")})})})}();const t=document.querySelectorAll(".dropdown__minus");Array.from(t).forEach(e=>{e.addEventListener("click",(function(e){}))})},7:function(e,n,r){}});