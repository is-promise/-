<template>
	<div>
 		<city-search @handleChangeShow='handleChangeShow' />
 		<city-list v-show='hide' :chooseletter='chooseletter'/>
 		<city-aside v-show='hide' @handleChooseLetter='handleChooseLetter'/>
 	</div>
</template>

<script>
import CitySearch from "./china/CitySearch";
import CityList from "./china/CityList";
import CityAside from "./china/CityAside";

export default {
	components: {
		"city-search": CitySearch,
		"city-list": CityList,
		"city-aside": CityAside
	},
	data(){
		return {
			hide:true,
			chooseletter:'',
			Letterarr:[]
		}
	},
	methods: {
		handleChangeShow(e){
			this.hide = !e.hide;
		},
		handleChooseLetter(chooseletter){
			this.chooseletter=chooseletter;
		}
	}
}
</script>


<style>

</style>
