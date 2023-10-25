<template>
  <div v-if="furnitureSearch.length">
    <search-results :furnitureSearch="furnitureSearch"></search-results>
  </div>
  <div v-else>
    <header @mouseleave="HandleHeader">
      <div class="header_scroll flex text-sm">
        <div class="container-fluid bg-light p-0">
          <div class="flex">
            <div class="col-lg-7 px-5 text-start">
              <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                <small class="bi bi-geo-alt text-yellow-950 pr-2"></small>
                <small> <p>Quang Hung-Phu Cu-Hung Yen</p></small>
              </div>
              <div class="h-100 d-inline-flex align-items-center py-3">
                <small class="bi bi-alarm far me-2"></small>
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
              </div>
            </div>
            <div class="flex col-lg-5 pl-36 text-end gap-x-4">
              <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                <small class="fa-solid fa-phone me-2"></small>
                <small>+84 398677620</small>
              </div>
              <div class="flex gap-x-3 items-center">
                <div class="mode mt-2" @click.prevent="toggleDark">
                  <label class="toggle" for="switch">
                    <input id="switch" class="input" type="checkbox" />
                    <div v-if="isDarkMode">
                      <div class="icon icon--moon">
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
                      <div class="icon icon--sun">
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
                </div>
                <small>Theme styles</small>
              </div>
              <div class="flex gap-x-3 items-center pl-2">
                <div @click.prevent="handelBell">
                  <div class="bi bi-bell cursor-pointer text-base">
                    <sup class="px-1 bg-red-600 rounded-full text-white"
                      >{{ notifications.length }}
                    </sup>
                  </div>
                </div>
                <small>Notifications</small>
              </div>

              <div class="h-100 d-inline-flex align-items-center">
                <a
                  href=""
                  class="btn btn-sm-square bg-white text-yellow-950 me-1"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav_header py-3 bg-white">
        <div
          :style="{
            'margin-top': !isShowHeader ? '0px' : '-70px',
            position: !isShowHeader ? 'relative' : 'fixed',
            background: !isShowHeader ? 'transparent' : 'white',
            'z-index': !isShowHeader ? '0' : '101',
          }"
        >
          <div class="grid mg-left-0 grid-cols-2">
            <div class="logo flex mx-5 items-center w-3/12">
              <router-link to="/customerIndex">
                <img src="@/assets/images/logo.png" alt="logo" />
              </router-link>
              <div class="px-3">
                <span>L & L</span>
                <p>WOOD FURNITURE</p>
              </div>
            </div>
            <navigation />
          </div>
        </div>
      </div>
      <div v-if="isBell">
        <div v-if="notifications.length">
          <div
            v-for="(notification, index) in notifications"
            :key="index"
            class="bell w-80 bg-white absolute right-0 border border-1-black mr-4 rounded-lg"
          >
            <div class="pl-4 font-medium text-lg text-center py-2">
              Notifications
            </div>
            <ul class="message bg-slate-50 mb-px rounded-b-lg">
              <li class="card_bell">
                <hr />
                <div class="textBox px-4 py-2">
                  <div class="textContent flex py-3">
                    <p class="font-semibold text-sm pr-24">
                      {{ notification.title }}
                    </p>
                    <span class="text-xs">{{ notification.date }}</span>
                  </div>
                  <p class="text-sm">{{ notification.content }}</p>
                </div>
              </li>
              <li class="card_bell">
                <hr />
                <div class="textBox px-4 py-2">
                  <div class="textContent flex py-3">
                    <p class="font-semibold text-sm pr-24">Clans of Clash</p>
                    <span class="text-xs">12 min ago</span>
                  </div>
                  <p class="text-sm">Xhattmahs is not attacking your base!</p>
                </div>
              </li>
              <li class="card_bell">
                <hr />
                <div class="textBox px-4 py-2">
                  <div class="textContent flex py-3">
                    <p class="font-semibold text-sm pr-24">Clans of Clash</p>
                    <span class="text-xs">12 min ago</span>
                  </div>
                  <p class="text-sm">Xhattmahs is not attacking your base!</p>
                </div>
              </li>
              <li class="card_bell">
                <hr />
                <div class="textBox px-4 py-2">
                  <div class="textContent flex py-3">
                    <p class="font-semibold text-sm pr-24">Clans of Clash</p>
                    <span class="text-xs">12 min ago</span>
                  </div>
                  <p class="text-sm">Xhattmahs is not attacking your base!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text_header_intro">
        <div class="text-center mt-4">
          <h1 class="h1_header font-bold max-sm:text-base">
            WOODEN HOME FURNITURE
          </h1>
          <h3 class="text_intro max-sm:text-xs pt-3">
            Add a special atmosphere to your home with our stylish and exclusive
            furniture
          </h3>
        </div>
        <div class="button_shine mt-14 text-center">
          <router-link to="/allProduct">
            <button class="shine-button">See Furniture</button>
          </router-link>
        </div>
      </div>
    </header>
    <div class="homepage">
      <content>
        <div class="mx-64 max-sm:mx-1">
          <div
            class="service grid grid-cols-3 grid-flow-col h-40 max-h1 shadow-2xl"
          >
            <div
              class="service_item col col_1 border-r-1 border-indigo-600 text-center"
            >
              <div class="service-icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div
                class="service-title text-xl font-semibold text-red-950 max-md:text-base"
              >
                <h1>Warranty</h1>
              </div>
              <div
                class="service-description text-sm break-words text-gray-900 max-md:text-xs"
              >
                <span>3-year warranty on all products in store</span>
              </div>
            </div>
            <div class="service_item col col_2 text-center">
              <div class="service-icon">
                <i class="fa-solid fa-truck-fast"></i>
              </div>
              <div
                class="service-title text-xl font-semibold text-red-950 max-md:text-base"
              >
                <h1>Delivery</h1>
              </div>
              <div
                class="service-description text-sm text-gray-900 max-md:text-xs"
              >
                <span
                  >We accept transportation from 10km to 30km and free shipping
                  under 20km</span
                >
              </div>
            </div>
            <div class="service_item col col_3 text-center">
              <div class="service-icon">
                <i class="fa-solid fa-headphones"></i>
              </div>
              <div
                class="service-title text-xl font-semibold text-red-950 max-md:text-base"
              >
                <h1>Support 24/7</h1>
              </div>
              <div
                class="service-description text-sm text-gray-900 max-md:text-xs"
              >
                <span class="max-sm:hidden"
                  >Always ready to help 24/7. For any questions, please contact
                  the hotline: 0398677620</span
                >
                <span class="hidden max-sm:block"
                  >Always ready to help 24/7</span
                >
              </div>
            </div>
          </div>
          <div class="grid grid-rows-2 justify-center">
            <div
              class="category grid grid-cols-6 max-sm:grid max-sm:grid-cols-2"
            >
              <div class="">
                <router-link to="" class="relative text-decoration-none">
                  <img
                    src="@/assets/images/category/wardrobe/wardrobe_7.png"
                    alt="bed"
                    class="overflow-hidden hover:contrast-125"
                  />
                </router-link>
              </div>
              <div class="text-center">
                <h1>WARDROBE</h1>
                <div class="button">
                  <router-link to="" class="btn my-8 text-decoration-none"
                    >See More</router-link
                  >
                </div>
              </div>
              <div class="relative">
                <router-link
                  to=""
                  class="absolute overflow-hidden hover:contrast-125 text-decoration-none"
                  ><img src="@/assets/images/category/sofa/sofa_5.png" alt=""
                /></router-link>
              </div>
              <div class="text-center">
                <h1 class="text-red-950">SOFA</h1>
                <div class="button">
                  <router-link to="" class="btn my-8 text-decoration-none"
                    >See More</router-link
                  >
                </div>
              </div>
              <div class="relative">
                <router-link
                  to=""
                  class="absolute overflow-hidden hover:contrast-125 text-decoration-none"
                  ><img
                    src="@/assets/images/category/clock/clock_7.png"
                    alt="clock"
                /></router-link>
              </div>
              <div class="text-center">
                <h1>CLOCK</h1>
                <div class="button">
                  <router-link to="" class="btn my-8 text-decoration-none"
                    >See More</router-link
                  >
                </div>
              </div>
            </div>

            <div
              class="category grid grid-cols-6 max-sm:grid max-sm:grid-cols-2"
            >
              <div class="text-center">
                <h1>BED</h1>
                <div class="button">
                  <router-link to="" class="btn my-8 text-decoration-none"
                    >See More</router-link
                  >
                </div>
              </div>
              <div class="relative">
                <router-link
                  to=""
                  class="absolute overflow-hidden hover:contrast-125 text-decoration-none"
                  ><img src="@/assets/images/category/bed/bed_1.png" alt="bed"
                /></router-link>
              </div>
              <div class="text-center">
                <h1>Shelves TV</h1>
                <div class="button">
                  <router-link to="" class="btn my-8 text-decoration-none"
                    >See More</router-link
                  >
                </div>
              </div>
              <div class="relative">
                <router-link
                  to=""
                  class="absolute overflow-hidden hover:contrast-125 text-decoration-none"
                  ><img
                    src="@/assets/images/category/shelves_tv/shelves_2.png"
                    alt="bed"
                /></router-link>
              </div>
              <div class="text-center">
                <h1>Altar</h1>
                <div class="button">
                  <router-link to="" class="btn my-8 text-decoration-none"
                    >See More</router-link
                  >
                </div>
              </div>
              <div class="relative">
                <router-link to="" class="text-decoration-none"
                  ><img
                    src="@/assets/images/category/altar/altar.png"
                    alt="Altar"
                /></router-link>
              </div>
            </div>
          </div>
          <div class="advertisement grid grid-cols-2 gap-5 mt-8 max-sm:gap-1">
            <div class="relative">
              <router-link to="" class="text-decoration-none"
                ><img
                  class="origin-center hover:-rotate-6 transition-full"
                  src="@/assets/images/advertisement/1.png"
                  alt="advertisment"
              /></router-link>
            </div>
            <div class="relative">
              <router-link
                to=""
                class="absolute overflow-hidden hover:contrast-125 text-decoration-none"
                ><img
                  class="origin-center hover:rotate-6 transition-full"
                  src="@/assets/images/advertisement/3.png"
                  alt="advertisment"
              /></router-link>
            </div>
          </div>
          <div>
            <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
              <h1 class="crossbar max-sm:text-lg">Hot Product</h1>
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
            <div class="hot_task">
              <div class="hot_product">
                <div>
                  <all-furniture />
                </div>
              </div>
              <div class="customize_furniture">
                <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                  <h1 class="crossbar max-sm:text-lg max-sm:w-8/12">
                    Customize Furniture
                  </h1>
                </div>
                <div
                  class="grid grid-cols-2 bg-white border border-indigo-600 rounded-lg max-sm:block max-sm:w-8/12"
                >
                  <div class="img max-sm:hidden">
                    <img
                      src="@/assets/images/customize.jpg"
                      alt="customize"
                      class="h-full"
                    />
                  </div>
                  <div class="">
                    <div class="">
                      <form
                        class="px-10 pt-3 max-sm:px-3"
                        @submit.prevent="customizeOrder"
                      >
                        <!-- <div class="flex">
                          <label for="exampleFormControlInput1">Picture</label>
                          <input
                            id="picture"
                            type="file"
                            class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Furniture name</label
                          >
                          <input
                            v-model="furnitureName"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Sofa.."
                          />
                        </div> -->
                        <div class="w-full items-center gap-x-6 pb-3">
                          <label for="exampleFormControlInput1">Picture</label>
                          <input
                            id="picture"
                            type="file"
                            class="flex bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                          />
                        </div>
                        <div class="grid grid-cols-2 gap-x-6">
                          <div class="color form-group">
                            <label for="exampleFormControlSelect1"
                              >Color ID</label
                            >
                            <select
                              v-model="colorId"
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div class="cateory form-group">
                            <label for="exampleFormControlSelect1"
                              >Category ID</label
                            >
                            <select
                              v-model="categoryId"
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div class="flex flex-cols-3 gap-x-4">
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Height</label>
                            <input
                              v-model="height"
                              type="text"
                              class="form-control w-10/12"
                              id="exampleFormControlInput1"
                              placeholder="10m"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Length</label>
                            <input
                              v-model="length"
                              type="text"
                              class="form-control w-10/12"
                              id="exampleFormControlInput1"
                              placeholder="10m"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Width</label>
                            <input
                              v-model="width"
                              type="text"
                              class="form-control w-10/12"
                              id="exampleFormControlInput1"
                              placeholder="10m"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-x-6">
                          <div class="color form-group">
                            <label for="exampleFormControlSelect1"
                              >Wood ID</label
                            >
                            <select
                              v-model="woodID"
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1"
                              >Quantity</label
                            >
                            <input
                              v-model="quantities"
                              type="text"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="1.."
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Description</label
                          >
                          <input
                            v-model="description"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="...."
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Desired Completion Date</label
                          >
                          <input
                            v-model="completionDate"
                            type="date"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div class="button_order float-right rounded-md my-2">
                          <button type="submit" class="btn text-white">
                            Order
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hot_news relative">
                <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                  <!-- <div @mouseover="onMouseOver"> -->
                  <h1 class="crossbar max-sm:text-xl max-sm:pl-20">Hot News</h1>
                  <!-- </div> -->
                  <div class="grid grid-cols-3 gap-x-4 max-sm:px-3">
                    <div
                      class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4"
                    >
                      <div class="border border-indigo-500">
                        <router-link to="">
                          <img src="@/assets/images/news/4.png" alt="new1" />
                        </router-link>
                      </div>
                      <div class="pt-3">
                        <span class="text-sm text-center font-medium"
                          >What's so hot about the sofa? Does anyone know when
                          the sale will be released?</span
                        >
                        <br />
                        <div class="date">
                          <span class="text-xs text-center font-medium"
                            >Date: 8/10/2023</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4"
                    >
                      <div class="border border-indigo-500">
                        <router-link to="">
                          <img src="@/assets/images/news/5.png" alt="news1" />
                        </router-link>
                      </div>
                      <div class="pt-3">
                        <span class="text-sm text-center font-medium"
                          >If it's too hard to choose, we're always happy to
                          share tips with you!</span
                        >
                        <br />
                        <div class="date">
                          <span class="text-xs text-center font-medium"
                            >Date: 8/10/2023</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4"
                    >
                      <div class="border border-indigo-500">
                        <router-link to="">
                          <img src="@/assets/images/news/6.png" alt="new1" />
                        </router-link>
                      </div>
                      <div class="pt-3">
                        <span class="text-sm text-center font-medium"
                          >This week there are new models that will be updated
                          in the store. Click here to see details!</span
                        >
                        <br />
                        <div class="date">
                          <span class="text-xs text-center font-medium"
                            >Date: 8/10/2023</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hot_feedback">
                <div class="grid grid-cols-6 max-sm:block">
                  <div class="col-span-2 max-sm:hidden">
                    <div
                      class="time text-center bg-slate-50 mx-3 w-54 h-40 rounded-md"
                    >
                      <h1 class="text-lg font-semibold pt-3">Business hours</h1>
                      <br />
                      <span class="text-sm px-1">Monday-Friday: 7AM-22PM</span>
                      <br />
                      <br />
                      <span class="text-sm px-1">Satuday-Sunday: 9AM-20PM</span>
                    </div>
                  </div>
                  <div class="col-span-4 pt-5 max-sm:pt-3">
                    <h1
                      class="text-white text-2xl font-bold text-center max-sm:text-xl"
                    >
                      Feedback Customer
                    </h1>
                    <div
                      id="carouselExampleControls"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="content_feedback px-2 pt-9 max-sm:pt-2">
                            <div class="avatar">
                              <img
                                class="rounded-full w-3/12 cursor-pointer"
                                src="@/assets/images/avatar.jpg "
                                alt="avatar"
                              />
                            </div>
                            <div class="text_feedback text-center px-14 pt-10">
                              <h1 class="font-semibold text-2xl text-white">
                                Minh Lưu Thị
                              </h1>
                              <span
                                >When I first came to the store, I found it very
                                neat, bright, airy and comfortable. Staff speak
                                softly, politely and respect customers</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="content_feedback px-2 pt-9 max-sm:pt-2">
                            <div class="avatar">
                              <img
                                class="rounded-full w-3/12 cursor-pointer"
                                src="@/assets/images/avatar.jpg "
                                alt="avatar"
                              />
                            </div>
                            <div class="text_feedback text-center px-14 pt-10">
                              <h1 class="font-semibold text-2xl text-white">
                                Minh Lưu Thị
                              </h1>
                              <span
                                >When I first came to the store, I found it very
                                neat, bright, airy and comfortable. Staff speak
                                softly, politely and respect customers</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="content_feedback px-2 pt-9 max-sm:pt-2">
                            <div class="avatar">
                              <img
                                class="rounded-full w-3/12 cursor-pointer"
                                src="@/assets/images/avatar.jpg "
                                alt="avatar"
                              />
                            </div>
                            <div class="text_feedback text-center px-14 pt-10">
                              <h1 class="font-semibold text-2xl text-white">
                                Minh Lưu Thị
                              </h1>
                              <span
                                >When I first came to the store, I found it very
                                neat, bright, airy and comfortable. Staff speak
                                softly, politely and respect customers</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
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
  </div>
</template>
<script>
import axios from "axios";
import Navigation from "@/components/NavCustomer.vue";
// import SearchResults from "../views/Customer/searchResults.vue";
import AllFurniture from "./AllFurniture.vue";
export default {
  // components: {
  //   SearchResults,
  // },
  components: {
    Navigation,
    AllFurniture,
  },
  data() {
    return {
      isDark: false,
      furnitures: [],
      quantities: [],
      isShow: false,
      counter: 0,
      keyword: "",
      furnitureSearch: [],
      isBell: false,
      notifications: [],
      isDarkMode: false,
      isShowHeader: false,
    };
  },
  created() {
    this.getFurnitureAll();
    this.getAllAnnouncements();
    // window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    // Gỡ bỏ sự kiện cuộn cửa sổ khi component bị hủy
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    async getFurnitureAll() {
      try {
        const response = await axios.get("customer/furnitures", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.furnitures = response.data;
        console.log(response);
        console.log(this.furnitures);
      } catch (error) {
        console.error(error);
      }
    },

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
    handelBell() {
      this.isBell = !this.isBell;
    },
    async getAllAnnouncements() {
      try {
        const response = await axios.get("customer/announcements");
        if (response.status === 200) {
          this.notifications = response.data;
          // const d = parseISO(this.notifications.date);
          // const DateN = format(d, "dd/MM/yyyy");
          // this.Date = DateN;
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
    async customizeOrder() {
      try {
        const response = await axios.post("customize-furnitures/create", {
          customizeFurnitureName: this.furnitureName,
          categoryId: this.categoryId,
          colorId: this.colorId,
          height: this.height,
          length: this.length,
          woodId: this.woodId,
          quantity: this.quantities,
          description: this.description,
          DesiredCompletionDate: this.desiredCompletionDate,
        });
        if (response.status === 201) {
          alert("Please confirm the code in your email!");
        }
      } catch (error) {
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },

    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append,
      });
    },
    onMouseOver() {
      this.isShow = true;
    },
    HandleHeader() {
      this.isShowHeader = !this.isShowHeader;
    },
  },
};
</script>

<style scoped>
.homepage {
  background-color: #f7f8facf;
}
.moon .homepage {
  background-color: transparent;
}
.fixed_header {
  position: fixed;
  z-index: 100;
  top: 0;
}
.nav_header {
  transition: top 0.3s ease-in-out;
}
.logo a {
  width: 17%;
}
.h1_header {
  color: #eeebe6;
  font-size: 27px;
}
.h3 {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20px;
}
h3 {
  position: relative;
  overflow: hidden;
  border-right: 2px solid hsl(0, 0%, 80%);
  white-space: nowrap;
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms infinite;
  color: #eeebe6;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: hsl(0, 0%, 80%);
  }
  to {
    border-right-color: transparent;
  }
}
.text_header_intro {
  animation: intro 5s forwards;
}
@keyframes intro {
  from {
    margin-top: -15em;
  }
  to {
    margin-top: 12em;
  }
}

.category img:hover {
  transform: scale(1.1);
  overflow: hidden !important;
}
.logo span {
  color: #553b29;
  font-weight: 700;
  font-size: 22px;
}
.logo p {
  color: #5a2b00;
  margin-top: -3px;
  font-weight: 500;
  font-size: 14px;
}

.wrapper {
  padding-left: 42rem;
}
.wrapper li {
  padding-left: 10%;
  font-size: 15px;
}
/* dark */
.mode .toggle {
  background-color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 10%;
  display: grid;
  place-items: center;
  cursor: pointer;
  /* box-shadow: 0 0 50px 16px rgba(0, 0, 0, 0.1); */
  line-height: 1;
}
.mode .toggle:hover {
  background-color: #635e5e;
}
.mode .toggle svg:hover {
  color: rgb(251, 251, 251);
}

.mode .input {
  display: none;
}

.mode .icon {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  transition: transform 500ms;
}

.grid.mg-left-0 {
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
header {
  height: 44em;
  position: relative;
  background: rgb(25 24 24);
  opacity: 0.9;
}
header::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url("@/assets/images/banner3.jpg");
  background-size: cover;
  background-position: center;
  animation: in 5s ease-in forwards;
}
@keyframes in {
  from {
    opacity: 0.99;
  }
  to {
    opacity: 0.3;
  }
}
.button_shine {
  animation: show 5s ease-in forwards;
  transform: translateY(100%);
}
@keyframes show {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
.shine-button {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  /* background: linear-gradient(to right, #ffaa00, #ff5500); */
  background: linear-gradient(to right, #a88112, #c34e13);
  /* background: #b97c4c; */
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  transition: background 0.3s;
  border-radius: 8px;
  opacity: 0;
  animation: showButton 5s forwards;
}

.shine-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.shine-button:hover::before {
  transform: translateX(100%);
}

.shine-button:hover {
  background: linear-gradient(to right, #a88112, #c34e13);
}

/* Sử dụng keyframes animation để hiện nút sau 10 giây */
@keyframes showButton {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.grid.grid-cols-3 {
  position: relative;
  margin-bottom: 40px;
  display: flex;
}
.service .service_item.col {
  padding-top: 7px;
  font-size: x-large;
  text-align: center;
  border-right: 1px solid rgb(226, 224, 224);
  color: #302924;
}
.service .service_item.col:hover {
  /* background-color: rgb(233, 234, 188); */
  background: #e3e5da;
}
.category.grid .text-center {
  background: #ede9e0;
}
.service-title {
  padding-top: 10px;
  padding-bottom: 10px;
}
.service-description {
  /* width: 90%; */
  text-align: center;
}
.button .my-8,
.button_card .btn {
  background-color: #b97c4c;
  font-weight: 400;
  color: white;
  font-size: smaller;
}
.button_card .btn {
  font-size: 12px;
}
.category.grid-cols-6 .text-center h1 {
  font-weight: 600;
  justify-items: center;
  font-size: 17px;
  padding-top: 23%;
}
.crossbar::after {
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 1px;
  right: -9px;
  top: 110%;
  transform: translateX(-463%);
  background-color: #8d7a60;
}
.grid.grid-rows-2 {
  /* background-color: #dad0c4; */
  /* background-color: #dfdedc; */
  background-color: #d3cab7;
}
.product {
  background-color: #dfdedc;
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
.bell {
  margin-top: -6em;
  z-index: 101;
}

/* icon search */
/* From uiverse.io by @satyamchaudharydev */
/* this button is inspired by -- whatsapp input */
/* == type to see fully interactive and click the close buttom to remove the text  == */

.search .form {
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
  width: 400px;
  padding-inline-end: 1em;
  /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border: 1px solid;
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
.search .icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.search .swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.search .close-btn {
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

.search .form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.search .form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.search .form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.search .form input:valid ~ .icon {
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
.hot_product h1 {
  color: width;
}
.hot_feedback {
  position: relative;
  color: rgb(220, 210, 210);
  background: rgba(0, 0, 0, 0.7);
  height: 30rem;
}
.hot_feedback::before {
  content: "";
  height: 30rem;
  z-index: -1;
  background-image: url("@/assets/images/feedback.png");
  background-size: contain;
  background-position: center;
  position: absolute;
  inset: 0;
  opacity: 0.9;
}
.time {
  margin-top: 30%;
}
.time span {
  color: black;
}
.hot_feedback .avatar {
  transform: translateX(50%);
  margin-top: 3em;
  width: 80%;
}
/* Toast massage*/
.notifications-container {
  width: 320px;
  height: auto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex {
  display: flex;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.success {
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: rgb(240 253 244);
}

.succes-svg {
  color: rgb(74 222 128);
  width: 1.25rem;
  height: 1.25rem;
}

.success-prompt-wrap {
  margin-left: 0.75rem;
}

.success-prompt-heading {
  font-weight: bold;
  color: rgb(22 101 52);
}

.success-prompt-prompt {
  margin-top: 0.5rem;
  color: rgb(21 128 61);
}

.success-button-container {
  display: flex;
  margin-top: 0.875rem;
  margin-bottom: -0.375rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.success-button-main {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #ecfdf5;
  color: rgb(22 101 52);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: bold;
  border-radius: 0.375rem;
  border: none;
}

.success-button-main:hover {
  background-color: #d1fae5;
}

.success-button-secondary {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: 0.75rem;
  background-color: #ecfdf5;
  color: #065f46;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  border: none;
}
/* animation toast */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 5s ease-in;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 10s ease-out;
  opacity: 0;
}
/* footer */
.footer {
  position: relative;
  color: rgb(220, 210, 210);
  margin-top: 4rem;
  background: rgba(0, 0, 0, 0.7);
}
/* Footer  */

.footer::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url("@/assets/images/footer.png");
  background-size: cover;
  opacity: 0.3;
  height: 28rem;
  padding-bottom: 30px;
}
.moon {
  padding-bottom: 0em;
}
.col-span-2 {
  margin-top: 25%;
  margin-left: 10%;
}
.date {
  margin-top: 5px;
}
.customize_furniture {
  color: rgb(11, 46, 81);
  font-weight: 400;
  font-size: 15px;
  width: 151%;
  margin-left: -17em;
}
.customize_furniture input {
  height: 70%;
}
.customize_furniture .form-control {
  height: 50%;
}
.customize_furniture button {
  background-color: #514742;
}
.warranty label {
  color: rgb(24, 41, 56);
  font-weight: 500;
}
.warranty input {
  height: 30%;
}
.warranty .grid.grid-cols-2 {
  position: relative;
}
.warranty .img {
  position: relative;
  top: 10%;
  left: 25%;
}
.warranty .button_w {
  background-color: rgb(57, 55, 55);
}
.warranty button {
  font-size: 90%;
}
/* hot product */
.price li,
.size li {
  padding-bottom: 13px;
}
.sort i {
  padding-right: 10px;
  color: #50443c;
}
/*Mobile & tablet: width<1024px*/
@media only screen and (max-width: 63.9375em) {
  .customize_furniture {
    margin-left: 0px;
  }
  .logo {
    margin-left: 14px;
  }
  .logo a {
    width: 13%;
  }
}

/*Mobile: width<780px*/
@media only screen and (max-width: 46.25em) {
  .logo {
    width: 100%;
  }
  nav {
    display: none;
  }
  header::before {
    height: 30em;
  }
  .mx-64 {
    margin-top: -60%;
  }
  .service-icon i {
    font-size: 60%;
  }
  .service-title h1 {
    font-size: 80%;
    width: 109%;
  }
  .service-description {
    width: 100%;
  }
  .category.grid.grid-cols-6 .text-center h1 {
    font-size: 70%;
  }
  /*
  .category.grid.grid-cols-6 img {
    width: 80%;
  } */
  .flex.flex-1.justify-center.gap-3.font-medium {
    font-size: 80%;
  }
  .button_buy {
    margin-left: -11%;
  }
  .hot_feedback {
    position: relative;
    color: rgb(220, 210, 210);
    background: rgba(0, 0, 0, 0.7);
    height: 20rem;
  }
  .hot_feedback::before {
    content: "";
    height: 20rem;
    z-index: -1;
    background-image: url("@/assets/images/feedback.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    inset: 0;
    opacity: 0.9;
  }
  .hot_news .grid.grid-cols-3 {
    display: block;
  }
}
/*Tablet: width>=740px and width < 1024px*/
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
}
/*laptop*/
@media only screen and (width: 64em) {
}

@media only screen and (min-width: 73em) and (max-width: 81.25em) {
}
@media only screen and (min-width: 80em) and (max-width: 96em) {
}
.new_item {
  background-color: #fff;
}
.service {
  background-color: #fff;
}
.category_hot_product li {
  color: black;
}
.form-control {
  border: none;
  background-color: rgb(242, 246, 249);
}
form label {
  font-weight: 500;
  color: #33150a;
}
.moon .crossbar {
  color: #f1ebe4;
}
.moon .category_hot_product li {
  color: #ffeac6e3;
}
.moon .crossbar[data-v-c40a2754]::after {
  background-color: #ede8da;
}
.customize_furniture .crossbar[data-v-c40a2754]::after {
  transform: translateX(-718%);
}
.moon .service {
  background-color: #efede9;
}
.moon .new_item {
  background-color: #efede9;
}
.allFurniture {
  overflow: scroll;
  overflow-x: hidden;
  height: 57em;
}
.allFurniture::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.allFurniture::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.allFurniture::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
</style>
