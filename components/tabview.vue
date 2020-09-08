<template>
	<view>
		<view class="tab-view  " :style="{paddingBottom:iosx?'65rpx':''}">
			<view class="v-flie" :style="{paddingBottom:iosx?'65rpx':''}">
				<view class="cu-bar tabbar  bg-white solids-top">
					<block v-for="(item,index) in tablist " :key="index" > 
						<view class="action" :class="tabCur==index?'text-blue':'text-gray'"  @tap="switchTab" :data-url="item.url"  >
							<view :class="item.icon" style="font-size: 40upx;" ></view>
							{{item.name}}
						</view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
var that;
export default {
	name: 'goodslist',
	props: {
		text: {
			type: String,
			default: '没有更多了'
		},
		tablist: {
			type: Array
		},
		color: {
			type: String,
			default: '#b3b3b3'
		},
		selectedColor: {
			type: String,
			default: '#b000dd'
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		tabCur:{
			type: String,
			default: '0'
		}
	},
	data() {
		return {
			iosx:false
		};
	},
	computed: {},
	methods: {
		switchTab(e){
			let url = e.currentTarget.dataset.url;
			uni.redirectTo({
				url:url
			});
		}
	},
	created() {
		this.iosx=uni.getStorageSync("iosx"); 
	}
};
</script>

<style>
.cu-bar.tabbar {
	padding: 0;
	height: calc(100rpx + env(safe-area-inset-bottom) / 2);
	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}
.bg-black {
	background-color: var(--black);
	color: var(--white);
}
.cu-bar {
	display: flex;
	position: relative;
	align-items: center;
	min-height: 100rpx;
	justify-content: space-between;
}
.cu-bar.tabbar .action {
	font-size: 22rpx;
	position: relative;
	flex: 1;
	text-align: center;
	padding: 0;
	display: block;
	height: auto;
	line-height: 1;
	margin: 0;
	overflow: initial;
}
/* .cu-bar.action: first-child {
	margin-left: 30rpx;
	font-size: 30rpx;
} */
.cu-bar .action {
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: center;
	max-width: 100%;
}

.cu-bar.tabbar .action.add-action {
	position: relative;
	z-index: 2;
	padding-top: 50rpx;
	background-color: inherit;
}
.tab-view {
	height: 120upx;
	width: 100%;
}
.tab-view .v-flie {
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #FFF;
}
</style>
