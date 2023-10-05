import { createRouter, createWebHistory } from "vue-router";
import Otp from "../views/Auth/OTP.vue";
import NotFound from "../views/About/404PageAbout";
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
    path: "/allFurniture",
    name: "AllFurniture",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/AllFurniture.vue"
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
  {
    path: "/furnitureDetail/:id",
    name: "FurnitureDetail",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/FurnitureDetail.vue"
      ),
  },
  {
    path: "/furnitureSpecificationDetail/:id",
    name: "FurnitureSpecificationDetail",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/FurnitureSpecificationDetail.vue"
      ),
  },
  {
    path: "/profileCusPage",
    name: "ProfileCusPage",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/ProfileCusPage.vue"
      ),
  },
  {
    path: "/zeroOrder",
    name: "ZeroOrder",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/ZeroOrder.vue"
      ),
  },
  {
    path: "/eidtInfo",
    name: "EditInformation",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/EditInformation.vue"
      ),
  },
  {
    path: "/about",
    name: "AboutPage",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/AboutPage.vue"
      ),
  },
  {
    path: "/tips",
    name: "TipsFurniture",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/TipsFurniture.vue"
      ),
  },
  {
    path: "/news",
    name: "StoreNews",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/StoreNews.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404PageAbout",
    component: NotFound,
  },
  {
    path: "/allproduct",
    name: "AllProduct",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/AllProduct.vue"
      ),
  },
  {
    path: "/comfirmemail",
    name: "ComfirmEmail",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/ComfirmEmail.vue"
      ),
  },
  {
    path: "/cartproduct",
    name: "cartProduct",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/CartProduct.vue"
      ),
  },
  {
    path: "/temporarycart",
    name: "TemporaryCart",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/TemporaryCart.vue"
      ),
  },
  {
    path: "/orderbill/:id",
    name: "OrderBill",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/OrderFurniture.vue"
      ),
  },
  {
    path: "/orderfurniture",
    name: "OrderFurniture",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/OrderFurniture.vue"
      ),
  },
  {
    path: "/orderbilldetail",
    name: "OrderBillDetail",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/OrderBillDetail.vue"
      ),
  },
  {
    path: "/orderhistory",
    name: "OrderHistory",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/OrderHistory.vue"
      ),
  },
  {
    path: "/searchResult",
    name: "searchResult",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/searchResult.vue"
      ),
  },
  {
    path: "/customerLayout",
    name: "customerLayout",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../layouts/customerLayout.vue"
      ),
  },
  {
    path: "/searchResult2",
    name: "searchResults",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/searchResults.vue"
      ),
  },
  {
    path: "/furnitureMix",
    name: "FurnitureMix",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/FurnitureMix.vue"
      ),
  },
  {
    path: "/newpassword",
    name: "newPassword",
    meta: {
      layout: "authLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/setNewPassword.vue"
      ),
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    meta: {
      layout: "authLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/ForgotPassword.vue"
      ),
  },
  {
    path: "/furnitureModal",
    name: "AllFurnitureModal",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/FurnitureModal.vue"
      ),
  },
  {
    path: "/furnitureManage",
    name: "furnitureManage",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/furnitureManagement..vue"
      ),
  },
  {
    path: "/indexAssistant",
    name: "indexAssistant",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/indexAssistant.vue"
      ),
  },
  {
    path: "/newFurniture",
    name: "newFurniture",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/newFurniture.vue"
      ),
  },
  {
    path: "/categoryManagement",
    name: "CategoryManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/categoryManagement.vue"
      ),
  },
  {
    path: "/collectionManagement",
    name: "CollectionManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/collectionManagement.vue"
      ),
  },
  {
    path: "/labelManagement",
    name: "labelManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/labelManagement.vue"
      ),
  },
  {
    path: "/woodManagement",
    name: "woodManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/woodManagemenPage.vue"
      ),
  },
  {
    path: "/materialManagement",
    name: "materialManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/materialManagement.vue"
      ),
  },
  {
    path: "/profileAssistant",
    name: "ProfileAssistant",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/profileAssistant.vue"
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
    path: "/cusManagement",
    name: "cusManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/cusManagement.vue"
      ),
  },
  {
    path: "/adManagement",
    name: "AdManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/adManagement.vue"
      ),
  },
  {
    path: "/asManagement",
    name: "AsManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/asManagement.vue"
      ),
  },
  {
    path: "/ownerManagement",
    name: "OwnerManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/ownerManagement.vue"
      ),
  },
  {
    path: "/userManaegment",
    name: "UserManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/usersManagement.vue"
      ),
  },
  {
    path: "/profileManagement",
    name: "ProfileManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/profileCusManagement.vue"
      ),
  },
  {
    path: "/addNewUser",
    name: "AddNewUser",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/addNewUser.vue"
      ),
  },
  {
    path: "/furnitureView",
    name: "FurnitureView",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/furnitureView.vue"
      ),
  },
  {
    path: "/materialView",
    name: "MaterialView",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/materialView.vue"
      ),
  },
  // {
  //   path: "/logout",
  //   name: "logoutPage",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "register" */ "../views/About/logoutPage.vue"
  //     ),
  // },
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
