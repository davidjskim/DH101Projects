(function(b){b.commands.insertOrderedList={exec:function(a,g){var d=a.doc,c=a.selection.getSelectedNode(),e=b.dom.getParentElement(c,{nodeName:"OL"}),h=b.dom.getParentElement(c,{nodeName:"UL"}),c="_wysihtml5-temp-"+(new Date).getTime(),f;a.commands.support(g)?d.execCommand(g,!1,null):e?a.selection.executeAndRestoreSimple(function(){b.dom.resolveList(e)}):h?a.selection.executeAndRestoreSimple(function(){b.dom.renameElement(h,"ol")}):(a.commands.exec("formatBlock","div",c),f=d.querySelector("."+c),
d=f.innerHTML===""||f.innerHTML===b.INVISIBLE_SPACE,a.selection.executeAndRestoreSimple(function(){e=b.dom.convertToList(f,"ol")}),d&&a.selection.selectNode(e.querySelector("li")))},state:function(a){a=a.selection.getSelectedNode();return b.dom.getParentElement(a,{nodeName:"OL"})},value:function(){}}})(wysihtml5);
