var googletag=googletag||{};
googletag.cmd=googletag.cmd||[];
function mm_log(a){console.log(a)
}gotAParallax="false";
googletag.cmd.push(function(){if($("body").data("device-type")=="mobile"){var i=$("body").data("ad-key-map")["commonKeys"]["sectn"];
var d=$("body").data("ad-key-map")["commonKeys"]["pt"];
var f=$("body").data("ad-key-map")["commonKeys"]["platform"];
mm_log("i am mobile");
mm_log("sectn: "+i);
mm_log("pt: "+d);
mm_log("platform: "+f);
var b=true;
if(d=="news-story"){var h=$(".story_body_holder div.paragraph").length;
mm_log("numberOfParagraphs: "+h);
var a=$(".story_body_holder img").length;
var c=$(".story_body_holder video").length;
var e=a+c;
mm_log("imgCount: "+a);
mm_log("videoCount: "+c);
var g=h+e;
mm_log("totalParagraphsAndMedia: "+g);
if(g<5){b=false
}}mm_log("canCallParallax="+b);
gptadslots=[];
if(b==true){gptadslots[2]=googletag.defineSlot("/4180/news/news",[2,2],"div-gpt-ad-parallax").addService(googletag.pubads().setTargeting("pt",d).setTargeting("sectn",i).setTargeting("platform",f));
setTimeout(waitThenLoadAd,200)
}googletag.pubads().addEventListener("slotRenderEnded",function(j){mm_log(j.slot.getSlotElementId());
if(j.slot.getSlotElementId()=="div-gpt-ad-parallax"){containsAd=!j.isEmpty;
mm_log("div-gpt-ad-parallax exists - containsAd ="+containsAd+" "+j.slot.getSlotElementId());
if(containsAd==true){mm_log("I contain a parralax.  - make div-gpt-ad-square hidden");
hideIsland();
gotAParallax="true";
$(".containerBody").css("transform","")
}else{mm_log("no parralax found so loading old ad unit");
loadIsland()
}}else{mm_log("no parralax  - containsAd="+containsAd)
}})
}googletag.pubads().disableInitialLoad();
googletag.enableServices()
});
function waitThenLoadAd(){mm_log("waitThenLoadAd");
googletag.cmd.push(function(){googletag.display("div-gpt-ad-parallax");
googletag.pubads().refresh([gptadslots[2]])
})
}function checkContainer(){mm_log("check container");
if(document.getElementById("dynslot1")){document.getElementById("dynslot1").className="div-gpt-ad-square-hidden";
document.getElementById("dynslot1").innerHTML=""
}else{if(document.getElementById("bottomFooterAd")){document.getElementById("bottomFooterAd").className="div-gpt-ad-square-hidden";
document.getElementById("bottomFooterAd").innerHTML=""
}else{}}}function hideIsland(){mm_log("hideIsland");
setTimeout(checkContainer,200)
}function loadIsland(){mm_log("load island");
if(document.getElementById("dynslot1")){document.getElementById("dynslot1").className="div-gpt-ad-square";
googletag.cmd.push(function(){googletag.display("dynslot1");
googletag.pubads().refresh([gptadslots[1]])
})
}else{mm_log("I couldnt find div-gpt-ad-square")
}}(function(){var a=document.createElement("script");
a.async=true;
a.type="text/javascript";
var c="https:"==document.location.protocol;
a.src=(c?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";
var b=document.getElementsByTagName("script")[0];
b.parentNode.insertBefore(a,b)
})();
jQuery.fn.safeReady=function(a){$(this).ready(function(){try{a()
}catch(b){console.error(b.stack)
}})
};
if(!window.console){var noOp=function(){};
console={log:noOp,warn:noOp,error:noOp}
}function dynamicInclude(b,a,c){console.log("Use cached? "+a);
c=(typeof c!="undefined")?c:{};
$.ajax({type:"GET",url:b,success:c,dataType:"script",cache:a})
}(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.moment=a()
}(this,function(){var bH;
function bt(){return bH.apply(null,arguments)
}function aw(em){bH=em
}function J(em){return Object.prototype.toString.call(em)==="[object Array]"
}function dN(em){return em instanceof Date||Object.prototype.toString.call(em)==="[object Date]"
}function a3(em,ep){var eo=[],en;
for(en=0;
en<em.length;
++en){eo.push(ep(em[en],en))
}return eo
}function cN(en,em){return Object.prototype.hasOwnProperty.call(en,em)
}function eg(en,em){for(var eo in em){if(cN(em,eo)){en[eo]=em[eo]
}}if(cN(em,"toString")){en.toString=em.toString
}if(cN(em,"valueOf")){en.valueOf=em.valueOf
}return en
}function dD(eo,ep,em,en){return Q(eo,ep,em,en,true).utc()
}function bX(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}
}function aQ(em){if(em._pf==null){em._pf=bX()
}return em._pf
}function ag(em){if(em._isValid==null){var en=aQ(em);
em._isValid=!isNaN(em._d.getTime())&&en.overflow<0&&!en.empty&&!en.invalidMonth&&!en.invalidWeekday&&!en.nullInput&&!en.invalidFormat&&!en.userInvalidated;
if(em._strict){em._isValid=em._isValid&&en.charsLeftOver===0&&en.unusedTokens.length===0&&en.bigHour===undefined
}}return em._isValid
}function cc(en){var em=dD(NaN);
if(en!=null){eg(aQ(em),en)
}else{aQ(em).userInvalidated=true
}return em
}function y(em){return em===void 0
}var cm=bt.momentProperties=[];
function o(eq,ep){var em,eo,en;
if(!y(ep._isAMomentObject)){eq._isAMomentObject=ep._isAMomentObject
}if(!y(ep._i)){eq._i=ep._i
}if(!y(ep._f)){eq._f=ep._f
}if(!y(ep._l)){eq._l=ep._l
}if(!y(ep._strict)){eq._strict=ep._strict
}if(!y(ep._tzm)){eq._tzm=ep._tzm
}if(!y(ep._isUTC)){eq._isUTC=ep._isUTC
}if(!y(ep._offset)){eq._offset=ep._offset
}if(!y(ep._pf)){eq._pf=aQ(ep)
}if(!y(ep._locale)){eq._locale=ep._locale
}if(cm.length>0){for(em in cm){eo=cm[em];
en=ep[eo];
if(!y(en)){eq[eo]=en
}}}return eq
}var cI=false;
function dK(em){o(this,em);
this._d=new Date(em._d!=null?em._d.getTime():NaN);
if(cI===false){cI=true;
bt.updateOffset(this);
cI=false
}}function bI(em){return em instanceof dK||(em!=null&&em._isAMomentObject!=null)
}function cK(em){if(em<0){return Math.ceil(em)
}else{return Math.floor(em)
}}function ck(em){var eo=+em,en=0;
if(eo!==0&&isFinite(eo)){en=cK(eo)
}return en
}function by(er,eq,en){var em=Math.min(er.length,eq.length),eo=Math.abs(er.length-eq.length),es=0,ep;
for(ep=0;
ep<em;
ep++){if((en&&er[ep]!==eq[ep])||(!en&&ck(er[ep])!==ck(eq[ep]))){es++
}}return es+eo
}function b7(){}var bd={};
var cs;
function cP(em){return em?em.toLowerCase().replace("_","-"):em
}function cr(er){var ep=0,en,eq,em,eo;
while(ep<er.length){eo=cP(er[ep]).split("-");
en=eo.length;
eq=cP(er[ep+1]);
eq=eq?eq.split("-"):null;
while(en>0){em=ak(eo.slice(0,en).join("-"));
if(em){return em
}if(eq&&eq.length>=en&&by(eo,eq,true)>=en-1){break
}en--
}ep++
}return null
}function ak(em){var eo=null;
if(!bd[em]&&(typeof module!=="undefined")&&module&&module.exports){try{eo=cs._abbr;
require("./locale/"+em);
ce(eo)
}catch(en){}}return bd[em]
}function ce(en,em){var eo;
if(en){if(y(em)){eo=q(en)
}else{eo=b6(en,em)
}if(eo){cs=eo
}}return cs._abbr
}function b6(en,em){if(em!==null){em.abbr=en;
bd[en]=bd[en]||new b7();
bd[en].set(em);
ce(en);
return bd[en]
}else{delete bd[en];
return null
}}function q(en){var em;
if(en&&en._locale&&en._locale._abbr){en=en._locale._abbr
}if(!en){return cs
}if(!J(en)){em=ak(en);
if(em){return em
}en=[en]
}return cr(en)
}var ch={};
function bL(eo,em){var en=eo.toLowerCase();
ch[en]=ch[en+"s"]=ch[em]=eo
}function cj(em){return typeof em==="string"?ch[em]||ch[em.toLowerCase()]:undefined
}function c8(eo){var en={},em,ep;
for(ep in eo){if(cN(eo,ep)){em=cj(ep);
if(em){en[em]=eo[ep]
}}}return en
}function aJ(em){return em instanceof Function||Object.prototype.toString.call(em)==="[object Function]"
}function du(em,en){return function(eo){if(eo!=null){dO(this,em,eo);
bt.updateOffset(this,en);
return this
}else{return d3(this,em)
}}
}function d3(en,em){return en.isValid()?en._d["get"+(en._isUTC?"UTC":"")+em]():NaN
}function dO(en,em,eo){if(en.isValid()){en._d["set"+(en._isUTC?"UTC":"")+em](eo)
}}function dT(em,eo){var en;
if(typeof em==="object"){for(en in em){this.set(en,em[en])
}}else{em=cj(em);
if(aJ(this[em])){return this[em](eo)
}}return this
}function bU(er,eq,en){var ep=""+Math.abs(er),eo=eq-ep.length,em=er>=0;
return(em?(en?"+":""):"-")+Math.pow(10,Math.max(0,eo)).toString().substr(1)+ep
}var br=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var bq=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var bp={};
var aO={};
function b2(en,eo,em,eq){var ep=eq;
if(typeof eq==="string"){ep=function(){return this[eq]()
}
}if(en){aO[en]=ep
}if(eo){aO[eo[0]]=function(){return bU(ep.apply(this,arguments),eo[1],eo[2])
}
}if(em){aO[em]=function(){return this.localeData().ordinal(ep.apply(this,arguments),en)
}
}}function ah(em){if(em.match(/\[[\s\S]/)){return em.replace(/^\[|\]$/g,"")
}return em.replace(/\\/g,"")
}function bc(eo){var ep=eo.match(br),em,en;
for(em=0,en=ep.length;
em<en;
em++){if(aO[ep[em]]){ep[em]=aO[ep[em]]
}else{ep[em]=ah(ep[em])
}}return function(er){var eq="";
for(em=0;
em<en;
em++){eq+=ep[em] instanceof Function?ep[em].call(er,eo):ep[em]
}return eq
}
}function T(em,en){if(!em.isValid()){return em.localeData().invalidDate()
}en=bh(en,em.localeData());
bp[en]=bp[en]||bc(en);
return bp[en](em)
}function bh(ep,em){var en=5;
function eo(eq){return em.longDateFormat(eq)||eq
}bq.lastIndex=0;
while(en>=0&&bq.test(ep)){ep=ep.replace(bq,eo);
bq.lastIndex=0;
en-=1
}return ep
}var ar=/\d/;
var aq=/\d\d/;
var ap=/\d{3}/;
var ao=/\d{4}/;
var an=/[+-]?\d{6}/;
var af=/\d\d?/;
var bR=/\d\d\d\d?/;
var dw=/\d\d\d\d\d\d?/;
var ae=/\d{1,3}/;
var ad=/\d{1,4}/;
var ac=/[+-]?\d{1,6}/;
var p=/\d+/;
var v=/[+-]?\d+/;
var bj=/Z|[+-]\d\d:?\d\d/gi;
var b9=/Z|[+-]\d\d(?::?\d\d)?/gi;
var ec=/[+-]?\d+(\.\d{1,3})?/;
var aL=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var aF={};
function aS(em,en,eo){aF[em]=aJ(en)?en:function(eq,ep){return(eq&&eo)?eo:en
}
}function bg(en,em){if(!cN(aF,en)){return new RegExp(cL(en))
}return aF[en](em._strict,em._locale)
}function cL(em){return bM(em.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(en,er,eq,ep,eo){return er||eq||ep||eo
}))
}function bM(em){return em.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}var h={};
function bu(en,ep){var em,eo=ep;
if(typeof en==="string"){en=[en]
}if(typeof ep==="number"){eo=function(eq,er){er[ep]=ck(eq)
}
}for(em=0;
em<en.length;
em++){h[en[em]]=eo
}}function M(em,en){bu(em,function(eo,er,ep,eq){ep._w=ep._w||{};
en(eo,ep._w,ep,eq)
})
}function s(eo,em,en){if(em!=null&&cN(h,eo)){h[eo](em,en._a,en,eo)
}}var ed=0;
var j=1;
var dM=2;
var d0=3;
var c6=4;
var W=5;
var bk=6;
var bN=7;
var i=8;
function bi(em,en){return new Date(Date.UTC(em,en+1,0)).getUTCDate()
}b2("M",["MM",2],"Mo",function(){return this.month()+1
});
b2("MMM",0,0,function(em){return this.localeData().monthsShort(this,em)
});
b2("MMMM",0,0,function(em){return this.localeData().months(this,em)
});
bL("month","M");
aS("M",af);
aS("MM",af,aq);
aS("MMM",function(en,em){return em.monthsShortRegex(en)
});
aS("MMMM",function(en,em){return em.monthsRegex(en)
});
bu(["M","MM"],function(em,en){en[j]=ck(em)-1
});
bu(["MMM","MMMM"],function(em,eq,en,eo){var ep=en._locale.monthsParse(em,eo,en._strict);
if(ep!=null){eq[j]=ep
}else{aQ(en).invalidMonth=em
}});
var bB=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
var F="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function aD(em,en){return J(this._months)?this._months[em.month()]:this._months[bB.test(en)?"format":"standalone"][em.month()]
}var dk="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function aP(em,en){return J(this._monthsShort)?this._monthsShort[em.month()]:this._monthsShort[bB.test(en)?"format":"standalone"][em.month()]
}function cE(en,er,em){var eo,eq,ep;
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(eo=0;
eo<12;
eo++){eq=dD([2000,eo]);
if(em&&!this._longMonthsParse[eo]){this._longMonthsParse[eo]=new RegExp("^"+this.months(eq,"").replace(".","")+"$","i");
this._shortMonthsParse[eo]=new RegExp("^"+this.monthsShort(eq,"").replace(".","")+"$","i")
}if(!em&&!this._monthsParse[eo]){ep="^"+this.months(eq,"")+"|^"+this.monthsShort(eq,"");
this._monthsParse[eo]=new RegExp(ep.replace(".",""),"i")
}if(em&&er==="MMMM"&&this._longMonthsParse[eo].test(en)){return eo
}else{if(em&&er==="MMM"&&this._shortMonthsParse[eo].test(en)){return eo
}else{if(!em&&this._monthsParse[eo].test(en)){return eo
}}}}}function az(em,en){var eo;
if(!em.isValid()){return em
}if(typeof en==="string"){en=em.localeData().monthsParse(en);
if(typeof en!=="number"){return em
}}eo=Math.min(em.date(),bi(em.year(),en));
em._d["set"+(em._isUTC?"UTC":"")+"Month"](en,eo);
return em
}function dZ(em){if(em!=null){az(this,em);
bt.updateOffset(this,true);
return this
}else{return d3(this,"Month")
}}function bn(){return bi(this.year(),this.month())
}var cJ=aL;
function cM(em){if(this._monthsParseExact){if(!cN(this,"_monthsRegex")){cO.call(this)
}if(em){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{return this._monthsShortStrictRegex&&em?this._monthsShortStrictRegex:this._monthsShortRegex
}}var dQ=aL;
function ct(em){if(this._monthsParseExact){if(!cN(this,"_monthsRegex")){cO.call(this)
}if(em){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{return this._monthsStrictRegex&&em?this._monthsStrictRegex:this._monthsRegex
}}function cO(){function er(et,es){return es.length-et.length
}var eq=[],em=[],ep=[],en,eo;
for(en=0;
en<12;
en++){eo=dD([2000,en]);
eq.push(this.monthsShort(eo,""));
em.push(this.months(eo,""));
ep.push(this.months(eo,""));
ep.push(this.monthsShort(eo,""))
}eq.sort(er);
em.sort(er);
ep.sort(er);
for(en=0;
en<12;
en++){eq[en]=bM(eq[en]);
em[en]=bM(em[en]);
ep[en]=bM(ep[en])
}this._monthsRegex=new RegExp("^("+ep.join("|")+")","i");
this._monthsShortRegex=this._monthsRegex;
this._monthsStrictRegex=new RegExp("^("+em.join("|")+")$","i");
this._monthsShortStrictRegex=new RegExp("^("+eq.join("|")+")$","i")
}function ci(em){var eo;
var en=em._a;
if(en&&aQ(em).overflow===-2){eo=en[j]<0||en[j]>11?j:en[dM]<1||en[dM]>bi(en[ed],en[j])?dM:en[d0]<0||en[d0]>24||(en[d0]===24&&(en[c6]!==0||en[W]!==0||en[bk]!==0))?d0:en[c6]<0||en[c6]>59?c6:en[W]<0||en[W]>59?W:en[bk]<0||en[bk]>999?bk:-1;
if(aQ(em)._overflowDayOfYear&&(eo<ed||eo>dM)){eo=dM
}if(aQ(em)._overflowWeeks&&eo===-1){eo=bN
}if(aQ(em)._overflowWeekday&&eo===-1){eo=i
}aQ(em).overflow=eo
}return em
}function cF(em){if(bt.suppressDeprecationWarnings===false&&(typeof console!=="undefined")&&console.warn){console.warn("Deprecation warning: "+em)
}}function dA(en,em){var eo=true;
return eg(function(){if(eo){cF(en+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error()).stack);
eo=false
}return em.apply(this,arguments)
},em)
}var O={};
function eb(em,en){if(!O[em]){cF(en);
O[em]=true
}}bt.suppressDeprecationWarnings=false;
var k=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var ax=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var ca=/Z|[+-]\d\d(?::?\d\d)?/;
var cl=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var bW=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var bv=/^\/?Date\((\-?\d+)/i;
function w(en){var er,ep,et=en._i,es=k.exec(et)||ax.exec(et),eu,em,eq,eo;
if(es){aQ(en).iso=true;
for(er=0,ep=cl.length;
er<ep;
er++){if(cl[er][1].exec(es[1])){em=cl[er][0];
eu=cl[er][2]!==false;
break
}}if(em==null){en._isValid=false;
return
}if(es[3]){for(er=0,ep=bW.length;
er<ep;
er++){if(bW[er][1].exec(es[3])){eq=(es[2]||" ")+bW[er][0];
break
}}if(eq==null){en._isValid=false;
return
}}if(!eu&&eq!=null){en._isValid=false;
return
}if(es[4]){if(ca.exec(es[4])){eo="Z"
}else{en._isValid=false;
return
}}en._f=em+(eq||"")+(eo||"");
bw(en)
}else{en._isValid=false
}}function aR(en){var em=bv.exec(en._i);
if(em!==null){en._d=new Date(+em[1]);
return
}w(en);
if(en._isValid===false){delete en._isValid;
bt.createFromInputFallback(en)
}}bt.createFromInputFallback=dA("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(em){em._d=new Date(em._i+(em._useUTC?" UTC":""))
});
function dr(et,em,er,eq,es,ep,eo){var en=new Date(et,em,er,eq,es,ep,eo);
if(et<100&&et>=0&&isFinite(en.getFullYear())){en.setFullYear(et)
}return en
}function cT(en){var em=new Date(Date.UTC.apply(null,arguments));
if(en<100&&en>=0&&isFinite(em.getUTCFullYear())){em.setUTCFullYear(en)
}return em
}b2("Y",0,0,function(){var em=this.year();
return em<=9999?""+em:"+"+em
});
b2(0,["YY",2],0,function(){return this.year()%100
});
b2(0,["YYYY",4],0,"year");
b2(0,["YYYYY",5],0,"year");
b2(0,["YYYYYY",6,true],0,"year");
bL("year","y");
aS("Y",v);
aS("YY",af,aq);
aS("YYYY",ad,ao);
aS("YYYYY",ac,an);
aS("YYYYYY",ac,an);
bu(["YYYYY","YYYYYY"],ed);
bu("YYYY",function(em,en){en[ed]=em.length===2?bt.parseTwoDigitYear(em):ck(em)
});
bu("YY",function(em,en){en[ed]=bt.parseTwoDigitYear(em)
});
bu("Y",function(em,en){en[ed]=parseInt(em,10)
});
function c4(em){return dj(em)?366:365
}function dj(em){return(em%4===0&&em%100!==0)||em%400===0
}bt.parseTwoDigitYear=function(em){return ck(em)+(ck(em)>68?1900:2000)
};
var cb=du("FullYear",false);
function cn(){return dj(this.year())
}function aX(en,eq,ep){var em=7+eq-ep,eo=(7+cT(en,0,em).getUTCDay()-eq)%7;
return -eo+em-1
}function bf(ep,en,eo,ev,et){var eu=(7+eo-ev)%7,em=aX(ep,ev,et),er=1+7*(en-1)+eu+em,es,eq;
if(er<=0){es=ep-1;
eq=c4(es)+er
}else{if(er>c4(ep)){es=ep+1;
eq=er-c4(ep)
}else{es=ep;
eq=er
}}return{year:es,dayOfYear:eq}
}function dL(eq,es,er){var eo=aX(eq.year(),es,er),ep=Math.floor((eq.dayOfYear()-eo-1)/7)+1,em,en;
if(ep<1){en=eq.year()-1;
em=ep+x(en,es,er)
}else{if(ep>x(eq.year(),es,er)){em=ep-x(eq.year(),es,er);
en=eq.year()+1
}else{en=eq.year();
em=ep
}}return{week:em,year:en}
}function x(en,eq,eo){var em=aX(en,eq,eo),ep=aX(en+1,eq,eo);
return(c4(en)-em+ep)/7
}function ds(en,em,eo){if(en!=null){return en
}if(em!=null){return em
}return eo
}function aE(en){var em=new Date(bt.now());
if(en._useUTC){return[em.getUTCFullYear(),em.getUTCMonth(),em.getUTCDate()]
}return[em.getFullYear(),em.getMonth(),em.getDate()]
}function f(eq){var er,ep,eo=[],en,em;
if(eq._d){return
}en=aE(eq);
if(eq._w&&eq._a[dM]==null&&eq._a[j]==null){cw(eq)
}if(eq._dayOfYear){em=ds(eq._a[ed],en[ed]);
if(eq._dayOfYear>c4(em)){aQ(eq)._overflowDayOfYear=true
}ep=cT(em,0,eq._dayOfYear);
eq._a[j]=ep.getUTCMonth();
eq._a[dM]=ep.getUTCDate()
}for(er=0;
er<3&&eq._a[er]==null;
++er){eq._a[er]=eo[er]=en[er]
}for(;
er<7;
er++){eq._a[er]=eo[er]=(eq._a[er]==null)?(er===2?1:0):eq._a[er]
}if(eq._a[d0]===24&&eq._a[c6]===0&&eq._a[W]===0&&eq._a[bk]===0){eq._nextDay=true;
eq._a[d0]=0
}eq._d=(eq._useUTC?cT:dr).apply(null,eo);
if(eq._tzm!=null){eq._d.setUTCMinutes(eq._d.getUTCMinutes()-eq._tzm)
}if(eq._nextDay){eq._a[d0]=24
}}function cw(eo){var er,em,en,ep,eu,es,et,eq;
er=eo._w;
if(er.GG!=null||er.W!=null||er.E!=null){eu=1;
es=4;
em=ds(er.GG,eo._a[ed],dL(dp(),1,4).year);
en=ds(er.W,1);
ep=ds(er.E,1);
if(ep<1||ep>7){eq=true
}}else{eu=eo._locale._week.dow;
es=eo._locale._week.doy;
em=ds(er.gg,eo._a[ed],dL(dp(),eu,es).year);
en=ds(er.w,1);
if(er.d!=null){ep=er.d;
if(ep<0||ep>6){eq=true
}}else{if(er.e!=null){ep=er.e+eu;
if(er.e<0||er.e>6){eq=true
}}else{ep=eu
}}}if(en<1||en>x(em,eu,es)){aQ(eo)._overflowWeeks=true
}else{if(eq!=null){aQ(eo)._overflowWeekday=true
}else{et=bf(em,en,ep,eu,es);
eo._a[ed]=et.year;
eo._dayOfYear=et.dayOfYear
}}}bt.ISO_8601=function(){};
function bw(eo){if(eo._f===bt.ISO_8601){w(eo);
return
}eo._a=[];
aQ(eo).empty=true;
var er=""+eo._i,eq,en,eu,ep,et,em=er.length,es=0;
eu=bh(eo._f,eo._locale).match(br)||[];
for(eq=0;
eq<eu.length;
eq++){ep=eu[eq];
en=(er.match(bg(ep,eo))||[])[0];
if(en){et=er.substr(0,er.indexOf(en));
if(et.length>0){aQ(eo).unusedInput.push(et)
}er=er.slice(er.indexOf(en)+en.length);
es+=en.length
}if(aO[ep]){if(en){aQ(eo).empty=false
}else{aQ(eo).unusedTokens.push(ep)
}s(ep,en,eo)
}else{if(eo._strict&&!en){aQ(eo).unusedTokens.push(ep)
}}}aQ(eo).charsLeftOver=em-es;
if(er.length>0){aQ(eo).unusedInput.push(er)
}if(aQ(eo).bigHour===true&&eo._a[d0]<=12&&eo._a[d0]>0){aQ(eo).bigHour=undefined
}eo._a[d0]=dB(eo._locale,eo._a[d0],eo._meridiem);
f(eo);
ci(eo)
}function dB(em,eo,ep){var en;
if(ep==null){return eo
}if(em.meridiemHour!=null){return em.meridiemHour(eo,ep)
}else{if(em.isPM!=null){en=em.isPM(ep);
if(en&&eo<12){eo+=12
}if(!en&&eo===12){eo=0
}return eo
}else{return eo
}}}function c2(em){var eq,eo,ep,en,er;
if(em._f.length===0){aQ(em).invalidFormat=true;
em._d=new Date(NaN);
return
}for(en=0;
en<em._f.length;
en++){er=0;
eq=o({},em);
if(em._useUTC!=null){eq._useUTC=em._useUTC
}eq._f=em._f[en];
bw(eq);
if(!ag(eq)){continue
}er+=aQ(eq).charsLeftOver;
er+=aQ(eq).unusedTokens.length*10;
aQ(eq).score=er;
if(ep==null||er<ep){ep=er;
eo=eq
}}eg(em,eo||eq)
}function aG(em){if(em._d){return
}var en=c8(em._i);
em._a=a3([en.year,en.month,en.day||en.date,en.hour,en.minute,en.second,en.millisecond],function(eo){return eo&&parseInt(eo,10)
});
f(em)
}function aa(em){var en=new dK(ci(a7(em)));
if(en._nextDay){en.add(1,"d");
en._nextDay=undefined
}return en
}function a7(en){var em=en._i,eo=en._f;
en._locale=en._locale||q(en._l);
if(em===null||(eo===undefined&&em==="")){return cc({nullInput:true})
}if(typeof em==="string"){en._i=em=en._locale.preparse(em)
}if(bI(em)){return new dK(ci(em))
}else{if(J(eo)){c2(en)
}else{if(eo){bw(en)
}else{if(dN(em)){en._d=em
}else{b0(en)
}}}}if(!ag(en)){en._d=null
}return en
}function b0(en){var em=en._i;
if(em===undefined){en._d=new Date(bt.now())
}else{if(dN(em)){en._d=new Date(+em)
}else{if(typeof em==="string"){aR(en)
}else{if(J(em)){en._a=a3(em.slice(0),function(eo){return parseInt(eo,10)
});
f(en)
}else{if(typeof(em)==="object"){aG(en)
}else{if(typeof(em)==="number"){en._d=new Date(em)
}else{bt.createFromInputFallback(en)
}}}}}}}function Q(ep,eq,em,eo,en){var er={};
if(typeof(em)==="boolean"){eo=em;
em=undefined
}er._isAMomentObject=true;
er._useUTC=er._isUTC=en;
er._l=em;
er._i=ep;
er._f=eq;
er._strict=eo;
return aa(er)
}function dp(eo,ep,em,en){return Q(eo,ep,em,en,false)
}var cf=dA("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var em=dp.apply(null,arguments);
if(this.isValid()&&em.isValid()){return em<this?this:em
}else{return cc()
}});
var dH=dA("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var em=dp.apply(null,arguments);
if(this.isValid()&&em.isValid()){return em>this?this:em
}else{return cc()
}});
function eh(eo,ep){var en,em;
if(ep.length===1&&J(ep[0])){ep=ep[0]
}if(!ep.length){return dp()
}en=ep[0];
for(em=1;
em<ep.length;
++em){if(!ep[em].isValid()||ep[em][eo](en)){en=ep[em]
}}return en
}function n(){var em=[].slice.call(arguments,0);
return eh("isBefore",em)
}function a1(){var em=[].slice.call(arguments,0);
return eh("isAfter",em)
}var b3=function(){return Date.now?Date.now():+(new Date())
};
function db(er){var et=c8(er),es=et.year||0,en=et.quarter||0,eo=et.month||0,em=et.week||0,ew=et.day||0,eu=et.hour||0,eq=et.minute||0,ev=et.second||0,ep=et.millisecond||0;
this._milliseconds=+ep+ev*1000+eq*60000+eu*3600000;
this._days=+ew+em*7;
this._months=+eo+en*3+es*12;
this._data={};
this._locale=q();
this._bubble()
}function S(em){return em instanceof db
}function ba(em,en){b2(em,0,0,function(){var ep=this.utcOffset();
var eo="+";
if(ep<0){ep=-ep;
eo="-"
}return eo+bU(~~(ep/60),2)+en+bU(~~(ep)%60,2)
})
}ba("Z",":");
ba("ZZ","");
aS("Z",b9);
aS("ZZ",b9);
bu(["Z","ZZ"],function(em,eo,en){en._useUTC=true;
en._tzm=m(b9,em)
});
var dW=/([\+\-]|\d\d)/gi;
function m(er,en){var ep=((en||"").match(er)||[]);
var em=ep[ep.length-1]||[];
var eq=(em+"").match(dW)||["-",0,0];
var eo=+(eq[1]*60)+ck(eq[2]);
return eq[0]==="+"?eo:-eo
}function al(em,en){var eo,ep;
if(en._isUTC){eo=en.clone();
ep=(bI(em)||dN(em)?+em:+dp(em))-(+eo);
eo._d.setTime(+eo._d+ep);
bt.updateOffset(eo,false);
return eo
}else{return dp(em).local()
}}function au(em){return -Math.round(em._d.getTimezoneOffset()/15)*15
}bt.updateOffset=function(){};
function cV(em,ep){var eo=this._offset||0,en;
if(!this.isValid()){return em!=null?this:NaN
}if(em!=null){if(typeof em==="string"){em=m(b9,em)
}else{if(Math.abs(em)<16){em=em*60
}}if(!this._isUTC&&ep){en=au(this)
}this._offset=em;
this._isUTC=true;
if(en!=null){this.add(en,"m")
}if(eo!==em){if(!ep||this._changeInProgress){b(this,dz(em-eo,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
bt.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?eo:au(this)
}}function cQ(em,en){if(em!=null){if(typeof em!=="string"){em=-em
}this.utcOffset(em,en);
return this
}else{return -this.utcOffset()
}}function aC(em){return this.utcOffset(0,em)
}function cS(em){if(this._isUTC){this.utcOffset(0,em);
this._isUTC=false;
if(em){this.subtract(au(this),"m")
}}return this
}function bF(){if(this._tzm){this.utcOffset(this._tzm)
}else{if(typeof this._i==="string"){this.utcOffset(m(bj,this._i))
}}return this
}function aj(em){if(!this.isValid()){return false
}em=em?dp(em).utcOffset():0;
return(this.utcOffset()-em)%60===0
}function at(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
}function d(){if(!y(this._isDSTShifted)){return this._isDSTShifted
}var en={};
o(en,this);
en=a7(en);
if(en._a){var em=en._isUTC?dD(en._a):dp(en._a);
this._isDSTShifted=this.isValid()&&by(en._a,em.toArray())>0
}else{this._isDSTShifted=false
}return this._isDSTShifted
}function cW(){return this.isValid()?!this._isUTC:false
}function bs(){return this.isValid()?this._isUTC:false
}function c1(){return this.isValid()?this._isUTC&&this._offset===0:false
}var N=/(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
var b1=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
function dz(eo,er){var es=eo,eq=null,en,ep,em;
if(S(eo)){es={ms:eo._milliseconds,d:eo._days,M:eo._months}
}else{if(typeof eo==="number"){es={};
if(er){es[er]=eo
}else{es.milliseconds=eo
}}else{if(!!(eq=N.exec(eo))){en=(eq[1]==="-")?-1:1;
es={y:0,d:ck(eq[dM])*en,h:ck(eq[d0])*en,m:ck(eq[c6])*en,s:ck(eq[W])*en,ms:ck(eq[bk])*en}
}else{if(!!(eq=b1.exec(eo))){en=(eq[1]==="-")?-1:1;
es={y:ef(eq[2],en),M:ef(eq[3],en),d:ef(eq[4],en),h:ef(eq[5],en),m:ef(eq[6],en),s:ef(eq[7],en),w:ef(eq[8],en)}
}else{if(es==null){es={}
}else{if(typeof es==="object"&&("from" in es||"to" in es)){em=bo(dp(es.from),dp(es.to));
es={};
es.ms=em.milliseconds;
es.M=em.months
}}}}}}ep=new db(es);
if(S(eo)&&cN(eo,"_locale")){ep._locale=eo._locale
}return ep
}dz.fn=db.prototype;
function ef(eo,em){var en=eo&&parseFloat(eo.replace(",","."));
return(isNaN(en)?0:en)*em
}function cZ(eo,em){var en={milliseconds:0,months:0};
en.months=em.month()-eo.month()+(em.year()-eo.year())*12;
if(eo.clone().add(en.months,"M").isAfter(em)){--en.months
}en.milliseconds=+em-+(eo.clone().add(en.months,"M"));
return en
}function bo(eo,em){var en;
if(!(eo.isValid()&&em.isValid())){return{milliseconds:0,months:0}
}em=al(em,eo);
if(eo.isBefore(em)){en=cZ(eo,em)
}else{en=cZ(em,eo);
en.milliseconds=-en.milliseconds;
en.months=-en.months
}return en
}function aH(en,em){return function(er,eq){var ep,eo;
if(eq!==null&&!isNaN(+eq)){eb(em,"moment()."+em+"(period, number) is deprecated. Please use moment()."+em+"(number, period).");
eo=er;
er=eq;
eq=eo
}er=typeof er==="string"?+er:er;
ep=dz(er,eq);
b(this,ep,en);
return this
}
}function b(eo,er,eq,ep){var en=er._milliseconds,es=er._days,em=er._months;
if(!eo.isValid()){return
}ep=ep==null?true:ep;
if(en){eo._d.setTime(+eo._d+en*eq)
}if(es){dO(eo,"Date",d3(eo,"Date")+es*eq)
}if(em){az(eo,d3(eo,"Month")+em*eq)
}if(ep){bt.updateOffset(eo,es||em)
}}var bO=aH(1,"add");
var aB=aH(-1,"subtract");
function bK(es,em){var ep=es||dp(),eo=al(ep,this).startOf("day"),er=this.diff(eo,"days",true),eq=er<-6?"sameElse":er<-1?"lastWeek":er<0?"lastDay":er<1?"sameDay":er<2?"nextDay":er<7?"nextWeek":"sameElse";
var en=em&&(aJ(em[eq])?em[eq]():em[eq]);
return this.format(en||this.localeData().calendar(eq,this,dp(ep)))
}function cR(){return new dK(this)
}function b8(en,em){var eo=bI(en)?en:dp(en);
if(!(this.isValid()&&eo.isValid())){return false
}em=cj(!y(em)?em:"millisecond");
if(em==="millisecond"){return +this>+eo
}else{return +eo<+this.clone().startOf(em)
}}function d9(en,em){var eo=bI(en)?en:dp(en);
if(!(this.isValid()&&eo.isValid())){return false
}em=cj(!y(em)?em:"millisecond");
if(em==="millisecond"){return +this<+eo
}else{return +this.clone().endOf(em)<+eo
}}function dJ(eo,en,em){return this.isAfter(eo,em)&&this.isBefore(en,em)
}function cd(en,em){var ep=bI(en)?en:dp(en),eo;
if(!(this.isValid()&&ep.isValid())){return false
}em=cj(em||"millisecond");
if(em==="millisecond"){return +this===+ep
}else{eo=+ep;
return +(this.clone().startOf(em))<=eo&&eo<=+(this.clone().endOf(em))
}}function d2(en,em){return this.isSame(en,em)||this.isAfter(en,em)
}function d7(en,em){return this.isSame(en,em)||this.isBefore(en,em)
}function B(ep,eo,em){var er,eq,es,en;
if(!this.isValid()){return NaN
}er=al(ep,this);
if(!er.isValid()){return NaN
}eq=(er.utcOffset()-this.utcOffset())*60000;
eo=cj(eo);
if(eo==="year"||eo==="month"||eo==="quarter"){en=dF(this,er);
if(eo==="quarter"){en=en/3
}else{if(eo==="year"){en=en/12
}}}else{es=this-er;
en=eo==="second"?es/1000:eo==="minute"?es/60000:eo==="hour"?es/3600000:eo==="day"?(es-eq)/86400000:eo==="week"?(es-eq)/604800000:es
}return em?en:cK(en)
}function dF(en,em){var er=((em.year()-en.year())*12)+(em.month()-en.month()),eo=en.clone().add(er,"months"),ep,eq;
if(em-eo<0){ep=en.clone().add(er-1,"months");
eq=(em-eo)/(eo-ep)
}else{ep=en.clone().add(er+1,"months");
eq=(em-eo)/(ep-eo)
}return -(er+eq)
}bt.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
function dl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function b4(){var em=this.clone().utc();
if(0<em.year()&&em.year()<=9999){if(aJ(Date.prototype.toISOString)){return this.toDate().toISOString()
}else{return T(em,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}else{return T(em,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}function cA(en){var em=T(this,en||bt.defaultFormat);
return this.localeData().postformat(em)
}function dd(en,em){if(this.isValid()&&((bI(en)&&en.isValid())||dp(en).isValid())){return dz({to:this,from:en}).locale(this.locale()).humanize(!em)
}else{return this.localeData().invalidDate()
}}function c9(em){return this.from(dp(),em)
}function V(en,em){if(this.isValid()&&((bI(en)&&en.isValid())||dp(en).isValid())){return dz({from:this,to:en}).locale(this.locale()).humanize(!em)
}else{return this.localeData().invalidDate()
}}function av(em){return this.to(dp(),em)
}function ek(en){var em;
if(en===undefined){return this._locale._abbr
}else{em=q(en);
if(em!=null){this._locale=em
}return this
}}var u=dA("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(em){if(em===undefined){return this.localeData()
}else{return this.locale(em)
}});
function de(){return this._locale
}function bE(em){em=cj(em);
switch(em){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}if(em==="week"){this.weekday(0)
}if(em==="isoWeek"){this.isoWeekday(1)
}if(em==="quarter"){this.month(Math.floor(this.month()/3)*3)
}return this
}function dP(em){em=cj(em);
if(em===undefined||em==="millisecond"){return this
}return this.startOf(em).add(1,(em==="isoWeek"?"week":em)).subtract(1,"ms")
}function X(){return +this._d-((this._offset||0)*60000)
}function be(){return Math.floor(+this/1000)
}function cv(){return this._offset?new Date(+this):this._d
}function c7(){var em=this;
return[em.year(),em.month(),em.date(),em.hour(),em.minute(),em.second(),em.millisecond()]
}function df(){var em=this;
return{years:em.year(),months:em.month(),date:em.date(),hours:em.hours(),minutes:em.minutes(),seconds:em.seconds(),milliseconds:em.milliseconds()}
}function cB(){return this.isValid()?this.toISOString():"null"
}function dR(){return ag(this)
}function c3(){return eg({},aQ(this))
}function b5(){return aQ(this).overflow
}function ea(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}b2(0,["gg",2],0,function(){return this.weekYear()%100
});
b2(0,["GG",2],0,function(){return this.isoWeekYear()%100
});
function L(en,em){b2(0,[en,en.length],0,em)
}L("gggg","weekYear");
L("ggggg","weekYear");
L("GGGG","isoWeekYear");
L("GGGGG","isoWeekYear");
bL("weekYear","gg");
bL("isoWeekYear","GG");
aS("G",v);
aS("g",v);
aS("GG",af,aq);
aS("gg",af,aq);
aS("GGGG",ad,ao);
aS("gggg",ad,ao);
aS("GGGGG",ac,an);
aS("ggggg",ac,an);
M(["gggg","ggggg","GGGG","GGGGG"],function(em,ep,en,eo){ep[eo.substr(0,2)]=ck(em)
});
M(["gg","GG"],function(em,ep,en,eo){ep[eo]=bt.parseTwoDigitYear(em)
});
function a5(em){return bY.call(this,em,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function di(em){return bY.call(this,em,this.isoWeek(),this.isoWeekday(),1,4)
}function cD(){return x(this.year(),1,4)
}function z(){var em=this.localeData()._week;
return x(this.year(),em.dow,em.doy)
}function bY(em,en,ep,er,eq){var eo;
if(em==null){return dL(this,er,eq).year
}else{eo=x(em,er,eq);
if(en>eo){en=eo
}return aK.call(this,em,en,ep,er,eq)
}}function aK(eo,en,eq,es,er){var ep=bf(eo,en,eq,es,er),em=cT(ep.year,0,ep.dayOfYear);
this.year(em.getUTCFullYear());
this.month(em.getUTCMonth());
this.date(em.getUTCDate());
return this
}b2("Q",0,"Qo","quarter");
bL("quarter","Q");
aS("Q",ar);
bu("Q",function(em,en){en[j]=(ck(em)-1)*3
});
function bz(em){return em==null?Math.ceil((this.month()+1)/3):this.month((em-1)*3+this.month()%3)
}b2("w",["ww",2],"wo","week");
b2("W",["WW",2],"Wo","isoWeek");
bL("week","w");
bL("isoWeek","W");
aS("w",af);
aS("ww",af,aq);
aS("W",af);
aS("WW",af,aq);
M(["w","ww","W","WW"],function(em,ep,en,eo){ep[eo.substr(0,1)]=ck(em)
});
function a4(em){return dL(em,this._week.dow,this._week.doy).week
}var bA={dow:0,doy:6};
function U(){return this._week.dow
}function cC(){return this._week.doy
}function A(em){var en=this.localeData().week(this);
return em==null?en:this.add((em-en)*7,"d")
}function t(em){var en=dL(this,1,4).week;
return em==null?en:this.add((em-en)*7,"d")
}b2("D",["DD",2],"Do","date");
bL("date","D");
aS("D",af);
aS("DD",af,aq);
aS("Do",function(en,em){return en?em._ordinalParse:em._ordinalParseLenient
});
bu(["D","DD"],dM);
bu("Do",function(em,en){en[dM]=ck(em.match(af)[0],10)
});
var bT=du("Date",true);
b2("d",0,"do","day");
b2("dd",0,0,function(em){return this.localeData().weekdaysMin(this,em)
});
b2("ddd",0,0,function(em){return this.localeData().weekdaysShort(this,em)
});
b2("dddd",0,0,function(em){return this.localeData().weekdays(this,em)
});
b2("e",0,0,"weekday");
b2("E",0,0,"isoWeekday");
bL("day","d");
bL("weekday","e");
bL("isoWeekday","E");
aS("d",af);
aS("e",af);
aS("E",af);
aS("dd",aL);
aS("ddd",aL);
aS("dddd",aL);
M(["dd","ddd","dddd"],function(em,ep,en,eo){var eq=en._locale.weekdaysParse(em,eo,en._strict);
if(eq!=null){ep.d=eq
}else{aQ(en).invalidWeekday=em
}});
M(["d","e","E"],function(em,ep,en,eo){ep[eo]=ck(em)
});
function aW(en,em){if(typeof en!=="string"){return en
}if(!isNaN(en)){return parseInt(en,10)
}en=em.weekdaysParse(en);
if(typeof en==="number"){return en
}return null
}var H="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function ai(em,en){return J(this._weekdays)?this._weekdays[em.day()]:this._weekdays[this._weekdays.isFormat.test(en)?"format":"standalone"][em.day()]
}var l="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function E(em){return this._weekdaysShort[em.day()]
}var a8="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function dX(em){return this._weekdaysMin[em.day()]
}function bm(eq,er,em){var en,ep,eo;
if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(en=0;
en<7;
en++){ep=dp([2000,1]).day(en);
if(em&&!this._fullWeekdaysParse[en]){this._fullWeekdaysParse[en]=new RegExp("^"+this.weekdays(ep,"").replace(".",".?")+"$","i");
this._shortWeekdaysParse[en]=new RegExp("^"+this.weekdaysShort(ep,"").replace(".",".?")+"$","i");
this._minWeekdaysParse[en]=new RegExp("^"+this.weekdaysMin(ep,"").replace(".",".?")+"$","i")
}if(!this._weekdaysParse[en]){eo="^"+this.weekdays(ep,"")+"|^"+this.weekdaysShort(ep,"")+"|^"+this.weekdaysMin(ep,"");
this._weekdaysParse[en]=new RegExp(eo.replace(".",""),"i")
}if(em&&er==="dddd"&&this._fullWeekdaysParse[en].test(eq)){return en
}else{if(em&&er==="ddd"&&this._shortWeekdaysParse[en].test(eq)){return en
}else{if(em&&er==="dd"&&this._minWeekdaysParse[en].test(eq)){return en
}else{if(!em&&this._weekdaysParse[en].test(eq)){return en
}}}}}}function dE(en){if(!this.isValid()){return en!=null?this:NaN
}var em=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(en!=null){en=aW(en,this.localeData());
return this.add(en-em,"d")
}else{return em
}}function R(em){if(!this.isValid()){return em!=null?this:NaN
}var en=(this.day()+7-this.localeData()._week.dow)%7;
return em==null?en:this.add(em-en,"d")
}function bZ(em){if(!this.isValid()){return em!=null?this:NaN
}return em==null?this.day()||7:this.day(this.day()%7?em:em-7)
}b2("DDD",["DDDD",3],"DDDo","dayOfYear");
bL("dayOfYear","DDD");
aS("DDD",ae);
aS("DDDD",ap);
bu(["DDD","DDDD"],function(em,eo,en){en._dayOfYear=ck(em)
});
function aU(em){var en=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return em==null?en:this.add((em-en),"d")
}function cY(){return this.hours()%12||12
}b2("H",["HH",2],0,"hour");
b2("h",["hh",2],0,cY);
b2("hmm",0,0,function(){return""+cY.apply(this)+bU(this.minutes(),2)
});
b2("hmmss",0,0,function(){return""+cY.apply(this)+bU(this.minutes(),2)+bU(this.seconds(),2)
});
b2("Hmm",0,0,function(){return""+this.hours()+bU(this.minutes(),2)
});
b2("Hmmss",0,0,function(){return""+this.hours()+bU(this.minutes(),2)+bU(this.seconds(),2)
});
function dG(em,en){b2(em,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),en)
})
}dG("a",true);
dG("A",false);
bL("hour","h");
function G(en,em){return em._meridiemParse
}aS("a",G);
aS("A",G);
aS("H",af);
aS("h",af);
aS("HH",af,aq);
aS("hh",af,aq);
aS("hmm",bR);
aS("hmmss",dw);
aS("Hmm",bR);
aS("Hmmss",dw);
bu(["H","HH"],d0);
bu(["a","A"],function(em,eo,en){en._isPm=en._locale.isPM(em);
en._meridiem=em
});
bu(["h","hh"],function(em,eo,en){eo[d0]=ck(em);
aQ(en).bigHour=true
});
bu("hmm",function(em,ep,en){var eo=em.length-2;
ep[d0]=ck(em.substr(0,eo));
ep[c6]=ck(em.substr(eo));
aQ(en).bigHour=true
});
bu("hmmss",function(em,eq,en){var ep=em.length-4;
var eo=em.length-2;
eq[d0]=ck(em.substr(0,ep));
eq[c6]=ck(em.substr(ep,2));
eq[W]=ck(em.substr(eo));
aQ(en).bigHour=true
});
bu("Hmm",function(em,ep,en){var eo=em.length-2;
ep[d0]=ck(em.substr(0,eo));
ep[c6]=ck(em.substr(eo))
});
bu("Hmmss",function(em,eq,en){var ep=em.length-4;
var eo=em.length-2;
eq[d0]=ck(em.substr(0,ep));
eq[c6]=ck(em.substr(ep,2));
eq[W]=ck(em.substr(eo))
});
function bJ(em){return((em+"").toLowerCase().charAt(0)==="p")
}var bC=/[ap]\.?m?\.?/i;
function ay(em,en,eo){if(em>11){return eo?"pm":"PM"
}else{return eo?"am":"AM"
}}var bV=du("Hours",true);
b2("m",["mm",2],0,"minute");
bL("minute","m");
aS("m",af);
aS("mm",af,aq);
bu(["m","mm"],c6);
var d8=du("Minutes",false);
b2("s",["ss",2],0,"second");
bL("second","s");
aS("s",af);
aS("ss",af,aq);
bu(["s","ss"],W);
var bb=du("Seconds",false);
b2("S",0,0,function(){return ~~(this.millisecond()/100)
});
b2(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
});
b2(0,["SSS",3],0,"millisecond");
b2(0,["SSSS",4],0,function(){return this.millisecond()*10
});
b2(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
b2(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
b2(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
b2(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
b2(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1000000
});
bL("millisecond","ms");
aS("S",ae,ar);
aS("SS",ae,aq);
aS("SSS",ae,ap);
var aZ;
for(aZ="SSSS";
aZ.length<=9;
aZ+="S"){aS(aZ,p)
}function cy(em,en){en[bk]=ck(("0."+em)*1000)
}for(aZ="S";
aZ.length<=9;
aZ+="S"){bu(aZ,cy)
}var bx=du("Milliseconds",false);
b2("z",0,0,"zoneAbbr");
b2("zz",0,0,"zoneName");
function d4(){return this._isUTC?"UTC":""
}function dC(){return this._isUTC?"Coordinated Universal Time":""
}var cH=dK.prototype;
cH.add=bO;
cH.calendar=bK;
cH.clone=cR;
cH.diff=B;
cH.endOf=dP;
cH.format=cA;
cH.from=dd;
cH.fromNow=c9;
cH.to=V;
cH.toNow=av;
cH.get=dT;
cH.invalidAt=b5;
cH.isAfter=b8;
cH.isBefore=d9;
cH.isBetween=dJ;
cH.isSame=cd;
cH.isSameOrAfter=d2;
cH.isSameOrBefore=d7;
cH.isValid=dR;
cH.lang=u;
cH.locale=ek;
cH.localeData=de;
cH.max=dH;
cH.min=cf;
cH.parsingFlags=c3;
cH.set=dT;
cH.startOf=bE;
cH.subtract=aB;
cH.toArray=c7;
cH.toObject=df;
cH.toDate=cv;
cH.toISOString=b4;
cH.toJSON=cB;
cH.toString=dl;
cH.unix=be;
cH.valueOf=X;
cH.creationData=ea;
cH.year=cb;
cH.isLeapYear=cn;
cH.weekYear=a5;
cH.isoWeekYear=di;
cH.quarter=cH.quarters=bz;
cH.month=dZ;
cH.daysInMonth=bn;
cH.week=cH.weeks=A;
cH.isoWeek=cH.isoWeeks=t;
cH.weeksInYear=z;
cH.isoWeeksInYear=cD;
cH.date=bT;
cH.day=cH.days=dE;
cH.weekday=R;
cH.isoWeekday=bZ;
cH.dayOfYear=aU;
cH.hour=cH.hours=bV;
cH.minute=cH.minutes=d8;
cH.second=cH.seconds=bb;
cH.millisecond=cH.milliseconds=bx;
cH.utcOffset=cV;
cH.utc=aC;
cH.local=cS;
cH.parseZone=bF;
cH.hasAlignedHourOffset=aj;
cH.isDST=at;
cH.isDSTShifted=d;
cH.isLocal=cW;
cH.isUtcOffset=bs;
cH.isUtc=c1;
cH.isUTC=c1;
cH.zoneAbbr=d4;
cH.zoneName=dC;
cH.dates=dA("dates accessor is deprecated. Use date instead.",bT);
cH.months=dA("months accessor is deprecated. Use month instead",dZ);
cH.years=dA("years accessor is deprecated. Use year instead",cb);
cH.zone=dA("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",cQ);
var a=cH;
function P(em){return dp(em*1000)
}function cp(){return dp.apply(null,arguments).parseZone()
}var bQ={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
function K(eo,ep,en){var em=this._calendar[eo];
return aJ(em)?em.call(ep,en):em
}var dg={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
function cg(em){var en=this._longDateFormat[em],eo=this._longDateFormat[em.toUpperCase()];
if(en||!eo){return en
}this._longDateFormat[em]=eo.replace(/MMMM|MM|DD|dddd/g,function(ep){return ep.slice(1)
});
return this._longDateFormat[em]
}var ab="Invalid date";
function dI(){return this._invalidDate
}var bD="%d";
var a9=/\d{1,2}/;
function dV(em){return this._ordinal.replace("%d",em)
}function cX(em){return em
}var dU={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
function bS(ep,eo,en,eq){var em=this._relativeTime[en];
return(aJ(em))?em(ep,eo,en,eq):em.replace(/%d/i,ep)
}function dh(eo,em){var en=this._relativeTime[eo>0?"future":"past"];
return aJ(en)?en(em):en.replace(/%s/i,em)
}function da(em){var eo,en;
for(en in em){eo=em[en];
if(aJ(eo)){this[en]=eo
}else{this["_"+en]=eo
}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+(/\d{1,2}/).source)
}var cz=b7.prototype;
cz._calendar=bQ;
cz.calendar=K;
cz._longDateFormat=dg;
cz.longDateFormat=cg;
cz._invalidDate=ab;
cz.invalidDate=dI;
cz._ordinal=bD;
cz.ordinal=dV;
cz._ordinalParse=a9;
cz.preparse=cX;
cz.postformat=cX;
cz._relativeTime=dU;
cz.relativeTime=bS;
cz.pastFuture=dh;
cz.set=da;
cz.months=aD;
cz._months=F;
cz.monthsShort=aP;
cz._monthsShort=dk;
cz.monthsParse=cE;
cz._monthsRegex=dQ;
cz.monthsRegex=ct;
cz._monthsShortRegex=cJ;
cz.monthsShortRegex=cM;
cz.week=a4;
cz._week=bA;
cz.firstDayOfYear=cC;
cz.firstDayOfWeek=U;
cz.weekdays=ai;
cz._weekdays=H;
cz.weekdaysMin=dX;
cz._weekdaysMin=a8;
cz.weekdaysShort=E;
cz._weekdaysShort=l;
cz.weekdaysParse=bm;
cz.isPM=bJ;
cz._meridiemParse=bC;
cz.meridiem=ay;
function aN(eq,en,ep,er){var em=q();
var eo=dD().set(er,en);
return em[ep](eo,eq)
}function dy(er,en,eq,ep,es){if(typeof er==="number"){en=er;
er=undefined
}er=er||"";
if(en!=null){return aN(er,en,eq,es)
}var eo;
var em=[];
for(eo=0;
eo<ep;
eo++){em[eo]=aN(er,eo,eq,es)
}return em
}function el(en,em){return dy(en,em,"months",12,"month")
}function bP(en,em){return dy(en,em,"monthsShort",12,"month")
}function aI(en,em){return dy(en,em,"weekdays",7,"day")
}function ee(en,em){return dy(en,em,"weekdaysShort",7,"day")
}function D(en,em){return dy(en,em,"weekdaysMin",7,"day")
}ce("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(eo){var em=eo%10,en=(ck(eo%100/10)===1)?"th":(em===1)?"st":(em===2)?"nd":(em===3)?"rd":"th";
return eo+en
}});
bt.lang=dA("moment.lang is deprecated. Use moment.locale instead.",ce);
bt.langData=dA("moment.langData is deprecated. Use moment.localeData instead.",q);
var dS=Math.abs;
function Y(){var em=this._data;
this._milliseconds=dS(this._milliseconds);
this._days=dS(this._days);
this._months=dS(this._months);
em.milliseconds=dS(em.milliseconds);
em.seconds=dS(em.seconds);
em.minutes=dS(em.minutes);
em.hours=dS(em.hours);
em.months=dS(em.months);
em.years=dS(em.years);
return this
}function a2(eq,en,eo,ep){var em=dz(en,eo);
eq._milliseconds+=ep*em._milliseconds;
eq._days+=ep*em._days;
eq._months+=ep*em._months;
return eq._bubble()
}function a6(em,en){return a2(this,em,en,1)
}function c0(em,en){return a2(this,em,en,-1)
}function dY(em){if(em<0){return Math.floor(em)
}else{return Math.ceil(em)
}}function co(){var eo=this._milliseconds;
var eu=this._days;
var em=this._months;
var eq=this._data;
var et,ep,es,er,en;
if(!((eo>=0&&eu>=0&&em>=0)||(eo<=0&&eu<=0&&em<=0))){eo+=dY(ei(em)+eu)*86400000;
eu=0;
em=0
}eq.milliseconds=eo%1000;
et=cK(eo/1000);
eq.seconds=et%60;
ep=cK(et/60);
eq.minutes=ep%60;
es=cK(ep/60);
eq.hours=es%24;
eu+=cK(es/24);
en=cK(g(eu));
em+=en;
eu-=dY(ei(en));
er=cK(em/12);
em%=12;
eq.days=eu;
eq.months=em;
eq.years=er;
return this
}function g(em){return em*4800/146097
}function ei(em){return em*146097/4800
}function d1(en){var ep;
var em;
var eo=this._milliseconds;
en=cj(en);
if(en==="month"||en==="year"){ep=this._days+eo/86400000;
em=this._months+g(ep);
return en==="month"?em:em/12
}else{ep=this._days+Math.round(ei(this._months));
switch(en){case"week":return ep/7+eo/604800000;
case"day":return ep+eo/86400000;
case"hour":return ep*24+eo/3600000;
case"minute":return ep*1440+eo/60000;
case"second":return ep*86400+eo/1000;
case"millisecond":return Math.floor(ep*86400000)+eo;
default:throw new Error("Unknown unit "+en)
}}}function cq(){return(this._milliseconds+this._days*86400000+(this._months%12)*2592000000+ck(this._months/12)*31536000000)
}function dq(em){return function(){return this.as(em)
}
}var ej=dq("ms");
var C=dq("s");
var cU=dq("m");
var r=dq("h");
var dt=dq("d");
var dc=dq("w");
var dn=dq("M");
var aY=dq("y");
function a0(em){em=cj(em);
return this[em+"s"]()
}function bG(em){return function(){return this._data[em]
}
}var e=bG("milliseconds");
var aV=bG("seconds");
var am=bG("minutes");
var I=bG("hours");
var aT=bG("days");
var d6=bG("months");
var bl=bG("years");
function dv(){return cK(this.days()/7)
}var cu=Math.round;
var c5={s:45,m:45,h:22,d:26,M:11};
function Z(en,ep,eo,eq,em){return em.relativeTime(ep||1,!!eo,en,eq)
}function cG(eq,en,eu){var eo=dz(eq).abs();
var ev=cu(eo.as("s"));
var ep=cu(eo.as("m"));
var et=cu(eo.as("h"));
var ew=cu(eo.as("d"));
var em=cu(eo.as("M"));
var er=cu(eo.as("y"));
var es=ev<c5.s&&["s",ev]||ep<=1&&["m"]||ep<c5.m&&["mm",ep]||et<=1&&["h"]||et<c5.h&&["hh",et]||ew<=1&&["d"]||ew<c5.d&&["dd",ew]||em<=1&&["M"]||em<c5.M&&["MM",em]||er<=1&&["y"]||["yy",er];
es[2]=en;
es[3]=+eq>0;
es[4]=eu;
return Z.apply(null,es)
}function aM(em,en){if(c5[em]===undefined){return false
}if(en===undefined){return c5[em]
}c5[em]=en;
return true
}function c(eo){var em=this.localeData();
var en=cG(this,!eo,em);
if(eo){en=em.pastFuture(+this,en)
}return em.postformat(en)
}var aA=Math.abs;
function d5(){var ew=aA(this._milliseconds)/1000;
var ex=aA(this._days);
var eo=aA(this._months);
var eq,ev,es;
eq=cK(ew/60);
ev=cK(eq/60);
ew%=60;
eq%=60;
es=cK(eo/12);
eo%=12;
var en=es;
var et=eo;
var em=ex;
var er=ev;
var ep=eq;
var ey=ew;
var eu=this.asSeconds();
if(!eu){return"P0D"
}return(eu<0?"-":"")+"P"+(en?en+"Y":"")+(et?et+"M":"")+(em?em+"D":"")+((er||ep||ey)?"T":"")+(er?er+"H":"")+(ep?ep+"M":"")+(ey?ey+"S":"")
}var dm=db.prototype;
dm.abs=Y;
dm.add=a6;
dm.subtract=c0;
dm.as=d1;
dm.asMilliseconds=ej;
dm.asSeconds=C;
dm.asMinutes=cU;
dm.asHours=r;
dm.asDays=dt;
dm.asWeeks=dc;
dm.asMonths=dn;
dm.asYears=aY;
dm.valueOf=cq;
dm._bubble=co;
dm.get=a0;
dm.milliseconds=e;
dm.seconds=aV;
dm.minutes=am;
dm.hours=I;
dm.days=aT;
dm.weeks=dv;
dm.months=d6;
dm.years=bl;
dm.humanize=c;
dm.toISOString=d5;
dm.toString=d5;
dm.toJSON=d5;
dm.locale=ek;
dm.localeData=de;
dm.toIsoString=dA("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",d5);
dm.lang=u;
b2("X",0,0,"unix");
b2("x",0,0,"valueOf");
aS("x",v);
aS("X",ec);
bu("X",function(em,eo,en){en._d=new Date(parseFloat(em,10)*1000)
});
bu("x",function(em,eo,en){en._d=new Date(ck(em))
});
bt.version="2.11.1";
aw(dp);
bt.fn=a;
bt.min=n;
bt.max=a1;
bt.now=b3;
bt.utc=dD;
bt.unix=P;
bt.months=el;
bt.isDate=dN;
bt.locale=ce;
bt.invalid=cc;
bt.duration=dz;
bt.isMoment=bI;
bt.weekdays=aI;
bt.parseZone=cp;
bt.localeData=q;
bt.isDuration=S;
bt.monthsShort=bP;
bt.weekdaysMin=D;
bt.defineLocale=b6;
bt.weekdaysShort=ee;
bt.normalizeUnits=cj;
bt.relativeTimeThreshold=aM;
bt.prototype=a;
var cx=bt;
return cx
}));
/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.18.0
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function(a,b){if(typeof exports==="object"){module.exports=b(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains"))
}else{if(typeof define==="function"&&define.amd){define(["./punycode","./IPv6","./SecondLevelDomains"],b)
}else{a.URI=b(a.punycode,a.IPv6,a.SecondLevelDomains,a)
}}}(this,function(c,e,k,y){var r=y&&y.URI;
function l(q,E){var D=arguments.length>=1;
var p=arguments.length>=2;
if(!(this instanceof l)){if(D){if(p){return new l(q,E)
}return new l(q)
}return new l()
}if(q===undefined){if(D){throw new TypeError("undefined is not a valid argument for URI")
}if(typeof location!=="undefined"){q=location.href+""
}else{q=""
}}this.href(q);
if(E!==undefined){return this.absoluteTo(E)
}return this
}l.version="1.18.0";
var v=l.prototype;
var s=Object.prototype.hasOwnProperty;
function f(p){return p.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")
}function z(p){if(p===undefined){return"Undefined"
}return String(Object.prototype.toString.call(p)).slice(8,-1)
}function o(p){return z(p)==="Array"
}function n(E,D){var F={};
var p,q;
if(z(D)==="RegExp"){F=null
}else{if(o(D)){for(p=0,q=D.length;
p<q;
p++){F[D[p]]=true
}}else{F[D]=true
}}for(p=0,q=E.length;
p<q;
p++){var G=F&&F[E[p]]!==undefined||!F&&D.test(E[p]);
if(G){E.splice(p,1);
q--;
p--
}}return E
}function B(F,E){var q,D;
if(o(E)){for(q=0,D=E.length;
q<D;
q++){if(!B(F,E[q])){return false
}}return true
}var p=z(E);
for(q=0,D=F.length;
q<D;
q++){if(p==="RegExp"){if(typeof F[q]==="string"&&F[q].match(E)){return true
}}else{if(F[q]===E){return true
}}}return false
}function j(E,q){if(!o(E)||!o(q)){return false
}if(E.length!==q.length){return false
}E.sort();
q.sort();
for(var D=0,p=E.length;
D<p;
D++){if(E[D]!==q[D]){return false
}}return true
}function u(q){var p=/^\/+|\/+$/g;
return q.replace(p,"")
}l._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:l.duplicateQueryParameters,escapeQuerySpace:l.escapeQuerySpace}
};
l.duplicateQueryParameters=false;
l.escapeQuerySpace=true;
l.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;
l.idn_expression=/[^a-z0-9\.-]/i;
l.punycode_expression=/(xn--)/i;
l.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
l.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
l.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
l.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/};
l.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};
l.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;
l.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};
l.getDomAttribute=function(p){if(!p||!p.nodeName){return undefined
}var q=p.nodeName.toLowerCase();
if(q==="input"&&p.type!=="image"){return undefined
}return l.domAttributes[q]
};
function b(p){return escape(p)
}function w(p){return encodeURIComponent(p).replace(/[!'()*]/g,b).replace(/\*/g,"%2A")
}l.encode=w;
l.decode=decodeURIComponent;
l.iso8859=function(){l.encode=escape;
l.decode=unescape
};
l.unicode=function(){l.encode=w;
l.decode=decodeURIComponent
};
l.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};
l.encodeQuery=function(p,q){var D=l.encode(p+"");
if(q===undefined){q=l.escapeQuerySpace
}return q?D.replace(/%20/g,"+"):D
};
l.decodeQuery=function(p,q){p+="";
if(q===undefined){q=l.escapeQuerySpace
}try{return l.decode(q?p.replace(/\+/g,"%20"):p)
}catch(D){return p
}};
var h={encode:"encode",decode:"decode"};
var i;
var m=function(q,p){return function(D){try{return l[p](D+"").replace(l.characters[q][p].expression,function(F){return l.characters[q][p].map[F]
})
}catch(E){return D
}}
};
for(i in h){l[i+"PathSegment"]=m("pathname",h[i]);
l[i+"UrnPathSegment"]=m("urnpath",h[i])
}var C=function(p,q,D){return function(F){var I;
if(!D){I=l[q]
}else{I=function(J){return l[q](l[D](J))
}
}var E=(F+"").split(p);
for(var G=0,H=E.length;
G<H;
G++){E[G]=I(E[G])
}return E.join(p)
}
};
l.decodePath=C("/","decodePathSegment");
l.decodeUrnPath=C(":","decodeUrnPathSegment");
l.recodePath=C("/","encodePathSegment","decode");
l.recodeUrnPath=C(":","encodeUrnPathSegment","decode");
l.encodeReserved=m("reserved","encode");
l.parse=function(p,q){var D;
if(!q){q={}
}D=p.indexOf("#");
if(D>-1){q.fragment=p.substring(D+1)||null;
p=p.substring(0,D)
}D=p.indexOf("?");
if(D>-1){q.query=p.substring(D+1)||null;
p=p.substring(0,D)
}if(p.substring(0,2)==="//"){q.protocol=null;
p=p.substring(2);
p=l.parseAuthority(p,q)
}else{D=p.indexOf(":");
if(D>-1){q.protocol=p.substring(0,D)||null;
if(q.protocol&&!q.protocol.match(l.protocol_expression)){q.protocol=undefined
}else{if(p.substring(D+1,D+3)==="//"){p=p.substring(D+3);
p=l.parseAuthority(p,q)
}else{p=p.substring(D+1);
q.urn=true
}}}}q.path=p;
return q
};
l.parseHost=function(D,G){D=D.replace(/\\/g,"/");
var I=D.indexOf("/");
var H;
var F;
if(I===-1){I=D.length
}if(D.charAt(0)==="["){H=D.indexOf("]");
G.hostname=D.substring(1,H)||null;
G.port=D.substring(H+2,I)||null;
if(G.port==="/"){G.port=null
}}else{var E=D.indexOf(":");
var p=D.indexOf("/");
var q=D.indexOf(":",E+1);
if(q!==-1&&(p===-1||q<p)){G.hostname=D.substring(0,I)||null;
G.port=null
}else{F=D.substring(0,I).split(":");
G.hostname=F[0]||null;
G.port=F[1]||null
}}if(G.hostname&&D.substring(I).charAt(0)!=="/"){I++;
D="/"+D
}return D.substring(I)||"/"
};
l.parseAuthority=function(p,q){p=l.parseUserinfo(p,q);
return l.parseHost(p,q)
};
l.parseUserinfo=function(q,E){var p=q.indexOf("/");
var F=q.lastIndexOf("@",p>-1?p:q.length-1);
var D;
if(F>-1&&(p===-1||F<p)){D=q.substring(0,F).split(":");
E.username=D[0]?l.decode(D[0]):null;
D.shift();
E.password=D[0]?l.decode(D.join(":")):null;
q=q.substring(F+1)
}else{E.username=null;
E.password=null
}return q
};
l.parseQuery=function(E,F){if(!E){return{}
}E=E.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");
if(!E){return{}
}var G={};
var H=E.split("&");
var q=H.length;
var J,p,I;
for(var D=0;
D<q;
D++){J=H[D].split("=");
p=l.decodeQuery(J.shift(),F);
I=J.length?l.decodeQuery(J.join("="),F):null;
if(s.call(G,p)){if(typeof G[p]==="string"||G[p]===null){G[p]=[G[p]]
}G[p].push(I)
}else{G[p]=I
}}return G
};
l.build=function(q){var p="";
if(q.protocol){p+=q.protocol+":"
}if(!q.urn&&(p||q.hostname)){p+="//"
}p+=(l.buildAuthority(q)||"");
if(typeof q.path==="string"){if(q.path.charAt(0)!=="/"&&typeof q.hostname==="string"){p+="/"
}p+=q.path
}if(typeof q.query==="string"&&q.query){p+="?"+q.query
}if(typeof q.fragment==="string"&&q.fragment){p+="#"+q.fragment
}return p
};
l.buildHost=function(q){var p="";
if(!q.hostname){return""
}else{if(l.ip6_expression.test(q.hostname)){p+="["+q.hostname+"]"
}else{p+=q.hostname
}}if(q.port){p+=":"+q.port
}return p
};
l.buildAuthority=function(p){return l.buildUserinfo(p)+l.buildHost(p)
};
l.buildUserinfo=function(q){var p="";
if(q.username){p+=l.encode(q.username)
}if(q.password){p+=":"+l.encode(q.password)
}if(p){p+="@"
}return p
};
l.buildQuery=function(G,I,E){var D="";
var H,q,p,F;
for(q in G){if(s.call(G,q)&&q){if(o(G[q])){H={};
for(p=0,F=G[q].length;
p<F;
p++){if(G[q][p]!==undefined&&H[G[q][p]+""]===undefined){D+="&"+l.buildQueryParameter(q,G[q][p],E);
if(I!==true){H[G[q][p]+""]=true
}}}}else{if(G[q]!==undefined){D+="&"+l.buildQueryParameter(q,G[q],E)
}}}}return D.substring(1)
};
l.buildQueryParameter=function(p,D,q){return l.encodeQuery(p,q)+(D!==null?"="+l.encodeQuery(D,q):"")
};
l.addQuery=function(E,p,D){if(typeof p==="object"){for(var q in p){if(s.call(p,q)){l.addQuery(E,q,p[q])
}}}else{if(typeof p==="string"){if(E[p]===undefined){E[p]=D;
return
}else{if(typeof E[p]==="string"){E[p]=[E[p]]
}}if(!o(D)){D=[D]
}E[p]=(E[p]||[]).concat(D)
}else{throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
}}};
l.removeQuery=function(G,p,F){var D,E,q;
if(o(p)){for(D=0,E=p.length;
D<E;
D++){G[p[D]]=undefined
}}else{if(z(p)==="RegExp"){for(q in G){if(p.test(q)){G[q]=undefined
}}}else{if(typeof p==="object"){for(q in p){if(s.call(p,q)){l.removeQuery(G,q,p[q])
}}}else{if(typeof p==="string"){if(F!==undefined){if(z(F)==="RegExp"){if(!o(G[p])&&F.test(G[p])){G[p]=undefined
}else{G[p]=n(G[p],F)
}}else{if(G[p]===String(F)&&(!o(F)||F.length===1)){G[p]=undefined
}else{if(o(G[p])){G[p]=n(G[p],F)
}}}}else{G[p]=undefined
}}else{throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")
}}}}};
l.hasQuery=function(G,p,F,E){switch(z(p)){case"String":break;
case"RegExp":for(var q in G){if(s.call(G,q)){if(p.test(q)&&(F===undefined||l.hasQuery(G,q,F))){return true
}}}return false;
case"Object":for(var D in p){if(s.call(p,D)){if(!l.hasQuery(G,D,p[D])){return false
}}}return true;
default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")
}switch(z(F)){case"Undefined":return p in G;
case"Boolean":var I=Boolean(o(G[p])?G[p].length:G[p]);
return F===I;
case"Function":return !!F(G[p],p,G);
case"Array":if(!o(G[p])){return false
}var H=E?B:j;
return H(G[p],F);
case"RegExp":if(!o(G[p])){return Boolean(G[p]&&G[p].match(F))
}if(!E){return false
}return B(G[p],F);
case"Number":F=String(F);
case"String":if(!o(G[p])){return G[p]===F
}if(!E){return false
}return B(G[p],F);
default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
}};
l.joinPaths=function(){var p=[];
var D=[];
var I=0;
for(var F=0;
F<arguments.length;
F++){var q=new l(arguments[F]);
p.push(q);
var E=q.segment();
for(var G=0;
G<E.length;
G++){if(typeof E[G]==="string"){D.push(E[G])
}if(E[G]){I++
}}}if(!D.length||!I){return new l("")
}var H=new l("").segment(D);
if(p[0].path()===""||p[0].path().slice(0,1)==="/"){H.path("/"+H.path())
}return H.normalize()
};
l.commonPath=function(q,p){var D=Math.min(q.length,p.length);
var E;
for(E=0;
E<D;
E++){if(q.charAt(E)!==p.charAt(E)){E--;
break
}}if(E<1){return q.charAt(0)===p.charAt(0)&&q.charAt(0)==="/"?"/":""
}if(q.charAt(E)!=="/"||p.charAt(E)!=="/"){E=q.substring(0,E).lastIndexOf("/")
}return q.substring(0,E+1)
};
l.withinString=function(H,K,N){N||(N={});
var D=N.start||l.findUri.start;
var I=N.end||l.findUri.end;
var M=N.trim||l.findUri.trim;
var F=/[a-z0-9-]=["']?$/i;
D.lastIndex=0;
while(true){var G=D.exec(H);
if(!G){break
}var q=G.index;
if(N.ignoreHtml){var p=H.slice(Math.max(q-3,0),q);
if(p&&F.test(p)){continue
}}var E=q+H.slice(q).search(I);
var J=H.slice(q,E).replace(M,"");
if(N.ignore&&N.ignore.test(J)){continue
}E=q+J.length;
var L=K(J,q,E,H);
H=H.slice(0,q)+L+H.slice(E);
D.lastIndex=q+L.length
}D.lastIndex=0;
return H
};
l.ensureValidHostname=function(p){if(p.match(l.invalid_hostname_characters)){if(!c){throw new TypeError('Hostname "'+p+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available')
}if(c.toASCII(p).match(l.invalid_hostname_characters)){throw new TypeError('Hostname "'+p+'" contains characters other than [A-Z0-9.-]')
}}};
l.noConflict=function(p){if(p){var q={URI:this.noConflict()};
if(y.URITemplate&&typeof y.URITemplate.noConflict==="function"){q.URITemplate=y.URITemplate.noConflict()
}if(y.IPv6&&typeof y.IPv6.noConflict==="function"){q.IPv6=y.IPv6.noConflict()
}if(y.SecondLevelDomains&&typeof y.SecondLevelDomains.noConflict==="function"){q.SecondLevelDomains=y.SecondLevelDomains.noConflict()
}return q
}else{if(y.URI===this){y.URI=r
}}return this
};
v.build=function(p){if(p===true){this._deferred_build=true
}else{if(p===undefined||this._deferred_build){this._string=l.build(this._parts);
this._deferred_build=false
}}return this
};
v.clone=function(){return new l(this)
};
v.valueOf=v.toString=function(){return this.build(false)._string
};
function g(p){return function(q,D){if(q===undefined){return this._parts[p]||""
}else{this._parts[p]=q||null;
this.build(!D);
return this
}}
}function d(p,q){return function(D,E){if(D===undefined){return this._parts[p]||""
}else{if(D!==null){D=D+"";
if(D.charAt(0)===q){D=D.substring(1)
}}this._parts[p]=D;
this.build(!E);
return this
}}
}v.protocol=g("protocol");
v.username=g("username");
v.password=g("password");
v.hostname=g("hostname");
v.port=g("port");
v.query=d("query","?");
v.fragment=d("fragment","#");
v.search=function(p,D){var q=this.query(p,D);
return typeof q==="string"&&q.length?("?"+q):q
};
v.hash=function(p,D){var q=this.fragment(p,D);
return typeof q==="string"&&q.length?("#"+q):q
};
v.pathname=function(p,D){if(p===undefined||p===true){var q=this._parts.path||(this._parts.hostname?"/":"");
return p?(this._parts.urn?l.decodeUrnPath:l.decodePath)(q):q
}else{if(this._parts.urn){this._parts.path=p?l.recodeUrnPath(p):""
}else{this._parts.path=p?l.recodePath(p):"/"
}this.build(!D);
return this
}};
v.path=v.pathname;
v.href=function(p,H){var D;
if(p===undefined){return this.toString()
}this._string="";
this._parts=l._parts();
var q=p instanceof l;
var F=typeof p==="object"&&(p.hostname||p.path||p.pathname);
if(p.nodeName){var E=l.getDomAttribute(p);
p=p[E]||"";
F=false
}if(!q&&F&&p.pathname!==undefined){p=p.toString()
}if(typeof p==="string"||p instanceof String){this._parts=l.parse(String(p),this._parts)
}else{if(q||F){var G=q?p._parts:p;
for(D in G){if(s.call(this._parts,D)){this._parts[D]=G[D]
}}}else{throw new TypeError("invalid input")
}}this.build(!H);
return this
};
v.is=function(J){var G=false;
var H=false;
var F=false;
var D=false;
var q=false;
var E=false;
var I=false;
var p=!this._parts.urn;
if(this._parts.hostname){p=false;
H=l.ip4_expression.test(this._parts.hostname);
F=l.ip6_expression.test(this._parts.hostname);
G=H||F;
D=!G;
q=D&&k&&k.has(this._parts.hostname);
E=D&&l.idn_expression.test(this._parts.hostname);
I=D&&l.punycode_expression.test(this._parts.hostname)
}switch(J.toLowerCase()){case"relative":return p;
case"absolute":return !p;
case"domain":case"name":return D;
case"sld":return q;
case"ip":return G;
case"ip4":case"ipv4":case"inet4":return H;
case"ip6":case"ipv6":case"inet6":return F;
case"idn":return E;
case"url":return !this._parts.urn;
case"urn":return !!this._parts.urn;
case"punycode":return I
}return null
};
var A=v.protocol;
var a=v.port;
var x=v.hostname;
v.protocol=function(p,q){if(p!==undefined){if(p){p=p.replace(/:(\/\/)?$/,"");
if(!p.match(l.protocol_expression)){throw new TypeError('Protocol "'+p+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]")
}}}return A.call(this,p,q)
};
v.scheme=v.protocol;
v.port=function(p,q){if(this._parts.urn){return p===undefined?"":this
}if(p!==undefined){if(p===0){p=null
}if(p){p+="";
if(p.charAt(0)===":"){p=p.substring(1)
}if(p.match(/[^0-9]/)){throw new TypeError('Port "'+p+'" contains characters other than [0-9]')
}}}return a.call(this,p,q)
};
v.hostname=function(q,E){if(this._parts.urn){return q===undefined?"":this
}if(q!==undefined){var p={};
var D=l.parseHost(q,p);
if(D!=="/"){throw new TypeError('Hostname "'+q+'" contains characters other than [A-Z0-9.-]')
}q=p.hostname
}return x.call(this,q,E)
};
v.origin=function(q,F){if(this._parts.urn){return q===undefined?"":this
}if(q===undefined){var E=this.protocol();
var D=this.authority();
if(!D){return""
}return(E?E+"://":"")+this.authority()
}else{var p=l(q);
this.protocol(p.protocol()).authority(p.authority()).build(!F);
return this
}};
v.host=function(p,D){if(this._parts.urn){return p===undefined?"":this
}if(p===undefined){return this._parts.hostname?l.buildHost(this._parts):""
}else{var q=l.parseHost(p,this._parts);
if(q!=="/"){throw new TypeError('Hostname "'+p+'" contains characters other than [A-Z0-9.-]')
}this.build(!D);
return this
}};
v.authority=function(p,D){if(this._parts.urn){return p===undefined?"":this
}if(p===undefined){return this._parts.hostname?l.buildAuthority(this._parts):""
}else{var q=l.parseAuthority(p,this._parts);
if(q!=="/"){throw new TypeError('Hostname "'+p+'" contains characters other than [A-Z0-9.-]')
}this.build(!D);
return this
}};
v.userinfo=function(p,D){if(this._parts.urn){return p===undefined?"":this
}if(p===undefined){var q=l.buildUserinfo(this._parts);
return q?q.substring(0,q.length-1):q
}else{if(p[p.length-1]!=="@"){p+="@"
}l.parseUserinfo(p,this._parts);
this.build(!D);
return this
}};
v.resource=function(p,D){var q;
if(p===undefined){return this.path()+this.search()+this.hash()
}q=l.parse(p);
this._parts.path=q.path;
this._parts.query=q.query;
this._parts.fragment=q.fragment;
this.build(!D);
return this
};
v.subdomain=function(q,G){if(this._parts.urn){return q===undefined?"":this
}if(q===undefined){if(!this._parts.hostname||this.is("IP")){return""
}var p=this._parts.hostname.length-this.domain().length-1;
return this._parts.hostname.substring(0,p)||""
}else{var F=this._parts.hostname.length-this.domain().length;
var E=this._parts.hostname.substring(0,F);
var D=new RegExp("^"+f(E));
if(q&&q.charAt(q.length-1)!=="."){q+="."
}if(q){l.ensureValidHostname(q)
}this._parts.hostname=this._parts.hostname.replace(D,q);
this.build(!G);
return this
}};
v.domain=function(q,F){if(this._parts.urn){return q===undefined?"":this
}if(typeof q==="boolean"){F=q;
q=undefined
}if(q===undefined){if(!this._parts.hostname||this.is("IP")){return""
}var E=this._parts.hostname.match(/\./g);
if(E&&E.length<2){return this._parts.hostname
}var p=this._parts.hostname.length-this.tld(F).length-1;
p=this._parts.hostname.lastIndexOf(".",p-1)+1;
return this._parts.hostname.substring(p)||""
}else{if(!q){throw new TypeError("cannot set domain empty")
}l.ensureValidHostname(q);
if(!this._parts.hostname||this.is("IP")){this._parts.hostname=q
}else{var D=new RegExp(f(this.domain())+"$");
this._parts.hostname=this._parts.hostname.replace(D,q)
}this.build(!F);
return this
}};
v.tld=function(p,E){if(this._parts.urn){return p===undefined?"":this
}if(typeof p==="boolean"){E=p;
p=undefined
}if(p===undefined){if(!this._parts.hostname||this.is("IP")){return""
}var F=this._parts.hostname.lastIndexOf(".");
var q=this._parts.hostname.substring(F+1);
if(E!==true&&k&&k.list[q.toLowerCase()]){return k.get(this._parts.hostname)||q
}return q
}else{var D;
if(!p){throw new TypeError("cannot set TLD empty")
}else{if(p.match(/[^a-zA-Z0-9-]/)){if(k&&k.is(p)){D=new RegExp(f(this.tld())+"$");
this._parts.hostname=this._parts.hostname.replace(D,p)
}else{throw new TypeError('TLD "'+p+'" contains characters other than [A-Z0-9]')
}}else{if(!this._parts.hostname||this.is("IP")){throw new ReferenceError("cannot set TLD on non-domain host")
}else{D=new RegExp(f(this.tld())+"$");
this._parts.hostname=this._parts.hostname.replace(D,p)
}}}this.build(!E);
return this
}};
v.directory=function(D,H){if(this._parts.urn){return D===undefined?"":this
}if(D===undefined||D===true){if(!this._parts.path&&!this._parts.hostname){return""
}if(this._parts.path==="/"){return"/"
}var q=this._parts.path.length-this.filename().length-1;
var F=this._parts.path.substring(0,q)||(this._parts.hostname?"/":"");
return D?l.decodePath(F):F
}else{var G=this._parts.path.length-this.filename().length;
var p=this._parts.path.substring(0,G);
var E=new RegExp("^"+f(p));
if(!this.is("relative")){if(!D){D="/"
}if(D.charAt(0)!=="/"){D="/"+D
}}if(D&&D.charAt(D.length-1)!=="/"){D+="/"
}D=l.recodePath(D);
this._parts.path=this._parts.path.replace(E,D);
this.build(!H);
return this
}};
v.filename=function(q,F){if(this._parts.urn){return q===undefined?"":this
}if(q===undefined||q===true){if(!this._parts.path||this._parts.path==="/"){return""
}var G=this._parts.path.lastIndexOf("/");
var E=this._parts.path.substring(G+1);
return q?l.decodePathSegment(E):E
}else{var p=false;
if(q.charAt(0)==="/"){q=q.substring(1)
}if(q.match(/\.?\//)){p=true
}var D=new RegExp(f(this.filename())+"$");
q=l.recodePath(q);
this._parts.path=this._parts.path.replace(D,q);
if(p){this.normalizePath(F)
}else{this.build(!F)
}return this
}};
v.suffix=function(q,H){if(this._parts.urn){return q===undefined?"":this
}if(q===undefined||q===true){if(!this._parts.path||this._parts.path==="/"){return""
}var p=this.filename();
var I=p.lastIndexOf(".");
var F,E;
if(I===-1){return""
}F=p.substring(I+1);
E=(/^[a-z0-9%]+$/i).test(F)?F:"";
return q?l.decodePathSegment(E):E
}else{if(q.charAt(0)==="."){q=q.substring(1)
}var G=this.suffix();
var D;
if(!G){if(!q){return this
}this._parts.path+="."+l.recodePath(q)
}else{if(!q){D=new RegExp(f("."+G)+"$")
}else{D=new RegExp(f(G)+"$")
}}if(D){q=l.recodePath(q);
this._parts.path=this._parts.path.replace(D,q)
}this.build(!H);
return this
}};
v.segment=function(F,I,H){var D=this._parts.urn?":":"/";
var J=this.path();
var G=J.substring(0,1)==="/";
var E=J.split(D);
if(F!==undefined&&typeof F!=="number"){H=I;
I=F;
F=undefined
}if(F!==undefined&&typeof F!=="number"){throw new Error('Bad segment "'+F+'", must be 0-based integer')
}if(G){E.shift()
}if(F<0){F=Math.max(E.length+F,0)
}if(I===undefined){return F===undefined?E:E[F]
}else{if(F===null||E[F]===undefined){if(o(I)){E=[];
for(var q=0,p=I.length;
q<p;
q++){if(!I[q].length&&(!E.length||!E[E.length-1].length)){continue
}if(E.length&&!E[E.length-1].length){E.pop()
}E.push(u(I[q]))
}}else{if(I||typeof I==="string"){I=u(I);
if(E[E.length-1]===""){E[E.length-1]=I
}else{E.push(I)
}}}}else{if(I){E[F]=u(I)
}else{E.splice(F,1)
}}}if(G){E.unshift("")
}return this.path(E.join(D),H)
};
v.segmentCoded=function(F,q,G){var D,E,p;
if(typeof F!=="number"){G=q;
q=F;
F=undefined
}if(q===undefined){D=this.segment(F,q,G);
if(!o(D)){D=D!==undefined?l.decode(D):undefined
}else{for(E=0,p=D.length;
E<p;
E++){D[E]=l.decode(D[E])
}}return D
}if(!o(q)){q=(typeof q==="string"||q instanceof String)?l.encode(q):q
}else{for(E=0,p=q.length;
E<p;
E++){q[E]=l.encode(q[E])
}}return this.segment(F,q,G)
};
var t=v.query;
v.query=function(q,E){if(q===true){return l.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
}else{if(typeof q==="function"){var D=l.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
var p=q.call(this,D);
this._parts.query=l.buildQuery(p||D,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
this.build(!E);
return this
}else{if(q!==undefined&&typeof q!=="string"){this._parts.query=l.buildQuery(q,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
this.build(!E);
return this
}else{return t.call(this,q,E)
}}}};
v.setQuery=function(p,E,F){var D=l.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
if(typeof p==="string"||p instanceof String){D[p]=E!==undefined?E:null
}else{if(typeof p==="object"){for(var q in p){if(s.call(p,q)){D[q]=p[q]
}}}else{throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
}}this._parts.query=l.buildQuery(D,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
if(typeof p!=="string"){F=E
}this.build(!F);
return this
};
v.addQuery=function(p,D,E){var q=l.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
l.addQuery(q,p,D===undefined?null:D);
this._parts.query=l.buildQuery(q,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
if(typeof p!=="string"){E=D
}this.build(!E);
return this
};
v.removeQuery=function(p,D,E){var q=l.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
l.removeQuery(q,p,D);
this._parts.query=l.buildQuery(q,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
if(typeof p!=="string"){E=D
}this.build(!E);
return this
};
v.hasQuery=function(p,E,D){var q=l.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
return l.hasQuery(q,p,E,D)
};
v.setSearch=v.setQuery;
v.addSearch=v.addQuery;
v.removeSearch=v.removeQuery;
v.hasSearch=v.hasQuery;
v.normalize=function(){if(this._parts.urn){return this.normalizeProtocol(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build()
}return this.normalizeProtocol(false).normalizeHostname(false).normalizePort(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build()
};
v.normalizeProtocol=function(p){if(typeof this._parts.protocol==="string"){this._parts.protocol=this._parts.protocol.toLowerCase();
this.build(!p)
}return this
};
v.normalizeHostname=function(p){if(this._parts.hostname){if(this.is("IDN")&&c){this._parts.hostname=c.toASCII(this._parts.hostname)
}else{if(this.is("IPv6")&&e){this._parts.hostname=e.best(this._parts.hostname)
}}this._parts.hostname=this._parts.hostname.toLowerCase();
this.build(!p)
}return this
};
v.normalizePort=function(p){if(typeof this._parts.protocol==="string"&&this._parts.port===l.defaultPorts[this._parts.protocol]){this._parts.port=null;
this.build(!p)
}return this
};
v.normalizePath=function(G){var E=this._parts.path;
if(!E){return this
}if(this._parts.urn){this._parts.path=l.recodeUrnPath(this._parts.path);
this.build(!G);
return this
}if(this._parts.path==="/"){return this
}E=l.recodePath(E);
var D;
var q="";
var F,p;
if(E.charAt(0)!=="/"){D=true;
E="/"+E
}if(E.slice(-3)==="/.."||E.slice(-2)==="/."){E+="/"
}E=E.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");
if(D){q=E.substring(1).match(/^(\.\.\/)+/)||"";
if(q){q=q[0]
}}while(true){F=E.search(/\/\.\.(\/|$)/);
if(F===-1){break
}else{if(F===0){E=E.substring(3);
continue
}}p=E.substring(0,F).lastIndexOf("/");
if(p===-1){p=F
}E=E.substring(0,p)+E.substring(F+3)
}if(D&&this.is("relative")){E=q+E.substring(1)
}this._parts.path=E;
this.build(!G);
return this
};
v.normalizePathname=v.normalizePath;
v.normalizeQuery=function(p){if(typeof this._parts.query==="string"){if(!this._parts.query.length){this._parts.query=null
}else{this.query(l.parseQuery(this._parts.query,this._parts.escapeQuerySpace))
}this.build(!p)
}return this
};
v.normalizeFragment=function(p){if(!this._parts.fragment){this._parts.fragment=null;
this.build(!p)
}return this
};
v.normalizeSearch=v.normalizeQuery;
v.normalizeHash=v.normalizeFragment;
v.iso8859=function(){var p=l.encode;
var q=l.decode;
l.encode=escape;
l.decode=decodeURIComponent;
try{this.normalize()
}finally{l.encode=p;
l.decode=q
}return this
};
v.unicode=function(){var p=l.encode;
var q=l.decode;
l.encode=w;
l.decode=unescape;
try{this.normalize()
}finally{l.encode=p;
l.decode=q
}return this
};
v.readable=function(){var G=this.clone();
G.username("").password("").normalize();
var F="";
if(G._parts.protocol){F+=G._parts.protocol+"://"
}if(G._parts.hostname){if(G.is("punycode")&&c){F+=c.toUnicode(G._parts.hostname);
if(G._parts.port){F+=":"+G._parts.port
}}else{F+=G.host()
}}if(G._parts.hostname&&G._parts.path&&G._parts.path.charAt(0)!=="/"){F+="/"
}F+=G.path(true);
if(G._parts.query){var I="";
for(var E=0,D=G._parts.query.split("&"),p=D.length;
E<p;
E++){var H=(D[E]||"").split("=");
I+="&"+l.decodeQuery(H[0],this._parts.escapeQuerySpace).replace(/&/g,"%26");
if(H[1]!==undefined){I+="="+l.decodeQuery(H[1],this._parts.escapeQuerySpace).replace(/&/g,"%26")
}}F+="?"+I.substring(1)
}F+=l.decodeQuery(G.hash(),true);
return F
};
v.absoluteTo=function(F){var q=this.clone();
var E=["protocol","username","password","hostname","port"];
var H,D,G;
if(this._parts.urn){throw new Error("URNs do not have any generally defined hierarchical components")
}if(!(F instanceof l)){F=new l(F)
}if(!q._parts.protocol){q._parts.protocol=F._parts.protocol
}if(this._parts.hostname){return q
}for(D=0;
(G=E[D]);
D++){q._parts[G]=F._parts[G]
}if(!q._parts.path){q._parts.path=F._parts.path;
if(!q._parts.query){q._parts.query=F._parts.query
}}else{if(q._parts.path.substring(-2)===".."){q._parts.path+="/"
}}if(q.path().charAt(0)!=="/"){H=F.directory();
H=H?H:F.path().indexOf("/")===0?"/":"";
q._parts.path=(H?(H+"/"):"")+q._parts.path;
q.normalizePath()
}q.build();
return q
};
v.relativeTo=function(H){var G=this.clone().normalize();
var p,F,E,q,I;
if(G._parts.urn){throw new Error("URNs do not have any generally defined hierarchical components")
}H=new l(H).normalize();
p=G._parts;
F=H._parts;
q=G.path();
I=H.path();
if(q.charAt(0)!=="/"){throw new Error("URI is already relative")
}if(I.charAt(0)!=="/"){throw new Error("Cannot calculate a URI relative to another relative URI")
}if(p.protocol===F.protocol){p.protocol=null
}if(p.username!==F.username||p.password!==F.password){return G.build()
}if(p.protocol!==null||p.username!==null||p.password!==null){return G.build()
}if(p.hostname===F.hostname&&p.port===F.port){p.hostname=null;
p.port=null
}else{return G.build()
}if(q===I){p.path="";
return G.build()
}E=l.commonPath(q,I);
if(!E){return G.build()
}var D=F.path.substring(E.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");
p.path=(D+p.path.substring(E.length))||"./";
return G.build()
};
v.equals=function(q){var D=this.clone();
var J=new l(q);
var E={};
var p={};
var G={};
var F,I,H;
D.normalize();
J.normalize();
if(D.toString()===J.toString()){return true
}F=D.query();
I=J.query();
D.query("");
J.query("");
if(D.toString()!==J.toString()){return false
}if(F.length!==I.length){return false
}E=l.parseQuery(F,this._parts.escapeQuerySpace);
p=l.parseQuery(I,this._parts.escapeQuerySpace);
for(H in E){if(s.call(E,H)){if(!o(E[H])){if(E[H]!==p[H]){return false
}}else{if(!j(E[H],p[H])){return false
}}G[H]=true
}}for(H in p){if(s.call(p,H)){if(!G[H]){return false
}}}return true
};
v.duplicateQueryParameters=function(p){this._parts.duplicateQueryParameters=!!p;
return this
};
v.escapeQuerySpace=function(p){this._parts.escapeQuerySpace=!!p;
return this
};
return l
}));
/*!
 * URI.js - Mutating URLs
 * URI Template Support - http://tools.ietf.org/html/rfc6570
 *
 * Version: 1.18.0
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function(a,b){if(typeof exports==="object"){module.exports=b(require("./URI"))
}else{if(typeof define==="function"&&define.amd){define(["./URI"],b)
}else{a.URITemplate=b(a.URI,a)
}}}(this,function(d,c){var f=c&&c.URITemplate;
var b=Object.prototype.hasOwnProperty;
function h(i){if(h._cache[i]){return h._cache[i]
}if(!(this instanceof h)){return new h(i)
}this.expression=i;
h._cache[i]=this;
return this
}function e(i){this.data=i;
this.cache={}
}var g=h.prototype;
var a={"":{prefix:"",separator:",",named:false,empty_name_separator:false,encode:"encode"},"+":{prefix:"",separator:",",named:false,empty_name_separator:false,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:false,empty_name_separator:false,encode:"encodeReserved"},".":{prefix:".",separator:".",named:false,empty_name_separator:false,encode:"encode"},"/":{prefix:"/",separator:"/",named:false,empty_name_separator:false,encode:"encode"},";":{prefix:";",separator:";",named:true,empty_name_separator:false,encode:"encode"},"?":{prefix:"?",separator:"&",named:true,empty_name_separator:true,encode:"encode"},"&":{prefix:"&",separator:"&",named:true,empty_name_separator:true,encode:"encode"}};
h._cache={};
h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;
h.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;
h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;
h.LITERAL_PATTERN=/[<>{}'"`^| \\]/;
h.expand=function(n,m){var r=a[n.operator];
var p=r.named?"Named":"Unnamed";
var q=n.variables;
var k=[];
var o,j,l;
for(l=0;
(j=q[l]);
l++){o=m.get(j.name);
if(!o.val.length){if(o.type){k.push("")
}continue
}if(o.type>1&&j.maxlength){throw new Error('Invalid expression: Prefix modifier not applicable to variable "'+j.name+'"')
}k.push(h["expand"+p](o,r,j.explode,j.explode&&r.separator||",",j.maxlength,j.name))
}if(k.length){return r.prefix+k.join(r.separator)
}else{return""
}};
h.expandNamed=function(s,w,t,p,m,k){var x="";
var r=w.encode;
var q=w.empty_name_separator;
var j=!s[r].length;
var u=s.type===2?"":d[r](k);
var v,o,n;
for(o=0,n=s.val.length;
o<n;
o++){if(m){v=d[r](s.val[o][1].substring(0,m));
if(s.type===2){u=d[r](s.val[o][0].substring(0,m))
}}else{if(j){v=d[r](s.val[o][1]);
if(s.type===2){u=d[r](s.val[o][0]);
s[r].push([u,v])
}else{s[r].push([undefined,v])
}}else{v=s[r][o][1];
if(s.type===2){u=s[r][o][0]
}}}if(x){x+=p
}if(!t){if(!o){x+=d[r](k)+(q||v?"=":"")
}if(s.type===2){x+=u+","
}x+=v
}else{x+=u+(q||v?"=":"")+v
}}return x
};
h.expandUnnamed=function(r,v,s,o,k){var w="";
var q=v.encode;
var p=v.empty_name_separator;
var j=!r[q].length;
var t,u,n,m;
for(n=0,m=r.val.length;
n<m;
n++){if(k){u=d[q](r.val[n][1].substring(0,k))
}else{if(j){u=d[q](r.val[n][1]);
r[q].push([r.type===2?d[q](r.val[n][0]):undefined,u])
}else{u=r[q][n][1]
}}if(w){w+=o
}if(r.type===2){if(k){t=d[q](r.val[n][0].substring(0,k))
}else{t=r[q][n][0]
}w+=t;
if(s){w+=(p||u?"=":"")
}else{w+=","
}}w+=u
}return w
};
h.noConflict=function(){if(c.URITemplate===h){c.URITemplate=f
}return h
};
g.expand=function(n){var j="";
if(!this.parts||!this.parts.length){this.parse()
}if(!(n instanceof e)){n=new e(n)
}for(var m=0,k=this.parts.length;
m<k;
m++){j+=typeof this.parts[m]==="string"?this.parts[m]:h.expand(this.parts[m],n)
}return j
};
g.parse=function(){var t=this.expression;
var m=h.EXPRESSION_PATTERN;
var k=h.VARIABLE_PATTERN;
var s=h.VARIABLE_NAME_PATTERN;
var j=h.LITERAL_PATTERN;
var p=[];
var u=0;
var v,n,r;
var w=function(i){if(i.match(j)){throw new Error('Invalid Literal "'+i+'"')
}return i
};
m.lastIndex=0;
while(true){n=m.exec(t);
if(n===null){p.push(w(t.substring(u)));
break
}else{p.push(w(t.substring(u,n.index)));
u=n.index+n[0].length
}if(!a[n[1]]){throw new Error('Unknown Operator "'+n[1]+'" in "'+n[0]+'"')
}else{if(!n[3]){throw new Error('Unclosed Expression "'+n[0]+'"')
}}v=n[2].split(",");
for(var q=0,o=v.length;
q<o;
q++){r=v[q].match(k);
if(r===null){throw new Error('Invalid Variable "'+v[q]+'" in "'+n[0]+'"')
}else{if(r[1].match(s)){throw new Error('Invalid Variable Name "'+r[1]+'" in "'+n[0]+'"')
}}v[q]={name:r[1],explode:!!r[3],maxlength:r[4]&&parseInt(r[4],10)}
}if(!v.length){throw new Error('Expression Missing Variable(s) "'+n[0]+'"')
}p.push({expression:n[0],operator:n[1],variables:v})
}if(!p.length){p.push(w(t))
}this.parts=p;
return this
};
e.prototype.get=function(m){var o=this.data;
var p={type:0,val:[],encode:[],encodeReserved:[]};
var k,j,n;
if(this.cache[m]!==undefined){return this.cache[m]
}this.cache[m]=p;
if(String(Object.prototype.toString.call(o))==="[object Function]"){n=o(m)
}else{if(String(Object.prototype.toString.call(o[m]))==="[object Function]"){n=o[m](m)
}else{n=o[m]
}}if(n===undefined||n===null){return p
}else{if(String(Object.prototype.toString.call(n))==="[object Array]"){for(k=0,j=n.length;
k<j;
k++){if(n[k]!==undefined&&n[k]!==null){p.val.push([undefined,String(n[k])])
}}if(p.val.length){p.type=3
}}else{if(String(Object.prototype.toString.call(n))==="[object Object]"){for(k in n){if(b.call(n,k)&&n[k]!==undefined&&n[k]!==null){p.val.push([k,String(n[k])])
}}if(p.val.length){p.type=2
}}else{p.type=1;
p.val.push([undefined,String(n)])
}}}return p
};
d.expand=function(l,k){var j=new h(l);
var i=j.expand(k);
return new d(i)
};
return h
}));
/*!
 * URI.js - Mutating URLs
 * jQuery Plugin
 *
 * Version: 1.18.0
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/jquery-uri-plugin.html
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function(a,b){if(typeof exports==="object"){module.exports=b(require("jquery","./URI"))
}else{if(typeof define==="function"&&define.amd){define(["jquery","./URI"],b)
}else{b(a.jQuery,a.URI)
}}}(this,function(f,i){var g={};
var d={"=":function(l,m){return l===m
},"^=":function(l,m){return !!(l+"").match(new RegExp("^"+h(m),"i"))
},"$=":function(l,m){return !!(l+"").match(new RegExp(h(m)+"$","i"))
},"*=":function(m,n,l){if(l==="directory"){m+="/"
}return !!(m+"").match(new RegExp(h(n),"i"))
},"equals:":function(l,m){return l.equals(m)
},"is:":function(l,m){return l.is(m)
}};
function h(l){return l.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")
}function e(l){var n=l.nodeName.toLowerCase();
var m=i.domAttributes[n];
if(n==="input"&&l.type!=="image"){return undefined
}return m
}function k(l){return{get:function(m){return f(m).uri()[l]()
},set:function(m,n){f(m).uri()[l](n);
return n
}}
}f.each("origin authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(m,l){g[l]=true;
f.attrHooks["uri:"+l]=k(l)
});
var j={get:function(l){return f(l).uri()
},set:function(l,m){return f(l).uri().href(m).toString()
}};
f.each(["src","href","action","uri","cite"],function(m,l){f.attrHooks[l]={set:j.set}
});
f.attrHooks.uri.get=j.get;
f.fn.uri=function(n){var p=this.first();
var m=p.get(0);
var o=e(m);
if(!o){throw new Error('Element "'+m.nodeName+'" does not have either property: href, src, action, cite')
}if(n!==undefined){var l=p.data("uri");
if(l){return l.href(n)
}if(!(n instanceof i)){n=i(n||"")
}}else{n=p.data("uri");
if(n){return n
}else{n=i(p.attr(o)||"")
}}n._dom_element=m;
n._dom_attribute=o;
n.normalize();
p.data("uri",n);
return n
};
i.prototype.build=function(l){if(this._dom_element){this._string=i.build(this._parts);
this._deferred_build=false;
this._dom_element.setAttribute(this._dom_attribute,this._string);
this._dom_element[this._dom_attribute]=this._string
}else{if(l===true){this._deferred_build=true
}else{if(l===undefined||this._deferred_build){this._string=i.build(this._parts);
this._deferred_build=false
}}}return this
};
var c;
var b=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;
function a(n,p){var l,o,m;
if(!e(n)||!p){return false
}l=p.match(b);
if(!l||(!l[5]&&l[2]!==":"&&!d[l[2]])){return false
}m=f(n).uri();
if(l[5]){return m.is(l[5])
}else{if(l[2]===":"){o=l[1].toLowerCase()+":";
if(!d[o]){return false
}return d[o](m,l[4])
}else{o=l[1].toLowerCase();
if(!g[o]){return false
}return d[l[2]](m[o](),l[4],o)
}}return false
}if(f.expr.createPseudo){c=f.expr.createPseudo(function(l){return function(m){return a(m,l)
}
})
}else{c=function(n,m,l){return a(n,l[3])
}
}f.expr[":"].uri=c;
return f
}));
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
(function(){function a(j){j.fn._fadeIn=j.fn.fadeIn;
var d=j.noop||function(){};
var n=/MSIE/.test(navigator.userAgent);
var f=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);
var k=document.documentMode||0;
var g=j.isFunction(document.createElement("div").style.setExpression);
j.blockUI=function(r){e(window,r)
};
j.unblockUI=function(r){i(window,r)
};
j.growlUI=function(x,u,v,s){var t=j('<div class="growlUI"></div>');
if(x){t.append("<h1>"+x+"</h1>")
}if(u){t.append("<h2>"+u+"</h2>")
}if(v===undefined){v=3000
}var r=function(y){y=y||{};
j.blockUI({message:t,fadeIn:typeof y.fadeIn!=="undefined"?y.fadeIn:700,fadeOut:typeof y.fadeOut!=="undefined"?y.fadeOut:1000,timeout:typeof y.timeout!=="undefined"?y.timeout:v,centerY:false,showOverlay:false,onUnblock:s,css:j.blockUI.defaults.growlCSS})
};
r();
var w=t.css("opacity");
t.mouseover(function(){r({fadeIn:0,timeout:30000});
var y=j(".blockMsg");
y.stop();
y.fadeTo(300,1)
}).mouseout(function(){j(".blockMsg").fadeOut(1000)
})
};
j.fn.block=function(s){if(this[0]===window){j.blockUI(s);
return this
}var r=j.extend({},j.blockUI.defaults,s||{});
this.each(function(){var t=j(this);
if(r.ignoreIfBlocked&&t.data("blockUI.isBlocked")){return
}t.unblock({fadeOut:0})
});
return this.each(function(){if(j.css(this,"position")=="static"){this.style.position="relative";
j(this).data("blockUI.static",true)
}this.style.zoom=1;
e(this,s)
})
};
j.fn.unblock=function(r){if(this[0]===window){j.unblockUI(r);
return this
}return this.each(function(){i(this,r)
})
};
j.blockUI.version=2.7;
j.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:true,theme:false,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:0.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:0.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:false,baseZ:1000,centerX:true,centerY:true,allowBodyStretch:true,bindEvents:true,constrainTabKey:true,fadeIn:200,fadeOut:400,timeout:0,showOverlay:true,focusInput:true,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:false};
var c=null;
var h=[];
function e(v,H){var E,P;
var C=(v==window);
var y=(H&&H.message!==undefined?H.message:undefined);
H=j.extend({},j.blockUI.defaults,H||{});
if(H.ignoreIfBlocked&&j(v).data("blockUI.isBlocked")){return
}H.overlayCSS=j.extend({},j.blockUI.defaults.overlayCSS,H.overlayCSS||{});
E=j.extend({},j.blockUI.defaults.css,H.css||{});
if(H.onOverlayClick){H.overlayCSS.cursor="pointer"
}P=j.extend({},j.blockUI.defaults.themedCSS,H.themedCSS||{});
y=y===undefined?H.message:y;
if(C&&c){i(window,{fadeOut:0})
}if(y&&typeof y!="string"&&(y.parentNode||y.jquery)){var K=y.jquery?y[0]:y;
var R={};
j(v).data("blockUI.history",R);
R.el=K;
R.parent=K.parentNode;
R.display=K.style.display;
R.position=K.style.position;
if(R.parent){R.parent.removeChild(K)
}}j(v).data("blockUI.onUnblock",H.onUnblock);
var D=H.baseZ;
var O,N,M,I;
if(n||H.forceIframe){O=j('<iframe class="blockUI" style="z-index:'+(D++)+';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+H.iframeSrc+'"></iframe>')
}else{O=j('<div class="blockUI" style="display:none"></div>')
}if(H.theme){N=j('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+(D++)+';display:none"></div>')
}else{N=j('<div class="blockUI blockOverlay" style="z-index:'+(D++)+';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>')
}if(H.theme&&C){I='<div class="blockUI '+H.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(D+10)+';display:none;position:fixed">';
if(H.title){I+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(H.title||"&nbsp;")+"</div>"
}I+='<div class="ui-widget-content ui-dialog-content"></div>';
I+="</div>"
}else{if(H.theme){I='<div class="blockUI '+H.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(D+10)+';display:none;position:absolute">';
if(H.title){I+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(H.title||"&nbsp;")+"</div>"
}I+='<div class="ui-widget-content ui-dialog-content"></div>';
I+="</div>"
}else{if(C){I='<div class="blockUI '+H.blockMsgClass+' blockPage" style="z-index:'+(D+10)+';display:none;position:fixed"></div>'
}else{I='<div class="blockUI '+H.blockMsgClass+' blockElement" style="z-index:'+(D+10)+';display:none;position:absolute"></div>'
}}}M=j(I);
if(y){if(H.theme){M.css(P);
M.addClass("ui-widget-content")
}else{M.css(E)
}}if(!H.theme){N.css(H.overlayCSS)
}N.css("position",C?"fixed":"absolute");
if(n||H.forceIframe){O.css("opacity",0)
}var B=[O,N,M],Q=C?j("body"):j(v);
j.each(B,function(){this.appendTo(Q)
});
if(H.theme&&H.draggable&&j.fn.draggable){M.draggable({handle:".ui-dialog-titlebar",cancel:"li"})
}var x=g&&(!j.support.boxModel||j("object,embed",C?null:v).length>0);
if(f||x){if(C&&H.allowBodyStretch&&j.support.boxModel){j("html,body").css("height","100%")
}if((f||!j.support.boxModel)&&!C){var G=o(v,"borderTopWidth"),L=o(v,"borderLeftWidth");
var A=G?"(0 - "+G+")":0;
var F=L?"(0 - "+L+")":0
}j.each(B,function(t,U){var z=U[0].style;
z.position="absolute";
if(t<2){if(C){z.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+H.quirksmodeOffsetHack+') + "px"')
}else{z.setExpression("height",'this.parentNode.offsetHeight + "px"')
}if(C){z.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
}else{z.setExpression("width",'this.parentNode.offsetWidth + "px"')
}if(F){z.setExpression("left",F)
}if(A){z.setExpression("top",A)
}}else{if(H.centerY){if(C){z.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')
}z.marginTop=0
}else{if(!H.centerY&&C){var S=(H.css&&H.css.top)?parseInt(H.css.top,10):0;
var T="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+S+') + "px"';
z.setExpression("top",T)
}}}})
}if(y){if(H.theme){M.find(".ui-widget-content").append(y)
}else{M.append(y)
}if(y.jquery||y.nodeType){j(y).show()
}}if((n||H.forceIframe)&&H.showOverlay){O.show()
}if(H.fadeIn){var J=H.onBlock?H.onBlock:d;
var u=(H.showOverlay&&!y)?J:d;
var r=y?J:d;
if(H.showOverlay){N._fadeIn(H.fadeIn,u)
}if(y){M._fadeIn(H.fadeIn,r)
}}else{if(H.showOverlay){N.show()
}if(y){M.show()
}if(H.onBlock){H.onBlock.bind(M)()
}}m(1,v,H);
if(C){c=M[0];
h=j(H.focusableElements,c);
if(H.focusInput){setTimeout(q,20)
}}else{b(M[0],H.centerX,H.centerY)
}if(H.timeout){var w=setTimeout(function(){if(C){j.unblockUI(H)
}else{j(v).unblock(H)
}},H.timeout);
j(v).data("blockUI.timeout",w)
}}function i(u,w){var v;
var t=(u==window);
var s=j(u);
var x=s.data("blockUI.history");
var y=s.data("blockUI.timeout");
if(y){clearTimeout(y);
s.removeData("blockUI.timeout")
}w=j.extend({},j.blockUI.defaults,w||{});
m(0,u,w);
if(w.onUnblock===null){w.onUnblock=s.data("blockUI.onUnblock");
s.removeData("blockUI.onUnblock")
}var r;
if(t){r=j("body").children().filter(".blockUI").add("body > .blockUI")
}else{r=s.find(">.blockUI")
}if(w.cursorReset){if(r.length>1){r[1].style.cursor=w.cursorReset
}if(r.length>2){r[2].style.cursor=w.cursorReset
}}if(t){c=h=null
}if(w.fadeOut){v=r.length;
r.stop().fadeOut(w.fadeOut,function(){if(--v===0){l(r,x,w,u)
}})
}else{l(r,x,w,u)
}}function l(v,z,y,x){var u=j(x);
if(u.data("blockUI.isBlocked")){return
}v.each(function(w,A){if(this.parentNode){this.parentNode.removeChild(this)
}});
if(z&&z.el){z.el.style.display=z.display;
z.el.style.position=z.position;
z.el.style.cursor="default";
if(z.parent){z.parent.appendChild(z.el)
}u.removeData("blockUI.history")
}if(u.data("blockUI.static")){u.css("position","static")
}if(typeof y.onUnblock=="function"){y.onUnblock(x,y)
}var r=j(document.body),t=r.width(),s=r[0].style.width;
r.width(t-1).width(t);
r[0].style.width=s
}function m(r,v,w){var u=v==window,t=j(v);
if(!r&&(u&&!c||!u&&!t.data("blockUI.isBlocked"))){return
}t.data("blockUI.isBlocked",r);
if(!u||!w.bindEvents||(r&&!w.showOverlay)){return
}var s="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
if(r){j(document).bind(s,w,p)
}else{j(document).unbind(s,p)
}}function p(w){if(w.type==="keydown"&&w.keyCode&&w.keyCode==9){if(c&&w.data.constrainTabKey){var t=h;
var s=!w.shiftKey&&w.target===t[t.length-1];
var r=w.shiftKey&&w.target===t[0];
if(s||r){setTimeout(function(){q(r)
},10);
return false
}}}var u=w.data;
var v=j(w.target);
if(v.hasClass("blockOverlay")&&u.onOverlayClick){u.onOverlayClick(w)
}if(v.parents("div."+u.blockMsgClass).length>0){return true
}return v.parents().children().filter("div.blockUI").length===0
}function q(r){if(!h){return
}var s=h[r===true?h.length-1:0];
if(s){s.focus()
}}function b(z,r,B){var A=z.parentNode,w=z.style;
var u=((A.offsetWidth-z.offsetWidth)/2)-o(A,"borderLeftWidth");
var v=((A.offsetHeight-z.offsetHeight)/2)-o(A,"borderTopWidth");
if(r){w.left=u>0?(u+"px"):"0"
}if(B){w.top=v>0?(v+"px"):"0"
}}function o(r,s){return parseInt(j.css(r,s),10)||0
}}if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)
}else{a(jQuery)
}})();
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;
b.ui=b.ui||{};
b.extend(b.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
b.fn.extend({focus:(function(g){return function(h,i){return typeof h==="number"?this.each(function(){var j=this;
setTimeout(function(){b(j).focus();
if(i){i.call(j)
}},h)
}):g.apply(this,arguments)
}
})(b.fn.focus),scrollParent:function(){var g;
if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!g.length?b(document):g
},zIndex:function(j){if(j!==f){return this.css("zIndex",j)
}if(this.length){var h=b(this[0]),g,i;
while(h.length&&h[0]!==document){g=h.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);
if(!isNaN(i)&&i!==0){return i
}}h=h.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
}})
},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")
}})
}});
function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();
if("area"===l){k=i.parentNode;
j=k.name;
if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false
}h=b("img[usemap=#"+j+"]")[0];
return !!h&&c(h)
}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)
}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().addBack().filter(function(){return b.css(this,"visibility")==="hidden"
}).length
}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)
}
}):function(j,h,g){return !!b.data(j,g[3])
},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))
},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);
return(h||g>=0)&&d(i,!h)
}});
if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;
if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0
}if(p){n-=parseFloat(b.css(o,"margin"+this))||0
}});
return n
}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)
}return this.each(function(){b(this).css(k,l(this,i)+"px")
})
};
b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)
}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")
})
}
})
}if(!b.fn.addBack){b.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))
}else{return g.call(this)
}}
})(b.fn.removeData)
}b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
b.support.selectstart="onselectstart" in document.createElement("div");
b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;
for(g in l){k.plugins[g]=k.plugins[g]||[];
k.plugins[g].push([j,l[g]])
}},call:function(g,j,h){var k,l=g.plugins[j];
if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return
}for(k=0;
k<l.length;
k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)
}}}},hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false
}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;
if(j[g]>0){return true
}j[g]=1;
i=(j[g]>0);
j[g]=0;
return i
}})
})(jQuery);
(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;
b.cleanData=function(f){for(var g=0,h;
(h=f[g])!=null;
g++){try{b(h).triggerHandler("remove")
}catch(j){}}c(f)
};
b.widget=function(f,g,n){var k,l,i,m,h={},j=f.split(".")[0];
f=f.split(".")[1];
k=j+"-"+f;
if(!n){n=g;
g=b.Widget
}b.expr[":"][k.toLowerCase()]=function(o){return !!b.data(o,k)
};
b[j]=b[j]||{};
l=b[j][f];
i=b[j][f]=function(o,p){if(!this._createWidget){return new i(o,p)
}if(arguments.length){this._createWidget(o,p)
}};
b.extend(i,l,{version:n.version,_proto:b.extend({},n),_childConstructors:[]});
m=new g();
m.options=b.widget.extend({},m.options);
b.each(n,function(p,o){if(!b.isFunction(o)){h[p]=o;
return
}h[p]=(function(){var q=function(){return g.prototype[p].apply(this,arguments)
},r=function(s){return g.prototype[p].apply(this,s)
};
return function(){var u=this._super,s=this._superApply,t;
this._super=q;
this._superApply=r;
t=o.apply(this,arguments);
this._super=u;
this._superApply=s;
return t
}
})()
});
i.prototype=b.widget.extend(m,{widgetEventPrefix:l?m.widgetEventPrefix:f},h,{constructor:i,namespace:j,widgetName:f,widgetFullName:k});
if(l){b.each(l._childConstructors,function(p,q){var o=q.prototype;
b.widget(o.namespace+"."+o.widgetName,i,q._proto)
});
delete l._childConstructors
}else{g._childConstructors.push(i)
}b.widget.bridge(f,i)
};
b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;
for(;
j<f;
j++){for(h in g[j]){i=g[j][h];
if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)
}else{k[h]=i
}}}}return k
};
b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;
b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;
k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;
if(i){this.each(function(){var n,m=b.data(this,h);
if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")
}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")
}n=m[k].apply(m,j);
if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;
return false
}})
}else{this.each(function(){var m=b.data(this,h);
if(m){m.option(k||{})._init()
}else{b.data(this,h,new f(k,this))
}})
}return l
}
};
b.Widget=function(){};
b.Widget._childConstructors=[];
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];
this.element=b(g);
this.uuid=a++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);
this.bindings=b();
this.hoverable=b();
this.focusable=b();
if(g!==this){b.data(g,this.widgetFullName,this);
this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()
}}});
this.document=b(g.style?g.ownerDocument:g.document||g);
this.window=b(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:b.noop,widget:function(){return this.element
},option:function(j,k){var f=j,l,h,g;
if(arguments.length===0){return b.widget.extend({},this.options)
}if(typeof j==="string"){f={};
l=j.split(".");
j=l.shift();
if(l.length){h=f[j]=b.widget.extend({},this.options[j]);
for(g=0;
g<l.length-1;
g++){h[l[g]]=h[l[g]]||{};
h=h[l[g]]
}j=l.pop();
if(k===e){return h[j]===e?null:h[j]
}h[j]=k
}else{if(k===e){return this.options[j]===e?null:this.options[j]
}f[j]=k
}}this._setOptions(f);
return this
},_setOptions:function(f){var g;
for(g in f){this._setOption(g,f[g])
}return this
},_setOption:function(f,g){this.options[f]=g;
if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(i,h,g){var j,f=this;
if(typeof i!=="boolean"){g=h;
h=i;
i=false
}if(!g){g=h;
h=this.element;
j=this.widget()
}else{h=j=b(h);
this.bindings=this.bindings.add(h)
}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
}return(typeof o==="string"?f[o]:o).apply(f,arguments)
}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++
}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];
if(k){j.delegate(k,l,m)
}else{h.bind(l,m)
}})
},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
g.unbind(f).undelegate(f)
},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)
}var f=this;
return setTimeout(g,h||0)
},_hoverable:function(f){this.hoverable=this.hoverable.add(f);
this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")
},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(f){this.focusable=this.focusable.add(f);
this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")
},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(f,g,h){var k,j,i=this.options[f];
h=h||{};
g=b.Event(g);
g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
g.target=this.element[0];
j=g.originalEvent;
if(j){for(k in j){if(!(k in g)){g[k]=j[k]
}}}this.element.trigger(g,h);
return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())
}};
b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}
}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;
i=i||{};
if(typeof i==="number"){i={duration:i}
}k=!b.isEmptyObject(i);
i.complete=l;
if(i.delay){j.delay(i.delay)
}if(k&&b.effects&&b.effects.effect[h]){j[g](i)
}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)
}else{j.queue(function(m){b(this)[g]();
if(l){l.call(j[0])
}m()
})
}}}
})
})(jQuery);
(function(b,c){var a=false;
b(document).mouseup(function(){a=false
});
b.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)
}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");
e.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(f){if(a){return
}(this._mouseStarted&&this._mouseUp(f));
this._mouseDownEvent=f;
var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
if(!g||d||!this._mouseCapture(f)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);
if(!this._mouseStarted){f.preventDefault();
return true
}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(h){return e._mouseMove(h)
};
this._mouseUpDelegate=function(h){return e._mouseUp(h)
};
b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
f.preventDefault();
a=true;
return true
},_mouseMove:function(d){if(b.ui.ie&&(!document.documentMode||document.documentMode<9)&&!d.button){return this._mouseUp(d)
}if(this._mouseStarted){this._mouseDrag(d);
return d.preventDefault()
}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))
}return !this._mouseStarted
},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(d)
}return false
},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(c){var d=this.options;
if(this.helper||d.disabled||a(c.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(c);
if(!this.handle){return false
}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(c){var d=this.options;
this.helper=this._createHelper(c);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
this._setContainment();
if(this._trigger("start",c)===false){this._clear();
return false
}this._cacheHelperProportions();
if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this._mouseDrag(c,true);
if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
}return true
},_mouseDrag:function(c,e){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!e){var d=this._uiHash();
if(this._trigger("drag",c,d)===false){this._mouseUp({});
return false
}this.position=d.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
}return false
},_mouseStop:function(d){var c=this,e=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){e=a.ui.ddmanager.drop(this,d)
}if(this.dropped){e=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!a.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!e)||(this.options.revert==="valid"&&e)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,e))){a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(c._trigger("stop",d)!==false){c._clear()
}})
}else{if(this._trigger("stop",d)!==false){this._clear()
}}return false
},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(c){return this.options.handle?!!a(c.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(d){var e=this.options,c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((e.appendTo==="parent"?this.element[0].parentNode:e.appendTo))
}if(c[0]!==this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c==="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){var c=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e,g,d,f=this.options;
if(!f.containment){this.containment=null;
return
}if(f.containment==="window"){this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(f.containment==="document"){this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(f.containment.constructor===Array){this.containment=f.containment;
return
}if(f.containment==="parent"){f.containment=this.helper[0].parentNode
}g=a(f.containment);
d=g[0];
if(!d){return
}e=g.css("overflow")!=="hidden";
this.containment=[(parseInt(g.css("borderLeftWidth"),10)||0)+(parseInt(g.css("paddingLeft"),10)||0),(parseInt(g.css("borderTopWidth"),10)||0)+(parseInt(g.css("paddingTop"),10)||0),(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(g.css("borderRightWidth"),10)||0)-(parseInt(g.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(g.css("borderBottomWidth"),10)||0)-(parseInt(g.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=g
},_convertPositionTo:function(f,g){if(!g){g=this.position
}var e=f==="absolute"?1:-1,c=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:c.scrollTop(),left:c.scrollLeft()}
}return{top:(g.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*e)),left:(g.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*e))}
},_generatePosition:function(d){var c,i,j,f,e=this.options,k=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=d.pageX,g=d.pageY;
if(!this.offset.scroll){this.offset.scroll={top:k.scrollTop(),left:k.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){i=this.relative_container.offset();
c=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]
}else{c=this.containment
}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left
}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top
}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left
}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top
}}if(e.grid){j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
g=c?((j-this.offset.click.top>=c[1]||j-this.offset.click.top>c[3])?j:((j-this.offset.click.top>=c[1])?j-e.grid[1]:j+e.grid[1])):j;
f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
h=c?((f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2])?f:((f-this.offset.click.left>=c[0])?f-e.grid[0]:f+e.grid[0])):f
}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(c,d,e){e=e||this._uiHash();
a.ui.plugin.call(this,c,[d,e]);
if(c==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,d,e)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("ui-draggable"),g=e.options,c=a.extend({},f,{item:e.element});
e.sortables=[];
a(g.connectToSortable).each(function(){var h=a.data(this,"ui-sortable");
if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();
h._trigger("activate",d,c)
}})
},stop:function(d,f){var e=a(this).data("ui-draggable"),c=a.extend({},f,{item:e.element});
a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
e.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(d);
this.instance.options.helper=this.instance.options._helper;
if(e.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",d,c)
}})
},drag:function(d,f){var e=a(this).data("ui-draggable"),c=this;
a.each(e.sortables,function(){var g=false,h=this;
this.instance.positionAbs=e.positionAbs;
this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){g=true;
a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;
this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;
if(this!==h&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(h.instance.element[0],this.instance.element[0])){g=false
}return g
})
}if(g){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return f.helper[0]
};
d.target=this.instance.currentItem[0];
this.instance._mouseCapture(d,true);
this.instance._mouseStart(d,true,true);
this.instance.offset.click.top=e.offset.click.top;
this.instance.offset.click.left=e.offset.click.left;
this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;
e._trigger("toSortable",d);
e.dropped=this.instance.element;
e.currentItem=e.element;
this.instance.fromOutside=e
}if(this.instance.currentItem){this.instance._mouseDrag(d)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",d,this.instance._uiHash(this.instance));
this.instance._mouseStop(d,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}e._trigger("fromSortable",d);
e.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(){var c=a("body"),d=a(this).data("ui-draggable").options;
if(c.css("cursor")){d._cursor=c.css("cursor")
}c.css("cursor",d.cursor)
},stop:function(){var c=a(this).data("ui-draggable").options;
if(c._cursor){a("body").css("cursor",c._cursor)
}}});
a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;
if(c.css("opacity")){f._opacity=c.css("opacity")
}c.css("opacity",f.opacity)
},stop:function(c,d){var e=a(this).data("ui-draggable").options;
if(e._opacity){a(d.helper).css("opacity",e._opacity)
}}});
a.ui.plugin.add("draggable","scroll",{start:function(){var c=a(this).data("ui-draggable");
if(c.scrollParent[0]!==document&&c.scrollParent[0].tagName!=="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(e){var d=a(this).data("ui-draggable"),f=d.options,c=false;
if(d.scrollParent[0]!==document&&d.scrollParent[0].tagName!=="HTML"){if(!f.axis||f.axis!=="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+f.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-f.scrollSpeed
}}}if(!f.axis||f.axis!=="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+f.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-f.scrollSpeed
}}}}else{if(!f.axis||f.axis!=="x"){if(e.pageY-a(document).scrollTop()<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)
}}}if(!f.axis||f.axis!=="y"){if(e.pageX-a(document).scrollLeft()<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)
}}});
a.ui.plugin.add("draggable","snap",{start:function(){var c=a(this).data("ui-draggable"),d=c.options;
c.snapElements=[];
a(d.snap.constructor!==String?(d.snap.items||":data(ui-draggable)"):d.snap).each(function(){var f=a(this),e=f.offset();
if(this!==c.element[0]){c.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:e.top,left:e.left})
}})
},drag:function(u,p){var c,z,j,k,s,n,m,A,v,h,g=a(this).data("ui-draggable"),q=g.options,y=q.snapTolerance,x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
for(v=g.snapElements.length-1;
v>=0;
v--){s=g.snapElements[v].left;
n=s+g.snapElements[v].width;
m=g.snapElements[v].top;
A=m+g.snapElements[v].height;
if(w<s-y||x>n+y||e<m-y||f>A+y||!a.contains(g.snapElements[v].item.ownerDocument,g.snapElements[v].item)){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=false;
continue
}if(q.snapMode!=="inner"){c=Math.abs(m-e)<=y;
z=Math.abs(A-f)<=y;
j=Math.abs(s-w)<=y;
k=Math.abs(n-x)<=y;
if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left
}}h=(c||z||j||k);
if(q.snapMode!=="outer"){c=Math.abs(m-f)<=y;
z=Math.abs(A-e)<=y;
j=Math.abs(s-x)<=y;
k=Math.abs(n-w)<=y;
if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left
}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=(c||z||j||k||h)
}}});
a.ui.plugin.add("draggable","stack",{start:function(){var c,e=this.data("ui-draggable").options,d=a.makeArray(a(e.stack)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||0)-(parseInt(a(f).css("zIndex"),10)||0)
});
if(!d.length){return
}c=parseInt(a(d[0]).css("zIndex"),10)||0;
a(d).each(function(f){a(this).css("zIndex",c+f)
});
this.css("zIndex",(c+d.length))
}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;
if(c.css("zIndex")){f._zIndex=c.css("zIndex")
}c.css("zIndex",f.zIndex)
},stop:function(c,d){var e=a(this).data("ui-draggable").options;
if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)
}}})
})(jQuery);
(function(b,c){function a(e,d,f){return(e>d)&&(e<(d+f))
}b.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e=this.options,d=e.accept;
this.isover=false;
this.isout=true;
this.accept=b.isFunction(d)?d:function(f){return f.is(d)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
b.ui.ddmanager.droppables[e.scope]=b.ui.ddmanager.droppables[e.scope]||[];
b.ui.ddmanager.droppables[e.scope].push(this);
(e.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var e=0,d=b.ui.ddmanager.droppables[this.options.scope];
for(;
e<d.length;
e++){if(d[e]===this){d.splice(e,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(d,e){if(d==="accept"){this.accept=b.isFunction(e)?e:function(f){return f.is(e)
}
}b.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(e){var d=b.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(d){this._trigger("activate",e,this.ui(d))
}},_deactivate:function(e){var d=b.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(d){this._trigger("deactivate",e,this.ui(d))
}},_over:function(e){var d=b.ui.ddmanager.current;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",e,this.ui(d))
}},_out:function(e){var d=b.ui.ddmanager.current;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",e,this.ui(d))
}},_drop:function(e,f){var d=f||b.ui.ddmanager.current,g=false;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var h=b.data(this,"ui-droppable");
if(h.options.greedy&&!h.options.disabled&&h.options.scope===d.options.scope&&h.accept.call(h.element[0],(d.currentItem||d.element))&&b.ui.intersect(d,b.extend(h,{offset:h.element.offset()}),h.options.tolerance)){g=true;
return false
}});
if(g){return false
}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",e,this.ui(d));
return this.element
}return false
},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}
}});
b.ui.intersect=function(q,j,o){if(!j.offset){return false
}var h,i,f=(q.positionAbs||q.position.absolute).left,e=f+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height,g=j.offset.left,d=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
switch(o){case"fit":return(g<=f&&e<=d&&p<=n&&m<=k);
case"intersect":return(g<f+(q.helperProportions.width/2)&&e-(q.helperProportions.width/2)<d&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
case"pointer":h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left);
i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top);
return a(i,p,j.proportions.height)&&a(h,g,j.proportions.width);
case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((f>=g&&f<=d)||(e>=g&&e<=d)||(f<g&&e>d));
default:return false
}};
b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(g,k){var f,e,d=b.ui.ddmanager.droppables[g.options.scope]||[],h=k?k.type:null,l=(g.currentItem||g.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(f=0;
f<d.length;
f++){if(d[f].options.disabled||(g&&!d[f].accept.call(d[f].element[0],(g.currentItem||g.element)))){continue
}for(e=0;
e<l.length;
e++){if(l[e]===d[f].element[0]){d[f].proportions.height=0;
continue droppablesLoop
}}d[f].visible=d[f].element.css("display")!=="none";
if(!d[f].visible){continue
}if(h==="mousedown"){d[f]._activate.call(d[f],k)
}d[f].offset=d[f].element.offset();
d[f].proportions={width:d[f].element[0].offsetWidth,height:d[f].element[0].offsetHeight}
}},drop:function(d,e){var f=false;
b.each((b.ui.ddmanager.droppables[d.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance)){f=this._drop.call(this,e)||f
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(d.currentItem||d.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,e)
}});
return f
},dragStart:function(d,e){d.element.parentsUntil("body").bind("scroll.droppable",function(){if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}})
},drag:function(d,e){if(d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var i,g,f,h=b.ui.intersect(d,this,this.options.tolerance),j=!h&&this.isover?"isout":(h&&!this.isover?"isover":null);
if(!j){return
}if(this.options.greedy){g=this.options.scope;
f=this.element.parents(":data(ui-droppable)").filter(function(){return b.data(this,"ui-droppable").options.scope===g
});
if(f.length){i=b.data(f[0],"ui-droppable");
i.greedyChild=(j==="isover")
}}if(i&&j==="isover"){i.isover=false;
i.isout=true;
i._out.call(i,e)
}this[j]=true;
this[j==="isout"?"isover":"isout"]=false;
this[j==="isover"?"_over":"_out"].call(this,e);
if(i&&j==="isout"){i.isout=false;
i.isover=true;
i._over.call(i,e)
}})
},dragStop:function(d,e){d.element.parentsUntil("body").unbind("scroll.droppable");
if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}}}
})(jQuery);
(function(c,d){function b(e){return parseInt(e,10)||0
}function a(e){return !isNaN(parseInt(e,10))
}c.widget("ui.resizable",c.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var l,f,j,g,e,h=this,k=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}l=this.handles.split(",");
this.handles={};
for(f=0;
f<l.length;
f++){j=c.trim(l[f]);
e="ui-resizable-"+j;
g=c("<div class='ui-resizable-handle "+e+"'></div>");
g.css({zIndex:k.zIndex});
if("se"===j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[j]=".ui-resizable-"+j;
this.element.append(g)
}}this._renderAxis=function(q){var n,o,m,p;
q=q||this.element;
for(n in this.handles){if(this.handles[n].constructor===String){this.handles[n]=c(this.handles[n],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){o=c(this.handles[n],this.element);
p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();
m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");
q.css(m,p);
this._proportionallyResize()
}if(!c(this.handles[n]).length){continue
}}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!h.resizing){if(this.className){g=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}h.axis=g&&g[1]?g[1]:"se"
}});
if(k.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return
}c(this).removeClass("ui-resizable-autohide");
h._handles.show()
}).mouseleave(function(){if(k.disabled){return
}if(!h.resizing){c(this).addClass("ui-resizable-autohide");
h._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var f,e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){e(this.element);
f=this.element;
this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);
f.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
e(this.originalElement);
return this
},_mouseCapture:function(g){var f,h,e=false;
for(f in this.handles){h=c(this.handles[f])[0];
if(h===g.target||c.contains(h,g.target)){e=true
}}return !this.options.disabled&&e
},_mouseStart:function(g){var k,h,j,i=this.options,f=this.element.position(),e=this.element;
this.resizing=true;
if((/absolute/).test(e.css("position"))){e.css({position:"absolute",top:e.css("top"),left:e.css("left")})
}else{if(e.is(".ui-draggable")){e.css({position:"absolute",top:f.top,left:f.left})
}}this._renderProxy();
k=b(this.helper.css("left"));
h=b(this.helper.css("top"));
if(i.containment){k+=c(i.containment).scrollLeft()||0;
h+=c(i.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:k,top:h};
this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalPosition={left:k,top:h};
this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};
this.originalMousePosition={left:g.pageX,top:g.pageY};
this.aspectRatio=(typeof i.aspectRatio==="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
j=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",j==="auto"?this.axis+"-resize":j);
e.addClass("ui-resizable-resizing");
this._propagate("start",g);
return true
},_mouseDrag:function(e){var k,g=this.helper,l={},i=this.originalMousePosition,m=this.axis,o=this.position.top,f=this.position.left,n=this.size.width,j=this.size.height,q=(e.pageX-i.left)||0,p=(e.pageY-i.top)||0,h=this._change[m];
if(!h){return false
}k=h.apply(this,[e,q,p]);
this._updateVirtualBoundaries(e.shiftKey);
if(this._aspectRatio||e.shiftKey){k=this._updateRatio(k,e)
}k=this._respectSize(k,e);
this._updateCache(k);
this._propagate("resize",e);
if(this.position.top!==o){l.top=this.position.top+"px"
}if(this.position.left!==f){l.left=this.position.left+"px"
}if(this.size.width!==n){l.width=this.size.width+"px"
}if(this.size.height!==j){l.height=this.size.height+"px"
}g.css(l);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!c.isEmptyObject(l)){this._trigger("resize",e,this.ui())
}return false
},_mouseStop:function(h){this.resizing=false;
var g,e,f,k,n,j,m,i=this.options,l=this;
if(this._helper){g=this._proportionallyResizeElements;
e=g.length&&(/textarea/i).test(g[0].nodeName);
f=e&&c.ui.hasScroll(g[0],"left")?0:l.sizeDiff.height;
k=e?0:l.sizeDiff.width;
n={width:(l.helper.width()-k),height:(l.helper.height()-f)};
j=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null;
m=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;
if(!i.animate){this.element.css(c.extend(n,{top:m,left:j}))
}l.helper.height(l.size.height);
l.helper.width(l.size.width);
if(this._helper&&!i.animate){this._proportionallyResize()
}}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",h);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(g){var i,h,f,k,e,j=this.options;
e={minWidth:a(j.minWidth)?j.minWidth:0,maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,minHeight:a(j.minHeight)?j.minHeight:0,maxHeight:a(j.maxHeight)?j.maxHeight:Infinity};
if(this._aspectRatio||g){i=e.minHeight*this.aspectRatio;
f=e.minWidth/this.aspectRatio;
h=e.maxHeight*this.aspectRatio;
k=e.maxWidth/this.aspectRatio;
if(i>e.minWidth){e.minWidth=i
}if(f>e.minHeight){e.minHeight=f
}if(h<e.maxWidth){e.maxWidth=h
}if(k<e.maxHeight){e.maxHeight=k
}}this._vBoundaries=e
},_updateCache:function(e){this.offset=this.helper.offset();
if(a(e.left)){this.position.left=e.left
}if(a(e.top)){this.position.top=e.top
}if(a(e.height)){this.size.height=e.height
}if(a(e.width)){this.size.width=e.width
}},_updateRatio:function(g){var h=this.position,f=this.size,e=this.axis;
if(a(g.height)){g.width=(g.height*this.aspectRatio)
}else{if(a(g.width)){g.height=(g.width/this.aspectRatio)
}}if(e==="sw"){g.left=h.left+(f.width-g.width);
g.top=null
}if(e==="nw"){g.top=h.top+(f.height-g.height);
g.left=h.left+(f.width-g.width)
}return g
},_respectSize:function(j){var g=this._vBoundaries,m=this.axis,p=a(j.width)&&g.maxWidth&&(g.maxWidth<j.width),k=a(j.height)&&g.maxHeight&&(g.maxHeight<j.height),h=a(j.width)&&g.minWidth&&(g.minWidth>j.width),n=a(j.height)&&g.minHeight&&(g.minHeight>j.height),f=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,i=/sw|nw|w/.test(m),e=/nw|ne|n/.test(m);
if(h){j.width=g.minWidth
}if(n){j.height=g.minHeight
}if(p){j.width=g.maxWidth
}if(k){j.height=g.maxHeight
}if(h&&i){j.left=f-g.minWidth
}if(p&&i){j.left=f-g.maxWidth
}if(n&&e){j.top=l-g.minHeight
}if(k&&e){j.top=l-g.maxHeight
}if(!j.width&&!j.height&&!j.left&&j.top){j.top=null
}else{if(!j.width&&!j.height&&!j.top&&j.left){j.left=null
}}return j
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var h,f,l,e,k,g=this.helper||this.element;
for(h=0;
h<this._proportionallyResizeElements.length;
h++){k=this._proportionallyResizeElements[h];
if(!this.borderDif){this.borderDif=[];
l=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")];
e=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")];
for(f=0;
f<l.length;
f++){this.borderDif[f]=(parseInt(l[f],10)||0)+(parseInt(e[f],10)||0)
}}k.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var e=this.element,f=this.options;
this.elementOffset=e.offset();
if(this._helper){this.helper=this.helper||c("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++f.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(f,e){return{width:this.originalSize.width+e}
},w:function(g,e){var f=this.originalSize,h=this.originalPosition;
return{left:h.left+e,width:f.width-e}
},n:function(h,f,e){var g=this.originalSize,i=this.originalPosition;
return{top:i.top+e,height:g.height-e}
},s:function(g,f,e){return{height:this.originalSize.height+e}
},se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
},ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
}},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);
(f!=="resize"&&this._trigger(f,e,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.ui.plugin.add("resizable","animate",{stop:function(h){var m=c(this).data("ui-resizable"),j=m.options,g=m._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width,i={width:(m.size.width-l),height:(m.size.height-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;
m.element.animate(c.extend(i,n&&k?{top:n,left:k}:{}),{duration:j.animateDuration,easing:j.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};
if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})
}m._updateCache(o);
m._propagate("resize",h)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(){var m,g,q,e,l,h,r,n=c(this).data("ui-resizable"),k=n.options,j=n.element,f=k.containment,i=(f instanceof c)?f.get(0):(/parent/.test(f))?j.parent().get(0):f;
if(!i){return
}n.containerElement=c(i);
if(/document/.test(f)||f===document){n.containerOffset={left:0,top:0};
n.containerPosition={left:0,top:0};
n.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{m=c(i);
g=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){g[p]=b(m.css("padding"+o))
});
n.containerOffset=m.offset();
n.containerPosition=m.position();
n.containerSize={height:(m.innerHeight()-g[3]),width:(m.innerWidth()-g[1])};
q=n.containerOffset;
e=n.containerSize.height;
l=n.containerSize.width;
h=(c.ui.hasScroll(i,"left")?i.scrollWidth:l);
r=(c.ui.hasScroll(i)?i.scrollHeight:e);
n.parentData={element:i,left:q.left,top:q.top,width:h,height:r}
}},resize:function(f){var k,q,j,i,l=c(this).data("ui-resizable"),h=l.options,n=l.containerOffset,m=l.position,p=l._aspectRatio||f.shiftKey,e={top:0,left:0},g=l.containerElement;
if(g[0]!==document&&(/static/).test(g.css("position"))){e=n
}if(m.left<(l._helper?n.left:0)){l.size.width=l.size.width+(l._helper?(l.position.left-n.left):(l.position.left-e.left));
if(p){l.size.height=l.size.width/l.aspectRatio
}l.position.left=h.helper?n.left:0
}if(m.top<(l._helper?n.top:0)){l.size.height=l.size.height+(l._helper?(l.position.top-n.top):l.position.top);
if(p){l.size.width=l.size.height*l.aspectRatio
}l.position.top=l._helper?n.top:0
}l.offset.left=l.parentData.left+l.position.left;
l.offset.top=l.parentData.top+l.position.top;
k=Math.abs((l._helper?l.offset.left-e.left:(l.offset.left-e.left))+l.sizeDiff.width);
q=Math.abs((l._helper?l.offset.top-e.top:(l.offset.top-n.top))+l.sizeDiff.height);
j=l.containerElement.get(0)===l.element.parent().get(0);
i=/relative|absolute/.test(l.containerElement.css("position"));
if(j&&i){k-=l.parentData.left
}if(k+l.size.width>=l.parentData.width){l.size.width=l.parentData.width-k;
if(p){l.size.height=l.size.width/l.aspectRatio
}}if(q+l.size.height>=l.parentData.height){l.size.height=l.parentData.height-q;
if(p){l.size.width=l.size.height*l.aspectRatio
}}},stop:function(){var k=c(this).data("ui-resizable"),f=k.options,l=k.containerOffset,e=k.containerPosition,g=k.containerElement,i=c(k.helper),n=i.offset(),m=i.outerWidth()-k.sizeDiff.width,j=i.outerHeight()-k.sizeDiff.height;
if(k._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:n.left-e.left-l.left,width:m,height:j})
}if(k._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:n.left-e.left-l.left,width:m,height:j})
}}});
c.ui.plugin.add("resizable","alsoResize",{start:function(){var e=c(this).data("ui-resizable"),g=e.options,f=function(h){c(h).each(function(){var i=c(this);
i.data("ui-resizable-alsoresize",{width:parseInt(i.width(),10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10)})
})
};
if(typeof(g.alsoResize)==="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];
f(g.alsoResize)
}else{c.each(g.alsoResize,function(h){f(h)
})
}}else{f(g.alsoResize)
}},resize:function(g,i){var f=c(this).data("ui-resizable"),j=f.options,h=f.originalSize,l=f.originalPosition,k={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-l.top)||0,left:(f.position.left-l.left)||0},e=function(m,n){c(m).each(function(){var q=c(this),r=c(this).data("ui-resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(o,function(s,u){var t=(r[u]||0)+(k[u]||0);
if(t&&t>=0){p[u]=t||null
}});
q.css(p)
})
};
if(typeof(j.alsoResize)==="object"&&!j.alsoResize.nodeType){c.each(j.alsoResize,function(m,n){e(m,n)
})
}else{e(j.alsoResize)
}},stop:function(){c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","ghost",{start:function(){var f=c(this).data("ui-resizable"),g=f.options,e=f.size;
f.ghost=f.originalElement.clone();
f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost==="string"?g.ghost:"");
f.ghost.appendTo(f.helper)
},resize:function(){var e=c(this).data("ui-resizable");
if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})
}},stop:function(){var e=c(this).data("ui-resizable");
if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))
}}});
c.ui.plugin.add("resizable","grid",{resize:function(){var r=c(this).data("ui-resizable"),i=r.options,s=r.size,k=r.originalSize,n=r.originalPosition,t=r.axis,f=typeof i.grid==="number"?[i.grid,i.grid]:i.grid,p=(f[0]||1),m=(f[1]||1),h=Math.round((s.width-k.width)/p)*p,g=Math.round((s.height-k.height)/m)*m,l=k.width+h,e=k.height+g,j=i.maxWidth&&(i.maxWidth<l),u=i.maxHeight&&(i.maxHeight<e),q=i.minWidth&&(i.minWidth>l),v=i.minHeight&&(i.minHeight>e);
i.grid=f;
if(q){l=l+p
}if(v){e=e+m
}if(j){l=l-p
}if(u){e=e-m
}if(/^(se|s|e)$/.test(t)){r.size.width=l;
r.size.height=e
}else{if(/^(ne)$/.test(t)){r.size.width=l;
r.size.height=e;
r.position.top=n.top-g
}else{if(/^(sw)$/.test(t)){r.size.width=l;
r.size.height=e;
r.position.left=n.left-h
}else{r.size.width=l;
r.size.height=e;
r.position.top=n.top-g;
r.position.left=n.left-h
}}}}})
})(jQuery);
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var d,c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){d=a(c.options.filter,c.element[0]);
d.addClass("ui-selectee");
d.each(function(){var e=a(this),f=e.offset();
a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=d.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(e){var d=this,c=this.options;
this.opos=[e.pageX,e.pageY];
if(this.options.disabled){return
}this.selectees=a(c.filter,this.element[0]);
this._trigger("start",e);
a(c.appendTo).append(this.helper);
this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0});
if(c.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");
f.startselected=true;
if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
d._trigger("unselecting",e,{unselecting:f.element})
}});
a(e.target).parents().addBack().each(function(){var f,g=a.data(this,"selectable-item");
if(g){f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");
g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
g.unselecting=!f;
g.selecting=f;
g.selected=f;
if(f){d._trigger("selecting",e,{selecting:g.element})
}else{d._trigger("unselecting",e,{unselecting:g.element})
}return false
}})
},_mouseDrag:function(j){this.dragged=true;
if(this.options.disabled){return
}var g,i=this,e=this.options,d=this.opos[0],h=this.opos[1],c=j.pageX,f=j.pageY;
if(d>c){g=c;
c=d;
d=g
}if(h>f){g=f;
f=h;
h=g
}this.helper.css({left:d,top:h,width:c-d,height:f-h});
this.selectees.each(function(){var k=a.data(this,"selectable-item"),l=false;
if(!k||k.element===i.element[0]){return
}if(e.tolerance==="touch"){l=(!(k.left>c||k.right<d||k.top>f||k.bottom<h))
}else{if(e.tolerance==="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<f)
}}if(l){if(k.selected){k.$element.removeClass("ui-selected");
k.selected=false
}if(k.unselecting){k.$element.removeClass("ui-unselecting");
k.unselecting=false
}if(!k.selecting){k.$element.addClass("ui-selecting");
k.selecting=true;
i._trigger("selecting",j,{selecting:k.element})
}}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");
k.selecting=false;
k.$element.addClass("ui-selected");
k.selected=true
}else{k.$element.removeClass("ui-selecting");
k.selecting=false;
if(k.startselected){k.$element.addClass("ui-unselecting");
k.unselecting=true
}i._trigger("unselecting",j,{unselecting:k.element})
}}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");
k.selected=false;
k.$element.addClass("ui-unselecting");
k.unselecting=true;
i._trigger("unselecting",j,{unselecting:k.element})
}}}});
return false
},_mouseStop:function(d){var c=this;
this.dragged=false;
a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-unselecting");
e.unselecting=false;
e.startselected=false;
c._trigger("unselected",d,{unselected:e.element})
});
a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-selecting").addClass("ui-selected");
e.selecting=false;
e.selected=true;
e.startselected=true;
c._trigger("selected",d,{selected:e.element})
});
this._trigger("stop",d);
this.helper.remove();
return false
}})
})(jQuery);
(function(b,d){function a(f,e,g){return(f>e)&&(f<(e+g))
}function c(e){return(/left|right/).test(e.css("float"))||(/inline|table-cell/).test(e.css("display"))
}b.widget("ui.sortable",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?e.axis==="x"||c(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var e=this.items.length-1;
e>=0;
e--){this.items[e].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(e,f){if(e==="disabled"){this.options[e]=f;
this.widget().toggleClass("ui-sortable-disabled",!!f)
}else{b.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(g,h){var e=null,i=false,f=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(g);
b(g.target).parents().each(function(){if(b.data(this,f.widgetName+"-item")===f){e=b(this);
return false
}});
if(b.data(g.target,f.widgetName+"-item")===f){e=b(g.target)
}if(!e){return false
}if(this.options.handle&&!h){b(this.options.handle,e).find("*").addBack().each(function(){if(this===g.target){i=true
}});
if(!i){return false
}}this.currentItem=e;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(h,j,f){var g,e,k=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(h);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
b.extend(this.offset,{click:{left:h.pageX-this.offset.left,top:h.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(h);
this.originalPageX=h.pageX;
this.originalPageY=h.pageY;
(k.cursorAt&&this._adjustOffsetFromHelper(k.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(k.containment){this._setContainment()
}if(k.cursor&&k.cursor!=="auto"){e=this.document.find("body");
this.storedCursor=e.css("cursor");
e.css("cursor",k.cursor);
this.storedStylesheet=b("<style>*{ cursor: "+k.cursor+" !important; }</style>").appendTo(e)
}if(k.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",k.opacity)
}if(k.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",k.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",h,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!f){for(g=this.containers.length-1;
g>=0;
g--){this.containers[g]._trigger("activate",h,this._uiHash(this))
}}if(b.ui.ddmanager){b.ui.ddmanager.current=this
}if(b.ui.ddmanager&&!k.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,h)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(h);
return true
},_mouseDrag:function(j){var g,h,f,l,k=this.options,e=false;
this.position=this._generatePosition(j);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-j.pageY<k.scrollSensitivity){this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop+k.scrollSpeed
}else{if(j.pageY-this.overflowOffset.top<k.scrollSensitivity){this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop-k.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-j.pageX<k.scrollSensitivity){this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft+k.scrollSpeed
}else{if(j.pageX-this.overflowOffset.left<k.scrollSensitivity){this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft-k.scrollSpeed
}}}else{if(j.pageY-b(document).scrollTop()<k.scrollSensitivity){e=b(document).scrollTop(b(document).scrollTop()-k.scrollSpeed)
}else{if(b(window).height()-(j.pageY-b(document).scrollTop())<k.scrollSensitivity){e=b(document).scrollTop(b(document).scrollTop()+k.scrollSpeed)
}}if(j.pageX-b(document).scrollLeft()<k.scrollSensitivity){e=b(document).scrollLeft(b(document).scrollLeft()-k.scrollSpeed)
}else{if(b(window).width()-(j.pageX-b(document).scrollLeft())<k.scrollSensitivity){e=b(document).scrollLeft(b(document).scrollLeft()+k.scrollSpeed)
}}}if(e!==false&&b.ui.ddmanager&&!k.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,j)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(g=this.items.length-1;
g>=0;
g--){h=this.items[g];
f=h.item[0];
l=this._intersectsWithPointer(h);
if(!l){continue
}if(h.instance!==this.currentContainer){continue
}if(f!==this.currentItem[0]&&this.placeholder[l===1?"next":"prev"]()[0]!==f&&!b.contains(this.placeholder[0],f)&&(this.options.type==="semi-dynamic"?!b.contains(this.element[0],f):true)){this.direction=l===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(h)){this._rearrange(j,h)
}else{break
}this._trigger("change",j,this._uiHash());
break
}}this._contactContainers(j);
if(b.ui.ddmanager){b.ui.ddmanager.drag(this,j)
}this._trigger("sort",j,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(g,i){if(!g){return
}if(b.ui.ddmanager&&!this.options.dropBehaviour){b.ui.ddmanager.drop(this,g)
}if(this.options.revert){var f=this,j=this.placeholder.offset(),e=this.options.axis,h={};
if(!e||e==="x"){h.left=j.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!e||e==="y"){h.top=j.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
b(this.helper).animate(h,parseInt(this.options.revert,10)||500,function(){f._clear(g)
})
}else{this._clear(g,i)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var e=this.containers.length-1;
e>=0;
e--){this.containers[e]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,this._uiHash(this));
this.containers[e].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}b.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){b(this.domPosition.prev).after(this.currentItem)
}else{b(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(g){var e=this._getItemsAsjQuery(g&&g.connected),f=[];
g=g||{};
b(e).each(function(){var h=(b(g.item||this).attr(g.attribute||"id")||"").match(g.expression||(/(.+)[\-=_](.+)/));
if(h){f.push((g.key||h[1]+"[]")+"="+(g.key&&g.expression?h[1]:h[2]))
}});
if(!f.length&&g.key){f.push(g.key+"=")
}return f.join("&")
},toArray:function(g){var e=this._getItemsAsjQuery(g&&g.connected),f=[];
g=g||{};
e.each(function(){f.push(b(g.item||this).attr(g.attribute||"id")||"")
});
return f
},_intersectsWith:function(q){var g=this.positionAbs.left,f=g+this.helperProportions.width,o=this.positionAbs.top,n=o+this.helperProportions.height,h=q.left,e=h+q.width,s=q.top,m=s+q.height,u=this.offset.click.top,k=this.offset.click.left,j=(this.options.axis==="x")||((o+u)>s&&(o+u)<m),p=(this.options.axis==="y")||((g+k)>h&&(g+k)<e),i=j&&p;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>q[this.floating?"width":"height"])){return i
}else{return(h<g+(this.helperProportions.width/2)&&f-(this.helperProportions.width/2)<e&&s<o+(this.helperProportions.height/2)&&n-(this.helperProportions.height/2)<m)
}},_intersectsWithPointer:function(g){var h=(this.options.axis==="x")||a(this.positionAbs.top+this.offset.click.top,g.top,g.height),f=(this.options.axis==="y")||a(this.positionAbs.left+this.offset.click.left,g.left,g.width),j=h&&f,e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();
if(!j){return false
}return this.floating?(((i&&i==="right")||e==="down")?2:1):(e&&(e==="down"?2:1))
},_intersectsWithSides:function(h){var f=a(this.positionAbs.top+this.offset.click.top,h.top+(h.height/2),h.height),g=a(this.positionAbs.left+this.offset.click.left,h.left+(h.width/2),h.width),e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();
if(this.floating&&i){return((i==="right"&&g)||(i==="left"&&!g))
}else{return e&&((e==="down"&&f)||(e==="up"&&!f))
}},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;
return e!==0&&(e>0?"down":"up")
},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;
return e!==0&&(e>0?"right":"left")
},refresh:function(e){this._refreshItems(e);
this.refreshPositions();
return this
},_connectWith:function(){var e=this.options;
return e.connectWith.constructor===String?[e.connectWith]:e.connectWith
},_getItemsAsjQuery:function(l){var h,g,n,m,e=[],f=[],k=this._connectWith();
if(k&&l){for(h=k.length-1;
h>=0;
h--){n=b(k[h]);
for(g=n.length-1;
g>=0;
g--){m=b.data(n[g],this.widgetFullName);
if(m&&m!==this&&!m.options.disabled){f.push([b.isFunction(m.options.items)?m.options.items.call(m.element):b(m.options.items,m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),m])
}}}}f.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(h=f.length-1;
h>=0;
h--){f[h][0].each(function(){e.push(this)
})
}return b(e)
},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=b.grep(this.items,function(g){for(var f=0;
f<e.length;
f++){if(e[f]===g.item[0]){return false
}}return true
})
},_refreshItems:function(e){this.items=[];
this.containers=[this];
var k,g,p,l,o,f,r,q,m=this.items,h=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):b(this.options.items,this.element),this]],n=this._connectWith();
if(n&&this.ready){for(k=n.length-1;
k>=0;
k--){p=b(n[k]);
for(g=p.length-1;
g>=0;
g--){l=b.data(p[g],this.widgetFullName);
if(l&&l!==this&&!l.options.disabled){h.push([b.isFunction(l.options.items)?l.options.items.call(l.element[0],e,{item:this.currentItem}):b(l.options.items,l.element),l]);
this.containers.push(l)
}}}}for(k=h.length-1;
k>=0;
k--){o=h[k][1];
f=h[k][0];
for(g=0,q=f.length;
g<q;
g++){r=b(f[g]);
r.data(this.widgetName+"-item",o);
m.push({item:r,instance:o,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(e){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var g,h,f,j;
for(g=this.items.length-1;
g>=0;
g--){h=this.items[g];
if(h.instance!==this.currentContainer&&this.currentContainer&&h.item[0]!==this.currentItem[0]){continue
}f=this.options.toleranceElement?b(this.options.toleranceElement,h.item):h.item;
if(!e){h.width=f.outerWidth();
h.height=f.outerHeight()
}j=f.offset();
h.left=j.left;
h.top=j.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(g=this.containers.length-1;
g>=0;
g--){j=this.containers[g].element.offset();
this.containers[g].containerCache.left=j.left;
this.containers[g].containerCache.top=j.top;
this.containers[g].containerCache.width=this.containers[g].element.outerWidth();
this.containers[g].containerCache.height=this.containers[g].element.outerHeight()
}}return this
},_createPlaceholder:function(f){f=f||this;
var e,g=f.options;
if(!g.placeholder||g.placeholder.constructor===String){e=g.placeholder;
g.placeholder={element:function(){var i=f.currentItem[0].nodeName.toLowerCase(),h=b("<"+i+">",f.document[0]).addClass(e||f.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(i==="tr"){f.currentItem.children().each(function(){b("<td>&#160;</td>",f.document[0]).attr("colspan",b(this).attr("colspan")||1).appendTo(h)
})
}else{if(i==="img"){h.attr("src",f.currentItem.attr("src"))
}}if(!e){h.css("visibility","hidden")
}return h
},update:function(h,i){if(e&&!g.forcePlaceholderSize){return
}if(!i.height()){i.height(f.currentItem.innerHeight()-parseInt(f.currentItem.css("paddingTop")||0,10)-parseInt(f.currentItem.css("paddingBottom")||0,10))
}if(!i.width()){i.width(f.currentItem.innerWidth()-parseInt(f.currentItem.css("paddingLeft")||0,10)-parseInt(f.currentItem.css("paddingRight")||0,10))
}}}
}f.placeholder=b(g.placeholder.element.call(f.element,f.currentItem));
f.currentItem.after(f.placeholder);
g.placeholder.update(f,f.placeholder)
},_contactContainers:function(e){var l,h,p,m,n,r,f,s,k,o,g=null,q=null;
for(l=this.containers.length-1;
l>=0;
l--){if(b.contains(this.currentItem[0],this.containers[l].element[0])){continue
}if(this._intersectsWith(this.containers[l].containerCache)){if(g&&b.contains(this.containers[l].element[0],g.element[0])){continue
}g=this.containers[l];
q=l
}else{if(this.containers[l].containerCache.over){this.containers[l]._trigger("out",e,this._uiHash(this));
this.containers[l].containerCache.over=0
}}}if(!g){return
}if(this.containers.length===1){if(!this.containers[q].containerCache.over){this.containers[q]._trigger("over",e,this._uiHash(this));
this.containers[q].containerCache.over=1
}}else{p=10000;
m=null;
o=g.floating||c(this.currentItem);
n=o?"left":"top";
r=o?"width":"height";
f=this.positionAbs[n]+this.offset.click[n];
for(h=this.items.length-1;
h>=0;
h--){if(!b.contains(this.containers[q].element[0],this.items[h].item[0])){continue
}if(this.items[h].item[0]===this.currentItem[0]){continue
}if(o&&!a(this.positionAbs.top+this.offset.click.top,this.items[h].top,this.items[h].height)){continue
}s=this.items[h].item.offset()[n];
k=false;
if(Math.abs(s-f)>Math.abs(s+this.items[h][r]-f)){k=true;
s+=this.items[h][r]
}if(Math.abs(s-f)<p){p=Math.abs(s-f);
m=this.items[h];
this.direction=k?"up":"down"
}}if(!m&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[q]){return
}m?this._rearrange(e,m,null,true):this._rearrange(e,null,this.containers[q].element,true);
this._trigger("change",e,this._uiHash());
this.containers[q]._trigger("change",e,this._uiHash(this));
this.currentContainer=this.containers[q];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[q]._trigger("over",e,this._uiHash(this));
this.containers[q].containerCache.over=1
}},_createHelper:function(f){var g=this.options,e=b.isFunction(g.helper)?b(g.helper.apply(this.element[0],[f,this.currentItem])):(g.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!e.parents("body").length){b(g.appendTo!=="parent"?g.appendTo:this.currentItem[0].parentNode)[0].appendChild(e[0])
}if(e[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!e[0].style.width||g.forceHelperSize){e.width(this.currentItem.width())
}if(!e[0].style.height||g.forceHelperSize){e.height(this.currentItem.height())
}return e
},_adjustOffsetFromHelper:function(e){if(typeof e==="string"){e=e.split(" ")
}if(b.isArray(e)){e={left:+e[0],top:+e[1]||0}
}if("left" in e){this.offset.click.left=e.left+this.margins.left
}if("right" in e){this.offset.click.left=this.helperProportions.width-e.right+this.margins.left
}if("top" in e){this.offset.click.top=e.top+this.margins.top
}if("bottom" in e){this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var e=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft();
e.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&b.ui.ie)){e={top:0,left:0}
}return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var f,h,e,g=this.options;
if(g.containment==="parent"){g.containment=this.helper[0].parentNode
}if(g.containment==="document"||g.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(g.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(g.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(g.containment)){f=b(g.containment)[0];
h=b(g.containment).offset();
e=(b(f).css("overflow")!=="hidden");
this.containment=[h.left+(parseInt(b(f).css("borderLeftWidth"),10)||0)+(parseInt(b(f).css("paddingLeft"),10)||0)-this.margins.left,h.top+(parseInt(b(f).css("borderTopWidth"),10)||0)+(parseInt(b(f).css("paddingTop"),10)||0)-this.margins.top,h.left+(e?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(b(f).css("borderLeftWidth"),10)||0)-(parseInt(b(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,h.top+(e?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(b(f).css("borderTopWidth"),10)||0)-(parseInt(b(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(g,i){if(!i){i=this.position
}var f=g==="absolute"?1:-1,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(e[0].tagName);
return{top:(i.top+this.offset.relative.top*f+this.offset.parent.top*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(h?0:e.scrollTop()))*f)),left:(i.left+this.offset.relative.left*f+this.offset.parent.left*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*f))}
},_generatePosition:function(h){var j,i,k=this.options,g=h.pageX,f=h.pageY,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=(/(html|body)/i).test(e[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){g=this.containment[0]+this.offset.click.left
}if(h.pageY-this.offset.click.top<this.containment[1]){f=this.containment[1]+this.offset.click.top
}if(h.pageX-this.offset.click.left>this.containment[2]){g=this.containment[2]+this.offset.click.left
}if(h.pageY-this.offset.click.top>this.containment[3]){f=this.containment[3]+this.offset.click.top
}}if(k.grid){j=this.originalPageY+Math.round((f-this.originalPageY)/k.grid[1])*k.grid[1];
f=this.containment?((j-this.offset.click.top>=this.containment[1]&&j-this.offset.click.top<=this.containment[3])?j:((j-this.offset.click.top>=this.containment[1])?j-k.grid[1]:j+k.grid[1])):j;
i=this.originalPageX+Math.round((g-this.originalPageX)/k.grid[0])*k.grid[0];
g=this.containment?((i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2])?i:((i-this.offset.click.left>=this.containment[0])?i-k.grid[0]:i+k.grid[0])):i
}}return{top:(f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(l?0:e.scrollTop())))),left:(g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():l?0:e.scrollLeft())))}
},_rearrange:function(j,h,f,g){f?f[0].appendChild(this.placeholder[0]):h.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?h.item[0]:h.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var e=this.counter;
this._delay(function(){if(e===this.counter){this.refreshPositions(!g)
}})
},_clear:function(f,g){this.reverting=false;
var e,h=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(e in this._storedCSS){if(this._storedCSS[e]==="auto"||this._storedCSS[e]==="static"){this._storedCSS[e]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!g){h.push(function(i){this._trigger("receive",i,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!g){h.push(function(i){this._trigger("update",i,this._uiHash())
})
}if(this!==this.currentContainer){if(!g){h.push(function(i){this._trigger("remove",i,this._uiHash())
});
h.push((function(i){return function(j){i._trigger("receive",j,this._uiHash(this))
}
}).call(this,this.currentContainer));
h.push((function(i){return function(j){i._trigger("update",j,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(e=this.containers.length-1;
e>=0;
e--){if(!g){h.push((function(i){return function(j){i._trigger("deactivate",j,this._uiHash(this))
}
}).call(this,this.containers[e]))
}if(this.containers[e].containerCache.over){h.push((function(i){return function(j){i._trigger("out",j,this._uiHash(this))
}
}).call(this,this.containers[e]));
this.containers[e].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!g){this._trigger("beforeStop",f,this._uiHash());
for(e=0;
e<h.length;
e++){h[e].call(this,f)
}this._trigger("stop",f,this._uiHash())
}this.fromOutside=false;
return false
}if(!g){this._trigger("beforeStop",f,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!g){for(e=0;
e<h.length;
e++){h[e].call(this,f)
}this._trigger("stop",f,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(b.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(e){var f=e||this;
return{helper:f.helper,placeholder:f.placeholder||b([]),position:f.position,originalPosition:f.originalPosition,offset:f.positionAbs,item:f.currentItem,sender:e?e.element:null}
}})
})(jQuery);
(function(a,c){var b="ui-effects-";
a.effects={effect:{}};
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
(function(r,g){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",k=/^([\-+])=\s*(\d+\.?\d*)/,j=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1],s[2],s[3],s[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1]*2.55,s[2]*2.55,s[3]*2.55,s[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(s){return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(s){return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(s){return[s[1],s[2]/100,s[3]/100,s[4]]
}}],h=r.Color=function(t,u,s,v){return new r.Color.fn.parse(t,u,s,v)
},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},q={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},p=h.support={},e=r("<p>")[0],d,o=r.each;
e.style.cssText="background-color:rgba(1,1,1,.5)";
p.rgba=e.style.backgroundColor.indexOf("rgba")>-1;
o(m,function(s,t){t.cache="_"+s;
t.props.alpha={idx:3,type:"percent",def:1}
});
function l(t,v,u){var s=q[v.type]||{};
if(t==null){return(u||!v.def)?null:v.def
}t=s.floor?~~t:parseFloat(t);
if(isNaN(t)){return v.def
}if(s.mod){return(t+s.mod)%s.mod
}return 0>t?0:s.max<t?s.max:t
}function i(s){var u=h(),t=u._rgba=[];
s=s.toLowerCase();
o(j,function(z,A){var x,y=A.re.exec(s),w=y&&A.parse(y),v=A.space||"rgba";
if(w){x=u[v](w);
u[m[v].cache]=x[m[v].cache];
t=u._rgba=x._rgba;
return false
}});
if(t.length){if(t.join()==="0,0,0,0"){r.extend(t,d.transparent)
}return u
}return d[s]
}h.fn=r.extend(h.prototype,{parse:function(y,w,s,x){if(y===g){this._rgba=[null,null,null,null];
return this
}if(y.jquery||y.nodeType){y=r(y).css(w);
w=g
}var v=this,u=r.type(y),t=this._rgba=[];
if(w!==g){y=[y,w,s,x];
u="array"
}if(u==="string"){return this.parse(i(y)||d._default)
}if(u==="array"){o(m.rgba.props,function(z,A){t[A.idx]=l(y[A.idx],A)
});
return this
}if(u==="object"){if(y instanceof h){o(m,function(z,A){if(y[A.cache]){v[A.cache]=y[A.cache].slice()
}})
}else{o(m,function(A,B){var z=B.cache;
o(B.props,function(C,D){if(!v[z]&&B.to){if(C==="alpha"||y[C]==null){return
}v[z]=B.to(v._rgba)
}v[z][D.idx]=l(y[C],D,true)
});
if(v[z]&&r.inArray(null,v[z].slice(0,3))<0){v[z][3]=1;
if(B.from){v._rgba=B.from(v[z])
}}})
}return this
}},is:function(u){var s=h(u),v=true,t=this;
o(m,function(w,y){var z,x=s[y.cache];
if(x){z=t[y.cache]||y.to&&y.to(t._rgba)||[];
o(y.props,function(A,B){if(x[B.idx]!=null){v=(x[B.idx]===z[B.idx]);
return v
}})
}return v
});
return v
},_space:function(){var s=[],t=this;
o(m,function(u,v){if(t[v.cache]){s.push(u)
}});
return s.pop()
},transition:function(t,z){var u=h(t),v=u._space(),w=m[v],x=this.alpha()===0?h("transparent"):this,y=x[w.cache]||w.to(x._rgba),s=y.slice();
u=u[w.cache];
o(w.props,function(D,F){var C=F.idx,B=y[C],A=u[C],E=q[F.type]||{};
if(A===null){return
}if(B===null){s[C]=A
}else{if(E.mod){if(A-B>E.mod/2){B+=E.mod
}else{if(B-A>E.mod/2){B-=E.mod
}}}s[C]=l((A-B)*z+B,F)
}});
return this[v](s)
},blend:function(v){if(this._rgba[3]===1){return this
}var u=this._rgba.slice(),t=u.pop(),s=h(v)._rgba;
return h(r.map(u,function(w,x){return(1-t)*s[x]+t*w
}))
},toRgbaString:function(){var t="rgba(",s=r.map(this._rgba,function(u,w){return u==null?(w>2?1:0):u
});
if(s[3]===1){s.pop();
t="rgb("
}return t+s.join()+")"
},toHslaString:function(){var t="hsla(",s=r.map(this.hsla(),function(u,w){if(u==null){u=w>2?1:0
}if(w&&w<3){u=Math.round(u*100)+"%"
}return u
});
if(s[3]===1){s.pop();
t="hsl("
}return t+s.join()+")"
},toHexString:function(s){var t=this._rgba.slice(),u=t.pop();
if(s){t.push(~~(u*255))
}return"#"+r.map(t,function(w){w=(w||0).toString(16);
return w.length===1?"0"+w:w
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
h.fn.parse.prototype=h.fn;
function f(u,t,s){s=(s+1)%1;
if(s*6<1){return u+(t-u)*s*6
}if(s*2<1){return t
}if(s*3<2){return u+(t-u)*((2/3)-s)*6
}return u
}m.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]
}var t=v[0]/255,y=v[1]/255,z=v[2]/255,B=v[3],A=Math.max(t,y,z),w=Math.min(t,y,z),C=A-w,D=A+w,u=D*0.5,x,E;
if(w===A){x=0
}else{if(t===A){x=(60*(y-z)/C)+360
}else{if(y===A){x=(60*(z-t)/C)+120
}else{x=(60*(t-y)/C)+240
}}}if(C===0){E=0
}else{if(u<=0.5){E=C/D
}else{E=C/(2-D)
}}return[Math.round(x)%360,E,u,B==null?1:B]
};
m.hsla.from=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]
}var w=x[0]/360,v=x[1],u=x[2],t=x[3],y=u<=0.5?u*(1+v):u+v-u*v,z=2*u-y;
return[Math.round(f(z,y,w+(1/3))*255),Math.round(f(z,y,w)*255),Math.round(f(z,y,w-(1/3))*255),t]
};
o(m,function(t,v){var u=v.props,s=v.cache,x=v.to,w=v.from;
h.fn[t]=function(C){if(x&&!this[s]){this[s]=x(this._rgba)
}if(C===g){return this[s].slice()
}var z,B=r.type(C),y=(B==="array"||B==="object")?C:arguments,A=this[s].slice();
o(u,function(D,F){var E=y[B==="object"?D:F.idx];
if(E==null){E=A[F.idx]
}A[F.idx]=l(E,F)
});
if(w){z=h(w(A));
z[s]=A;
return z
}else{return h(A)
}};
o(u,function(y,z){if(h.fn[y]){return
}h.fn[y]=function(D){var F=r.type(D),C=(y==="alpha"?(this._hsla?"hsla":"rgba"):t),B=this[C](),E=B[z.idx],A;
if(F==="undefined"){return E
}if(F==="function"){D=D.call(this,E);
F=r.type(D)
}if(D==null&&z.empty){return this
}if(F==="string"){A=k.exec(D);
if(A){D=E+parseFloat(A[2])*(A[1]==="+"?1:-1)
}}B[z.idx]=D;
return this[C](B)
}
})
});
h.hook=function(t){var s=t.split(" ");
o(s,function(u,v){r.cssHooks[v]={set:function(z,A){var x,y,w="";
if(A!=="transparent"&&(r.type(A)!=="string"||(x=i(A)))){A=h(x||A);
if(!p.rgba&&A._rgba[3]!==1){y=v==="backgroundColor"?z.parentNode:z;
while((w===""||w==="transparent")&&y&&y.style){try{w=r.css(y,"backgroundColor");
y=y.parentNode
}catch(B){}}A=A.blend(w&&w!=="transparent"?w:"_default")
}A=A.toRgbaString()
}try{z.style[v]=A
}catch(B){}}};
r.fx.step[v]=function(w){if(!w.colorInit){w.start=h(w.elem,v);
w.end=h(w.end);
w.colorInit=true
}r.cssHooks[v].set(w.elem,w.start.transition(w.end,w.pos))
}
})
};
h.hook(n);
r.cssHooks.borderColor={expand:function(t){var s={};
o(["Top","Right","Bottom","Left"],function(v,u){s["border"+u+"Color"]=t
});
return s
}};
d=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,i){a.fx.step[i]=function(j){if(j.end!=="none"&&!j.setAttr||j.pos===1&&!j.setAttr){jQuery.style(j.elem,i,j.end);
j.setAttr=true
}}
});
function g(l){var i,h,j=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,k={};
if(j&&j.length&&j[0]&&j[j[0]]){h=j.length;
while(h--){i=j[h];
if(typeof j[i]==="string"){k[a.camelCase(i)]=j[i]
}}}else{for(i in j){if(typeof j[i]==="string"){k[i]=j[i]
}}}return k
}function d(h,j){var l={},i,k;
for(i in j){k=j[i];
if(h[i]!==k){if(!f[i]){if(a.fx.step[i]||!isNaN(parseFloat(k))){l[i]=k
}}}}return l
}if(!a.fn.addBack){a.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}
}a.effects.animateClass=function(h,i,l,k){var j=a.speed(i,l,k);
return this.queue(function(){var o=a(this),m=o.attr("class")||"",n,p=j.children?o.find("*").addBack():o;
p=p.map(function(){var q=a(this);
return{el:q,start:g(this)}
});
n=function(){a.each(e,function(q,r){if(h[r]){o[r+"Class"](h[r])
}})
};
n();
p=p.map(function(){this.end=g(this.el[0]);
this.diff=d(this.start,this.end);
return this
});
o.attr("class",m);
p=p.map(function(){var s=this,q=a.Deferred(),r=a.extend({},j,{queue:false,complete:function(){q.resolve(s)
}});
this.el.animate(this.diff,r);
return q.promise()
});
a.when.apply(a,p.get()).done(function(){n();
a.each(arguments,function(){var q=this.el;
a.each(this.diff,function(r){q.css(r,"")
})
});
j.complete.call(o[0])
})
})
};
a.fn.extend({addClass:(function(h){return function(j,i,l,k){return i?a.effects.animateClass.call(this,{add:j},i,l,k):h.apply(this,arguments)
}
})(a.fn.addClass),removeClass:(function(h){return function(j,i,l,k){return arguments.length>1?a.effects.animateClass.call(this,{remove:j},i,l,k):h.apply(this,arguments)
}
})(a.fn.removeClass),toggleClass:(function(h){return function(k,j,i,m,l){if(typeof j==="boolean"||j===c){if(!i){return h.apply(this,arguments)
}else{return a.effects.animateClass.call(this,(j?{add:k}:{remove:k}),i,m,l)
}}else{return a.effects.animateClass.call(this,{toggle:k},j,i,m)
}}
})(a.fn.toggleClass),switchClass:function(h,j,i,l,k){return a.effects.animateClass.call(this,{add:j,remove:h},i,l,k)
}})
})();
(function(){a.extend(a.effects,{version:"1.10.3",save:function(g,h){for(var f=0;
f<h.length;
f++){if(h[f]!==null){g.data(b+h[f],g[0].style[h[f]])
}}},restore:function(g,j){var h,f;
for(f=0;
f<j.length;
f++){if(j[f]!==null){h=g.data(b+j[f]);
if(h===c){h=""
}g.css(j[f],h)
}}},setMode:function(f,g){if(g==="toggle"){g=f.is(":hidden")?"show":"hide"
}return g
},getBaseline:function(g,h){var i,f;
switch(g[0]){case"top":i=0;
break;
case"middle":i=0.5;
break;
case"bottom":i=1;
break;
default:i=g[0]/h.height
}switch(g[1]){case"left":f=0;
break;
case"center":f=0.5;
break;
case"right":f=1;
break;
default:f=g[1]/h.width
}return{x:f,y:i}
},createWrapper:function(g){if(g.parent().is(".ui-effects-wrapper")){return g.parent()
}var h={width:g.outerWidth(true),height:g.outerHeight(true),"float":g.css("float")},k=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:g.width(),height:g.height()},j=document.activeElement;
try{j.id
}catch(i){j=document.body
}g.wrap(k);
if(g[0]===j||a.contains(g[0],j)){a(j).focus()
}k=g.parent();
if(g.css("position")==="static"){k.css({position:"relative"});
g.css({position:"relative"})
}else{a.extend(h,{position:g.css("position"),zIndex:g.css("z-index")});
a.each(["top","left","bottom","right"],function(l,m){h[m]=g.css(m);
if(isNaN(parseInt(h[m],10))){h[m]="auto"
}});
g.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}g.css(f);
return k.css(h).show()
},removeWrapper:function(f){var g=document.activeElement;
if(f.parent().is(".ui-effects-wrapper")){f.parent().replaceWith(f);
if(f[0]===g||a.contains(f[0],g)){a(g).focus()
}}return f
},setTransition:function(g,i,f,h){h=h||{};
a.each(i,function(k,j){var l=g.cssUnit(j);
if(l[0]>0){h[j]=l[0]*f+l[1]
}});
return h
}});
function d(g,f,h,i){if(a.isPlainObject(g)){f=g;
g=g.effect
}g={effect:g};
if(f==null){f={}
}if(a.isFunction(f)){i=f;
h=null;
f={}
}if(typeof f==="number"||a.fx.speeds[f]){i=h;
h=f;
f={}
}if(a.isFunction(h)){i=h;
h=null
}if(f){a.extend(g,f)
}h=h||f.duration;
g.duration=a.fx.off?0:typeof h==="number"?h:h in a.fx.speeds?a.fx.speeds[h]:a.fx.speeds._default;
g.complete=i||f.complete;
return g
}function e(f){if(!f||typeof f==="number"||a.fx.speeds[f]){return true
}if(typeof f==="string"&&!a.effects.effect[f]){return true
}if(a.isFunction(f)){return true
}if(typeof f==="object"&&!f.effect){return true
}return false
}a.fn.extend({effect:function(){var h=d.apply(this,arguments),j=h.mode,f=h.queue,g=a.effects.effect[h.effect];
if(a.fx.off||!g){if(j){return this[j](h.duration,h.complete)
}else{return this.each(function(){if(h.complete){h.complete.call(this)
}})
}}function i(m){var n=a(this),l=h.complete,o=h.mode;
function k(){if(a.isFunction(l)){l.call(n[0])
}if(a.isFunction(m)){m()
}}if(n.is(":hidden")?o==="hide":o==="show"){n[o]();
k()
}else{g.call(n[0],h,k)
}}return f===false?this.each(i):this.queue(f||"fx",i)
},show:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)
}else{var g=d.apply(this,arguments);
g.mode="show";
return this.effect.call(this,g)
}}
})(a.fn.show),hide:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)
}else{var g=d.apply(this,arguments);
g.mode="hide";
return this.effect.call(this,g)
}}
})(a.fn.hide),toggle:(function(f){return function(h){if(e(h)||typeof h==="boolean"){return f.apply(this,arguments)
}else{var g=d.apply(this,arguments);
g.mode="toggle";
return this.effect.call(this,g)
}}
})(a.fn.toggle),cssUnit:function(f){var g=this.css(f),h=[];
a.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]
}});
return h
}})
})();
(function(){var d={};
a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,e){d[e]=function(g){return Math.pow(g,f+2)
}
});
a.extend(d,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)
},Circ:function(e){return 1-Math.sqrt(1-e*e)
},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)
},Back:function(e){return e*e*(3*e-2)
},Bounce:function(g){var e,f=4;
while(g<((e=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((e*3-2)/22-g,2)
}});
a.each(d,function(f,e){a.easing["easeIn"+f]=e;
a.easing["easeOut"+f]=function(g){return 1-e(1-g)
};
a.easing["easeInOut"+f]=function(g){return g<0.5?e(g*2)/2:1-e(g*-2+2)/2
}
})
})()
})(jQuery);
(function(d,e){var b=0,c={},a={};
c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";
a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";
d.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var f=this.options;
this.prevShow=this.prevHide=d();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0
}this._processPanels();
if(f.active<0){f.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?d():this.active.next(),content:!this.active.length?d():this.active.next()}
},_createIcons:function(){var f=this.options.icons;
if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var f;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){f.css("height","")
}},_setOption:function(f,g){if(f==="active"){this._activate(g);
return
}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(g)
}this._super(f,g);
if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)
}if(f==="icons"){this._destroyIcons();
if(g){this._createIcons()
}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)
}},_keydown:function(i){if(i.altKey||i.ctrlKey){return
}var j=d.ui.keyCode,h=this.headers.length,f=this.headers.index(i.target),g=false;
switch(i.keyCode){case j.RIGHT:case j.DOWN:g=this.headers[(f+1)%h];
break;
case j.LEFT:case j.UP:g=this.headers[(f-1+h)%h];
break;
case j.SPACE:case j.ENTER:this._eventHandler(i);
break;
case j.HOME:g=this.headers[0];
break;
case j.END:g=this.headers[h-1];
break
}if(g){d(i.target).attr("tabIndex",-1);
d(g).attr("tabIndex",0);
g.focus();
i.preventDefault()
}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()
}},refresh:function(){var f=this.options;
this._processPanels();
if((f.active===false&&f.collapsible===true)||!this.headers.length){f.active=false;
this.active=d()
}else{if(f.active===false){this._activate(0)
}else{if(this.active.length&&!d.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){f.active=false;
this.active=d()
}else{this._activate(Math.max(0,f.active-1))
}}else{f.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var j,h=this.options,g=h.heightStyle,i=this.element.parent(),f=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b);
this.active=this._findActive(h.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(n){var o=d(this),m=o.attr("id"),k=o.next(),l=k.attr("id");
if(!m){m=f+"-header-"+n;
o.attr("id",m)
}if(!l){l=f+"-panel-"+n;
k.attr("id",l)
}o.attr("aria-controls",l);
k.attr("aria-labelledby",m)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._createIcons();
this._setupEvents(h.event);
if(g==="fill"){j=i.height();
this.element.siblings(":visible").each(function(){var l=d(this),k=l.css("position");
if(k==="absolute"||k==="fixed"){return
}j-=l.outerHeight(true)
});
this.headers.each(function(){j-=d(this).outerHeight(true)
});
this.headers.next().each(function(){d(this).height(Math.max(0,j-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(g==="auto"){j=0;
this.headers.next().each(function(){j=Math.max(j,d(this).css("height","").height())
}).height(j)
}}},_activate:function(f){var g=this._findActive(f)[0];
if(g===this.active[0]){return
}g=g||this.active[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})
},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()
},_setupEvents:function(g){var f={keydown:"_keydown"};
if(g){d.each(g.split(" "),function(i,h){f[h]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,f);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(f){var n=this.options,i=this.active,j=d(f.currentTarget),l=j[0]===i[0],g=l&&n.collapsible,h=g?d():j.next(),k=i.next(),m={oldHeader:i,oldPanel:k,newHeader:g?d():j,newPanel:h};
f.preventDefault();
if((l&&!n.collapsible)||(this._trigger("beforeActivate",f,m)===false)){return
}n.active=g?false:this.headers.index(j);
this.active=l?d():j;
this._toggle(m);
i.removeClass("ui-accordion-header-active ui-state-active");
if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
}if(!l){j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(n.icons){j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
}j.next().addClass("ui-accordion-content-active")
}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=f;
this.prevHide=g;
if(this.options.animate){this._animate(f,g,h)
}else{g.hide();
f.show();
this._toggleComplete(h)
}g.attr({"aria-expanded":"false","aria-hidden":"true"});
g.prev().attr("aria-selected","false");
if(f.length&&g.length){g.prev().attr("tabIndex",-1)
}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(f,n,j){var m,l,i,k=this,o=0,p=f.length&&(!n.length||(f.index()<n.index())),h=this.options.animate||{},q=p&&h.down||h,g=function(){k._toggleComplete(j)
};
if(typeof q==="number"){i=q
}if(typeof q==="string"){l=q
}l=l||q.easing||h.easing;
i=i||q.duration||h.duration;
if(!n.length){return f.animate(a,i,l,g)
}if(!f.length){return n.animate(c,i,l,g)
}m=f.show().outerHeight();
n.animate(c,{duration:i,easing:l,step:function(r,s){s.now=Math.round(r)
}});
f.hide().animate(a,{duration:i,easing:l,complete:g,step:function(r,s){s.now=Math.round(r);
if(s.prop!=="height"){o+=s.now
}else{if(k.options.heightStyle!=="content"){s.now=Math.round(m-n.outerHeight()-o);
o=0
}}}})
},_toggleComplete:function(g){var f=g.oldPanel;
f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(f.length){f.parent()[0].className=f.parent()[0].className
}this._trigger("activate",null,g)
}})
})(jQuery);
(function(a,b){var c=0;
a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var f,d,g,i=this.element[0].nodeName.toLowerCase(),h=i==="textarea",e=i==="input";
this.isMultiLine=h?true:e?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[h||e?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(j){if(this.element.prop("readOnly")){f=true;
g=true;
d=true;
return
}f=false;
g=false;
d=false;
var k=a.ui.keyCode;
switch(j.keyCode){case k.PAGE_UP:f=true;
this._move("previousPage",j);
break;
case k.PAGE_DOWN:f=true;
this._move("nextPage",j);
break;
case k.UP:f=true;
this._keyEvent("previous",j);
break;
case k.DOWN:f=true;
this._keyEvent("next",j);
break;
case k.ENTER:case k.NUMPAD_ENTER:if(this.menu.active){f=true;
j.preventDefault();
this.menu.select(j)
}break;
case k.TAB:if(this.menu.active){this.menu.select(j)
}break;
case k.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(j);
j.preventDefault()
}break;
default:d=true;
this._searchTimeout(j);
break
}},keypress:function(j){if(f){f=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){j.preventDefault()
}return
}if(d){return
}var k=a.ui.keyCode;
switch(j.keyCode){case k.PAGE_UP:this._move("previousPage",j);
break;
case k.PAGE_DOWN:this._move("nextPage",j);
break;
case k.UP:this._keyEvent("previous",j);
break;
case k.DOWN:this._keyEvent("next",j);
break
}},input:function(j){if(g){g=false;
j.preventDefault();
return
}this._searchTimeout(j)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(j){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(j);
this._change(j)
}});
this._initSource();
this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(j){j.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var k=this.menu.element[0];
if(!a(j.target).closest(".ui-menu-item").length){this._delay(function(){var l=this;
this.document.one("mousedown",function(m){if(m.target!==l.element[0]&&m.target!==k&&!a.contains(k,m.target)){l.close()
}})
})
}},menufocus:function(k,l){if(this.isNewMenu){this.isNewMenu=false;
if(k.originalEvent&&/^mouse/.test(k.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){a(k.target).trigger(k.originalEvent)
});
return
}}var j=l.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",k,{item:j})){if(k.originalEvent&&/^key/.test(k.originalEvent.type)){this._value(j.value)
}}else{this.liveRegion.text(j.value)
}},menuselect:function(l,m){var k=m.item.data("ui-autocomplete-item"),j=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=j;
this._delay(function(){this.previous=j;
this.selectedItem=k
})
}if(false!==this._trigger("select",l,{item:k})){this._value(k.value)
}this.term=this._value();
this.close(l);
this.selectedItem=k
}});
this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(d,e){this._super(d,e);
if(d==="source"){this._initSource()
}if(d==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var d=this.options.appendTo;
if(d){d=d.jquery||d.nodeType?a(d):this.document.find(d).eq(0)
}if(!d){d=this.element.closest(".ui-front")
}if(!d.length){d=this.document[0].body
}return d
},_initSource:function(){var f,d,e=this;
if(a.isArray(this.options.source)){f=this.options.source;
this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))
}
}else{if(typeof this.options.source==="string"){d=this.options.source;
this.source=function(h,g){if(e.xhr){e.xhr.abort()
}e.xhr=a.ajax({url:d,data:h,dataType:"json",success:function(i){g(i)
},error:function(){g([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(d){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,d)
}},this.options.delay)
},search:function(e,d){e=e!=null?e:this._value();
this.term=this._value();
if(e.length<this.options.minLength){return this.close(d)
}if(this._trigger("search",d)===false){return
}return this._search(e)
},_search:function(d){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:d},this._response())
},_response:function(){var e=this,d=++c;
return function(f){if(d===c){e.__response(f)
}e.pending--;
if(!e.pending){e.element.removeClass("ui-autocomplete-loading")
}}
},__response:function(d){if(d){d=this._normalize(d)
}this._trigger("response",null,{content:d});
if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);
this._trigger("open")
}else{this._close()
}},close:function(d){this.cancelSearch=true;
this._close(d)
},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",d)
}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})
}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d
}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}
}return a.extend({label:e.label||e.value,value:e.value||e.label},e)
})
},_suggest:function(d){var e=this.menu.element.empty();
this._renderMenu(e,d);
this.isNewMenu=true;
this.menu.refresh();
e.show();
this._resizeMenu();
e.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var d=this.menu.element;
d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(e,d){var f=this;
a.each(d,function(g,h){f._renderItemData(e,h)
})
},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)
},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);
return
}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);
this.menu.blur();
return
}this.menu[e](d)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);
d.preventDefault()
}}});
a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");
return a.grep(f,function(g){return e.test(g.label||g.value||g)
})
}});
a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(e){var d;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(e&&e.length){d=this.options.messages.results(e.length)
}else{d=this.options.messages.noResults
}this.liveRegion.text(d)
}})
}(jQuery));
(function(f,b){var k,e,a,h,i="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var l=f(this);
setTimeout(function(){l.find(":ui-button").button("refresh")
},1)
},d=function(m){var l=m.name,n=m.form,o=f([]);
if(l){l=l.replace(/'/g,"\\'");
if(n){o=f(n).find("[name='"+l+"']")
}else{o=f("[name='"+l+"']",m.ownerDocument).filter(function(){return !this.form
})
}}return o
};
f.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var o=this,m=this.options,p=this.type==="checkbox"||this.type==="radio",n=!p?"ui-state-active":"",l="ui-state-focus";
if(m.label===null){m.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(m.disabled){return
}if(this===k){f(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(m.disabled){return
}f(this).removeClass(n)
}).bind("click"+this.eventNamespace,function(q){if(m.disabled){q.preventDefault();
q.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(l)
}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(l)
});
if(p){this.element.bind("change"+this.eventNamespace,function(){if(h){return
}o.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(q){if(m.disabled){return
}h=false;
e=q.pageX;
a=q.pageY
}).bind("mouseup"+this.eventNamespace,function(q){if(m.disabled){return
}if(e!==q.pageX||a!==q.pageY){h=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false
}f(this).addClass("ui-state-active");
o.buttonElement.attr("aria-pressed","true");
var q=o.element[0];
d(q).not(q).map(function(){return f(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(m.disabled){return false
}f(this).addClass("ui-state-active");
k=this;
o.document.one("mouseup",function(){k=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(m.disabled){return false
}f(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(q){if(m.disabled){return false
}if(q.keyCode===f.ui.keyCode.SPACE||q.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===f.ui.keyCode.SPACE){f(this).click()
}})
}}}this._setOption("disabled",m.disabled);
this._resetButton()
},_determineButtonType:function(){var l,n,m;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){l=this.element.parents().last();
n="label[for='"+this.element.attr("id")+"']";
this.buttonElement=l.find(n);
if(!this.buttonElement.length){l=l.length?l.siblings():this.element.siblings();
this.buttonElement=l.filter(n);
if(!this.buttonElement.length){this.buttonElement=l.find(n)
}}this.element.addClass("ui-helper-hidden-accessible");
m=this.element.is(":checked");
if(m){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",m)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(i+" "+c+" "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(l,m){this._super(l,m);
if(l==="disabled"){if(m){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var l=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(l!==this.options.disabled){this._setOption("disabled",l)
}if(this.type==="radio"){d(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var p=this.buttonElement.removeClass(g),n=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(),m=this.options.icons,l=m.primary&&m.secondary,o=[];
if(m.primary||m.secondary){if(this.options.text){o.push("ui-button-text-icon"+(l?"s":(m.primary?"-primary":"-secondary")))
}if(m.primary){p.prepend("<span class='ui-button-icon-primary ui-icon "+m.primary+"'></span>")
}if(m.secondary){p.append("<span class='ui-button-icon-secondary ui-icon "+m.secondary+"'></span>")
}if(!this.options.text){o.push(l?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){p.attr("title",f.trim(n))
}}}else{o.push("ui-button-text-only")
}p.addClass(o.join(" "))
}});
f.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)
}this._super(l,m)
},refresh:function(){var l=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(l?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(e,g){e.extend(e.ui,{datepicker:{version:"1.10.3"}});
var f="datepicker",c;
function b(){this._curInst=null;
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
e.extend(this._defaults,this.regional[""]);
this.dpDiv=d(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}e.extend(b.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(h){a(this._defaults,h||{});
return this
},_attachDatepicker:function(k,h){var l,j,i;
l=k.nodeName.toLowerCase();
j=(l==="div"||l==="span");
if(!k.id){this.uuid+=1;
k.id="dp"+this.uuid
}i=this._newInst(e(k),j);
i.settings=e.extend({},h||{});
if(l==="input"){this._connectDatepicker(k,i)
}else{if(j){this._inlineDatepicker(k,i)
}}},_newInst:function(i,h){var j=i[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:j,input:i,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:h,dpDiv:(!h?this.dpDiv:d(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(j,i){var h=e(j);
i.append=e([]);
i.trigger=e([]);
if(h.hasClass(this.markerClassName)){return
}this._attachments(h,i);
h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(i);
e.data(j,f,i);
if(i.settings.disabled){this._disableDatepicker(j)
}},_attachments:function(j,m){var i,l,h,n=this._get(m,"appendText"),k=this._get(m,"isRTL");
if(m.append){m.append.remove()
}if(n){m.append=e("<span class='"+this._appendClass+"'>"+n+"</span>");
j[k?"before":"after"](m.append)
}j.unbind("focus",this._showDatepicker);
if(m.trigger){m.trigger.remove()
}i=this._get(m,"showOn");
if(i==="focus"||i==="both"){j.focus(this._showDatepicker)
}if(i==="button"||i==="both"){l=this._get(m,"buttonText");
h=this._get(m,"buttonImage");
m.trigger=e(this._get(m,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:h,alt:l,title:l}):e("<button type='button'></button>").addClass(this._triggerClass).html(!h?l:e("<img/>").attr({src:h,alt:l,title:l})));
j[k?"before":"after"](m.trigger);
m.trigger.click(function(){if(e.datepicker._datepickerShowing&&e.datepicker._lastInput===j[0]){e.datepicker._hideDatepicker()
}else{if(e.datepicker._datepickerShowing&&e.datepicker._lastInput!==j[0]){e.datepicker._hideDatepicker();
e.datepicker._showDatepicker(j[0])
}else{e.datepicker._showDatepicker(j[0])
}}return false
})
}},_autoSize:function(o){if(this._get(o,"autoSize")&&!o.inline){var l,j,k,n,m=new Date(2009,12-1,20),h=this._get(o,"dateFormat");
if(h.match(/[DM]/)){l=function(i){j=0;
k=0;
for(n=0;
n<i.length;
n++){if(i[n].length>j){j=i[n].length;
k=n
}}return k
};
m.setMonth(l(this._get(o,(h.match(/MM/)?"monthNames":"monthNamesShort"))));
m.setDate(l(this._get(o,(h.match(/DD/)?"dayNames":"dayNamesShort")))+20-m.getDay())
}o.input.attr("size",this._formatDate(o,m).length)
}},_inlineDatepicker:function(i,h){var j=e(i);
if(j.hasClass(this.markerClassName)){return
}j.addClass(this.markerClassName).append(h.dpDiv);
e.data(i,f,h);
this._setDate(h,this._getDefaultDate(h),true);
this._updateDatepicker(h);
this._updateAlternate(h);
if(h.settings.disabled){this._disableDatepicker(i)
}h.dpDiv.css("display","block")
},_dialogDatepicker:function(o,i,m,j,n){var h,r,l,q,p,k=this._dialogInst;
if(!k){this.uuid+=1;
h="dp"+this.uuid;
this._dialogInput=e("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
e("body").append(this._dialogInput);
k=this._dialogInst=this._newInst(this._dialogInput,false);
k.settings={};
e.data(this._dialogInput[0],f,k)
}a(k.settings,j||{});
i=(i&&i.constructor===Date?this._formatDate(k,i):i);
this._dialogInput.val(i);
this._pos=(n?(n.length?n:[n.pageX,n.pageY]):null);
if(!this._pos){r=document.documentElement.clientWidth;
l=document.documentElement.clientHeight;
q=document.documentElement.scrollLeft||document.body.scrollLeft;
p=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(r/2)-100+q,(l/2)-150+p]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
k.settings.onSelect=m;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(e.blockUI){e.blockUI(this.dpDiv)
}e.data(this._dialogInput[0],f,k);
return this
},_destroyDatepicker:function(j){var k,h=e(j),i=e.data(j,f);
if(!h.hasClass(this.markerClassName)){return
}k=j.nodeName.toLowerCase();
e.removeData(j,f);
if(k==="input"){i.append.remove();
i.trigger.remove();
h.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(k==="div"||k==="span"){h.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(k){var l,j,h=e(k),i=e.data(k,f);
if(!h.hasClass(this.markerClassName)){return
}l=k.nodeName.toLowerCase();
if(l==="input"){k.disabled=false;
i.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(l==="div"||l==="span"){j=h.children("."+this._inlineClass);
j.children().removeClass("ui-state-disabled");
j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=e.map(this._disabledInputs,function(m){return(m===k?null:m)
})
},_disableDatepicker:function(k){var l,j,h=e(k),i=e.data(k,f);
if(!h.hasClass(this.markerClassName)){return
}l=k.nodeName.toLowerCase();
if(l==="input"){k.disabled=true;
i.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(l==="div"||l==="span"){j=h.children("."+this._inlineClass);
j.children().addClass("ui-state-disabled");
j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=e.map(this._disabledInputs,function(m){return(m===k?null:m)
});
this._disabledInputs[this._disabledInputs.length]=k
},_isDisabledDatepicker:function(j){if(!j){return false
}for(var h=0;
h<this._disabledInputs.length;
h++){if(this._disabledInputs[h]===j){return true
}}return false
},_getInst:function(i){try{return e.data(i,f)
}catch(h){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(n,i,m){var j,h,l,o,k=this._getInst(n);
if(arguments.length===2&&typeof i==="string"){return(i==="defaults"?e.extend({},e.datepicker._defaults):(k?(i==="all"?e.extend({},k.settings):this._get(k,i)):null))
}j=i||{};
if(typeof i==="string"){j={};
j[i]=m
}if(k){if(this._curInst===k){this._hideDatepicker()
}h=this._getDateDatepicker(n,true);
l=this._getMinMaxDate(k,"min");
o=this._getMinMaxDate(k,"max");
a(k.settings,j);
if(l!==null&&j.dateFormat!==g&&j.minDate===g){k.settings.minDate=this._formatDate(k,l)
}if(o!==null&&j.dateFormat!==g&&j.maxDate===g){k.settings.maxDate=this._formatDate(k,o)
}if("disabled" in j){if(j.disabled){this._disableDatepicker(n)
}else{this._enableDatepicker(n)
}}this._attachments(e(n),k);
this._autoSize(k);
this._setDate(k,h);
this._updateAlternate(k);
this._updateDatepicker(k)
}},_changeDatepicker:function(j,h,i){this._optionDatepicker(j,h,i)
},_refreshDatepicker:function(i){var h=this._getInst(i);
if(h){this._updateDatepicker(h)
}},_setDateDatepicker:function(j,h){var i=this._getInst(j);
if(i){this._setDate(i,h);
this._updateDatepicker(i);
this._updateAlternate(i)
}},_getDateDatepicker:function(j,h){var i=this._getInst(j);
if(i&&!i.inline){this._setDateFromField(i,h)
}return(i?this._getDate(i):null)
},_doKeyDown:function(k){var i,h,m,l=e.datepicker._getInst(k.target),n=true,j=l.dpDiv.is(".ui-datepicker-rtl");
l._keyEvent=true;
if(e.datepicker._datepickerShowing){switch(k.keyCode){case 9:e.datepicker._hideDatepicker();
n=false;
break;
case 13:m=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",l.dpDiv);
if(m[0]){e.datepicker._selectDay(k.target,l.selectedMonth,l.selectedYear,m[0])
}i=e.datepicker._get(l,"onSelect");
if(i){h=e.datepicker._formatDate(l);
i.apply((l.input?l.input[0]:null),[h,l])
}else{e.datepicker._hideDatepicker()
}return false;
case 27:e.datepicker._hideDatepicker();
break;
case 33:e.datepicker._adjustDate(k.target,(k.ctrlKey?-e.datepicker._get(l,"stepBigMonths"):-e.datepicker._get(l,"stepMonths")),"M");
break;
case 34:e.datepicker._adjustDate(k.target,(k.ctrlKey?+e.datepicker._get(l,"stepBigMonths"):+e.datepicker._get(l,"stepMonths")),"M");
break;
case 35:if(k.ctrlKey||k.metaKey){e.datepicker._clearDate(k.target)
}n=k.ctrlKey||k.metaKey;
break;
case 36:if(k.ctrlKey||k.metaKey){e.datepicker._gotoToday(k.target)
}n=k.ctrlKey||k.metaKey;
break;
case 37:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,(j?+1:-1),"D")
}n=k.ctrlKey||k.metaKey;
if(k.originalEvent.altKey){e.datepicker._adjustDate(k.target,(k.ctrlKey?-e.datepicker._get(l,"stepBigMonths"):-e.datepicker._get(l,"stepMonths")),"M")
}break;
case 38:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,-7,"D")
}n=k.ctrlKey||k.metaKey;
break;
case 39:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,(j?-1:+1),"D")
}n=k.ctrlKey||k.metaKey;
if(k.originalEvent.altKey){e.datepicker._adjustDate(k.target,(k.ctrlKey?+e.datepicker._get(l,"stepBigMonths"):+e.datepicker._get(l,"stepMonths")),"M")
}break;
case 40:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,+7,"D")
}n=k.ctrlKey||k.metaKey;
break;
default:n=false
}}else{if(k.keyCode===36&&k.ctrlKey){e.datepicker._showDatepicker(this)
}else{n=false
}}if(n){k.preventDefault();
k.stopPropagation()
}},_doKeyPress:function(j){var i,h,k=e.datepicker._getInst(j.target);
if(e.datepicker._get(k,"constrainInput")){i=e.datepicker._possibleChars(e.datepicker._get(k,"dateFormat"));
h=String.fromCharCode(j.charCode==null?j.keyCode:j.charCode);
return j.ctrlKey||j.metaKey||(h<" "||!i||i.indexOf(h)>-1)
}},_doKeyUp:function(j){var h,k=e.datepicker._getInst(j.target);
if(k.input.val()!==k.lastVal){try{h=e.datepicker.parseDate(e.datepicker._get(k,"dateFormat"),(k.input?k.input.val():null),e.datepicker._getFormatConfig(k));
if(h){e.datepicker._setDateFromField(k);
e.datepicker._updateAlternate(k);
e.datepicker._updateDatepicker(k)
}}catch(i){}}return true
},_showDatepicker:function(i){i=i.target||i;
if(i.nodeName.toLowerCase()!=="input"){i=e("input",i.parentNode)[0]
}if(e.datepicker._isDisabledDatepicker(i)||e.datepicker._lastInput===i){return
}var k,o,j,m,n,h,l;
k=e.datepicker._getInst(i);
if(e.datepicker._curInst&&e.datepicker._curInst!==k){e.datepicker._curInst.dpDiv.stop(true,true);
if(k&&e.datepicker._datepickerShowing){e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])
}}o=e.datepicker._get(k,"beforeShow");
j=o?o.apply(i,[i,k]):{};
if(j===false){return
}a(k.settings,j);
k.lastVal=null;
e.datepicker._lastInput=i;
e.datepicker._setDateFromField(k);
if(e.datepicker._inDialog){i.value=""
}if(!e.datepicker._pos){e.datepicker._pos=e.datepicker._findPos(i);
e.datepicker._pos[1]+=i.offsetHeight
}m=false;
e(i).parents().each(function(){m|=e(this).css("position")==="fixed";
return !m
});
n={left:e.datepicker._pos[0],top:e.datepicker._pos[1]};
e.datepicker._pos=null;
k.dpDiv.empty();
k.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
e.datepicker._updateDatepicker(k);
n=e.datepicker._checkOffset(k,n,m);
k.dpDiv.css({position:(e.datepicker._inDialog&&e.blockUI?"static":(m?"fixed":"absolute")),display:"none",left:n.left+"px",top:n.top+"px"});
if(!k.inline){h=e.datepicker._get(k,"showAnim");
l=e.datepicker._get(k,"duration");
k.dpDiv.zIndex(e(i).zIndex()+1);
e.datepicker._datepickerShowing=true;
if(e.effects&&e.effects.effect[h]){k.dpDiv.show(h,e.datepicker._get(k,"showOptions"),l)
}else{k.dpDiv[h||"show"](h?l:null)
}if(e.datepicker._shouldFocusInput(k)){k.input.focus()
}e.datepicker._curInst=k
}},_updateDatepicker:function(j){this.maxRows=4;
c=j;
j.dpDiv.empty().append(this._generateHTML(j));
this._attachHandlers(j);
j.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var l,h=this._getNumberOfMonths(j),k=h[1],i=17;
j.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(k>1){j.dpDiv.addClass("ui-datepicker-multi-"+k).css("width",(i*k)+"em")
}j.dpDiv[(h[0]!==1||h[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
j.dpDiv[(this._get(j,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(j===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(j)){j.input.focus()
}if(j.yearshtml){l=j.yearshtml;
setTimeout(function(){if(l===j.yearshtml&&j.yearshtml){j.dpDiv.find("select.ui-datepicker-year:first").replaceWith(j.yearshtml)
}l=j.yearshtml=null
},0)
}},_shouldFocusInput:function(h){return h.input&&h.input.is(":visible")&&!h.input.is(":disabled")&&!h.input.is(":focus")
},_checkOffset:function(m,k,j){var l=m.dpDiv.outerWidth(),p=m.dpDiv.outerHeight(),o=m.input?m.input.outerWidth():0,h=m.input?m.input.outerHeight():0,n=document.documentElement.clientWidth+(j?0:e(document).scrollLeft()),i=document.documentElement.clientHeight+(j?0:e(document).scrollTop());
k.left-=(this._get(m,"isRTL")?(l-o):0);
k.left-=(j&&k.left===m.input.offset().left)?e(document).scrollLeft():0;
k.top-=(j&&k.top===(m.input.offset().top+h))?e(document).scrollTop():0;
k.left-=Math.min(k.left,(k.left+l>n&&n>l)?Math.abs(k.left+l-n):0);
k.top-=Math.min(k.top,(k.top+p>i&&i>p)?Math.abs(p+h):0);
return k
},_findPos:function(k){var h,j=this._getInst(k),i=this._get(j,"isRTL");
while(k&&(k.type==="hidden"||k.nodeType!==1||e.expr.filters.hidden(k))){k=k[i?"previousSibling":"nextSibling"]
}h=e(k).offset();
return[h.left,h.top]
},_hideDatepicker:function(j){var i,m,l,h,k=this._curInst;
if(!k||(j&&k!==e.data(j,f))){return
}if(this._datepickerShowing){i=this._get(k,"showAnim");
m=this._get(k,"duration");
l=function(){e.datepicker._tidyDialog(k)
};
if(e.effects&&(e.effects.effect[i]||e.effects[i])){k.dpDiv.hide(i,e.datepicker._get(k,"showOptions"),m,l)
}else{k.dpDiv[(i==="slideDown"?"slideUp":(i==="fadeIn"?"fadeOut":"hide"))]((i?m:null),l)
}if(!i){l()
}this._datepickerShowing=false;
h=this._get(k,"onClose");
if(h){h.apply((k.input?k.input[0]:null),[(k.input?k.input.val():""),k])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(e.blockUI){e.unblockUI();
e("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(h){h.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(i){if(!e.datepicker._curInst){return
}var h=e(i.target),j=e.datepicker._getInst(h[0]);
if(((h[0].id!==e.datepicker._mainDivId&&h.parents("#"+e.datepicker._mainDivId).length===0&&!h.hasClass(e.datepicker.markerClassName)&&!h.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&!(e.datepicker._inDialog&&e.blockUI)))||(h.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==j)){e.datepicker._hideDatepicker()
}},_adjustDate:function(l,k,j){var i=e(l),h=this._getInst(i[0]);
if(this._isDisabledDatepicker(i[0])){return
}this._adjustInstDate(h,k+(j==="M"?this._get(h,"showCurrentAtPos"):0),j);
this._updateDatepicker(h)
},_gotoToday:function(k){var h,j=e(k),i=this._getInst(j[0]);
if(this._get(i,"gotoCurrent")&&i.currentDay){i.selectedDay=i.currentDay;
i.drawMonth=i.selectedMonth=i.currentMonth;
i.drawYear=i.selectedYear=i.currentYear
}else{h=new Date();
i.selectedDay=h.getDate();
i.drawMonth=i.selectedMonth=h.getMonth();
i.drawYear=i.selectedYear=h.getFullYear()
}this._notifyChange(i);
this._adjustDate(j)
},_selectMonthYear:function(l,h,k){var j=e(l),i=this._getInst(j[0]);
i["selected"+(k==="M"?"Month":"Year")]=i["draw"+(k==="M"?"Month":"Year")]=parseInt(h.options[h.selectedIndex].value,10);
this._notifyChange(i);
this._adjustDate(j)
},_selectDay:function(m,k,h,l){var i,j=e(m);
if(e(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0])){return
}i=this._getInst(j[0]);
i.selectedDay=i.currentDay=e("a",l).html();
i.selectedMonth=i.currentMonth=k;
i.selectedYear=i.currentYear=h;
this._selectDate(m,this._formatDate(i,i.currentDay,i.currentMonth,i.currentYear))
},_clearDate:function(i){var h=e(i);
this._selectDate(h,"")
},_selectDate:function(l,h){var i,k=e(l),j=this._getInst(k[0]);
h=(h!=null?h:this._formatDate(j));
if(j.input){j.input.val(h)
}this._updateAlternate(j);
i=this._get(j,"onSelect");
if(i){i.apply((j.input?j.input[0]:null),[h,j])
}else{if(j.input){j.input.trigger("change")
}}if(j.inline){this._updateDatepicker(j)
}else{this._hideDatepicker();
this._lastInput=j.input[0];
if(typeof(j.input[0])!=="object"){j.input.focus()
}this._lastInput=null
}},_updateAlternate:function(l){var k,j,h,i=this._get(l,"altField");
if(i){k=this._get(l,"altFormat")||this._get(l,"dateFormat");
j=this._getDate(l);
h=this.formatDate(k,j,this._getFormatConfig(l));
e(i).each(function(){e(this).val(h)
})
}},noWeekends:function(i){var h=i.getDay();
return[(h>0&&h<6),""]
},iso8601Week:function(h){var i,j=new Date(h.getTime());
j.setDate(j.getDate()+4-(j.getDay()||7));
i=j.getTime();
j.setMonth(0);
j.setDate(1);
return Math.floor(Math.round((i-j)/86400000)/7)+1
},parseDate:function(x,s,z){if(x==null||s==null){throw"Invalid arguments"
}s=(typeof s==="object"?s.toString():s+"");
if(s===""){return null
}var k,u,i,y=0,n=(z?z.shortYearCutoff:null)||this._defaults.shortYearCutoff,j=(typeof n!=="string"?n:new Date().getFullYear()%100+parseInt(n,10)),q=(z?z.dayNamesShort:null)||this._defaults.dayNamesShort,B=(z?z.dayNames:null)||this._defaults.dayNames,h=(z?z.monthNamesShort:null)||this._defaults.monthNamesShort,l=(z?z.monthNames:null)||this._defaults.monthNames,m=-1,C=-1,w=-1,p=-1,v=false,A,r=function(E){var F=(k+1<x.length&&x.charAt(k+1)===E);
if(F){k++
}return F
},D=function(G){var E=r(G),H=(G==="@"?14:(G==="!"?20:(G==="y"&&E?4:(G==="o"?3:2)))),I=new RegExp("^\\d{1,"+H+"}"),F=s.substring(y).match(I);
if(!F){throw"Missing number at position "+y
}y+=F[0].length;
return parseInt(F[0],10)
},o=function(F,G,I){var E=-1,H=e.map(r(F)?I:G,function(K,J){return[[J,K]]
}).sort(function(K,J){return -(K[1].length-J[1].length)
});
e.each(H,function(K,L){var J=L[1];
if(s.substr(y,J.length).toLowerCase()===J.toLowerCase()){E=L[0];
y+=J.length;
return false
}});
if(E!==-1){return E+1
}else{throw"Unknown name at position "+y
}},t=function(){if(s.charAt(y)!==x.charAt(k)){throw"Unexpected literal at position "+y
}y++
};
for(k=0;
k<x.length;
k++){if(v){if(x.charAt(k)==="'"&&!r("'")){v=false
}else{t()
}}else{switch(x.charAt(k)){case"d":w=D("d");
break;
case"D":o("D",q,B);
break;
case"o":p=D("o");
break;
case"m":C=D("m");
break;
case"M":C=o("M",h,l);
break;
case"y":m=D("y");
break;
case"@":A=new Date(D("@"));
m=A.getFullYear();
C=A.getMonth()+1;
w=A.getDate();
break;
case"!":A=new Date((D("!")-this._ticksTo1970)/10000);
m=A.getFullYear();
C=A.getMonth()+1;
w=A.getDate();
break;
case"'":if(r("'")){t()
}else{v=true
}break;
default:t()
}}}if(y<s.length){i=s.substr(y);
if(!/^\s+/.test(i)){throw"Extra/unparsed characters found in date: "+i
}}if(m===-1){m=new Date().getFullYear()
}else{if(m<100){m+=new Date().getFullYear()-new Date().getFullYear()%100+(m<=j?0:-100)
}}if(p>-1){C=1;
w=p;
do{u=this._getDaysInMonth(m,C-1);
if(w<=u){break
}C++;
w-=u
}while(true)
}A=this._daylightSavingAdjust(new Date(m,C-1,w));
if(A.getFullYear()!==m||A.getMonth()+1!==C||A.getDate()!==w){throw"Invalid date"
}return A
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(q,k,l){if(!k){return""
}var s,t=(l?l.dayNamesShort:null)||this._defaults.dayNamesShort,i=(l?l.dayNames:null)||this._defaults.dayNames,o=(l?l.monthNamesShort:null)||this._defaults.monthNamesShort,m=(l?l.monthNames:null)||this._defaults.monthNames,r=function(u){var v=(s+1<q.length&&q.charAt(s+1)===u);
if(v){s++
}return v
},h=function(w,x,u){var v=""+x;
if(r(w)){while(v.length<u){v="0"+v
}}return v
},n=function(u,w,v,x){return(r(u)?x[w]:v[w])
},j="",p=false;
if(k){for(s=0;
s<q.length;
s++){if(p){if(q.charAt(s)==="'"&&!r("'")){p=false
}else{j+=q.charAt(s)
}}else{switch(q.charAt(s)){case"d":j+=h("d",k.getDate(),2);
break;
case"D":j+=n("D",k.getDay(),t,i);
break;
case"o":j+=h("o",Math.round((new Date(k.getFullYear(),k.getMonth(),k.getDate()).getTime()-new Date(k.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":j+=h("m",k.getMonth()+1,2);
break;
case"M":j+=n("M",k.getMonth(),o,m);
break;
case"y":j+=(r("y")?k.getFullYear():(k.getYear()%100<10?"0":"")+k.getYear()%100);
break;
case"@":j+=k.getTime();
break;
case"!":j+=k.getTime()*10000+this._ticksTo1970;
break;
case"'":if(r("'")){j+="'"
}else{p=true
}break;
default:j+=q.charAt(s)
}}}}return j
},_possibleChars:function(l){var k,j="",i=false,h=function(m){var n=(k+1<l.length&&l.charAt(k+1)===m);
if(n){k++
}return n
};
for(k=0;
k<l.length;
k++){if(i){if(l.charAt(k)==="'"&&!h("'")){i=false
}else{j+=l.charAt(k)
}}else{switch(l.charAt(k)){case"d":case"m":case"y":case"@":j+="0123456789";
break;
case"D":case"M":return null;
case"'":if(h("'")){j+="'"
}else{i=true
}break;
default:j+=l.charAt(k)
}}}return j
},_get:function(i,h){return i.settings[h]!==g?i.settings[h]:this._defaults[h]
},_setDateFromField:function(m,j){if(m.input.val()===m.lastVal){return
}var h=this._get(m,"dateFormat"),o=m.lastVal=m.input?m.input.val():null,n=this._getDefaultDate(m),i=n,k=this._getFormatConfig(m);
try{i=this.parseDate(h,o,k)||n
}catch(l){o=(j?"":o)
}m.selectedDay=i.getDate();
m.drawMonth=m.selectedMonth=i.getMonth();
m.drawYear=m.selectedYear=i.getFullYear();
m.currentDay=(o?i.getDate():0);
m.currentMonth=(o?i.getMonth():0);
m.currentYear=(o?i.getFullYear():0);
this._adjustInstDate(m)
},_getDefaultDate:function(h){return this._restrictMinMax(h,this._determineDate(h,this._get(h,"defaultDate"),new Date()))
},_determineDate:function(l,i,m){var k=function(o){var n=new Date();
n.setDate(n.getDate()+o);
return n
},j=function(u){try{return e.datepicker.parseDate(e.datepicker._get(l,"dateFormat"),u,e.datepicker._getFormatConfig(l))
}catch(t){}var o=(u.toLowerCase().match(/^c/)?e.datepicker._getDate(l):null)||new Date(),p=o.getFullYear(),s=o.getMonth(),n=o.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,q=r.exec(u);
while(q){switch(q[2]||"d"){case"d":case"D":n+=parseInt(q[1],10);
break;
case"w":case"W":n+=parseInt(q[1],10)*7;
break;
case"m":case"M":s+=parseInt(q[1],10);
n=Math.min(n,e.datepicker._getDaysInMonth(p,s));
break;
case"y":case"Y":p+=parseInt(q[1],10);
n=Math.min(n,e.datepicker._getDaysInMonth(p,s));
break
}q=r.exec(u)
}return new Date(p,s,n)
},h=(i==null||i===""?m:(typeof i==="string"?j(i):(typeof i==="number"?(isNaN(i)?m:k(i)):new Date(i.getTime()))));
h=(h&&h.toString()==="Invalid Date"?m:h);
if(h){h.setHours(0);
h.setMinutes(0);
h.setSeconds(0);
h.setMilliseconds(0)
}return this._daylightSavingAdjust(h)
},_daylightSavingAdjust:function(h){if(!h){return null
}h.setHours(h.getHours()>12?h.getHours()+2:0);
return h
},_setDate:function(n,k,m){var h=!k,j=n.selectedMonth,l=n.selectedYear,i=this._restrictMinMax(n,this._determineDate(n,k,new Date()));
n.selectedDay=n.currentDay=i.getDate();
n.drawMonth=n.selectedMonth=n.currentMonth=i.getMonth();
n.drawYear=n.selectedYear=n.currentYear=i.getFullYear();
if((j!==n.selectedMonth||l!==n.selectedYear)&&!m){this._notifyChange(n)
}this._adjustInstDate(n);
if(n.input){n.input.val(h?"":this._formatDate(n))
}},_getDate:function(i){var h=(!i.currentYear||(i.input&&i.input.val()==="")?null:this._daylightSavingAdjust(new Date(i.currentYear,i.currentMonth,i.currentDay)));
return h
},_attachHandlers:function(i){var h=this._get(i,"stepMonths"),j="#"+i.id.replace(/\\\\/g,"\\");
i.dpDiv.find("[data-handler]").map(function(){var k={prev:function(){e.datepicker._adjustDate(j,-h,"M")
},next:function(){e.datepicker._adjustDate(j,+h,"M")
},hide:function(){e.datepicker._hideDatepicker()
},today:function(){e.datepicker._gotoToday(j)
},selectDay:function(){e.datepicker._selectDay(j,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){e.datepicker._selectMonthYear(j,this,"M");
return false
},selectYear:function(){e.datepicker._selectMonthYear(j,this,"Y");
return false
}};
e(this).bind(this.getAttribute("data-event"),k[this.getAttribute("data-handler")])
})
},_generateHTML:function(X){var A,z,S,K,l,ab,V,O,ae,I,ai,s,u,t,i,aa,q,D,ad,Q,aj,C,H,r,m,T,M,P,N,p,F,v,W,Z,k,ac,ag,L,w,Y=new Date(),B=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth(),Y.getDate())),af=this._get(X,"isRTL"),ah=this._get(X,"showButtonPanel"),R=this._get(X,"hideIfNoPrevNext"),G=this._get(X,"navigationAsDateFormat"),x=this._getNumberOfMonths(X),o=this._get(X,"showCurrentAtPos"),J=this._get(X,"stepMonths"),E=(x[0]!==1||x[1]!==1),j=this._daylightSavingAdjust((!X.currentDay?new Date(9999,9,9):new Date(X.currentYear,X.currentMonth,X.currentDay))),n=this._getMinMaxDate(X,"min"),y=this._getMinMaxDate(X,"max"),h=X.drawMonth-o,U=X.drawYear;
if(h<0){h+=12;
U--
}if(y){A=this._daylightSavingAdjust(new Date(y.getFullYear(),y.getMonth()-(x[0]*x[1])+1,y.getDate()));
A=(n&&A<n?n:A);
while(this._daylightSavingAdjust(new Date(U,h,1))>A){h--;
if(h<0){h=11;
U--
}}}X.drawMonth=h;
X.drawYear=U;
z=this._get(X,"prevText");
z=(!G?z:this.formatDate(z,this._daylightSavingAdjust(new Date(U,h-J,1)),this._getFormatConfig(X)));
S=(this._canAdjustMonth(X,-1,U,h)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+z+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"e":"w")+"'>"+z+"</span></a>":(R?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+z+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"e":"w")+"'>"+z+"</span></a>"));
K=this._get(X,"nextText");
K=(!G?K:this.formatDate(K,this._daylightSavingAdjust(new Date(U,h+J,1)),this._getFormatConfig(X)));
l=(this._canAdjustMonth(X,+1,U,h)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+K+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"w":"e")+"'>"+K+"</span></a>":(R?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+K+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"w":"e")+"'>"+K+"</span></a>"));
ab=this._get(X,"currentText");
V=(this._get(X,"gotoCurrent")&&X.currentDay?j:B);
ab=(!G?ab:this.formatDate(ab,V,this._getFormatConfig(X)));
O=(!X.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(X,"closeText")+"</button>":"");
ae=(ah)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(af?O:"")+(this._isInRange(X,V)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+ab+"</button>":"")+(af?"":O)+"</div>":"";
I=parseInt(this._get(X,"firstDay"),10);
I=(isNaN(I)?0:I);
ai=this._get(X,"showWeek");
s=this._get(X,"dayNames");
u=this._get(X,"dayNamesMin");
t=this._get(X,"monthNames");
i=this._get(X,"monthNamesShort");
aa=this._get(X,"beforeShowDay");
q=this._get(X,"showOtherMonths");
D=this._get(X,"selectOtherMonths");
ad=this._getDefaultDate(X);
Q="";
aj;
for(C=0;
C<x[0];
C++){H="";
this.maxRows=4;
for(r=0;
r<x[1];
r++){m=this._daylightSavingAdjust(new Date(U,h,X.selectedDay));
T=" ui-corner-all";
M="";
if(E){M+="<div class='ui-datepicker-group";
if(x[1]>1){switch(r){case 0:M+=" ui-datepicker-group-first";
T=" ui-corner-"+(af?"right":"left");
break;
case x[1]-1:M+=" ui-datepicker-group-last";
T=" ui-corner-"+(af?"left":"right");
break;
default:M+=" ui-datepicker-group-middle";
T="";
break
}}M+="'>"
}M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&C===0?(af?l:S):"")+(/all|right/.test(T)&&C===0?(af?S:l):"")+this._generateMonthYearHeader(X,h,U,n,y,C>0||r>0,t,i)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
P=(ai?"<th class='ui-datepicker-week-col'>"+this._get(X,"weekHeader")+"</th>":"");
for(aj=0;
aj<7;
aj++){N=(aj+I)%7;
P+="<th"+((aj+I+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+s[N]+"'>"+u[N]+"</span></th>"
}M+=P+"</tr></thead><tbody>";
p=this._getDaysInMonth(U,h);
if(U===X.selectedYear&&h===X.selectedMonth){X.selectedDay=Math.min(X.selectedDay,p)
}F=(this._getFirstDayOfMonth(U,h)-I+7)%7;
v=Math.ceil((F+p)/7);
W=(E?this.maxRows>v?this.maxRows:v:v);
this.maxRows=W;
Z=this._daylightSavingAdjust(new Date(U,h,1-F));
for(k=0;
k<W;
k++){M+="<tr>";
ac=(!ai?"":"<td class='ui-datepicker-week-col'>"+this._get(X,"calculateWeek")(Z)+"</td>");
for(aj=0;
aj<7;
aj++){ag=(aa?aa.apply((X.input?X.input[0]:null),[Z]):[true,""]);
L=(Z.getMonth()!==h);
w=(L&&!D)||!ag[0]||(n&&Z<n)||(y&&Z>y);
ac+="<td class='"+((aj+I+6)%7>=5?" ui-datepicker-week-end":"")+(L?" ui-datepicker-other-month":"")+((Z.getTime()===m.getTime()&&h===X.selectedMonth&&X._keyEvent)||(ad.getTime()===Z.getTime()&&ad.getTime()===m.getTime())?" "+this._dayOverClass:"")+(w?" "+this._unselectableClass+" ui-state-disabled":"")+(L&&!q?"":" "+ag[1]+(Z.getTime()===j.getTime()?" "+this._currentClass:"")+(Z.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+((!L||q)&&ag[2]?" title='"+ag[2].replace(/'/g,"&#39;")+"'":"")+(w?"":" data-handler='selectDay' data-event='click' data-month='"+Z.getMonth()+"' data-year='"+Z.getFullYear()+"'")+">"+(L&&!q?"&#xa0;":(w?"<span class='ui-state-default'>"+Z.getDate()+"</span>":"<a class='ui-state-default"+(Z.getTime()===B.getTime()?" ui-state-highlight":"")+(Z.getTime()===j.getTime()?" ui-state-active":"")+(L?" ui-priority-secondary":"")+"' href='#'>"+Z.getDate()+"</a>"))+"</td>";
Z.setDate(Z.getDate()+1);
Z=this._daylightSavingAdjust(Z)
}M+=ac+"</tr>"
}h++;
if(h>11){h=0;
U++
}M+="</tbody></table>"+(E?"</div>"+((x[0]>0&&r===x[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
H+=M
}Q+=H
}Q+=ae;
X._keyEvent=false;
return Q
},_generateMonthYearHeader:function(l,j,t,n,r,u,p,h){var y,i,z,w,m,v,s,o,k=this._get(l,"changeMonth"),A=this._get(l,"changeYear"),B=this._get(l,"showMonthAfterYear"),q="<div class='ui-datepicker-title'>",x="";
if(u||!k){x+="<span class='ui-datepicker-month'>"+p[j]+"</span>"
}else{y=(n&&n.getFullYear()===t);
i=(r&&r.getFullYear()===t);
x+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(z=0;
z<12;
z++){if((!y||z>=n.getMonth())&&(!i||z<=r.getMonth())){x+="<option value='"+z+"'"+(z===j?" selected='selected'":"")+">"+h[z]+"</option>"
}}x+="</select>"
}if(!B){q+=x+(u||!(k&&A)?"&#xa0;":"")
}if(!l.yearshtml){l.yearshtml="";
if(u||!A){q+="<span class='ui-datepicker-year'>"+t+"</span>"
}else{w=this._get(l,"yearRange").split(":");
m=new Date().getFullYear();
v=function(D){var C=(D.match(/c[+\-].*/)?t+parseInt(D.substring(1),10):(D.match(/[+\-].*/)?m+parseInt(D,10):parseInt(D,10)));
return(isNaN(C)?m:C)
};
s=v(w[0]);
o=Math.max(s,v(w[1]||""));
s=(n?Math.max(s,n.getFullYear()):s);
o=(r?Math.min(o,r.getFullYear()):o);
l.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
s<=o;
s++){l.yearshtml+="<option value='"+s+"'"+(s===t?" selected='selected'":"")+">"+s+"</option>"
}l.yearshtml+="</select>";
q+=l.yearshtml;
l.yearshtml=null
}}q+=this._get(l,"yearSuffix");
if(B){q+=(u||!(k&&A)?"&#xa0;":"")+x
}q+="</div>";
return q
},_adjustInstDate:function(k,n,m){var j=k.drawYear+(m==="Y"?n:0),l=k.drawMonth+(m==="M"?n:0),h=Math.min(k.selectedDay,this._getDaysInMonth(j,l))+(m==="D"?n:0),i=this._restrictMinMax(k,this._daylightSavingAdjust(new Date(j,l,h)));
k.selectedDay=i.getDate();
k.drawMonth=k.selectedMonth=i.getMonth();
k.drawYear=k.selectedYear=i.getFullYear();
if(m==="M"||m==="Y"){this._notifyChange(k)
}},_restrictMinMax:function(k,i){var j=this._getMinMaxDate(k,"min"),l=this._getMinMaxDate(k,"max"),h=(j&&i<j?j:i);
return(l&&h>l?l:h)
},_notifyChange:function(i){var h=this._get(i,"onChangeMonthYear");
if(h){h.apply((i.input?i.input[0]:null),[i.selectedYear,i.selectedMonth+1,i])
}},_getNumberOfMonths:function(i){var h=this._get(i,"numberOfMonths");
return(h==null?[1,1]:(typeof h==="number"?[1,h]:h))
},_getMinMaxDate:function(i,h){return this._determineDate(i,this._get(i,h+"Date"),null)
},_getDaysInMonth:function(h,i){return 32-this._daylightSavingAdjust(new Date(h,i,32)).getDate()
},_getFirstDayOfMonth:function(h,i){return new Date(h,i,1).getDay()
},_canAdjustMonth:function(k,m,j,l){var h=this._getNumberOfMonths(k),i=this._daylightSavingAdjust(new Date(j,l+(m<0?m:h[0]*h[1]),1));
if(m<0){i.setDate(this._getDaysInMonth(i.getFullYear(),i.getMonth()))
}return this._isInRange(k,i)
},_isInRange:function(l,j){var i,o,k=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),p=null,m=null,n=this._get(l,"yearRange");
if(n){i=n.split(":");
o=new Date().getFullYear();
p=parseInt(i[0],10);
m=parseInt(i[1],10);
if(i[0].match(/[+\-].*/)){p+=o
}if(i[1].match(/[+\-].*/)){m+=o
}}return((!k||j.getTime()>=k.getTime())&&(!h||j.getTime()<=h.getTime())&&(!p||j.getFullYear()>=p)&&(!m||j.getFullYear()<=m))
},_getFormatConfig:function(h){var i=this._get(h,"shortYearCutoff");
i=(typeof i!=="string"?i:new Date().getFullYear()%100+parseInt(i,10));
return{shortYearCutoff:i,dayNamesShort:this._get(h,"dayNamesShort"),dayNames:this._get(h,"dayNames"),monthNamesShort:this._get(h,"monthNamesShort"),monthNames:this._get(h,"monthNames")}
},_formatDate:function(k,h,l,j){if(!h){k.currentDay=k.selectedDay;
k.currentMonth=k.selectedMonth;
k.currentYear=k.selectedYear
}var i=(h?(typeof h==="object"?h:this._daylightSavingAdjust(new Date(j,l,h))):this._daylightSavingAdjust(new Date(k.currentYear,k.currentMonth,k.currentDay)));
return this.formatDate(this._get(k,"dateFormat"),i,this._getFormatConfig(k))
}});
function d(i){var h="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return i.delegate(h,"mouseout",function(){e(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).removeClass("ui-datepicker-next-hover")
}}).delegate(h,"mouseover",function(){if(!e.datepicker._isDisabledDatepicker(c.inline?i.parent()[0]:c.input[0])){e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
e(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).addClass("ui-datepicker-next-hover")
}}})
}function a(j,i){e.extend(j,i);
for(var h in i){if(i[h]==null){j[h]=i[h]
}}return j
}e.fn.datepicker=function(i){if(!this.length){return this
}if(!e.datepicker.initialized){e(document).mousedown(e.datepicker._checkExternalClick);
e.datepicker.initialized=true
}if(e("#"+e.datepicker._mainDivId).length===0){e("body").append(e.datepicker.dpDiv)
}var h=Array.prototype.slice.call(arguments,1);
if(typeof i==="string"&&(i==="isDisabled"||i==="getDate"||i==="widget")){return e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this[0]].concat(h))
}if(i==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this[0]].concat(h))
}return this.each(function(){typeof i==="string"?e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this].concat(h)):e.datepicker._attachDatepicker(this,i)
})
};
e.datepicker=new b();
e.datepicker.initialized=false;
e.datepicker.uuid=new Date().getTime();
e.datepicker.version="1.10.3"
})(jQuery);
(function(c,d){var a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},b={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
c.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(f){var e=c(this).css(f).offset().top;
if(e<0){c(this).css("top",f.top-e)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&c.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&c.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var e=this.options.appendTo;
if(e&&(e.jquery||e.nodeType)){return c(e)
}return this.document.find(e||"body").eq(0)
},_destroy:function(){var f,e=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}f=e.parent.children().eq(e.index);
if(f.length&&f[0]!==this.element[0]){f.before(this.element)
}else{e.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:c.noop,enable:c.noop,close:function(f){var e=this;
if(!this._isOpen||this._trigger("beforeClose",f)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){c(this.document[0].activeElement).blur()
}this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",f)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(g,e){var f=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(f&&!e){this._trigger("focus",g)
}return f
},open:function(){var e=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=c(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){e._focusTabbable();
e._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var e=this.element.find("[autofocus]");
if(!e.length){e=this.element.find(":tabbable")
}if(!e.length){e=this.uiDialogButtonPane.find(":tabbable")
}if(!e.length){e=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!e.length){e=this.uiDialog
}e.eq(0).focus()
},_keepFocus:function(e){function f(){var h=this.document[0].activeElement,g=this.uiDialog[0]===h||c.contains(this.uiDialog[0],h);
if(!g){this._focusTabbable()
}}e.preventDefault();
f.call(this);
this._delay(f)
},_createWrapper:function(){this.uiDialog=c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(g){if(this.options.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===c.ui.keyCode.ESCAPE){g.preventDefault();
this.close(g);
return
}if(g.keyCode!==c.ui.keyCode.TAB){return
}var f=this.uiDialog.find(":tabbable"),h=f.filter(":first"),e=f.filter(":last");
if((g.target===e[0]||g.target===this.uiDialog[0])&&!g.shiftKey){h.focus(1);
g.preventDefault()
}else{if((g.target===h[0]||g.target===this.uiDialog[0])&&g.shiftKey){e.focus(1);
g.preventDefault()
}}},mousedown:function(e){if(this._moveToTop(e)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var e;
this.uiDialogTitlebar=c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(f){if(!c(f.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=c("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(f){f.preventDefault();
this.close(f)
}});
e=c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(e);
this.uiDialog.attr({"aria-labelledby":e.attr("id")})
},_title:function(e){if(!this.options.title){e.html("&#160;")
}e.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var f=this,e=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(c.isEmptyObject(e)||(c.isArray(e)&&!e.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}c.each(e,function(g,h){var i,j;
h=c.isFunction(h)?{click:h,text:g}:h;
h=c.extend({type:"button"},h);
i=h.click;
h.click=function(){i.apply(f.element[0],arguments)
};
j={icons:h.icons,text:h.showText};
delete h.icons;
delete h.showText;
c("<button></button>",h).button(j).appendTo(f.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var g=this,f=this.options;
function e(h){return{position:h.position,offset:h.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(h,i){c(this).addClass("ui-dialog-dragging");
g._blockFrames();
g._trigger("dragStart",h,e(i))
},drag:function(h,i){g._trigger("drag",h,e(i))
},stop:function(h,i){f.position=[i.position.left-g.document.scrollLeft(),i.position.top-g.document.scrollTop()];
c(this).removeClass("ui-dialog-dragging");
g._unblockFrames();
g._trigger("dragStop",h,e(i))
}})
},_makeResizable:function(){var j=this,h=this.options,i=h.resizable,e=this.uiDialog.css("position"),g=typeof i==="string"?i:"n,e,s,w,se,sw,ne,nw";
function f(k){return{originalPosition:k.originalPosition,originalSize:k.originalSize,position:k.position,size:k.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:this._minHeight(),handles:g,start:function(k,l){c(this).addClass("ui-dialog-resizing");
j._blockFrames();
j._trigger("resizeStart",k,f(l))
},resize:function(k,l){j._trigger("resize",k,f(l))
},stop:function(k,l){h.height=c(this).height();
h.width=c(this).width();
c(this).removeClass("ui-dialog-resizing");
j._unblockFrames();
j._trigger("resizeStop",k,f(l))
}}).css("position",e)
},_minHeight:function(){var e=this.options;
return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)
},_position:function(){var e=this.uiDialog.is(":visible");
if(!e){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!e){this.uiDialog.hide()
}},_setOptions:function(g){var h=this,f=false,e={};
c.each(g,function(i,j){h._setOption(i,j);
if(i in a){f=true
}if(i in b){e[i]=j
}});
if(f){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",e)
}},_setOption:function(g,h){var f,i,e=this.uiDialog;
if(g==="dialogClass"){e.removeClass(this.options.dialogClass).addClass(h)
}if(g==="disabled"){return
}this._super(g,h);
if(g==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(g==="buttons"){this._createButtons()
}if(g==="closeText"){this.uiDialogTitlebarClose.button({label:""+h})
}if(g==="draggable"){f=e.is(":data(ui-draggable)");
if(f&&!h){e.draggable("destroy")
}if(!f&&h){this._makeDraggable()
}}if(g==="position"){this._position()
}if(g==="resizable"){i=e.is(":data(ui-resizable)");
if(i&&!h){e.resizable("destroy")
}if(i&&typeof h==="string"){e.resizable("option","handles",h)
}if(!i&&h!==false){this._makeResizable()
}}if(g==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var e,g,h,f=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(f.minWidth>f.width){f.width=f.minWidth
}e=this.uiDialog.css({height:"auto",width:f.width}).outerHeight();
g=Math.max(0,f.minHeight-e);
h=typeof f.maxHeight==="number"?Math.max(0,f.maxHeight-e):"none";
if(f.height==="auto"){this.element.css({minHeight:g,maxHeight:h,height:"auto"})
}else{this.element.height(Math.max(0,f.height-e))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=c(this);
return c("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(e){if(c(e.target).closest(".ui-dialog").length){return true
}return !!c(e.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var f=this,e=this.widgetFullName;
if(!c.ui.dialog.overlayInstances){this._delay(function(){if(c.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(g){if(!f._allowInteraction(g)){g.preventDefault();
c(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()
}})
}})
}this.overlay=c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
c.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){c.ui.dialog.overlayInstances--;
if(!c.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
c.ui.dialog.overlayInstances=0;
if(c.uiBackCompat!==false){c.widget("ui.dialog",c.ui.dialog,{_position:function(){var f=this.options.position,g=[],h=[0,0],e;
if(f){if(typeof f==="string"||(typeof f==="object"&&"0" in f)){g=f.split?f.split(" "):[f[0],f[1]];
if(g.length===1){g[1]=g[0]
}c.each(["left","top"],function(k,j){if(+g[k]===g[k]){h[k]=g[k];
g[k]=j
}});
f={my:g[0]+(h[0]<0?h[0]:"+"+h[0])+" "+g[1]+(h[1]<0?h[1]:"+"+h[1]),at:g.join(" ")}
}f=c.extend({},c.ui.dialog.prototype.options.position,f)
}else{f=c.ui.dialog.prototype.options.position
}e=this.uiDialog.is(":visible");
if(!e){this.uiDialog.show()
}this.uiDialog.position(f);
if(!e){this.uiDialog.hide()
}}})
}}(jQuery));
(function(b,d){var a=/up|down|vertical/,c=/up|left|vertical|horizontal/;
b.effects.effect.blind=function(g,m){var h=b(this),q=["position","top","bottom","left","right","height","width"],n=b.effects.setMode(h,g.mode||"hide"),r=g.direction||"up",j=a.test(r),i=j?"height":"width",p=j?"top":"left",t=c.test(r),l={},s=n==="show",f,e,k;
if(h.parent().is(".ui-effects-wrapper")){b.effects.save(h.parent(),q)
}else{b.effects.save(h,q)
}h.show();
f=b.effects.createWrapper(h).css({overflow:"hidden"});
e=f[i]();
k=parseFloat(f.css(p))||0;
l[i]=s?e:0;
if(!t){h.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"});
l[p]=s?k:e+k
}if(s){f.css(i,0);
if(!t){f.css(p,k+e)
}}f.animate(l,{duration:g.duration,easing:g.easing,queue:false,complete:function(){if(n==="hide"){h.hide()
}b.effects.restore(h,q);
b.effects.removeWrapper(h);
m()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.bounce=function(m,l){var c=a(this),d=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(c,m.mode||"effect"),j=k==="hide",v=k==="show",w=m.direction||"up",e=m.distance,h=m.times||5,x=h*2+(v||j?1:0),u=m.duration/x,p=m.easing,f=(w==="up"||w==="down")?"top":"left",n=(w==="up"||w==="left"),t,g,s,q=c.queue(),r=q.length;
if(v||j){d.push("opacity")
}a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3
}if(v){s={opacity:1};
s[f]=0;
c.css("opacity",0).css(f,n?-e*2:e*2).animate(s,u,p)
}if(j){e=e/Math.pow(2,h-1)
}s={};
s[f]=0;
for(t=0;
t<h;
t++){g={};
g[f]=(n?"-=":"+=")+e;
c.animate(g,u,p).animate(s,u,p);
e=j?e*2:e/2
}if(j){g={opacity:0};
g[f]=(n?"-=":"+=")+e;
c.animate(g,u,p)
}c.queue(function(){if(j){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
l()
});
if(r>1){q.splice.apply(q,[1,0].concat(q.splice(r,x+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.clip=function(f,i){var g=a(this),m=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(g,f.mode||"hide"),p=l==="show",n=f.direction||"vertical",k=n==="vertical",q=k?"height":"width",j=k?"top":"left",h={},d,e,c;
a.effects.save(g,m);
g.show();
d=a.effects.createWrapper(g).css({overflow:"hidden"});
e=(g[0].tagName==="IMG")?d:g;
c=e[q]();
if(p){e.css(q,0);
e.css(j,c/2)
}h[q]=p?c:0;
h[j]=p?0:c/2;
e.animate(h,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(!p){g.hide()
}a.effects.restore(g,m);
a.effects.removeWrapper(g);
i()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),j=["position","top","bottom","left","right","opacity","height","width"],i=a.effects.setMode(e,d.mode||"hide"),l=i==="show",k=d.direction||"left",f=(k==="up"||k==="down")?"top":"left",m=(k==="up"||k==="left")?"pos":"neg",g={opacity:l?1:0},c;
a.effects.save(e,j);
e.show();
a.effects.createWrapper(e);
c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;
if(l){e.css("opacity",0).css(f,m==="pos"?-c:c)
}g[f]=(l?(m==="pos"?"+=":"-="):(m==="pos"?"-=":"+="))+c;
e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(i==="hide"){e.hide()
}a.effects.restore(e,j);
a.effects.removeWrapper(e);
h()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.explode=function(s,r){var k=s.pieces?Math.round(Math.sqrt(s.pieces)):3,d=k,c=a(this),m=a.effects.setMode(c,s.mode||"hide"),w=m==="show",g=c.show().css("visibility","hidden").offset(),t=Math.ceil(c.outerWidth()/d),q=Math.ceil(c.outerHeight()/k),h=[],v,u,e,p,n,l;
function x(){h.push(this);
if(h.length===k*d){f()
}}for(v=0;
v<k;
v++){p=g.top+v*q;
l=v-(k-1)/2;
for(u=0;
u<d;
u++){e=g.left+u*t;
n=u-(d-1)/2;
c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-u*t,top:-v*q}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:t,height:q,left:e+(w?n*t:0),top:p+(w?l*q:0),opacity:w?0:1}).animate({left:e+(w?0:n*t),top:p+(w?0:l*q),opacity:w?1:0},s.duration||500,s.easing,x)
}}function f(){c.css({visibility:"visible"});
a(h).remove();
if(!w){c.hide()
}r()
}}
})(jQuery);
(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");
d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})
}
})(jQuery);
(function(a,b){a.effects.effect.fold=function(e,i){var f=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(f,e.mode||"hide"),r=k==="show",l=k==="hide",t=e.size||15,m=/([0-9]+)%/.exec(t),s=!!e.horizFirst,j=r!==s,g=j?["width","height"]:["height","width"],h=e.duration/2,d,c,q={},p={};
a.effects.save(f,n);
f.show();
d=a.effects.createWrapper(f).css({overflow:"hidden"});
c=j?[d.width(),d.height()]:[d.height(),d.width()];
if(m){t=parseInt(m[1],10)/100*c[l?0:1]
}if(r){d.css(s?{height:0,width:t}:{height:t,width:0})
}q[g[0]]=r?c[0]:t;
p[g[1]]=r?c[1]:0;
d.animate(q,h,e.easing).animate(p,h,e.easing,function(){if(l){f.hide()
}a.effects.restore(f,n);
a.effects.removeWrapper(f);
i()
})
}
})(jQuery);
(function(a,b){a.effects.effect.highlight=function(h,c){var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,h.mode||"show"),f={backgroundColor:e.css("backgroundColor")};
if(g==="hide"){f.opacity=0
}a.effects.save(e,d);
e.show().css({backgroundImage:"none",backgroundColor:h.color||"#ffff99"}).animate(f,{queue:false,duration:h.duration,easing:h.easing,complete:function(){if(g==="hide"){e.hide()
}a.effects.restore(e,d);
c()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.pulsate=function(c,g){var e=a(this),k=a.effects.setMode(e,c.mode||"show"),p=k==="show",l=k==="hide",q=(p||k==="hide"),m=((c.times||5)*2)+(q?1:0),f=c.duration/m,n=0,j=e.queue(),d=j.length,h;
if(p||!e.is(":visible")){e.css("opacity",0).show();
n=1
}for(h=1;
h<m;
h++){e.animate({opacity:n},f,c.easing);
n=1-n
}e.animate({opacity:n},f,c.easing);
e.queue(function(){if(l){e.hide()
}g()
});
if(d>1){j.splice.apply(j,[1,0].concat(j.splice(d,m+1)))
}e.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.puff=function(j,c){var h=a(this),i=a.effects.setMode(h,j.mode||"hide"),f=i==="hide",g=parseInt(j.percent,10)||150,e=g/100,d={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()};
a.extend(j,{effect:"scale",queue:false,fade:true,mode:i,complete:c,percent:f?g:100,from:f?d:{height:d.height*e,width:d.width*e,outerHeight:d.outerHeight*e,outerWidth:d.outerWidth*e}});
h.effect(j)
};
a.effects.effect.scale=function(c,f){var d=a(this),l=a.extend(true,{},c),g=a.effects.setMode(d,c.mode||"effect"),h=parseInt(c.percent,10)||(parseInt(c.percent,10)===0?0:(g==="hide"?0:100)),j=c.direction||"both",k=c.origin,e={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},i={y:j!=="horizontal"?(h/100):1,x:j!=="vertical"?(h/100):1};
l.effect="size";
l.queue=false;
l.complete=f;
if(g!=="effect"){l.origin=k||["middle","center"];
l.restore=true
}l.from=c.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);
l.to={height:e.height*i.y,width:e.width*i.x,outerHeight:e.outerHeight*i.y,outerWidth:e.outerWidth*i.x};
if(l.fade){if(g==="show"){l.from.opacity=0;
l.to.opacity=1
}if(g==="hide"){l.from.opacity=1;
l.to.opacity=0
}}d.effect(l)
};
a.effects.effect.size=function(l,k){var q,i,j,c=a(this),p=["position","top","bottom","left","right","width","height","overflow","opacity"],n=["position","top","bottom","left","right","overflow","opacity"],m=["width","height","overflow"],g=["fontSize"],s=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=a.effects.setMode(c,l.mode||"effect"),r=l.restore||h!=="effect",v=l.scale||"both",t=l.origin||["middle","center"],u=c.css("position"),e=r?p:n,f={height:0,width:0,outerHeight:0,outerWidth:0};
if(h==="show"){c.show()
}q={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};
if(l.mode==="toggle"&&h==="show"){c.from=l.to||f;
c.to=l.from||q
}else{c.from=l.from||(h==="show"?f:q);
c.to=l.to||(h==="hide"?f:q)
}j={from:{y:c.from.height/q.height,x:c.from.width/q.width},to:{y:c.to.height/q.height,x:c.to.width/q.width}};
if(v==="box"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(s);
c.from=a.effects.setTransition(c,s,j.from.y,c.from);
c.to=a.effects.setTransition(c,s,j.to.y,c.to)
}if(j.from.x!==j.to.x){e=e.concat(d);
c.from=a.effects.setTransition(c,d,j.from.x,c.from);
c.to=a.effects.setTransition(c,d,j.to.x,c.to)
}}if(v==="content"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(g).concat(m);
c.from=a.effects.setTransition(c,g,j.from.y,c.from);
c.to=a.effects.setTransition(c,g,j.to.y,c.to)
}}a.effects.save(c,e);
c.show();
a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);
if(t){i=a.effects.getBaseline(t,q);
c.from.top=(q.outerHeight-c.outerHeight())*i.y;
c.from.left=(q.outerWidth-c.outerWidth())*i.x;
c.to.top=(q.outerHeight-c.to.outerHeight)*i.y;
c.to.left=(q.outerWidth-c.to.outerWidth)*i.x
}c.css(c.from);
if(v==="content"||v==="both"){s=s.concat(["marginTop","marginBottom"]).concat(g);
d=d.concat(["marginLeft","marginRight"]);
m=p.concat(s).concat(d);
c.find("*[width]").each(function(){var w=a(this),o={height:w.height(),width:w.width(),outerHeight:w.outerHeight(),outerWidth:w.outerWidth()};
if(r){a.effects.save(w,m)
}w.from={height:o.height*j.from.y,width:o.width*j.from.x,outerHeight:o.outerHeight*j.from.y,outerWidth:o.outerWidth*j.from.x};
w.to={height:o.height*j.to.y,width:o.width*j.to.x,outerHeight:o.height*j.to.y,outerWidth:o.width*j.to.x};
if(j.from.y!==j.to.y){w.from=a.effects.setTransition(w,s,j.from.y,w.from);
w.to=a.effects.setTransition(w,s,j.to.y,w.to)
}if(j.from.x!==j.to.x){w.from=a.effects.setTransition(w,d,j.from.x,w.from);
w.to=a.effects.setTransition(w,d,j.to.x,w.to)
}w.css(w.from);
w.animate(w.to,l.duration,l.easing,function(){if(r){a.effects.restore(w,m)
}})
})
}c.animate(c.to,{queue:false,duration:l.duration,easing:l.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)
}if(h==="hide"){c.hide()
}a.effects.restore(c,e);
if(!r){if(u==="static"){c.css({position:"relative",top:c.to.top,left:c.to.left})
}else{a.each(["top","left"],function(o,w){c.css(w,function(y,A){var z=parseInt(A,10),x=o?c.to.left:c.to.top;
if(A==="auto"){return x+"px"
}return z+x+"px"
})
})
}}a.effects.removeWrapper(c);
k()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.shake=function(l,k){var c=a(this),d=["position","top","bottom","left","right","height","width"],j=a.effects.setMode(c,l.mode||"effect"),u=l.direction||"left",e=l.distance||20,h=l.times||3,v=h*2+1,q=Math.round(l.duration/v),g=(u==="up"||u==="down")?"top":"left",f=(u==="up"||u==="left"),t={},s={},r={},p,m=c.queue(),n=m.length;
a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
t[g]=(f?"-=":"+=")+e;
s[g]=(f?"+=":"-=")+e*2;
r[g]=(f?"-=":"+=")+e*2;
c.animate(t,q,l.easing);
for(p=1;
p<h;
p++){c.animate(s,q,l.easing).animate(r,q,l.easing)
}c.animate(s,q,l.easing).animate(t,q/2,l.easing).queue(function(){if(j==="hide"){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
k()
});
if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,v+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.slide=function(e,i){var f=a(this),k=["position","top","bottom","left","right","width","height"],j=a.effects.setMode(f,e.mode||"show"),m=j==="show",l=e.direction||"left",g=(l==="up"||l==="down")?"top":"left",d=(l==="up"||l==="left"),c,h={};
a.effects.save(f,k);
f.show();
c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);
a.effects.createWrapper(f).css({overflow:"hidden"});
if(m){f.css(g,d?(isNaN(c)?"-"+c:-c):c)
}h[g]=(m?(d?"+=":"-="):(d?"-=":"+="))+c;
f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(j==="hide"){f.hide()
}a.effects.restore(f,k);
a.effects.removeWrapper(f);
i()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),k=a(d.to),n=k.css("position")==="fixed",j=a("body"),l=n?j.scrollTop():0,m=n?j.scrollLeft():0,c=k.offset(),g={top:c.top-l,left:c.left-m,height:k.innerHeight(),width:k.innerWidth()},i=f.offset(),e=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top:i.top-l,left:i.left-m,height:f.innerHeight(),width:f.innerWidth(),position:n?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();
h()
})
}
})(jQuery);
(function(a,b){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(c){if(this.options.disabled){c.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(c){c.preventDefault()
},"click .ui-state-disabled > a":function(c){c.preventDefault()
},"click .ui-menu-item:has(a)":function(c){var d=a(c.target).closest(".ui-menu-item");
if(!this.mouseHandled&&d.not(".ui-state-disabled").length){this.mouseHandled=true;
this.select(c);
if(d.has(".ui-menu").length){this.expand(c)
}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(c){var d=a(c.currentTarget);
d.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(c,d)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,c){var d=this.active||this.element.children(".ui-menu-item").eq(0);
if(!c){this.focus(e,d)
}},blur:function(c){this._delay(function(){if(!a.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(c)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(c){if(!a(c.target).closest(".ui-menu").length){this.collapseAll(c)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var c=a(this);
if(c.data("ui-menu-submenu-carat")){c.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(i){var d,h,j,g,f,c=true;
function e(k){return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(i.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(i);
break;
case a.ui.keyCode.PAGE_DOWN:this.nextPage(i);
break;
case a.ui.keyCode.HOME:this._move("first","first",i);
break;
case a.ui.keyCode.END:this._move("last","last",i);
break;
case a.ui.keyCode.UP:this.previous(i);
break;
case a.ui.keyCode.DOWN:this.next(i);
break;
case a.ui.keyCode.LEFT:this.collapse(i);
break;
case a.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(i)
}break;
case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(i);
break;
case a.ui.keyCode.ESCAPE:this.collapse(i);
break;
default:c=false;
h=this.previousFilter||"";
j=String.fromCharCode(i.keyCode);
g=false;
clearTimeout(this.filterTimer);
if(j===h){g=true
}else{j=h+j
}f=new RegExp("^"+e(j),"i");
d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())
});
d=g&&d.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):d;
if(!d.length){j=String.fromCharCode(i.keyCode);
f=new RegExp("^"+e(j),"i");
d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())
})
}if(d.length){this.focus(i,d);
if(d.length>1){this.previousFilter=j;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(c){i.preventDefault()
}},_activate:function(c){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(c)
}else{this.select(c)
}}},refresh:function(){var e,d=this.options.icons.submenu,c=this.element.find(this.options.menus);
c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var h=a(this),g=h.prev("a"),f=a("<span>").addClass("ui-menu-icon ui-icon "+d).data("ui-menu-submenu-carat",true);
g.attr("aria-haspopup","true").prepend(f);
h.attr("aria-labelledby",g.attr("id"))
});
e=c.add(this.element);
e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
e.children(":not(.ui-menu-item)").each(function(){var f=a(this);
if(!/[^\-\u2014\u2013\s]/.test(f.text())){f.addClass("ui-widget-content ui-menu-divider")
}});
e.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!a.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(c,d){if(c==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
}this._super(c,d)
},focus:function(d,c){var f,e;
this.blur(d,d&&d.type==="focus");
this._scrollIntoView(c);
this.active=c.first();
e=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",e.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(d&&d.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}f=c.children(".ui-menu");
if(f.length&&(/^mouse/.test(d.type))){this._startOpening(f)
}this.activeMenu=c.parent();
this._trigger("focus",d,{item:c})
},_scrollIntoView:function(f){var i,e,g,c,d,h;
if(this._hasScroll()){i=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0;
e=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0;
g=f.offset().top-this.activeMenu.offset().top-i-e;
c=this.activeMenu.scrollTop();
d=this.activeMenu.height();
h=f.height();
if(g<0){this.activeMenu.scrollTop(c+g)
}else{if(g+h>d){this.activeMenu.scrollTop(c+g-d+h)
}}}},blur:function(d,c){if(!c){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",d,{item:this.active})
},_startOpening:function(c){clearTimeout(this.timer);
if(c.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(c)
},this.delay)
},_open:function(d){var c=a.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden","true");
d.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)
},collapseAll:function(d,c){clearTimeout(this.timer);
this.timer=this._delay(function(){var e=c?this.element:a(d&&d.target).closest(this.element.find(".ui-menu"));
if(!e.length){e=this.element
}this._close(e);
this.blur(d);
this.activeMenu=e
},this.delay)
},_close:function(c){if(!c){c=this.active?this.active.parent():this.element
}c.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(d){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(c&&c.length){this._close();
this.focus(d,c)
}},expand:function(d){var c=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(c&&c.length){this._open(c.parent());
this._delay(function(){this.focus(d,c)
})
}},next:function(c){this._move("next","first",c)
},previous:function(c){this._move("prev","last",c)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(f,d,e){var c;
if(this.active){if(f==="first"||f==="last"){c=this.active[f==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{c=this.active[f+"All"](".ui-menu-item").eq(0)
}}if(!c||!c.length||!this.active){c=this.activeMenu.children(".ui-menu-item")[d]()
}this.focus(e,c)
},nextPage:function(e){var d,f,c;
if(!this.active){this.next(e);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){f=this.active.offset().top;
c=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){d=a(this);
return d.offset().top-f-c<0
});
this.focus(e,d)
}else{this.focus(e,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(e){var d,f,c;
if(!this.active){this.next(e);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){f=this.active.offset().top;
c=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){d=a(this);
return d.offset().top-f+c>0
});
this.focus(e,d)
}else{this.focus(e,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||a(c.target).closest(".ui-menu-item");
var d={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(c,true)
}this._trigger("select",c,d)
}})
}(jQuery));
(function(e,c){e.ui=e.ui||{};
var j,k=Math.max,o=Math.abs,m=Math.round,d=/left|center|right/,h=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,b=/%$/,g=e.fn.position;
function n(r,q,p){return[parseFloat(r[0])*(b.test(r[0])?q/100:1),parseFloat(r[1])*(b.test(r[1])?p/100:1)]
}function i(p,q){return parseInt(e.css(p,q),10)||0
}function f(q){var p=q[0];
if(p.nodeType===9){return{width:q.width(),height:q.height(),offset:{top:0,left:0}}
}if(e.isWindow(p)){return{width:q.width(),height:q.height(),offset:{top:q.scrollTop(),left:q.scrollLeft()}}
}if(p.preventDefault){return{width:0,height:0,offset:{top:p.pageY,left:p.pageX}}
}return{width:q.outerWidth(),height:q.outerHeight(),offset:q.offset()}
}e.position={scrollbarWidth:function(){if(j!==c){return j
}var q,p,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];
e("body").append(s);
q=r.offsetWidth;
s.css("overflow","scroll");
p=r.offsetWidth;
if(q===p){p=s[0].clientWidth
}s.remove();
return(j=q-p)
},getScrollInfo:function(t){var s=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),q=s==="scroll"||(s==="auto"&&t.width<t.element[0].scrollWidth),p=r==="scroll"||(r==="auto"&&t.height<t.element[0].scrollHeight);
return{width:p?e.position.scrollbarWidth():0,height:q?e.position.scrollbarWidth():0}
},getWithinInfo:function(q){var r=e(q||window),p=e.isWindow(r[0]);
return{element:r,isWindow:p,offset:r.offset()||{left:0,top:0},scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop(),width:p?r.width():r.outerWidth(),height:p?r.height():r.outerHeight()}
}};
e.fn.position=function(z){if(!z||!z.of){return g.apply(this,arguments)
}z=e.extend({},z);
var A,w,u,y,t,p,v=e(z.of),s=e.position.getWithinInfo(z.within),q=e.position.getScrollInfo(s),x=(z.collision||"flip").split(" "),r={};
p=f(v);
if(v[0].preventDefault){z.at="left top"
}w=p.width;
u=p.height;
y=p.offset;
t=e.extend({},y);
e.each(["my","at"],function(){var D=(z[this]||"").split(" "),C,B;
if(D.length===1){D=d.test(D[0])?D.concat(["center"]):h.test(D[0])?["center"].concat(D):["center","center"]
}D[0]=d.test(D[0])?D[0]:"center";
D[1]=h.test(D[1])?D[1]:"center";
C=a.exec(D[0]);
B=a.exec(D[1]);
r[this]=[C?C[0]:0,B?B[0]:0];
z[this]=[l.exec(D[0])[0],l.exec(D[1])[0]]
});
if(x.length===1){x[1]=x[0]
}if(z.at[0]==="right"){t.left+=w
}else{if(z.at[0]==="center"){t.left+=w/2
}}if(z.at[1]==="bottom"){t.top+=u
}else{if(z.at[1]==="center"){t.top+=u/2
}}A=n(r.at,w,u);
t.left+=A[0];
t.top+=A[1];
return this.each(function(){var C,L,E=e(this),G=E.outerWidth(),D=E.outerHeight(),F=i(this,"marginLeft"),B=i(this,"marginTop"),K=G+F+i(this,"marginRight")+q.width,J=D+B+i(this,"marginBottom")+q.height,H=e.extend({},t),I=n(r.my,E.outerWidth(),E.outerHeight());
if(z.my[0]==="right"){H.left-=G
}else{if(z.my[0]==="center"){H.left-=G/2
}}if(z.my[1]==="bottom"){H.top-=D
}else{if(z.my[1]==="center"){H.top-=D/2
}}H.left+=I[0];
H.top+=I[1];
if(!e.support.offsetFractions){H.left=m(H.left);
H.top=m(H.top)
}C={marginLeft:F,marginTop:B};
e.each(["left","top"],function(N,M){if(e.ui.position[x[N]]){e.ui.position[x[N]][M](H,{targetWidth:w,targetHeight:u,elemWidth:G,elemHeight:D,collisionPosition:C,collisionWidth:K,collisionHeight:J,offset:[A[0]+I[0],A[1]+I[1]],my:z.my,at:z.at,within:s,elem:E})
}});
if(z.using){L=function(P){var R=y.left-H.left,O=R+w-G,Q=y.top-H.top,N=Q+u-D,M={target:{element:v,left:y.left,top:y.top,width:w,height:u},element:{element:E,left:H.left,top:H.top,width:G,height:D},horizontal:O<0?"left":R>0?"right":"center",vertical:N<0?"top":Q>0?"bottom":"middle"};
if(w<G&&o(R+O)<w){M.horizontal="center"
}if(u<D&&o(Q+N)<u){M.vertical="middle"
}if(k(o(R),o(O))>k(o(Q),o(N))){M.important="horizontal"
}else{M.important="vertical"
}z.using.call(this,P,M)
}
}E.offset(e.extend(H,{using:L}))
})
};
e.ui.position={fit:{left:function(t,s){var r=s.within,v=r.isWindow?r.scrollLeft:r.offset.left,x=r.width,u=t.left-s.collisionPosition.marginLeft,w=v-u,q=u+s.collisionWidth-x-v,p;
if(s.collisionWidth>x){if(w>0&&q<=0){p=t.left+w+s.collisionWidth-x-v;
t.left+=w-p
}else{if(q>0&&w<=0){t.left=v
}else{if(w>q){t.left=v+x-s.collisionWidth
}else{t.left=v
}}}}else{if(w>0){t.left+=w
}else{if(q>0){t.left-=q
}else{t.left=k(t.left-u,t.left)
}}}},top:function(s,r){var q=r.within,w=q.isWindow?q.scrollTop:q.offset.top,x=r.within.height,u=s.top-r.collisionPosition.marginTop,v=w-u,t=u+r.collisionHeight-x-w,p;
if(r.collisionHeight>x){if(v>0&&t<=0){p=s.top+v+r.collisionHeight-x-w;
s.top+=v-p
}else{if(t>0&&v<=0){s.top=w
}else{if(v>t){s.top=w+x-r.collisionHeight
}else{s.top=w
}}}}else{if(v>0){s.top+=v
}else{if(t>0){s.top-=t
}else{s.top=k(s.top-u,s.top)
}}}}},flip:{left:function(v,u){var t=u.within,z=t.offset.left+t.scrollLeft,C=t.width,r=t.isWindow?t.scrollLeft:t.offset.left,w=v.left-u.collisionPosition.marginLeft,A=w-r,q=w+u.collisionWidth-C-r,y=u.my[0]==="left"?-u.elemWidth:u.my[0]==="right"?u.elemWidth:0,B=u.at[0]==="left"?u.targetWidth:u.at[0]==="right"?-u.targetWidth:0,s=-2*u.offset[0],p,x;
if(A<0){p=v.left+y+B+s+u.collisionWidth-C-z;
if(p<0||p<o(A)){v.left+=y+B+s
}}else{if(q>0){x=v.left-u.collisionPosition.marginLeft+y+B+s-r;
if(x>0||o(x)<q){v.left+=y+B+s
}}}},top:function(u,t){var s=t.within,B=s.offset.top+s.scrollTop,C=s.height,p=s.isWindow?s.scrollTop:s.offset.top,w=u.top-t.collisionPosition.marginTop,y=w-p,v=w+t.collisionHeight-C-p,z=t.my[1]==="top",x=z?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,D=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,r=-2*t.offset[1],A,q;
if(y<0){q=u.top+x+D+r+t.collisionHeight-C-B;
if((u.top+x+D+r)>y&&(q<0||q<o(y))){u.top+=x+D+r
}}else{if(v>0){A=u.top-t.collisionPosition.marginTop+x+D+r-p;
if((u.top+x+D+r)>v&&(A>0||o(A)<v)){u.top+=x+D+r
}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);
e.ui.position.fit.left.apply(this,arguments)
},top:function(){e.ui.position.flip.top.apply(this,arguments);
e.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var t,v,q,s,r,p=document.getElementsByTagName("body")[0],u=document.createElement("div");
t=document.createElement(p?"div":"body");
q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(p){e.extend(q,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(r in q){t.style[r]=q[r]
}t.appendChild(u);
v=p||document.documentElement;
v.insertBefore(t,v.firstChild);
u.style.cssText="position: absolute; left: 10.7432222px;";
s=e(u).offset().left;
e.support.offsetFractions=s>10&&s<11;
t.innerHTML="";
v.removeChild(t)
})()
}(jQuery));
(function(a,b){a.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(c){if(c===b){return this.options.value
}this.options.value=this._constrainedValue(c);
this._refreshValue()
},_constrainedValue:function(c){if(c===b){c=this.options.value
}this.indeterminate=c===false;
if(typeof c!=="number"){c=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,c))
},_setOptions:function(c){var d=c.value;
delete c.value;
this._super(c);
this.options.value=this._constrainedValue(d);
this._refreshValue()
},_setOption:function(c,d){if(c==="max"){d=Math.max(this.min,d)
}this._super(c,d)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var d=this.options.value,c=this._percentage();
this.valueDiv.toggle(this.indeterminate||d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":d});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==d){this.oldValue=d;
this._trigger("change")
}if(d===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(b,c){var a=5;
b.widget("ui.slider",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
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
},_createHandles:function(){var g,d,e=this.options,j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),h="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",f=[];
d=(e.values&&e.values.length)||1;
if(j.length>d){j.slice(d).remove();
j=j.slice(0,d)
}for(g=j.length;
g<d;
g++){f.push(h)
}this.handles=j.add(b(f.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)
})
},_createRange:function(){var d=this.options,e="";
if(d.range){if(d.range===true){if(!d.values){d.values=[this._valueMin(),this._valueMin()]
}else{if(d.values.length&&d.values.length!==2){d.values=[d.values[0],d.values[0]]
}else{if(b.isArray(d.values)){d.values=d.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=b("<div></div>").appendTo(this.element);
e="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(e+((d.range==="min"||d.range==="max")?" ui-slider-range-"+d.range:""))
}else{this.range=b([])
}},_setupEvents:function(){var d=this.handles.add(this.range).filter("a");
this._off(d);
this._on(d,this._handleEvents);
this._hoverable(d);
this._focusable(d)
},_destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(f){var j,m,e,h,l,n,i,d,k=this,g=this.options;
if(g.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
j={x:f.pageX,y:f.pageY};
m=this._normValueFromMouse(j);
e=this._valueMax()-this._valueMin()+1;
this.handles.each(function(o){var p=Math.abs(m-k.values(o));
if((e>p)||(e===p&&(o===k._lastChangedValue||k.values(o)===g.min))){e=p;
h=b(this);
l=o
}});
n=this._start(f,l);
if(n===false){return false
}this._mouseSliding=true;
this._handleIndex=l;
h.addClass("ui-state-active").focus();
i=h.offset();
d=!b(f.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=d?{left:0,top:0}:{left:f.pageX-i.left-(h.width()/2),top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(f,l,m)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);
this._slide(f,this._handleIndex,e);
return false
},_mouseStop:function(d){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(d,this._handleIndex);
this._change(d,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(e){var d,h,g,f,i;
if(this.orientation==="horizontal"){d=this.elementSize.width;
h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{d=this.elementSize.height;
h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}g=(h/d);
if(g>1){g=1
}if(g<0){g=0
}if(this.orientation==="vertical"){g=1-g
}f=this._valueMax()-this._valueMin();
i=this._valueMin()+g*f;
return this._trimAlignValue(i)
},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}return this._trigger("start",f,d)
},_slide:function(h,g,f){var d,e,i;
if(this.options.values&&this.options.values.length){d=this.values(g?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d
}if(f!==this.values(g)){e=this.values();
e[g]=f;
i=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});
d=this.values(g?0:1);
if(i!==false){this.values(g,f,true)
}}}else{if(f!==this.value()){i=this._trigger("slide",h,{handle:this.handles[g],value:f});
if(i!==false){this.value(f)
}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._trigger("stop",f,d)
},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._lastChangedValue=e;
this._trigger("change",f,d)
}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(e,h){var g,d,f;
if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);
this._refreshValue();
this._change(null,e);
return
}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;
d=arguments[0];
for(f=0;
f<g.length;
f+=1){g[f]=this._trimAlignValue(d[f]);
this._change(null,f)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(e)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(e,f){var d,g=0;
if(e==="range"&&this.options.range===true){if(f==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(f==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(b.isArray(this.options.values)){g=this.options.values.length
}b.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"orientation":this._detectOrientation();
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
for(d=0;
d<g;
d+=1){this._change(null,d)
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
}},_value:function(){var d=this.options.value;
d=this._trimAlignValue(d);
return d
},_values:function(d){var g,f,e;
if(arguments.length){g=this.options.values[d];
g=this._trimAlignValue(g);
return g
}else{if(this.options.values&&this.options.values.length){f=this.options.values.slice();
for(e=0;
e<f.length;
e+=1){f[e]=this._trimAlignValue(f[e])
}return f
}else{return[]
}}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()
}if(g>=this._valueMax()){return this._valueMax()
}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;
if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)
}return parseFloat(e.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var i,h,l,j,m,g=this.options.range,f=this.options,k=this,e=(!this._animateOff)?f.animate:false,d={};
if(this.options.values&&this.options.values.length){this.handles.each(function(n){h=(k.values(n)-k._valueMin())/(k._valueMax()-k._valueMin())*100;
d[k.orientation==="horizontal"?"left":"bottom"]=h+"%";
b(this).stop(1,1)[e?"animate":"css"](d,f.animate);
if(k.options.range===true){if(k.orientation==="horizontal"){if(n===0){k.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({width:(h-i)+"%"},{queue:false,duration:f.animate})
}}else{if(n===0){k.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({height:(h-i)+"%"},{queue:false,duration:f.animate})
}}}i=h
})
}else{l=this.value();
j=this._valueMin();
m=this._valueMax();
h=(m!==j)?(l-j)/(m-j)*100:0;
d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";
this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);
if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})
}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})
}}},_handleEvents:{keydown:function(h){var i,f,e,g,d=b(h.target).data("ui-slider-handle-index");
switch(h.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:h.preventDefault();
if(!this._keySliding){this._keySliding=true;
b(h.target).addClass("ui-state-active");
i=this._start(h,d);
if(i===false){return
}}break
}g=this.options.step;
if(this.options.values&&this.options.values.length){f=e=this.values(d)
}else{f=e=this.value()
}switch(h.keyCode){case b.ui.keyCode.HOME:e=this._valueMin();
break;
case b.ui.keyCode.END:e=this._valueMax();
break;
case b.ui.keyCode.PAGE_UP:e=this._trimAlignValue(f+((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(f-((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}e=this._trimAlignValue(f+g);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(f===this._valueMin()){return
}e=this._trimAlignValue(f-g);
break
}this._slide(h,d,e)
},click:function(d){d.preventDefault()
},keyup:function(e){var d=b(e.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(e,d);
this._change(e,d);
b(e.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(b){function a(c){return function(){var d=this.element.val();
c.apply(this,arguments);
this._refresh();
if(d!==this.element.val()){this._trigger("change")
}}
}b.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
this._value(this.element.val(),true);
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c={},d=this.element;
b.each(["min","max","step"],function(e,f){var g=d.attr(f);
if(g!==undefined&&g.length){c[f]=g
}});
return c
},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",c)
}},mousewheel:function(c,d){if(!d){return
}if(!this.spinning&&!this._start(c)){return false
}this._spin((d>0?1:-1)*this.options.step,c);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(c)
}},100);
c.preventDefault()
},"mousedown .ui-spinner-button":function(d){var c;
c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function e(){var f=this.element[0]===this.document[0].activeElement;
if(!f){this.element.focus();
this.previous=c;
this._delay(function(){this.previous=c
})
}}d.preventDefault();
e.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
e.call(this)
});
if(this._start(d)===false){return
}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!b(c.currentTarget).hasClass("ui-state-active")){return
}if(this._start(c)===false){return false
}this._repeat(null,b(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(d){var c=this.options,e=b.ui.keyCode;
switch(d.keyCode){case e.UP:this._repeat(null,1,d);
return true;
case e.DOWN:this._repeat(null,-1,d);
return true;
case e.PAGE_UP:this._repeat(null,c.page,d);
return true;
case e.PAGE_DOWN:this._repeat(null,-c.page,d);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(d,c,e){d=d||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,c,e)
},d);
this._spin(c*this.options.step,e)
},_spin:function(d,c){var e=this.value()||0;
if(!this.counter){this.counter=1
}e=this._adjustValue(e+d*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);
this.counter++
}},_increment:function(c){var d=this.options.incremental;
if(d){return b.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)
}return 1
},_precision:function(){var c=this._precisionOf(this.options.step);
if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))
}return c
},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");
return c===-1?0:e.length-c-1
},_adjustValue:function(e){var d,f,c=this.options;
d=c.min!==null?c.min:0;
f=e-d;
f=Math.round(f/c.step)*c.step;
e=d+f;
e=parseFloat(e.toFixed(this._precision()));
if(c.max!==null&&e>c.max){return c.max
}if(c.min!==null&&e<c.min){return c.min
}return e
},_stop:function(c){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",c)
},_setOption:function(c,d){if(c==="culture"||c==="numberFormat"){var e=this._parse(this.element.val());
this.options[c]=d;
this.element.val(this._format(e));
return
}if(c==="max"||c==="min"||c==="step"){if(typeof d==="string"){d=this._parse(d)
}}if(c==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)
}this._super(c,d);
if(c==="disabled"){if(d){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:a(function(c){this._super(c);
this._value(this.element.val())
}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c
}return c===""||isNaN(c)?null:c
},_format:function(c){if(c===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(e,c){var d;
if(e!==""){d=this._parse(e);
if(d!==null){if(!c){d=this._adjustValue(d)
}e=this._format(d)
}}this.element.val(e);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:a(function(c){this._stepUp(c)
}),_stepUp:function(c){if(this._start()){this._spin((c||1)*this.options.step);
this._stop()
}},stepDown:a(function(c){this._stepDown(c)
}),_stepDown:function(c){if(this._start()){this._spin((c||1)*-this.options.step);
this._stop()
}},pageUp:a(function(c){this._stepUp((c||1)*this.options.page)
}),pageDown:a(function(c){this._stepDown((c||1)*this.options.page)
}),value:function(c){if(!arguments.length){return this._parse(this.element.val())
}a(this._value).call(this,c)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(c,e){var a=0,f=/#.*$/;
function d(){return ++a
}function b(g){return g.hash.length>1&&decodeURIComponent(g.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))
}c.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){if(c(this).is(".ui-state-disabled")){i.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
g.active=this._initialActive();
if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(i){return h.tabs.index(i)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(g.active)
}else{this.active=c()
}this._refresh();
if(this.active.length){this.load(g.active)
}},_initialActive:function(){var h=this.options.active,g=this.options.collapsible,i=location.hash.substring(1);
if(h===null){if(i){this.tabs.each(function(j,k){if(c(k).attr("aria-controls")===i){h=j;
return false
}})
}if(h===null){h=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(h===null||h===-1){h=this.tabs.length?0:false
}}if(h!==false){h=this.tabs.index(this.tabs.eq(h));
if(h===-1){h=g?false:0
}}if(!g&&h===false&&this.anchors.length){h=0
}return h
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}
},_tabKeydown:function(i){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),j=true;
if(this._handlePageNav(i)){return
}switch(i.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;
break;
case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:j=false;
g--;
break;
case c.ui.keyCode.END:g=this.anchors.length-1;
break;
case c.ui.keyCode.HOME:g=0;
break;
case c.ui.keyCode.SPACE:i.preventDefault();
clearTimeout(this.activating);
this._activate(g);
return;
case c.ui.keyCode.ENTER:i.preventDefault();
clearTimeout(this.activating);
this._activate(g===this.options.active?false:g);
return;
default:return
}i.preventDefault();
clearTimeout(this.activating);
g=this._focusNextTab(g,j);
if(!i.ctrlKey){h.attr("aria-selected","false");
this.tabs.eq(g).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",g)
},this.delay)
}},_panelKeydown:function(g){if(this._handlePageNav(g)){return
}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();
this.active.focus()
}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(h,i){var g=this.tabs.length-1;
function j(){if(h>g){h=0
}if(h<0){h=g
}return h
}while(c.inArray(j(),this.options.disabled)!==-1){h=i?h+1:h-1
}return h
},_focusNextTab:function(g,h){g=this._findNextTab(g,h);
this.tabs.eq(g).focus();
return g
},_setOption:function(g,h){if(g==="active"){this._activate(h);
return
}if(g==="disabled"){this._setupDisabled(h);
return
}this._super(g,h);
if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);
if(!h&&this.options.active===false){this._activate(0)
}}if(g==="event"){this._setupEvents(h)
}if(g==="heightStyle"){this._setupHeightStyle(h)
}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()
},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");
h.disabled=c.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)
});
this._processTabs();
if(h.active===false||!this.anchors.length){h.active=false;
this.active=c()
}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;
this.active=c()
}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))
}}else{h.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var g=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return c("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=c();
this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");
if(b(l)){h=l.hash;
j=g.element.find(g._sanitizeSelector(h))
}else{m=g._tabId(o);
h="#"+m;
j=g.element.find(h);
if(!j.length){j=g._createPanel(m);
j.insertAfter(g.panels[n-1]||g.tablist)
}j.attr("aria-live","polite")
}if(j.length){g.panels=g.panels.add(j)
}if(p){o.data("ui-tabs-aria-controls",p)
}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});
j.attr("aria-labelledby",k)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false
}else{if(j.length===this.anchors.length){j=true
}}}for(var h=0,g;
(g=this.tabs[h]);
h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=j
},_setupEvents:function(h){var g={click:function(i){i.preventDefault()
}};
if(h){c.each(h.split(" "),function(j,i){g[i]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,g);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(g){var i,h=this.element.parent();
if(g==="fill"){i=h.height();
i-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var k=c(this),j=k.css("position");
if(j==="absolute"||j==="fixed"){return
}i-=k.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){i-=c(this).outerHeight(true)
});
this.panels.each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))
}).css("overflow","auto")
}else{if(g==="auto"){i=0;
this.panels.each(function(){i=Math.max(i,c(this).height("").height())
}).height(i)
}}},_eventHandler:function(g){var p=this.options,k=this.active,l=c(g.currentTarget),j=l.closest("li"),n=j[0]===k[0],h=n&&p.collapsible,i=h?c():this._getPanelForTab(j),m=!k.length?c():this._getPanelForTab(k),o={oldTab:k,oldPanel:m,newTab:h?c():j,newPanel:i};
g.preventDefault();
if(j.hasClass("ui-state-disabled")||j.hasClass("ui-tabs-loading")||this.running||(n&&!p.collapsible)||(this._trigger("beforeActivate",g,o)===false)){return
}p.active=h?false:this.tabs.index(j);
this.active=n?c():j;
if(this.xhr){this.xhr.abort()
}if(!m.length&&!i.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(i.length){this.load(this.tabs.index(j),g)
}this._toggle(g,o)
},_toggle:function(m,l){var k=this,g=l.newPanel,j=l.oldPanel;
this.running=true;
function i(){k.running=false;
k._trigger("activate",m,l)
}function h(){l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&k.options.show){k._show(g,k.options.show,i)
}else{g.show();
i()
}}if(j.length&&this.options.hide){this._hide(j,this.options.hide,function(){l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()
})
}else{l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
j.hide();
h()
}j.attr({"aria-expanded":"false","aria-hidden":"true"});
l.oldTab.attr("aria-selected","false");
if(g.length&&j.length){l.oldTab.attr("tabIndex",-1)
}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}g.attr({"aria-expanded":"true","aria-hidden":"false"});
l.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(h){var g,i=this._findActive(h);
if(i[0]===this.active[0]){return
}if(!i.length){i=this.active
}g=i.find(".ui-tabs-anchor")[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})
},_findActive:function(g){return g===false?c():this.tabs.eq(g)
},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))
}return g
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()
}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");
if(h){g.attr("aria-controls",h).removeData("ui-tabs-aria-controls")
}else{g.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(g){var h=this.options.disabled;
if(h===false){return
}if(g===e){h=false
}else{g=this._getIndex(g);
if(c.isArray(h)){h=c.map(h,function(i){return i!==g?i:null
})
}else{h=c.map(this.tabs,function(i,j){return j!==g?j:null
})
}}this._setupDisabled(h)
},disable:function(g){var h=this.options.disabled;
if(h===true){return
}if(g===e){h=true
}else{g=this._getIndex(g);
if(c.inArray(g,h)!==-1){return
}if(c.isArray(h)){h=c.merge([g],h).sort()
}else{h=[g]
}}this._setupDisabled(h)
},load:function(i,m){i=this._getIndex(i);
var l=this,j=this.tabs.eq(i),h=j.find(".ui-tabs-anchor"),g=this._getPanelForTab(j),k={tab:j,panel:g};
if(b(h[0])){return
}this.xhr=c.ajax(this._ajaxSettings(h,m,k));
if(this.xhr&&this.xhr.statusText!=="canceled"){j.addClass("ui-tabs-loading");
g.attr("aria-busy","true");
this.xhr.success(function(n){setTimeout(function(){g.html(n);
l._trigger("load",m,k)
},1)
}).complete(function(o,n){setTimeout(function(){if(n==="abort"){l.panels.stop(false,true)
}j.removeClass("ui-tabs-loading");
g.removeAttr("aria-busy");
if(o===l.xhr){delete l.xhr
}},1)
})
}},_ajaxSettings:function(g,j,i){var h=this;
return{url:g.attr("href"),beforeSend:function(l,k){return h._trigger("beforeLoad",j,c.extend({jqXHR:l,ajaxSettings:k},i))
}}
},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+h))
}})
})(jQuery);
(function(d){var b=0;
function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);
e.push(g);
f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))
}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);
if(e!==-1){f.splice(e,1)
}g.removeData("ui-tooltip-id");
f=d.trim(f.join(" "));
if(f){g.attr("aria-describedby",f)
}else{g.removeAttr("aria-describedby")
}}d.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=d(this).attr("title")||"";
return d("<a>").text(e).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(e,g){var f=this;
if(e==="disabled"){this[g?"_disable":"_enable"]();
this.options[e]=g;
return
}this._super(e,g);
if(e==="content"){d.each(this.tooltips,function(i,h){f._updateContent(h)
})
}},_disable:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true)
});
this.element.find(this.options.items).addBack().each(function(){var f=d(this);
if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=d(this);
if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))
}})
},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);
if(!g.length||g.data("ui-tooltip-id")){return
}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))
}g.data("ui-tooltip-open",true);
if(f&&f.type==="mouseover"){g.parents().each(function(){var i=d(this),h;
if(i.data("ui-tooltip-open")){h=d.Event("blur");
h.target=h.currentTarget=this;
e.close(h,true)
}if(i.attr("title")){i.uniqueId();
e.parents[this.id]={element:this,title:i.attr("title")};
i.attr("title","")
}})
}this._updateContent(g,f)
},_updateContent:function(j,i){var h,e=this.options.content,g=this,f=i?i.type:null;
if(typeof e==="string"){return this._open(i,j,e)
}h=e.call(j[0],function(k){if(!j.data("ui-tooltip-open")){return
}g._delay(function(){if(i){i.type=f
}this._open(i,j,k)
})
});
if(h){this._open(i,j,h)
}},_open:function(i,k,h){var j,g,f,l=d.extend({},this.options.position);
if(!h){return
}j=this._find(k);
if(j.length){j.find(".ui-tooltip-content").html(h);
return
}if(k.is("[title]")){if(i&&i.type==="mouseover"){k.attr("title","")
}else{k.removeAttr("title")
}}j=this._tooltip(k);
c(k,j.attr("id"));
j.find(".ui-tooltip-content").html(h);
function e(m){l.of=m;
if(j.is(":hidden")){return
}j.position(l)
}if(this.options.track&&i&&/^mouse/.test(i.type)){this._on(this.document,{mousemove:e});
e(i)
}else{j.position(d.extend({of:k},this.options.position))
}j.hide();
this._show(j,this.options.show);
if(this.options.show&&this.options.show.delay){f=this.delayedShow=setInterval(function(){if(j.is(":visible")){e(l.of);
clearInterval(f)
}},d.fx.interval)
}this._trigger("open",i,{tooltip:j});
g={keyup:function(m){if(m.keyCode===d.ui.keyCode.ESCAPE){var n=d.Event(m);
n.currentTarget=k[0];
this.close(n,true)
}},remove:function(){this._removeTooltip(j)
}};
if(!i||i.type==="mouseover"){g.mouseleave="close"
}if(!i||i.type==="focusin"){g.focusout="close"
}this._on(true,k,g)
},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);
if(this.closing){return
}clearInterval(this.delayedShow);
if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))
}a(h);
g.stop(true);
this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))
});
h.removeData("ui-tooltip-open");
this._off(h,"mouseleave focusout keyup");
if(h[0]!==this.element[0]){this._off(h,"remove")
}this._off(this.document,"mousemove");
if(f&&f.type==="mouseleave"){d.each(this.parents,function(j,i){d(i.element).attr("title",i.title);
delete e.parents[j]
})
}this.closing=true;
this._trigger("close",f,{tooltip:g});
this.closing=false
},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
d("<div>").addClass("ui-tooltip-content").appendTo(f);
f.appendTo(this.document[0].body);
this.tooltips[g]=e;
return f
},_find:function(e){var f=e.data("ui-tooltip-id");
return f?d("#"+f):d()
},_removeTooltip:function(e){e.remove();
delete this.tooltips[e.attr("id")]
},_destroy:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true);
d("#"+h).remove();
if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));
f.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){module.exports=a
}else{a(jQuery)
}}}(function(c){var d=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],k=("onwheel" in document||document.documentMode>=9)?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice,j,b;
if(c.event.fixHooks){for(var e=d.length;
e;
){c.event.fixHooks[d[--e]]=c.event.mouseHooks
}}var f=c.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener){for(var m=k.length;
m;
){this.addEventListener(k[--m],l,false)
}}else{this.onmousewheel=l
}c.data(this,"mousewheel-line-height",f.getLineHeight(this));
c.data(this,"mousewheel-page-height",f.getPageHeight(this))
},teardown:function(){if(this.removeEventListener){for(var m=k.length;
m;
){this.removeEventListener(k[--m],l,false)
}}else{this.onmousewheel=null
}c.removeData(this,"mousewheel-line-height");
c.removeData(this,"mousewheel-page-height")
},getLineHeight:function(m){var i=c(m),n=i["offsetParent" in c.fn?"offsetParent":"parent"]();
if(!n.length){n=c("body")
}return parseInt(n.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16
},getPageHeight:function(i){return c(i).height()
},settings:{adjustOldDeltas:true,normalizeOffset:true}};
c.fn.extend({mousewheel:function(i){return i?this.bind("mousewheel",i):this.trigger("mousewheel")
},unmousewheel:function(i){return this.unbind("mousewheel",i)
}});
function l(i){var o=i||window.event,u=h.call(arguments,1),w=0,q=0,p=0,t=0,s=0,r=0;
i=c.event.fix(o);
i.type="mousewheel";
if("detail" in o){p=o.detail*-1
}if("wheelDelta" in o){p=o.wheelDelta
}if("wheelDeltaY" in o){p=o.wheelDeltaY
}if("wheelDeltaX" in o){q=o.wheelDeltaX*-1
}if("axis" in o&&o.axis===o.HORIZONTAL_AXIS){q=p*-1;
p=0
}w=p===0?q:p;
if("deltaY" in o){p=o.deltaY*-1;
w=p
}if("deltaX" in o){q=o.deltaX;
if(p===0){w=q*-1
}}if(p===0&&q===0){return
}if(o.deltaMode===1){var v=c.data(this,"mousewheel-line-height");
w*=v;
p*=v;
q*=v
}else{if(o.deltaMode===2){var n=c.data(this,"mousewheel-page-height");
w*=n;
p*=n;
q*=n
}}t=Math.max(Math.abs(p),Math.abs(q));
if(!b||t<b){b=t;
if(a(o,t)){b/=40
}}if(a(o,t)){w/=40;
q/=40;
p/=40
}w=Math[w>=1?"floor":"ceil"](w/b);
q=Math[q>=1?"floor":"ceil"](q/b);
p=Math[p>=1?"floor":"ceil"](p/b);
if(f.settings.normalizeOffset&&this.getBoundingClientRect){var m=this.getBoundingClientRect();
s=i.clientX-m.left;
r=i.clientY-m.top
}i.deltaX=q;
i.deltaY=p;
i.deltaFactor=b;
i.offsetX=s;
i.offsetY=r;
i.deltaMode=0;
u.unshift(i,w,q,p);
if(j){clearTimeout(j)
}j=setTimeout(g,200);
return(c.event.dispatch||c.event.handle).apply(this,u)
}function g(){b=null
}function a(m,i){return f.settings.adjustOldDeltas&&m.type==="mousewheel"&&i%120===0
}}));
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof module!=="undefined"&&module.exports){module.exports=a(require("jquery"))
}else{a(jQuery)
}}})(function(d){var a=d.scrollTo=function(g,f,e){return d(window).scrollTo(g,f,e)
};
a.defaults={axis:"xy",duration:0,limit:true};
function b(e){return !e.nodeName||d.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!==-1
}d.fn.scrollTo=function(h,g,f){if(typeof g==="object"){f=g;
g=0
}if(typeof f==="function"){f={onAfter:f}
}if(h==="max"){h=9000000000
}f=d.extend({},a.defaults,f);
g=g||f.duration;
var e=f.queue&&f.axis.length>1;
if(e){g/=2
}f.offset=c(f.offset);
f.over=c(f.over);
return this.each(function(){if(h===null){return
}var o=b(this),n=o?this.contentWindow||window:this,l=d(n),m=h,i={},k;
switch(typeof m){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=c(m);
break
}m=o?d(m):d(m,n);
case"object":if(m.length===0){return
}if(m.is||m.style){k=(m=d(m)).offset()
}}var p=d.isFunction(f.offset)&&f.offset(n,m)||f.offset;
d.each(f.axis.split(""),function(s,t){var v=t==="x"?"Left":"Top",x=v.toLowerCase(),r="scroll"+v,u=l[r](),q=a.max(n,t);
if(k){i[r]=k[x]+(o?0:u-l.offset()[x]);
if(f.margin){i[r]-=parseInt(m.css("margin"+v),10)||0;
i[r]-=parseInt(m.css("border"+v+"Width"),10)||0
}i[r]+=p[x]||0;
if(f.over[x]){i[r]+=m[t==="x"?"width":"height"]()*f.over[x]
}}else{var w=m[x];
i[r]=w.slice&&w.slice(-1)==="%"?parseFloat(w)/100*q:w
}if(f.limit&&/^\d+$/.test(i[r])){i[r]=i[r]<=0?0:Math.min(i[r],q)
}if(!s&&f.axis.length>1){if(u===i[r]){i={}
}else{if(e){j(f.onAfterFirst);
i={}
}}}});
j(f.onAfter);
function j(r){var q=d.extend({},f,{queue:true,duration:g,complete:r&&function(){r.call(n,m,f)
}});
l.animate(i,q)
}})
};
a.max=function(k,j){var i=j==="x"?"Width":"Height",f="scroll"+i;
if(!b(k)){return k[f]-d(k)[i.toLowerCase()]()
}var h="client"+i,l=k.ownerDocument||k.document,g=l.documentElement,e=l.body;
return Math.max(g[f],e[f])-Math.min(g[h],e[h])
};
function c(e){return d.isFunction(e)||d.isPlainObject(e)?e:{top:e,left:e}
}d.Tween.propHooks.scrollLeft=d.Tween.propHooks.scrollTop={get:function(e){return d(e.elem)[e.prop]()
},set:function(e){var g=this.get(e);
if(e.options.interrupt&&e._last&&e._last!==g){return d(e.elem).stop()
}var f=Math.round(e.now);
if(g!==f){d(e.elem)[e.prop](f);
e._last=this.get(e)
}}};
return a
});
/*!
* jQuery Cycle2; version: 2.1.5 build: 20140415
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(d){var a="2.1.5";
d.fn.cycle=function(e){var f;
if(this.length===0&&!d.isReady){f={s:this.selector,c:this.context};
d.fn.cycle.log("requeuing slideshow (dom not ready)");
d(function(){d(f.s,f.c).cycle(e)
});
return this
}return this.each(function(){var k,j,g,m;
var h=d(this);
var i=d.fn.cycle.log;
if(h.data("cycle.opts")){return
}if(h.data("cycle-log")===false||(e&&e.log===false)||(j&&j.log===false)){i=d.noop
}i("--c2 init--");
k=h.data();
for(var l in k){if(k.hasOwnProperty(l)&&/^cycle[A-Z]+/.test(l)){m=k[l];
g=l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b);
i(g+":",m,"("+typeof m+")");
k[g]=m
}}j=d.extend({},d.fn.cycle.defaults,k,e||{});
j.timeoutId=0;
j.paused=j.paused||false;
j.container=h;
j._maxZ=j.maxZ;
j.API=d.extend({_container:h},d.fn.cycle.API);
j.API.log=i;
j.API.trigger=function(n,o){j.container.trigger(n,o);
return j.API
};
h.data("cycle.opts",j);
h.data("cycle.API",j.API);
j.API.trigger("cycle-bootstrap",[j,j.API]);
j.API.addInitialSlides();
j.API.preInitSlideshow();
if(j.slides.length){j.API.initSlideshow()
}})
};
d.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")
},addInitialSlides:function(){var f=this.opts();
var e=f.slides;
f.slideCount=0;
f.slides=d();
e=e.jquery?e:f.container.find(e);
if(f.random){e.sort(function(){return Math.random()-0.5
})
}f.API.add(e)
},preInitSlideshow:function(){var f=this.opts();
f.API.trigger("cycle-pre-initialize",[f]);
var e=d.fn.cycle.transitions[f.fx];
if(e&&d.isFunction(e.preInit)){e.preInit(f)
}f._preInitialized=true
},postInitSlideshow:function(){var f=this.opts();
f.API.trigger("cycle-post-initialize",[f]);
var e=d.fn.cycle.transitions[f.fx];
if(e&&d.isFunction(e.postInit)){e.postInit(f)
}},initSlideshow:function(){var g=this.opts();
var e=g.container;
var f;
g.API.calcFirstSlide();
if(g.container.css("position")=="static"){g.container.css("position","relative")
}d(g.slides[g.currSlide]).css({opacity:1,display:"block",visibility:"visible"});
g.API.stackSlides(g.slides[g.currSlide],g.slides[g.nextSlide],!g.reverse);
if(g.pauseOnHover){if(g.pauseOnHover!==true){e=d(g.pauseOnHover)
}e.hover(function(){g.API.pause(true)
},function(){g.API.resume(true)
})
}if(g.timeout){f=g.API.getSlideOpts(g.currSlide);
g.API.queueTransition(f,f.timeout+g.delay)
}g._initialized=true;
g.API.updateView(true);
g.API.trigger("cycle-initialized",[g]);
g.API.postInitSlideshow()
},pause:function(e){var g=this.opts(),f=g.API.getSlideOpts(),h=g.hoverPaused||g.paused;
if(e){g.hoverPaused=true
}else{g.paused=true
}if(!h){g.container.addClass("cycle-paused");
g.API.trigger("cycle-paused",[g]).log("cycle-paused");
if(f.timeout){clearTimeout(g.timeoutId);
g.timeoutId=0;
g._remainingTimeout-=(d.now()-g._lastQueue);
if(g._remainingTimeout<0||isNaN(g._remainingTimeout)){g._remainingTimeout=undefined
}}}},resume:function(g){var h=this.opts(),f=!h.hoverPaused&&!h.paused,e;
if(g){h.hoverPaused=false
}else{h.paused=false
}if(!f){h.container.removeClass("cycle-paused");
if(h.slides.filter(":animated").length===0){h.API.queueTransition(h.API.getSlideOpts(),h._remainingTimeout)
}h.API.trigger("cycle-resumed",[h,h._remainingTimeout]).log("cycle-resumed")
}},add:function(h,f){var i=this.opts();
var g=i.slideCount;
var j=false;
var e;
if(d.type(h)=="string"){h=d.trim(h)
}d(h).each(function(l){var m;
var k=d(this);
if(f){i.container.prepend(k)
}else{i.container.append(k)
}i.slideCount++;
m=i.API.buildSlideOpts(k);
if(f){i.slides=d(k).add(i.slides)
}else{i.slides=i.slides.add(k)
}i.API.initSlide(m,k,--i._maxZ);
k.data("cycle.opts",m);
i.API.trigger("cycle-slide-added",[i,m,k])
});
i.API.updateView(true);
j=i._preInitialized&&(g<2&&i.slideCount>=1);
if(j){if(!i._initialized){i.API.initSlideshow()
}else{if(i.timeout){e=i.slides.length;
i.nextSlide=i.reverse?e-1:1;
if(!i.timeoutId){i.API.queueTransition(i)
}}}}},calcFirstSlide:function(){var f=this.opts();
var e;
e=parseInt(f.startingSlide||0,10);
if(e>=f.slides.length||e<0){e=0
}f.currSlide=e;
if(f.reverse){f.nextSlide=e-1;
if(f.nextSlide<0){f.nextSlide=f.slides.length-1
}}else{f.nextSlide=e+1;
if(f.nextSlide==f.slides.length){f.nextSlide=0
}}},calcNextSlide:function(){var f=this.opts();
var e;
if(f.reverse){e=(f.nextSlide-1)<0;
f.nextSlide=e?f.slideCount-1:f.nextSlide-1;
f.currSlide=e?0:f.nextSlide+1
}else{e=(f.nextSlide+1)==f.slides.length;
f.nextSlide=e?0:f.nextSlide+1;
f.currSlide=e?f.slides.length-1:f.nextSlide-1
}},calcTx:function(h,f){var g=h;
var e;
if(g._tempFx){e=d.fn.cycle.transitions[g._tempFx]
}else{if(f&&g.manualFx){e=d.fn.cycle.transitions[g.manualFx]
}}if(!e){e=d.fn.cycle.transitions[g.fx]
}g._tempFx=null;
this.opts()._tempFx=null;
if(!e){e=d.fn.cycle.transitions.fade;
g.API.log('Transition "'+g.fx+'" not found.  Using fade.')
}return e
},prepareTx:function(g,f){var j=this.opts();
var l,k,h,i,e;
if(j.slideCount<2){j.timeoutId=0;
return
}if(g&&(!j.busy||j.manualTrump)){j.API.stopTransition();
j.busy=false;
clearTimeout(j.timeoutId);
j.timeoutId=0
}if(j.busy){return
}if(j.timeoutId===0&&!g){return
}k=j.slides[j.currSlide];
h=j.slides[j.nextSlide];
i=j.API.getSlideOpts(j.nextSlide);
e=j.API.calcTx(i,g);
j._tx=e;
if(g&&i.manualSpeed!==undefined){i.speed=i.manualSpeed
}if(j.nextSlide!=j.currSlide&&(g||(!j.paused&&!j.hoverPaused&&j.timeout))){j.API.trigger("cycle-before",[i,k,h,f]);
if(e.before){e.before(i,k,h,f)
}l=function(){j.busy=false;
if(!j.container.data("cycle.opts")){return
}if(e.after){e.after(i,k,h,f)
}j.API.trigger("cycle-after",[i,k,h,f]);
j.API.queueTransition(i);
j.API.updateView(true)
};
j.busy=true;
if(e.transition){e.transition(i,k,h,f,l)
}else{j.API.doTransition(i,k,h,f,l)
}j.API.calcNextSlide();
j.API.updateView()
}else{j.API.queueTransition(i)
}},doTransition:function(i,j,f,g,l){var e=i;
var m=d(j),h=d(f);
var k=function(){h.animate(e.animIn||{opacity:1},e.speed,e.easeIn||e.easing,l)
};
h.css(e.cssBefore||{});
m.animate(e.animOut||{},e.speed,e.easeOut||e.easing,function(){m.css(e.cssAfter||{});
if(!e.sync){k()
}});
if(e.sync){k()
}},queueTransition:function(g,e){var f=this.opts();
var h=e!==undefined?e:g.timeout;
if(f.nextSlide===0&&--f.loop===0){f.API.log("terminating; loop=0");
f.timeout=0;
if(h){setTimeout(function(){f.API.trigger("cycle-finished",[f])
},h)
}else{f.API.trigger("cycle-finished",[f])
}f.nextSlide=f.currSlide;
return
}if(f.continueAuto!==undefined){if(f.continueAuto===false||(d.isFunction(f.continueAuto)&&f.continueAuto()===false)){f.API.log("terminating automatic transitions");
f.timeout=0;
if(f.timeoutId){clearTimeout(f.timeoutId)
}return
}}if(h){f._lastQueue=d.now();
if(e===undefined){f._remainingTimeout=g.timeout
}if(!f.paused&&!f.hoverPaused){f.timeoutId=setTimeout(function(){f.API.prepareTx(false,!f.reverse)
},h)
}}},stopTransition:function(){var e=this.opts();
if(e.slides.filter(":animated").length){e.slides.stop(false,true);
e.API.trigger("cycle-transition-stopped",[e])
}if(e._tx&&e._tx.stopTransition){e._tx.stopTransition(e)
}},advanceSlide:function(f){var e=this.opts();
clearTimeout(e.timeoutId);
e.timeoutId=0;
e.nextSlide=e.currSlide+f;
if(e.nextSlide<0){e.nextSlide=e.slides.length-1
}else{if(e.nextSlide>=e.slides.length){e.nextSlide=0
}}e.API.prepareTx(true,f>=0);
return false
},buildSlideOpts:function(g){var i=this.opts();
var l,f;
var h=g.data()||{};
for(var k in h){if(h.hasOwnProperty(k)&&/^cycle[A-Z]+/.test(k)){l=h[k];
f=k.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b);
i.API.log("["+(i.slideCount-1)+"]",f+":",l,"("+typeof l+")");
h[f]=l
}}h=d.extend({},d.fn.cycle.defaults,i,h);
h.slideNum=i.slideCount;
try{delete h.API;
delete h.slideCount;
delete h.currSlide;
delete h.nextSlide;
delete h.slides
}catch(j){}return h
},getSlideOpts:function(f){var h=this.opts();
if(f===undefined){f=h.currSlide
}var e=h.slides[f];
var g=d(e).data("cycle.opts");
return d.extend({},h,g)
},initSlide:function(h,e,f){var g=this.opts();
e.css(h.slideCss||{});
if(f>0){e.css("zIndex",f)
}if(isNaN(h.speed)){h.speed=d.fx.speeds[h.speed]||d.fx.speeds._default
}if(!h.sync){h.speed=h.speed/2
}e.addClass(g.slideClass)
},updateView:function(e,j,f){var i=this.opts();
if(!i._initialized){return
}var h=i.API.getSlideOpts();
var g=i.slides[i.currSlide];
if(!e&&j!==true){i.API.trigger("cycle-update-view-before",[i,h,g]);
if(i.updateView<0){return
}}if(i.slideActiveClass){i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass)
}if(e&&i.hideNonActive){i.slides.filter(":not(."+i.slideActiveClass+")").css("visibility","hidden")
}if(i.updateView===0){setTimeout(function(){i.API.trigger("cycle-update-view",[i,h,g,e])
},h.speed/(i.sync?2:1))
}if(i.updateView!==0){i.API.trigger("cycle-update-view",[i,h,g,e])
}if(e){i.API.trigger("cycle-update-view-after",[i,h,g])
}},getComponent:function(f){var g=this.opts();
var e=g[f];
if(typeof e==="string"){return(/^\s*[\>|\+|~]/).test(e)?g.container.find(e):d(e)
}if(e.jquery){return e
}return d(e)
},stackSlides:function(k,h,g){var j=this.opts();
if(!k){k=j.slides[j.currSlide];
h=j.slides[j.nextSlide];
g=!j.reverse
}d(k).css("zIndex",j.maxZ);
var f;
var l=j.maxZ-2;
var e=j.slideCount;
if(g){for(f=j.currSlide+1;
f<e;
f++){d(j.slides[f]).css("zIndex",l--)
}for(f=0;
f<j.currSlide;
f++){d(j.slides[f]).css("zIndex",l--)
}}else{for(f=j.currSlide-1;
f>=0;
f--){d(j.slides[f]).css("zIndex",l--)
}for(f=e-1;
f>j.currSlide;
f--){d(j.slides[f]).css("zIndex",l--)
}}d(h).css("zIndex",j.maxZ-1)
},getSlideIndex:function(e){return this.opts().slides.index(e)
}};
d.fn.cycle.log=function c(){if(window.console&&console.log){console.log("[cycle2] "+Array.prototype.join.call(arguments," "))
}};
d.fn.cycle.version=function(){return"Cycle2: "+a
};
function b(e){return(e||"").toLowerCase()
}d.fn.cycle.transitions={custom:{},none:{before:function(g,h,f,e){g.API.stackSlides(f,h,e);
g.cssBefore={opacity:1,visibility:"visible",display:"block"}
}},fade:{before:function(h,i,g,f){var e=h.API.getSlideOpts(h.nextSlide).slideCss||{};
h.API.stackSlides(i,g,f);
h.cssBefore=d.extend(e,{opacity:0,visibility:"visible",display:"block"});
h.animIn={opacity:1};
h.animOut={opacity:0}
}},fadeout:{before:function(h,i,g,f){var e=h.API.getSlideOpts(h.nextSlide).slideCss||{};
h.API.stackSlides(i,g,f);
h.cssBefore=d.extend(e,{opacity:1,visibility:"visible",display:"block"});
h.animOut={opacity:0}
}},scrollHorz:{before:function(h,i,g,f){h.API.stackSlides(i,g,f);
var e=h.container.css("overflow","hidden").width();
h.cssBefore={left:f?e:-e,top:0,opacity:1,visibility:"visible",display:"block"};
h.cssAfter={zIndex:h._maxZ-2,left:0};
h.animIn={left:0};
h.animOut={left:f?-e:e}
}}};
d.fn.cycle.defaults={allowWrap:true,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:true,loop:0,manualFx:undefined,manualSpeed:undefined,manualTrump:true,maxZ:100,pauseOnHover:false,reverse:false,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:true,timeout:4000,updateView:0};
d(document).ready(function(){d(d.fn.cycle.defaults.autoSelector).cycle()
})
})(jQuery);
/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
(function(d){d.extend(d.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null});
d(document).on("cycle-initialized",function(l,k){var g=k.autoHeight;
var h=d.type(g);
var f=null;
var i;
if(h!=="string"&&h!=="number"){return
}k.container.on("cycle-slide-added cycle-slide-removed",b);
k.container.on("cycle-destroyed",c);
if(g=="container"){k.container.on("cycle-before",e)
}else{if(h==="string"&&/\d+\:\d+/.test(g)){i=g.match(/(\d+)\:(\d+)/);
i=i[1]/i[2];
k._autoHeightRatio=i
}}if(h!=="number"){k._autoHeightOnResize=function(){clearTimeout(f);
f=setTimeout(j,50)
};
d(window).on("resize orientationchange",k._autoHeightOnResize)
}setTimeout(j,30);
function j(){b(l,k)
}});
function b(i,h){var k,f,j;
var g=h.autoHeight;
if(g=="container"){f=d(h.slides[h.currSlide]).outerHeight();
h.container.height(f)
}else{if(h._autoHeightRatio){h.container.height(h.container.width()/h._autoHeightRatio)
}else{if(g==="calc"||(d.type(g)=="number"&&g>=0)){if(g==="calc"){j=a(i,h)
}else{if(g>=h.slides.length){j=0
}else{j=g
}}if(j==h._sentinelIndex){return
}h._sentinelIndex=j;
if(h._sentinel){h._sentinel.remove()
}k=d(h.slides[j].cloneNode(true));
k.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel");
k.css({position:"static",visibility:"hidden",display:"block"}).prependTo(h.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active");
k.find("*").css("visibility","hidden");
h._sentinel=k
}}}}function a(i,h){var g=0,f=-1;
h.slides.each(function(j){var k=d(this).height();
if(k>f){f=k;
g=j
}});
return g
}function e(l,k,i,f,g){var j=d(f).outerHeight();
k.container.animate({height:j},k.autoHeightSpeed,k.autoHeightEasing)
}function c(g,f){if(f._autoHeightOnResize){d(window).off("resize orientationchange",f._autoHeightOnResize);
f._autoHeightOnResize=null
}f.container.off("cycle-slide-added cycle-slide-removed",b);
f.container.off("cycle-destroyed",c);
f.container.off("cycle-before",e);
if(f._sentinel){f._sentinel.remove();
f._sentinel=null
}}})(jQuery);
/*! caption plugin for Cycle2;  version: 20130306 */
(function(a){a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"});
a(document).on("cycle-update-view",function(g,f,d,c){if(f.captionModule!=="caption"){return
}var b;
a.each(["caption","overlay"],function(){var e=this;
var i=d[e+"Template"];
var h=f.API.getComponent(e);
if(h.length&&i){h.html(f.API.tmpl(i,d,f,c));
h.show()
}else{h.hide()
}})
});
a(document).on("cycle-destroyed",function(d,c){var b;
a.each(["caption","overlay"],function(){var e=this,f=c[e+"Template"];
if(c[e]&&f){b=c.API.getComponent("caption");
b.empty()
}})
})
})(jQuery);
/*! command plugin for Cycle2;  version: 20140415 */
(function(b){var a=b.fn.cycle;
b.fn.cycle=function(d){var g,f,e;
var c=b.makeArray(arguments);
if(b.type(d)=="number"){return this.cycle("goto",d)
}if(b.type(d)=="string"){return this.each(function(){var h;
g=d;
e=b(this).data("cycle.opts");
if(e===undefined){a.log('slideshow must be initialized before sending commands; "'+g+'" ignored');
return
}else{g=g=="goto"?"jump":g;
f=e.API[g];
if(b.isFunction(f)){h=b.makeArray(c);
h.shift();
return f.apply(e.API,h)
}else{a.log("unknown command: ",g)
}}})
}else{return a.apply(this,arguments)
}};
b.extend(b.fn.cycle,a);
b.extend(a.API,{next:function(){var d=this.opts();
if(d.busy&&!d.manualTrump){return
}var c=d.reverse?-1:1;
if(d.allowWrap===false&&(d.currSlide+c)>=d.slideCount){return
}d.API.advanceSlide(c);
d.API.trigger("cycle-next",[d]).log("cycle-next")
},prev:function(){var d=this.opts();
if(d.busy&&!d.manualTrump){return
}var c=d.reverse?1:-1;
if(d.allowWrap===false&&(d.currSlide+c)<0){return
}d.API.advanceSlide(c);
d.API.trigger("cycle-prev",[d]).log("cycle-prev")
},destroy:function(){this.stop();
var d=this.opts();
var c=b.isFunction(b._data)?b._data:b.noop;
clearTimeout(d.timeoutId);
d.timeoutId=0;
d.API.stop();
d.API.trigger("cycle-destroyed",[d]).log("cycle-destroyed");
d.container.removeData();
c(d.container[0],"parsedAttrs",false);
if(!d.retainStylesOnDestroy){d.container.removeAttr("style");
d.slides.removeAttr("style");
d.slides.removeClass(d.slideActiveClass)
}d.slides.each(function(){b(this).removeData();
c(this,"parsedAttrs",false)
})
},jump:function(d,g){var e;
var f=this.opts();
if(f.busy&&!f.manualTrump){return
}var c=parseInt(d,10);
if(isNaN(c)||c<0||c>=f.slides.length){f.API.log("goto: invalid slide index: "+c);
return
}if(c==f.currSlide){f.API.log("goto: skipping, already on slide",c);
return
}f.nextSlide=c;
clearTimeout(f.timeoutId);
f.timeoutId=0;
f.API.log("goto: ",c," (zero-index)");
e=f.currSlide<f.nextSlide;
f._tempFx=g;
f.API.prepareTx(true,e)
},stop:function(){var d=this.opts();
var c=d.container;
clearTimeout(d.timeoutId);
d.timeoutId=0;
d.API.stopTransition();
if(d.pauseOnHover){if(d.pauseOnHover!==true){c=b(d.pauseOnHover)
}c.off("mouseenter mouseleave")
}d.API.trigger("cycle-stopped",[d]).log("cycle-stopped")
},reinit:function(){var c=this.opts();
c.API.destroy();
c.container.cycle()
},remove:function(e){var j=this.opts();
var c,d,h=[],g=1;
for(var f=0;
f<j.slides.length;
f++){c=j.slides[f];
if(f==e){d=c
}else{h.push(c);
b(c).data("cycle.opts").slideNum=g;
g++
}}if(d){j.slides=b(h);
j.slideCount--;
b(d).remove();
if(e==j.currSlide){j.API.advanceSlide(1)
}else{if(e<j.currSlide){j.currSlide--
}else{j.currSlide++
}}j.API.trigger("cycle-slide-removed",[j,e,d]).log("cycle-slide-removed");
j.API.updateView()
}}});
b(document).on("click.cycle","[data-cycle-cmd]",function(f){f.preventDefault();
var d=b(this);
var g=d.data("cycle-cmd");
var c=d.data("cycle-context")||".cycle-slideshow";
b(c).cycle(g,d.data("cycle-arg"))
})
})(jQuery);
/*! hash plugin for Cycle2;  version: 20130905 */
(function(b){b(document).on("cycle-pre-initialize",function(d,c){a(c,true);
c._onHashChange=function(){a(c,false)
};
b(window).on("hashchange",c._onHashChange)
});
b(document).on("cycle-update-view",function(f,d,c){if(c.hash&&("#"+c.hash)!=window.location.hash){d._hashFence=true;
window.location.hash=c.hash
}});
b(document).on("cycle-destroyed",function(d,c){if(c._onHashChange){b(window).off("hashchange",c._onHashChange)
}});
function a(d,c){var e;
if(d._hashFence){d._hashFence=false;
return
}e=window.location.hash.substring(1);
d.slides.each(function(g){if(b(this).data("cycle-hash")==e){if(c===true){d.startingSlide=g
}else{var f=d.currSlide<g;
d.nextSlide=g;
d.API.prepareTx(true,f)
}return false
}})
}})(jQuery);
/*! loader plugin for Cycle2;  version: 20131121 */
(function(a){a.extend(a.fn.cycle.defaults,{loader:false});
a(document).on("cycle-bootstrap",function(d,b){var f;
if(!b.loader){return
}f=b.API.add;
b.API.add=c;
function c(l,j){var h=[];
if(a.type(l)=="string"){l=a.trim(l)
}else{if(a.type(l)==="array"){for(var k=0;
k<l.length;
k++){l[k]=a(l[k])[0]
}}}l=a(l);
var g=l.length;
if(!g){return
}l.css("visibility","hidden").appendTo("body").each(function(q){var r=0;
var o=a(this);
var n=o.is("img")?o:o.find("img");
o.data("index",q);
n=n.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])');
if(!n.length){--g;
h.push(o);
return
}r=n.length;
n.each(function(){if(this.complete){p()
}else{a(this).load(function(){p()
}).on("error",function(){if(--r===0){b.API.log("slide skipped; img not loaded:",this.src);
if(--g===0&&b.loader=="wait"){f.apply(b.API,[h,j])
}}})
}});
function p(){if(--r===0){--g;
e(o)
}}});
if(g){b.container.addClass("cycle-loading")
}function e(i){var n;
if(b.loader=="wait"){h.push(i);
if(g===0){h.sort(m);
f.apply(b.API,[h,j]);
b.container.removeClass("cycle-loading")
}}else{n=a(b.slides[b.currSlide]);
f.apply(b.API,[i,j]);
n.show();
b.container.removeClass("cycle-loading")
}}function m(n,i){return n.data("index")-i.data("index")
}}})
})(jQuery);
/*! pager plugin for Cycle2;  version: 20140415 */
(function(c){c.extend(c.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:undefined,pagerTemplate:"<span>&bull;</span>"});
c(document).on("cycle-bootstrap",function(g,f,d){d.buildPagerLink=a
});
c(document).on("cycle-slide-added",function(g,f,d,h){if(f.pager){f.API.buildPagerLink(f,d,h);
f.API.page=b
}});
c(document).on("cycle-slide-removed",function(i,h,f,g){if(h.pager){var d=h.API.getComponent("pager");
d.each(function(){var e=c(this);
c(e.children()[f]).remove()
})
}});
c(document).on("cycle-update-view",function(h,g,f){var d;
if(g.pager){d=g.API.getComponent("pager");
d.each(function(){c(this).children().removeClass(g.pagerActiveClass).eq(g.currSlide).addClass(g.pagerActiveClass)
})
}});
c(document).on("cycle-destroyed",function(g,f){var d=f.API.getComponent("pager");
if(d){d.children().off(f.pagerEvent);
if(f.pagerTemplate){d.empty()
}}});
function a(g,f,d){var h;
var e=g.API.getComponent("pager");
e.each(function(){var i=c(this);
if(f.pagerTemplate){var j=g.API.tmpl(f.pagerTemplate,f,g,d[0]);
h=c(j).appendTo(i)
}else{h=i.children().eq(g.slideCount-1)
}h.on(g.pagerEvent,function(k){if(!g.pagerEventBubble){k.preventDefault()
}g.API.page(i,k.currentTarget)
})
})
}function b(d,i){var g=this.opts();
if(g.busy&&!g.manualTrump){return
}var e=d.children().index(i);
var h=e;
var f=g.currSlide<h;
if(g.currSlide==h){return
}g.nextSlide=h;
g._tempFx=g.pagerFx;
g.API.prepareTx(true,f);
g.API.trigger("cycle-pager-activated",[g,d,i])
}})(jQuery);
/*! prevnext plugin for Cycle2;  version: 20140408 */
(function(a){a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:false});
a(document).on("cycle-initialized",function(f,c){c.API.getComponent("next").on(c.nextEvent,function(g){g.preventDefault();
c.API.next()
});
c.API.getComponent("prev").on(c.prevEvent,function(g){g.preventDefault();
c.API.prev()
});
if(c.swipe){var b=c.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle";
var d=c.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";
c.container.on(b,function(g){c._tempFx=c.swipeFx;
c.API.next()
});
c.container.on(d,function(){c._tempFx=c.swipeFx;
c.API.prev()
})
}});
a(document).on("cycle-update-view",function(h,b,g,j){if(b.allowWrap){return
}var k=b.disabledClass;
var d=b.API.getComponent("next");
var c=b.API.getComponent("prev");
var i=b._prevBoundry||0;
var f=(b._nextBoundry!==undefined)?b._nextBoundry:b.slideCount-1;
if(b.currSlide==f){d.addClass(k).prop("disabled",true)
}else{d.removeClass(k).prop("disabled",false)
}if(b.currSlide===i){c.addClass(k).prop("disabled",true)
}else{c.removeClass(k).prop("disabled",false)
}});
a(document).on("cycle-destroyed",function(c,b){b.API.getComponent("prev").off(b.nextEvent);
b.API.getComponent("next").off(b.prevEvent);
b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
})
})(jQuery);
/*! progressive loader plugin for Cycle2;  version: 20130315 */
(function(a){a.extend(a.fn.cycle.defaults,{progressive:false});
a(document).on("cycle-pre-initialize",function(h,b){if(!b.progressive){return
}var f=b.API;
var k=f.next;
var i=f.prev;
var l=f.prepareTx;
var j=a.type(b.progressive);
var c,d;
if(j=="array"){c=b.progressive
}else{if(a.isFunction(b.progressive)){c=b.progressive(b)
}else{if(j=="string"){d=a(b.progressive);
c=a.trim(d.html());
if(!c){return
}if(/^(\[)/.test(c)){try{c=a.parseJSON(c)
}catch(g){f.log("error parsing progressive slides",g);
return
}}else{c=c.split(new RegExp(d.data("cycle-split")||"\n"));
if(!c[c.length-1]){c.pop()
}}}}}if(l){f.prepareTx=function(o,n){var m,e;
if(o||c.length===0){l.apply(b.API,[o,n]);
return
}if(n&&b.currSlide==(b.slideCount-1)){e=c[0];
c=c.slice(1);
b.container.one("cycle-slide-added",function(q,p){setTimeout(function(){p.API.advanceSlide(1)
},50)
});
b.API.add(e)
}else{if(!n&&b.currSlide===0){m=c.length-1;
e=c[m];
c=c.slice(0,m);
b.container.one("cycle-slide-added",function(q,p){setTimeout(function(){p.currSlide=1;
p.API.advanceSlide(-1)
},50)
});
b.API.add(e,true)
}else{l.apply(b.API,[o,n])
}}}
}if(k){f.next=function(){var m=this.opts();
if(c.length&&m.currSlide==(m.slideCount-1)){var e=c[0];
c=c.slice(1);
m.container.one("cycle-slide-added",function(o,n){k.apply(n.API);
n.container.removeClass("cycle-loading")
});
m.container.addClass("cycle-loading");
m.API.add(e)
}else{k.apply(m.API)
}}
}if(i){f.prev=function(){var n=this.opts();
if(c.length&&n.currSlide===0){var m=c.length-1;
var e=c[m];
c=c.slice(0,m);
n.container.one("cycle-slide-added",function(p,o){o.currSlide=1;
o.API.advanceSlide(-1);
o.container.removeClass("cycle-loading")
});
n.container.addClass("cycle-loading");
n.API.add(e,true)
}else{i.apply(n.API)
}}
}})
})(jQuery);
/*! tmpl plugin for Cycle2;  version: 20121227 */
(function(a){a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"});
a.extend(a.fn.cycle.API,{tmpl:function(e,d){var c=new RegExp(d.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g");
var b=a.makeArray(arguments);
b.shift();
return e.replace(c,function(g,m){var h,f,l,n,k=m.split(".");
for(h=0;
h<b.length;
h++){l=b[h];
if(!l){continue
}if(k.length>1){n=l;
for(f=0;
f<k.length;
f++){l=n;
n=n[k[f]]||m
}}else{n=l[m]
}if(a.isFunction(n)){return n.apply(l,b)
}if(n!==undefined&&n!==null&&n!=m){return n
}}return m
})
}})
})(jQuery);
(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")
};
a.ScrollToFixed=function(d,i){var l=this;
l.$el=a(d);
l.el=d;
l.$el.data("ScrollToFixed",l);
var c=false;
var G=l.$el;
var H;
var E;
var e;
var y;
var D=0;
var q=0;
var j=-1;
var f=-1;
var t=null;
var z;
var g;
function u(){G.trigger("preUnfixed.ScrollToFixed");
k();
G.trigger("unfixed.ScrollToFixed");
f=-1;
D=G.offset().top;
q=G.offset().left;
if(l.options.offsets){q+=(G.offset().left-G.position().left)
}if(j==-1){j=q
}H=G.css("position");
c=true;
if(l.options.bottom!=-1){G.trigger("preFixed.ScrollToFixed");
w();
G.trigger("fixed.ScrollToFixed")
}}function n(){var I=l.options.limit;
if(!I){return 0
}if(typeof(I)==="function"){return I.apply(G)
}return I
}function p(){return H==="fixed"
}function x(){return H==="absolute"
}function h(){return !(p()||x())
}function w(){if(!p()){t.css({display:G.css("display"),width:G.outerWidth(true),height:G.outerHeight(true),"float":G.css("float")});
cssOptions={"z-index":l.options.zIndex,position:"fixed",top:l.options.bottom==-1?s():"",bottom:l.options.bottom==-1?"":l.options.bottom,"margin-left":"0px"};
if(!l.options.dontSetWidth){cssOptions.width=G.width()
}G.css(cssOptions);
G.addClass(l.options.baseClassName);
if(l.options.className){G.addClass(l.options.className)
}H="fixed"
}}function b(){var J=n();
var I=q;
if(l.options.removeOffsets){I="";
J=J-D
}cssOptions={position:"absolute",top:J,left:I,"margin-left":"0px",bottom:""};
if(!l.options.dontSetWidth){cssOptions.width=G.width()
}G.css(cssOptions);
H="absolute"
}function k(){if(!h()){f=-1;
t.css("display","none");
G.css({"z-index":y,width:"",position:E,left:"",top:e,"margin-left":""});
G.removeClass("scroll-to-fixed-fixed");
if(l.options.className){G.removeClass(l.options.className)
}H=null
}}function v(I){if(I!=f){G.css("left",q-I);
f=I
}}function s(){var I=l.options.marginTop;
if(!I){return 0
}if(typeof(I)==="function"){return I.apply(G)
}return I
}function A(){if(!a.isScrollToFixed(G)){return
}var K=c;
if(!c){u()
}else{if(h()){D=G.offset().top;
q=G.offset().left
}}var I=a(window).scrollLeft();
var L=a(window).scrollTop();
var J=n();
if(l.options.minWidth&&a(window).width()<l.options.minWidth){if(!h()||!K){o();
G.trigger("preUnfixed.ScrollToFixed");
k();
G.trigger("unfixed.ScrollToFixed")
}}else{if(l.options.maxWidth&&a(window).width()>l.options.maxWidth){if(!h()||!K){o();
G.trigger("preUnfixed.ScrollToFixed");
k();
G.trigger("unfixed.ScrollToFixed")
}}else{if(l.options.bottom==-1){if(J>0&&L>=J-s()){if(!x()||!K){o();
G.trigger("preAbsolute.ScrollToFixed");
b();
G.trigger("unfixed.ScrollToFixed")
}}else{if(L>=D-s()){if(!p()||!K){o();
G.trigger("preFixed.ScrollToFixed");
w();
f=-1;
G.trigger("fixed.ScrollToFixed")
}v(I)
}else{if(!h()||!K){o();
G.trigger("preUnfixed.ScrollToFixed");
k();
G.trigger("unfixed.ScrollToFixed")
}}}}else{if(J>0){if(L+a(window).height()-G.outerHeight(true)>=J-(s()||-m())){if(p()){o();
G.trigger("preUnfixed.ScrollToFixed");
if(E==="absolute"){b()
}else{k()
}G.trigger("unfixed.ScrollToFixed")
}}else{if(!p()){o();
G.trigger("preFixed.ScrollToFixed");
w()
}v(I);
G.trigger("fixed.ScrollToFixed")
}}else{v(I)
}}}}}function m(){if(!l.options.bottom){return 0
}return l.options.bottom
}function o(){var I=G.css("position");
if(I=="absolute"){G.trigger("postAbsolute.ScrollToFixed")
}else{if(I=="fixed"){G.trigger("postFixed.ScrollToFixed")
}else{G.trigger("postUnfixed.ScrollToFixed")
}}}var C=function(I){if(G.is(":visible")){c=false;
A()
}};
var F=function(I){(!!window.requestAnimationFrame)?requestAnimationFrame(A):A()
};
var B=function(){var J=document.body;
if(document.createElement&&J&&J.appendChild&&J.removeChild){var L=document.createElement("div");
if(!L.getBoundingClientRect){return null
}L.innerHTML="x";
L.style.cssText="position:fixed;top:100px;";
J.appendChild(L);
var M=J.style.height,N=J.scrollTop;
J.style.height="3000px";
J.scrollTop=500;
var I=L.getBoundingClientRect().top;
J.style.height=M;
var K=(I===100);
J.removeChild(L);
J.scrollTop=N;
return K
}return null
};
var r=function(I){I=I||window.event;
if(I.preventDefault){I.preventDefault()
}I.returnValue=false
};
l.init=function(){l.options=a.extend({},a.ScrollToFixed.defaultOptions,i);
y=G.css("z-index");
l.$el.css("z-index",l.options.zIndex);
t=a("<div />");
H=G.css("position");
E=G.css("position");
e=G.css("top");
if(h()){l.$el.after(t)
}a(window).bind("resize.ScrollToFixed",C);
a(window).bind("scroll.ScrollToFixed",F);
if("ontouchmove" in window){a(window).bind("touchmove.ScrollToFixed",A)
}if(l.options.preFixed){G.bind("preFixed.ScrollToFixed",l.options.preFixed)
}if(l.options.postFixed){G.bind("postFixed.ScrollToFixed",l.options.postFixed)
}if(l.options.preUnfixed){G.bind("preUnfixed.ScrollToFixed",l.options.preUnfixed)
}if(l.options.postUnfixed){G.bind("postUnfixed.ScrollToFixed",l.options.postUnfixed)
}if(l.options.preAbsolute){G.bind("preAbsolute.ScrollToFixed",l.options.preAbsolute)
}if(l.options.postAbsolute){G.bind("postAbsolute.ScrollToFixed",l.options.postAbsolute)
}if(l.options.fixed){G.bind("fixed.ScrollToFixed",l.options.fixed)
}if(l.options.unfixed){G.bind("unfixed.ScrollToFixed",l.options.unfixed)
}if(l.options.spacerClass){t.addClass(l.options.spacerClass)
}G.bind("resize.ScrollToFixed",function(){t.height(G.height())
});
G.bind("scroll.ScrollToFixed",function(){G.trigger("preUnfixed.ScrollToFixed");
k();
G.trigger("unfixed.ScrollToFixed");
A()
});
G.bind("detach.ScrollToFixed",function(I){r(I);
G.trigger("preUnfixed.ScrollToFixed");
k();
G.trigger("unfixed.ScrollToFixed");
a(window).unbind("resize.ScrollToFixed",C);
a(window).unbind("scroll.ScrollToFixed",F);
G.unbind(".ScrollToFixed");
t.remove();
l.$el.removeData("ScrollToFixed")
});
C()
};
l.init()
};
a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};
a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))
})
}
})(jQuery);
(function(c,b,a){(function(g){var f=typeof define==="function"&&define.amd,d=("https:"==a.location.protocol)?"https:":"http:",e="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
if(!f){c.event.special.mousewheel||c("head").append(decodeURI("%3Cscript src="+d+"//"+e+"%3E%3C/script%3E"))
}g()
}(function(){var o="mCustomScrollbar",m="mCS",g=".mCustomScrollbar",I={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:true,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:true,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:true,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:true,updateOnImageLoad:true},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:true}},z=0,U={},R=(b.attachEvent&&!b.addEventListener)?1:0,V=false,k,h=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],K={init:function(ah){var ah=c.extend(true,{},I,ah),ag=F.call(this);
if(ah.live){var aj=ah.liveSelector||this.selector||g,ai=c(aj);
if(ah.live==="off"){A(aj);
return
}U[aj]=setTimeout(function(){ai.mCustomScrollbar(ah);
if(ah.live==="once"&&ai.length){A(aj)
}},500)
}else{A(aj)
}ah.setWidth=(ah.set_width)?ah.set_width:ah.setWidth;
ah.setHeight=(ah.set_height)?ah.set_height:ah.setHeight;
ah.axis=(ah.horizontalScroll)?"x":u(ah.axis);
ah.scrollInertia=ah.scrollInertia>0&&ah.scrollInertia<17?17:ah.scrollInertia;
if(typeof ah.mouseWheel!=="object"&&ah.mouseWheel==true){ah.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
}ah.mouseWheel.scrollAmount=!ah.mouseWheelPixels?ah.mouseWheel.scrollAmount:ah.mouseWheelPixels;
ah.mouseWheel.normalizeDelta=!ah.advanced.normalizeMouseWheelDelta?ah.mouseWheel.normalizeDelta:ah.advanced.normalizeMouseWheelDelta;
ah.scrollButtons.scrollType=e(ah.scrollButtons.scrollType);
L(ah);
return c(ag).each(function(){var al=c(this);
if(!al.data(m)){al.data(m,{idx:++z,opt:ah,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:false,tweenRunning:false,sequential:{},langDir:al.css("direction"),cbOffsets:null,trigger:null});
var ao=al.data(m),an=ao.opt,am=al.data("mcs-axis"),ak=al.data("mcs-scrollbar-position"),ap=al.data("mcs-theme");
if(am){an.axis=am
}if(ak){an.scrollbarPosition=ak
}if(ap){an.theme=ap;
L(an)
}ae.call(this);
c("#mCSB_"+ao.idx+"_container img:not(."+h[2]+")").addClass(h[2]);
K.update.call(null,al)
}})
},update:function(ai,ah){var ag=ai||F.call(this);
return c(ag).each(function(){var al=c(this);
if(al.data(m)){var an=al.data(m),am=an.opt,aj=c("#mCSB_"+an.idx+"_container"),ak=[c("#mCSB_"+an.idx+"_dragger_vertical"),c("#mCSB_"+an.idx+"_dragger_horizontal")];
if(!aj.length){return
}if(an.tweenRunning){r(al)
}if(al.hasClass(h[3])){al.removeClass(h[3])
}if(al.hasClass(h[4])){al.removeClass(h[4])
}B.call(this);
E.call(this);
if(am.axis!=="y"&&!am.advanced.autoExpandHorizontalScroll){aj.css("width",w(aj.children()))
}an.overflowed=S.call(this);
af.call(this);
if(am.autoDraggerLength){y.call(this)
}N.call(this);
s.call(this);
var ao=[Math.abs(aj[0].offsetTop),Math.abs(aj[0].offsetLeft)];
if(am.axis!=="x"){if(!an.overflowed[0]){x.call(this);
if(am.axis==="y"){C.call(this)
}else{if(am.axis==="yx"&&an.overflowed[1]){t(al,ao[1].toString(),{dir:"x",dur:0,overwrite:"none"})
}}}else{if(ak[0].height()>ak[0].parent().height()){x.call(this)
}else{t(al,ao[0].toString(),{dir:"y",dur:0,overwrite:"none"});
an.contentReset.y=null
}}}if(am.axis!=="y"){if(!an.overflowed[1]){x.call(this);
if(am.axis==="x"){C.call(this)
}else{if(am.axis==="yx"&&an.overflowed[0]){t(al,ao[0].toString(),{dir:"y",dur:0,overwrite:"none"})
}}}else{if(ak[1].width()>ak[1].parent().width()){x.call(this)
}else{t(al,ao[1].toString(),{dir:"x",dur:0,overwrite:"none"});
an.contentReset.x=null
}}}if(ah&&an){if(ah===2&&am.callbacks.onImageLoad&&typeof am.callbacks.onImageLoad==="function"){am.callbacks.onImageLoad.call(this)
}else{if(ah===3&&am.callbacks.onSelectorChange&&typeof am.callbacks.onSelectorChange==="function"){am.callbacks.onSelectorChange.call(this)
}else{if(am.callbacks.onUpdate&&typeof am.callbacks.onUpdate==="function"){am.callbacks.onUpdate.call(this)
}}}}aa.call(this)
}})
},scrollTo:function(ai,ah){if(typeof ai=="undefined"||ai==null){return
}var ag=F.call(this);
return c(ag).each(function(){var al=c(this);
if(al.data(m)){var ao=al.data(m),an=ao.opt,am={trigger:"external",scrollInertia:an.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:false,timeout:60,callbacks:true,onStart:true,onUpdate:true,onComplete:true},aj=c.extend(true,{},am,ah),ap=q.call(this,ai),ak=aj.scrollInertia>0&&aj.scrollInertia<17?17:aj.scrollInertia;
ap[0]=ab.call(this,ap[0],"y");
ap[1]=ab.call(this,ap[1],"x");
if(aj.moveDragger){ap[0]*=ao.scrollRatio.y;
ap[1]*=ao.scrollRatio.x
}aj.dur=ak;
setTimeout(function(){if(ap[0]!==null&&typeof ap[0]!=="undefined"&&an.axis!=="x"&&ao.overflowed[0]){aj.dir="y";
aj.overwrite="all";
t(al,ap[0].toString(),aj)
}if(ap[1]!==null&&typeof ap[1]!=="undefined"&&an.axis!=="y"&&ao.overflowed[1]){aj.dir="x";
aj.overwrite="none";
t(al,ap[1].toString(),aj)
}},aj.timeout)
}})
},stop:function(){var ag=F.call(this);
return c(ag).each(function(){var ah=c(this);
if(ah.data(m)){r(ah)
}})
},disable:function(ah){var ag=F.call(this);
return c(ag).each(function(){var ai=c(this);
if(ai.data(m)){var aj=ai.data(m);
aa.call(this,"remove");
C.call(this);
if(ah){x.call(this)
}af.call(this,true);
ai.addClass(h[3])
}})
},destroy:function(){var ag=F.call(this);
return c(ag).each(function(){var aj=c(this);
if(aj.data(m)){var al=aj.data(m),ak=al.opt,ah=c("#mCSB_"+al.idx),ai=c("#mCSB_"+al.idx+"_container"),am=c(".mCSB_"+al.idx+"_scrollbar");
if(ak.live){A(ak.liveSelector||c(ag).selector)
}aa.call(this,"remove");
C.call(this);
x.call(this);
aj.removeData(m);
X(this,"mcs");
am.remove();
ai.find("img."+h[2]).removeClass(h[2]);
ah.replaceWith(ai.contents());
aj.removeClass(o+" _"+m+"_"+al.idx+" "+h[6]+" "+h[7]+" "+h[5]+" "+h[3]).addClass(h[4])
}})
}},F=function(){return(typeof c(this)!=="object"||c(this).length<1)?g:this
},L=function(aj){var ai=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],ah=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],ag=["minimal","minimal-dark"],al=["minimal","minimal-dark"],ak=["minimal","minimal-dark"];
aj.autoDraggerLength=c.inArray(aj.theme,ai)>-1?false:aj.autoDraggerLength;
aj.autoExpandScrollbar=c.inArray(aj.theme,ah)>-1?false:aj.autoExpandScrollbar;
aj.scrollButtons.enable=c.inArray(aj.theme,ag)>-1?false:aj.scrollButtons.enable;
aj.autoHideScrollbar=c.inArray(aj.theme,al)>-1?true:aj.autoHideScrollbar;
aj.scrollbarPosition=c.inArray(aj.theme,ak)>-1?"outside":aj.scrollbarPosition
},A=function(ag){if(U[ag]){clearTimeout(U[ag]);
X(U,ag)
}},u=function(ag){return(ag==="yx"||ag==="xy"||ag==="auto")?"yx":(ag==="x"||ag==="horizontal")?"x":"y"
},e=function(ag){return(ag==="stepped"||ag==="pixels"||ag==="step"||ag==="click")?"stepped":"stepless"
},ae=function(){var ap=c(this),ao=ap.data(m),ai=ao.opt,ak=ai.autoExpandScrollbar?" "+h[1]+"_expand":"",at=["<div id='mCSB_"+ao.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+ao.idx+"_scrollbar mCS-"+ai.theme+" mCSB_scrollTools_vertical"+ak+"'><div class='"+h[12]+"'><div id='mCSB_"+ao.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+ao.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+ao.idx+"_scrollbar mCS-"+ai.theme+" mCSB_scrollTools_horizontal"+ak+"'><div class='"+h[12]+"'><div id='mCSB_"+ao.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],al=ai.axis==="yx"?"mCSB_vertical_horizontal":ai.axis==="x"?"mCSB_horizontal":"mCSB_vertical",an=ai.axis==="yx"?at[0]+at[1]:ai.axis==="x"?at[1]:at[0],am=ai.axis==="yx"?"<div id='mCSB_"+ao.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",aj=ai.autoHideScrollbar?" "+h[6]:"",ag=(ai.axis!=="x"&&ao.langDir==="rtl")?" "+h[7]:"";
if(ai.setWidth){ap.css("width",ai.setWidth)
}if(ai.setHeight){ap.css("height",ai.setHeight)
}ai.setLeft=(ai.axis!=="y"&&ao.langDir==="rtl")?"989999px":ai.setLeft;
ap.addClass(o+" _"+m+"_"+ao.idx+aj+ag).wrapInner("<div id='mCSB_"+ao.idx+"' class='mCustomScrollBox mCS-"+ai.theme+" "+al+"'><div id='mCSB_"+ao.idx+"_container' class='mCSB_container' style='position:relative; top:"+ai.setTop+"; left:"+ai.setLeft+";' dir="+ao.langDir+" /></div>");
var ah=c("#mCSB_"+ao.idx),aq=c("#mCSB_"+ao.idx+"_container");
if(ai.axis!=="y"&&!ai.advanced.autoExpandHorizontalScroll){aq.css("width",w(aq.children()))
}if(ai.scrollbarPosition==="outside"){if(ap.css("position")==="static"){ap.css("position","relative")
}ap.css("overflow","visible");
ah.addClass("mCSB_outside").after(an)
}else{ah.addClass("mCSB_inside").append(an);
aq.wrap(am)
}ad.call(this);
var ar=[c("#mCSB_"+ao.idx+"_dragger_vertical"),c("#mCSB_"+ao.idx+"_dragger_horizontal")];
ar[0].css("min-height",ar[0].height());
ar[1].css("min-width",ar[1].width())
},w=function(ag){return Math.max.apply(Math,ag.map(function(){return c(this).outerWidth(true)
}).get())
},E=function(){var ah=c(this),aj=ah.data(m),ai=aj.opt,ag=c("#mCSB_"+aj.idx+"_container");
if(ai.advanced.autoExpandHorizontalScroll&&ai.axis!=="y"){ag.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:(Math.ceil(ag[0].getBoundingClientRect().right+0.4)-Math.floor(ag[0].getBoundingClientRect().left)),position:"relative"}).unwrap()
}},ad=function(){var ak=c(this),am=ak.data(m),al=am.opt,ai=c(".mCSB_"+am.idx+"_scrollbar:first"),ah=!i(al.scrollButtons.tabindex)?"":"tabindex='"+al.scrollButtons.tabindex+"'",aj=["<a href='#' class='"+h[13]+"' oncontextmenu='return false;' "+ah+" />","<a href='#' class='"+h[14]+"' oncontextmenu='return false;' "+ah+" />","<a href='#' class='"+h[15]+"' oncontextmenu='return false;' "+ah+" />","<a href='#' class='"+h[16]+"' oncontextmenu='return false;' "+ah+" />"],ag=[(al.axis==="x"?aj[2]:aj[0]),(al.axis==="x"?aj[3]:aj[1]),aj[2],aj[3]];
if(al.scrollButtons.enable){ai.prepend(ag[0]).append(ag[1]).next(".mCSB_scrollTools").prepend(ag[2]).append(ag[3])
}},B=function(){var ak=c(this),am=ak.data(m),ai=c("#mCSB_"+am.idx),ah=ak.css("max-height")||"none",aj=ah.indexOf("%")!==-1,ag=ak.css("box-sizing");
if(ah!=="none"){var al=aj?ak.parent().height()*parseInt(ah)/100:parseInt(ah);
if(ag==="border-box"){al-=((ak.innerHeight()-ak.height())+(ak.outerHeight()-ak.innerHeight()))
}ai.css("max-height",Math.round(al))
}},y=function(){var al=c(this),aj=al.data(m),ag=c("#mCSB_"+aj.idx),am=c("#mCSB_"+aj.idx+"_container"),ao=[c("#mCSB_"+aj.idx+"_dragger_vertical"),c("#mCSB_"+aj.idx+"_dragger_horizontal")],ak=[ag.height()/am.outerHeight(false),ag.width()/am.outerWidth(false)],ah=[parseInt(ao[0].css("min-height")),Math.round(ak[0]*ao[0].parent().height()),parseInt(ao[1].css("min-width")),Math.round(ak[1]*ao[1].parent().width())],ai=R&&(ah[1]<ah[0])?ah[0]:ah[1],an=R&&(ah[3]<ah[2])?ah[2]:ah[3];
ao[0].css({height:ai,"max-height":(ao[0].parent().height()-10)}).find(".mCSB_dragger_bar").css({"line-height":ah[0]+"px"});
ao[1].css({width:an,"max-width":(ao[1].parent().width()-10)})
},N=function(){var ak=c(this),am=ak.data(m),ah=c("#mCSB_"+am.idx),ai=c("#mCSB_"+am.idx+"_container"),aj=[c("#mCSB_"+am.idx+"_dragger_vertical"),c("#mCSB_"+am.idx+"_dragger_horizontal")],al=[ai.outerHeight(false)-ah.height(),ai.outerWidth(false)-ah.width()],ag=[al[0]/(aj[0].parent().height()-aj[0].height()),al[1]/(aj[1].parent().width()-aj[1].width())];
am.scrollRatio={y:ag[0],x:ag[1]}
},j=function(ah,aj,ag){var ai=ag?h[0]+"_expanded":"",ak=ah.closest(".mCSB_scrollTools");
if(aj==="active"){ah.toggleClass(h[0]+" "+ai);
ak.toggleClass(h[1]);
ah[0]._draggable=ah[0]._draggable?0:1
}else{if(!ah[0]._draggable){if(aj==="hide"){ah.removeClass(h[0]);
ak.removeClass(h[1])
}else{ah.addClass(h[0]);
ak.addClass(h[1])
}}}},S=function(){var ak=c(this),al=ak.data(m),ah=c("#mCSB_"+al.idx),aj=c("#mCSB_"+al.idx+"_container"),ai=al.overflowed==null?aj.height():aj.outerHeight(false),ag=al.overflowed==null?aj.width():aj.outerWidth(false);
return[ai>ah.height(),ag>ah.width()]
},x=function(){var ak=c(this),am=ak.data(m),al=am.opt,ah=c("#mCSB_"+am.idx),ai=c("#mCSB_"+am.idx+"_container"),aj=[c("#mCSB_"+am.idx+"_dragger_vertical"),c("#mCSB_"+am.idx+"_dragger_horizontal")];
r(ak);
if((al.axis!=="x"&&!am.overflowed[0])||(al.axis==="y"&&am.overflowed[0])){aj[0].add(ai).css("top",0);
t(ak,"_resetY")
}if((al.axis!=="y"&&!am.overflowed[1])||(al.axis==="x"&&am.overflowed[1])){var ag=dx=0;
if(am.langDir==="rtl"){ag=ah.width()-ai.outerWidth(false);
dx=Math.abs(ag/am.scrollRatio.x)
}ai.css("left",ag);
aj[1].css("left",dx);
t(ak,"_resetX")
}},s=function(){var ai=c(this),ak=ai.data(m),aj=ak.opt;
if(!ak.bindEvents){J.call(this);
if(aj.contentTouchScroll){n.call(this)
}G.call(this);
if(aj.mouseWheel.enable){function ah(){ag=setTimeout(function(){if(!c.event.special.mousewheel){ah()
}else{clearTimeout(ag);
p.call(ai[0])
}},100)
}var ag;
ah()
}f.call(this);
Z.call(this);
if(aj.advanced.autoScrollOnFocus){Q.call(this)
}if(aj.scrollButtons.enable){ac.call(this)
}if(aj.keyboard.enable){P.call(this)
}ak.bindEvents=true
}},C=function(){var aj=c(this),al=aj.data(m),ak=al.opt,ag=m+"_"+al.idx,am=".mCSB_"+al.idx+"_scrollbar",ai=c("#mCSB_"+al.idx+",#mCSB_"+al.idx+"_container,#mCSB_"+al.idx+"_container_wrapper,"+am+" ."+h[12]+",#mCSB_"+al.idx+"_dragger_vertical,#mCSB_"+al.idx+"_dragger_horizontal,"+am+">a"),ah=c("#mCSB_"+al.idx+"_container");
if(ak.advanced.releaseDraggableSelectors){ai.add(c(ak.advanced.releaseDraggableSelectors))
}if(al.bindEvents){c(a).unbind("."+ag);
ai.each(function(){c(this).unbind("."+ag)
});
clearTimeout(aj[0]._focusTimeout);
X(aj[0],"_focusTimeout");
clearTimeout(al.sequential.step);
X(al.sequential,"step");
clearTimeout(ah[0].onCompleteTimeout);
X(ah[0],"onCompleteTimeout");
al.bindEvents=false
}},af=function(ah){var ak=c(this),am=ak.data(m),al=am.opt,ag=c("#mCSB_"+am.idx+"_container_wrapper"),ai=ag.length?ag:c("#mCSB_"+am.idx+"_container"),an=[c("#mCSB_"+am.idx+"_scrollbar_vertical"),c("#mCSB_"+am.idx+"_scrollbar_horizontal")],aj=[an[0].find(".mCSB_dragger"),an[1].find(".mCSB_dragger")];
if(al.axis!=="x"){if(am.overflowed[0]&&!ah){an[0].add(aj[0]).add(an[0].children("a")).css("display","block");
ai.removeClass(h[8]+" "+h[10])
}else{if(al.alwaysShowScrollbar){if(al.alwaysShowScrollbar!==2){aj[0].css("display","none")
}ai.removeClass(h[10])
}else{an[0].css("display","none");
ai.addClass(h[10])
}ai.addClass(h[8])
}}if(al.axis!=="y"){if(am.overflowed[1]&&!ah){an[1].add(aj[1]).add(an[1].children("a")).css("display","block");
ai.removeClass(h[9]+" "+h[11])
}else{if(al.alwaysShowScrollbar){if(al.alwaysShowScrollbar!==2){aj[1].css("display","none")
}ai.removeClass(h[11])
}else{an[1].css("display","none");
ai.addClass(h[11])
}ai.addClass(h[9])
}}if(!am.overflowed[0]&&!am.overflowed[1]){ak.addClass(h[5])
}else{ak.removeClass(h[5])
}},l=function(ai){var ag=ai.type;
switch(ag){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[ai.originalEvent.pageY,ai.originalEvent.pageX,false];
break;
case"touchstart":case"touchmove":case"touchend":var aj=ai.originalEvent.touches[0]||ai.originalEvent.changedTouches[0],ah=ai.originalEvent.touches.length||ai.originalEvent.changedTouches.length;
return[aj.pageY,aj.pageX,ah>1];
break;
default:return[ai.pageY,ai.pageX,false]
}},J=function(){var al=c(this),aj=al.data(m),ag=aj.opt,ai=m+"_"+aj.idx,ak=["mCSB_"+aj.idx+"_dragger_vertical","mCSB_"+aj.idx+"_dragger_horizontal"],am=c("#mCSB_"+aj.idx+"_container"),an=c("#"+ak[0]+",#"+ak[1]),at,ap,ar,aq=ag.advanced.releaseDraggableSelectors?an.add(c(ag.advanced.releaseDraggableSelectors)):an;
an.bind("mousedown."+ai+" touchstart."+ai+" pointerdown."+ai+" MSPointerDown."+ai,function(ax){ax.stopImmediatePropagation();
ax.preventDefault();
if(!W(ax)){return
}V=true;
if(R){a.onselectstart=function(){return false
}
}ao(false);
r(al);
at=c(this);
var ay=at.offset(),az=l(ax)[0]-ay.top,au=l(ax)[1]-ay.left,aw=at.height()+ay.top,av=at.width()+ay.left;
if(az<aw&&az>0&&au<av&&au>0){ap=az;
ar=au
}j(at,"active",ag.autoExpandScrollbar)
}).bind("touchmove."+ai,function(av){av.stopImmediatePropagation();
av.preventDefault();
var aw=at.offset(),ax=l(av)[0]-aw.top,au=l(av)[1]-aw.left;
ah(ap,ar,ax,au)
});
c(a).bind("mousemove."+ai+" pointermove."+ai+" MSPointerMove."+ai,function(av){if(at){var aw=at.offset(),ax=l(av)[0]-aw.top,au=l(av)[1]-aw.left;
if(ap===ax){return
}ah(ap,ar,ax,au)
}}).add(aq).bind("mouseup."+ai+" touchend."+ai+" pointerup."+ai+" MSPointerUp."+ai,function(au){if(at){j(at,"active",ag.autoExpandScrollbar);
at=null
}V=false;
if(R){a.onselectstart=null
}ao(true)
});
function ao(au){var av=am.find("iframe");
if(!av.length){return
}var aw=!au?"none":"auto";
av.css("pointer-events",aw)
}function ah(aw,ax,az,au){am[0].idleTimer=ag.scrollInertia<233?250:0;
if(at.attr("id")===ak[1]){var av="x",ay=((at[0].offsetLeft-ax)+au)*aj.scrollRatio.x
}else{var av="y",ay=((at[0].offsetTop-aw)+az)*aj.scrollRatio.y
}t(al,ay.toString(),{dir:av,drag:true})
}},n=function(){var ap=c(this),aD=ap.data(m),aA=aD.opt,ax=m+"_"+aD.idx,am=c("#mCSB_"+aD.idx),aq=c("#mCSB_"+aD.idx+"_container"),an=[c("#mCSB_"+aD.idx+"_dragger_vertical"),c("#mCSB_"+aD.idx+"_dragger_horizontal")],aw,ay,aE,aF,au=[],av=[],az,ar,al,ak,aB,ao,ai=0,ah,aj=aA.axis==="yx"?"none":"all",aG=[],aH,aC;
aq.bind("touchstart."+ax+" pointerdown."+ax+" MSPointerDown."+ax,function(aI){if(!T(aI)||V||l(aI)[2]){k=0;
return
}k=1;
aH=0;
aC=0;
var aJ=aq.offset();
aw=l(aI)[0]-aJ.top;
ay=l(aI)[1]-aJ.left;
aG=[l(aI)[0],l(aI)[1]]
}).bind("touchmove."+ax+" pointermove."+ax+" MSPointerMove."+ax,function(aL){if(!T(aL)||V||l(aL)[2]){return
}aL.stopImmediatePropagation();
if(aC&&!aH){return
}ar=O();
var aK=am.offset(),aN=l(aL)[0]-aK.top,aP=l(aL)[1]-aK.left,aM="mcsLinearOut";
au.push(aN);
av.push(aP);
aG[2]=Math.abs(l(aL)[0]-aG[0]);
aG[3]=Math.abs(l(aL)[1]-aG[1]);
if(aD.overflowed[0]){var aJ=an[0].parent().height()-an[0].height(),aO=((aw-aN)>0&&(aN-aw)>-(aJ*aD.scrollRatio.y)&&(aG[3]*2<aG[2]||aA.axis==="yx"))
}if(aD.overflowed[1]){var aI=an[1].parent().width()-an[1].width(),aQ=((ay-aP)>0&&(aP-ay)>-(aI*aD.scrollRatio.x)&&(aG[2]*2<aG[3]||aA.axis==="yx"))
}if(aO||aQ){aL.preventDefault();
aH=1
}else{aC=1
}ao=aA.axis==="yx"?[(aw-aN),(ay-aP)]:aA.axis==="x"?[null,(ay-aP)]:[(aw-aN),null];
aq[0].idleTimer=250;
if(aD.overflowed[0]){at(ao[0],ai,aM,"y","all",true)
}if(aD.overflowed[1]){at(ao[1],ai,aM,"x",aj,true)
}});
am.bind("touchstart."+ax+" pointerdown."+ax+" MSPointerDown."+ax,function(aI){if(!T(aI)||V||l(aI)[2]){k=0;
return
}k=1;
aI.stopImmediatePropagation();
r(ap);
az=O();
var aJ=am.offset();
aE=l(aI)[0]-aJ.top;
aF=l(aI)[1]-aJ.left;
au=[];
av=[]
}).bind("touchend."+ax+" pointerup."+ax+" MSPointerUp."+ax,function(aK){if(!T(aK)||V||l(aK)[2]){return
}aK.stopImmediatePropagation();
aH=0;
aC=0;
al=O();
var aI=am.offset(),aO=l(aK)[0]-aI.top,aQ=l(aK)[1]-aI.left;
if((al-ar)>30){return
}aB=1000/(al-az);
var aL="mcsEaseOut",aM=aB<2.5,aR=aM?[au[au.length-2],av[av.length-2]]:[0,0];
ak=aM?[(aO-aR[0]),(aQ-aR[1])]:[aO-aE,aQ-aF];
var aJ=[Math.abs(ak[0]),Math.abs(ak[1])];
aB=aM?[Math.abs(ak[0]/4),Math.abs(ak[1]/4)]:[aB,aB];
var aP=[Math.abs(aq[0].offsetTop)-(ak[0]*ag((aJ[0]/aB[0]),aB[0])),Math.abs(aq[0].offsetLeft)-(ak[1]*ag((aJ[1]/aB[1]),aB[1]))];
ao=aA.axis==="yx"?[aP[0],aP[1]]:aA.axis==="x"?[null,aP[1]]:[aP[0],null];
ah=[(aJ[0]*4)+aA.scrollInertia,(aJ[1]*4)+aA.scrollInertia];
var aN=parseInt(aA.contentTouchScroll)||0;
ao[0]=aJ[0]>aN?ao[0]:0;
ao[1]=aJ[1]>aN?ao[1]:0;
if(aD.overflowed[0]){at(ao[0],ah[0],aL,"y",aj,false)
}if(aD.overflowed[1]){at(ao[1],ah[1],aL,"x",aj,false)
}});
function ag(aK,aI){var aJ=[aI*1.5,aI*2,aI/1.5,aI/2];
if(aK>90){return aI>4?aJ[0]:aJ[3]
}else{if(aK>60){return aI>3?aJ[3]:aJ[2]
}else{if(aK>30){return aI>8?aJ[1]:aI>6?aJ[0]:aI>4?aI:aJ[2]
}else{return aI>8?aI:aJ[3]
}}}}function at(aK,aM,aN,aJ,aI,aL){if(!aK){return
}t(ap,aK.toString(),{dur:aM,scrollEasing:aN,dir:aJ,overwrite:aI,drag:aL})
}},G=function(){var an=c(this),am=an.data(m),ai=am.opt,ap=am.sequential,aj=m+"_"+am.idx,ao=c("#mCSB_"+am.idx+"_container"),ag=ao.parent(),ak;
ao.bind("mousedown."+aj,function(aq){if(k){return
}if(!ak){ak=1;
V=true
}}).add(a).bind("mousemove."+aj,function(ar){if(!k&&ak&&al()){var at=ao.offset(),au=l(ar)[0]-at.top+ao[0].offsetTop,aq=l(ar)[1]-at.left+ao[0].offsetLeft;
if(au>0&&au<ag.height()&&aq>0&&aq<ag.width()){if(ap.step){ah("off",null,"stepped")
}}else{if(ai.axis!=="x"&&am.overflowed[0]){if(au<0){ah("on",38)
}else{if(au>ag.height()){ah("on",40)
}}}if(ai.axis!=="y"&&am.overflowed[1]){if(aq<0){ah("on",37)
}else{if(aq>ag.width()){ah("on",39)
}}}}}}).bind("mouseup."+aj,function(aq){if(k){return
}if(ak){ak=0;
ah("off",null)
}V=false
});
function al(){return b.getSelection?b.getSelection().toString():a.selection&&a.selection.type!="Control"?a.selection.createRange().text:0
}function ah(aq,at,ar){ap.type=ar&&ak?"stepped":"stepless";
ap.scrollAmount=10;
d(an,aq,at,"mcsLinearOut",ar?60:null)
}},p=function(){var an=c(this),am=an.data(m);
if(am){var ag=am.opt,aj=m+"_"+am.idx,ah=c("#mCSB_"+am.idx),ao=[c("#mCSB_"+am.idx+"_dragger_vertical"),c("#mCSB_"+am.idx+"_dragger_horizontal")],ak=c("#mCSB_"+am.idx+"_container").find("iframe"),ai=ah;
if(ak.length){ak.each(function(){var ap=this;
if(al(ap)){ai=ai.add(c(ap).contents().find("body"))
}})
}ai.bind("mousewheel."+aj,function(au,ay){r(an);
if(D(an,au.target)){return
}var aw=ag.mouseWheel.deltaFactor!=="auto"?parseInt(ag.mouseWheel.deltaFactor):(R&&au.deltaFactor<100)?100:au.deltaFactor||100;
if(ag.axis==="x"||ag.mouseWheel.axis==="x"){var aq="x",ax=[Math.round(aw*am.scrollRatio.x),parseInt(ag.mouseWheel.scrollAmount)],at=ag.mouseWheel.scrollAmount!=="auto"?ax[1]:ax[0]>=ah.width()?ah.width()*0.9:ax[0],az=Math.abs(c("#mCSB_"+am.idx+"_container")[0].offsetLeft),av=ao[1][0].offsetLeft,ar=ao[1].parent().width()-ao[1].width(),ap=au.deltaX||au.deltaY||ay
}else{var aq="y",ax=[Math.round(aw*am.scrollRatio.y),parseInt(ag.mouseWheel.scrollAmount)],at=ag.mouseWheel.scrollAmount!=="auto"?ax[1]:ax[0]>=ah.height()?ah.height()*0.9:ax[0],az=Math.abs(c("#mCSB_"+am.idx+"_container")[0].offsetTop),av=ao[0][0].offsetTop,ar=ao[0].parent().height()-ao[0].height(),ap=au.deltaY||ay
}if((aq==="y"&&!am.overflowed[0])||(aq==="x"&&!am.overflowed[1])){return
}if(ag.mouseWheel.invert){ap=-ap
}if(ag.mouseWheel.normalizeDelta){ap=ap<0?-1:1
}if((ap>0&&av!==0)||(ap<0&&av!==ar)||ag.mouseWheel.preventDefault){au.stopImmediatePropagation();
au.preventDefault()
}t(an,(az-(ap*at)).toString(),{dir:aq})
})
}function al(aq){var ap=null;
try{var at=aq.contentDocument||aq.contentWindow.document;
ap=at.body.innerHTML
}catch(ar){}return(ap!==null)
}},D=function(ai,ak){var ag=ak.nodeName.toLowerCase(),ah=ai.data(m).opt.mouseWheel.disableOver,aj=["select","textarea"];
return c.inArray(ag,ah)>-1&&!(c.inArray(ag,aj)>-1&&!c(ak).is(":focus"))
},f=function(){var aj=c(this),ak=aj.data(m),ah=m+"_"+ak.idx,ai=c("#mCSB_"+ak.idx+"_container"),al=ai.parent(),ag=c(".mCSB_"+ak.idx+"_scrollbar ."+h[12]);
ag.bind("touchstart."+ah+" pointerdown."+ah+" MSPointerDown."+ah,function(am){V=true
}).bind("touchend."+ah+" pointerup."+ah+" MSPointerUp."+ah,function(am){V=false
}).bind("click."+ah,function(aq){if(c(aq.target).hasClass(h[12])||c(aq.target).hasClass("mCSB_draggerRail")){r(aj);
var an=c(this),ap=an.find(".mCSB_dragger");
if(an.parent(".mCSB_scrollTools_horizontal").length>0){if(!ak.overflowed[1]){return
}var am="x",ao=aq.pageX>ap.offset().left?-1:1,ar=Math.abs(ai[0].offsetLeft)-(ao*(al.width()*0.9))
}else{if(!ak.overflowed[0]){return
}var am="y",ao=aq.pageY>ap.offset().top?-1:1,ar=Math.abs(ai[0].offsetTop)-(ao*(al.height()*0.9))
}t(aj,ar.toString(),{dir:am,scrollEasing:"mcsEaseInOut"})
}})
},Q=function(){var ai=c(this),ak=ai.data(m),aj=ak.opt,ag=m+"_"+ak.idx,ah=c("#mCSB_"+ak.idx+"_container"),al=ah.parent();
ah.bind("focusin."+ag,function(ao){var an=c(a.activeElement),ap=ah.find(".mCustomScrollBox").length,am=0;
if(!an.is(aj.advanced.autoScrollOnFocus)){return
}r(ai);
clearTimeout(ai[0]._focusTimeout);
ai[0]._focusTimer=ap?(am+17)*ap:0;
ai[0]._focusTimeout=setTimeout(function(){var au=[v(an)[0],v(an)[1]],at=[ah[0].offsetTop,ah[0].offsetLeft],aq=[(at[0]+au[0]>=0&&at[0]+au[0]<al.height()-an.outerHeight(false)),(at[1]+au[1]>=0&&at[0]+au[1]<al.width()-an.outerWidth(false))],ar=(aj.axis==="yx"&&!aq[0]&&!aq[1])?"none":"all";
if(aj.axis!=="x"&&!aq[0]){t(ai,au[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:ar,dur:am})
}if(aj.axis!=="y"&&!aq[1]){t(ai,au[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:ar,dur:am})
}},ai[0]._focusTimer)
})
},Z=function(){var ah=c(this),ai=ah.data(m),ag=m+"_"+ai.idx,aj=c("#mCSB_"+ai.idx+"_container").parent();
aj.bind("scroll."+ag,function(ak){if(aj.scrollTop()!==0||aj.scrollLeft()!==0){c(".mCSB_"+ai.idx+"_scrollbar").css("visibility","hidden")
}})
},ac=function(){var ak=c(this),am=ak.data(m),al=am.opt,ag=am.sequential,ai=m+"_"+am.idx,aj=".mCSB_"+am.idx+"_scrollbar",ah=c(aj+">a");
ah.bind("mousedown."+ai+" touchstart."+ai+" pointerdown."+ai+" MSPointerDown."+ai+" mouseup."+ai+" touchend."+ai+" pointerup."+ai+" MSPointerUp."+ai+" mouseout."+ai+" pointerout."+ai+" MSPointerOut."+ai+" click."+ai,function(ap){ap.preventDefault();
if(!W(ap)){return
}var ao=c(this).attr("class");
ag.type=al.scrollButtons.scrollType;
switch(ap.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if(ag.type==="stepped"){return
}V=true;
am.tweenRunning=false;
an("on",ao);
break;
case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if(ag.type==="stepped"){return
}V=false;
if(ag.dir){an("off",ao)
}break;
case"click":if(ag.type!=="stepped"||am.tweenRunning){return
}an("on",ao);
break
}function an(aq,ar){ag.scrollAmount=al.snapAmount||al.scrollButtons.scrollAmount;
d(ak,aq,ar)
}})
},P=function(){var al=c(this),ak=al.data(m),ah=ak.opt,ao=ak.sequential,aj=m+"_"+ak.idx,ai=c("#mCSB_"+ak.idx),an=c("#mCSB_"+ak.idx+"_container"),ag=an.parent(),am="input,textarea,select,datalist,keygen,[contenteditable='true']";
ai.attr("tabindex","0").bind("blur."+aj+" keydown."+aj+" keyup."+aj,function(av){switch(av.type){case"blur":if(ak.tweenRunning&&ao.dir){ap("off",null)
}break;
case"keydown":case"keyup":var ar=av.keyCode?av.keyCode:av.which,at="on";
if((ah.axis!=="x"&&(ar===38||ar===40))||(ah.axis!=="y"&&(ar===37||ar===39))){if(((ar===38||ar===40)&&!ak.overflowed[0])||((ar===37||ar===39)&&!ak.overflowed[1])){return
}if(av.type==="keyup"){at="off"
}if(!c(a.activeElement).is(am)){av.preventDefault();
av.stopImmediatePropagation();
ap(at,ar)
}}else{if(ar===33||ar===34){if(ak.overflowed[0]||ak.overflowed[1]){av.preventDefault();
av.stopImmediatePropagation()
}if(av.type==="keyup"){r(al);
var au=ar===34?-1:1;
if(ah.axis==="x"||(ah.axis==="yx"&&ak.overflowed[1]&&!ak.overflowed[0])){var aq="x",aw=Math.abs(an[0].offsetLeft)-(au*(ag.width()*0.9))
}else{var aq="y",aw=Math.abs(an[0].offsetTop)-(au*(ag.height()*0.9))
}t(al,aw.toString(),{dir:aq,scrollEasing:"mcsEaseInOut"})
}}else{if(ar===35||ar===36){if(!c(a.activeElement).is(am)){if(ak.overflowed[0]||ak.overflowed[1]){av.preventDefault();
av.stopImmediatePropagation()
}if(av.type==="keyup"){if(ah.axis==="x"||(ah.axis==="yx"&&ak.overflowed[1]&&!ak.overflowed[0])){var aq="x",aw=ar===35?Math.abs(ag.width()-an.outerWidth(false)):0
}else{var aq="y",aw=ar===35?Math.abs(ag.height()-an.outerHeight(false)):0
}t(al,aw.toString(),{dir:aq,scrollEasing:"mcsEaseInOut"})
}}}}}break
}function ap(ax,ay){ao.type=ah.keyboard.scrollType;
ao.scrollAmount=ah.snapAmount||ah.keyboard.scrollAmount;
if(ao.type==="stepped"&&ak.tweenRunning){return
}d(al,ax,ay)
}})
},d=function(ai,al,aj,ao,au){var ap=ai.data(m),ah=ap.opt,at=ap.sequential,aq=c("#mCSB_"+ap.idx+"_container"),ag=at.type==="stepped"?true:false,an=ah.scrollInertia<26?26:ah.scrollInertia,ar=ah.scrollInertia<1?17:ah.scrollInertia;
switch(al){case"on":at.dir=[(aj===h[16]||aj===h[15]||aj===39||aj===37?"x":"y"),(aj===h[13]||aj===h[15]||aj===38||aj===37?-1:1)];
r(ai);
if(i(aj)&&at.type==="stepped"){return
}ak(ag);
break;
case"off":am();
if(ag||(ap.tweenRunning&&at.dir)){ak(true)
}break
}function ak(av){var aB=at.type!=="stepped",aF=au?au:!av?1000/60:aB?an/1.5:ar,ax=!av?2.5:aB?7.5:40,aE=[Math.abs(aq[0].offsetTop),Math.abs(aq[0].offsetLeft)],aA=[ap.scrollRatio.y>10?10:ap.scrollRatio.y,ap.scrollRatio.x>10?10:ap.scrollRatio.x],ay=at.dir[0]==="x"?aE[1]+(at.dir[1]*(aA[1]*ax)):aE[0]+(at.dir[1]*(aA[0]*ax)),aD=at.dir[0]==="x"?aE[1]+(at.dir[1]*parseInt(at.scrollAmount)):aE[0]+(at.dir[1]*parseInt(at.scrollAmount)),aC=at.scrollAmount!=="auto"?aD:ay,az=ao?ao:!av?"mcsLinear":aB?"mcsLinearOut":"mcsEaseInOut",aw=!av?false:true;
if(av&&aF<17){aC=at.dir[0]==="x"?aE[1]:aE[0]
}t(ai,aC.toString(),{dir:at.dir[0],scrollEasing:az,dur:aF,onComplete:aw});
if(av){at.dir=false;
return
}clearTimeout(at.step);
at.step=setTimeout(function(){ak()
},aF)
}function am(){clearTimeout(at.step);
X(at,"step");
r(ai)
}},q=function(ai){var ah=c(this).data(m).opt,ag=[];
if(typeof ai==="function"){ai=ai()
}if(!(ai instanceof Array)){ag[0]=ai.y?ai.y:ai.x||ah.axis==="x"?null:ai;
ag[1]=ai.x?ai.x:ai.y||ah.axis==="y"?null:ai
}else{ag=ai.length>1?[ai[0],ai[1]]:ah.axis==="x"?[null,ai[0]]:[ai[0],null]
}if(typeof ag[0]==="function"){ag[0]=ag[0]()
}if(typeof ag[1]==="function"){ag[1]=ag[1]()
}return ag
},ab=function(ak,al){if(ak==null||typeof ak=="undefined"){return
}var ap=c(this),ao=ap.data(m),aj=ao.opt,aq=c("#mCSB_"+ao.idx+"_container"),ah=aq.parent(),at=typeof ak;
if(!al){al=aj.axis==="x"?"x":"y"
}var ag=al==="x"?aq.outerWidth(false):aq.outerHeight(false),ar=al==="x"?aq[0].offsetLeft:aq[0].offsetTop,an=al==="x"?"left":"top";
switch(at){case"function":return ak();
break;
case"object":var am=ak.jquery?ak:c(ak);
if(!am.length){return
}return al==="x"?v(am)[1]:v(am)[0];
break;
case"string":case"number":if(i(ak)){return Math.abs(ak)
}else{if(ak.indexOf("%")!==-1){return Math.abs(ag*parseInt(ak)/100)
}else{if(ak.indexOf("-=")!==-1){return Math.abs(ar-parseInt(ak.split("-=")[1]))
}else{if(ak.indexOf("+=")!==-1){var ai=(ar+parseInt(ak.split("+=")[1]));
return ai>=0?0:Math.abs(ai)
}else{if(ak.indexOf("px")!==-1&&i(ak.split("px")[0])){return Math.abs(ak.split("px")[0])
}else{if(ak==="top"||ak==="left"){return 0
}else{if(ak==="bottom"){return Math.abs(ah.height()-aq.outerHeight(false))
}else{if(ak==="right"){return Math.abs(ah.width()-aq.outerWidth(false))
}else{if(ak==="first"||ak==="last"){var am=aq.find(":"+ak);
return al==="x"?v(am)[1]:v(am)[0]
}else{if(c(ak).length){return al==="x"?v(c(ak))[1]:v(c(ak))[0]
}else{aq.css(an,ak);
K.update.call(null,ap[0]);
return
}}}}}}}}}}break
}},aa=function(ah){var ak=c(this),ax=ak.data(m),aq=ax.opt,am=c("#mCSB_"+ax.idx+"_container");
if(ah){clearTimeout(am[0].autoUpdate);
X(am[0],"autoUpdate");
return
}var aj=am.parent(),ag=[c("#mCSB_"+ax.idx+"_scrollbar_vertical"),c("#mCSB_"+ax.idx+"_scrollbar_horizontal")],av=function(){return[ag[0].is(":visible")?ag[0].outerHeight(true):0,ag[1].is(":visible")?ag[1].outerWidth(true):0]
},aw=ap(),ao,al=[am.outerHeight(false),am.outerWidth(false),aj.height(),aj.width(),av()[0],av()[1]],az,at=ay(),an;
au();
function au(){clearTimeout(am[0].autoUpdate);
am[0].autoUpdate=setTimeout(function(){if(aq.advanced.updateOnSelectorChange){ao=ap();
if(ao!==aw){ai(3);
aw=ao;
return
}}if(aq.advanced.updateOnContentResize){az=[am.outerHeight(false),am.outerWidth(false),aj.height(),aj.width(),av()[0],av()[1]];
if(az[0]!==al[0]||az[1]!==al[1]||az[2]!==al[2]||az[3]!==al[3]||az[4]!==al[4]||az[5]!==al[5]){ai(az[0]!==al[0]||az[1]!==al[1]);
al=az
}}if(aq.advanced.updateOnImageLoad){an=ay();
if(an!==at){am.find("img").each(function(){ar(this)
});
at=an
}}if(aq.advanced.updateOnSelectorChange||aq.advanced.updateOnContentResize||aq.advanced.updateOnImageLoad){au()
}},60)
}function ay(){var aA=0;
if(aq.advanced.updateOnImageLoad){aA=am.find("img").length
}return aA
}function ar(aD){if(c(aD).hasClass(h[2])){ai();
return
}var aA=new Image();
function aC(aE,aF){return function(){return aF.apply(aE,arguments)
}
}function aB(){this.onload=null;
c(aD).addClass(h[2]);
ai(2)
}aA.onload=aC(aA,aB);
aA.src=aD.src
}function ap(){if(aq.advanced.updateOnSelectorChange===true){aq.advanced.updateOnSelectorChange="*"
}var aA=0,aB=am.find(aq.advanced.updateOnSelectorChange);
if(aq.advanced.updateOnSelectorChange&&aB.length>0){aB.each(function(){aA+=c(this).height()+c(this).width()
})
}return aA
}function ai(aA){clearTimeout(am[0].autoUpdate);
K.update.call(null,ak[0],aA)
}},M=function(ai,ag,ah){return(Math.round(ai/ag)*ag-ah)
},r=function(ag){var ai=ag.data(m),ah=c("#mCSB_"+ai.idx+"_container,#mCSB_"+ai.idx+"_container_wrapper,#mCSB_"+ai.idx+"_dragger_vertical,#mCSB_"+ai.idx+"_dragger_horizontal");
ah.each(function(){Y.call(this)
})
},t=function(ah,aj,al){var aB=ah.data(m),ax=aB.opt,aw={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:false,dur:ax.scrollInertia,overwrite:"all",callbacks:true,onStart:true,onUpdate:true,onComplete:true},al=c.extend(aw,al),az=[al.dur,(al.drag?0:al.dur)],am=c("#mCSB_"+aB.idx),au=c("#mCSB_"+aB.idx+"_container"),aq=au.parent(),aD=ax.callbacks.onTotalScrollOffset?q.call(ah,ax.callbacks.onTotalScrollOffset):[0,0],ag=ax.callbacks.onTotalScrollBackOffset?q.call(ah,ax.callbacks.onTotalScrollBackOffset):[0,0];
aB.trigger=al.trigger;
if(aq.scrollTop()!==0||aq.scrollLeft()!==0){c(".mCSB_"+aB.idx+"_scrollbar").css("visibility","visible");
aq.scrollTop(0).scrollLeft(0)
}if(aj==="_resetY"&&!aB.contentReset.y){if(ak("onOverflowYNone")){ax.callbacks.onOverflowYNone.call(ah[0])
}aB.contentReset.y=1
}if(aj==="_resetX"&&!aB.contentReset.x){if(ak("onOverflowXNone")){ax.callbacks.onOverflowXNone.call(ah[0])
}aB.contentReset.x=1
}if(aj==="_resetY"||aj==="_resetX"){return
}if((aB.contentReset.y||!ah[0].mcs)&&aB.overflowed[0]){if(ak("onOverflowY")){ax.callbacks.onOverflowY.call(ah[0])
}aB.contentReset.x=null
}if((aB.contentReset.x||!ah[0].mcs)&&aB.overflowed[1]){if(ak("onOverflowX")){ax.callbacks.onOverflowX.call(ah[0])
}aB.contentReset.x=null
}if(ax.snapAmount){aj=M(aj,ax.snapAmount,ax.snapOffset)
}switch(al.dir){case"x":var ao=c("#mCSB_"+aB.idx+"_dragger_horizontal"),ar="left",av=au[0].offsetLeft,aA=[am.width()-au.outerWidth(false),ao.parent().width()-ao.width()],ai=[aj,aj===0?0:(aj/aB.scrollRatio.x)],aE=aD[1],aC=ag[1],at=aE>0?aE/aB.scrollRatio.x:0,an=aC>0?aC/aB.scrollRatio.x:0;
break;
case"y":var ao=c("#mCSB_"+aB.idx+"_dragger_vertical"),ar="top",av=au[0].offsetTop,aA=[am.height()-au.outerHeight(false),ao.parent().height()-ao.height()],ai=[aj,aj===0?0:(aj/aB.scrollRatio.y)],aE=aD[0],aC=ag[0],at=aE>0?aE/aB.scrollRatio.y:0,an=aC>0?aC/aB.scrollRatio.y:0;
break
}if(ai[1]<0||(ai[0]===0&&ai[1]===0)){ai=[0,0]
}else{if(ai[1]>=aA[1]){ai=[aA[0],aA[1]]
}else{ai[0]=-ai[0]
}}if(!ah[0].mcs){ay();
if(ak("onInit")){ax.callbacks.onInit.call(ah[0])
}}clearTimeout(au[0].onCompleteTimeout);
if(!aB.tweenRunning&&((av===0&&ai[0]>=0)||(av===aA[0]&&ai[0]<=aA[0]))){return
}H(ao[0],ar,Math.round(ai[1]),az[1],al.scrollEasing);
H(au[0],ar,Math.round(ai[0]),az[0],al.scrollEasing,al.overwrite,{onStart:function(){if(al.callbacks&&al.onStart&&!aB.tweenRunning){if(ak("onScrollStart")){ay();
ax.callbacks.onScrollStart.call(ah[0])
}aB.tweenRunning=true;
j(ao);
aB.cbOffsets=ap()
}},onUpdate:function(){if(al.callbacks&&al.onUpdate){if(ak("whileScrolling")){ay();
ax.callbacks.whileScrolling.call(ah[0])
}}},onComplete:function(){if(al.callbacks&&al.onComplete){if(ax.axis==="yx"){clearTimeout(au[0].onCompleteTimeout)
}var aF=au[0].idleTimer||0;
au[0].onCompleteTimeout=setTimeout(function(){if(ak("onScroll")){ay();
ax.callbacks.onScroll.call(ah[0])
}if(ak("onTotalScroll")&&ai[1]>=aA[1]-at&&aB.cbOffsets[0]){ay();
ax.callbacks.onTotalScroll.call(ah[0])
}if(ak("onTotalScrollBack")&&ai[1]<=an&&aB.cbOffsets[1]){ay();
ax.callbacks.onTotalScrollBack.call(ah[0])
}aB.tweenRunning=false;
au[0].idleTimer=0;
j(ao,"hide")
},aF)
}}});
function ak(aF){return aB&&ax.callbacks[aF]&&typeof ax.callbacks[aF]==="function"
}function ap(){return[ax.callbacks.alwaysTriggerOffsets||av>=aA[0]+aE,ax.callbacks.alwaysTriggerOffsets||av<=-aC]
}function ay(){var aH=[au[0].offsetTop,au[0].offsetLeft],aI=[ao[0].offsetTop,ao[0].offsetLeft],aF=[au.outerHeight(false),au.outerWidth(false)],aG=[am.height(),am.width()];
ah[0].mcs={content:au,top:aH[0],left:aH[1],draggerTop:aI[0],draggerLeft:aI[1],topPct:Math.round((100*Math.abs(aH[0]))/(Math.abs(aF[0])-aG[0])),leftPct:Math.round((100*Math.abs(aH[1]))/(Math.abs(aF[1])-aG[1])),direction:al.dir}
}},H=function(ai,al,aj,ah,at,ak,aD){if(!ai._mTween){ai._mTween={top:{},left:{}}
}var aD=aD||{},aA=aD.onStart||function(){},au=aD.onUpdate||function(){},aB=aD.onComplete||function(){},aq=O(),ao,am=0,aw=ai.offsetTop,ax=ai.style,ar,az=ai._mTween[al];
if(al==="left"){aw=ai.offsetLeft
}var ap=aj-aw;
az.stop=0;
if(ak!=="none"){av()
}ag();
function aC(){if(az.stop){return
}if(!am){aA.call()
}am=O()-aq;
ay();
if(am>=az.time){az.time=(am>az.time)?am+ao-(am-az.time):am+ao-1;
if(az.time<am+1){az.time=am+1
}}if(az.time<ah){az.id=ar(aC)
}else{aB.call()
}}function ay(){if(ah>0){az.currVal=an(az.time,aw,ap,ah,at);
ax[al]=Math.round(az.currVal)+"px"
}else{ax[al]=aj+"px"
}au.call()
}function ag(){ao=1000/60;
az.time=am+ao;
ar=(!b.requestAnimationFrame)?function(aE){ay();
return setTimeout(aE,0.01)
}:b.requestAnimationFrame;
az.id=ar(aC)
}function av(){if(az.id==null){return
}if(!b.requestAnimationFrame){clearTimeout(az.id)
}else{b.cancelAnimationFrame(az.id)
}az.id=null
}function an(aG,aF,aK,aJ,aH){switch(aH){case"linear":case"mcsLinear":return aK*aG/aJ+aF;
break;
case"mcsLinearOut":aG/=aJ;
aG--;
return aK*Math.sqrt(1-aG*aG)+aF;
break;
case"easeInOutSmooth":aG/=aJ/2;
if(aG<1){return aK/2*aG*aG+aF
}aG--;
return -aK/2*(aG*(aG-2)-1)+aF;
break;
case"easeInOutStrong":aG/=aJ/2;
if(aG<1){return aK/2*Math.pow(2,10*(aG-1))+aF
}aG--;
return aK/2*(-Math.pow(2,-10*aG)+2)+aF;
break;
case"easeInOut":case"mcsEaseInOut":aG/=aJ/2;
if(aG<1){return aK/2*aG*aG*aG+aF
}aG-=2;
return aK/2*(aG*aG*aG+2)+aF;
break;
case"easeOutSmooth":aG/=aJ;
aG--;
return -aK*(aG*aG*aG*aG-1)+aF;
break;
case"easeOutStrong":return aK*(-Math.pow(2,-10*aG/aJ)+1)+aF;
break;
case"easeOut":case"mcsEaseOut":default:var aI=(aG/=aJ)*aG,aE=aI*aG;
return aF+aK*(0.499999999999997*aE*aI+-2.5*aI*aI+5.5*aE+-6.5*aI+4*aG)
}}},O=function(){if(b.performance&&b.performance.now){return b.performance.now()
}else{if(b.performance&&b.performance.webkitNow){return b.performance.webkitNow()
}else{if(Date.now){return Date.now()
}else{return new Date().getTime()
}}}},Y=function(){var ai=this;
if(!ai._mTween){ai._mTween={top:{},left:{}}
}var ah=["top","left"];
for(var ag=0;
ag<ah.length;
ag++){var aj=ah[ag];
if(ai._mTween[aj].id){if(!b.requestAnimationFrame){clearTimeout(ai._mTween[aj].id)
}else{b.cancelAnimationFrame(ai._mTween[aj].id)
}ai._mTween[aj].id=null;
ai._mTween[aj].stop=1
}}},X=function(ai,ag){try{delete ai[ag]
}catch(ah){ai[ag]=null
}},W=function(ag){return !(ag.which&&ag.which!==1)
},T=function(ah){var ag=ah.originalEvent.pointerType;
return !(ag&&ag!=="touch"&&ag!==2)
},i=function(ag){return !isNaN(parseFloat(ag))&&isFinite(ag)
},v=function(ag){var ah=ag.parents(".mCSB_container");
return[ag.offset().top-ah.offset().top,ag.offset().left-ah.offset().left]
};
c.fn[o]=function(ag){if(K[ag]){return K[ag].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof ag==="object"||!ag){return K.init.apply(this,arguments)
}else{c.error("Method "+ag+" does not exist")
}}};
c[o]=function(ag){if(K[ag]){return K[ag].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof ag==="object"||!ag){return K.init.apply(this,arguments)
}else{c.error("Method "+ag+" does not exist")
}}};
c[o].defaults=I;
b[o]=true;
c(b).load(function(){c(g)[o]();
c.extend(c.expr[":"],{mcsInView:c.expr[":"].mcsInView||function(ah){var ag=c(ah),aj=ag.parents(".mCSB_container"),ak,ai;
if(!aj.length){return
}ak=aj.parent();
ai=[aj[0].offsetTop,aj[0].offsetLeft];
return ai[0]+v(ag)[0]>=0&&ai[0]+v(ag)[0]<ak.height()-ag.outerHeight(false)&&ai[1]+v(ag)[1]>=0&&ai[1]+v(ag)[1]<ak.width()-ag.outerWidth(false)
},mcsOverflow:c.expr[":"].mcsOverflow||function(ag){var ah=c(ag).data(m);
if(!ah){return
}return ah.overflowed[0]||ah.overflowed[1]
}})
})
}))
}(jQuery,window,document));
(function(c){c.reject=function(s){var d=c.extend(true,{reject:{all:false,msie:6},display:[],browserShow:true,browserInfo:{chrome:{text:"Google Chrome",url:"http://www.google.com/chrome/",},firefox:{text:"Mozilla Firefox",url:"http://www.mozilla.com/firefox/"},safari:{text:"Safari",url:"http://www.apple.com/safari/download/"},opera:{text:"Opera",url:"http://www.opera.com/download/"},msie:{text:"Internet Explorer",url:"http://www.microsoft.com/windows/Internet-explorer/"}},header:"Did you know that your Internet Browser is out of date?",paragraph1:"Your browser is out of date, and may not be compatible with our website. A list of the most popular web browsers can be found below.",paragraph2:"Just click on the icons to get to the download page",close:true,closeMessage:"By closing this window you acknowledge that your experience on this website may be degraded",closeLink:"Close This Window",closeURL:"#",closeESC:true,closeCookie:false,cookieSettings:{path:"/",expires:0},imagePath:"./images/",overlayBgColor:"#000",overlayOpacity:0.8,fadeInTime:"fast",fadeOutTime:"fast",analytics:false},s);
if(d.display.length<1){d.display=["chrome","firefox","safari","opera","msie"]
}if(c.isFunction(d.beforeReject)){d.beforeReject()
}if(!d.close){d.closeESC=false
}var q=function(u){var v=u[c.layout.name],t=u[c.browser.name];
return !!(u.all||(t&&(t===true||c.browser.versionNumber<=t))||u[c.browser.className]||(v&&(v===true||c.layout.versionNumber<=v))||u[c.os.name])
};
if(!q(d.reject)){if(c.isFunction(d.onFail)){d.onFail()
}return false
}if(d.close&&d.closeCookie){var f="jreject-close";
var l=function(t,B){if(typeof B!="undefined"){var v="";
if(d.cookieSettings.expires!==0){var x=new Date();
x.setTime(x.getTime()+(d.cookieSettings.expires*1000));
v="; expires="+x.toGMTString()
}var D=d.cookieSettings.path||"/";
document.cookie=t+"="+encodeURIComponent((!B)?"":B)+v+"; path="+D;
return true
}else{var u,w=null;
if(document.cookie&&document.cookie!==""){var C=document.cookie.split(";");
var A=C.length;
for(var y=0;
y<A;
++y){u=c.trim(C[y]);
if(u.substring(0,t.length+1)==(t+"=")){var z=t.length;
w=decodeURIComponent(u.substring(z+1));
break
}}}return w
}};
if(l(f)){return false
}}var k='<div class="reject breaking"><h1>'+d.header+"</h1>"+(d.paragraph1===""?"":"<p>"+d.paragraph1+"</p>");
var h=0;
if(d.browserShow){k+="<ul>";
for(var p in d.display){var j=d.display[p];
var g=d.browserInfo[j]||false;
if(!g||(g.allow!=undefined&&!q(g.allow))){continue
}var e=g.url||"#";
k+='<li id="jr_'+j+'"><div class="jr_icon"></div><div><a href="'+e+'">'+(g.text||"Unknown")+"</a></div></li>";
++h
}k+="</ul>"
}k+='<div class="closePopup"><div class="close"></div></div></div>';
var i=c("<div>"+k+"</div>");
var r=b();
var o=a();
i.bind("closejr",function(){if(!d.close){return false
}if(c.isFunction(d.beforeClose)){d.beforeClose()
}c(this).unbind("closejr");
c("#jr_overlay,#jr_wrap").fadeOut(d.fadeOutTime,function(){c(this).remove();
if(c.isFunction(d.afterClose)){d.afterClose()
}});
var t="embed.jr_hidden, object.jr_hidden, select.jr_hidden, applet.jr_hidden";
c(t).show().removeClass("jr_hidden");
if(d.closeCookie){l(f,"true")
}return true
});
var n=function(t){if(!d.analytics){return false
}var u=t.split(/\/+/g)[1];
try{ga("send","event","External","Click",u,t)
}catch(v){try{_gaq.push(["_trackEvent","External Links",u,t])
}catch(v){}}};
var m=function(t){n(t);
window.open(t,"jr_"+Math.round(Math.random()*11));
return false
};
i.find("#jr_overlay").css({width:r[0],height:r[1],background:d.overlayBgColor,opacity:d.overlayOpacity});
i.find("#jr_wrap").css({top:o[1]+(r[3]/4),left:o[0]});
i.find("#jr_inner").css({minWidth:h*100,maxWidth:h*140,width:c.layout.name=="trident"?h*155:"auto"});
i.find("#jr_inner li").css({background:'transparent url("'+d.imagePath+'background_browser.gif")no-repeat scroll left top'});
i.find("#jr_inner li .jr_icon").each(function(){var t=c(this);
t.css("background","transparent url("+d.imagePath+"browser_"+(t.parent("li").attr("id").replace(/jr_/,""))+".gif) no-repeat scroll left top");
t.click(function(){var u=c(this).next("div").children("a").attr("href");
m(u)
})
});
i.find("#jr_inner li a").click(function(){m(c(this).attr("href"));
return false
});
i.find("#jr_close a").click(function(){c(this).trigger("closejr");
if(d.closeURL==="#"){return false
}});
c("#jr_overlay").focus();
c("embed, object, select, applet").each(function(){if(c(this).is(":visible")){c(this).hide().addClass("jr_hidden")
}});
c("body").append(i.hide().fadeIn(d.fadeInTime));
c(window).bind("resize scroll",function(){var u=b();
c("#jr_overlay").css({width:u[0],height:u[1]});
var t=a();
c("#jr_wrap").css({top:t[1]+(u[3]/4),left:t[0]})
});
if(d.closeESC){c(document).bind("keydown",function(t){if(t.keyCode==27){i.trigger("closejr")
}})
}if(c.isFunction(d.afterReject)){d.afterReject()
}return true
};
var b=function(){var f=window.innerWidth&&window.scrollMaxX?window.innerWidth+window.scrollMaxX:(document.body.scrollWidth>document.body.offsetWidth?document.body.scrollWidth:document.body.offsetWidth);
var d=window.innerHeight&&window.scrollMaxY?window.innerHeight+window.scrollMaxY:(document.body.scrollHeight>document.body.offsetHeight?document.body.scrollHeight:document.body.offsetHeight);
var e=window.innerWidth?window.innerWidth:(document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth);
var g=window.innerHeight?window.innerHeight:(document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight);
return[f<e?f:e,d<g?g:d,e,g]
};
var a=function(){return[window.pageXOffset?window.pageXOffset:(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollLeft:document.body.scrollLeft),window.pageYOffset?window.pageYOffset:(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)]
}
})(jQuery);
(function(a){a.browserTest=function(e,g){var f="unknown",d="X",b=function(k,j){for(var c=0;
c<j.length;
c=c+1){k=k.replace(j[c][0],j[c][1])
}return k
},h=function(l,q,p,o){var j={name:b((q.exec(l)||[f,f])[1],p)};
j[j.name]=true;
if(!j.opera){j.version=(o.exec(l)||[d,d,d,d])[3]
}else{j.version=window.opera.version()
}if(/safari/.test(j.name)){var s=/(safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/;
var n=s.exec(l);
if(n&&n[3]&&n[3]<400){j.version="2.0"
}}else{if(j.name==="presto"){j.version=(a.browser.version>9.27)?"futhark":"linear_b"
}}if(/msie/.test(j.name)&&j.version===d){var k=/rv:(\d+\.\d+)/.exec(l);
j.version=k[1]
}j.versionNumber=parseFloat(j.version,10)||0;
var m=1;
if(j.versionNumber<100&&j.versionNumber>9){m=2
}j.versionX=(j.version!==d)?j.version.substr(0,m):d;
j.className=j.name+j.versionX;
return j
};
e=(/Opera|Navigator|Minefield|KHTML|Chrome|CriOS/.test(e)?b(e,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,""],["Chrome Safari","Chrome"],["CriOS","Chrome"],["KHTML","Konqueror"],["Minefield","Firefox"],["Navigator","Netscape"]]):e).toLowerCase();
a.browser=a.extend((!g)?a.browser:{},h(e,/(camino|chrome|crios|firefox|netscape|konqueror|lynx|msie|trident|opera|safari)/,[["trident","msie"]],/(camino|chrome|crios|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|rv|safari)(:|\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));
a.layout=h(e,/(gecko|konqueror|msie|trident|opera|webkit)/,[["konqueror","khtml"],["msie","trident"],["opera","presto"]],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);
a.os={name:(/(win|mac|linux|sunos|solaris|iphone|ipad)/.exec(navigator.platform.toLowerCase())||[f])[0].replace("sunos","solaris")};
if(!g){a("html").addClass([a.os.name,a.browser.name,a.browser.className,a.layout.name,a.layout.className].join(" "))
}};
a.browserTest(navigator.userAgent)
}(jQuery));
/*!
	jQuery Colorbox v1.4.17 - 2013-05-23
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(M,l,aa){var N={transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,className:false,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:false,returnFocus:true,trapFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined},x="colorbox",V="cbox",r=V+"Element",Z=V+"_open",e=V+"_load",X=V+"_complete",v=V+"_cleanup",af=V+"_closed",i=V+"_purge",T,ak,al,d,K,p,b,S,c,ad,Q,k,h,o,u,ab,t,U,z,B,I=M("<a/>"),ai,am,m,g,a,w,L,n,D,ac,P,A,O,ah="div",ag,G=0,ae;
function J(an,aq,ap){var ao=l.createElement(an);
if(aq){ao.id=V+aq
}if(ap){ao.style.cssText=ap
}return M(ao)
}function s(){return aa.innerHeight?aa.innerHeight:M(aa).height()
}function F(ao){var an=c.length,ap=(L+ao)%an;
return(ap<0)?an+ap:ap
}function R(an,ao){return Math.round((/%/.test(an)?((ao==="x"?ad.width():s())/100):1)*parseInt(an,10))
}function C(ao,an){return ao.photo||ao.photoRegex.test(an)
}function E(ao,an){return ao.retinaUrl&&aa.devicePixelRatio>1?an.replace(ao.photoRegex,ao.retinaSuffix):an
}function aj(an){if("contains" in ak[0]&&!ak[0].contains(an.target)){an.stopPropagation();
ak.focus()
}}function W(){var an,ao=M.data(w,x);
if(ao==null){ai=M.extend({},N);
if(console&&console.log){console.log("Error: cboxElement missing settings object")
}}else{ai=M.extend({},ao)
}for(an in ai){if(M.isFunction(ai[an])&&an.slice(0,2)!=="on"){ai[an]=ai[an].call(w)
}}ai.rel=ai.rel||w.rel||M(w).data("rel")||"nofollow";
ai.href=ai.href||M(w).attr("href");
ai.title=ai.title||w.title;
if(typeof ai.href==="string"){ai.href=M.trim(ai.href)
}}function H(an,ao){M(l).trigger(an);
I.trigger(an);
if(M.isFunction(ao)){ao.call(w)
}}function y(){var ao,aq=V+"Slideshow_",ar="click."+V,an,au,at,ap;
if(ai.slideshow&&c[1]){an=function(){clearTimeout(ao)
};
au=function(){if(ai.loop||c[L+1]){ao=setTimeout(O.next,ai.slideshowSpeed)
}};
at=function(){ab.html(ai.slideshowStop).unbind(ar).one(ar,ap);
I.bind(X,au).bind(e,an).bind(v,ap);
ak.removeClass(aq+"off").addClass(aq+"on")
};
ap=function(){an();
I.unbind(X,au).unbind(e,an).unbind(v,ap);
ab.html(ai.slideshowStart).unbind(ar).one(ar,function(){O.next();
at()
});
ak.removeClass(aq+"on").addClass(aq+"off")
};
if(ai.slideshowAuto){at()
}else{ap()
}}else{ak.removeClass(aq+"off "+aq+"on")
}}function f(an){if(!P){w=an;
W();
c=M(w);
L=0;
if(ai.rel!=="nofollow"){c=M("."+r).filter(function(){var ap=M.data(this,x),ao;
if(ap){ao=M(this).data("rel")||ap.rel||this.rel
}return(ao===ai.rel)
});
L=c.index(w);
if(L===-1){c=c.add(w);
L=c.length-1
}}T.css({opacity:parseFloat(ai.opacity),cursor:ai.overlayClose?"pointer":"auto",visibility:"visible"}).show();
if(ag){ak.add(T).removeClass(ag)
}if(ai.className){ak.add(T).addClass(ai.className)
}ag=ai.className;
z.html(ai.close).show();
if(!D){D=ac=true;
ak.css({visibility:"hidden",display:"block"});
Q=J(ah,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(d);
am=K.height()+S.height()+d.outerHeight(true)-d.height();
m=p.width()+b.width()+d.outerWidth(true)-d.width();
g=Q.outerHeight(true);
a=Q.outerWidth(true);
ai.w=R(ai.initialWidth,"x");
ai.h=R(ai.initialHeight,"y");
O.position();
y();
H(Z,ai.onOpen);
B.add(o).hide();
ak.focus();
if(ai.trapFocus){if(l.addEventListener){l.addEventListener("focus",aj,true);
I.one(af,function(){l.removeEventListener("focus",aj,true)
})
}}if(ai.returnFocus){I.one(af,function(){M(w).focus()
})
}}Y()
}}function q(){if(!ak&&l.body){ae=false;
ad=M(aa);
ak=J(ah).attr({id:x,"class":M.support.opacity===false?V+"IE":"",role:"dialog",tabindex:"-1"}).hide();
T=J(ah,"Overlay").hide();
h=J(ah,"LoadingOverlay").add(J(ah,"LoadingGraphic"));
al=J(ah,"Wrapper");
d=J(ah,"Content").append(o=J(ah,"Title"),u=J(ah,"Current"),U=M('<button type="button"/>').attr({id:V+"Previous"}),t=M('<button type="button"/>').attr({id:V+"Next"}),ab=J("button","Slideshow"),h);
al.append(J(ah).append(J(ah,"TopLeft"),K=J(ah,"TopCenter"),J(ah,"TopRight").append(z=M('<button type="button"/>').attr({id:V+"Close"}))),J(ah,false,"clear:left").append(p=J(ah,"MiddleLeft"),d,b=J(ah,"MiddleRight")),J(ah,false,"clear:left").append(J(ah,"BottomLeft"),S=J(ah,"BottomCenter"),J(ah,"BottomRight"))).find("div div").css({"float":"left"});
k=J(ah,false,"position:absolute; width:9999px; visibility:hidden; display:none");
B=t.add(U).add(u).add(ab);
M(l.body).append(T,ak.append(al,k))
}}function j(){function an(ao){if(!(ao.which>1||ao.shiftKey||ao.altKey||ao.metaKey||ao.control)){ao.preventDefault();
f(this)
}}if(ak){if(!ae){ae=true;
t.click(function(){O.next()
});
U.click(function(){O.prev()
});
z.click(function(){O.close()
});
T.click(function(){if(ai.overlayClose){O.close()
}});
M(l).bind("keydown."+V,function(ap){var ao=ap.keyCode;
if(D&&ai.escKey&&ao===27){ap.preventDefault();
O.close()
}if(D&&ai.arrowKey&&c[1]&&!ap.altKey){if(ao===37){ap.preventDefault();
U.click()
}else{if(ao===39){ap.preventDefault();
t.click()
}}}});
if(M.isFunction(M.fn.on)){M(l).on("click."+V,"."+r,an)
}else{M("."+r).live("click."+V,an)
}}return true
}return false
}if(M.colorbox){return
}M(q);
O=M.fn[x]=M[x]=function(an,ap){var ao=this;
an=an||{};
q();
if(j()){if(M.isFunction(ao)){ao=M("<a/>");
an.open=true
}else{if(!ao[0]){return ao
}}if(ap){an.onComplete=ap
}ao.each(function(){M.data(this,x,M.extend({},M.data(this,x)||N,an))
}).addClass(r);
if((M.isFunction(an.open)&&an.open.call(ao))||an.open){f(ao[0])
}}return ao
};
O.position=function(ap,ar){var au,aw=0,ao=0,at=ak.offset(),an,aq;
ad.unbind("resize."+V);
ak.css({top:-90000,left:-90000});
an=ad.scrollTop();
aq=ad.scrollLeft();
if(ai.fixed){at.top-=an;
at.left-=aq;
ak.css({position:"fixed"})
}else{aw=an;
ao=aq;
ak.css({position:"absolute"})
}if(ai.right!==false){ao+=Math.max(ad.width()-ai.w-a-m-R(ai.right,"x"),0)
}else{if(ai.left!==false){ao+=R(ai.left,"x")
}else{ao+=Math.round(Math.max(ad.width()-ai.w-a-m,0)/2)
}}if(ai.bottom!==false){aw+=Math.max(s()-ai.h-g-am-R(ai.bottom,"y"),0)
}else{if(ai.top!==false){aw+=R(ai.top,"y")
}else{aw+=Math.round(Math.max(s()-ai.h-g-am,0)/2)
}}ak.css({top:at.top,left:at.left,visibility:"visible"});
ap=(ak.width()===ai.w+a&&ak.height()===ai.h+g)?0:ap||0;
al[0].style.width=al[0].style.height="9999px";
function av(ax){K[0].style.width=S[0].style.width=d[0].style.width=(parseInt(ax.style.width,10)-m)+"px";
d[0].style.height=p[0].style.height=b[0].style.height=(parseInt(ax.style.height,10)-am)+"px"
}au={width:ai.w+a+m,height:ai.h+g+am,top:aw,left:ao};
if(ap===0){ak.css(au)
}ak.dequeue().animate(au,{duration:ap,complete:function(){av(this);
ac=false;
al[0].style.width=(ai.w+a+m)+"px";
al[0].style.height=(ai.h+g+am)+"px";
if(ai.reposition){setTimeout(function(){ad.bind("resize."+V,O.position)
},1)
}if(ar){ar()
}},step:function(){av(this)
}})
};
O.resize=function(an){if(D){an=an||{};
if(an.width){ai.w=R(an.width,"x")-a-m
}if(an.innerWidth){ai.w=R(an.innerWidth,"x")
}Q.css({width:ai.w});
if(an.height){ai.h=R(an.height,"y")-g-am
}if(an.innerHeight){ai.h=R(an.innerHeight,"y")
}if(!an.innerHeight&&!an.height){Q.css({height:"auto"});
ai.h=Q.height()
}Q.css({height:ai.h});
O.position(ai.transition==="none"?0:ai.speed)
}};
O.prep=function(ao){if(!D){return
}var ar,ap=ai.transition==="none"?0:ai.speed;
Q.empty().remove();
Q=J(ah,"LoadedContent").append(ao);
function an(){ai.w=ai.w||Q.width();
ai.w=ai.mw&&ai.mw<ai.w?ai.mw:ai.w;
return ai.w
}function aq(){ai.h=ai.h||Q.height();
ai.h=ai.mh&&ai.mh<ai.h?ai.mh:ai.h;
return ai.h
}Q.hide().appendTo(k.show()).css({width:an(),overflow:ai.scrolling?"auto":"hidden"}).css({height:aq()}).prependTo(d);
k.hide();
M(n).css({"float":"none"});
ar=function(){var ax=c.length,av,aw="frameBorder",at="allowTransparency",au;
if(!D){return
}function ay(){if(M.support.opacity===false){ak[0].style.removeAttribute("filter")
}}au=function(){clearTimeout(A);
h.hide();
H(X,ai.onComplete)
};
o.html(ai.title).add(Q).show();
if(ax>1){if(typeof ai.current==="string"){u.html(ai.current.replace("{current}",L+1).replace("{total}",ax)).show()
}t[(ai.loop||L<ax-1)?"show":"hide"]().html(ai.next);
U[(ai.loop||L)?"show":"hide"]().html(ai.previous);
if(ai.slideshow){ab.show()
}if(ai.preloading){M.each([F(-1),F(1)],function(){var aC,az,aA=c[this],aB=M.data(aA,x);
if(aB&&aB.href){aC=aB.href;
if(M.isFunction(aC)){aC=aC.call(aA)
}}else{aC=M(aA).attr("href")
}if(aC&&C(aB,aC)){aC=E(aB,aC);
az=new Image();
az.src=aC
}})
}}else{B.hide()
}if(ai.iframe){av=J("iframe")[0];
if(aw in av){av[aw]=0
}if(at in av){av[at]="true"
}if(!ai.scrolling){av.scrolling="no"
}M(av).attr({src:ai.href,name:(new Date()).getTime(),"class":V+"Iframe",allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one("load",au).appendTo(Q);
I.one(i,function(){av.src="//about:blank"
});
if(ai.fastIframe){M(av).trigger("load")
}}else{au()
}if(ai.transition==="fade"){ak.fadeTo(ap,1,ay)
}else{ay()
}};
if(ai.transition==="fade"){ak.fadeTo(ap,0,function(){O.position(0,ar)
})
}else{O.position(ap,ar)
}};
function Y(){var ap,aq,ao=O.prep,an,ar=++G;
ac=true;
n=false;
w=c[L];
W();
H(i);
H(e,ai.onLoad);
ai.h=ai.height?R(ai.height,"y")-g-am:ai.innerHeight&&R(ai.innerHeight,"y");
ai.w=ai.width?R(ai.width,"x")-a-m:ai.innerWidth&&R(ai.innerWidth,"x");
ai.mw=ai.w;
ai.mh=ai.h;
if(ai.maxWidth){ai.mw=R(ai.maxWidth,"x")-a-m;
ai.mw=ai.w&&ai.w<ai.mw?ai.w:ai.mw
}if(ai.maxHeight){ai.mh=R(ai.maxHeight,"y")-g-am;
ai.mh=ai.h&&ai.h<ai.mh?ai.h:ai.mh
}ap=ai.href;
A=setTimeout(function(){h.show()
},100);
if(ai.inline){an=J(ah).hide().insertBefore(M(ap)[0]);
I.one(i,function(){an.replaceWith(Q.children())
});
ao(M(ap))
}else{if(ai.iframe){ao(" ")
}else{if(ai.html){ao(ai.html)
}else{if(C(ai,ap)){ap=E(ai,ap);
n=l.createElement("img");
M(n).addClass(V+"Photo").bind("error",function(){ai.title=false;
ao(J(ah,"Error").html(ai.imgError))
}).one("load",function(){var at;
if(ar!==G){return
}n.alt=M(w).attr("alt")||M(w).attr("data-alt")||"";
if(ai.retinaImage&&aa.devicePixelRatio>1){n.height=n.height/aa.devicePixelRatio;
n.width=n.width/aa.devicePixelRatio
}if(ai.scalePhotos){aq=function(){n.height-=n.height*at;
n.width-=n.width*at
};
if(ai.mw&&n.width>ai.mw){at=(n.width-ai.mw)/n.width;
aq()
}if(ai.mh&&n.height>ai.mh){at=(n.height-ai.mh)/n.height;
aq()
}}if(ai.h){n.style.marginTop=Math.max(ai.mh-n.height,0)/2+"px"
}if(c[1]&&(ai.loop||c[L+1])){n.style.cursor="pointer";
n.onclick=function(){O.next()
}
}n.style.width=n.width+"px";
n.style.height=n.height+"px";
setTimeout(function(){ao(n)
},1)
});
setTimeout(function(){n.src=ap
},1)
}else{if(ap){k.load(ap,ai.data,function(au,at){if(ar===G){ao(at==="error"?J(ah,"Error").html(ai.xhrError):M(this).contents())
}})
}}}}}}O.next=function(){if(!ac&&c[1]&&(ai.loop||c[L+1])){L=F(1);
f(c[L])
}};
O.prev=function(){if(!ac&&c[1]&&(ai.loop||L)){L=F(-1);
f(c[L])
}};
O.close=function(){if(D&&!P){P=true;
D=false;
H(v,ai.onCleanup);
ad.unbind("."+V);
T.fadeTo(ai.fadeOut||0,0);
ak.stop().fadeTo(ai.fadeOut||0,0,function(){ak.add(T).css({opacity:1,cursor:"auto"}).hide();
H(i);
Q.empty().remove();
setTimeout(function(){P=false;
H(af,ai.onClosed)
},1)
})
}};
O.remove=function(){if(!ak){return
}ak.stop();
M.colorbox.close();
ak.stop().remove();
T.remove();
P=false;
ak=null;
M("."+r).removeData(x).removeClass(r);
M(l).unbind("click."+V)
};
O.element=function(){return M(w)
};
O.settings=N
}(jQuery,document,window));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(arguments.length>1&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
(function(d){var b=/\+/g,a=/([^&=]+)=+([^&]*)/g,c=/([^&=]+)=?([^&]*)/g,e=function(f){return decodeURIComponent(f.replace(b," "))
};
d.parseQuery=function(j,g){var f,k={},i=g||{},h=i.tolerant?c:a;
if("?"===j.substring(0,1)){j=j.substring(1)
}while(f=h.exec(j)){k[e(f[1])]=e(f[2])
}return k
};
d.getQuery=function(f){return d.parseQuery(window.location.search,f)
};
d.fn.parseQuery=function(f){return d.parseQuery(d(this).serialize(),f)
}
}(jQuery));
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function d(){}function b(i,h){for(var j=i.length;
j--;
){if(i[j].listener===h){return j
}}return -1
}function g(h){return function(){return this[h].apply(this,arguments)
}
}var a=d.prototype,c=this,f=c.EventEmitter;
a.getListeners=function(k){var j,l,h=this._getEvents();
if("object"==typeof k){j={};
for(l in h){h.hasOwnProperty(l)&&k.test(l)&&(j[l]=h[l])
}}else{j=h[k]||(h[k]=[])
}return j
},a.flattenListeners=function(i){var h,j=[];
for(h=0;
i.length>h;
h+=1){j.push(i[h].listener)
}return j
},a.getListenersAsObject=function(i){var h,j=this.getListeners(i);
return j instanceof Array&&(h={},h[i]=j),h||j
},a.addListener=function(k,m){var h,j=this.getListenersAsObject(k),l="object"==typeof m;
for(h in j){j.hasOwnProperty(h)&&-1===b(j[h],m)&&j[h].push(l?m:{listener:m,once:!1})
}return this
},a.on=g("addListener"),a.addOnceListener=function(i,h){return this.addListener(i,{listener:h,once:!0})
},a.once=g("addOnceListener"),a.defineEvent=function(h){return this.getListeners(h),this
},a.defineEvents=function(i){for(var h=0;
i.length>h;
h+=1){this.defineEvent(i[h])
}return this
},a.removeListener=function(k,m){var h,j,l=this.getListenersAsObject(k);
for(j in l){l.hasOwnProperty(j)&&(h=b(l[j],m),-1!==h&&l[j].splice(h,1))
}return this
},a.off=g("removeListener"),a.addListeners=function(i,h){return this.manipulateListeners(!1,i,h)
},a.removeListeners=function(i,h){return this.manipulateListeners(!0,i,h)
},a.manipulateListeners=function(m,j,q){var h,l,p=m?this.removeListener:this.addListener,k=m?this.removeListeners:this.addListeners;
if("object"!=typeof j||j instanceof RegExp){for(h=q.length;
h--;
){p.call(this,j,q[h])
}}else{for(h in j){j.hasOwnProperty(h)&&(l=j[h])&&("function"==typeof l?p.call(this,h,l):k.call(this,h,l))
}}return this
},a.removeEvent=function(k){var j,l=typeof k,h=this._getEvents();
if("string"===l){delete h[k]
}else{if("object"===l){for(j in h){h.hasOwnProperty(j)&&k.test(j)&&delete h[j]
}}else{delete this._events
}}return this
},a.removeAllListeners=g("removeEvent"),a.emitEvent=function(m,j){var q,h,l,p,k=this.getListenersAsObject(m);
for(l in k){if(k.hasOwnProperty(l)){for(h=k[l].length;
h--;
){q=k[l][h],q.once===!0&&this.removeListener(m,q.listener),p=q.listener.apply(this,j||[]),p===this._getOnceReturnValue()&&this.removeListener(m,q.listener)
}}}return this
},a.trigger=g("emitEvent"),a.emit=function(i){var h=Array.prototype.slice.call(arguments,1);
return this.emitEvent(i,h)
},a.setOnceReturnValue=function(h){return this._onceReturnValue=h,this
},a._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0
},a._getEvents=function(){return this._events||(this._events={})
},d.noConflict=function(){return c.EventEmitter=f,d
},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return d
}):"object"==typeof module&&module.exports?module.exports=d:this.EventEmitter=d
}).call(this),function(d){function b(e){var h=d.event;
return h.target=h.target||h.srcElement||e,h
}var g=document.documentElement,a=function(){};
g.addEventListener?a=function(i,h,j){i.addEventListener(h,j,!1)
}:g.attachEvent&&(a=function(j,k,h){j[k+h]=h.handleEvent?function(){var e=b(j);
h.handleEvent.call(h,e)
}:function(){var e=b(j);
h.call(j,e)
},j.attachEvent("on"+k,j[k+h])
});
var c=function(){};
g.removeEventListener?c=function(i,h,j){i.removeEventListener(h,j,!1)
}:g.detachEvent&&(c=function(k,j,l){k.detachEvent("on"+j,k[j+l]);
try{delete k[j+l]
}catch(h){k[j+l]=void 0
}});
var f={bind:a,unbind:c};
"function"==typeof define&&define.amd?define("eventie/eventie",f):d.eventie=f
}(this),function(b,a){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(d,c){return a(b,d,c)
}):"object"==typeof exports?module.exports=a(b,require("wolfy87-eventemitter"),require("eventie")):b.imagesLoaded=a(b,b.EventEmitter,b.eventie)
}(window,function(p,A,j){function k(c,a){for(var d in a){c[d]=a[d]
}return c
}function b(a){return"[object Array]"===q.call(a)
}function g(d){var c=[];
if(b(d)){c=d
}else{if("number"==typeof d.length){for(var f=0,a=d.length;
a>f;
f++){c.push(d[f])
}}else{c.push(d)
}}return c
}function B(d,a,f){if(!(this instanceof B)){return new B(d,a)
}"string"==typeof d&&(d=document.querySelectorAll(d)),this.elements=g(d),this.options=k({},this.options),"function"==typeof a?f=a:k(this.options,a),f&&this.on("always",f),this.getImages(),x&&(this.jqDeferred=new x.Deferred);
var c=this;
setTimeout(function(){c.check()
})
}function m(a){this.img=a
}function w(a){this.src=a,y[a]=this
}var x=p.jQuery,z=p.console,l=z!==void 0,q=Object.prototype.toString;
B.prototype=new A,B.prototype.options={},B.prototype.getImages=function(){this.images=[];
for(var v=0,c=this.elements.length;
c>v;
v++){var D=this.elements[v];
"IMG"===D.nodeName&&this.addImage(D);
var a=D.nodeType;
if(a&&(1===a||9===a||11===a)){for(var h=D.querySelectorAll("img"),C=0,d=h.length;
d>C;
C++){var u=h[C];
this.addImage(u)
}}}},B.prototype.addImage=function(c){var a=new m(c);
this.images.push(a)
},B.prototype.check=function(){function f(n,i){return c.options.debug&&l&&z.log("confirm",n,i),c.progress(n),s++,s===a&&c.complete(),!0
}var c=this,s=0,a=this.images.length;
if(this.hasAnyBroken=!1,!a){return this.complete(),void 0
}for(var d=0;
a>d;
d++){var h=this.images[d];
h.on("confirm",f),h.check()
}},B.prototype.progress=function(c){this.hasAnyBroken=this.hasAnyBroken||!c.isLoaded;
var a=this;
setTimeout(function(){a.emit("progress",a,c),a.jqDeferred&&a.jqDeferred.notify&&a.jqDeferred.notify(a,c)
})
},B.prototype.complete=function(){var c=this.hasAnyBroken?"fail":"done";
this.isComplete=!0;
var a=this;
setTimeout(function(){if(a.emit(c,a),a.emit("always",a),a.jqDeferred){var d=a.hasAnyBroken?"reject":"resolve";
a.jqDeferred[d](a)
}})
},x&&(x.fn.imagesLoaded=function(c,a){var d=new B(this,c,a);
return d.jqDeferred.promise(x(this))
}),m.prototype=new A,m.prototype.check=function(){var c=y[this.img.src]||new w(this.img.src);
if(c.isConfirmed){return this.confirm(c.isLoaded,"cached was confirmed"),void 0
}if(this.img.complete&&void 0!==this.img.naturalWidth){return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0
}var a=this;
c.on("confirm",function(d,f){return a.confirm(d.isLoaded,f),!0
}),c.check()
},m.prototype.confirm=function(c,a){this.isLoaded=c,this.emit("confirm",this,a)
};
var y={};
return w.prototype=new A,w.prototype.check=function(){if(!this.isChecked){var a=new Image;
j.bind(a,"load",this),j.bind(a,"error",this),a.src=this.src,this.isChecked=!0
}},w.prototype.handleEvent=function(c){var a="on"+c.type;
this[a]&&this[a](c)
},w.prototype.onload=function(a){this.confirm(!0,"onload"),this.unbindProxyEvents(a)
},w.prototype.onerror=function(a){this.confirm(!1,"onerror"),this.unbindProxyEvents(a)
},w.prototype.confirm=function(c,a){this.isConfirmed=!0,this.isLoaded=c,this.emit("confirm",this,a)
},w.prototype.unbindProxyEvents=function(a){j.unbind(a.target,"load",this),j.unbind(a.target,"error",this)
},B
});
/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 * 
 * TVNZ modified to remove the href from the button link in favour of an attempt 
 * to deep link using onInstall.
 * and change detection of banner type to handle facebook/twitter
 * 
 */
!function(c){var a=function(e){this.origHtmlMargin=parseFloat(c("html").css("margin-top"));
this.options=c.extend({},c.smartbanner.defaults,e);
var d=navigator.standalone,f=navigator.userAgent;
if(this.options.force){this.type=this.options.force
}else{if(f.match(/Windows Phone 8/i)!=null&&f.match(/Touch/i)!==null){this.type="windows"
}else{if(f.match(/iPhone|iPod/i)!=null||(f.match(/iPad/)&&this.options.iOSUniversalApp)){if((f.match(/Safari/i)!=null&&(f.match(/CriOS/i)!=null||window.Number(f.substr(f.indexOf("OS ")+3,3).replace("_","."))<6))||f.match(/FBAV/i)!=null||(f.match(/Twitter for/)!=null&&window.Number(f.substr(f.indexOf("OS ")+3,3).replace("_","."))>=9)){this.type="ios"
}}else{if(f.match(/\bSilk\/(.*\bMobile Safari\b)?/)||f.match(/\bKF\w/)||f.match("Kindle Fire")){this.type="kindle"
}else{if(f.match(/Android/i)!=null&&jQuery("body").data("device-type")!="tablet"){this.type="android"
}}}}}if(!this.type||d||this.getCookie("sb-closed")||this.getCookie("sb-installed")){return
}this.scale=this.options.scale=="auto"?c(window).width()/window.screen.width:this.options.scale;
if(this.scale<1){this.scale=1
}var g=c(this.type=="android"?'meta[name="google-play-app"]':this.type=="ios"?'meta[name="apple-itunes-app"]':this.type=="kindle"?'meta[name="kindle-fire-app"]':'meta[name="msApplication-ID"]');
if(g.length==0){return
}if(this.type=="windows"){this.appId=c('meta[name="msApplication-PackageFamilyName"]').attr("content")
}else{var h=/app-id=([^\s,]+)/.exec(g.attr("content"));
if(h){this.appId=h[1]
}else{return
}}this.title=this.options.title?this.options.title:g.data("title")||c("title").text().replace(/\s*[|\-·].*$/,"");
this.author=this.options.author?this.options.author:g.data("author")||(c('meta[name="author"]').length?c('meta[name="author"]').attr("content"):window.location.hostname);
this.iconUrl=g.data("icon-url");
this.price=g.data("price");
if(typeof this.options.onInstall==="function"){this.options.onInstall=this.options.onInstall
}else{this.options.onInstall=function(){}
}if(typeof this.options.onClose==="function"){this.options.onClose=this.options.onClose
}else{this.options.onClose=function(){}
}this.create();
this.show();
this.listen()
};
a.prototype={constructor:a,create:function(){var g,f=(this.options.url?this.options.url:(this.type=="windows"?"ms-windows-store:navigate?appid=":(this.type=="android"?"market://details?id=":(this.type=="kindle"?"amzn://apps/android?asin=":"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id")))+this.appId),e=this.price||this.options.price,i=e?e+" - "+(this.type=="android"?this.options.inGooglePlay:this.type=="kindle"?this.options.inAmazonAppStore:this.type=="ios"?this.options.inAppStore:this.options.inWindowsStore):"",h=this.options.iconGloss===null?(this.type=="ios"):this.options.iconGloss;
if(this.type=="android"&&this.options.GooglePlayParams){f=f+"&referrer="+this.options.GooglePlayParams
}var d='<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+"</strong><span>"+this.author+"</span><span>"+i+'</span></div><a data-href="'+f+'" class="sb-button"><span>'+this.options.button+"</span></a></div></div>";
(this.options.layer)?c(this.options.appendToSelector).append(d):c(this.options.appendToSelector).prepend(d);
if(this.options.icon){g=this.options.icon
}else{if(this.iconUrl){g=this.iconUrl
}else{if(c('link[rel="apple-touch-icon-precomposed"]').length>0){g=c('link[rel="apple-touch-icon-precomposed"]').attr("href");
if(this.options.iconGloss===null){h=false
}}else{if(c('link[rel="apple-touch-icon"]').length>0){g=c('link[rel="apple-touch-icon"]').attr("href")
}else{if(c('meta[name="msApplication-TileImage"]').length>0){g=c('meta[name="msApplication-TileImage"]').attr("content")
}else{if(c('meta[name="msapplication-TileImage"]').length>0){g=c('meta[name="msapplication-TileImage"]').attr("content")
}}}}}}if(g){c("#smartbanner .sb-icon").css("background-image","url("+g+")");
if(h){c("#smartbanner .sb-icon").addClass("gloss")
}}else{c("#smartbanner").addClass("no-icon")
}this.bannerHeight=c("#smartbanner").outerHeight()+2;
if(this.scale>1){c("#smartbanner").css("top",parseFloat(c("#smartbanner").css("top"))*this.scale).css("height",parseFloat(c("#smartbanner").css("height"))*this.scale).hide();
c("#smartbanner .sb-container").css("-webkit-transform","scale("+this.scale+")").css("-msie-transform","scale("+this.scale+")").css("-moz-transform","scale("+this.scale+")").css("width",c(window).width()/this.scale)
}c("#smartbanner").css("position",(this.options.layer)?"absolute":"static")
},listen:function(){c("#smartbanner .sb-close").on("click",c.proxy(this.close,this));
c("#smartbanner .sb-button").on("click",c.proxy(this.install,this))
},show:function(f){var d=c("#smartbanner");
d.stop();
if(this.options.layer){d.animate({top:0,display:"block"},this.options.speedIn).addClass("shown").show();
c(this.pushSelector).animate({paddingTop:this.origHtmlMargin+(this.bannerHeight*this.scale)},this.options.speedIn,"swing",f)
}else{if(c.support.transition){d.animate({top:0},this.options.speedIn).addClass("shown");
var e=function(){c("html").removeClass("sb-animation");
if(f){f()
}};
c(this.pushSelector).addClass("sb-animation").one(c.support.transition.end,e).emulateTransitionEnd(this.options.speedIn).css("margin-top",this.origHtmlMargin+(this.bannerHeight*this.scale))
}else{d.slideDown(this.options.speedIn).addClass("shown")
}}},hide:function(f){var d=c("#smartbanner");
d.stop();
if(this.options.layer){d.animate({top:-1*this.bannerHeight*this.scale,display:"block"},this.options.speedIn).removeClass("shown");
c(this.pushSelector).animate({paddingTop:this.origHtmlMargin},this.options.speedIn,"swing",f)
}else{if(c.support.transition){if(this.type!=="android"){d.css("top",-1*this.bannerHeight*this.scale).removeClass("shown")
}else{d.css({display:"none"}).removeClass("shown")
}var e=function(){c("html").removeClass("sb-animation");
if(f){f()
}};
c(this.pushSelector).addClass("sb-animation").one(c.support.transition.end,e).emulateTransitionEnd(this.options.speedOut).css("margin-top",this.origHtmlMargin)
}else{d.slideUp(this.options.speedOut).removeClass("shown")
}}},close:function(d){d.preventDefault();
this.hide();
this.setCookie("sb-closed","true",this.options.daysHidden);
this.options.onClose(d)
},install:function(d){if(this.options.hideOnInstall){this.hide()
}this.setCookie("sb-installed","true",this.options.daysReminder);
this.options.onInstall(d)
},setCookie:function(d,f,e){var g=new Date();
g.setDate(g.getDate()+e);
f=encodeURI(f)+((e==null)?"":"; expires="+g.toUTCString());
document.cookie=d+"="+f+"; path=/;"
},getCookie:function(e){var f,d,h,g=document.cookie.split(";");
for(f=0;
f<g.length;
f++){d=g[f].substr(0,g[f].indexOf("="));
h=g[f].substr(g[f].indexOf("=")+1);
d=d.replace(/^\s+|\s+$/g,"");
if(d==e){return decodeURI(h)
}}return null
},switchType:function(){var d=this;
this.hide(function(){d.type=d.type=="android"?"ios":"android";
var e=c(d.type=="android"?'meta[name="google-play-app"]':'meta[name="apple-itunes-app"]').attr("content");
d.appId=/app-id=([^\s,]+)/.exec(e)[1];
c("#smartbanner").detach();
d.create();
d.show()
})
}};
c.smartbanner=function(e){var g=c(window),f=g.data("smartbanner"),d=typeof e=="object"&&e;
if(!f){g.data("smartbanner",(f=new a(d)))
}if(typeof e=="string"){f[e]()
}};
c.smartbanner.defaults={title:null,author:null,price:"FREE",appStoreLanguage:"us",inAppStore:"On the App Store",inGooglePlay:"In Google Play",inAmazonAppStore:"In the Amazon Appstore",inWindowsStore:"In the Windows Store",GooglePlayParams:null,icon:null,iconGloss:null,button:"VIEW",url:null,scale:"auto",speedIn:300,speedOut:400,daysHidden:15,daysReminder:90,force:null,hideOnInstall:true,layer:false,iOSUniversalApp:true,appendToSelector:"body",pushSelector:"html"};
c.smartbanner.Constructor=a;
function b(){var f=document.createElement("smartbanner");
var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var d in e){if(f.style[d]!==undefined){return{end:e[d]}
}}return false
}if(c.support.transition!==undefined){return
}c.fn.emulateTransitionEnd=function(f){var e=false,d=this;
c(this).one(c.support.transition.end,function(){e=true
});
var g=function(){if(!e){c(d).trigger(c.support.transition.end)
}};
setTimeout(g,f);
return this
};
c(function(){c.support.transition=b()
})
}(window.jQuery);
(function(a,b){if(typeof define==="function"&&define.amd){define("deeplink",b(a))
}else{if(typeof exports==="object"){module.exports=b(a)
}else{a.deeplink=b(a)
}}})(window||this,function(m){if(!m.document||!m.navigator){return
}var l;
var c={};
var d={iOS:{},android:{},androidDisabled:false,fallback:true,delay:1000,delta:500};
var h=function(r,p){var o={};
for(var q in r){o[q]=r[q]
}for(var q in p){o[q]=p[q]
}return o
};
var j=function(){var q="itms-apps://itunes.apple.com/app/";
var o=c.iOS.appName;
var p=c.iOS.appId;
return(p&&o)?(q+o+"/id"+p+"?mt=8"):null
};
var k=function(){var p="market://details?id=";
var o=c.android.appId;
return o?(p+o):null
};
var n=function(){var o={ios:c.iOS.storeUrl||j(),android:c.android.storeUrl||k()};
return o[c.platform]
};
var g=function(){return navigator.userAgent.match("Android")
};
var f=function(){return navigator.userAgent.match("iPad")||navigator.userAgent.match("iPhone")||navigator.userAgent.match("iPod")
};
var i=function(){return g()||f()
};
var a=function(o){return function(){var p=n();
var q=c.delay+c.delta;
if(typeof p==="string"&&(Date.now()-o)<q){window.location.href=p
}}
};
var b=function(o){c=h(d,o);
if(g()){c.platform="android"
}if(f()){c.platform="ios"
}};
var e=function(p){if(!i()){return false
}if(g()&&c.androidDisabled){return
}if(g()&&!navigator.userAgent.match(/Firefox/)){var q=p.match(/([^:]+):\/\/(.+)$/i);
p="intent://"+q[2]+"#Intent;scheme="+q[1];
p+=";package="+c.android.appId+";end"
}console.log("Deep link URI "+p);
if(c.fallback){l=setTimeout(a(Date.now()),c.delay)
}var o=document.createElement("iframe");
o.onload=function(){clearTimeout(l);
o.parentNode.removeChild(o);
window.location.href=p
};
o.src=p;
o.setAttribute("style","display:none;");
document.body.appendChild(o);
return true
};
return{setup:b,open:e}
});
/*!
 * Packery PACKAGED v1.2.2
 * bin-packing layout library
 * http://packery.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://packery.metafizzy.co/license.html
 *
 * Non-commercial use is licensed under the GPL v3 License
 *
 * Copyright 2013 Metafizzy
 */
(function(c){var d=Array.prototype.slice;
function b(){}function a(f){if(!f){return
}function h(i){if(i.prototype.option){return
}i.prototype.option=function(j){if(!f.isPlainObject(j)){return
}this.options=f.extend(true,this.options,j)
}
}var e=typeof console==="undefined"?b:function(i){console.error(i)
};
function g(i,j){f.fn[i]=function(n){if(typeof n==="string"){var m=d.call(arguments,1);
for(var o=0,l=this.length;
o<l;
o++){var q=this[o];
var k=f.data(q,i);
if(!k){e("cannot call methods on "+i+" prior to initialization; attempted to call '"+n+"'");
continue
}if(!f.isFunction(k[n])||n.charAt(0)==="_"){e("no such method '"+n+"' for "+i+" instance");
continue
}var p=k[n].apply(k,m);
if(p!==undefined){return p
}}return this
}else{return this.each(function(){var r=f.data(this,i);
if(r){r.option(n);
r._init()
}else{r=new j(this,n);
f.data(this,i,r)
}})
}}
}f.bridget=function(i,j){h(j);
g(i,j)
};
return f.bridget
}if(typeof define==="function"&&define.amd){define("jquery-bridget/jquery.bridget",["jquery"],a)
}else{a(c.jQuery)
}})(window);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(e){function a(h){return new RegExp("(^|\\s+)"+h+"(\\s+|$)")
}var d,f,g;
if("classList" in document.documentElement){d=function(h,i){return h.classList.contains(i)
};
f=function(h,i){h.classList.add(i)
};
g=function(h,i){h.classList.remove(i)
}
}else{d=function(h,i){return a(i).test(h.className)
};
f=function(h,i){if(!d(h,i)){h.className=h.className+" "+i
}};
g=function(h,i){h.className=h.className.replace(a(i)," ")
}
}function b(i,j){var h=d(i,j)?g:f;
h(i,j)
}var c={hasClass:d,addClass:f,removeClass:g,toggleClass:b,has:d,add:f,remove:g,toggle:b};
if(typeof define==="function"&&define.amd){define("classie/classie",c)
}else{e.classie=c
}})(window);
/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */
(function(c){var d="Webkit Moz ms Ms O".split(" ");
var b=document.documentElement.style;
function a(h){if(!h){return
}if(typeof b[h]==="string"){return h
}h=h.charAt(0).toUpperCase()+h.slice(1);
var f;
for(var g=0,e=d.length;
g<e;
g++){f=d[g]+h;
if(typeof b[f]==="string"){return f
}}}if(typeof define==="function"&&define.amd){define("get-style-property/get-style-property",[],function(){return a
})
}else{if(typeof exports==="object"){module.exports=a
}else{c.getStyleProperty=a
}}})(window);
(function(d,g){var e=d.getComputedStyle;
var a=e?function(i){return e(i,null)
}:function(i){return i.currentStyle
};
function c(j){var i=parseFloat(j);
var k=j.indexOf("%")===-1&&!isNaN(i);
return k&&i
}var b=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];
function f(){var l={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};
for(var k=0,j=b.length;
k<j;
k++){var m=b[k];
l[m]=0
}return l
}function h(l){var j=l("boxSizing");
var k;
(function(){if(!j){return
}var p=document.createElement("div");
p.style.width="200px";
p.style.padding="1px 2px 3px 4px";
p.style.borderStyle="solid";
p.style.borderWidth="1px 2px 3px 4px";
p.style[j]="border-box";
var n=document.body||document.documentElement;
n.appendChild(p);
var o=a(p);
k=c(o.width)===200;
n.removeChild(p)
})();
function m(C){if(typeof C==="string"){C=document.querySelector(C)
}if(!C||typeof C!=="object"||!C.nodeType){return
}var A=a(C);
if(A.display==="none"){return f()
}var t={};
t.width=C.offsetWidth;
t.height=C.offsetHeight;
var B=t.isBorderBox=!!(j&&A[j]&&A[j]==="border-box");
for(var x=0,y=b.length;
x<y;
x++){var v=b[x];
var w=A[v];
w=i(C,w);
var n=parseFloat(w);
t[v]=!isNaN(n)?n:0
}var z=t.paddingLeft+t.paddingRight;
var s=t.paddingTop+t.paddingBottom;
var E=t.marginLeft+t.marginRight;
var q=t.marginTop+t.marginBottom;
var D=t.borderLeftWidth+t.borderRightWidth;
var p=t.borderTopWidth+t.borderBottomWidth;
var o=B&&k;
var r=c(A.width);
if(r!==false){t.width=r+(o?0:z+D)
}var u=c(A.height);
if(u!==false){t.height=u+(o?0:s+p)
}t.innerWidth=t.width-(z+D);
t.innerHeight=t.height-(s+p);
t.outerWidth=t.width+E;
t.outerHeight=t.height+q;
return t
}function i(q,r){if(e||r.indexOf("%")===-1){return r
}var p=q.style;
var s=p.left;
var o=q.runtimeStyle;
var n=o&&o.left;
if(n){o.left=q.currentStyle.left
}p.left=r;
r=p.pixelLeft;
p.left=s;
if(n){o.left=n
}return r
}return m
}if(typeof define==="function"&&define.amd){define("get-size/get-size",["get-style-property/get-style-property"],h)
}else{if(typeof exports==="object"){module.exports=h(require("get-style-property"))
}else{d.getSize=h(d.getStyleProperty)
}}})(window);
/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
(function(e){var b=document.documentElement;
var f=function(){};
function a(h){var g=e.event;
g.target=g.target||g.srcElement||h;
return g
}if(b.addEventListener){f=function(i,h,g){i.addEventListener(h,g,false)
}
}else{if(b.attachEvent){f=function(i,h,g){i[h+g]=g.handleEvent?function(){var j=a(i);
g.handleEvent.call(g,j)
}:function(){var j=a(i);
g.call(i,j)
};
i.attachEvent("on"+h,i[h+g])
}
}}var d=function(){};
if(b.removeEventListener){d=function(i,h,g){i.removeEventListener(h,g,false)
}
}else{if(b.detachEvent){d=function(j,h,g){j.detachEvent("on"+h,j[h+g]);
try{delete j[h+g]
}catch(i){j[h+g]=undefined
}}
}}var c={bind:f,unbind:d};
if(typeof define==="function"&&define.amd){define("eventie/eventie",c)
}else{if(typeof exports==="object"){module.exports=c
}else{e.eventie=c
}}})(this);
/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */
(function(d){var b=d.document;
var a=[];
function c(g){if(typeof g!=="function"){return
}if(c.isReady){g()
}else{a.push(g)
}}c.isReady=false;
function f(l){var k=l.type==="readystatechange"&&b.readyState!=="complete";
if(c.isReady||k){return
}c.isReady=true;
for(var h=0,g=a.length;
h<g;
h++){var j=a[h];
j()
}}function e(g){g.bind(b,"DOMContentLoaded",f);
g.bind(b,"readystatechange",f);
g.bind(d,"load",f);
return c
}if(typeof define==="function"&&define.amd){c.isReady=typeof requirejs==="function";
define("doc-ready/doc-ready",["eventie/eventie"],e)
}else{d.docReady=e(d.eventie)
}})(this);
/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function(){function c(){}var l=c.prototype;
var v=this;
var x=v.EventEmitter;
function h(z,A){var y=z.length;
while(y--){if(z[y].listener===A){return y
}}return -1
}function j(y){return function z(){return this[y].apply(this,arguments)
}
}l.getListeners=function t(y){var B=this._getEvents();
var z;
var A;
if(y instanceof RegExp){z={};
for(A in B){if(B.hasOwnProperty(A)&&y.test(A)){z[A]=B[A]
}}}else{z=B[y]||(B[y]=[])
}return z
};
l.flattenListeners=function r(A){var y=[];
var z;
for(z=0;
z<A.length;
z+=1){y.push(A[z].listener)
}return y
};
l.getListenersAsObject=function e(y){var A=this.getListeners(y);
var z;
if(A instanceof Array){z={};
z[y]=A
}return z||A
};
l.addListener=function f(y,B){var A=this.getListenersAsObject(y);
var C=typeof B==="object";
var z;
for(z in A){if(A.hasOwnProperty(z)&&h(A[z],B)===-1){A[z].push(C?B:{listener:B,once:false})
}}return this
};
l.on=j("addListener");
l.addOnceListener=function a(y,z){return this.addListener(y,{listener:z,once:true})
};
l.once=j("addOnceListener");
l.defineEvent=function p(y){this.getListeners(y);
return this
};
l.defineEvents=function q(y){for(var z=0;
z<y.length;
z+=1){this.defineEvent(y[z])
}return this
};
l.removeListener=function b(y,C){var B=this.getListenersAsObject(y);
var z;
var A;
for(A in B){if(B.hasOwnProperty(A)){z=h(B[A],C);
if(z!==-1){B[A].splice(z,1)
}}}return this
};
l.off=j("removeListener");
l.addListeners=function m(y,z){return this.manipulateListeners(false,y,z)
};
l.removeListeners=function s(y,z){return this.manipulateListeners(true,y,z)
};
l.manipulateListeners=function g(z,A,C){var B;
var D;
var E=z?this.removeListener:this.addListener;
var y=z?this.removeListeners:this.addListeners;
if(typeof A==="object"&&!(A instanceof RegExp)){for(B in A){if(A.hasOwnProperty(B)&&(D=A[B])){if(typeof D==="function"){E.call(this,B,D)
}else{y.call(this,B,D)
}}}}else{B=C.length;
while(B--){E.call(this,A,C[B])
}}return this
};
l.removeEvent=function o(y){var B=typeof y;
var A=this._getEvents();
var z;
if(B==="string"){delete A[y]
}else{if(y instanceof RegExp){for(z in A){if(A.hasOwnProperty(z)&&y.test(z)){delete A[z]
}}}else{delete this._events
}}return this
};
l.removeAllListeners=j("removeEvent");
l.emitEvent=function u(y,A){var D=this.getListenersAsObject(y);
var E;
var C;
var B;
var z;
for(B in D){if(D.hasOwnProperty(B)){C=D[B].length;
while(C--){E=D[B][C];
if(E.once===true){this.removeListener(y,E.listener)
}z=E.listener.apply(this,A||[]);
if(z===this._getOnceReturnValue()){this.removeListener(y,E.listener)
}}}}return this
};
l.trigger=j("emitEvent");
l.emit=function k(y){var z=Array.prototype.slice.call(arguments,1);
return this.emitEvent(y,z)
};
l.setOnceReturnValue=function i(y){this._onceReturnValue=y;
return this
};
l._getOnceReturnValue=function n(){if(this.hasOwnProperty("_onceReturnValue")){return this._onceReturnValue
}else{return true
}};
l._getEvents=function d(){return this._events||(this._events={})
};
c.noConflict=function w(){v.EventEmitter=x;
return c
};
if(typeof define==="function"&&define.amd){define("eventEmitter/EventEmitter",[],function(){return c
})
}else{if(typeof module==="object"&&module.exports){module.exports=c
}else{this.EventEmitter=c
}}}.call(this));
(function(b,i){var g=(function(){if(i.matchesSelector){return"matchesSelector"
}var n=["webkit","moz","ms","o"];
for(var l=0,k=n.length;
l<k;
l++){var m=n[l];
var o=m+"MatchesSelector";
if(i[o]){return o
}}})();
function e(l,k){return l[g](k)
}function h(l){if(l.parentNode){return
}var k=document.createDocumentFragment();
k.appendChild(l)
}function f(o,l){h(o);
var m=o.parentNode.querySelectorAll(l);
for(var n=0,k=m.length;
n<k;
n++){if(m[n]===o){return true
}}return false
}function d(l,k){h(l);
return e(l,k)
}var j;
if(g){var a=document.createElement("div");
var c=e(a,"div");
j=c?e:d
}else{j=f
}if(typeof define==="function"&&define.amd){define("matches-selector/matches-selector",[],function(){return j
})
}else{window.matchesSelector=j
}})(this,Element.prototype);
(function(d){var c=document.defaultView;
var b=c&&c.getComputedStyle?function(h){return c.getComputedStyle(h,null)
}:function(h){return h.currentStyle
};
function g(i,h){for(var j in h){i[j]=h[j]
}return i
}function a(h){for(var i in h){return false
}i=null;
return true
}function e(h){return h.replace(/([A-Z])/g,function(i){return"-"+i.toLowerCase()
})
}function f(v,u,k){var t=k("transition");
var q=k("transform");
var r=t&&q;
var o=!!k("perspective");
var h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[t];
var m=["transform","transition","transitionDuration","transitionProperty"];
var s=(function(){var x={};
for(var y=0,w=m.length;
y<w;
y++){var A=m[y];
var z=k(A);
if(z&&z!==A){x[A]=z
}}return x
})();
function j(w,x){if(!w){return
}this.element=w;
this.layout=x;
this.position={x:0,y:0};
this._create()
}g(j.prototype,v.prototype);
j.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}};
this.css({position:"absolute"})
};
j.prototype.handleEvent=function(w){var x="on"+w.type;
if(this[x]){this[x](w)
}};
j.prototype.getSize=function(){this.size=u(this.element)
};
j.prototype.css=function(y){var w=this.element.style;
for(var z in y){var x=s[z]||z;
w[x]=y[z]
}};
j.prototype.getPosition=function(){var B=b(this.element);
var z=this.layout.options;
var E=z.isOriginLeft;
var D=z.isOriginTop;
var w=parseInt(B[E?"left":"right"],10);
var C=parseInt(B[D?"top":"bottom"],10);
w=isNaN(w)?0:w;
C=isNaN(C)?0:C;
var A=this.layout.size;
w-=E?A.paddingLeft:A.paddingRight;
C-=D?A.paddingTop:A.paddingBottom;
this.position.x=w;
this.position.y=C
};
j.prototype.layoutPosition=function(){var x=this.layout.size;
var w=this.layout.options;
var y={};
if(w.isOriginLeft){y.left=(this.position.x+x.paddingLeft)+"px";
y.right=""
}else{y.right=(this.position.x+x.paddingRight)+"px";
y.left=""
}if(w.isOriginTop){y.top=(this.position.y+x.paddingTop)+"px";
y.bottom=""
}else{y.bottom=(this.position.y+x.paddingBottom)+"px";
y.top=""
}this.css(y);
this.emitEvent("layout",[this])
};
var i=o?function(w,z){return"translate3d("+w+"px, "+z+"px, 0)"
}:function(w,z){return"translate("+w+"px, "+z+"px)"
};
j.prototype._transitionTo=function(H,G){this.getPosition();
var z=this.position.x;
var w=this.position.y;
var F=parseInt(H,10);
var E=parseInt(G,10);
var D=F===this.position.x&&E===this.position.y;
this.setPosition(H,G);
if(D&&!this.isTransitioning){this.layoutPosition();
return
}var C=H-z;
var B=G-w;
var A={};
var I=this.layout.options;
C=I.isOriginLeft?C:-C;
B=I.isOriginTop?B:-B;
A.transform=i(C,B);
this.transition({to:A,onTransitionEnd:{transform:this.layoutPosition},isCleaning:true})
};
j.prototype.goTo=function(w,z){this.setPosition(w,z);
this.layoutPosition()
};
j.prototype.moveTo=r?j.prototype._transitionTo:j.prototype.goTo;
j.prototype.setPosition=function(w,z){this.position.x=parseInt(w,10);
this.position.y=parseInt(z,10)
};
j.prototype._nonTransition=function(w){this.css(w.to);
if(w.isCleaning){this._removeStyles(w.to)
}for(var x in w.onTransitionEnd){w.onTransitionEnd[x].call(this)
}};
j.prototype._transition=function(w){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(w);
return
}var y=this._transn;
for(var z in w.onTransitionEnd){y.onEnd[z]=w.onTransitionEnd[z]
}for(z in w.to){y.ingProperties[z]=true;
if(w.isCleaning){y.clean[z]=true
}}if(w.from){this.css(w.from);
var x=this.element.offsetHeight;
x=null
}this.enableTransition(w.to);
this.css(w.to);
this.isTransitioning=true
};
var l=q&&(e(q)+",opacity");
j.prototype.enableTransition=function(){if(this.isTransitioning){return
}this.css({transitionProperty:l,transitionDuration:this.layout.options.transitionDuration});
this.element.addEventListener(h,this,false)
};
j.prototype.transition=j.prototype[t?"_transition":"_nonTransition"];
j.prototype.onwebkitTransitionEnd=function(w){this.ontransitionend(w)
};
j.prototype.onotransitionend=function(w){this.ontransitionend(w)
};
var n={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};
j.prototype.ontransitionend=function(z){if(z.target!==this.element){return
}var y=this._transn;
var w=n[z.propertyName]||z.propertyName;
delete y.ingProperties[w];
if(a(y.ingProperties)){this.disableTransition()
}if(w in y.clean){this.element.style[z.propertyName]="";
delete y.clean[w]
}if(w in y.onEnd){var x=y.onEnd[w];
x.call(this);
delete y.onEnd[w]
}this.emitEvent("transitionEnd",[this])
};
j.prototype.disableTransition=function(){this.removeTransitionStyles();
this.element.removeEventListener(h,this,false);
this.isTransitioning=false
};
j.prototype._removeStyles=function(x){var w={};
for(var y in x){w[y]=""
}this.css(w)
};
var p={transitionProperty:"",transitionDuration:""};
j.prototype.removeTransitionStyles=function(){this.css(p)
};
j.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element);
this.emitEvent("remove",[this])
};
j.prototype.remove=function(){if(!t||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();
return
}var w=this;
this.on("transitionEnd",function(){w.removeElem();
return true
});
this.hide()
};
j.prototype.reveal=function(){delete this.isHidden;
this.css({display:""});
var w=this.layout.options;
this.transition({from:w.hiddenStyle,to:w.visibleStyle,isCleaning:true})
};
j.prototype.hide=function(){this.isHidden=true;
this.css({display:""});
var w=this.layout.options;
this.transition({from:w.visibleStyle,to:w.hiddenStyle,isCleaning:true,onTransitionEnd:{opacity:function(){if(this.isHidden){this.css({display:"none"})
}}}})
};
j.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})
};
return j
}if(typeof define==="function"&&define.amd){define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],f)
}else{d.Outlayer={};
d.Outlayer.Item=f(d.EventEmitter,d.getSize,d.getStyleProperty)
}})(window);
/*!
 * Outlayer v1.1.10
 * the brains and guts of a layout library
 * MIT license
 */
(function(f){var i=f.document;
var c=f.console;
var o=f.jQuery;
var n=function(){};
function h(r,q){for(var s in q){r[s]=q[s]
}return r
}var p=Object.prototype.toString;
function d(q){return p.call(q)==="[object Array]"
}function a(t){var s=[];
if(d(t)){s=t
}else{if(t&&typeof t.length==="number"){for(var r=0,q=t.length;
r<q;
r++){s.push(t[r])
}}else{s.push(t)
}}return s
}var g=(typeof HTMLElement==="object")?function e(q){return q instanceof HTMLElement
}:function b(q){return q&&typeof q==="object"&&q.nodeType===1&&typeof q.nodeName==="string"
};
var j=Array.prototype.indexOf?function(q,r){return q.indexOf(r)
}:function(s,t){for(var r=0,q=s.length;
r<q;
r++){if(s[r]===t){return r
}}return -1
};
function l(s,r){var q=j(r,s);
if(q!==-1){r.splice(q,1)
}}function k(q){return q.replace(/(.)([A-Z])/g,function(s,r,t){return r+"-"+t
}).toLowerCase()
}function m(w,r,y,x,z,s){var u=0;
var q={};
function t(B,A){if(typeof B==="string"){B=i.querySelector(B)
}if(!B||!g(B)){if(c){c.error("Bad "+this.constructor.namespace+" element: "+B)
}return
}this.element=B;
this.options=h({},this.options);
this.option(A);
var C=++u;
this.element.outlayerGUID=C;
q[C]=this;
this._create();
if(this.options.isInitLayout){this.layout()
}}t.namespace="outlayer";
t.Item=s;
t.prototype.options={containerStyle:{position:"relative"},isInitLayout:true,isOriginLeft:true,isOriginTop:true,isResizeBound:true,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};
h(t.prototype,y.prototype);
t.prototype.option=function(A){h(this.options,A)
};
t.prototype._create=function(){this.reloadItems();
this.stamps=[];
this.stamp(this.options.stamp);
h(this.element.style,this.options.containerStyle);
if(this.options.isResizeBound){this.bindResize()
}};
t.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)
};
t.prototype._itemize=function(C){var F=this._filterFindItemElements(C);
var D=this.constructor.Item;
var B=[];
for(var E=0,A=F.length;
E<A;
E++){var H=F[E];
var G=new D(H,this);
B.push(G)
}return B
};
t.prototype._filterFindItemElements=function(A){A=a(A);
var B=this.options.itemSelector;
var F=[];
for(var E=0,G=A.length;
E<G;
E++){var C=A[E];
if(!g(C)){continue
}if(B){if(z(C,B)){F.push(C)
}var H=C.querySelectorAll(B);
for(var D=0,I=H.length;
D<I;
D++){F.push(H[D])
}}else{F.push(C)
}}return F
};
t.prototype.getItemElements=function(){var B=[];
for(var C=0,A=this.items.length;
C<A;
C++){B.push(this.items[C].element)
}return B
};
t.prototype.layout=function(){this._resetLayout();
this._manageStamps();
var A=this.options.isLayoutInstant!==undefined?this.options.isLayoutInstant:!this._isLayoutInited;
this.layoutItems(this.items,A);
this._isLayoutInited=true
};
t.prototype._init=t.prototype.layout;
t.prototype._resetLayout=function(){this.getSize()
};
t.prototype.getSize=function(){this.size=x(this.element)
};
t.prototype._getMeasurement=function(C,A){var B=this.options[C];
var D;
if(!B){this[C]=0
}else{if(typeof B==="string"){D=this.element.querySelector(B)
}else{if(g(B)){D=B
}}this[C]=D?x(D)[A]:B
}};
t.prototype.layoutItems=function(A,B){A=this._getItemsForLayout(A);
this._layoutItems(A,B);
this._postLayout()
};
t.prototype._getItemsForLayout=function(B){var E=[];
for(var C=0,A=B.length;
C<A;
C++){var D=B[C];
if(!D.isIgnored){E.push(D)
}}return E
};
t.prototype._layoutItems=function(H,G){var E=this;
function A(){E.emitEvent("layoutComplete",[E,H])
}if(!H||!H.length){A();
return
}this._itemsOn(H,"layout",A);
var D=[];
for(var B=0,F=H.length;
B<F;
B++){var I=H[B];
var C=this._getItemLayoutPosition(I);
C.item=I;
C.isInstant=G||I.isLayoutInstant;
D.push(C)
}this._processLayoutQueue(D)
};
t.prototype._getItemLayoutPosition=function(){return{x:0,y:0}
};
t.prototype._processLayoutQueue=function(B){for(var C=0,A=B.length;
C<A;
C++){var D=B[C];
this._positionItem(D.item,D.x,D.y,D.isInstant)
}};
t.prototype._positionItem=function(B,A,D,C){if(C){B.goTo(A,D)
}else{B.moveTo(A,D)
}};
t.prototype._postLayout=function(){var A=this._getContainerSize();
if(A){this._setContainerMeasure(A.width,true);
this._setContainerMeasure(A.height,false)
}};
t.prototype._getContainerSize=n;
t.prototype._setContainerMeasure=function(A,B){if(A===undefined){return
}var C=this.size;
if(C.isBorderBox){A+=B?C.paddingLeft+C.paddingRight+C.borderLeftWidth+C.borderRightWidth:C.paddingBottom+C.paddingTop+C.borderTopWidth+C.borderBottomWidth
}A=Math.max(A,0);
this.element.style[B?"width":"height"]=A+"px"
};
t.prototype._itemsOn=function(H,D,I){var A=0;
var G=H.length;
var F=this;
function C(){A++;
if(A===G){I.call(F)
}return true
}for(var B=0,E=H.length;
B<E;
B++){var J=H[B];
J.on(D,C)
}};
t.prototype.ignore=function(B){var A=this.getItem(B);
if(A){A.isIgnored=true
}};
t.prototype.unignore=function(B){var A=this.getItem(B);
if(A){delete A.isIgnored
}};
t.prototype.stamp=function(B){B=this._find(B);
if(!B){return
}this.stamps=this.stamps.concat(B);
for(var C=0,A=B.length;
C<A;
C++){var D=B[C];
this.ignore(D)
}};
t.prototype.unstamp=function(B){B=this._find(B);
if(!B){return
}for(var C=0,A=B.length;
C<A;
C++){var D=B[C];
l(D,this.stamps);
this.unignore(D)
}};
t.prototype._find=function(A){if(!A){return
}if(typeof A==="string"){A=this.element.querySelectorAll(A)
}A=a(A);
return A
};
t.prototype._manageStamps=function(){if(!this.stamps||!this.stamps.length){return
}this._getBoundingRect();
for(var C=0,A=this.stamps.length;
C<A;
C++){var B=this.stamps[C];
this._manageStamp(B)
}};
t.prototype._getBoundingRect=function(){var A=this.element.getBoundingClientRect();
var B=this.size;
this._boundingRect={left:A.left+B.paddingLeft+B.borderLeftWidth,top:A.top+B.paddingTop+B.borderTopWidth,right:A.right-(B.paddingRight+B.borderRightWidth),bottom:A.bottom-(B.paddingBottom+B.borderBottomWidth)}
};
t.prototype._manageStamp=n;
t.prototype._getElementOffset=function(D){var A=D.getBoundingClientRect();
var C=this._boundingRect;
var B=x(D);
var E={left:A.left-C.left-B.marginLeft,top:A.top-C.top-B.marginTop,right:C.right-A.right-B.marginRight,bottom:C.bottom-A.bottom-B.marginBottom};
return E
};
t.prototype.handleEvent=function(A){var B="on"+A.type;
if(this[B]){this[B](A)
}};
t.prototype.bindResize=function(){if(this.isResizeBound){return
}w.bind(f,"resize",this);
this.isResizeBound=true
};
t.prototype.unbindResize=function(){w.unbind(f,"resize",this);
this.isResizeBound=false
};
t.prototype.onresize=function(){if(this.resizeTimeout){clearTimeout(this.resizeTimeout)
}var B=this;
function A(){B.resize();
delete B.resizeTimeout
}this.resizeTimeout=setTimeout(A,100)
};
t.prototype.resize=function(){var B=x(this.element);
var A=this.size&&B;
if(A&&B.innerWidth===this.size.innerWidth){return
}this.layout()
};
t.prototype.addItems=function(B){var A=this._itemize(B);
if(A.length){this.items=this.items.concat(A)
}return A
};
t.prototype.appended=function(B){var A=this.addItems(B);
if(!A.length){return
}this.layoutItems(A,true);
this.reveal(A)
};
t.prototype.prepended=function(B){var A=this._itemize(B);
if(!A.length){return
}var C=this.items.slice(0);
this.items=A.concat(C);
this._resetLayout();
this._manageStamps();
this.layoutItems(A,true);
this.reveal(A);
this.layoutItems(C)
};
t.prototype.reveal=function(B){var A=B&&B.length;
if(!A){return
}for(var C=0;
C<A;
C++){var D=B[C];
D.reveal()
}};
t.prototype.hide=function(B){var A=B&&B.length;
if(!A){return
}for(var C=0;
C<A;
C++){var D=B[C];
D.hide()
}};
t.prototype.getItem=function(D){for(var B=0,A=this.items.length;
B<A;
B++){var C=this.items[B];
if(C.element===D){return C
}}};
t.prototype.getItems=function(C){if(!C||!C.length){return
}var B=[];
for(var D=0,A=C.length;
D<A;
D++){var F=C[D];
var E=this.getItem(F);
if(E){B.push(E)
}}return B
};
t.prototype.remove=function(B){B=a(B);
var D=this.getItems(B);
if(!D||!D.length){return
}this._itemsOn(D,"remove",function(){this.emitEvent("removeComplete",[this,D])
});
for(var C=0,A=D.length;
C<A;
C++){var E=D[C];
E.remove();
l(E,this.items)
}};
t.prototype.destroy=function(){var C=this.element.style;
C.height="";
C.position="";
C.width="";
for(var B=0,A=this.items.length;
B<A;
B++){var D=this.items[B];
D.destroy()
}this.unbindResize();
delete this.element.outlayerGUID;
if(o){o.removeData(this.element,this.constructor.namespace)
}};
t.data=function(A){var B=A&&A.outlayerGUID;
return B&&q[B]
};
function v(B,A){B.prototype[A]=h({},t.prototype[A])
}t.create=function(D,B){function C(){t.apply(this,arguments)
}if(Object.create){C.prototype=Object.create(t.prototype)
}else{h(C.prototype,t.prototype)
}C.prototype.constructor=C;
v(C,"options");
h(C.prototype.options,B);
C.namespace=D;
C.data=t.data;
C.Item=function A(){s.apply(this,arguments)
};
C.Item.prototype=new s();
r(function(){var K=k(D);
var E=i.querySelectorAll(".js-"+K);
var L="data-"+K+"-options";
for(var G=0,H=E.length;
G<H;
G++){var F=E[G];
var I=F.getAttribute(L);
var N;
try{N=I&&JSON.parse(I)
}catch(J){if(c){c.error("Error parsing "+L+" on "+F.nodeName.toLowerCase()+(F.id?"#"+F.id:"")+": "+J)
}continue
}var M=new C(F,N);
if(o){o.data(F,D,M)
}}});
if(o&&o.bridget){o.bridget(D,C)
}return C
};
t.Item=s;
return t
}if(typeof define==="function"&&define.amd){define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],m)
}else{f.Outlayer=m(f.eventie,f.docReady,f.EventEmitter,f.getSize,f.matchesSelector,f.Outlayer.Item)
}})(window);
(function(b){var c=b.Packery=function(){};
function a(){function d(e){for(var f in d.defaults){this[f]=d.defaults[f]
}for(f in e){this[f]=e[f]
}}c.Rect=d;
d.defaults={x:0,y:0,width:0,height:0};
d.prototype.contains=function(g){var e=g.width||0;
var f=g.height||0;
return this.x<=g.x&&this.y<=g.y&&this.x+this.width>=g.x+e&&this.y+this.height>=g.y+f
};
d.prototype.overlaps=function(h){var i=this.x+this.width;
var e=this.y+this.height;
var f=h.x+h.width;
var g=h.y+h.height;
return this.x<f&&i>h.x&&this.y<g&&e>h.y
};
d.prototype.getMaximalFreeRects=function(j){if(!this.overlaps(j)){return false
}var g=[];
var f;
var k=this.x+this.width;
var e=this.y+this.height;
var h=j.x+j.width;
var i=j.y+j.height;
if(this.y<j.y){f=new d({x:this.x,y:this.y,width:this.width,height:j.y-this.y});
g.push(f)
}if(k>h){f=new d({x:h,y:this.y,width:k-h,height:this.height});
g.push(f)
}if(e>i){f=new d({x:this.x,y:i,width:this.width,height:e-i});
g.push(f)
}if(this.x<j.x){f=new d({x:this.x,y:this.y,width:j.x-this.x,height:this.height});
g.push(f)
}return g
};
d.prototype.canFit=function(e){return this.width>=e.width&&this.height>=e.height
};
return d
}if(typeof define==="function"&&define.amd){define("packery/js/rect",a)
}else{b.Packery=b.Packery||{};
b.Packery.Rect=a()
}})(window);
(function(a){function c(d){function f(h,g,i){this.width=h||0;
this.height=g||0;
this.sortDirection=i||"downwardLeftToRight";
this.reset()
}f.prototype.reset=function(){this.spaces=[];
this.newSpaces=[];
var g=new d({x:0,y:0,width:this.width,height:this.height});
this.spaces.push(g);
this.sorter=e[this.sortDirection]||e.downwardLeftToRight
};
f.prototype.pack=function(j){for(var h=0,g=this.spaces.length;
h<g;
h++){var k=this.spaces[h];
if(k.canFit(j)){this.placeInSpace(j,k);
break
}}};
f.prototype.placeInSpace=function(g,h){g.x=h.x;
g.y=h.y;
this.placed(g)
};
f.prototype.placed=function(l){var h=[];
for(var k=0,g=this.spaces.length;
k<g;
k++){var m=this.spaces[k];
var j=m.getMaximalFreeRects(l);
if(j){h.push.apply(h,j)
}else{h.push(m)
}}this.spaces=h;
f.mergeRects(this.spaces);
this.spaces.sort(this.sorter)
};
f.mergeRects=function(q){for(var k=0,m=q.length;
k<m;
k++){var n=q[k];
if(!n){continue
}var g=q.slice(0);
g.splice(k,1);
var o=0;
for(var h=0,r=g.length;
h<r;
h++){var l=g[h];
var p=k>h?0:1;
if(n.contains(l)){q.splice(h+p-o,1);
o++
}}}return q
};
var e={downwardLeftToRight:function(h,g){return h.y-g.y||h.x-g.x
},rightwardTopToBottom:function(h,g){return h.x-g.x||h.y-g.y
}};
return f
}if(typeof define==="function"&&define.amd){define("packery/js/packer",["./rect"],c)
}else{var b=a.Packery=a.Packery||{};
b.Packer=c(b.Rect)
}})(window);
(function(b){function a(h,f,e){var g=h("transform");
var d=function i(){f.Item.apply(this,arguments)
};
d.prototype=new f.Item();
var c=d.prototype._create;
d.prototype._create=function(){c.call(this);
this.rect=new e();
this.placeRect=new e()
};
d.prototype.dragStart=function(){this.getPosition();
this.removeTransitionStyles();
if(this.isTransitioning&&g){this.element.style[g]="none"
}this.getSize();
this.isPlacing=true;
this.needsPositioning=false;
this.positionPlaceRect(this.position.x,this.position.y);
this.isTransitioning=false;
this.didDrag=false
};
d.prototype.dragMove=function(j,l){this.didDrag=true;
var k=this.layout.size;
j-=k.paddingLeft;
l-=k.paddingTop;
this.positionPlaceRect(j,l)
};
d.prototype.dragStop=function(){this.getPosition();
var k=this.position.x!==this.placeRect.x;
var j=this.position.y!==this.placeRect.y;
this.needsPositioning=k||j;
this.didDrag=false
};
d.prototype.positionPlaceRect=function(j,l,k){this.placeRect.x=this.getPlaceRectCoord(j,true);
this.placeRect.y=this.getPlaceRectCoord(l,false,k)
};
d.prototype.getPlaceRectCoord=function(o,r,q){var j=r?"Width":"Height";
var s=this.size["outer"+j];
var n=this.layout[r?"columnWidth":"rowHeight"];
var k=this.layout.size["inner"+j];
if(!r){k=Math.max(k,this.layout.maxY);
if(!this.layout.rowHeight){k-=this.layout.gutter
}}var p;
if(n){n+=this.layout.gutter;
k+=r?this.layout.gutter:0;
o=Math.round(o/n);
var m;
if(this.layout.options.isHorizontal){m=!r?"floor":"ceil"
}else{m=r?"floor":"ceil"
}var l=Math[m](k/n);
l-=Math.ceil(s/n);
p=l
}else{p=k-s
}o=q?o:Math.min(o,p);
o*=n||1;
return Math.max(0,o)
};
d.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x;
this.rect.y=this.placeRect.y
};
return d
}if(typeof define==="function"&&define.amd){define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],a)
}else{b.Packery.Item=a(b.getStyleProperty,b.Outlayer,b.Packery.Rect)
}})(window);
/*!
 * Packery v1.2.2
 * bin-packing layout library
 * http://packery.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://packery.metafizzy.co/license.html
 *
 * Non-commercial use is licensed under the GPL v3 License
 *
 * Copyright 2013 Metafizzy
 */
(function(b){function a(h,k,g,c,f,e){var j=g.create("packery");
j.Item=e;
j.prototype._create=function(){g.prototype._create.call(this);
this.packer=new f();
this.stamp(this.options.stamped);
var o=this;
this.handleDraggabilly={dragStart:function(p){o.itemDragStart(p.element)
},dragMove:function(p){o.itemDragMove(p.element,p.position.x,p.position.y)
},dragEnd:function(p){o.itemDragEnd(p.element)
}};
this.handleUIDraggable={start:function n(p){o.itemDragStart(p.currentTarget)
},drag:function m(p,q){o.itemDragMove(p.currentTarget,q.position.left,q.position.top)
},stop:function l(p){o.itemDragEnd(p.currentTarget)
}}
};
j.prototype._resetLayout=function(){this.getSize();
this._getMeasurements();
var l=this.packer;
if(this.options.isHorizontal){l.width=Number.POSITIVE_INFINITY;
l.height=this.size.innerHeight+this.gutter;
l.sortDirection="rightwardTopToBottom"
}else{l.width=this.size.innerWidth+this.gutter;
l.height=Number.POSITIVE_INFINITY;
l.sortDirection="downwardLeftToRight"
}l.reset();
this.maxY=0;
this.maxX=0
};
j.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width");
this._getMeasurement("rowHeight","height");
this._getMeasurement("gutter","width")
};
j.prototype._getItemLayoutPosition=function(l){this._packItem(l);
return l.rect
};
j.prototype._packItem=function(l){this._setRectSize(l.element,l.rect);
this.packer.pack(l.rect);
this._setMaxXY(l.rect)
};
j.prototype._setMaxXY=function(l){this.maxX=Math.max(l.x+l.width,this.maxX);
this.maxY=Math.max(l.y+l.height,this.maxY)
};
j.prototype._setRectSize=function(r,q){var n=k(r);
var l=n.outerWidth;
var o=n.outerHeight;
var m=this.columnWidth+this.gutter;
var p=this.rowHeight+this.gutter;
l=this.columnWidth?Math.ceil(l/m)*m:l+this.gutter;
o=this.rowHeight?Math.ceil(o/p)*p:o+this.gutter;
q.width=Math.min(l,this.packer.width);
q.height=o
};
j.prototype._getContainerSize=function(){if(this.options.isHorizontal){return{width:this.maxX-this.gutter}
}else{return{height:this.maxY-this.gutter}
}};
j.prototype._manageStamp=function(n){var m=this.getItem(n);
var l;
if(m&&m.isPlacing){l=m.placeRect
}else{var o=this._getElementOffset(n);
l=new c({x:this.options.isOriginLeft?o.left:o.right,y:this.options.isOriginTop?o.top:o.bottom})
}this._setRectSize(n,l);
this.packer.placed(l);
this._setMaxXY(l)
};
function i(m,l){return m.position.y-l.position.y||m.position.x-l.position.x
}function d(m,l){return m.position.x-l.position.x||m.position.y-l.position.y
}j.prototype.sortItemsByPosition=function(){var l=this.options.isHorizontal?d:i;
this.items.sort(l)
};
j.prototype.fit=function(n,l,o){var m=this.getItem(n);
if(!m){return
}this._getMeasurements();
this.stamp(m.element);
m.getSize();
m.isPlacing=true;
l=l===undefined?m.rect.x:l;
o=o===undefined?m.rect.y:o;
m.positionPlaceRect(l,o,true);
this._bindFitEvents(m);
m.moveTo(m.placeRect.x,m.placeRect.y);
this.layout();
this.unstamp(m.element);
this.sortItemsByPosition();
m.isPlacing=false;
m.copyPlaceRectPosition()
};
j.prototype._bindFitEvents=function(n){var o=this;
var m=0;
function l(){m++;
if(m!==2){return
}o.emitEvent("fitComplete",[o,n])
}n.on("layout",function(){l();
return true
});
this.on("layoutComplete",function(){l();
return true
})
};
j.prototype.resize=function(){var n=k(this.element);
var m=this.size&&n;
var l=this.options.isHorizontal?"innerHeight":"innerWidth";
if(m&&n[l]===this.size[l]){return
}this.layout()
};
j.prototype.itemDragStart=function(m){this.stamp(m);
var l=this.getItem(m);
if(l){l.dragStart()
}};
j.prototype.itemDragMove=function(o,l,q){var n=this.getItem(o);
if(n){n.dragMove(l,q)
}var p=this;
function m(){p.layout();
delete p.dragTimeout
}this.clearDragTimeout();
this.dragTimeout=setTimeout(m,40)
};
j.prototype.clearDragTimeout=function(){if(this.dragTimeout){clearTimeout(this.dragTimeout)
}};
j.prototype.itemDragEnd=function(n){var m=this.getItem(n);
var l;
if(m){l=m.didDrag;
m.dragStop()
}if(!m||(!l&&!m.needsPositioning)){this.unstamp(n);
return
}h.add(m.element,"is-positioning-post-drag");
var o=this._getDragEndLayoutComplete(n,m);
if(m.needsPositioning){m.on("layout",o);
m.moveTo(m.placeRect.x,m.placeRect.y)
}else{if(m){m.copyPlaceRectPosition()
}}this.clearDragTimeout();
this.on("layoutComplete",o);
this.layout()
};
j.prototype._getDragEndLayoutComplete=function(p,o){var n=o&&o.needsPositioning;
var l=0;
var m=n?2:1;
var r=this;
return function q(){l++;
if(l!==m){return true
}if(o){h.remove(o.element,"is-positioning-post-drag");
o.isPlacing=false;
o.copyPlaceRectPosition()
}r.unstamp(p);
r.sortItemsByPosition();
if(n){r.emitEvent("dragItemPositioned",[r,o])
}return true
}
};
j.prototype.bindDraggabillyEvents=function(l){l.on("dragStart",this.handleDraggabilly.dragStart);
l.on("dragMove",this.handleDraggabilly.dragMove);
l.on("dragEnd",this.handleDraggabilly.dragEnd)
};
j.prototype.bindUIDraggableEvents=function(l){l.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)
};
j.Rect=c;
j.Packer=f;
return j
}if(typeof define==="function"&&define.amd){define(["classie/classie","get-size/get-size","outlayer/outlayer","packery/js/rect","packery/js/packer","packery/js/item"],a)
}else{b.Packery=a(b.classie,b.getSize,b.Outlayer,b.Packery.Rect,b.Packery.Packer,b.Packery.Item)
}})(window);
(function(d,j){var a=1000,g=false,f=d([]),i=function(){h.resume()
},e=function(k,m){var n=k.data("livestampdata");
if(typeof m=="number"){m*=1000
}k.removeAttr("data-livestamp").removeData("livestamp");
m=j(m);
if(j.isMoment(m)&&!isNaN(+m)){var l=d.extend({},{original:k.contents()},n);
l.moment=j(m);
k.data("livestampdata",l).empty();
f.push(k[0])
}},c=function(){if(g){return
}h.update();
setTimeout(c,a)
},h={update:function(){d("[data-livestamp]").each(function(){var l=d(this);
e(l,l.data("livestamp"))
});
var k=[];
f.each(function(){var n=d(this),l=n.data("livestampdata");
if(l===undefined){k.push(this)
}else{if(j.isMoment(l.moment)){var p=n.html(),o=l.moment.fromNow();
if(p!=o){var m=d.Event("change.livestamp");
n.trigger(m,[p,o,l.moment]);
if(!m.isDefaultPrevented()){n.html(o)
}}}}});
f=f.not(k)
},pause:function(){g=true
},resume:function(){g=false;
c()
},interval:function(k){if(k===undefined){return a
}a=k
}},b={add:function(k,l){if(typeof l=="number"){l*=1000
}l=j(l);
if(j.isMoment(l)&&!isNaN(+l)){k.each(function(){e(d(this),l)
});
h.update()
}return k
},destroy:function(k){f=f.not(k);
k.each(function(){var m=d(this),l=m.data("livestampdata");
if(l===undefined){return k
}m.html(l.original?l.original:"").removeData("livestampdata")
});
return k
},isLivestamp:function(k){return k.data("livestampdata")!==undefined
}};
d.livestamp=h;
d(i);
d.fn.livestamp=function(l,k){if(!b[l]){k=l;
l="add"
}return b[l](this,k)
}
})(jQuery,moment);
/*! BigText - v0.1.6 - 2014-04-21
 * https://github.com/zachleat/bigtext
 * Copyright (c) 2014 Zach Leatherman (@zachleat)
 * MIT License */
(function(g,e){var a=0,i=e("head"),h=g.BigText,f=e.fn.bigtext,d={DEBUG_MODE:false,DEFAULT_MIN_FONT_SIZE_PX:null,DEFAULT_MAX_FONT_SIZE_PX:528,GLOBAL_STYLE_ID:"bigtext-style",STYLE_ID:"bigtext-id",LINE_CLASS_PREFIX:"bigtext-line",EXEMPT_CLASS:"bigtext-exempt",noConflict:function(j){if(j){e.fn.bigtext=f;
g.BigText=h
}return d
},test:{noFractionalFontSize:(function(){if(!("getComputedStyle" in g)||!("body" in document)||!document.body){return true
}var k=e("<div/>").css({position:"absolute","font-size":"14.1px"}).appendTo(document.body).get(0),j=g.getComputedStyle(k,null);
return j?j.getPropertyValue("font-size")==="14px":true
})()},init:function(){if(!e("#"+d.GLOBAL_STYLE_ID).length){i.append(d.generateStyleTag(d.GLOBAL_STYLE_ID,[".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }",".bigtext ."+d.EXEMPT_CLASS+", .bigtext ."+d.EXEMPT_CLASS+" * { white-space: normal; }"]))
}},bindResize:function(j,k){if(e.throttle){e(g).unbind(j).bind(j,e.throttle(100,k))
}else{if(e.fn.smartresize){j="smartresize."+j
}e(g).unbind(j).bind(j,k)
}},getStyleId:function(j){return d.STYLE_ID+"-"+j
},generateStyleTag:function(k,j){return e("<style>"+j.join("\n")+"</style>").attr("id",k)
},clearCss:function(k){var j=d.getStyleId(k);
e("#"+j).remove()
},generateCss:function(r,q,p,o){var n=[];
d.clearCss(r);
for(var m=0,l=q.length;
m<l;
m++){n.push("#"+r+" ."+d.LINE_CLASS_PREFIX+m+" {"+(o[m]?" white-space: normal;":"")+(q[m]?" font-size: "+q[m]+"px;":"")+(p[m]?" word-spacing: "+p[m]+"px;":"")+"}")
}return d.generateStyleTag(d.getStyleId(r),n)
},jQueryMethod:function(j){d.init();
j=e.extend({minfontsize:d.DEFAULT_MIN_FONT_SIZE_PX,maxfontsize:d.DEFAULT_MAX_FONT_SIZE_PX,childSelector:"",resize:true},j||{});
this.each(function(){var o=e(this).addClass("bigtext"),m=o.width(),n=o.attr("id"),k=j.childSelector?o.find(j.childSelector):o.children();
if(!n){n="bigtext-id"+(a++);
o.attr("id",n)
}if(j.resize){d.bindResize("resize.bigtext-event-"+n,function(){d.jQueryMethod.call(e("#"+n),j)
})
}d.clearCss(n);
k.addClass(function(p,q){return[q.replace(new RegExp("\\b"+d.LINE_CLASS_PREFIX+"\\d+\\b"),""),d.LINE_CLASS_PREFIX+p].join(" ")
});
var l=b(o,k,m,j.maxfontsize,j.minfontsize);
i.append(d.generateCss(n,l.fontSizes,l.wordSpacings,l.minFontSizes))
});
return this.trigger("bigtext:complete")
}};
function c(p,r,q,s,k,n,m){var j;
m=typeof m==="number"?m:0;
p.css(q,s+n);
j=p.width();
if(j>=r){p.css(q,"");
if(j===r){return{match:"exact",size:parseFloat((parseFloat(s)-0.1).toFixed(3))}
}var o=r-m,l=j-r;
return{match:"estimate",size:parseFloat((parseFloat(s)-(q==="word-spacing"&&m&&(l<o)?0:k)).toFixed(3))}
}return j
}function b(m,q,r,s,p){var k=m.clone(true).addClass("bigtext-cloned").css({fontFamily:m.css("font-family"),textTransform:m.css("text-transform"),wordSpacing:m.css("word-spacing"),letterSpacing:m.css("letter-spacing"),position:"absolute",left:d.DEBUG_MODE?0:-9999,top:d.DEBUG_MODE?0:-9999}).appendTo(document.body);
var l=[],j=[],o=[],n=[];
q.css("float","left").each(function(){var C=e(this),x=d.test.noFractionalFontSize?[8,4,1]:[8,4,1,0.1],z,B;
if(C.hasClass(d.EXEMPT_CLASS)){l.push(null);
n.push(null);
o.push(false);
return
}var D=32,A=parseFloat(C.css("font-size")),y=(C.width()/A).toFixed(6);
B=parseInt(r/y,10)-D;
outer:for(var u=0,t=x.length;
u<t;
u++){inner:for(var w=1,v=10;
w<=v;
w++){if(B+w*x[u]>s){B=s;
break outer
}z=c(C,r,"font-size",B+w*x[u],x[u],"px",z);
if(typeof z!=="number"){B=z.size;
if(z.match==="exact"){break outer
}break inner
}}}n.push(r/B);
if(B>s){l.push(s);
o.push(false)
}else{if(!!p&&B<p){l.push(p);
o.push(true)
}else{l.push(B);
o.push(false)
}}}).each(function(u){var y=e(this),x=0,v=1,w;
if(y.hasClass(d.EXEMPT_CLASS)){j.push(null);
return
}y.css("font-size",l[u]+"px");
for(var t=1,z=3;
t<z;
t+=v){w=c(y,r,"word-spacing",t,v,"px",w);
if(typeof w!=="number"){x=w.size;
break
}}y.css("font-size","");
j.push(x)
}).removeAttr("style");
if(!d.DEBUG_MODE){k.remove()
}else{k.css({"background-color":"rgba(255,255,255,.4)"})
}return{fontSizes:l,wordSpacings:j,ratios:n,minFontSizes:o}
}e.fn.bigtext=d.jQueryMethod;
g.BigText=d
})(this,jQuery);
(function(){(function(p){var A=this||(0,eval)("this"),w=A.document,K=A.navigator,t=A.jQuery,C=A.JSON;
(function(p){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],p):p(A.ko={})
})(function(z){function G(a,c){return null===a||typeof a in M?a===c:!1
}function N(a,c){var d;
return function(){d||(d=setTimeout(function(){d=p;
a()
},c))
}
}function O(a,c){var d;
return function(){clearTimeout(d);
d=setTimeout(a,c)
}
}function H(b,c,d,e){a.d[b]={init:function(b,h,g,k,l){var n,r;
a.ba(function(){var g=a.a.c(h()),k=!d!==!g,s=!r;
if(s||c||k!==n){s&&a.ca.fa()&&(r=a.a.lb(a.e.childNodes(b),!0)),k?(s||a.e.U(b,a.a.lb(r)),a.gb(e?e(l,g):l,b)):a.e.da(b),n=k
}},null,{G:b});
return{controlsDescendantBindings:!0}
}};
a.g.aa[b]=!1;
a.e.Q[b]=!0
}var a="undefined"!==typeof z?z:{};
a.b=function(b,c){for(var d=b.split("."),e=a,f=0;
f<d.length-1;
f++){e=e[d[f]]
}e[d[d.length-1]]=c
};
a.s=function(a,c,d){a[c]=d
};
a.version="3.1.0";
a.b("version",a.version);
a.a=function(){function b(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])
}}function c(a,b){if(b){for(var c in b){b.hasOwnProperty(c)&&(a[c]=b[c])
}}return a
}function d(a,b){a.__proto__=b;
return a
}var e={__proto__:[]} instanceof Array,f={},h={};
f[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];
f.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
b(f,function(a,b){if(b.length){for(var c=0,d=b.length;
c<d;
c++){h[b[c]]=a
}}});
var g={propertychange:!0},k=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");
b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];
){}return 4<a?a:p
}();
return{mb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],r:function(a,b){for(var c=0,d=a.length;
c<d;
c++){b(a[c],c)
}},l:function(a,b){if("function"==typeof Array.prototype.indexOf){return Array.prototype.indexOf.call(a,b)
}for(var c=0,d=a.length;
c<d;
c++){if(a[c]===b){return c
}}return -1
},hb:function(a,b,c){for(var d=0,e=a.length;
d<e;
d++){if(b.call(c,a[d],d)){return a[d]
}}return null
},ma:function(b,c){var d=a.a.l(b,c);
0<d?b.splice(d,1):0===d&&b.shift()
},ib:function(b){b=b||[];
for(var c=[],d=0,e=b.length;
d<e;
d++){0>a.a.l(c,b[d])&&c.push(b[d])
}return c
},ya:function(a,b){a=a||[];
for(var c=[],d=0,e=a.length;
d<e;
d++){c.push(b(a[d],d))
}return c
},la:function(a,b){a=a||[];
for(var c=[],d=0,e=a.length;
d<e;
d++){b(a[d],d)&&c.push(a[d])
}return c
},$:function(a,b){if(b instanceof Array){a.push.apply(a,b)
}else{for(var c=0,d=b.length;
c<d;
c++){a.push(b[c])
}}return a
},Y:function(b,c,d){var e=a.a.l(a.a.Sa(b),c);
0>e?d&&b.push(c):d||b.splice(e,1)
},na:e,extend:c,ra:d,sa:e?d:c,A:b,Oa:function(a,b){if(!a){return a
}var c={},d;
for(d in a){a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a))
}return c
},Fa:function(b){for(;
b.firstChild;
){a.removeNode(b.firstChild)
}},ec:function(b){b=a.a.R(b);
for(var c=w.createElement("div"),d=0,e=b.length;
d<e;
d++){c.appendChild(a.M(b[d]))
}return c
},lb:function(b,c){for(var d=0,e=b.length,g=[];
d<e;
d++){var k=b[d].cloneNode(!0);
g.push(c?a.M(k):k)
}return g
},U:function(b,c){a.a.Fa(b);
if(c){for(var d=0,e=c.length;
d<e;
d++){b.appendChild(c[d])
}}},Bb:function(b,c){var d=b.nodeType?[b]:b;
if(0<d.length){for(var e=d[0],g=e.parentNode,k=0,h=c.length;
k<h;
k++){g.insertBefore(c[k],e)
}k=0;
for(h=d.length;
k<h;
k++){a.removeNode(d[k])
}}},ea:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;
a.length&&a[0].parentNode!==b;
){a.shift()
}if(1<a.length){var c=a[0],d=a[a.length-1];
for(a.length=0;
c!==d;
){if(a.push(c),c=c.nextSibling,!c){return
}}a.push(d)
}}return a
},Db:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b
},ta:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")
},oc:function(b,c){for(var d=[],e=(b||"").split(c),g=0,k=e.length;
g<k;
g++){var h=a.a.ta(e[g]);
""!==h&&d.push(h)
}return d
},kc:function(a,b){a=a||"";
return b.length>a.length?!1:a.substring(0,b.length)===b
},Sb:function(a,b){if(a===b){return !0
}if(11===a.nodeType){return !1
}if(b.contains){return b.contains(3===a.nodeType?a.parentNode:a)
}if(b.compareDocumentPosition){return 16==(b.compareDocumentPosition(a)&16)
}for(;
a&&a!=b;
){a=a.parentNode
}return !!a
},Ea:function(b){return a.a.Sb(b,b.ownerDocument.documentElement)
},eb:function(b){return !!a.a.hb(b,a.a.Ea)
},B:function(a){return a&&a.tagName&&a.tagName.toLowerCase()
},q:function(b,c,d){var e=k&&g[c];
if(!e&&t){t(b).bind(c,d)
}else{if(e||"function"!=typeof b.addEventListener){if("undefined"!=typeof b.attachEvent){var h=function(a){d.call(b,a)
},f="on"+c;
b.attachEvent(f,h);
a.a.u.ja(b,function(){b.detachEvent(f,h)
})
}else{throw Error("Browser doesn't support addEventListener or attachEvent")
}}else{b.addEventListener(c,d,!1)
}}},ha:function(b,c){if(!b||!b.nodeType){throw Error("element must be a DOM node when calling triggerEvent")
}var d;
"input"===a.a.B(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;
if(t&&!d){t(b).trigger(c)
}else{if("function"==typeof w.createEvent){if("function"==typeof b.dispatchEvent){d=w.createEvent(h[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d)
}else{throw Error("The supplied element doesn't support dispatchEvent")
}}else{if(d&&b.click){b.click()
}else{if("undefined"!=typeof b.fireEvent){b.fireEvent("on"+c)
}else{throw Error("Browser doesn't support triggering events")
}}}}},c:function(b){return a.v(b)?b():b
},Sa:function(b){return a.v(b)?b.o():b
},ua:function(b,c,d){if(c){var e=/\S+/g,g=b.className.match(e)||[];
a.a.r(c.match(e),function(b){a.a.Y(g,b,d)
});
b.className=g.join(" ")
}},Xa:function(b,c){var d=a.a.c(c);
if(null===d||d===p){d=""
}var e=a.e.firstChild(b);
!e||3!=e.nodeType||a.e.nextSibling(e)?a.e.U(b,[b.ownerDocument.createTextNode(d)]):e.data=d;
a.a.Vb(b)
},Cb:function(a,b){a.name=b;
if(7>=k){try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)
}catch(c){}}},Vb:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))
},Tb:function(a){if(k){var b=a.style.width;
a.style.width=0;
a.style.width=b
}},ic:function(b,c){b=a.a.c(b);
c=a.a.c(c);
for(var d=[],e=b;
e<=c;
e++){d.push(e)
}return d
},R:function(a){for(var b=[],c=0,d=a.length;
c<d;
c++){b.push(a[c])
}return b
},mc:6===k,nc:7===k,oa:k,ob:function(b,c){for(var d=a.a.R(b.getElementsByTagName("input")).concat(a.a.R(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c
}:function(a){return c.test(a.name)
},g=[],k=d.length-1;
0<=k;
k--){e(d[k])&&g.push(d[k])
}return g
},fc:function(b){return"string"==typeof b&&(b=a.a.ta(b))?C&&C.parse?C.parse(b):(new Function("return "+b))():null
},Ya:function(b,c,d){if(!C||!C.stringify){throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")
}return C.stringify(a.a.c(b),c,d)
},gc:function(c,d,e){e=e||{};
var g=e.params||{},k=e.includeFields||this.mb,h=c;
if("object"==typeof c&&"form"===a.a.B(c)){for(var h=c.action,f=k.length-1;
0<=f;
f--){for(var u=a.a.ob(c,k[f]),D=u.length-1;
0<=D;
D--){g[u[D].name]=u[D].value
}}}d=a.a.c(d);
var y=w.createElement("form");
y.style.display="none";
y.action=h;
y.method="post";
for(var p in d){c=w.createElement("input"),c.name=p,c.value=a.a.Ya(a.a.c(d[p])),y.appendChild(c)
}b(g,function(a,b){var c=w.createElement("input");
c.name=a;
c.value=b;
y.appendChild(c)
});
w.body.appendChild(y);
e.submitter?e.submitter(y):y.submit();
setTimeout(function(){y.parentNode.removeChild(y)
},0)
}}
}();
a.b("utils",a.a);
a.b("utils.arrayForEach",a.a.r);
a.b("utils.arrayFirst",a.a.hb);
a.b("utils.arrayFilter",a.a.la);
a.b("utils.arrayGetDistinctValues",a.a.ib);
a.b("utils.arrayIndexOf",a.a.l);
a.b("utils.arrayMap",a.a.ya);
a.b("utils.arrayPushAll",a.a.$);
a.b("utils.arrayRemoveItem",a.a.ma);
a.b("utils.extend",a.a.extend);
a.b("utils.fieldsIncludedWithJsonPost",a.a.mb);
a.b("utils.getFormFields",a.a.ob);
a.b("utils.peekObservable",a.a.Sa);
a.b("utils.postJson",a.a.gc);
a.b("utils.parseJson",a.a.fc);
a.b("utils.registerEventHandler",a.a.q);
a.b("utils.stringifyJson",a.a.Ya);
a.b("utils.range",a.a.ic);
a.b("utils.toggleDomNodeCssClass",a.a.ua);
a.b("utils.triggerEvent",a.a.ha);
a.b("utils.unwrapObservable",a.a.c);
a.b("utils.objectForEach",a.a.A);
a.b("utils.addOrRemoveItem",a.a.Y);
a.b("unwrap",a.a.c);
Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments);
a=d.shift();
return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))
}
});
a.a.f=new function(){function a(b,h){var g=b[d];
if(!g||"null"===g||!e[g]){if(!h){return p
}g=b[d]="ko"+c++;
e[g]={}
}return e[g]
}var c=0,d="__ko__"+(new Date).getTime(),e={};
return{get:function(c,d){var e=a(c,!1);
return e===p?p:e[d]
},set:function(c,d,e){if(e!==p||a(c,!1)!==p){a(c,!0)[d]=e
}},clear:function(a){var b=a[d];
return b?(delete e[b],a[d]=null,!0):!1
},L:function(){return c+++d
}}
};
a.b("utils.domData",a.a.f);
a.b("utils.domData.clear",a.a.f.clear);
a.a.u=new function(){function b(b,c){var e=a.a.f.get(b,d);
e===p&&c&&(e=[],a.a.f.set(b,d,e));
return e
}function c(d){var e=b(d,!1);
if(e){for(var e=e.slice(0),k=0;
k<e.length;
k++){e[k](d)
}}a.a.f.clear(d);
a.a.u.cleanExternalData(d);
if(f[d.nodeType]){for(e=d.firstChild;
d=e;
){e=d.nextSibling,8===d.nodeType&&c(d)
}}}var d=a.a.f.L(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};
return{ja:function(a,c){if("function"!=typeof c){throw Error("Callback must be a function")
}b(a,!0).push(c)
},Ab:function(c,e){var k=b(c,!1);
k&&(a.a.ma(k,e),0==k.length&&a.a.f.set(c,d,p))
},M:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];
a.a.$(d,b.getElementsByTagName("*"));
for(var k=0,l=d.length;
k<l;
k++){c(d[k])
}}return b
},removeNode:function(b){a.M(b);
b.parentNode&&b.parentNode.removeChild(b)
},cleanExternalData:function(a){t&&"function"==typeof t.cleanData&&t.cleanData([a])
}}
};
a.M=a.a.u.M;
a.removeNode=a.a.u.removeNode;
a.b("cleanNode",a.M);
a.b("removeNode",a.removeNode);
a.b("utils.domNodeDisposal",a.a.u);
a.b("utils.domNodeDisposal.addDisposeCallback",a.a.u.ja);
a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.u.Ab);
(function(){a.a.Qa=function(b){var c;
if(t){if(t.parseHTML){c=t.parseHTML(b)||[]
}else{if((c=t.clean([b]))&&c[0]){for(b=c[0];
b.parentNode&&11!==b.parentNode.nodeType;
){b=b.parentNode
}b.parentNode&&b.parentNode.removeChild(b)
}}}else{var d=a.a.ta(b).toLowerCase();
c=w.createElement("div");
d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];
b="ignored<div>"+d[1]+b+d[2]+"</div>";
for("function"==typeof A.innerShiv?c.appendChild(A.innerShiv(b)):c.innerHTML=b;
d[0]--;
){c=c.lastChild
}c=a.a.R(c.lastChild.childNodes)
}return c
};
a.a.Va=function(b,c){a.a.Fa(b);
c=a.a.c(c);
if(null!==c&&c!==p){if("string"!=typeof c&&(c=c.toString()),t){t(b).html(c)
}else{for(var d=a.a.Qa(c),e=0;
e<d.length;
e++){b.appendChild(d[e])
}}}}
})();
a.b("utils.parseHtmlFragment",a.a.Qa);
a.b("utils.setHtml",a.a.Va);
a.w=function(){function b(c,e){if(c){if(8==c.nodeType){var f=a.w.xb(c.nodeValue);
null!=f&&e.push({Rb:c,cc:f})
}else{if(1==c.nodeType){for(var f=0,h=c.childNodes,g=h.length;
f<g;
f++){b(h[f],e)
}}}}}var c={};
return{Na:function(a){if("function"!=typeof a){throw Error("You can only pass a function to ko.memoization.memoize()")
}var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
c[b]=a;
return"\x3c!--[ko_memo:"+b+"]--\x3e"
},Hb:function(a,b){var f=c[a];
if(f===p){throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.")
}try{return f.apply(null,b||[]),!0
}finally{delete c[a]
}},Ib:function(c,e){var f=[];
b(c,f);
for(var h=0,g=f.length;
h<g;
h++){var k=f[h].Rb,l=[k];
e&&a.a.$(l,e);
a.w.Hb(f[h].cc,l);
k.nodeValue="";
k.parentNode&&k.parentNode.removeChild(k)
}},xb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null
}}
}();
a.b("memoization",a.w);
a.b("memoization.memoize",a.w.Na);
a.b("memoization.unmemoize",a.w.Hb);
a.b("memoization.parseMemoText",a.w.xb);
a.b("memoization.unmemoizeDomNodeAndDescendants",a.w.Ib);
a.Ga={throttle:function(b,c){b.throttleEvaluation=c;
var d=null;
return a.h({read:b,write:function(a){clearTimeout(d);
d=setTimeout(function(){b(a)
},c)
}})
},rateLimit:function(a,c){var d,e,f;
"number"==typeof c?d=c:(d=c.timeout,e=c.method);
f="notifyWhenChangesStop"==e?O:N;
a.Ma(function(a){return f(a,d)
})
},notify:function(a,c){a.equalityComparer="always"==c?null:G
}};
var M={undefined:1,"boolean":1,number:1,string:1};
a.b("extenders",a.Ga);
a.Fb=function(b,c,d){this.target=b;
this.za=c;
this.Qb=d;
this.sb=!1;
a.s(this,"dispose",this.F)
};
a.Fb.prototype.F=function(){this.sb=!0;
this.Qb()
};
a.N=function(){a.a.sa(this,a.N.fn);
this.H={}
};
var F="change";
z={V:function(b,c,d){var e=this;
d=d||F;
var f=new a.Fb(e,c?b.bind(c):b,function(){a.a.ma(e.H[d],f)
});
e.o&&e.o();
e.H[d]||(e.H[d]=[]);
e.H[d].push(f);
return f
},notifySubscribers:function(b,c){c=c||F;
if(this.qb(c)){try{a.k.jb();
for(var d=this.H[c].slice(0),e=0,f;
f=d[e];
++e){f.sb||f.za(b)
}}finally{a.k.end()
}}},Ma:function(b){var c=this,d=a.v(c),e,f,h;
c.ia||(c.ia=c.notifySubscribers,c.notifySubscribers=function(a,b){b&&b!==F?"beforeChange"===b?c.bb(a):c.ia(a,b):c.cb(a)
});
var g=b(function(){d&&h===c&&(h=c());
e=!1;
c.Ka(f,h)&&c.ia(f=h)
});
c.cb=function(a){e=!0;
h=a;
g()
};
c.bb=function(a){e||(f=a,c.ia(a,"beforeChange"))
}
},qb:function(a){return this.H[a]&&this.H[a].length
},Wb:function(){var b=0;
a.a.A(this.H,function(a,d){b+=d.length
});
return b
},Ka:function(a,c){return !this.equalityComparer||!this.equalityComparer(a,c)
},extend:function(b){var c=this;
b&&a.a.A(b,function(b,e){var f=a.Ga[b];
"function"==typeof f&&(c=f(c,e)||c)
});
return c
}};
a.s(z,"subscribe",z.V);
a.s(z,"extend",z.extend);
a.s(z,"getSubscriptionsCount",z.Wb);
a.a.na&&a.a.ra(z,Function.prototype);
a.N.fn=z;
a.tb=function(a){return null!=a&&"function"==typeof a.V&&"function"==typeof a.notifySubscribers
};
a.b("subscribable",a.N);
a.b("isSubscribable",a.tb);
a.ca=a.k=function(){function b(a){d.push(e);
e=a
}function c(){e=d.pop()
}var d=[],e,f=0;
return{jb:b,end:c,zb:function(b){if(e){if(!a.tb(b)){throw Error("Only subscribable things can act as dependencies")
}e.za(b,b.Kb||(b.Kb=++f))
}},t:function(a,d,e){try{return b(),a.apply(d,e||[])
}finally{c()
}},fa:function(){if(e){return e.ba.fa()
}},pa:function(){if(e){return e.pa
}}}
}();
a.b("computedContext",a.ca);
a.b("computedContext.getDependenciesCount",a.ca.fa);
a.b("computedContext.isInitial",a.ca.pa);
a.m=function(b){function c(){if(0<arguments.length){return c.Ka(d,arguments[0])&&(c.P(),d=arguments[0],c.O()),this
}a.k.zb(c);
return d
}var d=b;
a.N.call(c);
a.a.sa(c,a.m.fn);
c.o=function(){return d
};
c.O=function(){c.notifySubscribers(d)
};
c.P=function(){c.notifySubscribers(d,"beforeChange")
};
a.s(c,"peek",c.o);
a.s(c,"valueHasMutated",c.O);
a.s(c,"valueWillMutate",c.P);
return c
};
a.m.fn={equalityComparer:G};
var E=a.m.hc="__ko_proto__";
a.m.fn[E]=a.m;
a.a.na&&a.a.ra(a.m.fn,a.N.fn);
a.Ha=function(b,c){return null===b||b===p||b[E]===p?!1:b[E]===c?!0:a.Ha(b[E],c)
};
a.v=function(b){return a.Ha(b,a.m)
};
a.ub=function(b){return"function"==typeof b&&b[E]===a.m||"function"==typeof b&&b[E]===a.h&&b.Yb?!0:!1
};
a.b("observable",a.m);
a.b("isObservable",a.v);
a.b("isWriteableObservable",a.ub);
a.T=function(b){b=b||[];
if("object"!=typeof b||!("length" in b)){throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.")
}b=a.m(b);
a.a.sa(b,a.T.fn);
return b.extend({trackArrayChanges:!0})
};
a.T.fn={remove:function(b){for(var c=this.o(),d=[],e="function"!=typeof b||a.v(b)?function(a){return a===b
}:b,f=0;
f<c.length;
f++){var h=c[f];
e(h)&&(0===d.length&&this.P(),d.push(h),c.splice(f,1),f--)
}d.length&&this.O();
return d
},removeAll:function(b){if(b===p){var c=this.o(),d=c.slice(0);
this.P();
c.splice(0,c.length);
this.O();
return d
}return b?this.remove(function(c){return 0<=a.a.l(b,c)
}):[]
},destroy:function(b){var c=this.o(),d="function"!=typeof b||a.v(b)?function(a){return a===b
}:b;
this.P();
for(var e=c.length-1;
0<=e;
e--){d(c[e])&&(c[e]._destroy=!0)
}this.O()
},destroyAll:function(b){return b===p?this.destroy(function(){return !0
}):b?this.destroy(function(c){return 0<=a.a.l(b,c)
}):[]
},indexOf:function(b){var c=this();
return a.a.l(c,b)
},replace:function(a,c){var d=this.indexOf(a);
0<=d&&(this.P(),this.o()[d]=c,this.O())
}};
a.a.r("pop push reverse shift sort splice unshift".split(" "),function(b){a.T.fn[b]=function(){var a=this.o();
this.P();
this.kb(a,b,arguments);
a=a[b].apply(a,arguments);
this.O();
return a
}
});
a.a.r(["slice"],function(b){a.T.fn[b]=function(){var a=this();
return a[b].apply(a,arguments)
}
});
a.a.na&&a.a.ra(a.T.fn,a.m.fn);
a.b("observableArray",a.T);
var I="arrayChange";
a.Ga.trackArrayChanges=function(b){function c(){if(!d){d=!0;
var c=b.notifySubscribers;
b.notifySubscribers=function(a,b){b&&b!==F||++f;
return c.apply(this,arguments)
};
var k=[].concat(b.o()||[]);
e=null;
b.V(function(c){c=[].concat(c||[]);
if(b.qb(I)){var d;
if(!e||1<f){e=a.a.Aa(k,c,{sparse:!0})
}d=e;
d.length&&b.notifySubscribers(d,I)
}k=c;
e=null;
f=0
})
}}if(!b.kb){var d=!1,e=null,f=0,h=b.V;
b.V=b.subscribe=function(a,b,d){d===I&&c();
return h.apply(this,arguments)
};
b.kb=function(b,c,l){function h(a,b,c){return r[r.length]={status:a,value:b,index:c}
}if(d&&!f){var r=[],m=b.length,q=l.length,s=0;
switch(c){case"push":s=m;
case"unshift":for(c=0;
c<q;
c++){h("added",l[c],s+c)
}break;
case"pop":s=m-1;
case"shift":m&&h("deleted",b[s],s);
break;
case"splice":c=Math.min(Math.max(0,0>l[0]?m+l[0]:l[0]),m);
for(var m=1===q?m:Math.min(c+(l[1]||0),m),q=c+q-2,s=Math.max(m,q),B=[],u=[],D=2;
c<s;
++c,++D){c<m&&u.push(h("deleted",b[c],c)),c<q&&B.push(h("added",l[D],c))
}a.a.nb(u,B);
break;
default:return
}e=r
}}
}};
a.ba=a.h=function(b,c,d){function e(){q=!0;
a.a.A(v,function(a,b){b.F()
});
v={};
x=0;
n=!1
}function f(){var a=g.throttleEvaluation;
a&&0<=a?(clearTimeout(t),t=setTimeout(h,a)):g.wa?g.wa():h()
}function h(){if(!r&&!q){if(y&&y()){if(!m){p();
return
}}else{m=!1
}r=!0;
try{var b=v,d=x;
a.k.jb({za:function(a,c){q||(d&&b[c]?(v[c]=b[c],++x,delete b[c],--d):v[c]||(v[c]=a.V(f),++x))
},ba:g,pa:!x});
v={};
x=0;
try{var e=c?s.call(c):s()
}finally{a.k.end(),d&&a.a.A(b,function(a,b){b.F()
}),n=!1
}g.Ka(l,e)&&(g.notifySubscribers(l,"beforeChange"),l=e,g.wa&&!g.throttleEvaluation||g.notifySubscribers(l))
}finally{r=!1
}x||p()
}}function g(){if(0<arguments.length){if("function"===typeof B){B.apply(c,arguments)
}else{throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")
}return this
}n&&h();
a.k.zb(g);
return l
}function k(){return n||0<x
}var l,n=!0,r=!1,m=!1,q=!1,s=b;
s&&"object"==typeof s?(d=s,s=d.read):(d=d||{},s||(s=d.read));
if("function"!=typeof s){throw Error("Pass a function that returns the value of the ko.computed")
}var B=d.write,u=d.disposeWhenNodeIsRemoved||d.G||null,D=d.disposeWhen||d.Da,y=D,p=e,v={},x=0,t=null;
c||(c=d.owner);
a.N.call(g);
a.a.sa(g,a.h.fn);
g.o=function(){n&&!x&&h();
return l
};
g.fa=function(){return x
};
g.Yb="function"===typeof d.write;
g.F=function(){p()
};
g.ga=k;
var w=g.Ma;
g.Ma=function(a){w.call(g,a);
g.wa=function(){g.bb(l);
n=!0;
g.cb(g)
}
};
a.s(g,"peek",g.o);
a.s(g,"dispose",g.F);
a.s(g,"isActive",g.ga);
a.s(g,"getDependenciesCount",g.fa);
u&&(m=!0,u.nodeType&&(y=function(){return !a.a.Ea(u)||D&&D()
}));
!0!==d.deferEvaluation&&h();
u&&k()&&u.nodeType&&(p=function(){a.a.u.Ab(u,p);
e()
},a.a.u.ja(u,p));
return g
};
a.$b=function(b){return a.Ha(b,a.h)
};
z=a.m.hc;
a.h[z]=a.m;
a.h.fn={equalityComparer:G};
a.h.fn[z]=a.h;
a.a.na&&a.a.ra(a.h.fn,a.N.fn);
a.b("dependentObservable",a.h);
a.b("computed",a.h);
a.b("isComputed",a.$b);
(function(){function b(a,f,h){h=h||new d;
a=f(a);
if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean){return a
}var g=a instanceof Array?[]:{};
h.save(a,g);
c(a,function(c){var d=f(a[c]);
switch(typeof d){case"boolean":case"number":case"string":case"function":g[c]=d;
break;
case"object":case"undefined":var n=h.get(d);
g[c]=n!==p?n:b(d,f,h)
}});
return g
}function c(a,b){if(a instanceof Array){for(var c=0;
c<a.length;
c++){b(c)
}"function"==typeof a.toJSON&&b("toJSON")
}else{for(c in a){b(c)
}}}function d(){this.keys=[];
this.ab=[]
}a.Gb=function(c){if(0==arguments.length){throw Error("When calling ko.toJS, pass the object you want to convert.")
}return b(c,function(b){for(var c=0;
a.v(b)&&10>c;
c++){b=b()
}return b
})
};
a.toJSON=function(b,c,d){b=a.Gb(b);
return a.a.Ya(b,c,d)
};
d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);
0<=d?this.ab[d]=c:(this.keys.push(b),this.ab.push(c))
},get:function(b){b=a.a.l(this.keys,b);
return 0<=b?this.ab[b]:p
}}
})();
a.b("toJS",a.Gb);
a.b("toJSON",a.toJSON);
(function(){a.i={p:function(b){switch(a.a.B(b)){case"option":return !0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Pa):7>=a.a.oa?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;
case"select":return 0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex]):p;
default:return b.value
}},X:function(b,c,d){switch(a.a.B(b)){case"option":switch(typeof c){case"string":a.a.f.set(b,a.d.options.Pa,p);
"__ko__hasDomDataOptionValue__" in b&&delete b.__ko__hasDomDataOptionValue__;
b.value=c;
break;
default:a.a.f.set(b,a.d.options.Pa,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""
}break;
case"select":if(""===c||null===c){c=p
}for(var e=-1,f=0,h=b.options.length,g;
f<h;
++f){if(g=a.i.p(b.options[f]),g==c||""==g&&c===p){e=f;
break
}}if(d||0<=e||c===p&&1<b.size){b.selectedIndex=e
}break;
default:if(null===c||c===p){c=""
}b.value=c
}}}
})();
a.b("selectExtensions",a.i);
a.b("selectExtensions.readValue",a.i.p);
a.b("selectExtensions.writeValue",a.i.X);
a.g=function(){function b(b){b=a.a.ta(b);
123===b.charCodeAt(0)&&(b=b.slice(1,-1));
var c=[],d=b.match(e),g,m,q=0;
if(d){d.push(",");
for(var s=0,B;
B=d[s];
++s){var u=B.charCodeAt(0);
if(44===u){if(0>=q){g&&c.push(m?{key:g,value:m.join("")}:{unknown:g});
g=m=q=0;
continue
}}else{if(58===u){if(!m){continue
}}else{if(47===u&&s&&1<B.length){(u=d[s-1].match(f))&&!h[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),d.push(","),s=-1,B="/")
}else{if(40===u||123===u||91===u){++q
}else{if(41===u||125===u||93===u){--q
}else{if(!g&&!m){g=34===u||39===u?B.slice(1,-1):B;
continue
}}}}}}m?m.push(B):m=[B]
}}return c
}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},g={};
return{aa:[],W:g,Ra:b,qa:function(e,l){function f(b,e){var l,k=a.getBindingHandler(b);
if(k&&k.preprocess?e=k.preprocess(e,b,f):1){if(k=g[b]){l=e,0<=a.a.l(c,l)?l=!1:(k=l.match(d),l=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:l),k=l
}k&&m.push("'"+b+"':function(_z){"+l+"=_z}");
q&&(e="function(){return "+e+" }");
h.push("'"+b+"':"+e)
}}l=l||{};
var h=[],m=[],q=l.valueAccessors,s="string"===typeof e?b(e):e;
a.a.r(s,function(a){f(a.key||a.unknown,a.value)
});
m.length&&f("_ko_property_writers","{"+m.join(",")+" }");
return h.join(",")
},bc:function(a,b){for(var c=0;
c<a.length;
c++){if(a[c].key==b){return !0
}}return !1
},va:function(b,c,d,e,g){if(b&&a.v(b)){!a.ub(b)||g&&b.o()===e||b(e)
}else{if((b=c.get("_ko_property_writers"))&&b[d]){b[d](e)
}}}}
}();
a.b("expressionRewriting",a.g);
a.b("expressionRewriting.bindingRewriteValidators",a.g.aa);
a.b("expressionRewriting.parseObjectLiteral",a.g.Ra);
a.b("expressionRewriting.preProcessBindings",a.g.qa);
a.b("expressionRewriting._twoWayBindings",a.g.W);
a.b("jsonExpressionRewriting",a.g);
a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.qa);
(function(){function b(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)
}function c(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)
}function d(a,d){for(var e=a,g=1,k=[];
e=e.nextSibling;
){if(c(e)&&(g--,0===g)){return k
}k.push(e);
b(e)&&g++
}if(!d){throw Error("Cannot find closing comment tag to match: "+a.nodeValue)
}return null
}function e(a,b){var c=d(a,b);
return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null
}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,g=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,k={ul:!0,ol:!0};
a.e={Q:{},childNodes:function(a){return b(a)?d(a):a.childNodes
},da:function(c){if(b(c)){c=a.e.childNodes(c);
for(var d=0,e=c.length;
d<e;
d++){a.removeNode(c[d])
}}else{a.a.Fa(c)
}},U:function(c,d){if(b(c)){a.e.da(c);
for(var e=c.nextSibling,g=0,k=d.length;
g<k;
g++){e.parentNode.insertBefore(d[g],e)
}}else{a.a.U(c,d)
}},yb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)
},rb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.yb(c,d)
},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild
},nextSibling:function(a){b(a)&&(a=e(a));
return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling
},Xb:b,lc:function(a){return(a=(f?a.text:a.nodeValue).match(h))?a[1]:null
},wb:function(d){if(k[a.a.B(d)]){var g=d.firstChild;
if(g){do{if(1===g.nodeType){var f;
f=g.firstChild;
var h=null;
if(f){do{if(h){h.push(f)
}else{if(b(f)){var q=e(f,!0);
q?f=q:h=[f]
}else{c(f)&&(h=[f])
}}}while(f=f.nextSibling)
}if(f=h){for(h=g.nextSibling,q=0;
q<f.length;
q++){h?d.insertBefore(f[q],h):d.appendChild(f[q])
}}}}while(g=g.nextSibling)
}}}}
})();
a.b("virtualElements",a.e);
a.b("virtualElements.allowedBindings",a.e.Q);
a.b("virtualElements.emptyNode",a.e.da);
a.b("virtualElements.insertAfter",a.e.rb);
a.b("virtualElements.prepend",a.e.yb);
a.b("virtualElements.setDomNodeChildren",a.e.U);
(function(){a.J=function(){this.Nb={}
};
a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind");
case 8:return a.e.Xb(b);
default:return !1
}},getBindings:function(a,c){var d=this.getBindingsString(a,c);
return d?this.parseBindingsString(d,c,a):null
},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);
return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null
},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.e.lc(b);
default:return null
}},parseBindingsString:function(b,c,d,e){try{var f=this.Nb,h=b+(e&&e.valueAccessors||""),g;
if(!(g=f[h])){var k,l="with($context){with($data||{}){return{"+a.g.qa(b,e)+"}}}";
k=new Function("$context","$element",l);
g=f[h]=k
}return g(c,d)
}catch(n){throw n.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+n.message,n
}}});
a.J.instance=new a.J
})();
a.b("bindingProvider",a.J);
(function(){function b(a){return function(){return a
}
}function c(a){return a()
}function d(b){return a.a.Oa(a.k.t(b),function(a,c){return function(){return b()[c]
}
})
}function e(a,b){return d(this.getBindings.bind(this,a,b))
}function f(b,c,d){var e,g=a.e.firstChild(c),k=a.J.instance,f=k.preprocessNode;
if(f){for(;
e=g;
){g=a.e.nextSibling(e),f.call(k,e)
}g=a.e.firstChild(c)
}for(;
e=g;
){g=a.e.nextSibling(e),h(b,e,d)
}}function h(b,c,d){var e=!0,g=1===c.nodeType;
g&&a.e.wb(c);
if(g&&d||a.J.instance.nodeHasBindings(c)){e=k(c,null,b,d).shouldBindDescendants
}e&&!n[a.a.B(c)]&&f(b,c,!g)
}function g(b){var c=[],d={},e=[];
a.a.A(b,function y(g){if(!d[g]){var k=a.getBindingHandler(g);
k&&(k.after&&(e.push(g),a.a.r(k.after,function(c){if(b[c]){if(-1!==a.a.l(e,c)){throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "))
}y(c)
}}),e.length--),c.push({key:g,pb:k}));
d[g]=!0
}});
return c
}function k(b,d,k,f){var h=a.a.f.get(b,r);
if(!d){if(h){throw Error("You cannot apply bindings multiple times to the same element.")
}a.a.f.set(b,r,!0)
}!h&&f&&a.Eb(b,k);
var l;
if(d&&"function"!==typeof d){l=d
}else{var n=a.J.instance,m=n.getBindingAccessors||e,x=a.h(function(){(l=d?d(k,b):m.call(n,b,k))&&k.D&&k.D();
return l
},null,{G:b});
l&&x.ga()||(x=null)
}var t;
if(l){var w=x?function(a){return function(){return c(x()[a])
}
}:function(a){return l[a]
},z=function(){return a.a.Oa(x?x():l,c)
};
z.get=function(a){return l[a]&&c(w(a))
};
z.has=function(a){return a in l
};
f=g(l);
a.a.r(f,function(c){var d=c.pb.init,e=c.pb.update,g=c.key;
if(8===b.nodeType&&!a.e.Q[g]){throw Error("The binding '"+g+"' cannot be used with virtual elements")
}try{"function"==typeof d&&a.k.t(function(){var a=d(b,w(g),z,k.$data,k);
if(a&&a.controlsDescendantBindings){if(t!==p){throw Error("Multiple bindings ("+t+" and "+g+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")
}t=g
}}),"function"==typeof e&&a.h(function(){e(b,w(g),z,k.$data,k)
},null,{G:b})
}catch(f){throw f.message='Unable to process binding "'+g+": "+l[g]+'"\nMessage: '+f.message,f
}})
}return{shouldBindDescendants:t===p}
}function l(b){return b&&b instanceof a.I?b:new a.I(b)
}a.d={};
var n={script:!0};
a.getBindingHandler=function(b){return a.d[b]
};
a.I=function(b,c,d,e){var g=this,k="function"==typeof b&&!a.v(b),f,h=a.h(function(){var f=k?b():b,l=a.a.c(f);
c?(c.D&&c.D(),a.a.extend(g,c),h&&(g.D=h)):(g.$parents=[],g.$root=l,g.ko=a);
g.$rawData=f;
g.$data=l;
d&&(g[d]=l);
e&&e(g,c,l);
return g.$data
},null,{Da:function(){return f&&!a.a.eb(f)
},G:!0});
h.ga()&&(g.D=h,h.equalityComparer=null,f=[],h.Jb=function(b){f.push(b);
a.a.u.ja(b,function(b){a.a.ma(f,b);
f.length||(h.F(),g.D=h=p)
})
})
};
a.I.prototype.createChildContext=function(b,c,d){return new a.I(b,this,c,function(a,b){a.$parentContext=b;
a.$parent=b.$data;
a.$parents=(b.$parents||[]).slice(0);
a.$parents.unshift(a.$parent);
d&&d(a)
})
};
a.I.prototype.extend=function(b){return new a.I(this.D||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;
a.a.extend(c,"function"==typeof b?b():b)
})
};
var r=a.a.f.L(),m=a.a.f.L();
a.Eb=function(b,c){if(2==arguments.length){a.a.f.set(b,m,c),c.D&&c.D.Jb(b)
}else{return a.a.f.get(b,m)
}};
a.xa=function(b,c,d){1===b.nodeType&&a.e.wb(b);
return k(b,c,l(d),!0)
};
a.Lb=function(c,e,g){g=l(g);
return a.xa(c,"function"===typeof e?d(e.bind(null,g,c)):a.a.Oa(e,b),g)
};
a.gb=function(a,b){1!==b.nodeType&&8!==b.nodeType||f(l(a),b,!0)
};
a.fb=function(a,b){!t&&A.jQuery&&(t=A.jQuery);
if(b&&1!==b.nodeType&&8!==b.nodeType){throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")
}b=b||A.document.body;
h(l(a),b,!0)
};
a.Ca=function(b){switch(b.nodeType){case 1:case 8:var c=a.Eb(b);
if(c){return c
}if(b.parentNode){return a.Ca(b.parentNode)
}}return p
};
a.Pb=function(b){return(b=a.Ca(b))?b.$data:p
};
a.b("bindingHandlers",a.d);
a.b("applyBindings",a.fb);
a.b("applyBindingsToDescendants",a.gb);
a.b("applyBindingAccessorsToNode",a.xa);
a.b("applyBindingsToNode",a.Lb);
a.b("contextFor",a.Ca);
a.b("dataFor",a.Pb)
})();
var L={"class":"className","for":"htmlFor"};
a.d.attr={update:function(b,c){var d=a.a.c(c())||{};
a.a.A(d,function(c,d){d=a.a.c(d);
var h=!1===d||null===d||d===p;
h&&b.removeAttribute(c);
8>=a.a.oa&&c in L?(c=L[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,d.toString());
"name"===c&&a.a.Cb(b,h?"":d.toString())
})
}};
(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value
}function f(){var g=b.checked,f=r?e():g;
if(!a.ca.pa()&&(!k||g)){var h=a.k.t(c);
l?n!==f?(g&&(a.a.Y(h,f,!0),a.a.Y(h,n,!1)),n=f):a.a.Y(h,f,g):a.g.va(h,d,"checked",f,!0)
}}function h(){var d=a.a.c(c());
b.checked=l?0<=a.a.l(d,e()):g?d:e()===d
}var g="checkbox"==b.type,k="radio"==b.type;
if(g||k){var l=g&&a.a.c(c()) instanceof Array,n=l?e():p,r=k||l;
k&&!b.name&&a.d.uniqueName.init(b,function(){return !0
});
a.ba(f,null,{G:b});
a.a.q(b,"click",f);
a.ba(h,null,{G:b})
}}};
a.g.W.checked=!0;
a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())
}}
})();
a.d.css={update:function(b,c){var d=a.a.c(c());
"object"==typeof d?a.a.A(d,function(c,d){d=a.a.c(d);
a.a.ua(b,c,d)
}):(d=String(d||""),a.a.ua(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ua(b,d,!0))
}};
a.d.enable={update:function(b,c){var d=a.a.c(c());
d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)
}};
a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return !a.a.c(c())
})
}};
a.d.event={init:function(b,c,d,e,f){var h=c()||{};
a.a.A(h,function(g){"string"==typeof g&&a.a.q(b,g,function(b){var h,n=c()[g];
if(n){try{var r=a.a.R(arguments);
e=f.$data;
r.unshift(e);
h=n.apply(e,r)
}finally{!0!==h&&(b.preventDefault?b.preventDefault():b.returnValue=!1)
}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())
}})
})
}};
a.d.foreach={vb:function(b){return function(){var c=b(),d=a.a.Sa(c);
if(!d||"number"==typeof d.length){return{foreach:c,templateEngine:a.K.Ja}
}a.a.c(c);
return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.K.Ja}
}
},init:function(b,c){return a.d.template.init(b,a.d.foreach.vb(c))
},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.vb(c),d,e,f)
}};
a.g.aa.foreach=!1;
a.e.Q.foreach=!0;
a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;
var k=b.ownerDocument;
if("activeElement" in k){var f;
try{f=k.activeElement
}catch(h){f=k.body
}e=f===b
}k=c();
a.g.va(k,d,"hasfocus",e,!0);
b.__ko_hasfocusLastValue=e;
b.__ko_hasfocusUpdating=!1
}var f=e.bind(null,!0),h=e.bind(null,!1);
a.a.q(b,"focus",f);
a.a.q(b,"focusin",f);
a.a.q(b,"blur",h);
a.a.q(b,"focusout",h)
},update:function(b,c){var d=!!a.a.c(c());
b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.k.t(a.a.ha,null,[b,d?"focusin":"focusout"]))
}};
a.g.W.hasfocus=!0;
a.d.hasFocus=a.d.hasfocus;
a.g.W.hasFocus=!0;
a.d.html={init:function(){return{controlsDescendantBindings:!0}
},update:function(b,c){a.a.Va(b,c())
}};
H("if");
H("ifnot",!1,!0);
H("with",!0,!1,function(a,c){return a.createChildContext(c)
});
var J={};
a.d.options={init:function(b){if("select"!==a.a.B(b)){throw Error("options binding applies only to SELECT elements")
}for(;
0<b.length;
){b.remove(0)
}return{controlsDescendantBindings:!0}
},update:function(b,c,d){function e(){return a.a.la(b.options,function(a){return a.selected
})
}function f(a,b,c){var d=typeof b;
return"function"==d?b(a):"string"==d?a[b]:c
}function h(c,d){if(r.length){var e=0<=a.a.l(r,a.i.p(d[0]));
a.a.Db(d[0],e);
m&&!e&&a.k.t(a.a.ha,null,[b,"change"])
}}var g=0!=b.length&&b.multiple?b.scrollTop:null,k=a.a.c(c()),l=d.get("optionsIncludeDestroyed");
c={};
var n,r;
r=b.multiple?a.a.ya(e(),a.i.p):0<=b.selectedIndex?[a.i.p(b.options[b.selectedIndex])]:[];
k&&("undefined"==typeof k.length&&(k=[k]),n=a.a.la(k,function(b){return l||b===p||null===b||!a.a.c(b._destroy)
}),d.has("optionsCaption")&&(k=a.a.c(d.get("optionsCaption")),null!==k&&k!==p&&n.unshift(J)));
var m=!1;
c.beforeRemove=function(a){b.removeChild(a)
};
k=h;
d.has("optionsAfterRender")&&(k=function(b,c){h(0,c);
a.k.t(d.get("optionsAfterRender"),null,[c[0],b!==J?b:p])
});
a.a.Ua(b,n,function(c,e,g){g.length&&(r=g[0].selected?[a.i.p(g[0])]:[],m=!0);
e=b.ownerDocument.createElement("option");
c===J?(a.a.Xa(e,d.get("optionsCaption")),a.i.X(e,p)):(g=f(c,d.get("optionsValue"),c),a.i.X(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Xa(e,c));
return[e]
},c,k);
a.k.t(function(){d.get("valueAllowUnset")&&d.has("value")?a.i.X(b,a.a.c(d.get("value")),!0):(b.multiple?r.length&&e().length<r.length:r.length&&0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex])!==r[0]:r.length||0<=b.selectedIndex)&&a.a.ha(b,"change")
});
a.a.Tb(b);
g&&20<Math.abs(g-b.scrollTop)&&(b.scrollTop=g)
}};
a.d.options.Pa=a.a.f.L();
a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.q(b,"change",function(){var e=c(),f=[];
a.a.r(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.i.p(b))
});
a.g.va(e,d,"selectedOptions",f)
})
},update:function(b,c){if("select"!=a.a.B(b)){throw Error("values binding applies only to SELECT elements")
}var d=a.a.c(c());
d&&"number"==typeof d.length&&a.a.r(b.getElementsByTagName("option"),function(b){var c=0<=a.a.l(d,a.i.p(b));
a.a.Db(b,c)
})
}};
a.g.W.selectedOptions=!0;
a.d.style={update:function(b,c){var d=a.a.c(c()||{});
a.a.A(d,function(c,d){d=a.a.c(d);
b.style[c]=d||""
})
}};
a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c()){throw Error("The value for a submit binding must be a function")
}a.a.q(b,"submit",function(a){var d,e=c();
try{d=e.call(f.$data,b)
}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
}})
}};
a.d.text={init:function(){return{controlsDescendantBindings:!0}
},update:function(b,c){a.a.Xa(b,c())
}};
a.e.Q.text=!0;
a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ob;
a.a.Cb(b,d)
}}};
a.d.uniqueName.Ob=0;
a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){g=!1;
var e=c(),f=a.i.p(b);
a.g.va(e,d,"value",f)
}var f=["change"],h=d.get("valueUpdate"),g=!1;
h&&("string"==typeof h&&(h=[h]),a.a.$(f,h),f=a.a.ib(f));
!a.a.oa||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.l(f,"propertychange")||(a.a.q(b,"propertychange",function(){g=!0
}),a.a.q(b,"focus",function(){g=!1
}),a.a.q(b,"blur",function(){g&&e()
}));
a.a.r(f,function(c){var d=e;
a.a.kc(c,"after")&&(d=function(){setTimeout(e,0)
},c=c.substring(5));
a.a.q(b,c,d)
})
},update:function(b,c,d){var e=a.a.c(c());
c=a.i.p(b);
if(e!==c){if("select"===a.a.B(b)){var f=d.get("valueAllowUnset");
d=function(){a.i.X(b,e,f)
};
d();
f||e===a.i.p(b)?setTimeout(d,0):a.k.t(a.a.ha,null,[b,"change"])
}else{a.i.X(b,e)
}}}};
a.g.W.value=!0;
a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;
d&&!e?b.style.display="":!d&&e&&(b.style.display="none")
}};
(function(b){a.d[b]={init:function(c,d,e,f,h){return a.d.event.init.call(this,c,function(){var a={};
a[b]=d();
return a
},e,f,h)
}}
})("click");
a.C=function(){};
a.C.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource")
};
a.C.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock")
};
a.C.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;
var d=c.getElementById(b);
if(!d){throw Error("Cannot find template with ID "+b)
}return new a.n.j(d)
}if(1==b.nodeType||8==b.nodeType){return new a.n.Z(b)
}throw Error("Unknown template type: "+b)
};
a.C.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);
return this.renderTemplateSource(a,c,d)
};
a.C.prototype.isTemplateRewritten=function(a,c){return !1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")
};
a.C.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);
c=c(a.text());
a.text(c);
a.data("isRewritten",!0)
};
a.b("templateEngine",a.C);
a.Za=function(){function b(b,c,d,g){b=a.g.Ra(b);
for(var k=a.g.aa,l=0;
l<b.length;
l++){var n=b[l].key;
if(k.hasOwnProperty(n)){var r=k[n];
if("function"===typeof r){if(n=r(b[l].value)){throw Error(n)
}}else{if(!r){throw Error("This template engine does not support the '"+n+"' binding within its templates")
}}}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.qa(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";
return g.createJavaScriptEvaluatorBlock(d)+c
}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
return{Ub:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Za.dc(b,c)
},d)
},dc:function(a,f){return a.replace(c,function(a,c,d,e,n){return b(n,c,d,f)
}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)
})
},Mb:function(b,c){return a.w.Na(function(d,g){var k=d.nextSibling;
k&&k.nodeName.toLowerCase()===c&&a.xa(k,b,g)
})
}}
}();
a.b("__tr_ambtns",a.Za.Mb);
(function(){a.n={};
a.n.j=function(a){this.j=a
};
a.n.j.prototype.text=function(){var b=a.a.B(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";
if(0==arguments.length){return this.j[b]
}var c=arguments[0];
"innerHTML"===b?a.a.Va(this.j,c):this.j[b]=c
};
var b=a.a.f.L()+"_";
a.n.j.prototype.data=function(c){if(1===arguments.length){return a.a.f.get(this.j,b+c)
}a.a.f.set(this.j,b+c,arguments[1])
};
var c=a.a.f.L();
a.n.Z=function(a){this.j=a
};
a.n.Z.prototype=new a.n.j;
a.n.Z.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};
b.$a===p&&b.Ba&&(b.$a=b.Ba.innerHTML);
return b.$a
}a.a.f.set(this.j,c,{$a:arguments[0]})
};
a.n.j.prototype.nodes=function(){if(0==arguments.length){return(a.a.f.get(this.j,c)||{}).Ba
}a.a.f.set(this.j,c,{Ba:arguments[0]})
};
a.b("templateSources",a.n);
a.b("templateSources.domElement",a.n.j);
a.b("templateSources.anonymousTemplate",a.n.Z)
})();
(function(){function b(b,c,d){var e;
for(c=a.e.nextSibling(c);
b&&(e=b)!==c;
){b=a.e.nextSibling(e),d(e,b)
}}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,m=a.J.instance,q=m.preprocessNode;
if(q){b(e,f,function(a,b){var c=a.previousSibling,d=q.call(m,a);
d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))
});
c.length=0;
if(!e){return
}e===f?c.push(e):(c.push(e,f),a.a.ea(c,h))
}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.fb(d,b)
});
b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.w.Ib(b,[d])
});
a.a.ea(c,h)
}}function d(a){return a.nodeType?a:0<a.length?a[0]:null
}function e(b,e,h,n,r){r=r||{};
var m=b&&d(b),m=m&&m.ownerDocument,q=r.templateEngine||f;
a.Za.Ub(h,q,m);
h=q.renderTemplate(h,n,r,m);
if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType){throw Error("Template engine must return an array of DOM nodes")
}m=!1;
switch(e){case"replaceChildren":a.e.U(b,h);
m=!0;
break;
case"replaceNode":a.a.Bb(b,h);
m=!0;
break;
case"ignoreTargetNode":break;
default:throw Error("Unknown renderMode: "+e)
}m&&(c(h,n),r.afterRender&&a.k.t(r.afterRender,null,[h,n.$data]));
return h
}var f;
a.Wa=function(b){if(b!=p&&!(b instanceof a.C)){throw Error("templateEngine must inherit from ko.templateEngine")
}f=b
};
a.Ta=function(b,c,h,n,r){h=h||{};
if((h.templateEngine||f)==p){throw Error("Set a template engine before calling renderTemplate")
}r=r||"replaceChildren";
if(n){var m=d(n);
return a.h(function(){var f=c&&c instanceof a.I?c:new a.I(a.a.c(c)),p=a.v(b)?b():"function"==typeof b?b(f.$data,f):b,f=e(n,r,p,f,h);
"replaceNode"==r&&(n=f,m=d(n))
},null,{Da:function(){return !m||!a.a.Ea(m)
},G:m&&"replaceNode"==r?m.parentNode:m})
}return a.w.Na(function(d){a.Ta(b,c,h,d,"replaceNode")
})
};
a.jc=function(b,d,f,h,r){function m(a,b){c(b,s);
f.afterRender&&f.afterRender(b,a)
}function q(a,c){s=r.createChildContext(a,f.as,function(a){a.$index=c
});
var d="function"==typeof b?b(a,s):b;
return e(null,"ignoreTargetNode",d,s,f)
}var s;
return a.h(function(){var b=a.a.c(d)||[];
"undefined"==typeof b.length&&(b=[b]);
b=a.a.la(b,function(b){return f.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)
});
a.k.t(a.a.Ua,null,[h,b,q,f,m])
},null,{G:h})
};
var h=a.a.f.L();
a.d.template={init:function(b,c){var d=a.a.c(c());
"string"==typeof d||d.name?a.e.da(b):(d=a.e.childNodes(b),d=a.a.ec(d),(new a.n.Z(b)).nodes(d));
return{controlsDescendantBindings:!0}
},update:function(b,c,d,e,f){var m=c(),q;
c=a.a.c(m);
d=!0;
e=null;
"string"==typeof c?c={}:(m=c.name,"if" in c&&(d=a.a.c(c["if"])),d&&"ifnot" in c&&(d=!a.a.c(c.ifnot)),q=a.a.c(c.data));
"foreach" in c?e=a.jc(m||b,d&&c.foreach||[],c,b,f):d?(f="data" in c?f.createChildContext(q,c.as):f,e=a.Ta(m||b,f,c,b)):a.e.da(b);
f=e;
(q=a.a.f.get(b,h))&&"function"==typeof q.F&&q.F();
a.a.f.set(b,h,f&&f.ga()?f:p)
}};
a.g.aa.template=function(b){b=a.g.Ra(b);
return 1==b.length&&b[0].unknown||a.g.bc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"
};
a.e.Q.template=!0
})();
a.b("setTemplateEngine",a.Wa);
a.b("renderTemplate",a.Ta);
a.a.nb=function(a,c,d){if(a.length&&c.length){var e,f,h,g,k;
for(e=f=0;
(!d||e<d)&&(g=a[f]);
++f){for(h=0;
k=c[h];
++h){if(g.value===k.value){g.moved=k.index;
k.moved=g.index;
c.splice(h,1);
e=h=0;
break
}}e+=h
}}};
a.a.Aa=function(){function b(b,d,e,f,h){var g=Math.min,k=Math.max,l=[],n,p=b.length,m,q=d.length,s=q-p||1,t=p+q+1,u,w,y;
for(n=0;
n<=p;
n++){for(w=u,l.push(u=[]),y=g(q,n+s),m=k(0,n-1);
m<=y;
m++){u[m]=m?n?b[n-1]===d[m-1]?w[m-1]:g(w[m]||t,u[m-1]||t)+1:m+1:n+1
}}g=[];
k=[];
s=[];
n=p;
for(m=q;
n||m;
){q=l[n][m]-1,m&&q===l[n][m-1]?k.push(g[g.length]={status:e,value:d[--m],index:m}):n&&q===l[n-1][m]?s.push(g[g.length]={status:f,value:b[--n],index:n}):(--m,--n,h.sparse||g.push({status:"retained",value:d[m]}))
}a.a.nb(k,s,10*p);
return g.reverse()
}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};
a=a||[];
d=d||[];
return a.length<=d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)
}
}();
a.b("utils.compareArrays",a.a.Aa);
(function(){function b(b,c,f,h,g){var k=[],l=a.h(function(){var l=c(f,g,a.a.ea(k,b))||[];
0<k.length&&(a.a.Bb(k,l),h&&a.k.t(h,null,[f,l,g]));
k.length=0;
a.a.$(k,l)
},null,{G:b,Da:function(){return !a.a.eb(k)
}});
return{S:k,h:l.ga()?l:p}
}var c=a.a.f.L();
a.a.Ua=function(d,e,f,h,g){function k(b,c){v=r[c];
u!==c&&(z[b]=v);
v.Ia(u++);
a.a.ea(v.S,d);
s.push(v);
y.push(v)
}function l(b,c){if(b){for(var d=0,e=c.length;
d<e;
d++){c[d]&&a.a.r(c[d].S,function(a){b(a,d,c[d].ka)
})
}}}e=e||[];
h=h||{};
var n=a.a.f.get(d,c)===p,r=a.a.f.get(d,c)||[],m=a.a.ya(r,function(a){return a.ka
}),q=a.a.Aa(m,e,h.dontLimitMoves),s=[],t=0,u=0,w=[],y=[];
e=[];
for(var z=[],m=[],v,x=0,A,C;
A=q[x];
x++){switch(C=A.moved,A.status){case"deleted":C===p&&(v=r[t],v.h&&v.h.F(),w.push.apply(w,a.a.ea(v.S,d)),h.beforeRemove&&(e[x]=v,y.push(v)));
t++;
break;
case"retained":k(x,t++);
break;
case"added":C!==p?k(x,C):(v={ka:A.value,Ia:a.m(u++)},s.push(v),y.push(v),n||(m[x]=v))
}}l(h.beforeMove,z);
a.a.r(w,h.beforeRemove?a.M:a.removeNode);
for(var x=0,n=a.e.firstChild(d),E;
v=y[x];
x++){v.S||a.a.extend(v,b(d,f,v.ka,g,v.Ia));
for(t=0;
q=v.S[t];
n=q.nextSibling,E=q,t++){q!==n&&a.e.rb(d,q,E)
}!v.Zb&&g&&(g(v.ka,v.S,v.Ia),v.Zb=!0)
}l(h.beforeRemove,e);
l(h.afterMove,z);
l(h.afterAdd,m);
a.a.f.set(d,c,s)
}
})();
a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ua);
a.K=function(){this.allowTemplateRewriting=!1
};
a.K.prototype=new a.C;
a.K.prototype.renderTemplateSource=function(b){var c=(9>a.a.oa?0:b.nodes)?b.nodes():null;
if(c){return a.a.R(c.cloneNode(!0).childNodes)
}b=b.text();
return a.a.Qa(b)
};
a.K.Ja=new a.K;
a.Wa(a.K.Ja);
a.b("nativeTemplateEngine",a.K);
(function(){a.La=function(){var a=this.ac=function(){if(!t||!t.tmpl){return 0
}try{if(0<=t.tmpl.tag.tmpl.open.toString().indexOf("__")){return 2
}}catch(a){}return 1
}();
this.renderTemplateSource=function(b,e,f){f=f||{};
if(2>a){throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
}var h=b.data("precompiled");
h||(h=b.text()||"",h=t.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));
b=[e.$data];
e=t.extend({koBindingContext:e},f.templateOptions);
e=t.tmpl(h,b,e);
e.appendTo(w.createElement("div"));
t.fragments={};
return e
};
this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"
};
this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")
};
0<a&&(t.tmpl.tag.ko_code={open:"__.push($1 || '');"},t.tmpl.tag.ko_with={open:"with($1) {",close:"} "})
};
a.La.prototype=new a.C;
var b=new a.La;
0<b.ac&&a.Wa(b);
a.b("jqueryTmplTemplateEngine",a.La)
})()
})
})()
})();
var StringInterpolatingBindingProvider=function(){this.constructor=StringInterpolatingBindingProvider;
var a=/{{([\s\S]+?)}}/g;
this.preprocessNode=function(e){if(e.nodeType===3&&e.nodeValue){var c=b(e.nodeValue,a,function(f){return[document.createComment("ko text:"+f),document.createComment("/ko")]
});
if(c){for(var d=0;
d<c.length;
d++){e.parentNode.insertBefore(c[d],e)
}e.parentNode.removeChild(e);
return c
}}};
function b(h,c,j){var e=c.lastIndex=0,i=null,d;
while(d=c.exec(h)){var f=h.substring(e,d.index);
e=c.lastIndex;
i=i||[];
if(f){i.push(document.createTextNode(f))
}i.push.apply(i,j(d[1]))
}var g=h.substring(e);
if(i&&g){i.push(document.createTextNode(g))
}return i
}};
StringInterpolatingBindingProvider.prototype=ko.bindingProvider.instance;
(function(){var w=this;
var k=w._;
var D={};
var C=Array.prototype,f=Object.prototype,r=Function.prototype;
var H=C.push,o=C.slice,y=C.concat,d=f.toString,j=f.hasOwnProperty;
var L=C.forEach,q=C.map,E=C.reduce,c=C.reduceRight,b=C.filter,B=C.every,p=C.some,n=C.indexOf,l=C.lastIndexOf,u=Array.isArray,e=Object.keys,F=r.bind;
var M=function(N){if(N instanceof M){return N
}if(!(this instanceof M)){return new M(N)
}this._wrapped=N
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=M
}exports._=M
}else{w._=M
}M.VERSION="1.6.0";
var I=M.each=M.forEach=function(S,P,O){if(S==null){return S
}if(L&&S.forEach===L){S.forEach(P,O)
}else{if(S.length===+S.length){for(var N=0,R=S.length;
N<R;
N++){if(P.call(O,S[N],N,S)===D){return
}}}else{var Q=M.keys(S);
for(var N=0,R=Q.length;
N<R;
N++){if(P.call(O,S[Q[N]],Q[N],S)===D){return
}}}}return S
};
M.map=M.collect=function(Q,P,O){var N=[];
if(Q==null){return N
}if(q&&Q.map===q){return Q.map(P,O)
}I(Q,function(T,R,S){N.push(P.call(O,T,R,S))
});
return N
};
var g="Reduce of empty array with no initial value";
M.reduce=M.foldl=M.inject=function(R,Q,N,P){var O=arguments.length>2;
if(R==null){R=[]
}if(E&&R.reduce===E){if(P){Q=M.bind(Q,P)
}return O?R.reduce(Q,N):R.reduce(Q)
}I(R,function(U,S,T){if(!O){N=U;
O=true
}else{N=Q.call(P,N,U,S,T)
}});
if(!O){throw new TypeError(g)
}return N
};
M.reduceRight=M.foldr=function(T,Q,N,P){var O=arguments.length>2;
if(T==null){T=[]
}if(c&&T.reduceRight===c){if(P){Q=M.bind(Q,P)
}return O?T.reduceRight(Q,N):T.reduceRight(Q)
}var S=T.length;
if(S!==+S){var R=M.keys(T);
S=R.length
}I(T,function(W,U,V){U=R?R[--S]:--S;
if(!O){N=T[U];
O=true
}else{N=Q.call(P,N,T[U],U,V)
}});
if(!O){throw new TypeError(g)
}return N
};
M.find=M.detect=function(Q,O,P){var N;
A(Q,function(T,R,S){if(O.call(P,T,R,S)){N=T;
return true
}});
return N
};
M.filter=M.select=function(Q,N,P){var O=[];
if(Q==null){return O
}if(b&&Q.filter===b){return Q.filter(N,P)
}I(Q,function(T,R,S){if(N.call(P,T,R,S)){O.push(T)
}});
return O
};
M.reject=function(P,N,O){return M.filter(P,function(S,Q,R){return !N.call(O,S,Q,R)
},O)
};
M.every=M.all=function(Q,O,P){O||(O=M.identity);
var N=true;
if(Q==null){return N
}if(B&&Q.every===B){return Q.every(O,P)
}I(Q,function(T,R,S){if(!(N=N&&O.call(P,T,R,S))){return D
}});
return !!N
};
var A=M.some=M.any=function(Q,O,P){O||(O=M.identity);
var N=false;
if(Q==null){return N
}if(p&&Q.some===p){return Q.some(O,P)
}I(Q,function(T,R,S){if(N||(N=O.call(P,T,R,S))){return D
}});
return !!N
};
M.contains=M.include=function(O,N){if(O==null){return false
}if(n&&O.indexOf===n){return O.indexOf(N)!=-1
}return A(O,function(P){return P===N
})
};
M.invoke=function(P,Q){var N=o.call(arguments,2);
var O=M.isFunction(Q);
return M.map(P,function(R){return(O?Q:R[Q]).apply(R,N)
})
};
M.pluck=function(O,N){return M.map(O,M.property(N))
};
M.where=function(O,N){return M.filter(O,M.matches(N))
};
M.findWhere=function(O,N){return M.find(O,M.matches(N))
};
M.max=function(R,P,O){if(!P&&M.isArray(R)&&R[0]===+R[0]&&R.length<65535){return Math.max.apply(Math,R)
}var N=-Infinity,Q=-Infinity;
I(R,function(V,S,U){var T=P?P.call(O,V,S,U):V;
if(T>Q){N=V;
Q=T
}});
return N
};
M.min=function(R,P,O){if(!P&&M.isArray(R)&&R[0]===+R[0]&&R.length<65535){return Math.min.apply(Math,R)
}var N=Infinity,Q=Infinity;
I(R,function(V,S,U){var T=P?P.call(O,V,S,U):V;
if(T<Q){N=V;
Q=T
}});
return N
};
M.shuffle=function(Q){var P;
var O=0;
var N=[];
I(Q,function(R){P=M.random(O++);
N[O-1]=N[P];
N[P]=R
});
return N
};
M.sample=function(O,P,N){if(P==null||N){if(O.length!==+O.length){O=M.values(O)
}return O[M.random(O.length-1)]
}return M.shuffle(O).slice(0,Math.max(0,P))
};
var a=function(N){if(N==null){return M.identity
}if(M.isFunction(N)){return N
}return M.property(N)
};
M.sortBy=function(P,O,N){O=a(O);
return M.pluck(M.map(P,function(S,Q,R){return{value:S,index:Q,criteria:O.call(N,S,Q,R)}
}).sort(function(T,S){var R=T.criteria;
var Q=S.criteria;
if(R!==Q){if(R>Q||R===void 0){return 1
}if(R<Q||Q===void 0){return -1
}}return T.index-S.index
}),"value")
};
var t=function(N){return function(R,Q,P){var O={};
Q=a(Q);
I(R,function(U,S){var T=Q.call(P,U,S,R);
N(O,T,U)
});
return O
}
};
M.groupBy=t(function(N,O,P){M.has(N,O)?N[O].push(P):N[O]=[P]
});
M.indexBy=t(function(N,O,P){N[O]=P
});
M.countBy=t(function(N,O){M.has(N,O)?N[O]++:N[O]=1
});
M.sortedIndex=function(U,T,Q,P){Q=a(Q);
var S=Q.call(P,T);
var N=0,R=U.length;
while(N<R){var O=(N+R)>>>1;
Q.call(P,U[O])<S?N=O+1:R=O
}return N
};
M.toArray=function(N){if(!N){return[]
}if(M.isArray(N)){return o.call(N)
}if(N.length===+N.length){return M.map(N,M.identity)
}return M.values(N)
};
M.size=function(N){if(N==null){return 0
}return(N.length===+N.length)?N.length:M.keys(N).length
};
M.first=M.head=M.take=function(P,O,N){if(P==null){return void 0
}if((O==null)||N){return P[0]
}if(O<0){return[]
}return o.call(P,0,O)
};
M.initial=function(P,O,N){return o.call(P,0,P.length-((O==null)||N?1:O))
};
M.last=function(P,O,N){if(P==null){return void 0
}if((O==null)||N){return P[P.length-1]
}return o.call(P,Math.max(P.length-O,0))
};
M.rest=M.tail=M.drop=function(P,O,N){return o.call(P,(O==null)||N?1:O)
};
M.compact=function(N){return M.filter(N,M.identity)
};
var x=function(O,P,N){if(P&&M.every(O,M.isArray)){return y.apply(N,O)
}I(O,function(Q){if(M.isArray(Q)||M.isArguments(Q)){P?H.apply(N,Q):x(Q,P,N)
}else{N.push(Q)
}});
return N
};
M.flatten=function(O,N){return x(O,N,[])
};
M.without=function(N){return M.difference(N,o.call(arguments,1))
};
M.partition=function(Q,N){var P=[],O=[];
I(Q,function(R){(N(R)?P:O).push(R)
});
return[P,O]
};
M.uniq=M.unique=function(T,S,R,Q){if(M.isFunction(S)){Q=R;
R=S;
S=false
}var O=R?M.map(T,R,Q):T;
var P=[];
var N=[];
I(O,function(V,U){if(S?(!U||N[N.length-1]!==V):!M.contains(N,V)){N.push(V);
P.push(T[U])
}});
return P
};
M.union=function(){return M.uniq(M.flatten(arguments,true))
};
M.intersection=function(O){var N=o.call(arguments,1);
return M.filter(M.uniq(O),function(P){return M.every(N,function(Q){return M.contains(Q,P)
})
})
};
M.difference=function(O){var N=y.apply(C,o.call(arguments,1));
return M.filter(O,function(P){return !M.contains(N,P)
})
};
M.zip=function(){var P=M.max(M.pluck(arguments,"length").concat(0));
var O=new Array(P);
for(var N=0;
N<P;
N++){O[N]=M.pluck(arguments,""+N)
}return O
};
M.object=function(R,O){if(R==null){return{}
}var N={};
for(var P=0,Q=R.length;
P<Q;
P++){if(O){N[R[P]]=O[P]
}else{N[R[P][0]]=R[P][1]
}}return N
};
M.indexOf=function(R,P,Q){if(R==null){return -1
}var N=0,O=R.length;
if(Q){if(typeof Q=="number"){N=(Q<0?Math.max(0,O+Q):Q)
}else{N=M.sortedIndex(R,P);
return R[N]===P?N:-1
}}if(n&&R.indexOf===n){return R.indexOf(P,Q)
}for(;
N<O;
N++){if(R[N]===P){return N
}}return -1
};
M.lastIndexOf=function(R,P,Q){if(R==null){return -1
}var N=Q!=null;
if(l&&R.lastIndexOf===l){return N?R.lastIndexOf(P,Q):R.lastIndexOf(P)
}var O=(N?Q:R.length);
while(O--){if(R[O]===P){return O
}}return -1
};
M.range=function(S,P,R){if(arguments.length<=1){P=S||0;
S=0
}R=arguments[2]||1;
var Q=Math.max(Math.ceil((P-S)/R),0);
var N=0;
var O=new Array(Q);
while(N<Q){O[N++]=S;
S+=R
}return O
};
var G=function(){};
M.bind=function(Q,O){var N,P;
if(F&&Q.bind===F){return F.apply(Q,o.call(arguments,1))
}if(!M.isFunction(Q)){throw new TypeError
}N=o.call(arguments,2);
return P=function(){if(!(this instanceof P)){return Q.apply(O,N.concat(o.call(arguments)))
}G.prototype=Q.prototype;
var S=new G;
G.prototype=null;
var R=Q.apply(S,N.concat(o.call(arguments)));
if(Object(R)===R){return R
}return S
}
};
M.partial=function(N){var O=o.call(arguments,1);
return function(){var P=0;
var Q=O.slice();
for(var R=0,S=Q.length;
R<S;
R++){if(Q[R]===M){Q[R]=arguments[P++]
}}while(P<arguments.length){Q.push(arguments[P++])
}return N.apply(this,Q)
}
};
M.bindAll=function(O){var N=o.call(arguments,1);
if(N.length===0){throw new Error("bindAll must be passed function names")
}I(N,function(P){O[P]=M.bind(O[P],O)
});
return O
};
M.memoize=function(P,O){var N={};
O||(O=M.identity);
return function(){var Q=O.apply(this,arguments);
return M.has(N,Q)?N[Q]:(N[Q]=P.apply(this,arguments))
}
};
M.delay=function(O,P){var N=o.call(arguments,2);
return setTimeout(function(){return O.apply(null,N)
},P)
};
M.defer=function(N){return M.delay.apply(M,[N,1].concat(o.call(arguments,1)))
};
M.throttle=function(O,Q,U){var N,S,V;
var T=null;
var R=0;
U||(U={});
var P=function(){R=U.leading===false?0:M.now();
T=null;
V=O.apply(N,S);
N=S=null
};
return function(){var W=M.now();
if(!R&&U.leading===false){R=W
}var X=Q-(W-R);
N=this;
S=arguments;
if(X<=0){clearTimeout(T);
T=null;
R=W;
V=O.apply(N,S);
N=S=null
}else{if(!T&&U.trailing!==false){T=setTimeout(P,X)
}}return V
}
};
M.debounce=function(P,R,O){var U,T,N,S,V;
var Q=function(){var W=M.now()-S;
if(W<R){U=setTimeout(Q,R-W)
}else{U=null;
if(!O){V=P.apply(N,T);
N=T=null
}}};
return function(){N=this;
T=arguments;
S=M.now();
var W=O&&!U;
if(!U){U=setTimeout(Q,R)
}if(W){V=P.apply(N,T);
N=T=null
}return V
}
};
M.once=function(P){var N=false,O;
return function(){if(N){return O
}N=true;
O=P.apply(this,arguments);
P=null;
return O
}
};
M.wrap=function(N,O){return M.partial(O,N)
};
M.compose=function(){var N=arguments;
return function(){var O=arguments;
for(var P=N.length-1;
P>=0;
P--){O=[N[P].apply(this,O)]
}return O[0]
}
};
M.after=function(O,N){return function(){if(--O<1){return N.apply(this,arguments)
}}
};
M.keys=function(P){if(!M.isObject(P)){return[]
}if(e){return e(P)
}var O=[];
for(var N in P){if(M.has(P,N)){O.push(N)
}}return O
};
M.values=function(R){var Q=M.keys(R);
var P=Q.length;
var N=new Array(P);
for(var O=0;
O<P;
O++){N[O]=R[Q[O]]
}return N
};
M.pairs=function(R){var P=M.keys(R);
var O=P.length;
var Q=new Array(O);
for(var N=0;
N<O;
N++){Q[N]=[P[N],R[P[N]]]
}return Q
};
M.invert=function(R){var N={};
var Q=M.keys(R);
for(var O=0,P=Q.length;
O<P;
O++){N[R[Q[O]]]=Q[O]
}return N
};
M.functions=M.methods=function(P){var O=[];
for(var N in P){if(M.isFunction(P[N])){O.push(N)
}}return O.sort()
};
M.extend=function(N){I(o.call(arguments,1),function(O){if(O){for(var P in O){N[P]=O[P]
}}});
return N
};
M.pick=function(O){var P={};
var N=y.apply(C,o.call(arguments,1));
I(N,function(Q){if(Q in O){P[Q]=O[Q]
}});
return P
};
M.omit=function(P){var Q={};
var O=y.apply(C,o.call(arguments,1));
for(var N in P){if(!M.contains(O,N)){Q[N]=P[N]
}}return Q
};
M.defaults=function(N){I(o.call(arguments,1),function(O){if(O){for(var P in O){if(N[P]===void 0){N[P]=O[P]
}}}});
return N
};
M.clone=function(N){if(!M.isObject(N)){return N
}return M.isArray(N)?N.slice():M.extend({},N)
};
M.tap=function(O,N){N(O);
return O
};
var J=function(U,T,O,P){if(U===T){return U!==0||1/U==1/T
}if(U==null||T==null){return U===T
}if(U instanceof M){U=U._wrapped
}if(T instanceof M){T=T._wrapped
}var R=d.call(U);
if(R!=d.call(T)){return false
}switch(R){case"[object String]":return U==String(T);
case"[object Number]":return U!=+U?T!=+T:(U==0?1/U==1/T:U==+T);
case"[object Date]":case"[object Boolean]":return +U==+T;
case"[object RegExp]":return U.source==T.source&&U.global==T.global&&U.multiline==T.multiline&&U.ignoreCase==T.ignoreCase
}if(typeof U!="object"||typeof T!="object"){return false
}var N=O.length;
while(N--){if(O[N]==U){return P[N]==T
}}var S=U.constructor,Q=T.constructor;
if(S!==Q&&!(M.isFunction(S)&&(S instanceof S)&&M.isFunction(Q)&&(Q instanceof Q))&&("constructor" in U&&"constructor" in T)){return false
}O.push(U);
P.push(T);
var X=0,W=true;
if(R=="[object Array]"){X=U.length;
W=X==T.length;
if(W){while(X--){if(!(W=J(U[X],T[X],O,P))){break
}}}}else{for(var V in U){if(M.has(U,V)){X++;
if(!(W=M.has(T,V)&&J(U[V],T[V],O,P))){break
}}}if(W){for(V in T){if(M.has(T,V)&&!(X--)){break
}}W=!X
}}O.pop();
P.pop();
return W
};
M.isEqual=function(O,N){return J(O,N,[],[])
};
M.isEmpty=function(O){if(O==null){return true
}if(M.isArray(O)||M.isString(O)){return O.length===0
}for(var N in O){if(M.has(O,N)){return false
}}return true
};
M.isElement=function(N){return !!(N&&N.nodeType===1)
};
M.isArray=u||function(N){return d.call(N)=="[object Array]"
};
M.isObject=function(N){return N===Object(N)
};
I(["Arguments","Function","String","Number","Date","RegExp"],function(N){M["is"+N]=function(O){return d.call(O)=="[object "+N+"]"
}
});
if(!M.isArguments(arguments)){M.isArguments=function(N){return !!(N&&M.has(N,"callee"))
}
}if(typeof(/./)!=="function"){M.isFunction=function(N){return typeof N==="function"
}
}M.isFinite=function(N){return isFinite(N)&&!isNaN(parseFloat(N))
};
M.isNaN=function(N){return M.isNumber(N)&&N!=+N
};
M.isBoolean=function(N){return N===true||N===false||d.call(N)=="[object Boolean]"
};
M.isNull=function(N){return N===null
};
M.isUndefined=function(N){return N===void 0
};
M.has=function(O,N){return j.call(O,N)
};
M.noConflict=function(){w._=k;
return this
};
M.identity=function(N){return N
};
M.constant=function(N){return function(){return N
}
};
M.property=function(N){return function(O){return O[N]
}
};
M.matches=function(N){return function(P){if(P===N){return true
}for(var O in N){if(N[O]!==P[O]){return false
}}return true
}
};
M.times=function(R,Q,P){var N=Array(Math.max(0,R));
for(var O=0;
O<R;
O++){N[O]=Q.call(P,O)
}return N
};
M.random=function(O,N){if(N==null){N=O;
O=0
}return O+Math.floor(Math.random()*(N-O+1))
};
M.now=Date.now||function(){return new Date().getTime()
};
var m={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
m.unescape=M.invert(m.escape);
var K={escape:new RegExp("["+M.keys(m.escape).join("")+"]","g"),unescape:new RegExp("("+M.keys(m.unescape).join("|")+")","g")};
M.each(["escape","unescape"],function(N){M[N]=function(O){if(O==null){return""
}return(""+O).replace(K[N],function(P){return m[N][P]
})
}
});
M.result=function(N,P){if(N==null){return void 0
}var O=N[P];
return M.isFunction(O)?O.call(N):O
};
M.mixin=function(N){I(M.functions(N),function(O){var P=M[O]=N[O];
M.prototype[O]=function(){var Q=[this._wrapped];
H.apply(Q,arguments);
return s.call(this,P.apply(M,Q))
}
})
};
var z=0;
M.uniqueId=function(N){var O=++z+"";
return N?N+O:O
};
M.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var v=/(.)^/;
var h={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var i=/\\|'|\r|\n|\t|\u2028|\u2029/g;
M.template=function(V,Q,P){var O;
P=M.defaults({},P,M.templateSettings);
var R=new RegExp([(P.escape||v).source,(P.interpolate||v).source,(P.evaluate||v).source].join("|")+"|$","g");
var S=0;
var N="__p+='";
V.replace(R,function(X,Y,W,aa,Z){N+=V.slice(S,Z).replace(i,function(ab){return"\\"+h[ab]
});
if(Y){N+="'+\n((__t=("+Y+"))==null?'':_.escape(__t))+\n'"
}if(W){N+="'+\n((__t=("+W+"))==null?'':__t)+\n'"
}if(aa){N+="';\n"+aa+"\n__p+='"
}S=Z+X.length;
return X
});
N+="';\n";
if(!P.variable){N="with(obj||{}){\n"+N+"}\n"
}N="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+N+"return __p;\n";
try{O=new Function(P.variable||"obj","_",N)
}catch(T){T.source=N;
throw T
}if(Q){return O(Q,M)
}var U=function(W){return O.call(this,W,M)
};
U.source="function("+(P.variable||"obj")+"){\n"+N+"}";
return U
};
M.chain=function(N){return M(N).chain()
};
var s=function(N){return this._chain?M(N).chain():N
};
M.mixin(M);
I(["pop","push","reverse","shift","sort","splice","unshift"],function(N){var O=C[N];
M.prototype[N]=function(){var P=this._wrapped;
O.apply(P,arguments);
if((N=="shift"||N=="splice")&&P.length===0){delete P[0]
}return s.call(this,P)
}
});
I(["concat","join","slice"],function(N){var O=C[N];
M.prototype[N]=function(){return s.call(this,O.apply(this._wrapped,arguments))
}
});
M.extend(M.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}});
if(typeof define==="function"&&define.amd){define("underscore",[],function(){return M
})
}}).call(this);
/*!
 * Amplify Core 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(b,d){var c=[].slice,e={};
var a=b.amplify={publish:function(h){if(typeof h!=="string"){throw new Error("You must provide a valid topic to publish.")
}var g=c.call(arguments,1),m,l,k,j=0,f;
if(!e[h]){return true
}m=e[h].slice();
for(k=m.length;
j<k;
j++){l=m[j];
f=l.callback.apply(l.context,g);
if(f===false){break
}}return f!==false
},subscribe:function(k,g,p,n){if(typeof k!=="string"){throw new Error("You must provide a valid topic to create a subscription.")
}if(arguments.length===3&&typeof p==="number"){n=p;
p=g;
g=null
}if(arguments.length===2){p=g;
g=null
}n=n||10;
var h=0,f=k.split(/\s/),o=f.length,m;
for(;
h<o;
h++){k=f[h];
m=false;
if(!e[k]){e[k]=[]
}var j=e[k].length-1,l={callback:p,context:g,priority:n};
for(;
j>=0;
j--){if(e[k][j].priority<=n){e[k].splice(j+1,0,l);
m=true;
break
}}if(!m){e[k].unshift(l)
}}return p
},unsubscribe:function(f,h,k){if(typeof f!=="string"){throw new Error("You must provide a valid topic to remove a subscription.")
}if(arguments.length===2){k=h;
h=null
}if(!e[f]){return
}var j=e[f].length,g=0;
for(;
g<j;
g++){if(e[f][g].callback===k){if(!h||e[f][g].context===h){e[f].splice(g,1);
g--;
j--
}}}}}
}(this));
/*!
 * Amplify Store - Persistent Client-Side Storage 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(a,g){var b=a.store=function(i,k,e){var j=b.type;
if(e&&e.type&&e.type in b.types){j=e.type
}return b.types[j](i,k,e||{})
};
b.types={};
b.type=null;
b.addType=function(e,i){if(!b.type){b.type=e
}b.types[e]=i;
b[e]=function(k,l,j){j=j||{};
j.type=e;
return b(k,l,j)
}
};
b.error=function(){return"amplify.store quota exceeded"
};
var h=/^__amplify__/;
function d(e,i){b.addType(e,function(r,q,s){var k,p,l,m,n=q,j=(new Date()).getTime();
if(!r){n={};
m=[];
l=0;
try{r=i.length;
while(r=i.key(l++)){if(h.test(r)){p=JSON.parse(i.getItem(r));
if(p.expires&&p.expires<=j){m.push(r)
}else{n[r.replace(h,"")]=p.data
}}}while(r=m.pop()){i.removeItem(r)
}}catch(o){}return n
}r="__amplify__"+r;
if(q===g){k=i.getItem(r);
p=k?JSON.parse(k):{expires:-1};
if(p.expires&&p.expires<=j){i.removeItem(r)
}else{return p.data
}}else{if(q===null){i.removeItem(r)
}else{p=JSON.stringify({data:q,expires:s.expires?j+s.expires:null});
try{i.setItem(r,p)
}catch(o){b[e]();
try{i.setItem(r,p)
}catch(o){throw b.error()
}}}}return n
})
}for(var c in {localStorage:1,sessionStorage:1}){try{window[c].setItem("__amplify__","x");
window[c].removeItem("__amplify__");
d(c,window[c])
}catch(f){}}if(!b.types.localStorage&&window.globalStorage){try{d("globalStorage",window.globalStorage[window.location.hostname]);
if(b.type==="sessionStorage"){b.type="globalStorage"
}}catch(f){}}(function(){if(b.types.localStorage){return
}var k=document.createElement("div"),j="amplify";
k.style.display="none";
document.getElementsByTagName("head")[0].appendChild(k);
try{k.addBehavior("#default#userdata");
k.load(j)
}catch(i){k.parentNode.removeChild(k);
return
}b.addType("userData",function(t,s,u){k.load(j);
var p,r,n,l,m,o=s,e=(new Date()).getTime();
if(!t){o={};
m=[];
l=0;
while(p=k.XMLDocument.documentElement.attributes[l++]){r=JSON.parse(p.value);
if(r.expires&&r.expires<=e){m.push(p.name)
}else{o[p.name]=r.data
}}while(t=m.pop()){k.removeAttribute(t)
}k.save(j);
return o
}t=t.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");
t=t.replace(/^-/,"_-");
if(s===g){p=k.getAttribute(t);
r=p?JSON.parse(p):{expires:-1};
if(r.expires&&r.expires<=e){k.removeAttribute(t)
}else{return r.data
}}else{if(s===null){k.removeAttribute(t)
}else{n=k.getAttribute(t);
r=JSON.stringify({data:s,expires:(u.expires?(e+u.expires):null)});
k.setAttribute(t,r)
}}try{k.save(j)
}catch(q){if(n===null){k.removeAttribute(t)
}else{k.setAttribute(t,n)
}b.userData();
try{k.setAttribute(t,r);
k.save(j)
}catch(q){if(n===null){k.removeAttribute(t)
}else{k.setAttribute(t,n)
}throw b.error()
}}return o
})
}());
(function(){var j={},e={};
function i(k){return k===g?g:JSON.parse(JSON.stringify(k))
}b.addType("memory",function(l,m,k){if(!l){return i(j)
}if(m===g){return i(j[l])
}if(e[l]){clearTimeout(e[l]);
delete e[l]
}if(m===null){delete j[l];
return null
}j[l]=m;
if(k.expires){e[l]=setTimeout(function(){delete j[l];
delete e[l]
},k.expires)
}return m
})
}())
}(this.amplify=this.amplify||{}));
ko.extenders.localStore=function(d,b){var c=amplify.store(b)||d();
var a=ko.computed({read:d,write:function(e){amplify.store(b,e);
d(e)
}});
a(c);
return a
};
ko.bindingHandlers["class"]={update:function(a,b){if(a.__ko__previousClassValue__){ko.utils.toggleDomNodeCssClass(a,a.__ko__previousClassValue__,false)
}var c=ko.utils.unwrapObservable(b());
ko.utils.toggleDomNodeCssClass(a,c,true);
a.__ko__previousClassValue__=c
}};
(function(){window.googletag=window.googletag||{};
window.googletag.cmd=window.googletag.cmd||[];
googletag.cmd.push(function(){if(googletag.hasOwnProperty("on")||googletag.hasOwnProperty("off")||googletag.hasOwnProperty("trigger")||googletag.hasOwnProperty("events")){return
}var a=googletag.debug_log.log,b=[],c=function(e,f,d){b.push({name:e,id:f,match:d})
};
c("gpt-google_js_loaded",8,/Google service JS loaded/ig);
c("gpt-gpt_fetch",46,/Fetching GPT implementation/ig);
c("gpt-gpt_fetched",48,/GPT implementation fetched\./ig);
c("gpt-page_load_complete",1,/Page load complete/ig);
c("gpt-queue_start",31,/^Invoked queued function/ig);
c("gpt-service_add_slot",40,/Associated ([\w]*) service with slot ([\/\w]*)/ig);
c("gpt-service_add_targeting",88,/Setting targeting attribute ([\w]*) with value ([\w\W]*) for service ([\w]*)/ig);
c("gpt-service_collapse_containers_enable",78,/Enabling collapsing of containers when there is no ad content/ig);
c("gpt-service_create",35,/Created service: ([\w]*)/ig);
c("gpt-service_single_request_mode_enable",63,/Using single request mode to fetch ads/ig);
c("gpt-slot_create",2,/Created slot: ([\/\w]*)/ig);
c("gpt-slot_add_targeting",17,/Setting targeting attribute ([\w]*) with value ([\w\W]*) for slot ([\/\w]*)/ig);
c("gpt-slot_fill",50,/Calling fillslot/ig);
c("gpt-slot_fetch",3,/Fetching ad for slot ([\/\w]*)/ig);
c("gpt-slot_receiving",4,/Receiving ad for slot ([\/\w]*)/ig);
c("gpt-slot_render_delay",53,/Delaying rendering of ad slot ([\/\w]*) pending loading of the GPT implementation/ig);
c("gpt-slot_rendering",5,/^Rendering ad for slot ([\/\w]*)/ig);
c("gpt-slot_rendered",6,/Completed rendering ad for slot ([\/\w]*)/ig);
googletag.events=googletag.events||{};
googletag.on=function(d,j,g){if(!j){return this
}d=d.split(" ");
var f=g?j:undefined,k=g||j,i=0,h="";
k.data=f;
for(h=d[i=0];
i<d.length;
h=d[++i]){(this.events[h]=this.events[h]||[]).push(k)
}return this
};
googletag.off=function(d,g){d=d.split(" ");
var j=0,i="",k=0,h=function(){};
for(i=d[j];
j<d.length;
i=d[++j]){if(!this.events.hasOwnProperty(i)){continue
}if(!g){delete this.events[i];
continue
}k=this.events[i].length-1;
for(h=this.events[i][k];
k>=0;
h=this.events[i][--k]){if(h==g){this.events[i].splice(k,1)
}}if(this.events[i].length===0){delete this.events[i]
}}return this
};
googletag.trigger=function(e,d){if(!this.events[e]||this.events[e].length===0){return this
}var d=d||[],h=0,g=this.events[e][h];
for(h,g;
h<this.events[e].length;
g=this.events[e][++h]){if(g.apply(this,[{data:g.data}].concat(d))===false){break
}}return this
};
googletag.debug_log.log=function(k,h,f,j,d){if(h&&h.getMessageId&&typeof(h.getMessageId())=="number"){var g=Array.prototype.slice.call(arguments),i=0;
for(i;
i<b.length;
i++){if(b[i].id===h.getMessageId()){googletag.trigger(b[i].name,g)
}}}return a.apply(this,arguments)
}
})
})();
(function(p,z,m){var w,j,s,E,c,n,q,o,D,y,u,x;
w=z.createElement("div");
j=["webkit","moz","o","ms"];
s=g.support={};
s.transform3d=F(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);
s.transform=F(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]);
s.transition=F(["transitionProperty","WebkitTransitionProperty","MozTransitionProperty","OTransitionProperty","msTransitionProperty"]);
s.addEventListener="addEventListener" in p;
s.msPointer=p.navigator.msPointerEnabled;
s.cssAnimation=(s.transform3d||s.transform)&&s.transition;
s.touch="ontouchend" in p;
c={start:{touch:"touchstart",mouse:"mousedown"},move:{touch:"touchmove",mouse:"mousemove"},end:{touch:"touchend",mouse:"mouseup"}};
E=false;
if(s.addEventListener){z.addEventListener("gesturestart",function(){E=true
});
z.addEventListener("gestureend",function(){E=false
})
}n={slider:400,scrollOverBack:200};
q={close:0,open:1,progress:2};
D=10;
y=50;
u=/[\t\r\n\f]/g;
x="menu-item";
function g(H,I,K,J){if(this instanceof g){return this.init(H,I,K,J)
}else{return new g(H,I,K,J)
}}g.prototype.init=function(H,I,K,J){var L=this;
L.setElement(H,I,K);
if(!L.main||!L.slidemenu||!L.button||!L.slidemenuBody||!L.slidemenuContent){throw new Error("Element not found. Please set correctly.")
}J=J||{};
L.disableCssAnimation=(J.disableCssAnimation===m)?false:J.disableCssAnimation;
L.disable3d=(J.disable3d===m)?false:J.disable3d;
L.direction="left";
if(J.direction==="right"){L.direction="right"
}L.useCssAnimation=s.cssAnimation;
if(L.disableCssAnimation===true){L.useCssAnimation=false
}L.use3d=s.transform3d;
if(L.disable3d===true){L.use3d=false
}L.slideWidth=(d(L.slidemenu)).width;
L.main.SpSlidemenuStatus=q.close;
L.htmlOverflowX="";
L.bodyOverflowX="";
L.scrollCurrentY=0;
L.scrollAnimationTimer=false;
L.scrollOverTimer=false;
L.setDefaultStyle();
L.bindMethods();
A("start",L.button,L.buttonTouchStart,false);
A("move",L.button,f,false);
A("end",L.button,L.buttonTouchEnd,false);
A("start",L.slidemenuContent,L.scrollTouchStart,false);
A("move",L.slidemenuContent,L.scrollTouchMove,false);
A("end",L.slidemenuContent,L.scrollTouchEnd,false);
L.slidemenuContent.addEventListener("click",L.itemClick,false);
p.addEventListener("resize",e(L.setHeight,100),false);
return L
};
g.prototype.bindMethods=function(){var I,H;
I=this;
H=["setHeight","slideOpen","slideOpenEnd","slideClose","slideCloseEnd","buttonTouchStart","buttonTouchEnd","mainTouchStart","scrollTouchStart","scrollTouchMove","scrollTouchEnd","scrollInertiaMove","scrollOverBack","scrollOver","itemClick"];
H.forEach(function(J){I[J]=G(I[J],I)
})
};
g.prototype.setElement=function(H,I,J){var K=this;
K.main=H;
if(typeof H==="string"){K.main=z.querySelector(H)
}K.slidemenu=I;
if(typeof I==="string"){K.slidemenu=z.querySelector(I)
}K.button=J;
if(typeof J==="string"){K.button=z.querySelector(J)
}if(!K.slidemenu){return
}K.slidemenuBody=K.slidemenu.querySelector(".slidemenu-body");
K.slidemenuContent=K.slidemenu.querySelector(".slidemenu-content");
K.slidemenuHeader=K.slidemenu.querySelector(".slidemenu-header")
};
g.prototype.setDefaultStyle=function(){var H=this;
if(s.msPointer){H.slidemenuContent.style.msTouchAction="none"
}H.setHeight();
if(H.useCssAnimation){b(H.main,{transitionProperty:C("transform"),transitionTimingFunction:"ease-in-out",transitionDuration:n.slider+"ms",transitionDelay:"0ms",transform:H.getTranslateX(0)});
b(H.slidemenu,{transitionProperty:"visibility",transitionTimingFunction:"linear",transitionDuration:"0ms",transitionDelay:n.slider+"ms"});
b(H.slidemenuContent,{transitionProperty:C("transform"),transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transitionDelay:"0ms",transform:H.getTranslateY(0)})
}else{b(H.main,{position:"relative",left:"0px"});
b(H.slidemenuContent,{top:"0px"})
}};
g.prototype.setHeight=function(I){var J,H;
J=this;
H=k();
b(J.main,{minHeight:H+"px"});
b(J.slidemenu,{height:H+"px"})
};
g.prototype.buttonTouchStart=function(H){var I=this;
H.preventDefault();
H.stopPropagation();
switch(I.main.SpSlidemenuStatus){case q.progress:break;
case q.open:case q.close:I.buttonStartPageX=B(H,"pageX");
I.buttonStartPageY=B(H,"pageY");
break
}};
g.prototype.buttonTouchEnd=function(H){var I=this;
H.preventDefault();
H.stopPropagation();
if(I.shouldTrigerNext(H)){switch(I.main.SpSlidemenuStatus){case q.progress:break;
case q.open:I.slideClose(H);
break;
case q.close:I.slideOpen(H);
break
}}};
g.prototype.mainTouchStart=function(H){var I=this;
H.preventDefault();
H.stopPropagation();
I.slideClose(H)
};
g.prototype.shouldTrigerNext=function(L){var M=this,K=B(L,"pageX"),J=B(L,"pageY"),I=Math.abs(K-M.buttonStartPageX),H=Math.abs(J-M.buttonStartPageY);
return I<20&&H<20
};
g.prototype.slideOpen=function(H){var J=this,I;
if(J.direction==="left"){I=J.slideWidth
}else{I=-J.slideWidth
}J.main.SpSlidemenuStatus=q.progress;
A("move",z,f,false);
jQuery(z).trigger("slidemenu:open");
J.htmlOverflowX=z.documentElement.style.overflowX;
J.bodyOverflowX=z.body.style.overflowX;
z.documentElement.style.overflowX=z.body.style.overflowX="hidden";
if(J.useCssAnimation){b(J.main,{transform:J.getTranslateX(I)});
b(J.slidemenu,{transitionProperty:"z-index",visibility:"visible",zIndex:"1"})
}else{l(J.main,J.direction,I,n.slider);
b(J.slidemenu,{visibility:"visible"})
}setTimeout(J.slideOpenEnd,n.slider+y)
};
g.prototype.slideOpenEnd=function(){var H=this;
H.main.SpSlidemenuStatus=q.open;
if(H.useCssAnimation){}else{b(H.slidemenu,{zIndex:"1"})
}A("start",H.main,H.mainTouchStart,false)
};
g.prototype.slideClose=function(H){var I=this;
I.main.SpSlidemenuStatus=q.progress;
r("start",I.main,I.mainTouchStart,false);
jQuery(z).trigger("slidemenu:close");
if(I.useCssAnimation){b(I.main,{transform:I.getTranslateX(0)});
b(I.slidemenu,{transitionProperty:"visibility",visibility:"hidden",zIndex:"-1"})
}else{l(I.main,I.direction,0,n.slider);
b(I.slidemenu,{zIndex:"-1"})
}setTimeout(I.slideCloseEnd,n.slider+y)
};
g.prototype.slideCloseEnd=function(){var H=this;
H.main.SpSlidemenuStatus=q.close;
z.documentElement.style.overflowX=H.htmlOverflowX;
z.body.style.overflowX=H.bodyOverflowX;
if(H.useCssAnimation){}else{b(H.slidemenu,{visibility:"hidden"})
}r("move",z,f,false)
};
g.prototype.scrollTouchStart=function(H){var I=this;
if(E){return
}if(I.scrollOverTimer!==false){clearTimeout(I.scrollOverTimer)
}I.scrollCurrentY=I.getScrollCurrentY();
if(I.useCssAnimation){b(I.slidemenuContent,{transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transform:I.getTranslateY(I.scrollCurrentY)})
}else{I.stopScrollAnimate();
b(I.slidemenuContent,{top:I.scrollCurrentY+"px"})
}I.scrollOverTimer=false;
I.scrollAnimationTimer=false;
I.scrollTouchStarted=true;
I.scrollMoveReady=false;
I.scrollMoveEventCnt=0;
I.scrollMaxY=I.calcMaxY();
I.scrollStartPageX=B(H,"pageX");
I.scrollStartPageY=B(H,"pageY");
I.scrollBasePageY=I.scrollStartPageY;
I.scrollTimeForVelocity=H.timeStamp;
I.scrollPageYForVelocity=I.scrollStartPageY;
I.slidemenuContent.removeEventListener("click",f,true)
};
g.prototype.scrollTouchMove=function(M){var O,L,K,I,N,J,H;
O=this;
if(!O.scrollTouchStarted||E){return
}L=B(M,"pageX");
K=B(M,"pageY");
if(O.scrollMoveReady){M.preventDefault();
M.stopPropagation();
I=K-O.scrollBasePageY;
N=O.scrollCurrentY+I;
if(N>0||N<O.scrollMaxY){N=Math.round(O.scrollCurrentY+I/3)
}O.scrollSetY(N);
if(O.scrollMoveEventCnt%D===0){O.scrollPageYForVelocity=K;
O.scrollTimeForVelocity=M.timeStamp
}O.scrollMoveEventCnt++
}else{J=Math.abs(L-O.scrollStartPageX);
H=Math.abs(K-O.scrollStartPageY);
if(J>5||H>5){O.scrollMoveReady=true;
O.slidemenuContent.addEventListener("click",f,true)
}}O.scrollBasePageY=K
};
g.prototype.scrollTouchEnd=function(J){var L,K,H,I;
L=this;
if(!L.scrollTouchStarted){return
}L.scrollTouchStarted=false;
L.scrollMaxY=L.calcMaxY();
if(L.scrollCurrentY>0||L.scrollCurrentY<L.scrollMaxY){L.scrollOverBack();
return
}H=B(J,"pageY")-L.scrollPageYForVelocity;
I=J.timeStamp-L.scrollTimeForVelocity;
K=H/I;
if(Math.abs(K)>=0.01){L.scrollInertia(K)
}};
g.prototype.scrollInertia=function(I){var L,N,J,O,H,M,R,K,P,Q;
L=this;
if(I>0){N=true;
J=0
}else{N=false;
J=L.scrollMaxY
}O=Math.abs(L.scrollCurrentY-J);
I=Math.abs(750*I);
if(I>1000){I=1000
}H=I/500;
M=(I*H)-((500*Math.pow(H,2))/2);
if(M<=O){if(N){R=L.scrollCurrentY+M
}else{R=L.scrollCurrentY-M
}K=H*1000;
L.scrollInertiaMove(R,K,false)
}else{R=J;
P=Math.sqrt((2*500*O)+Math.pow(I,2));
K=(P-I)/500*1000;
L.scrollInertiaMove(R,K,true,P,N)
}};
g.prototype.scrollInertiaMove=function(O,L,M,K,H){var N=this,I,J;
N.scrollCurrentY=O;
if(N.useCssAnimation){b(N.slidemenuContent,{transitionTimingFunction:"cubic-bezier(0.33, 0.66, 0.66, 1)",transitionDuration:L+"ms",transform:N.getTranslateY(O)})
}else{N.scrollAnimate(O,L)
}if(!M){return
}I=K/7500;
J=(K*I)-((7500*Math.pow(I,2))/2);
if(H){O=N.scrollCurrentY+J
}else{O=N.scrollCurrentY-J
}L=I*1000;
N.scrollOver(O,L)
};
g.prototype.scrollOver=function(J,H){var I;
I=this;
I.scrollCurrentY=J;
if(I.useCssAnimation){b(I.slidemenuContent,{transitionTimingFunction:"cubic-bezier(0.33, 0.66, 0.66, 1)",transitionDuration:H+"ms",transform:I.getTranslateY(J)})
}else{I.scrollAnimate(J,H)
}I.scrollOverTimer=setTimeout(I.scrollOverBack,H)
};
g.prototype.scrollOverBack=function(){var I,H;
I=this;
console.log(I.scrollCurrentY);
console.log(I.scrollMaxY);
if(I.scrollCurrentY>=0){H=0
}else{H=I.scrollMaxY
}I.scrollCurrentY=H;
if(I.useCssAnimation){b(I.slidemenuContent,{transitionTimingFunction:"ease-out",transitionDuration:n.scrollOverBack+"ms",transform:I.getTranslateY(H)})
}else{I.scrollAnimate(H,n.scrollOverBack)
}};
g.prototype.scrollSetY=function(I){var H=this;
H.scrollCurrentY=I;
if(H.useCssAnimation){b(H.slidemenuContent,{transitionTimingFunction:"ease-in-out",transitionDuration:"0ms",transform:H.getTranslateY(I)})
}else{H.slidemenuContent.style.top=I+"px"
}};
g.prototype.scrollAnimate=function(J,H){var I=this;
I.stopScrollAnimate();
I.scrollAnimationTimer=l(I.slidemenuContent,"top",J,H)
};
g.prototype.stopScrollAnimate=function(){var H=this;
if(H.scrollAnimationTimer!==false){clearInterval(H.scrollAnimationTimer)
}};
g.prototype.itemClick=function(I){var H=I.target||I.srcElement;
if(a(H,x)){this.slideClose()
}};
g.prototype.calcMaxY=function(H){var L,J,K,I;
L=this;
J=L.slidemenuContent.offsetHeight;
K=L.slidemenuBody.offsetHeight;
I=0;
if(L.slidemenuHeader){I=L.slidemenuHeader.offsetHeight
}if(J>K){return -(J-K+I)
}else{return 0
}};
g.prototype.getScrollCurrentY=function(){var H=0;
if(this.useCssAnimation){i(p.getComputedStyle(this.slidemenuContent,""),"transform").split(",").forEach(function(K){var J=parseInt(K,10);
if(!isNaN(J)&&J!==0&&J!==1){H=J
}})
}else{var I=parseInt(i(p.getComputedStyle(this.slidemenuContent,""),"top"),10);
if(!isNaN(I)&&I!==0&&I!==1){H=I
}}return H
};
g.prototype.getTranslateX=function(H){var I=this;
return I.use3d?"translate3d("+H+"px, 0px, 0px)":"translate("+H+"px, 0px)"
};
g.prototype.getTranslateY=function(I){var H=this;
return H.use3d?"translate3d(0px, "+I+"px, 0px)":"translate(0px, "+I+"px)"
};
function F(H){return t(H,function(I){return w.style[I]!==m
})
}function v(H){return H.charAt(0).toUpperCase()+H.substr(1)
}function t(J,K){var I,H;
for(I=0,H=J.length;
I<H;
I++){if(K(J[I],I)){return true
}}return false
}function h(I,K,J){var H=I.style;
if(!h.cache){h.cache={}
}if(h.cache[K]!==m){H[h.cache[K]]=J;
return
}if(H[K]!==m){h.cache[K]=K;
H[K]=J;
return
}t(j,function(L){var M=v(L)+v(K);
if(H[M]!==m){H[M]=J;
return true
}})
}function b(J,I){var H,K;
for(K in I){if(I.hasOwnProperty(K)){h(J,K,I[K])
}}}function i(I,J){var H;
if(I[J]!==m){return I[J]
}t(j,function(K){var L=v(K)+v(J);
if(I[L]!==m){H=I[L];
return true
}});
return H
}function C(I){var H;
if(!C.cache){C.cache={}
}if(C.cache[I]!==m){return C.cache[I]
}if(w.style[I]!==m){C.cache[I]=I;
return I
}t(j,function(J){var K=v(J)+v(I);
if(w.style[K]!==m){H="-"+J+"-"+I;
return true
}});
C.cache[I]=H;
return H
}function G(K,J){var I,L,H;
I=Function.prototype.bind;
L=Array.prototype.slice;
if(K.bind===I&&I){return I.apply(K,L.call(arguments,1))
}H=L.call(arguments,2);
return function(){return K.apply(J,H.concat(L.call(arguments)))
}
}function f(H){H.preventDefault();
H.stopPropagation()
}function d(K){var L,J,I,H;
L={};
I={position:"absolute",visibility:"hidden",display:"block"};
for(J in I){L[J]=K.style[J];
K.style[J]=I[J]
}H={width:K.offsetWidth,height:K.offsetHeight};
for(J in I){K.style[J]=L[J]
}return H
}function B(H,I){return H.changedTouches?H.changedTouches[0][I]:H[I]
}function A(J,I,K,H){H=H||false;
if(s.touch){I.addEventListener(c[J].touch,K,H)
}else{I.addEventListener(c[J].mouse,K,H)
}}function r(J,I,K,H){H=H||false;
if(s.touch){I.removeEventListener(c[J].touch,K,H)
}else{I.removeEventListener(c[J].mouse,K,H)
}}function a(I,H){H=" "+H+" ";
if(I.nodeType===1&&(" "+I.className+" ").replace(u," ").indexOf(H)>=0){return true
}return false
}function l(K,H,O,M){var J,P,L,N,I;
J=+new Date();
P=parseInt(K.style[H],10);
O=parseInt(O,10);
L=parseInt(M,10);
N=function(R,Q){return -(R/=Q)*(R-2)
};
I=setInterval(function(){var R,S,Q;
R=new Date()-J;
if(R>L){clearInterval(I);
Q=O
}else{S=N(R,L);
Q=S*(O-P)+P
}K.style[H]=Q+"px"
},10);
return I
}function k(){return 0
}function e(J,L,I){var K,H;
return function(){var P=this,O=arguments;
var N=function(){K=null;
if(!I){H=J.apply(P,O)
}};
var M=I&&!K;
clearTimeout(K);
K=setTimeout(N,L);
if(M){H=J.apply(P,O)
}return H
}
}p.SpSlidemenu=g
})(window,window.document);
/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
!function(J){var I=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1
},isBlankString:function(b){return !b||/^\s*$/.test(b)
},escapeRegExChars:function(b){return b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(b){return"string"==typeof b
},isNumber:function(b){return"number"==typeof b
},isArray:J.isArray,isFunction:J.isFunction,isObject:J.isPlainObject,isUndefined:function(b){return"undefined"==typeof b
},toStr:function(b){return I.isUndefined(b)||null===b?"":b+""
},bind:J.proxy,each:function(a,f){function e(d,c){return f(c,d)
}J.each(a,e)
},map:J.map,filter:J.grep,every:function(a,f){var e=!0;
return a?(J.each(a,function(b,c){return(e=f.call(null,c,b,a))?void 0:!1
}),!!e):e
},some:function(a,f){var e=!1;
return a?(J.each(a,function(b,c){return(e=f.call(null,c,b,a))?!1:void 0
}),!!e):e
},mixin:J.extend,getUniqueId:function(){var b=0;
return function(){return b++
}
}(),templatify:function(a){function d(){return String(a)
}return J.isFunction(a)?a:d
},defer:function(b){setTimeout(b,0)
},debounce:function(g,f,j){var i,h;
return function(){var d,c,b=this,a=arguments;
return d=function(){i=null,j||(h=g.apply(b,a))
},c=j&&!i,clearTimeout(i),i=setTimeout(d,f),c&&(h=g.apply(b,a)),h
}
},throttle:function(j,i){var p,o,n,m,l,k;
return l=0,k=function(){l=new Date,n=null,m=j.apply(p,o)
},function(){var b=new Date,a=i-(b-l);
return p=this,o=arguments,0>=a?(clearTimeout(n),n=null,l=b,m=j.apply(p,o)):n||(n=setTimeout(k,a)),m
}
},noop:function(){}}
}(),H="0.10.5",G=function(){function b(c){return c=I.toStr(c),c?c.split(/\s+/):[]
}function f(c){return c=I.toStr(c),c?c.split(/\W+/):[]
}function e(c){return function(){var a=[].slice.call(arguments,0);
return function(h){var g=[];
return I.each(a,function(d){g=g.concat(c(I.toStr(h[d])))
}),g
}
}
}return{nonword:f,whitespace:b,obj:{nonword:e(f),whitespace:e(b)}}
}(),F=function(){function f(d){this.maxSize=I.isNumber(d)?d:100,this.reset(),this.maxSize<=0&&(this.set=this.get=J.noop)
}function b(){this.head=this.tail=null
}function a(d,c){this.key=d,this.val=c,this.prev=this.next=null
}return I.mixin(f.prototype,{set:function(g,e){var i,h=this.list.tail;
this.size>=this.maxSize&&(this.list.remove(h),delete this.hash[h.key]),(i=this.hash[g])?(i.val=e,this.list.moveToFront(i)):(i=new a(g,e),this.list.add(i),this.hash[g]=i,this.size++)
},get:function(d){var c=this.hash[d];
return c?(this.list.moveToFront(c),c.val):void 0
},reset:function(){this.size=0,this.hash={},this.list=new b
}}),I.mixin(b.prototype,{add:function(c){this.head&&(c.next=this.head,this.head.prev=c),this.head=c,this.tail=this.tail||c
},remove:function(c){c.prev?c.prev.next=c.next:this.head=c.next,c.next?c.next.prev=c.prev:this.tail=c.prev
},moveToFront:function(c){this.remove(c),this.add(c)
}}),f
}(),E=function(){function b(c){this.prefix=["__",c,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+I.escapeRegExChars(this.prefix))
}function n(){return(new Date).getTime()
}function m(c){return JSON.stringify(I.isUndefined(c)?null:c)
}function l(c){return JSON.parse(c)
}var k,j;
try{k=window.localStorage,k.setItem("~~~","!"),k.removeItem("~~~")
}catch(i){k=null
}return j=k&&window.JSON?{_prefix:function(c){return this.prefix+c
},_ttlKey:function(c){return this._prefix(c)+this.ttlKey
},get:function(c){return this.isExpired(c)&&this.remove(c),l(k.getItem(this._prefix(c)))
},set:function(c,f,d){return I.isNumber(d)?k.setItem(this._ttlKey(c),m(n()+d)):k.removeItem(this._ttlKey(c)),k.setItem(this._prefix(c),m(f))
},remove:function(c){return k.removeItem(this._ttlKey(c)),k.removeItem(this._prefix(c)),this
},clear:function(){var f,e,h=[],g=k.length;
for(f=0;
g>f;
f++){(e=k.key(f)).match(this.keyMatcher)&&h.push(e.replace(this.keyMatcher,""))
}for(f=h.length;
f--;
){this.remove(h[f])
}return this
},isExpired:function(c){var e=l(k.getItem(this._ttlKey(c)));
return I.isNumber(e)&&n()>e?!0:!1
}}:{get:I.noop,set:I.noop,remove:I.noop,clear:I.noop,isExpired:I.noop},I.mixin(b.prototype,j),b
}(),D=function(){function l(c){c=c||{},this.cancelled=!1,this.lastUrl=null,this._send=c.transport?k(c.transport):J.ajax,this._get=c.rateLimiter?c.rateLimiter(this._get):this._get,this._cache=c.cache===!1?new F(0):a
}function k(d){return function(o,n){function m(f){I.defer(function(){c.resolve(f)
})
}function i(f){I.defer(function(){c.reject(f)
})
}var c=J.Deferred();
return d(o,n,m,i),c
}
}var j=0,e={},b=6,a=new F(10);
return l.setMaxPendingRequests=function(c){b=c
},l.resetCache=function(){a.reset()
},I.mixin(l.prototype,{_get:function(g,f,q){function p(c){q&&q(null,c),h._cache.set(g,c)
}function o(){q&&q(!0)
}function n(){j--,delete e[g],h.onDeckRequestArgs&&(h._get.apply(h,h.onDeckRequestArgs),h.onDeckRequestArgs=null)
}var m,h=this;
this.cancelled||g!==this.lastUrl||((m=e[g])?m.done(p).fail(o):b>j?(j++,e[g]=this._send(g,f).done(p).fail(o).always(n)):this.onDeckRequestArgs=[].slice.call(arguments,0))
},get:function(f,i,h){var g;
return I.isFunction(i)&&(h=i,i={}),this.cancelled=!1,this.lastUrl=f,(g=this._cache.get(f))?I.defer(function(){h&&h(null,g)
}):this._get(f,i,h),!!g
},cancel:function(){this.cancelled=!0
}}),l
}(),C=function(){function j(c){c=c||{},c.datumTokenizer&&c.queryTokenizer||J.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=c.datumTokenizer,this.queryTokenizer=c.queryTokenizer,this.reset()
}function i(c){return c=I.filter(c,function(d){return !!d
}),c=I.map(c,function(d){return d.toLowerCase()
})
}function h(){return{ids:[],children:{}}
}function b(g){for(var f={},m=[],l=0,k=g.length;
k>l;
l++){f[g[l]]||(f[g[l]]=!0,m.push(g[l]))
}return m
}function a(l,k){function r(d,c){return d-c
}var q=0,p=0,o=[];
l=l.sort(r),k=k.sort(r);
for(var n=l.length,m=k.length;
n>q&&m>p;
){l[q]<k[p]?q++:l[q]>k[p]?p++:(o.push(l[q]),q++,p++)
}return o
}return I.mixin(j.prototype,{bootstrap:function(c){this.datums=c.datums,this.trie=c.trie
},add:function(d){var e=this;
d=I.isArray(d)?d:[d],I.each(d,function(c){var l,k;
l=e.datums.push(c)-1,k=i(e.datumTokenizer(c)),I.each(k,function(m){var f,o,n;
for(f=e.trie,o=m.split("");
n=o.shift();
){f=f.children[n]||(f.children[n]=h()),f.ids.push(l)
}})
})
},get:function(d){var k,g,f=this;
return k=i(this.queryTokenizer(d)),I.each(k,function(l){var e,o,n,m;
if(g&&0===g.length){return !1
}for(e=f.trie,o=l.split("");
e&&(n=o.shift());
){e=e.children[n]
}return e&&0===o.length?(m=e.ids.slice(0),void (g=g?a(g,m):m)):(g=[],!1)
}),g?I.map(b(g),function(c){return f.datums[c]
}):[]
},reset:function(){this.datums=[],this.trie=h()
},serialize:function(){return{datums:this.datums,trie:this.trie}
}}),j
}(),B=function(){function c(d){return d.local||null
}function b(i){var h,g;
return g={url:null,thumbprint:"",ttl:86400000,filter:null,ajax:{}},(h=i.prefetch||null)&&(h=I.isString(h)?{url:h}:h,h=I.mixin(g,h),h.thumbprint=H+h.thumbprint,h.ajax.type=h.ajax.type||"GET",h.ajax.dataType=h.ajax.dataType||"json",!h.url&&J.error("prefetch requires url to be set")),h
}function a(l){function k(d){return function(e){return I.debounce(e,d)
}
}function j(d){return function(e){return I.throttle(e,d)
}
}var i,h;
return h={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(i=l.remote||null)&&(i=I.isString(i)?{url:i}:i,i=I.mixin(h,i),i.rateLimiter=/^throttle$/i.test(i.rateLimitBy)?j(i.rateLimitWait):k(i.rateLimitWait),i.ajax.type=i.ajax.type||"GET",i.ajax.dataType=i.ajax.dataType||"json",delete i.rateLimitBy,delete i.rateLimitWait,!i.url&&J.error("remote requires url to be set")),i
}return{local:c,prefetch:b,remote:a}
}();
!function(h){function g(c){c&&(c.local||c.prefetch||c.remote)||J.error("one of local, prefetch, or remote is required"),this.limit=c.limit||5,this.sorter=f(c.sorter),this.dupDetector=c.dupDetector||d,this.local=B.local(c),this.prefetch=B.prefetch(c),this.remote=B.remote(c),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new C({datumTokenizer:c.datumTokenizer,queryTokenizer:c.queryTokenizer}),this.storage=this.cacheKey?new E(this.cacheKey):null
}function f(e){function j(c){return c.sort(e)
}function i(c){return c
}return I.isFunction(e)?j:i
}function d(){return !1
}var b,a;
return b=h.Bloodhound,a={data:"data",protocol:"protocol",thumbprint:"thumbprint"},h.Bloodhound=g,g.noConflict=function(){return h.Bloodhound=b,g
},g.tokenizers=G,I.mixin(g.prototype,{_loadPrefetch:function(i){function m(c){j.clear(),j.add(i.filter?i.filter(c):c),j._saveToStorage(j.index.serialize(),i.thumbprint,i.ttl)
}var l,k,j=this;
return(l=this._readFromStorage(i.thumbprint))?(this.index.bootstrap(l),k=J.Deferred().resolve()):k=J.ajax(i.url,i.ajax).done(m),k
},_getFromRemote:function(j,i){function n(e,o){i(e?[]:k.remote.filter?k.remote.filter(o):o)
}var m,l,k=this;
if(this.transport){return j=j||"",l=encodeURIComponent(j),m=this.remote.replace?this.remote.replace(this.remote.url,j):this.remote.url.replace(this.remote.wildcard,l),this.transport.get(m,this.remote.ajax,n)
}},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()
},_saveToStorage:function(i,e,j){this.storage&&(this.storage.set(a.data,i,j),this.storage.set(a.protocol,location.protocol,j),this.storage.set(a.thumbprint,e,j))
},_readFromStorage:function(i){var e,j={};
return this.storage&&(j.data=this.storage.get(a.data),j.protocol=this.storage.get(a.protocol),j.thumbprint=this.storage.get(a.thumbprint)),e=j.thumbprint!==i||j.protocol!==location.protocol,j.data&&!e?j.data:null
},_initialize:function(){function l(){j.add(I.isFunction(i)?i():i)
}var k,j=this,i=this.local;
return k=this.prefetch?this._loadPrefetch(this.prefetch):J.Deferred().resolve(),i&&k.done(l),this.transport=this.remote?new D(this.remote):null,this.initPromise=k.promise()
},initialize:function(c){return !this.initPromise||c?this._initialize():this.initPromise
},add:function(c){this.index.add(c)
},get:function(i,n){function m(c){var e=k.slice(0);
I.each(c,function(o){var p;
return p=I.some(e,function(q){return l.dupDetector(o,q)
}),!p&&e.push(o),e.length<l.limit
}),n&&n(l.sorter(e))
}var l=this,k=[],j=!1;
k=this.index.get(i),k=this.sorter(k).slice(0,this.limit),k.length<this.limit?j=this._getFromRemote(i,m):this._cancelLastRemoteRequest(),j||(k.length>0||!this.transport)&&n&&n(k)
},clear:function(){this.index.reset()
},clearPrefetchCache:function(){this.storage&&this.storage.clear()
},clearRemoteCache:function(){this.transport&&D.resetCache()
},ttAdapter:function(){return I.bind(this.get,this)
}}),g
}(this);
var A=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}
}(),z=function(){var b={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};
return I.isMsie()&&I.mixin(b.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),I.isMsie()&&I.isMsie()<=7&&I.mixin(b.input,{marginTop:"-1px"}),b
}(),y=function(){function b(c){c&&c.el||J.error("EventBus initialized without el"),this.$el=J(c.el)
}var a="typeahead:";
return I.mixin(b.prototype,{trigger:function(d){var c=[].slice.call(arguments,1);
this.$el.trigger(a+d,c)
}}),b
}(),x=function(){function L(g,f,j,i){var h;
if(!j){return this
}for(f=f.split(l),j=i?m(j,i):j,this._callbacks=this._callbacks||{};
h=f.shift();
){this._callbacks[h]=this._callbacks[h]||{sync:[],async:[]},this._callbacks[h][g].push(j)
}return this
}function K(a,f,e){return L.call(this,"async",a,f,e)
}function r(a,f,e){return L.call(this,"sync",a,f,e)
}function q(d){var c;
if(!this._callbacks){return this
}for(d=d.split(l);
c=d.shift();
){delete this._callbacks[c]
}return this
}function p(h){var f,N,M,j,i;
if(!this._callbacks){return this
}for(h=h.split(l),M=[].slice.call(arguments,1);
(f=h.shift())&&(N=this._callbacks[f]);
){j=o(N.sync,this,[f].concat(M)),i=o(N.async,this,[f].concat(M)),j()&&k(i)
}return this
}function o(f,e,h){function g(){for(var c,b=0,a=f.length;
!c&&a>b;
b+=1){c=f[b].apply(e,h)===!1
}return !c
}return g
}function n(){var b;
return b=window.setImmediate?function(c){setImmediate(function(){c()
})
}:function(c){setTimeout(function(){c()
},0)
}
}function m(d,c){return d.bind?d.bind(c):function(){d.apply(c,[].slice.call(arguments,0))
}
}var l=/\s+/,k=n();
return{onSync:r,onAsync:K,off:q,trigger:p}
}(),w=function(b){function f(i,o,n){for(var m,l=[],k=0,j=i.length;
j>k;
k++){l.push(I.escapeRegExChars(i[k]))
}return m=n?"\\b("+l.join("|")+")\\b":"("+l.join("|")+")",o?new RegExp(m):new RegExp(m,"i")
}var e={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};
return function(i){function d(g){var k,j,h;
return(k=a.exec(g.data))&&(h=b.createElement(i.tagName),i.className&&(h.className=i.className),j=g.splitText(k.index),j.splitText(k[0].length),h.appendChild(j.cloneNode(!0)),g.parentNode.replaceChild(h,j)),!!k
}function c(h,g){for(var l,k=3,j=0;
j<h.childNodes.length;
j++){l=h.childNodes[j],l.nodeType===k?j+=g(l)?1:0:c(l,g)
}}var a;
i=I.mixin({},e,i),i.node&&i.pattern&&(i.pattern=I.isArray(i.pattern)?i.pattern:[i.pattern],a=f(i.pattern,i.caseSensitive,i.wordsOnly),c(i.node,d))
}
}(window.document),v=function(){function j(n){var m,l,k,g,d=this;
n=n||{},n.input||J.error("input is missing"),m=I.bind(this._onBlur,this),l=I.bind(this._onFocus,this),k=I.bind(this._onKeydown,this),g=I.bind(this._onInput,this),this.$hint=J(n.hint),this.$input=J(n.input).on("blur.tt",m).on("focus.tt",l).on("keydown.tt",k),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=I.noop),I.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(c){a[c.which||c.keyCode]||I.defer(I.bind(d._onInput,d,c))
}):this.$input.on("input.tt",g),this.query=this.$input.val(),this.$overflowHelper=i(this.$input)
}function i(c){return J('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:c.css("font-family"),fontSize:c.css("font-size"),fontStyle:c.css("font-style"),fontVariant:c.css("font-variant"),fontWeight:c.css("font-weight"),wordSpacing:c.css("word-spacing"),letterSpacing:c.css("letter-spacing"),textIndent:c.css("text-indent"),textRendering:c.css("text-rendering"),textTransform:c.css("text-transform")}).insertAfter(c)
}function h(d,c){return j.normalizeQuery(d)===j.normalizeQuery(c)
}function b(c){return c.altKey||c.ctrlKey||c.metaKey||c.shiftKey
}var a;
return a={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},j.normalizeQuery=function(c){return(c||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")
},I.mixin(j.prototype,x,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")
},_onFocus:function(){this.trigger("focused")
},_onKeydown:function(d){var c=a[d.which||d.keyCode];
this._managePreventDefault(c,d),c&&this._shouldTrigger(c,d)&&this.trigger(c+"Keyed",d)
},_onInput:function(){this._checkInputValue()
},_managePreventDefault:function(g,f){var m,l,k;
switch(g){case"tab":l=this.getHint(),k=this.getInputValue(),m=l&&l!==k&&!b(f);
break;
case"up":case"down":m=!b(f);
break;
default:m=!1
}m&&f.preventDefault()
},_shouldTrigger:function(e,d){var f;
switch(e){case"tab":f=!b(d);
break;
default:f=!0
}return f
},_checkInputValue:function(){var e,d,f;
e=this.getInputValue(),d=h(e,this.query),f=d?this.query.length!==e.length:!1,this.query=e,d?f&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)
},focus:function(){this.$input.focus()
},blur:function(){this.$input.blur()
},getQuery:function(){return this.query
},setQuery:function(c){this.query=c
},getInputValue:function(){return this.$input.val()
},setInputValue:function(d,c){this.$input.val(d),c?this.clearHint():this._checkInputValue()
},resetInputValue:function(){this.setInputValue(this.query,!0)
},getHint:function(){return this.$hint.val()
},setHint:function(c){this.$hint.val(c)
},clearHint:function(){this.setHint("")
},clearHintIfInvalid:function(){var f,e,k,g;
f=this.getInputValue(),e=this.getHint(),k=f!==e&&0===e.indexOf(f),g=""!==f&&k&&!this.hasOverflow(),!g&&this.clearHint()
},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()
},hasOverflow:function(){var c=this.$input.width()-2;
return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=c
},isCursorAtEnd:function(){var e,g,f;
return e=this.$input.val().length,g=this.$input[0].selectionStart,I.isNumber(g)?g===e:document.selection?(f=document.selection.createRange(),f.moveStart("character",-e),e===f.text.length):!0
},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null
}}),j
}(),u=function(){function n(d){d=d||{},d.templates=d.templates||{},d.source||J.error("missing source"),d.name&&!k(d.name)&&J.error("invalid dataset name: "+d.name),this.query=null,this.highlight=!!d.highlight,this.name=d.name||I.getUniqueId(),this.source=d.source,this.displayFn=m(d.display||d.displayKey),this.templates=l(d.templates,this.displayFn),this.$el=J(A.dataset.replace("%CLASS%",this.name))
}function m(d){function e(c){return c[d]
}return d=d||"value",I.isFunction(d)?d:e
}function l(e,g){function f(c){return"<p>"+g(c)+"</p>"
}return{empty:e.empty&&I.templatify(e.empty),header:e.header&&I.templatify(e.header),footer:e.footer&&I.templatify(e.footer),suggestion:e.suggestion||f}
}function k(c){return/^[_a-zA-Z0-9-]+$/.test(c)
}var j="ttDataset",b="ttValue",a="ttDatum";
return n.extractDatasetName=function(c){return J(c).data(j)
},n.extractValue=function(c){return J(c).data(b)
},n.extractDatum=function(c){return J(c).data(a)
},I.mixin(n.prototype,x,{_render:function(M,L){function r(){return q.templates.empty({query:M,isEmpty:!0})
}function i(){function o(e){var f;
return f=J(A.suggestion).append(q.templates.suggestion(e)).data(j,q.name).data(b,q.displayFn(e)).data(a,e),f.children().each(function(){J(this).css(z.suggestionChild)
}),f
}var d,c;
return d=J(A.suggestions).css(z.suggestions),c=I.map(L,o),d.append.apply(d,c),q.highlight&&w({className:"tt-highlight",node:d[0],pattern:M}),d
}function h(){return q.templates.header({query:M,isEmpty:!K})
}function g(){return q.templates.footer({query:M,isEmpty:!K})
}if(this.$el){var K,q=this;
this.$el.empty(),K=L&&L.length,!K&&this.templates.empty?this.$el.html(r()).prepend(q.templates.header?h():null).append(q.templates.footer?g():null):K&&this.$el.html(i()).prepend(q.templates.header?h():null).append(q.templates.footer?g():null),this.trigger("rendered")
}},getRoot:function(){return this.$el
},update:function(e){function d(c){f.canceled||e!==f.query||f._render(e,c)
}var f=this;
this.query=e,this.canceled=!1,this.source(e,d)
},cancel:function(){this.canceled=!0
},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")
},isEmpty:function(){return this.$el.is(":empty")
},destroy:function(){this.$el=null
}}),n
}(),t=function(){function b(l){var k,j,i,d=this;
l=l||{},l.menu||J.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=I.map(l.datasets,a),k=I.bind(this._onSuggestionClick,this),j=I.bind(this._onSuggestionMouseEnter,this),i=I.bind(this._onSuggestionMouseLeave,this),this.$menu=J(l.menu).on("click.tt",".tt-suggestion",k).on("mouseenter.tt",".tt-suggestion",j).on("mouseleave.tt",".tt-suggestion",i),I.each(this.datasets,function(c){d.$menu.append(c.getRoot()),c.onSync("rendered",d._onRendered,d)
})
}function a(c){return new u(c)
}return I.mixin(b.prototype,x,{_onSuggestionClick:function(c){this.trigger("suggestionClicked",J(c.currentTarget))
},_onSuggestionMouseEnter:function(c){this._removeCursor(),this._setCursor(J(c.currentTarget),!0)
},_onSuggestionMouseLeave:function(){this._removeCursor()
},_onRendered:function(){function c(d){return d.isEmpty()
}this.isEmpty=I.every(this.datasets,c),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")
},_hide:function(){this.$menu.hide()
},_show:function(){this.$menu.css("display","block")
},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")
},_getCursor:function(){return this.$menu.find(".tt-cursor").first()
},_setCursor:function(d,c){d.first().addClass("tt-cursor"),!c&&this.trigger("cursorMoved")
},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")
},_moveCursor:function(g){var f,j,i,h;
if(this.isOpen){if(j=this._getCursor(),f=this._getSuggestions(),this._removeCursor(),i=f.index(j)+g,i=(i+1)%(f.length+1)-1,-1===i){return void this.trigger("cursorRemoved")
}-1>i&&(i=f.length-1),this._setCursor(h=f.eq(i)),this._ensureVisible(h)
}},_ensureVisible:function(g){var f,j,i,h;
f=g.position().top,j=f+g.outerHeight(!0),i=this.$menu.scrollTop(),h=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),0>f?this.$menu.scrollTop(i+f):j>h&&this.$menu.scrollTop(i+(j-h))
},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))
},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))
},setLanguageDirection:function(c){this.$menu.css("ltr"===c?z.ltr:z.rtl)
},moveCursorUp:function(){this._moveCursor(-1)
},moveCursorDown:function(){this._moveCursor(1)
},getDatumForSuggestion:function(d){var c=null;
return d.length&&(c={raw:u.extractDatum(d),value:u.extractValue(d),datasetName:u.extractDatasetName(d)}),c
},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())
},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())
},update:function(d){function e(c){c.update(d)
}I.each(this.datasets,e)
},empty:function(){function c(d){d.clear()
}I.each(this.datasets,c),this.isEmpty=!0
},isVisible:function(){return this.isOpen&&!this.isEmpty
},destroy:function(){function c(d){d.destroy()
}this.$menu.off(".tt"),this.$menu=null,I.each(this.datasets,c)
}}),b
}(),s=function(){function j(m){var l,k,d;
m=m||{},m.input||J.error("missing input"),this.isActivated=!1,this.autoselect=!!m.autoselect,this.minLength=I.isNumber(m.minLength)?m.minLength:1,this.$node=i(m.input,m.withHint),l=this.$node.find(".tt-dropdown-menu"),k=this.$node.find(".tt-input"),d=this.$node.find(".tt-hint"),k.on("blur.tt",function(e){var o,n,f;
o=document.activeElement,n=l.is(o),f=l.has(o).length>0,I.isMsie()&&(n||f)&&(e.preventDefault(),e.stopImmediatePropagation(),I.defer(function(){k.focus()
}))
}),l.on("mousedown.tt",function(c){c.preventDefault()
}),this.eventBus=m.eventBus||new y({el:k}),this.dropdown=new t({menu:l,datasets:m.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new v({input:k,hint:d}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()
}function i(e,p){var o,n,m,k;
o=J(e),n=J(A.wrapper).css(z.wrapper),m=J(A.dropdown).css(z.dropdown),k=o.clone().css(z.hint).css(h(o)),k.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),o.data(a,{dir:o.attr("dir"),autocomplete:o.attr("autocomplete"),spellcheck:o.attr("spellcheck"),style:o.attr("style")}),o.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(p?z.input:z.inputWithNoHint);
try{!o.attr("dir")&&o.attr("dir","auto")
}catch(g){}return o.wrap(n).parent().prepend(p?k:null).append(m)
}function h(c){return{backgroundAttachment:c.css("background-attachment"),backgroundClip:c.css("background-clip"),backgroundColor:c.css("background-color"),backgroundImage:c.css("background-image"),backgroundOrigin:c.css("background-origin"),backgroundPosition:c.css("background-position"),backgroundRepeat:c.css("background-repeat"),backgroundSize:c.css("background-size")}
}function b(d){var e=d.find(".tt-input");
I.each(e.data(a),function(c,f){I.isUndefined(c)?e.removeAttr(f):e.attr(f,c)
}),e.detach().removeData(a).removeClass("tt-input").insertAfter(d),d.remove()
}var a="ttAttrs";
return I.mixin(j.prototype,{_onSuggestionClicked:function(e,d){var f;
(f=this.dropdown.getDatumForSuggestion(d))&&this._select(f)
},_onCursorMoved:function(){var c=this.dropdown.getDatumForCursor();
this.input.setInputValue(c.value,!0),this.eventBus.trigger("cursorchanged",c.raw,c.datasetName)
},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()
},_onDatasetRendered:function(){this._updateHint()
},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")
},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")
},_onFocused:function(){this.isActivated=!0,this.dropdown.open()
},_onBlurred:function(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()
},_onEnterKeyed:function(f,e){var k,g;
k=this.dropdown.getDatumForCursor(),g=this.dropdown.getDatumForTopSuggestion(),k?(this._select(k),e.preventDefault()):this.autoselect&&g&&(this._select(g),e.preventDefault())
},_onTabKeyed:function(e,d){var f;
(f=this.dropdown.getDatumForCursor())?(this._select(f),d.preventDefault()):this._autocomplete(!0)
},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()
},_onUpKeyed:function(){var c=this.input.getQuery();
this.dropdown.isEmpty&&c.length>=this.minLength?this.dropdown.update(c):this.dropdown.moveCursorUp(),this.dropdown.open()
},_onDownKeyed:function(){var c=this.input.getQuery();
this.dropdown.isEmpty&&c.length>=this.minLength?this.dropdown.update(c):this.dropdown.moveCursorDown(),this.dropdown.open()
},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()
},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()
},_onQueryChanged:function(d,c){this.input.clearHintIfInvalid(),c.length>=this.minLength?this.dropdown.update(c):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()
},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()
},_setLanguageDirection:function(){var c;
this.dir!==(c=this.input.getLanguageDirection())&&(this.dir=c,this.$node.css("direction",c),this.dropdown.setLanguageDirection(c))
},_updateHint:function(){var k,p,o,n,m,l;
k=this.dropdown.getDatumForTopSuggestion(),k&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(p=this.input.getInputValue(),o=v.normalizeQuery(p),n=I.escapeRegExChars(o),m=new RegExp("^(?:"+n+")(.+$)","i"),l=m.exec(k.value),l?this.input.setHint(p+l[1]):this.input.clearHint()):this.input.clearHint()
},_autocomplete:function(g){var f,m,l,k;
f=this.input.getHint(),m=this.input.getQuery(),l=g||this.input.isCursorAtEnd(),f&&m!==f&&l&&(k=this.dropdown.getDatumForTopSuggestion(),k&&this.input.setInputValue(k.value),this.eventBus.trigger("autocompleted",k.raw,k.datasetName))
},_select:function(c){this.input.setQuery(c.value),this.input.setInputValue(c.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",c.raw,c.datasetName),this.dropdown.close(),I.defer(I.bind(this.dropdown.empty,this.dropdown))
},open:function(){this.dropdown.open()
},close:function(){this.dropdown.close()
},setVal:function(c){c=I.toStr(c),this.isActivated?this.input.setInputValue(c):(this.input.setQuery(c),this.input.setInputValue(c,!0)),this._setLanguageDirection()
},getVal:function(){return this.input.getQuery()
},destroy:function(){this.input.destroy(),this.dropdown.destroy(),b(this.$node),this.$node=null
}}),j
}();
!function(){var f,b,a;
f=J.fn.typeahead,b="ttTypeahead",a={initialize:function(h,g){function d(){var i,e,c=J(this);
I.each(g,function(j){j.highlight=!!h.highlight
}),e=new s({input:c,eventBus:i=new y({el:c}),withHint:I.isUndefined(h.hint)?!0:!!h.hint,minLength:h.minLength,autoselect:h.autoselect,datasets:g}),c.data(b,e)
}return g=I.isArray(g)?g:[].slice.call(arguments,1),h=h||{},this.each(d)
},open:function(){function c(){var d,e=J(this);
(d=e.data(b))&&d.open()
}return this.each(c)
},close:function(){function c(){var d,e=J(this);
(d=e.data(b))&&d.close()
}return this.each(c)
},val:function(d){function h(){var j,i=J(this);
(j=i.data(b))&&j.setVal(d)
}function g(i){var e,j;
return(e=i.data(b))&&(j=e.getVal()),j
}return arguments.length?this.each(h):g(this.first())
},destroy:function(){function c(){var d,e=J(this);
(d=e.data(b))&&(d.destroy(),e.removeData(b))
}return this.each(c)
}},J.fn.typeahead=function(d){var e;
return a[d]&&"initialize"!==d?(e=this.filter(function(){return !!J(this).data(b)
}),a[d].apply(e,[].slice.call(arguments,1))):a.initialize.apply(this,arguments)
},J.fn.typeahead.noConflict=function(){return J.fn.typeahead=f,this
}
}()
}(window.jQuery);
/*! Raven.js 3.7.0 (6920e38) | github.com/getsentry/raven-js */
!function(d){if("object"==typeof exports&&"undefined"!=typeof module){module.exports=d()
}else{if("function"==typeof define&&define.amd){define([],d)
}else{var c;
c="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,c.Raven=d()
}}}(function(){return function b(a,l,k){function j(m,f){if(!l[m]){if(!a[m]){var e="function"==typeof require&&require;
if(!f&&e){return e(m,!0)
}if(i){return i(m,!0)
}var d=new Error("Cannot find module '"+m+"'");
throw d.code="MODULE_NOT_FOUND",d
}var c=l[m]={exports:{}};
a[m][0].call(c.exports,function(g){var n=a[m][1][g];
return j(n?n:g)
},c,c.exports,b,a,l,k)
}return l[m].exports
}for(var i="function"==typeof require&&require,h=0;
k.length>h;
h++){j(k[h])
}return j
}({1:[function(g,f,j){function i(k,e,m,l){return JSON.stringify(k,h(e,l),m)
}function h(k,e){var m=[],l=[];
return null==e&&(e=function(d,c){return m[0]===c?"[Circular ~]":"[Circular ~."+l.slice(0,m.indexOf(c)).join(".")+"]"
}),function(d,c){if(m.length>0){var a=m.indexOf(this);
~a?m.splice(a+1):m.push(this),~a?l.splice(a,1/0,d):l.push(d),~m.indexOf(c)&&(c=e.call(this,d,c))
}else{m.push(c)
}return null==k?c:k.call(this,d,c)
}
}j=f.exports=i,j.getSerialize=h
},{}],2:[function(f,e,h){function g(c){this.name="RavenConfigError",this.message=c
}g.prototype=new Error,g.prototype.constructor=g,e.exports=g
},{}],3:[function(f,e,h){var g=function(j,i,n){var m=j[i],l=j;
if(i in j){var k="warn"===i?"warning":i;
j[i]=function(){var d=[].slice.call(arguments),c=""+d.join(" "),o={level:k,logger:"console",extra:{arguments:d}};
n&&n(c,o),m&&Function.prototype.apply.call(m,l,d)
}
}};
e.exports={wrapMethod:g}
},{}],4:[function(ab,aa,Z){function Y(){return +new Date
}function X(){this.a=!("object"!=typeof JSON||!JSON.stringify),this.b="undefined"!=typeof document,this.c=null,this.d=null,this.e=null,this.f=null,this.g=null,this.h={},this.i={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],crossOrigin:"anonymous",collectWindowErrors:!0,maxMessageLength:0,stackTraceLimit:50,autoBreadcrumbs:!0},this.j=0,this.k=!1,this.l=Error.stackTraceLimit,this.m=window.console||{},this.n={},this.o=[],this.p=Y(),this.q=[],this.r=[],this.s=null,this.t=window.location,this.u=this.t&&this.t.href;
for(var c in this.m){this.n[c]=this.m[c]
}}var W=ab(7),V=ab(2),U=ab(6),T=ab(1),S=U.isFunction,R=U.isUndefined,Q=U.isError,P=U.isEmptyObject,O=U.hasKey,N=U.joinRegExp,M=U.each,K=U.objectMerge,J=U.truncate,I=U.urlencode,H=U.uuid4,G=U.htmlTreeAsString,F=U.parseUrl,E=U.isString,D=U.fill,C=ab(3).wrapMethod,B="source protocol user pass host port path".split(" "),L=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
X.prototype={VERSION:"3.7.0",debug:!1,TraceKit:W,config:function(g,f){var j=this;
if(this.e){return this.v("error","Error: Raven has already been configured"),this
}if(!g){return this
}f&&M(f,function(d,c){"tags"===d||"extra"===d?j.h[d]=c:j.i[d]=c
}),this.setDSN(g),this.i.ignoreErrors.push(/^Script error\.?$/),this.i.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),this.i.ignoreErrors=N(this.i.ignoreErrors),this.i.ignoreUrls=this.i.ignoreUrls.length?N(this.i.ignoreUrls):!1,this.i.whitelistUrls=this.i.whitelistUrls.length?N(this.i.whitelistUrls):!1,this.i.includePaths=N(this.i.includePaths),this.i.maxBreadcrumbs=Math.max(0,Math.min(this.i.maxBreadcrumbs||100,100));
var i={xhr:!0,console:!0,dom:!0,location:!0},h=this.i.autoBreadcrumbs;
return"[object Object]"==={}.toString.call(h)?h=K(i,h):h!==!1&&(h=i),this.i.autoBreadcrumbs=h,W.collectWindowErrors=!!this.i.collectWindowErrors,this
},install:function(){var c=this;
return this.isSetup()&&!this.k&&(W.report.subscribe(function(){c.w.apply(c,arguments)
}),this.x(),c.i.autoBreadcrumbs&&this.y(),this.z(),this.k=!0),Error.stackTraceLimit=this.i.stackTraceLimit,this
},setDSN:function(f){var e=this.A(f),h=e.path.lastIndexOf("/"),g=e.path.substr(1,h);
this.B=f,this.f=e.user,this.C=e.pass&&e.pass.substr(1),this.g=e.path.substr(h+1),this.e=this.D(e),this.E=this.e+"/"+g+"api/"+this.g+"/store/"
},context:function(e,d,f){return S(e)&&(f=d||[],d=e,e=void 0),this.wrap(e,d).apply(this,f)
},wrap:function(i,h,n){function m(){var o=[],e=arguments.length,c=!i||i&&i.deep!==!1;
for(n&&S(n)&&n.apply(this,arguments);
e--;
){o[e]=c?l.wrap(i,arguments[e]):arguments[e]
}try{return h.apply(this,o)
}catch(a){throw l.F(),l.captureException(a,i),a
}}var l=this;
if(R(h)&&!S(i)){return i
}if(S(i)&&(h=i,i=void 0),!S(h)){return h
}try{if(h.G){return h
}if(h.H){return h.H
}}catch(k){return h
}for(var j in h){O(h,j)&&(m[j]=h[j])
}return m.prototype=h.prototype,h.H=m,m.G=!0,m.I=h,m
},uninstall:function(){return W.report.uninstall(),this.J(),Error.stackTraceLimit=this.l,this.k=!1,this
},captureException:function(f,e){if(!Q(f)){return this.captureMessage(f,K({trimHeadFrames:1,stacktrace:!0},e))
}this.c=f;
try{var h=W.computeStackTrace(f);
this.K(h,e)
}catch(g){if(f!==g){throw g
}}return this
},captureMessage:function(i,f){if(!this.i.ignoreErrors.test||!this.i.ignoreErrors.test(i)){var n=K({message:i+""},f);
if(f&&f.stacktrace){var m;
try{throw new Error(i)
}catch(l){m=l
}m.name=null,f=K({fingerprint:i,trimHeadFrames:(f.trimHeadFrames||0)+1},f);
var k=W.computeStackTrace(m),j=this.L(k,f);
n.stacktrace={frames:j.reverse()}
}return this.M(n),this
}},captureBreadcrumb:function(d){var c=K({timestamp:Y()/1000},d);
return this.r.push(c),this.r.length>this.i.maxBreadcrumbs&&this.r.shift(),this
},addPlugin:function(d){var c=Array.prototype.slice.call(arguments,1);
return this.o.push([d,c]),this.k&&this.z(),this
},setUserContext:function(c){return this.h.user=c,this
},setExtraContext:function(c){return this.N("extra",c),this
},setTagsContext:function(c){return this.N("tags",c),this
},clearContext:function(){return this.h={},this
},getContext:function(){return JSON.parse(T(this.h))
},setEnvironment:function(c){return this.i.environment=c,this
},setRelease:function(c){return this.i.release=c,this
},setDataCallback:function(d){var c=this.i.dataCallback;
return this.i.dataCallback=S(d)?function(a){return d(a,c)
}:d,this
},setShouldSendCallback:function(d){var c=this.i.shouldSendCallback;
return this.i.shouldSendCallback=S(d)?function(a){return d(a,c)
}:d,this
},setTransport:function(c){return this.i.transport=c,this
},lastException:function(){return this.c
},lastEventId:function(){return this.d
},isSetup:function(){return this.a?this.e?!0:(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this.v("error","Error: Raven has not been configured.")),!1):!1
},afterLoad:function(){var c=window.RavenConfig;
c&&this.config(c.dsn,c.config).install()
},showReportDialog:function(j){if(window.document){j=j||{};
var g=j.eventId||this.lastEventId();
if(!g){throw new V("Missing eventId")
}var p=j.dsn||this.B;
if(!p){throw new V("Missing DSN")
}var o=encodeURIComponent,n="";
n+="?eventId="+o(g),n+="&dsn="+o(p);
var m=j.user||this.h.user;
m&&(m.name&&(n+="&name="+o(m.name)),m.email&&(n+="&email="+o(m.email)));
var l=this.D(this.A(p)),k=document.createElement("script");
k.async=!0,k.src=l+"/api/embed/error-page/"+n,(document.head||document.body).appendChild(k)
}},F:function(){var c=this;
this.j+=1,setTimeout(function(){c.j-=1
})
},O:function(g,f){var j,i;
if(this.b){f=f||{},g="raven"+g.substr(0,1).toUpperCase()+g.substr(1),document.createEvent?(j=document.createEvent("HTMLEvents"),j.initEvent(g,!0,!0)):(j=document.createEventObject(),j.eventType=g);
for(i in f){O(f,i)&&(j[i]=f[i])
}if(document.createEvent){document.dispatchEvent(j)
}else{try{document.fireEvent("on"+j.eventType.toLowerCase(),j)
}catch(h){}}}},P:function(d){var c=this;
return function(i){if(c.Q=null,c.s!==i){c.s=i;
var h,g=i.target;
try{h=G(g)
}catch(a){h="<unknown>"
}c.captureBreadcrumb({category:"ui."+d,message:h})
}}
},R:function(){var d=this,c=1000;
return function(i){var h=i.target,g=h&&h.tagName;
if(g&&("INPUT"===g||"TEXTAREA"===g)){var a=d.Q;
a||d.P("input")(i),clearTimeout(a),d.Q=setTimeout(function(){d.Q=null
},c)
}}
},S:function(g,f){var j=F(this.t.href),i=F(f),h=F(g);
this.u=f,j.protocol===i.protocol&&j.host===i.host&&(f=i.relative),j.protocol===h.protocol&&j.host===h.host&&(g=h.relative),this.captureBreadcrumb({category:"navigation",data:{to:f,from:g}})
},x:function(){function j(c){return function(a,s){for(var r=new Array(arguments.length),q=0;
r.length>q;
++q){r[q]=arguments[q]
}var h=r[0];
return S(h)&&(r[0]=p.wrap(h)),c.apply?c.apply(this,r):c(r[0],r[1])
}
}function i(d){var c=window[d]&&window[d].prototype;
c&&c.hasOwnProperty&&c.hasOwnProperty("addEventListener")&&(D(c,"addEventListener",function(a){return function(u,t,s,r){try{t&&t.handleEvent&&(t.handleEvent=p.wrap(t.handleEvent))
}catch(q){}var e;
return n&&n.dom&&("EventTarget"===d||"Node"===d)&&("click"===u?e=p.P(u):"keypress"===u&&(e=p.R())),a.call(this,u,p.wrap(t,void 0,e),s,r)
}
},o),D(c,"removeEventListener",function(e){return function(a,r,q,h){try{r=r&&(r.H?r.H:r)
}catch(g){}return e.call(this,a,r,q,h)
}
},o))
}var p=this,o=p.q,n=this.i.autoBreadcrumbs;
D(window,"setTimeout",j,o),D(window,"setInterval",j,o),window.requestAnimationFrame&&D(window,"requestAnimationFrame",function(c){return function(a){return c(p.wrap(a))
}
},o);
for(var m=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],l=0;
m.length>l;
l++){i(m[l])
}var k=window.jQuery||window.$;
k&&k.fn&&k.fn.ready&&D(k.fn,"ready",function(c){return function(a){return c.call(this,p.wrap(a))
}
},o)
},y:function(){function t(d,e){d in e&&S(e[d])&&D(e,d,function(c){return s.wrap(c)
})
}var s=this,r=this.i.autoBreadcrumbs,q=s.q;
if(r.xhr&&"XMLHttpRequest" in window){var p=XMLHttpRequest.prototype;
D(p,"open",function(c){return function(e,a){return E(a)&&-1===a.indexOf(s.f)&&(this.T={method:e,url:a,status_code:null}),c.apply(this,arguments)
}
},q),D(p,"send",function(a){return function(v){function u(){if(k.T&&(1===k.readyState||4===k.readyState)){try{k.T.status_code=k.status
}catch(d){}s.captureBreadcrumb({type:"http",category:"xhr",data:k.T})
}}for(var k=this,i=["onload","onerror","onprogress"],c=0;
i.length>c;
c++){t(i[c],k)
}return"onreadystatechange" in k&&S(k.onreadystatechange)?D(k,"onreadystatechange",function(d){return s.wrap(d,void 0,u)
}):k.onreadystatechange=u,a.apply(this,arguments)
}
},q)
}r.dom&&this.b&&(document.addEventListener?(document.addEventListener("click",s.P("click"),!1),document.addEventListener("keypress",s.R(),!1)):(document.attachEvent("onclick",s.P("click")),document.attachEvent("onkeypress",s.R())));
var o=window.chrome,n=o&&o.app&&o.app.runtime,m=!n&&window.history&&history.pushState;
if(r.location&&m){var l=window.onpopstate;
window.onpopstate=function(){var c=s.t.href;
return s.S(s.u,c),l?l.apply(this,arguments):void 0
},D(history,"pushState",function(c){return function(){var a=arguments.length>2?arguments[2]:void 0;
return a&&s.S(s.u,a+""),c.apply(this,arguments)
}
},q)
}if(r.console&&"console" in window&&console.log){var j=function(d,e){s.captureBreadcrumb({message:d,level:e.level,category:"console"})
};
M(["debug","info","warn","error","log"],function(d,c){C(console,c,j)
})
}},J:function(){for(var f;
this.q.length;
){f=this.q.shift();
var e=f[0],h=f[1],g=f[2];
e[h]=g
}},z:function(){var c=this;
M(this.o,function(a,h){var g=h[0],f=h[1];
g.apply(c,[c].concat(f))
})
},A:function(g){var f=L.exec(g),j={},i=7;
try{for(;
i--;
){j[B[i]]=f[i]||""
}}catch(h){throw new V("Invalid DSN: "+g)
}if(j.pass&&!this.i.allowSecretKey){throw new V("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key")
}return j
},D:function(d){var c="//"+d.host+(d.port?":"+d.port:"");
return d.protocol&&(c=d.protocol+":"+c),c
},w:function(){this.j||this.K.apply(this,arguments)
},K:function(e,d){var f=this.L(e,d);
this.O("handle",{stackInfo:e,options:d}),this.U(e.name,e.message,e.url,e.lineno,f,d)
},L:function(g,f){var j=this,i=[];
if(g.stack&&g.stack.length&&(M(g.stack,function(d,c){var k=j.V(c);
k&&i.push(k)
}),f&&f.trimHeadFrames)){for(var h=0;
f.trimHeadFrames>h&&i.length>h;
h++){i[h].in_app=!1
}}return i=i.slice(0,this.i.stackTraceLimit)
},V:function(d){if(d.url){var c={filename:d.url,lineno:d.line,colno:d.column,"function":d.func||"?"};
return c.in_app=!(this.i.includePaths.test&&!this.i.includePaths.test(c.filename)||/(Raven|TraceKit)\./.test(c["function"])||/raven\.(min\.)?js$/.test(c.filename)),c
}},U:function(j,i,p,o,n,m){var l;
if((!this.i.ignoreErrors.test||!this.i.ignoreErrors.test(i))&&(i+="",n&&n.length?(p=n[0].filename||p,n.reverse(),l={frames:n}):p&&(l={frames:[{filename:p,lineno:o,in_app:!0}]}),(!this.i.ignoreUrls.test||!this.i.ignoreUrls.test(p))&&(!this.i.whitelistUrls.test||this.i.whitelistUrls.test(p)))){var k=K({exception:{values:[{type:j,value:i,stacktrace:l}]},culprit:p},m);
this.M(k)
}},W:function(e){var d=this.i.maxMessageLength;
if(e.message&&(e.message=J(e.message,d)),e.exception){var f=e.exception.values[0];
f.value=J(f.value,d)
}return e
},X:function(){if(this.b&&document.location&&document.location.href){var c={headers:{"User-Agent":navigator.userAgent}};
return c.url=document.location.href,document.referrer&&(c.headers.Referer=document.referrer),c
}},M:function(f){var d=this.i,h={project:this.g,logger:d.logger,platform:"javascript"},g=this.X();
g&&(h.request=g),f.trimHeadFrames&&delete f.trimHeadFrames,f=K(h,f),f.tags=K(K({},this.h.tags),f.tags),f.extra=K(K({},this.h.extra),f.extra),f.extra["session:duration"]=Y()-this.p,this.r&&this.r.length>0&&(f.breadcrumbs={values:[].slice.call(this.r,0)}),P(f.tags)&&delete f.tags,this.h.user&&(f.user=this.h.user),d.environment&&(f.environment=d.environment),d.release&&(f.release=d.release),d.serverName&&(f.server_name=d.serverName),S(d.dataCallback)&&(f=d.dataCallback(f)||f),f&&!P(f)&&(!S(d.shouldSendCallback)||d.shouldSendCallback(f))&&this.Y(f)
},Y:function(i,h){var n=this,m=this.i;
if(this.d=i.event_id||(i.event_id=H()),i=this.W(i),this.v("debug","Raven about to send:",i),this.isSetup()){var l={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this.f};
this.C&&(l.sentry_secret=this.C);
var k=i.exception&&i.exception.values[0];
this.captureBreadcrumb({category:"sentry",message:k?(k.type?k.type+": ":"")+k.value:i.message,event_id:i.event_id,level:i.level||"error"});
var j=this.E;
(m.transport||this.Z).call(this,{url:j,auth:l,data:i,options:m,onSuccess:function(){n.O("success",{data:i,src:j}),h&&h()
},onError:function(a){n.O("failure",{data:i,src:j}),a=a||new Error("Raven send failed (no additional details provided)"),h&&h(a)
}})
}},Z:function(g){function f(){200===j.status?g.onSuccess&&g.onSuccess():g.onError&&g.onError(new Error("Sentry error code: "+j.status))
}var j=new XMLHttpRequest,i="withCredentials" in j||"undefined"!=typeof XDomainRequest;
if(i){var h=g.url;
"withCredentials" in j?j.onreadystatechange=function(){4===j.readyState&&f()
}:(j=new XDomainRequest,h=h.replace(/^https?:/,""),j.onload=f),j.open("POST",h+"?"+I(g.auth)),j.send(T(g.data))
}},v:function(c){this.n[c]&&this.debug&&Function.prototype.apply.call(this.n[c],this.m,[].slice.call(arguments,1))
},N:function(d,c){R(c)?delete this.h[d]:this.h[d]=K(this.h[d]||{},c)
}},X.prototype.setUser=X.prototype.setUserContext,X.prototype.setReleaseContext=X.prototype.setRelease,aa.exports=X
},{1:1,2:2,3:3,6:6,7:7}],5:[function(h,g,l){var k=h(4),j=window.Raven,i=new k;
i.noConflict=function(){return window.Raven=j,i
},i.afterLoad(),g.exports=i
},{4:4}],6:[function(P,O,N){function M(c){return void 0===c
}function L(c){return"function"==typeof c
}function K(c){return"[object String]"===v.toString.call(c)
}function J(c){return"object"==typeof c&&null!==c
}function I(d){for(var c in d){return !1
}return !0
}function H(d){var c=v.toString.call(d);
return J(d)&&"[object Error]"===c||"[object Exception]"===c||d instanceof Error
}function G(f,d){var h,g;
if(M(f.length)){for(h in f){D(f,h)&&d.call(null,h,f[h])
}}else{if(g=f.length){for(h=0;
g>h;
h++){d.call(null,h,f[h])
}}}}function F(d,c){return c?(G(c,function(a,e){d[a]=e
}),d):d
}function E(d,c){return !c||c>=d.length?d:d.substr(0,c)+"…"
}function D(d,c){return v.hasOwnProperty.call(d,c)
}function C(g){for(var f,j=[],i=0,h=g.length;
h>i;
i++){f=g[i],K(f)?j.push(f.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):f&&f.source&&j.push(f.source)
}return new RegExp(j.join("|"),"i")
}function B(d){var c=[];
return G(d,function(e,f){c.push(encodeURIComponent(e)+"="+encodeURIComponent(f))
}),c.join("&")
}function A(f){var e=f.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
if(!e){return{}
}var h=e[6]||"",g=e[8]||"";
return{protocol:e[2],host:e[4],path:e[5],relative:e[5]+h+g}
}function z(){var e=window.crypto||window.msCrypto;
if(!M(e)&&e.getRandomValues){var d=new Uint16Array(8);
e.getRandomValues(d),d[3]=4095&d[3]|16384,d[4]=16383&d[4]|32768;
var f=function(g){for(var c=g.toString(16);
4>c.length;
){c="0"+c
}return c
};
return f(d[0])+f(d[1])+f(d[2])+f(d[3])+f(d[4])+f(d[5])+f(d[6])+f(d[7])
}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(h){var g=16*Math.random()|0,i="x"===h?g:3&g|8;
return i.toString(16)
})
}function y(r){for(var q,p=5,o=80,n=[],m=0,l=0,k=" > ",j=k.length;
r&&m++<p&&(q=x(r),!("html"===q||m>1&&l+n.length*j+q.length>=o));
){n.push(q),l+=q.length,r=r.parentNode
}return n.reverse().join(k)
}function x(j){var f,p,o,n,m,l=[];
if(!j||!j.tagName){return""
}if(l.push(j.tagName.toLowerCase()),j.id&&l.push("#"+j.id),f=j.className,f&&K(f)){for(p=f.split(" "),m=0;
p.length>m;
m++){l.push("."+p[m])
}}var k=["type","name","title","alt"];
for(m=0;
k.length>m;
m++){o=k[m],n=j.getAttribute(o),n&&l.push("["+o+'="'+n+'"]')
}return l.join("")
}function w(g,f,j,i){var h=g[f];
g[f]=j(h),i&&i.push([g,f,h])
}var v=Object.prototype;
O.exports={isUndefined:M,isFunction:L,isString:K,isObject:J,isEmptyObject:I,isError:H,each:G,objectMerge:F,truncate:E,hasKey:D,joinRegExp:C,urlencode:B,uuid4:z,htmlTreeAsString:y,htmlElementAsString:x,parseUrl:A,fill:w}
},{}],7:[function(x,w,v){function u(){return"undefined"==typeof document?"":document.location.href
}var t=x(6),s=t.hasKey,r=t.isString,q=t.isUndefined,p={collectWindowErrors:!0,debug:!1},o=[].slice,n="?",m=/^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
p.report=function(){function B(c){k(),F.push(c)
}function A(e){for(var c=F.length-1;
c>=0;
--c){F[c]===e&&F.splice(c,1)
}}function z(){j(),F=[]
}function y(G,h){var J=null;
if(!h||p.collectWindowErrors){for(var I in F){if(s(F,I)){try{F[I].apply(null,[G].concat(o.call(arguments,2)))
}catch(H){J=H
}}}if(J){throw J
}}}function l(O,N,M,L,K){var J=null;
if(C){p.computeStackTrace.augmentStackTraceWithInitialElement(C,N,M,O),i()
}else{if(K){J=p.computeStackTrace(K),y(J,!0)
}else{var I,H={url:N,line:M,column:L},G=void 0,e=O;
if(r(O)){var I=O.match(m);
I&&(G=I[1],e=I[2])
}H.func=n,J={name:G,message:e,url:u(),stack:[H]},y(J,!0)
}}return f?f.apply(this,arguments):!1
}function k(){d||(f=window.onerror,window.onerror=l,d=!0)
}function j(){d&&(window.onerror=f,d=!1,f=void 0)
}function i(){var e=C,c=E;
E=null,C=null,D=null,y.apply(null,[e,!1].concat(c))
}function g(h,e){var H=o.call(arguments,1);
if(C){if(D===h){return
}i()
}var G=p.computeStackTrace(h);
if(C=G,D=h,E=H,window.setTimeout(function(){D===h&&i()
},G.incomplete?2000:0),e!==!1){throw h
}}var f,d,F=[],E=null,D=null,C=null;
return g.subscribe=B,g.unsubscribe=A,g.uninstall=z,g
}(),p.computeStackTrace=function(){function f(H){if(!q(H.stack)&&H.stack){for(var G,F,E=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,D=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,C=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,B=H.stack.split("\n"),A=[],z=(/^(.*) is undefined$/.exec(H.message),0),y=B.length;
y>z;
++z){if(G=E.exec(B[z])){var k=G[2]&&-1!==G[2].indexOf("native");
F={url:k?null:G[2],func:G[1]||n,args:k?[G[2]]:[],line:G[3]?+G[3]:null,column:G[4]?+G[4]:null}
}else{if(G=C.exec(B[z])){F={url:G[2],func:G[1]||n,args:[],line:+G[3],column:G[4]?+G[4]:null}
}else{if(!(G=D.exec(B[z]))){continue
}F={url:G[3],func:G[1]||n,args:G[2]?G[2].split(","):[],line:G[4]?+G[4]:null,column:G[5]?+G[5]:null}
}}!F.func&&F.line&&(F.func=n),A.push(F)
}return A.length?(A[0].column||q(H.columnNumber)||(A[0].column=H.columnNumber+1),{name:H.name,message:H.message,url:u(),stack:A}):null
}}function d(j,i,y,l){var k={url:i,line:y};
if(k.url&&k.line){if(j.incomplete=!1,k.func||(k.func=n),j.stack.length>0&&j.stack[0].url===k.url){if(j.stack[0].line===k.line){return !1
}if(!j.stack[0].line&&j.stack[0].func===k.func){return j.stack[0].line=k.line,!1
}}return j.stack.unshift(k),j.partial=!0,!0
}return j.incomplete=!0,!1
}function h(E,D){for(var C,B,A=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,z=[],y={},k=!1,i=h.caller;
i&&!k;
i=i.caller){if(i!==g&&i!==p.report){if(B={url:null,func:n,line:null,column:null},i.name?B.func=i.name:(C=A.exec(i.toString()))&&(B.func=C[1]),"undefined"==typeof B.func){try{B.func=C.input.substring(0,C.input.indexOf("{"))
}catch(e){}}y[""+i]?k=!0:y[""+i]=!0,z.push(B)
}}D&&z.splice(0,D);
var c={name:E.name,message:E.message,url:u(),stack:z};
return d(c,E.sourceURL||E.fileName,E.line||E.lineNumber,E.message||E.description),c
}function g(a,j){var i=null;
j=null==j?0:+j;
try{if(i=f(a)){return i
}}catch(c){if(p.debug){throw c
}}try{if(i=h(a,j+1)){return i
}}catch(c){if(p.debug){throw c
}}return{name:a.name,message:a.message,url:u()}
}return g.augmentStackTraceWithInitialElement=d,g.computeStackTraceFromStackProp=f,g
}(),w.exports=p
},{6:6}]},{},[5])(5)
});
jQuery(document).ready(function(c){c(".weatherWidgetCity").on("click",".weatherLink, .weatherLink + a",function(){c(".weatherWidgetCity h2,.weatherWidgetDropdown").toggleClass("active");
c(".weatherWidgetOverlay").toggle()
});
c(".weatherWidgetDropdown").on("click",".weatherWidgetDropdownSubItems > li",function(g){var h=c(g.target).data("id");
f(h);
c(".weatherWidgetCity h2,.weatherWidgetDropdown").toggleClass("active");
c(".weatherWidgetOverlay").toggle();
c.cookie("tvnz-weather-location",h,{path:"/",expires:365*5})
});
function f(k){var h="auckland";
var j=c(".weatherWidget");
var g=j.data("locations");
if(g!=null&&Object.keys(g).length>0){var i=g[k]||g[h];
if(!i){return
}c(".weatherWidgetIcon").attr("class","").addClass("weatherWidgetIcon").addClass(i.situation);
c(".weatherWidget .weatherWidgetHigh").text(i.max);
c(".weatherWidget .weatherWidgetLow").text(i.min);
c(".weatherWidget .weatherLink p").text(i.name);
if(c(".weatherWidget .weatherWidgetCity .wwFullCity").length>0){c(".weatherWidget .weatherWidgetCity .wwFullCity h2").text(i.name)
}c(".weatherWidgetLocations").val(k||h);
j.removeClass("hide")
}}c(".weatherWidgetLocations").change(function(){var g=c(this).val();
c.cookie("tvnz-weather-location",g,{path:"/",expires:365*5});
f(g)
});
f(c.cookie("tvnz-weather-location"));
if(c("body").data("device-type")=="mobile"){var a=c("body").width(),e=c(".weatherWidget"),d=e.find(".weatherWidgetIconHolder").width(),b=a-40;
transformLeft=a-260;
e.css({width:"260px","-webkit-transform":"translateX("+b+"px)","-moz-transform":"translateX("+b+"px)","-ms-transform":"translateX("+b+"px)","-o-transform":"translateX("+b+"px)",transform:"translateX("+b+"px)"});
c(".weatherWidget:not(.active)").on("click",function(){c(this).addClass("active").css({"-webkit-transform":"translateX("+transformLeft+"px)","-moz-transform":"translateX("+transformLeft+"px)","-ms-transform":"translateX("+transformLeft+"px)","-o-transform":"translateX("+transformLeft+"px)",transform:"translateX("+transformLeft+"px)"});
c(".weatherWidget a").removeClass("inactive");
c(".navigationHolder h1").hide("slow")
});
c(document).on("click",".weatherWidgetCloseButtonContainer",function(){c(".weatherWidget .weatherWidgetAnchorHolder a").addClass("inactive");
c(".weatherWidget").removeClass("active").css({"-webkit-transform":"translateX("+b+"px)","-moz-transform":"translateX("+b+"px)","-ms-transform":"translateX("+b+"px)","-o-transform":"translateX("+b+"px)",transform:"translateX("+b+"px)"});
c(".navigationHolder h1").show("slow")
});
c(document).on("click",".weatherWidgetSelect",function(){var g=function(h){var j=c(h)[0],i=false;
if(document.createEvent){var k=document.createEvent("MouseEvents");
k.initMouseEvent("mousedown",true,true,window,0,0,0,0,0,false,false,false,false,0,null);
i=j.dispatchEvent(k)
}else{if(j.fireEvent){i=j.fireEvent("onmousedown")
}}if(!i){}};
c(function(){g(".weatherWidgetDropdown select")
})
})
}});
$(document).safeReady(function(){var c=$("body");
var b=$(".footerOpen");
var a=$(".upperNav");
var e=b.height();
$(".colorbox").colorbox({scrolling:false});
if($(".weatherWidget").length&&$(".weatherWidgetDropdown").length){$(".weatherWidgetDropdown").css("left",($(".weatherWidget").offset().left-120))
}var j=c.data("device-type");
if(!a.hasClass("mobile")){a.scrollToFixed()
}$(".vertBanner").scrollToFixed({marginTop:a.outerHeight(true),zIndex:9});
$(".tabHeader").not("active").click(function(){var l=$(this).data("tab");
$(this).addClass("active");
$(".tabHeader").not(this).removeClass("active");
$(".colRightTabContainer").removeClass("active");
$(".colRightTabContainer."+l).addClass("active")
});
if(j=="mobile"||j=="tablet"){if(location.href.indexOf("#")>-1){var d=location.href.substr(location.href.indexOf("#")+1)
}if(d){$(".tabHeader").removeClass("active");
$(".colLeftTabContainer").removeClass("active");
$(".tabHeader[data-tab="+d+"]").addClass("active");
$(".colLeftTabContainer[data-tab="+d+"]").addClass("active")
}else{$(".tabHeader").removeClass("active");
$(".colLeftTabContainer").removeClass("active");
$('.colLeftTabContainer[data-tab="news_1"]').addClass("active");
$(".colLeftTabs").find('.tabHeader[data-tab="news_1"]').addClass("active")
}$(".tabHeader").not("active").click(function(){var l=$(this).data("tab");
$(this).addClass("active");
$(".tabHeader").not(this).removeClass("active");
$(".colLeftTabContainer").removeClass("active");
$(".colLeftTabContainer[data-tab="+l+"]").addClass("active");
$(".loadingMoreContent.tile .loadMore").show();
$(".loadingMoreContent.tile .noContent").hide();
$(".loadingMoreContent.tile .error").hide()
})
}function k(){var l=$("input.searchField").serialize();
window.location.assign("../Pages/SearchResults?"+l)
}$("input.searchField").bind("enterKey",k);
$("input").keyup(function(l){if(l.keyCode==13){$(this).trigger("enterKey")
}});
$("#footerYear").text(new Date().getFullYear());
var g=Boolean(c.find(".errorContainer").length);
if(!g){if($("body").data("device-type")!="mobile"){$(".footerOpenMenu").click(function(){$(".containerFoot.closed").animate({bottom:0},200);
var l=$(".containerFoot");
l.not(".closed").animate({bottom:"-"+e+"px"},200);
l.toggleClass("closed")
})
}}$(".footerBackToTopLink").click(function(){$(document).scrollTo(0,1600,{easing:"easeInOutCubic"})
});
setFooterPosition=function(){var m=$(".containerFoot"),n=$("body");
if(m.length>0){var l=$(".footerOpen").height();
if(!g){m.css("bottom","-"+l+"px")
}else{m.stop().fadeTo(10,1)
}}};
if($("body").data("device-type")!="mobile"){setFooterPosition()
}if($("#lowerNavHolder .active").length==0){$("#lowerNavHolder a[href='"+window.location.pathname.replace(/\.\w+$/,"")+"']").first().parent().addClass("active")
}$(".lowerNavDropdown").click(function(){$(this).toggleClass("active");
$(".lowerNavItems .navHolder h2,.lowerNavItems .navHolder p").not(this).removeClass("active");
$(".lowerNavDropdownOverlay").toggle()
});
var f=$(".lowerNavDropdown");
var i=f.width();
$(".navigationHolder .lowerNav .lowerNavItems .navHolder .lowerNavDropdown").css("width",i+"px");
var h=$(".lowerNavSecondaryMenu").width()/2-i/2;
$(".lowerNavSecondaryMenu").css("left","-"+h+"px");
$(".lowerNavDropdown").hover(function(){$("#magicLine").hide()
},function(){$("#magicLine").show()
});
$(".lowerNavDropdownOverlay").click(function(){$(".lowerNavItems .navHolder h2,.lowerNavItems .navHolder p").removeClass("active");
$(".lowerNavDropdownOverlay").toggle()
});
$(".weatherWidgetOverlay").click(function(){$(".weatherWidgetCity h2,.weatherWidgetCity p,.weatherWidgetDropdown").toggleClass("active");
$(".weatherWidgetOverlay").toggle()
});
danceMagicDance=function(){var l,n,o;
var m=$("#magicLine");
if(m.length>0){window.setTimeout(function(){var p=$("#lowerNavHolder");
o=p.find(".active");
if(o.length){m.width(o.width());
m.css("left",o.position().left)
}else{o=p.find("p:first-child");
if(o.length){m.width(o.width());
m.css("left",o.position().left)
}}},1)
}$("#lowerNavHolder h2,#lowerNavHolder p").hover(function(){l=($(this).position().left);
n=$(this).width();
m.stop().animate({left:l,width:n},200)
},function(){m.stop().animate({left:o.position().left,width:o.width()},200)
})
};
danceMagicDance();
$(window).resize(function(){if($(".weatherWidget").length>0&&$(".weatherWidgetDropdown").length>0){$(".weatherWidgetDropdown").css("left",($(".weatherWidget").offset().left-120))
}});
$(".icon.fb").click(function(){window.open(this.href,"targetWindow","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420");
return false
})
});
jQuery(document).ready(function(d){d(".breakingContainer .closePopup").click(function(){d(".breakingContainer.breakNews").hide();
var e=d(".breakingContainer.breakNews").data("breaking-news-id");
amplify.store("closedBreakingNewsArticleIdentifier",e)
});
if(d(".breakingContainer.breakNews").size()&&!d(".weatherContainer").size()){var c=amplify.store("closedBreakingNewsArticleIdentifier");
var a=function(){window.setTimeout(function(){d(".breakingContainer.breakNews").slideDown()
},750)
};
if(!c){a()
}else{var b=d(".breakingContainer.breakNews").data("breaking-news-id");
if(b){if(b!=c){a()
}}else{a()
}}}});
(function(a){a.widget("tvnznews.stamp",{init:function(){var b=this.element;
if(b.data("visibleAt")){b.hide();
setTimeout(function(){b.show()
},moment(b.data("visibleAt")).diff())
}if(b.data("expiresAt")){setTimeout(function(){b.remove()
},moment(b.data("expiresAt")).diff())
}b.on("change.livestamp",function(d,h,g,f){d.preventDefault();
var c=moment();
if(c.diff(f,"seconds")<60){return b.html("now")
}var e=c.diff(f,"minutes");
if(e===1){return b.html(e+" min ago")
}if(e<60){return b.html(e+" min ago")
}if(c.diff(f,"hours")<24){return b.html(f.format("h:mma"))
}b.removeData("livestampdata");
if(c.diff(f,"months")<12){return b.html(f.format("ddd, MMM D"))
}if(c.diff(f,"years")>0){return b.html(f.format("MMM D, YYYY"))
}return b.html(g)
});
if(b.data("time")){b.livestamp(moment(b.data("time")))
}}})
})(jQuery,moment);
jQuery(document).ready(function(a){a(".livestamp").stamp().stamp("init")
});
jQuery(document).ready(function(b){var e=b("html");
b.reject({reject:{all:false,msie:9,safari:6,firefox:29},beforeReject:function(){if(b.browser.className==="msie8"||b.browser.className==="safari2"||b.browser.className==="safari3"||b.browser.className==="safari4"){this.paragraph1="Sorry, your browser is not supported by 1 NEWS NOW. Please download the latest version of Chrome, Internet Explorer, Firefox or Safari."
}},browserShow:false,closeESC:true,close:false,header:"Browser Support",paragraph1:"Just to let you know, 1 NEWS NOW looks and works better on a newer browser. We recommend using the latest version of Chrome, Internet Explorer, Firefox or Safari."});
b(".reject.breaking").appendTo(".partiallySupported");
if(e.hasClass("firefox27")||e.hasClass("safari3")||e.hasClass("msie8")||e.hasClass("msie7")){b(".reject.breaking").parent().addClass("totalFailure");
b(".failOverlay").addClass("active");
b("html").addClass("totalFail")
}if(b(".partiallySupported *").length){b(".partiallySupported .closePopup").click(function(){b(".partiallySupported").hide();
var f=b(".partiallySupported").data("partially-supported-id");
amplify.store("partiallySupportedIdentifierClosed",f)
});
if(b(".partiallySupported").size()&&!b(".weatherContainer").size()){var d=amplify.store("partiallySupportedIdentifierClosed");
var c=function(){window.setTimeout(function(){b(".partiallySupported").slideDown()
},750)
};
if(!d){c()
}else{var a=b(".partiallySupported").data("partially-supported-id");
if(a){if(a!=d){c()
}}else{c()
}}}}});
jQuery(document).ready(function(){var c=jQuery(".burger .burgerMenu"),e=c.height(),f=jQuery(window).height();
if((e+90)>f){c.height(f-100);
c.mCustomScrollbar({mouseWheel:{preventDefault:true}})
}else{c.css("height","auto");
c.mCustomScrollbar({mouseWheel:{preventDefault:true}})
}jQuery(".burger").click(function(){if(jQuery(".burger").hasClass("active")){jQuery(".subMenuRollover,.menuRightRollover,.burger").removeClass("active")
}else{jQuery(".burger").addClass("active")
}jQuery(".burgerOverlay").toggle()
});
if(jQuery("body").data("device-type")!="tablet"&&!jQuery("body").hasClass("device-tablet")){jQuery(".burger").hover(function(){},function(){if(!jQuery(".burger").hasClass("active")){jQuery(".subMenuRollover, .menuRightRollover, .burger").removeClass("active")
}})
}jQuery(window).resize(function(){f=jQuery(window).height();
if((e+90)>f){c.height(f-100);
c.mCustomScrollbar({mouseWheel:{preventDefault:true}})
}else{c.css("height","auto");
c.mCustomScrollbar({mouseWheel:{preventDefault:true}})
}});
var d=jQuery(".mCustomScrollBox"),a=jQuery(".subMenuRollover"),b=jQuery(".menuRightRollover");
a.click(function(g){g.stopPropagation();
if(jQuery(this).hasClass("active")){a.removeClass("active")
}else{a.removeClass("active");
jQuery(this).addClass("active")
}});
b.click(function(g){g.stopPropagation();
b.toggleClass("active")
});
a.hover(function(){if(!jQuery(this).hasClass("active")){a.removeClass("active");
d.stop().css({width:"550px"})
}},function(){if(!jQuery(this).hasClass("active")&&!b.hasClass("active")){d.stop().animate({width:"550px"},1200)
}});
b.hover(function(){if(!jQuery(this).hasClass("active")){d.stop().css({width:"550px"})
}},function(){if(!jQuery(this).hasClass("active")&&!a.hasClass("active")){d.stop().animate({width:"550px"},1200)
}});
jQuery(".burgerOverlay").click(function(){jQuery(".subMenuRollover,.menuRightRollover,.burger").removeClass("active");
jQuery(".burgerOverlay").toggle()
})
});
jQuery(document).ready(function(){if(jQuery("body").hasClass("device-mobile")){var c=(jQuery("body").width()-60);
var e=(jQuery("body").height()+20);
var g;
var a;
var f=false;
jQuery(".burgerMenu").css({width:c+"px"});
jQuery(".containerFoot").css({width:c+"px"});
var b=SpSlidemenu(".containerBody",".burgerMenu",".burger",{direction:"left"});
jQuery(document).on("slidemenu:open",function(h){jQuery(".containerBody,.navHeader,.navigationHolder,.burger,.burgerMenu").addClass("active");
jQuery(".weatherWidget").removeClass("active");
jQuery(".weatherWidget td > a").addClass("inactive");
jQuery(".navigationHolder.active").css({"-webkit-transform":"translate3d("+c+"px,0,0)","-moz-transform":"translate3d("+c+"px,0,0)","-ms-transform":"translate3d("+c+"px,0,0)","-o-transform":"translate3d("+c+"px,0,0)",transform:"translate3d("+c+"px,0,0)"})
});
jQuery(document).on("slidemenu:close",function(h){jQuery(".containerBody,.navHeader,.navigationHolder,.burger,.burgerMenu,.weatherWidget").removeClass("active");
jQuery(".weatherWidget").css({"-webkit-transform":"translate3d("+c+"px,0,0)","-moz-transform":"translate3d("+c+"px,0,0)","-ms-transform":"translate3d("+c+"px,0,0)","-o-transform":"translate3d("+c+"px,0,0)",transform:"translate3d("+c+"px,0,0)"});
jQuery(".weatherWidget td > a").addClass("inactive");
jQuery(".navigationHolder:not(.active)").css({"-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-ms-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"})
});
jQuery(document).on("click",".typeMenu a",function(){var h=window.location.href;
var i=window.location.pathname+this.hash;
if($(this).attr("href")==i){b.slideClose();
var j=this.hash.substring(1);
jQuery(".tabHeader").removeClass("active");
jQuery(".tabHeader[data-tab="+j+"]").addClass("active");
jQuery(".colLeftTabContainer").removeClass("active");
jQuery(".colLeftTabContainer[data-tab="+j+"]").addClass("active");
jQuery(document).scrollTo(0,0)
}});
function d(h){var h=h.parent();
if(h.hasClass("active")){jQuery(".containerFoot").animate({top:g+"px",},300);
h.find(".hideContainer").animate({"max-height":"0px",},300);
h.removeClass("active")
}else{jQuery(".containerFoot").animate({top:a+"px"},300);
h.find(".hideContainer").animate({"max-height":"1000px",},300);
h.addClass("active")
}}jQuery(".subMenuRolloverLink").click(function(h){h.preventDefault();
h.stopPropagation();
d(jQuery(this))
});
jQuery(".showNewsOnTV").click(function(){jQuery(".newsOnTVHolder").addClass("active")
});
jQuery(".newsOnTVHolder .goBack").click(function(){jQuery(".newsOnTVHolder").removeClass("active")
});
jQuery("#footerYear").text(new Date().getFullYear());
jQuery(".footerOpenMenu").click(function(){jQuery(".containerFoot").toggleClass("closed")
});
jQuery(".footerLowerLinksGroup").click(function(){jQuery(".footerLowerLinksGroup").not(this).removeClass("active");
jQuery(this).toggleClass("active")
})
}});
jQuery(document).ready(function(a){a(".headerLogin").click(function(){a(".headerLoginMenu").toggleClass("active")
});
a(".headerLoginMenu a").click(function(){a(".headerLoginMenu").removeClass("active");
a(".headerLogin").hide()
})
});
$(document).ready(function(i){var d=i(window),e=d.scrollTop()+d.height(),c=i(".colLeft"),m=i(".colRight"),k=i(".colRightContainer"),g=i(".colContainer");
if(m&&m.offset()){var n=c.offset().top+10;
var l=g.width(),j=g.offset().left,h=j+l-300;
var f=m.offset().top,b=m.offset().top+m.height();
i(window).resize(function(){l=g.width();
j=g.offset().left;
h=j+l-300;
f=m.offset().top;
b=m.offset().top+m.height();
e=d.scrollTop()+d.height();
a()
});
i(document).scroll(function(){a()
});
var a=function(){b=m.offset().top+m.height()-d.scrollTop();
if(b<e||(b-e)<100){if(l>=i(".colLeft").width()+i(".colRight").width()){m.css({position:"fixed",bottom:"0px","z-index":"8",left:h+"px"});
if(k.css("position")=="fixed"){k.css({left:h+"px"})
}else{k.css({left:"0px"})
}}else{m.css({position:"fixed",bottom:"0px","z-index":"8"})
}}if(m.css("position")=="fixed"){f=m.offset().top-d.scrollTop();
n=c.offset().top-d.scrollTop()+10;
if(n>(f)){m.removeAttr("style")
}}}
}});
$(document).ready(function(i){var y=i("body").data("adKeyMap")||{},w=!y.isDisabled,k=!!y.templateAd,t=[],j={},m={},d=false,n=false;
if(!TVNZ.userdata.user.anonymous){y.commonKeys.seg=TVNZ.userdata.user.adKeys.seg
}window.TVNZ=window.TVNZ||{};
window.TVNZ.ads={TilePageAdInjector:w&&y.templateAd?a:u,MobileAdInjector:w?c:u,MobileStoryAdInjector:w?o:u,StoryPageAdInjector:v,StoryStreamAdInjector:k?l:u,WeatherAdInjector:x};
function p(){if(d){return
}s(function(){e(y.commonKeys);
i.each(y.pageAds,function(B,C){if(i("#"+C.htmlDivId).length===0){return
}f(C)
});
if(k){for(var A=0;
A<y.minimumDynamicAds;
A++){f(i.extend({htmlDivId:"dynslot"+A},y.templateAd))
}}if(TVNZ.userdata&&TVNZ.userdata.user&&TVNZ.userdata.user.userHashValue){googletag.pubads().setPublisherProvidedId(TVNZ.userdata.user.userHashValue)
}googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs(true);
googletag.enableServices()
});
amplify.subscribe("adSlotDefined.billboardAd",h);
i.each(y.disabledHtmlAdDivs,function(B,A){i("#"+A).hide();
i("#"+A+"-container").hide()
});
d=true
}function g(){s(function(){if(!n){var A=[];
i.each(j,function(C,B){if(i("#"+C).length===0){return
}googletag.display(C);
var D=b(C);
A.push(D)
});
r(A);
n=true
}})
}function s(A){return googletag.cmd.push(function(){try{return A()
}catch(B){console.error(B.message,B.stack)
}})
}function h(){var D=new Date().toISOString().slice(0,10).replace(/-/g,""),A="closeBannerAd"+D,E=i("#billboardAd-container"),B=E.find("div.banner-ad-button"),C=E.find(".advert");
if(E.length===0){return
}B.find(".open").click(function(){amplify.store(A,null);
googletag.pubads().refresh();
C.slideDown(250,function(){B.find(".open").hide();
B.find(".close").show()
})
});
B.find(".close").click(function(){amplify.store(A,C.attr("id"));
C.slideUp(function(){C.empty();
B.find(".close").hide();
B.find(".open").show()
})
});
if(amplify.store(A)===C.attr("id")){B.find(".close").click()
}else{B.find(".close").fadeIn(1000)
}}function f(B){var C=_.map(B.sizes,function(D){return[D.width,D.height]
});
var A=googletag.defineSlot(B.slot,C,B.htmlDivId);
if(!A){return
}A.addService(googletag.pubads());
if(B.targetPosition){A.setTargeting("pos",B.targetPosition)
}B.commonKeys&&i.each(B.commonKeys,function(E,D){A.setTargeting(E,D)
});
(googletag.on&&googletag.on("gpt-slot_rendered",function(H,D,L,G,K,E){var F=K.getSlotId(),I=i("#"+F.getDomId()),J=I.hasClass("labelled")&&I.find("div.title").length===0;
I.addClass("height_"+I.height()).addClass("rendered").trigger("rendered").parent(".advert-container").addClass("rendered").trigger("rendered");
I.children().first().css("text-align","center");
if(i("body").data("device-type")=="mobile"){J&&I.prepend('<div class="title">Advertisement</div>')
}else{J&&I.append('<div class="title">Advertisement</div>')
}if(I.css("display")=="none"){i("#"+F.getDomId()+"-container").hide("slow")
}}))||console.error("no dfp extensions found. no advert will be appended");
j[B.htmlDivId]=A;
m[B.htmlDivId]=B;
amplify.publish("adSlotDefined."+B.htmlDivId);
return A
}function z(A){s(function(){if(!n){if(!j[A.htmlDivId]){f(A)
}}else{if(j[A.htmlDivId]){googletag.display(A.htmlDivId)
}else{var D=f(A);
googletag.display(A.htmlDivId);
var B=[];
var C=b(A.htmlDivId);
B.push(C);
pbjs.que.push(function(){pbjs.addAdUnits(B);
pbjs.requestBids({timeout:2000,adUnitCodes:[A.htmlDivId],bidsBackHandler:function(){pbjs.setTargetingForGPTAsync([A.htmlDivId]);
googletag.pubads().refresh([D])
}})
})
}}})
}function r(A){pbjs.que.push(function(){pbjs.addAdUnits(A);
pbjs.requestBids({timeout:2000,bidsBackHandler:function(B){q()
}})
})
}function b(A){var I=m[A];
var H={top:"12535457",mid:"12535461",bot:"12535462",leaderboard:"12538803"};
var G={top:"792280",mid:"792282",bot:"192284",leaderboard:"792278"};
var E={top:15,mid:15,bot:15,leaderboard:2};
var B="14232";
var F="164302";
var D="news";
var J=["sport","weather"];
i.each(J,function(L,K){if(I.slot.indexOf(K)!=-1){D=K;
return false
}});
var C={code:I.htmlDivId,sizes:I.sizes.map(function(K){return[K.width,K.height]
}),bids:[{bidder:"rubicon",params:{accountId:B,siteId:F,zoneId:G[I.targetPosition],sizes:[E[I.targetPosition]],keywords:[D,I.targetPosition],vertical:D,inventory:{vertical:[D],pos:[I.targetPosition]}}},{bidder:"appnexus",params:{placementId:H[I.targetPosition],pos:I.targetPosition,vertical:D,kw_pos:I.targetPosition,kw_vertical:D}}]};
return C
}function e(A){s(function(){var B=googletag.pubads();
t&&i.each(t,function(D,C){B.clearTargeting(C)
});
A&&i.each(A,function(D,C){t.push(D);
B.setTargeting(D,C)
})
})
}function u(){this.injectAds=function(){return[]
};
this.initialAdsRefresh=function(){}
}function a(H,B){p();
var F=H.find(".colSectionHeader").length>0,G=y.firstAdDistance+(F?H.find(".colSectionHeader").outerHeight()+10:0),E=y.nthAdDistance,A=G,C=0,D=0;
this.injectAds=function(J){var I=[];
J.find(B).each(function(P,Q){var M=i(Q),O=D+A,L=parseInt(M.position().top);
if(L>O){var N="dynslot"+C++,K=i('<div data-desired-top="'+O+'" />').prop("id",N).addClass("advert").addClass("labelled").css({position:"absolute",top:O}).appendTo(H);
I.push(K.get(0));
D=O+K.height();
A=E;
z(i.extend({htmlDivId:N},y.templateAd))
}});
return I
};
this.initialAdsRefresh=g
}function c(A){mm_log("MobileTileAdInjector  - gotAParallax="+gotAParallax);
this.injectAds=function(E){var D=E.find(A),C=i(D[0]),F=i(window);
for(var B=1;
B<D.length&&C.offset().top<F.height();
B++){C=i(D[B])
}i('<div class="advert labelled" id="bottomFooterAd"></div><div style="height: 100%;" class="advert" id="div-gpt-ad-parallax"></div>').insertBefore(C);
p()
};
this.initialAdsRefresh=g
}function o(){mm_log("MobileStoryAdInjector");
this.injectAds=function(C){var A=i(".story_body_holder div.paragraph:nth-child(5)");
var B=i('<div class="advert labelled" id="bottomFooterAd"></div><div style="height: 100%; " class="advert" id="div-gpt-ad-parallax"></div>');
if(A.length>0){A.after(B)
}else{C.append(B)
}p()
};
this.initialAdsRefresh=g
}function v(D){p();
var B=this,A=0,E;
function C(G,F){return A?G.templateAd:i.extend({},G.templateAd,{sizes:[{width:300,height:F}]})
}B.injectAds=function(H){var I=H.data("adKeyMap");
if(I.isDisabled||!I.templateAd){return
}var G=_.min(_.pluck(I.templateAd.sizes,"height")),J=C(I,G),F=H.offset().top+H.height();
e(I.commonKeys);
if(E===undefined){E=I.firstAdDistance+H.offset().top
}H.find(".story_body_holder").children().each(function(M,N){var L=i(N);
if(E+G<=F&&L.offset().top>E){if((L.hasClass("right")||L.hasClass("wide"))){E=L.offset().top+L.height()
}else{var K="dynslot"+A++;
i('<div class="tile advert right labelled" id="'+K+'"/>').insertBefore(L);
z(i.extend({htmlDivId:K},J));
E=L.offset().top+G+I.nthAdDistance;
J=I.templateAd
}}})
};
B.initialAdsRefresh=g
}function l(C,B){p();
var A=y.storyStreamAdDistance,G=y.storyStreamAdDistance*2,H=y.storyStreamAdDistance*3,F=0,D,I,E;
i.each(y.pageAds,function(K,J){if(J.htmlDivId==="streamTopAd"){D=J
}if(J.htmlDivId==="streamMidAd"){I=J
}if(J.htmlDivId==="streamBottomAd"){E=J
}});
this.injectAds=function(){i.each(y.disabledHtmlAdDivs,function(K,J){i("#"+J).hide()
});
C.find(B).each(function(K,J){F+=1;
if(F==A&&D){i('<div class="advert" id="streamTopAd" />').insertAfter(J);
z(D);
D=undefined
}else{if(F==G&&I){i('<div class="advert" id="streamMidAd" />').insertAfter(J);
z(I);
I=undefined
}else{if(F==H&&E){i('<div class="advert" id="streamBottomAd" />').insertAfter(J);
z(E);
E=undefined
}}}})
}
}function x(E,D){p();
var C=y.storyStreamAdDistance,B=y.storyStreamAdDistance*2,F=0,A,G;
i.each(y.pageAds,function(I,H){if(H.htmlDivId==="topAd"){A=H
}if(H.htmlDivId==="bottomAd"){G=H
}});
this.injectAds=function(){if(G===undefined){return
}i.each(y.disabledHtmlAdDivs,function(I,H){i("#"+H).hide()
});
E.find(D).each(function(I,H){F+=1;
if(F==C&&A){i('<div class="advert" id="topAd" />').insertBefore(H);
z(A);
A=undefined
}else{if(F==B&&G){i('<div class="advert" id="bottomAd" />').insertAfter(H);
z(G);
G=undefined
}}})
};
this.initialAdsRefresh=g
}function q(){if(pbjs.isSent){return
}pbjs.isSent=true;
googletag.cmd.push(function(){pbjs.que.push(function(){if(gotAParallax=="false"){pbjs.setTargetingForGPTAsync();
googletag.pubads().refresh()
}console.log("sendAdserverRequest");
console.log("gotAParallax="+gotAParallax)
})
})
}});
jQuery(document).ready(function(c){c(".device-desktop .searchField.hidden, .device-tablet .searchField.hidden").hide();
c(".device-desktop .searchContainer, .device-tablet .searchContainer").on("click",".searchIcon:not(.engaged)",function(){c(".searchBox,.oneNewsLiveContainer,.searchField").toggleClass("hidden");
c(".searchField.hidden").animate({opacity:0},800).hide();
c(".searchField").not(".hidden").show().animate({opacity:1},800);
c(".searchBox:not(.hidden)").find(".searchField").focus();
c(".lowerNavItems .navHolder h2").removeClass("active");
c(".searchIcon").addClass("engaged");
c(".searchFieldOverlay,.lowerNavDropdownOverlay").toggle()
}).on("click",".searchIcon.engaged",b);
c(".device-desktop .searchFieldOverlay, .device-tablet .searchFieldOverlay").click(function(){c(".searchBox,.oneNewsLiveContainer,.searchField").toggleClass("hidden");
c(".searchField.hidden").animate({opacity:0},800).hide();
c(".searchField").not(".hidden").show().animate({opacity:1},800);
c(".searchBox:not(.hidden)").find(".searchField").focus();
c(".searchFieldOverlay").toggle();
c(".searchIcon").removeClass("engaged")
});
var a=new Bloodhound({limit:8,datumTokenizer:Bloodhound.tokenizers.obj.whitespace("name"),queryTokenizer:Bloodhound.tokenizers.whitespace,remote:"/api/content/tvnz/news/tags.desktop.v1.json?q=%QUERY"});
a.initialize();
c(".searchBox .searchField").typeahead({minlength:1,highlight:true},{name:"tags",displayKey:"name",source:a.ttAdapter()});
c(".searchBox .searchField").on("typeahead:selected",function(f,d){c(this).data("suggestion",d);
b()
}).on("typeahead:autocompleted",function(f,d){c(this).data("suggestion",d)
}).on("change",function(d){c(this).data("suggestion",null)
}).on("keyup",function(d){if(d.keyCode==13){b()
}});
function b(){var e=c(".searchBox .tt-input"),d=e.data("suggestion"),f=e.typeahead("val");
if(d!=null){window.location.href=d.location
}else{if(f!=null&&f.length>0){window.location.href="/one-news/search?q="+f
}}}});
(function(a){a.widget("tvnzcore.pageFeed",{options:{pageSource:null,pageSelector:".page"},getNextItem:function(){var b=this.element.find(this.options.pageSelector).last();
return b.data("next-page")
}});
a.widget("tvnzcore.arrayFeed",{options:{items:[],index:0},getNextItem:function(){return this.options.items[this.options.index++]
},resetIndex:function(b){var c=this.options.items.indexOf(b);
if(c>=0){this._setOption("index",c+1)
}else{this._setOption("index",0)
}}});
a.widget("tvnzcore.infiniteList",{options:{itemFeed:null,outerContainer:null,loadMore:null,noContent:null,isActive:function(){return true
},error:null,loadBuffer:400,debounceWait:200,loading:false},_create:function(){if(!this.options.outerContainer){this._setOption("outerContainer",a(window))
}this._on(this.options.outerContainer,{scroll:_.debounce(this.infScroll,this.options.debounceWait)});
if(this.options.noContent){this.options.noContent.click(function(){a(document).scrollTo(0,1600,{easing:"easeInOutCubic"})
})
}if(this.options.error){this.options.error.find("a").click(function(){location.reload()
})
}},infLoad:function(){var b;
if(this.options.itemFeed){b=this.options.itemFeed.getNextItem()
}if(b){this.loadItem(b)
}else{this.options.loadMore&&this.options.loadMore.hide();
this.options.noContent&&this.options.noContent.show();
this.options.error&&this.options.error.hide()
}},infScroll:function(){var c=this.element.height(),e=this.options.outerContainer.scrollTop()+this.options.outerContainer.height(),b=e+this.options.loadBuffer,d=this.element.is(":visible");
if(d&&c<b&&this.options.isActive()&&!this.options.loading){this.infLoad()
}},loadItem:function(d,c){var b=this;
b.options.loading=true;
a.ajax({url:d,success:function(g,e,h){var f=a(g);
f.appendTo(b.element);
if(c){c(f)
}b._trigger("itemAdded",null,{item:f});
b.options.loadMore&&b.options.loadMore.show();
b.options.noContent&&b.options.noContent.hide();
b.options.error&&b.options.error.hide()
},error:function(g,e,f){b.options.loadMore&&b.options.loadMore.hide();
b.options.noContent&&b.options.noContent.hide();
b.options.error&&b.options.error.show()
},complete:function(f,e){b.options.loading=false;
if(e==="success"){b.infScroll()
}},dataType:"html"})
}})
})(jQuery);
$(document).ready(function(b){var a=b("body").data("device-type")==="mobile";
!a&&b.widget("tvnznews.tileList",b.tvnzcore.infiniteList,{options:{tileSelector:".tile"},_create:function(){this._super();
this._on(this.element,{tilelistitemadded:function(d,e){var f=this.options.packery;
e.item.find("time.livestamp").stamp().stamp("init");
f.appended(e.item.find(this.options.tileSelector));
var c=this.options.adInjector.injectAds(e.item);
this.stamp(c,f);
e.item.imagesLoaded().always(function(){f.layout()
})
}})
},init:function(){this._setOptions({adInjector:new window.TVNZ.ads.TilePageAdInjector(this.element,this.options.tileSelector)});
var c=this.options.adInjector.injectAds(this.element);
this.options.adInjector.initialAdsRefresh();
this._packer();
this.stamp(c,this.options.packery)
},stamp:function(c,d){if(c.length===0){return
}b.each(c,function(e,f){b(f).css({position:"absolute",left:"0px",top:b(f).data("desiredTop")}).addClass("stamped");
d.stamp(f)
})
},_packer:function(){var c=this.options.packery=new Packery(this.element.get(0),{itemSelector:this.options.tileSelector,columnWidth:300,stamp:".stamped, .colSectionHeader, .index-banner"});
window.TVNZ.ads.packery=c;
googletag.cmd.push(function(){(googletag.on&&googletag.on("gpt-slot_rendered",function(){c.layout()
}))||console.error("no dfp extensions found. packery layout is going to be stuffed")
})
}});
a&&b.widget("tvnznews.tileList",b.tvnzcore.infiniteList,{options:{tileSelector:".tile",isActive:function(){return !this.parentContainer.hasClass("colLeftTabContainer")||this.parentContainer.hasClass("active")
}},_create:function(){this._super();
this._on(this.element,{tilelistitemadded:function(c,d){d.item.find("time.livestamp").stamp().stamp("init")
}})
},init:function(){var c=new window.TVNZ.ads.MobileAdInjector(this.options.tileSelector);
c.injectAds(this.element);
c.initialAdsRefresh()
}});
b.widget("tvnznews.tilePage",{options:{tileFeed:null},_create:function(){var d=this.element.find(".colLeftTabContainer[data-tab=news_1] .tileContainer");
var c=this.element.find(".colLeft");
var e=d.length===0?c:d;
this._setOptions({tileList:e.tileList({parentContainer:e.parent(),itemFeed:this.options.tileFeed,loadMore:this.element.find(".loadingMoreContent.tile .loadMore"),noContent:this.element.find(".loadingMoreContent.tile .noContent"),error:this.element.find(".loadingMoreContent.tile .error")})})
},init:function(){this.options.tileList.tileList("init");
_.defer(function(c){c.tileList("infScroll")
},this.options.tileList);
b("h3.fit").filter(function(c,d){return b(d).height()<35
}).parent().bigtext()
}})
});
jQuery(document).ready(function(a){a(document).on("click",".twitterVideo .overlayContainer",function(c){c.preventDefault();
var b=a(this);
a(this).prev("video").each(function(){var d=this;
a(d).attr("controls",true);
b.hide();
d.play()
})
})
});
(function(){var v=this;
var k=v._;
var I=Array.prototype,g=Object.prototype,n=Function.prototype;
var L=I.push,l=I.slice,c=g.toString,j=g.hasOwnProperty;
var s=Array.isArray,e=Object.keys,J=n.bind,B=Object.create;
var E=function(){};
var P=function(Q){if(Q instanceof P){return Q
}if(!(this instanceof P)){return new P(Q)
}this._wrapped=Q
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=P
}exports._=P
}else{v._=P
}P.VERSION="1.8.3";
var b=function(R,Q,S){if(Q===void 0){return R
}switch(S==null?3:S){case 1:return function(T){return R.call(Q,T)
};
case 2:return function(U,T){return R.call(Q,U,T)
};
case 3:return function(U,T,V){return R.call(Q,U,T,V)
};
case 4:return function(T,V,U,W){return R.call(Q,T,V,U,W)
}
}return function(){return R.apply(Q,arguments)
}
};
var F=function(R,Q,S){if(R==null){return P.identity
}if(P.isFunction(R)){return b(R,Q,S)
}if(P.isObject(R)){return P.matcher(R)
}return P.property(R)
};
P.iteratee=function(R,Q){return F(R,Q,Infinity)
};
var p=function(R,Q){return function(Z){var X=arguments.length;
if(X<2||Z==null){return Z
}for(var T=1;
T<X;
T++){var Y=arguments[T],W=R(Y),S=W.length;
for(var V=0;
V<S;
V++){var U=W[V];
if(!Q||Z[U]===void 0){Z[U]=Y[U]
}}}return Z
}
};
var C=function(R){if(!P.isObject(R)){return{}
}if(B){return B(R)
}E.prototype=R;
var Q=new E;
E.prototype=null;
return Q
};
var M=function(Q){return function(R){return R==null?void 0:R[Q]
}
};
var K=Math.pow(2,53)-1;
var O=M("length");
var D=function(R){var Q=O(R);
return typeof Q=="number"&&Q>=0&&Q<=K
};
P.each=P.forEach=function(U,V,R){V=b(V,R);
var Q,T;
if(D(U)){for(Q=0,T=U.length;
Q<T;
Q++){V(U[Q],Q,U)
}}else{var S=P.keys(U);
for(Q=0,T=S.length;
Q<T;
Q++){V(U[S[Q]],S[Q],U)
}}return U
};
P.map=P.collect=function(V,X,S){X=F(X,S);
var U=!D(V)&&P.keys(V),T=(U||V).length,R=Array(T);
for(var Q=0;
Q<T;
Q++){var W=U?U[Q]:Q;
R[Q]=X(V[W],W,V)
}return R
};
function z(Q){function R(W,Y,S,V,T,U){for(;
T>=0&&T<U;
T+=Q){var X=V?V[T]:T;
S=Y(S,W[X],X,W)
}return S
}return function(X,Y,S,U){Y=b(Y,U,4);
var W=!D(X)&&P.keys(X),V=(W||X).length,T=Q>0?0:V-1;
if(arguments.length<3){S=X[W?W[T]:T];
T+=Q
}return R(X,Y,S,W,T,V)
}
}P.reduce=P.foldl=P.inject=z(1);
P.reduceRight=P.foldr=z(-1);
P.find=P.detect=function(T,Q,S){var R;
if(D(T)){R=P.findIndex(T,Q,S)
}else{R=P.findKey(T,Q,S)
}if(R!==void 0&&R!==-1){return T[R]
}};
P.filter=P.select=function(T,Q,S){var R=[];
Q=F(Q,S);
P.each(T,function(W,U,V){if(Q(W,U,V)){R.push(W)
}});
return R
};
P.reject=function(S,Q,R){return P.filter(S,P.negate(F(Q)),R)
};
P.every=P.all=function(V,Q,S){Q=F(Q,S);
var U=!D(V)&&P.keys(V),T=(U||V).length;
for(var R=0;
R<T;
R++){var W=U?U[R]:R;
if(!Q(V[W],W,V)){return false
}}return true
};
P.some=P.any=function(V,Q,S){Q=F(Q,S);
var U=!D(V)&&P.keys(V),T=(U||V).length;
for(var R=0;
R<T;
R++){var W=U?U[R]:R;
if(Q(V[W],W,V)){return true
}}return false
};
P.contains=P.includes=P.include=function(T,S,Q,R){if(!D(T)){T=P.values(T)
}if(typeof Q!="number"||R){Q=0
}return P.indexOf(T,S,Q)>=0
};
P.invoke=function(S,T){var Q=l.call(arguments,2);
var R=P.isFunction(T);
return P.map(S,function(V){var U=R?T:V[T];
return U==null?U:U.apply(V,Q)
})
};
P.pluck=function(R,Q){return P.map(R,P.property(Q))
};
P.where=function(R,Q){return P.filter(R,P.matcher(Q))
};
P.findWhere=function(R,Q){return P.find(R,P.matcher(Q))
};
P.max=function(T,V,Q){var Y=-Infinity,W=-Infinity,X,S;
if(V==null&&T!=null){T=D(T)?T:P.values(T);
for(var U=0,R=T.length;
U<R;
U++){X=T[U];
if(X>Y){Y=X
}}}else{V=F(V,Q);
P.each(T,function(ab,Z,aa){S=V(ab,Z,aa);
if(S>W||S===-Infinity&&Y===-Infinity){Y=ab;
W=S
}})
}return Y
};
P.min=function(T,V,Q){var Y=Infinity,W=Infinity,X,S;
if(V==null&&T!=null){T=D(T)?T:P.values(T);
for(var U=0,R=T.length;
U<R;
U++){X=T[U];
if(X<Y){Y=X
}}}else{V=F(V,Q);
P.each(T,function(ab,Z,aa){S=V(ab,Z,aa);
if(S<W||S===Infinity&&Y===Infinity){Y=ab;
W=S
}})
}return Y
};
P.shuffle=function(U){var V=D(U)?U:P.values(U);
var T=V.length;
var Q=Array(T);
for(var R=0,S;
R<T;
R++){S=P.random(0,R);
if(S!==R){Q[R]=Q[S]
}Q[S]=V[R]
}return Q
};
P.sample=function(R,S,Q){if(S==null||Q){if(!D(R)){R=P.values(R)
}return R[P.random(R.length-1)]
}return P.shuffle(R).slice(0,Math.max(0,S))
};
P.sortBy=function(R,S,Q){S=F(S,Q);
return P.pluck(P.map(R,function(V,T,U){return{value:V,index:T,criteria:S(V,T,U)}
}).sort(function(W,V){var U=W.criteria;
var T=V.criteria;
if(U!==T){if(U>T||U===void 0){return 1
}if(U<T||T===void 0){return -1
}}return W.index-V.index
}),"value")
};
var q=function(Q){return function(T,U,S){var R={};
U=F(U,S);
P.each(T,function(X,V){var W=U(X,V,T);
Q(R,X,W)
});
return R
}
};
P.groupBy=q(function(Q,S,R){if(P.has(Q,R)){Q[R].push(S)
}else{Q[R]=[S]
}});
P.indexBy=q(function(Q,S,R){Q[R]=S
});
P.countBy=q(function(Q,S,R){if(P.has(Q,R)){Q[R]++
}else{Q[R]=1
}});
P.toArray=function(Q){if(!Q){return[]
}if(P.isArray(Q)){return l.call(Q)
}if(D(Q)){return P.map(Q,P.identity)
}return P.values(Q)
};
P.size=function(Q){if(Q==null){return 0
}return D(Q)?Q.length:P.keys(Q).length
};
P.partition=function(U,Q,S){Q=F(Q,S);
var T=[],R=[];
P.each(U,function(W,V,X){(Q(W,V,X)?T:R).push(W)
});
return[T,R]
};
P.first=P.head=P.take=function(S,R,Q){if(S==null){return void 0
}if(R==null||Q){return S[0]
}return P.initial(S,S.length-R)
};
P.initial=function(S,R,Q){return l.call(S,0,Math.max(0,S.length-(R==null||Q?1:R)))
};
P.last=function(S,R,Q){if(S==null){return void 0
}if(R==null||Q){return S[S.length-1]
}return P.rest(S,Math.max(0,S.length-R))
};
P.rest=P.tail=P.drop=function(S,R,Q){return l.call(S,R==null||Q?1:R)
};
P.compact=function(Q){return P.filter(Q,P.identity)
};
var x=function(W,S,X,aa){var R=[],Z=0;
for(var U=aa||0,Q=O(W);
U<Q;
U++){var Y=W[U];
if(D(Y)&&(P.isArray(Y)||P.isArguments(Y))){if(!S){Y=x(Y,S,X)
}var T=0,V=Y.length;
R.length+=V;
while(T<V){R[Z++]=Y[T++]
}}else{if(!X){R[Z++]=Y
}}}return R
};
P.flatten=function(R,Q){return x(R,Q,false)
};
P.without=function(Q){return P.difference(Q,l.call(arguments,1))
};
P.uniq=P.unique=function(X,T,W,R){if(!P.isBoolean(T)){R=W;
W=T;
T=false
}if(W!=null){W=F(W,R)
}var Z=[];
var Q=[];
for(var V=0,S=O(X);
V<S;
V++){var Y=X[V],U=W?W(Y,V,X):Y;
if(T){if(!V||Q!==U){Z.push(Y)
}Q=U
}else{if(W){if(!P.contains(Q,U)){Q.push(U);
Z.push(Y)
}}else{if(!P.contains(Z,Y)){Z.push(Y)
}}}}return Z
};
P.union=function(){return P.uniq(x(arguments,true,true))
};
P.intersection=function(W){var Q=[];
var V=arguments.length;
for(var S=0,U=O(W);
S<U;
S++){var T=W[S];
if(P.contains(Q,T)){continue
}for(var R=1;
R<V;
R++){if(!P.contains(arguments[R],T)){break
}}if(R===V){Q.push(T)
}}return Q
};
P.difference=function(R){var Q=x(arguments,true,true,1);
return P.filter(R,function(S){return !P.contains(Q,S)
})
};
P.zip=function(){return P.unzip(arguments)
};
P.unzip=function(T){var S=T&&P.max(T,O).length||0;
var Q=Array(S);
for(var R=0;
R<S;
R++){Q[R]=P.pluck(T,R)
}return Q
};
P.object=function(U,R){var Q={};
for(var S=0,T=O(U);
S<T;
S++){if(R){Q[U[S]]=R[S]
}else{Q[U[S][0]]=U[S][1]
}}return Q
};
function u(Q){return function(V,R,T){R=F(R,T);
var U=O(V);
var S=Q>0?0:U-1;
for(;
S>=0&&S<U;
S+=Q){if(R(V[S],S,V)){return S
}}return -1
}
}P.findIndex=u(1);
P.findLastIndex=u(-1);
P.sortedIndex=function(X,V,W,S){W=F(W,S,1);
var U=W(V);
var Q=0,T=O(X);
while(Q<T){var R=Math.floor((Q+T)/2);
if(W(X[R])<U){Q=R+1
}else{T=R
}}return Q
};
function f(Q,R,S){return function(X,W,T){var U=0,V=O(X);
if(typeof T=="number"){if(Q>0){U=T>=0?T:Math.max(T+V,U)
}else{V=T>=0?Math.min(T+1,V):T+V+1
}}else{if(S&&T&&V){T=S(X,W);
return X[T]===W?T:-1
}}if(W!==W){T=R(l.call(X,U,V),P.isNaN);
return T>=0?T+U:-1
}for(T=Q>0?U:V-1;
T>=0&&T<V;
T+=Q){if(X[T]===W){return T
}}return -1
}
}P.indexOf=f(1,P.findIndex,P.sortedIndex);
P.lastIndexOf=f(-1,P.findLastIndex);
P.range=function(V,S,U){if(S==null){S=V||0;
V=0
}U=U||1;
var T=Math.max(Math.ceil((S-V)/U),0);
var R=Array(T);
for(var Q=0;
Q<T;
Q++,V+=U){R[Q]=V
}return R
};
var y=function(V,S,U,W,T){if(!(W instanceof S)){return V.apply(U,T)
}var R=C(V.prototype);
var Q=V.apply(R,T);
if(P.isObject(Q)){return Q
}return R
};
P.bind=function(T,R){if(J&&T.bind===J){return J.apply(T,l.call(arguments,1))
}if(!P.isFunction(T)){throw new TypeError("Bind must be called on a function")
}var Q=l.call(arguments,2);
var S=function(){return y(T,S,R,this,Q.concat(l.call(arguments)))
};
return S
};
P.partial=function(R){var S=l.call(arguments,1);
var Q=function(){var T=0,W=S.length;
var U=Array(W);
for(var V=0;
V<W;
V++){U[V]=S[V]===P?arguments[T++]:S[V]
}while(T<arguments.length){U.push(arguments[T++])
}return y(R,Q,this,this,U)
};
return Q
};
P.bindAll=function(T){var R,S=arguments.length,Q;
if(S<=1){throw new Error("bindAll must be passed function names")
}for(R=1;
R<S;
R++){Q=arguments[R];
T[Q]=P.bind(T[Q],T)
}return T
};
P.memoize=function(R,Q){var S=function(V){var U=S.cache;
var T=""+(Q?Q.apply(this,arguments):V);
if(!P.has(U,T)){U[T]=R.apply(this,arguments)
}return U[T]
};
S.cache={};
return S
};
P.delay=function(R,S){var Q=l.call(arguments,2);
return setTimeout(function(){return R.apply(null,Q)
},S)
};
P.defer=P.partial(P.delay,P,1);
P.throttle=function(R,T,X){var Q,V,Y;
var W=null;
var U=0;
if(!X){X={}
}var S=function(){U=X.leading===false?0:P.now();
W=null;
Y=R.apply(Q,V);
if(!W){Q=V=null
}};
return function(){var Z=P.now();
if(!U&&X.leading===false){U=Z
}var aa=T-(Z-U);
Q=this;
V=arguments;
if(aa<=0||aa>T){if(W){clearTimeout(W);
W=null
}U=Z;
Y=R.apply(Q,V);
if(!W){Q=V=null
}}else{if(!W&&X.trailing!==false){W=setTimeout(S,aa)
}}return Y
}
};
P.debounce=function(S,U,R){var X,W,Q,V,Y;
var T=function(){var Z=P.now()-V;
if(Z<U&&Z>=0){X=setTimeout(T,U-Z)
}else{X=null;
if(!R){Y=S.apply(Q,W);
if(!X){Q=W=null
}}}};
return function(){Q=this;
W=arguments;
V=P.now();
var Z=R&&!X;
if(!X){X=setTimeout(T,U)
}if(Z){Y=S.apply(Q,W);
Q=W=null
}return Y
}
};
P.wrap=function(Q,R){return P.partial(R,Q)
};
P.negate=function(Q){return function(){return !Q.apply(this,arguments)
}
};
P.compose=function(){var Q=arguments;
var R=Q.length-1;
return function(){var T=R;
var S=Q[R].apply(this,arguments);
while(T--){S=Q[T].call(this,S)
}return S
}
};
P.after=function(R,Q){return function(){if(--R<1){return Q.apply(this,arguments)
}}
};
P.before=function(S,R){var Q;
return function(){if(--S>0){Q=R.apply(this,arguments)
}if(S<=1){R=null
}return Q
}
};
P.once=P.partial(P.before,2);
var G=!{toString:null}.propertyIsEnumerable("toString");
var a=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];
function d(U,T){var Q=a.length;
var R=U.constructor;
var S=(P.isFunction(R)&&R.prototype)||g;
var V="constructor";
if(P.has(U,V)&&!P.contains(T,V)){T.push(V)
}while(Q--){V=a[Q];
if(V in U&&U[V]!==S[V]&&!P.contains(T,V)){T.push(V)
}}}P.keys=function(S){if(!P.isObject(S)){return[]
}if(e){return e(S)
}var R=[];
for(var Q in S){if(P.has(S,Q)){R.push(Q)
}}if(G){d(S,R)
}return R
};
P.allKeys=function(S){if(!P.isObject(S)){return[]
}var R=[];
for(var Q in S){R.push(Q)
}if(G){d(S,R)
}return R
};
P.values=function(U){var T=P.keys(U);
var S=T.length;
var Q=Array(S);
for(var R=0;
R<S;
R++){Q[R]=U[T[R]]
}return Q
};
P.mapObject=function(V,X,S){X=F(X,S);
var U=P.keys(V),T=U.length,R={},W;
for(var Q=0;
Q<T;
Q++){W=U[Q];
R[W]=X(V[W],W,V)
}return R
};
P.pairs=function(U){var S=P.keys(U);
var R=S.length;
var T=Array(R);
for(var Q=0;
Q<R;
Q++){T[Q]=[S[Q],U[S[Q]]]
}return T
};
P.invert=function(U){var Q={};
var T=P.keys(U);
for(var R=0,S=T.length;
R<S;
R++){Q[U[T[R]]]=T[R]
}return Q
};
P.functions=P.methods=function(S){var R=[];
for(var Q in S){if(P.isFunction(S[Q])){R.push(Q)
}}return R.sort()
};
P.extend=p(P.allKeys);
P.extendOwn=P.assign=p(P.keys);
P.findKey=function(W,Q,T){Q=F(Q,T);
var V=P.keys(W),S;
for(var R=0,U=V.length;
R<U;
R++){S=V[R];
if(Q(W[S],S,W)){return S
}}};
P.pick=function(S,W,Q){var aa={},T=S,V,Z;
if(T==null){return aa
}if(P.isFunction(W)){Z=P.allKeys(T);
V=b(W,Q)
}else{Z=x(arguments,false,false,1);
V=function(ac,ab,ad){return ab in ad
};
T=Object(T)
}for(var U=0,R=Z.length;
U<R;
U++){var Y=Z[U];
var X=T[Y];
if(V(X,Y,T)){aa[Y]=X
}}return aa
};
P.omit=function(S,T,Q){if(P.isFunction(T)){T=P.negate(T)
}else{var R=P.map(x(arguments,false,false,1),String);
T=function(V,U){return !P.contains(R,U)
}
}return P.pick(S,T,Q)
};
P.defaults=p(P.allKeys,true);
P.create=function(R,S){var Q=C(R);
if(S){P.extendOwn(Q,S)
}return Q
};
P.clone=function(Q){if(!P.isObject(Q)){return Q
}return P.isArray(Q)?Q.slice():P.extend({},Q)
};
P.tap=function(R,Q){Q(R);
return R
};
P.isMatch=function(R,Q){var V=P.keys(Q),U=V.length;
if(R==null){return !U
}var W=Object(R);
for(var T=0;
T<U;
T++){var S=V[T];
if(Q[S]!==W[S]||!(S in W)){return false
}}return true
};
var N=function(Y,X,R,T){if(Y===X){return Y!==0||1/Y===1/X
}if(Y==null||X==null){return Y===X
}if(Y instanceof P){Y=Y._wrapped
}if(X instanceof P){X=X._wrapped
}var V=c.call(Y);
if(V!==c.call(X)){return false
}switch(V){case"[object RegExp]":case"[object String]":return""+Y===""+X;
case"[object Number]":if(+Y!==+Y){return +X!==+X
}return +Y===0?1/+Y===1/X:+Y===+X;
case"[object Date]":case"[object Boolean]":return +Y===+X
}var S=V==="[object Array]";
if(!S){if(typeof Y!="object"||typeof X!="object"){return false
}var W=Y.constructor,U=X.constructor;
if(W!==U&&!(P.isFunction(W)&&W instanceof W&&P.isFunction(U)&&U instanceof U)&&("constructor" in Y&&"constructor" in X)){return false
}}R=R||[];
T=T||[];
var Q=R.length;
while(Q--){if(R[Q]===Y){return T[Q]===X
}}R.push(Y);
T.push(X);
if(S){Q=Y.length;
if(Q!==X.length){return false
}while(Q--){if(!N(Y[Q],X[Q],R,T)){return false
}}}else{var aa=P.keys(Y),Z;
Q=aa.length;
if(P.keys(X).length!==Q){return false
}while(Q--){Z=aa[Q];
if(!(P.has(X,Z)&&N(Y[Z],X[Z],R,T))){return false
}}}R.pop();
T.pop();
return true
};
P.isEqual=function(R,Q){return N(R,Q)
};
P.isEmpty=function(Q){if(Q==null){return true
}if(D(Q)&&(P.isArray(Q)||P.isString(Q)||P.isArguments(Q))){return Q.length===0
}return P.keys(Q).length===0
};
P.isElement=function(Q){return !!(Q&&Q.nodeType===1)
};
P.isArray=s||function(Q){return c.call(Q)==="[object Array]"
};
P.isObject=function(R){var Q=typeof R;
return Q==="function"||Q==="object"&&!!R
};
P.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(Q){P["is"+Q]=function(R){return c.call(R)==="[object "+Q+"]"
}
});
if(!P.isArguments(arguments)){P.isArguments=function(Q){return P.has(Q,"callee")
}
}if(typeof/./!="function"&&typeof Int8Array!="object"){P.isFunction=function(Q){return typeof Q=="function"||false
}
}P.isFinite=function(Q){return isFinite(Q)&&!isNaN(parseFloat(Q))
};
P.isNaN=function(Q){return P.isNumber(Q)&&Q!==+Q
};
P.isBoolean=function(Q){return Q===true||Q===false||c.call(Q)==="[object Boolean]"
};
P.isNull=function(Q){return Q===null
};
P.isUndefined=function(Q){return Q===void 0
};
P.has=function(R,Q){return R!=null&&j.call(R,Q)
};
P.noConflict=function(){v._=k;
return this
};
P.identity=function(Q){return Q
};
P.constant=function(Q){return function(){return Q
}
};
P.noop=function(){};
P.property=M;
P.propertyOf=function(Q){return Q==null?function(){}:function(R){return Q[R]
}
};
P.matcher=P.matches=function(Q){Q=P.extendOwn({},Q);
return function(R){return P.isMatch(R,Q)
}
};
P.times=function(U,T,S){var Q=Array(Math.max(0,U));
T=b(T,S,1);
for(var R=0;
R<U;
R++){Q[R]=T(R)
}return Q
};
P.random=function(R,Q){if(Q==null){Q=R;
R=0
}return R+Math.floor(Math.random()*(Q-R+1))
};
P.now=Date.now||function(){return new Date().getTime()
};
var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var m=P.invert(r);
var w=function(U){var R=function(V){return U[V]
};
var T="(?:"+P.keys(U).join("|")+")";
var S=RegExp(T);
var Q=RegExp(T,"g");
return function(V){V=V==null?"":""+V;
return S.test(V)?V.replace(Q,R):V
}
};
P.escape=w(r);
P.unescape=w(m);
P.result=function(Q,S,T){var R=Q==null?void 0:Q[S];
if(R===void 0){R=T
}return P.isFunction(R)?R.call(Q):R
};
var A=0;
P.uniqueId=function(Q){var R=++A+"";
return Q?Q+R:R
};
P.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var t=/(.)^/;
var h={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"};
var i=/\\|'|\r|\n|\u2028|\u2029/g;
var H=function(Q){return"\\"+h[Q]
};
P.template=function(Z,T,W){if(!T&&W){T=W
}T=P.defaults({},T,P.templateSettings);
var U=RegExp([(T.escape||t).source,(T.interpolate||t).source,(T.evaluate||t).source].join("|")+"|$","g");
var V=0;
var Q="__p+='";
Z.replace(U,function(ab,ac,aa,ae,ad){Q+=Z.slice(V,ad).replace(i,H);
V=ad+ab.length;
if(ac){Q+="'+\n((__t=("+ac+"))==null?'':_.escape(__t))+\n'"
}else{if(aa){Q+="'+\n((__t=("+aa+"))==null?'':__t)+\n'"
}else{if(ae){Q+="';\n"+ae+"\n__p+='"
}}}return ab
});
Q+="';\n";
if(!T.variable){Q="with(obj||{}){\n"+Q+"}\n"
}Q="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+Q+"return __p;\n";
try{var S=new Function(T.variable||"obj","_",Q)
}catch(X){X.source=Q;
throw X
}var Y=function(aa){return S.call(this,aa,P)
};
var R=T.variable||"obj";
Y.source="function("+R+"){\n"+Q+"}";
return Y
};
P.chain=function(R){var Q=P(R);
Q._chain=true;
return Q
};
var o=function(Q,R){return Q._chain?P(R).chain():R
};
P.mixin=function(Q){P.each(P.functions(Q),function(R){var S=P[R]=Q[R];
P.prototype[R]=function(){var T=[this._wrapped];
L.apply(T,arguments);
return o(this,S.apply(P,T))
}
})
};
P.mixin(P);
P.each(["pop","push","reverse","shift","sort","splice","unshift"],function(Q){var R=I[Q];
P.prototype[Q]=function(){var S=this._wrapped;
R.apply(S,arguments);
if((Q==="shift"||Q==="splice")&&S.length===0){delete S[0]
}return o(this,S)
}
});
P.each(["concat","join","slice"],function(Q){var R=I[Q];
P.prototype[Q]=function(){return o(this,R.apply(this._wrapped,arguments))
}
});
P.prototype.value=function(){return this._wrapped
};
P.prototype.valueOf=P.prototype.toJSON=P.prototype.value;
P.prototype.toString=function(){return""+this._wrapped
};
if(typeof define==="function"&&define.amd){define("underscore",[],function(){return P
})
}}.call(this));
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):(b.Popper=a())
}(this,(function(){var O=typeof window!=="undefined"&&typeof document!=="undefined";
var K=["Edge","Trident","Firefox"];
var N=0;
for(var J=0;
J<K.length;
J+=1){if(O&&navigator.userAgent.indexOf(K[J])>=0){N=1;
break
}}function ay(i){var aF=false;
return function(){if(aF){return
}aF=true;
window.Promise.resolve().then(function(){aF=false;
i()
})
}
}function f(i){var aF=false;
return function(){if(!aF){aF=true;
setTimeout(function(){aF=false;
i()
},N)
}}
}var aq=O&&window.Promise;
var aE=aq?ay:f;
function at(i){var aF={};
return i&&aF.toString.call(i)==="[object Function]"
}function E(aF,aG){if(aF.nodeType!==1){return[]
}var i=getComputedStyle(aF,null);
return aG?i[aG]:i
}function ac(i){if(i.nodeName==="HTML"){return i
}return i.parentNode||i.host
}function ae(aH){if(!aH){return document.body
}switch(aH.nodeName){case"HTML":case"BODY":return aH.ownerDocument.body;
case"#document":return aH.body
}var i=E(aH),aI=i.overflow,aG=i.overflowX,aF=i.overflowY;
if(/(auto|scroll|overlay)/.test(aI+aF+aG)){return aH
}return ae(ac(aH))
}var r=O&&!!(window.MSInputMethodContext&&document.documentMode);
var s=O&&/MSIE 10/.test(navigator.userAgent);
function az(i){if(i===11){return r
}if(i===10){return s
}return r||s
}function am(i){if(!i){return document.documentElement
}var aG=az(10)?document.body:null;
var aF=i.offsetParent;
while(aF===aG&&i.nextElementSibling){aF=(i=i.nextElementSibling).offsetParent
}var aH=aF&&aF.nodeName;
if(!aH||aH==="BODY"||aH==="HTML"){return i?i.ownerDocument.documentElement:document.documentElement
}if(["TD","TABLE"].indexOf(aF.nodeName)!==-1&&E(aF,"position")==="static"){return am(aF)
}return aF
}function B(i){var aF=i.nodeName;
if(aF==="BODY"){return false
}return aF==="HTML"||am(i.firstElementChild)===i
}function Y(i){if(i.parentNode!==null){return Y(i.parentNode)
}return i
}function al(aJ,aI){if(!aJ||!aJ.nodeType||!aI||!aI.nodeType){return document.documentElement
}var i=aJ.compareDocumentPosition(aI)&Node.DOCUMENT_POSITION_FOLLOWING;
var aL=i?aJ:aI;
var aF=i?aI:aJ;
var aG=document.createRange();
aG.setStart(aL,0);
aG.setEnd(aF,0);
var aK=aG.commonAncestorContainer;
if(aJ!==aK&&aI!==aK||aL.contains(aF)){if(B(aK)){return aK
}return am(aK)
}var aH=Y(aJ);
if(aH.host){return al(aH.host,aI)
}else{return al(aJ,Y(aI).host)
}}function D(aH){var aG=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top";
var i=aG==="top"?"scrollTop":"scrollLeft";
var aJ=aH.nodeName;
if(aJ==="BODY"||aJ==="HTML"){var aF=aH.ownerDocument.documentElement;
var aI=aH.ownerDocument.scrollingElement||aF;
return aI[i]
}return aH[i]
}function c(aG,aF){var aI=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;
var aH=D(aF,"top");
var aJ=D(aF,"left");
var i=aI?-1:1;
aG.top+=aH*i;
aG.bottom+=aH*i;
aG.left+=aJ*i;
aG.right+=aJ*i;
return aG
}function aj(aH,aG){var aF=aG==="x"?"Left":"Top";
var i=aF==="Left"?"Right":"Bottom";
return parseFloat(aH["border"+aF+"Width"],10)+parseFloat(aH["border"+i+"Width"],10)
}function g(aH,i,aG,aF){return Math.max(i["offset"+aH],i["scroll"+aH],aG["client"+aH],aG["offset"+aH],aG["scroll"+aH],az(10)?aG["offset"+aH]+aF["margin"+(aH==="Height"?"Top":"Left")]+aF["margin"+(aH==="Height"?"Bottom":"Right")]:0)
}function F(){var i=document.body;
var aG=document.documentElement;
var aF=az(10)&&getComputedStyle(aG);
return{height:g("Height",i,aG,aF),width:g("Width",i,aG,aF)}
}var e=function(i,aF){if(!(i instanceof aF)){throw new TypeError("Cannot call a class as a function")
}};
var aB=function(){function i(aI,aG){for(var aF=0;
aF<aG.length;
aF++){var aH=aG[aF];
aH.enumerable=aH.enumerable||false;
aH.configurable=true;
if("value" in aH){aH.writable=true
}Object.defineProperty(aI,aH.key,aH)
}}return function(aH,aF,aG){if(aF){i(aH.prototype,aF)
}if(aG){i(aH,aG)
}return aH
}
}();
var q=function(aG,i,aF){if(i in aG){Object.defineProperty(aG,i,{value:aF,enumerable:true,configurable:true,writable:true})
}else{aG[i]=aF
}return aG
};
var P=Object.assign||function(aI){for(var aG=1;
aG<arguments.length;
aG++){var aH=arguments[aG];
for(var aF in aH){if(Object.prototype.hasOwnProperty.call(aH,aF)){aI[aF]=aH[aF]
}}}return aI
};
function m(i){return P({},i,{right:i.left+i.width,bottom:i.top+i.height})
}function aa(aH){var aK={};
try{if(az(10)){aK=aH.getBoundingClientRect();
var aF=D(aH,"top");
var aG=D(aH,"left");
aK.top+=aF;
aK.left+=aG;
aK.bottom+=aF;
aK.right+=aG
}else{aK=aH.getBoundingClientRect()
}}catch(aI){}var aP={left:aK.left,top:aK.top,width:aK.right-aK.left,height:aK.bottom-aK.top};
var aO=aH.nodeName==="HTML"?F():{};
var i=aO.width||aH.clientWidth||aP.right-aP.left;
var aM=aO.height||aH.clientHeight||aP.bottom-aP.top;
var aL=aH.offsetWidth-i;
var aJ=aH.offsetHeight-aM;
if(aL||aJ){var aN=E(aH);
aL-=aj(aN,"x");
aJ-=aj(aN,"y");
aP.width-=aL;
aP.height-=aJ
}return m(aP)
}function G(aG,aN){var aJ=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;
var i=az(10);
var aK=aN.nodeName==="HTML";
var aL=aa(aG);
var aR=aa(aN);
var aP=ae(aG);
var aQ=E(aN);
var aM=parseFloat(aQ.borderTopWidth,10);
var aO=parseFloat(aQ.borderLeftWidth,10);
if(aJ&&aN.nodeName==="HTML"){aR.top=Math.max(aR.top,0);
aR.left=Math.max(aR.left,0)
}var aI=m({top:aL.top-aR.top-aM,left:aL.left-aR.left-aO,width:aL.width,height:aL.height});
aI.marginTop=0;
aI.marginLeft=0;
if(!i&&aK){var aF=parseFloat(aQ.marginTop,10);
var aH=parseFloat(aQ.marginLeft,10);
aI.top-=aM-aF;
aI.bottom-=aM-aF;
aI.left-=aO-aH;
aI.right-=aO-aH;
aI.marginTop=aF;
aI.marginLeft=aH
}if(i&&!aJ?aN.contains(aP):aN===aP&&aP.nodeName!=="BODY"){aI=c(aI,aN)
}return aI
}function R(aI){var aL=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
var aK=aI.ownerDocument.documentElement;
var aJ=G(aI,aK);
var i=Math.max(aK.clientWidth,window.innerWidth||0);
var aM=Math.max(aK.clientHeight,window.innerHeight||0);
var aF=!aL?D(aK):0;
var aG=!aL?D(aK,"left"):0;
var aH={top:aF-aJ.top+aJ.marginTop,left:aG-aJ.left+aJ.marginLeft,width:i,height:aM};
return m(aH)
}function j(i){var aF=i.nodeName;
if(aF==="BODY"||aF==="HTML"){return false
}if(E(i,"position")==="fixed"){return true
}return j(ac(i))
}function ak(i){if(!i||!i.parentElement||az()){return document.documentElement
}var aF=i.parentElement;
while(aF&&E(aF,"transform")==="none"){aF=aF.parentElement
}return aF||document.documentElement
}function I(aM,aK,aN,aG){var aL=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;
var aI={top:0,left:0};
var i=aL?ak(aM):al(aM,aK);
if(aG==="viewport"){aI=R(i,aL)
}else{var aO=void 0;
if(aG==="scrollParent"){aO=ae(ac(aK));
if(aO.nodeName==="BODY"){aO=aM.ownerDocument.documentElement
}}else{if(aG==="window"){aO=aM.ownerDocument.documentElement
}else{aO=aG
}}var aJ=G(aO,i,aL);
if(aO.nodeName==="HTML"&&!j(i)){var aH=F(),aP=aH.height,aF=aH.width;
aI.top+=aJ.top-aJ.marginTop;
aI.bottom=aP+aJ.top;
aI.left+=aJ.left-aJ.marginLeft;
aI.right=aF+aJ.left
}else{aI=aJ
}}aI.left+=aN;
aI.top+=aN;
aI.right-=aN;
aI.bottom-=aN;
return aI
}function ao(aG){var aF=aG.width,i=aG.height;
return aF*i
}function aC(aM,i,aN,aL,aH){var aO=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;
if(aM.indexOf("auto")===-1){return aM
}var aJ=I(aN,aL,aO,aH);
var aP={top:{width:aJ.width,height:i.top-aJ.top},right:{width:aJ.right-i.right,height:aJ.height},bottom:{width:aJ.width,height:aJ.bottom-i.bottom},left:{width:i.left-aJ.left,height:aJ.height}};
var aI=Object.keys(aP).map(function(aQ){return P({key:aQ},aP[aQ],{area:ao(aP[aQ])})
}).sort(function(aR,aQ){return aQ.area-aR.area
});
var aG=aI.filter(function(aS){var aR=aS.width,aQ=aS.height;
return aR>=aN.clientWidth&&aQ>=aN.clientHeight
});
var aF=aG.length>0?aG[0].key:aI[0].key;
var aK=aM.split("-")[1];
return aF+(aK?"-"+aK:"")
}function o(aH,aF,i){var aG=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;
var aI=aG?ak(aF):al(aF,i);
return G(i,aI,aG)
}function y(aG){var aH=getComputedStyle(aG);
var aF=parseFloat(aH.marginTop)+parseFloat(aH.marginBottom);
var aI=parseFloat(aH.marginLeft)+parseFloat(aH.marginRight);
var i={width:aG.offsetWidth+aI,height:aG.offsetHeight+aF};
return i
}function v(i){var aF={left:"right",right:"left",bottom:"top",top:"bottom"};
return i.replace(/left|right|bottom|top/g,function(aG){return aF[aG]
})
}function Q(aM,aF,aG){aG=aG.split("-")[0];
var aL=y(aM);
var aH={width:aL.width,height:aL.height};
var aN=["right","left"].indexOf(aG)!==-1;
var aJ=aN?"top":"left";
var aK=aN?"left":"top";
var i=aN?"height":"width";
var aI=!aN?"height":"width";
aH[aJ]=aF[aJ]+aF[i]/2-aL[i]/2;
if(aG===aK){aH[aK]=aF[aK]-aL[aI]
}else{aH[aK]=aF[v(aK)]
}return aH
}function aD(i,aF){if(Array.prototype.find){return i.find(aF)
}return i.filter(aF)[0]
}function ai(i,aH,aG){if(Array.prototype.findIndex){return i.findIndex(function(aI){return aI[aH]===aG
})
}var aF=aD(i,function(aI){return aI[aH]===aG
});
return i.indexOf(aF)
}function w(aG,aH,aF){var i=aF===undefined?aG:aG.slice(0,ai(aG,"name",aF));
i.forEach(function(aI){if(aI["function"]){console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
}var aJ=aI["function"]||aI.fn;
if(aI.enabled&&at(aJ)){aH.offsets.popper=m(aH.offsets.popper);
aH.offsets.reference=m(aH.offsets.reference);
aH=aJ(aH,aI)
}});
return aH
}function z(){if(this.state.isDestroyed){return
}var i={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};
i.offsets.reference=o(this.state,this.popper,this.reference,this.options.positionFixed);
i.placement=aC(this.options.placement,i.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);
i.originalPlacement=i.placement;
i.positionFixed=this.options.positionFixed;
i.offsets.popper=Q(this.popper,i.offsets.reference,i.placement);
i.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";
i=w(this.modifiers,i);
if(!this.state.isCreated){this.state.isCreated=true;
this.options.onCreate(i)
}else{this.options.onUpdate(i)
}}function ar(i,aF){return i.some(function(aI){var aH=aI.name,aG=aI.enabled;
return aG&&aH===aF
})
}function t(aK){var aJ=[false,"ms","Webkit","Moz","O"];
var aH=aK.charAt(0).toUpperCase()+aK.slice(1);
for(var aF=0;
aF<aJ.length;
aF++){var aI=aJ[aF];
var aG=aI?""+aI+aH:aK;
if(typeof document.body.style[aG]!=="undefined"){return aG
}}return null
}function b(){this.state.isDestroyed=true;
if(ar(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");
this.popper.style.position="";
this.popper.style.top="";
this.popper.style.left="";
this.popper.style.right="";
this.popper.style.bottom="";
this.popper.style.willChange="";
this.popper.style[t("transform")]=""
}this.disableEventListeners();
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)
}return this
}function X(aF){var i=aF.ownerDocument;
return i?i.defaultView:window
}function V(aJ,aF,aI,aH){var i=aJ.nodeName==="BODY";
var aG=i?aJ.ownerDocument.defaultView:aJ;
aG.addEventListener(aF,aI,{passive:true});
if(!i){V(ae(aG.parentNode),aF,aI,aH)
}aH.push(aG)
}function W(i,aF,aG,aI){aG.updateBound=aI;
X(i).addEventListener("resize",aG.updateBound,{passive:true});
var aH=ae(i);
V(aH,"scroll",aG.updateBound,aG.scrollParents);
aG.scrollElement=aH;
aG.eventsEnabled=true;
return aG
}function d(){if(!this.state.eventsEnabled){this.state=W(this.reference,this.options,this.state,this.scheduleUpdate)
}}function u(i,aF){X(i).removeEventListener("resize",aF.updateBound);
aF.scrollParents.forEach(function(aG){aG.removeEventListener("scroll",aF.updateBound)
});
aF.updateBound=null;
aF.scrollParents=[];
aF.scrollElement=null;
aF.eventsEnabled=false;
return aF
}function x(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);
this.state=u(this.reference,this.state)
}}function p(i){return i!==""&&!isNaN(parseFloat(i))&&isFinite(i)
}function n(i,aF){Object.keys(aF).forEach(function(aH){var aG="";
if(["width","height","top","right","bottom","left"].indexOf(aH)!==-1&&p(aF[aH])){aG="px"
}i.style[aH]=aF[aH]+aG
})
}function A(aF,i){Object.keys(i).forEach(function(aH){var aG=i[aH];
if(aG!==false){aF.setAttribute(aH,i[aH])
}else{aF.removeAttribute(aH)
}})
}function k(i){n(i.instance.popper,i.styles);
A(i.instance.popper,i.attributes);
if(i.arrowElement&&Object.keys(i.arrowStyles).length){n(i.arrowElement,i.arrowStyles)
}return i
}function au(i,aG,aH,aJ,aK){var aF=o(aK,aG,i,aH.positionFixed);
var aI=aC(aH.placement,aF,aG,i,aH.modifiers.flip.boundariesElement,aH.modifiers.flip.padding);
aG.setAttribute("x-placement",aI);
n(aG,{position:aH.positionFixed?"fixed":"absolute"});
return aH
}function ap(aW,aG){var aM=aG.x,aL=aG.y;
var aT=aW.offsets.popper;
var aQ=aD(aW.instance.modifiers,function(aX){return aX.name==="applyStyle"
}).gpuAcceleration;
if(aQ!==undefined){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
}var aP=aQ!==undefined?aQ:aG.gpuAcceleration;
var i=am(aW.instance.popper);
var aR=aa(i);
var aK={position:aT.position};
var aI={left:Math.floor(aT.left),top:Math.round(aT.top),bottom:Math.round(aT.bottom),right:Math.floor(aT.right)};
var aV=aM==="bottom"?"top":"bottom";
var aU=aL==="right"?"left":"right";
var aN=t("transform");
var aH=void 0,aO=void 0;
if(aV==="bottom"){aO=-aR.height+aI.bottom
}else{aO=aI.top
}if(aU==="right"){aH=-aR.width+aI.right
}else{aH=aI.left
}if(aP&&aN){aK[aN]="translate3d("+aH+"px, "+aO+"px, 0)";
aK[aV]=0;
aK[aU]=0;
aK.willChange="transform"
}else{var aF=aV==="bottom"?-1:1;
var aS=aU==="right"?-1:1;
aK[aV]=aO*aF;
aK[aU]=aH*aS;
aK.willChange=aV+", "+aU
}var aJ={"x-placement":aW.placement};
aW.attributes=P({},aJ,aW.attributes);
aW.styles=P({},aK,aW.styles);
aW.arrowStyles=P({},aW.offsets.arrow,aW.arrowStyles);
return aW
}function H(i,aF,aG){var aK=aD(i,function(aM){var aL=aM.name;
return aL===aF
});
var aI=!!aK&&i.some(function(aL){return aL.name===aG&&aL.enabled&&aL.order<aK.order
});
if(!aI){var aH="`"+aF+"`";
var aJ="`"+aG+"`";
console.warn(aJ+" modifier is required by "+aH+" modifier in order to work, be sure to include it before "+aH+"!")
}return aI
}function M(aX,aJ){var aR;
if(!H(aX.instance.modifiers,"arrow","keepTogether")){return aX
}var aS=aJ.element;
if(typeof aS==="string"){aS=aX.instance.popper.querySelector(aS);
if(!aS){return aX
}}else{if(!aX.instance.popper.contains(aS)){console.warn("WARNING: `arrow.element` must be child of its popper element!");
return aX
}}var aQ=aX.placement.split("-")[0];
var aH=aX.offsets,aU=aH.popper,aL=aH.reference;
var aM=["left","right"].indexOf(aQ)!==-1;
var aT=aM?"height":"width";
var aI=aM?"Top":"Left";
var aG=aI.toLowerCase();
var aV=aM?"left":"top";
var aF=aM?"bottom":"right";
var aK=y(aS)[aT];
if(aL[aF]-aK<aU[aG]){aX.offsets.popper[aG]-=aU[aG]-(aL[aF]-aK)
}if(aL[aG]+aK>aU[aF]){aX.offsets.popper[aG]+=aL[aG]+aK-aU[aF]
}aX.offsets.popper=m(aX.offsets.popper);
var aW=aL[aG]+aL[aT]/2-aK/2;
var aO=E(aX.instance.popper);
var i=parseFloat(aO["margin"+aI],10);
var aN=parseFloat(aO["border"+aI+"Width"],10);
var aP=aW-aX.offsets.popper[aG]-i-aN;
aP=Math.max(Math.min(aU[aT]-aK,aP),0);
aX.arrowElement=aS;
aX.offsets.arrow=(aR={},q(aR,aG,Math.round(aP)),q(aR,aV,""),aR);
return aX
}function ad(i){if(i==="end"){return"start"
}else{if(i==="start"){return"end"
}}return i
}var L=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];
var aw=L.slice(3);
function ax(aH){var aF=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
var aG=aw.indexOf(aH);
var i=aw.slice(aG+1).concat(aw.slice(0,aG));
return aF?i.reverse():i
}var av={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};
function ag(aJ,aF){if(ar(aJ.instance.modifiers,"inner")){return aJ
}if(aJ.flipped&&aJ.placement===aJ.originalPlacement){return aJ
}var i=I(aJ.instance.popper,aJ.instance.reference,aF.padding,aF.boundariesElement,aJ.positionFixed);
var aH=aJ.placement.split("-")[0];
var aK=v(aH);
var aG=aJ.placement.split("-")[1]||"";
var aI=[];
switch(aF.behavior){case av.FLIP:aI=[aH,aK];
break;
case av.CLOCKWISE:aI=ax(aH);
break;
case av.COUNTERCLOCKWISE:aI=ax(aH,true);
break;
default:aI=aF.behavior
}aI.forEach(function(aQ,aV){if(aH!==aQ||aI.length===aV+1){return aJ
}aH=aJ.placement.split("-")[0];
aK=v(aH);
var aU=aJ.offsets.popper;
var aM=aJ.offsets.reference;
var aT=Math.floor;
var aS=aH==="left"&&aT(aU.right)>aT(aM.left)||aH==="right"&&aT(aU.left)<aT(aM.right)||aH==="top"&&aT(aU.bottom)>aT(aM.top)||aH==="bottom"&&aT(aU.top)<aT(aM.bottom);
var aL=aT(aU.left)<aT(i.left);
var aN=aT(aU.right)>aT(i.right);
var aX=aT(aU.top)<aT(i.top);
var aP=aT(aU.bottom)>aT(i.bottom);
var aR=aH==="left"&&aL||aH==="right"&&aN||aH==="top"&&aX||aH==="bottom"&&aP;
var aW=["top","bottom"].indexOf(aH)!==-1;
var aO=!!aF.flipVariations&&(aW&&aG==="start"&&aL||aW&&aG==="end"&&aN||!aW&&aG==="start"&&aX||!aW&&aG==="end"&&aP);
if(aS||aR||aO){aJ.flipped=true;
if(aS||aR){aH=aI[aV+1]
}if(aO){aG=ad(aG)
}aJ.placement=aH+(aG?"-"+aG:"");
aJ.offsets.popper=P({},aJ.offsets.popper,Q(aJ.instance.popper,aJ.offsets.reference,aJ.placement));
aJ=w(aJ.instance.modifiers,aJ,"flip")
}});
return aJ
}function Z(aI){var aL=aI.offsets,aM=aL.popper,aG=aL.reference;
var aH=aI.placement.split("-")[0];
var aJ=Math.floor;
var aN=["top","bottom"].indexOf(aH)!==-1;
var aK=aN?"right":"bottom";
var aF=aN?"left":"top";
var i=aN?"width":"height";
if(aM[aK]<aJ(aG[aF])){aI.offsets.popper[aF]=aJ(aG[aF])-aM[i]
}if(aM[aF]>aJ(aG[aK])){aI.offsets.popper[aF]=aJ(aG[aK])
}return aI
}function a(aI,i,aH,aF){var aJ=aI.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
var aL=+aJ[1];
var aM=aJ[2];
if(!aL){return aI
}if(aM.indexOf("%")===0){var aG=void 0;
switch(aM){case"%p":aG=aH;
break;
case"%":case"%r":default:aG=aF
}var aK=m(aG);
return aK[i]/100*aL
}else{if(aM==="vh"||aM==="vw"){var aN=void 0;
if(aM==="vh"){aN=Math.max(document.documentElement.clientHeight,window.innerHeight||0)
}else{aN=Math.max(document.documentElement.clientWidth,window.innerWidth||0)
}return aN/100*aL
}else{return aL
}}}function an(aJ,aL,aG,aF){var aH=[0,0];
var aN=["right","left"].indexOf(aF)!==-1;
var aM=aJ.split(/(\+|\-)/).map(function(aO){return aO.trim()
});
var aK=aM.indexOf(aD(aM,function(aO){return aO.search(/,|\s/)!==-1
}));
if(aM[aK]&&aM[aK].indexOf(",")===-1){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
}var aI=/\s*,\s*|\s+/;
var i=aK!==-1?[aM.slice(0,aK).concat([aM[aK].split(aI)[0]]),[aM[aK].split(aI)[1]].concat(aM.slice(aK+1))]:[aM];
i=i.map(function(aR,aO){var aQ=(aO===1?!aN:aN)?"height":"width";
var aP=false;
return aR.reduce(function(aT,aS){if(aT[aT.length-1]===""&&["+","-"].indexOf(aS)!==-1){aT[aT.length-1]=aS;
aP=true;
return aT
}else{if(aP){aT[aT.length-1]+=aS;
aP=false;
return aT
}else{return aT.concat(aS)
}}},[]).map(function(aS){return a(aS,aQ,aL,aG)
})
});
i.forEach(function(aP,aO){aP.forEach(function(aR,aQ){if(p(aR)){aH[aO]+=aR*(aP[aQ-1]==="-"?-1:1)
}})
});
return aH
}function l(aJ,aK){var aH=aK.offset;
var aI=aJ.placement,aL=aJ.offsets,aM=aL.popper,aG=aL.reference;
var i=aI.split("-")[0];
var aF=void 0;
if(p(+aH)){aF=[+aH,0]
}else{aF=an(aH,aM,aG,i)
}if(i==="left"){aM.top+=aF[0];
aM.left-=aF[1]
}else{if(i==="right"){aM.top+=aF[0];
aM.left+=aF[1]
}else{if(i==="top"){aM.left+=aF[0];
aM.top-=aF[1]
}else{if(i==="bottom"){aM.left+=aF[0];
aM.top+=aF[1]
}}}}aJ.popper=aM;
return aJ
}function h(aM,aR){var aF=aR.boundariesElement||am(aM.instance.popper);
if(aM.instance.reference===aF){aF=am(aF)
}var aP=t("transform");
var aL=aM.instance.popper.style;
var aO=aL.top,aK=aL.left,aH=aL[aP];
aL.top="";
aL.left="";
aL[aP]="";
var aG=I(aM.instance.popper,aM.instance.reference,aR.padding,aF,aM.positionFixed);
aL.top=aO;
aL.left=aK;
aL[aP]=aH;
aR.boundaries=aG;
var aJ=aR.priority;
var aN=aM.offsets.popper;
var i={primary:function aI(aS){var aT=aN[aS];
if(aN[aS]<aG[aS]&&!aR.escapeWithReference){aT=Math.max(aN[aS],aG[aS])
}return q({},aS,aT)
},secondary:function aQ(aS){var aU=aS==="right"?"left":"top";
var aT=aN[aU];
if(aN[aS]>aG[aS]&&!aR.escapeWithReference){aT=Math.min(aN[aU],aG[aS]-(aS==="right"?aN.width:aN.height))
}return q({},aU,aT)
}};
aJ.forEach(function(aT){var aS=["left","top"].indexOf(aT)!==-1?"primary":"secondary";
aN=P({},aN,i[aS](aT))
});
aM.offsets.popper=aN;
return aM
}function U(aI){var aH=aI.placement;
var i=aH.split("-")[0];
var aJ=aH.split("-")[1];
if(aJ){var aL=aI.offsets,aG=aL.reference,aM=aL.popper;
var aN=["bottom","top"].indexOf(i)!==-1;
var aK=aN?"left":"top";
var aF=aN?"width":"height";
var aO={start:q({},aK,aG[aK]),end:q({},aK,aG[aK]+aG[aF]-aM[aF])};
aI.offsets.popper=P({},aM,aO[aJ])
}return aI
}function ah(aG){if(!H(aG.instance.modifiers,"hide","preventOverflow")){return aG
}var i=aG.offsets.reference;
var aF=aD(aG.instance.modifiers,function(aH){return aH.name==="preventOverflow"
}).boundaries;
if(i.bottom<aF.top||i.left>aF.right||i.top>aF.bottom||i.right<aF.left){if(aG.hide===true){return aG
}aG.hide=true;
aG.attributes["x-out-of-boundaries"]=""
}else{if(aG.hide===false){return aG
}aG.hide=false;
aG.attributes["x-out-of-boundaries"]=false
}return aG
}function af(aI){var aH=aI.placement;
var aL=aH.split("-")[0];
var aK=aI.offsets,aG=aK.popper,i=aK.reference;
var aF=["left","right"].indexOf(aL)!==-1;
var aJ=["top","left"].indexOf(aL)===-1;
aG[aF?"left":"top"]=i[aL]-(aJ?aG[aF?"width":"height"]:0);
aI.placement=v(aH);
aI.offsets.popper=m(aG);
return aI
}var ab={shift:{order:100,enabled:true,fn:U},offset:{order:200,enabled:true,fn:l,offset:0},preventOverflow:{order:300,enabled:true,fn:h,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:true,fn:Z},arrow:{order:500,enabled:true,fn:M,element:"[x-arrow]"},flip:{order:600,enabled:true,fn:ag,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:false,fn:af},hide:{order:800,enabled:true,fn:ah},computeStyle:{order:850,enabled:true,fn:ap,gpuAcceleration:true,x:"bottom",y:"right"},applyStyle:{order:900,enabled:true,fn:k,onLoad:au,gpuAcceleration:undefined}};
var S={placement:"bottom",positionFixed:false,eventsEnabled:true,removeOnDestroy:false,onCreate:function C(){},onUpdate:function T(){},modifiers:ab};
var aA=function(){function i(aJ,aK){var aN=this;
var aL=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
e(this,i);
this.scheduleUpdate=function(){return requestAnimationFrame(aN.update)
};
this.update=aE(this.update.bind(this));
this.options=P({},i.Defaults,aL);
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};
this.reference=aJ&&aJ.jquery?aJ[0]:aJ;
this.popper=aK&&aK.jquery?aK[0]:aK;
this.options.modifiers={};
Object.keys(P({},i.Defaults.modifiers,aL.modifiers)).forEach(function(aO){aN.options.modifiers[aO]=P({},i.Defaults.modifiers[aO]||{},aL.modifiers?aL.modifiers[aO]:{})
});
this.modifiers=Object.keys(this.options.modifiers).map(function(aO){return P({name:aO},aN.options.modifiers[aO])
}).sort(function(aP,aO){return aP.order-aO.order
});
this.modifiers.forEach(function(aO){if(aO.enabled&&at(aO.onLoad)){aO.onLoad(aN.reference,aN.popper,aN.options,aO,aN.state)
}});
this.update();
var aM=this.options.eventsEnabled;
if(aM){this.enableEventListeners()
}this.state.eventsEnabled=aM
}aB(i,[{key:"update",value:function aG(){return z.call(this)
}},{key:"destroy",value:function aF(){return b.call(this)
}},{key:"enableEventListeners",value:function aI(){return d.call(this)
}},{key:"disableEventListeners",value:function aH(){return x.call(this)
}}]);
return i
}();
aA.Utils=(typeof window!=="undefined"?window:global).PopperUtils;
aA.placements=L;
aA.Defaults=S;
return aA
})));
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?a(exports,require("jquery"),require("./popper")):typeof define==="function"&&define.amd?define(["exports","jquery","./popper"],a):(a((b.bootstrap={}),b.jQuery,b.Popper))
}(this,(function(r,c,i){c=c&&c.hasOwnProperty("default")?c["default"]:c;
i=i&&i.hasOwnProperty("default")?i["default"]:i;
function e(v,t){for(var s=0;
s<t.length;
s++){var u=t[s];
u.enumerable=u.enumerable||false;
u.configurable=true;
if("value" in u){u.writable=true
}Object.defineProperty(v,u.key,u)
}}function l(u,s,t){if(s){e(u.prototype,s)
}if(t){e(u,t)
}return u
}function k(){k=Object.assign||function(v){for(var t=1;
t<arguments.length;
t++){var u=arguments[t];
for(var s in u){if(Object.prototype.hasOwnProperty.call(u,s)){v[s]=u[s]
}}}return v
};
return k.apply(this,arguments)
}function j(t,s){t.prototype=Object.create(s.prototype);
t.prototype.constructor=t;
t.__proto__=s
}var d=function(D){var A=false;
var x=1000000;
function I(J){return{}.toString.call(J).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}function v(){return{bindType:A.end,delegateType:A.end,handle:function J(K){if(D(K.target).is(this)){return K.handleObj.handler.apply(this,arguments)
}return undefined
}}
}function s(){if(typeof window!=="undefined"&&window.QUnit){return false
}return{end:"transitionend"}
}function y(K){var L=this;
var J=false;
D(this).one(G.TRANSITION_END,function(){J=true
});
setTimeout(function(){if(!J){G.triggerTransitionEnd(L)
}},K);
return this
}function H(){A=s();
D.fn.emulateTransitionEnd=y;
if(G.supportsTransitionEnd()){D.event.special[G.TRANSITION_END]=v()
}}function t(J){J=typeof D.escapeSelector==="function"?D.escapeSelector(J).substr(1):J.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1");
return J
}var G={TRANSITION_END:"bsTransitionEnd",getUID:function B(J){do{J+=~~(Math.random()*x)
}while(document.getElementById(J));
return J
},getSelectorFromElement:function C(K){var J=K.getAttribute("data-target");
if(!J||J==="#"){J=K.getAttribute("href")||""
}if(J.charAt(0)==="#"){J=t(J)
}try{var M=D(document).find(J);
return M.length>0?J:null
}catch(L){return null
}},reflow:function w(J){return J.offsetHeight
},triggerTransitionEnd:function F(J){D(J).trigger(A.end)
},supportsTransitionEnd:function E(){return Boolean(A)
},isElement:function z(J){return(J[0]||J).nodeType
},typeCheckConfig:function u(J,K,N){for(var M in N){if(Object.prototype.hasOwnProperty.call(N,M)){var P=N[M];
var L=K[M];
var O=L&&G.isElement(L)?"element":I(L);
if(!new RegExp(P).test(O)){throw new Error(J.toUpperCase()+": "+('Option "'+M+'" provided type "'+O+'" ')+('but expected type "'+P+'".'))
}}}}};
H();
return G
}(c);
var g=function(x){var C="alert";
var D="4.0.0";
var B="bs.alert";
var u="."+B;
var A=".data-api";
var t=x.fn[C];
var w=150;
var s={DISMISS:'[data-dismiss="alert"]'};
var z={CLOSE:"close"+u,CLOSED:"closed"+u,CLICK_DATA_API:"click"+u+A};
var y={ALERT:"alert",FADE:"fade",SHOW:"show"};
var v=function(){function J(P){this._element=P
}var K=J.prototype;
K.close=function O(Q){Q=Q||this._element;
var P=this._getRootElement(Q);
var R=this._triggerCloseEvent(P);
if(R.isDefaultPrevented()){return
}this._removeElement(P)
};
K.dispose=function M(){x.removeData(this._element,B);
this._element=null
};
K._getRootElement=function N(Q){var P=d.getSelectorFromElement(Q);
var R=false;
if(P){R=x(P)[0]
}if(!R){R=x(Q).closest("."+y.ALERT)[0]
}return R
};
K._triggerCloseEvent=function G(P){var Q=x.Event(z.CLOSE);
x(P).trigger(Q);
return Q
};
K._removeElement=function I(P){var Q=this;
x(P).removeClass(y.SHOW);
if(!d.supportsTransitionEnd()||!x(P).hasClass(y.FADE)){this._destroyElement(P);
return
}x(P).one(d.TRANSITION_END,function(R){return Q._destroyElement(P,R)
}).emulateTransitionEnd(w)
};
K._destroyElement=function H(P){x(P).detach().trigger(z.CLOSED).remove()
};
J._jQueryInterface=function F(P){return this.each(function(){var Q=x(this);
var R=Q.data(B);
if(!R){R=new J(this);
Q.data(B,R)
}if(P==="close"){R[P](this)
}})
};
J._handleDismiss=function L(P){return function(Q){if(Q){Q.preventDefault()
}P.close(this)
}
};
l(J,null,[{key:"VERSION",get:function E(){return D
}}]);
return J
}();
x(document).on(z.CLICK_DATA_API,s.DISMISS,v._handleDismiss(new v()));
x.fn[C]=v._jQueryInterface;
x.fn[C].Constructor=v;
x.fn[C].noConflict=function(){x.fn[C]=t;
return v._jQueryInterface
};
return v
}(c);
var h=function(w){var B="button";
var C="4.0.0";
var A="bs.button";
var u="."+A;
var z=".data-api";
var t=w.fn[B];
var x={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"};
var s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"};
var y={CLICK_DATA_API:"click"+u+z,FOCUS_BLUR_DATA_API:"focus"+u+z+" "+("blur"+u+z)};
var v=function(){function F(J){this._element=J
}var E=F.prototype;
E.toggle=function D(){var M=true;
var L=true;
var J=w(this._element).closest(s.DATA_TOGGLE)[0];
if(J){var K=w(this._element).find(s.INPUT)[0];
if(K){if(K.type==="radio"){if(K.checked&&w(this._element).hasClass(x.ACTIVE)){M=false
}else{var N=w(J).find(s.ACTIVE)[0];
if(N){w(N).removeClass(x.ACTIVE)
}}}if(M){if(K.hasAttribute("disabled")||J.hasAttribute("disabled")||K.classList.contains("disabled")||J.classList.contains("disabled")){return
}K.checked=!w(this._element).hasClass(x.ACTIVE);
w(K).trigger("change")
}K.focus();
L=false
}}if(L){this._element.setAttribute("aria-pressed",!w(this._element).hasClass(x.ACTIVE))
}if(M){w(this._element).toggleClass(x.ACTIVE)
}};
E.dispose=function I(){w.removeData(this._element,A);
this._element=null
};
F._jQueryInterface=function H(J){return this.each(function(){var K=w(this).data(A);
if(!K){K=new F(this);
w(this).data(A,K)
}if(J==="toggle"){K[J]()
}})
};
l(F,null,[{key:"VERSION",get:function G(){return C
}}]);
return F
}();
w(document).on(y.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(E){E.preventDefault();
var D=E.target;
if(!w(D).hasClass(x.BUTTON)){D=w(D).closest(s.BUTTON)
}v._jQueryInterface.call(w(D),"toggle")
}).on(y.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(E){var D=w(E.target).closest(s.BUTTON)[0];
w(D).toggleClass(x.FOCUS,/^focus(in)?$/.test(E.type))
});
w.fn[B]=v._jQueryInterface;
w.fn[B].Constructor=v;
w.fn[B].noConflict=function(){w.fn[B]=t;
return v._jQueryInterface
};
return v
}(c);
var m=function(A){var y="carousel";
var G="4.0.0";
var x="bs.carousel";
var B="."+x;
var t=".data-api";
var u=A.fn[y];
var C=600;
var I=37;
var D=39;
var w=500;
var z={interval:5000,keyboard:true,slide:false,pause:"hover",wrap:true};
var H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"};
var s={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"};
var J={SLIDE:"slide"+B,SLID:"slid"+B,KEYDOWN:"keydown"+B,MOUSEENTER:"mouseenter"+B,MOUSELEAVE:"mouseleave"+B,TOUCHEND:"touchend"+B,LOAD_DATA_API:"load"+B+t,CLICK_DATA_API:"click"+B+t};
var v={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"};
var E={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'};
var F=function(){function Z(af,ae){this._items=null;
this._interval=null;
this._activeElement=null;
this._isPaused=false;
this._isSliding=false;
this.touchTimeout=null;
this._config=this._getConfig(ae);
this._element=A(af)[0];
this._indicatorsElement=A(this._element).find(E.INDICATORS)[0];
this._addEventListeners()
}var O=Z.prototype;
O.next=function X(){if(!this._isSliding){this._slide(s.NEXT)
}};
O.nextWhenVisible=function ad(){if(!document.hidden&&A(this._element).is(":visible")&&A(this._element).css("visibility")!=="hidden"){this.next()
}};
O.prev=function W(){if(!this._isSliding){this._slide(s.PREV)
}};
O.pause=function Q(ae){if(!ae){this._isPaused=true
}if(A(this._element).find(E.NEXT_PREV)[0]&&d.supportsTransitionEnd()){d.triggerTransitionEnd(this._element);
this.cycle(true)
}clearInterval(this._interval);
this._interval=null
};
O.cycle=function T(ae){if(!ae){this._isPaused=false
}if(this._interval){clearInterval(this._interval);
this._interval=null
}if(this._config.interval&&!this._isPaused){this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval)
}};
O.to=function M(af){var ah=this;
this._activeElement=A(this._element).find(E.ACTIVE_ITEM)[0];
var ae=this._getItemIndex(this._activeElement);
if(af>this._items.length-1||af<0){return
}if(this._isSliding){A(this._element).one(J.SLID,function(){return ah.to(af)
});
return
}if(ae===af){this.pause();
this.cycle();
return
}var ag=af>ae?s.NEXT:s.PREV;
this._slide(ag,this._items[af])
};
O.dispose=function ac(){A(this._element).off(B);
A.removeData(this._element,x);
this._items=null;
this._config=null;
this._element=null;
this._interval=null;
this._isPaused=null;
this._isSliding=null;
this._activeElement=null;
this._indicatorsElement=null
};
O._getConfig=function P(ae){ae=k({},z,ae);
d.typeCheckConfig(y,ae,H);
return ae
};
O._addEventListeners=function N(){var ae=this;
if(this._config.keyboard){A(this._element).on(J.KEYDOWN,function(af){return ae._keydown(af)
})
}if(this._config.pause==="hover"){A(this._element).on(J.MOUSEENTER,function(af){return ae.pause(af)
}).on(J.MOUSELEAVE,function(af){return ae.cycle(af)
});
if("ontouchstart" in document.documentElement){A(this._element).on(J.TOUCHEND,function(){ae.pause();
if(ae.touchTimeout){clearTimeout(ae.touchTimeout)
}ae.touchTimeout=setTimeout(function(af){return ae.cycle(af)
},w+ae._config.interval)
})
}}};
O._keydown=function K(ae){if(/input|textarea/i.test(ae.target.tagName)){return
}switch(ae.which){case I:ae.preventDefault();
this.prev();
break;
case D:ae.preventDefault();
this.next();
break;
default:}};
O._getItemIndex=function ab(ae){this._items=A.makeArray(A(ae).parent().find(E.ITEM));
return this._items.indexOf(ae)
};
O._getItemByDirection=function L(ak,af){var ah=ak===s.NEXT;
var aj=ak===s.PREV;
var am=this._getItemIndex(af);
var ai=this._items.length-1;
var ag=aj&&am===0||ah&&am===ai;
if(ag&&!this._config.wrap){return af
}var al=ak===s.PREV?-1:1;
var ae=(am+al)%this._items.length;
return ae===-1?this._items[this._items.length-1]:this._items[ae]
};
O._triggerSlideEvent=function Y(af,ai){var ag=this._getItemIndex(af);
var ah=this._getItemIndex(A(this._element).find(E.ACTIVE_ITEM)[0]);
var ae=A.Event(J.SLIDE,{relatedTarget:af,direction:ai,from:ah,to:ag});
A(this._element).trigger(ae);
return ae
};
O._setActiveIndicatorElement=function R(af){if(this._indicatorsElement){A(this._indicatorsElement).find(E.ACTIVE).removeClass(v.ACTIVE);
var ae=this._indicatorsElement.children[this._getItemIndex(af)];
if(ae){A(ae).addClass(v.ACTIVE)
}}};
O._slide=function V(ap,ak){var al=this;
var af=A(this._element).find(E.ACTIVE_ITEM)[0];
var ao=this._getItemIndex(af);
var an=ak||af&&this._getItemByDirection(ap,af);
var aj=this._getItemIndex(an);
var am=Boolean(this._interval);
var ai;
var ah;
var ag;
if(ap===s.NEXT){ai=v.LEFT;
ah=v.NEXT;
ag=s.LEFT
}else{ai=v.RIGHT;
ah=v.PREV;
ag=s.RIGHT
}if(an&&A(an).hasClass(v.ACTIVE)){this._isSliding=false;
return
}var ae=this._triggerSlideEvent(an,ag);
if(ae.isDefaultPrevented()){return
}if(!af||!an){return
}this._isSliding=true;
if(am){this.pause()
}this._setActiveIndicatorElement(an);
var aq=A.Event(J.SLID,{relatedTarget:an,direction:ag,from:ao,to:aj});
if(d.supportsTransitionEnd()&&A(this._element).hasClass(v.SLIDE)){A(an).addClass(ah);
d.reflow(an);
A(af).addClass(ai);
A(an).addClass(ai);
A(af).one(d.TRANSITION_END,function(){A(an).removeClass(ai+" "+ah).addClass(v.ACTIVE);
A(af).removeClass(v.ACTIVE+" "+ah+" "+ai);
al._isSliding=false;
setTimeout(function(){return A(al._element).trigger(aq)
},0)
}).emulateTransitionEnd(C)
}else{A(af).removeClass(v.ACTIVE);
A(an).addClass(v.ACTIVE);
this._isSliding=false;
A(this._element).trigger(aq)
}if(am){this.cycle()
}};
Z._jQueryInterface=function S(ae){return this.each(function(){var ah=A(this).data(x);
var ag=k({},z,A(this).data());
if(typeof ae==="object"){ag=k({},ag,ae)
}var af=typeof ae==="string"?ae:ag.slide;
if(!ah){ah=new Z(this,ag);
A(this).data(x,ah)
}if(typeof ae==="number"){ah.to(ae)
}else{if(typeof af==="string"){if(typeof ah[af]==="undefined"){throw new TypeError('No method named "'+af+'"')
}ah[af]()
}else{if(ag.interval){ah.pause();
ah.cycle()
}}}})
};
Z._dataApiClickHandler=function U(ag){var ae=d.getSelectorFromElement(this);
if(!ae){return
}var ai=A(ae)[0];
if(!ai||!A(ai).hasClass(v.CAROUSEL)){return
}var af=k({},A(ai).data(),A(this).data());
var ah=this.getAttribute("data-slide-to");
if(ah){af.interval=false
}Z._jQueryInterface.call(A(ai),af);
if(ah){A(ai).data(x).to(ah)
}ag.preventDefault()
};
l(Z,null,[{key:"VERSION",get:function aa(){return G
}},{key:"Default",get:function aa(){return z
}}]);
return Z
}();
A(document).on(J.CLICK_DATA_API,E.DATA_SLIDE,F._dataApiClickHandler);
A(window).on(J.LOAD_DATA_API,function(){A(E.DATA_RIDE).each(function(){var K=A(this);
F._jQueryInterface.call(K,K.data())
})
});
A.fn[y]=F._jQueryInterface;
A.fn[y].Constructor=F;
A.fn[y].noConflict=function(){A.fn[y]=u;
return F._jQueryInterface
};
return F
}(c);
var b=function(z){var F="collapse";
var G="4.0.0";
var D="bs.collapse";
var u="."+D;
var C=".data-api";
var t=z.fn[F];
var x=600;
var w={toggle:true,parent:""};
var E={toggle:"boolean",parent:"(string|element)"};
var B={SHOW:"show"+u,SHOWN:"shown"+u,HIDE:"hide"+u,HIDDEN:"hidden"+u,CLICK_DATA_API:"click"+u+C};
var A={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"};
var y={WIDTH:"width",HEIGHT:"height"};
var s={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'};
var v=function(){function N(Y,W){this._isTransitioning=false;
this._element=Y;
this._config=this._getConfig(W);
this._triggerArray=z.makeArray(z('[data-toggle="collapse"][href="#'+Y.id+'"],'+('[data-toggle="collapse"][data-target="#'+Y.id+'"]')));
var aa=z(s.DATA_TOGGLE);
for(var X=0;
X<aa.length;
X++){var Z=aa[X];
var V=d.getSelectorFromElement(Z);
if(V!==null&&z(V).filter(Y).length>0){this._selector=V;
this._triggerArray.push(Z)
}}this._parent=this._config.parent?this._getParent():null;
if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray)
}if(this._config.toggle){this.toggle()
}}var P=N.prototype;
P.toggle=function M(){if(z(this._element).hasClass(A.SHOW)){this.hide()
}else{this.show()
}};
P.show=function S(){var ac=this;
if(this._isTransitioning||z(this._element).hasClass(A.SHOW)){return
}var aa;
var X;
if(this._parent){aa=z.makeArray(z(this._parent).find(s.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'));
if(aa.length===0){aa=null
}}if(aa){X=z(aa).not(this._selector).data(D);
if(X&&X._isTransitioning){return
}}var W=z.Event(B.SHOW);
z(this._element).trigger(W);
if(W.isDefaultPrevented()){return
}if(aa){N._jQueryInterface.call(z(aa).not(this._selector),"hide");
if(!X){z(aa).data(D,null)
}}var ab=this._getDimension();
z(this._element).removeClass(A.COLLAPSE).addClass(A.COLLAPSING);
this._element.style[ab]=0;
if(this._triggerArray.length>0){z(this._triggerArray).removeClass(A.COLLAPSED).attr("aria-expanded",true)
}this.setTransitioning(true);
var V=function V(){z(ac._element).removeClass(A.COLLAPSING).addClass(A.COLLAPSE).addClass(A.SHOW);
ac._element.style[ab]="";
ac.setTransitioning(false);
z(ac._element).trigger(B.SHOWN)
};
if(!d.supportsTransitionEnd()){V();
return
}var Z=ab[0].toUpperCase()+ab.slice(1);
var Y="scroll"+Z;
z(this._element).one(d.TRANSITION_END,V).emulateTransitionEnd(x);
this._element.style[ab]=this._element[Y]+"px"
};
P.hide=function O(){var ab=this;
if(this._isTransitioning||!z(this._element).hasClass(A.SHOW)){return
}var X=z.Event(B.HIDE);
z(this._element).trigger(X);
if(X.isDefaultPrevented()){return
}var ac=this._getDimension();
this._element.style[ac]=this._element.getBoundingClientRect()[ac]+"px";
d.reflow(this._element);
z(this._element).addClass(A.COLLAPSING).removeClass(A.COLLAPSE).removeClass(A.SHOW);
if(this._triggerArray.length>0){for(var aa=0;
aa<this._triggerArray.length;
aa++){var Z=this._triggerArray[aa];
var V=d.getSelectorFromElement(Z);
if(V!==null){var Y=z(V);
if(!Y.hasClass(A.SHOW)){z(Z).addClass(A.COLLAPSED).attr("aria-expanded",false)
}}}}this.setTransitioning(true);
var W=function W(){ab.setTransitioning(false);
z(ab._element).removeClass(A.COLLAPSING).addClass(A.COLLAPSE).trigger(B.HIDDEN)
};
this._element.style[ac]="";
if(!d.supportsTransitionEnd()){W();
return
}z(this._element).one(d.TRANSITION_END,W).emulateTransitionEnd(x)
};
P.setTransitioning=function K(V){this._isTransitioning=V
};
P.dispose=function T(){z.removeData(this._element,D);
this._config=null;
this._parent=null;
this._element=null;
this._triggerArray=null;
this._isTransitioning=null
};
P._getConfig=function R(V){V=k({},w,V);
V.toggle=Boolean(V.toggle);
d.typeCheckConfig(F,V,E);
return V
};
P._getDimension=function U(){var V=z(this._element).hasClass(y.WIDTH);
return V?y.WIDTH:y.HEIGHT
};
P._getParent=function J(){var X=this;
var W=null;
if(d.isElement(this._config.parent)){W=this._config.parent;
if(typeof this._config.parent.jquery!=="undefined"){W=this._config.parent[0]
}}else{W=z(this._config.parent)[0]
}var V='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';
z(W).find(V).each(function(Z,Y){X._addAriaAndCollapsedClass(N._getTargetFromElement(Y),[Y])
});
return W
};
P._addAriaAndCollapsedClass=function L(X,V){if(X){var W=z(X).hasClass(A.SHOW);
if(V.length>0){z(V).toggleClass(A.COLLAPSED,!W).attr("aria-expanded",W)
}}};
N._getTargetFromElement=function Q(W){var V=d.getSelectorFromElement(W);
return V?z(V)[0]:null
};
N._jQueryInterface=function I(V){return this.each(function(){var Y=z(this);
var X=Y.data(D);
var W=k({},w,Y.data(),typeof V==="object"&&V);
if(!X&&W.toggle&&/show|hide/.test(V)){W.toggle=false
}if(!X){X=new N(this,W);
Y.data(D,X)
}if(typeof V==="string"){if(typeof X[V]==="undefined"){throw new TypeError('No method named "'+V+'"')
}X[V]()
}})
};
l(N,null,[{key:"VERSION",get:function H(){return G
}},{key:"Default",get:function H(){return w
}}]);
return N
}();
z(document).on(B.CLICK_DATA_API,s.DATA_TOGGLE,function(J){if(J.currentTarget.tagName==="A"){J.preventDefault()
}var I=z(this);
var H=d.getSelectorFromElement(this);
z(H).each(function(){var K=z(this);
var M=K.data(D);
var L=M?"toggle":I.data();
v._jQueryInterface.call(K,L)
})
});
z.fn[F]=v._jQueryInterface;
z.fn[F].Constructor=v;
z.fn[F].noConflict=function(){z.fn[F]=t;
return v._jQueryInterface
};
return v
}(c);
var p=function(D){var z="dropdown";
var I="4.0.0";
var y="bs.dropdown";
var F="."+y;
var u=".data-api";
var v=D.fn[z];
var t=27;
var x=32;
var A=9;
var C=38;
var M=40;
var s=3;
var K=new RegExp(C+"|"+M+"|"+t);
var L={HIDE:"hide"+F,HIDDEN:"hidden"+F,SHOW:"show"+F,SHOWN:"shown"+F,CLICK:"click"+F,CLICK_DATA_API:"click"+F+u,KEYDOWN_DATA_API:"keydown"+F+u,KEYUP_DATA_API:"keyup"+F+u};
var w={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"};
var G={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"};
var E={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"};
var B={offset:0,flip:true,boundary:"scrollParent"};
var J={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"};
var H=function(){function Z(ae,ad){this._element=ae;
this._popper=null;
this._config=this._getConfig(ad);
this._menu=this._getMenuElement();
this._inNavbar=this._detectNavbar();
this._addEventListeners()
}var W=Z.prototype;
W.toggle=function T(){if(this._element.disabled||D(this._element).hasClass(w.DISABLED)){return
}var ah=Z._getParentFromElement(this._element);
var ag=D(this._menu).hasClass(w.SHOW);
Z._clearMenus();
if(ag){return
}var ad={relatedTarget:this._element};
var af=D.Event(L.SHOW,ad);
D(ah).trigger(af);
if(af.isDefaultPrevented()){return
}if(!this._inNavbar){if(typeof i==="undefined"){throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)")
}var ae=this._element;
if(D(ah).hasClass(w.DROPUP)){if(D(this._menu).hasClass(w.MENULEFT)||D(this._menu).hasClass(w.MENURIGHT)){ae=ah
}}if(this._config.boundary!=="scrollParent"){D(ah).addClass(w.POSITION_STATIC)
}this._popper=new i(ae,this._menu,this._getPopperConfig())
}if("ontouchstart" in document.documentElement&&D(ah).closest(G.NAVBAR_NAV).length===0){D("body").children().on("mouseover",null,D.noop)
}this._element.focus();
this._element.setAttribute("aria-expanded",true);
D(this._menu).toggleClass(w.SHOW);
D(ah).toggleClass(w.SHOW).trigger(D.Event(L.SHOWN,ad))
};
W.dispose=function aa(){D.removeData(this._element,y);
D(this._element).off(F);
this._element=null;
this._menu=null;
if(this._popper!==null){this._popper.destroy();
this._popper=null
}};
W.update=function R(){this._inNavbar=this._detectNavbar();
if(this._popper!==null){this._popper.scheduleUpdate()
}};
W._addEventListeners=function S(){var ad=this;
D(this._element).on(L.CLICK,function(ae){ae.preventDefault();
ae.stopPropagation();
ad.toggle()
})
};
W._getConfig=function Y(ad){ad=k({},this.constructor.Default,D(this._element).data(),ad);
d.typeCheckConfig(z,ad,this.constructor.DefaultType);
return ad
};
W._getMenuElement=function U(){if(!this._menu){var ad=Z._getParentFromElement(this._element);
this._menu=D(ad).find(G.MENU)[0]
}return this._menu
};
W._getPlacement=function ac(){var ad=D(this._element).parent();
var ae=E.BOTTOM;
if(ad.hasClass(w.DROPUP)){ae=E.TOP;
if(D(this._menu).hasClass(w.MENURIGHT)){ae=E.TOPEND
}}else{if(ad.hasClass(w.DROPRIGHT)){ae=E.RIGHT
}else{if(ad.hasClass(w.DROPLEFT)){ae=E.LEFT
}else{if(D(this._menu).hasClass(w.MENURIGHT)){ae=E.BOTTOMEND
}}}}return ae
};
W._detectNavbar=function ab(){return D(this._element).closest(".navbar").length>0
};
W._getPopperConfig=function X(){var ae=this;
var ad={};
if(typeof this._config.offset==="function"){ad.fn=function(ag){ag.offsets=k({},ag.offsets,ae._config.offset(ag.offsets)||{});
return ag
}
}else{ad.offset=this._config.offset
}var af={placement:this._getPlacement(),modifiers:{offset:ad,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};
return af
};
Z._jQueryInterface=function Q(ad){return this.each(function(){var af=D(this).data(y);
var ae=typeof ad==="object"?ad:null;
if(!af){af=new Z(this,ae);
D(this).data(y,af)
}if(typeof ad==="string"){if(typeof af[ad]==="undefined"){throw new TypeError('No method named "'+ad+'"')
}af[ad]()
}})
};
Z._clearMenus=function P(aj){if(aj&&(aj.which===s||aj.type==="keyup"&&aj.which!==A)){return
}var ai=D.makeArray(D(G.DATA_TOGGLE));
for(var ag=0;
ag<ai.length;
ag++){var ah=Z._getParentFromElement(ai[ag]);
var af=D(ai[ag]).data(y);
var ad={relatedTarget:ai[ag]};
if(!af){continue
}var ae=af._menu;
if(!D(ah).hasClass(w.SHOW)){continue
}if(aj&&(aj.type==="click"&&/input|textarea/i.test(aj.target.tagName)||aj.type==="keyup"&&aj.which===A)&&D.contains(ah,aj.target)){continue
}var ak=D.Event(L.HIDE,ad);
D(ah).trigger(ak);
if(ak.isDefaultPrevented()){continue
}if("ontouchstart" in document.documentElement){D("body").children().off("mouseover",null,D.noop)
}ai[ag].setAttribute("aria-expanded","false");
D(ae).removeClass(w.SHOW);
D(ah).removeClass(w.SHOW).trigger(D.Event(L.HIDDEN,ad))
}};
Z._getParentFromElement=function V(ae){var af;
var ad=d.getSelectorFromElement(ae);
if(ad){af=D(ad)[0]
}return af||ae.parentNode
};
Z._dataApiKeydownHandler=function O(ai){if(/input|textarea/i.test(ai.target.tagName)?ai.which===x||ai.which!==t&&(ai.which!==M&&ai.which!==C||D(ai.target).closest(G.MENU).length):!K.test(ai.which)){return
}ai.preventDefault();
ai.stopPropagation();
if(this.disabled||D(this).hasClass(w.DISABLED)){return
}var ah=Z._getParentFromElement(this);
var ag=D(ah).hasClass(w.SHOW);
if(!ag&&(ai.which!==t||ai.which!==x)||ag&&(ai.which===t||ai.which===x)){if(ai.which===t){var ad=D(ah).find(G.DATA_TOGGLE)[0];
D(ad).trigger("focus")
}D(this).trigger("click");
return
}var ae=D(ah).find(G.VISIBLE_ITEMS).get();
if(ae.length===0){return
}var af=ae.indexOf(ai.target);
if(ai.which===C&&af>0){af--
}if(ai.which===M&&af<ae.length-1){af++
}if(af<0){af=0
}ae[af].focus()
};
l(Z,null,[{key:"VERSION",get:function N(){return I
}},{key:"Default",get:function N(){return B
}},{key:"DefaultType",get:function N(){return J
}}]);
return Z
}();
D(document).on(L.KEYDOWN_DATA_API,G.DATA_TOGGLE,H._dataApiKeydownHandler).on(L.KEYDOWN_DATA_API,G.MENU,H._dataApiKeydownHandler).on(L.CLICK_DATA_API+" "+L.KEYUP_DATA_API,H._clearMenus).on(L.CLICK_DATA_API,G.DATA_TOGGLE,function(N){N.preventDefault();
N.stopPropagation();
H._jQueryInterface.call(D(this),"toggle")
}).on(L.CLICK_DATA_API,G.FORM_CHILD,function(N){N.stopPropagation()
});
D.fn[z]=H._jQueryInterface;
D.fn[z].Constructor=H;
D.fn[z].noConflict=function(){D.fn[z]=v;
return H._jQueryInterface
};
return H
}(c,i);
var a=function(z){var G="modal";
var H="4.0.0";
var E="bs.modal";
var u="."+E;
var D=".data-api";
var t=z.fn[G];
var x=300;
var C=150;
var w=27;
var v={backdrop:true,keyboard:true,focus:true,show:true};
var F={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"};
var B={HIDE:"hide"+u,HIDDEN:"hidden"+u,SHOW:"show"+u,SHOWN:"shown"+u,FOCUSIN:"focusin"+u,RESIZE:"resize"+u,CLICK_DISMISS:"click.dismiss"+u,KEYDOWN_DISMISS:"keydown.dismiss"+u,MOUSEUP_DISMISS:"mouseup.dismiss"+u,MOUSEDOWN_DISMISS:"mousedown.dismiss"+u,CLICK_DATA_API:"click"+u+D};
var A={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"};
var s={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};
var y=function(){function I(ag,af){this._config=this._getConfig(af);
this._element=ag;
this._dialog=z(ag).find(s.DIALOG)[0];
this._backdrop=null;
this._isShown=false;
this._isBodyOverflowing=false;
this._ignoreBackdropClick=false;
this._originalBodyPadding=0;
this._scrollbarWidth=0
}var L=I.prototype;
L.toggle=function Z(af){return this._isShown?this.hide():this.show(af)
};
L.show=function ac(af){var ah=this;
if(this._isTransitioning||this._isShown){return
}if(d.supportsTransitionEnd()&&z(this._element).hasClass(A.FADE)){this._isTransitioning=true
}var ag=z.Event(B.SHOW,{relatedTarget:af});
z(this._element).trigger(ag);
if(this._isShown||ag.isDefaultPrevented()){return
}this._isShown=true;
this._checkScrollbar();
this._setScrollbar();
this._adjustDialog();
z(document.body).addClass(A.OPEN);
this._setEscapeEvent();
this._setResizeEvent();
z(this._element).on(B.CLICK_DISMISS,s.DATA_DISMISS,function(ai){return ah.hide(ai)
});
z(this._dialog).on(B.MOUSEDOWN_DISMISS,function(){z(ah._element).one(B.MOUSEUP_DISMISS,function(ai){if(z(ai.target).is(ah._element)){ah._ignoreBackdropClick=true
}})
});
this._showBackdrop(function(){return ah._showElement(af)
})
};
L.hide=function S(ag){var af=this;
if(ag){ag.preventDefault()
}if(this._isTransitioning||!this._isShown){return
}var ah=z.Event(B.HIDE);
z(this._element).trigger(ah);
if(!this._isShown||ah.isDefaultPrevented()){return
}this._isShown=false;
var ai=d.supportsTransitionEnd()&&z(this._element).hasClass(A.FADE);
if(ai){this._isTransitioning=true
}this._setEscapeEvent();
this._setResizeEvent();
z(document).off(B.FOCUSIN);
z(this._element).removeClass(A.SHOW);
z(this._element).off(B.CLICK_DISMISS);
z(this._dialog).off(B.MOUSEDOWN_DISMISS);
if(ai){z(this._element).one(d.TRANSITION_END,function(aj){return af._hideModal(aj)
}).emulateTransitionEnd(x)
}else{this._hideModal()
}};
L.dispose=function ae(){z.removeData(this._element,E);
z(window,document,this._element,this._backdrop).off(u);
this._config=null;
this._element=null;
this._dialog=null;
this._backdrop=null;
this._isShown=null;
this._isBodyOverflowing=null;
this._ignoreBackdropClick=null;
this._scrollbarWidth=null
};
L.handleUpdate=function Q(){this._adjustDialog()
};
L._getConfig=function M(af){af=k({},v,af);
d.typeCheckConfig(G,af,F);
return af
};
L._showElement=function ad(ag){var ai=this;
var aj=d.supportsTransitionEnd()&&z(this._element).hasClass(A.FADE);
if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){document.body.appendChild(this._element)
}this._element.style.display="block";
this._element.removeAttribute("aria-hidden");
this._element.scrollTop=0;
if(aj){d.reflow(this._element)
}z(this._element).addClass(A.SHOW);
if(this._config.focus){this._enforceFocus()
}var af=z.Event(B.SHOWN,{relatedTarget:ag});
var ah=function ah(){if(ai._config.focus){ai._element.focus()
}ai._isTransitioning=false;
z(ai._element).trigger(af)
};
if(aj){z(this._dialog).one(d.TRANSITION_END,ah).emulateTransitionEnd(x)
}else{ah()
}};
L._enforceFocus=function K(){var af=this;
z(document).off(B.FOCUSIN).on(B.FOCUSIN,function(ag){if(document!==ag.target&&af._element!==ag.target&&z(af._element).has(ag.target).length===0){af._element.focus()
}})
};
L._setEscapeEvent=function P(){var af=this;
if(this._isShown&&this._config.keyboard){z(this._element).on(B.KEYDOWN_DISMISS,function(ag){if(ag.which===w){ag.preventDefault();
af.hide()
}})
}else{if(!this._isShown){z(this._element).off(B.KEYDOWN_DISMISS)
}}};
L._setResizeEvent=function V(){var af=this;
if(this._isShown){z(window).on(B.RESIZE,function(ag){return af.handleUpdate(ag)
})
}else{z(window).off(B.RESIZE)
}};
L._hideModal=function aa(){var af=this;
this._element.style.display="none";
this._element.setAttribute("aria-hidden",true);
this._isTransitioning=false;
this._showBackdrop(function(){z(document.body).removeClass(A.OPEN);
af._resetAdjustments();
af._resetScrollbar();
z(af._element).trigger(B.HIDDEN)
})
};
L._removeBackdrop=function N(){if(this._backdrop){z(this._backdrop).remove();
this._backdrop=null
}};
L._showBackdrop=function O(aj){var ag=this;
var ah=z(this._element).hasClass(A.FADE)?A.FADE:"";
if(this._isShown&&this._config.backdrop){var af=d.supportsTransitionEnd()&&ah;
this._backdrop=document.createElement("div");
this._backdrop.className=A.BACKDROP;
if(ah){z(this._backdrop).addClass(ah)
}z(this._backdrop).appendTo(document.body);
z(this._element).on(B.CLICK_DISMISS,function(ak){if(ag._ignoreBackdropClick){ag._ignoreBackdropClick=false;
return
}if(ak.target!==ak.currentTarget){return
}if(ag._config.backdrop==="static"){ag._element.focus()
}else{ag.hide()
}});
if(af){d.reflow(this._backdrop)
}z(this._backdrop).addClass(A.SHOW);
if(!aj){return
}if(!af){aj();
return
}z(this._backdrop).one(d.TRANSITION_END,aj).emulateTransitionEnd(C)
}else{if(!this._isShown&&this._backdrop){z(this._backdrop).removeClass(A.SHOW);
var ai=function ai(){ag._removeBackdrop();
if(aj){aj()
}};
if(d.supportsTransitionEnd()&&z(this._element).hasClass(A.FADE)){z(this._backdrop).one(d.TRANSITION_END,ai).emulateTransitionEnd(C)
}else{ai()
}}else{if(aj){aj()
}}}};
L._adjustDialog=function X(){var af=this._element.scrollHeight>document.documentElement.clientHeight;
if(!this._isBodyOverflowing&&af){this._element.style.paddingLeft=this._scrollbarWidth+"px"
}if(this._isBodyOverflowing&&!af){this._element.style.paddingRight=this._scrollbarWidth+"px"
}};
L._resetAdjustments=function U(){this._element.style.paddingLeft="";
this._element.style.paddingRight=""
};
L._checkScrollbar=function W(){var af=document.body.getBoundingClientRect();
this._isBodyOverflowing=af.left+af.right<window.innerWidth;
this._scrollbarWidth=this._getScrollbarWidth()
};
L._setScrollbar=function Y(){var ah=this;
if(this._isBodyOverflowing){z(s.FIXED_CONTENT).each(function(aj,ak){var ai=z(ak)[0].style.paddingRight;
var al=z(ak).css("padding-right");
z(ak).data("padding-right",ai).css("padding-right",parseFloat(al)+ah._scrollbarWidth+"px")
});
z(s.STICKY_CONTENT).each(function(aj,ak){var al=z(ak)[0].style.marginRight;
var ai=z(ak).css("margin-right");
z(ak).data("margin-right",al).css("margin-right",parseFloat(ai)-ah._scrollbarWidth+"px")
});
z(s.NAVBAR_TOGGLER).each(function(aj,ak){var al=z(ak)[0].style.marginRight;
var ai=z(ak).css("margin-right");
z(ak).data("margin-right",al).css("margin-right",parseFloat(ai)+ah._scrollbarWidth+"px")
});
var af=document.body.style.paddingRight;
var ag=z("body").css("padding-right");
z("body").data("padding-right",af).css("padding-right",parseFloat(ag)+this._scrollbarWidth+"px")
}};
L._resetScrollbar=function T(){z(s.FIXED_CONTENT).each(function(ag,ah){var ai=z(ah).data("padding-right");
if(typeof ai!=="undefined"){z(ah).css("padding-right",ai).removeData("padding-right")
}});
z(s.STICKY_CONTENT+", "+s.NAVBAR_TOGGLER).each(function(ag,ah){var ai=z(ah).data("margin-right");
if(typeof ai!=="undefined"){z(ah).css("margin-right",ai).removeData("margin-right")
}});
var af=z("body").data("padding-right");
if(typeof af!=="undefined"){z("body").css("padding-right",af).removeData("padding-right")
}};
L._getScrollbarWidth=function J(){var ag=document.createElement("div");
ag.className=A.SCROLLBAR_MEASURER;
document.body.appendChild(ag);
var af=ag.getBoundingClientRect().width-ag.clientWidth;
document.body.removeChild(ag);
return af
};
I._jQueryInterface=function R(ag,af){return this.each(function(){var ai=z(this).data(E);
var ah=k({},I.Default,z(this).data(),typeof ag==="object"&&ag);
if(!ai){ai=new I(this,ah);
z(this).data(E,ai)
}if(typeof ag==="string"){if(typeof ai[ag]==="undefined"){throw new TypeError('No method named "'+ag+'"')
}ai[ag](af)
}else{if(ah.show){ai.show(af)
}}})
};
l(I,null,[{key:"VERSION",get:function ab(){return H
}},{key:"Default",get:function ab(){return v
}}]);
return I
}();
z(document).on(B.CLICK_DATA_API,s.DATA_TOGGLE,function(L){var N=this;
var M;
var J=d.getSelectorFromElement(this);
if(J){M=z(J)[0]
}var K=z(M).data(E)?"toggle":k({},z(M).data(),z(this).data());
if(this.tagName==="A"||this.tagName==="AREA"){L.preventDefault()
}var I=z(M).one(B.SHOW,function(O){if(O.isDefaultPrevented()){return
}I.one(B.HIDDEN,function(){if(z(N).is(":visible")){N.focus()
}})
});
y._jQueryInterface.call(z(M),K,this)
});
z.fn[G]=y._jQueryInterface;
z.fn[G].Constructor=y;
z.fn[G].noConflict=function(){z.fn[G]=t;
return y._jQueryInterface
};
return y
}(c);
var n=function(z){var x="tooltip";
var G="4.0.0";
var w="bs.tooltip";
var B="."+w;
var s=z.fn[x];
var D=150;
var C="bs-tooltip";
var J=new RegExp("(^|\\s)"+C+"\\S+","g");
var H={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"};
var A={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"};
var y={animation:true,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,selector:false,placement:"top",offset:0,container:false,fallbackPlacement:"flip",boundary:"scrollParent"};
var u={SHOW:"show",OUT:"out"};
var I={HIDE:"hide"+B,HIDDEN:"hidden"+B,SHOW:"show"+B,SHOWN:"shown"+B,INSERTED:"inserted"+B,CLICK:"click"+B,FOCUSIN:"focusin"+B,FOCUSOUT:"focusout"+B,MOUSEENTER:"mouseenter"+B,MOUSELEAVE:"mouseleave"+B};
var v={FADE:"fade",SHOW:"show"};
var E={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"};
var t={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"};
var F=function(){function ag(ao,an){if(typeof i==="undefined"){throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)")
}this._isEnabled=true;
this._timeout=0;
this._hoverState="";
this._activeTrigger={};
this._popper=null;
this.element=ao;
this.config=this._getConfig(an);
this.tip=null;
this._setListeners()
}var N=ag.prototype;
N.enable=function aa(){this._isEnabled=true
};
N.disable=function L(){this._isEnabled=false
};
N.toggleEnabled=function V(){this._isEnabled=!this._isEnabled
};
N.toggle=function ad(ao){if(!this._isEnabled){return
}if(ao){var ap=this.constructor.DATA_KEY;
var an=z(ao.currentTarget).data(ap);
if(!an){an=new this.constructor(ao.currentTarget,this._getDelegateConfig());
z(ao.currentTarget).data(ap,an)
}an._activeTrigger.click=!an._activeTrigger.click;
if(an._isWithActiveTrigger()){an._enter(null,an)
}else{an._leave(null,an)
}}else{if(z(this.getTipElement()).hasClass(v.SHOW)){this._leave(null,this);
return
}this._enter(null,this)
}};
N.dispose=function am(){clearTimeout(this._timeout);
z.removeData(this.element,this.constructor.DATA_KEY);
z(this.element).off(this.constructor.EVENT_KEY);
z(this.element).closest(".modal").off("hide.bs.modal");
if(this.tip){z(this.tip).remove()
}this._isEnabled=null;
this._timeout=null;
this._hoverState=null;
this._activeTrigger=null;
if(this._popper!==null){this._popper.destroy()
}this._popper=null;
this.element=null;
this.config=null;
this.tip=null
};
N.show=function aj(){var aw=this;
if(z(this.element).css("display")==="none"){throw new Error("Please use show on visible elements")
}var ax=z.Event(this.constructor.Event.SHOW);
if(this.isWithContent()&&this._isEnabled){z(this.element).trigger(ax);
var ar=z.contains(this.element.ownerDocument.documentElement,this.element);
if(ax.isDefaultPrevented()||!ar){return
}var ay=this.getTipElement();
var ap=d.getUID(this.constructor.NAME);
ay.setAttribute("id",ap);
this.element.setAttribute("aria-describedby",ap);
this.setContent();
if(this.config.animation){z(ay).addClass(v.FADE)
}var au=typeof this.config.placement==="function"?this.config.placement.call(this,ay,this.element):this.config.placement;
var av=this._getAttachment(au);
this.addAttachmentClass(av);
var an=this.config.container===false?document.body:z(this.config.container);
z(ay).data(this.constructor.DATA_KEY,this);
if(!z.contains(this.element.ownerDocument.documentElement,this.tip)){z(ay).appendTo(an)
}z(this.element).trigger(this.constructor.Event.INSERTED);
this._popper=new i(this.element,ay,{placement:av,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:E.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function at(az){if(az.originalPlacement!==az.placement){aw._handlePopperPlacementChange(az)
}},onUpdate:function aq(az){aw._handlePopperPlacementChange(az)
}});
z(ay).addClass(v.SHOW);
if("ontouchstart" in document.documentElement){z("body").children().on("mouseover",null,z.noop)
}var ao=function ao(){if(aw.config.animation){aw._fixTransition()
}var az=aw._hoverState;
aw._hoverState=null;
z(aw.element).trigger(aw.constructor.Event.SHOWN);
if(az===u.OUT){aw._leave(null,aw)
}};
if(d.supportsTransitionEnd()&&z(this.tip).hasClass(v.FADE)){z(this.tip).one(d.TRANSITION_END,ao).emulateTransitionEnd(ag._TRANSITION_DURATION)
}else{ao()
}}};
N.hide=function Z(ar){var ao=this;
var ap=this.getTipElement();
var aq=z.Event(this.constructor.Event.HIDE);
var an=function an(){if(ao._hoverState!==u.SHOW&&ap.parentNode){ap.parentNode.removeChild(ap)
}ao._cleanTipClass();
ao.element.removeAttribute("aria-describedby");
z(ao.element).trigger(ao.constructor.Event.HIDDEN);
if(ao._popper!==null){ao._popper.destroy()
}if(ar){ar()
}};
z(this.element).trigger(aq);
if(aq.isDefaultPrevented()){return
}z(ap).removeClass(v.SHOW);
if("ontouchstart" in document.documentElement){z("body").children().off("mouseover",null,z.noop)
}this._activeTrigger[t.CLICK]=false;
this._activeTrigger[t.FOCUS]=false;
this._activeTrigger[t.HOVER]=false;
if(d.supportsTransitionEnd()&&z(this.tip).hasClass(v.FADE)){z(ap).one(d.TRANSITION_END,an).emulateTransitionEnd(D)
}else{an()
}this._hoverState=""
};
N.update=function S(){if(this._popper!==null){this._popper.scheduleUpdate()
}};
N.isWithContent=function ae(){return Boolean(this.getTitle())
};
N.addAttachmentClass=function U(an){z(this.getTipElement()).addClass(C+"-"+an)
};
N.getTipElement=function ah(){this.tip=this.tip||z(this.config.template)[0];
return this.tip
};
N.setContent=function Q(){var an=z(this.getTipElement());
this.setElementContent(an.find(E.TOOLTIP_INNER),this.getTitle());
an.removeClass(v.FADE+" "+v.SHOW)
};
N.setElementContent=function ac(an,ap){var ao=this.config.html;
if(typeof ap==="object"&&(ap.nodeType||ap.jquery)){if(ao){if(!z(ap).parent().is(an)){an.empty().append(ap)
}}else{an.text(z(ap).text())
}}else{an[ao?"html":"text"](ap)
}};
N.getTitle=function W(){var an=this.element.getAttribute("data-original-title");
if(!an){an=typeof this.config.title==="function"?this.config.title.call(this.element):this.config.title
}return an
};
N._getAttachment=function al(an){return A[an.toUpperCase()]
};
N._setListeners=function af(){var ao=this;
var an=this.config.trigger.split(" ");
an.forEach(function(aq){if(aq==="click"){z(ao.element).on(ao.constructor.Event.CLICK,ao.config.selector,function(at){return ao.toggle(at)
})
}else{if(aq!==t.MANUAL){var ar=aq===t.HOVER?ao.constructor.Event.MOUSEENTER:ao.constructor.Event.FOCUSIN;
var ap=aq===t.HOVER?ao.constructor.Event.MOUSELEAVE:ao.constructor.Event.FOCUSOUT;
z(ao.element).on(ar,ao.config.selector,function(at){return ao._enter(at)
}).on(ap,ao.config.selector,function(at){return ao._leave(at)
})
}}z(ao.element).closest(".modal").on("hide.bs.modal",function(){return ao.hide()
})
});
if(this.config.selector){this.config=k({},this.config,{trigger:"manual",selector:""})
}else{this._fixTitle()
}};
N._fixTitle=function R(){var an=typeof this.element.getAttribute("data-original-title");
if(this.element.getAttribute("title")||an!=="string"){this.element.setAttribute("data-original-title",this.element.getAttribute("title")||"");
this.element.setAttribute("title","")
}};
N._enter=function T(ao,an){var ap=this.constructor.DATA_KEY;
an=an||z(ao.currentTarget).data(ap);
if(!an){an=new this.constructor(ao.currentTarget,this._getDelegateConfig());
z(ao.currentTarget).data(ap,an)
}if(ao){an._activeTrigger[ao.type==="focusin"?t.FOCUS:t.HOVER]=true
}if(z(an.getTipElement()).hasClass(v.SHOW)||an._hoverState===u.SHOW){an._hoverState=u.SHOW;
return
}clearTimeout(an._timeout);
an._hoverState=u.SHOW;
if(!an.config.delay||!an.config.delay.show){an.show();
return
}an._timeout=setTimeout(function(){if(an._hoverState===u.SHOW){an.show()
}},an.config.delay.show)
};
N._leave=function ak(ao,an){var ap=this.constructor.DATA_KEY;
an=an||z(ao.currentTarget).data(ap);
if(!an){an=new this.constructor(ao.currentTarget,this._getDelegateConfig());
z(ao.currentTarget).data(ap,an)
}if(ao){an._activeTrigger[ao.type==="focusout"?t.FOCUS:t.HOVER]=false
}if(an._isWithActiveTrigger()){return
}clearTimeout(an._timeout);
an._hoverState=u.OUT;
if(!an.config.delay||!an.config.delay.hide){an.hide();
return
}an._timeout=setTimeout(function(){if(an._hoverState===u.OUT){an.hide()
}},an.config.delay.hide)
};
N._isWithActiveTrigger=function M(){for(var an in this._activeTrigger){if(this._activeTrigger[an]){return true
}}return false
};
N._getConfig=function O(an){an=k({},this.constructor.Default,z(this.element).data(),an);
if(typeof an.delay==="number"){an.delay={show:an.delay,hide:an.delay}
}if(typeof an.title==="number"){an.title=an.title.toString()
}if(typeof an.content==="number"){an.content=an.content.toString()
}d.typeCheckConfig(x,an,this.constructor.DefaultType);
return an
};
N._getDelegateConfig=function Y(){var an={};
if(this.config){for(var ao in this.config){if(this.constructor.Default[ao]!==this.config[ao]){an[ao]=this.config[ao]
}}}return an
};
N._cleanTipClass=function ab(){var ao=z(this.getTipElement());
var an=ao.attr("class").match(J);
if(an!==null&&an.length>0){ao.removeClass(an.join(""))
}};
N._handlePopperPlacementChange=function P(an){this._cleanTipClass();
this.addAttachmentClass(this._getAttachment(an.placement))
};
N._fixTransition=function K(){var ao=this.getTipElement();
var an=this.config.animation;
if(ao.getAttribute("x-placement")!==null){return
}z(ao).removeClass(v.FADE);
this.config.animation=false;
this.hide();
this.show();
this.config.animation=an
};
ag._jQueryInterface=function X(an){return this.each(function(){var ap=z(this).data(w);
var ao=typeof an==="object"&&an;
if(!ap&&/dispose|hide/.test(an)){return
}if(!ap){ap=new ag(this,ao);
z(this).data(w,ap)
}if(typeof an==="string"){if(typeof ap[an]==="undefined"){throw new TypeError('No method named "'+an+'"')
}ap[an]()
}})
};
l(ag,null,[{key:"VERSION",get:function ai(){return G
}},{key:"Default",get:function ai(){return y
}},{key:"NAME",get:function ai(){return x
}},{key:"DATA_KEY",get:function ai(){return w
}},{key:"Event",get:function ai(){return I
}},{key:"EVENT_KEY",get:function ai(){return B
}},{key:"DefaultType",get:function ai(){return H
}}]);
return ag
}();
z.fn[x]=F._jQueryInterface;
z.fn[x].Constructor=F;
z.fn[x].noConflict=function(){z.fn[x]=s;
return F._jQueryInterface
};
return F
}(c,i);
var q=function(z){var E="popover";
var F="4.0.0";
var C="bs.popover";
var v="."+C;
var t=z.fn[E];
var u="bs-popover";
var x=new RegExp("(^|\\s)"+u+"\\S+","g");
var y=k({},n.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'});
var D=k({},n.DefaultType,{content:"(string|element|function)"});
var A={FADE:"fade",SHOW:"show"};
var s={TITLE:".popover-header",CONTENT:".popover-body"};
var B={HIDE:"hide"+v,HIDDEN:"hidden"+v,SHOW:"show"+v,SHOWN:"shown"+v,INSERTED:"inserted"+v,CLICK:"click"+v,FOCUSIN:"focusin"+v,FOCUSOUT:"focusout"+v,MOUSEENTER:"mouseenter"+v,MOUSELEAVE:"mouseleave"+v};
var w=function(O){j(K,O);
function K(){return O.apply(this,arguments)||this
}var P=K.prototype;
P.isWithContent=function M(){return this.getTitle()||this._getContent()
};
P.addAttachmentClass=function Q(R){z(this.getTipElement()).addClass(u+"-"+R)
};
P.getTipElement=function L(){this.tip=this.tip||z(this.config.template)[0];
return this.tip
};
P.setContent=function I(){var S=z(this.getTipElement());
this.setElementContent(S.find(s.TITLE),this.getTitle());
var R=this._getContent();
if(typeof R==="function"){R=R.call(this.element)
}this.setElementContent(S.find(s.CONTENT),R);
S.removeClass(A.FADE+" "+A.SHOW)
};
P._getContent=function N(){return this.element.getAttribute("data-content")||this.config.content
};
P._cleanTipClass=function H(){var S=z(this.getTipElement());
var R=S.attr("class").match(x);
if(R!==null&&R.length>0){S.removeClass(R.join(""))
}};
K._jQueryInterface=function J(R){return this.each(function(){var T=z(this).data(C);
var S=typeof R==="object"?R:null;
if(!T&&/destroy|hide/.test(R)){return
}if(!T){T=new K(this,S);
z(this).data(C,T)
}if(typeof R==="string"){if(typeof T[R]==="undefined"){throw new TypeError('No method named "'+R+'"')
}T[R]()
}})
};
l(K,null,[{key:"VERSION",get:function G(){return F
}},{key:"Default",get:function G(){return y
}},{key:"NAME",get:function G(){return E
}},{key:"DATA_KEY",get:function G(){return C
}},{key:"Event",get:function G(){return B
}},{key:"EVENT_KEY",get:function G(){return v
}},{key:"DefaultType",get:function G(){return D
}}]);
return K
}(n);
z.fn[E]=w._jQueryInterface;
z.fn[E].Constructor=w;
z.fn[E].noConflict=function(){z.fn[E]=t;
return w._jQueryInterface
};
return w
}(c);
var o=function(x){var E="scrollspy";
var F="4.0.0";
var B="bs.scrollspy";
var u="."+B;
var A=".data-api";
var t=x.fn[E];
var w={offset:10,method:"auto",target:""};
var D={offset:"number",method:"string",target:"(string|element)"};
var z={ACTIVATE:"activate"+u,SCROLL:"scroll"+u,LOAD_DATA_API:"load"+u+A};
var y={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"};
var s={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"};
var C={OFFSET:"offset",POSITION:"position"};
var v=function(){function L(U,T){var V=this;
this._element=U;
this._scrollElement=U.tagName==="BODY"?window:U;
this._config=this._getConfig(T);
this._selector=this._config.target+" "+s.NAV_LINKS+","+(this._config.target+" "+s.LIST_ITEMS+",")+(this._config.target+" "+s.DROPDOWN_ITEMS);
this._offsets=[];
this._targets=[];
this._activeTarget=null;
this._scrollHeight=0;
x(this._scrollElement).on(z.SCROLL,function(W){return V._process(W)
});
this.refresh();
this._process()
}var P=L.prototype;
P.refresh=function O(){var X=this;
var V=this._scrollElement===this._scrollElement.window?C.OFFSET:C.POSITION;
var T=this._config.method==="auto"?V:this._config.method;
var W=T===C.POSITION?this._getScrollTop():0;
this._offsets=[];
this._targets=[];
this._scrollHeight=this._getScrollHeight();
var U=x.makeArray(x(this._selector));
U.map(function(Y){var ab;
var Z=d.getSelectorFromElement(Y);
if(Z){ab=x(Z)[0]
}if(ab){var aa=ab.getBoundingClientRect();
if(aa.width||aa.height){return[x(ab)[T]().top+W,Z]
}}return null
}).filter(function(Y){return Y
}).sort(function(Z,Y){return Z[0]-Y[0]
}).forEach(function(Y){X._offsets.push(Y[0]);
X._targets.push(Y[1])
})
};
P.dispose=function S(){x.removeData(this._element,B);
x(this._scrollElement).off(u);
this._element=null;
this._scrollElement=null;
this._config=null;
this._selector=null;
this._offsets=null;
this._targets=null;
this._activeTarget=null;
this._scrollHeight=null
};
P._getConfig=function Q(T){T=k({},w,T);
if(typeof T.target!=="string"){var U=x(T.target).attr("id");
if(!U){U=d.getUID(E);
x(T.target).attr("id",U)
}T.target="#"+U
}d.typeCheckConfig(E,T,D);
return T
};
P._getScrollTop=function R(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop
};
P._getScrollHeight=function H(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
};
P._getOffsetHeight=function J(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height
};
P._process=function G(){var Y=this._getScrollTop()+this._config.offset;
var U=this._getScrollHeight();
var V=this._config.offset+U-this._getOffsetHeight();
if(this._scrollHeight!==U){this.refresh()
}if(Y>=V){var X=this._targets[this._targets.length-1];
if(this._activeTarget!==X){this._activate(X)
}return
}if(this._activeTarget&&Y<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;
this._clear();
return
}for(var T=this._offsets.length;
T--;
){var W=this._activeTarget!==this._targets[T]&&Y>=this._offsets[T]&&(typeof this._offsets[T+1]==="undefined"||Y<this._offsets[T+1]);
if(W){this._activate(this._targets[T])
}}};
P._activate=function M(V){this._activeTarget=V;
this._clear();
var U=this._selector.split(",");
U=U.map(function(W){return W+'[data-target="'+V+'"],'+(W+'[href="'+V+'"]')
});
var T=x(U.join(","));
if(T.hasClass(y.DROPDOWN_ITEM)){T.closest(s.DROPDOWN).find(s.DROPDOWN_TOGGLE).addClass(y.ACTIVE);
T.addClass(y.ACTIVE)
}else{T.addClass(y.ACTIVE);
T.parents(s.NAV_LIST_GROUP).prev(s.NAV_LINKS+", "+s.LIST_ITEMS).addClass(y.ACTIVE);
T.parents(s.NAV_LIST_GROUP).prev(s.NAV_ITEMS).children(s.NAV_LINKS).addClass(y.ACTIVE)
}x(this._scrollElement).trigger(z.ACTIVATE,{relatedTarget:V})
};
P._clear=function N(){x(this._selector).filter(s.ACTIVE).removeClass(y.ACTIVE)
};
L._jQueryInterface=function K(T){return this.each(function(){var V=x(this).data(B);
var U=typeof T==="object"&&T;
if(!V){V=new L(this,U);
x(this).data(B,V)
}if(typeof T==="string"){if(typeof V[T]==="undefined"){throw new TypeError('No method named "'+T+'"')
}V[T]()
}})
};
l(L,null,[{key:"VERSION",get:function I(){return F
}},{key:"Default",get:function I(){return w
}}]);
return L
}();
x(window).on(z.LOAD_DATA_API,function(){var H=x.makeArray(x(s.DATA_SPY));
for(var G=H.length;
G--;
){var I=x(H[G]);
v._jQueryInterface.call(I,I.data())
}});
x.fn[E]=v._jQueryInterface;
x.fn[E].Constructor=v;
x.fn[E].noConflict=function(){x.fn[E]=t;
return v._jQueryInterface
};
return v
}(c);
var f=function(x){var C="tab";
var D="4.0.0";
var B="bs.tab";
var u="."+B;
var A=".data-api";
var t=x.fn[C];
var w=150;
var z={HIDE:"hide"+u,HIDDEN:"hidden"+u,SHOW:"show"+u,SHOWN:"shown"+u,CLICK_DATA_API:"click"+u+A};
var y={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"};
var s={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"};
var v=function(){function G(M){this._element=M
}var F=G.prototype;
F.show=function E(){var R=this;
if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&x(this._element).hasClass(y.ACTIVE)||x(this._element).hasClass(y.DISABLED)){return
}var S;
var Q;
var U=x(this._element).closest(s.NAV_LIST_GROUP)[0];
var P=d.getSelectorFromElement(this._element);
if(U){var N=U.nodeName==="UL"?s.ACTIVE_UL:s.ACTIVE;
Q=x.makeArray(x(U).find(N));
Q=Q[Q.length-1]
}var O=x.Event(z.HIDE,{relatedTarget:this._element});
var T=x.Event(z.SHOW,{relatedTarget:Q});
if(Q){x(Q).trigger(O)
}x(this._element).trigger(T);
if(T.isDefaultPrevented()||O.isDefaultPrevented()){return
}if(P){S=x(P)[0]
}this._activate(this._element,U);
var M=function M(){var W=x.Event(z.HIDDEN,{relatedTarget:R._element});
var V=x.Event(z.SHOWN,{relatedTarget:Q});
x(Q).trigger(W);
x(R._element).trigger(V)
};
if(S){this._activate(S,S.parentNode,M)
}else{M()
}};
F.dispose=function L(){x.removeData(this._element,B);
this._element=null
};
F._activate=function K(O,N,T){var P=this;
var R;
if(N.nodeName==="UL"){R=x(N).find(s.ACTIVE_UL)
}else{R=x(N).children(s.ACTIVE)
}var Q=R[0];
var S=T&&d.supportsTransitionEnd()&&Q&&x(Q).hasClass(y.FADE);
var M=function M(){return P._transitionComplete(O,Q,T)
};
if(Q&&S){x(Q).one(d.TRANSITION_END,M).emulateTransitionEnd(w)
}else{M()
}};
F._transitionComplete=function J(M,O,Q){if(O){x(O).removeClass(y.SHOW+" "+y.ACTIVE);
var P=x(O.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
if(P){x(P).removeClass(y.ACTIVE)
}if(O.getAttribute("role")==="tab"){O.setAttribute("aria-selected",false)
}}x(M).addClass(y.ACTIVE);
if(M.getAttribute("role")==="tab"){M.setAttribute("aria-selected",true)
}d.reflow(M);
x(M).addClass(y.SHOW);
if(M.parentNode&&x(M.parentNode).hasClass(y.DROPDOWN_MENU)){var N=x(M).closest(s.DROPDOWN)[0];
if(N){x(N).find(s.DROPDOWN_TOGGLE).addClass(y.ACTIVE)
}M.setAttribute("aria-expanded",true)
}if(Q){Q()
}};
G._jQueryInterface=function I(M){return this.each(function(){var O=x(this);
var N=O.data(B);
if(!N){N=new G(this);
O.data(B,N)
}if(typeof M==="string"){if(typeof N[M]==="undefined"){throw new TypeError('No method named "'+M+'"')
}N[M]()
}})
};
l(G,null,[{key:"VERSION",get:function H(){return D
}}]);
return G
}();
x(document).on(z.CLICK_DATA_API,s.DATA_TOGGLE,function(E){E.preventDefault();
v._jQueryInterface.call(x(this),"show")
});
x.fn[C]=v._jQueryInterface;
x.fn[C].Constructor=v;
x.fn[C].noConflict=function(){x.fn[C]=t;
return v._jQueryInterface
};
return v
}(c);
(function(t){if(typeof t==="undefined"){throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
}var s=t.fn.jquery.split(" ")[0].split(".");
var v=1;
var u=2;
var x=9;
var y=1;
var w=4;
if(s[0]<u&&s[1]<x||s[0]===v&&s[1]===x&&s[2]<y||s[0]>=w){throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}})(c);
r.Util=d;
r.Alert=g;
r.Button=h;
r.Carousel=m;
r.Collapse=b;
r.Dropdown=p;
r.Modal=a;
r.Popover=q;
r.Scrollspy=o;
r.Tab=f;
r.Tooltip=n;
Object.defineProperty(r,"__esModule",{value:true})
})));