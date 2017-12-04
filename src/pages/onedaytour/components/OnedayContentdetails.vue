<template>
 		<div class="mp-prddetail-group">
 			<div class="mp-card-group">
 				<div class="mp-routesum-outter">
 					<div class="mp-routesum-inner">
 						<div class="mp-routesum-item">
 							<div class="mp-routesum-title">
 								<span class="mp-routesum-icon">lo</span>
 								<span>交通</span>
 							</div>
 							<div class="mp-routesum-content">汽车往返</div>
 						</div> 					
 					</div>
 				</div>
 				<div class="mp-summary-head">
		            <h3 class="mp-summary-title">行程亮点</h3>
		        </div>
 				<div class="mp-card-content">
		            <p class="mp-card-desc">
		                             ❤5大景点：天安门广场+故宫+八达岭长城+鸟巢+水立方！
						<br>❤纯玩无购物，经典不错过！
						<br>❤配备故宫无线讲解器，讲解不在错过
		            </p>
       			</div>
 			</div>
 			<h3 class="mp-route-headtext">行程安排</h3>
 			<div mp-role="tabContent">
				<div class="mp-prddetail-content mp-timeline">
					<div class="mp-prddetail-routeitem" v-for="item in prddetailRouteitem" :key="item.id">
						<span class="mp-prddetail-date">{{item.data}}</span>
						<div class="mp-verticalline mp-dark-dash mp-prddetail-route">
							<span class="mp-timeline-nodeicon mp-oneday-iconfont"></span>
							<a href="#" >
								<span class="mp-route-title" >{{item.routeTitle}}</span>
							</a>
							<p class="mp-route-desc">{{item.routeDesc}}</p>
						</div>
					</div>
				</div>
			</div>
			<a href="#">
		        <div class="mp-card-moreoutter">
		            <div class="mp-card-more mp-border-bottom">
		               	 查看详细产品介绍<span class="mp-iconfont">F</span>
		            </div>
		        </div>
    		</a>
 		</div>
</template>

<script>
	export default {
		 data(){
	        return {}
	    },

	    computed: {
	    	prddetailRouteitem() {
	    		return this.$store.state.onedaytour.prddetailRouteitem;
	    	}
	    }
	}
</script>

<style>
	.mp-prddetail-group {
	    margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;
	}
	.mp-card-group {
	    margin-top: .2rem;
	    background-color: #fff;
	    padding: 0 .2rem;
	}
	.mp-routesum-outter {
	    padding: .24rem 0;
	}
	.mp-routesum-inner {
	    background-color: #f5f5f5;
	    border-radius: .1rem;
	    padding: .2rem;
	}
	.mp-routesum-item:last-child {
	    margin-bottom: 0;
	}
	.mp-routesum-item {
	    position: relative;
	    zoom: 1;
	    overflow: hidden;
	    /*margin-bottom: .2rem;*/
	}
	.mp-routesum-title {
	    position: absolute;
	    width: 1.2rem;
	    color: #212121;
	}
	.mp-routesum-icon {
	    color: #919191;
	    margin-right: .1rem;
	}
	.mp-routesum-content {
	    padding-left: 1.2rem;
	    /*line-height: .36rem;*/
	    color: #616161;
	}
	.mp-summary-head {
	    margin-top: .1rem;
	}
	.mp-summary-title {
	    color: #616161;
	    font-size: .4rem;
	}
	.mp-card-content {
	    padding: .24rem 0 .3rem 0;
	    border-bottom: 1px dashed #dadada;
	}
	.mp-card-desc {
	    color: #616161;
	    font-size: .28rem;
	    line-height: .44rem;
	    max-height: 1.32rem;
	    overflow: hidden;
	}
	.mp-route-headtext {
	    color: #616161;
	    font-size: .4rem;
	    margin: .3rem 0 0 .2rem;
	}
	.mp-timeline {
	    padding: .2rem;
	}
	.mp-prddetail-content {
	    overflow: hidden;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.mp-prddetail-routeitem:not(:last-child) {
	    padding-bottom: .14rem;
	}
	.mp-prddetail-routeitem {
	    overflow: hidden;
	    min-height: 1%;
	}
	.mp-prddetail-date {
	    overflow: hidden;
	    float: left;
	    width: .72rem;
	    height: .44rem;
	    white-space: nowrap;
	}
	/*.mp-verticalline::after {
	    content: '';
	    position: absolute;
	    bottom: -.4rem;
	    left: .04rem;
	    width: 1px;
	    height: 100%;
	    margin-left: .3rem;
	    border-radius: 3px;
	    background-color: rgba(217,217,217,0.7);
	}*/
	.mp-prddetail-route {
	    margin-left: .76rem;
	    padding-left: .7rem;
	    font-size: .28rem;
	    padding-bottom: .1rem;
	}
	.mp-timeline-nodeicon {
	    position: absolute;
	    z-index: 2;
	    top: 2px;
	    left: .2rem;
	    color: #00afc7;
	    font-size: .28rem;
	}
	.mp-card-moreoutter {
	    padding: 0 .2rem;
	}
	.mp-card-more {
	    height: .8rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .8rem;
	    text-align: center;
	    margin-top: .1rem;
	    border-top: 1px dashed #dadada;
	}
	.mp-iconfont {
	    margin-left: .1rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
</style>
