/*
     http://www.apache.org/licenses/LICENSE-2.0.html Apache 2 License
*/
(function(f){f.widget("neatline.spanstyler",{_create:function(){this.rightPercent=this.leftPercent=null;this.baseStyle=this.element.attr("style")},constructCss:function(a,c,d){!_.isUndefined(c)&&!_.isUndefined(d)?(this.leftPercent=c,this.rightPercent=d):!_.isNull(this.leftPercent)&&!_.isNull(this.rightPercent)?(c=this.leftPercent,d=this.rightPercent):(c=0,d=99);var b=this.__hexToRgb(a),e=this.__rgbObjectToCssValue(b,1),b=this.__rgbObjectToCssValue(b,0),a=a[0]==="#"?a:"#"+a;this.css="background: "+
a+"; background: -moz-linear-gradient(left, "+b+" 0%, "+e+" "+c+"%, "+e+" "+d+"%, "+b+" 99%); background: -webkit-gradient(linear, left top, right top, color-stop(0%,"+b+"), color-stop("+c+"%,"+e+"), color-stop("+d+"%,"+e+"), color-stop(99%,"+b+")); background: -webkit-linear-gradient(left, "+b+" 0%, "+e+" "+c+"%, "+e+" "+d+"%, "+b+" 99%); background: -o-linear-gradient(left, "+b+" 0%, "+e+" "+c+"%, "+e+" "+d+"%, "+b+" 99%); background: -ms-linear-gradient(left, "+b+" 0%, "+e+" "+c+"%, "+e+" "+d+
"%, "+b+" 99%); background: linear-gradient(left, "+b+" 0%, "+e+" "+c+"%, "+e+" "+d+"%, "+b+" 99%); "},applyCss:function(){this.element.attr("style",(typeof this.baseStyle==="undefined"?"":this.baseStyle)+this.css)},__hexToRgb:function(a){a[0]==="#"&&(a=a.slice(1));var c=parseInt(a.substring(0,2),16),d=parseInt(a.substring(2,4),16),a=parseInt(a.substring(4,6),16);return{red:c,green:d,blue:a}},__rgbObjectToCssValue:function(a,c){return"rgba("+a.red+", "+a.green+", "+a.blue+", "+c+")"},getAttr:function(a){return this[a]}})})(jQuery);