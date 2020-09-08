import config from "./ajax.js";



function wxshare(data) {
	return new Promise(function(resolve, reject) {
		console.log("imageUrl:", data.imageUrl);
		console.log("title:", data.title);
		console.log("path:", data.path);
		// uni.share({
		// 	provider: 'weixin',
		// 	scene: "WXSceneSession",
		// 	type: 5,
		// 	imageUrl: data.imageUrl ? data.imageUrl : '',
		// 	title: data.title,
		// 	miniProgram: {
		// 		id: 'gh_e847e4f386e4',
		// 		path: data.path,
		// 		type: 0,
		// 	},
		// 	success: ret => {
		// 		console.log(JSON.stringify(ret));
		// 		resolve(ret);
		// 	},
		// 	fail(err) {
		// 		console.log("分享失败", err);
		// 		reject(err);
		// 	}
		// });
		if(data.imageUrl){
			uni.downloadFile({
			    url:data.imageUrl, //仅为示例，并非真实的资源
			    success: (res) => { 
			        if (res.statusCode === 200) {
			            console.log('下载成功',res);
						let down=res.tempFilePath
						uni.share({
							provider: 'weixin',
							scene: "WXSceneSession",
							type: 5,
							imageUrl:down,
							title: data.title,
							miniProgram: {
								id: 'gh_e847e4f386e4',
								path:data.path,
								type: 0,
								webUrl: 'http:/ /www.qianniangy.net/'
							},
							success: ret => {
								console.log(JSON.stringify(ret));
								resolve(ret);
							},
							fail(err) {
								console.log("分享失败", err);
								reject(err);
							}
						}); 
			        }
			    },fail() {
					console.log("下载失败")
			    	uni.showToast({
			    		title:'出了点问题',
						icon:'none'
			    	})
			    }
			}); 
		}else{
			uni.share({
				provider: 'weixin',
				scene: "WXSceneSession",
				type: 5, 
				imageUrl:'/static/logo1.png',
				title: data.title,
				miniProgram: {
					id: 'gh_e847e4f386e4',
					path:data.path,
					type: 0, 
					webUrl: 'http:/ /www.qianniangy.net/'
				},
				success: ret => {
					console.log(JSON.stringify(ret));
					resolve(ret);
				},  
				fail(err) {
					console.log("分享失败", err);
					reject(err);
				}
			});
		}
		

	})
}

function wxpyshare(data) {
	return new Promise(function(resolve, reject) {
		uni.share({
			provider: "weixin",
			scene: 'WXSenceTimeline',
			type: data.type,
			imageUrl: data.img ? data.img : '',
			mediaUrl: data.video ? data.video : '',
			success: function(res) {
				console.log("success:" + JSON.stringify(res));
			},
			fail: function(err) {
				console.log("fail:" + JSON.stringify(err));
			}
		});
	})
}

function wxpyqshare(data) {
	return new Promise(function(resolve, reject) {
		uni.share({
			provider: "weixin",
			scene: "WXSceneSession",
			type: 2,
			imageUrl: data,
			success: function(res) {
				console.log("success:" + JSON.stringify(res));
			},
			fail: function(err) {
				console.log("fail:" + JSON.stringify(err));
			}
		});
	})
}

function share(data) {
	var fxinfo = uni.getStorageSync("fxinfo");
	let share = uni.getStorageSync("share");
	var data1 = {
		href: fxinfo.url,
		title: share.title ? share.title : "千年国医",
		summary: share.ftitle ? share.ftitle : "千年国医",
		imageUrl: share.thumbs ? share.thumbs : "/static/img/icon.png",
	};
	console.log("啊什么的卡", JSON.stringify(data));
	return new Promise(function(resolve, reject) {
		// let type = data.type;
		let provider = '';
		let scene = '';
		let type = data.type;
		if (type != 4) {
			if (type == 0) {
				uni.share({
					provider: 'weixin',
					type: 5,
					imageUrl: fx.imageUrl,
					title: fx.title,
					miniProgram: {
						id: 'gh_e229d21f070b',
						path: fx.path,
						webUrl: 'http://www.caiguohouzi.net',
					},
					success(res) {
						resolve(res);
					},
					fail(err) {
						var i = {
							code: 1,
							err
						}
						resolve(i);
						console.log("分享失败：", err);
					}
				});
			} else if (type == 1) {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: data1.href,
					title: data1.title,
					summary: data1.summary,
					imageUrl: data1.imageUrl,
					success: function(res) {
						resolve(res);
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						var i = {
							code: 1,
							err
						}
						resolve(i);
						console.log("fail:" + JSON.stringify(err));
					}
				});
			} else if (type == 2) {
				provider = "sinaweibo";
				uni.share({
					provider: "sinaweibo",
					type: 0,
					href: data1.href,
					title: data1.title,
					summary: data1.summary,
					imageUrl: data1.imageUrl,
					success: function(res) {
						resolve(res);
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						var i = {
							code: 1,
							err
						}
						resolve(i);
						console.log("fail:" + JSON.stringify(err));
					}
				});
			} else if (type == 3) {
				uni.share({
					provider: "qq",
					type: 1,
					href: data1.href,
					title: data1.title,
					summary: data1.summary,
					imageUrl: data1.imageUrl,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
						resolve(res);
					},
					fail: function(err) {
						var i = {
							code: 1,
							err
						}
						resolve(i);
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		} else {
			uni.setClipboardData({
				data: fxinfo.url,
				success: function(res1) {
					uni.showToast({
						title: "已复制到剪切板"
					})
				}
			});
		}
	});

}





export default {
	async wxshare(data) {
		return wxshare(data)
	},
	async share(data) {
		return share(data)
	},
	async wxpyshare(data) {
		return wxpyshare(data)
	},
	async wxpyqshare(data) {
		return wxpyqshare(data)
	},

}
