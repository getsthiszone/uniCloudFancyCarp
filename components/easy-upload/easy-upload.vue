<template>
	<view style="background-color: #fff;">
		<view class="upload">
			<textarea style="font-size: 30upx;" @input="inputChange" v-model="content" placeholder="请输入..." />
			<!-- <view class="">
				<view>
					<block v-for="(upload, index) in uploads" :key="index">
						<view class="uplode-file">
							<image v-if="types == 'image'" class="uploade-img" :src="upload" :data-src="upload" @tap="previewImage"></image>
							<view v-if="types == 'image'" class="clear-one-icon cuIcon-close"  @tap="delImage(index)"></view>
							<video v-if="types == 'video'" class="uploade-img" :src="upload" controls>
								<cover-view v-if="types == 'video'" class="clear-one-icon cuIcon-close"  @tap="delImage(index)"></cover-view>
							</video>
						</view>
					</block>
				</view>
				<view class="uploader-input-box" v-if="uploads.length < uploadCount && isShowUpImg">
					<view class="uploader-input" @tap="chooseUploads"></view>
				</view>
			</view> -->
			<view style="height: 20upx;"></view>
			<view class="cu-form-group" style="padding: 0upx;">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img" v-for="(item, index) in uploads" :key="index" @tap="previewImage" :data-url="uploads" >
						<image :src="item" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="delImage" :data-index="index"><text class="cuIcon-close"></text></view>
					</view>
					<view class="solids" @tap="chooseUploads" v-if="uploads.length < uploadCount && isShowUpImg"><text class="cuIcon-add"></text></view>
				</view>
			</view>
		</view>
		<button class="diybtn" type="primary" v-if="types == 'image' && !isDivPage" @tap="upload">确定</button>
	</view>
</template>

<script>
export default {
	props: {
		types: {
			type: String,
			default: 'image'
		},
		content: {
			type: String,
			default: ''
		},

		dataList: {
			type: Array,
			default: function() {
				return [];
			}
		},
		clearIcon: {
			type: String
		},
		uploadUrl: {
			type: String,
			default: ''
		},
		deleteUrl: {
			type: String,
			default: ''
		},
		uploadCount: {
			type: Number,
			default: 1
		},
		//上传图片大小 默认3M
		upload_max: {
			type: Number,
			default: 3
		},
		//是否自定义界面

		isDivPage: {
			type: Boolean,
			default: false
		},
		isShowUpImg: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			//上传的图片地址
			uploadImages: [],
			//展示的图片地址
			uploads: [],
			// 超出限制数组
			exceeded_list: [],
			value: ''
		};
	},
	watch: {
		dataList: {
			handler() {
				this.uploads = this.dataList;
			},
			immediate: true
		}
	},
	onShow() {
		this.uploads = this.dataList;
	},
	methods: {
		inputChange(event) {
			var { value, cursor } = event.detail;
			this.$emit('inputChange', { value, cursor });
		},
		previewImage(e) {
			var current = e.target.dataset.url;
			uni.previewImage({
				current: current,
				urls: this.dataList
			});
		},
		chooseUploads() {
			switch (this.types) {
				case 'image':
					uni.chooseImage({
						count: this.uploadCount - this.uploads.length, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: res => {
							for (let i = 0; i < res.tempFiles.length; i++) {
								if (Math.ceil(res.tempFiles[i].size / 1024) < this.upload_max * 1024) {
									this.uploads.push(res.tempFiles[i].path);
									this.uploadImages.push(res.tempFiles[i].path);
								} else {
									this.exceeded_list.push(i === 0 ? 1 : i + 1);
									uni.showModal({
										title: '提示',
										content: `第${[...new Set(this.exceeded_list)].join(',')}张图片超出限制${this.upload_max}MB,已过滤`
									});
								}
							}
							this.$emit('chooseUploads', { uploads: this.uploads, uploadImages: this.uploadImages });
						},
						fail: err => {
							uni.showModal({
								content: JSON.stringify(err)
							});
						}
					});
					break;
				case 'video':
					uni.chooseVideo({
						sourceType: ['camera', 'album'],
						success: res => {
							console.log(res);
							if (Math.ceil(res.size / 1024) < this.upload_max * 1024) {
								this.uploads.push(res.tempFilePath);
								uni.uploadFile({
									url: this.uploadUrl, //仅为示例，非真实的接口地址
									filePath: res.tempFilePath,
									name: 'file',
									//请求参数
									formData: {
										user: 'test'
									},
									success: uploadFileRes => {
										this.$emit('successVideo', uploadFileRes);
									}
								});
							} else {
								uni.showModal({
									title: '提示',
									content: `第${[...new Set(this.exceeded_list)].join(',')}张视频超出限制${this.upload_max}MB,已过滤`
								});
							}
						},
						fail: err => {
							uni.showModal({
								content: JSON.stringify(err)
							});
						}
					});
					break;
			}
		},
		delImage(e) { 
			let index = e.currentTarget.dataset.index; 
			this.uploads.splice(index, 1);
			this.$emit('delImage', { index: index }); 
		},
		upload() {
			this.$emit('upload', uploadFileRes);
		}
	}
};
</script>

<style scoped>
.diybtn {
	width: 604rpx;
	height: 76rpx;
	background-color: #4985ff;
	border-radius: 38rpx;
	margin: 0 auto;
	margin-top: 162rpx;
}
.upload {
	width: 100%;
	background-color: #ffffff;
}
.upload textarea {
	width: 100%;
}
.uplode-file {
	margin: 10upx;
	width: 210upx;
	height: 210upx;
	position: relative;
}
.uploade-img {
	display: block;
	width: 210upx;
	height: 210upx;
}
.clear-one {
	position: absolute;
	top: -10rpx;
	right: 0;
}
.clear-one-icon {
	position: absolute;
	width: 20px;
	height: 20px;
	top: 0;
	right: 0;
	z-index: 9;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.uploader-input-box {
	position: relative;
	margin: 10upx;
	width: 208upx;
	height: 208upx;
	/* border: 2upx solid #D9D9D9; */
	background-color: #f6f6f6;
}
.uploader-input-box:before,
.uploader-input-box:after {
	content: ' ';
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	background-color: #d9d9d9;
}
.uploader-input-box:before {
	width: 4upx;
	height: 79upx;
}
.uploader-input-box:after {
	width: 79upx;
	height: 4upx;
}
.uploader-input-box:active {
	border-color: #999999;
}
.uploader-input-box:active:before,
.uploader-input-box:active:after {
	background-color: #999999;
}
.uploader-input {
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
}
</style>
