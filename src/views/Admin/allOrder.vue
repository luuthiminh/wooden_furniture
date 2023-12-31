<template>
  <header-admin :title="title" />
  <div v-if="orders.length">
    <div class="bg-white mb-2 rounded-xl mt-32">
      <div class="header pt-6 px-6">
        <div class="absolute right-0">
          <alert-Error v-if="isAlertError">
            <template v-slot:message>{{ messageError }}</template></alert-Error
          >
          <alert-success v-if="isAlertSuccess">
            <template v-slot:message>{{ messageSuccess }}</template>
          </alert-success>
        </div>
      </div>
      <div class="content_table pt-6 px-6 scroll">
        <div class="py-4">
          <table
            v-if="orders.length"
            class="table table-borderless text-yellow-950 font-medium"
          >
            <thead>
              <tr class="text-sm">
                <th scope="col">Order ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Address</th>
                <th scope="col">Point</th>
                <th scope="col">Note</th>
                <th scope="col">Status</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Date</th>
                <th scope="col">Furniture</th>
                <th scope="col">IsPaid</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="or in orders" :key="or.orderId">
                <td>{{ or.orderId }}</td>
                <td class="text-start">
                  <span class="font-semibold block">{{ or.customerName }}</span>
                </td>
                <td>{{ or.paymentMethod }}</td>
                <td>{{ or.deliveryAddress }}</td>
                <td>{{ or.userPoint }}</td>
                <td>{{ or.note }}</td>
                <td v-if="or.status === 'Pending'">
                  <button
                    class="bg-yellow-100 text-yellow-500 px-1 py-1 rounded-md"
                  >
                    Pending
                  </button>
                </td>

                <td v-if="or.status === 'Preparing'">
                  <button class="bg-sky-100 text-sky-500 px-1 py-1 rounded-md">
                    Preparing
                  </button>
                </td>
                <td v-if="or.status === 'Processing'">
                  <button
                    class="bg-teal-100 text-teal-500 px-1 py-1 rounded-md"
                  >
                    Processing
                  </button>
                </td>

                <td v-if="or.status === 'Delivering'">
                  <button
                    class="bg-orange-100 text-orange-500 px-1 py-1 rounded-md"
                  >
                    Delivering
                  </button>
                </td>

                <td v-if="or.status === 'Canceled'">
                  <button class="bg-red-100 text-red-500 px-1 py-1 rounded-md">
                    Canceled
                  </button>
                </td>
                <td v-if="or.status === 'Delivered'">
                  <button
                    class="bg-green-100 text-green-500 px-1 py-1 rounded-md"
                  >
                    Delivered
                  </button>
                </td>
                <td>{{ or.totalCost }}</td>
                <td>{{ or.orderDate }}</td>

                <td
                  class="text-sm"
                  v-if="!or.customizeFurnitureOrderItems.length"
                >
                  <div
                    v-for="fur in or.furnitureOrderItems"
                    :key="fur"
                    class="mb-3"
                  >
                    <span>
                      {{ fur.furnitureSpecificationId }}
                    </span>
                    <br />
                    <div class="pt-2">
                      <b class="text-gray-600">Quantity: </b>{{ fur.quantity }}
                    </div>
                    <div class="pt-2">
                      <b class="mr-2 text-gray-600">Cost:</b>
                      <span class="text-red-500">{{ fur.cost }} VND</span>
                    </div>
                  </div>
                </td>
                <td v-else class="text-sm">
                  <div
                    v-for="fur in or.customizeFurnitureOrderItems"
                    :key="fur"
                    class="mb-3"
                  >
                    <span>
                      {{ fur.customizeFunitureId }}
                    </span>
                  </div>
                </td>
                <td>{{ or.isPaid }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="text-sm font-medium mb-5">Total users: 5</p>
  </div>
  <div v-else class="loader"></div>
</template>
<script>
import axios from "axios";
import HeaderAdmin from "@/components/headerAdmin.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import { format } from "date-fns";
export default {
  components: {
    HeaderAdmin,
    alertError,
    alertSuccess,
  },
  data() {
    return {
      orders: [],
      furnitureModel: [],
      modalType: null,
      title: "All Orders",
    };
  },
  created() {
    this.getFurnitures();
  },
  methods: {
    async getFurnitures() {
      try {
        const response = await axios.get("shopOwner/customer-requests/orders");
        this.orders = response.data;
        for (let i = 0; i < this.orders.length; i++) {
          const date = new Date(this.orders[i].orderDate);
          this.orders[i].orderDate = format(date, "dd/MM/yyyy");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.header {
  width: 67em;
}
.bar li {
  padding-right: 10px;
}
tr {
  border-bottom: 1px solid #ededed;
}
.table {
  font-size: 0.9rem !important;
}
th {
  font-weight: 600;
}
.avatar {
  width: 61px;
  margin-top: -8px;
}
td {
  padding-top: 3em;
  padding-bottom: 1em;
}
.user {
  margin-top: -10px;
}
.td_action {
  padding-top: 2.2em;
}
.pt-6.px-6.scroll {
  overflow: scroll;
  height: 35em;
  overflow-x: hidden;
}
.pt-6.px-6.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.pt-6.px-6.scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.pt-6.px-6.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
td img {
  margin-top: -18px;
}
.form-control {
  border: none !important;
  background-color: #cecfd442;
}
form label,
form h1 {
  font-weight: 600;
  color: #422006;
}
/* loading image */
.loader_img_furniture {
  width: 64px;
  height: 64px;
  position: relative;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.loader_img_furniture:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  transform: rotate(45deg) translate(30%, 40%);
  background: #935a3c;
  box-shadow: 32px -34px 0 5px #652d0a;
  animation: slide 2s infinite ease-in-out alternate;
}

.loader_img_furniture:after {
  content: "";
  position: absolute;
  left: 10px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #652d0a;
  transform: rotate(0deg);
  transform-origin: 35px 145px;
  animation: rotate 2s infinite ease-in-out;
}

@keyframes slide {
  0%,
  100% {
    bottom: -35px;
  }

  25%,
  75% {
    bottom: -2px;
  }

  20%,
  80% {
    bottom: 2px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-15deg);
  }

  25%,
  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(25deg);
  }
}
/* loading */
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}

.loader:before {
  animation: before8 2s infinite;
}

.loader:after {
  animation: after6 2s infinite;
}

@keyframes before8 {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }

  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }

  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }

  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes after6 {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }

  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }

  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }

  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}

.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}
.custum-file-upload {
  height: 200px;
  width: 300px;
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
</style>
