<template>
 	<div class="mp-product-list">
 		<div id="wrapper">
			<div id="scroller">
		 		<ul>
		 			<li v-if="showLoading">正在加载</li>
		 			<li class="mp-product-item" v-for="item in recommendInfo" :key="item.id">
		 				<a href="#">
		 				<div class="mp-product-imgcon">
		 					<img :src="item.imgUrl" />
		 					<span class="mp-product-bookingflag"><span>{{item.bookingflag}}</span></span>
		 				</div>
		 				<div class="mp-product-info">
		 					<h4 class="mp-product-name">{{item.productname}}</h4>
		 					<div class="mp-product-taglist">
		 						<span class="mp-product-tagitem">{{item.soldQuantity}}</span>
		 						<span>{{item.Score}}分</span>
		 					</div>
		 					<div class="mp-product-moreinfo"><span class="mp-product-text">出发地:{{item.Supplygoods}}</span></div>
		 					<div class="mp-product-priceinfo">
		 						<div> </div>
		 						<span class="mp-product-qunarprice">￥<em class="mp-product-quanrpricenum">{{item.quanrpricenum}}</em></span>
		 						<span class="mp-product-priceflag">起</span>
		 					</div>
		 				</div>
		 				</a>
		 			</li>
		 		</ul>
			</div>
		</div>
 	</div>
</template>

<script>
	import IScroll from '../../utils/iscroll-probe.js'
	export default {
	//	props:["recommendInfo"]
		data() {
				return {
					showLoading:false
				}
			},
			computed: {
				recommendInfo() {
					return this.$store.state.home.recommendInfo;
				}
			},
			mounted(){
				this.myScroll=new IScroll('#wrapper',{probeType:1,
					mouseWheel:true});
				this.myScroll.on("scroll",()=>{
					if(this.myScroll.y>50){
						this.showLoading=true;
						this.$store.commit("refreshInfo");
					}
				})
			},
			updated(){
				setTimeout(()=>{
					this.showLoading=false;
					this.myScroll.refresh();
				},1000)
			}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	#wrapper{
		height:300px;
		overflow: hidden;
	}
	.mp-product-list{
		margin:0.2rem;		
		position: relative;	
		border-top: 2px solid #EEEEEE;	
}
	.mp-product-item a{
		display: flex;
		justify-content: space-between;
		padding: 0.1rem 0 0.1rem 0;
		border-bottom: 1px solid #EEEEEE;
		color: #000000;
		
	}
	.mp-product-imgcon{
		position: relative;
	}
	.mp-product-imgcon img{
		width: 2rem;
		height: 2rem;
		display: block;
		border: 0;
		background: url(http://simg1.qunarzz.com/mobile_platform/mobile_douxing/qtuan/imgdefault.jpg) #efefef center 50% no-repeat;
	}
	.mp-product-bookingflag{
		position: absolute;
		width:1.3rem;
		display: block;
		text-align: center;
		color: white;
		top:0.1rem;
		left:-0.05rem;
		background: deepskyblue;
		height:0.28rem

	}
	.mp-product-bookingflag::after {
		content: "\0020";
		position: absolute;
		top:0rem;
		left:1.28rem;
		border-top: .14rem solid #00bcd4;
   		border-bottom: .14rem solid #00bcd4;
    	border-right: .14rem solid transparent;
	}
	.mp-product-name{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		line-height: 0.35rem;
	}
	.mp-product-taglist{
		color: #9e9e9e;
		padding-top:0.15rem;
	}
	.mp-product-tagitem{
		padding-right:0.2rem
	}
	.mp-product-info{
/*		width:4.9rem;*/
		position: relative;
		padding-left:0.1rem;
		padding-right:0.1rem;
		height: 2rem;
	}
	.mp-product-moreinfo{
		position: absolute;
		bottom: 0.01rem;
		
	}
	.mp-product-priceinfo{
		position: absolute;
		bottom: 0rem;
		right:0.1rem
	}
	.mp-product-text{
		color:#616161;
		font-size: .24rem;
	}
	.mp-product-qunarprice{
		color:#ff8300;
		font-size: .24rem;
	}
	.mp-product-quanrpricenum{
		color:#ff8300;
		font-weight: bold;
    	font-size: .4rem;;
	}
	.mp-product-priceflag{
		color:#616161;
		font-size: .24rem;
	}
</style>