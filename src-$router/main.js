// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource';
import router from './router'

Vue.config.productionTip = false

Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //注册路由器
  router
})
