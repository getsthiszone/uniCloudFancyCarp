<template>
	<view>
		<u-gap height="20" bg-color="#f0f0f0"></u-gap>
		<view class="card-vi">
			<view class="cu-form-group">
				<view class="title size28"><text class="zhong">*</text>姓名</view>
				<input class="size28 text-right" v-model="username" placeholder="请输入姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title size28"><text class="zhong">*</text>电话</view>
				<input class="size28 text-right" v-model="mobile" placeholder="请输入电话" name="input"></input>
			</view>
		</view> 
		<view class="card-vi">
			<view class="flex goods-list1 bg-white align-center ">
				<view class="cu-avatar">
					<Gimage :src="order.cover" mode="aspectFill" gstyle="width:150rpx;height:150rpx;border-radius: 10rpx;"></Gimage>
				</view>
				<view class="flex flex-direction justify-between" style="width: 420rpx;height:130rpx;">
					<view class="order-title">{{ order.title }}</view>
					<view class="text-sm text-gray">预约时间: {{ order.time_array[attrCur].start }} ~ {{ order.time_array[attrCur].end }}</view>
					<view class="price-color" style="font-size: 30rpx;">
						¥{{ order.price }}
					</view>
				</view>
			</view>
		</view>
		<view class="card-vi">
			<view class="bg-white padding-air" style="padding-bottom: 30upx;padding-top: 20upx;">
				<view class="" style="line-height: 70upx;">
					<text>下单留言</text>
					<view style="padding: 0upx 20upx; background:RGB(245,245,245); ">
						<input class="textatea" v-model="remark" placeholder="" />
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
	export default {
		data() {
			return {
				textareaValue: '',
				order: {},
				new_total_price: 0,
				money: 0,
				mch_list: [],
				remark: "",
				coupon_id: '',
				attrCur: '',
				username:'',
				mobile:''
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
				let time=`${that.order.time_array[that.attrCur].start}~${that.order.time_array[that.attrCur].end}` 
				if(!that.username){
					return	that.$alert("请填写预约人姓名")
				}
				if(!that.mobile){
					return	that.$alert("请填写预约电话")
				}
				if(!that.$form.isTel(that.mobile)){
					return	that.$alert("电话号码有误")
				} 
				this.$request.request({
					url: that.api.appointment.appointment,
					data: { 
						remark: that.remark,
						appointment_id: that.order.id,
						username:that.username,
						mobile:that.mobile,
						appointment_time:time
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
			that.order = uni.getStorageSync('ordersite') ? uni.getStorageSync('ordersite').goods : {};
			that.attrCur = uni.getStorageSync('ordersite').attrCur;
			console.log(that.order);

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
		color: #3d3d3d;
	}

	.size28 {
		font-size: 28rpx;
	}

	.zhong {
		color: #ff0000;
		margin-right: 10rpx;
	}
</style>
