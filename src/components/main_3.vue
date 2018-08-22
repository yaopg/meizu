<template>
<div class="mount">
				<h3>智能配件</h3>
				<div class="mount_1">
					<div class="mount_vc">
						<img v-bind:src="msg[0]" width="100%" alt="">
					</div>
					<div class="mount_vc bg1">
						<h4>{{h4[0]}}</h4>
						<p>{{p[0]}}</p>
						<span>{{span[0]|capitalize}}</span>
					</div>
				</div>
				<div class="mount_1">
					<div class="mount_vc bg2">
						<h4>{{h4[1]}}</h4>
						<p>{{p[1]}}</p>
						<span>{{span[1]|capitalize}} </span>
					</div>
					<div class="mount_vc">
						<img img v-bind:src="msg[1]" width="100%" height="100%" alt="">
					</div>
				</div>
				<div class="mount_1">
					<div class="mount_vc">
						<img img v-bind:src="msg[2]" width="100%" alt="">
					</div>
					<div class="mount_vc bg3">
						<h4>{{h4[2]}}</h4>
						<p>{{p[2]}}</p>
						<span>{{span[2]|capitalize}} </span>
					</div>
				</div>
				<div class="mount_1 bd">
					<div class="mount_vc bg4">
						<h4>{{h4[3]}}</h4>
						<p>{{p[3]}}</p>
						<span>{{span[3]|capitalize}} </span>
					</div>
					<div class="mount_vc">
						<img img v-bind:src="msg[3]" width="100%" height="100%" alt="">
					</div>
				</div>
				<div class="mount_tc" v-for="v in mou">
					<img v-bind:src="v.src" alt="">
					<span class="sp1">{{v.sp1}}</span>
					<span class="sp2">{{v.sp2}}</span>
					<span class="sp3">{{v.sp3|capitalize}} <s class="sp2">{{v.s|capitalize}}</s></span>
				</div>

			</div>
</template>
<script>

export default {
  data () {
    return {
    msg:[],
    h4:[],
    p:[],
    span:[],
    mou:[]
    }
  },
   mounted(){
   var url="data/main_3.json";
	      	this.$axios.get(url)
	       .then(response=>{ this.msg=response.data.pic,this.h4=response.data.h4,this.p=response.data.p,this.span=response.data.span,this.mou=response.data.mou})
	       .catch(error=>{ console.log(error)})
   },
   filters: {
  	capitalize: function (value) {
    if (!value) return ''
    return "￥"+value
  }
}
  		
}
</script>
<style scoped>
.mount{
	overflow:hidden;
}
.mount>h3{
	margin-bottom:30px;
	margin-top:30px;
	text-align:center;
	position:relative;
	font-size:4vw;
}
.mount>h3:after{
	position:absolute;
	content: '';
	width: 10vw;
	height: .6vw;
	background:#ff6363;
	left: 45%;
	bottom:-20px;
}
.mount_1{
	display:flex;
}
.mount_vc>img{
	width: 100%;
	height: 100%;
	object-fit:cover;
}
.mount_1>.mount_vc{
	color:white;
	width:50%;
	box-sizing:border-box;
}
.mount_vc>p{
	font-size: 3vw;
	color: rgba(255,255,255,.7);
	position:relative;
	margin-bottom:20px;
}
.mount_vc>p::after{
	position:absolute;
	position: absolute;
	content: '';
	width: 5vw;
	height: .5vw;
	background: #fff;
	left: 0;
	bottom: -2vw;
}
.bg1{
	padding:9%;
	background:#55c3c3;
}
.bg2{
	padding:9%;
	background:#ffae45;
}
.bg3{
	padding:9%;
	background:#7063c9;
}
.bg4{
	padding:9%;
	background:#f55c5c;
}
.mount_tc{
	box-sizing: border-box;
	width:50%;
	padding-right:2px;
	float:left;
	background:#fff;
	border: .5vw solid #ccc;
}
.bd{
	border-bottom: .5vw solid #ccc;
}
.mount_tc>img{
	width:100%;
	object-fit:cover;
	box-sizing: border-box;
	padding-left:15px;
	padding-right:15px;


}
.mount_tc>span{
	display:block;
	text-align:center;
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