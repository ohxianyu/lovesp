(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-order-integraltuan"],{"080a":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e25e"),a("ac1f"),a("00b4");var i={getDistance:function(t,e,a,i){var s=Math.PI/180,n=t*s,o=a*s,c=n-o,l=e*s-i*s,r=2*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(n)*Math.cos(o)*Math.pow(Math.sin(l/2),2)));return r*=6378.137,r=Math.round(1e4*r)/1e4,r=r.toFixed(2),r},getRectangle:function(t,e,a){var i=2*Math.PI*6378137/360,s=1/i,n=s*a,o=t-n,c=t+n,l=i*Math.cos(t*(3.141592653/180)),r=1/l,u=r*a,v=e-u,f=e+u;return{minLat:o,maxLat:c,minLng:v,maxLng:f}},djsFull:function(t){var e=Math.floor(t/86400),a=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),s=Math.floor(t%60);return{d:this.addzero(e),h:this.addzero(a),m:this.addzero(i),s:this.addzero(s)}},getTimeArr:function(t){var e=new Date,a=new Date(e);t=t||0,a.setDate(e.getDate()+t);var i=a.getFullYear(),s=a.getMonth()+1,n=a.getDate(),o=a.getHours(),c=a.getMinutes(),l=a.getSeconds(),r="上午";r=o>=9&&o<=11?"上午":o<9&&o>5?"早上":o>11&&o<14?"中午":o>=14&&o<18?"下午":"晚上";var u=a.getDay();switch(u){case 1:u="星期一";break;case 2:u="星期二";break;case 3:u="星期三";break;case 4:u="星期四";break;case 5:u="星期五";break;case 6:u="星期六";break;case 0:u="星期日";break}return{y:i,m:this.addzero(s),d:this.addzero(n),h:this.addzero(o),i:this.addzero(c),s:this.addzero(l),w:u,t:r}},datetimeToUnix:function(t){var e=t.split(" "),a=e[0].split("-");e[1]=null==e[1]?"0:0:0":e[1];for(var i=e[1].split(":"),s=a.length-1;s>=0;s--)a[s]=isNaN(parseInt(a[s]))?0:parseInt(a[s]);for(s=i.length-1;s>=0;s--)i[s]=isNaN(parseInt(i[s]))?0:parseInt(i[s]);i[2]=0;var n=new Date(a[0],a[1]-1,a[2],i[0],i[1],i[2]);return n.getTime()/1e3},unixToDatetime:function(t,e){var a=null!=e?new Date(1e3*e):new Date,i="";if(/Y-m-d/.test(t)){var s=[a.getFullYear(),this.addzero(1+a.getMonth()),this.addzero(a.getDate())];i=s.join("-")}if(/H:i:s/.test(t)){var n=[this.addzero(a.getHours()),this.addzero(a.getMinutes()),this.addzero(a.getSeconds())];i+=" "+n.join(":")}return i},addzero:function(t){return t<=9?"0"+t:t},upMonth:function(t){var e=parseInt(t.m)-1,a=parseInt(t.y);return 0==e&&(a-=1,e=12),{y:a,m:this.addzero(e)}},downMonth:function(t){var e=parseInt(t.m)+1,a=parseInt(t.y);return 13==e&&(a+=1,e=1),{y:a,m:this.addzero(e)}}};e.default=i},"0aca":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("b2a2")),n={data:function(){return{showPayment:!1,detail:{status:0},qrcodeImg:""}},onLoad:function(){var t=s.default.createQrCodeImg("youge",{size:300});this.qrcodeImg=t},methods:{}};e.default=n},"0c72":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{},data:function(){return{payType:"weixin",show:!1}},created:function(){this.show=!0},methods:{changeType:function(t){this.payType=t.detail.value},closed:function(){var t=this;this.show=!1,setTimeout((function(){t.$emit("closed")}),400)}}};e.default=i},"41d7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tuan-buy-l[data-v-f4412808]{width:%?200?%;height:%?150?%;background:#f2f2f2}.tuan-buy-r[data-v-f4412808]{width:calc(100% - %?200?%)}",""]),t.exports=e},"46fa":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={countdownTime:a("7bce").default,dialogPayment:a("d458").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[-1==t.detail.status?a("v-uni-view",{staticClass:"flex alcenter space bg-w pd16_15"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconicon_order_status07 ft24",style:{color:t.tempColor}}),a("v-uni-text",{staticClass:"ml10 ft16 ftw600"},[t._v("已取消")])],1)],1):t._e(),0==t.detail.status?a("v-uni-view",{staticClass:"flex alcenter space bg-w pd16_15"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconicon_order_status01 ft24",style:{color:t.tempColor}}),a("v-uni-text",{staticClass:"ml10 ft16 ftw600"},[t._v("待付款")])],1),a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"ft14 cl-main mr10"}),a("countdown-time",{attrs:{t:900}})],1)],1):t._e(),1==t.detail.status?a("v-uni-view",{staticClass:"flex alcenter space bg-w pd16_15"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconicon_order_status02 ft24",style:{color:t.tempColor}}),a("v-uni-text",{staticClass:"ml10 ft16 ftw600"},[t._v("待使用")])],1)],1):t._e(),2==t.detail.status?a("v-uni-view",{staticClass:"flex alcenter space bg-w pd16_15"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconicon_order_status03 ft24",style:{color:t.tempColor}}),a("v-uni-text",{staticClass:"ml10 ft16 ftw600"},[t._v("待评价")])],1)],1):t._e(),4==t.detail.status?a("v-uni-view",{staticClass:"flex alcenter space bg-w pd16_15"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconicon_order_status07 ft24 cl-notice"}),a("v-uni-text",{staticClass:"ml10 ft16 ftw600"},[t._v("已过期")])],1)],1):t._e(),8==t.detail.status?a("v-uni-view",{staticClass:"flex alcenter space bg-w pd16_15"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont iconicon_order_status06 ft24",style:{color:t.tempColor}}),a("v-uni-text",{staticClass:"ml10 ft16 ftw600"},[t._v("已完成")])],1)],1):t._e(),a("v-uni-view",{staticClass:"pd16_15"},[a("v-uni-view",{staticClass:"box pd16_15 "},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-image",{staticClass:"tuan-buy-l"}),a("v-uni-view",{staticClass:"tuan-buy-r pl15"},[a("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v("单人精致洗剪吹1次，国庆3折…")]),a("v-uni-view",{staticClass:"mt8 ft12 cl-notice"},[t._v("下单时间：2020-04-05 12:00")]),a("v-uni-view",{staticClass:"mt12 flex alcenter cl-orange"},[a("v-uni-image",{staticStyle:{width:"32rpx",height:"32rpx","margin-right":"8rpx"},attrs:{src:t.statics.integralImg01}}),a("v-uni-text",{staticClass:"ft16 ftw600"},[t._v("3000 + ¥10")])],1)],1)],1)],1),t.detail.status>0?a("v-uni-view",{staticClass:"box mt16 pd16_15"},[a("v-uni-view",{staticClass:"ft16 ftw600 cl-main"},[t._v("核销码")]),a("v-uni-view",{staticClass:"mt24 flex center",class:{op3:t.detail.status>1}},[a("v-uni-image",{staticStyle:{width:"400rpx",height:"400rpx"},attrs:{src:t.qrcodeImg}})],1),1==t.detail.status?a("v-uni-view",{staticClass:"text-center mt12 ft12 cl-notice"},[t._v("请出示二维码给商家扫码核销")]):t._e(),4==t.detail.status?a("v-uni-view",{staticClass:"text-center mt12 ft12 cl-notice"},[t._v("已过期，不可再使用")]):t._e(),2==t.detail.status||8==t.detail.status?a("v-uni-view",{staticClass:"text-center mt12 ft12 cl-notice"},[t._v("已核销完")]):t._e()],1):t._e(),a("v-uni-view",{staticClass:"box mt16 pd16_15 flex alcenter space"},[a("v-uni-text",{staticClass:"ft16 ftw600",style:{color:t.tempColor}},[t._v("查看适用门店")]),a("v-uni-text",{staticClass:"iconfont iconicon_arrow_small ft14 cl-notice"})],1),a("v-uni-view",{staticClass:"box mt16 pd16_15"},[a("v-uni-view",{staticClass:"ft16 ftw600 cl-main"},[t._v("订单详情")]),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-text",{staticClass:"ft14 cl-info2"},[t._v("订单编号：")]),a("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("1034568888")])],1),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-text",{staticClass:"ft14 cl-info2"},[t._v("手机号码：")]),a("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("13515608638")])],1),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-text",{staticClass:"ft14 cl-info2"},[t._v("下单时间：")]),a("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("2020-10-23 15:10:10")])],1),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-text",{staticClass:"ft14 cl-info2"},[t._v("订单状态：")]),a("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("未支付")])],1),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-text",{staticClass:"ft14 cl-info2"},[t._v("支付时间：")]),a("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("2020-10-23 15:10:10")])],1)],1),a("v-uni-view",{staticClass:"box mt16 pd16_15"},[a("v-uni-view",{staticClass:"ft16 ftw600 cl-main"},[t._v("温馨提示")]),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-view",{staticClass:"ft14 cl-info2 text-right",staticStyle:{width:"140rpx"}},[t._v("有效期：")]),a("v-uni-view",{staticClass:"ft14 cl-main lh20",staticStyle:{width:"calc(100% - 140rpx)"}},[t._v("2020.6.1 至 2020.7.12 23:59（周末、法定节假日通用）")])],1),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-view",{staticClass:"ft14 cl-info2 text-right",staticStyle:{width:"140rpx"}},[t._v("使用时间：")]),a("v-uni-view",{staticClass:"ft14 cl-main lh20",staticStyle:{width:"calc(100% - 140rpx)"}},[t._v("11:30-14:30，17:30-20:30")])],1),a("v-uni-view",{staticClass:"flex mt16"},[a("v-uni-view",{staticClass:"ft14 cl-info2 text-right",staticStyle:{width:"140rpx"}},[t._v("使用规则：")]),a("v-uni-view",{staticClass:"ft14 cl-main lh20",staticStyle:{width:"calc(100% - 140rpx)"}},[t._v("抢购用户不可同时享受其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准\n\t\t\t\t如部分菜品因时令或其他不可抗因素导致无法提供，商家会用等价菜品替换，具体事宜请与商家协商\n\t\t\t\t可免费使用包间\n\t\t\t\t无需预约，消费高峰期可能需要等位\n\t\t\t\t商家提供免费WiFi\n\t\t\t\t停车位收费标准：停车费自理\n\t\t\t\t发票问题请询问商家\n\t\t\t\t堂食外带均可，可以打包，打包费详情请咨询商家")])],1)],1)],1),t.showPayment?a("dialog-payment",{on:{closed:function(e){arguments[0]=e=t.$handleEvent(e),t.showPayment=!1}}}):t._e(),0==t.detail.status?a("v-uni-view",{staticClass:"form-footer-h"},[a("v-uni-view",{staticClass:"form-footer form-footer-h"},[a("v-uni-view",{staticClass:"form-footer-main pd10_15 flex alcenter space"},[a("v-uni-button",{staticClass:"btn-big plan",staticStyle:{width:"330rpx"}},[t._v("取消订单")]),a("v-uni-button",{staticClass:"btn-big",staticStyle:{width:"330rpx"},style:t.getBtnStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPayment=!0}}},[t._v("立即支付")])],1)],1)],1):t._e(),2==t.detail.status?a("v-uni-view",{staticClass:"form-footer-h"},[a("v-uni-view",{staticClass:"form-footer form-footer-h"},[a("v-uni-view",{staticClass:"form-footer-main pd10_15 "},[a("v-uni-navigator",{attrs:{url:"/pages/client/tuan/mine/detail"}},[a("v-uni-button",{staticClass:"btn-big plan",style:t.getBtnPlanStyle},[t._v("评星立得10个积分")])],1)],1)],1)],1):t._e()],1)},n=[]},"584c":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"payment-modal"},[a("v-uni-view",{staticClass:"modal-bg"}),a("v-uni-view",{staticClass:"modal-box animated fast",class:t.show?"slideInUp":"slideOutDown"},[a("v-uni-view",{staticClass:"modal-main"},[a("v-uni-view",{staticClass:"closed"},[a("v-uni-text",{staticClass:"iconfont  ft20 cl-notice iconbtn_close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closed()}}})],1),a("v-uni-view",{staticClass:"lh20 ft16 cl-main ftw600 text-center"},[t._v("支付订单")]),a("v-uni-view",{staticClass:" pd16_15"},[a("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeType.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"box pd16_15 flex alcenter space"},[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"iconfont iconicon_pay_balance ft32",staticStyle:{color:"#FFBD1E"}}),a("v-uni-text",{staticClass:"ml15 ft14 ftw500 cl-main"},[t._v("余额支付")]),a("v-uni-text",{staticClass:"ml10 ft12 cl-notice"},[t._v("余额为0，不可用")])],1),a("v-uni-view",[a("v-uni-radio",{attrs:{value:"money",checked:"money"==t.payType,disabled:!1,color:t.tempColor}})],1)],1),a("v-uni-view",{staticClass:"box pd16_15 mt16  flex alcenter space"},[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"iconfont iconicon_pay_balance ft32 cl-green"}),a("v-uni-text",{staticClass:"ml15 ft14 ftw500 cl-main"},[t._v("微信支付")])],1),a("v-uni-view",[a("v-uni-radio",{attrs:{value:"weixin",checked:"weixin"==t.payType,color:t.tempColor}})],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"bg-w mt16 pd10_15",staticStyle:{"box-shadow":"0rpx -4rpx 16rpx 0rpx rgba(0, 0, 0, 0.04)"}},[a("v-uni-button",{staticClass:"btn-big",style:t.getBtnStyle},[t._v("确定支付")])],1)],1)],1)},s=[]},"5ba4":function(t,e,a){"use strict";a.r(e);var i=a("0aca"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"5e0c":function(t,e,a){"use strict";var i=a("f897"),s=a.n(i);s.a},6537:function(t,e,a){"use strict";a.r(e);var i=a("e51b"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"6b45":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".order-t[data-v-76558a89]{width:%?48?%;height:%?48?%;background:#fff;text-align:center;line-height:%?48?%;font-size:%?28?%;font-weight:500;color:#000;border-radius:%?8?%}.order-t.small[data-v-76558a89]{width:%?40?%;height:%?40?%;font-size:%?24?%;line-height:%?40?%}",""]),t.exports=e},"6ded":function(t,e,a){var i=a("41d7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("012e7e3a",i,!0,{sourceMap:!1,shadowMode:!1})},"7bce":function(t,e,a){"use strict";a.r(e);var i=a("c92b"),s=a("6537");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("cd8a");var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"76558a89",null,!1,i["a"],void 0);e["default"]=c.exports},"7dd1":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".payment-modal[data-v-0069ca07]{position:relative;z-index:400}.payment-modal .modal-bg[data-v-0069ca07]{position:fixed;z-index:400;left:0;top:0;width:100%;height:100vh;background:rgba(0,0,0,.5)}.payment-modal .modal-box[data-v-0069ca07]{position:fixed;z-index:401;background:#fff;left:0;bottom:0;width:100%;padding-bottom:%?0?%;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);border-radius:%?32?% %?32?% %?0?% %?0?%}.payment-modal .modal-main[data-v-0069ca07]{position:relative;height:auto;overflow:hidden;padding-top:%?64?%}.payment-modal .modal-main .closed[data-v-0069ca07]{position:absolute;right:%?40?%;top:%?40?%}",""]),t.exports=e},8278:function(t,e,a){"use strict";a.r(e);var i=a("0c72"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},afe3:function(t,e,a){"use strict";var i=a("6ded"),s=a.n(i);s.a},c5c5:function(t,e,a){"use strict";a.r(e);var i=a("46fa"),s=a("5ba4");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("afe3");var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"f4412808",null,!1,i["a"],void 0);e["default"]=c.exports},c92b:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"order-t",class:t.size,style:{background:t.bgColor,color:t.color}},[t._v(t._s(t.showT.h))]),a("v-uni-text",{staticClass:"ft12 ftw600 plr5"},[t._v(":")]),a("v-uni-text",{staticClass:"order-t",class:t.size,style:{background:t.bgColor,color:t.color}},[t._v(t._s(t.showT.m))]),a("v-uni-text",{staticClass:"ft12 ftw600 plr5"},[t._v(":")]),a("v-uni-text",{staticClass:"order-t",class:t.size,style:{background:t.bgColor,color:t.color}},[t._v(t._s(t.showT.s))])],1)],1)},s=[]},cd8a:function(t,e,a){"use strict";var i=a("f8d3"),s=a.n(i);s.a},d458:function(t,e,a){"use strict";a.r(e);var i=a("584c"),s=a("8278");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("5e0c");var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"0069ca07",null,!1,i["a"],void 0);e["default"]=c.exports},e51b:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var s=i(a("080a")),n={props:{t:{type:Number,default:0},size:{type:String,default:""},bgColor:{type:String,default:"#2E2F33"},color:{type:String,default:"#ffffff"}},data:function(){return{myT:0,timer:null}},computed:{showT:function(){var t=this.myT;return s.default.djsFull(t)}},created:function(){this.myT=this.t,this.djs()},destroyed:function(){null!=this.timer&&clearInterval(this.timer)},methods:{djs:function(){var t=this;this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){0==t.myT?clearInterval(t.timer):t.myT=t.myT-1}),1e3)}}};e.default=n},f897:function(t,e,a){var i=a("7dd1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("23b0498e",i,!0,{sourceMap:!1,shadowMode:!1})},f8d3:function(t,e,a){var i=a("6b45");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("dbeb22a6",i,!0,{sourceMap:!1,shadowMode:!1})}}]);