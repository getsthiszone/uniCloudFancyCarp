/*
	2019-02-20 lane 封装wx-app请求 
*/
import config from "@/config.js";
import db from '@/js_sdk/uni-clientDB/index.js'
const dbCmd = db.command
var utils = {}

utils.request = function(option) { 
	uniCloud.callFunction({
		name: 'uni-clientDB',
		data: option.data,
		success(res) {
			if(res.data.length>0){
				option.success?option.success(res.data):''
			}else{}
		},
		fail(err) {
			console.error(err)
			uni.showModal({
				content: err.message || '云函数请求失败',
				showCancel: false
			})
		}
	}) 
};
 

module.exports = utils;
