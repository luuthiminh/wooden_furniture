<template>
  <div class="profile bg-neutral-50">
    <div class="mx-56">
      <div class="cover_photo z-0">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 rounded-lg"
                src="@/assets/images/cover_image/cover_1.png"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 rounded-lg"
                src="@/assets/images/cover_image/cover_2.png"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 rounded-lg"
                src="@/assets/images/cover_image/cover_3.png"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="header_avatar_and_name_edit">
          <div class="flex">
            <div class="avatar">
              <img
                class="rounded-full w-3/12"
                src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                alt="avatar"
              />
            </div>
            <div class="name_and_edit">
              <h1 class="font-semibold text-2xl">Minh Lưu Thị</h1>
              <br />
              <div>
                <router-link to="/eidtInfo" class="font-medium text-sm"
                  ><i class="fa-solid fa-pencil"></i> Edit Profile</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 all_tabs bg-white px-4 py-4 rounded-md">
          <div class="col-span-1 pr-4">
            <div class="tab-pane active">
              <div
                class="tab-infomation px-6 py-6 border border-slate-600 bg-slate-50 rounded-md"
              >
                <h1
                  class="text-center pb-3 font-medium text-lg border-b-2 border-solid border-indigo-600"
                >
                  Information
                </h1>
                <div class="infor">
                  <div class="leading-10 text-sm">
                    <span class="font-semibold">First Name: </span>
                    <span>Minh</span>
                    <br />
                    <span class="font-semibold">Last Name: </span>
                    <span>Luu Thi</span>
                    <br />
                    <span class="font-semibold">Password: </span>
                    <span>*******</span>
                    <br />
                    <span class="font-semibold">Email: </span>
                    <span>minhltgch200250@gmail.com</span>
                    <br />
                    <span class="font-semibold">Phone: </span>
                    <span>0398677620</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="grid grid-cols-2 gap-x-3">
              <div class="product">
                <div>
                  <div class="card rounded-md overflow-hidden relative group">
                    <router-link to="/furnitureDetail">
                      <img
                        src="@/assets/images/category/sofa/sofa_2.png"
                        alt="bed"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                    </router-link>
                    <div
                      class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                    >
                      <h4 class="mb-3 text-sm opacity-80">
                        <a href="#">Sofa</a>
                      </h4>
                      <h3 class="mb-3 text-base">
                        <router-link to="/furnitureDetail">
                          <h1 class="font-forrmal mb-2">Sofa 1</h1>
                          <div class="grid grid-cols-2 gap-x-14">
                            <div class="price_product">
                              <span class="font-forrmal">Price: </span>
                              <span class="text-base">$1000</span>
                            </div>
                            <div class="status_product pl-12">
                              <span class="font-forrmal">Sold: </span>
                              <span class="text-base">12</span>
                            </div>
                          </div>
                        </router-link>
                      </h3>
                      <router-link
                        to=""
                        class="hover: transition-all text-sm inline-flex rounded-md py-2 text-center border-2 border-yellow-600"
                        style="text-decoration: none"
                      >
                        <button class="CartBtn">
                          <span class="IconContainer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="rgb(17, 17, 17)"
                              class="cart"
                            >
                              <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                              ></path>
                            </svg>
                          </span>
                          <p class="text">Add to Cart</p>
                        </button>
                      </router-link>
                    </div>
                    <div
                      class="z-10 h-2/3 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent"
                    ></div>
                    <a
                      href="#"
                      class="absolute z-0 inset-0 bg-yellow-700 opacity-0 group-hover:opacity-80 transition-all"
                    ></a>
                  </div>
                </div>
              </div>
              <div class="product">
                <div>
                  <div class="card rounded-md overflow-hidden relative group">
                    <router-link to="/furnitureDetail">
                      <img
                        src="@/assets/images/category/sofa/sofa_2.png"
                        alt="bed"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                    </router-link>
                    <div
                      class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                    >
                      <h4 class="mb-3 text-sm opacity-80">
                        <a href="#">Sofa</a>
                      </h4>
                      <h3 class="mb-3 text-base">
                        <router-link to="/furnitureDetail">
                          <h1 class="font-forrmal mb-2">Sofa 1</h1>
                          <div class="grid grid-cols-2 gap-x-14">
                            <div class="price_product">
                              <span class="font-forrmal">Price: </span>
                              <span class="text-base">$1000</span>
                            </div>
                            <div class="status_product pl-12">
                              <span class="font-forrmal">Sold: </span>
                              <span class="text-base">12</span>
                            </div>
                          </div>
                        </router-link>
                      </h3>
                      <router-link
                        to=""
                        class="hover: transition-all text-sm inline-flex rounded-md py-2 text-center border-2 border-yellow-600"
                        style="text-decoration: none"
                      >
                        <button class="CartBtn">
                          <span class="IconContainer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="rgb(17, 17, 17)"
                              class="cart"
                            >
                              <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                              ></path>
                            </svg>
                          </span>
                          <p class="text">Add to Cart</p>
                        </button>
                      </router-link>
                    </div>
                    <div
                      class="z-10 h-2/3 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent"
                    ></div>
                    <a
                      href="#"
                      class="absolute z-0 inset-0 bg-yellow-700 opacity-0 group-hover:opacity-80 transition-all"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-3">
              <div class="product">
                <div>
                  <div class="card rounded-md overflow-hidden relative group">
                    <router-link to="/furnitureDetail">
                      <img
                        src="@/assets/images/category/sofa/sofa_2.png"
                        alt="bed"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                    </router-link>
                    <div
                      class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                    >
                      <h4 class="mb-3 text-sm opacity-80">
                        <a href="#">Sofa</a>
                      </h4>
                      <h3 class="mb-3 text-base">
                        <router-link to="/furnitureDetail">
                          <h1 class="font-forrmal mb-2">Sofa 1</h1>
                          <div class="grid grid-cols-2 gap-x-14">
                            <div class="price_product">
                              <span class="font-forrmal">Price: </span>
                              <span class="text-base">$1000</span>
                            </div>
                            <div class="status_product pl-12">
                              <span class="font-forrmal">Sold: </span>
                              <span class="text-base">12</span>
                            </div>
                          </div>
                        </router-link>
                      </h3>
                      <router-link
                        to=""
                        class="hover: transition-all text-sm inline-flex rounded-md py-2 text-center border-2 border-yellow-600"
                        style="text-decoration: none"
                      >
                        <button class="CartBtn">
                          <span class="IconContainer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="rgb(17, 17, 17)"
                              class="cart"
                            >
                              <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                              ></path>
                            </svg>
                          </span>
                          <p class="text">Add to Cart</p>
                        </button>
                      </router-link>
                    </div>
                    <div
                      class="z-10 h-2/3 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent"
                    ></div>
                    <a
                      href="#"
                      class="absolute z-0 inset-0 bg-yellow-700 opacity-0 group-hover:opacity-80 transition-all"
                    ></a>
                  </div>
                </div>
              </div>
              <div class="product">
                <div>
                  <div class="card rounded-md overflow-hidden relative group">
                    <router-link to="/furnitureDetail">
                      <img
                        src="@/assets/images/category/sofa/sofa_2.png"
                        alt="bed"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                    </router-link>
                    <div
                      class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                    >
                      <h4 class="mb-3 text-sm opacity-80">
                        <a href="#">Sofa</a>
                      </h4>
                      <h3 class="mb-3 text-base">
                        <router-link to="/furnitureDetail">
                          <h1 class="font-forrmal mb-2">Sofa 1</h1>
                          <div class="grid grid-cols-2 gap-x-14">
                            <div class="price_product">
                              <span class="font-forrmal">Price: </span>
                              <span class="text-base">$1000</span>
                            </div>
                            <div class="status_product pl-12">
                              <span class="font-forrmal">Sold: </span>
                              <span class="text-base">12</span>
                            </div>
                          </div>
                        </router-link>
                      </h3>
                      <router-link
                        to=""
                        class="hover: transition-all text-sm inline-flex rounded-md py-2 text-center border-2 border-yellow-600"
                        style="text-decoration: none"
                      >
                        <button class="CartBtn">
                          <span class="IconContainer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="rgb(17, 17, 17)"
                              class="cart"
                            >
                              <path
                                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                              ></path>
                            </svg>
                          </span>
                          <p class="text">Add to Cart</p>
                        </button>
                      </router-link>
                    </div>
                    <div
                      class="z-10 h-2/3 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent"
                    ></div>
                    <a
                      href="#"
                      class="absolute z-0 inset-0 bg-yellow-700 opacity-0 group-hover:opacity-80 transition-all"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <footer>
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
        <div class="grid grid-cols-2 gap-2 mt-11">
          <div id="map">
            <iframe
              class="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7462.013833373825!2d106.19338085869137!3d20.750513747007744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313595ac6b092eff%3A0x85dd1b5c537027d0!2zUXVhbmcgSMawbmcsIFBow7kgQ-G7qyBEaXN0cmljdCwgSHVuZyBZZW4sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1692044358229!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="info_contact leading-10">
            <h1 class="font-semibold text-lg">Shop Information</h1>
            <span class="font-semibold">Address: </span>
            <span>Quang Hung-Phu cu-Hung Yen</span>
            <br />
            <span class="font-semibold">Tel:</span>
            <span>0398677620</span>
            <br />
            <span class="font-semibold">Email:</span>
            <span>minhltgch200250@fpt.edu.vn</span>
            <br />
            <span class="font-semibold">Facebook:</span>
            <span>
              https://www.facebook.com/groups/677935762658362/user/100052778502317/
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer> -->
</template>
<script></script>

<style scoped>
.header.fixed {
  background-color: #d9d0c4;
}
.logo img {
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
.footer {
  position: relative;
}
.background::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  background-image: url("@/assets/images/footer.png");
  background-size: cover;
  opacity: 0.2;
  height: 30rem;
}
.header_avatar_and_name_edit {
  transform: translate(10%, -120%);
}
.name_and_edit {
  transform: translate(-260%, 20%);
}
/* .tab.flex {
  margin-top: -7rem;
} */
/* .active {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  height: 15px;
  background-color: black;
  right: -9px;
  top: 70%;
  transform: translateY(-50%);
} */
/* .tab_content li {
  border-bottom: 1px dashed gray;
} */
.profile.mx-56.pd-3 {
  transform: translateY(-70px);
}
.all_tabs {
  margin-top: -120px;
}
.tabs {
  display: flex;
  position: relative;
}
.tabs .line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 6px;
  border-radius: 15px;
  background-color: #3b2d32;
  transition: all 0.2s ease;
}
.tab-item {
  min-width: 80px;
  padding-right: 9em;
  padding-left: 20px;
  font-size: 20px;
  text-align: center;
  color: #312c2e;
  /* background-color: #fff; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 5px solid transparent;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.5s ease;
}
.tab-icon {
  font-size: 24px;
  width: 32px;
  position: relative;
  top: 2px;
}
.tab-item:hover {
  opacity: 1;
  background-color: rgba(194, 53, 100, 0.05);
  border-color: rgba(194, 53, 100, 0.1);
}
.tab-item.active {
  opacity: 1;
}
.tab-pane {
  color: #333;
  display: none;
}
.tab-pane.active {
  display: block;
}
.tab-pane h2 {
  font-size: 24px;
  margin-bottom: 8px;
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
.category.border {
  margin-top: -2px;
  margin-bottom: 2em;
}
.product {
  background-color: #dfdedc;
  /* text-align: center; */
  margin-bottom: 20px;
  border: 1px solid rgb(215, 213, 213);
  border-radius: 5px;
}
.product h1 {
  color: white;
}
/* Button Add to cart  */
.CartBtn {
  width: 140px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: rgb(255, 208, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.5s;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
}

.IconContainer {
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: 0.5s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(17, 17, 17);
  z-index: 1;
  transition-duration: 0.5s;
  font-size: 1.04em;
  font-weight: 600;
}

.CartBtn:hover .IconContainer {
  transform: translateX(58px);
  border-radius: 40px;
  transition-duration: 0.5s;
}

.CartBtn:hover .text {
  transform: translate(10px, 0px);
  transition-duration: 0.5s;
}

.CartBtn:active {
  transform: scale(0.95);
  transition-duration: 0.5s;
}
</style>
