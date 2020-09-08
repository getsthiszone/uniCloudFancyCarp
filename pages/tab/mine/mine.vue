<template>
	<view class="page">
		<view class="header-view">
			<view class="header-user"> 
				<u-avatar :src="userinfo.avatar" @click="tplogo"  size="145" mode="circle"></u-avatar> 
				<view class="flex flex-direction justify-between" style="margin-left: 15rpx;" v-if="token">
					<view class="user-name ">{{ userinfo.nickname? userinfo.nickname:'' }}</view>
				</view>
				<view class="flex align-center" style="margin-left: 15rpx; height: 140rpx;" v-else>
					<view class="user-name" @tap="tpinfo" data-url="/pages/login/login">点击登录</view>
				</view>
			</view>
		</view>


		<view style="position: relative; ">
			<view class="cu-list menu shadow-lg radius" style="margin-bottom: 0rpx;">
				<block v-for="(item, index) in liveBdList" :key="index">
					<view class="cu-item arrow" @tap="tpinfo" :data-url="item.url" :data-verify="item.verify">
						<view class="content">
							<view class="iconliv">
								<image :src="item.icon" class="png" mode="aspectFit" v-if="item.icon"></image>
								<text :class="item.cuIcon" v-else :style="[{ color: item.color }]"></text>
							</view>
							<text class="text-black">{{ item.name }}</text>
						</view>
					</view>
				</block>
			</view>
			<u-gap height="20" bg-color="#f2f3f4"></u-gap>

		</view>

	</view>
</template>

<script>
	let that;
	import mine from './mine.js';
	export default {
		data() {
			return {
				serve: [],
				liveBdList: [],
				token: '',
				userinfo: {}
			};
		},
		methods: {
			tpinfo(e) {
				let verify = e.currentTarget.dataset.verify;
				if (verify) {
					if (!uni.getStorageSync('token')) {
						uni.navigateTo({
							url: '/pages/login/login'
						});
						return;
					} else if (verify == "sendCode") {
						if (uni.getStorageSync("Verifications")) {
							that.$zax.scode(that).then(res => {});
						}
					}
				}
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				});
			},
			tplogo(){
				if (!uni.getStorageSync('token')) {
					uni.navigateTo({
						url: '/pages/login/login'
					});
					return;
				}
			},  
			scode() {
				that.$zax.scode(that);
			},
			downrefresh() {
				that.getuserinfo();
			},
			getuserinfo() {
				that.$zax.userinfo().then(res => {
					that.userinfo = res; 
				});
			}

		},
		onLoad() {
			that = this;
			that.liveBdList = mine.liveBdList;
			that.userinfo = uni.getStorageSync("userinfo");
			that.cloudapi.user.getuserlist();
			// that.cloudapi.user.login();
		},
		onShow() {
			that.token = uni.getStorageSync("token");
			if (that.token) {
				that.getuserinfo();
			}
			if (uni.getStorageSync("Verifications")) {
				that.liveBdList = mine.verList;
			} else {
				that.liveBdList = mine.liveBdList;
			}
		}
	};
</script>

<style lang="less">
	page {
		height: 100%;
		background: #FFF;
	}

	.header-view {
		position: relative;
	}

	.header-user {
		width: 100%;
		height: 270rpx;
		background-color: #ff8b36;
		display: flex;
		color: #fff;
		padding: 55rpx;
		align-items: center;

		.user-name {
			font-size: 32rpx;
			color: #ffffff;
		}
	}




	.user-set {
		height: 50rpx;
		border-radius: 25rpx;
		font-size: 24rpx;
		color: #ffffff;
		line-height: 50rpx;
		margin-top: 15rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.user-set image {
		width: 24rpx;
		height: 28rpx;
		margin-right: 15rpx;
	}

	.user-set text {
		margin-right: 10rpx;
	}

	.sy-view {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 698rpx;
		height: 134rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: auto;
		padding: 0rpx 45rpx;
		border: solid 1rpx #e5e5e5;
	}

	.sy-view .sy-view-left {
		display: flex;
		align-items: center;
		font-size: 30rpx;
		color: #292929;
	}

	.sy-view .sy-view-left image {
		width: 52rpx;
		height: 40rpx;
		margin-right: 24rpx;
	}

	.sy-view .sy-view-right {
		display: flex;
		align-items: center;
		font-size: 34rpx;
		color: #bfbfbf;
	}

	.sy-view .sy-view-right .sy-view-mone {
		font-size: 32rpx;
		color: #9322cf;
		margin-right: 20rpx;
		font-weight: 550;
	}

	.menu-view {
		width: 715rpx;
		margin: auto;
		border-radius: 20rpx;
		overflow: hidden;
		margin-top: 20rpx;
		background: #fff;
	}

	.menu-title {
		font-size: 28rpx;
		color: #212121;
		font-weight: 550;
		padding-left: 30rpx;
		height: 70rpx;
		overflow: hidden;
		line-height: 110rpx;
	}

	.vip-view {
		width: 698rpx;
		height: 121rpx;
		background-image: linear-gradient(86deg, #9421cf 0%, #9f78ee 100%);
		border-radius: 14rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
		font-size: 28rpx;
		margin-top: 20rpx;
		padding: 0rpx 35rpx;
		color: #fff;
	}

	.vip-view .cu-btn {
		height: 51rpx;
		background-color: #ffffff;
		border-radius: 26rpx;
		font-size: 25rpx;
		color: #a500d3;
	}

	/*  */
	.order-list .c-icon {
		width: 50rpx;
		height: 50rpx;
	}

	.rmen-list .c-icon {
		width: 70rpx;
		height: 70rpx;
	}

	.cu-list {
		width: 715rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin: 20rpx auto;
	}

	.cu-list.menu>.cu-item {
		height: 120rpx;
		padding-left: 54rpx;
	}

	.cu-list.menu>.cu-item .content>image {
		margin-right: 26rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.cu-list.menu>.cu-item .content {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #1e1e1e;
	}

	.tui-btn {
		width: 570rpx;
		height: 72rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: solid 2rpx #ff2424;
		font-size: 28rpx;
		color: #f8270c;
	}

	.login-btn {
		width: 570rpx;
		height: 72rpx;
		background-color: #ff2424;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: #fff;
	}

	.cu-list.menu>.cu-item {
		padding-left: 40rpx;
	}

	.iconliv {
		font-size: 38rpx;
		width: 60rpx;
		text-align: center;

		.png {
			width: 40rpx;
			height: 40rpx;
			margin-right: 10rpx;
		}
	}
</style>
