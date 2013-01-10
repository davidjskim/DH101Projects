module("wysihtml5.dom.renameElement",{equal:function(b,c,a){return wysihtml5.assert.htmlEqual(b,c,a)},renameElement:function(b,c){var a=wysihtml5.dom.getAsDom(b);wysihtml5.dom.renameElement(a.firstChild,c);return a.innerHTML}});test("Basic tests",function(){this.equal(this.renameElement("<p>foo</p>","div"),"<div>foo</div>");this.equal(this.renameElement("<ul><li>foo</li></ul>","ol"),"<ol><li>foo</li></ol>");this.equal(this.renameElement('<p align="left" class="foo"></p>',"h2"),'<h2 align="left" class="foo"></h2>')});
