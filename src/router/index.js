import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Customer/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      layout: "authLayout",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "authLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/RegisterView.vue"
      ),
  },
  {
    path: "/customer",
    name: "customer",
    meta: {
      layout: "customerLayout",
    },
    component: HomeView,
  },
  // {
  //   path: "/",
  //   name: "register",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Auth/LoginView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
