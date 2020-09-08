<template>
	<view>
		<view class="title">
			{{detail.title}}
		</view>

		<u-parse :html="detail.content"  :domain="alioss_baseurl"></u-parse>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				id: '',
				detail: {},
				alioss_baseurl:this.alioss_baseurl
			}
		},
		methods: {
			getinfo() {
				that.$request.request({
					url: that.api.article.articleDetail,
					data: {
						id: that.id
					},
					success(res) {
						console.log(res)
						that.detail = res.detail;
					}
				})
			}
		},
		onLoad(option) {
			that = this;
			that.id = option.id;
			that.getinfo();
		}
	}
</script>

<style>
	page {
		background-color: #FFF;
	}

	.title {
		padding: 30rpx;
		font-size: 40rpx;
	}
</style>
