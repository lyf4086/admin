webpackJsonp([20],{"5ksm":function(t,i,n){"use strict";(function(t){var e=n("Gu7T"),a=n.n(e),s=n("162o");n.n(s);i.a={data:function(){return{dataList:[],isshow:!0,timer:null,map:null,BM:null}},methods:{move:function(){var i=t("#listwrap"),n=null;i.hover(function(){Object(s.clearInterval)(n)},function(){n=Object(s.setInterval)(function(){var n;n=t("#listwrap .item:first").height(),i.stop().animate({marginTop:-n},700,function(){i.css({marginTop:0}).find(".item:first").appendTo(i)})},2e3)}).trigger("mouseleave")},updown:function(){this.isshow=!this.isshow},initMap:function(){var t=new AMap.Map("container",{center:[116.397428,39.90923],resizeEnable:!0,zoom:13});this.map=t},mapInitLiXian:function(){BM.Config.HTTP_URL=this.$store.state.lixianStr;var t=BM.map("container","bigemap.awiawk58",{center:[39.9,116.32],zoom:1,zoomControl:!0});t.setZoom(10),this.BM=BM,this.map=t},setMarkerLiXian:function(t){var i=n("NIoa"),e=this.BM.divIcon({html:'<div class="marker-route11" style="margin-top:-50px;margin-left:-20px;">\n                      <div class="cover11" ></div>\n                      <div class="img_wrap11">\n                        <img src="'+i+'" />\n                      </div>\n                    </div>'}),a=this.BM,s=this.map,o=t.map(function(t){return a.marker([t.latitude-0,t.longitude-0],{title:t.policeName,icon:e}).addTo(s)}),r=t.map(function(t){return[t.latitude-0,t.longitude-0]});s.fitBounds(r),this.markerArr=o},getTypes:function(){var t=this.$gscookie.getCookie("gun"),i=this.$store.state.key,n=this.$methods.mkSign({},i),e=new URLSearchParams;e.append("sign",n),e.append("token",t),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=Home&c=Index&a=basic",method:"POST",changeOrigin:!0,data:e}).then(function(t){200==t.status&&console.log(t)}).catch(function(t){console.log(t)})},getData:function(t){var i=this,n={t_mechanism_id:t},e=this.$gscookie.getCookie("gun"),a=this.$store.state.key,s=this.$methods.mkSign(n,a),o=new URLSearchParams;o.append("sign",s),o.append("token",e),o.append("t_mechanism_id",n.t_mechanism_id),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=Home&c=Index&a=gunperson_info",method:"POST",changeOrigin:!0,data:o}).then(function(t){200==t.status&&(i.dataList=t.data.data,i.personList=t.data.positions,i.setMarkerLiXian(t.data.positions))}).catch(function(t){console.log(t)})},setMarker:function(t){var i=n("NIoa"),e=t.map(function(t,n){var e=[t.longitude,t.latitude];return new AMap.Marker({content:'<div class="marker-route11" >\n                      <div class="cover11" ></div>\n                      <div class="img_wrap11">\n                        <img src="'+i+'" />\n                      </div>\n                    </div>',position:e,title:t.policeName,offset:new AMap.Pixel(-16,-56)})});e.forEach(function(t){AMap.event.addListener(t,"click",function(t){})}),this.map.add(e),this.map.setFitView([].concat(a()(e)))}},created:function(){var t=this,i=this.$gscookie.getCookie("message_obj");this.t_mechanism_id=i.mechanism_id,this.getData(i.mechanism_id),this.timer=Object(s.setInterval)(function(){t.$router.go(0)},18e4)},mounted:function(){this.mapInitLiXian(),this.$store.commit("setStr",{str1:"全国枪支",str2:"出勤详情"})},beforeDestroy:function(){Object(s.clearInterval)(this.timer),this.timer=null,this.$store.commit("huanyuanStr")}}}).call(i,n("7t+N"))},EQDe:function(t,i){},aIoM:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("5ksm"),a={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"wrap"},[n("div",{attrs:{id:"container"}}),t._v(" "),n("div",{staticClass:"topbtn",on:{click:t.updown}},[n("i",{class:{active:!t.isshow}})]),t._v(" "),n("div",{class:{hidden:t.isshow},attrs:{id:"message"}},[t._m(0),t._v(" "),n("div",{staticClass:"list"},[n("div",{attrs:{id:"listwrap"}},t._l(t.dataList,function(i,e){return n("div",{key:e,staticClass:"item"},[n("span",[t._v(t._s(i.mechanism_name||""))]),t._v(" "),n("span",[t._v(t._s(i.policeName||""))]),t._v(" "),n("span",[t._v(t._s(i.gun_code||""))]),t._v(" "),n("span",[t._v(t._s(i.aprname||""))]),t._v(" "),n("span",[n("p",[t._v(t._s(i.optime||""))])]),t._v(" "),n("span",[n("p",[t._v(t._s(i.planreturntime||""))])])])}))])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"title"},[n("span",[n("i"),t._v("机构名称\n      ")]),t._v(" "),n("span",[n("i"),t._v("持枪人员\n      ")]),t._v(" "),n("span",[n("i"),t._v("枪支编号\n      ")]),t._v(" "),n("span",[n("i"),t._v("审批人员\n      ")]),t._v(" "),n("span",[n("i"),t._v("借出时间\n      ")]),t._v(" "),n("span",[n("i"),t._v("预计归还时间\n      ")])])}]};var s=function(t){n("EQDe")},o=n("VU/8")(e.a,a,!1,s,null,null);i.default=o.exports}});
//# sourceMappingURL=20.1be8c49880a484f405f1.js.map