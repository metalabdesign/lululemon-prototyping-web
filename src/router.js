import Vue from "vue";
import Router from "vue-router";
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
