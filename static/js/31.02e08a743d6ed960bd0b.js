webpackJsonp([31],{N6ZH:function(t,e){},vSeb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),s=i.n(a),n={components:{breadNav:i("hWqa").a},data:function(){return{active_title:"",activeMechanismId:"",currentNodeKey:"",selValue:"",putValue:"",treeListData:[],activeItem:"",defaultProps:{children:"child",label:"mechanism_name"},dataArr:[],xiangqingindex:0,qiangguishow:!1,xiangqingData:[],fromQiangZhi:!1,vidio:!1,loading:null}},methods:{juese:function(t){return 1==t?"系统管理员":2==t?"枪支管理员":3==t?"用枪员":"领导"},openVidio:function(){this.vidio=!0},closeVidio:function(){this.vidio=!1},subSearch:function(){this.selValue?this.putValue?this.search(this.activeMechanismId):this.$message({message:"请输入您要搜索的内容",type:"warning"}):this.$message({message:"请选择搜索条件",type:"warning"})},getDataList:function(t){var e=this,i={state:1};t&&(i.id=t);var a=this.$store.state.key,s=this.$methods.mkSign(i,a),n=this.$gscookie.getCookie("gun"),o=new URLSearchParams;t&&o.append("id",i.id),o.append("sign",s),o.append("token",n),o.append("state",i.state),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=GetDeviceList&a=index",method:"POST",changeOrigin:!0,data:o}).then(function(t){200==t.data.code&&(e.dataArr=t.data.data)}).catch(function(t){console.log(t)})},search:function(t){var e=this,i=this.selValue,a=this.putValue,s={mechanism_id:t,state:1};s[i]=a;var n=this.$store.state.key,o=this.$methods.mkSign(s,n),c=this.$gscookie.getCookie("gun"),d=new URLSearchParams;d.append(i,s[i]),d.append("mechanism_id",s.mechanism_id),d.append("state",s.state),d.append("sign",o),d.append("token",c),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=GetDeviceList&a=index",method:"POST",changeOrigin:!0,data:d}).then(function(t){200==t.data.code&&(e.dataArr=t.data.data)}).catch(function(t){console.log(t)})},getTreeList:function(){var t=this,e=this.$store.state.key,i={p:1,ps:6,mechanism_id:1},a=this.$methods.mkSign(i,e),s=this.$gscookie.getCookie("gun"),n=new URLSearchParams;n.append("p",i.p),n.append("ps",i.ps),n.append("mechanism_id",i.mechanism_id),n.append("sign",a),n.append("token",s),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=mechanism&a=mechanisms_tree",method:"POST",changeOrigin:!0,data:n}).then(function(e){t.treeListData=e.data.data.list}).catch(function(t){console.log(t)}),this.hasData=!0},handleNodeClick:function(t){this.activeMechanismId=t.id,this.activeItem=t,this.active_title=t.mechanism_name,this.getDataList(t.id)},look:function(t){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),this.xiangqingindex=t,this.getXiangQing(t.id)},close:function(){this.qiangguishow=!1,this.gunXQ=!1,this.xiangqingindex=0,this.fromQiangZhi&&(this.fromQiangZhi=!1,this.$router.go(-1))},getXiangQing:function(t){var e=this,i=this.$store.state.key,a={device_id:t},s=this.$methods.mkSign(a,i),n=this.$gscookie.getCookie("gun"),o=new URLSearchParams;o.append("device_id",a.device_id),o.append("sign",s),o.append("token",n),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=GetDeviceList&a=devicegun",method:"POST",changeOrigin:!0,data:o}).then(function(t){200==t.data.code&&(e.loading.close(),e.xiangqingData=t.data.data,console.log(t.data.data),e.xiangqingData.length?e.qiangguishow=!0:(e.$message("暂无数据"),e.qiangguishow=!1))}).catch(function(t){console.log(t)})}},created:function(){var t=this.$gscookie.getCookie("message_obj"),e=this.$gscookie.getCookie("mechanism_id");this.currentNodeKey=this.$gscookie.getCookie("mechanism_id"),this.activeMechanismId=e,3==t.role_id&&this.$router.push({name:"GuiJi"}),this.getTreeList(),this.getDataList();var i=this.$gscookie.getCookie("gun");"{}"==s()(i)&&this.$router.push("/loginput");var a=this.$route.params;a.guncabinet_id&&(this.qiangguishow=!0,this.fromQiangZhi=!0,this.getXiangQing(a.guncabinet_id))}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qianggui"},[a("div",{staticClass:"tree-menu"},[a("h3",[t._v("枪柜详情")]),t._v(" "),a("div",{staticClass:"nav-wrap"},[a("el-tree",{attrs:{data:t.treeListData,props:t.defaultProps,"highlight-current":!0,accordion:"","node-key":"id","current-node-key":t.currentNodeKey,"default-expand-all":""},on:{"node-click":t.handleNodeClick}})],1)]),t._v(" "),a("div",{staticClass:"top-nav"},[a("div",{staticClass:"bread-wrap"},[a("breadNav",{attrs:{title:"枪柜详情",next:t.active_title}})],1),t._v(" "),a("div",{staticClass:"search-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selValue,expression:"selValue"}],staticClass:"sel",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selValue=e.target.multiple?i:i[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("请选择搜索类型")]),t._v(" "),a("option",{attrs:{value:"vtype"}},[t._v("柜子类型")]),t._v(" "),a("option",{attrs:{value:"vdevSN"}},[t._v("柜子名称")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.putValue,expression:"putValue"}],staticClass:"textput",attrs:{type:"text",placeholder:"请输入搜素关键字"},domProps:{value:t.putValue},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.subSearch(e):null},input:function(e){e.target.composing||(t.putValue=e.target.value)}}}),t._v(" "),a("button",{staticClass:"sub",on:{click:t.subSearch}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"page-index"},[a("el-pagination",{attrs:{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3}})],1),t._v(" "),a("div",{staticClass:"content"},[t.dataArr.length?t._e():a("div",{staticClass:"none-data"},[t._v("暂时没有数据......")]),t._v(" "),t.dataArr.length?a("div",{staticClass:"qianggui-content"},[a("div",{staticClass:"title"},[t._v("弹柜总量："+t._s(t.dataArr.length))]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"list"},t._l(t.dataArr,function(e,s){return a("div",{key:s,staticClass:"item"},[a("p",[t._v("单位："+t._s(e.org_name))]),t._v(" "),a("img",{attrs:{src:i("P7zm"),alt:"枪柜"}}),t._v(" "),a("p",[t._v("枪柜类型："+t._s(e.vtype))]),t._v(" "),a("p",[t._v("枪柜名称："+t._s(e.vdevSN))]),t._v(" "),a("h6",{staticStyle:{color:"#fff"},on:{click:function(i){t.look(e)}}},[t._v("    ")]),t._v(" "),t._e()])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qiangguishow||t.vidio,expression:"qiangguishow || vidio"}],staticClass:"xiangqing-wrap"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.qiangguishow,expression:"qiangguishow"}],staticClass:"xiangqing"},[a("div",{staticClass:"del",on:{click:t.close}},[t._v("X")]),t._v(" "),a("button",{staticClass:"close",on:{click:t.close}},[t._v("取消")]),t._v(" "),a("div",{staticClass:"content"},[t.xiangqingData.length?t._e():a("div",{staticClass:"nodata"},[t._v("暂无数据")]),t._v(" "),t._l(t.xiangqingData,function(e,i){return a("div",{key:i,staticClass:"small",class:{big:"95式"==e.gtype}},[a("p",[t._v("枪支类型："+t._s(e.gtype))]),t._v(" "),a("div",{staticClass:"bg"}),t._v(" "),e.child?a("div",{staticClass:"text"},[a("div",{staticClass:"a",attrs:{title:"警号"}},[t._v(t._s(e.child.police_number))]),t._v(" "),a("div",{staticClass:"b",attrs:{title:"持枪人"}},[t._v(t._s(e.child.uname?e.child.uname:""))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.gun_code,expression:"item.gun_code"}],staticClass:"c",attrs:{title:"枪支证号"}},[t._v(t._s(e.gun_code))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.child.mobile,expression:"item.child.mobile"}],staticClass:"d",attrs:{title:"手机号"}},[t._v(t._s(e.child.mobile?e.child.mobile:""))])]):t._e(),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(1==e.nStauts?"在位":"不在位"))])])})],2)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.vidio,expression:"vidio"}],staticClass:"vidio"},[a("button",{staticClass:"close",on:{click:t.closeVidio}},[t._v("关闭")])])])]):t._e()]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alert",staticStyle:{display:"none"}},[i("div",{staticClass:"text-wrap"},[i("div",{staticClass:"text-title"},[t._v("新增人员")]),t._v(" "),i("div",{staticClass:"text-content"},[i("span",[t._v("名称:")]),t._v(" "),i("input",{attrs:{type:"text"}}),t._v(" "),i("span",[t._v("编号:")]),t._v(" "),i("input",{attrs:{type:"text"}}),t._v(" "),i("span",[t._v("枪支数量:")]),t._v(" "),i("input",{attrs:{type:"text"}}),t._v(" "),i("span",[t._v("警员数量:")]),t._v(" "),i("input",{attrs:{type:"text"}}),t._v(" "),i("span",[t._v("所属单位:")]),t._v(" "),i("input",{attrs:{type:"text"}}),t._v(" "),i("span",[t._v("创建日期:")]),t._v(" "),i("input",{attrs:{type:"text"}})]),t._v(" "),i("div",{staticClass:"submit"},[t._v("确认")])])])}]};var c=i("VU/8")(n,o,!1,function(t){i("N6ZH")},"data-v-2f4cd71d",null);e.default=c.exports}});
//# sourceMappingURL=31.02e08a743d6ed960bd0b.js.map