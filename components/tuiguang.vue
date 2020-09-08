<template>
	<view>
		<view class="tgGview show" :class="show?'show':''"  >
			<swiper class="">
				<swiper-item>
					
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
var that;
export default {
	props: {
		show: {
			type:Boolean,
			default: false 
		}, 
	},
	data() {
		return {
			
		};
	},
	methods: {
		
	},
	created() {
		that = this;
		that.share_cover
	}
};
</script>

<style>
.tgGview {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	bottom: -100%;
	z-index: 999;
	animation: all 1s;
}
.tgGview.show {
}
</style>
