(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-serve-binding-binding"],{"0f58":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={chunLeiModal:n("6c82").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"contents"},[n("v-uni-view",{staticClass:"yztitle"},[t._v("请输入验证信息")]),n("v-uni-view",{staticClass:"form-view"},[n("v-uni-view",{staticClass:"form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("手机号")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticStyle:{"fotn-size":"28rpx"},attrs:{placeholder:"请输入您的手机号",type:"number","placeholder-class":"phclass"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"sendCode"},[n("sendCode",{attrs:{phone:t.phone,event:"join"},on:{tuCode:function(e){arguments[0]=e=t.$handleEvent(e),t.tuCode.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"form-group "},[n("v-uni-view",{staticClass:"title"},[t._v("验证码")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticStyle:{"fotn-size":"28rpx"},attrs:{placeholder:"请输入您的验证码",type:"number","placeholder-class":"phclass"},model:{value:t.inputcode,callback:function(e){t.inputcode=e},expression:"inputcode"}})],1)],1)],1),n("v-uni-view",{staticClass:"text-center"},[n("v-uni-button",{staticClass:"cu-btn zcolor-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.seve.apply(void 0,arguments)}}},[t._v("确定")])],1),n("chunLei-modal",{ref:"chunLeiModal"})],1)],1)},o=[]},"7e37":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-923ab214]{background:#fff!important}.form-group[data-v-923ab214]{padding:%?0?%}.contents[data-v-923ab214]{padding:%?63?%}.icon[data-v-923ab214]{color:#e11b01;font-size:%?40?%;margin-right:%?20?%}.form-group .title[data-v-923ab214]{width:%?140?%;font-size:%?28?%;color:#a8a8a8}.sendCode[data-v-923ab214]{font-size:%?26?%;color:#ff5b1a}.phclass[data-v-923ab214]{color:#2e2e2e}.zcolor-btn[data-v-923ab214]{width:%?613?%;height:%?72?%;background-color:#ff6c13!important;-webkit-border-radius:%?36?%;border-radius:%?36?%;margin-top:%?123?%;color:#fff}.yztitle[data-v-923ab214]{font-size:%?36?%;color:#000;margin-bottom:%?40?%}body.?%PAGE?%[data-v-923ab214]{background:#fff!important}",""]),t.exports=e},"9aba":function(t,e,n){"use strict";var a=n("e872"),i=n.n(a);i.a},b526:function(t,e,n){"use strict";n.r(e);var a=n("0f58"),i=n("eba8");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9aba");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"923ab214",null,!1,a["a"],c);e["default"]=r.exports},b751:function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{info:{},userinfo:"",data:{title:"提示",content:"这是一个模态弹窗",cancelText:"cancel",confirmColor:"#3CC51F"},type:"notify",show:!1,code:"",inputcode:"",phone:""}},methods:{getinput:function(t){var e=t.currentTarget.dataset.name,a=t.detail.value;n.info[e]=a},tuCode:function(e){t("log",e," at pages/serve/binding/binding.vue:60"),n.code=e},seve:function(){n.type="notify",n.inputcode?(uni.showLoading({title:"请稍等...",mask:!0}),n.$request.request({url:n.api.coupons.validate_identity,data:{phone:n.phone},method:"POST",success:function(t){n.$alertok("验证成功"),uni.setStorageSync("Verifications",!0),uni.navigateBack({delta:1})}})):n.$refs.chunLeiModal.showModal({mData:{title:"提示",content:"请输入验证码",confirmText:"知道了",confirmColor:"#3CC51F"},type:"notify"})}},onLoad:function(){n=this;var t=uni.getStorageSync("userinfo");n.userinfo=t}};e.default=a}).call(this,n("0de9")["log"])},e872:function(t,e,n){var a=n("7e37");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("76882180",a,!0,{sourceMap:!1,shadowMode:!1})},eba8:function(t,e,n){"use strict";n.r(e);var a=n("b751"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);