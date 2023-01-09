(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[92],{1033:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return K}));var a=r(155),i=r(5),n=r(142),o=r(143),s=r(144),c=r(145),l=r(154),u=r.n(l),b=r(148),y=r(186),p=r(364),f=r(159),h=r(215),O=r(541),d=r(146),m=r(272),v=r(162),j=r(151),g=(r(152),r(147),r(150)),S=r(189),x=r(149),k=r(192),w=r(361),I=r(176),L=r(589),E=r(286),P=r(479),N=r(1034),D=r(444),J=r(336),F=r(480),T=r(304),M=r(306),R=r(398),U=r(307),V=r(1035),q=r(494),A=r(259),_=r(867),C=r(881),z=r(590),G=r(826),H=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return Object(o.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(i.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=Object(d.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(v.o).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}},{key:"writeSublayers",value:function(e,t,r,a){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var s=Object(w.e)(a.origin);if(s===w.a.PORTAL_ITEM){var c=this.createSublayersForOrigin("service").sublayers;o=Object(z.c)(n,c,w.a.SERVICE)}else if(s>w.a.PORTAL_ITEM){var l=this.createSublayersForOrigin("portal-item");o=Object(z.c)(n,l.sublayers,Object(w.e)(l.origin))}}var u=[],b=Object(i.a)({writeSublayerStructure:o},a),y=o;n.forEach((function(e){var t=e.write({},b);u.push(t),y=y||"user"===e.originOf("visible")})),u.some((function(e){return Object.keys(e).length>1}))&&(t.layers=u),y&&(t.visibleLayers=n.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,t,r,a){var n=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new _.a({layer:this,floors:null===a||void 0===a?void 0:a.floors,scale:Object(L.b)({extent:e,width:t})*n}),s=o.toJSON();o.destroy();var c=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,u=l.wkid||JSON.stringify(l.toJSON());s.dpi*=n;var b={};if(null!==a&&void 0!==a&&a.timeExtent){var y=a.timeExtent.toJSON(),p=y.start,f=y.end;b.time=p&&f&&p===f?""+p:"".concat(null==p?"null":p,",").concat(null==f?"null":f)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(b.time="null,null");return Object(i.a)(Object(i.a)(Object(i.a)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:t+","+r},s),c),b)}},{key:"fetchImage",value:function(){var e=Object(a.a)(u.a.mark((function e(t,r,a,n){var o,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={responseType:"image",signal:null!==(o=null===n||void 0===n?void 0:n.signal)&&void 0!==o?o:null,query:Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},this.parsedUrl.query),this.createExportImageParameters(t,r,a,n)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},c=this.parsedUrl.path+"/export",null==s.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}throw new f.a("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:s.query});case 3:return e.abrupt("return",Object(y.default)(c,s).then((function(e){return e.data})).catch((function(e){if(Object(v.j)(e))throw e;throw new f.a("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:e})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,a,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=Object(a.a)(u.a.mark((function e(){var t,r,a,n,o,s,c,l,b=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.length>0&&void 0!==b[0]?b[0]:{},r=Object(i.a)(Object(i.a)({},t),{},{query:Object(i.a)(Object(i.a)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,Object(y.default)(this.url,r);case 4:return a=e.sent,n=a.data,o=n.extent,s=n.fullExtent,c=n.timeExtent,l=o||s,e.abrupt("return",{fullExtent:l&&I.a.fromJSON(l),timeExtent:c&&p.a.fromJSON({start:c[0],end:c[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return Object(O.a)(this,(function(t){t(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return Object(G.a)(this,e)}},{key:"_fetchService",value:function(){var e=Object(a.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,Object(y.default)(this.parsedUrl.path,{query:Object(i.a)(Object(i.a)(Object(i.a)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:t});case 4:r=e.sent,a=r.data,r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(J.a)(Object(q.a)(Object(U.a)(Object(V.a)(Object(N.a)(Object(D.a)(Object(T.a)(Object(M.a)(Object(m.a)(Object(R.a)(Object(P.a)(Object(F.a)(Object(h.b)(E.a))))))))))))));Object(b.a)([Object(j.b)({type:Boolean})],H.prototype,"datesInUnknownTimezone",void 0),Object(b.a)([Object(j.b)()],H.prototype,"dpi",void 0),Object(b.a)([Object(j.b)()],H.prototype,"gdbVersion",void 0),Object(b.a)([Object(j.b)()],H.prototype,"imageFormat",void 0),Object(b.a)([Object(S.a)("imageFormat",["supportedImageFormatTypes"])],H.prototype,"readImageFormat",null),Object(b.a)([Object(j.b)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],H.prototype,"imageMaxHeight",void 0),Object(b.a)([Object(j.b)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],H.prototype,"imageMaxWidth",void 0),Object(b.a)([Object(j.b)()],H.prototype,"imageTransparency",void 0),Object(b.a)([Object(j.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],H.prototype,"isReference",void 0),Object(b.a)([Object(j.b)({json:{read:!1,write:!1}})],H.prototype,"labelsVisible",void 0),Object(b.a)([Object(j.b)({type:["ArcGISMapServiceLayer"]})],H.prototype,"operationalLayerType",void 0),Object(b.a)([Object(j.b)({json:{read:!1,write:!1}})],H.prototype,"popupEnabled",void 0),Object(b.a)([Object(j.b)()],H.prototype,"sourceJSON",void 0),Object(b.a)([Object(j.b)({json:{write:{ignoreOrigin:!0}}})],H.prototype,"sublayers",void 0),Object(b.a)([Object(k.a)("sublayers",{layers:{type:[C.a]},visibleLayers:{type:[g.a]}})],H.prototype,"writeSublayers",null),Object(b.a)([Object(j.b)({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),Object(b.a)([Object(j.b)({json:{read:!1},readOnly:!0,value:"map-image"})],H.prototype,"type",void 0),Object(b.a)([Object(j.b)(A.o)],H.prototype,"url",void 0);var K=H=Object(b.a)([Object(x.a)("esri.layers.MapImageLayer")],H)},431:function(e,t,r){"use strict";function a(e){var t,r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?n(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(null===e||void 0===e||!e.length)return null;var r=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}))},589:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var a=r(250);function i(e,t){var r=t||e.extent,i=e.width,n=Object(a.c)(r&&r.spatialReference);return r&&i?r.width/i*n*a.g*96:0}function n(e,t){return e/(Object(a.c)(t)*a.g*96)}},867:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var a=r(5),i=r(142),n=r(143),o=r(144),s=r(145),c=r(148),l=r(181),u=r(215),b=r(146),y=r(385),p=r(151),f=(r(152),r(147),r(150),r(149)),h=r(259),O=r(431),d=r(590),m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},v=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).floors=null,a.scale=0,a}return Object(n.a)(r,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var t=this.visibleSublayers.map((function(t){var r=Object(O.b)(e.floors,t);return t.toExportImageJSON(r)}));return t.length?JSON.stringify(t):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&Object(d.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}},{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(m[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,t=this,r=!(null===(e=this.floors)||void 0===e||!e.length),a=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return a.length?JSON.stringify(a.reduce((function(e,r){var a=Object(O.b)(t.floors,r),i=Object(y.b)(a,r.definitionExpression);return Object(b.k)(i)&&(e[r.id]=i),e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,t=[];if(!this.layer)return t;var r=this.layer.sublayers;r&&r.forEach((function r(a){var i=e.scale,n=0===i,o=0===a.minScale||i<=a.minScale,s=0===a.maxScale||i>=a.maxScale;a.visible&&(n||o&&s)&&(a.sublayers?a.sublayers.forEach(r):t.unshift(a))}));var a=this._get("visibleSublayers");return!a||a.length!==t.length||a.some((function(e,r){return t[r]!==e}))?t:a}},{key:"toJSON",value:function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=Object(a.a)(Object(a.a)({},t),{},{layers:this.layers,layerDefs:this.layerDefs}),t}}]),r}(Object(u.b)(l.a));Object(c.a)([Object(p.b)({readOnly:!0})],v.prototype,"dynamicLayers",null),Object(c.a)([Object(p.b)()],v.prototype,"floors",void 0),Object(c.a)([Object(p.b)({readOnly:!0})],v.prototype,"hasDynamicLayers",null),Object(c.a)([Object(p.b)()],v.prototype,"layer",null),Object(c.a)([Object(p.b)({readOnly:!0})],v.prototype,"layers",null),Object(c.a)([Object(p.b)({readOnly:!0})],v.prototype,"layerDefs",null),Object(c.a)([Object(p.b)({type:Number})],v.prototype,"scale",void 0),Object(c.a)([Object(p.b)(h.a)],v.prototype,"timeExtent",void 0),Object(c.a)([Object(p.b)({readOnly:!0})],v.prototype,"version",null),Object(c.a)([Object(p.b)({readOnly:!0})],v.prototype,"visibleSublayers",null),v=Object(c.a)([Object(f.a)("esri.layers.mixins.ExportImageParameters")],v)}}]);