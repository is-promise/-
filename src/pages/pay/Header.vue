<template>
 	<header class="header">
 		<router-link to="/detail-shi">
 		<div class="header-left iconfont icon-fanhui"></div>
 		</router-link>
 			<div class="header-title">
 				订单填写
	 		</div>
 		<div class="header-right">
 			<div class="header-city-wrapper">
 				<span class="header-city">登录</span>
 			</div>
 		</div>
 	</header>
</template>

<script>
	

	export default {
		
	}
</script>

<style scoped="scoped">
	.header {
		height: .88rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		left: .8rem;
		right: 1.36rem;
		top: .14rem;
		line-height: .6rem;
		text-indent: .2rem;
		color: #fff;
		text-align: center;
	}
	.header-right {
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-city-wrapper {
		position: relative;
		padding-right: .3rem;
	}
	.header-city {
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 1rem;
		text-overflow: ellipsis;
	}
	
</style>
