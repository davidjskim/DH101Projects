Timeline.PlanningEtherPainter=function(a){this._params=a;this._intervalUnit=a.intervalUnit;this._multiple="multiple"in a?a.multiple:1;this._theme=a.theme};
Timeline.PlanningEtherPainter.prototype.initialize=function(a,e){this._band=a;this._timeline=e;this._backgroundLayer=a.createLayerDiv(0);this._backgroundLayer.setAttribute("name","ether-background");this._backgroundLayer.style.background=this._theme.ether.backgroundColors[a.getIndex()];this._lineLayer=this._markerLayer=null;var b="align"in this._params&&typeof this._params.align=="string"?this._params.align:this._theme.ether.interval.marker[e.isHorizontal()?"hAlign":"vAlign"];this._intervalMarkerLayout=
new Timeline.PlanningEtherMarkerLayout(this._timeline,this._band,this._theme,b,"showLine"in this._params?this._params.showLine:this._theme.ether.interval.line.show);this._highlight=new Timeline.EtherHighlight(this._timeline,this._band,this._theme,this._backgroundLayer)};Timeline.PlanningEtherPainter.prototype.setHighlight=function(a,e){this._highlight.position(a,e)};
Timeline.PlanningEtherPainter.prototype.paint=function(){this._markerLayer&&this._band.removeLayerDiv(this._markerLayer);this._markerLayer=this._band.createLayerDiv(100);this._markerLayer.setAttribute("name","ether-markers");this._markerLayer.style.display="none";this._lineLayer&&this._band.removeLayerDiv(this._lineLayer);this._lineLayer=this._band.createLayerDiv(1);this._lineLayer.setAttribute("name","ether-lines");this._lineLayer.style.display="none";var a=Math.max(0,Math.ceil(Timeline.PlanningUnit.toNumber(this._band.getMinDate()))),
e=Math.floor(Timeline.PlanningUnit.toNumber(this._band.getMaxDate())),b=1,f=this._multiple;switch(this._intervalUnit){case Timeline.PlanningUnit.DAY:b=1;break;case Timeline.PlanningUnit.WEEK:b=7;break;case Timeline.PlanningUnit.MONTH:b=28;break;case Timeline.PlanningUnit.QUARTER:b=84;break;case Timeline.PlanningUnit.YEAR:b=336}for(var i=this._band.getLabeller();;)if(this._intervalMarkerLayout.createIntervalMarker(Timeline.PlanningUnit.fromNumber(a),i,this._intervalUnit,this._markerLayer,this._lineLayer),
a<e)a+=b*f;else break;this._markerLayer.style.display="block";this._lineLayer.style.display="block"};Timeline.PlanningEtherPainter.prototype.softPaint=function(){};
Timeline.PlanningEtherMarkerLayout=function(a,e,b,f,i){var j=a.isHorizontal();this.positionDiv=j?f=="Top"?function(a,c){a.style.left=c+"px";a.style.top="0px"}:function(a,c){a.style.left=c+"px";a.style.bottom="0px"}:f=="Left"?function(a,c){a.style.top=c+"px";a.style.left="0px"}:function(a,c){a.style.top=c+"px";a.style.right="0px"};var g=b.ether.interval.marker,h=b.ether.interval.line,b=(j?"h":"v")+f,l=g[b+"Styler"],m=g[b+"EmphasizedStyler"];this.createIntervalMarker=function(b,c,f,g,n){var k=Math.round(e.dateToPixelOffset(b));
if(i){var d=a.getDocument().createElement("div");d.style.position="absolute";h.opacity<100&&Timeline.Graphics.setOpacity(d,h.opacity);j?(d.style.borderLeft="1px solid "+h.color,d.style.left=k+"px",d.style.width="1px",d.style.top="0px",d.style.height="100%"):(d.style.borderTop="1px solid "+h.color,d.style.top=k+"px",d.style.height="1px",d.style.left="0px",d.style.width="100%");n.appendChild(d)}b=c.labelInterval(b,f);c=a.getDocument().createElement("div");c.innerHTML=b.text;c.style.position="absolute";
(b.emphasized?m:l)(c);this.positionDiv(c,k);g.appendChild(c);return c}};
