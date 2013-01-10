/*
     http://www.apache.org/licenses/LICENSE-2.0.html Apache 2 License
*/
(function(d){d.widget("neatline.configuremap",{_create:function(){this.content=d("#configure-map");this.vectorColor=this.content.find('input[name="default-vector-color"]');this.strokeColor=this.content.find('input[name="default-stroke-color"]');this.highlightColor=this.content.find('input[name="default-highlight-color"]');this.vectorOpacity=this.content.find('input[name="default-vector-opacity"]');this.selectOpacity=this.content.find('input[name="default-select-opacity"]');this.strokeOpacity=this.content.find('input[name="default-stroke-opacity"]');
this.graphicOpacity=this.content.find('input[name="default-graphic-opacity"]');this.strokeWidth=this.content.find('input[name="default-stroke-width"]');this.pointRadius=this.content.find('input[name="default-point-radius"]');this.baseLayer=this.content.find('select[name="base-layer"]');this.saveButton=this.content.find("button.save");this._constructDropdown();this._constructFormWidgets()},_constructDropdown:function(){this.element.nlDropdown()},_constructFormWidgets:function(){var a=this;this.vectorColor.miniColors({change:function(b){a._trigger("vectorcoloredit",
{},{color:b})}});this.strokeColor.miniColors({change:function(b){a._trigger("strokecoloredit",{},{color:b})}});this.highlightColor.miniColors({change:function(b){a._trigger("highlightcoloredit",{},{color:b})}});this.vectorOpacity.integerdragger({min:0,max:100,px_per_unit:1,change:function(b,c){a._trigger("vectoropacityedit",{},{value:c.value})}});this.selectOpacity.integerdragger({min:0,max:100,px_per_unit:1,change:function(b,c){a._trigger("selectopacityedit",{},{value:c.value})}});this.strokeOpacity.integerdragger({min:0,
max:100,px_per_unit:1,change:function(b,c){a._trigger("strokeopacityedit",{},{value:c.value})}});this.graphicOpacity.integerdragger({min:0,max:100,px_per_unit:1,change:function(b,c){a._trigger("graphicopacityedit",{},{value:c.value})}});this.strokeWidth.integerdragger({min:0,def:1,px_per_unit:8,change:function(b,c){a._trigger("strokewidthedit",{},{value:c.value})}});this.pointRadius.integerdragger({min:1,def:6,px_per_unit:8,change:function(b,c){a._trigger("pointradiusedit",{},{value:c.value})}});
this.saveButton.bind({mousedown:function(){a.postSettings()},click:function(a){a.preventDefault()}})},_getData:function(){var a={};a.exhibit_id=Neatline.record.id;a.vector_color=this.vectorColor.val();a.stroke_color=this.strokeColor.val();a.highlight_color=this.highlightColor.val();a.vector_opacity=parseInt(this.vectorOpacity.val(),10);a.select_opacity=parseInt(this.selectOpacity.val(),10);a.stroke_opacity=parseInt(this.strokeOpacity.val(),10);a.graphic_opacity=parseInt(this.graphicOpacity.val(),
10);a.stroke_width=parseInt(this.strokeWidth.val(),10);a.point_radius=parseInt(this.pointRadius.val(),10);a.base_layer=parseInt(this.baseLayer.val(),10);return a},postSettings:function(){var a=this,b=this._getData();d.ajax({url:"ajax/mapsettings",type:"POST",data:b,success:function(){a._trigger("newdefaults")}})},getAttr:function(a){return this[a]}})})(jQuery);