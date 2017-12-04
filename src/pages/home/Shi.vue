<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<ul>
    				<li v-for="item in smallswiperInfo" :key="item.id">
    					<router-link :to="item.link">
    					<p><img :src="item.imgUrl" class="img-con"></p>
    					<p class="contents">{{item.name}}</p>
    					</router-link>
    				</li>
    			</ul>
    			
    		</div>
    	</swiper-slide>
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<ul>
    				<li v-for="item in smallswiperInfo" :key="item.id">
    					<router-link :to="item.link">
    					<p><img :src="item.imgUrl" class="img-con"></p>
    					<p class="contents">{{item.name}}</p>
    					</router-link>
    				</li>
    			</ul>
    			
    		</div>
    	</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination"></div>
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
    		smallswiperInfo(){
    			return this.$store.state.home.smallswiperInfo;
    		}
    	},
    	components: {
      		swiper,
    		swiperSlide
		}
	}
</script>

<style>
	
</style>

<style scoped>
	
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 1.5rem;
		padding-bottom: 31.25%;
		border-bottom: 1px solid #F1F1F1;
	}
	.swiper-img-con ul li p:nth-child(1){
		background: url(../../assets/img/home/3.png) center 10% no-repeat;
		width: 0.66rem;
		height: 0.66rem;
		margin-left: 34%;
		margin-bottom: 0.2rem;
		border-radius: 0.2rem;
	}
	.swiper-img-con ul li{
		width: 25%;
		height: 1.3rem;
		float: left;
		text-align: center;
		padding-top: 0.3rem;
	}
	.img-con{
		width: 0.7rem;
		height: 0.7rem;
		margin-top: -0.04rem;
		margin-left: -0.02rem;
	}
	
	.contents{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #000000;
	}
</style>