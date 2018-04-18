<template>
    <footer class="footer" :class="{changebg:changebg}" id="footerMain">
      <h5>
        <p>深圳风速实业有限公司</p>
        <p>深圳市福田区市花路5号长富金茂大夏2501室&nbsp;&nbsp;&nbsp;0755-83478293</p>
      </h5>
    </footer>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
              changebg:true,
            }
        },
      watch:{},
        created() {
          if(this.$route.path == '/home'){
            this.changebg=true;
            console.log(this.changebg)
          }else{
            this.changebg=false;
            console.log(this.changebg)
          }
        },
        mounted() {

        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.footer{
  width: 100%;
  height: 86px;
  color: #ededed;
  background: #1e1e1e;
  z-index: 100;
  display: table;
  text-align: center;
  h5{
    z-index: 100;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    font-size:14px;
    font-weight: normal;
    padding: 0 20px;
    p{
      width: 100%;
      display: inline-block;
      overflow: hidden;
    }
  }
}
.changebg{
      position: fixed;
      left: 0;
      bottom: 0;
      opacity: .5;
      filter: alpha(opacity=50);
}

/*适配*/
/*footer区*/
@media all and(max-width: 760px){
  #footerMain {
    height: 75px;
  }
}
@media all and(max-width: 500px){
  #footerMain{
    height: 70px;
    h5{
      font-size:12px;
      p{
        font-size:12px;
      }
    }
  }
}
@media all and(max-width: 375px){
  #footerMain{
    height: 65px;
    h5{
      font-size:12px;
      p{
        font-size:12px;
      }
    }
  }
}





</style>
