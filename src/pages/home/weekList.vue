<template>
 <div class="week-list-con">
 	<h3>周末去哪儿</h3>
 	<ul>
 		<li>
 			<div><img src="../../assets/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg"></div>
 			<p>北京温泉排行榜</p>
 			<p>细数北京温泉，温暖你的冬天</p>
 		</li>
 		<li>
 			<div><img src="../../assets/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg"></div>
 			<p>寻找北京的皇城范儿</p>
 			<p>数百年的宫廷庙宇，至今依旧威严霸气</p>
 		</li>
 		<li>
 			<div><img src="../../assets/7baaf8a851d221.jpg_r_640x214_1431200f.jpg"></div>
 			<p>北京必游TOP10</p>
 			<p>来北京必去的景点非这些地方莫属</p>
 		</li>
 		<li>
 			<div><img src="../../assets/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg"></div>
 			<p>登高望远秋色佳</p>
 			<p>山顶满眼彩色，此情此景醉了</p>
 		</li>
 		<li>
 			<div><img src="../../assets/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg"></div>
 			<p>秋高气爽去礼佛</p>
 			<p>微风伴着美妙经声，品尝秋的另一番滋味</p>
 		</li>
 	</ul>
 </div>
</template>

<script>



export default {
	
  
}
</script>

<style>
.week-list-con{
	width: 100%;
	overflow: hidden;
}

.week-list-con h3:nth-child(1){
	padding: .25rem .2rem;
}
.week-list-con ul li div{
	width: 100%;
	height: 0;
	padding-bottom: 35.67%;
	overflow: hidden;
	background: url(http://simg1.qunarzz.com/mobile_platform/mobile_douxing/qtuan/imgdefault.jpg) #efefef center 50% no-repeat;
}
.week-list-con ul li div img{
	width: 100%;
}

 .week-list-con ul li p:nth-child(2){
 	padding-top: .25rem;
 	padding-left: .2rem;
 	padding-bottom: .15rem;
	
}
 .week-list-con ul li p:nth-child(3){
 	padding-left: .2rem;
 	padding-bottom: .25rem;
 	font-size: 0.24rem;
 	color: #999;
	
}
 .week-list-con h3:nth-child(1), .week-list-con ul li p{
 	width: 100%;
 	overflow: hidden;
 	white-space: nowrap;
 	text-overflow: ellipsis;
 }
</style>