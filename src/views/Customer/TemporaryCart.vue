<template>
  <div class="bg-neutral-100 text-slate-700">
    <div class="pt-36 px-28">
      <!-- 
      <div class="bg-white">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-neutral-100 text-xs">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">All Product</a></li>
            <li class="breadcrumb-item active" aria-current="page">Sofa</li>
          </ol>
        </nav>
      </div> -->
      <div class="nav pb-3 mb-2">
        <nav aria-label="breadcrumb">
          <ol class="flex bg-none text-xs max-sm:ml-3">
            <li class="breadcrumb-item">
              <router-link to="customerIndex">Home </router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="#">All Product</router-link>
            </li>
          </ol>
        </nav>
      </div>
      <div class="absolute right-0">
        <alert-Error v-if="isAlertError">
          <template v-slot:message>{{ messageError }}</template></alert-Error
        >
        <alert-success v-if="isAlertSuccess">
          <template v-slot:message>{{ messageSuccess }}</template>
        </alert-success>
      </div>
      <h1 class="font-semibold pb-3 text-lg ml-1">Shopping Cart</h1>
      <div class="grid grid-cols-7 gap-x-7">
        <div class="col-span-5 cart">
          <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
              <div class="col">
                <div class="ibox">
                  <div class="ibox-title">
                    <span class="pull-right text-red-600"
                      >(<strong>{{ cart.length }}</strong
                      >) products</span
                    >
                    <h5 class="font-medium py-2">All furniture in your cart</h5>
                  </div>
                  <div v-if="cart.length">
                    <div
                      class="ibox-content"
                      v-for="furniture in cart"
                      :key="furniture.furnitureSpecificationId"
                    >
                      <div class="table-responsive">
                        <table class="table shoping-cart-table">
                          <tbody>
                            <tr>
                              <td>
                                <div class="mt-14">
                                  <input
                                    type="checkbox"
                                    id="checkbox"
                                    v-model="furniture.isSelected"
                                    @change="handleCartId(furniture)"
                                  />
                                </div>
                              </td>
                              <td width="90">
                                <div class="cart-product-imitation mt-4">
                                  <img
                                    src="@/assets/images/category/shelves_tv/shelves_11.png"
                                    alt=""
                                  />
                                  <!-- <div v-for="im in furniture.images" :key="im">
                                    <img
                                      :src="im.path"
                                      alt="furniture"
                                      class="img-fluid rounded-3"
                                      style="width: 65px"
                                    />
                                  </div> -->
                                </div>
                              </td>
                              <td class="desc">
                                <h3 class="font-medium">
                                  <a href="#" class="text-navy font-bold">
                                    {{ furniture.furnitureName }}
                                  </a>
                                </h3>

                                <dl
                                  class="flex flex-cols-2 small m-b-none py-2"
                                >
                                  <dt class="pr-2 specificationName">
                                    Specification Name:
                                  </dt>
                                  <dd class="font-medium text-gray-700">
                                    {{ furniture.furnitureSpecificationName }}
                                  </dd>
                                </dl>
                                <div
                                  class="flex gap-x-3 text-sm info_specification font-medium"
                                >
                                  <label>Price:</label>
                                  <span>${{ furniture.unitPrice }}</span>
                                </div>
                                <div
                                  class="flex gap-x-3 text-sm info_specification font-medium"
                                >
                                  <label>Quantity:</label>
                                  <span>{{ furniture.quantity }}</span>
                                </div>
                                <div class="flex flex-col-2 gap-x-6">
                                  <div
                                    class="text-sm font-medium info_specification"
                                  >
                                    <i class="fa-regular fa-heart"></i> Add Wish
                                    List
                                  </div>
                                  <div
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#exampleModalLong"
                                    class="cursor-pointer text-sm font-medium info_specification"
                                    @click="opentModal('remove')"
                                  >
                                    <i class="fa fa-trash"></i>
                                    Remove item
                                  </div>
                                </div>
                              </td>

                              <!-- <td width="80" class="py-4 flex gap-x-2">
                                <label class="font-medium">Quantity</label>
                                <span>{{ furniture.quantity }}</span>
                              </td> -->
                              <td
                                class="mt-14 flex gap-x-2 w-40 absolute right-14 text-sm"
                              >
                                <span class="font-medium">Total Cost:</span>
                                <span class="font-bold text-red-600"
                                  >${{ furniture.cost }}</span
                                >
                              </td>
                            </tr>
                            <modal
                              v-if="modalType == 'remove'"
                              @close="closeModal"
                              data-target="#myModal"
                            >
                              <template v-slot:title>
                                <div
                                  class="flex items-center text-lg font-semibold"
                                >
                                  Delete
                                </div>
                              </template>
                              <template v-slot:body>
                                <p class="text-base py-3">
                                  Are you sure detete
                                  <b>
                                    {{
                                      furniture.furnitureSpecificationName
                                    }}</b
                                  >?
                                </p>
                              </template>
                              <template v-slot:footer>
                                <div class="bg-red-900 rounded-md">
                                  <span
                                    type="button"
                                    class="btn text-white"
                                    data-dismiss="modal"
                                    @click="removeCart(furniture)"
                                  >
                                    Delete
                                  </span>
                                </div>
                              </template>
                            </modal>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div class="summary">
            <div>
              <h5 class="font-semibold text-base">Summary</h5>
            </div>
            <hr class="bg-slate-50 mt-6" />
            <div class="row pt-4">
              <div class="col font-medium text-sm" style="padding-left: 0">
                All Furniture
              </div>
              <div class="col font-medium text-right">
                {{ cartIdList.length }}
              </div>
            </div>
            <div class="mt-2">
              <p class="font-medium text-sm">Shipping</p>
              <img src="@/assets/images/freeship.png" alt="freeship" />
            </div>
            <div
              class="row"
              style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0"
            >
              <div class="col font-semibold mt-3">TOTAL PRICE</div>

              <div class="col font-medium text-right text-sm mt-3">
                ${{ order.totalCost }}
              </div>
            </div>
            <button
              data-toggle="modal"
              data-target="#exampleModalLong"
              data-backdrop="false"
              @click="HandleCheckout"
              class="ml-2 my-4 text-center px-28 py-2 text-white hover:ring-offset-2 hover:ring-2 bg-slate-600 text-sm rounded-md transition duration-700 ease-in-out font-medium"
            >
              Check Out
            </button>

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
                  <div class="bg-white rounded-md px-3 py-2">
                    <span class="text-red-600 font-medium text-sm"
                      ><i class="fa-solid fa-location-dot"></i> Address</span
                    >
                    <br />
                    <div class="py-2 flex gap-x-4">
                      <span v-if="!adChange" class="font-semibold text-sm"
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
                        <div
                          class="card-body"
                          v-for="fur in order.items"
                          :key="fur.furnitureId"
                        >
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style="width: 65px"
                                />
                                <!-- <div v-for="im in fur.images" :key="im">
                                  <img
                                    :src="im.path"
                                    alt="furniture"
                                    class="img-fluid rounded-3"
                                    style="width: 65px"
                                  />
                                </div> -->
                              </div>
                              <div class="ms-3">
                                <h5>{{ fur.furnitureSpecificationName }}</h5>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style="width: 50px">
                                <h5 class="fw-normal mb-0">
                                  {{ fur.quantity }}
                                </h5>
                              </div>
                              <div style="width: 50px">
                                <h5 class="mb-0">{{ fur.cost }}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card bg-white rounded-md px-3 py-2 my-3 mx-3">
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
                      />
                      <span class="input-group-text">
                        <i
                          class="bi bi-currency-dollar text-yellow-500 text-sm"
                        ></i
                      ></span>
                      <span class="input-group-text">{{ info.point }}</span>
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

                    <div
                      class="bg-white grid grid-cols-6 gap-2 rounded-xl text-sm pb-3"
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
                <div class="d-flex justify-content-between mt-7 px-4">
                  <p class="font-semibold text-base">Total Cost</p>
                  <p class="font-bold text-base text-red-600">
                    ${{ order.totalCost }}
                  </p>
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
                      <span class="span_address font-medium list-decimal"
                        >{{ ad.street }} {{ ad.ward }} {{ ad.district }}
                        {{ ad.provine }}</span
                      >
                    </div>
                    <div
                      v-if="ad.addressType === 'DEFAULT'"
                      class="span_address"
                    >
                      <div
                        class="border-solid border-2 border-red-600 rounded-full"
                      >
                        <span class="px-2 py-1 font-medium text-red-600 text-xs"
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
                  class="px-2 py-1 text-white hover:ring-offset-2 hover:ring-2 bg-red-600 hover:ring-red-200 text-sm rounded-md transition duration-700 ease-in-out font-medium"
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
                  <label class="col-lg-4 col-form-label fw-medium">Ward</label>
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
                    {{ addressModal.district }} {{ addressModal.provine }} ?</b
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
          <div class="ibox mt-3 leading-8">
            <div class="ibox-title">
              <h5>Support</h5>
            </div>
            <div class="ibox-content text-center">
              <h3><i class="fa fa-phone"></i> 0398677620</h3>
              <span class="small">
                Please contact with us if you have any questions. We are
                avalible 24h.
              </span>
            </div>
          </div>
          <div class="pt-4">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="@/assets/images/advertisement/customize.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/tips/4.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/images/tips/1.png"
                    class="d-block w-100"
                    alt="..."
                  />
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
</template>
<script>
import axios from "axios";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import modal from "@/components/ModalPage.vue";
export default {
  components: {
    modal,
    alertError,
    alertSuccess,
  },
  data() {
    return {
      cart: [],
      address: [],
      info: {},
      total: "",
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
      isShow: false,
      FNameModal: "",
      FurnitureIdModal: "",
      furnitureOrder: [],
      order: {},
      modalType: "",
      isCartId: "",
      cartIdList: [],
      addressModal: {},
      defaultAddress: {},
      addressId: null,
      adChange: {},
    };
  },
  created() {
    this.getCart();
    this.getInfor();
    this.getAddress();
    this.getInfor();
    this.getAddress();
  },
  methods: {
    async getCart() {
      try {
        const response = await axios.get("customer/cart");
        this.cart = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAddress() {
      try {
        const response = await axios.get("user/customer-infor/address");
        this.address = response.data;
      } catch (error) {
        console.error(error);
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
    totalPrice(furniture) {
      const price = furniture.cost * furniture.quantity;
      this.total = price;
    },
    handleCartId(furniture) {
      if (furniture.isSelected) {
        this.furnitureOrder.push(furniture.furnitureId);
        this.cartIdList.push(furniture.cartDetailId);
      } else {
        this.furnitureOrder.splice(furniture);
        this.cartIdList.splice(furniture);
      }
      // console.log(this.furnitureOrder);
      console.log(this.cartIdList);
    },
    opentModal(type, ad) {
      this.modalType = type;
      this.addressModal = ad;
    },
    async HandleCheckout() {
      this.opentModal("order");
      this.cartId = "";
      for (let i = 0; i < this.cartIdList.length; i++) {
        if (i === this.cartIdList.length) {
          this.cartId = this.cartId.concat(`cartIdList=${this.cartIdList[i]}`);
        } else {
          this.cartId = this.cartId.concat(`cartIdList=${this.cartIdList[i]}&`);
        }
      }
      try {
        const response = await axios.get(
          `customer/checkout-via-cart?${this.cartId}`
        );
        if (response.status == 200) {
          this.order = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async removeCart(furniture) {
      try {
        const response = await axios.delete(
          "customer/cart/remove/" + furniture.furnitureSpecificationId
        );
        if (response.status === 200) {
          // this.isShow = false;
          this.isAlertSuccess = true;
          this.messageSuccess = "Delete successfull";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getCart();
        }
      } catch (error) {
        this.modalType = null;
        this.isAlertError = true;
        this.messageError = "Delete Error";
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    closeModal() {
      this.modalType = null;
    },
    changeAddress(ad) {
      this.addressId = ad.id;
      this.adChange = ad;
    },
    confirmChangeAddress() {
      this.opentModal("order");
    },
    async HandleOrder(order) {
      //Chang idAddress if have change
      const id = this.addressId || order.deliveryAddressId;
      const itemsArray = order.items.map((item) => ({
        itemId: item.furnitureSpecificationId,
        quantity: item.quantity,
      }));
      try {
        const response = await axios.post("customer/order", {
          addressId: id,
          paymentId: this.paymentId,
          usedPoint: this.userpoint,
          note: this.note,
          items: itemsArray,
        });
        if (response.status === 200) {
          if (
            response.data !== null &&
            response.data !== "Order successfully"
          ) {
            this.paymentOline = response.data;
            window.location.href = this.paymentOline;
          }
          for (let i = 0; i < order.items.length; i++) {
            this.removeCart(order.items[i]);
          }
        }
      } catch (error) {
        console.error(error);
      }
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
};
</script>
<style scoped>
body {
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
}

.summary {
  background-color: white;
  border-radius: 8px;
  padding: 4vh;
  color: rgb(65, 65, 65);
}
@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}
.summary .col-2 {
  padding: 0;
}
.summary .col-10 {
  padding: 0;
}
.row {
  margin: 0;
}
.title b {
  font-size: 1.5rem;
}
.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2,
.col {
  padding: 0 1vh;
}
a {
  padding: 0 1vh;
}
.close {
  margin-left: auto;
  font-size: 0.7rem;
}
.summary {
  font-size: 13px;
}
.back-to-shop {
  margin-top: 2.5rem;
}
h5 {
  font-weight: 600;
  font-size: 14px;
}
hr {
  margin-top: 1.25rem;
}
form {
  padding: 2vh 0;
}
select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(238 238 243 / 58%);
  border: none;
}
input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.btn {
  background-color: rgb(57, 55, 55);
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 5px;
}
.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
}
.btn:hover {
  color: white;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}

/* new */
h3 {
  font-size: 17px;
  margin-left: -6px;
}
.text-navy {
  color: #d19215;
}
.cart-product-imitation {
  text-align: center;
  height: 80px;
  width: 80px;
  background-color: #f8f8f9;
  margin-right: 12px;
}
.product-imitation.xl {
  padding: 120px 0;
}
.product-desc {
  padding: 20px;
  position: relative;
}
.ecommerce .tag-list {
  padding: 0;
}
.ecommerce .fa-star {
  color: #d1dade;
}
.ecommerce .fa-star.active {
  color: #f8ac59;
}
.ecommerce .note-editor {
  border: 1px solid #e7eaec;
}
table.shoping-cart-table {
  margin-bottom: 0;
}
table.shoping-cart-table tr td {
  border: none;
}
table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
  text-align: left;
}
.ibox {
  clear: both;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
}
.ibox.collapsed .ibox-content {
  display: none;
}
.ibox:after,
.ibox:before {
  display: table;
}
.ibox-title {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background-color: #ffffff;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 3px 0 0;
  color: inherit;
  margin-bottom: 0;
  padding: 14px 15px 7px;
  min-height: 48px;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
}
.ibox-footer {
  color: inherit;
  border-top: 1px solid #e7eaec;
  font-size: 90%;
  background: #ffffff;
  padding: 10px 15px;
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
.form-control.point_input {
  margin-top: -10px;
  height: 28px;
  width: 65px;
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
</style>
