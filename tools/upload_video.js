import config from "../config.js";

function upload(path) {
	let access_token = uni.getStorageSync('token');
	var url = config.base_url + '/addons/zjhj_mall/core/web/index.php?_acid=' + config._acid + '&r=' + config.upload_img_url +
		'&access_token=' + access_token + '&_version=' + config._version + '&_platform=' + config._platform;
	return new Promise((resolve, reject) => {
		if (!path) {
			uni.chooseVideo({
				success(res) {
					uni.showLoading({
						title: '上传中'
					});
					let path1 = res.tempFilePath
					console.log(res);
					let uploadTask = uni.uploadFile({
						url: url, //仅为示例，非真实的接口地址
						name: 'file',
						filePath: path1,
						success: (res) => {
							let e = JSON.parse(res.data)
							uni.showToast({
								title: "上传成功！",
								duration: 1200,
								mask: true
							})
							console.log(e.data);
							let data = {
								path: path1,
								upath: e.data.url
							}
							resolve(data);
						},
						fail() {
							uni.hideLoading()
						},
						complete() {
							uni.hideLoading()
						}
					});
					uploadTask.onProgressUpdate((res) => {
						uni.showLoading({
							title: '正在上传' + res.progress + '%',
							mask: true
						});
					});
				}
			})
		} else { 
			let uploadTask = uni.uploadFile({
				url: url, //仅为示例，非真实的接口地址
				name: 'file',
				filePath: path,
				success: (res) => {
					console.log(res);
					let e = JSON.parse(res.data)
					uni.showToast({
						title: "上传成功！",
						duration: 1200,
						mask: true
					})
					console.log(e.data);
					let data = {
						path: path,
						upath: e.data.url
					}
					resolve(data);
				},
				fail(res) { 
					uni.hideLoading()
				},
				complete() {
					uni.hideLoading()
				}
			});
			let num;
			uploadTask.onProgressUpdate((res) => {  
				if(num!=res.progress){
					num=res.progress; 
					uni.showLoading({
						title: '正在上传' + res.progress + '%',
						mask: true
					}); 
				} 
			});
		} 
	})
}

export default {
	async upvideo(video) {
		return upload(video);
	}
};
