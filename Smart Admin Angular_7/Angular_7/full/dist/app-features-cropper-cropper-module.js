(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-features-cropper-cropper-module"],{

/***/ "./node_modules/cropperjs/dist/cropper.min.js":
/*!****************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.4.3
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-10-24T13:07:15.032Z
 */
!function(t,i){ true?module.exports=i():undefined}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function bt(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o="undefined"!=typeof window,h=o?window:{},d="cropper",k="all",T="crop",E="move",W="zoom",N="e",H="w",L="s",O="n",z="ne",Y="nw",X="se",R="sw",r="".concat(d,"-crop"),t="".concat(d,"-disabled"),S="".concat(d,"-hidden"),l="".concat(d,"-hide"),p="".concat(d,"-invisible"),s="".concat(d,"-modal"),m="".concat(d,"-move"),g="".concat(d,"Action"),u="".concat(d,"Preview"),c="crop",f="move",v="none",a="crop",w="cropend",b="cropmove",x="cropstart",y="dblclick",M=h.PointerEvent?"pointerdown":"touchstart mousedown",C=h.PointerEvent?"pointermove":"touchmove mousemove",D=h.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",B="ready",A="resize",I="wheel mousewheel DOMMouseScroll",j="zoom",U="image/jpeg",P=/^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,q=/^data:/,$=/^data:image\/jpeg;base64,/,Q=/^(?:img|canvas)$/i,Z={viewMode:0,dragMode:c,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},e=Number.isNaN||h.isNaN;function F(t){return"number"==typeof t&&!e(t)}function K(t){return void 0===t}function G(t){return"object"===i(t)&&null!==t}var V=Object.prototype.hasOwnProperty;function J(t){if(!G(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&V.call(e,"isPrototypeOf")}catch(t){return!1}}function _(t){return"function"==typeof t}function tt(i,e){if(i&&_(e))if(Array.isArray(i)||F(i.length)){var t,a=i.length;for(t=0;t<a&&!1!==e.call(i,i[t],t,i);t+=1);}else G(i)&&Object.keys(i).forEach(function(t){e.call(i,i[t],t,i)});return i}var it=Object.assign||function(e){for(var t=arguments.length,i=new Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return G(e)&&0<i.length&&i.forEach(function(i){G(i)&&Object.keys(i).forEach(function(t){e[t]=i[t]})}),e},et=/\.\d*(?:0|9){12}\d*$/;function xt(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e11;return et.test(t)?Math.round(t*i)/i:t}var at=/^(?:width|height|left|top|marginLeft|marginTop)$/;function nt(t,i){var e=t.style;tt(i,function(t,i){at.test(i)&&F(t)&&(t+="px"),e[i]=t})}function ot(t,i){if(i)if(F(t.length))tt(t,function(t){ot(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function ht(t,i){i&&(F(t.length)?tt(t,function(t){ht(t,i)}):t.classList?t.classList.remove(i):0<=t.className.indexOf(i)&&(t.className=t.className.replace(i,"")))}function rt(t,i,e){i&&(F(t.length)?tt(t,function(t){rt(t,i,e)}):e?ot(t,i):ht(t,i))}var st=/([a-z\d])([A-Z])/g;function ct(t){return t.replace(st,"$1-$2").toLowerCase()}function dt(t,i){return G(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(ct(i)))}function lt(t,i,e){G(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(ct(i)),e)}var pt=/\s\s*/,mt=function(){var t=!1;if(o){var i=!1,e=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});h.addEventListener("test",e,a),h.removeEventListener("test",e,a)}return t}();function gt(e,t,a){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=a;t.trim().split(pt).forEach(function(t){if(!mt){var i=e.listeners;i&&i[t]&&i[t][a]&&(o=i[t][a],delete i[t][a],0===Object.keys(i[t]).length&&delete i[t],0===Object.keys(i).length&&delete e.listeners)}e.removeEventListener(t,o,n)})}function ut(o,t,h){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},s=h;t.trim().split(pt).forEach(function(a){if(r.once&&!mt){var t=o.listeners,n=void 0===t?{}:t;s=function(){delete n[a][h],o.removeEventListener(a,s,r);for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];h.apply(o,i)},n[a]||(n[a]={}),n[a][h]&&o.removeEventListener(a,n[a][h],r),n[a][h]=s,o.listeners=n}o.addEventListener(a,s,r)})}function ft(t,i,e){var a;return _(Event)&&_(CustomEvent)?a=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(a)}function vt(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}var wt=h.location,yt=/^(https?:)\/\/([^:/?#]+):?(\d*)/i;function Mt(t){var i=t.match(yt);return i&&(i[1]!==wt.protocol||i[2]!==wt.hostname||i[3]!==wt.port)}function Ct(t){var i="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+i}function Dt(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,h=[];F(n)&&0!==n&&h.push("translateX(".concat(n,"px)")),F(o)&&0!==o&&h.push("translateY(".concat(o,"px)")),F(i)&&0!==i&&h.push("rotate(".concat(i,"deg)")),F(e)&&1!==e&&h.push("scaleX(".concat(e,")")),F(a)&&1!==a&&h.push("scaleY(".concat(a,")"));var r=h.length?h.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}function Bt(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:it({startX:e,startY:a},n)}var kt=Number.isFinite||h.isFinite;function Tt(t){var i=t.aspectRatio,e=t.height,a=t.width,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"contain",o=function(t){return kt(t)&&0<t};if(o(a)&&o(e)){var h=e*i;"contain"===n&&a<h||"cover"===n&&h<a?e=a/i:a=e*i}else o(a)?e=a/i:o(e)&&(a=e*i);return{width:a,height:e}}var Et=String.fromCharCode;var Wt=/^data:.*,/;function Nt(t){var i,e=new DataView(t);try{var a,n,o;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var h=e.byteLength,r=2;r+1<h;){if(255===e.getUint8(r)&&225===e.getUint8(r+1)){n=r;break}r+=1}if(n){var s=n+10;if("Exif"===function(t,i,e){var a,n="";for(e+=i,a=i;a<e;a+=1)n+=Et(t.getUint8(a));return n}(e,n+4,4)){var c=e.getUint16(s);if(((a=18761===c)||19789===c)&&42===e.getUint16(s+2,a)){var d=e.getUint32(s+4,a);8<=d&&(o=s+d)}}}if(o){var l,p,m=e.getUint16(o,a);for(p=0;p<m;p+=1)if(l=o+12*p+2,274===e.getUint16(l,a)){l+=8,i=e.getUint16(l,a),e.setUint16(l,1,a);break}}}catch(t){i=1}return i}var Ht={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;ot(a,S),ht(t,S);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};nt(a,{width:(this.containerData=n).width,height:n.height}),ot(t,S),ht(a,S)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180==90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,h=n/o,r=t.width,s=t.height;t.height*h>t.width?3===e?r=t.height*h:s=t.width/h:3===e?s=t.width/h:r=t.height*h;var c={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:r,height:s};c.left=(t.width-r)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=it({},i),this.initialCanvasData=it({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=e.viewMode,r=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,d=Number(e.minCanvasHeight)||0;1<h?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===h&&(c<d*r?c=d*r:d=c/r)):0<h&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&((c=o.width)<(d=o.height)*r?c=d*r:d=c/r));var l=Tt({aspectRatio:r,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if((s?0:1)<h){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===h&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=function(t){var i=t.width,e=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),h=Math.cos(n),r=i*h+e*o,s=i*o+e*h;return 90<a?{width:s,height:r}:{width:r,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,h=n.height,r=e.width*(o/e.naturalWidth),s=e.height*(h/e.naturalHeight);e.left-=(r-e.width)/2,e.top-=(s-e.height)/2,e.width=r,e.height=s,e.aspectRatio=o/h,e.naturalWidth=o,e.naturalHeight=h,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,nt(this.canvas,it({width:e.width,height:e.height},Dt({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);it(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),nt(this.image,it({width:e.width,height:e.height},Dt(it({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=it({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=this.limited,r=e.aspectRatio;if(t){var s=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,d=h?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,l=h?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),r&&(s&&c?s<c*r?c=s/r:s=c*r:s?c=s/r:c&&(s=c*r),d<l*r?l=d/r:d=l*r),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}i&&(o.maxTop=h?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&lt(this.face,g,e.width>=i.width&&e.height>=i.height?E:k),nt(this.cropBox,it({width:e.width,height:e.height},Dt({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),ft(this.element,a,this.getData())}},Lt={initPreview:function(){var e=this.crossOrigin,t=this.options.preview,a=e?this.crossOriginUrl:this.url,i=document.createElement("img");if(e&&(i.crossOrigin=e),i.src=a,this.viewBox.appendChild(i),this.viewBoxImage=i,t){var n=t;"string"==typeof t?n=this.element.ownerDocument.querySelectorAll(t):t.querySelector&&(n=[t]),tt(this.previews=n,function(t){var i=document.createElement("img");lt(t,u,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=a,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)})}},resetPreview:function(){tt(this.previews,function(t){var i=dt(t,u);nt(t,{width:i.width,height:i.height}),t.innerHTML=i.html,function(i,e){if(G(i[e]))try{delete i[e]}catch(t){i[e]=void 0}else if(i.dataset)try{delete i.dataset[e]}catch(t){i.dataset[e]=void 0}else i.removeAttribute("data-".concat(ct(e)))}(t,u)})},preview:function(){var r=this.imageData,t=this.canvasData,i=this.cropBoxData,s=i.width,c=i.height,d=r.width,l=r.height,p=i.left-t.left-r.left,m=i.top-t.top-r.top;this.cropped&&!this.disabled&&(nt(this.viewBoxImage,it({width:d,height:l},Dt(it({translateX:-p,translateY:-m},r)))),tt(this.previews,function(t){var i=dt(t,u),e=i.width,a=i.height,n=e,o=a,h=1;s&&(o=c*(h=e/s)),c&&a<o&&(n=s*(h=a/c),o=a),nt(t,{width:n,height:o}),nt(t.getElementsByTagName("img")[0],it({width:d*h,height:l*h},Dt(it({translateX:-p*h,translateY:-m*h},r))))}))}},Ot={bind:function(){var t=this.element,i=this.options,e=this.cropper;_(i.cropstart)&&ut(t,x,i.cropstart),_(i.cropmove)&&ut(t,b,i.cropmove),_(i.cropend)&&ut(t,w,i.cropend),_(i.crop)&&ut(t,a,i.crop),_(i.zoom)&&ut(t,j,i.zoom),ut(e,M,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&ut(e,I,this.onWheel=this.wheel.bind(this)),i.toggleDragModeOnDblclick&&ut(e,y,this.onDblclick=this.dblclick.bind(this)),ut(t.ownerDocument,C,this.onCropMove=this.cropMove.bind(this)),ut(t.ownerDocument,D,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&ut(window,A,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;_(i.cropstart)&&gt(t,x,i.cropstart),_(i.cropmove)&&gt(t,b,i.cropmove),_(i.cropend)&&gt(t,w,i.cropend),_(i.crop)&&gt(t,a,i.crop),_(i.zoom)&&gt(t,j,i.zoom),gt(e,M,this.onCropStart),i.zoomable&&i.zoomOnWheel&&gt(e,I,this.onWheel),i.toggleDragModeOnDblclick&&gt(e,y,this.onDblclick),gt(t.ownerDocument,C,this.onCropMove),gt(t.ownerDocument,D,this.onCropEnd),i.responsive&&gt(window,A,this.onResize)}},zt={resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var o,h,r=i.offsetWidth/e.width;if(1!==r||i.offsetHeight!==e.height)t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(tt(o,function(t,i){o[i]=t*r})),this.setCropBoxData(tt(h,function(t,i){h[i]=t*r})))}},dblclick:function(){var t,i;this.disabled||this.options.dragMode===v||this.setDragMode((t=this.dragBox,i=r,(t.classList?t.classList.contains(i):-1<t.className.indexOf(i))?f:c))},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){if(!this.disabled){var i,e=this.options,a=this.pointers;t.changedTouches?tt(t.changedTouches,function(t){a[t.identifier]=Bt(t)}):a[t.pointerId||0]=Bt(t),i=1<Object.keys(a).length&&e.zoomable&&e.zoomOnTouch?W:dt(t.target,g),P.test(i)&&!1!==ft(this.element,x,{originalEvent:t,action:i})&&(t.preventDefault(),this.action=i,this.cropping=!1,i===T&&(this.cropping=!0,ot(this.dragBox,s)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),!1!==ft(this.element,b,{originalEvent:t,action:i})&&(t.changedTouches?tt(t.changedTouches,function(t){it(e[t.identifier]||{},Bt(t,!0))}):it(e[t.pointerId||0]||{},Bt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?tt(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,rt(this.dragBox,s,this.cropped&&this.options.modal)),ft(this.element,w,{originalEvent:t,action:i}))}}},Yt={change:function(t){var i,e=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,h=this.pointers,r=this.action,s=e.aspectRatio,c=o.left,d=o.top,l=o.width,p=o.height,m=c+l,g=d+p,u=0,f=0,v=n.width,w=n.height,b=!0;!s&&t.shiftKey&&(s=l&&p?l/p:1),this.limited&&(u=o.minLeft,f=o.minTop,v=u+Math.min(n.width,a.width,a.left+a.width),w=f+Math.min(n.height,a.height,a.top+a.height));var x,y,M,C=h[Object.keys(h)[0]],D={x:C.endX-C.startX,y:C.endY-C.startY},B=function(t){switch(t){case N:m+D.x>v&&(D.x=v-m);break;case H:c+D.x<u&&(D.x=u-c);break;case O:d+D.y<f&&(D.y=f-d);break;case L:g+D.y>w&&(D.y=w-g)}};switch(r){case k:c+=D.x,d+=D.y;break;case N:if(0<=D.x&&(v<=m||s&&(d<=f||w<=g))){b=!1;break}B(N),(l+=D.x)<0&&(r=H,c-=l=-l),s&&(p=l/s,d+=(o.height-p)/2);break;case O:if(D.y<=0&&(d<=f||s&&(c<=u||v<=m))){b=!1;break}B(O),p-=D.y,d+=D.y,p<0&&(r=L,d-=p=-p),s&&(l=p*s,c+=(o.width-l)/2);break;case H:if(D.x<=0&&(c<=u||s&&(d<=f||w<=g))){b=!1;break}B(H),l-=D.x,c+=D.x,l<0&&(r=N,c-=l=-l),s&&(p=l/s,d+=(o.height-p)/2);break;case L:if(0<=D.y&&(w<=g||s&&(c<=u||v<=m))){b=!1;break}B(L),(p+=D.y)<0&&(r=O,d-=p=-p),s&&(l=p*s,c+=(o.width-l)/2);break;case z:if(s){if(D.y<=0&&(d<=f||v<=m)){b=!1;break}B(O),p-=D.y,d+=D.y,l=p*s}else B(O),B(N),0<=D.x?m<v?l+=D.x:D.y<=0&&d<=f&&(b=!1):l+=D.x,D.y<=0?f<d&&(p-=D.y,d+=D.y):(p-=D.y,d+=D.y);l<0&&p<0?(r=R,d-=p=-p,c-=l=-l):l<0?(r=Y,c-=l=-l):p<0&&(r=X,d-=p=-p);break;case Y:if(s){if(D.y<=0&&(d<=f||c<=u)){b=!1;break}B(O),p-=D.y,d+=D.y,l=p*s,c+=o.width-l}else B(O),B(H),D.x<=0?u<c?(l-=D.x,c+=D.x):D.y<=0&&d<=f&&(b=!1):(l-=D.x,c+=D.x),D.y<=0?f<d&&(p-=D.y,d+=D.y):(p-=D.y,d+=D.y);l<0&&p<0?(r=X,d-=p=-p,c-=l=-l):l<0?(r=z,c-=l=-l):p<0&&(r=R,d-=p=-p);break;case R:if(s){if(D.x<=0&&(c<=u||w<=g)){b=!1;break}B(H),l-=D.x,c+=D.x,p=l/s}else B(L),B(H),D.x<=0?u<c?(l-=D.x,c+=D.x):0<=D.y&&w<=g&&(b=!1):(l-=D.x,c+=D.x),0<=D.y?g<w&&(p+=D.y):p+=D.y;l<0&&p<0?(r=z,d-=p=-p,c-=l=-l):l<0?(r=X,c-=l=-l):p<0&&(r=Y,d-=p=-p);break;case X:if(s){if(0<=D.x&&(v<=m||w<=g)){b=!1;break}B(N),p=(l+=D.x)/s}else B(L),B(N),0<=D.x?m<v?l+=D.x:0<=D.y&&w<=g&&(b=!1):l+=D.x,0<=D.y?g<w&&(p+=D.y):p+=D.y;l<0&&p<0?(r=Y,d-=p=-p,c-=l=-l):l<0?(r=R,c-=l=-l):p<0&&(r=z,d-=p=-p);break;case E:this.move(D.x,D.y),b=!1;break;case W:this.zoom((y=it({},x=h),M=[],tt(x,function(r,t){delete y[t],tt(y,function(t){var i=Math.abs(r.startX-t.startX),e=Math.abs(r.startY-t.startY),a=Math.abs(r.endX-t.endX),n=Math.abs(r.endY-t.endY),o=Math.sqrt(i*i+e*e),h=(Math.sqrt(a*a+n*n)-o)/o;M.push(h)})}),M.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),M[0]),t),b=!1;break;case T:if(!D.x||!D.y){b=!1;break}i=vt(this.cropper),c=C.startX-i.left,d=C.startY-i.top,l=o.minWidth,p=o.minHeight,0<D.x?r=0<D.y?X:z:D.x<0&&(c-=l,r=0<D.y?R:Y),D.y<0&&(d-=p),this.cropped||(ht(this.cropBox,S),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(o.width=l,o.height=p,o.left=c,o.top=d,this.action=r,this.renderCropBox()),tt(h,function(t){t.startX=t.endX,t.startY=t.endY})}},Xt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&ot(this.dragBox,s),ht(this.cropBox,S),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=it({},this.initialImageData),this.canvasData=it({},this.initialCanvasData),this.cropBoxData=it({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(it(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),ht(this.dragBox,s),ot(this.cropBox,S)),this},replace:function(i){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&i&&(this.isImg&&(this.element.src=i),t?(this.url=i,this.image.src=i,this.ready&&(this.viewBoxImage.src=i,tt(this.previews,function(t){t.getElementsByTagName("img")[0].src=i}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(i))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,ht(this.cropper,t)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,ot(this.cropper,t)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=e.left,n=e.top;return this.moveTo(K(t)?t:a+Number(t),K(i)?i:n+Number(i))},moveTo:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(F(t)&&(e.left=t,a=!0),F(i)&&(e.top=i,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var a,n,o,h=this.options,r=this.canvasData,s=r.width,c=r.height,d=r.naturalWidth,l=r.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&h.zoomable){var p=d*t,m=l*t;if(!1===ft(this.element,j,{ratio:t,oldRatio:s/d,originalEvent:e}))return this;if(e){var g=this.pointers,u=vt(this.cropper),f=g&&Object.keys(g).length?(o=n=a=0,tt(g,function(t){var i=t.startX,e=t.startY;a+=i,n+=e,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:e.pageX,pageY:e.pageY};r.left-=(p-s)*((f.pageX-u.left-r.left)/s),r.top-=(m-c)*((f.pageY-u.top-r.top)/c)}else J(i)&&F(i.x)&&F(i.y)?(r.left-=(p-s)*((i.x-r.left)/s),r.top-=(m-c)*((i.y-r.top)/c)):(r.left-=(p-s)/2,r.top-=(m-c)/2);r.width=p,r.height=m,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return F(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,F(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(F(i)?i:1,t)},scale:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(F(t)&&(e.scaleX=t,a=!0),F(i)&&(e.scaleY=i,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var e,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],i=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){e={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var h=a.width/a.naturalWidth;if(tt(e,function(t,i){e[i]=t/h}),t){var r=Math.round(e.y+e.height),s=Math.round(e.x+e.width);e.x=Math.round(e.x),e.y=Math.round(e.y),e.width=s-e.x,e.height=r-e.y}}else e={x:0,y:0,width:0,height:0};return i.rotatable&&(e.rotate=a.rotate||0),i.scalable&&(e.scaleX=a.scaleX||1,e.scaleY=a.scaleY||1),e},setData:function(t){var i=this.options,e=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&J(t)){var o=!1;i.rotatable&&F(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(F(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),F(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var h=e.width/e.naturalWidth;F(t.x)&&(n.left=t.x*h+a.left),F(t.y)&&(n.top=t.y*h+a.top),F(t.width)&&(n.width=t.width*h),F(t.height)&&(n.height=t.height*h),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?it({},this.containerData):{}},getImageData:function(){return this.sized?it({},this.imageData):{}},getCanvasData:function(){var i=this.canvasData,e={};return this.ready&&tt(["left","top","width","height","naturalWidth","naturalHeight"],function(t){e[t]=i[t]}),e},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&J(t)&&(F(t.left)&&(i.left=t.left),F(t.top)&&(i.top=t.top),F(t.width)?(i.width=t.width,i.height=t.width/e):F(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&J(t)&&(F(t.left)&&(a.left=t.left),F(t.top)&&(a.top=t.top),F(t.width)&&t.width!==a.width&&(i=!0,a.width=t.width),F(t.height)&&t.height!==a.height&&(e=!0,a.height=t.height),n&&(i?a.height=a.width/n:e&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i,e,a,n,o,h,r,s,c,d,l,p,m,g,u,f,v,w,b,x,y,M,C,D,B,k,T,E,W,N,H,L,O,z,Y,X,R,S,A,I,j,U=this.canvasData,P=(i=this.image,e=this.imageData,a=U,n=t,o=e.aspectRatio,h=e.naturalWidth,r=e.naturalHeight,s=e.rotate,c=void 0===s?0:s,d=e.scaleX,l=void 0===d?1:d,p=e.scaleY,m=void 0===p?1:p,g=a.aspectRatio,u=a.naturalWidth,f=a.naturalHeight,v=n.fillColor,w=void 0===v?"transparent":v,b=n.imageSmoothingEnabled,x=void 0===b||b,y=n.imageSmoothingQuality,M=void 0===y?"low":y,C=n.maxWidth,D=void 0===C?1/0:C,B=n.maxHeight,k=void 0===B?1/0:B,T=n.minWidth,E=void 0===T?0:T,W=n.minHeight,N=void 0===W?0:W,H=document.createElement("canvas"),L=H.getContext("2d"),O=Tt({aspectRatio:g,width:D,height:k}),z=Tt({aspectRatio:g,width:E,height:N},"cover"),Y=Math.min(O.width,Math.max(z.width,u)),X=Math.min(O.height,Math.max(z.height,f)),R=Tt({aspectRatio:o,width:D,height:k}),S=Tt({aspectRatio:o,width:E,height:N},"cover"),A=Math.min(R.width,Math.max(S.width,h)),I=Math.min(R.height,Math.max(S.height,r)),j=[-A/2,-I/2,A,I],H.width=xt(Y),H.height=xt(X),L.fillStyle=w,L.fillRect(0,0,Y,X),L.save(),L.translate(Y/2,X/2),L.rotate(c*Math.PI/180),L.scale(l,m),L.imageSmoothingEnabled=x,L.imageSmoothingQuality=M,L.drawImage.apply(L,[i].concat(bt(j.map(function(t){return Math.floor(xt(t))})))),L.restore(),H);if(!this.cropped)return P;var q=this.getData(),$=q.x,Q=q.y,Z=q.width,F=q.height,K=P.width/Math.floor(U.naturalWidth);1!==K&&($*=K,Q*=K,Z*=K,F*=K);var G=Z/F,V=Tt({aspectRatio:G,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),J=Tt({aspectRatio:G,width:t.minWidth||0,height:t.minHeight||0},"cover"),_=Tt({aspectRatio:G,width:t.width||(1!==K?P.width:Z),height:t.height||(1!==K?P.height:F)}),tt=_.width,it=_.height;tt=Math.min(V.width,Math.max(J.width,tt)),it=Math.min(V.height,Math.max(J.height,it));var et=document.createElement("canvas"),at=et.getContext("2d");et.width=xt(tt),et.height=xt(it),at.fillStyle=t.fillColor||"transparent",at.fillRect(0,0,tt,it);var nt=t.imageSmoothingEnabled,ot=void 0===nt||nt,ht=t.imageSmoothingQuality;at.imageSmoothingEnabled=ot,ht&&(at.imageSmoothingQuality=ht);var rt,st,ct,dt,lt,pt,mt=P.width,gt=P.height,ut=$,ft=Q;ut<=-Z||mt<ut?lt=ct=rt=ut=0:ut<=0?(ct=-ut,ut=0,lt=rt=Math.min(mt,Z+ut)):ut<=mt&&(ct=0,lt=rt=Math.min(Z,mt-ut)),rt<=0||ft<=-F||gt<ft?pt=dt=st=ft=0:ft<=0?(dt=-ft,ft=0,pt=st=Math.min(gt,F+ft)):ft<=gt&&(dt=0,pt=st=Math.min(F,gt-ft));var vt=[ut,ft,rt,st];if(0<lt&&0<pt){var wt=tt/Z;vt.push(ct*wt,dt*wt,lt*wt,pt*wt)}return at.drawImage.apply(at,[P].concat(bt(vt.map(function(t){return Math.floor(xt(t))})))),et},setAspectRatio:function(t){var i=this.options;return this.disabled||K(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===c,o=i.movable&&t===f;t=n||o?t:v,i.dragMode=t,lt(e,g,t),rt(e,r,n),rt(e,m,o),i.cropBoxMovable||(lt(a,g,t),rt(a,r,n),rt(a,m,o))}return this}},Rt=h.Cropper,St=function(){function e(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),!t||!Q.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=it({},Z,J(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,i,a;return t=e,a=[{key:"noConflict",value:function(){return window.Cropper=Rt,e}},{key:"setDefaults",value:function(t){it(Z,J(t)&&t)}}],(i=[{key:"init",value:function(){var t,i=this.element,e=i.tagName.toLowerCase();if(!i[d]){if(i[d]=this,"img"===e){if(this.isImg=!0,t=i.getAttribute("src")||"",!(this.originalUrl=t))return;t=i.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=i.toDataURL());this.load(t)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.imageData={};var e=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(q.test(t))$.test(t)?this.read((n=t.replace(Wt,""),o=atob(n),h=new ArrayBuffer(o.length),tt(r=new Uint8Array(h),function(t,i){r[i]=o.charCodeAt(i)}),h)):this.clone();else{var n,o,h,r,s=new XMLHttpRequest,c=this.clone.bind(this);this.reloading=!0,(this.xhr=s).ontimeout=c,s.onabort=c,s.onerror=c,s.onprogress=function(){s.getResponseHeader("content-type")!==U&&s.abort()},s.onload=function(){i.read(s.response)},s.onloadend=function(){i.reloading=!1,i.xhr=null},a.checkCrossOrigin&&Mt(t)&&e.crossOrigin&&(t=Ct(t)),s.open("GET",t),s.responseType="arraybuffer",s.withCredentials="use-credentials"===e.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=Nt(t),n=0,o=1,h=1;if(1<a){this.url=function(t,i){for(var e=[],a=new Uint8Array(t);0<a.length;)e.push(Et.apply(void 0,bt(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}(t,U);var r=function(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:a}}(a);n=r.rotate,o=r.scaleX,h=r.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=h),this.clone()}},{key:"clone",value:function(){var t,i,e=this.element,a=this.url;this.options.checkCrossOrigin&&Mt(a)&&(i=(t=e.crossOrigin)?a:(t="anonymous",Ct(a))),this.crossOrigin=t,this.crossOriginUrl=i;var n=document.createElement("img");t&&(n.crossOrigin=t),n.src=i||a,(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),ot(n,l),e.parentNode.insertBefore(n,e.nextSibling)}},{key:"start",value:function(){var e=this,t=this.isImg?this.element:this.image;t.onload=null,t.onerror=null,this.sizing=!0;var i=h.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(h.navigator.userAgent),a=function(t,i){it(e.imageData,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.sizing=!1,e.sized=!0,e.build()};if(!t.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=t.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,i=this.options,e=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(d,"-container")),h=o.querySelector(".".concat(d,"-canvas")),r=o.querySelector(".".concat(d,"-drag-box")),s=o.querySelector(".".concat(d,"-crop-box")),c=s.querySelector(".".concat(d,"-face"));this.container=a,this.cropper=o,this.canvas=h,this.dragBox=r,this.cropBox=s,this.viewBox=o.querySelector(".".concat(d,"-view-box")),this.face=c,h.appendChild(e),ot(t,S),a.insertBefore(o,t.nextSibling),this.isImg||ht(e,l),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,ot(s,S),i.guides||ot(s.getElementsByClassName("".concat(d,"-dashed")),S),i.center||ot(s.getElementsByClassName("".concat(d,"-center")),S),i.background&&ot(o,"".concat(d,"-bg")),i.highlight||ot(c,p),i.cropBoxMovable&&(ot(c,m),lt(c,g,k)),i.cropBoxResizable||(ot(s.getElementsByClassName("".concat(d,"-line")),S),ot(s.getElementsByClassName("".concat(d,"-point")),S)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),_(i.ready)&&ut(t,B,i.ready,{once:!0}),ft(t,B)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),ht(this.element,S))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(t.prototype,i),a&&n(t,a),e}();return it(St.prototype,Ht,Lt,Ot,zt,Yt,Xt),St});

/***/ }),

/***/ "./src/app/features/cropper/components/cropper/cropper.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/features/cropper/components/cropper/cropper.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-9\">\n    <!-- <h3>Demo:</h3> -->\n    <div class=\"img-container\">\n      <img src=\"{{state.selectedImage}}\" #img alt=\"Picture\">\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <!-- <h3>Preview:</h3> -->\n    <div class=\"docs-preview clearfix\">\n      <div class=\"img-preview preview-lg\"></div>\n      <div class=\"img-preview preview-md\"></div>\n      <div class=\"img-preview preview-sm\"></div>\n      <div class=\"img-preview preview-xs\"></div>\n    </div>\n\n    <!-- <pre class=\"p-2\">{{state.crop | json}}</pre> -->\n\n    <!-- <h3>Data:</h3> -->\n    <div class=\"docs-data\">\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataX\">X</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state.crop.x\" placeholder=\"x\">\n        <span class=\"input-group-append\">\n          <span class=\"input-group-text\">px</span>\n        </span>\n      </div>\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataY\">Y</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state.crop.y\" id=\"dataY\" placeholder=\"y\">\n        <span class=\"input-group-append\">\n          <span class=\"input-group-text\">px</span>\n        </span>\n      </div>\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataWidth\">Width</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" id=\"dataWidth\" [(ngModel)]=\"state.crop.width\" placeholder=\"width\">\n        <span class=\"input-group-append\">\n          <span class=\"input-group-text\">px</span>\n        </span>\n      </div>\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataHeight\">Height</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" id=\"dataHeight\" [(ngModel)]=\"state.crop.height\" placeholder=\"height\">\n        <span class=\"input-group-append\">\n          <span class=\"input-group-text\">px</span>\n        </span>\n      </div>\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataRotate\">Rotate</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" id=\"dataRotate\" [(ngModel)]=\"state.crop.rotate\" placeholder=\"rotate\">\n        <span class=\"input-group-append\">\n          <span class=\"input-group-text\">deg</span>\n        </span>\n      </div>\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataScaleX\">ScaleX</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" id=\"dataScaleX\" [(ngModel)]=\"state.crop.scaleX\" placeholder=\"scaleX\">\n      </div>\n      <div class=\"input-group input-group-sm\">\n        <span class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"dataScaleY\">ScaleY</label>\n        </span>\n        <input type=\"text\" class=\"form-control\" id=\"dataScaleY\" [(ngModel)]=\"state.crop.scaleY\" placeholder=\"scaleY\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"row\" id=\"actions\">\n  <div class=\"col-md-9 docs-buttons\">\n    <!-- <h3>Toolbar:</h3> -->\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.setDragMode('move')\" title=\"Move\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.setDragMode(&quot;move&quot;)\">\n          <span class=\"fa fa-arrows\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.setDragMode('crop')\" title=\"Crop\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.setDragMode(&quot;crop&quot;)\">\n          <span class=\"fa fa-crop\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.zoom(0.1)\" title=\"Zoom In\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.zoom(0.1)\">\n          <span class=\"fa fa-search-plus\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.zoom(-0.1)\" title=\"Zoom Out\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.zoom(-0.1)\">\n          <span class=\"fa fa-search-minus\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.move(-10, 0)\" title=\"Move Left\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.move(-10, 0)\">\n          <span class=\"fa fa-arrow-left\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.move(10, 0)\" title=\"Move Right\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.move(10, 0)\">\n          <span class=\"fa fa-arrow-right\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.move(0, -10)\" title=\"Move Up\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.move(0, -10)\">\n          <span class=\"fa fa-arrow-up\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.move(0, 10)\" title=\"Move Down\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.move(0, 10)\">\n          <span class=\"fa fa-arrow-down\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"rotate(-45)\" title=\"Rotate Left\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.rotate(-45)\">\n          <span class=\"fa fa-rotate-left\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"rotate(45)\" title=\"Rotate Right\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.rotate(45)\">\n          <span class=\"fa fa-rotate-right\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.scaleX(-state.crop.scaleX)\" title=\"Flip Horizontal\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.scaleX(-1)\">\n          <span class=\"fa fa-arrows-h\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.scaleY(-state.crop.scaleY)\" title=\"Flip Vertical\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.scaleY(-1)\">\n          <span class=\"fa fa-arrows-v\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.crop()\" title=\"Crop\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.crop()\">\n          <span class=\"fa fa-check\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.clear()\" title=\"Clear\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.clear()\">\n          <span class=\"fa fa-remove\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.disable()\" title=\"Disable\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.disable()\">\n          <span class=\"fa fa-lock\"></span>\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.enable()\" title=\"Enable\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.enable()\">\n          <span class=\"fa fa-unlock\"></span>\n        </span>\n      </button>\n    </div>\n\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"cropper.reset()\" title=\"Reset\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.reset()\">\n          <span class=\"fa fa-refresh\"></span>\n        </span>\n      </button>\n\n\n      <label class=\"btn btn-primary btn-upload\" [class.disabled]=\"!hasFileURL\" for=\"inputImage\" title=\"Upload image file\">\n        <input [disabled]=\"!hasFileURL\" (change)=\"onFileChange($event)\" type=\"file\" class=\"sr-only\" id=\"inputImage\" name=\"file\" accept=\".jpg,.jpeg,.png,.gif,.bmp,.tiff\">\n        <span class=\"docs-tooltip\" tooltip=\"Import image with Blob URLs\">\n          <span class=\"fa fa-upload\"></span>\n        </span>\n      </label>\n\n\n\n      <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"detach()\" title=\"Destroy\">\n          <span class=\"docs-tooltip\" tooltip=\"destroy()\">\n            <span class=\"fa fa-power-off\"></span>\n          </span>\n        </button> -->\n    </div>\n\n    <div class=\"btn-group btn-group-crop\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"getCroppedCanvas({maxWidth: 4096, maxHeight: 4096 })\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.getCroppedCanvas({ maxWidth: 4096, maxHeight: 4096 })\">\n          Get Cropped Canvas\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"getCroppedCanvas({width: 160, height: 90 })\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.getCroppedCanvas({ width: 160, height: 90 })\">\n          160&times;90\n        </span>\n      </button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"getCroppedCanvas({width: 320, height: 180 })\">\n        <span class=\"docs-tooltip\" tooltip=\"cropper.getCroppedCanvas({ width: 320, height: 180 })\">\n          320&times;180\n        </span>\n      </button>\n    </div>\n\n    <!-- Show the cropped image in modal -->\n\n    <ng-template #template>\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"getCroppedCanvasTitle\">Cropped</h5>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body viewport\"></div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">Close</button>\n        <a class=\"btn btn-primary\" #download (click)=\"(null)\" [href]=\"downloadImageHref\" [download]=\"uploadedImageName\">Download</a>\n      </div>\n    </ng-template>\n\n    <!-- /.modal -->\n\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"putData = cropper.getData()\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.getData()\">\n        Get Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.setData(putData)\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.setData(data)\">\n        Set Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"putData= cropper.getContainerData()\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.getContainerData()\">\n        Get Container Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"putData=cropper.getImageData()\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.getImageData()\">\n        Get Image Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"putData=cropper.getCanvasData()\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.getCanvasData()\">\n        Get Canvas Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.setCanvasData(putData)\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.setCanvasData(data)\">\n        Set Canvas Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"putData=cropper.getCropBoxData()\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.getCropBoxData()\">\n        Get Crop Box Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.setCropBoxData(putData)\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.setCropBoxData(data)\">\n        Set Crop Box Data\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.moveTo(0)\" data-option=\"0\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.moveTo(0)\">\n        Move to [0,0]\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.zoomTo(1)\" data-option=\"1\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.zoomTo(1)\">\n        Zoom to 100%\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.rotateTo(180)\" data-option=\"180\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.rotateTo(180)\">\n        Rotate 180Â°\n      </span>\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropper.scale(-2, -1)\">\n      <span class=\"docs-tooltip\" tooltip=\"cropper.scale(-2, -1)\">\n        Scale (-2, -1)\n      </span>\n    </button>\n    <textarea class=\"form-control\" [value]=\"putData | json\" (change)=\"putDataChange($event)\" placeholder=\"Get data to here or set data with this value\"></textarea>\n\n  </div>\n  <!-- /.docs-buttons -->\n\n\n\n\n  <div class=\"col-md-3 docs-toggles\">\n    <!-- <h3>Toggles:</h3> -->\n    <div class=\"btn-group d-flex flex-nowrap\" data-toggle=\"buttons\">\n\n      <label class=\"btn btn-primary\" *ngFor=\"let _ of state.aspectRatios\" [(ngModel)]=\"state.aspectRatio\" [btnRadio]=\"_.val\" (click)=\"setOption('aspectRatio', _.val)\"\n        btnRadio=\"Left\" tabindex=\"0\" role=\"button\">{{_.name}}</label>\n\n    </div>\n\n    <div class=\"btn-group d-flex flex-nowrap\" data-toggle=\"buttons\">\n      <label (click)=\"setOption($event, 'viewMode', _.val)\" class=\"btn btn-primary\" *ngFor=\"let _ of state.viewModes\">\n        <input type=\"radio\" class=\"sr-only\" name=\"viewMode\" value=\"{{_.val}}\" [checked]=\"state.options.viewMode===_.val\">\n        <span class=\"docs-tooltip\" [tooltip]=\"'View Mode ' + _.name\">\n          {{_.name}}\n        </span>\n      </label>\n    </div>\n\n\n\n    <!-- Boolean options switches -->\n    <div class=\"btn-group\">\n      <div class=\"dropdown dropup docs-options\" dropdown [dropup]=\"true\" [autoClose]=\"false\">\n        <button type=\"button\" class=\"btn btn-primary btn-block dropdown-toggle\" id=\"toggleOptions\" data-toggle=\"dropdown\" dropdownToggle\n          aria-expanded=\"true\">\n          Toggle Options\n          <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"toggleOptions\">\n          <li class=\"dropdown-item\" *ngFor=\"let option of togglableOptions\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"{{option}}\" [checked]=\"state.options[option]\" (change)=\"toggleOption(option)\">\n              <label class=\"form-check-label\" for=\"responsive\">{{option}}</label>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <!-- /.dropdown -->\n    </div>\n    <!-- /.dropdown -->\n\n\n  </div>\n  <!-- /.docs-toggles -->\n</div>"

/***/ }),

/***/ "./src/app/features/cropper/components/cropper/cropper.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/features/cropper/components/cropper/cropper.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Cropper.js v1.4.3\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2018-10-24T13:07:11.429Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline-color:rgba(51,153,255,.75);outline:1px solid #39f;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}sa-cropper {\n  display: block; }.dropup .dropdown-menu.show[style] {\n  -webkit-transform: translate(0, 0) !important;\n          transform: translate(0, 0) !important; }.img-container,\n.img-preview {\n  background-color: #f7f7f7;\n  text-align: center;\n  width: 100%; }.img-container {\n  margin-bottom: 1rem;\n  max-height: 497px;\n  min-height: 200px; }@media (min-width: 768px) {\n  .img-container {\n    min-height: 497px; } }.img-container > img {\n  max-width: 100%; }.docs-preview {\n  margin-right: -1rem; }.img-preview {\n  float: left;\n  margin-bottom: .5rem;\n  margin-right: .5rem;\n  overflow: hidden; }.img-preview > img {\n  max-width: 100%; }.preview-lg {\n  height: 9rem;\n  width: 16rem; }.preview-md {\n  height: 4.5rem;\n  width: 8rem; }.preview-sm {\n  height: 2.25rem;\n  width: 4rem; }.preview-xs {\n  height: 1.125rem;\n  margin-right: 0;\n  width: 2rem; }.docs-tooltip {\n  display: block;\n  margin: -.5rem -.75rem;\n  padding: .5rem .75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jcm9wcGVyanMvZGlzdC9jcm9wcGVyLm1pbi5jc3MiLCIvaG9tZS9oYXlkZXItcGMvRG9jdW1lbnRzL3dvcmtzcGFjZS9TbWFydCBBZG1pbiBBbmd1bGFyXzcvQW5ndWxhcl83L2Z1bGwvc3JjL2FwcC9mZWF0dXJlcy9jcm9wcGVyL2NvbXBvbmVudHMvY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQVFFLENBQUMsbUJBQW1CLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUF1QixpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMscUZBQXFGLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsZUFBZSxDQUFDLGtCQUFrQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsZUFBZSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLGFBQWEsQ0FBQyxXQUFXLENBQUMsa0NBQWtDLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0Isb0JBQW9CLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsNkNBQTZDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDJDQUEyQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMscUJBQXFCLENBQUMscUJBQXFCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLHFCQUFxQixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMscUJBQXFCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUscUJBQXFCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLHVCQUF1QixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLHdCQUF3QixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMseUJBQXlCLHdCQUF3QixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsMEJBQTBCLHdCQUF3QixVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLCtCQUErQixxQkFBcUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLFNBQVMsQ0FBQyxZQUFZLDhRQUE4USxDQUFDLGNBQWMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLHNCQUFzQixDQUFDLGNBQWMsV0FBVyxDQUFDLGNBQWMsZ0JBQWdCLENBQUMscUlBQXFJLGtCQUFrQixDQ05yK0c7RUFDRSxjQUFjLEVBQUEsQ0FJaEI7RUFFSSw2Q0FBb0M7VUFBcEMscUNBQW9DLEVBQUEsQ0FLeEM7O0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEsQ0FHYjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEsQ0FHbkI7RUFDRTtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCLENBR0g7RUFDRSxlQUFlLEVBQUEsQ0FHakI7RUFDRSxtQkFBbUIsRUFBQSxDQUdyQjtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBLENBR2xCO0VBQ0UsZUFBZSxFQUFBLENBR2pCO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQSxDQUdkO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBQSxDQUdiO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQSxDQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXLEVBQUEsQ0FHYjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jcm9wcGVyL2NvbXBvbmVudHMvY3JvcHBlci9jcm9wcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDcm9wcGVyLmpzIHYxLjQuM1xuICogaHR0cHM6Ly9mZW5neXVhbmNoZW4uZ2l0aHViLmlvL2Nyb3BwZXJqc1xuICpcbiAqIENvcHlyaWdodCAyMDE1LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAxOC0xMC0yNFQxMzowNzoxMS40MjlaXG4gKi8uY3JvcHBlci1jb250YWluZXJ7ZGlyZWN0aW9uOmx0cjtmb250LXNpemU6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmNyb3BwZXItY29udGFpbmVyIGltZ3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO2ltYWdlLW9yaWVudGF0aW9uOjBkZWc7bWF4LWhlaWdodDpub25lIWltcG9ydGFudDttYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7bWluLWhlaWdodDowIWltcG9ydGFudDttaW4td2lkdGg6MCFpbXBvcnRhbnQ7d2lkdGg6MTAwJX0uY3JvcHBlci1jYW52YXMsLmNyb3BwZXItY3JvcC1ib3gsLmNyb3BwZXItZHJhZy1ib3gsLmNyb3BwZXItbW9kYWwsLmNyb3BwZXItd3JhcC1ib3h7Ym90dG9tOjA7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmNyb3BwZXItY2FudmFzLC5jcm9wcGVyLXdyYXAtYm94e292ZXJmbG93OmhpZGRlbn0uY3JvcHBlci1kcmFnLWJveHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3BhY2l0eTowfS5jcm9wcGVyLW1vZGFse2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5Oi41fS5jcm9wcGVyLXZpZXctYm94e2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7b3V0bGluZS1jb2xvcjpyZ2JhKDUxLDE1MywyNTUsLjc1KTtvdXRsaW5lOjFweCBzb2xpZCAjMzlmO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlfS5jcm9wcGVyLWRhc2hlZHtib3JkZXI6MCBkYXNoZWQgI2VlZTtkaXNwbGF5OmJsb2NrO29wYWNpdHk6LjU7cG9zaXRpb246YWJzb2x1dGV9LmNyb3BwZXItZGFzaGVkLmRhc2hlZC1oe2JvcmRlci1ib3R0b20td2lkdGg6MXB4O2JvcmRlci10b3Atd2lkdGg6MXB4O2hlaWdodDozMy4zMzMzMyU7bGVmdDowO3RvcDozMy4zMzMzMyU7d2lkdGg6MTAwJX0uY3JvcHBlci1kYXNoZWQuZGFzaGVkLXZ7Ym9yZGVyLWxlZnQtd2lkdGg6MXB4O2JvcmRlci1yaWdodC13aWR0aDoxcHg7aGVpZ2h0OjEwMCU7bGVmdDozMy4zMzMzMyU7dG9wOjA7d2lkdGg6MzMuMzMzMzMlfS5jcm9wcGVyLWNlbnRlcntkaXNwbGF5OmJsb2NrO2hlaWdodDowO2xlZnQ6NTAlO29wYWNpdHk6Ljc1O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7d2lkdGg6MH0uY3JvcHBlci1jZW50ZXI6YWZ0ZXIsLmNyb3BwZXItY2VudGVyOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Y29udGVudDpcIiBcIjtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlfS5jcm9wcGVyLWNlbnRlcjpiZWZvcmV7aGVpZ2h0OjFweDtsZWZ0Oi0zcHg7dG9wOjA7d2lkdGg6N3B4fS5jcm9wcGVyLWNlbnRlcjphZnRlcntoZWlnaHQ6N3B4O2xlZnQ6MDt0b3A6LTNweDt3aWR0aDoxcHh9LmNyb3BwZXItZmFjZSwuY3JvcHBlci1saW5lLC5jcm9wcGVyLXBvaW50e2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7b3BhY2l0eTouMTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlfS5jcm9wcGVyLWZhY2V7YmFja2dyb3VuZC1jb2xvcjojZmZmO2xlZnQ6MDt0b3A6MH0uY3JvcHBlci1saW5le2JhY2tncm91bmQtY29sb3I6IzM5Zn0uY3JvcHBlci1saW5lLmxpbmUtZXtjdXJzb3I6ZXctcmVzaXplO3JpZ2h0Oi0zcHg7dG9wOjA7d2lkdGg6NXB4fS5jcm9wcGVyLWxpbmUubGluZS1ue2N1cnNvcjpucy1yZXNpemU7aGVpZ2h0OjVweDtsZWZ0OjA7dG9wOi0zcHh9LmNyb3BwZXItbGluZS5saW5lLXd7Y3Vyc29yOmV3LXJlc2l6ZTtsZWZ0Oi0zcHg7dG9wOjA7d2lkdGg6NXB4fS5jcm9wcGVyLWxpbmUubGluZS1ze2JvdHRvbTotM3B4O2N1cnNvcjpucy1yZXNpemU7aGVpZ2h0OjVweDtsZWZ0OjB9LmNyb3BwZXItcG9pbnR7YmFja2dyb3VuZC1jb2xvcjojMzlmO2hlaWdodDo1cHg7b3BhY2l0eTouNzU7d2lkdGg6NXB4fS5jcm9wcGVyLXBvaW50LnBvaW50LWV7Y3Vyc29yOmV3LXJlc2l6ZTttYXJnaW4tdG9wOi0zcHg7cmlnaHQ6LTNweDt0b3A6NTAlfS5jcm9wcGVyLXBvaW50LnBvaW50LW57Y3Vyc29yOm5zLXJlc2l6ZTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotM3B4O3RvcDotM3B4fS5jcm9wcGVyLXBvaW50LnBvaW50LXd7Y3Vyc29yOmV3LXJlc2l6ZTtsZWZ0Oi0zcHg7bWFyZ2luLXRvcDotM3B4O3RvcDo1MCV9LmNyb3BwZXItcG9pbnQucG9pbnQtc3tib3R0b206LTNweDtjdXJzb3I6cy1yZXNpemU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTNweH0uY3JvcHBlci1wb2ludC5wb2ludC1uZXtjdXJzb3I6bmVzdy1yZXNpemU7cmlnaHQ6LTNweDt0b3A6LTNweH0uY3JvcHBlci1wb2ludC5wb2ludC1ud3tjdXJzb3I6bndzZS1yZXNpemU7bGVmdDotM3B4O3RvcDotM3B4fS5jcm9wcGVyLXBvaW50LnBvaW50LXN3e2JvdHRvbTotM3B4O2N1cnNvcjpuZXN3LXJlc2l6ZTtsZWZ0Oi0zcHh9LmNyb3BwZXItcG9pbnQucG9pbnQtc2V7Ym90dG9tOi0zcHg7Y3Vyc29yOm53c2UtcmVzaXplO2hlaWdodDoyMHB4O29wYWNpdHk6MTtyaWdodDotM3B4O3dpZHRoOjIwcHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jcm9wcGVyLXBvaW50LnBvaW50LXNle2hlaWdodDoxNXB4O3dpZHRoOjE1cHh9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXsuY3JvcHBlci1wb2ludC5wb2ludC1zZXtoZWlnaHQ6MTBweDt3aWR0aDoxMHB4fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey5jcm9wcGVyLXBvaW50LnBvaW50LXNle2hlaWdodDo1cHg7b3BhY2l0eTouNzU7d2lkdGg6NXB4fX0uY3JvcHBlci1wb2ludC5wb2ludC1zZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojMzlmO2JvdHRvbTotNTAlO2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTpibG9jaztoZWlnaHQ6MjAwJTtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LTUwJTt3aWR0aDoyMDAlfS5jcm9wcGVyLWludmlzaWJsZXtvcGFjaXR5OjB9LmNyb3BwZXItYmd7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFBUU1BQUFBbFBXMGlBQUFBQTNOQ1NWUUlDQWpiNFUvZ0FBQUFCbEJNVkVYTXpNei8vLy9UalJWMkFBQUFDWEJJV1hNQUFBcnJBQUFLNndHQ2l3MWFBQUFBSEhSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCR2FYSmxkMjl5YTNNZ1ExTTI2THl5akFBQUFCRkpSRUZVQ0psaitNL0FnQlZoRi8wUEFINi9EL0hrRHhPR0FBQUFBRWxGVGtTdVFtQ0NcIil9LmNyb3BwZXItaGlkZXtkaXNwbGF5OmJsb2NrO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjB9LmNyb3BwZXItaGlkZGVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmNyb3BwZXItbW92ZXtjdXJzb3I6bW92ZX0uY3JvcHBlci1jcm9we2N1cnNvcjpjcm9zc2hhaXJ9LmNyb3BwZXItZGlzYWJsZWQgLmNyb3BwZXItZHJhZy1ib3gsLmNyb3BwZXItZGlzYWJsZWQgLmNyb3BwZXItZmFjZSwuY3JvcHBlci1kaXNhYmxlZCAuY3JvcHBlci1saW5lLC5jcm9wcGVyLWRpc2FibGVkIC5jcm9wcGVyLXBvaW50e2N1cnNvcjpub3QtYWxsb3dlZH0iLCJAaW1wb3J0ICd+Y3JvcHBlcmpzL2Rpc3QvY3JvcHBlci5taW4uY3NzJztcblxuc2EtY3JvcHBlcntcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmRyb3B1cHtcbiAgLmRyb3Bkb3duLW1lbnUuc2hvd1tzdHlsZV17XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuLmltZy1jb250YWluZXIsXG4uaW1nLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1heC1oZWlnaHQ6IDQ5N3B4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA0OTdweDtcbiAgfVxufVxuXG4uaW1nLWNvbnRhaW5lciA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmRvY3MtcHJldmlldyB7XG4gIG1hcmdpbi1yaWdodDogLTFyZW07XG59XG5cbi5pbWctcHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy1wcmV2aWV3ID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ucHJldmlldy1sZyB7XG4gIGhlaWdodDogOXJlbTtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4ucHJldmlldy1tZCB7XG4gIGhlaWdodDogNC41cmVtO1xuICB3aWR0aDogOHJlbTtcbn1cblxuLnByZXZpZXctc20ge1xuICBoZWlnaHQ6IDIuMjVyZW07XG4gIHdpZHRoOiA0cmVtO1xufVxuXG4ucHJldmlldy14cyB7XG4gIGhlaWdodDogMS4xMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5kb2NzLXRvb2x0aXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAtLjVyZW0gLS43NXJlbTtcbiAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/cropper/components/cropper/cropper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/cropper/components/cropper/cropper.component.ts ***!
  \**************************************************************************/
/*! exports provided: CropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperComponent", function() { return CropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cropperjs_dist_cropper_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs/dist/cropper.min */ "./node_modules/cropperjs/dist/cropper.min.js");
/* harmony import */ var cropperjs_dist_cropper_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CropperComponent = /** @class */ (function () {
    function CropperComponent(modalService) {
        var _this = this;
        this.modalService = modalService;
        this.onReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCropstart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCropmove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCropend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOptionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropDeounce$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.putData = {};
        this.hasFileURL = true;
        this.disabled = false;
        this.optionsDefault = {
            preview: ".img-preview",
            ready: function (e) {
                // console.log(e.type);
                _this.onReady.emit(_this.cropper);
            },
            cropstart: function (e) {
                // console.log(e.type, e.detail.action);
                _this.onCropstart.emit(e);
            },
            cropmove: function (e) {
                // console.log(e.type, e.detail.action);
                _this.onCropmove.emit(e);
            },
            cropend: function (e) {
                // console.log(e.type, e.detail.action);
                _this.onCropend.emit(e);
            },
            crop: function (e) {
                _this.cropDeounce$.next(e.detail);
            },
            zoom: function (e) {
                _this.onZoom.emit(e);
                // console.log(e.type, e.detail.ratio);
            }
        };
        this.uploadedImageName = "cropped.jpg";
        this.uploadedImageType = "image/jpeg";
        this.togglableOptions = [
            "responsive",
            "restore",
            "checkCrossOrigin",
            "checkOrientation",
            "modal",
            "guides",
            "center",
            "highlight",
            "background",
            "autoCrop",
            "movable",
            "rotatable",
            "scalable",
            "zoomable",
            "zoomOnTouch",
            "zoomOnWheel",
            "cropBoxMovable",
            "cropBoxResizable",
            "toggleDragModeOnDblclick"
        ];
        this.keyboardNav = function (event) {
            var e = event || window.event;
            // if (!this.cropper || this.scrollTop > 300) {
            //   return;
            // }
            switch (e.keyCode) {
                case 37:
                    e.preventDefault();
                    _this.cropper.move(-1, 0);
                    break;
                case 38:
                    e.preventDefault();
                    _this.cropper.move(0, -1);
                    break;
                case 39:
                    e.preventDefault();
                    _this.cropper.move(1, 0);
                    break;
                case 40:
                    e.preventDefault();
                    _this.cropper.move(0, 1);
                    break;
            }
        };
        this.cropDeounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200)).subscribe(this.onCrop);
        this.hasFileURL = !!URL;
    }
    CropperComponent.prototype.ngOnInit = function () { };
    CropperComponent.prototype.ngOnChanges = function (changes) {
        if (changes.state.previousValue && changes.state.currentValue.selectedImage !== changes.state.previousValue.selectedImage) {
            this.updateImage(changes.state.currentValue.selectedImage);
        }
    };
    CropperComponent.prototype.updateImage = function (image) {
        this.originalImageURL = image;
        this.cropper.replace(image);
    };
    CropperComponent.prototype.ngAfterViewInit = function () {
        this.originalImageURL = this.img.nativeElement.src;
        this.cropper = new cropperjs_dist_cropper_min__WEBPACK_IMPORTED_MODULE_1__(this.img.nativeElement, __assign({}, this.optionsDefault, this.state.options));
    };
    CropperComponent.prototype.rotate = function (deg) {
        var cropped = this.cropper.cropped;
        if (cropped && this.state.options.viewMode > 0) {
            this.cropper.clear();
        }
        this.cropper.rotate(deg);
        if (cropped && this.state.options.viewMode > 0) {
            this.cropper.crop();
        }
    };
    CropperComponent.prototype.getCroppedCanvas = function (data) {
        if (this.uploadedImageType === "image/jpeg") {
            data.fillColor = "#fff";
        }
        var result = this.cropper.getCroppedCanvas(data);
        if (result) {
            var sub1_1 = this.modalService.onShown.subscribe(function () {
                var vp = document.querySelector(".modal-body.viewport");
                vp.innerHTML = "";
                vp.appendChild(result);
            });
            this.modalRef = this.modalService.show(this.template);
            var sub2_1 = this.modalService.onHidden.subscribe(function (reason) {
                sub1_1.unsubscribe();
                sub2_1.unsubscribe();
            });
            this.downloadImageHref = result.toDataURL(this.uploadedImageType);
        }
    };
    CropperComponent.prototype.detach = function () {
        this.cropper = null;
        if (this.uploadedImageURL) {
            URL.revokeObjectURL(this.uploadedImageURL);
            this.uploadedImageURL = "";
            this.img.nativeElement.src = this.originalImageURL;
        }
    };
    CropperComponent.prototype.toggleOption = function (option) {
        this.setOption(option, !this.state.options[option]);
    };
    CropperComponent.prototype.setOption = function (option, value) {
        var _this = this;
        var _a;
        var cropBoxData = this.cropper.getCropBoxData();
        var canvasData = this.cropper.getCanvasData();
        var options = __assign({}, this.optionsDefault, this.state.options, (_a = {}, _a[option] = value, _a.ready = function () {
            _this.cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
            _this.onReady.emit(_this.cropper);
        }, _a));
        this.cropper.destroy();
        this.cropper = new cropperjs_dist_cropper_min__WEBPACK_IMPORTED_MODULE_1__(this.img.nativeElement, options);
        this.onOptionsChange.emit(options);
    };
    CropperComponent.prototype.onFileChange = function (e) {
        var files = e.target.files;
        if (this.cropper && files && files.length) {
            var file = files[0];
            if (/^image\/\w+/.test(file.type)) {
                this.uploadedImageType = file.type;
                this.uploadedImageName = file.name;
                if (this.uploadedImageURL) {
                    URL.revokeObjectURL(this.uploadedImageURL);
                }
                this.img.nativeElement.src = this.uploadedImageURL = URL.createObjectURL(file);
                this.cropper.destroy();
                this.cropper = new cropperjs_dist_cropper_min__WEBPACK_IMPORTED_MODULE_1__(this.img.nativeElement, __assign({}, this.optionsDefault, this.state.options));
                e.target.value = null;
            }
            else {
                window.alert("Please choose an image file.");
            }
        }
    };
    CropperComponent.prototype.putDataChange = function ($event) {
        try {
            this.putData = JSON.parse($event.target.value);
        }
        catch (e) {
            this.putData = '';
        }
    };
    CropperComponent.prototype.ngOnDestroy = function () {
        if (this.uploadedImageURL) {
            URL.revokeObjectURL(this.uploadedImageURL);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "state", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onCropstart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onCropmove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onCropend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onCrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onOptionsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "onZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("img"),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "img", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("download"),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "download", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("template"),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("viewport"),
        __metadata("design:type", Object)
    ], CropperComponent.prototype, "viewport", void 0);
    CropperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sa-cropper",
            template: __webpack_require__(/*! ./cropper.component.html */ "./src/app/features/cropper/components/cropper/cropper.component.html"),
            styles: [__webpack_require__(/*! ./cropper.component.scss */ "./src/app/features/cropper/components/cropper/cropper.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], CropperComponent);
    return CropperComponent;
}());



/***/ }),

/***/ "./src/app/features/cropper/containers/cropper-page/cropper-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/features/cropper/containers/cropper-page/cropper-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Image Cropping', 'CropperJS']\" icon=\"map-marker\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats class=\"hidden-3xs\"></sa-stats>\n  </div>\n\n  <div *ngIf=\"vm$ | async as vm\" class=\"row\">\n    <div class=\"col-xs-2\">\n        <section class=\"ar-images\">\n            <div *ngFor=\"let image of vm.images\" (click)=\"onSelectImage(image)\" [class.active]=\"image === vm.selectedImage\">\n              <img [src]=\"image\">\n            </div>\n          </section>\n     \n    </div>\n    \n    <section class=\"ar-crop-section col-xs-10\">\n      <sa-cropper [state]=\"vm\" (onCrop)=\"onCrop($event)\" (onOptionsChange)=\"onOptionsChange($event)\"></sa-cropper>\n    </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/cropper/containers/cropper-page/cropper-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/features/cropper/containers/cropper-page/cropper-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 0 2rem; }\n  :host h2 {\n    text-align: right;\n    padding: 0;\n    margin: .5rem 0;\n    color: rgba(186, 218, 85, 0.99); }\n  :host hr {\n    background-color: rgba(255, 255, 255, 0.9);\n    border-color: transparent; }\n  .ar-images {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center; }\n  .ar-images > div {\n    height: 6rem;\n    width: 10rem;\n    padding: 0.2rem;\n    transition: all .2s; }\n  .ar-images > div:hover {\n      cursor: pointer;\n      background: rgba(102, 102, 102, 0.2); }\n  .ar-images > div.active {\n      background: rgba(102, 102, 102, 0.5); }\n  .ar-images > div img {\n      display: block;\n      margin: auto;\n      max-width: 100%;\n      max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hheWRlci1wYy9Eb2N1bWVudHMvd29ya3NwYWNlL1NtYXJ0IEFkbWluIEFuZ3VsYXJfNy9Bbmd1bGFyXzcvZnVsbC9zcmMvYXBwL2ZlYXR1cmVzL2Nyb3BwZXIvY29udGFpbmVycy9jcm9wcGVyLXBhZ2UvY3JvcHBlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTtFQUZqQjtJQUlJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtJQUNmLCtCQUFtQixFQUFBO0VBUHZCO0lBWUksMENBQTRCO0lBQzVCLHlCQUF5QixFQUFBO0VBSTdCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7RUFKekI7SUFNSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFFZixtQkFBbUIsRUFBQTtFQVZ2QjtNQVlNLGVBQWU7TUFDZixvQ0FBcUIsRUFBQTtFQWIzQjtNQWlCTSxvQ0FBcUIsRUFBQTtFQWpCM0I7TUFvQk0sY0FBYztNQUNkLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jcm9wcGVyL2NvbnRhaW5lcnMvY3JvcHBlci1wYWdlL2Nyb3BwZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAycmVtO1xuICBoMntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLjVyZW0gMDtcbiAgICBjb2xvcjogcmdiYSgjYmFkYTU1LCAuOTkpO1xuICB9XG5cbiAgaHJ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAuOSk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4uYXItaW1hZ2Vze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICA+ZGl2e1xuICAgIGhlaWdodDogNnJlbTtcbiAgICB3aWR0aDogMTByZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAmOmhvdmVye1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgjNjY2LCAuMik7XG4gICAgfVxuICAgICYuYWN0aXZle1xuICAgICAgXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCM2NjYsIC41KTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uYXItY3JvcC1zZWN0aW9ue1xuICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/cropper/containers/cropper-page/cropper-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/cropper/containers/cropper-page/cropper-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: CropperPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperPageComponent", function() { return CropperPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_features_cropper_store_ide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/cropper/store/ide */ "./src/app/features/cropper/store/ide/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CropperPageComponent = /** @class */ (function () {
    function CropperPageComponent(store) {
        this.store = store;
        this.vm$ = store.select(_app_features_cropper_store_ide__WEBPACK_IMPORTED_MODULE_2__["getIdeState"]);
    }
    CropperPageComponent.prototype.onSelectImage = function (image) {
        this.store.dispatch(new _app_features_cropper_store_ide__WEBPACK_IMPORTED_MODULE_2__["SelectImage"](image));
    };
    CropperPageComponent.prototype.onOptionsChange = function (options) {
        this.store.dispatch(new _app_features_cropper_store_ide__WEBPACK_IMPORTED_MODULE_2__["OptionsChange"](options));
    };
    CropperPageComponent.prototype.onCrop = function (e) {
        this.store.dispatch(new _app_features_cropper_store_ide__WEBPACK_IMPORTED_MODULE_2__["OnCrop"](e));
    };
    CropperPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sa-cropper-page",
            template: __webpack_require__(/*! ./cropper-page.component.html */ "./src/app/features/cropper/containers/cropper-page/cropper-page.component.html"),
            styles: [__webpack_require__(/*! ./cropper-page.component.scss */ "./src/app/features/cropper/containers/cropper-page/cropper-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CropperPageComponent);
    return CropperPageComponent;
}());



/***/ }),

/***/ "./src/app/features/cropper/cropper.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/cropper/cropper.module.ts ***!
  \****************************************************/
/*! exports provided: CropperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperModule", function() { return CropperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_ide_ide_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/ide/ide.reducer */ "./src/app/features/cropper/store/ide/ide.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_ide_ide_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/ide/ide.effects */ "./src/app/features/cropper/store/ide/ide.effects.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cropper/cropper.component */ "./src/app/features/cropper/components/cropper/cropper.component.ts");
/* harmony import */ var _containers_cropper_page_cropper_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/cropper-page/cropper-page.component */ "./src/app/features/cropper/containers/cropper-page/cropper-page.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CropperModule = /** @class */ (function () {
    function CropperModule() {
    }
    CropperModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _containers_cropper_page_cropper_page_component__WEBPACK_IMPORTED_MODULE_9__["CropperPageComponent"] }]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('ide', _store_ide_ide_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_ide_ide_effects__WEBPACK_IMPORTED_MODULE_6__["IdeEffects"]]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ],
            declarations: [_containers_cropper_page_cropper_page_component__WEBPACK_IMPORTED_MODULE_9__["CropperPageComponent"], _components_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_8__["CropperComponent"]]
        })
    ], CropperModule);
    return CropperModule;
}());



/***/ }),

/***/ "./src/app/features/cropper/store/ide/ide.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/cropper/store/ide/ide.actions.ts ***!
  \***********************************************************/
/*! exports provided: IdeActionTypes, SelectImage, OptionsChange, OnCrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeActionTypes", function() { return IdeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectImage", function() { return SelectImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsChange", function() { return OptionsChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnCrop", function() { return OnCrop; });
var IdeActionTypes;
(function (IdeActionTypes) {
    IdeActionTypes["SelectImage"] = "[Ide] Select Image";
    IdeActionTypes["OptionsChange"] = "[Ide] Options Change";
    IdeActionTypes["OnCrop"] = "[Ide] On Crop";
})(IdeActionTypes || (IdeActionTypes = {}));
var SelectImage = /** @class */ (function () {
    function SelectImage(payload) {
        this.payload = payload;
        this.type = IdeActionTypes.SelectImage;
    }
    return SelectImage;
}());

var OptionsChange = /** @class */ (function () {
    function OptionsChange(payload) {
        this.payload = payload;
        this.type = IdeActionTypes.OptionsChange;
    }
    return OptionsChange;
}());

var OnCrop = /** @class */ (function () {
    function OnCrop(payload) {
        this.payload = payload;
        this.type = IdeActionTypes.OnCrop;
    }
    return OnCrop;
}());



/***/ }),

/***/ "./src/app/features/cropper/store/ide/ide.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/cropper/store/ide/ide.effects.ts ***!
  \***********************************************************/
/*! exports provided: IdeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeEffects", function() { return IdeEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IdeEffects = /** @class */ (function () {
    function IdeEffects() {
    }
    IdeEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], IdeEffects);
    return IdeEffects;
}());



/***/ }),

/***/ "./src/app/features/cropper/store/ide/ide.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/cropper/store/ide/ide.reducer.ts ***!
  \***********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ide_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ide.actions */ "./src/app/features/cropper/store/ide/ide.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    aspectRatios: [
        { name: "16:9", val: 16 / 9 },
        { name: "4:3", val: 4 / 3 },
        { name: "1:1", val: 1 / 1 },
        { name: "2:3", val: 2 / 3 },
        { name: "free", val: NaN }
    ],
    viewModes: [
        { name: "VM0", val: 0 },
        { name: "VM1", val: 1 },
        { name: "VM2", val: 2 },
        { name: "VM3", val: 3 }
    ],
    images: [
        "/assets/img/superbox/superbox-full-7.jpg",
        "/assets/img/superbox/superbox-full-9.jpg",
        "/assets/img/superbox/superbox-full-10.jpg",
        "/assets/img/superbox/superbox-full-11.jpg",
        "/assets/img/superbox/superbox-full-13.jpg",
        "/assets/img/superbox/superbox-full-16.jpg",
        "/assets/img/superbox/superbox-full-18.jpg",
        "/assets/img/superbox/superbox-full-19.jpg",
        "/assets/img/superbox/superbox-full-23.jpg",
        "/assets/img/superbox/superbox-full-1.jpg",
        "/assets/img/superbox/superbox-full-2.jpg",
        "/assets/img/superbox/superbox-full-3.jpg",
        "/assets/img/superbox/superbox-full-4.jpg",
        "/assets/img/superbox/superbox-full-12.jpg",
        "/assets/img/superbox/superbox-full-14.jpg",
        "/assets/img/superbox/superbox-full-15.jpg",
        "/assets/img/superbox/superbox-full-17.jpg",
        "/assets/img/superbox/superbox-full-20.jpg",
        "/assets/img/superbox/superbox-full-6.jpg",
        "/assets/img/superbox/superbox-full-8.jpg",
        "/assets/img/superbox/superbox-full-22.jpg",
        "/assets/img/superbox/superbox-full-24.jpg"
    ],
    selectedImage: "/assets/img/superbox/superbox-full-7.jpg",
    crop: {
        x: null,
        y: null,
        width: null,
        height: null,
        rotate: null,
        scaleX: 1,
        scaleY: 1
    },
    options: {
        aspectRatio: 16 / 9,
        viewMode: 0,
        responsive: true,
        restore: true,
        checkCrossOrigin: true,
        checkOrientation: true,
        modal: true,
        guides: true,
        center: true,
        highlight: true,
        background: true,
        autoCrop: true,
        movable: true,
        rotatable: true,
        scalable: true,
        zoomable: true,
        zoomOnTouch: true,
        zoomOnWheel: true,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: true
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _ide_actions__WEBPACK_IMPORTED_MODULE_0__["IdeActionTypes"].SelectImage:
            return __assign({}, state, { selectedImage: action.payload });
        case _ide_actions__WEBPACK_IMPORTED_MODULE_0__["IdeActionTypes"].OptionsChange:
            return __assign({}, state, { options: __assign({}, action.payload) });
        case _ide_actions__WEBPACK_IMPORTED_MODULE_0__["IdeActionTypes"].OnCrop:
            return __assign({}, state, { crop: {
                    x: action.payload.x ? Math.round(action.payload.x) : 0,
                    y: action.payload.y ? Math.round(action.payload.y) : 0,
                    width: action.payload.width ? Math.round(action.payload.width) : 0,
                    height: action.payload.height ? Math.round(action.payload.height) : 0,
                    rotate: action.payload.rotate ? Math.round(action.payload.rotate) : 0,
                    scaleX: action.payload.scaleX || 1,
                    scaleY: action.payload.scaleY || 1
                } });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/features/cropper/store/ide/ide.selectors.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/cropper/store/ide/ide.selectors.ts ***!
  \*************************************************************/
/*! exports provided: getIdeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdeState", function() { return getIdeState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getIdeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ide');


/***/ }),

/***/ "./src/app/features/cropper/store/ide/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/cropper/store/ide/index.ts ***!
  \*****************************************************/
/*! exports provided: IdeActionTypes, SelectImage, OptionsChange, OnCrop, IdeEffects, initialState, reducer, getIdeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ide_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ide.actions */ "./src/app/features/cropper/store/ide/ide.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeActionTypes", function() { return _ide_actions__WEBPACK_IMPORTED_MODULE_0__["IdeActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectImage", function() { return _ide_actions__WEBPACK_IMPORTED_MODULE_0__["SelectImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsChange", function() { return _ide_actions__WEBPACK_IMPORTED_MODULE_0__["OptionsChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnCrop", function() { return _ide_actions__WEBPACK_IMPORTED_MODULE_0__["OnCrop"]; });

/* harmony import */ var _ide_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ide.effects */ "./src/app/features/cropper/store/ide/ide.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdeEffects", function() { return _ide_effects__WEBPACK_IMPORTED_MODULE_1__["IdeEffects"]; });

/* harmony import */ var _ide_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ide.reducer */ "./src/app/features/cropper/store/ide/ide.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _ide_reducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _ide_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]; });

/* harmony import */ var _ide_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ide.selectors */ "./src/app/features/cropper/store/ide/ide.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIdeState", function() { return _ide_selectors__WEBPACK_IMPORTED_MODULE_3__["getIdeState"]; });







/***/ })

}]);
//# sourceMappingURL=app-features-cropper-cropper-module.js.map