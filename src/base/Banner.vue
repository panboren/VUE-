<template>
  <div class="bus_nav" id="busNav">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .bus_nav {
    position: relative;
    width: 100%;
    height: 100%;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  img[lazy=loading] {
      margin:auto;
      width: 15px;
      height: 15px;
    }
   h4{
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
    font-size: 24px;
    letter-spacing: 5px;
    font-weight: normal;
    width: 100%;
    color:#fff;
    font-style: normal;
   }
  }

  /*适配*/


  @media all and(max-width: 760px){
    #busNav{
      img{
        height: 135px;
      }
      h4{
        font-size: 20px;
        letter-spacing: 4px;
      }
    }

  }
  @media all and(max-width: 500px){
    #busNav{
      img{
        height: 125px;
      }
      h4{
        font-size: 18px;
        letter-spacing: 2px;
      }
    }
  }
  @media all and(max-width: 375px){
    #busNav{
      img{
        height: 100px;
      }
      h4{
        font-size: 16px;
        letter-spacing: 1px;
      }
    }
  }




</style>
