webpackJsonp([114,88],{Glw6:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("gyMJ"),n=(i("iKHV"),i("VV4h")),o=i("eInf"),s=i("sQMB"),a=i("KvKp"),l={data:function(){return{filter:"0",visible:!1,loading:!1,imeiComp:null,repeatImei:[],reocrds:[]}},components:{membership:n.default,imeiDetail:o.default,platformComp:s.default},computed:{normalNum:function(){return this.reocrds.filter(function(e){return e.isok}).length},errorNum:function(){return this.reocrds.filter(function(e){return!e.isok}).length},repeatData:function(){},repeatNum:function(){return this.repeatImei.length},filterData:function(){var e=this;return"0"==this.filter?this.reocrds:"1"==this.filter?this.reocrds.filter(function(e){return e.isok}):"2"==this.filter?this.reocrds.filter(function(e){return!e.isok}):"3"==this.filter?this.reocrds.filter(function(t){return e.inArray(e.repeatImei,t.imei)}):void 0}},methods:{checkClick:function(){this.$emit("getImeis")},rowClassFn:function(e){var t=e.row;e.rowIndex;return t.isok?"":"table-row-error"},beforeDestroy:function(){this.imeiComp=null},setRepeatData:function(e){if(e){var t=[],i=[];(e=e.replaceAll("\n",",").split(",")).forEach(function(e){-1!=t.indexOf(e)?i.push(e):t.push(e)}),this.repeatImei=i}},getImeisInfoData:function(e){var t=this;e&&(e=this.$trim(e),this.setRepeatData(e),e=this.formatImeis(e),this.loading=!0,Object(r._49)({imeis:e.join(",")}).then(function(e){t.visible=!t.visible,t.reocrds=e.records,t.loading=!1}).catch(function(e){t.loading=!1}))},showFn:function(){Object(a.k)(document,"click",this.handleDocumentClick)},handleDocumentClick:function(e){this.imeiComp&&this.imeiComp.$el.contains(e.target)||this.$refs.membershipComp&&this.$refs.membershipComp.$el.contains(e.target)||(this.visible=!1)},hideFn:function(){Object(a.j)(document,"click",this.handleDocumentClick)},filterClick:function(){var e=[];this.filterData.forEach(function(t){e.push(t.imei)}),this.$emit("setImeis",e)},setImeiComp:function(e){this.imeiComp=e},showMembership:function(e){this.$refs.membershipComp.setVisible(!0),this.$refs.membershipComp.getRelationship(e.customerid)}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-popover",{ref:"imeiPopover",attrs:{"popper-class":"imei-list-popover",placement:"right",width:"400",trigger:"manual"},on:{"after-enter":e.showFn,"after-leave":e.hideFn},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("el-tabs",{on:{"tab-click":e.filterClick},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[i("el-tab-pane",{attrs:{label:e.lg.all+"("+e.reocrds.length+")",name:"0"}}),e._v(" "),i("el-tab-pane",{attrs:{label:e.lg.normal+"("+e.normalNum+")",name:"1"}}),e._v(" "),i("el-tab-pane",{attrs:{label:e.lg.repeated+"("+e.repeatNum+")",name:"3"}}),e._v(" "),i("el-tab-pane",{attrs:{label:e.lg.error+"("+e.errorNum+")",name:"2"}})],1),e._v(" "),i("el-button",{staticClass:"popver-close-btn",attrs:{type:"info",round:"",icon:"el-icon-close"},on:{click:function(t){e.visible=!1}}}),e._v(" "),i("el-table",{attrs:{data:e.filterData,"max-height":"300","row-class-name":e.rowClassFn}},[i("el-table-column",{attrs:{width:"150",property:"imei",label:e.lg.imei},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isok?[i("imeiDetail",{attrs:{record:{deviceid:t.row.id,imei:t.row.imei}},on:{dialogShow:e.setImeiComp}})]:[e._v("\n          "+e._s(t.row.imei)+"\n        ")]]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"100",property:"devicetype",label:e.lg.targetType}}),e._v(" "),i("el-table-column",{attrs:{width:"150",label:e.lg.membershipCustomer},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isok?[i("a",{staticClass:"txt-ellipsis link-btn",on:{click:function(i){return e.showMembership(t.row)}}},[e._v(e._s(t.row.customername))])]:[i("div",{staticClass:"txt-ellipsis"},[i("p",[e._v(e._s(e.lg[t.row.errorcode]))]),e._v(" "),"20005"==t.row.errorcode?[i("platformComp",{attrs:{imeis:t.row.imei}})]:e._e()],2)]]}}])})],1),e._v(" "),i("el-button",{staticClass:"check-imei-btn",attrs:{slot:"reference",loading:e.loading},on:{click:e.checkClick},slot:"reference"},[e._v(e._s(e.lg.check))]),e._v(" "),i("membership",{ref:"membershipComp"})],1)},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(e){i("fY/y")},null,null);t.default=u.exports},"fY/y":function(e,t){},gFTv:function(e,t){},iKHV:function(e,t,i){"use strict";i.d(t,"d",function(){return r}),i.d(t,"i",function(){return n}),i.d(t,"j",function(){return o}),i.d(t,"a",function(){return s}),i.d(t,"m",function(){return a}),i.d(t,"b",function(){return l}),i.d(t,"l",function(){return c}),i.d(t,"k",function(){return u}),i.d(t,"f",function(){return m}),i.d(t,"h",function(){return f}),i.d(t,"g",function(){return d}),i.d(t,"e",function(){return p}),i.d(t,"n",function(){return h}),i.d(t,"c",function(){return b}),i.d(t,"o",function(){return v});var r=function(e){return!(!e||!/^([0-9A-Za-z\_\@\.]){2,30}$/.test(e))},n=function(e){return!!(e&&e.length<=20&&e.length>=6)},o=function(e){return"123456"!=e},s=100,a=64,l=150,c=function(e){return!!e.match(/^(\+[0-9]{1,20}|[0-9]{1,21})$/)},u=function(e){return e.indexOf("@")>0&&e.indexOf(".")>0&&!!e.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)},m=function(e){return/(^[a-zA-Z\d]{6,15}$)/.test(e)},f=function(e){return/(^[a-zA-Z\d]{5,18}$)/.test(e)},d=function(e){for(var t,i=[],r=!0,n=0,o=e.length;n<o;n++)if(t=e[n].replace(/^\s+|\s+$/gm,""),i.push(t),!m(t)){r=!1;break}return{imeis:i,rs:r}},p=function(e){return!!(/^\d+(\.5)?$/.test(e)&&parseInt(e)>=0&&parseInt(e)<=5e3)},h=function(e,t){var i={beginTime:(t=t||"")?new Date(new Date(t).getTime()).setHours(0,0,0,0):(new Date).getTime()};return i.endTime=i.beginTime+864e5*e-1,i},g=function(e,t){if(e+="",t||(t=0),-1==e.indexOf(".")&&(e+="."),e+=new Array(t+1).join("0"),new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+(t+1)+"})?)\\d*$").test(e)){e="0"+RegExp.$2;var i=RegExp.$1,r=RegExp.$3.length,n=!0;if(r==t+2){if(r=e.match(/\d/g),parseInt(r[r.length-1])>4)for(var o=r.length-2;o>=0&&(r[o]=parseInt(r[o])+1,10==r[o]);o--)r[o]=0,n=1!=o;e=r.join("").replace(new RegExp("(\\d+)(\\d{"+t+"})\\d$"),"$1.$2")}return n&&(e=e.substr(1)),parseFloat((i+e).replace(/\.$/,""))}return e+""},b=function(e,t,i){return 0==e&&"temperature"!=t||void 0===i?e:"distance"==t?g("2"==i?.621*e:e,2):"pressure"==t?["",g(.145*e,2),g(.01*e,2),g(e,2)][i]:"capacity"==t?["",g(e,2),g(.264*e,2),g(.22*e,2)][i]:"temperature"==t?g("2"==i?1.8*e+32:e,2):"fuelefficiency"==t?["",g(e,2),g(62.1/(.264*e),2),g(62.1/(.22*e),2)][i]:e},v=function(e,t,i){return 0==e&&"temperature"!=t||void 0===i?e:"distance"==t&&1!=i?g(e/.621,2):"pressure"==t?["",g(e/.145,2),g(e/.01,2),g(e,2)][i]:"capacity"==t?["",g(e,2),g(e/.264,2),g(e/.22,2)][i]:"temperature"==t?g("2"==i?(e-32)/1.8:e,2):"fuelefficiency"==t?["",g(e,2),g(62.1/(.264*e),2),g(62.1/(.22*e),2)][i]:e}},qSo9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("Glw6"),n=i("gyMJ"),o=i("iKHV"),s={props:["dialog"],data:function(){return{formData:{distributortime:"",imeis:""},pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()}},btnloading:!1}},components:{imeiListComp:r.default},methods:{setData:function(e){this.formData.imeis=e.join("\n")},getImeis:function(){this.$refs.imeiListComp.getImeisInfoData(this.formData.imeis)},setImeis:function(e){this.formData.imeis=e?e.join("\n"):""},onSubmit:function(){var e=this,t=this.checkParams();t&&(this.btnloading=!0,Object(n.x)(t).then(function(t){e.$message.success(lg.distributorTimeSetSuccess),e.btnloading=!1,e.reset(),e.hideDialog()}).catch(function(t){e.btnloading=!1}),this.countEvent({action:"批量修改用户到期时间",opt_label:"点击",val:"Dealer2"}))},checkParams:function(){var e=this.$trim(this.formData.imeis),t=this.formData.distributortime;if(!t)return this.$message.error(lg.userEndFormatError),!1;if(!e)return this.$message.error(lg.targetNull),!1;if((e=this.formatImeis(e)).length>200)return this.$message.error(lg.maxImeiNum.replace("{num}",200)),!1;var i=Object(o.g)(e);return i.rs?(t=Object(o.n)(1,t).endTime,{imeis:i.imeis.join(","),distributortime:t}):(this.$message.error(lg[20053]+"("+i.imeis[i.imeis.length-1]+")"),!1)},hideDialog:function(){this.$emit("hideDialog")},reset:function(){this.$refs.formComp.resetFields()}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"formComp",attrs:{"label-position":"right","show-message":!1,model:e.formData,"label-width":"150px"},nativeOn:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[i("el-form-item",{attrs:{label:e.lg.userEnd,required:"",prop:"distributortime"}},[i("el-date-picker",{attrs:{type:"date","picker-options":e.pickerOptions,"value-format":"timestamp"},model:{value:e.formData.distributortime,callback:function(t){e.$set(e.formData,"distributortime",t)},expression:"formData.distributortime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.lg.imei,required:"",prop:"imeis"}},[i("div",{staticClass:"fl"},[i("el-input",{directives:[{name:"showClear",rawName:"v-showClear"}],staticStyle:{width:"220px"},attrs:{type:"textarea",placeholder:e.lg.oneImeiOneLine,rows:5},on:{blur:function(t){return e.trimImeiInput("formData","imeis")}},model:{value:e.formData.imeis,callback:function(t){e.$set(e.formData,"imeis",t)},expression:"formData.imeis"}}),e._v(" "),i("p",{staticClass:"desc"},[e._v(e._s(e.lg.maxImeiNum.replace("{num}",200)))])],1),e._v(" "),i("div",{staticClass:"fl"},[i("imeiListComp",{ref:"imeiListComp",on:{setImeis:e.setImeis,getImeis:e.getImeis}})],1)]),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary","native-type":"submit",loading:e.btnloading}},[e._v(e._s(e.lg.save))]),e._v(" "),e.dialog?i("el-button",{on:{click:e.hideDialog}},[e._v(e._s(e.lg.cancel))]):i("el-button",{on:{click:e.reset}},[e._v(e._s(e.lg.reset))])],1)],1)},staticRenderFns:[]},l=i("VU/8")(s,a,!1,null,null,null);t.default=l.exports},sQMB:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("iKHV"),n=i("gyMJ"),o={props:["imeis"],data:function(){return{records:[],visible:!1,loading:!1,oPlatform:{"-1":lg.noSuchIMEI,0:lg.notInBlackList,1:"Protrack",2:"Itrack/SWD",3:"ProtrackAsia"}}},computed:{hasAuth:function(){return this.$store.state.functions&&this.$store.state.functions.checkinwhitelist}},methods:{getInfo:function(){var e=this;if(this.loading=!0,!this.imeis||!Object(r.h)(this.imeis))return this.$message.error(lg[20053]);Object(n.M)({imeis:this.imeis}).then(function(t){e.records=t.record,e.loading=!1}).catch(function(t){e.loading=!1})},fmtPlatform:function(e,t,i,r){return this.oPlatform[i]},fmtTime:function(e,t,i,r){return i?this.utcToLocal(i):"-"},hide:function(){this.records=[]}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hasAuth?i("el-popover",{attrs:{"popper-class":"platform-popover",placement:"bottom",target:"manual",width:"550"},on:{"after-leave":e.hide},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("el-button",{staticClass:"popver-close-btn",attrs:{type:"info",round:"",icon:"el-icon-close"},on:{click:function(t){e.visible=!1}}}),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.records,stripe:""}},[i("el-table-column",{attrs:{type:"index",align:"center",label:e.lg.serialNum,width:"48"}}),e._v(" "),i("el-table-column",{attrs:{prop:"imei",label:"IMEI",width:"160"}}),e._v(" "),i("el-table-column",{attrs:{prop:"type",label:e.lg.platform,formatter:e.fmtPlatform}}),e._v(" "),i("el-table-column",{attrs:{prop:"importTime",label:e.lg.importTime,formatter:e.fmtTime,width:"160"}})],1),e._v(" "),i("a",{staticClass:"link-btn",attrs:{slot:"reference"},on:{click:e.getInfo},slot:"reference"},[e._v("查看所属平台"),i("i",{staticClass:"el-icon-d-arrow-right",staticStyle:{"font-size":"11px"}})])],1):e._e()},staticRenderFns:[]};var a=i("VU/8")(o,s,!1,function(e){i("gFTv")},null,null);t.default=a.exports}});