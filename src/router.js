import Vue from "vue";
import Router from "vue-router";
import Ambassador from "./views/Ambassador";
import AmbassadorsHub from "./views/AmbassadorsHub";

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
      path: "/ambassadors",
      name: "ambassadors",
      component: AmbassadorsHub,
    },
    {
      path: "/ambassador/:id",
      name: "ambassador",
      component: Ambassador,

    }
  ]
});
