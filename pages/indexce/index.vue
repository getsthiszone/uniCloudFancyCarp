<template>
	<view class="content">
		<button type="default" @click="query">普通查询</button>
		<button type="default" @click="lodaPage">分页查询</button>
	</view>
</template>

<script>
	import db from '@/js_sdk/uni-clientDB/index.js'
	const dbCmd = db.command
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			query() {
				uniCloud.callFunction({
					name: 'uni-clientDB',
					data: {
						command: db.collection('list').where({
							name: new RegExp('龚', 'g'),
							time: dbCmd.gt(1105885393581)
						}).field({
							extra: false
						}).get()
					},
					success(res) {
						console.log(res);
						uni.showModal({
							content: JSON.stringify(res.result),
							showCancel: false
						})
					},
					fail(err) {
						console.error(err)
						uni.showModal({
							content: err.message || '云函数请求失败',
							showCancel: false
						})
					}
				})
			},
			lodaPage() {
				uniCloud.callFunction({
					name: 'uni-clientDB',
					data: {
						// 需要注意的是阿里云目前count方法有Bug，不传条件的情况下回报错
						command: db.collection('list').where({
							_id: dbCmd.exists(true)
						}).field({
							extra: false
						}),
						pagination: {
							pageSize: 10,
							current: 1,
						}
					},
					success(res) {
						console.log(res);
						uni.showModal({
							content: JSON.stringify(res.result),
							showCancel: false
						})
					},
					fail(err) {
						console.error(err)
						uni.showModal({
							content: err.message || '云函数请求失败',
							showCancel: false
						})
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		padding: 15px;
	}

	.content button {
		margin-bottom: 15px;
	}
</style>
