<template>
	<view>
		<view class="bg-white flex flex-wrap justify-between" style="padding: 30rpx 20rpx 0rpx;">
			<view class="margin-bottom" v-for="(item,index) in list" :key="index">
				<view style="width: 340rpx; margin: auto;"  @tap="tpurl" :data-url="'/pages/shop/info/info?gid='+item.id">
					<Gimage :src="item.cover" mode="aspectFill" gstyle="width:340rpx;height:340rpx;border-radius: 10rpx;"></Gimage>
					<view class="text-left" style="padding: 20rpx;font-size: 24rpx;">
						<view class="text-red" style="margin-bottom: 10rpx;">¥{{item.price}}</view>
						<view class="title text-cut">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view style="height: 500rpx;" v-if="nolist">
			<u-empty text="暂无票卡" mode="favor"></u-empty>
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
				page: 1,
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

<style>
page{
	background-color: #FFF;
}
</style>
