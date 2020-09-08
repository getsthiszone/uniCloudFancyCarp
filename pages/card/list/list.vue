<template>
	<view>
		<u-sticky>
			<u-tabs name="cate_name" :list="tablist" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</u-sticky>
		
		<view class="u-wrap">
			<view class="list-item" v-for="(item,index) in list" :key="index" @tap="tpurl" :data-url="'/pages/card/info/info?id='+item.id">
				<view class="left">
					<Gimage :src="item.train.cover" gstyle="width:158rpx;height:158rpx;border-radius: 10rpx;" mode="aspectFill"></Gimage>
					<view class="centerview">
						<view class="text-cut title">{{item.train.title}}</view>
						<view class="qixa">有效期</view>
						<view class="timeview">2020.08.10-2021.02.10 </view>
					</view>
				</view>
				<view class="right">
					<view>
						<view class="flex align-center justify-center">
							<qrcode :text="'id='+item.id" size="95"></qrcode>
						</view>
						<view>二维码>></view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				list: [],
				lodstatus: '',
				nolist: false,
				pages: 1,
				cate_id: '',
				tablist: [{
					cate_name: '全部'
				}, {
					cate_name: '个人年卡'
				}, {
					cate_name: '次卡'
				}, {
					cate_name: '时段卡'
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			getlist() {
				let list = that.list;
				let page = that.page;
				that.lodstatus = 'loading';
				let nolist = '';
				let nomore = '';
				that.$request.request({
					url: that.api.user.card,
					data: {
						page: that.page
					},
					success(res) {
						that.skeleton = false;
						let li = res.data;
						if (page == 1) {
							list = li;
							page++;
							list.length == 0 ? (nolist = true) : (nolist = false);
							that.lodstatus = '';
						} else {
							if (li.length > 0) {
								list = list.concat(li);
								page++;
								that.lodstatus = '';
							} else {
								that.lodstatus = 'noMore';
							}
						}
						that.list = list;
						that.page = page;
						that.nolist = nolist;
						that.nomore = nomore;
					}
				});
			},
		},
		onLoad(option) {
			that = this;
			if (option.cate_id) {
				that.cate_id = option.cate_id
			}
			that.getlist();
		},
		onReachBottom() {
			that.getlist();
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
		padding: 0rpx 25rpx;
		width: 698rpx;
		height: 224rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;

		.left {
			width: 490rpx;
			height: 170rpx;
			display: flex;
			align-items: center;
			border-right: dashed 1rpx #e5e5e5;

			.centerview {
				height: 138rpx;
				padding: 0rpx 20rpx;
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

		.right {
			flex: 1;
			display: flex;
			justify-content: center;
			text-align: center;
			font-size: 20rpx;
			color: #a3a3a3;
		}
	}
</style>
