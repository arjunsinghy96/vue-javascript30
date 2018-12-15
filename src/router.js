import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/day1",
      name: "day1",
      // route level code-splitting
      // this generates a separate chunk (day1.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "day1" */ "./views/Day1.vue")
    },
    {
      path: "/day2",
      name: "day2",
      component: () => import(/* webpackChunkName: "day2" */ "./views/Day2.vue")
    },
    {
      path: "/day3",
      name: "day3",
      component: () => import(/* webpackChunkName: "day3" */ "./views/Day3.vue")
    },
    {
      path: "/day5",
      name: "day5",
      component: () => import(/* webpackChunkName: "day5" */ "./views/Day5.vue")
    }
  ]
});
