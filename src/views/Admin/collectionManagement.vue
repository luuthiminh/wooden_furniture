<template>
  <header-admin :title="title" />
  <div class="bg-white mb-2 rounded-xl mt-32">
    <div class="header pt-6 px-6">
      <div class="absolute right-10">
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
              @input="searchCollection"
            />
          </div>
        </div>
        <div class="flex flex-cols-2 gap-x-3">
          <div class="">
            <button
              type="button"
              class="button_add"
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
                    class="col-span-5 form-label text-semibold text-base pt-2 border-none"
                    >Name Collection</label
                  >
                  <div class="col-span-7">
                    <input
                      v-model="colName"
                      type="text"
                      class="form-control"
                      id="exampleInpuName1"
                      aria-describedby="nameHelp"
                      required
                      @input="validationAddCollection"
                    />
                    <div v-if="!isShowMessage">
                      <span class="text-slate-600 text-xs"
                        >Collection name must be greater than 1 character!</span
                      >
                    </div>
                    <div v-else>
                      <span v-if="!isDismissModal" class="error text-xs">{{
                        messageError
                      }}</span>
                      <span v-else class="success text-xs">{{ message }}</span>
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
        </div>
      </div>
    </div>
    <div class="content_table pt-6 px-6 scroll">
      <div class="py-4" v-if="searchResults.length">
        <table
          v-if="searchResults.length"
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead>
            <tr class="text-sm text-center">
              <th scope="col">ID</th>
              <th scope="col">Collection Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in searchResults" :key="s.collectionId">
              <th scope="row">{{ s.collectionId }}</th>
              <td>{{ s.collectionName }}</td>
              <td>
                <button
                  class="button_edit"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-backdrop="false"
                  @click="opentModal('edit', s)"
                >
                  <span class="button__text text-xs">Edit</span>
                  <span class="button__icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      /></svg
                  ></span>
                </button>
                <modal
                  v-if="modalType == 'edit'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Edit This Collection
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-5 form-label text-semibold text-base pt-2 border-none"
                          >Name Collection</label
                        >
                        <input
                          v-model="nameCollectionModal"
                          type="text"
                          class="col-span-7 form-control"
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
                      Are you sure detete <b> {{ nameCollectionModal }}</b
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
              </td>
              <td>
                <button
                  class="button_delete"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-dismiss="modal"
                  data-backdrop="false"
                  @click="opentModal('delete', 'null')"
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
                <modal
                  v-if="isShowDeleteModal"
                  @close="isShowDeleteModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div class="flex items-center text-lg font-medium">
                      Delete
                    </div>
                  </template>
                  <template v-slot:body>
                    <p>Are you sure detete this category</p>
                  </template>
                  <template v-slot:footer>
                    <button
                      type="button"
                      class="btn btn-primary my-8"
                      data-dismiss="modal"
                      @click.prevent="HandleDelete(ca)"
                    >
                      Yes
                    </button>
                  </template>
                </modal>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="loader"></div>
      </div>
      <div v-else class="py-4">
        <table
          v-if="collections.length"
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead>
            <tr class="text-sm text-center">
              <th scope="col">ID</th>
              <th scope="col">Collection Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ca in collections" :key="ca.collectionId">
              <th scope="row">{{ ca.collectionId }}</th>
              <td>{{ ca.collectionName }}</td>
              <td>
                <button
                  class="button_edit"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-dismiss="modal"
                  data-backdrop="false"
                  @click="opentModal('edit', ca)"
                >
                  <span class="button__text text-xs">Edit</span>
                  <span class="button__icon bi bi-pencil text-white"></span>
                </button>
              </td>
              <modal
                v-if="modalType == 'edit'"
                @close="modalType == null"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <div
                    class="flex items-center text-base font-semibold text-yellow-950"
                  >
                    Edit This Category
                  </div>
                </template>
                <template v-slot:body>
                  <div class="py-3 pr-36 text-sm">
                    <div class="grid grid-cols-12 gap-x-10">
                      <label
                        for="exampleInputEmail1"
                        class="col-span-5 form-label text-semibold text-base pt-2 border-none"
                        >Name Category</label
                      >
                      <input
                        v-model="nameCollectionModal"
                        type="text"
                        class="col-span-7 form-control"
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
              <td>
                <button
                  class="button_delete"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-dismiss="modal"
                  data-backdrop="false"
                  @click="opentModal('delete', ca)"
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
                      Are you sure detete <b> {{ nameCollectionModal }}</b
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
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="loader"></div>
      </div>
    </div>
  </div>
  <p class="text-sm font-medium mb-5">
    Total collections: {{ collections.length }}
  </p>
</template>
<script>
import axios from "axios";
import HeaderAdmin from "@/components/headerAdmin.vue";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
export default {
  components: {
    HeaderAdmin,
    modal,
    alertError,
    alertSuccess,
  },
  data() {
    return {
      collections: [],
      searchResults: [],
      nameCollectionModal: null,
      idColModal: null,
      modalType: null,
      title: "All Collections",
      isAlertWanning: false,
      isAlertSuccess: false,
      isAlertError: false,
      messageWanning: null,
      messageSuccess: null,
      messageError: null,
      message: "",
      isDismissModal: false,
      isShowMessage: false,
    };
  },
  created() {
    this.getAllCollections();
  },
  methods: {
    async getAllCollections() {
      try {
        const response = await axios.get("shopOwner/shop-data/collections");
        this.collections = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async searchCollection() {
      try {
        const response = await axios.get(
          "shopOwner/shop-data/collections/search?searchString=" + this.keyword
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
    async opentModal(type, ca) {
      this.modalType = type;
      this.nameCollectionModal = ca.collectionName;
      this.idColModal = ca.collectionId;
    },
    closeModal() {
      this.modalType = null;
    },
    validationAddCollection() {
      this.isShowMessage = true;
      if (!this.colName) {
        this.messageError = "Name Collection required!";
        this.isDismissModal = false;
      } else if (this.colName.length < 2) {
        this.messageError = "Collection name must be greater than 1 character!";
        this.isDismissModal = false;
      } else {
        this.message = "Collection name valid";
        this.isDismissModal = true;
      }
    },
    async HandleAdd() {
      if (this.colName === undefined) {
        this.isDismissModal = false;
      } else {
        this.isDismissModal = true;
        try {
          const response = await axios.post(
            "shopOwner/shop-data/collections/add?collectionName=" + this.colName
          );
          if (response.status === 201) {
            this.modalType = null;
            this.getAllCollections();
            this.isAlertSuccess = true;
            this.messageSuccess = "Add new category successfully";
            setTimeout(() => {
              this.isAlertSuccess = false;
            }, 5000);
          }
        } catch (error) {
          this.isDismissModal = false;
          this.messageError = error.response.data.message;
        }
      }
    },
    async HandleUpdate() {
      try {
        const response = await axios.put(
          "shopOwner/shop-data/collections/update?collectionId=" +
            this.idColModal +
            "&collectionName=" +
            this.nameCollectionModal
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Update " + this.nameCollectionModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllCollections();
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
          "shopOwner/shop-data/collections/remove/" + this.idColModal
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Delete " + this.nameCollectionModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllCollections();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messagerError =
          "The collection cannot be deleted because there is furniture using this category";
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
  padding-top: 1em;
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
button {
  border-radius: 6px;
}
</style>
