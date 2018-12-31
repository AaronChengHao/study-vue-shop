// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Axios from 'axios';
import router from './router';
import '@/common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
window.onerror = function () {
  console.log(321);
};

console.log(vm);
