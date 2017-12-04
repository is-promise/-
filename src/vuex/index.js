import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
import lunbo from '../pages/detail-shi-lunbo/module.js'
import detail from '../pages/detail-shi/module.js'
import city from '../pages/city/module.js'
import onedaytour from '../pages/onedaytour/module.js'
import oneday from "../pages/oneday/Components/Component/module.js"
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home:home,
		lunbo:lunbo,
		detail:detail,
		city:city,
		onedaytour:onedaytour,
		nav: oneday,
		datagoInfo: oneday
		
	}
})
