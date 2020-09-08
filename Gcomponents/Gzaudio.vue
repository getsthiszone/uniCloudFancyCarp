<template>
	<view>
		<view class="audio-view">
			<view style="display: flex; align-items: center;flex: 1; " >
				<image class="audio-icon" src="/static/icon/audio-j.png" @tap.stop="operation" ></image>
				<view class="audio-progress">
					<view class="cu-progress round xs"><view class="bg-green" :style="{ width: currentbf +'%' }"></view></view>
				</view>
			</view>
			<view class="text-sm text-gray shijian " >
				<block v-if="durationTime">
					{{currentTime}}/{{durationTime}}
				</block>
			</view>
		</view>
	</view>
</template>

<script>
const audio = uni.createInnerAudioContext(); //创建音频
export default {
	data() {
		return {
			currentTime: '00:00', //当前播放时间
			durationTime: '00:00', //总时长
			current: '0', //slider当前进度
			loading: false, //是否处于读取状态
			paused: true, //是否处于暂停状态
			seek: false, //是否处于拖动状态
			currentbf: 0
		};
	},
	props: {
		src: String, //音频链接 
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
					that.current = audio.currentTime;
					that.currentbf = (that.current / that.duration) * 100;
					console.log("进度：",that.currentbf);
					that.$forceUpdate()
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
		this.current = 0; 
		if(audio.duration){
			this.durationTime = this.format(audio.duration);
		}
		
		audio.obeyMuteSwitch = false; 
	},
	beforeDestroy(){
		audio.pause();
	},
	watch: { 
		src(e) {
			console.log(e);
			audio.src = e;
			let duration = audio.duration; 
			this.current = 0;
			this.loading = true;
			audio.pause();
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

<style scoped>
.audio-view {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100upx;
	padding: 20upx;
}

.audio-icon {
	width: 61rpx;
	height: 61rpx;
}
.audio-progress {
	width: 90%;
	display: flex;
	    align-items: center;
} 
.shijian{
	width: 160upx;
	border: #000000;
	text-align: right;
}
</style>
