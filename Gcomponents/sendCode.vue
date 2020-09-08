<template>
	<view>
		<text @tap="sendCode">
			<block v-if="timepay">{{time}}</block>
			<block v-else>获取验证码</block>
		</text>
	</view>
</template>

<script>
	var clock ;
export default {
	props: {
		phone: {
			type: String,
			default: '',
		},
		event:{
			type: String,
			default: ''
		},
		type:{
			type: String,
			default: '1'	
		}
	},
	data() {
		return {
			timepay: false,
			time: 60
		};
	},
	methods: {
		sendCode() {
			let that = this; 
			if (that.timepay) {
				uni.showToast({
					title: '请稍后再获取',
					icon: 'none',
					duration:1200
				});
				return;
			}
			if (!that.phone) {
				uni.showToast({
					title: '请填写手机号码',
					icon: 'none',
					duration:1200
				});
				return;
			}
			if (!/^1[3456789]\d{9}$/.test(that.phone)) {
				uni.showToast({
					title: '请填写正确的手机号码',
					icon: 'none',
					duration:1200
				});
				return;
			}
			uni.showLoading({
				title:"正在发送...",
				mask:true
			})
			
			if(that.type==1){
				that.$request
					.request({
						url: that.api.user.user_hand_binding,
						data: {
							mobile: that.phone 
						},
						success(res){
							that.$alertok('发送成功');
							that.timepay = true;
							that.time = 60;
							that.setime(); 
							that.$emit('tuCode',res);
						},
					}) 
			}else{
				that.$staffApi.index.sms_send({
					data:{
						mobile: that.phone ,
						event:that.event
					},
					success(res){
						that.$alertok('发送成功');
						that.timepay = true;
						that.time = 60;
						that.setime();
						// console.log("验证码：",res);
						that.$emit('tuCode',res);
					},
				});
			}
			
		},
		// 倒计时
		setime() {
			let that=this;
			clock = setInterval(function(){
				if (that.time >= 1) {
					that.time = that.time - 1;
				} else {
					clearInterval(clock);
					that.timepay = false;
				}
			}, 1000);
		}
	}, 
};
</script>

<style></style>
