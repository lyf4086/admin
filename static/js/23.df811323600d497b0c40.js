webpackJsonp([23],{A8bw:function(t,a){},KfL9:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={data:function(){return{dataList:[],char1Num:[32,24,15,12,6],char1Name:["西安市","威阳市","延安市","宝鸡市","南洛市"],char2Data:[30,49,26,60,26],char2Name:["11","22","33","44","55"],char3Name:["周一","周二","周三","周四","周五"],char3Data:[300,200,341,374,390],char4Name:["房地产开发","物业管理","其他"],char4Data:[{value:132.9,name:"房地产开发"},{value:52.8,name:"物业管理"},{value:10.4,name:"其他"}]}},methods:{moveing:function(){this.$methods.listMove("movelist"),console.log("开始了")},chartLeftTop:function(){var t=document.getElementById("left_top"),a=this.$echarts.init(t),e=this.char1Num,i={title:{show:!0,textStyle:{color:"#ffffff",fontSize:12,fontWeight:"500"}},grid:{top:"10%",left:"24%"},tooltip:{trigger:"axis",formatter:function(t){for(var a=void 0,e=0;e<t.length;e++)0===t[e].axisIndex&&(a=t[e].axisValue+" : "+t[e].data+"%");return a}},xAxis:{show:!1},yAxis:[{show:!0,data:this.char1Name,inverse:!0,max:4,axisLabel:{textStyle:{fontSize:12,color:"#fff"}},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},{show:!0,inverse:!0,data:e,max:4,axisLabel:{textStyle:{fontSize:12,color:"#fff"}},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}}],series:[{type:"pictorialBar",yAxisIndex:0,barWidth:10,symbol:'path://d="M70 90 L130 100 L130 80 Z"',itemStyle:{color:"#1bb1f4",emphasis:{opacity:1}},data:e},{symbol:"circle",symbolSize:16,color:"#1bb1f4",symbolOffset:["50%",0],symbolPosition:"end",type:"pictorialBar",yAxisIndex:1,data:e}]};a.setOption(i)},chartLeftBottom:function(){var t=document.getElementById("left_bottom"),a=this.$echarts.init(t),e={tooltip:{},grid:{top:"5%",right:"3%",bottom:"25%"},xAxis:{data:this.char2Name,axisTick:{show:!1},axisLabel:{interval:0,rotate:25,textStyle:{color:"#fff",fontSize:12}},axisLine:{lineStyle:{type:"solid",color:"#fff",width:"1  "}}},yAxis:{splitLine:{show:!0,lineStyle:{color:"#40A1EA",width:1,type:"solid"}},axisLabel:{textStyle:{color:"#fff",fontSize:12}},axisLine:{show:!1}},series:[{type:"bar",barWidth:30,data:this.char2Data,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#06B5D7"},{offset:.5,color:"#44C0C1"},{offset:1,color:"#71C8B1"}])},emphasis:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#71C8B1"},{offset:.7,color:"#44C0C1"},{offset:1,color:"#06B5D7"}])}}}]};a.setOption(e)},chartCenterUp:function(){},chartCenterBottom:function(){var t=document.getElementById("center_down"),a=this.$echarts.init(t),e={tooltip:{trigger:"axis",formatter:function(t){return t[0].name+"："+t[0].value}},grid:{top:"10%",left:"6%",bottom:"14%",right:"3%"},yAxis:[{name:"",nameTextStyle:{color:"#FFFFFF",fontSize:14},type:"value",axisLabel:{interval:0,color:"#d3e0fa",textStyle:{color:"#FFFFFF",fontSize:14}},splitLine:{show:!0},axisLine:{show:!1},axisTick:{show:!1}}],xAxis:[{type:"category",data:this.char3Name,axisLabel:{interval:0,color:"#d3e0fa"},axisTick:{show:!1},splitLine:{show:!1},axisLine:{show:!1},splitArea:{show:!1}}],series:[{name:"线损率",type:"pictorialBar",symbol:"path://M35,0L35,70L0,70z M35,0L35,70L70,70z",data:this.char3Data,barWidth:40,symbolOffset:[0,-15],z:99,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0788EE"},{offset:.5,color:"#0788EE"},{offset:.5,color:"#15B8F9"},{offset:1,color:"#15B8F9"}]),opacity:1}}},{type:"pictorialBar",symbol:"diamond",barWidth:40,symbolSize:["100%",30],z:99,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0788EE"},{offset:.5,color:"#0788EE"},{offset:.5,color:"#15B8F9"},{offset:1,color:"#15B8F9"}]),opacity:1}},data:[1,1,1,1,1]}]};a.setOption(e)},chartRight:function(){var t=document.getElementById("right_up"),a=this.$echarts.init(t),e={tooltip:{textStyle:{fontSize:"12"},trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",textStyle:{color:"#fff"},data:this.char4Name},series:[{name:"枪柜数量",type:"pie",radius:["50%","70%"],color:["#FF8352","#E271DE","#00FFFF","#4AEAB0"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"18",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:this.char4Data}]};a.setOption(e)},getData:function(t){var a=this,e={t_mechanism_id:t},i=this.$gscookie.getCookie("gun"),s=this.$store.state.key,o=this.$methods.mkSign(e,s),r=new URLSearchParams;r.append("sign",o),r.append("token",i),r.append("t_mechanism_id",e.t_mechanism_id),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=Home&c=Index&a=aggre",method:"POST",changeOrigin:!0,data:r}).then(function(t){if(200==t.status){var e=t.data.da.sort(function(t,a){return a.value-t.value});a.char1Num=e.map(function(t){return t.value}),a.char1Name=e.map(function(t){return t.name}),a.chartLeftTop(),a.char2Name=t.data.data.gname,a.char2Data=t.data.data.gcou,a.chartLeftBottom(),a.char3Name=t.data.data.gname,a.char3Data=t.data.data.gg,a.chartCenterBottom(),a.char4Name=t.data.data.vname,a.char4Data=t.data.data.lcou.map(function(a,e){return{name:t.data.data.vname[e],value:a}}),a.chartRight(),a.dataList=t.data.loc}}).catch(function(t){console.log(t)})}},created:function(){},mounted:function(){var t=this.$gscookie.getCookie("message_obj");this.t_mechanism_id=t.mechanism_id,this.getData(t.mechanism_id),this.moveing(),this.$store.commit("setStr",{str1:"数据汇总",str2:"概况"})},destroyed:function(){this.$store.commit("huanyuanStr")}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[t._v("各类型枪柜数量")]),t._v(" "),e("div",{attrs:{id:"right_up"}}),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"list"},t._l(t.dataList,function(a,i){return e("div",{key:i,staticClass:"item"},[e("span",[t._v(t._s(a.vname))]),t._v(" "),e("span",[t._v(t._s(a.vcode))]),t._v(" "),e("span",[t._v(t._s(a.vtype))])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"left"},[a("div",{staticClass:"up"},[a("div",{staticClass:"title"},[this._v("数据汇总")]),this._v(" "),a("div",{attrs:{id:"left_top"}})]),this._v(" "),a("div",{staticClass:"down"},[a("div",{staticClass:"title"},[this._v("各类型枪支数量")]),this._v(" "),a("div",{attrs:{id:"left_bottom"}},[this._v("1")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"center"},[a("div",{staticClass:"up"},[a("div",{staticClass:"item1"}),this._v(" "),a("div",{staticClass:"item2"}),this._v(" "),a("div",{staticClass:"item3"}),this._v(" "),a("div",{staticClass:"item4"})]),this._v(" "),a("div",{staticClass:"down"},[a("div",{staticClass:"title"},[this._v("枪瞄绑定数量")]),this._v(" "),a("div",{attrs:{id:"center_down"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"titlewrap"},[a("span",[this._v("枪柜名称")]),this._v(" "),a("span",[this._v("枪柜编号")]),this._v(" "),a("span",[this._v("枪柜类型")])])}]};var o=e("VU/8")(i,s,!1,function(t){e("A8bw")},"data-v-b2b53b3a",null);a.default=o.exports}});
//# sourceMappingURL=23.df811323600d497b0c40.js.map