(function(e){function f(a,b,d){var c=a+":"+b;if(!g[c]){var j=g,h=e.selection.HTMLApplier,f=i[a],a=f?[a.toLowerCase(),f.toLowerCase()]:[a.toLowerCase()];j[c]=new h(a,b,d,!0)}return g[c]}var i={strong:"b",em:"i",b:"strong",i:"em"},g={};e.commands.formatInline={exec:function(a,b,d,c,e){b=a.selection.getRange();if(!b)return!1;f(d,c,e).toggleRange(b);a.selection.setSelection(b)},state:function(a,b,d,c,g){var b=a.doc,h=i[d]||d;if(!e.dom.hasElementWithTagName(b,d)&&!e.dom.hasElementWithTagName(b,h))return!1;
if(c&&!e.dom.hasElementWithClassName(b,c))return!1;a=a.selection.getRange();return!a?!1:f(d,c,g).isAppliedToRange(a)},value:function(){}}})(wysihtml5);