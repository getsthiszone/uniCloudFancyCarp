<template>
	<view>
		<view class="model-view" v-if="showModel">
			<view class="card-view">
				<view class="ctitview">发现新版本</view>
				<view class="conv">
					<scroll-view  class="bg-white" style="height: 300upx; padding: 30upx;line-height: 50upx;">
						<text>{{ info.content }}</text>
					</scroll-view>
				</view> 
				
				<view class="flex">
					<button class="cu-btn btn" v-if="info.enforce==0" @tap="quxiao">取消</button>
					<button class="cu-btn btn text-red" @tap="gengxin">立即更新</button>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
let that;
import config from '@/config.js';
export default {
	name: 'update',
	data() {
		return {
			info: '',
			showModel: false
		};
	},
	methods: {
		getup() {
			that.$request.request({
				url: that.api.default.version,
				success(res) {
					let detail = res.detail;
					console.log("版本更新",detail)
					that.info = detail;  
					uni.getSystemInfo({
						success(res) { 
							console.log("忽略版本",uni.getStorageSync('version')) 
							if(res.platform == 'ios'){
								if (detail.ios_newversion != config.version&&uni.getStorageSync('version')!=detail.ios_newversion) {
									that.showModel = true;
								} else {
									that.showModel = false;
								}
							}else{
								if (detail.newversion != config.version&&uni.getStorageSync('version')!=detail.newversion) {
									that.showModel = true;
								} else {
									that.showModel = false;
								}
							} 
						}
					}); 
				},
				fail(res) {}
			});
		},
		gengxin() {
			uni.getSystemInfo({
				success(res) {
					console.log(res);
					if(res.platform == 'ios'){ 
						plus.runtime.openURL(that.info.ios_url);
					}else{
						plus.runtime.openURL(that.info.downloadurl);
					}
				}
			});
		},
		quxiao(){
			that.showModel = false;
			uni.getSystemInfo({
				success(res) { 
					let version=''
					if(res.platform == 'ios'){ 
						version=that.info.ios_newversion
					}else{ 
						version=that.info.newversion
					} 
					uni.setStorageSync('version',version);
				}
			});
		}
	},
	created(){
		that = this;
		that.getup();
	}
};
</script>

<style>
.model-view {
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.card-view {
	width: 650upx;
	min-height: 300upx;
	background-color: #fff;
	border-radius: 15upx;
	overflow: hidden;
}
.ctitview {
	height: 120upx;
	line-height: 120upx;
	text-align: center;
	background-image: linear-gradient(-60deg, #fe8659 0%, #f52a1b 100%);
	font-size: 34upx;
	color: #fff;
}
.conv {
	background-color: #eee;
}
.content scroll-view {
	width: 100%;
	padding: 20upx 40upx;
	text-align: justify;
}
.btn {
	width: 100%;
	height: 100upx;
	background-color: #fff;
}
</style>
