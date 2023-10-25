<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-5 font-medium">
          <li class="breadcrumb-item text-base">
            <router-link to="/indexAssistant">Home</router-link>
          </li>
          <li class="breadcrumb-item text-base active" aria-current="page">
            Managemnet Material
          </li>
        </ol>
      </nav>
    </div>
    <div class="content_table pt-14 px-10 scroll">
      <div class="flex mb-4">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="font-semibold">Total Woods:</p>
          {{ materials.length }}
        </div>
        <div class="absolute right-10">
          <button
            class="transition ease-in-out delay-150 px-2 py-1 text-white ring-offset-2 ring-2 bg-lime-700 ring-lime-300 hover:ring-lime-600 text-sm rounded-md"
            data-toggle="modal"
            data-target="#exampleModalLong"
            data-dismiss="modal"
            data-backdrop="false"
            @click="opentModal('add', 'null')"
          >
            <i class="bi bi-plus-circle pr-1"></i>
            New Material
          </button>
        </div>
      </div>
      <div class="py-4">
        <table
          class="table table-borderless text-yellow-950 font-medium bg-white round-md"
        >
          <thead class="table-light">
            <tr class="text-sm">
              <th scope="col">Material</th>
              <th></th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">SuperlierId</th>
              <th scope="col">RepositoryId</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-if="materials.length">
            <tr class="text-sm" v-for="ma in materials" :key="ma.materialId">
              <td class="img">
                <img
                  src="@/assets/images/category/shelves_tv/shelves_10.png"
                  alt="furniture"
                  class="w-20"
                />
              </td>
              <!-- <td>{{ ma.materialImage }}</td> -->
              <td class="text-start">
                <span class="font-semibold block">{{ ma.materialName }}</span>
                <span class="text-xs">{{ ma.ImportId }}</span>
              </td>
              <td>${{ ma.materialPrice }}</td>
              <td>{{ ma.description }}</td>
              <td>{{ ma.defaultSuplierId }}</td>
              <td>{{ ma.available[0].repositoryId }}</td>
              <td>
                <button
                  class="button_edit"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-dismiss="modal"
                  data-backdrop="false"
                  @click="opentModal('edit', ma)"
                >
                  <span class="button__text text-xs">Edit</span>
                  <span class="button__icon bi bi-pencil text-white"></span>
                </button>
              </td>
              <td>
                <button
                  class="button_delete"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-dismiss="modal"
                  data-backdrop="false"
                  @click="opentModal('delete', ma)"
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
                @close="modalType == null"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <div
                    class="flex items-center text-base font-semibold text-yellow-950"
                  >
                    Add New Material
                  </div>
                </template>
                <template v-slot:body>
                  <div class="text-sm">
                    <div class="mx-10 my-10">
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Image</label
                        >
                        <div class="col-lg-8">
                          <div class="flex">
                            <div class="avatar_upload">
                              <img v-if="url" :src="url" alt="Avatar" />
                              <img
                                v-else
                                src="@/assets/images/assistant/image_default.jpeg"
                                alt="Avatar"
                              />
                            </div>
                            <div class="avatar_edit">
                              <div class="hidden">
                                <input
                                  type="file"
                                  name="avatar"
                                  id="imageUpload"
                                  accept=".png, .jpg, .jpeg"
                                  :maxFileSize="1000000"
                                  ref="file"
                                  @change="onFileChange"
                                />
                              </div>
                              <label
                                class="bi bi-pencil text-xs"
                                for="imageUpload"
                              ></label>
                            </div>
                          </div>
                          <!-- <div class="avatar_upload">
                            <img v-if="url" :src="url" alt="Avatar" />
                          </div> -->
                          <!-- <img :src="getPostAvatar(info)" /> -->
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Name</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="materialName"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Price</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="materialPrice"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Description</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="materialDescription"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >DefaultSuplier</label
                        >
                        <div class="col-lg-8">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="materialSuplier"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">Hung</option>
                            <option value="2">Loan</option>
                            <option value="3">Van</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-slot:footer>
                  <div class="bg-yellow-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      @click.prevent="AddMaterial"
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
                    Edit Material
                  </div>
                </template>
                <template v-slot:body>
                  <div class="text-sm">
                    <div class="mx-10 my-10">
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Image</label
                        >
                        <div class="col-lg-8">
                          <div class="flex">
                            <div class="avatar_upload">
                              <img v-if="url" :src="url" alt="Avatar" />
                              <img
                                v-else
                                src="@/assets/images/assistant/image_default.jpeg"
                                alt="Avatar"
                              />
                            </div>
                            <div class="avatar_edit">
                              <div class="hidden">
                                <input
                                  type="file"
                                  name="avatar"
                                  id="imageUpload"
                                  accept=".png, .jpg, .jpeg"
                                  :maxFileSize="1000000"
                                  ref="file"
                                  @change="onFileChange"
                                />
                              </div>
                              <label
                                class="bi bi-pencil text-xs"
                                for="imageUpload"
                              ></label>
                            </div>
                          </div>
                          <!-- <div class="avatar_upload">
                            <img v-if="url" :src="url" alt="Avatar" />
                          </div> -->
                          <!-- <img :src="getPostAvatar(info)" /> -->
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Name</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="materialNameModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Price</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="materialPriceModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Description</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="materialDescriptionModal"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                          />
                        </div>
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >DefaultSuplier</label
                        >
                        <div class="col-lg-8">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="materialSuplierModal"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">Hung</option>
                            <option value="2">Loan</option>
                            <option value="3">Van</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-slot:footer>
                  <div class="bg-yellow-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      @click.prevent="updateMaterial"
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
                  <div class="flex items-center text-lg font-medium">
                    Delete
                  </div>
                </template>
                <template v-slot:body>
                  <p>Are you sure detete {{ nameWoodModal }} category</p>
                </template>
                <template v-slot:footer>
                  <button
                    type="button"
                    class="btn btn-primary my-8"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    @click.prevent="HandleDelete"
                  >
                    Yes
                  </button>
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
  <!-- </div> -->
</template>
<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";
export default {
  components: {
    modal,
  },
  data() {
    return {
      materials: [],
      modalType: null,
      isAllModal: false,
      url: "",
      materialIdModal: null,
      materialNameModal: null,
      materialPriceModal: null,
      materialDescriptionModal: null,
      materialSuplierModal: null,
    };
  },
  created() {
    this.getMaterial();
  },
  methods: {
    async getMaterial() {
      try {
        const response = await axios.get("Assistant/warehouse/material/import");
        this.materials = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type, ma) {
      this.modalType = type;
      this.materialIdModal = ma.materialId;
      this.materialNameModal = ma.materialName;
      this.materialPriceModal = ma.materialPrice;
      this.materialDescriptionModal = ma.description;
      this.materialSuplierModal = ma.defaultSuplierId;
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleAdd() {
      try {
        const response = await axios.post(
          "assistant/shop-data/materials/add/?woodType=" + this.categoryName
        );
        if (response.status === 201) {
          this.modalType = null;
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      if (this.file) {
        // this.nameFile = this.file.name;
        this.url = URL.createObjectURL(this.file);
        // this.url = imageUrl;
      }
      console.log(event);
    },

    async AddMaterial() {
      const formData = new FormData();
      formData.append("MaterialName", this.materialName);
      formData.append("MaterialPrice", this.materialPrice);
      formData.append("Description", this.materialDescription);
      formData.append("DefaultSuplierId", this.materialSuplier);
      formData.append("materialImage", this.file);
      try {
        const response = await axios.post(
          "assistant/shop-data/materials/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          this.modalType = null;
        }
        console.log(this.avatar);
      } catch (error) {
        console.error(error);
      }
    },
    async updateMaterial() {
      const formData = new FormData();
      formData.append("MaterialId", this.materialIdModal);
      formData.append("MaterialName", this.materialNameModal);
      formData.append("MaterialPrice", this.materialPriceModal);
      formData.append("Description", this.materialDescriptionModal);
      formData.append("DefaultSuplierId", this.materialSuplierModal);
      formData.append("materialImage", this.file);
      try {
        const response = await axios.put(
          "customer/customer-infor/update",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          this.modalType = null;
        }
        // if (response.status === 200) {
        //   this.avatar = URL.createObjectURL(this.file);
        // }
        console.log(this.avatar);
      } catch (error) {
        console.error(error);
      }
    },
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "assistant/shop-data/woods/remove/" + this.materialIdModal
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
        } else {
          this.isSuccess = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.button {
  --main-focus: #2d8cf0;
  --font-color: #dedede;
  --bg-color-sub: #222;
  --bg-color: #323232;
  --main-color: #dedede;
  position: relative;
  width: 140px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
}

.button,
.button__icon,
.button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(20px);
  color: var(--font-color);
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(96px);
  height: 100%;
  width: 39px;
  background-color: var(--bg-color-sub);
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 20px;
  stroke: var(--main-color);
}

.button:hover {
  background: var(--bg-color);
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.button:active {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px var(--main-color);
}

.button_addfurniture {
  background-color: rgb(8, 129, 8);
}
.button_addfurniture:hover {
  background-color: rgb(17, 156, 17);
}

.modal_uploadfile {
  border-radius: 1em;
  box-shadow: 0px 100px 48px -60px rgba(0, 0, 0, 0.1);
  color: rgb(15, 14, 14);
  max-width: 359px;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  border: 1px solid #c7c3c3;
}

.modal_uploadfile .content > *,
.modal_uploadfile > * {
  padding: 0.6em;
}

.modal_uploadfile .title {
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.2;
  display: flex;
  justify-content: center;
}

.modal_uploadfile .message {
  line-height: 1.2;
  text-align: center;
  font-size: 89%;
}

.modal_uploadfile .actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.modal_uploadfile .upload-btn {
  height: 10%;
  background-color: transparent;
  border: 0.125rem dashed hsla(223, 10%, 50%, 0.4);
  flex: 1;
  padding: 0.375rem 2rem;
}

.modal_uploadfile .upload-btn:hover {
  background-color: hsla(223, 10%, 60%, 0.2);
}

.modal_uploadfile .result {
  margin-top: 4px;
  background-color: rgba(0, 140, 255, 0.062);
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 1em;
  margin-bottom: 10px;
}

.modal_uploadfile .file-uploaded {
  font-weight: 300;
}

.modal_uploadfile .file-uploaded::before {
  position: absolute;
  content: "X";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 7, 1, 0.212);
  height: 27px;
  width: 27px;
  border-radius: 50%;
  right: 10px;
  top: 5px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.modal_uploadfile .file-uploaded:hover::before {
  background-color: rgba(233, 40, 6, 0.664);
}

/* table */
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
.form-control,
.form-select {
  border: none;
  background-color: #dde4e794;
}
</style>
