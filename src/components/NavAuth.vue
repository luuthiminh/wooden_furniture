<template>
  <navigation />
  <nav
    class="border-2 border-yellow-700 grid__item large--eight-twelfths text-right clearfix"
  >
    <ul class="flex gap-x-9 pt-2">
      <router-link to="/customerIndex"></router-link>
      <li>
        <router-link to="/customerIndex"> {{ $t("Home") }}</router-link>
      </li>
      <li>
        <div class="dropdown">
          <div class="dropdown-toggle" data-toggle="dropdown">
            <strong class="font-normal">All Product</strong>
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
      </li>
      <li>Mix</li>
      <li><router-link to="/about">About</router-link></li>
      <li><a href="">Contact</a></li>
      <li>
        <!-- <form @keyup.enter="search"> -->
        <div class="flex flex-cols-6 gap-x-3">
          <div class="col-span-4">
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
      <li>
        <router-link to="/profileCusPage" style="text-decoration: none"
          ><i class="fa-solid fa-user"></i
        ></router-link>
      </li>
      <li>
        <!-- <router-link to="/zeroOrder" style="text-decoration: none"
                ><i class="fa-solid fa-cart-shopping"></i
              ></router-link> -->
        <router-link to="/TemporaryCart" style="text-decoration: none"
          ><i class="fa-solid fa-cart-shopping"></i
        ></router-link>
      </li>
      <li>
        <div for="check" class="fa-solid fa-bell">
          <!-- <input id="check" hidden type="checkbox" class="input_check" />
                <label for="check" class="overlay"></label>
                <div class="bg-white w-40">
                  <div></div>
                </div> -->
        </div>
      </li>

      <li @click="logout">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </li>
      <li>
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
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";
import Navigation from "@/components/NavAuth.vue";

export default {
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      keyword: "",
      furnitureSearch: [],
      lang: lang,
    };
  },
  methods: {
    async search() {
      console.log(this.keyword);
      try {
        const response = await axios.get(
          "customer/furnitures/search?keyword=" + this.keyword
        );
        if (response.status === 200) {
          this.furnitureSearch = response.data;
          console.log(this.furnitureSearch);
        }
      } catch (error) {
        console.error(error);
        // alert("Furniture not found!");
      }
    },
    clear() {
      this.keyword = "";
    },
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
  },
  components: {
    Navigation,
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
  width: 90%;
}
.nav_header .logo img {
  max-width: 30%;
}
.wrapper {
  padding-left: 50rem;
}
.wrapper li {
  padding-left: 10%;
  font-size: 15px;
}
nav {
  background-color: #302924;
  position: sticky;
  z-index: 99;
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border: 1px solid #d3c2ae;
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
</style>
