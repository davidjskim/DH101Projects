Timeline.GeochronoLabeller=function(c){this._locale=c};Timeline.GeochronoLabeller.eonNames=[];Timeline.GeochronoLabeller.eraNames=[];Timeline.GeochronoLabeller.periodNames=[];Timeline.GeochronoLabeller.epochNames=[];Timeline.GeochronoLabeller.ageNames=[];
Timeline.GeochronoLabeller.prototype.labelInterval=function(c,f){var e=Timeline.GeochronoUnit.toNumber(c),a,b;switch(f){case Timeline.GeochronoUnit.AGE:a=Timeline.Geochrono.ages;b=Timeline.GeochronoLabeller.ageNames;break;case Timeline.GeochronoUnit.EPOCH:a=Timeline.Geochrono.epoches;b=Timeline.GeochronoLabeller.epochNames;break;case Timeline.GeochronoUnit.PERIOD:a=Timeline.Geochrono.periods;b=Timeline.GeochronoLabeller.periodNames;break;case Timeline.GeochronoUnit.ERA:a=Timeline.Geochrono.eras;b=
Timeline.GeochronoLabeller.eraNames;break;case Timeline.GeochronoUnit.EON:a=Timeline.Geochrono.eons;b=Timeline.GeochronoLabeller.eonNames;break;default:return{text:e,emphasized:!1}}for(var d=a.length-1;d>=0;d--)if(e<=a[d].start)return{text:b[this._locale][d].name,emphasized:e==a[d].start};return{text:e,emphasized:!1}};Timeline.GeochronoLabeller.prototype.labelPrecise=function(c){return Timeline.GeochronoUnit.toNumber(c)+"ma"};
