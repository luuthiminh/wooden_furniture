<template>
  <!-- <header class="header h-36 fixed z-10"> -->
  <header class="header h-24 fixed z-10 py-3 shadow-sm w-full">
    <div class="nav_header">
      <div class="grid mg-left-0 grid-cols-2">
        <div class="logo grid__item large--four-twelfths ml-28">
          <router-link to="/customerIndex">
            <img src="@/assets/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <nav
          class="border-2 border-yellow-700 grid__item large--eight-twelfths text-right clearfix"
        >
          <ul class="flex gap-x-9 pt-2">
            <router-link to="/customerIndex"></router-link>
            <li>
              <router-link to="/customerIndex"> Home</router-link>
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
            <li><router-link to="/about">About</router-link></li>
            <li><a href="">Contact</a></li>
            <li>
              <form class="form" @submit.prevent="search">
                <label for="search">
                  <input
                    v-model="keyword"
                    required=""
                    autocomplete="off"
                    placeholder="search your chats"
                    id="search"
                    type="text"
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
                  <button type="reset" class="close-btn">
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
                <!-- <button type="submit">Search</button> -->
              </form>
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
            <li>
              <router-link to="/">
                <li><i class="fa-solid fa-arrow-right-from-bracket"></i></li>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <!-- </header> -->
  <slot />
  <footer>
    <div class="footer w-full">
      <div class="background w-full">
        <div class="grid grid-cols-4 text-center gap-52 pt-3 mx-32">
          <div>
            <i class="fa-solid fa-truck-fast text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">FreeShip</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
          <div>
            <i class="fa-solid fa-headphones text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">Delivery</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
          <div>
            <i class="fa-solid fa-shield-halved text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">Support</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
          <div>
            <i class="fa-solid fa-gift text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">Gift</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-7">
          <div id="map">
            <iframe
              class="w-11/12 h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7462.013833373825!2d106.19338085869137!3d20.750513747007744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313595ac6b092eff%3A0x85dd1b5c537027d0!2zUXVhbmcgSMawbmcsIFBow7kgQ-G7qyBEaXN0cmljdCwgSHVuZyBZZW4sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1692044358229!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="info_contact leading-10 mt-11">
            <h1 class="font-semibold text-lg text">Shop Information</h1>
            <span class="font-semibold">Address: </span>
            <span>Quang Hung-Phu cu-Hung Yen</span>
            <br />
            <span class="font-semibold">Tel: </span>
            <span>0398677620</span>
            <br />
            <span class="font-semibold">Email: </span>
            <span>minhltgch200250@fpt.edu.vn</span>
            <br />
            <span class="font-semibold">Facebook: </span>
            <span>
              https://www.facebook.com/groups/677935762658362/user/100052778502317/
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      keyword: "",
      message: "",
    };
  },
  methods: {
    async search() {
      try {
        const response = await axios.post(
          "https://landlstore.azurewebsites.net/api/customer/search"
        );
        if (response.status === 200) {
          this.resposne = response.data;
        }
      } catch (error) {
        this.message = error.response.data.title;
        console.error(error.response.data.title);
        console.error(error);
      }
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
/* .nav_header {
  background-color: #dedddb;
} */
nav {
  width: 62%;
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
  padding-left: 2px;
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

/* footer */
/* footer */
.footer {
  position: relative;
  color: rgb(220, 210, 210);
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.7);
}
.footer h1 {
  color: rgb(220, 210, 210);
}
.footer::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url("@/assets/images/footer.png");
  background-size: cover;
  opacity: 0.3;
  height: 29rem;
}
</style>
