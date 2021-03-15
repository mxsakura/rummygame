<template>
	<view class="container">
		<u-swiper :list="banner" :height="400" :border-radius="0" @click="bannerTo"></u-swiper>
		<u-notice-bar mode="vertical" type="none" :list="list"></u-notice-bar>
		<view class="recommended">
			<view class="title">Recommended</view>
			<view class="rec-box">
				<view class="rec-box-item" v-for="(item,index) in Recommended" :key="index" @click="router(item)">
					<view class="rec-box-item-img" :class="{'rec-box-item-img-center':index==1}">
						<image :src="item.icon"></image>
					</view>
					<view class="rec-box-item-text">
						<view class="appname" :class="{'appname-center':index==1}"><text>{{item.name}}</text></view>
						<view class="appnum"><text>5460 Applied</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="hotgame">
			<view class="title">Recommended</view>
			<view class="rec-box">
				<view class="rec-box-item" v-for="(item,index) in apps" :key="index" @click="router(item)">
					<view class="left">
						<view class="rec-box-item-img">
							<image :src="item.icon"></image>
						</view>
						<view class="rec-box-item-text">
							<view class="appname"><text>{{item.name}}</text></view>
							<view class="appname"><text>super</text></view>
							<view class="appnum"><text>5460 Applied</text></view>
						</view>
					</view>
					<view class="right">
						<u-button type="warning" size="mini" @click="router(item)">Download</u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [{
						icon: '/static/apps/2.jpg',
						name: 'Tricky Track 3D',
						image: '/static/banner/test.png'
					},
					{
						icon: '/static/apps/2.jpg',
						name: 'Tricky Track 3D',
						image: '/static/banner/test.png'
					},
					{
						icon: '/static/apps/2.jpg',
						name: 'Tricky Track 3D',
						image: '/static/banner/test.png'
					}
				],
				Recommended: [{
						id: 1,
						icon: '/static/apps/1.jpg',
						name: 'Lumbercraft'
					},
					{
						id: 2,
						icon: '/static/apps/2.jpg',
						name: 'Tricky Track 3D'
					}, {
						id: 3,
						icon: '/static/apps/3.jpg',
						name: "Tile Connect - Free Tile Puzzle Match Brain Game'"
					}
				],
				apps: [{
					id: 4,
					icon: '/static/apps/4.jpg',
					name: 'Rummy - Free'
				}, {
					id: 5,
					icon: '/static/apps/5.jpg',
					name: 'Craft Island'
				}, {
					id: 6,
					icon: '/static/apps/6.jpg',
					name: 'Puzzle Game'
				}, {
					id: 7,
					icon: '/static/apps/7.jpg',
					name: 'Magic Tiles 3'
				}],
				list: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶']
			};
		},
		methods: {
			bannerTo(index) {
				uni.navigateTo({
					url: '/pages/details/details?info=' + JSON.stringify(this.banner[index])
				})
			},
			router(item) {
				uni.navigateTo({
					url: '/pages/details/details?info=' + JSON.stringify(item)
				})
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
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
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

						.rec-box-item-img {
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
		background-color: #FFFFFF;
	}
</style>
