import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css/animate.css";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHome,
  faWallet,
  faTimes,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faHome, faWallet, faTimes, faCheckCircle);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
