<template>
	<view class="lottery_container">
		<view class="grid_wrap">
			<view class="lottery_wrap">
				<ul class="lottery_grid">
					<li v-for="(item, index) in grid_info_arr" :class="{ active: current_index == index && index != 8 }" :key="index" :data-index="index">
						<image v-if="index != 8" class="grid_img" mode='aspectFit' :src="item.logo" alt="">
							{{ item.text }}
					</li>
					<li @click="luck_draw" style="font-size: 30upx;" > 
						<view>点击</view>
						<view>抽奖</view> 
					</li>
				</ul>
			</view>
			<view class="lottery_wrap_border">
				<ul v-for="(item, index) in 4" :key="index">
					<li v-for="(item, index) in 12" :key="index"></li>
				</ul>
			</view>
		</view> 
	</view>

</template>

<script>
	import LotteryDraw from './SJ-LotteryDraw.js';
	let grid_info = [{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "手机"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "零食包"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "口红"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "谢谢参与"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "压缩饼干"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "水杯"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "QQ糖"
		},
		{
			logo: "../../static/SJ-LotteryDraw/SJ-LotteryDraw.png",
			text: "耳机"
		} 
	];
	export default {
		data() {
			return {
				current_index: -1,
				choujiang:false 
			};
		},
		props: {
			grid_info_arr: {
				type: Array,
				default: function() {
					return grid_info
				}
			},
			lottery_draw_param: {
				type: Object,
				default: function() {
					return {
						startIndex: 0, //开始抽奖位置，从0开始
						totalCount: 4, //一共要转的圈数
						winingIndex: 2, //中奖的位置，从0开始
						speed: 50 //抽奖动画的速度 [数字越大越慢,默认100]
					}
				}
			}, 
		}, 
		methods: {
			luck_draw(event) { 
				let that = this; 
					// 点击抽奖之后知道获奖位置，修改父组件中lottery_draw_param的值
				  if(that.choujiang){
					  return
				  }
				  that.choujiang=true 
					this.$emit('get_winingIndex', function(res){ 
						let win = new LotteryDraw({
								domData: that.grid_info_arr,
								...that.lottery_draw_param
							},
							function(index, count) {
								that.current_index = index; 
								if (that.lottery_draw_param.winingIndex == index && that.lottery_draw_param.totalCount == count) {
									that.$emit('luck_draw_finish', that.grid_info_arr[index])
									console.log('抽到了')
									 that.choujiang=false
								}
							}
						);
					}); 
			}
		}
	};
</script>

<style scoped lang="css">
	@import './SJ-LotteryDraw.css';
</style>
