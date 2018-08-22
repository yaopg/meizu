<template>
	<div class="product">
		<h3>用户热评</h3>
		<div class="swipe-wrapper">
			<mt-swipe :auto="0">
			    <mt-swipe-item v-for="v in msg" class="imt">
			    	<div class="fit">
				    	<div class="product_1">
							<div><img v-bind:src="v.src" width="100%"  alt=""></div>
							<div class="prot">
								<div class="profile">
									<img v-bind:src="v.tic" alt="">
									<span>{{v.sp1}}</span>
								</div>
								<p>{{v.p}}</p>
								<span class="sp2">{{v.sp2}}</span>
							</div>
						</div>
						<div class="product_1">
							<div><img v-bind:src="v.src1" width="100%"  alt=""></div>
							<div class="prot">
								<div class="profile">
									<img v-bind:src="v.tic1" alt="">
									<span>{{v.sp3}}</span>
								</div>
								<p>{{v.p1}}</p>
								<span class="sp2">{{v.sp4}}</span>
							</div>
						</div>
			    	</div>
			    </mt-swipe-item>
       		</mt-swipe>
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
  			var url="data/main_4.json";
	      	this.$axios.get(url)
	       .then(response=>{ this.msg=response.data.product})
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
    height:100%;
    object-fit:cover;
    }
  
    .mint-swipe-indicator{
    opacity:0.5;
    }
	.product{
	background:#ccc;
}
h3{
	text-align:center;
	padding-top:30px;
	padding-bottom:30px;
	position:relative;
	font-size:4vw;
}
h3:after{
	position:absolute;
	content: '';
	width: 10vw;
	height: .6vw;
	background:#6fdc39;
	left: 45%;
	bottom:10px;
}
.fit{
	display:flex;
	width:100%;
}
.product_1{
	width:50%;
	box-sizing: border-box;
	background:#fff;
	border: .5vw solid #ccc;
	text-align: left;
	position:relative;
	min-height:216px;
}
.swipe-wrapper>.mint-swipe>.mint-swipe-indicators>.mint-swipe-indicators{
	bottom:-1px;
}
.product_1>i{
	display:block;
	position:absolute;
	width:9vw;
	height:9vw;
	background:#fff;
	bottom:15vw;
	right:3vw;
	border-radius: 50%;
	opacity:0.5;
}
.product_1>img{
	width:100%;
	height:100%;
	object-fit:cover;
	box-sizing: border-box;

}
.prot{
	box-sizing: border-box;
	padding:3vw;
	font-size:2.5vw;
	color:#333;
}
.prot>p{
	font-size:2.5vw;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	text-overflow:ellipsis;
	line-height:4vw;
	overflow: hidden;
	margin-top:1.5vw;
	margin-bottom:1.5vw;
}
.profile>img{
	width:5vw;
	height:5vw;
	border-radius: 50%;
}
.profile>span{
	margin-left:3vw;
	position:relative;
	top:-2vw;
}
.sp1{
		font-size: 3.35vw;
	    color: #333;
	    font-weight: 700;
	}
	.sp2{
		font-size: 2.5vw;
	    color: #999;
	}
	.sp3{
		font-size: 4vw;
	    color: #e82b4b;
	}
</style>
