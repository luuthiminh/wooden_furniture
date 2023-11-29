<template>
  <header>
    <ul class="header px-2">
      <li class="ml-4 w-1/12 flex">
        <div
          class="col-span-1"
          :style="{ display: !isShowTab ? 'none' : 'block' }"
        >
          <router-link to="/furnitureManage">
            <img
              class="w-4/12 max-md:w-10/12"
              src="@/assets/images/logo.png"
              alt="logo"
            />
          </router-link>
        </div>
        <!-- <span class="font-semibold">L & L</span> -->
      </li>
      <li :style="{ marginLeft: !isShowTab ? '1em' : '10em' }">
        <i
          @click.prevent="toggleShowTab"
          class="fa-solid fa-bars text-amber-950 px-1 py-1 cursor-pointer max-sm:hidden max-md:hidden"
        ></i>
      </li>
      <li class="mx-10 font-medium max-sm:hidden max-md:hidden">
        <p
          class="stock text-amber-900 font-semibold w-10/12"
          :style="{ marginRight: !isShowTab ? '53em' : '32em' }"
        >
          STOCK INFORMATION
        </p>
      </li>
      <li v-if="!isLogin" class="flex mr-4">
        <div class="user-info mt-1">
          <span class="user_name text-amber-900 opacity-80">Minh</span>
          <span class="assistant">Assistant</span>
        </div>
        <div class="avatar ml-1">
          <router-link to="/profileAssistant">
            <img
              class="img-profile img-circle img-responsive center-block rounded-full cursor-pointer"
              src="@/assets/images/avatar.jpg"
              alt="avatar"
            />
          </router-link>
        </div>
      </li>
      <li @click.prevent="handelBell" class="flex items-center gap-x-1 ml-3">
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
      <li
        class="flex gap-x-2 items-center"
        @click.prevent="handleLogout"
        v-if="!isLogin"
      >
        <i
          class="fa-solid fa-arrow-right-from-bracket cursor-pointer text-xl text-amber-950"
        ></i>
        <p class="text-sm flex items-center text-amber-950">Logout</p>
      </li>
      <li v-if="isLogin" class="ml-52 max-sm:hidden max-md:hidden">
        <router-link to="/">
          <button
            class="transition ease-in-out delay-150 px-2 py-1 font-medium text-white hover:ring-offset-2 hover:ring-2 bg-yellow-700 hover:ring-yellow-600 text-sm rounded-md flex"
          >
            Login
          </button>
        </router-link>
      </li>
    </ul>
    <div v-if="isBell">
      <div v-if="notifications.length">
        <div
          class="w-96 bg-white float-right z-10 border border-1-black mr-4 rounded-md shadow-lg mt-16"
        >
          <div
            class="noti pl-4 font-semibold text-lg text-center py-2 bg-slate-50"
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
              <div class="text-base font-medium text-black">
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
    <!-- <div
      @click.prevent="OpenNavBar(nav)"
      class="absolute items-center top-5 my-2 right-3 hidden border border-1 border-solid-yellow-950 rounded-md hover:bg-slate-200 cursor-pointer ring-1 ring-yellow-600 max-sm:block max-md:block bg-yellow-900 text-white opacity-90 z-10"
    >
      <i class="bi bi-list px-1 hover:text-yellow-950"></i>
    </div> -->

    <!-- <div v-if="(type = nav)"> -->
    <!-- <div class="overlay">
        <div class="nav_bar">
          <div
            class="icon_cancle flex items-center px-3 border-1 border-bottom border-solid-yellow-600 opacity-90"
          >
            <div>
              <i
                @click.prevent="closeNavBar"
                class="bi bi-x-square pl-48 py-3 text-xl flex items-center cursor-pointer"
              ></i>
            </div>
          </div>
          <div class="search mt-4">
            <div class="container">
              <input
                type="text"
                name="text"
                class="input"
                placeholder="Dark Twitch Search"
              />
              <button
                class="search__btn bg-gradient-to-r from-yellow-700 to-orange-800 opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                    fill="#efeff1"
                  ></path>
                </svg>
              </button>
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
            <li class="font-medium" @click.prevent="closeNavBar">
              <router-link to="/indexAssistant" class="flex gap-x-4">
                <i
                  class="bi bi-house-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Home</p></router-link
              >
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <a
                href="#furniture active"
                aria-controls="furniture"
                role="tab"
                data-toggle="tab"
                class="active flex gap-x-4"
              >
                <i
                  class="bi bi-house-heart-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Furniture</p></a
              >
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <a
                href="#material"
                aria-controls="material"
                role="tab"
                data-toggle="tab"
                class="flex gap-x-4"
              >
                <i
                  class="bi bi-bricks bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Material</p></a
              >
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <a
                href="/feedback"
                aria-controls="feedback"
                role="tab"
                data-toggle="tab"
                class="flex gap-x-4"
              >
                <i
                  class="bi bi-chat-square-dots-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Feedback</p></a
              >
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <a
                href="#wishlist"
                aria-controls="wishlist"
                role="tab"
                data-toggle="tab"
                class="flex gap-x-4"
              >
                <i
                  class="bi bi-bag-heart-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Wishlist</p></a
              >
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <a
                href="#notification"
                aria-controls="notification"
                role="tab"
                data-toggle="tab"
                class="flex gap-x-4"
              >
                <i
                  class="bi bi-bell-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p class="text-amber-950 text-sm flex items-center">
                  Notification
                </p></a
              >
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <router-link to="/labelManagement" class="flex gap-x-4">
                <i
                  class="bi bi-bookmark-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Label</p>
              </router-link>
            </li>
            <li class="font-medium" @click.prevent="closeNavBar">
              <router-link to="/woodManagement" class="flex gap-x-4">
                <i
                  class="bi bi-tree-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Wood</p>
              </router-link>
            </li>
          </ul>
        </div> -->
    <!-- </div> -->
    <!-- <span>Hi</span>
    </div> -->
  </header>
  <div class="content">
    <div class="flex flex-cols-10">
      <div class="col-span-3 fixed max-sm:hidden max-md:hidden z-1">
        <div class="flex flex-cols-2">
          <nav class="col-span-1 nav shadow-md">
            <div class="user">
              <div class="user-box text-center">
                <!-- <div class="avatar ml-1">
                  <router-link to="/profileAssistant">
                    <img
                      class="img-profile img-circle img-responsive center-block rounded-full cursor-pointer"
                      src="@/assets/images/avatar.jpg"
                      alt="avatar"
                    />
                  </router-link>
                </div>
                <div class="user-info mt-1">
                  <span class="user_name">Minh</span>
                  <span class="assistant">Assistant</span>
                </div> -->
                <!-- <hr class="user_hr text-slate-300" /> -->
              </div>
            </div>

            <ul class="bar nav nav-stacked" role="tablist">
              <li @click.prevent="handleHome">
                <!-- <router-link to="/indexAssistant"> -->
                <i
                  class="bi bi-house-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                ></i>
                <p>Home</p>
                <!-- </router-link
                > -->
              </li>
              <li role="presentation" @click.prevent="isShowTab = true">
                <a
                  href="#furniture active"
                  aria-controls="furniture"
                  role="tab"
                  data-toggle="tab"
                  class="active"
                >
                  <i
                    class="bi bi-house-heart-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <router-link to="/furnitureManage">
                    <p>Furniture</p>
                  </router-link></a
                >
              </li>
              <li role="presentation" @click.prevent="isShowTab = true">
                <a
                  href="#material"
                  aria-controls="material"
                  role="tab"
                  data-toggle="tab"
                >
                  <i
                    class="bi bi-bricks bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <router-link to="/materialManagement">
                    <p>Material</p>
                  </router-link></a
                >
              </li>

              <li role="presentation" @click.prevent="isShowTab = false">
                <router-link to="/repositoriesManagement">
                  <i
                    class="bi bi-database-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Repositories</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <router-link to="/orderRequestManage">
                  <i
                    class="bi bi-cart-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Order</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <router-link to="/feedbackManagement">
                  <i
                    class="bi bi-chat-square-dots-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Feedback</p>
                </router-link>
              </li>

              <li role="presentation" @click.prevent="isShowTab = flase">
                <router-link to="/notiManagement">
                  <i
                    class="bi bi-bell-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Notification</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = flase">
                <router-link to="/labelManagement">
                  <i
                    class="bi bi-bookmark-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Label</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <router-link to="/woodManagement">
                  <i
                    class="bi bi-tree-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Wood</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <router-link to="/colorManagement">
                  <i
                    class="bi bi-palette-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Color</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <router-link to="/postManagement">
                  <i
                    class="bi bi-file-post bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Post</p>
                </router-link>
              </li>

              <!-- <li role="presentation" @click.prevent="isShowTab = true">
                <a
                  href="#other"
                  aria-controls="other"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa-solid fa-circle-plus"></i>
                  <p>Other</p></a
                >
              </li> -->
            </ul>
          </nav>
          <div v-if="isShowTab" class="bar_content pt-2 bg-gray-5">
            <!-- Tab panes -->
            <div class="tab-content col-span-5">
              <div role="tabpanel" class="tab-pane active" id="furniture">
                <div class="">
                  <div class="h-12/12 px-2">
                    <div class="px-2 pt-9 pb-2 mb-4">
                      <h3 class="text-center font-medium">
                        Management Furniture
                      </h3>

                      <div class="search mt-4">
                        <div class="container">
                          <input
                            type="text"
                            name="text"
                            class="input"
                            placeholder="Dark Twitch Search"
                          />
                          <button
                            class="search__btn bg-gradient-to-r from-yellow-700 to-orange-800 opacity-90"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                            >
                              <path
                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                                fill="#efeff1"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 text-sm">
                      <ul class="furniture leading-10">
                        <li>
                          <router-link to="/furnitureManage"
                            >All Furniture</router-link
                          >
                        </li>

                        <li>
                          <router-link to="/historyFurRepo"
                            >History repositories furniture</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="material">
                <div class="">
                  <div class="h-12/12 px-2">
                    <div class="px-2 pt-9 pb-2 mb-4">
                      <h3 class="text-center font-medium">
                        Management Material
                      </h3>

                      <div class="search mt-4">
                        <div class="container">
                          <input
                            type="text"
                            name="text"
                            class="input"
                            placeholder="Dark Twitch Search"
                          />
                          <button
                            class="search__btn bg-gradient-to-r from-yellow-700 to-orange-800 opacity-90"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                            >
                              <path
                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                                fill="#efeff1"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 text-sm">
                      <ul class="furniture leading-10">
                        <li>
                          <router-link to="/materialManagement"
                            >All material</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/importMaterial"
                            >Import material</router-link
                          >
                        </li>

                        <li>
                          <router-link to="/historyMaterialRepo"
                            >History repositories material</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grow z-0 px-6"
        :style="{
          marginLeft: !isShowTab ? '5em' : '22em',
        }"
      >
        <!-- <div class="px-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent text-xs pt-3">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">All Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Sofa</li>
            </ol>
          </nav>
        </div> -->
        <slot />
        <!-- <notification-success /> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { format } from "date-fns";
export default {
  components: {},
  data() {
    return {
      isShowTab: true,
      isLogin: false,
      type: null,
      notifications: [],
      isBell: false,
    };
  },
  created() {
    this.checkLogin();
    this.getAnnouncements();
  },
  methods: {
    toggleShowTab() {
      this.isShowTab = !this.isShowTab;
      console.log(this.isShowTab);
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    checkLogin() {
      if (localStorage.getItem("token") == "") {
        this.isLogin = false;
        this.$router.push({ name: "login" });
      } else {
        this.isLogin = true;
      }
    },
    OpenNavBar(nav) {
      this.type = nav;
    },
    closeNavBar() {
      this.isNavBar = !this.isNavBar;
    },
    handleHome() {
      this.isShowTab = false;
      this.$router.push("indexAssistant");
      setTimeout(() => {
        this.$router.push("dashboardAssistant");
      }, 7000);
    },
    handelBell() {
      this.isBell = !this.isBell;
    },
    async getAnnouncements() {
      try {
        const response = await axios.get("assistant/announcements");
        this.notifications = response.data;
        if (response.status === 200) {
          this.notifications = response.data;
          this.notifications = this.notifications.map((noti) => ({
            ...noti,
            date: format(new Date(noti.date), "dd/MM/yyyy"),
          }));
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
/* .header {
  background-color: #302924;
  position: fixed;
  z-index: 99;
  color: wheat;
  display: flex;
  align-items: center;
  height: 70px;
  border: 1px solid #d3c2ae;
} */

.header {
  background-color: #ffffff;
  position: fixed;
  /* z-index: 99; */
  z-index: 1;
  color: #665e4e;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #d5d3d14d;
  /* background: linear-gradient(
    to right,
    #f1e4cc40,
    #e8d5cd66,
    #f1e4cc2b,
    #e8d5cd66
  ); */
  /* background: linear-gradient(to right, #f1e4cc, #e8d5cd, #f1e4cc, #e8d5cd); */
  background: linear-gradient(to right, #f5ebda, #ffece4, #f5ebda, #ffece4);
}
.col-span-3 {
  background: #f9fafb;
}
li {
  cursor: pointer;
}

i {
  opacity: 0.9;
}

.nav_bar li {
  line-height: 58px;
}
.user_hr {
  width: 6em;
  margin-left: -20px;
}
.col-span-2.bar_content {
  margin-top: -44em;
  width: 72%;
  margin-left: 6em;
  z-index: 10;
  /* border-left: 1px solid #e4eaea87; */
}
.col-span-7 {
  background-color: #f0f2f5;
  /* background-color: #f1f1f1; */
  width: 100%;
}
nav ul {
  border-bottom: none;
}
nav li {
  display: block;
  float: none;
  font-size: 14px;
  border-bottom: 1px solid #dce1e678;
  margin-right: 0;
  margin-bottom: 0;
  color: #01040e;
  padding-top: 12px;
  padding-bottom: 13px;
  text-align: center;
  width: 100%;
  font-weight: 500;
}
nav {
  display: block;
  background: white;
  bottom: 0;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  width: 6em;
  height: 43em;
}
.bar.leading-4 {
  margin-top: 8em;
}
nav i {
  padding-bottom: 15px;
}

.avatar {
  height: 48px;
  width: 48px;
}
.user_name {
  /* color: #343a40; */
  display: block;
  font-weight: 600;
  font-size: 15px;
}
.assistant {
  font-size: 13px;
  color: #98a6ad !important;
}
.user-box {
  min-height: 80px;
  padding: 20px;
  position: relative;
}
/* search */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
}

.input[data-v-10ef1898] {
  max-width: 230px;
  height: 100%;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  /* background-color: #66645f; */
  background-color: #ffffff;
  caret-color: #f7f7f8;
  color: #fff;
  padding: 7px 40px;
  border: 1px solid #928c8ca1;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;
}
.input:hover {
  border: 2px solid rgba(255, 255, 255, 0.16);
}

.input:focus {
  border: 2px solid #a970ff;
  background-color: #0e0e10;
}

.search__btn {
  border: none;
  cursor: pointer;
  /* background-color: rgb(51, 51, 62); */
  /* background-color: #89693a; */
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__btn:hover {
  background-color: rgba(54, 54, 56, 1);
}
.stock {
  margin-right: 43em;
}
.col-span-1.nav,
.bar_content {
  border-right: 1px solid #d4cecb4a;
  /* background-color: #f4f4f42e; */
}
.grow.z-0 {
  background-color: #f4f4f445;
}
.user {
  height: 0px;
}
.fa-regular {
  font-size: 19px;
}
.fa-solid {
  font-size: 17px;
}
.furniture li {
  color: #000000d6;
  font-weight: 500;
}
/* .furniture li {
  color: rgb(90, 91, 103);
} */
/* .furniture li {
  color: rgb(36, 49, 186);
} */
/* .user-box,
.bar.leading-4 {
  background: #f1f1f1;
} */
.nav.nav-stacked i {
  font-size: 17px;
}
table {
  color: rgb(68 64 60);
}
.bar.nav {
  /* overflow: scroll;
  overflow-x: hidden;
  height: 32em;
  margin-top: 7.5rem; */
  line-height: 26px;
  margin-top: 10px;
  overflow: scroll;
  overflow-x: hidden;
  height: 38em;
}
.bar.nav::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.bar.nav::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
  height: 10px;
  margin-top: 1em;
}

.bar.nav::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
.content {
  padding-top: 70px;
}
/*
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 27, 27, 0.3);
  animation: fadeIn linear 0.2s;
  z-index: 100;
}
.nav_bar {
  width: 15.4em;
  height: 100%;
  background: rgb(251, 250, 250);
  box-shadow: 10px 0 5px -2px #b6b2b2;
  z-index: 100;
}
*/
sup {
  margin-left: -0.6em;
}
.icon_cancle {
  background-color: rgb(185 189 206 / 17%);
  box-shadow: 0 4px 13px -6px #a5a7ac;
}
/* search */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
}

.input {
  max-width: 190px;
  height: 100%;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  /* background-color: #66645f; */
  background-color: #ffffff;
  caret-color: #f7f7f8;
  color: #fff;
  padding: 7px 10px;
  border: 1px solid #928c8ca1;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;
}

.input:hover {
  border: 2px solid rgba(255, 255, 255, 0.16);
}

.input:focus {
  border: 2px solid #a970ff;
  background-color: #0e0e10;
}

.search__btn {
  border: none;
  cursor: pointer;
  /* background-color: rgb(51, 51, 62); */
  /* background-color: #89693a; */
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__btn:hover {
  background-color: rgba(54, 54, 56, 1);
}
/*Mobile & tablet: width<1024px*/
@media only screen and (max-width: 63.9375em) {
  .grow.z-0 {
    margin-left: 2em;
  }
  .content {
    padding-top: 70px;
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
