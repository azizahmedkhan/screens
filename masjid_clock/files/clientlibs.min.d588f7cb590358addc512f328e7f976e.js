!function(){function h6(a){return a&&(a.ownerDocument||a.document||a).documentElement
}function hY(a){return a&&(a.ownerDocument&&a.ownerDocument.defaultView||a.document&&a||a.defaultView)
}function iz(b,a){return a>b?-1:b>a?1:b>=a?0:0/0
}function h1(a){return null===a?0/0:+a
}function hW(a){return !isNaN(a)
}function im(a){return{left:function(d,g,f,b){for(arguments.length<3&&(f=0),arguments.length<4&&(b=d.length);
b>f;
){var c=f+b>>>1;
a(d[c],g)<0?f=c+1:b=c
}return f
},right:function(d,g,f,b){for(arguments.length<3&&(f=0),arguments.length<4&&(b=d.length);
b>f;
){var c=f+b>>>1;
a(d[c],g)>0?b=c:f=c+1
}return f
}}
}function h5(a){return a.length
}function iG(b){for(var a=1;
b*a%1;
){a*=10
}return a
}function iC(c,a){for(var b in a){Object.defineProperty(c.prototype,b,{value:a[b],enumerable:!1})
}}function id(){this._=Object.create(null)
}function hZ(a){return(a+="")===dA||a[0]===bh?bh+a:a
}function iw(a){return(a+="")[0]===bh?a.slice(1):a
}function iq(a){return hZ(a) in this._
}function iv(a){return(a=hZ(a)) in this._&&delete this._[a]
}function h4(){var b=[];
for(var a in this._){b.push(iw(a))
}return b
}function hU(){var b=0;
for(var a in this._){++b
}return b
}function iB(){for(var a in this._){return !1
}return !0
}function h9(){this._=Object.create(null)
}function hR(a){return a
}function i5(c,a,b){return function(){var d=b.apply(a,arguments);
return d===a?c:d
}
}function hS(f,b){if(b in f){return b
}b=b.charAt(0).toUpperCase()+b.slice(1);
for(var d=0,c=hL.length;
c>d;
++d){var a=hL[d]+b;
if(a in f){return a
}}}function iF(){}function iH(){}function hT(d){function a(){for(var g,h=c,e=-1,f=h.length;
++e<f;
){(g=h[e].on)&&g.apply(this,arguments)
}return d
}var c=[],b=new id;
return a.on=function(g,e){var f,h=b.get(g);
return arguments.length<2?h&&h.on:(h&&(h.on=null,c=c.slice(0,f=c.indexOf(h)).concat(c.slice(f+1)),b.remove(g)),e&&c.push(b.set(g,{on:e})),d)
},a
}function iV(){bX.event.preventDefault()
}function ig(){for(var b,a=bX.event;
b=a.sourceEvent;
){a=b
}return a
}function jp(d){for(var a=new iH,c=0,b=arguments.length;
++c<b;
){a[arguments[c]]=hT(a)
}return a.of=function(g,f){return function(e){try{var h=e.sourceEvent=bX.event;
e.target=d,bX.event=e,a[e.type].apply(g,f)
}finally{bX.event=h
}}
},a
}function jy(a){return kj(a,aG),a
}function i3(a){return"function"==typeof a?a:function(){return g8(a,this)
}
}function jw(a){return"function"==typeof a?a:function(){return aA(a,this)
}
}function hP(k,f){function h(){this.removeAttribute(k)
}function g(){this.removeAttributeNS(k.space,k.local)
}function c(){this.setAttribute(k,f)
}function d(){this.setAttributeNS(k.space,k.local,f)
}function j(){var a=f.apply(this,arguments);
null==a?this.removeAttribute(k):this.setAttribute(k,a)
}function b(){var a=f.apply(this,arguments);
null==a?this.removeAttributeNS(k.space,k.local):this.setAttributeNS(k.space,k.local,a)
}return k=bX.ns.qualify(k),null==f?k.local?g:h:"function"==typeof f?k.local?b:j:k.local?d:c
}function h2(a){return a.trim().replace(/\s+/g," ")
}function i6(a){return new RegExp("(?:^|\\s+)"+bX.requote(a)+"(?:\\s+|$)","g")
}function iT(a){return(a+"").trim().split(/^|\s+/)
}function iW(f,b){function d(){for(var g=-1;
++g<a;
){f[g](this,b)
}}function c(){for(var h=-1,g=b.apply(this,arguments);
++h<a;
){f[h](this,g)
}}f=iT(f).map(jq);
var a=f.length;
return"function"==typeof b?c:d
}function jq(b){var a=i6(b);
return function(f,d){if(c=f.classList){return d?c.add(b):c.remove(b)
}var c=f.getAttribute("class")||"";
d?(a.lastIndex=0,a.test(c)||f.setAttribute("class",h2(c+" "+b))):f.setAttribute("class",h2(c.replace(a," ")))
}
}function iZ(g,c,f){function d(){this.style.removeProperty(g)
}function a(){this.style.setProperty(g,c,f)
}function b(){var e=c.apply(this,arguments);
null==e?this.style.removeProperty(g):this.style.setProperty(g,e,f)
}return null==c?d:"function"==typeof c?b:a
}function iS(f,b){function d(){delete this[f]
}function c(){this[f]=b
}function a(){var g=b.apply(this,arguments);
null==g?delete this[f]:this[f]=g
}return null==b?d:"function"==typeof b?a:c
}function ij(c){function a(){var d=this.ownerDocument,f=this.namespaceURI;
return f?d.createElementNS(f,c):d.createElement(c)
}function b(){return this.ownerDocument.createElementNS(c.space,c.local)
}return"function"==typeof c?c:(c=bX.ns.qualify(c)).local?b:a
}function jm(){var a=this.parentNode;
a&&a.removeChild(this)
}function jg(a){return{__data__:a}
}function i0(a){return function(){return js(this,a)
}
}function jf(a){return arguments.length||(a=iz),function(b,c){return b&&c?a(b.__data__,c.__data__):!b-!c
}
}function iM(k,f){for(var h=0,g=k.length;
g>h;
h++){for(var c,d=k[h],j=0,b=d.length;
b>j;
j++){(c=d[j])&&f(c,j,h)
}}return k
}function iL(a){return kj(a,e7),a
}function iQ(c){var a,b;
return function(g,e,f){var h,d=c[f].update,j=d.length;
for(f!=b&&(b=f,a=0),e>=a&&(a=e+1);
!(h=d[a])&&++a<j;
){}return h
}
}function iN(f,q,j){function b(){var a=this[d];
a&&(this.removeEventListener(f,a,a.$),delete this[d])
}function p(){var a=k(q,cR(arguments));
b.call(this),this.addEventListener(f,this[d]=a,a.$=j),a._=q
}function h(){var c,l=new RegExp("^__on([^.]+)"+bX.requote(f)+"$");
for(var i in this){if(c=i.match(l)){var a=this[i];
this.removeEventListener(c[1],a,a.$),delete this[i]
}}}var d="__on"+f,m=f.indexOf("."),k=j0;
m>0&&(f=f.slice(0,m));
var g=fs.get(f);
return g&&(f=g,k=jx),m?q?p:b:q?iF:h
}function j0(b,a){return function(d){var c=bX.event;
bX.event=d,a[0]=this.__data__;
try{b.apply(this,a)
}finally{bX.event=c
}}
}function jx(c,a){var b=j0(c,a);
return function(f){var d=this,e=f.relatedTarget;
e&&(e===d||8&e.compareDocumentPosition(d))||b.call(d,f)
}
}function iO(g){var f=".dragsuppress-"+ ++cG,c="click"+f,d=bX.select(hY(g)).on("touchmove"+f,iV).on("dragstart"+f,iV).on("selectstart"+f,iV);
if(null==a5&&(a5="onselectstart" in g?!1:hS(g.style,"userSelect")),a5){var h=h6(g).style,b=h[a5];
h[a5]="none"
}return function(e){if(d.on(f,null),a5&&(h[a5]=b),e){var a=function(){d.on(c,null)
};
d.on(c,function(){iV(),a()
},!0),setTimeout(a,0)
}}
}function jb(j,g){g.changedTouches&&(g=g.changedTouches[0]);
var f=j.ownerSVGElement||j;
if(f.createSVGPoint){var c=f.createSVGPoint();
if(0>gQ){var d=hY(j);
if(d.scrollX||d.scrollY){f=bX.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");
var h=f[0][0].getScreenCTM();
gQ=!(h.f||h.e),f.remove()
}}return gQ?(c.x=g.pageX,c.y=g.pageY):(c.x=g.clientX,c.y=g.clientY),c=c.matrixTransform(j.getScreenCTM().inverse()),[c.x,c.y]
}var b=j.getBoundingClientRect();
return[g.clientX-b.left-j.clientLeft,g.clientY-b.top-j.clientTop]
}function jh(){return bX.event.changedTouches[0].identifier
}function i9(a){return a>0?1:0>a?-1:0
}function iY(c,a,b){return(a[0]-c[0])*(b[1]-c[1])-(a[1]-c[1])*(b[0]-c[0])
}function d2(a){return a>1?0:-1>a?c9:Math.acos(a)
}function bL(a){return a>1?fy:-1>a?-fy:Math.asin(a)
}function hb(a){return((a=Math.exp(a))-1/a)/2
}function cD(a){return((a=Math.exp(a))+1/a)/2
}function bq(a){return((a=Math.exp(2*a))-1)/(a+1)
}function fR(a){return(a=Math.sin(a/2))*a
}function dG(){}function jI(c,a,b){return this instanceof jI?(this.h=+c,this.s=+a,void (this.l=+b)):arguments.length<2?c instanceof jI?new jI(c.h,c.s,c.l):iR(""+c,ak,jI):new jI(c,a,b)
}function hX(h,c,f){function d(e){return e>360?e-=360:0>e&&(e+=360),60>e?b+(g-b)*e/60:180>e?g:240>e?b+(g-b)*(240-e)/60:b
}function a(e){return Math.round(255*d(e))
}var b,g;
return h=isNaN(h)?0:(h%=360)<0?h+360:h,c=isNaN(c)?0:0>c?0:c>1?1:c,f=0>f?0:f>1?1:f,g=0.5>=f?f*(1+c):f+c-f*c,b=2*f-g,new ez(a(h+120),a(h),a(h-120))
}function eR(c,a,b){return this instanceof eR?(this.h=+c,this.c=+a,void (this.l=+b)):arguments.length<2?c instanceof eR?new eR(c.h,c.c,c.l):c instanceof gS?gA(c.l,c.a,c.b):gA((c=aK((c=bX.rgb(c)).r,c.g,c.b)).l,c.a,c.b):new eR(c,a,b)
}function b3(c,a,b){return isNaN(c)&&(c=0),isNaN(a)&&(a=0),new gS(b,Math.cos(c*=bw)*a,Math.sin(c)*a)
}function gS(c,a,b){return this instanceof gS?(this.l=+c,this.a=+a,void (this.b=+b)):arguments.length<2?c instanceof gS?new gS(c.l,c.a,c.b):c instanceof eR?b3(c.h,c.c,c.l):aK((c=ez(c)).r,c.g,c.b):new gS(c,a,b)
}function f9(g,c,f){var d=(g+16)/116,a=d+c/500,b=d-f/200;
return a=dj(a)*dg,d=dj(d)*ej,b=dj(b)*b6,new ez(hB(3.2404542*a-1.5371385*d-0.4985314*b),hB(-0.969266*a+1.8760108*d+0.041556*b),hB(0.0556434*a-0.2040259*d+1.0572252*b))
}function gA(c,a,b){return c>0?new eR(Math.atan2(b,a)*f7,Math.sqrt(a*a+b*b),c):new eR(0/0,0/0,c)
}function dj(a){return a>0.206893034?a*a*a:(a-4/29)/7.787037
}function a2(a){return a>0.008856?Math.pow(a,1/3):7.787037*a+4/29
}function hB(a){return Math.round(255*(0.00304>=a?12.92*a:1.055*Math.pow(a,1/2.4)-0.055))
}function ez(c,a,b){return this instanceof ez?(this.r=~~c,this.g=~~a,void (this.b=~~b)):arguments.length<2?c instanceof ez?new ez(c.r,c.g,c.b):iR(""+c,ez,hX):new ez(c,a,b)
}function j3(a){return new ez(a>>16,a>>8&255,255&a)
}function gX(a){return j3(a)+""
}function kq(a){return 16>a?"0"+Math.max(0,a).toString(16):Math.min(255,a).toString(16)
}function iR(f,m,h){var b,l,g,d=0,k=0,j=0;
if(b=/([a-z]+)\((.*)\)/i.exec(f)){switch(l=b[2].split(","),b[1]){case"hsl":return h(parseFloat(l[0]),parseFloat(l[1])/100,parseFloat(l[2])/100);
case"rgb":return m(e9(l[0]),e9(l[1]),e9(l[2]))
}}return(g=af.get(f.toLowerCase()))?m(g.r,g.g,g.b):(null==f||"#"!==f.charAt(0)||isNaN(g=parseInt(f.slice(1),16))||(4===f.length?(d=(3840&g)>>4,d=d>>4|d,k=240&g,k=k>>4|k,j=15&g,j=j<<4|j):7===f.length&&(d=(16711680&g)>>16,k=(65280&g)>>8,j=255&g)),m(d,k,j))
}function ak(f,m,h){var b,l,g=Math.min(f/=255,m/=255,h/=255),d=Math.max(f,m,h),k=d-g,j=(d+g)/2;
return k?(l=0.5>j?k/(d+g):k/(2-d-g),b=f==d?(m-h)/k+(h>m?6:0):m==d?(h-f)/k+2:(f-m)/k+4,b*=60):(b=0/0,l=j>0&&1>j?0:b),new jI(b,l,j)
}function aK(g,c,f){g=eW(g),c=eW(c),f=eW(f);
var d=a2((0.4124564*g+0.3575761*c+0.1804375*f)/dg),a=a2((0.2126729*g+0.7151522*c+0.072175*f)/ej),b=a2((0.0193339*g+0.119192*c+0.9503041*f)/b6);
return gS(116*a-16,500*(d-a),200*(a-b))
}function eW(a){return(a/=255)<=0.04045?a/12.92:Math.pow((a+0.055)/1.055,2.4)
}function e9(b){var a=parseFloat(b);
return"%"===b.charAt(b.length-1)?Math.round(2.55*a):a
}function aT(a){return"function"==typeof a?a:function(){return a
}
}function cm(a){return function(b,d,c){return 2===arguments.length&&"function"==typeof d&&(c=d,d=null),gF(b,d,a,c)
}
}function gF(f,q,j,b){function p(){var e,a=k.status;
if(!a&&jB(k)||a>=200&&300>a||304===a){try{e=j.call(h,k)
}catch(c){return void d.error.call(h,c)
}d.load.call(h,e)
}else{d.error.call(h,k)
}}var h={},d=bX.dispatch("beforesend","progress","load","error"),m={},k=new XMLHttpRequest,g=null;
return !this.XDomainRequest||"withCredentials" in k||!/^(http(s)?:)?\/\//.test(f)||(k=new XDomainRequest),"onload" in k?k.onload=k.onerror=p:k.onreadystatechange=function(){k.readyState>3&&p()
},k.onprogress=function(c){var a=bX.event;
bX.event=c;
try{d.progress.call(h,k)
}finally{bX.event=a
}},h.header=function(c,a){return c=(c+"").toLowerCase(),arguments.length<2?m[c]:(null==a?delete m[c]:m[c]=a+"",h)
},h.mimeType=function(a){return arguments.length?(q=null==a?null:a+"",h):q
},h.responseType=function(a){return arguments.length?(g=a,h):g
},h.response=function(a){return j=a,h
},["get","post"].forEach(function(a){h[a]=function(){return h.send.apply(h,[a].concat(cR(arguments)))
}
}),h.send=function(l,i,a){if(2===arguments.length&&"function"==typeof i&&(a=i,i=null),k.open(l,f,!0),null==q||"accept" in m||(m.accept=q+",*/*"),k.setRequestHeader){for(var c in m){k.setRequestHeader(c,m[c])
}}return null!=q&&k.overrideMimeType&&k.overrideMimeType(q),null!=g&&(k.responseType=g),null!=a&&h.on("error",a).on("load",function(e){a(null,e)
}),d.beforesend.call(h,k),k.send(null==i?null:i),h
},h.abort=function(){return k.abort(),h
},bX.rebind(h,d,"on"),null==b?h:h.get(bC(b))
}function bC(a){return 1===a.length?function(b,c){a(null==b?c:null)
}:a
}function jB(b){var a=b.responseType;
return a&&"text"!==a?b.response:b.responseText
}function cX(){var b=hj(),a=eE()-b;
a>24?(isFinite(a)&&(clearTimeout(bV),bV=setTimeout(cX,a)),ep=0):(ep=1,cQ(cX))
}function hj(){var a=Date.now();
for(hs=hQ;
hs;
){a>=hs.t&&(hs.f=hs.c(a-hs.t)),hs=hs.n
}return a
}function eE(){for(var c,a=hQ,b=1/0;
a;
){a.f?a=c?c.n=a.n:hQ=a.n:(a.t<b&&(b=a.t),a=(c=a).n)
}return fP=c,b
}function fh(b,a){return a-(b?Math.ceil(Math.log(b)/Math.LN10):1)
}function bd(c,a){var b=Math.pow(10,3*gM(8-a));
return{scale:a>8?function(d){return d/b
}:function(d){return d*b
},symbol:c}
}function fW(g){var c=g.decimal,f=g.thousands,d=g.grouping,a=g.currency,b=d&&f?function(p,k){for(var h=p.length,j=[],l=0,e=d[0],m=0;
h>0&&e>0&&(m+e+1>k&&(e=Math.max(1,k-m)),j.push(p.substring(h-=e,h+e)),!((m+=e+1)>k));
){e=d[l=(l+1)%d.length]
}return j.reverse().join(f)
}:hR;
return function(q){var A=f2.exec(q),i=A[1]||" ",k=A[2]||">",F=A[3]||"-",D=A[4]||"",u=A[5],H=+A[6],z=A[7],w=A[8],x=A[9],j=1,G="",C="",t=!1,E=!0;
switch(w&&(w=+w.substring(1)),(u||"0"===i&&"="===k)&&(u=i="0",k="="),x){case"n":z=!0,x="g";
break;
case"%":j=100,C="%",x="f";
break;
case"p":j=100,C="%",x="r";
break;
case"b":case"o":case"x":case"X":"#"===D&&(G="0"+x.toLowerCase());
case"c":E=!1;
case"d":t=!0,w=0;
break;
case"s":j=-1,x="r"
}"$"===D&&(G=a[0],C=a[1]),"r"!=x||w||(x="g"),null!=w&&("g"==x?w=Math.max(1,Math.min(21,w)):("e"==x||"f"==x)&&(w=Math.max(0,Math.min(20,w)))),x=dR.get(x)||ed;
var B=u&&z;
return function(h){var o=C;
if(t&&h%1){return""
}var I=0>h||0===h&&0>1/h?(h=-h,"-"):"-"===F?"":F;
if(0>j){var p=bX.formatPrefix(h,w);
h=p.scale(h),o=p.symbol+C
}else{h*=j
}h=x(h,w);
var s,r,y=h.lastIndexOf(".");
if(0>y){var v=E?h.lastIndexOf("e"):-1;
0>v?(s=h,r=""):(s=h.substring(0,v),r=h.substring(v))
}else{s=h.substring(0,y),r=c+h.substring(y+1)
}!u&&z&&(s=b(s,1/0));
var m=G.length+s.length+r.length+(B?0:I.length),l=H>m?new Array(m=H-m+1).join(i):"";
return B&&(s=b(l+s,l.length?H-r.length:1/0)),I+=G,h=s+r,("<"===k?I+h+l:">"===k?l+I+h:"^"===k?l.substring(0,m>>=1)+I+h+l.substring(m):I+(B?h:l+h))+o
}
}
}function ed(a){return a+""
}function fA(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])
}function ax(f,m,h){function b(a){var i=f(a),c=g(i,1);
return c-a>a-i?i:c
}function l(a){return m(a=f(new iA(a-1)),1),a
}function g(c,a){return m(c=new iA(+c),a),c
}function d(s,p,e){var q=l(s),c=[];
if(e>1){for(;
p>q;
){h(q)%e||c.push(new Date(+q)),m(q,1)
}}else{for(;
p>q;
){c.push(new Date(+q)),m(q,1)
}}return c
}function k(o,a,i){try{iA=fA;
var c=new fA;
return c._=o,d(c,a,i)
}finally{iA=Date
}}f.floor=f,f.round=b,f.ceil=l,f.offset=g,f.range=d;
var j=f.utc=jP(f);
return j.floor=j,j.round=jP(b),j.ceil=jP(l),j.offset=jP(g),j.range=k,f
}function jP(a){return function(b,d){try{iA=fA;
var c=new fA;
return c._=b,a(c,d)._
}finally{iA=Date
}}
}function gh(T){function J(c){function a(h){for(var k,f,g,l=[],d=-1,m=0;
++d<b;
){37===c.charCodeAt(d)&&(l.push(c.slice(m,d)),null!=(f=cn[k=c.charAt(++d)])&&(k=c.charAt(++d)),(g=q[k])&&(k=g(h,null==f?"e"===k?" ":"0":f)),l.push(k),m=d+1)
}return l.push(c.slice(m,d)),l.join("")
}var b=c.length;
return a.parse=function(f){var g={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},d=ac(g,c,f,0);
if(d!=f.length){return null
}"p" in g&&(g.H=g.H%12+12*g.p);
var e=null!=g.Z&&iA!==fA,h=new (e?fA:iA);
return"j" in g?h.setFullYear(g.y,0,g.j):"w" in g&&("W" in g||"U" in g)?(h.setFullYear(g.y,0,1),h.setFullYear(g.y,0,"W" in g?(g.w+6)%7+7*g.W-(h.getDay()+5)%7:g.w+7*g.U-(h.getDay()+6)%7)):h.setFullYear(g.y,g.m,g.d),h.setHours(g.H+(g.Z/100|0),g.M+g.Z%100,g.S,g.L),e?h._:h
},a.toString=function(){return c
},a
}function ac(f,v,k,b){for(var s,h,d,p=0,m=v.length,g=k.length;
m>p;
){if(b>=g){return -1
}if(s=v.charCodeAt(p++),37===s){if(d=v.charAt(p++),h=L[d in cn?v.charAt(p++):d],!h||(b=h(f,k,b))<0){return -1
}}else{if(s!=k.charCodeAt(b++)){return -1
}}}return b
}function O(d,a,c){ar.lastIndex=0;
var b=ar.exec(a.slice(c));
return b?(d.w=F.get(b[0].toLowerCase()),c+b[0].length):-1
}function H(d,a,c){D.lastIndex=0;
var b=D.exec(a.slice(c));
return b?(d.w=al.get(b[0].toLowerCase()),c+b[0].length):-1
}function X(d,a,c){I.lastIndex=0;
var b=I.exec(a.slice(c));
return b?(d.m=P.get(b[0].toLowerCase()),c+b[0].length):-1
}function R(d,a,c){j.lastIndex=0;
var b=j.exec(a.slice(c));
return b?(d.m=W.get(b[0].toLowerCase()),c+b[0].length):-1
}function ao(c,a,b){return ac(c,q.c.toString(),a,b)
}function ai(c,a,b){return ac(c,q.x.toString(),a,b)
}function V(c,a,b){return ac(c,q.X.toString(),a,b)
}function K(d,a,c){var b=z.get(a.slice(c,c+=2).toLowerCase());
return null==b?-1:(d.p=b,c)
}var aa=T.dateTime,Y=T.date,Z=T.time,Q=T.periods,G=T.days,ae=T.shortDays,U=T.months,B=T.shortMonths;
J.utc=function(c){function b(e){try{iA=fA;
var d=new iA;
return d._=e,a(d)
}finally{iA=Date
}}var a=J(c);
return b.parse=function(e){try{iA=fA;
var d=a.parse(e);
return d&&d._
}finally{iA=Date
}},b.toString=a.toString,b
},J.multi=J.utc.multi=jV;
var z=bX.map(),D=cK(G),al=cb(G),ar=cK(ae),F=cb(ae),j=cK(U),W=cb(U),I=cK(B),P=cb(B);
Q.forEach(function(b,a){z.set(b.toLowerCase(),a)
});
var q={a:function(a){return ae[a.getDay()]
},A:function(a){return G[a.getDay()]
},b:function(a){return B[a.getMonth()]
},B:function(a){return U[a.getMonth()]
},c:J(aa),d:function(b,a){return i4(b.getDate(),a,2)
},e:function(b,a){return i4(b.getDate(),a,2)
},H:function(b,a){return i4(b.getHours(),a,2)
},I:function(b,a){return i4(b.getHours()%12||12,a,2)
},j:function(b,a){return i4(1+jX.dayOfYear(b),a,3)
},L:function(b,a){return i4(b.getMilliseconds(),a,3)
},m:function(b,a){return i4(b.getMonth()+1,a,2)
},M:function(b,a){return i4(b.getMinutes(),a,2)
},p:function(a){return Q[+(a.getHours()>=12)]
},S:function(b,a){return i4(b.getSeconds(),a,2)
},U:function(b,a){return i4(jX.sundayOfYear(b),a,2)
},w:function(a){return a.getDay()
},W:function(b,a){return i4(jX.mondayOfYear(b),a,2)
},x:J(Y),X:J(Z),y:function(b,a){return i4(b.getFullYear()%100,a,2)
},Y:function(b,a){return i4(b.getFullYear()%10000,a,4)
},Z:f0,"%":function(){return"%"
}},L={a:O,A:H,b:X,B:R,c:ao,d:fF,e:fF,H:bT,I:bT,j:em,L:bB,m:hF,M:hp,p:K,S:cO,U:c2,w:dL,W:dW,x:ai,X:V,y:dq,Y:bU,Z:ib,"%":dP};
return J
}function i4(g,c,f){var d=0>g?"-":"",a=(d?-g:g)+"",b=a.length;
return d+(f>b?new Array(f-b+1).join(c)+a:a)
}function cK(a){return new RegExp("^(?:"+a.map(bX.requote).join("|")+")","i")
}function cb(d){for(var a=new id,c=-1,b=d.length;
++c<b;
){a.set(d[c].toLowerCase(),c)
}return a
}function dL(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+1));
return b?(d.w=+b[0],c+b[0].length):-1
}function c2(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c));
return b?(d.U=+b[0],c+b[0].length):-1
}function dW(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c));
return b?(d.W=+b[0],c+b[0].length):-1
}function bU(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+4));
return b?(d.y=+b[0],c+b[0].length):-1
}function dq(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+2));
return b?(d.y=kf(+b[0]),c+b[0].length):-1
}function ib(c,a,b){return/^[+-]\d{4}$/.test(a=a.slice(b,b+5))?(c.Z=-a,b+5):-1
}function kf(a){return a+(a>68?1900:2000)
}function hF(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+2));
return b?(d.m=b[0]-1,c+b[0].length):-1
}function fF(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+2));
return b?(d.d=+b[0],c+b[0].length):-1
}function em(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+3));
return b?(d.j=+b[0],c+b[0].length):-1
}function bT(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+2));
return b?(d.H=+b[0],c+b[0].length):-1
}function hp(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+2));
return b?(d.M=+b[0],c+b[0].length):-1
}function cO(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+2));
return b?(d.S=+b[0],c+b[0].length):-1
}function bB(d,a,c){g3.lastIndex=0;
var b=g3.exec(a.slice(c,c+3));
return b?(d.L=+b[0],c+b[0].length):-1
}function f0(f){var b=f.getTimezoneOffset(),d=b>0?"-":"+",c=gM(b)/60|0,a=gM(b)%60;
return d+i4(c,"0",2)+i4(a,"0",2)
}function dP(d,a,c){gq.lastIndex=0;
var b=gq.exec(a.slice(c,c+1));
return b?c+b[0].length:-1
}function jV(c){for(var a=c.length,b=-1;
++b<a;
){c[b][0]=this(c[b][0])
}return function(d){for(var g=0,f=c[g];
!f[1](d);
){f=c[++g]
}return f[0](d)
}
}function ix(){}function e0(g,c,f){var d=f.s=g+c,a=d-g,b=d-a;
f.t=g-b+(c-a)
}function cj(b,a){b&&hK.hasOwnProperty(b.type)&&hK[b.type](b,a)
}function g1(g,c,f){var d,a=-1,b=g.length-f;
for(c.lineStart();
++a<b;
){d=g[a],c.point(d[0],d[1],d[2])
}c.lineEnd()
}function gn(d,a){var c=-1,b=d.length;
for(a.polygonStart();
++c<b;
){g1(d[c],a,1)
}a.polygonEnd()
}function gJ(){function g(j,v){j*=bw,v=v*bw/2+c9/4;
var q=j-d,i=q>=0?1:-1,u=i*q,r=Math.cos(v),k=Math.sin(v),w=b*k,p=a*r+w*Math.cos(u),m=w*i*Math.sin(u);
kg.add(Math.atan2(m,p)),d=j,a=r,b=k
}var c,f,d,a,b;
g7.point=function(h,e){g7.point=g,d=(c=h)*bw,a=Math.cos(e=(f=e)*bw/2+c9/4),b=Math.sin(e)
},g7.lineEnd=function(){g(c,f)
}
}function dx(d){var a=d[0],c=d[1],b=Math.cos(c);
return[b*Math.cos(a),b*Math.sin(a),Math.sin(c)]
}function bb(b,a){return b[0]*a[0]+b[1]*a[1]+b[2]*a[2]
}function hJ(b,a){return[b[1]*a[2]-b[2]*a[1],b[2]*a[0]-b[0]*a[2],b[0]*a[1]-b[1]*a[0]]
}function eI(b,a){b[0]+=a[0],b[1]+=a[1],b[2]+=a[2]
}function kd(b,a){return[b[0]*a,b[1]*a,b[2]*a]
}function g6(b){var a=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);
b[0]/=a,b[1]/=a,b[2]/=a
}function av(a){return[Math.atan2(a[1],a[0]),bL(a[2])]
}function jj(b,a){return gM(b[0]-a[0])<bO&&gM(b[1]-a[1])<bO
}function aD(c,a){c*=bw;
var b=Math.cos(a*=bw);
aS(b*Math.cos(c),b*Math.sin(c),Math.sin(a))
}function aS(c,a,b){++ay,aF+=(c-aF)/ay,aU+=(a-aU)/ay,e6+=(b-e6)/ay
}function e5(){function d(m,g){m*=bw;
var h=Math.cos(g*=bw),j=h*Math.cos(m),f=h*Math.sin(m),k=Math.sin(g),e=Math.atan2(Math.sqrt((e=c*k-b*f)*e+(e=b*j-a*k)*e+(e=a*f-c*j)*e),a*j+c*f+b*k);
jn+=e,fq+=e*(a+(a=j)),a3+=e*(c+(c=f)),cE+=e*(b+(b=k)),aS(a,c,b)
}var a,c,b;
c8.point=function(e,f){e*=bw;
var g=Math.cos(f*=bw);
a=g*Math.cos(e),c=g*Math.sin(e),b=Math.sin(f),c8.point=d,aS(a,c,b)
}
}function fn(){c8.point=aD
}function a1(){function g(k,A){k*=bw;
var w=Math.cos(A*=bw),j=w*Math.cos(k),y=w*Math.sin(k),x=Math.sin(A),m=a*x-b*y,B=b*j-d*x,u=d*y-a*j,q=Math.sqrt(m*m+B*B+u*u),r=d*j+a*y+b*x,i=q&&-d2(r)/q,z=Math.atan2(q,r);
gP+=i*m,bM+=i*B,jQ+=i*u,jn+=z,fq+=z*(d+(d=j)),a3+=z*(a+(a=y)),cE+=z*(b+(b=x)),aS(d,a,b)
}var c,f,d,a,b;
c8.point=function(h,e){c=h,f=e,c8.point=g,h*=bw;
var i=Math.cos(e*=bw);
d=i*Math.cos(h),a=i*Math.sin(h),b=Math.sin(e),aS(d,a,b)
},c8.lineEnd=function(){g(c,f),c8.lineEnd=fn,c8.point=aD
}
}function cC(c,a){function b(f,d){return f=c(f,d),a(f[0],f[1])
}return c.invert&&a.invert&&(b.invert=function(f,d){return f=a.invert(f,d),f&&c.invert(f[0],f[1])
}),b
}function gO(){return !0
}function bK(k,C,y,b,B){var q=[],j=[];
if(k.forEach(function(s){if(!((h=s.length-1)<=0)){var h,o=s[0],i=s[h];
if(jj(o,i)){B.lineStart();
for(var g=0;
h>g;
++g){B.point((o=s[g])[0],o[1])
}return void B.lineEnd()
}var p=new c6(o,s,null,!0),f=new c6(o,null,p,!1);
p.o=f,q.push(p),j.push(f),p=new c6(i,s,null,!1),f=new c6(i,null,p,!0),p.o=f,q.push(p),j.push(f)
}}),j.sort(C),jN(q),jN(j),q.length){for(var A=0,z=y,m=j.length;
m>A;
++A){j[A].e=z=!z
}for(var D,x,v=q[0];
;
){for(var w=v,d=!0;
w.v;
){if((w=w.n)===v){return
}}D=w.z,B.lineStart();
do{if(w.v=w.o.v=!0,w.e){if(d){for(var A=0,m=D.length;
m>A;
++A){B.point((x=D[A])[0],x[1])
}}else{b(w.x,w.n.x,1,B)
}w=w.n
}else{if(d){D=w.p.z;
for(var A=D.length-1;
A>=0;
--A){B.point((x=D[A])[0],x[1])
}}else{b(w.x,w.p.x,-1,B)
}w=w.p
}w=w.o,D=w.z,d=!d
}while(!w.v);
B.lineEnd()
}}}function jN(f){if(b=f.length){for(var b,d,c=0,a=f[0];
++c<b;
){a.n=d=f[c],d.p=a,a=d
}a.n=d=f[0],d.p=a
}}function c6(d,a,c,b){this.x=d,this.z=a,this.o=c,this.e=b,this.v=!1,this.n=this.p=null
}function hx(d,a,c,b){return function(q,B){function w(f,h){var g=q(f,h);
d(f=g[0],h=g[1])&&B.point(f,h)
}function I(h,f){var g=q(h,f);
F.point(g[0],g[1])
}function G(){j.point=I,F.lineStart()
}function A(){j.point=w,F.lineEnd()
}function r(h,f){n.push([h,f]);
var g=q(h,f);
k.point(g[0],g[1])
}function E(){k.lineStart(),n=[]
}function C(){r(n[0][0],n[0][1]),k.lineEnd();
var m,g=k.clean(),i=e.buffer(),h=i.length;
if(n.pop(),t.push(n),n=null,h){if(1&g){m=i[0];
var f,h=m.length-1,l=-1;
if(h>0){for(H||(B.polygonStart(),H=!0),B.lineStart();
++l<h;
){B.point((f=m[l])[0],f[1])
}B.lineEnd()
}}else{h>1&&2&g&&i.push(i.pop().concat(i.shift())),D.push(i.filter(eN))
}}}var D,t,n,F=a(B),z=q.invert(b[0],b[1]),j={point:w,lineStart:G,lineEnd:A,polygonStart:function(){j.point=r,j.lineStart=E,j.lineEnd=C,D=[],t=[]
},polygonEnd:function(){j.point=w,j.lineStart=G,j.lineEnd=A,D=bX.merge(D);
var f=aJ(z,t);
D.length?(H||(B.polygonStart(),H=!0),bK(D,bp,f,c,B)):f&&(H||(B.polygonStart(),H=!0),B.lineStart(),c(null,null,1,B),B.lineEnd()),H&&(B.polygonEnd(),H=!1),D=t=null
},sphere:function(){B.polygonStart(),B.lineStart(),c(null,null,1,B),B.lineEnd(),B.polygonEnd()
}},e=fw(),k=a(e),H=!1;
return j
}
}function eN(a){return a.length>1
}function fw(){var b,a=[];
return{lineStart:function(){a.push(b=[])
},point:function(c,d){b.push([c,d])
},lineEnd:iF,buffer:function(){var c=a;
return a=[],b=null,c
},rejoin:function(){a.length>1&&a.push(a.pop().concat(a.shift()))
}}
}function bp(b,a){return((b=b.x)[0]<0?b[1]-fy-bO:fy-b[1])-((a=a.x)[0]<0?a[1]-fy-bO:fy-a[1])
}function f5(f){var b,d=0/0,c=0/0,a=0/0;
return{lineStart:function(){f.lineStart(),b=1
},point:function(g,h){var e=g>0?c9:-c9,j=gM(g-d);
gM(j-c9)<bO?(f.point(d,c=(c+h)/2>0?fy:-fy),f.point(a,c),f.lineEnd(),f.lineStart(),f.point(e,c),f.point(g,c),b=0):a!==e&&j>=c9&&(gM(d-a)<bO&&(d-=a*bO),gM(g-e)<bO&&(g-=e*bO),c=ev(d,c,g,h),f.point(a,c),f.lineEnd(),f.lineStart(),f.point(e,c),b=0),f.point(d=g,c=h),a=e
},lineEnd:function(){f.lineEnd(),d=c=0/0
},clean:function(){return 2-b
}}
}function ev(h,c,f,d){var a,b,g=Math.sin(h-f);
return gM(g)>bO?Math.atan((Math.sin(c)*(b=Math.cos(d))*Math.sin(f)-Math.sin(d)*(a=Math.cos(c))*Math.sin(h))/(a*b*g)):(c+d)/2
}function fJ(g,c,f,d){var a;
if(null==g){a=f*fy,d.point(-c9,a),d.point(0,a),d.point(c9,a),d.point(c9,0),d.point(c9,-a),d.point(0,-a),d.point(-c9,-a),d.point(-c9,0),d.point(-c9,a)
}else{if(gM(g[0]-c[0])>bO){var b=g[0]<c[0]?c9:-c9;
a=f*b/2,d.point(-b,a),d.point(0,a),d.point(b,a)
}else{d.point(c[0],c[1])
}}}function aJ(Q,I){var Z=Q[0],K=Q[1],G=[Math.sin(Z),-Math.cos(Z),0],V=0,P=0;
kg.reset();
for(var ai=0,ac=I.length;
ac>ai;
++ai){var T=I[ai],J=T.length;
if(J){for(var Y=T[0],W=Y[0],X=Y[1]/2+c9/4,O=Math.sin(X),F=Math.cos(X),aa=1;
;
){aa===J&&(aa=0),Q=T[aa];
var R=Q[0],B=Q[1]/2+c9/4,z=Math.sin(B),C=Math.cos(B),ae=R-W,al=ae>=0?1:-1,D=al*ae,j=D>c9,U=O*z;
if(kg.add(Math.atan2(U*al*Math.sin(D),F*C+U*Math.cos(D))),V+=j?ae+al*hz:ae,j^W>=Z^R>=Z){var H=hJ(dx(Y),dx(Q));
g6(H);
var L=hJ(G,H);
g6(L);
var q=(j^ae>=0?-1:1)*bL(L[2]);
(K>q||K===q&&(H[0]||H[1]))&&(P+=j^ae>=0?1:-1)
}if(!aa++){break
}W=R,O=z,F=C,Y=Q
}}}return(-bO>V||bO>V&&0>kg)^1&P
}function j2(f){function m(c,a){return Math.cos(c)*Math.cos(a)>g
}function h(t){var q,o,r,a,p;
return{lineStart:function(){a=r=!1,p=1
},point:function(s,i){var n,u=[s,i],e=m(s,i),w=d?e?0:l(s,i):e?l(s+(0>s?c9:-c9),i):0;
if(!q&&(a=r=e)&&t.lineStart(),e!==r&&(n=b(q,u),(jj(q,n)||jj(u,n))&&(u[0]+=bO,u[1]+=bO,e=m(u[0],u[1]))),e!==r){p=0,e?(t.lineStart(),n=b(u,q),t.point(n[0],n[1])):(n=b(q,u),t.point(n[0],n[1]),t.lineEnd()),q=n
}else{if(k&&q&&d^e){var c;
w&o||!(c=b(u,q,!0))||(p=0,d?(t.lineStart(),t.point(c[0][0],c[0][1]),t.point(c[1][0],c[1][1]),t.lineEnd()):(t.point(c[1][0],c[1][1]),t.lineEnd(),t.lineStart(),t.point(c[0][0],c[0][1])))
}}!e||q&&jj(q,u)||t.point(u[0],u[1]),q=u,r=e,o=w
},lineEnd:function(){r&&t.lineEnd(),q=null
},clean:function(){return p|(a&&r)<<1
}}
}function b(V,L,ae){var Q=dx(V),J=dx(L),U=[1,0,0],ar=hJ(Q,J),al=bb(ar,ar),X=ar[0],O=al-X*X;
if(!O){return !ae&&V
}var ac=g*al/O,Z=-g*X/O,aa=hJ(U,ar),T=kd(U,ac),I=kd(ar,Z);
eI(T,I);
var ai=aa,W=bb(T,ai),F=bb(ai,ai),B=W*W-F*(bb(T,T)-1);
if(!(0>B)){var G=Math.sqrt(B),ao=kd(ai,(-W-G)/F);
if(eI(ao,T),ao=av(ao),!ae){return ao
}var at,H=V[0],i=L[0],Y=V[1],K=L[1];
H>i&&(at=H,H=i,i=at);
var R=i-H,q=gM(R-c9)<bO,P=q||bO>R;
if(!q&&Y>K&&(at=Y,Y=K,K=at),P?q?Y+K>0^ao[1]<(gM(ao[0]-H)<bO?Y:K):Y<=ao[1]&&ao[1]<=K:R>c9^(H<=ao[0]&&ao[0]<=i)){var D=kd(ai,(-W+G)/F);
return eI(D,T),[ao,av(D)]
}}}function l(c,n){var i=d?f:c9-f,a=0;
return -i>c?a|=1:c>i&&(a|=2),-i>n?a|=4:n>i&&(a|=8),a
}var g=Math.cos(f),d=g>0,k=gM(g)>bO,j=gB(f,6*bw);
return hx(m,h,j,d?[0,-f]:[-c9,f-c9])
}function gw(d,a,c,b){return function(y){var m,j=y.a,w=y.b,t=j.x,k=j.y,z=w.x,r=w.y,n=0,q=1,e=z-t,x=r-k;
if(m=d-t,e||!(m>0)){if(m/=e,0>e){if(n>m){return
}q>m&&(q=m)
}else{if(e>0){if(m>q){return
}m>n&&(n=m)
}}if(m=c-t,e||!(0>m)){if(m/=e,0>e){if(m>q){return
}m>n&&(n=m)
}else{if(e>0){if(n>m){return
}q>m&&(q=m)
}}if(m=a-k,x||!(m>0)){if(m/=x,0>x){if(n>m){return
}q>m&&(q=m)
}else{if(x>0){if(m>q){return
}m>n&&(n=m)
}}if(m=b-k,x||!(0>m)){if(m/=x,0>x){if(m>q){return
}m>n&&(n=m)
}else{if(x>0){if(n>m){return
}q>m&&(q=m)
}}return n>0&&(y.a={x:t+n*e,y:k+n*x}),1>q&&(y.b={x:t+q*e,y:k+q*x}),y
}}}}}
}function jA(h,c,f,d){function a(i,e){return gM(i[0]-h)<bO?e>0?0:3:gM(i[0]-f)<bO?e>0?2:1:gM(i[1]-c)<bO?e>0?1:0:e>0?3:2
}function b(i,e){return g(i.x,e.x)
}function g(l,i){var k=a(l,1),j=a(i,1);
return k!==j?k-j:0===k?i[1]-l[1]:1===k?l[0]-i[0]:2===k?l[1]-i[1]:i[0]-l[0]
}return function(Q){function O(p){for(var C=0,w=L.length,k=p[1],A=0;
w>A;
++A){for(var v,m=1,y=L[A],x=y.length,s=y[0];
x>m;
++m){v=y[m],s[1]<=k?v[1]>k&&iY(s,v,p)>0&&++C:v[1]<=k&&iY(s,v,p)<0&&--C,s=v
}}return 0!==C
}function G(p,m,x,k){var v=0,w=0;
if(null==p||(v=a(p,x))!==(w=a(m,x))||g(p,m)<0^x>0){do{k.point(0===v||3===v?h:f,v>1?d:c)
}while((v=(v+x+4)%4)!==w)
}else{k.point(m[0],m[1])
}}function u(k,l){return k>=h&&f>=k&&l>=c&&d>=l
}function K(l,k){u(l,k)&&Q.point(l,k)
}function I(){z.point=D,L&&L.push(F=[]),e=!0,q=!1,P=R=0/0
}function J(){r&&(D(n,j),o&&q&&B.rejoin(),r.push(B.buffer())),z.point=K,q&&Q.lineEnd()
}function D(p,k){p=Math.max(-eO,Math.min(eO,p)),k=Math.max(-eO,Math.min(eO,k));
var m=u(p,k);
if(L&&F.push([p,k]),e){n=p,j=k,o=m,e=!1,m&&(Q.lineStart(),Q.point(p,k))
}else{if(m&&q){Q.point(p,k)
}else{var l={a:{x:P,y:R},b:{x:p,y:k}};
i(l)?(q||(Q.lineStart(),Q.point(l.a.x,l.a.y)),Q.point(l.b.x,l.b.y),m||Q.lineEnd(),H=!1):m&&(Q.lineStart(),Q.point(p,k),H=!1)
}}P=p,R=k,q=m
}var r,L,F,n,j,o,P,R,q,e,H,t=Q,B=fw(),i=gw(h,c,f,d),z={point:K,lineStart:I,lineEnd:J,polygonStart:function(){Q=B,r=[],L=[],H=!0
},polygonEnd:function(){Q=t,r=bX.merge(r);
var l=O([h,d]),m=H&&l,k=r.length;
(m||k)&&(Q.polygonStart(),m&&(Q.lineStart(),G(null,null,1,Q),Q.lineEnd()),k&&bK(r,b,l,G,Q),Q.polygonEnd()),r=L=F=null
}};
return z
}
}function cT(f){var b=0,d=c9/3,c=fS(f),a=c(b,d);
return a.parallels=function(e){return arguments.length?c(b=e[0]*c9/180,d=e[1]*c9/180):[b/c9*180,d/c9*180]
},a
}function cw(h,c){function f(k,i){var j=Math.sqrt(b-2*a*Math.sin(i))/a;
return[j*Math.sin(k*=a),g-j*Math.cos(k)]
}var d=Math.sin(h),a=(d+Math.sin(c))/2,b=1+d*(2*a-d),g=Math.sqrt(b)/a;
return f.invert=function(k,i){var j=g-i;
return[Math.atan2(k,j)/a,bL((b-(k*k+j*j)*a*a)/(2*a))]
},f
}function dV(){function f(g,e){bs+=a*g-c*e,c=g,a=e
}var b,d,c,a;
j4.point=function(e,g){j4.point=f,b=c=e,d=a=g
},j4.lineEnd=function(){f(b,d)
}
}function dd(b,a){f6>b&&(f6=b),b>fK&&(fK=b),ew>a&&(ew=a),a>aL&&(aL=a)
}function eb(){function k(e,a){j.push("M",e,",",a,d)
}function f(e,a){j.push("M",e,",",a),b.point=h
}function h(e,a){j.push("L",e,",",a)
}function g(){b.point=k
}function c(){j.push("Z")
}var d=b2(4.5),j=[],b={point:k,lineStart:function(){b.point=f
},lineEnd:g,polygonStart:function(){b.lineEnd=c
},polygonEnd:function(){b.lineEnd=g,b.point=k
},pointRadius:function(a){return d=b2(a),b
},result:function(){if(j.length){var a=j.join("");
return j=[],a
}}};
return b
}function b2(a){return"m0,"+a+"a"+a+","+a+" 0 1,1 0,"+-2*a+"a"+a+","+a+" 0 1,1 0,"+2*a+"z"
}function dC(b,a){aF+=b,aU+=a,++e6
}function iI(){function c(h,f){var d=h-a,e=f-b,g=Math.sqrt(d*d+e*e);
fq+=g*(a+h)/2,a3+=g*(b+f)/2,cE+=g,dC(a=h,b=f)
}var a,b;
jC.point=function(e,d){jC.point=c,dC(a=e,b=d)
}
}function kp(){jC.point=dC
}function hN(){function f(l,h){var j=l-c,g=h-a,k=Math.sqrt(j*j+g*g);
fq+=k*(c+l)/2,a3+=k*(a+h)/2,cE+=k,k=a*l-c*h,gP+=k*(c+l),bM+=k*(a+h),jQ+=3*k,dC(c=l,a=h)
}var b,d,c,a;
jC.point=function(e,g){jC.point=f,dC(b=c=e,d=a=g)
},jC.lineEnd=function(){f(b,d)
}
}function fN(k){function f(a,i){k.moveTo(a+j,i),k.arc(a,i,j,0,hz)
}function h(a,i){k.moveTo(a,i),b.point=g
}function g(a,i){k.lineTo(a,i)
}function c(){b.point=f
}function d(){k.closePath()
}var j=4.5,b={point:f,lineStart:function(){b.point=h
},lineEnd:c,polygonStart:function(){b.lineEnd=d
},polygonEnd:function(){b.lineEnd=c,b.point=f
},pointRadius:function(a){return j=a,b
},result:iF};
return b
}function d5(k){function f(a){return(b?g:h)(a)
}function h(a){return cF(a,function(l,i){l=k(l,i),a.point(l[0],l[1])
})
}function g(B){function N(l,i){l=k(l,i),B.point(l[0],l[1])
}function D(){n=0/0,a.point=I,B.lineStart()
}function I(p,m){var l=dx([p,m]),s=k(p,m);
c(n,u,q,Q,R,z,n=s[0],u=s[1],q=p,Q=l[0],R=l[1],z=l[2],b,B),B.point(n,u)
}function F(){a.point=N,B.lineEnd()
}function P(){D(),a.point=H,a.lineEnd=C
}function H(i,e){I(L=i,J=e),K=n,E=u,A=Q,O=R,G=z,a.point=I
}function C(){c(n,u,q,Q,R,z,K,E,L,A,O,G,b,B),a.lineEnd=F,F()
}var L,J,K,E,A,O,G,q,n,u,Q,R,z,a={point:N,lineStart:D,lineEnd:F,polygonStart:function(){B.polygonStart(),a.lineStart=P
},polygonEnd:function(){B.polygonEnd(),a.lineStart=D
}};
return a
}function c(J,aa,P,al,ae,V,K,Z,X,Y,T,H,ac,U){var D=K-J,o=Z-aa,F=D*D+o*o;
if(F>4*d&&ac--){var ai=al+Y,ao=ae+T,G=V+H,i=Math.sqrt(ai*ai+ao*ao+G*G),W=Math.asin(G/=i),I=gM(gM(G)-1)<bO||gM(P-X)<bO?(P+X)/2:Math.atan2(ao,ai),R=k(I,W),n=R[0],O=R[1],B=n-J,Q=O-aa,u=o*B-D*Q;
(u*u/F>d||gM((D*B+o*Q)/F-0.5)>0.3||j>al*Y+ae*T+V*H)&&(c(J,aa,P,al,ae,V,n,O,I,ai/=i,ao/=i,G,ac,U),U.point(n,O),c(n,O,I,ai,ao,G,K,Z,X,Y,T,H,ac,U))
}}var d=0.5,j=Math.cos(30*bw),b=16;
return f.precision=function(a){return arguments.length?(b=(d=a*a)>0&&16,f):Math.sqrt(d)
},f
}function bN(b){var a=d5(function(c,d){return b([c*f7,d*f7])
});
return function(c){return dH(a(c))
}
}function hd(a){this.stream=a
}function cF(b,a){return{point:a,sphere:function(){b.sphere()
},lineStart:function(){b.lineStart()
},lineEnd:function(){b.lineEnd()
},polygonStart:function(){b.polygonStart()
},polygonEnd:function(){b.polygonEnd()
}}
}function bv(a){return fS(function(){return a
})()
}function fS(G){function B(a){return a=T(a[0]*bw,a[1]*bw),[a[0]*K+Q,I-a[1]*K]
}function O(a){return a=T.invert((a[0]-Q)/K,(I-a[1])/K),a&&[a[0]*f7,a[1]*f7]
}function D(){T=cC(F=eS(H,k,q),J);
var a=J(z,P);
return Q=L-a[0]*K,I=E+a[1]*K,A()
}function A(){return C&&(C.valid=!1,C=null),B
}var J,F,T,Q,I,C,N=d5(function(b,a){return b=J(b,a),[b[0]*K+Q,I-b[1]*K]
}),K=150,L=480,E=250,z=0,P=0,H=0,k=0,q=0,R=hy,U=hR,y=null,j=null;
return B.stream=function(a){return C&&(C.valid=!1),C=dH(R(F,N(U(a)))),C.valid=!0,C
},B.clipAngle=function(a){return arguments.length?(R=null==a?(y=a,hy):j2((y=+a)*bw),A()):y
},B.clipExtent=function(a){return arguments.length?(j=a,U=a?jA(a[0][0],a[0][1],a[1][0],a[1][1]):hR,A()):j
},B.scale=function(a){return arguments.length?(K=+a,D()):K
},B.translate=function(a){return arguments.length?(L=+a[0],E=+a[1],D()):[L,E]
},B.center=function(a){return arguments.length?(z=a[0]%360*bw,P=a[1]%360*bw,D()):[z*f7,P*f7]
},B.rotate=function(a){return arguments.length?(H=a[0]%360*bw,k=a[1]%360*bw,q=a.length>2?a[2]%360*bw:0,D()):[H*f7,k*f7,q*f7]
},bX.rebind(B,N,"precision"),function(){return J=G.apply(this,arguments),B.invert=J.invert&&O,D()
}
}function dH(a){return cF(a,function(b,c){a.point(b*bw,c*bw)
})
}function jJ(b,a){return[b,a]
}function h0(b,a){return[b>c9?b-hz:-c9>b?b+hz:b,a]
}function eS(c,a,b){return c?a||b?cC(gT(c),gb(a,b)):gT(c):a||b?gb(a,b):h0
}function b5(a){return function(b,c){return b+=a,[b>c9?b-hz:-c9>b?b+hz:b,c]
}
}function gT(b){var a=b5(b);
return a.invert=b5(-b),a
}function gb(h,c){function f(q,k){var o=Math.cos(k),j=Math.cos(q)*o,p=Math.sin(q)*o,i=Math.sin(k),m=i*d+j*a;
return[Math.atan2(p*b-m*g,j*d-i*a),bL(m*b+p*g)]
}var d=Math.cos(h),a=Math.sin(h),b=Math.cos(c),g=Math.sin(c);
return f.invert=function(q,k){var o=Math.cos(k),j=Math.cos(q)*o,p=Math.sin(q)*o,i=Math.sin(k),m=i*b-p*g;
return[Math.atan2(p*b+i*g,j*d+m*a),bL(m*d-j*a)]
},f
}function gB(d,a){var c=Math.cos(d),b=Math.sin(d);
return function(g,h,k,f){var m=k*a;
null!=g?(g=dk(c,g),h=dk(c,h),(k>0?h>g:g>h)&&(g+=k*hz)):(g=d+k*hz,h=d-0.5*m);
for(var e,j=g;
k>0?j>h:h>j;
j-=m){f.point((e=av([c,-b*Math.cos(j),-b*Math.sin(j)]))[0],e[1])
}}
}function dk(d,a){var c=dx(a);
c[0]-=d,g6(c);
var b=d2(-c[1]);
return((-c[2]<0?-b:b)+2*Math.PI-bO)%(2*Math.PI)
}function a4(d,a,c){var b=bX.range(d,a-bO,c).concat(a);
return function(e){return b.map(function(f){return[e,f]
})
}
}function hC(d,a,c){var b=bX.range(d,a-bO,c).concat(a);
return function(e){return b.map(function(f){return[f,e]
})
}
}function eA(a){return a.source
}function j5(a){return a.target
}function gY(k,C,y,b){var B=Math.cos(C),q=Math.sin(C),j=Math.cos(b),A=Math.sin(b),z=B*Math.cos(k),m=B*Math.sin(k),D=j*Math.cos(y),x=j*Math.sin(y),v=2*Math.asin(Math.sqrt(fR(b-C)+B*j*fR(y-k))),w=1/Math.sin(v),d=v?function(i){var c=Math.sin(i*=v)*w,g=Math.sin(v-i)*w,f=g*z+c*D,a=g*m+c*x,h=g*q+c*A;
return[Math.atan2(a,f)*f7,Math.atan2(h,Math.sqrt(f*f+a*a))*f7]
}:function(){return[k*f7,C*f7]
};
return d.distance=v,d
}function ad(){function d(k,f){var g=Math.sin(f*=bw),h=Math.cos(f),e=gM((k*=bw)-a),j=Math.cos(e);
cU+=Math.atan2(Math.sqrt((e=h*Math.sin(e))*e+(e=b*g-c*h*j)*e),c*g+b*h*j),a=k,c=g,b=h
}var a,c,b;
cy.point=function(e,f){a=e*bw,c=Math.sin(f*=bw),b=Math.cos(f),cy.point=d
},cy.lineEnd=function(){cy.point=cy.lineEnd=iF
}
}function iU(c,a){function b(g,j){var h=Math.cos(g),d=Math.cos(j),f=c(h*d);
return[f*d*Math.sin(g),f*Math.sin(j)]
}return b.invert=function(k,h){var g=Math.sqrt(k*k+h*h),d=a(g),f=Math.sin(d),j=Math.cos(d);
return[Math.atan2(k*f,g*j),Math.asin(g&&h*f/g)]
},b
}function am(h,c){function f(k,i){g>0?-fy+bO>i&&(i=-fy+bO):i>fy-bO&&(i=fy-bO);
var j=g/Math.pow(a(i),b);
return[j*Math.sin(b*k),g-j*Math.cos(b*k)]
}var d=Math.cos(h),a=function(e){return Math.tan(c9/4+e/2)
},b=h===c?Math.sin(h):Math.log(d/Math.cos(c))/Math.log(a(c)/a(h)),g=d*Math.pow(a(h),b)/b;
return b?(f.invert=function(l,i){var k=g-i,j=i9(b)*Math.sqrt(l*l+k*k);
return[Math.atan2(l,k)/b,2*Math.atan(Math.pow(g/j,1/b))-fy]
},f):eX
}function aM(g,c){function f(j,h){var i=b-h;
return[i*Math.sin(a*j),b-i*Math.cos(a*j)]
}var d=Math.cos(g),a=g===c?Math.sin(g):(d-Math.cos(c))/(c-g),b=d/a+g;
return gM(a)<bO?jJ:(f.invert=function(j,h){var i=b-h;
return[Math.atan2(j,i)/a,b-i9(a)*Math.sqrt(j*j+i*i)]
},f)
}function eX(b,a){return[b,Math.log(Math.tan(c9/4+a/2))]
}function fb(g){var c,f=bv(g),d=f.scale,a=f.translate,b=f.clipExtent;
return f.scale=function(){var e=d.apply(f,arguments);
return e===f?c?f.clipExtent(null):f:e
},f.translate=function(){var e=a.apply(f,arguments);
return e===f?c?f.clipExtent(null):f:e
},f.clipExtent=function(j){var h=b.apply(f,arguments);
if(h===f){if(c=null==j){var e=c9*d(),i=a();
b([[i[0]-e,i[1]-e],[i[0]+e,i[1]+e]])
}}else{c&&(h=null)
}return h
},f.clipExtent(null)
}function aV(b,a){return[Math.log(Math.tan(c9/4+a/2)),-b]
}function cp(a){return a[0]
}function gG(a){return a[1]
}function bE(f){for(var b=f.length,d=[0,1],c=2,a=2;
b>a;
a++){for(;
c>1&&iY(f[d[c-2]],f[d[c-1]],f[a])<=0;
){--c
}d[c++]=a
}return d.slice(0,c)
}function jD(b,a){return b[0]-a[0]||b[1]-a[1]
}function cY(c,a,b){return(b[0]-a[0])*(c[1]-a[1])<(b[1]-a[1])*(c[0]-a[0])
}function hk(g,y,q,b){var x=g[0],k=q[0],d=y[0]-x,w=b[0]-k,v=g[1],j=q[1],z=y[1]-v,p=b[1]-j,m=(w*(v-j)-p*(x-k))/(p*d-w*z);
return[x+m*d,v+m*z]
}function eF(c){var a=c[0],b=c[c.length-1];
return !(a[0]-b[0]||a[1]-b[1])
}function fj(){bJ(this),this.edge=this.site=this.circle=null
}function bg(b){var a=hh.pop()||new fj;
return a.site=b,a
}function fX(a){c3(a),fO.remove(a),hh.push(a),bJ(a)
}function eg(g){var w=g.circle,m=w.x,b=w.cy,v={x:m,y:b},j=g.P,d=g.N,q=[g];
fX(g);
for(var p=j;
p.circle&&gM(m-p.circle.x)<bO&&gM(b-p.circle.cy)<bO;
){j=p.P,q.unshift(p),fX(p),p=j
}q.unshift(p),c3(p);
for(var h=d;
h.circle&&gM(m-h.circle.x)<bO&&gM(b-h.circle.cy)<bO;
){d=h.N,q.push(h),fX(h),h=d
}q.push(h),c3(h);
var x,k=q.length;
for(x=1;
k>x;
++x){h=q[x],p=q[x-1],hG(h.edge,p.site,h.site,v)
}p=q[0],h=q[k-1],h.edge=ih(p.site,h.site,null,v),dM(p),dM(h)
}function fB(E){for(var z,L,B,w,H=E.x,D=E.y,P=fO._;
P;
){if(B=az(P,D)-H,B>bO){P=P.L
}else{if(w=H-jR(P,D),!(w>bO)){B>-bO?(z=P.P,L=P):w>-bO?(z=P,L=P.N):z=L=P;
break
}if(!P.R){z=P;
break
}P=P.R
}}var O=bg(E);
if(fO.insert(z,O),z||L){if(z===L){return c3(z),L=bg(z.site),fO.insert(O,L),O.edge=L.edge=ih(z.site,O.site),dM(z),void dM(L)
}if(!L){return void (O.edge=ih(z.site,O.site))
}c3(z),c3(L);
var G=z.site,A=G.x,K=G.y,I=E.x-A,J=E.y-K,C=L.site,q=C.x-A,N=C.y-K,F=2*(I*N-J*q),j=I*I+J*J,b=q*q+N*N,k={x:(N*j-J*b)/F+A,y:(I*b-q*j)/F+K};
hG(L.edge,G,C,k),O.edge=ih(G,E,null,k),L.edge=ih(E,C,null,k),dM(z),dM(L)
}}function az(g,y){var q=g.site,b=q.x,x=q.y,k=x-y;
if(!k){return b
}var d=g.P;
if(!d){return -1/0
}q=d.site;
var w=q.x,v=q.y,j=v-y;
if(!j){return w
}var z=w-b,p=1/k-1/j,m=z/j;
return p?(-m+Math.sqrt(m*m-2*p*(z*z/(-2*j)-v+j/2+x-k/2)))/p+b:(b+w)/2
}function jR(d,a){var c=d.N;
if(c){return az(c,a)
}var b=d.site;
return b.y===a?b.x:1/0
}function gj(a){this.site=a,this.edges=[]
}function i7(m){for(var G,A,b,F,w,k,D,C,q,H,z=m[0][0],x=m[1][0],y=m[0][1],j=m[1][1],E=hO,B=E.length;
B--;
){if(w=E[B],w&&w.prepare()){for(D=w.edges,C=D.length,k=0;
C>k;
){H=D[k].end(),b=H.x,F=H.y,q=D[++k%C].start(),G=q.x,A=q.y,(gM(b-G)>bO||gM(F-A)>bO)&&(D.splice(k,0,new fG(kh(w.site,H,gM(b-z)<bO&&j-F>bO?{x:z,y:gM(G-z)<bO?A:j}:gM(F-j)<bO&&x-b>bO?{x:gM(A-j)<bO?G:x,y:j}:gM(b-x)<bO&&F-y>bO?{x:x,y:gM(G-x)<bO?A:y}:gM(F-y)<bO&&b-z>bO?{x:gM(A-y)<bO?G:z,y:y}:null),w.site,null)),++C)
}}}}function cL(b,a){return a.angle-b.angle
}function cd(){bJ(this),this.x=this.y=this.arc=this.site=this.cy=null
}function dM(C){var w=C.P,J=C.N;
if(w&&J){var z=w.site,q=C.site,F=J.site;
if(z!==F){var B=q.x,N=q.y,L=z.x-B,E=z.y-N,x=F.x-B,I=F.y-N,G=2*(L*I-E*x);
if(!(G>=-jS)){var H=L*L+E*E,A=x*x+I*I,k=(I*H-E*A)/G,K=(L*A-x*H)/G,I=K+N,D=cJ.pop()||new cd;
D.arc=C,D.site=q,D.x=k+B,D.y=I+Math.sqrt(k*k+K*K),D.cy=I,C.circle=D;
for(var j=null,b=bQ._;
b;
){if(D.y<b.y||D.y===b.y&&D.x<=b.x){if(!b.L){j=b.P;
break
}b=b.L
}else{if(!b.R){j=b;
break
}b=b.R
}}bQ.insert(j,D),j||(d9=D)
}}}}function c3(b){var a=b.circle;
a&&(a.P||(d9=a.N),bQ.remove(a),cJ.push(a),bJ(a),b.circle=null)
}function dY(f){for(var b,d=ab,c=gw(f[0][0],f[0][1],f[1][0],f[1][1]),a=d.length;
a--;
){b=d[a],(!bW(b,f)||!c(b)||gM(b.a.x-b.b.x)<bO&&gM(b.a.y-b.b.y)<bO)&&(b.a=b.b=null,d.splice(a,1))
}}function bW(z,k){var G=z.b;
if(G){return !0
}var w,j,C=z.a,y=k[0][0],J=k[1][0],I=k[0][1],B=k[1][1],q=z.l,F=z.r,D=q.x,E=q.y,x=F.x,b=F.y,H=(D+x)/2,A=(E+b)/2;
if(b===E){if(y>H||H>=J){return
}if(D>x){if(C){if(C.y>=B){return
}}else{C={x:H,y:I}
}G={x:H,y:B}
}else{if(C){if(C.y<I){return
}}else{C={x:H,y:B}
}G={x:H,y:I}
}}else{if(w=(D-x)/(b-E),j=A-w*H,-1>w||w>1){if(D>x){if(C){if(C.y>=B){return
}}else{C={x:(I-j)/w,y:I}
}G={x:(B-j)/w,y:B}
}else{if(C){if(C.y<I){return
}}else{C={x:(B-j)/w,y:B}
}G={x:(I-j)/w,y:I}
}}else{if(b>E){if(C){if(C.x>=J){return
}}else{C={x:y,y:w*y+j}
}G={x:J,y:w*J+j}
}else{if(C){if(C.x<y){return
}}else{C={x:J,y:w*J+j}
}G={x:y,y:w*y+j}
}}}return z.a=C,z.b=G,!0
}function ds(b,a){this.l=b,this.r=a,this.a=this.b=null
}function ih(f,b,d,c){var a=new ds(f,b);
return ab.push(a),d&&hG(a,f,b,d),c&&hG(a,b,f,c),hO[f.i].edges.push(new fG(a,f,b)),hO[b.i].edges.push(new fG(a,b,f)),a
}function kh(d,a,c){var b=new ds(d,null);
return b.a=a,b.b=c,ab.push(b),b
}function hG(d,a,c,b){d.a||d.b?d.l===c?d.b=b:d.a=b:(d.a=b,d.l=a,d.r=c)
}function fG(f,b,d){var c=f.a,a=f.b;
this.edge=f,this.site=b,this.angle=d?Math.atan2(d.y-b.y,d.x-b.x):f.l===b?Math.atan2(a.x-c.x,c.y-a.y):Math.atan2(c.x-a.x,a.y-c.y)
}function d1(){this._=null
}function bJ(a){a.U=a.C=a.L=a.R=a.P=a.N=null
}function g9(f,b){var d=b,c=b.R,a=d.U;
a?a.L===d?a.L=c:a.R=c:f._=c,c.U=a,d.U=c,d.R=c.L,d.R&&(d.R.U=d),c.L=d
}function cB(f,b){var d=b,c=b.L,a=d.U;
a?a.L===d?a.L=c:a.R=c:f._=c,c.U=a,d.U=c,d.L=c.R,d.L&&(d.L.U=d),c.R=d
}function bn(a){for(;
a.L;
){a=a.L
}return a
}function fQ(h,c){var f,d,a,b=h.sort(dF).pop();
for(ab=[],hO=new Array(h.length),fO=new d1,bQ=new d1;
;
){if(a=d9,b&&(!a||b.y<a.y||b.y===a.y&&b.x<a.x)){(b.x!==f||b.y!==d)&&(hO[b.i]=new gj(b),fB(b),f=b.x,d=b.y),b=h.pop()
}else{if(!a){break
}eg(a.arc)
}}c&&(dY(c),i7(c));
var g={cells:hO,edges:ab};
return fO=bQ=ab=hO=null,g
}function dF(b,a){return a.y-b.y||a.x-b.x
}function jG(c,a,b){return(c.x-b.x)*(a.y-c.y)-(c.x-a.x)*(b.y-c.y)
}function hV(a){return a.x
}function eQ(a){return a.y
}function b1(){return{leaf:!0,nodes:[],point:null,x:null,y:null}
}function gR(f,m,h,b,l,g){if(!f(m,h,b,l,g)){var d=0.5*(h+l),k=0.5*(b+g),j=m.nodes;
j[0]&&gR(f,j[0],h,b,d,k),j[1]&&gR(f,j[1],d,b,l,k),j[2]&&gR(f,j[2],h,k,d,g),j[3]&&gR(f,j[3],d,k,l,g)
}}function f8(f,q,j,b,p,h,d){var m,k=1/0;
return function g(c,G,t,o,r){if(!(G>h||t>d||b>o||p>r)){if(a=c.point){var a,F=q-c.x,z=j-c.y,e=F*F+z*z;
if(k>e){var B=Math.sqrt(k=e);
b=q-B,p=j-B,h=q+B,d=j+B,m=a
}}for(var u=c.nodes,C=0.5*(G+o),A=0.5*(t+r),E=q>=C,D=j>=A,l=D<<1|E,i=l+4;
i>l;
++l){if(c=u[3&l]){switch(3&l){case 0:g(c,G,t,C,A);
break;
case 1:g(c,C,t,o,A);
break;
case 2:g(c,G,A,C,r);
break;
case 3:g(c,C,A,o,r)
}}}}}(f,b,p,h,d),m
}function gz(k,f){k=bX.rgb(k),f=bX.rgb(f);
var h=k.r,g=k.g,c=k.b,d=f.r-h,j=f.g-g,b=f.b-c;
return function(a){return"#"+kq(Math.round(h+d*a))+kq(Math.round(g+j*a))+kq(Math.round(c+b*a))
}
}function dh(f,b){var d,c={},a={};
for(d in f){d in b?c[d]=ey(f[d],b[d]):a[d]=f[d]
}for(d in b){d in f||(a[d]=b[d])
}return function(e){for(d in c){a[d]=c[d](e)
}return a
}
}function a0(b,a){return b=+b,a=+a,function(c){return b*(1-c)+a*c
}
}function hA(f,m){var h,b,l,g=fV.lastIndex=dK.lastIndex=0,d=-1,k=[],j=[];
for(f+="",m+="";
(h=fV.exec(f))&&(b=dK.exec(m));
){(l=b.index)>g&&(l=m.slice(g,l),k[d]?k[d]+=l:k[++d]=l),(h=h[0])===(b=b[0])?k[d]?k[d]+=b:k[++d]=b:(k[++d]=null,j.push({i:d,x:a0(h,b)})),g=dK.lastIndex
}return g<m.length&&(l=m.slice(g),k[d]?k[d]+=l:k[++d]=l),k.length<2?j[0]?(m=j[0].x,function(a){return m(a)+""
}):function(){return m
}:(m=j.length,function(i){for(var c,a=0;
m>a;
++a){k[(c=j[a]).i]=c.x(i)
}return k.join("")
})
}function ey(d,a){for(var c,b=bX.interpolators.length;
--b>=0&&!(c=bX.interpolators[b](d,a));
){}return c
}function j1(k,f){var h,g=[],c=[],d=k.length,j=f.length,b=Math.min(k.length,f.length);
for(h=0;
b>h;
++h){g.push(ey(k[h],f[h]))
}for(;
d>h;
++h){c[h]=k[h]
}for(;
j>h;
++h){c[h]=f[h]
}return function(a){for(h=0;
b>h;
++h){c[h]=g[h](a)
}return c
}
}function gV(a){return function(b){return 0>=b?0:b>=1?1:a(b)
}
}function kn(a){return function(b){return 1-a(1-b)
}
}function iP(a){return function(b){return 0.5*(0.5>b?a(2*b):2-a(2-2*b))
}
}function ah(a){return a*a
}function aI(a){return a*a*a
}function eU(c){if(0>=c){return 0
}if(c>=1){return 1
}var a=c*c,b=a*c;
return 4*(0.5>c?b:3*(c-a)+b-0.75)
}function e8(a){return function(b){return Math.pow(b,a)
}
}function aR(a){return 1-Math.cos(a*fy)
}function ch(a){return Math.pow(2,10*(a-1))
}function gD(a){return 1-Math.sqrt(1-a*a)
}function bA(c,a){var b;
return arguments.length<2&&(a=0.45),arguments.length?b=a/hz*Math.asin(1/c):(c=1,b=a/4),function(d){return 1+c*Math.pow(2,-10*d)*Math.sin((d-b)*hz/a)
}
}function jz(a){return a||(a=1.70158),function(b){return b*b*((a+1)*b-a)
}
}function cW(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+0.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375
}function hg(k,f){k=bX.hcl(k),f=bX.hcl(f);
var h=k.h,g=k.c,c=k.l,d=f.h-h,j=f.c-g,b=f.l-c;
return isNaN(j)&&(j=0,g=isNaN(g)?f.c:g),isNaN(d)?(d=0,h=isNaN(h)?f.h:h):d>180?d-=360:-180>d&&(d+=360),function(a){return b3(h+d*a,g+j*a,c+b*a)+""
}
}function eC(k,f){k=bX.hsl(k),f=bX.hsl(f);
var h=k.h,g=k.s,c=k.l,d=f.h-h,j=f.s-g,b=f.l-c;
return isNaN(j)&&(j=0,g=isNaN(g)?f.s:g),isNaN(d)?(d=0,h=isNaN(h)?f.h:h):d>180?d-=360:-180>d&&(d+=360),function(a){return hX(h+d*a,g+j*a,c+b*a)+""
}
}function ff(k,f){k=bX.lab(k),f=bX.lab(f);
var h=k.l,g=k.a,c=k.b,d=f.l-h,j=f.a-g,b=f.b-c;
return function(a){return f9(h+d*a,g+j*a,c+b*a)+""
}
}function a9(b,a){return a-=b,function(c){return Math.round(b+a*c)
}
}function fU(g){var c=[g.a,g.b],f=[g.c,g.d],d=fz(c),a=d8(c,f),b=fz(aq(f,c,-a))||0;
c[0]*f[1]<f[0]*c[1]&&(c[0]*=-1,c[1]*=-1,d*=-1,a*=-1),this.rotate=(d?Math.atan2(c[1],c[0]):Math.atan2(-f[0],f[1]))*f7,this.translate=[g.e,g.f],this.scale=[d,b],this.skew=b?Math.atan2(a,b)*f7:0
}function d8(b,a){return b[0]*a[0]+b[1]*a[1]
}function fz(b){var a=Math.sqrt(d8(b,b));
return a&&(b[0]/=a,b[1]/=a),a
}function aq(c,a,b){return c[0]+=b*a[0],c[1]+=b*a[1],c
}function jM(k,C){var y,b=[],B=[],q=bX.transform(k),j=bX.transform(C),A=q.translate,z=j.translate,m=q.rotate,D=j.rotate,x=q.skew,v=j.skew,w=q.scale,d=j.scale;
return A[0]!=z[0]||A[1]!=z[1]?(b.push("translate(",null,",",null,")"),B.push({i:1,x:a0(A[0],z[0])},{i:3,x:a0(A[1],z[1])})):b.push(z[0]||z[1]?"translate("+z+")":""),m!=D?(m-D>180?D+=360:D-m>180&&(m+=360),B.push({i:b.push(b.pop()+"rotate(",null,")")-2,x:a0(m,D)})):D&&b.push(b.pop()+"rotate("+D+")"),x!=v?B.push({i:b.push(b.pop()+"skewX(",null,")")-2,x:a0(x,v)}):v&&b.push(b.pop()+"skewX("+v+")"),w[0]!=d[0]||w[1]!=d[1]?(y=b.push(b.pop()+"scale(",null,",",null,")"),B.push({i:y-4,x:a0(w[0],d[0])},{i:y-2,x:a0(w[1],d[1])})):(1!=d[0]||1!=d[1])&&b.push(b.pop()+"scale("+d+")"),y=B.length,function(e){for(var c,a=-1;
++a<y;
){b[(c=B[a]).i]=c.x(e)
}return b.join("")
}
}function gf(b,a){return a=(a-=b=+b)||1/a,function(c){return(c-b)/a
}
}function i1(b,a){return a=(a-=b=+b)||1/a,function(c){return Math.max(0,Math.min(1,(c-b)/a))
}
}function cI(g){for(var c=g.source,f=g.target,d=dJ(c,f),a=[c];
c!==d;
){c=c.parent,a.push(c)
}for(var b=a.length;
f!==d;
){a.splice(b,0,f),f=f.parent
}return a
}function b8(c){for(var a=[],b=c.parent;
null!=b;
){a.push(c),c=b,b=b.parent
}return a.push(c),a
}function dJ(h,c){if(h===c){return h
}for(var f=b8(h),d=b8(c),a=f.pop(),b=d.pop(),g=null;
a===b;
){g=a,a=f.pop(),b=d.pop()
}return g
}function c0(a){a.fixed|=2
}function dU(a){a.fixed&=-7
}function bS(a){a.fixed|=4,a.px=a.x,a.py=a.y
}function dn(a){a.fixed&=-5
}function h7(f,q,j){var b=0,p=0;
if(f.charge=0,!f.leaf){for(var h,d=f.nodes,m=d.length,k=-1;
++k<m;
){h=d[k],null!=h&&(h7(h,q,j),f.charge+=h.charge,b+=h.charge*h.cx,p+=h.charge*h.cy)
}}if(f.point){f.leaf||(f.point.x+=Math.random()-0.5,f.point.y+=Math.random()-0.5);
var g=q*j[f.point.index];
f.charge+=f.pointCharge=g,b+=g*f.point.x,p+=g*f.point.y
}f.cx=b/f.charge,f.cy=p/f.charge
}function kb(b,a){return bX.rebind(b,a,"sort","children","value"),b.nodes=b,b.links=cM,b
}function hD(f,b){for(var d=[f];
null!=(f=d.pop());
){if(b(f),(a=f.children)&&(c=a.length)){for(var c,a;
--c>=0;
){d.push(a[c])
}}}}function fD(h,c){for(var f=[h],d=[];
null!=(h=f.pop());
){if(d.push(h),(b=h.children)&&(a=b.length)){for(var a,b,g=-1;
++g<a;
){f.push(b[g])
}}}for(;
null!=(h=d.pop());
){c(h)
}}function eh(a){return a.children
}function bR(a){return a.value
}function hm(b,a){return a.value-b.value
}function cM(a){return bX.merge(a.map(function(b){return(b.children||[]).map(function(c){return{source:b,target:c}
})
}))
}function bz(a){return a.x
}function fY(a){return a.y
}function dN(c,a,b){c.y0=a,c.y=b
}function jT(a){return bX.range(a.length)
}function ik(d){for(var a=-1,c=d[0].length,b=[];
++a<c;
){b[a]=0
}return b
}function eY(g){for(var c,f=1,d=0,a=g[0][1],b=g.length;
b>f;
++f){(c=g[f][1])>a&&(d=f,a=c)
}return d
}function cf(a){return a.reduce(gZ,0)
}function gZ(b,a){return b+a[1]
}function gk(b,a){return gH(b,Math.ceil(Math.log(a.length)/Math.LN2+1))
}function gH(g,c){for(var f=-1,d=+g[0],a=(g[1]-d)/c,b=[];
++f<=c;
){b[f]=a*f+d
}return b
}function dv(a){return[bX.min(a),bX.max(a)]
}function a8(b,a){return b.value-a.value
}function hH(c,a){var b=c._pack_next;
c._pack_next=a,a._pack_prev=c,a._pack_next=b,b._pack_prev=a
}function eG(b,a){b._pack_next=a,a._pack_prev=b
}function j9(f,b){var d=b.x-f.x,c=b.y-f.y,a=f.r+b.r;
return 0.999*a*a>d*d+c*c
}function g5(C){function w(a){x=Math.min(a.x-a.r,x),I=Math.max(a.x+a.r,I),G=Math.min(a.y-a.r,G),H=Math.max(a.y+a.r,H)
}if((J=C.children)&&(E=J.length)){var J,z,q,F,B,N,L,E,x=1/0,I=-1/0,G=1/0,H=-1/0;
if(J.forEach(an),z=J[0],z.x=-z.r,z.y=0,w(z),E>1&&(q=J[1],q.x=q.r,q.y=0,w(q),E>2)){for(F=J[2],aQ(z,q,F),w(F),hH(z,F),z._pack_prev=F,hH(F,q),q=z._pack_next,B=3;
E>B;
B++){aQ(z,q,F=J[B]);
var A=0,k=1,K=1;
for(N=q._pack_next;
N!==q;
N=N._pack_next,k++){if(j9(N,F)){A=1;
break
}}if(1==A){for(L=z._pack_prev;
L!==N._pack_prev&&!j9(L,F);
L=L._pack_prev,K++){}}A?(K>k||k==K&&q.r<z.r?eG(z,q=N):eG(z=L,q),B--):(hH(z,F),q=F,w(F))
}}var D=(x+I)/2,j=(G+H)/2,b=0;
for(B=0;
E>B;
B++){F=J[B],F.x-=D,F.y-=j,b=Math.max(b,F.r+Math.sqrt(F.x*F.x+F.y*F.y))
}C.r=b,J.forEach(i8)
}}function an(a){a._pack_next=a._pack_prev=a
}function i8(a){delete a._pack_next,delete a._pack_prev
}function aB(h,c,f,d){var a=h.children;
if(h.x=c+=d*h.x,h.y=f+=d*h.y,h.r*=d,a){for(var b=-1,g=a.length;
++b<g;
){aB(a[b],c,f,d)
}}}function aQ(f,q,j){var b=f.r+j.r,p=q.x-f.x,h=q.y-f.y;
if(b&&(p||h)){var d=q.r+j.r,m=p*p+h*h;
d*=d,b*=b;
var k=0.5+(b-d)/(2*m),g=Math.sqrt(Math.max(0,2*d*(b+m)-(b-=m)*b-d*d))/(2*m);
j.x=f.x+k*p+g*h,j.y=f.y+k*h-g*p
}else{j.x=f.x+b,j.y=f.y
}}function e4(b,a){return b.parent==a.parent?1:2
}function fk(b){var a=b.children;
return a.length?a[0]:b.t
}function aZ(c){var a,b=c.children;
return(a=b.length)?b[a-1]:c.t
}function cA(d,a,c){var b=c/(a.i-d.i);
a.c-=b,a.s+=c,d.c+=b,a.z+=c,a.m+=c
}function gN(g){for(var c,f=0,d=0,a=g.children,b=a.length;
--b>=0;
){c=a[b],c.z+=f,c.m+=f,f+=c.s+(d+=c.c)
}}function bI(c,a,b){return c.a.parent===a.parent?c.a:b
}function jK(a){return 1+bX.max(a,function(b){return b.y
})
}function c4(a){return a.reduce(function(c,b){return c+b.x
},0)/a.length
}function hw(b){var a=b.children;
return a&&a.length?hw(a[0]):b
}function eM(c){var a,b=c.children;
return b&&(a=b.length)?eM(b[a-1]):c
}function fv(a){return{x:a.x,y:a.y,dx:a.dx,dy:a.dy}
}function bm(g,c){var f=g.x+c[3],d=g.y+c[0],a=g.dx-c[1]-c[3],b=g.dy-c[0]-c[2];
return 0>a&&(f+=a/2,a=0),0>b&&(d+=b/2,b=0),{x:f,y:d,dx:a,dy:b}
}function f4(c){var a=c[0],b=c[c.length-1];
return b>a?[a,b]:[b,a]
}function es(a){return a.rangeExtent?a.rangeExtent():f4(a.range())
}function fH(g,c,f,d){var a=f(g[0],g[1]),b=d(c[0],c[1]);
return function(e){return b(a(e))
}
}function aH(h,c){var f,d=0,a=h.length-1,b=h[d],g=h[a];
return b>g&&(f=d,d=a,a=f,f=b,b=g,g=f),h[d]=c.floor(b),h[a]=c.ceil(g),h
}function jZ(a){return a?{floor:function(b){return Math.floor(b/a)*a
},ceil:function(b){return Math.ceil(b/a)*a
}}:eD
}function gv(k,f,h,g){var c=[],d=[],j=0,b=Math.min(k.length,f.length)-1;
for(k[b]<k[0]&&(k=k.slice().reverse(),f=f.slice().reverse());
++j<=b;
){c.push(h(k[j-1],k[j])),d.push(g(f[j-1],f[j]))
}return function(a){var i=bX.bisect(k,a,1,b)-1;
return d[i](c[i](a))
}
}function jv(k,f,h,g){function c(){var a=Math.min(k.length,f.length)>2?gv:fH,e=g?i1:gf;
return j=a(k,f,e,h),b=a(f,k,e,ey),d
}function d(a){return j(a)
}var j,b;
return d.invert=function(a){return b(a)
},d.domain=function(a){return arguments.length?(k=a.map(Number),c()):k
},d.range=function(a){return arguments.length?(f=a,c()):f
},d.rangeRound=function(a){return d.range(a).interpolate(a9)
},d.clamp=function(a){return arguments.length?(g=a,c()):g
},d.interpolate=function(a){return arguments.length?(h=a,c()):h
},d.ticks=function(a){return db(k,a)
},d.tickFormat=function(a,i){return d6(k,a,i)
},d.nice=function(a){return cs(k,a),c()
},d.copy=function(){return jv(k,f,h,g)
},c()
}function cS(b,a){return bX.rebind(b,a,"range","rangeRound","interpolate","clamp")
}function cs(b,a){return aH(b,jZ(dT(b,a)[2]))
}function dT(g,c){null==c&&(c=10);
var f=f4(g),d=f[1]-f[0],a=Math.pow(10,Math.floor(Math.log(d/c)/Math.LN10)),b=c/d*a;
return 0.15>=b?a*=10:0.35>=b?a*=5:0.75>=b&&(a*=2),f[0]=Math.ceil(f[0]/a)*a,f[1]=Math.floor(f[1]/a)*a+0.5*a,f[2]=a,f
}function db(b,a){return bX.range.apply(bX,dT(b,a))
}function d6(g,c,f){var d=dT(g,c);
if(f){var a=f2.exec(f);
if(a.shift(),"s"===a[8]){var b=bX.formatPrefix(Math.max(gM(d[0]),gM(d[1])));
return a[7]||(a[7]="."+b0(b.scale(d[2]))),a[8]="f",f=bX.format(a.join("")),function(e){return f(b.scale(e))+b.symbol
}
}a[7]||(a[7]="."+dB(a[8],d)),f=a.join("")
}else{f=",."+b0(d[2])+"f"
}return bX.format(f)
}function b0(a){return -Math.floor(Math.log(a)/Math.LN10+0.01)
}function dB(c,a){var b=b0(a[2]);
return c in j8?Math.abs(b-b0(Math.max(gM(a[0]),gM(a[1]))))+ +("e"!==c):b-2*("%"===c)
}function iE(h,c,f,d){function a(e){return(f?Math.log(0>e?0:e):-Math.log(e>0?0:-e))/Math.log(c)
}function b(e){return f?Math.pow(c,e):-Math.pow(c,-e)
}function g(e){return h(a(e))
}return g.invert=function(e){return b(h.invert(e))
},g.domain=function(e){return arguments.length?(f=e[0]>=0,h.domain((d=e.map(Number)).map(a)),g):d
},g.base=function(i){return arguments.length?(c=+i,h.domain(d.map(a)),g):c
},g.nice=function(){var e=aH(d.map(a),f?Math:aj);
return h.domain(e),d=e.map(b),g
},g.ticks=function(){var r=f4(d),p=[],i=r[0],q=r[1],e=Math.floor(a(i)),k=Math.ceil(a(q)),m=c%1?2:c;
if(isFinite(k-e)){if(f){for(;
k>e;
e++){for(var j=1;
m>j;
j++){p.push(b(e)*j)
}}p.push(b(e))
}else{for(p.push(b(e));
e++<k;
){for(var j=m-1;
j>0;
j--){p.push(b(e)*j)
}}}for(e=0;
p[e]<i;
e++){}for(k=p.length;
p[k-1]>q;
k--){}p=p.slice(e,k)
}return p
},g.tickFormat=function(l,i){if(!arguments.length){return g2
}arguments.length<2?i=g2:"function"!=typeof i&&(i=bX.format(i));
var j,e=Math.max(0.1,l/g.ticks().length),k=f?(j=1e-12,Math.ceil):(j=-1e-12,Math.floor);
return function(m){return m/b(k(a(m)+j))<=e?i(m):""
}
},g.copy=function(){return iE(h.copy(),c,f,d)
},cS(g,h)
}function km(g,c,f){function d(e){return g(a(e))
}var a=hM(c),b=hM(1/c);
return d.invert=function(e){return b(g.invert(e))
},d.domain=function(e){return arguments.length?(g.domain((f=e.map(Number)).map(a)),d):f
},d.ticks=function(e){return db(f,e)
},d.tickFormat=function(h,e){return d6(f,h,e)
},d.nice=function(e){return d.domain(cs(f,e))
},d.exponent=function(e){return arguments.length?(a=hM(c=e),b=hM(1/c),g.domain(f.map(a)),d):c
},d.copy=function(){return km(g.copy(),c,f)
},cS(d,g)
}function hM(a){return function(b){return 0>b?-Math.pow(-b,a):Math.pow(b,a)
}
}function fM(h,c){function f(i){return b[((a.get(i)||("range"===c.t?a.set(i,h.push(i)):0/0))-1)%b.length]
}function d(i,j){return bX.range(h.length).map(function(e){return i+j*e
})
}var a,b,g;
return f.domain=function(k){if(!arguments.length){return h
}h=[],a=new id;
for(var j,l=-1,e=k.length;
++l<e;
){a.has(j=k[l])||a.set(j,h.push(j))
}return f[c.t].apply(f,c.a)
},f.range=function(e){return arguments.length?(b=e,g=0,c={t:"range",a:arguments},f):b
},f.rangePoints=function(j,i){arguments.length<2&&(i=0);
var m=j[0],e=j[1],k=h.length<2?(m=(m+e)/2,0):(e-m)/(h.length-1+i);
return b=d(m+k*i/2,k),g=0,c={t:"rangePoints",a:arguments},f
},f.rangeRoundPoints=function(j,i){arguments.length<2&&(i=0);
var m=j[0],e=j[1],k=h.length<2?(m=e=Math.round((m+e)/2),0):(e-m)/(h.length-1+i)|0;
return b=d(m+Math.round(k*i/2+(e-m-(h.length-1+i)*k)/2),k),g=0,c={t:"rangeRoundPoints",a:arguments},f
},f.rangeBands=function(j,i,o){arguments.length<2&&(i=0),arguments.length<3&&(o=i);
var e=j[1]<j[0],m=j[e-0],n=j[1-e],k=(n-m)/(h.length-i+2*o);
return b=d(m+k*o,k),e&&b.reverse(),g=k*(1-i),c={t:"rangeBands",a:arguments},f
},f.rangeRoundBands=function(j,i,o){arguments.length<2&&(i=0),arguments.length<3&&(o=i);
var e=j[1]<j[0],m=j[e-0],n=j[1-e],k=Math.floor((n-m)/(h.length-i+2*o));
return b=d(m+Math.round((n-m-(h.length-i)*k)/2),k),e&&b.reverse(),g=Math.round(k*(1-i)),c={t:"rangeRoundBands",a:arguments},f
},f.rangeBand=function(){return g
},f.rangeExtent=function(){return f4(c.a[0])
},f.copy=function(){return fM(h,c)
},f.domain(h)
}function d7(f,d){function c(){var g=0,a=d.length;
for(b=[];
++g<a;
){b[g-1]=bX.quantile(f,g/a)
}return e
}function e(a){return isNaN(a=+a)?void 0:d[bX.bisect(b,a)]
}var b;
return e.domain=function(a){return arguments.length?(f=a.map(h1).filter(hW).sort(iz),c()):f
},e.range=function(a){return arguments.length?(d=a,c()):d
},e.quantiles=function(){return b
},e.invertExtent=function(a){return a=d.indexOf(a),0>a?[0/0,0/0]:[a>0?b[a-1]:f[0],a<b.length?b[a]:f[f.length-1]]
},e.copy=function(){return d7(f,d)
},c()
}function bP(h,c,f){function d(e){return f[Math.max(0,Math.min(g,Math.floor(b*(e-h))))]
}function a(){return b=f.length/(c-h),g=f.length-1,d
}var b,g;
return d.domain=function(i){return arguments.length?(h=+i[0],c=+i[i.length-1],a()):[h,c]
},d.range=function(e){return arguments.length?(f=e,a()):f
},d.invertExtent=function(e){return e=f.indexOf(e),e=0>e?0/0:e/b+h,[e,e+1/b]
},d.copy=function(){return bP(h,c,f)
},a()
}function hf(c,a){function b(d){return d>=d?a[bX.bisect(c,d)]:void 0
}return b.domain=function(d){return arguments.length?(c=d,b):c
},b.range=function(d){return arguments.length?(a=d,b):a
},b.invertExtent=function(d){return d=a.indexOf(d),[c[d-1],c[d]]
},b.copy=function(){return hf(c,a)
},b
}function cH(b){function a(c){return +c
}return a.invert=a,a.domain=a.range=function(c){return arguments.length?(b=c.map(a),a):b
},a.ticks=function(c){return db(b,c)
},a.tickFormat=function(c,d){return d6(b,c,d)
},a.copy=function(){return cH(b)
},a
}function bx(){return 0
}function fT(a){return a.innerRadius
}function dI(a){return a.outerRadius
}function jL(a){return a.startAngle
}function h3(a){return a.endAngle
}function eT(a){return a&&a.padAngle
}function b7(d,a,c,b){return(d-c)*a-(a-b)*d>0?0:1
}function gU(T,J,ac,O,H){var X=T[0]-J[0],R=T[1]-J[1],ao=(H?O:-O)/Math.sqrt(X*X+R*R),ai=ao*R,V=-ao*X,K=T[0]+ai,aa=T[1]+V,Y=J[0]+ai,Z=J[1]+V,Q=(K+Y)/2,G=(aa+Z)/2,ae=Y-K,U=Z-aa,B=ae*ae+U*U,z=ac-O,D=K*Z-Y*aa,al=(0>U?-1:1)*Math.sqrt(z*z*B-D*D),ar=(D*U-ae*al)/B,F=(-D*ae-U*al)/B,j=(D*U+ae*al)/B,W=(-D*ae+U*al)/B,I=ar-Q,P=F-G,q=j-Q,L=W-G;
return I*I+P*P>q*q+L*L&&(ar=j,F=W),[[ar-ai,F-V],[ar*ac/z,F*ac/z]]
}function gd(k){function f(u){function e(){i.push("M",d(k(v),b))
}for(var r,i=[],v=[],q=-1,m=u.length,n=aT(h),a=aT(g);
++q<m;
){c.call(this,r=u[q],q)?v.push([+n.call(this,r,q),+a.call(this,r,q)]):v.length&&(e(),v=[])
}return v.length&&e(),i.length?i.join(""):null
}var h=cp,g=gG,c=gO,d=gC,j=d.key,b=0.7;
return f.x=function(a){return arguments.length?(h=a,f):h
},f.y=function(a){return arguments.length?(g=a,f):g
},f.defined=function(a){return arguments.length?(c=a,f):c
},f.interpolate=function(a){return arguments.length?(j="function"==typeof a?d=a:(d=aY.get(a)||gC).key,f):j
},f.tension=function(a){return arguments.length?(b=a,f):b
},f
}function gC(a){return a.join("L")
}function dm(a){return gC(a)+"Z"
}function a6(f){for(var b=0,d=f.length,c=f[0],a=[c[0],",",c[1]];
++b<d;
){a.push("H",(c[0]+(c=f[b])[0])/2,"V",c[1])
}return d>1&&a.push("H",c[0]),a.join("")
}function eB(f){for(var b=0,d=f.length,c=f[0],a=[c[0],",",c[1]];
++b<d;
){a.push("V",(c=f[b])[1],"H",c[0])
}return a.join("")
}function j7(f){for(var b=0,d=f.length,c=f[0],a=[c[0],",",c[1]];
++b<d;
){a.push("H",(c=f[b])[0],"V",c[1])
}return a.join("")
}function g0(b,a){return b.length<4?gC(b):b[1]+ap(b.slice(1,-1),aO(b,a))
}function ag(b,a){return b.length<3?gC(b):b[0]+ap((b.push(b[0]),b),aO([b[b.length-2]].concat(b,[b[1]]),a))
}function iX(b,a){return b.length<3?gC(b):b[0]+ap(b,aO(b,a))
}function ap(f,q){if(q.length<1||f.length!=q.length&&f.length!=q.length+2){return gC(f)
}var j=f.length!=q.length,b="",p=f[0],h=f[1],d=q[0],m=d,k=1;
if(j&&(b+="Q"+(h[0]-2*d[0]/3)+","+(h[1]-2*d[1]/3)+","+h[0]+","+h[1],p=f[1],k=2),q.length>1){m=q[1],h=f[k],k++,b+="C"+(p[0]+d[0])+","+(p[1]+d[1])+","+(h[0]-m[0])+","+(h[1]-m[1])+","+h[0]+","+h[1];
for(var g=2;
g<q.length;
g++,k++){h=f[k],m=q[g],b+="S"+(h[0]-m[0])+","+(h[1]-m[1])+","+h[0]+","+h[1]
}}if(j){var v=f[k];
b+="Q"+(h[0]+2*m[0]/3)+","+(h[1]+2*m[1]/3)+","+v[0]+","+v[1]
}return b
}function aO(f,m){for(var h,b=[],l=(1-m)/2,g=f[0],d=f[1],k=1,j=f.length;
++k<j;
){h=g,g=d,d=f[k],b.push([l*(d[0]-h[0]),l*(d[1]-h[1])])
}return b
}function eZ(f){if(f.length<3){return gC(f)
}var m=1,h=f.length,b=f[0],l=b[0],g=b[1],d=[l,l,l,(b=f[1])[0]],k=[g,g,g,b[1]],j=[l,",",g,"L",gI(bH,d),",",gI(bH,k)];
for(f.push(f[h-1]);
++m<=h;
){b=f[m],d.shift(),d.push(b[0]),k.shift(),k.push(b[1]),bG(j,d,k)
}return f.pop(),j.push("L",b),j.join("")
}function fd(h){if(h.length<4){return gC(h)
}for(var c,f=[],d=-1,a=h.length,b=[0],g=[0];
++d<3;
){c=h[d],b.push(c[0]),g.push(c[1])
}for(f.push(gI(bH,b)+","+gI(bH,g)),--d;
++d<a;
){c=h[d],b.shift(),b.push(c[0]),g.shift(),g.push(c[1]),bG(f,b,g)
}return f.join("")
}function aX(k){for(var f,h,g=-1,c=k.length,d=c+4,j=[],b=[];
++g<4;
){h=k[g%c],j.push(h[0]),b.push(h[1])
}for(f=[gI(bH,j),",",gI(bH,b)],--g;
++g<d;
){h=k[g%c],j.shift(),j.push(h[0]),b.shift(),b.push(h[1]),bG(f,j,b)
}return f.join("")
}function cv(f,q){var j=f.length-1;
if(j){for(var b,p,h=f[0][0],d=f[0][1],m=f[j][0]-h,k=f[j][1]-d,g=-1;
++g<=j;
){b=f[g],p=g/j,b[0]=q*b[0]+(1-q)*(h+p*m),b[1]=q*b[1]+(1-q)*(d+p*k)
}}return eZ(f)
}function gI(b,a){return b[0]*a[0]+b[1]*a[1]+b[2]*a[2]+b[3]*a[3]
}function bG(c,a,b){c.push("C",gI(cx,a),",",gI(cx,b),",",gI(gK,a),",",gI(gK,b),",",gI(bH,a),",",gI(bH,b))
}function jF(b,a){return(a[1]-b[1])/(a[0]-b[0])
}function cZ(h){for(var c=0,f=h.length-1,d=[],a=h[0],b=h[1],g=d[0]=jF(a,b);
++c<f;
){d[c]=(g+(g=jF(a=b,b=h[c+1])))/2
}return d[c]=g,d
}function hn(f){for(var m,h,b,l,g=[],d=cZ(f),k=-1,j=f.length-1;
++k<j;
){m=jF(f[k],f[k+1]),gM(m)<bO?d[k]=d[k+1]=0:(h=d[k]/m,b=d[k+1]/m,l=h*h+b*b,l>9&&(l=3*m/Math.sqrt(l),d[k]=l*h,d[k+1]=l*b))
}for(k=-1;
++k<=j;
){l=(f[Math.min(j,k+1)][0]-f[Math.max(0,k-1)][0])/(6*(1+d[k]*d[k])),g.push([l||0,d[k]*l||0])
}return g
}function eH(a){return a.length<3?gC(a):a[0]+ap(a,hn(a))
}function fm(g){for(var c,f,d,a=-1,b=g.length;
++a<b;
){c=g[a],f=c[0],d=c[1]-fy,c[0]=f*Math.cos(d),c[1]=f*Math.sin(d)
}return g
}function bj(g){function w(C){function o(){B.push("M",q(g(e),k),x,h(g(n.reverse()),k),"Z")
}for(var f,i,a,B=[],n=[],e=[],s=-1,l=C.length,u=aT(m),r=aT(v),A=m===b?function(){return i
}:aT(b),z=v===j?function(){return a
}:aT(j);
++s<l;
){d.call(this,f=C[s],s)?(n.push([i=+u.call(this,f,s),a=+r.call(this,f,s)]),e.push([+A.call(this,f,s),+z.call(this,f,s)])):n.length&&(o(),n=[],e=[])
}return n.length&&o(),B.length?B.join(""):null
}var m=cp,b=cp,v=0,j=gG,d=gO,q=gC,p=q.key,h=q,x="L",k=0.7;
return w.x=function(a){return arguments.length?(m=b=a,w):b
},w.x0=function(a){return arguments.length?(m=a,w):m
},w.x1=function(a){return arguments.length?(b=a,w):b
},w.y=function(a){return arguments.length?(v=j=a,w):j
},w.y0=function(a){return arguments.length?(v=a,w):v
},w.y1=function(a){return arguments.length?(j=a,w):j
},w.defined=function(a){return arguments.length?(d=a,w):d
},w.interpolate=function(a){return arguments.length?(p="function"==typeof a?q=a:(q=aY.get(a)||gC).key,h=q.reverse||q,x=q.closed?"M":"L",w):p
},w.tension=function(a){return arguments.length?(k=a,w):k
},w
}function fZ(a){return a.radius
}function ek(a){return[a.x,a.y]
}function fC(a){return function(){var b=a.apply(this,arguments),d=b[0],c=b[1]-fy;
return[d*Math.cos(c),d*Math.sin(c)]
}
}function aC(){return 64
}function jU(){return"circle"
}function gm(b){var a=Math.sqrt(b/c9);
return"M0,"+a+"A"+a+","+a+" 0 1,1 0,"+-a+"A"+a+","+a+" 0 1,1 0,"+a+"Z"
}function jd(a){return function(){var b,c;
(b=this[a])&&(c=b[b.active])&&(--b.count?delete b[b.active]:delete this[a],b.active+=0.5,c.event&&c.event.interrupt.call(this,this.__data__,c.index))
}
}function cN(c,a,b){return kj(c,f1),c.namespace=a,c.id=b,c
}function cg(g,c,f,d){var a=g.id,b=g.namespace;
return iM(g,"function"==typeof f?function(i,h,e){i[b][a].tween.set(c,d(f.call(i,i.__data__,h,e)))
}:(f=d(f),function(e){e[b][a].tween.set(c,f)
}))
}function dO(a){return null==a&&(a=""),function(){this.textContent=a
}
}function c5(a){return null==a?"__transition__":"__transition_"+a+"__"
}function d0(k,f,h,g,c){var d=k[h]||(k[h]={active:0,count:0}),j=d[g];
if(!j){var b=c.time;
j=d[g]={tween:new id,time:b,delay:c.delay,duration:c.duration,ease:c.ease,index:f},c=null,++d.count,bX.timer(function(r){function o(p){if(d.active>g){return t()
}var l=d[d.active];
l&&(--d.count,delete d[d.active],l.event&&l.event.interrupt.call(k,k.__data__,l.index)),d.active=g,j.event&&j.event.start.call(k,k.__data__,f),j.tween.forEach(function(u,s){(s=s.call(k,k.__data__,f))&&q.push(s)
}),i=j.ease,n=j.duration,bX.timer(function(){return a.c=e(p||1)?gO:e,1
},0,b)
}function e(s){if(d.active!==g){return 1
}for(var p=s/n,l=i(p),v=q.length;
v>0;
){q[--v].call(k,l)
}return p>=1?(j.event&&j.event.end.call(k,k.__data__,f),t()):void 0
}function t(){return --d.count?delete d[g]:delete k[h],1
}var n,i,m=j.delay,a=hs,q=[];
return a.t=m+b,r>=m?o(r-m):void (a.c=o)
},0,b)
}}function bY(c,a,b){c.attr("transform",function(e){var d=a(e);
return"translate("+(isFinite(d)?d:b(e))+",0)"
})
}function dw(c,a,b){c.attr("transform",function(e){var d=a(e);
return"translate(0,"+(isFinite(d)?d:b(e))+")"
})
}function ip(a){return a.toISOString()
}function kk(f,b,d){function c(e){return f(e)
}function a(l,k){var j=l[1]-l[0],g=j/k,h=bX.bisect(dQ,g);
return h==dQ.length?[b.year,dT(l.map(function(e){return e/31536000000
}),k)[2]]:h?b[g/dQ[h-1]<dQ[h]/g?h-1:h]:[bZ,dT(l,k)[2]]
}return c.invert=function(e){return hI(f.invert(e))
},c.domain=function(e){return arguments.length?(f.domain(e),c):f.domain().map(hI)
},c.nice=function(m,j){function k(i){return !isNaN(i)&&!m.range(i,hI(+i+1),j).length
}var h=c.domain(),l=f4(h),g=null==m?a(l,10):"number"==typeof m&&a(l,m);
return g&&(m=g[0],j=g[1]),c.domain(aH(h,j>1?{floor:function(e){for(;
k(e=m.floor(e));
){e=hI(e-1)
}return e
},ceil:function(e){for(;
k(e=m.ceil(e));
){e=hI(+e+1)
}return e
}}:m))
},c.ticks=function(k,h){var j=f4(c.domain()),g=null==k?a(j,10):"number"==typeof k?a(j,k):!k.range&&[{range:k},h];
return g&&(k=g[0],h=g[1]),k.range(j[0],hI(+j[1]+1),1>h?1:h)
},c.tickFormat=function(){return d
},c.copy=function(){return kk(f.copy(),b,d)
},cS(c,f)
}function hI(a){return new Date(a)
}function fI(a){return JSON.parse(a.responseText)
}function eq(b){var a=bF.createRange();
return a.selectNode(bF.body),a.createContextualFragment(b.responseText)
}var bX={version:"3.5.5"},hv=[].slice,cR=function(a){return hv.call(a)
},bF=this.document;
if(bF){try{cR(bF.documentElement.childNodes)[0].nodeType
}catch(f3){cR=function(c){for(var a=c.length,b=new Array(a);
a--;
){b[a]=c[a]
}return b
}
}}if(Date.now||(Date.now=function(){return +new Date
}),bF){try{bF.createElement("DIV").style.setProperty("opacity",0,"")
}catch(dS){var jY=this.Element.prototype,iD=jY.setAttribute,e3=jY.setAttributeNS,cq=this.CSSStyleDeclaration.prototype,g4=cq.setProperty;
jY.setAttribute=function(b,a){iD.call(this,b,a+"")
},jY.setAttributeNS=function(c,a,b){e3.call(this,c,a,b+"")
},cq.setProperty=function(c,a,b){g4.call(this,c,a+"",b)
}
}}bX.ascending=iz,bX.descending=function(b,a){return b>a?-1:a>b?1:a>=b?0:0/0
},bX.min=function(g,c){var f,d,a=-1,b=g.length;
if(1===arguments.length){for(;
++a<b;
){if(null!=(d=g[a])&&d>=d){f=d;
break
}}for(;
++a<b;
){null!=(d=g[a])&&f>d&&(f=d)
}}else{for(;
++a<b;
){if(null!=(d=c.call(g,g[a],a))&&d>=d){f=d;
break
}}for(;
++a<b;
){null!=(d=c.call(g,g[a],a))&&f>d&&(f=d)
}}return f
},bX.max=function(g,c){var f,d,a=-1,b=g.length;
if(1===arguments.length){for(;
++a<b;
){if(null!=(d=g[a])&&d>=d){f=d;
break
}}for(;
++a<b;
){null!=(d=g[a])&&d>f&&(f=d)
}}else{for(;
++a<b;
){if(null!=(d=c.call(g,g[a],a))&&d>=d){f=d;
break
}}for(;
++a<b;
){null!=(d=c.call(g,g[a],a))&&d>f&&(f=d)
}}return f
},bX.extent=function(h,c){var f,d,a,b=-1,g=h.length;
if(1===arguments.length){for(;
++b<g;
){if(null!=(d=h[b])&&d>=d){f=a=d;
break
}}for(;
++b<g;
){null!=(d=h[b])&&(f>d&&(f=d),d>a&&(a=d))
}}else{for(;
++b<g;
){if(null!=(d=c.call(h,h[b],b))&&d>=d){f=a=d;
break
}}for(;
++b<g;
){null!=(d=c.call(h,h[b],b))&&(f>d&&(f=d),d>a&&(a=d))
}}return[f,a]
},bX.sum=function(g,b){var d,c=0,a=g.length,f=-1;
if(1===arguments.length){for(;
++f<a;
){hW(d=+g[f])&&(c+=d)
}}else{for(;
++f<a;
){hW(d=+b.call(g,g[f],f))&&(c+=d)
}}return c
},bX.mean=function(k,f){var g,d=0,h=k.length,b=-1,j=h;
if(1===arguments.length){for(;
++b<h;
){hW(g=h1(k[b]))?d+=g:--j
}}else{for(;
++b<h;
){hW(g=h1(f.call(k,k[b],b)))?d+=g:--j
}}return j?d/j:void 0
},bX.quantile=function(g,c){var f=(g.length-1)*c+1,d=Math.floor(f),a=+g[d-1],b=f-d;
return b?a+b*(g[d]-a):a
},bX.median=function(h,e){var d,f=[],b=h.length,g=-1;
if(1===arguments.length){for(;
++g<b;
){hW(d=h1(h[g]))&&f.push(d)
}}else{for(;
++g<b;
){hW(d=h1(e.call(h,h[g],g)))&&f.push(d)
}}return f.length?bX.quantile(f.sort(iz),0.5):void 0
},bX.variance=function(d,m){var h,g,b=d.length,k=0,j=0,f=-1,p=0;
if(1===arguments.length){for(;
++f<b;
){hW(h=h1(d[f]))&&(g=h-k,k+=g/++p,j+=g*(h-k))
}}else{for(;
++f<b;
){hW(h=h1(m.call(d,d[f],f)))&&(g=h-k,k+=g/++p,j+=g*(h-k))
}}return p>1?j/(p-1):void 0
},bX.deviation=function(){var a=bX.variance.apply(this,arguments);
return a?Math.sqrt(a):a
};
var gs=im(iz);
bX.bisectLeft=gs.left,bX.bisect=bX.bisectRight=gs.right,bX.bisector=function(a){return im(1===a.length?function(b,c){return iz(a(b),c)
}:a)
},bX.shuffle=function(g,c,f){(b=arguments.length)<3&&(f=g.length,2>b&&(c=0));
for(var d,a,b=f-c;
b;
){a=Math.random()*b--|0,d=g[b+c],g[b+c]=g[a+c],g[a+c]=d
}return g
},bX.permute=function(d,a){for(var c=a.length,b=new Array(c);
c--;
){b[c]=d[a[c]]
}return b
},bX.pairs=function(g){for(var c,f=0,d=g.length-1,a=g[0],b=new Array(0>d?0:d);
d>f;
){b[f]=[c=a,a=g[++f]]
}return b
},bX.zip=function(){if(!(d=arguments.length)){return[]
}for(var g=-1,c=bX.min(arguments,h5),f=new Array(c);
++g<c;
){for(var d,a=-1,b=f[g]=new Array(d);
++a<d;
){b[a]=arguments[a][g]
}}return f
},bX.transpose=function(a){return bX.zip.apply(bX,a)
},bX.keys=function(c){var a=[];
for(var b in c){a.push(b)
}return a
},bX.values=function(c){var a=[];
for(var b in c){a.push(c[b])
}return a
},bX.entries=function(c){var a=[];
for(var b in c){a.push({key:b,value:c[b]})
}return a
},bX.merge=function(h){for(var c,f,d,a=h.length,b=-1,g=0;
++b<a;
){g+=h[b].length
}for(f=new Array(g);
--a>=0;
){for(d=h[a],c=d.length;
--c>=0;
){f[--g]=d[c]
}}return f
};
var gM=Math.abs;
bX.range=function(h,c,f){if(arguments.length<3&&(f=1,arguments.length<2&&(c=h,h=0)),(c-h)/f===1/0){throw new Error("infinite range")
}var d,a=[],b=iG(gM(f)),g=-1;
if(h*=b,c*=b,f*=b,0>f){for(;
(d=h+f*++g)>c;
){a.push(d/b)
}}else{for(;
(d=h+f*++g)<c;
){a.push(d/b)
}}return a
},bX.map=function(h,c){var f=new id;
if(h instanceof id){h.forEach(function(i,e){f.set(i,e)
})
}else{if(Array.isArray(h)){var d,a=-1,b=h.length;
if(1===arguments.length){for(;
++a<b;
){f.set(a,h[a])
}}else{for(;
++a<b;
){f.set(c.call(h,d=h[a],a),d)
}}}else{for(var g in h){f.set(g,h[g])
}}}return f
};
var dA="__proto__",bh="\x00";
iC(id,{has:iq,get:function(a){return this._[hZ(a)]
},set:function(b,a){return this._[hZ(b)]=a
},remove:iv,keys:h4,values:function(){var b=[];
for(var a in this._){b.push(this._[a])
}return b
},entries:function(){var b=[];
for(var a in this._){b.push({key:iw(a),value:this._[a]})
}return b
},size:hU,empty:iB,forEach:function(b){for(var a in this._){b.call(this,iw(a),this._[a])
}}}),bX.nest=function(){function h(u,i,q){if(q>=b.length){return d?d.call(a,i):f?i.sort(f):i
}for(var n,w,l,j,k=-1,e=i.length,r=b[q++],m=new id;
++k<e;
){(j=m.get(n=r(w=i[k])))?j.push(w):m.set(n,[w])
}return u?(w=u(),l=function(p,o){w.set(p,h(u,o,q))
}):(w={},l=function(p,o){w[p]=h(u,o,q)
}),m.forEach(l),w
}function c(l,k){if(k>=b.length){return l
}var j=[],i=g[k++];
return l.forEach(function(m,e){j.push({key:m,values:c(e,k)})
}),i?j.sort(function(m,e){return i(m.key,e.key)
}):j
}var f,d,a={},b=[],g=[];
return a.map=function(i,j){return h(j,i,0)
},a.entries=function(i){return c(h(bX.map,i,0),0)
},a.key=function(e){return b.push(e),a
},a.sortKeys=function(e){return g[b.length-1]=e,a
},a.sortValues=function(e){return f=e,a
},a.rollup=function(e){return d=e,a
},a
},bX.set=function(d){var a=new h9;
if(d){for(var c=0,b=d.length;
b>c;
++c){a.add(d[c])
}}return a
},iC(h9,{has:iq,add:function(a){return this._[hZ(a+="")]=!0,a
},remove:iv,values:h4,size:hU,empty:iB,forEach:function(b){for(var a in this._){b.call(this,iw(a))
}}}),bX.behavior={},bX.rebind=function(f,b){for(var d,c=1,a=arguments.length;
++c<a;
){f[d=arguments[c]]=i5(f,b,b[d])
}return f
};
var hL=["webkit","ms","moz","Moz","o","O"];
bX.dispatch=function(){for(var c=new iH,a=-1,b=arguments.length;
++a<b;
){c[arguments[a]]=hT(c)
}return c
},iH.prototype.on=function(d,a){var c=d.indexOf("."),b="";
if(c>=0&&(b=d.slice(c+1),d=d.slice(0,c)),d){return arguments.length<2?this[d].on(b):this[d].on(b,a)
}if(2===arguments.length){if(null==a){for(d in this){this.hasOwnProperty(d)&&this[d].on(b,null)
}}return this
}},bX.event=null,bX.requote=function(a){return a.replace(eL,"\\$&")
};
var eL=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,kj={}.__proto__?function(b,a){b.__proto__=a
}:function(c,a){for(var b in a){c[b]=a[b]
}},g8=function(b,a){return a.querySelector(b)
},aA=function(b,a){return a.querySelectorAll(b)
},js=function(c,a){var b=c.matches||c[hS(c,"matchesSelector")];
return(js=function(e,d){return b.call(e,d)
})(c,a)
};
"function"==typeof Sizzle&&(g8=function(b,a){return Sizzle(b,a)[0]||null
},aA=Sizzle,js=Sizzle.matchesSelector),bX.selection=function(){return bX.select(bF.documentElement)
};
var aG=bX.selection.prototype=[];
aG.select=function(f){var q,j,b,p,h=[];
f=i3(f);
for(var d=-1,m=this.length;
++d<m;
){h.push(q=[]),q.parentNode=(b=this[d]).parentNode;
for(var k=-1,g=b.length;
++k<g;
){(p=b[k])?(q.push(j=f.call(p,p.__data__,k,d)),j&&"__data__" in p&&(j.__data__=p.__data__)):q.push(null)
}}return jy(h)
},aG.selectAll=function(f){var m,h,b=[];
f=jw(f);
for(var l=-1,g=this.length;
++l<g;
){for(var d=this[l],k=-1,j=d.length;
++k<j;
){(h=d[k])&&(b.push(m=cR(f.call(h,h.__data__,k,l))),m.parentNode=h)
}}return jy(b)
};
var aW={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};
bX.ns={prefix:aW,qualify:function(c){var a=c.indexOf(":"),b=c;
return a>=0&&(b=c.slice(0,a),c=c.slice(a+1)),aW.hasOwnProperty(b)?{space:aW[b],local:c}:c
}},aG.attr=function(c,a){if(arguments.length<2){if("string"==typeof c){var b=this.node();
return c=bX.ns.qualify(c),c.local?b.getAttributeNS(c.space,c.local):b.getAttribute(c)
}for(a in c){this.each(hP(a,c[a]))
}return this
}return this.each(hP(c,a))
},aG.classed=function(f,b){if(arguments.length<2){if("string"==typeof f){var d=this.node(),c=(f=iT(f)).length,a=-1;
if(b=d.classList){for(;
++a<c;
){if(!b.contains(f[a])){return !1
}}}else{for(b=d.getAttribute("class");
++a<c;
){if(!i6(f[a]).test(b)){return !1
}}}return !0
}for(b in f){this.each(iW(b,f[b]))
}return this
}return this.each(iW(f,b))
},aG.style=function(f,d,c){var a=arguments.length;
if(3>a){if("string"!=typeof f){2>a&&(d="");
for(c in f){this.each(iZ(c,f[c],d))
}return this
}if(2>a){var b=this.node();
return hY(b).getComputedStyle(b,null).getPropertyValue(f)
}c=""
}return this.each(iZ(f,d,c))
},aG.property=function(b,a){if(arguments.length<2){if("string"==typeof b){return this.node()[b]
}for(a in b){this.each(iS(a,b[a]))
}return this
}return this.each(iS(b,a))
},aG.text=function(a){return arguments.length?this.each("function"==typeof a?function(){var b=a.apply(this,arguments);
this.textContent=null==b?"":b
}:null==a?function(){this.textContent=""
}:function(){this.textContent=a
}):this.node().textContent
},aG.html=function(a){return arguments.length?this.each("function"==typeof a?function(){var b=a.apply(this,arguments);
this.innerHTML=null==b?"":b
}:null==a?function(){this.innerHTML=""
}:function(){this.innerHTML=a
}):this.node().innerHTML
},aG.append=function(a){return a=ij(a),this.select(function(){return this.appendChild(a.apply(this,arguments))
})
},aG.insert=function(b,a){return b=ij(b),a=i3(a),this.select(function(){return this.insertBefore(b.apply(this,arguments),a.apply(this,arguments)||null)
})
},aG.remove=function(){return this.each(jm)
},aG.data=function(f,m){function h(s,B){var a,F,w,q=s.length,A=B.length,x=Math.min(q,A),z=new Array(A),c=new Array(A),E=new Array(q);
if(m){var C,t=new id,D=new Array(q);
for(a=-1;
++a<q;
){t.has(C=m.call(F=s[a],F.__data__,a))?E[a]=F:t.set(C,F),D[a]=C
}for(a=-1;
++a<A;
){(F=t.get(C=m.call(B,w=B[a],a)))?F!==!0&&(z[a]=F,F.__data__=w):c[a]=jg(w),t.set(C,!0)
}for(a=-1;
++a<q;
){t.get(D[a])!==!0&&(E[a]=s[a])
}}else{for(a=-1;
++a<x;
){F=s[a],w=B[a],F?(F.__data__=w,z[a]=F):c[a]=jg(w)
}for(;
A>a;
++a){c[a]=jg(B[a])
}for(;
q>a;
++a){E[a]=s[a]
}}c.update=z,c.parentNode=z.parentNode=E.parentNode=s.parentNode,k.push(c),j.push(z),p.push(E)
}var b,l,g=-1,d=this.length;
if(!arguments.length){for(f=new Array(d=(b=this[0]).length);
++g<d;
){(l=b[g])&&(f[g]=l.__data__)
}return f
}var k=iL([]),j=jy([]),p=jy([]);
if("function"==typeof f){for(;
++g<d;
){h(b=this[g],f.call(b,b.parentNode.__data__,g))
}}else{for(;
++g<d;
){h(b=this[g],f)
}}return j.enter=function(){return k
},j.exit=function(){return p
},j
},aG.datum=function(a){return arguments.length?this.property("__data__",a):this.property("__data__")
},aG.filter=function(f){var m,h,b,l=[];
"function"!=typeof f&&(f=i0(f));
for(var g=0,d=this.length;
d>g;
g++){l.push(m=[]),m.parentNode=(h=this[g]).parentNode;
for(var k=0,j=h.length;
j>k;
k++){(b=h[k])&&f.call(b,b.__data__,k,g)&&m.push(b)
}}return jy(l)
},aG.order=function(){for(var g=-1,c=this.length;
++g<c;
){for(var f,d=this[g],a=d.length-1,b=d[a];
--a>=0;
){(f=d[a])&&(b&&b!==f.nextSibling&&b.parentNode.insertBefore(f,b),b=f)
}}return this
},aG.sort=function(c){c=jf.apply(this,arguments);
for(var a=-1,b=this.length;
++a<b;
){this[a].sort(c)
}return this.order()
},aG.each=function(a){return iM(this,function(b,d,c){a.call(b,b.__data__,d,c)
})
},aG.call=function(b){var a=cR(arguments);
return b.apply(a[0]=this,a),this
},aG.empty=function(){return !this.node()
},aG.node=function(){for(var g=0,c=this.length;
c>g;
g++){for(var f=this[g],d=0,a=f.length;
a>d;
d++){var b=f[d];
if(b){return b
}}}return null
},aG.size=function(){var a=0;
return iM(this,function(){++a
}),a
};
var e7=[];
bX.selection.enter=iL,bX.selection.enter.prototype=e7,e7.append=aG.append,e7.empty=aG.empty,e7.node=aG.node,e7.call=aG.call,e7.size=aG.size,e7.select=function(f){for(var q,j,b,p,h,d=[],m=-1,k=this.length;
++m<k;
){b=(p=this[m]).update,d.push(q=[]),q.parentNode=p.parentNode;
for(var g=-1,v=p.length;
++g<v;
){(h=p[g])?(q.push(b[g]=j=f.call(p.parentNode,h.__data__,g,m)),j.__data__=h.__data__):q.push(null)
}}return jy(d)
},e7.insert=function(b,a){return arguments.length<2&&(a=iQ(this)),aG.insert.call(this,b,a)
},bX.select=function(a){var b;
return"string"==typeof a?(b=[g8(a,bF)],b.parentNode=bF.documentElement):(b=[a],b.parentNode=h6(a)),jy([b])
},bX.selectAll=function(b){var a;
return"string"==typeof b?(a=cR(aA(b,bF)),a.parentNode=bF.documentElement):(a=b,a.parentNode=null),jy([a])
},aG.on=function(d,a,c){var b=arguments.length;
if(3>b){if("string"!=typeof d){2>b&&(a=!1);
for(c in d){this.each(iN(c,d[c],a))
}return this
}if(2>b){return(b=this.node()["__on"+d])&&b._
}c=!1
}return this.each(iN(d,a,c))
};
var fs=bX.map({mouseenter:"mouseover",mouseleave:"mouseout"});
bF&&fs.forEach(function(a){"on"+a in bF&&fs.remove(a)
});
var a5,cG=0;
bX.mouse=function(a){return jb(a,ig())
};
var gQ=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;
bX.touch=function(g,c,f){if(arguments.length<3&&(f=c,c=ig().changedTouches),c){for(var d,a=0,b=c.length;
b>a;
++a){if((d=c[a]).identifier===f){return jb(g,d)
}}}},bX.behavior.drag=function(){function g(){this.on("mousedown.drag",b).on("touchstart.drag",f)
}function d(m,j,k,h,l){return function(){function z(){var v,s,p=j(o,A);
p&&(v=p[0]-t[0],s=p[1]-t[1],e|=v|s,t=p,q({type:"drag",x:p[0]+n[0],y:p[1]+n[1],dx:v,dy:s}))
}function w(){j(o,A)&&(i.on(h+u,null).on(l+u,null),x(e&&bX.event.target===r),q({type:"dragend"}))
}var n,B=this,r=bX.event.target,o=B.parentNode,q=c.of(B,arguments),e=0,A=m(),u=".drag"+(null==A?"":"-"+A),i=bX.select(k(r)).on(h+u,z).on(l+u,w),x=iO(r),t=j(o,A);
a?(n=a.apply(B,arguments),n=[n.x-t[0],n.y-t[1]]):n=[0,0],q({type:"dragstart"})
}
}var c=jp(g,"drag","dragstart","dragend"),a=null,b=d(iF,bX.mouse,hY,"mousemove","mouseup"),f=d(jh,bX.touch,hR,"touchmove","touchend");
return g.origin=function(e){return arguments.length?(a=e,g):a
},bX.rebind(g,c,"on")
},bX.touches=function(b,a){return arguments.length<2&&(a=ig().touches),a?cR(a).map(function(c){var d=jb(b,c);
return d.identifier=c.identifier,d
}):[]
};
var bO=0.000001,jS=bO*bO,c9=Math.PI,hz=2*c9,eP=hz-bO,fy=c9/2,bw=c9/180,f7=180/c9,ex=Math.SQRT2,fL=2,aN=4;
bX.interpolateZoom=function(B,q){function I(f){var a=f*b;
if(C){var c=cD(j),d=E/(fL*F)*(c*bq(ex*a+j)-hb(j));
return[x+d*D,k+d*w,E*c/cD(ex*a+j)]
}return[x+f*D,k+f*w,E*Math.exp(ex*a)]
}var x=B[0],k=B[1],E=B[2],A=q[0],L=q[1],K=q[2],D=A-x,w=L-k,H=D*D+w*w,F=Math.sqrt(H),G=(K*K-E*E+aN*H)/(2*E*fL*F),z=(K*K-E*E-aN*H)/(2*K*fL*F),j=Math.log(Math.sqrt(G*G+1)-G),J=Math.log(Math.sqrt(z*z+1)-z),C=J-j,b=(C||Math.log(K/E))/ex;
return I.duration=1000*b,I
},bX.behavior.zoom=function(){function Z(a){a.on(V,ar).on(gy+".zoom",ao).on("dblclick.zoom",X).on(t,al)
}function at(a){return[(a[0]-ae.x)/ae.k,(a[1]-ae.y)/ae.k]
}function U(a){return[a[0]*ae.k+ae.x,a[1]*ae.k+ae.y]
}function O(a){ae.k=Math.max(B[0],Math.min(B[1],a))
}function ai(b,a){a=U(a),ae.x+=b[0]-a[0],ae.y+=b[1]-a[1]
}function Y(a,c,b,d){a.__chart__={x:ae.x,y:ae.y,k:ae.k},O(Math.pow(2,d)),ai(au=c,b),a=bX.select(a),S>0&&(a=a.transition().duration(S)),a.call(Z.event)
}function be(){bc&&bc.domain(I.range().map(function(a){return(a-ae.x)/ae.k
}).map(I.invert)),J&&J.domain(bi.range().map(function(a){return(a-ae.y)/ae.k
}).map(bi.invert))
}function ba(a){G++||a({type:"zoomstart"})
}function ac(a){be(),a({type:"zoom",scale:ae.k,translate:[ae.x,ae.y]})
}function Q(a){--G||a({type:"zoomend"}),au=null
}function ar(){function e(){l=1,ai(bX.mouse(q),k),ac(m)
}function b(){i.on(F,null).on(j,null),c(l&&bX.event.target===d),Q(m)
}var q=this,d=bX.event.target,m=P.of(q,arguments),l=0,i=bX.select(hY(q)).on(F,e).on(j,b),k=at(bX.mouse(q)),c=iO(q);
bk.call(q),ba(m)
}function al(){function f(){var a=bX.touches(e);
return i=ae.k,a.forEach(function(b){b.identifier in k&&(k[b.identifier]=at(b))
}),a
}function C(){var w=bX.event.target;
bX.select(w).on(q,c).on(l,s),z.push(w);
for(var p=bX.event.changedTouches,v=0,b=p.length;
b>v;
++v){k[p[v].identifier]=null
}var r=f(),a=Date.now();
if(1===r.length){if(500>a-E){var x=r[0];
Y(e,x,k[x.identifier],Math.floor(Math.log(ae.k)/Math.LN2)+1),iV()
}E=a
}else{if(r.length>1){var x=r[0],n=r[1],d=x[0]-n[0],m=x[1]-n[1];
h=d*d+m*m
}}}function c(){var g,x,p,b,d=bX.touches(e);
bk.call(e);
for(var w=0,v=d.length;
v>w;
++w,b=null){if(p=d[w],b=k[p.identifier]){if(x){break
}g=p,x=b
}}if(b){var y=(y=p[0]-g[0])*y+(y=p[1]-g[1])*y,m=h&&Math.sqrt(y/h);
g=[(g[0]+p[0])/2,(g[1]+p[1])/2],x=[(x[0]+b[0])/2,(x[1]+b[1])/2],O(m*i)
}E=null,ai(g,x),ac(A)
}function s(){if(bX.event.touches.length){for(var b=bX.event.changedTouches,g=0,d=b.length;
d>g;
++g){delete k[b[g].identifier]
}for(var a in k){return void f()
}}bX.selectAll(z).on(o,null),u.on(V,ar).on(t,al),D(),Q(A)
}var i,e=this,A=P.of(e,arguments),k={},h=0,o=".zoom-"+bX.event.changedTouches[0].identifier,q="touchmove"+o,l="touchend"+o,z=[],u=bX.select(e),D=iO(e);
C(),ba(A),u.on(V,null).on(t,C)
}function ao(){var a=P.of(this,arguments);
H?clearTimeout(H):(K=at(au=aa||bX.mouse(this)),bk.call(this),ba(a)),H=setTimeout(function(){H=null,Q(a)
},50),iV(),O(Math.pow(2,0.002*j6())*ae.k),ai(au,K),ac(a)
}function X(){var b=bX.mouse(this),a=Math.log(ae.k)/Math.LN2;
Y(this,b,at(b),bX.event.shiftKey?Math.ceil(a)-1:Math.floor(a)+1)
}var K,au,aa,H,E,I,bc,bi,J,ae={x:0,y:0,k:1},W=[960,500],B=jE,S=250,G=0,V="mousedown.zoom",F="mousemove.zoom",j="mouseup.zoom",t="touchstart.zoom",P=jp(Z,"zoomstart","zoom","zoomend");
return gy||(gy="onwheel" in bF?(j6=function(){return -bX.event.deltaY*(bX.event.deltaMode?120:1)
},"wheel"):"onmousewheel" in bF?(j6=function(){return bX.event.wheelDelta
},"mousewheel"):(j6=function(){return -bX.event.detail
},"MozMousePixelScroll")),Z.event=function(a){a.each(function(){var c=P.of(this,arguments),b=ae;
eJ?bX.select(this).transition().each("start.zoom",function(){ae=this.__chart__||{x:0,y:0,k:1},ba(c)
}).tween("zoom:zoom",function(){var h=W[0],g=W[1],d=au?au[0]:h/2,f=au?au[1]:g/2,k=bX.interpolateZoom([(d-ae.x)/ae.k,(f-ae.y)/ae.k,h/ae.k],[(d-b.x)/b.k,(f-b.y)/b.k,h/b.k]);
return function(i){var l=k(i),e=h/l[2];
this.__chart__=ae={x:d-l[0]*e,y:f-l[1]*e,k:e},ac(c)
}
}).each("interrupt.zoom",function(){Q(c)
}).each("end.zoom",function(){Q(c)
}):(this.__chart__=ae,ba(c),ac(c),Q(c))
})
},Z.translate=function(a){return arguments.length?(ae={x:+a[0],y:+a[1],k:ae.k},be(),Z):[ae.x,ae.y]
},Z.scale=function(a){return arguments.length?(ae={x:ae.x,y:ae.y,k:+a},be(),Z):ae.k
},Z.scaleExtent=function(a){return arguments.length?(B=null==a?jE:[+a[0],+a[1]],Z):B
},Z.center=function(a){return arguments.length?(aa=a&&[+a[0],+a[1]],Z):aa
},Z.size=function(a){return arguments.length?(W=a&&[+a[0],+a[1]],Z):W
},Z.duration=function(a){return arguments.length?(S=+a,Z):S
},Z.x=function(a){return arguments.length?(bc=a,I=a.copy(),ae={x:0,y:0,k:1},Z):bc
},Z.y=function(a){return arguments.length?(J=a,bi=a.copy(),ae={x:0,y:0,k:1},Z):J
},bX.rebind(Z,P,"on")
};
var j6,gy,jE=[0,1/0];
bX.color=dG,dG.prototype.toString=function(){return this.rgb()+""
},bX.hsl=jI;
var cV=jI.prototype=new dG;
cV.brighter=function(a){return a=Math.pow(0.7,arguments.length?a:1),new jI(this.h,this.s,this.l/a)
},cV.darker=function(a){return a=Math.pow(0.7,arguments.length?a:1),new jI(this.h,this.s,a*this.l)
},cV.rgb=function(){return hX(this.h,this.s,this.l)
},bX.hcl=eR;
var cz=eR.prototype=new dG;
cz.brighter=function(a){return new eR(this.h,this.c,Math.min(100,this.l+dZ*(arguments.length?a:1)))
},cz.darker=function(a){return new eR(this.h,this.c,Math.max(0,this.l-dZ*(arguments.length?a:1)))
},cz.rgb=function(){return b3(this.h,this.c,this.l).rgb()
},bX.lab=gS;
var dZ=18,dg=0.95047,ej=1,b6=1.08883,dE=gS.prototype=new dG;
dE.brighter=function(a){return new gS(Math.min(100,this.l+dZ*(arguments.length?a:1)),this.a,this.b)
},dE.darker=function(a){return new gS(Math.max(0,this.l-dZ*(arguments.length?a:1)),this.a,this.b)
},dE.rgb=function(){return f9(this.l,this.a,this.b)
},bX.rgb=ez;
var iK=ez.prototype=new dG;
iK.brighter=function(f){f=Math.pow(0.7,arguments.length?f:1);
var b=this.r,d=this.g,c=this.b,a=30;
return b||d||c?(b&&a>b&&(b=a),d&&a>d&&(d=a),c&&a>c&&(c=a),new ez(Math.min(255,b/f),Math.min(255,d/f),Math.min(255,c/f))):new ez(a,a,a)
},iK.darker=function(a){return a=Math.pow(0.7,arguments.length?a:1),new ez(a*this.r,a*this.g,a*this.b)
},iK.hsl=function(){return ak(this.r,this.g,this.b)
},iK.toString=function(){return"#"+kq(this.r)+kq(this.g)+kq(this.b)
};
var af=bX.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});
af.forEach(function(b,a){af.set(b,j3(a))
}),bX.functor=aT,bX.xhr=cm(hR),bX.dsv=function(f,m){function h(q,c,a){arguments.length<3&&(a=c,c=null);
var p=gF(q,m,null==c?b:l(c),a);
return p.row=function(e){return arguments.length?p.response(null==(c=e)?b:l(e)):c
},p
}function b(a){return h.parse(a.responseText)
}function l(a){return function(c){return h.parse(c.responseText,a)
}
}function g(a){return a.map(d).join(f)
}function d(a){return k.test(a)?'"'+a.replace(/\"/g,'""')+'"':a
}var k=new RegExp('["'+f+"\n]"),j=f.charCodeAt(0);
return h.parse=function(e,a){var c;
return h.parseRows(e,function(p,o){if(c){return c(p,o-1)
}var i=new Function("d","return {"+p.map(function(r,q){return JSON.stringify(r)+": d["+q+"]"
}).join(",")+"}");
c=a?function(r,q){return a(i(r),q)
}:i
})
},h.parseRows=function(q,C){function z(){if(D>=v){return p
}if(B){return B=!1,w
}var n=D;
if(34===q.charCodeAt(n)){for(var s=n;
s++<v;
){if(34===q.charCodeAt(s)){if(34!==q.charCodeAt(s+1)){break
}++s
}}D=s+2;
var o=q.charCodeAt(s+1);
return 13===o?(B=!0,10===q.charCodeAt(s+2)&&++D):10===o&&(B=!0),q.slice(n+1,s).replace(/""/g,'"')
}for(;
v>D;
){var o=q.charCodeAt(D++),i=1;
if(10===o){B=!0
}else{if(13===o){B=!0,10===q.charCodeAt(D)&&(++D,++i)
}else{if(o!==j){continue
}}}return q.slice(n,D-i)
}return q.slice(n)
}for(var c,B,w={},p={},A=[],v=q.length,D=0,y=0;
(c=z())!==p;
){for(var x=[];
c!==w&&c!==p;
){x.push(c),c=z()
}C&&null==(x=C(x,y++))||A.push(x)
}return A
},h.format=function(c){if(Array.isArray(c[0])){return h.formatRows(c)
}var e=new h9,a=[];
return c.forEach(function(o){for(var i in o){e.has(i)||a.push(e.add(i))
}}),[a.map(d).join(f)].concat(c.map(function(i){return a.map(function(o){return d(i[o])
}).join(f)
})).join("\n")
},h.formatRows=function(a){return a.map(g).join("\n")
},h
},bX.csv=bX.dsv(",","text/csv"),bX.tsv=bX.dsv("	","text/tab-separated-values");
var hQ,fP,ep,bV,hs,cQ=this[hS(this,"requestAnimationFrame")]||function(a){setTimeout(a,17)
};
bX.timer=function(g,c,f){var d=arguments.length;
2>d&&(c=0),3>d&&(f=Date.now());
var a=f+c,b={c:g,t:a,f:!1,n:null};
fP?fP.n=b:hQ=b,fP=b,ep||(bV=clearTimeout(bV),ep=1,cQ(cX))
},bX.timer.flush=function(){hj(),eE()
},bX.round=function(b,a){return a?Math.round(b*(a=Math.pow(10,a)))/a:Math.round(b)
};
var bD=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(bd);
bX.formatPrefix=function(c,a){var b=0;
return c&&(0>c&&(c*=-1),a&&(c=bX.round(c,fh(c,a))),b=1+Math.floor(1e-12+Math.log(c)/Math.LN10),b=Math.max(-24,Math.min(24,3*Math.floor((b-1)/3)))),bD[8+b/3]
};
var f2=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,dR=bX.map({b:function(a){return a.toString(2)
},c:function(a){return String.fromCharCode(a)
},o:function(a){return a.toString(8)
},x:function(a){return a.toString(16)
},X:function(a){return a.toString(16).toUpperCase()
},g:function(b,a){return b.toPrecision(a)
},e:function(b,a){return b.toExponential(a)
},f:function(b,a){return b.toFixed(a)
},r:function(b,a){return(b=bX.round(b,fh(b,a))).toFixed(Math.max(0,Math.min(20,fh(b*(1+1e-15),a))))
}}),jX=bX.time={},iA=Date;
fA.prototype={getDate:function(){return this._.getUTCDate()
},getDay:function(){return this._.getUTCDay()
},getFullYear:function(){return this._.getUTCFullYear()
},getHours:function(){return this._.getUTCHours()
},getMilliseconds:function(){return this._.getUTCMilliseconds()
},getMinutes:function(){return this._.getUTCMinutes()
},getMonth:function(){return this._.getUTCMonth()
},getSeconds:function(){return this._.getUTCSeconds()
},getTime:function(){return this._.getTime()
},getTimezoneOffset:function(){return 0
},valueOf:function(){return this._.valueOf()
},setDate:function(){e2.setUTCDate.apply(this._,arguments)
},setDay:function(){e2.setUTCDay.apply(this._,arguments)
},setFullYear:function(){e2.setUTCFullYear.apply(this._,arguments)
},setHours:function(){e2.setUTCHours.apply(this._,arguments)
},setMilliseconds:function(){e2.setUTCMilliseconds.apply(this._,arguments)
},setMinutes:function(){e2.setUTCMinutes.apply(this._,arguments)
},setMonth:function(){e2.setUTCMonth.apply(this._,arguments)
},setSeconds:function(){e2.setUTCSeconds.apply(this._,arguments)
},setTime:function(){e2.setTime.apply(this._,arguments)
}};
var e2=Date.prototype;
jX.year=ax(function(a){return a=jX.day(a),a.setMonth(0,1),a
},function(b,a){b.setFullYear(b.getFullYear()+a)
},function(a){return a.getFullYear()
}),jX.years=jX.year.range,jX.years.utc=jX.year.utc.range,jX.day=ax(function(b){var a=new iA(2000,0);
return a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),a
},function(b,a){b.setDate(b.getDate()+a)
},function(a){return a.getDate()-1
}),jX.days=jX.day.range,jX.days.utc=jX.day.utc.range,jX.dayOfYear=function(b){var a=jX.year(b);
return Math.floor((b-a-60000*(b.getTimezoneOffset()-a.getTimezoneOffset()))/86400000)
},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(c,a){a=7-a;
var b=jX[c]=ax(function(d){return(d=jX.day(d)).setDate(d.getDate()-(d.getDay()+a)%7),d
},function(e,d){e.setDate(e.getDate()+7*Math.floor(d))
},function(f){var d=jX.year(f).getDay();
return Math.floor((jX.dayOfYear(f)+(d+a)%7)/7)-(d!==a)
});
jX[c+"s"]=b.range,jX[c+"s"].utc=b.utc.range,jX[c+"OfYear"]=function(f){var d=jX.year(f).getDay();
return Math.floor((jX.dayOfYear(f)+(d+a)%7)/7)
}
}),jX.week=jX.sunday,jX.weeks=jX.sunday.range,jX.weeks.utc=jX.sunday.utc.range,jX.weekOfYear=jX.sundayOfYear;
var cn={"-":"",_:" ",0:"0"},g3=/^\s*\d+/,gq=/^%/;
bX.locale=function(a){return{numberFormat:fW(a),timeFormat:gh(a)}
};
var gL=bX.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});
bX.format=gL.numberFormat,bX.geo={},ix.prototype={s:0,t:0,add:function(a){e0(a,this.t,dz),e0(dz.s,this.s,this),this.s?this.t+=dz.t:this.s=dz.t
},reset:function(){this.s=this.t=0
},valueOf:function(){return this.s
}};
var dz=new ix;
bX.geo.stream=function(b,a){b&&bf.hasOwnProperty(b.type)?bf[b.type](b,a):cj(b,a)
};
var bf={Feature:function(b,a){cj(b.geometry,a)
},FeatureCollection:function(f,b){for(var d=f.features,c=-1,a=d.length;
++c<a;
){cj(d[c].geometry,b)
}}},hK={Sphere:function(b,a){a.sphere()
},Point:function(b,a){b=b.coordinates,a.point(b[0],b[1],b[2])
},MultiPoint:function(f,b){for(var d=f.coordinates,c=-1,a=d.length;
++c<a;
){f=d[c],b.point(f[0],f[1],f[2])
}},LineString:function(b,a){g1(b.coordinates,a,0)
},MultiLineString:function(f,b){for(var d=f.coordinates,c=-1,a=d.length;
++c<a;
){g1(d[c],b,0)
}},Polygon:function(b,a){gn(b.coordinates,a)
},MultiPolygon:function(f,b){for(var d=f.coordinates,c=-1,a=d.length;
++c<a;
){gn(d[c],b)
}},GeometryCollection:function(f,b){for(var d=f.geometries,c=-1,a=d.length;
++c<a;
){cj(d[c],b)
}}};
bX.geo.area=function(a){return eK=0,bX.geo.stream(a,g7),eK
};
var eK,kg=new ix,g7={sphere:function(){eK+=4*c9
},point:iF,lineStart:iF,lineEnd:iF,polygonStart:function(){kg.reset(),g7.lineStart=gJ
},polygonEnd:function(){var a=2*kg;
eK+=0>a?4*c9+a:a,g7.lineStart=g7.lineEnd=g7.point=iF
}};
bX.geo.bounds=function(){function F(b,a){j.push(q=[B=b,J=b]),L>a&&(L=a),a>K&&(K=a)
}function A(M,h){var a=dx([M*bw,h*bw]);
if(G){var x=hJ(G,a),g=[x[1],-x[0],0],b=hJ(g,x);
g6(b),b=av(b);
var n=M-D,f=n>0?1:-1,s=b[0]*f7*f,m=gM(n)>180;
if(m^(s>f*D&&f*M>s)){var p=b[1]*f7;
p>K&&(K=p)
}else{if(s=(s+360)%360-180,m^(s>f*D&&f*M>s)){var p=-b[1]*f7;
L>p&&(L=p)
}else{L>h&&(L=h),h>K&&(K=h)
}}m?D>M?R(B,M)>R(B,J)&&(J=M):R(M,J)>R(B,J)&&(B=M):J>=B?(B>M&&(B=M),M>J&&(J=M)):M>D?R(B,M)>R(B,J)&&(J=M):R(M,J)>R(B,J)&&(B=M)
}else{F(M,h)
}G=a,D=M
}function N(){Q.point=A
}function C(){q[0]=B,q[1]=J,Q.point=F,G=null
}function z(c,b){if(G){var a=c-D;
k+=gM(a)>180?a+(a>0?360:-360):a
}else{w=c,O=b
}g7.point(c,b),A(c,b)
}function I(){g7.lineStart()
}function E(){z(w,O),g7.lineEnd(),gM(k)>bO&&(B=-(J=180)),q[0]=B,q[1]=J,G=null
}function R(b,a){return(a-=b)<0?a+360:a
}function P(b,a){return b[0]-a[0]
}function H(b,a){return a[0]<=a[1]?a[0]<=b&&b<=a[1]:b<a[0]||a[1]<b
}var B,L,J,K,D,w,O,G,k,j,q,Q={point:F,lineStart:N,lineEnd:C,polygonStart:function(){Q.point=z,Q.lineStart=I,Q.lineEnd=E,k=0,g7.polygonStart()
},polygonEnd:function(){g7.polygonEnd(),Q.point=F,Q.lineStart=N,Q.lineEnd=C,0>kg?(B=-(J=180),L=-(K=90)):k>bO?K=90:-bO>k&&(L=-90),q[0]=B,q[1]=J
}};
return function(l){K=J=-(B=L=1/0),j=[],bX.geo.stream(l,Q);
var c=j.length;
if(c){j.sort(P);
for(var g,d=1,a=j[0],b=[a];
c>d;
++d){g=j[d],H(g[0],a)||H(g[1],a)?(R(a[0],g[1])>R(a[0],a[1])&&(a[1]=g[1]),R(g[0],a[1])>R(a[0],a[1])&&(a[0]=g[0])):b.push(a=g)
}for(var h,g,f=-1/0,c=b.length-1,d=0,a=b[c];
c>=d;
a=g,++d){g=b[d],(h=R(a[1],g[0]))>f&&(f=h,B=g[0],J=a[1])
}}return j=q=null,1/0===B||1/0===L?[[0/0,0/0],[0/0,0/0]]:[[B,L],[J,K]]
}
}(),bX.geo.centroid=function(f){ay=jn=aF=aU=e6=fq=a3=cE=gP=bM=jQ=0,bX.geo.stream(f,c8);
var b=gP,d=bM,c=jQ,a=b*b+d*d+c*c;
return jS>a&&(b=fq,d=a3,c=cE,bO>jn&&(b=aF,d=aU,c=e6),a=b*b+d*d+c*c,jS>a)?[0/0,0/0]:[Math.atan2(d,b)*f7,bL(c/Math.sqrt(a))*f7]
};
var ay,jn,aF,aU,e6,fq,a3,cE,gP,bM,jQ,c8={sphere:iF,point:aD,lineStart:e5,lineEnd:fn,polygonStart:function(){c8.lineStart=a1
},polygonEnd:function(){c8.lineStart=e5
}},hy=hx(gO,f5,fJ,[-c9,-c9/2]),eO=1000000000;
bX.geo.clipExtent=function(){var h,c,f,d,a,b,g={stream:function(e){return a&&(a.valid=!1),a=b(e),a.valid=!0,a
},extent:function(e){return arguments.length?(b=jA(h=+e[0][0],c=+e[0][1],f=+e[1][0],d=+e[1][1]),a&&(a.valid=!1,a=null),g):[[h,c],[f,d]]
}};
return g.extent([[0,0],[960,500]])
},(bX.geo.conicEqualArea=function(){return cT(cw)
}).raw=cw,bX.geo.albers=function(){return bX.geo.conicEqualArea().rotate([96,0]).center([-0.6,38.7]).parallels([29.5,45.5]).scale(1070)
},bX.geo.albersUsa=function(){function f(e){var a=e[0],c=e[1];
return m=null,h(a,c),m||(b(a,c),m)||l(a,c),m
}var m,h,b,l,g=bX.geo.albers(),d=bX.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),k=bX.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),j={point:function(c,a){m=[c,a]
}};
return f.invert=function(p){var c=g.scale(),o=g.translate(),i=(p[0]-o[0])/c,a=(p[1]-o[1])/c;
return(a>=0.12&&0.234>a&&i>=-0.425&&-0.214>i?d:a>=0.166&&0.234>a&&i>=-0.214&&-0.115>i?k:g).invert(p)
},f.stream=function(o){var a=g.stream(o),i=d.stream(o),c=k.stream(o);
return{point:function(p,e){a.point(p,e),i.point(p,e),c.point(p,e)
},sphere:function(){a.sphere(),i.sphere(),c.sphere()
},lineStart:function(){a.lineStart(),i.lineStart(),c.lineStart()
},lineEnd:function(){a.lineEnd(),i.lineEnd(),c.lineEnd()
},polygonStart:function(){a.polygonStart(),i.polygonStart(),c.polygonStart()
},polygonEnd:function(){a.polygonEnd(),i.polygonEnd(),c.polygonEnd()
}}
},f.precision=function(a){return arguments.length?(g.precision(a),d.precision(a),k.precision(a),f):g.precision()
},f.scale=function(a){return arguments.length?(g.scale(a),d.scale(0.35*a),k.scale(a),f.translate(g.translate())):g.scale()
},f.translate=function(c){if(!arguments.length){return g.translate()
}var a=g.scale(),e=+c[0],i=+c[1];
return h=g.translate(c).clipExtent([[e-0.455*a,i-0.238*a],[e+0.455*a,i+0.238*a]]).stream(j).point,b=d.translate([e-0.307*a,i+0.201*a]).clipExtent([[e-0.425*a+bO,i+0.12*a+bO],[e-0.214*a-bO,i+0.234*a-bO]]).stream(j).point,l=k.translate([e-0.205*a,i+0.212*a]).clipExtent([[e-0.214*a+bO,i+0.166*a+bO],[e-0.115*a-bO,i+0.234*a-bO]]).stream(j).point,f
},f.scale(1070)
};
var fx,bs,f6,ew,fK,aL,j4={point:iF,lineStart:iF,lineEnd:iF,polygonStart:function(){bs=0,j4.lineStart=dV
},polygonEnd:function(){j4.lineStart=j4.lineEnd=j4.point=iF,fx+=gM(bs/2)
}},gx={point:dd,lineStart:iF,lineEnd:iF,polygonStart:iF,polygonEnd:iF},jC={point:dC,lineStart:iI,lineEnd:kp,polygonStart:function(){jC.lineStart=hN
},polygonEnd:function(){jC.point=dC,jC.lineStart=iI,jC.lineEnd=kp
}};
bX.geo.path=function(){function k(a){return a&&("function"==typeof b&&d.pointRadius(+b.apply(this,arguments)),j&&j.valid||(j=c(d)),bX.geo.stream(a,j)),d.result()
}function f(){return j=null,k
}var h,g,c,d,j,b=4.5;
return k.area=function(a){return fx=0,bX.geo.stream(a,c(j4)),fx
},k.centroid=function(a){return aF=aU=e6=fq=a3=cE=gP=bM=jQ=0,bX.geo.stream(a,c(jC)),jQ?[gP/jQ,bM/jQ]:cE?[fq/cE,a3/cE]:e6?[aF/e6,aU/e6]:[0/0,0/0]
},k.bounds=function(a){return fK=aL=-(f6=ew=1/0),bX.geo.stream(a,c(gx)),[[f6,ew],[fK,aL]]
},k.projection=function(a){return arguments.length?(c=(h=a)?a.stream||bN(a):hR,f()):h
},k.context=function(a){return arguments.length?(d=null==(g=a)?new eb:new fN(a),"function"!=typeof b&&d.pointRadius(b),f()):g
},k.pointRadius=function(a){return arguments.length?(b="function"==typeof a?a:(d.pointRadius(+a),+a),k):b
},k.projection(bX.geo.albersUsa()).context(null)
},bX.geo.transform=function(a){return{stream:function(b){var d=new hd(b);
for(var c in a){d[c]=a[c]
}return d
}}
},hd.prototype={point:function(b,a){this.stream.point(b,a)
},sphere:function(){this.stream.sphere()
},lineStart:function(){this.stream.lineStart()
},lineEnd:function(){this.stream.lineEnd()
},polygonStart:function(){this.stream.polygonStart()
},polygonEnd:function(){this.stream.polygonEnd()
}},bX.geo.projection=bv,bX.geo.projectionMutator=fS,(bX.geo.equirectangular=function(){return bv(jJ)
}).raw=jJ.invert=jJ,bX.geo.rotation=function(b){function a(c){return c=b(c[0]*bw,c[1]*bw),c[0]*=f7,c[1]*=f7,c
}return b=eS(b[0]%360*bw,b[1]*bw,b.length>2?b[2]*bw:0),a.invert=function(c){return c=b.invert(c[0]*bw,c[1]*bw),c[0]*=f7,c[1]*=f7,c
},a
},h0.invert=jJ,bX.geo.circle=function(){function f(){var h="function"==typeof c?c.apply(this,arguments):c,g=eS(-h[0]*bw,-h[1]*bw,0).invert,e=[];
return d(null,null,1,{point:function(j,i){e.push(j=g(j,i)),j[0]*=f7,j[1]*=f7
}}),{type:"Polygon",coordinates:[e]}
}var b,d,c=[0,0],a=6;
return f.origin=function(e){return arguments.length?(c=e,f):c
},f.angle=function(e){return arguments.length?(d=gB((b=+e)*bw,a*bw),f):b
},f.precision=function(e){return arguments.length?(d=gB(b*bw,(a=+e)*bw),f):a
},f.angle(90)
},bX.geo.distance=function(g,w){var m,b=(w[0]-g[0])*bw,v=g[1]*bw,j=w[1]*bw,d=Math.sin(b),q=Math.cos(b),p=Math.sin(v),h=Math.cos(v),x=Math.sin(j),k=Math.cos(j);
return Math.atan2(Math.sqrt((m=k*d)*m+(m=h*x-p*k*q)*m),p*x+h*k*q)
},bX.geo.graticule=function(){function B(){return{type:"MultiLineString",coordinates:q()}
}function q(){return bX.range(Math.ceil(E/J)*J,k,J).map(F).concat(bX.range(Math.ceil(D/C)*C,K,C).map(G)).concat(bX.range(Math.ceil(x/z)*z,I,z).filter(function(a){return gM(a%J)>bO
}).map(w)).concat(bX.range(Math.ceil(L/j)*j,A,j).filter(function(a){return gM(a%C)>bO
}).map(H))
}var I,x,k,E,A,L,K,D,w,H,F,G,z=10,j=z,J=90,C=360,b=2.5;
return B.lines=function(){return q().map(function(a){return{type:"LineString",coordinates:a}
})
},B.outline=function(){return{type:"Polygon",coordinates:[F(E).concat(G(K).slice(1),F(k).reverse().slice(1),G(D).reverse().slice(1))]}
},B.extent=function(a){return arguments.length?B.majorExtent(a).minorExtent(a):B.minorExtent()
},B.majorExtent=function(a){return arguments.length?(E=+a[0][0],k=+a[1][0],D=+a[0][1],K=+a[1][1],E>k&&(a=E,E=k,k=a),D>K&&(a=D,D=K,K=a),B.precision(b)):[[E,D],[k,K]]
},B.minorExtent=function(a){return arguments.length?(x=+a[0][0],I=+a[1][0],L=+a[0][1],A=+a[1][1],x>I&&(a=x,x=I,I=a),L>A&&(a=L,L=A,A=a),B.precision(b)):[[x,L],[I,A]]
},B.step=function(a){return arguments.length?B.majorStep(a).minorStep(a):B.minorStep()
},B.majorStep=function(a){return arguments.length?(J=+a[0],C=+a[1],B):[J,C]
},B.minorStep=function(a){return arguments.length?(z=+a[0],j=+a[1],B):[z,j]
},B.precision=function(a){return arguments.length?(b=+a,w=a4(L,A,90),H=hC(x,I,b),F=a4(D,K,90),G=hC(E,k,b),B):b
},B.majorExtent([[-180,-90+bO],[180,90-bO]]).minorExtent([[-180,-80-bO],[180,80+bO]])
},bX.geo.greatArc=function(){function f(){return{type:"LineString",coordinates:[b||c.apply(this,arguments),d||a.apply(this,arguments)]}
}var b,d,c=eA,a=j5;
return f.distance=function(){return bX.geo.distance(b||c.apply(this,arguments),d||a.apply(this,arguments))
},f.source=function(g){return arguments.length?(c=g,b="function"==typeof g?null:g,f):c
},f.target=function(e){return arguments.length?(a=e,d="function"==typeof e?null:e,f):a
},f.precision=function(){return arguments.length?f:0
},f
},bX.geo.interpolate=function(b,a){return gY(b[0]*bw,b[1]*bw,a[0]*bw,a[1]*bw)
},bX.geo.length=function(a){return cU=0,bX.geo.stream(a,cy),cU
};
var cU,cy={sphere:iF,point:iF,lineStart:ad,lineEnd:iF,polygonStart:iF,polygonEnd:iF},dX=iU(function(a){return Math.sqrt(2/(1+a))
},function(a){return 2*Math.asin(a/2)
});
(bX.geo.azimuthalEqualArea=function(){return bv(dX)
}).raw=dX;
var df=iU(function(b){var a=Math.acos(b);
return a&&a/Math.sin(a)
},hR);
(bX.geo.azimuthalEquidistant=function(){return bv(df)
}).raw=df,(bX.geo.conicConformal=function(){return cT(am)
}).raw=am,(bX.geo.conicEquidistant=function(){return cT(aM)
}).raw=aM;
var ef=iU(function(a){return 1/a
},Math.atan);
(bX.geo.gnomonic=function(){return bv(ef)
}).raw=ef,eX.invert=function(b,a){return[b,2*Math.atan(Math.exp(a))-fy]
},(bX.geo.mercator=function(){return fb(eX)
}).raw=eX;
var b4=iU(function(){return 1
},Math.asin);
(bX.geo.orthographic=function(){return bv(b4)
}).raw=b4;
var dD=iU(function(a){return 1/(1+a)
},function(a){return 2*Math.atan(a)
});
(bX.geo.stereographic=function(){return bv(dD)
}).raw=dD,aV.invert=function(b,a){return[-a,2*Math.atan(Math.exp(b))-fy]
},(bX.geo.transverseMercator=function(){var c=fb(aV),a=c.center,b=c.rotate;
return c.center=function(d){return d?a([-d[1],d[0]]):(d=a(),[d[1],-d[0]])
},c.rotate=function(d){return d?b([d[0],d[1],d.length>2?d[2]+90:90]):(d=b(),[d[0],d[1],d[2]-90])
},b([0,0,90])
}).raw=aV,bX.geom={},bX.geom.hull=function(d){function a(j){if(j.length<3){return[]
}var y,x=aT(c),m=aT(b),e=j.length,w=[],v=[];
for(y=0;
e>y;
y++){w.push([+x.call(this,j[y],y),+m.call(this,j[y],y),y])
}for(w.sort(jD),y=0;
e>y;
y++){v.push([w[y][0],-w[y][1]])
}var k=bE(w),z=bE(v),r=z[0]===k[0],p=z[z.length-1]===k[k.length-1],q=[];
for(y=k.length-1;
y>=0;
--y){q.push(j[w[k[y]][2]])
}for(y=+r;
y<z.length-p;
++y){q.push(j[w[z[y]][2]])
}return q
}var c=cp,b=gG;
return arguments.length?a(d):(a.x=function(e){return arguments.length?(c=e,a):c
},a.y=function(e){return arguments.length?(b=e,a):b
},a)
},bX.geom.polygon=function(a){return kj(a,iJ),a
};
var iJ=bX.geom.polygon.prototype=[];
iJ.area=function(){for(var f,b=-1,d=this.length,c=this[d-1],a=0;
++b<d;
){f=c,c=this[b],a+=f[1]*c[0]-f[0]*c[1]
}return 0.5*a
},iJ.centroid=function(k){var f,h,g=-1,c=this.length,d=0,j=0,b=this[c-1];
for(arguments.length||(k=-1/(6*this.area()));
++g<c;
){f=b,b=this[g],h=f[0]*b[1]-b[0]*f[1],d+=(f[0]+b[0])*h,j+=(f[1]+b[1])*h
}return[d*k,j*k]
},iJ.clip=function(f){for(var q,j,b,p,h,d,m=eF(f),k=-1,g=this.length-eF(this),v=this[g-1];
++k<g;
){for(q=f.slice(),f.length=0,p=this[k],h=q[(b=q.length-m)-1],j=-1;
++j<b;
){d=q[j],cY(d,v,p)?(cY(h,v,p)||f.push(hk(h,d,v,p)),f.push(d)):cY(h,v,p)&&f.push(hk(h,d,v,p)),h=d
}m&&f.push(f[0]),v=p
}return f
};
var ab,hO,fO,d9,bQ,hh=[],cJ=[];
gj.prototype.prepare=function(){for(var c,a=this.edges,b=a.length;
b--;
){c=a[b].edge,c.b&&c.a||a.splice(b,1)
}return a.sort(cL),a.length
},fG.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b
},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a
}},d1.prototype={insert:function(f,b){var d,c,a;
if(f){if(b.P=f,b.N=f.N,f.N&&(f.N.P=b),f.N=b,f.R){for(f=f.R;
f.L;
){f=f.L
}f.L=b
}else{f.R=b
}d=f
}else{this._?(f=bn(this._),b.P=null,b.N=f,f.P=f.L=b,d=f):(b.P=b.N=null,this._=b,d=null)
}for(b.L=b.R=null,b.U=d,b.C=!0,f=b;
d&&d.C;
){c=d.U,d===c.L?(a=c.R,a&&a.C?(d.C=a.C=!1,c.C=!0,f=c):(f===d.R&&(g9(this,d),f=d,d=f.U),d.C=!1,c.C=!0,cB(this,c))):(a=c.L,a&&a.C?(d.C=a.C=!1,c.C=!0,f=c):(f===d.L&&(cB(this,d),f=d,d=f.U),d.C=!1,c.C=!0,g9(this,c))),d=f.U
}this._.C=!1
},remove:function(h){h.N&&(h.N.P=h.P),h.P&&(h.P.N=h.N),h.N=h.P=null;
var c,f,d,a=h.U,b=h.L,g=h.R;
if(f=b?g?bn(g):b:g,a?a.L===h?a.L=f:a.R=f:this._=f,b&&g?(d=f.C,f.C=h.C,f.L=b,b.U=f,f!==g?(a=f.U,f.U=h.U,h=f.R,a.L=h,f.R=g,g.U=f):(f.U=a,a=f,h=f.R)):(d=h.C,h=f),h&&(h.U=a),!d){if(h&&h.C){return void (h.C=!1)
}do{if(h===this._){break
}if(h===a.L){if(c=a.R,c.C&&(c.C=!1,a.C=!0,g9(this,a),c=a.R),c.L&&c.L.C||c.R&&c.R.C){c.R&&c.R.C||(c.L.C=!1,c.C=!0,cB(this,c),c=a.R),c.C=a.C,a.C=c.R.C=!1,g9(this,a),h=this._;
break
}}else{if(c=a.L,c.C&&(c.C=!1,a.C=!0,cB(this,a),c=a.L),c.L&&c.L.C||c.R&&c.R.C){c.L&&c.L.C||(c.R.C=!1,c.C=!0,g9(this,c),c=a.L),c.C=a.C,a.C=c.L.C=!1,cB(this,a),h=this._;
break
}}c.C=!0,h=a,a=a.U
}while(!h.C);
h&&(h.C=!1)
}}},bX.geom.voronoi=function(k){function f(q){var l=new Array(q.length),m=b[0][0],a=b[0][1],e=b[1][0],p=b[1][1];
return fQ(h(q),b).cells.forEach(function(r,n){var t=r.edges,i=r.site,o=l[n]=t.length?t.map(function(u){var s=u.start();
return[s.x,s.y]
}):i.x>=m&&i.x<=e&&i.y>=a&&i.y<=p?[[m,p],[e,p],[e,a],[m,a]]:[];
o.point=q[n]
}),l
}function h(a){return a.map(function(i,e){return{x:Math.round(d(i,e)/bO)*bO,y:Math.round(j(i,e)/bO)*bO,i:e}
})
}var g=cp,c=gG,d=g,j=c,b=by;
return k?f(k):(f.links=function(a){return fQ(h(a)).edges.filter(function(e){return e.l&&e.r
}).map(function(e){return{source:a[e.l.i],target:a[e.r.i]}
})
},f.triangles=function(e){var a=[];
return fQ(h(e)).cells.forEach(function(v,m){for(var y,q,n=v.site,x=v.edges.sort(cL),w=-1,p=x.length,z=x[p-1].edge,t=z.l===n?z.r:z.l;
++w<p;
){y=z,q=t,z=x[w].edge,t=z.l===n?z.r:z.l,m<q.i&&m<t.i&&jG(n,q,t)<0&&a.push([e[m],e[q.i],e[t.i]])
}}),a
},f.x=function(a){return arguments.length?(d=aT(g=a),f):g
},f.y=function(a){return arguments.length?(j=aT(c=a),f):c
},f.clipExtent=function(a){return arguments.length?(b=null==a?by:a,f):b===by?null:b
},f.size=function(a){return arguments.length?f.clipExtent(a&&[[0,0],a]):b===by?null:b&&b[1]
},f)
};
var by=[[-1000000,-1000000],[1000000,1000000]];
bX.geom.delaunay=function(a){return bX.geom.voronoi().triangles(a)
},bX.geom.quadtree=function(f,m,h,b,l){function g(z){function D(w,O,K,p,N,x,v,M){if(!isNaN(K)&&!isNaN(p)){if(w.leaf){var L=w.x,P=w.y;
if(null!=L){if(gM(L-K)+gM(P-p)<0.01){B(w,O,K,p,N,x,v,M)
}else{var y=w.point;
w.x=w.y=w.point=null,B(w,y,L,P,N,x,v,M),B(w,O,K,p,N,x,v,M)
}}else{w.x=K,w.y=p,w.point=O
}}else{B(w,O,K,p,N,x,v,M)
}}}function B(v,P,L,i,O,p,N,M){var w=0.5*(O+N),Q=0.5*(p+M),K=L>=w,x=i>=Q,y=x<<1|K;
v.leaf=!1,v=v.nodes[y]||(v.nodes[y]=b1()),K?O=w:N=w,x?p=Q:M=Q,D(v,P,L,i,O,p,N,M)
}var t,G,E,F,u,r,H,A,e,c=aT(k),o=aT(j);
if(null!=m){r=m,H=h,A=b,e=l
}else{if(A=e=-(r=H=1/0),G=[],E=[],u=z.length,d){for(F=0;
u>F;
++F){t=z[F],t.x<r&&(r=t.x),t.y<H&&(H=t.y),t.x>A&&(A=t.x),t.y>e&&(e=t.y),G.push(t.x),E.push(t.y)
}}else{for(F=0;
u>F;
++F){var I=+c(t=z[F],F),J=+o(t,F);
r>I&&(r=I),H>J&&(H=J),I>A&&(A=I),J>e&&(e=J),G.push(I),E.push(J)
}}}var q=A-r,a=e-H;
q>a?e=H+q:A=r+a;
var C=b1();
if(C.add=function(i){D(C,i,+c(i,++F),+o(i,F),r,H,A,e)
},C.visit=function(i){gR(i,C,r,H,A,e)
},C.find=function(i){return f8(C,i[0],i[1],r,H,A,e)
},F=-1,null==m){for(;
++F<u;
){D(C,z[F],G[F],E[F],r,H,A,e)
}--F
}else{z.forEach(C.add)
}return G=E=z=t=null,C
}var d,k=cp,j=gG;
return(d=arguments.length)?(k=hV,j=eQ,3===d&&(l=h,b=m,h=m=0),g(f)):(g.x=function(a){return arguments.length?(k=a,g):k
},g.y=function(a){return arguments.length?(j=a,g):j
},g.extent=function(a){return arguments.length?(null==a?m=h=b=l=null:(m=+a[0][0],h=+a[0][1],b=+a[1][0],l=+a[1][1]),g):null==m?null:[[m,h],[b,l]]
},g.size=function(a){return arguments.length?(null==a?m=h=b=l=null:(m=h=0,b=+a[0],l=+a[1]),g):null==m?null:[b-m,l-h]
},g)
},bX.interpolateRgb=gz,bX.interpolateObject=dh,bX.interpolateNumber=a0,bX.interpolateString=hA;
var fV=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dK=new RegExp(fV.source,"g");
bX.interpolate=ey,bX.interpolators=[function(c,a){var b=typeof a;
return("string"===b?af.has(a)||/^(#|rgb\(|hsl\()/.test(a)?gz:hA:a instanceof dG?gz:Array.isArray(a)?j1:"object"===b&&isNaN(a)?dh:a0)(c,a)
}],bX.interpolateArray=j1;
var jO=function(){return hR
},h8=bX.map({linear:jO,poly:e8,quad:function(){return ah
},cubic:function(){return aI
},sin:function(){return aR
},exp:function(){return ch
},circle:function(){return gD
},elastic:bA,back:jz,bounce:function(){return cW
}}),eV=bX.map({"in":hR,out:kn,"in-out":iP,"out-in":function(a){return iP(kn(a))
}});
bX.ease=function(d){var a=d.indexOf("-"),c=a>=0?d.slice(0,a):d,b=a>=0?d.slice(a+1):"in";
return c=h8.get(c)||jO,b=eV.get(b)||hR,gV(b(c.apply(null,hv.call(arguments,1))))
},bX.interpolateHcl=hg,bX.interpolateHsl=eC,bX.interpolateLab=ff,bX.interpolateRound=a9,bX.transform=function(b){var a=bF.createElementNS(bX.ns.prefix.svg,"g");
return(bX.transform=function(d){if(null!=d){a.setAttribute("transform",d);
var c=a.transform.baseVal.consolidate()
}return new fU(c?c.matrix:b9)
})(b)
},fU.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"
};
var b9={a:1,b:0,c:0,d:1,e:0,f:0};
bX.interpolateTransform=jM,bX.layout={},bX.layout.bundle=function(){return function(d){for(var a=[],c=-1,b=d.length;
++c<b;
){a.push(cI(d[c]))
}return a
}
},bX.layout.chord=function(){function f(){var c,i,t,r,s,a={},F=[],z=bX.range(h),e=[];
for(j=[],b=[],c=0,r=-1;
++r<h;
){for(i=0,s=-1;
++s<h;
){i+=p[r][s]
}F.push(i),e.push(bX.range(h)),c+=i
}for(d&&z.sort(function(w,l){return d(F[w],F[l])
}),m&&e.forEach(function(w,l){w.sort(function(y,x){return m(p[l][y],p[l][x])
})
}),c=(hz-v*h)/c,i=0,r=-1;
++r<h;
){for(t=i,s=-1;
++s<h;
){var B=z[r],u=e[B][s],C=p[B][u],A=i,E=i+=C*c;
a[B+"-"+u]={index:B,subindex:u,startAngle:A,endAngle:E,value:C}
}b[B]={index:B,startAngle:t,endAngle:i,value:(i-t)/c},i+=v
}for(r=-1;
++r<h;
){for(s=r-1;
++s<h;
){var D=a[r+"-"+s],o=a[s+"-"+r];
(D.value||o.value)&&j.push(D.value<o.value?{source:o,target:D}:{source:D,target:o})
}}k&&q()
}function q(){j.sort(function(c,a){return k((c.source.value+c.target.value)/2,(a.source.value+a.target.value)/2)
})
}var j,b,p,h,d,m,k,g={},v=0;
return g.matrix=function(a){return arguments.length?(h=(p=a)&&p.length,j=b=null,g):p
},g.padding=function(a){return arguments.length?(v=a,j=b=null,g):v
},g.sortGroups=function(a){return arguments.length?(d=a,j=b=null,g):d
},g.sortSubgroups=function(a){return arguments.length?(m=a,j=null,g):m
},g.sortChords=function(a){return arguments.length?(k=a,j&&q(),g):k
},g.chords=function(){return j||f(),j
},g.groups=function(){return b||f(),b
},g
},bX.layout.force=function(){function A(a){return function(v,m,d,s){if(v.point!==a){var h=v.cx-a.x,f=v.cy-a.y,p=s-m,n=h*h+f*f;
if(n>p*p/I){if(y>n){var g=v.charge/n;
a.px-=h*g,a.py-=f*g
}return !0
}if(v.point&&n&&y>n){var g=v.pointCharge/n;
a.px-=h*g,a.py-=f*g
}}return !v.charge
}
}function q(a){a.px=bX.event.x,a.py=bX.event.y,K.resume()
}var H,x,k,D,z,K={},J=bX.dispatch("start","tick","end"),C=[1,1],w=0.9,G=gW,E=gg,F=-30,y=gE,j=0.1,I=0.64,B=[],b=[];
return K.tick=function(){if((x*=0.99)<0.005){return J.end({type:"end",alpha:x=0}),!0
}var v,l,s,i,g,c,m,o,r,n=B.length,u=b.length;
for(l=0;
u>l;
++l){s=b[l],i=s.source,g=s.target,o=g.x-i.x,r=g.y-i.y,(c=o*o+r*r)&&(c=x*D[l]*((c=Math.sqrt(c))-k[l])/c,o*=c,r*=c,g.x-=o*(m=i.weight/(g.weight+i.weight)),g.y-=r*m,i.x+=o*(m=1-m),i.y+=r*m)
}if((m=x*j)&&(o=C[0]/2,r=C[1]/2,l=-1,m)){for(;
++l<n;
){s=B[l],s.x+=(o-s.x)*m,s.y+=(r-s.y)*m
}}if(F){for(h7(v=bX.geom.quadtree(B),x,z),l=-1;
++l<n;
){(s=B[l]).fixed||v.visit(A(s))
}}for(l=-1;
++l<n;
){s=B[l],s.fixed?(s.x=s.px,s.y=s.py):(s.x-=(s.px-(s.px=s.x))*w,s.y-=(s.py-(s.py=s.y))*w)
}J.tick({type:"tick",alpha:x})
},K.nodes=function(a){return arguments.length?(B=a,K):B
},K.links=function(a){return arguments.length?(b=a,K):b
},K.size=function(a){return arguments.length?(C=a,K):C
},K.linkDistance=function(a){return arguments.length?(G="function"==typeof a?a:+a,K):G
},K.distance=K.linkDistance,K.linkStrength=function(a){return arguments.length?(E="function"==typeof a?a:+a,K):E
},K.friction=function(a){return arguments.length?(w=+a,K):w
},K.charge=function(a){return arguments.length?(F="function"==typeof a?a:+a,K):F
},K.chargeDistance=function(a){return arguments.length?(y=a*a,K):Math.sqrt(y)
},K.gravity=function(a){return arguments.length?(j=+a,K):j
},K.theta=function(a){return arguments.length?(I=a*a,K):Math.sqrt(I)
},K.alpha=function(a){return arguments.length?(a=+a,x?x=a>0?a:0:a>0&&(J.start({type:"start",alpha:x=a}),bX.timer(K.tick)),K):x
},K.start=function(){function m(L,t){if(!i){for(i=new Array(l),e=0;
l>e;
++e){i[e]=[]
}for(e=0;
f>e;
++e){var p=b[e];
i[p.source.index].push(p.target),i[p.target.index].push(p.source)
}}for(var s,v=i[d],e=-1,c=v.length;
++e<c;
){if(!isNaN(s=v[e][L])){return s
}}return Math.random()*t
}var d,i,g,l=B.length,f=b.length,h=C[0],a=C[1];
for(d=0;
l>d;
++d){(g=B[d]).index=d,g.weight=0
}for(d=0;
f>d;
++d){g=b[d],"number"==typeof g.source&&(g.source=B[g.source]),"number"==typeof g.target&&(g.target=B[g.target]),++g.source.weight,++g.target.weight
}for(d=0;
l>d;
++d){g=B[d],isNaN(g.x)&&(g.x=m("x",h)),isNaN(g.y)&&(g.y=m("y",a)),isNaN(g.px)&&(g.px=g.x),isNaN(g.py)&&(g.py=g.y)
}if(k=[],"function"==typeof G){for(d=0;
f>d;
++d){k[d]=+G.call(this,b[d],d)
}}else{for(d=0;
f>d;
++d){k[d]=G
}}if(D=[],"function"==typeof E){for(d=0;
f>d;
++d){D[d]=+E.call(this,b[d],d)
}}else{for(d=0;
f>d;
++d){D[d]=E
}}if(z=[],"function"==typeof F){for(d=0;
l>d;
++d){z[d]=+F.call(this,B[d],d)
}}else{for(d=0;
l>d;
++d){z[d]=F
}}return K.resume()
},K.resume=function(){return K.alpha(0.1)
},K.stop=function(){return K.alpha(0)
},K.drag=function(){return H||(H=bX.behavior.drag().origin(hR).on("dragstart.force",c0).on("drag.force",q).on("dragend.force",dU)),arguments.length?void this.on("mouseover.force",bS).on("mouseout.force",dn).call(H):H
},bX.rebind(K,J,"on")
};
var gW=20,gg=1,gE=1/0;
bX.layout.hierarchy=function(){function d(g){var h,k=[g],f=[];
for(g.depth=0;
null!=(h=k.pop());
){if(f.push(h),(e=c.call(d,h,h.depth))&&(m=e.length)){for(var m,e,j;
--m>=0;
){k.push(j=e[m]),j.parent=h,j.depth=h.depth+1
}b&&(h.value=0),h.children=e
}else{b&&(h.value=+b.call(d,h,h.depth)||0),delete h.children
}}return fD(g,function(o){var l,i;
a&&(l=o.children)&&l.sort(a),b&&(i=o.parent)&&(i.value+=o.value)
}),f
}var a=hm,c=eh,b=bR;
return d.sort=function(f){return arguments.length?(a=f,d):a
},d.children=function(e){return arguments.length?(c=e,d):c
},d.value=function(e){return arguments.length?(b=e,d):b
},d.revalue=function(e){return b&&(hD(e,function(f){f.children&&(f.value=0)
}),fD(e,function(f){var g;
f.children||(f.value=+b.call(d,f,f.depth)||0),(g=f.parent)&&(g.value+=f.value)
})),e
},d
},bX.layout.partition=function(){function f(s,m,g,q){var k=s.children;
if(s.x=m,s.y=s.depth*q,s.dx=g,s.dy=q,k&&(h=k.length)){var h,p,n,j=-1;
for(g=s.value?g/s.value:0;
++j<h;
){f(p=k[j],m,n=p.value*g,q),m+=n
}}}function b(l){var k=l.children,j=0;
if(k&&(g=k.length)){for(var g,h=-1;
++h<g;
){j=Math.max(j,b(k[h]))
}}return 1+j
}function d(h,g){var j=c.call(this,h,g);
return f(j[0],0,a[0],a[1]/b(j[0])),j
}var c=bX.layout.hierarchy(),a=[1,1];
return d.size=function(e){return arguments.length?(a=e,d):a
},kb(d,c)
},bX.layout.pie=function(){function g(i){var t,r=i.length,j=i.map(function(l,h){return +c.call(g,l,h)
}),w=+("function"==typeof d?d.apply(this,arguments):d),n=("function"==typeof a?a.apply(this,arguments):a)-w,k=Math.min(Math.abs(n)/r,+("function"==typeof b?b.apply(this,arguments):b)),m=k*(0>n?-1:1),e=(n-r*m)/bX.sum(j),u=bX.range(r),q=[];
return null!=f&&u.sort(f===dp?function(l,h){return j[h]-j[l]
}:function(l,h){return f(i[l],i[h])
}),u.forEach(function(h){q[h]={data:i[h],value:t=j[h],startAngle:w,endAngle:w+=t*e+m,padAngle:k}
}),q
}var c=Number,f=dp,d=0,a=hz,b=0;
return g.value=function(h){return arguments.length?(c=h,g):c
},g.sort=function(e){return arguments.length?(f=e,g):f
},g.startAngle=function(e){return arguments.length?(d=e,g):d
},g.endAngle=function(e){return arguments.length?(a=e,g):a
},g.padAngle=function(e){return arguments.length?(b=e,g):b
},g
};
var dp={};
bX.layout.stack=function(){function h(t,r){if(!(k=t.length)){return t
}var j=t.map(function(m,l){return c.call(h,m,l)
}),w=j.map(function(l){return l.map(function(m,p){return[b.call(h,m,p),g.call(h,m,p)]
})
}),o=f.call(h,w,r);
j=bX.permute(j,o),w=bX.permute(w,o);
var k,n,e,u,q=d.call(h,w,r),i=j[0].length;
for(e=0;
i>e;
++e){for(a.call(h,j[0][e],u=q[e],w[0][e][1]),n=1;
k>n;
++n){a.call(h,j[n][e],u+=w[n-1][e][1],w[n][e][1])
}}return t
}var c=hR,f=jT,d=ik,a=dN,b=bz,g=fY;
return h.values=function(i){return arguments.length?(c=i,h):c
},h.order=function(e){return arguments.length?(f="function"==typeof e?e:a7.get(e)||jT,h):f
},h.offset=function(e){return arguments.length?(d="function"==typeof e?e:hE.get(e)||ik,h):d
},h.x=function(e){return arguments.length?(b=e,h):b
},h.y=function(e){return arguments.length?(g=e,h):g
},h.out=function(e){return arguments.length?(a=e,h):a
},h
};
var a7=bX.map({"inside-out":function(f){var q,j,b=f.length,p=f.map(eY),h=f.map(cf),d=bX.range(b).sort(function(c,a){return p[c]-p[a]
}),m=0,k=0,g=[],v=[];
for(q=0;
b>q;
++q){j=d[q],k>m?(m+=h[j],g.push(j)):(k+=h[j],v.push(j))
}return v.reverse().concat(g)
},reverse:function(a){return bX.range(a.length).reverse()
},"default":jT}),hE=bX.map({silhouette:function(f){var m,h,b,l=f.length,g=f[0].length,d=[],k=0,j=[];
for(h=0;
g>h;
++h){for(m=0,b=0;
l>m;
m++){b+=f[m][h][1]
}b>k&&(k=b),d.push(b)
}for(h=0;
g>h;
++h){j[h]=(k-d[h])/2
}return j
},wiggle:function(j){var A,w,b,z,m,d,y,x,k,B=j.length,v=j[0],p=v.length,q=[];
for(q[0]=x=k=0,w=1;
p>w;
++w){for(A=0,z=0;
B>A;
++A){z+=j[A][w][1]
}for(A=0,m=0,y=v[w][0]-v[w-1][0];
B>A;
++A){for(b=0,d=(j[A][w][1]-j[A][w-1][1])/(2*y);
A>b;
++b){d+=(j[b][w][1]-j[b][w-1][1])/y
}m+=d*j[A][w][1]
}q[w]=x-=z?m/z*y:0,k>x&&(k=x)
}for(w=0;
p>w;
++w){q[w]-=k
}return q
},expand:function(k){var f,h,g,c=k.length,d=k[0].length,j=1/c,b=[];
for(h=0;
d>h;
++h){for(f=0,g=0;
c>f;
f++){g+=k[f][h][1]
}if(g){for(f=0;
c>f;
f++){k[f][h][1]/=g
}}else{for(f=0;
c>f;
f++){k[f][h][1]=j
}}}for(h=0;
d>h;
++h){b[h]=0
}return b
},zero:ik});
bX.layout.histogram=function(){function f(k,q){for(var j,w,v=[],m=k.map(d,this),x=c.call(this,m,q),u=a.call(this,x,m,q),q=-1,r=m.length,t=u.length-1,e=b?1:1/r;
++q<t;
){j=v[q]=[],j.dx=u[q+1]-(j.x=u[q]),j.y=0
}if(t>0){for(q=-1;
++q<r;
){w=m[q],w>=x[0]&&w<=x[1]&&(j=v[bX.bisect(u,w,1,t)-1],j.y+=e,j.push(k[q]))
}}return v
}var b=!0,d=Number,c=dv,a=gk;
return f.value=function(e){return arguments.length?(d=e,f):d
},f.range=function(e){return arguments.length?(c=aT(e),f):c
},f.bins=function(e){return arguments.length?(a="number"==typeof e?function(g){return gH(g,e)
}:aT(e),f):a
},f.frequency=function(g){return arguments.length?(b=!!g,f):b
},f
},bX.layout.pack=function(){function f(q,h){var m=d.call(this,q,h),g=m[0],p=a[0],e=a[1],j=null==b?Math.sqrt:"function"==typeof b?b:function(){return b
};
if(g.x=g.y=0,fD(g,function(i){i.r=+j(i.value)
}),fD(g,g5),c){var k=c*(b?1:Math.max(2*g.r/p,2*g.r/e))/2;
fD(g,function(i){i.r+=k
}),fD(g,g5),fD(g,function(i){i.r-=k
})
}return aB(g,p/2,e/2,b?1:1/Math.max(2*g.r/p,2*g.r/e)),m
}var b,d=bX.layout.hierarchy().sort(a8),c=0,a=[1,1];
return f.size=function(e){return arguments.length?(a=e,f):a
},f.radius=function(g){return arguments.length?(b=null==g||"function"==typeof g?g:+g,f):b
},f.padding=function(e){return arguments.length?(c=+e,f):c
},kb(f,d)
},bX.layout.tree=function(){function f(c,x){var z=d.call(this,c,x),o=z[0],i=q(o);
if(fD(i,j),i.parent.m=-i.z,hD(i,b),g){hD(o,h)
}else{var l=o,a=o,w=o;
hD(o,function(s){s.x<l.x&&(l=s),s.x>a.x&&(a=s),s.depth>w.depth&&(w=s)
});
var r=m(l,a)/2-l.x,e=k[0]/(a.x+m(a,l)/2+r),t=k[1]/(w.depth||1);
hD(o,function(s){s.x=(s.x+r)*e,s.y=s.depth*t
})
}return z
}function q(z){for(var v,x={A:null,children:[z]},w=[x];
null!=(v=w.pop());
){for(var l,s=v.children,y=0,c=s.length;
c>y;
++y){w.push((s[y]=l={_:s[y],parent:v,children:(l=s[y].children)&&l.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:y}).a=l)
}}return x.children[0]
}function j(s){var c=s.children,o=s.parent.children,l=s.i?o[s.i-1]:null;
if(c.length){gN(s);
var a=(c[0].z+c[c.length-1].z)/2;
l?(s.z=l.z+m(s._,l._),s.m=s.z-a):s.z=a
}else{l&&(s.z=l.z+m(s._,l._))
}s.parent.A=p(s,l,s.parent.A||o[0])
}function b(a){a._.x=a.z+a.parent.m,a.m+=a.parent.m
}function p(w,E,B){if(E){for(var a,D=w,y=w,v=E,C=D.parent.children[0],x=D.m,F=y.m,A=v.m,z=C.m;
v=aZ(v),D=fk(D),v&&D;
){C=fk(C),y=aZ(y),y.a=w,a=v.z+A-D.z-x+m(v._,D._),a>0&&(cA(bI(v,w,B),w,a),x+=a,F+=a),A+=v.m,x+=D.m,z+=C.m,F+=y.m
}v&&!aZ(y)&&(y.t=v,y.m+=A-F),D&&!fk(C)&&(C.t=D,C.m+=x-z,B=w)
}return B
}function h(a){a.x*=k[0],a.y=a.depth*k[1]
}var d=bX.layout.hierarchy().sort(null).value(null),m=e4,k=[1,1],g=null;
return f.separation=function(a){return arguments.length?(m=a,f):m
},f.size=function(a){return arguments.length?(g=null==(k=a)?h:null,f):g?null:k
},f.nodeSize=function(a){return arguments.length?(g=null==(k=a)?null:h,f):g?k:null
},kb(f,d)
},bX.layout.cluster=function(){function f(j,m){var e,u=b.call(this,j,m),t=u[0],k=0;
fD(t,function(h){var g=h.children;
g&&g.length?(h.x=c4(g),h.y=jK(g)):(h.x=e?k+=d(h,e):0,h.y=0,e=h)
});
var v=hw(t),r=eM(t),p=v.x-d(v,r)/2,q=r.x+d(r,v)/2;
return fD(t,a?function(g){g.x=(g.x-t.x)*c[0],g.y=(t.y-g.y)*c[1]
}:function(g){g.x=(g.x-p)/(q-p)*c[0],g.y=(1-(t.y?g.y/t.y:1))*c[1]
}),u
}var b=bX.layout.hierarchy().sort(null).value(null),d=e4,c=[1,1],a=!1;
return f.separation=function(e){return arguments.length?(d=e,f):d
},f.size=function(e){return arguments.length?(a=null==(c=e),f):a?null:c
},f.nodeSize=function(e){return arguments.length?(a=null!=(c=e),f):a?c:null
},kb(f,b)
},bX.layout.treemap=function(){function k(l,f){for(var h,g,a=-1,c=l.length;
++a<c;
){g=(h=l[a]).value*(0>f?0:f),h.area=isNaN(g)||0>=g?0:g
}}function C(u){var r=u.children;
if(r&&r.length){var g,F,E,n=x(u),H=[],t=r.slice(),f=1/0,G="slice"===w?n.dx:"dice"===w?n.dy:"slice-dice"===w?1&u.depth?n.dy:n.dx:Math.min(n.dx,n.dy);
for(k(t,n.dx*n.dy/u.value),H.area=0;
(E=t.length)>0;
){H.push(g=t[E-1]),H.area+=g.area,"squarify"!==w||(F=b(H,G))<=f?(t.pop(),f=F):(H.area-=H.pop().area,B(H,G,n,!1),G=Math.min(n.dx,n.dy),H.length=H.area=0,f=1/0)
}H.length&&(B(H,G,n,!0),H.length=H.area=0),r.forEach(C)
}}function y(g){var h=g.children;
if(h&&h.length){var f,l=x(g),e=h.slice(),n=[];
for(k(e,l.dx*l.dy/g.value),n.area=0;
f=e.pop();
){n.push(f),n.area+=f.area,null!=f.z&&(B(n,f.z?l.dx:l.dy,l,!e.length),n.length=n.area=0)
}h.forEach(y)
}}function b(E,h){for(var p,l=E.area,f=0,g=1/0,s=-1,c=E.length;
++s<c;
){(p=E[s].area)&&(g>p&&(g=p),p>f&&(f=p))
}return l*=l,h*=h,l?Math.max(h*f*d/l,l/(h*g*d)):1/0
}function B(g,H,E,c){var G,p=-1,f=g.length,F=E.x,h=E.y,I=H?z(g.area/H):0;
if(H==E.dx){for((c||I>E.dy)&&(I=E.dy);
++p<f;
){G=g[p],G.x=F,G.y=h,G.dy=I,F+=G.dx=Math.min(E.x+E.dx-F,I?z(G.area/I):0)
}G.z=!0,G.dx+=E.x+E.dx-F,E.y+=I,E.dy-=I
}else{for((c||I>E.dx)&&(I=E.dx);
++p<f;
){G=g[p],G.x=F,G.y=h,G.dx=I,h+=G.dy=Math.min(E.y+E.dy-h,I?z(G.area/I):0)
}G.z=!1,G.dy+=E.y+E.dy-h,E.x+=I,E.dx-=I
}}function q(e){var a=j||A(e),c=a[0];
return c.x=0,c.y=0,c.dx=m[0],c.dy=m[1],j&&A.revalue(c),k([c],c.dx*c.dy/c.value),(j?y:C)(c),v&&(j=a),a
}var j,A=bX.layout.hierarchy(),z=Math.round,m=[1,1],D=null,x=fv,v=!1,w="squarify",d=0.5*(1+Math.sqrt(5));
return q.size=function(a){return arguments.length?(m=a,q):m
},q.padding=function(g){function a(h){var i=g.call(q,h,h.depth);
return null==i?fv(h):bm(h,"number"==typeof i?[i,i,i,i]:i)
}function f(e){return bm(e,g)
}if(!arguments.length){return D
}var c;
return x=null==(D=g)?fv:"function"==(c=typeof g)?a:"number"===c?(g=[g,g,g,g],f):f,q
},q.round=function(a){return arguments.length?(z=a?Math.round:Number,q):z!=Number
},q.sticky=function(a){return arguments.length?(v=a,j=null,q):v
},q.ratio=function(a){return arguments.length?(d=a,q):d
},q.mode=function(a){return arguments.length?(w=a+"",q):w
},kb(q,A)
},bX.random={normal:function(c,a){var b=arguments.length;
return 2>b&&(a=1),1>b&&(c=0),function(){var g,f,d;
do{g=2*Math.random()-1,f=2*Math.random()-1,d=g*g+f*f
}while(!d||d>1);
return c+a*g*Math.sqrt(-2*Math.log(d)/d)
}
},logNormal:function(){var a=bX.random.normal.apply(bX,arguments);
return function(){return Math.exp(a())
}
},bates:function(b){var a=bX.random.irwinHall(b);
return function(){return a()/b
}
},irwinHall:function(a){return function(){for(var b=0,c=0;
a>c;
c++){b+=Math.random()
}return b
}
}},bX.scale={};
var eD={floor:hR,ceil:hR};
bX.scale.linear=function(){return jv([0,1],[0,1],ey,!1)
};
var j8={s:1,g:1,p:1,r:1,e:1};
bX.scale.log=function(){return iE(bX.scale.linear().domain([0,1]),10,!0,[1,10])
};
var g2=bX.format(".0e"),aj={floor:function(a){return -Math.ceil(-a)
},ceil:function(a){return -Math.floor(-a)
}};
bX.scale.pow=function(){return km(bX.scale.linear(),1,[0,1])
},bX.scale.sqrt=function(){return bX.scale.pow().exponent(0.5)
},bX.scale.ordinal=function(){return fM([],{t:"range",a:[[]]})
},bX.scale.category10=function(){return bX.scale.ordinal().range(i2)
},bX.scale.category20=function(){return bX.scale.ordinal().range(aw)
},bX.scale.category20b=function(){return bX.scale.ordinal().range(aP)
},bX.scale.category20c=function(){return bX.scale.ordinal().range(e1)
};
var i2=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(gX),aw=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(gX),aP=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(gX),e1=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(gX);
bX.scale.quantile=function(){return d7([],[])
},bX.scale.quantize=function(){return bP(0,1,[0,1])
},bX.scale.threshold=function(){return hf([0.5],[0,1])
},bX.scale.identity=function(){return cH([0,1])
},bX.svg={},bX.svg.arc=function(){function f(){var bi=Math.max(0,+h.apply(this,arguments)),bo=Math.max(0,+b.apply(this,arguments)),ba=d.apply(this,arguments)-fy,cc=k.apply(this,arguments)-fy,bu=Math.abs(cc-ba),ca=ba>cc?0:1;
if(bi>bo&&(be=bo,bo=bi,bi=be),bu>=eP){return m(bo,ca)+(bi?m(bi,1-ca):"")+"Z"
}var be,au,ce,bl,ao,J,ar,ci,cl,at,r,br,aa=0,ai=0,G=[];
if((bl=(+j.apply(this,arguments)||0)/2)&&(ce=g===fg?Math.sqrt(bi*bi+bo*bo):+g.apply(this,arguments),ca||(ai*=-1),bo&&(ai=bL(ce/bo*Math.sin(bl))),bi&&(aa=bL(ce/bi*Math.sin(bl)))),bo){ao=bo*Math.cos(ba+ai),J=bo*Math.sin(ba+ai),ar=bo*Math.cos(cc-ai),ci=bo*Math.sin(cc-ai);
var ae=Math.abs(cc-ba-2*ai)<=c9?0:1;
if(ai&&b7(ao,J,ar,ci)===ca^ae){var al=(ba+cc)/2;
ao=bo*Math.cos(al),J=bo*Math.sin(al),ar=ci=null
}}else{ao=J=0
}if(bi){cl=bi*Math.cos(cc-aa),at=bi*Math.sin(cc-aa),r=bi*Math.cos(ba+aa),br=bi*Math.sin(ba+aa);
var bc=Math.abs(ba-cc+2*aa)<=c9?0:1;
if(aa&&b7(cl,at,r,br)===1-ca^bc){var K=(ba+cc)/2;
cl=bi*Math.cos(K),at=bi*Math.sin(K),r=br=null
}}else{cl=at=0
}if((be=Math.min(Math.abs(bo-bi)/2,+l.apply(this,arguments)))>0.001){au=bo>bi^ca?0:1;
var o=null==r?[cl,at]:null==ar?[ao,J]:hk([ao,J],[r,br],[ar,ci],[cl,at]),t=ao-o[0],ac=J-o[1],u=ar-o[0],i=ci-o[1],bt=1/Math.sin(Math.acos((t*u+ac*i)/(Math.sqrt(t*t+ac*ac)*Math.sqrt(u*u+i*i)))/2),X=Math.sqrt(o[0]*o[0]+o[1]*o[1]);
if(null!=ar){var W=Math.min(be,(bo-X)/(bt+1)),B=gU(null==r?[cl,at]:[r,br],[ao,J],bo,W,ca),Q=gU([ar,ci],[cl,at],bo,W,ca);
be===W?G.push("M",B[0],"A",W,",",W," 0 0,",au," ",B[1],"A",bo,",",bo," 0 ",1-ca^b7(B[1][0],B[1][1],Q[1][0],Q[1][1]),",",ca," ",Q[1],"A",W,",",W," 0 0,",au," ",Q[0]):G.push("M",B[0],"A",W,",",W," 0 1,",au," ",Q[0])
}else{G.push("M",ao,",",J)
}if(null!=r){var c=Math.min(be,(bi-X)/(bt-1)),a=gU([ao,J],[r,br],bi,-c,ca),e=gU([cl,at],null==ar?[ao,J]:[ar,ci],bi,-c,ca);
be===c?G.push("L",e[0],"A",c,",",c," 0 0,",au," ",e[1],"A",bi,",",bi," 0 ",ca^b7(e[1][0],e[1][1],a[1][0],a[1][1]),",",1-ca," ",a[1],"A",c,",",c," 0 0,",au," ",a[0]):G.push("L",e[0],"A",c,",",c," 0 0,",au," ",a[0])
}else{G.push("L",cl,",",at)
}}else{G.push("M",ao,",",J),null!=ar&&G.push("A",bo,",",bo," 0 ",ae,",",ca," ",ar,",",ci),G.push("L",cl,",",at),null!=r&&G.push("A",bi,",",bi," 0 ",bc,",",1-ca," ",r,",",br)
}return G.push("Z"),G.join("")
}function m(c,a){return"M0,"+c+"A"+c+","+c+" 0 1,"+a+" 0,"+-c+"A"+c+","+c+" 0 1,"+a+" 0,"+c
}var h=fT,b=dI,l=bx,g=fg,d=jL,k=h3,j=eT;
return f.innerRadius=function(a){return arguments.length?(h=aT(a),f):h
},f.outerRadius=function(a){return arguments.length?(b=aT(a),f):b
},f.cornerRadius=function(a){return arguments.length?(l=aT(a),f):l
},f.padRadius=function(a){return arguments.length?(g=a==fg?fg:aT(a),f):g
},f.startAngle=function(a){return arguments.length?(d=aT(a),f):d
},f.endAngle=function(a){return arguments.length?(k=aT(a),f):k
},f.padAngle=function(a){return arguments.length?(j=aT(a),f):j
},f.centroid=function(){var c=(+h.apply(this,arguments)+ +b.apply(this,arguments))/2,a=(+d.apply(this,arguments)+ +k.apply(this,arguments))/2-fy;
return[Math.cos(a)*c,Math.sin(a)*c]
},f
};
var fg="auto";
bX.svg.line=function(){return gd(hR)
};
var aY=bX.map({linear:gC,"linear-closed":dm,step:a6,"step-before":eB,"step-after":j7,basis:eZ,"basis-open":fd,"basis-closed":aX,bundle:cv,cardinal:iX,"cardinal-open":g0,"cardinal-closed":ag,monotone:eH});
aY.forEach(function(b,a){a.key=b,a.closed=/-closed$/.test(b)
});
var cx=[0,2/3,1/3,0],gK=[0,1/3,2/3,0],bH=[0,1/6,2/3,1/6];
bX.svg.line.radial=function(){var a=gd(fm);
return a.radius=a.x,delete a.x,a.angle=a.y,delete a.y,a
},eB.reverse=j7,j7.reverse=eB,bX.svg.area=function(){return bj(hR)
},bX.svg.area.radial=function(){var a=bj(fm);
return a.radius=a.x,delete a.x,a.innerRadius=a.x0,delete a.x0,a.outerRadius=a.x1,delete a.x1,a.angle=a.y,delete a.y,a.startAngle=a.y0,delete a.y0,a.endAngle=a.y1,delete a.y1,a
},bX.svg.chord=function(){function f(r,i){var o=q(this,h,r,i),e=q(this,d,r,i);
return"M"+o.p0+b(o.r,o.p1,o.a1-o.a0)+(j(o,e)?p(o.r,o.p1,o.r,o.p0):p(o.r,o.p1,e.r,e.p0)+b(e.r,e.p1,e.a1-e.a0)+p(e.r,e.p1,o.r,o.p0))+"Z"
}function q(z,l,x,w){var a=l.call(z,x,w),c=m.call(z,a,w),y=k.call(z,a,w)-fy,v=g.call(z,a,w)-fy;
return{r:c,a0:y,a1:v,p0:[c*Math.cos(y),c*Math.sin(y)],p1:[c*Math.cos(v),c*Math.sin(v)]}
}function j(c,a){return c.a0==a.a0&&c.a1==a.a1
}function b(i,a,c){return"A"+i+","+i+" 0 "+ +(c>c9)+",1 "+a
}function p(l,a,i,c){return"Q 0,0 "+c
}var h=eA,d=j5,m=fZ,k=jL,g=h3;
return f.radius=function(a){return arguments.length?(m=aT(a),f):m
},f.source=function(a){return arguments.length?(h=aT(a),f):h
},f.target=function(a){return arguments.length?(d=aT(a),f):d
},f.startAngle=function(a){return arguments.length?(k=aT(a),f):k
},f.endAngle=function(a){return arguments.length?(g=aT(a),f):g
},f
},bX.svg.diagonal=function(){function d(k,f){var g=a.call(this,k,f),h=c.call(this,k,f),e=(g.y+h.y)/2,j=[g,{x:g.x,y:e},{x:h.x,y:e},h];
return j=j.map(b),"M"+j[0]+"C"+j[1]+" "+j[2]+" "+j[3]
}var a=eA,c=j5,b=ek;
return d.source=function(f){return arguments.length?(a=aT(f),d):a
},d.target=function(e){return arguments.length?(c=aT(e),d):c
},d.projection=function(e){return arguments.length?(b=e,d):b
},d
},bX.svg.diagonal.radial=function(){var c=bX.svg.diagonal(),a=ek,b=c.projection;
return c.projection=function(d){return arguments.length?b(fC(a=d)):a
},c
},bX.svg.symbol=function(){function c(e,d){return(jH.get(a.call(this,e,d))||gm)(b.call(this,e,d))
}var a=jU,b=aC;
return c.type=function(d){return arguments.length?(a=aT(d),c):a
},c.size=function(d){return arguments.length?(b=aT(d),c):b
},c
};
var jH=bX.map({circle:gm,cross:function(b){var a=Math.sqrt(b/5)/2;
return"M"+-3*a+","+-a+"H"+-a+"V"+-3*a+"H"+a+"V"+-a+"H"+3*a+"V"+a+"H"+a+"V"+3*a+"H"+-a+"V"+a+"H"+-3*a+"Z"
},diamond:function(c){var a=Math.sqrt(c/(2*hq)),b=a*hq;
return"M0,"+-a+"L"+b+",0 0,"+a+" "+-b+",0Z"
},square:function(b){var a=Math.sqrt(b)/2;
return"M"+-a+","+-a+"L"+a+","+-a+" "+a+","+a+" "+-a+","+a+"Z"
},"triangle-down":function(c){var a=Math.sqrt(c/c1),b=a*c1/2;
return"M0,"+b+"L"+a+","+-b+" "+-a+","+-b+"Z"
},"triangle-up":function(c){var a=Math.sqrt(c/c1),b=a*c1/2;
return"M0,"+-b+"L"+a+","+b+" "+-a+","+b+"Z"
}});
bX.svg.symbolTypes=jH.keys();
var c1=Math.sqrt(3),hq=Math.tan(30*bw);
aG.transition=function(g){for(var w,m,b=eJ||++en,v=c5(g),j=[],d=fp||{time:Date.now(),ease:eU,delay:0,duration:250},q=-1,p=this.length;
++q<p;
){j.push(w=[]);
for(var h=this[q],x=-1,k=h.length;
++x<k;
){(m=h[x])&&d0(m,x,v,b,d),w.push(m)
}}return cN(j,v,b)
},aG.interrupt=function(a){return this.each(null==a?bk:jd(c5(a)))
};
var eJ,fp,bk=jd(c5()),f1=[],en=0;
f1.call=aG.call,f1.empty=aG.empty,f1.node=aG.node,f1.size=aG.size,bX.transition=function(b,a){return b&&b.transition?eJ?b.transition(a):b:bX.selection().transition(b)
},bX.transition.prototype=f1,f1.select=function(g){var w,m,b,v=this.id,j=this.namespace,d=[];
g=i3(g);
for(var q=-1,p=this.length;
++q<p;
){d.push(w=[]);
for(var h=this[q],x=-1,k=h.length;
++x<k;
){(b=h[x])&&(m=g.call(b,b.__data__,x,q))?("__data__" in b&&(m.__data__=b.__data__),d0(m,x,j,v,b[j][v]),w.push(m)):w.push(null)
}}return cN(d,j,v)
},f1.selectAll=function(k){var E,z,b,D,q,j=this.id,B=this.namespace,A=[];
k=jw(k);
for(var m=-1,F=this.length;
++m<F;
){for(var y=this[m],w=-1,x=y.length;
++w<x;
){if(b=y[w]){q=b[B][j],z=k.call(b,b.__data__,w,m),A.push(E=[]);
for(var d=-1,C=z.length;
++d<C;
){(D=z[d])&&d0(D,d,B,j,q),E.push(D)
}}}}return cN(A,B,j)
},f1.filter=function(f){var m,h,b,l=[];
"function"!=typeof f&&(f=i0(f));
for(var g=0,d=this.length;
d>g;
g++){l.push(m=[]);
for(var h=this[g],k=0,j=h.length;
j>k;
k++){(b=h[k])&&f.call(b,b.__data__,k,g)&&m.push(b)
}}return cN(l,this.namespace,this.id)
},f1.tween=function(d,a){var c=this.id,b=this.namespace;
return arguments.length<2?this.node()[b][c].tween.get(d):iM(this,null==a?function(e){e[b][c].tween.remove(d)
}:function(e){e[b][c].tween.set(d,a)
})
},f1.attr=function(k,f){function h(){this.removeAttribute(b)
}function g(){this.removeAttributeNS(b.space,b.local)
}function c(a){return null==a?h:(a+="",function(){var i,l=this.getAttribute(b);
return l!==a&&(i=j(l,a),function(e){this.setAttribute(b,i(e))
})
})
}function d(a){return null==a?g:(a+="",function(){var i,l=this.getAttributeNS(b.space,b.local);
return l!==a&&(i=j(l,a),function(e){this.setAttributeNS(b.space,b.local,i(e))
})
})
}if(arguments.length<2){for(f in k){this.attr(f,k[f])
}return this
}var j="transform"==k?jM:ey,b=bX.ns.qualify(k);
return cg(this,"attr."+k,f,b.local?d:c)
},f1.attrTween=function(f,b){function d(i,h){var g=b.call(this,i,h,this.getAttribute(a));
return g&&function(e){this.setAttribute(a,g(e))
}
}function c(i,h){var g=b.call(this,i,h,this.getAttributeNS(a.space,a.local));
return g&&function(e){this.setAttributeNS(a.space,a.local,g(e))
}
}var a=bX.ns.qualify(f);
return this.tween("attr."+f,a.local?c:d)
},f1.style=function(g,d,c){function a(){this.style.removeProperty(g)
}function b(h){return null==h?a:(h+="",function(){var e,j=hY(this).getComputedStyle(this,null).getPropertyValue(g);
return j!==h&&(e=ey(j,h),function(i){this.style.setProperty(g,e(i),c)
})
})
}var f=arguments.length;
if(3>f){if("string"!=typeof g){2>f&&(d="");
for(c in g){this.style(c,g[c],d)
}return this
}c=""
}return cg(this,"style."+g,d,b)
},f1.styleTween=function(d,c,b){function a(e,f){var g=c.call(this,e,f,hY(this).getComputedStyle(this,null).getPropertyValue(d));
return g&&function(h){this.style.setProperty(d,g(h),b)
}
}return arguments.length<3&&(b=""),this.tween("style."+d,a)
},f1.text=function(a){return cg(this,"text",a,dO)
},f1.remove=function(){var a=this.namespace;
return this.each("end.transition",function(){var b;
this[a].count<2&&(b=this.parentNode)&&b.removeChild(this)
})
},f1.ease=function(c){var a=this.id,b=this.namespace;
return arguments.length<1?this.node()[b][a].ease:("function"!=typeof c&&(c=bX.ease.apply(bX,arguments)),iM(this,function(d){d[b][a].ease=c
}))
},f1.delay=function(c){var a=this.id,b=this.namespace;
return arguments.length<1?this.node()[b][a].delay:iM(this,"function"==typeof c?function(f,d,e){f[b][a].delay=+c.call(f,f.__data__,d,e)
}:(c=+c,function(d){d[b][a].delay=c
}))
},f1.duration=function(c){var a=this.id,b=this.namespace;
return arguments.length<1?this.node()[b][a].duration:iM(this,"function"==typeof c?function(f,d,e){f[b][a].duration=Math.max(1,c.call(f,f.__data__,d,e))
}:(c=Math.max(1,c),function(d){d[b][a].duration=c
}))
},f1.each=function(g,c){var f=this.id,d=this.namespace;
if(arguments.length<2){var a=fp,b=eJ;
try{eJ=f,iM(this,function(j,e,h){fp=j[d][f],g.call(j,j.__data__,e,h)
})
}finally{fp=a,eJ=b
}}else{iM(this,function(e){var h=e[d][f];
(h.event||(h.event=bX.dispatch("start","end","interrupt"))).on(g,c)
})
}return this
},f1.transition=function(){for(var g,w,m,b,v=this.id,j=++en,d=this.namespace,q=[],p=0,h=this.length;
h>p;
p++){q.push(g=[]);
for(var w=this[p],x=0,k=w.length;
k>x;
x++){(m=w[x])&&(b=m[d][v],d0(m,x,d,j,{time:b.time,ease:b.ease,delay:b.delay+b.duration,duration:b.duration})),g.push(m)
}}return cN(q,d,j)
},bX.svg.axis=function(){function f(a){a.each(function(){var O,Q=bX.select(this),G=this.__chart__||h,X=this.__chart__=h.copy(),V=null==j?X.ticks?X.ticks.apply(X,k):X.domain():j,W=null==m?X.tickFormat?X.tickFormat.apply(X,k):hR:m,K=Q.selectAll(".tick").data(V,X),D=K.enter().insert("g",".domain").attr("class","tick").style("opacity",bO),Y=bX.transition(K.exit()).style("opacity",bO).remove(),P=bX.transition(K.order()).style("opacity",1),r=Math.max(l,0)+d,y=es(X),Z=Q.selectAll(".domain").data([0]),aa=(Z.enter().append("path").attr("class","domain"),bX.transition(Z));
D.append("line"),D.append("text");
var B,e,U,F,J=D.select("line"),o=P.select("line"),H=K.select("text").text(W),u=D.select("text"),I=P.select("text"),t="top"===b||"left"===b?-1:1;
if("bottom"===b||"top"===b?(O=bY,B="x",U="y",e="x2",F="y2",H.attr("dy",0>t?"0em":".71em").style("text-anchor","middle"),aa.attr("d","M"+y[0]+","+t*g+"V0H"+y[1]+"V"+t*g)):(O=dw,B="y",U="x",e="y2",F="x2",H.attr("dy",".32em").style("text-anchor",0>t?"end":"start"),aa.attr("d","M"+t*g+","+y[0]+"H0V"+y[1]+"H"+t*g)),J.attr(F,t*l),u.attr(U,t*r),o.attr(e,0).attr(F,t*l),I.attr(B,0).attr(U,t*r),X.rangeBand){var c=X,i=c.rangeBand()/2;
G=X=function(p){return c(p)+i
}
}else{G.rangeBand?G=X:Y.call(O,X,G)
}D.call(O,G,X),P.call(O,X,X)
})
}var m,h=bX.scale.linear(),b=fE,l=6,g=6,d=3,k=[10],j=null;
return f.scale=function(a){return arguments.length?(h=a,f):h
},f.orient=function(a){return arguments.length?(b=a in aE?a+"":fE,f):b
},f.ticks=function(){return arguments.length?(k=arguments,f):k
},f.tickValues=function(a){return arguments.length?(j=a,f):j
},f.tickFormat=function(a){return arguments.length?(m=a,f):m
},f.tickSize=function(a){var c=arguments.length;
return c?(l=+a,g=+arguments[c-1],f):l
},f.innerTickSize=function(a){return arguments.length?(l=+a,f):l
},f.outerTickSize=function(a){return arguments.length?(g=+a,f):g
},f.tickPadding=function(a){return arguments.length?(d=+a,f):d
},f.tickSubdivide=function(){return arguments.length&&f
},f
};
var fE="bottom",aE={top:1,right:1,bottom:1,left:1};
bX.svg.brush=function(){function k(a){a.each(function(){var g=bX.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",q).on("touchstart.brush",q),n=g.selectAll(".background").data([0]);
n.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),g.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");
var e=g.selectAll(".resize").data(B,hR);
e.exit().remove(),e.enter().append("g").attr("class",function(c){return"resize "+c
}).style("cursor",function(c){return jW[c]
}).append("rect").attr("x",function(c){return/[ew]$/.test(c)?-3:null
}).attr("y",function(c){return/^[ns]/.test(c)?-3:null
}).attr("width",6).attr("height",6).style("visibility","hidden"),e.style("display",k.empty()?"none":null);
var p,l=bX.transition(g),i=bX.transition(n);
m&&(p=es(m),i.attr("x",p[0]).attr("width",p[1]-p[0]),b(l)),D&&(p=es(D),i.attr("y",p[0]).attr("height",p[1]-p[0]),C(l)),y(l)
})
}function y(a){a.selectAll(".resize").attr("transform",function(c){return"translate("+x[+/e$/.test(c)]+","+t[+/^s/.test(c)]+")"
})
}function b(a){a.select(".extent").attr("x",x[0]),a.selectAll(".extent,.n>rect,.s>rect").attr("width",x[1]-x[0])
}function C(a){a.select(".extent").attr("y",t[0]),a.selectAll(".extent,.e>rect,.w>rect").attr("height",t[1]-t[0])
}function q(){function I(){32==bX.event.keyCode&&(s||(f=null,u[0]-=x[1],u[1]-=t[1],s=2),iV())
}function p(){32==bX.event.keyCode&&2==s&&(u[0]+=x[1],u[1]+=t[1],s=0,iV())
}function J(){var v=bX.mouse(K),i=!1;
n&&(v[0]+=n[0],v[1]+=n[1]),s||(bX.event.altKey?(f||(f=[(x[0]+x[1])/2,(t[0]+t[1])/2]),u[0]=x[+(v[0]<f[0])],u[1]=t[+(v[1]<f[1])]):f=null),F&&G(v,m,0)&&(b(H),i=!0),e&&G(v,D,1)&&(C(H),i=!0),i&&(y(H),o({type:"brush",mode:s?"move":"resize"}))
}function G(L,U,P){var E,T,N=es(U),R=N[0],M=N[1],V=u[P],S=P?t:x,Q=S[1]-S[0];
return s&&(R-=V,M-=Q+V),E=(P?d:w)?Math.max(R,Math.min(M,L[P])):L[P],s?T=(E+=V)+Q:(f&&(V=Math.max(R,Math.min(M,2*f[P]-E))),E>V?(T=E,E=V):T=V),S[0]!=E||S[1]!=T?(P?A=null:j=null,S[0]=E,S[1]=T,!0):void 0
}function l(){J(),H.style("pointer-events","all").selectAll(".resize").style("display",k.empty()?"none":null),bX.select("body").style("cursor",null),g.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),h(),o({type:"brushend"})
}var f,n,K=this,O=bX.select(bX.event.target),o=z.of(K,arguments),H=bX.select(K),r=O.datum(),F=!/^(n|s)$/.test(r)&&m,e=!/^(e|w)$/.test(r)&&D,s=O.classed("extent"),h=iO(K),u=bX.mouse(K),g=bX.select(hY(K)).on("keydown.brush",I).on("keyup.brush",p);
if(bX.event.changedTouches?g.on("touchmove.brush",J).on("touchend.brush",l):g.on("mousemove.brush",J).on("mouseup.brush",l),H.interrupt().selectAll("*").interrupt(),s){u[0]=x[0]-u[0],u[1]=t[0]-u[1]
}else{if(r){var a=+/w$/.test(r),c=+/^n/.test(r);
n=[x[1-a]-u[0],t[1-c]-u[1]],u[0]=x[a],u[1]=t[c]
}else{bX.event.altKey&&(f=u.slice())
}}H.style("pointer-events","none").selectAll(".resize").style("display",null),bX.select("body").style("cursor",O.style("cursor")),o({type:"brushstart"}),J()
}var j,A,z=jp(k,"brushstart","brush","brushend"),m=null,D=null,x=[0,0],t=[0,0],w=!0,d=!0,B=gp[0];
return k.event=function(a){a.each(function(){var g=z.of(this,arguments),c={x:x,y:t,i:j,j:A},f=this.__chart__||c;
this.__chart__=c,eJ?bX.select(this).transition().each("start.brush",function(){j=f.i,A=f.j,x=f.x,t=f.y,g({type:"brushstart"})
}).tween("brush:brush",function(){var i=j1(x,c.x),h=j1(t,c.y);
return j=A=null,function(e){x=c.x=i(e),t=c.y=h(e),g({type:"brush",mode:"resize"})
}
}).each("end.brush",function(){j=c.i,A=c.j,g({type:"brush",mode:"resize"}),g({type:"brushend"})
}):(g({type:"brushstart"}),g({type:"brush",mode:"resize"}),g({type:"brushend"}))
})
},k.x=function(a){return arguments.length?(m=a,B=gp[!m<<1|!D],k):m
},k.y=function(a){return arguments.length?(D=a,B=gp[!m<<1|!D],k):D
},k.clamp=function(a){return arguments.length?(m&&D?(w=!!a[0],d=!!a[1]):m?w=!!a:D&&(d=!!a),k):m&&D?[w,d]:m?w:D?d:null
},k.extent=function(g){var l,h,a,f,n;
return arguments.length?(m&&(l=g[0],h=g[1],D&&(l=l[0],h=h[0]),j=[l,h],m.invert&&(l=m(l),h=m(h)),l>h&&(n=l,l=h,h=n),(l!=x[0]||h!=x[1])&&(x=[l,h])),D&&(a=g[0],f=g[1],m&&(a=a[1],f=f[1]),A=[a,f],D.invert&&(a=D(a),f=D(f)),a>f&&(n=a,a=f,f=n),(a!=t[0]||f!=t[1])&&(t=[a,f])),k):(m&&(j?(l=j[0],h=j[1]):(l=x[0],h=x[1],m.invert&&(l=m.invert(l),h=m.invert(h)),l>h&&(n=l,l=h,h=n))),D&&(A?(a=A[0],f=A[1]):(a=t[0],f=t[1],D.invert&&(a=D.invert(a),f=D.invert(f)),a>f&&(n=a,a=f,f=n))),m&&D?[[l,a],[h,f]]:m?[l,h]:D&&[a,f])
},k.clear=function(){return k.empty()||(x=[0,0],t=[0,0],j=A=null),k
},k.empty=function(){return !!m&&x[0]==x[1]||!!D&&t[0]==t[1]
},bX.rebind(k,z,"on")
};
var jW={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},gp=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],jk=jX.format=gL.timeFormat,cP=jk.utc,ck=cP("%Y-%m-%dT%H:%M:%S.%LZ");
jk.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ip:ck,ip.parse=function(b){var a=new Date(b);
return isNaN(a)?null:a
},ip.toString=ck.toString,jX.second=ax(function(a){return new iA(1000*Math.floor(a/1000))
},function(b,a){b.setTime(b.getTime()+1000*Math.floor(a))
},function(a){return a.getSeconds()
}),jX.seconds=jX.second.range,jX.seconds.utc=jX.second.utc.range,jX.minute=ax(function(a){return new iA(60000*Math.floor(a/60000))
},function(b,a){b.setTime(b.getTime()+60000*Math.floor(a))
},function(a){return a.getMinutes()
}),jX.minutes=jX.minute.range,jX.minutes.utc=jX.minute.utc.range,jX.hour=ax(function(b){var a=b.getTimezoneOffset()/60;
return new iA(3600000*(Math.floor(b/3600000-a)+a))
},function(b,a){b.setTime(b.getTime()+3600000*Math.floor(a))
},function(a){return a.getHours()
}),jX.hours=jX.hour.range,jX.hours.utc=jX.hour.utc.range,jX.month=ax(function(a){return a=jX.day(a),a.setDate(1),a
},function(b,a){b.setMonth(b.getMonth()+a)
},function(a){return a.getMonth()
}),jX.months=jX.month.range,jX.months.utc=jX.month.utc.range;
var dQ=[1000,5000,15000,30000,60000,300000,900000,1800000,3600000,10800000,21600000,43200000,86400000,172800000,604800000,2592000000,7776000000,31536000000],c7=[[jX.second,1],[jX.second,5],[jX.second,15],[jX.second,30],[jX.minute,1],[jX.minute,5],[jX.minute,15],[jX.minute,30],[jX.hour,1],[jX.hour,3],[jX.hour,6],[jX.hour,12],[jX.day,1],[jX.day,2],[jX.week,1],[jX.month,1],[jX.month,3],[jX.year,1]],d4=jk.multi([[".%L",function(a){return a.getMilliseconds()
}],[":%S",function(a){return a.getSeconds()
}],["%I:%M",function(a){return a.getMinutes()
}],["%I %p",function(a){return a.getHours()
}],["%a %d",function(a){return a.getDay()&&1!=a.getDate()
}],["%b %d",function(a){return 1!=a.getDate()
}],["%B",function(a){return a.getMonth()
}],["%Y",gO]]),bZ={range:function(c,a,b){return bX.range(Math.ceil(c/b)*b,+a,b).map(hI)
},floor:hR,ceil:hR};
c7.year=jX.year,jX.scale=function(){return kk(bX.scale.linear(),c7,d4)
};
var dy=c7.map(function(a){return[a[0].utc,a[1]]
}),iy=cP.multi([[".%L",function(a){return a.getUTCMilliseconds()
}],[":%S",function(a){return a.getUTCSeconds()
}],["%I:%M",function(a){return a.getUTCMinutes()
}],["%I %p",function(a){return a.getUTCHours()
}],["%a %d",function(a){return a.getUTCDay()&&1!=a.getUTCDate()
}],["%b %d",function(a){return 1!=a.getUTCDate()
}],["%B",function(a){return a.getUTCMonth()
}],["%Y",gO]]);
dy.year=jX.year.utc,jX.scale.utc=function(){return kk(bX.scale.linear(),dy,iy)
},bX.text=cm(function(a){return a.responseText
}),bX.json=function(b,a){return gF(b,"application/json",fI,a)
},bX.html=function(b,a){return gF(b,"text/html",eq,a)
},bX.xml=cm(function(a){return a.responseXML
}),"function"==typeof define&&define.amd?define(bX):"object"==typeof module&&module.exports&&(module.exports=bX),this.d3=bX
}();
jQuery(document).ready(function(f){if(f(".breakWeather").is(":visible")){f(".weatherContainer").css("margin-top","0")
}var d=f(".vertBanner"),c=f(".weatherContainer .vertBanner.light"),a=f(".weatherContainer .vertBanner.dark"),e=f(".weatherUpperContainer");
var b=e.offset().top+e.height();
a.css("visibility","hidden");
c.css("visibility","visible");
f(window).scroll(function(){if((f(window).scrollTop()+d.height()+60)>=b){c.css("visibility","hidden");
a.css("visibility","visible")
}else{c.css("visibility","visible");
a.css("visibility","hidden")
}});
f(".locationSelect").on("click","p",function(){f(this).parent().toggleClass("active");
f(".locationOverlay").toggle()
});
f(".locationOverlay").on("click",function(){f(".locationSelect").toggleClass("active");
f(".locationOverlay").toggle()
});
f(".locationSelectDropdownItems").on("click","a",function(h){h.preventDefault();
h.stopPropagation();
f.cookie("tvnz-weather-location",f(h.target).data("id"),{path:"/",expires:365*5});
var g=f(h.delegateTarget).data("href");
location.href=g
});
f(".locationSelectSelect").on("change",function(h){h.preventDefault();
h.stopPropagation();
f.cookie("tvnz-weather-location",f(h.target).val(),{path:"/",expires:365*5});
var g=f(h.target).data("href");
location.href=g
});
f(".forecastHeaders h2").click(function(){var g=f(this).data("tab");
f(this).addClass("active");
f(".forecastHeaders h2").not(this).removeClass("active");
f(".forecastDetails").removeClass("active");
f(".forecastDetails."+g).addClass("active")
});
f(".weatherContainer .forecasts").on("click",".forecastItem",function(){var j=f(this).data("id");
var g=f(".weatherContainer");
var h=f(".weather-background");
var i=f(this).parent().find(".forecastItem.active");
i.removeClass("active");
f(this).addClass("active");
h.removeClass(i.data("situation")).addClass(f(this).data("situation")).removeClass("day night").addClass(f(this).index()==0?(g.data("day")?"day":"night"):"day");
f(".weatherContainer .forecast.active").removeClass("active");
f('.weatherContainer .forecast[data-id="'+j+'"]').addClass("active");
f(".weatherContainer .locationForecast.active").removeClass("active");
f('.weatherContainer .locationForecast[data-id="'+j+'"]').addClass("active");
f(".weatherContainer .tides").toggleClass("hide",!f(this).parent().find(".forecastItem:first").hasClass("active"));
f(".weatherContainer .forecasts").trigger("forecastchange")
});
(function(){var h=f(".weatherContainer .locationDetail").width(),w=f(".weatherContainer .locationDetail").height(),t=Math.min(h,w)/2;
var q=d3.svg.arc().outerRadius(t-12).innerRadius(0).startAngle(0).endAngle(2*Math.PI).padAngle(0);
var v=d3.svg.arc().outerRadius(t-8).innerRadius(t-14).startAngle(function(g){return l(g).start
}).endAngle(function(g){return l(g).end
}).padAngle(0);
var s=d3.svg.arc().outerRadius(t).innerRadius(t-22).startAngle(function(g){return l(g).start-0.005
}).endAngle(function(g){return l(g).start+0.005
});
var j=d3.svg.arc().outerRadius(t).innerRadius(t-22).startAngle(function(g){return l(g).end-0.005
}).endAngle(function(g){return l(g).end+0.005
});
var i=new Date(),m=i.getHours()<10?String("0"+i.getHours()):String(i.getHours()),n=i.getMinutes()<10?String("0"+i.getMinutes()):String(i.getMinutes()),k=m+n;
var u=d3.svg.arc().outerRadius(t-8).innerRadius(t-14).startAngle(function(g){return l([k,k]).start
}).endAngle(function(g){return l([k,k]).end
}).padAngle(0);
var p=d3.select(".weatherContainer .locationDetail svg").append("defs");
p.append("pattern").attr("id","iconday").attr("patternUnits","userSpaceOnUse").attr("width",976).attr("height",743).attr("patternTransform","translate(-25, -395)").append("image").attr("xlink:href","/etc/designs/news/clientlibs_less/content/images/structure/weathersprites.svg").attr("width",976).attr("height",743);
p.append("pattern").attr("id","iconnight").attr("patternUnits","userSpaceOnUse").attr("width",976).attr("height",743).attr("patternTransform","translate(-759, -219)").append("image").attr("xlink:href","/etc/designs/news/clientlibs_less/content/images/structure/weathersprites.svg").attr("width",976).attr("height",743);
var r=d3.select(".weatherContainer .locationDetail svg").attr("width",h).attr("height",w).append("g").attr("transform","translate("+h/2+","+w/2+")");
function l(A){var B=Number(A[0].substring(0,2)),x=Number(A[0].substring(2,4)),F=Number(A[1].substring(0,2)),E=Number(A[1].substring(2,4)),g=(B*60)+x,y=(F*60)+E;
if(y<g){y=y+1440
}var C=(g/1440)*2*Math.PI,D=(y/1440)*2*Math.PI,z=Math.PI;
return{start:C-z,end:D-z}
}function o(){var x=f(".weatherContainer .forecast.active");
var A=[String(x.data("sunrise")),String(x.data("sunset"))];
var B=r.selectAll("path");
if(B.empty()){var z=B.data([A]).enter();
z.append("path").attr("class","bg").attr("d",q);
z.append("path").attr("class","day").attr("d",v);
z.append("path").attr("class","marker sunrise").attr("d",s);
z.append("path").attr("class","marker sunset").attr("d",j);
if(f("html.msie10").length==0){var y="iconnight";
if(Number(k)>=Number(A[0])&&Number(k)<Number(A[1])){y="iconday"
}var g=42;
z.append("rect").attr("width",g).attr("height",g).attr("fill","url(#"+y+")").attr("transform",function(C){return"translate("+(u.centroid()[0]-(g/2))+","+(u.centroid()[1]-(g/2))+")"
})
}}else{r.select(".day").data([A]).attr("d",v);
r.select(".sunrise").data([A]).attr("d",s);
r.select(".sunset").data([A]).attr("d",j);
if(x.index()==1){r.select("rect").style("display",null)
}else{r.select("rect").style("display","none")
}}}o();
f(".weatherContainer .forecasts").on("forecastchange",o)
})();
(function(){var i={top:20,right:3,bottom:3,left:30},h=f(".weatherContainer .tideChart .chart").width()-i.left-i.right,p=f(".weatherContainer .tideChart .chart").height()-i.top-i.bottom;
var g=d3.time.format("%Y-%m-%d %H:%M").parse;
var n=d3.time.scale().range([0,h]),l=d3.scale.linear().range([p,0]);
var o=d3.svg.line().interpolate("cardinal").tension(0.5).x(function(q){return n(q.date)
}).y(function(q){return l(q.height)
});
var m=d3.svg.line().x(function(){return n(new Date())
}).y(function(q){return l(q)
});
var k=d3.select(".weatherContainer .tideChart svg").attr("width",h+i.left+i.right).attr("height",p+i.top+i.bottom).append("g").attr("transform","translate("+i.left+","+i.top+")");
function j(){var q=f(".weatherContainer .cityTide.active");
if(q.length==0){return
}var t=[];
f.each(q.data("tides"),function(y,x){t.push({date:g(x.d),height:x.h})
});
var w=t[0].date;
var r=t[t.length-1].date;
var u=t[1].date-t[0].date;
var s=[{date:moment(w).subtract(3*u,"ms").toDate(),height:t[1].height},{date:moment(w).subtract(2*u,"ms").toDate(),height:t[0].height},{date:moment(w).subtract(1*u,"ms").toDate(),height:t[1].height}];
var v=[{date:moment(r).add(1*u,"ms").toDate(),height:t[t.length-2].height},{date:moment(r).add(2*u,"ms").toDate(),height:t[t.length-1].height},{date:moment(r).add(3*u,"ms").toDate(),height:t[t.length-2].height}];
t=s.concat(t).concat(v);
n.domain([moment(t[3].date).subtract(9,"hours").toDate(),moment(t[t.length-4].date).add(9,"hours").toDate()]);
l.domain(d3.extent(t,function(x){return x.height
}));
k.selectAll("path, text").remove();
k.append("path").datum(t).attr("class","line").attr("d",o);
k.append("path").datum(l.domain()).attr("class","now").attr("d",m);
k.append("text").text("NOW").attr("class","label").attr("text-anchor","middle").attr("x",function(x){return n(new Date())
}).attr("y","-5");
f(".weatherContainer .tides .times.active .time").each(function(x,z){var y=n(t[x+s.length].date)+i.left;
var A=f(z).width()/2;
f(z).css("left",(y-A)+"px")
})
}j();
f(".weatherContainer .tides").on("click",".cityTide",function(q){f(this).parent().find(".cityTide").removeClass("active");
f(this).addClass("active");
f(".weatherContainer .tides .times").removeClass("active");
f('.weatherContainer .tides .times[data-id="'+f(this).data("id")+'"]').addClass("active");
j()
})
})();
f(".rainRadarCityList .city").click(function(){var g=f(this).data("tab");
f(this).toggleClass("active");
f(".rainRadarCityList .city").not(this).removeClass("active");
f(".rainRadarCityMap .rainMap").removeClass("active");
f(".rainRadarCityMap .rainMap."+g).addClass("active")
});
f(".video").on("click",".overlayContainer",function(k){k.stopPropagation();
f(this).hide().next("img").css("visibility","hidden");
var i=f(this).closest(".video");
var j=i.data("video-id");
var h=brightcove.api.getExperience(j),g=h.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
g.play()
}).on("templateReady",function(){if(location.search.indexOf("auto=true")>0){f(".video .overlayContainer").click()
}});
f(".storyPage.video[data-video-id]").each(function(h){var i=f(this).attr("data-video-id");
var g="#player-"+i;
TVNZ.News.HTML5.intialiseVideo(g);
if(h==0&&(i===f.getQuery().auto)&&f(this).hasClass("desktop")){TVNZ.News.HTML5.play(g)
}})
});
$(document).ready(function(b){var a=new window.TVNZ.ads.WeatherAdInjector(b(".weatherAdsContainer"),".weatherTile");
a.injectAds();
a.initialAdsRefresh()
});