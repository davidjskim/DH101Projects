Timeline.GregorianDateLabeller.monthNames.zh="1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(",");
Timeline.GregorianDateLabeller.labelIntervalFunctions.zh=function(b,c){var a;a=Timeline.DateTime.removeTimeZoneOffset(b,this._timeZone);switch(c){case Timeline.DateTime.DAY:case Timeline.DateTime.WEEK:a=Timeline.GregorianDateLabeller.getMonthName(a.getUTCMonth(),this._locale)+a.getUTCDate()+"\u65e5";break;default:return this.defaultLabelInterval(b,c)}return{text:a,emphasized:!1}};