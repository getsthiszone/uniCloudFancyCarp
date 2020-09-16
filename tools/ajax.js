/*
	2019-02-20 lane 封装wx-app请求 
*/
import config from "../config.js";

var utils = {}

utils.request = function(option) {
	let token = uni.getStorageSync('token')? uni.getStorageSync('token') : '';
	// 98bcd3e3-2264-46ff-ad9e-43367864c484
	// 818ded1c-f899-436a-87b3-a54b5ae065b8
	// 4c357d37-ca04-4029-aaa6-e3173da0c928
	uni.setStorageSync("url", config.base_url);
	uni.setStorageSync("token", token);
	option.data || (option.data = {});
	if (option.Toast) {
		uni.showLoading({
			title: option.Toast,
			mask: true
		})
	}
	// let pages= getCurrentPages();
	// console.log(pages); 
	// if (uni.getStorageSync("_position")) { 
	// 	option.url = option.url + '&_position=' + uni.getStorageSync("_position")
	// }  
	option.data["token"] = token ? token : '';
	uni.request({
		url: option.url,
		data: option.data,
		method: option.method || "GET",
		dataType: option.dataType || "json",
		header: {
			"content-type": "application/x-www-form-urlencoded;charset=UTF-8"
		},
		success(res) { 
			if (res.data.code == -1) {
				// uni.navigateTo({
				// 	url: '/pages/login/login'
				// })
			} else if (res.data.code == 1) {
				option.success && option.success(res.data.data, res.data)
			} else {
				if (option.fail) {
					option.fail(res.data.data, res.data)
				} else {
					uni.showToast({
						title: res.data.msg,
						// image: "/static/icon/icon-warning.png",
						icon: 'none',
						duration: 1200
					})
				}
			}
		},
		fail(e) {
			uni.onNetworkStatusChange({
				success(res) {
					console.log("网络状态", res)
				}, 
			})
			uni.getNetworkType({
				success: function(res) {
					let networkType = res.networkType;
					var t = getApp();
					t.is_on_launch ? (t.is_on_launch = !1, o.showModal({
						title: "网络请求出错",
						content: e.errMsg || "",
						showCancel: !1,
						success: function(e) {
							e.confirm && option.fail && option.fail(e)
						}
					})) : (uni.showToast({
						title: e.errMsg,
						icon: 'none',
						// image: "/static/icon/icon-warning.png",
						duration: 2200
					}), option.fail && option.fail(e))
				}
			});
		},
		complete(t) {
			// if (200 != t.statusCode && t.data && t.data.code && 500 == t.data.code) {
			// 	var e = t.data.data.message;
			// 	console.error("系统错误", e,option.url)
			// 	uni.showToast({
			// 		title: '请求错误0591',
			// 		icon: 'none',
			// 		image: "/static/icon/icon-warning.png",
			// 		duration: 1200
			// 	})
			// }  
			option.complete && option.complete(t)
			if (option.Toast) {
				uni.hideLoading()
			}
		}
	})

};

utils.hint = function(option) {
	uni.showModal({
		title: "提示",
		content: option.msg,
		showCancel: false,
		confirmText: option.confirm ? option.confirm : "知道了",
		confirmColor: "#0x1AA0",
		success(res) {
			option.success ? option.success(res) : ''
		}
	})
}
// 更新用户信息 
utils.getuserIndex = function(option) {
	utils.request({
		url: "api/user/index",
		success(res) {
			uni.setStorageSync("userInfo", res)
		}
	})
}

module.exports = utils;
