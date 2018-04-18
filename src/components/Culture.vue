<template>
  <div class="contents">
    <Banner>
      <img :title="imgTitle" v-lazy="imgUrl">
      <h4>{{navtitle}}</h4>
    </Banner>
    <ul class="list" id="culList">
      <li v-for="(text,index) in cultureText" :key="index">
        <div class="main_text" :style="text.floatRight">
          <h2 class="title">{{text.title}}</h2>
          <div class="info" :style="text.center">{{text.mainText}}</div>
        </div>
        <img v-lazy="text.listImg" :title="text.title" :style="text.floatLeft">
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
        navtitle: '让时间记录风速征程！',
        imgUrl: require('../image/culturebanner.jpg'),
        imgTitle: '企业文化banner',
        cultureText: [
          {
            title: '愿景',
            center: {
              textAlign: 'center',
              padding: '20px',
              textIndent: 0,
            },
            floatLeft: {
              float: 'left'
            },
            floatRight: {
              float: 'right'
            },
            listImg: require('../image/culture01.jpg'),
            mainText: '为客户提供稳定商务平台及优质服务，为员工创造施展才能的平台',
          },
          {
            title: '理念',
            floatLeft: {
              float: 'right'
            },
            floatRight: {
              float: 'left'
            },
            listImg: require('../image/culture02.jpg'),
            mainText: '科技型企业的发展要最大力度激发团队的自主与创新热情，公司高层着眼长远谋大局，充分信任团队及成员，给予足够的空间和全力的支持，赋能于团队以达成各项目标，拓展业务领域，我们明白“用人不疑，疑人不用”，并持续践行',
          },
          {
            title: '价值观',
            floatLeft: {
              float: 'left'
            },
            floatRight: {
              float: 'right'
            },
            listImg: require('../image/culture03.jpg'),
            mainText: '细微之处见功底，精益求精筑品质。我们不期超凡脱俗，而相信厚积才能薄发，顺势而为，朝着目标方向笃定前行。我们贴合客户需求，力求完美，持续优化，彰显风速人的坚韧与务实。',
          },
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
    .list {
      margin: 50px auto;
      width: 57%;
      li {
        background: #f5f5f5;
        width: 100%;
        margin-top: 100px;
        overflow: hidden;
        img {
          float: left;
          width: 42%;
          height: 252px;
        }

        .main_text {
          float: right;
          width: 58%;
          text-align: center;

          h2 {
            color: #0f0f0f;
            font-size: 26px;
            margin-top: 40px;
            font-weight: normal;
          }
          .info {
            text-align: justify;
            overflow: hidden;
            text-indent: 28px;
            padding: 20px;
            line-height: 25px;
            font-size: 14px;
            color: #535353;
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

  /*移动端适配*/
  @media all and(max-width: 1200px) {
    #culList {
      width: 100%;
      li {
        width: 80%;
        margin: 100px auto 0 auto;
      }
    }
  }

  @media screen and(min-width: 640px)and(max-width: 799px) {
    #culList {
      width: 100%;
      li {
        margin-top: 85px;
        width: 80%;
        img {
          width: 100%;
        }
        .main_text {
          width: 100%;
          .title {
          }
          .info {
            padding: 35px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 640px) {
    .contents {
      margin-bottom: 80px;
    }

    #culList {
      width: 100%;
      li {
        margin-top: 75px;
        width: 80%;
        img {
          width: 100%;
        }
        .main_text {
          width: 100%;
          .title {
            margin-top: 45px;
            font-size: 24px;
          }
          .info {
            line-height: 22px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 530px) {
    .contents {
      margin-bottom: 80px;
    }

    #culList {
      width: 100%;
      li {
        margin-top: 65px;
        width: 80%;
        img {
          width: 100%;
          height: 215px;
        }
        .main_text {
          width: 100%;
          height: 215px;
          .title {
            margin-top: 40px;
            font-size: 22px;
          }
          .info {
            line-height: 20px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 480px) {
    .contents {
      margin-bottom: 80px;
    }

    #culList {
      width: 100%;
      li {
        margin-top: 55px;
        width: 80%;
        img {
          width: 100%;
          height: 225px;
        }
        .main_text {
          width: 100%;
          height: 225px;
          .title {
            margin-top: 40px;
            font-size: 22px;
          }
          .info {
            line-height: 20px;
          }
        }
      }
    }
  }

  @media screen and(max-width: 375px) {
    .contents {
      margin-bottom: 80px;
    }

    #culList {
      width: 100%;
      li {
        margin-top: 45px;
        width: 80%;
        img {
          width: 100%;
          height: 215px;
        }
        .main_text {
          width: 100%;
          height: 245px;
          .title {
            margin-top: 40px;
            font-size: 20px;
          }
          .info {
            margin-bottom: 30px;
            line-height: 22px;
            font-size: 12px;
          }
        }
      }
    }
  }


</style>
