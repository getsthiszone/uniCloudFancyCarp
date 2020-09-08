<template>
	<view class="u-demo">

		<view class="couponlist">
			<block v-for="(item,index) in list" :key="index">
				<view class="couponitem">
					<view class="coupontop">
						<view class="flex align-center">
							<view class="logo">
								<Gimage :src="item.shop_logo" mode="aspectFill" gstyle="width: 130rpx;height: 130rpx;border-radius:8rpx;"></Gimage>
							</view>
							<view class="comment">
								<view class="title text-cut">{{item.coupons_name}}</view>
								<view class="endtime">有效期至{{item.use_end_time}}</view>
							</view>
						</view>

						<view class="rprice">
							<view class="price"> <text class="price-icon">￥</text> <text>{{item.coupons_price}}</text> </view>
							<view class="subtitle">满{{item.limit_price}}可使用</view>
						</view>
					</view>
					<view class="couponbottom">
						<view class="left">活动最终解释权归平台所有</view>
						<button class="cu-btn btn filter" v-if="item.is_have==1" @tap="tpurl" :data-url="'/pages/coupon/info/info?id='+item.id">已领取</button>
						<button class="cu-btn btn" @tap="save_ticket" :data-index="index" v-else>立即领取</button>
					</view>
				</view> 
			</block>
		</view>
		
		<view class="flex justify-center " v-if="lodstatus=='loading'" style="padding: 30rpx 0rpx;" >
			<u-loading mode="circle"></u-loading>
		</view>
		<view v-if="nolist" style="padding-top: 300rpx;">
			<u-empty text="暂无优惠券" mode="coupon"></u-empty>
		</view>

		<u-gap height="20" bg-color="#f2f3f4"></u-gap>

		<uni-popup ref="popup" type="center">
			<view class="jlitem">
				<view class="jlitembg">
					<image src="/static/icon/bg-jl.png" mode="widthFix"></image>
					<view class="jlitemlist">
						<view class="text-center titlemoney">
							<text style="font-size: 30rpx;">￥</text>
							<text style="font-size: 46rpx;">{{lqinfo.coupons_price}}</text>
							<text style="margin-left: 10rpx;">满{{lqinfo.limit_price}}可用</text>
						</view>
						<view class="text-center cpuponbtn">
							<button class="cu-btn allq " @tap="tpinfo" :data-url="'/pages/coupon/info/info?id='+lqinfo.id" >立即使用</button>
						</view>
					</view>
				</view>
				<view class="text-center">
					<image class="closeimg" @tap="closepop" src="/static/icon/active-close.png" mode="widthFix"></image>
				</view>
			</view>
		</uni-popup>


	</view>
</template>

<script>
	let that;
	import {
		uniPopup
	} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				page: 0,
				lodstatus: '',
				list: [],
				nolist: false,
				onmore: false,
				lqinfo: '',
				printIndex: '',
				loginStutas:false
			}
		},
		methods: {
			tpinfo(e){
				that.closepop();
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			},
			closepop() {
				this.$nextTick(function() {
					this.$refs.popup.close()
				})
			},
			getlist() {
				that.nolist = false;
				let list = that.list;
				let page = that.page;
				that.lodstatus = 'loading';
				let nolist = that.nolist;
				that.$request.request({
					url: that.api.coupons.getCouponsList,
					data: {
						status: that.TabCur,
						start: that.page,
						page_size: 20
					},
					success(res) {
						let li = res ? res : [];
						if (page == 0) {
							list = li;
							that.page = that.page + 20
							list.length == 0 ? (nolist = true) : (nolist = false);
							that.lodstatus = '';
						} else {
							if (li.length > 0) {
								list = list.concat(li);
								that.page = that.page + 20
								that.lodstatus = '';
							} else {
								that.lodstatus = 'noMore';
							}
						}
						that.list = list;
						// console.log(that.list);
						that.nolist = nolist;
						that.$forceUpdate();
						that.printIndex = 0;
						that.lqinfo = that.list[that.printIndex];
					},
					complete() {
						uni.stopPullDownRefresh()
					}
				});
			},
			save_ticket(e) {
				that.printIndex = e.currentTarget.dataset.index;
				that.lqinfo = that.list[that.printIndex];
				that.$request.request({
					url: that.api.coupons.save_ticket,
					data: {
						ticket_id: that.lqinfo.id,
						Tost:'正在领取'
					},
					success(res) {
						that.$nextTick(function() {
							that.$refs.popup.open()
						}) 
						that.list[that.printIndex].is_have=1
						that.$forceUpdate()
					}
				})

			}
		},
		onLoad() {
			that = this; 
			that.getlist(); 
			that.cloudapi.categories.selectAll(); 
		},
		onShow() {
			let token=uni.getStorageSync("token")
			if(token&&!that.loginStutas){
				that.page=0;
				that.getlist();
				that.loginStutas=true
			}
		},
		onReachBottom() {
			that.getlist(); 
		}
	}
</script>

<style lang="scss" scoped>
	.jlitem {
		.jlitembg {
			position: relative;
			width: 655rpx;
			height: 530rpx;

			image {
				width: 100%;
			}

			.jlitemlist {
				.titlemoney {
					position: absolute;
					top: 170rpx;
					width: 100%;
					color: #FFF;
					font-size: 26rpx;
				}

				.cpuponbtn {
					position: absolute;
					top: 420rpx;
					width: 100%;

					.allq {
						width: 505rpx;
						height: 68rpx;
						background-color: #ff6c13;
						border-radius: 34rpx;
						color: #FFF;
					}
				}
			}
		}

		.closeimg {
			width: 60rpx;
			height: 60rpx;
			margin-top: 10rpx;
		}
	}
</style>
