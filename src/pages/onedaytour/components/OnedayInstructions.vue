<template>
 		<div class="mp-prddetail-group" id="useGroup" >
		    <h3 class="mp-prddetail-title mp-border-bottom">使用说明</h3>
		    <div class="mp-prddetail-content"  :style="style">
		    	<div v-for="item in useInstructions" :key="item.id">
			        <h4 class="mp-prddetail-subtitle">{{item.subtitle}}</h4>
			        <p class="mp-prddetail-desc">{{item.prddetailDesc}}</p>
		        </div>
		    </div>
		    <div :class="{'mp-prddetail-more':true, 'mp-prddetail-hasmore':active}"  @click="use_instruction" >
		        <span >{{moreText}}</span><span class="mpg-iconfont mp-prddetail-arrow mp-prddetail-arrowup">E</span>
		    </div>
		</div>
</template>

<script>
	export default {
//		props:["useInstructions"],
		data(){
			return {
				moreText:'更多使用说明'
			}
		},
		methods:{
			use_instruction:function(){
				if(this.moreText=="更多使用说明"){
					this.moreText="收起使用说明"
				}else{
					this.moreText="更多使用说明"
				}
				return this.moreText
				
			}
		},
		computed:{
			 style: function () {
                if (this.moreText=="更多使用说明") {
                    return "height:4.21rem"
                } else {
                    return "height:auto" 
                }
            },
            active:function(){
            	 if (this.moreText=="更多使用说明") {
                    return true
                } else {
                    return false 
                }
            },
            useInstructions() {
	    		return this.$store.state.onedaytour.useInstructions;
	    	}
		}
	}
</script>

<style>
	#useGroup{
		margin-bottom: 1.2rem;
		padding-bottom: 1.2rem;
	}
	.mp-prddetail-group {
	    margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;
	}
	.mp-prddetail-title {
	    overflow: hidden;
	    position: relative;
	    height: .84rem;
	    padding: 0 .2rem;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .84rem;
	    text-indent: .16rem;
	}
	.mp-prddetail-content {
	    overflow: hidden;
	    padding: 0 .24rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.mp-prddetail-subtitle {
	    padding: .24rem 0 .1rem;
	    color: #ff8300;
	    font-size: .3rem;
	    line-height: .42rem;
	}
	.mp-prddetail-more {
	    position: relative;
	    padding: .24rem 0 .3rem;
	    height: .4rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	    text-align: center;
	}
	.mp-prddetail-hasmore::before {
	    content: '';
	    position: absolute;
	    left: 0;
	    top: -.6rem;
	    width: 100%;
	    height: .6rem;
	    /*background-image: -webkit-gradient(linear,top,bottom,from(rgba(255,255,255,1)),to(rgba(255,255,255,.2)));
	    background-image: -webkit-linear-gradient(top,rgba(255,255,255,1),rgba(255,255,255,.2));
	    background-image: -moz-linear-gradient(top,rgba(255,255,255,1),rgba(255,255,255,.2));
	    background-image: -o-linear-gradient(top,rgba(255,255,255,1),rgba(255,255,255,.2));*/
	    background: linear-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,.2));
	}	
</style>
