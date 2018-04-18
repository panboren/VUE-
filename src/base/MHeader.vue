<template>
  <div class="header_main" :class="{changebg:changebg}" id="headerMain">
    <div class="header_in" id="headerIn">
      <h1 @click="backhome"><img :src="imgSrc" title="logo">深圳风速实业有限公司</h1>
      <ul class="list clear" :class="{showList:showList}" @click.stop="showList=!showList">
        <li>
          <router-link to="/home" :class="{changeText:changeText}">
           首页
          </router-link>
        </li>
        <li>
          <router-link to="/bus" :class="{changeText:changeText}">
            公司业务
          </router-link>
        </li>
        <li>
          <router-link to="duty" :class="{changeText:changeText}">
            社会责任
          </router-link>
        </li>
        <li>
          <router-link to="culture" :class="{changeText:changeText}">
            企业文化
          </router-link>
        </li>
        <li>
          <router-link to="/about" :class="{changeText:changeText}">
            关于风速
          </router-link>
        </li>
        <li>
          <router-link to="join" :class="{changeText:changeText}">
            加入我们
          </router-link>
        </li>
      </ul>
    </div>
    <i class="menu" @click.stop="showList=!showList" :class="{ico_bg1:icoBg1,ico_bg2:icoBg2}"></i>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        imgSrc:require('../image/logob.png'),
        changeText:false,
        changebg:false,
        showList:false,
        icoBg1:false,
        icoBg2:false,
      }
    },
   watch:{
      $route(newVal,oldVal){
        if(newVal.path == '/home'){
          this.imgSrc=require('../image/logoa.png');
          this.changeText=true;
          this.changebg=false;
          this.icoBg2=false;
          this.icoBg1=true;
         }else{
          this.imgSrc=require('../image/logob.png');
          this.changeText=false;
          this.changebg=true;
          this.icoBg2=true;
          this.icoBg1=false;
        }
      }
   },
    methods: {
      backhome(){
        this.$router.push('/home');
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .header_main {
    position: fixed;
    top: 0;
    left: 0;
    Z-index:100;
    width: 100%;
    line-height: 100%;
    height: 100px;
    .header_in{
      width: 57%;
      height: 100%;
      margin: 0 auto;
     h1 {
      position: relative;
      float: left;
      height: 100%;
      cursor: pointer;
      line-height: 100%;
      font-size: 0;
      width: 182px;
        img {
          position: absolute;
          top: 50%;
          margin-top: -30px;
          width: 100%;
          height: 60px;
        }
        .title{
          display: none;
        }
    }
  .list {
    float: right;
    height: 100px;
    line-height: 100px;
    text-align: center;
    li {
      float: left;
      cursor: pointer;
      padding:0 20px;
      height: 100%;
      a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: inline-block;
        color:#333;
        font-size:18px;
      }
      .changeText{
        color:#fff
      }
      .router-link-active{
        color:#45caff !important;
      }
  }
  }
  }
    .menu{
      position: absolute;
      right: 20px;
      top: 50%;
      margin-top: -10px;
      display: none;
      width: 31px;
      cursor: pointer;
      height: 20px;
      background-repeat: no-repeat;
    }
    .ico_bg1{
      background: url("../image/nav_menu_index.png");
    }
    .ico_bg2{
      background: url("../image/nav_menu_others.png");
    }
  }
  .changebg{
    background: #fff;
  }

  /*适配*/
  /*header*/
  @media all and(max-width: 1500px){
    #headerIn{
      width: 80%;
    }
  }
  @media all and(max-width: 1200px){
    #headerIn{
      width: 100%;
      h1{
        margin-left: 40px;
      }
      .list{
        margin-right: 40px;
      }
    }
  }
  @media all and(max-width: 960px){
    #headerIn{
      .list{
        li{
          padding: 0 15px;
          a{
            font-size:14px;
          }
        }
      }
      h1{
        img{
          width: 150px;
          height: 50px;
        }
      }
    }
  }
  @media all and(max-width: 760px){
    #headerIn {
      .list {
        position: absolute;
        display: none;
        top: 65px;
        right: 9px;
        width: 15%;
        height: 300px;
        margin: 10px;
        li{
          width: 100%;
          text-align: left;
          height: 50px;
          line-height: 50px;
          display: inline-block;
          background: rgba(0,0,0,.4);
          a{
            width: 100%;
            height: 100%;
            color: #fff;
            display: inline-block;
          }
        }
      }
      .showList{
        display: block;
      }
    }
    #headerMain .menu {
      display: block;
    }
  }
  @media all and(max-width: 500px){
    #headerMain{
      height: 80px;
    }
    #headerIn .list{
      width: 18%;
    }
  }
  @media all and(max-width: 375px){
    #headerIn {
      h1{
        margin-left: 20px;
        img{
          width: 120px;
          height: 40px;
          top: 50%;
          margin-top: -20px;
        }
      }
      .list {
        width: 22%;
        top: 50px;
        li a{
          color: #fff;
          font-size: 12px;
        }
      }
    }
    #headerMain{
      height: 65px;
      .menu{
        width: 28px;
        height: 18px;
      }
    }
  }












</style>

