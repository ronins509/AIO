import Vue from "vue";
import VueRouter from "vue-router";
import S from "./store.router";
import C from "./cloud.router";

Vue.use(VueRouter);
let routes = [
  /*{
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue")
  },*/{
    path: "/",
    name: "main",
    component: () => import("../views/Main.vue")
  },
  {
    path: "/user",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/User.vue")
  },
  {
    path: "/set",
    name: "set",
    component: () => import("../views/Set.vue")
  },
];

const store = routes.concat(S.router);
routes = store.concat(C.router)

const router = new VueRouter({
  linkExactActiveClass: "selected",
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/*router.beforeEach((to,from,next) => {
  const user = localStorage.getItem('user');
  if(user || to.name === 'login'){
    next()
  }else{
    next({
      name:"login",
      query:{
        redirect:to.path
      }
    })
  }
})*/
export default router;
