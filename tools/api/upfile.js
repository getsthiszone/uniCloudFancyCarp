import db from '@/js_sdk/uni-clientDB/index.js'
const dbCmd = db.command
var upapi = {};


upapi.upfail = async function(data) {
	return new Promise(function(resolve, reject) {
		// console.log("上传文件：", data)
		//#ifdef H5
		let filePath = data.path;
		let lastnum = data.name.lastIndexOf(".");
		let typetext = data.name.substring(lastnum, data.name.length);
		let failname = Math.round(new Date()) + typetext;
		//#endif
		//#ifndef H5
		let filePath = data;
		let lastnum = filePath.lastIndexOf(".");
		let typetext = filePath.substring(lastnum, filePath.length);
		let failname = Math.round(new Date()) + typetext;
		//#endif

		// console.log("文件名称：", failname)
		// return;
		uniCloud.uploadFile({
			filePath: filePath,
			cloudPath: failname,
			onUploadProgress: function(progressEvent) {
				console.log(progressEvent);
				var percentCompleted = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total
				);
			},
			success(res) {
				console.log("上传成功！", res)
				resolve(res)
			},
			fail(err) {
				console.log("上传失败！", err)
				reject(err)
			},
			complete() {}
		});
	});
}

upapi.upimage = async function(option) {
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count: 1,
			success: async function(res) {
				// console.log(res);
				let imglist = []
				for (let i in res.tempFilePaths) {
					//#ifdef H5
					let img_url = await upapi.upfail(res.tempFiles[i])
					//#endif
					//#ifndef H5
					let img_url = await upapi.upfail(res.tempFilePaths[i])
					//#endif
					// console.log(img_url)
					imglist.push(img_url.fileID)
				}
				resolve(imglist)
			}
		});
	})

}

upapi.getuserlist = function(option) {
	uniCloud.callFunction({
		name: 'uni-clientDB',
		data: {
			command: db.collection('user').limit(10).get()
		},
		success(res) {
			console.log(res);
		},
		fail(err) {
			console.error(err)
			uni.showModal({
				content: err.message || '云函数请求失败',
				showCancel: false
			})
		}
	})
}


module.exports = upapi
