(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-index~pages-client-tuan-detail~pages-client-tuan-index~pages-client-tuan-ss"],{"11d2":function(t,e,n){"use strict";n.r(e);var i=n("9b17"),o=n("9a4a"),a=n("52fd"),s=n("e0e4"),r=n("68f3");e["default"]={en:i,es:o,fr:a,"zh-Hans":s,"zh-Hant":r}},"1f1a":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[this._t("default",null,{options:this.options,data:this.dataList,pagination:this.paginationInternal,loading:this.loading,hasMore:this.hasMore,error:this.errorMessage})],2)},o=[]},"38f0":function(t,e,n){"use strict";n.r(e);var i=n("c347"),o=n("a7b5");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9159");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5028990b",null,!1,i["a"],void 0);e["default"]=r.exports},"4af1":function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2909")),a=i(n("53ca"));n("a9e3"),n("c975"),n("d3b7"),n("14d9"),n("a434"),n("ac1f"),n("e9c4"),n("b64b"),n("d9e2"),n("d401"),n("fb6a");var s=n("37dc"),r=i(n("11d2")),c=(0,s.initVueI18n)(r.default),u=c.t,l={load:"load",error:"error"},d={add:"add",replace:"replace"},h={auto:"auto",onready:"onready",manual:"manual"},f=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],p={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return f.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==h.manual){for(var i=!1,o=2;o<e.length;o++)if(e[o]!==n[o]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==h.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null,i=!1;"object"===(0,a.default)(t)?(t.clear&&(this.pageData===d.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===d.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,o=n.showToast,a=void 0===o||o,s=n.toastTitle,r=n.success,c=n.fail,l=n.complete,d=n.needConfirm,h=void 0===d||d,f=n.needLoading,p=void 0===f||f,g=n.loadingTitle,v=void 0===g?"":g;p&&uni.showLoading({title:v});var m=t.database(this.spaceInfo);i&&(m=m.action(i)),m.collection(this.getMainCollection()).add(e).then((function(t){r&&r(t),a&&uni.showToast({title:s||u("uniCloud.component.add.success")})})).catch((function(t){c&&c(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){p&&uni.hideLoading(),l&&l()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,o=n.success,a=n.fail,s=n.complete,r=n.confirmTitle,c=n.confirmContent,l=n.needConfirm,d=void 0===l||l,h=n.needLoading,f=void 0===h||h,p=n.loadingTitle,g=void 0===p?"":p;t&&t.length&&(d?uni.showModal({title:r||u("uniCloud.component.remove.showModal.title"),content:c||u("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,i,o,a,s,d,f,g)}}):this._execRemove(t,i,o,a,s,d,f,g))},update:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.action,a=i.showToast,s=void 0===a||a,r=i.toastTitle,c=i.success,l=i.fail,d=i.complete,h=i.needConfirm,f=void 0===h||h,p=i.needLoading,g=void 0===p||p,v=i.loadingTitle,m=void 0===v?"":v;g&&uni.showLoading({title:m});var y=t.database(this.spaceInfo);return o&&(y=y.action(o)),y.collection(this.getMainCollection()).doc(e).update(n).then((function(t){c&&c(t),s&&uni.showToast({title:r||u("uniCloud.component.update.success")})})).catch((function(t){l&&l(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),d&&d()}))},getMainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]},getTemp:function(){var e,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=t.database(this.spaceInfo);this.action&&(i=i.action(this.action)),i=(e=i).collection.apply(e,(0,o.default)(this.collectionArgs)),this.foreignKey&&(i=i.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(i=i.where(this.where)),this.field&&(i=i.field(this.field)),this.groupby&&(i=i.groupBy(this.groupby)),this.groupField&&(i=i.groupField(this.groupField)),!0===this.distinct&&(i=i.distinct()),this.orderby&&(i=i.orderBy(this.orderby));var a=this.paginationInternal,s=a.current,r=a.size,c={};this.getcount&&(c.getCount=this.getcount);var u={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(c.getTree=u),this.gettreepath&&(c.getTreePath=u),i=i.skip(r*(s-1)).limit(r),n?(i=i.getTemp(c),i.udb=this):i=i.get(c),i},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,a=t.count;this._isEnded=void 0!==a?this.paginationInternal.current*this.paginationInternal.size>=a:i.length<this.pageSize,this.hasMore=!this._isEnded;var s,r=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=a),e&&e(r,this._isEnded,this.paginationInternal),this._dispatchEvent(l.load,r),this.getone||this.pageData===d.replace)?this.dataList=r:n?this.dataList=r:(s=this.dataList).push.apply(s,(0,o.default)(r))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(l.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,i,o,a,s,r,c){var u=this;if(this.collection&&e){var l=Array.isArray(e)?e:[e];if(l.length){r&&uni.showLoading({mask:!0,title:c});var h=t.database(this.spaceInfo),f=h.command,p=h;n&&(p=p.action(n)),p.collection(this.getMainCollection()).where({_id:f.in(l)}).remove().then((function(t){i&&i(t.result),u.pageData===d.replace?u.refresh():u.removeData(l)})).catch((function(t){o&&o(t),s&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){r&&uni.hideLoading(),a&&a()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var o=e.indexOf(n[i]._id);o>=0&&(n.splice(i,1),e.splice(o,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=p}).call(this,n("a9ff")["default"])},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"61c9":function(t,e,n){var i=n("e228");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1c3bd14c",i,!0,{sourceMap:!1,shadowMode:!1})},6669:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={props:["banners"],data:function(){return{banners1:[]}}}},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"848e":function(t,e,n){"use strict";n.r(e);var i=n("4af1"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},9159:function(t,e,n){"use strict";var i=n("61c9"),o=n.n(i);o.a},"960d":function(t,e,n){"use strict";n.r(e);var i=n("1f1a"),o=n("848e");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},a7b5:function(t,e,n){"use strict";n.r(e);var i=n("6669"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c347:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-swiper",{staticClass:"home-swiper-banner",attrs:{"indicator-color":"rgba(255, 255, 255, 0.3)","indicator-active-color":"#FFFFFF","indicator-dots":!0,autoplay:!0,interval:3e3,duration:500}},this._l(this.banners,(function(t,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-navigator",{attrs:{url:t.link}},[e("v-uni-image",{staticStyle:{"border-radius":"16rpx"},attrs:{src:t.src}})],1)],1)})),1)],1)},o=[]},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},e228:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".home-swiper-banner[data-v-5028990b]{height:%?200?%;box-shadow:%?0?% %?4?% %?32?% %?0?% rgba(0,0,0,.04);border-radius:%?16?%;overflow:hidden}.home-swiper-banner uni-image[data-v-5028990b]{width:100%;height:%?200?%}",""]),t.exports=e}}]);