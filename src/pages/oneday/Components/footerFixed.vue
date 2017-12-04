<template>
	<transition name="fade">
		<div class="f-fiexd" v-if="show">
			<ul class="contents">
				<li class="contents-list">
					<span class="iconfont icon-yingyongchengxu-xianxing"></span>
					<span>全部分类</span>
				</li>
				<li class="contents-list">
					<span class="iconfont icon-shaixuanguolv"></span>
					<span>推荐排序</span>
				</li>
				<li class="contents-list">
					<span class="iconfont icon-paixu2"></span>
					<span>并选</span>
				</li>
			</ul>
		</div>
	</transition>
</template>

<script>
	export default {
		data(){
			return{
				scroll1 : 0,
				scroll2 : 0,
				show:true
			}			
		},
		methods:{
			handleScroll () {
				this.scroll1 = this.scroll2;
				this.scroll2 = document.documentElement.scrollTop || document.body.scrollTop;
				if(this.scroll1 <= this.scroll2){
					this.show = false
				}else{
					this.show = true
				}
			}
		},
		
		mounted () {
			window.addEventListener("scroll",this.handleScroll);//监听滚动条
		}
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
  		transition: all .5s;
	}
	.fade-enter, .fade-leave-to {
		transform: translateY(0.8rem);	
	}
	
	.f-fiexd {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.8rem;
		background: black;
		opacity: 0.8;
	}
	.f-fiexd .iconfont {
		color: white;
		font-size: 0.4rem;
	}
	.f-fiexd .contents{
		display: flex;
		font-size: 0.2rem;
		color: white;
		justify-content: space-around;
	}
	.f-fiexd .contents-list {
		display: flex;
		width: 33%;
		height: 0.8rem;
		flex-direction: column;
		text-align: center;
		justify-content: space-around;
	}
</style>