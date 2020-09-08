<template>
	<view>
		<view class="search-view ">
			<view class="search-form round click " @tap="tpinfo">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="输入要搜索的宝贝名称" disabled="true" confirm-type="search" />
			</view>
			<view class="action text-white text-center" style="font-size: 40upx;" data-url="/pages/cart/cart">
				<text class="cuIcon-list"></text>
				<view class="text-white" style="font-size: 18upx;">分类</view>
			</view>
		</view>
		
		<view class=" flex text-white class-view  ">
			<view class="" style="width: 500upx;">
				<scroll-view scroll-x class=" nav" scroll-with-animation :scroll-left="scrollLeft">
					<view class="cu-item" :class="index == TabCur ? 'text-green cur' : ''" v-for="(item, index) in 90" :key="index" @tap="tabSelect" :data-id="index">
						Tab{{ index }}
					</view>
				</scroll-view>
			</view>
			<view class="openclbtn" @tap="showModel" data-name="DrawerModalR">更多>></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
