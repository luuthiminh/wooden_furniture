<template>
  <div v-if="furnitureSearch.length">
    <search-results :furnitureSearch="furnitureSearch"></search-results>
  </div>
  <div v-else>
    <div class="homepage">
      <header>
        <ul
          class="contact_header flex wrapper text-right first-letter py-4 max-sm:hidden"
        >
          <li><i class="fa-solid fa-location-dot"></i>Hung Yen</li>
          <li><i class="fa-solid fa-phone"></i>+84 398677620</li>
          <li>
            <i class="fa-regular fa-envelope"></i>minhltgch202050@gmail.com
          </li>
        </ul>
        <div class="nav_header">
          <div class="grid mg-left-0 grid-cols-2">
            <div
              class="logo grid__item large--four-twelfths ml-28 max-sm:ml-5 max-sm:mt-5"
            >
              <router-link to="/customerIndex">
                <img src="@/assets/images/logo.png" alt="logo" />
              </router-link>
            </div>
            <navigation />
          </div>
        </div>
        <div class="text-center mt-5 text-red-950">
          <span class="font-bold text-2xl max-sm:text-base"
            >Wooden Home furniture</span
          >
          <br />
          <div class="max-sm:text-xs">
            <span class="text-center">
              Add a special atmosphere to your home with our stylish and
              exclusive furniture
            </span>
          </div>
        </div>
      </header>
      <content class="bg-neutral-50">
        <div class="mx-64 max-sm:mx-1">
          <div class="grid grid-cols-3 grid-flow-col h-40 shadow-md max-h11">
            <div class="col col_1 border-r-1 border-indigo-600">
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
            <div class="col col_2">
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
            <div class="col col_3">
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
              <div>
                <router-link to="">
                  <img
                    src="@/assets/images/category/wardrobe/wardrobe_1.png"
                    alt="bed"
                  />
                </router-link>
              </div>
              <div class="text-center">
                <h1>WARDROBE</h1>
                <div class="button">
                  <router-link to="" class="btn my-8">See More</router-link>
                </div>
              </div>
              <div>
                <img src="@/assets/images/category/sofa/sofa_2.png" alt="" />
              </div>
              <div class="text-center">
                <h1 class="text-red-950">SOFA</h1>
                <div class="button">
                  <router-link to="" class="btn my-8">See More</router-link>
                </div>
              </div>
              <div>
                <img
                  src="@/assets/images/category/clock/clock_12.png"
                  alt="clock"
                />
              </div>
              <div class="text-center">
                <h1>CLOCK</h1>
                <div class="button">
                  <router-link to="" class="btn my-8">See More</router-link>
                </div>
              </div>
            </div>

            <div
              class="category grid grid-cols-6 max-sm:grid max-sm:grid-cols-2"
            >
              <div class="text-center">
                <h1>BED</h1>
                <div class="button">
                  <router-link to="" class="btn my-8">See More</router-link>
                </div>
              </div>
              <div>
                <img src="@/assets/images/category/bed/bed_1.png" alt="bed" />
              </div>
              <div class="text-center">
                <h1>Shelves TV</h1>
                <div class="button">
                  <router-link to="" class="btn my-8">See More</router-link>
                </div>
              </div>
              <div>
                <img
                  src="@/assets/images/category/shelves_tv/shelves.png"
                  alt="bed"
                />
              </div>
              <div class="text-center">
                <h1>Altar</h1>
                <div class="button">
                  <router-link to="" class="btn btn my-8">See More</router-link>
                </div>
              </div>
              <div>
                <img
                  src="@/assets/images/category/altar/altar.png"
                  alt="Altar"
                />
              </div>
            </div>
          </div>
          <div class="advertisement grid grid-cols-2 gap-5 mt-8 max-sm:gap-1">
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
            <div class="hot_task">
              <div class="hot_product">
                <div>
                  <div>
                    <div v-if="furnitures.length">
                      <div class="grid grid-cols-4 gap-4">
                        <div
                          class="product_bed"
                          v-for="furniture in furnitures"
                          :key="furniture.furnitureId"
                        >
                          <div>
                            <div
                              class="product_bed px-2 py-2 border border-indigo-100 rounded-md"
                            >
                              <div class="image_product">
                                <router-link
                                  :to="{
                                    name: 'FurnitureDetail',
                                    params: { id: furniture.furnitureId },
                                  }"
                                >
                                  <img
                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                    alt=""
                                  />
                                </router-link>
                                <div class="furniture_label">
                                  <div v-if="furniture.label === 'New'">
                                    <div
                                      class="product_label bg-yellow-600 px-1 py-1 rounded-md"
                                    >
                                      <span class="text-white">{{
                                        furniture.label
                                      }}</span>
                                    </div>
                                  </div>
                                  <div v-if="furniture.label === 'Hot Sale'">
                                    <div
                                      class="product_label bg-red-700 px-1 py-1 rounded-md"
                                    >
                                      <span class="text-white">{{
                                        furniture.label
                                      }}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="pt-4 px-2">
                                <div class="text-xs">
                                  <span class="text-gray-800 pr-2">{{
                                    furniture.price
                                  }}</span>
                                  <del class="text-gray-500">$2000</del>
                                </div>
                                <div class="pt-2 text-base font-semibold">
                                  <span>{{ furniture.furnitureName }}</span>
                                </div>
                                <div>
                                  <span class="text-sm"
                                    >Star: {{ furniture.voteStar
                                    }}<i
                                      class="fa-solid fa-star pl-1 text-xs"
                                    ></i
                                  ></span>
                                </div>
                                <div>
                                  <span class="text-sm"
                                    >Sold: {{ furniture.sold }}</span
                                  >
                                </div>
                                <div class="button_buy py-3 px-2">
                                  <router-link
                                    :to="{
                                      name: 'OrderBill',
                                      params: { id: furniture.furnitureId },
                                    }"
                                  >
                                    <button
                                      class="btn text-sm font-medium border-1 border-slate-800 rounded-xl px-5 py-1 hover:bg-slate-700 hover:text-white"
                                    >
                                      Buy now
                                    </button>
                                  </router-link>
                                </div>
                                <div class="grid grid-cols-2 gap-x-4 text-xs">
                                  <div>
                                    <i
                                      class="fa-regular fa-heart cursor-pointer"
                                    ></i>
                                    Add wish list
                                  </div>
                                  <div>
                                    <button
                                      @click="showModal(furniture)"
                                      class=""
                                    >
                                      <i
                                        class="fa-solid fa-square-plus cursor-pointer"
                                      ></i>
                                      More
                                    </button>
                                    <Modal
                                      :size="size"
                                      v-if="isShowModal"
                                      @close="closeModal"
                                    >
                                      <template #header>
                                        <div
                                          class="flex items-center text-lg font-medium"
                                        >
                                          ALL Furniture
                                        </div>
                                      </template>
                                      <template #body>
                                        <div
                                          class="product"
                                          v-for="fur in furnitureModel"
                                          :key="fur.furnitureId"
                                        >
                                          <div class="grid grid-cols-2 gap-x-7">
                                            <div class="image_product">
                                              <img
                                                src="@/assets/images/category/shelves_tv/shelves_11.png"
                                                alt=""
                                              />
                                            </div>
                                            <div>
                                              <div
                                                class="name furniture font-semibold pb-3 text-sm"
                                              >
                                                {{ fur.furnitureName }}
                                              </div>
                                              <div
                                                class="grid grid-cols-2 gap-x-1 text-sm"
                                              >
                                                <span>Height</span>
                                                <span>{{ fur.height }}</span>
                                              </div>
                                              <div
                                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                              >
                                                <span>Width:</span>
                                                <span>{{ fur.width }}</span>
                                              </div>
                                              <div
                                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                              >
                                                <span>Lenght:</span>
                                                <span>{{ fur.length }}</span>
                                              </div>
                                              <div class="text-sm">
                                                <div
                                                  class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                                >
                                                  <span>Price:</span>
                                                  <!-- <span>{{ fur.price }}</span> -->
                                                  <!-- <span>$1000</span> -->
                                                  <span class="text-red-500"
                                                    >$2000</span
                                                  >
                                                </div>
                                              </div>
                                              <div
                                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                              >
                                                <span>Color:</span>
                                                <span>{{ fur.color }}</span>
                                              </div>
                                              <div
                                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                              >
                                                <span>Wood:</span>
                                                <span>{{ fur.wood }}</span>
                                              </div>
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </template>
                                      <template #footer>
                                        <div class="flex justify-between">
                                          <button
                                            @click="closeModal"
                                            type="button"
                                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                          >
                                            Close
                                          </button>
                                        </div>
                                      </template>
                                    </Modal>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="hourglassBackground">
                        <div class="hourglassContainer">
                          <div class="hourglassCurves"></div>
                          <div class="hourglassCapTop"></div>
                          <div class="hourglassGlassTop"></div>
                          <div class="hourglassSand"></div>
                          <div class="hourglassSandStream"></div>
                          <div class="hourglassCapBottom"></div>
                          <div class="hourglassGlass"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="customize_furniture">
                <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                  <h1 class="crossbar">Customize Furniture</h1>
                </div>
                <div
                  class="grid grid-cols-2 bg-gray-50 border border-indigo-600 rounded-lg max-sm:block"
                >
                  <div class="img max-sm:hidden">
                    <img src="@/assets/images/customize.png" alt="customize" />
                  </div>
                  <div class="">
                    <div class="">
                      <form
                        class="px-10 pt-3 max-sm:px-3"
                        @submit.prevent="customizeOrder"
                      >
                        <!-- <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Customize Furniture ID</label
                          >
                          <input
                            v-model="furnitureId"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Sofa.."
                          />
                        </div> -->
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Customize furniture name</label
                          >
                          <input
                            v-model="furnitureName"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Sofa.."
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
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Height</label>
                          <input
                            v-model="height"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="10m"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Length</label>
                          <input
                            v-model="length"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="10m"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Width</label>
                          <input
                            v-model="width"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="10m"
                          />
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
                            type="text"
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
                  <h1 class="crossbar">Hot News</h1>
                </div>
                <div
                  class="grid grid-cols-3 gap-x-4 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-4"
                >
                  <div class="bg-white px-2 py-2 shadow">
                    <div class="border border-indigo-500">
                      <router-link to="">
                        <img src="@/assets/images/news/4.png" alt="new1" />
                      </router-link>
                    </div>
                    <div class="pt-3">
                      <span class="text-sm text-center font-medium"
                        >What's so hot about the sofa? Does anyone know when the
                        sale will be released?</span
                      >
                      <br />
                      <div class="date">
                        <span class="text-xs text-center font-medium"
                          >Date: 8/10/2023</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="bg-white px-2 py-2 shadow">
                    <div class="border border-indigo-500">
                      <router-link to="">
                        <img src="@/assets/images/news/5.png" alt="news1" />
                      </router-link>
                    </div>
                    <div class="pt-3">
                      <span class="text-sm text-center font-medium"
                        >If it's too hard to choose, we're always happy to share
                        tips with you!</span
                      >
                      <br />
                      <div class="date">
                        <span class="text-xs text-center font-medium"
                          >Date: 8/10/2023</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="bg-white px-2 py-2 shadow">
                    <div class="border border-indigo-500">
                      <router-link to="">
                        <img src="@/assets/images/news/6.png" alt="new1" />
                      </router-link>
                    </div>
                    <div class="pt-3">
                      <span class="text-sm text-center font-medium"
                        >This week there are new models that will be updated in
                        the store. Click here to see details!</span
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
              <div class="hot_feedback">
                <div class="grid grid-cols-6 max-sm:block">
                  <div class="col-span-2 max-sm:hidden">
                    <div class="time text-center bg-slate-50 mx-3 w-54 h-40">
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
                    <div class="content_feedback px-2 pt-9 max-sm:pt-2">
                      <div class="avatar">
                        <img
                          class="rounded-full w-3/12"
                          src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div class="text_feedback text-center px-14 pt-10">
                        <h1 class="font-semibold text-2xl text-white">
                          Minh Lưu Thị
                        </h1>
                        <span
                          >When I first came to the store, I found it very neat,
                          bright, airy and comfortable. Staff speak softly,
                          politely and respect customers</span
                        >
                      </div>
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
<script setup>
import { Modal } from "flowbite-vue";
import { ref } from "vue";

const isShowModal = ref(false);
const furnitureModel = ref([]);
function closeModal() {
  isShowModal.value = false;
}
async function showModal(furniture) {
  this.isShowModal = true;
  try {
    const response = await axios.get(
      "customer/furnitures/" + furniture.furnitureId
    );
    this.furnitureModel = response.data;
    console.log(furniture);
  } catch (error) {
    console.error(error);
  }
}
</script>
<script>
import axios from "axios";
import Navigation from "@/components/NavAuth.vue";
// import SearchResults from "../views/Customer/searchResults.vue";

export default {
  // components: {
  //   SearchResults,
  // },
  components: { Navigation },
  data() {
    return {
      furnitures: [],
      keyword: "",
      furnitureSearch: [],
      quantities: [],
    };
  },
  created() {
    this.getFurnitureAll();
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
        alert("Furniture not found!");
      }
    },
    clear() {
      this.keyword = "";
    },
    async addToCart(furniture) {
      try {
        const response = await axios.post(
          "customer/cart/add/" + furniture.furnitureId,
          { quantity: this.quantities[furniture.furnitureId] }
        );
        console.log(furniture.furnitureId);
        console.log(this.quantity);
        this.response = response.data;
        if (response.status === 200) {
          alert("Add the furniture to cart suuccessfully");
          console.log(response);
          console.log(this.response);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async customizeOrder() {
      try {
        const response = await axios.post("customize-furnitures/create", {
          customerId: this.furnitureName,
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
  },
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
  padding-left: 42rem;
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
  display: flex;
}

content .col {
  padding-top: 7px;
  font-size: x-large;
  text-align: center;
  border-right: 1px solid rgb(226, 224, 224);
}
content .col:hover {
  /* background-color: rgb(233, 234, 188); */
  background: #e3e5da;
}
.col i {
  color: #302924;
}
.service-title {
  padding-top: 10px;
  padding-bottom: 10px;
}
.service-description {
  /* width: 90%; */
  text-align: center;
}
.text-center h1 {
  color: rgb(79, 40, 40);
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
/* .category.grid-cols-6 .text-center {
  padding-top: 5%;
} */
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
  /* text-align: center; */
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
  height: 30rem;
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
.product_bed {
  position: relative;
}
.product_label {
  position: absolute;
  width: 30%;
  border-radius: 1rem;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 70%;
}
/* loading */
.hourglassBackground {
  position: relative;
  background-color: rgb(71, 60, 60);
  height: 130px;
  width: 130px;
  border-radius: 50%;
  margin: 30px auto;
}

.hourglassContainer {
  position: absolute;
  top: 30px;
  left: 40px;
  width: 50px;
  height: 70px;
  -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
  animation: hourglassRotate 2s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.hourglassContainer div,
.hourglassContainer div:before,
.hourglassContainer div:after {
  transform-style: preserve-3d;
}

@-webkit-keyframes hourglassRotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

@keyframes hourglassRotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

.hourglassCapTop {
  top: 0;
}

.hourglassCapTop:before {
  top: -25px;
}

.hourglassCapTop:after {
  top: -20px;
}

.hourglassCapBottom {
  bottom: 0;
}

.hourglassCapBottom:before {
  bottom: -25px;
}

.hourglassCapBottom:after {
  bottom: -20px;
}

.hourglassGlassTop {
  transform: rotateX(90deg);
  position: absolute;
  top: -16px;
  left: 3px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #999999;
}

.hourglassGlass {
  perspective: 100px;
  position: absolute;
  top: 32px;
  left: 20px;
  width: 10px;
  height: 6px;
  background-color: #999999;
  opacity: 0.5;
}

.hourglassGlass:before,
.hourglassGlass:after {
  content: "";
  display: block;
  position: absolute;
  background-color: #999999;
  left: -17px;
  width: 44px;
  height: 28px;
}

.hourglassGlass:before {
  top: -27px;
  border-radius: 0 0 25px 25px;
}

.hourglassGlass:after {
  bottom: -27px;
  border-radius: 25px 25px 0 0;
}

.hourglassCurves:before,
.hourglassCurves:after {
  content: "";
  display: block;
  position: absolute;
  top: 32px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #333;
  animation: hideCurves 2s ease-in 0s infinite;
}

.hourglassCurves:before {
  left: 15px;
}

.hourglassCurves:after {
  left: 29px;
}

@-webkit-keyframes hideCurves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideCurves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.hourglassSandStream:before {
  content: "";
  display: block;
  position: absolute;
  left: 24px;
  width: 3px;
  background-color: white;
  -webkit-animation: sandStream1 2s ease-in 0s infinite;
  animation: sandStream1 2s ease-in 0s infinite;
}

.hourglassSandStream:after {
  content: "";
  display: block;
  position: absolute;
  top: 36px;
  left: 19px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  animation: sandStream2 2s ease-in 0s infinite;
}

@-webkit-keyframes sandStream1 {
  0% {
    height: 0;
    top: 35px;
  }

  50% {
    height: 0;
    top: 45px;
  }

  60% {
    height: 35px;
    top: 8px;
  }

  85% {
    height: 35px;
    top: 8px;
  }

  100% {
    height: 0;
    top: 8px;
  }
}

@keyframes sandStream1 {
  0% {
    height: 0;
    top: 35px;
  }

  50% {
    height: 0;
    top: 45px;
  }

  60% {
    height: 35px;
    top: 8px;
  }

  85% {
    height: 35px;
    top: 8px;
  }

  100% {
    height: 0;
    top: 8px;
  }
}

@-webkit-keyframes sandStream2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes sandStream2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.hourglassSand:before,
.hourglassSand:after {
  content: "";
  display: block;
  position: absolute;
  left: 6px;
  background-color: white;
  perspective: 500px;
}

.hourglassSand:before {
  top: 8px;
  width: 39px;
  border-radius: 3px 3px 30px 30px;
  animation: sandFillup 2s ease-in 0s infinite;
}

.hourglassSand:after {
  border-radius: 30px 30px 3px 3px;
  animation: sandDeplete 2s ease-in 0s infinite;
}

@-webkit-keyframes sandFillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 17px;
  }
}

@keyframes sandFillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 17px;
  }
}

@-webkit-keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  1% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  24% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  25% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  50% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  90% {
    opacity: 1;
    top: 41px;
    height: 0;
    width: 10px;
    left: 20px;
  }
}

@keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  1% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  24% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  25% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  50% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  90% {
    opacity: 1;
    top: 41px;
    height: 0;
    width: 10px;
    left: 20px;
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
  .service-icon {
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
</style>
