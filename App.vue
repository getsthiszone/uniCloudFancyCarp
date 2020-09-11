<script>
	import Vue from 'vue';
	import require from '@/tools/ajax.js';
	import config from '@/config.js';
	export default {
		onLaunch: function(option) {
			// 处理小程序二维码传
			if (option.query) {
				if (option.query.scene) {
					let scene = decodeURIComponent(option.query.scene);
					console.log('进入程序传值：', scene);
					let parent_id = this.$zax.getQuery(scene, 'parent_id');
					let user_id = this.$zax.getQuery(scene, 'user_id');
					let asgid = this.$zax.getQuery(scene, 'asgid')
					if (asgid) {
						let asgdata = {
							asgid: asgid,
							type: this.$zax.getQuery(scene, 'type')
						}
						uni.setStorageSync('asgdata', asgdata);
					}
					// console.log("上级id：",parent_id)
					if (parent_id || user_id) {
						uni.setStorageSync('parent_id', parent_id ? parent_id : user_id);
						if (uni.getStorageSync('token')) {
							this.$zax.bind_parent(parent_id); 
						}
					}
				}
			}
			// this.$zax.getConfig();
			if (uni.getStorageSync("token")) {
				// this.$zax.userinfo();
			}
		},
		onShow: function() {
			console.log('App Show');
			console.log(this.$u.config.v);
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #f2f3f4;
	}

	/* #ifndef  APP-PLUS-NVUE */
	@import 'colorui/icon.css';
	@import 'colorui/main.css';
	@import "uview-ui/index.scss";

	.couponlist {
		.couponitem {
			width: 710rpx;
			margin: auto;
			margin-top: 20rpx;

			.coupontop {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #FFF;
				padding: 40rpx 30rpx;
				border-radius: 20rpx;
				border-bottom: dashed #eeeeee 1rpx;
				position: relative;

				.logo {
					width: 130rpx;
					height: 130rpx;
					border-radius: 8rpx;
					margin-right: 20rpx;
				}

				.comment {
					width: 330rpx;
					height: 110rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-size: 28rpx;
						color: #2f2f2f;
					}

					.endtime {
						font-size: 24rpx;
						color: #9d9d9d;
					}
				}

				.rprice {
					height: 110rpx;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					text-align: center;

					.price {
						font-size: 46rpx;
						color: #ff0e0e;
						font-weight: 600;

						.price-icon {
							font-size: 31rpx;
						}
					}

					.subtitle {
						font-size: 24rpx;
						color: #9d9d9d;
					}
				}
			}

			.couponbottom {
				display: flex;
				height: 103rpx;
				align-items: center;
				padding: 0rpx 40rpx;
				justify-content: space-between;
				background-color: #FFF;
				border-radius: 20rpx;

				.left {
					font-size: 24rpx;
					color: #b3b3b3;
				}

				.btn {
					width: 146rpx;
					height: 54rpx;
					padding: 0rpx;
					background-color: #ff6c13 !important;
					border-radius: 10rpx;
					font-size: 24rpx;
					color: #ffffff;
				}

			}
		}


	}

	.filter {
		filter: grayscale(100%);
	}

	/* #endif */
</style>
