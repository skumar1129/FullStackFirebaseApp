import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase";
import VueCompositionApi from '@vue/composition-api';


firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
