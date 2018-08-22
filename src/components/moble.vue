<template>
	<div class="moble">
		<header>
			<h3>
				<router-link to="/"><i class="iconfont icon-icon--"></i></router-link>
				手机
				<router-link to="/search"><i class="iconfont icon-sousuo"></i></router-link>
			</h3>
			<div>
				<ul class="cu">
				    <li id="current">全部</li>
				    <li>价格</li>
				    <li><i class="iconfont icon-viewgrid"></i></li>
				</ul>
			</div>
		</header>
		<div class="mat">
			<div class="moble_vc" v-for="v in msg">
				<img v-bind:src="v.src" width="100%" alt="">
				<span class="sp1">{{v.sp1}}</span>
				<span id="sp2" >{{v.sp2}}</span>
				<span class="sp3">{{v.sp3|capitalize}}</span>
			</div>
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
   var url="data/moble.json";
	      	this.$axios.get(url)
	       .then(response=>{ this.msg=response.data.moble})
	       .catch(error=>{ console.log(error)})

  }, filters: {
  	capitalize: function (value) {
    if (!value) return ''
    return "￥"+value
  }
  }
}
</script>
<style scoped>
	*{
	    margin:0px;
	    padding:0px;
	    list-style:none;
	}
	header{
		width:100%;
		padding-top:10px;
		background:#fff;
		position:fixed;
		box-sizing:border-box;
		color:#333;
	} 
	ul{
		overflow:hidden;
		border-bottom:1px solid #aaa;
		bockground:red;
	}
	h3{
		height:30px;
		text-align:center;
		line-height:30px;
		color:#333;
		font-size:4vw;
	}
	h3 i{
	font-size:5vw;
		color:#aaa;
	}
	.icon-icon--{
		float:left;
	}
	.icon-sousuo{
	float:right;
	padding-right: 20px;
	}
	header ul>li{
		float:left;
		list-style:none;
		width:33.33%;
		text-align:center;
		height:30px;
		line-height:30px;
		margin-top:10px;
		margin-bottom:10px;
	}
	#current{
    	color:#12bdef;
  }
  .icon-viewgrid{
	  color:#aaa;
	  font-size:24px;
  }
  .mat{
	 overflow:hidden;
	 padding-top:90px;
	}
  .moble_vc{
		width:50%;
		float:left;
		padding-top:20px;
		padding-left:5px;
		padding-right:5px;
		border: 0.5vw solid #ccc;
		box-sizing:border-box;
		min-height:220px;
		padding-bottom:10px;
	}
	.moble_vc.img{
		width:100%;
		height:100%;
		object-fit:cover;
	}
	.moble_vc>span{
		display:block;
		text-align:center;
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.sp1{
		font-size: 3vw;
	    color: #666;
	}
	#sp2{
    	
	    font-size: 3vw;
	    color:#e82b4b;
	}
	.sp3{
		font-size: 3vw;
	    color: #e82b4b;
	}
</style>