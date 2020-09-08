<template>
	<view style="height: 100%;">
		<view class="page bg-img" style="height: 100%;background-color: #ff8b36; " :style="{ backgroundImage: 'url(' + bg + ')' }">
			<view class="pdown">
				<!--  -->
				<view class="text-center margin-top"><button class="cu-btn zcolor-btn shouquna" @getuserinfo="getUserInfo" open-type="getUserInfo">微信授权登录</button></view>
				
				<!-- <view class="flex align-center justify-center text-white" style="margin-top: 30rpx;">
					<checkbox :checked="checked" @tap="setchecked" color="#FFD161" style="transform: scale(0.7);" ></checkbox>
					<text @tap="tpurl" data-url="/pages/serve/text/text?id=5" >《用户协议》</text>
					<text @tap="tpurl" data-url="/pages/serve/text/text?id=6" >《隐私协议》</text>
				</view> -->
				
			</view>
		</view>
	</view>
</template>

<script>
var that;
 
export default {
	data() {
		return {
			tabCur: 0,
			info: {},
			modalName: '',
			logintopimg: '',
			checked:true
		};
	},
	computed: {
		bg: function() {
			// return that.$addurl('/uploads/20200717/413a24b3e783e9e58888a1b52fb52ce4.png');
		}
	},
	methods: {
		getUserInfo: function() {
			if(!that.checked){
				that.$alert("请勾选用户协议");
				return
			}
			uni.login({
				success: function(e) {
					var t = e.code;
					uni.getUserInfo({
						success(o) {
							console.log(o);
							that.$zax
								.unionLogin({
									code: t,
									data: o.encryptedData,
									iv: o.iv
								})
								.then(res => {
									uni.setStorageSync('token', res.token);
									that.$zax.userinfo();
									uni.navigateBack({
										delta: 1
									}); 
								});
						}
					});
				},
				fail: function(e) {}
			});
		},
		gettemplate() {
			that.$zax.get_templateid().then(res => {
				let tmplIds = [];
				tmplIds.push(res.template_1);
				wx.requestSubscribeMessage({
					tmplIds: tmplIds,
					success(res) {},
					fail(res) {
						console.log(res);
					}
				});
			});
		},
		setchecked(){
			that.checked=!that.checked
		}
	},
	onLoad(option) {
		that = this;
		that.logintopimg = config.logintopimg;
	}
};
</script>

<style>
page {
	background-color: #fff !important;
	height: 100%;
}

.logo {
	width: 300upx;
	height: 300upx;
	margin-top: 300upx;
	margin-bottom: 100upx;
}

.btn {
	width: 500upx;
	height: 70upx;
}

.topimg {
	margin: 40upx 0upx 50upx;
	width: 532upx;
	height: 306upx;
}

.card-view {
	width: 695upx;
	background-color: #ffffff;
	border-radius: 26upx;
	border: solid 1upx #e5e5e5;
	margin: auto;
}

.nav {
	height: 95upx;
	width: 535upx;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.nav .item-view {
	width: 182upx;
	text-align: center;
	height: 95upx;
	line-height: 110upx;
	overflow: hidden;
	font-size: 28upx;
	color: #a7a7a7;
	border-bottom: solid #fff 4upx;
}

.nav .action {
	color: #e11b01;
	border-bottom: solid #e11b01 4upx;
}

.form-view {
	margin: 40rpx auto;
	overflow: hidden;
	width: 99%;
}

.form-group {
	padding: 0upx 30upx;
	height: 130upx;
}

.icon {
	color: #e11b01;
	font-size: 40upx;
	margin-right: 20upx;
}

.sendCode {
	background-color: #ffedeb;
	font-size: 25rpx;
	color: #e11b01;
	padding: 15upx 25upx;
	border-radius: 10rpx;
}

.zcolor-btn {
	width: 493rpx;
	height: 72rpx; 
	border-radius: 36rpx;
}

.shouquna {
	background-color: #fff !important;
	color: #ff8b36 !important;
}

.pdown {
	position: absolute;
	width: 100%;
	bottom: 100upx;
}
</style>
