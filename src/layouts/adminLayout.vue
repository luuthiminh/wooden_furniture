<template>
  <div class="layout flex">
    <nav
      class="nav__layout_header flex-none w-24 bg-white fixed max-sm:hidden max-md:hidden"
    >
      <div class="text-center mt-6 border-1 border-bottom border-slate-50">
        <img class="w-7/12 ml-3" src="@/assets/images/logo.png" alt="logo" />
        <span class="text-sm font-bold">L & L</span>
      </div>
      <ul class="nav leading-9 text-center nav nav-stacked" role="tablist">
        <li role="presentation" class="w-full">
          <router-link to="/dashboardFurniture">
            <i class="bi bi-columns-gap"></i>
            <p class="font-normal">Dashboard</p>
          </router-link>
        </li>
        <li role="presentation" class="w-full">
          <a
            href="#users"
            aria-controls="users"
            role="tab"
            data-toggle="tab"
            class="active"
          >
            <i class="bi bi-people"></i>
            <p>User</p>
          </a>
        </li>
        <li role="presentation" class="w-full">
          <router-link to="/urnitureManagementAd">
            <a
              href="#furniture"
              aria-controls="furniture"
              role="tab"
              data-toggle="tab"
              class=""
            >
              <i class="bi bi-house"></i>
              <p>Furniture</p>
            </a>
          </router-link>
        </li>
        <li class="w-full">
          <router-link to="/suppliersManager">
            <i class="bi bi-person-check"></i>
            <p>Suppliers</p>
          </router-link>
        </li>
        <li class="w-full">
          <router-link to="/allOrder">
            <i class="bi bi-cart-check"></i>
            <p>Orders</p>
          </router-link>
        </li>
        <li class="w-full">
          <router-link to="/CustomizeOrder">
            <i class="bi bi-cart"></i>
            <p>Customize</p>
          </router-link>
        </li>
        <li role="presentation" class="w-full">
          <router-link to="/collectionManagement">
            <i class="bi bi-collection"></i>
            <p>Collection</p>
          </router-link>
        </li>

        <li role="presentation" class="w-full">
          <router-link to="/categoryManagement">
            <i class="bi bi-tags"></i>
            <p>Category</p>
          </router-link>
        </li>
      </ul>

      <div class="nav__layout__avatar w-8/12">
        <router-link to="/profileAssistant">
          <img
            class="rounded-md ml-3 cursor-pointer"
            src="@/assets/images/avatar.jpg "
            alt="avatar"
          />
        </router-link>
        <p class="text-xs font-normal ml-4 mt-2">Admin</p>
      </div>
    </nav>
    <nav
      class="nav__layout__content flex-none w-80 bg-white fixed px-5 pt-4 max-sm:hidden max-md:hidden"
    >
      <div class="tab-content col-span-5 max-sm:hidden max-md:hidden">
        <div role="tabpanel" class="tab-pane active" id="users">
          <h1 class="font-semibold mb-6 mt-2 text-lg">Manage Users</h1>
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/adManagement" class="flex">
                  <i class="bi bi-person pr-3"></i>
                  <p class="font-normal">Admin Account List</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="/cusManagement" class="flex">
                  <i class="bi bi-person pr-3"></i>
                  <p class="font-normal">Customer Account List</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="/asManagement" class="flex">
                  <i class="bi bi-person pr-3"></i>
                  <p class="font-normal">Assistant Account List</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="furniture">
          <h1 class="text-yellow-950 font-semibold mb-6 mt-2 text-lg">
            Management Furniture
          </h1>
          <div>
            <SearchAdmin />
          </div>
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/furnitureManagementAd" class="flex">
                  <i class="bi bi-house pr-3"></i>
                  <p class="font-normal">All Furniture</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="content grow z-0">
      <slot />
    </div>
  </div>
</template>
<script>
import SearchAdmin from "@/components/searchAdmin.vue";

export default {
  components: {
    SearchAdmin,
  },
  data() {
    return {
      iShow: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem("token") == "") {
        this.isLogin = false;
        this.$router.push({ name: "login" });
      } else {
        this.isLogin = true;
      }
    },
  },
};
</script>
<style>
.layout div,
.layout i {
  font-style: normal;
}
/* .layout {
  overflow: hidden;
} */
nav i,
.nav svg {
  color: #7f8590;
}

.layout li {
  cursor: pointer;
}
.nav__layout__content {
  height: 44em;
}
.nav__layout_header {
  border-right: 1px solid transparent;
  border-right-color: #f1f1f2;
  color: var(--bs-text-gray-400);
}
.nav__layout_header li {
  border-bottom: 1px solid transparent;
  border-bottom-color: #f1f1f2;
  padding-top: 8px;
}
.nav__layout_header i,
i {
  font-size: 22px;
}
.nav__layout_header p {
  font-size: 14px;
  font-weight: 600;
  color: #584941;
}
.nav__layout__content {
  margin-left: 96px;
  --fc-event-text-color: var(--bs-primary-inverse);
  border-right: 1px solid transparent;
  border-right-color: #f1f1f2;
}
.content {
  margin-left: 26em;
  background-color: #eeefef4d;
  padding: 0 30px;
}

.nav__layout__avatar {
  margin-top: 37%;
}
.nav__layout__content .user_roles i {
  font-size: 39%;
  margin-right: 2em;
  margin-top: 1.3em;
}
.nav__layout__content .dropdown-menu.user_roles {
  border: none;
  width: 100%;
}
.nav__layout__content .task_user p,
.nav__layout__content .user_roles {
  font-size: 15px;
  font-weight: 500;
}
.layout li,
.layout h1 {
  color: rgb(83, 61, 22);
}
.nav {
  overflow: scroll;
  overflow-x: hidden;
  height: 28em;
}
.nav::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.nav::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
  height: 10px;
  margin-top: 1em;
}

.nav::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #d0c9be;
}
/*Mobile & tablet: width<1024px*/
@media only screen and (max-width: 63.9375em) {
  .content {
    margin-left: 0em;
  }
}
/*Mobile: width<780px*/
@media only screen and (max-width: 46.25em) {
}
/*Tablet: width>=740px and width < 1024px*/
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
}
@media only screen and (width: 64em) {
}
/*laptop*/
@media only screen and (min-width: 73em) and (max-width: 81.25em) {
}
</style>
