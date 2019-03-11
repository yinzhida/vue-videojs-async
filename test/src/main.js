// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { VueVideojs } from '../source/vue-videojs-async'
import '../source/vue-videojs-async.css'

Vue.config.productionTip = false
Vue.use(VueVideojs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
