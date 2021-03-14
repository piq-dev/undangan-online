import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueSmoothScroll from "vue2-smooth-scroll";

// Tailwind
import "tailwindcss/tailwind.css";

Vue.use(vueSmoothScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
