<template>
	<div>
		<header>
				<router-link to="/"><i class="iconfont icon-icon--"></i></router-link>
				<div class="in"><i class="iconfont icon-sousuo"></i><input type="txt"></div>
				<button>搜索</button>
		</header>
		<div class="con">
			<div>大家都在搜</div>
			<ul>
				<li>魅族16th plus</li>
				<li>PRO 7</li>
				<li>魅蓝 E2</li>
				<li>魅蓝 S6</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	*{
	    margin:0px;
	    padding:0px;
	    list-style:none;
	}
	header{
		display:flex;
		width:100%;
		padding-top:10px;
		background:#fff;
		box-sizing:border-box;
		color:#333;
	} 
	.in{
		width:75%;
		background:#eee;
		border-radius:30px;
		height:9vw;
		line-height:9vw;
		padding:5px;
		box-sizing:border-box;
		position:relative;
	}
	
	input,button{
		outline:none;
		border:0px;
		background:transparent;
	}
	input{
	position:absolute;
	height:9vw;
	top:0px;
	left:45px;
	}
	button{
		height:9vw;
		line-height:9vw;
		margin-left:10px;
		font-size:4vw;
		color:#333;
	}
	.icon-icon--{
		font-size:9vw;
		color:#aaa;
	}
	.icon-sousuo{
		position:absolute;
		left:15px;
		top:0px;
		font-size:4vw;
	}
	.con{
		margin-top:30px;
		padding-left:20px;
		padding-right:20px;
		color:#333;
		font-size:4vw;
	}
	.con>ul>li{
		float:left;
		margin-right:10px;
		margin-top:10px;
		border-radius:20px;
		border:1px solid #333;
		padding:10px;
	}
</style>