<template>
 	<div>
 		<home-header/>
 		<home-body/>
 	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import BodyComponent from "./Body";



	export default {
		components: {
			"home-header": HeaderComponent,
			"home-body": BodyComponent,
		}
	}
</script>

<style>
	
</style>
