(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[12,14],{1016:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return f})),r.d(t,"contentToBlob",(function(){return j})),r.d(t,"fetchResources",(function(){return p})),r.d(t,"getSiblingOfSameType",(function(){return w})),r.d(t,"getSiblingOfSameTypeI",(function(){return S})),r.d(t,"removeAllResources",(function(){return y})),r.d(t,"removeResource",(function(){return b})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return x}));var n=r(14),a=r(155),o=r(154),i=r.n(o),s=r(186),c=r(159),u=r(146),l=r(183);function p(e){return d.apply(this,arguments)}function d(){return d=Object(a.a)(i.a.mark((function e(t){var r,n,a,o,s,c,p,d,f,h,b,v,y=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.length>1&&void 0!==y[1]?y[1]:{},n=y.length>2?y[2]:void 0,e.next=4,t.load(n);case 4:return a=Object(l.B)(t.itemUrl,"resources"),o=r.start,s=void 0===o?1:o,c=r.num,p=void 0===c?10:c,d=r.sortOrder,f=void 0===d?"asc":d,h=r.sortField,b={query:{start:s,num:p,sortOrder:f,sortField:void 0===h?"created":h,token:t.apiKey},signal:Object(u.i)(n,"signal")},e.next=16,t.portal._request(a,b);case 16:return v=e.sent,e.abrupt("return",{total:v.total,nextStart:v.nextStart,resources:v.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e,t,r,n){return h.apply(this,arguments)}function h(){return h=Object(a.a)(i.a.mark((function e(t,r,a,o){var s,p,d,f,h,b,v,y;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new c.a("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return s=t.portalItem,e.next=5,s.load(o);case 5:return p=Object(l.B)(s.userItemUrl,"add"===r?"addResources":"updateResources"),d=O(t.path),f=Object(n.a)(d,2),h=f[0],b=f[1],e.next=12,j(a);case 12:return v=e.sent,y=new FormData,h&&"."!==h&&y.append("resourcesPrefix",h),y.append("fileName",b),y.append("file",v,b),y.append("f","json"),Object(u.k)(o)&&o.access&&y.append("access",o.access),e.next=21,s.portal._request(p,{method:"post",body:y,signal:Object(u.i)(o,"signal")});case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e,t,r){return v.apply(this,arguments)}function v(){return(v=Object(a.a)(i.a.mark((function e(t,r,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new c.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(n);case 4:return a=Object(l.B)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(a,{method:"post",query:{resource:r.path},signal:Object(u.i)(n,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return n=Object(l.B)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(n,{method:"post",query:{deleteAll:!0},signal:Object(u.i)(r,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function x(e){var t=function(e){var t=Object(l.p)(e);return Object(u.j)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=Object(n.a)(t,2),a=r[0],o=r[1],i=O(a),s=Object(n.a)(i,2);return[s[0],s[1],o]}function j(e){return g.apply(this,arguments)}function g(){return(g=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,Object(s.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){if(!e.hasPath())return null;var r=x(e.path),a=Object(n.a)(r,3),o=a[0],i=a[2];return e.portalItem.resourceFromPath(Object(l.B)(o,t+i))}function S(e,t){if(!e.hasPath())return null;var r=x(e.path),a=Object(n.a)(r,3),o=a[0],i=a[2];return e.portalItem.resourceFromPath(Object(l.B)(o,t+i))}},1027:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(155),a=r(154),o=r.n(a),i=r(186),s=r(159),c=r(146);function u(e,t,r,n,a,o){return l.apply(this,arguments)}function l(){return l=Object(n.a)(o.a.mark((function e(t,r,n,a,u,l){var p,d,f,h,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=null,!Object(c.k)(n)){e.next=17;break}return d="".concat(t,"/nodepages/"),f=d+Math.floor(n.rootIndex/n.nodesPerPage),e.prev=3,e.next=6,Object(i.default)(f,{query:{f:"json",token:a},responseType:"json",signal:l});case 6:return e.t0=e.sent.data,e.t1=n.rootIndex,e.t2=n.nodesPerPage,e.t3=n.lodSelectionMetricType,e.t4=d,e.abrupt("return",{type:"page",rootPage:e.t0,rootIndex:e.t1,pageSize:e.t2,lodMetric:e.t3,urlPrefix:e.t4});case 14:e.prev=14,e.t5=e.catch(3),Object(c.k)(u)&&u.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",f,e.t5),p=e.t5;case 17:if(r){e.next=19;break}return e.abrupt("return",null);case 19:return h="".concat(t,"/nodes/"),b=h+(r&&r.split("/").pop()),e.prev=20,e.next=23,Object(i.default)(b,{query:{f:"json",token:a},responseType:"json",signal:l});case 23:return e.t6=e.sent.data,e.t7=h,e.abrupt("return",{type:"node",rootNode:e.t6,urlPrefix:e.t7});case 28:throw e.prev=28,e.t8=e.catch(20),new s.a("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e.t8,url:b});case 31:case"end":return e.stop()}}),e,null,[[3,14],[20,28]])}))),l.apply(this,arguments)}},672:function(e,t,r){"use strict";r.d(t,"a",(function(){return G})),r.d(t,"b",(function(){return C}));var n=r(60),a=r(5),o=r(155),i=r(142),s=r(143),c=r(144),u=r(145),l=r(154),p=r.n(l),d=r(148),f=r(186),h=r(159),b=(r(147),r(156)),v=r(146),y=r(162),m=r(183),O=r(151),x=(r(152),r(150),r(189)),j=r(149),g=r(192),w=r(695),S=r(176),k=r(613),I=r(185),_=r(372),R=r(259),A=r(1027),P=r(276),T=r(434),N=r(475),E=r(577),U=r(1016);function K(e,t,r){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(p.a.mark((function e(t,r,a){var o,i,s,c,u,l,d,f,b,v,m,O,x,j,g,w,S;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.resources){e.next=2;break}return e.abrupt("return");case 2:o=r.portalItem===t.portalItem?new Set(t.paths):new Set,t.paths.length=0,t.portalItem=r.portalItem,i=new Set(r.resources.toKeep.map((function(e){return e.resource.path}))),s=new Set,c=[],i.forEach((function(e){o.delete(e),t.paths.push(e)})),u=Object(n.a)(r.resources.toUpdate);try{for(u.s();!(l=u.n()).done;)d=l.value,o.delete(d.resource.path),i.has(d.resource.path)||s.has(d.resource.path)?(f=d.resource,b=d.content,v=d.finish,m=d.error,O=Object(U.getSiblingOfSameTypeI)(f,Object(E.a)()),t.paths.push(O.path),c.push(F({resource:O,content:b,finish:v,error:m},a))):(t.paths.push(d.resource.path),c.push(M(d,a)),s.add(d.resource.path))}catch(p){u.e(p)}finally{u.f()}x=Object(n.a)(r.resources.toAdd);try{for(x.s();!(j=x.n()).done;)g=j.value,c.push(F(g,a)),t.paths.push(g.resource.path)}catch(p){x.e(p)}finally{x.f()}if(o.forEach((function(e){var t=r.portalItem.resourceFromPath(e);c.push(t.portalItem.removeResource(t).catch((function(){})))})),0!==c.length){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,Object(y.g)(c);case 14:if(w=e.sent,Object(y.p)(a),S=w.filter((function(e){return"error"in e})).map((function(e){return e.error})),!(S.length>0)){e.next=19;break}throw new h.a("save:resources","Failed to save one or more resources",{errors:S});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(p.a.mark((function e(t,r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)(t.resource.portalItem.addResource(t.resource,t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error&&t.error(n.error),n.error;case 5:t.finish&&t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return V.apply(this,arguments)}function V(){return(V=Object(o.a)(p.a.mark((function e(t,r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)(t.resource.update(t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error(n.error),n.error;case 5:t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B,z,J=b.a.getLogger("esri.layers.mixins.SceneService"),C=function(e){var t=function(e){Object(c.a)(l,e);var t=Object(u.a)(l);function l(){var e;return Object(i.a)(this,l),(e=t.apply(this,arguments)).spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e.indexInfo=null,e._debouncedSaveOperations=Object(y.f)(function(){var t=Object(o.a)(p.a.mark((function t(r,n,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r,t.next=t.t0===G.SAVE?3:t.t0===G.SAVE_AS?4:5;break;case 3:return t.abrupt("return",e._save(n));case 4:return t.abrupt("return",e._saveAs(a,n));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),e}return Object(s.a)(l,[{key:"readSpatialReference",value:function(e,t){return this._readSpatialReference(t)}},{key:"_readSpatialReference",value:function(e){if(null!=e.spatialReference)return I.a.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,n=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=n?new I.a(n):null}},{key:"readFullExtent",value:function(e,t,r){if(null!=e&&"object"==typeof e){var n=null==e.spatialReference?Object(a.a)(Object(a.a)({},e),{},{spatialReference:this._readSpatialReference(t)}):e;return S.a.fromJSON(n,r)}var o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((function(e){return e<D}))?null:new S.a({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}},{key:"parseVersionString",value:function(e){var t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}},{key:"readVersion",value:function(e,t){var r=t.store,n=null!=r.version?r.version.toString():"";return this.parseVersionString(n)}},{key:"readTitlePortalItem",value:function(e){return"item-title"!==this.sublayerTitleMode?void 0:e}},{key:"readTitleService",value:function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(_.j)(this.url,t.name);var n=t.name;if(!n&&this.url){var a=Object(_.f)(this.url);Object(v.k)(a)&&(n=a.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(n=r+" - "+n),Object(_.a)(n)}},{key:"url",set:function(e){var t=Object(_.i)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:J});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}},{key:"writeUrl",value:function(e,t,r,n){Object(_.k)(this,e,"layers",t,n)}},{key:"parsedUrl",get:function(){var e=this._get("url");if(!e)return null;var t=Object(m.M)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}},{key:"_fetchIndexAndUpdateExtent",value:function(){var e=Object(o.a)(p.a.mark((function e(t,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.indexInfo=Object(A.a)(this.parsedUrl.path,this.rootNode,t,this.apiKey,J,r),e.t0=null==this.fullExtent||this.fullExtent.hasZ,e.t0){e.next=8;break}return e.t1=this,e.next=6,this.indexInfo;case 6:e.t2=e.sent,e.t1._updateExtent.call(e.t1,e.t2);case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_updateExtent",value:function(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r,n=e.rootIndex%e.pageSize,a=null===(t=e.rootPage)||void 0===t||null===(r=t.nodes)||void 0===r?void 0:r[n];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new h.a("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<D||null==this.fullExtent||this.fullExtent.hasZ)return;var o=a.obb.halfSize,i=a.obb.center[2],s=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-s,this.fullExtent.zmax=i+s}else if("node"===(null===e||void 0===e?void 0:e.type)){var c,u=null===(c=e.rootNode)||void 0===c?void 0:c.mbs;if(!Array.isArray(u)||4!==u.length||u[0]<D)return;var l=u[2],p=u[3];this.fullExtent.zmin=l-p,this.fullExtent.zmax=l+p}}},{key:"_fetchService",value:function(){var e=Object(o.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this.url){e.next=2;break}throw new h.a("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");case 2:if(null!=this.layerId||!/SceneServer\/*$/i.test(this.url)){e.next=7;break}return e.next=5,this._fetchFirstLayerId(t);case 5:null!=(r=e.sent)&&(this.layerId=r);case 7:return e.abrupt("return",this._fetchServiceLayer(t));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchFirstLayerId",value:function(){var e=Object(o.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if(!((r=e.sent).data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)){e.next=5;break}return e.abrupt("return",r.data.layers[0].id);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchServiceLayer",value:function(){var e=Object(o.a)(p.a.mark((function e(t){var r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if((r=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),n=!1,r.data.layerType&&"Voxel"===r.data.layerType&&(n=!0),!n){e.next=7;break}return e.abrupt("return",this._fetchVoxelServiceLayer());case 7:a=r.data,this.read(a,{origin:"service",url:this.parsedUrl}),this.validateLayer(a);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchVoxelServiceLayer",value:function(){var e=Object(o.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.default)(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_ensureLoadBeforeSave",value:function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(e.t0="beforeSave"in this&&"function"==typeof this.beforeSave,!e.t0){e.next=6;break}return e.next=6,this.beforeSave();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){}},{key:"_updateTypeKeywords",value:function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);var a,o=t.getTypeKeywords(),i=Object(n.a)(o);try{for(i.s();!(a=i.n()).done;){var s=a.value;e.typeKeywords.push(s)}}catch(c){i.e(c)}finally{i.f()}e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,t,r){return r.indexOf(e)===t})),r===B.newItem&&(e.typeKeywords=e.typeKeywords.filter((function(e){return"Hosted Service"!==e}))))}},{key:"_saveAs",value:function(){var e=Object(o.a)(p.a.mark((function e(t,r){var n,o,i,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(a.a)(Object(a.a)({},$),r),o=T.default.from(t),e.t0=o,e.t0){e.next=7;break}return J.error("_saveAs(): requires a portal item parameter"),e.next=7,Promise.reject(new h.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"));case 7:return o.id&&((o=o.clone()).id=null),i=o.portal||P.a.getDefault(),e.next=11,this._ensureLoadBeforeSave();case 11:return o.type=H,o.portal=i,s={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},c={layers:[this.write({},s)]},e.next=16,Promise.all(s.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(c,s,n);case 18:return o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,n,B.newItem),e.next=23,i._signIn();case 23:return e.next=25,i.user.addItem({item:o,folder:n&&n.folder,data:c});case 25:return e.next=27,K(this.resourceReferences,s,null);case 27:return this.portalItem=o,Object(w.a)(s),s.portalItem=o,e.abrupt("return",o);case 31:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_save",value:function(){var e=Object(o.a)(p.a.mark((function e(t){var r,n,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(a.a)(Object(a.a)({},$),t),e.t0=this.portalItem,e.t0){e.next=6;break}return J.error("_save(): requires the .portalItem property to be set"),e.next=6,Promise.reject(new h.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"));case 6:if(e.t1=this.portalItem.type!==H,!e.t1){e.next=11;break}return J.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+H),e.next=11,Promise.reject(new h.a("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(H,'"')));case 11:return e.next=13,this._ensureLoadBeforeSave();case 13:return n={origin:"portal-item",url:this.portalItem.itemUrl&&Object(m.M)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||P.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},n)]},e.next=16,Promise.all(n.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(o,n,r);case 18:return this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,B.existingItem),e.next=23,this.portalItem.update({data:o});case 23:return e.next=25,K(this.resourceReferences,n,null);case 25:return Object(w.a)(n),e.abrupt("return",this.portalItem);case 27:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_validateAgainstJSONSchema",value:function(){var e=Object(o.a)(p.a.mark((function e(t,n,a){var o,i,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.messages.filter((function(e){return"error"===e.type})).map((function(e){return new h.a(e.name,e.message,e.details)})),a&&a.validationOptions.ignoreUnsupported&&(o=o.filter((function(e){return"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name}))),!a.validationOptions.enabled&&!Z){e.next=10;break}return e.next=4,r.e(189).then(r.bind(null,1353));case 4:if(!((i=e.sent.validate(t,a.portalItemLayerType)).length>0)){e.next=10;break}if(s="Layer item did not validate:\n".concat(i.join("\n")),J.error("_validateAgainstJSONSchema(): ".concat(s)),"throw"!==a.validationOptions.failPolicy){e.next=10;break}throw c=i.map((function(e){return new h.a("sceneservice:schema-validation",e)})).concat(o),new h.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:c});case 10:if(!(o.length>0)){e.next=12;break}throw new h.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o});case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),l}(e);return Object(d.a)([Object(O.b)(R.c)],t.prototype,"id",void 0),Object(d.a)([Object(O.b)({type:I.a})],t.prototype,"spatialReference",void 0),Object(d.a)([Object(x.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(d.a)([Object(O.b)({type:S.a})],t.prototype,"fullExtent",void 0),Object(d.a)([Object(x.a)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(d.a)([Object(O.b)({readOnly:!0,type:k.a})],t.prototype,"heightModelInfo",void 0),Object(d.a)([Object(O.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(d.a)([Object(O.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(d.a)([Object(O.b)({readOnly:!0})],t.prototype,"version",void 0),Object(d.a)([Object(x.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(d.a)([Object(O.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(d.a)([Object(O.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(d.a)([Object(O.b)({type:String})],t.prototype,"title",void 0),Object(d.a)([Object(x.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(d.a)([Object(x.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(d.a)([Object(O.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(d.a)([Object(O.b)(R.o)],t.prototype,"url",null),Object(d.a)([Object(g.a)("url")],t.prototype,"writeUrl",null),Object(d.a)([Object(O.b)()],t.prototype,"parsedUrl",null),Object(d.a)([Object(O.b)({readOnly:!0})],t.prototype,"store",void 0),Object(d.a)([Object(O.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(d.a)([Object(j.a)("esri.layers.mixins.SceneService")],t),t},D=-1e38,Z=!1;(z=B||(B={}))[z.existingItem=0]="existingItem",z[z.newItem=1]="newItem";var G,H="Scene Service",$={getTypeKeywords:function(){return[]},portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(G||(G={}))}}]);