<template>
	<view :class="info.status==2?'filter':''">
		<block v-if="!lodding">
			<u-gap height="20" bg-color="#f2f3f4"></u-gap>
			<view class="list-item">
				<view class="left">
					<Gimage :src="info.shop_logo" gstyle="width:158rpx;height:158rpx;border-radius: 10rpx;" mode="aspectFill"></Gimage>
					<view class="centerview">
						<view class="title">{{info.coupons_name}}</view>
						<view class="timeview">{{info.use_start_time}}~{{info.use_end_time}} </view>
					</view>
				</view>
				<view :class="info.status==1?'filter':''">
					<text class="text-price" style="font-size: 46rpx;color: #ff0e0e;">{{info.coupons_price}}</text>
				</view>
				<view class="couponricon">
					<image v-if="info.status==1" src="/static/icon/icon-ysy.png" mode="widthFix"></image>
					<image v-if="info.status==2" src="/static/icon/icon-gq.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="cardview" style="padding: 0rpx;">
				<view style="padding: 40rpx;">
					<view class="text-center" style="margin-bottom: 40rpx;margin-top: 20rpx;font-size: 60rpx;color: #404040;">
						<text style="color: #ff2323;">{{info.coupons_price}}元</text>优惠券
					</view>
					<view class="flex align-center justify-center" v-if="info.id">
						<Gimage :src="info.validate_pic" gstyle="width:325rpx;height:325rpx;" mode="whiteFix"></Gimage>
						<!-- <qrcode :text="'id='+info.id" size="325"></qrcode> -->
					</view>
				</view>
				<u-line color="#eeeeee" border-style="dashed"></u-line>
				<view style="padding: 40rpx;">
					<view class="bztext">
						<view>
							<text class="cuIcon-radioboxfill"></text>
						</view>
						<view>
							<view class="title">使用条件</view>
							<view class="title1">满{{info.limit_price}}元可用</view>
						</view>
					</view>
					<view class="bztext">
						<view>
							<text class="cuIcon-radioboxfill"></text>
						</view>
						<view>
							<view class="title">有效期限</view>
							<view class="title1">{{info.use_start_time}}~{{info.use_end_time}} </view>
						</view>
					</view>
					<view class="bztext">
						<view>
							<text class="cuIcon-radioboxfill"></text>
						</view>
						<view>
							<view class="title">使用说明</view>
							<view class="title1">{{info.remark}}</view>
						</view>
					</view>
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
				lodding: true,
				info: {},
				id: '',
				time: ''
			}
		},
		filters: {
			getdate(date) {
				let time = that.$zax.formatDate(date * 1000);
				return `${time.year}-${time.month}-${time.day}`
			}
		},
		methods: {
			getinfo(e) {
				that.$request.request({
					url: that.api.coupons.ticket_detail,
					data: {
						ticket_id: that.id,

					},
					Toast: e?'正在加载...':'',
					success(res) {
						that.info = res
						that.$forceUpdate();
						uni.setStorageSync("couponInfo",res)
					},
					complete() {
						uni.stopPullDownRefresh()
						that.lodding = false
					}
				});
			}
		},
		onLoad(option) {
			that = this;
			that.lodding = true
			if (option.id) {
				that.id = option.id
			}
			that.getinfo(1);
			that.time = setInterval(function() {
				that.getinfo();
			}, 1000)
		},
		onUnload() {
			clearInterval(that.time)
		}
	}
</script>

<style lang="less">
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
		padding: 0rpx 60rpx 0rpx 30rpx;
		width: 700rpx;
		height: 224rpx;
		justify-content: space-between;
		background-color: #ffffff;
		border-radius: 20rpx;
		border-bottom: dashed 2rpx #e5e5e5;
		position: relative;

		.left {
			height: 170rpx;
			display: flex;
			align-items: center;


			.centerview {
				height: 110rpx;
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
					font-size: 24rpx;
					color: #6090ff;
				}
			}
		}
	}

	.cardview {
		width: 700rpx;
		margin: auto;
		background-color: #ffffff;
		padding: 40rpx;
		border-radius: 20rpx;
	}

	.bztext {
		display: flex;
		margin-bottom: 20rpx;

		.cuIcon-radioboxfill {
			color: #ff6c13;
			line-height: 40rpx;
			font-size: 22rpx;
			margin-right: 10rpx;
		}

		.title {
			font-size: 26rpx;
			line-height: 40rpx;
			color: #2f2f2f;
		}

		.title1 {
			font-size: 25rpx;
			line-height: 50rpx;
			color: #8c8c8c;
		}

	}

	.couponricon {
		width: 115rpx;
		height: 115rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 160rpx;
		margin: auto;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
