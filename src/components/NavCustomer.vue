<template>
  <navigation />
  <nav class="text-right max-sm:hidden font-medium">
    <ul class="flex gap-x-7 items-center">
      <router-link to="/" class="text-decoration-none"></router-link>
      <li>
        <router-link to="/" class="text-decoration-none"> Home</router-link>
      </li>
      <li>
        <router-link to="/StoreIntroduction" class="text-decoration-none"
          >Introduce</router-link
        >
      </li>
      <li class="font-medium">
        <router-link to="/CustomizeFurniture" class="text-decoration-none"
          >Customize Furniture</router-link
        >
      </li>
      <li>
        <div class="">
          <div class="" data-toggle="dropdown">
            <router-link to="/allproduct">All Product</router-link>
          </div>
          <div class="dropdown-menu px-3 py-2 mt-1 leading-7">
            <div v-if="categories.length">
              <ul
                v-for="ca in categories"
                :key="ca.categoryId"
                class="flex flex-cols-4 gap-x-10"
              >
                <li>
                  <span @clik="HandleCategoryDetail">{{
                    ca.categoryName
                  }}</span>
                  <ul class="block list-outside list-disc leading-10 ml-3">
                    <li></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <router-link to="/furnitureMix" style="text-decoration: none"
          >Mix
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="text-decoration-none"
          >About</router-link
        >
      </li>
      <li>
        <router-link to="/contactCus" class="text-decoration-none"
          >Contact</router-link
        >
      </li>
      <!-- <li><input v-model="keywordTest" @keyup.enter="searchTest" /></li> -->
      <li>
        <div class="flex flex-cols-6 gap-x-3">
          <div class="col-span-4 font-normal">
            <div class="form">
              <label for="search">
                <input
                  class="mt-1 text-sm ml-1 w-10/12"
                  autocomplete="off"
                  placeholder="search your chats"
                  id="search"
                  type="text"
                  v-model="keyword"
                  @keyup.enter="search"
                />
                <div class="icon">
                  <svg
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="swap-on mt-2"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <svg
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="swap-off mt-2"
                  >
                    <path
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
                <button @click="clear" type="reset" class="close-btn">
                  <svg
                    viewBox="0 0 20 20"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </label>
            </div>
          </div>
        </div>
      </li>
      <ul class="flex gap-x-4">
        <li
          class="transition ease-in-out delay-150 cursor-pointer"
          @click="HandleMouseOver"
        >
          <i class="bi bi-person-fill text-2xl"></i>
        </li>
      </ul>
      <div>
        <router-link to="/TemporaryCart" style="text-decoration: none"
          ><i class="bi bi-cart3 cursor-pointer text-2xl"></i>
          <sup class="ml-1 px-1 bg-red-600 rounded-full text-white"
            >{{ cart.length }}
          </sup>
        </router-link>
      </div>
    </ul>
  </nav>

  <div v-if="isShowAccount" class="mt-40">
    <ul
      v-if="isLogin"
      class="hover_account rounded divide-y divide-solid divide-slate-200"
    >
      <li class="px-3 pb-2 pt-2">
        <router-link
          to="/profileCusPage"
          style="text-decoration: none"
          class="flex gap-x-4 items-center font-medium"
          >Profile</router-link
        >
      </li>
      <li class="px-3 py-2">
        <div @click.prevent="handelLogout" class="items-center">
          <span class="font-medium cursor-pointer">Logout</span>
        </div>
      </li>
    </ul>
    <ul
      v-else
      class="hover_account rounded divide-y divide-solid divide-slate-200"
    >
      <li class="px-3 pb-2 pt-2">
        <router-link
          to="/login"
          style="text-decoration: none"
          class="flex gap-x-4 items-center font-medium"
          >Login</router-link
        >
      </li>
      <li class="px-3 py-2">
        <router-link
          to="/register"
          style="text-decoration: none"
          class="flex gap-x-4 items-center font-medium"
          >Register</router-link
        >
      </li>
    </ul>
  </div>
  <div class="absolute right-3 flex items-center top-5 my-2">
    <div
      @click="OpenNavBar"
      class="hidden border border-1 border-solid-yellow-950 rounded-md hover:bg-slate-200 cursor-pointer ring-1 ring-yellow-600 max-sm:block max-md:block bg-yellow-900 text-white opacity-70"
    >
      <i class="bi bi-list px-1 hover:text-yellow-950"></i>
    </div>
  </div>
  <div v-show="isNavBar">
    <div class="overlay">
      <div class="nav_bar lg:hidden">
        <div class="flex gap-x-4">
          <div
            class="icon_cancle flex items-center px-3 border-1 border-bottom border-solid-yellow-600 opacity-90"
          >
            <div class="w-10">
              <router-link to="/TemporaryCart" style="text-decoration: none"
                ><i class="bi bi-cart3 cursor-pointer text-xl"></i>
                <sup class="px-1 bg-red-600 rounded-full text-white"
                  >{{ cart.length }}
                </sup>
              </router-link>
            </div>
            <div>
              <i
                @click.prevent="closeNavBar"
                class="bi bi-x-square pl-40 py-3 text-xl flex items-center cursor-pointer"
              ></i>
            </div>
          </div>
        </div>
        <div class="search px-3 pt-4 pb-2">
          <div class="flex flex-cols-6 gap-x-3">
            <div class="col-span-4 font-normal">
              <div class="form w-1/12">
                <label for="search">
                  <input
                    required=""
                    autocomplete="off"
                    placeholder="search your chats"
                    id="search"
                    type="text"
                    v-model="keyword"
                    @keyup.enter="search"
                  />
                  <div class="icon">
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="swap-on"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="swap-off"
                    >
                      <path
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                  <button @click="clear" type="reset" class="close-btn">
                    <svg
                      viewBox="0 0 20 20"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </label>
                <ul id="filter-select" class="filter-select no-value"></ul>
              </div>
            </div>
          </div>
        </div>
        <ul v-show="isLogin" class="flex gap-x-10 right-2 items-center">
          <li class="items-center px-3" @click.prevent="closeNavBar">
            <div class="flex gap-x-4 font-medium">
              <router-link to="/profileCusPage" class="text-decoration-none"
                ><i class="bi bi-person cursor-pointer"></i
              ></router-link>
              <p class="">Account</p>
            </div>

            <div @click.prevent="handleLogout" class="flex gap-x-4 font-medium">
              <i class="bi bi-arrow-right-circle cursor-pointer"></i>
              <p>Logout</p>
            </div>
          </li>
        </ul>
        <ul v-show="!isLogin" class="flex items-center">
          <li class="items-center px-3">
            <router-link to="/">
              <span class="font-medium text-sm">Login/ </span>
            </router-link>
            <router-link to="/">
              <span class="font-medium text-sm">Register </span>
            </router-link>
          </li>
        </ul>
        <div
          class="line border-1 border-bottom border-solid-slate-200 opacity-90"
        ></div>
        <ul class="items-center px-3">
          <li class="flex gap-x-4" @click.prevent="closeNavBar">
            <i class="bi bi-shop"></i>
            <router-link
              to="/customerIndex"
              class="font-medium text-decoration-none"
            >
              Home</router-link
            >
          </li>
          <li class="flex gap-x-4 font-medium" @click.prevent="closeNavBar">
            <i class="bi bi-card-checklist"></i>
            <router-link to="/StoreIntroduction" class="text-decoration-none"
              >Introduce</router-link
            >
          </li>
          <li class="flex gap-x-4 font-medium" @click.prevent="closeNavBar">
            <i class="bi bi-brush"></i>
            <router-link to="/CustomizeFurniture" class="text-decoration-none"
              >Customize Furniture</router-link
            >
          </li>
          <li class="flex gap-x-4" @click.prevent="closeNavBar">
            <i class="bi bi-house-check"></i>
            <div class="dropdown">
              <div class="dropdown-toggle" data-toggle="dropdown">
                <strong class="font-medium">All Furniture</strong>
              </div>
              <div class="dropdown-menu px-3 py-2 mt-1 leading-7">
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Wardrobe</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Sofa</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Clock</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Altar</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Bed</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Shelves TV</router-link
                  >
                </li>
              </div>
            </div>
          </li>
          <li class="flex gap-x-4 font-medium" @click.prevent="closeNavBar">
            <i class="bi bi-puzzle"></i>
            <router-link to="/furnitureMix" class="text-decoration-none"
              >Mix
            </router-link>
          </li>
          <li class="flex gap-x-4" @click.prevent="closeNavBar">
            <i class="bi bi-back"></i>
            <div class="dropdown">
              <div class="dropdown-toggle" data-toggle="dropdown">
                <strong class="font-medium">About</strong>
              </div>
              <div class="dropdown-menu px-3 py-2 mt-1 leading-7">
                <li>
                  <router-link to="/news" class="font-medium text-base"
                    ><i class="fa-regular fa-newspaper pr-3 cursor-pointer"></i>
                    News</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/tips"
                    class="font-medium text-base cursor-pointer"
                    ><i class="fa-solid fa-seedling pr-3"></i> Tips</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/categoryFurniture"
                    class="font-medium text-base"
                  >
                    Help</router-link
                  >
                </li>
              </div>
            </div>
          </li>
          <li class="flex gap-x-4 font-medium" @click.prevent="closeNavBar">
            <i class="bi bi-bar-chart-steps"></i>
            <router-link to="/shoppingGuide" class="text-decoration-none"
              >Shopping Guide
            </router-link>
          </li>
          <li class="flex gap-x-4 font-medium" @click.prevent="closeNavBar">
            <i class="bi bi-c-square"></i>
            <router-link to="/contactCus" class="text-decoration-none"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isDarkMode: false,
      keyword: "",
      furnitureSearch: [],
      categories: [],
      notifications: [],
      isLogin: false,
      isShowAccount: false,
      cart: [],
      isNavBar: false,
    };
  },
  created() {
    this.checkLogin();
    this.getAllCategory();
    this.getCart();
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem("token") !== null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    search() {
      this.$router
        .push({ name: "SearchResult" })
        .then(() => {
          this.$store.dispatch("searchFurnitures", { keyword: this.keyword });
        })
        .catch((error) => {
          console.error("Lỗi khi thực hiện tìm kiếm:", error);
        });
    },
    async getAllCategory() {
      try {
        const response = await axios.get("ShopOwner/shop-data/categories");
        this.categories = response.data;
        console.log(response);
        console.log(this.furnitures);
      } catch (error) {
        console.error(error);
      }
    },
    clear() {
      this.keyword = "";
      this.furnitureSearch = "";
    },
    handelLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("expiration");
      this.$router.push({ name: "login" });
    },
    toggleDark() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        localStorage.theme = "dark";
        this.isDarkMode = true;
        document.body.classList.remove("sun");
        document.body.classList.add("moon");
      } else {
        localStorage.theme = "light";
        this.isDarkMode = false;
        document.body.classList.remove("moon");
        document.body.classList.add("sun");
      }
    },
    HandleMouseOver() {
      this.isShowAccount = !this.isShowAccount;
    },
    async getCart() {
      try {
        const response = await axios.get("customer/cart");
        this.cart = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    OpenNavBar() {
      this.isNavBar = !this.isNavBar;
    },
    closeNavBar() {
      this.isNavBar = !this.isNavBar;
    },
  },
};
</script>

<style scoped>
.header.fixed {
  background-color: #d9d0c4;
}
.logo img {
  width: 30%;
}
nav {
  width: 100%;
}
.nav_header .logo img {
  max-width: 30%;
}
nav {
  background-color: white;
  position: sticky;
  z-index: 99;
  color: #302924;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  /* border: 1px solid #d3c2ae; */
  border-radius: 7px;
}
nav > li.active {
  color: blue;
}
.grid.mg-left-0 {
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

/* icon search */
/* From uiverse.io by @satyamchaudharydev */
/* this button is inspired by -- whatsapp input */
/* == type to see fully interactive and click the close buttom to remove the text  == */

.form {
  margin-top: -3px;
  --input-bg: #fff;
  /*  background of input */
  --padding: 1.5em;
  --rotate: 80deg;
  /*  rotation degree of input*/
  --gap: 2em;
  /*  gap of items in input */
  --icon-change-color: #15a986;
  /*  when rotating changed icon color */
  --height: 30px;
  /*  height */
  width: 200px;
  padding-inline-end: 1em;
  /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border-radius: 4px;
  border: 1px solid gray;
}

.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.form input {
  font-size: 12px;
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
}
/* style for both icons -- search,close */
.form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  height: 15px;
}
/* search icon */
.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate));
}

.form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}
a:hover,
li:hover {
  color: rgb(98, 107, 71);
}
.toggle {
  background-color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 10%;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
  line-height: 1;
}
.toggle:hover {
  background-color: #d7d0d0;
}
.toggle svg:hover {
  color: white;
}

.input {
  display: none;
}

.icon {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  transition: transform 500ms;
}

.icon--moon {
  transition-delay: 200ms;
}

.icon--sun {
  transform: scale(0);
}
.dropdown.dropdown-menu:hover {
  display: block;
  cursor: pointer;
}
.dropdown:hover {
  cursor: pointer;
}
.dropdown-menu {
  animation: growDown 300ms ease-in forwards;
  width: 53em;
  margin-left: -29em;
}

/*Mobile & tablet: width<1024px*/
@media only screen and (max-width: 63.9375em) {
  nav {
    display: none;
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
.hover_account {
  width: 8em;
  margin-left: -11em;
  /* background: #f4f4f4; */
  background-color: white;
  color: #4d4848;
  box-shadow: 1px 1px 5px gray;
}
/* Moon  */
.moon nav {
  background-color: transparent;
  /* text-shadow: 0 0 1px #181412, 0 0 2px #000000;
  color: #fffaf0; */
  color: #fffcef;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 27, 27, 0.3);
  animation: fadeIn linear 0.2s;
  transform: translate(-429px, 0px);
  z-index: 1;
  margin-top: 3em;
}
.nav_bar {
  width: 15.4em;
  height: 100%;
  background: rgb(46 43 43);
  box-shadow: 10px 0 5px -10px #b6b2b2;
  color: lightgrey;
}
.nav_bar .form {
  width: 213px;
}
.nav_bar li {
  line-height: 48px;
}
.moon .icon_cancle,
.moon .nav_bar {
  background-color: transparent;
}
.moon li {
  color: #f9f1e4;
}
.moon img {
  background-color: white;
}
.logo a {
  width: 11%;
}
</style>
