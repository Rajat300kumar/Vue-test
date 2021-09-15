import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/Router'
import VueRouter from 'vue-router';
import axios from 'axios'



const firebaseConfig = {
  apiKey: "AIzaSyBdPaQZRPUTt6Dv5dfW7-M66ybI6x6-l-g",
  authDomain: "vue-app-fd395.firebaseapp.com",
  projectId: "vue-app-fd395",
  storageBucket: "vue-app-fd395.appspot.com",
  messagingSenderId: "355206473303",
  appId: "1:355206473303:web:75546861275361c3b7a512"
};

Vue.prototype.$axios = axios;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
