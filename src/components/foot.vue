<template>
	<div class="foot">
		<div class="foot_1">
			<ul>
				<li><img src="src/assets/image/52.jpg" alt=""></li>
				<li><img src="src/assets/image/53.png" alt=""></li>
				<li><img src="src/assets/image/54.png" alt=""></li>
				<li><img src="src/assets/image/55.png" alt=""></li>
			</ul>
			</div>
			<div class="foot_1">
				<div class="fo">
					<i><img src="src/assets/image/s4.png" alt=""></i>400-788-3333
				</div>
				<div class="fo">
					<i><img src="src/assets/image/s5.png" alt=""></i>在线客服
				</div>
			</div>
			<div class="foot_1">
				<p>粤ICP备13003602号 -2合字B2-20170010<br>营业执照©2018 Meizu All rights reserved  </p>
			</div>
		</div>
</template>
<script>
export default {
  data () {
    return {
    	msg:[]
    }
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
  .foot{
	background:#fff;
	width:100%;
	margin-bottom:20px;
}
.foot_1{
	width:100%;
	display:flex;
	padding-top:7vw;
	padding-left:4vw;
	padding-right:4vw;
	box-sizing: border-box;
}
.foot_1>ul{
	display:flex;
	width:100%;
}
.foot_1>ul>li{
	width:25%;
}
.foot_1>ul>li>img{
	width:100%;
	height:100%;
	object-fit:cover;
}
.foot_1>.fo{
	font-size:3.5vw;
	width:50%;
	box-sizing: border-box;
	text-align: center;
	line-height:10vw;
	border-radius: 5vw;
	background:#24bced;
	height:10vw;
	margin-left:3vw;
	margin-right:3vw;
	color:#fff;
}
.fo>i{
	display:inline-block;
	width:5.3vw;
	height:3vh;
	position:relative;
	top:1.45vw;
}
.fo>i>img{
	width:100%;
	height:100%;
	object-fit:cover;
}
.foot_1>p{
	width:70%;
	font-size:3.2vw;
	color: #999;
}
</style>
