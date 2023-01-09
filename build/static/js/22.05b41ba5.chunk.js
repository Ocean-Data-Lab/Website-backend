(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[22,190],{1015:function(e,r,a){"use strict";a.r(r),a.d(r,"fromItem",(function(){return L})),a.d(r,"selectLayerClassPath",(function(){return f}));var t=a(155),n=a(5),c=a(154),u=a.n(c),i=a(159),y=a(580),s=a(434),o=a(839),l=a(622),p=a(840);function L(e){return!e.portalItem||e.portalItem instanceof s.default||(e=Object(n.a)(Object(n.a)({},e),{},{portalItem:new s.default(e.portalItem)})),function(e){return e.load().then(f).then(d)}(e.portalItem).then((function(r){var a=Object(n.a)({portalItem:e.portalItem},r.properties);return new(0,r.constructor)(a)}))}function f(e){switch(e.type){case"Map Service":return function(e){return Object(p.a)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return b(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return S.apply(this,arguments)}(e);case"Scene Service":return function(e){return b(e).then((function(r){if("object"==typeof r){var a,t={};if(null!=r.id?(t.layerId=r.id,a="".concat(e.url,"/layers/").concat(r.id)):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},c=0,u=Object.keys(n);c<u.length;c++){var i=u[c];if(e.typeKeywords.includes(i))return{className:n[i]}}return Object(p.a)(a).then((function(e){var r="SceneLayer",a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return!1===r?Object(p.a)(e.url).then((function(e){return"Voxel"===(null===e||void 0===e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}})):{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return m.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new i.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,y.a[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function S(){return(S=Object(t.a)(u.a.mark((function e(r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!Object(l.d)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!Object(l.d)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return a=e.sent,e.abrupt("return",1===Object(o.getNumLayersAndTables)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(t.a)(u.a.mark((function e(r){var a,t,n,c,i,y,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(i=null!==(a=null===(t=r.typeKeywords)||void 0===t?void 0:t.map((function(e){return e.toLowerCase()})))&&void 0!==a?a:[],!i.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!i.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=13;break}e.t0=void 0===n;case 13:if(!e.t0){e.next=17;break}e.t2=void 0,e.next=18;break;case 17:e.t2=n.layerType;case 18:if("ArcGISTiledImageServiceLayer"!==(y=e.t2)){e.next=21;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 21:if("ArcGISImageServiceLayer"!==y){e.next=23;break}return e.abrupt("return",{className:"ImageryLayer"});case 23:return e.next=25,Object(p.a)(r.url);case 25:if(e.t4=c=e.sent.cacheType,e.t3=null===e.t4,e.t3){e.next=29;break}e.t3=void 0===c;case 29:if(!e.t3){e.next=33;break}e.t5=void 0,e.next=34;break;case 33:e.t5=c.toLowerCase();case 34:return s=e.t5,e.abrupt("return","map"===s?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=Object(t.a)(u.a.mark((function r(a){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=v,r.next=4,Object(o.preprocessFSItemData)(a,e.url);case 4:return r.t1=a=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",Object(o.getNumLayersAndTables)(a)>0?v(a):Object(p.a)(e.url).then(v));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function v(e){return 1===Object(o.getNumLayersAndTables)(e)&&{id:Object(o.getFirstLayerOrTableId)(e)}}},1230:function(e,r,a){"use strict";a.r(r),a.d(r,"populateOperationalLayers",(function(){return m}));var t=a(5),n=a(60),c=a(155),u=a(154),i=a.n(u),y=a(194),s=(a(147),a(162)),o=a(580),l=a(434);function p(e){return f(e,"notes")}function L(e){return f(e,"route")}function f(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var d=a(1015),S=a(621);function m(e,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(i.a.mark((function e(r,a,t){var c,u,y,o,l,p,L,f,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:c=[],u=Object(n.a)(a);try{for(u.s();!(y=u.n()).done;)o=y.value,l=x(o,t),"GroupLayer"===o.layerType?c.push(W(l,o,t)):c.push(l)}catch(i){u.e(i)}finally{u.f()}return e.next=7,Object(s.g)(c);case 7:p=e.sent,L=Object(n.a)(p);try{for(L.s();!(f=L.n()).done;)!(d=f.value).value||t.filter&&!t.filter(d.value)||r.add(d.value)}catch(i){L.e(i)}finally{L.f()}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},I={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},g={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},T={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},h={ArcGISFeatureLayer:"FeatureLayer"},M={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function x(e,r){return G.apply(this,arguments)}function G(){return(G=Object(c.a)(i.a.mark((function e(r,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,A(r,a);case 3:return e.t1=e.sent,e.t2=r,e.t3=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,r,a){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(i.a.mark((function e(r,a,t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=new r).read(a,t.context),e.t0="group"===n.type&&j(a),!e.t0){e.next=6;break}return e.next=6,V(n,a,t.context);case 6:return e.next=8,Object(S.a)(n,t.context);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,r){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(i.a.mark((function e(r,a){var t,n,c,u,y,s,f,S;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.context,n=F(t),!(c=r.layerType||r.type)&&a&&a.defaultLayerType&&(c=a.defaultLayerType),u=n[c],y=u?o.a[u]:o.a.UnknownLayer,!N(r)){e.next=20;break}if(s=null===t||void 0===t?void 0:t.portal,!r.itemId){e.next=18;break}return f=new l.default({id:r.itemId,portal:s}),e.next=11,f.load();case 11:return e.next=13,Object(d.selectLayerClassPath)(f);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:S=e.t0,y=o.a[S];case 18:e.next=21;break;case 20:"ArcGISFeatureLayer"===c?p(r)?y=o.a.MapNotesLayer:L(r)?y=o.a.RouteLayer:j(r)&&(y=o.a.GroupLayer):r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?y=o.a.WMTSLayer:"WFS"===c&&"2.0.0"!==r.wfsInfo.version&&(y=o.a.UnsupportedLayer);case 21:return e.abrupt("return",y());case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){var r,a,t;return"ArcGISFeatureLayer"===e.layerType&&!N(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(t=a.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)>1}function N(e){return"Feature Collection"===e.type}function F(e){var r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=g;break;case"ground":r=I;break;default:r=v}else switch(e.layerContainerType){case"basemap":r=M;break;case"tables":r=h;break;default:r=T}return r}function W(e,r,a){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(i.a.mark((function e(r,a,t){var n,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new y.a,c=m(n,Array.isArray(a.layers)?a.layers:[],t),e.next=4,r;case 4:return u=e.sent,e.next=7,c;case 7:if("group"!==u.type){e.next=9;break}return e.abrupt("return",(u.layers.addMany(n),u));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,r,a){return B.apply(this,arguments)}function B(){return(B=Object(c.a)(i.a.mark((function e(r,a,n){var c,u,y,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.a.FeatureLayer,e.next=3,c();case 3:u=e.sent,y=a.featureCollection,s=y.showLegend,l=y.layers.map((function(e,c){var i,y,o=new u;o.read(e,n);var l=Object(t.a)(Object(t.a)({},n),{},{ignoreDefaults:!0});return o.read({id:"".concat(r.id,"-sublayer-").concat(c),visibility:null===(i=null===(y=a.visibleLayers)||void 0===y?void 0:y.includes(c))||void 0===i||i},l),null!=s&&o.read({showLegend:s},l),o})),r.layers.addMany(l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);