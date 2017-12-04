<template>
	<div>
 		<city-search @handleChangeShow='handleChangeShow'/>
 		<city-list v-show='hide' :chooseletter1='chooseletter1'/>
 		<city-aside v-show='hide' @handleChooseLetter1='handleChooseLetter1'/>
 	</div>
</template>

<script>
import CitySearch from "./foreign/CitySearch";
import CityList from "./foreign/CityList";
import CityAside from "./foreign/CityAside";

export default {
	components: {
		"city-search": CitySearch,
		"city-list": CityList,
		"city-aside": CityAside
	},
	data(){
		return {
			hide:true,
			chooseletter1:''
		}
	},
	methods: {
		handleChangeShow(e){
			this.hide = !e.hide;
		},
		handleChooseLetter1(chooseletter){
			this.chooseletter1=chooseletter;
		}
	}
}
</script>


<style>

</style>
