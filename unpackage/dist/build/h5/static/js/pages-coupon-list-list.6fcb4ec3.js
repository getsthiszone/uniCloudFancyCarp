(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-list-list"],{"1c71":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-68900ff8],\r\nuni-scroll-view[data-v-68900ff8]{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-68900ff8]::-webkit-scrollbar,[data-v-68900ff8]::-webkit-scrollbar,[data-v-68900ff8]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-68900ff8]{position:relative}uni-scroll-view[data-v-68900ff8] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-68900ff8]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-68900ff8]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color;transition-property:background-color,color}.u-tab-bar[data-v-68900ff8]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-68900ff8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=e},"317e":function(t,e,n){"use strict";n.r(e);var i=n("486a"),r=n("cb4c");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("87be");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"68900ff8",null,!1,i["a"],s);e["default"]=u.exports},"486a":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[n("v-uni-view",{attrs:{id:t.id}},[n("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[n("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(i)],attrs:{id:"u-tab-item-"+i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(i)}}},[t._v(t._s(e[t.name]||e["name"]))])})),t.showBar?n("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},a=[]},5066:function(t,e,n){"use strict";var i=n("cbae"),r=n.n(i);r.a},5280:function(t,e,n){"use strict";n.r(e);var i=n("9055"),r=n("e2b0");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5066");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"31e37409",null,!1,i["a"],s);e["default"]=u.exports},"62e3":function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var n=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){n.init()}))},current:{immediate:!0,handler:function(t,e){var n=this;this.$nextTick((function(){n.currentIndex=t,n.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var n={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(n.fontWeight="bold"),e==t.currentIndex?(n.color=t.activeColor,n=Object.assign(n,t.activeItemStyle)):n.color=t.inactiveColor,n}}},methods:{init:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:n=e.sent,t.parentLeft=n.left,t.componentWidth=n.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var n=e.width,i=e.left-this.parentLeft,r=i-(this.componentWidth-n)/2;this.scrollLeft=r<0?0:r;var a=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=a-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=a},"790b":function(t,e,n){"use strict";var i;n("99af"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{tablist:[{cate_name:"待使用",id:0},{cate_name:"已使用",id:1},{cate_name:"已过期",id:2}],current:0,nolistText:["没有优惠券","无使用记录",""],page:0,lodstatus:"",list:[],nolist:!1,onmore:!1}},filters:{getdate:function(t){var e=i.$zax.formatDate(1e3*t);return"".concat(e.year,"-").concat(e.month,"-").concat(e.day)}},methods:{change:function(t){this.current=t,i.page=0,i.list=[],i.getlist()},getlist:function(){i.nolist=!1;var t=i.list,e=i.page;i.lodstatus="loading";var n=i.nolist;i.$request.request({url:i.api.coupons.my_coupons_list,data:{status:i.tablist[i.current].id,start:i.page,page_size:20},success:function(r){var a=r||[];0==e?(t=a,i.page=i.page+20,n=0==t.length,i.lodstatus=""):a.length>0?(t=t.concat(a),i.page=i.page+20,i.lodstatus=""):i.lodstatus="noMore",i.list=t,i.nolist=n,i.$forceUpdate()},complete:function(){uni.stopPullDownRefresh()}})},tpinfo2:function(t){uni.setStorageSync("orderinfo",i.list[t.currentTarget.dataset.index]),uni.navigateTo({url:"/pages/order/siteinfo/siteinfo"})}},onLoad:function(t){i=this,i.getlist()},onShow:function(){var t=uni.getStorageSync("couponInfo");for(var e in i.list)t.id==i.list[e].id&&t.status!=i.list[e].status&&(20==i.page?(i.page,i.getlist()):i.list.splice(e,1))},onReachBottom:function(){i.getlist()}};e.default=r},"7b13":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-sticky[data-v-31e37409]{z-index:9999999999}',""]),t.exports=e},"7d44":function(t,e,n){var i=n("d707");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("34569ea8",i,!0,{sourceMap:!1,shadowMode:!1})},8604:function(t,e,n){"use strict";n.r(e);var i=n("790b"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"87be":function(t,e,n){"use strict";var i=n("9813"),r=n.n(i);r.a},9022:function(t,e,n){"use strict";n.r(e);var i=n("9638"),r=n("8604");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("b3db");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"594dd080",null,!1,i["a"],s);e["default"]=u.exports},9055:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-sticky-wrap",class:[t.elClass],style:{height:t.fixed?t.height+"px":"auto",backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-sticky",style:{position:t.fixed?"fixed":"static",top:t.stickyTop+"px",left:t.left+"px",width:"auto"==t.width?"auto":t.width+"px",zIndex:t.uZIndex}},[t._t("default")],2)],1)],1)},a=[]},9638:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uSticky:n("5280").default,uTabs:n("317e").default,uLoading:n("b739").default,uEmpty:n("2689").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-sticky",[n("u-tabs",{attrs:{name:"cate_name","active-color":"#ff6c13",bold:!1,"bar-width":"102","inactive-color":"#8b8b8b","bg-color":"#f1f1f1",list:t.tablist,"is-scroll":!1,current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"couponlist"},[t._l(t.list,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"couponitem",class:2==e.status?"filter":"",attrs:{"data-url":"/pages/coupon/info/info?id="+e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tpurl.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"coupontop"},[n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-view",{staticClass:"logo"},[n("Gimage",{attrs:{src:e.shop_logo,mode:"aspectFill",gstyle:"width: 130rpx;height: 130rpx;border-radius:8rpx;"}})],1),n("v-uni-view",{staticClass:"comment"},[n("v-uni-view",{staticClass:"title text-cut"},[t._v(t._s(e.coupons_name))]),n("v-uni-view",{staticClass:"endtime"},[t._v("有效期至"+t._s(e.use_end_time))])],1)],1),n("v-uni-view",{staticClass:"rprice",class:1==e.status||2==e.status?"filter":""},[n("v-uni-view",{staticClass:"price"},[n("v-uni-text",{staticClass:"price-icon"},[t._v("￥")]),n("v-uni-text",[t._v(t._s(e.coupons_price))])],1),n("v-uni-view",{staticClass:"subtitle"},[t._v("满"+t._s(e.limit_price)+"可使用")])],1),n("v-uni-view",{staticClass:"couponricon"},[1==e.status?n("v-uni-image",{attrs:{src:"/static/icon/icon-ysy.png",mode:"widthFix"}}):t._e(),2==e.status?n("v-uni-image",{attrs:{src:"/static/icon/icon-gq.png",mode:"widthFix"}}):t._e()],1)],1),n("v-uni-view",{staticClass:"couponbottom"},[n("v-uni-view",{staticClass:"left"},[t._v("活动最终解释权归平台所有")]),0==e.status?n("v-uni-button",{staticClass:"cu-btn btn",attrs:{"data-url":"/pages/coupon/info/info?id="+e.id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.tpurl.apply(void 0,arguments)}}},[t._v("立即使用")]):t._e(),1==e.status?n("v-uni-button",{staticClass:"cu-btn btn filter"},[t._v("已使用")]):t._e(),2==e.status?n("v-uni-button",{staticClass:"cu-btn btn filter"},[t._v("已过期")]):t._e()],1)],1)]}))],2),"loading"==t.lodstatus?n("v-uni-view",{staticClass:"flex justify-center "},[n("u-loading",{attrs:{mode:"circle"}})],1):t._e(),t.nolist?n("v-uni-view",{staticStyle:{"padding-top":"300rpx"}},[n("u-empty",{attrs:{text:t.nolistText[t.current],mode:"coupon"}})],1):t._e()],1)},a=[]},9813:function(t,e,n){var i=n("1c71");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("de46b174",i,!0,{sourceMap:!1,shadowMode:!1})},b3db:function(t,e,n){"use strict";var i=n("7d44"),r=n.n(i);r.a},cb4c:function(t,e,n){"use strict";n.r(e);var i=n("62e3"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},cbae:function(t,e,n){var i=n("7b13");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("7be8e060",i,!0,{sourceMap:!1,shadowMode:!1})},d707:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-594dd080]{background-color:#f1f1f1}.zhangicon[data-v-594dd080]{width:%?150?%;height:%?150?%;position:absolute;right:%?10?%;top:0;bottom:0;margin:auto}.couponricon[data-v-594dd080]{width:%?115?%;height:%?115?%;position:absolute;top:0;bottom:0;right:%?160?%;margin:auto}.couponricon uni-image[data-v-594dd080]{width:100%;height:100%}body.?%PAGE?%[data-v-594dd080]{background-color:#f1f1f1}',""]),t.exports=e},ddf4:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(t){this.initObserver()},enable:function(t){0==t?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var t=this;this.enable&&(this.stickyTop=0!=this.offsetTop?uni.upx2px(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))})))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enable&&t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<this.stickyTop;e?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=i},e2b0:function(t,e,n){"use strict";n.r(e);var i=n("ddf4"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}}]);