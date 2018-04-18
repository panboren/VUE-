<template>
  <div class="content my_swiper" id="info">
      <swiper :options="swiperOption" class="slice_main">
        <swiper-slide>
          <div class="index index1">
            <div class="info">
              <h3>{{infotitle1}}</h3>
              <em>{{infocode1}}</em>
              <h6>{{infotext1}}</h6>
            </div>
            <div class="home_bg"></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="index index2">
            <div class="info">
              <h3>{{infotitle2}}</h3>
              <em>{{infocode2}}</em>
              <h6>{{infotext2}}</h6>
            </div>
            <div class="home_bg"></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="index index3">
            <div class="info">
              <h3>{{infotitle3}}</h3>
              <em>{{infocode3}}</em>
              <h6>{{infotext3}}</h6>
            </div>
            <div class="home_bg"></div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" id="focus" slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
      <MFooter></MFooter>
  </div>
</template>
<script>
  import MFooter from '../base/MFooter';
  export default {
    name: 'Home',
    data() {
      return {
        infotitle1: '科技炼金，融汇未来',
        infocode1: 'FUNG FINTECH',
        infotext1: '风速实业，顺势而为，以先进的互联网信息技术，革新传统金融行业产品和服务，提升服务品质和效率，不断优化用户体验',
        infotitle2: '资本有道 兴邦有责',
        infocode2: 'VALUE VIEW',
        infotext2: '风速实业坚定探索发展路径，不忘初心，身负兴邦强国的责任与担当',
        infotitle3: '同心同行 风速相伴',
        infocode3: 'COOPERATIVE',
        infotext3: '风速实业以合作伙伴的关系定义企业与员工，相信相同的价值观可以促进彼此共同前行',
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,

          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    mounted(){
      Vue.use(VueAwesomeSwiper);
    },
    components: {MFooter}
  }
</script>
<style scoped lang="less">
  .content {
    height: 100%;
    width: 100%;
    overflow: hidden;
    /*轮播图*/
    .slice_main {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    .index {
      position: relative;
      width: 100%;
      height: 100%;

      .home_bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("../image/bg-dot.png");
      }

    }
    .index1 {
      background: url('../image/indexpic01.jpg') center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .index2 {
      background: url('../image/indexpic02.jpg') center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .index3 {
      background: url('../image/indexpic03.jpg') center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    /*中间内容区*/
    .info {
      position: absolute;
      top: 30%;
      width: 100%;
      color: #fff;
      z-index: 100;
      text-align: center;
      h3 {
        font-size: 26px;
      }
      em {
        display: inline-block;
        font-size: 34px;
        color: #45caff;
        margin-top: 25px;
        font-style: normal;
        font-weight: bold;
        border-bottom: 2px solid #45caff;
      }
      h6 {
        margin: 30px auto;
        width: 57%;
        height: 25px;
        font-weight: normal;
        line-height: 35px;
        font-size: 20px;

      }
    }
  }

  /*适配*/
  /*轮播图区*/

  @media screen and(min-width: 640px)and(max-width: 799px) {
    #focus {
      .info{
        h6{
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
  @media all and(max-width: 500px) {
    #info {
      #focus {
        bottom: 95px;

      }
      .info {
        top: 25%;
        h3 {
          font-size: 22px;
        }
        em {
          font-size: 32px;
        }
        h6 {
          font-size: 16px;
          width: 85%;
          margin: 0 auto;
        }
      }
    }
  }

  @media all and(max-width: 375px) {
    #info {
      #focus {
        bottom: 85px;

      }
      .info {
        top: 20%;
        h3 {
          font-size: 20px;
        }
        em {
          font-size: 28px;
        }
        h6 {
          font-size: 14px;

        }
      }
    }
  }


</style>
