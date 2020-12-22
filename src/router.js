import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "signup" */ "./views/Signup.vue")
    },
    {
      path: "/quizz",
      name: "quizz",
      component: () =>
        import(/* webpackChunkName: "signup" */ "./views/Quizz.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/Index.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/Profile.vue")
    },
    {
      path: "/platforms",
      name: "platforms",
      component: () =>
        import(/* webpackChunkName: "platforms" */ "./views/Platforms.vue")
    },
    {
      path: "/aboutcm",
      name: "aboutcm",
      component: () =>
        import(/* webpackChunkName: "aboutcm" */ "./views/AboutCM.vue")
    },
    {
      path: "/aboutts",
      name: "aboutts",
      component: () =>
        import(/* webpackChunkName: "aboutts" */ "./views/AboutTS.vue")
    },
    {
      path: "/aboutdm",
      name: "aboutdm",
      component: () =>
        import(/* webpackChunkName: "aboutdm" */ "./views/AboutDM.vue")
    },
    {
      path: "/aboutmk",
      name: "aboutmk",
      component: () =>
        import(/* webpackChunkName: "aboutmk" */ "./views/AboutMK.vue")
    },
    {
      path: "/aboutph",
      name: "aboutph",
      component: () =>
        import(/* webpackChunkName: "aboutph" */ "./views/AboutPH.vue")
    },
    {
      path: "/aboutsv",
      name: "aboutsv",
      component: () =>
        import(/* webpackChunkName: "aboutsv" */ "./views/AboutSV.vue")
    },
    {
      path: "/aboutjm",
      name: "aboutsjm",
      component: () =>
        import(/* webpackChunkName: "aboutjm" */ "./views/AboutJM.vue")
    }
  ]
});
