<template>
	<view>
		<u-gap height="20" bg-color="#f3f3f3"></u-gap>
		<u-line color="#eeeeee" border-style="dashed"></u-line>
		<u-gap height="20" bg-color="#fff"></u-gap>
		<view class="ciew">
			<image src="/static/icon/bg-hx.png" mode="widthFix"></image>
			<view class="topview">
				累计核销金额：￥ <text style="font-size: 54rpx;">{{sum}}</text>
			</view>
		</view>

		<view class="list">
			<view class="vtitle">核销记录</view>
			<view class="item" v-for="(item,index) in list" :key="index" >
				<view class="coupontop"> 
					<view class="comment">
						<view class="title text-cut">{{item.shop_name}}</view>
						<view class="endtime">核销时间{{item.createtime}}</view>
					</view> 
					<view class="rprice">
						<view class="price"> <text class="price-icon">￥</text> <text>{{item.coupons_price}}</text> </view>
						<view class="subtitle">满{{item.limit_price}}可使用</view>
					</view>
				</view>
				<u-line color="#ff6c13" v-if="(list.length-1)!=index"  border-style="dashed"></u-line>
			</view>
			<view class="flex justify-center " v-if="lodstatus=='loading'">
				<u-loading mode="circle"></u-loading>
			</view>
			<view v-if="nolist" style="padding:150rpx 0rpx;">
				<u-empty text="暂无记录" mode="history"></u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				page: 0,
				lodstatus: '',
				list: [],
				nolist: false,
				onmore: false, 
				sum:''
			}
		},
		methods: {
			getlist() {
				that.nolist = false;
				let list = that.list;
				let page = that.page;
				that.lodstatus = 'loading';
				let nolist = that.nolist;
				that.$request.request({
					url: that.api.coupons.hexiao_list,
					data: { 
						start: that.page,
						page_size: 20
					},
					success(res) {
						let li = res.list ? res.list  : [];
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
						that.sum=res.sum;
						console.log(that.list);
						that.nolist = nolist;
						that.$forceUpdate();
					},
					complete() {
						uni.stopPullDownRefresh()
					}
				});
			},
		},
		onLoad() {
			that = this;
			that.getlist();
		}
	}
</script>

<style lang="less">
	page {
		background-color: #FFF;
	}

	.ciew {
		text-align: center;
		position: relative;
		z-index: 1;

		image {
			width: 695rpx;
		}
	}

	.list {
		width: 675rpx;
		background-color: #fff4ee;
		border-radius: 0rpx 0rpx 20rpx 20rpx;
		margin: auto;
		margin-top: -20rpx;
		padding-bottom: 20rpx;

		.vtitle {
			font-size: 28rpx;
			color: #ff6c13;
			height: 92rpx;
			line-height: 92rpx;
			border-bottom: dashed 1rpx #ff6c13;
			text-align: center;
		}
		.item{
			// display: flex;
			// align-items: center; 
		}
	}

	.topview {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;
		display: flex;
		width: 695rpx;
		height: 148rpx;
		color: #FFF;
		align-items: center;
		z-index: 99;
		justify-content: center;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
	}
	.coupontop {
		display: flex;
		align-items: center;
		justify-content: space-between;   
		position: relative;
		height: 175rpx;
		padding: 0rpx 30rpx;
	
		 
		.comment {
			width: 430rpx;
			height: 110rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
	
			.title {
				font-size: 28rpx;
				color: #2f2f2f;
			}
	
			.endtime {
				font-size: 24rpx;
				color: #9d9d9d;
			}
		}
	
		.rprice {
			height: 110rpx;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			text-align: center;
	
			.price {
				font-size: 46rpx;
				color: #ff0e0e;
				font-weight: 600;
	
				.price-icon {
					font-size: 31rpx;
				}
			}
	
			.subtitle {
				font-size: 24rpx;
				color: #9d9d9d;
			}
		}
	}
</style>
