<template>
	<view class="gimg-com" :style="gstyle" >
		<view class="gimg"> 
			<image :src="loadimg" v-if="loadimg" :mode="mode"></image>
			<view class="loadview" v-else>
				<text class="iconfont icon-tupianjiazaishibai" v-if="errorimg" style="font-size: 45rpx;"></text>
				<text class="iconfont icon-jiazaitu" v-else style="font-size: 40rpx;  "></text>
			</view>
		</view>
		<image :src="imgurl" @load="loadout" @error="error" v-show="false"></image>
		<slot></slot>
	</view>
</template>

<script>
	import config from '@/config.js'
	export default {
		data() {
			return {
				imgurl: '',
				loadimg: '',
				errorimg: ''
			};
		},
		props: {
			src: { // 图片路径
				type: String
			},
			headerurl: { //图片域名
				type: String,
				default: config.alioss_baseurl
			},
			mode: {
				type: String,
				default: 'aspectFit'
			},
			gstyle: { //样式
				type: String,
				default: 'width:300rpx;height:300rpx'
			}
		},
		methods: {
			loadout(e) {
				let that = this;
				that.loadimg = that.imgurl;
			},
			error(e) {
				this.errorimg = true
			},
			getimage() {
				let that = this;
				let imgurl = that.src;
				if (imgurl) {
					if (imgurl.indexOf("http") == -1) {
						imgurl = that.headerurl + imgurl
					}
					that.imgurl = imgurl
					// console.log(that.imgurl)
				}

			}
		},
		created() {
			this.getimage()
		},
		watch: {
			src(a) {
				this.getimage();
			}
		}
	};
</script>

<style scoped lang="scss">
	@import url("./iconfont.css");

	.loadview {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #EEE;
		width: 100%;
		height: 100%;
	}
	.gimg-com{
		overflow: hidden;
		position:relative;
	}
	.gimg {
		width: 100%; 
		height: 100%;
		overflow: hidden;
		image {
			swidth: 100%;
			height: 100%;
		}
	}

	.iconfont {
		color: #9e9e9e;
	}
</style>
