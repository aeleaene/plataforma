webpackJsonp([35],{GnB0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("gyMJ"),a={data:function(){return{dialogVisible:!1,records:[],total:0,start:0,pagesize:5,loading:!1,multipleSelection:[]}},components:{},methods:{indexMethod:function(e){return this.start+(e+1)},setVisible:function(e){if(this.dialogVisible=e,e=!0){var t=this;setTimeout(function(){t.getList()},100)}},getList:function(){var e=this;this.loading=!0,Object(n._52)({start:this.start,pagecount:this.pagesize}).then(function(t){e.loading=!1,e.records=t.records,e.total=t.totalcount}).catch(function(){e.loading=!1})},fmtTime:function(e,t,i,n){return i?this.utcToLocal(i):"-"},handleCurrentChange:function(e){this.start=(Number(e)-1)*this.pagesize,this.getList()},backList:function(){this.detailObj={}},handleSelectionChange:function(e){this.multipleSelection=e},dialogCloseFn:function(){}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"},{name:"mouseClose",rawName:"v-mouseClose"}],staticClass:"message-dialog",attrs:{title:e.lg.loginlog,"append-to-body":!0,visible:e.dialogVisible,modal:!0,"show-close":!0,width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t},closed:e.dialogCloseFn}},[i("div",[i("div",{staticClass:"mb15"}),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"message-table",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:e.records,"row-key":"id",stripe:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{label:e.lg.serialNum,type:"index",align:"center",index:e.indexMethod,fixed:"left",width:"48"}}),e._v(" "),i("el-table-column",{attrs:{label:e.lg.dateTime,prop:"createtime",width:"160",formatter:e.fmtTime}}),e._v(" "),i("el-table-column",{attrs:{label:e.lg.loginclient,prop:"loginclient",width:"160"}}),e._v(" "),i("el-table-column",{attrs:{label:e.lg.loginip,prop:"loginip",width:"160"}}),e._v(" "),i("el-table-column",{attrs:{label:e.lg.agentinfo},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{directives:[{name:"tip",rawName:"v-tip",value:{txt:t.row.agentinfo,align:"centerBottom"},expression:"{txt:scope.row.agentinfo,align:'centerBottom'}"}],staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",color:"#409EFF",cursor:"pointer"}},[e._v("\n            "+e._s(t.row.agentinfo)+"\n          ")])]}}])})],1),e._v(" "),e.total?i("el-pagination",{attrs:{"page-size":e.pagesize,background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}}):e._e()],1)])},staticRenderFns:[]};var o=i("VU/8")(a,l,!1,function(e){i("kHQY")},null,null);t.default=o.exports},kHQY:function(e,t){}});