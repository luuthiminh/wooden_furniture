<template>
  <header-admin :title="title" />
  <div class="bg-white mb-2 rounded-xl mt-32">
    <div class="pt-6 px-6 scroll">
      <div class="flex items-center justify-between">
        <div class="">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" class="input" />
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
        <div
          class="dropdown bg-orange-50 shadow-lg bg-orange-100/100 px-2 py-2 rounded-lg"
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
            <li>
              <a class="dropdown-item font-medium" href="#">Latest User</a>
            </li>
            <li>
              <a class="dropdown-item font-medium" href="#">Old User</a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="users.length">
        <div class="py-4">
          <table class="table table-borderless text-yellow-950 font-medium">
            <thead>
              <tr>
                <th>Id</th>
                <th>User</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Username</th>
                <th>Role</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Creation Date</th>
                <th>Is Activated</th>
                <th>Two Factor Enabled</th>
                <!-- <th>Debit</th>
                <th>Spent</th>
                <th>Point</th> -->
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in users" :key="u.userId">
                <td>{{ u.userId }}</td>
                <td>
                  <div class="user flex gap-x-2">
                    <div class="avatar">
                      <router-link to="/profileManagement">
                        <img
                          class="rounded-full cursor-pointer"
                          :src="u.avatar"
                          alt="avatar"
                        />
                      </router-link>
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
                <td>{{ u.role.result }}</td>
                <td>{{ u.phoneNumber }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.creationDate }}</td>
                <td>{{ u.isActivated }}</td>
                <td>{{ u.twoFactorEnabled }}</td>
                <!-- <td>{{ u.debit }}</td>
                <td>{{ u.spent }}</td>
                <td>{{ u.point }}</td> -->
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
                  <modal
                    v-if="modalType == 'edit'"
                    @close="modalType == null"
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
                          <div v-if="u.avatar">
                            <img
                              v-if="!url"
                              :src="u.avatar"
                              alt="image"
                              for="file"
                            />
                            <img
                              v-else-if="url"
                              :src="url"
                              alt="image"
                              for="file"
                            />
                          </div>
                          <label v-else class="custum-file-upload" for="file">
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
                            v-model="firstNameModal"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="addFurniture grid grid-cols-3 gap-x-6 mt-3">
                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium"
                              >Last Name</label
                            >
                            <div class="flex gap-x-2">
                              <input
                                v-model="lastNameModal"
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium"
                              >Dob</label
                            >
                            <div class="flex gap-x-2">
                              <input
                                v-model="dobModal"
                                type="date"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium"
                              >Gender</label
                            >
                            <div class="flex gap-x-2">
                              <input
                                v-model="genderModal"
                                type="number"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-slot:footer>
                      <div
                        class="bg-yellow-900 rounded-md"
                        @click.prevent="HandleUpdate"
                      >
                        <span type="button" class="btn text-white">
                          Update
                        </span>
                      </div>
                    </template>
                  </modal>
                  <modal
                    v-if="modalType == 'disable'"
                    @close="modalType == null"
                    data-target="#myModal"
                  >
                    <template v-slot:title>
                      <div class="flex items-center text-lg font-semibold">
                        Disable Account
                      </div>
                    </template>
                    <template v-slot:body>
                      <p class="text-base py-3">
                        Are you sure dsisable
                        <b> {{ u.firstName }} {{ u.lastName }} ?</b>
                      </p>
                    </template>
                    <template v-slot:footer>
                      <div class="bg-red-900 rounded-md">
                        <span
                          type="button"
                          class="btn text-white"
                          @click="HandleDelete(u)"
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
        </div>
      </div>
      <div v-else class="loader"></div>
    </div>
  </div>
  <p class="text-sm font-medium my-5 ml-2">Total users: {{ users.length }}</p>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";
import axios from "axios";
import { format } from "date-fns";
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";

export default {
  components: { HeaderAdmin, alertError, alertSuccess },
  data() {
    return {
      title: "Admin Account List",
      isEditModal: false,
      isDeleteModal: false,
      users: [],
      dob: "",
      modalType: null,
      firstNameModal: null,
      lastNameModal: null,
      dobModal: null,
      genderModal: null,
      avatarModal: null,
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    async getAllUser() {
      try {
        const response = await axios.get("user/all?roleId=3");
        if (response.status === 200) {
          this.users = response.data;
          for (let i = 0; i < this.users.length; i++) {
            const date = new Date(this.users[i].creationDate);
            const dob = new Date(this.users[i].doB);
            this.users[i].creationDate = format(date, "dd/MM/yyyy");
            this.users[i].doB = format(dob, "dd/MM/yyyy");
          }
        }
        console.log(this.dob);
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type, u) {
      this.modalType = type;
      this.firstNameModal = u.firstName;
      this.lastNameFurModal = u.lastNameModal;
      this.dobModal = u.doB;
      this.genderModal = u.gender;
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
  },
};
</script>
<style scoped>
.bar li {
  padding-right: 10px;
}
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 225px;
}

.input {
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

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
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
.pt-6.px-6::-webkit-scrollbar-track,
.table_order::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.pt-6.px-6::-webkit-scrollbar,
.table_order::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.pt-6.px-6::-webkit-scrollbar-thumb,
.table_order::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
table {
  overflow: scroll;
  width: 129em;
}
</style>
