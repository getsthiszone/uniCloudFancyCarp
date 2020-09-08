import config from "../config.js"; 

  


class Uploader { 
	constructor() {  
	}
	choose(num) {
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count: num,
				sizeType: ['compressed'],
				success(res) {
					// console.log(res); 
					resolve(res.tempFilePaths)
					console.log("当前图片信息：", res);
				},
				fail(err) {
					console.log(err)
					reject(err)
				}
			})
		})

	}
	upload_one(path,avatar) { 
		let access_token = uni.getStorageSync('token');  
		var url = config.base_url + '/addons/zjhj_mall/core/web/index.php?_acid=' + config._acid + '&r=' +config.upload_img_url +'&access_token=' + access_token + '&_version=' + config._version + '&_platform=' + config._platform;
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '上传中'
			})
			uni.uploadFile({
				url: url, //仅为示例，非真实的接口地址
				filePath: path,
				name: 'file',
				formData: {},
				success: (uploadFileRes) => {  
					if ("string" === typeof uploadFileRes.data) {
						let data= JSON.parse(uploadFileRes.data); 
						if(data.code==1){
							uni.showModal({
								title:"提示",
								content:data.msg,
								showCancel:false,
								confirmText:"知道了"
							})
						}else{
							resolve(JSON.parse(uploadFileRes.data).data.url)
						} 
					} else { 
						resolve(uploadFileRes.data.data)
					}  
				},
				complete() {
					uni.hideLoading()
				}
			});
		})  
	}
	upload(path_arr) {
		let num = path_arr.length;
		console.log("图片信息", path_arr);
		return new Promise(async (resolve, reject) => {
			let img_urls = []
			for (let i = 0; i < num; i++) { 
				let img_url = await this.upload_one(path_arr[i]);
				console.log(img_url)
				img_urls.push(img_url) 
			};
			console.log("全部上传成功")
			resolve(img_urls)
		})


	}
	choose_and_upload(num) {
		return new Promise(async (resolve, reject) => {
			let path_arr = await this.choose(num);
			let img_urls = await this.upload(path_arr);
			resolve(img_urls);
		})

	}
}
export default Uploader;
