<template>
	<div class="mp-con">
		<ul class="mp-listitem-con">
			<li>
				<p>
					<span class="iconfont icon-diliweizhi"></span>
					<i>定位失败</i>
				</p>
			</li>
			<li>
				<p>
					<span class="iconfont icon-diqiu"></span>
					<i>5折泡温泉</i>
				</p>
			</li>
		</ul>
		<ul class="mp-activity-con">
			<li>
				<img src="../../assets/img/home/e395615b16fb1302.png"/>
			</li>
			<li>
				<img src="../../assets/img/home/1685d2108b652302.png"/>
			</li>
		</ul>
		<h2 class="mp-modtitle">热销推荐</h2>
	</div>
</template>

<script>
</script>

<style scoped>
	.mp-con{
		background: #f5f5f5;
	}
	.mp-listitem-con{
		width: 100%;
		height: 0.98rem;
		display: flex;
		margin-bottom: 1px;
	}
	.mp-listitem-con li{
		width: 50%;
		float: left;
		font-size: 0.28rem;
		text-align: center;
		line-height: 0.98rem;
		color: #212121;
		background: #fff;
		margin-top: 1px;
	}
	.mp-listitem-con li p{
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 2rem;
		text-overflow: ellipsis;
		height: 0.98rem;
	}
	.mp-listitem-con li:nth-child(1){
		border-right: 1px solid #f5f5f5;
	}
	.mp-activity-con{
		width: 100%;
		margin-top: 0.2rem;
		height: 1.4rem;
		display: flex;
	}
	.mp-activity-con li{
		width: 50%;
		margin-bottom: 1px;
		background: #fff;
	}
	.mp-activity-con li:nth-child(1){
		border-right: 1px solid #f5f5f5;
	}
	.mp-activity-con li img{
		height: 1.4rem;
		width: 100%;
	}
	.mp-modtitle{
		display: inline-block;
	    overflow: hidden;
	    padding-left: .26rem;
	    line-height: .8rem;
		width: 2rem;
		height: .8rem;	
		text-overflow: ellipsis;
		white-space: nowrap;
	    color: #212121;
	}
</style>