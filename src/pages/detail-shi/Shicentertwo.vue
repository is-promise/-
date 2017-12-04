<template>
	<div class="center2box">
		<div class="titleone">
			<span class="iconfont icon-zan"></span>
			<span>去哪儿推荐</span>
		</div>
		
		<div class="center2-1">
			<div class="center2-1left">
				<p>【上午场】故宫成人票凭身份证入园</p>
				<p>
					<span class="iconfont icon-duigou"></span>
					<span>可定明日</span>
					<span class="iconfont icon-duigou"></span>
					<span>条件退</span>
				</p>
			</div>
			
			<div class="center2-1right">
				<p>￥40</p>
				<router-link to="./pay">
				<p>预定</p>
				</router-link>
			</div>
		</div>
		
		<div class="center3-1">
			<div class="center2-1left">
				<p>【上午场】故宫成人票+故宫全景手绘地图</p>
				<p>
					<span class="iconfont icon-duigou"></span>
					<span>可定明日</span>
					<span class="iconfont icon-duigou"></span>
					<span>条件退</span>
				</p>
			</div>
			
			<div class="center2-1right">
				<p>￥50</p>
				<p>预定</p>
			</div>
		</div>
		
		
		<div class="center3-1">
			<div class="center2-1left">
				<p>【五大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</p>
				<p>
					<span class="iconfont icon-duigou"></span>
					<span>可定明日</span>
					<span class="iconfont icon-duigou"></span>
					<span>无购物</span>
					<span class="iconfont icon-duigou"></span>
					<span>无自费</span>
				</p>
			</div>
			
			<div class="center2-1right">
				<p>￥148起</p>
				<p>预定</p>
			</div>
		</div>
		
		
		<div class="center3-1">
			<div class="center2-1left">
				<p>【五大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</p>
				<p>
					<span class="iconfont icon-duigou"></span>
					<span>可定明日</span>
					<span class="iconfont icon-duigou"></span>
					<span>无购物</span>
					<span class="iconfont icon-duigou"></span>
					<span>无自费</span>
				</p>
			</div>
			
			<div class="center2-1right">
				<p>￥148起</p>
				<p>预定</p>
			</div>
		</div>
		<div class="scrolltop" :style="style">
			<router-link to="/">
			<span class="iconfont icon-fanhui"></span>
			</router-link>
			<span>故宫</span>
		</div>
		
	</div>
	
	
</template>

<script>
	export default {
	data() {
			return {
				scroll: ''
			}
		},
		methods: {
			menu() {
				this.scroll = document.documentElement.scrollTop;
			}
		},
		mounted() {
			window.addEventListener('scroll', this.menu);
  		},
   		computed: {
            style: function () {
                if (scroll>=1) {
                    return "opacity:1"
                } else {
                    return "opacity:" + this.scroll/ 150
                }
            },
        }
	}
</script>

<style>
	.scrolltop{
		position: fixed;
		top: 0rem;
	}
	.center2box{
		position: relative;
		top: -0.11rem;
		width: 100%;
		background: #F5F5F5;
		height: 8.7rem;
	}
	
	
	.center2box .titleone{
		width: 100%;
		height: 0.88rem;
		display: flex;
		background: #FFFFFF;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #E9E9E9;
	}
	.center2box .titleone span:nth-child(1){
		font-size: 0.4rem;
		color: #FF6E6E;
		margin-left: 0.2rem;
	}
	.center2box .titleone span:nth-child(2){
		font-size: 0.35rem;
		margin-left: 0.2rem;
	}
	
	
	.center2box .center2-1{
		width: 100%;
		height: 1.5rem;
		background: #FFFFFF;
		border-bottom: 1px solid #EFEFEF;
		
	}
	.center2box .center2-1 .center2-1left{
		width: 5.4rem;
		height: 1.5rem;
		border-right: 1px solid #F5F5F5;
		float: left;
	}
	.center2box .center2-1 .center2-1left p:nth-child(1){
		font-size: 0.3rem;
		padding-top: 0.2rem;
		margin-left: 0.1rem;
		line-height: 0.5rem;
	}
	.center2box .center2-1 .center2-1left p:nth-child(2){
		padding-top: 0.3rem;
		margin-left: 0.2rem;
	}
	.center2box .center2-1 .center2-1left p:nth-child(2) span:nth-child(1),span:nth-child(3){
		color: #5CC2CE;
	}
	.center2box .center2-1 .center2-1left p:nth-child(2) span:nth-child(2){
		padding-right: 0.2rem;
	}
	
	
	.center2box .center2-1 .center2-1right{
		float: right;
		width: 2.08rem;
		height: 1.5rem;
		text-align: center;
	}
	.center2box .center2-1 .center2-1right p:nth-child(1){
		color: #FFA726;
		font-weight: bold;
		margin-top: 0.3rem;
	}
	.center2box .center2-1 .center2-1right p:nth-child(2){
		width: 1.5rem;
		height: 0.6rem;
		padding-top: -1rem;
		background: #FF9800;
		margin-left: 0.28rem;
		color: #FFA726;
		line-height: 0.6rem;
		font-weight: bold;
		border-radius: 0.1rem;
		color: #FFFFFF;
	}
	
	
	.center2box .center3-1{
		width: 100%;
		height: 2.0rem;
		background: #FFFFFF;
		border-bottom: 1px solid #EFEFEF;
		
	}
	.center2box .center3-1 .center2-1left{
		width: 5.4rem;
		height: 1.5rem;
		border-right: 1px solid #F5F5F5;
		float: left;
	}
	.center2box .center3-1 .center2-1left p:nth-child(1){
		font-size: 0.3rem;
		padding-top: 0.2rem;
		margin-left: 0.1rem;
		line-height: 0.5rem;
	}
	.center2box .center3-1 .center2-1left p:nth-child(2){
		padding-top: 0.3rem;
		margin-left: 0.2rem;
	}
	.center2box .center3-1 .center2-1left p:nth-child(2) span:nth-child(1),span:nth-child(3){
		color: #5CC2CE;
	}
	.center2box .center3-1 .center2-1left p:nth-child(2) span:nth-child(2){
		padding-right: 0.2rem;
	}
	
	
	.center2box .center3-1 .center2-1right{
		float: right;
		width: 2.08rem;
		height: 1.5rem;
		text-align: center;
	}
	.center2box .center3-1 .center2-1right p:nth-child(1){
		color: #FFA726;
		font-weight: bold;
		margin-top: 0.3rem;
	}
	.center2box .center3-1 .center2-1right p:nth-child(2){
		width: 1.5rem;
		height: 0.6rem;
		padding-top: -1rem;
		background: #FF9800;
		margin-left: 0.28rem;
		color: #FFA726;
		line-height: 0.6rem;
		font-weight: bold;
		border-radius: 0.1rem;
		color: #FFFFFF;
	}
	
	/*----下拉框----*/
	.scrolltop{
		width: 100%;
		height: 0.88rem;
		background: #00BCD4;
		display: flex;
		align-items: center;
		line-height: 0.88rem;
		color: #FFFFFF;
	
	}
	.scrolltop span:nth-child(1){
		margin-left: 0.2rem;
		font-size: 0.35rem;
		color: #FFFFFF;
	}
	.scrolltop span:nth-child(2){
		margin-left: 3rem;
		font-size: 0.35rem;
	}
</style>