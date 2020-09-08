import config from "../config.js";
import  alupload from "./alupload.js";



function upload(path) { 
	var REQUESTCODE = 1;
	var main = plus.android.runtimeMainActivity();
	var Intent = plus.android.importClass('android.content.Intent');
	var intent = new Intent(Intent.ACTION_GET_CONTENT); 
	intent.setType("audio/*"); //选择音频 
	intent.addCategory(Intent.CATEGORY_OPENABLE);
	main.startActivityForResult(intent, REQUESTCODE);
	return new Promise((resolve, reject) => {
		main.onActivityResult = function(requestCode, resultCode, data) {
			if (REQUESTCODE == requestCode) {
				var context = main;
				plus.android.importClass(data);
				// 获得文件路径
				var fileData = data.getData();
				var path = plus.android.invoke(fileData, "getPath");
				console.log("path:" + path); 
				// 判断文件类型
				var resolver = context.getContentResolver();
				var fileType = plus.android.invoke(resolver, "getType", fileData);
				console.log("fileType:" + fileType);
				console.log("开始上传！")
				uni.showLoading({
					title: '上传中'
				});  
				// 上传
				 alupload.upload(path).then(res => { 
					resolve(res);
				}); 
			}
		}
	}) 
}
  
export default {
	async upload(video) {
		return upload(video);
	}
};
