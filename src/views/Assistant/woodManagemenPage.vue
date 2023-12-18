<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>

          <li class="breadcrumb-item active" aria-current="page">Wood</li>
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
      <alert-wanning v-if="isAlertWanning">
        <template v-slot:message>{{ messageWanning }}</template>
      </alert-wanning>
    </div>
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">Wood Manage</h1>
      <div class="flex gap-x-40 pt-10 bg-white my-10 px-6 rounded-md">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="font-semibold gap-x-4s">Total Woods:</p>
          {{ woods.length }}
        </div>
        <div class="search_assistant">
          <div class="container">
            <input
              v-model="keyword"
              type="text"
              name="text"
              class="input"
              placeholder="search wood"
              @input="searchWood"
            />
            <button
              class="search__btn bg-gradient-to-r from-yellow-700 to-orange-800 opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path
                  d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                  fill="#efeff1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="absolute right-10">
          <button
            type="button"
            class="button_add ring-offset-2 ring-2 bg-lime-700 ring-lime-300 hover:ring-lime-600 text-sm rounded-md"
            data-toggle="modal"
            data-target="#exampleModalLong"
            data-dismiss="modal"
            data-backdrop="false"
            @click="opentModal('add', 'null')"
          >
            <span class="button__text text-sm">Add</span>
            <span class="button__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                class="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line></svg
            ></span>
          </button>
        </div>
      </div>
      <!-- <div v-show="isSuccess">
        <div>
          <notification-modal>
            <template v-slot:title>Delete this category Successful </template>
          </notification-modal>
        </div>
      </div> -->
      <div class="content_table scroll">
        <div v-if="searchResults.length" class="pt-10">
          <table
            v-if="searchResults.length"
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">WOOD NAME</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="w in searchResults" :key="w.woodId">
              <tr class="text-sm">
                <th scope="row">{{ w.woodId }}</th>
                <td>{{ w.woodType }}</td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit', sr)"
                  >
                    <span class="button__text text-xs">Edit</span>
                    <span class="button__icon bi bi-pencil text-white"></span>
                  </button>

                  <button
                    class="button_delete ring-offset-2 ring-2 ring-red-300 hover:ring-red-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('delete', sr)"
                  >
                    <span class="button__text text-xs">Delete</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg
                    ></span>
                  </button>
                </td>
                <modal
                  v-if="modalType == 'add'"
                  @close="isShowAddModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Add New Wood
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Wood</label
                        >
                        <input
                          v-model="woodName"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleAdd"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'edit'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Edit This Wood
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold font-base pt-2 border-none"
                          >Name Wood</label
                        >
                        <input
                          v-model="nameWoodModal"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click.prevent="HandleUpdate"
                      >
                        Update
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'delete'"
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
                      Are you sure detete <b> {{ nameWoodModal }}</b>
                    </p>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleDelete"
                      >
                        Delete
                      </span>
                    </div>
                  </template>
                </modal>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="pt-10">
          <table
            v-if="woods.length"
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">WOOD NAME</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="w in woods" :key="w.woodId">
              <tr class="text-sm">
                <th scope="row">{{ w.categoryId }}</th>
                <td>{{ w.categoryName }}</td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit', w)"
                  >
                    <span class="button__text text-xs">Edit</span>
                    <span class="button__icon bi bi-pencil text-white"></span>
                  </button>

                  <button
                    class="button_delete ring-offset-2 ring-2 ring-red-300 hover:ring-red-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('delete', w)"
                  >
                    <span class="button__text text-xs">Delete</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg
                    ></span>
                  </button>
                </td>
                <modal
                  v-if="modalType == 'add'"
                  @close="isShowAddModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Add New Wood
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Wood</label
                        >
                        <input
                          v-model="woodName"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleAdd"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'edit'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Edit This Wood
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold font-base pt-2 border-none"
                          >Name Wood</label
                        >
                        <input
                          v-model="nameWoodModal"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click.prevent="HandleUpdate"
                      >
                        Update
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'delete'"
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
                      Are you sure detete <b> {{ nameWoodModal }}</b>
                    </p>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleDelete"
                      >
                        Delete
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
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import alertWanning from "@/components/AlertWanning.vue";
export default {
  components: {
    modal,
    alertError,
    alertSuccess,
    alertWanning,
  },
  data() {
    return {
      modalType: null,
      woods: [],
      newWood: "",
      nameWoodModal: null,
      idWoodModal: null,
      isSuccess: false,
      isAlertSuccess: false,
      isAlertError: false,
      isAlertWanning: false,
      messageError: null,
      messageSuccess: null,
      messageWanning: null,
      searchResults: [],
      keyword: "",
    };
  },
  created() {
    this.getAllWoods();
  },
  methods: {
    async getAllWoods() {
      try {
        const response = await axios.get("Assistant/shop-data/woods");
        this.woods = response.data;
        console.log(response.data);
      } catch (error) {
        if (error.response.status === 403) {
          this.$router.push({ name: "login" });
          console.log("Login");
        }
      }
    },
    async searchWood() {
      // Gọi API khi có sự thay đổi trong searchText
      try {
        const response = await axios.get(
          "assistant/shop-data/woods/search?searchString=" + this.keyword
        );
        this.searchResults = response.data;
      } catch (error) {
        this.isAlertWanning = true;
        this.messageWanning = this.keyword + " not found";
        setTimeout(() => {
          this.isAlertWanning = false;
        }, 5000);
      }
    },
    async opentModal(type, w) {
      this.modalType = type;
      this.nameWoodModal = w.categoryName;
      this.idWoodModal = w.categoryId;
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleAdd() {
      try {
        const response = await axios.post(
          "Assistant/shop-data/woods/add?woodType=" + this.woodName
        );
        if (response.status === 201) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Add new wood successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllWoods();
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
    async HandleUpdate() {
      try {
        const response = await axios.put(
          "Assistant/shop-data/woods/update?woodId=" +
            this.idWoodModal +
            "&woodType=" +
            this.nameWoodModal
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Update " + this.nameWoodModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllWoods();
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
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "Assistant/shop-data/woods/remove/" + this.idWoodModal
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess = "Delete " + this.nameWoodModal + " successful!";
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
          this.getAllWoods();
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

.form-control,
.form-select {
  border: none;
  background-color: #dde4e794;
}
</style>
