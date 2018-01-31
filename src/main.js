// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = axios.create({
  baseURL: 'http://coop.api.netlor.fr/api/',
  params : {
  	token : false
  },
  headers: { Authorization: 'Token token=dfb4c499287940b5b0d8e21edd853b68' }
});

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

window.bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  beforeCreate() {
  	this.$store.commit('initialiseStore');
  },
  template: '<App/>',
  components: { App }
})
