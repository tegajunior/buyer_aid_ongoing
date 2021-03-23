import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tester from "../views/Tester.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/tester",
    name: "Tester",
    component: Tester
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
