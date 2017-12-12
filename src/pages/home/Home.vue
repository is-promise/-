<template>
	<div>
 		<index-header />
 		<index-swiper />
 		<index-smallswiper />
 		<index-active />
 		<index-hotsale />
 		<index-footer />
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ShiserComponent from "./Shi";
import ListitemComponent from './Listitem';
import MpXwkcotaintList from "./Xwklist";
import weekList from './weekList';


export default {
	
	components: {
		"index-header": HeaderComponent,
		"index-swiper": SwiperComponent,
		"index-smallswiper":ShiserComponent,
		'index-active' : ListitemComponent,
		"index-hotsale":MpXwkcotaintList,
		"index-footer": weekList
	},
	
	mounted(){
		if(this.$store.getters.shouldGetData){
		this.$store.dispatch("getIndexInfo");
		};
	}
}
</script>

<style>
</style>
