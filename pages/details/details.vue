<template>
	<view class="wrap" v-if="appRoute">
		<view class="appWrap">
			<view class="icon">
				<image :src="appRoute.icon"></image>
			</view>
			<view class="appname">
				<view class="appname-line1"><text>{{appRoute.name}}</text></view>
				<view class="appname-line2"><text>111</text></view>
			</view>
		</view>
		<view class="tipsWrap">
			<view class="container">
				<view class="title">4.1</view>
				<view class="tips">1.434万条评论</view>
			</view>
			<view class="line"></view>
			<view class="container">
				<view class="title">超过1亿次</view>
				<view class="tips">下载</view>
			</view class="container">
			<view class="line"></view>
			<view class="container">
				<view class="title">
					<u-icon name="checkmark-circle"></u-icon>
				</view>
				<view class="tips">编辑精选</view>
			</view>
			<view class="line"></view>
			<view class="container">
				<view class="title">
					<u-icon name="info-circle"></u-icon>
				</view>
				<view class="tips">7岁以上</view>
			</view>
		</view>
		<view class="install">
			<text>install</text>
		</view>
		<view class="media">
			<scroll-view class="mediaWrap" scroll-x="true">
				<view class="mediaItem" v-for="(item,index) in media" :key="index" @click="previewImage(item)">
					<image :src="item.url" mode="heightFix"></image>
				</view>
			</scroll-view>
		</view>
		<view class="detils">
			<view class="title">
				About this game
			</view>
			<text>
				Cut the wood.
				Build your town.
				Build towers.
				Kill the enemies.
				Enjoy!
			</text>
		</view>
		<view class="score">
			<view class="title">
				Score for this application
			</view>
			<view>
				{{value}}
			</view>
			<u-rate :current="value" :disabled="true" :size="50" active-color="#f38313"></u-rate>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				appRoute: null,
				media: [{
						type: 'image',
						url: '/static/detailsimg/1.jpg'
					},
					{
						type: 'image',
						url: '/static/detailsimg/2.jpg'
					},
					{
						type: 'image',
						url: '/static/detailsimg/3.jpg'
					},
					{
						type: 'image',
						url: '/static/detailsimg/4.jpg'
					},
					{
						type: 'image',
						url: '/static/detailsimg/5.jpg'
					},
					{
						type: 'video',
						url: '/static/detailsimg/5.jpg'
					},
				],
				count: 4,
				value: 3.5
			}
		},
		onLoad(option) {
			this.appRoute = JSON.parse(option.info)
		},
		methods: {
			previewImage() {
				//获取列表
				let images = (this.media.filter(item => item.type == "image")).map(item => item.url)
				// 预览图片
				uni.previewImage({
					urls: images,
					loop: true
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 30rpx;

		.appWrap {
			display: flex;

			.icon {
				width: 150rpx;
				height: 150rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 20%;
				}
			}

			.appname {
				width: 500rpx;
				margin-left: 50rpx;

				.appname-line1 {
					font-size: 50rpx;
					font-weight: bold;
				}

				.appname-line2 {
					font-size: 30rpx;
					margin-top: 20rpx;
				}

				.appname-line1,
				.appname-line2 {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}

		.tipsWrap {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.line {
				border-left: 1rpx solid #ccc;
				height: 40rpx;
			}

			.container {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 25%;

				.title {
					font-weight: 500;
				}

				.tips {
					font-size: 24rpx;
					color: #333333;
				}
			}
		}

		.install {
			margin-top: 30rpx;
			padding: 20rpx 0;
			background: #f38313;
			font-size: 30rpx;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.media {
			margin-top: 30rpx;
			white-space: nowrap;

			.mediaWrap {
				min-width: 100%;

				.mediaItem {
					display: inline-block;
					height: 400rpx;
					margin-right: 30rpx;

					image {
						height: 100%;
						border-radius: 16rpx;
					}
				}

				.mediaItem:last-child {
					margin-right: 0;
				}
			}
		}

		.detils,
		.score {
			margin-top: 20rpx;

			.title {
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}
</style>
