!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,s(e,t,"set"),n),n}function l(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,s(e,t,"get"))}function s(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}n.r(t);var p=new WeakMap,h=new WeakMap,b=new WeakMap,d=new WeakMap,v=new WeakMap,y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(this,e),p.set(this,{writable:!0,value:{faviconSize:16,bg:"#ed2e52",font:'8px "helvetica", sans-serif',color:"#fff"}}),h.set(this,{writable:!0,value:!1}),b.set(this,{writable:!0,value:void 0}),d.set(this,{writable:!0,value:function(){var e=document.querySelector('link[rel="icon"]')||document.querySelector('link[rel="shortcut icon"]');if(!e)throw new Error('DOMElement "favicon" is nor defined');return e}}),v.set(this,{writable:!0,value:function(e){var t=this,n=this.config.faviconSize,r=document.createElement("canvas");r.width=this.config.faviconSize,r.height=this.config.faviconSize;var o=r.getContext("2d"),i=document.createElement("img");return i.src=this.favicon.href,new Promise((function(c){i.onload=function(){o.drawImage(i,0,0,n,n),o.beginPath(),o.arc(r.width-n/3,n/3,n/3,0,2*Math.PI),o.fillStyle=t.config.bg,o.fill(),e&&(o.font=t.config.font,o.textAlign="center",o.textBaseline="middle",o.fillStyle=t.config.color,o.fillText(e,r.width-n/3,n/3)),c(r.toDataURL("image/png"))}}))}}),this.constructor.instance||(this.constructor.instance=this,this.config=i(i({},l(this,p)),t),this.favicon=l(this,d).call(this),u(this,b,this.favicon&&this.favicon.href)),this.constructor.instance}var t,n,o;return t=e,(n=[{key:"hasBadge",value:function(){return l(this,h)}},{key:"setBadge",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!["string","number"].includes(r(t)))throw new Error('Param count is not a "string" or "number"');l(this,v).call(this,t).then((function(t){l(e,h)&&e.removeBadge(),e.favicon.href=t,u(e,h,!0)}))}},{key:"removeBadge",value:function(){this.favicon.href=l(this,b),u(this,h,!1)}}])&&f(t.prototype,n),o&&f(t,o),e}();t.default=y}]).default}));