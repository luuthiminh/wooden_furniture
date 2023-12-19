<template>
  <div class="">
    <div class="nav mt-14">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item font-semibold"><a href="#">Home</a></li>

          <li class="breadcrumb-item active" aria-current="page">
            Manage Color
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
      <alert-wanning v-if="isAlertWanning">
        <template v-slot:message>{{ messageWanning }}</template>
      </alert-wanning>
    </div>
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">Management Colors</h1>
      <span class="font-medium text-xs"
        >You can search, update, delete width color!
      </span>
      <div class="flex gap-x-40 pt-10">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="gap-x-2 font-semibold">Totally colors:</p>
          {{ colors.length }}
        </div>
        <div class="search_assistant">
          <div class="container">
            <input
              v-model="keyword"
              type="text"
              name="text"
              class="input"
              placeholder="search wood"
              @input="searchColor"
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
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">Color NAME</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-sm" v-for="s in searchResults" :key="s.colorId">
                <th scope="row">{{ s.colorId }}</th>
                <td>{{ s.colorName }}</td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit', co)"
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
                    @click="opentModal('delete', co)"
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
                      Add New Color
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Color</label
                        >
                        <input
                          v-model="colorName"
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
                      Edit This Color
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Color</label
                        >
                        <input
                          v-model="nameColorModal"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
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
                      Are you sure detete <b> {{ nameColorModal }}</b
                      >?
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
            v-if="colors.length"
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">Color NAME</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="co in colors" :key="co.colorsId">
              <tr class="text-sm">
                <th scope="row">{{ co.colorsId }}</th>
                <td>{{ co.colorName }}</td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit', co)"
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
                    @click="opentModal('delete', co)"
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
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-lg font-semibold text-yellow-950"
                    >
                      Add New Color
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Color</label
                        >
                        <div class="col-span-8 text-left">
                          <input
                            v-model="colorName"
                            type="text"
                            class="form-control"
                            id="exampleInpuName1"
                            aria-describedby="nameHelp"
                            required
                            @change="ValidationAddColor"
                          />
                          <div v-if="!isShowMessage">
                            <span class="text-slate-600 text-xs"
                              >Color name must be greater than 1
                              character!</span
                            >
                          </div>
                          <div v-else>
                            <span
                              v-if="!isDismissModal"
                              class="error text-xs"
                              >{{ messageError }}</span
                            >
                            <span v-else class="success text-xs">{{
                              message
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        v-if="!isDismissModal"
                        type="button"
                        class="btn text-white"
                        @click="HandleAdd"
                      >
                        Add
                      </span>
                      <span
                        v-else
                        data-dismiss="modal"
                        type="button"
                        class="btn text-white"
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
                      Edit This Color
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Color</label
                        >
                        <input
                          v-model="nameColorModal"
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
                      Are you sure detete <b> {{ nameColorModal }}</b
                      >?
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
                    <!-- <button
                        type="button"
                        class="btn btn-primary my-8"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        @click="opentModal('notification', w)"
                        @click.prevent="HandleDelete"
                      >
                        Yes
                      </button> -->
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
      colors: [],
      nameColorModal: null,
      idColorModal: null,
      isSuccess: false,
      isAlertSuccess: false,
      isAlertError: false,
      messageError: "",
      messageSuccess: "",
      messageWanning: null,
      searchResults: [],
      keyword: "",
      message: "",
      isDismissModal: false,
      isShowMessage: false,
    };
  },
  created() {
    this.getAllColors();
  },
  methods: {
    async getAllColors() {
      try {
        const response = await axios.get("assistant/shop-data/colors");
        this.colors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async searchColor() {
      try {
        const response = await axios.get(
          "assistant/shop-data/colors/search?searchString=" + this.keyword
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
    async opentModal(type, co) {
      this.modalType = type;
      this.nameColorModal = co.colorName;
      this.idColorModal = co.colorsId;
    },
    closeModal() {
      this.modalType = null;
    },
    ValidationAddColor() {
      this.isShowMessage = true;
      if (!this.colorName) {
        this.messageError = "Name Color required!";
        this.isDismissModal = false;
      } else if (this.colorName.length < 2) {
        this.messageError = "Color name must be greater than 1 character!";
        this.isDismissModal = false;
      } else {
        this.message = "Color name valid";
        this.isDismissModal = true;
      }
    },
    async HandleAdd() {
      console.log(this.colorName);
      if (this.colorName === undefined) {
        this.ValidationAddColor();
        this.isDismissModal = false;
      } else {
        this.isDismissModal = true;
        try {
          const response = await axios.post(
            "assistant/shop-data/colors/add?colorName=" + this.colorName
          );
          if (response.status === 201) {
            this.modalType = null;
            this.isAlertSuccess = true;
            this.messageSuccess = "Add new wood successfully";
            setTimeout(() => {
              this.isAlertSuccess = false;
            }, 3000);
            this.getAllColors();
          }
        } catch (error) {
          this.isDismissModal = false;
          this.messageError = error.response.data.message;
          console.log(error);
        }
      }
    },
    async HandleUpdate() {
      try {
        const response = await axios.put(
          "Assistant/shop-data/colors/update?colorId=" +
            this.idColorModal +
            "&colorName=" +
            this.nameColorModal
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Update " + this.nameColorModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllColors();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message + "!";
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "Assistant/shop-data/colors/remove/" + this.idColorModal
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Delete " + this.nameColorModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllColors();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messagerError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
  },
  // computed: {
  //   isColorNameUnique() {
  //     console.log(this.colorName);
  //     return !this.colors.findIndex(
  //       (color) => color.colorName === this.colorName
  //     );
  //   },
  // },
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
.error {
  color: #c10606;
}
.success {
  color: green;
}
</style>
