<template>
	<div class="box">
		<!-----top轮播图片------>
		<div class="topimg">
				<router-link to="/">
					<span class=" iconfont icon-fanhui1 icon1"></span>
				</router-link>
					<span class="toptitle">故宫(AAAA风景区)</span>
					<div class="topsmall">
						<span class="iconfont icon-font29"></span>
						<span>10</span>
					</div>
					<router-link to="/detail-shi-lunbo">
						<div v-for="item in detailheaderInfo" :key="item.id">
						<img src="../../assets/img/detailimg/detail1.jpg" />
						</div>
					</router-link>
		</div>
	</div>
</template>

<script>
	export default {
	computed:{
    		detailheaderInfo(){
    			return this.$store.state.detail.detailheaderInfo;
    		}
    	}
	}
</script>

<style>
.box .topimg{
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 55%;
	overflow: hidden;
}
.box .topimg img{
	width: 100%;
}
.icon1{
	position: absolute;
	font-size: 0.72rem;
	color: #5A6671;
	top: 0.08rem;
	left: 0.1rem;
}
.toptitle{
	position: absolute;
	top: 3.6rem;
	left: 0.2rem;
	color: #FFFFFF;
	font-size: 0.31rem;
}
.topsmall{
	position: absolute;
	width: 1.2rem;
	height: 0.38rem;
	right: 0.2rem;
	bottom: 0.2rem;
	background: rgba(0,0,0,.5);
	color: #FFFFFF;
	text-align: center;
	font-size: 0.12rem;
	line-height: 0.45rem;
	border-radius: 0.2rem;
}
.topsmall span:nth-child(1){
	font-size: 0.25rem;
	position: relative;
	bottom: 0.05rem;
}
.topsmall span:nth-child(2){
	position: relative;
	bottom: 0.05rem;
}
</style>