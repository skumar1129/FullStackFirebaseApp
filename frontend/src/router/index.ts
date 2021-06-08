import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ScoringPage from "../views/ScoringPage.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import firebase from 'firebase';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Signin",
    component: Signin
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
  },
  }, 
  {
    path: "/search",
    name: "Search",
    component: () => import('../views/SearchPage.vue'),
    meta: {
      authRequired: true,
  },
  },
  {
    path: "/scoring",
    name: "Scoring",
    component: ScoringPage,
    meta: {
      authRequired: true,
  },
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next();
      } else {
          next({
              path: '/',
          });
      }
  } else {
      next();
  }
});

export default router;
