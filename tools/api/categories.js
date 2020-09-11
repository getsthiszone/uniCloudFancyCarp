// 商品分类 
import db from '@/js_sdk/uni-clientDB/index.js'
const dbCmd = db.command
var api = {};
api.addcategories = async function(option) {
	return new Promise(function(resolve, reject) {
		uniCloud.callFunction({
			name: 'uni-clientDB',
			data: {
				command: db.collection('categories').add({
					"icon": option.icon,
					"name": option.name,
					"description": option.description,
					"create_date": Math.round(new Date())
				})
			},
			success(res){
				console.log(res);
			},
			fail(err) {
				console.error(err)
				uni.showModal({
					content: err.message || '云函数请求失败',
					showCancel: false,

				})
			}
		})
	})
}
// that.cloudapi.categories.addcategories({
// 	"icon": '测试图片',
// 	"name": "第一个分类",
// 	"description": "测试的分类",
// })


api.selectAll = async function(option) {
	return new Promise(function(resolve, reject) {
		uniCloud.callFunction({
			name: 'uni-clientDB',
			data: {
				command: db.collection('categories').get()
			},
			success(res) {
				resolve(res.result.data)
			},
			fail(err) {
				console.error(err)
				uni.showModal({
					content: err.message || '云函数请求失败',
					showCancel: false,

				})
			}
		})
	})
}
api.updateCategories = async function(option) {
	return new Promise(function(resolve, reject) {
		uniCloud.callFunction({
			name: 'uni-clientDB',
			data: {
				command: db.collection.doc('categories').update({
					"icon": option.icon,
					"name": option.name,
					"description": option.description,
					"create_date": Math.round(new Date())
				}).where({
					_id: option._id
				})
			},
			success(res) {
				console.log(res);
			},
			fail(err) {
				console.error(err)
				uni.showModal({
					content: err.message || '云函数请求失败',
					showCancel: false,

				})
			}
		})
	})
}

module.exports = api
