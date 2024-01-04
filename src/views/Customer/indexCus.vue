<template>
  <div class="index">
    <header @mouseleave="HandleHeader">
      <div class="header_scroll flex text-sm">
        <div class="container-fluid p-0">
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
            <div class="flex col-lg-5 pl-48 text-end gap-x-4">
              <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                <small class="fa-solid fa-phone me-2"></small>
                <small>
                  <a
                    class="underline decoration-1 underline-offset-2 decoration-gray-400 decoration-dashed"
                    href="tel:0398677620"
                    >+84 398677620</a
                  >
                </small>
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
              <!-- <div class="flex gap-x-3 items-center pl-2">
                <div @click.prevent="handelBell">
                  <div class="bi bi-bell cursor-pointer text-base">
                    <sup class="px-1 bg-red-600 rounded-full text-white"
                      >{{ notifications.length }}
                    </sup>
                  </div>
                </div>
                <small>Notifications</small>
              </div> -->

              <div class="h-100 d-inline-flex align-items-center">
                <a href="" class="btn btn-sm-square"
                  ><i class="fa-brands fa-facebook-f px-px"></i
                ></a>
              </div>
              <div class="h-100 d-inline-flex align-items-center">
                <a
                  href="mailto:someone@example.com"
                  class="btn btn-sm-square me-1"
                  ><i class="bi bi-envelope-arrow-up"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nav_header py-3">
        <div class="grid mg-left-0 grid-cols-2">
          <div class="logo flex mx-5 items-center w-3/12">
            <router-link to="/">
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
      <!-- </div> -->
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
        <div class="service_all mx-64 max-sm:mx-1">
          <div
            class="service grid grid-cols-3 grid-flow-col h-44 max-h1 shadow-2xl"
          >
            <div
              class="service_item col col_1 border-r-1 border-indigo-600 text-center"
            >
              <div class="service-icon ml-32 mt-3">
                <img
                  src="@/assets/images/warranty.png"
                  alt="warranty"
                  class="w-3/12"
                />
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
              <div class="service-icon ml-32 mt-3">
                <!-- <i class="fa-solid fa-truck-fast"></i> -->
                <img
                  src="@/assets/images/delivery.png"
                  alt="warranty"
                  class="w-3/12"
                />
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
              <div class="service-icon ml-32 mt-3">
                <!-- <i class="fa-solid fa-headphones"></i> -->
                <img
                  src="@/assets/images/support.png"
                  alt="warranty"
                  class="w-3/12"
                />
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
          <div
            class="grid grid-rows-2 justify-center max-sm:hidden max-lg:hidden"
          >
            <div
              class="category grid grid-cols-6 max-sm:grid max-sm:grid-cols-2"
            >
              <div class="">
                <router-link to="" class="text-decoration-none">
                  <img
                    @click="HandleCateFurniture"
                    src="@/assets/images/category/wardrobe/wardrobe_7.png"
                    alt="bed"
                    class=""
                  />
                </router-link>
              </div>
              <div class="text-center">
                <h1>WARDROBE</h1>
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
              </div>
              <div class="relative">
                <router-link to="" class="text-decoration-none"
                  ><img
                    src="@/assets/images/category/clock/clock_7.png"
                    alt="clock"
                /></router-link>
              </div>
              <div class="text-center">
                <h1>CLOCK</h1>
              </div>
            </div>

            <div
              class="category grid grid-cols-6 max-sm:grid max-sm:grid-cols-2"
            >
              <div class="text-center">
                <h1>BED</h1>
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
              <h1 class="crossbar max-sm:text-lg">Hot Furniture</h1>
            </div>

            <div class="hot_task">
              <div class="hot_product">
                <div>
                  <all-furniture :furnitures="furnitures"></all-furniture>
                </div>
              </div>
              <div class="customize_furniture">
                <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                  <h1
                    class="crossbar max-sm:text-lg max-sm:w-8/12 max-lg:w-8/12"
                  >
                    Custom Furniture
                  </h1>
                </div>
                <div
                  class="grid grid-cols-2 bg-white border border-indigo-601 rounded-lg max-sm:block max-sm:w-8/12 max-lg:block max-lg:w-7/12 max-lg:ml-10"
                >
                  <div class="img max-sm:hidden max-lg:hidden">
                    <div
                      id="carouselExampleCaptions"
                      class="carousel slide mt-8"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="3"
                          aria-label="Slide 4"
                        ></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="@/assets/images/category/living.png"
                            class="d-block w-100 rounded-md"
                            alt="livingroom"
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Livingroom</h5>
                            <p>The living room where the family gathers..</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="@/assets/images/category/alat.png"
                            class="d-block w-100 rounded-md"
                            alt="alat"
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Worship room</h5>
                            <p>Ornamental worship room in design.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="@/assets/images/category/bedroom.png"
                            class="d-block w-100 rounded-md"
                            alt="bedroom"
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Bedroom</h5>
                            <p>The bedroom where you can be yourself.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="@/assets/images/category/kitchen.png"
                            class="d-block w-100"
                            alt="kitchen"
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Kitchen</h5>
                            <p>The kitchen is a loving firehouse..</p>
                          </div>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
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
                        data-bs-target="#carouselExampleCaptions"
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
                  <div>
                    <div class="">
                      <Noti v-if="isShowSuccess">
                        <template v-slot:title>Order Custom Furniture</template>
                        <template v-slot:body
                          >Order Custom Furniture Success!</template
                        >
                        <template v-slot:footer></template>
                      </Noti>
                      <form
                        class="px-10 max-sm:px-3 mt-3"
                        @submit.prevent="customizeOrder"
                      >
                        <div class="w-full items-center gap-x-6 pb-3">
                          <label for="exampleFormControlInput1">Picture</label>
                          <div class="flex">
                            <input
                              id="picture"
                              type="file"
                              accept=".png, .jpg, .jpeg, video/mp4,video/mkv, video/x-m4v,video/*"
                              :maxFileSize="1000000"
                              ref="file"
                              multiple
                              @change="onFile"
                              required
                              class="bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                            />
                          </div>
                          <p class="text-xs mt-1 font-mediudm ml-1 opacity-90">
                            You can upload image or video
                          </p>
                          <div class="image_upload flex gap-x-4">
                            <div v-if="url" class="grid grid-cols-4 gap-x-4">
                              <div
                                v-for="url in arrayUrl"
                                :key="url"
                                class="flex"
                              >
                                <img :src="url" alt="image" />
                                <div
                                  class="shadow rounded-md h-5 px-1 hover:bg-slate-500"
                                >
                                  <label
                                    @click="HandleRemoveImage(url)"
                                    class="bi bi-x cursor-pointer absolute rounded-md px-1 bg-yellow-800 text-white"
                                  ></label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-x-9">
                          <div class="form-group">
                            <label for="exampleFormControlInput1"
                              >Name Furniture</label
                            >
                            <input
                              v-model="cusfurnitureName"
                              type="text"
                              class="form-control w-10/12"
                              id="exampleFormControlInput1"
                              required
                              @input="validateName"
                            />
                            <p
                              v-if="!messageErrorName"
                              class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                            >
                              The name of the furniture cannot be less than
                              <b>2</b> characters or exceed <b>50</b> characters
                            </p>
                            <p
                              v-else-if="messageSucessName"
                              class="successCustom text-xs mt-1 font-mediudm ml-1 opacity-90"
                            >
                              {{ messageSucessName }}
                            </p>
                            <p
                              v-else
                              class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                            >
                              {{ messageErrorName }}
                            </p>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1"
                              >Quantity</label
                            >
                            <input
                              v-model="quantityFurniture"
                              type="number"
                              class="form-control"
                              id="exampleFormControlInput1"
                              :min="1"
                              required
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-x-4 mt-3">
                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium w-10/12"
                              >Color</label
                            >
                            <select
                              v-if="colors.length"
                              v-model="colorId"
                              class="form-select text-sm"
                              aria-label="Default select example"
                              required
                            >
                              <!-- <option value="1" selected>--Choose Color--</option> -->
                              <option
                                v-for="co in colors"
                                :key="co.colorsId"
                                :value="co.colorsId"
                              >
                                {{ co.colorName }}
                              </option>
                            </select>
                          </div>
                          <div class="cateory form-group">
                            <label for="exampleFormControlSelect1"
                              >Category</label
                            >
                            <select
                              v-if="categories.length"
                              v-model="categoryId"
                              class="form-select w-10/12"
                              id="exampleFormControlSelect1"
                              required
                            >
                              <option
                                v-for="ca in categories"
                                :key="ca.categoryId"
                                :value="ca.categoryId"
                              >
                                {{ ca.categoryName }}
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium w-10/12"
                              >Wood</label
                            >
                            <select
                              v-if="woods.length"
                              v-model="woodId"
                              class="form-select text-sm"
                              aria-label="Default select example"
                              required
                            >
                              <option
                                v-for="w in woods"
                                :key="w.woodId"
                                :value="w.woodId"
                              >
                                {{ w.woodType }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="grid grid-cols-3 gap-x-24 mt-3">
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Height</label>
                            <div class="flex gap-x-4">
                              <input
                                v-model="height"
                                type="number"
                                class="form-control"
                                id="exampleFormControlInput1"
                                :min="1"
                                required
                              />
                              <p class="flex items-center font-medium">m</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Length</label>
                            <div class="flex gap-x-4">
                              <input
                                v-model="length"
                                type="number"
                                class="form-control"
                                id="exampleFormControlInput1"
                                :min="1"
                                required
                              />
                              <p class="flex items-center font-medium">m</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Width</label>
                            <div class="flex gap-x-4">
                              <input
                                v-model="width"
                                type="number"
                                class="form-control"
                                id="exampleFormControlInput1"
                                :min="1"
                                required
                              />
                              <p class="flex items-center font-medium">m</p>
                            </div>
                          </div>
                        </div>
                        <div class="mt-3">
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
                              required
                              @input="validateDate"
                            />
                            <p
                              v-if="!messageErrorDate"
                              class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                            >
                              Desired completion date must be greater than
                              current time
                            </p>
                            <p
                              v-else-if="messageSucessName"
                              class="successCustom text-xs mt-1 font-mediudm ml-1 opacity-90"
                            >
                              {{ messageSucessName }}
                            </p>
                            <p
                              v-else
                              class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                            >
                              {{ messageErrorDate }}
                            </p>
                          </div>
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleFormControlInput1"
                            >Description</label
                          >
                          <input
                            v-model="description"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            required
                            @input="validateDescription"
                          />
                          <p
                            v-if="
                              !messageErrorDescription &&
                              !messageSucessDescription
                            "
                            class="text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            Description cannot be less than <b>2</b> characters
                            or exceed
                            <b>500</b>
                            characters
                          </p>
                          <p
                            v-else-if="messageSucessDescription"
                            class="successCustom text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            {{ messageSucessDescription }}
                          </p>
                          <p
                            v-else
                            class="error text-xs mt-1 font-mediudm ml-1 opacity-90"
                          >
                            {{ messageErrorDescription }}
                          </p>
                        </div>
                        <div
                          class="button_order rounded-md mt-4 text-center float-right mb-2"
                        >
                          <button
                            type="submit"
                            class="btn text-white"
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            data-backdrop="false"
                          >
                            Order
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hot_news relative max-lg:mx-10">
                <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                  <!-- <div @mouseover="onMouseOver"> -->
                  <h1 class="pb-10 max-sm:text-xl max-sm:pl-20">Hot News</h1>

                  <div
                    v-if="top3Posts.length"
                    class="grid grid-cols-3 gap-x-4 max-sm:px-3"
                  >
                    <div
                      v-for="p in top3Posts"
                      :key="p.postId"
                      class="new_item px-2 py-2 shadow rounded-lg max-sm:mb-4"
                    >
                      <div class="border border-indigo-500">
                        <router-link
                          :to="{
                            name: 'TipsFurniture',
                            params: { id: p.postId },
                          }"
                        >
                          <img
                            :src="p.postImage"
                            alt="image post"
                            class="h-64"
                          />
                        </router-link>
                      </div>
                      <div class="pt-3">
                        <span
                          class="text-yellow-900 text-sm text-center font-semibold"
                          >{{ p.postTitle }}</span
                        >
                        <br />
                        <div class="date">
                          <span
                            class="text-xs text-center font-medium text-slate-500"
                            >Date: {{ p.creationDate }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hot_feedback max-lg:mx-10">
                <div class="grid grid-cols-6 max-sm:block">
                  <div class="col-span-2 max-sm:hidden">
                    <div
                      class="time text-center bg-slate-50 mx-3 w-54 h-40 rounded-md"
                    >
                      <h1 class="text-lg font-semibold pt-3 text-yellow-950">
                        Business hours
                      </h1>
                      <br />
                      <span class="text-sm px-1">Monday-Friday: 7AM-22PM</span>
                      <br />
                      <br />
                      <span class="text-sm px-1">Satuday-Sunday: 9AM-20PM</span>
                    </div>
                  </div>
                  <div class="col-span-4 pt-5 max-sm:pt-3 max-lg:mx-10">
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
                      <div v-if="top3Feedbacks.length" class="carousel-inner">
                        <div
                          v-for="(f, index) in top3Feedbacks"
                          :key="`carouselItem_${index}`"
                          :class="{
                            'carousel-item': true,
                            active: index === 0,
                          }"
                        >
                          <div class="content_feedback px-2 pt-9 max-sm:pt-2">
                            <div class="text_feedback text-center px-14 pt-20">
                              <h1 class="font-semibold text-2xl text-white">
                                {{ f.furnitureSpecificationName }}
                              </h1>
                              <span>{{ f.content }}</span>
                              <div>
                                <span class="text-sm"
                                  >Star: {{ f.voteStar
                                  }}<i
                                    class="text-yellow-500 fa-solid fa-star pl-1 text-xs"
                                  ></i
                                ></span>
                              </div>
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
import { format } from "date-fns";
import Navigation from "@/components/NavCustomer.vue";
import Noti from "@/components/NotificationSuccess.vue";
import AllFurniture from "./AllFurniture.vue";
export default {
  components: {
    Navigation,
    AllFurniture,
    Noti,
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
      arrayFile: [],
      feedbacks: [],
      colors: [],
      categories: [],
      woods: [],
      cateFurnitrue: [],
      messageErrorName: "",
      messageSucessName: "",
      messageErrorDate: "",
      messageErrorDesciption: "",
      messageSucessDescription: "",
      messageSucessDate: "",
      isMsgError: false,
      posts: [],
      message: "",
      isShowSuccess: false,
      arrayUrl: [],
      url: "",
      hasReloaded: false,
    };
  },
  created() {
    this.getCheckToken();
    this.getFurnitureAll();
    this.getAllAnnouncements();
    this.getFeedback();
    this.getAllColors();
    this.getAllCategories();
    this.getAllWoods();
    this.getAllPosts();
  },
  methods: {
    getCheckToken() {
      if (this.$route.query.token !== undefined) {
        const token = this.$route.query.token.trim().split(" ").join("+");
        const expiration = this.$route.query.expiration;
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expiration);
      }
    },
    async getFurnitureAll() {
      try {
        const response = await axios.get("customer/furnitures");
        this.furnitures = response.data;
        console.log(response);
        console.log(this.furnitures);
      } catch (error) {
        console.error(error);
      }
    },
    clear() {
      this.keyword = "";
      this.furnitureSearch = "";
    },
    async getAllColors() {
      try {
        const response = await axios.get("assistant/shop-data/colors");
        this.colors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllCategories() {
      try {
        const response = await axios.get("shopOwner/shop-data/categories");
        this.categories = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllWoods() {
      try {
        const response = await axios.get("Assistant/shop-data/woods");
        this.woods = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
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
      }
    },
    async getAllPosts() {
      try {
        const response = await axios.get("assistant/shop-data/posts");
        this.posts = response.data;
        this.posts = response.data.map((item) => ({
          ...item,
          creationDate: item.creationDate
            ? format(new Date(item.creationDate), "dd/MM/yyyy")
            : "",
          latestUpdate: item.latestUpdate
            ? format(new Date(item.latestUpdate), "dd/MM/yyyy")
            : "",
        }));
        console.log(this.posts);
      } catch (error) {
        console.error(error);
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
    onFile(event) {
      this.arrayFile = event.target.files;
      if (this.arrayFile) {
        for (let i = 0; i < event.target.files.length; i++) {
          this.url = URL.createObjectURL(event.target.files[i]);
          this.arrayUrl.push(this.url);
        }
      }
    },
    HandleRemoveImage(url) {
      this.arrayUrl = this.arrayUrl.filter((item) => item !== url);
    },
    validateName() {
      if (
        !this.cusfurnitureName ||
        this.cusfurnitureName.length < 2 ||
        this.cusfurnitureName.length > 50
      ) {
        this.messageErrorName = "Name Furniture is invalid.";
        return false;
      } else {
        this.messageSucessName = "Name Furniture is valid.";
        return true;
      }
    },
    validateDescription() {
      if (
        !this.description ||
        this.description.length < 2 ||
        this.description.length > 500
      ) {
        this.messageErrorDescription = "Description is invalid.";
        return false;
      } else {
        this.messageSucessDescription = "Description is valid";
        return true;
      }
    },
    validateDate() {
      if (!this.completionDate || new Date(this.completionDate) <= new Date()) {
        this.messageErrorDate = "Desired completion date is not valid";
        return false;
      } else {
        this.messageSucessDate = "Desired completion date is valid";
        return true;
      }
    },
    async customizeOrder() {
      const formData = new FormData();
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("attachments", this.arrayFile[i]);
        }
      }
      formData.append("customizeFurnitureName", this.cusfurnitureName);
      formData.append("categoryId", this.categoryId);
      formData.append("colorId", this.colorId);
      formData.append("height", this.height);
      formData.append("length", this.length);
      formData.append("width", this.width);
      formData.append("woodId", this.woodId);
      formData.append("quantity", "10");
      formData.append("description", this.description);
      formData.append("desiredCompletionDate", this.completionDate);
      try {
        const response = await axios.post(
          "customer/customize-furnitures/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          this.isShowSuccess = true;
          setTimeout(() => {
            this.isShowSuccess = false;
          }, 3000);
        }
      } catch (error) {
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
    HandleCateFurniture() {
      this.cateFurnitrue = this.furnitures
        .map((furniture) => (furniture.category = "Bed"))
        .filter((value, index, furs) => furs.indexOf(value) === index);
      this.$router.push({ name: "AllProduct" });
      console.log(this.cateFurnitrue);
    },
    onMouseOver() {
      this.isShow = true;
    },
    HandleHeader() {
      this.isShowHeader = !this.isShowHeader;
    },
    async getFeedback() {
      try {
        const response = await axios.get("assistant/feedbacks");
        this.feedbacks = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    top3Posts() {
      return this.posts.slice(0, 3);
    },
    top3Feedbacks() {
      return this.feedbacks
        .filter(
          (feedback) =>
            feedback.voteStar >= 4 && !feedback.content.includes("*")
        )
        .slice(0, 3);
    },
  },
};
</script>
<style scoped>
/* header */
.container-fluid {
  background-color: #f9fafa;
}
.homepage {
  background-color: #f7f8facf;
}

.fixed_header {
  position: fixed;
  z-index: 100;
  top: 0;
}
.nav_header {
  transition: top 0.3s ease-in-out;
  background-color: white;
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
.hot_news .grid.grid-cols-3,
.service.grid.grid-cols-3 {
  position: relative;
  margin-bottom: 40px;
}
.service .service_item.col {
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
.category.grid h1 {
  color: #635a5a;
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
  transform: translateX(252%);
  margin-top: 3em;
  width: 16%;
  border-radius: 10px;
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
  height: 34%;
}
.customize_furniture button {
  background-color: #7c5434;
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
  .index {
    overflow: hidden;
  }
  .service_all {
    display: contents;
  }
}

/*Mobile: width<780px*/
@media only screen and (max-width: 46.25em) {
  .homepage {
    overflow: hidden;
  }
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
  .header_scroll {
    display: none;
  }
}
/*Tablet: width>=740px and width < 1024px*/
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
  .header_scroll {
    display: none;
  }
  .logo a {
    width: 44%;
  }
  .service .w-3\/12 {
    width: 59%;
    margin-left: -12em;
  }
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
.form-control,
.form-select {
  border: none;
  background-color: rgb(242, 246, 249);
}
form label {
  font-weight: 500;
  color: #33150a;
}
.allFurniture {
  overflow: scroll;
  overflow-x: hidden;
  height: 62em;
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
/* Moon */
.moon {
  padding-bottom: 0em;
}
.moon .container-fluid,
.moon .nav_header,
.moon .homepage {
  background-color: transparent;
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

.moon .service,
.moon .logo img {
  background-color: #efede9;
}

.moon .new_item,
.moon .service {
  background-color: transparent;
  border: 1px solid;
}
.moon small,
.moon .service_item h1,
.moon .service_item span {
  color: #efede9;
}
.moon .icon.icon--moon,
.moon .icon.icon--sun {
  color: #fffdfa;
}
.moon .logo span {
  color: #fff3ea;
}
.moon .logo p {
  color: #dfd8d2;
}
.moon .mode .toggle,
.moon .btn.btn-sm-square {
  background-color: #656464d6;
  color: #fffdfa;
}
.btn.btn-sm-square {
  background-color: white;
}
input {
  height: 80%;
}
.form-control {
  height: 32%;
  font-size: 15px;
}
.form-group {
  margin-bottom: 0rem;
}
select {
  font-size: 14px;
}
.successCustom {
  color: green;
}
.moon .hot_news span {
  color: wheat;
}
</style>
