(function(h){function i(a){var b=0;if(a.parentNode){do b+=a.offsetTop||0,a=a.offsetParent;while(a)}return b}var j=h.dom;h.Selection=Base.extend({constructor:function(a){window.rangy.init();this.editor=a;this.composer=a.composer;this.doc=this.composer.doc},getBookmark:function(){var a=this.getRange();return a&&a.cloneRange()},setBookmark:function(a){a&&this.setSelection(a)},setBefore:function(a){var b=rangy.createRange(this.doc);b.setStartBefore(a);b.setEndBefore(a);return this.setSelection(b)},setAfter:function(a){var b=
rangy.createRange(this.doc);b.setStartAfter(a);b.setEndAfter(a);return this.setSelection(b)},selectNode:function(a){var b=rangy.createRange(this.doc),d=a.nodeType===h.ELEMENT_NODE,c="canHaveHTML"in a?a.canHaveHTML:a.nodeName!=="IMG",e=d?a.innerHTML:a.data,e=e===""||e===h.INVISIBLE_SPACE,f=j.getStyle("display").from(a),f=f==="block"||f==="list-item";if(e&&d&&c)try{a.innerHTML=h.INVISIBLE_SPACE}catch(g){}c?b.selectNodeContents(a):b.selectNode(a);c&&e&&d?b.collapse(f):c&&e&&(b.setStartAfter(a),b.setEndAfter(a));
this.setSelection(b)},getSelectedNode:function(a){if(a&&this.doc.selection&&this.doc.selection.type==="Control"&&(a=this.doc.selection.createRange())&&a.length)return a.item(0);a=this.getSelection(this.doc);return a.focusNode===a.anchorNode?a.focusNode:(a=this.getRange(this.doc))?a.commonAncestorContainer:this.doc.body},executeAndRestore:function(a,b){var d=this.doc.body,c=b&&d.scrollTop,e=b&&d.scrollLeft,f='<span class="_wysihtml5-temp-placeholder">'+h.INVISIBLE_SPACE+"</span>",g=this.getRange(this.doc);
if(g){f=g.createContextualFragment(f);g.insertNode(f);try{a(g.startContainer,g.endContainer)}catch(k){setTimeout(function(){throw k;},0)}(caretPlaceholder=this.doc.querySelector("._wysihtml5-temp-placeholder"))?(g=rangy.createRange(this.doc),g.selectNode(caretPlaceholder),g.deleteContents(),this.setSelection(g)):d.focus();if(b)d.scrollTop=c,d.scrollLeft=e;try{caretPlaceholder.parentNode.removeChild(caretPlaceholder)}catch(i){}}else a(d,d)},executeAndRestoreSimple:function(a){var b,d,c=this.getRange(),
e=this.doc.body,f;if(c){b=c.getNodes([3]);e=b[0]||c.startContainer;f=b[b.length-1]||c.endContainer;b=e===c.startContainer?c.startOffset:0;d=f===c.endContainer?c.endOffset:f.length;try{a(c.startContainer,c.endContainer)}catch(g){setTimeout(function(){throw g;},0)}a=rangy.createRange(this.doc);try{a.setStart(e,b)}catch(h){}try{a.setEnd(f,d)}catch(i){}try{this.setSelection(a)}catch(j){}}else a(e,e)},insertHTML:function(a){var a=rangy.createRange(this.doc).createContextualFragment(a),b=a.lastChild;this.insertNode(a);
b&&this.setAfter(b)},insertNode:function(a){var b=this.getRange();b&&b.insertNode(a)},surround:function(a){var b=this.getRange();if(b)try{b.surroundContents(a),this.selectNode(a)}catch(d){a.appendChild(b.extractContents()),b.insertNode(a)}},scrollIntoView:function(){var a=this.doc,b=a.documentElement.scrollHeight>a.documentElement.offsetHeight,d=a._wysihtml5ScrollIntoViewElement=a._wysihtml5ScrollIntoViewElement||function(){var b=a.createElement("span");b.innerHTML=h.INVISIBLE_SPACE;return b}();if(b&&
(this.insertNode(d),b=i(d),d.parentNode.removeChild(d),b>a.body.scrollTop))a.body.scrollTop=b},selectLine:function(){h.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()},_selectLine_W3C:function(){var a=this.doc.defaultView.getSelection();a.modify("extend","left","lineboundary");a.modify("extend","right","lineboundary")},_selectLine_MSIE:function(){var a=this.doc.selection.createRange(),b=a.boundingTop,d=this.doc.body.scrollWidth,c;if(a.moveToPoint){if(b===
0)c=this.doc.createElement("span"),this.insertNode(c),b=c.offsetTop,c.parentNode.removeChild(c);b+=1;for(c=-10;c<d;c+=2)try{a.moveToPoint(c,b);break}catch(e){}for(c=this.doc.selection.createRange();d>=0;d--)try{c.moveToPoint(d,b);break}catch(f){}a.setEndPoint("EndToEnd",c);a.select()}},getText:function(){var a=this.getSelection();return a?a.toString():""},getNodes:function(a,b){var d=this.getRange();return d?d.getNodes([a],b):[]},getRange:function(){var a=this.getSelection();return a&&a.rangeCount&&
a.getRangeAt(0)},getSelection:function(){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow)},setSelection:function(a){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow).setSingleRange(a)}})})(wysihtml5);