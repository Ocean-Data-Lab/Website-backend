(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[152],{1334:function(n,r,t){"use strict";t.r(r),function(n){t.d(r,"i",(function(){return u}));var e,o,i,a={exports:{}};e=a,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(r){var t,e,i=void 0!==(r=r||{})?r:{};i.ready=new Promise((function(n,r){t=n,e=r}));var a,u={};for(a in i)i.hasOwnProperty(a)&&(u[a]=i[a]);var c="object"==typeof window,f="function"==typeof importScripts;"object"==typeof n&&"object"==typeof n.versions&&n.versions.node;var s,l="";(c||f)&&(f?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),o&&(l=o),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",f&&(s=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var p,d,v=i.print||console.log.bind(console),h=i.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(i[a]=u[a]);u=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(p=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&L("no native wasm support detected");var m=!1,y="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function g(n,r,t){for(var e=r+t,o=r;n[o]&&!(o>=e);)++o;if(o-r>16&&n.subarray&&y)return y.decode(n.subarray(r,o));for(var i="";r<o;){var a=n[r++];if(128&a){var u=63&n[r++];if(192!=(224&a)){var c=63&n[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[r++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function _(n,r){return n?g(A,n,r):""}var w,b,A,T,C,P,k,E,W,S,R="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function F(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&C[e];)++e;if((t=e<<1)-n>32&&R)return R.decode(A.subarray(n,t));for(var i="",a=0;!(a>=r/2);++a){var u=T[n+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function x(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,i=0;i<o;++i){var a=n.charCodeAt(i);T[r>>1]=a,r+=2}return T[r>>1]=0,r-e}function j(n){return 2*n.length}function I(n,r){for(var t=0,e="";!(t>=r/4);){var o=P[n+4*t>>2];if(0==o)break;if(++t,o>=65536){var i=o-65536;e+=String.fromCharCode(55296|i>>10,56320|1023&i)}else e+=String.fromCharCode(o)}return e}function U(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),P[r>>2]=a,(r+=4)+4>o)break}return P[r>>2]=0,r-e}function O(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function D(n,r){return n%r>0&&(n+=r-n%r),n}function M(n){w=n,i.HEAP8=b=new Int8Array(n),i.HEAP16=T=new Int16Array(n),i.HEAP32=P=new Int32Array(n),i.HEAPU8=A=new Uint8Array(n),i.HEAPU16=C=new Uint16Array(n),i.HEAPU32=k=new Uint32Array(n),i.HEAPF32=E=new Float32Array(n),i.HEAPF64=W=new Float64Array(n)}i.INITIAL_MEMORY;var V=[],z=[],H=[];function B(n){V.unshift(n)}function N(n){H.unshift(n)}var q=0,J=null;function L(n){i.onAbort&&i.onAbort(n),h(n="Aborted("+n+")"),m=!0,n+=". Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(n);throw e(r),r}i.preloadedImages={},i.preloadedAudios={};var G;function X(n){return n.startsWith("data:application/octet-stream;base64,")}function Y(n){try{if(n==G&&p)return new Uint8Array(p);if(s)return s(n);throw"both async and sync fetching of the wasm failed"}catch(h){L(h)}}function Z(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?K(t)():K(t)(r.arg):t(void 0===r.arg?null:r.arg)}else r(i)}}X(G="i3s.wasm")||(G=function(n){return i.locateFile?i.locateFile(n,l):l+n}(G));var $=[];function K(n){var r=$[n];return r||(n>=$.length&&($.length=n+1),$[n]=r=S.get(n)),r}function Q(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(n){P[this.ptr+4>>2]=n},this.get_type=function(){return P[this.ptr+4>>2]},this.set_destructor=function(n){P[this.ptr+8>>2]=n},this.get_destructor=function(){return P[this.ptr+8>>2]},this.set_refcount=function(n){P[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,b[this.ptr+12>>0]=n},this.get_caught=function(){return 0!=b[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,b[this.ptr+13>>0]=n},this.get_rethrown=function(){return 0!=b[this.ptr+13>>0]},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=P[this.ptr>>2];P[this.ptr>>2]=n+1},this.release_ref=function(){var n=P[this.ptr>>2];return P[this.ptr>>2]=n-1,1===n}}var nn={};function rn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function tn(n){return this.fromWireType(k[n>>2])}var en={},on={},an={};function un(n,r){var t=function(n,r){return n=function(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}(n),function(){return r.apply(this,arguments)}}(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var cn=void 0;function fn(n){throw new cn(n)}function sn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&fn("Mismatched type converter count");for(var o=0;o<n.length;++o)mn(n[o],e[o])}n.forEach((function(n){an[n]=r}));var o=new Array(r.length),i=[],a=0;r.forEach((function(n,r){on.hasOwnProperty(n)?o[r]=on[n]:(i.push(n),en.hasOwnProperty(n)||(en[n]=[]),en[n].push((function(){o[r]=on[n],++a===i.length&&e(o)})))})),0===i.length&&e(o)}function ln(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var pn=void 0;function dn(n){for(var r="",t=n;A[t];)r+=pn[A[t++]];return r}var vn=void 0;function hn(n){throw new vn(n)}function mn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||hn('type "'+e+'" must have a positive integer typeid pointer'),on.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;hn("Cannot register type '"+e+"' twice")}if(on[n]=r,delete an[n],en.hasOwnProperty(n)){var o=en[n];delete en[n],o.forEach((function(n){n()}))}}var yn=[],gn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function _n(n){n>4&&0==--gn[n].refcount&&(gn[n]=void 0,yn.push(n))}function wn(){for(var n=0,r=5;r<gn.length;++r)void 0!==gn[r]&&++n;return n}function bn(){for(var n=5;n<gn.length;++n)if(void 0!==gn[n])return gn[n];return null}var An=function(n){return n||hn("Cannot use deleted val. handle = "+n),gn[n].value},Tn=function(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=yn.length?yn.pop():gn.length;return gn[r]={refcount:1,value:n},r}};function Cn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Pn(n,r){switch(r){case 2:return function(n){return this.fromWireType(E[n>>2])};case 3:return function(n){return this.fromWireType(W[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function kn(n,r,t){i.hasOwnProperty(n)?((void 0===t||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[t])&&hn("Cannot register public name '"+n+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||hn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(i,n,n),i.hasOwnProperty(t)&&hn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),i[n].overloadTable[t]=r):(i[n]=r,void 0!==t&&(i[n].numArguments=t))}function En(n,r,t){i.hasOwnProperty(n)||fn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==t?i[n].overloadTable[t]=r:(i[n]=r,i[n].argCount=t)}function Wn(n,r,t){return n.includes("j")?function(n,r,t){var e=i["dynCall_"+n];return t&&t.length?e.apply(null,[r].concat(t)):e.call(null,r)}(n,r,t):K(r).apply(null,t)}function Sn(n,r){var t=(n=dn(n)).includes("j")?function(n,r){var t=[];return function(){t.length=arguments.length;for(var e=0;e<arguments.length;e++)t[e]=arguments[e];return Wn(n,r,t)}}(n,r):K(r);return"function"!=typeof t&&hn("unknown function pointer with signature "+n+": "+r),t}var Rn=void 0;function Fn(n){var r=zn(n),t=dn(r);return Vn(r),t}function xn(n,r,t){switch(r){case 0:return t?function(n){return b[n]}:function(n){return A[n]};case 1:return t?function(n){return T[n>>1]}:function(n){return C[n>>1]};case 2:return t?function(n){return P[n>>2]}:function(n){return k[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var jn={};function In(n){try{return d.grow(n-w.byteLength+65535>>>16),M(d.buffer),1}catch(t){}}var Un={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=Un.buffers[n];0===r||10===r?((1===n?v:h)(g(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return Un.varargs+=4,P[Un.varargs-4>>2]},getStr:function(n){return _(n)},get64:function(n,r){return n}};cn=i.InternalError=un(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);pn=n}(),vn=i.BindingError=un(Error,"BindingError"),i.count_emval_handles=wn,i.get_first_emval=bn,Rn=i.UnboundTypeError=un(Error,"UnboundTypeError");var On={__call_sighandler:function(n,r){K(n)(r)},__cxa_allocate_exception:function(n){return Mn(n+16)+16},__cxa_atexit:function(n,r){},__cxa_throw:function(n,r,t){throw new Q(n).init(r,t),n},_embind_finalize_value_object:function(n){var r=nn[n];delete nn[n];var t=r.rawConstructor,e=r.rawDestructor,o=r.fields;sn([n],o.map((function(n){return n.getterReturnType})).concat(o.map((function(n){return n.setterArgumentType}))),(function(n){var i={};return o.forEach((function(r,t){var e=r.fieldName,a=n[t],u=r.getter,c=r.getterContext,f=n[t+o.length],s=r.setter,l=r.setterContext;i[e]={read:function(n){return a.fromWireType(u(c,n))},write:function(n,r){var t=[];s(l,n,f.toWireType(t,r)),rn(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in i)r[t]=i[t].read(n);return e(n),r},toWireType:function(n,r){for(var o in i)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var a=t();for(o in i)i[o].write(a,r[o]);return null!==n&&n.push(e,a),a},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:e}]}))},_embind_register_bigint:function(n,r,t,e,o){},_embind_register_bool:function(n,r,t,e,o){var i=ln(t);mn(n,{name:r=dn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:o},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=b;else if(2===t)e=T;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=P}return this.fromWireType(e[n>>i])},destructorFunction:null})},_embind_register_emval:function(n,r){mn(n,{name:r=dn(r),fromWireType:function(n){var r=An(n);return _n(n),r},toWireType:function(n,r){return Tn(r)},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:null})},_embind_register_float:function(n,r,t){var e=ln(t);mn(n,{name:r=dn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Cn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Pn(r,e),destructorFunction:null})},_embind_register_function:function(n,r,t,e,o,i){var a=function(n,r){for(var t=[],e=0;e<n;e++)t.push(P[(r>>2)+e]);return t}(r,t);n=dn(n),o=Sn(e,o),kn(n,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||on[r]||(an[r]?an[r].forEach(n):(t.push(r),e[r]=!0))})),new Rn(n+": "+t.map(Fn).join([", "]))}("Cannot call "+n+" due to unbound types",a)}),r-1),sn([],a,(function(t){var e=[t[0],null].concat(t.slice(1));return En(n,function(n,r,t,e,o){var i=r.length;i<2&&hn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==t,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s=i-2,l=new Array(s),p=[],d=[];return function(){var t;arguments.length!==s&&hn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),d.length=0,p.length=a?2:1,p[0]=o,a&&(t=r[1].toWireType(d,this),p[1]=t);for(var i=0;i<s;++i)l[i]=r[i+2].toWireType(d,arguments[i]),p.push(l[i]);function c(n){if(u)rn(d);else for(var e=a?1:2;e<r.length;e++){var o=1===e?t:l[e-2];null!==r[e].destructorFunction&&r[e].destructorFunction(o)}if(f)return r[0].fromWireType(n)}return c(e.apply(null,p))}}(n,e,null,o,i),r-1),[]}))},_embind_register_integer:function(n,r,t,e,o){r=dn(r),-1===o&&(o=4294967295);var i=ln(t),a=function(n){return n};if(0===e){var u=32-8*t;a=function(n){return n<<u>>>u}}var c=r.includes("unsigned");mn(n,{name:r,fromWireType:a,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Cn(t)+'" to '+this.name);if(t<e||t>o)throw new TypeError('Passing a number "'+Cn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+o+"]!");return c?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:xn(r,i,0!==e),destructorFunction:null})},_embind_register_memory_view:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=k,t=r[n>>=2],o=r[n+1];return new e(w,o,t)}mn(n,{name:t=dn(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(n,r){var t="std::string"===(r=dn(r));mn(n,{name:r,fromWireType:function(n){var r,e=k[n>>2];if(t)for(var o=n+4,i=0;i<=e;++i){var a=n+4+i;if(i==e||0==A[a]){var u=_(o,a-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=a+1}}else{var c=new Array(e);for(i=0;i<e;++i)c[i]=String.fromCharCode(A[n+4+i]);r=c.join("")}return Vn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||hn("Cannot pass non-string to std::string");var o=(t&&e?function(){return function(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}(r)}:function(){return r.length})(),i=Mn(4+o+1);if(k[i>>2]=o,t&&e)!function(n,r,t){(function(n,r,t,e){if(!(e>0))return 0;for(var o=t,i=t+e-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(t>=i)break;r[t++]=u}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}r[t]=0})(n,A,r,t)}(r,i+4,o+1);else if(e)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(Vn(i),hn("String has UTF-16 code units that do not fit in 8 bits")),A[i+4+a]=u}else for(a=0;a<o;++a)A[i+4+a]=r[a];return null!==n&&n.push(Vn,i),i},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:function(n){Vn(n)}})},_embind_register_std_wstring:function(n,r,t){var e,o,i,a,u;t=dn(t),2===r?(e=F,o=x,a=j,i=function(){return C},u=1):4===r&&(e=I,o=U,a=O,i=function(){return k},u=2),mn(n,{name:t,fromWireType:function(n){for(var t,o=k[n>>2],a=i(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==a[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),c=s+r}}return Vn(n),t},toWireType:function(n,e){"string"!=typeof e&&hn("Cannot pass non-string to C++ string type "+t);var i=a(e),c=Mn(4+i+r);return k[c>>2]=i>>u,o(e,c+4,i+r),null!==n&&n.push(Vn,c),c},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:function(n){Vn(n)}})},_embind_register_value_object:function(n,r,t,e,o,i){nn[n]={name:dn(r),rawConstructor:Sn(t,e),rawDestructor:Sn(o,i),fields:[]}},_embind_register_value_object_field:function(n,r,t,e,o,i,a,u,c,f){nn[n].fields.push({fieldName:dn(r),getterReturnType:t,getter:Sn(e,o),getterContext:i,setterArgumentType:a,setter:Sn(u,c),setterContext:f})},_embind_register_void:function(n,r){mn(n,{isVoid:!0,name:r=dn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},_emval_decref:_n,_emval_incref:function(n){n>4&&(gn[n].refcount+=1)},_emval_new_cstring:function(n){return Tn(function(n){var r=jn[n];return void 0===r?dn(n):r}(n))},_emval_take_value:function(n,r){var t=(n=function(n,r){var t=on[n];return void 0===t&&hn(r+" has unknown type "+Fn(n)),t}(n,"_emval_take_value")).readValueFromPointer(r);return Tn(t)},abort:function(){L("")},emscripten_memcpy_big:function(n,r,t){A.copyWithin(n,r,r+t)},emscripten_resize_heap:function(n){var r=A.length,t=2147483648;if((n>>>=0)>t)return!1;for(var e=1;e<=4;e*=2){var o=r*(1+.2/e);if(o=Math.min(o,n+100663296),In(Math.min(t,D(Math.max(n,o),65536))))return!0}return!1},fd_close:function(n){return 0},fd_seek:function(n,r,t,e,o){},fd_write:function(n,r,t,e){for(var o=0,i=0;i<t;i++){var a=P[r>>2],u=P[r+4>>2];r+=8;for(var c=0;c<u;c++)Un.printChar(n,A[a+c]);o+=u}return P[e>>2]=o,0},setTempRet0:function(n){}};(function(){var n={env:On,wasi_snapshot_preview1:On};function r(n,r){var t=n.exports;i.asm=t,M((d=i.asm.memory).buffer),S=i.asm.__indirect_function_table,function(n){z.unshift(n)}(i.asm.__wasm_call_ctors),function(n){if(q--,i.monitorRunDependencies&&i.monitorRunDependencies(q),0==q&&J){var r=J;J=null,r()}}()}function t(n){r(n.instance)}function o(r){return(p||!c&&!f||"function"!=typeof fetch?Promise.resolve().then((function(){return Y(G)})):fetch(G,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+G+"'";return n.arrayBuffer()})).catch((function(){return Y(G)}))).then((function(r){return WebAssembly.instantiate(r,n)})).then((function(n){return n})).then(r,(function(n){h("failed to asynchronously prepare wasm: "+n),L(n)}))}if(q++,i.monitorRunDependencies&&i.monitorRunDependencies(q),i.instantiateWasm)try{return i.instantiateWasm(n,r)}catch(c){return h("Module.instantiateWasm callback failed with error: "+c),!1}(p||"function"!=typeof WebAssembly.instantiateStreaming||X(G)||"function"!=typeof fetch?o(t):fetch(G,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){return h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),o(t)}))}))).catch(e)})(),i.___wasm_call_ctors=function(){return(i.___wasm_call_ctors=i.asm.__wasm_call_ctors).apply(null,arguments)};var Dn,Mn=i._malloc=function(){return(Mn=i._malloc=i.asm.malloc).apply(null,arguments)},Vn=i._free=function(){return(Vn=i._free=i.asm.free).apply(null,arguments)},zn=i.___getTypeName=function(){return(zn=i.___getTypeName=i.asm.__getTypeName).apply(null,arguments)};function Hn(n){function r(){Dn||(Dn=!0,i.calledRun=!0,m||(Z(z),t(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)N(i.postRun.shift());Z(H)}()))}q>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)B(i.preRun.shift());Z(V)}(),q>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),r()}),1)):r()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},i.___errno_location=function(){return(i.___errno_location=i.asm.__errno_location).apply(null,arguments)},i.stackSave=function(){return(i.stackSave=i.asm.stackSave).apply(null,arguments)},i.stackRestore=function(){return(i.stackRestore=i.asm.stackRestore).apply(null,arguments)},i.stackAlloc=function(){return(i.stackAlloc=i.asm.stackAlloc).apply(null,arguments)},i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},J=function n(){Dn||Hn(),Dn||(J=n)},i.run=Hn,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Hn(),r.ready},e.exports=i;var u=function(n,r){for(var t=function(){var t=r[e];if("string"!=typeof t&&!Array.isArray(t)){var o=function(r){if("default"!==r&&!(r in n)){var e=Object.getOwnPropertyDescriptor(t,r);e&&Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})}};for(var i in t)o(i)}},e=0;e<r.length;e++)t();return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:a.exports},[a.exports])}.call(this,t(84))}}]);