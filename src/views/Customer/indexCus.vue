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
          <div class="logo grid__item large--four-twelfths ml-28">
            <router-link to="/customerIndex">
              <img src="@/assets/images/logo.png" alt="logo" />
            </router-link>
          </div>
          <nav
            class="border-2 border-yellow-700 grid__item large--eight-twelfths text-right clearfix"
          >
            <ul class="flex gap-x-9 pl-2">
              <router-link to="/customerIndex"></router-link>
              <li>
                <router-link to="/customerIndex"> Home</router-link>
              </li>
              <li>
                <div class="dropdown">
                  <div class="dropdown-toggle" data-toggle="dropdown">
                    <strong class="font-normal">All Product</strong>
                  </div>
                  <div class="dropdown-menu px-3 py-2 mt-1">
                    <router-link to="/allproduct" class="font-medium text-base">
                      Bed</router-link
                    >
                    <br />
                    <router-link to="/allproduct" class="font-medium text-base">
                      Sofa</router-link
                    >
                  </div>
                </div>
              </li>
              <li><a href="">Category</a></li>
              <li><router-link to="/about">About</router-link></li>
              <li><a href="">Contact</a></li>
              <li>
                <div class="search h-5">
                  <form class="form">
                    <label for="search">
                      <inputF
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
                <router-link to="/profileCusPage" style="text-decoration: none"
                  ><i class="fa-solid fa-user"></i
                ></router-link>
              </li>
              <li>
                <router-link to="/zeroOrder" style="text-decoration: none"
                  ><i class="fa-solid fa-cart-shopping"></i
                ></router-link>
              </li>
              <router-link to="/">
                <li><i class="fa-solid fa-arrow-right-from-bracket"></i></li>
              </router-link>
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
    <content class="bg-neutral-50">
      <div class="mx-64">
        <div
          class="grid grid-cols-3 grid-flow-col gap-4 h-40 shadow-md max-h11"
        >
          <div class="col col_1 border-r-1 border-indigo-600">
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
          <div class="category grid grid-cols-6">
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

          <div class="category grid grid-cols-6">
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
              <img src="@/assets/images/category/altar/altar.png" alt="Altar" />
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
          <div class="hot_task">
            <div class="hot_product">
              <div class="grid grid-cols-3 gap-4">
                <div class="products_bed">
                  <div>
                    <div class="card rounded-md overflow-hidden relative group">
                      <img
                        src="@/assets/images/category/sofa/sofa_2.png"
                        alt="bg"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                      <div
                        class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                      >
                        <h4 class="mb-2 text-sm opacity-80">
                          <a href="#">Bed</a>
                        </h4>
                        <h3 class="mb-10 text-sm">
                          <a href="#">
                            <h1>Name Product</h1>
                            <span>Price: $1000</span>
                          </a>
                        </h3>
                        <router-link to="">
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
                <div class="products_bed">
                  <div>
                    <div class="card rounded-md overflow-hidden relative group">
                      <img
                        src="@/assets/images/category/shelves_tv/shelves_11.png"
                        alt="bg"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                      <div
                        class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                      >
                        <h4 class="mb-2 text-sm opacity-80">
                          <a href="#">Bed</a>
                        </h4>
                        <h3 class="mb-10 text-sm">
                          <a href="#">
                            <h1>Name Product</h1>
                            <span>Price: $1000</span>
                          </a>
                        </h3>
                        <a
                          class="hover:bg-yellow-600 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-yellow-600"
                          href="#"
                          >Add to cart</a
                        >
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
                <div class="products_bed">
                  <div>
                    <div class="card rounded-md overflow-hidden relative group">
                      <img
                        src="@/assets/images/category/bed/bed_2.png"
                        alt="bg"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                      <div
                        class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                      >
                        <h4 class="mb-2 text-sm opacity-80">
                          <a href="#">Bed</a>
                        </h4>
                        <h3 class="mb-10 text-sm">
                          <a href="#">
                            <h1>Name Product</h1>
                            <span>Price: $1000</span>
                          </a>
                        </h3>
                        <a
                          class="hover:bg-yellow-600 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-yellow-600"
                          href="#"
                          >Add to cart</a
                        >
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
              <div class="grid grid-cols-3 gap-4">
                <div class="products_bed">
                  <div>
                    <div class="card rounded-md overflow-hidden relative group">
                      <img
                        src="@/assets/images/category/sofa/sofa_2.png"
                        alt="bg"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                      <div
                        class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                      >
                        <h4 class="mb-2 text-sm opacity-80">
                          <a href="#">Bed</a>
                        </h4>
                        <h3 class="mb-10 text-sm">
                          <a href="#">
                            <h1>Name Product</h1>
                            <span>Price: $1000</span>
                          </a>
                        </h3>
                        <a
                          class="hover:bg-yellow-600 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-yellow-600"
                          href="#"
                          >Add to cart</a
                        >
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
                <div class="products_bed">
                  <div>
                    <div class="card rounded-md overflow-hidden relative group">
                      <img
                        src="@/assets/images/category/wardrobe/wardrobe_1.png"
                        alt="bg"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                      <div
                        class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                      >
                        <h4 class="mb-2 text-sm opacity-80">
                          <a href="#">Bed</a>
                        </h4>
                        <h3 class="mb-10 text-sm">
                          <a href="#">
                            <h1>Name Product</h1>
                            <span>Price: $1000</span>
                          </a>
                        </h3>
                        <a
                          class="hover:bg-yellow-600 transition-all text-sm inline-flex rounded-md px-4 py-2 text-center border-2 border-yellow-600"
                          href="#"
                          >Add to cart</a
                        >
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
                <div class="products_bed">
                  <div>
                    <div class="card rounded-md overflow-hidden relative group">
                      <img
                        src="@/assets/images/category/clock/clock_12.png"
                        alt="bg"
                        class="w-full transition-all transform group-hover:scale-110"
                      />
                      <div
                        class="group-hover:bottom-0 transition-all absolute -bottom-20 left-0 text-white p-6 z-20"
                      >
                        <h4 class="mb-2 text-sm opacity-80">
                          <a href="#">Bed</a>
                        </h4>
                        <h3 class="mb-10 text-sm">
                          <a href="#">
                            <h1>Name Product</h1>
                            <span>Price: $1000</span>
                          </a>
                        </h3>
                        <a
                          class="hover: transition-all text-sm inline-flex rounded-md px-4 py-2 text-center"
                          href="#"
                          >Add to cart</a
                        >
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
            <div class="customize_furniture">
              <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                <h1 class="crossbar">Custoize Furniture</h1>
              </div>
              <div
                class="grid grid-cols-2 bg-gray-50 border border-indigo-600 rounded-lg"
              >
                <div class="img">
                  <img src="@/assets/images/customize.png" alt="customize" />
                </div>
                <div class="">
                  <div class="">
                    <form class="px-10 pt-3" @submit.prevent="order">
                      <div class="form-group">
                        <label for="exampleFormControlInput1"
                          >Furniture Name</label
                        >
                        <input
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
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="10m"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Length</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="10m"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Width</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="10m"
                        />
                      </div>
                      <div class="grid grid-cols-2 gap-x-6">
                        <div class="color form-group">
                          <label for="exampleFormControlSelect1"
                            >Color ID</label
                          >
                          <select
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
                          <label for="exampleFormControlInput1">Quantity</label>
                          <input
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
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="...."
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1"
                          >Complete Date</label
                        >
                        <input
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
                <h1 class="crossbar">Hot News</h1>
              </div>
              <div class="grid grid-cols-3 gap-x-4">
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
              <div class="grid grid-cols-6">
                <div class="col-span-2">
                  <div class="time text-center bg-slate-50 mx-3 w-54 h-40">
                    <h1 class="text-lg font-semibold pt-3">Business hours</h1>
                    <br />
                    <span class="text-sm px-1">Monday-Friday: 7AM-22PM</span>
                    <br />
                    <br />
                    <span class="text-sm px-1">Satuday-Sunday: 9AM-20PM</span>
                  </div>
                </div>
                <div class="col-span-4 pt-5">
                  <h1 class="text-white text-2xl font-bold text-center">
                    Feedback Customer
                  </h1>
                  <div class="content_feedback px-2 pt-9">
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
            <div class="warranty">
              <div class="text-center text-2xl font-bold mt-11 mb-4 relative">
                <h1 class="crossbar">Warranty Schedule</h1>
              </div>
              <div class="grid grid-cols-2 bg-white drop-shadow rounded-lg">
                <div class="border border-red-100 px-6 py-3 text-sm">
                  <form>
                    <div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Order ID</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="1.."
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1"
                          >Describe the reason</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="This is reason..."
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1"
                          >Estimated Time</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                    </div>
                    <div class="button_w float-right rounded-md my-2">
                      <button type="submit" class="btn text-white">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div class="img w-6/12">
                  <img src="@/assets/images/guarantee.png" alt="customize" />
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
  width: 90%;
  text-align: center;
  padding-top: 20x;
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
  transform: translateX(-393%);
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
</style>
