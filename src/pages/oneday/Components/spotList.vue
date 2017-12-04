<template>
	<div class="f-spotList" id="iscroll">
		<ul class="f-spotList-content">
			<li v-for="item in datagoInfo" :key="item.id">
				<div class="f-spotList-left">
					<img class="f-spotlist-img" :src="item.src"/>
				</div>
				<div class="f-spotList-right">
					<h4 class="f-spotList-title">{{item.title}}</h4>
					<div class="f-spotList-position">
						<span class="f-list-span">{{item.position}}</span>
						<span>无自费</span>
						<span>{{item.show}}</span>
					</div>
					<div class="f-list-pic">{{item.pic}}</div>
					<div class="f-list-num">已售{{item.num}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		computed: {
			datagoInfo() {
				return this.$store.state.datagoInfo.datagoInfo
			}
		}	
	}
</script>

<style scoped="scoped">
	.f-spotList{
		position: absolute;
		height: 100%;
	}
	.f-spotList ul li {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height:2rem;
	}
	.f-spotList .f-spotList-left {
		height: 2rem;
	}
	.f-spotList .f-spotlist-img {
		height: 1.6rem;
		margin: 0.2rem;
	}
	.f-spotList .f-spotList-right {
		width: 100%;
		padding: .2rem .2rem .2rem 0;
   		height: 1.6rem;
   		overflow: hidden;
	}
	.f-spotList .f-spotList-title {
		line-height: .36rem;
    	font-size: .3rem;
	}
	.f-spotList .f-spotList-position {
		margin-top: 0.06rem;
		font-size: 0.18rem;
		padding: 0.02rem;
	}
	.f-list-span {
		color: cornflowerblue;
	}
	.f-list-pic {
		float:right ;
		margin-right: 0.2rem;
		color: orangered;
		font-size: 0.3rem;
	}
	.f-list-num {
		margin-top: 0.14rem;
		font-size: 0.26rem;
		color: gray;
	}
</style>