<template>
	<view>
		<block v-if="Skeleton">
			<Skeleton zviewW="100%" zviewH="730rpx"></Skeleton>
			<view class=" padding-air bg-white " style="padding-top: 25upx; ">
				<view class=" flex justify-between " style="font-weight: 550; overflow: hidden;">
					<Skeleton zviewW="400rpx" zviewH="40rpx"></Skeleton>
					<Skeleton zviewW="100rpx" zviewH="40rpx"></Skeleton>
				</view>
				<view style="font-weight: 600; margin-top: 10upx;">
					<Skeleton zviewW="100%" zviewH="40rpx"></Skeleton>
				</view>
			</view>
		</block>
		<block v-else>
			<view>
				<swiper class="screen-swiper" :indicator-dots="true" :circular="true" :autoplay="false" interval="5000" duration="500"
				 indicator-active-color="#FFF" style="heigh t: 750upx;">
					<swiper-item style="position: relative;">
						<block v-if="false">
							<image :src="item.pic_url" mode="aspectFill"></image>
							<view v-show="goods.video_url" class="flex align-center justify-center" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;">
								<block v-if="is_play">
									<video id="myVideo" @ended="videoend" :src="goods.video_url" style="width: 100%; height: 100%;z-index: 8;position: relative;">
										<cover-image @tap.stop="closevideo" src="/static/icon/icon-close.png" style="width:50upx;height: 50upx; position: absolute;z-index: 999;right: 20rpx;top: 20rpx;"></cover-image>
									</video>
								</block>
								<text class="cuIcon-videofill text-white" style="font-size: 70upx;" @tap="playvideo" v-else></text>
							</view>
						</block>
						<block v-else>
							<Gimage :src="goods.cover" mode="aspectFill" gstyle="width:750rpx;height:750rpx;"></Gimage>
						</block>
					</swiper-item>
				</swiper>
			</view>
			<view class=" padding-air bg-white " style="padding-top: 25upx; ">
				<view v-if="userinfo.level == -1 || goods.mch" class="flex  justify-between" style="font-weight: 550; overflow: hidden;height: 50upx;">
					<view class="price-color" style="font-size: 38upx;font-weight: 550;margin-right: 20upx;">￥{{ goods.price ? goods.price : '0.00' }}</view>
					<view class="text-gray" style="font-size: 24upx;position: relative;top: 10upx;" v-if="goods.sales">销量：{{ goods.sales ? goods.sales : '0' }}</view>
				</view>
				<view v-else class="flex justify-between" style="font-weight: 550; overflow: hidden;">
					<text style="font-size: 38upx;color: #ff4040;">
						<text class="price-color">￥{{ goods.price ? goods.price : '' }}</text>
						<text class="text-gray old-price" style="font-size: 28upx;margin: 0upx 10upx;" v-if="goods.min_member_price ? goods.min_member_price < goods.max_price : goods.price < goods.max_price">
							￥{{ goods.max_price ? goods.max_price : '' }}
						</text>
					</text>
					<view class="text-gray" style="font-size: 24upx;position: relative;top: 10upx;" v-if="goods.sale_num">已售{{ goods.sale_num ? goods.sale_num : '' }}</view>
				</view>
				<view style="font-weight: 600; margin-top: 10upx;">
					<text style="font-size: 32upx;color: #000000;">{{ goods.title ? goods.title : '' }}</text>
				</view>
				<view class="text-gray " v-if="goods.subtitle" style="font-size: 27upx; padding:10upx 0upx 20upx;">{{ goods.subtitle ? goods.subtitle : '' }}</view>
			</view>
			<u-gap height="20" bg-color="#f2f3f4"></u-gap>
			<linkview>图文详情</linkview>
			<u-gap height="20" bg-color="#f2f3f4"></u-gap>
			<view class="info" style="padding-top: 10upx;">
				<u-parse :html="goods.content"  :domain="alioss_baseurl"></u-parse>
			</view>
		</block>

		<view style="height: 100upx;"></view>
		<view class="foot cu-bar bg-white tabbar border shop solids-top  ">
			<view class="flex align-center ">
				<button class="action " @tap="tohome">
					<view class="cuIcon-home text-gray"></view>
					<view class="text-gray">首页</view>
				</button>
				<view class="action text-gray " @tap="tocard">
					<view class="cuIcon-share"></view>
					分享
				</view>
			</view>
			<view class="btn-group">
				<button class="cu-btn bg-blue round shadow-blur" style="width: 420upx;" @tap="buy" data-type="2">立即购买</button>
			</view>
		</view>




	</view>
</template>

<script>
	var that;
	var videoCtx;
	var iendtime;
	import {
		uniPopup
	} from '@dcloudio/uni-ui';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				gid: '',
				goods: '',
				Skeleton: true,
				bg: "",
				alioss_baseurl:this.alioss_baseurl
			};
		},
		methods: {
			tohome(){
				uni.switchTab({
					url:'/pages/tab/index/index'
				})
			},
			getinfo() {
				that.$request.request({
					url: that.api.train.trainDetail,
					data: {
						id: that.gid
					},
					success(res) {
						that.goods = res;
						that.Skeleton = false;

					}
				});
			},
			buy() {
				uni.setStorageSync('ordergoods', that.goods);
				uni.redirectTo({
					url: '/pages/shop/createOrder/createOrder'
				});
			},
		},
		onLoad(option) {
			that = this;
			that.Skeleton = true;
			that.gid = option.gid ? option.gid : '6';
			if (option.scene) {
				let scene = decodeURIComponent(option.scene);
				console.log(scene);
				if (that.$zax.getQuery(scene, 'gid')) {
					that.gid = that.$zax.getQuery(scene, 'gid');
				} else if (that.$zax.getQuery(scene, 'goods_id')) {
					that.gid = that.$zax.getQuery(scene, 'goods_id');
				}
			}
			that.userinfo = uni.getStorageSync('userinfo');
		},
		onShow() {
			that.getinfo();
		},
		onShareAppMessage() {
			var goods = that.goods;
			return {
				imageUrl: goods.cover_pic,
				title: goods.name,
				path: '/pages/goods/goodsinfo/goodsinfo?gid=' + goods.id + '&user_id=' + that.userinfo.id,
				success: function(res) {
					console.log('成功', res);
				}
			};
		}
	};
</script>

<style>
	.wl-list {
		font-size: 28upx;
		height: 140upx;
		padding: 0upx 50upx;
		border-bottom: solid 1upx #ececec;
	}

	.wl-list image {
		width: 34upx;
		height: 34upx;
	}

	.no-h-view {
		flex-wrap: wrap;
		display: flex;
	}

	.padding-li {
		padding: 0upx 20upx 0upx 50upx;
	}

	.x_view {
		padding: 0upx 30upx;
		height: 56upx;
		line-height: 56upx;
		background: #ececec;
		font-size: 24upx;
		text-align: center;
		border-radius: 10upx;
		margin: 11upx 20upx 11upx 0upx;
		color: #9f9f9f;
	}

	.bg-yellow1 {
		background: #f52618;
		color: #fff;
	}

	.t-view {
		/* height: 284upx; */
		border: solid 1upx #c7c7c7;
		margin-top: 32upx;
		padding: 20upx 40upx;
		border-radius: 10upx;
	}

	.soldi-bottom {
		border-bottom: solid 2upx #e2e2e2;
	}

	.ts-view {
		padding: 0upx 40upx;
		height: 84upx;
		background-image: linear-gradient(92deg, #f52618 0%, #fe6a48 100%);
		background-color: #353535;
		font-size: 28upx;
		color: #ffffff;
	}

	.ts-view .cu-btn {
		width: 166upx;
		height: 48upx;
		font-size: 26upx;
		font-weight: 500;
	}

	.screen-swiper {
		height: 511upx;
		background-color: #f0f0f0;
	}

	.padding-air {
		padding: 35upx 44upx 35upx 52upx;
	}

	.li-view1 {
		height: 105upx;
		display: flex;
		align-items: center;
		background: #fff;
		padding: 0upx 36upx;
		border-bottom: solid #eeeeee 1upx;
	}

	.li-title {
		color: #1d1d1d;
		font-size: 28upx;
		width: 180upx;
	}

	.li-conten {
		color: #989898;
		font-size: 26upx;
		width: 460upx;
	}

	.lin-color {
		background-image: linear-gradient(-60deg, #dd00ac 0%, #fd59ff 100%);
		height: 75upx;
		font-size: 28upx;
		color: #ffffff;
	}

	.lin-color1 {
		background-image: linear-gradient(-60deg, #9329ff 0%, #b000dd 100%);
		height: 75upx;
		font-size: 28upx;
		color: #ffffff;
	}

	.c-color {
		color: #fe401b;
	}

	.x_goodsimg {
		width: 184upx;
		height: 184upx;
		border-radius: 10upx;
		margin-right: 30upx;
		overflow: hidden;
		border: solid 2upx #ff0f0f;
	}

	.attr-action {
		background-color: #ffffff;
		border: solid 1upx #ff0f0f;
		font-size: 28upx;
		color: #9a9a9a;
	}

	.stime {
		display: flex;
		align-items: center;
		font-size: 27upx;
		text-align: center;
		line-height: 40upx;
		color: #fff;
	}

	.stime .tiview {
		width: 40upx;
		height: 40upx;
		background-color: #ffffff;
		font-size: 27upx;
		text-align: center;
		line-height: 40upx;
		color: #1b1b1b;
		margin: 0upx 10upx;
	}

	.cu-bar.tabbar.border .action::before {
		content: ' ';
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		border-right: 1px solid rgba(0, 0, 0, 0);
		z-index: 3;
	}

	.dialog-view {
		width: 627rpx;
		height: 635rpx;
		background-image: linear-gradient(0deg, #a8c2ee 0%, #f9c2eb 100%);
		border-radius: 30rpx;
	}

	.cdiaview {
		width: 554rpx;
		height: 220rpx;
		background-color: #e45006;
		border-radius: 20rpx;
		color: #fff;
		margin: atuo;
		margin-top: 190upx;
	}

	.qytitle {
		font-size: 40upx;
		font-weight: 600;
	}

	.ticon {
		font-size: 35upx;
		color: #c29f5b;
		margin-right: 10upx;
	}

	.btn-item {
		padding: 40upx;
	}

	.qybtn {
		width: 384rpx;
		height: 84rpx;
		background-color: #ffffff;
		border-radius: 42rpx;
		color: #ff5411;
	}

	.canvas-view {
		position: fixed;
		top: -999999upx;
	}
</style>
