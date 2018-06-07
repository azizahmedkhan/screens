/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(c,g){var b=0,f=/^ui-id-\d+$/;
c.ui=c.ui||{};
c.extend(c.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
c.fn.extend({focus:(function(h){return function(k,l){return typeof k==="number"?this.each(function(){var m=this;
setTimeout(function(){c(m).focus();
if(l){l.call(m)
}},k)
}):h.apply(this,arguments)
}
})(c.fn.focus),scrollParent:function(){var h;
if((c.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){h=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.css(this,"position"))&&(/(auto|scroll)/).test(c.css(this,"overflow")+c.css(this,"overflow-y")+c.css(this,"overflow-x"))
}).eq(0)
}else{h=this.parents().filter(function(){return(/(auto|scroll)/).test(c.css(this,"overflow")+c.css(this,"overflow-y")+c.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!h.length?c(document):h
},zIndex:function(m){if(m!==g){return this.css("zIndex",m)
}if(this.length){var k=c(this[0]),h,l;
while(k.length&&k[0]!==document){h=k.css("position");
if(h==="absolute"||h==="relative"||h==="fixed"){l=parseInt(k.css("zIndex"),10);
if(!isNaN(l)&&l!==0){return l
}}k=k.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++b)
}})
},removeUniqueId:function(){return this.each(function(){if(f.test(this.id)){c(this).removeAttr("id")
}})
}});
function e(l,h){var n,m,k,o=l.nodeName.toLowerCase();
if("area"===o){n=l.parentNode;
m=n.name;
if(!l.href||!m||n.nodeName.toLowerCase()!=="map"){return false
}k=c("img[usemap=#"+m+"]")[0];
return !!k&&d(k)
}return(/input|select|textarea|button|object/.test(o)?!l.disabled:"a"===o?l.href||h:h)&&d(l)
}function d(h){return c.expr.filters.visible(h)&&!c(h).parents().addBack().filter(function(){return c.css(this,"visibility")==="hidden"
}).length
}c.extend(c.expr[":"],{data:c.expr.createPseudo?c.expr.createPseudo(function(h){return function(k){return !!c.data(k,h)
}
}):function(l,k,h){return !!c.data(l,h[3])
},focusable:function(h){return e(h,!isNaN(c.attr(h,"tabindex")))
},tabbable:function(l){var h=c.attr(l,"tabindex"),k=isNaN(h);
return(k||h>=0)&&e(l,!k)
}});
if(!c("<a>").outerWidth(1).jquery){c.each(["Width","Height"],function(l,h){var k=h==="Width"?["Left","Right"]:["Top","Bottom"],m=h.toLowerCase(),o={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};
function n(r,q,p,t){c.each(k,function(){q-=parseFloat(c.css(r,"padding"+this))||0;
if(p){q-=parseFloat(c.css(r,"border"+this+"Width"))||0
}if(t){q-=parseFloat(c.css(r,"margin"+this))||0
}});
return q
}c.fn["inner"+h]=function(p){if(p===g){return o["inner"+h].call(this)
}return this.each(function(){c(this).css(m,n(this,p)+"px")
})
};
c.fn["outer"+h]=function(p,q){if(typeof p!=="number"){return o["outer"+h].call(this,p)
}return this.each(function(){c(this).css(m,n(this,p,true,q)+"px")
})
}
})
}if(!c.fn.addBack){c.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}
}if(c("<a>").data("a-b","a").removeData("a-b").data("a-b")){c.fn.removeData=(function(h){return function(k){if(arguments.length){return h.call(this,c.camelCase(k))
}else{return h.call(this)
}}
})(c.fn.removeData)
}c.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
c.support.selectstart="onselectstart" in document.createElement("div");
c.fn.extend({disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(h){h.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
c.extend(c.ui,{plugin:{add:function(k,l,n){var h,m=c.ui[k].prototype;
for(h in n){m.plugins[h]=m.plugins[h]||[];
m.plugins[h].push([l,n[h]])
}},call:function(h,l,k){var m,n=h.plugins[l];
if(!n||!h.element[0].parentNode||h.element[0].parentNode.nodeType===11){return
}for(m=0;
m<n.length;
m++){if(h.options[n[m][0]]){n[m][1].apply(h.element,k)
}}}},hasScroll:function(m,k){if(c(m).css("overflow")==="hidden"){return false
}var h=(k&&k==="left")?"scrollLeft":"scrollTop",l=false;
if(m[h]>0){return true
}m[h]=1;
l=(m[h]>0);
m[h]=0;
return l
}})
})(jQuery);
(function(c,f){var b=0,e=Array.prototype.slice,d=c.cleanData;
c.cleanData=function(g){for(var h=0,k;
(k=g[h])!=null;
h++){try{c(k).triggerHandler("remove")
}catch(l){}}d(g)
};
c.widget=function(g,h,q){var n,o,l,p,k={},m=g.split(".")[0];
g=g.split(".")[1];
n=m+"-"+g;
if(!q){q=h;
h=c.Widget
}c.expr[":"][n.toLowerCase()]=function(r){return !!c.data(r,n)
};
c[m]=c[m]||{};
o=c[m][g];
l=c[m][g]=function(r,t){if(!this._createWidget){return new l(r,t)
}if(arguments.length){this._createWidget(r,t)
}};
c.extend(l,o,{version:q.version,_proto:c.extend({},q),_childConstructors:[]});
p=new h();
p.options=c.widget.extend({},p.options);
c.each(q,function(t,r){if(!c.isFunction(r)){k[t]=r;
return
}k[t]=(function(){var u=function(){return h.prototype[t].apply(this,arguments)
},v=function(w){return h.prototype[t].apply(this,w)
};
return function(){var y=this._super,w=this._superApply,x;
this._super=u;
this._superApply=v;
x=r.apply(this,arguments);
this._super=y;
this._superApply=w;
return x
}
})()
});
l.prototype=c.widget.extend(p,{widgetEventPrefix:o?p.widgetEventPrefix:g},k,{constructor:l,namespace:m,widgetName:g,widgetFullName:n});
if(o){c.each(o._childConstructors,function(t,u){var r=u.prototype;
c.widget(r.namespace+"."+r.widgetName,l,u._proto)
});
delete o._childConstructors
}else{h._childConstructors.push(l)
}c.widget.bridge(g,l)
};
c.widget.extend=function(n){var h=e.call(arguments,1),m=0,g=h.length,k,l;
for(;
m<g;
m++){for(k in h[m]){l=h[m][k];
if(h[m].hasOwnProperty(k)&&l!==f){if(c.isPlainObject(l)){n[k]=c.isPlainObject(n[k])?c.widget.extend({},n[k],l):c.widget.extend({},l)
}else{n[k]=l
}}}}return n
};
c.widget.bridge=function(h,g){var k=g.prototype.widgetFullName||h;
c.fn[h]=function(n){var l=typeof n==="string",m=e.call(arguments,1),o=this;
n=!l&&m.length?c.widget.extend.apply(null,[n].concat(m)):n;
if(l){this.each(function(){var q,p=c.data(this,k);
if(!p){return c.error("cannot call methods on "+h+" prior to initialization; attempted to call method '"+n+"'")
}if(!c.isFunction(p[n])||n.charAt(0)==="_"){return c.error("no such method '"+n+"' for "+h+" widget instance")
}q=p[n].apply(p,m);
if(q!==p&&q!==f){o=q&&q.jquery?o.pushStack(q.get()):q;
return false
}})
}else{this.each(function(){var p=c.data(this,k);
if(p){p.option(n||{})._init()
}else{c.data(this,k,new g(n,this))
}})
}return o
}
};
c.Widget=function(){};
c.Widget._childConstructors=[];
c.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(g,h){h=c(h||this.defaultElement||this)[0];
this.element=c(h);
this.uuid=b++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=c.widget.extend({},this.options,this._getCreateOptions(),g);
this.bindings=c();
this.hoverable=c();
this.focusable=c();
if(h!==this){c.data(h,this.widgetFullName,this);
this._on(true,this.element,{remove:function(k){if(k.target===h){this.destroy()
}}});
this.document=c(h.style?h.ownerDocument:h.document||h);
this.window=c(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:c.noop,_getCreateEventData:c.noop,_create:c.noop,_init:c.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:c.noop,widget:function(){return this.element
},option:function(l,m){var g=l,n,k,h;
if(arguments.length===0){return c.widget.extend({},this.options)
}if(typeof l==="string"){g={};
n=l.split(".");
l=n.shift();
if(n.length){k=g[l]=c.widget.extend({},this.options[l]);
for(h=0;
h<n.length-1;
h++){k[n[h]]=k[n[h]]||{};
k=k[n[h]]
}l=n.pop();
if(m===f){return k[l]===f?null:k[l]
}k[l]=m
}else{if(m===f){return this.options[l]===f?null:this.options[l]
}g[l]=m
}}this._setOptions(g);
return this
},_setOptions:function(g){var h;
for(h in g){this._setOption(h,g[h])
}return this
},_setOption:function(g,h){this.options[g]=h;
if(g==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!h).attr("aria-disabled",h);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(l,k,h){var m,g=this;
if(typeof l!=="boolean"){h=k;
k=l;
l=false
}if(!h){h=k;
k=this.element;
m=this.widget()
}else{k=m=c(k);
this.bindings=this.bindings.add(k)
}c.each(h,function(t,r){function p(){if(!l&&(g.options.disabled===true||c(this).hasClass("ui-state-disabled"))){return
}return(typeof r==="string"?g[r]:r).apply(g,arguments)
}if(typeof r!=="string"){p.guid=r.guid=r.guid||p.guid||c.guid++
}var q=t.match(/^(\w+)\s*(.*)$/),o=q[1]+g.eventNamespace,n=q[2];
if(n){m.delegate(n,o,p)
}else{k.bind(o,p)
}})
},_off:function(h,g){g=(g||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
h.unbind(g).undelegate(g)
},_delay:function(l,k){function h(){return(typeof l==="string"?g[l]:l).apply(g,arguments)
}var g=this;
return setTimeout(h,k||0)
},_hoverable:function(g){this.hoverable=this.hoverable.add(g);
this._on(g,{mouseenter:function(h){c(h.currentTarget).addClass("ui-state-hover")
},mouseleave:function(h){c(h.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(g){this.focusable=this.focusable.add(g);
this._on(g,{focusin:function(h){c(h.currentTarget).addClass("ui-state-focus")
},focusout:function(h){c(h.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(g,h,k){var n,m,l=this.options[g];
k=k||{};
h=c.Event(h);
h.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();
h.target=this.element[0];
m=h.originalEvent;
if(m){for(n in m){if(!(n in h)){h[n]=m[n]
}}}this.element.trigger(h,k);
return !(c.isFunction(l)&&l.apply(this.element[0],[h].concat(k))===false||h.isDefaultPrevented())
}};
c.each({show:"fadeIn",hide:"fadeOut"},function(h,g){c.Widget.prototype["_"+h]=function(m,l,o){if(typeof l==="string"){l={effect:l}
}var n,k=!l?h:l===true||typeof l==="number"?g:l.effect||g;
l=l||{};
if(typeof l==="number"){l={duration:l}
}n=!c.isEmptyObject(l);
l.complete=o;
if(l.delay){m.delay(l.delay)
}if(n&&c.effects&&c.effects.effect[k]){m[h](l)
}else{if(k!==h&&m[k]){m[k](l.duration,l.easing,o)
}else{m.queue(function(p){c(this)[h]();
if(o){o.call(m[0])
}p()
})
}}}
})
})(jQuery);
(function(c,d){var b=false;
c(document).mouseup(function(){b=false
});
c.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;
this.element.bind("mousedown."+this.widgetName,function(f){return e._mouseDown(f)
}).bind("click."+this.widgetName,function(f){if(true===c.data(f.target,e.widgetName+".preventClickEvent")){c.removeData(f.target,e.widgetName+".preventClickEvent");
f.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(g){if(b){return
}(this._mouseStarted&&this._mouseUp(g));
this._mouseDownEvent=g;
var f=this,h=(g.which===1),e=(typeof this.options.cancel==="string"&&g.target.nodeName?c(g.target).closest(this.options.cancel).length:false);
if(!h||e||!this._mouseCapture(g)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(g)&&this._mouseDelayMet(g)){this._mouseStarted=(this._mouseStart(g)!==false);
if(!this._mouseStarted){g.preventDefault();
return true
}}if(true===c.data(g.target,this.widgetName+".preventClickEvent")){c.removeData(g.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(k){return f._mouseMove(k)
};
this._mouseUpDelegate=function(k){return f._mouseUp(k)
};
c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
g.preventDefault();
b=true;
return true
},_mouseMove:function(e){if(c.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button){return this._mouseUp(e)
}if(this._mouseStarted){this._mouseDrag(e);
return e.preventDefault()
}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,e)!==false);
(this._mouseStarted?this._mouseDrag(e):this._mouseUp(e))
}return !this._mouseStarted
},_mouseUp:function(e){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(e.target===this._mouseDownEvent.target){c.data(e.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(e)
}return false
},_mouseDistanceMet:function(e){return(Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(b,c){b.widget("ui.draggable",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(d){var e=this.options;
if(this.helper||e.disabled||b(d.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(d);
if(!this.handle){return false
}b(e.iframeFix===true?"iframe":e.iframeFix).each(function(){b("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(b(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(d){var e=this.options;
this.helper=this._createHelper(d);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(b.ui.ddmanager){b.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
b.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(d);
this.originalPageX=d.pageX;
this.originalPageY=d.pageY;
(e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt));
this._setContainment();
if(this._trigger("start",d)===false){this._clear();
return false
}this._cacheHelperProportions();
if(b.ui.ddmanager&&!e.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,d)
}this._mouseDrag(d,true);
if(b.ui.ddmanager){b.ui.ddmanager.dragStart(this,d)
}return true
},_mouseDrag:function(d,f){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(d);
this.positionAbs=this._convertPositionTo("absolute");
if(!f){var e=this._uiHash();
if(this._trigger("drag",d,e)===false){this._mouseUp({});
return false
}this.position=e.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(b.ui.ddmanager){b.ui.ddmanager.drag(this,d)
}return false
},_mouseStop:function(e){var d=this,f=false;
if(b.ui.ddmanager&&!this.options.dropBehaviour){f=b.ui.ddmanager.drop(this,e)
}if(this.dropped){f=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!b.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!f)||(this.options.revert==="valid"&&f)||this.options.revert===true||(b.isFunction(this.options.revert)&&this.options.revert.call(this.element,f))){b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(d._trigger("stop",e)!==false){d._clear()
}})
}else{if(this._trigger("stop",e)!==false){this._clear()
}}return false
},_mouseUp:function(d){b("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(b.ui.ddmanager){b.ui.ddmanager.dragStop(this,d)
}return b.ui.mouse.prototype._mouseUp.call(this,d)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(d){return this.options.handle?!!b(d.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(e){var f=this.options,d=b.isFunction(f.helper)?b(f.helper.apply(this.element[0],[e])):(f.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!d.parents("body").length){d.appendTo((f.appendTo==="parent"?this.element[0].parentNode:f.appendTo))
}if(d[0]!==this.element[0]&&!(/(fixed|absolute)/).test(d.css("position"))){d.css("position","absolute")
}return d
},_adjustOffsetFromHelper:function(d){if(typeof d==="string"){d=d.split(" ")
}if(b.isArray(d)){d={left:+d[0],top:+d[1]||0}
}if("left" in d){this.offset.click.left=d.left+this.margins.left
}if("right" in d){this.offset.click.left=this.helperProportions.width-d.right+this.margins.left
}if("top" in d){this.offset.click.top=d.top+this.margins.top
}if("bottom" in d){this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top
}},_getParentOffset:function(){var d=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();
d.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&b.ui.ie)){d={top:0,left:0}
}return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var d=this.element.position();
return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e,g,d,f=this.options;
if(!f.containment){this.containment=null;
return
}if(f.containment==="window"){this.containment=[b(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,b(window).scrollLeft()+b(window).width()-this.helperProportions.width-this.margins.left,b(window).scrollTop()+(b(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(f.containment==="document"){this.containment=[0,0,b(document).width()-this.helperProportions.width-this.margins.left,(b(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(f.containment.constructor===Array){this.containment=f.containment;
return
}if(f.containment==="parent"){f.containment=this.helper[0].parentNode
}g=b(f.containment);
d=g[0];
if(!d){return
}e=g.css("overflow")!=="hidden";
this.containment=[(parseInt(g.css("borderLeftWidth"),10)||0)+(parseInt(g.css("paddingLeft"),10)||0),(parseInt(g.css("borderTopWidth"),10)||0)+(parseInt(g.css("paddingTop"),10)||0),(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(g.css("borderRightWidth"),10)||0)-(parseInt(g.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(g.css("borderBottomWidth"),10)||0)-(parseInt(g.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=g
},_convertPositionTo:function(g,h){if(!h){h=this.position
}var f=g==="absolute"?1:-1,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}
}return{top:(h.top+this.offset.relative.top*f+this.offset.parent.top*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*f)),left:(h.left+this.offset.relative.left*f+this.offset.parent.left*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*f))}
},_generatePosition:function(e){var d,l,m,g,f=this.options,n=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=e.pageX,h=e.pageY;
if(!this.offset.scroll){this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){l=this.relative_container.offset();
d=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]
}else{d=this.containment
}if(e.pageX-this.offset.click.left<d[0]){k=d[0]+this.offset.click.left
}if(e.pageY-this.offset.click.top<d[1]){h=d[1]+this.offset.click.top
}if(e.pageX-this.offset.click.left>d[2]){k=d[2]+this.offset.click.left
}if(e.pageY-this.offset.click.top>d[3]){h=d[3]+this.offset.click.top
}}if(f.grid){m=f.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/f.grid[1])*f.grid[1]:this.originalPageY;
h=d?((m-this.offset.click.top>=d[1]||m-this.offset.click.top>d[3])?m:((m-this.offset.click.top>=d[1])?m-f.grid[1]:m+f.grid[1])):m;
g=f.grid[0]?this.originalPageX+Math.round((k-this.originalPageX)/f.grid[0])*f.grid[0]:this.originalPageX;
k=d?((g-this.offset.click.left>=d[0]||g-this.offset.click.left>d[2])?g:((g-this.offset.click.left>=d[0])?g-f.grid[0]:g+f.grid[0])):g
}}return{top:(h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(k-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(d,e,f){f=f||this._uiHash();
b.ui.plugin.call(this,d,[e,f]);
if(d==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return b.Widget.prototype._trigger.call(this,d,e,f)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
b.ui.plugin.add("draggable","connectToSortable",{start:function(e,g){var f=b(this).data("ui-draggable"),h=f.options,d=b.extend({},g,{item:f.element});
f.sortables=[];
b(h.connectToSortable).each(function(){var k=b.data(this,"ui-sortable");
if(k&&!k.options.disabled){f.sortables.push({instance:k,shouldRevert:k.options.revert});
k.refreshPositions();
k._trigger("activate",e,d)
}})
},stop:function(e,g){var f=b(this).data("ui-draggable"),d=b.extend({},g,{item:f.element});
b.each(f.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
f.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(e);
this.instance.options.helper=this.instance.options._helper;
if(f.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",e,d)
}})
},drag:function(e,g){var f=b(this).data("ui-draggable"),d=this;
b.each(f.sortables,function(){var h=false,k=this;
this.instance.positionAbs=f.positionAbs;
this.instance.helperProportions=f.helperProportions;
this.instance.offset.click=f.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){h=true;
b.each(f.sortables,function(){this.instance.positionAbs=f.positionAbs;
this.instance.helperProportions=f.helperProportions;
this.instance.offset.click=f.offset.click;
if(this!==k&&this.instance._intersectsWith(this.instance.containerCache)&&b.contains(k.instance.element[0],this.instance.element[0])){h=false
}return h
})
}if(h){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=b(d).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return g.helper[0]
};
e.target=this.instance.currentItem[0];
this.instance._mouseCapture(e,true);
this.instance._mouseStart(e,true,true);
this.instance.offset.click.top=f.offset.click.top;
this.instance.offset.click.left=f.offset.click.left;
this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;
f._trigger("toSortable",e);
f.dropped=this.instance.element;
f.currentItem=f.element;
this.instance.fromOutside=f
}if(this.instance.currentItem){this.instance._mouseDrag(e)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",e,this.instance._uiHash(this.instance));
this.instance._mouseStop(e,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}f._trigger("fromSortable",e);
f.dropped=false
}}})
}});
b.ui.plugin.add("draggable","cursor",{start:function(){var d=b("body"),e=b(this).data("ui-draggable").options;
if(d.css("cursor")){e._cursor=d.css("cursor")
}d.css("cursor",e.cursor)
},stop:function(){var d=b(this).data("ui-draggable").options;
if(d._cursor){b("body").css("cursor",d._cursor)
}}});
b.ui.plugin.add("draggable","opacity",{start:function(e,f){var d=b(f.helper),g=b(this).data("ui-draggable").options;
if(d.css("opacity")){g._opacity=d.css("opacity")
}d.css("opacity",g.opacity)
},stop:function(d,e){var f=b(this).data("ui-draggable").options;
if(f._opacity){b(e.helper).css("opacity",f._opacity)
}}});
b.ui.plugin.add("draggable","scroll",{start:function(){var d=b(this).data("ui-draggable");
if(d.scrollParent[0]!==document&&d.scrollParent[0].tagName!=="HTML"){d.overflowOffset=d.scrollParent.offset()
}},drag:function(f){var e=b(this).data("ui-draggable"),g=e.options,d=false;
if(e.scrollParent[0]!==document&&e.scrollParent[0].tagName!=="HTML"){if(!g.axis||g.axis!=="x"){if((e.overflowOffset.top+e.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){e.scrollParent[0].scrollTop=d=e.scrollParent[0].scrollTop+g.scrollSpeed
}else{if(f.pageY-e.overflowOffset.top<g.scrollSensitivity){e.scrollParent[0].scrollTop=d=e.scrollParent[0].scrollTop-g.scrollSpeed
}}}if(!g.axis||g.axis!=="y"){if((e.overflowOffset.left+e.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){e.scrollParent[0].scrollLeft=d=e.scrollParent[0].scrollLeft+g.scrollSpeed
}else{if(f.pageX-e.overflowOffset.left<g.scrollSensitivity){e.scrollParent[0].scrollLeft=d=e.scrollParent[0].scrollLeft-g.scrollSpeed
}}}}else{if(!g.axis||g.axis!=="x"){if(f.pageY-b(document).scrollTop()<g.scrollSensitivity){d=b(document).scrollTop(b(document).scrollTop()-g.scrollSpeed)
}else{if(b(window).height()-(f.pageY-b(document).scrollTop())<g.scrollSensitivity){d=b(document).scrollTop(b(document).scrollTop()+g.scrollSpeed)
}}}if(!g.axis||g.axis!=="y"){if(f.pageX-b(document).scrollLeft()<g.scrollSensitivity){d=b(document).scrollLeft(b(document).scrollLeft()-g.scrollSpeed)
}else{if(b(window).width()-(f.pageX-b(document).scrollLeft())<g.scrollSensitivity){d=b(document).scrollLeft(b(document).scrollLeft()+g.scrollSpeed)
}}}}if(d!==false&&b.ui.ddmanager&&!g.dropBehaviour){b.ui.ddmanager.prepareOffsets(e,f)
}}});
b.ui.plugin.add("draggable","snap",{start:function(){var d=b(this).data("ui-draggable"),e=d.options;
d.snapElements=[];
b(e.snap.constructor!==String?(e.snap.items||":data(ui-draggable)"):e.snap).each(function(){var g=b(this),f=g.offset();
if(this!==d.element[0]){d.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})
}})
},drag:function(x,u){var e,C,m,n,w,q,p,D,y,k,h=b(this).data("ui-draggable"),v=h.options,B=v.snapTolerance,A=u.offset.left,z=A+h.helperProportions.width,g=u.offset.top,f=g+h.helperProportions.height;
for(y=h.snapElements.length-1;
y>=0;
y--){w=h.snapElements[y].left;
q=w+h.snapElements[y].width;
p=h.snapElements[y].top;
D=p+h.snapElements[y].height;
if(z<w-B||A>q+B||f<p-B||g>D+B||!b.contains(h.snapElements[y].item.ownerDocument,h.snapElements[y].item)){if(h.snapElements[y].snapping){(h.options.snap.release&&h.options.snap.release.call(h.element,x,b.extend(h._uiHash(),{snapItem:h.snapElements[y].item})))
}h.snapElements[y].snapping=false;
continue
}if(v.snapMode!=="inner"){e=Math.abs(p-f)<=B;
C=Math.abs(D-g)<=B;
m=Math.abs(w-z)<=B;
n=Math.abs(q-A)<=B;
if(e){u.position.top=h._convertPositionTo("relative",{top:p-h.helperProportions.height,left:0}).top-h.margins.top
}if(C){u.position.top=h._convertPositionTo("relative",{top:D,left:0}).top-h.margins.top
}if(m){u.position.left=h._convertPositionTo("relative",{top:0,left:w-h.helperProportions.width}).left-h.margins.left
}if(n){u.position.left=h._convertPositionTo("relative",{top:0,left:q}).left-h.margins.left
}}k=(e||C||m||n);
if(v.snapMode!=="outer"){e=Math.abs(p-g)<=B;
C=Math.abs(D-f)<=B;
m=Math.abs(w-A)<=B;
n=Math.abs(q-z)<=B;
if(e){u.position.top=h._convertPositionTo("relative",{top:p,left:0}).top-h.margins.top
}if(C){u.position.top=h._convertPositionTo("relative",{top:D-h.helperProportions.height,left:0}).top-h.margins.top
}if(m){u.position.left=h._convertPositionTo("relative",{top:0,left:w}).left-h.margins.left
}if(n){u.position.left=h._convertPositionTo("relative",{top:0,left:q-h.helperProportions.width}).left-h.margins.left
}}if(!h.snapElements[y].snapping&&(e||C||m||n||k)){(h.options.snap.snap&&h.options.snap.snap.call(h.element,x,b.extend(h._uiHash(),{snapItem:h.snapElements[y].item})))
}h.snapElements[y].snapping=(e||C||m||n||k)
}}});
b.ui.plugin.add("draggable","stack",{start:function(){var d,f=this.data("ui-draggable").options,e=b.makeArray(b(f.stack)).sort(function(h,g){return(parseInt(b(h).css("zIndex"),10)||0)-(parseInt(b(g).css("zIndex"),10)||0)
});
if(!e.length){return
}d=parseInt(b(e[0]).css("zIndex"),10)||0;
b(e).each(function(g){b(this).css("zIndex",d+g)
});
this.css("zIndex",(d+e.length))
}});
b.ui.plugin.add("draggable","zIndex",{start:function(e,f){var d=b(f.helper),g=b(this).data("ui-draggable").options;
if(d.css("zIndex")){g._zIndex=d.css("zIndex")
}d.css("zIndex",g.zIndex)
},stop:function(d,e){var f=b(this).data("ui-draggable").options;
if(f._zIndex){b(e.helper).css("zIndex",f._zIndex)
}}})
})(jQuery);
(function(c,d){function b(f,e,g){return(f>e)&&(f<(e+g))
}c.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var f=this.options,e=f.accept;
this.isover=false;
this.isout=true;
this.accept=c.isFunction(e)?e:function(g){return g.is(e)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
c.ui.ddmanager.droppables[f.scope]=c.ui.ddmanager.droppables[f.scope]||[];
c.ui.ddmanager.droppables[f.scope].push(this);
(f.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var f=0,e=c.ui.ddmanager.droppables[this.options.scope];
for(;
f<e.length;
f++){if(e[f]===this){e.splice(f,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(e,f){if(e==="accept"){this.accept=c.isFunction(f)?f:function(g){return g.is(f)
}
}c.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(f){var e=c.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(e){this._trigger("activate",f,this.ui(e))
}},_deactivate:function(f){var e=c.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(e){this._trigger("deactivate",f,this.ui(e))
}},_over:function(f){var e=c.ui.ddmanager.current;
if(!e||(e.currentItem||e.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(e.currentItem||e.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",f,this.ui(e))
}},_out:function(f){var e=c.ui.ddmanager.current;
if(!e||(e.currentItem||e.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(e.currentItem||e.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",f,this.ui(e))
}},_drop:function(f,g){var e=g||c.ui.ddmanager.current,h=false;
if(!e||(e.currentItem||e.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var k=c.data(this,"ui-droppable");
if(k.options.greedy&&!k.options.disabled&&k.options.scope===e.options.scope&&k.accept.call(k.element[0],(e.currentItem||e.element))&&c.ui.intersect(e,c.extend(k,{offset:k.element.offset()}),k.options.tolerance)){h=true;
return false
}});
if(h){return false
}if(this.accept.call(this.element[0],(e.currentItem||e.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",f,this.ui(e));
return this.element
}return false
},ui:function(e){return{draggable:(e.currentItem||e.element),helper:e.helper,position:e.position,offset:e.positionAbs}
}});
c.ui.intersect=function(w,n,u){if(!n.offset){return false
}var k,m,g=(w.positionAbs||w.position.absolute).left,f=g+w.helperProportions.width,q=(w.positionAbs||w.position.absolute).top,p=q+w.helperProportions.height,h=n.offset.left,e=h+n.proportions.width,v=n.offset.top,o=v+n.proportions.height;
switch(u){case"fit":return(h<=g&&f<=e&&v<=q&&p<=o);
case"intersect":return(h<g+(w.helperProportions.width/2)&&f-(w.helperProportions.width/2)<e&&v<q+(w.helperProportions.height/2)&&p-(w.helperProportions.height/2)<o);
case"pointer":k=((w.positionAbs||w.position.absolute).left+(w.clickOffset||w.offset.click).left);
m=((w.positionAbs||w.position.absolute).top+(w.clickOffset||w.offset.click).top);
return b(m,v,n.proportions.height)&&b(k,h,n.proportions.width);
case"touch":return((q>=v&&q<=o)||(p>=v&&p<=o)||(q<v&&p>o))&&((g>=h&&g<=e)||(f>=h&&f<=e)||(g<h&&f>e));
default:return false
}};
c.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,l){var g,f,e=c.ui.ddmanager.droppables[h.options.scope]||[],k=l?l.type:null,n=(h.currentItem||h.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(g=0;
g<e.length;
g++){if(e[g].options.disabled||(h&&!e[g].accept.call(e[g].element[0],(h.currentItem||h.element)))){continue
}for(f=0;
f<n.length;
f++){if(n[f]===e[g].element[0]){e[g].proportions.height=0;
continue droppablesLoop
}}e[g].visible=e[g].element.css("display")!=="none";
if(!e[g].visible){continue
}if(k==="mousedown"){e[g]._activate.call(e[g],l)
}e[g].offset=e[g].element.offset();
e[g].proportions={width:e[g].element[0].offsetWidth,height:e[g].element[0].offsetHeight}
}},drop:function(e,f){var g=false;
c.each((c.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&c.ui.intersect(e,this,this.options.tolerance)){g=this._drop.call(this,f)||g
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(e.currentItem||e.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,f)
}});
return g
},dragStart:function(e,f){e.element.parentsUntil("body").bind("scroll.droppable",function(){if(!e.options.refreshPositions){c.ui.ddmanager.prepareOffsets(e,f)
}})
},drag:function(e,f){if(e.options.refreshPositions){c.ui.ddmanager.prepareOffsets(e,f)
}c.each(c.ui.ddmanager.droppables[e.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var l,h,g,k=c.ui.intersect(e,this,this.options.tolerance),m=!k&&this.isover?"isout":(k&&!this.isover?"isover":null);
if(!m){return
}if(this.options.greedy){h=this.options.scope;
g=this.element.parents(":data(ui-droppable)").filter(function(){return c.data(this,"ui-droppable").options.scope===h
});
if(g.length){l=c.data(g[0],"ui-droppable");
l.greedyChild=(m==="isover")
}}if(l&&m==="isover"){l.isover=false;
l.isout=true;
l._out.call(l,f)
}this[m]=true;
this[m==="isout"?"isover":"isout"]=false;
this[m==="isover"?"_over":"_out"].call(this,f);
if(l&&m==="isout"){l.isout=false;
l.isover=true;
l._over.call(l,f)
}})
},dragStop:function(e,f){e.element.parentsUntil("body").unbind("scroll.droppable");
if(!e.options.refreshPositions){c.ui.ddmanager.prepareOffsets(e,f)
}}}
})(jQuery);
(function(d,e){function c(f){return parseInt(f,10)||0
}function b(f){return !isNaN(parseInt(f,10))
}d.widget("ui.resizable",d.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var p,g,l,h,f,k=this,m=this.options;
this.element.addClass("ui-resizable");
d.extend(this,{_aspectRatio:!!(m.aspectRatio),aspectRatio:m.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:m.helper||m.ghost||m.animate?m.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(d("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=m.handles||(!d(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}p=this.handles.split(",");
this.handles={};
for(g=0;
g<p.length;
g++){l=d.trim(p[g]);
f="ui-resizable-"+l;
h=d("<div class='ui-resizable-handle "+f+"'></div>");
h.css({zIndex:m.zIndex});
if("se"===l){h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[l]=".ui-resizable-"+l;
this.element.append(h)
}}this._renderAxis=function(t){var o,q,n,r;
t=t||this.element;
for(o in this.handles){if(this.handles[o].constructor===String){this.handles[o]=d(this.handles[o],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){q=d(this.handles[o],this.element);
r=/sw|ne|nw|se|n|s/.test(o)?q.outerHeight():q.outerWidth();
n=["padding",/ne|nw|n/.test(o)?"Top":/se|sw|s/.test(o)?"Bottom":/^e$/.test(o)?"Right":"Left"].join("");
t.css(n,r);
this._proportionallyResize()
}if(!d(this.handles[o]).length){continue
}}};
this._renderAxis(this.element);
this._handles=d(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!k.resizing){if(this.className){h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}k.axis=h&&h[1]?h[1]:"se"
}});
if(m.autoHide){this._handles.hide();
d(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(m.disabled){return
}d(this).removeClass("ui-resizable-autohide");
k._handles.show()
}).mouseleave(function(){if(m.disabled){return
}if(!k.resizing){d(this).addClass("ui-resizable-autohide");
k._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var g,f=function(h){d(h).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){f(this.element);
g=this.element;
this.originalElement.css({position:g.css("position"),width:g.outerWidth(),height:g.outerHeight(),top:g.css("top"),left:g.css("left")}).insertAfter(g);
g.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
f(this.originalElement);
return this
},_mouseCapture:function(h){var g,k,f=false;
for(g in this.handles){k=d(this.handles[g])[0];
if(k===h.target||d.contains(k,h.target)){f=true
}}return !this.options.disabled&&f
},_mouseStart:function(h){var n,k,m,l=this.options,g=this.element.position(),f=this.element;
this.resizing=true;
if((/absolute/).test(f.css("position"))){f.css({position:"absolute",top:f.css("top"),left:f.css("left")})
}else{if(f.is(".ui-draggable")){f.css({position:"absolute",top:g.top,left:g.left})
}}this._renderProxy();
n=c(this.helper.css("left"));
k=c(this.helper.css("top"));
if(l.containment){n+=d(l.containment).scrollLeft()||0;
k+=d(l.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:n,top:k};
this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()};
this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()};
this.originalPosition={left:n,top:k};
this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()};
this.originalMousePosition={left:h.pageX,top:h.pageY};
this.aspectRatio=(typeof l.aspectRatio==="number")?l.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
m=d(".ui-resizable-"+this.axis).css("cursor");
d("body").css("cursor",m==="auto"?this.axis+"-resize":m);
f.addClass("ui-resizable-resizing");
this._propagate("start",h);
return true
},_mouseDrag:function(f){var n,h=this.helper,o={},l=this.originalMousePosition,p=this.axis,r=this.position.top,g=this.position.left,q=this.size.width,m=this.size.height,u=(f.pageX-l.left)||0,t=(f.pageY-l.top)||0,k=this._change[p];
if(!k){return false
}n=k.apply(this,[f,u,t]);
this._updateVirtualBoundaries(f.shiftKey);
if(this._aspectRatio||f.shiftKey){n=this._updateRatio(n,f)
}n=this._respectSize(n,f);
this._updateCache(n);
this._propagate("resize",f);
if(this.position.top!==r){o.top=this.position.top+"px"
}if(this.position.left!==g){o.left=this.position.left+"px"
}if(this.size.width!==q){o.width=this.size.width+"px"
}if(this.size.height!==m){o.height=this.size.height+"px"
}h.css(o);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!d.isEmptyObject(o)){this._trigger("resize",f,this.ui())
}return false
},_mouseStop:function(k){this.resizing=false;
var h,f,g,n,r,m,q,l=this.options,p=this;
if(this._helper){h=this._proportionallyResizeElements;
f=h.length&&(/textarea/i).test(h[0].nodeName);
g=f&&d.ui.hasScroll(h[0],"left")?0:p.sizeDiff.height;
n=f?0:p.sizeDiff.width;
r={width:(p.helper.width()-n),height:(p.helper.height()-g)};
m=(parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left))||null;
q=(parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top))||null;
if(!l.animate){this.element.css(d.extend(r,{top:q,left:m}))
}p.helper.height(p.size.height);
p.helper.width(p.size.width);
if(this._helper&&!l.animate){this._proportionallyResize()
}}d("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",k);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(h){var l,k,g,n,f,m=this.options;
f={minWidth:b(m.minWidth)?m.minWidth:0,maxWidth:b(m.maxWidth)?m.maxWidth:Infinity,minHeight:b(m.minHeight)?m.minHeight:0,maxHeight:b(m.maxHeight)?m.maxHeight:Infinity};
if(this._aspectRatio||h){l=f.minHeight*this.aspectRatio;
g=f.minWidth/this.aspectRatio;
k=f.maxHeight*this.aspectRatio;
n=f.maxWidth/this.aspectRatio;
if(l>f.minWidth){f.minWidth=l
}if(g>f.minHeight){f.minHeight=g
}if(k<f.maxWidth){f.maxWidth=k
}if(n<f.maxHeight){f.maxHeight=n
}}this._vBoundaries=f
},_updateCache:function(f){this.offset=this.helper.offset();
if(b(f.left)){this.position.left=f.left
}if(b(f.top)){this.position.top=f.top
}if(b(f.height)){this.size.height=f.height
}if(b(f.width)){this.size.width=f.width
}},_updateRatio:function(h){var k=this.position,g=this.size,f=this.axis;
if(b(h.height)){h.width=(h.height*this.aspectRatio)
}else{if(b(h.width)){h.height=(h.width/this.aspectRatio)
}}if(f==="sw"){h.left=k.left+(g.width-h.width);
h.top=null
}if(f==="nw"){h.top=k.top+(g.height-h.height);
h.left=k.left+(g.width-h.width)
}return h
},_respectSize:function(m){var h=this._vBoundaries,q=this.axis,t=b(m.width)&&h.maxWidth&&(h.maxWidth<m.width),n=b(m.height)&&h.maxHeight&&(h.maxHeight<m.height),k=b(m.width)&&h.minWidth&&(h.minWidth>m.width),r=b(m.height)&&h.minHeight&&(h.minHeight>m.height),g=this.originalPosition.left+this.originalSize.width,p=this.position.top+this.size.height,l=/sw|nw|w/.test(q),f=/nw|ne|n/.test(q);
if(k){m.width=h.minWidth
}if(r){m.height=h.minHeight
}if(t){m.width=h.maxWidth
}if(n){m.height=h.maxHeight
}if(k&&l){m.left=g-h.minWidth
}if(t&&l){m.left=g-h.maxWidth
}if(r&&f){m.top=p-h.minHeight
}if(n&&f){m.top=p-h.maxHeight
}if(!m.width&&!m.height&&!m.left&&m.top){m.top=null
}else{if(!m.width&&!m.height&&!m.top&&m.left){m.left=null
}}return m
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var k,g,m,f,l,h=this.helper||this.element;
for(k=0;
k<this._proportionallyResizeElements.length;
k++){l=this._proportionallyResizeElements[k];
if(!this.borderDif){this.borderDif=[];
m=[l.css("borderTopWidth"),l.css("borderRightWidth"),l.css("borderBottomWidth"),l.css("borderLeftWidth")];
f=[l.css("paddingTop"),l.css("paddingRight"),l.css("paddingBottom"),l.css("paddingLeft")];
for(g=0;
g<m.length;
g++){this.borderDif[g]=(parseInt(m[g],10)||0)+(parseInt(f[g],10)||0)
}}l.css({height:(h.height()-this.borderDif[0]-this.borderDif[2])||0,width:(h.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var f=this.element,g=this.options;
this.elementOffset=f.offset();
if(this._helper){this.helper=this.helper||d("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++g.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(g,f){return{width:this.originalSize.width+f}
},w:function(h,f){var g=this.originalSize,k=this.originalPosition;
return{left:k.left+f,width:g.width-f}
},n:function(k,g,f){var h=this.originalSize,l=this.originalPosition;
return{top:l.top+f,height:h.height-f}
},s:function(h,g,f){return{height:this.originalSize.height+f}
},se:function(h,g,f){return d.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[h,g,f]))
},sw:function(h,g,f){return d.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[h,g,f]))
},ne:function(h,g,f){return d.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[h,g,f]))
},nw:function(h,g,f){return d.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[h,g,f]))
}},_propagate:function(g,f){d.ui.plugin.call(this,g,[f,this.ui()]);
(g!=="resize"&&this._trigger(g,f,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
d.ui.plugin.add("resizable","animate",{stop:function(k){var q=d(this).data("ui-resizable"),m=q.options,h=q._proportionallyResizeElements,f=h.length&&(/textarea/i).test(h[0].nodeName),g=f&&d.ui.hasScroll(h[0],"left")?0:q.sizeDiff.height,p=f?0:q.sizeDiff.width,l={width:(q.size.width-p),height:(q.size.height-g)},n=(parseInt(q.element.css("left"),10)+(q.position.left-q.originalPosition.left))||null,r=(parseInt(q.element.css("top"),10)+(q.position.top-q.originalPosition.top))||null;
q.element.animate(d.extend(l,r&&n?{top:r,left:n}:{}),{duration:m.animateDuration,easing:m.animateEasing,step:function(){var o={width:parseInt(q.element.css("width"),10),height:parseInt(q.element.css("height"),10),top:parseInt(q.element.css("top"),10),left:parseInt(q.element.css("left"),10)};
if(h&&h.length){d(h[0]).css({width:o.width,height:o.height})
}q._updateCache(o);
q._propagate("resize",k)
}})
}});
d.ui.plugin.add("resizable","containment",{start:function(){var r,h,u,f,q,k,v,t=d(this).data("ui-resizable"),n=t.options,m=t.element,g=n.containment,l=(g instanceof d)?g.get(0):(/parent/.test(g))?m.parent().get(0):g;
if(!l){return
}t.containerElement=d(l);
if(/document/.test(g)||g===document){t.containerOffset={left:0,top:0};
t.containerPosition={left:0,top:0};
t.parentData={element:d(document),left:0,top:0,width:d(document).width(),height:d(document).height()||document.body.parentNode.scrollHeight}
}else{r=d(l);
h=[];
d(["Top","Right","Left","Bottom"]).each(function(p,o){h[p]=c(r.css("padding"+o))
});
t.containerOffset=r.offset();
t.containerPosition=r.position();
t.containerSize={height:(r.innerHeight()-h[3]),width:(r.innerWidth()-h[1])};
u=t.containerOffset;
f=t.containerSize.height;
q=t.containerSize.width;
k=(d.ui.hasScroll(l,"left")?l.scrollWidth:q);
v=(d.ui.hasScroll(l)?l.scrollHeight:f);
t.parentData={element:l,left:u.left,top:u.top,width:k,height:v}
}},resize:function(g){var n,u,m,l,p=d(this).data("ui-resizable"),k=p.options,r=p.containerOffset,q=p.position,t=p._aspectRatio||g.shiftKey,f={top:0,left:0},h=p.containerElement;
if(h[0]!==document&&(/static/).test(h.css("position"))){f=r
}if(q.left<(p._helper?r.left:0)){p.size.width=p.size.width+(p._helper?(p.position.left-r.left):(p.position.left-f.left));
if(t){p.size.height=p.size.width/p.aspectRatio
}p.position.left=k.helper?r.left:0
}if(q.top<(p._helper?r.top:0)){p.size.height=p.size.height+(p._helper?(p.position.top-r.top):p.position.top);
if(t){p.size.width=p.size.height*p.aspectRatio
}p.position.top=p._helper?r.top:0
}p.offset.left=p.parentData.left+p.position.left;
p.offset.top=p.parentData.top+p.position.top;
n=Math.abs((p._helper?p.offset.left-f.left:(p.offset.left-f.left))+p.sizeDiff.width);
u=Math.abs((p._helper?p.offset.top-f.top:(p.offset.top-r.top))+p.sizeDiff.height);
m=p.containerElement.get(0)===p.element.parent().get(0);
l=/relative|absolute/.test(p.containerElement.css("position"));
if(m&&l){n-=p.parentData.left
}if(n+p.size.width>=p.parentData.width){p.size.width=p.parentData.width-n;
if(t){p.size.height=p.size.width/p.aspectRatio
}}if(u+p.size.height>=p.parentData.height){p.size.height=p.parentData.height-u;
if(t){p.size.width=p.size.height*p.aspectRatio
}}},stop:function(){var n=d(this).data("ui-resizable"),g=n.options,p=n.containerOffset,f=n.containerPosition,k=n.containerElement,l=d(n.helper),r=l.offset(),q=l.outerWidth()-n.sizeDiff.width,m=l.outerHeight()-n.sizeDiff.height;
if(n._helper&&!g.animate&&(/relative/).test(k.css("position"))){d(this).css({left:r.left-f.left-p.left,width:q,height:m})
}if(n._helper&&!g.animate&&(/static/).test(k.css("position"))){d(this).css({left:r.left-f.left-p.left,width:q,height:m})
}}});
d.ui.plugin.add("resizable","alsoResize",{start:function(){var f=d(this).data("ui-resizable"),h=f.options,g=function(k){d(k).each(function(){var l=d(this);
l.data("ui-resizable-alsoresize",{width:parseInt(l.width(),10),height:parseInt(l.height(),10),left:parseInt(l.css("left"),10),top:parseInt(l.css("top"),10)})
})
};
if(typeof(h.alsoResize)==="object"&&!h.alsoResize.parentNode){if(h.alsoResize.length){h.alsoResize=h.alsoResize[0];
g(h.alsoResize)
}else{d.each(h.alsoResize,function(k){g(k)
})
}}else{g(h.alsoResize)
}},resize:function(h,l){var g=d(this).data("ui-resizable"),m=g.options,k=g.originalSize,p=g.originalPosition,n={height:(g.size.height-k.height)||0,width:(g.size.width-k.width)||0,top:(g.position.top-p.top)||0,left:(g.position.left-p.left)||0},f=function(o,q){d(o).each(function(){var u=d(this),v=d(this).data("ui-resizable-alsoresize"),t={},r=q&&q.length?q:u.parents(l.originalElement[0]).length?["width","height"]:["width","height","top","left"];
d.each(r,function(w,y){var x=(v[y]||0)+(n[y]||0);
if(x&&x>=0){t[y]=x||null
}});
u.css(t)
})
};
if(typeof(m.alsoResize)==="object"&&!m.alsoResize.nodeType){d.each(m.alsoResize,function(o,q){f(o,q)
})
}else{f(m.alsoResize)
}},stop:function(){d(this).removeData("resizable-alsoresize")
}});
d.ui.plugin.add("resizable","ghost",{start:function(){var g=d(this).data("ui-resizable"),h=g.options,f=g.size;
g.ghost=g.originalElement.clone();
g.ghost.css({opacity:0.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost==="string"?h.ghost:"");
g.ghost.appendTo(g.helper)
},resize:function(){var f=d(this).data("ui-resizable");
if(f.ghost){f.ghost.css({position:"relative",height:f.size.height,width:f.size.width})
}},stop:function(){var f=d(this).data("ui-resizable");
if(f.ghost&&f.helper){f.helper.get(0).removeChild(f.ghost.get(0))
}}});
d.ui.plugin.add("resizable","grid",{resize:function(){var v=d(this).data("ui-resizable"),l=v.options,w=v.size,n=v.originalSize,r=v.originalPosition,x=v.axis,g=typeof l.grid==="number"?[l.grid,l.grid]:l.grid,t=(g[0]||1),q=(g[1]||1),k=Math.round((w.width-n.width)/t)*t,h=Math.round((w.height-n.height)/q)*q,p=n.width+k,f=n.height+h,m=l.maxWidth&&(l.maxWidth<p),y=l.maxHeight&&(l.maxHeight<f),u=l.minWidth&&(l.minWidth>p),z=l.minHeight&&(l.minHeight>f);
l.grid=g;
if(u){p=p+t
}if(z){f=f+q
}if(m){p=p-t
}if(y){f=f-q
}if(/^(se|s|e)$/.test(x)){v.size.width=p;
v.size.height=f
}else{if(/^(ne)$/.test(x)){v.size.width=p;
v.size.height=f;
v.position.top=r.top-h
}else{if(/^(sw)$/.test(x)){v.size.width=p;
v.size.height=f;
v.position.left=r.left-k
}else{v.size.width=p;
v.size.height=f;
v.position.top=r.top-h;
v.position.left=r.left-k
}}}}})
})(jQuery);
(function(b,c){b.widget("ui.selectable",b.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,d=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){e=b(d.options.filter,d.element[0]);
e.addClass("ui-selectee");
e.each(function(){var f=b(this),g=f.offset();
b.data(this,"selectable-item",{element:this,$element:f,left:g.left,top:g.top,right:g.left+f.outerWidth(),bottom:g.top+f.outerHeight(),startselected:false,selected:f.hasClass("ui-selected"),selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=e.addClass("ui-selectee");
this._mouseInit();
this.helper=b("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(f){var e=this,d=this.options;
this.opos=[f.pageX,f.pageY];
if(this.options.disabled){return
}this.selectees=b(d.filter,this.element[0]);
this._trigger("start",f);
b(d.appendTo).append(this.helper);
this.helper.css({left:f.pageX,top:f.pageY,width:0,height:0});
if(d.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var g=b.data(this,"selectable-item");
g.startselected=true;
if(!f.metaKey&&!f.ctrlKey){g.$element.removeClass("ui-selected");
g.selected=false;
g.$element.addClass("ui-unselecting");
g.unselecting=true;
e._trigger("unselecting",f,{unselecting:g.element})
}});
b(f.target).parents().addBack().each(function(){var g,h=b.data(this,"selectable-item");
if(h){g=(!f.metaKey&&!f.ctrlKey)||!h.$element.hasClass("ui-selected");
h.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");
h.unselecting=!g;
h.selecting=g;
h.selected=g;
if(g){e._trigger("selecting",f,{selecting:h.element})
}else{e._trigger("unselecting",f,{unselecting:h.element})
}return false
}})
},_mouseDrag:function(m){this.dragged=true;
if(this.options.disabled){return
}var h,l=this,f=this.options,e=this.opos[0],k=this.opos[1],d=m.pageX,g=m.pageY;
if(e>d){h=d;
d=e;
e=h
}if(k>g){h=g;
g=k;
k=h
}this.helper.css({left:e,top:k,width:d-e,height:g-k});
this.selectees.each(function(){var n=b.data(this,"selectable-item"),o=false;
if(!n||n.element===l.element[0]){return
}if(f.tolerance==="touch"){o=(!(n.left>d||n.right<e||n.top>g||n.bottom<k))
}else{if(f.tolerance==="fit"){o=(n.left>e&&n.right<d&&n.top>k&&n.bottom<g)
}}if(o){if(n.selected){n.$element.removeClass("ui-selected");
n.selected=false
}if(n.unselecting){n.$element.removeClass("ui-unselecting");
n.unselecting=false
}if(!n.selecting){n.$element.addClass("ui-selecting");
n.selecting=true;
l._trigger("selecting",m,{selecting:n.element})
}}else{if(n.selecting){if((m.metaKey||m.ctrlKey)&&n.startselected){n.$element.removeClass("ui-selecting");
n.selecting=false;
n.$element.addClass("ui-selected");
n.selected=true
}else{n.$element.removeClass("ui-selecting");
n.selecting=false;
if(n.startselected){n.$element.addClass("ui-unselecting");
n.unselecting=true
}l._trigger("unselecting",m,{unselecting:n.element})
}}if(n.selected){if(!m.metaKey&&!m.ctrlKey&&!n.startselected){n.$element.removeClass("ui-selected");
n.selected=false;
n.$element.addClass("ui-unselecting");
n.unselecting=true;
l._trigger("unselecting",m,{unselecting:n.element})
}}}});
return false
},_mouseStop:function(e){var d=this;
this.dragged=false;
b(".ui-unselecting",this.element[0]).each(function(){var f=b.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
d._trigger("unselected",e,{unselected:f.element})
});
b(".ui-selecting",this.element[0]).each(function(){var f=b.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
d._trigger("selected",e,{selected:f.element})
});
this._trigger("stop",e);
this.helper.remove();
return false
}})
})(jQuery);
(function(c,e){function b(g,f,h){return(g>f)&&(g<(f+h))
}function d(f){return(/left|right/).test(f.css("float"))||(/inline|table-cell/).test(f.css("display"))
}c.widget("ui.sortable",c.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var f=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?f.axis==="x"||d(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var f=this.items.length-1;
f>=0;
f--){this.items[f].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(f,g){if(f==="disabled"){this.options[f]=g;
this.widget().toggleClass("ui-sortable-disabled",!!g)
}else{c.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(h,k){var f=null,l=false,g=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(h);
c(h.target).parents().each(function(){if(c.data(this,g.widgetName+"-item")===g){f=c(this);
return false
}});
if(c.data(h.target,g.widgetName+"-item")===g){f=c(h.target)
}if(!f){return false
}if(this.options.handle&&!k){c(this.options.handle,f).find("*").addBack().each(function(){if(this===h.target){l=true
}});
if(!l){return false
}}this.currentItem=f;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(k,l,g){var h,f,m=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(k);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
c.extend(this.offset,{click:{left:k.pageX-this.offset.left,top:k.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(k);
this.originalPageX=k.pageX;
this.originalPageY=k.pageY;
(m.cursorAt&&this._adjustOffsetFromHelper(m.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(m.containment){this._setContainment()
}if(m.cursor&&m.cursor!=="auto"){f=this.document.find("body");
this.storedCursor=f.css("cursor");
f.css("cursor",m.cursor);
this.storedStylesheet=c("<style>*{ cursor: "+m.cursor+" !important; }</style>").appendTo(f)
}if(m.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",m.opacity)
}if(m.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",m.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",k,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!g){for(h=this.containers.length-1;
h>=0;
h--){this.containers[h]._trigger("activate",k,this._uiHash(this))
}}if(c.ui.ddmanager){c.ui.ddmanager.current=this
}if(c.ui.ddmanager&&!m.dropBehaviour){c.ui.ddmanager.prepareOffsets(this,k)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(k);
return true
},_mouseDrag:function(l){var h,k,g,n,m=this.options,f=false;
this.position=this._generatePosition(l);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-l.pageY<m.scrollSensitivity){this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop+m.scrollSpeed
}else{if(l.pageY-this.overflowOffset.top<m.scrollSensitivity){this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop-m.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-l.pageX<m.scrollSensitivity){this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft+m.scrollSpeed
}else{if(l.pageX-this.overflowOffset.left<m.scrollSensitivity){this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft-m.scrollSpeed
}}}else{if(l.pageY-c(document).scrollTop()<m.scrollSensitivity){f=c(document).scrollTop(c(document).scrollTop()-m.scrollSpeed)
}else{if(c(window).height()-(l.pageY-c(document).scrollTop())<m.scrollSensitivity){f=c(document).scrollTop(c(document).scrollTop()+m.scrollSpeed)
}}if(l.pageX-c(document).scrollLeft()<m.scrollSensitivity){f=c(document).scrollLeft(c(document).scrollLeft()-m.scrollSpeed)
}else{if(c(window).width()-(l.pageX-c(document).scrollLeft())<m.scrollSensitivity){f=c(document).scrollLeft(c(document).scrollLeft()+m.scrollSpeed)
}}}if(f!==false&&c.ui.ddmanager&&!m.dropBehaviour){c.ui.ddmanager.prepareOffsets(this,l)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(h=this.items.length-1;
h>=0;
h--){k=this.items[h];
g=k.item[0];
n=this._intersectsWithPointer(k);
if(!n){continue
}if(k.instance!==this.currentContainer){continue
}if(g!==this.currentItem[0]&&this.placeholder[n===1?"next":"prev"]()[0]!==g&&!c.contains(this.placeholder[0],g)&&(this.options.type==="semi-dynamic"?!c.contains(this.element[0],g):true)){this.direction=n===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(k)){this._rearrange(l,k)
}else{break
}this._trigger("change",l,this._uiHash());
break
}}this._contactContainers(l);
if(c.ui.ddmanager){c.ui.ddmanager.drag(this,l)
}this._trigger("sort",l,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(h,l){if(!h){return
}if(c.ui.ddmanager&&!this.options.dropBehaviour){c.ui.ddmanager.drop(this,h)
}if(this.options.revert){var g=this,m=this.placeholder.offset(),f=this.options.axis,k={};
if(!f||f==="x"){k.left=m.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!f||f==="y"){k.top=m.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
c(this.helper).animate(k,parseInt(this.options.revert,10)||500,function(){g._clear(h)
})
}else{this._clear(h,l)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var f=this.containers.length-1;
f>=0;
f--){this.containers[f]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",null,this._uiHash(this));
this.containers[f].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}c.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){c(this.domPosition.prev).after(this.currentItem)
}else{c(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(h){var f=this._getItemsAsjQuery(h&&h.connected),g=[];
h=h||{};
c(f).each(function(){var k=(c(h.item||this).attr(h.attribute||"id")||"").match(h.expression||(/(.+)[\-=_](.+)/));
if(k){g.push((h.key||k[1]+"[]")+"="+(h.key&&h.expression?k[1]:k[2]))
}});
if(!g.length&&h.key){g.push(h.key+"=")
}return g.join("&")
},toArray:function(h){var f=this._getItemsAsjQuery(h&&h.connected),g=[];
h=h||{};
f.each(function(){g.push(c(h.item||this).attr(h.attribute||"id")||"")
});
return g
},_intersectsWith:function(w){var h=this.positionAbs.left,g=h+this.helperProportions.width,u=this.positionAbs.top,q=u+this.helperProportions.height,k=w.left,f=k+w.width,x=w.top,p=x+w.height,y=this.offset.click.top,o=this.offset.click.left,n=(this.options.axis==="x")||((u+y)>x&&(u+y)<p),v=(this.options.axis==="y")||((h+o)>k&&(h+o)<f),m=n&&v;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>w[this.floating?"width":"height"])){return m
}else{return(k<h+(this.helperProportions.width/2)&&g-(this.helperProportions.width/2)<f&&x<u+(this.helperProportions.height/2)&&q-(this.helperProportions.height/2)<p)
}},_intersectsWithPointer:function(h){var k=(this.options.axis==="x")||b(this.positionAbs.top+this.offset.click.top,h.top,h.height),g=(this.options.axis==="y")||b(this.positionAbs.left+this.offset.click.left,h.left,h.width),m=k&&g,f=this._getDragVerticalDirection(),l=this._getDragHorizontalDirection();
if(!m){return false
}return this.floating?(((l&&l==="right")||f==="down")?2:1):(f&&(f==="down"?2:1))
},_intersectsWithSides:function(k){var g=b(this.positionAbs.top+this.offset.click.top,k.top+(k.height/2),k.height),h=b(this.positionAbs.left+this.offset.click.left,k.left+(k.width/2),k.width),f=this._getDragVerticalDirection(),l=this._getDragHorizontalDirection();
if(this.floating&&l){return((l==="right"&&h)||(l==="left"&&!h))
}else{return f&&((f==="down"&&g)||(f==="up"&&!g))
}},_getDragVerticalDirection:function(){var f=this.positionAbs.top-this.lastPositionAbs.top;
return f!==0&&(f>0?"down":"up")
},_getDragHorizontalDirection:function(){var f=this.positionAbs.left-this.lastPositionAbs.left;
return f!==0&&(f>0?"right":"left")
},refresh:function(f){this._refreshItems(f);
this.refreshPositions();
return this
},_connectWith:function(){var f=this.options;
return f.connectWith.constructor===String?[f.connectWith]:f.connectWith
},_getItemsAsjQuery:function(m){var k,h,o,n,f=[],g=[],l=this._connectWith();
if(l&&m){for(k=l.length-1;
k>=0;
k--){o=c(l[k]);
for(h=o.length-1;
h>=0;
h--){n=c.data(o[h],this.widgetFullName);
if(n&&n!==this&&!n.options.disabled){g.push([c.isFunction(n.options.items)?n.options.items.call(n.element):c(n.options.items,n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),n])
}}}}g.push([c.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):c(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(k=g.length-1;
k>=0;
k--){g[k][0].each(function(){f.push(this)
})
}return c(f)
},_removeCurrentsFromItems:function(){var f=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=c.grep(this.items,function(h){for(var g=0;
g<f.length;
g++){if(f[g]===h.item[0]){return false
}}return true
})
},_refreshItems:function(f){this.items=[];
this.containers=[this];
var l,h,q,m,p,g,t,r,n=this.items,k=[[c.isFunction(this.options.items)?this.options.items.call(this.element[0],f,{item:this.currentItem}):c(this.options.items,this.element),this]],o=this._connectWith();
if(o&&this.ready){for(l=o.length-1;
l>=0;
l--){q=c(o[l]);
for(h=q.length-1;
h>=0;
h--){m=c.data(q[h],this.widgetFullName);
if(m&&m!==this&&!m.options.disabled){k.push([c.isFunction(m.options.items)?m.options.items.call(m.element[0],f,{item:this.currentItem}):c(m.options.items,m.element),m]);
this.containers.push(m)
}}}}for(l=k.length-1;
l>=0;
l--){p=k[l][1];
g=k[l][0];
for(h=0,r=g.length;
h<r;
h++){t=c(g[h]);
t.data(this.widgetName+"-item",p);
n.push({item:t,instance:p,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(f){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var h,k,g,l;
for(h=this.items.length-1;
h>=0;
h--){k=this.items[h];
if(k.instance!==this.currentContainer&&this.currentContainer&&k.item[0]!==this.currentItem[0]){continue
}g=this.options.toleranceElement?c(this.options.toleranceElement,k.item):k.item;
if(!f){k.width=g.outerWidth();
k.height=g.outerHeight()
}l=g.offset();
k.left=l.left;
k.top=l.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(h=this.containers.length-1;
h>=0;
h--){l=this.containers[h].element.offset();
this.containers[h].containerCache.left=l.left;
this.containers[h].containerCache.top=l.top;
this.containers[h].containerCache.width=this.containers[h].element.outerWidth();
this.containers[h].containerCache.height=this.containers[h].element.outerHeight()
}}return this
},_createPlaceholder:function(g){g=g||this;
var f,h=g.options;
if(!h.placeholder||h.placeholder.constructor===String){f=h.placeholder;
h.placeholder={element:function(){var l=g.currentItem[0].nodeName.toLowerCase(),k=c("<"+l+">",g.document[0]).addClass(f||g.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(l==="tr"){g.currentItem.children().each(function(){c("<td>&#160;</td>",g.document[0]).attr("colspan",c(this).attr("colspan")||1).appendTo(k)
})
}else{if(l==="img"){k.attr("src",g.currentItem.attr("src"))
}}if(!f){k.css("visibility","hidden")
}return k
},update:function(k,l){if(f&&!h.forcePlaceholderSize){return
}if(!l.height()){l.height(g.currentItem.innerHeight()-parseInt(g.currentItem.css("paddingTop")||0,10)-parseInt(g.currentItem.css("paddingBottom")||0,10))
}if(!l.width()){l.width(g.currentItem.innerWidth()-parseInt(g.currentItem.css("paddingLeft")||0,10)-parseInt(g.currentItem.css("paddingRight")||0,10))
}}}
}g.placeholder=c(h.placeholder.element.call(g.element,g.currentItem));
g.currentItem.after(g.placeholder);
h.placeholder.update(g,g.placeholder)
},_contactContainers:function(f){var m,k,q,n,o,t,g,u,l,p,h=null,r=null;
for(m=this.containers.length-1;
m>=0;
m--){if(c.contains(this.currentItem[0],this.containers[m].element[0])){continue
}if(this._intersectsWith(this.containers[m].containerCache)){if(h&&c.contains(this.containers[m].element[0],h.element[0])){continue
}h=this.containers[m];
r=m
}else{if(this.containers[m].containerCache.over){this.containers[m]._trigger("out",f,this._uiHash(this));
this.containers[m].containerCache.over=0
}}}if(!h){return
}if(this.containers.length===1){if(!this.containers[r].containerCache.over){this.containers[r]._trigger("over",f,this._uiHash(this));
this.containers[r].containerCache.over=1
}}else{q=10000;
n=null;
p=h.floating||d(this.currentItem);
o=p?"left":"top";
t=p?"width":"height";
g=this.positionAbs[o]+this.offset.click[o];
for(k=this.items.length-1;
k>=0;
k--){if(!c.contains(this.containers[r].element[0],this.items[k].item[0])){continue
}if(this.items[k].item[0]===this.currentItem[0]){continue
}if(p&&!b(this.positionAbs.top+this.offset.click.top,this.items[k].top,this.items[k].height)){continue
}u=this.items[k].item.offset()[o];
l=false;
if(Math.abs(u-g)>Math.abs(u+this.items[k][t]-g)){l=true;
u+=this.items[k][t]
}if(Math.abs(u-g)<q){q=Math.abs(u-g);
n=this.items[k];
this.direction=l?"up":"down"
}}if(!n&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[r]){return
}n?this._rearrange(f,n,null,true):this._rearrange(f,null,this.containers[r].element,true);
this._trigger("change",f,this._uiHash());
this.containers[r]._trigger("change",f,this._uiHash(this));
this.currentContainer=this.containers[r];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[r]._trigger("over",f,this._uiHash(this));
this.containers[r].containerCache.over=1
}},_createHelper:function(g){var h=this.options,f=c.isFunction(h.helper)?c(h.helper.apply(this.element[0],[g,this.currentItem])):(h.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!f.parents("body").length){c(h.appendTo!=="parent"?h.appendTo:this.currentItem[0].parentNode)[0].appendChild(f[0])
}if(f[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!f[0].style.width||h.forceHelperSize){f.width(this.currentItem.width())
}if(!f[0].style.height||h.forceHelperSize){f.height(this.currentItem.height())
}return f
},_adjustOffsetFromHelper:function(f){if(typeof f==="string"){f=f.split(" ")
}if(c.isArray(f)){f={left:+f[0],top:+f[1]||0}
}if("left" in f){this.offset.click.left=f.left+this.margins.left
}if("right" in f){this.offset.click.left=this.helperProportions.width-f.right+this.margins.left
}if("top" in f){this.offset.click.top=f.top+this.margins.top
}if("bottom" in f){this.offset.click.top=this.helperProportions.height-f.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var f=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&c.contains(this.scrollParent[0],this.offsetParent[0])){f.left+=this.scrollParent.scrollLeft();
f.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&c.ui.ie)){f={top:0,left:0}
}return{top:f.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:f.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var f=this.currentItem.position();
return{top:f.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:f.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var g,k,f,h=this.options;
if(h.containment==="parent"){h.containment=this.helper[0].parentNode
}if(h.containment==="document"||h.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,c(h.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(c(h.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(h.containment)){g=c(h.containment)[0];
k=c(h.containment).offset();
f=(c(g).css("overflow")!=="hidden");
this.containment=[k.left+(parseInt(c(g).css("borderLeftWidth"),10)||0)+(parseInt(c(g).css("paddingLeft"),10)||0)-this.margins.left,k.top+(parseInt(c(g).css("borderTopWidth"),10)||0)+(parseInt(c(g).css("paddingTop"),10)||0)-this.margins.top,k.left+(f?Math.max(g.scrollWidth,g.offsetWidth):g.offsetWidth)-(parseInt(c(g).css("borderLeftWidth"),10)||0)-(parseInt(c(g).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,k.top+(f?Math.max(g.scrollHeight,g.offsetHeight):g.offsetHeight)-(parseInt(c(g).css("borderTopWidth"),10)||0)-(parseInt(c(g).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(h,l){if(!l){l=this.position
}var g=h==="absolute"?1:-1,f=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&c.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=(/(html|body)/i).test(f[0].tagName);
return{top:(l.top+this.offset.relative.top*g+this.offset.parent.top*g-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(k?0:f.scrollTop()))*g)),left:(l.left+this.offset.relative.left*g+this.offset.parent.left*g-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():k?0:f.scrollLeft())*g))}
},_generatePosition:function(k){var m,l,n=this.options,h=k.pageX,g=k.pageY,f=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&c.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,p=(/(html|body)/i).test(f[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(k.pageX-this.offset.click.left<this.containment[0]){h=this.containment[0]+this.offset.click.left
}if(k.pageY-this.offset.click.top<this.containment[1]){g=this.containment[1]+this.offset.click.top
}if(k.pageX-this.offset.click.left>this.containment[2]){h=this.containment[2]+this.offset.click.left
}if(k.pageY-this.offset.click.top>this.containment[3]){g=this.containment[3]+this.offset.click.top
}}if(n.grid){m=this.originalPageY+Math.round((g-this.originalPageY)/n.grid[1])*n.grid[1];
g=this.containment?((m-this.offset.click.top>=this.containment[1]&&m-this.offset.click.top<=this.containment[3])?m:((m-this.offset.click.top>=this.containment[1])?m-n.grid[1]:m+n.grid[1])):m;
l=this.originalPageX+Math.round((h-this.originalPageX)/n.grid[0])*n.grid[0];
h=this.containment?((l-this.offset.click.left>=this.containment[0]&&l-this.offset.click.left<=this.containment[2])?l:((l-this.offset.click.left>=this.containment[0])?l-n.grid[0]:l+n.grid[0])):l
}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(p?0:f.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():p?0:f.scrollLeft())))}
},_rearrange:function(l,k,g,h){g?g[0].appendChild(this.placeholder[0]):k.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?k.item[0]:k.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var f=this.counter;
this._delay(function(){if(f===this.counter){this.refreshPositions(!h)
}})
},_clear:function(g,h){this.reverting=false;
var f,k=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(f in this._storedCSS){if(this._storedCSS[f]==="auto"||this._storedCSS[f]==="static"){this._storedCSS[f]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!h){k.push(function(l){this._trigger("receive",l,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!h){k.push(function(l){this._trigger("update",l,this._uiHash())
})
}if(this!==this.currentContainer){if(!h){k.push(function(l){this._trigger("remove",l,this._uiHash())
});
k.push((function(l){return function(m){l._trigger("receive",m,this._uiHash(this))
}
}).call(this,this.currentContainer));
k.push((function(l){return function(m){l._trigger("update",m,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(f=this.containers.length-1;
f>=0;
f--){if(!h){k.push((function(l){return function(m){l._trigger("deactivate",m,this._uiHash(this))
}
}).call(this,this.containers[f]))
}if(this.containers[f].containerCache.over){k.push((function(l){return function(m){l._trigger("out",m,this._uiHash(this))
}
}).call(this,this.containers[f]));
this.containers[f].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!h){this._trigger("beforeStop",g,this._uiHash());
for(f=0;
f<k.length;
f++){k[f].call(this,g)
}this._trigger("stop",g,this._uiHash())
}this.fromOutside=false;
return false
}if(!h){this._trigger("beforeStop",g,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!h){for(f=0;
f<k.length;
f++){k[f].call(this,g)
}this._trigger("stop",g,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(c.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(f){var g=f||this;
return{helper:g.helper,placeholder:g.placeholder||c([]),position:g.position,originalPosition:g.originalPosition,offset:g.positionAbs,item:g.currentItem,sender:f?f.element:null}
}})
})(jQuery);
(function(b,d){var c="ui-effects-";
b.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(v,h){var q="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",n=/^([\-+])=\s*(\d+\.?\d*)/,m=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(w){return[w[1],w[2],w[3],w[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(w){return[w[1]*2.55,w[2]*2.55,w[3]*2.55,w[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(w){return[parseInt(w[1],16),parseInt(w[2],16),parseInt(w[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(w){return[parseInt(w[1]+w[1],16),parseInt(w[2]+w[2],16),parseInt(w[3]+w[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(w){return[w[1],w[2]/100,w[3]/100,w[4]]
}}],k=v.Color=function(x,y,w,z){return new v.Color.fn.parse(x,y,w,z)
},p={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},t=k.support={},f=v("<p>")[0],e,r=v.each;
f.style.cssText="background-color:rgba(1,1,1,.5)";
t.rgba=f.style.backgroundColor.indexOf("rgba")>-1;
r(p,function(w,x){x.cache="_"+w;
x.props.alpha={idx:3,type:"percent",def:1}
});
function o(x,z,y){var w=u[z.type]||{};
if(x==null){return(y||!z.def)?null:z.def
}x=w.floor?~~x:parseFloat(x);
if(isNaN(x)){return z.def
}if(w.mod){return(x+w.mod)%w.mod
}return 0>x?0:w.max<x?w.max:x
}function l(w){var y=k(),x=y._rgba=[];
w=w.toLowerCase();
r(m,function(D,E){var B,C=E.re.exec(w),A=C&&E.parse(C),z=E.space||"rgba";
if(A){B=y[z](A);
y[p[z].cache]=B[p[z].cache];
x=y._rgba=B._rgba;
return false
}});
if(x.length){if(x.join()==="0,0,0,0"){v.extend(x,e.transparent)
}return y
}return e[w]
}k.fn=v.extend(k.prototype,{parse:function(C,A,w,B){if(C===h){this._rgba=[null,null,null,null];
return this
}if(C.jquery||C.nodeType){C=v(C).css(A);
A=h
}var z=this,y=v.type(C),x=this._rgba=[];
if(A!==h){C=[C,A,w,B];
y="array"
}if(y==="string"){return this.parse(l(C)||e._default)
}if(y==="array"){r(p.rgba.props,function(D,E){x[E.idx]=o(C[E.idx],E)
});
return this
}if(y==="object"){if(C instanceof k){r(p,function(D,E){if(C[E.cache]){z[E.cache]=C[E.cache].slice()
}})
}else{r(p,function(E,F){var D=F.cache;
r(F.props,function(G,H){if(!z[D]&&F.to){if(G==="alpha"||C[G]==null){return
}z[D]=F.to(z._rgba)
}z[D][H.idx]=o(C[G],H,true)
});
if(z[D]&&v.inArray(null,z[D].slice(0,3))<0){z[D][3]=1;
if(F.from){z._rgba=F.from(z[D])
}}})
}return this
}},is:function(y){var w=k(y),z=true,x=this;
r(p,function(A,C){var D,B=w[C.cache];
if(B){D=x[C.cache]||C.to&&C.to(x._rgba)||[];
r(C.props,function(E,F){if(B[F.idx]!=null){z=(B[F.idx]===D[F.idx]);
return z
}})
}return z
});
return z
},_space:function(){var w=[],x=this;
r(p,function(y,z){if(x[z.cache]){w.push(y)
}});
return w.pop()
},transition:function(x,D){var y=k(x),z=y._space(),A=p[z],B=this.alpha()===0?k("transparent"):this,C=B[A.cache]||A.to(B._rgba),w=C.slice();
y=y[A.cache];
r(A.props,function(H,J){var G=J.idx,F=C[G],E=y[G],I=u[J.type]||{};
if(E===null){return
}if(F===null){w[G]=E
}else{if(I.mod){if(E-F>I.mod/2){F+=I.mod
}else{if(F-E>I.mod/2){F-=I.mod
}}}w[G]=o((E-F)*D+F,J)
}});
return this[z](w)
},blend:function(z){if(this._rgba[3]===1){return this
}var y=this._rgba.slice(),x=y.pop(),w=k(z)._rgba;
return k(v.map(y,function(A,B){return(1-x)*w[B]+x*A
}))
},toRgbaString:function(){var x="rgba(",w=v.map(this._rgba,function(y,z){return y==null?(z>2?1:0):y
});
if(w[3]===1){w.pop();
x="rgb("
}return x+w.join()+")"
},toHslaString:function(){var x="hsla(",w=v.map(this.hsla(),function(y,z){if(y==null){y=z>2?1:0
}if(z&&z<3){y=Math.round(y*100)+"%"
}return y
});
if(w[3]===1){w.pop();
x="hsl("
}return x+w.join()+")"
},toHexString:function(w){var x=this._rgba.slice(),y=x.pop();
if(w){x.push(~~(y*255))
}return"#"+v.map(x,function(z){z=(z||0).toString(16);
return z.length===1?"0"+z:z
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
k.fn.parse.prototype=k.fn;
function g(y,x,w){w=(w+1)%1;
if(w*6<1){return y+(x-y)*w*6
}if(w*2<1){return x
}if(w*3<2){return y+(x-y)*((2/3)-w)*6
}return y
}p.hsla.to=function(y){if(y[0]==null||y[1]==null||y[2]==null){return[null,null,null,y[3]]
}var w=y[0]/255,B=y[1]/255,C=y[2]/255,E=y[3],D=Math.max(w,B,C),z=Math.min(w,B,C),F=D-z,G=D+z,x=G*0.5,A,H;
if(z===D){A=0
}else{if(w===D){A=(60*(B-C)/F)+360
}else{if(B===D){A=(60*(C-w)/F)+120
}else{A=(60*(w-B)/F)+240
}}}if(F===0){H=0
}else{if(x<=0.5){H=F/G
}else{H=F/(2-G)
}}return[Math.round(A)%360,H,x,E==null?1:E]
};
p.hsla.from=function(A){if(A[0]==null||A[1]==null||A[2]==null){return[null,null,null,A[3]]
}var z=A[0]/360,y=A[1],x=A[2],w=A[3],B=x<=0.5?x*(1+y):x+y-x*y,C=2*x-B;
return[Math.round(g(C,B,z+(1/3))*255),Math.round(g(C,B,z)*255),Math.round(g(C,B,z-(1/3))*255),w]
};
r(p,function(x,z){var y=z.props,w=z.cache,B=z.to,A=z.from;
k.fn[x]=function(G){if(B&&!this[w]){this[w]=B(this._rgba)
}if(G===h){return this[w].slice()
}var D,F=v.type(G),C=(F==="array"||F==="object")?G:arguments,E=this[w].slice();
r(y,function(H,J){var I=C[F==="object"?H:J.idx];
if(I==null){I=E[J.idx]
}E[J.idx]=o(I,J)
});
if(A){D=k(A(E));
D[w]=E;
return D
}else{return k(E)
}};
r(y,function(C,D){if(k.fn[C]){return
}k.fn[C]=function(H){var J=v.type(H),G=(C==="alpha"?(this._hsla?"hsla":"rgba"):x),F=this[G](),I=F[D.idx],E;
if(J==="undefined"){return I
}if(J==="function"){H=H.call(this,I);
J=v.type(H)
}if(H==null&&D.empty){return this
}if(J==="string"){E=n.exec(H);
if(E){H=I+parseFloat(E[2])*(E[1]==="+"?1:-1)
}}F[D.idx]=H;
return this[G](F)
}
})
});
k.hook=function(x){var w=x.split(" ");
r(w,function(y,z){v.cssHooks[z]={set:function(D,E){var B,C,A="";
if(E!=="transparent"&&(v.type(E)!=="string"||(B=l(E)))){E=k(B||E);
if(!t.rgba&&E._rgba[3]!==1){C=z==="backgroundColor"?D.parentNode:D;
while((A===""||A==="transparent")&&C&&C.style){try{A=v.css(C,"backgroundColor");
C=C.parentNode
}catch(F){}}E=E.blend(A&&A!=="transparent"?A:"_default")
}E=E.toRgbaString()
}try{D.style[z]=E
}catch(F){}}};
v.fx.step[z]=function(A){if(!A.colorInit){A.start=k(A.elem,z);
A.end=k(A.end);
A.colorInit=true
}v.cssHooks[z].set(A.elem,A.start.transition(A.end,A.pos))
}
})
};
k.hook(q);
v.cssHooks.borderColor={expand:function(x){var w={};
r(["Top","Right","Bottom","Left"],function(z,y){w["border"+y+"Color"]=x
});
return w
}};
e=v.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
b.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(k,l){b.fx.step[l]=function(m){if(m.end!=="none"&&!m.setAttr||m.pos===1&&!m.setAttr){jQuery.style(m.elem,l,m.end);
m.setAttr=true
}}
});
function h(o){var l,k,m=o.ownerDocument.defaultView?o.ownerDocument.defaultView.getComputedStyle(o,null):o.currentStyle,n={};
if(m&&m.length&&m[0]&&m[m[0]]){k=m.length;
while(k--){l=m[k];
if(typeof m[l]==="string"){n[b.camelCase(l)]=m[l]
}}}else{for(l in m){if(typeof m[l]==="string"){n[l]=m[l]
}}}return n
}function e(k,m){var o={},l,n;
for(l in m){n=m[l];
if(k[l]!==n){if(!g[l]){if(b.fx.step[l]||!isNaN(parseFloat(n))){o[l]=n
}}}}return o
}if(!b.fn.addBack){b.fn.addBack=function(k){return this.add(k==null?this.prevObject:this.prevObject.filter(k))
}
}b.effects.animateClass=function(k,l,p,n){var m=b.speed(l,p,n);
return this.queue(function(){var r=b(this),o=r.attr("class")||"",q,t=m.children?r.find("*").addBack():r;
t=t.map(function(){var u=b(this);
return{el:u,start:h(this)}
});
q=function(){b.each(f,function(u,v){if(k[v]){r[v+"Class"](k[v])
}})
};
q();
t=t.map(function(){this.end=h(this.el[0]);
this.diff=e(this.start,this.end);
return this
});
r.attr("class",o);
t=t.map(function(){var w=this,u=b.Deferred(),v=b.extend({},m,{queue:false,complete:function(){u.resolve(w)
}});
this.el.animate(this.diff,v);
return u.promise()
});
b.when.apply(b,t.get()).done(function(){q();
b.each(arguments,function(){var u=this.el;
b.each(this.diff,function(v){u.css(v,"")
})
});
m.complete.call(r[0])
})
})
};
b.fn.extend({addClass:(function(k){return function(m,l,o,n){return l?b.effects.animateClass.call(this,{add:m},l,o,n):k.apply(this,arguments)
}
})(b.fn.addClass),removeClass:(function(k){return function(m,l,o,n){return arguments.length>1?b.effects.animateClass.call(this,{remove:m},l,o,n):k.apply(this,arguments)
}
})(b.fn.removeClass),toggleClass:(function(k){return function(n,m,l,p,o){if(typeof m==="boolean"||m===d){if(!l){return k.apply(this,arguments)
}else{return b.effects.animateClass.call(this,(m?{add:n}:{remove:n}),l,p,o)
}}else{return b.effects.animateClass.call(this,{toggle:n},m,l,p)
}}
})(b.fn.toggleClass),switchClass:function(k,m,l,o,n){return b.effects.animateClass.call(this,{add:m,remove:k},l,o,n)
}})
})();
(function(){b.extend(b.effects,{version:"1.10.3",save:function(h,k){for(var g=0;
g<k.length;
g++){if(k[g]!==null){h.data(c+k[g],h[0].style[k[g]])
}}},restore:function(h,l){var k,g;
for(g=0;
g<l.length;
g++){if(l[g]!==null){k=h.data(c+l[g]);
if(k===d){k=""
}h.css(l[g],k)
}}},setMode:function(g,h){if(h==="toggle"){h=g.is(":hidden")?"show":"hide"
}return h
},getBaseline:function(h,k){var l,g;
switch(h[0]){case"top":l=0;
break;
case"middle":l=0.5;
break;
case"bottom":l=1;
break;
default:l=h[0]/k.height
}switch(h[1]){case"left":g=0;
break;
case"center":g=0.5;
break;
case"right":g=1;
break;
default:g=h[1]/k.width
}return{x:g,y:l}
},createWrapper:function(h){if(h.parent().is(".ui-effects-wrapper")){return h.parent()
}var k={width:h.outerWidth(true),height:h.outerHeight(true),"float":h.css("float")},n=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),g={width:h.width(),height:h.height()},m=document.activeElement;
try{m.id
}catch(l){m=document.body
}h.wrap(n);
if(h[0]===m||b.contains(h[0],m)){b(m).focus()
}n=h.parent();
if(h.css("position")==="static"){n.css({position:"relative"});
h.css({position:"relative"})
}else{b.extend(k,{position:h.css("position"),zIndex:h.css("z-index")});
b.each(["top","left","bottom","right"],function(o,p){k[p]=h.css(p);
if(isNaN(parseInt(k[p],10))){k[p]="auto"
}});
h.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}h.css(g);
return n.css(k).show()
},removeWrapper:function(g){var h=document.activeElement;
if(g.parent().is(".ui-effects-wrapper")){g.parent().replaceWith(g);
if(g[0]===h||b.contains(g[0],h)){b(h).focus()
}}return g
},setTransition:function(h,l,g,k){k=k||{};
b.each(l,function(n,m){var o=h.cssUnit(m);
if(o[0]>0){k[m]=o[0]*g+o[1]
}});
return k
}});
function e(h,g,k,l){if(b.isPlainObject(h)){g=h;
h=h.effect
}h={effect:h};
if(g==null){g={}
}if(b.isFunction(g)){l=g;
k=null;
g={}
}if(typeof g==="number"||b.fx.speeds[g]){l=k;
k=g;
g={}
}if(b.isFunction(k)){l=k;
k=null
}if(g){b.extend(h,g)
}k=k||g.duration;
h.duration=b.fx.off?0:typeof k==="number"?k:k in b.fx.speeds?b.fx.speeds[k]:b.fx.speeds._default;
h.complete=l||g.complete;
return h
}function f(g){if(!g||typeof g==="number"||b.fx.speeds[g]){return true
}if(typeof g==="string"&&!b.effects.effect[g]){return true
}if(b.isFunction(g)){return true
}if(typeof g==="object"&&!g.effect){return true
}return false
}b.fn.extend({effect:function(){var k=e.apply(this,arguments),m=k.mode,g=k.queue,h=b.effects.effect[k.effect];
if(b.fx.off||!h){if(m){return this[m](k.duration,k.complete)
}else{return this.each(function(){if(k.complete){k.complete.call(this)
}})
}}function l(p){var q=b(this),o=k.complete,r=k.mode;
function n(){if(b.isFunction(o)){o.call(q[0])
}if(b.isFunction(p)){p()
}}if(q.is(":hidden")?r==="hide":r==="show"){q[r]();
n()
}else{h.call(q[0],k,n)
}}return g===false?this.each(l):this.queue(g||"fx",l)
},show:(function(g){return function(k){if(f(k)){return g.apply(this,arguments)
}else{var h=e.apply(this,arguments);
h.mode="show";
return this.effect.call(this,h)
}}
})(b.fn.show),hide:(function(g){return function(k){if(f(k)){return g.apply(this,arguments)
}else{var h=e.apply(this,arguments);
h.mode="hide";
return this.effect.call(this,h)
}}
})(b.fn.hide),toggle:(function(g){return function(k){if(f(k)||typeof k==="boolean"){return g.apply(this,arguments)
}else{var h=e.apply(this,arguments);
h.mode="toggle";
return this.effect.call(this,h)
}}
})(b.fn.toggle),cssUnit:function(g){var h=this.css(g),k=[];
b.each(["em","px","%","pt"],function(l,m){if(h.indexOf(m)>0){k=[parseFloat(h),m]
}});
return k
}})
})();
(function(){var e={};
b.each(["Quad","Cubic","Quart","Quint","Expo"],function(g,f){e[f]=function(h){return Math.pow(h,g+2)
}
});
b.extend(e,{Sine:function(f){return 1-Math.cos(f*Math.PI/2)
},Circ:function(f){return 1-Math.sqrt(1-f*f)
},Elastic:function(f){return f===0||f===1?f:-Math.pow(2,8*(f-1))*Math.sin(((f-1)*80-7.5)*Math.PI/15)
},Back:function(f){return f*f*(3*f-2)
},Bounce:function(h){var f,g=4;
while(h<((f=Math.pow(2,--g))-1)/11){}return 1/Math.pow(4,3-g)-7.5625*Math.pow((f*3-2)/22-h,2)
}});
b.each(e,function(g,f){b.easing["easeIn"+g]=f;
b.easing["easeOut"+g]=function(h){return 1-f(1-h)
};
b.easing["easeInOut"+g]=function(h){return h<0.5?f(h*2)/2:1-f(h*-2+2)/2
}
})
})()
})(jQuery);
(function(e,f){var c=0,d={},b={};
d.height=d.paddingTop=d.paddingBottom=d.borderTopWidth=d.borderBottomWidth="hide";
b.height=b.paddingTop=b.paddingBottom=b.borderTopWidth=b.borderBottomWidth="show";
e.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var g=this.options;
this.prevShow=this.prevHide=e();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!g.collapsible&&(g.active===false||g.active==null)){g.active=0
}this._processPanels();
if(g.active<0){g.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?e():this.active.next(),content:!this.active.length?e():this.active.next()}
},_createIcons:function(){var g=this.options.icons;
if(g){e("<span>").addClass("ui-accordion-header-icon ui-icon "+g.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(g.header).addClass(g.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var g;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
g=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){g.css("height","")
}},_setOption:function(g,h){if(g==="active"){this._activate(h);
return
}if(g==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(h)
}this._super(g,h);
if(g==="collapsible"&&!h&&this.options.active===false){this._activate(0)
}if(g==="icons"){this._destroyIcons();
if(h){this._createIcons()
}}if(g==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!h)
}},_keydown:function(l){if(l.altKey||l.ctrlKey){return
}var m=e.ui.keyCode,k=this.headers.length,g=this.headers.index(l.target),h=false;
switch(l.keyCode){case m.RIGHT:case m.DOWN:h=this.headers[(g+1)%k];
break;
case m.LEFT:case m.UP:h=this.headers[(g-1+k)%k];
break;
case m.SPACE:case m.ENTER:this._eventHandler(l);
break;
case m.HOME:h=this.headers[0];
break;
case m.END:h=this.headers[k-1];
break
}if(h){e(l.target).attr("tabIndex",-1);
e(h).attr("tabIndex",0);
h.focus();
l.preventDefault()
}},_panelKeyDown:function(g){if(g.keyCode===e.ui.keyCode.UP&&g.ctrlKey){e(g.currentTarget).prev().focus()
}},refresh:function(){var g=this.options;
this._processPanels();
if((g.active===false&&g.collapsible===true)||!this.headers.length){g.active=false;
this.active=e()
}else{if(g.active===false){this._activate(0)
}else{if(this.active.length&&!e.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){g.active=false;
this.active=e()
}else{this._activate(Math.max(0,g.active-1))
}}else{g.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var m,k=this.options,h=k.heightStyle,l=this.element.parent(),g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++c);
this.active=this._findActive(k.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(q){var r=e(this),p=r.attr("id"),n=r.next(),o=n.attr("id");
if(!p){p=g+"-header-"+q;
r.attr("id",p)
}if(!o){o=g+"-panel-"+q;
n.attr("id",o)
}r.attr("aria-controls",o);
n.attr("aria-labelledby",p)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._createIcons();
this._setupEvents(k.event);
if(h==="fill"){m=l.height();
this.element.siblings(":visible").each(function(){var o=e(this),n=o.css("position");
if(n==="absolute"||n==="fixed"){return
}m-=o.outerHeight(true)
});
this.headers.each(function(){m-=e(this).outerHeight(true)
});
this.headers.next().each(function(){e(this).height(Math.max(0,m-e(this).innerHeight()+e(this).height()))
}).css("overflow","auto")
}else{if(h==="auto"){m=0;
this.headers.next().each(function(){m=Math.max(m,e(this).css("height","").height())
}).height(m)
}}},_activate:function(g){var h=this._findActive(g)[0];
if(h===this.active[0]){return
}h=h||this.active[0];
this._eventHandler({target:h,currentTarget:h,preventDefault:e.noop})
},_findActive:function(g){return typeof g==="number"?this.headers.eq(g):e()
},_setupEvents:function(h){var g={keydown:"_keydown"};
if(h){e.each(h.split(" "),function(l,k){g[k]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,g);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(g){var q=this.options,l=this.active,m=e(g.currentTarget),o=m[0]===l[0],h=o&&q.collapsible,k=h?e():m.next(),n=l.next(),p={oldHeader:l,oldPanel:n,newHeader:h?e():m,newPanel:k};
g.preventDefault();
if((o&&!q.collapsible)||(this._trigger("beforeActivate",g,p)===false)){return
}q.active=h?false:this.headers.index(m);
this.active=o?e():m;
this._toggle(p);
l.removeClass("ui-accordion-header-active ui-state-active");
if(q.icons){l.children(".ui-accordion-header-icon").removeClass(q.icons.activeHeader).addClass(q.icons.header)
}if(!o){m.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(q.icons){m.children(".ui-accordion-header-icon").removeClass(q.icons.header).addClass(q.icons.activeHeader)
}m.next().addClass("ui-accordion-content-active")
}},_toggle:function(k){var g=k.newPanel,h=this.prevShow.length?this.prevShow:k.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=g;
this.prevHide=h;
if(this.options.animate){this._animate(g,h,k)
}else{h.hide();
g.show();
this._toggleComplete(k)
}h.attr({"aria-expanded":"false","aria-hidden":"true"});
h.prev().attr("aria-selected","false");
if(g.length&&h.length){h.prev().attr("tabIndex",-1)
}else{if(g.length){this.headers.filter(function(){return e(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}g.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(g,q,m){var p,o,l,n=this,r=0,t=g.length&&(!q.length||(g.index()<q.index())),k=this.options.animate||{},u=t&&k.down||k,h=function(){n._toggleComplete(m)
};
if(typeof u==="number"){l=u
}if(typeof u==="string"){o=u
}o=o||u.easing||k.easing;
l=l||u.duration||k.duration;
if(!q.length){return g.animate(b,l,o,h)
}if(!g.length){return q.animate(d,l,o,h)
}p=g.show().outerHeight();
q.animate(d,{duration:l,easing:o,step:function(v,w){w.now=Math.round(v)
}});
g.hide().animate(b,{duration:l,easing:o,complete:h,step:function(v,w){w.now=Math.round(v);
if(w.prop!=="height"){r+=w.now
}else{if(n.options.heightStyle!=="content"){w.now=Math.round(p-q.outerHeight()-r);
r=0
}}}})
},_toggleComplete:function(h){var g=h.oldPanel;
g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(g.length){g.parent()[0].className=g.parent()[0].className
}this._trigger("activate",null,h)
}})
})(jQuery);
(function(b,c){var d=0;
b.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var g,e,h,l=this.element[0].nodeName.toLowerCase(),k=l==="textarea",f=l==="input";
this.isMultiLine=k?true:f?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[k||f?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(m){if(this.element.prop("readOnly")){g=true;
h=true;
e=true;
return
}g=false;
h=false;
e=false;
var n=b.ui.keyCode;
switch(m.keyCode){case n.PAGE_UP:g=true;
this._move("previousPage",m);
break;
case n.PAGE_DOWN:g=true;
this._move("nextPage",m);
break;
case n.UP:g=true;
this._keyEvent("previous",m);
break;
case n.DOWN:g=true;
this._keyEvent("next",m);
break;
case n.ENTER:case n.NUMPAD_ENTER:if(this.menu.active){g=true;
m.preventDefault();
this.menu.select(m)
}break;
case n.TAB:if(this.menu.active){this.menu.select(m)
}break;
case n.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(m);
m.preventDefault()
}break;
default:e=true;
this._searchTimeout(m);
break
}},keypress:function(m){if(g){g=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){m.preventDefault()
}return
}if(e){return
}var n=b.ui.keyCode;
switch(m.keyCode){case n.PAGE_UP:this._move("previousPage",m);
break;
case n.PAGE_DOWN:this._move("nextPage",m);
break;
case n.UP:this._keyEvent("previous",m);
break;
case n.DOWN:this._keyEvent("next",m);
break
}},input:function(m){if(h){h=false;
m.preventDefault();
return
}this._searchTimeout(m)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(m){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(m);
this._change(m)
}});
this._initSource();
this.menu=b("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(m){m.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var n=this.menu.element[0];
if(!b(m.target).closest(".ui-menu-item").length){this._delay(function(){var o=this;
this.document.one("mousedown",function(p){if(p.target!==o.element[0]&&p.target!==n&&!b.contains(n,p.target)){o.close()
}})
})
}},menufocus:function(n,o){if(this.isNewMenu){this.isNewMenu=false;
if(n.originalEvent&&/^mouse/.test(n.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){b(n.target).trigger(n.originalEvent)
});
return
}}var m=o.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",n,{item:m})){if(n.originalEvent&&/^key/.test(n.originalEvent.type)){this._value(m.value)
}}else{this.liveRegion.text(m.value)
}},menuselect:function(o,p){var n=p.item.data("ui-autocomplete-item"),m=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=m;
this._delay(function(){this.previous=m;
this.selectedItem=n
})
}if(false!==this._trigger("select",o,{item:n})){this._value(n.value)
}this.term=this._value();
this.close(o);
this.selectedItem=n
}});
this.liveRegion=b("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(e,f){this._super(e,f);
if(e==="source"){this._initSource()
}if(e==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(e==="disabled"&&f&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var e=this.options.appendTo;
if(e){e=e.jquery||e.nodeType?b(e):this.document.find(e).eq(0)
}if(!e){e=this.element.closest(".ui-front")
}if(!e.length){e=this.document[0].body
}return e
},_initSource:function(){var g,e,f=this;
if(b.isArray(this.options.source)){g=this.options.source;
this.source=function(k,h){h(b.ui.autocomplete.filter(g,k.term))
}
}else{if(typeof this.options.source==="string"){e=this.options.source;
this.source=function(k,h){if(f.xhr){f.xhr.abort()
}f.xhr=b.ajax({url:e,data:k,dataType:"json",success:function(l){h(l)
},error:function(){h([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(e){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,e)
}},this.options.delay)
},search:function(f,e){f=f!=null?f:this._value();
this.term=this._value();
if(f.length<this.options.minLength){return this.close(e)
}if(this._trigger("search",e)===false){return
}return this._search(f)
},_search:function(e){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:e},this._response())
},_response:function(){var f=this,e=++d;
return function(g){if(e===d){f.__response(g)
}f.pending--;
if(!f.pending){f.element.removeClass("ui-autocomplete-loading")
}}
},__response:function(e){if(e){e=this._normalize(e)
}this._trigger("response",null,{content:e});
if(!this.options.disabled&&e&&e.length&&!this.cancelSearch){this._suggest(e);
this._trigger("open")
}else{this._close()
}},close:function(e){this.cancelSearch=true;
this._close(e)
},_close:function(e){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",e)
}},_change:function(e){if(this.previous!==this._value()){this._trigger("change",e,{item:this.selectedItem})
}},_normalize:function(e){if(e.length&&e[0].label&&e[0].value){return e
}return b.map(e,function(f){if(typeof f==="string"){return{label:f,value:f}
}return b.extend({label:f.label||f.value,value:f.value||f.label},f)
})
},_suggest:function(e){var f=this.menu.element.empty();
this._renderMenu(f,e);
this.isNewMenu=true;
this.menu.refresh();
f.show();
this._resizeMenu();
f.position(b.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var e=this.menu.element;
e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(f,e){var g=this;
b.each(e,function(h,k){g._renderItemData(f,k)
})
},_renderItemData:function(e,f){return this._renderItem(e,f).data("ui-autocomplete-item",f)
},_renderItem:function(e,f){return b("<li>").append(b("<a>").text(f.label)).appendTo(e)
},_move:function(f,e){if(!this.menu.element.is(":visible")){this.search(null,e);
return
}if(this.menu.isFirstItem()&&/^previous/.test(f)||this.menu.isLastItem()&&/^next/.test(f)){this._value(this.term);
this.menu.blur();
return
}this.menu[f](e)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(f,e){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(f,e);
e.preventDefault()
}}});
b.extend(b.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(g,e){var f=new RegExp(b.ui.autocomplete.escapeRegex(e),"i");
return b.grep(g,function(h){return f.test(h.label||h.value||h)
})
}});
b.widget("ui.autocomplete",b.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(f){var e;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(f&&f.length){e=this.options.messages.results(f.length)
}else{e=this.options.messages.noResults
}this.liveRegion.text(e)
}})
}(jQuery));
(function(g,c){var n,f,b,k,l="ui-button ui-widget ui-state-default ui-corner-all",d="ui-state-hover ui-state-active ",h="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var o=g(this);
setTimeout(function(){o.find(":ui-button").button("refresh")
},1)
},e=function(p){var o=p.name,q=p.form,r=g([]);
if(o){o=o.replace(/'/g,"\\'");
if(q){r=g(q).find("[name='"+o+"']")
}else{r=g("[name='"+o+"']",p.ownerDocument).filter(function(){return !this.form
})
}}return r
};
g.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var r=this,p=this.options,t=this.type==="checkbox"||this.type==="radio",q=!t?"ui-state-active":"",o="ui-state-focus";
if(p.label===null){p.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(l).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(p.disabled){return
}if(this===n){g(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(p.disabled){return
}g(this).removeClass(q)
}).bind("click"+this.eventNamespace,function(u){if(p.disabled){u.preventDefault();
u.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){r.buttonElement.addClass(o)
}).bind("blur"+this.eventNamespace,function(){r.buttonElement.removeClass(o)
});
if(t){this.element.bind("change"+this.eventNamespace,function(){if(k){return
}r.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(u){if(p.disabled){return
}k=false;
f=u.pageX;
b=u.pageY
}).bind("mouseup"+this.eventNamespace,function(u){if(p.disabled){return
}if(f!==u.pageX||b!==u.pageY){k=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(p.disabled||k){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(p.disabled||k){return false
}g(this).addClass("ui-state-active");
r.buttonElement.attr("aria-pressed","true");
var u=r.element[0];
e(u).not(u).map(function(){return g(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(p.disabled){return false
}g(this).addClass("ui-state-active");
n=this;
r.document.one("mouseup",function(){n=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(p.disabled){return false
}g(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(u){if(p.disabled){return false
}if(u.keyCode===g.ui.keyCode.SPACE||u.keyCode===g.ui.keyCode.ENTER){g(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){g(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(u){if(u.keyCode===g.ui.keyCode.SPACE){g(this).click()
}})
}}}this._setOption("disabled",p.disabled);
this._resetButton()
},_determineButtonType:function(){var o,q,p;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){o=this.element.parents().last();
q="label[for='"+this.element.attr("id")+"']";
this.buttonElement=o.find(q);
if(!this.buttonElement.length){o=o.length?o.siblings():this.element.siblings();
this.buttonElement=o.filter(q);
if(!this.buttonElement.length){this.buttonElement=o.find(q)
}}this.element.addClass("ui-helper-hidden-accessible");
p=this.element.is(":checked");
if(p){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",p)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(l+" "+d+" "+h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(o,p){this._super(o,p);
if(o==="disabled"){if(p){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var o=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(o!==this.options.disabled){this._setOption("disabled",o)
}if(this.type==="radio"){e(this.element[0]).each(function(){if(g(this).is(":checked")){g(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{g(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var t=this.buttonElement.removeClass(h),q=g("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),p=this.options.icons,o=p.primary&&p.secondary,r=[];
if(p.primary||p.secondary){if(this.options.text){r.push("ui-button-text-icon"+(o?"s":(p.primary?"-primary":"-secondary")))
}if(p.primary){t.prepend("<span class='ui-button-icon-primary ui-icon "+p.primary+"'></span>")
}if(p.secondary){t.append("<span class='ui-button-icon-secondary ui-icon "+p.secondary+"'></span>")
}if(!this.options.text){r.push(o?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){t.attr("title",g.trim(q))
}}}else{r.push("ui-button-text-only")
}t.addClass(r.join(" "))
}});
g.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(o,p){if(o==="disabled"){this.buttons.button("option",o,p)
}this._super(o,p)
},refresh:function(){var o=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return g(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(o?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(o?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return g(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(f,h){f.extend(f.ui,{datepicker:{version:"1.10.3"}});
var g="datepicker",d;
function c(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
f.extend(this._defaults,this.regional[""]);
this.dpDiv=e(f("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}f.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(k){b(this._defaults,k||{});
return this
},_attachDatepicker:function(n,k){var o,m,l;
o=n.nodeName.toLowerCase();
m=(o==="div"||o==="span");
if(!n.id){this.uuid+=1;
n.id="dp"+this.uuid
}l=this._newInst(f(n),m);
l.settings=f.extend({},k||{});
if(o==="input"){this._connectDatepicker(n,l)
}else{if(m){this._inlineDatepicker(n,l)
}}},_newInst:function(l,k){var m=l[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:m,input:l,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:k,dpDiv:(!k?this.dpDiv:e(f("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(m,l){var k=f(m);
l.append=f([]);
l.trigger=f([]);
if(k.hasClass(this.markerClassName)){return
}this._attachments(k,l);
k.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(l);
f.data(m,g,l);
if(l.settings.disabled){this._disableDatepicker(m)
}},_attachments:function(m,p){var l,o,k,q=this._get(p,"appendText"),n=this._get(p,"isRTL");
if(p.append){p.append.remove()
}if(q){p.append=f("<span class='"+this._appendClass+"'>"+q+"</span>");
m[n?"before":"after"](p.append)
}m.unbind("focus",this._showDatepicker);
if(p.trigger){p.trigger.remove()
}l=this._get(p,"showOn");
if(l==="focus"||l==="both"){m.focus(this._showDatepicker)
}if(l==="button"||l==="both"){o=this._get(p,"buttonText");
k=this._get(p,"buttonImage");
p.trigger=f(this._get(p,"buttonImageOnly")?f("<img/>").addClass(this._triggerClass).attr({src:k,alt:o,title:o}):f("<button type='button'></button>").addClass(this._triggerClass).html(!k?o:f("<img/>").attr({src:k,alt:o,title:o})));
m[n?"before":"after"](p.trigger);
p.trigger.click(function(){if(f.datepicker._datepickerShowing&&f.datepicker._lastInput===m[0]){f.datepicker._hideDatepicker()
}else{if(f.datepicker._datepickerShowing&&f.datepicker._lastInput!==m[0]){f.datepicker._hideDatepicker();
f.datepicker._showDatepicker(m[0])
}else{f.datepicker._showDatepicker(m[0])
}}return false
})
}},_autoSize:function(q){if(this._get(q,"autoSize")&&!q.inline){var n,l,m,p,o=new Date(2009,12-1,20),k=this._get(q,"dateFormat");
if(k.match(/[DM]/)){n=function(r){l=0;
m=0;
for(p=0;
p<r.length;
p++){if(r[p].length>l){l=r[p].length;
m=p
}}return m
};
o.setMonth(n(this._get(q,(k.match(/MM/)?"monthNames":"monthNamesShort"))));
o.setDate(n(this._get(q,(k.match(/DD/)?"dayNames":"dayNamesShort")))+20-o.getDay())
}q.input.attr("size",this._formatDate(q,o).length)
}},_inlineDatepicker:function(l,k){var m=f(l);
if(m.hasClass(this.markerClassName)){return
}m.addClass(this.markerClassName).append(k.dpDiv);
f.data(l,g,k);
this._setDate(k,this._getDefaultDate(k),true);
this._updateDatepicker(k);
this._updateAlternate(k);
if(k.settings.disabled){this._disableDatepicker(l)
}k.dpDiv.css("display","block")
},_dialogDatepicker:function(r,l,p,m,q){var k,v,o,u,t,n=this._dialogInst;
if(!n){this.uuid+=1;
k="dp"+this.uuid;
this._dialogInput=f("<input type='text' id='"+k+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
f("body").append(this._dialogInput);
n=this._dialogInst=this._newInst(this._dialogInput,false);
n.settings={};
f.data(this._dialogInput[0],g,n)
}b(n.settings,m||{});
l=(l&&l.constructor===Date?this._formatDate(n,l):l);
this._dialogInput.val(l);
this._pos=(q?(q.length?q:[q.pageX,q.pageY]):null);
if(!this._pos){v=document.documentElement.clientWidth;
o=document.documentElement.clientHeight;
u=document.documentElement.scrollLeft||document.body.scrollLeft;
t=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(v/2)-100+u,(o/2)-150+t]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
n.settings.onSelect=p;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(f.blockUI){f.blockUI(this.dpDiv)
}f.data(this._dialogInput[0],g,n);
return this
},_destroyDatepicker:function(m){var n,k=f(m),l=f.data(m,g);
if(!k.hasClass(this.markerClassName)){return
}n=m.nodeName.toLowerCase();
f.removeData(m,g);
if(n==="input"){l.append.remove();
l.trigger.remove();
k.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(n==="div"||n==="span"){k.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(n){var o,m,k=f(n),l=f.data(n,g);
if(!k.hasClass(this.markerClassName)){return
}o=n.nodeName.toLowerCase();
if(o==="input"){n.disabled=false;
l.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(o==="div"||o==="span"){m=k.children("."+this._inlineClass);
m.children().removeClass("ui-state-disabled");
m.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=f.map(this._disabledInputs,function(p){return(p===n?null:p)
})
},_disableDatepicker:function(n){var o,m,k=f(n),l=f.data(n,g);
if(!k.hasClass(this.markerClassName)){return
}o=n.nodeName.toLowerCase();
if(o==="input"){n.disabled=true;
l.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(o==="div"||o==="span"){m=k.children("."+this._inlineClass);
m.children().addClass("ui-state-disabled");
m.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=f.map(this._disabledInputs,function(p){return(p===n?null:p)
});
this._disabledInputs[this._disabledInputs.length]=n
},_isDisabledDatepicker:function(l){if(!l){return false
}for(var k=0;
k<this._disabledInputs.length;
k++){if(this._disabledInputs[k]===l){return true
}}return false
},_getInst:function(l){try{return f.data(l,g)
}catch(k){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(q,l,p){var m,k,o,r,n=this._getInst(q);
if(arguments.length===2&&typeof l==="string"){return(l==="defaults"?f.extend({},f.datepicker._defaults):(n?(l==="all"?f.extend({},n.settings):this._get(n,l)):null))
}m=l||{};
if(typeof l==="string"){m={};
m[l]=p
}if(n){if(this._curInst===n){this._hideDatepicker()
}k=this._getDateDatepicker(q,true);
o=this._getMinMaxDate(n,"min");
r=this._getMinMaxDate(n,"max");
b(n.settings,m);
if(o!==null&&m.dateFormat!==h&&m.minDate===h){n.settings.minDate=this._formatDate(n,o)
}if(r!==null&&m.dateFormat!==h&&m.maxDate===h){n.settings.maxDate=this._formatDate(n,r)
}if("disabled" in m){if(m.disabled){this._disableDatepicker(q)
}else{this._enableDatepicker(q)
}}this._attachments(f(q),n);
this._autoSize(n);
this._setDate(n,k);
this._updateAlternate(n);
this._updateDatepicker(n)
}},_changeDatepicker:function(m,k,l){this._optionDatepicker(m,k,l)
},_refreshDatepicker:function(l){var k=this._getInst(l);
if(k){this._updateDatepicker(k)
}},_setDateDatepicker:function(m,k){var l=this._getInst(m);
if(l){this._setDate(l,k);
this._updateDatepicker(l);
this._updateAlternate(l)
}},_getDateDatepicker:function(m,k){var l=this._getInst(m);
if(l&&!l.inline){this._setDateFromField(l,k)
}return(l?this._getDate(l):null)
},_doKeyDown:function(n){var l,k,p,o=f.datepicker._getInst(n.target),q=true,m=o.dpDiv.is(".ui-datepicker-rtl");
o._keyEvent=true;
if(f.datepicker._datepickerShowing){switch(n.keyCode){case 9:f.datepicker._hideDatepicker();
q=false;
break;
case 13:p=f("td."+f.datepicker._dayOverClass+":not(."+f.datepicker._currentClass+")",o.dpDiv);
if(p[0]){f.datepicker._selectDay(n.target,o.selectedMonth,o.selectedYear,p[0])
}l=f.datepicker._get(o,"onSelect");
if(l){k=f.datepicker._formatDate(o);
l.apply((o.input?o.input[0]:null),[k,o])
}else{f.datepicker._hideDatepicker()
}return false;
case 27:f.datepicker._hideDatepicker();
break;
case 33:f.datepicker._adjustDate(n.target,(n.ctrlKey?-f.datepicker._get(o,"stepBigMonths"):-f.datepicker._get(o,"stepMonths")),"M");
break;
case 34:f.datepicker._adjustDate(n.target,(n.ctrlKey?+f.datepicker._get(o,"stepBigMonths"):+f.datepicker._get(o,"stepMonths")),"M");
break;
case 35:if(n.ctrlKey||n.metaKey){f.datepicker._clearDate(n.target)
}q=n.ctrlKey||n.metaKey;
break;
case 36:if(n.ctrlKey||n.metaKey){f.datepicker._gotoToday(n.target)
}q=n.ctrlKey||n.metaKey;
break;
case 37:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,(m?+1:-1),"D")
}q=n.ctrlKey||n.metaKey;
if(n.originalEvent.altKey){f.datepicker._adjustDate(n.target,(n.ctrlKey?-f.datepicker._get(o,"stepBigMonths"):-f.datepicker._get(o,"stepMonths")),"M")
}break;
case 38:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,-7,"D")
}q=n.ctrlKey||n.metaKey;
break;
case 39:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,(m?-1:+1),"D")
}q=n.ctrlKey||n.metaKey;
if(n.originalEvent.altKey){f.datepicker._adjustDate(n.target,(n.ctrlKey?+f.datepicker._get(o,"stepBigMonths"):+f.datepicker._get(o,"stepMonths")),"M")
}break;
case 40:if(n.ctrlKey||n.metaKey){f.datepicker._adjustDate(n.target,+7,"D")
}q=n.ctrlKey||n.metaKey;
break;
default:q=false
}}else{if(n.keyCode===36&&n.ctrlKey){f.datepicker._showDatepicker(this)
}else{q=false
}}if(q){n.preventDefault();
n.stopPropagation()
}},_doKeyPress:function(m){var l,k,n=f.datepicker._getInst(m.target);
if(f.datepicker._get(n,"constrainInput")){l=f.datepicker._possibleChars(f.datepicker._get(n,"dateFormat"));
k=String.fromCharCode(m.charCode==null?m.keyCode:m.charCode);
return m.ctrlKey||m.metaKey||(k<" "||!l||l.indexOf(k)>-1)
}},_doKeyUp:function(m){var k,n=f.datepicker._getInst(m.target);
if(n.input.val()!==n.lastVal){try{k=f.datepicker.parseDate(f.datepicker._get(n,"dateFormat"),(n.input?n.input.val():null),f.datepicker._getFormatConfig(n));
if(k){f.datepicker._setDateFromField(n);
f.datepicker._updateAlternate(n);
f.datepicker._updateDatepicker(n)
}}catch(l){}}return true
},_showDatepicker:function(l){l=l.target||l;
if(l.nodeName.toLowerCase()!=="input"){l=f("input",l.parentNode)[0]
}if(f.datepicker._isDisabledDatepicker(l)||f.datepicker._lastInput===l){return
}var n,r,m,p,q,k,o;
n=f.datepicker._getInst(l);
if(f.datepicker._curInst&&f.datepicker._curInst!==n){f.datepicker._curInst.dpDiv.stop(true,true);
if(n&&f.datepicker._datepickerShowing){f.datepicker._hideDatepicker(f.datepicker._curInst.input[0])
}}r=f.datepicker._get(n,"beforeShow");
m=r?r.apply(l,[l,n]):{};
if(m===false){return
}b(n.settings,m);
n.lastVal=null;
f.datepicker._lastInput=l;
f.datepicker._setDateFromField(n);
if(f.datepicker._inDialog){l.value=""
}if(!f.datepicker._pos){f.datepicker._pos=f.datepicker._findPos(l);
f.datepicker._pos[1]+=l.offsetHeight
}p=false;
f(l).parents().each(function(){p|=f(this).css("position")==="fixed";
return !p
});
q={left:f.datepicker._pos[0],top:f.datepicker._pos[1]};
f.datepicker._pos=null;
n.dpDiv.empty();
n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
f.datepicker._updateDatepicker(n);
q=f.datepicker._checkOffset(n,q,p);
n.dpDiv.css({position:(f.datepicker._inDialog&&f.blockUI?"static":(p?"fixed":"absolute")),display:"none",left:q.left+"px",top:q.top+"px"});
if(!n.inline){k=f.datepicker._get(n,"showAnim");
o=f.datepicker._get(n,"duration");
n.dpDiv.zIndex(f(l).zIndex()+1);
f.datepicker._datepickerShowing=true;
if(f.effects&&f.effects.effect[k]){n.dpDiv.show(k,f.datepicker._get(n,"showOptions"),o)
}else{n.dpDiv[k||"show"](k?o:null)
}if(f.datepicker._shouldFocusInput(n)){n.input.focus()
}f.datepicker._curInst=n
}},_updateDatepicker:function(m){this.maxRows=4;
d=m;
m.dpDiv.empty().append(this._generateHTML(m));
this._attachHandlers(m);
m.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var o,k=this._getNumberOfMonths(m),n=k[1],l=17;
m.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(n>1){m.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",(l*n)+"em")
}m.dpDiv[(k[0]!==1||k[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
m.dpDiv[(this._get(m,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(m===f.datepicker._curInst&&f.datepicker._datepickerShowing&&f.datepicker._shouldFocusInput(m)){m.input.focus()
}if(m.yearshtml){o=m.yearshtml;
setTimeout(function(){if(o===m.yearshtml&&m.yearshtml){m.dpDiv.find("select.ui-datepicker-year:first").replaceWith(m.yearshtml)
}o=m.yearshtml=null
},0)
}},_shouldFocusInput:function(k){return k.input&&k.input.is(":visible")&&!k.input.is(":disabled")&&!k.input.is(":focus")
},_checkOffset:function(p,n,m){var o=p.dpDiv.outerWidth(),t=p.dpDiv.outerHeight(),r=p.input?p.input.outerWidth():0,k=p.input?p.input.outerHeight():0,q=document.documentElement.clientWidth+(m?0:f(document).scrollLeft()),l=document.documentElement.clientHeight+(m?0:f(document).scrollTop());
n.left-=(this._get(p,"isRTL")?(o-r):0);
n.left-=(m&&n.left===p.input.offset().left)?f(document).scrollLeft():0;
n.top-=(m&&n.top===(p.input.offset().top+k))?f(document).scrollTop():0;
n.left-=Math.min(n.left,(n.left+o>q&&q>o)?Math.abs(n.left+o-q):0);
n.top-=Math.min(n.top,(n.top+t>l&&l>t)?Math.abs(t+k):0);
return n
},_findPos:function(n){var k,m=this._getInst(n),l=this._get(m,"isRTL");
while(n&&(n.type==="hidden"||n.nodeType!==1||f.expr.filters.hidden(n))){n=n[l?"previousSibling":"nextSibling"]
}k=f(n).offset();
return[k.left,k.top]
},_hideDatepicker:function(m){var l,p,o,k,n=this._curInst;
if(!n||(m&&n!==f.data(m,g))){return
}if(this._datepickerShowing){l=this._get(n,"showAnim");
p=this._get(n,"duration");
o=function(){f.datepicker._tidyDialog(n)
};
if(f.effects&&(f.effects.effect[l]||f.effects[l])){n.dpDiv.hide(l,f.datepicker._get(n,"showOptions"),p,o)
}else{n.dpDiv[(l==="slideDown"?"slideUp":(l==="fadeIn"?"fadeOut":"hide"))]((l?p:null),o)
}if(!l){o()
}this._datepickerShowing=false;
k=this._get(n,"onClose");
if(k){k.apply((n.input?n.input[0]:null),[(n.input?n.input.val():""),n])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(f.blockUI){f.unblockUI();
f("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(k){k.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(l){if(!f.datepicker._curInst){return
}var k=f(l.target),m=f.datepicker._getInst(k[0]);
if(((k[0].id!==f.datepicker._mainDivId&&k.parents("#"+f.datepicker._mainDivId).length===0&&!k.hasClass(f.datepicker.markerClassName)&&!k.closest("."+f.datepicker._triggerClass).length&&f.datepicker._datepickerShowing&&!(f.datepicker._inDialog&&f.blockUI)))||(k.hasClass(f.datepicker.markerClassName)&&f.datepicker._curInst!==m)){f.datepicker._hideDatepicker()
}},_adjustDate:function(o,n,m){var l=f(o),k=this._getInst(l[0]);
if(this._isDisabledDatepicker(l[0])){return
}this._adjustInstDate(k,n+(m==="M"?this._get(k,"showCurrentAtPos"):0),m);
this._updateDatepicker(k)
},_gotoToday:function(n){var k,m=f(n),l=this._getInst(m[0]);
if(this._get(l,"gotoCurrent")&&l.currentDay){l.selectedDay=l.currentDay;
l.drawMonth=l.selectedMonth=l.currentMonth;
l.drawYear=l.selectedYear=l.currentYear
}else{k=new Date();
l.selectedDay=k.getDate();
l.drawMonth=l.selectedMonth=k.getMonth();
l.drawYear=l.selectedYear=k.getFullYear()
}this._notifyChange(l);
this._adjustDate(m)
},_selectMonthYear:function(o,k,n){var m=f(o),l=this._getInst(m[0]);
l["selected"+(n==="M"?"Month":"Year")]=l["draw"+(n==="M"?"Month":"Year")]=parseInt(k.options[k.selectedIndex].value,10);
this._notifyChange(l);
this._adjustDate(m)
},_selectDay:function(p,n,k,o){var l,m=f(p);
if(f(o).hasClass(this._unselectableClass)||this._isDisabledDatepicker(m[0])){return
}l=this._getInst(m[0]);
l.selectedDay=l.currentDay=f("a",o).html();
l.selectedMonth=l.currentMonth=n;
l.selectedYear=l.currentYear=k;
this._selectDate(p,this._formatDate(l,l.currentDay,l.currentMonth,l.currentYear))
},_clearDate:function(l){var k=f(l);
this._selectDate(k,"")
},_selectDate:function(o,k){var l,n=f(o),m=this._getInst(n[0]);
k=(k!=null?k:this._formatDate(m));
if(m.input){m.input.val(k)
}this._updateAlternate(m);
l=this._get(m,"onSelect");
if(l){l.apply((m.input?m.input[0]:null),[k,m])
}else{if(m.input){m.input.trigger("change")
}}if(m.inline){this._updateDatepicker(m)
}else{this._hideDatepicker();
this._lastInput=m.input[0];
if(typeof(m.input[0])!=="object"){m.input.focus()
}this._lastInput=null
}},_updateAlternate:function(o){var n,m,k,l=this._get(o,"altField");
if(l){n=this._get(o,"altFormat")||this._get(o,"dateFormat");
m=this._getDate(o);
k=this.formatDate(n,m,this._getFormatConfig(o));
f(l).each(function(){f(this).val(k)
})
}},noWeekends:function(l){var k=l.getDay();
return[(k>0&&k<6),""]
},iso8601Week:function(k){var l,m=new Date(k.getTime());
m.setDate(m.getDate()+4-(m.getDay()||7));
l=m.getTime();
m.setMonth(0);
m.setDate(1);
return Math.floor(Math.round((l-m)/86400000)/7)+1
},parseDate:function(B,w,D){if(B==null||w==null){throw"Invalid arguments"
}w=(typeof w==="object"?w.toString():w+"");
if(w===""){return null
}var n,y,l,C=0,q=(D?D.shortYearCutoff:null)||this._defaults.shortYearCutoff,m=(typeof q!=="string"?q:new Date().getFullYear()%100+parseInt(q,10)),u=(D?D.dayNamesShort:null)||this._defaults.dayNamesShort,F=(D?D.dayNames:null)||this._defaults.dayNames,k=(D?D.monthNamesShort:null)||this._defaults.monthNamesShort,o=(D?D.monthNames:null)||this._defaults.monthNames,p=-1,G=-1,A=-1,t=-1,z=false,E,v=function(I){var J=(n+1<B.length&&B.charAt(n+1)===I);
if(J){n++
}return J
},H=function(K){var I=v(K),L=(K==="@"?14:(K==="!"?20:(K==="y"&&I?4:(K==="o"?3:2)))),M=new RegExp("^\\d{1,"+L+"}"),J=w.substring(C).match(M);
if(!J){throw"Missing number at position "+C
}C+=J[0].length;
return parseInt(J[0],10)
},r=function(J,K,M){var I=-1,L=f.map(v(J)?M:K,function(O,N){return[[N,O]]
}).sort(function(O,N){return -(O[1].length-N[1].length)
});
f.each(L,function(O,P){var N=P[1];
if(w.substr(C,N.length).toLowerCase()===N.toLowerCase()){I=P[0];
C+=N.length;
return false
}});
if(I!==-1){return I+1
}else{throw"Unknown name at position "+C
}},x=function(){if(w.charAt(C)!==B.charAt(n)){throw"Unexpected literal at position "+C
}C++
};
for(n=0;
n<B.length;
n++){if(z){if(B.charAt(n)==="'"&&!v("'")){z=false
}else{x()
}}else{switch(B.charAt(n)){case"d":A=H("d");
break;
case"D":r("D",u,F);
break;
case"o":t=H("o");
break;
case"m":G=H("m");
break;
case"M":G=r("M",k,o);
break;
case"y":p=H("y");
break;
case"@":E=new Date(H("@"));
p=E.getFullYear();
G=E.getMonth()+1;
A=E.getDate();
break;
case"!":E=new Date((H("!")-this._ticksTo1970)/10000);
p=E.getFullYear();
G=E.getMonth()+1;
A=E.getDate();
break;
case"'":if(v("'")){x()
}else{z=true
}break;
default:x()
}}}if(C<w.length){l=w.substr(C);
if(!/^\s+/.test(l)){throw"Extra/unparsed characters found in date: "+l
}}if(p===-1){p=new Date().getFullYear()
}else{if(p<100){p+=new Date().getFullYear()-new Date().getFullYear()%100+(p<=m?0:-100)
}}if(t>-1){G=1;
A=t;
do{y=this._getDaysInMonth(p,G-1);
if(A<=y){break
}G++;
A-=y
}while(true)
}E=this._daylightSavingAdjust(new Date(p,G-1,A));
if(E.getFullYear()!==p||E.getMonth()+1!==G||E.getDate()!==A){throw"Invalid date"
}return E
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(u,n,o){if(!n){return""
}var w,x=(o?o.dayNamesShort:null)||this._defaults.dayNamesShort,l=(o?o.dayNames:null)||this._defaults.dayNames,r=(o?o.monthNamesShort:null)||this._defaults.monthNamesShort,p=(o?o.monthNames:null)||this._defaults.monthNames,v=function(y){var z=(w+1<u.length&&u.charAt(w+1)===y);
if(z){w++
}return z
},k=function(A,B,y){var z=""+B;
if(v(A)){while(z.length<y){z="0"+z
}}return z
},q=function(y,A,z,B){return(v(y)?B[A]:z[A])
},m="",t=false;
if(n){for(w=0;
w<u.length;
w++){if(t){if(u.charAt(w)==="'"&&!v("'")){t=false
}else{m+=u.charAt(w)
}}else{switch(u.charAt(w)){case"d":m+=k("d",n.getDate(),2);
break;
case"D":m+=q("D",n.getDay(),x,l);
break;
case"o":m+=k("o",Math.round((new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime()-new Date(n.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":m+=k("m",n.getMonth()+1,2);
break;
case"M":m+=q("M",n.getMonth(),r,p);
break;
case"y":m+=(v("y")?n.getFullYear():(n.getYear()%100<10?"0":"")+n.getYear()%100);
break;
case"@":m+=n.getTime();
break;
case"!":m+=n.getTime()*10000+this._ticksTo1970;
break;
case"'":if(v("'")){m+="'"
}else{t=true
}break;
default:m+=u.charAt(w)
}}}}return m
},_possibleChars:function(o){var n,m="",l=false,k=function(p){var q=(n+1<o.length&&o.charAt(n+1)===p);
if(q){n++
}return q
};
for(n=0;
n<o.length;
n++){if(l){if(o.charAt(n)==="'"&&!k("'")){l=false
}else{m+=o.charAt(n)
}}else{switch(o.charAt(n)){case"d":case"m":case"y":case"@":m+="0123456789";
break;
case"D":case"M":return null;
case"'":if(k("'")){m+="'"
}else{l=true
}break;
default:m+=o.charAt(n)
}}}return m
},_get:function(l,k){return l.settings[k]!==h?l.settings[k]:this._defaults[k]
},_setDateFromField:function(p,m){if(p.input.val()===p.lastVal){return
}var k=this._get(p,"dateFormat"),r=p.lastVal=p.input?p.input.val():null,q=this._getDefaultDate(p),l=q,n=this._getFormatConfig(p);
try{l=this.parseDate(k,r,n)||q
}catch(o){r=(m?"":r)
}p.selectedDay=l.getDate();
p.drawMonth=p.selectedMonth=l.getMonth();
p.drawYear=p.selectedYear=l.getFullYear();
p.currentDay=(r?l.getDate():0);
p.currentMonth=(r?l.getMonth():0);
p.currentYear=(r?l.getFullYear():0);
this._adjustInstDate(p)
},_getDefaultDate:function(k){return this._restrictMinMax(k,this._determineDate(k,this._get(k,"defaultDate"),new Date()))
},_determineDate:function(o,l,p){var n=function(r){var q=new Date();
q.setDate(q.getDate()+r);
return q
},m=function(y){try{return f.datepicker.parseDate(f.datepicker._get(o,"dateFormat"),y,f.datepicker._getFormatConfig(o))
}catch(x){}var r=(y.toLowerCase().match(/^c/)?f.datepicker._getDate(o):null)||new Date(),t=r.getFullYear(),w=r.getMonth(),q=r.getDate(),v=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,u=v.exec(y);
while(u){switch(u[2]||"d"){case"d":case"D":q+=parseInt(u[1],10);
break;
case"w":case"W":q+=parseInt(u[1],10)*7;
break;
case"m":case"M":w+=parseInt(u[1],10);
q=Math.min(q,f.datepicker._getDaysInMonth(t,w));
break;
case"y":case"Y":t+=parseInt(u[1],10);
q=Math.min(q,f.datepicker._getDaysInMonth(t,w));
break
}u=v.exec(y)
}return new Date(t,w,q)
},k=(l==null||l===""?p:(typeof l==="string"?m(l):(typeof l==="number"?(isNaN(l)?p:n(l)):new Date(l.getTime()))));
k=(k&&k.toString()==="Invalid Date"?p:k);
if(k){k.setHours(0);
k.setMinutes(0);
k.setSeconds(0);
k.setMilliseconds(0)
}return this._daylightSavingAdjust(k)
},_daylightSavingAdjust:function(k){if(!k){return null
}k.setHours(k.getHours()>12?k.getHours()+2:0);
return k
},_setDate:function(q,n,p){var k=!n,m=q.selectedMonth,o=q.selectedYear,l=this._restrictMinMax(q,this._determineDate(q,n,new Date()));
q.selectedDay=q.currentDay=l.getDate();
q.drawMonth=q.selectedMonth=q.currentMonth=l.getMonth();
q.drawYear=q.selectedYear=q.currentYear=l.getFullYear();
if((m!==q.selectedMonth||o!==q.selectedYear)&&!p){this._notifyChange(q)
}this._adjustInstDate(q);
if(q.input){q.input.val(k?"":this._formatDate(q))
}},_getDate:function(l){var k=(!l.currentYear||(l.input&&l.input.val()==="")?null:this._daylightSavingAdjust(new Date(l.currentYear,l.currentMonth,l.currentDay)));
return k
},_attachHandlers:function(l){var k=this._get(l,"stepMonths"),m="#"+l.id.replace(/\\\\/g,"\\");
l.dpDiv.find("[data-handler]").map(function(){var n={prev:function(){f.datepicker._adjustDate(m,-k,"M")
},next:function(){f.datepicker._adjustDate(m,+k,"M")
},hide:function(){f.datepicker._hideDatepicker()
},today:function(){f.datepicker._gotoToday(m)
},selectDay:function(){f.datepicker._selectDay(m,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){f.datepicker._selectMonthYear(m,this,"M");
return false
},selectYear:function(){f.datepicker._selectMonthYear(m,this,"Y");
return false
}};
f(this).bind(this.getAttribute("data-event"),n[this.getAttribute("data-handler")])
})
},_generateHTML:function(ab){var E,D,W,O,o,af,Z,S,ai,M,am,w,y,x,l,ae,u,H,ah,U,an,G,L,v,p,X,Q,T,R,t,J,z,aa,ad,n,ag,ak,P,A,ac=new Date(),F=this._daylightSavingAdjust(new Date(ac.getFullYear(),ac.getMonth(),ac.getDate())),aj=this._get(ab,"isRTL"),al=this._get(ab,"showButtonPanel"),V=this._get(ab,"hideIfNoPrevNext"),K=this._get(ab,"navigationAsDateFormat"),B=this._getNumberOfMonths(ab),r=this._get(ab,"showCurrentAtPos"),N=this._get(ab,"stepMonths"),I=(B[0]!==1||B[1]!==1),m=this._daylightSavingAdjust((!ab.currentDay?new Date(9999,9,9):new Date(ab.currentYear,ab.currentMonth,ab.currentDay))),q=this._getMinMaxDate(ab,"min"),C=this._getMinMaxDate(ab,"max"),k=ab.drawMonth-r,Y=ab.drawYear;
if(k<0){k+=12;
Y--
}if(C){E=this._daylightSavingAdjust(new Date(C.getFullYear(),C.getMonth()-(B[0]*B[1])+1,C.getDate()));
E=(q&&E<q?q:E);
while(this._daylightSavingAdjust(new Date(Y,k,1))>E){k--;
if(k<0){k=11;
Y--
}}}ab.drawMonth=k;
ab.drawYear=Y;
D=this._get(ab,"prevText");
D=(!K?D:this.formatDate(D,this._daylightSavingAdjust(new Date(Y,k-N,1)),this._getFormatConfig(ab)));
W=(this._canAdjustMonth(ab,-1,Y,k)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+D+"'><span class='ui-icon ui-icon-circle-triangle-"+(aj?"e":"w")+"'>"+D+"</span></a>":(V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+D+"'><span class='ui-icon ui-icon-circle-triangle-"+(aj?"e":"w")+"'>"+D+"</span></a>"));
O=this._get(ab,"nextText");
O=(!K?O:this.formatDate(O,this._daylightSavingAdjust(new Date(Y,k+N,1)),this._getFormatConfig(ab)));
o=(this._canAdjustMonth(ab,+1,Y,k)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+O+"'><span class='ui-icon ui-icon-circle-triangle-"+(aj?"w":"e")+"'>"+O+"</span></a>":(V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+O+"'><span class='ui-icon ui-icon-circle-triangle-"+(aj?"w":"e")+"'>"+O+"</span></a>"));
af=this._get(ab,"currentText");
Z=(this._get(ab,"gotoCurrent")&&ab.currentDay?m:F);
af=(!K?af:this.formatDate(af,Z,this._getFormatConfig(ab)));
S=(!ab.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(ab,"closeText")+"</button>":"");
ai=(al)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(aj?S:"")+(this._isInRange(ab,Z)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+af+"</button>":"")+(aj?"":S)+"</div>":"";
M=parseInt(this._get(ab,"firstDay"),10);
M=(isNaN(M)?0:M);
am=this._get(ab,"showWeek");
w=this._get(ab,"dayNames");
y=this._get(ab,"dayNamesMin");
x=this._get(ab,"monthNames");
l=this._get(ab,"monthNamesShort");
ae=this._get(ab,"beforeShowDay");
u=this._get(ab,"showOtherMonths");
H=this._get(ab,"selectOtherMonths");
ah=this._getDefaultDate(ab);
U="";
an;
for(G=0;
G<B[0];
G++){L="";
this.maxRows=4;
for(v=0;
v<B[1];
v++){p=this._daylightSavingAdjust(new Date(Y,k,ab.selectedDay));
X=" ui-corner-all";
Q="";
if(I){Q+="<div class='ui-datepicker-group";
if(B[1]>1){switch(v){case 0:Q+=" ui-datepicker-group-first";
X=" ui-corner-"+(aj?"right":"left");
break;
case B[1]-1:Q+=" ui-datepicker-group-last";
X=" ui-corner-"+(aj?"left":"right");
break;
default:Q+=" ui-datepicker-group-middle";
X="";
break
}}Q+="'>"
}Q+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+X+"'>"+(/all|left/.test(X)&&G===0?(aj?o:W):"")+(/all|right/.test(X)&&G===0?(aj?W:o):"")+this._generateMonthYearHeader(ab,k,Y,q,C,G>0||v>0,x,l)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
T=(am?"<th class='ui-datepicker-week-col'>"+this._get(ab,"weekHeader")+"</th>":"");
for(an=0;
an<7;
an++){R=(an+M)%7;
T+="<th"+((an+M+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+w[R]+"'>"+y[R]+"</span></th>"
}Q+=T+"</tr></thead><tbody>";
t=this._getDaysInMonth(Y,k);
if(Y===ab.selectedYear&&k===ab.selectedMonth){ab.selectedDay=Math.min(ab.selectedDay,t)
}J=(this._getFirstDayOfMonth(Y,k)-M+7)%7;
z=Math.ceil((J+t)/7);
aa=(I?this.maxRows>z?this.maxRows:z:z);
this.maxRows=aa;
ad=this._daylightSavingAdjust(new Date(Y,k,1-J));
for(n=0;
n<aa;
n++){Q+="<tr>";
ag=(!am?"":"<td class='ui-datepicker-week-col'>"+this._get(ab,"calculateWeek")(ad)+"</td>");
for(an=0;
an<7;
an++){ak=(ae?ae.apply((ab.input?ab.input[0]:null),[ad]):[true,""]);
P=(ad.getMonth()!==k);
A=(P&&!H)||!ak[0]||(q&&ad<q)||(C&&ad>C);
ag+="<td class='"+((an+M+6)%7>=5?" ui-datepicker-week-end":"")+(P?" ui-datepicker-other-month":"")+((ad.getTime()===p.getTime()&&k===ab.selectedMonth&&ab._keyEvent)||(ah.getTime()===ad.getTime()&&ah.getTime()===p.getTime())?" "+this._dayOverClass:"")+(A?" "+this._unselectableClass+" ui-state-disabled":"")+(P&&!u?"":" "+ak[1]+(ad.getTime()===m.getTime()?" "+this._currentClass:"")+(ad.getTime()===F.getTime()?" ui-datepicker-today":""))+"'"+((!P||u)&&ak[2]?" title='"+ak[2].replace(/'/g,"&#39;")+"'":"")+(A?"":" data-handler='selectDay' data-event='click' data-month='"+ad.getMonth()+"' data-year='"+ad.getFullYear()+"'")+">"+(P&&!u?"&#xa0;":(A?"<span class='ui-state-default'>"+ad.getDate()+"</span>":"<a class='ui-state-default"+(ad.getTime()===F.getTime()?" ui-state-highlight":"")+(ad.getTime()===m.getTime()?" ui-state-active":"")+(P?" ui-priority-secondary":"")+"' href='#'>"+ad.getDate()+"</a>"))+"</td>";
ad.setDate(ad.getDate()+1);
ad=this._daylightSavingAdjust(ad)
}Q+=ag+"</tr>"
}k++;
if(k>11){k=0;
Y++
}Q+="</tbody></table>"+(I?"</div>"+((B[0]>0&&v===B[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
L+=Q
}U+=L
}U+=ai;
ab._keyEvent=false;
return U
},_generateMonthYearHeader:function(o,m,x,q,v,y,t,k){var C,l,D,A,p,z,w,r,n=this._get(o,"changeMonth"),E=this._get(o,"changeYear"),F=this._get(o,"showMonthAfterYear"),u="<div class='ui-datepicker-title'>",B="";
if(y||!n){B+="<span class='ui-datepicker-month'>"+t[m]+"</span>"
}else{C=(q&&q.getFullYear()===x);
l=(v&&v.getFullYear()===x);
B+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(D=0;
D<12;
D++){if((!C||D>=q.getMonth())&&(!l||D<=v.getMonth())){B+="<option value='"+D+"'"+(D===m?" selected='selected'":"")+">"+k[D]+"</option>"
}}B+="</select>"
}if(!F){u+=B+(y||!(n&&E)?"&#xa0;":"")
}if(!o.yearshtml){o.yearshtml="";
if(y||!E){u+="<span class='ui-datepicker-year'>"+x+"</span>"
}else{A=this._get(o,"yearRange").split(":");
p=new Date().getFullYear();
z=function(H){var G=(H.match(/c[+\-].*/)?x+parseInt(H.substring(1),10):(H.match(/[+\-].*/)?p+parseInt(H,10):parseInt(H,10)));
return(isNaN(G)?p:G)
};
w=z(A[0]);
r=Math.max(w,z(A[1]||""));
w=(q?Math.max(w,q.getFullYear()):w);
r=(v?Math.min(r,v.getFullYear()):r);
o.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
w<=r;
w++){o.yearshtml+="<option value='"+w+"'"+(w===x?" selected='selected'":"")+">"+w+"</option>"
}o.yearshtml+="</select>";
u+=o.yearshtml;
o.yearshtml=null
}}u+=this._get(o,"yearSuffix");
if(F){u+=(y||!(n&&E)?"&#xa0;":"")+B
}u+="</div>";
return u
},_adjustInstDate:function(n,q,p){var m=n.drawYear+(p==="Y"?q:0),o=n.drawMonth+(p==="M"?q:0),k=Math.min(n.selectedDay,this._getDaysInMonth(m,o))+(p==="D"?q:0),l=this._restrictMinMax(n,this._daylightSavingAdjust(new Date(m,o,k)));
n.selectedDay=l.getDate();
n.drawMonth=n.selectedMonth=l.getMonth();
n.drawYear=n.selectedYear=l.getFullYear();
if(p==="M"||p==="Y"){this._notifyChange(n)
}},_restrictMinMax:function(n,l){var m=this._getMinMaxDate(n,"min"),o=this._getMinMaxDate(n,"max"),k=(m&&l<m?m:l);
return(o&&k>o?o:k)
},_notifyChange:function(l){var k=this._get(l,"onChangeMonthYear");
if(k){k.apply((l.input?l.input[0]:null),[l.selectedYear,l.selectedMonth+1,l])
}},_getNumberOfMonths:function(l){var k=this._get(l,"numberOfMonths");
return(k==null?[1,1]:(typeof k==="number"?[1,k]:k))
},_getMinMaxDate:function(l,k){return this._determineDate(l,this._get(l,k+"Date"),null)
},_getDaysInMonth:function(k,l){return 32-this._daylightSavingAdjust(new Date(k,l,32)).getDate()
},_getFirstDayOfMonth:function(k,l){return new Date(k,l,1).getDay()
},_canAdjustMonth:function(n,p,m,o){var k=this._getNumberOfMonths(n),l=this._daylightSavingAdjust(new Date(m,o+(p<0?p:k[0]*k[1]),1));
if(p<0){l.setDate(this._getDaysInMonth(l.getFullYear(),l.getMonth()))
}return this._isInRange(n,l)
},_isInRange:function(o,m){var l,r,n=this._getMinMaxDate(o,"min"),k=this._getMinMaxDate(o,"max"),t=null,p=null,q=this._get(o,"yearRange");
if(q){l=q.split(":");
r=new Date().getFullYear();
t=parseInt(l[0],10);
p=parseInt(l[1],10);
if(l[0].match(/[+\-].*/)){t+=r
}if(l[1].match(/[+\-].*/)){p+=r
}}return((!n||m.getTime()>=n.getTime())&&(!k||m.getTime()<=k.getTime())&&(!t||m.getFullYear()>=t)&&(!p||m.getFullYear()<=p))
},_getFormatConfig:function(k){var l=this._get(k,"shortYearCutoff");
l=(typeof l!=="string"?l:new Date().getFullYear()%100+parseInt(l,10));
return{shortYearCutoff:l,dayNamesShort:this._get(k,"dayNamesShort"),dayNames:this._get(k,"dayNames"),monthNamesShort:this._get(k,"monthNamesShort"),monthNames:this._get(k,"monthNames")}
},_formatDate:function(n,k,o,m){if(!k){n.currentDay=n.selectedDay;
n.currentMonth=n.selectedMonth;
n.currentYear=n.selectedYear
}var l=(k?(typeof k==="object"?k:this._daylightSavingAdjust(new Date(m,o,k))):this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay)));
return this.formatDate(this._get(n,"dateFormat"),l,this._getFormatConfig(n))
}});
function e(l){var k="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return l.delegate(k,"mouseout",function(){f(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){f(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){f(this).removeClass("ui-datepicker-next-hover")
}}).delegate(k,"mouseover",function(){if(!f.datepicker._isDisabledDatepicker(d.inline?l.parent()[0]:d.input[0])){f(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
f(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){f(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){f(this).addClass("ui-datepicker-next-hover")
}}})
}function b(m,l){f.extend(m,l);
for(var k in l){if(l[k]==null){m[k]=l[k]
}}return m
}f.fn.datepicker=function(l){if(!this.length){return this
}if(!f.datepicker.initialized){f(document).mousedown(f.datepicker._checkExternalClick);
f.datepicker.initialized=true
}if(f("#"+f.datepicker._mainDivId).length===0){f("body").append(f.datepicker.dpDiv)
}var k=Array.prototype.slice.call(arguments,1);
if(typeof l==="string"&&(l==="isDisabled"||l==="getDate"||l==="widget")){return f.datepicker["_"+l+"Datepicker"].apply(f.datepicker,[this[0]].concat(k))
}if(l==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return f.datepicker["_"+l+"Datepicker"].apply(f.datepicker,[this[0]].concat(k))
}return this.each(function(){typeof l==="string"?f.datepicker["_"+l+"Datepicker"].apply(f.datepicker,[this].concat(k)):f.datepicker._attachDatepicker(this,l)
})
};
f.datepicker=new c();
f.datepicker.initialized=false;
f.datepicker.uuid=new Date().getTime();
f.datepicker.version="1.10.3"
})(jQuery);
(function(d,e){var b={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},c={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
d.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(g){var f=d(this).css(g).offset().top;
if(f<0){d(this).css("top",g.top-f)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&d.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&d.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var f=this.options.appendTo;
if(f&&(f.jquery||f.nodeType)){return d(f)
}return this.document.find(f||"body").eq(0)
},_destroy:function(){var g,f=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}g=f.parent.children().eq(f.index);
if(g.length&&g[0]!==this.element[0]){g.before(this.element)
}else{f.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:d.noop,enable:d.noop,close:function(g){var f=this;
if(!this._isOpen||this._trigger("beforeClose",g)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){d(this.document[0].activeElement).blur()
}this._hide(this.uiDialog,this.options.hide,function(){f._trigger("close",g)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(h,f){var g=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(g&&!f){this._trigger("focus",h)
}return g
},open:function(){var f=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=d(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){f._focusTabbable();
f._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var f=this.element.find("[autofocus]");
if(!f.length){f=this.element.find(":tabbable")
}if(!f.length){f=this.uiDialogButtonPane.find(":tabbable")
}if(!f.length){f=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!f.length){f=this.uiDialog
}f.eq(0).focus()
},_keepFocus:function(f){function g(){var k=this.document[0].activeElement,h=this.uiDialog[0]===k||d.contains(this.uiDialog[0],k);
if(!h){this._focusTabbable()
}}f.preventDefault();
g.call(this);
this._delay(g)
},_createWrapper:function(){this.uiDialog=d("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(h){if(this.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===d.ui.keyCode.ESCAPE){h.preventDefault();
this.close(h);
return
}if(h.keyCode!==d.ui.keyCode.TAB){return
}var g=this.uiDialog.find(":tabbable"),k=g.filter(":first"),f=g.filter(":last");
if((h.target===f[0]||h.target===this.uiDialog[0])&&!h.shiftKey){k.focus(1);
h.preventDefault()
}else{if((h.target===k[0]||h.target===this.uiDialog[0])&&h.shiftKey){f.focus(1);
h.preventDefault()
}}},mousedown:function(f){if(this._moveToTop(f)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var f;
this.uiDialogTitlebar=d("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(g){if(!d(g.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=d("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(g){g.preventDefault();
this.close(g)
}});
f=d("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(f);
this.uiDialog.attr({"aria-labelledby":f.attr("id")})
},_title:function(f){if(!this.options.title){f.html("&#160;")
}f.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=d("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=d("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var g=this,f=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(d.isEmptyObject(f)||(d.isArray(f)&&!f.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}d.each(f,function(h,k){var l,m;
k=d.isFunction(k)?{click:k,text:h}:k;
k=d.extend({type:"button"},k);
l=k.click;
k.click=function(){l.apply(g.element[0],arguments)
};
m={icons:k.icons,text:k.showText};
delete k.icons;
delete k.showText;
d("<button></button>",k).button(m).appendTo(g.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var h=this,g=this.options;
function f(k){return{position:k.position,offset:k.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(k,l){d(this).addClass("ui-dialog-dragging");
h._blockFrames();
h._trigger("dragStart",k,f(l))
},drag:function(k,l){h._trigger("drag",k,f(l))
},stop:function(k,l){g.position=[l.position.left-h.document.scrollLeft(),l.position.top-h.document.scrollTop()];
d(this).removeClass("ui-dialog-dragging");
h._unblockFrames();
h._trigger("dragStop",k,f(l))
}})
},_makeResizable:function(){var m=this,k=this.options,l=k.resizable,f=this.uiDialog.css("position"),h=typeof l==="string"?l:"n,e,s,w,se,sw,ne,nw";
function g(n){return{originalPosition:n.originalPosition,originalSize:n.originalSize,position:n.position,size:n.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:k.maxWidth,maxHeight:k.maxHeight,minWidth:k.minWidth,minHeight:this._minHeight(),handles:h,start:function(n,o){d(this).addClass("ui-dialog-resizing");
m._blockFrames();
m._trigger("resizeStart",n,g(o))
},resize:function(n,o){m._trigger("resize",n,g(o))
},stop:function(n,o){k.height=d(this).height();
k.width=d(this).width();
d(this).removeClass("ui-dialog-resizing");
m._unblockFrames();
m._trigger("resizeStop",n,g(o))
}}).css("position",f)
},_minHeight:function(){var f=this.options;
return f.height==="auto"?f.minHeight:Math.min(f.minHeight,f.height)
},_position:function(){var f=this.uiDialog.is(":visible");
if(!f){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!f){this.uiDialog.hide()
}},_setOptions:function(h){var k=this,g=false,f={};
d.each(h,function(l,m){k._setOption(l,m);
if(l in b){g=true
}if(l in c){f[l]=m
}});
if(g){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",f)
}},_setOption:function(h,k){var g,l,f=this.uiDialog;
if(h==="dialogClass"){f.removeClass(this.options.dialogClass).addClass(k)
}if(h==="disabled"){return
}this._super(h,k);
if(h==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(h==="buttons"){this._createButtons()
}if(h==="closeText"){this.uiDialogTitlebarClose.button({label:""+k})
}if(h==="draggable"){g=f.is(":data(ui-draggable)");
if(g&&!k){f.draggable("destroy")
}if(!g&&k){this._makeDraggable()
}}if(h==="position"){this._position()
}if(h==="resizable"){l=f.is(":data(ui-resizable)");
if(l&&!k){f.resizable("destroy")
}if(l&&typeof k==="string"){f.resizable("option","handles",k)
}if(!l&&k!==false){this._makeResizable()
}}if(h==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var f,h,k,g=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(g.minWidth>g.width){g.width=g.minWidth
}f=this.uiDialog.css({height:"auto",width:g.width}).outerHeight();
h=Math.max(0,g.minHeight-f);
k=typeof g.maxHeight==="number"?Math.max(0,g.maxHeight-f):"none";
if(g.height==="auto"){this.element.css({minHeight:h,maxHeight:k,height:"auto"})
}else{this.element.height(Math.max(0,g.height-f))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var f=d(this);
return d("<div>").css({position:"absolute",width:f.outerWidth(),height:f.outerHeight()}).appendTo(f.parent()).offset(f.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(f){if(d(f.target).closest(".ui-dialog").length){return true
}return !!d(f.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var g=this,f=this.widgetFullName;
if(!d.ui.dialog.overlayInstances){this._delay(function(){if(d.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(h){if(!g._allowInteraction(h)){h.preventDefault();
d(".ui-dialog:visible:last .ui-dialog-content").data(f)._focusTabbable()
}})
}})
}this.overlay=d("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
d.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){d.ui.dialog.overlayInstances--;
if(!d.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
d.ui.dialog.overlayInstances=0;
if(d.uiBackCompat!==false){d.widget("ui.dialog",d.ui.dialog,{_position:function(){var g=this.options.position,h=[],k=[0,0],f;
if(g){if(typeof g==="string"||(typeof g==="object"&&"0" in g)){h=g.split?g.split(" "):[g[0],g[1]];
if(h.length===1){h[1]=h[0]
}d.each(["left","top"],function(m,l){if(+h[m]===h[m]){k[m]=h[m];
h[m]=l
}});
g={my:h[0]+(k[0]<0?k[0]:"+"+k[0])+" "+h[1]+(k[1]<0?k[1]:"+"+k[1]),at:h.join(" ")}
}g=d.extend({},d.ui.dialog.prototype.options.position,g)
}else{g=d.ui.dialog.prototype.options.position
}f=this.uiDialog.is(":visible");
if(!f){this.uiDialog.show()
}this.uiDialog.position(g);
if(!f){this.uiDialog.hide()
}}})
}}(jQuery));
(function(c,e){var b=/up|down|vertical/,d=/up|left|vertical|horizontal/;
c.effects.effect.blind=function(h,q){var k=c(this),u=["position","top","bottom","left","right","height","width"],r=c.effects.setMode(k,h.mode||"hide"),v=h.direction||"up",m=b.test(v),l=m?"height":"width",t=m?"top":"left",x=d.test(v),p={},w=r==="show",g,f,n;
if(k.parent().is(".ui-effects-wrapper")){c.effects.save(k.parent(),u)
}else{c.effects.save(k,u)
}k.show();
g=c.effects.createWrapper(k).css({overflow:"hidden"});
f=g[l]();
n=parseFloat(g.css(t))||0;
p[l]=w?f:0;
if(!x){k.css(m?"bottom":"right",0).css(m?"top":"left","auto").css({position:"absolute"});
p[t]=w?n:f+n
}if(w){g.css(l,0);
if(!x){g.css(t,n+f)
}}g.animate(p,{duration:h.duration,easing:h.easing,queue:false,complete:function(){if(r==="hide"){k.hide()
}c.effects.restore(k,u);
c.effects.removeWrapper(k);
q()
}})
}
})(jQuery);
(function(b,c){b.effects.effect.bounce=function(p,n){var d=b(this),e=["position","top","bottom","left","right","height","width"],m=b.effects.setMode(d,p.mode||"effect"),l=m==="hide",y=m==="show",z=p.direction||"up",f=p.distance,k=p.times||5,A=k*2+(y||l?1:0),x=p.duration/A,r=p.easing,g=(z==="up"||z==="down")?"top":"left",q=(z==="up"||z==="left"),w,h,v,t=d.queue(),u=t.length;
if(y||l){e.push("opacity")
}b.effects.save(d,e);
d.show();
b.effects.createWrapper(d);
if(!f){f=d[g==="top"?"outerHeight":"outerWidth"]()/3
}if(y){v={opacity:1};
v[g]=0;
d.css("opacity",0).css(g,q?-f*2:f*2).animate(v,x,r)
}if(l){f=f/Math.pow(2,k-1)
}v={};
v[g]=0;
for(w=0;
w<k;
w++){h={};
h[g]=(q?"-=":"+=")+f;
d.animate(h,x,r).animate(v,x,r);
f=l?f*2:f/2
}if(l){h={opacity:0};
h[g]=(q?"-=":"+=")+f;
d.animate(h,x,r)
}d.queue(function(){if(l){d.hide()
}b.effects.restore(d,e);
b.effects.removeWrapper(d);
n()
});
if(u>1){t.splice.apply(t,[1,0].concat(t.splice(u,A+1)))
}d.dequeue()
}
})(jQuery);
(function(b,c){b.effects.effect.clip=function(g,l){var h=b(this),q=["position","top","bottom","left","right","height","width"],p=b.effects.setMode(h,g.mode||"hide"),t=p==="show",r=g.direction||"vertical",n=r==="vertical",u=n?"height":"width",m=n?"top":"left",k={},e,f,d;
b.effects.save(h,q);
h.show();
e=b.effects.createWrapper(h).css({overflow:"hidden"});
f=(h[0].tagName==="IMG")?e:h;
d=f[u]();
if(t){f.css(u,0);
f.css(m,d/2)
}k[u]=t?d:0;
k[m]=t?0:d/2;
f.animate(k,{queue:false,duration:g.duration,easing:g.easing,complete:function(){if(!t){h.hide()
}b.effects.restore(h,q);
b.effects.removeWrapper(h);
l()
}})
}
})(jQuery);
(function(b,c){b.effects.effect.drop=function(e,k){var f=b(this),m=["position","top","bottom","left","right","opacity","height","width"],l=b.effects.setMode(f,e.mode||"hide"),p=l==="show",n=e.direction||"left",g=(n==="up"||n==="down")?"top":"left",q=(n==="up"||n==="left")?"pos":"neg",h={opacity:p?1:0},d;
b.effects.save(f,m);
f.show();
b.effects.createWrapper(f);
d=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true)/2;
if(p){f.css("opacity",0).css(g,q==="pos"?-d:d)
}h[g]=(p?(q==="pos"?"+=":"-="):(q==="pos"?"-=":"+="))+d;
f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(l==="hide"){f.hide()
}b.effects.restore(f,m);
b.effects.removeWrapper(f);
k()
}})
}
})(jQuery);
(function(b,c){b.effects.effect.explode=function(u,t){var l=u.pieces?Math.round(Math.sqrt(u.pieces)):3,e=l,d=b(this),n=b.effects.setMode(d,u.mode||"hide"),y=n==="show",h=d.show().css("visibility","hidden").offset(),v=Math.ceil(d.outerWidth()/e),r=Math.ceil(d.outerHeight()/l),k=[],x,w,f,q,p,m;
function z(){k.push(this);
if(k.length===l*e){g()
}}for(x=0;
x<l;
x++){q=h.top+x*r;
m=x-(l-1)/2;
for(w=0;
w<e;
w++){f=h.left+w*v;
p=w-(e-1)/2;
d.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-w*v,top:-x*r}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:r,left:f+(y?p*v:0),top:q+(y?m*r:0),opacity:y?0:1}).animate({left:f+(y?0:p*v),top:q+(y?0:m*r),opacity:y?1:0},u.duration||500,u.easing,z)
}}function g(){d.css({visibility:"visible"});
b(k).remove();
if(!y){d.hide()
}t()
}}
})(jQuery);
(function(b,c){b.effects.effect.fade=function(g,d){var e=b(this),f=b.effects.setMode(e,g.mode||"toggle");
e.animate({opacity:f},{queue:false,duration:g.duration,easing:g.easing,complete:d})
}
})(jQuery);
(function(b,c){b.effects.effect.fold=function(f,l){var g=b(this),r=["position","top","bottom","left","right","height","width"],n=b.effects.setMode(g,f.mode||"hide"),v=n==="show",p=n==="hide",x=f.size||15,q=/([0-9]+)%/.exec(x),w=!!f.horizFirst,m=v!==w,h=m?["width","height"]:["height","width"],k=f.duration/2,e,d,u={},t={};
b.effects.save(g,r);
g.show();
e=b.effects.createWrapper(g).css({overflow:"hidden"});
d=m?[e.width(),e.height()]:[e.height(),e.width()];
if(q){x=parseInt(q[1],10)/100*d[p?0:1]
}if(v){e.css(w?{height:0,width:x}:{height:x,width:0})
}u[h[0]]=v?d[0]:x;
t[h[1]]=v?d[1]:0;
e.animate(u,k,f.easing).animate(t,k,f.easing,function(){if(p){g.hide()
}b.effects.restore(g,r);
b.effects.removeWrapper(g);
l()
})
}
})(jQuery);
(function(b,c){b.effects.effect.highlight=function(k,d){var f=b(this),e=["backgroundImage","backgroundColor","opacity"],h=b.effects.setMode(f,k.mode||"show"),g={backgroundColor:f.css("backgroundColor")};
if(h==="hide"){g.opacity=0
}b.effects.save(f,e);
f.show().css({backgroundImage:"none",backgroundColor:k.color||"#ffff99"}).animate(g,{queue:false,duration:k.duration,easing:k.easing,complete:function(){if(h==="hide"){f.hide()
}b.effects.restore(f,e);
d()
}})
}
})(jQuery);
(function(b,c){b.effects.effect.pulsate=function(d,h){var f=b(this),m=b.effects.setMode(f,d.mode||"show"),r=m==="show",n=m==="hide",t=(r||m==="hide"),p=((d.times||5)*2)+(t?1:0),g=d.duration/p,q=0,l=f.queue(),e=l.length,k;
if(r||!f.is(":visible")){f.css("opacity",0).show();
q=1
}for(k=1;
k<p;
k++){f.animate({opacity:q},g,d.easing);
q=1-q
}f.animate({opacity:q},g,d.easing);
f.queue(function(){if(n){f.hide()
}h()
});
if(e>1){l.splice.apply(l,[1,0].concat(l.splice(e,p+1)))
}f.dequeue()
}
})(jQuery);
(function(b,c){b.effects.effect.puff=function(m,d){var k=b(this),l=b.effects.setMode(k,m.mode||"hide"),g=l==="hide",h=parseInt(m.percent,10)||150,f=h/100,e={height:k.height(),width:k.width(),outerHeight:k.outerHeight(),outerWidth:k.outerWidth()};
b.extend(m,{effect:"scale",queue:false,fade:true,mode:l,complete:d,percent:g?h:100,from:g?e:{height:e.height*f,width:e.width*f,outerHeight:e.outerHeight*f,outerWidth:e.outerWidth*f}});
k.effect(m)
};
b.effects.effect.scale=function(d,g){var e=b(this),p=b.extend(true,{},d),h=b.effects.setMode(e,d.mode||"effect"),k=parseInt(d.percent,10)||(parseInt(d.percent,10)===0?0:(h==="hide"?0:100)),m=d.direction||"both",n=d.origin,f={height:e.height(),width:e.width(),outerHeight:e.outerHeight(),outerWidth:e.outerWidth()},l={y:m!=="horizontal"?(k/100):1,x:m!=="vertical"?(k/100):1};
p.effect="size";
p.queue=false;
p.complete=g;
if(h!=="effect"){p.origin=n||["middle","center"];
p.restore=true
}p.from=d.from||(h==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f);
p.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x};
if(p.fade){if(h==="show"){p.from.opacity=0;
p.to.opacity=1
}if(h==="hide"){p.from.opacity=1;
p.to.opacity=0
}}e.effect(p)
};
b.effects.effect.size=function(p,n){var u,l,m,d=b(this),t=["position","top","bottom","left","right","width","height","overflow","opacity"],r=["position","top","bottom","left","right","overflow","opacity"],q=["width","height","overflow"],h=["fontSize"],w=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],e=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],k=b.effects.setMode(d,p.mode||"effect"),v=p.restore||k!=="effect",z=p.scale||"both",x=p.origin||["middle","center"],y=d.css("position"),f=v?t:r,g={height:0,width:0,outerHeight:0,outerWidth:0};
if(k==="show"){d.show()
}u={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()};
if(p.mode==="toggle"&&k==="show"){d.from=p.to||g;
d.to=p.from||u
}else{d.from=p.from||(k==="show"?g:u);
d.to=p.to||(k==="hide"?g:u)
}m={from:{y:d.from.height/u.height,x:d.from.width/u.width},to:{y:d.to.height/u.height,x:d.to.width/u.width}};
if(z==="box"||z==="both"){if(m.from.y!==m.to.y){f=f.concat(w);
d.from=b.effects.setTransition(d,w,m.from.y,d.from);
d.to=b.effects.setTransition(d,w,m.to.y,d.to)
}if(m.from.x!==m.to.x){f=f.concat(e);
d.from=b.effects.setTransition(d,e,m.from.x,d.from);
d.to=b.effects.setTransition(d,e,m.to.x,d.to)
}}if(z==="content"||z==="both"){if(m.from.y!==m.to.y){f=f.concat(h).concat(q);
d.from=b.effects.setTransition(d,h,m.from.y,d.from);
d.to=b.effects.setTransition(d,h,m.to.y,d.to)
}}b.effects.save(d,f);
d.show();
b.effects.createWrapper(d);
d.css("overflow","hidden").css(d.from);
if(x){l=b.effects.getBaseline(x,u);
d.from.top=(u.outerHeight-d.outerHeight())*l.y;
d.from.left=(u.outerWidth-d.outerWidth())*l.x;
d.to.top=(u.outerHeight-d.to.outerHeight)*l.y;
d.to.left=(u.outerWidth-d.to.outerWidth)*l.x
}d.css(d.from);
if(z==="content"||z==="both"){w=w.concat(["marginTop","marginBottom"]).concat(h);
e=e.concat(["marginLeft","marginRight"]);
q=t.concat(w).concat(e);
d.find("*[width]").each(function(){var A=b(this),o={height:A.height(),width:A.width(),outerHeight:A.outerHeight(),outerWidth:A.outerWidth()};
if(v){b.effects.save(A,q)
}A.from={height:o.height*m.from.y,width:o.width*m.from.x,outerHeight:o.outerHeight*m.from.y,outerWidth:o.outerWidth*m.from.x};
A.to={height:o.height*m.to.y,width:o.width*m.to.x,outerHeight:o.height*m.to.y,outerWidth:o.width*m.to.x};
if(m.from.y!==m.to.y){A.from=b.effects.setTransition(A,w,m.from.y,A.from);
A.to=b.effects.setTransition(A,w,m.to.y,A.to)
}if(m.from.x!==m.to.x){A.from=b.effects.setTransition(A,e,m.from.x,A.from);
A.to=b.effects.setTransition(A,e,m.to.x,A.to)
}A.css(A.from);
A.animate(A.to,p.duration,p.easing,function(){if(v){b.effects.restore(A,q)
}})
})
}d.animate(d.to,{queue:false,duration:p.duration,easing:p.easing,complete:function(){if(d.to.opacity===0){d.css("opacity",d.from.opacity)
}if(k==="hide"){d.hide()
}b.effects.restore(d,f);
if(!v){if(y==="static"){d.css({position:"relative",top:d.to.top,left:d.to.left})
}else{b.each(["top","left"],function(o,A){d.css(A,function(C,E){var D=parseInt(E,10),B=o?d.to.left:d.to.top;
if(E==="auto"){return B+"px"
}return D+B+"px"
})
})
}}b.effects.removeWrapper(d);
n()
}})
}
})(jQuery);
(function(b,c){b.effects.effect.shake=function(n,m){var d=b(this),e=["position","top","bottom","left","right","height","width"],l=b.effects.setMode(d,n.mode||"effect"),x=n.direction||"left",f=n.distance||20,k=n.times||3,y=k*2+1,t=Math.round(n.duration/y),h=(x==="up"||x==="down")?"top":"left",g=(x==="up"||x==="left"),w={},v={},u={},r,p=d.queue(),q=p.length;
b.effects.save(d,e);
d.show();
b.effects.createWrapper(d);
w[h]=(g?"-=":"+=")+f;
v[h]=(g?"+=":"-=")+f*2;
u[h]=(g?"-=":"+=")+f*2;
d.animate(w,t,n.easing);
for(r=1;
r<k;
r++){d.animate(v,t,n.easing).animate(u,t,n.easing)
}d.animate(v,t,n.easing).animate(w,t/2,n.easing).queue(function(){if(l==="hide"){d.hide()
}b.effects.restore(d,e);
b.effects.removeWrapper(d);
m()
});
if(q>1){p.splice.apply(p,[1,0].concat(p.splice(q,y+1)))
}d.dequeue()
}
})(jQuery);
(function(b,c){b.effects.effect.slide=function(f,l){var g=b(this),n=["position","top","bottom","left","right","width","height"],m=b.effects.setMode(g,f.mode||"show"),q=m==="show",p=f.direction||"left",h=(p==="up"||p==="down")?"top":"left",e=(p==="up"||p==="left"),d,k={};
b.effects.save(g,n);
g.show();
d=f.distance||g[h==="top"?"outerHeight":"outerWidth"](true);
b.effects.createWrapper(g).css({overflow:"hidden"});
if(q){g.css(h,e?(isNaN(d)?"-"+d:-d):d)
}k[h]=(q?(e?"+=":"-="):(e?"-=":"+="))+d;
g.animate(k,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(m==="hide"){g.hide()
}b.effects.restore(g,n);
b.effects.removeWrapper(g);
l()
}})
}
})(jQuery);
(function(b,c){b.effects.effect.transfer=function(e,k){var g=b(this),n=b(e.to),r=n.css("position")==="fixed",m=b("body"),p=r?m.scrollTop():0,q=r?m.scrollLeft():0,d=n.offset(),h={top:d.top-p,left:d.left-q,height:n.innerHeight(),width:n.innerWidth()},l=g.offset(),f=b("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:l.top-p,left:l.left-q,height:g.innerHeight(),width:g.innerWidth(),position:r?"fixed":"absolute"}).animate(h,e.duration,e.easing,function(){f.remove();
k()
})
}
})(jQuery);
(function(b,c){b.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,b.proxy(function(d){if(this.options.disabled){d.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(d){d.preventDefault()
},"click .ui-state-disabled > a":function(d){d.preventDefault()
},"click .ui-menu-item:has(a)":function(d){var e=b(d.target).closest(".ui-menu-item");
if(!this.mouseHandled&&e.not(".ui-state-disabled").length){this.mouseHandled=true;
this.select(d);
if(e.has(".ui-menu").length){this.expand(d)
}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(d){var e=b(d.currentTarget);
e.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(d,e)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(f,d){var e=this.active||this.element.children(".ui-menu-item").eq(0);
if(!d){this.focus(f,e)
}},blur:function(d){this._delay(function(){if(!b.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(d)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(d){if(!b(d.target).closest(".ui-menu").length){this.collapseAll(d)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var d=b(this);
if(d.data("ui-menu-submenu-carat")){d.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(l){var e,k,m,h,g,d=true;
function f(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(l.keyCode){case b.ui.keyCode.PAGE_UP:this.previousPage(l);
break;
case b.ui.keyCode.PAGE_DOWN:this.nextPage(l);
break;
case b.ui.keyCode.HOME:this._move("first","first",l);
break;
case b.ui.keyCode.END:this._move("last","last",l);
break;
case b.ui.keyCode.UP:this.previous(l);
break;
case b.ui.keyCode.DOWN:this.next(l);
break;
case b.ui.keyCode.LEFT:this.collapse(l);
break;
case b.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(l)
}break;
case b.ui.keyCode.ENTER:case b.ui.keyCode.SPACE:this._activate(l);
break;
case b.ui.keyCode.ESCAPE:this.collapse(l);
break;
default:d=false;
k=this.previousFilter||"";
m=String.fromCharCode(l.keyCode);
h=false;
clearTimeout(this.filterTimer);
if(m===k){h=true
}else{m=k+m
}g=new RegExp("^"+f(m),"i");
e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())
});
e=h&&e.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):e;
if(!e.length){m=String.fromCharCode(l.keyCode);
g=new RegExp("^"+f(m),"i");
e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())
})
}if(e.length){this.focus(l,e);
if(e.length>1){this.previousFilter=m;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(d){l.preventDefault()
}},_activate:function(d){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(d)
}else{this.select(d)
}}},refresh:function(){var f,e=this.options.icons.submenu,d=this.element.find(this.options.menus);
d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var k=b(this),h=k.prev("a"),g=b("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",true);
h.attr("aria-haspopup","true").prepend(g);
k.attr("aria-labelledby",h.attr("id"))
});
f=d.add(this.element);
f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
f.children(":not(.ui-menu-item)").each(function(){var g=b(this);
if(!/[^\-\u2014\u2013\s]/.test(g.text())){g.addClass("ui-widget-content ui-menu-divider")
}});
f.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!b.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(d,e){if(d==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu)
}this._super(d,e)
},focus:function(e,d){var g,f;
this.blur(e,e&&e.type==="focus");
this._scrollIntoView(d);
this.active=d.first();
f=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",f.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(e&&e.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}g=d.children(".ui-menu");
if(g.length&&(/^mouse/.test(e.type))){this._startOpening(g)
}this.activeMenu=d.parent();
this._trigger("focus",e,{item:d})
},_scrollIntoView:function(g){var l,f,h,d,e,k;
if(this._hasScroll()){l=parseFloat(b.css(this.activeMenu[0],"borderTopWidth"))||0;
f=parseFloat(b.css(this.activeMenu[0],"paddingTop"))||0;
h=g.offset().top-this.activeMenu.offset().top-l-f;
d=this.activeMenu.scrollTop();
e=this.activeMenu.height();
k=g.height();
if(h<0){this.activeMenu.scrollTop(d+h)
}else{if(h+k>e){this.activeMenu.scrollTop(d+h-e+k)
}}}},blur:function(e,d){if(!d){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",e,{item:this.active})
},_startOpening:function(d){clearTimeout(this.timer);
if(d.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(d)
},this.delay)
},_open:function(e){var d=b.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true");
e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(d)
},collapseAll:function(e,d){clearTimeout(this.timer);
this.timer=this._delay(function(){var f=d?this.element:b(e&&e.target).closest(this.element.find(".ui-menu"));
if(!f.length){f=this.element
}this._close(f);
this.blur(e);
this.activeMenu=f
},this.delay)
},_close:function(d){if(!d){d=this.active?this.active.parent():this.element
}d.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(e){var d=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(d&&d.length){this._close();
this.focus(e,d)
}},expand:function(e){var d=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(d&&d.length){this._open(d.parent());
this._delay(function(){this.focus(e,d)
})
}},next:function(d){this._move("next","first",d)
},previous:function(d){this._move("prev","last",d)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(g,e,f){var d;
if(this.active){if(g==="first"||g==="last"){d=this.active[g==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{d=this.active[g+"All"](".ui-menu-item").eq(0)
}}if(!d||!d.length||!this.active){d=this.activeMenu.children(".ui-menu-item")[e]()
}this.focus(f,d)
},nextPage:function(f){var e,g,d;
if(!this.active){this.next(f);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){g=this.active.offset().top;
d=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){e=b(this);
return e.offset().top-g-d<0
});
this.focus(f,e)
}else{this.focus(f,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(f){var e,g,d;
if(!this.active){this.next(f);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){g=this.active.offset().top;
d=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){e=b(this);
return e.offset().top-g+d>0
});
this.focus(f,e)
}else{this.focus(f,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(d){this.active=this.active||b(d.target).closest(".ui-menu-item");
var e={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(d,true)
}this._trigger("select",d,e)
}})
}(jQuery));
(function(f,d){f.ui=f.ui||{};
var m,n=Math.max,r=Math.abs,p=Math.round,e=/left|center|right/,k=/top|center|bottom/,b=/[\+\-]\d+(\.[\d]+)?%?/,o=/^\w+/,c=/%$/,h=f.fn.position;
function q(v,u,t){return[parseFloat(v[0])*(c.test(v[0])?u/100:1),parseFloat(v[1])*(c.test(v[1])?t/100:1)]
}function l(t,u){return parseInt(f.css(t,u),10)||0
}function g(u){var t=u[0];
if(t.nodeType===9){return{width:u.width(),height:u.height(),offset:{top:0,left:0}}
}if(f.isWindow(t)){return{width:u.width(),height:u.height(),offset:{top:u.scrollTop(),left:u.scrollLeft()}}
}if(t.preventDefault){return{width:0,height:0,offset:{top:t.pageY,left:t.pageX}}
}return{width:u.outerWidth(),height:u.outerHeight(),offset:u.offset()}
}f.position={scrollbarWidth:function(){if(m!==d){return m
}var u,t,w=f("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),v=w.children()[0];
f("body").append(w);
u=v.offsetWidth;
w.css("overflow","scroll");
t=v.offsetWidth;
if(u===t){t=w[0].clientWidth
}w.remove();
return(m=u-t)
},getScrollInfo:function(x){var w=x.isWindow?"":x.element.css("overflow-x"),v=x.isWindow?"":x.element.css("overflow-y"),u=w==="scroll"||(w==="auto"&&x.width<x.element[0].scrollWidth),t=v==="scroll"||(v==="auto"&&x.height<x.element[0].scrollHeight);
return{width:t?f.position.scrollbarWidth():0,height:u?f.position.scrollbarWidth():0}
},getWithinInfo:function(u){var v=f(u||window),t=f.isWindow(v[0]);
return{element:v,isWindow:t,offset:v.offset()||{left:0,top:0},scrollLeft:v.scrollLeft(),scrollTop:v.scrollTop(),width:t?v.width():v.outerWidth(),height:t?v.height():v.outerHeight()}
}};
f.fn.position=function(D){if(!D||!D.of){return h.apply(this,arguments)
}D=f.extend({},D);
var E,A,y,C,x,t,z=f(D.of),w=f.position.getWithinInfo(D.within),u=f.position.getScrollInfo(w),B=(D.collision||"flip").split(" "),v={};
t=g(z);
if(z[0].preventDefault){D.at="left top"
}A=t.width;
y=t.height;
C=t.offset;
x=f.extend({},C);
f.each(["my","at"],function(){var H=(D[this]||"").split(" "),G,F;
if(H.length===1){H=e.test(H[0])?H.concat(["center"]):k.test(H[0])?["center"].concat(H):["center","center"]
}H[0]=e.test(H[0])?H[0]:"center";
H[1]=k.test(H[1])?H[1]:"center";
G=b.exec(H[0]);
F=b.exec(H[1]);
v[this]=[G?G[0]:0,F?F[0]:0];
D[this]=[o.exec(H[0])[0],o.exec(H[1])[0]]
});
if(B.length===1){B[1]=B[0]
}if(D.at[0]==="right"){x.left+=A
}else{if(D.at[0]==="center"){x.left+=A/2
}}if(D.at[1]==="bottom"){x.top+=y
}else{if(D.at[1]==="center"){x.top+=y/2
}}E=q(v.at,A,y);
x.left+=E[0];
x.top+=E[1];
return this.each(function(){var G,P,I=f(this),K=I.outerWidth(),H=I.outerHeight(),J=l(this,"marginLeft"),F=l(this,"marginTop"),O=K+J+l(this,"marginRight")+u.width,N=H+F+l(this,"marginBottom")+u.height,L=f.extend({},x),M=q(v.my,I.outerWidth(),I.outerHeight());
if(D.my[0]==="right"){L.left-=K
}else{if(D.my[0]==="center"){L.left-=K/2
}}if(D.my[1]==="bottom"){L.top-=H
}else{if(D.my[1]==="center"){L.top-=H/2
}}L.left+=M[0];
L.top+=M[1];
if(!f.support.offsetFractions){L.left=p(L.left);
L.top=p(L.top)
}G={marginLeft:J,marginTop:F};
f.each(["left","top"],function(R,Q){if(f.ui.position[B[R]]){f.ui.position[B[R]][Q](L,{targetWidth:A,targetHeight:y,elemWidth:K,elemHeight:H,collisionPosition:G,collisionWidth:O,collisionHeight:N,offset:[E[0]+M[0],E[1]+M[1]],my:D.my,at:D.at,within:w,elem:I})
}});
if(D.using){P=function(T){var V=C.left-L.left,S=V+A-K,U=C.top-L.top,R=U+y-H,Q={target:{element:z,left:C.left,top:C.top,width:A,height:y},element:{element:I,left:L.left,top:L.top,width:K,height:H},horizontal:S<0?"left":V>0?"right":"center",vertical:R<0?"top":U>0?"bottom":"middle"};
if(A<K&&r(V+S)<A){Q.horizontal="center"
}if(y<H&&r(U+R)<y){Q.vertical="middle"
}if(n(r(V),r(S))>n(r(U),r(R))){Q.important="horizontal"
}else{Q.important="vertical"
}D.using.call(this,T,Q)
}
}I.offset(f.extend(L,{using:P}))
})
};
f.ui.position={fit:{left:function(x,w){var v=w.within,z=v.isWindow?v.scrollLeft:v.offset.left,B=v.width,y=x.left-w.collisionPosition.marginLeft,A=z-y,u=y+w.collisionWidth-B-z,t;
if(w.collisionWidth>B){if(A>0&&u<=0){t=x.left+A+w.collisionWidth-B-z;
x.left+=A-t
}else{if(u>0&&A<=0){x.left=z
}else{if(A>u){x.left=z+B-w.collisionWidth
}else{x.left=z
}}}}else{if(A>0){x.left+=A
}else{if(u>0){x.left-=u
}else{x.left=n(x.left-y,x.left)
}}}},top:function(w,v){var u=v.within,A=u.isWindow?u.scrollTop:u.offset.top,B=v.within.height,y=w.top-v.collisionPosition.marginTop,z=A-y,x=y+v.collisionHeight-B-A,t;
if(v.collisionHeight>B){if(z>0&&x<=0){t=w.top+z+v.collisionHeight-B-A;
w.top+=z-t
}else{if(x>0&&z<=0){w.top=A
}else{if(z>x){w.top=A+B-v.collisionHeight
}else{w.top=A
}}}}else{if(z>0){w.top+=z
}else{if(x>0){w.top-=x
}else{w.top=n(w.top-y,w.top)
}}}}},flip:{left:function(z,y){var x=y.within,D=x.offset.left+x.scrollLeft,G=x.width,v=x.isWindow?x.scrollLeft:x.offset.left,A=z.left-y.collisionPosition.marginLeft,E=A-v,u=A+y.collisionWidth-G-v,C=y.my[0]==="left"?-y.elemWidth:y.my[0]==="right"?y.elemWidth:0,F=y.at[0]==="left"?y.targetWidth:y.at[0]==="right"?-y.targetWidth:0,w=-2*y.offset[0],t,B;
if(E<0){t=z.left+C+F+w+y.collisionWidth-G-D;
if(t<0||t<r(E)){z.left+=C+F+w
}}else{if(u>0){B=z.left-y.collisionPosition.marginLeft+C+F+w-v;
if(B>0||r(B)<u){z.left+=C+F+w
}}}},top:function(y,x){var w=x.within,F=w.offset.top+w.scrollTop,G=w.height,t=w.isWindow?w.scrollTop:w.offset.top,A=y.top-x.collisionPosition.marginTop,C=A-t,z=A+x.collisionHeight-G-t,D=x.my[1]==="top",B=D?-x.elemHeight:x.my[1]==="bottom"?x.elemHeight:0,H=x.at[1]==="top"?x.targetHeight:x.at[1]==="bottom"?-x.targetHeight:0,v=-2*x.offset[1],E,u;
if(C<0){u=y.top+B+H+v+x.collisionHeight-G-F;
if((y.top+B+H+v)>C&&(u<0||u<r(C))){y.top+=B+H+v
}}else{if(z>0){E=y.top-x.collisionPosition.marginTop+B+H+v-t;
if((y.top+B+H+v)>z&&(E>0||r(E)<z)){y.top+=B+H+v
}}}}},flipfit:{left:function(){f.ui.position.flip.left.apply(this,arguments);
f.ui.position.fit.left.apply(this,arguments)
},top:function(){f.ui.position.flip.top.apply(this,arguments);
f.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var x,z,u,w,v,t=document.getElementsByTagName("body")[0],y=document.createElement("div");
x=document.createElement(t?"div":"body");
u={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(t){f.extend(u,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(v in u){x.style[v]=u[v]
}x.appendChild(y);
z=t||document.documentElement;
z.insertBefore(x,z.firstChild);
y.style.cssText="position: absolute; left: 10.7432222px;";
w=f(y).offset().left;
f.support.offsetFractions=w>10&&w<11;
x.innerHTML="";
z.removeChild(x)
})()
}(jQuery));
(function(b,c){b.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(d){if(d===c){return this.options.value
}this.options.value=this._constrainedValue(d);
this._refreshValue()
},_constrainedValue:function(d){if(d===c){d=this.options.value
}this.indeterminate=d===false;
if(typeof d!=="number"){d=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,d))
},_setOptions:function(d){var e=d.value;
delete d.value;
this._super(d);
this.options.value=this._constrainedValue(e);
this._refreshValue()
},_setOption:function(d,e){if(d==="max"){e=Math.max(this.min,e)
}this._super(d,e)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var e=this.options.value,d=this._percentage();
this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(d.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=b("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==e){this.oldValue=e;
this._trigger("change")
}if(e===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(c,d){var b=5;
c.widget("ui.slider",c.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var h,e,f=this.options,l=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),k="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];
e=(f.values&&f.values.length)||1;
if(l.length>e){l.slice(e).remove();
l=l.slice(0,e)
}for(h=l.length;
h<e;
h++){g.push(k)
}this.handles=l.add(c(g.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(m){c(this).data("ui-slider-handle-index",m)
})
},_createRange:function(){var e=this.options,f="";
if(e.range){if(e.range===true){if(!e.values){e.values=[this._valueMin(),this._valueMin()]
}else{if(e.values.length&&e.values.length!==2){e.values=[e.values[0],e.values[0]]
}else{if(c.isArray(e.values)){e.values=e.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=c("<div></div>").appendTo(this.element);
f="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(f+((e.range==="min"||e.range==="max")?" ui-slider-range-"+e.range:""))
}else{this.range=c([])
}},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");
this._off(e);
this._on(e,this._handleEvents);
this._hoverable(e);
this._focusable(e)
},_destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(g){var m,q,f,k,p,r,l,e,n=this,h=this.options;
if(h.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
m={x:g.pageX,y:g.pageY};
q=this._normValueFromMouse(m);
f=this._valueMax()-this._valueMin()+1;
this.handles.each(function(o){var t=Math.abs(q-n.values(o));
if((f>t)||(f===t&&(o===n._lastChangedValue||n.values(o)===h.min))){f=t;
k=c(this);
p=o
}});
r=this._start(g,p);
if(r===false){return false
}this._mouseSliding=true;
this._handleIndex=p;
k.addClass("ui-state-active").focus();
l=k.offset();
e=!c(g.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=e?{left:0,top:0}:{left:g.pageX-l.left-(k.width()/2),top:g.pageY-l.top-(k.height()/2)-(parseInt(k.css("borderTopWidth"),10)||0)-(parseInt(k.css("borderBottomWidth"),10)||0)+(parseInt(k.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(g,p,q)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(g){var e={x:g.pageX,y:g.pageY},f=this._normValueFromMouse(e);
this._slide(g,this._handleIndex,f);
return false
},_mouseStop:function(e){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(e,this._handleIndex);
this._change(e,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(f){var e,k,h,g,l;
if(this.orientation==="horizontal"){e=this.elementSize.width;
k=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{e=this.elementSize.height;
k=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}h=(k/e);
if(h>1){h=1
}if(h<0){h=0
}if(this.orientation==="vertical"){h=1-h
}g=this._valueMax()-this._valueMin();
l=this._valueMin()+h*g;
return this._trimAlignValue(l)
},_start:function(g,f){var e={handle:this.handles[f],value:this.value()};
if(this.options.values&&this.options.values.length){e.value=this.values(f);
e.values=this.values()
}return this._trigger("start",g,e)
},_slide:function(k,h,g){var e,f,l;
if(this.options.values&&this.options.values.length){e=this.values(h?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((h===0&&g>e)||(h===1&&g<e))){g=e
}if(g!==this.values(h)){f=this.values();
f[h]=g;
l=this._trigger("slide",k,{handle:this.handles[h],value:g,values:f});
e=this.values(h?0:1);
if(l!==false){this.values(h,g,true)
}}}else{if(g!==this.value()){l=this._trigger("slide",k,{handle:this.handles[h],value:g});
if(l!==false){this.value(g)
}}}},_stop:function(g,f){var e={handle:this.handles[f],value:this.value()};
if(this.options.values&&this.options.values.length){e.value=this.values(f);
e.values=this.values()
}this._trigger("stop",g,e)
},_change:function(g,f){if(!this._keySliding&&!this._mouseSliding){var e={handle:this.handles[f],value:this.value()};
if(this.options.values&&this.options.values.length){e.value=this.values(f);
e.values=this.values()
}this._lastChangedValue=f;
this._trigger("change",g,e)
}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(f,k){var h,e,g;
if(arguments.length>1){this.options.values[f]=this._trimAlignValue(k);
this._refreshValue();
this._change(null,f);
return
}if(arguments.length){if(c.isArray(arguments[0])){h=this.options.values;
e=arguments[0];
for(g=0;
g<h.length;
g+=1){h[g]=this._trimAlignValue(e[g]);
this._change(null,g)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(f)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(f,g){var e,h=0;
if(f==="range"&&this.options.range===true){if(g==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(g==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(c.isArray(this.options.values)){h=this.options.values.length
}c.Widget.prototype._setOption.apply(this,arguments);
switch(f){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(e=0;
e<h;
e+=1){this._change(null,e)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var e=this.options.value;
e=this._trimAlignValue(e);
return e
},_values:function(e){var h,g,f;
if(arguments.length){h=this.options.values[e];
h=this._trimAlignValue(h);
return h
}else{if(this.options.values&&this.options.values.length){g=this.options.values.slice();
for(f=0;
f<g.length;
f+=1){g[f]=this._trimAlignValue(g[f])
}return g
}else{return[]
}}},_trimAlignValue:function(h){if(h<=this._valueMin()){return this._valueMin()
}if(h>=this._valueMax()){return this._valueMax()
}var e=(this.options.step>0)?this.options.step:1,g=(h-this._valueMin())%e,f=h-g;
if(Math.abs(g)*2>=e){f+=(g>0)?e:(-e)
}return parseFloat(f.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var l,k,p,m,q,h=this.options.range,g=this.options,n=this,f=(!this._animateOff)?g.animate:false,e={};
if(this.options.values&&this.options.values.length){this.handles.each(function(o){k=(n.values(o)-n._valueMin())/(n._valueMax()-n._valueMin())*100;
e[n.orientation==="horizontal"?"left":"bottom"]=k+"%";
c(this).stop(1,1)[f?"animate":"css"](e,g.animate);
if(n.options.range===true){if(n.orientation==="horizontal"){if(o===0){n.range.stop(1,1)[f?"animate":"css"]({left:k+"%"},g.animate)
}if(o===1){n.range[f?"animate":"css"]({width:(k-l)+"%"},{queue:false,duration:g.animate})
}}else{if(o===0){n.range.stop(1,1)[f?"animate":"css"]({bottom:(k)+"%"},g.animate)
}if(o===1){n.range[f?"animate":"css"]({height:(k-l)+"%"},{queue:false,duration:g.animate})
}}}l=k
})
}else{p=this.value();
m=this._valueMin();
q=this._valueMax();
k=(q!==m)?(p-m)/(q-m)*100:0;
e[this.orientation==="horizontal"?"left":"bottom"]=k+"%";
this.handle.stop(1,1)[f?"animate":"css"](e,g.animate);
if(h==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[f?"animate":"css"]({width:k+"%"},g.animate)
}if(h==="max"&&this.orientation==="horizontal"){this.range[f?"animate":"css"]({width:(100-k)+"%"},{queue:false,duration:g.animate})
}if(h==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[f?"animate":"css"]({height:k+"%"},g.animate)
}if(h==="max"&&this.orientation==="vertical"){this.range[f?"animate":"css"]({height:(100-k)+"%"},{queue:false,duration:g.animate})
}}},_handleEvents:{keydown:function(k){var l,g,f,h,e=c(k.target).data("ui-slider-handle-index");
switch(k.keyCode){case c.ui.keyCode.HOME:case c.ui.keyCode.END:case c.ui.keyCode.PAGE_UP:case c.ui.keyCode.PAGE_DOWN:case c.ui.keyCode.UP:case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:case c.ui.keyCode.LEFT:k.preventDefault();
if(!this._keySliding){this._keySliding=true;
c(k.target).addClass("ui-state-active");
l=this._start(k,e);
if(l===false){return
}}break
}h=this.options.step;
if(this.options.values&&this.options.values.length){g=f=this.values(e)
}else{g=f=this.value()
}switch(k.keyCode){case c.ui.keyCode.HOME:f=this._valueMin();
break;
case c.ui.keyCode.END:f=this._valueMax();
break;
case c.ui.keyCode.PAGE_UP:f=this._trimAlignValue(g+((this._valueMax()-this._valueMin())/b));
break;
case c.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(g-((this._valueMax()-this._valueMin())/b));
break;
case c.ui.keyCode.UP:case c.ui.keyCode.RIGHT:if(g===this._valueMax()){return
}f=this._trimAlignValue(g+h);
break;
case c.ui.keyCode.DOWN:case c.ui.keyCode.LEFT:if(g===this._valueMin()){return
}f=this._trimAlignValue(g-h);
break
}this._slide(k,e,f)
},click:function(e){e.preventDefault()
},keyup:function(f){var e=c(f.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(f,e);
this._change(f,e);
c(f.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(c){function b(d){return function(){var e=this.element.val();
d.apply(this,arguments);
this._refresh();
if(e!==this.element.val()){this._trigger("change")
}}
}c.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
this._value(this.element.val(),true);
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var d={},e=this.element;
c.each(["min","max","step"],function(f,g){var h=e.attr(g);
if(h!==undefined&&h.length){d[g]=h
}});
return d
},_events:{keydown:function(d){if(this._start(d)&&this._keydown(d)){d.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(d){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",d)
}},mousewheel:function(d,e){if(!e){return
}if(!this.spinning&&!this._start(d)){return false
}this._spin((e>0?1:-1)*this.options.step,d);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(d)
}},100);
d.preventDefault()
},"mousedown .ui-spinner-button":function(e){var d;
d=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function f(){var g=this.element[0]===this.document[0].activeElement;
if(!g){this.element.focus();
this.previous=d;
this._delay(function(){this.previous=d
})
}}e.preventDefault();
f.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
f.call(this)
});
if(this._start(e)===false){return
}this._repeat(null,c(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(d){if(!c(d.currentTarget).hasClass("ui-state-active")){return
}if(this._start(d)===false){return false
}this._repeat(null,c(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var d=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=d.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(d.height()*0.5)&&d.height()>0){d.height(d.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(e){var d=this.options,f=c.ui.keyCode;
switch(e.keyCode){case f.UP:this._repeat(null,1,e);
return true;
case f.DOWN:this._repeat(null,-1,e);
return true;
case f.PAGE_UP:this._repeat(null,d.page,e);
return true;
case f.PAGE_DOWN:this._repeat(null,-d.page,e);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(d){if(!this.spinning&&this._trigger("start",d)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(e,d,f){e=e||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,d,f)
},e);
this._spin(d*this.options.step,f)
},_spin:function(e,d){var f=this.value()||0;
if(!this.counter){this.counter=1
}f=this._adjustValue(f+e*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",d,{value:f})!==false){this._value(f);
this.counter++
}},_increment:function(d){var e=this.options.incremental;
if(e){return c.isFunction(e)?e(d):Math.floor(d*d*d/50000-d*d/500+17*d/200+1)
}return 1
},_precision:function(){var d=this._precisionOf(this.options.step);
if(this.options.min!==null){d=Math.max(d,this._precisionOf(this.options.min))
}return d
},_precisionOf:function(e){var f=e.toString(),d=f.indexOf(".");
return d===-1?0:f.length-d-1
},_adjustValue:function(f){var e,g,d=this.options;
e=d.min!==null?d.min:0;
g=f-e;
g=Math.round(g/d.step)*d.step;
f=e+g;
f=parseFloat(f.toFixed(this._precision()));
if(d.max!==null&&f>d.max){return d.max
}if(d.min!==null&&f<d.min){return d.min
}return f
},_stop:function(d){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",d)
},_setOption:function(d,e){if(d==="culture"||d==="numberFormat"){var f=this._parse(this.element.val());
this.options[d]=e;
this.element.val(this._format(f));
return
}if(d==="max"||d==="min"||d==="step"){if(typeof e==="string"){e=this._parse(e)
}}if(d==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)
}this._super(d,e);
if(d==="disabled"){if(e){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:b(function(d){this._super(d);
this._value(this.element.val())
}),_parse:function(d){if(typeof d==="string"&&d!==""){d=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(d,10,this.options.culture):+d
}return d===""||isNaN(d)?null:d
},_format:function(d){if(d===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(d,this.options.numberFormat,this.options.culture):d
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(f,d){var e;
if(f!==""){e=this._parse(f);
if(e!==null){if(!d){e=this._adjustValue(e)
}f=this._format(e)
}}this.element.val(f);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:b(function(d){this._stepUp(d)
}),_stepUp:function(d){if(this._start()){this._spin((d||1)*this.options.step);
this._stop()
}},stepDown:b(function(d){this._stepDown(d)
}),_stepDown:function(d){if(this._start()){this._spin((d||1)*-this.options.step);
this._stop()
}},pageUp:b(function(d){this._stepUp((d||1)*this.options.page)
}),pageDown:b(function(d){this._stepDown((d||1)*this.options.page)
}),value:function(d){if(!arguments.length){return this._parse(this.element.val())
}b(this._value).call(this,d)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(d,f){var b=0,g=/#.*$/;
function e(){return ++b
}function c(h){return h.hash.length>1&&decodeURIComponent(h.href.replace(g,""))===decodeURIComponent(location.href.replace(g,""))
}d.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var k=this,h=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",h.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(l){if(d(this).is(".ui-state-disabled")){l.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(d(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
h.active=this._initialActive();
if(d.isArray(h.disabled)){h.disabled=d.unique(h.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"),function(l){return k.tabs.index(l)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(h.active)
}else{this.active=d()
}this._refresh();
if(this.active.length){this.load(h.active)
}},_initialActive:function(){var k=this.options.active,h=this.options.collapsible,l=location.hash.substring(1);
if(k===null){if(l){this.tabs.each(function(m,n){if(d(n).attr("aria-controls")===l){k=m;
return false
}})
}if(k===null){k=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(k===null||k===-1){k=this.tabs.length?0:false
}}if(k!==false){k=this.tabs.index(this.tabs.eq(k));
if(k===-1){k=h?false:0
}}if(!h&&k===false&&this.anchors.length){k=0
}return k
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?d():this._getPanelForTab(this.active)}
},_tabKeydown:function(l){var k=d(this.document[0].activeElement).closest("li"),h=this.tabs.index(k),m=true;
if(this._handlePageNav(l)){return
}switch(l.keyCode){case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:h++;
break;
case d.ui.keyCode.UP:case d.ui.keyCode.LEFT:m=false;
h--;
break;
case d.ui.keyCode.END:h=this.anchors.length-1;
break;
case d.ui.keyCode.HOME:h=0;
break;
case d.ui.keyCode.SPACE:l.preventDefault();
clearTimeout(this.activating);
this._activate(h);
return;
case d.ui.keyCode.ENTER:l.preventDefault();
clearTimeout(this.activating);
this._activate(h===this.options.active?false:h);
return;
default:return
}l.preventDefault();
clearTimeout(this.activating);
h=this._focusNextTab(h,m);
if(!l.ctrlKey){k.attr("aria-selected","false");
this.tabs.eq(h).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",h)
},this.delay)
}},_panelKeydown:function(h){if(this._handlePageNav(h)){return
}if(h.ctrlKey&&h.keyCode===d.ui.keyCode.UP){h.preventDefault();
this.active.focus()
}},_handlePageNav:function(h){if(h.altKey&&h.keyCode===d.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(h.altKey&&h.keyCode===d.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(k,l){var h=this.tabs.length-1;
function m(){if(k>h){k=0
}if(k<0){k=h
}return k
}while(d.inArray(m(),this.options.disabled)!==-1){k=l?k+1:k-1
}return k
},_focusNextTab:function(h,k){h=this._findNextTab(h,k);
this.tabs.eq(h).focus();
return h
},_setOption:function(h,k){if(h==="active"){this._activate(k);
return
}if(h==="disabled"){this._setupDisabled(k);
return
}this._super(h,k);
if(h==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",k);
if(!k&&this.options.active===false){this._activate(0)
}}if(h==="event"){this._setupEvents(k)
}if(h==="heightStyle"){this._setupHeightStyle(k)
}},_tabId:function(h){return h.attr("aria-controls")||"ui-tabs-"+e()
},_sanitizeSelector:function(h){return h?h.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var k=this.options,h=this.tablist.children(":has(a[href])");
k.disabled=d.map(h.filter(".ui-state-disabled"),function(l){return h.index(l)
});
this._processTabs();
if(k.active===false||!this.anchors.length){k.active=false;
this.active=d()
}else{if(this.active.length&&!d.contains(this.tablist[0],this.active[0])){if(this.tabs.length===k.disabled.length){k.active=false;
this.active=d()
}else{this._activate(this._findNextTab(Math.max(0,k.active-1),false))
}}else{k.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var h=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return d("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=d();
this.anchors.each(function(p,n){var k,l,o,m=d(n).uniqueId().attr("id"),q=d(n).closest("li"),r=q.attr("aria-controls");
if(c(n)){k=n.hash;
l=h.element.find(h._sanitizeSelector(k))
}else{o=h._tabId(q);
k="#"+o;
l=h.element.find(k);
if(!l.length){l=h._createPanel(o);
l.insertAfter(h.panels[p-1]||h.tablist)
}l.attr("aria-live","polite")
}if(l.length){h.panels=h.panels.add(l)
}if(r){q.data("ui-tabs-aria-controls",r)
}q.attr({"aria-controls":k.substring(1),"aria-labelledby":m});
l.attr("aria-labelledby",m)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(h){return d("<div>").attr("id",h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(l){if(d.isArray(l)){if(!l.length){l=false
}else{if(l.length===this.anchors.length){l=true
}}}for(var k=0,h;
(h=this.tabs[k]);
k++){if(l===true||d.inArray(k,l)!==-1){d(h).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{d(h).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=l
},_setupEvents:function(k){var h={click:function(l){l.preventDefault()
}};
if(k){d.each(k.split(" "),function(m,l){h[l]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,h);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(h){var l,k=this.element.parent();
if(h==="fill"){l=k.height();
l-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var n=d(this),m=n.css("position");
if(m==="absolute"||m==="fixed"){return
}l-=n.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){l-=d(this).outerHeight(true)
});
this.panels.each(function(){d(this).height(Math.max(0,l-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(h==="auto"){l=0;
this.panels.each(function(){l=Math.max(l,d(this).height("").height())
}).height(l)
}}},_eventHandler:function(h){var t=this.options,n=this.active,o=d(h.currentTarget),m=o.closest("li"),q=m[0]===n[0],k=q&&t.collapsible,l=k?d():this._getPanelForTab(m),p=!n.length?d():this._getPanelForTab(n),r={oldTab:n,oldPanel:p,newTab:k?d():m,newPanel:l};
h.preventDefault();
if(m.hasClass("ui-state-disabled")||m.hasClass("ui-tabs-loading")||this.running||(q&&!t.collapsible)||(this._trigger("beforeActivate",h,r)===false)){return
}t.active=k?false:this.tabs.index(m);
this.active=q?d():m;
if(this.xhr){this.xhr.abort()
}if(!p.length&&!l.length){d.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(l.length){this.load(this.tabs.index(m),h)
}this._toggle(h,r)
},_toggle:function(p,o){var n=this,h=o.newPanel,m=o.oldPanel;
this.running=true;
function l(){n.running=false;
n._trigger("activate",p,o)
}function k(){o.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(h.length&&n.options.show){n._show(h,n.options.show,l)
}else{h.show();
l()
}}if(m.length&&this.options.hide){this._hide(m,this.options.hide,function(){o.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
k()
})
}else{o.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
m.hide();
k()
}m.attr({"aria-expanded":"false","aria-hidden":"true"});
o.oldTab.attr("aria-selected","false");
if(h.length&&m.length){o.oldTab.attr("tabIndex",-1)
}else{if(h.length){this.tabs.filter(function(){return d(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}h.attr({"aria-expanded":"true","aria-hidden":"false"});
o.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(k){var h,l=this._findActive(k);
if(l[0]===this.active[0]){return
}if(!l.length){l=this.active
}h=l.find(".ui-tabs-anchor")[0];
this._eventHandler({target:h,currentTarget:h,preventDefault:d.noop})
},_findActive:function(h){return h===false?d():this.tabs.eq(h)
},_getIndex:function(h){if(typeof h==="string"){h=this.anchors.index(this.anchors.filter("[href$='"+h+"']"))
}return h
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(d.data(this,"ui-tabs-destroy")){d(this).remove()
}else{d(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var h=d(this),k=h.data("ui-tabs-aria-controls");
if(k){h.attr("aria-controls",k).removeData("ui-tabs-aria-controls")
}else{h.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(h){var k=this.options.disabled;
if(k===false){return
}if(h===f){k=false
}else{h=this._getIndex(h);
if(d.isArray(k)){k=d.map(k,function(l){return l!==h?l:null
})
}else{k=d.map(this.tabs,function(l,m){return m!==h?m:null
})
}}this._setupDisabled(k)
},disable:function(h){var k=this.options.disabled;
if(k===true){return
}if(h===f){k=true
}else{h=this._getIndex(h);
if(d.inArray(h,k)!==-1){return
}if(d.isArray(k)){k=d.merge([h],k).sort()
}else{k=[h]
}}this._setupDisabled(k)
},load:function(l,p){l=this._getIndex(l);
var o=this,m=this.tabs.eq(l),k=m.find(".ui-tabs-anchor"),h=this._getPanelForTab(m),n={tab:m,panel:h};
if(c(k[0])){return
}this.xhr=d.ajax(this._ajaxSettings(k,p,n));
if(this.xhr&&this.xhr.statusText!=="canceled"){m.addClass("ui-tabs-loading");
h.attr("aria-busy","true");
this.xhr.success(function(q){setTimeout(function(){h.html(q);
o._trigger("load",p,n)
},1)
}).complete(function(r,q){setTimeout(function(){if(q==="abort"){o.panels.stop(false,true)
}m.removeClass("ui-tabs-loading");
h.removeAttr("aria-busy");
if(r===o.xhr){delete o.xhr
}},1)
})
}},_ajaxSettings:function(h,m,l){var k=this;
return{url:h.attr("href"),beforeSend:function(o,n){return k._trigger("beforeLoad",m,d.extend({jqXHR:o,ajaxSettings:n},l))
}}
},_getPanelForTab:function(h){var k=d(h).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+k))
}})
})(jQuery);
(function(e){var c=0;
function d(g,h){var f=(g.attr("aria-describedby")||"").split(/\s+/);
f.push(h);
g.data("ui-tooltip-id",h).attr("aria-describedby",e.trim(f.join(" ")))
}function b(h){var k=h.data("ui-tooltip-id"),g=(h.attr("aria-describedby")||"").split(/\s+/),f=e.inArray(k,g);
if(f!==-1){g.splice(f,1)
}h.removeData("ui-tooltip-id");
g=e.trim(g.join(" "));
if(g){h.attr("aria-describedby",g)
}else{h.removeAttr("aria-describedby")
}}e.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var f=e(this).attr("title")||"";
return e("<a>").text(f).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(f,h){var g=this;
if(f==="disabled"){this[h?"_disable":"_enable"]();
this.options[f]=h;
return
}this._super(f,h);
if(f==="content"){e.each(this.tooltips,function(l,k){g._updateContent(k)
})
}},_disable:function(){var f=this;
e.each(this.tooltips,function(k,g){var h=e.Event("blur");
h.target=h.currentTarget=g[0];
f.close(h,true)
});
this.element.find(this.options.items).addBack().each(function(){var g=e(this);
if(g.is("[title]")){g.data("ui-tooltip-title",g.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var f=e(this);
if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"))
}})
},open:function(g){var f=this,h=e(g?g.target:this.element).closest(this.options.items);
if(!h.length||h.data("ui-tooltip-id")){return
}if(h.attr("title")){h.data("ui-tooltip-title",h.attr("title"))
}h.data("ui-tooltip-open",true);
if(g&&g.type==="mouseover"){h.parents().each(function(){var l=e(this),k;
if(l.data("ui-tooltip-open")){k=e.Event("blur");
k.target=k.currentTarget=this;
f.close(k,true)
}if(l.attr("title")){l.uniqueId();
f.parents[this.id]={element:this,title:l.attr("title")};
l.attr("title","")
}})
}this._updateContent(h,g)
},_updateContent:function(m,l){var k,f=this.options.content,h=this,g=l?l.type:null;
if(typeof f==="string"){return this._open(l,m,f)
}k=f.call(m[0],function(n){if(!m.data("ui-tooltip-open")){return
}h._delay(function(){if(l){l.type=g
}this._open(l,m,n)
})
});
if(k){this._open(l,m,k)
}},_open:function(l,n,k){var m,h,g,o=e.extend({},this.options.position);
if(!k){return
}m=this._find(n);
if(m.length){m.find(".ui-tooltip-content").html(k);
return
}if(n.is("[title]")){if(l&&l.type==="mouseover"){n.attr("title","")
}else{n.removeAttr("title")
}}m=this._tooltip(n);
d(n,m.attr("id"));
m.find(".ui-tooltip-content").html(k);
function f(p){o.of=p;
if(m.is(":hidden")){return
}m.position(o)
}if(this.options.track&&l&&/^mouse/.test(l.type)){this._on(this.document,{mousemove:f});
f(l)
}else{m.position(e.extend({of:n},this.options.position))
}m.hide();
this._show(m,this.options.show);
if(this.options.show&&this.options.show.delay){g=this.delayedShow=setInterval(function(){if(m.is(":visible")){f(o.of);
clearInterval(g)
}},e.fx.interval)
}this._trigger("open",l,{tooltip:m});
h={keyup:function(p){if(p.keyCode===e.ui.keyCode.ESCAPE){var q=e.Event(p);
q.currentTarget=n[0];
this.close(q,true)
}},remove:function(){this._removeTooltip(m)
}};
if(!l||l.type==="mouseover"){h.mouseleave="close"
}if(!l||l.type==="focusin"){h.focusout="close"
}this._on(true,n,h)
},close:function(g){var f=this,k=e(g?g.currentTarget:this.element),h=this._find(k);
if(this.closing){return
}clearInterval(this.delayedShow);
if(k.data("ui-tooltip-title")){k.attr("title",k.data("ui-tooltip-title"))
}b(k);
h.stop(true);
this._hide(h,this.options.hide,function(){f._removeTooltip(e(this))
});
k.removeData("ui-tooltip-open");
this._off(k,"mouseleave focusout keyup");
if(k[0]!==this.element[0]){this._off(k,"remove")
}this._off(this.document,"mousemove");
if(g&&g.type==="mouseleave"){e.each(this.parents,function(m,l){e(l.element).attr("title",l.title);
delete f.parents[m]
})
}this.closing=true;
this._trigger("close",g,{tooltip:h});
this.closing=false
},_tooltip:function(f){var h="ui-tooltip-"+c++,g=e("<div>").attr({id:h,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
e("<div>").addClass("ui-tooltip-content").appendTo(g);
g.appendTo(this.document[0].body);
this.tooltips[h]=f;
return g
},_find:function(f){var g=f.data("ui-tooltip-id");
return g?e("#"+g):e()
},_removeTooltip:function(f){f.remove();
delete this.tooltips[f.attr("id")]
},_destroy:function(){var f=this;
e.each(this.tooltips,function(k,g){var h=e.Event("blur");
h.target=h.currentTarget=g[0];
f.close(h,true);
e("#"+k).remove();
if(g.data("ui-tooltip-title")){g.attr("title",g.data("ui-tooltip-title"));
g.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
var protocol=document.location.protocol;
"https:"!=protocol&&(protocol="http:");
var count=document.createElement("script");
count.type="text/javascript";
count.async=!0;
count.src=protocol+"//hello.myfonts.net/count/2ad094";
var s=document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(count,s);
var browserName,browserVersion,webfontType;
if("undefined"==typeof woffEnabled){var woffEnabled=!0
}var svgEnabled=0;
if("undefined"!=typeof customPath){var path=customPath
}else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;
script.match("://")||"/"==script.charAt(0)||(script="./"+script);
path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")
}var wfpath="/etc/designs/core/fonts/js-smooth/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:6,type:"woff"},{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:11.1,type:"woff"},{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;
i<browLen;
i++){var regex=RegExp(browsers[i].regex);
if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);
var typeLen=browsers[i].type.length;
for(j=0;
j<typeLen;
j++){if(browserVersion>=browsers[i].type[j].version&&(!0==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[j].type,"woff"!=webfontType||woffEnabled)&&("svg#wf"!=webfontType||svgEnabled)){break a
}}}else{webfontType="woff"
}}/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");
var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");
stylesheet.setAttribute("type","text/css");
head.appendChild(stylesheet);
for(var fonts=[{fontFamily:"XXIICentarBold",url:wfpath+"2AD094_0"+suffix+"_0."+webfontType},{fontFamily:"XXIICentarLight",url:wfpath+"2AD094_1"+suffix+"_0."+webfontType},{fontFamily:"XXIICentarMedium",url:wfpath+"2AD094_2"+suffix+"_0."+webfontType},{fontFamily:"XXIICentarRegular",url:wfpath+"2AD094_3"+suffix+"_0."+webfontType},{fontFamily:"XXIICentarBlack",url:wfpath+"2AD094_4"+suffix+"_0."+webfontType},{fontFamily:"XXIICentarHeavy",url:wfpath+"2AD094_5"+suffix+"_0."+webfontType},{fontFamily:"XXIICentarThin",url:wfpath+"2AD094_6"+suffix+"_0."+webfontType}],len=fonts.length,css="",i=0;
i<len;
i++){var format="svg#wf"==webfontType?'format("svg")':"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+")"+format+";");
fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");
fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");
css+="}"
}stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
(function(b){b.isScrollToFixed=function(c){return !!b(c).data("ScrollToFixed")
};
b.ScrollToFixed=function(e,l){var o=this;
o.$el=b(e);
o.el=e;
o.$el.data("ScrollToFixed",o);
var d=false;
var K=o.$el;
var L;
var I;
var f;
var C;
var H=0;
var u=0;
var m=-1;
var g=-1;
var x=null;
var D;
var h;
function y(){K.trigger("preUnfixed.ScrollToFixed");
n();
K.trigger("unfixed.ScrollToFixed");
g=-1;
H=K.offset().top;
u=K.offset().left;
if(o.options.offsets){u+=(K.offset().left-K.position().left)
}if(m==-1){m=u
}L=K.css("position");
d=true;
if(o.options.bottom!=-1){K.trigger("preFixed.ScrollToFixed");
A();
K.trigger("fixed.ScrollToFixed")
}}function q(){var M=o.options.limit;
if(!M){return 0
}if(typeof(M)==="function"){return M.apply(K)
}return M
}function t(){return L==="fixed"
}function B(){return L==="absolute"
}function k(){return !(t()||B())
}function A(){if(!t()){x.css({display:"none",width:K.outerWidth(true),height:K.outerHeight(true),"float":K.css("float")});
cssOptions={"z-index":o.options.zIndex,position:"fixed",top:o.options.bottom==-1?w():"",bottom:o.options.bottom==-1?"":o.options.bottom,"margin-left":"0px"};
if(!o.options.dontSetWidth){cssOptions.width=K.width()
}K.css(cssOptions);
K.addClass(o.options.baseClassName);
if(o.options.className){K.addClass(o.options.className)
}L="fixed"
}}function c(){var N=q();
var M=u;
if(o.options.removeOffsets){M="";
N=N-H
}cssOptions={position:"absolute",top:N,left:M,"margin-left":"0px",bottom:""};
if(!o.options.dontSetWidth){cssOptions.width=K.width()
}K.css(cssOptions);
L="absolute"
}function n(){if(!k()){g=-1;
x.css("display","none");
K.css({"z-index":C,width:"",position:I,left:"",top:f,"margin-left":""});
K.removeClass("scroll-to-fixed-fixed");
if(o.options.className){K.removeClass(o.options.className)
}L=null
}}function z(M){if(M!=g){K.css("left",u-M);
g=M
}}function w(){var M=o.options.marginTop;
if(!M){return 0
}if(typeof(M)==="function"){return M.apply(K)
}return M
}function E(){if(!b.isScrollToFixed(K)){return
}var O=d;
if(!d){y()
}else{if(k()){H=K.offset().top;
u=K.offset().left
}}var M=b(window).scrollLeft();
var P=b(window).scrollTop();
var N=q();
if(o.options.minWidth&&b(window).width()<o.options.minWidth){if(!k()||!O){r();
K.trigger("preUnfixed.ScrollToFixed");
n();
K.trigger("unfixed.ScrollToFixed")
}}else{if(o.options.maxWidth&&b(window).width()>o.options.maxWidth){if(!k()||!O){r();
K.trigger("preUnfixed.ScrollToFixed");
n();
K.trigger("unfixed.ScrollToFixed")
}}else{if(o.options.bottom==-1){if(N>0&&P>=N-w()){if(!B()||!O){r();
K.trigger("preAbsolute.ScrollToFixed");
c();
K.trigger("unfixed.ScrollToFixed")
}}else{if(P>=H-w()){if(!t()||!O){r();
K.trigger("preFixed.ScrollToFixed");
A();
g=-1;
K.trigger("fixed.ScrollToFixed")
}z(M)
}else{if(!k()||!O){r();
K.trigger("preUnfixed.ScrollToFixed");
n();
K.trigger("unfixed.ScrollToFixed")
}}}}else{if(N>0){if(P+b(window).height()-K.outerHeight(true)>=N-(w()||-p())){if(t()){r();
K.trigger("preUnfixed.ScrollToFixed");
if(I==="absolute"){c()
}else{n()
}K.trigger("unfixed.ScrollToFixed")
}}else{if(!t()){r();
K.trigger("preFixed.ScrollToFixed");
A()
}z(M);
K.trigger("fixed.ScrollToFixed")
}}else{z(M)
}}}}}function p(){if(!o.options.bottom){return 0
}return o.options.bottom
}function r(){var M=K.css("position");
if(M=="absolute"){K.trigger("postAbsolute.ScrollToFixed")
}else{if(M=="fixed"){K.trigger("postFixed.ScrollToFixed")
}else{K.trigger("postUnfixed.ScrollToFixed")
}}}var G=function(M){if(K.is(":visible")){d=false;
E()
}};
var J=function(M){(!!window.requestAnimationFrame)?requestAnimationFrame(E):E()
};
var F=function(){var N=document.body;
if(document.createElement&&N&&N.appendChild&&N.removeChild){var P=document.createElement("div");
if(!P.getBoundingClientRect){return null
}P.innerHTML="x";
P.style.cssText="position:fixed;top:100px;";
N.appendChild(P);
var Q=N.style.height,R=N.scrollTop;
N.style.height="3000px";
N.scrollTop=500;
var M=P.getBoundingClientRect().top;
N.style.height=Q;
var O=(M===100);
N.removeChild(P);
N.scrollTop=R;
return O
}return null
};
var v=function(M){M=M||window.event;
if(M.preventDefault){M.preventDefault()
}M.returnValue=false
};
o.init=function(){o.options=b.extend({},b.ScrollToFixed.defaultOptions,l);
C=K.css("z-index");
o.$el.css("z-index",o.options.zIndex);
x=b("<div />");
L=K.css("position");
I=K.css("position");
f=K.css("top");
if(k()){o.$el.after(x)
}b(window).bind("resize.ScrollToFixed",G);
b(window).bind("scroll.ScrollToFixed",J);
if("ontouchmove" in window){b(window).bind("touchmove.ScrollToFixed",E)
}if(o.options.preFixed){K.bind("preFixed.ScrollToFixed",o.options.preFixed)
}if(o.options.postFixed){K.bind("postFixed.ScrollToFixed",o.options.postFixed)
}if(o.options.preUnfixed){K.bind("preUnfixed.ScrollToFixed",o.options.preUnfixed)
}if(o.options.postUnfixed){K.bind("postUnfixed.ScrollToFixed",o.options.postUnfixed)
}if(o.options.preAbsolute){K.bind("preAbsolute.ScrollToFixed",o.options.preAbsolute)
}if(o.options.postAbsolute){K.bind("postAbsolute.ScrollToFixed",o.options.postAbsolute)
}if(o.options.fixed){K.bind("fixed.ScrollToFixed",o.options.fixed)
}if(o.options.unfixed){K.bind("unfixed.ScrollToFixed",o.options.unfixed)
}if(o.options.spacerClass){x.addClass(o.options.spacerClass)
}K.bind("resize.ScrollToFixed",function(){x.height(K.height())
});
K.bind("scroll.ScrollToFixed",function(){K.trigger("preUnfixed.ScrollToFixed");
n();
K.trigger("unfixed.ScrollToFixed");
E()
});
K.bind("detach.ScrollToFixed",function(M){v(M);
K.trigger("preUnfixed.ScrollToFixed");
n();
K.trigger("unfixed.ScrollToFixed");
b(window).unbind("resize.ScrollToFixed",G);
b(window).unbind("scroll.ScrollToFixed",J);
K.unbind(".ScrollToFixed");
x.remove();
o.$el.removeData("ScrollToFixed")
});
G()
};
o.init()
};
b.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};
b.fn.scrollToFixed=function(c){return this.each(function(){(new b.ScrollToFixed(this,c))
})
}
})(jQuery);
/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 1.4.12
 */
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{b(jQuery)
}}(function(d){var b=d.scrollTo=function(g,f,e){return d(window).scrollTo(g,f,e)
};
b.defaults={axis:"xy",duration:parseFloat(d.fn.jquery)>=1.3?0:1,limit:true};
b.window=function(e){return d(window)._scrollable()
};
d.fn._scrollable=function(){return this.map(function(){var f=this,e=!f.nodeName||d.inArray(f.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!e){return f
}var g=(f.contentWindow||f).document||f.ownerDocument||f;
return/webkit/i.test(navigator.userAgent)||g.compatMode=="BackCompat"?g.body:g.documentElement
})
};
d.fn.scrollTo=function(g,f,e){if(typeof f=="object"){e=f;
f=0
}if(typeof e=="function"){e={onAfter:e}
}if(g=="max"){g=9000000000
}e=d.extend({},b.defaults,e);
f=f||e.duration;
e.queue=e.queue&&e.axis.length>1;
if(e.queue){f/=2
}e.offset=c(e.offset);
e.over=c(e.over);
return this._scrollable().each(function(){if(g==null){return
}var o=this,m=d(o),n=g,l,h={},p=m.is("html,body");
switch(typeof n){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)){n=c(n);
break
}n=p?d(n):d(n,this);
if(!n.length){return
}case"object":if(n.is||n.style){l=(n=d(n)).offset()
}}var q=d.isFunction(e.offset)&&e.offset(o,n)||e.offset;
d.each(e.axis.split(""),function(v,w){var x=w=="x"?"Left":"Top",z=x.toLowerCase(),u="scroll"+x,t=o[u],r=b.max(o,w);
if(l){h[u]=l[z]+(p?0:t-m.offset()[z]);
if(e.margin){h[u]-=parseInt(n.css("margin"+x))||0;
h[u]-=parseInt(n.css("border"+x+"Width"))||0
}h[u]+=q[z]||0;
if(e.over[z]){h[u]+=n[w=="x"?"width":"height"]()*e.over[z]
}}else{var y=n[z];
h[u]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*r:y
}if(e.limit&&/^\d+$/.test(h[u])){h[u]=h[u]<=0?0:Math.min(h[u],r)
}if(!v&&e.queue){if(t!=h[u]){k(e.onAfterFirst)
}delete h[u]
}});
k(e.onAfter);
function k(r){m.animate(h,f,e.easing,r&&function(){r.call(this,n,e)
})
}}).end()
};
b.max=function(m,l){var k=l=="x"?"Width":"Height",f="scroll"+k;
if(!d(m).is("html,body")){return m[f]-d(m)[k.toLowerCase()]()
}var h="client"+k,g=m.ownerDocument.documentElement,e=m.ownerDocument.body;
return Math.max(g[f],e[f])-Math.min(g[h],e[h])
};
function c(e){return d.isFunction(e)||typeof e=="object"?e:{top:e,left:e}
}return b
}));
(function(b){b.fn.safeReady=function(c){b(this).ready(function(){try{c()
}catch(d){console.error(d)
}})
};
b(document).safeReady(function(){b(".globalNavLowerContainer").scrollToFixed({bottom:0,dontSetWidth:true});
c();
function c(){if(document.body.clientWidth<970){b(".globalNavLowerContainer").hide();
b(".mobileGlobalNavLowerContainer").fadeIn()
}else{b(".mobileGlobalNavLowerContainer").hide();
b(".globalNavLowerContainer").hide();
if(b(document).height()==b(window).height()){b(".globalNavLowerContainer").fadeIn()
}else{if(b(window).height()+b(window).scrollTop()>=b(document).height()-b(".globalNavUpperBar").height()){b(".globalNavLowerContainer").fadeIn()
}else{if(b(window).height()+b(window).scrollTop()<=b(document).height()-b(".globalNavUpperBar").height()){b(".globalNavLowerContainer").fadeOut()
}}}}}b(window).scroll(c);
b(window).resize(c);
b(".globalNavLower>li .globalNavLowerItemContainer").hover(function(){if(!b(this).hasClass("active")){b(this).stop().animate({maxHeight:b(this)[0].scrollHeight},600,"easeOutExpo")
}},function(){if(!b(this).hasClass("active")){b(this).stop().animate({maxHeight:"20px"},600,"easeOutBounce")
}});
b(document).on("click",".globalNavLowerTop .globalNavLowerContent p",function(){b(document).scrollTo(0,1600,{easing:"easeInQuint"})
})
})
})(jQuery);