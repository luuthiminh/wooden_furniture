import { createRouter, createWebHistory } from "vue-router";
import Otp from "../views/Auth/OTP.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/RegisterView.vue"
      ),
  },
  {
    path: "/otp",
    name: "otp",
    component: Otp,
  },
  {
    path: "/customer",
    name: "customer",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/HomeView.vue"
      ),
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/indexAdmin.vue"
      ),
  },
  {
    path: "/customerIndex",
    name: "Customer",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/indexCus.vue"
      ),
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
