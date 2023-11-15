<template>
  <div class="allFurniture">
    <div v-if="furnitures.length">
      <div class="grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-md:grid-cols-2">
        <div
          class="product"
          v-for="furniture in furnitures"
          :key="furniture.furnitureId"
        >
          <div>
            <div
              class="furniture_items px-2 py-2 border border-indigo-100 rounded-md"
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
                  <!-- <img :src="getFurnitureImage(furniture)" /> -->
                </router-link>
                <div class="furniture_label">
                  <div v-if="furniture.label === 'New'">
                    <div
                      class="product_label bg-yellow-600 px-1 py-1 rounded-md"
                    >
                      <span class="text-white">{{ furniture.label }}</span>
                    </div>
                  </div>
                  <div v-if="furniture.label === 'Hot Sale'">
                    <div class="product_label bg-red-700 px-1 py-1 rounded-md">
                      <span class="text-white">{{ furniture.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-4 px-2">
                <div class="text-xs">
                  <span class="text_price dark:text-red pr-2"
                    >${{ furniture.price }}</span
                  >
                  <!-- <del class="text-gray-500">$2000</del> -->
                </div>
                <div class="pt-2 text-base font-semibold">
                  <span>{{ furniture.furnitureName }}</span>
                </div>
                <div>
                  <span class="text-sm"
                    >Star: {{ furniture.voteStar
                    }}<i class="fa-solid fa-star pl-1 text-xs"></i
                  ></span>
                </div>
                <div>
                  <span class="text-sm">Sold: {{ furniture.sold }}</span>
                </div>
                <div class="button_buy py-3 px-2">
                  <router-link
                    :to="{
                      name: 'OrderBill',
                      params: { id: furniture.furnitureId },
                    }"
                  >
                    <button
                      @click.prevent="showModal('fur', furniture)"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-backdrop="false"
                      class="px-5 py-1 text-white ring-offset-2 ring-2 bg-slate-600 hover:ring-slate-400 ml-2 my-2 rounded-md"
                    >
                      Buy now
                    </button>
                  </router-link>
                </div>
                <div class="text-center text-xs mb-3">
                  <div @click.prevent="toggleWishlist(furniture)">
                    <i class="fa-regular fa-heart cursor-pointer"></i>
                    Add wish list
                  </div>
                  <div>
                    <modal
                      v-if="modalType == 'fur'"
                      @close="modalType == null"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div class="flex items-center text-lg font-semibold">
                          Buy Furniture
                        </div>
                      </template>
                      <template v-slot:body>
                        <div
                          class="product"
                          v-for="fur in furnitureModel"
                          :key="fur.furnitureId"
                        >
                          <div class="grid grid-cols-2 gap-x-7">
                            <div class="image_product">
                              <!-- <img
                                src="@/assets/images/category/shelves_tv/shelves_11.png"
                                alt=""
                              /> -->
                              {{ fur.image }}
                            </div>
                            <div>
                              <div
                                class="name furniture font-semibold py-3 text-base"
                              >
                                {{ fur.furnitureName }}
                              </div>
                              <div class="grid grid-cols-2 gap-x-1 text-sm">
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
                                  <span>${{ fur.price }}</span>
                                  <!-- <span>$1000</span> -->
                                  <!-- <span class="text-red-500">$2000</span> -->
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
                              <div class="flex gap-x-4 mt-2 mb-10">
                                <label
                                  for="exampleInputEmail1"
                                  class="text-sm form-label font-semibold mt-2"
                                  >Quantity</label
                                >
                                <input
                                  v-model="quantities"
                                  type="email"
                                  class="form-control h-1/12 w-2/12"
                                />
                                <button
                                  @click="handleCheckOut(fur)"
                                  data-toggle="modal"
                                  data-target="#exampleModalLong"
                                  data-backdrop="false"
                                  class="px-2 text-white ring-offset-2 ring-2 bg-red-700 ring-red-300 rounded-md h-7 mt-1"
                                >
                                  BUY
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:footer>
                        <div class="flex justify-between"></div>
                      </template>
                    </modal>
                    <modal
                      v-if="modalType == 'order'"
                      @close="closeModal"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div>
                          <h1 class="font-semibold text-lg">Order Payment</h1>
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="mt-1 mb-2" v-if="order">
                          <div class="bg-white rounded-md px-3 py-2">
                            <span class="text-red-600 font-medium text-sm"
                              ><i class="fa-solid fa-location-dot"></i>
                              Address</span
                            >
                            <br />
                            <div class="py-2 flex gap-x-4">
                              <span class="font-semibold text-sm"
                                >{{ order.deliveryAddress }}
                              </span>
                              <div class="text-sm">
                                <div class="span_address">
                                  <div class="">
                                    <span
                                      class="px-2 py-1 font-medium text-red-600 text-xs"
                                      >Default</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="font-semibold text-amber-900">
                                <router-link to="/"> Change </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bg-white rounded-md px-3 pt-2">
                          <div>
                            <div>
                              <div class="card mb-3">
                                <div
                                  class="card-body"
                                  v-for="fur in order.items"
                                  :key="fur.furnitureId"
                                >
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div>
                                        <img
                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                          class="img-fluid rounded-3"
                                          alt="Shopping item"
                                          style="width: 65px"
                                        />
                                      </div>
                                      <div class="ms-3">
                                        <h5>
                                          {{ fur.furnitureSpecificationName }}
                                        </h5>
                                        <!-- <p class="small mb-0">
                                  {{ f.height }} x {{ f.width }} x
                                  {{ f.length }}
                                </p> -->
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div style="width: 50px">
                                        <h5 class="fw-normal mb-0">
                                          {{ fur.quantity }}
                                        </h5>
                                      </div>
                                      <div style="width: 80px">
                                        <h5 class="mb-0">{{ fur.cost }}</h5>
                                      </div>
                                      <a href="#!" style="color: #cecece"
                                        ><i class="fas fa-trash-alt"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="bg-white rounded-md px-3 py-2 my-3 border border-solid border-gray-100 mx-3"
                        >
                          <div class="flex gap-x-2">
                            <i
                              class="bi bi-currency-dollar text-yellow-500"
                            ></i>
                            <span class="font-medium">Point</span>
                          </div>
                          <label
                            class="label_point absolute right-12 flex gap-x-2"
                          >
                            <input
                              v-model="userpoint"
                              type="text"
                              class="col-span-8 form-control point_input"
                              id="exampleInpuName1"
                              aria-describedby="nameHelp"
                            />
                            <span class="point font-medium">{{
                              info.point
                            }}</span>
                          </label>
                        </div>
                        <div
                          class="bg-white rounded-md px-3 py-2 my-3 border border-solid border-gray-100 mx-3"
                        >
                          <div class="card-body">
                            <div
                              class="d-flex justify-content-between align-items-center mb-4"
                            >
                              <h5 class="label_payment mb-0 font-medium">
                                Payment Method
                              </h5>
                            </div>
                            <div>
                              <div>
                                <select
                                  v-if="order.payments"
                                  v-model="paymentId"
                                  class="form-select text-sm"
                                  aria-label="Default select example"
                                >
                                  <option selected>Choose Payment</option>
                                  <option
                                    v-for="md in order.payments"
                                    :key="md"
                                    :value="md.paymentId"
                                  >
                                    {{ md.paymentMethod }}
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="">
                              <label
                                for="exampleInputEmail1"
                                class="form-label text-semibold text-base pt-2 border-none"
                                >Note</label
                              >
                              <input
                                v-model="note"
                                type="text"
                                class="form-control"
                                id="exampleInpuName1"
                                aria-describedby="nameHelp"
                              />
                              <!-- <textarea
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                        v-model="note"
                      ></textarea> -->
                            </div>
                            <hr class="my-4 text-gray-400" />

                            <div class="d-flex justify-content-between mt-7">
                              <p class="font-medium text-base">Total</p>
                              <p class="font-medium text-base">
                                {{ order.totalCost }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:footer>
                        <button
                          @click="HandleOrder(order)"
                          data-dismiss="modal"
                          class="ml-3 my-4 text-center px-4 py-2 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Order
                        </button>
                      </template>
                    </modal>
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
</template>

<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";

export default {
  name: "allFurniture",
  components: {
    modal,
  },
  props: {
    furnitures: Array,
  },
  data() {
    return {
      isShowModal: false,
      // furnitures: [],
      furnitureModel: [],
      isFurnitureIdModal: [],
      order: {},
      modalType: null,
      info: {},
    };
  },
  created() {
    this.getInfor();
  },
  methods: {
    async getInfor() {
      try {
        const response = await axios.get("user/detail");
        this.info = response.data;
        this.isEditPhone = true;
      } catch (error) {
        console.error(error);
      }
    },
    async showModal(type, furniture) {
      this.modalType = type;
      try {
        const response = await axios.get(
          "customer/furnitures/" + furniture.furnitureId
        );
        this.furnitureModel = response.data;
        this.isShowModal = true;
        console.log(furniture);
      } catch (error) {
        console.error(error);
      }
    },

    async toggleWishlist(furniture) {
      try {
        const response = await axios.put(
          "customer/wish-list/toggle?furnitureId=" + furniture.furnitureId
        );

        console.log(response.data);
      } catch (error) {
        console.error("Error toggling wishlist:", error);
      }
    },
    async handleCheckOut(fur) {
      setTimeout(() => {
        this.showModal("order", "null");
      }, 300);
      // this.showModal("order", "null");
      try {
        const response = await axios.get(
          "customer/checkout-now?furnitureSpecificationId=" +
            fur.furnitureSpecificationId +
            "&quantity=" +
            this.quantities
        );
        if (response.status === 200) {
          this.order = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async HandleOrder(order) {
      const itemsArray = order.items.map((item) => ({
        itemId: item.furnitureSpecificationId,
        quantity: item.quantity,
      }));
      try {
        await axios.post("customer/order", {
          addressId: 22,
          paymentId: this.paymentId,
          usedPoint: this.userpoint,
          note: this.note,
          items: itemsArray,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.product {
  position: relative;
}
.produt img {
  transition: transform 1s;
}
.moon img {
  background: #ffffff26;
}
.product img:hover {
  transform: rotateY(180deg);
}
.furniture_items {
  background-color: #fff;
}
/* .moon .furniture_items {
  background-color: #efede9;
} */
.moon .furniture_items {
  background-color: transparent !important;
}
.furniture_label {
  position: absolute;
  /* width: 25%; */
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 70%;
}
/* Loading */
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
.text_price {
  color: rgb(31 41 55);
}
.modal .form-control {
  height: 80%;
}
</style>
