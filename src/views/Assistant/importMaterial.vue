<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 ml-4 font-medium">
          <li class="breadcrumb-item text-sm font-semibold">
            <router-link to="/indexAssistant">Home</router-link>
          </li>
          <li class="breadcrumb-item text-sm font-semibold" aria-current="page">
            Management Material
          </li>
          <li class="breadcrumb-item text-sm active" aria-current="page">
            Import Material
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
    <div class="font-semibold text-lg ml-4 pt-4 pb-10">Import Material</div>
    <span class="font-medium text-xs ml-6"
      >You can download the entire imported material in CSV
    </span>
    <br />
    <span class="font-medium text-xs ml-6"
      >Please confirm import material if you have received supplier's
      goods</span
    >
    <div class="content_table pt-14 px-6 scroll">
      <div class="flex mb-4">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="font-semibold">Total material:</p>
          {{ imports.length }}
        </div>
        <div class="absolute right-10 flex gap-x-10">
          <button
            type="button"
            class="button_add ring-offset-2 ring-2 bg-lime-700 ring-lime-300 hover:ring-lime-600 text-sm rounded-md"
            data-toggle="modal"
            data-target="#exampleModalLong"
            data-dismiss="modal"
            data-backdrop="false"
            @click="opentModal('add')"
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

          <a
            href="https://landlstore.azurewebsites.net/api/assistant/warehouse/material/import-history/to-csv"
            class="button_download"
            type="button"
          >
            <span class="button__text text-sm">Download</span>
            <span class="button__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                class="svg"
              >
                <path
                  d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                ></path>
                <path
                  d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                ></path>
                <path
                  d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                ></path></svg
            ></span>
          </a>
        </div>
        <modal
          v-if="modalType == 'add'"
          @close="modalType == null"
          data-target="#myModal"
        >
          <template v-slot:title>
            <div
              class="flex items-center text-base font-semibold text-yellow-950"
            >
              Import Material
            </div>
          </template>
          <template v-slot:body>
            <div class="text-sm">
              <div class="mx-4 mb-6">
                <!-- <div class="flex gap-x-6 my-3">
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Bill Image</label
                  >
                  <img v-if="url" :src="url" alt="image" class="w-6/12" />
                  <label v-else class="custum-file-upload ml-28" for="file">
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
                    <input type="file" id="file" @change="onFileChange" />
                  </label>
                </div> -->
                <div class="row mb-6">
                  <label class="col-lg-4 col-form-label fw-medium"
                    >Repository</label
                  >
                  <div class="col-lg-8">
                    <select
                      v-if="reponsitories.length"
                      class="form-select"
                      aria-label="Default select example"
                      v-model="repositoryId"
                    >
                      <option selected class="font-medium">
                        Choose repository
                      </option>
                      <option
                        v-for="repo in reponsitories"
                        :key="repo.repositoryId"
                        :value="repo.repositoryId"
                        required
                      >
                        {{ repo.repositoryName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-6">
                  <label class="col-lg-4 col-form-label fw-medium"
                    >Material</label
                  >
                  <div class="col-lg-8">
                    <select
                      v-if="materials.length"
                      class="form-select"
                      aria-label="Default select example"
                      v-model="maId"
                    >
                      <option selected class="font-medium">
                        Choose repository
                      </option>
                      <option
                        v-for="ma in materials"
                        :key="ma.materialId"
                        :value="ma.materialId"
                        required
                      >
                        {{ ma.materialName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-6">
                  <label class="col-lg-4 col-form-label fw-medium"
                    >Quantity</label
                  >
                  <div class="col-lg-8">
                    <input
                      v-model="quantity"
                      type="text"
                      class="form-control border-none bg-neutral-100"
                      id="firstname"
                      aria-describedby="firstnameHelp"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-6">
                  <label class="col-lg-4 col-form-label fw-medium">Note</label>
                  <div class="col-lg-8">
                    <input
                      v-model="note"
                      type="text"
                      class="form-control border-none bg-neutral-100"
                      id="firstname"
                      aria-describedby="firstnameHelp"
                      required
                    />
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
                data-dismiss="modal"
                @click.prevent="HandleAdd(ma)"
              >
                Add
              </span>
            </div>
          </template>
        </modal>
      </div>
      <div class="py-4">
        <table
          class="table table-borderless text-yellow-950 font-medium bg-white round-md"
        >
          <thead class="table-light">
            <tr class="text-sm">
              <th scope="col">ID</th>
              <th scope="col">Bill</th>
              <th scope="col">Created By</th>
              <th scope="col">Repository Id</th>
              <th scope="col">Address</th>
              <th scope="col">Cost</th>
              <th scope="col">Materials</th>
              <th scope="col">CreationDate</th>
              <th scope="col">DeliveryDate</th>
              <th scope="col">Status</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="imports.length">
            <tr class="text-sm" v-for="i in imports" :key="i.importId">
              <td>{{ i.importId }}</td>
              <td class="img">
                <img :src="i.billImage" alt="furniture" class="w-20" />
              </td>
              <!-- <td>{{ ma.materialImage }}</td> -->
              <td>{{ i.createdBy }}</td>
              <td>{{ i.repositoryId }}</td>
              <td>{{ i.repositoryAddress }}</td>
              <td>${{ i.totalCost }}</td>
              <td>
                <div v-for="it in i.importItems" :key="it.materialId">
                  {{ it.materialId }}
                </div>
              </td>
              <td>{{ i.creationDate }}</td>
              <td>{{ i.deliveryDate }}</td>
              <td>{{ i.status }}</td>
              <td v-if="i.status === 'Delivered'">
                <div
                  class="dropdown text-center py-1 bg-blue-800 w-20 rounded-md text-white"
                >
                  <button
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('transfer')"
                  >
                    Transfer
                  </button>
                </div>
              </td>
              <td v-if="i.status === 'Processing'">
                <div
                  class="dropdown text-center py-1 bg-blue-800 w-20 rounded-md text-white"
                >
                  <button
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('confirm')"
                  >
                    Confirm
                  </button>
                </div>
              </td>
              <td v-if="i.status === 'Processing'">
                <button
                  class="button_delete rounded-md"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  data-dismiss="modal"
                  data-backdrop="false"
                  @click="opentModal('delete')"
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
                v-if="modalType == 'transfer'"
                @close="closeModal"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <div
                    class="flex items-center text-base font-semibold text-yellow-950"
                  >
                    Transfer Material
                  </div>
                </template>
                <template v-slot:body>
                  <div>
                    <div class="row mb-6">
                      <label class="col-lg-4 col-form-label fw-medium text-base"
                        >Repository</label
                      >
                      <div class="col-lg-8">
                        <select
                          v-if="reponsitories.length"
                          class="form-select"
                          aria-label="Default select example"
                          v-model="repositoryId"
                        >
                          <option selected class="font-medium">
                            Choose repository
                          </option>
                          <option
                            v-for="repo in reponsitories"
                            :key="repo.repositoryId"
                            :value="repo.repositoryId"
                            required
                          >
                            {{ repo.repositoryName }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="grid grid-cols-12 gap-x-10">
                      <label
                        for="exampleInputEmail1"
                        class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                        >Quantity</label
                      >
                      <input
                        v-model="quantity"
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
                      @click="HandleTranfer(i)"
                    >
                      Transfer
                    </span>
                  </div>
                </template>
              </modal>
              <modal
                v-if="modalType == 'confirm'"
                @close="closeModal"
                data-target="#myModal"
              >
                <template v-slot:title>
                  <div
                    class="flex items-center text-base font-semibold text-yellow-950"
                  >
                    Confirm Import
                  </div>
                </template>
                <template v-slot:body>
                  <div class="text-sm">
                    <div class="row mx-1 mb-6 mt-2">
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Bill Image</label
                        >
                        <div class="col-lg-8 flex">
                          <div class="avatar_upload py-3">
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
                      </div>
                      <div class="row mb-6">
                        <label class="col-lg-4 col-form-label fw-medium"
                          >Delivery Date</label
                        >
                        <div class="col-lg-8">
                          <input
                            v-model="deliveryDate"
                            type="text"
                            class="form-control border-none bg-neutral-100"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            required
                          />
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
                      data-dismiss="modal"
                      @click.prevent="HandleConfirmImport(i)"
                    >
                      Confirm
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
                  <p class="text-center py-3 text-base">
                    Are you sure detete this import??
                  </p>
                </template>
                <template v-slot:footer>
                  <div class="bg-red-900 rounded-md">
                    <span
                      type="button"
                      class="btn text-white"
                      data-dismiss="modal"
                      @click="HandleDelete(i)"
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
  <!-- </div> -->
</template>
<script>
import { format } from "date-fns";
import axios from "axios";
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
      imports: [],
      materials: [],
      reponsitories: [],
      modalType: null,
      isAllModal: false,
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
      url: "",
      file: "",
      materialIdModal: null,
      materialNameModal: null,
      materialPriceModal: null,
      materialDescriptionModal: null,
      materialSuplierModal: null,
    };
  },
  created() {
    this.getImports();
    this.getMaterial();
    this.getAllReponsitorys();
  },
  methods: {
    async getImports() {
      try {
        const response = await axios.get(
          "assistant/warehouse/material/imports"
        );
        if (response.status == 200) {
          this.imports = response.data;
          this.imports = response.data.map((item) => ({
            ...item,
            creationDate: item.creationDate
              ? format(new Date(item.creationDate), "dd/MM/yyyy")
              : "",
            deliveryDate: item.deliveryDate
              ? format(new Date(item.deliveryDate), "dd/MM/yyyy")
              : "",
          }));
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getMaterial() {
      try {
        const response = await axios.get("Assistant/shop-data/materials");
        this.materials = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllReponsitorys() {
      try {
        const response = await axios.get("assistant/warehouse/repositories");
        this.reponsitories = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type) {
      this.modalType = type;
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleAdd() {
      try {
        const response = await axios.post(
          "assistant/warehouse/material/imports/create",
          {
            repositoryId: this.repositoryId,
            items: [
              {
                materialId: this.maId,
                quantity: this.quantity,
                note: this.note,
              },
            ],
          }
        );
        if (response.status === 201) {
          this.modalType = null;
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Import material successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getImports();
        }
        console.log(response.data);
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      if (this.file) {
        this.url = URL.createObjectURL(this.file);
      }
      console.log(event);
    },
    async HandleConfirmImport(i) {
      const formData = new FormData();
      formData.append("DeliveryDate", this.deliveryDate);
      formData.append("BillImage", this.file);
      try {
        const response = await axios.put(
          "assistant/warehouse/material/imports/confirm/" + i.importId,
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
          this.messageSuccess = "Update successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getImports();
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
    async HandleDelete(i) {
      try {
        const response = await axios.delete(
          "assistant/warehouse/material/imports/remove/" + i.importId
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
          this.getImports();
        } else {
          this.isSuccess = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async HandleTranfer(i) {
      try {
        const response = await axios.put(
          "assistant/warehouse/repositories/" +
            i.repositoryId +
            "/material/transfer/" +
            this.repositoryId
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Update successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getImports();
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
.custum-file-upload {
  ight: 178px;
  width: 248px;
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
.form-select {
  background-color: #cecfd442;
}
table {
  overflow: scroll;
  width: 95em;
}
.button_download {
  position: relative;
  width: 125px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #6dddbe;
  background-color: #366054;
  overflow: hidden;
  border-radius: 7px;
}

.button_download,
.button_download .button__icon,
.button_download .button__text {
  transition: all 0.3s;
}

.button_download .button__text {
  transform: translateX(8px);
  color: #fff;
  font-weight: 600;
}

.button_download .button__icon {
  position: absolute;
  transform: translateX(85px);
  height: 100%;
  width: 39px;
  background-color: #17795e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_download .svg {
  width: 20px;
  fill: #fff;
}

.button_download:hover {
  background: #17795e;
}

.button_download:hover .button__text {
  color: transparent;
}

.button_download:hover .button__icon {
  width: 120px;
  transform: translateX(0);
}

.button_download:active .button__icon {
  background-color: #146c54;
}

.button_download:active {
  border: 1px solid #146c54;
}
</style>
