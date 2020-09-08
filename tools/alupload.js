import config from "../config.js";
import request from "./ajax.js";
import api from "./api.js";

function upload(filePath) {
	console.log("上传：", filePath);
	//
	// let stype = filePath.tempFile
	// let index = stype.lastIndexOf("/") + 1 
	// let videotype = stype.substring(index);
	let stype = filePath
	let index = stype.lastIndexOf(".") + 1
	let videotype = stype.substring(index);
	console.log(videotype);
	return new Promise((resolve, reject) => {
		const FileKey = new Date().getTime() + Math.floor(Math.random() * 150);
		const aliyunFileKey = FileKey + '.' + videotype;
		uni.request({
			url: config.staff_url + 'addons/alioss/index/params',
			data: {
				md5: FileKey,
				name: aliyunFileKey
			},
			method: "POST",
			success(res) {
				let data = res.data.data
				console.log(data);
				let aliyunServerURL = uni.getStorageSync("config").alioss_baseurl; //OSS地址，需要https 
				let uploadTask = uni.uploadFile({
					url: aliyunServerURL, //开发者服务器 url
					filePath: filePath, //要上传文件资源的路径
					name: 'file', //必须填file
					formData: {
						'key': data.key,
						'policy': data.policy,
						'OSSAccessKeyId': data.id,
						'signature': data.signature,
						'success_action_status': '200',
					},
					success: function(res) {
						console.log(res);
						if (res.statusCode == 200) {
							let upurl = `${aliyunServerURL}/${data.key}`;
							console.log(upurl)
							resolve(upurl);
						}
					},
					fail: function(err) {
						failc(err);
					},
				})
				uploadTask.onProgressUpdate((res) => {
					uni.showLoading({
						title: '正在上传' + res.progress + '%',
						mask: true
					});
					if (res.progress == 100) {
						uni.showToast({
							title: "上传成功"
						})
					}
				});
			}
		})
	})
}


function appupdata(filePath) {
	// 绘制进度需要的数据
	let popupData = {
		progress: true,
		buttonNum: 2
	};
	// if (data.forceUpdate) {
	// 	popupData.buttonNum = 0;
	// }
	let dtask;
	let lastProgressValue = 0;
	// end 
	console.log("app上传：", filePath);
	let stype = filePath
	let index = stype.lastIndexOf(".") + 1
	let videotype = stype.substring(index);
	console.log(videotype);
	return new Promise((resolve, reject) => {
		const FileKey = new Date().getTime() + Math.floor(Math.random() * 150);
		const aliyunFileKey = FileKey + '.' + videotype;
		uni.request({
			url: config.staff_url + 'addons/alioss/index/params',
			data: {
				md5: FileKey,
				name: aliyunFileKey
			},
			method: "POST",
			success(res) {
				let data = res.data.data
				console.log(data);
				let aliyunServerURL = uni.getStorageSync("config").alioss_baseurl; //OSS地址，需要https 
				let uploadTask = uni.uploadFile({
					url: aliyunServerURL, //开发者服务器 url
					filePath: filePath, //要上传文件资源的路径
					name: 'file', //必须填file
					formData: {
						'key': data.key,
						'policy': data.policy,
						'OSSAccessKeyId': data.id,
						'signature': data.signature,
						'success_action_status': '200',
					},
					success: function(res) {
						console.log(res);
						if (res.statusCode == 200) {
							let upurl = `${aliyunServerURL}/${data.key}`;
							console.log(upurl)
							resolve(upurl);
						}
					},
					fail: function(err) {
						failc(err);
					},
				})
				//绘制进度弹窗
				downloadPopup(popupData, function(res) {
					uploadTask.onProgressUpdate((data) => {
						const progress = data.progress;
						// console.log("进度:",(progress - lastProgressValue),(progress - lastProgressValue >= 2),progress) 
						if (progress - lastProgressValue >= 2) {
								// console.log("进度1:", progress)
							// lastProgressValue = progress;
							res.change({
								progressValue: progress,
								progressTip: "上传" + progress + "%",
								progress: true
							});
						}
					});
				});
			}
		})

	})

}




// 文件下载的弹窗绘图
function downloadPopupDrawing(data) {
	// 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
	const screenWidth = plus.screen.resolutionWidth;
	const screenHeight = plus.screen.resolutionHeight;
	//弹窗容器宽度
	const popupViewWidth = screenWidth * 0.7;
	// 弹窗容器的Padding
	const viewContentPadding = 20;
	// 弹窗容器的宽度
	const viewContentWidth = popupViewWidth - (viewContentPadding * 2);
	// 弹窗容器高度
	let popupViewHeight = viewContentPadding * 2 + 60;
	let progressTip = data.progressTip || "准备上传...";
	let contentText = data.contentText || "正在准备上传，请耐心等待";
	let elementList = [{
			tag: 'rect', //背景色
			color: '#FFFFFF',
			rectStyles: {
				radius: "8px"
			}
		},
		{
			tag: 'font',
			id: 'content',
			text: contentText,
			textStyles: {
				size: '14px',
				color: "#333",
				verticalAlign: "middle",
				whiteSpace: "normal"
			},
			position: {
				top: viewContentPadding * 2 + 10 + 'px',
				height: "20px",
			}
		}
	];
	// 是否有进度条
	if (data.progress) {
		popupViewHeight += viewContentPadding + 40;
		elementList = elementList.concat([{
				tag: 'font',
				id: 'progressValue',
				text: progressTip,
				textStyles: {
					size: '14px',
					color: $mainColor,
					whiteSpace: "normal"
				},
				position: {
					top: viewContentPadding * 4 + 20 + 'px',
					height: "30px"
				}
			},
			{
				tag: 'rect', //绘制进度条背景
				id: 'progressBg',
				rectStyles: {
					radius: "4px",
					borderColor: "#f1f1f1",
					borderWidth: "1px",
				},
				position: {
					top: viewContentPadding * 4 + 60 + 'px',
					left: viewContentPadding + "px",
					width: viewContentWidth + "px",
					height: "8px"
				}
			},
		]);
	}
	popupViewHeight += viewContentPadding + 10;
	// if (data.buttonNum == 2) {
	// 	popupViewHeight += viewContentPadding + 30;
	// 	elementList = elementList.concat([{
	// 			tag: 'rect', //绘制底边按钮
	// 			rectStyles: {
	// 				radius: "3px",
	// 				borderColor: "#f1f1f1",
	// 				borderWidth: "1px",
	// 			},
	// 			position: {
	// 				bottom: viewContentPadding + 'px',
	// 				left: viewContentPadding + "px",
	// 				width: (viewContentWidth - viewContentPadding) / 2 + "px",
	// 				height: "30px"
	// 			}
	// 		},
	// 		{
	// 			tag: 'rect', //绘制底边按钮
	// 			rectStyles: {
	// 				radius: "3px",
	// 				color: $mainColor
	// 			},
	// 			position: {
	// 				bottom: viewContentPadding + 'px',
	// 				left: ((viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2) + "px",
	// 				width: (viewContentWidth - viewContentPadding) / 2 + "px",
	// 				height: "30px"
	// 			}
	// 		},
	// 		{
	// 			tag: 'font',
	// 			id: 'cancelText',
	// 			text: "取消上传",
	// 			textStyles: {
	// 				size: '14px',
	// 				color: "#666",
	// 				lineSpacing: "0%",
	// 				whiteSpace: "normal"
	// 			},
	// 			position: {
	// 				bottom: viewContentPadding + 'px',
	// 				left: viewContentPadding + "px",
	// 				width: (viewContentWidth - viewContentPadding) / 2 + "px",
	// 				height: "30px",
	// 			}
	// 		},
	// 		{
	// 			tag: 'font',
	// 			id: 'confirmText',
	// 			text: "后台上传",
	// 			textStyles: {
	// 				size: '14px',
	// 				color: "#FFF",
	// 				lineSpacing: "0%",
	// 				whiteSpace: "normal"
	// 			},
	// 			position: {
	// 				bottom: viewContentPadding + 'px',
	// 				left: ((viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2) + "px",
	// 				width: (viewContentWidth - viewContentPadding) / 2 + "px",
	// 				height: "30px",
	// 			}
	// 		}
	// 	]);
	// }
	if (data.buttonNum == 1) {
		popupViewHeight += viewContentPadding + 40;
		elementList = elementList.concat([{
				tag: 'rect', //绘制底边按钮
				rectStyles: {
					radius: "6px",
					color: $mainColor
				},
				position: {
					bottom: viewContentPadding + 'px',
					left: viewContentPadding + "px",
					width: viewContentWidth + "px",
					height: "40px"
				}
			},
			{
				tag: 'font',
				id: 'confirmText',
				text: "关闭",
				textStyles: {
					size: '14px',
					color: "#FFF",
					lineSpacing: "0%",
				},
				position: {
					bottom: viewContentPadding + 'px',
					left: viewContentPadding + "px",
					width: viewContentWidth + "px",
					height: "40px"
				}
			}
		]);
	}
	return {
		popupViewHeight: popupViewHeight,
		popupViewWidth: popupViewWidth,
		screenHeight: screenHeight,
		viewContentWidth: viewContentWidth,
		viewContentPadding: viewContentPadding,
		elementList: elementList
	};
}

// 主颜色
const $mainColor = "#ff4521";

//data下载 绘图重要数据

function downloadPopup(data, callback, cancelCallback, rebootCallback) {
	// 弹窗遮罩层
	let maskLayer = new plus.nativeObj.View("maskLayer", { //先创建遮罩层
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)'
	});
	let popupViewData = downloadPopupDrawing(data);
	// 弹窗内容
	let popupView = new plus.nativeObj.View("popupView", { //创建底部图标菜单
		tag: "rect",
		top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + "px",
		left: '15%',
		height: popupViewData.popupViewHeight + "px",
		width: "70%",
	});
	let progressValue = 0;
	let progressTip = 0;
	let contentText = 0;
	let buttonNum = 2;
	if (data.buttonNum >= 0) {
		buttonNum = data.buttonNum;
	}
	popupView.draw(popupViewData.elementList);
	popupView.addEventListener("click", function(e) {
		let maxTop = popupViewData.popupViewHeight - popupViewData.viewContentPadding;
		let maxLeft = popupViewData.popupViewWidth - popupViewData.viewContentPadding;
		if (e.clientY > maxTop - 40 && e.clientY < maxTop) {
			if (buttonNum == 1) {
				// 单按钮
				if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft) {
					maskLayer.hide();
					popupView.hide();
					rebootCallback && rebootCallback();
				}
			} else if (buttonNum == 2) {
				// 双按钮
				let buttonWidth = (popupViewData.viewContentWidth - popupViewData.viewContentPadding) / 2;
				if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft - buttonWidth - popupViewData.viewContentPadding) {
					maskLayer.hide();
					popupView.hide();
					cancelCallback && cancelCallback();
				} else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {
					maskLayer.hide();
					popupView.hide();
				}
			}
		}
	});
	// 显示弹窗
	maskLayer.show();
	popupView.show();
	// 改变进度条
	callback({
		change: function(res) {
			let progressElement = [];
			// console.log("进度会话", res)
			if (res.progressValue) {
				progressValue = res.progressValue;
				// 绘制进度条
				progressElement.push({
					tag: 'rect', //绘制进度条背景
					id: 'progressValueBg',
					rectStyles: {
						radius: "4px",
						color: $mainColor
					},
					position: {
						top: popupViewData.viewContentPadding * 4 + 60 + 'px',
						left: popupViewData.viewContentPadding + "px",
						width: popupViewData.viewContentWidth * (res.progressValue / 100) + "px",
						height: "8px"
					}
				});
			}
			if (res.progressTip) {
				progressTip = res.progressTip;
				progressElement.push({
					tag: 'font',
					id: 'progressValue',
					text: res.progressTip,
					textStyles: {
						size: '14px',
						color: $mainColor,
						whiteSpace: "normal"
					},
					position: {
						top: popupViewData.viewContentPadding * 4 + 20 + 'px',
						height: "30px"
					}
				});
			}
			if (res.contentText) {
				contentText = res.contentText;
				progressElement.push({
					tag: 'font',
					id: 'content',
					text: res.contentText,
					textStyles: {
						size: '16px',
						color: "#333",
						whiteSpace: "normal"
					},
					position: {
						top: popupViewData.viewContentPadding * 2 + 30 + 'px',
						height: "30px",
					}
				});
			}
			if (res.buttonNum >= 0 && buttonNum != res.buttonNum) {
				buttonNum = res.buttonNum;
				popupView.reset();
				popupViewData = downloadPopupDrawing(Object.assign({
					progressValue: progressValue,
					progressTip: progressTip,
					contentText: contentText,
				}, res));
				let newElement = [];
				popupViewData.elementList.map((item, index) => {
					let have = false;
					progressElement.forEach((childItem, childIndex) => {
						if (item.id == childItem.id) {
							have = true;
						}
					});
					if (!have) {
						newElement.push(item);
					}
				});
				progressElement = newElement.concat(progressElement);
				popupView.setStyle({
					tag: "rect",
					top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + "px",
					left: '15%',
					height: popupViewData.popupViewHeight + "px",
					width: "70%",
				});
				popupView.draw(progressElement);
			} else {
				popupView.draw(progressElement);
			}
			 
			if(res.progressValue==100){
				setTimeout(function(){
					maskLayer.hide();
					popupView.hide();  
				},1500)
			} 
		},
		cancel: function() {
			maskLayer.hide();
			popupView.hide();
		}
	});
}





export default {
	async upload(filePath) {
		// #ifndef MP-WEIXIN
		console.log("这个是啥")
		return appupdata(filePath);
		//#endif
		//#ifdef MP-WEIXIN
		return upload(filePath);
		//#endif
	}
};
