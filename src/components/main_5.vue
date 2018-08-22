<template>
	<div class="vedio">
		<h3>精彩视频</h3>
		<div class="swipe-wrapper">
			<mt-swipe :auto="0">
			    <mt-swipe-item v-for="v in msg" class="imt">
			    	<div class="fit">
				    	<div class="product_1">
							<div><img v-bind:src="v.src" width="100%" alt=""></div>
							<div class="prot">
								<p>{{v.p}}</p>
							</div>
							<i></i>
						</div>
						<div class="product_1">
							<div><img v-bind:src="v.src1" width="100%" alt=""></div>
							<div class="prot">
								<p>{{v.p1}}</p>
							</div>
							<i></i>
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
    	msg:[]
    }
  },
  mounted(){
  			var url="data/main_5.json";
	      	this.$axios.get(url)
	       .then(response=>{ this.msg=response.data.vedio})
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
    .fit{
    display:flex;
    width:100%;
    }
    .vedio{
	width:100%;
	background:#ccc;
}
.vedio>h3{
	text-align:center;
	padding-top:30px;
	padding-bottom:30px;
	position:relative;
	font-size:4vw;
}
.vedio>h3:after{
	position:absolute;
	content: '';
	width: 10vw;
	height: .6vw;
	background:#cd46ff;
	left: 45%;
	bottom:10px;
}
  .product_1{
	width:50%;
	box-sizing: border-box;
	background:#fff;
	border: .5vw solid #ccc;
	text-align: left;
	position:relative;
}
.product_1>i{
	display:block;
	position:absolute;
	width:9vw;
	height:9vw;
	background:#fff;
	bottom:18vw;
	right:3vw;
	border-radius: 50%;
	opacity:0.5;
}
.product_1>i:after{
	position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 2vw solid transparent;
    border-left-color: #000;
    left: 45%;
    top: 32%;
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
</style>
