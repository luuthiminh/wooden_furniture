<template>
  <header>
    <ul class="header px-2">
      <li class="ml-4 w-1/12 flex">
        <div
          class="col-span-1"
          :style="{ display: !isShowTab ? 'none' : 'block' }"
        >
          <router-link to="/furnitureManage">
            <img class="w-4/12" src="@/assets/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <!-- <span class="font-semibold">L & L</span> -->
      </li>
      <li :style="{ marginLeft: !isShowTab ? '1em' : '10em' }">
        <i
          @click.prevent="toggleShowTab"
          class="fa-solid fa-bars text-amber-950 px-1 py-1 cursor-pointer"
        ></i>
      </li>
      <li class="mx-10 font-medium">
        <p
          class="stock text-amber-900 font-semibold w-10/12 opacity-80"
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
      <li class="flex gap-x-2" :style="{ width: !isShowTab ? '91%' : '10%' }">
        <router-link to="/TemporaryCart" style="text-decoration: none"
          ><i class="bi bi-bell cursor-pointer text-xl text-amber-950"></i>
          <sup class="px-1 bg-red-600 rounded-full text-white">2 </sup>
        </router-link>
        <p class="text-sm flex items-center text-amber-950">Notifications</p>
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
      <li v-if="isLogin" class="ml-10">
        <router-link to="/">
          <!-- <button
            class="ring-2 ring-yellow-700 ring-offset-4 ring-offset-slate-50 rounded-sm px-2 hover:ring-yellow-500 ring-opacity-50 text-amber-950 text-sm"
          >
            Login
          </button> -->
          <button
            class="transition ease-in-out delay-150 px-2 py-1 text-white ring-offset-2 ring-2 bg-yellow-700 ring-yellow-400 hover:ring-yellow-600 text-sm rounded-md flex"
          >
            Login
          </button>
        </router-link>
      </li>
      <li v-if="isLogin" class="mx-10">
        <router-link to="/register">
          <!-- <button
            class="ring-2 ring-yellow-700 ring-offset-4 ring-offset-slate-50 rounded-sm px-2 hover:ring-yellow-500 ring-opacity-50 text-amber-950 text-sm"
          >
            Register
          </button> -->
          <button
            class="transition ease-in-out delay-150 px-2 py-1 text-white ring-offset-2 ring-2 bg-yellow-700 ring-yellow-300 hover:ring-yellow-600 text-sm rounded-md flex"
          >
            Register
          </button>
        </router-link>
      </li>
    </ul>
  </header>
  <div class="content">
    <div class="flex flex-cols-10">
      <div class="col-span-3 fixed">
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
              <li @click.prevent="isShowTab = false">
                <router-link to="/indexAssistant">
                  <i
                    class="bi bi-house-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Home</p></router-link
                >
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
                  <p>Furniture</p></a
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
                  <p>Material</p></a
                >
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <a
                  href="/feedback"
                  aria-controls="feedback"
                  role="tab"
                  data-toggle="tab"
                >
                  <i
                    class="bi bi-chat-square-dots-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Feedback</p></a
                >
              </li>
              <li role="presentation" @click.prevent="isShowTab = false">
                <a
                  href="#wishlist"
                  aria-controls="wishlist"
                  role="tab"
                  data-toggle="tab"
                >
                  <i
                    class="bi bi-bag-heart-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Wishlist</p></a
                >
              </li>
              <li role="presentation" @click.prevent="isShowTab = true">
                <a
                  href="#notification"
                  aria-controls="notification"
                  role="tab"
                  data-toggle="tab"
                >
                  <i
                    class="bi bi-bell-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p class="text-amber-950 text-sm flex items-center">
                    Notification
                  </p></a
                >
              </li>
              <li role="presentation" @click.prevent="isShowTab = true">
                <router-link to="/labelManagement">
                  <i
                    class="bi bi-bookmark-check-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Label</p>
                </router-link>
              </li>
              <li role="presentation" @click.prevent="isShowTab = true">
                <router-link to="/woodManagement">
                  <i
                    class="bi bi-tree-fill bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-800"
                  ></i>
                  <p>Wood</p>
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
                      <h3 class="text-center font-medium">Manager Furniture</h3>

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
                          <router-link to="/newFurniture"
                            >Add New Furniture</router-link
                          >
                        </li>
                        <li>Exported</li>
                        <li>Inventory</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="material">
                <div class="">
                  <div class="h-12/12 px-2">
                    <div class="px-2 pt-9 pb-2 mb-4">
                      <h3 class="text-center font-medium">Manager Material</h3>

                      <div class="search mt-4">
                        <div class="container">
                          <input
                            type="text"
                            name="text"
                            class="input"
                            placeholder="Dark Twitch Search"
                          />
                          <button class="search__btn">
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
                        <li>Export material</li>
                        <li>Inventory material</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div role="tabpanel" class="tab-pane" id="feedback"></div>
              <div role="tabpanel" class="tab-pane" id="wishlist"></div>
              <div role="tabpanel" class="tab-pane" id="notification"></div> -->
              <div role="tabpanel" class="tab-pane" id="other">
                <div class="">
                  <div class="h-12/12 px-2">
                    <div class="px-2 pt-9 pb-2 mb-4">
                      <h3 class="text-center font-medium">Manager Other</h3>
                    </div>
                    <div class="px-4 text-sm">
                      <ul class="furniture leading-10">
                        <li>
                          <router-link to="/woodManagement">Wood</router-link>
                        </li>
                        <li>
                          <router-link to="/labelManagement">Label</router-link>
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
        class="grow z-0"
        :style="{ marginLeft: !isShowTab ? '8em' : '22em' }"
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
// import NotificationSuccess from "@/components/NotificationSuccess.vue";
export default {
  components: {
    // NotificationSuccess,
  },
  data() {
    return {
      isShowTab: true,
      isLogin: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    toggleShowTab() {
      console.log("Phương thức toggleShowTab được gọi.");
      this.isShowTab = !this.isShowTab;
      console.log(this.isShowTab);
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    checkLogin() {
      if (localStorage.getItem("token") !== "") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
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

i {
  opacity: 0.5;
}
.header {
  background-color: #ffffff;
  position: fixed;
  z-index: 99;
  color: #665e4e;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #d5d3d14d;
  background: linear-gradient(
    to right,
    #f1e4cc40,
    #e8d5cd66,
    #f1e4cc2b,
    #e8d5cd66
  );
}

li {
  cursor: pointer;
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
.content {
  padding-top: 70px;
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
</style>
