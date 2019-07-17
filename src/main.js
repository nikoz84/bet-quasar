import Vue from "vue";
import App from "./App.vue";
import "./quasar";
import VueRouter from "vue-router";
import routes from "./routes";

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
  render: h => h(App)
}).$mount("#app");
