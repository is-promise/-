<template>
	<div>
 		<detail-header/>
 		<detail-centerone/>
 		<detail-centertwo/>
 		<detail-centerthree/>
 	</div>
</template>

<script>

import detailHeader from "./Shiheader";
import detailcenterone from "./Shicenterone";
import detailcentertwo from "./Shicentertwo";
import detailcenterthree from "./Shicenterthree";

export default {
	components: {
		
		"detail-header": detailHeader,
		"detail-centerone":detailcenterone,
		"detail-centertwo":detailcentertwo,
		"detail-centerthree":detailcenterthree
	},
	mounted(){
		if(this.$store.getters.shouldGetDatadetail){
		this.$store.dispatch("getdetailInfo");
		};
	}
}
</script>


<style>
</style>
