<script>
export default {
	onLaunch: function() {
		console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！');
		console.log('App Launch');
		// #ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			uni.request({
				url: 'https://server.nooapp.com/api/app_update/',
				data: {
					version: widgetInfo.version,
					name: widgetInfo.name
				},
				success: result => {
					var data = result.data;
					if (data.update && data.wgtUrl) {
						uni.redirectTo({
							url: 'pages/beforeupdate/beforeupdate?wgtUrl=' + data.wgtUrl
						});
					}
				}
			});
		});
		// #endif
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/* #ifndef APP-NVUE */
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
/*  #endif */
/* 每个页面公共css */
</style>
