<template>
  <header-admin :title="title" />
  <div class="bg-white mb-2 rounded-xl mt-32">
    <div class="header pt-6 px-6">
      <div class="absolute right-0">
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
              @input="searchCategory"
            />
          </div>
        </div>
        <div class="flex flex-cols-2 gap-x-3">
          <div
            class="dropdown bg-orange-50 shadow-lg bg-orange-100/50 px-2 py-2 rounded-lg"
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
          <div class="new member">
            <div
              class="dropdown bg-orange-50 shadow-lg bg-orange-100/50 px-2 py-2 rounded-lg"
            >
              <button
                class="flex"
                data-toggle="modal"
                data-target="#exampleModalLong"
                data-dismiss="modal"
                data-backdrop="false"
                @click="opentModal('add', 'null')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-5 h-1/6 mr-2 text-orange-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span class="text-orange-500 font-medium">New Furniture</span>
              </button>
            </div>
          </div>
          <modal
            v-if="modalType == 'add'"
            @close="modalType == null"
            data-target="#myModal"
          >
            <template v-slot:title>
              <h1 class="flex items-center text-lg font-semibold">
                Add New Furniture
              </h1>
            </template>
            <template v-slot:body>
              <div class="pb-3 px-4 text-sm">
                <div class="flex gap-x-6 mt-3">
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Image</label
                  >
                  <img v-if="url" :src="url" alt="image" class="w-6/12" />
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
                    <input type="file" id="file" @change="onFileChange" />
                  </label>
                </div>
                <div class="mt-3">
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Name Furniture</label
                  >
                  <input
                    v-model="furName"
                    type="email"
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
                      >Height</label
                    >
                    <div class="flex gap-x-2">
                      <input
                        v-model="height"
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                      <span class="font-medium flex items-center">m</span>
                    </div>
                  </div>

                  <div>
                    <label
                      for="exampleInputEmail1"
                      class="form-label font-medium"
                      >Width</label
                    >
                    <div class="flex gap-x-2">
                      <input
                        v-model="width"
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                      <span class="font-medium flex items-center">m</span>
                    </div>
                  </div>
                  <div>
                    <label
                      for="exampleInputEmail1"
                      class="form-label font-medium"
                      >Length</label
                    >
                    <div class="flex gap-x-2">
                      <input
                        v-model="length"
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                      <span class="font-medium flex items-center">m</span>
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Price</label
                  >
                  <input
                    v-model="price"
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div class="mt-3">
                  <label for="exampleInputEmail1" class="form-label font-medium"
                    >Description</label
                  >
                  <input
                    v-model="description"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div class="grid grid-cols-2 gap-x-4 mt-3">
                  <div>
                    <label
                      for="exampleInputEmail1"
                      class="form-label font-medium"
                      >Color</label
                    >
                    <select
                      v-if="colors.length"
                      v-model="color"
                      class="form-select text-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Choose label</option>
                      <option
                        v-for="co in colors"
                        :key="co.colorsId"
                        :value="co.colorsId"
                      >
                        {{ co.colorName }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="exampleInputEmail1"
                      class="form-label font-medium"
                      >Wood</label
                    >
                    <select
                      v-if="woods.length"
                      v-model="wood"
                      class="form-select text-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Choose Wood</option>
                      <option
                        v-for="w in woods"
                        :key="w.woodId"
                        :value="w.woodId"
                      >
                        {{ w.woodType }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </template>
            <template v-slot:footer>
              <div
                class="bg-yellow-900 rounded-md"
                data-dismiss="modal"
                @click.prevent="HandleAddFurniture"
              >
                <span type="button" class="btn text-white"> Add </span>
              </div>
            </template>
          </modal>
        </div>
      </div>
    </div>
    <div v-if="furnitureSpecifications.length">
      <div class="content_table pt-6 px-6 scroll">
        <div class="py-4">
          <table
            class="table table-borderless text-yellow-950 font-medium text-center"
          >
            <thead>
              <tr class="text-sm text-center">
                <th scope="col">Furniture</th>
                <th></th>
                <th scope="col">Height</th>
                <th scope="col">Width</th>
                <th scope="col">Length</th>
                <th scope="col">Color</th>
                <th scope="col">Wood</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Video</th>
                <th scope="col">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in furnitureSpecifications" :key="f.furnitureId">
                <td class="img">
                  <div v-for="im in f.images" :key="im">
                    <img :src="im.path" alt="furniture" class="w-20" />
                  </div>
                </td>
                <td class="text-start">
                  <p class="font-semibold">
                    {{ f.furnitureSpecificationName }}
                  </p>
                  <span class="text-xs">{{ f.furnitureSpecificationId }}</span>
                </td>
                <td>{{ f.height }}</td>
                <td>{{ f.width }}</td>
                <td>{{ f.length }}</td>
                <td>{{ f.color }}</td>
                <td>{{ f.wood }}</td>
                <td>${{ f.price }}</td>
                <td>{{ f.description }}</td>
                <td>{{ f.videos }}</td>
                <td>{{ f.feedbacks }}</td>
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
                        @click="opentModal('edit', f)"
                      >
                        <i class="bi bi-pencil text-base"></i>
                        <span>Edit</span>
                      </li>
                      <li
                        class="flex gap-x-4 py-1"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        data-dismiss="modal"
                        data-backdrop="false"
                        @click="opentModal('delete', f)"
                      >
                        <i class="bi bi-trash3 text-base"></i>
                        <span>Delete</span>
                      </li>
                    </ul>
                  </div>
                </td>
                <modal
                  v-if="modalType == 'furSpecification'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-medium">
                      Furniture Specification
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 px-4 text-sm">
                      <!-- <div class="flex gap-x-6 mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Image</label
                          >
                          <img v-if="url" :src="url" alt="image" class="w-6/12" />
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
                            <input type="file" id="file" @change="onFileChange" />
                          </label>
                        </div> -->
                      <div class="addFurniture grid grid-cols-2 gap-x-4">
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Name Furniture</label
                          >
                          <input
                            v-model="furNameModal"
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Height</label
                          >
                          <input
                            v-model="f.height"
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
                            class="form-label font-medium"
                            >Width</label
                          >
                          <input
                            v-model="width"
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
                            class="form-label font-medium"
                            >Length</label
                          >
                          <input
                            v-model="lengthModal"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-x-4 mt-3">
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Wood</label
                          >
                          <select
                            v-if="woods.length"
                            v-model="woodModal"
                            class="form-select text-sm"
                            aria-label="Default select example"
                          >
                            <option selected>{{ woodModal }}</option>
                            <option
                              v-for="w in woods"
                              :key="w.woodId"
                              :value="w.woodId"
                            >
                              {{ w.woodType }}
                            </option>
                          </select>
                        </div>
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Label</label
                          >
                          <select
                            v-if="labels.length"
                            v-model="labelModal"
                            class="form-select text-sm"
                            aria-label="Default select example"
                          >
                            <option selected>{{ labelModal }}</option>
                            <option
                              v-for="l in labels"
                              :key="l.labelId"
                              :value="l.labelId"
                            >
                              {{ l.labelName }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div
                      class="bg-yellow-900 rounded-md"
                      data-dismiss="modal"
                      @click.prevent="HandleUpdate"
                    >
                      <span type="button" class="btn text-white"> Update </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'edit'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <h1 class="flex items-center text-lg font-semibold">
                      Edit Furniture
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="pb-3 px-4 text-sm">
                      <div class="flex gap-x-6 mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Image</label
                        >
                        <div v-if="f.images">
                          <img
                            v-if="!url"
                            :src="f.images"
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
                          >Name Furniture</label
                        >
                        <input
                          v-model="f.furnitureName"
                          type="email"
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
                            >Height</label
                          >
                          <div class="flex gap-x-2">
                            <input
                              v-model="f.height"
                              type="number"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                            />
                            <span class="font-medium flex items-center">m</span>
                          </div>
                        </div>

                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Width</label
                          >
                          <div class="flex gap-x-2">
                            <input
                              v-model="f.width"
                              type="number"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                            />
                            <span class="font-medium flex items-center">m</span>
                          </div>
                        </div>
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Length</label
                          >
                          <div class="flex gap-x-2">
                            <input
                              v-model="f.length"
                              type="number"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                            />
                            <span class="font-medium flex items-center">m</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Price</label
                        >
                        <input
                          v-model="f.price"
                          type="number"
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
                          >Description</label
                        >
                        <input
                          v-model="f.description"
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div class="grid grid-cols-2 gap-x-4 mt-3">
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Color</label
                          >
                          <select
                            v-if="colors.length"
                            v-model="color"
                            class="form-select text-sm"
                            aria-label="Default select example"
                          >
                            <option selected>
                              Choose Color ({{ f.color }})
                            </option>
                            <option
                              v-for="co in colors"
                              :key="co.colorsId"
                              :value="co.colorsId"
                            >
                              {{ co.colorName }}
                            </option>
                          </select>
                        </div>
                        <div>
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Wood</label
                          >
                          <select
                            v-if="woods.length"
                            v-model="wood"
                            class="form-select text-sm"
                            aria-label="Default select example"
                          >
                            <option selected>Choose Wood{{ woodModal }}</option>
                            <option
                              v-for="w in woods"
                              :key="w.woodId"
                              :value="w.woodId"
                            >
                              {{ w.woodType }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div
                      class="bg-yellow-900 rounded-md"
                      data-dismiss="modal"
                      @click.prevent="HandleUpdate(f)"
                    >
                      <span type="button" class="btn text-white"> Update </span>
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
                      Are you sure detete
                      <b> {{ f.furnitureSpecificationName }} ?</b>
                    </p>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click="HandleDelete(f)"
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
      <p class="text-base font-medium mb-5 pl-6">
        Total users: {{ furnitureSpecifications.length }}
      </p>
    </div>
    <div v-else class="loader"></div>
  </div>
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
      furnitureModel: [],
      colors: [],
      woods: [],
      furnitureSpecifications: [],
      modalType: null,
      title: "Furniture Specifications",
      furIdSpeModal: null,
      url: null,
      file: null,
      urlFur: null,
    };
  },
  created() {
    this.getAllColors();
    this.getWoods();
    this.getFurnitureSpecification();
  },
  methods: {
    closeModal() {
      this.modalType = null;
    },
    async opentModal(type) {
      this.modalType = type;
    },
    async getFurnitureSpecification() {
      try {
        const response = await axios.get(
          "customer/furnitures/" + this.$route.params.id
        );
        this.furnitureSpecifications = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllColors() {
      try {
        const response = await axios.get("assistant/shop-data/colors");
        this.colors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getWoods() {
      try {
        const response = await axios.get("assistant/shop-data/woods");
        this.woods = response.data;
        console.log(response.data);
      } catch (error) {
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
    async HandleAddFurniture() {
      const formData = new FormData();
      formData.append("FurnitureSpecificationName", this.furName);
      formData.append("Height", this.height);
      formData.append("Width", this.width);
      formData.append("Length", this.length);
      formData.append("ColorId", this.color);
      formData.append("WoodId", this.wood);
      formData.append("Price", this.price);
      formData.append("Description", this.description);
      formData.append("UploadFiles", this.file);
      try {
        const response = await axios.post(
          "shopOwner/shop-data/furnitures/" + this.$route.params.id + "/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess = "Add new furniture successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getFurnitureSpecification();
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
    async HandleUpdate(f) {
      const formData = new FormData();
      formData.append("FurnitureSpecificationId", f.furnitureSpecificationId);
      formData.append("FurnitureSpecificationName", f.furnitureName);
      formData.append("Height", f.height);
      formData.append("Width", f.width);
      formData.append("Length", f.length);
      formData.append("ColorId", this.color);
      formData.append("WoodId", this.wood);
      formData.append("Price", f.price);
      formData.append("Description", f.description);
      formData.append("UploadFiles", this.file);
      try {
        const response = await axios.put(
          "shopOwner/shop-data/furnitures/" + this.$route.params.id + "/edit",
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
          this.messageSuccess = "Update " + f.furnitureName + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getFurnitureSpecification();
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
    async HandleDelete(f) {
      try {
        const response = await axios.delete(
          "shopOwner/shop-data/furnitures/" +
            this.$route.params.id +
            "/delete/" +
            f.furnitureSpecificationId
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          this.isAlertSuccess = true;
          this.messageSuccess = "Delete " + f.furnitureName + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getFurnitureSpecification();
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
.custum-file-upload {
  height: 200px;
  width: 300px;
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
</style>
