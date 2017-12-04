<template>
	<div>
 		<shi-lunbo />
 	</div>
</template>

<script>

import LunboComponent from "./Shilunbo";


export default {
	
	components: {
		"shi-lunbo": LunboComponent

	},
	
	mounted(){
			
		if(this.$store.getters.shouldGetData1){
		this.$store.dispatch("getLunboInfo");
		}
	}
}
</script>

<style>
</style>
