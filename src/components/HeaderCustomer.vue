<template>
  <header class="header h-32 fixed z-10 py-3 w-full max-sm:h-20 max-md:h-20">
    <div class="nav_header">
      <div class="header_first flex items-center pb-2">
        <div
          class="logo flex large--four-twelfths ml-28 max-sm:ml-3 max-md:ml-3 max-md:pb-2"
        >
          <router-link to="/customerIndex">
            <img
              src="@/assets/images/logo.png"
              alt="logo"
              class="max-md:w-9/12"
            />
          </router-link>
          <div class="px-3 pt-1 max-sm:pt-0 max-md:pt-0 max-md:px-px">
            <span>L & L</span>
            <p>WOOD FURNITURE</p>
          </div>
          <div class="absolute right-3 flex items-center top-5 my-2">
            <div
              @click="OpenNavBar"
              class="hidden border border-1 border-solid-yellow-950 rounded-md hover:bg-slate-200 cursor-pointer ring-1 ring-yellow-600 max-sm:block max-md:block bg-yellow-900 text-white opacity-70"
            >
              <i class="bi bi-list px-1 hover:text-yellow-950"></i>
            </div>
          </div>
        </div>
        <nav class="grid__item text-right">
          <div class="flex">
            <ul class="flex gap-x-9">
              <router-link
                to="/customerIndex"
                class="text-decoration-none"
              ></router-link>
              <li class="search">
                <form>
                  <div class="flex flex-cols-6 gap-x-3">
                    <div class="col-span-4 font-normal">
                      <div class="form">
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
                      </div>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <ul class="ml-5 flex gap-x-5">
              <li class="flex gap-2">
                <router-link to="/TemporaryCart" style="text-decoration: none"
                  ><i class="bi bi-cart3 cursor-pointer text-2xl"></i>
                  <sup class="px-1 bg-red-600 rounded-full text-white">{{
                    cart.length
                  }}</sup>
                </router-link>
                <p class="font-semibold pt-1 text-lg">Cart</p>
              </li>

              <li
                @click.prevent="handelBell"
                class="flex items-center gap-x-1 ml-3"
              >
                <div class="bi bi-bell cursor-pointer text-sm flex">
                  <sup v-if="notifications.length"
                    ><span class="relative flex h-2 w-2">
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                      ></span>
                      <span
                        class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"
                      ></span>
                    </span>
                  </sup>
                </div>
                <small class="text-xs">Notifications</small>
              </li>
              <li>
                <div class="mode flex items-center" @click.prevent="toggleDark">
                  <label class="toggle" for="switch">
                    <input id="switch" class="input" type="checkbox" />
                    <div v-if="isDarkMode">
                      <div class="icon icon--moon pt-2">
                        <svg
                          height="13"
                          width="13"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div v-else>
                      <div class="icon icon--sun pt-2">
                        <svg
                          height="17"
                          width="17"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </label>
                  <small class="text-xs">Theme style</small>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <div class="flex gap-x-64 max-sm:hidden max-md:hidden">
        <ul class="flex px-28 gap-x-9 py-2 items-center pt-2">
          <li>
            <router-link
              to="/customerIndex"
              class="font-medium text-decoration-none hover:underline"
            >
              Home</router-link
            >
          </li>
          <li class="font-medium">
            <router-link to="/StoreIntroduction" class="text-decoration-none"
              >Introduce</router-link
            >
          </li>
          <li class="font-medium">
            <router-link to="/CustomizeFurniture" class="text-decoration-none"
              >Customize Furniture</router-link
            >
          </li>
          <li class="font-medium">
            <router-link to="/allproduct" class="text-decoration-none"
              >Al Furniture
            </router-link>
          </li>
          <li class="font-medium">
            <router-link to="/furnitureMix" class="text-decoration-none"
              >Mix
            </router-link>
          </li>
          <li>
            <div class="dropdown">
              <div class="dropdown-toggle" data-toggle="dropdown">
                <strong class="font-medium">About</strong>
              </div>
              <div class="dropdown-menu px-3 py-2 mt-1 leading-7">
                <li>
                  <router-link to="/news" class="font-medium text-base"
                    ><i class="fa-regular fa-newspaper pr-3"></i>
                    News</router-link
                  >
                </li>
                <li>
                  <router-link to="/tips" class="font-medium text-base"
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
          <li class="font-medium">
            <router-link to="/shoppingGuide" class="text-decoration-none"
              >Shopping Guide
            </router-link>
          </li>
          <li class="font-medium">
            <router-link to="/contactCus" class="text-decoration-none"
              >Contact</router-link
            >
          </li>
        </ul>
        <ul v-if="isLogin" class="flex gap-x-10 right-2 items-center">
          <li
            class="absolute right-28 flex gap-x-10 items-center font-semibold"
          >
            <div class="flex gap-x-2">
              <router-link to="/profileCusPage" class="text-decoration-none"
                ><i class="bi bi-person cursor-pointer text-xl"></i
              ></router-link>
              <p class="text-sm font-medium pt-1">Account</p>
            </div>

            <div @click.prevent="handleLogout" class="flex gap-x-2">
              <i
                class="bi bi-arrow-right-circle cursor-pointer text-lg pt-px"
              ></i>
              <p class="text-sm font-medium pt-1">Logout</p>
            </div>
          </li>
        </ul>
        <ul v-else class="flex items-center">
          <li class="absolute right-28 flex gap-x-2 items-center">
            <router-link to="/" class="text-decoration-none">
              <span class="font-medium text-sm">Login/ </span>
            </router-link>
            <router-link to="/" class="text-decoration-none">
              <span class="font-medium text-sm">Register </span>
            </router-link>
          </li>
        </ul>
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
            <form>
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
                  </div>
                </div>
              </div>
            </form>
          </div>
          <ul v-show="isLogin" class="flex gap-x-10 right-2 items-center">
            <li class="items-center px-3" @click.prevent="closeNavBar">
              <div class="flex gap-x-4 font-medium">
                <router-link to="/profileCusPage" class="text-decoration-none"
                  ><i class="bi bi-person cursor-pointer"></i
                ></router-link>
                <p class="">Account</p>
              </div>

              <div
                @click.prevent="handleLogout"
                class="flex gap-x-4 font-medium"
              >
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
                      ><i
                        class="fa-regular fa-newspaper pr-3 cursor-pointer"
                      ></i>
                      News</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/tips"
                      class="font-medium text-base cursor-pointer"
                      ><i class="fa-solid fa-seedling pr-3"></i>
                      Tips</router-link
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
    <!-- <div v-show="!isNavBar">
      <div class="nar_bar"></div>
    </div> -->
    <div v-if="isBell">
      <div v-if="notifications.length">
        <div
          class="w-96 bg-white float-right z-10 border border-1-black mr-4 rounded-md shadow-lg"
        >
          <div
            class="noti pl-4 font-semibold text-lg text-center py-2 bg-slate-50 text-yellow-950"
          >
            Notifications ({{ notifications.length }})
          </div>
          <div
            v-for="(notification, index) in notifications"
            :key="index"
            class="bell p-4 max-w-sm mx-auto bg-white flex items-center space-x-4"
          >
            <div class="shrink-0">
              <img
                class="h-12 w-12"
                src="@/assets/images/logo.png"
                alt="Logo"
              />
            </div>
            <div>
              <div class="text-base font-medium text-yellow-950">
                {{ notification.title }}
              </div>
              <p class="text-slate-500 text-sm py-2">
                {{ notification.content }}
              </p>
              <span class="text-xs">{{ notification.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";
export default {
  data() {
    return {
      keyword: "",
      furnitures: [],
      furnitureSearch: [],
      cart: [],
      isBell: false,
      notifications: [],
      isDarkMode: false,
      isLogin: false,
      isNavBar: false,
      filteredFurnitures: [],
    };
  },
  created() {
    this.getFurnitures();
    this.getAllAnnouncements();
    this.checkLogin();
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
    async getFurnitures() {
      try {
        const response = await axios.get("customer/furnitures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getCart() {
      try {
        const response = await axios.get("customer/cart");
        this.cart = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    // async search() {
    //   try {
    //     const response = await axios.get(
    //       "customer/furnitures/search?keyword=" + this.keyword
    //     );
    //     if (response.status === 200) {
    //       this.furnitureSearch = response.data;
    //       this.$router.push("/searchResult");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     alert("Furniture not found!");
    //   }
    // },
    search() {
      this.$store.dispatch("searchBooks", this.keyword).then(() => {
        this.$router.push({ name: "SearchResult" }); // Chuyển hướng đến trang tìm kiếm
      });
      console.log("Đã chueyenr hướng");
    },
    clear() {
      this.keyword = "";
      this.furnitureSearch = "";
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    handelBell() {
      this.isBell = !this.isBell;
    },
    async getAllAnnouncements() {
      try {
        const response = await axios.get("customer/announcements");
        if (response.status === 200) {
          this.notifications = response.data;
          this.notifications = this.notifications.map((noti) => ({
            ...noti,
            date: format(new Date(noti.date), "dd/MM/yyyy"),
          }));
        }
      } catch (error) {
        console.error(error);
        // alert("Furniture not found!");
      }
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
        this.isLight = true;
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
.header {
  box-shadow: 1px 1px 4px #dcd8d8;
  /* background-color: white; */
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 27, 27, 0.3);
  animation: fadeIn linear 0.2s;
}
.nav_bar {
  width: 15.4em;
  height: 100%;
  background: rgb(46 43 43);
  box-shadow: 10px 0 5px -2px #b6b2b2;
  color: lightgrey;
}
.nav_bar .form {
  width: 213px;
}
/* .nav_bar p {
  font-weight: 600;
  color: gray;
} */
.noti,
.bell {
  border-bottom: 1px solid #eeecec;
}
.nav_bar li {
  line-height: 48px;
}
.icon_cancle {
  background-color: rgb(185 189 206 / 17%);
  box-shadow: 0 4px 8px -6px #a5a7ac;
}
.moon .icon_cancle,
.moon .nav_bar {
  background-color: transparent;
}
.moon .header {
  box-shadow: 1px 1px 4px #0e0e0e;
}
.moon .header_first {
  border-bottom: 1px solid #413c3c;
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
.logo span {
  color: #553b29;
  font-weight: 700;
  font-size: 20px;
}
.moon .logo span {
  color: #d8c0a1;
}
.logo p {
  color: #5a2b00;
  margin-top: -3px;
  font-weight: 500;
  font-size: 13px;
}
.moon .logo p {
  color: #d2c4b2;
}
nav {
  width: 90%;
}
.wrapper {
  padding-left: 50rem;
}
.wrapper li {
  padding-left: 10%;
  font-size: 15px;
}
nav {
  position: sticky;
  z-index: 99;
  color: #2f220b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  /* border: 1px solid #d3c2ae; */
}
nav li {
  padding-left: 1px;
  padding-right: 2px;
}
.grid.mg-left-0 {
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

/* icon search */
.container-input {
  position: relative;
}

.input {
  width: 124px;
  padding: 3px 0px 3px 40px;
  border-radius: 9999px;
  border: solid 1px #333;
  transition: all 0.2s ease-in-out;
  outline: none;
  opacity: 0.8;
}

.container-input svg {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
}

.input:focus {
  opacity: 1;
  width: 250px;
}

/* dark */
.mode .toggle {
  /* background-color: #fff; */
  width: 26px;
  height: 26px;
  border-radius: 10%;
  display: grid;
  place-items: center;
  cursor: pointer;
  /* box-shadow: 0 0 50px 16px rgba(0, 0, 0, 0.1); */
  line-height: 1;
}
.mode .toggle svg:hover {
  color: gray;
}

.mode .input {
  display: none;
}

.mode .icon {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  transition: transform 500ms;
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
  --height: 25px;
  /*  height */
  width: 400px;
  padding-inline-end: 1em;
  /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border-radius: 4px;
  border: 1px solid gray;
}
.moon .form {
  background-color: #191b196e;
}
.moon .form svg {
  color: #bbbbbb;
}

.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
  margin-top: 4.4px;
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
.search .icon {
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
.header_first {
  border-bottom: 1px solid #eeecec;
}
.moon .header_first {
  border-bottom: 1px solid #504e4e;
}
/*Mobile & tablet: width<1024px*/
@media only screen and (max-width: 63.9375em) {
  nav {
    display: none;
  }
  .header {
    box-shadow: none;
  }
}
/*Mobile: width<780px*/
@media only screen and (max-width: 46.25em) {
  .header_first {
    border: none;
  }
  .logo a {
    width: 18%;
  }
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
