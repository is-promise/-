<template>
	<div class="city-mainContent">
		<div class="city-cityarea-group">
			<div class="city-cityarea-title">您的位置</div>
			<div class="city-cityarea-content">
				<span class="cityitem-light" >北京</span>
			</div>
		</div>
		<div class="city-local">
			<div class="city-cityarea-group"
				<div class="city-cityarea-title">热门城市</div>
				<div class="city-cityarea-content">
					<span v-for="city in hotforeigcity" :key="city.id">{{city.city}}</span>
				</div>
			</div>
			<div class="city-cityarea-group" v-for="letter in foreigncity" :key="letter[0]">
			<div class="city-cityarea-title" :ref="letter[0]">{{letter[0]}}</div>
			<div class="city-cityarea-content">
				<ul>
					<li v-for="cityitem in letter[1]" :key="cityitem.id">{{cityitem.cityarea}}</li>
				</ul>
			</div>
 		</div>
	</div>
</template>

<script>
	export default {
		props:['chooseletter1'],
		data(){
			return {
				alphabet:[]
			}
		},
		computed: {
			hotforeigcity(){
				return this.$store.state.city.hotforeigcity;
			},
			foreigncity(){
				return this.$store.state.city.foreigncity;
			}
		},
		watch:{
			chooseletter1(){
				var scrollTop =this.alphabet[this.chooseletter1].position;
				console.log()
				if(document.body.scrollTop == 0){
					document.documentElement.scrollTop = scrollTop-45;
				}else{
					document.body.scrollTop = scrollTop-45;
				}
			}
		},
		mounted(){
			for(var letter in this.foreigncity){
				var lettra =this.foreigncity[letter][0];
				this.alphabet.push({
					lettra:lettra,
					position:this.$refs[lettra][0].offsetTop
				})
			}
		},
		updated(){
			for(var letter in this.foreigncity){
				var lettra =this.chinacity[letter][0];
				this.alphabet.push({
					lettra:lettra,
					position:this.$refs[lettra][0].offsetTop
				})
			}
		},
		beforeDestroy(){
			if(document.body.scrollTop == 0){
				document.documentElement.scrollTop = 0;
			}else{
				document.body.scrollTop = 0;
			}
		}
	}
</script>

<style>

</style>