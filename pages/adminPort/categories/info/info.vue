<template>
	<view class="padding-top">
		<form>
			<view class="cu-form-group ">
				<view class="title">头像</view>
				<view class="cu-avatar radius bg-gray"></view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">分类名称</view>
				<input placeholder="请填写分类名称" :value="info.name" data-name="name" @input="getinput" />
			</view>
			<view class="cu-form-group">
				<view class="title">分类描述</view>
				<input placeholder="分类描述" :value="info.description" data-name="description" @input="getinput" />
			</view>

			<view class="text-center margin-top">
				<button class="cu-btn bg-blue lg shadow" style="width: 500rpx;">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				info: {
					_id: '',
					"icon": '测试图片',
					"name": "第一个分类",
					"description": "测试的分类",
				}
			};
		},
		methods: {
			getinput(e) {
				let name = e.currentTarget.dataset.name;
				that[name] = e.detail.value;
			},
			update() {
				that.cloudapi.categories.addcategories(that.info).then(res => {

				})
			}
		},
		onLoad(option) {
			that = this;
			option.data ? (that.info = JSON.parse(option.data)) : (that.info = {})
		}
	};
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
le>
