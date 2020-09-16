<template>
	<view>
		<view class="cu-list menu sm-border" >
			<view class="cu-item arrow" v-for="(item,index) in list" :key="index" @tap="tpinfo" :data-index="index" >
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<!-- <image src="/static/logo.png" class="png" mode="aspectFit"></image> -->
					<text class="text-grey">{{item.name}}</text>
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
var that;
export default {
	data() {
		return {
			list: []
		};
	},
	methods: {
		getlist() {
			that.cloudapi.categories.selectAll().then(res => {
				console.log(res);
				that.list=res
			});
		},
		tpinfo(e){
			let data=that.list[e.currentTarget.dataset.index]
			uni.navigateTo({
				url:`../info/info?data=${JSON.stringify(data)}`
			})
		}
	},
	onLoad() {
		that = this; 
	},
	onShow() {
		that.getlist();
	}
};
</script>

<style></style>
