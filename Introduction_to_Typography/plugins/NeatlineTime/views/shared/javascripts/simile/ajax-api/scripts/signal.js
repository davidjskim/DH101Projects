(function(){for(var a=SimileAjax.urlPrefix+"scripts/signal.js",d=document.documentElement.getElementsByTagName("head"),c=0;c<d.length;c++)for(var b=d[c].firstChild;b!=null;){if(b.nodeType==1&&b.tagName.toLowerCase()=="script"){var e=b.src;if(e.indexOf(a)>=0){d[c].removeChild(b);a=parseInt(e.substr(e.indexOf(a)+a.length+1));SimileAjax.loadingScriptsCount-=a;SimileAjax.loadingScriptsCount==0&&(a=null,typeof SimileAjax_onLoad=="string"?(a=eval(SimileAjax_onLoad),SimileAjax_onLoad=null):typeof SimileAjax_onLoad==
"function"&&(a=SimileAjax_onLoad,SimileAjax_onLoad=null),a!=null&&a());return}}b=b.nextSibling}})();
