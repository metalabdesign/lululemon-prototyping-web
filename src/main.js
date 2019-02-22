import Vue from "vue";
import VueCarousel from "vue-carousel";

import "./plugins/vuetify";
import "./plugins/svgicon";
import "./main.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueCarousel);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
