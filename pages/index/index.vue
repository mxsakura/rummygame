<template>
	<view class="container">
		<u-swiper :list="banner" :height="400" :border-radius="0" @click="bannerTo"></u-swiper>
		<u-notice-bar mode="vertical" type="none" :list="notice" :autoplay="false"></u-notice-bar>
		<view class="recommended">
			<view class="title">Recommended</view>
			<view class="rec-box">
				<view class="rec-box-item" v-for="(item, index) in recommended" :key="index" @click="router(item)">
					<view class="rec-box-item-img" :class="{ 'rec-box-item-img-center': index == 1 }"><image :src="$methods.addHost(item.icon)"></image></view>
					<view class="rec-box-item-text">
						<view class="appname" :class="{ 'appname-center': index == 1 }">
							<text>{{ item.name }}</text>
						</view>
						<view class="appnum">
							<text>{{ item.applied }} Applied</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="hotgame">
			<view class="title">Hot games</view>
			<view class="rec-box">
				<view class="rec-box-item" v-for="(item, index) in hotgames" :key="index" @click="router(item)">
					<view class="left">
						<view class="rec-box-item-img"><image :src="$methods.addHost(item.icon)"></image></view>
						<view class="rec-box-item-text">
							<view class="appname">
								<text>{{ item.name }}</text>
							</view>
							<!-- <view class="appname"><text>super</text></view> -->
							<view class="appnum">
								<text>{{ item.applied }} Applied</text>
							</view>
						</view>
					</view>
					<view class="right"><u-button type="warning" size="mini" @click="router(item)">Download</u-button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
const AdModule = uni.requireNativePlugin('AdModule');
export default {
	data() {
		return {
			banner: [],
			notice: [],
			recommended: [],
			hotgames: [],
			result: ''
		};
	},
	async onLoad() {
		await this.start();
	},
	methods: {
		async start() {
			var [error, res] = await uni.request({
				url: 'https://s.nooapp.com/page/app.json'
			});
			if (error) {
				console.log(error);
			} else {
				console.log(res.data);
			}
			uni.setStorageSync('appData', res.data);
			let appData = uni.getStorageSync('appData');
			this.banner = appData.banner.map(item => {
				item.image = this.$methods.addHost(item.image);
				return item;
			});
			this.notice = appData.notice;
			this.recommended = res.data.games.slice(0, 3);
			this.hotgames = res.data.games.slice(3, res.data.games.length);
		},
		bannerTo(index) {
			// AdModule.trackEvent(
			// 	{
			// 		name: this.name,
			// 		age: this.age
			// 	},
			// 	ret => {
			// 		uni.showToast({
			// 			title: ret.code
			// 		});
			// 	}
			// );
			// uni.navigateTo({
			// 	url: '/pages/details/details?info=' + JSON.stringify(this.banner[index])
			// });
		},
		router(item) {
			AdModule.trackEvent({ name: item.trackEvent }, ret => {});
			uni.navigateTo({
				url: '/pages/details/details?info=' + JSON.stringify(item)
			});
		}
	},
	async onPullDownRefresh() {
		await this.start();
		uni.stopPullDownRefresh();
	}
};
</script>

<style lang="scss">
.container {
	min-height: 100vh;
	background-color: $uni-bg-color-grey;

	.swiper-box {
		height: 400rpx;
		background: #ccc;

		.swiper-item {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.recommended {
		background: #fff;
		padding: 30rpx;

		.title {
			margin-bottom: 20rpx;
		}

		.rec-box {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			.rec-box-item {
				display: flex;
				flex-direction: column;
				align-items: center;

				.rec-box-item-img {
					width: 150rpx;
					height: 150rpx;
					font-size: 0;
					margin-bottom: 10rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 25%;
					}
				}

				.rec-box-item-text {
					text-align: center;

					.appname {
						width: 150rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						color: #555555;
					}

					.appname-center {
						width: 250rpx;
					}

					.appnum {
						color: #c0c0c0;
					}
				}

				.rec-box-item-img-center {
					width: 180rpx;
					height: 180rpx;
				}
			}
		}
	}

	.hotgame {
		margin-top: 20rpx;
		background: #fff;
		padding: 30rpx;

		.title {
			margin-bottom: 20rpx;
		}

		.rec-box {
			.rec-box-item {
				padding: 20rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					display: flex;
					align-items: center;
					flex: 1;

					.rec-box-item-img {
						flex: 0 0 150rpx;
						width: 150rpx;
						height: 150rpx;
						font-size: 0;

						image {
							width: 100%;
							height: 100%;
							border-radius: 25%;
						}
					}

					.rec-box-item-text {
						margin-left: 20rpx;

						.appname {
							width: 300rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: #555555;
						}

						.appnum {
							color: #c0c0c0;
						}
					}
				}

				.right {
					width: 200rpx;
					display: flex;
					justify-content: center;
				}
			}
		}
	}
}

/deep/ .uni-swiper-dot-active {
	background-color: #ffffff;
}
</style>
