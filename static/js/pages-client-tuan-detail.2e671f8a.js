(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-tuan-detail"],{"026f":function(t,i,e){var a=e("7a97");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0278dbc2",a,!0,{sourceMap:!1,shadowMode:!1})},"0399":function(t,i,e){"use strict";var a=e("fc87"),n=e.n(a);n.a},"06bd":function(t,i,e){"use strict";e.r(i);var a=e("9df0"),n=e("22e5");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("0399");var s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"03663a40",null,!1,a["a"],void 0);i["default"]=c.exports},"0e00":function(t,i,e){"use strict";e.r(i);var a=e("f7fe"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"10c0":function(t,i,e){"use strict";e.r(i);var a=e("c3c5"),n=e("bceb");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("23f0");var s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4a5f8a4b",null,!1,a["a"],void 0);i["default"]=c.exports},"22e5":function(t,i,e){"use strict";e.r(i);var a=e("ba34"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"23f0":function(t,i,e){"use strict";var a=e("a19a"),n=e.n(a);n.a},"2fa0":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{},data:function(){return{show:!1}},created:function(){this.show=!0},methods:{getAct:function(){this.$emit("loginAct")},closed:function(){var t=this;this.show=!1,setTimeout((function(){t.$emit("closed",!0)}),400)}}};i.default=a},"3c53":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={homeBanner:e("38f0").default,unicloudDb:e("960d").default,homeDefault:e("06bd").default,dialogLogin:e("64fd").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"tuan-detail-header"},[e("v-uni-swiper",{staticClass:"tuan-detail-swiper",attrs:{"indicator-dots":!0,"indicator-color":"rgba(255,255,255,.3)","indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:400}},[e("v-uni-swiper-item",[e("v-uni-video",{staticStyle:{width:"100%"},attrs:{id:"myVideo",poster:t.info.img,src:t.info.videourl},on:{timeupdate:function(i){arguments[0]=i=t.$handleEvent(i),t.timeupdate.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"tuan-detail-tit pd20_15"},[e("v-uni-view",{staticClass:"ft18 cl-main ftw600"},[t._v(t._s(t.info.name))]),e("v-uni-view",{staticClass:"flex alcenter space mt12"},[e("v-uni-view",{staticClass:"flex alcenter"},[e("v-uni-text",{staticClass:"ft14 cl-orange"},[t._v("会员价：")]),e("v-uni-text",{staticClass:"ft16 cl-orange ftw600"},[t._v("¥"+t._s(t.info.vipprice))]),e("v-uni-text",{staticClass:"ml10 ft12 cl-notice"},[t._v("普通价：")]),e("v-uni-text",{staticClass:"ft12 cl-notice text-line"},[t._v("¥"+t._s(t.info.price))])],1),e("v-uni-view",{staticClass:"cl-notice ft12"},[t._v(t._s(t.info.updatetime))])],1)],1),e("v-uni-view",{staticClass:"mt24",staticStyle:{margin:"30upx 30upx 0 30upx","box-shadow":"0px 4px 20px 0px rgba(0,0,0,0.04)"}},[e("home-banner",{attrs:{banners:t.banners}})],1),e("unicloud-db",{attrs:{collection:"videoListTable",where:"ishot==2"},scopedSlots:t._u([{key:"default",fn:function(t){var i=t.data;t.loading,t.error,t.options;return[e("home-default",{attrs:{datasa:i}})]}}])}),t.showLogin?e("dialog-login",{on:{loginYes:function(i){arguments[0]=i=t.$handleEvent(i),t.loginYes.apply(void 0,arguments)},closed:function(i){arguments[0]=i=t.$handleEvent(i),t.showLogin=!1}}}):t._e()],1)},o=[]},6081:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".couponshareget-modal-middle[data-v-4a5f8a4b]{width:100%;height:100vh;position:fixed;z-index:200;left:0;top:0}.couponshareget-modal-middle .bg[data-v-4a5f8a4b]{position:fixed;width:100%;height:100vh;background:rgba(0,0,0,.5);z-index:201;left:0;top:0}.couponshareget-modal-middle-main[data-v-4a5f8a4b]{width:%?630?%;background:#fd4e4a;border-radius:%?32?%;position:fixed;top:50%;left:calc(50% - %?315?%);-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:202;overflow:hidden}.couponshareget-modal-middle-main .middle-main[data-v-4a5f8a4b]{position:relative;height:%?576?%;width:100%}.couponshareget-modal-middle-main .middle-closed[data-v-4a5f8a4b]{position:absolute;width:%?80?%;height:%?80?%;right:%?0?%;top:%?0?%;text-align:center;line-height:%?80?%;text-align:center;background:rgba(0,0,0,.5);color:#fff;border-radius:%?0?% %?0?% %?0?% %?32?%}.couponshareget-modal-middle-main .footer-bg[data-v-4a5f8a4b]{width:100%;height:%?160?%;position:absolute;left:0;bottom:0}.couponshareget-modal-middle-main .footer-act-main[data-v-4a5f8a4b]{width:100%;height:%?160?%;position:absolute;left:0;bottom:0;display:flex;justify-content:center;align-items:center}.couponshareget-modal-middle-main .footer-act-main .share-btn[data-v-4a5f8a4b]{width:%?330?%;height:%?80?%;background:linear-gradient(180deg,#fff6d6,#ffe388);box-shadow:%?0?% %?8?% %?24?% %?0?% rgba(0,0,0,.08);border-radius:%?40?%;color:#f14844;font-size:%?32?%;font-weight:500;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.couponshareget-modal-middle-main .coupon-share-get-face[data-v-4a5f8a4b]{width:%?48?%;height:%?48?%;border-radius:%?24?%}",""]),t.exports=i},"7a97":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".user-not-vip[data-v-584e6273]{width:100%;height:%?80?%;background:#fdf6ec;border-radius:%?40?%;border:%?2?% solid #efc381;text-align:center;line-height:%?76?%;font-size:%?24?%;color:#000;font-weight:700}.tuan-detail-header[data-v-584e6273]{position:relative}.tuan-detail-swiper[data-v-584e6273]{height:%?500?%}.tuan-detail-swiper uni-image[data-v-584e6273]{width:100%;height:%?500?%;background:#f2f2f2}.tuan-detail-tit[data-v-584e6273]{width:100%;background:#fff;border-radius:%?40?% %?40?% %?0?% %?0?%;position:relative;margin-top:%?-32?%}.tuan-detail-content-tab[data-v-584e6273]{height:%?102?%}.tuan-detail-content[data-v-584e6273]{min-height:calc(100vh - %?600?%);background:#fff}.tuan-product-l[data-v-584e6273]{width:%?320?%;height:%?240?%;border-radius:%?16?%;background:#f2f2f2}.tuan-product-r[data-v-584e6273]{width:calc(100% - %?320?%)}",""]),t.exports=i},"87c7":function(t,i,e){"use strict";e.r(i);var a=e("3c53"),n=e("0e00");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("e8c3");var s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"584e6273",null,!1,a["a"],void 0);i["default"]=c.exports},"9df0":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={comCopyright:e("6a84").default,dialogBirthday:e("8b11").default,dialogLogin:e("64fd").default,dialogQrcode:e("1f97").default,dialogCouponshareget:e("10c0").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"pd16_15",staticStyle:{"margin-bottom":"80upx"}},[t._l(t.datasa,(function(i,a){return[e("v-uni-navigator",{key:a+"_0",attrs:{url:"/pages/client/tuan/detail?id="+i.id}},[e("v-uni-view",{staticClass:"box pd16_15 flex alcenter mb16"},[e("v-uni-image",{staticClass:"tuan-product-l",attrs:{mode:"aspectFill",src:i.img}}),e("v-uni-view",{staticClass:"tuan-product-r pl15"},[e("v-uni-view",{staticClass:"ft14 ftw600 cl-main text-over2"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"mt16"},[e("v-uni-text",{staticClass:"ft12 cl-orange"},[t._v("会员价")]),e("v-uni-text",{staticClass:"ft12 cl-orange"},[t._v("¥")]),e("v-uni-text",{staticClass:"ft16 cl-orange ftw600"},[t._v(t._s(i.vipprice))]),e("v-uni-text",{staticClass:"ml15 ft12 cl-notice text-line"},[t._v("¥"+t._s(i.price))])],1),e("v-uni-view",{staticClass:"mt16 flex space alcenter"},[e("v-uni-view",{staticClass:"ft12 cl-notice"},[t._v(t._s(i.updatetime))]),e("v-uni-view",{staticClass:"btn-mini",style:t.getBtnStyle},[t._v("播放")])],1)],1)],1)],1)]}))],2),e("v-uni-view",{staticClass:"home-main"},[e("com-copyright")],1),t.showBirthday?e("dialog-birthday",{on:{closed:function(i){arguments[0]=i=t.$handleEvent(i),t.showBirthday=!1}}}):t._e(),t.showLogin?e("dialog-login",{on:{loginYes:function(i){arguments[0]=i=t.$handleEvent(i),t.loginYes.apply(void 0,arguments)},closed:function(i){arguments[0]=i=t.$handleEvent(i),t.showLogin=!1}}}):t._e(),t.showQrcode?e("dialog-qrcode",{on:{closed:function(i){arguments[0]=i=t.$handleEvent(i),t.showQrcode=!1}}}):t._e(),t.showCouponShareGet?e("dialog-couponshareget",{on:{loginAct:function(i){arguments[0]=i=t.$handleEvent(i),t.showLoginCouponShareGet.apply(void 0,arguments)},closed:function(i){arguments[0]=i=t.$handleEvent(i),t.showCouponShareGet=!1}}}):t._e()],1)},o=[]},a19a:function(t,i,e){var a=e("6081");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("821d53e4",a,!0,{sourceMap:!1,shadowMode:!1})},ba34:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={props:["datasa"],data:function(){return{isLogin:!1,showBirthday:!1,showLogin:!1,showQrcode:!1,showCouponShareGet:!1}},created:function(){},methods:{showLoginAct:function(){this.showLogin=!0},showLoginCouponShareGet:function(){this.showLogin=!0},loginYes:function(){}}}},bceb:function(t,i,e){"use strict";e.r(i);var a=e("2fa0"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},c176:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".home-header[data-v-03663a40]{height:%?304?%;width:100%;position:relative;background:#363b4d;border-radius:%?0?% %?0?% %?48?% %?48?%}.home-main[data-v-03663a40]{width:100%;position:relative;margin-top:%?-156?%;padding:0 %?30?%}.home-mendian[data-v-03663a40]{width:100%;height:%?84?%;background:hsla(0,0%,100%,.1);border-radius:%?42?%}.tuan-product-l[data-v-03663a40]{width:%?320?%;height:%?240?%;border-radius:%?16?%;background:#f2f2f2}.tuan-product-r[data-v-03663a40]{width:calc(100% - %?320?%)}",""]),t.exports=i},c3c5:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"couponshareget-modal-middle"},[e("v-uni-view",{staticClass:"bg"}),e("v-uni-view",{staticClass:"couponshareget-modal-middle-main",class:t.show?"animated fast zoomInUp":"animated fast  zoomOutDown"},[e("v-uni-view",{staticClass:"middle-main"},[e("v-uni-view",{staticClass:"middle-closed",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closed.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont  iconbtn_close  ft20"})],1),e("v-uni-view",{staticClass:"pd20_15"},[e("v-uni-view",{staticClass:"flex alcenter"},[e("v-uni-image",{staticClass:"coupon-share-get-face",attrs:{src:t.statics.defaultFace}}),e("v-uni-text",{staticClass:"ml10 ft14 cl-w"},[t._v("张华邀请您")])],1),e("v-uni-view",{staticClass:"ft16 ftw500 cl-yellow mt8"},[t._v("一起领取优惠券")])],1),e("v-uni-view",{staticClass:"text-center"},[e("v-uni-image",{staticStyle:{width:"240rpx",height:"240rpx"},attrs:{src:t.statics.couponAlert[1]}})],1),e("v-uni-image",{staticClass:"footer-bg",attrs:{src:t.statics.couponAlert[2]}}),e("v-uni-view",{staticClass:"footer-act-main"},[e("v-uni-button",{staticClass:"share-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getAct.apply(void 0,arguments)}}},[t._v("立即领取")])],1)],1)],1)],1)},n=[]},e8c3:function(t,i,e){"use strict";var a=e("026f"),n=e.n(a);n.a},f7fe:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{isLogin:!1,showLogin:!1,selectIndex:0,tabs:["详情"],nextStep:"",datasa:[],dataconfig:[],id:"",info:[],dda:"",price:"",banners:[],isplaytext:"已经购买"}},onLoad:function(t){this.dda=uni.createVideoContext("myVideo"),t.id&&(this.id=t.id)},onShow:function(){this.getinfo(this.id),uni.getStorageSync("userinfo")._id&&(this.isLogin=!0,this.showLogin=!1),this.banners=uni.getStorageSync("config").banner},onHide:function(){this.dda.pause()},onShareAppMessage:function(t){},onShareTimeline:function(t){},methods:{timeupdate:function(t){var i=t.detail.currentTime;i>this.info.mrseek&&0==this.info.isplay&&(this.dda.seek(this.info.mrseek),this.dda.pause(),this.dda.stop(),uni.showModal({title:"温馨提示",content:"没权限观看当前视频",showCancel:!1,confirmText:"确定",success:function(t){t.confirm||t.cancel}}))},getinfo:function(t){var i=this,e={};e.id=t,uni.getStorageSync("userinfo").token&&(e.token=uni.getStorageSync("userinfo").token,this.isLogin=!0),uni.request({url:this.configs.webUrl+"/http/video/info",data:e,success:function(t){uni.getStorageSync("userinfo")._id?(console.log(t.data),t.data.isvip>1?i.price=t.data.vipprice:i.price=t.data.price):i.price=t.data.price,t.data.pricebuy=i.price,i.info=t.data,t.data.isvip>1?1*t.data.vipprice==0&&(i.isplaytext="VIP免费"):1*t.data.price==0&&(i.isplaytext="免费视频")},fail:function(t,i){}})},contactAct:function(){0==this.isLogin?(this.showLogin=!0,this.nextStep="contact"):uni.navigateTo({url:"/pages/client/vipcard/adviser"})},vipcard:function(){uni.navigateTo({url:"/pages/client/vipcard/index"})},buyAct:function(){if(1*this.price==0)return uni.showToast({title:"免费视频不需要购买",icon:"none"}),!1;0==this.isLogin?(this.showLogin=!0,this.nextStep="buy"):(uni.setStorage({key:"buydata",data:this.info}),uni.navigateTo({url:"/pages/client/tuan/buy?id="+this.id}))},loginYes:function(){"buy"==this.nextStep?uni.navigateTo({url:"/pages/client/tuan/buy"}):uni.navigateTo({url:"/pages/client/vipcard/adviser"})},changeIndex:function(t){this.selectIndex=t}}};i.default=a},fc87:function(t,i,e){var a=e("c176");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("599fed6c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);