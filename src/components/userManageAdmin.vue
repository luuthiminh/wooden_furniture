<template>
  <div class="bg-white mb-2 rounded-xl mt-32">
    <div class="pt-6 px-6 scroll">
      <div class="flex items-center justify-between">
        <div class="search">
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
              @change="searchUser"
            />
          </div>
        </div>
        <div class="absolute right-10">
          <alert-Error v-if="isAlertError">
            <template v-slot:message>{{ messageError }}</template></alert-Error
          >
          <alert-success v-if="isAlertSuccess">
            <template v-slot:message>{{ messageSuccess }}</template>
          </alert-success>
        </div>
      </div>
      <div v-if="!searchResults.length">
        <div class="py-4" v-if="users.length">
          <table class="table table-borderless text-yellow-950 font-medium">
            <thead>
              <tr>
                <th>User</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Creation Date</th>
                <th>Is Activated</th>
                <th>Two Factor Enabled</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in users" :key="u.userId">
                <td>
                  <div class="user flex gap-x-2">
                    <div class="avatar">
                      <router-link to="/profileManagement" v-if="u.avatar">
                        <img
                          class="rounded-md cursor-pointer"
                          :src="u.avatar"
                          alt="avatar"
                        />
                      </router-link>
                      <img
                        v-else
                        class="rounded-md cursor-pointer"
                        src="@/assets/images/avatar_default.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <span
                        class="block text-gray-800 text-hover-primary font-semibold mb-2"
                        >{{ u.firstName }} {{ u.lastName }}</span
                      >
                      <span class="email font-medium">{{ u.email }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ u.doB }}</td>
                <td>{{ u.gender }}</td>
                <td>{{ u.userName }}</td>
                <td>{{ u.phoneNumber }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.creationDate }}</td>
                <td>{{ u.isActivated }}</td>
                <td>{{ u.twoFactorEnabled }}</td>
                <td class="td_action w-1/12 text-sm">
                  <div class="dropdown px-2 py-2 bg-orange-50 w-20 rounded-md">
                    <button
                      class="btn_action dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul
                      class="dropdown-menu text-sm font-medium pl-3"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li
                        class="flex gap-x-4 py-1"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        data-dismiss="modal"
                        data-backdrop="false"
                        @click="opentModal('edit', u)"
                      >
                        <i class="bi bi-pencil text-base"></i>
                        <span>Edit</span>
                      </li>
                      <li class="flex gap-x-4 py-1" @click="ToggleDisable(u)">
                        <i class="bi bi-dash-circle text-base"></i>
                        <span>Disable</span>
                      </li>
                    </ul>
                  </div>
                </td>
                <modal
                  v-if="modalType == 'edit'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-semibold">
                      Edit User
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="pb-3 px-4 text-sm">
                      <div class="flex gap-x-6 mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Avatar</label
                        >
                        <div v-if="userModal.avatar">
                          <img
                            v-if="userModal.avatar"
                            :src="userModal.avatar"
                            alt="image"
                            for="imageUpload"
                          />
                          <img
                            v-else-if="url"
                            :src="url"
                            alt="image"
                            for="imageUpload"
                          />
                        </div>
                        <label
                          v-else
                          class="custum-file-upload"
                          for="imageUpload"
                        >
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
                        </label>
                        <div class="avatar_edit">
                          <div class="hidden">
                            <input
                              type="file"
                              name="avatar"
                              id="imageUpload"
                              accept="image/*, video/*"
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
                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >First Name</label
                        >
                        <input
                          v-model="userModal.firstName"
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
                          >Last Name</label
                        >
                        <div class="flex gap-x-2">
                          <input
                            v-model="userModal.lastName"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>

                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Dob</label
                        >
                        <div class="flex gap-x-2">
                          <input
                            v-model="userModal.doB"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Gender</label
                        >
                        <div class="flex gap-x-2">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="userModal.gender"
                          >
                            <option disabled>Choose gender option</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div
                      class="bg-yellow-900 rounded-md"
                      @click.prevent="HandleUpdate"
                    >
                      <span type="button" class="btn text-white"> Update </span>
                    </div>
                  </template>
                </modal>
              </tr>
            </tbody>
          </table>
        </div>
        <loadding v-else />
      </div>
      <div v-else>
        <div class="py-4" v-if="searchResults.length">
          <table class="table table-borderless text-yellow-950 font-medium">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Creation Date</th>
                <th>Is Activated</th>
                <th>Two Factor Enabled</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in searchResults" :key="u.userId">
                <td>
                  <div class="user flex gap-x-2">
                    <div class="avatar">
                      <router-link to="/profileManagement" v-if="u.avatar">
                        <img
                          class="rounded-md cursor-pointer"
                          :src="u.avatar"
                          alt="avatar"
                        />
                      </router-link>
                      <img
                        v-else
                        class="rounded-md cursor-pointer"
                        src="@/assets/images/avatar_default.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <span
                        class="block text-gray-800 text-hover-primary font-semibold mb-2"
                        >{{ u.firstName }} {{ u.lastName }}</span
                      >
                      <span class="email font-medium">{{ u.email }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ u.role }}</td>
                <td>{{ u.doB }}</td>
                <td>{{ u.gender }}</td>
                <td>{{ u.userName }}</td>
                <td>{{ u.phoneNumber }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.creationDate }}</td>
                <td>{{ u.isActivated }}</td>
                <td>{{ u.twoFactorEnabled }}</td>
                <td class="td_action w-1/12 text-sm">
                  <div class="dropdown px-2 py-2 bg-orange-50 w-20 rounded-md">
                    <button
                      class="btn_action dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul
                      class="dropdown-menu text-sm font-medium pl-3"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li
                        class="flex gap-x-4 py-1"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        data-dismiss="modal"
                        data-backdrop="false"
                        @click="opentModal('edit', u)"
                      >
                        <i class="bi bi-pencil text-base"></i>
                        <span>Edit</span>
                      </li>
                      <li class="flex gap-x-4 py-1" @click="ToggleDisable(u)">
                        <i class="bi bi-dash-circle text-base"></i>
                        <span>Disable</span>
                      </li>
                    </ul>
                  </div>
                </td>
                <modal
                  v-if="modalType == 'edit'"
                  @close="closeModal"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-semibold">
                      Edit User
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="pb-3 px-4 text-sm">
                      <div class="flex gap-x-6 mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Avatar</label
                        >
                        <div v-if="userModal.avatar">
                          <img
                            v-if="userModal.avatar"
                            :src="userModal.avatar"
                            alt="image"
                            for="imageUpload"
                          />
                          <img
                            v-else-if="url"
                            :src="url"
                            alt="image"
                            for="imageUpload"
                          />
                        </div>
                        <label
                          v-else
                          class="custum-file-upload"
                          for="imageUpload"
                        >
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
                        </label>
                        <div class="avatar_edit">
                          <div class="hidden">
                            <input
                              type="file"
                              name="avatar"
                              id="imageUpload"
                              accept="image/*, video/*"
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
                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >First Name</label
                        >
                        <input
                          v-model="userModal.firstName"
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
                          >Last Name</label
                        >
                        <div class="flex gap-x-2">
                          <input
                            v-model="userModal.lastName"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>

                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Dob</label
                        >
                        <div class="flex gap-x-2">
                          <input
                            v-model="userModal.doB"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Gender</label
                        >
                        <div class="flex gap-x-2">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="userModal.gender"
                          >
                            <option disabled>Choose gender option</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div
                      class="bg-yellow-900 rounded-md"
                      @click.prevent="HandleUpdate"
                    >
                      <span type="button" class="btn text-white"> Update </span>
                    </div>
                  </template>
                </modal>
              </tr>
            </tbody>
          </table>
        </div>
        <loadding v-else />
      </div>
    </div>
  </div>
  <p class="text-sm font-medium my-5 ml-2">Total users: {{ users.length }}</p>
</template>
<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import loadding from "@/components/loaddingAdmin.vue";
import { format } from "date-fns";

export default {
  props: {
    users: Array,
  },
  components: { alertError, alertSuccess, modal, loadding },
  data() {
    return {
      title: "Customer Account List",
      isEditModal: false,
      isDeleteModal: false,
      dob: "",
      modalType: null,
      firstNameModal: null,
      lastNameModal: null,
      dobModal: null,
      genderModal: null,
      avatarModal: null,
      isAlertSuccess: false,
      isAlertError: false,
      isAlertWanning: false,
      messageError: null,
      messageSuccess: null,
      messageWanning: null,
      searchResults: [],
      userModal: {},
      url: {},
    };
  },
  created() {},
  methods: {
    async opentModal(type, u) {
      this.modalType = type;
      this.userModal = u;
    },
    closeModal() {
      this.modalType = null;
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      if (this.file) {
        this.url = URL.createObjectURL(this.file);
      }
      console.log(event);
    },
    async HandleUpdate() {
      const formData = new FormData();
      formData.append("UserId", this.userModal.userId);
      formData.append("firstName", this.userModal.firstName);
      formData.append("lastName", this.userModal.lastName);
      formData.append("doB", this.userModal.doB);
      formData.append("gender", this.userModal.gender);
      formData.append("image", this.file);
      console.log(this.userModal.userId);
      try {
        const response = await axios.put("user/all/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 200) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Update user successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 3000);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleDisable(u) {
      try {
        await axios.put("shopOwner/accounts/disable", {
          userId: u.userId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async ToggleDisable(u) {
      try {
        const response = await axios.put(
          "shopOwner/accounts/disable?userId=" + u.userId
        );
        if (response.status === 200) {
          let successMessage = u.isActivated
            ? "Disable account successfully!"
            : "Active account successfully!";

          this.isAlertSuccess = true;
          this.messageSuccess = successMessage;

          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 3000);

          this.getAllUser();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async searchUser() {
      try {
        const response = await axios.get(
          "user/search?searchString=" + this.keyword
        );
        this.searchResults = response.data;
        for (let i = 0; i < this.searchResults.length; i++) {
          const date = new Date(this.searchResults[i].creationDate);
          const dob = new Date(this.searchResults[i].doB);
          this.searchResults[i].creationDate = format(date, "dd/MM/yyyy");
          this.searchResults[i].doB = format(dob, "dd/MM/yyyy");
        }
      } catch (error) {
        this.isAlertWanning = true;
        this.messageWanning = this.keyword + " not found";
        setTimeout(() => {
          this.isAlertWanning = false;
        }, 5000);
      }
    },
  },
};
</script>
<style scoped>
.bar li {
  padding-right: 10px;
}
.search .group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 225px;
}

.search .input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.search .input::placeholder {
  color: #9e9ea7;
}

.search .input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
svg .dashboard {
  margin-left: 28px;
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
  width: 65em;
}
table {
  overflow: scroll;
  width: 123em;
}
</style>
