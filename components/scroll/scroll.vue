<template>
	<view :style="styles">
		<view class="bg-img" :style="">
			<scroll-view
				class="sc-view"
				style="width: 750upx; overflow: hidden; "
				:style="styles"
				refresher-default-style="none"
				@scroll="scrollss"
				:scroll-y="true"
				:refresher-triggered="refreshs"
				:refresher-enabled="refresherEnabled"
				@refresherrefresh="downrefresh"
				@refresherrestore="restore"
				:refresher-background="refbg"
			>
				<slot />
			</scroll-view>
		</view>
	</view>
</template>

<script>
var that;
export default {
	name: 'scroll',
	props: {
		type: {
			type: String,
			default: '1'
		},
		styles: {
			type: String,
			default: ''
		},
		refbg: {
			type: String,
			default: '#f0f0f0'
		}
	},
	data() {
		return {
			refreshs: false,
			scrolly: true,
			refresherEnabled: true,
			img: {}
		};
	},
	computed: {},
	methods: {
		downrefresh() {
			let that = this;
			this.$emit('downrefresh');
			this.refreshs = true;
			setTimeout(res => {
				that.refreshs = false;
			}, 10000);
		},
		stop() {
			this.refreshs = false;
			that.scrolly = true;
		},
		restore() {
			that.scrolly = true;
		},
		scrollss(e) {
			let scrollTop = e.detail.scrollTop;

			this.$emit('gscroll', e);
			if (scrollTop < 0) {
				// that.scrolly=false
				setTimeout(function() {
					that.scrolly = true;
					that.refresherEnabled = true;
				}, 300);
			} else {
				that.scrolly = true;
			}
			if (scrollTop == 0) {
				that.refresherEnabled = true;
			} else {
				that.refresherEnabled = false;
			}
		}
	},
	created() {
		that = this;
	}
};
</script>
<style scoped>
.sc-view {
	width: 100%;
	height: 100%;
}
</style>
