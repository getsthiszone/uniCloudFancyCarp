<template>
	<view>
		<!-- #ifndef MP-WEIXIN -->
		<button
			class="Stafficon-kefu"
			:class="tart ? 'kefubtn' : 'psbtn'"
			@tap="tukefu"
			:style="styles"
			@touchstart="tstart"
			@touchmove.stop.prevent="tmove"
			@touchend="tend"
			:plain="true"
		>
			<text style="font-size: 28upx;" v-if="!tart">客服</text>
		</button>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->

		<!-- @touchstart="tstart" @touchmove.stop.prevent="tmove" @touchend="tend" -->
		<button
			class=" Stafficon-kefu"
			:class="tart ? 'kefubtn' : 'psbtn'"
			open-type="contact"
			:style="styles"
			:session-from="'7moor|' + userInfo ? userInfo.nickname : '' + '|' + userInfo ? userInfo.avatar_url : ''"
			:plain="true"
		>
			<text style="font-size: 28upx;" v-if="!tart">客服</text>
		</button>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	props: {
		goods: {},
		order: {},
		touchmove: {
			type: [String, Boolean],
			default: true
		}
	},
	data() {
		return {
			userInfo: {},
			styles: 'right:0rpx;bottom:200rpx',
			right: 20,
			bottom: 300,
			top: '',
			left: '',
			width: '',
			windowWidth: '',
			windowHeight: '',
			tart: false,
			ctime: ''
		};
	},
	methods: {
		tukefu() {
			let that = this;
			let goods = that.goods ? JSON.stringify(that.goods) : '';
			let order = that.order ? JSON.stringify(that.order) : '';
			uni.navigateTo({
				url: '/pages/serve/kefu/kefu?goods=' + goods + '&order=' + order
			});
		},
		tmove(e) {
			// console.log(e);
			let that = this;
			if (!that.touchmove) {
				return;
			}
			let left = Number(e.touches[0].pageX) - that.width / 2;
			let top = Number(e.touches[0].pageY) - that.width / 2;

			that.top = top;
			that.left = left;
			// console.log(`源：${e.touches[0].pageX},${e.touches[0].pageY}`);
			// console.log(`${left},${top}`);
			that.styles = `left:${left}px;top:${top}px`;
		},
		tend(e) {
			// console.log(e);
			let that = this;
			if (!that.touchmove) {
				return;
			}
			let left = that.left;
			let top = that.top;
			let bottom = Number(that.windowHeight) - 100;
			let Y = top;
			if (top < 100) {
				Y = 100;
			} else if (top > bottom) {
				Y = bottom;
			} else {
				Y = top;
			}
			that.styles = `right:0rpx;top:${Y}px`;
			// that.ctime = setTimeout(function() {
			// 	that.styles = `right:-50rpx;top:${Y}px`;
			// }, 3000);
			that.tart = false;
		},
		tstart(e) {
			let that = this;
			if (!that.touchmove) {
				return;
			}
			let left = e.currentTarget.offsetLeft;
			let top = e.currentTarget.offsetTop;
			// console.log(`${left},${top}`);
			that.top = top;
			that.left = left;
			that.tart = true;
			// clearTimeout(that.ctime);
			that.width = uni.upx2px(100);
		}
	},
	created() {
		let that = this;
		uni.getSystemInfo({
			success(res) {
				that.windowWidth = res.windowWidth;
				that.windowHeight = res.windowHeight;
			}
		});
	},
	updated() {
		this.userInfo = uni.getStorageSync('userinfo');
	}
};
</script>

<style scoped>
.kefubtn {
	width: 100rpx;
	height: 100rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 5rpx 6rpx 5rpx rgba(214, 29, 23, 0.4);
	border: solid 1rpx #eeeeee;
	padding: 0upx;
	margin: 0upx;
	border-radius: 100upx;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 55upx;
	position: fixed;
	border: none;
	/* background-color: #ff0a0a !important; */
	background-image: linear-gradient(33deg, #f52618 0%, #ff895a 100%);
	z-index: 90;
	color: #ffffff !important;
	animation: all 0.7s;
	border: none !important;
}

.psbtn {
	width: 180rpx;
	height: 100rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 5rpx 6rpx 5rpx rgba(214, 29, 23, 0.4);
	border: solid 1rpx #eeeeee;
	padding: 0upx;
	margin: 0upx;
	border-radius: 100rpx 0rpx 0rpx 100rpx;
	overflow: hidden;
	align-items: center;
	display: flex;
	justify-content: center;
	font-size: 55upx;
	position: fixed;
	border: none;
	/* background-color: #ff0a0a !important; */
	background-image: linear-gradient(33deg, #f52618 0%, #ff895a 100%);
	z-index: 80;
	color: #ffffff !important;
	animation: all 0.7s;
	border: none !important;
}
</style>
