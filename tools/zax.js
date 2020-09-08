import request from "./ajax.js";
import api from "./api.js";
import Vue from 'vue';
// 倒计时
function Conversiontime(timestamp) {
	return new Promise(function(resolve, reject) {
		var timestamp1 = Number(timestamp);
		var date = Math.round(new Date());
		let endtime = (timestamp1 - Number(date)) / 1000;
		var d = '00';
		var h = '00';
		var m = '00';
		var s = '00';
		let time = {
			d,
			h,
			m,
			s,
			endtime
		};
		if (endtime > 0) {
			d = parseInt(endtime / 86400);
			h = parseInt((endtime % 86400) / 3600);
			m = parseInt(((endtime % 86400) % 3600) / 60);
			s = parseInt(((endtime % 86400) % 3600) % 60);
			time = {
				d: d < 10 ? '0' + d : d,
				h: h < 10 ? '0' + h : h,
				m: m < 10 ? '0' + m : m,
				s: s < 10 ? '0' + s : s,
				endtime: endtime
			}
		}
		resolve(time);
	})
};
// 时间戳转换
function formatDate(time) {
	var now = new Date(time);
	var year = now.getFullYear();
	var month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
	var day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
	var hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
	var minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
	var second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
	let data = {
		year,
		month,
		day,
		hour,
		minute,
		second,
		time: year + '-' + month + '-' + day + ' ' + hour + ':' + minute
	}
	return data;
}

function getheaderSize() {
	uni.getSystemInfo({
		success: function(e) {
			if (e.model && (e.model.indexOf('iPhone X') != -1 || e.model.indexOf('iPhone 11') != -1)) {
				uni.setStorageSync('iosx', true);
			} else {
				uni.setStorageSync('iosx', false);
			}
			Vue.prototype.windowHeight = e.windowHeight;
			// #ifndef MP
			Vue.prototype.StatusBar = e.statusBarHeight;
			if (e.platform == 'android') {
				Vue.prototype.CustomBar = e.statusBarHeight + 50;
			} else {
				Vue.prototype.CustomBar = e.statusBarHeight + 45;
			}
			// #endif 
			// #ifdef MP-WEIXIN
			Vue.prototype.StatusBar = e.statusBarHeight;
			let custom = wx.getMenuButtonBoundingClientRect();
			Vue.prototype.Custom = custom;
			Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			// #endif

			// #ifdef MP-ALIPAY
			Vue.prototype.StatusBar = e.statusBarHeight;
			Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
			// #endif 
			Vue.prototype.scrollHeight = e.windowHeight - Vue.prototype.CustomBar

		}
	});
}


// 更新用户信息
function userinfo() {
	return new Promise(function(resolve, reject) {
		request.request({
			url: api.demo.getMemberInfo,
			success(res) {
				let userinfo = res;
				userinfo.avatar = Vue.prototype.$addurl(userinfo.avatar);
				uni.setStorageSync("userinfo", userinfo);
				resolve(userinfo)
			}
		});
	})
};

// 判断是否登录
function yzlogin() {
	return new Promise(function(resolve, reject) {
		var openid = uni.getStorageSync("openid");
		if (!openid) {
			uni.navigateTo({
				url: "/pages/login/login"
			})
			reject(1)
		} else {
			resolve(2)
		}
	})
}

// 获取我的二维码 
function qrQrcode() {
	return new Promise(function(resolve, reject) {
		request.request({
			url: api.share.mini_qrcode,
			success(res) {
				uni.setStorageSync("qrQrcode", res);
				resolve(res)
			},
			fail() {}
		})
	})
}

// 获取配置文件
function getConfig() {
	return new Promise(function(resolve, reject) {
		request.request({
			url: api.common.configure,
			success(res) {
				uni.setStorageSync("config", res)
				resolve(res)
			}
		})
	})
}



function scode(thatpage) {
	let that = this;
	return new Promise(function(resolve, reject) {
		uni.scanCode({
			success(res) {
				let data = {};
				let t = res.result.split('&');
				for (let i in t) {
					let value = t[i].split('=');
					data[value[0]] = value[1];
				}
				console.log('二维码', data);
				if (data.id) {
					uni.showModal({
						title: "提示",
						content: "确定要核销该优惠券吗？",
						success(res) {
							if (res.confirm) {
								request.request({
									url: api.coupons.validate_ma,
									data: {
										ticket_id: data.id
									},
									method:'post',
									success(res) {
										uni.showToast({
											title:"核销成功"
										})
									}
								})
							}
						}
					}) 
				}
			},
			fail(res) {
				console.log("扫码失败")
			}
		});
	})
}





function getQuery(url, name) {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let list = url.split(",");
	let text = ''
	for (let i in list) {
		let r = list[i].match(reg);
		if (r != null) {
			text = unescape(r[2]);
		}
	}
	return text;

}

// 登录 
function unionLogin(e) {
	return new Promise(function(resolve, reject) {
		request.request({
			url: api.user.mini_app_auth,
			method: "POST",
			data: e,
			success(res) {
				uni.showToast({
					title: "登录成功",
				})
				uni.setStorageSync("userinfo", res);
				resolve(res)
			}
		})
	})
}



export default {
	async Conversiontime(timestamp) {
		return Conversiontime(timestamp);
	},
	async userinfo() {
		return userinfo();
	},
	async yzlogin() {
		return yzlogin();
	},
	async qrQrcode() {
		return qrQrcode();
	},
	async getMoney() {
		return getMoney();
	},
	async unionLogin(option) {
		return unionLogin(option);
	},
	async getConfig() {
		return getConfig();
	},
	formatDate(data) {
		return formatDate(data);
	},
	async scode(thatpage) {
		return scode(thatpage)
	},
	getQuery(url, name) {
		return getQuery(url, name)
	},
	getheaderSize() {
		return getheaderSize()
	},

}
