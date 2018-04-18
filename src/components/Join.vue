<template>
  <div class="contents" id="join">
    <Banner>
      <img v-lazy="imgUrl" :title="imgTitle">
      <h4>{{navtitle}}</h4>
    </Banner>
    <div class="title_text">
      <h5>我们期待每一位有创见且勇于付诸行动的人加入风速。</h5>
      <h5>在这里，无论哪个部门，哪种职位，您都可以尽情施展自己的才华！</h5>
    </div>
    <div class="job_info" ref="jobinfo">
      <h2 class="job_info-title">
        <span>{{jobTitle}}</span>
      </h2>
      <div class="job_info_main" v-for="(info,index) in jobInfo" :key="index">
        <div class="job_info_header clear">
          <h5 class="job_info_header_title">{{info.job}}</h5>
          <p class="job_info_time"><span class="req">需求：{{info.number}}</span><span
            class="timer">发布时间：{{info.timer}}</span></p>
          <i class="job_ico" @click="downslice(info.oId,jobInfo)"></i>
        </div>
        <transition enter-active-class="listshow fadeInUp" leave-active-class="listhide fadeOut">
        <div class="job_lists" v-show="info.show">
            <ul class="job_info_duty">
              <li v-for="(info,index) in info.duty" :key="index">
                <p>{{info}}</p>
              </li>
            </ul>
            <ul class="job_info_duty job_info_req">
              <li v-for="(info,index) in info.require" :key="index">
                <p>{{info}}</p>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="job_emain">
      <div class="emain_wrap">
        <div class="job_emain_ico"><i></i></div>
        <h6 class="job_emain_text">
          <span>请将简历发送至</span>
          <strong>hr@fungfg.com,</strong>
          <span>我们会尽快与您取得联系。</span>
        </h6>
      </div>
    </div>
    <div class="job_weal" v-lazy:background-image="wealUrl">
      <div class="job_weal_lists">
        <h2 class="job_weal_title">
          <span>{{jobWealTitle}}</span>
        </h2>
        <ul class="job_weal_list">
          <li class="clear" v-for="(text,index) in jobWeal" :key="index">
            <em>{{text.title}}</em>
            <p>{{text.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import Banner from '../base/Banner.vue';
  import MFooter from '../base/MFooter';
  export default {
    name: 'Join',
    data() {
      return {
        jobTitle: '招聘职位',
        jobInfo: [
          {
            oId:1,
            job: '数据分析师',
            show:true,
            number: '1人',
            timer: '2018-01-01',
            duty: [
              '岗位职责：',
              '1、建立数据指标分析体系，对海量金融数据进行有价值的商业挖掘;',
              '2、监控资金，建立预测模型；',
              '3、建立用户肖像、用户细分、用户行为、用户信用风险、交叉销售等方面的分析挖掘模型并持续优化;',
            ],
            require: [
              '岗位要求:',
              '1、本科及以上学历，统计学、应用数学、金融、计算机等相关专业；',
              '2、熟悉Mysql/Oracle数据库，优秀的SQL数据独立提取能力；',
              '3、熟悉决策树、logistic回归、时间序列、多元回归、聚类、因子、RFM 等分析方法并能够熟练运用;',
              '4、有一定的互联网数据分析和挖掘的相关工作经验；',
              '5、至少熟练掌握一种编程语言。'
            ]
          },
          {
            oId:2,
            job: '数据分析师11',
            show:false,
            number: '1人',
            timer: '2018-01-01',
            duty: [
              '岗位职责：',
              '1、建立数据指标分析体系，对海量金融数据进行有价值的商业挖掘;',
              '2、监控资金，建立预测模型；',
              '3、建立用户肖像、用户细分、用户行为、用户信用风险、交叉销售等方面的分析挖掘模型并持续优化;',
            ],
            require: [
              '岗位要求:',
              '1、本科及以上学历，统计学、应用数学、金融、计算机等相关专业；',
              '2、熟悉Mysql/Oracle数据库，优秀的SQL数据独立提取能力；',
              '3、熟悉决策树、logistic回归、时间序列、多元回归、聚类、因子、RFM 等分析方法并能够熟练运用;',
              '4、有一定的互联网数据分析和挖掘的相关工作经验；',
              '5、至少熟练掌握一种编程语言。'
            ]
          },
        ],
        imgTitle: '加入我们banner',
        navtitle: '同心同行 风雨相伴！',
        imgUrl: require('../image/recruitbanner.jpg'),
        wealUrl: require("../image/recruit_welfare.jpg"),
        jobWealTitle: '员工福利',
        jobWeal: [
          {
            title: '保障',
            text: '入职当月即为员工购买五险一金，并酌情为员工购买额外商业保险'
          },
          {
            title: '奖金',
            text: '对优秀团队和个人，公司予以分红奖励'
          },
          {
            title: '年假',
            text: '转正后即享5天年假，可按比例休年假，每增加一年司龄，即增加1天年假'
          },
          {
            title: '活动',
            text: '不定期举行多种团队拓展活动，包括：聚餐派对、年度旅游、拓展活动、年会等'
          }
        ],
      }
    },
    components: {
      Banner,
      MFooter
    },
    methods:{
      downslice(oId,jobInfo){
        jobInfo.forEach(function (item,index) {
           item.oId == oId ? item.show=true:item.show=false;
        })

      }
    },
    mounted(){

    }
  }
</script>
<style scoped lang="less">
  .contents {
    width: 100%;
    overflow-x: hidden;
    .title_text {
      width: 57%;
      margin: 100px auto;
      text-align: center;
      h5 {
        color: #333;
        font-size: 18px;
        line-height: 30px;
        font-weight: normal;
      }
    }
    .job_info {
      background: #f0f0f0;
      overflow: hidden;
      width: 100%;
      .job_info-title {
        margin: 40px auto 0 auto;
        width: 57%;
        font-size: 28px;
        font-weight: normal;
        text-align: center;
        span {
          display: inline-block;
          line-height: 35px;
          padding-bottom: 10px;
          border-bottom: 2px solid #45caff;
        }
      }
      .job_info_main {
        width: 57%;
        margin: 20px auto;
        border-top: 1px solid #c9c9c9;
        .job_info_header {
          position: relative;
          width: 100%;
          margin: 30px 0 0 10px;
          .job_info_header_title {
            font-size: 20px;
            color: #45caff;
          }
          .job_info_time {
            line-height: 40px;
            font-size: 14px;
            color: #535353;
            .req {
              margin-right: 20px;
            }
          }
          .job_ico {
            position: absolute;
            top: 25px;
            right: 20px;
            cursor: pointer;
            width: 34px;
            height: 34px;
            background: url("../image/recruit_post_a.png") no-repeat;
          }
        }
        .job_lists {
          width: 100%;
        /*  display: none;*/
          margin-bottom: 30px;
          .job_info_duty {
            width: 100%;
            li {
              text-align: left;
              font-size: 14px;
              overflow: hidden;
              margin-left: 10px;
              color: #535353;
              p {
                line-height: 35px;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .job_emain {
      width: 100%;
      height: 135px;
      .emain_wrap {
        position: relative;
        width: 57%;
        height: 135px;
        overflow: hidden;
        margin: 0 auto;
        div {
          display: inline-block;
          height: 100%;
          font-size: 20px;
          font-weight: normal;
          color: #333;
        }
        .job_emain_ico {
          position: relative;
          width: 60px;
          i {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 60px;
            margin-left: -30px;
            margin-top: -30px;
            background: url("../image/recruit_email.png") no-repeat;
          }
        }
        .job_emain_text {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          margin-left: 10px;
          color: #333;
          font-size: 20px;
          font-weight: normal;
          span {
            line-height: 25px;
          }
          .strong {
            line-height: 25px;
            margin: 0 5px;
          }
        }
      }
    }
    .job_weal {
      width: 100%;
      height: 314px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 86px;
      .job_weal_lists {
        width: 57%;
        margin: 0 auto;
        .job_weal_title {
          width: 100%;
          text-align: center;
          font-size: 28px;

          color: #fff;
          span {
            display: inline-block;
            margin-top: 50px;
            border-bottom: 2px solid #45caff;
          }
        }

        .job_weal_list {
          width: 100%;
          text-align: left;
          margin: 36px auto 0 auto;
          li {
            width: 100%;
            font-size: 16px;
            color: #fff;
            margin-left: 50px;
            em {
              float: left;
              height: 100%;
              line-height: 35px;
              font-style: normal;
              margin-right: 10px;
              font-weight: bold;
            }
            p {
              margin-left: 50px;
              line-height: 35px;
              overflow: hidden;
            }
          }
        }
      }
    }
    img[lazy=loading] {
      margin:auto;
      width: 15px;
      height: 15px;
    }
  }

  /*动画*/

  .listhide {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .listshow {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
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

  /*移动端适配*/
  @media screen and(max-width: 1200px) {
    #join {
      .job_weal_lists {
        width: 100%;
        li {
          width: 80%;
          margin: 0 0 0 auto;
        }
      }
    }
  }

  @media screen and(min-width: 640px)and(max-width: 799px) {
    #join {
      .title_text {
        width: 100%;
        h5 {
          width: 80%;
          font-size: 16px;
          margin: 0 auto;
        }
      }
      .job_info-title {

        font-size: 26px;
      }
      .job_emain {
        h6 {
          font-size: 16px;
        }
      }
      .job_info_main {
        width: 80%;
        margin: 0 auto;
        .job_info_header_title {
          font-size: 18px;
        }
      }
      .job_emain .emain_wrap {
        width: 80%;
        margin: 0 auto;
      }
      .job_weal_list {
        li{
          width: 80%;
          margin: 0 auto;
          p {
            line-height: 28px;
            font-size: 16px;
          }
          em {
            line-height: 28px;
            font-size: 16px;
          }
        }
      }
    }

    .job_lists {
      p {
        line-height: 30px;
      }
    }

    .contents .job_weal .job_weal_lists .job_weal_title span {
      margin-top: 40px;
    }

    .contents .job_weal {
      margin-bottom: 65px;
    }
  }

  @media screen and(max-width: 640px) {
    #join {
      .job_info_main{width: 80%;}
      .title_text {
        width: 80%;
        margin: 30px auto;
        h5 {
          text-align: justify;
          font-size: 18px;
          line-height: 30px;
        }
      }
      .job_weal_list {
        margin-top: 28px;
        li {
          width: 80%;
          margin: 0 auto;
        }
        em {
          line-height: 28px;
          font-size: 14px;
        }
        p {
          line-height: 28px;
          font-size: 14px;
        }
      }
      .job_emain {
        h6 {
          font-size: 16px;
        }
      }
      .job_info_main {
        width: 80%;
        margin: 0 auto;
        .job_info_header_title {
          font-size: 18px;
        }
        .job_lists {
          p {
            line-height: 28px;
          }
        }

      }
      .contents .job_weal {
        margin-bottom: 65px;
      }
      .job_emain .emain_wrap {
        width: 90%;
        margin: 0 auto;
      }
    }

    .contents .job_weal .job_weal_lists .job_weal_title span {
      margin-top: 35px;
    }
  }

  @media screen and(max-width: 480px) {
    #join {
      .job_info_main{width: 85%;}
      .title_text {
        width: 85%;
        margin: 25px auto;
        h5 {
          text-align: justify;
          font-size: 16px;
          line-height: 28px;
        }
      }
      .job_weal_list {
        margin-top: 28px;
        li {
          width: 80%;
          margin: 0 auto;
        }
        em {
          line-height: 25px;
          font-size: 12px;
        }
        p {
          line-height: 25px;
          font-size: 12px;
        }
      }
      .job_emain {
        height: 110px;
        .emain_wrap {
          height: 100%;
        }
      }
      .job_weal_list p {
        line-height: 25px;
      }

    }

    .contents .job_weal {
      margin-bottom: 65px;
    }
  }

  @media screen and(min-width: 319px)and(max-width: 375px) {
    #join {
      .job_info_main{width: 90%;}
      .title_text {
        width: 90%;
        margin: 25px auto;
        h5 {
          text-align: justify;
          font-size: 16px;
          line-height: 28px;
        }
      }
      .job_ico {
        top: 0;
      }
      .job_info_duty li {
        font-size: 12px;
      }
      .job_info_main .job_lists p {
        line-height: 25px;
      }
      .job_emain h6 {
        font-size: 14px;
      }
      .job_weal_list p {
        line-height: 25px;
      }
    }

  }

</style>
