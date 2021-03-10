<template>
	<scroll-view scroll-y="true" class="container">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change" autoplay>
				<swiper-item v-for="(item, index) in info" :key="index">
					<view class="swiper-item">{{ item.content }}</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<u-notice-bar mode="vertical" type="none" :list="list"></u-notice-bar>
		<view class="recommended">
			<view class="title">Recommended</view>
			<view class="rec-box">
				<view class="rec-box-item" v-for="index in 3" :key="index">
					<view class="rec-box-item-img"><image src="../../static/tab-icon/select/home.png" mode=""></image></view>
					<view class="rec-box-item-text">
						<view class="appname"><text>superAAA</text></view>
						<view class="appnum"><text>5460 Applied</text></view>
					</view>
				</view>
			</view>
		</view>

		<view class="hotgame">
			<view class="title">Recommended</view>
			<view class="rec-box">
				<view class="rec-box-item" v-for="index in 7" :key="index">
					<view class="left">
						<view class="rec-box-item-img"><image src="../../static/tab-icon/select/home.png" mode=""></image></view>
						<view class="rec-box-item-text">
							<view class="appname"><text>superAAA</text></view>
							<view class="appname"><text>super</text></view>
							<view class="appnum"><text>5460 Applied</text></view>
						</view>
					</view>
					<view class="right">
						<u-button type="warning">Download</u-button>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			info: [
				{
					content: '内容 A'
				},
				{
					content: '内容 B'
				},
				{
					content: '内容 C'
				}
			],
			current: 0,
			mode: 'round',
			list: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶']
		};
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
	.container {
		height: 100%;
		background-color: $uni-bg-color-grey;
		.swiper-box {
			height: 200rpx;
			background: #ccc;
		}
		.recommended {
			margin-top: 20rpx;
			background: #fff;
			padding: 30rpx;
			.title {
				margin-bottom: 20rpx;
			}
			.rec-box {
				display: flex;
				justify-content: space-between;
				.rec-box-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					.rec-box-item-img {
						width: 150rpx;
						height: 150rpx;
						font-size: 0;
						image {
							width: 100%;
							height: 100%;
						}
					}
					.rec-box-item-text {
						text-align: center;
						.appname {
							color: #555555;
						}
						.appnum {
							color: #c0c0c0;
						}
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
					display: flex;
					align-items: center;
					justify-content: space-between;
					.left{
						display: flex;
						align-items: center;
						.rec-box-item-img {
							width: 150rpx;
							height: 150rpx;
							font-size: 0;
							image {
								width: 100%;
								height: 100%;
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
				}
			}
		}
	}
}
</style>
