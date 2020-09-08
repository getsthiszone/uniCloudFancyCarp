<template>
	<view>
		<view class="prickbg" :class="show ? 'show' : ''" @tap="hidden">
			<view class="pickerview" @tap.stop="">
				<view class="topbtn">
					<view @tap="hidden">取消</view>
					<view style="color: #1AA034;" @tap.stop="clickok">确定</view>
				</view>
				<picker-view class="picker-view" :value="value" @change="bindChange">
					<picker-view-column v-if="typey">
						<view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
					</picker-view-column>
					<picker-view-column v-if="typem">
						<view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
					</picker-view-column>
					<picker-view-column v-if="typed">
						<view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
var that;
export default {
	props: {
		typey: {
			type: Boolean,
			default: true
		},
		typem: {
			type: Boolean,
			default: true
		},
		typed: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			years: [],
			months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			days: [],
			value: [0, 0, 0],
			show: false,
			success: {},
			reject: '',
			resolve: ''
		};
	},
	methods: {
		showModel(option) {
			that.show = true;
			this.reject = '';
			this.resolve = '';
			this.promise = new Promise((resolve, reject) => {
				console.log('按设计大师的');
				this.resolve = resolve;
				this.reject = reject;
			});
			return this.promise;
		},
		hidden() {
			that.show = false;
			that.reject('cancel');
		},
		clickok() {
			let year = that.years[that.value[0]];
			let month = that.months[that.value[1]] < 10 ? '0' + that.months[that.value[1]] : that.months[that.value[1]];
			let day = that.days[that.value[2]] < 10 ? '0' + that.days[that.value[2]] : that.days[that.value[2]];
			let date = {
				year: year,
				month: month,
				day: day,
				rq: year + '-' + month + '-' + day
			};
			that.show = false;
			that.resolve(date);
		},
		bindChange(e) {
			let value = e.detail.value;
			let index = that.getconnt(value);
			that.value = value;
			if (index == 1) {
				let datanum = that.getday(that.years[value[0]], that.months[value[1]]);
				that.days = datanum.list;
			}
		},
		getconnt(value) {
			for (let i in value) {
				if (value[i] != that.value[i]) {
					return i;
				}
			}
		},
		getData() {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			let datanum = that.getday(year, month);
			that.days = datanum.list;
			that.value = [1, month - 1, day - 1];
			return `${year}-${month}-${day}`;
		},
		getyear() {
			const date = new Date();
			let year = date.getFullYear() - 1;
			let list = [];
			for (let i = 0; i < 10; i++) {
				let y = list[list.length - 1] ? list[list.length - 1] + 1 : year;
				list.push(y);
			}
			that.years = list;
		},
		getday(y, m) {
			var d = new Date(y, m, 0);
			let num = d.getDate();
			let list = [];
			let data = {};
			for (let i = 1; i <= num; i++) {
				list.push(i);
			}
			data = {
				num,
				list
			};
			return data;
		}
	},
	created() {
		that = this;
		this.getyear();
		this.getData();
	}
};
</script>

<style scoped>
.prickbg {
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	bottom: -100%;
	animation: all 1s;
}
.show {
	bottom: 0;
}

.pickerview {
	position: absolute;
	bottom: 0upx;
	width: 100%;
	background-color: #fff;
}
.topbtn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70upx;
	padding: 0upx 30upx;
	font-size: 30upx;
}
.picker-view {
	height: 350upx;
}
.item {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
