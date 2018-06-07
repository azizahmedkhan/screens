(function(){var a=window.analytics=window.analytics||[];
if(a.initialize){return
}if(a.invoked){if(window.console&&console.error){console.error("Segment snippet included twice.")
}return
}a.invoked=true;
a.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];
a.factory=function(d){return function(){var e=Array.prototype.slice.call(arguments);
e.unshift(d);
a.push(e);
return a
}
};
for(var c=0;
c<a.methods.length;
c++){var b=a.methods[c];
a[b]=a.factory(b)
}a.load=function(e){var d=document.createElement("script");
d.type="text/javascript";
d.async=true;
d.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";
var f=document.getElementsByTagName("script")[0];
f.parentNode.insertBefore(d,f)
};
a.SNIPPET_VERSION="4.0.0"
})();
$(document).ready(function(){var b=document.getElementById("segment.config");
if(b){var a=JSON.parse(document.getElementById("segment.config").textContent);
if(a.enabled){analytics.load(a.segmentWriteKey)
}}if(TVNZ.userdata.user&&(!TVNZ.userdata.user.anonymous)){analytics.identify(TVNZ.userdata.user.userHashValue)
}});
var TVNZ=window.TVNZ||{};
(function(){TVNZ.googleAnalytics={sendVideoStartEvent:function(a){dataLayer.push({event:"VideoStart",eventCategory:"Video",eventAction:"Play",eventLabel:a})
},sendLiveVideoStartEvent:function(a){dataLayer.push({event:"VideoStart",eventCategory:"Video",eventAction:"Play Live",eventLabel:a})
},sendVideoCompleteEvent:function(a){dataLayer.push({event:"VideoComplete",eventCategory:"Video",eventAction:"Complete",eventLabel:a})
},sendNewsVideoEvent:function(a){analytics.ready(function(){ga(function(b){a.properties.clientID=b.get("clientId");
analytics.track(a.event,a.properties)
})
})
},sendLiveTileEvent:function(b,c){var a=(document.domain=="www.tvnz.co.nz")?"prod":document.domain.substring(3,document.domain.lastIndexOf(".tvnz.co.nz"));
var d={event:b,properties:{category:"livetile",label:c,environment:a}};
analytics.ready(function(){ga(function(e){d.properties.clientID=e.get("clientId");
analytics.track(d.event,d.properties)
})
})
},sendArticleEvent:function(c){var a=(document.domain=="www.tvnz.co.nz")?"prod":document.domain.substring(3,document.domain.lastIndexOf(".tvnz.co.nz"));
var b={event:"article shown",properties:{category:"article",label:c,environment:a}};
analytics.ready(function(){ga(function(d){b.properties.clientID=d.get("clientId");
analytics.track(b.event,b.properties)
})
})
},sendArticleTrack:function(a,b){analytics.ready(function(){if(a&&a.length>0){for(var d=0;
d<a.length;
d++){var c=a[d];
if(c.type==="segment-page"&&c.properties){var e=c.properties;
e.memberID=TVNZ.userdata.user.anonymous?"none":TVNZ.userdata.user.userHashValue;
e.loggedInStatus=TVNZ.userdata.user.anonymous?"Not Logged":"Logged In";
e.sessionID=TVNZ.news.Analytics.getSessionId();
e.hitTimeStamp=TVNZ.news.Analytics.getHitTimestamp();
e.AdBlocker=TVNZ.news.Analytics.adblockDetected();
e.path=b;
ga(function(f){e.clientID=f.get("clientId");
analytics.page(c.properties)
});
console.log(c.properties)
}}}})
}}
})();