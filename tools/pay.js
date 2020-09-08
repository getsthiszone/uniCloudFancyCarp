import request from "./ajax.js";
import api from "./api.js";
const platform = uni.getSystemInfoSync().platform;

function wxpay(order) {
	return new Promise(function(resolve, reject) {
		console.log("支付", JSON.parse(order))
		request.request({
			url: api.order.pay_data,
			data: {
				order_id: order,
				pay_type: "WECHAT_PAY",
			},
			Toast: '正在提交订单...',
			success(res) {
				// #ifdef APP-PLUS 
				if (platform == 'ios') {
					setTimeout(function() {
						uni.hideLoading()
					}, 3000)
				}
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: res, //微信单数据 
					success: function(res) {
						console.log("支付成功")
						uni.showToast({
							title: "支付成功"
						})
						resolve(res)
					},
					fail: function(err) {
						console.log("支付失败", err)
						uni.showToast({
							title: "支付失败",
							icon: 'none'
						})
						reject(err)
					},
					complete(res) {
						console.log("支付失111败", res)
					}
				});
				//#endif
				//#ifdef MP-WEIXIN 
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: res.timeStamp,
					nonceStr: res.nonceStr,
					package: res.package,
					signType: res.signType,
					paySign: res.paySign,
					success: function(res) {
						console.log("支付成功")
						uni.showToast({
							title: "支付成功"
						})
						resolve(res)
					},
					fail: function(err) {
						console.log("支付失败", err)
						uni.showToast({
							title: "支付失败",
							icon: 'none'
						})
						reject(err)
					},
				});
				//#endif 
			},
			complete(res) {
				console.log(res);
			}
		})
	})
}

function alpay(order) {
	return new Promise(function(resolve, reject) {
		console.log("支付", order)
		uni.showLoading({
			title: "正在提交订单...",
			mask: true
		})
		if (platform == 'ios') {
			setTimeout(function() {
				uni.hideLoading()
			}, 3000)
		}
		request.request({
			url: api.order.pay_data,
			data: {
				order_id: order,
				pay_type: "ALIPAY",
			},
			success(res) {
				// res.order_string
				let orderinfo = "";
				orderinfo = res.order_string;
				console.log("~~~~~~~~~", orderinfo);
				uni.requestPayment({
					provider: 'alipay',
					orderInfo: orderinfo,
					success: function(res) {
						console.log("支付成功")
						uni.showToast({
							title: "支付成功"
						})
						resolve(res)
					},
					fail: function(err) {
						console.log("支付失败", err)
						uni.showToast({
							title: "支付失败",
							icon: 'none'
						})
						reject(err)
					},
					complete() {
						uni.hideLoading()
					}
				});
			}
		})
	})
}

function lqpay(order_id) {
	console.log("订单：", order_id);
	return new Promise(function(resolve, reject) {
		request.request({
			url: api.order.pay_data,
			data: {
				order_id: order_id,
				pay_type: "BALANCE_PAY",
			},
			success(res) {
				console.log(res, 33333);
				resolve(res)
			},
			fail(res) {
				reject(res)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}

function jfpay(order_id) {
	return new Promise(function(resolve, reject) {
		request.request({
			url: 'index/order/payOrder',
			data: {
				order_id: order_id,
				pay_type: "BALANCE_PAY",
			},
			success(res) {
				console.log(res, 33333);
				resolve(res)
			},
			fail(res) {
				reject(res)
			}
		})
	})
}



function zwxpay(res) {
	return new Promise(function(resolve, reject) {
		console.log(res);
		console.log("支付参数：", res);
		uni.requestPayment({
			provider: 'wxpay',
			timeStamp: res.timeStamp,
			nonceStr: res.nonceStr,
			package: res.package,
			signType: res.signType,
			paySign: res.paySign,
			success: function(res) {
				console.log("支付成功")
				uni.showToast({
					title: "支付成功"
				})
				resolve(res)
			},
			fail: function(err) {
				console.log("支付失败", err)
				uni.showToast({
					title: "支付失败",
					icon: 'none'
				})
				reject(err)
			},
		});
	})
}

function zalpay(orderinfo) {
	return new Promise(function(resolve, reject) {
		if (platform == 'ios') {
			setTimeout(function() {
				uni.hideLoading()
			}, 3000)
		}
		uni.requestPayment({
			provider: 'alipay',
			orderInfo: orderinfo.order_string,
			success(res) {
				console.log("支付成功")
				resolve(res)
				uni.showToast({
					title: "支付成功"
				})
			},
			fail(err) {
				console.log("支付失败", err)
				reject(err)
				uni.showToast({
					title: "支付失败",
					icon: 'none'
				})
			},
		});

	})
}


export default {
	async pay(paytype, order_id) {
		if (paytype == "WECHAT_PAY") {
			// 微信支付
			return wxpay(order_id)
		}
		if (paytype == "ALIPAY") {
			// 支付宝支付
			return alpay(order_id)
		}
		if (paytype == "BALANCE_PAY") {
			// 零钱支付 
			return lqpay(order_id)
		}
	},
	async zpay(res){
		//#ifdef MP-WEIXIN
		return zwxpay(res)
		//#endif
		//#ifdef MP-ALIPAY 
		return zalpay(res)
		//#endif
	}

}
