<template>
	<div>
	 	<div class="mp-prddetail-group mp-tab-group"  v-bind:style="style">
			    <div class="mp-tab mpg-flexbox mp-border-bottom" v-on:click="commentChangeclick">
			        <div  v-for="(item,index) in datalist"  :class="{'mp-tab-item':true, 'mpg-flexbox-item':true, 'mp-tab-active':index==active}" :flag="index" >{{datalist[index]}}</div>
			    </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				scroll: '',
				datalist:['行程介绍','费用说明','使用说明'],
				mainOffsetTop: 0,
				tabOffsetHeight: 0,
				tabeleOffsetHeight:0,
				headerOffsetHeight: 0,
				expenseElementOffsetTop: 0,
				expenseElementOffsetHeight: 0,
				instructionsElementOffsetTop: 0,
				haveGetOffset :false,
			}
		},
		methods: {
			menu() {
				var this_=this
				this_.scroll = document.documentElement.scrollTop||document.body.scrollTop;
			},
			commentChangeclick:function(event){
			 	var fl=event.target.getAttribute("flag");
				if(fl==0){
					document.body.scrolltop=this.mainOffsetTop
					document.documentElement.scrollTop=this.mainOffsetTop
				}else if(fl==1){
					document.body.scrolltop=this.mainOffsetTop+this.tabOffsetHeight+this.tabeleOffsetHeight
					document.documentElement.scrollTop=this.mainOffsetTop+this.tabOffsetHeight+this.tabeleOffsetHeight
				}else{
					document.body.scrolltop=this.expenseElementOffsetTop+this.expenseElementOffsetHeight-this.tabeleOffsetHeight-this.headerOffsetHeight
					document.documentElement.scrollTop=this.expenseElementOffsetTop+this.expenseElementOffsetHeight-this.tabeleOffsetHeight-this.headerOffsetHeight
				}
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
            style:function () {
                if (this.scroll>=400) {
                    return "position:fixed;top:30px;z-index:90;width:100%"
                } else {
                    return "position:relative" 
                }
            },
            active: function () {
				var index = 0;
				var criticalValue_1 = this.mainOffsetTop+this.tabOffsetHeight
				var criticalValue_2 = this.expenseElementOffsetTop+this.expenseElementOffsetHeight-this.mainOffsetTop
				if (this.scroll <= criticalValue_1) {
					index = 0
				} else if (this.scroll > criticalValue_1 && this.scroll <= criticalValue_2) {
					index = 1;
				} else {
					index = 2;
				}
				return index;
			},
       },
       updated: function () {
			if (!this.haveGetOffset) {
				var headerElement = document.querySelectorAll('.mp-header');
				var tabElement = document.querySelectorAll('.mp-tab');
				var  tabMainElement= document.querySelectorAll('.mp-prddetail-content');
				this.mainOffsetTop = tabMainElement[0].offsetTop;
				this.tabOffsetHeight = tabMainElement[0].offsetHeight;
				var  expenseElement= document.querySelectorAll('#feeGroup');
				this.headerOffsetHeight = headerElement[0].offsetHeight;
				this.tabeleOffsetHeight = tabElement[0].offsetHeight;
				this.expenseElementOffsetTop = expenseElement[0].offsetTop;
				this.expenseElementOffsetHeight = expenseElement[0].offsetHeight;
			}
		}
	}
</script>

<style>
	.mp-tab-group {
	    min-height: .6rem;
	}
	.mp-prddetail-group {
	    margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;
	}
	.mp-tab {
	    overflow: hidden;
	    margin-bottom: -.2rem;
	    background-color: #fff;
	}
	.mpg-flexbox {
	    display: -webkit-box;
	    display: -moz-box;
	    display: -webkit-flex;
	    display: -moz-flex;
	    display: -ms-flexbox;
	    display: flex;
	    width: 100%;
	}
	.mp-tab-active {
	    position: relative;
	    border-bottom: .04rem solid #00afc7;
	    color: #00afc7;
	}
	.mp-tab-item {
	    display: block;
	    height: .4rem;
	    padding: .2rem 0;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	    text-align: center;
	}
	.mpg-flexbox-item, .mpg-flexbox-layout {
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -webkit-flex: 1;
	    -moz-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	}
</style>
		