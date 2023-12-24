<template>
  <header-admin :title="title" />
  <div class="bg-white mb-2 rounded-xl mt-32">
    <div class="absolute right-0">
      <alert-Error v-if="isAlertError">
        <template v-slot:message>{{ messageError }}</template></alert-Error
      >
      <alert-success v-if="isAlertSuccess">
        <template v-slot:message>{{ messageSuccess }}</template>
      </alert-success>
    </div>

    <div class="header pt-6 px-6">
      <div class="flex items-center justify-between">
        <div class="flex flex-cols-2 gap-x-3">
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
                @change="searchSupplier"
              />
            </div>
          </div>
          <div class="absolute right-10">
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
                  <span class="text-orange-500 font-medium">New Supplier</span>
                </button>
              </div>
            </div>
            <modal
              v-if="modalType == 'add'"
              @close="isShowAddModal = false"
              data-target="#myModal"
            >
              <template v-slot:title>
                <h1 class="flex items-center text-lg font-semibold">
                  Add New Supplier
                </h1>
              </template>
              <template v-slot:body>
                <div class="pb-3 px-4 text-sm">
                  <form @submit.prevent="" class="">
                    <div class="flex gap-x-6 mt-3">
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
                      <div class="avatar_edit">
                        <div class="hidden">
                          <input
                            type="file"
                            name="avatar"
                            id="imageUpload"
                            accept=".png, .jpg, .jpeg"
                            :maxFileSize="1000000"
                            ref="file"
                            required
                            @change="onFileChange"
                          />
                          <p class="text-xs mt-1 font-mediudm ml-1 opacity-90">
                            You can upload image
                          </p>
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
                        >Name</label
                      >
                      <input
                        v-model="supName"
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                      <span class="text-xs text-slate-600 font-medium"
                        >Supplier name is unique</span
                      >
                    </div>
                    <div class="mt-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label font-medium"
                        >Email</label
                      >
                      <input
                        v-model="supEmail"
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
                        >Phone</label
                      >
                      <input
                        v-model="supPhone"
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        @change="validatePhone"
                      />
                      <span
                        v-if="!isPhoneError"
                        class="text-xs text-slate-600 font-medium"
                        >Phone number length must be equal 10 characters</span
                      >
                      <div v-else>
                        <span
                          v-if="phoneError"
                          class="error text-xs font-medium"
                          >{{ phoneError }}</span
                        >
                        <span
                          v-else
                          class="success text-xs text-slate-600 font-medium"
                          >{{ messagePhoneSuccess }}</span
                        >
                      </div>
                    </div>
                    <div class="addFurniture grid grid-cols-2 gap-x-4 mt-3">
                      <div>
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Province</label
                        >
                        <select
                          v-if="provinces"
                          v-model="province"
                          class="form-select text-sm"
                          aria-label="Default select example"
                          @change="handleDistrict"
                        >
                          <option disabled>Choose Province</option>
                          <option
                            v-for="p in provinces.data"
                            :key="p.ProvinceID"
                            :value="p.ProvinceID"
                            required
                          >
                            {{ p.ProvinceName }}
                          </option>
                        </select>
                        <span v-if="proviceError" class="error text-xs">{{
                          provinceError
                        }}</span>
                      </div>

                      <div>
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >District</label
                        >
                        <select
                          v-if="districts"
                          v-model="district"
                          class="form-select text-sm"
                          aria-label="Default select example"
                          @change="handleWard"
                        >
                          <option disabled>Choose District</option>
                          <option
                            v-for="d in districts.data"
                            :key="d.DistrictID"
                            :value="d.DistrictID"
                            required
                          >
                            {{ d.DistrictName }}
                          </option>
                        </select>
                        <span v-if="districtError" class="error text-xs">{{
                          districtError
                        }}</span>
                      </div>
                    </div>
                    <div class="addFurniture grid grid-cols-2 gap-x-4 mt-3">
                      <div>
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Ward</label
                        >
                        <select
                          v-if="ward"
                          v-model="WardCode"
                          class="form-select text-sm"
                          aria-label="Default select example"
                          @change="HandleChooseWard"
                        >
                          <option disabled>Choose Ward</option>
                          <option
                            v-for="w in ward.data"
                            :key="w.WardCode"
                            :value="w.WardCode"
                            required
                          >
                            {{ w.WardName }}
                          </option>
                        </select>
                        <span v-if="wardError" class="error text-xs">{{
                          wardError
                        }}</span>
                      </div>
                      <div>
                        <label
                          for="exampleInputEmail1"
                          class="form-label font-medium"
                          >Street</label
                        >
                        <input
                          v-model="supStreet"
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                          @input="validateStreet"
                        />
                        <span v-if="streetError" class="error text-xs">{{
                          streetError
                        }}</span>
                      </div>
                    </div>
                  </form>
                </div>
              </template>
              <template v-slot:footer>
                <div class="bg-yellow-900 rounded-md">
                  <span
                    type="button"
                    class="btn text-white"
                    data-dismiss="modal"
                    @click.prevent="HandleAdd"
                  >
                    Add
                  </span>
                </div>
              </template>
            </modal>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="searchResults.length || suppliers.length"
      class="content_table pt-6 px-6 scroll"
    >
      <div v-if="!searchResults.length" class="py-4">
        <table
          v-if="suppliers.length"
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead>
            <tr class="text-sm text-center">
              <th scope="col">Supplier</th>
              <!-- <th></th> -->
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Material</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="s in suppliers" :key="s.supplierId">
            <tr>
              <td class="img">
                <img :src="s.suplierImage" alt="suplierImage" class="w-20" />
              </td>

              <td class="text-start">
                <span class="font-semibold block">{{ s.supplierName }}</span>
                <span class="text-xs">{{ s.supplierId }}</span>
              </td>
              <td>{{ s.supplierAddress }}</td>
              <td>{{ s.suplierEmail }}</td>
              <td>{{ s.suplierPhoneNums }}</td>
              <td>
                <div v-for="m in s.materialProvided" :key="m.materialId">
                  {{ m.materialName }}
                </div>
              </td>

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
                      @click="opentModal('edit', s)"
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
                      @click="opentModal('delete', s)"
                    >
                      <i class="bi bi-trash3 text-base"></i>
                      <span>Delete</span>
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
                      Edit Supplier
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 px-4 text-sm text-left">
                      <form @submit.prevent="" class="">
                        <div class="flex gap-x-6 mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Image</label
                          >
                          <div v-if="s.suplierImage">
                            <img
                              v-if="!url"
                              :src="s.suplierImage"
                              alt="image"
                              class="w-8/12"
                            />
                            <img v-else :src="url" alt="image" class="w-8/12" />
                          </div>
                          <div v-else>
                            <div v-if="!url">
                              <label class="custum-file-upload" for="file">
                                <div class="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill=""
                                    viewBox="0 0 24 24"
                                  >
                                    <g
                                      stroke-width="0"
                                      id="SVGRepo_bgCarrier"
                                    ></g>
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
                                <input
                                  type="file"
                                  id="file"
                                  @change="onFileChange"
                                />
                              </label>
                            </div>
                            <img
                              v-else
                              :src="s.suplierImage"
                              alt="image"
                              class="w-8/12"
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
                        <div class="mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Name</label
                          >
                          <input
                            v-model="name"
                            type="email"
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
                            >Email</label
                          >
                          <input
                            v-model="email"
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
                            >Phone</label
                          >
                          <input
                            v-model="phone"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="addFurniture grid grid-cols-2 gap-x-4 mt-3">
                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium"
                              >Ward</label
                            >
                            <input
                              v-model="wardUpdate"
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
                              >Street</label
                            >
                            <input
                              v-model="streetUpdate"
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
                              >District</label
                            >
                            <input
                              v-model="districtUpdate"
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
                              >Province</label
                            >
                            <input
                              v-model="provinceUpdate"
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                            />
                          </div>
                        </div>
                      </form>
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
                      Are you sure detete <b> {{ s.supplierName }}</b
                      >?
                    </p>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        @click="HandleDelete(s)"
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
      <div v-else class="py-4">
        <table
          v-if="searchResults.length"
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead>
            <tr class="text-sm text-center">
              <th scope="col">Supplier</th>
              <!-- <th></th> -->
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Material</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="s in searchResults" :key="s.supplierId">
            <tr>
              <td class="img">
                <img :src="s.suplierImage" alt="suplierImage" class="w-20" />
              </td>

              <td class="text-start">
                <span class="font-semibold block">{{ s.supplierName }}</span>
                <span class="text-xs">{{ s.supplierId }}</span>
              </td>
              <td>{{ s.supplierAddress }}</td>
              <td>{{ s.suplierEmail }}</td>
              <td>{{ s.suplierPhoneNums }}</td>
              <td>
                <div v-for="m in s.materialProvided" :key="m.materialId">
                  {{ m.materialName }}
                </div>
              </td>

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
                      @click="opentModal('edit', s)"
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
                      @click="opentModal('delete', s)"
                    >
                      <i class="bi bi-trash3 text-base"></i>
                      <span>Delete</span>
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
                      Edit Supplier
                    </h1>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 px-4 text-sm text-left">
                      <form @submit.prevent="" class="">
                        <div class="flex gap-x-6 mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Image</label
                          >
                          <div v-if="s.suplierImage">
                            <div v-if="!url">
                              <img
                                :src="s.suplierImage"
                                alt="image"
                                class="w-8/12"
                              />
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
                            <img
                              v-else-if="url"
                              :src="url"
                              alt="image"
                              class="w-8/12"
                            />
                          </div>
                          <div v-else>
                            <label
                              v-if="!url"
                              class="custum-file-upload"
                              for="imageUpload"
                            >
                              <div class="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                >
                                  <g
                                    stroke-width="0"
                                    id="SVGRepo_bgCarrier"
                                  ></g>
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
                              <input
                                type="file"
                                id="file"
                                @change="onFileChange"
                              />
                            </label>
                            <img
                              v-else
                              :src="s.suplierImage"
                              alt="image"
                              class="w-8/12"
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
                        <div class="mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label font-medium"
                            >Name</label
                          >
                          <input
                            v-model="name"
                            type="email"
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
                            >Email</label
                          >
                          <input
                            v-model="email"
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
                            >Phone</label
                          >
                          <input
                            v-model="phone"
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="addFurniture grid grid-cols-2 gap-x-4 mt-3">
                          <div>
                            <label
                              for="exampleInputEmail1"
                              class="form-label font-medium"
                              >Ward</label
                            >
                            <input
                              v-model="wardUpdate"
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
                              >Street</label
                            >
                            <input
                              v-model="streetUpdate"
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
                              >District</label
                            >
                            <input
                              v-model="districtUpdate"
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
                              >Province</label
                            >
                            <input
                              v-model="provinceUpdate"
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                            />
                          </div>
                        </div>
                      </form>
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
                      Are you sure detete <b> {{ s.supplierName }}</b
                      >?
                    </p>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        @click="HandleDelete(s)"
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
  <p class="text-sm font-medium mb-5">
    Total suppliers: {{ suppliers.length }}
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
      isShowFurnitureSpecification: false,
      suppliers: [],
      furnitureModel: [],
      title: "All Suppliers",
      isAlertSuccess: false,
      isAlertError: false,
      messageError: null,
      messageSuccess: null,
      modalType: null,
      url: "",
      file: "",
      idSupModal: "",
      wardUpdate: "",
      streetUpdate: "",
      disctrictUpdate: "",
      provinceUpdate: "",
      name: "",
      urlImage: "",
      email: "",
      phone: "",
      searchResults: [],
      supModal: {},
      phoneError: "",
      isPhoneError: false,
      messagePhoneSuccess: "",
    };
  },
  created() {
    this.getSuppliers();
    this.getProvices();
  },
  methods: {
    async getSuppliers() {
      try {
        const response = await axios.get("shopOwner/shop-data/suppliers");
        this.suppliers = response.data;
        //Lấy value của từng thằng
        for (let i = 0; i < this.suppliers.length; i++) {
          this.wardUpdate = this.suppliers[i].supplierAddress
            .split(",")[0]
            .trim();
          this.streetUpdate = this.suppliers[i].supplierAddress
            .split(",")[1]
            .trim();
          this.districtUpdate = this.suppliers[i].supplierAddress
            .split(",")[2]
            .trim();
          this.provinceUpdate = this.suppliers[i].supplierAddress
            .split(",")[3]
            .trim();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type, s) {
      this.modalType = type;
      this.name = s.supplierName;
      this.urlImage = s.suplierImage;
      this.email = s.suplierEmail;
      this.phone = s.suplierPhoneNums;
      this.supModal = s;
    },
    closeModal() {
      this.modalType = null;
    },
    async showModal(furniture) {
      this.isShowFurnitureSpecification = true;
      try {
        const response = await axios.get(
          "customer/furnitures/" + furniture.furnitureId
        );
        this.furnitureModel = response.data;
        console.log(furniture);
      } catch (error) {
        console.error(error);
      }
    },
    validatePhone() {
      if (this.phone.length === 10) {
        this.isPhoneError = true;
        this.phoneError = "Phone number length must be equal 10 characters";
      } else {
        this.messagePhoneSuccess === "Phone number is vaild";
        this.isPhoneError = false;
      }
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      if (this.file) {
        this.url = URL.createObjectURL(this.file);
      }
      console.log(event);
    },
    async getProvices() {
      this.$store.dispatch("getProvices");
    },
    async handleDistrict(e) {
      this.$store.dispatch("handleDistrict", { e, province: this.province });
    },
    async handleWard(e) {
      this.$store.dispatch("handleWard", { e, district: this.district });
    },
    HandleChooseWard(e) {
      this.$store.dispatch("HandleChooseWard", e);
    },
    async HandleAdd() {
      const formData = new FormData();
      formData.append("SupplierName", this.supName);
      formData.append("Ward", this.$store.state.valuesWard);
      formData.append("Street", this.supStreet);
      formData.append("Provine", this.$store.state.valuesProvince);
      formData.append("District", this.$store.state.valuesDistrict);
      formData.append("SuplierImage", this.file);
      formData.append("SuplierEmail", this.supEmail);
      formData.append("SuplierPhoneNums", "0" + this.supPhone);
      try {
        const response = await axios.post(
          "shopOwner/shop-data/suppliers/add",
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
          this.messageSuccess = "Add new supplier successfully";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getSuppliers();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    async HandleUpdate() {
      const formData = new FormData();
      formData.append("supplierName", this.name);
      formData.append("ward", this.wardUpdate);
      formData.append("street", this.streetUpdate);
      formData.append("provine", this.provinceUpdate);
      formData.append("district", this.districtUpdate);
      formData.append("suplierEmail", this.email);
      formData.append("suplierPhoneNums", this.phone);
      if (this.file != null) {
        formData.append("supplierImage", this.file);
      } else formData.append("supplierImage", this.s.suplierImage);
      try {
        const response = await axios.put(
          "shopOwner/shop-data/suppliers/" + this.supModal.supplierId + "/edit",
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
          this.messageSuccess =
            "Update " + this.nameCollectionModal + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getSuppliers();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "shopOwner/shop-data/suppliers/" +
            this.supModal.supplierId +
            "/remove/"
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isAlertSuccess = true;
          this.messageSuccess =
            "Delete " + this.supModal.supplierName + " successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getSuppliers();
        }
      } catch (error) {
        this.isAlertError = true;
        this.messagerError = error;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
        console.error(error);
      }
    },
    async searchSupplier() {
      try {
        const response = await axios.get(
          "shopOwner/shop-data/suppliers/search?searchString=" + this.keyword
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
  },
  computed: {
    provinces() {
      return this.$store.state.provinces;
    },
    districts() {
      return this.$store.state.districts;
    },
    ward() {
      return this.$store.state.wards;
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
.form-control,
.form-select {
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
.search input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.search .icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
</style>
