<template>
	<view>
		<u-sticky>
			<u-tabs name="cate_name" active-color="#ff6c13" :bold="false" bar-width="102" inactive-color="#8b8b8b" bg-color="#f1f1f1"
			 :list="tablist" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</u-sticky>

		<view class="couponlist">
			<block v-for="(item,index) in list" :key="index">
				<view class="couponitem" :class="item.status==2?'filter':''" @tap="tpurl" :data-url="'/pages/coupon/info/info?id='+item.id">
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

						<view class="rprice" :class="(item.status==1||item.status==2)?'filter':''">
							<view class="price"> <text class="price-icon">￥</text> <text>{{item.coupons_price}}</text> </view>
							<view class="subtitle">满{{item.limit_price}}可使用</view>
						</view>
						<view class="couponricon">
							<image v-if="item.status==1" src="/static/icon/icon-ysy.png" mode="widthFix"></image>
							<image v-if="item.status==2" src="/static/icon/icon-gq.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="couponbottom">
						<view class="left">活动最终解释权归平台所有</view>
						<button class="cu-btn btn" v-if="item.status==0" @tap.stop="tpurl" :data-url="'/pages/coupon/info/info?id='+item.id">立即使用</button>
						<button class="cu-btn btn filter" v-if="item.status==1">已使用</button>
						<button class="cu-btn btn filter" v-if="item.status==2">已过期</button>
					</view>
				</view>

			</block>
		</view>


		<view class="flex justify-center " v-if="lodstatus=='loading'">
			<u-loading mode="circle"></u-loading>
		</view>
		<view v-if="nolist" style="padding-top: 300rpx;">
			<u-empty :text="nolistText[current]" mode="coupon"></u-empty>
		</view>

	</view>
</template>



<script>
	var that;
	export default {
		data() {
			return {
				tablist: [{
					cate_name: '待使用',
					id: 0
				}, {
					cate_name: '已使用',
					id: 1
				}, {
					cate_name: '已过期',
					id: 2
				}],
				current: 0,
				nolistText: ['没有优惠券', '无使用记录', ''],
				page: 0,
				lodstatus: '',
				list: [],
				nolist: false,
				onmore: false,
			};
		},
		filters: {
			getdate(date) {
				let time = that.$zax.formatDate(date * 1000);
				return `${time.year}-${time.month}-${time.day}`
			}
		},
		methods: {
			change(index) {
				this.current = index;
				that.page = 0;
				that.list = [];
				that.getlist();
			},
			getlist() {
				that.nolist = false;
				let list = that.list;
				let page = that.page;
				that.lodstatus = 'loading';
				let nolist = that.nolist;
				that.$request.request({
					url: that.api.coupons.my_coupons_list,
					data: {
						status: that.tablist[that.current].id,
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
						that.nolist = nolist;
						that.$forceUpdate();
					},
					complete() {
						uni.stopPullDownRefresh()
					}
				});
			},
			tpinfo2(e) {
				uni.setStorageSync("orderinfo", that.list[e.currentTarget.dataset.index])
				uni.navigateTo({
					url: '/pages/order/siteinfo/siteinfo'
				});
			},
		},
		onLoad(option) {
			that = this;
			that.getlist();
		},
		onShow() {
			let couponInfo = uni.getStorageSync("couponInfo"); 
			for (let i in that.list) {
				if (couponInfo.id == that.list[i].id) {
					if(couponInfo.status!= that.list[i].status){
						if(that.page==20){
							that.page==0
							that.getlist();
						}else{
							that.list.splice(i,1)
						}
					}
				}
			}
		},
		onReachBottom() {
			that.getlist();
		}
	};
</script>

<style lang="scss" scoped>
	page {
		background-color: #f1f1f1;
	}

	.zhangicon {
		width: 150rpx;
		height: 150rpx;
		position: absolute;
		right: 10rpx;
		top: 0;
		bottom: 0;
		margin: auto;
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
