(function(){var c=!1;if(document.location.search.length>0)for(var d=document.location.search.substr(1).split("&"),i=0;i<d.length;i++)d[i]=="timeline-use-local-resources"&&(c=!0);d=function(){if(!("Timeline"in window)){window.Timeline={};window.Timeline.DateTime=window.SimileAjax.DateTime;var f=!1,c="timeline.js,band.js,themes.js,ethers.js,ether-painters.js,event-utils.js,labellers.js,sources.js,original-painter.js,detailed-painter.js,overview-painter.js,compact-painter.js,decorators.js,units.js".split(","),
a=["timeline.css","ethers.css","events.css"],d=["timeline.js","labellers.js"],i=[],j="cs,de,en,es,fr,it,nl,ru,se,tr,vi,zh".split(",");try{var e=["en"],k="en",l=null,h=function(m){for(var m=m.split("&"),b=0;b<m.length;b++){var a=m[b].split("=");a[0]=="locales"?e=e.concat(a[1].split(",")):a[0]=="defaultLocale"?k=a[1]:a[0]=="forceLocale"?(l=a[1],e=e.concat(a[1].split(","))):a[0]=="bundle"&&(f=a[1]!="false")}};(function(){if(typeof Timeline_urlPrefix=="string")Timeline.urlPrefix=Timeline_urlPrefix,typeof Timeline_parameters==
"string"&&h(Timeline_parameters);else{for(var a=document.documentElement.getElementsByTagName("head"),b=0;b<a.length;b++)for(var c=a[b].getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d].src,e=f.indexOf("timeline-api.js");if(e>=0){Timeline.urlPrefix=f.substr(0,e);a=f.indexOf("?");a>0&&h(f.substr(a+1));return}}throw Error("Failed to derive URL prefix for Timeline API code files");}})();var n=function(a,b){SimileAjax.includeJavascriptFiles(document,a,b)},o=function(a,b){SimileAjax.includeCssFiles(document,
a,b)};f?(n(Timeline.urlPrefix,["timeline-bundle.js"]),o(Timeline.urlPrefix,["timeline-bundle.css"])):(n(Timeline.urlPrefix+"scripts/",c),o(Timeline.urlPrefix+"styles/",a));var p=[];p[k]=!0;for(var q=function(a){for(var b=0;b<j.length;b++)if(a==j[b])return p[a]=!0;return!1},c=function(a){if(q(a))return a;var b=a.indexOf("-");return b>0&&q(a.substr(0,b))?a.substr(0,b):null},a=0;a<e.length;a++)c(e[a]);var r=k,s=("language"in navigator?navigator.language:navigator.browserLanguage).split(";"),a=0;for(;a<
s.length;a++){var g=c(s[a]);if(g!=null){r=g;break}}for(a=0;a<j.length;a++)g=j[a],p[g]&&(n(Timeline.urlPrefix+"scripts/l10n/"+g+"/",d),o(Timeline.urlPrefix+"styles/l10n/"+g+"/",i));l==null?(Timeline.serverLocale=k,Timeline.clientLocale=r):(Timeline.serverLocale=l,Timeline.clientLocale=l)}catch(t){alert(t)}}};if(typeof SimileAjax=="undefined"){window.SimileAjax_onLoad=d;var h=c?"http://127.0.0.1:9999/ajax/api/simile-ajax-api.js?bundle=false":"http://static.simile.mit.edu/ajax/api-2.2.0/simile-ajax-api.js";
typeof Timeline_ajax_url=="string"&&(h=Timeline_ajax_url);c=function(){var c=document.createElement("script");c.type="text/javascript";c.language="JavaScript";c.src=h;document.getElementsByTagName("head")[0].appendChild(c)};if(document.body==null)try{document.write("<script src='"+h+"' type='text/javascript'><\/script>")}catch(u){c()}else c()}else d()})();