<template>
	<div>
		<router-link to="/">
			<div class="mp-header "  :style="style">
				<a class="mp-header-left iconfont icon-fanhui" >  </a>
				<h1 class="mp-header-title" >【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</h1>
				<span class="mp-header-right" ></span>
			</div>
		</router-link>
	 	<div class="mp-imgavatar">
	 		<img class="mp-imgavatar-img" src="../../../assets/img/onedaytour/xwkoneday1.jpg"/>
	 		<div class="mp-imgavatar-mask"></div>
	 		<div class="mp-imgavatar-infocon">
	 			<span class="mp-imgavatar-left">出发地：北京</span>
	 			<span class="mp-imgavatar-right">国中青</span>
	 		</div>
	 	</div>
	 	<div class="mp-prdcard-con">
	 		<h3 class="mp-prdcard-con-name">【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</h3>
	 		<div class="mp-prdcard-pricecon">
	 			<em >￥</em>
	 			<span class="mp-prdcard-pricetext">148</span>
	 			<span class="mp-prdcard-gray">起</span>
	 			<span class="mp-bookingahead-text">可订明日</span>
	 			<span class="mp-prdcard-supplier">已售：3463</span>
	 		</div>
	 	
	 		<div class="mp-prdcard-tagcon">
		 		<div class="mp-prdcard-tag-item">
		 			<span class="mp-prdcard-tag-icon mpg-iconfont"></span>
		 			<span class="mp-prdcard-tag-desc">条件退</span>
		 		</div>
		 		<div class="mp-prdcard-tag-item">
		 			<span class="mp-prdcard-tag-icon mpg-iconfont"></span>
		 			<span class="mp-prdcard-tag-desc">铁定成团</span>
		 		</div>
	 			<div class="mp-prdcard-tag-item">
	 				<span class="mp-prdcard-tag-icon mpg-iconfont"></span>
	 				<span class="mp-prdcard-tag-desc">无自费</span>
	 			</div>
		 		<div class="mp-prdcard-tag-item">
		 			<span class="mp-prdcard-tag-icon mpg-iconfont"></span>
		 			<span class="mp-prdcard-tag-desc">无购物</span>
		 		</div>
	 		</div>
	 	</div>
	 		<div class="mp-commentsinfo-con">
		   		<a href="#" class="mpg-linkarea">
			        <span class="mp-commentswell-score">4.9</span>
			        <span class="mp-commentswell-text">分</span>
			        <span class="mp-comments-tagscore">非常满意</span>
			        <span class="mp-comments-totalnum">用户评论(284)&nbsp;
			        	<span class="mp-iconfont mp-comments-rightarrow">F</span>
			        </span>
		        </a>
			</div>
			<div class="mp-border-top" >
			    <div class="mp-comments-item">
			    	<a href="#" class="mpg-linkarea" >
			        <div class="mp-content-level">
			            <span class="mpf-starlevel" style="width:1.5rem;font-size:.2rem;">
			                <strong class="mpg-iconfont mpf-starlevel-gain" style="width:100%">BBBBB</strong>
<!--			                <span class="mpg-iconfont mpf-starlevel-total">BBBBB</span>-->
			            </span>
			            <span class="mp-comments-date">v*7&nbsp;&nbsp;2017-11-03</span>
			        </div>
			       </a>
			        <p class="mp-wellcomments-text mp-ellipsis2">刘俊涛导游非常热情贴心，幽默，玩的非常开心，长心，幽默，玩的非常开心，长心，幽默，玩的非常开心，长心，幽默，玩的非常开心，长心，幽默，玩的非常开心，长心，幽默，玩的非常开心，长心，幽默，玩的非常开心，长城这么太太太难爬了，连滚带爬爬完😬😬😬</p>
			    </div>
			</div>
 	</div>
</template>

<script>export default {
	data() {
			return {
				scroll: ''
			}
		},
		methods: {
			menu() {
				this.scroll = document.documentElement.scrollTop||document.body.scrollTop;
			}
		},
		mounted() {
			window.addEventListener('scroll', this.menu)
  		},
  		beforeDestroy: function () {
            window.removeEventListener("scroll", function () {
                this.scroll = document.body.scrollTop||document.documentElement.scrollTop;
            }, false);
        },

   		computed: {
            style: function () {
                if (scroll>=1) {
                    return "opacity:1;);"
                } else {
                    return "opacity:" + this.scroll/ 150
                }
            },
        }
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		background: #f1f5f6;
	}
	.mp-header {
       	position: fixed;
	    width: 100%;
	    height: .88rem;
    	background: #00bcd4;
    	z-index: 100;
	    top: 0px;
	    left: 0px;
	    display: block;
	    opacity: 0;
	}
	.mp-header-left {
	    left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	   	position: absolute;
    	font-size: .36rem;
    	color: #fff;
   		text-align: center;
	}
	.mp-header-title {
	    overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
	.mp-header-right {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #fff;
	}
	.mp-imgavatar{
		position: relative;
		overflow: hidden;
		height: 4rem;
	}
	.mp-imgavatar-img{
		width: 100%;
		min-height: 4rem;
	}
	.mp-imgavatar-infocon{
		position: absolute;
		overflow: hidden;
		left:0;
		font-size: 0.24rem;
		bottom: 0;
		width: 100%;
	}
	.mp-imgavatar-left{
		overflow: hidden;
		height: .34rem;
		display: inline-block;
		margin-bottom: .22rem;
		margin-left: 0.22rem;
		color: #fff;
		line-height: .34rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-imgavatar-right{
		overflow: hidden;
		height: .34rem;
		display: inline-block;
		float: right;
		margin-bottom: .22rem;
		margin-right: 0.22rem;
		color: #fff;
		line-height: .34rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-prdcard-con{
		position: relative;
		margin-top:-.1rem;
		padding:.2rem .2rem 0 .2rem;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
	}
	.mp-prdcard-con-name{
		overflow: hidden;
		display: -webkit-box;
		color:#000000;
		font-size: .36rem;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-height: 0.44rem;
	}
	.mp-prdcard-pricecon{
		overflow: hidden;
		margin: .16rem 0;
		height:.48rem;
	}
	.mp-prdcard-pricetext{
		color:#FF8300;
		font-size: .48rem;
	}
	.mp-prdcard-gray{
		color:#9E9E9E;
		font-size: .24rem;
	}
	.mp-bookingahead-text {
	    color: #616161;
	    font-size: .24rem;
	    margin-left: .2rem;
	}
	.mp-prdcard-supplier {
	    color: #616161;
	    float: right;
	    height: .24rem;
	    margin-top: .2rem;
	}
	.mp-prdcard-con {
	    position: relative;
	    margin-top: -.1rem;
	    padding: .2rem .2rem 0 .2rem;
	    background: #fff;
	    border-radius: .1rem .1rem 0 0;
	}
	.mp-prdcard-tagcon {
	    overflow: hidden;
	    padding-bottom: .2rem;
	    font-size: 0;
    }
    .mp-prdcard-tag-item:not(:last-child) {
	    margin-right: .2rem;
	}
    .mp-prdcard-tag-item {
	    float: left;
	    height: .34rem;
	    font-size: .24rem;
	    line-height: .34rem;
	}
	.mp-prdcard-tag-icon {
	    margin-right: .04rem;
	    color: #00afc7;
	    font-size: .28rem;
	    vertical-align: -.02rem;
	}
	.mp-prdcard-tag-desc {
	    color: #616161;
	}
	.mp-commentsinfo-con {
	    position: relative;
	    margin-top: .2rem;
	    margin-bottom: .03rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.mpg-linkarea {
	    position: absolute;
	    z-index: 2;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}
	.mp-commentswell-score {
	    font-size: .4rem;
	    color: #00afc7;
	    margin-left: .2rem;
	}
	.mp-commentswell-text {
	    color: #00afc7;
	}
	.mp-comments-tagscore {
	    display: inline-block;
	    margin-left: .1rem;
	    color: #616161;
	}
	.mp-comments-totalnum {
	    float: right;
	    position: relative;
	    top: .25rem;
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
	}
	.mp-comments-rightarrow {
	    /*position: relative;*/
	    /*top: .02rem;*/
	    font-size: .24rem;
	}
	.mp-border-top{
		padding: .1rem .2rem;
		background: #fff;
	}
	.mpg-linkarea {
	    position: absolute;
	    z-index: 2;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}
	.mp-comments-item{
		position: relative;
	    margin-top: .2rem;
	    color: #616161;
	    background-color: #fff;
	    padding: .2rem 0 
	}
	.mp-wellcomments-text.mp-ellipsis2 {
    line-height: .4rem;
}
	.mp-ellipsis2, .mpg-ellipsis2 {
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.mpf-starlevel {
	    display: inline-block;
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}
	.mp-comments-date {
	    float: right;
	    margin-left: .2rem;
	    color: #616161;
	}
</style>

