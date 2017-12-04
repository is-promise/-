<template>
 	<header class="header">
 		<router-link to='/'>
 		<div class="header-left iconfont icon-fanhui"></div>
 		</router-link>
 		<input class="header-title" placeholder="输入城市或景点">					
 		<div class="header-right">
 			搜索
 		</div> 			
 	</header> 	 	
</template>

<script>
export default {
	
}
</script>

<style scoped="scoped">
	.header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
	}
	.header-left {
		float: left;
		width:3%;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .35rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		top: .12rem;
		width: 76%;
		height: .56rem;		
		background: #fff;
		border-radius: .12rem;
		text-indent: .2rem;
		color: #ccc;
	}
	.header-right {
		float: right;
		width: 14%;
		line-height: .88rem;
		text-align: center;
		color: #fff;
		font-size: 0.3rem;
	}
	
	
</style>
