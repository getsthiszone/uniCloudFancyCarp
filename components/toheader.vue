<template>
	<view>
		<view v-if="show" class="tutapview" @tap="tutop"><text class="cuIcon-top"></text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show:false
		};
	},
	methods:{
		tutop(){
			uni.pageScrollTo({
				 scrollTop: 0
			}) 
		},
		showview(){
			this.show=true
		},
		hidden(){
			this.show=false
		}
	}
}
</script>

<style scoped>
.tutapview {
	width: 80upx;
	height: 80upx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40upx;
	position: fixed;
	right: 30upx;
	bottom: 200upx;
	border-radius:1000upx;
	background-color: #FFF;
	box-shadow: 0 10upx 12upx rgba(0,0,0,0.2); 
}
</style>
