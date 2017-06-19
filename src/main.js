import Vue from 'vue'
import App from './App'
import Icon from 'vue-svg-icon/Icon.vue';

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
