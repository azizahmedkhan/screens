var TVNZ=window.TVNZ=window.TVNZ||{};
TVNZ.news=window.TVNZ.news||{};
TVNZ.news.brightcoveAnalytics={};
(function(a){TVNZ.news.brightcoveAnalytics.videoTracker=function(Q,H,B){var q="Player Name",g,P="bccPlayer",I,z,L,p,E,e,R,h=[],U=[],G=[],A=false,W=false,x=false,k,n,j=false,c,B,C,Q,w=false,H;
this.experienceId=B;
this.story=Q;
this.storyVideo=H;
var i=brightcove.api,T=i.getExperience(B);
if(!T){throw new Error("No experience "+B+" found")
}APIModules=i.modules.APIModules;
BCLvideoPlayer=T.getModule(APIModules.VIDEO_PLAYER),BCLcuePoints=T.getModule(APIModules.CUE_POINTS),BCLadvertising=T.getModule(APIModules.ADVERTISING),mediaEvent=i.events.MediaEvent,cuePointEvent=i.events.CuePointEvent,adEvent=i.events.AdEvent;
playerType=(T.type=="html")?T.type+"5":T.type;
var S=function(){C=H.find(".brightcove-experience-wrapper").data("omniture-map");
BCLvideoPlayer.getCurrentVideo(b);
BCLvideoPlayer.addEventListener(mediaEvent.CHANGE,m(t));
BCLvideoPlayer.addEventListener(mediaEvent.PROGRESS,m(v));
BCLvideoPlayer.addEventListener(mediaEvent.PLAY,m(O));
BCLvideoPlayer.addEventListener(mediaEvent.STOP,m(l));
BCLvideoPlayer.addEventListener(mediaEvent.SEEK_NOTIFY,m(o));
BCLadvertising.addEventListener(adEvent.START,m(V));
BCLcuePoints.addEventListener(cuePointEvent.CUE,m(X));
console.debug("init"+H.find(".brightcove-experience-wrapper").attr("id"))
},O=function(Z){while(!w){setTimeout(function(){O(Z)
},100);
return
}u(Z)
},m=function(Z){return function(){try{return Z.apply(this,arguments)
}catch(aa){console.log(aa,aa.stack);
throw aa
}}
},b=function(Z){if(!Z){return
}I=Z;
L=I.displayName;
BCLvideoPlayer.getCurrentRendition(M);
J(Z)
},M=function(Z){z=Z;
c=z.frameHeight
},K=function(){var Z=document.querySelector(".BrightcoveExperience");
var aa=Z.offsetHeight;
BCLvideoPlayer.getCurrentRendition(M);
return c>aa
},Y=function(aa,Z){switch(Z){case"MILESTONE33":s.eVar41="1:M:0-33";
N();
if(K()){s.events="event21,event26,event39,event19="+Math.floor(k/1000)
}else{s.events="event26,event39,event19="+Math.floor(k/1000)
}F();
s.events="";
break;
case"MILESTONE66":s.eVar41="2:M:33-66";
N();
if(K()){s.events="event21,event27,event39,event19="+Math.floor(k/1000)
}else{s.events="event27,event39,event19="+Math.floor(k/1000)
}F();
s.events="";
break
}n=Math.round(new Date().getTime())
},t=function(Z){BCLvideoPlayer.getCurrentVideo(b)
},v=function(ad){var aa=ad.position;
if(g){return
}if(R>0&&A){k=Math.round((new Date().getTime())-n);
s.Media.play(name,R);
A=false;
for(var ac=0;
ac<h.length;
ac++){var ab=D.call(h,e);
var Z=D.call(h,R);
if(R>h[Z]&&R>h[ac]){ac=Z;
if(!x){if(ab==-1){k=e*1000;
ab=0
}else{k=Math.round((new Date().getTime())-n);
ab+=1
}}else{k=0
}console.log("Milestone name: "+G[ab]);
Y(I,G[ab]);
n=Math.round(new Date().getTime());
x=true
}else{if(R>U[ac]&&R<h[ac]&&e>U[ac]&&e<h[ac]){k=(h[ac]-(R-e))*1000;
W=true
}}}}e=aa
},D=function(ac){var ab=0;
var ad=this.length-1;
var Z;
var aa;
while(ab<=ad){Z=(ab+ad)/2|0;
aa=this[Z];
if(aa<ac){ab=Z+1
}else{if(aa>ac){ad=Z-1
}else{return Z
}}}return ad
},u=function(ab){var aa=ab.media,Z=aa.displayName;
if(g){return
}n=Math.round(new Date().getTime());
if(!j&&ab.position==0){j=true;
R=0;
e=0;
k=0;
s.Media.open(Z,aa.length/1000,q);
s.Media.play(Z,0)
}else{s.Media.play(Z,ab.position)
}},l=function(aa){var Z=aa.media;
if(g){return
}k=Math.round((new Date().getTime())-n);
s.Media.stop(Z.displayName,aa.position);
if(aa.position==aa.duration){j=false
}},o=function(Z){s.Media.stop(I.displayName,e);
A=true;
R=Z.position;
x=false
},X=function(Z){if(Z.cuePoint.type==1&&Z.cuePoint.name=="tracking"){if(!W){k=Math.round((new Date().getTime())-n)
}Y(I,Z.cuePoint.metadata);
W=false
}},V=function(Z){if(j){k=Math.round((new Date().getTime())-n)
}},F=function(){console.debug("s.Media.track("+L+");");
s.Media.track(L);
d()
},d=function(){s.events="";
s.eVar1=null;
s.eVar2=null;
s.eVar3=null;
s.eVar4=null;
s.eVar22=null;
s.eVar23=null;
s.eVar26=null;
s.eVar27=null;
s.eVar31=null;
s.eVar32=null;
s.eVar33=null;
s.eVar34=null;
s.eVar35=null;
s.eVar36=null;
s.eVar37=null;
s.eVar39=null;
s.eVar40=null;
s.eVar41=null;
s.eVar45=null;
s.eVar46=null;
s.eVar52=null;
s.eVar53=null;
s.eVar62=null;
s.eVar63=null;
s.eVar70=null;
s.eVar71=null;
s.eVar72=null
},f=function(){j=false
},J=function(Z){s.pageName=C.pageName;
if(Z.customFields){p=Z.customFields
}j=false;
E=Z;
e=0;
R=0;
k=0;
BCLcuePoints.getCuePoints(Z.id,r);
s.Media.monitor=function(ab,ad){var ac=ad.event,aa=["OPEN"];
if(ac=="OPEN"){ab.eVar41="0:M:0-33";
N();
ab.eVar1=C.eVar1;
ab.eVar2=C.eVar2;
ab.eVar4=C.eVar4;
ab.eVar22=C.pageName;
ab.eVar23=C.eVar23;
ab.eVar34=C.channel;
ab.eVar44=C.eVar44;
ab.eVar46=C.eVar46;
ab.evar69=Q.data("omniture-map").eVar69;
ab.eVar70=C.eVar70;
ab.eVar71=C.eVar71;
if(K()){ab.events="event21,event18="+Math.round(Z.length/1000)
}else{ab.events="event18="+Math.round(Z.length/1000)
}if(H.data("auto-play")){ab.events=ab.events+",event41"
}F()
}else{if(ac=="CLOSE"){ab.eVar41="3:M:66-100";
N();
ab.eVar52=C.eVar52;
ab.events="event16,event39,event19="+Math.floor(k/1000);
F()
}}};
w=true
},N=function(Z){s.eVar31=C.eVar31;
s.eVar36=C.eVar36;
s.eVar37=C.eVar37;
s.eVar39=C.eVar39;
s.eVar40=C.eVar40
},y=function(){var Z;
var ad=brightcove.api.modules.CuePointsModule.CuePointType;
var aa=I.length/1000;
var ac=Math.ceil(aa*0.33);
var ab=Math.ceil(aa*0.66);
U=[0,ac,ab];
h=[ac,ab];
G=["MILESTONE33","MILESTONE66"];
Z=[{name:"tracking",metadata:"MILESTONE33",time:ac,type:ad.CODE},{name:"tracking",metadata:"MILESTONE66",time:ab,type:ad.CODE}];
BCLcuePoints.addCuePoints(I.id,Z)
},r=function(aa){var ab,ac,Z;
BCLcuePoints.clearCodeCuePoints(I.id);
y()
};
S();
return{shutdown:f,delayedMediaPlay:O}
}
})(jQuery);
var TVNZ=window.TVNZ=window.TVNZ||{};
TVNZ.news=window.TVNZ.news||{};
(function(a){TVNZ.news.Analytics={getHitTimestamp:function(){var b=new Date();
var e=-b.getTimezoneOffset();
var c=e>=0?"+":"-";
var d=function(f){var g=Math.abs(Math.floor(f));
return(g<10?"0":"")+g
};
return b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+"."+d(b.getMilliseconds())+c+d(e/60)+":"+d(e%60)
},getSessionId:function(){return new Date().getTime()+"."+Math.random().toString(36).substring(5)
},adblockDetected:function(){return TVNZ.adblocker?1:0
},sendNielsenPageHit:function(c,b){if(!trac.previousEventPage){trac.previousEventPage=trac.page_url
}trac.page_url=b;
trac.pageEvent("story-view")
},sendPageOmnitureData:function(b){console.log("sendPageOmnitureData "+b.pageName);
s.pageName=b.pageName;
s.channel=b.channel;
s.hier1=b.hier1;
s.eVar1=b.eVar1;
s.eVar2=b.eVar2;
s.eVar4=b.eVar4;
s.eVar70=b.eVar70;
s.eVar71=b.eVar71;
s.eVar73=b.eVar73;
s.t()
},sendStoryOmnitureData:function(c,b){b=!!b;
if(!c.analyticsSent){s.pageName=c.pageName;
s.channel=c.channel;
s.hier1=c.hier1;
s.eVar1=c.eVar1;
s.eVar2=c.eVar2;
s.eVar4=c.eVar4;
s.eVar70=c.eVar70;
s.eVar71=c.eVar71;
s.eVar73=c.eVar73;
s.eVar6=c.eVar6;
s.eVar7=c.eVar7;
s.eVar8=c.eVar8;
s.eVar10=c.eVar10;
s.prop25=s.eVar25=s.getPreviousValue(s.pageName,"gpv_p25");
s.eVar68=c.eVar68;
if(b){c.eVar69="scroll";
s.events="event4,event5"
}else{s.events=c.events;
if(!s.eVar25||s.eVar25=="no value"){c.eVar69="external"
}else{c.eVar69="internal"
}}s.eVar69=c.eVar69;
c.analyticsSent=true;
s.t()
}},sendSocialAnalytics:function(d,e,f,b){var c=b?a.extend({},b):a.extend({},this.socialAnalytics);
ga("send","social",d,e,f,c)
},socialAnalytics:{},trackLinks:function(c,d,b){c=c||"Clicked";
d=d||"body";
b=b||"a";
analytics&&analytics.trackLink(a(b,d),"Link Clicked",function(e){return{category:c,ordinal:a(e).parentsUntil(d).last().prevAll().length+1,text:a(e).text().trim(),href:a(e).attr("href"),rel:a(e).attr("rel")}
})
}};
a(document).ready(function(b){if(!b(".storyItemContainer").data("omniture-map")){TVNZ.news.Analytics.sendPageOmnitureData(b("body").data("omniture-map"))
}})
})(jQuery);