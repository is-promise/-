<template>
	<nav class="f-nav">
		<div class="f-position-left">	
			<div id="wrapper">
				<div id="scroller">
					<ul>
						<li v-for="item in nav" :key="item.id">{{item.name}}</li>					
					</ul>
				</div>	
			</div>		
		</div>
		
		<div class="f-position-right iconfont icon-jiantouxia" @touchstart="handClickBottom"></div>
		<div class="f-position-all" v-show="all" ref="positionNone">
			<div class="f-position-all-header">
				<span class="f-position-all-header-left">游玩景点  <span style="font-size: 0.14rem"> (可多选)</span></span>
				<span class="iconfont icon-jiantoushang 
					f-position-all-header-right" 
					@touchstart="handClickTop"
					>
				</span>
			</div>
			<div class="f-position-all-footer">
				<div id="wrappera">
					<div id="scrollera">
						<ol>
							<li v-for="item in nav" :key="item.id">{{item.name}}</li>					
						</ol>
					</div>	
				</div>		
			</div>
		</div>
	</nav>
</template>

<script>
	import IScroll from "../../../unitl/iscroll/iscroll-probe.js"
	
	export default {
		data() {		
			return {				
				all:false,				
			}
		},
		
		computed: {
			nav() {
				return this.$store.state.nav.nav
			}
		},
		
		methods: {
			handClickBottom:function() {				
				this.all = true
			},
			
			handClickTop:function() {
				this.all = false
			},
		},
		
		mounted() {						
			this.myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
			this.myScroll1 = new IScroll('#wrappera', { scrollY: true, mouseWheel: true });	
		},
		
		updated(){
			this.myScroll.refresh();
			this.myScroll1.refresh();
		}
		
										
	}
</script>

<style scoped="scoped">
	#wrapper {	
		width: 100%;			
		overflow: hidden;
		height: 0.69rem;
	}
	#scroller {
		width: 41rem;	
		height: 0.69rem;			
	}
	
	.f-nav {
		position: relative;
		height: 0.84rem;
		background: #e5e7e8;
	}
	.f-position-left {
		position: relative;
		width: 86%;		
		margin-top: 0.15rem;
		float: left;			
	}	
	.f-nav ul {
		position: relative;	
		width: 100%;	
		height: 100%;			
	}
	.f-nav ul li {
		float: left;
		height: 0.54rem;
		padding:0 0.12rem;
		margin: 0 0.1rem;
		background: white;
		text-align: center;
		line-height: 0.56rem;
	}
	.f-position-right {
		position: relative;
		width:10% ;
		height: 0.84rem;
		float: right;
		line-height: 0.84rem;
		text-align: center;
		font-size: 0.36rem;
		color: #a3a7aa;
		background: #e5e7e8;
	} 
	.f-position-all {
		width: 100%;
		background: #e5e7e8;
		position: absolute;
		z-index: 99999;
	}
	.f-position-all-header {
		height: 0.84rem;
		border-bottom: 0.01rem solid #00AFC7;
		line-height: 0.84rem;
	}
	.f-position-all-header-left{
		padding: 0 .2rem;
	}
	.f-position-all-header-right {
		position: relative;
		width:10% ;
		height: 0.84rem;
		float: right;
		line-height: 0.84rem;
		text-align: center;
		font-size: 0.36rem;
		color: #a3a7aa;
	}
	.f-position-all-footer {		
		width: 100%;
	}
	#wrappera {							
		width: 100%;
		height: 6.15rem;
		overflow: hidden;
	}
	#scrollera{
		overflow: hidden;
	}		
	.f-position-all-footer ol li {
		float: left;
		height: 0.54rem;
		padding:0 0.16rem;
		margin:0.15rem;
		background: white;
		text-align: center;
		line-height: 0.56rem;
	}
</style>


