(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[31],{345:function(t,e,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function o(t,e){return new Float64Array(t,e,9)}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,r,n,o,a,c,i,u){return[t,e,r,n,o,a,c,i,u]},createView:o},Symbol.toStringTag,{value:"Module"}))},357:function(t,e,r){"use strict";function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function a(t,e){return new Float64Array(t,e,16)}r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return n}));var c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:o,fromValues:function(t,e,r,n,o,a,c,i,u,f,l,b,s,d,j,O){return[t,e,r,n,o,a,c,i,u,f,l,b,s,d,j,O]},createView:a,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},413:function(t,e,r){"use strict";function n(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}function a(t,e){return new Float64Array(t,e,4)}r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return a}));var c=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:o,fromValues:function(t,e,r,n){return[t,e,r,n]},createView:a,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},522:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return E})),r.d(e,"d",(function(){return O})),r.d(e,"e",(function(){return b})),r.d(e,"f",(function(){return f}));var n=r(345),o=r(413),a=r(210),c=r(437),i=r(225),u=r(400);function f(t,e,r){r*=.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function l(t,e){var r=2*Math.acos(e[3]),n=Math.sin(r/2);return n>c.a?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function b(t,e,r){var n=e[0],o=e[1],a=e[2],c=e[3],i=r[0],u=r[1],f=r[2],l=r[3];return t[0]=n*l+c*i+o*f-a*u,t[1]=o*l+c*u+a*i-n*f,t[2]=a*l+c*f+n*u-o*i,t[3]=c*l-n*i-o*u-a*f,t}function s(t,e,r,n){var o,a,i,u,f,l=e[0],b=e[1],s=e[2],d=e[3],j=r[0],O=r[1],p=r[2],y=r[3];return(a=l*j+b*O+s*p+d*y)<0&&(a=-a,j=-j,O=-O,p=-p,y=-y),1-a>c.a?(o=Math.acos(a),i=Math.sin(o),u=Math.sin((1-n)*o)/i,f=Math.sin(n*o)/i):(u=1-n,f=n),t[0]=u*l+f*j,t[1]=u*b+f*O,t[2]=u*s+f*p,t[3]=u*d+f*y,t}function d(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function j(t,e){var r,n=e[0]+e[4]+e[8];if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var o=0;e[4]>e[0]&&(o=1),e[8]>e[3*o+o]&&(o=2);var a=(o+1)%3,c=(o+2)%3;r=Math.sqrt(e[3*o+o]-e[3*a+a]-e[3*c+c]+1),t[o]=.5*r,r=.5/r,t[3]=(e[3*a+c]-e[3*c+a])*r,t[a]=(e[3*a+o]+e[3*o+a])*r,t[c]=(e[3*c+o]+e[3*o+c])*r}return t}function O(t,e,r,n){var o=.5*Math.PI/180;e*=o,r*=o,n*=o;var a=Math.sin(e),c=Math.cos(e),i=Math.sin(r),u=Math.cos(r),f=Math.sin(n),l=Math.cos(n);return t[0]=a*u*l-c*i*f,t[1]=c*i*l+a*u*f,t[2]=c*u*f-a*i*l,t[3]=c*u*l+a*i*f,t}var p=u.c,y=u.k,v=u.a,h=b,g=u.b,m=u.d,M=u.i,T=u.e,A=T,P=u.f,_=P,F=u.j,E=u.g,B=u.h;var S=Object(a.e)(),w=Object(a.g)(1,0,0),x=Object(a.g)(0,1,0);var R=Object(o.b)(),C=Object(o.b)();var I=Object(n.b)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:f,getAxisAngle:l,multiply:b,rotateX:function(t,e,r){r*=.5;var n=e[0],o=e[1],a=e[2],c=e[3],i=Math.sin(r),u=Math.cos(r);return t[0]=n*u+c*i,t[1]=o*u+a*i,t[2]=a*u-o*i,t[3]=c*u-n*i,t},rotateY:function(t,e,r){r*=.5;var n=e[0],o=e[1],a=e[2],c=e[3],i=Math.sin(r),u=Math.cos(r);return t[0]=n*u-a*i,t[1]=o*u+c*i,t[2]=a*u+n*i,t[3]=c*u-o*i,t},rotateZ:function(t,e,r){r*=.5;var n=e[0],o=e[1],a=e[2],c=e[3],i=Math.sin(r),u=Math.cos(r);return t[0]=n*u+o*i,t[1]=o*u-n*i,t[2]=a*u+c*i,t[3]=c*u-a*i,t},calculateW:function(t,e){var r=e[0],n=e[1],o=e[2];return t[0]=r,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),t},slerp:s,random:function(t){var e=Object(c.b)(),r=Object(c.b)(),n=Object(c.b)(),o=Math.sqrt(1-e),a=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=a*Math.sin(2*Math.PI*n),t[3]=a*Math.cos(2*Math.PI*n),t},invert:function(t,e){var r=e[0],n=e[1],o=e[2],a=e[3],c=r*r+n*n+o*o+a*a,i=c?1/c:0;return t[0]=-r*i,t[1]=-n*i,t[2]=-o*i,t[3]=a*i,t},conjugate:d,fromMat3:j,fromEuler:O,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:p,set:y,add:v,mul:h,scale:g,dot:m,lerp:M,length:T,len:A,squaredLength:P,sqrLen:_,normalize:F,exactEquals:E,equals:B,rotationTo:function(t,e,r){var n=Object(i.g)(e,r);return n<-.999999?(Object(i.h)(S,w,e),Object(i.w)(S)<1e-6&&Object(i.h)(S,x,e),Object(i.p)(S,S),f(t,S,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(i.h)(S,e,r),t[0]=S[0],t[1]=S[1],t[2]=S[2],t[3]=1+n,F(t,t))},sqlerp:function(t,e,r,n,o,a){return s(R,e,o,a),s(C,r,n,a),s(t,R,C,2*a*(1-a)),t},setAxes:function(t,e,r,n){var o=I;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-e[0],o[5]=-e[1],o[8]=-e[2],F(t,j(t,o))}},Symbol.toStringTag,{value:"Module"}))},583:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return o}));var n=r(730);function o(t,e,r){if(t.count===e.count)for(var o=t.count,a=r[0],c=r[1],i=r[2],u=r[4],f=r[5],l=r[6],b=r[8],s=r[9],d=r[10],j=r[12],O=r[13],p=r[14],y=t.typedBuffer,v=t.typedBufferStride,h=e.typedBuffer,g=e.typedBufferStride,m=0;m<o;m++){var M=m*v,T=m*g,A=h[T],P=h[T+1],_=h[T+2];y[M]=a*A+u*P+b*_+j,y[M+1]=c*A+f*P+s*_+O,y[M+2]=i*A+l*P+d*_+p}else n.a.error("source and destination buffers need to have the same number of elements")}function a(t,e,r){if(t.count===e.count)for(var o=t.count,a=r[0],c=r[1],i=r[2],u=r[3],f=r[4],l=r[5],b=r[6],s=r[7],d=r[8],j=t.typedBuffer,O=t.typedBufferStride,p=e.typedBuffer,y=e.typedBufferStride,v=0;v<o;v++){var h=v*O,g=v*y,m=p[g],M=p[g+1],T=p[g+2];j[h]=a*m+u*M+b*T,j[h+1]=c*m+f*M+s*T,j[h+2]=i*m+l*M+d*T}else n.a.error("source and destination buffers need to have the same number of elements")}function c(t,e,r){for(var n=Math.min(t.count,e.count),o=t.typedBuffer,a=t.typedBufferStride,c=e.typedBuffer,i=e.typedBufferStride,u=0;u<n;u++){var f=u*a,l=u*i;o[f]=r*c[l],o[f+1]=r*c[l+1],o[f+2]=r*c[l+2]}}function i(t,e){for(var r=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride,i=0;i<r;i++){var u=i*o,f=i*c,l=a[f],b=a[f+1],s=a[f+2],d=l*l+b*b+s*s;if(d>0){var j=1/Math.sqrt(d);n[u]=j*l,n[u+1]=j*b,n[u+2]=j*s}}}function u(t,e,r){for(var n=Math.min(t.count,e.count),o=t.typedBuffer,a=t.typedBufferStride,c=e.typedBuffer,i=e.typedBufferStride,u=0;u<n;u++){var f=u*a,l=u*i;o[f]=c[l]>>r,o[f+1]=c[l+1]>>r,o[f+2]=c[l+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:o,transformMat3:a,scale:c,normalize:i,shiftRight:u},Symbol.toStringTag,{value:"Module"}))},584:function(t,e,r){"use strict";function n(t,e,r){for(var n=t.typedBuffer,o=t.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride,i=r?r.count:e.count,u=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*c,l=0;l<i;++l)n[u]=a[f],n[u+1]=a[f+1],n[u+2]=a[f+2],u+=o,f+=c}function o(t,e,r,n,o){for(var a,c,i=t.typedBuffer,u=t.typedBufferStride,f=null!==(a=null===o||void 0===o?void 0:o.count)&&void 0!==a?a:t.count,l=(null!==(c=null===o||void 0===o?void 0:o.dstIndex)&&void 0!==c?c:0)*u,b=0;b<f;++b)i[l]=e,i[l+1]=r,i[l+2]=n,l+=u}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:o},Symbol.toStringTag,{value:"Module"}))},636:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return v})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return g}));var n=r(146),o=r(250),a=r(345),c=r(403),i=r(357),u=r(207),f=r(266),l=r(493),b=r(851),s=r(452),d=r(583),j=r(637),O=r(731);function p(t,e,r){return Object(j.a)(e.spatialReference,r)?function(t,e,r){var n=e.spatialReference,o=P(e,r,B),a=new Float64Array(t.position.length),c=function(t,e,r,n){Object(d.e)(s.v.fromTypedArray(n),s.v.fromTypedArray(t),e);var o=new Float64Array(t.length);return Object(O.a)(n,o,r)}(t.position,o,n,a),i=Object(u.a)(w,o);return{position:c,normal:m(c,a,t.normal,i,n),tangent:M(c,a,t.tangent,i,n)}}(t,e,r):function(t,e,r){for(var n=new Float64Array(t.position.length),o=t.position,a=e.x,c=e.y,i=e.z||0,u=E(r?r.unit:null,e.spatialReference),f=u.horizontal,l=u.vertical,b=0;b<o.length;b+=3)n[b+0]=o[b+0]*f+a,n[b+1]=o[b+1]*f+c,n[b+2]=o[b+2]*l+i;return{position:n,normal:t.normal,tangent:t.tangent}}(t,e,r)}function y(t,e,r){var o=t.position,a=t.normal,c=t.tangent;if(Object(n.j)(e))return{position:o,normal:a,tangent:c};var i=e.localMatrix;return p({position:Object(O.h)(o,new Float64Array(o.length),i),normal:Object(n.k)(a)?Object(O.g)(a,new Float32Array(a.length),i):null,tangent:Object(n.k)(c)?Object(O.i)(c,new Float32Array(c.length),i):null},e.getOriginPoint(r),{geographic:e.geographic})}function v(t,e,r){var n;return null!==r&&void 0!==r&&r.useTransform?{vertexAttributes:{position:t.position,normal:t.normal,tangent:t.tangent},transform:new b.a({origin:[e.x,e.y,null!==(n=e.z)&&void 0!==n?n:0],geographic:Object(j.a)(e.spatialReference,r)})}:{vertexAttributes:p(t,e,r),transform:null}}function h(t,e,r){return Object(j.a)(e.spatialReference,r)?A(t,e,r):T(t,e,r)}function g(t,e,r,o){if(Object(n.j)(e))return h(t,r,o);var a=y(t,e,r.spatialReference);return r.equals(e.getOriginPoint(r.spatialReference))?T(a,r,o):Object(j.a)(r.spatialReference,o)?A(a,r,o):T(a,r,o)}function m(t,e,r,o,a){if(Object(n.j)(r))return null;var c=new Float32Array(r.length);return Object(d.a)(s.u.fromTypedArray(c),s.u.fromTypedArray(r),o),Object(O.b)(c,t,e,a,c),c}function M(t,e,r,o,a){if(Object(n.j)(r))return null;var c=new Float32Array(r.length);Object(d.a)(s.u.fromTypedArray(c,4*Float32Array.BYTES_PER_ELEMENT),s.u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o);for(var i=3;i<c.length;i+=4)c[i]=r[i];return Object(O.d)(c,t,e,a,c),c}function T(t,e,r){for(var n=new Float64Array(t.position.length),o=t.position,a=e.x,c=e.y,i=e.z||0,u=E(r?r.unit:null,e.spatialReference),f=u.horizontal,l=u.vertical,b=0;b<o.length;b+=3)n[b+0]=(o[b+0]-a)/f,n[b+1]=(o[b+1]-c)/f,n[b+2]=(o[b+2]-i)/l;return{position:n,normal:t.normal,tangent:t.tangent}}function A(t,e,r){var n=e.spatialReference;P(e,r,B);var o=Object(c.a)(S,B),a=new Float64Array(t.position.length),i=function(t,e,r,n){var o=Object(O.f)(t,e,n),a=s.v.fromTypedArray(o),c=new Float64Array(o.length),i=s.v.fromTypedArray(c);return Object(d.e)(i,a,r),c}(t.position,n,o,a),f=Object(u.a)(w,o);return{position:i,normal:_(t.normal,t.position,a,n,f),tangent:F(t.tangent,t.position,a,n,f)}}function P(t,e,r){Object(f.b)(t.spatialReference,[t.x,t.y,t.z||0],r,Object(l.g)(t.spatialReference));var n=E(e?e.unit:null,t.spatialReference),o=n.horizontal,a=n.vertical;return Object(c.f)(r,r,[o,o,a]),r}function _(t,e,r,o,a){if(Object(n.j)(t))return null;var c=Object(O.c)(t,e,r,o,new Float32Array(t.length)),i=s.u.fromTypedArray(c);return Object(d.a)(i,i,a),c}function F(t,e,r,o,a){if(Object(n.j)(t))return null;var c=Object(O.e)(t,e,r,o,new Float32Array(t.length)),i=s.u.fromTypedArray(c,4*Float32Array.BYTES_PER_ELEMENT);return Object(d.a)(i,i,a),c}function E(t,e){if(Object(n.j)(t))return x;var r=e.isGeographic?1:Object(o.c)(e),a=e.isGeographic?1:Object(o.d)(e),c=Object(o.b)(1,t,"meters");return{horizontal:c*r,vertical:c*a}}var B=Object(i.d)(),S=Object(i.d)(),w=Object(a.b)(),x={horizontal:1,vertical:1}},637:function(t,e,r){"use strict";function n(t,e){var r;return t.isGeographic||t.isWebMercator&&(null===(r=null===e||void 0===e?void 0:e.geographic)||void 0===r||r)}r.d(e,"a",(function(){return n}))},729:function(t,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return u}));var n=r(190),o=r(522),a=r(413),c=r(225);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return[t[0],t[1],t[2],t[3]]}function u(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i();return Object(c.e)(r,t),r[3]=e,r}function f(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i();return Object(o.f)(j,t,b(t)),Object(o.f)(O,e,b(e)),Object(o.e)(j,O,j),s(r,Object(n.l)(Object(o.b)(r,j)))}function l(t){return t}function b(t){return Object(n.f)(t[3])}function s(t,e){return t[3]=e,t}var d=[0,0,1,0],j=Object(a.b)(),O=Object(a.b)();i()},730:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=r(156).a.getLogger("esri.views.3d.support.buffer.math")},731:function(t,e,r){"use strict";r.d(e,"a",(function(){return M})),r.d(e,"b",(function(){return g})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return F})),r.d(e,"e",(function(){return _})),r.d(e,"f",(function(){return m})),r.d(e,"g",(function(){return A})),r.d(e,"h",(function(){return T})),r.d(e,"i",(function(){return P}));var n,o,a=r(156),c=r(146),i=r(207),u=r(345),f=r(357),l=r(225),b=r(210),s=r(266),d=r(493),j=r(182),O=r(318),p=r(452),y=r(583),v=a.a.getLogger("esri.geometry.support.meshUtils.normalProjection");function h(t,e,r,o,a){return B(o)?(E(n.TO_PCPF,p.u.fromTypedArray(t),p.v.fromTypedArray(e),p.v.fromTypedArray(r),o,p.u.fromTypedArray(a)),a):(v.error("Cannot convert spatial reference to PCPF"),a)}function g(t,e,r,o,a){return B(o)?(E(n.FROM_PCPF,p.u.fromTypedArray(t),p.v.fromTypedArray(e),p.v.fromTypedArray(r),o,p.u.fromTypedArray(a)),a):(v.error("Cannot convert to spatial reference from PCPF"),a)}function m(t,e,r){return Object(s.h)(t,e,0,r,Object(d.g)(e),0,t.length/3),r}function M(t,e,r){return Object(s.h)(t,Object(d.g)(r),0,e,r,0,t.length/3),e}function T(t,e,r){if(Object(c.j)(t))return e;var n=p.v.fromTypedArray(t),o=p.v.fromTypedArray(e);return Object(y.e)(o,n,r),e}function A(t,e,r){if(Object(c.j)(t))return e;Object(i.a)(C,r);var n=p.u.fromTypedArray(t),o=p.u.fromTypedArray(e);return Object(y.a)(o,n,C),Object(i.g)(C)||Object(y.c)(o,o),e}function P(t,e,r){if(Object(c.j)(t))return e;Object(i.a)(C,r);var n=p.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),o=p.u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(Object(y.a)(o,n,C),Object(i.g)(C)||Object(y.c)(o,o),t!==e)for(var a=3;a<t.length;a+=4)e[a]=t[a];return e}function _(t,e,r,o,a){if(!B(o))return v.error("Cannot convert spatial reference to PCPF"),a;E(n.TO_PCPF,p.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),p.v.fromTypedArray(e),p.v.fromTypedArray(r),o,p.u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(var c=3;c<t.length;c+=4)a[c]=t[c];return a}function F(t,e,r,o,a){if(!B(o))return v.error("Cannot convert to spatial reference from PCPF"),a;E(n.FROM_PCPF,p.u.fromTypedArray(t,16),p.v.fromTypedArray(e),p.v.fromTypedArray(r),o,p.u.fromTypedArray(a,16));for(var c=3;c<t.length;c+=4)a[c]=t[c];return a}function E(t,e,r,o,a,c){if(e){var u=r.count,f=Object(d.g)(a);if(S(a))for(var b=0;b<u;b++)o.getVec(b,w),e.getVec(b,x),Object(s.b)(f,w,R,f),Object(i.e)(C,R),t===n.FROM_PCPF&&Object(i.m)(C,C),Object(l.v)(x,x,C),c.setVec(b,x);else for(var j=0;j<u;j++){o.getVec(j,w),e.getVec(j,x),Object(s.b)(f,w,R,f),Object(i.e)(C,R);var p=Object(O.g)(r.get(j,1)),y=Math.cos(p);t===n.TO_PCPF&&(y=1/y),C[0]*=y,C[1]*=y,C[2]*=y,C[3]*=y,C[4]*=y,C[5]*=y,t===n.FROM_PCPF&&Object(i.m)(C,C),Object(l.v)(x,x,C),Object(l.p)(x,x),c.setVec(j,x)}return c}}function B(t){return S(t)||function(t){return t.isWebMercator}(t)}function S(t){return t.isWGS84||Object(j.f)(t)||Object(j.i)(t)||Object(j.j)(t)}(o=n||(n={}))[o.TO_PCPF=0]="TO_PCPF",o[o.FROM_PCPF=1]="FROM_PCPF";var w=Object(b.e)(),x=Object(b.e)(),R=Object(f.d)(),C=Object(u.b)()},851:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var n,o=r(14),a=r(142),c=r(143),i=r(144),u=r(145),f=r(148),l=r(160),b=r(146),s=r(151),d=(r(152),r(147),r(150),r(149)),j=r(403),O=r(357),p=r(225),y=r(210),v=r(197),h=r(266),g=r(493),m=r(729),M=r(452),T=r(583),A=r(584),P=n=function(t){Object(i.a)(r,t);var e=Object(u.a)(r);function r(t){var n;return Object(a.a)(this,r),(n=e.call(this,t)).origin=Object(y.e)(),n.translation=Object(y.e)(),n.rotation=Object(m.d)(),n.scale=Object(y.g)(1,1,1),n.geographic=!0,n}return Object(c.a)(r,[{key:"localMatrix",get:function(){var t=Object(O.d)();return Object(j.m)(t,this.scale),Object(j.d)(t,t,Object(m.a)(this.rotation),Object(m.b)(this.rotation)),Object(j.h)(t,t,this.translation),t}},{key:"localMatrixInverse",get:function(){return Object(j.a)(Object(O.d)(),this.localMatrix)}},{key:"applyLocal",value:function(t,e){return Object(p.o)(e,t,this.localMatrix)}},{key:"applyLocalInverse",value:function(t,e){return Object(p.o)(e,t,this.localMatrixInverse)}},{key:"project",value:function(t,e){var r=new Float64Array(t.length),n=M.v.fromTypedArray(r),o=M.v.fromTypedArray(t);if(this.geographic){var a=Object(g.g)(e),c=Object(O.d)();return Object(h.b)(e,this.origin,c,a),Object(j.i)(c,c,this.localMatrix),Object(T.e)(n,o,c),Object(h.h)(r,a,0,r,e,0,r.length/3),r}var i=this.localMatrix,u=this.origin;Object(j.n)(i,O.a)?Object(A.a)(n,o):Object(T.e)(n,o,i);for(var f=0;f<r.length;f+=3)r[f+0]+=u[0],r[f+1]+=u[1],r[f+2]+=u[2];return r}},{key:"getOriginPoint",value:function(t){var e=Object(o.a)(this.origin,3),r=e[0],n=e[1],a=e[2];return new v.a({x:r,y:n,z:a,spatialReference:t})}},{key:"equals",value:function(t){return Object(b.k)(t)&&this.geographic===t.geographic&&Object(p.m)(this.origin,t.origin)&&Object(j.o)(this.localMatrix,t.localMatrix)}},{key:"clone",value:function(){var t={origin:Object(y.c)(this.origin),translation:Object(y.c)(this.translation),rotation:Object(m.d)(this.rotation),scale:Object(y.c)(this.scale),geographic:this.geographic};return new n(t)}}]),r}(l.a);Object(f.a)([Object(s.b)({type:[Number],nonNullable:!0,json:{write:!0}})],P.prototype,"origin",void 0),Object(f.a)([Object(s.b)({type:[Number],nonNullable:!0,json:{write:!0}})],P.prototype,"translation",void 0),Object(f.a)([Object(s.b)({type:[Number],nonNullable:!0,json:{write:!0}})],P.prototype,"rotation",void 0),Object(f.a)([Object(s.b)({type:[Number],nonNullable:!0,json:{write:!0}})],P.prototype,"scale",void 0),Object(f.a)([Object(s.b)({type:Boolean,nonNullable:!0,json:{write:!0}})],P.prototype,"geographic",void 0),Object(f.a)([Object(s.b)()],P.prototype,"localMatrix",null),Object(f.a)([Object(s.b)()],P.prototype,"localMatrixInverse",null);var _=P=n=Object(f.a)([Object(d.a)("esri.geometry.support.MeshTransform")],P)}}]);