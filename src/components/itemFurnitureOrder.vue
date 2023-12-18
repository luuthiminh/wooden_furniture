<template>
  <div>
    <div v-if="orders.length">
      <div clas="product" v-for="or in orders" :key="or.orderId">
        <div class="ibox-content mt-3 rounded-md shadow-sm">
          <div class="text-sm flex flex-cols-2">
            <div class="font-medium text-gray-600">
              ID Order: {{ or.orderId }}
            </div>
            <div class="absolute right-36">
              <div v-if="or.status === 'Pending'">
                <div
                  v-if="or.status === 'Canceled'"
                  class="ring-1 ring-red-600 px-2 py-1 text-red-600 font-semibold rounded-md text-sm"
                >
                  Cancelled
                </div>
                <div v-if="or.status !== 'Canceled'" class="flex gap-x-3">
                  <div
                    class="ring-1 ring-yellow-500 px-2 py-1 text-yellow-500 font-semibold rounded-md text-sm"
                  >
                    Pending
                  </div>
                  <div
                    @click="HandleCancelOrder(or.orderId)"
                    class="bg-red-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                  >
                    Cancel
                  </div>
                  <div
                    v-if="
                      or.isCustomOrder === false &&
                      or.isPaid === false &&
                      or.paymentMethod !== 'CASH'
                    "
                    @click="HandleReOrder(or.orderId)"
                    class="bg-yellow-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                  >
                    ReOrder
                  </div>
                  <div
                    v-if="or.isCustomOrder === true"
                    @click="HandleReOrder(or.orderId)"
                    class="bg-yellow-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                  >
                    ReOrder
                  </div>
                </div>
              </div>
              <div
                v-if="or.status === 'Preparing'"
                class="ring-1 ring-emerald-600 px-2 py-1 text-emerald-600 font-semibold rounded-md text-sm"
              >
                Preparing
              </div>
              <div
                v-if="or.status === 'Delivering'"
                class="ring-1 ring-amber-600 px-2 py-1 text-amber-600 font-semibold rounded-md text-sm"
              >
                Delivering
              </div>
              <div v-if="or.status === 'Delivered'" class="flex gap-x-3">
                <div
                  class="ring-1 ring-lime-700 px-2 py-1 text-lime-700 font-semibold rounded-md text-sm"
                >
                  Delivered
                </div>
                <div
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-backdrop="false"
                  @click="opentModalOrder('guarantee', or)"
                  class="bg-red-700 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                >
                  Guarantee
                </div>
                <div
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-backdrop="false"
                  @click="opentModalOrder('feedback', or)"
                  class="bg-sky-600 px-2 py-1 text-white rounded-md text-sm cursor-pointer"
                >
                  Feedback
                </div>
              </div>
            </div>
            <modal
              v-if="modalType == 'guarantee'"
              @close="closeModal"
              data-target="#myModal"
            >
              <template v-slot:title>
                <h5
                  class="modal-title font-semibold text-lg text-yellow-950"
                  id="exampleModalLabel"
                >
                  Add Guarantee
                </h5>
              </template>
              <template v-slot:body>
                <div class="w-full items-center gap-x-6 pb-3">
                  <label for="exampleFormControlInput1 font-semibold"
                    >Picture</label
                  >
                  <input
                    id="picture"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    :maxFileSize="1000000"
                    ref="file"
                    multiple
                    @change="onFile"
                    class="bg-slate-100 h-10 w-full rounded-md border border-input px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                  />
                  <div class="image_upload flex gap-x-4">
                    <div v-for="url in arrayUrl" :key="url" class="flex">
                      <img
                        class="object-contain h-48 w-96"
                        v-if="url"
                        :src="url"
                        alt="Avatar"
                      />
                      <label
                        @click="HandleRemoveImage(url)"
                        class="bi bi-x cursor-pointer"
                      ></label>
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <label class="col-form-label fw-medium"
                    >Warranty Reasons
                  </label>
                  <div class="">
                    <input
                      v-model="reason"
                      type="text"
                      class="form-control border-none bg-neutral-100"
                      id="firstname"
                      aria-describedby="firstnameHelp"
                      required
                    />
                  </div>
                </div>
              </template>
              <template v-slot:footer
                ><div class="bg-yellow-900 rounded-md cursor-pointer">
                  <span
                    type="button"
                    class="btn text-white"
                    data-dismiss="modal"
                    @click.prevent="CreateGuarantee"
                  >
                    Create
                  </span>
                </div></template
              >
            </modal>
            <modal
              v-if="modalType == 'feedback'"
              @close="closeModal"
              data-target="#myModal"
            >
              <template v-slot:title>
                <h5
                  class="modal-title font-semibold text-base"
                  id="exampleModalLabel"
                >
                  Feedback
                </h5>
              </template>
              <template v-slot:body>
                <div>
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Furniture</label
                  >
                  <select
                    v-if="orderModel.furniture.length"
                    v-model="furSpeFeedback"
                    class="form-select text-sm"
                    aria-label="Default select example"
                  >
                    <option selected>Choose Label</option>
                    <option
                      v-for="furSpe in orderModel.furniture"
                      :key="furSpe.furnitureSpecificationId"
                      :value="furSpe.furnitureSpecificationId"
                    >
                      {{ furSpe.furnitureSpecificationname }}
                    </option>
                  </select>
                </div>
                <div class="mt-3">
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Image</label
                  >
                  <div v-if="arrayUrl.length" class="flex gap-x-2">
                    <div
                      v-for="url in arrayUrl"
                      :key="url"
                      class="flex gap-x-2"
                    >
                      <img
                        class="object-contain h-48 w-96"
                        v-if="url"
                        :src="url"
                        alt="Avatar"
                      />
                      <label
                        @click="HandleRemoveImage(url)"
                        class="bi bi-x cursor-pointer"
                      ></label>
                    </div>
                  </div>
                  <div v-else class="ml-24">
                    <label class="custum-file-upload" for="file">
                      <div class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill=""
                          viewBox="0 0 24 24"
                        >
                          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                          <g
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            id="SVGRepo_tracerCarrier"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fill=""
                              d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div class="text">
                        <span>Click to upload image</span>
                      </div>
                      <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        :maxFileSize="1000000"
                        ref="file"
                        multiple
                        @change="onFile"
                        id="file"
                      />
                    </label>
                  </div>
                </div>
                <div
                  class="bg-white grid grid-cols-6 gap-2 rounded-xl p-2 text-sm"
                >
                  <label class="font-medium text-sm">Content</label>
                  <textarea
                    v-model="content"
                    placeholder="Your feedback..."
                    class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                  ></textarea>
                </div>
                <div class="bg-white flex gap-2 rounded-xl p-2 text-sm mt-3">
                  <label class="font-medium text-sm">Vote Star</label>
                  <div class="rating">
                    <input
                      v-model="star"
                      value="5"
                      name="rate"
                      id="star5"
                      type="radio"
                      required
                    />
                    <label title="text" for="star5"></label>
                    <input
                      value="4"
                      name="rate"
                      v-model="star"
                      id="star4"
                      type="radio"
                      required
                    />
                    <label title="text" for="star4"></label>
                    <input
                      value="3"
                      name="rate"
                      v-model="star"
                      id="star3"
                      type="radio"
                      checked=""
                      required
                    />
                    <label title="text" for="star3"></label>
                    <input
                      value="2"
                      name="rate"
                      v-model="star"
                      id="star2"
                      type="radio"
                      required
                    />
                    <label title="text" for="star2"></label>
                    <input
                      value="1"
                      name="rate"
                      v-model="star"
                      id="star1"
                      type="radio"
                      required
                    />
                    <label title="text" for="star1"></label>
                  </div>
                </div>
                <div class="ml-2 py-3">
                  <label class="font-medium">
                    <input
                      v-model="anonymous"
                      type="checkbox"
                      class="accent-pink-500"
                    />
                    Anonymous
                  </label>
                </div>
              </template>
              <template v-slot:footer
                ><div class="bg-yellow-900 rounded-md cursor-pointer">
                  <span
                    type="button"
                    class="btn text-white"
                    data-dismiss="modal"
                    @click.prevent="HandleFeedback"
                  >
                    Feedback
                  </span>
                </div></template
              >
            </modal>
          </div>
          <div class="table-responsive">
            <table class="table shoping-cart-table my-4">
              <tbody v-for="fur in or.furniture" :key="fur.furnitureId">
                <tr>
                  <td width="90">
                    <div class="cart-product-imitation">
                      <img
                        src="@/assets/images/category/shelves_tv/shelves_11.png"
                        alt=""
                      />
                    </div>
                  </td>
                  <td class="desc">
                    <h3 class="mb-2 break-all mt-3">
                      <span class="text-navy font-bold text-sm">
                        {{ fur.furnitureName }}
                      </span>
                    </h3>
                    <h3>
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder text-sm">
                          Specification name:
                        </span>
                        <span class="font-medium info_customizeOrder text-sm">
                          {{ fur.furnitureSpecificationname }}
                        </span>
                      </div>
                    </h3>
                  </td>
                  <td width="65" class="font-semibold text-center">
                    <div class="flex gap-x-4 mt-3 text-sm">
                      <label
                        class="quantity font-meidum info_customizeOrder mt-1"
                        >Quantity:</label
                      >
                      <span class="font-medium info_customizeOrder mr-10 mt-1"
                        >x{{ fur.quantity }}</span
                      >
                    </div>
                  </td>
                  <td width="65" class="font-semibold text-center text-sm">
                    <div class="flex gap-x-4 mt-3 mr-2">
                      <label
                        class="quantity font-meidum info_customizeOrder mt-1"
                        >Cost:</label
                      >
                      <h4 class="font-medium text-red-500 mt-2">
                        ${{ fur.cost }}
                      </h4>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex">
              <div class="m-t-sm my-2 ml-2">
                <div
                  class="flex gap-x-2"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-backdrop="false"
                  @click="opentModalOrder('detail', or)"
                >
                  <i class="fa-solid fa-circle-info text-sm text-gray-600"></i>
                  <span class="font-medium text-sm cursor-pointer text-gray-900"
                    >Detail</span
                  >
                </div>
                <modal
                  v-if="modalType == 'detail'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h5
                      class="modal-title font-semibold"
                      id="exampleModalLabel"
                    >
                      Detail Order Transport
                    </h5>
                  </template>
                  <template v-slot:body>
                    <div class="invoice mt-2">
                      <span class="font-weight-bold d-block">Infromation</span>
                      <div class="py-2">
                        <span class="d-inlineblock pr-3 text-red-500 text-sm"
                          ><i class="fa-solid fa-location-dot pr-1"></i> Shiping
                          Address:</span
                        >
                        <span>12 Me Tri- Ha Noi</span>
                      </div>
                      <div
                        class="payment border-top mt-3 mb-3 border-bottom table-responsive"
                      >
                        <table class="table table-borderless">
                          <tbody>
                            <tr>
                              <td class="text-sm">
                                <div class="py-2">
                                  <span class="mr-3">Order Id</span>
                                  <span>{{ orderModel.orderId }}</span>
                                </div>
                              </td>
                              <td class="text-sm">
                                <div class="py-2">
                                  <span class="d-block text-muted"
                                    >Payment</span
                                  >
                                  <span
                                    ><img
                                      class="w-1/12"
                                      v-if="
                                        orderModel.paymentMethod === 'VNPAYQR'
                                      "
                                      src="@/assets/images/payment_method/bank.png"
                                      alt="image"
                                    />
                                    <img
                                      class="w-1/12"
                                      v-if="
                                        orderModel.paymentMethod === 'VNPAY'
                                      "
                                      src="@/assets/images/payment_method/vnpay.png"
                                      alt="image"
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="product border-bottom table-responsive">
                        <table class="table table-borderless">
                          <tbody
                            v-for="fur in orderModel.furniture"
                            :key="fur.furnitureId"
                          >
                            <tr>
                              <td width="20%">
                                <img
                                  src="@/assets/images/category/shelves_tv/shelves_11.png"
                                  width="90"
                                />
                              </td>

                              <td width="60%">
                                <span class="font-weight-bold text-sm">
                                  {{ fur.furnitureSpecificationname }}</span
                                >
                                <div class="product-qty">
                                  <span class="d-block"
                                    >Quantity:{{ fur.quantity }}</span
                                  >
                                </div>
                              </td>
                              <td width="20%">
                                <div class="text-right">
                                  <span class="font-weight-bold"
                                    >${{ fur.cost }}</span
                                  >
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="row d-flex justify-content-end">
                        <div class="col-md-5">
                          <table class="table table-borderless">
                            <tbody class="totals">
                              <tr>
                                <td>
                                  <div class="text-left">
                                    <span class="text-muted">Shipping Fee</span>
                                  </div>
                                </td>
                              </tr>

                              <tr class="border-top border-bottom">
                                <td>
                                  <div class="text-left">
                                    <span class="font-weight-bold"
                                      >Subtotal</span
                                    >
                                  </div>
                                </td>
                                <td>
                                  <div class="text-right">
                                    <span class="font-weight-bold"
                                      >${{ orderModel.totalCost }}</span
                                    >
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p class="font-weight-bold mb-0">
                        Thanks for shopping with us!
                      </p>
                    </div>
                  </template>
                  <template v-slot:footer> </template>
                </modal>
              </div>

              <div class="flex gap-x-4 absolute right-40">
                <span class="total_cost_order font-semibold mt-2 text-sm"
                  >Total Cost:
                </span>
                <span class="font-bold text-base text-red-500 mt-2"
                  >${{ or.totalCost }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import modal from "@/components/ModalPage.vue";
import axios from "axios";
export default {
  name: "itemOrder",
  components: {
    modal,
  },
  props: {
    orders: Array,
  },
  data() {
    return {
      modalType: "",
      orderModel: {},
      arrayFile: [],
      url: {},
      arrayUrl: [],
    };
  },
  methods: {
    opentModalOrder(type, or) {
      this.modalType = type;
      this.customizeModal = or;
      this.orderModel = or;
    },
    closeModal() {
      this.modalType = null;
      this.isShowModalOtp = false;
    },
    async HandleReOrder(id) {
      try {
        const response = await axios.post("customer/repayment/" + id);
        window.location.href = response.data;
      } catch (error) {
        console.error(error);
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
    async CreateGuarantee() {
      console.log("Đã cho image vào array");
      const formData = new FormData();
      formData.append("orderId", this.orderModel.orderId);
      formData.append("warrantyReasons", this.reason);
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("uploadFiles", this.arrayFile[i]);
        }
      }
      console.log("Đã sua cho ban minh vào array");
      try {
        const response = await axios.post(
          "customer/warranties/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          alert("Create guarantee success!");
        }
        console.log("This arrayFile", this.arrayFile);
      } catch (error) {
        console.log("This arrayFile", this.file);
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
    async HandleFeedback() {
      const formData = new FormData();
      formData.append("orderId", this.orderModel.orderId);
      formData.append("furnitureSpecificationId", this.furSpeFeedback);
      formData.append("content", this.content);
      formData.append("voteStar", this.star);
      formData.append("anonymous", this.anonymous);
      if (this.arrayFile.length > 0) {
        for (var i = 0; i < this.arrayFile.length > 0; i++) {
          formData.append("files", this.arrayFile[i]);
        }
      }
      console.log(this.arrayFile);
      try {
        const response = await axios.post(
          "customer/create-feedback",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          alert("Create guarantee success!");
        }
      } catch (error) {
        console.log("This arrayFile", this.arrayFile);
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
  },
};
</script>
<style scoped>
.tab-content.col-span-5
  .tab-pane.order::-webkit-scrollbar-track
  .tab-content.col-span-5
  .tab-pane.wishlist::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.tab-content.col-span-5
  .tab-pane.order::-webkit-scrollbar
  .tab-content.col-span-5
  .wishlist::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.tab-content.col-span-5
  .tab-pane.order::-webkit-scrollbar-thumb
  .tab-content.col-span-5
  .wishlist::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 16px 25px 1px 25px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
}
.text-navy {
  font-size: 15px;
  color: #6c5935;
}
.info_customizeOrder {
  font-size: 14px;
  color: #4d525e;
}
.card {
  border: none;
}
.logo {
  background-color: #eeeeeea8;
}
.totals tr td {
  font-size: 13px;
}
.footer {
  background-color: #eeeeeea8;
}
.footer span {
  font-size: 12px;
}
.product-qty span {
  font-size: 12px;
  color: #c5c0c0;
}
.moon .tab-content.col-span-5 {
  border: 1px solid rgb(240 239 239);
}
.table-responsive {
  overflow-x: auto;
  overflow-y: hidden;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 16px 25px 1px 25px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0;
  border: 1px solid #6b430c40;
}

/* start */
/* voteStar */
.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 24px;
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

/* Updload image */
.custum-file-upload {
  height: 180px;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: rgba(75, 85, 99, 1);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
  display: none;
}
.nav-order .nav.nav-pills.custom li {
  margin-left: 1.5em;
}
.form-select {
  background-color: #cecfd442;
}
#customize .form-control,
#customize .form-select {
  background-color: rgb(238 238 243 / 58%);
}
</style>
