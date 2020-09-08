export default {
	liveBdList: [{
			cuIcon: 'cuIcon-vipcard',
			icon: '/static/icon/icon-mine-coupon.png',
			color: '#ffb72c',
			name: '我的优惠券',
			url: '/pages/coupon/list/list',
			verify: true
		},
		{
			cuIcon: 'cuIcon-vipcard',
			icon: '/static/icon/icon-bang.png',
			color: '#ffb72c',
			name: '绑定核销员',
			url: '/pages/serve/binding/binding',
			verify: true
		},
	],
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
		// {
		// 	cuIcon: 'cuIcon-vipcard',
		// 	icon: '/static/icon/icon-bang.png',
		// 	color: '#ffb72c',
		// 	name: '绑定核销员',
		// 	url: '/pages/serve/binding/binding',
		// 	verify: true
		// }, 
		{
			cuIcon: 'cuIcon-form',
			color: '#ff6c13',
			name: '核销记录',
			url: '/pages/serve/Verifications/Verifications',
			verify: true
		}
	]
}
