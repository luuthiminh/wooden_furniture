<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>

          <li class="breadcrumb-item active" aria-current="page">Order</li>
        </ol>
      </nav>
    </div>
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">Management Request Order</h1>
      <div class="flex gap-x-40 pt-10">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="gap-x-2 font-semibold">Total Orders:</p>
          {{ requestOrders.length }}
        </div>
      </div>
      <div class="absolute right-0">
        <alert-Error v-if="isAlertError">
          <template v-slot:message>{{ messageError }}</template></alert-Error
        >
        <alert-success v-if="isAlertSuccess">
          <template v-slot:message>{{ messageSuccess }}</template>
        </alert-success>
      </div>
      <div class="content_table scroll">
        <div class="pt-10">
          <table
            v-if="requestOrders.length"
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Delivery Address</th>
                <th scope="col">Status</th>
                <th scope="col">IsPaid</th>
                <th scope="col">Furniture Order</th>
                <th scope="col">Customize Furnitrue Order</th>
                <th scope="col">OrderDate</th>
                <th scope="col">TotalCost</th>
                <th scope="col">Note</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="order in requestOrders" :key="order.orderId">
              <tr class="text-sm">
                <th scope="row">{{ order.orderId }}</th>
                <td>{{ order.customerName }}</td>
                <td>{{ order.paymentMethod }}</td>
                <td>{{ order.deliveryAddress }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.isPaid }}</td>
                <td>
                  <div v-for="or in order.furnitureOrderItems" :key="or">
                    {{ or.furnitureSpecificationId }}
                    <br />
                    <div class="pt-2">Quantity: {{ or.quantity }}</div>
                    <div class="pt-2">Cost: {{ or.cost }}</div>
                  </div>
                </td>
                <td>
                  {{ order.CustomizeFurnitureOrderItems }}
                </td>
                <td>{{ order.orderDate }}</td>
                <td>{{ order.totalCost }}</td>
                <td>{{ order.note }}</td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('changeStatus', order)"
                  >
                    <span class="button__text text-xs">Set Status</span>
                    <span class="button__icon bi bi-pencil text-white"></span>
                  </button>
                </td>
                <modal
                  v-if="modalType == 'changeStatus'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Change Status
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="col-form-label font-medium"
                        >Status</label
                      >
                      <select
                        v-model="status"
                        class="form-select text-sm"
                        aria-label="Default select example"
                        required
                      >
                        <option selected>Choose status</option>
                        <option value="Processing">Processing</option>
                        <option value="Canceled">Canceled</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Delivering">Delivering</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleStatus"
                      >
                        Set Status
                      </span>
                    </div>
                  </template>
                </modal>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { format } from "date-fns";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
export default {
  components: {
    modal,
    alertError,
    alertSuccess,
  },
  data() {
    return {
      modalType: null,
      requestOrders: [],
      namePostModal: null,
      idPostModal: null,
      isSuccess: false,
      file: "",
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
      orderId: null,
    };
  },
  created() {
    this.getAllOrders();
  },
  methods: {
    async getAllOrders() {
      try {
        const response = await axios.get("Assistant/customer-requests/orders");
        this.requestOrders = response.data;
        for (let i = 0; i < this.requestOrders.length; i++) {
          const date = new Date(this.requestOrders[i].orderDate);
          this.requestOrders[i].orderDate = format(date, "dd/MM/yyyy");
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type, order) {
      this.modalType = type;
      this.orderId = order.orderId;
    },
    async HandleStatus() {
      try {
        const response = await axios.put(
          "assistant/customer-requests/orders/" +
            this.orderId +
            "/change-status/?status=" +
            this.status
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Set order successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllOrders();
          console.log(this.orderId);
        }
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
tr {
  border-bottom: 1px solid #ededed;
}
.table {
  font-size: 0.9rem !important;
}
th {
  font-weight: 600;
}
td {
  padding-top: 0.7em;
  padding-bottom: 0.7em;
}

.search {
  --input-line: #cccccc;
  --input-text-color: #808080;
  --input-text-hover-color: transparent;
  --input-border-color: #808080;
  --input-border-hover-color: #999999;
  --border-radius: 5px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 20em;
}

.search-box {
  height: 35px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background: var(--input-bg-color);
  box-shadow: 0 0 2px rgb(0 0 0 / 26%);
  transition: var(--transition-cubic-bezier);
}

.search-box:hover {
  border-color: var(--input-border-hover-color);
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: -5px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: var(--input-line);
  background: var(--input-bg-color);
  border-right: 2px solid var(--input-border-color);
  outline: none;
}

.input::-webkit-input-placeholder {
  color: var(--input-text-color);
}

.input::-moz-input-placeholder {
  color: var(--input-text-color);
}

.input::-ms-input-placeholder {
  color: var(--input-text-color);
}

.input:focus::-webkit-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-moz-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-ms-input-placeholder {
  color: var(--input-text-hover-color);
}

/*Search button*/
.search-box-icon {
  width: 52px;
  height: 35px;
  position: absolute;
  top: -6px;
  right: -21px;
  background: transparent;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.search-box-icon:hover {
  background: var(--input-border-color);
}

.btn-icon-content {
  width: 52px;
  height: 35px;
  top: -6px;
  right: -21px;
  border: none;
  cursor: pointer;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.btn-icon-content:hover {
  opacity: 0.8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 7px;
  right: 15px;
}
.form-control,
.form-select {
  border: none;
  background-color: #dde4e794;
}
table {
  overflow: scroll;
  width: 115em;
}
.button_edit {
  width: 100px;
}
.button_edit .button__icon {
  transform: translateX(74px);
}
</style>
