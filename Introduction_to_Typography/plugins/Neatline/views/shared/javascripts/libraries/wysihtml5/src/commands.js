wysihtml5.Commands=Base.extend({constructor:function(a){this.editor=a;this.composer=a.composer;this.doc=this.composer.doc},support:function(a){return wysihtml5.browser.supportsCommand(this.doc,a)},exec:function(a,c){var b=wysihtml5.commands[a],d=wysihtml5.lang.array(arguments).get(),e=b&&b.exec,f=null;this.editor.fire("beforecommand:composer");if(e)d.unshift(this.composer),f=e.apply(b,d);else try{f=this.doc.execCommand(a,!1,c)}catch(g){}this.editor.fire("aftercommand:composer");return f},state:function(a,
c){var b=wysihtml5.commands[a],d=wysihtml5.lang.array(arguments).get(),e=b&&b.state;if(e)return d.unshift(this.composer),e.apply(b,d);else try{return this.doc.queryCommandState(a)}catch(f){return!1}},value:function(a){var c=wysihtml5.commands[a],b=c&&c.value;if(b)return b.call(c,this.composer,a);else try{return this.doc.queryCommandValue(a)}catch(d){return null}}});