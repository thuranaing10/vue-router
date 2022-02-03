import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'core-js/es/reflect';
import 'bootstrap/dist/css/bootstrap.min.css'
import jQuery from 'jquery'
import Popper from 'popper.js'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
window.jQuery = jQuery;
window.$ = jQuery;
window.Popper = Popper;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
