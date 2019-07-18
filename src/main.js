import Vue from "vue";
import App from "./App.vue";
import "./quasar";
import VueRouter from "vue-router";
import routes from "./routes";
import 'es6-promise/auto'
import axios from "axios";
import store from './store';


Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes,
  //linkActiveClass: "active",
  linkExactActiveClass: "active"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
