<template>
  <header-admin :title="title" />
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
      <div class="flex items-center justify-between">
        <div class="search_admin">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              class="input"
              v-model="keyword"
              @input="searchCategory"
            />
          </div>
        </div>
        <div class="flex flex-cols-2 gap-x-3">
          <div
            class="dropdown bg-orange-50 shadow-lg bg-orange-100/50 px-2 py-2 rounded-lg"
          >
            <button
              class="btn_action flex"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-orange-500 mt-1 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>

              <span class="text-orange-500 font-medium">Filter</span>
            </button>
            <ul
              class="dropdown-menu text-sm"
              aria-labelledby="dropdownMenuButton1"
            >
              <li @click="selectStatus('All')">All</li>
              <li @click="selectStatus('Pending')">Pending</li>
              {{
                status
              }}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="content_table pt-6 px-6 scroll">
      <div class="py-4">
        <table class="table table-borderless text-yellow-950 font-medium">
          <thead>
            <tr class="text-sm text-center">
              <th scope="col">Id</th>
              <th scope="col">Furniture</th>
              <th></th>
              <th scope="col">Customer Id</th>
              <th scope="col">Color Id</th>
              <th scope="col">Heigh</th>
              <th scope="col">Width</th>
              <th scope="col">Length</th>
              <th scope="col">Wood Id</th>
              <th scope="col">Quantity</th>
              <th scope="col">Completion Date</th>
              <th scope="col">CreationDate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-if="allOrders.length">
            <tr v-for="or in allOrders" :key="or.customizeFurnitureId">
              <td>{{ or.customizeFurnitureId }}</td>
              <td class="img">
                <img :src="or.images" alt="image furniture" />
              </td>
              <td class="text-start">
                <span class="font-semibold block">{{
                  or.customizeFurnitureName
                }}</span>
              </td>
              <td>{{ or.customerId }}</td>
              <td>{{ or.colorId }}</td>
              <td>{{ or.height }}</td>
              <td>{{ or.width }}</td>
              <td>{{ or.length }}</td>
              <td>{{ or.woodId }}</td>
              <td>{{ or.quantity }}</td>
              <td>{{ or.desiredCompletionDate }}</td>
              <td>{{ or.creationDate }}</td>
              <td class="td_action text-sm">
                <div class="px-2 py-2 bg-orange-50 rounded-md">
                  <button
                    class="btn_action"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit')"
                  >
                    Confirm
                  </button>
                </div>
              </td>
              <modal
                v-if="modalType == 'edit'"
                @close="closeModal"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <h1 class="flex items-center text-lg font-semibold">
                    Confirm Customize Order
                  </h1>
                </template>
                <template v-slot:body>
                  <div class="pb-3 px-2 text-sm text-left">
                    <p class="py-4 font-semibold">
                      Customize Order: {{ or.customizeFurnitureName }}
                    </p>
                    <div>
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Actual Completion Date</label
                      >
                      <input
                        v-model="actualCompletionDate"
                        type="date"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Expected Price</label
                      >
                      <input
                        v-model="expectedPrice"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Status</label
                      >
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        v-model="status"
                      >
                        <option selected>Choose status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Not accepted">Not accepted</option>
                      </select>
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Reason</label
                      >
                      <input
                        v-model="reason"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                  </div>
                </template>
                <template v-slot:footer>
                  <button
                    data-dismiss="modal"
                    @click.prevent="HandleConfirm(or)"
                    type="button"
                    class="button_addfurniture text-white bg-yellow-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Update
                  </button>
                </template>
              </modal>
            </tr>
          </tbody>
          <tbody v-else-if="pendingOrders.length">
            <tr v-for="or in pendingOrders" :key="or.customizeFurnitureId">
              <td>{{ or.customizeFurnitureId }}</td>
              <td class="img">
                <img :src="or.images" alt="image furniture" />
              </td>
              <td class="text-start">
                <span class="font-semibold block">{{
                  or.customizeFurnitureName
                }}</span>
              </td>
              <td>{{ or.customerId }}</td>
              <td>{{ or.colorId }}</td>
              <td>{{ or.height }}</td>
              <td>{{ or.width }}</td>
              <td>{{ or.length }}</td>
              <td>{{ or.woodId }}</td>
              <td>{{ or.quantity }}</td>
              <td>{{ or.desiredCompletionDate }}</td>
              <td>{{ or.creationDate }}</td>
              <td class="td_action text-sm">
                <div class="px-2 py-2 bg-orange-50 rounded-md">
                  <button
                    class="btn_action"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit')"
                  >
                    Confirm
                  </button>
                </div>
              </td>
              <modal
                v-if="modalType == 'edit'"
                @close="closeModal"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <h1 class="flex items-center text-lg font-semibold">
                    Confirm Customize Order
                  </h1>
                </template>
                <template v-slot:body>
                  <div class="pb-3 px-2 text-sm text-left">
                    <p class="py-4 font-semibold">
                      Customize Order: {{ or.customizeFurnitureName }}
                    </p>
                    <div>
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Actual Completion Date</label
                      >
                      <input
                        v-model="actualCompletionDate"
                        type="date"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Expected Price</label
                      >
                      <input
                        v-model="expectedPrice"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Status</label
                      >
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        v-model="status"
                      >
                        <option selected>Choose status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Not accepted">Not accepted</option>
                      </select>
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Reason</label
                      >
                      <input
                        v-model="reason"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                  </div>
                </template>
                <template v-slot:footer>
                  <button
                    data-dismiss="modal"
                    @click.prevent="HandleConfirm(or)"
                    type="button"
                    class="button_addfurniture text-white bg-yellow-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Update
                  </button>
                </template>
              </modal>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p class="text-sm font-medium mb-5">Total users: 5</p>

  <!-- <div class="loader"></div> -->
</template>
<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";
import HeaderAdmin from "@/components/headerAdmin.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import { format } from "date-fns";
export default {
  components: {
    HeaderAdmin,
    modal,
    alertError,
    alertSuccess,
  },
  data() {
    return {
      allOrders: [],
      pendingOrders: [],
      furnitureModel: [],
      modalType: null,
      title: "All Customize Orders",
      status: "All",
    };
  },
  created() {
    this.getCustomizeOrder();
  },
  methods: {
    selectStatus(st) {
      this.status = st;
      this.getCustomizeOrder();
    },
    async getCustomizeOrder() {
      try {
        const response = await axios.get(
          "shopOwner/customer-requests/customize-furniture?status=" +
            this.status
        );
        if (this.status === "All") {
          this.allOrders = response.data;
          for (let i = 0; i < this.allOrders.length; i++) {
            const date = new Date(this.allOrders[i].creationDate);
            this.allOrders[i].creationDate = format(date, "dd/MM/yyyy");
            this.allOrders[i].desiredCompletionDate = format(
              date,
              "dd/MM/yyyy"
            );
          }
        } else if (this.status === "Pending") {
          this.pendingOrders = response.data;
          for (let i = 0; i < this.pendingOrders.length; i++) {
            const date = new Date(this.pendingOrders[i].creationDate);
            this.pendingOrders[i].creationDate = format(date, "dd/MM/yyyy");
            this.pendingOrders[i].desiredCompletionDate = format(
              date,
              "dd/MM/yyyy"
            );
          }
        }
        console.log(this.status);
      } catch (error) {
        console.error(error);
      }
    },
    opentModal(type) {
      this.modalType = type;
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleConfirm(or) {
      const formData = new FormData();
      formData.append("CustomizeFurnitureId", or.customizeFurnitureId);
      formData.append("ActualCompletionDate", this.actualCompletionDate);
      formData.append("ExpectedPrice", this.expectedPrice);
      formData.append("Status", this.status);
      formData.append("Reason", this.reason);
      try {
        const response = await axios.put(
          "shopOwner/customize-requests/customize-furniture/confirm",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Update " + or.customizeFurnitureName + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getCustomizeOrder();
        }
        console.log(this.avatar);
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
  width: 67em;
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
table {
  width: 128em;
}
</style>
