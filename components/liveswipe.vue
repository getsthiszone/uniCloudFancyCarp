<template>
	<view>
		<view class="cardw-swiper">
			<swiper class="card-swiper" :indicator-dots="false" :circular="true" interval="5000" duration="500" previous-margin="120rpx" @change="cardSwiper">
				<swiper-item v-for="(item, index) in list" :key="index" :class="cardCur == index ? 'cur' : ''">
					<view class="swiper-item" @tap="tpliveinfo" :data-id="item.id" :data-status="item.status" >
						<view class="bg-img" :style="{ backgroundImage: 'url(' + item.cover + ')' }">
							<view class="cu-capsule round">
								<view class="cu-tag bg-jhline ">
									<text v-if="item.status == 1">未开播</text>
									<text v-if="item.status == 2">直播中</text>
									<text v-if="item.status == 3">已关闭</text>
								</view>
								<view class="cu-tag bg-lk">{{ item.online }}观看</view>
							</view>
						</view>
						<view class="down">
							<image class="avatar" :src="item.user.avatar_url" mode=""></image>
							<view>{{ item.user.nickname }}</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	name: 'liveswipe',
	props: {
		list: {
			type: Array 
		}, 
	},
	data() {
		return {
			thisvideo: '',
			progress: 0,
			width: 0,
			cardCur:0
		};
	},
	methods: {
		 cardSwiper(e) {
			 let that=this;
		 	that.cardCur = e.detail.current;
		 },
		 tpliveinfo(e) {
			 let status=e.currentTarget.dataset.status;
			 if(status==1){
				 uni.navigateTo({
				 	url: '/pages/liveBroadcast/yugaoInfo/yugaoInfo?id=' + e.currentTarget.dataset.id
				 });
			 }else{
				 uni.navigateTo({
				 	url: '/pages/liveBroadcast/livePLayer/player?id=' + e.currentTarget.dataset.id
				 });
			 } 
		 },
	},
	created() {
		this.thisvideo = uni.createVideoContext('myvideo');
	},
	watch: {
		 
	}
};
</script>

<style scoped>
.wvideo {
	width: 750upx;
	flex: 1;
	flex-direction: column;
}
.myvideo {
	width: 750upx;
	flex: 1 !important;
	background-color: #ffffff;
}
.progressView {
	width: 750upx;
	height: 5upx;
	flex-direction: row;
	background-color: #8a8a8a;
}
.progress {
	background-color: #fff;
	height: 5upx;
}
</style>
