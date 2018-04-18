<template>
    <div class="container" id="app">
       <!-- <MHeader></MHeader>-->
      <!--需要缓存的-->
     <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      &lt;!&ndash;正常的访问走下面&ndash;&gt;
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
       -->
      <router-view></router-view>
    </div>

</template>

<script>
  import MHeader from './base/MHeader.vue';
 /* import MFooter from './base/MFooter.vue';
  import Home from './components/Home.vue'*/
  export default {
    name: 'App',
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {
      MHeader,
     /* MFooter,*/
     /* Home*/
    }
  }
</script>

<style scoped lang="less">
  .container{
    font-family: "Microsoft YaHei";
    width: 100%;
   height: 100%;
  }
  .contents{
    margin-top:100px;
  }

 /*适配*/

  @media all and(max-width: 500px){
    .contents{
      margin-top:80px;
    }

  }
  @media all and(max-width: 375px){
    .contents{
      margin-top:65px;
    }
  }





  /*动画*/
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }


</style>
