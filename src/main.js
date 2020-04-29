// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' 

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

/* eslint-disable no-new */
// eslint-disable-next-linex
new Vue({
  el: '#app',
  router,
  components: { 
    App
   },
  template: '<App/>'
})

