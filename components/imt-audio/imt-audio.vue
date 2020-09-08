<template>
	<view class="imt-audio">
		<view class="audio-wrapper">
			<view class="audio-number">{{ currentTime }}</view>
			<slider
				class="audio-slider"
				:activeColor="color"
				block-size="8"
				:value="current"
				:max="duration"
				@changing="(seek = true), (current = $event.detail.value)"
				@change="change"
			></slider>
			<view class="audio-number">{{ durationTime }}</view>
			<!-- <view class="progress round">
				<view class="current" :style="{ width: currentbf + '%' }">
					<text class="">{{ currentTime }}/{{ durationTime }}</text>
				</view>
			</view> -->
		</view>
		<view class="audio-control-wrapper" :style="{ color: color }">
			<view class="audio-control Guoicon-shangyishou" v-if="control" :style="{ borderColor: color }" @click="prev"></view>
			<view class="audio-control Guoicon-bofang play-view " v-if="paused" :style="{ borderColor: color }" @click="operation"></view>
			<block v-else>
				<view
					class="audio-control cuIcon-loading2 loading-view  "
					v-if="loading"
					:class="{ audioLoading: loading }"
					:style="{ borderColor: color }"
					@click="operation"
				></view>
				<view class="audio-control cuIcon-stop play-view " v-else :style="{ borderColor: color }" @click="operation"></view>
			</block>
			<view class="audio-control Guoicon-xiayishou " v-if="control" :style="{ borderColor: color }" @click="next"></view>
		</view>
	</view>
</template>

<script>
const audio = uni.createInnerAudioContext(); //创建音频
export default {
	data() {
		return {
			currentTime: '', //当前播放时间
			durationTime: '', //总时长
			current: '', //slider当前进度
			loading: false, //是否处于读取状态
			paused: true, //是否处于暂停状态
			seek: false, //是否处于拖动状态
			currentbf: 0
		};
	},
	props: {
		src: String, //音频链接
		autoplay: Boolean, //是否自动播放
		duration: Number, //总时长（单位：s）
		control: {
			type: Boolean,
			default: true
		}, //是否需要上一曲/下一曲按钮
		continue: Boolean, //播放完成后是否继续播放下一首，需定义@next事件
		color: {
			type: String,
			default: '#169af3'
		}, //主色调
		id:''
	},
	methods: {
		//返回prev事件
		prev() {
			this.$emit('prev');
		},
		//返回next事件
		next() {
			this.$emit('next');
		},
		//格式化时长
		format(num) {
			return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60);
		},
		//播放/暂停操作
		operation() {
			console.log("播放/暂停")
			if (audio.paused) {
				audio.play();
				this.play();
				this.loading = true;
			} else {
				audio.pause();
			}
		},
		//完成拖动事件
		change(e) {
			audio.seek(e.detail.value);
		},
		play() {
			//音频进度更新事件
			audio.onTimeUpdate(() => {
				let that = this; 
				if (!this.seek) {
					let duration = this.format(audio.duration);
					
					// if (audio.duration) {
					// 	this.durationTime = duration;
					// 	this.duration = audio.duration;
					// }
					this.current = audio.currentTime;
					that.currentbf = (this.current / this.duration) * 100;
				}
			});
			//音频播放事件
			audio.onPlay(() => {
				console.log('播放');
				this.paused = false;
				this.loading = false;
				let duration = this.format(audio.duration);
				if (audio.duration) {
					this.durationTime = duration;
					this.duration = audio.duration;
				}
				console.log('音频时长:', audio.duration);
				console.log('音频时长转换:', duration);
			});
			//音频暂停事件
			audio.onPause(() => {
				this.paused = true;
			});
			//音频结束事件
			audio.onEnded(res => {
				console.log('结束：', res);
				console.log('音频时长:', audio.duration);
				if (this.continue) {
					this.next();
				} else {
					this.paused = true;
					this.current = 0;
				}
			});
			//音频完成更改进度事件
			audio.onSeeked(() => {
				this.seek = false;
			});
		}
	},
	created() {
		audio.src = this.src;
		console.log("音频地址：",this.res)
		this.current = 0;
		this.durationTime = this.format(this.duration);
		audio.obeyMuteSwitch = false;
		
	},
	beforeDestroy() {
		audio.pause();
	},
	watch: {
		//监听音频地址更改
		src(e) {
			console.log("播放链接更换",e);
			audio.src = e; 
			this.current = 0;
			this.loading = true;
			// this.paused=true;
			audio.stop();
			setTimeout(function(){
				audio.play(); 
			},1500)
		},
		//监听总时长改变
		duration(e) {
			this.durationTime = this.format(e);
		},
		//监听当前进度改变
		current(e) {
			this.currentTime = this.format(e);
		}
	}
};
</script>

<style>
@font-face {
	font-family: 'icon';
	src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot');
	src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff') format('woff'), url('//at.alicdn.com/t/font_1104838_fxzimc34xw.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1104838_fxzimc34xw.svg#iconfont') format('svg');
}

.imt-audio {
	padding: 30upx;
	border-radius: 20upx;
}

.audio-wrapper {
	display: flex;
	align-items: center;
	margin-top: 30upx;
}

.audio-number {
	font-size: 24upx;
	line-height: 1;
	color: #fff;
}

.audio-slider {
	flex: 1;
	margin: 0 30upx;
}

.audio-control-wrapper {
	margin-top: 20upx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'icon' !important;
}

.audio-control {
	font-size: 50upx;
	line-height: 1;
	border-radius: 50%;
	padding: 16upx;
}

.audio-control-next {
	transform: rotate(180deg);
}

.audio-control-switch {
	font-size: 40upx;
	margin: 0 80upx;
}

.audioLoading {
	animation: loading 2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

@keyframes loading {
	to {
		transform: rotate(360deg);
	}
}
.play-view {
	font-size: 94upx;
	margin: 0upx 130upx;
}
.loading-view {
	width: 94upx;
	height: 94upx;
	border-radius: 1000upx;
	font-size: 70upx;
	margin: 0upx 130upx;
	border: solid 3upx #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
.progress {
	width: 631rpx;
	height: 2rpx;
	background-color: #aaaaaa;
	margin: auto;
	position: relative;
	margin: 20upx;
}
.current {
	animation: all 0.2s;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	background-color: #fff;
}
.current text {
	font-size: 18upx;
	background-color: #fff;
	padding: 7upx 10upx;
	border-radius: 1000upx;
	position: absolute;
	right: -50upx;
}
</style>
