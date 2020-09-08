<template>
	<view >
		<video id="myVideo" class="swvideo" :src="url"   @pause="comPause" @play="comPlay"></video>
	</view>
</template>

<script>
var videoContext ;
export default {
	data() {
		return {};
	},  
	props:{
		url:{
			type:String, 
		},
		player:{
			type:Boolean,
			 default:false
		},
	},
	methods:{
		comPlay(){
			
		}
	},
	created() {
		 videoContext = uni.createVideoContext('myVideo')
	},
	watch:{
		player(newdata,olddata){
			// console.log("新数据",newdata);
			// console.log("旧数据",newdata);
			if(newdata){
				videoContext.play()
			}else{
				videoContext.pause()()
			}
		}
	}
};
</script> 
<style>
.swvideo {
	width: 100%;
	height: 100%;
}
</style>
