<template>
	<div>
		<div class="firstheader">
			<span class="iconfont icon-menpiao smallico"></span>
			<span>故宫成人票</span>
		</div>
		
		
		<div class="firstmenu">
			<em class="firsttwo">
				<span>上午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥40</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia" @click="handleShow" v-show="speed"></span>
		</div>
		
		<div class="center2-1" v-show="open">
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
				<router-link to="/pay">
				<p>预定</p>
				</router-link>
			</div>
		</div>
		
		<div class="center2-1" v-show="open">
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
				<p>预定</p>
			</div>
		</div>
		
		<div class="firstmenu">
			<em class="firsttwo">
				<span>下午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥40</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="firstmenu" v-show="more">
			<em class="firsttwo">
				<span>故宫+珍宝馆+钟表馆</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥40</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		
		
		<div class="moreClick" @click="handlemore">
			<span>{{moreContent}}</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		
		<div class="firstheader">
			<span class="iconfont icon-menpiao smallico"></span>
			<span>故宫儿童票</span>
		</div>
		
		
		<div class="firstmenu">
			<em class="firsttwo">
				<span>上午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		
		
		
		
		<div class="firstmenu">
			<em class="firsttwo">
				<span>下午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="moreClick">
			<span>{{moreContent}}</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		
		
		
		<div class="firstheader">
			<span class="iconfont icon-menpiao smallico"></span>
			<span>故宫老人票</span>
		</div>
		<div class="firstmenu">
			<em class="firsttwo">
				<span>上午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="firstmenu">
			<em class="firsttwo">
				<span>下午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="moreClick">
			<span>{{moreContent}}</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		
		
		<div class="firstheader">
			<span class="iconfont icon-menpiao smallico"></span>
			<span>热销组合产品</span>
		</div>
		<div class="firstmenu">
			<em class="firsttwo">
				<span>上午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="firstmenu">
			<em class="firsttwo">
				<span>下午场</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="moreClick">
			<span>{{moreContent}}</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		
		
		<div class="firstheader">
			<span class="iconfont icon-menpiao smallico"></span>
			<span>自助导览器</span>
		</div>
		<div class="firstmenu">
			<em class="firsttwo">
				<span>中文版</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="firstmenu">
			<em class="firsttwo">
				<span>英文版</span>
				<span>凭身份证入园</span>
			</em>
			<span>￥20</span>
			<span>起</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
		<div class="moreClick">
			<span>{{moreContent}}</span>
			<span class="iconfont icon-jiantouxia"></span>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				moreContent:'查看剩余产品',
				more:false,
				
				moreText:'展开',
				open:false
			}
		},
		methods:{
			handleShow:function(e){
				
				if(this.moreText=="展开"){
					this.moreText="收起"
					this.open = true
					this.speed = false
				}else{
					this.moreText="收起"
					this.open = false
				}
				return this.moreText
			},
			
			handlemore:function(){
				if(this.moreContent=="查看剩余产品"){
					this.moreContent="收起剩余产品"
					this.more = true
				}else{
					this.moreContent="查看剩余产品"
					this.more = false
				}
				return this.moreContent
			}
		}
}
</script>

<style scoped="scoped">
	.firstheader{
		font-size: 0.35rem;
		position: relative;
		line-height: 0.8rem;
		width: 100%;
		height: 0.94rem;
		border-bottom: 1px solid #F5F5F5;
	}
	.smallico{
		margin-bottom: 0.1rem;
		font-size: 0.42rem;
		margin-top: 0.2rem;
		background: #00BCD4;
		color: #FFFFFF;
		border-radius: 50%;
		margin-left: 0.2rem;
	}
	
	.firstmenu{
		line-height: 0.9rem;
		width: 100%;
		border-bottom: 1px solid #F5F5F5;
	}
	.firstmenu .firsttwo{
		display: inline-block;
		width: 5.6rem;
		margin-left: 0.2rem;
	}
	.firstmenu .firsttwo span:nth-child(1){
		font-size: 0.3rem;
	}
	.firstmenu .firsttwo span:nth-child(2),span:nth-child(3),span:nth-child(4){
		font-size: 0.2rem;
		color: #888888;
	}
	.firstmenu span:nth-child(2){
		font-size: 0.3rem;
		color: #FFA013;
	}
	
	.center2-1{
		width: 100%;
		height: 1.5rem;
		background: #F5F5F5;
		border-bottom: 1px solid #EFEFEF;
		border-top: 1px dashed #CCCCCC;
		
		
	}
	.center2-1 .center2-1left{
		width: 5.4rem;
		height: 1.5rem;
		border-right: 1px solid #F5F5F5;
		float: left;
	}
	.center2-1 .center2-1left p:nth-child(1){
		font-size: 0.3rem;
		padding-top: 0.2rem;
		margin-left: 0.1rem;
		line-height: 0.5rem;
	}
	.center2-1 .center2-1left p:nth-child(2){
		padding-top: 0.3rem;
		margin-left: 0.2rem;
	}
	.center2-1 .center2-1left p:nth-child(2) span:nth-child(1),span:nth-child(3){
		color: #5CC2CE;
	}
	.center2-1 .center2-1left p:nth-child(2) span:nth-child(2){
		padding-right: 0.2rem;
	}
	
	
	.center2-1 .center2-1right{
		float: right;
		width: 2.08rem;
		height: 1.5rem;
		text-align: center;
	}
	.center2-1 .center2-1right p:nth-child(1){
		color: #FFA726;
		font-weight: bold;
		margin-top: 0.3rem;
	}
	.center2-1 .center2-1right p:nth-child(2){
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
	.moreClick{
		width: 100%;
		height: 0.88rem;
		line-height: 0.88rem;
		text-align: center;
	}
	.moreClick span:nth-child(1){
		margin-left: 0.2rem;
	}
</style>