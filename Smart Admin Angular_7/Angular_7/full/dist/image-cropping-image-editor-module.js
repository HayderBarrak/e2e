(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-cropping-image-editor-module"],{

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),

/***/ "./node_modules/jquery-jcrop/js/jquery.Jcrop.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery-jcrop/js/jquery.Jcrop.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * jquery.Jcrop.min.js v0.9.12 (build:20140524)
 * jQuery Image Cropping Plugin - released under MIT License
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC
 * https://github.com/tapmodo/Jcrop
 */
!function($){$.Jcrop=function(obj,opt){function px(n){return Math.round(n)+"px"}function cssClass(cl){return options.baseClass+"-"+cl}function supportsColorFade(){return $.fx.step.hasOwnProperty("backgroundColor")}function getPos(obj){var pos=$(obj).offset();return[pos.left,pos.top]}function mouseAbs(e){return[e.pageX-docOffset[0],e.pageY-docOffset[1]]}function setOptions(opt){"object"!=typeof opt&&(opt={}),options=$.extend(options,opt),$.each(["onChange","onSelect","onRelease","onDblClick"],function(i,e){"function"!=typeof options[e]&&(options[e]=function(){})})}function startDragMode(mode,pos,touch){if(docOffset=getPos($img),Tracker.setCursor("move"===mode?mode:mode+"-resize"),"move"===mode)return Tracker.activateHandlers(createMover(pos),doneSelect,touch);var fc=Coords.getFixed(),opp=oppLockCorner(mode),opc=Coords.getCorner(oppLockCorner(opp));Coords.setPressed(Coords.getCorner(opp)),Coords.setCurrent(opc),Tracker.activateHandlers(dragmodeHandler(mode,fc),doneSelect,touch)}function dragmodeHandler(mode,f){return function(pos){if(options.aspectRatio)switch(mode){case"e":pos[1]=f.y+1;break;case"w":pos[1]=f.y+1;break;case"n":pos[0]=f.x+1;break;case"s":pos[0]=f.x+1}else switch(mode){case"e":pos[1]=f.y2;break;case"w":pos[1]=f.y2;break;case"n":pos[0]=f.x2;break;case"s":pos[0]=f.x2}Coords.setCurrent(pos),Selection.update()}}function createMover(pos){var lloc=pos;return KeyManager.watchKeys(),function(pos){Coords.moveOffset([pos[0]-lloc[0],pos[1]-lloc[1]]),lloc=pos,Selection.update()}}function oppLockCorner(ord){switch(ord){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function createDragger(ord){return function(e){return options.disabled?!1:"move"!==ord||options.allowMove?(docOffset=getPos($img),btndown=!0,startDragMode(ord,mouseAbs(e)),e.stopPropagation(),e.preventDefault(),!1):!1}}function presize($obj,w,h){var nw=$obj.width(),nh=$obj.height();nw>w&&w>0&&(nw=w,nh=w/$obj.width()*$obj.height()),nh>h&&h>0&&(nh=h,nw=h/$obj.height()*$obj.width()),xscale=$obj.width()/nw,yscale=$obj.height()/nh,$obj.width(nw).height(nh)}function unscale(c){return{x:c.x*xscale,y:c.y*yscale,x2:c.x2*xscale,y2:c.y2*yscale,w:c.w*xscale,h:c.h*yscale}}function doneSelect(){var c=Coords.getFixed();c.w>options.minSelect[0]&&c.h>options.minSelect[1]?(Selection.enableHandles(),Selection.done()):Selection.release(),Tracker.setCursor(options.allowSelect?"crosshair":"default")}function newSelection(e){if(!options.disabled&&options.allowSelect){btndown=!0,docOffset=getPos($img),Selection.disableHandles(),Tracker.setCursor("crosshair");var pos=mouseAbs(e);return Coords.setPressed(pos),Selection.update(),Tracker.activateHandlers(selectDrag,doneSelect,"touch"===e.type.substring(0,5)),KeyManager.watchKeys(),e.stopPropagation(),e.preventDefault(),!1}}function selectDrag(pos){Coords.setCurrent(pos),Selection.update()}function newTracker(){var trk=$("<div></div>").addClass(cssClass("tracker"));return is_msie&&trk.css({opacity:0,backgroundColor:"white"}),trk}function setClass(cname){$div.removeClass().addClass(cssClass("holder")).addClass(cname)}function animateTo(a,callback){function queueAnimator(){window.setTimeout(animator,interv)}var x1=a[0]/xscale,y1=a[1]/yscale,x2=a[2]/xscale,y2=a[3]/yscale;if(!animating){var animto=Coords.flipCoords(x1,y1,x2,y2),c=Coords.getFixed(),initcr=[c.x,c.y,c.x2,c.y2],animat=initcr,interv=options.animationDelay,ix1=animto[0]-initcr[0],iy1=animto[1]-initcr[1],ix2=animto[2]-initcr[2],iy2=animto[3]-initcr[3],pcent=0,velocity=options.swingSpeed;x1=animat[0],y1=animat[1],x2=animat[2],y2=animat[3],Selection.animMode(!0);var animator=function(){return function(){pcent+=(100-pcent)/velocity,animat[0]=Math.round(x1+pcent/100*ix1),animat[1]=Math.round(y1+pcent/100*iy1),animat[2]=Math.round(x2+pcent/100*ix2),animat[3]=Math.round(y2+pcent/100*iy2),pcent>=99.8&&(pcent=100),100>pcent?(setSelectRaw(animat),queueAnimator()):(Selection.done(),Selection.animMode(!1),"function"==typeof callback&&callback.call(api))}}();queueAnimator()}}function setSelect(rect){setSelectRaw([rect[0]/xscale,rect[1]/yscale,rect[2]/xscale,rect[3]/yscale]),options.onSelect.call(api,unscale(Coords.getFixed())),Selection.enableHandles()}function setSelectRaw(l){Coords.setPressed([l[0],l[1]]),Coords.setCurrent([l[2],l[3]]),Selection.update()}function tellSelect(){return unscale(Coords.getFixed())}function tellScaled(){return Coords.getFixed()}function setOptionsNew(opt){setOptions(opt),interfaceUpdate()}function disableCrop(){options.disabled=!0,Selection.disableHandles(),Selection.setCursor("default"),Tracker.setCursor("default")}function enableCrop(){options.disabled=!1,interfaceUpdate()}function cancelCrop(){Selection.done(),Tracker.activateHandlers(null,null)}function destroy(){$div.remove(),$origimg.show(),$origimg.css("visibility","visible"),$(obj).removeData("Jcrop")}function setImage(src,callback){Selection.release(),disableCrop();var img=new Image;img.onload=function(){var iw=img.width,ih=img.height,bw=options.boxWidth,bh=options.boxHeight;$img.width(iw).height(ih),$img.attr("src",src),$img2.attr("src",src),presize($img,bw,bh),boundx=$img.width(),boundy=$img.height(),$img2.width(boundx).height(boundy),$trk.width(boundx+2*bound).height(boundy+2*bound),$div.width(boundx).height(boundy),Shade.resize(boundx,boundy),enableCrop(),"function"==typeof callback&&callback.call(api)},img.src=src}function colorChangeMacro($obj,color,now){var mycolor=color||options.bgColor;options.bgFade&&supportsColorFade()&&options.fadeTime&&!now?$obj.animate({backgroundColor:mycolor},{queue:!1,duration:options.fadeTime}):$obj.css("backgroundColor",mycolor)}function interfaceUpdate(alt){options.allowResize?alt?Selection.enableOnly():Selection.enableHandles():Selection.disableHandles(),Tracker.setCursor(options.allowSelect?"crosshair":"default"),Selection.setCursor(options.allowMove?"move":"default"),options.hasOwnProperty("trueSize")&&(xscale=options.trueSize[0]/boundx,yscale=options.trueSize[1]/boundy),options.hasOwnProperty("setSelect")&&(setSelect(options.setSelect),Selection.done(),delete options.setSelect),Shade.refresh(),options.bgColor!=bgcolor&&(colorChangeMacro(options.shade?Shade.getShades():$div,options.shade?options.shadeColor||options.bgColor:options.bgColor),bgcolor=options.bgColor),bgopacity!=options.bgOpacity&&(bgopacity=options.bgOpacity,options.shade?Shade.refresh():Selection.setBgOpacity(bgopacity)),xlimit=options.maxSize[0]||0,ylimit=options.maxSize[1]||0,xmin=options.minSize[0]||0,ymin=options.minSize[1]||0,options.hasOwnProperty("outerImage")&&($img.attr("src",options.outerImage),delete options.outerImage),Selection.refresh()}var docOffset,options=$.extend({},$.Jcrop.defaults),_ua=navigator.userAgent.toLowerCase(),is_msie=/msie/.test(_ua),ie6mode=/msie [1-6]\./.test(_ua);"object"!=typeof obj&&(obj=$(obj)[0]),"object"!=typeof opt&&(opt={}),setOptions(opt);var img_css={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},$origimg=$(obj),img_mode=!0;if("IMG"==obj.tagName){if(0!=$origimg[0].width&&0!=$origimg[0].height)$origimg.width($origimg[0].width),$origimg.height($origimg[0].height);else{var tempImage=new Image;tempImage.src=$origimg[0].src,$origimg.width(tempImage.width),$origimg.height(tempImage.height)}var $img=$origimg.clone().removeAttr("id").css(img_css).show();$img.width($origimg.width()),$img.height($origimg.height()),$origimg.after($img).hide()}else $img=$origimg.css(img_css).show(),img_mode=!1,null===options.shade&&(options.shade=!0);presize($img,options.boxWidth,options.boxHeight);var boundx=$img.width(),boundy=$img.height(),$div=$("<div />").width(boundx).height(boundy).addClass(cssClass("holder")).css({position:"relative",backgroundColor:options.bgColor}).insertAfter($origimg).append($img);options.addClass&&$div.addClass(options.addClass);var $img2=$("<div />"),$img_holder=$("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),$hdl_holder=$("<div />").width("100%").height("100%").css("zIndex",320),$sel=$("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var c=Coords.getFixed();options.onDblClick.call(api,c)}).insertBefore($img).append($img_holder,$hdl_holder);img_mode&&($img2=$("<img />").attr("src",$img.attr("src")).css(img_css).width(boundx).height(boundy),$img_holder.append($img2)),ie6mode&&$sel.css({overflowY:"hidden"});var xlimit,ylimit,xmin,ymin,xscale,yscale,btndown,animating,shift_down,bound=options.boundary,$trk=newTracker().width(boundx+2*bound).height(boundy+2*bound).css({position:"absolute",top:px(-bound),left:px(-bound),zIndex:290}).mousedown(newSelection),bgcolor=options.bgColor,bgopacity=options.bgOpacity;docOffset=getPos($img);var Touch=function(){function hasTouchSupport(){var i,support={},events=["touchstart","touchmove","touchend"],el=document.createElement("div");try{for(i=0;i<events.length;i++){var eventName=events[i];eventName="on"+eventName;var isSupported=eventName in el;isSupported||(el.setAttribute(eventName,"return;"),isSupported="function"==typeof el[eventName]),support[events[i]]=isSupported}return support.touchstart&&support.touchend&&support.touchmove}catch(err){return!1}}function detectSupport(){return options.touchSupport===!0||options.touchSupport===!1?options.touchSupport:hasTouchSupport()}return{createDragger:function(ord){return function(e){return options.disabled?!1:"move"!==ord||options.allowMove?(docOffset=getPos($img),btndown=!0,startDragMode(ord,mouseAbs(Touch.cfilter(e)),!0),e.stopPropagation(),e.preventDefault(),!1):!1}},newSelection:function(e){return newSelection(Touch.cfilter(e))},cfilter:function(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e},isSupported:hasTouchSupport,support:detectSupport()}}(),Coords=function(){function setPressed(pos){pos=rebound(pos),x2=x1=pos[0],y2=y1=pos[1]}function setCurrent(pos){pos=rebound(pos),ox=pos[0]-x2,oy=pos[1]-y2,x2=pos[0],y2=pos[1]}function getOffset(){return[ox,oy]}function moveOffset(offset){var ox=offset[0],oy=offset[1];0>x1+ox&&(ox-=ox+x1),0>y1+oy&&(oy-=oy+y1),y2+oy>boundy&&(oy+=boundy-(y2+oy)),x2+ox>boundx&&(ox+=boundx-(x2+ox)),x1+=ox,x2+=ox,y1+=oy,y2+=oy}function getCorner(ord){var c=getFixed();switch(ord){case"ne":return[c.x2,c.y];case"nw":return[c.x,c.y];case"se":return[c.x2,c.y2];case"sw":return[c.x,c.y2]}}function getFixed(){if(!options.aspectRatio)return getRect();var xx,yy,w,h,aspect=options.aspectRatio,min_x=options.minSize[0]/xscale,max_x=options.maxSize[0]/xscale,max_y=options.maxSize[1]/yscale,rw=x2-x1,rh=y2-y1,rwa=Math.abs(rw),rha=Math.abs(rh),real_ratio=rwa/rha;return 0===max_x&&(max_x=10*boundx),0===max_y&&(max_y=10*boundy),aspect>real_ratio?(yy=y2,w=rha*aspect,xx=0>rw?x1-w:w+x1,0>xx?(xx=0,h=Math.abs((xx-x1)/aspect),yy=0>rh?y1-h:h+y1):xx>boundx&&(xx=boundx,h=Math.abs((xx-x1)/aspect),yy=0>rh?y1-h:h+y1)):(xx=x2,h=rwa/aspect,yy=0>rh?y1-h:y1+h,0>yy?(yy=0,w=Math.abs((yy-y1)*aspect),xx=0>rw?x1-w:w+x1):yy>boundy&&(yy=boundy,w=Math.abs(yy-y1)*aspect,xx=0>rw?x1-w:w+x1)),xx>x1?(min_x>xx-x1?xx=x1+min_x:xx-x1>max_x&&(xx=x1+max_x),yy=yy>y1?y1+(xx-x1)/aspect:y1-(xx-x1)/aspect):x1>xx&&(min_x>x1-xx?xx=x1-min_x:x1-xx>max_x&&(xx=x1-max_x),yy=yy>y1?y1+(x1-xx)/aspect:y1-(x1-xx)/aspect),0>xx?(x1-=xx,xx=0):xx>boundx&&(x1-=xx-boundx,xx=boundx),0>yy?(y1-=yy,yy=0):yy>boundy&&(y1-=yy-boundy,yy=boundy),makeObj(flipCoords(x1,y1,xx,yy))}function rebound(p){return p[0]<0&&(p[0]=0),p[1]<0&&(p[1]=0),p[0]>boundx&&(p[0]=boundx),p[1]>boundy&&(p[1]=boundy),[Math.round(p[0]),Math.round(p[1])]}function flipCoords(x1,y1,x2,y2){var xa=x1,xb=x2,ya=y1,yb=y2;return x1>x2&&(xa=x2,xb=x1),y1>y2&&(ya=y2,yb=y1),[xa,ya,xb,yb]}function getRect(){var delta,xsize=x2-x1,ysize=y2-y1;return xlimit&&Math.abs(xsize)>xlimit&&(x2=xsize>0?x1+xlimit:x1-xlimit),ylimit&&Math.abs(ysize)>ylimit&&(y2=ysize>0?y1+ylimit:y1-ylimit),ymin/yscale&&Math.abs(ysize)<ymin/yscale&&(y2=ysize>0?y1+ymin/yscale:y1-ymin/yscale),xmin/xscale&&Math.abs(xsize)<xmin/xscale&&(x2=xsize>0?x1+xmin/xscale:x1-xmin/xscale),0>x1&&(x2-=x1,x1-=x1),0>y1&&(y2-=y1,y1-=y1),0>x2&&(x1-=x2,x2-=x2),0>y2&&(y1-=y2,y2-=y2),x2>boundx&&(delta=x2-boundx,x1-=delta,x2-=delta),y2>boundy&&(delta=y2-boundy,y1-=delta,y2-=delta),x1>boundx&&(delta=x1-boundy,y2-=delta,y1-=delta),y1>boundy&&(delta=y1-boundy,y2-=delta,y1-=delta),makeObj(flipCoords(x1,y1,x2,y2))}function makeObj(a){return{x:a[0],y:a[1],x2:a[2],y2:a[3],w:a[2]-a[0],h:a[3]-a[1]}}var ox,oy,x1=0,y1=0,x2=0,y2=0;return{flipCoords:flipCoords,setPressed:setPressed,setCurrent:setCurrent,getOffset:getOffset,moveOffset:moveOffset,getCorner:getCorner,getFixed:getFixed}}(),Shade=function(){function resizeShades(w,h){shades.left.css({height:px(h)}),shades.right.css({height:px(h)})}function updateAuto(){return updateShade(Coords.getFixed())}function updateShade(c){shades.top.css({left:px(c.x),width:px(c.w),height:px(c.y)}),shades.bottom.css({top:px(c.y2),left:px(c.x),width:px(c.w),height:px(boundy-c.y2)}),shades.right.css({left:px(c.x2),width:px(boundx-c.x2)}),shades.left.css({width:px(c.x)})}function createShade(){return $("<div />").css({position:"absolute",backgroundColor:options.shadeColor||options.bgColor}).appendTo(holder)}function enableShade(){enabled||(enabled=!0,holder.insertBefore($img),updateAuto(),Selection.setBgOpacity(1,0,1),$img2.hide(),setBgColor(options.shadeColor||options.bgColor,1),Selection.isAwake()?setOpacity(options.bgOpacity,1):setOpacity(1,1))}function setBgColor(color,now){colorChangeMacro(getShades(),color,now)}function disableShade(){enabled&&(holder.remove(),$img2.show(),enabled=!1,Selection.isAwake()?Selection.setBgOpacity(options.bgOpacity,1,1):(Selection.setBgOpacity(1,1,1),Selection.disableHandles()),colorChangeMacro($div,0,1))}function setOpacity(opacity,now){enabled&&(options.bgFade&&!now?holder.animate({opacity:1-opacity},{queue:!1,duration:options.fadeTime}):holder.css({opacity:1-opacity}))}function refreshAll(){options.shade?enableShade():disableShade(),Selection.isAwake()&&setOpacity(options.bgOpacity)}function getShades(){return holder.children()}var enabled=!1,holder=$("<div />").css({position:"absolute",zIndex:240,opacity:0}),shades={top:createShade(),left:createShade().height(boundy),right:createShade().height(boundy),bottom:createShade()};return{update:updateAuto,updateRaw:updateShade,getShades:getShades,setBgColor:setBgColor,enable:enableShade,disable:disableShade,resize:resizeShades,refresh:refreshAll,opacity:setOpacity}}(),Selection=function(){function insertBorder(type){var jq=$("<div />").css({position:"absolute",opacity:options.borderOpacity}).addClass(cssClass(type));return $img_holder.append(jq),jq}function dragDiv(ord,zi){var jq=$("<div />").mousedown(createDragger(ord)).css({cursor:ord+"-resize",position:"absolute",zIndex:zi}).addClass("ord-"+ord);return Touch.support&&jq.bind("touchstart.jcrop",Touch.createDragger(ord)),$hdl_holder.append(jq),jq}function insertHandle(ord){var hs=options.handleSize,div=dragDiv(ord,hdep++).css({opacity:options.handleOpacity}).addClass(cssClass("handle"));return hs&&div.width(hs).height(hs),div}function insertDragbar(ord){return dragDiv(ord,hdep++).addClass("jcrop-dragbar")}function createDragbars(li){var i;for(i=0;i<li.length;i++)dragbar[li[i]]=insertDragbar(li[i])}function createBorders(li){var cl,i;for(i=0;i<li.length;i++){switch(li[i]){case"n":cl="hline";break;case"s":cl="hline bottom";break;case"e":cl="vline right";break;case"w":cl="vline"}borders[li[i]]=insertBorder(cl)}}function createHandles(li){var i;for(i=0;i<li.length;i++)handle[li[i]]=insertHandle(li[i])}function moveto(x,y){options.shade||$img2.css({top:px(-y),left:px(-x)}),$sel.css({top:px(y),left:px(x)})}function resize(w,h){$sel.width(Math.round(w)).height(Math.round(h))}function refresh(){var c=Coords.getFixed();Coords.setPressed([c.x,c.y]),Coords.setCurrent([c.x2,c.y2]),updateVisible()}function updateVisible(select){return awake?update(select):void 0}function update(select){var c=Coords.getFixed();resize(c.w,c.h),moveto(c.x,c.y),options.shade&&Shade.updateRaw(c),awake||show(),select?options.onSelect.call(api,unscale(c)):options.onChange.call(api,unscale(c))}function setBgOpacity(opacity,force,now){(awake||force)&&(options.bgFade&&!now?$img.animate({opacity:opacity},{queue:!1,duration:options.fadeTime}):$img.css("opacity",opacity))}function show(){$sel.show(),options.shade?Shade.opacity(bgopacity):setBgOpacity(bgopacity,!0),awake=!0}function release(){disableHandles(),$sel.hide(),options.shade?Shade.opacity(1):setBgOpacity(1),awake=!1,options.onRelease.call(api)}function showHandles(){seehandles&&$hdl_holder.show()}function enableHandles(){return seehandles=!0,options.allowResize?($hdl_holder.show(),!0):void 0}function disableHandles(){seehandles=!1,$hdl_holder.hide()}function animMode(v){v?(animating=!0,disableHandles()):(animating=!1,enableHandles())}function done(){animMode(!1),refresh()}var awake,hdep=370,borders={},handle={},dragbar={},seehandles=!1;options.dragEdges&&$.isArray(options.createDragbars)&&createDragbars(options.createDragbars),$.isArray(options.createHandles)&&createHandles(options.createHandles),options.drawBorders&&$.isArray(options.createBorders)&&createBorders(options.createBorders),$(document).bind("touchstart.jcrop-ios",function(e){$(e.currentTarget).hasClass("jcrop-tracker")&&e.stopPropagation()});var $track=newTracker().mousedown(createDragger("move")).css({cursor:"move",position:"absolute",zIndex:360});return Touch.support&&$track.bind("touchstart.jcrop",Touch.createDragger("move")),$img_holder.append($track),disableHandles(),{updateVisible:updateVisible,update:update,release:release,refresh:refresh,isAwake:function(){return awake},setCursor:function(cursor){$track.css("cursor",cursor)},enableHandles:enableHandles,enableOnly:function(){seehandles=!0},showHandles:showHandles,disableHandles:disableHandles,animMode:animMode,setBgOpacity:setBgOpacity,done:done}}(),Tracker=function(){function toFront(touch){$trk.css({zIndex:450}),touch?$(document).bind("touchmove.jcrop",trackTouchMove).bind("touchend.jcrop",trackTouchEnd):trackDoc&&$(document).bind("mousemove.jcrop",trackMove).bind("mouseup.jcrop",trackUp)}function toBack(){$trk.css({zIndex:290}),$(document).unbind(".jcrop")}function trackMove(e){return onMove(mouseAbs(e)),!1}function trackUp(e){return e.preventDefault(),e.stopPropagation(),btndown&&(btndown=!1,onDone(mouseAbs(e)),Selection.isAwake()&&options.onSelect.call(api,unscale(Coords.getFixed())),toBack(),onMove=function(){},onDone=function(){}),!1}function activateHandlers(move,done,touch){return btndown=!0,onMove=move,onDone=done,toFront(touch),!1}function trackTouchMove(e){return onMove(mouseAbs(Touch.cfilter(e))),!1}function trackTouchEnd(e){return trackUp(Touch.cfilter(e))}function setCursor(t){$trk.css("cursor",t)}var onMove=function(){},onDone=function(){},trackDoc=options.trackDocument;return trackDoc||$trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp),$img.before($trk),{activateHandlers:activateHandlers,setCursor:setCursor}}(),KeyManager=function(){function watchKeys(){options.keySupport&&($keymgr.show(),$keymgr.focus())}function onBlur(){$keymgr.hide()}function doNudge(e,x,y){options.allowMove&&(Coords.moveOffset([x,y]),Selection.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function parseKey(e){if(e.ctrlKey||e.metaKey)return!0;shift_down=e.shiftKey?!0:!1;var nudge=shift_down?10:1;switch(e.keyCode){case 37:doNudge(e,-nudge,0);break;case 39:doNudge(e,nudge,0);break;case 38:doNudge(e,0,-nudge);break;case 40:doNudge(e,0,nudge);break;case 27:options.allowSelect&&Selection.release();break;case 9:return!0}return!1}var $keymgr=$('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),$keywrap=$("<div />").css({position:"absolute",overflow:"hidden"}).append($keymgr);return options.keySupport&&($keymgr.keydown(parseKey).blur(onBlur),ie6mode||!options.fixedSupport?($keymgr.css({position:"absolute",left:"-20px"}),$keywrap.append($keymgr).insertBefore($img)):$keymgr.insertBefore($img)),{watchKeys:watchKeys}}();Touch.support&&$trk.bind("touchstart.jcrop",Touch.newSelection),$hdl_holder.hide(),interfaceUpdate(!0);var api={setImage:setImage,animateTo:animateTo,setSelect:setSelect,setOptions:setOptionsNew,tellSelect:tellSelect,tellScaled:tellScaled,setClass:setClass,disable:disableCrop,enable:enableCrop,cancel:cancelCrop,release:Selection.release,destroy:destroy,focus:KeyManager.watchKeys,getBounds:function(){return[boundx*xscale,boundy*yscale]},getWidgetSize:function(){return[boundx,boundy]},getScaleFactor:function(){return[xscale,yscale]},getOptions:function(){return options},ui:{holder:$div,selection:$sel}};return is_msie&&$div.bind("selectstart",function(){return!1}),$origimg.data("Jcrop",api),api},$.fn.Jcrop=function(options,callback){var api;return this.each(function(){if($(this).data("Jcrop")){if("api"===options)return $(this).data("Jcrop");$(this).data("Jcrop").setOptions(options)}else"IMG"==this.tagName?$.Jcrop.Loader(this,function(){$(this).css({display:"block",visibility:"hidden"}),api=$.Jcrop(this,options),$.isFunction(callback)&&callback.call(api)}):($(this).css({display:"block",visibility:"hidden"}),api=$.Jcrop(this,options),$.isFunction(callback)&&callback.call(api))}),this},$.Jcrop.Loader=function(imgobj,success,error){function completeCheck(){img.complete?($img.unbind(".jcloader"),$.isFunction(success)&&success.call(img)):window.setTimeout(completeCheck,50)}var $img=$(imgobj),img=$img[0];$img.bind("load.jcloader",completeCheck).bind("error.jcloader",function(){$img.unbind(".jcloader"),$.isFunction(error)&&error.call(img)}),img.complete&&$.isFunction(success)&&($img.unbind(".jcloader"),success.call(img))},$.Jcrop.defaults={allowSelect:!0,allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,borderOpacity:.4,handleOpacity:.5,handleSize:null,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}}(jQuery);

/***/ }),

/***/ "./src/app/features/forms/image-cropping/animations-panel/animations-panel.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/animations-panel/animations-panel.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n  <jcrop [storeId]=\"storeId\"\n         class=\"col-sm-9\"\n         [options]=\"{\n           bgColor: 'red',\n           bgOpacity: 0.55\n    }\"\n         src=\"assets/img/superbox/superbox-full-7.jpg\"></jcrop>\n\n  <div class=\"col-sm-3\">\n    <fieldset>\n      <legend>Change bgColor</legend>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" checked=\"true\" [options]=\"{\n                     bgColor: 'red'\n        }\" label=\"red\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" [options]=\"{\n                     bgColor: 'blue'\n        }\" label=\"blue\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" [options]=\"{\n                     bgColor: 'gray'\n        }\" label=\"gray\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" [options]=\"{\n                     bgColor: 'yellow'\n        }\" label=\"yellow\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" [options]=\"{\n                     bgColor: 'black'\n        }\" label=\"black\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" [options]=\"{\n                     bgColor: 'green'\n        }\" label=\"green\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgColor\" [options]=\"{\n                     bgColor: 'white'\n        }\" label=\"white\"></jcrop-option-radio>\n      <br/>\n    </fieldset>\n    <fieldset>\n      <legend>Manipulate bgOpacity</legend>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgOpacity\" [options]=\"{\n                     bgOpacity: .85\n                     }\" label=\"Low\"></jcrop-option-radio>\n\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgOpacity\" checked=\"true\" [options]=\"{\n                     bgOpacity: 0.55\n                     }\" label=\"Mid\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgOpacity\" [options]=\"{\n                     bgOpacity: 0.15\n                     }\" label=\"High\"></jcrop-option-radio>\n      <jcrop-option-radio [storeId]=\"storeId\" group=\"bgOpacity\" [options]=\"{\n                     bgOpacity: 0\n                     }\" label=\"Full\"></jcrop-option-radio>\n\n      <br/>\n    </fieldset>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/features/forms/image-cropping/animations-panel/animations-panel.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/animations-panel/animations-panel.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AnimationsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsPanelComponent", function() { return AnimationsPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationsPanelComponent = /** @class */ (function () {
    function AnimationsPanelComponent() {
        this.storeId = 'animationsPanel';
    }
    AnimationsPanelComponent.prototype.ngOnInit = function () {
    };
    AnimationsPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-editor-animations-panel',
            template: __webpack_require__(/*! ./animations-panel.component.html */ "./src/app/features/forms/image-cropping/animations-panel/animations-panel.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AnimationsPanelComponent);
    return AnimationsPanelComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/api-panel/api-panel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/api-panel/api-panel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n  <jcrop [storeId]=\"storeId\" class=\"col-sm-8\" [options]=\"{\n\n          setSelect: [150, 120, 400, 300]\n\n        }\"\n         src=\"assets/img/superbox/superbox-full-7.jpg\" [width]=\"600\" [height]=\"400\"></jcrop>\n  <jcrop-preview [storeId]=\"storeId\" class=\"col-sm-4 hidden-xs\"></jcrop-preview>\n\n</section>\n<section class=\"card\">\n\n  <div class=\"row\" style=\"\n     padding: 0 .75rem .5rem\n\">\n    <fieldset class=\"col-md-4\">\n      <legend>Selection properties</legend>\n      <jcrop-option-toggle option=\"allowMove\" label=\"Draggable\" [storeId]=\"storeId\"></jcrop-option-toggle>\n      <jcrop-option-toggle option=\"allowResize\" label=\"Resizeable\" [storeId]=\"storeId\"></jcrop-option-toggle>\n      <br/>\n      <legend class=\"hidden-xs\">Thumbnail</legend>\n      <jcrop-option-toggle class=\"hidden-xs\" option=\"showThumbnail\" label=\"Show\" [storeId]=\"storeId\"></jcrop-option-toggle>\n    </fieldset>\n    <fieldset class=\"col-md-4\">\n      <legend>Aspect Ratio</legend>\n      <jcrop-option-radio group=\"aspectRatio\" checked=\"true\" [options]=\"{\n               aspectRatio: 0\n               }\" [storeId]=\"storeId\" label=\"None\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"aspectRatio\" [options]=\"{\n               aspectRatio: 1.4\n               }\" [storeId]=\"storeId\" label=\"Wide\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"aspectRatio\" [options]=\"{\n               aspectRatio: 0.8\n               }\" [storeId]=\"storeId\" label=\"Tall\"></jcrop-option-radio>\n\n      <br/>\n\n      <legend>Shading</legend>\n      <jcrop-option-radio group=\"shading\" [options]=\"{\n               bgColor: 'rgba(0, 0, 0, 0.35)'\n  }\" [storeId]=\"storeId\" label=\"Light\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"shading\" checked=\"true\" [options]=\"{\n               bgColor: 'rgba(0, 0, 0, 0.55)'\n  }\" [storeId]=\"storeId\" label=\"Medium\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"shading\" [options]=\"{\n               bgColor: 'rgba(0, 0, 0, 0.75)'\n  }\" [storeId]=\"storeId\" label=\"Dark\"></jcrop-option-radio>\n    </fieldset>\n    <fieldset class=\"col-md-4\">\n      <legend>New Selections</legend>\n      <jcrop-option-radio group=\"newSelections\" [options]=\"{\n               allowSelect: false\n               }\" [storeId]=\"storeId\" label=\"None\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"newSelections\" [checked]=\"true\" [options]=\"{\n               allowSelect: true\n               }\" [storeId]=\"storeId\" label=\"Single\"></jcrop-option-radio>\n      <br/>\n      <legend>Test image</legend>\n      <jcrop-option-radio group=\"testImage\" [options]=\"{\n               setImage: 'assets/img/superbox/superbox-full-24.jpg',\n  bgOpacity: .6\n  }\" [storeId]=\"storeId\" label=\"Lego\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"testImage\" [checked]=\"true\" [options]=\"{\n               setImage: 'assets/img/superbox/superbox-full-7.jpg',\n  bgOpacity: .6\n  }\" [storeId]=\"storeId\" label=\"Breakdance\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"testImage\" [options]=\"{\n               setImage: 'assets/img/superbox/superbox-full-20.jpg',\n    bgOpacity: .5\n  }\" [storeId]=\"storeId\" label=\"Dragon Fly\"></jcrop-option-radio>\n    </fieldset>\n\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/features/forms/image-cropping/api-panel/api-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/api-panel/api-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: ApiPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPanelComponent", function() { return ApiPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiPanelComponent = /** @class */ (function () {
    function ApiPanelComponent() {
        this.storeId = 'apiPanel';
    }
    ApiPanelComponent.prototype.ngOnInit = function () {
    };
    ApiPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-editor-api-panel',
            template: __webpack_require__(/*! ./api-panel.component.html */ "./src/app/features/forms/image-cropping/api-panel/api-panel.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ApiPanelComponent);
    return ApiPanelComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/default-panel/default-panel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/default-panel/default-panel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DefaultPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPanelComponent", function() { return DefaultPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultPanelComponent = /** @class */ (function () {
    function DefaultPanelComponent(store) {
        this.store = store;
        this.storeId = 'defaultPanel';
    }
    DefaultPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefaultPanelComponent.prototype, "active", void 0);
    DefaultPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-editor-default-panel',
            template: "\n            <section>\n                <jcrop\n                    [storeId]=\"storeId\"\n                    src=\"assets/img/superbox/superbox-full-11.jpg\"\n                    [width]=\"600\" [height]=\"400\"></jcrop>\n            </section>\n",
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DefaultPanelComponent);
    return DefaultPanelComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/image-editor.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/image-editor.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Image Editor']\" icon=\"pencil-square-o\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <!-- widget grid -->\n\n\n  <sa-widgets-grid>\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n        <div class=\"alert alert-danger hidden-lg hidden-md hidden-sm\">\n          <b>Please note:</b>\n          This plugin is non-responsive\n        </div>\n\n        <!-- Widget ID (each widget will need unique ID)-->\n\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [togglebutton]=\"false\" [deletebutton]=\"false\"\n                   [fullscreenbutton]=\"false\">\n\n\n          <header role=\"heading\">\n            <span class=\"widget-icon\"> <i class=\"fa fa-file-image-o txt-color-darken\"></i> </span>\n\n            <h2 class=\"hidden-xs hidden-sm\">jcrop </h2>\n\n\n          </header>\n\n          <div role=\"content\" class=\"tabbed-widget-content\">\n\n            <div class=\"widget-body\">\n\n              <tabset type=\"tabs pull-right\">\n\n                <tab active=\"true\">\n                  <ng-template tabHeading><i class=\"fa fa-crop text-success\"></i> <span\n                    class=\"hidden-mobile hidden-tablet\">API</span></ng-template>\n\n                  <h4 class=\"margin-bottom-10\">API Interface — real-time API\n                    example</h4>\n\n                  <div class=\"alert alert-info\">\n                    <b>Jcrop 9.0.3 API interface panel</b>\n                    <br/>\n\n                  </div>\n\n                  <image-editor-api-panel></image-editor-api-panel>\n                </tab>\n                <tab>\n                  <ng-template tabHeading><i class=\"fa fa-crop text-primary\"></i> <span\n                    class=\"hidden-mobile hidden-tablet\">Default</span></ng-template>\n\n                  <h4 class=\"margin-bottom-10\">Default Behaviour</h4>\n\n                  <div class=\"alert alert-info\">\n                    <b>This example demonstrates the default behavior of Jcrop.</b>\n                    <br/>\n                    Since no event handlers have been attached it only performs\n                    the cropping behavior.\n                  </div>\n\n                  <image-editor-default-panel></image-editor-default-panel>\n                </tab>\n                <tab>\n                  <ng-template tabHeading><i class=\"fa fa-crop text-warning\"></i> <span\n                    class=\"hidden-mobile hidden-tablet\">Basic</span></ng-template>\n\n                  <h4 class=\"margin-bottom-10\">Basic Handler — basic form\n                    integration</h4>\n\n                  <div class=\"alert alert-info\">\n                    <b>An example with a basic event handler.</b> Here we've tied\n                    several form values together with a simple event handler invocation.\n                    The result is that the form values are updated in real-time as\n                    the selection is changed using Jcrop's <em>onChange</em> handler.\n                  </div>\n                  <image-editor-show-selection-panel></image-editor-show-selection-panel>\n                </tab>\n                <tab>\n                  <ng-template tabHeading><i class=\"fa fa-crop text-danger\"></i> <span class=\"hidden-mobile hidden-tablet\">Aspect Ratio</span>\n                  </ng-template>\n                  <h4 class=\"margin-bottom-10\">Aspect Ratio w/ Preview Pane — nice\n                    visual example</h4>\n\n                  <div class=\"alert alert-info\">\n                    <b>An example implementing a preview pane.</b>\n                    Obviously the most visual demo, the preview pane is accomplished\n                    entirely outside of Jcrop with a simple jQuery-flavored callback.\n                    This type of interface could be useful for creating a thumbnail\n                    or avatar. The onChange event handler is used to update the\n                    view in the preview pane.\n                  </div>\n\n                  <div id=\"jcrop-demo-with-preview\">\n\n                    <image-editor-preview-panel></image-editor-preview-panel>\n\n                  </div>\n\n                </tab>\n                <tab>\n                  <ng-template tabHeading><i class=\"fa fa-crop txt-color-purple\"></i> <span\n                    class=\"hidden-mobile hidden-tablet\">Animations</span></ng-template>\n                  <h4 class=\"margin-bottom-10\">Animation/Transitions —\n                    animation/fading demo</h4>\n\n                  <div class=\"alert alert-info\">\n                    <b>Experimental shader active.</b>\n                    Jcrop now includes a shading mode that facilitates building\n                    better transparent Jcrop instances. The experimental shader is less\n                    robust than Jcrop's default shading method and should only be\n                    used if you require this functionality.\n                  </div>\n\n                  <div class=\"row\">\n\n                    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n\n                      <image-editor-animations-panel></image-editor-animations-panel>\n\n                    </div>\n\n                  </div>\n                </tab>\n                <tab>\n                  <ng-template tabHeading><i class=\"fa fa-crop txt-color-pink\"></i> <span\n                    class=\"hidden-mobile hidden-tablet\">Styling</span></ng-template>\n\n\n                  <h4 class=\"margin-bottom-10\">Styling Example — style Jcrop\n                    dynamically</h4>\n\n\n                  <image-editor-styling-panel></image-editor-styling-panel>\n                </tab>\n              </tabset>\n\n            </div>\n\n          </div>\n\n        </div>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n\n  <!-- end widget grid -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/image-cropping/image-editor.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/image-editor.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImageEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditorComponent", function() { return ImageEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageEditorComponent = /** @class */ (function () {
    function ImageEditorComponent() {
    }
    ImageEditorComponent.prototype.ngOnInit = function () {
    };
    ImageEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-editor',
            template: __webpack_require__(/*! ./image-editor.component.html */ "./src/app/features/forms/image-cropping/image-editor.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ImageEditorComponent);
    return ImageEditorComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/image-editor.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/image-editor.module.ts ***!
  \**********************************************************************/
/*! exports provided: ImageEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditorModule", function() { return ImageEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_editor_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-editor.routing */ "./src/app/features/forms/image-cropping/image-editor.routing.ts");
/* harmony import */ var _image_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-editor.component */ "./src/app/features/forms/image-cropping/image-editor.component.ts");
/* harmony import */ var _default_panel_default_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-panel/default-panel.component */ "./src/app/features/forms/image-cropping/default-panel/default-panel.component.ts");
/* harmony import */ var _api_panel_api_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-panel/api-panel.component */ "./src/app/features/forms/image-cropping/api-panel/api-panel.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _show_selection_panel_show_selection_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-selection-panel/show-selection-panel.component */ "./src/app/features/forms/image-cropping/show-selection-panel/show-selection-panel.component.ts");
/* harmony import */ var _preview_panel_preview_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview-panel/preview-panel.component */ "./src/app/features/forms/image-cropping/preview-panel/preview-panel.component.ts");
/* harmony import */ var _animations_panel_animations_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations-panel/animations-panel.component */ "./src/app/features/forms/image-cropping/animations-panel/animations-panel.component.ts");
/* harmony import */ var _styling_panel_styling_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styling-panel/styling-panel.component */ "./src/app/features/forms/image-cropping/styling-panel/styling-panel.component.ts");
/* harmony import */ var _app_shared_forms_jcrop_jcrop_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/forms/jcrop/jcrop.module */ "./src/app/shared/forms/jcrop/jcrop.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import rootReducer from './image-editor.reducer'







var ImageEditorModule = /** @class */ (function () {
    function ImageEditorModule() {
        // this.ngRedux.configureStore(
        //   rootReducer, {
        //     apiPanel:configJcropInitialState('apiPanel'),
        //     defaultPanel:configJcropInitialState('defaultPanel'),
        //     showSelectionPanel:configJcropInitialState('showSelectionPanel'),
        //     previewPanel:configJcropInitialState('previewPanel'),
        //     animationsPanel:configJcropInitialState('animationsPanel'),
        //     stylingPanel:configJcropInitialState('stylingPanel'),
        //   }
        // );
    }
    ImageEditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_image_editor_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _app_shared_forms_jcrop_jcrop_module__WEBPACK_IMPORTED_MODULE_10__["JcropModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"]],
            declarations: [_image_editor_component__WEBPACK_IMPORTED_MODULE_2__["ImageEditorComponent"], _default_panel_default_panel_component__WEBPACK_IMPORTED_MODULE_3__["DefaultPanelComponent"], _api_panel_api_panel_component__WEBPACK_IMPORTED_MODULE_4__["ApiPanelComponent"], _show_selection_panel_show_selection_panel_component__WEBPACK_IMPORTED_MODULE_6__["ShowSelectionPanelComponent"], _preview_panel_preview_panel_component__WEBPACK_IMPORTED_MODULE_7__["PreviewPanelComponent"], _animations_panel_animations_panel_component__WEBPACK_IMPORTED_MODULE_8__["AnimationsPanelComponent"], _styling_panel_styling_panel_component__WEBPACK_IMPORTED_MODULE_9__["StylingPanelComponent"]],
            exports: [_image_editor_component__WEBPACK_IMPORTED_MODULE_2__["ImageEditorComponent"]],
            providers: [],
        }),
        __metadata("design:paramtypes", [])
    ], ImageEditorModule);
    return ImageEditorModule;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/image-editor.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/image-editor.routing.ts ***!
  \***********************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-editor.component */ "./src/app/features/forms/image-cropping/image-editor.component.ts");


var routes = [
    {
        path: '',
        component: _image_editor_component__WEBPACK_IMPORTED_MODULE_1__["ImageEditorComponent"]
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/features/forms/image-cropping/preview-panel/preview-panel.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/preview-panel/preview-panel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n  <div class=\"col-sm-8\">\n    <jcrop [storeId]=\"storeId\"\n           [options]=\"{\n           showThumbnail: true,\n           thumbnailSize: 200,\n           aspectRatio: 0\n           }\"\n           src=\"assets/img/superbox/superbox-full-10.jpg\" width=\"600\" height=\"400\"></jcrop>\n  </div>\n  <div class=\"col-sm-4\">\n    <jcrop-preview [storeId]=\"storeId\"></jcrop-preview>\n\n    <fieldset>\n\n      <br>\n      <legend>Aspect Ratio</legend>\n      <jcrop-option-radio group=\"aspectRatio\" checked=\"true\" [options]=\"{\n                   aspectRatio: 0\n                   }\" [storeId]=\"storeId\" label=\"None\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"aspectRatio\" [options]=\"{\n                   aspectRatio: 1.4\n                   }\" [storeId]=\"storeId\" label=\"Wide\"></jcrop-option-radio>\n      <jcrop-option-radio group=\"aspectRatio\" [options]=\"{\n                   aspectRatio: 0.8\n                   }\" [storeId]=\"storeId\" label=\"Tall\"></jcrop-option-radio>\n\n      <br/>\n    </fieldset>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/features/forms/image-cropping/preview-panel/preview-panel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/preview-panel/preview-panel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PreviewPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPanelComponent", function() { return PreviewPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewPanelComponent = /** @class */ (function () {
    function PreviewPanelComponent() {
        this.storeId = 'previewPanel';
    }
    PreviewPanelComponent.prototype.ngOnInit = function () {
    };
    PreviewPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-editor-preview-panel',
            template: __webpack_require__(/*! ./preview-panel.component.html */ "./src/app/features/forms/image-cropping/preview-panel/preview-panel.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PreviewPanelComponent);
    return PreviewPanelComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/show-selection-panel/show-selection-panel.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/show-selection-panel/show-selection-panel.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <section class=\"col-sm-8\">\n    <jcrop [storeId]=\"storeId\"\n           src=\"assets/img/superbox/superbox-full-9.jpg\" width=\"600\" height=\"400\"></jcrop>\n  </section>\n  <section class=\"col-sm-4\">\n    <jcrop-fields [storeId]=\"storeId\"></jcrop-fields>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/features/forms/image-cropping/show-selection-panel/show-selection-panel.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/show-selection-panel/show-selection-panel.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ShowSelectionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSelectionPanelComponent", function() { return ShowSelectionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowSelectionPanelComponent = /** @class */ (function () {
    function ShowSelectionPanelComponent() {
        this.storeId = 'showSelectionPanel';
    }
    ShowSelectionPanelComponent.prototype.ngOnInit = function () {
    };
    ShowSelectionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-editor-show-selection-panel',
            template: __webpack_require__(/*! ./show-selection-panel.component.html */ "./src/app/features/forms/image-cropping/show-selection-panel/show-selection-panel.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ShowSelectionPanelComponent);
    return ShowSelectionPanelComponent;
}());



/***/ }),

/***/ "./src/app/features/forms/image-cropping/styling-panel/styling-panel.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/styling-panel/styling-panel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n  <jcrop [storeId]=\"storeId\"\n         class=\"col-sm-8\"\n         [options]=\"{\n              setSelect: [120, 120, 420, 320]\n           }\"\n         src=\"assets/img/superbox/superbox-full-16.jpg\"></jcrop>\n\n  <fieldset class=\"col-md-4\">\n    <legend>Manipulate classes</legend>\n    <jcrop-option-radio [storeId]=\"storeId\" group=\"containerClass\" [checked]=\"true\" [options]=\"{\n                 containerClass: 'jcrop-dark',\n    bgOpacity: .65,\n    bgColor: 'black'\n\n    }\" label=\"jcrop-dark\"></jcrop-option-radio>\n    <jcrop-option-radio [storeId]=\"storeId\" group=\"containerClass\" [options]=\"{\n                 containerClass: 'jcrop-light',\n    bgOpacity: .35,\n    bgColor: 'white'\n    }\" label=\"jcrop-light\"></jcrop-option-radio>\n    <jcrop-option-radio [storeId]=\"storeId\" group=\"containerClass\" [options]=\"{\n                 containerClass: 'jcrop-normal',\n    bgOpacity: .25,\n    bgColor: 'black'\n    }\" label=\"jcrop-normal\"></jcrop-option-radio>\n\n    <br/>\n  </fieldset>\n</section>\n"

/***/ }),

/***/ "./src/app/features/forms/image-cropping/styling-panel/styling-panel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/forms/image-cropping/styling-panel/styling-panel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StylingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingPanelComponent", function() { return StylingPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StylingPanelComponent = /** @class */ (function () {
    function StylingPanelComponent() {
        this.storeId = 'stylingPanel';
    }
    StylingPanelComponent.prototype.ngOnInit = function () {
    };
    StylingPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-editor-styling-panel',
            template: __webpack_require__(/*! ./styling-panel.component.html */ "./src/app/features/forms/image-cropping/styling-panel/styling-panel.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], StylingPanelComponent);
    return StylingPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/actions/crop.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/actions/crop.actions.ts ***!
  \************************************************************/
/*! exports provided: CropActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropActions", function() { return CropActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
var CropActions = /** @class */ (function () {
    function CropActions(
    // private ngRedux: NgRedux<any>
    ) {
    }
    CropActions.prototype.cropSelect = function (crop, storeId) {
        // this.ngRedux.dispatch({
        //     type: CropActions.CROP_SELECT,
        //     crop,
        //     storeId
        //   }
        // )
    };
    CropActions.prototype.cropChange = function (crop, storeId) {
        // this.ngRedux.dispatch({
        //     type: CropActions.CROP_CHANGE,
        //     crop,
        //     storeId
        //   }
        // )
    };
    CropActions.prototype.cropFieldChange = function (field, value, storeId) {
        // this.ngRedux.dispatch({
        //   type: CropActions.CROP_FIELD_CHANGE,
        //   field,
        //   value: parseInt(value),
        //   storeId
        // })
    };
    CropActions.prototype.cropRandomSelection = function (storeId) {
        // this.ngRedux.dispatch({
        //   type: CropActions.CROP_RANDOM_SELECTION,
        //   crop: this.randomSelection(),
        //   storeId
        // })
    };
    CropActions.prototype.randomSelection = function () {
        var x = Math.round(Math.random() * 250);
        var y = Math.round(Math.random() * 180);
        return {
            x: x,
            y: y,
            x2: x + Math.round((Math.random() * 200) + 50),
            y2: y + Math.round((Math.random() * 300) + 60)
        };
    };
    CropActions.CROP_SELECT = 'CROP_SELECT';
    CropActions.CROP_CHANGE = 'CROP_CHANGE';
    CropActions.CROP_FIELD_CHANGE = 'CROP_FIELD_CHANGE';
    CropActions.CROP_RANDOM_SELECTION = 'CROP_RANDOM_SELECTION';
    CropActions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CropActions);
    return CropActions;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/actions/options.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/actions/options.actions.ts ***!
  \***************************************************************/
/*! exports provided: OptionsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsActions", function() { return OptionsActions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {NgRedux} from "@angular-redux/store";
/**
 * Action creators in Angular 2. We may as well adopt a more
 * class-based approach to satisfy Angular 2's OOP idiom. It
 * has the advantage of letting us use the dependency injector
 * as a replacement for redux-thunk.
 */
var OptionsActions = /** @class */ (function () {
    function OptionsActions(
    // private ngRedux: NgRedux<any>
    ) {
    }
    OptionsActions.prototype.toggleOption = function (update) {
        // this.ngRedux.dispatch({
        //     type: OptionsActions.TOGGLE_OPTION,
        //     option: update.option,
        //     storeId: update.storeId
        //   }
        // )
    };
    OptionsActions.prototype.setOptions = function (update) {
        // this.ngRedux.dispatch({
        //   type: OptionsActions.SET_OPTIONS,
        //   options: update.options,
        //   storeId: update.storeId
        // })
    };
    OptionsActions.TOGGLE_OPTION = 'TOGGLE_OPTION';
    OptionsActions.SET_OPTIONS = 'SET_OPTIONS';
    OptionsActions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OptionsActions);
    return OptionsActions;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/components/field.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/components/field.component.ts ***!
  \******************************************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_crop_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/crop.actions */ "./src/app/shared/forms/jcrop/actions/crop.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldComponent = /** @class */ (function () {
    function FieldComponent(actions) {
        this.actions = actions;
        this.id = 'jcrop-field-' + FieldComponent_1.idCounter++;
    }
    FieldComponent_1 = FieldComponent;
    FieldComponent.prototype.ngOnInit = function () {
        // this.value$ = this.ngRedux.select([this.storeId, 'crop', 'selection', this.field]);
    };
    var FieldComponent_1;
    FieldComponent.idCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "storeId", void 0);
    FieldComponent = FieldComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jcrop-field',
            template: "\n    <div>\n        <input type=\"number\" id=\"{{id}}\"\n               #input\n               [value]=\"value$ | async\"\n               (change)=\"actions.cropFieldChange(field, input.value, storeId)\"/>\n        <label htmlFor=\"{{id}}\" class=\"active\">{{field}}</label>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_actions_crop_actions__WEBPACK_IMPORTED_MODULE_1__["CropActions"]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/components/fields.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/components/fields.component.ts ***!
  \*******************************************************************/
/*! exports provided: FieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsComponent", function() { return FieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldsComponent = /** @class */ (function () {
    function FieldsComponent() {
        this.fields = ['x', 'y', 'x2', 'y2'];
    }
    FieldsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldsComponent.prototype, "storeId", void 0);
    FieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jcrop-fields',
            template: "\n    \n    <jcrop-field *ngFor=\"let field of fields\" [field]=\"field\" [storeId]=\"storeId\"></jcrop-field> \n    \n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FieldsComponent);
    return FieldsComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/components/jcrop-preview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/components/jcrop-preview.component.ts ***!
  \**************************************************************************/
/*! exports provided: JcropPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JcropPreviewComponent", function() { return JcropPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {NgRedux} from "@angular-redux/store";
var JcropPreviewComponent = /** @class */ (function () {
    function JcropPreviewComponent(
    // private ngRedux: NgRedux<any>
    ) {
        this.active = false;
    }
    JcropPreviewComponent.prototype.ngOnInit = function () {
        var self = this;
        // this.optionsSub = this.ngRedux
        //   .select([this.storeId, 'options'])
        //   .subscribe((options: any) => {
        //     if (options) {
        //       self.active = !!options.showThumbnail;
        //       self.previewSrc = options.src;
        //       self.options = options;
        //       self.size = options.thumbnailSize + 'px';
        //     }
        //   });
        // this.cropSub = this.ngRedux.select([this.storeId, 'crop', 'change'])
        //   .subscribe((crop: any)=> {
        //     if (crop && self.active) {
        //       self.crop = crop
        //     }
        //   });
    };
    JcropPreviewComponent.prototype.ngOnDestroy = function () {
        // this.optionsSub.unsubscribe();
        // this.cropSub.unsubscribe();
    };
    JcropPreviewComponent.prototype.setContainerStyles = function () {
        var options = this.options;
        var crop = this.crop;
        if (crop && crop.w > 0) {
            var size = options.thumbnailSize;
            var width = crop.h <= crop.w ? size : crop.w / crop.h * size;
            var height = crop.h > crop.w ? size : crop.h / crop.w * size;
            return {
                width: Math.round(width) + 'px',
                height: Math.round(height) + 'px'
            };
        }
        else {
            return {};
        }
    };
    JcropPreviewComponent.prototype.setImgStyles = function () {
        var crop = this.crop;
        var options = this.options;
        if (crop && crop.w > 0) {
            var rx = options.width / crop.w;
            var ry = options.height / crop.h;
            var size = options.thumbnailSize;
            var width = crop.h <= crop.w ? size : crop.w / crop.h * size;
            var height = crop.h > crop.w ? size : crop.h / crop.w * size;
            return {
                width: Math.round(rx * width) + 'px',
                height: Math.round(ry * height) + 'px',
                marginLeft: '-' + Math.round(width / crop.w * crop.x) + 'px',
                marginTop: '-' + Math.round(height / crop.h * crop.y) + 'px'
            };
        }
        else {
            return {};
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], JcropPreviewComponent.prototype, "storeId", void 0);
    JcropPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jcrop-preview',
            template: "\n    <div class=\"jcrop-preview-container\" [class.active]=\"active\" [ngStyle]=\"{\n        width: size,\n        height: size\n    }\">\n      <div class=\"jcrop-preview\" [ngStyle]=\"setContainerStyles()\" *ngIf=\"active\">\n        <img [ngStyle]=\"setImgStyles()\" [src]=\"previewSrc\">\n      </div>\n    </div>\n  ",
            styles: ["\n  .jcrop-preview-container{\n      position: relative;\n  }\n  .jcrop-preview-container.active{\n      box-shadow: 0 0 1px rgba(111,111,111, .7);\n  }\n  .jcrop-preview{\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      position: relative;\n      overflow: hidden;\n  }\n  .jcrop-preview img{\n      position: absolute;\n  }\n"]
        }),
        __metadata("design:paramtypes", [])
    ], JcropPreviewComponent);
    return JcropPreviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/components/jcrop.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/components/jcrop.component.ts ***!
  \******************************************************************/
/*! exports provided: JcropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JcropComponent", function() { return JcropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_crop_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/crop.actions */ "./src/app/shared/forms/jcrop/actions/crop.actions.ts");
/* harmony import */ var _actions_options_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/options.actions */ "./src/app/shared/forms/jcrop/actions/options.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {NgRedux} from "@angular-redux/store";

__webpack_require__(/*! jquery-jcrop/js/jquery.Jcrop.min.js */ "./node_modules/jquery-jcrop/js/jquery.Jcrop.min.js");
var debounce = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
var JcropComponent = /** @class */ (function () {
    function JcropComponent(
    // private ngRedux: NgRedux<any>,
    cropActions, optionsActions) {
        var _this = this;
        this.cropActions = cropActions;
        this.optionsActions = optionsActions;
        this.lastOptions = {};
        this.lastCrop = {};
        this.isMoving = false;
        this.isActive = false;
        this.onChange = function (crop) {
            _this.cropActions.cropChange(crop, _this.storeId);
        };
        this.onSelect = function (crop) {
            _this.cropActions.cropSelect(crop, _this.storeId);
        };
        this.onRelease = function (crop) {
            _this.isActive = false;
        };
    }
    JcropComponent.prototype.ngOnInit = function () {
        var self = this;
        // this.optionsSub = this.ngRedux.select([this.storeId, 'options'])
        //   .subscribe((options: any) => {
        //     if (!this.api) return;
        //     let updates = Object.keys(options).reduce((_updates, key)=> {
        //       if (this.lastOptions[key] != options[key]) {
        //         _updates[key] = options[key]
        //       }
        //       return _updates
        //     }, {});
        //     if (options.setImage) {
        //       options.src = options.setImage;
        //       self.api.disable();
        //       self.api.setImage(options.setImage);
        //       self.api.enable();
        //     }
        //     if (Object.keys(updates).length) {
        //       self.api.setOptions(updates);
        //       self.api.focus();
        //     }
        //     self.lastOptions = Object.assign({}, options)
        //   });
        // this.cropSub = this.ngRedux.select([this.storeId, 'crop', 'selection']).skipWhile(() => {
        //   return self.isMoving
        // }).subscribe((crop: any)=> {
        //   if (!self.api) return;
        //   let options = self.ngRedux.getState()[self.storeId].options;
        //   let lc = self.lastCrop;
        //   if (
        //     crop &&
        //     crop.x &&
        //     crop.y &&
        //     crop.x2 &&
        //     crop.y2 && !self.isMoving &&
        //     (
        //       lc.x != crop.x ||
        //       lc.y != crop.y ||
        //       lc.x2 != crop.x2 ||
        //       lc.y2 != crop.y2
        //     )
        //   ) {
        //     self.lastCrop = Object.assign({}, crop);
        //     self.isMoving = true;
        //     if (options.animateTo) {
        //       self.api.animateTo([crop.x, crop.y, crop.x2, crop.y2], function () {
        //         self.isMoving = false
        //       });
        //     } else {
        //       self.api.setSelect([crop.x, crop.y, crop.x2, crop.y2]);
        //       self.isMoving = false
        //     }
        //   }
        // });
        this.render();
    };
    JcropComponent.prototype.render = function () {
        var self = this;
        var element = jQuery(this.jcropImage.nativeElement);
        var container = jQuery(this.jcropContainer.nativeElement);
        element.Jcrop({
            onChange: this.onChange,
            onSelect: this.onSelect,
            onRelease: this.onRelease,
        }, function () {
            self.api = this;
            var initializingOptions = Object.assign({}, {
                width: self.width,
                height: self.height,
                src: self.src,
            }, self.options || {});
            if (initializingOptions.setSelect) {
                self.cropActions.cropSelect(initializingOptions.setSelect, self.storeId);
            }
            else {
                self.cropActions.cropRandomSelection(self.storeId);
            }
            self.optionsActions.setOptions({
                options: initializingOptions,
                storeId: self.storeId
            });
        });
    };
    JcropComponent.prototype.ngOnDestroy = function () {
        // this.optionsSub.unsubscribe();
        // this.cropSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], JcropComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], JcropComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], JcropComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JcropComponent.prototype, "storeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jcropImage'),
        __metadata("design:type", Object)
    ], JcropComponent.prototype, "jcropImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jcropContainer'),
        __metadata("design:type", Object)
    ], JcropComponent.prototype, "jcropContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JcropComponent.prototype, "options", void 0);
    JcropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jcrop',
            template: "\n    <div #jcropContainer [ngStyle]=\"{\n      width: width + 'px',\n      height: height + 'px'\n    }\">\n        <img #jcropImage [src]=\"src\" [width]=\"width\" [height]=\"height\" />\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [_actions_crop_actions__WEBPACK_IMPORTED_MODULE_1__["CropActions"],
            _actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["OptionsActions"]])
    ], JcropComponent);
    return JcropComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/components/option-radio.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/components/option-radio.component.ts ***!
  \*************************************************************************/
/*! exports provided: OptionRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionRadioComponent", function() { return OptionRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_options_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/options.actions */ "./src/app/shared/forms/jcrop/actions/options.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {NgRedux} from "@angular-redux/store";

var OptionRadioComponent = /** @class */ (function () {
    function OptionRadioComponent(
    // private ngRedux: NgRedux<any>,
    actions) {
        this.actions = actions;
        this.id = 'jcrop-option-radio-' + OptionRadioComponent_1.idCounter++;
    }
    OptionRadioComponent_1 = OptionRadioComponent;
    OptionRadioComponent.prototype.ngOnInit = function () {
    };
    OptionRadioComponent.prototype.onChange = function () {
        this.actions.setOptions({
            options: this.options,
            storeId: this.storeId
        });
    };
    var OptionRadioComponent_1;
    OptionRadioComponent.idCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OptionRadioComponent.prototype, "checked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "storeId", void 0);
    OptionRadioComponent = OptionRadioComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jcrop-option-radio',
            template: "\n    <div >\n        <input (change)=\"onChange()\" [checked]=\"checked\" name=\"{{group}}\" type=\"radio\" id=\"{{id}}\" />\n        <label htmlFor=\"{{id}}\">{{label}}</label>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_actions_options_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"]])
    ], OptionRadioComponent);
    return OptionRadioComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/components/option-toggle.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/forms/jcrop/components/option-toggle.component.ts ***!
  \**************************************************************************/
/*! exports provided: OptionToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionToggleComponent", function() { return OptionToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_options_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/options.actions */ "./src/app/shared/forms/jcrop/actions/options.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {NgRedux} from "@angular-redux/store";
var OptionToggleComponent = /** @class */ (function () {
    function OptionToggleComponent(
    // private ngRedux: NgRedux<any>,
    actions) {
        this.actions = actions;
    }
    OptionToggleComponent.prototype.ngOnInit = function () {
        var options; // = this.storeId? this.ngRedux.getState()[this.storeId].options : this.ngRedux.getState().options;
        if (options && options[this.option]) {
            this.active = true;
        }
    };
    OptionToggleComponent.prototype.onChange = function () {
        this.actions.toggleOption({
            option: this.option,
            storeId: this.storeId
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OptionToggleComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionToggleComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionToggleComponent.prototype, "option", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OptionToggleComponent.prototype, "storeId", void 0);
    OptionToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jcrop-option-toggle',
            template: "\n    <div class=\"switch\">\n        <label >\n            <input type=\"checkbox\" [checked]=\"active\"\n             [(ngModel)]=\"active\" (ngModelChange)=\"onChange()\" />\n                <span class=\"lever\" ></span>\n            {{label}}\n        </label>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [_actions_options_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"]])
    ], OptionToggleComponent);
    return OptionToggleComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/jcrop/jcrop.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/forms/jcrop/jcrop.module.ts ***!
  \****************************************************/
/*! exports provided: JcropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JcropModule", function() { return JcropModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/field.component */ "./src/app/shared/forms/jcrop/components/field.component.ts");
/* harmony import */ var _components_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fields.component */ "./src/app/shared/forms/jcrop/components/fields.component.ts");
/* harmony import */ var _components_jcrop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jcrop.component */ "./src/app/shared/forms/jcrop/components/jcrop.component.ts");
/* harmony import */ var _actions_crop_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/crop.actions */ "./src/app/shared/forms/jcrop/actions/crop.actions.ts");
/* harmony import */ var _components_option_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/option-radio.component */ "./src/app/shared/forms/jcrop/components/option-radio.component.ts");
/* harmony import */ var _components_option_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/option-toggle.component */ "./src/app/shared/forms/jcrop/components/option-toggle.component.ts");
/* harmony import */ var _actions_options_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/options.actions */ "./src/app/shared/forms/jcrop/actions/options.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_jcrop_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/jcrop-preview.component */ "./src/app/shared/forms/jcrop/components/jcrop-preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var JcropModule = /** @class */ (function () {
    function JcropModule() {
    }
    JcropModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            declarations: [_components_field_component__WEBPACK_IMPORTED_MODULE_2__["FieldComponent"], _components_fields_component__WEBPACK_IMPORTED_MODULE_3__["FieldsComponent"], _components_jcrop_component__WEBPACK_IMPORTED_MODULE_4__["JcropComponent"],
                _components_option_radio_component__WEBPACK_IMPORTED_MODULE_6__["OptionRadioComponent"], _components_option_toggle_component__WEBPACK_IMPORTED_MODULE_7__["OptionToggleComponent"], _components_jcrop_preview_component__WEBPACK_IMPORTED_MODULE_10__["JcropPreviewComponent"]],
            exports: [_components_field_component__WEBPACK_IMPORTED_MODULE_2__["FieldComponent"], _components_fields_component__WEBPACK_IMPORTED_MODULE_3__["FieldsComponent"], _components_jcrop_component__WEBPACK_IMPORTED_MODULE_4__["JcropComponent"],
                _components_option_radio_component__WEBPACK_IMPORTED_MODULE_6__["OptionRadioComponent"], _components_option_toggle_component__WEBPACK_IMPORTED_MODULE_7__["OptionToggleComponent"], _components_jcrop_preview_component__WEBPACK_IMPORTED_MODULE_10__["JcropPreviewComponent"]],
            providers: [_actions_crop_actions__WEBPACK_IMPORTED_MODULE_5__["CropActions"], _actions_options_actions__WEBPACK_IMPORTED_MODULE_8__["OptionsActions"]]
        })
    ], JcropModule);
    return JcropModule;
}());



/***/ })

}]);
//# sourceMappingURL=image-cropping-image-editor-module.js.map