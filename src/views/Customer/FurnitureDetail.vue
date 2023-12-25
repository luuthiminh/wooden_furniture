<template>
  <div class="content_detail pt-36">
    <div class="nav mb-2">
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
            <div class="img_product w-10/12">
              <div
                v-if="
                  furnitureFirst &&
                  furnitureFirst.images &&
                  furnitureFirst.images.length > 0
                "
              >
                <img
                  :src="furnitureFirst.images[0].path"
                  alt="furniture"
                  class="img_fur"
                />
              </div>
              <loadding v-else />

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
                                class="border border-1 border-gray-900 px-2 py-2 rounded-lg"
                              >
                                <div v-for="im in furniture.images" :key="im">
                                  <img
                                    :src="im.path"
                                    alt="furniture"
                                    class="w-20 cursor-pointer"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <loadding v-else />
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
                        <h1 class="text-xl font-bold text-yellow-900">
                          {{ furnitureFirst.furnitureSpecificationName }}
                        </h1>
                      </div>
                      <div>
                        <span
                          class="text-xs font-medium text-yellow-900 opacity-90"
                          >ID Furniture:
                          {{ furnitureFirst.furnitureSpecificationId }}</span
                        >
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Available:
                        </span>
                        <span>{{ furnitureFirst.available }} </span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Category:
                        </span>
                        <span>Table and Chair</span>
                      </div>
                      <div class="my-3">
                        <!-- <div class="w-10/12 bg-slate-200 h-px"></div> -->
                        <hr />
                        <span class="flex gap-x-3 price text-3xl font-medium"
                          >{{ furnitureFirst.price }}
                          <p class="font-semibold text-red-800">VND</p>
                          <p></p
                        ></span>

                        <hr />
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Wood:
                        </span>
                        <span>{{ furnitureFirst.wood }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Color:
                        </span>
                        <span>{{ furnitureFirst.color }}</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Height:
                        </span>
                        <span>{{ furnitureFirst.height }}m</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Width:
                        </span>
                        <span>{{ furnitureFirst.width }}m</span>
                      </div>
                      <div class="mt-3">
                        <span class="font-semibold text-yellow-950"
                          >Lenght:
                        </span>
                        <span>{{ furnitureFirst.length }}m</span>
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
                      <div class="mt-3">
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
                      <div class="mt-3">
                        <span class="font-semibold">Wood: </span>
                        <span>{{ furnitureFirst.wood }}</span>
                      </div>
                      <div class="mt-3">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <modal v-show="isShowQuantity" @close="closeModal">
              <template v-slot:title>
                <div class="flex items-center text-lg font-medium">
                  Add To Cart
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
                  data-dismiss="modal"
                  class="px-2 py-2 text-white ring-offset-2 ring-2 bg-slate-600 rounded-md text-sm"
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
            <span v-if="furnitureIndex">{{ furnitureFirst.description }}</span>
            <span v-else>{{ furnitureIndex.description }}</span>
          </div>
        </div>

        <div class="content_item rounded-md px-3 py-3 mt-4">
          <div class="grid grid-cols-2 gap-x-44 w-full">
            <p class="font-semibold text-yellow-900">
              Total Feedbacks: {{ feedbacks?.length }}
            </p>
          </div>
          <div class="h-px w-full bg-slate-200 mt-2"></div>
          <div class="grid grid-cols-12 mt-3"></div>
          <div class="comment flex flex-cols-2">
            <div v-if="!furnitureIndex">
              <div v-for="fed in feedbacks" :key="fed" class="pb-3 ml-4 mb-3">
                <div class="">
                  <h1 class="font-semibold">{{ fed?.customer }}</h1>
                  <div class="flex gap-x-2 mt-2">
                    <i
                      class="bi bi-calendar-check text-slate-600 text-xs mt-1"
                    ></i>
                    <span class="text-sm block text-slate-500 mb-2">{{
                      fed?.creationDate
                    }}</span>
                  </div>
                  <span class="text-sm">{{ fed?.content }}</span>
                  <br />
                  <div class="flex gap-x-1 mt-2">
                    <span class="text-sm font-medium text-yellow-900"
                      >Vote Star:
                    </span>
                    <span class="text-sm">{{ fed.voteStar }}</span>
                    <i class="bi bi-star-fill text-yellow-500 text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-for="fed in feedbacks" :key="fed" class="pb-3 ml-4 mb-3">
                <div class="">
                  <h1 class="font-semibold">{{ fed?.customer }}</h1>
                  <div class="flex gap-x-2 mt-2">
                    <i
                      class="bi bi-calendar-check text-slate-600 text-xs mt-1"
                    ></i>
                    <span class="text-sm block text-slate-500 mb-2">{{
                      fed?.creationDate
                    }}</span>
                  </div>
                  <span class="text-sm">{{ fed?.content }}</span>
                  <br />
                  <div class="flex gap-x-1 mt-2">
                    <span class="text-sm font-medium text-yellow-900"
                      >Vote Star:
                    </span>
                    <span class="text-sm">{{ fed.voteStar }}</span>
                    <i class="bi bi-star-fill text-yellow-500 text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-px w-full bg-slate-200 mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import loadding from "@/components/LoadingComponent.vue";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import { format } from "date-fns";

export default {
  components: {
    loadding,
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
      info: {},
      id: {},
    };
  },
  created() {
    this.getAllFurnitureDetail();
    this.getFeedback();
  },
  methods: {
    async getAllFurnitureDetail() {
      try {
        const response = await axios.get(
          "customer/furnitures/" + this.$route.params.id
        );
        this.furnitures = response.data;
        this.furnitureFirst = this.furnitures[0];
        this.getFeedback(this.furnitureFirst);
        this.isShow = false;
      } catch (error) {
        console.error(error);
      }
    },
    async getFeedback(furnitureFirst) {
      try {
        const response = await axios.get(
          "customer/furnitures/" +
            furnitureFirst.furnitureSpecificationId +
            "/feedbacks"
        );
        this.feedbacks = response.data;
        for (let i = 0; i < this.feedbacks.length; i++) {
          const date = new Date(this.feedbacks[i].creationDate);
          this.feedbacks[i].creationDate = format(date, "dd/MM/yyyy");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async InforFurniture(furniture) {
      this.furnitureIndex = furniture;
      this.isShow = true;
      this.getFeedback(this.furnitureIndex);
    },
    showModal(furniture) {
      this.isFurnitureIdModal = furniture.furnitureSpecificationId;
      this.isShowQuantity = !this.isShowQuantity;
    },
    async handleAddToCart() {
      if (localStorage.getItem("token") == undefined) {
        this.$router.push({ name: "login" });
      } else {
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
      }
    },
    closeModal() {
      this.isShowQuantity = false;
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
.img_fur {
  background: #f0e8d9;
}
.pb-3.ml-4.mb-3 {
  border-bottom: 1px dashed #c5c4c4;
  width: 259%;
}
</style>
