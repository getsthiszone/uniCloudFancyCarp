<template>
	<view :style="styles">
		<!-- @touchstart="touchS" @touchmove="touchM" @touchend="touchEnd"  -->
		<view class="content" :style="{ transform: 'translateY(' + moveLocation + 'px)' }">
			<view class="down-title" :style="[{ backgroundColor: refbg }, { color: color }]">
				<text class="cuIcon-top" :class="moveStatus === 0 && 'release'" v-if="moveStatus !== 2"></text>
				<text class="cuIcon-loading1 loadingimg" v-else></text>
				<text class="pdtext">{{ tipsMsg[moveStatus] }}</text>
			</view>
			<scroll-view scroll-y="true" @scroll="scroll" @scrolltoupper="upper" @scrolltolower="onReach"><slot /></scroll-view>
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
		styles: {
			type: String,
			default: ''
		},
		refbg: {
			type: String,
			default: '#f0f0f0'
		},
		color: {
			type: String,
			default: '#f0f0f0'
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
	computed: {},
	methods: {
		upper() {
			// this.isTouch = true; // 到顶后，开启上拉
			// that.$alert("开启下拉")
		},
		onReach() {
			this.$emit('onReach');
		},
		scroll(e) {
			// console.log(e.detail.scrollTop);
			this.isTouch = false;
			return
			this.old.scrollTop = e.detail.scrollTop;
			if (e.detail.scrollTop == 0) {
				if (!this.isTouch) {
					this.isTouch = true;
					// console.log('开启下拉');
					// that.$alert("开启下拉")
				}
			} else {
				// console.log('需要关闭下拉');
				if (this.isTouch) {
					this.isTouch = false;
					// that.$alert("关闭下拉")
					// console.log('关闭下拉');
				}
			}
		},
		// tabbar
		scrollClick(e, val) {
			if (this.moveStatus === 2) {
				// 如果当前正在加载状态，禁止切换tabbar
				return;
			}
			// 判断点击方向，进行判断向左滚还是向右滚动
			this.scrollLeft = e.currentTarget.offsetLeft - scrollWidth / 2 + tabWidthArr[val] / 2;
			this.currentIndex = val;
		},
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
				// setTimeout(function() { // 释放后调用api接口获取数据
				// 	that.moveLocation = 0
				// 	that.moveStatus = 0
				// }, 2000)
				this.$emit('downrefresh');
			}
		},
		endtouch() {
			let that = this;
			// 释放后调用api接口获取数据
			that.moveLocation = 0;
			that.moveStatus = 0;
			this.isTouch = false;
			// that.$alert("关闭下拉")
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
	height: 100vh;
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
