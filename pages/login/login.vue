<template>
	<view class="content">
		<view class="logo">
			<image src="/static/logo.png" mode=""></image>
		</view>
		<view class="uni-form-item uni-column">
			<input type="tel"  v-model="mobile" placeholder="请输入手机号" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="password"  v-model="password" placeholder="请输入密码" />
		</view>
		<button type="primary" @tap="login">登陆</button>
		<view class="links">
			<view @tap="gotoForgetPassword">忘记密码？</view>
			<view>|</view>
			<view class="link-highlight" @tap="gotoRegistration">注册账号</view>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				mobile: '',
				password: ''
			}
		},
		methods: {
			gotoRegistration: function() {
				uni.navigateTo({
					url: 'registration'
				});
			},
			gotoForgetPassword: function() {
				uni.navigateTo({
					url: 'forget-password'
				});
			},
			login() {
				let ajax = true,
					title = '';
				if (that.mobile) {
					!that.$form.isTel(that.mobile) && ((ajax = false), (title = '手机号码有误'));
				} else {
					(ajax = false), (title = '请填写手机号');
				}
				if (that.password) {
					that.password.length >= 6 ? '' : ((ajax = false), (title = '密码为6-12位字符'));
				} else {
					(ajax = false), (title = '请填写密码');
				}
				if (!ajax) {
					that.$failToast(title);
					return;
				} 
				uni.showLoading({
					title: '正在登录...', 
					mask: true
				});
				that.cloudapi.user.login({ 
					mobile: that.mobile,
					password: that.password, 
				}).then(res=>{
					// console.log(res);
					uni.hideLoading()
					that.$alertok("登陆成功")
				}) 
			},
		},
		onLoad() {
			that = this;
		},
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;

	.content {
		padding: 100upx;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
</style>
