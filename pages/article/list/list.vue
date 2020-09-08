<template>
	<view>
		<view class="flex flex-wrap justify-between" style="padding: 30rpx 20rpx 0rpx;">
			<block v-for="(item,index) in list" :key="index">
				<view class="margin-bottom" @tap="tpurl" :data-url="'/pages/article/info/info?id='+item.id">
					<view style="width: 340rpx; margin: auto;">
						<Gimage :src="item.cover" mode="aspectFill" gstyle="width:340rpx;height:205rpx;border-radius: 10rpx;"></Gimage>
						<view class="text-left" style="padding:20rpx 10rpx;font-size: 24rpx;">
							<view class="title ">{{item.title}}</view>
						</view>
					</view>
				</view>
			</block>

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
				cate_id: ''
			}
		},
		methods: {
			getlist() {
				let list = that.list;
				let page = that.page;
				that.lodstatus = 'loading';
				let nolist = '';
				let nomore = '';
				that.$request.request({
					url: that.api.train.cateTrain,
					data: {
						cate_id: that.cate_id,
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

<style scoped>
	page {
		background-color: #FFF;
	}

	.title {
		font-size: 25rpx;
		line-height: 46rpx;
		color: #1b1b1b;
	}
</style>
