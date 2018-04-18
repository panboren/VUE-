// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Promise from 'es6-promise';
import App from './App'
import router from './router'
import '../css/reset.min.css'

/*轮播图*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

// or with options
/*Vue.use(VueAwesomeSwiper);*/
Vue.use(VueLazyload, {
  preLoad: 2,
  error: require('./image/error.png'),
  loading: require('./image/loading.gif'),
  attempt: 1
});
import './element/index.css'
/*Vue.use(ElementUI);*/
Vue.config.productionTip = false;

/*处理移动端点击事件*/
import FastClick from 'fastclick'
FastClick.attach(document.body);

/*网页标题*/
router.beforeEach(function (to,from,next) {
  document.title=to.meta.title;
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
