<template>
	<view>
		<view class="timeqh">
			<view class="cuIcon-back lricon " @tap="last"></view>
			<view class="timetext text-cut">
				<block v-if="type == 1">{{ showDate.year }}年{{ showDate.month }}月</block>
				<block v-if="type == 2">{{ showDate.year }}年{{ showDate.quarter.title }}</block>
				<block v-if="type == 3">{{ showDate.year }}年</block>
			</view>
			<view class="cuIcon-right lricon" @tap="next"></view>
		</view>
	</view>
</template>

<script>
var that;
export default {
	data() {
		return {
			data: '',
			year: '',
			month: '',
			quarterList: [{ id: 1, title: '第一季度' }, { id: 2, title: '第二季度' }, { id: 3, title: '第三季度' }, { id: 4, title: '第四季度' }],
			yearList: [],
			monthList: [],
			showDate: { year: '', month: '', day: '', quarter: '' },
			thisDate: { year: '', month: '', day: '', quarter: '' },
			yearIndex: 0,
			monthIndex: 0,
			quarterIndex: 0
		};
	},
	props: {
		type: {
			type: Number,
			default: 1
		}
	},
	methods: {
		next() {
			if (that.type == 1) {
				that.gaimonth(1);
			} else if (that.type == 2) {
				that.gaiquarter(1);
			} else if (that.type == 3) {
				that.gaiyear(1);
			}
		},
		last() {
			if (that.type == 1) {
				that.gaimonth(0);
			} else if (that.type == 2) {
				that.gaiquarter(0);
			} else if (that.type == 3) {
				that.gaiyear(0);
			}
		},
		gaiyear(e) {
			let alter = true;
			if (e == 0) {
				that.yearIndex > 0 ? (that.yearIndex = that.yearIndex - 1) : (alter = false);
			} else {
				that.thisDate.year == that.showDate.year ? (alter = false) : (that.yearIndex = that.yearIndex + 1);
			}
			if (alter) {
				that.showDate.year = that.yearList[that.yearIndex];
			}
			that.$forceUpdate();
			if (that.type == 3) {
				that.$emit('alertmo', that.showDate);
			}
			return alter;
		},
		gaimonth(e) {
			let alter = true;
			if (e == 0) {
				if (that.monthIndex > 0) {
					that.monthIndex = that.monthIndex - 1;
				} else {
					if (that.gaiyear(0)) {
						that.monthIndex = 11;
					}
				}
			} else {
				if (that.thisDate.year == that.showDate.year && that.thisDate.month == that.showDate.month) {
				} else {
					if (that.monthIndex < that.monthList.length - 1) {
						that.monthIndex = that.monthIndex + 1;
					} else if (that.gaiyear(1)) {
						that.monthIndex = 0;
					}
				}
			}
			that.showDate.month = that.monthList[that.monthIndex];
			that.$forceUpdate();
			that.$emit('alertmo', that.showDate);
		},
		gaiquarter(e) {
			if (e == 0) {
				if (that.quarterIndex > 0) {
					that.quarterIndex = that.quarterIndex - 1;
				} else {
					if (that.gaiyear(0)) {
						that.quarterIndex = 3;
					}
				} 
			} else {
				if (that.thisDate.year == that.showDate.year && that.thisDate.quarter.id == that.showDate.quarter.id) {
				} else {
					if (that.quarterIndex < that.quarterList.length - 1) {
						that.quarterIndex = that.quarterIndex + 1;
					} else if (that.gaiyear(1)) {
						that.quarterIndex = 0;
					}
				} 
			}
			that.showDate.quarter = that.quarterList[that.quarterIndex];
			that.$forceUpdate();
			that.$emit('alertmo', that.showDate);
		},
		getData() {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			let quarter = {};
			switch (month) {
				case 1:
				case 2:
				case 3:
					quarter = that.quarterList[0];
					that.quarterIndex = 0;
					break;
				case 4:
				case 5:
				case 6:
					quarter = that.quarterList[1];
					that.quarterIndex = 1;
					break;
				case 7:
				case 8:
				case 9:
					quarter = that.quarterList[2];
					that.quarterIndex = 2;
					break;
				case 10:
				case 11:
				case 12:
					quarter = that.quarterList[3];
					that.quarterIndex = 3;
					break;
			}
			let oldyear = 2019;
			let yearList = [];
			let monthList = [];
			for (let i = 1; i <= year - oldyear; i++) {
				yearList.push(oldyear + i);
			}
			for (let i = 1; i <= 12; i++) {
				monthList.push(i);
			}
			that.yearList = yearList;
			that.yearIndex = yearList.length - 1;
			that.monthList = monthList;
			that.monthIndex = date.getMonth();
			that.quarter = quarter;
			that.thisDate = { year, month, day, quarter };
			that.showDate = { year, month, day, quarter };
			that.$forceUpdate();
			that.$emit('alertmo', that.showDate);
			return `${year}-${month}-${day}`;
		}
	},
	created() {
		that = this;
		that.getData();
	},
	watch: {
		type: function(a, b) {
			// console.log('改变', a);
		}
	}
};
</script>

<style scoped>
.timeView .timeqh {
	display: flex;
	align-items: center;
}

.timeView .timeqh .timetext {
	width: 230upx;
	font-size: 26rpx;
	color: #343434;
	text-align: center;
}
.lricon {
	width: 40upx;
	text-align: center;
}
</style>
