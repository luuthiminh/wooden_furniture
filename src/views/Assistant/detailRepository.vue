<template>
  <div class="">
    <div class="nav mt-14">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>

          <li class="breadcrumb-item active" aria-current="page">
            Manage Reponsitory
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
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">Detail Reponsitory</h1>
      <div class="flex gap-x-40 pt-10"></div>
      <div class="content_table scroll">
        <div class="pt-10">
          <table
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">Stress</th>
                <th scope="col">Ward</th>
                <th scope="col">District</th>
                <th scope="col">Province</th>
                <th scope="col">Capacity</th>
                <th scope="col">IsFull</th>
                <th scope="col">CreationDate</th>
                <th scope="col">Furniture Repository</th>
                <th scope="col">Material Repository</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-sm">
                <th scope="row">{{ repository.repositoryId }}</th>
                <td>
                  {{ repository.repositoryName }}
                </td>
                <td v-if="repository.address">
                  {{ repository.address.street }}
                </td>
                <td v-if="repository.address">{{ repository.address.ward }}</td>
                <td v-if="repository.address">
                  {{ repository.address.district }}
                </td>
                <td v-if="repository.address">
                  {{ repository.address.province }}
                </td>
                <td>{{ repository.capacity }}</td>
                <td>{{ repository.isFull }}</td>
                <td>{{ repository.creationDate }}</td>
                <td>
                  <div v-for="im in repository.furnitureRepository" :key="im">
                    {{ im.furnitureSpecificationName }}
                  </div>
                </td>
                <td>
                  <div v-for="im in repository.materialRepository" :key="im">
                    {{ im.materialName }}
                  </div>
                </td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit')"
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
                  v-if="modalType == 'edit'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Edit This Repository
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="text-sm">
                      <div class="mx-2 my-2">
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Repository Name</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="repository.repositoryName"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Capacity</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="repository.capacity"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Street</label
                          >
                          <div class="col-lg-8">
                            <input
                              v-model="repository.address.street"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Ward
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="repository.address.ward"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >District
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="repository.address.district"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >Province
                          </label>
                          <div class="col-lg-8">
                            <input
                              v-model="repository.address.province"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>

                        <div class="row mb-6">
                          <label class="col-lg-4 col-form-label fw-medium"
                            >IsFull</label
                          >
                          <div class="col-lg-8">
                            <select
                              v-model="repository.isFull"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>{{ repository.isFull }}</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
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
                        @click.prevent="HandleUpdate(repository)"
                      >
                        Update
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'delete'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div class="flex items-center text-lg font-semibold">
                      Delete
                    </div>
                  </template>
                  <template v-slot:body>
                    <p class="text-sm font-semibold pt-2 pb-4 text-slate-600">
                      Please enter your password to delete
                      {{ repository.repositoryName }}!
                    </p>
                    <div class="row mb-6">
                      <label class="col-lg-3 col-form-label fw-medium"
                        >Password
                      </label>
                      <div class="col-lg-8">
                        <input
                          v-model="passwordAs"
                          type="password"
                          class="form-control border-none bg-neutral-100"
                          id="firstname"
                          aria-describedby="firstnameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleDelete(repository)"
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
      repository: {},
      isSuccess: false,
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
      idRepoModal: null,
      materials: [],
    };
  },
  created() {
    this.getReponsitory();
    this.getMaterial();
  },
  methods: {
    async getReponsitory() {
      try {
        const response = await axios.get(
          "assistant/warehouse/repositories/" + this.$route.params.id
        );
        this.repository = response.data;
        const date = new Date(this.repository.creationDate);
        this.repository.creationDate = format(date, "dd/MM/yyyy");
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
    async getMaterial() {
      try {
        const response = await axios.get("Assistant/shop-data/materials");
        this.materials = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async HandleUpdate(repository) {
      const formData = new FormData();
      formData.append("repositoryName", repository.repositoryName);
      formData.append("Street", repository.address.street);
      formData.append("ward", repository.address.ward);
      formData.append("district", repository.address.district);
      formData.append("province", repository.address.province);
      formData.append("capacity", repository.capacity);
      formData.append("IsFull", repository.isFull);
      try {
        const response = await axios.put(
          "Assistant/warehouse/repositories/" +
            repository.repositoryId +
            "/edit",
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
          this.getReponsitory();
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
    async HandleDelete(repository) {
      try {
        const response = await axios.delete(
          "Assistant/warehouse/repositories/" +
            repository.repositoryId +
            "/remove" +
            "?password=" +
            this.passwordAs
        );
        if (response.status === 200) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess = "Delete successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getReponsitory();
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
</style>
