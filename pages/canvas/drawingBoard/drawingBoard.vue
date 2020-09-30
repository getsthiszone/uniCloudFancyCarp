<template>
	<view>
		<view style="height: 20rpx;"></view>
		<canvas class="mycanvas" style="width: 300px; height: 300px;" canvas-id="firstCanvas" id="firstCanvas" @touchstart="touchstart"
		 @touchmove="touchmove" @touchend="touchend"></canvas>
	</view>
</template>



<script>
	var that;
	var canvasText;
	export default {
		data() {
			return {
				textColor: '#000',
				textFontSize: 4,
				oldX: 0,
				oldY: 0,
			}
		},
		methods: {
			touchstart(e) {
				let x = e.changedTouches[0].x;
				let y = e.changedTouches[0].y;
				console.log(`触摸开始：坐标x:${x},坐标y:${y}`);
				that.oldX = x;
				that.oldY = y; 
				canvasText.setLineCap("round")
				canvasText.setLineWidth(that.textFontSize)
				canvasText.setStrokeStyle("#ff0000")
				canvasText.setLineCap("round")
				canvasText.moveTo(x,y);
				// canvasText.fillStyle="#000000"
				// canvasText.moveTo(x,y)
				// canvasText.stroke();
				// canvasText.draw()
				// canvasText.stroke();
				// canvasText.draw()
			},
			touchmove(e) {
				let x = e.changedTouches[0].x;
				let y = e.changedTouches[0].y;
				console.log(`滑动中：坐标x:${x},坐标y:${y},${that.oldX}`); 
				canvasText.lineTo(x, y);
				canvasText.stroke();
				canvasText.draw(true) 
				// canvasText.draw() 
				// canvasText.draw()
			},
			touchend(e) {
				let x = e.changedTouches[0].x;
				let y = e.changedTouches[0].y;
				console.log(`滑动结束：坐标x:${x},坐标y:${y}`);
				 
				
			}
		},
		onLoad() {
			that = this;

		},
		onReady() {
			canvasText = uni.createCanvasContext('firstCanvas')
			canvasText.setLineCap("round")
			canvasText.setStrokeStyle("#ff0000")
			canvasText.moveTo(150, 150);
			canvasText.lineTo(150, 200);
			
			canvasText.stroke();
			canvasText.draw() 

		}
	}
</script>

<style lang="less">
	page {
		background-color: #dcdcdc;
	}

	.mycanvas {
		background-color: #FFF;
		height: 600rpx;
		width: 750rpx;

	}
</style>
