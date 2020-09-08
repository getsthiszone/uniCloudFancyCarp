<template>
	<view :style="styles">
		<view class="video-V" :style="styles">
			<image class="video-V" :src="imgurl" mode="aspectFit"></image>
			<view class="playicon-v">
				<text class="playicon cuIcon-videofill" @tap.stop="play"></text>
			</view>
		</view> 
		<video class="play-video" :src="src" :id="id" @play="onplay" v-if="videoShow"  @fullscreenchange="fullchang"></video>
	</view>
</template>

<script>
export default {
	data() {
		return {
			videoContext: '',
			videoShow: true,
			imgurl: '',
			id:'',
			direction:'0'
		};
	},
	props: {
		src: String,
		poster: String,
		styles: {
			type: String,
			default: 'height:380upx;'
		}
	},
	methods: {
		onplay(e) {
			console.log('播放事件', e);
		},
		onerror(e) {
			console.log('播放出错', e);
		},
		play(e) {
			let that = this;
			this.videoContext.requestFullScreen({direction:that.direction});
			that.videoContext.play();
		},
		fullchang(e) {
			let that = this;
			if (!e.detail.fullScreen) {
				that.videoContext.stop();
				that.videoShow = false;
				setTimeout(function() {
					that.videoShow = true;
				}, 100);
			}
		},
		ossImg(value) {
			return value + '?x-oss-process=video/snapshot,t_1000,m_fast';
		}
	},
	created() {
		let that = this;
		that.id = 'myvideo' + new Date().getTime() + Math.floor(Math.random() * 150);
		this.videoContext = uni.createVideoContext(that.id, this);
		if (that.poster) {
			that.imgurl = that.poster;
		} else {
			that.imgurl = that.ossImg(that.src);
		}
		uni.getImageInfo({
			src:that.imgurl,
			success(res) { 
				if(res.width<res.height){
					// console.log("纵向")
					that.direction='0'
				}else{
					// console.log("横向")
					that.direction='-90'
				}
			}
		})
		
	},
	beforeDestroy() {
		if (this.videoContext) {
			this.videoContext.stop();
		}
	}
};
</script>

<style>
.video-V {
	width: 100%;
	height: 100%;
	background-color: #000000;
	position: relative;
}

.play-video {
	position: fixed;
	right: -1000rpx; 
	width: 100rpx;
	height: 100rpx;
}

.playicon-v {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.1);
	font-size: 55upx;
	color: #fff;
}
</style>
