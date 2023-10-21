<template>
  <navigation />
  <nav
    class="border-2 border-yellow-700 text-right clearfix max-sm:hidden font-medium"
  >
    <ul class="flex gap-x-7 items-center">
      <router-link
        to="/customerIndex"
        class="text-decoration-none"
      ></router-link>
      <li>
        <router-link to="/customerIndex" class="text-decoration-none">
          Home</router-link
        >
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
      <li>All Product</li>
      <!-- <li>
        <div class="dropdown">
          <div class="dropdown-toggle" data-toggle="dropdown">
            <div>All Product</div>
          </div>
          <div class="dropdown-menu px-3 py-2 mt-1 leading-7">
            <li>
              <router-link to="/allproduct" class="font-medium text-base">
                Wardrobe</router-link
              >
            </li>
            <li>
              <router-link to="/allproduct" class="font-medium text-base">
                Sofa</router-link
              >
            </li>
            <li>
              <router-link to="/allproduct" class="font-medium text-base">
                Clock</router-link
              >
            </li>
            <li>
              <router-link to="/allproduct" class="font-medium text-base">
                Altar</router-link
              >
            </li>
            <li>
              <router-link to="/allproduct" class="font-medium text-base">
                Bed</router-link
              >
            </li>
            <li>
              <router-link to="/allproduct" class="font-medium text-base">
                Shelves TV</router-link
              >
            </li>
          </div>
        </div>
      </li> -->
      <li>
        <router-link to="/furnitureMix" style="text-decoration: none"
          >Mix
        </router-link>
      </li>
      <li class="dark:text-red">
        <router-link to="/about" class="text-decoration-none"
          >About</router-link
        >
      </li>
      <li>
        <router-link to="/contactCus" class="text-decoration-none"
          >Contact</router-link
        >
      </li>
      <li>
        <!-- <form @keyup.enter="search"> -->
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
          <!-- <div
                    class="col-span-2 bg-white text-black text-center px-2 py-2 rounded-md w-6/12"
                  >
                    <button type="submit" class="text-xs">Search</button>
                  </div> -->
        </div>
        <!-- </form> -->
      </li>
      <ul class="flex gap-x-4">
        <li class="cursor-pointer" @click.prevent="HandleMouseOver">
          <i class="bi bi-person-fill text-2xl"></i>
        </li>
        <!-- <li>
          <div @click.prevent="handelLogout">
            <i class="bi bi-box-arrow-right cursor-pointer"></i>
          </div>
        </li> -->
      </ul>
      <div>
        <router-link to="/TemporaryCart" style="text-decoration: none"
          ><i class="bi bi-cart3 cursor-pointer text-2xl"></i>
          <sup class="ml-1 px-1 bg-red-600 rounded-full text-white">2 </sup>
        </router-link>
      </div>
      <!-- <div class="">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> -->
      <!-- <li>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="lang"
          @change="handleChange($event)"
        >
          <option selected>English</option>
          <option value="en">English</option>
          <option value="vn">Viet Nam</option>
        </select>
      </li> -->
    </ul>
    <div class="bg-white" v-if="isShowAccount">
      <ul v-if="isLogin">
        <li>
          <router-link to="/profileCusPage" style="text-decoration: none"
            ><i class="bi bi-person-fill cursor-pointer text-2xl"></i
            >Profile</router-link
          >
        </li>
        <li>
          <div @click.prevent="handelLogout">
            <i class="bi bi-box-arrow-right cursor-pointer">Logout</i>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li>
          <router-link to="/" style="text-decoration: none"
            ><i class="bi bi-person-fill cursor-pointer text-2xl"></i
            >Login</router-link
          >
        </li>
        <li>
          <router-link to="/register" style="text-decoration: none"
            ><i class="bi bi-person-fill cursor-pointer text-2xl"></i
            >Register</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <!-- <div class="bg-white" v-if="isShowAccount">
    <ul v-if="isLogin">
      <li>
        <router-link to="/profileCusPage" style="text-decoration: none"
          ><i class="bi bi-person-fill cursor-pointer text-2xl"></i
          >Profile</router-link
        >
      </li>
      <li>
        <div @click.prevent="handelLogout">
          <i class="bi bi-box-arrow-right cursor-pointer">Logout</i>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link to="/" style="text-decoration: none"
          ><i class="bi bi-person-fill cursor-pointer text-2xl"></i
          >Login</router-link
        >
      </li>
      <li>
        <router-link to="/register" style="text-decoration: none"
          ><i class="bi bi-person-fill cursor-pointer text-2xl"></i
          >Register</router-link
        >
      </li>
    </ul>
  </div> -->
</template>
<script>
import axios from "axios";
export default {
  // props: { isDarkMode: Boolean },
  data() {
    return {
      isDarkMode: false,
      keyword: "",
      furnitureSearch: [],
      notifications: [],
      isLogin: false,
      isShowAccount: false,
    };
  },
  created() {
    // this.getLang();
    this.checkLogin();
  },
  methods: {
    async search() {
      try {
        const response = await axios.get(
          "customer/furnitures/search?keyword=" + this.keyword
        );
        if (response.status === 200) {
          this.furnitureSearch = response.data;
        }
      } catch (error) {
        console.error(error);
        // alert("Furniture not found!");
      }
    },
    clear() {
      this.keyword = "";
      this.furnitureSearch = "";
    },
    handleLogout() {
      localStorage.removeItem("token");
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
    // handleChange(event) {
    //   localStorage.setItem("lang", event.target.value);
    //   window.location.reload();
    // },
    // getLang() {
    //   const lang = localStorage.getItem("lang" || "en");
    //   this.lang = lang;
    // },
    checkLogin() {
      if (localStorage.getItem("token") !== "") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    HandleMouseOver() {
      this.isShowAccount = !this.isShowAccount;
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
/* .wrapper {
  padding-left: 50rem;
}
.wrapper li {
  padding-left: 10%;
  font-size: 15px;
} */
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
/* nav li {
  padding-left: 1px;
  padding-right: 2px;
} */
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

/* #switch:checked + .icon--moon {
  transform: rotate(360deg) scale(0);
}

#switch:checked ~ .icon--sun {
  transition-delay: 200ms;
  transform: scale(1) rotate(360deg);
} */

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
.dropdown:hover {
  cursor: pointer;
}
.dropdown.dropdown-menu:hover {
  display: block;
  cursor: pointer;
}
.dropdown-menu {
  animation: growDown 300ms ease-in forwards;
}
@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
/* @keyframes rotateMenu {
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
} */
</style>
