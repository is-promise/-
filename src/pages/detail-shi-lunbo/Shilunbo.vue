<template>
	<swiper :options="swiperOption" ref="mySwiper">
		
    	<swiper-slide>
    		<div class="swiper-img-con" v-for="item in lunboInfo" :key="item.id">
    			<router-link :to="item.link">
    			<img :src="item.imgUrl" class="swiper-img">
    			<span>{{item.count}}</span>
    			</router-link>
    		</div>
    		
    	</swiper-slide>
    
	</swiper>

</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
  	export default {
  		
    	data() {
			return {
				swiperOption: {
          			direction: 'horizontal',
         			autoHeight: true,
          			pagination: '.swiper-pagination',
        			observeParents: true,
        		}
      		} 
    	},
    	
    	computed:{
    		lunboInfo(){
    			return this.$store.state.lunbo.lunboInfo;
    		}
    	},
    
    	components: {
      		swiper,
    		swiperSlide
		}
		
	}
</script>

<style>
	.swiper-pagination-bullet {
		background: #00bcd4;
	}
</style>

<style scoped>
	
	.swiper-img-con {
		padding-top: 3rem;
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 135%;
		background: #000000;
	}
	.swiper-img {
		width: 100%;
		
	}
</style>