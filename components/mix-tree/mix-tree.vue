<template>
	<view class="content">
		<view class="mix-tree-list">
			<block v-for="(item, index) in list" :key="index">
				<view class="selecthandle" @tap="handleSelect(index)">
					<view class="flex">
						<view class="left">
							<image v-show="item.isHandle" class="currentIcon" src="/static/mix-tree/currentIcon.png" mode=""></image>
							<image v-show="!item.isHandle" class="currentIcon" src="/static/mix-tree/defaultIcon.png" mode=""></image>
						</view>
						<view class="title">{{ item.name }}</view>
					</view>
					<view class="text2">共{{ item.person.length }}人</view>
				</view>
				
				<block v-if="item.isHandle">
					<block v-for="(items, index) in item.person" :key="item.nickname">
						<view class="userinfo" >
							<view class="flex flex-sub" @tap="handledetail(items)">
								<view class="userImg cu-avatar bg-blue"  :style="{ backgroundImage: 'url(' + items.avatar + ')' }">
									<text v-if="!items.avatar" class="text-sm">{{ items.nickname | getone }}</text>
								</view>
								<view class="center">
									<view class="name">{{ items.nickname }}</view>
									<view class="desc">职位：{{ items.auth_name.name }}</view>
								</view>
							</view>
							<view class="tell" @tap="handleTell(items.mobile)">
								<text class="Guoicon-dianhua"></text>
								拨打
							</view>
						</view>
					</block>
					<view class="kong"></view>
				</block>
				
			</block>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		params: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	filters: {
		getone(value) {
			let text = value[0];
			return text;
		}
	},
	data() {
		return {
			treeimg: {
				defaultIcon: '/static/mix-tree/defaultIcon.png',
				currentIcon: '/static/mix-tree/currentIcon.png'
			}
		};
	},
	methods: {
		handleTell(mobile) {
			uni.makePhoneCall({
				phoneNumber: mobile
			});
		},
		handledetail(items) {
			uni.navigateTo({
				url: '/pages/staff/addressList/detail?data=' + JSON.stringify(items)
			});
		},
		// 点击
		handleSelect(index) {
			this.list[index].isHandle = !this.list[index].isHandle;
		}
		// 点击
	}
};
</script>

<style scoped>
.flex {
	display: flex;
	align-items: center;
}
.currentIcon {
	width: 25upx;
	height: 25upx;
} 
.userinfo {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20upx 40upx;
	height: 160upx;
	border-bottom: solid #f3f3f3 1upx; 
}
.userImg {
	width: 100upx;
	height: 100upx;
	border-radius: 1000upx;
	background-color: #3c82fe;
}
.userImg image {
	width: 100%;
	height: 100%;
	border-radius: 1000upx;
}
.center {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90upx;
	margin-left: 30upx;
}
.name {
	font-size: 28upx;
	color: #303030;
}
.desc {
	font-size: 24upx;
	color: #b6b5b5;
}
.tell {
	width: 131upx;
	height: 52upx;
	background-color: #ebf1ff;
	border-radius: 6upx;
	text-align: center;
	line-height: 52upx;
	color: #3c82fe;
}
.mix-tree-item.showchild {
	transform: rotate(90deg);
}

.mix-tree-item.last:before {
	opacity: 0;
}
.selecthandle {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20upx 40upx;
}
.selecthandle .left {
	display: flex;
	align-items: center;
}
.title {
	font-size: 28upx;
	line-height: 46upx;
	letter-spacing: 0upx;
	color: #3c82fe;
	margin-left: 20upx;
}
.text2 {
	font-size: 24upx;
	line-height: 46upx;
	letter-spacing: 0upx;
	color: #b6b5b5;
}
.left {
	width: 25upx;
}
</style>
