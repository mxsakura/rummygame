import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);

import methods from "./common/js/methods.js"
Vue.prototype.$methods = methods;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
