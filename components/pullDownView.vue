<template>
	<view  > 
		<view class="content" @touchstart="touchS" @touchmove="touchM" @touchend="touchEnd"  :style="{ transform: 'translateY(' + moveLocation + 'px)' }">
			<view class="down-title" :style="[{ backgroundColor: refbg }, { color: color }]">
				<text class="cuIcon-top" :class="moveStatus === 0 && 'release'" v-if="moveStatus !== 2"></text>
				<text class="cuIcon-loading1 loadingimg" v-else></text>
				<text class="pdtext">{{ tipsMsg[moveStatus] }}</text>
			</view>
			<scroll-view :scroll-y="false">
				<slot />
			</scroll-view>
		</view>
	</view>
</template>

<script>
let that;
let scrollWidth = 0;
let tabWidthArr = [];
let xlHeight = 50; // 下拉/上拉最大距离
export default {
	name: 'scroll',
	props: {
		type: {
			type: String,
			default: '1'
		}, 
		refbg: {
			type: String,
			default: '#EEE'
		},
		color: {
			type: String,
			default: '#000'
		},
		xlHeight: {
			type: [Number, String],
			default: 50
		}
		// 是否开启下拉/上拉,
		// isTouch: {
		// 	type: [String,Boolean],
		// 	default: false
		// },
	},
	data() {
		return {
			refreshs: false,
			scrolly: true,
			refresherEnabled: true,
			img: {},
			currentIndex: 0,
			scrollLeft: 0,
			touchStartY: 0,
			moveLocation: 0, // 下拉距离
			moveStatus: 0, // 当前上拉状态
			tipsMsg: ['下拉刷新', '释放刷新', '加载中'],
			old: {
				scrollTop: 0
			},
			isTouch: false
		};
	}, 
	methods: {     
		// 以下部分为下拉刷新部分
		touchS(e) {
			this.touchStartY = e.touches[0].pageY;
		},
		touchM(e) {
			let that = this;
			if (this.moveStatus === 2 && !this.isTouch) {
				// 如果当前正在加载状态，禁止下拉
				return;
			}
			if (e.touches[0].pageY > this.touchStartY) {
				this.moveLocation = e.touches[0].pageY - this.touchStartY < that.xlHeight ? e.touches[0].pageY - this.touchStartY : that.xlHeight;
				if (this.moveLocation >= that.xlHeight) {
					this.moveStatus = 1;
				} else {
					this.moveStatus = 0;
				}
			}
		},
		touchEnd(e) {
			let that = this;
			if (that.moveLocation < that.xlHeight) {
				that.moveLocation = 0; 
				return;
			}
			if (that.moveStatus === 1) {
				that.moveStatus = 2; 
				this.$emit('downrefresh');
			}
		},
		
		endtouch() {// 关闭加载动画
			let that = this;
			// 释放后调用api接口获取数据
			that.moveLocation = 0;
			that.moveStatus = 0;
			this.isTouch = false;
			 
		}
	},
	created() {
		that = this;
	}
};
</script>

<style scoped lang="less">
.public-tabbar {
	height: 50px;
	overflow: hidden;
	border-bottom: 1px solid #eee;
	position: relative;
	z-index: 1;
	.scroll-view {
		height: 56px;
		line-height: 50px;
		background: #fbfbfb;
		white-space: nowrap;
		text {
			padding: 0 30rpx;
			display: inline-block;
			height: 48px;
			&.active {
				color: red;
				border-bottom: 2px solid red;
			}
		}
	}
}
.content {
	position: relative; 
	transition: transform 300ms ease 0s;
	margin-top: -50px;
	.down-title {
		width: 100%;
		text-align: center;
		color: gray;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		.pdimage {
			width: 50rpx;
			transform: rotate(0deg);
			transition: transform 0.3s;
		}
		.release {
			transform: rotate(180deg);
		}
		.pdtext {
			display: inline-block;
			font-size: 28rpx;
			vertical-align: middle;
			margin-left: 16rpx;
		}
		.down-icon {
			display: block;
			width: 36upx;
			height: 36upx;
			margin-right: 12upx;
			animation: load 1.2s cubic-bezier(0.37, 1.08, 0.7, 0.74) infinite;
		}
		@-webkit-keyframes load {
			0% {
				transform: rotate(0deg);
			}

			100% {
				transform: rotate(360deg);
			}
		}
	}
	scroll-view {
		height: 100%;
	}
}

.loadingimg {
	animation: cuIcon-spin 2s infinite linear;
	font-size: 32rpx;
}
</style>
