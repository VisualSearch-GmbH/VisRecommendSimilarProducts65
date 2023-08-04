/*! For license information please see vis-recommend-similar-products.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=(window.__sw__.assetPath + '/bundles/visrecommendsimilarproducts/'),r(r.s="66ES")}({"/Yf/":function(e){e.exports=JSON.parse('{"vis-get-credentials":{"title":"Please click here to get your API credentials"},"vis-verify-api-key":{"success":"Connection was successfully established.","error":"Connection could not be established. Please check your API credentials.","apiButton":"Validate API credentials"},"vis-support":{"documentation":"Documentation","api_documentation":"API Documentation","read_docs":"Read our documentation for more information about VisualSearch and how to get started","manual":"Manual","changelog":"Changelog","faq":"FAQ","for_developers":"For developers","account":"Account","e-mail":"E-mail","telephone":"Telephone","contact":"Contact","visualsearch_assistance_integration_team":"Need assistance? Feel free to contact our integration team:"}}')},"5Cfn":function(e,t,r){var n=r("KgqH");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("ydqr").default)("72393c06",n,!0,{})},"66ES":function(e,t,r){"use strict";r.r(t);const n=Shopware.Classes.ApiService;var o=class extends n{constructor(e,t,r="vis/sim"){super(e,t,r)}verifyKey(){const e=`/_action/${this.getApiBasePath()}/api_key_verify`;return this.httpClient.post(e,{},{baseURL:Shopware.Context.api.apiPath,headers:this.getBasicHeaders()}).then((e=>e))}};const{Application:i}=Shopware;i.addServiceProvider("ApiKeyVerifyService",(e=>{const t=i.getContainer("init");return new o(t.httpClient,e.loginService)}));r("5Cfn");Shopware.Component.register("vis-get-credentials",{template:'<template>\n    <div id="visualsearch-get-credentials">\n        <p class="gc-1">\n        <a href="https://www.visualsearch.at/index.php/credentials" target="_blank" rel="noopener">\n            {{ $tc("vis-get-credentials.title") }}\n        </a>\n        </p>\n    </div>\n</template>\n'});r("q8CO");Shopware.Component.register("vis-support",{template:'<template>\n    <div id="visualsearch-support">\n        <h2 class="visualsearch-title">{{ $tc("vis-support.documentation") }}</h2>\n        <p>{{ $tc("vis-support.read_docs") }}:</p>\n        <p class="mt-1">{{ $tc("vis-support.for_developers") }}:\n            <a href="https://github.com/VisualSearch-GmbH/VisRecommendSimilarProducts" target="_blank" rel="noopener">\n                VisualSearch Github\n            </a>\n        </p>\n        <h2 class="mt-2">{{ $tc("vis-support.contact") }}</h2>\n        <p>\n            {{ $tc("vis-support.visualsearch_assistance_integration_team") }}\n        </p>\n        <ul class="visualsearch-ul-none">\n            <li>\n                {{ $tc("vis-support.telephone") }}:\n                <a href="tel:+43 670 6017118">\n                    +43 670 6017118\n                </a>\n            </li>\n            <li>\n                {{ $tc("vis-support.e-mail") }}:\n                <a href="mailto:office@visualsearch.at">\n                    office@visualsearch.at\n                </a>\n            </li>\n        </ul>\n    </div>\n\n</template>\n'});function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,o){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),s=new P(o||[]);return n(a,"_invoke",{value:_(e,r,s)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var h={};function d(){}function v(){}function y(){}var g={};l(g,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(C([])));b&&b!==t&&r.call(b,i)&&(g=b);var w=y.prototype=d.prototype=Object.create(g);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function o(n,i,s,c){var u=p(e[n],e,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==a(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,s,c)}),(function(e){o("throw",e,s,c)})):t.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return o("throw",e,s,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function _(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},S(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function c(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}var u=Shopware,l=u.Component,f=u.Mixin;l.register("vis-verify-api-key",{template:'<div>\n    <sw-button-process\n        :isLoading="isLoading"\n        @click="check"\n    >{{ $tc(\'vis-verify-api-key.apiButton\') }}</sw-button-process>\n</div>\n',mixins:[f.getByName("notification")],inject:["ApiKeyVerifyService"],data:function(){return{isLoading:!1}},methods:{check:function(){var e,t=this;return(e=s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.ApiKeyVerifyService.verifyKey().then((function(e){1==e.data.success?t.createNotificationSuccess({title:"VisualSearch",message:t.$tc("vis-verify-api-key.success")}):t.createNotificationError({title:"VisualSearch",message:t.$tc("vis-verify-api-key.error")})})).catch((function(e){}));case 3:return t.isLoading=!1,e.abrupt("return");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){c(i,n,o,a,s,"next",e)}function s(e){c(i,n,o,a,s,"throw",e)}a(void 0)}))})()}}});var p=r("RoL/"),h=r("/Yf/");Shopware.Locale.extend("de-DE",p),Shopware.Locale.extend("en-GB",h)},KgqH:function(e,t,r){},"RoL/":function(e){e.exports=JSON.parse('{"vis-get-credentials":{"title":"Klicken Sie bitte hier, um Ihre API-Zugangsdaten zu erhalten"},"vis-verify-api-key":{"success":"Die Verbindung wurde erfolgreich hergestellt.","error":"Verbindung konnte nicht hergestellt werden. Überprüfen Sie bitte Ihre API-Zugangsdaten.","apiButton":"API-Zugangsdaten testen"},"vis-support":{"documentation":"Dokumentation","api_documentation":"API Dokumentation","read_docs":"Lesen Sie in unserem Dokumentationen mehr über VisualSearch und wie Sie mit uns starten können","manual":"Anleitung","changelog":"Änderungsprotokoll","faq":"FAQ","for_developers":"Für Entwickler","account":"Account","e-mail":"E-Mail","telephone":"Telefon","contact":"Kontakt","visualsearch_assistance_integration_team":"Sie brauchen Hilfe? Kontaktieren Sie unser Integrations-Team:"}}')},jyhN:function(e,t,r){},q8CO:function(e,t,r){var n=r("jyhN");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("ydqr").default)("6c20129a",n,!0,{})},ydqr:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}r.r(t),r.d(t,"default",(function(){return d}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},f=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e,t,r,o){u=r,f=o||{};var a=n(e,t);return v(a),function(t){for(var r=[],o=0;o<a.length;o++){var s=a[o];(c=i[s.id]).refs--,r.push(c)}t?v(a=n(e,t)):a=[];for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(g(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(g(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function y(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,r,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(u)return l;n.parentNode.removeChild(n)}if(h){var o=c++;n=s||(s=y()),t=w.bind(null,n,o,!1),r=w.bind(null,n,o,!0)}else n=y(),t=S.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function w(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),f.ssrId&&e.setAttribute(p,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}});
//# sourceMappingURL=vis-recommend-similar-products.js.map