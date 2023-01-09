(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[36],{1025:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var n=t(142),a=t(143),i=t(144),o=t(145),s=t(148),f=t(151),c=(t(152),t(147),t(150),t(196)),u=t(149),l=function(e){Object(i.a)(t,e);var r=Object(o.a)(t);function t(){var e;return Object(n.a)(this,t),(e=r.apply(this,arguments)).type="gcs-shift",e.tolerance=1e-8,e}return Object(a.a)(t,[{key:"forwardTransform",value:function(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}},{key:"inverseTransform",value:function(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}}]),t}(t(857).a);Object(s.a)([Object(c.a)({GCSShiftXform:"gcs-shift"})],l.prototype,"type",void 0),Object(s.a)([Object(f.b)()],l.prototype,"tolerance",void 0);var p=l=Object(s.a)([Object(u.a)("esri.layers.support.rasterTransforms.GCSShiftTransform")],l)},1093:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return y}));var n=t(1025),a=t(143),i=t(142),o=t(144),s=t(145),f=t(148),c=(t(156),t(150),t(152),t(147),t(234),t(196)),u=t(149),l=function(e){Object(o.a)(t,e);var r=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=r.apply(this,arguments)).type="identity",e}return Object(a.a)(t)}(t(857).a);Object(f.a)([Object(c.a)({IdentityXform:"identity"})],l.prototype,"type",void 0);var p=l=Object(f.a)([Object(u.a)("esri.layers.support.rasterTransforms.IdentityTransform")],l),h=t(734),v={GCSShiftXform:n.a,IdentityXform:p,PolynomialXform:h.a},x=Object.keys(v);function m(e){var r=null===e||void 0===e?void 0:e.type;return!e||x.includes(r)}function y(e){if(!(null===e||void 0===e?void 0:e.type))return null;var r=v[null===e||void 0===e?void 0:e.type];if(r){var t=new r;return t.read(e),t}return null}},501:function(e,r,t){"use strict";t.d(r,"a",(function(){return Q})),t.d(r,"b",(function(){return C})),t.d(r,"c",(function(){return q})),t.d(r,"d",(function(){return J})),t.d(r,"e",(function(){return L})),t.d(r,"f",(function(){return A})),t.d(r,"g",(function(){return k})),t.d(r,"h",(function(){return W})),t.d(r,"i",(function(){return T})),t.d(r,"j",(function(){return S})),t.d(r,"k",(function(){return b})),t.d(r,"l",(function(){return D})),t.d(r,"m",(function(){return H}));var n,a,i=t(5),o=t(14),s=t(155),f=t(154),c=t.n(f),u=(t(177),t(159)),l=t(146),p=t(250),h=t(716),v=t(266),x=t(176),m=t(197),y=t(217),d=t(185);function b(e,r,t){return!Object(v.a)(e,r,t)}function g(e,r,t){var n=b(e,r,t);if(n&&!Object(v.e)())throw new u.a("rasterprojectionhelper-project","projection engine is not loaded");return n}(a=n||(n={}))[a.None=0]="None",a[a.North=1]="North",a[a.South=2]="South",a[a.Both=3]="Both";var j=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===t[0])return[0,0];for(var a=1,i=-1,o=1,s=-1,f=0;f<e.length;f+=2)isNaN(e[f])||(a=a>e[f]?e[f]:a,i=i>e[f]?i:e[f],o=o>e[f+1]?e[f+1]:o,s=s>e[f+1]?s:e[f+1]);for(var c=r.cols,u=r.rows,l=(i-a)/c/t[0],p=(s-o)/u/t[1],h=2*n,v=0,x=!1,m=[0,0],y=0;y<c-3;y++){for(var d=0;d<u-3;d++){var b=y*u*2+2*d,g=(e[b]+e[b+4]+e[b+4*u]+e[b+4*u+4])/4,j=(e[b+1]+e[b+5]+e[b+4*u+1]+e[b+4*u+5])/4,O=Math.abs((g-e[b+2*u+2])/l),w=Math.abs((j-e[b+2*u+3])/p);if(O+w>v&&(v=O+w,m=[O,w]),h&&v>h){x=!0;break}}if(x)break}return m},O={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},w=new Map,M=new Map;function k(){return R.apply(this,arguments)}function R(){return(R=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(v.e)()){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,Object(v.f)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,r,t){return g(e.spatialReference,r)?t?Object(v.c)(r,e.spatialReference,e):Object(v.c)(e.spatialReference,r,e):null}function S(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=e.spatialReference;if(a.equals(r))return e;g(a,r,n);var i,o=t.center,s=new x.a({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:a}),f=Object(v.g)(s,r,n),c=L(r);if(Object(l.j)(f)||Object(l.k)(c)&&f.width>=c){var u=Object(p.c)(a)/Object(p.c)(r);i={x:e.x*u,y:e.y*u}}else i={x:f.width,y:f.height};return i}function P(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return Object(p.c)(e)?r/Object(p.c)(e):0}function T(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.spatialReference;if(a.equals(r))return e;g(a,r,t);var i=Object(v.g)(e,r,t);if(!n||!i)return i;var o=F(a,!0),s=F(r,!0),f=P(a);return f&&Object(l.k)(o)&&Object(l.k)(s)&&(i.x>0&&Math.abs(e.x-o[0])<f?i.x-=s[1]-s[0]:i.x<0&&Math.abs(e.x-o[1])<f&&(i.x+=s[1]-s[0])),i}function G(e){var r=e.inSR,t=e.outSR,n=e.datumTransformation,a=e.preferPE;if(r.equals(t))return z(e,null).points;if(r.isWebMercator&&t.isWGS84||r.isWGS84&&t.isWebMercator)return function(e){var r=e.cols,t=e.rows,n=e.xres,a=e.yres,i=e.usePixelCenter,o=e.inSR,s=e.outSR,f=e.xmin,c=e.ymax;i&&(f+=n/2,c-=a/2);for(var u=[],l=[],p=Math.max(r,t),h=0;h<p;h++){var x=f+n*Math.min(r,h),y=c-a*Math.min(t,h),d=Object(v.g)(new m.a({x:x,y:y,spatialReference:o}),s);h<=r&&u.push(d.x),h<=t&&l.push(d.y)}for(var b=[],g=0;g<r;g++)for(var j=0;j<t;j++)b.push([u[g],l[j]]);return b}(e);if(g(r,t,n)&&a){if(r.isGeographic)return N(e);var i=E(r);if(Object(l.k)(i))return N(e)}return function(e){var r=z(e,null).points.map((function(r){return new m.a(r[0],r[1],e.inSR)}));return Object(v.g)(r,e.outSR,e.datumTransformation).map((function(e){return e?[e.x,e.y]:[NaN,NaN]}))}(e)}function N(e){var r=e.inSR,t=e.outSR,n=e.datumTransformation,a=z(e,E(r)),i=a.points,s=a.mask;if(!r.isGeographic){var f=r.wkid?h.a.coordsys(r.wkid):h.a.fromString(r.isGeographic?h.b.PE_TYPE_GEOGCS:h.b.PE_TYPE_PROJCS,r.wkt);h.c.projToGeog(f,i.length,i)}if(Object(l.k)(n)&&n.steps.length&&n.steps.forEach((function(e){var r=e.wkid?h.a.geogtran(e.wkid):h.a.fromString(h.b.PE_TYPE_GEOGTRAN,e.wkt);h.d.geogToGeog(r,i.length,i,null,e.isInverse?h.b.PE_TRANSFORM_2_TO_1:h.b.PE_TRANSFORM_1_TO_2)})),!t.isGeographic){var c=E(t,!0),u=Object(l.k)(c)&&c.isEnvelope?[c.bbox[1],c.bbox[3]]:[-90,90];!function(e,r){for(var t=Object(o.a)(r,2),n=t[0],a=t[1],i=0;i<e.length;i++){var s=e[i][1];(s<n||s>a)&&(e[i]=[NaN,NaN])}}(i,u);var p=t.wkid?h.a.coordsys(t.wkid):h.a.fromString(t.isGeographic?h.b.PE_TYPE_GEOGCS:h.b.PE_TYPE_PROJCS,t.wkt);h.c.geogToProj(p,i.length,i)}var v=i;if(s&&i.length!==s.length){v=[];for(var x=0,m=0;x<s.length;x++)s[x]?v.push(i[m++]):v.push([NaN,NaN])}return v}function E(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.wkid||e.wkt;if(!t||e.isGeographic)return null;if(t=String(t),w.has(t)){var n=w.get(t);return r?null===n||void 0===n?void 0:n.gcs:null===n||void 0===n?void 0:n.pcs}var a=e.wkid?h.a.coordsys(e.wkid):h.a.fromString(e.isGeographic?h.b.PE_TYPE_GEOGCS:h.b.PE_TYPE_PROJCS,e.wkt),i=_(a,P(e,1e-4)),o=_(a,0,!0);return w.set(t,{pcs:i,gcs:o}),r?o:i}function _(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=h.f.generate(e),a=t?e.horizonGcsGenerate():e.horizonPcsGenerate();if(null===a||void 0===a||!a.length)return null;var i=!1,s=a.find((function(e){return 1===e.getInclusive()&&1===e.getKind()}));if(!s){if(s=a.find((function(e){return 1===e.getInclusive()&&0===e.getKind()})),!s)return null;i=!0}var f=t?0:(2===n.getNorthPoleLocation()?1:0)|(2===n.getSouthPoleLocation()?2:0),c=n.isPannableRectangle(),u=s.getCoord();if(i)return{isEnvelope:i,isPannable:c,vertices:u,coef:null,bbox:[u[0][0]-r,u[0][1]-r,u[1][0]+r,u[1][1]+r],poleLocation:f};for(var l=0,p=[],v=Object(o.a)(u[0],2),x=v[0],m=v[1],y=Object(o.a)(u[0],2),d=y[0],b=y[1],g=0,j=u.length;g<j;g++){++l===j&&(l=0);var O=Object(o.a)(u[g],2),w=O[0],M=O[1],k=Object(o.a)(u[l],2),R=k[0],C=k[1];if(C===M)p.push([w,R,M,C,2]);else{var S=(R-w)/(C-M||1e-4),P=w-S*M;M<C?p.push([S,P,M,C,0]):p.push([S,P,C,M,1])}x=x<w?x:w,m=m<M?m:M,d=d>w?d:w,b=b>M?b:M}return{isEnvelope:!1,isPannable:c,vertices:u,coef:p,bbox:[x,m,d,b],poleLocation:f}}function z(e,r){var t=[],n=e.cols,a=e.rows,i=e.xres,s=e.yres,f=e.usePixelCenter,c=e.xmin,u=e.ymax;if(f&&(c+=i/2,u-=s/2),Object(l.j)(r)){for(var p=0;p<n;p++)for(var h=0;h<a;h++)t.push([c+i*p,u-s*h]);return{points:t}}var v=new Uint8Array(n*a);if(r.isEnvelope){for(var x=Object(o.a)(r.bbox,4),m=x[0],y=x[1],d=x[2],b=x[3],g=0,j=0;g<n;g++)for(var O=c+i*g,w=r.isPannable||O>=m&&O<=d,M=0;M<a;M++,j++){var k=u-s*M;w&&k>=y&&k<=b&&(t.push([O,k]),v[j]=1)}return{points:t,mask:v}}for(var R=r.coef,C=[],S=0;S<a;S++){for(var P=u-s*S,T=[],G=[],N=0;N<R.length;N++){var E=Object(o.a)(R[N],5),_=E[0],z=E[1],I=E[2],W=E[3],X=E[4];if(P===I&&I===W)T.push(_),T.push(z),G.push(2),G.push(2);else if(P>=I&&P<=W){var Y=_*P+z;T.push(Y),G.push(X)}}var L=T;if(T.length>2){var F=2===G[0]?0:G[0],B=T[0];L=[];for(var A=1;A<G.length;A++)2===G[A]&&A!==G.length-1||(G[A]!==F&&(L.push(0===F?Math.min(B,T[A-1]):Math.max(B,T[A-1])),F=G[A],B=T[A]),A===G.length-1&&L.push(0===G[A]?Math.min(B,T[A]):Math.max(B,T[A])));L.sort((function(e,r){return e-r}))}else T[0]>T[1]&&(L=[T[1],T[0]]);C.push(L)}for(var J=0,q=0;J<n;J++)for(var K=c+i*J,U=0;U<a;U++,q++){var D=u-s*U,H=C[U];if(2===H.length)K>=H[0]&&K<=H[1]&&(t.push([K,D]),v[q]=1);else if(H.length>2){for(var Q=!1,V=0;V<H.length;V+=2)if(K>=H[V]&&K<=H[V+1]){Q=!0;break}Q&&(t.push([K,D]),v[q]=1)}}return{points:t,mask:v}}function I(e){var r=L(e[0].spatialReference);if(e.length<2||Object(l.j)(r))return e[0];for(var t=e[0],n=t.xmin,a=t.xmax,i=t.ymin,o=t.ymax,s=1;s<e.length;s++){var f=e[s];a=f.xmax+r*s,i=Math.min(i,f.ymin),o=Math.max(o,f.ymax)}return new x.a({xmin:n,xmax:a,ymin:i,ymax:o,spatialReference:e[0].spatialReference})}function W(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.spatialReference;if(i.equals(r))return e;var o=A(e),s=L(i,!0),f=L(r);if(0===o||Object(l.j)(s)||Object(l.j)(f)){var c=Y(e,r,t,a);if(Object(l.j)(s)&&Object(l.k)(f)&&Math.abs(c.width-f)<P(r)&&Object(v.e)()){var u=E(i);if(Object(l.k)(u)&&u.poleLocation===n.None&&e.width<(u.bbox[2]-u.bbox[0])/2)return X(e,r)||c}return c}var p=e.clone().normalize();if(1===p.length&&e.xmax<s&&e.xmax-s/2>P(i))for(var h=e.xmin,m=e.xmax,y=0;y<=o;y++){var d=0===y?h:-s/2,b=y===o?m-s*y:s/2;p[y]=new x.a({xmin:d,xmax:b,ymin:e.ymin,ymax:e.ymax,spatialReference:i})}return I(p.map((function(e){return Y(e,r,t,a)})).filter((function(e){return!!e})))}function X(e,r){var t=L(r);if(Object(l.j)(t))return null;var n=e.xmin,a=e.ymin,i=e.xmax,o=e.ymax,s=e.spatialReference,f=new y.a({spatialReference:s,rings:[[[n,a],[i,a],[i,o],[n,o],[n,a]]]}),c=Object(v.g)(f,r);if(2!==c.rings.length||!c.rings[0].length||!c.rings[1].length)return null;for(var u=c.rings,p=P(s),h=new x.a({spatialReference:r}),m=0;m<2;m++){n=i=u[m][0][0],a=o=u[m][0][1];for(var d=0;d<u[m].length;d++)n=n>u[m][d][0]?u[m][d][0]:n,i=i<u[m][d][0]?u[m][d][0]:i,a=a>u[m][d][1]?u[m][d][1]:a,o=o<u[m][d][1]?u[m][d][1]:o;if(0===m)h.ymin=a,h.ymax=o,h.xmin=n,h.xmax=i;else if(h.ymin=Math.min(h.ymin,a),h.ymax=Math.max(h.ymax,o),Math.abs(i-t/2)<p)h.xmin=n,h.xmax=h.xmax+t;else{if(!(Math.abs(n+t/2)<p))return null;h.xmax=i+t}}return h}function Y(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=e.spatialReference;if(i.equals(r))return e;g(i,r,t);var o=Object(v.g)(e,r,t);if(a&&r.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!n||!o)return o;var s=F(i,!0),f=F(r,!0);if(Object(l.j)(s)||Object(l.j)(f))return o;var c=P(i,.001),u=P(i,500),p=P(r,.001);if(Math.abs(o.xmin-f[0])<p&&Math.abs(o.xmax-f[1])<p){var h=Math.abs(e.xmin-s[0]),x=Math.abs(s[1]-e.xmax);if(h<c&&x>u){o.xmin=f[0];var y=[];y.push(new m.a(e.xmax,e.ymin,i)),y.push(new m.a(e.xmax,(e.ymin+e.ymax)/2,i)),y.push(new m.a(e.xmax,e.ymax,i));var d=y.map((function(e){return T(e,r,t)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,d)}if(x<c&&h>u){o.xmax=f[1];var b=[];b.push(new m.a(e.xmin,e.ymin,i)),b.push(new m.a(e.xmin,(e.ymin+e.ymax)/2,i)),b.push(new m.a(e.xmin,e.ymax,i));var j=b.map((function(e){return T(e,r,t)})).filter((function(e){return!isNaN(null===e||void 0===e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,j)}}else{var O=P(r,.001);Math.abs(o.xmin-f[0])<O&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<O&&(o.xmax=f[1])}return o}function L(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=r?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*O[e.wkid]||null}function F(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];var t=L(e,r);return Object(l.k)(t)?[-t/2,t/2]:null}function B(e,r,t,n){var a=(e-r)/t;return a-Math.floor(a)!=0?a=Math.floor(a):n&&(a-=1),a}function A(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=L(e.spatialReference);if(Object(l.j)(t))return 0;var n=r?0:-t/2,a=P(e.spatialReference),i=!r&&Math.abs(e.xmax-t/2)<a?t/2:e.xmax,o=!r&&Math.abs(e.xmin+t/2)<a?-t/2:e.xmin;return B(i,n,t,!0)-B(o,n,t,!1)}function J(e){var r=e.storageInfo.origin.x,t=L(e.spatialReference,!0);if(Object(l.j)(t))return{originX:r,halfWorldWidth:null,pyramidsInfo:null};for(var n=t/2,a=e.nativePixelSize,i=e.storageInfo,o=e.extent,s=i.maximumPyramidLevel,f=i.blockWidth,c=i.pyramidScalingFactor,u=a.x,p=[],h=Object(l.k)(e.transform)&&"gcs-shift"===e.transform.type,v=r+(h?0:n),x=h?t-r:n-r,m=0;m<=s;m++){var y=(o.xmax-r)/u/f,d=y-Math.floor(y)==0?y:Math.ceil(y),b=x/u/f,g=b-Math.floor(b)==0?b:Math.ceil(b),j=Math.floor(v/u/f),O=Math.round(v/u)%f,w=(f-Math.round(x/u)%f)%f;p.push({resolutionX:u,blockWidth:f,datsetColumnCount:d,worldColumnCountFromOrigin:g,leftMargin:O,rightPadding:w,originColumnOffset:j}),u*=c}return{originX:r,halfWorldWidth:n,pyramidsInfo:p,hasGCSSShiftTransform:h}}function q(e){var r=e.isAdaptive&&null==e.spacing,t=e.spacing||[32,32],n=K(e),a={cols:n.size[0]+1,rows:n.size[1]+1},o=n.outofBoundPointCount>0&&n.outofBoundPointCount<n.offsets.length/2,s=n.outofBoundPointCount===n.offsets.length/2||r&&o?[0,0]:j(n.offsets,a,t,4),f=(s[0]+s[1])/2,c=e.projectedExtent.spatialReference,u=e.srcBufferExtent.spatialReference;if(r&&(o||f>4)&&(b(c,u,e.datumTransformation)&&(c.isGeographic||Object(l.k)(E(c))),t=[4,4],a={cols:(n=K(Object(i.a)(Object(i.a)({},e),{},{spacing:t}))).size[0]+1,rows:n.size[1]+1},s=j(n.offsets,a,t,4)),n.error=s,t[0]>1&&(n.coefficients=U(n.offsets,a,o)),e.includeGCSGrid&&!c.isGeographic&&!c.isWebMercator)if(u.isGeographic)n.gcsGrid={offsets:n.offsets,coefficients:n.coefficients,spacing:t};else{var p=E(c);if(Object(l.k)(p)&&!p.isEnvelope){var v=function(e){if(!e||e.isGeographic)return e;var r,t=String(e.wkid||e.wkt);return M.has(t)?r=M.get(t):(r=(e.wkid?h.a.coordsys(e.wkid):h.a.fromString(h.b.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),M.set(t,r)),new d.a({wkid:r})}(c),x=W(e.projectedExtent,v),m=K(Object(i.a)(Object(i.a)({},e),{},{srcBufferExtent:x,spacing:t})).offsets,y=U(m,a,o);n.gcsGrid={offsets:m,coefficients:y,spacing:t}}}return n}function K(e){var r,t=e.projectedExtent,n=e.srcBufferExtent,a=e.pixelSize,i=e.datumTransformation,o=e.rasterTransform,s=t.spatialReference,f=n.spatialReference,c=g(s,f),u=t.xmin,p=t.ymin,h=t.xmax,v=t.ymax,x=L(f),y=Object(l.k)(x)&&(e.hasWrapAround||"gcs-shift"===(null===o||void 0===o?void 0:o.type)),d=e.spacing||[32,32],b=d[0]*a.x,j=d[1]*a.y,O=1===d[0],w=Math.ceil((h-u)/b-.1/d[0])+(O?0:1),M=Math.ceil((v-p)/j-.1/d[1])+(O?0:1),k=G({cols:w,rows:M,xmin:u,ymax:v,xres:b,yres:j,inSR:s,outSR:f,datumTransformation:i,preferPE:d[0]<=4,usePixelCenter:O}),R=[],C=0,S=O?-1:NaN,T=n.xmin,N=n.xmax,_=n.ymax,z=n.width,I=n.height,W=P(f,500),X=Object(l.k)(x)&&T>0&&N>x/2,Y=!1;if(c){var F=E(s);Y=Object(l.k)(F)&&F.poleLocation>0}for(var B=0;B<w;B++){for(var A=[],J=0;J<M;J++){var q=k[B*M+J];if(y&&q[0]>N&&q[0]>x/2-W?q[0]-=x:y&&0===B&&q[0]<0&&X&&!o&&(q[0]+=x),!q||isNaN(q[0])||isNaN(q[1]))R.push(S),R.push(S),A.push(null),C++;else{if(o){var K=o.inverseTransform(new m.a({x:q[0],y:q[1],spatialReference:f}));q=[K.x,K.y]}A.push(q),B>0&&y&&r[J]&&q[0]<r[J][0]&&(q[0]+=x,Y&&q[0]>N&&q[0]>x&&(q[0]-=x)),R.push((q[0]-T)/z),R.push((_-q[1])/I)}}r=A}return{offsets:R,error:null,coefficients:null,outofBoundPointCount:C,spacing:d,size:O?[w,M]:[w-1,M-1]}}function U(e,r,t){for(var n=r.cols,a=r.rows,i=new Float32Array((n-1)*(a-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),s=new Float32Array([-1,1,0,0,-1,1,1,0,0]),f=0;f<n-1;f++){for(var c=0;c<a-1;c++){for(var u=f*a*2+2*c,l=e[u],p=e[u+1],h=e[u+2],v=e[u+3],x=e[u+=2*a],m=e[u+1],y=e[u+2],d=e[u+3],b=0,g=12*(c*(n-1)+f),j=0;j<3;j++)i[g++]=o[b++]*l+o[b++]*h+o[b++]*y;b=0;for(var O=0;O<3;O++)i[g++]=o[b++]*p+o[b++]*v+o[b++]*d;b=0;for(var w=0;w<3;w++)i[g++]=s[b++]*l+s[b++]*x+s[b++]*y;b=0;for(var M=0;M<3;M++)i[g++]=s[b++]*p+s[b++]*m+s[b++]*d}if(t)for(var k=0;k<i.length;k++)isNaN(i[k])&&(i[k]=-1)}return i}function D(e){var r=e.clone().normalize();return 1===r.length?r[0]:I(r)}function H(e,r,t){var n,a=r.storageInfo,i=r.pixelSize,o=!1,s=a.pyramidResolutions;if(Object(l.k)(s)&&s.length){var f=(e.x+e.y)/2,c=s[s.length-1],u=(c.x+c.y)/2,h=(i.x+i.y)/2;if(f<=h)n=0;else if(f>=u)n=s.length,o=f/u>8;else for(var v,x=h,y=1;y<=s.length;y++){if(f<=(v=(s[y-1].x+s[y-1].y)/2)){f===v?n=y:"down"===t?(n=y-1,o=f/x>8):n="up"===t||f-x>v-f||f/x>2?y:y-1;break}x=v}var d=0===n?i:s[n-1];return o&&Math.min(d.x,d.y)*Object(p.c)(r.spatialReference)>19567&&(o=!1),{pyramidLevel:n,pyramidResolution:new m.a({x:d.x,y:d.y,spatialReference:r.spatialReference}),excessiveReading:o}}var b=Math.log(e.x/i.x)/Math.LN2,g=Math.log(e.y/i.y)/Math.LN2,j=r.storageInfo.maximumPyramidLevel||0;(n="down"===t?Math.floor(Math.min(b,g)):"up"===t?Math.ceil(Math.max(b,g)):Math.round((b+g)/2))<0?n=0:n>j&&(o=n>j+3,n=j);var O=Math.pow(2,n);return{pyramidLevel:n,pyramidResolution:new m.a({x:O*r.nativePixelSize.x,y:O*r.nativePixelSize.y,spatialReference:r.spatialReference}),excessiveReading:o}}function Q(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=e.extent,i=e.spatialReference,o=e.pixelSize,s=S(new m.a({x:o.x,y:o.y,spatialReference:i}),r,a);if(null==s)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var f=(s.x+s.y)/2,c=Object(p.c)(r),u=f*c*96*39.37,l=r.isGeographic?256/t*295828763.7958547:256/t*591657527.591555,h="vector-magdir"===e.dataType||"vector-uv"===e.dataType,v=W(a,r);h||n&&(r.isGeographic||r.isWebMercator)&&(h=v.xmin*v.xmax<0);var x,y=u,d=1.001;if(h){y=l;var b=r.isGeographic?1341104507446289e-21:.29858214164761665,g=b*(96*c*39.37),j=r.isGeographic?4326:3857;(x=S(new m.a({x:b,y:b,spatialReference:{wkid:j}}),i,v)).x*=y/g,x.y*=y/g}else{x={x:o.x,y:o.y};for(var O=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),w=0;y<l*(d/2)&&w<O;)w++,y*=2,x.x*=2,x.y*=2;Math.max(y,l)/Math.min(y,l)<=d&&(y=l)}for(var M=[y],k=[{x:x.x,y:x.y}],R=70.5310735,C=Math.min(R,u)/d;y>=C;)y/=2,x.x/=2,x.y/=2,M.push(y),k.push({x:x.x,y:x.y});return{projectedPixelSize:s,scales:M,srcResolutions:k,isCustomTilingScheme:!h}}},734:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(142),a=t(143),i=t(144),o=t(145),s=t(14),f=t(148),c=(t(177),t(151)),u=(t(152),t(147),t(150),t(196)),l=t(189),p=t(149),h=t(192),v=t(857),x=t(197),m=t(176);function y(e,r,t){var n=r.x,a=r.y;if(t<2)return{x:e[0]+n*e[2]+a*e[4],y:e[1]+n*e[3]+a*e[5]};if(2===t){var i=n*n,o=a*a,s=n*a;return{x:e[0]+n*e[2]+a*e[4]+i*e[6]+s*e[8]+o*e[10],y:e[1]+n*e[3]+a*e[5]+i*e[7]+s*e[9]+o*e[11]}}var f=n*n,c=a*a,u=n*a,l=f*n,p=f*a,h=n*c,v=a*c;return{x:e[0]+n*e[2]+a*e[4]+f*e[6]+u*e[8]+c*e[10]+l*e[12]+p*e[14]+h*e[16]+v*e[18],y:e[1]+n*e[3]+a*e[5]+f*e[7]+u*e[9]+c*e[11]+l*e[13]+p*e[15]+h*e[17]+v*e[19]}}function d(e,r,t){var n=r.xmin,a=r.ymin,i=r.xmax,o=r.ymax,s=r.spatialReference,f=[];if(t<2)f.push({x:n,y:o}),f.push({x:i,y:o}),f.push({x:n,y:a}),f.push({x:i,y:a});else{for(var c=10,u=0;u<c;u++)f.push({x:n,y:a+(o-a)*u/(c-1)}),f.push({x:i,y:a+(o-a)*u/(c-1)});c=8;for(var l=1;l<=c;l++)f.push({x:n+(i-n)*l/c,y:a}),f.push({x:n+(i-n)*l/c,y:o})}f=f.map((function(r){return y(e,r,t)}));var p=f.map((function(e){return e.x})),h=f.map((function(e){return e.y}));return new m.a({xmin:Math.min.apply(null,p),xmax:Math.max.apply(null,p),ymin:Math.min.apply(null,h),ymax:Math.max.apply(null,h),spatialReference:s})}var b=function(e){Object(i.a)(t,e);var r=Object(o.a)(t);function t(){var e;return Object(n.a)(this,t),(e=r.apply(this,arguments)).polynomialOrder=1,e.type="polynomial",e}return Object(a.a)(t,[{key:"readForwardCoefficients",value:function(e,r){var t=r.coeffX,n=r.coeffY;if(null===t||void 0===t||!t.length||null===n||void 0===n||!n.length||t.length!==n.length)return null;for(var a=[],i=0;i<t.length;i++)a.push(t[i]),a.push(n[i]);return a}},{key:"writeForwardCoefficients",value:function(e,r,t){for(var n=[],a=[],i=0;i<(null===e||void 0===e?void 0:e.length);i++)i%2==0?n.push(e[i]):a.push(e[i]);r.coeffX=n,r.coeffY=a}},{key:"inverseCoefficients",get:function(){var e=this._get("inverseCoefficients"),r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=function(e){var r=Object(s.a)(e,6),t=r[0],n=r[1],a=r[2],i=r[3],o=r[4],f=r[5],c=a*f-o*i,u=o*i-a*f;return[(o*n-t*f)/c,(a*n-t*i)/u,f/c,i/u,-o/c,-a/u]}(r)),e},set:function(e){this._set("inverseCoefficients",e)}},{key:"readInverseCoefficients",value:function(e,r){var t=r.inverseCoeffX,n=r.inverseCoeffY;if(null===t||void 0===t||!t.length||null===n||void 0===n||!n.length||t.length!==n.length)return null;for(var a=[],i=0;i<t.length;i++)a.push(t[i]),a.push(n[i]);return a}},{key:"writeInverseCoefficients",value:function(e,r,t){for(var n=[],a=[],i=0;i<(null===e||void 0===e?void 0:e.length);i++)i%2==0?n.push(e[i]):a.push(e[i]);r.inverseCoeffX=n,r.inverseCoeffY=a}},{key:"affectsPixelSize",get:function(){return this.polynomialOrder>0}},{key:"forwardTransform",value:function(e){if("point"===e.type){var r=y(this.forwardCoefficients,e,this.polynomialOrder);return new x.a({x:r.x,y:r.y,spatialReference:e.spatialReference})}return d(this.forwardCoefficients,e,this.polynomialOrder)}},{key:"inverseTransform",value:function(e){if("point"===e.type){var r=y(this.inverseCoefficients,e,this.polynomialOrder);return new x.a({x:r.x,y:r.y,spatialReference:e.spatialReference})}return d(this.inverseCoefficients,e,this.polynomialOrder)}}]),t}(v.a);Object(f.a)([Object(c.b)({json:{write:!0}})],b.prototype,"polynomialOrder",void 0),Object(f.a)([Object(c.b)()],b.prototype,"forwardCoefficients",void 0),Object(f.a)([Object(l.a)("forwardCoefficients",["coeffX","coeffY"])],b.prototype,"readForwardCoefficients",null),Object(f.a)([Object(h.a)("forwardCoefficients")],b.prototype,"writeForwardCoefficients",null),Object(f.a)([Object(c.b)({json:{write:!0}})],b.prototype,"inverseCoefficients",null),Object(f.a)([Object(l.a)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],b.prototype,"readInverseCoefficients",null),Object(f.a)([Object(h.a)("inverseCoefficients")],b.prototype,"writeInverseCoefficients",null),Object(f.a)([Object(c.b)()],b.prototype,"affectsPixelSize",null),Object(f.a)([Object(u.a)({PolynomialXform:"polynomial"})],b.prototype,"type",void 0);var g=b=Object(f.a)([Object(p.a)("esri.layers.support.rasterTransforms.PolynomialTransform")],b)},857:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var n=t(142),a=t(143),i=t(144),o=t(145),s=t(148),f=t(160),c=t(151),u=(t(152),t(147),t(150),t(149)),l=function(e){Object(i.a)(t,e);var r=Object(o.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(a.a)(t,[{key:"affectsPixelSize",get:function(){return!1}},{key:"forwardTransform",value:function(e){return e}},{key:"inverseTransform",value:function(e){return e}}]),t}(f.a);Object(s.a)([Object(c.b)()],l.prototype,"affectsPixelSize",null),Object(s.a)([Object(c.b)({json:{write:!0}})],l.prototype,"spatialReference",void 0);var p=l=Object(s.a)([Object(u.a)("esri.layers.support.rasterTransforms.BaseRasterTransform")],l)}}]);