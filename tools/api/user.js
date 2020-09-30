import db from '@/js_sdk/uni-clientDB/index.js'
const dbCmd = db.command
var api = {};
api.login = async function(option) {
	return new Promise(function(resolve, reject) {
		uniCloud.callFunction({
			name: 'uni-clientDB',
			data: {
				command: db.collection('user').where({
					mobile: String(option.mobile),
					password: String(option.password)
				}).field({
					extra: false
				}).get()
			},
			success(res) {
				if (res.result.data.length > 0) {
					resolve(res.result.data[0])
				} else {
					uni.showToast({
						title: '手机号或密码错误',
						icon: 'none'
					})
				}
			},
			fail(err) {
				console.error(err)
				uni.showModal({
					content: err.message || '云函数请求失败',
					showCancel: false
				})
			}
		})
	})

}

api.getuserlist = function(option) {
	  db.collection('uni-id-users').limit(10).get().then(res=>{
		  console.log()
	  }).catch(err=>{
		  
	  })
		 
}

api.adduser = function() {
	db.collection('uni-id-users').limit(10).get().then(res => {
		console.log()
	}).catch(err => {

	})
}


module.exports = api
