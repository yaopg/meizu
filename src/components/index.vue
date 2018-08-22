<template>
  <div class="hello">
    <header>
      <div class="one">
        <div class="caidan"><i class="iconfont icon-htmal5icon35"></i></div>
        <div class="logo"><img src="src/assets/image/logo.jpg" alt=""></div>
        <div class="icon"><router-link to="/search"><i class="iconfont icon-sousuo"></i></router-link><i class="iconfont icon-gouwuche"></i></div>
      </div>
      <div class="two">
        <ul>
          <li><router-link to="/" id="current">推荐</router-link></li>
          <li><router-link to="/moble">手机</router-link></li>
          <li><router-link to="/mount">配件</router-link></li>
          <li><router-link to="/video">影音</router-link></li>
          <li><router-link to="/code">智能数码</router-link></li>
          <li><router-link to="/life">居家生活</router-link></li>
        </ul>
      </div>
    </header>
    <div class="main">
       <v-main_1></v-main_1>
       <v-main_2></v-main_2>
       <v-main_3></v-main_3>
       <v-main_4></v-main_4>
       <v-main_5></v-main_5>
       <v-foot></v-foot>
    </div>
  </div>
</template>

<script>
import main_1 from './main_1.vue'
import main_2 from './main_2.vue'
import main_3 from './main_3.vue'
import main_4 from './main_4.vue'
import main_5 from './main_5.vue'
import foot from './foot.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
        'v-main_1':main_1,'v-main_2':main_2,'v-main_3':main_3,'v-main_4':main_4,'v-main_5':main_5,'v-foot':foot
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
  header{
    width:100%;
    background:white;
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
    position:fixed;
    z-index:99;

  }
  header>.one{
    display: flex;
  }
  .caidan{
    width:10%;
  }
  .logo{
    float:left;
    width:80%;
    height:30px;
    line-height:30px;
    text-align:center;

  }
  .one>.icon{
    width:10%;
    height:30px;
    line-height:30px;
    text-align:center;
    padding-left:10px;
    padding-right:30px;
  }
  i{
    padding-right:10px;
    font-size:5vw;
  }
  .two{
    display:flex;
    margin-top:20px;
  }
  .two>ul{
    width:100%;
    display:flex;
  }
  .two>ul>li{
    box-sizing: border-box;
    padding-bottom: 10px;
    margin-right: 7%;
    white-space: nowrap;
  }
  .two>ul>li:first-child{
    margin-left:0%;
    box-sizing: border-box;
    border-bottom:2px solid #12bdef;
  }
  .two>ul>li:last-child{
    margin-right:0px;
  }
  .two>ul>li>a{
    text-decoration: none;
    color:#333;
  }
  #current{
    color:#12bdef;
  }
  .main{
    padding-top: 100px;
  }
  router-link{
   text-decoration:none;
  }
</style>
