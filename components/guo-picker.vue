<template>
	<view>
		<uniPopup ref="showbf" :type="type">
			<view class=" " style="width: 750upx;background-color: #FFF;height: 400upx; " >
				<view class="flex align-center justify-between " style="height: 100upx; padding: 0upx 30upx; font-size: 28upx; ">
					<view @tap="clickhid">取消</view>
					<view class="text-green" @tap="clickok">确认</view>
				</view>
				<picker-view :value="pindex" @change="change" style="height: 300upx;">
					<picker-view-column>
						<view class="item  flex align-center justify-center" v-for="(item, index) in list" :key="index">{{ item.name }}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
import { uniPopup } from '@dcloudio/uni-ui'; 
var that;
export default {
	components: { 
		uniPopup
	},
	data() {
		return {
			type:'bottom',
			resolve: '',
			reject: '',
			list:[],
			printdata:{},
			pindex:[0]
		};
	},
	methods:{  
		clickok(){
			that.printdata=that.list[that.pindex[0]]; 
			this.resolve(that.printdata);
			this.cancel();
		},   
		clickhid(){
			this.reject('cancel');
			this.cancel();
		},
		change(e) {
			console.log("轮播",e)
			this.pindex = e.detail.value;
		},
		togglePopup(type) { 
			this.$nextTick(() => {
				this.$refs.showbf.open();
			});
		},
		cancel(type) {
			this.$refs.showbf.close();
		},
		show(option) {
			this.reject='';
			this.resolve=''; 
			this.list=option.list,
			this.togglePopup();
			this.promise = new Promise((resolve, reject) => {
				this.resolve = resolve;
				this.reject = reject;
			}); 
			return this.promise;
		}
	},
	created() {
		that=this;
	}
};
</script>

<style scoped>
	
</style>
