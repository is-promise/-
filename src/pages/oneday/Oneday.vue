<template>
	<div>
 		<oneday-header/> 
 		<oneday-position/>
 		<oneday-spotList/>
 		<onedey-footerFixed/>
 	</div>
</template>

<script>

import HeaderComponent from "./Components/Header";
import PositionComponent from "./Components/Position";
import spotListComponent from "./Components/spotList";
import footerFixedComponent from "./Components/footerFixed";

export default {
	
	components: {
		"oneday-header": HeaderComponent,
		"oneday-position": PositionComponent,
		"oneday-spotList": spotListComponent,
		"onedey-footerFixed": footerFixedComponent
	},	
	
	mounted() {
		if(!this.$store.state.nav.length){
			this.$store.dispatch("getOneday");				
		}		
	}
}
</script>

<style>
</style>