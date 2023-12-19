<template>
  <div
    role="tabpanel"
    class="tab-pane active"
    id="all"
    v-if="customizeOders.length"
  >
    <div class="">
      <div
        clas="product"
        v-for="or in customizeOders"
        :key="or.customizeFurnitureId"
      >
        <div class="ibox-content mt-3 rounded-md shadow-sm">
          <div class="text-sm flex flex-cols-2">
            <div
              class="font-medium text-slate-600 text-xs mt-1"
              v-if="or.result.status === 'Accepted'"
            >
              This order has been confirmed by the shop
            </div>
            <div
              class="font-medium text-slate-600 text-xs mt-1"
              v-if="or.result.status === 'Pending'"
            >
              This order is under review by the store
            </div>
            <div class="absolute right-36 flex gap-x-4">
              <div class="order_status">
                <div
                  v-if="or.result.status === 'Accepted'"
                  class="ring-1 ring-lime-700 px-2 py-1 text-lime-700 font-semibold rounded-md text-sm"
                >
                  Accepted
                </div>
                <div
                  v-if="or.status === 'Delivering'"
                  class="ring-1 ring-red-600 px-2 py-1 text-red-600 font-semibold rounded-md text-sm"
                >
                  Rejected
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-2 h-px text-slate-300" />
          <div class="table-responsive">
            <table class="table shoping-cart-table">
              <tbody>
                <tr>
                  <td v-if="or.result.status === 'Accepted'">
                    <div class="mt-14">
                      <input
                        type="checkbox"
                        id="checkbox"
                        v-model="or.isSelected"
                        @change="handleCartId(or)"
                      />
                    </div>
                  </td>
                  <td width="90">
                    <div class="cart-product-imitation mt-3">
                      <div v-for="img in or.images" :key="img">
                        <img :src="img.path" alt="" />
                      </div>
                      <div v-for="vid in or.videos" :key="vid">
                        <video controls="control" width="200" height="200">
                          <source :src="vid.path" type="video/mp4" />
                        </video>
                      </div>
                      <button
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        data-backdrop="false"
                        class="font-medium ring-1 ring-yellow-900 rounded-md px-2 text-xs py-1 mt-3"
                        @click="opentModalOrder('allImg', or)"
                      >
                        See More
                      </button>
                    </div>
                    <modal
                      v-if="modalType == 'allImg'"
                      @close="modalType == null"
                      data-target="#myModal"
                    >
                      <template v-slot:title>
                        <div class="flex items-center text-lg font-semibold">
                          All Image
                        </div>
                      </template>
                      <template v-slot:body>
                        <div v-for="im in customizeModal.images" :key="im">
                          <img :src="im.path" alt="images" />
                        </div>
                        <div v-for="vid in customizeModal.videos" :key="vid">
                          <video controls="control" width="200" height="200">
                            <source :src="vid.path" type="video/mp4" />
                          </video>
                        </div>
                      </template>
                    </modal>
                  </td>
                  <td class="desc">
                    <h3 class="mb-2 break-all">
                      <span class="text-yellow-800 font-bold">
                        {{ or.customizeFurnitureName }}
                      </span>
                    </h3>
                    <h3 class="pt-1">
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder">
                          Height:
                        </span>
                        <span class="font-medium info_customizeOrder">
                          {{ or.height }}m
                        </span>
                      </div>
                    </h3>
                    <h3 class="pt-1">
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder">
                          Width:
                        </span>
                        <span class="font-medium info_customizeOrder">
                          {{ or.width }}m
                        </span>
                      </div>
                    </h3>
                    <h3 class="pt-1">
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder">
                          Length:
                        </span>
                        <span class="font-medium info_customizeOrder">
                          {{ or.length }}m
                        </span>
                      </div>
                    </h3>

                    <h3 class="pt-1">
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder">
                          Desired Completion Date:
                        </span>
                        <span class="font-medium info_customizeOrder">
                          {{ or.desiredCompletionDate }}
                        </span>
                      </div>
                    </h3>
                  </td>
                  <td>
                    <h3>
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder">
                          Color:
                        </span>
                        <span class="font-medium info_customizeOrder">
                          {{ or.color }}
                        </span>
                      </div>
                    </h3>
                  </td>
                  <td>
                    <h3>
                      <div class="specificationname">
                        <span class="font-semibold info_customizeOrder">
                          Wood:
                        </span>
                        <span class="font-medium info_customizeOrder">
                          {{ or.wood }}
                        </span>
                      </div>
                    </h3>
                  </td>
                  <td width="65" class="font-semibold text-center">
                    <div class="flex">
                      <label
                        class="quantity font-meidum info_customizeOrder mr-1"
                        >Quantity:</label
                      >
                      <span class="font-medium info_customizeOrder text-sm"
                        >x{{ or.quantity }}</span
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr class="my-3 h-px text-slate-300" />
            <div class="flex">
              <div class="m-t-sm my-2 ml-2">
                <div
                  class="date_orderCustomize text-xs font-medium text-slate-600"
                >
                  Date: {{ or.creationDate }}
                </div>
              </div>
              <div
                class="flex gap-x-2 absolute right-40 mt-1 cursor-pointer"
                data-toggle="modal"
                data-target="#exampleModalLong"
                data-backdrop="false"
                @click="opentModalOrder('result', or)"
              >
                <i class="bi bi-check-square text-sm text-red-700"></i>
                <span class="font-medium text-sm text-red-700"
                  >Detailed Response</span
                >
              </div>
              <modal
                v-if="modalType == 'result'"
                @close="modalType == null"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <h5
                    class="modal-title font-semibold px-2"
                    id="exampleModalLabel"
                  >
                    Detailed Response
                  </h5>
                </template>
                <template v-slot:body>
                  <div class="px-2">
                    <div class="py-2">
                      <span
                        class="font-semibold mt-1 mr-2 text_customize detail_response"
                        >Reason:</span
                      >
                      <span
                        class="font-medium mb-0 text_customize mt-4 text-zinc-600"
                        >{{ customizeModal.result.reason }}</span
                      >
                    </div>
                    <div class="py-2">
                      <span
                        class="font-semibold mt-1 mr-2 text_customize detail_response"
                        >Expected Price:</span
                      >
                      <span class="font-medium text-red-600 text_customize"
                        >${{ customizeModal.result.expectedPrice }}</span
                      >
                    </div>
                    <div class="py-2">
                      <span
                        class="font-semibold mt-1 mr-2 text_customize detail_response"
                        >Actual Completion Date:</span
                      >
                      <span class="font-medium text_customize text-zinc-600">
                        {{ customizeModal.result.actualCompletionDate }}</span
                      >
                    </div>
                    <p class="font-weight-bold mb-0 text_customize mt-4">
                      Thanks for shopping with us!
                    </p>
                  </div>
                </template>
                <template v-slot:footer></template>
              </modal>
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
export default {
  name: "itemOrder",
  components: { modal },
  props: {
    customizeOders: Array,
  },
  data() {
    return {
      modalType: "",
      customizeFurnitureIdList: [],
      furnitureOrder: [],
    };
  },
  methods: {
    opentModalOrder(type, or) {
      this.modalType = type;
      this.customizeModal = or;
      this.orderModel = or;
    },
    handleCartId(or) {
      this.$store.commit("handleCartId", or);
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
.moon .side-bar.col-span-1,
.moon .tab-content.col-span-5 {
  border: 1px solid rgb(240 239 239);
}
h3 {
  font-size: 16px;
}
.text-navy {
  color: #6c5935;
}
.info_customizeOrder {
  font-size: 13px;
  color: #4d525e;
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
table.shoping-cart-table tr td:last-child {
  width: 80px;
}
/* modal */
.text_customize {
  font-size: 15px;
}
.detail_response {
  color: #4d525e;
}
.orderId {
  font-size: 12px;
}
.form-select.address {
  background-color: #e8eef387;
}
option {
  text-transform: capitalize;
}
#customize .form-control,
#customize .form-selected {
  background-color: rgb(238 238 243 / 58%);
}
</style>
