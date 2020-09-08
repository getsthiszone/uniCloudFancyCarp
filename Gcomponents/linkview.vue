<template>
	<view>
		<view class="lview">
			<view class="linkv" :style="gstyle"></view>
			<slot></slot>
			<view class="linkv" :style="gstyle"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			gstyle:'' 
		},
		data() {
			return {

			};
		},
		methods: {

		},
		created() {
			let that = this;
		},
	};
</script>

<style scoped>
	.lview {
		width: 750rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lview .linkv {
		width: 100rpx;
		height: 2rpx;
		background-color: #1b1b1b;
		margin: 20rpx;
	}
</style>
