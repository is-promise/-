<template>
 	<div class="mp-fixbooking-con mpg-flexbox">
	    <div class="mp-fixbooking-qchat mp-border-topleft"  style="display: block;">
	        <div class="mpg-iconfont mp-qchat-icon"></div>
	        <div class="mp-qchat-text">咨询</div>
	    </div>
	    <div class="mp-fixbooking-btn mpg-flexbox-item">
	    	<router-link to="/">
	        <a href="javascript:;"  data-teamtype="" data-click="t_goumai">立即预订</a>
	   		 </router-link>
	    </div>
	    <div class="mp-weekend-collection"></div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.mp-fixbooking-con {
	    position: fixed;
	    z-index: 82;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .98rem;
	    line-height: .98rem;
	}
	.mp-fixbooking-qchat {
	    display: none;
	    float: left;
	    padding: .16rem 0 .06rem;
	    width: 1.02rem;
	    background: #fff;
	    color: #616161;
	    text-align: center;
	}
	.mp-qchat-icon {
	    position: relative;
	    top: -.02rem;
	    height: .4rem;
	    font-size: .4rem;
	    line-height: .4rem;
	}
	.mp-qchat-text {
	    height: .28rem;
	    font-size: .2rem;
	    line-height: .28rem;
	}
	.mp-fixbooking-btn {
	    overflow: hidden;
	    height: .98rem;
	    background: #ff9800;
	    color: #fff;
	    font-size: .4rem;
	    text-align: center;
	}
	.mpg-flexbox-item{
	    flex: 1;
	}
	.mp-fixbooking-btn a {
	    display: block;
	    color: #fff;
	}
</style>
