<template>
 	<div class="mp-prddetail-group" id="feeGroup">
 		<h3 class="mp-prddetail-title">费用及退款说明</h3>
 		<div class="mp-prddetail-content">
	 		<div  v-for="item in prddetailExpense" :key="item.id">
	 			<h4 class="mp-prddetail-subtitle">{{item.expenseDescrib}}</h4> 
	 			<div class="mp-structure-list">
	 				<div class="mp-structure-item" v-for="index in item.structureItem" :key="index.keyid">
	 					<h4 class="mp-structure-title">{{index.structureTitle}}</h4>
	 					<p class="mp-structure-desc">{{index.structureDesc}}</p>
	 				</div>
	 			</div>
	 		</div>
	 		<h4 class="mp-prddetail-subtitle">退款说明</h4>
	 		<p class="mp-prddetail-desc" mp-role="refundCon">退款时间：使用日期截止前3天10:00前可以申请退款; <br>1、提前3天10：00申请退款，全额退款。<br>2、超过提前3天10：00申请退款，因为已经正常安排，费用不退。。 </p>
 		</div>
 	</div>
</template>

<script>
	export default {
		data(){
	        return {}
	    },

	    computed: {
	    	prddetailExpense() {
	    		return this.$store.state.onedaytour.prddetailExpense;
	    	}
	    }
	}
</script>

<style>
	.mp-prddetail-group{
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
	    border-bottom: 1px solid #E0E0E0;
	}
	.mp-prddetail-title::after {
	    content: " ";
	    position: absolute;
	    top: .28rem;
	    left: .2rem;
	    width: .06rem;
	    height: .28rem;
	    background: #00bcd4;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
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
	.mp-structure-list{
		position: relative;
	}
	.mp-structure-item {
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    background: #f5f5f5;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.mp-structure-title {
	    position: absolute;
	    top: 50%;
	    padding: .2rem 0;
	    width: 1.8rem;
	    text-align: center;
	    -webkit-transform: translateY(-50%);
	    -moz-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	    -o-transform: translateY(-50%);
	    transform: translateY(-50%);
	}
	.mp-structure-desc {
	    margin-left: 1.8rem;
	    padding: .2rem;
	    background: #fff;
	    color: #616161;
	}
</style>
