<template>
	<view class="padding-top">
		<form>
			<view class="cu-form-group ">
				<view class="title">头像</view>
				<view class="cu-avatar radius bg-gray" @tap="upimg">
					<Gimage :src="info.icon" gstyle="width:64rpx;height:64rpx"></Gimage>
				</view>
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
				<button class="cu-btn bg-blue lg shadow" @tap="update" style="width: 500rpx;">保存</button>
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
					"icon": '',
					"name": "",
					"description": "",
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
			},
			upimg() {
				that.cloudapi.upfile.upimage().then(res => {
					console.log("上传完成：", res)
					that.info.icon=res[0]
				})
			}
		},
		onLoad(option) {
			that = this;
			option.data ? (that.info = JSON.parse(option.data)) : ""
		}
	};
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
