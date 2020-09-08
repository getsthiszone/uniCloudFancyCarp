<template>
	<view>
		<view v-if="type == '1'" class="kfPage">
			<view class="text-center">
				<image class="kficon" src="/static/nolist/gnkf.png"></image>
				<view class="kftext">功能开发中</view>
			</view>
		</view>
		<view class="pfixed flex justify-center align-center" v-if="type == '0'">
			<view class="fcon">
				<image :src="img" mode="widthFix" style="width: 620upx; height: 537upx; " ></image>
				<view @tap="close" class="close flex justify-center">
					<image src="/static/icon/icon-close.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'kfloading',
		props: {
			type: {
				type: String,
				default: '1'
			}
		},
		data() {
			return {
				img:'https://qnshop.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/b87e4aeba24ba657e7df267f31784e7affd9d19f.png'
			};
		},
		methods: {
			close(){
				// console.log(123)
				// uni.navigateBack({
				// 	delta:1
				// })
				// uni.navigateTo()
			}
		},
		created() {
			var that = this;
			console.log('that', this)

		}
	};
</script>

<style>
	.kfPage {
		height: 100vh;
		padding-top: 140upx;
	}

	.kficon {
		width: 250upx;
		height: 250upx;
	}

	.kftext {
		font-size: 28upx;
		line-height: 100upx;
		color: #6f6f6f;
	}

	.pfixed {
		position: fixed;
		top:0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 0 60upx;
		z-index: 1001;
	} 
	.close{
		 position: relative;
		 top: 40upx;
	}
	.close image{
		width: 80upx;
		height: 80upx;
	}
</style>
