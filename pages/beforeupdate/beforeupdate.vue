<template>
	<view class="page">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="update">
			<view>update</view>
			<text class="u-progress-info">{{ parseInt(progress) + '%' }}</text>
			<u-line-progress active-color="#f38313" :percent="progress"></u-line-progress>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			updateStatus: false,
			progress: 0,
			progressContent: 0
		};
	},
	onLoad(option) {
		console.log(option.wgtUrl);
		const downloadTask = uni.downloadFile({
			url: option.wgtUrl,
			success: downloadResult => {
				if (downloadResult.statusCode === 200) {
					uni.showLoading({
						title: 'install'
					});
					plus.runtime.install(
						downloadResult.tempFilePath,
						{
							force: false
						},
						function() {
							console.log('install success...');
							uni.hideLoading();
							plus.runtime.restart();
						},
						function(e) {
							console.error('install fail...');
						}
					);
				}
			}
		});
		downloadTask.onProgressUpdate(res => {
			this.progress = res.progress;
		});
	}
};
</script>

<style>
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.page {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.update {
	width: 500rpx;
	height: 500rpx;
	text-align: center;
}
</style>
