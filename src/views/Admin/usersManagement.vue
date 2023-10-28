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
      <div class="py-4">
        <table class="table table-borderless text-yellow-950 font-medium">
          <thead>
            <tr>
              <th>USER</th>
              <th>ROLE</th>
              <th>JOINED DATE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                      class="flex gap-x-4"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click.prevent="isEditModal = true"
                    >
                      <i class="bi bi-pencil"></i>
                      <span>Edit</span>
                    </li>
                    <li
                      class="flex gap-x-4"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click.prevent="isDeleteModal = true"
                    >
                      <i class="bi bi-trash3"></i>
                      <span>Deltete</span>
                    </li>
                  </ul>
                </div>
                <modal
                  v-if="isEditModal"
                  @close="isEditModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-medium">
                      Edit Thi Furniture
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-1 px-4 text-sm">
                      <form @submit.prevent="">
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Name Furniture</label
                          >
                          <input
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
                            >Price</label
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
                          <label for="exampleInputEmail1" class="form-label"
                            >Category</label
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
                          <label for="exampleInputEmail1" class="form-label"
                            >Quantity</label
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
                          <label for="exampleInputEmail1" class="form-label"
                            >Material</label
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
                          <label for="exampleInputEmail1" class="form-label"
                            >Description</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="flex gap-x-3 mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label mt-10"
                            >Image</label
                          >
                          <div class="img flex">
                            <img
                              class="image_default pr-10"
                              src="@/assets/images/image_default.jpg"
                              alt="furniture"
                            />
                            <input
                              type="file"
                              id="myFile"
                              class="mt-10"
                              name="filename"
                            />
                          </div>
                        </div>
                        <button type="submit" class="btn my-8">Edit</button>
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
                <modal
                  v-if="isDeleteModal"
                  @close="isDeleteModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-medium">
                      Delete This Furniture
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-1 px-4 text-sm">
                      <h1>Are you sure delete this furniture?</h1>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="saveChanges"
                    >
                      Yes
                    </button>
                  </template>
                </modal>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
              <td class="td_action">
                <div class="dropdown px-2 py-2 bg-orange-50 w-20 rounded-md">
                  <button
                    class="btn_action dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
              <td class="td_action">
                <div class="dropdown px-2 py-2 bg-orange-50 w-20 rounded-md">
                  <button
                    class="btn_action dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul
                    class="dropdown-menu text-sm font-medium pl-3"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      class="flex gap-x-4"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click.prevent="isEditModal = true"
                    >
                      <i class="bi bi-pencil"></i>
                      <span>Edit</span>
                    </li>
                    <li
                      class="flex gap-x-4"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click.prevent="isDeleteModal = true"
                    >
                      <i class="bi bi-trash3"></i>
                      <span>Deltete</span>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user flex gap-x-2">
                  <div class="avatar">
                    <router-link to="/profileAssistant">
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
              <td>Administrator</td>
              <td>22/10/2023 10:10 am</td>
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
                    class="dropdown-menu text-sm font-medium"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item font-medium" href="#">Edit</a>
                    </li>
                    <li>
                      <a class="dropdown-item font-medium" href="#">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p class="text-sm font-medium my-5 ml-2">Total users: 5</p>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";

export default {
  components: { HeaderAdmin },
  data() {
    return {
      title: "User List",
      isEditModal: false,
      isDeleteModal: false,
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
  height: 35em;
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
</style>
