<template>
  <div class="contents">
    <Banner>
      <img  :title="imgTitle"  v-lazy="imgUrl" class="imgs">
      <h4>{{navtitle}}</h4>
    </Banner>
    <ul class="bus_list" id="busList">
        <li v-for="(item,key) in buscontes" :class="{list_bg:(key%2!=0)}" :key="key">
          <div class="bus_wrap">
            <div class="bus_l" :class="{float_l:!item.float_l,float_r:item.float_r}">
                <h3>{{item.title}}</h3>
                <div class="bus_text">
                  {{item.bustext}}
                </div>
            </div>
            <div class="bus_r" :class="{float_l:item.float_l,float_r:!item.float_r}">
              <img v-lazy="item.imgurl" :title="item.title">
            </div>
          </div>
        </li>
    </ul>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import Banner from '../base/Banner.vue';
  import MFooter from '../base/MFooter';
  export default {
    name: 'Home',
    data() {
      return {
        imgTitle:'公司业务',
        navtitle: '让时间记录风速征程！',
        imgUrl: require('../image/businessbanner.jpg'),
        buscontes: [
          {
            title: '珠宝商城',
            float_r:true,
            float_l:true,
            imgurl: require('../image/business01.png'),
            bustext: '珠宝商城意欲摒除所有无意义于消费者的附加费用，抽丝剥茧，以薄利多销的方式给予消费者价格保障。基于深厚的专业背景和业务资源，风速实业对接多家合作伙伴，减少中间环节，直接获得准确、有效的实时资讯。透明、快捷、稳健的珠宝首饰资讯和电子商务服务，有助于客户了解市场行情，把握机会。客户可通过简单、直观的操作界面，实时掌握资讯及订单执行情况，体验轻松购物。'
          },
          {
            title: '运维中心',
            float_r:false,
            float_l:false,
            imgurl: require('../image/business02.png'),
            bustext: '中国市场对于环球市场的影响力逐渐显现，各国商贾纷纷进驻中国，欲大展拳脚。而在不同行业里，中国固有的经营特色、本土属性却让不少公司水土不服，失败而归，当中更不乏知名的跨国大企业。我们为外商企业开拓中国市场提供形象推广、渠道建设的专业顾问服务。建立紧密沟通，为本地客户了解产品和服务提供支持。为潜在客户量身定做高效益的托管服务，稳健发展，成本可控。'
          },
          {
            title: '技术支持',
            float_r:true,
            float_l:true,
            imgurl: require('../image/business03.png'),
            bustext: '我们深信，未来的时代对大数据的需求日益旺盛，善用数据能够为各行各业带来新的经营思维和巩固行业地位，发挥优势，尤其是各国政府提倡的金融科技行业。金融虽是古老的行业，却又历久不衰，其遵循的原则是不断创新，引领行业革新进步。我们能让企业快速反应，及时调整策略，完善风险管理。深度挖掘大数据、整合数据、掌握流量。为各行业提供多元化的桥接服务，连接不同板块，汇流成海。'
          },
          {
            title: '金融咨询',
            float_r:false,
            float_l:false,
            imgurl: require('../image/business04.png'),
            bustext: '基于核心团队的国际化专业背景和投资视野，公司提供贴心的咨询服务。帮助客户高效处理业务，以轻松便捷地应对不同情景下的业务操作，实现互惠共赢。我们凭借广阔的业务网络，结合客户自身的业务重点和需求，予以专业、全面的咨询建议，帮助客户实现多领域投资，分散风险，建立长期稳定的合作关系。配合强大的一站式客户后台管理功能，可精细化跟进客户所有流程，与客户零距离接触。'
          }
        ]
      }
    },
    components: {
      Banner,
      MFooter
    }
  }
</script>
<style scoped lang="less">
  .contents {
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 150px;
  }

  .bus_list {
    width: 100%;
    li {
      margin: 0 auto;
      width: 100%;
      overflow: hidden;
      height: 100%;
      .bus_wrap {
        width: 57%;
        height: 100%;
        margin: 0 auto;
        .bus_l {
          /*float: left;*/
          margin: 50px auto;
          display: inline-block;
          height: 346px;
           width: 50%;
            h3 {
              font-size: 30px;
              color: #0f0f0f;
              font-weight: normal;
            }
            .bus_text {
              margin-top: 25px;
              width: 100%;
              color: #535353;
              overflow: hidden;
              line-height: 30px;
              font-size: 14px;
              text-align: justify;
            }

        }
        .bus_r {
          position: relative;
          width: 50%;
          text-align: center;
          height: 346px;
          margin: 50px auto;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 360px;
            height: 233px;
          }
        }
        .float_l{
          float: left;
        }
        .float_r{
          float: right;
        }
      }
    }
    .list_bg {
      background: #fbfbfb
    }
  }
  img[lazy=loading] {
    margin:auto;
    width: 15px;
    height: 15px;
  }

  /*移动端适配*/
  @media all and(max-width: 1200px){
  .contents{
    margin-bottom: 75px;
  }
    #busList{
      .bus_wrap{
        width: 100%;
        .bus_l{
          width: 100%;
          height: 250px;
          margin: 30px auto;
          h3{
            width: 100%;
            text-align: center;
          }
          .bus_l {
            .bus_text {
              width: 75%;
              margin: 30px auto;
            }
          }
        }
        .bus_r{
          width: 100%;
          height: 250px;
          margin: 30px auto;
          img{
            left: 50%;
            top: 50%;
          }
        }
      }

    }
  }
  @media screen and(min-width: 750px)and(max-width: 799px){
    #busList{
      .bus_wrap {
        h3{
          font-size: 26px;
        }
        .bus_l{
          margin-bottom: 0;
        .bus_text{
          width: 80%;
          margin: 30px auto 0 auto;
          line-height: 25px;
        }}
       }
      }
  }
  @media screen and(max-width: 640px) {
    #busList {
      .bus_wrap {
        h3 {
          font-size: 22px;
        }
        .bus_l{
          margin-bottom: 0;
        .bus_text {
          width: 85%;
          margin: 30px auto 0 auto;
          line-height: 20px;
        }}
        .bus_r{
          height: 220px;
          margin: 0 auto 30px auto;
          img{
            width: 60%;
            height: 60%;
          }
        }

      }
    }
  }
  @media screen and(min-width: 319px)and(max-width: 375px){
    #busList {
      .bus_wrap {
        h3 {
          font-size: 18px;
        }
        .bus_l{
          margin-bottom: 0;
          .bus_text {
            line-height: 18px;
            font-size: 12px;
            width: 90%;
            margin: 25px auto 0 auto;
          }
        }
        .bus_r{
          height: 200px;
          margin: 0 auto 25px auto;
          img{
            top:60%
          }
        }
      }
    }
  }


</style>
