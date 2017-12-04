<template>
	<article id="#article"> 		
		<div class="f-change">
			<span class="f-change-left">热门搜索</span>
				<span @click="btnChange" class="f-change-right iconfont icon-huanyihuan">
					{{change}}
				</span>
		</div>
		
		<div class="f-active">			
			<div class="f-scenic">
				<div class="f-scenic-left iconfont icon-fangzi"></div>
					<div class="f-scenic-change" >
						<div class="f-scenic-right" :style="{top:scenicStyle}" ref="scenicChange">
							<a>大时代东三省啊</a>
							<a>下坡代</a>
							<a>范德打萨</a>
							<a>大多少</a>
							<a>阿道夫</a>
							<a>区纳入</a>
							<a>德啊</a>
							<a>我在这是啊</a>
							<a>高度代</a>
							<a>范德代啊</a>
							<a>不是我的</a>
							<a>小时发</a>
							<a>下方代</a>
							<a>高刚代</a>
							<a>范德代啊</a>
							<a>下代</a>
							<a>小时改革都是代</a>
							<a>下方代</a>
							<a>高诗度代</a>
							<a>范代啊</a>						
						</div>
					</div>
			</div>			
			<div class="f-place">
				<div class="f-place-left iconfont icon-tubiaozhizuomoban"></div>
					<div class="f-place-change" >
						<div class="f-place-right" :style="{top:placeStyle}" ref="placeChange">
							<a>啥地</a>
							<a>萨法</a>
							<a>多少</a>
							<a>啥地</a>
							<a>萨法方</a>
							<a>多少</a>
							<a>啥方</a>
							<a>萨法方</a>
							<a>多少</a>
							<a>第三</a>
							<a>啥地</a>
							<a>萨法方</a>
							<a>多少</a>
							<a>啥方</a>
							<a>萨法方</a>
						</div>
					</div>
			</div>
		</div>
 	</article>	
</template>

<script>
	export default {
		data () {
			return {
				change:"换一批",
				scenicStyle:"0rem",
				placeStyle:"0rem"
			}
		},
		
		methods:{
			btnChange:function () {	
				var scenicTop = this.$refs.scenicChange.style.top;				
				var Top = scenicTop.split("r");			
				var addTop = -Number(Top[0])+2.425;								
				this.$refs.scenicChange.style.top = -(addTop) + "rem";					
				if(addTop >= 9.52){
					this.$refs.scenicChange.style.top = 0+"rem";
				}
								
				var placeTop = this.$refs.placeChange.style.top;
				var Topa = placeTop.split("r");
				var addTopa = -Number(Topa[0])+1.22;				
				this.$refs.placeChange.style.top = -(addTopa) + "rem";						
				if(addTopa >= 4.88){
					this.$refs.placeChange.style.top = 0+"rem";
				}
			}
		}
		
	}
</script>

<style>
	.f-change {	
		height: 0.7rem;		
		background: #f0f5f6;
		border-bottom:0.01rem solid #dce5e7 ;
	}
	.f-change-left {
		line-height: 0.7rem;
		padding-left: 0.3rem;
		color: #989999;
	}
	.f-change-right {
		float: right;
		line-height: 0.7rem;
		padding-right: 0.32rem;
		font-size: 0.3rem;
		color: #00afc7;
	}
	.f-active {		
		height: 4.12rem;
		border-bottom:1px solid #dce5e7 ;
	}
	.f-scenic {
		position: relative;
		height: 2.7rem;
		border-bottom:0.01rem solid #dce5e7 ;
	}
	.f-scenic-left {				
		position: absolute;
		top: 0.42rem;
		width:10%;
		height:1.87rem;
		font-size: 0.42rem;
		border-right: 0.01rem solid #dce5e7;
		text-align: center;
		line-height: 1.87rem;
		color: #c8c8c8;
	}
	.f-scenic-change {
		position: absolute;
		left: 10%;
		width: 90%;
		height: 1.87rem;		
		margin-top: 0.42rem;
		overflow: hidden;
	}
	.f-scenic-right {
		position: absolute;	
		height: 1.87rem;		
		font-size: 0.34rem;				
	}
	.f-scenic-right a{
		display: block;
		float: left;
		margin-bottom: 0.935rem;
		padding: 0 0.52rem;
		color: #333333;
		border-right: 1px dashed #dce5e7;
		font-size: 0.28rem;
	}
	.f-place {
		position: relative;
		height: 1.38rem;		
	}
	.f-place-left {		
		position: absolute;
		top:0.22rem;
		width:10%;		
		height:0.94rem;
		font-size: 0.42rem;
		border-right: 0.01rem solid #dce5e7;
		text-align: center;		
		line-height:0.94rem ;
		color: #c8c8c8;
	}
	.f-place-change {
		position: absolute;
		left: 10%;
		width: 90%;
		height: 0.94rem;	
		margin-top:0.6rem ;
		overflow: hidden;		
	}
	.f-place-right {
		position: absolute;				
		height: 0.94rem;
		font-size: 0.34rem;		
	}
	.f-place-right a{
		display: block;
		float: left;
		margin-bottom: 0.935rem;
		padding: 0 0.48rem;
		color: #333333;
		border-right: 1px dashed #dce5e7;
		font-size: 0.28rem;
	}
</style>