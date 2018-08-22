<template>
	<div class="moble">
		<h3>智能手机</h3>
		<div v-for="v in fa" class="in">
			<img v-bind:src="v.src" width="100%" alt="">
		</div>
		<div class="moble_vc" v-for="v in msg">
			<img v-bind:src="v.src" width="100%" alt="">
			<span class="sp1">{{v.sp1}}</span>
			<span class="sp2" >{{v.sp2}}</span>
			<span class="sp3">{{v.sp3}}</span>
		</div>
	</div>
</template>
<script>

export default {
  data () {
    return {
    	msg:[],
    	fa:[]
    }
  },
   mounted(){
  			var url="data/main_2.json";
	      	this.$axios.get(url)
	       .then(response=>{ this.msg=response.data.main,this.fa=response.data.fa})
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
	.moble{
		width:100%;
		overflow:hidden;
	}
	.moble>h3{
		text-align:center;
		margin-top:30px;
		margin-bottom:30px;
		position:relative;
		font-size:4vw;
	}
	.moble>h3:after{
		position:absolute;
		content: '';
		width: 10vw;
		height: .6vw;
		background:#0BBBEF;
		left: 45%;
		bottom:-20px;
	}
	.moble_vc{
		width:50%;
		float:left;
		padding-top:20px;
		padding-left:5px;
		padding-right:5px;
		border: 0.5vw solid #ccc;
		min-height:220px;
		box-sizing:border-box;
	}
	.moble_vc>span{
		display: block;
		text-align:center;
	}
	.sp1{
		font-size: 3.35vw;
	    color: #333;
	    font-weight: 700;
	}
	.sp2{
    	line-height: 4vw;
    	overflow: hidden;
	    font-size: 2.5vw;
	    color: #999;
	    white-space: nowrap;
	}
	.sp3{
		font-size: 4vw;
	    color: #e82b4b;
	}
</style>