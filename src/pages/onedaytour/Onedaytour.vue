<template>
	<div>
	 		<onedaytour-header />
	 		<onedaytour-content />
	 		<onedaytour-contentdetails  />
	 		<onedaytour-contentmap />
	 		<onedaytour-contentexpense  />
	 		<onedaytour-useInstructions />
	 		<onedaytour-foot />
	</div>
</template>

<script>

import HeaderComponent from "./components/OnedayHeader";
import ContentComponent from "./components/OnedayContent";
import ContentComponentdetails from "./components/OnedayContentdetails";
import ContentComponentmap from "./components/OnedayContentmap";
import ContentComponentexpense from "./components/OnedayContentexpense"
import useInstructions from "./components/OnedayInstructions"
import FootComponent from "./components/OnedayFoot"
//import PullTo from 'vue-pull-to'
export default {

	components: {
		"onedaytour-header": HeaderComponent,
		"onedaytour-content":ContentComponent,
		"onedaytour-contentdetails":ContentComponentdetails,
		"onedaytour-contentmap":ContentComponentmap,
		"onedaytour-contentexpense":ContentComponentexpense,
		"onedaytour-useInstructions":useInstructions,
		"onedaytour-foot":FootComponent,
//		PullTo
	},
	mounted(){
		if (this.$store.getters.GetData) {
			this.$store.dispatch("getIndexInfo");
		}
	}
//	 methods: {
//    refresh(loaded) {
//      setTimeout(() => {
//        this.dataList.reverse();
//        loaded('done');
//      }, 2000);
//    }
//  }

}
</script>

<style>
</style>
