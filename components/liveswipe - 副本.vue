<template>
	<view>
		<view class="wvideo" :style="[{ height: windowHeight + 'px' }]" >
			<video
				class="myvideo"
				id="myvideo"
				:loop="true"
				:autoplay="false"
				:src="data.video_file"
				@error="videoError"
				@play="videoPlay"
				@pause="videoPause"
				:controls="false" 
				@timeupdate="videotimeupdate"
				 object-fit="contain"
			></video>
			<!-- :poster="data.cover" -->
			<view class="progressView"><view class="progress" :style="[{ width: width ? width : '0px' }]"></view></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'liveswipe',
	props: {
		index: {
			type: [String, Number],
			default: 0
		},
		data: {
			type: Object
		},
		playindex: {
			type: [String, Number],
			default: 0
		},
		play: {
			type: Boolean,
			default: false
		},
		height: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			thisvideo: '',
			progress: 0,
			width: 0
		};
	},
	methods: {
		videoError(e) {
			let that = this;
			if (e.detail.errMsg) {
				console.log('视频播放出错：', that.index, e.currentTarget.id, '错误：', e.detail.errMsg, e);
			}
		},
		videoPlay(e) {
			console.log('视频播放：', e.currentTarget.id, e);
		},
		videoPause(e) {
			console.log('视频暂停：', e.currentTarget.id, e);
		},
		videotimeupdate(e) {
			let that = this;
			let currentTime = e.detail.currentTime;
			let duration = e.detail.duration;
			let progress = parseInt((currentTime / duration) * 100);
			that.progress = progress;
			that.width = parseInt((currentTime / duration) * that.windowWidth) + 'px';
			that.$forceUpdate();
		},
		click(e) {
			let that = this;
			if (that.list[index]['play']) {
				that.thisvideo.pause();
				console.log('暂停');
			} else {
				console.log('播放');
				that.thisvideo.play();
			}
			that.$forceUpdate();
		}
	},
	created() {
		this.thisvideo = uni.createVideoContext('myvideo');
	},
	watch: {
		play(a) {
			console.log('是否播放', a);
			if (a) {
				that.thisvideo.play();
			} else {
				that.thisvideo.pause();
			}
		}
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
