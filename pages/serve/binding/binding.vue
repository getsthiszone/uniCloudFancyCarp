<template>
	<view>
		<view class="contents">
			<view class="yztitle">
				请输入验证信息
			</view>
			<view class="form-view">
				<view class="form-group ">
					<view class="title">手机号</view>
					<view class="right">
						<input placeholder="请输入您的手机号" v-model="phone" type="number" style="fotn-size: 28rpx;" placeholder-class="phclass" />
					</view>
					<view class="sendCode">
						<sendCode :phone="phone" event="join" @tuCode="tuCode"></sendCode>
					</view>
				</view>
				<view class="form-group ">
					<view class="title">验证码</view>
					<view class="right">
						<input placeholder="请输入您的验证码" v-model="inputcode" type="number"  style="fotn-size: 28rpx;" placeholder-class="phclass" />
					</view>
				</view>
			</view>
			<view class="text-center"><button class="cu-btn zcolor-btn" @tap="seve">确定</button></view>

			<chunLei-modal ref="chunLeiModal"></chunLei-modal>
		</view>


	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				info: {},
				userinfo: '',
				data: {
					title: '提示',
					content: '这是一个模态弹窗',
					cancelText: 'cancel',
					confirmColor: '#3CC51F'
				},
				type: 'notify',
				show: false,
				code: '',
				inputcode: '',
				phone: ''
			};
		},
		methods: {
			getinput(e) {
				let name = e.currentTarget.dataset.name;
				let value = e.detail.value;
				that.info[name] = value;
			},
			tuCode(e) {
				console.log(e);
				that.code = e;
			},
			seve() {
				that.type = 'notify';
				if (that.inputcode) {
					// if (that.info.code != that.code) {
					// 	that.$refs.chunLeiModal.showModal({
					// 		mData: {
					// 			title: '提示',
					// 			content: '验证码错误',
					// 			confirmText: '知道了',
					// 			confirmColor: '#3CC51F'
					// 		},
					// 		type: 'notify'
					// 	})
					// 	return;
					// }
				} else {
					that.$refs.chunLeiModal.showModal({
						mData: {
							title: '提示',
							content: '请输入验证码',
							confirmText: '知道了',
							confirmColor: '#3CC51F'
						},
						type: 'notify'
					})
					return;
				}
				uni.showLoading({
					title: '请稍等...',
					mask: true
				});
				that.$request.request({
					url: that.api.coupons.validate_identity,
					data: {
						phone: that.phone  
					},
					method: 'POST',
					success(res) {
						that.$alertok('验证成功');
						uni.setStorageSync("Verifications",true);
						uni.navigateBack({
							delta: 1
						})
					}
				});
			}
		},
		onLoad() {
			that = this;
			let user = uni.getStorageSync('userinfo');
			that.userinfo = user;
		}
	};
</script>

<style lang="less">
	// @import "../../../css/form.css";

	page {
		background: #fff !important;
	}

	.form-group {
		padding: 0rpx;
	}

	.contents {
		padding: 63rpx;
	}

	.icon {
		color: #e11b01;
		font-size: 40upx;
		margin-right: 20upx;
	}

	.form-group .title {
		width: 140upx;
		font-size: 28rpx;
		color: #a8a8a8;
	} 
	.sendCode {
		font-size: 26rpx;
		color: #ff5b1a;
	}

	.phclass {
		color: #2e2e2e;
	}

	.zcolor-btn {
		width: 613rpx;
		height: 72rpx;
		background-color: #ff6c13 !important;
		border-radius: 36rpx;
		margin-top: 123upx;
		color: #FFF;
	}

	.yztitle {
		font-size: 36rpx;
		color: #000000;
		margin-bottom: 40rpx;
	}
</style>
