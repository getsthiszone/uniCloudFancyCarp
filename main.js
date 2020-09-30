import Vue from 'vue'
import App from './App'

import uView from 'uview-ui';
Vue.use(uView);

import cloudapi from '@/tools/api/api.js';

import config from './config.js'
Vue.prototype.cloudapi = cloudapi;
Vue.prototype.alioss_baseurl = config.alioss_baseurl;

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

import nolist from '@/components/nolist.vue'
Vue.component('nolist', nolist)

import tabview from '@/components/tabview.vue'
Vue.component('tabview', tabview)

import shear from '@/components/shear.vue'
Vue.component('shear', shear)

import nomore from '@/components/nomore.vue'
Vue.component('nomore', nomore)

import sendCode from '@/components/sendCode.vue'
Vue.component('sendCode', sendCode)

import uniNoticeBar from '@/components/notice-bar/uni-notice-bar.vue'
Vue.component('uniNoticeBar', uniNoticeBar)

import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue'
Vue.component('chunLei-modal', chunLeiModal);
Vue.prototype.chunLeiModal = chunLeiModal;

import goodslist from '@/components/goodslist.vue'
Vue.component('goodslist', goodslist);

import Skeleton from '@/components/J-skeleton/J-skeleton.vue'
Vue.component('Skeleton', Skeleton);
//下拉刷新
import pullDownView from '@/components/pullDownView.vue'
Vue.component('pullDownView', pullDownView);

import suspension from '@/Gcomponents/suspension.vue'
Vue.component('suspension', suspension);
// 图片
import Gimage from '@/Gcomponents/Gimage/Gimage.vue'
Vue.component('Gimage', Gimage);

import linkview from '@/Gcomponents/linkview.vue'
Vue.component('linkview', linkview);

import qrcode from '@/Gcomponents/qrcode.vue'
Vue.component('qrcode', qrcode);

// 请求模块
import $request from "./tools/ajax.js";
Vue.prototype.$request = $request;

// 上传图片插件
import upload_img from "./tools/upload_img.js";
Vue.prototype.$Uploader = upload_img;
// 上传视频
import upload_video from "./tools/upload_video.js";
Vue.prototype.$Upvideo = upload_video;
// 上传音频
import upload_audio from "./tools/upload_audio.js";
Vue.prototype.$Upaudio = upload_audio;
// 上传阿里云
import alupload from "./tools/alupload.js";
Vue.prototype.$alupload = alupload;




// 支付
import $pay from "./tools/pay.js";
Vue.prototype.$pay = $pay;

//杂项封装
import zax from "./tools/zax.js";
Vue.prototype.$zax = zax;

//表单验证 
import form from "./tools/form.js";
Vue.prototype.$form = form;
 

// 接口
import api from "./tools/api.js";
Vue.prototype.api = api;

// 弹窗
import tanchuang from './tools/model.js'
Vue.prototype.tanchuang = tanchuang;
// 分享
import share from "@/tools/share.js";
Vue.prototype.$share = share;
// 绘制海报 
import canvasDraw from "@/tools/canvasDraw.js";
Vue.prototype.$canvasDraw = canvasDraw;

Vue.filter('addurl', function(value) {
	let url = value;
	if (url && url.indexOf("http") == -1) {
		url = Vue.prototype.alioss_baseurl + url
	}
	return url
})
Vue.filter('fotmatTime', function(value) {
	let time;
	if (value) {
		time = zax.formatDate(value * 1000).time
	} else {
		time = '无'
	}
	return time;
})

Vue.filter('ossImg', function(value) {
	return value + '?x-oss-process=video/snapshot,t_1000,m_fast';
})

// 无状态提示信息
Vue.prototype.$alert = function(msg) {
	if (!msg) {
		return
	}
	uni.showToast({
		title: msg,
		icon: 'none',
		duration: 1200
	})
};
// 成功
Vue.prototype.$alertok = function(msg) {
	if (!msg) {
		return
	}
	uni.showToast({
		title: msg,
		duration: 1200
	})
};
// 强提示
Vue.prototype.$showModal = function(msg) {
	if (!msg) {
		return
	}
	uni.showModal({
		title: '提示',
		content: msg,
		showCancel: false,
		confirmText: '知道了'
	})
};

//失败
Vue.prototype.$failToast = function(msg) {
	if (!msg) {
		return
	}
	uni.showToast({
		title: msg,
		image: "/static/icon/icon-warning.png",
		duration: 1200
	})
};
Vue.prototype.$showLoading = function(msg) {
	if (!msg) {
		return
	}
	uni.showLoading({
		title: msg,
		mask: true
	})
};

Vue.prototype.tpurl = function(e) {
	let url = e.currentTarget.dataset.url
	if (!url) {
		return
	}
	uni.navigateTo({
		url: url
	})
};

Vue.prototype.$addurl = function(value) {
	let url = value;
	if (url && url.indexOf("http") == -1) {
		url = Vue.prototype.alioss_baseurl + url
	}
	return url
};


Vue.config.productionTip = false

Vue.prototype.$app = App;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
