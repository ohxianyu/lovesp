(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-member-address"],{"17ab":function(t,e,n){"use strict";n.r(e);var a=n("7273"),i=n("2f38");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var d=n("f0c5"),r=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,"5d4aa603",null,!1,a["a"],void 0);e["default"]=r.exports},"2f38":function(t,e,n){"use strict";n.r(e);var a=n("5996"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},5996:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e");var a={data:function(){return{addrs:[{address_id:1,name:"张华",mobile:"13515608638",address:"合肥市包河区万达临湖苑A区16栋1602室",is_default:1},{address_id:2,name:"张华",mobile:"13515608638",address:"合肥市包河区万达临湖苑A区16栋1602室",is_default:0}]}},onLoad:function(){},methods:{changeDefaultAddr:function(t){var e=parseInt(t.detail.value);for(var n in this.addrs)this.addrs[n].is_default=this.addrs[n].address_id==e?1:0}}};e.default=a},7273:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pd16_15"},[n("v-uni-navigator",{attrs:{url:"/pages/client/member/addressform"}},[n("v-uni-view",{staticClass:"box noshadow pd10_15 flex alcenter center",style:{color:t.tempColor}},[n("v-uni-text",{staticClass:"iconfont iconbtn_add_liner ft20 mr5"}),n("v-uni-text",{staticClass:"ft16 ftw600"},[t._v("新增地址")])],1)],1),n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDefaultAddr.apply(void 0,arguments)}}},t._l(t.addrs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"box noshadow pd16_15 mt16"},[n("v-uni-view",{staticClass:"ft14 cl-main ftw600"},[t._v(t._s(e.name)+"  "+t._s(e.mobile))]),n("v-uni-view",{staticClass:"mt8 ft12 cl-notice"},[t._v(t._s(e.address))]),n("v-uni-view",{staticClass:"bd-line mt20 mb16"}),n("v-uni-view",{staticClass:"flex alcenter space"},[n("v-uni-view",{staticClass:"flex alcenter"},[n("v-uni-radio",{attrs:{value:e.address_id,checked:1==e.is_default,color:t.tempColor}}),n("v-uni-text",{staticClass:"ml10 ft14 cl-info2"},[t._v("默认地址")])],1),n("v-uni-view",{staticClass:"flex alcenter"},[n("v-uni-text",{staticClass:"iconfont iconbtn_delete mr60 ft20 cl-info2"}),n("v-uni-text",{staticClass:"iconfont iconbtn_edit ft20 cl-info2"})],1)],1)],1)})),1)],1)},i=[]}}]);