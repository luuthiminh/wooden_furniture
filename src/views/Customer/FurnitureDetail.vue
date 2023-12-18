<template>
  <div class="content_detail pt-36">
    <div class="nav pb-3 mb-2">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold text-yellow-950">
            <router-link to="customerIndex">Home</router-link>
          </li>

          <li class="breadcrumb-item active font-medium" aria-current="page">
            Furnitrue Detail
          </li>
        </ol>
      </nav>
    </div>
    <!-- </div> -->
    <div class="absolute right-0">
      <alert-Error v-if="isAlertError">
        <template v-slot:message>{{ messageError }}</template></alert-Error
      >
      <alert-success v-if="isAlertSuccess">
        <template v-slot:message>{{ messageSuccess }}</template>
      </alert-success>
    </div>
    <div class="funiture_detail mx-28 max-sm:mx-3">
      <div class="flex flex-cols-2">
        <div class="furniture detail mt-3 rounded-lg">
          <div class="img grid grid-cols-2 gap-x-4 max-sm:block">
            <div class="img_product border-1 border-gray-600 w-10/12">
              <img
                class="px-3 py-3 pl-3"
                src="@/assets/images/category/bed/bed_8.png"
                alt="product1"
              />
              <div class="image_all px-3 py-3">
                <div
                  class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 snap-y"
                >
                  <div class="">
                    <div v-if="furnitures.length" class="flex gap-x-2">
                      <div
                        class="product w-3/12"
                        v-for="furniture in furnitures"
                        :key="furniture.furnitureSpecificationId"
                      >
                        <div class="">
                          <div class="snap-start">
                            <div @click.prevent="InforFurniture(furniture)">
                              <div
                                class="border border-1 border-gray-900 px-2 py-2"
                              >
                                <div v-for="im in furniture.images" :key="im">
                                  <img
                                    :src="im.path"
                                    alt="furniture"
                                    class="w-20"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!isShow">
              <div class="image_all">
                <div>
                  <div class="product">
                    <div class="furniture_infor pt-2">
                      <div>
                        <h1 class="text-xl font-bold">
                          {{ furnitureFirst.furnitureSpecificationName }}
                        </h1>
                        <div class="rating">
                          <input
                            value="5"
                            name="rate"
                            id="star5"
                            type="radio"
                          />
                          <label title="text" for="star5"></label>
                          <input
                            value="4"
                            name="rate"
                            id="star4"
                            type="radio"
                          />
                          <label title="text" for="star4"></label>
                          <input
                            value="3"
                            name="rate"
                            id="star3"
                            type="radio"
                            checked=""
                          />
                          <label title="text" for="star3"></label>
                          <input
                            value="2"
                            name="rate"
                            id="star2"
                            type="radio"
                          />
                          <label title="text" for="star2"></label>
                          <input
                            value="1"
                            name="rate"
                            id="star1"
                            type="radio"
                          />
                          <label title="text" for="star1"></label>
                        </div>
                      </div>
                      <div>
                        <span class="text-xs"
                          >ID Furniture:
                          {{ furnitureFirst.furnitureSpecificationId }}</span
                        >
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Available: </span>
                        <span>{{ furnitureFirst.available }} </span>
                      </div>
                      <div>
                        <span class="font-semibold">Category: </span>
                        <span>Table and Chair</span>
                      </div>
                      <div class="my-3">
                        <!-- <div class="w-10/12 bg-slate-200 h-px"></div> -->
                        <hr />
                        <span class="price text-3xl font-medium"
                          >${{ furnitureFirst.price }}</span
                        >
                        <hr />
                        <!-- <div class="w-10/12 bg-slate-200 h-px"></div> -->
                      </div>
                      <div>
                        <span class="font-semibold">Color: </span>
                        <span>{{ furnitureFirst.color }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Height: </span>
                        <span>{{ furnitureFirst.height }}m</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Width: </span>
                        <span>{{ furnitureFirst.width }}m</span>
                        <div class="mt-3">
                          <span class="font-semibold">Lenght: </span>
                          <span>{{ furnitureFirst.length }}m</span>
                        </div>
                      </div>
                      <div></div>
                      <div class="flex flex-cols-2 my-3 gap-x-7">
                        <button
                          @click="showModal(furnitureFirst)"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-dismiss="modal"
                          data-backdrop="false"
                          class="px-2 py-1 text-white ring-offset-2 ring-2 bg-slate-600 rounded-md"
                        >
                          ADD TO CART
                        </button>

                        <button
                          class="px-2 py-1 text-white ring-offset-2 ring-2 bg-red-700 ring-red-300 rounded-md"
                        >
                          BUY
                        </button>
                        <div class="icon_heart pl-3 pt-2">
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
                      <div class="more_infor">
                        <table class="table table-bordered w-6/12 text-sm">
                          <thead>
                            <tr>
                              <th scope="col">Wood</th>
                              <th scope="col">{{ furnitureFirst.wood }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <td>
                                {{ furnitureFirst.height }} x
                                {{ furnitureFirst.width }} x
                                {{ furnitureFirst.length }}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Room</th>
                              <td>{{ furnitureFirst.appropriateRoom }}</td>
                            </tr>
                            <tr>
                              <th scope="row">Collection</th>
                              <td>{{ furnitureFirst.collection }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="image_all">
                <div>
                  <div class="product">
                    <div class="furniture_infor pt-2">
                      <div>
                        <h1 class="text-lg font-bold">
                          {{ furnitureIndex.furnitureSpecificationName }}
                        </h1>
                        <div class="rating">
                          <input
                            value="5"
                            name="rate"
                            id="star5"
                            type="radio"
                          />
                          <label title="text" for="star5"></label>
                          <input
                            value="4"
                            name="rate"
                            id="star4"
                            type="radio"
                          />
                          <label title="text" for="star4"></label>
                          <input
                            value="3"
                            name="rate"
                            id="star3"
                            type="radio"
                            checked=""
                          />
                          <label title="text" for="star3"></label>
                          <input
                            value="2"
                            name="rate"
                            id="star2"
                            type="radio"
                          />
                          <label title="text" for="star2"></label>
                          <input
                            value="1"
                            name="rate"
                            id="star1"
                            type="radio"
                          />
                          <label title="text" for="star1"></label>
                        </div>
                      </div>
                      <div>
                        <span class="text-xs"
                          >ID Furniture:
                          {{ furnitureIndex.furnitureSpecificationId }}</span
                        >
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Available: </span>
                        <span>{{ furnitureIndex.available }} </span>
                      </div>
                      <div>
                        <span class="font-semibold">Category: </span>
                        <span>Table and Chair</span>
                      </div>
                      <div class="my-3">
                        <div class="w-10/12 bg-slate-200 h-px"></div>
                        <span class="text-red-700 text-3xl font-medium"
                          >$ {{ furnitureIndex.price }}</span
                        >
                        <div class="w-10/12 bg-slate-200 h-px"></div>
                      </div>
                      <div>
                        <span class="font-semibold">Color: </span>
                        <span>{{ furnitureIndex.color }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Height: </span>
                        <span>{{ furnitureIndex.height }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold">Width: </span>
                        <span>{{ furnitureIndex.width }}</span>
                        <div class="mt-3">
                          <span class="font-semibold">Lenght: </span>
                          <span>{{ furnitureIndex.length }}</span>
                        </div>
                      </div>
                      <div class="flex flex-cols-2 my-3 gap-x-7">
                        <button
                          @click="showModal(furnitureIndex)"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-dismiss="modal"
                          data-backdrop="false"
                          class="px-2 py-1 text-white ring-offset-2 ring-2 bg-slate-600 rounded-md"
                        >
                          ADD TO CART
                        </button>
                        <button
                          class="px-2 py-1 text-white ring-offset-2 ring-2 bg-red-700 ring-red-300 rounded-md"
                        >
                          BUY
                        </button>

                        <div class="icon_heart pl-3 pt-2">
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
                      <div class="more_infor">
                        <table class="table table-bordered w-6/12 text-sm">
                          <thead>
                            <tr>
                              <th scope="col">Wood</th>
                              <th scope="col">{{ furnitureIndex.wood }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <td>
                                {{ furnitureIndex.height }} x
                                {{ furnitureIndex.width }} x
                                {{ furnitureIndex.length }}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Room</th>
                              <td>{{ furnitureIndex.appropriateRoom }}</td>
                            </tr>
                            <tr>
                              <th scope="row">Collection</th>
                              <td>{{ furnitureIndex.collection }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <modal v-show="isShowQuantity" @close="closeModal">
              <template v-slot:title>
                <div class="flex items-center text-lg font-medium">
                  ALL Furniture
                </div>
              </template>
              <template v-slot:body>
                <div class="flex flex-cols-2 gap-x-4 mt-2">
                  <label
                    for="exampleInputEmail1"
                    class="text-base form-label font-semibold mt-2"
                    >Quantity</label
                  >
                  <input
                    v-model="quantities"
                    type="email"
                    class="form-control h-1/12 w-2/12"
                  />
                </div>
              </template>
              <template v-slot:footer>
                <button
                  @click="handleAddToCart"
                  class="px-2 py-1 text-white ring-offset-2 ring-2 bg-slate-600 rounded-md"
                >
                  ADD TO CART
                </button>
              </template>
            </modal>
          </div>
        </div>

        <div
          class="adver grid grid-rows-4 h-96 w-7/12 bg-zinc-100 mt-3 ml-3 max-sm:hidden"
        >
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-question"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10">Quick question</span>
              <p class="text-xs font-normal">Answer up to 30 questions</p>
            </div>
          </div>
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10"
                >Warranty support</span
              >
              <p class="text-xs font-normal">Within 3 years</p>
            </div>
          </div>
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10">Quick question</span>
              <p class="text-xs font-normal">Answer up to 30 questions</p>
            </div>
          </div>
          <div class="flex flex-cols-2 gap-4 items-center px-6">
            <div class="icon text-2xl">
              <i class="fa-solid fa-headphones"></i>
            </div>
            <div>
              <span class="text-lg font-medium leading-10">Online support</span>
              <p class="text-xs font-normal">We support 24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content_item rounded-md px-3 py-3 mt-5">
          <div class="description_furniture">
            <div class="description">
              <router-link to="" class="text-lg font-medium"
                >Description</router-link
              >
            </div>
          </div>
          <div class="h-px w-full bg-slate-200 mt-2"></div>
          <div class="content mt-3 leading-7 text-sm">
            <span></span>
            <span
              >Be the first to receive this product while we have it in
              stock.</span
            >
            <br />
            <span
              >This is a demonstration store. You can buy this product
              here</span
            >
            <br />
            <span
              >The round shape and fabric composition make the Casette a unique
              and versatile bag that zips to keep all the contents safe and
              secure. There are many sizes and colors.</span
            >
            <br />
            <span>
              Shipping cost is based on weight. Simply add products to your cart
              and use the Shipping Calculator to view shipping prices.
            </span>
          </div>
        </div>
        <div class="content_item rounded-md px-3 py-3 mt-4">
          <div class="storage_instructions">
            <div class="description">
              <router-link to="" class="text-lg font-medium"
                >Storage instructions</router-link
              >
            </div>
          </div>
          <div class="h-px w-full bg-slate-200 mt-2"></div>
          <div class="content mt-3 leading-8 text-sm">
            <span
              >We want you to be 100% satisfied with your purchase. Items can be
              returned or exchanged within 30 days of delivery.</span
            >
            <br />
            <span
              >For help, please contact our customer service department at
              support minhltgch200250@fpt.edu.vn</span
            >
          </div>
        </div>
        <div class="content_item rounded-md px-3 py-3 mt-4">
          <div class="grid grid-cols-2 gap-x-44 w-full">
            <p class="font-semibold">1 feedback</p>
            <!-- <div class="flex flex-cols-2 float-right pl-96">
              <span class="pr-3">Filters </span>
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  <span class="">Filters</span>
                </button>
                <ul class="dropdown-menu px-2 py-2 rounded-base">
                  <li><a href="#">Lastest</a></li>
                  <li><a href="#">Oldest</a></li>
                </ul>
              </div>
            </div> -->
          </div>
          <div class="h-px w-full bg-slate-200 mt-2"></div>
          <div class="grid grid-cols-12 mt-3">
            <!-- <div class="col-span-1 avatar_feeedback py-4">
            <router-link to="/profileCusPage" style="text-decoration: none"
              ><img
                class="rounded-full w-16"
                src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                alt="avatar"
            /></router-link>
          </div> -->
            <!-- <div class="form-group col-span-11 pt-1">
            <textarea
              style="height: 50%"
              class="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div> -->
          </div>
          <div class="comment flex flex-cols-2">
            <div class="avtar">
              <router-link to="/profileCusPage" style="text-decoration: none"
                ><img
                  class="rounded-full w-14"
                  src="@/assets/images/avatar.jpg"
                  alt="avatar"
              /></router-link>
            </div>
            <div class="pl-10">
              <h1 class="font-semibold">Luu Thi Minh</h1>
              <span class="text-base">Pretty</span>
              <br />
              <span class="text-xs">10:10AM</span>
            </div>
          </div>
          <img
            class="rounded-md w-24 ml-24"
            src="@/assets/images/category/bed/bed_8.png"
            alt="avatar"
          />
          <div class="h-px w-full bg-slate-200 mt-2"></div>
        </div>
      </div>
    </div>
    <!-- <div class="more product mt-14 mx-32 max-sm:mx-3">
      <h1 class="text-center font-semibold text-2xl mb-4 max-sm:text-xl">
        More Product
      </h1>
      <hr class="w-1/12 mb-14" />
      <div
        class="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 snap-x overflow-y-hidden"
      >
        <div>
          <all-furniture :furnitures="furnitures"></all-furniture>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
// import AllFurniture from "./AllFurniture.vue";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";

export default {
  components: {
    // AllFurniture,
    modal,
    alertError,
    alertSuccess,
  },
  data() {
    return {
      furnitures: [],
      furnitureIndex: {},
      furnitureFirst: {},
      quantities: "",
      moreFurniture: [],
      feedbacks: [],
      isShow: false,
      isShowQuantity: false,
      isFurnitureIdModal: "",
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
    };
  },
  created() {
    this.getAllFurnitureDetail();
    this.getUserFeedback();
  },
  methods: {
    async getAllFurnitureDetail() {
      try {
        const response = await axios.get(
          "customer/furnitures/" + this.$route.params.id
        );
        this.furnitures = response.data;
        this.furnitureFirst = this.furnitures[0];
        this.isShow = false;
      } catch (error) {
        console.error(error);
      }
    },
    async InforFurniture(furniture) {
      this.furnitureIndex = furniture;
      this.isShow = true;
    },
    showModal(furniture) {
      this.isFurnitureIdModal = furniture.furnitureSpecificationId;
      this.isShowQuantity = !this.isShowQuantity;
    },
    async handleAddToCart() {
      try {
        const response = await axios.post(
          "customer/cart/add?furnitureSpecificationId=" +
            this.isFurnitureIdModal +
            "&quantity=" +
            this.quantities
        );
        if (response.status === 200) {
          this.isAlertSuccess = true;
          this.messageSuccess = "Add to card successfully!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllWoods();
          this.isShowQuantity = false;
        }
      } catch (error) {
        this.isShowQuantity = false;
        this.isAlertError = true;
        this.messageError = "Add to card error!";
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    closeModal() {
      this.isShowQuantity = false;
    },
    async getUserFeedback() {
      try {
        const response = await axios.get("/customer/feedbacks");
        this.feedbacks = response.data;
        console.log(this.feedbacks);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #212529;
}

.button_card .btn {
  color: white;
  font-size: 13px;
  margin-left: 30%;
}
.flex.flex-cols-2.gap-4.items-center {
  border-bottom: 1px dashed #ccc;
}
/* icon heart */
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
/* star */
.rating {
  padding-top: 1px;
}
.rating:not(:checked) > input {
  /* position: absolute; */
  float: left;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 20px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: "★";
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}

.h-32.scrollbar {
  overflow-x: scroll;
}

.snap-start {
  scroll-snap-align: start;
  flex: 0 0 auto;
}
.adver {
  color: rgb(51 65 85);
}
/* all product */
.product {
  position: relative;
}
.furniture_label {
  position: absolute;
  /* width: 25%; */
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 60%;
}
hr {
  transform: translateX(547%);
}
.furniture.detail.mt-3 {
  width: 225%;
}
.nav {
  border-bottom: 1px solid #f5f5f5;
  color: #000000;
}
.moon .nav {
  border-bottom: 1px solid rgba(241, 235, 228, 0.1);
  color: #ffffff;
}
.all-furniture {
  overflow: scroll;
  height: 30em;
}
.all-furniture .fix_detail {
  display: flex;
}
/* .all-furniture .grid.grid-cols-4.gap-4 {

} */
/* .btn.add_to_card .btn,
.btn.order .btn {
  color: white;
  font-weight: 600;
  background: rgb(48, 46, 46);
} */
.furniture_infor {
  font-size: 14px;
}
.furniture.detail {
  background-color: white;
}
.content_detail {
  background-color: rgb(250 250 250);
}
.all-furniture {
  overflow: scroll;
  height: 33em;
}
.content_item {
  background-color: white;
}
.product .price {
  color: rgb(185 28 28);
}
.moon .content_item {
  color: #f1ebe4;
  background-color: transparent;
}
.moon .product {
  color: #f1ebe4;
}
.moon .furniture.detail {
  background-color: transparent;
}
.moon .content_detail {
  background-color: transparent;
}
.moon h1 {
  color: #f1ebe4;
}
.moon .product .price {
  color: rgb(255 175 175);
}
/* .moon table {
  color: #f1ebe4;
  background-color: transparent;
} */
.moon .btn.add_to_card .btn,
.moon .btn.order .btn {
  background-color: #f1ebe4;
  color: rgb(66 32 6);
  font-weight: 600;
}
.moon .adver {
  color: #4e463f;
  background-color: #3e3d3d;
  border: 1px solid white;
}
.moon img {
  background-color: white;
}
.moon span,
.moon p,
.moon i {
  color: #f9f1e4;
}
.content_detail {
  overflow: hidden;
}
</style>
