<template>
	<view>
		<uni-popup ref="showxieyi" type="center" :maskClick="false">
			<view class="yxCard-view">
				<view class="vscroll">
					<view class="yxtitle">个人信息保护指引</view>
					<scroll-view class="yxscroll" :scroll-y="true" style="font-size: 26upx;line-height: 40upx;">
						<view class="">请充分阅读并理解</view>
						<view class="flex">
							<navigator class="text-red" hover-class="none" url="/pages/serve/about/serviceAgreement">《用户服务协议》</navigator>
							和
							<navigator class="text-red" hover-class="none" url="/pages/serve/about/privacy">《隐私政策》</navigator>
						</view>
						<view>1.在仅浏览时，我们可能会申请系统设备权限收集设备信息、日志信息，用于信息推送和安全风控，并申请存储权限，用于下载及缓存相关文件。</view>
						<view>2.我们可能会申请位置权限，用于确定“健康门店”中所展示的城市及相关信息，不会收集精确位置信息。</view>
						<view>3.上述权限以及摄像头、麦克风、相册、存储空间、GPS等敏感权限均不会默认或.强制开启收集信息。</view>
					</scroll-view>
					<view style="height: 30upx;"></view>
				</view>
				<view class="yxbtn" @tap="cancel">好的</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { uniPopup } from '@dcloudio/uni-ui';
export default {
	components: {
		uniPopup
	},
	data() {
		return {};
	},
	methods: {
		togglePopup(type, open) {
			let that = this;
			that.$nextTick(() => {
				that.$refs.showxieyi.open();
			});
		},
		cancel(type, success) {
			let that = this;
			that.$refs.showxieyi.close();
			uni.setStorageSync('protocol', true);
		}
	},
	created() {
		if (!uni.getStorageSync('protocol')) {
			this.togglePopup();
		}
	}
};
</script>

<style scoped>
.yxCard-view {
	width: 600upx;
	/* height: 600upx; */
	background-color: #fff;
}
.yxtitle {
	font-size: 28upx;
	text-align: center;
	line-height: 60upx;
	font-weight: 700;
	margin-bottom: 20upx;
}
.vscroll {
	padding: 20upx 30upx;
}
.yxscroll {
	/* border: solid #000000 1upx; */
	height: 350upx;
}
.yxbtn {
	height: 100upx;
	line-height: 100upx;
	font-size: 30upx;
	font-weight: 600;
	text-align: center;
	border-top: solid #eee 1upx;
}
</style>
