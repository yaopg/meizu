<template>
	<div>
			<div class="swipe-wrapper">
			        <mt-swipe :auto="4000">
			            <mt-swipe-item v-for="v in msg" class="imt">
			            	<img v-bind:src="v.src" width="100%" alt="">
			            </mt-swipe-item>
       			    </mt-swipe>
    		</div>
			<div class="sect">
				<span><i><img src="src/assets/image/s1.png"></i>魅族官网商城</span>
				<span><i><img src="src/assets/image/s2.png"></i>全场顺丰包邮</span>
				<span><i><img src="src/assets/image/s3.png"></i>7天无理由退货</span>
			</div>
			<div class="secta">
				<ul>
					<li><img src="src/assets/image/07.png" width="100%" alt=""><span>超级福利站</span></li>
					<li><img src="src/assets/image/08.png" width="100%" alt=""><span>推荐有奖</span></li>
					<li><img src="src/assets/image/09.png" width="100%" alt=""><span>一周上新</span></li>
					<li><img src="src/assets/image/10.png" width="100%" alt=""><span>App专享</span></li>
				</ul>
			</div>
			<div class="bann">
				<div class="bann_1">
					<img v-cloak v-bind:src="pho[0]" width="100%" alt="">
				</div>
				<div class="bann_2">
					<div class="bann_2_1">
						<img v-cloak v-bind:src="pho[1]" width="100%" alt="">
					</div>
					<div class="bann_2_2">
						<img v-cloak v-bind:src="pho[2]" width="100%" alt="">
					</div>
				</div>
			</div>	
	</div>
</template>

<script>
export default {
  data () {
    return {
    	msg:[],
    	pho:[]
    }
  },
  mounted(){
  			var url="data/main_1.json";
	      	this.$axios.get(url)
	       .then(response=>{ this.msg=response.data.pic,this.pho=response.data.photo})
	       .catch(error=>{ console.log(error)})
  }
}
</script>

<style scoped>
	*{
    margin:0px;
    padding:0px;
    list-style:none;
    font-size:3.35vw;
  }
   .swipe-wrapper{
        width: 100%;
    }
    .imt>img{
    width:100%;
    object-fit:cover;
    }
  
    .mint-swipe-indicator{
    opacity:0.5;
    }
	.sect{
		color:#999999;
		padding:10px;
		width:100%;
		margin-bottom:20px;
		text-align:center;
		box-sizing:border-box;

	}
	.sect>span{
		display:inline-block;
		padding-right:3vw;
		padding-left:3vw;
	}
	.sect>span>i{
		display:inline-block;
		width: 3.51852vw;
    	height: 3.51852vw;
		border-radius:50%;
	}
	.sect>span>i>img{
		width:100%;
		height:100%;
		object-fit:cover;
	}
	.secta{
		display:flex;
		margin-bottom:30px;
	}
	.secta>ul{
		width:100%;
	}
	.secta>ul>li{
		float:left;
		width:25%;
		box-sizing:border-box;
		text-align:center;
	}
	.secta>ul>li>img{
		width:35%;
		display:block;
		margin:0 auto;
	    vertical-align:bottom;
	    height:50px;
	}
	.secta>ul>li>span{
		text-align:center;
		display:inline-block;
		margin-top:10px;

	}
	.bann_2{
		display:flex;
	}
	.bann_2_1{
		width:50%;
		padding-right:2px;
		box-sizing:border-box;
	}
	.bann_2_2{
		width:50%;
		padding-left:2px;
		box-sizing:border-box;
	}
</style>
