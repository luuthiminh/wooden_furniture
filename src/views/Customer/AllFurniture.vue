<template>
  <div class="allFurniture">
    <div v-if="furnitures.length">
      <div class="absolute right-0">
        <alert-success v-if="isAlertSuccess">
          <template v-slot:message>{{ messageSuccess }}</template>
        </alert-success>
      </div>
      <div
        class="grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:px-10 max-sm:px-2"
      >
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
                    :src="furniture.image"
                    alt="furniture"
                    class="object-contain h-52 w-96"
                  />
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
                  <span class="text-red-600 dark:text-red pr-2 font-medium"
                    >{{ furniture.price }} VND</span
                  >
                </div>
                <div class="furnitureName pt-2 text-base font-semibold">
                  <span>{{ furniture.furnitureName }}</span>
                </div>
                <div>
                  <span class="text-sm"
                    >Star: {{ furniture.voteStar
                    }}<i
                      class="text-yellow-500 fa-solid fa-star pl-1 text-xs"
                    ></i
                  ></span>
                </div>
                <div>
                  <span class="text-sm">Sold: {{ furniture.sold }}</span>
                </div>

                <div class="button_buy py-3 px-2">
                  <button
                    @click.prevent="showModal('fur', furniture)"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-backdrop="false"
                    class="px-4 py-1 text-white ring-offset-2 ring-2 bg-slate-600 hover:ring-slate-400 ml-2 my-2 rounded-md max-lg:w-56 w-40 max-sm:w-32"
                  >
                    Buy now
                  </button>
                </div>
                <div class="text-center text-xs mb-3">
                  <div @click.prevent="toggleWishlist(furniture)">
                    <i
                      v-if="!furniture.isFavorite && furniture.isLike === false"
                      class="fa-regular fa-heart cursor-pointer"
                    ></i>
                    <i v-else class="bi bi-heart-fill text-red-500"></i>
                    {{
                      furniture.isFavorite && furniture.isLike === false
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }}
                  </div>
                  <modal
                    v-if="modalType == 'notification'"
                    @close="modalType == null"
                    data-target="#myModal"
                  >
                    <template v-slot:title>
                      <div class="flex items-center text-lg font-semibold">
                        Notification
                      </div>
                    </template>
                    <template v-slot:body>
                      <notification>
                        <template v-slot:title>
                          <div v-if="isFavorite">
                            The furniture has been removed from wishlist
                          </div>
                          <div v-else>Add funiture to wishlist succefully</div>
                        </template>
                      </notification>
                    </template>
                    <template v-slot:footer></template>
                  </modal>
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
                          class="product text-left"
                          v-for="fur in furnitureModel"
                          :key="fur.furnitureId"
                        >
                          <div class="grid grid-cols-2 gap-x-7">
                            <div class="image_product">
                              <div v-for="fur in fur.images" :key="fur">
                                <img
                                  :src="fur.path"
                                  alt="furniture"
                                  class="w-11/12 ml-3 mt-10"
                                />
                              </div>
                            </div>
                            <div>
                              <div
                                class="name furniture font-semibold py-3 text-base"
                              >
                                {{ fur.furnitureName }}
                              </div>
                              <div class="grid grid-cols-2 gap-x-1 text-sm">
                                <span class="font-medium">Height</span>
                                <span>{{ fur.height }}</span>
                              </div>
                              <div
                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                              >
                                <span class="font-medium">Width:</span>
                                <span>{{ fur.width }}</span>
                              </div>
                              <div
                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                              >
                                <span class="font-medium">Lenght:</span>
                                <span>{{ fur.length }}</span>
                              </div>
                              <div class="text-sm">
                                <div
                                  class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                                >
                                  <span class="font-medium">Price:</span>
                                  <span class="text-red-500"
                                    >${{ fur.price }}</span
                                  >
                                </div>
                              </div>
                              <div
                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                              >
                                <span class="font-medium">Color:</span>
                                <span>{{ fur.color }}</span>
                              </div>
                              <div
                                class="grid grid-cols-2 gap-x-1 text-sm pt-1"
                              >
                                <span class="font-medium">Wood:</span>
                                <span>{{ fur.wood }}</span>
                              </div>
                              <br />
                              <div v-if="fur.available === 0">
                                <span class="text-red-500 font-medium">
                                  This furnitrue out of stock!</span
                                >
                              </div>
                              <div v-else>
                                <label
                                  for="exampleInputEmail1"
                                  class="text-sm form-label font-semibold mt-2"
                                  >Quantity</label
                                >
                                <div class="flex gap-x-4 mt-2 mb-10">
                                  <input
                                    v-model="quantities"
                                    type="email"
                                    class="form-control h-1/12 w-2/12"
                                  />
                                  <button
                                    v-if="isLogin"
                                    @click="handleCheckOut(fur)"
                                    data-toggle="modal"
                                    data-target="#exampleModalLong"
                                    data-backdrop="false"
                                    class="px-2 text-white ring-offset-2 ring-2 bg-red-700 ring-red-300 rounded-md h-7 mt-1"
                                  >
                                    BUY
                                  </button>
                                  <button
                                    v-else
                                    @click="handleCheckOut(fur)"
                                    data-toggle="modal"
                                    data-target="#exampleModalLong"
                                    data-backdrop="false"
                                    class="px-2 text-white ring-offset-2 ring-2 bg-red-700 ring-red-300 rounded-md h-7 mt-1"
                                    disabled
                                  >
                                    BUY
                                  </button>
                                </div>
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
                          <h1 class="font-semibold text-lg">Check Out</h1>
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="mt-1 mb-2" v-if="order">
                          <div class="bg-white rounded-md px-3 py-2 text-left">
                            <span
                              class="text-red-600 font-medium text-sm text-left"
                              ><i class="fa-solid fa-location-dot"></i>
                              Address</span
                            >
                            <br />
                            <div class="py-2 flex gap-x-4">
                              <span
                                v-if="Object.keys(adChange).length === 0"
                                class="font-semibold text-sm"
                                >{{ order.deliveryAddress }}
                              </span>
                              <span v-else class="font-semibold text-sm"
                                >{{ adChange.street }} {{ adChange.ward }}
                                {{ adChange.district }}
                                {{ adChange.provine }}
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
                              <div
                                class="font-semibold text-amber-900 cursor-pointer"
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                @click="opentModal('address')"
                              >
                                Change
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bg-white rounded-md px-3 pt-2">
                          <div>
                            <div>
                              <div class="card mb-3">
                                <div class="card-body">
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div>
                                        <!-- <img
                                          src="@/assets/images/category/shelves_tv/shelves_11.png"
                                          class="img-fluid rounded-3"
                                          alt="Shopping item"
                                          style="width: 65px"
                                        /> -->
                                        <img
                                          :src="
                                            order.furnitureSpecificationImage
                                          "
                                          class="img-fluid rounded-3"
                                          alt="Shopping item"
                                          style="width: 65px"
                                        />
                                      </div>
                                      <div class="ms-3">
                                        <h5>
                                          {{ order.furnitureSpecificationName }}
                                        </h5>
                                      </div>
                                    </div>
                                    <div
                                      class="d-flex flex-row align-items-center"
                                    >
                                      <div style="width: 50px">
                                        <h5 class="fw-normal mb-0">
                                          x{{ order.quantity }}
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="card bg-white rounded-md px-3 py-2 my-3 mx-3"
                        >
                          <div class="flex gap-x-1 mt-3 mb-3">
                            <span class="font-medium label_payment mt-2 mr-3"
                              >Point</span
                            >
                            <div class="input-group">
                              <input
                                v-model="userpoint"
                                type="text"
                                class="form-control border border-slate-200"
                                aria-label="Dollar amount (with dot and two decimal places)"
                                :maxlength="info.point"
                              />
                              <span class="input-group-text">
                                <i
                                  class="bi bi-currency-dollar text-yellow-500 text-sm"
                                ></i
                              ></span>
                              <span class="input-group-text">{{
                                info.point
                              }}</span>
                            </div>
                          </div>

                          <div class="">
                            <div
                              class="d-flex justify-content-between align-items-center mb-4"
                            >
                              <h5 class="label_payment mb-0 font-medium mt-2">
                                Payment Method
                              </h5>
                            </div>

                            <div>
                              <div>
                                <select
                                  v-if="order.payments"
                                  v-model="paymentId"
                                  class="form-select text-sm border border-slate-200"
                                  aria-label="Default select example"
                                >
                                  <option selected>Choose Payment</option>
                                  <option value="1">Cash on Delivery</option>
                                  <option value="2">QR Code</option>
                                  <option value="3">Domestic Card</option>
                                  <option value="4">International Card</option>
                                </select>
                              </div>
                            </div>
                            <div class="">
                              <div
                                class="d-flex justify-content-between align-items-center mb-4"
                              >
                                <h5 class="label_payment mb-0 font-medium mt-2">
                                  Delivery Method
                                </h5>
                              </div>

                              <div>
                                <div>
                                  <select
                                    v-model="delivery"
                                    class="form-select text-sm border border-slate-200"
                                    aria-label="Default select example"
                                    @change="CalculateDeliveryFee"
                                  >
                                    <option selected>Choose Delivery</option>
                                    <option
                                      v-for="ship in methodDelevery.data"
                                      :key="ship"
                                      :value="ship.service_id"
                                    >
                                      {{ ship.short_name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              class="grid grid-cols-6 gap-4 rounded-xl text-sm pb-3"
                            >
                              <label class="label_payment">Note</label>
                              <textarea
                                v-model="note"
                                placeholder="Your note..."
                                class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="mx-3 mt-4 text-sm text-left">
                          <span class="font-semibold">TOTAL ORDER </span>
                          <span class="font-medium"
                            >| {{ customOrder.length }} CUSTOM FURNITURE</span
                          >
                        </div>
                        <div
                          class="mx-3 flex flex-col-reverse divide-y divide-y-reverse divide-dashed divide-slate-300"
                        >
                          <div class="d-flex justify-content-between mt-2">
                            <p class="font-semibold text-sm">SUBTOTAL</p>
                            <p class="font-bold text-base text-red-600">
                              {{ totalCost }} VND
                            </p>
                          </div>
                          <br />
                          <div class="flex gap-x-10 mt-4 font-medium">
                            <p class="text-sm">Point</p>
                            <p class="text-sm absolute right-10">
                              {{ userpoint }}
                            </p>
                          </div>
                          <div class="flex gap-x-10 mt-4 font-medium">
                            <p class="text-sm">Shipping Fee</p>
                            <p class="text-sm absolute right-10">
                              {{ shipCost }} VND
                            </p>
                          </div>
                          <div class="flex gap-x-10 mt-4 font-semibold">
                            <p class="text-sm">Subtotal</p>
                            <p class="text-sm absolute right-10">
                              {{ order.totalCost }} VND
                            </p>
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
                    <modal
                      v-if="modalType == 'address'"
                      @close="closeModal"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div
                          class="flex items-center text-base font-semibold text-yellow-950"
                        >
                          All Address
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="py-3" v-if="address.length">
                          <div
                            class="flex gap-x-2 py-3"
                            v-for="ad in address"
                            :key="ad.id"
                          >
                            <div class="flex gap-x-1">
                              <input
                                v-model="ad.addressChange"
                                @change="changeAddress(ad)"
                                class="w-px/12"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <span
                                class="span_address font-medium list-decimal"
                                >{{ ad.street }} {{ ad.ward }}
                                {{ ad.district }} {{ ad.provine }}</span
                              >
                            </div>
                            <div
                              v-if="ad.addressType === 'DEFAULT'"
                              class="span_address"
                            >
                              <div
                                class="border-solid border-2 border-red-600 rounded-full"
                              >
                                <span
                                  class="px-2 py-1 font-medium text-red-600 text-xs"
                                  >Default</span
                                >
                              </div>
                            </div>
                            <div class="absolute right-4 flex gap-x-5">
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('editAddress', ad)"
                                class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Edit
                              </button>
                              <button
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                data-backdrop="false"
                                @click="opentModal('deleteAddress', ad)"
                                class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-600 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:footer>
                        <button
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          data-backdrop="false"
                          @click="confirmChangeAddress"
                          class="px-2 py-2 text-white hover:ring-offset-2 hover:ring-2 bg-red-700 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
                        >
                          Confirm
                        </button>
                      </template>
                    </modal>
                    <modal
                      v-if="modalType == 'editAddress'"
                      @close="modalType == null"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div class="flex items-center text-lg font-semibold">
                          Edit Address
                        </div>
                      </template>
                      <template v-slot:body>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Stress</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="addressModal.street"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Ward</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="addressModal.ward"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >District</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="addressModal.district"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Province</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="addressModal.provine"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                            />
                          </div>
                        </div>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="addressModal.type"
                        >
                          <option selected>{{ addressModal.type }}</option>
                          <option value="DEFAULT">Default</option>
                          <option value="HOME">Home</option>
                        </select>
                      </template>
                      <template v-slot:footer
                        ><div class="bg-yellow-900 rounded-md">
                          <span
                            type="button"
                            class="px-2 py-2 text-white"
                            @click.prevent="HandleUpdateAddress()"
                          >
                            Update
                          </span>
                        </div></template
                      >
                    </modal>
                    <modal
                      v-if="modalType == 'deleteAddress'"
                      @close="modalType == null"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div class="flex items-center text-lg font-semibold">
                          Delete
                        </div>
                      </template>
                      <template v-slot:body>
                        <p class="text-base py-3">
                          Are you sure detete
                          <b>
                            {{ addressModal.street }} {{ addressModal.ward }}
                            {{ addressModal.district }}
                            {{ addressModal.provine }} ?</b
                          >
                        </p>
                      </template>
                      <template v-slot:footer>
                        <div class="bg-red-900 rounded-md">
                          <span
                            type="button"
                            class="px-2 py-2 text-white"
                            data-dismiss="modal"
                            @click="HandleDelete()"
                          >
                            Delete
                          </span>
                        </div>
                      </template>
                    </modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal
        v-if="modalType == 'delete'"
        @close="modalType == null"
        data-target="#myModal"
      >
        <template v-slot:title> <div class="flex items-cente"></div></template>
        <template v-slot:body>
          <p class="text-base py-3"></p>
          <div class="flex items-cente"></div
        ></template>
        <template v-slot:footer> <div class="flex items-cente"></div></template>
      </modal>
    </div>
    <div v-else>
      <div class="loader">
        <span class="l">L</span>
        <span class="o">o</span>
        <span class="a">a</span>
        <span class="d">d</span>
        <span class="i">i</span>
        <span class="n">n</span>
        <span class="g">g</span>
        <span class="text-white"> .</span>
        <span class="text-white"> .</span>
        <span class="g">F</span>
        <span class="g">u</span>
        <span class="g">r</span>
        <span class="g">n</span>
        <span class="g">i</span>
        <span class="g">t</span>
        <span class="g">u</span>
        <span class="g">r</span>
        <span class="g">e</span>
        <span class="d1">.</span>
        <span class="d2">.</span>
        <span class="d3">.</span>
      </div>
    </div>
  </div>
</template>

<script>
import alertSuccess from "@/components/AlertSuccess.vue";
import axios from "axios";
import modal from "@/components/ModalPage.vue";
import notification from "@/components/NotificationSuccess.vue";

export default {
  name: "allFurniture",
  components: {
    modal,
    alertSuccess,
    notification,
  },
  props: {
    furnitures: Array,
  },
  data() {
    return {
      isShowModal: false,
      furnitureModel: [],
      isFurnitureIdModal: [],
      modalType: null,
      info: {},
      addreltAddress: {},
      addressModal: {},
      defaussId: null,
      adChange: {},
      address: [],
      isFavorite: false,
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
      isLogin: false,
      methodShip: [],
      userpoint: 0,
      note: "",
      shipfee: 0,
      message: "",
      customOrder: 0,
      furnitureOrder: [],
    };
  },
  created() {
    this.getInfor();
    this.checkLogin();
    console.log("bucket All Furnitrue", this.$store.state.url);
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem("token") !== "") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
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
      if (localStorage.getItem("token") === "") {
        this.$router.push({ name: "login" });
      } else {
        furniture.isFavorite = !furniture.isFavorite;
        try {
          const response = await axios.put(
            "customer/wish-list/toggle?furnitureId=" + furniture.furnitureId
          );
          if (response.status === 200) {
            if (
              response.data === "The furniture has been removed from wishlist"
            ) {
              this.isFavorite = false;
              this.opentModal("notification");
              console.log("Da show");
            } else {
              this.isFavorite = true;
              this.opentModal("notification");
            }
          }
        } catch (error) {
          console.error("Error toggling wishlist:", error);
        }
      }
    },
    opentModal(type, ad) {
      this.modalType = type;
      this.addressModal = ad;
      this.getAddress();
    },
    async getAddress() {
      try {
        const response = await axios.get("user/customer-infor/address");
        this.address = response.data;
        console.log(this.address);
      } catch (error) {
        console.error(error);
      }
    },
    async handleCheckOut(fur) {
      if (localStorage.getItem("token") == "") {
        this.$router.push({ name: "login" });
      } else {
        this.opentModal("order", "null");
        this.$store
          .dispatch("handleCheckOutNow", {
            fur,
            quantity: this.quantities,
          })
          .then(() => console.log(this.order));
      }
    },
    handleCheckOutOtherAdress() {
      // this.furnitureOrder = this.$store.state.furnitureOrder;
      this.$store.dispatch("handleCheckOutOtherAddress", {
        province: this.adChange.province,
        district: this.adChange.district,
        ward: this.adChange.ward,
      });
      // this.furnitureOrder = this.$store.state.furnitureOrder;
    },
    //HàmCheckout
    async getProvinceCode(province) {
      this.$store.dispatch("getProvinceCode", province);
    },
    async getDistrictCode(district) {
      this.$store.dispatch("getDistrictCode", district);
    },
    async getWardCode(ward) {
      this.$store.dispatch("getWardCode", ward);
    },
    async getAvailableServices() {
      this.$store.dispatch("getAvailableServices");
    },
    async CalculateDeliveryFee(e) {
      this.$store.dispatch("CalculateDeliveryFee", e);
    },
    async HandleOrder(order) {
      let point = this.userpoint / 100;
      const id = this.addressId || order.deliveryAddressId;
      const payId = parseInt(this.paymentId);
      try {
        const response = await axios.post("customer/order", {
          addressId: id,
          paymentId: payId,
          usedPoint: point,
          note: this.note,
          total: this.totalCost,
          items: [
            {
              itemId: order.furnitureSpecificationId,
              quantity: order.quantity,
            },
          ],
        });
        if (response.status === 200) {
          if (
            response.data !== null &&
            response.data !== "Order successfully"
          ) {
            this.paymentOline = response.data;
            window.location.href = this.paymentOline;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    closeModal() {
      this.modalType = null;
    },
    changeAddress(ad) {
      this.addressId = ad.id;
      this.adChange = ad;
      this.handleCheckOutOtherAdress();
    },
    confirmChangeAddress() {
      this.opentModal("order");
    },

    async HandleUpdateAddress() {
      const formData = new FormData();
      formData.append("AddressId", this.addressModal.id);
      formData.append("Street", this.addressModal.street);
      formData.append("Ward", this.addressModal.ward);
      formData.append("District", this.addressModal.district);
      formData.append("Provine", this.addressModal.provine);
      formData.append("Type", this.addressModal.type);
      try {
        const response = await axios.put(
          "user/customer-infor/address/update",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          this.isAlertSuccess = true;
          this.messageSuccess = "Update  successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAddress();
        }
        console.log(response);
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "user/customer-infor/address/remove/" + this.addressModal.id
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess = "Delete address successful!";
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
          this.getAddress();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messagerError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 3000);
        console.error(error);
      }
    },
  },
  computed: {
    totalCost() {
      let point = this.userpoint / 100;
      console.log(this.order.totalCost);
      let sum = this.order.totalCost + this.shipCost - point;
      let cost = parseFloat(sum.toFixed(2));
      return cost;
    },
    order() {
      return this.$store.state.checkOutNow;
    },
    methodDelevery() {
      return this.$store.state.methodDeliveries;
    },
    shipCost() {
      return this.$store.state.shipCost;
    },
    urls() {
      return this.$store.state.urls;
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
.moon .furniture_items {
  background-color: transparent !important;
}
.furniture_label {
  position: absolute;
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  top: 4%;
  left: 70%;
}
/* Loading */
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
.l {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.o {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.4s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.a {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.6s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.d {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 0.8s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.i {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 1s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.n {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 1.2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.g {
  color: #8c5a16;
  opacity: 0;
  animation: pass 2s ease-in-out infinite;
  animation-delay: 1.4s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.d1 {
  color: #8c5a16;
  opacity: 0;
  animation: pass1 2s ease-in-out infinite;
  animation-delay: 1.6s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}

.d2 {
  color: #8c5a16;
  opacity: 0;
  animation: pass1 2s ease-in-out infinite;
  animation-delay: 2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}
.d3 {
  color: #8c5a16;
  opacity: 0;
  animation: pass1 2s ease-in-out infinite;
  animation-delay: 2s;
  letter-spacing: 0.5em;
  text-shadow: 2px 2px 3px #919191;
  font-weight: 500;
}
@keyframes pass {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes pass1 {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.modal .form-control {
  height: 80%;
}
.form-control,
textarea {
  background-color: rgb(238 238 243 / 58%);
  border: none;
}
.label_payment {
  font-size: 14px;
  font-weight: 600;
}

/* */
.form-control.point_input {
  margin-top: -10px;
  height: 28px;
  width: 65px;
}
.label_point {
  margin-top: -14px;
}
.point {
  margin-top: -6px;
}
.label_payment {
  font-size: 14px;
  font-weight: 600;
}
.form-control,
textarea {
  background-color: rgb(238 238 243 / 58%);
  border: none;
}
.input_point {
  width: 17.7em;
}
.text-navy {
  color: #6c5935;
}
.specificationName {
  color: #4d525e;
}
.info_specification {
  font-size: 13px;
  color: #4d525e;
}
.modal .form-control {
  height: 100%;
}
.furnitureName {
  height: 54px;
  overflow: hidden;
}
.image_product {
  background: linear-gradient(
    to bottom,
    rgba(200, 149, 81, 0.05),
    rgba(200, 149, 81, 0.15)
  );
}
</style>
