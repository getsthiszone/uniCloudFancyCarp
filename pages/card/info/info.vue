<template>
	<view>
		<block v-if="!lodding">
			<u-gap height="20" bg-color="#f2f3f4"></u-gap>
			<view class="list-item">
				<view class="left">
					<Gimage :src="info.train.cover" gstyle="width:158rpx;height:158rpx;border-radius: 10rpx;" mode="aspectFill"></Gimage>
					<view class="centerview">
						<view class="title">{{info.train.title}}</view>
						<view class="timeview">2020.08.10-2021.02.10 </view>
					</view>
				</view>
			</view>

			<view class="cardview">
				<view class="text-center" style="margin-bottom: 40rpx;margin-top: 20rpx;font-size: 28rpx;color: #404040;">核销二维码</view>

				<view class="flex align-center justify-center">
					<qrcode :text="'id='+info.id" size="296"></qrcode>
				</view>
				<u-gap height="60" bg-color="#FFF"></u-gap>
				<view class="bztext">
					<view class="title">使用说明：</view>
					<block v-for="(item,index) in info.train.instructions_array" :key="index">
						<view class="title1"> <text class="cuIcon-title" style="font-size: 22rpx;"></text> {{item.value}}</view>
					</block>
				</view>

			</view>
		</block>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				id: '',
				info: {},
				loadding: true
			}
		},
		methods: {
			getinfo() {
				that.$request.request({
					url: that.api.user.cardDetail,
					data: {
						id: that.id
					},
					success(res) {
						console.log(res)
						that.info = res;
						that.lodding = false
						that.$forceUpdate()
					}
				})
			}
		},
		onLoad(option) {
			that = this;
			that.id = option.id;
			that.lodding = true
			that.getinfo();
		}
	}
</script>
<style lang="scss" scoped>
	page {
		height: 100%;
		background-color: rgb(244, 244, 244);
	}

	.u-wrap {
		padding: 24rpx;
	}

	.list-item {
		display: flex;
		align-items: center;
		margin: auto;
		padding: 0rpx 25rpx;
		width: 706rpx;
		height: 224rpx;
		background-color: #ffffff;
		border-radius: 30rpx;
		border-bottom: dashed 2rpx #e5e5e5;

		.left {
			height: 170rpx;
			display: flex;
			align-items: center;


			.centerview {
				height: 138rpx;
				padding: 0rpx 25rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.title {
					font-size: 28rpx;
					color: #2b2b2b;
				}

				.qixa {
					width: 86rpx;
					height: 36rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #e9f0ff;
					border-radius: 18rpx;
					font-size: 18rpx;
					color: #4d83ff;
				}

				.timeview {
					font-size: 23rpx;
					color: #6090ff;
				}
			}
		}
	}

	.cardview {
		width: 706rpx;
		margin: auto;
		background-color: #ffffff;
		padding: 40rpx;
		border-radius: 30rpx;
	}

	.bztext {
		.title {
			font-size: 26rpx;
			line-height: 40rpx;
			color: #a9a9a9;
		}

		.title1 {
			font-size: 25rpx;
			line-height: 50rpx;
			color: #2b2b2b;
		}

	}
</style>
