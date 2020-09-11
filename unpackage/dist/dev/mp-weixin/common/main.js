(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*************************************************************!*\
  !*** D:/G/mine/uniCloudFancyCarp/uniCloudFancyCarp/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 13));
var _api = _interopRequireDefault(__webpack_require__(/*! @/tools/api/api.js */ 39));



var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 9));


















































var _ajax = _interopRequireDefault(__webpack_require__(/*! ./tools/ajax.js */ 8));



var _upload_img = _interopRequireDefault(__webpack_require__(/*! ./tools/upload_img.js */ 52));


var _upload_video = _interopRequireDefault(__webpack_require__(/*! ./tools/upload_video.js */ 53));


var _upload_audio = _interopRequireDefault(__webpack_require__(/*! ./tools/upload_audio.js */ 54));


var _alupload = _interopRequireDefault(__webpack_require__(/*! ./tools/alupload.js */ 55));






var _pay = _interopRequireDefault(__webpack_require__(/*! ./tools/pay.js */ 57));



var _zax = _interopRequireDefault(__webpack_require__(/*! ./tools/zax.js */ 58));



var _form = _interopRequireDefault(__webpack_require__(/*! ./tools/form.js */ 59));




var _api2 = _interopRequireDefault(__webpack_require__(/*! ./tools/api.js */ 56));



var _model = _interopRequireDefault(__webpack_require__(/*! ./tools/model.js */ 60));


var _share = _interopRequireDefault(__webpack_require__(/*! @/tools/share.js */ 61));


var _canvasDraw = _interopRequireDefault(__webpack_require__(/*! @/tools/canvasDraw.js */ 62));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.use(_uviewUi.default);console.log(_uviewUi.default);_vue.default.prototype.cloudapi = _api.default;_vue.default.prototype.alioss_baseurl = _config.default.alioss_baseurl;var cuCustom = function cuCustom() {__webpack_require__.e(/*! require.ensure | colorui/components/cu-custom */ "colorui/components/cu-custom").then((function () {return resolve(__webpack_require__(/*! ./colorui/components/cu-custom.vue */ 146));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('cu-custom', cuCustom);var nolist = function nolist() {__webpack_require__.e(/*! require.ensure | components/nolist */ "components/nolist").then((function () {return resolve(__webpack_require__(/*! @/components/nolist.vue */ 151));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('nolist', nolist);var tabview = function tabview() {__webpack_require__.e(/*! require.ensure | components/tabview */ "components/tabview").then((function () {return resolve(__webpack_require__(/*! @/components/tabview.vue */ 158));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('tabview', tabview);var shear = function shear() {__webpack_require__.e(/*! require.ensure | components/shear */ "components/shear").then((function () {return resolve(__webpack_require__(/*! @/components/shear.vue */ 165));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('shear', shear);var nomore = function nomore() {__webpack_require__.e(/*! require.ensure | components/nomore */ "components/nomore").then((function () {return resolve(__webpack_require__(/*! @/components/nomore.vue */ 172));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('nomore', nomore);var sendCode = function sendCode() {__webpack_require__.e(/*! require.ensure | components/sendCode */ "components/sendCode").then((function () {return resolve(__webpack_require__(/*! @/components/sendCode.vue */ 179));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('sendCode', sendCode);var uniNoticeBar = function uniNoticeBar() {__webpack_require__.e(/*! require.ensure | components/notice-bar/uni-notice-bar */ "components/notice-bar/uni-notice-bar").then((function () {return resolve(__webpack_require__(/*! @/components/notice-bar/uni-notice-bar.vue */ 184));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('uniNoticeBar', uniNoticeBar);var chunLeiModal = function chunLeiModal() {Promise.all(/*! require.ensure | components/chunLei-modal/chunLei-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/chunLei-modal/chunLei-modal")]).then((function () {return resolve(__webpack_require__(/*! @/components/chunLei-modal/chunLei-modal.vue */ 191));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('chunLei-modal', chunLeiModal);_vue.default.prototype.chunLeiModal = chunLeiModal;var goodslist = function goodslist() {__webpack_require__.e(/*! require.ensure | components/goodslist */ "components/goodslist").then((function () {return resolve(__webpack_require__(/*! @/components/goodslist.vue */ 199));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('goodslist', goodslist);var Skeleton = function Skeleton() {__webpack_require__.e(/*! require.ensure | components/J-skeleton/J-skeleton */ "components/J-skeleton/J-skeleton").then((function () {return resolve(__webpack_require__(/*! @/components/J-skeleton/J-skeleton.vue */ 206));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('Skeleton', Skeleton); //下拉刷新
var pullDownView = function pullDownView() {__webpack_require__.e(/*! require.ensure | components/pullDownView */ "components/pullDownView").then((function () {return resolve(__webpack_require__(/*! @/components/pullDownView.vue */ 213));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('pullDownView', pullDownView);var suspension = function suspension() {__webpack_require__.e(/*! require.ensure | Gcomponents/suspension */ "Gcomponents/suspension").then((function () {return resolve(__webpack_require__(/*! @/Gcomponents/suspension.vue */ 220));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('suspension', suspension); // 图片
var Gimage = function Gimage() {__webpack_require__.e(/*! require.ensure | Gcomponents/Gimage/Gimage */ "Gcomponents/Gimage/Gimage").then((function () {return resolve(__webpack_require__(/*! @/Gcomponents/Gimage/Gimage.vue */ 227));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('Gimage', Gimage);var linkview = function linkview() {__webpack_require__.e(/*! require.ensure | Gcomponents/linkview */ "Gcomponents/linkview").then((function () {return resolve(__webpack_require__(/*! @/Gcomponents/linkview.vue */ 234));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('linkview', linkview);var qrcode = function qrcode() {Promise.all(/*! require.ensure | Gcomponents/qrcode */[__webpack_require__.e("common/vendor"), __webpack_require__.e("Gcomponents/qrcode")]).then((function () {return resolve(__webpack_require__(/*! @/Gcomponents/qrcode.vue */ 241));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('qrcode', qrcode); // 请求模块
_vue.default.prototype.$request = _ajax.default; // 上传图片插件
_vue.default.prototype.$Uploader = _upload_img.default; // 上传视频
_vue.default.prototype.$Upvideo = _upload_video.default; // 上传音频
_vue.default.prototype.$Upaudio = _upload_audio.default; // 上传阿里云
_vue.default.prototype.$alupload = _alupload.default; // 支付
_vue.default.prototype.$pay = _pay.default; //杂项封装
_vue.default.prototype.$zax = _zax.default; //表单验证 
_vue.default.prototype.$form = _form.default; // 接口
_vue.default.prototype.api = _api2.default; // 弹窗
_vue.default.prototype.tanchuang = _model.default; // 分享
_vue.default.prototype.$share = _share.default; // 绘制海报 
_vue.default.prototype.$canvasDraw = _canvasDraw.default;_vue.default.filter('addurl', function (value) {var url = value;if (url && url.indexOf("http") == -1) {url = _vue.default.prototype.alioss_baseurl + url;}return url;});_vue.default.filter('fotmatTime', function (value) {var time;if (value) {time = _zax.default.formatDate(value * 1000).time;} else {
    time = '无';
  }
  return time;
});

_vue.default.filter('ossImg', function (value) {
  return value + '?x-oss-process=video/snapshot,t_1000,m_fast';
});

// 无状态提示信息
_vue.default.prototype.$alert = function (msg) {
  if (!msg) {
    return;
  }
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 1200 });

};
// 成功
_vue.default.prototype.$alertok = function (msg) {
  if (!msg) {
    return;
  }
  uni.showToast({
    title: msg,
    duration: 1200 });

};
// 强提示
_vue.default.prototype.$showModal = function (msg) {
  if (!msg) {
    return;
  }
  uni.showModal({
    title: '提示',
    content: msg,
    showCancel: false,
    confirmText: '知道了' });

};

//失败
_vue.default.prototype.$failToast = function (msg) {
  if (!msg) {
    return;
  }
  uni.showToast({
    title: msg,
    image: "/static/icon/icon-warning.png",
    duration: 1200 });

};
_vue.default.prototype.$showLoading = function (msg) {
  if (!msg) {
    return;
  }
  uni.showLoading({
    title: msg,
    mask: true });

};

_vue.default.prototype.tpurl = function (e) {
  var url = e.currentTarget.dataset.url;
  if (!url) {
    return;
  }
  uni.navigateTo({
    url: url });

};

_vue.default.prototype.$addurl = function (value) {
  var url = value;
  if (url && url.indexOf("http") == -1) {
    url = _vue.default.prototype.alioss_baseurl + url;
  }
  return url;
};


_vue.default.config.productionTip = false;

_vue.default.prototype.$app = _App.default;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!*************************************************************!*\
  !*** D:/G/mine/uniCloudFancyCarp/uniCloudFancyCarp/App.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 10);
/* harmony import */ var _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!**************************************************************************************!*\
  !*** D:/G/mine/uniCloudFancyCarp/uniCloudFancyCarp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/G/mine/uniCloudFancyCarp/uniCloudFancyCarp/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ajax = _interopRequireDefault(__webpack_require__(/*! @/tools/ajax.js */ 8));
var _config = _interopRequireDefault(__webpack_require__(/*! @/config.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  onLaunch: function onLaunch(option) {
    // 处理小程序二维码传
    if (option.query) {
      if (option.query.scene) {
        var scene = decodeURIComponent(option.query.scene);
        console.log('进入程序传值：', scene);
        var parent_id = this.$zax.getQuery(scene, 'parent_id');
        var user_id = this.$zax.getQuery(scene, 'user_id');
        var asgid = this.$zax.getQuery(scene, 'asgid');
        if (asgid) {
          var asgdata = {
            asgid: asgid,
            type: this.$zax.getQuery(scene, 'type') };

          uni.setStorageSync('asgdata', asgdata);
        }
        // console.log("上级id：",parent_id)
        if (parent_id || user_id) {
          uni.setStorageSync('parent_id', parent_id ? parent_id : user_id);
          if (uni.getStorageSync('token')) {
            this.$zax.bind_parent(parent_id);
          }
        }
      }
    }
    // this.$zax.getConfig();
    if (uni.getStorageSync("token")) {
      // this.$zax.userinfo();
    }
  },
  onShow: function onShow() {
    console.log('App Show');
    console.log(this.$u.config.v);
  },
  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/*!***********************************************************************************************!*\
  !*** D:/G/mine/uniCloudFancyCarp/uniCloudFancyCarp/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 11);
/* harmony import */ var _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_8_0_20200701_alpha_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/G/mine/uniCloudFancyCarp/uniCloudFancyCarp/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map