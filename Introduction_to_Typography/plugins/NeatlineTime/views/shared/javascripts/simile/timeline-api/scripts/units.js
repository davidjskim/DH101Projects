Timeline.NativeDateUnit={};Timeline.NativeDateUnit.createLabeller=function(a,b){return new Timeline.GregorianDateLabeller(a,b)};Timeline.NativeDateUnit.makeDefaultValue=function(){return new Date};Timeline.NativeDateUnit.cloneValue=function(a){return new Date(a.getTime())};Timeline.NativeDateUnit.getParser=function(a){typeof a=="string"&&(a=a.toLowerCase());return a=="iso8601"||a=="iso 8601"?Timeline.DateTime.parseIso8601DateTime:Timeline.DateTime.parseGregorianDateTime};
Timeline.NativeDateUnit.parseFromObject=function(a){return Timeline.DateTime.parseGregorianDateTime(a)};Timeline.NativeDateUnit.toNumber=function(a){return a.getTime()};Timeline.NativeDateUnit.fromNumber=function(a){return new Date(a)};Timeline.NativeDateUnit.compare=function(a,b){var c,d;c=typeof a=="object"?a.getTime():Number(a);d=typeof b=="object"?b.getTime():Number(b);return c-d};Timeline.NativeDateUnit.earlier=function(a,b){return Timeline.NativeDateUnit.compare(a,b)<0?a:b};
Timeline.NativeDateUnit.later=function(a,b){return Timeline.NativeDateUnit.compare(a,b)>0?a:b};Timeline.NativeDateUnit.change=function(a,b){return new Date(a.getTime()+b)};
