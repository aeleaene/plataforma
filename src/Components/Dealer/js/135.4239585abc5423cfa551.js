webpackJsonp([135],{"+76y":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={data:function(){return{isCustomer:!1,records:[]}},methods:{fmtTime:function(t){return t?this.utcToLocal(t).split(" ")[0].replace(/\-/g,"/"):"-"},fmtCurrencytype:function(t){return"$"},couponClassName:function(t){return"item-coupon item-coupon-"+(1==t?"enable":"disabled")},couponStatusTxt:function(t){var s=lg.statusNew;return 2==t?s=lg.used:3==t&&(s=lg.expired),s},setData:function(t,s){this.records=t,this.isCustomer=s}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-scrollbar",{staticClass:"com-coupon"},[t._l(t.records,function(s){return e("div",{key:s.serialnumber,class:t.couponClassName(s.couponstatus)},[e("div",{staticClass:"bd"},[e("table",[e("tr",[e("td",{staticClass:"col-1"},[e("H3",[t._v(t._s(s.couponvalue))])],1),t._v(" "),e("td",{staticClass:"col-2"},[e("ins",{staticClass:"name"},[t._v(t._s(s.couponname))]),t._v(" "),e("div",{staticClass:"info"},[e("span",[t._v(t._s(s.description))])]),t._v(" "),e("div",{staticClass:"time"},[1==s.couponstatus?[t._v(t._s(t.fmtTime(s.fromtime))+" - "+t._s(t.fmtTime(s.expirationtime)))]:t._e(),t._v(" "),2==s.couponstatus?[t._v(t._s(t.fmtTime(s.usetime))+" "+t._s(t.lg.used))]:t._e(),t._v(" "),3==s.couponstatus?[t._v(t._s(t.fmtTime(s.expirationtime))+" "+t._s(t.lg.expiration))]:t._e()],2)]),t._v(" "),e("td",{staticClass:"col-3"},[e("span",{staticClass:"status-txt"},[t._v(t._s(t.couponStatusTxt(s.couponstatus)))])])])])]),t._v(" "),e("div",{staticClass:"ft"},[!t.isCustomer&&s.orderno?e("div",{staticClass:"orderno"},[t._v(t._s(t.lg.orderNo)+":"+t._s(s.orderno))]):t._e(),t._v(" "),e("span",[t._v("NO."+t._s(s.serialnumber))])])])}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.records.length,expression:"records.length == 0"}],staticClass:"el-table__empty-text"},[t._v(t._s(t.lg.noData))])],2)},staticRenderFns:[]};var a=e("VU/8")(o,n,!1,function(t){e("gnZr")},null,null);s.default=a.exports},gnZr:function(t,s){}});