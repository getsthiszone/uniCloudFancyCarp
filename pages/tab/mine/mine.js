export default { 
	verList: [{
			cuIcon: 'cuIcon-vipcard',
			icon: '/static/icon/icon-scode.png',
			color: '#ffb72c',
			name: '扫一扫',
			url: '',
			verify: 'sendCode'
		},
		{
			cuIcon: 'cuIcon-vipcard',
			icon: '/static/icon/icon-mine-coupon.png',
			color: '#ffb72c',
			name: '我的优惠券',
			url: '/pages/coupon/list/list',
			verify: true
		}, 
		{
			cuIcon: 'cuIcon-form',
			color: '#ff6c13',
			name: '核销记录',
			url: '/pages/serve/Verifications/Verifications',
			verify: true
		}, 
		{
			cuIcon: 'cuIcon-form',
			color: '#ff6c13',
			name: '分类',
			url: '/pages/adminPort/categories/list/list',
			verify: true
		}
	]
}
