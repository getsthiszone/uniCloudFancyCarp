function showModel(data) {
  	return new Promise(function(resolve, reject) {
  		let os = 'wxorh5';
  		// #ifdef APP-PLUS
  		os = plus.os.name
  		// #endif
  		console.log("系统：", os);
  		// 安卓确认取消相反
  		if (os == 'Android') {
  			uni.showModal({
  				title: data.title ? data.title : '',
  				content: data.content ? data.content : '',
  				cancelText: data.confirmText ? data.confirmText : '',
  				confirmText: data.cancelText ? data.cancelText : '',
  				success: function(res) {
  					if (res.cancel) {
  						console.log('用户点击确定');
  						resolve('confirm')
  					} else if (res.confirm) {
  						console.log('用户点击取消');
  						resolve('cancel')
  					}
  				}
  			});
  		} else {
  			uni.showModal({
  				title: data.title ? data.title : '',
  				content: data.content ? data.content : '',
  				cancelText: data.cancelText ? data.cancelText : '',
  				confirmText: data.confirmText ? data.confirmText : '',
  				success: function(res) {
  					if (res.confirm) {
  						console.log('用户点击确定');
  						resolve('confirm')
  					} else if (res.cancel) {
  						console.log('用户点击取消');
  						resolve('cancel')
  					}
  				}
  			});
  		}
  	})
  };
export default {
  	async showModel(data) {
  		return showModel(data);
  	},
}
