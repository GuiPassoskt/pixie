import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import 'bulma/css/bulma.css'

import Main from "./layouts/Main.vue";
Vue.component("main-layout", Main);

import Default from "./layouts/Default.vue";
Vue.component("default-layout", Default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
