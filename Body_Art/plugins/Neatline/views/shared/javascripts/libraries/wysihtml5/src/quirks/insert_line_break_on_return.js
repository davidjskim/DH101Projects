(function(a){var d=a.dom,h="LI,P,H1,H2,H3,H4,H5,H6".split(","),i=["UL","OL","MENU"];a.quirks.insertLineBreakOnReturn=function(e){function g(c){if(c=d.getParentElement(c,{nodeName:["P","DIV"]},2)){var b=document.createTextNode(a.INVISIBLE_SPACE);d.insert(b).before(c);d.replaceWithChildNodes(c);e.selection.selectNode(b)}}d.observe(e.element.ownerDocument,"keydown",function(c){var b=c.keyCode;if(!(c.shiftKey||b!==a.ENTER_KEY&&b!==a.BACKSPACE_KEY)){var f=e.selection.getSelectedNode();(f=d.getParentElement(f,
{nodeName:h},4))?f.nodeName==="LI"&&(b===a.ENTER_KEY||b===a.BACKSPACE_KEY)?setTimeout(function(){var a=e.selection.getSelectedNode();a&&(d.getParentElement(a,{nodeName:i},2)||g(a))},0):f.nodeName.match(/H[1-6]/)&&b===a.ENTER_KEY&&setTimeout(function(){g(e.selection.getSelectedNode())},0):b===a.ENTER_KEY&&!a.browser.insertsLineBreaksOnReturn()&&(e.commands.exec("insertLineBreak"),c.preventDefault())}})}})(wysihtml5);