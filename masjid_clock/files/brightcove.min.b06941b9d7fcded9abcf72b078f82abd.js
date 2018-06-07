var TVNZ=window.TVNZ=window.TVNZ||{};
TVNZ.core=window.TVNZ.core||{};
(function(a){TVNZ.core.brightcove={init:function(){TVNZ.core.brightcove.loadExperiences(document)
},loadExperiences:function(b){a(b).find("object.BrightcoveExperience").each(function(c,d){if(d.type!="application/x-shockwave-flash"){var e=a(d);
if(window.location.protocol==="https:"){e.append("<param name='secureConnections' value='true'/>");
e.append("<param name='secureHTMLConnections' value='true'/>")
}if(!TVNZ.userdata.user.anonymous){e.append("<param name='imaPPID' value='"+TVNZ.userdata.user.userHashValue+"'/>")
}a.when(a("#"+d.id+"-wrapper").trigger("loadExperience")).done(function(){brightcove.createExperiences(null,e.attr("id"))
})
}})
},onTemplateLoaded:function(b){try{a("#"+b+"-wrapper").trigger("templateLoaded",b)
}catch(c){console.log(c,c.stack);
throw c
}},onTemplateReady:function(b){try{var c=a("#"+b.target.experience.id+"-wrapper");
if(!c.data("template-ready-fired")){c.data("template-ready-fired",true);
c.trigger("preTemplateReady",b.target.experience.id);
c.trigger("templateReady",b.target.experience.id)
}}catch(d){throw d
}},onTemplateError:function(b){console.error("brightcove error, type: "+b.type+", errorType: "+b.errorType+", code: "+b.code+", info: "+b.info)
}};
a(document).safeReady(function(){TVNZ.core.brightcove.init()
})
})(jQuery);