<template>
  <div class="contents">
    <Banner>
      <img v-lazy="imgUrl" :title="imgTitle">
      <h4>{{navtitle}}</h4>
    </Banner>
    <ul class="list" id="dutyList">
      <li v-for="(text,key) in listText" :key="key">
        <i>{{text.title}}</i>
        <div class="main_text">{{text.mainText}}</div>
      </li>
    </ul>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import Banner from '../base/Banner.vue';
  import MFooter from '../base/MFooter';
  export default {
    name: 'Duty',
    data () {
      return {
        imgTitle:'社会责任banner',
        navtitle:'让时间记录风速征程！',
        imgUrl:require('../image/dutybanner.jpg'),
        listUrl:require('../image/dutytextcul.png'),
        listText:[
          {
            title: '以人为本',
            mainText: '人才为企业发展提供源源不断的推动力，为企业创造价值保驾护航。我们珍惜每一位员工对企业的认同及付诸的辛劳，为员工提供全面而富有竞争力的薪酬包。不局限于法律法规要求的员工基本权益保障，公司额外为员工购买商业保险、工龄增加年假、团队活动、技能训练，致力于增强员工的归属感和幸福感。在风速，员工不仅在财务上收获回报，还在个人生活品质和能力成长上得到提升。'
          },
          {
            title: '回馈社会',
            mainText:'诚信经营，信守承诺，我们踏实经营自身业务，发展壮大。作为有责任感的企业，我们不仅为员工提供良好的就业机会和平台，还要回馈社会，促进社会和谐。我们将以资助、捐款或加入公益基金等方式，投入到教育、扶贫、环保和科技领域，旨在让更多的人过上美好的生活，实现伟大的“中国梦”。',
          },
        ]
      }
    },
    components:{
      Banner,
      MFooter
    }
  }
</script>
<style scoped lang="less">
  .contents{
    width: 100%;
    overflow-x: hidden;
    margin-bottom:150px;
    .list{
      width: 100%;
      li{
        width: 57%;
        margin: 0 auto;
        i{
          display: block;
          margin: 73px auto 0 auto;
          width: 187px;
          height: 100px;
          font-size: 22px;
          text-align: center;
          line-height: 100px;
          font-style: normal;
          color: #0f0f0f;
          background: url("../image/dutytextcul.png") no-repeat;
          background-size: 100% 100%;
        }
        div{
          width: 100%;
          text-align: justify;
          margin: 40px auto 0 auto;
          line-height: 30px;
          font-size: 14px;
          color: #535353;
        }
      }
    }
    img[lazy=loading] {
      margin:auto;
      width: 15px;
      height: 15px;
    }
  }

  /*移动端适配*/

  @media screen and(min-width: 750px)and(max-width: 799px){
    #dutyList{
      li{
        width: 100%;
      i{
        width: 177px;
        height: 90px;
        line-height: 90px;
        font-size: 20px;
      }
      .main_text{
        width: 80%;
        margin: 0 auto;

      }
    }
    }
  }
  @media screen and(max-width: 640px) {
    #dutyList {
      li {
        width: 100%;
        i {
          width: 167px;
          height: 88px;
          line-height: 88px;
          font-size: 18px;
        }
        .main_text {
          width: 85%;
          line-height: 28px;
          font-size: 14px;
        }
      }
    }
  }
  @media screen and(max-width: 375px) {
    #dutyList {
      li {
        width: 100%;
        i {
          font-size: 16px;
        }
        .main_text {
          width: 90%;
          line-height: 25px;
          font-size: 14px;
        }
      }
    }
  }







</style>
