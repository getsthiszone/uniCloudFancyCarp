<template>
	<view class="padding-top">
		<form>
			<view class="cu-form-group ">
				<view class="title">头像</view>
				<view class="cu-avatar radius bg-gray"></view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">输入框</view>
				<input placeholder="三字标题" name="input" />
			</view>

			<view class="text-center"><button class="cu-btn bg-blue ">保存</button></view>
		</form>
	</view>
</template>

<script>
var that;
export default {
	data() {
		return { 
			info:{}
		};
	},
	methods: {},
	onLoad(option) {
		that=this; 
		option.data?(that.info=JSON.parse(option.data)):(that.info={})
	}
};
</script>

<style>
.cu-form-group .title {
	min-width: calc(4em + 15px);
}
</style>
le>
