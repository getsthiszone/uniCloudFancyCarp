<template>
	<view>
		<view class="qrcode" :style="[{width:size+'rpx'},{height:size+'rpx'}]">
			<canvas class="qrcanvas" canvas-id="qrcode" :style="[{width:size+'px'},{height:size+'px'}]" />
			<image v-if="images" :src="images"></image>
		</view>

	</view>
</template>

<script>
	import uQRCode from '@/js_sdk/Sansnn-uQRCode/uqrcode.js'
	export default {
		props: {
			size: {
				type: [String, Number],
				default: 354,
			},
			text: {  
				type: String,
				default: 'uQRCode',
			}
		},
		data() {
			return {
				images: ""
			};
		},
		methods: {
			make() {
				let size = Number(this.size);
				uQRCode.make({
					canvasId: 'qrcode',
					componentInstance: this,
					text: this.text,
					size: size,
					margin: 10,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'jpg',
					correctLevel: uQRCode.errorCorrectLevel.H,
					success: res => {
						this.images = res;
						this.$emit('tuCode', res);
					}
				})
			}
		},
		created() {
			this.make();
		},
	};
</script>

<style scoped lang="less">
	.qrcode {
		overflow: hidden;
		position: relative;

		.qrcanvas {
			position: fixed;
			top: -9999rpx;
			left: 9999rpx;
		}

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
