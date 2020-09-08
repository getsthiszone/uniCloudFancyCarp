import db from '@/js_sdk/uni-clientDB/index.js'
const dbCmd = db.command
var api = {};

api.getlist = function(option) {
	uniCloud.callFunction({
		name: 'uni-clientDB',
		data: {
			command: db.collection('goods').where({

			}).limit(10).get()
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
}


api.getnewlist = function(option) {
	uniCloud.callFunction({
		name: 'uni-clientDB',
		data: {
			command: db.collection('goods').where({

			}).limit(10).get()
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
}
api.gethotlist = async function(option) {
	return new Promise(function(resolve, reject) {
		uniCloud.callFunction({
			name: 'uni-clientDB',
			data: {
				command: db.collection('goods').add({
					"category_id": {
						"bsonType": "string",
						"description": "分类 id，参考`opendb-mall-categories`表"
					},
					"goods_sn": {
						"bsonType": "string",
						"description": "商品的唯一货号"
					},
					"name": {
						"bsonType": "string",
						"description": "商品名称"
					},
					"keywords": {
						"bsonType": "string",
						"description": "商品关键字，为搜索引擎收录使用"
					},
					"goods_desc": {
						"bsonType": "string",
						"description": "商品详细描述"
					},
					"goods_thumb": {
						"bsonType": "string",
						"description": "商品缩略图，用于在列表或搜索结果中预览显示"
					},
					"goods_banner_imgs": {
						"bsonType": "array",
						"description": "商品详情页的banner图地址"
					},
					"remain_count": {
						"bsonType": "int",
						"description": "库存数量"
					},
					"month_sell_count": {
						"bsonType": "int",
						"description": "月销量"
					},
					"total_sell_count": {
						"bsonType": "int",
						"description": "总销量"
					},
					"comment_count": {
						"bsonType": "int",
						"description": "累计评论数"
					},
					"is_real": {
						"bsonType": "bool",
						"description": "是否实物"
					},
					"is_on_sale": {
						"bsonType": "bool",
						"description": "是否上架销售"
					},
					"is_alone_sale": {
						"bsonType": "bool",
						"description": "是否能单独销售；如果不能单独销售，则只能作为某商品的配件或者赠品销售"
					},
					"is_best": {
						"bsonType": "bool",
						"description": "是否精品"
					},
					"is_new": {
						"bsonType": "bool",
						"description": "是否新品"
					},
					"is_hot": {
						"bsonType": "bool",
						"description": "是否热销"
					},
					"add_date": {
						"bsonType": "timestamp",
						"description": "上架时间"
					},
					"last_modify_date": {
						"bsonType": "timestamp",
						"description": "最后修改时间"
					},
					"seller_note": {
						"bsonType": "string",
						"description": "商家备注，仅商家可见"
					}
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


api.addgoods = function(option) {
	uniCloud.callFunction({
		name: 'uni-clientDB',
		data: {
			command: db.collection('goods').add({

			}).limit(10).get()
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
}



module.exports = api
