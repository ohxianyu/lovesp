(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-mytuandui"],{"01d1":function(t,a,n){"use strict";n.r(a);var i=n("7180"),e=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},"07db":function(t,a,n){var i=n("ff57");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("10799207",i,!0,{sourceMap:!1,shadowMode:!1})},"3a59":function(t,a,n){"use strict";var i=n("07db"),e=n.n(i);e.a},7180:function(t,a,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("c7eb")),s=i(n("1da1")),u={data:function(){return{data:[],iskq:0}},onLoad:function(){this.ongrzlTap(),uni.getStorageSync("config").iskq&&(this.iskq=uni.getStorageSync("config").iskq)},methods:{ongrzlTap:function(){var t=this;return(0,s.default)((0,e.default)().mark((function a(){var n;return(0,e.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:n={},n.token=uni.getStorageSync("userinfo").token,uni.request({url:t.configs.webUrl+"/api/user/mytuandui",data:n,success:function(a){1==a.data.code?t.data=a.data.data:uni.showToast({title:a.data.msg,icon:"none"})},fail:function(t,a){}});case 3:case"end":return a.stop()}}),a)})))()}}};a.default=u},"87c5":function(t,a,n){"use strict";n.r(a);var i=n("aad5"),e=n("01d1");for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("3a59");var u=n("f0c5"),c=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"f71cfca4",null,!1,i["a"],void 0);a["default"]=c.exports},aad5:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"pd16_15"},[1==t.iskq?n("v-uni-view",{staticClass:"box noshadow pd16_15"},[n("v-uni-view",{staticClass:"ft16 ftw600 cl-main"},[t._v("直接团队")]),n("v-uni-view",{staticClass:"bd-line mt16"}),n("v-uni-view",{staticClass:"flex wrap mt24"},[t._l(t.data,(function(a,i){return[n("v-uni-view",{key:i+"_0",staticClass:"col5"},[n("v-uni-view",{staticClass:"text-center"},[n("v-uni-image",{staticClass:"miniapp-icon",attrs:{src:a.avatar?a.avatar:a.url}})],1),n("v-uni-view",{staticClass:"text-center ft12 cl-info2 mt8"},[t._v(t._s(a.id))])],1)]}))],2)],1):n("v-uni-view",{staticClass:"box noshadow pd16_15"},[n("v-uni-view",{staticClass:"ft16 ftw600 cl-main"},[t._v("系统后台没有开通分销")])],1)],1)},e=[]},ff57:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".miniapp-icon[data-v-f71cfca4]{width:%?80?%;height:%?80?%;border-radius:%?40?%;background:#f2f2f2}.col5[data-v-f71cfca4]{margin-bottom:20px}",""]),t.exports=a}}]);