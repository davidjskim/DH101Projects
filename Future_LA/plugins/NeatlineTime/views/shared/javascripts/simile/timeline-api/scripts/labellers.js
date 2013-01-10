Timeline.GregorianDateLabeller=function(a,c){this._locale=a;this._timeZone=c};Timeline.GregorianDateLabeller.monthNames=[];Timeline.GregorianDateLabeller.dayNames=[];Timeline.GregorianDateLabeller.labelIntervalFunctions=[];Timeline.GregorianDateLabeller.getMonthName=function(a,c){return Timeline.GregorianDateLabeller.monthNames[c][a]};
Timeline.GregorianDateLabeller.prototype.labelInterval=function(a,c){var b=Timeline.GregorianDateLabeller.labelIntervalFunctions[this._locale];if(b==null)b=Timeline.GregorianDateLabeller.prototype.defaultLabelInterval;return b.call(this,a,c)};Timeline.GregorianDateLabeller.prototype.labelPrecise=function(a){return SimileAjax.DateTime.removeTimeZoneOffset(a,this._timeZone).toUTCString()};
Timeline.GregorianDateLabeller.prototype.defaultLabelInterval=function(a,c){var b,d=!1,a=SimileAjax.DateTime.removeTimeZoneOffset(a,this._timeZone);switch(c){case SimileAjax.DateTime.MILLISECOND:b=a.getUTCMilliseconds();break;case SimileAjax.DateTime.SECOND:b=a.getUTCSeconds();break;case SimileAjax.DateTime.MINUTE:b=a.getUTCMinutes();b==0&&(b=a.getUTCHours()+":00",d=!0);break;case SimileAjax.DateTime.HOUR:b=a.getUTCHours()+"hr";break;case SimileAjax.DateTime.DAY:b=Timeline.GregorianDateLabeller.getMonthName(a.getUTCMonth(),
this._locale)+" "+a.getUTCDate();break;case SimileAjax.DateTime.WEEK:b=Timeline.GregorianDateLabeller.getMonthName(a.getUTCMonth(),this._locale)+" "+a.getUTCDate();break;case SimileAjax.DateTime.MONTH:if(b=a.getUTCMonth(),b!=0){b=Timeline.GregorianDateLabeller.getMonthName(b,this._locale);break}case SimileAjax.DateTime.YEAR:case SimileAjax.DateTime.DECADE:case SimileAjax.DateTime.CENTURY:case SimileAjax.DateTime.MILLENNIUM:d=a.getUTCFullYear();b=d>0?a.getUTCFullYear():1-d+"BC";d=c==SimileAjax.DateTime.MONTH||
c==SimileAjax.DateTime.DECADE&&d%100==0||c==SimileAjax.DateTime.CENTURY&&d%1E3==0;break;default:b=a.toUTCString()}return{text:b,emphasized:d}};
