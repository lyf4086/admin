webpackJsonp([9],{"0qJ4":function(e,t,i){"use strict";(function(e){var a=i("Dd8w"),n=i.n(a);t.a={props:{data:{type:Array,default:function(){return[]}},activeJigouId:{type:String,default:function(){return""}},activeYeMa:{type:[String,Number],default:function(){return""}},gun_xiangqing:{type:Array,default:function(){return[]}},isRemoving:{type:Boolean,default:function(){return!1}}},data:function(){return{tan1:!1,tan2:!1,tan3:!1,tan4:!1,bindalert:!1,allMiaoList:"",activeGunId:"",activeMiaoId:"",xiangqingList:[],guns:null,listShow:!1}},computed:{allDataChecked:{get:function(){return!!this.data.length&&this.data.every(function(e){return e.checked})},set:function(e){return this.data.forEach(function(t){return t.checked=e})}}},methods:{showList:function(){this.listShow=!this.listShow},childClick:function(e){this.al4(e)},toXiangQing:function(e){},al2:function(){this.tan2=!0},al3:function(e){this.$store.commit("setPoliceId",{policeuser_id:e.policeuser_id,yeMa:this.activeYeMa,jiGouId:this.activeJigouId}),this.$router.push({name:"PersonMessage"})},al4:function(e){this.tan4=!0,console.log(e),this.xiangqing(e)},close1:function(){this.tan1=!1},close2:function(){this.tan2=!1},close3:function(){this.tan3=!1},close4:function(){this.tan4=!1},miaoSpanClick:function(e,t){this.activeMiaoId=e.gunaiming_id,this.allMiaoList.forEach(function(e){return e.opacity="0.3"}),this.allMiaoList[t].opacity="1"},putChange:function(e){var t=e.target.value,i=this.allMiaoList;this.blys(t,i)},blys:function(e,t){for(var i=e,a=0;a<t.length;a++){var n=t[a].gunaiming_id.indexOf(i);this.allMiaoList[a].opacity=-1==n?"0.3":"1"}},bindshow:function(e){this.bindalert=!0,this.activeGunId=e.gun_id,this.getMiaoList(this.activeJigouId)},subBind:function(){var e=this,t=this.activeGunId,i=this.activeMiaoId;this.allMiaoList.find(function(t){return t.gunaiming_id==e.activeMiaoId})?(this.bind(t,i),this.$emit("updataView")):this.$message.error("没有该枪瞄，请重新输入")},deleteBind:function(e){var t=this,i=this;this.$confirm("确认要解除绑定吗？请三思?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.unbind(e.gun_id,e.gunaiming_id)}).catch(function(){t.$message({type:"info",message:"已取消解绑"})})},bindclose:function(){this.bindalert=!1},bind:function(e,t){var i=this,a=this.$store.state.key,n={gun_id:e,gunaiming_id:t},s=this.$methods.mkSign(n,a),o=this.$gscookie.getCookie("gun"),c=new URLSearchParams;c.append("gun_id",n.gun_id),c.append("gunaiming_id",n.gunaiming_id),c.append("sign",s),c.append("token",o),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gunaiming&a=bind",method:"POST",changeOrigin:!0,data:c}).then(function(e){200==e.data.code?(i.$message({message:"绑定成功",type:"success"}),i.bindalert=!1,i.activeMiaoId="",i.$emit("updataView")):i.$message({type:"error",message:e.data.msg})}).catch(function(e){console.log(e)})},unbind:function(e,t){var i=this,a=this.$store.state.key,n={gun_id:e,gunaiming_id:t},s=this.$methods.mkSign(n,a),o=this.$gscookie.getCookie("gun"),c=new URLSearchParams;c.append("gun_id",n.gun_id),c.append("gunaiming_id",n.gunaiming_id),c.append("sign",s),c.append("token",o),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gunaiming&a=unbind",method:"POST",changeOrigin:!0,data:c}).then(function(e){200==e.data.code&&(i.$message({message:"解除绑定成功",type:"success"}),i.$emit("updataView"))}).catch(function(e){console.log(e)})},getMiaoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,s=this.$store.state.key,o={mechanism_id:e,p:i,ps:a,isbind:1},c=this.$methods.mkSign(o,s),d=this.$gscookie.getCookie("gun"),r=new URLSearchParams;r.append("mechanism_id",o.mechanism_id),r.append("p",o.p),r.append("ps",o.ps),r.append("isbind",o.isbind),r.append("sign",c),r.append("token",d),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gunaiming&a=gunaimings",method:"POST",changeOrigin:!0,data:r}).then(function(e){var i=e.data.data.list.map(function(e){return n()({},e,{opacity:1,checked:!1})});t.allMiaoList=i,console.log("allMiaoList",t.allMiaoList)}).catch(function(e){console.log(e)})},xiangqing:function(e){var t=this,i=this.$store.state.key,a={id:e},n=this.$methods.mkSign(a,i),s=this.$gscookie.getCookie("gun"),o=new URLSearchParams;o.append("id",a.id),o.append("sign",n),o.append("token",s),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Gun&a=gun_info",method:"POST",changeOrigin:!0,data:o}).then(function(e){200==e.data.code&&(t.xiangqingList=e.data.history,t.guns=e.data.guns,console.log(e.data.guns))}).catch(function(e){console.log(e)})}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.main.addEventListener("mouseover",function(t){"item_gun"==t.target.className&&(t.target.firstElementChild.style.display="block",t.target.onmouseout=function(){var t=e(this)[0].querySelector(".check");t.onmouseover=function(){t.style.display="block"},t.checked||(e(this)[0].querySelector(".check").style.display="none")})})})}}}).call(t,i("7t+N"))},CSR1:function(e,t){},bKGX:function(e,t){},kXAC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("mvHQ"),n=i.n(a),s=i("Dd8w"),o=i.n(s),c=i("i2h9"),d=i("0qJ4"),r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"main",staticClass:"qiangmiao-content"},[e.data.length?e._e():i("div",{staticClass:"none-data"},[e._v("暂时没有数据......")]),e._v(" "),e.data.length?i("div",{staticClass:"item_list"},e._l(e.data,function(t,a){return i("div",{key:t.gun_id,ref:"item",refInFor:!0,staticClass:"item_gun",class:{dou:e.isRemoving}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"},{name:"show",rawName:"v-show",value:t.checked,expression:"item.checked"}],staticClass:"check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(i){var a=t.checked,n=i.target,s=!!n.checked;if(Array.isArray(a)){var o=e._i(a,null);n.checked?o<0&&e.$set(t,"checked",a.concat([null])):o>-1&&e.$set(t,"checked",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(t,"checked",s)}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"del_one"},[e._v("X")]),e._v(" "),i("div",{staticClass:"left"},[i("div",{staticClass:"btn",attrs:{title:"枪支编号"}},[i("p",[e._v(e._s(t.gun_code))])]),e._v(" "),i("div",{staticClass:"btn",attrs:{title:"枪支类型"}},[e._v(e._s(t.gtype||"暂无"))]),e._v(" "),i("div",{staticClass:"btn",attrs:{title:"所属机构"}},[e._v(e._s(t.mechanism_name))]),e._v(" "),i("div",{staticClass:"btn text",attrs:{title:"枪柜编号"},on:{click:function(i){e.toXiangQing(t)}}},[i("p",[e._v(e._s(t.guncabinet_code||"无"))])])]),e._v(" "),e._m(0,!0),e._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"btn",attrs:{title:"枪锁位"}},[e._v("枪锁位："+e._s(t.gposition||"无"))]),e._v(" "),i("div",{staticClass:"btn text",attrs:{title:"枪瞄编号"}},[0!=t.gunaiming_id?i("p",{staticClass:"jiebang",attrs:{title:"IMEI号为："+t.IMEI+"，点击可解绑"},on:{click:function(i){e.deleteBind(t)}}},[e._v(e._s(t.IMEI))]):i("p",{staticStyle:{color:"#3492c9","text-decoration":"underline"},on:{click:function(i){e.bindshow(t)}}},[e._v("去绑定枪瞄")])]),e._v(" "),i("div",{staticClass:"btn",attrs:{title:"持枪警员，点击查看该人员详情"}},[t.policeuser_name?i("span",{on:{click:function(i){e.al3(t)}}},[e._v(e._s(t.policeuser_name))]):e._e(),e._v(" "),t.policeuser_name?e._e():i("span",[e._v("-----")])]),e._v(" "),i("div",{staticClass:"btn",staticStyle:{color:"#3492c9","text-decoration":"underline"},attrs:{title:"点击查看该枪支详情"},on:{click:function(i){e.al4(t.gun_id)}}},[e._v("详情")])])])})):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tan1||e.tan2||e.tan3||e.tan4||e.bindalert,expression:"tan1||tan2||tan3||tan4||bindalert"}],staticClass:"zhezhao"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.tan1,expression:"tan1"}],staticClass:"alert alert1"},[i("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("我是枪柜名称弹窗")]),e._v(" "),i("button",{staticClass:"close",on:{click:e.close1}},[e._v("X")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tan2,expression:"tan2"}],staticClass:"alert alert2"},[i("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("我是枪瞄编号弹窗")]),e._v(" "),i("button",{staticClass:"close",on:{click:e.close2}},[e._v("X")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tan3,expression:"tan3"}],staticClass:"alert alert3"},[i("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("我是所属警员弹窗")]),e._v(" "),i("button",{staticClass:"close",on:{click:e.close3}},[e._v("X")])]),e._v(" "),e.tan4?i("div",{staticClass:"alert alert4"},[i("div",{staticClass:"del",on:{click:e.close4}},[e._v("X")]),e._v(" "),i("button",{staticClass:"close",on:{click:e.close4}},[e._v("取消")]),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"t t1"},[e._v("机构名称:"+e._s(e.guns.mechanism_name))]),e._v(" "),i("div",{staticClass:"t t2"},[e._v("用枪人:"+e._s(e.guns.policeName))]),e._v(" "),i("div",{staticClass:"t t3"},[e._v("枪支类型:"+e._s(e.guns.gname))]),e._v(" "),i("div",{staticClass:"t t4"},[e._v("枪柜编号:"+e._s(e.guns.guncabinet_code))]),e._v(" "),i("div",{staticClass:"t t5"},[e._v("枪锁位："+e._s(e.guns.gposition))]),e._v(" "),i("div",{staticClass:"t t6"},[e._v("枪瞄编号："+e._s(e.guns.IMEI))]),e._v(" "),i("div",{staticClass:"t t7"},[e._v("枪支编号："+e._s(e.guns.gun_code))]),e._v(" "),i("div",{staticClass:"t t8",on:{click:e.showList}},[e._v("历史记录")]),e._v(" "),i("div",{staticClass:"r1"}),e._v(" "),i("div",{staticClass:"r2"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.listShow,expression:"listShow"}],staticClass:"m-list"},[e.xiangqingList.length?i("div",{staticClass:"text"},[e._m(1),e._v(" "),i("div",{staticClass:"list_wrap"},e._l(e.xiangqingList,function(t,a){return i("div",{key:a,staticClass:"list"},[i("span",[e._v(e._s(a+1))]),e._v(" "),i("span",[e._v(e._s(t.usrename))]),e._v(" "),i("span",[e._v(e._s(t.policeNum))]),e._v(" "),i("span",[e._v(e._s(t.gtype))]),e._v(" "),i("span",[e._v(e._s(t.oprtime))]),e._v(" "),i("span",[e._v(e._s(t.planTime))]),e._v(" "),i("span",[e._v(e._s(t.tasktype))])])}))]):e._e()])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.bindalert,expression:"bindalert"}],staticClass:"bingbox"},[i("button",{staticClass:"close",on:{click:e.bindclose}},[e._v("X")]),e._v(" "),i("p",{staticStyle:{display:"none"}},[e._v(e._s(e.activeJigouId))]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.activeMiaoId,expression:"activeMiaoId"}],staticClass:"text",attrs:{type:"text",placeholder:"请输入枪瞄ID"},domProps:{value:e.activeMiaoId},on:{input:[function(t){t.target.composing||(e.activeMiaoId=t.target.value)},e.putChange]}}),e._v(" "),i("div",{staticClass:"m-item-wrap"},[0==e.allMiaoList.length?i("div",{staticClass:"no-data"},[e._v("该机构下暂时没有枪瞄数据")]):e._e(),e._v(" "),e._l(e.allMiaoList,function(t,a){return i("div",{key:a,staticClass:"m-item",style:{opacity:t.opacity}},[i("span",{attrs:{title:"IMEI"},on:{click:function(i){e.miaoSpanClick(t,a)}}},[e._v(e._s(t.IMEI))])])})],2),e._v(" "),i("button",{staticClass:"sub",on:{click:e.subBind}},[e._v("确认绑定")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"center"},[t("div",{staticClass:"bg"}),this._v(" "),t("div",{staticClass:"bg2"}),this._v(" "),t("div",{staticClass:"gun"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"title"},[i("span"),e._v(" "),i("span",[e._v("用枪人")]),e._v(" "),i("span",[e._v("警员编号")]),e._v(" "),i("span",[e._v("枪支类型")]),e._v(" "),i("span",[e._v("借出时间")]),e._v(" "),i("span",[e._v("归还时间")]),e._v(" "),i("span",[e._v("用途类型")])])}]};var u=function(e){i("bKGX")},l=i("VU/8")(d.a,r,!1,u,"data-v-b73dadc2",null).exports,h=i("hWqa"),g=i("162o"),p={components:{LeftNav:c.a,Content:l,breadNav:h.a},data:function(){return{hasData:!1,alert:!1,treeData:"",xiugai:!1,xiugaiData:null,changedGtype:"",changedCode:"",active_jigou:"",activeJiGouId:"",currentNodeKey:"",active_title:"",activeDataList:[],defaultProps:{children:"child",label:"mechanism_name"},add_gun:{gun_type:"",gun_number:""},optionStr:"",selValue:"",putValue:"",pageTotal:null,active_yema:"",currentPage:1,checkPerson:"",checkedPersonData:"",noCheckPerson:!1,allPersonList:"",isRemoving:!1,sync:0}},methods:{change11:function(e){},putFocus:function(){this.noCheckPerson=!0},putBlur:function(){var e=this;Object(g.setTimeout)(function(){e.noCheckPerson=!1},200)},onePersonClick:function(e){this.checkPerson="名字："+e.policeuser_name+" , 警员ID："+e.policeuser_id,this.checkedPersonData=e},updataView:function(){this.getDataList(this.active_jigou.mechanism_id,this.active_yema)},currentChange:function(e){this.active_yema=e,this.getDataList(this.activeJiGouId,e)},subSearch:function(){this.selValue?this.putValue?this.search(1,this.putValue):this.$message.error("请输入您要搜索的内容"):this.$message({message:"请选择搜索条件",type:"error"})},getOptionStr:function(){var e=this,t=this.$gscookie.getCookie("gun"),i=this.$store.state.key,a=this.$methods.mkSign({},i),n=new URLSearchParams;n.append("sign",a),n.append("token",t),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gun&a=gun_type",method:"POST",changeOrigin:!0,data:n}).then(function(t){var i=t.data.gtype.map(function(e){return"<option value="+e.id+">"+e.type_name+"</option>"});e.optionStr=i}).catch(function(e){console.log(e)})},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments[3],s={p:e,ps:"6"},o=this.$gscookie.getCookie("gun"),c=this.selValue;s[c]=t;var d=this.$store.state.key,r=this.$methods.mkSign(s,d),u=new URLSearchParams;u.append("p",s.p),u.append("ps",s.ps),u.append(c,s[c]),u.append("sign",r),u.append("token",o),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=search&a=guns",method:"POST",changeOrigin:!0,data:u}).then(function(e){200==e.data.code&&0!=e.data.data.length&&(i.activeDataList=e.data.data.list,a&&i.$refs.myChild.childClick(n)),i.selValue="",i.putValue="",i.pageTotal=null}).catch(function(e){console.log(e)})},modify:function(){var e=this.activeDataList.filter(function(e){return e.checked});0!=e.length?e.length>1?this.$message({message:"一次只能修改一条数据",type:"warning"}):(this.xiugai=!0,this.xiugaiData=e[0]):this.$message("请选择要修改的枪支")},subChange:function(){var e=this,t=this.changedGtype?this.changedGtype:this.xiugaiData.gtype,i=this.changedCode||this.xiugaiData.gun_code,a=this.active_jigou.mechanism_id,n=this.$store.state.key,s={mechanism_id:a,gun_id:this.xiugaiData.gun_id,gun_code:i,gtype:t},o=this.$methods.mkSign(s,n),c=this.$gscookie.getCookie("gun"),d=new URLSearchParams;d.append("mechanism_id",s.mechanism_id),d.append("gun_id",s.gun_id),d.append("gun_code",s.gun_code),d.append("gtype",s.gtype),d.append("sign",o),d.append("token",c),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gun&a=rewrite",method:"POST",changeOrigin:!0,data:d}).then(function(t){if(200==t.data.code){e.$message({message:"修改枪支成功",type:"success"}),e.xiugai=!1,e.getDataList(e.active_jigou.mechanism_id,e.active_yema),e.changedGtype="",e.changedCode=""}402!=t.data.code||e.$message({message:t.data.msg,type:"error"})}).catch(function(e){console.log(e)})},addGun:function(){var e=this;this.alert=!0;var t=this.$store.state.key,i={mechanism_id:this.active_jigou.mechanism_id,p:1,ps:666666},a=this.$methods.mkSign(i,t),n=this.$gscookie.getCookie("gun"),s=new URLSearchParams;s.append("p",i.p),s.append("ps",i.ps),s.append("mechanism_id",i.mechanism_id),s.append("sign",a),s.append("token",n),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=policeuser&a=policeusers",method:"POST",changeOrigin:!0,data:s}).then(function(t){e.allPersonList=t.data.data.list}).catch(function(e){console.log(e)})},subAddGun:function(){var e=this.add_gun.gun_type,t=this.add_gun.gun_number,i=this.checkedPersonData.policeuser_id||"",a=this.checkedPersonData.policeuser_name||"",n=this.active_jigou.mechanism_id;e&&t.trim()?(this.addData(n,e,t,i,a),this.getDataList(n,this.active_yema),this.add_gun.gun_type=this.add_gun.gun_number=""):this.$message.error("有未填选项")},deleteGun:function(){var e=this;this.activeDataList.some(function(e){return e.checked})?this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=e.activeDataList.filter(function(e){return e.checked}).map(function(e){return e.gun_id}).join(",");e.deleteData(t)}).catch(function(){e.$message({type:"info",message:"已取消删除"})}):this.$message.error("请选择需要删除的选项")},del:function(){this.alert=!1},handleNodeClick:function(e){this.$refs.page.internalCurrentPage=1,this.currentNodeKey=e.mechanism_id,this.active_jigou=e,this.activeJiGouId=e.mechanism_id,this.active_title=e.mechanism_name,this.getDataList(e.mechanism_id)},getTreeData:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=this.$store.state.key,a={p:1,ps:10},n=this.$methods.mkSign(a,i),s=this.$gscookie.getCookie("gun"),o=new URLSearchParams;o.append("p",a.p),o.append("ps",a.ps),o.append("sign",n),o.append("token",s),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=mechanism&a=mechanisms_tree",method:"POST",changeOrigin:!0,data:o}).then(function(i){e.treeData=i.data.data.list,e.active_title=i.data.data.list[0].mechanism_name,e.active_jigou=i.data.data.list[0],e.hasData=!0,t&&(e.currentNodeKey=i.data.data.list[0].id)}).catch(function(e){console.log(e)})},getDataList:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.$store.state.key,n={mechanism_id:e,p:i,ps:9},s=this.$methods.mkSign(n,a),c=this.$gscookie.getCookie("gun"),d=new URLSearchParams;d.append("mechanism_id",n.mechanism_id),d.append("p",n.p),d.append("ps",n.ps),d.append("sign",s),d.append("token",c),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gun&a=guns",method:"POST",changeOrigin:!0,data:d}).then(function(e){var i=e.data.data.list.map(function(e){return o()({},e,{checked:!1})});t.activeDataList=i,t.pageTotal=1*e.data.data.psum}).catch(function(e){console.log(e)})},addData:function(e,t,i,a,n){var s=this,o=this.$store.state.key,c={mechanism_id:e,gun_code:t,gtype:i,policeuser_id:a,policeuser_name:n},d=this.$methods.mkSign(c,o),r=this.$gscookie.getCookie("gun"),u=new URLSearchParams;u.append("mechanism_id",c.mechanism_id),u.append("gun_code",c.gun_code),u.append("gtype",c.gtype),u.append("policeuser_id",c.policeuser_id),u.append("policeuser_name",c.policeuser_name),u.append("sign",d),u.append("token",r),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gun&a=rewrite",method:"POST",changeOrigin:!0,data:u}).then(function(e){200==e.data.code&&(s.alert=!1,s.$message({message:"添加枪支成功",type:"success"}),s.checkPerson="")}).catch(function(e){console.log(e)})},deleteData:function(e){var t=this,i=this.$store.state.key,a={gun_id:e},n=this.$methods.mkSign(a,i),s=this.$gscookie.getCookie("gun"),o=new URLSearchParams;o.append("gun_id",a.gun_id),o.append("sign",n),o.append("token",s),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gun&a=del",method:"POST",changeOrigin:!0,data:o}).then(function(e){200==e.data.code&&(t.$message({message:"删除成功",type:"success"}),t.activeDataList.filter(function(e){return e.checked}).map(function(e){return e.gun_id}).length==t.activeDataList.length?t.getDataList(t.active_jigou.mechanism_id,t.active_yema-1):t.getDataList(t.active_jigou.mechanism_id,t.active_yema)),401==e.data.code&&t.$message({message:"删除失败！请先解除绑定",type:"error"})}).catch(function(e){console.log(e)})},bind:function(e,t){var i=this,a=this.$store.state.key,n={gun_id:e,gunaiming_id:t},s=this.$methods.mkSign(n,a),o=this.$gscookie.getCookie("gun"),c=new URLSearchParams;c.append("gun_id",n.gun_id),c.append("gunaiming_id",n.gunaiming_id),c.append("sign",s),c.append("token",o),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gunaiming&a=bind",method:"POST",changeOrigin:!0,data:c}).then(function(e){200==e.data.code&&i.$message("绑定成功")}).catch(function(e){console.log(e)})},unbind:function(e,t){var i=this,a=this.$store.state.key,n={gun_id:e,gunaiming_id:t},s=this.$methods.mkSign(n,a),o=this.$gscookie.getCookie("gun"),c=new URLSearchParams;c.append("gun_id",n.gun_id),c.append("gunaiming_id",n.gunaiming_id),c.append("sign",s),c.append("token",o),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=gunaiming&a=unbind",method:"POST",changeOrigin:!0,data:c}).then(function(e){200==e.data.code&&i.$message("解除绑定成功")}).catch(function(e){console.log(e)})}},created:function(){this.getOptionStr(),this.sync=this.$gscookie.getCookie("sync"),this.activeJiGouId=this.$gscookie.getCookie("mechanism_id"),3==this.$gscookie.getCookie("message_obj").role_id&&this.$router.push({name:"GuiJi"});var e=this.$store.state.jiGouId,t=this.$store.state.yeMa,i=this.$gscookie.getCookie("gun");"{}"!=n()(i)?e||t?(this.currentNodeKey=e,this.activeJiGouId=e,this.currentPage=t-0,this.getTreeData(!1),this.getDataList(e,t),this.$store.commit("emptyNumber")):(this.getTreeData(),this.getDataList(this.activeJiGouId,1)):this.$router.push("/loginput")}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hasData?i("div",{staticClass:"jigou"},[i("div",{staticClass:"tree-menu"},[i("h3",[e._v("枪支管理")]),e._v(" "),i("div",{staticClass:"nav-wrap"},[i("el-tree",{attrs:{data:e.treeData,props:e.defaultProps,accordion:"","highlight-current":!0,"node-key":"id","current-node-key":e.currentNodeKey,"default-expand-all":""},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),i("div",{staticClass:"top-nav"},[i("div",{staticClass:"bread-wrap"},[i("breadNav",{attrs:{title:"枪支管理",next:e.active_title}})],1),e._v(" "),i("div",{staticClass:"search-wrap"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selValue,expression:"selValue"}],staticClass:"sel",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selValue=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("请选择搜索类型")]),e._v(" "),i("option",{attrs:{value:"gun_code"}},[e._v("枪支编号")]),e._v(" "),i("option",{attrs:{value:"policeuser_id"}},[e._v("持枪人")])]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.putValue,expression:"putValue"}],staticClass:"textput",attrs:{type:"text",placeholder:"请输入搜素关键字"},domProps:{value:e.putValue},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.subSearch(t):null},input:function(t){t.target.composing||(e.putValue=t.target.value)}}}),e._v(" "),i("button",{staticClass:"sub",on:{click:e.subSearch}})])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.pageTotal,expression:"pageTotal"}],staticClass:"page-index"},[i("el-pagination",{ref:"page",attrs:{"page-size":9,"pager-count":9,layout:"prev, pager, next","current-page":e.currentPage,total:e.pageTotal},on:{"current-change":e.currentChange}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"message-box"},[i("p",[e._v("当前显示 *** "+e._s(e.active_title)+" *** 下的枪支信息")])]),e._v(" "),1!=e.sync?i("div",{directives:[{name:"show",rawName:"v-show",value:e.active_title,expression:"active_title"}],staticClass:"add-del"},[i("button",{on:{click:e.addGun}},[e._v("添加枪支")]),e._v(" "),i("button",{on:{click:e.deleteGun}},[e._v("删除枪支")]),e._v(" "),i("button",{on:{click:e.modify}},[e._v("修改枪支")])]):e._e(),e._v(" "),i("div",{staticClass:"content"},[i("Content",{ref:"myChild",attrs:{data:e.activeDataList,activeJigouId:e.activeJiGouId,isRemoving:e.isRemoving,activeYeMa:e.active_yema},on:{updataView:e.updataView}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.alert||e.xiugai,expression:"alert||xiugai"}],staticClass:"alert"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.alert,expression:"alert"}],staticClass:"text-wrap"},[i("div",{staticClass:"text-title"},[e._v("新增枪支")]),e._v(" "),i("div",{staticClass:"text-content"},[i("div",[e._v("\n          枪支编号：\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.add_gun.gun_type,expression:"add_gun.gun_type"}],attrs:{type:"text"},domProps:{value:e.add_gun.gun_type},on:{input:function(t){t.target.composing||e.$set(e.add_gun,"gun_type",t.target.value)}}})]),e._v(" "),i("div",[e._v("\n          枪支类型：\n          "),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.add_gun.gun_number,expression:"add_gun.gun_number"}],domProps:{innerHTML:e._s(e.optionStr)},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.add_gun,"gun_number",t.target.multiple?i:i[0])}}})]),e._v(" "),i("div",[e._v("\n          所属警员：\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPerson,expression:"checkPerson"}],attrs:{type:"text",placeholder:"请输入警员ID"},domProps:{value:e.checkPerson},on:{focus:e.putFocus,blur:e.putBlur,input:function(t){t.target.composing||(e.checkPerson=t.target.value)}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.noCheckPerson,expression:"noCheckPerson"}],staticClass:"check-person"},[e.allPersonList.length?e._e():i("p",{staticStyle:{"text-align":"center"}},[e._v("该机构下暂无警员")]),e._v(" "),e._l(e.allPersonList,function(t,a){return i("div",{staticClass:"p-item",on:{click:function(i){e.onePersonClick(t)}}},[e._v(e._s(t.policeuser_name)+"，  警员ID："+e._s(t.policeuser_id))])})],2)])]),e._v(" "),i("div",{staticClass:"submit",on:{click:e.subAddGun}},[e._v("确认")]),e._v(" "),i("i",{on:{click:e.del}},[e._v("X")])]),e._v(" "),e.xiugaiData?i("div",{directives:[{name:"show",rawName:"v-show",value:e.xiugai,expression:"xiugai"}],staticClass:"xiugai"},[i("button",{staticClass:"del",on:{click:function(t){e.xiugai=!1}}},[e._v("X")]),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"change-type"},[i("span",[e._v("枪支类型："+e._s(e.xiugaiData.gtype))]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.changedGtype,expression:"changedGtype"}],staticClass:"sel-type",domProps:{innerHTML:e._s(e.optionStr)},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.changedGtype=t.target.multiple?i:i[0]},e.change11]}})]),e._v(" "),i("div",{staticClass:"change-type"},[i("span",[e._v("枪支编号："+e._s(e.xiugaiData.gun_code))]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.changedCode,expression:"changedCode"}],attrs:{type:"text"},domProps:{value:e.changedCode},on:{input:function(t){t.target.composing||(e.changedCode=t.target.value)}}})]),e._v(" "),i("button",{staticClass:"sub-wrap",on:{click:e.subChange}},[e._v("确认修改")])]):e._e()])]):e._e()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"change-type"},[t("span",[this._v("原信息")]),this._v(" "),t("span",[this._v("修改信息")])])}]};var m=i("VU/8")(p,v,!1,function(e){i("CSR1")},"data-v-3952aa74",null);t.default=m.exports}});
//# sourceMappingURL=9.545eea08fe611509b8bc.js.map