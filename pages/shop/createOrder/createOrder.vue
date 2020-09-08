<template>
	<view>
		<u-gap height="20" bg-color="#f2f3f4"></u-gap>
		<view class="card-vi">

			<view class="flex goods-list1 bg-white">
				<view class="cu-avatar">
					<Gimage :src="order.cover" mode="aspectFill" gstyle="width:150rpx;height:150rpx;border-radius: 10rpx;"></Gimage>
				</view>
				<view class="" style="width: 420rpx;">
					<view class="order-title">{{ order.title }}</view>
					<view class="flex align-center  justify-between" style="margin-top: 10upx;">
						<view class="price-color" style="font-size: 30rpx;">
							¥{{ order.price }}
						</view>
						<!-- <view>x{{ item.num }}</view> -->
					</view>
				</view>
			</view>

		</view>
		<view class="card-vi">
			<view class="bg-white padding-air" style="padding-bottom: 30upx;padding-top: 20upx;">
				<view class="" style="line-height: 70upx;">
					<text>下单留言</text>
					<view style="padding: 0upx 20upx; background:RGB(245,245,245); ">
						<input class="textatea" v-model="remark" placeholder="请填写备注" />
					</view>
				</view>
			</view>
		</view>

		<view style="height: 120upx;"></view>
		<view class="foot">
			<view class="submit text-black" style="font-size: 26upx;">
				合计：
				<text class="price-color" style=" font-size: 34upx;">￥{{ order.price }}</text>
			</view>
			<view class="play" @tap="zpay"> 立即支付 </view>
		</view>

	</view>
</template>

<script>
	var that;
	import data from './data.js';
	export default {
		data() {
			return {
				textareaValue: '',
				order: {},
				new_total_price: 0,
				money: 0,
				mch_list: [],
				remark:"",
				coupon_id:''
			};
		},
		methods: {
			order_ok() {
				var dzmoney = 0;
				var zmoney = that.new_total_price;
				that.$refs.chunLeiModal
					.showModal({
						mData: {
							title: '提示',
							content: '您的账户余额为：' + that.money + '元,是否确认支付',
							cancelText: '取消',
							confirmText: '确定',
							confirmColor: '#3CC51F'
						},
						type: 'default'
					})
					.then(res => {
						if (Number(that.money) < Number(that.new_total_price)) {
							that.$alert('您的余额不足!');
							return;
						} else {
							that.zpay();
						}
					});
			},
			zpay() {
				uni.showLoading({
					mask: true,
					title: '正在提交订单...'
				});
				this.$request.request({
					url: that.api.train.recharge_pay,
					data: {
						id: that.order.id,
						remark: that.remark,
						coupon_id: that.coupon_id
					},
					method: 'post',
					success(res) { 
						uni.redirectTo({
							url: '/pages/order/orderlist/orderlist?id=-1'
						}); 
					}
				});
			},
		},
		onLoad(option) {
			that = this;
			that.order = uni.getStorageSync('ordergoods') ? uni.getStorageSync('ordergoods') : data.order;
			console.log('订单详情：', that.order);
			that.money = uni.getStorageSync('money');
		}
	};
</script>

<style>
	page {
		background: #f0f0f0;
	}

	.textatea {
		width: 100%;
		height: 66upx;
		background-color: #f5f5f5;
		font-size: 24rpx;
		color: #292929;
	}

	.padding-air {
		padding-left: 45upx;
		padding-right: 45upx;
	}

	.goods-list1 {
		padding: 40rpx;
	}

	.goods-list1 .cu-avatar {
		width: 151upx;
		height: 151upx;
		margin-right: 30upx;
		border-radius: 10upx;
	}



	.card-vi {
		width: 706upx;
		background-color: #ffffff;
		border-radius: 20upx;
		overflow: hidden;
		margin: auto;
		margin-bottom: 20upx;
	}

	.play {
		width: 374rpx;
		height: 110rpx;
		background-color: #6090ff;
		font-size: 32rpx;
		color: #fffefe;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.goods-bar {
		font-size: 24rpx;
		color: #3883ff;
		background-color: #eff5ff;
		border-radius: 3px;
		padding: 5px 7px;
	}

	.foot {
		display: flex;
		background: #fff;
		height: 110upx;
		position: fixed;
		bottom: 0;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 0upx 0upx 0upx 50upx;
	}

	.price-color {
		font-size: 32rpx;
		font-weight: normal;
		letter-spacing: 0rpx;
		color: #ff0000;
	}

	.order-title {
		font-size: 30rpx;
		line-height: 48rpx;
		color: #3d3d3d;
	}
</style>
