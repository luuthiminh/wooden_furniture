import { createRouter, createWebHistory } from "vue-router";
import Otp from "../views/Auth/OTP.vue";
import NotFound from "../views/About/404PageAbout";
const routes = [
  {
    path: "/login",
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
    path: "/term",
    name: "TermOfService",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/TermsOfService.vue"
      ),
  },
  {
    path: "/policy",
    name: "PrivacyPolicy",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/privacyPolicy.vue"
      ),
  },
  {
    path: "/otp",
    name: "otp",
    component: Otp,
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
    path: "/",
    name: "Customer",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/indexCus.vue"
      ),
  },
  {
    path: "/testMix",
    name: "testMix",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/testMix.vue"
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
    path: "/tips/:id",
    name: "TipsFurniture",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/TipsAndNewsFurniture.vue"
      ),
  },
  {
    path: "/shoppingGuide",
    name: "ShoppingGuide",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/ShoppingGuide.vue"
      ),
  },
  {
    path: "/helpPage",
    name: "HelpPage",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/helpPage.vue"
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
    path: "/ComfirmOtp2FA",
    name: "ComfirmOtp2FA",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Auth/ComfirmOtp2FA.vue"
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
    path: "/contactCus",
    name: "ContactCus",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/ContactStore.vue"
      ),
  },
  {
    path: "/CustomizeFurniture",
    name: "CustomizeFurniture",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/CustomizeFurniture.vue"
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
    name: "SearchResult",
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
    path: "/StoreIntroduction",
    name: "StoreIntroduction",
    meta: {
      layout: "customerLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Customer/StoreIntroduction.vue"
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
    path: "/getWarranties",
    name: "GetWarranties",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/getWarranties.vue"
      ),
  },
  {
    path: "/furnitureManage",
    name: "FurnitureManage",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/furnitureManagement.vue"
      ),
  },
  {
    path: "/repositoriesManagement",
    name: "RepositoriesManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/repositoriesManagement.vue"
      ),
  },
  {
    path: "/detailRepository/:id",
    name: "DetailRepository",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/detailRepository.vue"
      ),
  },
  {
    path: "/historyFurRepo",
    name: "HistoryFurRepo",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/historyFurRepo.vue"
      ),
  },
  {
    path: "/historyMaterialRepo",
    name: "HistoryMaterialRepo",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/historyMaterialRepo.vue"
      ),
  },
  {
    path: "/colorManagement",
    name: "colorManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/colorManagement.vue"
      ),
  },
  {
    path: "/feedbackManagement",
    name: "feedbackManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/feedbackManagement.vue"
      ),
  },

  {
    path: "/postManagement",
    name: "postManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/postManagement.vue"
      ),
  },
  {
    path: "/orderRequestManage",
    name: "orderRequestManage",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/orderRequestManage.vue"
      ),
  },
  {
    path: "/dashboardAssistant",
    name: "dashboardAssistant",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/dashboardAssistant.vue"
      ),
  },
  {
    path: "/categoryManagement",
    name: "CategoryManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/categoryManagement.vue"
      ),
  },
  {
    path: "/collectionManagement",
    name: "CollectionManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/collectionManagement.vue"
      ),
  },
  {
    path: "/allOrder",
    name: "AllOrder",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Admin/allOrder.vue"),
  },
  {
    path: "/customizeOrder",
    name: "CustomizeOrder",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/customizeOrder.vue"
      ),
  },
  {
    path: "/furnitureSpecifications/:id",
    name: "FurnitureSpecifications",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/furnitureSpecifications.vue"
      ),
  },
  {
    path: "/suppliersManager",
    name: "SuppliersManager",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/suppliersManager.vue"
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
    path: "/labelManagement",
    name: "LabelManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/labelManagement.vue"
      ),
  },
  {
    path: "/materialManagement",
    name: "MaterialManagement",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/materialManagement.vue"
      ),
  },
  {
    path: "/importMaterial",
    name: "ImportMaterial",
    meta: {
      layout: "assistantLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Assistant/importMaterial.vue"
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
    path: "/furnitureManagementAd",
    name: "FurnitureManagement",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/furnitureManagementAd.vue"
      ),
  },
  {
    path: "/dashboardFurniture",
    name: "DashboardFurniture",
    meta: {
      layout: "adminLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Admin/dashboardFurniture.vue"
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
