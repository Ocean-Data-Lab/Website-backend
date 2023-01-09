(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[8],{278:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return I})),r.d(t,"c",(function(){return T}));var a=r(142),n=r(143),i=r(155),s=r(60),u=r(14),c=r(154),o=r.n(c),l=r(146),f=r(266),h=r(308),d=r(182),p=r(318),m=[0,0];function v(e,t){if(!t)return null;if("x"in t){var r,a,n={x:0,y:0};return r=e(t.x,t.y,m),a=Object(u.a)(r,2),n.x=a[0],n.y=a[1],null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){var i,s,c,o,l={xmin:0,ymin:0,xmax:0,ymax:0};return i=e(t.xmin,t.ymin,m),s=Object(u.a)(i,2),l.xmin=s[0],l.ymin=s[1],c=e(t.xmax,t.ymax,m),o=Object(u.a)(c,2),l.xmax=o[0],l.ymax=o[1],t.hasZ&&(l.zmin=t.zmin,l.zmax=t.zmax,l.hasZ=!0),t.hasM&&(l.mmin=t.mmin,l.mmax=t.mmax,l.hasM=!0),l}return"rings"in t?{rings:g(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:g(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:b(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function g(e,t){var r,a=[],n=Object(s.a)(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;a.push(b(i,t))}}catch(u){n.e(u)}finally{n.f()}return a}function b(e,t){var r,a=[],n=Object(s.a)(e);try{for(n.s();!(r=n.n()).done;){var i=r.value,u=t(i[0],i[1],[0,0]);a.push(u),i.length>2&&u.push(i[2]),i.length>3&&u.push(i[3])}}catch(c){n.e(c)}finally{n.f()}return a}function y(e,t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return a=Array.isArray(t)?t.map((function(e){return Object(l.k)(e.geometry)&&e.geometry.spatialReference})):[t],e.next=5,Object(f.d)(a.map((function(e){return{source:e,dest:r}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=v.bind(null,p.c),j=v.bind(null,p.f);function I(e,t,r,a){if(!e)return e;if(r||(r=t,t=e.spatialReference),!Object(d.l)(t)||!Object(d.l)(r)||Object(d.d)(t,r))return e;if(Object(p.a)(t,r)){var n=Object(d.p)(r)?O(e):j(e);return n.spatialReference=r,n}return Object(f.i)(h.a,[e],t,r,null,a)[0]}var _=function(){function e(){Object(a.a)(this,e),this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return Object(n.a)(e,[{key:"push",value:function(){var e=Object(i.a)(o.a.mark((function e(t,r,a){var n,i=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.length&&r&&a&&!Object(d.d)(r,a)){e.next=2;break}return e.abrupt("return",t);case 2:return n={geometries:t,inSpatialReference:r,outSpatialReference:a,resolve:null},e.abrupt("return",(this._jobs.push(n),new Promise((function(e){n.resolve=e,null===i._timer&&(i._timer=setTimeout(i._process,10))}))));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"_process",value:function(){this._timer=null;var e=this._jobs.shift();if(e){var t=e.geometries,r=e.inSpatialReference,a=e.outSpatialReference,n=e.resolve;Object(p.a)(r,a)?Object(d.p)(a)?n(t.map(O)):n(t.map(j)):n(Object(f.i)(h.a,t,r,a,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}}]),e}(),F=new _;function T(e,t,r){return F.push(e,t,r)}},308:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(143),n=r(142),i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,r){var a=new s(e.getPointX(t),e.getPointY(t),r),n=e.hasZ(t),i=e.hasM(t);return n&&(a.z=e.getPointZ(t)),i&&(a.m=e.getPointM(t)),a},exportPolygon:function(e,t,r){return new u(e.exportPaths(t),r,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,r){return new c(e.exportPaths(t),r,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,r){return new o(e.exportPoints(t),r,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,r){var a=e.hasZ(t),n=e.hasM(t),i=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),r);if(a){var s=e.getZExtent(t);i.zmin=s.vmin,i.zmax=s.vmax}if(n){var u=e.getMExtent(t);i.mmin=u.vmin,i.mmax=u.vmax}return i}};var s=Object(a.a)((function e(t,r,a){Object(n.a)(this,e),this.x=t,this.y=r,this.spatialReference=a,this.z=void 0,this.m=void 0}));var u=Object(a.a)((function e(t,r,a,i){Object(n.a)(this,e),this.rings=t,this.spatialReference=r,this.hasZ=void 0,this.hasM=void 0,a&&(this.hasZ=a),i&&(this.hasM=i)}));var c=Object(a.a)((function e(t,r,a,i){Object(n.a)(this,e),this.paths=t,this.spatialReference=r,this.hasZ=void 0,this.hasM=void 0,a&&(this.hasZ=a),i&&(this.hasM=i)}));var o=Object(a.a)((function e(t,r,a,i){Object(n.a)(this,e),this.points=t,this.spatialReference=r,this.hasZ=void 0,this.hasM=void 0,a&&(this.hasZ=a),i&&(this.hasM=i)}));var l=Object(a.a)((function e(t,r,a,i,s){Object(n.a)(this,e),this.xmin=t,this.ymin=r,this.xmax=a,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}))},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(60),n=r(146);function i(e,t){return e?t?4:3:t?3:2}function s(e,t,r,s,o){if(Object(n.j)(t)||!t.lengths.length)return null;var l="upperLeft"===(null===o||void 0===o?void 0:o.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var f,h=e.coords,d=[],p=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],m=t.lengths,v=t.coords,g=i(r,s),b=0,y=Object(a.a)(m);try{for(y.s();!(f=y.n()).done;){var x=f.value,O=u(p,v,b,x,r,s,l);O&&d.push(O),b+=x*g}}catch(_){y.e(_)}finally{y.f()}if(d.sort((function(e,t){var a=l*e[2]-l*t[2];return 0===a&&r&&(a=e[4]-t[4]),a})),d.length){var j=6*d[0][2];h[0]=d[0][0]/j,h[1]=d[0][1]/j,r&&(j=6*d[0][4],h[2]=0!==j?d[0][3]/j:0),(h[0]<p[0]||h[0]>p[1]||h[1]<p[2]||h[1]>p[3]||r&&(h[2]<p[4]||h[2]>p[5]))&&(h.length=0)}if(!h.length){var I=t.lengths[0]?c(v,0,m[0],r,s):null;if(!I)return null;h[0]=I[0],h[1]=I[1],r&&I.length>2&&(h[2]=I[2])}return e}function u(e,t,r,a,n,s){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=i(n,s),o=r,l=r+c,f=0,h=0,d=0,p=0,m=0,v=0,g=a-1;v<g;v++,o+=c,l+=c){var b=t[o],y=t[o+1],x=t[o+2],O=t[l],j=t[l+1],I=t[l+2],_=b*j-O*y;p+=_,f+=(b+O)*_,h+=(y+j)*_,n&&(d+=(x+I)*(_=b*I-O*x),m+=_),b<e[0]&&(e[0]=b),b>e[1]&&(e[1]=b),y<e[2]&&(e[2]=y),y>e[3]&&(e[3]=y),n&&(x<e[4]&&(e[4]=x),x>e[5]&&(e[5]=x))}if(p*u>0&&(p*=-1),m*u>0&&(m*=-1),!p)return null;var F=[f,h,.5*p];return n&&(F[3]=d,F[4]=.5*m),F}function c(e,t,r,a,n){for(var s=i(a,n),u=t,c=t+s,d=0,p=0,m=0,v=0,g=0,b=r-1;g<b;g++,u+=s,c+=s){var y=e[u],x=e[u+1],O=e[u+2],j=e[c],I=e[c+1],_=e[c+2],F=a?l(y,x,O,j,I,_):o(y,x,j,I);if(F)if(d+=F,a){var T=h(y,x,O,j,I,_);p+=F*T[0],m+=F*T[1],v+=F*T[2]}else{var w=f(y,x,j,I);p+=F*w[0],m+=F*w[1]}}return d>0?a?[p/d,m/d,v/d]:[p/d,m/d]:r>0?a?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,r,a){var n=r-e,i=a-t;return Math.sqrt(n*n+i*i)}function l(e,t,r,a,n,i){var s=a-e,u=n-t,c=i-r;return Math.sqrt(s*s+u*u+c*c)}function f(e,t,r,a){return[e+.5*(r-e),t+.5*(a-t)]}function h(e,t,r,a,n,i){return[e+.5*(a-e),t+.5*(n-t),r+.5*(i-r)]}},484:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return z})),r.d(t,"c",(function(){return I})),r.d(t,"d",(function(){return _})),r.d(t,"e",(function(){return T})),r.d(t,"f",(function(){return j}));var a=r(155),n=r(154),i=r.n(n),s=r(200),u=r(146),c=r(250),o=r(542),l=r(168),f=r(285),h=r(182),d=(r(344),r(188)),p=r(216),m=r(278),v=new s.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g=Object.freeze({}),b=new p.a,y=new p.a,x=new p.a,O={esriGeometryPoint:d.m,esriGeometryPolyline:d.o,esriGeometryPolygon:d.n,esriGeometryMultipoint:d.l};function j(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(Object(u.j)(t))return null;var i=e.hasZ&&a,s=e.hasM&&n;if(r){var c=Object(d.u)(x,t,e.hasZ,e.hasM,"esriGeometryPoint",r,a,n);return Object(d.m)(c,i,s)}return Object(d.m)(t,i,s)}function I(e,t,r,a,n,i){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,o=t&&s,l=r&&c,f=Object(u.k)(a)?"coords"in a?a:a.geometry:null;if(Object(u.j)(f))return null;if(n){var h=Object(d.q)(y,f,t,r,e,n,s,c);return i&&(h=Object(d.u)(x,h,o,l,e,i)),O[e](h,o,l)}if(i){var p=Object(d.u)(x,f,t,r,e,i,s,c);return O[e](p,o,l)}return Object(d.x)(b,f,t,r,s,c),O[e](b,o,l)}function _(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(a.a)(i.a.mark((function e(t,r,a){var n,s,u,c,o,l,f,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.outFields,s=t.orderByFields,u=t.groupByFieldsForStatistics,c=t.outStatistics,n)for(o=0;o<n.length;o++)n[o]=n[o].trim();if(s)for(l=0;l<s.length;l++)s[l]=s[l].trim();if(u)for(f=0;f<u.length;f++)u[f]=u[f].trim();if(c)for(h=0;h<c.length;h++)c[h].onStatisticField&&(c[h].onStatisticField=c[h].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),T(t,r,a)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,r){return w.apply(this,arguments)}function w(){return(w=Object(a.a)(i.a.mark((function e(t,r,a){var n,s,c,h,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(n=t.where,t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||r&&r===n)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,V(t);case 7:return s=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(c=t.geometry.spatialReference,(s=Object(o.a)(s)).spatialReference=c),t.geometry=s,e.next=12,Object(m.a)(s.spatialReference,a);case 12:return e.next=14,Object(f.a)(Object(l.a)(s));case 14:if(h=e.sent[0],!Object(u.j)(h)){e.next=17;break}throw g;case 17:return d=h.toJSON(),e.next=20,Object(m.b)(d,d.spatialReference,a);case 20:if(p=e.sent){e.next=23;break}throw g;case 23:return e.abrupt("return",(p.spatialReference=a,t.geometry=p,t));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return k.apply(this,arguments)}function k(){return(k=Object(a.a)(i.a.mark((function e(t){var r,a,n,s,u,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.geometry,a=t.distance,n=t.units,null!=a&&!("vertexAttributes"in r)){e.next=3;break}return e.abrupt("return",r);case 3:if(s=r.spatialReference,u=n?v.fromJSON(n):Object(c.e)(s),!s||!Object(h.h)(s)&&!Object(h.p)(s)){e.next=9;break}e.t0=r,e.next=12;break;case 9:return e.next=11,Object(m.a)(s,h.b).then((function(){return Object(m.b)(r,h.b)}));case 11:e.t0=e.sent;case 12:return o=e.t0,e.next=15,S();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(o.spatialReference,o,a,u));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return N.apply(this,arguments)}function N(){return(N=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(6),r.e(16)]).then(r.bind(null,525));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return e&&R in e?JSON.parse(JSON.stringify(e,M)):e}var R="_geVersion",M=function(e,t){return e!==R?t:void 0}},673:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return p}));var a=r(16),n=r(60),i=r(159),s=r(142),u=r(143),c=r(721),o=r(433),l=new(function(){function e(t,r){Object(s.a)(this,e),this._cache=new c.a(t),this._invalidCache=new c.a(r)}return Object(u.a)(e,[{key:"get",value:function(e,t){var r="".concat(t.uid,":").concat(e),a=this._cache.get(r);if(a)return a;if(void 0!==this._invalidCache.get(r))return null;try{var n=o.WhereClause.create(e,t);return this._cache.put(r,n),n}catch(i){return this._invalidCache.put(r,null),null}}}]),e}())(50,500),f="feature-store:unsupported-query",h=" as ",d=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function p(e,t){if(!t)return!0;var r=l.get(t,e);if(!r)throw new i.a(f,"invalid SQL expression",{where:t});if(!r.isStandardized)throw new i.a(f,"where clause is not standard",{where:t});return g(e,r.fieldNames,"where clause contains missing fields"),!0}function m(e,t,r){if(!t)return!0;var a=l.get(t,e);if(!a)throw new i.a(f,"invalid SQL expression",{having:t});if(!a.isAggregate)throw new i.a(f,"having does not contain a valid aggregate function",{having:t});var n=a.fieldNames;if(g(e,n,"having contains missing fields"),!a.getExpressions().every((function(t){var a=t.aggregateType,n=t.field,i=e.has(n)&&e.get(n).name;return r.some((function(t){var r=t.onStatisticField,n=t.statisticType;return(e.has(r)&&e.get(r).name)===i&&n.toLowerCase().trim()===a}))})))throw new i.a(f,"expressions in having should also exist in outStatistics",{having:t});return!0}function v(e,t){return e?l.get(e,t):null}function g(e,t,r){var s,u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=[],o=Object(n.a)(t);try{for(o.s();!(s=o.n()).done;){var l=s.value;if("*"!==l&&!e.has(l))if(u){var h=b(l);try{var d=v(h,e);if(!d)throw new i.a(f,"invalid SQL expression",{where:h});if(!d.isStandardized)throw new i.a(f,"expression is not standard",{clause:d});g(e,d.fieldNames,"expression contains missing fields")}catch(m){var p=m&&m.details;if(p&&(p.clause||p.where))throw m;p&&p.missingFields?c.push.apply(c,Object(a.a)(p.missingFields)):c.push(l)}}else c.push(l)}}catch(y){o.e(y)}finally{o.f()}if(c.length)throw new i.a(f,r,{missingFields:c})}function b(e){return e.split(h)[0]}function y(e){return e.split(h)[1]}function x(e,t){var r=t.get(e);return!!r&&!d.has(r.type)}},772:function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return a}));var a,n,i=r(16),s=r(5),u=r(155),c=r(60),o=r(142),l=r(143),f=r(154),h=r.n(f),d=r(146),p=r(349),m=r(542),v=r(270),g=r(182),b=r(673),y=r(581),x=function(){function e(t,r,a){Object(o.a)(this,e),this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=a,this.featureAdapter=r;var n=t.outFields;if(n&&!n.includes("*")){this.outFields=n;var i,s=0,u=Object(c.a)(n);try{for(u.s();!(i=u.n()).done;){var l=i.value,f=Object(b.b)(l),h=this.fieldsIndex.get(f),d=h?null:Object(b.c)(f,a),p=h?h.name:Object(b.a)(l)||"FIELD_EXP_"+s++;this._fieldDataCache.set(l,{alias:p,clause:d})}}catch(m){u.e(m)}finally{u.f()}}}return Object(l.a)(e,[{key:"countDistinctValues",value:function(e){var t=this;return this.returnDistinctValues?(e.forEach((function(e){return t.getAttributes(e)})),this._returnDistinctMap.size):e.length}},{key:"getAttributes",value:function(e){var t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}},{key:"getFieldValue",value:function(e,t,r){var a=r?r.name:t,n=null;return this._fieldDataCache.has(a)?n=this._fieldDataCache.get(a).clause:r||(n=Object(b.c)(t,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:n})),r?this.featureAdapter.getAttribute(e,a):n.calculateValue(e,this.featureAdapter)}},{key:"getNormalizedValue",value:function(e,t){var r=t.normalizationType,a=t.normalizationTotal,n=this.getFieldValue(e,t.field,t.fieldInfo);if(r&&Number.isFinite(n)){var i=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);n=Object(y.i)(n,r,i,a)}return n}},{key:"getExpressionValue",value:function(e,t,r,a){var n={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},i=a.createExecContext(n,r);return a.executeFunction(t,i)}},{key:"getExpressionValues",value:function(e,t,r,a){var n=this,i={fields:this.fieldsIndex.fields};return e.map((function(e){var s={attributes:n.featureAdapter.getAttributes(e),layer:i},u=a.createExecContext(s,r);return a.executeFunction(t,u)}))}},{key:"validateItem",value:function(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:Object(b.c)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}},{key:"validateItems",value:function(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:Object(b.c)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}},{key:"_processAttributesForOutFields",value:function(e){var t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);var r,a={},n=Object(c.a)(t);try{for(n.s();!(r=n.n()).done;){var i=r.value,s=this._fieldDataCache.get(i),u=s.alias,o=s.clause;a[u]=o?o.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,u)}}catch(l){n.e(l)}finally{n.f()}return a}},{key:"_processAttributesForDistinctValues",value:function(e){if(Object(d.j)(e)||!this.returnDistinctValues)return e;var t=this.outFields,r=[];if(t){var a,n=Object(c.a)(t);try{for(n.s();!(a=n.n()).done;){var i=a.value,s=this._fieldDataCache.get(i).alias;r.push(e[s])}}catch(f){n.e(f)}finally{n.f()}}else for(var u in e)r.push(e[u]);var o="".concat((t||["*"]).join(","),"=").concat(r.join(",")),l=this._returnDistinctMap.get(o)||0;return this._returnDistinctMap.set(o,++l),l>1?null:e}}]),e}(),O=r(278),j=r(484),I=r(238),_=r(260),F=function(){function e(t,r,a){Object(o.a)(this,e),this.items=t,this.query=r,this.geometryType=a.geometryType,this.hasM=a.hasM,this.hasZ=a.hasZ,this.fieldsIndex=a.fieldsIndex,this.objectIdField=a.objectIdField,this.spatialReference=a.spatialReference,this.featureAdapter=a.featureAdapter}return Object(l.a)(e,[{key:"size",get:function(){return this.items.length}},{key:"createQueryResponseForCount",value:function(){var e=new x(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);var t=this.query,r=t.groupByFieldsForStatistics,a=t.having,n=t.outStatistics;if(!(null===r||void 0===r?void 0:r.length))return 1;var i,s=new Map,u=new Map,o=new Set,l=Object(c.a)(n);try{for(l.s();!(i=l.n()).done;){var f=i.value,h="exceedslimit"!==f.statisticType?f.onStatisticField:void 0;if(!u.has(h)){var d,p=[],m=Object(c.a)(r);try{for(m.s();!(d=m.n()).done;){var v=d.value,g=this._getAttributeValues(e,v,s);p.push(g)}}catch(F){m.e(F)}finally{m.f()}u.set(h,this._calculateUniqueValues(p,e.returnDistinctValues))}var b=u.get(h);for(var y in b){var O=b[y],j=O.data,I=O.items,_=j.join(",");a&&!e.validateItems(I,a)||o.add(_)}}}catch(F){l.e(F)}finally{l.f()}return o.size}},{key:"createQueryResponse",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.query.outStatistics){e.next=11;break}if(!this.query.outStatistics.some((function(e){return"exceedslimit"===e.statisticType}))){e.next=5;break}e.t0=this._createExceedsLimitQueryResponse(this.query),e.next=8;break;case 5:return e.next=7,this._createStatisticsQueryResponse(this.query);case 7:e.t0=e.sent;case 8:t=e.t0,e.next=12;break;case 11:t=this._createFeatureQueryResponse(this.query);case 12:return e.abrupt("return",(this.query.returnQueryGeometry&&(Object(g.l)(this.query.outSR)&&!Object(g.d)(this.query.geometry.spatialReference,this.query.outSR)?t.queryGeometry=Object(j.b)(Object(s.a)({spatialReference:this.query.outSR},Object(O.b)(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR))):t.queryGeometry=Object(j.b)(Object(s.a)({spatialReference:this.query.outSR},this.query.geometry))),t));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createSnappingResponse",value:function(e,t){var r,n=this.featureAdapter,i=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),s=e.point,u=s.x,o=s.y,l="number"==typeof e.distance?e.distance:e.distance.x,f="number"==typeof e.distance?e.distance:e.distance.y,h={candidates:[]},p="esriGeometryPolygon"===this.geometryType,m=this._getPointCreator(e.point,this.spatialReference,t),v=Object(c.a)(this.items);try{for(v.s();!(r=v.n()).done;){var g=r.value,b=n.getGeometry(g);if(!Object(d.j)(b)){var y=b.coords,x=b.lengths;if(e.types&a.EDGE)for(var O=0,j=0;j<x.length;j++)for(var I=x[j],_=0;_<I;_++,O+=i){var F=y[O],w=y[O+1];if(_!==I-1){var V=y[O+i],k=y[O+i+1],S=T(u,o,F,w,V,k),N=S.x,z=S.y,R=(u-N)/l,M=(o-z)/f,A=R*R+M*M;A<=1&&h.candidates.push({type:"edge",objectId:n.getObjectId(g),distance:Math.sqrt(A),target:m(N,z),start:m(F,w),end:m(V,k)})}}if(e.types&a.VERTEX)for(var E=p?y.length-i:y.length,D=0;D<E;D+=i){var P=y[D],C=y[D+1],G=(u-P)/l,q=(o-C)/f,Z=G*G+q*q;Z<=1&&h.candidates.push({type:"vertex",objectId:n.getObjectId(g),distance:Math.sqrt(Z),target:m(P,C)})}}}}catch(Y){v.e(Y)}finally{v.f()}return h.candidates.sort((function(e,t){return e.distance-t.distance})),h}},{key:"_getPointCreator",value:function(e,t,r){var a=Object(d.k)(r)&&!Object(g.d)(t,r)?function(e){return Object(O.b)(e,t,r)}:function(e){return e};return null!=e.z&&null!=e.m?function(t,r){return a({x:t,y:r,z:e.z,m:e.m})}:null!=e.z?function(t,r){return a({x:t,y:r,z:e.z})}:null!=e.m?function(t,r){return a({x:t,y:r,m:e.m})}:function(e,t){return a({x:e,y:t})}}},{key:"createSummaryStatisticsResponse",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n,i,s,u,c,o,l,f,d,p,m,v;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.field,a=t.valueExpression,n=t.normalizationField,i=t.normalizationType,s=t.normalizationTotal,u=t.minValue,c=t.maxValue,o=t.scale,l=this.fieldsIndex.isDateField(r),e.next=11,this._getDataValues({field:r,valueExpression:a,normalizationField:n,normalizationType:i,normalizationTotal:s,scale:o});case 11:return f=e.sent,d=Object(y.j)({normalizationType:i,normalizationField:n,minValue:u,maxValue:c}),p=this.fieldsIndex.get(r),m={value:.5,fieldType:null===p||void 0===p?void 0:p.type},v=Object(I.r)(p)?Object(y.e)({values:f,supportsNullCount:d,percentileParams:m}):Object(y.d)({values:f,minValue:u,maxValue:c,useSampleStdDev:!i,supportsNullCount:d,percentileParams:m}),e.abrupt("return",Object(y.k)(v,l));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUniqueValuesResponse",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n,i,s,u,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.field,a=t.valueExpression,n=t.domain,i=t.returnAllCodedValues,s=t.scale,e.next=7,this._getDataValues({field:r,valueExpression:a,scale:s});case 7:return u=e.sent,c=Object(y.f)(u),e.abrupt("return",Object(y.g)(c,n,i));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createClassBreaksResponse",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n,i,s,u,c,o,l,f,d,p,m;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.field,a=t.valueExpression,n=t.normalizationField,i=t.normalizationType,s=t.normalizationTotal,u=t.classificationMethod,c=t.standardDeviationInterval,o=t.minValue,l=t.maxValue,f=t.numClasses,d=t.scale,e.next=13,this._getDataValues({field:r,valueExpression:a,normalizationField:n,normalizationType:i,normalizationTotal:s,scale:d});case 13:return p=e.sent,m=Object(y.a)(p,{field:r,normalizationField:n,normalizationType:i,normalizationTotal:s,classificationMethod:u,standardDeviationInterval:c,minValue:o,maxValue:l,numClasses:f}),e.abrupt("return",Object(y.l)(m,u));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createHistogramResponse",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n,i,s,u,c,o,l,f,d,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.field,a=t.valueExpression,n=t.normalizationField,i=t.normalizationType,s=t.normalizationTotal,u=t.classificationMethod,c=t.standardDeviationInterval,o=t.minValue,l=t.maxValue,f=t.numBins,d=t.scale,e.next=13,this._getDataValues({field:r,valueExpression:a,normalizationField:n,normalizationType:i,normalizationTotal:s,scale:d});case 13:return p=e.sent,e.abrupt("return",Object(y.b)(p,{field:r,normalizationField:n,normalizationType:i,normalizationTotal:s,classificationMethod:u,standardDeviationInterval:c,minValue:o,maxValue:l,numBins:f}));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_sortFeatures",value:function(e,t,r){var a=this;if(e.length>1&&t&&t.length){var n,i=Object(c.a)(t.reverse());try{var s=function(){var t=n.value.split(" "),i=t[0],s=a.fieldsIndex.get(i),u=t[1]&&"desc"===t[1].toLowerCase(),c=Object(y.h)(null===s||void 0===s?void 0:s.type,u);e.sort((function(e,t){var a=r(e,i,s),n=r(t,i,s);return c(a,n)}))};for(i.s();!(n=i.n()).done;)s()}catch(u){i.e(u)}finally{i.f()}}}},{key:"_createFeatureQueryResponse",value:function(e){var t=this,r=this.items,a=this.geometryType,n=this.hasM,s=this.hasZ,u=this.objectIdField,c=this.spatialReference,o=e.outFields,l=e.outSR,f=e.quantizationParameters,h=e.resultRecordCount,d=e.resultOffset,p=e.returnZ,m=e.returnM,g=null!=h&&r.length>(d||0)+h,b=o&&(o.includes("*")?Object(i.a)(this.fieldsIndex.fields):o.map((function(e){return t.fieldsIndex.get(e)})));return{exceededTransferLimit:g,features:this._createFeatures(e,r),fields:b,geometryType:a,hasM:n&&m,hasZ:s&&p,objectIdFieldName:u,spatialReference:Object(j.b)(l||c),transform:f&&Object(v.c)(f)||null}}},{key:"_createFeatures",value:function(e,t){var r=new x(e,this.featureAdapter,this.fieldsIndex),a=this.hasM,n=this.hasZ,s=e.orderByFields,u=e.quantizationParameters,o=e.returnGeometry,l=e.returnCentroid,f=e.maxAllowableOffset,h=e.resultOffset,d=e.resultRecordCount,p=e.returnZ,m=void 0!==p&&p,g=e.returnM,b=n&&m,y=a&&(void 0!==g&&g),O=[],I=0,_=Object(i.a)(t);if(this._sortFeatures(_,s,(function(e,t,a){return r.getFieldValue(e,t,a)})),o||l){var F=Object(v.c)(u);if(o&&!l){var T,w=Object(c.a)(_);try{for(w.s();!(T=w.n()).done;){var V=T.value;O[I++]={attributes:r.getAttributes(V),geometry:Object(j.c)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(V),f,F,b,y)}}}catch(q){w.e(q)}finally{w.f()}}else if(!o&&l){var k,S=Object(c.a)(_);try{for(S.s();!(k=S.n()).done;){var N=k.value;O[I++]={attributes:r.getAttributes(N),centroid:Object(j.f)(this,this.featureAdapter.getCentroid(N,this),F)}}}catch(q){S.e(q)}finally{S.f()}}else{var z,R=Object(c.a)(_);try{for(R.s();!(z=R.n()).done;){var M=z.value;O[I++]={attributes:r.getAttributes(M),centroid:Object(j.f)(this,this.featureAdapter.getCentroid(M,this),F),geometry:Object(j.c)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(M),f,F,b,y)}}}catch(q){R.e(q)}finally{R.f()}}}else{var A,E=Object(c.a)(_);try{for(E.s();!(A=E.n()).done;){var D=A.value,P=r.getAttributes(D);P&&(O[I++]={attributes:P})}}catch(q){E.e(q)}finally{E.f()}}var C=h||0;if(null!=d){var G=C+d;O=O.slice(C,Math.min(O.length,G))}return O}},{key:"_createExceedsLimitQueryResponse",value:function(e){var t,r=!1,a=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=Object(c.a)(e.outStatistics);try{for(s.s();!(t=s.n()).done;){var u=t.value;if("exceedslimit"===u.statisticType){a=null!=u.maxPointCount?u.maxPointCount:Number.POSITIVE_INFINITY,n=null!=u.maxRecordCount?u.maxRecordCount:Number.POSITIVE_INFINITY,i=null!=u.maxVertexCount?u.maxVertexCount:Number.POSITIVE_INFINITY;break}}}catch(f){s.e(f)}finally{s.f()}if("esriGeometryPoint"===this.geometryType)r=this.items.length>a;else if(this.items.length>n)r=!0;else{var o=this.hasZ?this.hasM?4:3:this.hasM?3:2,l=this.featureAdapter;r=this.items.reduce((function(e,t){var r=l.getGeometry(t);return e+(Object(d.k)(r)&&r.coords.length||0)}),0)/o>i}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(r)}}]}}},{key:"_createStatisticsQueryResponse",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n,i,s,u,o,l,f,d,p,m,v,g,b,y,O,j,I,_,F,T,w,V,k,S,N,z,R,M,A,E,D,P,C,G,q,Z,Y=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={attributes:{}},a=[],n=new Map,i=new Map,s=new Map,u=new Map,o=new x(t,this.featureAdapter,this.fieldsIndex),l=t.outStatistics,f=t.groupByFieldsForStatistics,d=t.having,p=t.orderByFields,m=f&&f.length,g=(v=!!m)&&f[0],b=v&&!this.fieldsIndex.get(g),y=Object(c.a)(l),e.prev=2,y.s();case 4:if((O=y.n()).done){e.next=34;break}if(j=O.value,I=j.outStatisticFieldName,_=j.statisticType,F=j,T="exceedslimit"!==_?j.onStatisticField:void 0,w="percentile_disc"===_||"percentile_cont"===_,V="EnvelopeAggregate"===_||"CentroidAggregate"===_||"ConvexHullAggregate"===_,k=v&&1===m&&(T===g||b)&&"count"===_,!v){e.next=19;break}if(!s.has(T)){S=[],N=Object(c.a)(f);try{for(N.s();!(z=N.n()).done;)R=z.value,M=this._getAttributeValues(o,R,n),S.push(M)}catch(B){N.e(B)}finally{N.f()}s.set(T,this._calculateUniqueValues(S,o.returnDistinctValues))}A=s.get(T),E=h.a.mark((function e(t){var r,a,i,s,c,l,p,m,v,g,b,y,x;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=A[t],a=r.count,i=r.data,s=r.items,c=r.itemPositions,l=i.join(","),d&&!o.validateItems(s,d)){e.next=17;break}if(p=u.get(l)||{attributes:{}},!V){e.next=13;break}return p.aggregateGeometries||(p.aggregateGeometries={}),e.next=7,Y._getAggregateGeometry(F,s);case 7:m=e.sent,v=m.aggregateGeometries,g=m.outStatisticFieldName,p.aggregateGeometries[g]=v,e.next=16;break;case 13:b=null,k?b=a:(y=Y._getAttributeValues(o,T,n),x=c.map((function(e){return y[e]})),b=w&&"statisticParameters"in F?Y._getPercentileValue(F,x):Y._getStatisticValue(F,x,null,o.returnDistinctValues)),p.attributes[I]=b;case 16:f.forEach((function(e,t){return p.attributes[Y.fieldsIndex.get(e)?e:"EXPR_".concat(t+1)]=i[t]})),u.set(l,p);case 17:case"end":return e.stop()}}),e)})),e.t0=h.a.keys(A);case 12:if((e.t1=e.t0()).done){e.next=17;break}return D=e.t1.value,e.delegateYield(E(D),"t2",15);case 15:e.next=12;break;case 17:e.next=31;break;case 19:if(!V){e.next=29;break}return r.aggregateGeometries||(r.aggregateGeometries={}),e.next=23,this._getAggregateGeometry(F,this.items);case 23:P=e.sent,C=P.aggregateGeometries,G=P.outStatisticFieldName,r.aggregateGeometries[G]=C,e.next=31;break;case 29:q=this._getAttributeValues(o,T,n),r.attributes[I]=w&&"statisticParameters"in F?this._getPercentileValue(F,q):this._getStatisticValue(F,q,i,o.returnDistinctValues);case 31:a.push({name:I,alias:I,type:"esriFieldTypeDouble"});case 32:e.next=4;break;case 34:e.next=39;break;case 36:e.prev=36,e.t3=e.catch(2),y.e(e.t3);case 39:return e.prev=39,y.f(),e.finish(39);case 42:return Z=v?Array.from(u.values()):[r],e.abrupt("return",(this._sortFeatures(Z,p,(function(e,t){return e.attributes[t]})),{fields:a,features:Z}));case 44:case"end":return e.stop()}}),e,this,[[2,36,39,42]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAggregateGeometry",value:function(){var e=Object(u.a)(h.a.mark((function e(t,a){var n,i,u,c,o,l,f,d,v,g,b,y,x;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(6),r.e(16)]).then(r.bind(null,525));case 2:return n=e.sent,i=t.statisticType,u=t.outStatisticFieldName,c=this.featureAdapter,o=this.spatialReference,l=this.geometryType,f=this.hasZ,d=this.hasM,v=a.map((function(e){return Object(j.c)(l,f,d,c.getGeometry(e))})),g=n.convexHull(o,v,!0)[0],b={aggregateGeometries:null,outStatisticFieldName:null},"EnvelopeAggregate"===i?(y=g?Object(m.b)(g):Object(m.a)(n.union(o,v)),b.aggregateGeometries=Object(s.a)(Object(s.a)({},y),{},{spatialReference:o}),b.outStatisticFieldName=u||"extent"):"CentroidAggregate"===i?(x=g?Object(p.b)(g):Object(p.a)(Object(m.a)(n.union(o,v))),b.aggregateGeometries={x:x[0],y:x[1],spatialReference:o},b.outStatisticFieldName=u||"centroid"):"ConvexHullAggregate"===i&&(b.aggregateGeometries=g,b.outStatisticFieldName=u||"convexHull"),e.abrupt("return",b);case 15:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getStatisticValue",value:function(e,t,r,a){var n,i=e.onStatisticField,s=e.statisticType;return n=null!==r&&void 0!==r&&r.has(i)?r.get(i):Object(I.r)(this.fieldsIndex.get(i))?Object(y.e)({values:t,returnDistinct:a}):Object(y.d)({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),r&&r.set(i,n),n["var"===s?"variance":s]}},{key:"_getPercentileValue",value:function(e,t){var r=e.onStatisticField,a=e.statisticParameters,n=e.statisticType,i=a.value,s=a.orderBy,u=this.fieldsIndex.get(r);return Object(y.c)(t,{value:i,orderBy:s,fieldType:null===u||void 0===u?void 0:u.type,isDiscrete:"percentile_disc"===n})}},{key:"_getAttributeValues",value:function(e,t,r){if(r.has(t))return r.get(t);var a=this.fieldsIndex.get(t),n=this.items.map((function(r){return e.getFieldValue(r,t,a)}));return r.set(t,n),n}},{key:"_getAttributeNormalizedValues",value:function(e,t){var r=this;return this.items.map((function(a){return e.getNormalizedValue(a,{field:t.field,fieldInfo:r.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:r.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})}))}},{key:"_getAttributeExpressionValues",value:function(){var e=Object(u.a)(h.a.mark((function e(t,r,a){var n,i,s,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.e)();case 2:return n=e.sent,i=n.arcadeUtils,s=i.createFunction(r),u=a&&i.getViewInfo(a),e.abrupt("return",t.getExpressionValues(this.items,s,u,i));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"_calculateUniqueValues",value:function(e,t){for(var r={},a=this.items,n=a.length,i=0;i<n;i++){var s,u=a[i],o=[],l=Object(c.a)(e);try{for(l.s();!(s=l.n()).done;){var f=s.value;o.push(f[i])}}catch(d){l.e(d)}finally{l.f()}var h=o.join(",");t?null==r[h]&&(r[h]={count:1,data:o,items:[u],itemPositions:[i]}):null==r[h]?r[h]={count:1,data:o,items:[u],itemPositions:[i]}:(r[h].count++,r[h].items.push(u),r[h].itemPositions.push(i))}return r}},{key:"_getDataValues",value:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n,i,s,u,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new x(this.query,this.featureAdapter,this.fieldsIndex),a=t.valueExpression,n=t.field,i=t.normalizationField,s=t.normalizationType,u=t.normalizationTotal,c=t.scale,o=a?{viewingMode:"map",scale:c,spatialReference:this.query.outSR||this.spatialReference}:null,e.abrupt("return",a?this._getAttributeExpressionValues(r,a,o):this._getAttributeNormalizedValues(r,{field:n,normalizationField:i,normalizationType:s,normalizationTotal:u}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function T(e,t,r,a,n,i){var s=n-r,u=i-a,c=s*s+u*u,o=(e-r)*s+(t-a)*u,l=Math.min(1,Math.max(0,o/c));return{x:r+s*l,y:a+u*l}}(n=a||(a={}))[n.NONE=0]="NONE",n[n.EDGE=1]="EDGE",n[n.VERTEX=2]="VERTEX"}}]);