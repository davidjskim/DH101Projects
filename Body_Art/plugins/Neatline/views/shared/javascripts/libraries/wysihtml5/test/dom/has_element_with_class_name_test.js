if("querySelector"in document||wysihtml5.browser.supportsNativeGetElementsByClassName())module("wysihtml5.dom.hasElementWithClassName",{teardown:function(){for(var a;a=document.querySelector("iframe.wysihtml5-sandbox");)a.parentNode.removeChild(a)}}),asyncTest("Basic test",function(){expect(3);(new wysihtml5.dom.Sandbox(function(a){var a=a.getDocument(),b=a.createElement("i");b.className="wysiwyg-color-aqua";ok(!wysihtml5.dom.hasElementWithClassName(a,"wysiwyg-color-aqua"));a.body.appendChild(b);
ok(wysihtml5.dom.hasElementWithClassName(a,"wysiwyg-color-aqua"));b.parentNode.removeChild(b);ok(!wysihtml5.dom.hasElementWithClassName(a,"wysiwyg-color-aqua"));start()})).insertInto(document.body)});
