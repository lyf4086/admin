webpackJsonp([2],{"0JKD":function(t,a){},"3OWk":function(t,a){},"7s4q":function(t,a){},"Lk/X":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("mvHQ"),n=e.n(i),s=e("ReNR"),o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"num-icon",attrs:{id:"num-icon"}},t._l(t.iconList,function(a,i){return e("div",{key:i,staticClass:"item",on:{click:function(e){t.toList(a)}}},[e("p",[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"num"},[t._v(t._s(a.number))]),t._v(" "),e("p",[t._v("环比"+t._s(a.ratio)+"%")])])})),t._v(" "),e("div",{staticClass:"echarts-wrap"},[e("div",{staticClass:"title"},[t._v("本单位出勤任务类型")]),t._v(" "),e("div",{staticClass:"title"},[t._v("枪支借出各类型占比")]),t._v(" "),e("div",{attrs:{id:"chart1"},on:{click:t.toXiangQingChart1}},[t._v("1")]),t._v(" "),e("div",{attrs:{id:"chart2"},on:{click:t.toXiangQingChart2}},[t._v("2")])])])},staticRenderFns:[]};var r=function(t){e("OmZb")},c=e("VU/8")(s.a,o,!1,r,"data-v-0f6c9284",null).exports,h={data:function(){return{echar1_names:[],echar1_date:[],echar1_num:[],selected:[],dataList:[],list:[],echart2_data:[],timeObj:null}},methods:{char1:function(t,a){var e=document.getElementById("char1"),i=this.$echarts.init(e),n={title:{},toolbox:{},grid:{left:"4%",right:"10%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:this.echar1_date,axisLine:{lineStyle:{color:"#fff"}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#fff"}}}],series:this.list};i.setOption(n)},char2:function(){var t=document.getElementById("char2"),a=this.$echarts.init(t),e={title:{x:"center"},series:[{name:"访问来源",color:["#63deff","#1dacd3","#4aa1bc","#3e8aa1","#34778a","#284968"],label:{normal:{show:!0,color:"#fff",position:"outter",formatter:function(t){return t.data.legendname}}},type:"pie",radius:"55%",center:["50%","60%"],data:this.echart2_data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};a.setOption(e)},getData:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=alarm",method:"POST",changeOrigin:!0,data:n}).then(function(a){t.timeObj=a.data.time,t.echar1_date=a.data.data.days,t.echar1_num=a.data.data.value,t.list=a.data.data.series,t.echar1_names=a.data.data.mname,t.selected=a.data.data.selected,t.char1()}).catch(function(t){console.log(t)})},getData_chart2:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=alarm_type",method:"POST",changeOrigin:!0,data:n}).then(function(a){t.echart2_data=a.data.data,t.char2()}).catch(function(t){console.log(t)})},chart1XiangQing:function(){3!=this.$store.state.role_id&&this.$router.push({name:"NewXiangQing",params:this.timeObj})},chart2XiangQing:function(){3!=this.$store.state.role_id&&this.$router.push({name:"Item1Right",params:this.timeObj})}},mounted:function(){this.char1(),this.char2(),this.getData(),this.getData_chart2()}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"left-area"},[a("p",[this._v("报警趋势图")]),this._v(" "),a("div",{attrs:{id:"char1"},on:{click:this.chart1XiangQing}})]),this._v(" "),a("div",{staticClass:"right-area"},[a("p",[this._v("报警类型占比情况")]),this._v(" "),a("div",{attrs:{id:"char2"},on:{click:this.chart2XiangQing}})])])},staticRenderFns:[]};var l=e("VU/8")(h,d,!1,function(t){e("3OWk")},"data-v-5caebff8",null).exports,m=e("woOf"),u=e.n(m),p={data:function(){return{obj:{gunai:0,guncount:0,lcount:0,pcount:0}}},methods:{toXQ:function(){this.$router.push({name:"CenterXQ"})},toQiangZhi:function(){3!=this.$store.state.role_id&&this.$router.push({name:"ZaiKu"})},toQiangMiao:function(){3!=this.$store.state.role_id&&this.$router.push({name:"QiangMiao"})},toQiangGui:function(){3!=this.$store.state.role_id&&this.$router.push({name:"QiangGui"})},toJingYuan:function(){3!=this.$store.state.role_id&&this.$router.push({name:"RenYuan"})},getData:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=guns",method:"POST",changeOrigin:!0,data:n}).then(function(a){u()(t.obj,a.data.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main box"},[e("div",{staticClass:"left-bg"}),t._v(" "),e("div",{staticClass:"right-bg"}),t._v(" "),e("div",{staticClass:"center-round-under"}),t._v(" "),e("div",{staticClass:"center-round-up",on:{click:t.toXQ}}),t._v(" "),e("div",{staticClass:"text-left"},[e("p",[t._v("枪支总量")]),t._v(" "),e("strong",{on:{click:t.toQiangZhi}},[t._v(t._s(t.obj.gunai))]),t._v(" "),e("p",[t._v("枪瞄总量")]),t._v(" "),e("strong",{on:{click:t.toQiangMiao}},[t._v(t._s(t.obj.guncount))])]),t._v(" "),e("div",{staticClass:"text-right"},[e("p",[t._v("枪柜总量")]),t._v(" "),e("strong",{on:{click:t.toQiangGui}},[t._v(t._s(t.obj.lcount))]),t._v(" "),e("p",[t._v("警员")]),t._v(" "),e("strong",{on:{click:t.toJingYuan}},[t._v(t._s(t.obj.pcount))])]),t._v(" "),e("div",{staticClass:"gun"},[t._v("350")])])},staticRenderFns:[]};var g=e("VU/8")(p,v,!1,function(t){e("0JKD")},"data-v-02b55eaf",null).exports,f=(e("162o"),{data:function(){return{p:[{n:"李志伟",t:15697686673},{n:"李志伟",t:15697686673}],personList:[],total:""}},methods:{toXiangQing:function(){this.$router.push({name:"Item5XQ"})},goPersonMessage:function(t){},getData:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=gunperson",method:"POST",changeOrigin:!0,data:n}).then(function(a){200==a.status&&(t.personList=a.data.data,t.total=a.data.total)}).catch(function(t){console.log(t)})},move:function(){}},created:function(){this.getData()},mounted:function(){}}),_={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrap",on:{click:t.toXiangQing}},[t.personList?i("div",{staticClass:"left"},t._l(t.personList,function(a,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"tou"},[a.thumb_icon?i("img",{attrs:{src:a.thumb_icon,alt:""}}):t._e(),t._v(" "),a.thumb_icon?t._e():i("img",{attrs:{src:e("NIoa"),alt:""}})]),t._v(" "),i("div",{staticClass:"text"},[i("p",[t._v("姓名："+t._s(a.uname)+"  tell："+t._s(a.mobile))]),t._v(" "),i("div",[i("span",{attrs:{title:"警员角色"}},[t._v(t._s(a.job))]),t._v(" "),i("span",{attrs:{title:"枪支类型"}},[t._v(t._s(a.gtype))]),t._v(" "),i("span",{on:{click:function(e){t.goPersonMessage(a)}}},[t._v("其他信息")])])])])})):t._e(),t._v(" "),i("div",{staticClass:"right"},[i("p",[t._v("重要任务枪支出口总量")]),t._v(" "),i("h3",[t._v(t._s(t.total)+"支")]),t._v(" "),i("div",{staticClass:"bg1"}),t._v(" "),i("div",{staticClass:"bg2"})])])},staticRenderFns:[]};var b=e("VU/8")(f,_,!1,function(t){e("NuZ6")},"data-v-f3f571a6",null).exports,y=e("O1bo"),x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[t._m(0),t._v(" "),e("div",{staticClass:"list12"},t._l(t.dataList,function(a,i){return t.dataList.length?e("div",{key:i,staticClass:"item",on:{click:function(e){t.toxiangqing(a.tt)}}},[e("span",[t._v(t._s(a.mechanism_name))]),t._v(" "),e("span",[t._v(t._s(a.policeName))]),t._v(" "),e("span",[t._v(t._s(a.gun_code))]),t._v(" "),e("span",[t._v(t._s(a.gunType))]),t._v(" "),e("span",[t._v(t._s(a.optime))])]):t._e()}))])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("span",[t._v("机构名称")]),t._v(" "),e("span",[t._v("姓名")]),t._v(" "),e("span",[t._v("枪支编号")]),t._v(" "),e("span",[t._v("枪支类型")]),t._v(" "),e("span",[t._v("借出时间")])])}]};var $=function(t){e("zbY0")},k=e("VU/8")(y.a,x,!1,$,"data-v-72610cd6",null).exports,C=e("oMhB"),S={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"itemright"},[e("div",{staticClass:"cover"}),t._v(" "),e("p",[t._v("逾期报警")]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"yuqi",attrs:{id:"wrap"}},[e("ul",{staticClass:"liebiao"},t._l(t.dataList3,function(a,i){return e("li",{key:i,staticClass:"one"},[e("div",[e("span",[t._v(t._s(a.policeName))]),t._v(" "),e("span",[t._v(t._s(a.type))]),t._v(" "),e("h6",[t._v(t._s(a.optime))])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"itemleft"},[a("p",[this._v("各机构枪柜数量")]),this._v(" "),a("div",{attrs:{id:"char-left"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"itemcenter"},[a("p",[this._v("每日各类型报警数据")]),this._v(" "),a("div",{attrs:{id:"char-center"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dianwrap"},[a("div",{staticClass:"line"}),this._v(" "),a("div",{staticClass:"diandian",attrs:{id:"diandian"}},[a("div",{staticClass:"item"},[a("span")]),this._v(" "),a("div",{staticClass:"item"},[a("span")]),this._v(" "),a("div",{staticClass:"item"},[a("span")]),this._v(" "),a("div",{staticClass:"item"},[a("span")])])])}]};var w=function(t){e("zgHh")},L={data:function(){return{mes:{},arr:[],leftDataArr:[{type:"bar",data:[1,2,3,4,3,5,1],coordinateSystem:"polar",name:"入套",stack:"a"},{type:"bar",data:[2,4,6,1,3,2,1],coordinateSystem:"polar",name:"离套",stack:"a"},{type:"bar",data:[1,2,3,4,1,2,5],coordinateSystem:"polar",name:"电量",stack:"a"},{type:"bar",data:[1,2,3,4,1,2,5],coordinateSystem:"polar",name:"位置",stack:"a"}],chart3:null,rightData:{in:[320,302,341,374,390,450,420],out:[-120,-132,-101,-134,-190,-230,-290],time:["周一","周二","周三","周四","周五","周六","周日"]},chart1names:[],chart1data:[]}},methods:{chart1XQ:function(){},chart3xq:function(){this.$router.push({name:"Item14XQ",params:this.mes})},char1:function(){var t=document.getElementById("echar1"),a=this.$echarts.init(t),e=this.chart1data,i={color:["#BC8DEE","#8693F3","#89C3F8","#F2A695","#FCC667","#AEB7F9","#748BFA"],legend:{orient:"vartical",x:"left",top:"40%",left:"66%",bottom:"0%",data:this.chart1names,itemWidth:20,itemHeight:14,itemGap:15,textStyle:{color:"#fff"},formatter:function(t){return""+t}},series:[{name:"违规次数",type:"pie",clockwise:!1,minAngle:20,radius:["30%","58%"],center:["35%","50%"],avoidLabelOverlap:!1,itemStyle:{normal:{borderWidth:1}},label:{normal:{show:!1,position:"center",formatter:"{text|{b}}\n{value|{d}%}",rich:{text:{color:"#fff",fontSize:14,align:"center",verticalAlign:"middle",padding:5},value:{color:"#fff",fontSize:14,align:"center",verticalAlign:"middle"}}},emphasis:{show:!0,textStyle:{fontSize:16}}},data:e}]};a.setOption(i),setTimeout(function(){a.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}),a.on("mouseover",function(t){t.name==e[0].name?a.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}):a.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:0})}),a.on("mouseout",function(t){a.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0})})},1e3),a.setOption(i)},char2:function(){var t=document.getElementById("echar3"),a=this.$echarts.init(t),e={color:["#ec8938","#63deff"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{textStyle:{color:"#fff"},data:["入库","出库"]},grid:{right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",axisLine:{lineStyle:{color:"#fff"}}}],yAxis:[{type:"category",axisLine:{lineStyle:{color:"#fff"}},axisTick:{show:!1},data:this.rightData.time}],series:[{name:"入库",type:"bar",stack:"总量",label:{normal:{show:!0}},data:this.rightData.in},{name:"出库",type:"bar",stack:"总量",label:{normal:{show:!0,position:"left"}},data:this.rightData.out}]};a.setOption(e)},getDataLeft:function(t){var a=this,e={t_mechanism_id:t},i=this.$gscookie.getCookie("gun"),n=this.$store.state.key,s=this.$methods.mkSign(e,n),o=new URLSearchParams;o.append("sign",s),o.append("token",i),o.append("t_mechanism_id",e.t_mechanism_id),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=last_week",method:"POST",changeOrigin:!0,data:o}).then(function(t){for(var e in t.data.date)a.chart1names.push(t.data.date[e]);a.chart1data=t.data.cou.map(function(a,e){return{name:t.data.date[e],value:a}}),a.char1()}).catch(function(t){console.log(t)})},getDataCenter:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=out_work",method:"POST",changeOrigin:!0,data:n}).then(function(a){t.arr=a.data.data}).catch(function(t){console.log(t)})},getDataRight:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=out_device",method:"POST",changeOrigin:!0,data:n}).then(function(a){if(200==a.status){t.mes={ip_id:a.data.ip_id,mid:a.data.mid,tt:a.data.tt};var e=a.data.data.map(function(t,a){return t.input}),i=a.data.data.map(function(t,a){return t.out}),n=a.data.data.map(function(t,a){return t.time});t.rightData.in=e,t.rightData.out=i,t.rightData.time=n,t.char2()}}).catch(function(t){console.log(t)})}},mounted:function(){var t=this.$gscookie.getCookie("message_obj");console.log(t.mechanism_id),this.getDataLeft(t.mechanism_id),this.getDataCenter(),this.getDataRight()}},I={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("div",{staticClass:"itemleft"},[e("p",[t._v("枪支出勤热力图")]),t._v(" "),e("div",{attrs:{id:"echar1"},on:{click:t.chart1XQ}})]),t._v(" "),t.arr.length?e("div",{staticClass:"itemcenter"},[e("p",[t._v("出勤TOP5")]),t._v(" "),e("div",{attrs:{id:"echar2"}},[t._m(0),t._v(" "),t._l(t.arr,function(a,i){return e("div",{key:i,staticClass:"item"},[e("h3",[t._v(t._s(a.mechanism_name))]),t._v(" "),e("h3",[t._v(t._s(a.number))])])})],2)]):t._e(),t._v(" "),e("div",{staticClass:"itemright"},[e("p",[t._v("出入库占比情况")]),t._v(" "),e("div",{attrs:{id:"echar3"},on:{click:t.chart3xq}})])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h6",[a("span",[this._v("地区")]),this._v(" "),a("span",[this._v("出勤数量")])])}]};var D={components:{jiBieFenBu:c,Item1:l,Item2:g,Item3:b,Item4:k,Item6:e("VU/8")(C.a,S,!1,w,"data-v-74e9b62a",null).exports,Item7:e("VU/8")(L,I,!1,function(t){e("7s4q")},"data-v-4196d4e7",null).exports},created:function(){3==this.$gscookie.getCookie("message_obj").role_id&&this.$router.push({name:"GuiJi"});var t=this.$gscookie.getCookie("gun");"{}"==n()(t)&&this.$router.push("/loginput")}},O={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("div",{staticClass:"up"},[e("div",{staticClass:"left"},[e("div",{staticClass:"left-up"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"jiao"},[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("Item1")],1)]),t._v(" "),e("div",{staticClass:"right-up"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("Item2")],1)]),t._v(" "),e("div",{staticClass:"left-down"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"jiao"},[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("Item3")],1)]),t._v(" "),e("div",{staticClass:"right-down"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"jiao"},[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("Item4")],1)])]),t._v(" "),e("div",{staticClass:"pos-right"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"jiao"},[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("jiBieFenBu")],1)])]),t._v(" "),e("div",{staticClass:"down"},[e("div",{staticClass:"down-left"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"jiao"},[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("Item6")],1)]),t._v(" "),e("div",{staticClass:"down-right"},[e("p",{staticClass:"title"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"jiao"},[e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("i"),t._v(" "),e("Item7")],1)])])])},staticRenderFns:[]};var R=e("VU/8")(D,O,!1,function(t){e("NdPm")},null,null);a.default=R.exports},NdPm:function(t,a){},NuZ6:function(t,a){},O1bo:function(t,a,e){"use strict";(function(t){a.a={data:function(){return{dataList:[],ip_id:"",tt:"",mid:""}},methods:{toxiangqing:function(t){this.$router.push({name:"Item6XQ",params:{ip_id:this.ip_id,tt:this.tt,mid:this.mid}})},move:function(){var a=t(".wrap .list12"),e=null;a.hover(function(){clearInterval(e)},function(){e=setInterval(function(){var e;e=t(".list12 .item:first").height(),a.stop().animate({marginTop:-e},700,function(){a.css({marginTop:0}).find(".item:first").appendTo(a)})},2e3)}).trigger("mouseleave")},getData:function(t){var a=this,e={t_mechanism_id:t},i=this.$gscookie.getCookie("gun"),n=this.$store.state.key,s=this.$methods.mkSign(e,n),o=new URLSearchParams;o.append("sign",s),o.append("token",i),o.append("t_mechanism_id",e.t_mechanism_id),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=Home&c=Index&a=gun_history",method:"POST",changeOrigin:!0,data:o}).then(function(t){200==t.status&&(a.dataList=t.data.data,a.ip_id=t.data.ip_id,a.tt=t.data.tt,a.mid=t.data.mid)}).catch(function(t){console.log(t)})}},mounted:function(){var t=this.$gscookie.getCookie("message_obj");this.getData(t.mechanism_id),this.move()}}}).call(a,e("7t+N"))},OmZb:function(t,a){},ReNR:function(t,a,e){"use strict";(function(t){var i=e("woOf"),n=e.n(i),s=e("Dd8w"),o=e.n(s),r=e("162o");e.n(r);a.a={data:function(){return{leftT:"",max:0,timermove:null,iconList:[],num:[0,0,0,0],numData:{area:111,elec:222,litao:333,rutao:444},time:"",timer:null,dataRightUp:[],dataRight:[],chart1Data:{legendData:["报警","正常","总量"],series:[{name:"报警",type:"bar",color:"#5dceec"},{name:"正常",type:"bar",color:"#ed8a39"}]}}},methods:{toXiangQingChart1:function(t){this.$router.push({name:"Item7XQ",params:{tt:this.leftT,mid:this.mid,ip_id:this.ipId}})},toXiangQingChart2:function(){this.$router.push({name:"Item8XQ",params:{tt:this.leftT,mid:this.mid,ip_id:this.ipId}})},toList:function(t){3!=this.$store.state.role_id&&this.$router.push({name:"Item4Top",params:o()({},t)})},makeStr:function(t){return"area"==t?"位置报警":"elec"==t?"电量报警":"litao"==t?"离套报警":"入套报警"},chart1:function(){var t=this.$echarts.init(document.getElementById("chart1")),a={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!1,readOnly:!1},magicType:{show:!1,type:["line","bar"]},restore:{show:!1},saveAsImage:{show:!1}}},legend:{data:this.chart1Data.legendData,textStyle:{color:"#fff"}},xAxis:[{type:"category",data:this.chart1Data.xAxisData,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"",min:0,max:this.max,interval:3,axisLabel:{formatter:" ",textStyle:{color:"#fff",fontSize:12}}},{type:"value",name:"",min:0,max:this.max,interval:5,axisLabel:{formatter:""}}],series:this.chart1Data.series};t.setOption(a),t.on("click",function(t){})},chart2:function(){var t=this,a=this.$echarts.init(document.getElementById("chart2"),"macarons"),e={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{x:"left",textStyle:{fontSize:"16"},data:this.dataRightUp},series:[{name:"型号及数量",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,color:["#63deff","#57c4e3","#4ba2bd","#3e8aa1","#4176a8","#335f86"],label:{normal:{show:!1,position:"center"},emphasis:{show:!1,textStyle:{fontSize:"12",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:this.dataRight}]};a.setOption(e),a.on("click",function(a){t.$router.push({name:"Pub",params:{source:"item8",gtypes:a.data.gtypes,time:""}})})},getData_up:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=moth_alarm",method:"POST",changeOrigin:!0,data:n}).then(function(a){200==a.status&&(t.iconList=a.data.data,t.time=a.data.time,t.timermove=Object(r.setTimeout)(function(){t.zuodonghua()},0))}).catch(function(t){console.log(t)})},getData_under_l:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),s=new URLSearchParams;s.append("sign",i),s.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=task",method:"POST",changeOrigin:!0,data:s}).then(function(a){t.leftT=a.data.tt,t.mid=a.data.mid,t.ipId=a.data.ip_id;var e={};t.max=a.data.max,e.legendData=a.data.legend.data,e.xAxisData=a.data.time,e.series=a.data.data.map(function(t){return o()({},t,{type:"bar"})}),n()(t.chart1Data,e),t.chart1()}).catch(function(t){console.log(t)})},getData_under_r:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=lend_gun",method:"POST",changeOrigin:!0,data:n}).then(function(a){var e=a.data.data.map(function(t,a){return{value:t.number,name:t.gtype,gtypes:t.gtypes}});t.dataRight=e,t.dataRightUp=a.data.data.map(function(t){return t.gtype}),t.chart2()}).catch(function(t){console.log(t)})},zuodonghua:function(){var a=t(".num-icon")[0],e=document.querySelectorAll("#num-icon .item"),i=-1,n=null;function s(){i++,i%=4;for(var t=0;t<4;t++)e[t].classList.remove("active");e[i].classList.add("active")}n=Object(r.setInterval)(s,2e3),a.onmouseover=function(){for(var t=0;t<4;t++)e[t].classList.remove("active");Object(r.clearInterval)(n)},a.onmouseout=function(){n=Object(r.setInterval)(s,2e3)}}},created:function(){this.getData_up(),this.getData_under_l(),this.getData_under_r()},mounted:function(){this.chart1(),this.chart2()},beforeDestroy:function(){Object(r.clearTimeout)(this.timermove),Object(r.clearInterval)(this.timer1)}}}).call(a,e("7t+N"))},oMhB:function(t,a,e){"use strict";(function(t){a.a={data:function(){return{citys:[],numbers:[],objArr:[],dataList3:[],mid:"",ip_id:"",chart2Names:["数据1111","数据2222"],chart2Data:[],chart2Day:[{name:"道路结冰",max:88},{name:"暴雪",max:88},{name:"暴雨",max:88},{name:"冰雹",max:88}]}},methods:{moveDian:function(){this.$methods.listMove("#diandian")},moveing:function(){var a=t("#wrap .liebiao"),e=null;a.hover(function(){clearInterval(e)},function(){e=setInterval(function(){var e;e=t(".liebiao .one:first").height(),a.stop().animate({marginTop:-e},700,function(){a.css({marginTop:0}).find(".one:first").appendTo(a)})},2e3)}).trigger("mouseleave")},char1:function(){var t=this,a=this.$echarts.init(document.getElementById("char-left")),e={grid:{show:"true",borderWidth:"0",height:"79%",width:"74%",x:"24%",y:"8%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b0}: {c0}"},xAxis:{show:!1,type:"value"},yAxis:{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#666"},formatter:function(t,a){return["{lg|"+(a+1)+"}{title|"+t+"} "].join("\n")},rich:{lg:{fontWeight:"bold",fontSize:12,color:"#fff",padding:[0,5,0,0]},title:{color:"#fff",fontWeight:"lighter"}}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:t.citys},series:[{name:"数据内框",type:"bar",itemStyle:{normal:{barBorderRadius:30,color:"#00b5eb"}},barWidth:20,data:t.numbers},{name:"外框",type:"bar",itemStyle:{normal:{barBorderRadius:20,color:"rgba(255, 255, 255, 0.14)"}},barGap:"-100%",z:0,barWidth:20,data:[100,100,100,100,100]}]};a.setOption(e),a.on("click",function(a){3!=t.$store.state.role_id&&t.$router.push({name:"Item9XQ",params:{mid:t.mid,ip_id:t.ip_id}})})},chart2:function(){var t=document.getElementById("char-center"),a=this.$echarts.init(t,!0),e=[{name:"入套报警",type:"radar",symbol:"circle",symbolSize:10,areaStyle:{normal:{color:"rgba(245, 166, 35, 0.4)"}},itemStyle:{color:"rgba(245, 166, 35, 1)",borderColor:"rgba(245, 166, 35, 0.3)",borderWidth:10},lineStyle:{normal:{type:"dashed",color:"rgba(245, 166, 35, 1)",width:2}},data:[this.chart2Data[0]]},{name:"离套报警",type:"radar",symbol:"circle",symbolSize:10,itemStyle:{normal:{color:"rgba(19, 173, 255, 1)",borderColor:"rgba(19, 173, 255, 0.4)",borderWidth:10}},areaStyle:{normal:{color:"rgba(19, 173, 255, 0.5)"}},lineStyle:{normal:{color:"rgba(19, 173, 255, 1)",width:2,type:"dashed"}},data:[this.chart2Data[1]]},{name:"区域报警",type:"radar",symbol:"circle",symbolSize:10,itemStyle:{normal:{color:"rgba(192, 173, 255, 1)",borderColor:"rgba(192, 173, 255, 0.4)",borderWidth:10}},areaStyle:{normal:{color:"rgba(192, 173, 255, 0.5)"}},lineStyle:{normal:{color:"rgba(192, 173, 255, 1)",width:2,type:"dashed"}},data:[this.chart2Data[2]]},{name:"逾期报警",type:"radar",symbol:"circle",symbolSize:10,itemStyle:{normal:{color:"rgba(19, 233, 255, 1)",borderColor:"rgba(19, 233, 255, 0.4)",borderWidth:10}},areaStyle:{normal:{color:"rgba(19, 233, 255, 0.5)"}},lineStyle:{normal:{color:"rgba(19, 233, 255, 1)",width:2,type:"dashed"}},data:[this.chart2Data[3]]}],i={normal:{top:200,left:300,width:500,height:400,zIndex:6,backgroundColor:""},color:["rgba(245, 166, 35, 1)","rgba(19, 173, 255, 1)"],title:{show:!0,left:"40%",top:"1%",textStyle:{fontSize:18,color:"#fff",fontStyle:"normal",fontWeight:"normal"}},tooltip:{show:!1,trigger:"item"},legend:{show:!0,icon:"circle",left:"0%",top:"93%",orient:"horizontal",textStyle:{fontSize:14,color:"#fff"},data:["入套报警","离套报警","区域报警","逾期报警"]},radar:{center:["50%","50%"],radius:"70%",startAngle:90,splitNumber:4,shape:"circle",splitArea:{areaStyle:{color:["transparent"]}},axisLabel:{show:!1,fontSize:18,color:"#fff",fontStyle:"normal",fontWeight:"normal"},axisLine:{show:!0,lineStyle:{color:"#fff"}},splitLine:{show:!0,lineStyle:{color:"#fff"}},indicator:this.chart2Day},series:e};a.setOption(i)},getDataOne:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=gun_device",method:"POST",changeOrigin:!0,data:n}).then(function(a){t.citys=a.data.mname,console.log(a),t.mid=a.data.mid,t.ip_id=a.data.ip_id,t.numbers=a.data.number,t.char1()}).catch(function(t){console.log(t)})},getDataTwo:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=days_alarm",method:"POST",changeOrigin:!0,data:n}).then(function(a){t.chart2Names=a.data.tname,t.chart2Day=a.data.date.map(function(t){return{name:t}}),t.chart2Data=a.data.cou,t.chart2()}).catch(function(t){console.log(t)})},getDataThree:function(){var t=this,a=this.$gscookie.getCookie("gun"),e=this.$store.state.key,i=this.$methods.mkSign({},e),n=new URLSearchParams;n.append("sign",i),n.append("token",a),this.$axios({url:this.$store.state.baseURL+"/weixin/project/index.php?m=home&c=Index&a=early",method:"POST",changeOrigin:!0,data:n}).then(function(a){200==a.status&&(t.dataList3=a.data.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.char1(),this.getDataOne(),this.getDataTwo(),this.getDataThree(),this.moveing(),this.moveDian()}}}).call(a,e("7t+N"))},zbY0:function(t,a){},zgHh:function(t,a){}});
//# sourceMappingURL=2.316aaa26113a0b887078.js.map