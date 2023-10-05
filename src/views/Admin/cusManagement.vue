<template>
  <header-admin :title="title" />
  <div class="bg-white mb-2 rounded-xl">
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

        <div
          class="dropdown bg-slate-300 shadow-lg bg-slate-300/100 px-2 py-2 rounded-lg"
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
              class="w-4 h-4 text-slate-500 mt-1 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>

            <span class="text-slate-500 font-medium">Filter</span>
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
      <div class="py-4">
        <table class="table table-borderless text-slate-500 font-medium">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DoB</th>
              <th>GENDER</th>
              <th>SPENT</th>
              <th>DEBIT</th>
              <th>CREATION DATE</th>
              <th>LATEST UPDATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileManagement">
                      <img
                        class="rounded-full cursor-pointer"
                        src="@/assets/images/avatar.jpg "
                        alt="avatar"
                      />
                    </router-link>
                  </div>
                  <div>
                    <span
                      class="block text-gray-800 text-hover-primary font-semibold mb-2"
                      >Name User</span
                    >
                    <span class="email font-medium">email@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>28/06/02</td>
              <td>Female</td>
              <td>$1000</td>
              <td>$0</td>
              <td>22/10/2023 10:10 am</td>
              <td>23/10/2023 10:10 am</td>
              <td class="td_action w-1/12 text-sm">
                <div class="dropdown px-2 py-2 bg-slate-100 w-20 rounded-md">
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      type="button"
                      class="font-medium text-slate-500 flex ml-4"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      @click.prevent="isShowEditModal = true"
                    >
                      <i class="bi bi-pen cursor-pointer pt-1"></i>
                      <p class="dropdown-item pl-3">Edit</p>
                      <modal
                        v-if="isShowEditModal"
                        @close="isShowEditModal = false"
                        data-target="#myModal"
                        class="absolute z-10"
                      >
                        <template v-slot:title>
                          <div class="flex items-center text-lg font-medium">
                            Edit Information Customer
                          </div>
                        </template>
                        <template v-slot:body>
                          <div class="py-1 px-4 text-sm">
                            <form @submit.prevent="">
                              <!-- <div class="grid grid-cols-2 gap-x-4"> -->
                              <div>
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label font-medium"
                                  >First Name</label
                                >
                                <input
                                  v-model="firstname"
                                  type="text"
                                  class="form-control"
                                  id="exampleInpuName1"
                                  aria-describedby="nameHelp"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label font-medium"
                                  >Last Name</label
                                >
                                <input
                                  v-model="lastname"
                                  type="text"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >DoB</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                  >Gender</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  required
                                />
                              </div>
                              <button type="submit" class="btn my-8">
                                Update
                              </button>
                            </form>
                          </div>
                        </template>
                        <template v-slot:footer>
                          <button
                            type="button"
                            class="btn btn-primary"
                            @click.prevent="saveChanges"
                          >
                            Save changes
                          </button>
                        </template>
                      </modal>
                    </li>

                    <!-- <li
                      class="font-medium text-slate-500 flex ml-4"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      @click.prevent="isShowEditModal = true"
                    >
                      <i
                        type="button"
                        class="bi bi-trash3 cursor-pointer pt-1"
                      ></i>
                      <p class="dropdown-item pl-3">Delete</p>
                      <modal
                        v-if="isShowEditModal"
                        @close="isShowEditModal = false"
                        data-target="#myModal"
                      >
                        <template v-slot:title>
                          <div class="flex items-center text-lg font-medium">
                            Edit Information Customer
                          </div>
                        </template>
                        <template v-slot:body> </template>
                        <template v-slot:footer>
                          <button
                            type="button"
                            class="btn btn-primary"
                            @click.prevent="saveChanges"
                          >
                            Save changes
                          </button>
                        </template>
                      </modal>
                    </li> -->
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p class="text-sm font-medium mb-5">Total users: 1</p>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";
import modal from "@/components/ModalPage.vue";
export default {
  components: { HeaderAdmin, modal },

  data() {
    return {
      isShowEditModal: false,
      title: "Customer Account List",
    };
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
  overflow-x: hidden;
  height: 60em;
}
</style>
