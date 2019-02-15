import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Ambassador from "./views/Ambassador";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/ambassadors",
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/ambassadors",
      name: "ambassadors",
      component: () =>
        import("./views/AmbassadorsHub")
    },
    {
      path: "/ambassador/:id",
      name: "ambassador",
      component: Ambassador,

    }
  ]
});
