<template>
  <div class="homepage">
    <header>
      <ul class="contact_header flex wrapper text-right first-letter py-4">
        <li><i class="fa-solid fa-location-dot"></i>Hung Yen</li>
        <li><i class="fa-solid fa-phone"></i>+84 398677620</li>
        <li><i class="fa-regular fa-envelope"></i>minhltgch202050@gmail.com</li>
      </ul>
      <div class="nav_header">
        <div class="grid mg-left-0 grid-cols-2">
          <div class="logo grid__item large--four-twelfths pd-lef0 ml-32">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
          <nav
            class="border-2 border-yellow-700 grid__item large--eight-twelfths text-right clearfix"
          >
            <ul class="flex gap-x-9 px-1">
              <li><a href="">Home</a></li>
              <li><a href="">All Products</a></li>
              <li><a href="">Category</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li>
                <div class="search h-5">
                  <form class="form">
                    <label for="search">
                      <input
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
                  </form>
                </div>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-user"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
              </li>
              <a href="/">
                <li><i class="fa-solid fa-arrow-right-from-bracket"></i></li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
      <div class="text-center mt-5 text-red-950">
        <span class="font-bold text-2xl">Wooden Home furniture</span>
        <br />
        <span class="text-center">
          Add a special atmosphere to your home with our stylish and exclusive
          furniture
        </span>
      </div>
    </header>
    <content>
      <div class="mx-72">
        <div
          class="grid grid-cols-3 grid-flow-col gap-4 h-40 shadow-md max-h11"
        >
          <div class="col col_1">
            <div class="service-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div class="service-title text-xl font-semibold text-red-950">
              <h1>Warranty</h1>
            </div>
            <div class="service-description text-sm break-words text-gray-900">
              <span>3-year warranty on all products in store</span>
            </div>
          </div>
          <div class="col col_2">
            <div class="service-icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div class="service-title text-xl font-semibold text-red-950">
              <h1>Delivery</h1>
            </div>
            <div class="service-description text-sm text-gray-900">
              <span
                >We accept transportation from 10km to 30km and free shipping
                under 20km</span
              >
            </div>
          </div>
          <div class="col col_3">
            <div class="service-icon">
              <i class="fa-solid fa-headphones"></i>
            </div>
            <div class="service-title text-xl font-semibold text-red-950">
              <h1>Support 24/7</h1>
            </div>
            <div class="service-description text-sm text-gray-900">
              <span
                >Always ready to help 24/7. For any questions, please contact
                the hotline: 0398677620</span
              >
            </div>
          </div>
        </div>
        <div class="grid grid-rows-2 justify-center">
          <div class="grid grid-cols-6">
            <div>
              <img src="@/assets/images/category/bed.png" alt="bed" />
            </div>
            <div class="text-center">
              <h1>WARDROBE</h1>
              <div class="button">
                <router-link to="" class="btn my-8">See More</router-link>
              </div>
            </div>
            <div>
              <img src="@/assets/images/category/table.png" alt="" />
            </div>
            <div class="text-center">
              <h1>SOFA</h1>
              <div class="button">
                <router-link to="" class="btn my-8">See More</router-link>
              </div>
            </div>
            <div>
              <img src="@/assets/images/category/Clock.png" alt="clock" />
            </div>
            <div class="text-center">
              <h1>CLOCK</h1>
              <div class="button">
                <router-link to="" class="btn my-8">See More</router-link>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-6">
            <div class="text-center">
              <h1>BED</h1>
              <div class="button">
                <router-link to="" class="btn my-8">See More</router-link>
              </div>
            </div>
            <div>
              <img src="@/assets/images/category/bed.png" alt="bed" />
            </div>
            <div class="text-center">
              <h1>Shelves TV</h1>
              <div class="button">
                <router-link to="" class="btn my-8">See More</router-link>
              </div>
            </div>
            <div>
              <img src="@/assets/images/category/bed.png" alt="bed" />
            </div>
            <div class="text-center">
              <h1>Altar</h1>
              <div class="button">
                <router-link to="" class="btn btn my-8">See More</router-link>
              </div>
            </div>
            <div>
              <img src="@/assets/images/category/bed.png" alt="Altar" />
            </div>
          </div>
        </div>
        <div class="advertisement grid grid-cols-2 gap-5 mt-8">
          <div>
            <img
              class="origin-center hover:-rotate-6 transition-full"
              src="@/assets/images/advertisement/1.png"
              alt="advertisment"
            />
          </div>
          <div>
            <img
              class="origin-center hover:rotate-6 transition-full"
              src="@/assets/images/advertisement/3.png"
              alt="advertisment"
            />
          </div>
        </div>
        <div>
          <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
            <h1 class="crossbar">Hot Product</h1>
          </div>
          <div class="category_hot_product mb-4">
            <ul class="flex flex-1 justify-center gap-3 font-medium">
              <li>Desk chair</li>
              <li>Bed</li>
              <li>Wardrobe</li>
              <li>TV Shelf</li>
              <li>Clock</li>
              <li>Altar</li>
            </ul>
          </div>
          <div class="hot_product">
            <div class="grid grid-cols-4 gap-4">
              <div class="product rounded-md overflow-hidden relative">
                <div>
                  <router-link to="/furnitureDetail">
                    <img
                      src="@/assets/images/product/table_and_chair_set/set1.png"
                      alt="product1"
                    />
                  </router-link>
                </div>
                <div class="info_product hover:mb-8">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8 text-sm"
                      >ADD TO CARD</router-link
                    >
                  </div>
                  <!-- <div
                    class="z-10 h-1/2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-red-transparent"
                  ></div> -->
                  <div class="wish_list">
                    <div class="heart-container" title="Like">
                      <input
                        type="checkbox"
                        class="checkbox"
                        id="Give-It-An-Id"
                      />
                      <div class="svg-container">
                        <svg
                          viewBox="0 0 24 24"
                          class="svg-outline"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          class="svg-filled"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                          ></path>
                        </svg>
                        <svg
                          class="svg-celebrate"
                          width="100"
                          height="100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="10,10 20,20"></polygon>
                          <polygon points="10,50 20,50"></polygon>
                          <polygon points="20,80 30,70"></polygon>
                          <polygon points="90,10 80,20"></polygon>
                          <polygon points="90,50 80,50"></polygon>
                          <polygon points="80,80 70,70"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product rounded-md overflow-hidden">
                <div>
                  <img
                    src="@/assets/images/product/table_and_chair_set/set2.png"
                    alt="product2"
                  />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="product">
                <div>
                  <img src="@/assets/images/category/bed.png" alt="" />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="product">
                <div>
                  <img src="@/assets/images/category/bed.png" alt="" />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div class="product">
                <div>
                  <img src="@/assets/images/category/bed.png" alt="" />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="product">
                <div>
                  <img src="@/assets/images/category/bed.png" alt="" />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="product">
                <div>
                  <img src="@/assets/images/category/bed.png" alt="" />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="product rounded-md overflow-hidden">
                <div>
                  <img src="@/assets/images/category/bed.png" alt="" />
                </div>
                <div class="info_product">
                  <h1>Name Product</h1>
                  <span>Price: $1000</span>
                  <br />
                  <span>Quantity: 5</span>
                  <div class="button_card">
                    <router-link to="" class="btn btn my-8"
                      >ADD TO CARD</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="hot_news relative crossbar">
              <h1 class="text-center font-bold text-2xl mb-4 mt-5">Hot News</h1>
              <div class="grid grid-cols-3 gap-x-4">
                <div>
                  <router-link to="">
                    <img src="@/assets/images/news/4.png" alt="new1" />
                  </router-link>
                  <div>
                    <span class="text-sm text-center font-medium"
                      >What's so hot about the sofa? Does anyone know when the
                      sale will be released?</span
                    >
                    <br />
                    <span class="text-xs text-center font-medium"
                      >Date: 8/10/2023</span
                    >
                  </div>
                </div>
                <div>
                  <router-link to="">
                    <img src="@/assets/images/news/5.png" alt="new1" />
                  </router-link>
                  <div>
                    <span class="text-sm text-center font-medium"
                      >If it's too hard to choose, we're always happy to share
                      tips with you!</span
                    >
                    <br />
                    <span class="text-xs text-center font-medium"
                      >Date: 8/10/2023</span
                    >
                  </div>
                </div>
                <div>
                  <router-link to="">
                    <img src="@/assets/images/news/6.png" alt="new1" />
                  </router-link>
                  <div>
                    <span class="text-sm text-center font-medium"
                      >This week there are new models that will be updated in
                      the store. Click here to see details!</span
                    >
                    <br />
                    <span class="text-xs text-center font-medium"
                      >Date: 8/10/2023</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="hot_feedback md-8">
              <div class="grid grid-cols-5 my-5">
                <div class="col-span-2 text-center">
                  <div
                    class="time border border-gray-600 text-center bg-slate-50 mx-4 w-72 h-40"
                  >
                    <h1 class="text-lg pt-3 font-semibold">Business hours</h1>
                    <br />
                    <span class="text-sm px-3">Monday-Friday: 7AM-22PM</span>
                    <br />
                    <span class="text-sm px-3">Satuday-Sunday: 9AM-20PM</span>
                  </div>
                </div>
                <div class="col-span-3">
                  <h1
                    class="text-white crossbar text-2xl font-bold text-center mt-14"
                  >
                    Feedback Customer
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </content>
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
              <h1 class="font-semibold text-lg">Shop Information</h1>
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
  </div>
</template>

<script>
export default {
  // setup() {
  //   const isShowModal = false;
  //   showModalProductDetails() {
  //     this.isShowModal = !this.isShowModal;
  //   }
  // },
};
</script>

<style scoped>
.logo {
  width: 30%;
}
nav {
  width: 80%;
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
  padding-left: 6px;
  padding-right: 6px;
}
nav li a:hover {
  color: white;
}
.grid.mg-left-0 {
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
header {
  height: 45em;
  position: relative;
}
header::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgb(215, 212, 212);
  opacity: 0.99;
  background-image: url("@/assets/images/banner.png");
  background-size: cover;
  background-position: center;
}

.grid.grid-cols-3 {
  position: relative;
  margin-bottom: 40px;
}

content .col {
  transform: translate(40%, 10%);
  font-size: x-large;
}
.col i {
  color: #302924;
}
.service-title {
  transform: translateX(-9%);
  padding-top: 10px;
  padding-bottom: 10px;
}
.service-description {
  transform: translateX(-40%);
  width: 90%;
  text-align: center;
  padding-top: 20x;
}
.button .my-8,
.button_card .btn {
  background-color: #8d7a60;
  font-weight: 400;
  color: white;
}
.button_card .btn {
  font-size: 12px;
}
.grid-cols-6 .text-center {
  margin-top: 30%;
}
.grid-cols-6 .text-center h1 {
  font-weight: 600;
  justify-items: center;
  font-size: 15px;
}
.crossbar::after {
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 1px;
  right: -9px;
  top: 100%;
  transform: translateX(-430%);
  background-color: #8d7a60;
}
.grid.grid-rows-2 {
  /* background-color: #dad0c4; */
  background-color: #dfdedc;
}
.product {
  background-color: #dfdedc;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid rgb(215, 213, 213);
  border-radius: 5px;
}
.info_product {
  margin-top: 10px;
}

/*icon wish list */
.heart-container {
  --heart-color: rgb(255, 91, 137);
  position: relative;
  width: 30px;
  height: 30px;
  transition: 0.3s;
}

.heart-container .checkbox {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 20;
  cursor: pointer;
}

.heart-container .svg-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart-container .svg-outline,
.heart-container .svg-filled {
  fill: var(--heart-color);
  position: absolute;
}

.heart-container .svg-filled {
  animation: keyframes-svg-filled 1s;
  display: none;
}

.heart-container .svg-celebrate {
  position: absolute;
  animation: keyframes-svg-celebrate 0.5s;
  animation-fill-mode: forwards;
  display: none;
  stroke: var(--heart-color);
  fill: var(--heart-color);
  stroke-width: 2px;
}

.heart-container .checkbox:checked ~ .svg-container .svg-filled {
  display: block;
}

.heart-container .checkbox:checked ~ .svg-container .svg-celebrate {
  display: block;
}

@keyframes keyframes-svg-filled {
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(1);
    filter: brightness(1.5);
  }
}

@keyframes keyframes-svg-celebrate {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    filter: brightness(1.5);
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
    display: none;
  }
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
.hot_feedback {
  position: relative;
}
.hot_feedback .grid.grid-cols-5::before {
  content: "";
  height: 27rem;
  z-index: -1;
  inset: 0;
  background: rgb(215, 212, 212);
  opacity: 0.88;
  background-image: url("@/assets/images/feedback.png");
  background-size: contain;
  background-position: center;
  position: absolute;
}
.time {
  margin-top: 35%;
}
.hot_feedback .col-span-2 {
  transform: translate(20%, -7%);
}

/* footer */
.footer {
  position: relative;
  color: rgb(220, 210, 210);
  margin-top: 11rem;
  background: rgba(0, 0, 0, 0.7);
}
.footer::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url("@/assets/images/footer.png");
  background-size: cover;
  opacity: 0.3;
  height: 30rem;
}
</style>
