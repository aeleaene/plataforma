webpackJsonp([127],{K1Fb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),s=a.n(i),l=a("gyMJ"),n=a("iKHV"),r={data:function(){return{activeName:"alert",isSelf:!0,loading:!1,isloading:!1,endMailLoading:!1,labelPosition:"top",showform:!1,data:{},customerid:"",mails_tmp:[{val:"",key:Date.now()}],settingsdata:[],servicesdata:[],allStorage:0,indeStorage:!0,allEmail:0,indeEmail:!0,allApp:0,indeApp:!0,allStorageServices:0,indeStorageServices:!0,allEmailServices:0,indeEmailServices:!0,allAppServices:0,indeAppServices:!0,timerange:["",""],scene:"",methodGet:l._58,methodSave:l._14}},computed:{loginId:function(){return this.$store.state.customerInfo.id},auth:function(){return this.$store.state.auth},isSetTemplate:function(){return"setTemplate"==this.scene},showTemplateSettings:function(){return!this.isSetTemplate||this.data.asdefault}},methods:{addEmail:function(){this.mails_tmp.length>4||this.mails_tmp.push({val:"",key:Date.now()})},removeEmail:function(e){var t=this.mails_tmp.indexOf(e);-1!==t&&this.mails_tmp.length>1&&this.mails_tmp.splice(t,1)},email2arr:function(e){for(var t=e.split(","),a=[],i=0;i<t.length;i++)a.push({val:t[i],key:Date.now()+i});return a},trimMail:function(e){this.mails_tmp[e].val=this.$trim(this.mails_tmp[e].val)},slidertooltipformat:function(e){var t=parseInt(e/60),a=e%60;return t<10&&(t="0"+t),a<10&&(a="0"+a),t+":"+a},resetFm:function(){},setScene:function(e){this.scene=e,this.isSetTemplate?(this.methodGet=l._142,this.methodSave=l._143):(this.methodGet=l._58,this.methodSave=l._14)},getInfo:function(e,t){var a=this,i=this;if(!e)return this.$message.error(lg[10005]);this.customerid=e,this.isSelf=this.customerid==this.loginId,this.setScene(t),this.loading=!0,this.methodGet({customerid:e}).then(function(e){i.mails_tmp=i.email2arr(e.record.mails),i.data=e.record;var t=e.record.begintime,s=e.record.endtime;i.timerange=[t,s],i.settingsdata=e.record.settings,i.servicesdata=[{alert:lg.willExpired,storage:e.record.subexpireremind,app:e.record.expiresendpush,email:e.record.expiresendmail}],i.initAllChecked(),a.loading=!1}).catch(function(e){a.loading=!1})},editNotify:function(){for(var e=this,t=this,a=[],i=this.mails_tmp,l=0;l<i.length;l++){var r=this.$trim(i[l].val);if(r){if(!Object(n.k)(r))return void this.$message.error(lg.emailFormatError);a.push(r)}}this.data.mails=a.join(","),this.data.settings="",this.data.appnotify="",this.data.mailnotify="",this.data.storage="";for(var o,c=this.settingsdata.length,d=0;d<c;d++)this.data.appnotify+=this.settingsdata[d].app,this.data.mailnotify+=this.settingsdata[d].email,this.data.storage+=this.settingsdata[d].storage;this.data.subexpireremind=this.servicesdata[0].storage,o=[this.servicesdata[0].storage,this.servicesdata[0].email,this.servicesdata[0].app].join(""),this.data.begintime=this.timerange[0],this.data.endtime=this.timerange[1],this.isloading=!0,this.methodSave(s()({expirationsettings:o},this.data)).then(function(t){e.$message({message:lg.success,type:"success"}),e.hide(),e.isloading=!1}).catch(function(e){t.isloading=!1}),this.isSetTemplate?this.countEvent({action:"新客模板-推送设置",opt_label:"点击",val:"Dealer2"}):this.countEvent({action:"推送设置提交",opt_label:"点击",val:"Dealer2"})},sendMailFn:function(e){var t=this;if(!this.endMailLoading){var a=this.$trim(e.val);if(!a)return this.$message.error(lg.emailNull);if(!Object(n.k)(a))return this.$message.error(lg.emailFormatError);var i={mail:a,domain:location.origin,locale:this.$lang};this.endMailLoading=!0,Object(l._148)(i).then(function(e){t.endMailLoading=!1,t.$message({message:lg.sendMailSuccess,type:"success"})}).catch(function(e){t.endMailLoading=!1})}},initAllChecked:function(){this.checkStorageOneRow(),this.checkMailOneRow(),this.checkAppOneRow(),this.checkStorageServicesOneRow(),this.checkMailServicesOneRow(),this.checkAppServicesOneRow()},checkStorageAllRows:function(){var e=this;this.settingsdata.length;this.settingsdata.forEach(function(t,a){t.storage=e.allStorage}),this.indeStorage=!1},checkStorageOneRow:function(){var e=this.settingsdata.find(function(e){return 1!=e.storage});this.allStorage=e?0:1,this.indeStorage=!this.allStorage},checkEmailAllRows:function(){var e=this;this.settingsdata.forEach(function(t){t.email=e.allEmail}),this.indeEmail=!1},checkMailOneRow:function(){var e=this.settingsdata.find(function(e){return 1!=e.email});this.allEmail=e?0:1,this.indeEmail=!this.allEmail},checkAppAllRows:function(){var e=this;this.settingsdata.forEach(function(t){t.app=e.allApp}),this.indeApp=!1},checkAppOneRow:function(){var e=this.settingsdata.find(function(e){return 1!=e.app});this.allApp=e?0:1,this.indeApp=!this.allApp},checkStorageServicesAllRows:function(){var e=this;this.servicesdata.length;this.servicesdata.forEach(function(t,a){t.storage=e.allStorageServices}),this.indeStorageServices=!1},checkStorageServicesOneRow:function(){var e=this.servicesdata.find(function(e){return 1!=e.storage});this.allStorageServices=e?0:1,this.indeStorageServices=!this.allStorageServices},checkEmailServicesAllRows:function(){var e=this;this.servicesdata.forEach(function(t){t.email=e.allEmailServices}),this.indeEmailServices=!1},checkMailServicesOneRow:function(){var e=this.servicesdata.find(function(e){return 1!=e.email});this.allEmailServices=e?0:1,this.indeEmailServices=!this.allEmailServices},checkAppServicesAllRows:function(){var e=this;this.servicesdata.forEach(function(t){t.app=e.allAppServices}),this.indeAppServices=!1},checkAppServicesOneRow:function(){var e=this.servicesdata.find(function(e){return 1!=e.app});this.allAppServices=e?0:1,this.indeAppServices=!this.allAppServices},hide:function(){this.resetFm(),this.$emit("onCancel")},dialogCloseFn:function(){this.resetFm()},handleClick:function(){}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"",staticClass:"notify-setting",attrs:{"label-position":e.labelPosition,size:"mini"},nativeOn:{submit:function(t){return t.preventDefault(),e.editNotify.apply(null,arguments)}}},[a("el-tabs",{class:{"onlyone-tab":e.customerid!=e.loginId},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:e.lg.alarm,name:"alert"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showTemplateSettings,expression:"showTemplateSettings"}],staticClass:"pr20 pb5"},[a("el-form-item",{staticClass:"pt5"},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.data.notifyswitch,callback:function(t){e.$set(e.data,"notifyswitch",t)},expression:"data.notifyswitch"}},[e._v("\n            "+e._s(e.lg.receiveAlarmNotice)+"\n            "),a("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:e.auth.hasViewDescription,expression:"auth.hasViewDescription"}],attrs:{placement:"top",width:"600px","popper-class":"tooltip-alert-desc"}},[a("i",{staticClass:"el-icon-info protrack"}),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[e._v("报警流程：")]),e._v(" "),a("p",{staticClass:"pb10"},[e._v("1 产生 → 2 保存 → 3 推送")]),e._v(" "),a("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[a("thead",[a("tr",[a("th",{staticClass:"w70"},[e._v("步骤")]),e._v(" "),a("th",[e._v("动作描述")]),e._v(" "),a("th",{staticClass:"w100px"},[e._v("设置位置")]),e._v(" "),a("th",{staticClass:"w100px"},[e._v("查看位置")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1 产生")]),e._v(" "),a("td",[e._v("触发及产生（来自平台或设备）")]),e._v(" "),a("td",[e._v("设备报警设置")]),e._v(" "),a("td",[e._v("无")])]),e._v(" "),a("tr",[a("td",[e._v("2 保存"),a("br"),e._v("(Alert list)")]),e._v(" "),a("td",[e._v("保存在报警记录列表中")]),e._v(" "),a("td",[e._v("账号推送设置")]),e._v(" "),a("td",[e._v("报警列表，报警报表等")])]),e._v(" "),a("tr",[a("td",[e._v("3 推送"),a("br"),e._v("(Email/APP)")]),e._v(" "),a("td",[e._v("Email / APP / (SMS) 推送")]),e._v(" "),a("td",[e._v("账号推送设置")]),e._v(" "),a("td",[e._v("邮件，APP Push")])])])])])])],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showTemplateSettings,expression:"showTemplateSettings"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.data.notifyswitch,expression:"data.notifyswitch"}],staticClass:"el-form-item-fieldsets"},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.data.notifyswitch,expression:"data.notifyswitch"}],attrs:{label:e.lg.alarmDuration+":"}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.data.warnallday,callback:function(t){e.$set(e.data,"warnallday",t)},expression:"data.warnallday"}},[e._v(e._s(e.lg.allDay))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.data.warnallday,expression:"!data.warnallday"}],staticStyle:{"margin-left":"25px"}},[a("el-time-picker",{staticStyle:{width:"100px"},attrs:{"value-format":"HH:mm",placeholder:e.lg.from,format:"HH:mm"},model:{value:e.timerange[0],callback:function(t){e.$set(e.timerange,0,t)},expression:"timerange[0]"}}),e._v("  -  \n              "),a("el-time-picker",{staticStyle:{width:"100px"},attrs:{"value-format":"HH:mm",placeholder:e.lg.to,format:"HH:mm"},model:{value:e.timerange[1],callback:function(t){e.$set(e.timerange,1,t)},expression:"timerange[1]"}})],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.data.notifyswitch,expression:"data.notifyswitch"}],staticClass:"el-form-item-fieldsets"},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.settingsdata.length>0,expression:"settingsdata.length>0"}]},[a("el-table",{staticClass:"f12 notice-set-table",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:e.settingsdata,height:"250"}},[a("el-table-column",{staticClass:"nowrap",attrs:{label:e.lg.alarmType},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.alert))]}}])}),e._v(" "),a("el-table-column",{staticClass:"tc",attrs:{width:"120"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-checkbox",{attrs:{indeterminate:e.indeStorage,"true-label":1,"false-label":0},on:{change:e.checkStorageAllRows},model:{value:e.allStorage,callback:function(t){e.allStorage=t},expression:"allStorage"}},[e._v("\n                    "+e._s(e.lg.saveAlert)+"\n                  ")])]}},{key:"default",fn:function(t){return[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},on:{change:e.checkStorageOneRow},model:{value:t.row.storage,callback:function(a){e.$set(t.row,"storage",a)},expression:"scope.row.storage"}})]}}])}),e._v(" "),a("el-table-column",{staticClass:"tc",attrs:{width:"120"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{attrs:{indeterminate:e.indeEmail,"true-label":1,"false-label":0},on:{change:e.checkEmailAllRows},model:{value:e.allEmail,callback:function(t){e.allEmail=t},expression:"allEmail"}},[e._v("\n                      "+e._s(e.lg.emailNotify)+"\n                    ")])],1)]}},{key:"default",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{attrs:{disabled:!t.row.storage,"true-label":1,"false-label":0},on:{change:e.checkMailOneRow},model:{value:t.row.email,callback:function(a){e.$set(t.row,"email",a)},expression:"scope.row.email"}})],1)]}}])}),e._v(" "),a("el-table-column",{staticClass:"nowrap",attrs:{width:"120"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{attrs:{indeterminate:e.indeApp,"true-label":1,"false-label":0},on:{change:e.checkAppAllRows},model:{value:e.allApp,callback:function(t){e.allApp=t},expression:"allApp"}},[e._v("\n                    "+e._s(e.lg.app)+"\n                    "),a("el-tooltip",{attrs:{placement:"top","popper-class":"tooltip-pageinfo"}},[a("i",{staticClass:"el-icon-info"}),e._v(" "),a("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(e.lg.tipsSetAppPush)},slot:"content"})])],1)],1)]}},{key:"default",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{staticClass:"tc",attrs:{disabled:!t.row.storage,"true-label":1,"false-label":0},on:{change:e.checkAppOneRow},model:{value:t.row.app,callback:function(a){e.$set(t.row,"app",a)},expression:"scope.row.app"}})],1)]}}])})],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.data.notifyswitch&&!e.isSetTemplate&&!(!e.data.allowsms&&e.customerid==e.loginId),expression:"data.notifyswitch && !isSetTemplate && !(!data.allowsms && customerid == loginId)"}],staticClass:"el-form-item-fieldsets"},[a("el-form-item",[a("div",{attrs:{slot:"label"},slot:"label"},[e._v(e._s(e.lg.mobile)+"\n              "),a("el-tooltip",{staticClass:"item",attrs:{"popper-class":"el-txt-tips",effect:"dark",placement:"top"}},[a("div",{staticStyle:{"max-width":"280px","line-height":"21px"},attrs:{slot:"content"},domProps:{innerHTML:e._s(e.lg.mobileNotifyTips)},slot:"content"}),e._v(" "),a("span",{staticClass:"email-help el-icon-info"})]),e._v(":\n            ")],1),e._v(" "),a("el-input",{staticStyle:{width:"240px"},on:{blur:function(t){return e.$trimFn("data","phonenumber")}},model:{value:e.data.phonenumber,callback:function(t){e.$set(e.data,"phonenumber",t)},expression:"data.phonenumber"}}),e._v(" "),e.customerid!=e.loginId?a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.data.allowsms,callback:function(t){e.$set(e.data,"allowsms",t)},expression:"data.allowsms"}},[e._v(e._s(e.lg.allowSmsTip))]):e._e()],1)],1)])]),e._v(" "),e.customerid==e.loginId?a("el-tab-pane",{attrs:{label:e.lg.services,name:"service"}},[a("div",{staticClass:"el-form-item-fieldsets"},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.servicesdata.length>0,expression:"servicesdata.length>0"}]},[a("el-table",{staticClass:"f12 notice-set-table",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:e.servicesdata,height:"150"}},[a("el-table-column",{staticClass:"nowrap",attrs:{label:e.lg.type},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.alert)+"\n                "),a("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:t.row.alert==e.lg.willExpired,expression:"scope.row.alert == lg.willExpired"}],attrs:{placement:"top","popper-class":"none-tooltip-alert-desc"}},[a("i",{staticClass:"el-icon-info"}),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                    "+e._s(e.lg.subExpireAlert)+"\n                    ")])])]}}],null,!1,3342522919)}),e._v(" "),a("el-table-column",{staticClass:"tc",attrs:{width:"120"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-checkbox",{attrs:{indeterminate:e.indeStorageServices,"true-label":1,"false-label":0},on:{change:e.checkStorageServicesAllRows},model:{value:e.allStorageServices,callback:function(t){e.allStorageServices=t},expression:"allStorageServices"}},[e._v("\n                  "+e._s(e.lg.message)+"\n                ")])]}},{key:"default",fn:function(t){return[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},on:{change:e.checkStorageServicesOneRow},model:{value:t.row.storage,callback:function(a){e.$set(t.row,"storage",a)},expression:"scope.row.storage"}})]}}],null,!1,3605632393)}),e._v(" "),a("el-table-column",{staticClass:"tc",attrs:{width:"120"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{attrs:{indeterminate:e.indeEmailServices,"true-label":1,"false-label":0},on:{change:e.checkEmailServicesAllRows},model:{value:e.allEmailServices,callback:function(t){e.allEmailServices=t},expression:"allEmailServices"}},[e._v("\n                    "+e._s(e.lg.emailNotify)+"\n                  ")])],1)]}},{key:"default",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{attrs:{disabled:!t.row.storage,"true-label":1,"false-label":0},on:{change:e.checkMailServicesOneRow},model:{value:t.row.email,callback:function(a){e.$set(t.row,"email",a)},expression:"scope.row.email"}})],1)]}}],null,!1,245890499)}),e._v(" "),a("el-table-column",{staticClass:"nowrap",attrs:{width:"120"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{attrs:{indeterminate:e.indeAppServices,"true-label":1,"false-label":0},on:{change:e.checkAppServicesAllRows},model:{value:e.allAppServices,callback:function(t){e.allAppServices=t},expression:"allAppServices"}},[e._v("\n                  "+e._s(e.lg.app)+"\n                  "),a("el-tooltip",{attrs:{placement:"top","popper-class":"tooltip-pageinfo"}},[a("i",{staticClass:"el-icon-info"}),e._v(" "),a("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(e.lg.tipsSetAppPush)},slot:"content"})])],1)],1)]}},{key:"default",fn:function(t){return[a("span",{staticClass:"blue-checkbox-box"},[a("el-checkbox",{staticClass:"tc",attrs:{disabled:!t.row.storage,"true-label":1,"false-label":0},on:{change:e.checkAppServicesOneRow},model:{value:t.row.app,callback:function(a){e.$set(t.row,"app",a)},expression:"scope.row.app"}})],1)]}}],null,!1,2084535667)})],1)],1)],1)]):e._e()],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isSetTemplate,expression:"!isSetTemplate"}],staticClass:"el-form-item-fieldsets"},[a("el-form-item",{attrs:{label:e.lg.email+": ",rules:{required:!0}}},[a("div",{staticClass:"wrap-mails"},e._l(e.mails_tmp,function(t,i){return a("div",{key:i,staticClass:"clearfix mb10"},[a("el-input",{staticClass:"fl",staticStyle:{width:"200px"},attrs:{placeholder:e.lg.email+" #"+(i+1)},on:{blur:function(t){return e.trimMail(i)}},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item['val']"}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:i<1,expression:"index<1"}],staticClass:"add-btn el-icon-plus fl",staticStyle:{"border-right":"1px solid #fff"},on:{click:e.addEmail}}),e._v(" "),i>0?a("i",{staticClass:"add-btn el-icon-minus fl",on:{click:function(a){return e.removeEmail(t)}}}):e._e(),e._v(" "),a("span",{staticClass:"link-btn fl ml10",on:{click:function(a){return e.sendMailFn(t)}}},[e._v(e._s(e.lg.testMail))]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{content:e.lg.testMailTips,placement:"top"}},[a("span",{staticClass:"email-help ml5 el-icon-info fl"})])],1)}),0)])],1),e._v(" "),e.isSelf&&e.isSetTemplate?a("el-form-item",{attrs:{prop:"accidle"}},[a("div",{attrs:{slot:"label"},slot:"label"},[e._v("\n      "+e._s(e.lg.appNotify)+":  "+e._s(e.lg.asDefaultSetting)+"\n      "),e.lg.asDefaultSettingTips?a("el-tooltip",{staticClass:"item",attrs:{"popper-class":"el-txt-tips",effect:"dark",placement:"top"}},[a("div",{staticStyle:{"max-width":"280px","line-height":"21px"},attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.lg.asDefaultSettingTips))]),e._v(" "),a("span",{staticClass:"email-help el-icon-info"})]):e._e()],1),e._v(" "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.data.asdefault,callback:function(t){e.$set(e.data,"asdefault",t)},expression:"data.asdefault"}})],1):e._e(),e._v(" "),a("el-form-item",{staticClass:"tr pt10"},[a("el-button",{on:{click:e.hide}},[e._v(e._s(e.lg.cancel))]),e._v(" "),a("el-button",{attrs:{type:"primary","native-type":"submit",loading:e.isloading}},[e._v(e._s(e.lg.save))])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(e){a("KuRG")},null,null);t.default=c.exports},KuRG:function(e,t){},iKHV:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"i",function(){return s}),a.d(t,"j",function(){return l}),a.d(t,"a",function(){return n}),a.d(t,"m",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"l",function(){return c}),a.d(t,"k",function(){return d}),a.d(t,"f",function(){return u}),a.d(t,"h",function(){return p}),a.d(t,"g",function(){return h}),a.d(t,"e",function(){return m}),a.d(t,"n",function(){return v}),a.d(t,"c",function(){return g}),a.d(t,"o",function(){return w});var i=function(e){return!(!e||!/^([0-9A-Za-z\_\@\.]){2,30}$/.test(e))},s=function(e){return!!(e&&e.length<=20&&e.length>=6)},l=function(e){return"123456"!=e},n=100,r=64,o=150,c=function(e){return!!e.match(/^(\+[0-9]{1,20}|[0-9]{1,21})$/)},d=function(e){return e.indexOf("@")>0&&e.indexOf(".")>0&&!!e.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)},u=function(e){return/(^[a-zA-Z\d]{6,15}$)/.test(e)},p=function(e){return/(^[a-zA-Z\d]{5,18}$)/.test(e)},h=function(e){for(var t,a=[],i=!0,s=0,l=e.length;s<l;s++)if(t=e[s].replace(/^\s+|\s+$/gm,""),a.push(t),!u(t)){i=!1;break}return{imeis:a,rs:i}},m=function(e){return!!(/^\d+(\.5)?$/.test(e)&&parseInt(e)>=0&&parseInt(e)<=5e3)},v=function(e,t){var a={beginTime:(t=t||"")?new Date(new Date(t).getTime()).setHours(0,0,0,0):(new Date).getTime()};return a.endTime=a.beginTime+864e5*e-1,a},f=function(e,t){if(e+="",t||(t=0),-1==e.indexOf(".")&&(e+="."),e+=new Array(t+1).join("0"),new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+(t+1)+"})?)\\d*$").test(e)){e="0"+RegExp.$2;var a=RegExp.$1,i=RegExp.$3.length,s=!0;if(i==t+2){if(i=e.match(/\d/g),parseInt(i[i.length-1])>4)for(var l=i.length-2;l>=0&&(i[l]=parseInt(i[l])+1,10==i[l]);l--)i[l]=0,s=1!=l;e=i.join("").replace(new RegExp("(\\d+)(\\d{"+t+"})\\d$"),"$1.$2")}return s&&(e=e.substr(1)),parseFloat((a+e).replace(/\.$/,""))}return e+""},g=function(e,t,a){return 0==e&&"temperature"!=t||void 0===a?e:"distance"==t?f("2"==a?.621*e:e,2):"pressure"==t?["",f(.145*e,2),f(.01*e,2),f(e,2)][a]:"capacity"==t?["",f(e,2),f(.264*e,2),f(.22*e,2)][a]:"temperature"==t?f("2"==a?1.8*e+32:e,2):"fuelefficiency"==t?["",f(e,2),f(62.1/(.264*e),2),f(62.1/(.22*e),2)][a]:e},w=function(e,t,a){return 0==e&&"temperature"!=t||void 0===a?e:"distance"==t&&1!=a?f(e/.621,2):"pressure"==t?["",f(e/.145,2),f(e/.01,2),f(e,2)][a]:"capacity"==t?["",f(e,2),f(e/.264,2),f(e/.22,2)][a]:"temperature"==t?f("2"==a?(e-32)/1.8:e,2):"fuelefficiency"==t?["",f(e,2),f(62.1/(.264*e),2),f(62.1/(.22*e),2)][a]:e}}});